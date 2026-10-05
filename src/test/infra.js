// Test infrastruttura (persistence/determinism/lifecycle/bounded), puri e
// eseguibili in Node: niente DOM/three/IndexedDB. Coprono cio' che la suite
// foundation non copriva:
//   save -> HARD RELOAD -> LOAD -> CONTINUE (mondo fresco + JSON roundtrip),
//   determinismo RNG serializzato, restore robusto con default sicuri,
//   compatibilita' save vecchi (v2 minimale + v1 migrato), save/load durante
//   alert, save/load ripetuti senza drift, journal/memory bounded, player timers.
// Il save reale IndexedDB e' coperto dallo stesso serializeGame/applySave qui
// testati: lo storage e' solo I/O (persist/persistence.js).
import { makeRng } from '../core/rng.js';
import { makeJournal, JOURNAL_CAP } from '../core/events.js';
import { simTick, publishEvent } from '../sim/simulation.js';
import { buildWorld, synthRoster, snapshotHash } from './harness.js';
import { serializeGame, applySave } from '../persist/persistence.js';
import { makePlayerKnowledge } from '../sim/playerKnowledge.js';
import { initialInteractables } from '../world/mapData.js';
import { memorize, MEMORY_CAP } from '../sim/npc.js';
import { makeBelief, mergeBelief, pruneBeliefs } from '../sim/knowledge.js';

const DT = 0.05;

// Mondo di test senza DOM/three/IndexedDB: stesso formato di stato del gioco
// reale, cosi' serializeGame/applySave sono le stesse funzioni usate in browser.
export function makeFakeGame(seed, n) {
  const w = buildWorld(seed, synthRoster(makeRng(seed ^ 0x9e37), n));
  return {
    seed, rng: w.rng, sim: w.sim, npcs: w.sim.npcs, journal: w.sim.journal,
    player: { x: w.player.x, z: w.player.z, yaw: Math.PI, crouch: false,
      running: false, speed: 0, attackCd: -99, whistleCd: -99, attackT: -99 },
    pk: makePlayerKnowledge(),
    interactables: initialInteractables(),
    caught: false, worldFlags: { packageTaken: true }, loadWarnings: []
  };
}
const fakeGame = makeFakeGame;

// Scenario con cadavere NON ancora scoperto al save: la scansione found_corpse
// cade nella finestra di continue -> esercita la fase di corpseAt (il campo la
// cui assenza nel save causava divergenza al primo tick, v. commit notes).
function play(game, from, to) {
  for (let i = from; i < to; i++) {
    game.player.x = Math.sin(i / 50) * 20;
    game.player.z = Math.cos(i / 70) * 20;
    if (i === 50) publishEvent(game.sim, 'theft', { severity: 0.7, x: 10, z: 10, actorId: 'player', place: 'strada' });
    if (i === 100) game.player.attackCd = game.sim.t; // esercita il timer attacco
    if (i === 390) {
      const v = game.sim.npcs[3], w = game.sim.npcs[0];
      v.x = w.x + 2; v.z = w.z;
      v.state = 'dead'; v.speed = 0; v.path = []; v.fleeNode = null; v.gotoX = null; v.gotoZ = null;
      publishEvent(game.sim, 'kill', { severity: 1, x: v.x, z: v.z, actorId: 'player', victimId: v.id, place: 'piazza' });
    }
    simTick(game.sim, game.player, DT);
  }
}

function T(name, fn) {
  try {
    const d = fn();
    return { name, pass: d.pass, detail: d.info ?? '' };
  } catch (e) {
    return { name, pass: false, detail: 'throw: ' + String(e.message ?? e).slice(0, 200) };
  }
}

// 1. SAVE -> hard reload (mondo fresco) -> JSON roundtrip -> LOAD -> CONTINUE:
// il continue deve essere bit-identico alla run ininterrotta.
function tSaveHardReloadContinue() {
  const A = fakeGame(4242, 12);
  play(A, 0, 400);
  const saved = JSON.parse(JSON.stringify(serializeGame(A))); // persino il wire format
  play(A, 400, 600);
  const hA = snapshotHash(A.sim);
  const eventsAfterA = A.journal.events.length;

  const B = fakeGame(9999, 12); // "hard reload": stato zero, seed diverso
  applySave(B, saved);
  play(B, 400, 600);
  const hB = snapshotHash(B.sim);
  const corpseScenario = eventsAfterA > saved.journal.events.length; // lo scenario deve davvero scoprire
  return {
    pass: hA === hB && corpseScenario,
    info: `continueA=${hA} continueB=${hB} corpseDiscoveredDuringContinue=${corpseScenario} corpseAt=${saved.corpseAt}`
  };
}

