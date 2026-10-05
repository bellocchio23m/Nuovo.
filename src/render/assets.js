import * as THREE from 'three';

// Cache di materiali/geometrie condivise: a 80 NPC, creare asset per istanza
// significherebbe centinaia di programmi/materiali duplicati. Qui ogni
// combinazione (tipo, colore) esiste una sola volta.
const lamberts = new Map();
export function sharedLambert(color) {
  let m = lamberts.get(color);
  if (!m) { m = new THREE.MeshLambertMaterial({ color }); lamberts.set(color, m); }
  return m;
}

const geos = new Map();
export function sharedGeo(key, make) {
  let g = geos.get(key);
  if (!g) { g = make(); geos.set(key, g); }
  return g;
}

const basics = new Map();
export function sharedBasic(color) {
  let m = basics.get(color);
  if (!m) { m = new THREE.MeshBasicMaterial({ color }); basics.set(color, m); }
  return m;
}

// --- Texture procedurali condivise (canvas 128px, generate una volta) ---
// Il colore del materiale fa la tinta (map * color). Nessun asset esterno,
// costo trascurabile, stesso materiale ovunque.
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

export function canvasTexture(key, w, h, draw) {
  let t = texCache.get(key);
  if (t) return t;
  if (typeof document === 'undefined') return null; // headless: niente texture
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  texCache.set(key, t);
  return t;
}

function speckleDraw(base, n, seed, light, dark, cracks) {
  return (ctx, w, h) => {
    ctx.fillStyle = base; ctx.fillRect(0, 0, w, h);
    const r = mulberry(seed);
    for (let i = 0; i < n; i++) {
      ctx.fillStyle = r() < 0.5 ? light : dark;
      ctx.globalAlpha = 0.05 + r() * 0.09;
      const s = 1 + r() * 2.5;
      ctx.fillRect(r() * w, r() * h, s, s);
    }
    ctx.globalAlpha = 1;
    if (cracks) {
      ctx.strokeStyle = 'rgba(0,0,0,0.25)'; ctx.lineWidth = 1;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        let x = r() * w, y = r() * h;
        ctx.moveTo(x, y);
        for (let k = 0; k < 4; k++) { x += (r() - 0.5) * 40; y += (r() - 0.5) * 40; ctx.lineTo(x, y); }
        ctx.stroke();
      }
    }
  };
}

export function asphaltTex() {
  return canvasTexture('asphalt', 128, 128, speckleDraw('#3a3d44', 900, 11, '#55585f', '#22242a', true));
}
export function concreteTex() {
  return canvasTexture('concrete', 128, 128, speckleDraw('#9a958a', 700, 23, '#b5b0a4', '#7c776d', false));
}
export function plasterTex() {
  return canvasTexture('plaster', 128, 128, speckleDraw('#d8d2c4', 500, 37, '#e8e2d4', '#b8b0a0', false));
}
export function grassTex() {
  return canvasTexture('grass', 128, 128, speckleDraw('#5a6b44', 1000, 51, '#6d7f52', '#434f31', false));
}
export function pavingTex() {
  return canvasTexture('paving', 128, 128, (ctx, w, h) => {
    speckleDraw('#8f8a7c', 500, 67, '#a09a8c', '#78736a', false)(ctx, w, h);
    ctx.strokeStyle = 'rgba(40,38,32,0.55)'; ctx.lineWidth = 2;
    for (let i = 0; i <= 2; i++) {
      ctx.beginPath(); ctx.moveTo(i * w / 2, 0); ctx.lineTo(i * w / 2, h); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, i * h / 2); ctx.lineTo(w, i * h / 2); ctx.stroke();
    }
  });
}
export function roofTex() {
  return canvasTexture('roof', 128, 128, (ctx, w, h) => {
    speckleDraw('#6b4a38', 400, 83, '#7d5a46', '#54382a', false)(ctx, w, h);
    ctx.strokeStyle = 'rgba(30,18,12,0.5)'; ctx.lineWidth = 2;
    for (let y = 0; y < h; y += 16) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(30,18,12,0.3)';
    for (let y = 0, row = 0; y < h; y += 16, row++) {
      for (let x = (row % 2) * 8; x < w; x += 16) {
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + 16); ctx.stroke();
      }
    }
  });
}

// Materiale Lambert con texture condivisa (stessa chiave = stessa istanza).
export function texLambert(key, color, tex, rx = 1, ry = 1) {
  const ck = `${key}|${color}`;
  let m = matCache.get(ck);
  if (!m) {
    m = new THREE.MeshLambertMaterial({ color, map: tex ?? null });
    if (tex && (rx !== 1 || ry !== 1)) {
      // repeat dedicato: clona la texture (condivisa l'immagine, non i parametri)
      const t2 = tex.clone();
      t2.needsUpdate = true;
      t2.wrapS = t2.wrapT = THREE.RepeatWrapping;
      t2.repeat.set(rx, ry);
      m.map = t2;
    }
    matCache.set(ck, m);
  }
  return m;
}

export function disposeAssets() {
  for (const g of geos.values()) g.dispose();
  for (const m of lamberts.values()) m.dispose();
  for (const m of basics.values()) m.dispose();
  geos.clear(); lamberts.clear(); basics.clear();
  for (const t of texCache.values()) t.dispose();
  for (const m of matCache.values()) m.dispose();
  texCache.clear(); matCache.clear();
}
