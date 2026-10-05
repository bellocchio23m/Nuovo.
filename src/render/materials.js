// S7 — libreria materiali PBR procedurali (nessun asset esterno).
// Ogni superficie importante ha: albedo, roughness coerente, bump quando utile,
// scala realistica (repeat calcolato su metri), varianti deterministiche.
// Cache condivisa: stessa chiave = stessa istanza (perf come assets.js).
import * as THREE from 'three';

const texCache = new Map();
const matCache = new Map();

function mulberry(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s |= 0; s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function ctex(key, w, h, draw) {
  let t = texCache.get(key);
  if (t) return t;
  if (typeof document === 'undefined') return null;
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  texCache.set(key, t);
  return t;
}

// Mappa roughness in scala di grigi (non sRGB): riutilizza lo stesso seme.
function rtex(key, w, h, draw) {
  let t = texCache.get(key);
  if (t) return t;
  if (typeof document === 'undefined') return null;
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  texCache.set(key, t);
  return t;
}

function speckle(ctx, w, h, r, n, light, dark, aMin = 0.04, aMax = 0.12, sMax = 3) {
  for (let i = 0; i < n; i++) {
    ctx.fillStyle = r() < 0.5 ? light : dark;
    ctx.globalAlpha = aMin + r() * (aMax - aMin);
    const s = 1 + r() * sMax;
    ctx.fillRect(r() * w, r() * h, s, s);
  }
  ctx.globalAlpha = 1;
}

// ---- ALBEDO builders (256px: dettaglio senza costo) ----
function asphaltDraw(seed) {
  return (ctx, w, h) => {
    const r = mulberry(seed);
    ctx.fillStyle = '#33363c'; ctx.fillRect(0, 0, w, h);
    speckle(ctx, w, h, r, 2600, '#4a4d55', '#22242a', 0.05, 0.14, 2.5);
    // inerti chiari radi
    for (let i = 0; i < 130; i++) {
      ctx.fillStyle = '#6a6d75'; ctx.globalAlpha = 0.15 + r() * 0.2;
      ctx.fillRect(r() * w, r() * h, 1.5, 1.5);
    }
    ctx.globalAlpha = 1;
    // crepe sottili
    ctx.strokeStyle = 'rgba(12,12,14,0.5)'; ctx.lineWidth = 1;
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      let x = r() * w, y = r() * h;
      ctx.moveTo(x, y);
      for (let k = 0; k < 5; k++) { x += (r() - 0.5) * 60; y += (r() - 0.5) * 60; ctx.lineTo(x, y); }
      ctx.stroke();
    }
    // rappezzo: banda più scura con bordo catrame
    ctx.fillStyle = 'rgba(20,20,24,0.35)';
    ctx.fillRect(r() * w * 0.5, 0, 26 + r() * 20, h);
  };
}

function concreteDraw(seed, base = '#9d988c') {
  return (ctx, w, h) => {
    const r = mulberry(seed);
    ctx.fillStyle = base; ctx.fillRect(0, 0, w, h);
    speckle(ctx, w, h, r, 1600, '#b7b1a4', '#7c776d', 0.05, 0.12, 3);
    // macchie d'uso
    for (let i = 0; i < 7; i++) {
      ctx.fillStyle = r() < 0.5 ? 'rgba(60,58,52,0.10)' : 'rgba(200,195,180,0.10)';
      ctx.beginPath();
      ctx.ellipse(r() * w, r() * h, 8 + r() * 26, 6 + r() * 18, r() * 3, 0, 7);
      ctx.fill();
    }
  };
}

