// Suite di accettazione della locomozione reale (S2 Fase 1):
//   A ostacolo statico -> deviazione reale, mai penetrazione
//   B fuga -> arrivo CONCRETO alla destinazione scelta, non spinta sul muro
//   C destinazione irraggiungibile -> punto valido raggiunto (nessun loop)
//   D percorso invalidato a meta' -> ripianificazione + arrivo comunque
//   E piu' agenti in fuga -> si disperdono, non collassano sullo stesso punto
//   F determinismo del mondo con ostacoli che compaiono/spariscono
//   G persistence: il path/locomozione non viene corrotto dal roundtrip
//   H regressione del contratto del mondo (vincoli che i test storici assumono)
// Ogni test ritorna {pass, info}. Nessun Math.random: solo seed fissi.
import { buildWorld, snapshotHash } from './harness.js';
import { makeFakeGame } from './infra.js';
import { makeRng } from '../core/rng.js';
import { WORLD } from '../world/mapData.js';
import { ROSTER } from '../sim/roster.js';
import { PLACE_IT } from '../world/mapData.js';
import { simTick } from '../sim/simulation.js';
import {
  pointFree, navRevision, arrivalRadius, validateNav, segmentClear
} from '../world/navigation.js';
import { setWorldObstacle, clearWorldObstacle, pointInBuilding, buildColliders } from '../world/world.js';
import { serializeNpc, restoreNpc, makeNpc } from '../sim/npc.js';
import { makeBelief, mergeBelief } from '../sim/knowledge.js';
import { serializeGame, applySave } from '../persist/persistence.js';

const DT = 0.05;
const OBST_A = { minX: -6, maxX: -3, minZ: -2, maxZ: 2 };
const OBST_D = { minX: -14, maxX: -11, minZ: -1.5, maxZ: 1.5 };

function walkerDef(id, x, z, node) {
  return { id, name: id, color: 1, x, z, relations: {}, agenda: [{ node, dwell: 999 }] };
}

function freshStart(n, x, z, node) {
  n.x = x; n.z = z; n.yaw = 0; n.speed = 0;
  n.state = 'dwell'; n.dwellLeft = 0; n.agendaIdx = 0;
  n.agenda = [{ node, dwell: 999 }];
  n.path = []; n.pathIdx = 0; n.pathGoal = null; n.pathOk = true;
  n.pathNavRev = 0; n.stuckFor = 0; n.navT = 0; n.navX = x; n.navZ = z;
  n.fleeNode = null; n.gotoX = null; n.gotoZ = null; n.alertedBy = null;
}

// Orbita del disco dell'agente contro TUTTI i collider con tolleranza 1 cm:
// pointFree e' volutamente stretto (soglia esatta del raggio) e dichiarerebbe
// "penetrazione" una posizione che la fisica ha appena respinto a raggio esatto.
const AGENT_R = 0.35;
const PEN_TOL = 0.01;
function insideAnyCollider(x, z) {
  const R = AGENT_R - PEN_TOL, R2 = R * R;
  for (const c of buildColliders()) {
    const cx = x < c.minX ? c.minX : (x > c.maxX ? c.maxX : x);
    const cz = z < c.minZ ? c.minZ : (z > c.maxZ ? c.maxZ : z);
    const dx = x - cx, dz = z - cz;
    if (dx * dx + dz * dz < R2) return true;
  }
  return false;
}

/** campiona il tracciato ogni tick e segnala penetrazione in un collider */
function penetrate(track) {
  for (const p of track) if (insideAnyCollider(p.x, p.z)) return true;
  return false;
}

