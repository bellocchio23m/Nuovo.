// S8 — kit architettonico modulare riusabile (three.js, ma import-safe in
// Node: nessuna texture canvas a import-time, solo geometrie/materiali base).
// Ogni pezzo riusa geometrie e materiali condivisi (assets.js): vicino al
// giocatore c'e' dettaglio stratificato, lontano resta la silhouette.
import * as THREE from 'three';
import { sharedLambert, sharedGeo } from './assets.js';

const _mats = new Map();
function lam(color) { return sharedLambert(color); }
function double(color) {
  let m = _mats.get('d' + color);
  if (!m) {
    m = new THREE.MeshLambertMaterial({ color, side: THREE.DoubleSide });
    _mats.set('d' + color, m);
  }
  return m;
}
function glassMat() {
  let m = _mats.get('glass');
  if (!m) {
    m = new THREE.MeshBasicMaterial({
      color: 0xaac4d4, transparent: true, opacity: 0.26, side: THREE.DoubleSide,
    });
    _mats.set('glass', m);
  }
  return m;
}
function glowMat(color) {
  const k = 'glow' + color;
  let m = _mats.get(k);
  if (!m) {
    m = new THREE.MeshBasicMaterial({ color });
    _mats.set(k, m);
  }
  return m;
}

function boxKey(w, h, d) {
  return `bx${w.toFixed(2)}x${h.toFixed(2)}x${d.toFixed(2)}`;
}
export function BX(parent, w, h, d, mat, x, y, z, ry = 0) {
  const m = new THREE.Mesh(sharedGeo(boxKey(w, h, d), () => new THREE.BoxGeometry(w, h, d)), mat);
  m.position.set(x, y, z);
  if (ry) m.rotation.y = ry;
  m.castShadow = true; m.receiveShadow = true;
  parent.add(m);
  return m;
}
export function CYL(parent, rt, rb, h, mat, x, y, z, seg = 8) {
  const m = new THREE.Mesh(
    sharedGeo(`cy${rt}_${rb}_${h}_${seg}`, () => new THREE.CylinderGeometry(rt, rb, h, seg)), mat);
  m.position.set(x, y, z);
  m.castShadow = true; m.receiveShadow = true;
  parent.add(m);
  return m;
}
export function plane(parent, w, h, mat, x, y, z, rx = 0, ry = 0) {
  const m = new THREE.Mesh(sharedGeo(`pl${w.toFixed(2)}x${h.toFixed(2)}`, () => new THREE.PlaneGeometry(w, h)), mat);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, 0);
  m.receiveShadow = true;
  parent.add(m);
  return m;
}

// Tavolozza temi (deterministica per edificio).
export const THEMES = {
  modernized: { wall: 0xe6dcc4, floor: 0x8a6a48, fabric: 0x4a6a8a, wood: 0x6b4a2c, accent: 0xc86a3a },
  shop_worn: { wall: 0xd8cba8, floor: 0x9a8a72, fabric: 0x7a3a2a, wood: 0x5a4128, accent: 0x2a6a4a },
  older_family: { wall: 0xd9c9a8, floor: 0x7d5a36, fabric: 0x5a4a6a, wood: 0x4a3520, accent: 0x8a2a22 },
  office_modern: { wall: 0xd8dce0, floor: 0x8a8d90, fabric: 0x2a4a6a, wood: 0x8a8078, accent: 0x2a7a9a },
  bar_warm: { wall: 0xd9b06a, floor: 0x8a6a4a, fabric: 0x6a2a22, wood: 0x4a3520, accent: 0xc8a03a },
};
export function themeOf(id) { return THEMES[id] ?? THEMES.modernized; }

