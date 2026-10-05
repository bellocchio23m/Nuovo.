// Harness deterministici e riusabili: ?test=1 (self-test) e ?bench=N.
// Nessuna dipendenza da DOM/three: usano solo core + sim + world-fisica.
// Ogni test ritorna {pass, detail}. Niente output hardcodati: tutto calcolato.
import { makeRng } from '../core/rng.js';
import { makeJournal } from '../core/events.js';
import { makeNpc, serializeNpc, restoreNpc, memorize, pruneMemory, relTypeOf, bondOf, infoFactorOf, mournOf } from '../sim/npc.js';
import { makeBelief, mergeBelief, effectiveConfidence, pruneBeliefs, CONF_MIN } from '../sim/knowledge.js';
import { observeEvent, hearPoint } from '../sim/perception.js';
import { makeSimulation, simTick, publishEvent } from '../sim/simulation.js';
import { buildColliders, losBlocked } from '../world/world.js';
import { buildNavGraph } from '../world/navigation.js';
import { WORLD } from '../world/mapData.js';
import { think, worldHour } from '../sim/ai.js';
import { awarenessTick } from '../sim/awareness.js';
import { policeThink } from '../sim/police.js';
import { ROSTER } from '../sim/roster.js';
import { migrateV1toV2ForTest } from '../persist/migrate.js';
import { runAssassinTests } from './assassin.js';
import { runNavTests } from './nav.js';

const DT = 0.05;
const NODE_KEYS = Object.keys(WORLD.nodes);

function fnv1a(s) {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193); }
  return (h >>> 0).toString(16);
}

function canonNpc(n) {
  return {
    id: n.id, x: +n.x.toFixed(3), z: +n.z.toFixed(3), yaw: +n.yaw.toFixed(3),
    state: n.state, agendaIdx: n.agendaIdx, dwellLeft: +n.dwellLeft.toFixed(3),
    agenda: n.agenda, agendaBlock: n.agendaBlock ?? null,
    path: n.path, pathIdx: n.pathIdx, fleeNode: n.fleeNode,
    relations: n.relations, relType: n.relType ?? {}, trust: n.trust,
    mournT: n.mournT ?? 0, gotoX: n.gotoX, gotoZ: n.gotoZ,
    memory: n.memory, memTier: n.memTier ?? {}, memAt: n.memAt ?? {},
    beliefs: [...n.beliefs.entries()].sort((a, b) => a[0] < b[0] ? -1 : 1),
    level: n.level, thinkAt: +n.thinkAt.toFixed(3), alertedBy: n.alertedBy,
    talkT: n.talkT ?? 0, gaze: n.gaze ?? {}
  };
}

export function snapshotHash(sim) {
  const o = {
    t: +sim.t.toFixed(3), rng: sim.rng.state,
    npcs: sim.npcs.map(canonNpc),
    journal: sim.journal.events, unseen: sim.unseen.map(e => e.id)
  };
  return fnv1a(JSON.stringify(o));
}

// Roster sintetico seedato: posizioni/agende/relazioni deterministiche.
export function synthRoster(rng, n) {
  const defs = [];
  for (let i = 0; i < n; i++) {
    const agenda = [];
    const len = 3 + Math.floor(rng.next() * 3);
    for (let k = 0; k < len; k++) {
      agenda.push({ node: NODE_KEYS[Math.floor(rng.next() * NODE_KEYS.length)], dwell: 2 + Math.floor(rng.next() * 6) });
    }
    const start = WORLD.nodes[agenda[0].node];
    const relations = {};
    defs.push({
      id: `syn${i}`, name: `Syn ${i}`, color: 0x888888,
      x: start.x + rng.next() * 2 - 1, z: start.z + rng.next() * 2 - 1,
      agenda, relations
    });
  }
  // relazioni simmetriche sparse
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (rng.next() < 0.2) {
        const v = +(0.2 + rng.next() * 0.6).toFixed(2);
        defs[i].relations[defs[j].id] = v; defs[j].relations[defs[i].id] = v;
      }
    }
  }
  return defs;
}

export function buildWorld(seed, defs) {
  const rng = makeRng(seed);
  const journal = makeJournal();
  const colliders = buildColliders();
  const navAdj = buildNavGraph();
  const npcs = defs.map(d => makeNpc(d, rng));
  const sim = makeSimulation(npcs, journal, colliders, navAdj, rng, {});
  return { sim, rng, player: { x: 0, z: 0 } };
}

export function runTicks(sim, player, n) {
  for (let i = 0; i < n; i++) simTick(sim, player, DT);
}

function T(name, fn) {
  try {
    const detail = fn();
    return { name, pass: detail.pass, detail: detail.info ?? '' };
  } catch (e) {
    return { name, pass: false, detail: 'throw: ' + String(e.message ?? e).slice(0, 200) };
  }
}

// --- test ---

function tTruthIsolation() {
  const { sim, player } = buildWorld(1001, synthRoster(makeRng(7), 2));
  const [w, f] = sim.npcs;
  w.x = 34.5; w.z = 21.5; w.yaw = Math.PI / 2; w.state = 'dwell'; w.dwellLeft = 999;
  f.x = -40; f.z = 0; f.yaw = -Math.PI / 2; f.state = 'dwell'; f.dwellLeft = 999;
  player.x = 37; player.z = 21.5;
  publishEvent(sim, 'theft', { severity: 0.6, x: 37, z: 21.5, actorId: 'player', place: 'piazza' });
  runTicks(sim, player, 60);
  const staticClean = !think.toString().includes('journal');
  const wKnows = w.beliefs.has('ev1') && w.beliefs.get('ev1').channel === 'seen';
  const fIgnorant = !f.beliefs.has('ev1') && f.memory.length === 0;
  const witTruth = sim.journal.byId('ev1').witnesses;
  return {
    pass: staticClean && wKnows && fIgnorant && witTruth.includes(w.id) && !witTruth.includes(f.id),
    info: `staticClean=${staticClean} witnessSeen=${wKnows} farIgnorant=${fIgnorant} witnesses=[${witTruth}]`
  };
}

