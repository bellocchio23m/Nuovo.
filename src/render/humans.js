// ============================================================================
// PERSONAGGI UMANI FINALI — sistema definitivo dei personaggi NPC.
// ----------------------------------------------------------------------------
// Persone vere in 3D, procedurali ma credibili a colpo d'occhio: anatomia
// umana proporzionata, veri volti 3D (cranio, zigomi, naso, bocca, occhi,
// sopracciglia, orecchie), capelli obbligatori in vari stili, outfit modulari
// per ruolo/contesto, materiali differenziati (pelle vs tessuti), varieta'
// deterministica legata all'identita' dell'NPC (stesso NPC = stesso aspetto,
// sempre, anche dopo save/replay), rig condiviso con animazioni procedurali
// agganciate alla locomotion esistente (mai riscritta), LOD per distanza.
//
// Vincoli rispettati:
// - zero asset esterni, zero nuove dipendenze (solo three, gia' presente)
// - geometrie condivise (una sola istanza GPU per stile), materiali in cache
// - compatibile WebGL / SwiftShader / mobile (Lambert + pochi Phong)
// - API compatibile con game.js: makeHumanoid(color,isPlayer,role,npc?),
//   animateHumanoid(g,speed,t,attacking,extra?)
// ============================================================================
import * as THREE from 'three';
import { sharedGeo, sharedBasic } from './assets.js';

// Canvas-texture procedurali locali (autonomo da assets.js): 128px, una volta.
// In headless (node, niente document) ritorna null: i materiali restano validi.
const texCache = new Map();
function canvasTexture(key, w, h, draw) {
  let t = texCache.get(key);
  if (t) return t;
  if (typeof document === 'undefined') return null;
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  draw(c.getContext('2d'), w, h);
  t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  texCache.set(key, t);
  return t;
}
const texMatCache = new Map();
function texLambert(key, color, tex) {
  const ck = key + '|' + color;
  let m = texMatCache.get(ck);
  if (!m) {
    m = new THREE.MeshLambertMaterial({ color, map: tex ?? null });
    texMatCache.set(ck, m);
  }
  return m;
}

// ---------------------------------------------------------------------------
// 0. Utilita' deterministiche (nessun Math.random: l'aspetto e' identità)
// ---------------------------------------------------------------------------
function fnv1a(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function mulberry(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s |= 0; s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const M4 = () => new THREE.Matrix4();
function xform(px, py, pz, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) {
  const q = new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz));
  return M4().compose(new THREE.Vector3(px, py, pz), q, new THREE.Vector3(sx, sy, sz));
}
// Merge di geometrie indicizzate (position/normal/uv) in UNA geometria.
// Chiamato solo a freddo per costruire gli asset condivisi: a caldo ogni NPC
// riusa le stesse istanze GPU (niente allocazioni per istanza).
function mergeParts(parts) {
  const geos = parts.map(({ g, m }) => {
    const c = g.index ? g.toNonIndexed() : g.clone();
    if (m) c.applyMatrix4(m);
    return c;
  });
  let total = 0;
  for (const g of geos) total += g.attributes.position.count;
  const pos = new Float32Array(total * 3);
  const nor = new Float32Array(total * 3);
  const uv = new Float32Array(total * 2);
  let o = 0;
  for (const g of geos) {
    const n = g.attributes.position.count;
    pos.set(g.attributes.position.array, o * 3);
    nor.set(g.attributes.normal.array, o * 3);
    if (g.attributes.uv) uv.set(g.attributes.uv.array, o * 2);
    o += n;
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  out.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
  out.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return out;
}

// ---------------------------------------------------------------------------
// 1. Texture procedurali condivise per i tessuti (canvas 128px, una volta)
//    La pelle resta liscia (niente map): si distingue dal tessuto a vista.
// ---------------------------------------------------------------------------
function fabricDraw(kind) {
  return (ctx, w, h) => {
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, w, h);
    if (kind === 'denim') {
      for (let y = 0; y < h; y += 3) {
        ctx.fillStyle = (y % 6 === 0) ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,20,0.16)';
        ctx.fillRect(0, y, w, 1);
      }
      ctx.strokeStyle = 'rgba(0,0,25,0.12)'; ctx.lineWidth = 1;
      for (let i = -h; i < w; i += 5) { ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i + h, h); ctx.stroke(); }
    } else if (kind === 'knit') {
      for (let y = 0; y < h; y += 6) for (let x = 0; x < w; x += 6) {
        ctx.fillStyle = ((x + y) % 12 === 0) ? 'rgba(0,0,0,0.14)' : 'rgba(255,255,255,0.10)';
        ctx.beginPath(); ctx.arc(x + 3, y + 3, 2.1, 0, 7); ctx.fill();
      }
    } else if (kind === 'leather') {
      for (let i = 0; i < 900; i++) {
        ctx.fillStyle = Math.random() < 0.5 ? 'rgba(0,0,0,0.10)' : 'rgba(255,255,255,0.08)';
        ctx.fillRect(Math.random() * w, Math.random() * h, 1.6, 1.2);
      }
      ctx.fillStyle = 'rgba(255,255,255,0.10)'; ctx.fillRect(0, 0, w, 8);
    } else if (kind === 'weave') { // cotone/camicia
      for (let y = 0; y < h; y += 2) { ctx.fillStyle = 'rgba(0,0,0,0.05)'; ctx.fillRect(0, y, w, 1); }
      for (let x = 0; x < w; x += 2) { ctx.fillStyle = 'rgba(255,255,255,0.06)'; ctx.fillRect(x, 0, 1, h); }
    } else if (kind === 'hair') { // ciocche
      ctx.strokeStyle = 'rgba(0,0,0,0.28)'; ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 3) {
        ctx.beginPath(); ctx.moveTo(x, 0);
        ctx.quadraticCurveTo(x + 3, h / 2, x - 2, h); ctx.stroke();
      }
      ctx.strokeStyle = 'rgba(255,255,255,0.10)';
      for (let x = 1; x < w; x += 6) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.quadraticCurveTo(x + 2, h / 2, x, h); ctx.stroke();
      }
    }
  };
}
const TEX = {};
function fabricTex(kind) {
  if (TEX[kind]) return TEX[kind];
  const t = canvasTexture('fabric_' + kind, 128, 128, fabricDraw(kind));
  TEX[kind] = t;
  return t;
}

// ---------------------------------------------------------------------------
// 2. Cache materiali: pelle liscia / tessuti / capelli / Phong (scarpe,metallo)
// ---------------------------------------------------------------------------
const skinCache = new Map();
export function skinMat(tone) {
  let m = skinCache.get(tone);
  if (!m) {
    // Pelle: liscia (no map), leggero emissive caldo = risposta diversa dal tessuto.
    m = new THREE.MeshLambertMaterial({ color: tone, emissive: 0x1c0d06, emissiveIntensity: 0.32 });
    skinCache.set(tone, m);
  }
  return m;
}
function fabricMat(color, kind) {
  // texLambert condivide gia' per chiave: la map fa la grana, il color la tinta.
  return texLambert('fab_' + kind + '|' + color, color, fabricTex(kind));
}
function hairMat(color) {
  return texLambert('hair|' + color, color, fabricTex('hair'));
}
const phongCache = new Map();
function shineMat(color, shin = 60) {
  const k = color + '|' + shin;
  let m = phongCache.get(k);
  if (!m) {
    m = new THREE.MeshPhongMaterial({ color, specular: 0x777766, shininess: shin });
    phongCache.set(k, m);
  }
  return m;
}
const flatCache = new Map();
function flatMat(color) {
  let m = flatCache.get(color);
  if (!m) { m = new THREE.MeshLambertMaterial({ color }); flatCache.set(color, m); }
  return m;
}

