// S8 — costruzione interni (three.js). Legge buildings.js (stesse quote dei
// collider): muri interni, solai, scale, battenti animati, vetri, mobili,
// luci. I gusci esterni restano in staticScene.js. Chiama buildInteriors()
// DOPO buildStaticScene (renderer.js).
import * as THREE from 'three';
import { BUILDING_LIST, FLOOR_H } from '../world/buildings.js';
import { sharedLambert } from './assets.js';
import * as K from './interiorKit.js';

const SKIP_FURN_MESH = new Set(['bar_counter', 'bar_t1', 'bar_t2', 'bar_t3']);

const BED_RY = {
  b2_bed: Math.PI, b2U_bed: 0, b3U_bed: 0,
  b4_bed1: Math.PI, b4_bed2: 0, b4U_bed: Math.PI,
};
const SOFA_RY = {
  b2_sofa: Math.PI / 2, b2U_sofa: -Math.PI / 2, b3U_sofa: Math.PI / 2,
  b4_sofa: Math.PI, b4U_sofa: Math.PI, b5_wait: 0,
};

function isPerimeter(r, b) {
  return r.minX <= b.x0 + 0.01 || r.maxX >= b.x1 - 0.01 ||
    r.minZ <= b.z0 + 0.01 || r.maxZ >= b.z1 - 0.01;
}
function cx(r) { return (r.minX + r.maxX) / 2; }
function cz(r) { return (r.minZ + r.maxZ) / 2; }
function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

const DOOR_STYLE = {
  residential_front: { leaf: 0x2f5a44, panel: 0x26473a },
  apartment: { leaf: 0x5a3d24, panel: 0x4a3120 },
  interior: { leaf: 0xe0d6c0, panel: 0xd0c4ac },
  bathroom: { leaf: 0xd8dee2, panel: 0xc4ccd2 },
  staff: { leaf: 0x6a7078, panel: 0x565c64 },
  service: { leaf: 0x3a3f46, panel: 0x2e3339 },
  shop_glass: { leaf: 0x4a3520, panel: 0x4a3520, glass: true },
  office: { leaf: 0x6b5a48, panel: 0x5a4a38, glassTop: true },
};