// ---- pezzi architettonici ----
export function pillar(parent, x, z, y0, h, mat) {
  return BX(parent, 0.5, h, 0.5, mat, x, y0 + h / 2, z);
}
export function baseboard(parent, len, mat, x, y, z, ry = 0) {
  return BX(parent, len, 0.09, 0.03, mat, x, y + 0.045, z, ry);
}
export function archTop(parent, w, mat, x, y, z, ry = 0) {
  return BX(parent, w, 0.25, 0.2, mat, x, y, z, ry);
}
// Scala dritta: gradini pieni (pedate 0.28, alzate ~0.175), guance chiuse.
export function stairRun(parent, len, width, rise, mat, x, y0, z, alongX = false, flip = false) {
  const g = new THREE.Group();
  const n = Math.max(3, Math.round(rise / 0.175));
  const tread = len / n;
  for (let i = 0; i < n; i++) {
    const h = rise * ((i + 1) / n);
    const px = alongX ? (flip ? -len / 2 + tread * (i + 0.5) : -len / 2 + tread * (i + 0.5)) : 0;
    const pz = alongX ? 0 : (flip ? len / 2 - tread * (i + 0.5) : -len / 2 + tread * (i + 0.5));
    BX(g, alongX ? tread + 0.02 : width, h, alongX ? width : tread + 0.02, mat, px, y0 + h / 2, pz);
  }
  g.position.set(x, 0, z);
  parent.add(g);
  return g;
}
export function handrail(parent, len, mat, x, y, z, ry = 0) {
  const g = new THREE.Group();
  BX(g, len, 0.06, 0.06, mat, 0, 0.9, 0);
  for (let k = 0; k * 0.9 < len; k++) {
    BX(g, 0.05, 0.9, 0.05, mat, -len / 2 + 0.2 + k * 0.9, 0.45, 0);
  }
  g.position.set(x, y, z);
  g.rotation.y = ry;
  parent.add(g);
  return g;
}
// Telaio porta + anta su cardine (pivot). Ritorna {group, pivot}.
export function doorUnit(axis, w, h, mats, hingeLeft = true) {
  const g = new THREE.Group();
  const pivot = new THREE.Group();
  const fw = 0.1;
  if (axis === 'x') {
    BX(g, w + 2 * fw, fw, 0.24, mats.trim, 0, h + fw / 2, 0);
    BX(g, fw, h, 0.24, mats.trim, -w / 2 - fw / 2, h / 2, 0);
    BX(g, fw, h, 0.24, mats.trim, w / 2 + fw / 2, h / 2, 0);
    const leaf = BX(pivot, w, h - 0.04, 0.07, mats.leaf, hingeLeft ? w / 2 : -w / 2, h / 2, 0);
    leaf.castShadow = true;
    // pannelli incassati + maniglia
    BX(pivot, w * 0.7, h * 0.32, 0.02, mats.panel, hingeLeft ? w / 2 : -w / 2, h * 0.68, 0.045);
    BX(pivot, w * 0.7, h * 0.32, 0.02, mats.panel, hingeLeft ? w / 2 : -w / 2, h * 0.28, 0.045);
    const hx = hingeLeft ? -w / 2 : w / 2;
    pivot.position.set(hx, 0, 0);
    const knob = new THREE.Mesh(
      sharedGeo('knob', () => new THREE.SphereGeometry(0.045, 8, 6)), mats.knob);
    knob.position.set(hingeLeft ? w - 0.15 : -(w - 0.15), 1.0, 0.08);
    pivot.add(knob);
  } else {
    BX(g, fw, h, 0.24, mats.trim, 0, h / 2, -w / 2 - fw / 2);
    BX(g, fw, h, 0.24, mats.trim, 0, h / 2, w / 2 + fw / 2);
    BX(g, w + 2 * fw, fw, 0.24, mats.trim, 0, h + fw / 2, 0);
    const leaf = BX(pivot, 0.07, h - 0.04, w, mats.leaf, 0, h / 2, hingeLeft ? w / 2 : -w / 2);
    leaf.castShadow = true;
    const hz = hingeLeft ? -w / 2 : w / 2;
    pivot.position.set(0, 0, hz);
    const knob = new THREE.Mesh(
      sharedGeo('knob', () => new THREE.SphereGeometry(0.045, 8, 6)), mats.knob);
    knob.position.set(0.08, 1.0, hingeLeft ? w - 0.15 : -(w - 0.15));
    pivot.add(knob);
  }
  g.add(pivot);
  return { group: g, pivot };
}
// Finestra: telaio + traversi + vetro. Ritorna {group, pane} (pane scorre se apribile).
export function windowUnit(w, h, mats, withSill = true) {
  const g = new THREE.Group();
  const t = 0.08;
  BX(g, w + 2 * t, t, 0.14, mats.trim, 0, h / 2 + t / 2, 0);
  BX(g, w + 2 * t, t, 0.14, mats.trim, 0, -h / 2 - t / 2, 0);
  BX(g, t, h, 0.14, mats.trim, -w / 2 - t / 2, 0, 0);
  BX(g, t, h, 0.14, mats.trim, w / 2 + t / 2, 0, 0);
  BX(g, 0.05, h, 0.05, mats.trim, 0, 0, 0);
  BX(g, w, 0.05, 0.05, mats.trim, 0, 0, 0);
  const pane = plane(g, w, h, glassMat(), 0, 0, 0);
  pane.castShadow = false;
  if (withSill) BX(g, w + 0.4, 0.09, 0.24, mats.sill, 0, -h / 2 - 0.12, 0.05);
  return { group: g, pane };
}
export function ceilingLamp(parent, x, y, z, warm = 0xffd9a0, withLight = false) {
  const g = new THREE.Group();
  CYL(g, 0.02, 0.02, 0.5, lam(0x3a3f46), 0, -0.25, 0, 5);
  CYL(g, 0.22, 0.3, 0.18, lam(0x8a8078), 0, -0.55, 0, 10);
  const bulb = new THREE.Mesh(sharedGeo('bulb', () => new THREE.SphereGeometry(0.09, 8, 6)), glowMat(warm));
  bulb.position.set(0, -0.68, 0);
  g.add(bulb);
  g.position.set(x, y, z);
  parent.add(g);
  let light = null;
  if (withLight) {
    light = new THREE.PointLight(warm, 12, 14, 1.6);
    light.position.set(x, y - 0.8, z);
    parent.add(light);
  }
  return { group: g, light, bulb };
}
export function wallLamp(parent, x, y, z, ry, warm = 0xffd9a0) {
  const g = new THREE.Group();
  BX(g, 0.08, 0.14, 0.1, lam(0x3a3f46), 0, 0, 0);
  const bulb = new THREE.Mesh(sharedGeo('bulb', () => new THREE.SphereGeometry(0.07, 8, 6)), glowMat(warm));
  bulb.position.set(0, 0.1, 0.06);
  g.add(bulb);
  g.position.set(x, y, z);
  g.rotation.y = ry;
  parent.add(g);
  return g;
}

