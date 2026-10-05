// Test navigazione/arrivo (S5): waypoint raggiungibili senza stallo contro
// collider (palo/yardstack), validazione boot del grafo, sanitizzazione goto,
// separazione NPC↔NPC deterministica e segno del movimento relativo alla camera.
// Ogni test ritorna {pass, detail}. Nessun Math.random: solo seed fissi.
import { buildWorld, runTicks, snapshotHash } from './harness.js';
import { WORLD } from '../world/mapData.js';
import { validateNav, arrivalRadius } from '../world/navigation.js';
import { simTick } from '../sim/simulation.js';
import { makePlayer, updatePlayer } from '../player/player.js';
import { pointInBuilding } from '../world/world.js';

const DT = 0.05;

function N(name, fn) {
  try {
    const d = fn();
    return { name, pass: d.pass, detail: d.info ?? '' };
  } catch (e) {
    return { name, pass: false, detail: 'throw: ' + String(e.message ?? e).slice(0, 200) };
  }
}

// 1. Validazione boot: nessun nodo e nessun arco in conflitto con i collider.
//    Un waypoint dentro/un sopra un collider e' un congelamento garantito
//    (caso storico: vic_n sul lampione, svc_in sullo yardstack).
function tNavNoConflicts() {
  const r = validateNav();
  return {
    pass: r.nodeViolations.length === 0 && r.edgeViolations.length === 0,
    info: `nodes=[${r.nodeViolations}] edges=[${r.edgeViolations}]`
  };
}

// 2. Ogni arco del grafo percorribile in entrambe le direzioni: l'NPC parte
//    dal nodo sorgente e deve arrivare davvero al nodo target (state=dwell,
//    agenda avanzata) entro un bound di tempo. Prima del fix gli archi verso
//    vic_n/svc_in si bloccavano a 0.65/1.55 dal nodo (soglia hardcoded 0.6).
function tNavArrivalReachable() {
  const { sim, player } = buildWorld(4401, [
    { id: 'walker', name: 'W', color: 1, x: 0, z: 0, relations: {}, agenda: [{ node: 'road_c', dwell: 999 }] }
  ]);
  const n = sim.npcs[0];
  const CAP = 1200; // 60s sim > tempo reale max (arco piu lungo ~50m @1.6m/s = 31s)
  const walks = [];
  for (const [a, b] of WORLD.edges) { walks.push([a, b]); walks.push([b, a]); }
  let maxTicks = 0, worst = '';
  for (const [a, b] of walks) {
    const sa = WORLD.nodes[a];
    n.x = sa.x; n.z = sa.z;
    n.state = 'dwell'; n.dwellLeft = 0; n.agendaIdx = 0;
    n.agenda = [{ node: b, dwell: 999 }];
    n.path = []; n.pathIdx = 0; n.fleeNode = null;
    n.gotoX = null; n.gotoZ = null;
    let t = 0;
    for (; t < CAP; t++) {
      simTick(sim, player, DT);
      if (n.state === 'dwell' && n.agendaIdx >= 1) break;
    }
    if (t >= CAP) {
      const d = Math.hypot(WORLD.nodes[b].x - n.x, WORLD.nodes[b].z - n.z);
      return {
        pass: false,
        info: `stallo ${a}->${b} dopo ${CAP} tick: distNodo=${d.toFixed(2)} (r=${arrivalRadius(b)}) state=${n.state} pathIdx=${n.pathIdx}/${n.path.length}`
      };
    }
    const d = Math.hypot(WORLD.nodes[b].x - n.x, WORLD.nodes[b].z - n.z);
    if (d > arrivalRadius(b) + 0.25) {
      return { pass: false, info: `arrivo lontano ${a}->${b}: dist=${d.toFixed(2)} > r=${arrivalRadius(b)}` };
    }
    if (t > maxTicks) { maxTicks = t; worst = `${a}->${b}`; }
  }
  return { pass: true, info: `${walks.length} cammini ok, max ${maxTicks} tick su ${worst}` };
}

// 3. Riproduzione del caso di Preview: cammino verso vic_n (il "palo"/lampione
//    a 18,12 storico) e verso svc_in (yardstack a -38,20 storico). Prima del
//    fix l'NPC restava fermo a 0.65/1.55 dai centri, state=walk, pathIdx bloccato.
function tNavPoleReproduction() {
  const { sim, player } = buildWorld(4402, [
    { id: 'p1', name: 'P1', color: 1, x: 18, z: -2, relations: {}, agenda: [{ node: 'vic_n', dwell: 999 }] },
    { id: 'p2', name: 'P2', color: 2, x: -32, z: 8, relations: {}, agenda: [{ node: 'svc_in', dwell: 999 }] }
  ]);
  const [p1, p2] = sim.npcs;
  p1.dwellLeft = 0; p2.dwellLeft = 0;
  let ok1 = false, ok2 = false, t = 0;
  for (; t < 1200; t++) {
    simTick(sim, player, DT);
    if (!ok1 && p1.state === 'dwell' && p1.agendaIdx >= 1) ok1 = true;
    if (!ok2 && p2.state === 'dwell' && p2.agendaIdx >= 1) ok2 = true;
    if (ok1 && ok2) break;
  }
  const d1 = Math.hypot(WORLD.nodes.vic_n.x - p1.x, WORLD.nodes.vic_n.z - p1.z);
  const d2 = Math.hypot(WORLD.nodes.svc_in.x - p2.x, WORLD.nodes.svc_in.z - p2.z);
  const stall1 = p1.state === 'walk' && p1.pathIdx < p1.path.length;
  const stall2 = p2.state === 'walk' && p2.pathIdx < p2.path.length;
  const pass = ok1 && ok2 && !stall1 && !stall2 &&
    d1 <= arrivalRadius('vic_n') + 0.25 && d2 <= arrivalRadius('svc_in') + 0.25;
  return {
    pass,
    info: `vic_n arrived=${ok1} d=${d1.toFixed(2)} state=${p1.state} | svc_in arrived=${ok2} d=${d2.toFixed(2)} state=${p2.state} | ticks=${t}`
  };
}