function pavingDraw(seed) {
  return (ctx, w, h) => {
    concreteDraw(seed)(ctx, w, h);
    // fughe: lastre 2x2 per tile (tile da 1.5m -> lastra 75cm, realistica)
    ctx.strokeStyle = 'rgba(45,42,36,0.6)'; ctx.lineWidth = 3;
    for (let i = 0; i <= 2; i++) {
      ctx.beginPath(); ctx.moveTo(i * w / 2, 0); ctx.lineTo(i * w / 2, h); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i * h / 2); ctx.lineTo(w, i * h / 2); ctx.stroke();
    }
    const r = mulberry(seed + 9);
    // usura differenziata per lastra
    for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
      ctx.fillStyle = `rgba(${r() < 0.5 ? '40,38,32' : '210,205,190'},${0.04 + r() * 0.07})`;
      ctx.fillRect(i * w / 2, j * h / 2, w / 2, h / 2);
    }
  };
}

function plasterDraw(seed, tone) {
  return (ctx, w, h) => {
    const r = mulberry(seed);
    ctx.fillStyle = tone; ctx.fillRect(0, 0, w, h);
    // marezzatura dell'intonaco: grandi chiazze morbide
    for (let i = 0; i < 26; i++) {
      ctx.fillStyle = r() < 0.5 ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)';
      ctx.beginPath();
      ctx.ellipse(r() * w, r() * h, 12 + r() * 34, 10 + r() * 26, r() * 3, 0, 7);
      ctx.fill();
    }
    speckle(ctx, w, h, r, 700, 'rgba(255,255,255,0.5)', 'rgba(0,0,0,0.4)', 0.03, 0.08, 2);
    // colature sottili dal cornicione
    ctx.fillStyle = 'rgba(40,36,30,0.10)';
    for (let i = 0; i < 5; i++) {
      const x = r() * w;
      ctx.fillRect(x, 0, 2 + r() * 3, h * (0.2 + r() * 0.5));
    }
  };
}

function brickDraw(seed, mortar = '#b9b0a0', b1 = '#8a4a38', b2 = '#74402f') {
  return (ctx, w, h) => {
    const r = mulberry(seed);
    ctx.fillStyle = mortar; ctx.fillRect(0, 0, w, h);
    // tile = 1m: mattone 25x6cm -> 4 corsi visibili, giunto 8mm
    const rows = 8, bh = h / rows;
    for (let row = 0; row < rows; row++) {
      const off = (row % 2) * 0.25;
      for (let cx = -1; cx < 5; cx++) {
        const bw = w / 4;
        const tone = r();
        ctx.fillStyle = tone < 0.33 ? b1 : (tone < 0.66 ? b2 : '#95543c');
        ctx.fillRect((cx + off) * bw + 2, row * bh + 2, bw - 4, bh - 4);
        ctx.fillStyle = `rgba(0,0,0,${0.04 + r() * 0.10})`;
        ctx.fillRect((cx + off) * bw + 2, row * bh + 2, bw - 4, bh - 4);
      }
    }
    speckle(ctx, w, h, r, 500, 'rgba(255,255,255,0.5)', 'rgba(0,0,0,0.5)', 0.03, 0.08, 2);
  };
}

function stoneDraw(seed, base = '#a89f8c') {
  return (ctx, w, h) => {
    const r = mulberry(seed);
    ctx.fillStyle = base; ctx.fillRect(0, 0, w, h);
    // blocchi irregolari 2 righe
    ctx.strokeStyle = 'rgba(50,46,40,0.55)'; ctx.lineWidth = 3;
    for (let row = 0; row <= 2; row++) {
      ctx.beginPath(); ctx.moveTo(0, row * h / 2); ctx.lineTo(w, row * h / 2); ctx.stroke();
    }
    for (let i = 0; i < 6; i++) {
      const x = r() * w;
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + (r() - 0.5) * 10, h / 2); ctx.stroke();
      const x2 = r() * w;
      ctx.beginPath(); ctx.moveTo(x2, h / 2); ctx.lineTo(x2 + (r() - 0.5) * 10, h); ctx.stroke();
    }
    speckle(ctx, w, h, r, 1200, '#bcb29e', '#847b68', 0.05, 0.12, 3);
  };
}

