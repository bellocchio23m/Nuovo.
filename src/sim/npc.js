// NPC persistente: identità, agenda, stato fisico, relazioni, memoria, credenze.
// Tutto lo stato simulativo è serializzabile (niente closures/oggetti three).
// mesh è un riferimento volatile, escluso dal save e ricollegato al boot/load.
import { reviseAccidents } from './reassess.js';
export const MEMORY_CAP = 64;

// Relazioni tipizzate. bondOf = condivisione/incontro (i nemici valgono 0:
// mai candidati a gossip/socializzazione). infoFactorOf = attenuazione della
// confidence trasmessa nel passaparola. mournOf = secondi di lutto.
export const REL_TYPES = {
  family: 1.0, friend: 0.9, coworker: 0.85, neighbor: 0.8,
  acquaintance: 0.7, unknown: 0.6, enemy: 0
};
const MOURN_BASE = { family: 600, friend: 300, coworker: 150, neighbor: 150, acquaintance: 60 };

export function relTypeOf(npc, otherId) {
  return npc.relType?.[otherId] ?? ((npc.relations?.[otherId] ?? 0) > 0 ? 'acquaintance' : 'unknown');
}

export function bondOf(npc, otherId) {
  return relTypeOf(npc, otherId) === 'enemy' ? 0 : (npc.relations?.[otherId] ?? 0);
}

export function infoFactorOf(npc, otherId) {
  return REL_TYPES[relTypeOf(npc, otherId)] ?? 0.6;
}

// Lutto in secondi di gioco, 0 se nessun legame positivo (o se nemico).
export function mournOf(npc, subjectId) {
  if (!subjectId) return 0;
  const type = relTypeOf(npc, subjectId);
  if (type === 'enemy') return 0;
  const w = npc.relations?.[subjectId] ?? 0;
  if (w < 0.3) return 0;
  return MOURN_BASE[type] ?? 0;
}

// --- Memoria a livelli: nessun ricordo e' infinito. ---
// Tier: SHORT (rumori/fulgimi), NORMAL (fatti ordinari, muore con la credenza),
// SALIENT (gravissimo/vittima cara: sopravvive al prune della credenza ma con
// etta massima). Tutti i limiti sono fissi e deterministici: cap globale
// MEMORY_CAP, cap salienti, etta e potatura periodica.
export const MEM_TIER = { SHORT: 0, NORMAL: 1, SALIENT: 2 };
export const MEM_SHORT_AGE = 60;    // secondi di gioco
export const MEM_SALIENT_AGE = 900; // secondi di gioco (15 game-hour)
export const MEM_SALIENT_CAP = 12;  // max ricordi salienti per NPC

function tierFor(npc, evId) {
  const b = npc.beliefs.get(evId);
  if (!b) return MEM_TIER.NORMAL;
  if (b.severity >= 0.7) return MEM_TIER.SALIENT;
  if (b.channel === 'seen' && (b.kind === 'kill' || b.kind === 'found_corpse' || b.kind === 'assault')) {
    return MEM_TIER.SALIENT;
  }
  if (b.subject && mournOf(npc, b.subject) > 0) return MEM_TIER.SALIENT;
  if (b.kind === 'noise' || b.severity < 0.3) return MEM_TIER.SHORT;
  return MEM_TIER.NORMAL;
}

export function makeNpc(def, rng) {
  const trust = {};
  for (const k of Object.keys(def.relations ?? {})) trust[k] = 0.5;
  const npc = {
    id: def.id, name: def.name, color: def.color, role: def.role ?? 'civilian',
    x: def.x, z: def.z, yaw: 0, speed: 0,
    state: 'dwell', // idle|walk|dwell|alerted|curious|dead
    agenda: def.agenda.map(a => ({ ...a })), agendaIdx: 0, dwellLeft: 2,
    path: [], pathIdx: 0, fleeNode: null,
    gotoX: null, gotoZ: null, // destinazione diretta (curious/search, non da grafo)
    relations: { ...def.relations },   // id -> 0..1 (legame sociale)
    relType: { ...(def.relType ?? {}) }, // id -> family|friend|coworker|neighbor|enemy|acquaintance
    trust: trust,                       // id -> 0..1 (affidabilità informativa)
    home: def.home ?? null, work: def.work ?? null,     // identità stabile
    schedule: def.schedule ? def.schedule.map(s => ({ ...s })) : null, // blocchi orari
    agendaBlock: null, // blocco corrente applicato all'agenda (runtime, serializzato)
    memory: [],                        // id eventi con credenza attiva (cap FIFO)
    beliefs: new Map(),                // eventId -> belief (NON ground truth)
    level: 'L1',
    // fallback senza rng: 0 (deterministico). Mai Math.random nello stato simulativo.
    thinkAt: (rng ? rng.next() : 0) * 0.5,
    gossipAt: 0, talkT: 0, symbolAt: 0,
    gaze: {}, // evId -> secondi di fissazione (transiente, entro OBS_WINDOW)
    awareness: 0, // attenzione accumulata verso il PLAYER (0..1, v. awareness.js)
    alertedBy: null, alertT: -99,
    death: null, // {evId,t,px,pz,kind} quando ucciso: corpo persistente
    hidden: false, // cadavere OCCULTATO dal giocatore: scoperta solo ravvicinata
    routineShift: null, // {until,node} deviazione di routine (es. dopo un agguato)
    police: null,
    mesh: null
  };
  if (npc.role === 'police') npc.police = { state: 'UNAWARE', since: 0, searchX: 0, searchZ: 0, catchT: 0 };
  return npc;
}