// A. Ostacolo statico a traverso della strada principale: l'NPC DEVE curvarsi
//    intorno (non attraversare) e raggiungere comunque il nodo target.
function tStaticObstacle() {
  setWorldObstacle('test_A', OBST_A);
  try {
    const { sim, player } = buildWorld(7001, [walkerDef('oa', -40, 0, 'road_e')]);
    const n = sim.npcs[0];
    freshStart(n, -40, 0, 'road_e');
    const track = [{ x: n.x, z: n.z }];
    let t = 0;
    for (; t < 1800; t++) {
      simTick(sim, player, DT);
      track.push({ x: n.x, z: n.z });
      if (n.state === 'dwell' && n.agendaIdx >= 1) break;
    }
    const d = Math.hypot(WORLD.nodes.road_e.x - n.x, WORLD.nodes.road_e.z - n.z);
    const arrived = t < 1800 && n.state === 'dwell' && n.agendaIdx >= 1 &&
      d <= arrivalRadius('road_e') + 0.25;
    const pen = penetrate(track);
    // deve davvero essere STATO attorno all'ostacolo (z oltre il suo bordo+raggio)
    const detour = Math.max(...track.map(p => Math.abs(p.z)));
    // nessun campione deve mai cadere nel rettangolo dell'ostacolo (non solo
    // "puntoFree": il rettangolo e' il perimetro fisico che non si calca)
    const crossedRect = track.some(p =>
      p.x > OBST_A.minX && p.x < OBST_A.maxX && p.z > OBST_A.minZ && p.z < OBST_A.maxZ);
    return {
      pass: arrived && !pen && !crossedRect && detour >= 2.3,
      info: `arrived=${arrived} t=${t} d=${d.toFixed(2)} detourZ=${detour.toFixed(2)} pen=${pen} crossed=${crossedRect}`
    };
  } finally {
    clearWorldObstacle('test_A');
  }
}

// B. Fuga: la destinazione va RAGGIUNTA davvero (arrivo entro il raggio del
//    nodo), con un percorso che non attraversa mai un muro.
function tFleeReaches() {
  const { sim, player } = buildWorld(7002, [
    walkerDef('f1', 0, 0, 'road_c'), walkerDef('f2', 4, 4, 'road_c')
  ]);
  const n = sim.npcs[0];
  freshStart(n, 0, 0, 'road_c');
  mergeBelief(n.beliefs, 'evF', makeBelief({
    kind: 'kill', severity: 1, px: 0, pz: 0, place: 'strada', subject: 'x',
    channel: 'seen', confidence: 0.9, t: 0, provenance: []
  }), n.id);
  const start = { x: n.x, z: n.z };
  const track = [{ x: n.x, z: n.z }];
  let destId = null, t = 0;
  for (; t < 1800; t++) {
    simTick(sim, player, DT);
    track.push({ x: n.x, z: n.z });
    if (!destId && n.state === 'alerted' && n.fleeNode) destId = n.fleeNode;
    if (destId && n.state === 'dwell' && n.fleeNode === null) break;
  }
  const node = destId ? WORLD.nodes[destId] : null;
  const d = node ? Math.hypot(node.x - n.x, node.z - n.z) : Infinity;
  const moved = Math.hypot(n.x - start.x, n.z - start.z);
  const arriveR = node ? Math.max(1.5, arrivalRadius(destId)) : 0;
  const arrived = !!node && t < 1800 && d <= arriveR + 0.3;
  const pen = penetrate(track);
  return {
    pass: arrived && !pen && moved >= 15,
    info: `dest=${destId} t=${t} d=${d.toFixed(2)} (r=${arriveR.toFixed(2)}) moved=${moved.toFixed(1)} pen=${pen}`
  };
}

// C. Destinazione dentro un edificio SOLIDO: l'NPC non deve restare infiggato
//    contro il muro, deve terminare su un punto navigabile valido e fermarsi.
function tUnreachableTarget() {
  const { sim, player } = buildWorld(7003, [walkerDef('c1', 0, 0, 'road_c')]);
  const n = sim.npcs[0];
  freshStart(n, 0, 0, 'road_c');
  n.state = 'curious';
  n.gotoX = 12; n.gotoZ = 20; // interno di b2: nessuna porta, irraggiungibile
  const track = [{ x: n.x, z: n.z }];
  let t = 0;
  for (; t < 1200; t++) {
    simTick(sim, player, DT);
    track.push({ x: n.x, z: n.z });
    if (n.gotoX == null && n.state === 'dwell') break;
  }
  const settled = t < 1200 && n.gotoX == null && n.state === 'dwell';
  const valid = pointFree(n.x, n.z) && !pointInBuilding(n.x, n.z, 'b2');
  const d = Math.hypot(n.x - 12, n.z - 20);
  const pen = penetrate(track);
  return {
    pass: settled && valid && !pen && d <= 6,
    info: `settled=${settled} t=${t} pos=(${n.x.toFixed(2)},${n.z.toFixed(2)}) dToTarget=${d.toFixed(2)} valid=${valid} pen=${pen}`
  };
}