function woodDraw(seed, base = '#6b4a2c', dark = '#4a3120') {
  return (ctx, w, h) => {
    const r = mulberry(seed);
    ctx.fillStyle = base; ctx.fillRect(0, 0, w, h);
    // venature orizzontali ondulate
    for (let y = 0; y < h; y += 3) {
      ctx.strokeStyle = `rgba(30,18,10,${0.10 + r() * 0.16})`;
      ctx.lineWidth = 1 + r();
      ctx.beginPath();
      ctx.moveTo(0, y);
      for (let x = 0; x <= w; x += 16) ctx.lineTo(x, y + Math.sin(x * 0.08 + y) * 2 + (r() - 0.5) * 2);
      ctx.stroke();
    }
    // nodi
    for (let i = 0; i < 3; i++) {
      const x = r() * w, y = r() * h;
      ctx.strokeStyle = dark; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.ellipse(x, y, 4 + r() * 4, 6 + r() * 5, 0, 0, 7); ctx.stroke();
    }
    // doghe verticali
    ctx.strokeStyle = 'rgba(20,12,6,0.5)'; ctx.lineWidth = 2;
    for (let i = 0; i <= 4; i++) {
      ctx.beginPath(); ctx.moveTo(i * w / 4, 0); ctx.lineTo(i * w / 4, h); ctx.stroke();
    }
  };
}

function roofDraw(seed) {
  return (ctx, w, h) => {
    const r = mulberry(seed);
    ctx.fillStyle = '#7a5138'; ctx.fillRect(0, 0, w, h);
    // coppi: righe + mezze colonne sfalsate
    for (let y = 0; y < h; y += 16) {
      ctx.fillStyle = `rgba(0,0,0,${0.08 + r() * 0.1})`;
      ctx.fillRect(0, y, w, 3);
      for (let x = ((y / 16) % 2) * 8; x < w; x += 16) {
        ctx.fillStyle = `rgba(${r() < 0.5 ? '255,220,190' : '20,8,4'},${0.05 + r() * 0.08})`;
        ctx.fillRect(x, y, 14, 14);
      }
    }
    speckle(ctx, w, h, r, 400, '#8d6750', '#4e3423', 0.05, 0.12, 2);
  };
}

function grassDraw(seed) {
  return (ctx, w, h) => {
    const r = mulberry(seed);
    ctx.fillStyle = '#5d6d43'; ctx.fillRect(0, 0, w, h);
    // fili d'erba
    for (let i = 0; i < 900; i++) {
      ctx.strokeStyle = r() < 0.5 ? '#71835a' : '#47542f';
      ctx.globalAlpha = 0.3 + r() * 0.5;
      ctx.lineWidth = 1;
      const x = r() * w, y = r() * h;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + (r() - 0.5) * 3, y - 2 - r() * 3); ctx.stroke();
    }
    ctx.globalAlpha = 1;
  };
}

function trunkDraw(seed) {
  return (ctx, w, h) => {
    const r = mulberry(seed);
    ctx.fillStyle = '#5a4128'; ctx.fillRect(0, 0, w, h);
    for (let x = 0; x < w; x += 4) {
      ctx.strokeStyle = `rgba(20,12,6,${0.25 + r() * 0.3})`;
      ctx.lineWidth = 1 + r() * 2;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      for (let y = 0; y <= h; y += 16) ctx.lineTo(x + Math.sin(y * 0.1 + x) * 3, y);
      ctx.stroke();
    }
  };
}

function fabricDraw(seed, base = '#7a6a8a') {
  return (ctx, w, h) => {
    const r = mulberry(seed);
    ctx.fillStyle = base; ctx.fillRect(0, 0, w, h);
    // trama
    ctx.globalAlpha = 0.16;
    for (let y = 0; y < h; y += 2) { ctx.fillStyle = y % 4 ? '#000' : '#fff'; ctx.fillRect(0, y, w, 1); }
    ctx.globalAlpha = 1;
    speckle(ctx, w, h, r, 300, 'rgba(255,255,255,0.4)', 'rgba(0,0,0,0.4)', 0.04, 0.1, 2);
  };
}

