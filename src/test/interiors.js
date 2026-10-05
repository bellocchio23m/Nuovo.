// Test S8 — interni veri (headless, puri: niente DOM/three).
// Coprono: registrazione edifici/stanze, porte (apri/chiudi/collider),
// serrature, finestre, navigazione interna, scale, transizione
// esterno/interno, persistenza, determinismo, interazioni, collisioni.
import { BUILDING_LIST, BUILDINGS, allDoors, allWindows, allStaticColliders,
  doorLeafRect, groundYAt, buildingAt, surfaceAt, debugInfo } from '../world/buildings.js';
import { createDoorRuntime, toggleDoor, updateDoors, isBlocking, doorOpenForNav,
  snapshotDoors, restoreDoors, driveFromTable, snapFromTable,
  createWindowRuntime, toggleWindow, updateWindows, windowBlocking, driveWin } from '../world/doors.js';
import { buildColliders, setDoorPassage, setWindowPassage, isDoorOpen } from '../world/world.js';
import { pointFree, segmentClear, planRoute, cellFree } from '../world/navigation.js';
import { interactionInitialStates, activate, nearestInteractable } from '../world/interactions.js';
import { serializeGame, applySave } from '../persist/persistence.js';
import { makeFakeGame } from './infra.js';

function T(name, fn) {
  try {
    const d = fn();
    return { name, pass: !!d.pass, detail: d.info ?? '' };
  } catch (e) {
    return { name, pass: false, detail: 'throw: ' + String(e.message ?? e).slice(0, 200) };
  }
}

function overlapArea(a, b) {
  const w = Math.min(a.maxX, b.maxX) - Math.max(a.minX, b.minX);
  const z = Math.min(a.maxZ, b.maxZ) - Math.max(a.minZ, b.minZ);
  return w > 0 && z > 0 ? w * z : 0;
}
const levelOf = (id) => (id.includes('U_') ? 3 : 0);

// Salva/ripristina i passaggi (i test aprono porte: mai inquinare le suite).
function doorGuard(fn) {
  return () => {
    const before = new Map();
    for (const d of allDoors()) before.set(d.id, isDoorOpen(d.id));
    try { return fn(); }
    finally { for (const [id, o] of before) setDoorPassage(id, o); }
  };
}

// A. registrazione edifici/stanze/porte/finestre
function tBuildingsRegistered() {
  const ids = BUILDING_LIST.map(b => b.id).sort().join(',');
  const rooms = BUILDING_LIST.reduce((n, b) => n + b.rooms.length, 0);
  const doors = allDoors().length, wins = allWindows().length;
  const heroes = BUILDING_LIST.filter(b => b.hero).map(b => b.id).sort().join(',');
  const pass = ids === 'b2,b3,b4,b5,bar' && rooms >= 20 && doors >= 25 && wins >= 25 &&
    heroes === 'b2,b3,b4';
  return { pass, info: `bldgs=[${ids}] rooms=${rooms} doors=${doors} wins=${wins} heroes=[${heroes}]` };
}

// B. layout deterministico (stesso hash a ogni import/valutazione)
function tLayoutDeterministic() {
  const h = JSON.stringify({ c: allStaticColliders(), d: allDoors(), w: allWindows() });
  let x = 0;
  for (let i = 0; i < h.length; i++) { x = (Math.imul(x, 31) + h.charCodeAt(i)) >>> 0; }
  const again = JSON.stringify({ c: allStaticColliders(), d: allDoors(), w: allWindows() });
  return { pass: h === again && x !== 0, info: `layoutHash=${x.toString(16)} stable=${h === again}` };
}

// C. apertura porta: stati + animazione + passaggio nav
const tDoorOpen = doorGuard(() => {
  const rt = createDoorRuntime(allDoors());
  const r1 = toggleDoor(rt, 'door_b2_main', false);
  const mid = rt.door_b2_main.state;
  updateDoors(rt, 2000);
  const end = rt.door_b2_main.state;
  const pass = r1.ok && r1.nowOpen && mid === 'opening' && end === 'open' &&
    doorOpenForNav(rt.door_b2_main) && !isBlocking(rt.door_b2_main);
  return { pass, info: `toggle=${r1.ok} mid=${mid} end=${end}` };
});

// D. transizione collider: chiusa blocca il vano, aperta libera
const tDoorCollider = doorGuard(() => {
  setDoorPassage('door_b4_main', false);
  buildColliders();
  const blocked = !pointFree(-18, -15);
  setDoorPassage('door_b4_main', true);
  buildColliders();
  const free = pointFree(-18, -15);
  const pass = blocked && free;
  return { pass, info: `closedBlocks=${blocked} openFrees=${free}` };
});