// ---------------------------------------------------------------------------
// 3. Palette
// ---------------------------------------------------------------------------
const SKIN_TONES = [0xf2c9a4, 0xe9b98d, 0xd99f6e, 0xb57e52, 0x7e5433, 0x4f331d];
const HAIR_COLORS = [0x191210, 0x2e1d12, 0x4c2f1a, 0x6e3f1d, 0x9c5a24, 0xc7a15c, 0x8a8f96, 0xd8d5cc];
const TOP_COLORS = [0x3f6fb5, 0xb53f45, 0x3f9c5a, 0xd0a02e, 0x7a4fb5, 0x3fb0b5, 0xd06a2d, 0x8a9aa8, 0x4a4f58, 0xc9c2b4];
const JEANS_COLORS = [0x2e4a72, 0x3a5a8a, 0x24344a, 0x4a6a9a];
const SHOE_COLORS = [0xe8e4dc, 0x222226, 0x6b4a2e, 0x8a1f2e, 0x3a5a3f, 0xb5b0a4];

// ---------------------------------------------------------------------------
// 4. Identita' visiva deterministica: hash(id) -> TUTTO.
//    Stesso id = stesso corpo/volto/capelli/outfit, per sempre (save/replay).
// ---------------------------------------------------------------------------
const FEMALE_IDS = new Set(['anna', 'carla', 'elena', 'sara', 'marta', 'nadia', 'chiara', 'tea', 'rita', 'lina', 'monica', 'ida', 'bianca']);
const ELDER_IDS = new Set(['marta', 'tea', 'osvaldo', 'ida']);
const BAR_STAFF = new Set(['anna', 'paolo', 'bianca', 'monica']);
const WORKERS = new Set(['bruno', 'franco', 'otello', 'ivan']);

export function identityFor(id, role, colorHint, isPlayer) {
  const h = fnv1a('human|' + id);
  const rng = mulberry(h);
  const pick = (arr) => arr[Math.floor(rng() * arr.length) % arr.length];
  let female = FEMALE_IDS.has(id);
  if (!FEMALE_IDS.has(id) && !isPlayer && id.startsWith('syn')) female = rng() < 0.5;
  if (isPlayer) female = false;
  const elder = ELDER_IDS.has(id);
  const age = isPlayer ? 'adult' : elder ? 'elder' : (rng() < 0.18 ? 'young' : (rng() < 0.72 ? 'adult' : 'elder'));
  const H = female ? 1.58 + rng() * 0.18 : 1.68 + rng() * 0.20;
  const buildR = rng();
  const build = buildR < 0.28 ? 'slim' : (buildR < 0.78 ? 'normal' : 'heavy');
  const skin = SKIN_TONES[Math.floor(rng() * SKIN_TONES.length) % SKIN_TONES.length];
  // --- capelli ---
  let hairStyle;
  const hr = rng();
  if (female) hairStyle = hr < 0.22 ? 2 : (hr < 0.45 ? 1 : (hr < 0.60 ? 6 : (hr < 0.75 ? 3 : (hr < 0.88 ? 0 : 7))));
  else if (age === 'elder') hairStyle = hr < 0.35 ? 5 : (hr < 0.65 ? 4 : (hr < 0.85 ? 0 : 1));
  else hairStyle = hr < 0.34 ? 0 : (hr < 0.55 ? 1 : (hr < 0.68 ? 4 : (hr < 0.80 ? 3 : (hr < 0.90 ? 2 : 5))));
  let hairColor = pick(HAIR_COLORS);
  if (age === 'elder') hairColor = pick([0xb8b4ac, 0xd8d5cc, 0x8a8f96, 0xb8b4ac, 0x6e6a62]);
  else if (rng() < 0.12) hairColor = pick([0xb8b4ac, 0x8a8f96]);
  // barba/baffi (solo uomini adulti/anziani, mai con capelli lunghi se donna)
  let beard = 0;
  if (!female && age !== 'young') {
    const br = rng();
    beard = br < 0.55 ? 0 : (br < 0.70 ? 1 : (br < 0.88 ? 2 : 3));
  } else if (!female && rng() < 0.12) beard = rng() < 0.6 ? 1 : 2;
  // --- viso ---
  const faceVariant = Math.floor(rng() * 3);
  const jawW = 0.9 + rng() * 0.25;
  const cheek = 0.9 + rng() * 0.25;
  const eyeDeep = rng();
  // --- outfit per ruolo/contesto ---
  let outfit;
  if (isPlayer) outfit = 'player';
  else if (role === 'police') outfit = 'police';
  else if (role === 'target') outfit = 'target';
  else if (BAR_STAFF.has(id)) outfit = 'bar';
  else if (WORKERS.has(id)) outfit = 'worker';
  else if (id === 'tiberio') outfit = 'business';
  else if (id === 'sandro') outfit = 'guard';
  else if (elder) outfit = rng() < 0.6 ? 'elder' : 'casual';
  else {
    const or = rng();
    outfit = or < 0.34 ? 'casual' : (or < 0.55 ? 'street' : (or < 0.72 ? 'business' : (or < 0.88 ? 'casual2' : 'worker_casual')));
  }
  const top = pick(TOP_COLORS);
  const bottom = outfit === 'business' ? pick([0x2a2c34, 0x3a3f4a, 0x1f2126]) : pick(JEANS_COLORS);
  const shoes = pick(SHOE_COLORS);
  const glasses = !isPlayer && (outfit === 'business' || age === 'elder' || rng() < 0.14);
  const hat = role === 'police' ? 'cap' : (outfit === 'worker' || outfit === 'worker_casual') && rng() < 0.7 ? 'helmet'
    : outfit === 'guard' ? 'beanie' : (rng() < 0.08 ? 'beanie' : null);
  // --- stile di movimento (de-sincronizza la folla) ---
  const freq = 0.92 + rng() * 0.16;
  const amp = 0.88 + rng() * 0.24;
  const phase = (h % 628) / 100; // 0..2π deterministico
  const sway = rng() * Math.PI * 2;
  return {
    id, role, female, age, H, build, skin, hairStyle, hairColor, beard,
    faceVariant, jawW, cheek, eyeDeep, outfit, top, bottom, shoes,
    glasses, hat, freq, amp, phase, sway, colorHint
  };
}

// ---------------------------------------------------------------------------
// 5. Geometrie condivise (costruite una volta, riusate da tutti gli 80 NPC)
// ---------------------------------------------------------------------------
function displace(geo, fn) {
  const p = geo.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i);
    fn(v, i);
    p.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  return geo;
}

