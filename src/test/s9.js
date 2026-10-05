// S9 — test di accettazione dell'espansione (puri, Node-safe: niente DOM/three).
// Verificano i minimi di S9 §17 senza audit infiniti: area ~2x, navigabilita'
// totale, edifici dentro mappa e non sovrapposti, micro-zone, varianti,
// POI, percorsi alternativi, integrazione S2/S7/S8, 30 NPC nella nuova area,
// determinismo. Ogni test ritorna {pass, info}. Nessun Math.random.
import { WORLD, PLACE_IT } from '../world/mapData.js';
import { S9_ZONES, S9_POIS, s9Vegetation, zoneAt } from '../world/s9_district.js';
import { BUILDING_LIST } from '../world/buildings.js';
import { validateNav, buildNavGraph, planRoute, arrivalRadius } from '../world/navigation.js';
import { interactionInitialStates, doorObstacle } from '../world/interactions.js';
import { buildWorld, runTicks } from './harness.js';
import { simTick } from '../sim/simulation.js';

const DT = 0.05;

function T(name, fn) {
  try {
    const d = fn();
    return { name, pass: d.pass, detail: d.info ?? '' };
  } catch (e) {
    return { name, pass: false, detail: 'throw: ' + String(e.message ?? e).slice(0, 200) };
  }
}

const OLD_NODES = {
  road_w: [-40, 0], road_c: [0, 0], road_e: [44, 0],
  vic_n: [17, 13], vic_s: [18, -2],
  pia_c: [37, 20], pia_w: [29, 20], pia_e: [44, 20],
  bar_in: [-20, 20], bar_out: [-20, 11],
  b4_door: [-18, -14], b5_door: [10, -14],
  sq_s: [0, -10], pia_s: [37, 8], apt: [12, 12.3],
  svc_in: [-34.5, 20], svc_out: [-32, 8],
  court: [-20, 30], north_c: [-20, 33], north_w: [-30, 33], north_e: [30, 33],
};

function bfs(adj, a, b, ban) {
  const prev = { [a]: null };
  const q = [a];
  while (q.length) {
    const n = q.shift();
    if (n === b) break;
    for (const m of adj[n] ?? []) {
      if (m === ban) continue;
      if (!(m in prev)) { prev[m] = n; q.push(m); }
    }
  }
  if (!(b in prev)) return null;
  const p = [];
  let c = b;
  while (c) { p.unshift(c); c = prev[c]; }
  return p;
}