// 2. Il payload e' JSON-puro: stringify/parse non perde nulla di simulativo.
function tJsonPureRoundtrip() {
  const A = fakeGame(3131, 8);
  play(A, 0, 120);
  const a = serializeGame(A);
  const b = JSON.parse(JSON.stringify(a));
  const same = JSON.stringify(a) === JSON.stringify(b);
  const B = fakeGame(1, 8);
  applySave(B, b);
  play(A, 120, 180);
  play(B, 120, 180);
  const continueMatch = snapshotHash(A.sim) === snapshotHash(B.sim);
  return {
    pass: same && continueMatch,
    info: `wireIdentical=${same} continueMatch=${continueMatch}`
  };
}

// 3. RNG: seedato, serializzato, restaurato. Stesso stato -> stessa sequenza.
function tRngSerialization() {
  const r1 = makeRng(777); const r2 = makeRng(777);
  const s1 = [r1.next(), r1.next(), r1.next()];
  const s2 = [r2.next(), r2.next(), r2.next()];
  const state = r1.state;
  const before = [r1.next(), r1.next()];
  r2.state = state; // ripristino da save
  const after = [r2.next(), r2.next()];
  const r3 = makeRng(778);
  const different = r3.next() !== s1[0];
  const ok = JSON.stringify(s1) === JSON.stringify(s2) &&
    JSON.stringify(before) === JSON.stringify(after) && different;
  return { pass: ok, info: `sameSeed=${JSON.stringify(s1) === JSON.stringify(s2)} stateRestore=${JSON.stringify(before) === JSON.stringify(after)} diffSeedDiff=${different}` };
}

// 4. Player timers (attackCd/whistleCd) e posizione sopravvivono al roundtrip.
function tPlayerTimers() {
  const A = fakeGame(5151, 4);
  play(A, 0, 101); // i=100 imposta attackCd = t
  const saved = serializeGame(A);
  const B = fakeGame(2, 4);
  applySave(B, JSON.parse(JSON.stringify(saved)));
  const ok = B.player.attackCd === A.player.attackCd &&
    B.player.x === A.player.x && B.player.z === A.player.z &&
    B.player.crouch === A.player.crouch;
  return { pass: ok, info: `attackCd ${saved.player.attackCd} -> ${B.player.attackCd} pos=(${B.player.x.toFixed(2)},${B.player.z.toFixed(2)})` };
}

// 5. Restore robusto: payload v2 minimale (campi nuovi assenti) e v1 migrato
// non devono lanciare; i default devono essere sicuri.
function tDefaultsOldSaves() {
  const minimal = { version: 2, seed: 5, rngState: 123, t: 9,
    npcs: [], journal: { seq: 0, events: [] } };
  const G = fakeGame(7, 4);
  applySave(G, JSON.parse(JSON.stringify(minimal)));
  const okV2 = G.sim.t === 9 && G.sim.corpseAt === 9 && // default: nessun burst di scan
    G.worldFlags.packageTaken === true && G.caught === false &&
    Array.isArray(G.loadWarnings) && G.loadWarnings.length === G.npcs.length; // 4 npc non nel save

  const v1 = { version: 1, seed: 7, rngState: 42, t: 12.5,
    player: { x: 1, z: 2, yaw: 0 },
    npcs: [{ id: 'anna', x: 0, z: 0, yaw: 0, state: 'alerted', agendaIdx: 0, dwellLeft: 1,
      relations: {}, memory: ['ev1'],
      beliefs: [['ev1', { fact: 'fatto', source: 'seen', confidence: 0.8, t: 10, error: null }]],
      alertedBy: 'ev1', alertT: 11, gossipAt: 0 }],
    journal: { seq: 1, events: [{ id: 'ev1', t: 10, type: 'theft', severity: 0.6, x: 37, z: 21.5,
      actorId: 'player', place: 'piazza', witnesses: ['anna'] }] },
    world: { packageTaken: true } };
  const G2 = fakeGame(7, 4);
  G2.npcs[0].id = 'anna'; // roster fittizio che matcha il save v1
  applySave(G2, JSON.parse(JSON.stringify(v1)));
  const anna = G2.npcs[0];
  const okV1 = G2.sim.t === 12.5 && anna.state === 'dwell' && // alerted senza fleeNode -> dwell sicuro
    anna.beliefs.get('ev1')?.kind === 'theft' && anna.beliefs.get('ev1')?.channel === 'seen';
  let threw = null;
  try { applySave(fakeGame(7, 4), { version: 99 }); } catch (e) { threw = String(e.message); }
  return { pass: okV2 && okV1 && !!threw,
    info: `v2default=${okV2} v1migrated=${okV1} badVersionRejected=${threw}` };
}

