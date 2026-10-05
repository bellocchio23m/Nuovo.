import { SAVE_VERSION } from '../core/events.js';
import { serializeNpc, restoreNpc } from '../sim/npc.js';
import { serializePlayer, restorePlayerExtra } from '../player/player.js';
import { restorePK } from '../sim/playerKnowledge.js';
import { migrateV1toV2 } from './migrate.js';

const DB = 'quartiere-p0', STORE = 'saves', KEY = 'slot0';

function openDb() {
  return new Promise((res, rej) => {
    const r = indexedDB.open(DB, SAVE_VERSION);
    r.onupgradeneeded = () => {
      if (!r.result.objectStoreNames.contains(STORE)) r.result.createObjectStore(STORE);
    };
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}

// --- LIVELLO PURO (nessun IndexedDB/DOM): serializza/ripristina lo stato
// completo del gioco. JSON-pura: il roundtrip JSON.stringify/parse deve essere
// identico, cosi' il test "save -> hard reload -> load -> continue" gira anche
// in Node (src/test/infra.js) oltre che nel browser.

export function serializeGame(game) {
  return {
    version: SAVE_VERSION,
    seed: game.seed, rngState: game.rng.state, t: game.sim.t,
    pruneAt: game.sim.pruneAt ?? 0,
    corpseAt: game.sim.corpseAt ?? 0,
    corpseReported: [...game.sim.corpseReported],
    player: serializePlayer(game.player),
    npcs: game.npcs.map(serializeNpc),
    journal: game.journal.serialize(),
    unseen: game.sim.unseen.map(e => e.id),
    pk: game.pk,
    interactables: game.interactables,
    caught: game.caught ?? false,
    // finestra temporale del contratto: solo budget (deriva da sim.t)
    contract: game.contract ? {
      targetId: game.contract.targetId, limit: game.contract.limit,
      startedAt: game.contract.startedAt ?? 0
    } : null,
    world: { packageTaken: !!game.worldFlags.packageTaken }
  };
}

// Ogni campo ha default sicuro: un save piu' vecchio o parziale non deve
// mai lanciare, deve solo ripristinare meno stato (best effort documentato).
export function applySave(game, d) {
  if (!d || typeof d !== 'object') return null;
  let s = d;
  if (s.version === 1) s = migrateV1toV2(jsonClone(s), s.journal?.events);
  if (s.version !== SAVE_VERSION) {
    throw new Error(`save v${s.version} non migrabile a v${SAVE_VERSION}`);
  }
  game.seed = s.seed ?? game.seed;
  if (s.rngState != null) game.rng.state = s.rngState;
  game.sim.t = s.t ?? 0;
  game.sim.pruneAt = s.pruneAt ?? 0;
  // default sicuro: scansione cadaveri NON subito dopo il load (la fase
  // esatta viene dal save; senza campo, si riparte da t senza burst iniziale)
  game.sim.corpseAt = s.corpseAt ?? (s.t ?? 0);
  game.sim.corpseReported = new Set(s.corpseReported ?? []);
  const p = s.player ?? {};
  game.player.x = p.x ?? game.player.x;
  game.player.z = p.z ?? game.player.z;
  game.player.yaw = p.yaw ?? game.player.yaw;
  restorePlayerExtra(game.player, p);
  const rostered = new Set(game.npcs.map(n => n.id));
  for (const st of s.npcs ?? []) {
    const n = game.npcs.find(n => n.id === st.id);
    if (n) restoreNpc(n, st);
  }
  // NPC nel save ma non nel roster (o viceversa): segnala, non crasha
  game.loadWarnings = [
    ...(s.npcs ?? []).filter(st => !rostered.has(st.id)).map(st => `npc-orfano:${st.id}`),
    ...game.npcs.filter(n => !(s.npcs ?? []).some(st => st.id === n.id)).map(n => `npc-mancante:${n.id}`)
  ];
  game.journal.restore(s.journal ?? { seq: 0, events: [] });
  if (s.pk && game.pk) restorePK(game.pk, s.pk);
  if (s.interactables && game.interactables) {
    for (const [k, v] of Object.entries(s.interactables)) {
      if (game.interactables[k]) game.interactables[k].state = v.state;
    }
    game.syncInteractables?.();
  }
  game.caught = s.caught ?? false;
  // contratto: default sicuro su save vecchi (nessun campo -> nessuna finestra)
  game.contract = s.contract
    ? { targetId: s.contract.targetId, limit: s.contract.limit, startedAt: s.contract.startedAt ?? 0 }
    : (game.contract ?? null);
  if (game.caught) game.ended = 'caught';
  // ripristina la coda unseen dagli id (eventi pubblicati subito prima del save)
  game.sim.unseen.length = 0;
  for (const id of s.unseen ?? []) {
    const ev = game.journal.byId(id);
    if (ev) game.sim.unseen.push(ev);
  }
  game.worldFlags.packageTaken = s.world?.packageTaken ?? true;
  return s;
}

function jsonClone(o) { return JSON.parse(JSON.stringify(o)); }

// --- LIVELLO STORAGE (IndexedDB): solo I/O, nessuna logica di stato.

// Lock: salvataggi concorrenti (autosave + manuale) si accodano, mai sovrapposti.
let saveChain = Promise.resolve();
export function saveGame(game) {
  const task = saveChain.then(() => doSave(game));
  saveChain = task.catch(() => {});
  return task;
}

async function doSave(game) {
  const data = serializeGame(game);
  data.savedAt = Date.now(); // metadata presentazionale: mai input simulativo
  const db = await openDb();
  await new Promise((res, rej) => {
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).put(data, KEY);
    tx.oncomplete = res; tx.onerror = () => rej(tx.error);
  });
  db.close();
  return data;
}

// Legge il save SENZA applicarlo (usato dal boot per il seed del continue).
export async function readSaveData() {
  try {
    const db = await openDb();
    const data = await new Promise((res, rej) => {
      const tx = db.transaction(STORE, 'readonly');
      const q = tx.objectStore(STORE).get(KEY);
      q.onsuccess = () => res(q.result); q.onerror = () => rej(q.error);
    });
    db.close();
    return data ?? null;
  } catch { return null; }
}

// Mantiene l'API esistente: loadGame(game) invariato; preload opzionale
// evita la doppia lettura IndexedDB nel boot.
export async function loadGame(game, preloaded) {
  const data = preloaded ?? await readSaveData();
  if (!data) return null;
  return applySave(game, data);
}

export async function hasSave() {
  try {
    const db = await openDb();
    const v = await new Promise((res) => {
      const tx = db.transaction(STORE, 'readonly');
      const q = tx.objectStore(STORE).get(KEY);
      q.onsuccess = () => res(q.result); q.onerror = () => res(null);
    });
    db.close();
    return !!v;
  } catch { return false; }
}