// ---- mobili ----
export function bed(parent, w, l, mats, x, y, z, ry = 0) {
  const g = new THREE.Group();
  BX(g, w, 0.28, l, mats.wood, 0, 0.22, 0);
  BX(g, w, 0.7, 0.1, mats.wood, 0, 0.5, -l / 2 + 0.05);
  BX(g, w - 0.12, 0.14, l - 0.12, mats.mattress, 0, 0.43, 0);
  BX(g, w - 0.3, 0.12, l * 0.32, mats.blanket, 0, 0.5, l * 0.18);
  BX(g, w * 0.36, 0.12, 0.3, mats.pillow, -w * 0.22, 0.54, -l * 0.3);
  BX(g, w * 0.36, 0.12, 0.3, mats.pillow, w * 0.22, 0.54, -l * 0.3);
  g.position.set(x, y, z); g.rotation.y = ry;
  parent.add(g);
  return g;
}
export function wardrobe(parent, w, h, d, mats, x, y, z, ry = 0) {
  const g = new THREE.Group();
  BX(g, w, h, d, mats.wood, 0, h / 2, 0);
  BX(g, 0.03, h * 0.8, 0.02, mats.knob, 0, h * 0.45, d / 2 + 0.01);
  BX(g, w * 0.9, 0.06, d * 0.9, mats.top, 0, h + 0.03, 0);
  g.position.set(x, y, z); g.rotation.y = ry;
  parent.add(g);
  return g;
}
export function sofa(parent, w, mats, x, y, z, ry = 0) {
  const g = new THREE.Group();
  const d = 0.85;
  BX(g, w, 0.35, d, mats.fabric, 0, 0.32, 0);
  BX(g, w, 0.55, 0.2, mats.fabric, 0, 0.6, -d / 2 + 0.1);
  BX(g, 0.2, 0.5, d, mats.fabric, -w / 2 + 0.1, 0.5, 0);
  BX(g, 0.2, 0.5, d, mats.fabric, w / 2 - 0.1, 0.5, 0);
  BX(g, 0.4, 0.35, 0.12, mats.cushion, -w * 0.25, 0.62, -d / 2 + 0.22);
  BX(g, 0.4, 0.35, 0.12, mats.cushion, w * 0.25, 0.62, -d / 2 + 0.22);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    BX(g, 0.07, 0.15, 0.07, mats.wood, sx * (w / 2 - 0.1), 0.075, sz * (d / 2 - 0.1));
  }
  g.position.set(x, y, z); g.rotation.y = ry;
  parent.add(g);
  return g;
}
export function armchair(parent, mats, x, y, z, ry = 0) {
  return sofa(parent, 0.8, mats, x, y, z, ry);
}
export function coffeeTable(parent, w, l, mats, x, y, z, clutter = 0) {
  const g = new THREE.Group();
  BX(g, w, 0.06, l, mats.wood, 0, 0.4, 0);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    BX(g, 0.06, 0.4, 0.06, mats.wood, sx * (w / 2 - 0.05), 0.2, sz * (l / 2 - 0.05));
  }
  if (clutter > 0) BX(g, 0.3, 0.04, 0.22, mats.paper, -w * 0.15, 0.45, 0);
  if (clutter > 1) CYL(g, 0.05, 0.04, 0.12, mats.cup, w * 0.2, 0.49, 0.1, 7);
  g.position.set(x, y, z);
  parent.add(g);
  return g;
}
export function diningSet(parent, w, l, mats, x, y, z, chairs = 2) {
  const g = new THREE.Group();
  BX(g, w, 0.06, l, mats.wood, 0, 0.72, 0);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    BX(g, 0.07, 0.72, 0.07, mats.wood, sx * (w / 2 - 0.06), 0.36, sz * (l / 2 - 0.06));
  }
  for (let i = 0; i < chairs; i++) {
    const cx = (i % 2 ? 1 : -1) * (w / 2 + 0.35);
    const cz = (i < 2 ? -0.1 : 0.5) * (i % 2 ? 1 : -1);
    BX(g, 0.42, 0.05, 0.42, mats.chair, cx, 0.45, cz * 0.4);
    BX(g, 0.42, 0.5, 0.05, mats.chair, cx, 0.7, cz * 0.4 + (cz >= 0 ? 0.2 : -0.2));
    BX(g, 0.05, 0.45, 0.05, mats.chair, cx - 0.15, 0.22, cz * 0.4);
    BX(g, 0.05, 0.45, 0.05, mats.chair, cx + 0.15, 0.22, cz * 0.4);
  }
  g.position.set(x, y, z);
  parent.add(g);
  return g;
}
export function kitchenCounter(parent, len, mats, x, y, z, ry = 0, opts = {}) {
  const g = new THREE.Group();
  const d = 0.65;
  BX(g, len, 0.86, d, mats.cabinet, 0, 0.43, 0);
  BX(g, len + 0.04, 0.05, d + 0.04, mats.top, 0, 0.885, 0);
  if (opts.sink) {
    BX(g, 0.5, 0.06, 0.4, mats.steel, -len * 0.25, 0.9, 0);
    CYL(g, 0.02, 0.02, 0.25, mats.steel, -len * 0.25, 1.02, -0.15, 6);
  }
  if (opts.stove) {
    BX(g, 0.6, 0.03, 0.5, mats.stove, len * 0.22, 0.92, 0);
    for (const [ox, oz] of [[-0.15, -0.12], [0.15, -0.12], [-0.15, 0.12], [0.15, 0.12]]) {
      CYL(g, 0.07, 0.07, 0.02, mats.stoveRing, len * 0.22 + ox, 0.94, oz, 8);
    }
  }
  if (opts.dishes) {
    CYL(g, 0.09, 0.07, 0.18, mats.cup, len * 0.05, 1.0, 0.1, 7);
    BX(g, 0.25, 0.03, 0.18, mats.paper, -len * 0.02, 0.93, -0.12);
  }
  // pensili
  if (opts.uppers) {
    BX(g, len * 0.8, 0.7, 0.35, mats.cabinet, 0, 2.0, -0.12);
  }
  g.position.set(x, y, z); g.rotation.y = ry;
  parent.add(g);
  return g;
}
export function fridge(parent, mats, x, y, z, ry = 0) {
  const g = new THREE.Group();
  BX(g, 0.7, 1.9, 0.7, mats.fridge, 0, 0.95, 0);
  BX(g, 0.02, 0.5, 0.03, mats.knob, 0.25, 1.1, 0.36);
  BX(g, 0.72, 0.03, 0.72, mats.top, 0, 1.92, 0);
  if (mats.note) plane(g, 0.25, 0.3, mats.note, -0.1, 1.4, 0.36);
  g.position.set(x, y, z); g.rotation.y = ry;
  parent.add(g);
  return g;
}
export function shelfUnit(parent, w, h, d, mats, x, y, z, ry = 0, fill = 0.7) {
  const g = new THREE.Group();
  BX(g, 0.05, h, d, mats.wood, -w / 2, h / 2, 0);
  BX(g, 0.05, h, d, mats.wood, w / 2, h / 2, 0);
  const rows = Math.max(2, Math.round(h / 0.55));
  const seed = Math.round((x * 13 + z * 7) * 10);
  for (let r = 0; r <= rows; r++) {
    BX(g, w, 0.04, d, mats.wood, 0, 0.1 + r * ((h - 0.2) / rows), 0);
  }
  // riempimento deterministico: libri/scatole colorati
  let n = 0;
  for (let r = 0; r < rows; r++) {
    const yb = 0.1 + r * ((h - 0.2) / rows) + 0.02;
    for (let k = 0; k < Math.round(w / 0.28); k++) {
      const hsh = ((seed + r * 31 + k * 17) % 100) / 100;
      if (hsh > fill) continue;
      const bw = 0.16 + hsh * 0.08, bh = 0.22 + ((seed + k * 7 + r * 13) % 40) / 100;
      const bx = -w / 2 + 0.15 + k * 0.28;
      BX(g, bw, bh, d * 0.7, (mats.books[n++ % mats.books.length]), bx, yb + bh / 2, 0);
    }
  }
  g.position.set(x, y, z); g.rotation.y = ry;
  parent.add(g);
  return g;
}
export function desk(parent, w, mats, x, y, z, ry = 0, withPC = true) {
  const g = new THREE.Group();
  BX(g, w, 0.05, 0.7, mats.wood, 0, 0.73, 0);
  BX(g, 0.05, 0.73, 0.65, mats.wood, -w / 2 + 0.03, 0.365, 0);
  BX(g, 0.05, 0.73, 0.65, mats.wood, w / 2 - 0.03, 0.365, 0);
  if (withPC) {
    BX(g, 0.5, 0.32, 0.03, mats.screen, 0, 1.0, -0.2);
    BX(g, 0.4, 0.02, 0.15, mats.knob, 0, 0.77, 0.05);
    BX(g, 0.3, 0.03, 0.2, mats.paper, 0.25, 0.77, 0.1);
    CYL(g, 0.04, 0.035, 0.1, mats.cup, -0.3, 0.81, 0.15, 7);
  } else {
    BX(g, 0.35, 0.05, 0.25, mats.paper, -0.1, 0.78, 0);
    BX(g, 0.2, 0.12, 0.15, mats.books[0], 0.3, 0.82, -0.1);
  }
  g.position.set(x, y, z); g.rotation.y = ry;
  parent.add(g);
  return g;
}
export function tvConsole(parent, w, mats, x, y, z, ry = 0, tvOn = false) {
  const g = new THREE.Group();
  BX(g, w, 0.45, 0.4, mats.wood, 0, 0.225, 0);
  BX(g, w * 0.7, 0.5, 0.06, mats.tvOff, 0, 0.95, -0.1);
  if (tvOn) {
    const s = plane(g, w * 0.62, 0.42, glowMat(0x9fc4e8), 0, 0.95, -0.065);
    s.rotation.y = Math.PI;
  }
  g.position.set(x, y, z); g.rotation.y = ry;
  parent.add(g);
  return g;
}
export function tub(parent, w, l, mats, x, y, z) {
  const g = new THREE.Group();
  BX(g, w, 0.55, l, mats.ceramic, 0, 0.275, 0);
  BX(g, w - 0.16, 0.1, l - 0.16, mats.tubIn, 0, 0.5, 0);
  CYL(g, 0.03, 0.03, 0.5, mats.steel, w / 2 - 0.1, 0.75, -l / 2 + 0.15, 6);
  g.position.set(x, y, z);
  parent.add(g);
  return g;
}
export function toilet(parent, mats, x, y, z, ry = 0) {
  const g = new THREE.Group();
  BX(g, 0.4, 0.4, 0.55, mats.ceramic, 0, 0.2, 0.05);
  BX(g, 0.42, 0.5, 0.18, mats.ceramic, 0, 0.55, -0.22);
  BX(g, 0.44, 0.06, 0.6, mats.seat, 0, 0.43, 0.03);
  g.position.set(x, y, z); g.rotation.y = ry;
  parent.add(g);
  return g;
}
export function sinkPedestal(parent, mats, x, y, z, withMirror = true) {
  const g = new THREE.Group();
  BX(g, 0.5, 0.1, 0.42, mats.ceramic, 0, 0.8, 0);
  BX(g, 0.18, 0.75, 0.18, mats.ceramic, 0, 0.375, 0);
  CYL(g, 0.02, 0.02, 0.15, mats.steel, 0, 0.92, -0.1, 6);
  if (withMirror) {
    BX(g, 0.4, 0.5, 0.03, mats.trim, 0, 1.5, -0.19);
    plane(g, 0.34, 0.44, mats.mirror, 0, 1.5, -0.17);
  }
  g.position.set(x, y, z);
  parent.add(g);
  return g;
}
export function shopShelf(parent, w, h, d, mats, x, y, z, ry = 0) {
  const g = new THREE.Group();
  for (const s of [-1, 1]) BX(g, 0.06, h, d, mats.wood, s * (w / 2), h / 2, 0);
  for (let r = 0; r < 4; r++) {
    const yb = 0.15 + r * ((h - 0.3) / 3);
    BX(g, w, 0.04, d, mats.wood, 0, yb, 0);
    for (let k = 0; k < Math.round(w / 0.35); k++) {
      const bx = -w / 2 + 0.2 + k * 0.35;
      const kind = (k + r * 3) % 4;
      if (kind === 0) CYL(g, 0.06, 0.06, 0.22, mats.goods[k % mats.goods.length], bx, yb + 0.13, 0, 7);
      else if (kind === 1) BX(g, 0.18, 0.26, 0.18, mats.goods[(k + 1) % mats.goods.length], bx, yb + 0.15, 0);
      else if (kind === 2) CYL(g, 0.09, 0.09, 0.14, mats.goods[(k + 2) % mats.goods.length], bx, yb + 0.09, 0, 8);
      else BX(g, 0.22, 0.1, 0.2, mats.paper, bx, yb + 0.07, 0);
    }
  }
  g.position.set(x, y, z); g.rotation.y = ry;
  parent.add(g);
  return g;
}
export function counter(parent, w, h, d, mats, x, y, z, ry = 0) {
  const g = new THREE.Group();
  BX(g, w, h, d, mats.wood, 0, h / 2, 0);
  BX(g, w + 0.1, 0.06, d + 0.1, mats.top, 0, h + 0.03, 0);
  g.position.set(x, y, z); g.rotation.y = ry;
  parent.add(g);
  return g;
}
export function crate(parent, s, mats, x, y, z, ry = 0) {
  const g = new THREE.Group();
  BX(g, s, s, s, mats.wood, 0, s / 2, 0);
  BX(g, s + 0.02, 0.08, s + 0.02, mats.trim, 0, s * 0.25, 0);
  BX(g, s + 0.02, 0.08, s + 0.02, mats.trim, 0, s * 0.75, 0);
  g.position.set(x, y, z); g.rotation.y = ry;
  parent.add(g);
  return g;
}
export function radiator(parent, w, mats, x, y, z, ry = 0) {
  const g = new THREE.Group();
  BX(g, w, 0.5, 0.12, mats.radiator, 0, 0.35, 0);
  for (let k = 0; k < Math.round(w / 0.12); k++) {
    BX(g, 0.05, 0.44, 0.14, mats.radiator, -w / 2 + 0.08 + k * 0.12, 0.35, 0);
  }
  CYL(g, 0.03, 0.03, 0.3, mats.steel, -w / 2 - 0.05, 0.2, 0, 6);
  g.position.set(x, y, z); g.rotation.y = ry;
  parent.add(g);
  return g;
}
export function utilityPanel(parent, mats, x, y, z, ry = 0) {
  const g = new THREE.Group();
  BX(g, 0.5, 0.7, 0.12, mats.panelBox, 0, 0, 0);
  BX(g, 0.1, 0.2, 0.02, mats.warn, -0.1, 0.1, 0.07);
  BX(g, 0.1, 0.2, 0.02, mats.warn, 0.1, -0.05, 0.07);
  g.position.set(x, y, z); g.rotation.y = ry;
  parent.add(g);
  return g;
}
export function trashBin(parent, mats, x, y, z) {
  CYL(parent, 0.22, 0.18, 0.55, mats.bin, x, y + 0.275, z, 9);
}
export function plant(parent, mats, x, y, z, big = false) {
  const s = big ? 1.3 : 1;
  CYL(parent, 0.14 * s, 0.11 * s, 0.26 * s, mats.pot, x, y + 0.13 * s, z, 8);
  const bush = new THREE.Mesh(
    sharedGeo('bush' + (big ? 'B' : 'S'), () => new THREE.SphereGeometry(0.22 * s, 7, 6)), mats.leaf);
  bush.position.set(x, y + (0.42) * s, z);
  bush.castShadow = true;
  parent.add(bush);
}
export function floorLamp(parent, mats, x, y, z) {
  CYL(parent, 0.16, 0.18, 0.04, mats.base, x, y + 0.02, z, 8);
  CYL(parent, 0.025, 0.025, 1.5, mats.base, x, y + 0.77, z, 6);
  CYL(parent, 0.2, 0.26, 0.3, mats.shade, x, y + 1.6, z, 9);
  const bulb = new THREE.Mesh(sharedGeo('bulb', () => new THREE.SphereGeometry(0.06, 8, 6)), glowMat(0xffd9a0));
  bulb.position.set(x, y + 1.5, z);
  parent.add(bulb);
  return bulb;
}
export function rug(parent, w, l, color, x, y, z) {
  return BX(parent, w, 0.02, l, lam(color), x, y + 0.01, z);
}
export function curtain(parent, w, h, color, x, y, z, ry = 0) {
  const g = new THREE.Group();
  CYL(g, 0.02, 0.02, w + 0.3, lam(0x3a3f46), 0, h / 2 + 0.05, 0, 6).rotation.z = Math.PI / 2;
  plane(g, w * 0.42, h, double(color), -w * 0.28, 0, 0.02);
  plane(g, w * 0.42, h, double(color), w * 0.28, 0, 0.02);
  g.position.set(x, y, z); g.rotation.y = ry;
  parent.add(g);
  return g;
}
export function picture(parent, w, h, color, x, y, z, ry = 0) {
  const g = new THREE.Group();
  BX(g, w + 0.06, h + 0.06, 0.04, lam(0x3a2a1a), 0, 0, 0);
  plane(g, w, h, lam(color), 0, 0, 0.025);
  g.position.set(x, y, z); g.rotation.y = ry;
  parent.add(g);
  return g;
}
export function mailboxRow(parent, mats, x, y, z, ry, n = 4) {
  const g = new THREE.Group();
  for (let i = 0; i < n; i++) {
    BX(g, 0.28, 0.18, 0.12, mats.box, -((n - 1) * 0.32) / 2 + i * 0.32, 0, 0);
  }
  BX(g, n * 0.32 + 0.08, 0.05, 0.14, mats.trim, 0, 0.14, 0);
  g.position.set(x, y, z); g.rotation.y = ry;
  parent.add(g);
  return g;
}
export function tvScreen() { return null; }