function floorDraw(seed) {
  return (ctx, w, h) => {
    woodDraw(seed, '#7d5a36', '#54371f')(ctx, w, h);
    // parquet a spina: diagonali chiare/scure
    ctx.strokeStyle = 'rgba(30,18,8,0.4)'; ctx.lineWidth = 2;
    for (let i = -h; i < w; i += 24) {
      ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i + h, h); ctx.stroke();
    }
  };
}

function roughDraw(seed, base = 200, spread = 60) {
  return (ctx, w, h) => {
    const r = mulberry(seed);
    ctx.fillStyle = `rgb(${base},${base},${base})`; ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 500; i++) {
      const v = Math.max(0, Math.min(255, Math.round(base + (r() - 0.5) * spread)));
      ctx.fillStyle = `rgb(${v},${v},${v})`;
      ctx.globalAlpha = 0.5;
      ctx.fillRect(r() * w, r() * h, 2 + r() * 4, 2 + r() * 4);
    }
    ctx.globalAlpha = 1;
  };
}

// Decal sporco/usura (RGBA con alpha, per piani trasparenti).
export function grimeTexture(kind = 'stain') {
  if (typeof document === 'undefined') return null;
  const key = `grime|${kind}`;
  let t = texCache.get(key);
  if (t) return t;
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d');
  const r = mulberry(kind === 'stain' ? 101 : kind === 'scratch' ? 202 : 303);
  ctx.clearRect(0, 0, 128, 128);
  if (kind === 'scratch') {
    ctx.strokeStyle = 'rgba(210,200,180,0.5)';
    for (let i = 0; i < 12; i++) {
      ctx.lineWidth = 0.8 + r();
      ctx.beginPath();
      const x = r() * 128, y = r() * 128;
      ctx.moveTo(x, y); ctx.lineTo(x + (r() - 0.5) * 70, y + (r() - 0.5) * 70);
      ctx.stroke();
    }
  } else {
    for (let i = 0; i < 22; i++) {
      const g = ctx.createRadialGradient(0, 0, 0, 0, 0, 8 + r() * 22);
      const dark = r() < 0.6;
      g.addColorStop(0, dark ? 'rgba(30,28,24,0.28)' : 'rgba(190,180,160,0.20)');
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.save();
      ctx.translate(r() * 128, r() * 128);
      ctx.fillStyle = g;
      ctx.fillRect(-32, -32, 64, 64);
      ctx.restore();
    }
  }
  t = new THREE.CanvasTexture(c);
  texCache.set(key, t);
  return t;
}

// ---- factory ----
function std(key, opts) {
  let m = matCache.get(key);
  if (m) return m;
  if (typeof document === 'undefined') return null;
  const { map, rough, color = 0xffffff, roughness = 0.9, metalness = 0.0,
    rx = 1, ry = 1, bump = 0.02, env = 0.35 } = opts;
  let mp = map, rp = rough;
  if (map && (rx !== 1 || ry !== 1)) {
    mp = map.clone(); mp.needsUpdate = true;
    mp.wrapS = mp.wrapT = THREE.RepeatWrapping;
    mp.repeat.set(rx, ry);
    if (rp) { rp = rough.clone(); rp.needsUpdate = true; rp.repeat.set(rx, ry); }
  }
  m = new THREE.MeshStandardMaterial({
    color, map: mp ?? null, roughnessMap: rp ?? null,
    bumpMap: mp ?? null, bumpScale: bump,
    roughness, metalness, envMapIntensity: env,
  });
  matCache.set(key, m);
  return m;
}

const S = 256;
function T(name, draw, roughBase = 200, roughSpread = 60) {
  return {
    map: ctex(`s7-${name}`, S, S, draw),
    rough: rtex(`s7-${name}-r`, 128, 128, roughDraw(1000 + name.length * 77, roughBase, roughSpread)),
  };
}