// Costruisce un battente (singolo o doppio) e lo registra.
function buildDoor(parent, def, reg) {
  const st = DOOR_STYLE[def.type] ?? DOOR_STYLE.interior;
  const trim = sharedLambert(0xe6e0d2);
  const mats = {
    trim, leaf: sharedLambert(st.leaf), panel: sharedLambert(st.panel),
    knob: sharedLambert(0xb8a03a),
  };
  const g = new THREE.Group();
  const y = def.y ?? 0;
  const double = def.w >= 1.5;
  const pivots = [];
  if (st.glass) {
    // vetrina: montanti legno + vetro, due ante scorrevoli a libro
    const fw = 0.09;
    if (def.axis === 'x') {
      K.BX(g, def.w + 0.2, 0.12, 0.24, trim, 0, def.h + 0.06, 0);
      K.BX(g, 0.1, def.h, 0.24, trim, -def.w / 2 - 0.05, def.h / 2, 0);
      K.BX(g, 0.1, def.h, 0.24, trim, def.w / 2 + 0.05, def.h / 2, 0);
    } else {
      K.BX(g, 0.24, def.h, def.w + 0.2, trim, 0, def.h / 2, 0);
      K.BX(g, 0.1, def.h, 0.24, trim, 0, def.h / 2, -def.w / 2 - 0.05);
      K.BX(g, 0.1, def.h, 0.24, trim, 0, def.h / 2, def.w / 2 + 0.05);
    }
    const leaves = double ? [-1, 1] : [0];
    for (const s of leaves) {
      const pv = new THREE.Group();
      const lw = double ? def.w / 2 : def.w;
      if (def.axis === 'x') {
        // cardine all'estremita': l'anta si estende verso l'interno
        const hingeX = double ? s * def.w / 2 : -def.w / 2;
        const inward = double ? -s : 1;
        K.BX(pv, lw, def.h - 0.06, 0.06, mats.leaf, inward * lw / 2, def.h / 2, 0);
        const gl = K.plane(pv, lw - 0.2, def.h - 0.7, glassy(), inward * lw / 2, def.h / 2 + 0.1, 0);
        gl.castShadow = false;
        pv.position.set(hingeX, 0, 0);
        pivots.push({ node: pv, dir: double ? s : -1 });
      } else {
        const hingeZ = double ? s * def.w / 2 : -def.w / 2;
        const inward = double ? -s : 1;
        K.BX(pv, 0.06, def.h - 0.06, lw, mats.leaf, 0, def.h / 2, inward * lw / 2);
        const gl = K.plane(pv, lw - 0.2, def.h - 0.7, glassy(), 0, def.h / 2 + 0.1, inward * lw / 2);
        gl.rotation.y = Math.PI / 2;
        gl.castShadow = false;
        pv.position.set(0, 0, hingeZ);
        pivots.push({ node: pv, dir: double ? s : -1 });
      }
      g.add(pv);
    }
  } else {
    const hingeLeft = hash(def.id) % 2 === 0;
    if (!double) {
      const u = K.doorUnit(def.axis, def.w, def.h, mats, hingeLeft);
      g.add(u.group);
      pivots.push({ node: u.pivot, dir: hingeLeft ? -1 : 1 });
    } else {
      // doppia anta: due mezze unita' affiancate
      for (const s of [-1, 1]) {
        const u = K.doorUnit(def.axis, def.w / 2 - 0.02, def.h, mats, s < 0);
        u.group.position.set(def.axis === 'x' ? s * def.w / 4 : 0, 0, def.axis === 'z' ? s * def.w / 4 : 0);
        g.add(u.group);
        pivots.push({ node: u.pivot, dir: s < 0 ? -1 : 1 });
      }
    }
    if (st.glassTop) {
      // sopraluce vetrato sopra l'anta ufficio
      const gl = K.plane(g, def.axis === 'x' ? def.w * 0.9 : 0.02, 0.5, glassy(),
        0, def.h - 0.35, 0);
      if (def.axis === 'z') gl.rotation.y = Math.PI / 2;
      gl.castShadow = false;
    }
  }
  g.position.set(def.x, y, def.z);
  parent.add(g);
  // lucchetto se serrata (nascosto allo sblocco da syncS8Visuals)
  let padlock = null;
  if (def.lockedBy) {
    padlock = K.BX(g, 0.14, 0.18, 0.07, sharedLambert(0x9aa0a8),
      def.axis === 'x' ? def.w / 2 - 0.25 : 0.08, 1.05, def.axis === 'x' ? 0.08 : def.w / 2 - 0.25);
  }
  reg.doors.set(def.id, { pivots, def, padlock });
  return g;
}

let _glass = null;
function glassy() {
  if (!_glass) {
    _glass = new THREE.MeshBasicMaterial({
      color: 0xb8d0dc, transparent: true, opacity: 0.28, side: THREE.DoubleSide,
    });
  }
  return _glass;
}

function buildWindow(parent, def, reg) {
  const trim = sharedLambert(0xe6e0d2);
  const sillM = sharedLambert(0x8d8578);
  const u = K.windowUnit(def.w, def.h, { trim, sill: sillM }, true);
  const y = def.y0 + def.h / 2;
  u.group.position.set(def.x, y, def.z);
  if (def.axis === 'z') u.group.rotation.y = Math.PI / 2;
  parent.add(u.group);
  // tendine interne dove la stanza lo richiede (timidezza/contesto)
  const h = hash(def.id);
  if (!def.fixed && (h % 3 === 0)) {
    K.curtain(parent, def.w + 0.5, def.h + 0.4, [0x7a6a5a, 0x5a6a7a, 0x8a4a3a][h % 3],
      def.x, y - def.h / 2, def.z + (def.axis === 'x' ? 0.25 : 0),
      def.axis === 'x' ? 0 : Math.PI / 2);
  }
  if (!def.fixed) reg.windows.set(def.id, { pane: u.pane, group: u.group, def });
  return u.group;
}

function wallBox(parent, r, y0, h, mat) {
  const w = r.maxX - r.minX, d = r.maxZ - r.minZ;
  if (w <= 0.01 || d <= 0.01) return null;
  return K.BX(parent, w, h, d, mat, cx(r), y0 + h / 2, cz(r));
}