// --- 5a. Teschi: veri volti 3D (cranio+fronte+zigomi+mascella+mento scolpiti) ---
function buildSkull(variant) {
  const g = new THREE.SphereGeometry(1, 22, 17);
  const jawPinch = [0.42, 0.30, 0.52][variant]; // ovale / tondo / squadrato
  const faceLen = [1.0, 0.92, 1.06][variant];
  const browR = [1.0, 0.85, 1.15][variant];
  displace(g, (v) => {
    let { x, y, z } = v;
    // base ellissoide: testa adulta (larghezza .104, altezza .132, prof .118)
    x *= 0.104; y *= 0.132 * faceLen; z *= 0.118;
    const front = z > 0;
    if (y < 0.015) {
      // mascella/mento: restringe verso il basso + mento in avanti
      const k = Math.min(1, (0.015 - y) / 0.13);
      x *= 1 - jawPinch * k * 0.62;
      z *= 1 - 0.10 * k;
      if (y < -0.075 && front) z += 0.016 * Math.min(1, (-0.075 - y) / 0.05); // mento
    }
    if (front && y > -0.03 && y < 0.045) {
      // zigomi: rilievo latero-anteriore
      const band = 1 - Math.abs(y - 0.008) / 0.04;
      const side = Math.min(1, Math.abs(x) / 0.07);
      x += Math.sign(x) * 0.006 * Math.max(0, band) * side;
    }
    if (front && y > 0.03 && y < 0.075) {
      // fronte/arcata sopracciliare
      const band = 1 - Math.abs(y - 0.052) / 0.025;
      z += 0.004 * browR * Math.max(0, band) * (1 - Math.min(1, Math.abs(x) / 0.09));
    }
    if (z < -0.04) z *= 0.94;              // appiattisce la nuca
    if (Math.abs(x) > 0.085 && y < -0.05) x *= 0.96; // rastrema sotto le orecchie
    v.set(x, y, z);
  });
  return g;
}

// --- 5b. Dettagli facciali (coppie fuse: 1 mesh per coppia) ---
function buildEyeWhites() {
  const s = new THREE.SphereGeometry(0.0135, 10, 8);
  return mergeParts([
    { g: s, m: xform(-0.031, 0.002, 0.106, 0, 0, 0, 1, 1.1, 0.5) },
    { g: s, m: xform(0.031, 0.002, 0.106, 0, 0, 0, 1, 1.1, 0.5) },
  ]);
}
function buildPupils() {
  const s = new THREE.SphereGeometry(0.0062, 8, 6);
  return mergeParts([
    { g: s, m: xform(-0.031, 0.001, 0.1105) },
    { g: s, m: xform(0.031, 0.001, 0.1105) },
  ]);
}
function buildBrows() {
  const b = new THREE.BoxGeometry(0.034, 0.0085, 0.010);
  return mergeParts([
    { g: b, m: xform(-0.034, 0.036, 0.112, 0, -0.12, -0.10) },
    { g: b, m: xform(0.034, 0.036, 0.112, 0, 0.12, 0.10) },
  ]);
}
function buildLids() {
  // palpebra superiore: copre il terzo alto dell'occhio (sguardo umano, non sbarrato)
  const l = new THREE.BoxGeometry(0.030, 0.011, 0.016);
  return mergeParts([
    { g: l, m: xform(-0.031, 0.0115, 0.104, -0.28, 0, 0) },
    { g: l, m: xform(0.031, 0.0115, 0.104, -0.28, 0, 0) },
  ]);
}
function buildEars() {
  const e = new THREE.SphereGeometry(0.021, 8, 7);
  displace(e, (v) => { v.x *= 0.55; v.y *= 1.15; });
  return mergeParts([
    { g: e, m: xform(-0.100, -0.008, 0.008) },
    { g: e, m: xform(0.100, -0.008, 0.008) },
  ]);
}
function buildNose() {
  // ponte + punta + narici fuse: un vero naso 3D
  const bridge = new THREE.BoxGeometry(0.020, 0.034, 0.016);
  const tip = new THREE.SphereGeometry(0.0135, 8, 7);
  const wingL = new THREE.SphereGeometry(0.009, 7, 6);
  const wingR = new THREE.SphereGeometry(0.009, 7, 6);
  return mergeParts([
    { g: bridge, m: xform(0, -0.008, 0.112, -0.12, 0, 0) },
    { g: tip, m: xform(0, -0.028, 0.120, 0, 0, 0, 1, 0.85, 1) },
    { g: wingL, m: xform(-0.013, -0.033, 0.113) },
    { g: wingR, m: xform(0.013, -0.033, 0.113) },
  ]);
}
function buildMouth() {
  // bocca: labbra superiori/inferiori fuse, leggermente aperte
  const up = new THREE.BoxGeometry(0.042, 0.007, 0.008);
  const lo = new THREE.SphereGeometry(0.011, 8, 6);
  displace(lo, (v) => { v.x *= 1.9; v.y *= 0.55; v.z *= 0.7; });
  return mergeParts([
    { g: up, m: xform(0, -0.056, 0.102, 0.15, 0, 0) },
    { g: lo, m: xform(0, -0.064, 0.099, 0.2, 0, 0) },
  ]);
}
function buildGlasses() {
  // montatura: due cerchi + ponte + stanghette divaricate verso le orecchie
  const rim = new THREE.TorusGeometry(0.017, 0.0028, 6, 14);
  const bridge = new THREE.BoxGeometry(0.013, 0.003, 0.003);
  const arm = new THREE.BoxGeometry(0.003, 0.003, 0.095);
  return mergeParts([
    { g: rim, m: xform(-0.031, 0.002, 0.112) },
    { g: rim, m: xform(0.031, 0.002, 0.112) },
    { g: bridge, m: xform(0, 0.004, 0.113) },
    { g: arm, m: xform(-0.072, 0.006, 0.068, 0, 0.30, 0) },
    { g: arm, m: xform(0.072, 0.006, 0.068, 0, -0.30, 0) },
  ]);
}