// Texture costruite una volta.
let B = null;
function built() {
  if (B || typeof document === 'undefined') return B;
  B = {
    asphalt: T('asphalt', asphaltDraw(11), 235, 40),
    concrete: T('concrete', concreteDraw(23), 215, 50),
    concrete2: T('concrete2', concreteDraw(124, '#a39d90'), 210, 50),
    paving: T('paving', pavingDraw(67), 205, 55),
    plaster: [
      T('plaster0', plasterDraw(37, '#d9b06a'), 225, 40),
      T('plaster1', plasterDraw(38, '#b9c2cc'), 225, 40),
      T('plaster2', plasterDraw(39, '#cfa3a8'), 225, 40),
      T('plaster3', plasterDraw(40, '#c4bd9a'), 225, 40),
      T('plaster4', plasterDraw(41, '#c9a87f'), 225, 40),
    ],
    cement: [
      T('cement0', concreteDraw(55, '#8f8a7e'), 220, 45),
      T('cement1', concreteDraw(56, '#7d7a72'), 225, 45),
      T('cement2', concreteDraw(57, '#a8a294'), 210, 55),
    ],
    stone: [
      T('stone0', stoneDraw(71), 215, 50),
      T('stone1', stoneDraw(72, '#968c78'), 220, 50),
      T('stone2', stoneDraw(73, '#b5ab96'), 205, 55),
    ],
    brick: [
      T('brick0', brickDraw(91), 220, 45),
      T('brick1', brickDraw(92, '#b9b0a0', '#7d5a46', '#654832'), 220, 45),
      T('brick2', brickDraw(93, '#a89c88', '#93503a', '#7a4433'), 220, 45),
    ],
    wood: [
      T('wood0', woodDraw(111), 175, 70),
      T('wood1', woodDraw(112, '#7d5c34', '#54371f'), 165, 70),
      T('wood2', woodDraw(113, '#4e3822', '#2e1f12'), 185, 60),
    ],
    roof: T('roof', roofDraw(83), 230, 40),
    grass: T('grass', grassDraw(51), 240, 30),
    trunk: T('trunk', trunkDraw(61), 225, 40),
    fabric: T('fabric', fabricDraw(121), 240, 25),
    floorWood: T('floorwood', floorDraw(131), 170, 60),
    tileFloor: T('tilefloor', pavingDraw(141), 150, 60),
  };
  return B;
}

// repeat = metriCoperti / metriPerTile. Tile di disegno = 256px.
const TILE_M = {
  asphalt: 7, concrete: 3, paving: 1.5, plaster: 6, cement: 4, stone: 3,
  brick: 2, wood: 2, roof: 3, grass: 6, trunk: 1, fabric: 1, floor: 4,
};
function rep(kind, wM, dM) {
  const t = TILE_M[kind] ?? 4;
  return [Math.max(1, Math.round(wM / t)), Math.max(1, Math.round(dM / t))];
}

// Scelta deterministica della variante: due edifici vicini differiscono.
export function variantFor(id, n) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h % n;
}