// 4. Movimento relativo alla camera: a.x=+1 (D) deve spostare lungo screen-right
//    (-cos,+sin); a.z=-1 (W) lungo il forward f=(sin,cos). Il bug storico
//    muoveva D a sinistra (segno errato del vettore right).
function tMovementCameraSign() {
  const step = (yaw, ax, az) => {
    const p = makePlayer(0, 0);
    const input = { axis: () => ({ x: ax, z: az }), run: () => false };
    updatePlayer(p, input, yaw, 0.2, []);
    return p;
  };
  const r1 = step(0, 1, 0);           // D, camera guarda +z -> destra = -x
  const r2 = step(Math.PI / 2, 1, 0); // D, camera guarda +x -> destra = +z
  const r3 = step(0, 0, -1);          // W, yaw 0 -> avanti = +z
  const r4 = step(Math.PI / 2, 0, -1); // W, yaw 90 -> avanti = +x
  const ok = r1.x < -0.1 && Math.abs(r1.z) < 1e-9 &&
    r2.z > 0.1 && Math.abs(r2.x) < 1e-9 &&
    r3.z > 0.1 && Math.abs(r3.x) < 1e-9 &&
    r4.x > 0.1 && Math.abs(r4.z) < 1e-9;
  return {
    pass: ok,
    info: `D@0=(${r1.x.toFixed(2)},${r1.z.toFixed(2)}) D@90=(${r2.x.toFixed(2)},${r2.z.toFixed(2)}) W@0=(${r3.x.toFixed(2)},${r3.z.toFixed(2)}) W@90=(${r4.x.toFixed(2)},${r4.z.toFixed(2)})`
  };
}

// 5. goto sanitizzato: una destinazione percepita dentro un edificio (b2) viene
//    proiettata fuori dal collider con resolveCircle e l'NPC ci arriva davvero.
//    Senza sanitizzazione spingerebbe contro il muro per sempre (mai dwell).
function tGotoSanitized() {
  const { sim, player } = buildWorld(4405, [
    { id: 'cur', name: 'Cur', color: 1, x: 0, z: 0, relations: {}, agenda: [{ node: 'road_c', dwell: 999 }] }
  ]);
  const n = sim.npcs[0];
  n.state = 'curious';
  n.gotoX = 12; n.gotoZ = 20; // centro di b2: dentro il collider
  const inBuildingAtStart = pointInBuilding(n.gotoX, n.gotoZ, 'b2');
  let sanitized = false, arrived = false, t = 0;
  for (; t < 600; t++) {
    simTick(sim, player, DT);
    if (n.gotoX != null && !pointInBuilding(n.gotoX, n.gotoZ, 'b2')) sanitized = true;
    if (n.state === 'dwell') { arrived = true; break; }
  }
  return {
    pass: inBuildingAtStart && sanitized && arrived,
    info: `startIn=${inBuildingAtStart} sanitized=${sanitized} arrived=${arrived} ticks=${t} state=${n.state}`
  };
}

// 6. Separazione NPC↔NPC: due vivi L1/L2 sovrapposti (0.5m) vengono spinti a
//    >=0.7m in modo deterministico: due run identiche -> stesso hash replay.
function tSeparationDeterministic() {
  const defs = [
    { id: 's1', name: 'S1', color: 1, x: 0, z: 0, relations: {}, agenda: [{ node: 'road_c', dwell: 999 }] },
    { id: 's2', name: 'S2', color: 2, x: 0.5, z: 0, relations: {}, agenda: [{ node: 'road_c', dwell: 999 }] }
  ];
  const mk = () => buildWorld(4406, defs);
  const w1 = mk(), w2 = mk();
  for (const w of [w1, w2]) for (const n of w.sim.npcs) { n.state = 'dwell'; n.dwellLeft = 1e9; }
  runTicks(w1.sim, w1.player, 100);
  runTicks(w2.sim, w2.player, 100);
  const [a, b] = w1.sim.npcs;
  const d = Math.hypot(a.x - b.x, a.z - b.z);
  const h1 = snapshotHash(w1.sim), h2 = snapshotHash(w2.sim);
  return {
    pass: d >= 0.69 && h1 === h2,
    info: `dist 0.500 -> ${d.toFixed(3)}, hash ${h1 === h2 ? 'uguale' : `diverso ${h1}!=${h2}`}`
  };
}

export function runNavTests() {
  return [
    N('nav_no_collider_conflicts', tNavNoConflicts),
    N('nav_arrival_reachable', tNavArrivalReachable),
    N('nav_pole_reproduction', tNavPoleReproduction),
    N('movement_camera_sign', tMovementCameraSign),
    N('goto_sanitized', tGotoSanitized),
    N('separation_deterministic', tSeparationDeterministic)
  ];
}