// --- 5c. Capelli: 7 stili reali (mai una sfera colorata sul cranio) ---
function hairCap(extraBack = 0, noise = 0, seed = 7) {
  const g = new THREE.SphereGeometry(1, 16, 12, 0, Math.PI * 2, 0, 2.02);
  displace(g, (v) => {
    let { x, y, z } = v;
    x *= 0.116; y *= 0.130; z *= 0.126;
    // attaccatura: alza il bordo frontale (fronte libera, mai frangia sugli occhi)
    if (z > 0.06 && y < 0.045) {
      const az = Math.min(1, (z - 0.06) / 0.06);
      const ay = Math.min(1, (0.045 - y) / 0.06 + 0.4);
      const k = (az * az * (3 - 2 * az)) * (ay * ay * (3 - 2 * ay)); // smoothstep: nessuna piega
      y += k * 0.088;
    }
    // basette/scatto laterale: i capelli corti scoprono le orecchie
    if (Math.abs(x) > 0.062 && y < 0.0) {
      y += 0.028 * Math.min(1, (Math.abs(x) - 0.062) / 0.035);
    }
    // volume posteriore per stili medi/lunghi
    if (z < 0 && extraBack > 0) {
      const k = Math.min(1, -z / 0.12) * Math.min(1, (0.05 - y) / 0.1 + 0.5);
      z -= extraBack * Math.max(0, k);
      y -= extraBack * 0.55 * Math.max(0, k);
    }
    if (noise > 0) {
      const n = Math.sin(x * 131 + seed) * Math.sin(y * 157 + seed * 2) * Math.sin(z * 149 + seed * 3);
      const m = 1 + n * noise;
      x *= m; y = y * m + n * noise * 0.02; z *= m;
    }
    // appoggia sul cranio
    y += 0.018;
    v.set(x, y, z);
  });
  return g;
}
function buildHair(style) {
  // 0 corto 1 medio 2 lungo 3 riccio 4 buzz 6 coda 7 bob ondulato (5 = calvo: niente mesh)
  if (style === 5) return null;
  if (style === 0) return hairCap(0, 0.035);
  if (style === 4) {
    const g = new THREE.SphereGeometry(1, 12, 8, 0, Math.PI * 2, 0, 1.95);
    displace(g, (v) => { v.set(v.x * 0.107, v.y * 0.122 + 0.02, v.z * 0.119); });
    return g;
  }
  if (style === 3) return hairCap(0.01, 0.09);           // riccio: volume rumoroso
  if (style === 1) return hairCap(0.035, 0.02);          // medio: scende dietro
  if (style === 7) return hairCap(0.05, 0.05);           // bob ondulato alle mascelle
  if (style === 2) {                                     // lungo: manto fino alle spalle
    const cap = hairCap(0.06, 0.02);
    const fall = new THREE.CylinderGeometry(0.095, 0.115, 0.26, 12, 1, true);
    const side1 = new THREE.BoxGeometry(0.035, 0.20, 0.05);
    const side2 = new THREE.BoxGeometry(0.035, 0.20, 0.05);
    return mergeParts([
      { g: cap, m: M4() },
      { g: fall, m: xform(0, -0.14, -0.055, 0.10, 0, 0) },
      { g: side1, m: xform(-0.095, -0.10, 0.01, 0, 0, 0.06) },
      { g: side2, m: xform(0.095, -0.10, 0.01, 0, 0, -0.06) },
    ]);
  }
  // 6 coda di cavallo: medio + coda dietro
  const cap = hairCap(0.03, 0.02);
  const tail = new THREE.CylinderGeometry(0.026, 0.018, 0.24, 8);
  const tie = new THREE.TorusGeometry(0.026, 0.008, 6, 10);
  return mergeParts([
    { g: cap, m: M4() },
    { g: tail, m: xform(0, -0.10, -0.155, 0.55, 0, 0) },
    { g: tie, m: xform(0, 0.005, -0.115, 0.3, 0, 0) },
  ]);
}

// --- 5d. Barbe: 1 baffi, 2 pizzetto/corta, 3 folta ---
function buildBeard(kind) {
  if (!kind) return null;
  const moL = new THREE.BoxGeometry(0.024, 0.009, 0.012);
  const moR = new THREE.BoxGeometry(0.024, 0.009, 0.012);
  const parts = [
    { g: moL, m: xform(-0.014, -0.048, 0.108, 0, -0.2, -0.08) },
    { g: moR, m: xform(0.014, -0.048, 0.108, 0, 0.2, 0.08) },
  ];
  if (kind >= 2) {
    const chin = new THREE.SphereGeometry(0.05, 10, 8, 0, Math.PI * 2, Math.PI * 0.45, Math.PI * 0.55);
    displace(chin, (v) => { v.set(v.x * 1.0, v.y * 1.15 - 0.055, v.z * 0.9 + 0.055); });
    parts.push({ g: chin, m: M4() });
  }
  if (kind >= 3) {
    const jaw = new THREE.SphereGeometry(0.085, 10, 8, 0, Math.PI * 2, Math.PI * 0.42, Math.PI * 0.5);
    displace(jaw, (v) => { v.set(v.x * 1.02, v.y * 1.2 - 0.03, v.z * 0.95 + 0.03); });
    parts.push({ g: jaw, m: M4() });
  }
  return mergeParts(parts);
}

// --- 5e. Cappelli / caschi ---
function buildCap() { // polizia: visiera + fregio metallico
  const crown = new THREE.CylinderGeometry(0.098, 0.108, 0.085, 12);
  const brim = new THREE.CylinderGeometry(0.072, 0.072, 0.012, 12, 1, false, 0, Math.PI);
  return {
    cap: mergeParts([
      { g: crown, m: xform(0, 0.105, 0, 0, 0, 0) },
      { g: brim, m: xform(0, 0.066, 0.10, 0, -Math.PI / 2, 0, 1, 1, 1.25) },
    ]),
    badge: (() => {
      const b = new THREE.CylinderGeometry(0.016, 0.016, 0.008, 10);
      b.rotateX(Math.PI / 2 - 0.15);
      b.translate(0, 0.105, 0.102);
      return b;
    })()
  };
}
function buildHelmet() { // operaio: calotta + tesa
  const dome = new THREE.SphereGeometry(0.115, 12, 8, 0, Math.PI * 2, 0, 1.45);
  const rim = new THREE.CylinderGeometry(0.135, 0.14, 0.014, 12);
  return mergeParts([
    { g: dome, m: xform(0, 0.055, 0) },
    { g: rim, m: xform(0, 0.058, 0) },
  ]);
}
function buildBeanie() {
  const g = new THREE.SphereGeometry(0.112, 12, 9, 0, Math.PI * 2, 0, 1.85);
  const rim = new THREE.TorusGeometry(0.105, 0.018, 8, 14);
  displace(g, (v) => { v.set(v.x, v.y * 0.95 + 0.035, v.z); });
  return mergeParts([
    { g, m: M4() },
    { g: rim, m: xform(0, 0.035, 0, Math.PI / 2, 0, 0) },
  ]);
}