export function runS9Tests() {
  const tests = [];

  tests.push(T('s9-area-2x', () => {
    const ratio = (WORLD.size * WORLD.size) / 10000;
    return {
      pass: WORLD.size === 150 && ratio >= 1.9 && ratio <= 2.6,
      info: `size=${WORLD.size} superficie x${ratio.toFixed(2)}`,
    };
  }));

  tests.push(T('s9-inside-map', () => {
    const H = WORLD.size / 2 - 0.5;
    const bad = [];
    for (const b of WORLD.buildings) {
      if (Math.abs(b.x) + b.w / 2 > H || Math.abs(b.z) + b.d / 2 > H) bad.push(b.id);
    }
    for (const w of WORLD.coverWalls ?? []) {
      if (Math.abs(w.x) + w.w / 2 > H || Math.abs(w.z) + w.d / 2 > H) bad.push('wall@' + w.x + ',' + w.z);
    }
    return { pass: bad.length === 0, info: bad.length ? 'fuori: ' + bad.join(',') : `${WORLD.buildings.length} edifici dentro` };
  }));

  tests.push(T('s9-no-overlap', () => {
    const solids = WORLD.buildings.filter(b => !b.interior);
    const ov = [];
    for (let i = 0; i < solids.length; i++) {
      for (let j = i + 1; j < solids.length; j++) {
        const a = solids[i], b = solids[j];
        const ax0 = a.x - a.w / 2, ax1 = a.x + a.w / 2, az0 = a.z - a.d / 2, az1 = a.z + a.d / 2;
        const bx0 = b.x - b.w / 2, bx1 = b.x + b.w / 2, bz0 = b.z - b.d / 2, bz1 = b.z + b.d / 2;
        if (ax0 < bx1 - 0.05 && bx0 < ax1 - 0.05 && az0 < bz1 - 0.05 && bz0 < az1 - 0.05) ov.push(a.id + '&' + b.id);
      }
    }
    return { pass: ov.length === 0, info: ov.length ? ov.join(',') : `${solids.length} solidi senza sovrapposizioni` };
  }));

  tests.push(T('s9-nav-clean', () => {
    const v = validateNav();
    return {
      pass: v.nodeViolations.length === 0 && v.edgeViolations.length === 0,
      info: `nodi=${Object.keys(WORLD.nodes).length} archi=${WORLD.edges.length} viol=[${v.nodeViolations}] [${v.edgeViolations}]`,
    };
  }));

  tests.push(T('s9-zones-6', () => {
    const kinds = new Set(S9_ZONES.map(z => z.kind));
    const need = ['COMMERCIAL', 'RESIDENTIAL', 'OLD_TOWN', 'SERVICE', 'PUBLIC', 'OFFICE', 'TRANSITION'];
    const missing = need.filter(k => !kinds.has(k));
    return {
      pass: S9_ZONES.length >= 6 && missing.length === 0,
      info: `zone=${S9_ZONES.length} kinds=[${[...kinds]}]`,
    };
  }));

  tests.push(T('s9-variants-15', () => {
    const band = (h) => (h < 5 ? 'L' : h < 7 ? 'M' : h < 10 ? 'H' : 'T');
    const set = new Set();
    for (const b of WORLD.buildings) {
      if (b.interior) continue;
      set.add(`${b.facade ?? 'std'}|${band(b.h)}|${b.maint ?? 'kept'}`);
    }
    return { pass: set.size >= 15, info: `varianti=${set.size}` };
  }));

  tests.push(T('s9-pois-10', () => {
    const kinds = new Set(S9_POIS.map(p => p.kind));
    const need = ['SHOP', 'BAR', 'RESTAURANT', 'OFFICE', 'HOME', 'WORKSHOP', 'WAREHOUSE', 'PARK', 'PLAZA'];
    const missing = need.filter(k => !kinds.has(k));
    return {
      pass: S9_POIS.length >= 10 && missing.length === 0,
      info: `pois=${S9_POIS.length} kinds=[${[...kinds]}]`,
    };
  }));

  tests.push(T('s9-alt-paths-3', () => {
    const adj = buildNavGraph();
    const pairs = [['road_e', 's9_pia2c'], ['road_w', 's9_yard'], ['sq_s', 's9_courtOld']];
    const res = [];
    for (const [a, b] of pairs) {
      const p1 = bfs(adj, a, b, null);
      let p2 = null;
      if (p1) {
        for (const mid of p1.slice(1, -1)) {
          const q = bfs(adj, a, b, mid);
          if (q) { p2 = q; break; }
        }
      }
      res.push(`${a}>${b}:${p1 ? p1.length : 0}/${p2 ? p2.length : 0}`);
      if (!p1 || !p2) return { pass: false, info: res.join(' ') };
    }
    return { pass: true, info: res.join(' ') };
  }));

  tests.push(T('s9-s2-routes', () => {
    const legs = [
      ['road_e', 's9_pia2c'], ['sq_s', 's9_courtOld'], ['road_w', 's9_yard'],
      ['s9_mktW', 's9_mktIn'], ['s9_workE', 's9_workIn'],
      ['bar_out', 's9_mercC'], ['north_e', 's9_res5n'], ['sq_s', 's9_superN'],
    ];
    const bad = [];
    for (const [a, b] of legs) {
      const A = WORLD.nodes[a], B = WORLD.nodes[b];
      const r = planRoute(A.x, A.z, B.x, B.z);
      if (!r.ok) bad.push(`${a}>${b}`);
    }
    return { pass: bad.length === 0, info: bad.length ? 'falliti: ' + bad.join(',') : `${legs.length} tratte A* ok (anche interni market/officina)` };
  }));

  tests.push(T('s9-30npc-cross', () => {
    const targets = ['s9_pia2c', 's9_courtOld', 's9_yard', 's9_mktIn', 's9_workIn',
      's9_superN', 's9_res5n', 's9_offW', 's9_culdesac', 's9_pia2w'];
    const defs = [];
    for (let i = 0; i < 30; i++) {
      defs.push({
        id: 's9w' + i, name: 'S9W ' + i, color: 0x888888,
        x: -40 + (i % 5), z: (i % 3) - 1, relations: {},
        agenda: [{ node: targets[i % targets.length], dwell: 999 }],
      });
    }
    const { sim, player } = buildWorld(9002, defs);
    for (const n of sim.npcs) { n.dwellLeft = 0; }
    const arrived = new Set();
    for (let t = 0; t < 4000; t++) {
      simTick(sim, player, DT);
      for (const n of sim.npcs) {
        if (n.state === 'dwell' && n.agendaIdx >= 1) arrived.add(n.id);
      }
      if (arrived.size >= 30) break;
    }
    return {
      pass: arrived.size >= 24,
      info: `arrivati ${arrived.size}/30 nella nuova area`,
    };
  }));

  tests.push(T('s9-s7s8-intact', () => {
    // S8: registro interni intatto; S5: nodi/archi storici invariati;
    // S7: minimi interazioni + nuovi id S9 presenti.
    const s8ok = BUILDING_LIST.length === 5 && BUILDING_LIST.every(b => ['bar', 'b2', 'b3', 'b4', 'b5'].includes(b.id));
    const nodesOk = Object.entries(OLD_NODES).every(([k, [x, z]]) =>
      WORLD.nodes[k] && WORLD.nodes[k].x === x && WORLD.nodes[k].z === z);
    const placesOk = Object.keys(WORLD.nodes).every(k => typeof PLACE_IT[k] === 'string');
    const t = interactionInitialStates();
    const hasS9 = ['door_s9_mkt_back', 'door_s9_wrk_north', 'lamp_s9_pia2a',
      'sit_s9_pia2a', 'fountain_s9', 'van_s9_door', 'key_s9_mkt'].every(id => !!t[id]);
    const o = doorObstacle(t.door_s9_mkt_back);
    const doorOk = (o.maxX - o.minX) > 0.5 && (o.maxX - o.minX) < 3;
    const counts = Object.values(t).filter(d => d.kind === 'door').length >= 10;
    return {
      pass: s8ok && nodesOk && placesOk && hasS9 && doorOk && counts,
      info: `s8=${s8ok} oldNodes=${nodesOk} places=${placesOk} s9defs=${hasS9} doorOk=${doorOk}`,
    };
  }));

  tests.push(T('s9-determinism', () => {
    const v1 = JSON.stringify(s9Vegetation());
    const v2 = JSON.stringify(s9Vegetation());
    const z1 = zoneAt(63, -39)?.kind, z2 = zoneAt(63, -39)?.kind;
    const z3 = zoneAt(-25, 64)?.kind;
    return {
      pass: v1 === v2 && z1 === 'PUBLIC' && z1 === z2 && typeof z3 === 'string',
      info: `veg=${v1.length}ch piazza2=${z1} palazzoZone=${z3}`,
    };
  }));

  const failed = tests.filter(t => !t.pass);
  return {
    suite: 'p0-s9-expansion',
    tests,
    summary: `${tests.length - failed.length}/${tests.length} passati`,
  };
}