// D. Un muro compare A META' del percorso: la rete viene invalidata, il path
//    va ripianificato e l'arrivo resta garantito (nessun loop contro il muro).
function tInvalidateAndReroute() {
  const { sim, player } = buildWorld(7004, [walkerDef('d1', -40, 0, 'road_e')]);
  const n = sim.npcs[0];
  freshStart(n, -40, 0, 'road_e');
  const revBefore = navRevision();
  let revAfter = revBefore, pathNavRev = 0, sawPath = 0;
  const track = [{ x: n.x, z: n.z }];
  let t = 0;
  for (; t < 1800; t++) {
    if (t === 40) setWorldObstacle('test_D', OBST_D);
    simTick(sim, player, DT);
    track.push({ x: n.x, z: n.z });
    if (t > 40) {
      revAfter = navRevision();
      pathNavRev = n.pathNavRev;
      if (n.path.length > 1) sawPath++;
    }
    if (n.state === 'dwell' && n.agendaIdx >= 1) break;
  }
  const d = Math.hypot(WORLD.nodes.road_e.x - n.x, WORLD.nodes.road_e.z - n.z);
  const arrived = t < 1800 && n.state === 'dwell' && n.agendaIdx >= 1 &&
    d <= arrivalRadius('road_e') + 0.25;
  const bumped = revAfter > revBefore;
  const reconciled = pathNavRev === revAfter;
  const pen = penetrate(track);
  const crossedRect = track.some(p =>
    p.x > OBST_D.minX && p.x < OBST_D.maxX && p.z > OBST_D.minZ && p.z < OBST_D.maxZ);
  clearWorldObstacle('test_D');
  return {
    pass: arrived && bumped && reconciled && !pen && !crossedRect && sawPath > 0,
    info: `arrived=${arrived} t=${t} rev=${revBefore}->${revAfter} pathNavRev=${pathNavRev} rebuilt=${sawPath} pen=${pen} crossed=${crossedRect}`
  };
}

// E. Tute le persone fuggono dalla STESSA minaccia: devono disperdersi su piu'
//    uscite e non ammassarsi nello stesso identico punto.
function tFleeDispersion() {
  const { sim, player } = buildWorld(7005, [
    walkerDef('e1', 0, 0, 'road_c'), walkerDef('e2', 5, 5, 'road_c'),
    walkerDef('e3', -5, 5, 'road_c'), walkerDef('e4', -5, -5, 'road_c'),
    walkerDef('e5', 5, -5, 'road_c'), walkerDef('e6', 10, 0, 'road_c'),
    walkerDef('e7', -10, 0, 'road_c'), walkerDef('e8', 0, -10, 'road_c')
  ]);
  for (const n of sim.npcs) freshStart(n, n.x, n.z, 'road_c');
  for (const n of sim.npcs) {
    mergeBelief(n.beliefs, 'evE', makeBelief({
      kind: 'kill', severity: 1, px: 0, pz: 0, place: 'strada', subject: 'x',
      channel: 'seen', confidence: 0.9, t: 0, provenance: []
    }), n.id);
  }
  const chosen = new Map();
  let t = 0;
  for (; t < 2400; t++) {
    simTick(sim, player, DT);
    for (const n of sim.npcs) {
      if (!chosen.has(n.id) && n.state === 'alerted' && n.fleeNode) chosen.set(n.id, n.fleeNode);
    }
    if (t > 60 && sim.npcs.every(n => n.state === 'dwell' && n.fleeNode === null)) break;
  }
  const ids = [...chosen.values()];
  const distinct = new Set(ids).size;
  // distanza minima fra le posizioni finali: niente ammassamento nello stesso punto
  let minD = Infinity;
  for (let i = 0; i < sim.npcs.length; i++) {
    for (let j = i + 1; j < sim.npcs.length; j++) {
      const a = sim.npcs[i], b = sim.npcs[j];
      minD = Math.min(minD, Math.hypot(a.x - b.x, a.z - b.z));
    }
  }
  const started = chosen.size;
  const pen = penetrate(sim.npcs.map(n => ({ x: n.x, z: n.z })));
  return {
    pass: started === sim.npcs.length && distinct >= 4 && minD >= 0.65 && !pen,
    info: `started=${started} distinct=${distinct}/${ids.length} minFinalDist=${minD.toFixed(2)} pen=${pen} nodes=${[...new Set(ids)].join(',')}`
  };
}