// E. chiusura porta
const tDoorClose = doorGuard(() => {
  const rt = createDoorRuntime(allDoors());
  toggleDoor(rt, 'door_b3_staff', false); // closed -> opening
  updateDoors(rt, 2000);
  const r2 = toggleDoor(rt, 'door_b3_staff', false); // open -> closing
  const mid = rt.door_b3_staff.state;
  updateDoors(rt, 2000);
  const pass = r2.ok && !r2.nowOpen && mid === 'closing' && rt.door_b3_staff.state === 'closed';
  return { pass, info: `close=${r2.ok} mid=${mid} end=${rt.door_b3_staff.state}` };
});

// F. serratura: senza chiave resta chiusa, con chiave si apre e resta sbloccata
const tDoorLocked = doorGuard(() => {
  const rt = createDoorRuntime(allDoors());
  const noKey = toggleDoor(rt, 'door_b2_apt', false);
  const stillLocked = !!rt.door_b2_apt.lockedBy;
  const withKey = toggleDoor(rt, 'door_b2_apt', true);
  updateDoors(rt, 2000);
  const pass = !noKey.ok && noKey.locked && stillLocked && withKey.ok &&
    rt.door_b2_apt.state === 'open' && rt.door_b2_apt.lockedBy === null;
  return { pass, info: `noKey=${!noKey.ok} locked=${noKey.locked} key=${withKey.ok} end=${rt.door_b2_apt.state}` };
});

// G. finestre: toggle + passabili che diventano varchi + fisse escluse
const tWindow = doorGuard(() => {
  const rt = createWindowRuntime(allWindows());
  const r1 = toggleWindow(rt, 'win_b3_side');
  updateWindows(rt, 1000);
  const side = rt.win_b3_side;
  const table = interactionInitialStates();
  const fixedAbsent = allWindows().filter(w => w.fixed).every(w => !table[w.id]);
  const nonPass = !windowBlocking({ passable: false, state: 'closed' });
  const pass = r1.ok && r1.nowOpen && side.state === 'open' && !windowBlocking(side) &&
    windowBlocking({ passable: true, state: 'closed' }) && nonPass && fixedAbsent;
  return { pass, info: `open=${r1.ok} blocking=${windowBlocking(side)} fixedAbsent=${fixedAbsent}` };
});

// H. navigazione interna su due livelli:
//  - griglia nav (NPC): hall/sala/vendita/reception via porte larghe (>=1.2m);
//  - scala giocatore (fisica agente): varco porta -> punto stanza continui,
//    senza muri invisibili (segmentClear + pointFree sui vani aperti).
// Le porte interne da 0.8-1.0m sono realistiche ma sotto la soglia della
// griglia conservativa (INFLATE): gli NPC le useranno con portali dedicati
// (S6), il giocatore le attraversa gia' oggi.
const GRID_DOORS = ['door_b2_main', 'door_b3_shop', 'door_b4_main', 'door_b5_main', 'door_bar_main'];
const tInteriorNav = doorGuard(() => {
  for (const d of allDoors()) setDoorPassage(d.id, true);
  setWindowPassage('win_b3_side', true);
  setWindowPassage('win_b4_side', true);
  buildColliders();
  const bad = [];
  // H1: griglia fino agli spazi serviti da porte larghe
  const gridProbes = [
    ['b2 hall', 10.5, 16.0], ['b3 sales', 24.5, 19.0],
    ['b5 recept', 10.0, -17.0], ['bar sala', -20.0, 18.0],
  ];
  for (const [name, x, z] of gridProbes) {
    if (!pointFree(x, z)) { bad.push(name + ':blocked'); continue; }
    if (!planRoute(-20, 5, x, z).ok) bad.push(name + ':noroute');
  }
  // H2: attraversamento giocatore stanza per stanza (varco -> interno)
  const walkProbes = [
    // [nome, portaX, portaZ, puntoX, puntoZ]
    ['b2 living', 11, 14, 12.7, 18.0],
    ['b2 bedroom', 13.7, 20, 13.35, 22.8],
    ['b3 back', 25.8, 21.5, 26.0, 22.0],
    ['b4 bed1', -16.5, -16.8, -16.0, -16.8],
    ['b4 bed2', -13.7, -20.2, -15.0, -21.8],
    ['b5 office', 8, -22.0, 6.0, -21.0],
    ['b5 break', 13, -19, 14.0, -21.0],
    ['bar office', -20.5, 24.8, -24.0, 24.9],
    ['b3 side-window', 20, 24.0, 21.0, 24.0],
    ['b4 side-window', -11, -21.7, -13.8, -21.7],
  ];
  for (const [name, gx, gz, x, z] of walkProbes) {
    if (!pointFree(gx, gz)) { bad.push(name + ':gapblocked'); continue; }
    if (!pointFree(x, z)) { bad.push(name + ':blocked'); continue; }
    if (!segmentClear(gx, gz, x, z)) bad.push(name + ':noseg');
  }
  void GRID_DOORS;
  return { pass: bad.length === 0, info: bad.length ? bad.join(';') : `${gridProbes.length + walkProbes.length} percorsi ok (griglia+giocatore)` };
});