// ---- API pubblica ----
export function matAsphalt(wM = 100, dM = 8) {
  built();
  const [rx, ry] = rep('asphalt', wM, dM);
  return std(`asphalt|${rx}x${ry}`, { ...B.asphalt, roughness: 0.95, bump: 0.03, rx, ry, env: 0.15 });
}
export function matAlley(wM = 4, dM = 16) {
  built();
  const [rx, ry] = rep('asphalt', wM, dM);
  return std(`alley|${rx}x${ry}`, { ...B.asphalt, color: 0x8f8d86, roughness: 0.97, bump: 0.03, rx, ry, env: 0.1 });
}
export function matSidewalk(wM = 100, dM = 2.2, v = 0) {
  built();
  const b = v % 2 ? B.concrete2 : B.concrete;
  const [rx, ry] = rep('concrete', wM, dM);
  return std(`sidewalk${v % 2}|${rx}x${ry}`, { ...b, roughness: 0.92, bump: 0.02, rx, ry, env: 0.2 });
}
export function matPiazza(wM = 18, dM = 16, dark = false) {
  built();
  const [rx, ry] = rep('paving', wM, dM);
  return std(`piazza${dark ? 'D' : ''}|${rx}x${ry}`, {
    ...B.paving, color: dark ? 0xa89f88 : 0xcfc8b4, roughness: 0.88, bump: 0.025, rx, ry, env: 0.25,
  });
}
export function matPlaster(v = 0, wM = 10, hM = 6) {
  built();
  const b = B.plaster[((v % 5) + 5) % 5];
  const [rx, ry] = rep('plaster', wM, hM);
  return std(`plaster${v % 5}|${rx}x${ry}`, { ...b, roughness: 0.9, bump: 0.015, rx, ry, env: 0.25 });
}
export function matCement(v = 0, wM = 4, hM = 3) {
  built();
  const b = B.cement[((v % 3) + 3) % 3];
  const [rx, ry] = rep('cement', wM, hM);
  return std(`cement${v % 3}|${rx}x${ry}`, { ...b, roughness: 0.93, bump: 0.02, rx, ry, env: 0.2 });
}
export function matStone(v = 0, wM = 4, hM = 3) {
  built();
  const b = B.stone[((v % 3) + 3) % 3];
  const [rx, ry] = rep('stone', wM, hM);
  return std(`stone${v % 3}|${rx}x${ry}`, { ...b, roughness: 0.9, bump: 0.03, rx, ry, env: 0.25 });
}
export function matBrick(v = 0, wM = 4, hM = 3) {
  built();
  const b = B.brick[((v % 3) + 3) % 3];
  const [rx, ry] = rep('brick', wM, hM);
  return std(`brick${v % 3}|${rx}x${ry}`, { ...b, roughness: 0.88, bump: 0.03, rx, ry, env: 0.25 });
}
export function matWood(v = 0, wM = 2, hM = 2) {
  built();
  const b = B.wood[((v % 3) + 3) % 3];
  const [rx, ry] = rep('wood', wM, hM);
  return std(`wood${v % 3}|${rx}x${ry}`, { ...b, roughness: 0.62, bump: 0.02, rx, ry, env: 0.5 });
}
export function matRoof(wM = 10, dM = 10) {
  built();
  const [rx, ry] = rep('roof', wM, dM);
  return std(`roof|${rx}x${ry}`, { ...B.roof, roughness: 0.92, bump: 0.03, rx, ry, env: 0.2 });
}
export function matGrass(wM = 100, dM = 100) {
  built();
  const [rx, ry] = rep('grass', wM, dM);
  // repeat alto ma tile da 6m: niente stiramento, niente micro-ripetizione
  return std(`grass|${rx}x${ry}`, { ...B.grass, color: 0xb8c49c, roughness: 1.0, bump: 0.02, rx, ry, env: 0.05 });
}
export function matTrunk() {
  built();
  return std('trunk', { ...B.trunk, roughness: 0.95, bump: 0.04, rx: 1, ry: 2, env: 0.15 });
}
export function matLeaf(v = 0) {
  built();
  const tint = [0x4a7a3f, 0x3a6a34, 0x557f46][v % 3];
  const [rx, ry] = [2, 2];
  return std(`leaf${v % 3}`, { ...B.grass, color: tint, roughness: 0.95, bump: 0.02, rx, ry, env: 0.1 });
}
export function matHedge() {
  built();
  return std('hedge', { ...B.grass, color: 0x3d6a33, roughness: 1.0, bump: 0.02, rx: 2, ry: 1, env: 0.05 });
}
export function matFloorWood(wM = 16, dM = 12) {
  built();
  const [rx, ry] = rep('floor', wM, dM);
  return std(`floorwood|${rx}x${ry}`, { ...B.floorWood, roughness: 0.55, bump: 0.015, rx, ry, env: 0.6 });
}
export function matTileFloor(wM = 16, dM = 12) {
  built();
  const [rx, ry] = rep('floor', wM, dM);
  return std(`tilefloor|${rx}x${ry}`, { ...B.tileFloor, color: 0xbfae90, roughness: 0.4, bump: 0.01, rx, ry, env: 0.7 });
}
export function matInteriorWall(v = 0, wM = 8, hM = 3) {
  built();
  const b = B.plaster[(v + 2) % 5];
  const [rx, ry] = rep('plaster', wM, hM);
  return std(`intwall${v % 5}|${rx}x${ry}`, { ...b, color: 0xe2d8c2, roughness: 0.94, bump: 0.01, rx, ry, env: 0.2 });
}
export function matFabric(color = 0x7a6a8a) {
  built();
  return std(`fabric|${color.toString(16)}`, { ...B.fabric, color, roughness: 0.98, bump: 0.01, rx: 2, ry: 2, env: 0.05 });
}