// Arredo generico da id colliders: keyword -> pezzo kit.
function furnish(parent, f, mats, T) {
  const x = cx(f), z = cz(f), w = f.maxX - f.minX, d = f.maxZ - f.minZ;
  const id = f.id;
  const G = {
    wood: mats.wood, top: mats.top, cabinet: mats.cabinet, steel: mats.steel,
    stove: mats.stove, stoveRing: mats.stoveRing, fridge: mats.fridge, note: mats.note,
    fabric: mats.fabric, cushion: mats.cushion, mattress: mats.mattress,
    blanket: mats.blanket, pillow: mats.pillow, paper: mats.paper, cup: mats.cup,
    chair: mats.chair, screen: mats.screen, tvOff: mats.tvOff, ceramic: mats.ceramic,
    tubIn: mats.tubIn, seat: mats.seat, mirror: mats.mirror, trim: mats.trim,
    radiator: mats.radiator, panelBox: mats.panelBox, warn: mats.warn, bin: mats.bin,
    pot: mats.pot, leaf: mats.leaf, base: mats.base, shade: mats.shade,
    goods: mats.goods, books: mats.books, knob: mats.knob, box: mats.wood,
  };
  if (id.includes('kitchen') || id.includes('_kit')) {
    K.kitchenCounter(parent, w, { ...G }, x, 0, z, 0, { sink: true, stove: true, dishes: hash(id) % 2 === 0, uppers: true });
    return;
  }
  if (id.includes('fridge')) { K.fridge(parent, G, x, 0, z, w > d ? 0 : Math.PI / 2); return; }
  if (id.includes('sofa') || id.includes('wait')) {
    const wdt = Math.max(w, d);
    K.sofa(parent, wdt, { ...G }, x, 0, z, SOFA_RY[id] ?? (w > d ? Math.PI : Math.PI / 2));
    return;
  }
  if (id.includes('arm')) { K.armchair(parent, G, x, 0, z, -2.2); return; }
  if (id.includes('coffee')) { K.coffeeTable(parent, w, d, G, x, 0, z, 1 + (hash(id) % 2)); return; }
  if (id.includes('dining') || id.includes('tableB')) { K.diningSet(parent, w, d, G, x, 0, z, 3); return; }
  if (id.includes('tv')) { K.tvConsole(parent, w, G, x, 0, z, 0, id.includes('tvOn')); return; }
  if (id.includes('bed')) {
    K.bed(parent, w, d, G, x, 0, z, BED_RY[id] ?? 0);
    return;
  }
  if (id.includes('ward')) { K.wardrobe(parent, w, 2.1, d, G, x, 0, z); return; }
  if (id.includes('desk') && !id.includes('deskD') && !id.includes('deskR')) {
    K.desk(parent, w, G, x, 0, z, 0, true); return;
  }
  if (id.includes('deskD') || id.includes('deskR') || id.includes('desk1') || id.includes('desk2')) {
    K.desk(parent, w, G, x, 0, z, 0, !id.includes('deskR')); return;
  }
  if (id.includes('shelf') || id.includes('rack') || id.includes('files') || id.includes('cab')) {
    K.shelfUnit(parent, w, 1.9, d, G, x, 0, z, 0, 0.75); return;
  }
  if (id.includes('boxes') || id.includes('crate') || id.includes('chest') || id.includes('trunk')) {
    K.crate(parent, Math.min(w, 0.8), G, x - w * 0.2, 0, z, 0.1);
    K.crate(parent, Math.min(w, 0.6), G, x + w * 0.25, 0, z + 0.1, -0.15);
    if (w > 1.2) K.crate(parent, 0.5, G, x, 0.55, z - 0.1, 0.4);
    return;
  }
  if (id.includes('tub')) { K.tub(parent, w, d, G, x, 0, z); return; }
  if (id.includes('shower')) {
    K.BX(parent, w, 0.08, d, G.ceramic, x, 0.04, z);
    K.BX(parent, 0.06, 2.0, d, glassy(), x - w / 2 + 0.03, 1.0, z);
    return;
  }
  if (id.includes('wc') && !id.includes('wcS')) { K.toilet(parent, G, x, 0, z, 0); return; }
  if (id.includes('sink') || id.includes('wcS')) { K.sinkPedestal(parent, G, x, 0, z, true); return; }
  if (id.includes('counter') || id.includes('till')) {
    K.counter(parent, w, 0.95, d, G, x, 0, z);
    if (id.includes('till')) K.BX(parent, 0.35, 0.25, 0.3, G.knob, x, 1.08, z);
    return;
  }
  if (id.includes('gondola') || id.includes('shelfW') || id.includes('shelfE') || id.includes('shelfR')) {
    K.shopShelf(parent, w, 1.7, d, G, x, 0, z); return;
  }
  if (id.includes('fridgeB')) { K.fridge(parent, G, x, 0, z, 0); return; }
  if (id.includes('prep')) { K.counter(parent, w, 0.9, d, G, x, 0, z); return; }
  if (id.includes('meet')) { K.diningSet(parent, w, d, G, x, 0, z, 4); return; }
  // default: cassettiera/baule
  K.crate(parent, Math.min(w, d, 0.7), G, x, 0, z, hash(id) % 10 / 10);
}