// F. Determinismo: due run identici (stesso seed, ostacolo che compare e
//    sparisce agli stessi tick) devono produrre lo stesso hash.
function tDeterminismWithObstacles() {
  const script = () => {
    const { sim, player } = buildWorld(7006, [
      walkerDef('g1', -40, 0, 'road_e'), walkerDef('g2', 44, 0, 'road_w'),
      walkerDef('g3', 37, 20, 'bar_in'), walkerDef('g4', -20, 20, 'road_c')
    ]);
    for (const n of sim.npcs) freshStart(n, n.x, n.z, n.agenda[0].node);
    for (let i = 0; i < 500; i++) {
      if (i === 120) setWorldObstacle('test_F', OBST_D);
      if (i === 320) clearWorldObstacle('test_F');
      simTick(sim, player, DT);
    }
    clearWorldObstacle('test_F');
    return snapshotHash(sim);
  };
  const h1 = script();
  const h2 = script();
  return { pass: h1 === h2, info: `h1=${h1} h2=${h2}` };
}

// G. Persistence: il percorso reale (waypoint {x,z} + chiave obiettivo +
//    contatori di stallo) sopravvive al roundtrip e il continue resta identico.
function tPersistencePath() {
  const A = makeFakeGame(7007, 8);
  // ostacolo attivo: il path salvato e' una DEVIAZIONE, non la linea retta
  setWorldObstacle('test_G', OBST_D);
  try {
    for (let i = 0; i < 200; i++) {
      A.player.x = Math.sin(i / 50) * 20;
      A.player.z = Math.cos(i / 70) * 20;
      simTick(A.sim, A.player, DT);
    }
    // copia profonda: serializzare NON deve condividere i waypoint
    const snap = A.sim.npcs.find(n => n.path.length > 0);
    if (!snap) return { pass: false, info: 'nessun NPC con un percorso attivo al save' };
    const ser = serializeNpc(snap);
    const before = snap.path[0].x;
    ser.path[0].x = before + 999;
    const untouched = snap.path[0].x === before;
    ser.path[0].x = before;

    const saved = JSON.parse(JSON.stringify(serializeGame(A)));
    for (let i = 200; i < 400; i++) {
      A.player.x = Math.sin(i / 50) * 20;
      A.player.z = Math.cos(i / 70) * 20;
      simTick(A.sim, A.player, DT);
    }
    const hA = snapshotHash(A.sim);

    const B = makeFakeGame(31337, 8);
    applySave(B, saved);
    for (let i = 200; i < 400; i++) {
      B.player.x = Math.sin(i / 50) * 20;
      B.player.z = Math.cos(i / 70) * 20;
      simTick(B.sim, B.player, DT);
    }
    const hB = snapshotHash(B.sim);

    const restored = B.sim.npcs.find(n => n.path.length > 0);
    const fresh = makeNpc({ id: 'zz', name: 'Z', color: 1, x: 1, z: 1, relations: {}, agenda: [{ node: 'road_c', dwell: 1 }] }, makeRng(1));
    restoreNpc(fresh, ser);
    const independent = fresh.path !== ser.path && fresh.path[0] !== ser.path[0];
    const hasRoute = !!restored && restored.pathGoal != null && restored.pathNavRev === navRevision();
    return {
      pass: untouched && independent && hasRoute && hA === hB,
      info: `deepCopy=${untouched} independent=${independent} routeRestored=${hasRoute} hA=${hA} hB=${hB}`
    };
  } finally {
    clearWorldObstacle('test_G');
  }
}