// --- 5f. Corpo: busto, bacino, arti (pivot all'origine in alto per l'animazione) ---
function buildTorsoGeo(female, jacket) {
  // Lathe del busto vestito: dal girovita alle spalle, sezione resa ellittica
  // via scala della mesh (torace largo, profondo la meta').
  const pts = [];
  const prof = female
    ? [[0.128, 0.00], [0.118, 0.08], [0.122, 0.16], [0.142, 0.30], [0.150, 0.38], [0.132, 0.46], [0.062, 0.53], [0.052, 0.55]]
    : [[0.132, 0.00], [0.122, 0.08], [0.130, 0.18], [0.148, 0.32], [0.152, 0.40], [0.130, 0.47], [0.060, 0.53], [0.052, 0.55]];
  if (jacket) { // giacca: torace piu' squadrato, spalle marcate
    prof[4][0] += 0.014; prof[5][0] += 0.016;
  }
  for (const [r, y] of prof) pts.push(new THREE.Vector2(r, y));
  const g = new THREE.LatheGeometry(pts, 14);
  g.computeVertexNormals();
  return g;
}
function buildPelvisGeo(female) {
  const g = new THREE.SphereGeometry(1, 14, 11);
  displace(g, (v) => {
    const w = female ? 0.150 : 0.132;
    v.set(v.x * w, v.y * 0.115, v.z * 0.105);
  });
  return g;
}
function limbGeo(rTop, rBot, len, bendX = 0) {
  // arto con origine al pivot (in alto), cresce verso -Y; gomito/ginocchio
  // precovati leggermente per silhouette naturali anche da fermi.
  const g = new THREE.CylinderGeometry(rTop, rBot, len, 9);
  g.translate(0, -len / 2, 0);
  if (bendX) {
    const p = g.attributes.position;
    const v = new THREE.Vector3();
    for (let i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i);
      const k = Math.min(1, -v.y / len);
      v.z += bendX * k * k;
      p.setXYZ(i, v.x, v.y, v.z);
    }
    g.computeVertexNormals();
  }
  return g;
}
function buildArmGeo(slim) {
  // braccio intero con gomito lievemente piegato (anatomia, non tubo dritto)
  const upper = new THREE.CylinderGeometry(slim ? 0.048 : 0.056, slim ? 0.042 : 0.049, 0.30, 9);
  upper.translate(0, -0.15, 0);
  const fore = new THREE.CylinderGeometry(slim ? 0.040 : 0.047, slim ? 0.032 : 0.038, 0.28, 9);
  fore.translate(0, -0.14, 0);
  return mergeParts([
    { g: upper, m: M4() },
    { g: fore, m: xform(0, -0.30, 0.008, 0.10, 0, 0) },
  ]);
}
function buildHandGeo() {
  // mano riconoscibile: palmo + 4 dita fuse + pollice
  const palm = new THREE.BoxGeometry(0.075, 0.085, 0.032);
  const parts = [{ g: palm, m: xform(0, -0.045, 0) }];
  for (let f = 0; f < 4; f++) {
    const fg = new THREE.BoxGeometry(0.016, 0.075 - Math.abs(f - 1.5) * 0.012, 0.015);
    parts.push({ g: fg, m: xform(-0.027 + f * 0.018, -0.115, 0.004, 0.12, 0, 0) });
  }
  const th = new THREE.BoxGeometry(0.016, 0.05, 0.015);
  parts.push({ g: th, m: xform(-0.042, -0.055, 0.012, 0.3, 0, 0.5) });
  return mergeParts(parts);
}
function buildShoeGeo() {
  // scarpa: tomaia + punta + suola + tacco
  const upper = new THREE.BoxGeometry(0.095, 0.075, 0.21);
  const toe = new THREE.SphereGeometry(0.048, 9, 7);
  displace(toe, (v) => { v.set(v.x, v.y * 0.7, v.z * 1.15); });
  const sole = new THREE.BoxGeometry(0.10, 0.028, 0.27);
  const heel = new THREE.BoxGeometry(0.09, 0.035, 0.06);
  return mergeParts([
    { g: upper, m: xform(0, 0.055, 0.02) },
    { g: toe, m: xform(0, 0.035, 0.125) },
    { g: sole, m: xform(0, 0.014, 0.035) },
    { g: heel, m: xform(0, 0.017, -0.075) },
  ]);
}
function buildNeckGeo() {
  const g = new THREE.CylinderGeometry(0.048, 0.055, 0.11, 10);
  g.translate(0, 0.055, 0);
  return g;
}
function buildShirtFront() { // camicia bianca + cravatta per i business
  const shirt = new THREE.BoxGeometry(0.10, 0.22, 0.012);
  const tie = new THREE.BoxGeometry(0.035, 0.20, 0.010);
  const knot = new THREE.BoxGeometry(0.045, 0.04, 0.014);
  return {
    shirt: mergeParts([{ g: shirt, m: xform(0, -0.02, 0.108, -0.06, 0, 0) }]),
    tie: mergeParts([
      { g: tie, m: xform(0, -0.10, 0.116, -0.06, 0, 0) },
      { g: knot, m: xform(0, 0.015, 0.112, -0.06, 0, 0) },
    ])
  };
}
function buildApron() { // pettorina bar/cameriere
  const bib = new THREE.BoxGeometry(0.24, 0.30, 0.015);
  const skirt = new THREE.BoxGeometry(0.30, 0.34, 0.015);
  return mergeParts([
    { g: bib, m: xform(0, 0.30, 0.125, -0.05, 0, 0) },
    { g: skirt, m: xform(0, -0.02, 0.135, 0.04, 0, 0) },
  ]);
}
function buildHood() { // cappuccio felpa abbassato dietro il collo (origine al collo)
  const g = new THREE.TorusGeometry(0.085, 0.038, 8, 12, Math.PI * 1.2);
  g.rotateZ(Math.PI * 0.9);
  g.rotateX(-0.5);
  return g;
}
function buildBelt() {
  const g = new THREE.CylinderGeometry(0.138, 0.142, 0.045, 12);
  return g;
}

// Registro geometrie condivise (lazy, una sola istanza ciascuna)
const GEO = {};
function G(key, make) {
  let g = GEO[key] ?? sharedGeo(key, make);
  GEO[key] = g;
  return g;
}
function sharedGeometries() {
  G('skull0', () => buildSkull(0)); G('skull1', () => buildSkull(1)); G('skull2', () => buildSkull(2));
  G('eyew', buildEyeWhites); G('pupil', buildPupils); G('brow', buildBrows); G('lid', buildLids);
  G('ear', buildEars); G('nose', buildNose); G('mouth', buildMouth); G('glasses', buildGlasses);
  for (let s = 0; s <= 7; s++) {
    if (s === 5) continue;
    G('hair' + s, () => buildHair(s));
  }
  for (let b = 1; b <= 3; b++) G('beard' + b, () => buildBeard(b));
  G('torsoM', () => buildTorsoGeo(false, false)); G('torsoF', () => buildTorsoGeo(true, false));
  G('torsoMJ', () => buildTorsoGeo(false, true)); G('torsoFJ', () => buildTorsoGeo(true, true));
  G('pelvisM', () => buildPelvisGeo(false)); G('pelvisF', () => buildPelvisGeo(true));
  G('arm', () => buildArmGeo(false)); G('armS', () => buildArmGeo(true));
  G('hand', buildHandGeo); G('shoe', buildShoeGeo); G('neck', buildNeckGeo);
  G('shirt', () => buildShirtFront().shirt); G('tie', () => buildShirtFront().tie);
  G('apron', buildApron); G('hood', buildHood); G('belt', buildBelt);
  G('cap', () => buildCap().cap); G('capbadge', () => buildCap().badge);
  G('helmet', buildHelmet); G('beanie', buildBeanie);
  G('thigh', () => limbGeo(0.075, 0.058, 0.45)); G('calf', () => limbGeo(0.056, 0.040, 0.40, 0.012));
  G('sleeve', () => limbGeo(0.066, 0.060, 0.13));
  return GEO;
}