// Dettagli stanza (livello 4): quadri, tappeti, piante, termosifoni, ecc.
function dressRoom(parent, room, mats) {
  const h = hash(room.id);
  const y = room.y ?? 0;
  const w = room.x1 - room.x0, d = room.z1 - room.z0;
  if (room.purpose === 'living_kitchen' || room.purpose === 'living_dining_kitchen' || room.purpose === 'cafe_floor') {
    K.rug(parent, Math.min(w - 1, 2.6), 1.8, [0x8a3a32, 0x3a5a7a, 0x6a5a3a][h % 3],
      (room.x0 + room.x1) / 2, y + 0.02, (room.z0 + room.z1) / 2 - 0.5);
    K.picture(parent, 0.6, 0.45, [0x4a6a8a, 0x8a6a3a, 0x5a7a4a][h % 3],
      room.x0 + 0.6, y + 1.8, room.z0 + 1.2, 0);
    if (h % 2 === 0) K.plant(parent, mats, room.x1 - 0.5, y, room.z0 + 0.5, false);
  }
  if (room.purpose === 'bedroom' || room.purpose === 'studio' || room.purpose === 'living_bed') {
    K.picture(parent, 0.5, 0.65, [0x7a5a8a, 0x4a7a6a, 0x8a4a2a][h % 3],
      (room.x0 + room.x1) / 2, y + 1.9, room.z1 - 0.1, Math.PI);
    K.rug(parent, 1.6, 2.2, [0x5a5a6a, 0x7a5a4a, 0x4a5a5a][h % 3],
      (room.x0 + room.x1) / 2, y + 0.02, (room.z0 + room.z1) / 2);
    if (h % 2 === 1) K.floorLamp(parent, mats, room.x0 + 0.4, y, room.z0 + 0.4);
  }
  if (room.purpose === 'bathroom' || room.purpose === 'restroom') {
    // asciugamani + tappetino
    K.BX(parent, 0.4, 0.06, 0.25, sharedLambert([0xb8c4c4, 0xc4b89a, 0x9ab8a4][h % 3]),
      (room.x0 + room.x1) / 2, y + 0.9, room.z0 + 0.15);
    K.rug(parent, 0.9, 0.6, 0x8a9a9a, (room.x0 + room.x1) / 2, y + 0.02, (room.z0 + room.z1) / 2);
  }
  if (room.purpose === 'office' || room.purpose === 'workspace' || room.purpose === 'back_office') {
    K.picture(parent, 0.7, 0.5, 0x3a4a5a, (room.x0 + room.x1) / 2, y + 1.9, room.z0 + 0.1, 0);
    if (h % 2 === 0) K.plant(parent, mats, room.x1 - 0.4, y, room.z0 + 0.4, true);
  }
  if (room.purpose === 'stairwell' || room.purpose === 'landing') {
    K.mailboxRow(parent, mats, (room.x0 + room.x1) / 2, y + 1.5, room.z0 + 0.15, 0, 4);
    K.picture(parent, 0.5, 0.4, 0x6a6a5a, room.x0 + 0.1, y + 1.9, (room.z0 + room.z1) / 2, Math.PI / 2);
  }
}