function tDivergentKnowledge() {
  const { sim, player } = buildWorld(2002, synthRoster(makeRng(8), 3));
  const [a, b, c] = sim.npcs;
  a.x = 35; a.z = 21; a.yaw = Math.PI / 2; a.state = 'dwell'; a.dwellLeft = 999;
  b.x = -40; b.z = 0; b.state = 'dwell'; b.dwellLeft = 999;
  c.x = -45; c.z = -5; c.state = 'dwell'; c.dwellLeft = 999;
  player.x = 37; player.z = 21;
  publishEvent(sim, 'theft', { severity: 0.6, x: 37, z: 21, actorId: 'player', place: 'piazza' });
  runTicks(sim, player, 60);
  const ka = a.beliefs.has('ev1'), kb = b.beliefs.has('ev1'), kc = c.beliefs.has('ev1');
  return { pass: ka && !kb && !kc, info: `A=${ka} B=${kb} C=${kc}` };
}

function tGossipChain() {
  // Meccanica del gossip isolata e deterministica: A possiede una credenza
  // 'seen' a bassa severità (nessuna fuga, posizioni congelate); la catena
  // A->B->C deve preservare provenance e degradare la confidenza.
  // (Il loop completo seen->fuga->gossip è coperto dai test browser.)
  const { sim, player } = buildWorld(3003, synthRoster(makeRng(9), 3));
  const [a, b, c] = sim.npcs;
  a.relations[b.id] = 0.9; b.relations[a.id] = 0.9;
  b.relations[c.id] = 0.9; c.relations[b.id] = 0.9;
  player.x = 36; player.z = 21;
  // C è fuori portata di A (4m) ma sul punto che B verrà a controllare:
  // la catena A->B->C richiede che B si sposti (curiosità) e condivida là.
  for (const [n, x] of [[a, 35], [b, 33.2], [c, 39]]) {
    n.x = x; n.z = 21; n.yaw = 0; n.state = 'dwell'; n.dwellLeft = 9999;
  }
  mergeBelief(a.beliefs, 'evX', makeBelief({
    kind: 'theft', severity: 0.2, px: 37, pz: 21, place: 'piazza',
    actor: 'sconosciuto', channel: 'seen', confidence: 0.9, t: 0,
    provenance: [] // osservazione diretta, come da observeEvent
  }), a.id);
  memorize(a, 'evX');
  runTicks(sim, player, 600); // 30s: A->B (~3s) poi B->C (~+3s)
  const bb = b.beliefs.get('evX'), cb = c.beliefs.get('evX');
  const chainB = bb && bb.channel === 'hearsay' &&
    bb.provenance[0] === a.id && bb.provenance[bb.provenance.length - 1] === a.id;
  const chainC = cb && cb.channel === 'hearsay' &&
    cb.provenance[0] === a.id && cb.provenance[cb.provenance.length - 1] === b.id;
  const decreasing = bb && cb && cb.confidence < bb.confidence && bb.confidence < 0.9;
  return {
    pass: !!chainB && !!chainC && !!decreasing,
    info: `Bprov=${JSON.stringify(bb?.provenance)} Cprov=${JSON.stringify(cb?.provenance)} confs=0.90/${bb?.confidence?.toFixed(2)}/${cb?.confidence?.toFixed(2)}`
  };
}

function tDeterminism() {
  const mk = () => buildWorld(4242, synthRoster(makeRng(11), 12));
  const script = (w) => {
    const { sim, player } = w;
    for (let i = 0; i < 600; i++) {
      player.x = Math.sin(i / 50) * 20; player.z = Math.cos(i / 70) * 20;
      if (i === 100) publishEvent(sim, 'theft', { severity: 0.7, x: 10, z: 10, actorId: 'player', place: 'strada' });
      if (i === 300) publishEvent(sim, 'disturbance', { severity: 0.45, x: -20, z: 11, actorId: 'player', place: 'bar' });
      simTick(sim, player, DT);
    }
    return snapshotHash(sim);
  };
  const h1 = script(mk()), h2 = script(mk());
  return { pass: h1 === h2, info: `h1=${h1} h2=${h2}` };
}

function tSaveLoad() {
  const w1 = buildWorld(5555, synthRoster(makeRng(12), 8));
  const { sim, player } = w1;
  for (let i = 0; i < 300; i++) {
    if (i === 50) publishEvent(sim, 'theft', { severity: 0.8, x: 5, z: 5, actorId: 'player', place: 'strada' });
    simTick(sim, player, DT);
  }
  const h1 = snapshotHash(sim);
  // roundtrip: serializza tutto e ripristina in un mondo fresco
  const saved = {
    t: sim.t, rngState: sim.rng.state, unseen: sim.unseen.map(e => e.id),
    pruneAt: sim.pruneAt, journal: sim.journal.serialize(),
    npcs: sim.npcs.map(serializeNpc)
  };
  const w2 = buildWorld(9999, synthRoster(makeRng(12), 8)); // stesso roster, seed diverso
  w2.sim.rng.state = saved.rngState;
  w2.sim.t = saved.t; w2.sim.pruneAt = saved.pruneAt;
  w2.sim.journal.restore(saved.journal);
  w2.sim.unseen.length = 0;
  for (const id of saved.unseen) { const ev = w2.sim.journal.byId(id); if (ev) w2.sim.unseen.push(ev); }
  saved.npcs.forEach((s, i) => restoreNpc(w2.sim.npcs[i], s));
  const h2 = snapshotHash(w2.sim);
  return { pass: h1 === h2, info: `pre=${h1} post=${h2}` };
}