// ---------------------------------------------------------------------------
// 6. Costruzione del personaggio (rig gerarchico con pivot anatomici)
// ---------------------------------------------------------------------------
let activeCamera = null;
export function setHumanCamera(cam) { activeCamera = cam; }

function mesh(geo, mat, shadow = false) {
  const m = new THREE.Mesh(geo, mat);
  if (shadow) m.castShadow = true;
  return m;
}

export function makeHumanoid(color, isPlayer, role, npc) {
  sharedGeometries();
  const id = npc?.id ?? ('anon_' + String(color) + '_' + String(role));
  const spec = identityFor(id, role ?? npc?.role ?? 'civilian', color, !!isPlayer);
  const { H, female, build } = spec;
  const k = H / 1.75;                       // scala verticale
  const slimF = build === 'slim' ? 0.88 : (build === 'heavy' ? 1.16 : 1.0);
  const shW = (female ? 0.185 : 0.210) * (build === 'heavy' ? 1.12 : (build === 'slim' ? 0.94 : 1.0));
  // anca/bacino: altezza esatta per poggiare le suole a y=0
  // (snodo anca -0.03, coscia 0.45k, polpaccio+scarpa 0.42k -> suola a 0)
  const hipY = 0.87 * k + 0.03, shoY = 1.47 * k, waistY = 1.13 * k;

  const skin = skinMat(spec.skin);
  const hairM = hairMat(spec.hairColor);
  // --- outfit -> materiali indumento ---
  const O = spec.outfit;
  const jacket = (O === 'business' || O === 'target' || O === 'guard' || O === 'police');
  let topMat, botMat, shoeM, sleeveLong = true;
  if (O === 'player') { topMat = fabricMat(0x2fbf71, 'knit'); botMat = fabricMat(0x2e3440, 'denim'); shoeM = shineMat(0xe8e4dc, 25); }
  else if (O === 'police') { topMat = fabricMat(0x22345e, 'weave'); botMat = fabricMat(0x1c2a4e, 'weave'); shoeM = shineMat(0x141416, 70); }
  else if (O === 'target') { topMat = fabricMat(0xb03028, 'weave'); botMat = fabricMat(0x23242c, 'denim'); shoeM = shineMat(0x2a2018, 60); sleeveLong = true; }
  else if (O === 'business') { topMat = fabricMat(pickTop(spec, [0x2c3240, 0x4a3a2e, 0x1f2a3a]), 'weave'); botMat = fabricMat(spec.bottom, 'weave'); shoeM = shineMat(0x191512, 80); }
  else if (O === 'street') { topMat = fabricMat(spec.top, 'knit'); botMat = fabricMat(pickTop(spec, JEANS_COLORS), 'denim'); shoeM = shineMat(spec.shoes, 30); }
  else if (O === 'bar') { topMat = fabricMat(0xe4ded2, 'weave'); botMat = fabricMat(0x23242c, 'weave'); shoeM = shineMat(0x1c1a18, 60); sleeveLong = false; }
  else if (O === 'worker' || O === 'worker_casual') { topMat = fabricMat(pickTop(spec, [0xb35a1e, 0x2e5a8a, 0x5a6a2e]), 'weave'); botMat = fabricMat(pickTop(spec, [0x3a4a5e, 0x4a3a28, 0x2e2e34]), 'denim'); shoeM = shineMat(0x2e2015, 40); }
  else if (O === 'guard') { topMat = fabricMat(0x2e3138, 'knit'); botMat = fabricMat(0x23242c, 'denim'); shoeM = shineMat(0x1c1a18, 50); }
  else if (O === 'elder') { topMat = fabricMat(pickTop(spec, [0x6a6a7a, 0x7a6a5a, 0x5a6a7a, 0x8a8a8a]), 'knit'); botMat = fabricMat(0x3a3f4a, 'weave'); shoeM = shineMat(0x2a2522, 40); }
  else { topMat = fabricMat(spec.top, O === 'casual2' ? 'weave' : 'knit'); botMat = fabricMat(spec.bottom, 'denim'); shoeM = shineMat(spec.shoes, 30); sleeveLong = O !== 'casual'; }
  if (ageSleeveShort(spec)) sleeveLong = false;

  const g = new THREE.Group();
  const rig = new THREE.Group();            // offset di posa (accosciata)
  g.add(rig);

  // --- bacino ---
  const hips = new THREE.Group();
  hips.position.y = hipY;
  rig.add(hips);
  const pelvis = mesh(GEO[female ? 'pelvisF' : 'pelvisM'], botMat);
  pelvis.scale.set(slimF, 1, 1);
  hips.add(pelvis);

  // --- busto ---
  const torsoG = new THREE.Group();
  torsoG.position.y = 0.02;
  if (spec.age === 'elder') torsoG.rotation.x = 0.07; // cifosi lieve: gli anziani si riconoscono
  hips.add(torsoG);
  const torsoKey = (female ? 'torsoF' : 'torsoM') + (jacket ? 'J' : '');
  const torso = mesh(GEO[torsoKey], topMat, true);
  // base del lathe (0.55k di giacca/busto) appoggiata ai fianchi, colletto alle spalle
  torso.position.y = (shoY + 0.03 - 0.55 * k) - (hipY + 0.02);
  torso.scale.set((female ? 1.18 : 1.32) * slimF, k, 0.78 * slimF);
  torsoG.add(torso);
  if (O === 'police' || O === 'guard' || O === 'worker') {
    const belt = mesh(GEO.belt, flatMat(0x14100c));
    belt.position.y = waistY - hipY + 0.02;
    belt.scale.set(slimF * 1.32, 1, slimF * 1.05);
    torsoG.add(belt);
  }
  let shirtF = null, tieM = null;
  if (O === 'business') {
    shirtF = mesh(GEO.shirt, fabricMat(0xe8e4da, 'weave'));
    shirtF.position.y = shoY - hipY - 0.13; shirtF.scale.set(1, k, 1);
    torsoG.add(shirtF);
    tieM = mesh(GEO.tie, flatMat(pickTop(spec, [0x7a1f2e, 0x1f3a5e, 0x2e2e2e])));
    tieM.position.y = shoY - hipY - 0.13; tieM.scale.set(1, k, 1);
    torsoG.add(tieM);
  }
  let apronM = null;
  if (O === 'bar') {
    apronM = mesh(GEO.apron, fabricMat(0x2a3a2e, 'weave'));
    apronM.position.y = 0.98 * k - (hipY + 0.02); apronM.scale.set(1, k, 1);
    torsoG.add(apronM);
  }
  let hoodM = null;
  if (O === 'street' || O === 'player') {
    hoodM = mesh(GEO.hood, topMat);
    hoodM.position.set(0, shoY - hipY - 0.04, -0.115);
    torsoG.add(hoodM);
  }

  // --- braccia (pivot alla spalla, oscillano intere) ---
  function buildArm(side) {
    const s = side; // -1 sx, +1 dx
    const pivot = new THREE.Group();
    pivot.position.set(s * shW, shoY - hipY - 0.04, 0);
    torsoG.add(pivot);
    const armM = mesh(GEO[slimF < 0.95 ? 'armS' : 'arm'], sleeveLong ? topMat : skin);
    armM.scale.set(1, k, 1);
    pivot.add(armM);
    if (!sleeveLong) { // manicotto della t-shirt alla spalla
      const sl = mesh(GEO.sleeve, topMat);
      sl.position.y = -0.01;
      pivot.add(sl);
      // coprispalla: chiude il giunto braccio/busto (niente pelle a vista sopra la manica)
      const cap = mesh(G('shcap', () => new THREE.SphereGeometry(0.068, 10, 8)), topMat);
      pivot.add(cap);
    }
    const handG = new THREE.Group();
    handG.position.set(0, -0.585 * k, 0.012);
    pivot.add(handG);
    const hand = mesh(GEO.hand, skin);
    handG.add(hand);
    pivot.rotation.z = s * -0.07; // caduta naturale lungo i fianchi
    return { pivot, handG };
  }
  const armL = buildArm(-1), armR = buildArm(1);

  // --- collo + testa (pivot alla base del collo) ---
  const neckG = new THREE.Group();
  neckG.position.y = shoY - hipY + 0.02;
  torsoG.add(neckG);
  const neck = mesh(GEO.neck, skin);
  neckG.add(neck);
  const headG = new THREE.Group();
  headG.position.y = 0.115;
  neckG.add(headG);
  const skull = mesh(GEO['skull' + spec.faceVariant], skin, true);
  skull.scale.set(spec.jawW, 1, 1);
  headG.add(skull);
  const eyeW = mesh(GEO.eyew, flatMat(0xf2ede2));
  eyeW.position.z = spec.eyeDeep * 0.002;
  headG.add(eyeW);
  const pupils = mesh(GEO.pupil, flatMat(0x241a12));
  pupils.position.z = spec.eyeDeep * 0.002;
  headG.add(pupils);
  const lids = mesh(GEO.lid, skin); // palpebre = pelle: staccano l'occhio dal cranio
  headG.add(lids);
  const brows = mesh(GEO.brow, hairM);
  headG.add(brows);
  const nose = mesh(GEO.nose, skin);
  headG.add(nose);
  const mouth = mesh(GEO.mouth, flatMat(0x6e3a30));
  headG.add(mouth);
  const ears = mesh(GEO.ear, skin);
  headG.add(ears);
  let hairMsh = null;
  if (spec.hairStyle !== 5) {
    hairMsh = mesh(GEO['hair' + spec.hairStyle], hairM, true);
    headG.add(hairMsh);
  } else { // calvizie: alone lucido ai lati
    const fringe = mesh(GEO.hair4, hairM);
    fringe.scale.set(1.02, 0.55, 1.02);
    fringe.position.y = -0.015;
    headG.add(fringe);
    hairMsh = fringe;
  }
  let beardM = null;
  if (spec.beard) {
    beardM = mesh(GEO['beard' + spec.beard], hairM);
    headG.add(beardM);
  }
  let glassesM = null;
  if (spec.glasses) {
    glassesM = mesh(GEO.glasses, flatMat(0x1c1c20));
    headG.add(glassesM);
  }
  let capBadge = null;
  if (spec.hat === 'cap') {
    const cap = mesh(GEO.cap, flatMat(0x1a2a55), true);
    headG.add(cap);
    capBadge = mesh(GEO.capbadge, shineMat(0xc0a030, 90));
    headG.add(capBadge);
  } else if (spec.hat === 'helmet') {
    const hm = mesh(GEO.helmet, shineMat(pickTop(spec, [0xd0a020, 0xe8e4da, 0xb03028]), 55), true);
    headG.add(hm);
  } else if (spec.hat === 'beanie') {
    const bn = mesh(GEO.beanie, fabricMat(pickTop(spec, [0x3a3f4a, 0x5e2e2e, 0x2e4e3a]), 'knit'));
    headG.add(bn);
  }

  // --- gambe (pivot all'anca; ginocchio a meta') ---
  function buildLeg(side) {
    const hip = new THREE.Group();
    hip.position.set(side * 0.105 * slimF, -0.03, 0);
    hips.add(hip);
    const thigh = mesh(GEO.thigh, botMat);
    thigh.scale.set(slimF, k, slimF);
    hip.add(thigh);
    const knee = new THREE.Group();
    knee.position.y = -0.45 * k;
    hip.add(knee);
    const calf = mesh(GEO.calf, botMat);
    calf.scale.set(slimF * 0.95, k, slimF * 0.95);
    knee.add(calf);
    const shoe = mesh(GEO.shoe, shoeM);
    shoe.position.set(0, -0.42 * k, 0.035);
    knee.add(shoe);
    return { hip, knee };
  }
  const legL = buildLeg(-1), legR = buildLeg(1);

  // --- player ring + marker (compatibilita' con game.js) ---
  if (isPlayer) {
    const ring = new THREE.Mesh(
      sharedGeo('ring', () => new THREE.TorusGeometry(.55, .05, 6, 16)),
      sharedBasic(0x2fbf71));
    ring.rotation.x = Math.PI / 2; ring.position.y = .06; g.add(ring);
  }
  const mark = new THREE.Mesh(
    sharedGeo('mark', () => new THREE.OctahedronGeometry(.16)),
    sharedBasic(0xff3344));
  mark.position.y = 2.05 * k; mark.visible = false; g.add(mark);

  g.userData.mark = mark;
  // compat: il vecchio codice muoveva legL/legR/armL/armR
  g.userData.limbs = { legL: legL.hip, legR: legR.hip, armL: armL.pivot, armR: armR.pivot, phase: spec.phase };
  g.userData.human = {
    spec, rig, hips, torsoG, neckG, headG, eyeW, pupils, brows,
    armL: armL.pivot, armR: armR.pivot, handL: armL.handG, handR: armR.handG,
    thighL: legL.hip, thighR: legR.hip, kneeL: legL.knee, kneeR: legR.knee,
    torso, skull,
    far: [pupils, brows, mouth, ears, glassesM, capBadge].filter(Boolean),
    mid: [],
    phase: spec.phase, freq: spec.freq, amp: spec.amp, sway: spec.sway,
    dispSpeed: 0, lastYaw: 0, blinkAt: 2 + (spec.phase % 3), lodTick: (fnv1a(id) % 8),
    talkSeed: spec.phase, k, H,
  };
  return g;
}
function pickTop(spec, arr) {
  const r = mulberry(fnv1a('top|' + spec.id))();
  return arr[Math.floor(r * arr.length) % arr.length];
}
function ageSleeveShort(spec) {
  if (spec.outfit === 'bar') return true;
  const r = mulberry(fnv1a('slv|' + spec.id))();
  return r < 0.30 && !['business', 'police', 'guard', 'worker', 'elder', 'player'].includes(spec.outfit);
}