export function buildInteriors(scene) {
  const reg = { doors: new Map(), windows: new Map(), lights: new Map() };
  const g = new THREE.Group();
  g.name = 's8interiors';
  const LIT = new Set(['b2_liv', 'b3_sales', 'b4_liv', 'b5_work', 'barMain', 'b2_loft', 'b4_loft']);
  for (const b of BUILDING_LIST) {
    const mats = K.matsFor(b.theme);
    const bg = new THREE.Group();
    bg.name = 's8_' + b.id;
    // pavimento terra + inserti
    const fw = b.x1 - b.x0, fd = b.z1 - b.z0;
    const fl = new THREE.Mesh(
      new THREE.PlaneGeometry(fw, fd), mats.floor);
    fl.rotation.x = -Math.PI / 2;
    fl.position.set((b.x0 + b.x1) / 2, 0.03, (b.z0 + b.z1) / 2);
    fl.receiveShadow = true;
    bg.add(fl);
    for (const r of b.rooms) {
      if ((r.y ?? 0) !== 0) continue;
      if (r.purpose === 'bathroom' || r.purpose === 'restroom' || r.purpose === 'cafe_floor' || r.purpose === 'sales_floor') {
        K.rug(bg, r.x1 - r.x0 - 0.1, r.z1 - r.z0 - 0.1, 0xb0a890,
          (r.x0 + r.x1) / 2, 0.035, (r.z0 + r.z1) / 2);
      }
    }
    // tramezzi (solo non perimetrali; i pod anche al piano superiore)
    for (const w of b.walls) {
      if (isPerimeter(w, b)) continue;
      const pod = w.id.includes('pod');
      const cheek = w.id.includes('stair');
      wallBox(bg, w, 0, FLOOR_H, mats.wall);
      K.baseboard(bg, Math.max(w.maxX - w.minX, w.maxZ - w.minZ),
        sharedLambert(0x8d8578), cx(w), 0.03, cz(w),
        (w.maxX - w.minX) > (w.maxZ - w.minZ) ? 0 : Math.PI / 2);
      if (pod) wallBox(bg, w, FLOOR_H, 2.8, mats.wall);
      if (cheek) K.handrail(bg, Math.max(w.maxX - w.minX, w.maxZ - w.minZ),
        sharedLambert(0x4a3520), cx(w), FLOOR_H, cz(w),
        (w.maxX - w.minX) > (w.maxZ - w.minZ) ? 0 : Math.PI / 2);
    }
    // solai superiori + soffitti
    for (const s of b.slabU) {
      const w = s.x1 - s.x0, d = s.z1 - s.z0;
      // buco sopra la rampa: ritaglia sottraendo la striscia scala
      const holes = (b.stairs ?? []).filter(st =>
        st.x0 >= s.x0 - 0.01 && st.x1 <= s.x1 + 0.01 && st.z0 >= s.z0 - 0.01 && st.z1 <= s.z1 + 0.01);
      if (!holes.length) {
        K.BX(bg, w, 0.18, d, mats.floor, (s.x0 + s.x1) / 2, FLOOR_H - 0.09, (s.z0 + s.z1) / 2);
      } else {
        // due falde ai lati della rampa (la rampa resta un vuoto calpestabile)
        for (const st of holes) {
          if (s.x0 < st.x0) K.BX(bg, st.x0 - s.x0, 0.18, d, mats.floor, (s.x0 + st.x0) / 2, FLOOR_H - 0.09, (s.z0 + s.z1) / 2);
          if (st.x1 < s.x1) K.BX(bg, s.x1 - st.x1, 0.18, d, mats.floor, (st.x1 + s.x1) / 2, FLOOR_H - 0.09, (s.z0 + s.z1) / 2);
        }
      }
    }
    if (b.floors > 1) {
      // soffitto piano superiore (sottotetto cieco sopra)
      K.BX(bg, fw, 0.15, fd, sharedLambert(0xd8d2c2),
        (b.x0 + b.x1) / 2, FLOOR_H + 2.8 + 0.075, (b.z0 + b.z1) / 2);
    } else {
      const ch = b.id === 'bar' ? 3.0 : 3.4;
      K.BX(bg, fw, 0.15, fd, sharedLambert(0xd8d2c2),
        (b.x0 + b.x1) / 2, ch + 0.075, (b.z0 + b.z1) / 2);
    }
    // scale
    for (const st of b.stairs ?? []) {
      const len = st.axis === 'z' ? st.z1 - st.z0 : st.x1 - st.x0;
      const wdt = st.axis === 'z' ? st.x1 - st.x0 : st.z1 - st.z0;
      K.stairRun(bg, len, wdt, st.y1 - st.y0, mats.floor,
        (st.x0 + st.x1) / 2, st.y0, (st.z0 + st.z1) / 2, st.axis === 'x', false);
    }
    // porte + finestre
    for (const d of b.doors) buildDoor(bg, d, reg);
    for (const w of b.windows) buildWindow(bg, w, reg);
    // mobili (skip: quelli gia' in staticScene)
    for (const f of b.furniture) {
      if (SKIP_FURN_MESH.has(f.id)) continue;
      if (f.id === 'b2_balustrade') {
        K.handrail(bg, f.maxZ - f.minZ, sharedLambert(0x4a3520), cx(f), FLOOR_H, cz(f), Math.PI / 2);
        K.BX(bg, f.maxX - f.minX, 1.05, f.maxZ - f.minZ, mats.wall, cx(f), 0.525, cz(f));
        continue;
      }
      const upper = f.id.includes('U_');
      const gg = new THREE.Group();
      bg.add(gg);
      furnish(gg, f, mats, null);
      if (upper) gg.position.y = FLOOR_H;
    }
    // luci + dettagli stanze
    for (const L of b.lights) {
      const lamp = K.ceilingLamp(bg, L.x, L.y, L.z, L.warm, LIT.has(L.id));
      if (lamp.light) {
        lamp.light.name = 's8light:' + L.id;
        reg.lights.set(L.id, { light: lamp.light, bulb: lamp.bulb, base: 12 });
      } else {
        reg.lights.set(L.id, { light: null, bulb: lamp.bulb, base: 0 });
      }
    }
    for (const r of b.rooms) dressRoom(bg, r, mats);
    // radiatori/quadri elettrici dove ha senso (storytelling + stealth)
    if (b.id === 'b2') {
      K.radiator(bg, 1.2, mats, 12.5, 0, 14.35, 0);
      K.utilityPanel(bg, mats, 9.0, 1.6, 24.5, Math.PI / 2);
    }
    if (b.id === 'b4') {
      K.radiator(bg, 1.4, mats, -21, 0, -15.35, 0);
      K.utilityPanel(bg, mats, -24.6, 1.6, -24.6, 0);
      K.trashBin(bg, mats, -20.5, 0, -24.3);
    }
    if (b.id === 'b3') {
      K.utilityPanel(bg, mats, 26.3, 1.6, 25.6, Math.PI);
      K.trashBin(bg, mats, 20.6, 0, 25.2);
    }
    if (b.id === 'b5') {
      K.utilityPanel(bg, mats, 12.6, 1.6, -24.6, 0);
      K.trashBin(bg, mats, 12.5, 0, -24.2);
    }
    g.add(bg);
  }
  scene.add(g);
  scene.userData.s8 = reg;
  return reg;
}