// Pacchetto materiali per un tema (istanze condivise).
export function matsFor(themeId) {
  const th = themeOf(themeId);
  return {
    trim: lam(0xe6e0d2), sill: lam(0x8d8578), box: lam(th.wood),
    leaf: lam(0x5a4632), panel: lam(0x4a3826), knob: lam(0x9aa0a8),
    wood: lam(th.wood), top: lam(0x8a8078), cabinet: lam(0x9a8a72),
    steel: lam(0x9aa0a8), stove: lam(0x2a2c30), stoveRing: lam(0x1c1c1e),
    fridge: lam(0xb8bcc0), note: lam(0xd8d2c2),
    fabric: lam(th.fabric), cushion: lam(th.accent), mattress: lam(0xd8d2c2),
    blanket: lam(th.accent), pillow: lam(0xe8e2d2),
    paper: lam(0xd8d2c2), cup: lam(0xc84a3a), chair: lam(0x4a3a28),
    screen: lam(0x1c222c), tvOff: lam(0x14181e),
    ceramic: lam(0xe2dcd2), tubIn: lam(0x9fb6c4), seat: lam(0x8a4a3a),
    mirror: lam(0x9fb6c4), radiator: lam(0xb8b0a0), panelBox: lam(0x5a6068),
    warn: lam(0xc8a03a), bin: lam(0x2e5a34), pot: lam(0xa8603a), leaf: lam(0x3f7038),
    base: lam(0x3a3f46), shade: lam(0xe0d0a8),
    goods: [lam(0xc86a2a), lam(0x7aa83a), lam(0xc8a03a), lam(0x9a3a2e)],
    books: [lam(0x8a2a22), lam(0x2a4a7a), lam(0x2a6a4a), lam(0xc8a03a), lam(0x5a4a6a)],
    wall: lam(th.wall), floor: lam(th.floor),
  };
}