export function memorize(npc, evId) {
  // una prova appena imparata puo' rivalutare credenze "incidente" già note
  const revised = reviseAccidents(npc, evId);
  for (const id of revised) {
    if (npc.memory.includes(id) && npc.memTier) npc.memTier[id] = tierFor(npc, id);
  }
  if (npc.memory.includes(evId)) return;
  if (!npc.memTier) npc.memTier = {};
  if (!npc.memAt) npc.memAt = {};
  npc.memTier[evId] = tierFor(npc, evId);
  // eta': tempo della credenza al primo apprendimento (nessun t esterno qui)
  npc.memAt[evId] = npc.beliefs.get(evId)?.t ?? 0;
  npc.memory.push(evId);
  // cap globale FIFO prioritario: si espelle prima i ricordi brevi, poi i
  // normali, poi i salienti piu vecchi (la memoria resta sempre limitata)
  if (npc.memory.length > MEMORY_CAP) {
    const drop = pickEvictions(npc, npc.memory.length - MEMORY_CAP);
    npc.memory = npc.memory.filter(id => !drop.has(id));
    // le mappe tier/eta si svuotano insieme: nessuna crescita fuori cap
    for (const id of drop) { delete npc.memTier[id]; delete npc.memAt[id]; }
  }
}

// Seleziona gli id da espellere per priorita' (tier breve -> eta').
function pickEvictions(npc, count) {
  const order = [...npc.memory].sort((a, b) =>
    ((npc.memTier[a] ?? MEM_TIER.NORMAL) - (npc.memTier[b] ?? MEM_TIER.NORMAL)) ||
    ((npc.memAt[a] ?? 0) - (npc.memAt[b] ?? 0)));
  return new Set(order.slice(0, count));
}

// Potatura deterministica chiamata dalla sim (cadenza fissa): aging per tier,
// allineamento con le credenze, cap salienti, cap globale. Rimuove anche le
// voci stale di memTier/memAt (nessuna mappa che cresce per sempre).
export function pruneMemory(npc, t) {
  if (!npc.memTier) npc.memTier = {};
  if (!npc.memAt) npc.memAt = {};
  const before = npc.memory.length;
  let kept = [];
  for (const id of npc.memory) {
    const tier = npc.memTier[id] ?? MEM_TIER.NORMAL;
    const age = t - (npc.memAt[id] ?? npc.beliefs.get(id)?.t ?? 0);
    const hasBelief = npc.beliefs.has(id);
    if (tier === MEM_TIER.SHORT && (!hasBelief || age > MEM_SHORT_AGE)) continue;
    if (tier === MEM_TIER.NORMAL && !hasBelief) continue;      // muore con la credenza
    if (tier === MEM_TIER.SALIENT && age > MEM_SALIENT_AGE) continue;
    kept.push(id);
  }
  // cap salienti: fuori i piu vecchi
  const sal = kept.filter(id => (npc.memTier[id] ?? MEM_TIER.NORMAL) === MEM_TIER.SALIENT);
  if (sal.length > MEM_SALIENT_CAP) {
    const oldest = new Set([...sal].sort((a, b) => (npc.memAt[a] ?? 0) - (npc.memAt[b] ?? 0))
      .slice(0, sal.length - MEM_SALIENT_CAP));
    kept = kept.filter(id => !oldest.has(id));
  }
  // cap globale: stessa priorita' di espulsione
  if (kept.length > MEMORY_CAP) {
    const drop = pickEvictions({ memory: kept, memTier: npc.memTier, memAt: npc.memAt }, kept.length - MEMORY_CAP);
    kept = kept.filter(id => !drop.has(id));
  }
  npc.memory = kept;
  // ripulizza le mappe: solo gli id ancora in memoria (niente growth)
  const alive = new Set(kept);
  for (const k of Object.keys(npc.memTier)) if (!alive.has(k)) delete npc.memTier[k];
  for (const k of Object.keys(npc.memAt)) if (!alive.has(k)) delete npc.memAt[k];
  return before - kept.length;
}