// I. scale: quota continua lungo la rampa + solaio superiore
function tStairs() {
  const y0 = groundYAt(8.9, 15.5, 0);
  const y1 = groundYAt(8.9, 18.0, 0);
  const y2 = groundYAt(8.9, 20.5, 0);
  const ramp = y0 < 0.4 && y1 > 1.0 && y1 < 2.0 && y2 > 2.6;
  const slab = groundYAt(13.5, 17.0, 3.0) === 3.0;
  const ground = groundYAt(13.5, 17.0, 0) === 0;
  const outside = groundYAt(-20, 5, 0) === 0;
  const pass = ramp && slab && ground && outside;
  return { pass, info: `ramp=${y0.toFixed(2)}/${y1.toFixed(2)}/${y2.toFixed(2)} slab=${slab} ground=${ground}` };
}

// J. transizione esterno/interno senza salti (segmento attraverso porte aperte)
const tExteriorInterior = doorGuard(() => {
  setDoorPassage('door_b2_main', true);
  setDoorPassage('door_b4_main', true);
  buildColliders();
  const b2 = segmentClear(11, 12.0, 11, 16.0);
  const b4 = segmentClear(-18, -13.0, -18, -17.0);
  const bar = segmentClear(-20, 11, -20, 18);
  return { pass: b2 && b4 && bar, info: `b2=${b2} b4=${b4} bar=${bar}` };
});

// K. persistenza: porte/finestre/interruttori sopravvivono al roundtrip
function tPersistence() {
  const A = makeFakeGame(4242, 4);
  // fakeGame usa initialInteractables (solo yardstack): innesta voci S8
  Object.assign(A.interactables, interactionInitialStates());
  A.interactables.door_b2_main.state = 'open';
  A.interactables.door_b2_apt.lockedBy = null;
  A.interactables.win_b3_side.state = 'open';
  A.interactables.sw_b2_liv.state = 'off';
  A.player.y = 3.0;
  const saved = JSON.parse(JSON.stringify(serializeGame(A)));
  const B = makeFakeGame(9999, 4);
  Object.assign(B.interactables, interactionInitialStates());
  applySave(B, saved);
  const ok = B.interactables.door_b2_main.state === 'open' &&
    B.interactables.win_b3_side.state === 'open' &&
    B.interactables.sw_b2_liv.state === 'off' &&
    B.player.y === 3.0;
  // snapshot runtime porte
  const rt = createDoorRuntime(allDoors());
  const snap = snapshotDoors(rt);
  rt.door_b4_main.state = 'open';
  restoreDoors(rt, snap);
  const rtOk = rt.door_b4_main.state === 'closed';
  return { pass: ok && rtOk, info: `doors=${ok} snapRestore=${rtOk}` };
}

// M. interazioni registrate: ogni porta S8 ha voce con quota; fisse escluse
function tInteractions() {
  const table = interactionInitialStates();
  const missing = allDoors().filter(d => !table[d.id]).map(d => d.id);
  const winsMissing = allWindows().filter(w => !w.fixed && !table[w.id]).map(w => w.id);
  const fixedLeak = allWindows().filter(w => w.fixed && table[w.id]).map(w => w.id);
  const yOk = allDoors().every(d => table[d.id] && table[d.id].y === (d.y ?? 0));
  const near = nearestInteractable(table, -18, -24.5, 3.0, 0);
  const farY = nearestInteractable(table, 11, 21.6, 3.0, 0); // porta piano sup.: filtrata
  const pass = !missing.length && !winsMissing.length && !fixedLeak.length && yOk &&
    near?.id === 'door_b4_back' && (farY === null || farY.id !== 'door_b2_hallU');
  return { pass, info: `missing=[${missing}] winMissing=[${winsMissing}] fixedLeak=[${fixedLeak}] near=${near?.id} farY=${farY?.id ?? 'null'}` };
}