// Metalli: roughness bassa + metalness alta = distinguibili da opachi.
export function matMetal(kind = 'iron') {
  const presets = {
    iron: { color: 0x3a3f46, roughness: 0.55, metalness: 0.85, env: 0.9 },
    steel: { color: 0x9aa0a8, roughness: 0.32, metalness: 0.95, env: 1.1 },
    brass: { color: 0xa88a3a, roughness: 0.38, metalness: 0.9, env: 1.0 },
    rust: { color: 0x6e4526, roughness: 0.9, metalness: 0.25, env: 0.3 },
    painted: { color: 0x2e4a5a, roughness: 0.5, metalness: 0.4, env: 0.7 },
  };
  const p = presets[kind] ?? presets.iron;
  const key = `metal|${kind}`;
  let m = matCache.get(key);
  if (m) return m;
  if (typeof document === 'undefined') return null;
  built();
  m = new THREE.MeshStandardMaterial({
    color: p.color, map: B.concrete.map, roughnessMap: B.concrete.rough,
    roughness: p.roughness, metalness: p.metalness, envMapIntensity: p.env,
    bumpMap: B.concrete.map, bumpScale: 0.008,
  });
  matCache.set(key, m);
  return m;
}

// Vernice auto: metallizzata con clearcoat.
export function matCarPaint(color) {
  const key = `car|${color.toString(16)}`;
  let m = matCache.get(key);
  if (m) return m;
  if (typeof document === 'undefined') return null;
  m = new THREE.MeshPhysicalMaterial({
    color, roughness: 0.28, metalness: 0.6,
    clearcoat: 0.8, clearcoatRoughness: 0.2, envMapIntensity: 1.2,
  });
  matCache.set(key, m);
  return m;
}

// Vetro vero: trasparente, riflettente, con profondità (mai blu piatto).
export function matGlass(tint = 0xbfd4d8, opacity = 0.32) {
  const key = `glass|${tint.toString(16)}|${opacity}`;
  let m = matCache.get(key);
  if (m) return m;
  if (typeof document === 'undefined') return null;
  m = new THREE.MeshPhysicalMaterial({
    color: tint, transparent: true, opacity,
    roughness: 0.06, metalness: 0.0,
    envMapIntensity: 1.4, side: THREE.DoubleSide,
  });
  matCache.set(key, m);
  return m;
}

export function matPuddle() {
  const key = 'puddle';
  let m = matCache.get(key);
  if (m) return m;
  if (typeof document === 'undefined') return null;
  m = new THREE.MeshStandardMaterial({
    color: 0x39434e, roughness: 0.05, metalness: 0.1,
    transparent: true, opacity: 0.85, envMapIntensity: 1.6,
  });
  matCache.set(key, m);
  return m;
}

export function matLampOn() {
  const key = 'lampon';
  let m = matCache.get(key);
  if (m) return m;
  if (typeof document === 'undefined') return null;
  m = new THREE.MeshBasicMaterial({ color: 0xffd98a });
  matCache.set(key, m);
  return m;
}

export function disposeMaterials() {
  for (const t of texCache.values()) t.dispose?.();
  for (const m of matCache.values()) m.dispose?.();
  texCache.clear(); matCache.clear();
  B = null;
}