// NOTA: piena precisione float (niente toFixed): il replay deterministico
// richiede bit-identicità dopo il roundtrip. JSON preserva i double.
export function serializeNpc(n) {
  return {
    id: n.id, x: n.x, z: n.z, yaw: n.yaw, speed: n.speed,
    state: n.state, agendaIdx: n.agendaIdx, dwellLeft: n.dwellLeft,
    agenda: n.agenda.map(a => ({ ...a })), agendaBlock: n.agendaBlock ?? null,
    path: [...n.path], pathIdx: n.pathIdx, fleeNode: n.fleeNode,
    relations: { ...n.relations }, relType: { ...(n.relType ?? {}) },
    memory: [...n.memory],
    memTier: { ...(n.memTier ?? {}) }, memAt: { ...(n.memAt ?? {}) },
    trust: { ...n.trust },
    beliefs: [...n.beliefs.entries()].map(([k, b]) => [k, { ...b, provenance: [...b.provenance] }]),
    level: n.level, thinkAt: n.thinkAt,
    gossipAt: n.gossipAt, talkT: n.talkT ?? 0, symbolAt: n.symbolAt ?? 0,
    gaze: { ...(n.gaze ?? {}) },
    awareness: n.awareness ?? 0,
    alertedBy: n.alertedBy, alertT: n.alertT ?? -99,
    mournT: n.mournT ?? 0,
    death: n.death ? { ...n.death } : null,
    hidden: !!n.hidden,
    routineShift: n.routineShift ? { until: n.routineShift.until, node: n.routineShift.node } : null,
    police: n.police ? { ...n.police } : null,
    gotoX: n.gotoX, gotoZ: n.gotoZ
  };
}

export function restoreNpc(n, s) {
  n.x = s.x; n.z = s.z; n.yaw = s.yaw; n.speed = s.speed ?? 0;
  n.state = s.state; n.agendaIdx = s.agendaIdx; n.dwellLeft = s.dwellLeft;
  if (Array.isArray(s.agenda) && s.agenda.length) n.agenda = s.agenda.map(a => ({ ...a })); // v2 senza agenda: resta quella del roster
  n.path = [...(s.path ?? [])]; n.pathIdx = s.pathIdx ?? 0; n.fleeNode = s.fleeNode ?? null;
  n.relations = { ...s.relations };
  n.relType = { ...(s.relType ?? {}) }; // save v2 pre-relazioni: default vuoto
  n.agendaBlock = s.agendaBlock ?? null;
  n.memory = [...s.memory];
  n.memTier = { ...(s.memTier ?? {}) }; // save v2: nessun tier -> NORMAL
  n.memAt = { ...(s.memAt ?? {}) };
  n.trust = { ...(s.trust ?? {}) };
  n.beliefs = new Map((s.beliefs ?? []).map(([k, b]) => [k, { ...b, provenance: [...(b.provenance ?? [])] }]));
  n.level = s.level ?? 'L1'; n.thinkAt = s.thinkAt ?? 0;
  n.gossipAt = s.gossipAt ?? 0; n.talkT = s.talkT ?? 0; n.symbolAt = s.symbolAt ?? 0;
  n.gaze = { ...(s.gaze ?? {}) };
  n.awareness = s.awareness ?? 0;
  n.alertedBy = s.alertedBy; n.alertT = s.alertT ?? -99;
  n.mournT = s.mournT ?? 0;
  n.death = s.death ? { ...s.death } : null;
  n.hidden = !!s.hidden;
  n.routineShift = s.routineShift ? { until: s.routineShift.until, node: s.routineShift.node } : null;
  n.police = s.police ? { ...s.police } : (n.role === 'police' ? { state: 'UNAWARE', since: 0, searchX: 0, searchZ: 0, catchT: 0 } : null);
  n.gotoX = s.gotoX ?? null; n.gotoZ = s.gotoZ ?? null;
}