// Accende/spegne una luce interna (da interruttore in tabella).
export function syncS8Light(scene, lightId, on) {
  const reg = scene.userData.s8;
  const e = reg?.lights.get(lightId);
  if (!e) return false;
  if (e.light) e.light.intensity = on ? e.base : 0;
  if (e.bulb) e.bulb.visible = on;
  return true;
}

// Stato iniziale luci dalla tabella interazioni (dopo boot/load).
export function syncAllS8Lights(scene, table) {
  if (!table) return;
  for (const d of Object.values(table)) {
    if (d.kind !== 'light' || !d.light) continue;
    syncS8Light(scene, d.light, d.state === 'on');
  }
}

// Applica lo stato runtime ai battenti (chiamato da game.js ogni frame).
export function syncS8Visuals(scene, doorRt, winRt) {
  const reg = scene.userData.s8;
  if (!reg) return;
  for (const [id, e] of reg.doors) {
    const rt = doorRt?.[id];
    const a = rt ? rt.anim : (e.def.state === 'open' ? 1 : 0);
    for (const p of e.pivots) p.node.rotation.y = -a * (e.def.openAngle ?? 1.85) * p.dir;
    if (e.padlock) e.padlock.visible = rt ? !!rt.lockedBy : !!e.def.lockedBy;
  }
  for (const [id, e] of reg.windows) {
    const rt = winRt?.[id];
    const a = rt ? rt.anim : 0;
    e.pane.position.x = a * 0.45;
    e.pane.visible = a < 0.95;
  }
}