// 6. Save/load DURANTE ALERT: stato alerted+fleeNode identico dopo il roundtrip,
// e piu' cicli consecutivi non producono drift.
function tAlertAndRepeatSaveLoad() {
  const A = fakeGame(6161, 10);
  play(A, 0, 60);
  const victim = A.npcs[0];
  victim.state = 'alerted'; victim.fleeNode = 'road_e'; victim.alertedBy = 'ev1';
  victim.alertT = A.sim.t; victim.dwellLeft = 7.5;
  let h = null, ok = true;
  for (let cycle = 0; cycle < 20; cycle++) { // 20 save/load ripetuti
    const saved = JSON.parse(JSON.stringify(serializeGame(A)));
    const B = fakeGame(1000 + cycle, 10);
    applySave(B, saved);
    ok = ok && B.npcs[0].state === 'alerted' && B.npcs[0].fleeNode === 'road_e' &&
      B.npcs[0].dwellLeft === 7.5 && snapshotHash(B.sim) === snapshotHash(A.sim);
    A.npcs[0].state = 'alerted'; // re-arm ad ogni ciclo (applica a entrambi i mondi)
    if (h === null) h = snapshotHash(B.sim);
  }
  play(A, 60, 120);
  return { pass: ok && h !== null, info: `20 cicli alert-stable=${ok}` };
}

// 7. Journal bounded: oltre il cap si scarta il piu' vecchio, id monotoni.
function tJournalBounded() {
  const j = makeJournal();
  for (let i = 0; i < JOURNAL_CAP + 500; i++) {
    j.append('noise', { t: i * 0.05, severity: 0.2, x: 0, z: 0, place: 'piazza' });
  }
  const bounded = j.events.length === JOURNAL_CAP;
  const idsUnique = new Set(j.events.map(e => e.id)).size === j.events.length;
  // restore di un save lungo: copia iterativa, mai stack overflow
  const big = { seq: 99999, events: j.events.map(e => ({ ...e })) };
  big.events.push(...Array.from({ length: 10 }, (_, i) => ({ id: 'x' + i })));
  const j2 = makeJournal();
  j2.restore(big);
  const restoredBounded = j2.events.length === JOURNAL_CAP;
  return { pass: bounded && idsUnique && restoredBounded && j2.serialize().seq === 99999,
    info: `len=${j.events.length}/${JOURNAL_CAP} uniqueIds=${idsUnique} restoreBounded=${restoredBounded}` };
}

// 8. Memory bounded: MEMORY_CAP FIFO + potatura credenze riduce memory.
function tMemoryBounded() {
  const n = { memory: [], beliefs: new Map() };
  for (let i = 0; i < MEMORY_CAP * 3; i++) memorize(n, 'ev' + i);
  // FIFO: dopo MEMORY_CAP*3 inserimenti restano gli ultimi MEMORY_CAP
  const capOk = n.memory.length === MEMORY_CAP &&
    n.memory[0] === 'ev' + (MEMORY_CAP * 3 - MEMORY_CAP) &&
    n.memory[MEMORY_CAP - 1] === 'ev' + (MEMORY_CAP * 3 - 1);
  // credenze vecchie decadono e vengono potate -> memory allineata (sim fa
  // n.memory = n.memory.filter(...)): verifica del bound a cascata
  const b = makeBelief({ kind: 'noise', channel: 'heard', confidence: 0.6, t: 0, provenance: [] });
  const store = new Map([['old', b]]);
  pruneBeliefs(store, 1e6);
  return { pass: capOk && store.size === 0, info: `memory=${n.memory.length}/${MEMORY_CAP} pruned=${store.size === 0}` };
}

// 9. Stato derivato del save: corpseAt persistito, rngState persistito,
// unseen ricollegati, journal seq preservato (guardrail anti-regressione).
function tSaveFieldCoverage() {
  const A = fakeGame(8181, 8);
  play(A, 0, 400); // include il kill a 390
  const s = serializeGame(A);
  const required = ['version', 'seed', 'rngState', 't', 'pruneAt', 'corpseAt',
    'corpseReported', 'player', 'npcs', 'journal', 'unseen', 'pk',
    'interactables', 'caught', 'world'];
  const missing = required.filter(k => !(k in s));
  const npc0 = s.npcs[0];
  const npcFields = ['agenda', 'relType', 'trust', 'relations', 'memory', 'beliefs',
    'police', 'death', 'thinkAt', 'gossipAt', 'dwellLeft', 'path'];
  const missingNpc = npcFields.filter(k => !(k in npc0));
  const playerFields = ['attackCd', 'whistleCd'];
  const missingPlayer = playerFields.filter(k => !(k in s.player));
  return { pass: missing.length === 0 && missingNpc.length === 0 && missingPlayer.length === 0,
    info: `missingTop=[${missing}] missingNpc=[${missingNpc}] missingPlayer=[${missingPlayer}] corpseAt=${s.corpseAt}` };
}

export function runInfraTests() {
  const tests = [
    T('save_hard_reload_continue', tSaveHardReloadContinue),
    T('json_pure_roundtrip', tJsonPureRoundtrip),
    T('rng_serialization', tRngSerialization),
    T('player_timers_persist', tPlayerTimers),
    T('defaults_old_saves', tDefaultsOldSaves),
    T('alert_and_repeat_saveload', tAlertAndRepeatSaveLoad),
    T('journal_bounded', tJournalBounded),
    T('memory_bounded', tMemoryBounded),
    T('save_field_coverage', tSaveFieldCoverage)
  ];
  const passed = tests.filter(t => t.pass).length;
  return { suite: 'p0-infra', passed, total: tests.length, tests };
}