// H. Regressione: il mondo deve continuare a garantire ESATTAMENTE i vincoli
//    su cui si fondano i test storici (strada libera, piazza aperta, b2
//    solido e contenente 12,20, nodi/archi percorribili, roster coerente).
function tWorldContract() {
  const nv = validateNav();
  const nodesOk = Object.values(WORLD.nodes).every(n => pointFree(n.x, n.z));
  // strada principale intatta (z in [-4,4], x in [-50,50])
  let roadOk = true;
  for (let x = -48; x <= 48; x += 1) {
    if (!pointFree(x, 0) || !pointFree(x, 3) || !pointFree(x, -3)) { roadOk = false; break; }
  }
  // piazza aperta: campioni liberi lontani dal cover wall a ovest
  const piaOk = [[37, 20], [29, 20], [44, 20], [37, 8], [45, 19], [33, 27], [40, 24]]
    .every(([x, z]) => pointFree(x, z));
  // b2 resta SOLIDO e contiene (12,20): e' il perimetro dei test storici
  const b2Ok = pointInBuilding(12, 20, 'b2') && !pointFree(12, 20);
  // tutti gli archi sono realmente percorribili in entrambe le direzioni
  const edgesOk = WORLD.edges.every(([a, b]) =>
    segmentClear(WORLD.nodes[a].x, WORLD.nodes[a].z, WORLD.nodes[b].x, WORLD.nodes[b].z) &&
    segmentClear(WORLD.nodes[b].x, WORLD.nodes[b].z, WORLD.nodes[a].x, WORLD.nodes[a].z));
  // roster e PLACE_IT devono referenziare solo nodi esistenti (i luoghi
  // vengono usati da routine e passaparola: un id fantasma li spezza)
  const nodeKeys = new Set(Object.keys(WORLD.nodes));
  let rosterOk = true;
  for (const d of ROSTER) {
    const refs = [];
    if (d.home) refs.push(d.home);
    if (d.work) refs.push(d.work);
    for (const a of d.agenda ?? []) refs.push(a.node);
    for (const s of d.schedule ?? []) refs.push(s.node);
    for (const k of refs) if (!nodeKeys.has(k)) rosterOk = false;
  }
  const placeOk = [...nodeKeys].every(k => typeof PLACE_IT[k] === 'string');
  const pass = nv.nodeViolations.length === 0 && nv.edgeViolations.length === 0 &&
    nodesOk && roadOk && piaOk && b2Ok && edgesOk && rosterOk && placeOk;
  return {
    pass,
    info: `nav=${nv.nodeViolations.length}/${nv.edgeViolations.length} nodes=${nodesOk} road=${roadOk} piazza=${piaOk} b2=${b2Ok} edges=${edgesOk} roster=${rosterOk} places=${placeOk}`
  };
}

export function runLocomotionTests() {
  const mk = (name, fn) => {
    try {
      const d = fn();
      return { name, pass: d.pass, detail: d.info ?? '' };
    } catch (e) {
      return { name, pass: false, detail: 'throw: ' + String(e.message ?? e).slice(0, 200) };
    }
  };
  return {
    suite: 'p0-locomotion',
    tests: [
      mk('nav_static_obstacle', tStaticObstacle),
      mk('flee_reaches_destination', tFleeReaches),
      mk('goto_unreachable_valid_point', tUnreachableTarget),
      mk('route_invalidation_reroute', tInvalidateAndReroute),
      mk('flee_multi_agent_dispersion', tFleeDispersion),
      mk('determinism_with_obstacles', tDeterminismWithObstacles),
      mk('persistence_path_locomotion', tPersistencePath),
      mk('world_contract_regression', tWorldContract)
    ]
  };
}
