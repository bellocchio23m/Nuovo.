// Benchmark infrastruttura: scale 12/30/80 NPC, metriche complete.
// Uso: npm run bench   (Node puro; per draw calls/triangles serve il browser,
// v. ?bench=1 in main.js che legge renderer.info + performance.memory)
// Prima/dopo: le righe "quiet" corrispondono al runBench preesistente
// (confrontabili 1:1), "stress" e "L3" coprono scenari prima non misurati
// (morti/percezione/gossip e think-per-livello con player agli angoli).
import { buildWorld, synthRoster, snapshotHash, runTicks } from './harness.js';
import { makeRng } from '../core/rng.js';
import { simTick, publishEvent } from '../sim/simulation.js';
import { serializeGame } from '../persist/persistence.js';
import { makeFakeGame } from './infra.js';

const DT = 0.05;

function measure(n, seed, opts) {
  const { corner = false, stress = false, ticks = 400 } = opts;
  const w = buildWorld(seed, synthRoster(makeRng(seed), n));
  const player = w.player;
  player.x = corner ? -46 : 0;
  player.z = corner ? -46 : 0;
  player.crouch = false; player.running = false;
  runTicks(w.sim, player, 40); // warmup
  w.sim.stats.perceptionChecks = 0; w.sim.stats.gossipOps = 0;
  w.sim.stats.pathComputations = 0; w.sim.stats.thinkRuns = 0;
  w.sim.stats.thinkByLevel = { L1: 0, L2: 0, L3: 0 };
  w.sim.stats.budgetSkips = 0; w.sim.stats.budgetPressure = 0;
  let aiSum = 0, simSum = 0;
  const t0 = performance.now();
  for (let i = 0; i < ticks; i++) {
    if (corner) { // muovi il player: esercita classificazione L1/L2/L3
      player.x = -46 + Math.sin(i / 40) * 4;
      player.z = -46 + Math.cos(i / 55) * 4;
    }
    if (stress) {
      if (i === 100) publishEvent(w.sim, 'theft', { severity: 0.8, x: 5, z: 5, actorId: 'player', place: 'strada' });
      if (i === 160) {
        const v = w.sim.npcs[Math.min(3, n - 1)];
        v.state = 'dead'; v.speed = 0; v.path = []; v.fleeNode = null; v.gotoX = null; v.gotoZ = null;
        publishEvent(w.sim, 'kill', { severity: 1, x: v.x, z: v.z, actorId: 'player', victimId: v.id, place: 'piazza' });
      }
      if (i === 220) publishEvent(w.sim, 'disturbance', { severity: 0.45, x: -20, z: 11, actorId: 'player', place: 'bar' });
      if (i === 300) publishEvent(w.sim, 'sabotage', { severity: 0.5, x: -38, z: 20, actorId: 'player', place: 'svc_in' });
    }
    simTick(w.sim, player, DT);
    aiSum += w.sim.aiMs; simSum += w.sim.simMs;
  }
  const wall = performance.now() - t0;
  let memoryCount = 0, beliefCount = 0, provMax = 0;
  for (const npc of w.sim.npcs) {
    memoryCount += npc.memory.length; beliefCount += npc.beliefs.size;
    for (const [, b] of npc.beliefs) provMax = Math.max(provMax, b.provenance.length);
  }
  // save/journal size su un game nello stesso stato (JSON-puro)
  const g = makeFakeGame(seed, n);
  // allinea lo stato del mondo di misura nel game fittizio per misurare il save reale
  g.seed = seed; g.rng.state = w.sim.rng.state; g.sim.t = w.sim.t;
  g.sim.pruneAt = w.sim.pruneAt; g.sim.corpseAt = w.sim.corpseAt;
  g.sim.corpseReported = new Set(w.sim.corpseReported);
  g.npcs.forEach((npc, i) => {
    const src = w.sim.npcs[i];
    npc.x = src.x; npc.z = src.z; npc.yaw = src.yaw; npc.speed = src.speed;
    npc.state = src.state; npc.agendaIdx = src.agendaIdx; npc.dwellLeft = src.dwellLeft;
    npc.path = [...src.path]; npc.pathIdx = src.pathIdx; npc.fleeNode = src.fleeNode;
    npc.relations = { ...src.relations }; npc.relType = { ...(src.relType ?? {}) };
    npc.memory = [...src.memory]; npc.trust = { ...src.trust };
    npc.beliefs = new Map(src.beliefs); npc.level = src.level; npc.thinkAt = src.thinkAt;
    npc.gossipAt = src.gossipAt; npc.symbolAt = src.symbolAt ?? 0;
    npc.alertedBy = src.alertedBy; npc.alertT = src.alertT ?? -99;
    npc.death = src.death ? { ...src.death } : null;
    npc.police = src.police ? { ...src.police } : null;
    npc.gotoX = src.gotoX; npc.gotoZ = src.gotoZ;
  });
  g.journal.restore(w.sim.journal.serialize());
  const saveJson = JSON.stringify(serializeGame(g));
  const journalJson = JSON.stringify(w.sim.journal.serialize());
  return {
    npcs: n, scenario: stress ? 'stress' : (corner ? 'L3' : 'quiet'),
    ticks, seed,
    simMsPerTick: +(simSum / ticks).toFixed(3),
    wallMsPerTick: +(wall / ticks).toFixed(3),
    aiMsPerTick: +(aiSum / ticks).toFixed(3),
    thinkRuns: w.sim.stats.thinkRuns,
    thinkByLevel: { ...w.sim.stats.thinkByLevel },
    thinkMaxObserved: null,
    budgetSkips: w.sim.stats.budgetSkips,
    pathComputations: w.sim.stats.pathComputations,
    gossipOps: w.sim.stats.gossipOps,
    perceptionChecks: w.sim.stats.perceptionChecks,
    eventCount: w.sim.journal.events.length,
    beliefCount, memoryCount, provMax,
    levels: { ...w.sim.counts },
    saveBytes: saveJson.length,
    journalBytes: journalJson.length,
    heapMB: +(process.memoryUsage().heapUsed / 1048576).toFixed(1),
    hash: snapshotHash(w.sim)
  };
}

const runs = [];
for (const n of [12, 30, 80]) {
  runs.push(measure(n, 12345, {}));
  runs.push(measure(n, 12345, { corner: true }));
  runs.push(measure(n, 12345, { stress: true }));
}
console.log(JSON.stringify({ bench: 'p0-infra', node: process.version, runs }, null, 1));

// tabella leggibile
const hdr = ['scenario', 'npcs', 'sim ms/t', 'ai ms/t', 'think', 'L1/L2/L3', 'path', 'gossip', 'percep', 'events', 'beliefs', 'mem', 'saveKB', 'journalKB', 'heapMB'];
const rows = runs.map(r => [
  r.scenario, r.npcs, r.simMsPerTick, r.aiMsPerTick, r.thinkRuns,
  `${r.levels.L1}/${r.levels.L2}/${r.levels.L3}`,
  r.pathComputations, r.gossipOps, r.perceptionChecks, r.eventCount,
  r.beliefCount, r.memoryCount,
  +(r.saveBytes / 1024).toFixed(1), +(r.journalBytes / 1024).toFixed(1), r.heapMB
]);
const widths = hdr.map((h, i) => Math.max(String(h).length, ...rows.map(r => String(r[i]).length)));
const line = (r) => r.map((c, i) => String(c).padStart(widths[i])).join(' | ');
console.log('\n' + line(hdr));
console.log(widths.map(w => '-'.repeat(w)).join('-+-'));
for (const r of rows) console.log(line(r));