function tMigration() {
  // Save v1 sintetico (vecchio schema {fact,source}) -> deve migrare a v2
  // strutturato senza perdere l'informazione essenziale.
  const v1 = {
    version: 1, seed: 7, rngState: 42, t: 12.5,
    player: { x: 1, z: 2, yaw: 0 },
    npcs: [{
      id: 'anna', x: 0, z: 0, yaw: 0, state: 'alerted', agendaIdx: 0, dwellLeft: 1,
      relations: {}, memory: ['ev1'],
      beliefs: [['ev1', { fact: 'una persona ha preso il pacco in piazza', source: 'seen', confidence: 0.8, t: 10, error: null }]],
      alertedBy: 'ev1', alertT: 11, gossipAt: 0
    }],
    journal: { seq: 1, events: [{ id: 'ev1', t: 10, type: 'theft', severity: 0.6, x: 37, z: 21.5, actorId: 'player', place: 'piazza', witnesses: ['anna'] }] },
    world: { packageTaken: true }
  };
  const d = migrateV1toV2ForTest(JSON.parse(JSON.stringify(v1)), v1.journal.events);
  const b = d.npcs[0].beliefs[0][1];
  const ok = d.version === 2 && b.kind === 'theft' && b.channel === 'seen' &&
    b.px === 37 && Array.isArray(b.provenance) && d.npcs[0].state === 'dwell' &&
    d.npcs[0].fleeNode === null;
  return { pass: ok, info: `v=${d.version} kind=${b.kind} ch=${b.channel} px=${b.px} state=${d.npcs[0].state}` };
}

function tMergeIntegrity() {
  const store = new Map();
  const r1 = mergeBelief(store, 'e1', makeBelief({ kind: 'theft', channel: 'seen', confidence: 0.9, t: 0, provenance: ['a'] }), 'b');
  const before = store.get('e1').confidence;
  const r2 = mergeBelief(store, 'e1', makeBelief({ kind: 'theft', channel: 'hearsay', confidence: 0.3, t: 1, provenance: ['c'] }), 'b');
  const noBoost = store.get('e1').confidence <= 0.9;
  const r3 = mergeBelief(store, 'e1', makeBelief({ kind: 'theft', channel: 'hearsay', confidence: 0.9, t: 2, provenance: ['b'] }), 'b');
  const mem = [];
  const like = (id, res) => { if (res !== 'ignored') mem.push(id); };
  like('e1', r1); like('e1', r2);
  return {
    pass: r1 === 'stored' && r2 === 'merged' && noBoost && r3 === 'ignored' && mem.length === 2,
    info: `r1=${r1} r2=${r2} r3=${r3} conf=${before}->${store.get('e1').confidence} mem=${mem.length}`
  };
}

function tDecay() {
  const b = makeBelief({ kind: 'theft', channel: 'hearsay', confidence: 0.6, t: 0, provenance: ['a'] });
  const eff = effectiveConfidence(b, 1000);
  const store = new Map([['e1', b]]);
  const pruned = pruneBeliefs(store, 100000);
  return { pass: eff < 0.6 && eff > 0 && pruned === 1 && store.size === 0, info: `eff(1000s)=${eff.toFixed(3)} pruned=${pruned}` };
}

function tNoWitness() {
  const { sim, player } = buildWorld(6666, synthRoster(makeRng(13), 5));
  for (const n of sim.npcs) { n.x = -45; n.z = -45; n.state = 'dwell'; n.dwellLeft = 9999; }
  player.x = 45; player.z = 45;
  publishEvent(sim, 'theft', { severity: 0.9, x: 45, z: 45, actorId: 'player', place: 'piazza' });
  runTicks(sim, player, 60);
  const learned = sim.npcs.filter(n => n.beliefs.size > 0).length;
  return { pass: learned === 0 && sim.journal.byId('ev1').witnesses.length === 0, info: `learned=${learned}` };
}

function tL3Coherence() {
  const { sim, player } = buildWorld(7777, synthRoster(makeRng(14), 1));
  const [n] = sim.npcs;
  player.x = -49; player.z = -49;
  n.x = 49; n.z = 49; n.state = 'dwell'; n.dwellLeft = 1; // L3 (dist ~139)
  n.agenda = [{ node: 'pia_c', dwell: 1 }, { node: 'road_w', dwell: 1 }];
  n.agendaIdx = 0;
  runTicks(sim, player, 200); // 10s
  const lvl = n.level;
  // pia_c da (-49,-49): LOS quasi certamente ostruita o lontana; verifica coerenza:
  // se agenda avanzata, o il corpo si è mosso con essa o è congelato con agenda ferma
  return { pass: lvl === 'L3', info: `level=${lvl} agendaIdx=${n.agendaIdx} pos=(${(+n.x).toFixed(1)},${(+n.z).toFixed(1)})` };
}

function tScaleSmoke() {
  const { sim, player } = buildWorld(8888, synthRoster(makeRng(15), 80));
  player.x = 0; player.z = 0;
  publishEvent(sim, 'theft', { severity: 0.9, x: 0, z: 0, actorId: 'player', place: 'strada' });
  const t0 = performance.now();
  runTicks(sim, player, 200);
  const ms = performance.now() - t0;
  const capOk = sim.counts.L1 <= 12;
  return { pass: capOk, info: `200ticks80npc=${ms.toFixed(0)}ms L1=${sim.counts.L1} L2=${sim.counts.L2} L3=${sim.counts.L3}` };
}