// N. collisioni valide: mobili stesso livello mai sovrapposti; vani liberi
const tNoOverlap = doorGuard(() => {
  for (const d of allDoors()) setDoorPassage(d.id, d.state === 'open');
  setWindowPassage('win_b3_side', true);
  setWindowPassage('win_b4_side', true);
  buildColliders();
  const bad = [];
  for (const b of BUILDING_LIST) {
    const fs = b.furniture;
    for (let i = 0; i < fs.length; i++) {
      for (let j = i + 1; j < fs.length; j++) {
        if (levelOf(fs[i].id) !== levelOf(fs[j].id)) continue;
        if (overlapArea(fs[i], fs[j]) > 0.005) bad.push(`overlap:${fs[i].id}/${fs[j].id}`);
      }
    }
    // vani porta liberi dai mobili (stesso livello)
    for (const d of b.doors) {
      const r = doorLeafRect(d);
      for (const f of fs) {
        if (levelOf(f.id) !== (d.y ?? 0)) continue;
        if (overlapArea(r, f) > 0.02) bad.push(`doorblocked:${d.id}/${f.id}`);
      }
    }
  }
  // centro b2 resta solido (contratto storico); corridoio bar libero
  if (pointFree(12, 20)) bad.push('b2center:free');
  if (!pointFree(-20, 17)) bad.push('barlane:blocked');
  return { pass: bad.length === 0, info: bad.length ? bad.slice(0, 6).join(';') : 'mobili/vani/corridoi ok' };
});

// P. performance: collider + route restano economici
function tPerf() {
  const t0 = performance.now();
  for (let i = 0; i < 20; i++) buildColliders();
  const buildMs = (performance.now() - t0) / 20;
  const t1 = performance.now();
  let ok = 0;
  for (let i = 0; i < 20; i++) {
    const r = planRoute(-40 + i, 0, 37, 20);
    if (r.ok) ok++;
  }
  const routeMs = (performance.now() - t1) / 20;
  const pass = buildMs < 25 && routeMs < 60 && ok === 20;
  return { pass, info: `build=${buildMs.toFixed(1)}ms route=${routeMs.toFixed(1)}ms ok=${ok}/20` };
}

// O. smoke render: moduli three importabili headless + registro porte/finestre
async function tRenderSmoke() {
  try {
    const kit = await import('../render/interiorKit.js');
    const ins = await import('../render/interiors.js');
    const funcs = ['bed', 'sofa', 'kitchenCounter', 'tub', 'toilet', 'stairRun', 'doorUnit', 'windowUnit'];
    const kitOk = funcs.every(f => typeof kit[f] === 'function');
    const intOk = typeof ins.buildInteriors === 'function' && typeof ins.syncS8Visuals === 'function';
    return { pass: kitOk && intOk, info: `kit=${kitOk} interiors=${intOk}` };
  } catch (e) {
    return { pass: false, detail: 'throw: ' + String(e.message ?? e).slice(0, 200) };
  }
}

export function runInteriorTests() {
  const sync = [
    T('s8_buildings_registered', tBuildingsRegistered),
    T('s8_layout_deterministic', tLayoutDeterministic),
    T('s8_door_open', tDoorOpen),
    T('s8_door_collider', tDoorCollider),
    T('s8_door_close', tDoorClose),
    T('s8_door_locked', tDoorLocked),
    T('s8_window', tWindow),
    T('s8_interior_nav', tInteriorNav),
    T('s8_stairs', tStairs),
    T('s8_exterior_interior', tExteriorInterior),
    T('s8_persistence', tPersistence),
    T('s8_interactions', tInteractions),
    T('s8_no_overlap', tNoOverlap),
    T('s8_perf', tPerf),
  ];
  return { suite: 's8-interiors', tests: sync, async: [tRenderSmoke] };
}

export async function runInteriorTestsAsync() {
  const { tests, async: ato } = runInteriorTests();
  const out = [...tests];
  for (const f of ato) {
    try {
      const d = await f();
      out.push({ name: 's8_render_smoke', pass: !!d.pass, detail: d.info ?? d.detail ?? '' });
    } catch (e) {
      out.push({ name: 's8_render_smoke', pass: false, detail: 'throw: ' + String(e.message ?? e).slice(0, 200) });
    }
  }
  const passed = out.filter(t => t.pass).length;
  return { suite: 's8-interiors', passed, total: out.length, tests: out };
}