// ---------------------------------------------------------------------------
// 7. Animazioni procedurali sul rig (aggancio alla locomotion esistente)
//    game.js passa speed (m/s dalla sim), t (secondi di sim), attacking,
//    extra {talk, alert, crouch}. Niente cinematica: tutto deriva dallo stato.
// ---------------------------------------------------------------------------
export function animateHumanoid(g, speed, t, attacking, extra) {
  const Hd = g.userData.human;
  const L = g.userData.limbs;
  if (!Hd || !L) return;
  extra = extra || {};
  Hd.lodTick++;
  // velocita' esibita (smorza stop/partenze: niente scatti)
  const target = Math.max(0, speed || 0);
  Hd.dispSpeed += (target - Hd.dispSpeed) * 0.18;
  const v = Hd.dispSpeed;
  const run = Math.min(1, v / 3);
  const walking = Math.min(1, v / 0.4);
  Hd.phase += (1.6 + v * 2.6) * 0.055 * Hd.freq;
  const sw = Math.sin(Hd.phase) * (0.62 * walking + 0.18 * run) * Hd.amp;
  const sw2 = Math.sin(Hd.phase + Math.PI) * (0.62 * walking + 0.18 * run) * Hd.amp;

  const crouch = !!extra.crouch;
  const alert = !!extra.alert;

  if (crouch) {
    // accosciata reale: anche, ginocchia, busto (niente scale.y che deforma)
    Hd.thighL.rotation.x = -1.65; Hd.thighR.rotation.x = -1.65;
    Hd.kneeL.rotation.x = 1.9; Hd.kneeR.rotation.x = 1.9;
    Hd.rig.position.y = -0.52 * Hd.k;
    Hd.torsoG.rotation.x = 0.35 + (Hd.spec.age === 'elder' ? 0.07 : 0);
    Hd.armL.rotation.x = -0.5; Hd.armR.rotation.x = -0.5;
    Hd.headG.rotation.x = -0.25;
  } else {
    Hd.rig.position.y = Math.abs(Math.sin(Hd.phase)) * 0.035 * walking; // rimbalzo passo
    // gambe alternate + ginocchio che piega in fase di richiamo
    Hd.thighL.rotation.x = sw; Hd.thighR.rotation.x = sw2;
    Hd.kneeL.rotation.x = Math.max(0, -Math.sin(Hd.phase - 0.6)) * (0.9 * walking + 0.5 * run) + 0.06;
    Hd.kneeR.rotation.x = Math.max(0, -Math.sin(Hd.phase + Math.PI - 0.6)) * (0.9 * walking + 0.5 * run) + 0.06;
    Hd.thighL.rotation.z = 0.02; Hd.thighR.rotation.z = -0.02;
    // busto: rollio + contro-rotazione + piega in avanti con la velocita'
    Hd.torsoG.rotation.y = -sw * 0.14;
    Hd.torsoG.rotation.z = Math.sin(Hd.phase) * 0.035 * walking + Math.sin(t * 0.9 + Hd.sway) * 0.012 * (1 - walking);
    Hd.torsoG.rotation.x = (Hd.spec.age === 'elder' ? 0.07 : 0.02) + run * 0.16 + walking * 0.04;
    // braccia opposte alle gambe + apertura d'allerta
    if (attacking) {
      Hd.armR.rotation.x = -2.3; Hd.armR.rotation.z = 0.5;
      Hd.armL.rotation.x = 0.4; Hd.armL.rotation.z = -0.35;
      Hd.torsoG.rotation.y = -0.3;
    } else if (alert) {
      Hd.armL.rotation.x = -sw * 0.5; Hd.armR.rotation.x = sw * 0.5;
      Hd.armL.rotation.z = -0.55; Hd.armR.rotation.z = 0.55; // braccia semi-alzate
      Hd.headG.rotation.x = -0.06;
    } else if (extra.talk) {
      // conversazione: cenni del capo + gesticolazione leggera (de-sincronizzata)
      const gt = Math.sin(t * 3.1 + Hd.talkSeed * 3);
      Hd.armR.rotation.x = -0.55 + gt * 0.22 * Hd.amp;
      Hd.armR.rotation.z = 0.35;
      Hd.armL.rotation.x = -0.15 + Math.sin(t * 2.3 + Hd.talkSeed) * 0.08;
      Hd.armL.rotation.z = -0.15;
      Hd.headG.rotation.x = 0.05 + Math.sin(t * 2.6 + Hd.talkSeed * 2) * 0.045;
    } else {
      Hd.armL.rotation.x = -sw2 * 0.75; Hd.armR.rotation.x = -sw * 0.75;
      Hd.armL.rotation.z = -0.07 - walking * 0.03; Hd.armR.rotation.z = 0.07 + walking * 0.03;
      Hd.armL.rotation.x += Math.sin(t * 1.7 + Hd.sway) * 0.02 * (1 - walking); // respiro
      Hd.armR.rotation.x += Math.sin(t * 1.7 + Hd.sway + 1) * 0.02 * (1 - walking);
      // idle: spostamento del peso + testa che osserva (mai statue)
      Hd.hips.position.x = Math.sin(t * 0.55 + Hd.sway) * 0.018 * (1 - walking);
      Hd.headG.rotation.y = Math.sin(t * 0.42 + Hd.sway * 2) * 0.16 * (1 - walking);
      Hd.headG.rotation.x = Math.sin(t * 1.7 + Hd.sway) * 0.02 * (1 - walking);
    }
    // mani: leggera contro-rotazione naturale
    Hd.handL.rotation.x = -Hd.armL.rotation.x * 0.35;
    Hd.handR.rotation.x = -Hd.armR.rotation.x * 0.35;
    // piega in curva: rollio verso l'interno della svolta (yaw dalla sim)
    const yaw = g.rotation.y || 0;
    let dy = yaw - Hd.lastYaw;
    while (dy > Math.PI) dy -= 2 * Math.PI;
    while (dy < -Math.PI) dy += 2 * Math.PI;
    Hd.lastYaw = yaw;
    Hd.lean = (Hd.lean ?? 0) * 0.9 + Math.max(-0.2, Math.min(0.2, dy * 3)) * 0.1;
    Hd.torsoG.rotation.z += Hd.lean;
  }

  // ammiccamento: scala occhi a fessura ogni 2-5s (de-sincronizzato per NPC)
  if (t > Hd.blinkAt) {
    Hd.blinkAt = t + 1.8 + ((Hd.phase * 7) % 3.2);
    Hd.blinkUntil = t + 0.12;
  }
  const blink = t < (Hd.blinkUntil ?? -1) ? 0.12 : 1;
  Hd.eyeW.scale.y = blink;
  Hd.pupils.scale.y = blink;

  // LOD proporzionato alla distanza (a scatti sfalsati: ~1 NPC su 8 per frame)
  if (activeCamera && (Hd.lodTick % 8 === 0)) {
    const dx = g.position.x - activeCamera.position.x;
    const dz = g.position.z - activeCamera.position.z;
    const d2 = dx * dx + dz * dz;
    const far = d2 > 22 * 22;
    const mid = d2 > 50 * 50;
    for (const m of Hd.far) m.visible = !far && !mid;
    for (const m of Hd.mid) m.visible = !mid;
  }
  L.phase = Hd.phase;
}