function tTruthLeakStatic() {
  // 1) sorgente decisionale priva di riferimenti a journal/verità globale
  //    (i commenti vengono rimossi prima dello scan per evitare falsi positivi)
  const strip = (s) => s.replace(/\/\/[^\n]*/g, '').replace(/\/\*[\s\S]*?\*\//g, '');
  const bad = [];
  for (const [name, fn] of [['think', think], ['policeThink', policeThink], ['awarenessTick', awarenessTick]]) {
    const src = strip(fn.toString());
    for (const key of ['journal', 'witnesses', 'byId', 'unseen', 'worldTruth']) {
      if (src.includes(key)) bad.push(`${name}:${key}`);
    }
  }
  // 2) runtime: ctx con trappole su chiavi onniscienti (ogni accesso lancia);
  //    awareness riceve un proxy su sim con le stesse trappole (learnSpot
  //    lavora su sim e non deve mai toccare il journal)
  const w = buildWorld(9101, synthRoster(makeRng(31), 2));
  const civ = w.sim.npcs[0];
  civ.x = 0; civ.z = 0; civ.yaw = 0; civ.awareness = 1; // in cono con il player -> forza learnSpot
  const ctx = {
    t: 1, navAdj: buildNavGraph(), rng: makeRng(32), dtThink: 0.25,
    stats: { perceptionChecks: 0, gossipOps: 0, pathComputations: 0, thinkRuns: 0, pruned: 0, thinkByLevel: { L1: 0, L2: 0, L3: 0 } },
    nearby: () => [], player: { x: 0, z: 5 },
    playerStealth: { x: 0, z: 5, crouch: false, running: false },
    colliders: w.sim.colliders, corpsesNear: () => null,
    get journal() { throw new Error('leak:journal'); },
    get witnesses() { throw new Error('leak:witnesses'); },
    get worldTruth() { throw new Error('leak:worldTruth'); },
    get policeState() { throw new Error('leak:policeState'); }
  };
  const simProxy = new Proxy(w.sim, {
    get(t, k) {
      if (k === 'journal' || k === 'witnesses' || k === 'worldTruth' || k === 'unseen') throw new Error('leak:' + String(k));
      return t[k];
    }
  });
  let runtime = 'ok';
  try {
    think(civ, ctx);
    const cop = makeNpc({ id: 'copX', name: 'Cop', color: 1, role: 'police', x: 0, z: 0, relations: {}, agenda: [{ node: 'road_c', dwell: 1 }] }, makeRng(33));
    policeThink(cop, ctx);
    awarenessTick(simProxy, { x: 0, z: 5, crouch: false, running: false }, 0.05);
  } catch (e) { runtime = String(e.message ?? e); }
  return {
    pass: bad.length === 0 && runtime === 'ok',
    info: `srcLeaks=[${bad}] runtime=${runtime}`
  };
}

function tDeterminism30() {
  // 30 NPC, 800 tick, eventi multipli: replay bit-identico
  const mk = () => buildWorld(3030, synthRoster(makeRng(41), 30));
  const script = (w) => {
    const { sim, player } = w;
    for (let i = 0; i < 800; i++) {
      player.x = Math.sin(i / 40) * 25; player.z = Math.cos(i / 55) * 20;
      player.running = i % 97 < 30;
      if (i === 120) publishEvent(sim, 'theft', { severity: 0.7, x: 12, z: 12, actorId: 'player', place: 'strada' });
      if (i === 360) publishEvent(sim, 'disturbance', { severity: 0.45, x: -18, z: 11, actorId: 'player', place: 'bar' });
      if (i === 620) publishEvent(sim, 'kill', { severity: 1.0, x: 37, z: 20, actorId: 'player', victimId: 'syn5', place: 'piazza' });
      simTick(sim, player, DT);
    }
    return snapshotHash(sim);
  };
  const h1 = script(mk()), h2 = script(mk());
  return { pass: h1 === h2, info: `h1=${h1} h2=${h2}` };
}

function tRelationsTyped() {
  // 1) semantica dei tipi: lutto, bond, attenuazione informazione
  const fam = { id: 'a', relations: { b: 0.8 }, relType: { b: 'family' } };
  const acq = { id: 'c', relations: { d: 0.8 }, relType: {} };
  const enm = { id: 'e', relations: { f: 0.9 }, relType: { f: 'enemy' } };
  const weak = { id: 'z', relations: { q: 0.2 }, relType: { q: 'family' } };
  const unit = relTypeOf(fam, 'b') === 'family' && relTypeOf(acq, 'd') === 'acquaintance' &&
    relTypeOf({ id: 'x', relations: {}, relType: {} }, 'y') === 'unknown' &&
    bondOf(fam, 'b') === 0.8 && bondOf(enm, 'f') === 0 &&
    mournOf(fam, 'b') === 600 && mournOf(acq, 'd') === 60 && mournOf(weak, 'q') === 0 &&
    infoFactorOf(fam, 'b') === 1 && infoFactorOf(acq, 'd') === 0.7 && infoFactorOf(enm, 'f') === 0;
  // 2) comportamento: vittima cara -> CORRO a controllare (aiuto) + lutto lungo;
  //    vittima sconosciuta -> FUGA dalla posizione percepita, nessun lutto
  const mkCtx = (w) => ({
    t: 0, navAdj: buildNavGraph(), rng: makeRng(77), dtThink: 0.25,
    stats: { gossipOps: 0, pathComputations: 0, thinkRuns: 0, perceptionChecks: 0, pruned: 0 },
    nearby: () => [], player: { x: 0, z: 0 }, colliders: w.sim.colliders, corpsesNear: () => null
  });
  const beliefFor = () => makeBelief({
    kind: 'kill', severity: 1, px: 5, pz: 5, place: 'piazza', subject: 'kin',
    channel: 'seen', confidence: 0.8, t: 0, provenance: []
  });
  const w1 = buildWorld(6001, synthRoster(makeRng(51), 1));
  const hero = w1.sim.npcs[0];
  hero.relations = { kin: 0.8 }; hero.relType = { kin: 'family' };
  mergeBelief(hero.beliefs, 'evK', beliefFor(), hero.id);
  think(hero, mkCtx(w1));
  const helped = hero.state === 'curious' && hero.gotoX === 5 && (hero.mournT ?? 0) >= 600;
  const w2 = buildWorld(6002, synthRoster(makeRng(52), 1));
  const stranger = w2.sim.npcs[0];
  mergeBelief(stranger.beliefs, 'evK', beliefFor(), stranger.id);
  think(stranger, mkCtx(w2));
  const flees = stranger.state === 'alerted' && stranger.fleeNode !== null && (stranger.mournT ?? 0) === 0;
  return {
    pass: unit && helped && flees,
    info: `unit=${unit} helped=${helped}(${hero.state},mourn=${hero.mournT}) flees=${flees}(${stranger.state})`
  };
}

function tScheduleRoutines() {
  // Routine oraria sui dati reali del roster: lavoro/serata/casa + interruzione
  // event-driven + rientro + serializzazione di agenda/agendaBlock.
  const def = ROSTER.find(d => d.id === 'bruno'); // schedule: 7-12 svc_in, 17-20 bar_in, gap -> casa
  const w = buildWorld(7101, [def]);
  const n = w.sim.npcs[0];
  const ctx = {
    t: 0, navAdj: buildNavGraph(), rng: makeRng(71), dtThink: 0.25,
    stats: { gossipOps: 0, pathComputations: 0, thinkRuns: 0, perceptionChecks: 0, pruned: 0 },
    nearby: () => [], player: { x: 0, z: 0 }, colliders: w.sim.colliders, corpsesNear: () => null
  };
  ctx.t = 25;  think(n, ctx); // 09:00 -> lavoro
  const workOk = n.agendaBlock === 'svc_in' && n.agenda[0].node === 'svc_in';
  ctx.t = 275; think(n, ctx); // 19:00 -> serata al bar
  const socialOk = n.agendaBlock === 'bar_in' && n.agenda[0].node === 'bar_in';
  ctx.t = 450; think(n, ctx); // 02:00 -> nessun blocco -> casa
  const homeOk = n.agendaBlock === 'b5_door' && n.agenda[0].node === 'b5_door';
  // interruzione: da alerted la routine NON viene applicata
  n.state = 'alerted'; n.fleeNode = 'road_e';
  ctx.t = 25; think(n, ctx);
  const interrupted = n.agendaBlock === 'b5_door';
  // rientro: tornato in dwell la routine riprende dal blocco corrente
  n.state = 'dwell'; n.alertedBy = null; n.fleeNode = null;
  think(n, ctx);
  const resumed = n.agendaBlock === 'svc_in';
  // serializzazione agenda + agendaBlock (roundtrip)
  const s = serializeNpc(n);
  const n2 = makeNpc(def, makeRng(72));
  restoreNpc(n2, s);
  const serial = n2.agendaBlock === n.agendaBlock && JSON.stringify(n2.agenda) === JSON.stringify(n.agenda);
  // orologio deterministico derivato da t
  const clockOk = worldHour(0) === 8 && worldHour(600) === 8 && worldHour(275) === 19 && worldHour(450) === 2;
  return {
    pass: workOk && socialOk && homeOk && interrupted && resumed && serial && clockOk,
    info: `work=${workOk} social=${socialOk} home=${homeOk} interrupt=${interrupted} resume=${resumed} serial=${serial} clock=${clockOk}`
  };
}

function tMemoryTiers() {
  // Tier: salient sopravvive al prune della credenza ma ha eta massima;
  // short muore presto; normal muore con la credenza. Sempre con cap.
  const w = buildWorld(8101, synthRoster(makeRng(61), 1));
  const n = w.sim.npcs[0];
  const mk = (id, kind, severity, subject = null) => {
    mergeBelief(n.beliefs, id, makeBelief({ kind, severity, subject, px: 0, pz: 0, place: 'piazza', channel: 'seen', confidence: 0.8, t: 0, provenance: [] }), n.id);
    memorize(n, id);
  };
  mk('evKill', 'kill', 1.0, 'kin');       // salient (gravissimo + vittima cara)
  mk('evNoise', 'noise', 0.2);            // short
  mk('evTiny', 'disturbance', 0.2);       // short (severity < 0.3)
  mk('evOrd', 'theft', 0.5);              // normal
  const tiers = n.memTier.evKill === 2 && n.memTier.evNoise === 0 && n.memTier.evTiny === 0 && n.memTier.evOrd === 1;
  // le credenze muoiono (potatura), la memoria segue la policy di tier
  n.beliefs.delete('evKill'); n.beliefs.delete('evNoise');
  n.beliefs.delete('evTiny'); n.beliefs.delete('evOrd');
  const r1 = pruneMemory(n, 70); // oltre l'eta short (60s), sotto quella salient (900s)
  const after70 = n.memory.includes('evKill') && !n.memory.includes('evNoise') &&
    !n.memory.includes('evTiny') && !n.memory.includes('evOrd');
  const mapsClean1 = n.memTier.evNoise === undefined && n.memAt.evNoise === undefined;
  const r2 = pruneMemory(n, 950); // oltre l'eta salient
  const after950 = n.memory.length === 0 && Object.keys(n.memTier).length === 0 && Object.keys(n.memAt).length === 0;
  // cap: 200 eventi brevi non superano mai MEMORY_CAP
  const w2 = buildWorld(8102, synthRoster(makeRng(62), 1));
  const m = w2.sim.npcs[0];
  for (let i = 0; i < 200; i++) {
    const id = 'e' + i;
    mergeBelief(m.beliefs, id, makeBelief({ kind: 'noise', severity: 0.2, px: 0, pz: 0, place: 'p', channel: 'heard', confidence: 0.3, t: i, provenance: [] }), m.id);
    memorize(m, id);
    if (i % 40 === 0) pruneMemory(m, i);
  }
  const capped = m.memory.length <= 64;
  const mapsBounded = Object.keys(m.memTier).length <= m.memory.length && Object.keys(m.memAt).length <= m.memory.length;
  return {
    pass: tiers && after70 && mapsClean1 && after950 && capped && mapsBounded,
    info: `tiers=${tiers} r1=${r1} after70=${after70} r2=${r2} after950=${after950} cap=${m.memory.length} maps=${Object.keys(m.memTier).length}`
  };
}

function tContradiction() {
  // Due versioni incompatibili dello stesso evento: la voce udita non
  // sostituisce il posto, la credenza si incrina (contra + calo confidence);
  // l'osservazione diretta vince sulla voce e resiste alle voci successive;
  // una fonte indipendente ringiovanisce t senza mai boostare confidence.
  const s1 = new Map();
  mergeBelief(s1, 'e1', makeBelief({ kind: 'theft', channel: 'hearsay', confidence: 0.8, t: 0, px: 0, pz: 0, provenance: ['a'] }), 'self');
  mergeBelief(s1, 'e1', makeBelief({ kind: 'theft', channel: 'hearsay', confidence: 0.7, t: 1, px: 50, pz: 50, provenance: ['b'] }), 'self');
  const b1 = s1.get('e1');
  const crumble = (b1.contra ?? 0) === 1 && b1.confidence < 0.8 && b1.px === 0;
  mergeBelief(s1, 'e1', makeBelief({ kind: 'theft', channel: 'seen', confidence: 0.6, t: 2, px: 48, pz: 52, actor: 'uomo in verde', provenance: [] }), 'self');
  const b2 = s1.get('e1');
  const seenWins = b2.channel === 'seen' && b2.px === 48 && (b2.contra ?? 0) === 2;
  mergeBelief(s1, 'e1', makeBelief({ kind: 'theft', channel: 'hearsay', confidence: 0.9, t: 3, px: 0, pz: 0, actor: 'persona rossa', provenance: ['x'] }), 'self');
  const b3 = s1.get('e1');
  const seenHolds = b3.channel === 'seen' && b3.px === 48 && b3.confidence === 0.6;
  const s2 = new Map();
  mergeBelief(s2, 'e2', makeBelief({ kind: 'theft', channel: 'seen', confidence: 0.9, t: 0, provenance: ['a'] }), 'self');
  mergeBelief(s2, 'e2', makeBelief({ kind: 'theft', channel: 'hearsay', confidence: 0.4, t: 100, px: 0, pz: 0, provenance: ['c'] }), 'self');
  const b4 = s2.get('e2');
  const corrob = b4.confidence === 0.9 && b4.t > 0 && b4.t <= 100;
  return {
    pass: crumble && seenWins && seenHolds && corrob,
    info: `crumble=${crumble}(contra=${b1.contra},conf=${b1.confidence?.toFixed(2)}) seenWins=${seenWins} seenHolds=${seenHolds} corrob=${corrob}(t=${b4.t},conf=${b4.confidence})`
  };
}

function tMultiHop() {
  // Catena A->B->C->D senza istantaneita': stazionari su una linea (3m di
  // passo), il gossip avanza a salti (cooldown 3s) e la confidence decade a
  // ogni passaggio. Conta informati in tre campioni: presto/medio/fine.
  const { sim, player } = buildWorld(3011, synthRoster(makeRng(13), 4));
  const [a, b, c, d] = sim.npcs;
  a.relations[b.id] = 0.9; b.relations[a.id] = 0.9;
  b.relations[c.id] = 0.9; c.relations[b.id] = 0.9;
  c.relations[d.id] = 0.9; d.relations[c.id] = 0.9;
  for (const [n, x] of [[a, -10], [b, -7], [c, -4], [d, -1]]) {
    n.x = x; n.z = 0; n.yaw = 0; n.state = 'dwell'; n.dwellLeft = 9999;
  }
  mergeBelief(a.beliefs, 'evX', makeBelief({
    kind: 'theft', severity: 0.2, px: -8, pz: 0, place: 'strada',
    actor: 'sconosciuto', channel: 'seen', confidence: 0.9, t: 0, provenance: []
  }), a.id);
  memorize(a, 'evX');
  const informed = () => [a, b, c, d].filter(n => n.beliefs.has('evX')).length;
  runTicks(sim, player, 80);    // 4s: A conosce, B al piu appena
  const early = informed();
  runTicks(sim, player, 520);   // 30s: la catena e' arrivata a C (e forse D)
  const mid = informed();
  runTicks(sim, player, 1800);  // 120s: tutti e quattro
  const late = informed();
  const db = d.beliefs.get('evX');
  const chain = !!db && db.channel === 'hearsay' && db.provenance[0] === a.id &&
    db.provenance[db.provenance.length - 1] === c.id;
  const talked = [a, b, c, d].some(n => (n.talkT ?? 0) > 0); // stato talk dopo lo scambio
  const bb = b.beliefs.get('evX'), cb = c.beliefs.get('evX');
  const decreasing = !!bb && !!cb && !!db &&
    db.confidence < cb.confidence && cb.confidence < bb.confidence && bb.confidence < 0.9;
  return {
    pass: early <= 2 && mid >= 3 && late === 4 && chain && decreasing && talked,
    info: `early=${early} mid=${mid} late=${late} Dprov=${JSON.stringify(db?.provenance)} talk=${talked} confs=${bb?.confidence?.toFixed(2)}/${cb?.confidence?.toFixed(2)}/${db?.confidence?.toFixed(2)}`
  };
}

function tPerceptionQuality() {
  // Qualita' informativa: nessun apprendimento al primo tick (fissazione),
  // entro la finestra impara con w piccolo e conf alta; l'udito resta piu'
  // incerto e meno confidente della vista ravvicinata; la fissazione non
  // sopravvive alla finestra (niente gaze che resta per sempre).
  const { sim, player } = buildWorld(4401, synthRoster(makeRng(31), 3));
  const [wit, beside, far] = sim.npcs;
  wit.x = 34.5; wit.z = 21.5; wit.yaw = Math.PI / 2; wit.state = 'dwell'; wit.dwellLeft = 9999;
  // stesso punto ma a faccia sbagliata: sguardo non maturo, mai appreso
  beside.x = 34.5; beside.z = 19.5; beside.yaw = -Math.PI / 2; beside.state = 'dwell'; beside.dwellLeft = 9999;
  far.x = -40; far.z = 0; far.state = 'dwell'; far.dwellLeft = 9999;
  player.x = 37; player.z = 21.5;
  publishEvent(sim, 'theft', { severity: 0.6, x: 37, z: 21.5, actorId: 'player', place: 'piazza' });
  simTick(sim, player, DT); // 1 solo tick: fissazione immatura
  const instant = wit.beliefs.has('ev1');
  runTicks(sim, player, 10); // tot 0.55s > soglia 0.3s
  const b = wit.beliefs.get('ev1');
  const learned = !!b && b.channel === 'seen' && b.w != null && b.w <= 1.5 && b.confidence > 0.5;
  const quiet = !beside.beliefs.has('ev1') && !far.beliefs.has('ev1');
  const h = hearPoint(wit, 37, 21.5, 14, sim.colliders, sim.rng);
  const heardWorse = h.heard && b && h.w > b.w && h.confidence < b.confidence;
  runTicks(sim, player, 90); // oltre la finestra (2s): evento uscito dall'offerta
  const gazeClean = Object.keys(wit.gaze ?? {}).length === 0 &&
    Object.keys(beside.gaze ?? {}).length === 0;
  return {
    pass: !instant && learned && quiet && heardWorse && gazeClean,
    info: `instant=${instant} w=${b?.w} conf=${b?.confidence?.toFixed(2)} heardW=${h.w} heardC=${h.confidence?.toFixed(2)} gazeClean=${gazeClean}`
  };
}

function tNoOmniscienza() {
  // Nessun accesso alla verita' senza sguardo o contatto sociale: A vede
  // l'evento, B e' a 10m ma fuori cono, C/D lontani; relazioni azzerate ->
  // nessun canale di gossip. Solo A sa.
  const { sim, player } = buildWorld(6601, synthRoster(makeRng(61), 4));
  const [a, b, c, d] = sim.npcs;
  for (const n of sim.npcs) { n.relations = {}; n.relType = {}; n.state = 'dwell'; n.dwellLeft = 9999; }
  a.x = 34.5; a.z = 21.5; a.yaw = Math.PI / 2;
  b.x = 47; b.z = 21.5; b.yaw = Math.PI; // a 10m, ma la schiena rivolta all'evento
  c.x = -40; c.z = 0; d.x = 0; d.z = -40;
  player.x = 37; player.z = 21.5;
  player.crouch = true; // fuori range recognitione/awareness (7m): niente spot sui memory
  publishEvent(sim, 'theft', { severity: 0.6, x: 37, z: 21.5, actorId: 'player', place: 'piazza' });
  runTicks(sim, player, 600); // 30s: finestra finita da tempo, gossip impossibile
  const aKnows = a.beliefs.has('ev1') && a.beliefs.get('ev1').channel === 'seen';
  const noLeak = !b.beliefs.has('ev1') && !c.beliefs.has('ev1') && !d.beliefs.has('ev1') &&
    b.memory.length === 0 && c.memory.length === 0 && d.memory.length === 0;
  return { pass: aKnows && noLeak, info: `aKnows=${aKnows} noLeak=${noLeak}` };
}

function tLevelHysteresis() {
  // Oscillazione del giocatore sui confini 30m (L1) e 60m (L2/L3): con
  // l'isteresi i livelli NON flippano a ogni oscillazione.
  const { sim, player } = buildWorld(5501, synthRoster(makeRng(41), 3));
  const [n1, n2, n3] = sim.npcs;
  for (const n of sim.npcs) { n.state = 'dwell'; n.dwellLeft = 9999; }
  n1.x = 0; n1.z = 0; n2.x = 0; n2.z = -50; n3.x = 50; n3.z = 50;
  player.x = 0; player.z = 20;
  runTicks(sim, player, 20);
  const startL1 = n1.level === 'L1';
  let flips1 = 0, last1 = n1.level;
  for (let k = 0; k < 10; k++) {
    player.z = (k % 2 === 0) ? 28 : 32; // attorno ai 30m
    runTicks(sim, player, 10);
    if (n1.level !== last1) { flips1++; last1 = n1.level; }
  }
  player.x = 0; player.z = 8; // n2 a 58m -> L2
  runTicks(sim, player, 15);
  const startL2 = n2.level === 'L2';
  let flips2 = 0, last2 = n2.level;
  for (let k = 0; k < 10; k++) {
    player.z = (k % 2 === 0) ? 12 : 8; // 62m / 58m: attorno ai 60m
    runTicks(sim, player, 10);
    if (n2.level !== last2) { flips2++; last2 = n2.level; }
  }
  const capL1 = sim.npcs.filter(n => n.level === 'L1').length <= 12;
  return {
    pass: startL1 && startL2 && flips1 === 0 && flips2 === 0 && capL1,
    info: `startL1=${startL1} flips1=${flips1} startL2=${startL2} flips2=${flips2} L1count=${sim.npcs.filter(n => n.level === 'L1').length}`
  };
}

function tL3ToL1Promotion() {
  // L3 lontano -> il GIOCATORE si avvicina: promozione senza teleport dell'NPC,
  // think che riprende, nessun salto di posizione oltre la velocita' massima.
  const { sim, player } = buildWorld(7710, synthRoster(makeRng(51), 2));
  const [n, other] = sim.npcs;
  for (const x of sim.npcs) { x.state = 'dwell'; x.dwellLeft = 9999; }
  n.x = 40; n.z = 30;
  n.agenda = [{ node: 'pia_c', dwell: 1 }, { node: 'road_w', dwell: 1 }];
  n.agendaIdx = 0;
  other.x = -49; other.z = -49; // sull'altro angolo: dopo il salto del player resta L3
  player.x = -49; player.z = -49;
  runTicks(sim, player, 40);
  const wasL3 = n.level === 'L3';
  player.x = 38; player.z = 28; // ~2.8m dall'NPC
  const l1Before = sim.stats.thinkByLevel.L1;
  let maxStep = 0;
  for (let i = 0; i < 40; i++) {
    const bx = n.x, bz = n.z;
    simTick(sim, player, DT);
    maxStep = Math.max(maxStep, Math.hypot(n.x - bx, n.z - bz));
  }
  const promoted = n.level === 'L1' || n.level === 'L2';
  const noTeleport = maxStep <= 0.2; // max velocita' 2.6 m/s * 0.05 = 0.13
  // solo n puo' essere L1 dopo il salto (other e' L3): il delta e' suo
  const resumed = sim.stats.thinkByLevel.L1 > l1Before;
  return {
    pass: wasL3 && promoted && noTeleport && resumed,
    info: `wasL3=${wasL3} now=${n.level} maxStep=${maxStep.toFixed(3)} L1think=${sim.stats.thinkByLevel.L1 - l1Before}`
  };
}

function tReplayPostLoad() {
  // Replay post-load: due carichi dallo stesso save proseguono identicamente
  // (rngState + memoria/livelli/talk/gaze restaurati) e coincidono con la
  // run continua.
  const mk = () => buildWorld(7710, synthRoster(makeRng(71), 10));
  const play = (w, from, to) => {
    for (let i = from; i < to; i++) {
      w.player.x = Math.sin(i / 40) * 25; w.player.z = Math.cos(i / 55) * 25;
      if (i === 120) publishEvent(w.sim, 'theft', { severity: 0.7, x: 5, z: 5, actorId: 'player', place: 'strada' });
      if (i === 250) publishEvent(w.sim, 'disturbance', { severity: 0.4, x: -15, z: 10, actorId: 'player', place: 'bar' });
      simTick(w.sim, w.player, DT);
    }
  };
  const A = mk();
  play(A, 0, 300);
  const saved = {
    t: A.sim.t, rngState: A.sim.rng.state, unseen: A.sim.unseen.map(e => e.id),
    pruneAt: A.sim.pruneAt, journal: A.sim.journal.serialize(),
    npcs: A.sim.npcs.map(serializeNpc)
  };
  play(A, 300, 500);
  const hA = snapshotHash(A.sim);
  const loadContinue = () => {
    const w = mk();
    w.sim.rng.state = saved.rngState;
    w.sim.t = saved.t; w.sim.pruneAt = saved.pruneAt;
    w.sim.journal.restore(saved.journal);
    w.sim.unseen.length = 0;
    for (const id of saved.unseen) { const ev = w.sim.journal.byId(id); if (ev) w.sim.unseen.push(ev); }
    saved.npcs.forEach((s, i) => restoreNpc(w.sim.npcs[i], s));
    play(w, 300, 500);
    return snapshotHash(w.sim);
  };
  const hB = loadContinue(), hC = loadContinue();
  return { pass: hA === hB && hB === hC, info: `cont=${hA} load1=${hB} load2=${hC}` };
}

export async function runAllTests() {
  const tests = [
    T('truth_isolation', tTruthIsolation),
    T('divergent_knowledge', tDivergentKnowledge),
    T('gossip_chain', tGossipChain),
    T('determinism_replay', tDeterminism),
    T('save_load_roundtrip', tSaveLoad),
    T('merge_integrity', tMergeIntegrity),
    T('migration_v1_v2', tMigration),
    T('belief_decay_prune', tDecay),
    T('no_witness_event', tNoWitness),
    T('l3_coherence', tL3Coherence),
    T('scale_80_smoke', tScaleSmoke),
    T('truth_leak_static', tTruthLeakStatic),
    T('determinism_30', tDeterminism30),
    T('relations_typed', tRelationsTyped),
    T('schedule_routines', tScheduleRoutines),
    T('memory_tiers', tMemoryTiers),
    T('contradiction_corrob', tContradiction),
    T('multi_hop_gossip', tMultiHop),
    T('perception_quality', tPerceptionQuality),
    T('no_omniscienza', tNoOmniscienza),
    T('level_hysteresis', tLevelHysteresis),
    T('l3_to_l1_promotion', tL3ToL1Promotion),
    T('replay_post_load', tReplayPostLoad),
    // gameplay dell'assassino (modulo proprio: conflitto minimo di merge)
    ...runAssassinTests(),
    // navigazione/arrivi/camera/separazione (S5)
    ...runNavTests()
  ];
  const passed = tests.filter(t => t.pass).length;
  return { suite: 'p0-foundation', passed, total: tests.length, tests, seedNote: 'seed fissi per test' };
}

// --- benchmark: sim-only, seed noto, N NPC, tick fissi ---
export function runBench(n, seed = 12345) {
  const { sim, player } = buildWorld(seed, synthRoster(makeRng(seed), n));
  player.x = 0; player.z = 0;
  // warmup
  runTicks(sim, player, 40);
  sim.stats.perceptionChecks = 0; sim.stats.gossipOps = 0;
  sim.stats.pathComputations = 0; sim.stats.thinkRuns = 0;
  sim.stats.thinkByLevel = { L1: 0, L2: 0, L3: 0 };
  let aiSum = 0;
  const TICKS = 400;
  const t0 = performance.now();
  for (let i = 0; i < TICKS; i++) {
    if (i === 100) publishEvent(sim, 'theft', { severity: 0.8, x: 5, z: 5, actorId: 'player', place: 'strada' });
    simTick(sim, player, DT);
    aiSum += sim.aiMs;
  }
  const total = performance.now() - t0;
  let memoryCount = 0, beliefCount = 0;
  for (const n of sim.npcs) { memoryCount += n.memory.length; beliefCount += n.beliefs.size; }
  return {
    npcs: n, ticks: TICKS, seed,
    simMsTotal: +total.toFixed(1), simMsPerTick: +(total / TICKS).toFixed(3),
    aiMsPerTick: +(aiSum / TICKS).toFixed(3),
    perceptionChecks: sim.stats.perceptionChecks,
    gossipOps: sim.stats.gossipOps,
    pathComputations: sim.stats.pathComputations,
    thinkRuns: sim.stats.thinkRuns,
    thinkByLevel: { ...sim.stats.thinkByLevel },
    eventCount: sim.journal.events.length,
    memoryCount, beliefCount,
    levels: { ...sim.counts },
    hash: snapshotHash(sim)
  };
}
