// S9 — scena del nuovo quartiere (three.js). Legge world/mapData.js (WORLD +
// S9_* fusi) e world/s9_district.js (dettagli S9): strade, edifici vari,
// piazza delle Erbe, market/officina con vani reali, props, vegetazione
// instanced, storytelling. Materiali S7 (PBR, scala metrica, varianti
// deterministiche). Niente collider: solo rendering (fisica in world.js).
import * as THREE from 'three';
import { WORLD } from '../world/mapData.js';
import { S9_BUILDINGS, S9_COVER_WALLS, S9_PROPS, s9Vegetation } from '../world/s9_district.js';
import { sharedLambert, sharedBasic, sharedGeo } from './assets.js';
import {
  matAsphalt, matSidewalk, matPiazza, matPlaster, matCement, matStone,
  matBrick, matWood, matGrass, matTrunk, matLeaf, matHedge,
  matTileFloor, matMetal, matCarPaint,
  matGlass, matLampOn, grimeTexture,
} from './materials.js';
function hash(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

export function buildS9District(scene) {
  const mat = sharedLambert;
  const add = (parent, mesh, x = 0, y = 0, z = 0, ry = 0) => {
    mesh.position.set(x, y, z);
    if (ry) mesh.rotation.y = ry;
    parent.add(mesh);
    return mesh;
  };
  // Box con geometria condivisa per misure uguali (meno memoria, stessa resa).
  const BX = (w, h, d, m) => {
    const o = new THREE.Mesh(sharedGeo(`s9bx${w.toFixed(2)}x${h.toFixed(2)}x${d.toFixed(2)}`,
      () => new THREE.BoxGeometry(w, h, d)), m);
    o.castShadow = true; o.receiveShadow = true;
    return o;
  };
  const PL = (w, d, m) => {
    const o = new THREE.Mesh(sharedGeo(`s9pl${w.toFixed(2)}x${d.toFixed(2)}`,
      () => new THREE.PlaneGeometry(w, d)), m);
    o.rotation.x = -Math.PI / 2; o.receiveShadow = true;
    return o;
  };
  const CY = (rt, rb, h, m, seg = 8) => {
    const o = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m);
    o.castShadow = true; o.receiveShadow = true;
    return o;
  };

  const M = {
    grass: matGrass(150, 150),
    asphalt: matAsphalt(60, 6),
    asphaltWorn: matAsphalt(30, 6),
    alley: matAsphalt(4, 20),
    walk: matSidewalk(60, 1.5, 0),
    walkRaised: matSidewalk(40, 2, 1),
    piazza: matPiazza(16, 14),
    piazzaDark: matPiazza(16, 2, true),
    court: matPiazza(8, 6),
    curb: matStone(1, 60, 0.3),
    lineWhite: sharedBasic(0xe8e6da),
    lineYellow: sharedBasic(0xd8a83a),
    trim: matStone(2, 8, 0.3),
    plinth: matCement(0, 8, 1.1),
    roofFlat: matCement(2, 12, 10),
    winGlass: matGlass(0xcfd8da, 0.42),
    metal: matMetal('iron'),
    metalLight: matMetal('steel'),
    brass: matMetal('brass'),
    rust: matMetal('rust'),
    binGreen: matMetal('painted'),
    trunk: matTrunk(),
    leaf: matLeaf(0),
    leafDark: matLeaf(1),
    hedge: matHedge(),
    woodDark: matWood(2, 2, 2),
    woodMid: matWood(0, 2, 2),
    tire: mat(0x1c1c1e),
    paper: mat(0xd8d2c2),
    posterR: mat(0xa83a32), posterB: mat(0x2a5a9a), posterY: mat(0xc8a03a),
    clay: mat(0xa8603a),
    sack: mat(0x9a8a6a),
    tarpBlue: mat(0x2a4a7a),
    awningR: mat(0x9a3a2e), awningS: mat(0xe6ddc8),
    tileFloor: matTileFloor(14, 10),
    concFloor: matSidewalk(14, 10, 1),
    water: matGlass(0x9fc4d8, 0.7),
  };
  const facadeMat = (b) => {
    const v = b.variant ?? 0;
    switch (b.facade) {
      case 'brick': return matBrick(v % 3, b.w, b.h);
      case 'stone': return matStone(v % 3, b.w, b.h);
      case 'cement': return matCement(v % 3, b.w, b.h);
      case 'tile': return matPlaster(1, b.w, b.h);
      default: return matPlaster(v % 5, b.w, b.h);
    }
  };

  // ================= 0. SUOLO ESTESO =================
  // Sotto il prato 100x100 esistente (y=0): 2cm sotto, nessuna z-fight.
  add(scene, PL(150, 150, M.grass), 0, -0.02, 0);

  // ================= 1. STRADE =================
  const roadSegs = [
    ...WORLD.roadsS9,
    { id: 'mainE', x0: 50, x1: 75, z0: -4, z1: 4, kind: 'main' },
    { id: 'mainW', x0: -75, x1: -50, z0: -4, z1: 4, kind: 'main' },
  ];
  for (const r of roadSegs) {
    // le strade della zona vecchia restano dei vecchi: qui solo oltre |x|>49.5 e nuove
    if (r.kind === 'main' && r.id !== 'mainE' && r.id !== 'mainW') continue;
    const w = r.x1 - r.x0, d = r.z1 - r.z0;
    const cx = (r.x0 + r.x1) / 2, cz = (r.z0 + r.z1) / 2;
    let m = M.asphalt;
    if (r.kind === 'plaza') m = M.piazza;
    else if (r.kind === 'court') m = M.court;
    else if (r.kind === 'alley') m = M.alley;
    else if (r.id === 'vecchia' || r.id === 'vicolo') m = M.asphaltWorn;
    add(scene, PL(w, d, m), cx, 0.02, cz);
  }
  // marciapiedi: rialzati in zona commerciale, piatti altrove
  const walkStrips = [
    { x0: 53, x1: 54.5, z0: -30, z1: 20, raised: true },   // mercato est
    { x0: 45.5, x1: 47, z0: -20, z1: 20, raised: true },   // mercato ovest
    { x0: -60, x1: 40, z0: -29.6, z1: -28.2, raised: false }, // via sud nord
    { x0: -60, x1: 40, z0: -37.4, z1: -36, raised: false },   // via sud sud
    { x0: -31.6, x1: -30.2, z0: -60, z1: 40, raised: false }, // vecchia est
    { x0: -39.4, x1: -38, z0: -60, z1: 40, raised: false },   // vecchia ovest
    { x0: 55, x1: 71, z0: -31.6, z1: -30.2, raised: true },   // sagrato ristorante
  ];
  for (const s of walkStrips) {
    const w = s.x1 - s.x0, d = s.z1 - s.z0;
    if (s.raised) {
      add(scene, BX(w, 0.14, d, M.walkRaised), (s.x0 + s.x1) / 2, 0.07, (s.z0 + s.z1) / 2);
    } else {
      add(scene, PL(w, d, M.walk), (s.x0 + s.x1) / 2, 0.025, (s.z0 + s.z1) / 2);
    }
  }
  // linea centrale + strisce pedonali + stalli + tombini
  for (let x = 50; x <= 74; x += 2.4) add(scene, BX(1.2, 0.012, 0.14, M.lineWhite), x, 0.032, 0);
  for (let x = -74; x <= -50; x += 2.4) add(scene, BX(1.2, 0.012, 0.14, M.lineWhite), x, 0.032, 0);
  for (let z = -68; z <= 58; z += 4) {
    if (Math.abs(z + 33) < 4 || Math.abs(z) < 5) continue; // salta incroci
    add(scene, BX(0.14, 0.012, 1.2, M.lineWhite), 50, 0.032, z);
  }
  for (let x = -58; x <= 62; x += 4) {
    if (Math.abs(x) < 4 || Math.abs(x + 35) < 4 || Math.abs(x - 50) < 4) continue;
    add(scene, BX(1.2, 0.012, 0.14, M.lineWhite), x, 0.032, -33);
  }
  for (const [cx, cz, along] of [[50, 1.5, 'z'], [0, -33, 'x'], [-35, -33, 'x']]) {
    for (let i = -3; i <= 3; i++) {
      if (along === 'z') add(scene, BX(0.55, 0.014, 1.6, M.lineWhite), cx + i * 1.0, 0.034, cz);
      else add(scene, BX(1.6, 0.014, 0.55, M.lineWhite), cx + i * 1.0, 0.034, cz);
    }
  }
  for (let x = -20; x <= 10; x += 3.4) add(scene, BX(0.12, 0.012, 2.2, M.lineYellow), x, 0.033, -38.2);
  for (const [x, z] of [[50, -10], [0, -33], [-35, -40], [60, 0], [69, 48]]) {
    const mh = new THREE.Mesh(sharedGeo('s9mh', () => new THREE.CircleGeometry(0.45, 12)), mat(0x2a2c30));
    mh.rotation.x = -Math.PI / 2;
    add(scene, mh, x, 0.035, z);
  }
  // semaforo all'incrocio del mercato + segnali
  {
    const g = new THREE.Group();
    add(g, CY(0.06, 0.06, 3.4, M.metalLight, 6), 0, 1.7, 0);
    add(g, BX(0.35, 0.9, 0.3, M.metal), 0, 3.4, 0);
    const lampM = (c, y, on) => {
      const l = new THREE.Mesh(sharedGeo('s9tl', () => new THREE.SphereGeometry(0.09, 8, 6)),
        on ? matLampOn() : mat(0x222222));
      add(g, l, 0, y, 0.16);
    };
    lampM(0, 3.65, false); lampM(0, 3.4, false); lampM(0, 3.15, true);
    add(scene, g, 53.8, 0, 4.8);
  }
  for (const [x, z, kind] of [[46.5, 5.2, 0], [-31.5, -29.5, 1]]) {
    const g = new THREE.Group();
    add(g, CY(0.05, 0.05, 2.6, M.metalLight, 6), 0, 1.3, 0);
    const disc = CY(0.35, 0.35, 0.04, mat(kind ? 0xc83a2e : 0x2a5a9a), 12);
    disc.rotation.x = Math.PI / 2;
    add(g, disc, 0, 2.5, 0);
    add(scene, g, x, 0.14, z);
  }

  // ================= 2. PIAZZA DELLE ERBE =================
  {
    const p = WORLD.piazza2;
    add(scene, BX(p.w + 0.4, 0.1, 0.5, M.piazzaDark), p.cx, 0.05, p.cz - p.d / 2);
    add(scene, BX(p.w + 0.4, 0.1, 0.5, M.piazzaDark), p.cx, 0.05, p.cz + p.d / 2);
    add(scene, BX(0.5, 0.1, p.d + 0.4, M.piazzaDark), p.cx - p.w / 2, 0.05, p.cz);
    add(scene, BX(0.5, 0.1, p.d + 0.4, M.piazzaDark), p.cx + p.w / 2, 0.05, p.cz);
    // fontana centrale (fuori dai nodi: s9_pia2c dista 2.5m)
    const g = new THREE.Group();
    add(g, CY(1.5, 1.6, 0.6, M.plinth, 10), 0, 0.3, 0);
    const wat = new THREE.Mesh(sharedGeo('s9wat', () => new THREE.CircleGeometry(1.3, 14)), M.water);
    wat.rotation.x = -Math.PI / 2;
    add(g, wat, 0, 0.62, 0);
    add(g, CY(0.2, 0.3, 1.1, M.plinth, 8), 0, 1.0, 0);
    add(g, CY(0.55, 0.45, 0.25, M.plinth, 8), 0, 1.6, 0);
    const jet = new THREE.Mesh(sharedGeo('s9jet', () => new THREE.CylinderGeometry(0.05, 0.09, 0.9, 6)), M.water);
    add(g, jet, 0, 2.0, 0);
    add(scene, g, 64, 0, -37.5);
    // aiuole con siepi ai bordi
    for (let x = 56; x <= 70; x += 1.3) {
      add(scene, BX(1.2, 0.6, 0.6, M.hedge), x, 0.3, -45.2);
      add(scene, BX(1.2, 0.6, 0.6, M.hedge), x, 0.3, -32.8);
    }
  }

  // ================= 3. INSEGNE =================
  const signTex = (bg, fg, text, border) => {
    if (typeof document === 'undefined') return null;
    const c = document.createElement('canvas'); c.width = 256; c.height = 64;
    const ctx = c.getContext('2d');
    ctx.fillStyle = bg; ctx.fillRect(0, 0, 256, 64);
    ctx.strokeStyle = border; ctx.lineWidth = 4; ctx.strokeRect(4, 4, 248, 56);
    ctx.fillStyle = fg; ctx.font = 'bold 28px serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(text, 128, 34);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    return t;
  };
  const SIGNS = {
    s9_pharma: signTex('#1e4a2e', '#e8f0e8', '+ FARMACIA', '#e8f0e8'),
    s9_resto: signTex('#5a1f1a', '#f0e6cc', 'RISTORANTE', '#c8a03a'),
    s9_shoprow: signTex('#2a3a5a', '#e8e2d0', 'NEGOZI · UFFICI', '#e8e2d0'),
    s9_super: signTex('#1a5a7a', '#ffffff', 'SUPER', '#ffffff'),
    s9_off1: signTex('#3a3f46', '#d8dce0', 'UFFICI', '#9aa0a8'),
    s9_kiosk: signTex('#7a5a1a', '#fff2cc', 'BAR', '#fff2cc'),
  };
  const SHOP_TXT = { s9_market: 'MARKET', s9_depot: 'DEPOSITO', s9_tech: 'TECNICO' };

  // ================= 4. EDIFICI =================
  // finestre instanced: telai, vetri, vetri accesi (2 toni), davanzali, persiane
  const winFrame = [], winGlass = [], winLitA = [], winLitB = [], winSill = [], winShut = [], winBoard = [];
  const winMats = {
    frame: mat(0xe6e0d2), glass: M.winGlass,
    litA: sharedBasic(0xd8b76a), litB: sharedBasic(0xbfd4e8),
    sill: mat(0x8d8578),
    shutG: matWood(1, 1, 2),
  };
  const ENTR = {
    s9_pharma: 'N', s9_resto: 'W', s9_shoprow: 'W', s9_res1: 'N', s9_res2: 'N',
    s9_res3: 'N', s9_res4: 'N', s9_res5: 'S', s9_off1: 'E', s9_off2: 'W',
    s9_off3: 'E', s9_super: 'N', s9_palazzo: 'S', s9_old1: 'S', s9_old2: 'S',
    s9_old3: 'S', s9_old4: 'S', s9_depot: 'E', s9_tech: 'E', s9_kiosk: 'W',
  };
  const RES = new Set(['s9_res1', 's9_res2', 's9_res3', 's9_res4', 's9_res5', 's9_palazzo', 's9_old1', 's9_old2', 's9_old3', 's9_old4']);
  const doorX = {}; // per-faccia: coordinata porta per bucare le finestre
  doorX['s9_pharma:N'] = 42; doorX['s9_resto:W'] = -24; doorX['s9_shoprow:W'] = 33;
  doorX['s9_res1:N'] = 15; doorX['s9_res2:N'] = 32; doorX['s9_res3:N'] = -10;
  doorX['s9_res4:N'] = -25; doorX['s9_res5:S'] = 61; doorX['s9_off1:E'] = 48.5;
  doorX['s9_off2:W'] = 50; doorX['s9_off3:E'] = 47; doorX['s9_super:N'] = 15;
  doorX['s9_palazzo:S'] = -25; doorX['s9_old1:S'] = -51.5; doorX['s9_old2:S'] = -62.5;
  doorX['s9_old3:S'] = -44; doorX['s9_old4:S'] = -57; doorX['s9_depot:E'] = -14;
  doorX['s9_tech:E'] = -58; doorX['s9_kiosk:W'] = -42.5;

  const GHOST = mat(0x6a5a4a); // vecchia insegna sbiadita
  for (const b of S9_BUILDINGS) {
    const g = new THREE.Group();
    const x0 = b.x - b.w / 2, x1 = b.x + b.w / 2;
    const z0 = b.z - b.d / 2, z1 = b.z + b.d / 2;
    const wallM = facadeMat(b);
    const worn = b.maint === 'worn' || b.maint === 'old';
    const h = hash(b.id);
    // corpo + zoccolo + cornicione + marcapiano
    add(g, BX(b.w, b.h, b.d, wallM), b.x, b.h / 2, b.z);
    add(g, BX(b.w + 0.15, 1.0, b.d + 0.15, M.plinth), b.x, 0.5, b.z);
    add(g, BX(b.w + 0.4, 0.28, b.d + 0.4, M.trim), b.x, b.h - 0.14, b.z);
    if (b.h > 5.5) add(g, BX(b.w + 0.2, 0.22, b.d + 0.2, M.trim), b.x, 3.1, b.z);
    // tetto: soletta + parapetto + comignolo/antenna
    add(g, BX(b.w + 0.5, 0.3, b.d + 0.5, M.roofFlat), b.x, b.h + 0.15, b.z);
    for (const [pw, pd, px, pz] of [
      [b.w + 0.5, 0.22, 0, -b.d / 2 - 0.14], [b.w + 0.5, 0.22, 0, b.d / 2 + 0.14],
      [0.22, b.d + 0.5, -b.w / 2 - 0.14, 0], [0.22, b.d + 0.5, b.w / 2 + 0.14, 0]]) {
      add(g, BX(pw, 0.6, pd, wallM), b.x + px, b.h + 0.55, b.z + pz);
    }
    if (h % 2 === 0) add(g, BX(0.7, 1.1, 0.7, M.plinth), b.x + b.w / 4, b.h + 0.8, b.z);
    if (h % 3 === 0) {
      add(g, CY(0.04, 0.04, 2.0, M.metal, 6), b.x - b.w / 4, b.h + 1.2, b.z + 1);
      add(g, BX(1.1, 0.05, 0.05, M.metal), b.x - b.w / 4, b.h + 1.9, b.z + 1);
    }
    // grondaie + condizionatori
    for (const sx of [-1, 1]) {
      const pipe = CY(0.06, 0.06, b.h - 0.5, M.metalLight, 6);
      add(g, pipe, b.x + sx * (b.w / 2 + 0.1), (b.h - 0.5) / 2, b.z - b.d / 2 - 0.1);
    }
    if (b.id !== 's9_kiosk' && h % 2 === 1) {
      add(g, BX(0.5, 0.4, 0.7, M.metalLight), x1 + 0.28, 2.6, b.z - 1.5);
    }
    // porta: rientranza scura + cornice + gradino (+tenda/insegna per commerciali)
    const face = ENTR[b.id] ?? 'S';
    const dc = doorX[b.id + ':' + face] ?? b.x;
    const isShop = ['s9_pharma', 's9_resto', 's9_shoprow', 's9_super', 's9_kiosk', 's9_off1'].includes(b.id);
    const dw = isShop ? 1.8 : 1.3, dh = isShop ? 2.5 : 2.2;
    const doorG = new THREE.Group();
    const dark = new THREE.Mesh(sharedGeo('s9dark', () => new THREE.PlaneGeometry(1, 1)), mat(0x14181e));
    dark.scale.set(dw, dh, 1);
    doorG.add(dark); dark.position.set(0, 0, -0.02);
    add(doorG, BX(dw + 0.5, 0.14, 0.2, M.trim), 0, dh / 2 + 0.1, 0.02);
    add(doorG, BX(dw + 0.6, 0.14, 0.7, M.walk), 0, -dh / 2 + 0.07, 0.35);
    add(doorG, BX(0.3, 0.4, 0.12, M.metalLight), -dw / 2 - 0.35, -0.4, 0.08); // cassetta
    add(doorG, BX(0.12, 0.18, 0.06, M.brass), dw / 2 + 0.35, 0.1, 0.06);      // citofono
    const lampS = new THREE.Mesh(sharedGeo('s9bulb', () => new THREE.SphereGeometry(0.09, 8, 6)),
      (h % 3 === 0) ? mat(0x555550) : M.winGlass);
    doorG.add(lampS); lampS.position.set(dw / 2 + 0.35, dh / 2 - 0.3, 0.1);
    if (face === 'S') { doorG.position.set(dc, dh / 2, z0 - 0.06); doorG.rotation.y = Math.PI; }
    else if (face === 'N') { doorG.position.set(dc, dh / 2, z1 + 0.06); }
    else if (face === 'W') { doorG.position.set(x0 - 0.06, dh / 2, dc); doorG.rotation.y = -Math.PI / 2; }
    else { doorG.position.set(x1 + 0.06, dh / 2, dc); doorG.rotation.y = Math.PI / 2; }
    g.add(doorG);
    // insegna commerciale sopra l'ingresso
    const signT = SIGNS[b.id];
    if (signT) {
      const s = new THREE.Mesh(sharedGeo('s9sign43', () => new THREE.PlaneGeometry(4.2, 1.05)),
        new THREE.MeshLambertMaterial({ map: signT }));
      const sy = 3.4;
      if (face === 'S') { add(g, s, dc, sy, z0 - 0.1); s.rotation.y = Math.PI; }
      else if (face === 'N') { add(g, s, dc, sy, z1 + 0.1); }
      else if (face === 'W') { add(g, s, x0 - 0.1, sy, dc); s.rotation.y = -Math.PI / 2; }
      else { add(g, s, x1 + 0.1, sy, dc); s.rotation.y = Math.PI / 2; }
      if (b.id === 's9_resto' || b.id === 's9_pharma') {
        const awn = BX(4.4, 0.08, 1.2, (h % 2) ? M.awningR : M.awningS);
        awn.rotation.x = 0.25;
        if (face === 'W') { awn.rotation.y = Math.PI / 2; awn.rotation.x = 0; awn.rotation.z = 0.25; add(g, awn, x0 - 0.7, 2.9, dc); }
        else add(g, awn, dc, 2.9, z0 - 0.7);
      }
    } else if (SHOP_TXT[b.id]) {
      // scritta sbiadita dipinta (deposito/tecnico/market: vedi sotto per market)
      const t = signTex('#8f8a7e', '#4a4640', SHOP_TXT[b.id], '#4a4640');
      if (t) {
        const s = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 0.85),
          new THREE.MeshLambertMaterial({ map: t }));
        if (face === 'E') { add(g, s, x1 + 0.08, 3.1, dc); s.rotation.y = Math.PI / 2; }
        else add(g, s, dc, 3.1, z0 - 0.08);
      }
    }
    if (b.id === 's9_old2') {
      // vecchia insegna fantasma sul fianco
      const gh = new THREE.Mesh(sharedGeo('s9ghost', () => new THREE.PlaneGeometry(3, 1)), GHOST);
      add(g, gh, x1 + 0.06, 3.4, b.z); gh.rotation.y = Math.PI / 2;
    }
    // balconi residenziali sul fronte (con vaso: storytelling abitato)
    if (RES.has(b.id) && b.id !== 's9_kiosk' && b.h >= 6) {
      const bf = (face === 'S') ? z0 : (face === 'N' ? z1 : null);
      if (bf !== null) {
        const dir = (face === 'S') ? -1 : 1;
        for (const off of [-b.w / 4, b.w / 4]) {
          const bg = new THREE.Group();
          add(bg, BX(2.0, 0.12, 0.9, M.plinth), 0, 0, 0);
          for (let k = -2; k <= 2; k++) add(bg, BX(0.06, 0.7, 0.06, M.metal), k * 0.45, 0.4, 0.4);
          add(bg, BX(2.0, 0.07, 0.07, M.metal), 0, 0.78, 0.4);
          if ((h + off * 10) % 3 !== 0) {
            add(bg, CY(0.15, 0.11, 0.24, M.clay, 7), -0.6, 0.2, 0.1);
            const bush = new THREE.Mesh(sharedGeo('s9pot', () => new THREE.SphereGeometry(0.2, 7, 6)), M.leaf);
            bush.castShadow = true; add(bg, bush, -0.6, 0.42, 0.1);
          }
          if ((h + off * 10) % 4 === 0) {
            // panni stesi sul balcone
            const cl = new THREE.Mesh(sharedGeo('s9cloth', () => new THREE.PlaneGeometry(0.6, 0.7)),
              new THREE.MeshLambertMaterial({ color: [0xd8d2c2, 0x7a9ac9, 0xc97a7a][Math.abs(off | 0) % 3], side: THREE.DoubleSide }));
            add(bg, cl, 0.5, 0.35, 0.42);
          }
          bg.position.set(b.x + off, 3.0, bf + dir * 0.5);
          g.add(bg);
        }
      }
    }
    scene.add(g);
    // ---- finestre instanced su 4 facce ----
    const floors = Math.max(1, Math.floor((b.h - 1.4) / 3));
    const faces = [
      { ax: 'x', fixed: z0, ry: Math.PI, id: 'S' },
      { ax: 'x', fixed: z1, ry: 0, id: 'N' },
      { ax: 'z', fixed: x0, ry: -Math.PI / 2, id: 'W' },
      { ax: 'z', fixed: x1, ry: Math.PI / 2, id: 'E' },
    ];
    for (const f of faces) {
      const a0 = f.ax === 'x' ? x0 : z0, a1 = f.ax === 'x' ? x1 : z1;
      for (let fl = 0; fl < floors; fl++) {
        const y = 1.9 + fl * 3;
        if (y + 0.7 > b.h - 0.4) continue;
        const span = a1 - a0;
        const n = Math.max(1, Math.floor((span - 1.5) / 2.4));
        for (let k = 0; k < n; k++) {
          const c = a0 + 1.2 + (span - 2.4) * (n === 1 ? 0.5 : k / (n - 1));
          // buca la porta al piano terra sul fronte
          if (fl === 0 && f.id === face && Math.abs(c - dc) < 1.6) continue;
          const hh = hash(b.id + f.id + fl + ':' + k);
          const lit = hh % 4 === 0;
          const shut = RES.has(b.id) && hh % 3 !== 0;
          const rec = { y, ry: f.ry, ax: f.ax };
          if (f.ax === 'x') { rec.x = c; rec.z = f.fixed; }
          else { rec.z = c; rec.x = f.fixed; }
          winFrame.push(rec);
          if (lit) (hh % 8 === 0 ? winLitB : winLitA).push(rec);
          else winGlass.push(rec);
          winSill.push(rec);
          if (shut) winShut.push(rec);
          // una finestra murata nel borgo degradato (storytelling)
          if (worn && hh % 11 === 0) winBoard.push(rec);
        }
      }
    }
    // usura alla base per edifici vecchi
    if (worn) {
      const grime = grimeTexture('stain');
      if (grime) {
        const d = new THREE.Mesh(sharedGeo('s9grime', () => new THREE.PlaneGeometry(3, 1.6)),
          new THREE.MeshBasicMaterial({ map: grime, transparent: true, opacity: 0.7, depthWrite: false }));
        add(scene, d, b.x, 0.9, z0 - 0.06);
        d.rotation.y = Math.PI;
      }
    }
  }
  // ---- istanze finestre ----
  const dummy = new THREE.Object3D();
  const inst = (list, geo, material, off, ryFix = 0) => {
    if (!list.length) return;
    const im = new THREE.InstancedMesh(geo, material, list.length);
    list.forEach((r, i) => {
      dummy.position.set(r.x + (r.ax === 'x' ? 0 : (r.ry > 0 ? off : -off)), r.y, r.z + (r.ax === 'z' ? 0 : (r.ry === 0 ? off : -off)));
      dummy.rotation.set(0, r.ry + ryFix, 0);
      dummy.updateMatrix();
      im.setMatrixAt(i, dummy.matrix);
    });
    im.instanceMatrix.needsUpdate = true;
    scene.add(im);
  };
  const frameG = new THREE.BoxGeometry(1.3, 1.5, 0.1);
  const glassG = new THREE.PlaneGeometry(1.1, 1.3);
  const sillG = new THREE.BoxGeometry(1.5, 0.09, 0.24);
  const shutG = new THREE.BoxGeometry(0.45, 1.3, 0.05);
  inst(winFrame, frameG, winMats.frame, 0);
  inst(winGlass, glassG, winMats.glass, 0.06);
  inst(winLitA, glassG, winMats.litA, 0.06);
  inst(winLitB, glassG, winMats.litB, 0.06);
  inst(winSill, sillG, winMats.sill, 0.08);
  inst(winBoard, glassG, M.woodDark, 0.02);
  // persiane laterali (due per finestra)
  if (winShut.length) {
    const im = new THREE.InstancedMesh(shutG, winMats.shutG, winShut.length * 2);
    let i = 0;
    for (const r of winShut) {
      for (const s of [-1, 1]) {
        const px = r.x + (r.ax === 'x' ? s * 0.9 : (r.ry > 0 ? 0.08 : -0.08));
        const pz = r.z + (r.ax === 'z' ? s * 0.9 : (r.ry === 0 ? 0.08 : -0.08));
        dummy.position.set(px, r.y, pz);
        dummy.rotation.set(0, r.ry, 0);
        dummy.updateMatrix();
        im.setMatrixAt(i++, dummy.matrix);
      }
    }
    im.instanceMatrix.needsUpdate = true;
    scene.add(im);
  }

  // ================= 5. MARKET & OFFICINA (vani reali) =================
  const wallGroup = new THREE.Group();
  const WALL_H = { mkt_: 4, wrk_: 4.5, dep_: 2.2, old_: 1, arch_: 3.5, pk_: 1 };
  const wallMatOf = (tag) => {
    if (tag.startsWith('mkt_sh') || tag.startsWith('mkt_cnt')) return matWood(0, 3, 1);
    if (tag.startsWith('mkt_')) return matPlaster(2, 6, 4);
    if (tag.startsWith('wrk_')) return matBrick(1, 6, 4);
    if (tag.startsWith('dep_')) return M.metal;
    if (tag.startsWith('old_')) return matStone(1, 4, 1);
    if (tag.startsWith('arch_')) return matStone(0, 2, 3.5);
    return M.plinth;
  };
  const wallHOf = (tag) => {
    for (const [k, v] of Object.entries(WALL_H)) if (tag.startsWith(k)) return v;
    return 2.2;
  };
  for (const w of S9_COVER_WALLS) {
    if (!w.s9) continue;
    const tag = w.s9;
    const Hh = wallHOf(tag);
    add(wallGroup, BX(w.w, Hh, w.d, wallMatOf(tag)), w.x, Hh / 2, w.z);
  }
  // architrave dell'arco (visivo, il passaggio resta libero sotto)
  add(wallGroup, BX(5.5, 0.8, 1.2, matStone(0, 5, 1)), -57.5, 3.9, 44);
  scene.add(wallGroup);
  // tetti market/officina
  add(scene, BX(14.6, 0.35, 10.6, M.roofFlat), 63, 4.2, 11);
  add(scene, BX(14.6, 0.7, 0.25, matPlaster(2, 6, 1)), 63, 4.6, 6.1);
  add(scene, BX(14.6, 0.35, 10.6, M.roofFlat), -56, 4.7, -43);
  add(scene, BX(0.25, 0.7, 10.6, matBrick(1, 6, 1)), -48.9, 5.1, -43);
  // pavimenti interni + merci + bancone + insegna MARKET
  {
    const fl = PL(13.6, 9.6, M.tileFloor);
    add(scene, fl, 63, 0.045, 11);
    const fl2 = PL(13.6, 9.6, M.concFloor);
    add(scene, fl2, -56, 0.045, -43);
    const goods = [M.posterR, M.posterB, M.posterY, M.paper, M.leaf];
    for (const sz of [9.05, 13.95]) {
      for (let k = 0; k < 6; k++) {
        const bx = 60.5 + k * 1.0;
        add(scene, BX(0.5, 0.35, 0.3, goods[(k + (sz > 10 ? 2 : 0)) % goods.length]), bx, 2.35, sz);
      }
    }
    add(scene, BX(1.8, 0.95, 0.7, M.woodMid), 68.2, 0.5, 11); // cassa
    // cassette di frutta fuori dall'arco (consegna appena arrivata)
    for (const [ox, c] of [[-1.2, 0xc86a2a], [-0.2, 0x7aa83a], [0.8, 0xc8a03a]]) {
      add(scene, BX(0.8, 0.35, 0.6, M.woodMid), 54.5 + ox, 0.35, 8.2);
      for (let k = 0; k < 3; k++) {
        const f = new THREE.Mesh(sharedGeo('s9fruit', () => new THREE.SphereGeometry(0.11, 6, 5)), mat(c));
        add(scene, f, 54.5 + ox - 0.2 + k * 0.2, 0.6, 8.2);
      }
    }
    const mt = signTex('#5a1f1a', '#f0e6cc', 'MARKET', '#e6ddc8');
    if (mt) {
      const s = new THREE.Mesh(sharedGeo('s9signmkt', () => new THREE.PlaneGeometry(4.2, 1.05)),
        new THREE.MeshLambertMaterial({ map: mt }));
      add(scene, s, 63, 3.3, 5.85); s.rotation.y = Math.PI;
    }
    // officina: gomme + banco + attrezzi appesi
    for (const [tx, tz] of [[-61, -40.5], [-60.2, -40.5]]) {
      for (let k = 0; k < 3; k++) {
        const t = new THREE.Mesh(sharedGeo('s9tire', () => new THREE.TorusGeometry(0.32, 0.13, 7, 12)), M.tire);
        t.castShadow = true;
        add(scene, t, tx, 0.32 + k * 0.5, tz);
      }
    }
    add(scene, BX(2.2, 0.9, 0.8, M.metal), -51, 0.45, -39.5);
    // luci interne (2 sole PointLight nuove in tutta S9)
    for (const [x, z, y] of [[63, 11, 3.4], [-56, -43, 3.8]]) {
      const pl = new THREE.PointLight(0xffe2b0, 10, 13, 1.7);
      pl.position.set(x, y, z);
      scene.add(pl);
      const bulb = new THREE.Mesh(sharedGeo('s9bulb', () => new THREE.SphereGeometry(0.09, 8, 6)), matLampOn());
      add(scene, bulb, x, y + 0.3, z);
    }
  }

  // ================= 6. PROPS =================
  const propG = new THREE.Group();
  scene.add(propG);
  const carAt = (x, z, ry, color, van = false) => {
    const g = new THREE.Group();
    const paint = matCarPaint(color);
    const L = van ? 4.6 : 4.0, Wd = van ? 1.9 : 1.7;
    add(g, BX(Wd, van ? 1.1 : 0.55, L, paint), 0, van ? 0.85 : 0.65, 0);
    if (van) add(g, BX(Wd - 0.2, 0.5, 1.4, M.winGlass), 0, 1.15, L / 2 - 0.9);
    else add(g, BX(Wd - 0.2, 0.5, 2.0, M.winGlass), 0, 1.15, -0.2);
    for (const [dx, dz] of [[-Wd / 2, L / 2 - 0.9], [Wd / 2, L / 2 - 0.9], [-Wd / 2, -L / 2 + 0.9], [Wd / 2, -L / 2 + 0.9]]) {
      const w = CY(0.32, 0.32, 0.22, M.tire, 10);
      w.rotation.z = Math.PI / 2;
      add(g, w, dx, 0.32, dz);
    }
    g.rotation.y = ry || 0;
    g.position.set(x, 0.02, z);
    propG.add(g);
  };
  const bikeAt = (x, z, ry) => {
    const g = new THREE.Group();
    for (const dz of [-0.55, 0.55]) {
      const w = new THREE.Mesh(sharedGeo('s9bike', () => new THREE.TorusGeometry(0.32, 0.04, 6, 14)), M.tire);
      w.castShadow = true;
      add(g, w, 0, 0.32, dz);
    }
    add(g, BX(0.05, 0.05, 1.0, mat(0x2a5a9a)), 0, 0.55, 0);
    add(g, BX(0.05, 0.5, 0.05, mat(0x2a5a9a)), 0, 0.7, 0.45);
    // una a terra (abbandonata), l'altra in piedi
    if (Math.abs(x + 57.5) < 1) { g.rotation.z = Math.PI / 2 - 0.12; g.position.y = 0.32; }
    add(propG, g, x, g.position.y || 0, z, ry);
  };
  for (const pr of S9_PROPS) {
    const g = new THREE.Group();
    if (pr.kind === 'lamp' || pr.kind === 'tree' || pr.kind === 'bench' ||
        pr.kind === 'crates' || pr.kind === 'yardstack') continue; // sotto (instanced o dedicati)
    if (pr.kind === 'car') { carAt(pr.x, pr.z, pr.ry, pr.color); continue; }
    if (pr.kind === 'van') { carAt(pr.x, pr.z, pr.ry, pr.color, true); continue; }
    if (pr.kind === 'bike') { bikeAt(pr.x, pr.z, 0.7); continue; }
    if (pr.kind === 'planter') {
      add(g, BX(0.7, 0.45, 0.45, M.woodMid), 0, 0.22, 0);
      const bb = new THREE.Mesh(sharedGeo('s9pot', () => new THREE.SphereGeometry(0.2, 7, 6)), M.leaf);
      bb.castShadow = true; add(g, bb, 0, 0.6, 0);
    } else if (pr.kind === 'table') {
      add(g, CY(0.55, 0.55, 0.07, M.woodMid, 10), 0, 0.72, 0);
      add(g, CY(0.06, 0.06, 0.72, M.metal, 6), 0, 0.36, 0);
    } else if (pr.kind === 'umbrella') {
      add(g, CY(0.05, 0.05, 2.3, M.woodDark, 6), 0, 1.15, 0);
      const top = new THREE.Mesh(sharedGeo('s9umb', () => new THREE.ConeGeometry(1.5, 0.6, 8)), M.awningR);
      top.castShadow = true; add(g, top, 0, 2.5, 0);
    } else if (pr.kind === 'sack') {
      const s = new THREE.Mesh(sharedGeo('s9sack', () => new THREE.SphereGeometry(0.4, 7, 6)), M.sack);
      s.scale.y = 0.8; s.castShadow = true; add(g, s, 0, 0.3, 0);
    } else if (pr.kind === 'barrel') {
      add(g, CY(0.35, 0.35, 0.9, M.rust, 10), 0, 0.45, 0);
    } else if (pr.kind === 'pallet') {
      add(g, BX(1.2, 0.14, 1.0, M.woodMid), 0, 0.2, 0);
      add(g, BX(1.0, 0.5, 0.8, mat(0xa89c88)), 0, 0.5, 0); // sacchi cemento
    } else if (pr.kind === 'line') {
      add(g, CY(0.05, 0.05, 2.3, M.woodDark, 6), -3.2, 1.15, 0);
      add(g, CY(0.05, 0.05, 2.3, M.woodDark, 6), 3.2, 1.15, 0);
      add(g, BX(6.4, 0.02, 0.02, M.metal), 0, 2.25, 0);
      const cols = [M.paper, M.posterB, M.awningR];
      for (let i = 0; i < 3; i++) {
        const cl = new THREE.Mesh(sharedGeo('s9cloth', () => new THREE.PlaneGeometry(0.6, 0.7)),
          new THREE.MeshLambertMaterial({ color: cols[i].color, side: THREE.DoubleSide }));
        add(g, cl, -1.8 + i * 1.8, 1.85, 0);
      }
    } else if (pr.kind === 'sign') {
      add(g, CY(0.05, 0.05, 2.4, M.metalLight, 6), 0, 1.2, 0);
      add(g, BX(0.9, 0.6, 0.06, M.posterY), 0, 2.2, 0);
    } else if (pr.kind === 'bollard') {
      // instanced sotto
      continue;
    } else if (pr.kind === 'poster') {
      const east = Math.abs(pr.x + 47) < 1; // faccia est di old1, senno' sud di old2
      const pp = new THREE.Mesh(sharedGeo('s9poster', () => new THREE.PlaneGeometry(0.6, 0.8)),
        [M.posterR, M.posterB, M.posterY][Math.abs(Math.round(pr.x)) % 3]);
      if (east) { add(g, pp, 0.07, 1.3, 0); pp.rotation.y = Math.PI / 2; }
      else { add(g, pp, 0, 1.3, -0.07); pp.rotation.y = Math.PI; }
    } else if (pr.kind === 'bush') {
      continue; // instanced sotto
    }
    g.position.set(pr.x, 0, pr.z);
    propG.add(g);
  }
  // lampioni/tronchi/panchine/casse S9 (stesso linguaggio della zona vecchia)
  for (const pr of S9_PROPS) {
    if (pr.kind !== 'lamp' && pr.kind !== 'bench' && pr.kind !== 'crates' && pr.kind !== 'yardstack') continue;
    const g = new THREE.Group();
    if (pr.kind === 'lamp') {
      add(g, CY(0.09, 0.12, 4.6, M.metal, 8), 0, 2.3, 0);
      add(g, BX(0.08, 0.08, 1.1, M.metal), 0, 4.66, 0.5);
      add(g, CY(0.3, 0.42, 0.25, M.metal, 8), 0, 4.55, 1.0);
      const bulb = new THREE.Mesh(sharedGeo('s9bulb', () => new THREE.SphereGeometry(0.09, 8, 6)), matLampOn());
      add(g, bulb, 0, 4.42, 1.0);
      add(g, BX(0.5, 0.5, 0.12, M.plinth), 0, 0.25, 0);
    } else if (pr.kind === 'bench') {
      for (const dz of [-0.28, 0.28]) add(g, BX(2.2, 0.07, 0.14, M.woodMid), 0, 0.5, dz);
      add(g, BX(2.2, 0.5, 0.07, M.woodMid), 0, 0.85, -0.36);
      for (const dx of [-0.9, 0.9]) add(g, BX(0.08, 0.5, 0.7, M.metal), dx, 0.25, 0);
    } else if (pr.kind === 'crates') {
      add(g, BX(1.2, 1.2, 1.2, M.woodMid), 0, 0.6, 0);
      const c2 = BX(0.9, 0.9, 0.9, M.woodDark);
      c2.rotation.y = 0.4;
      add(g, c2, 0.8, 1.65, 0.2);
    } else if (pr.kind === 'yardstack') {
      add(g, BX(2.2, 2.4, 2.2, M.woodMid), 0, 1.2, 0);
      add(g, BX(1.4, 1, 1.4, M.sack), 0, 2.9, 0);
    }
    g.position.set(pr.x, 0, pr.z);
    propG.add(g);
  }

  // ================= 7. VEGETAZIONE INSTANCED =================
  {
    const spots = [];
    for (const t of WORLD.props) if (t.kind === 's9tree') spots.push(t);
    for (const p of S9_PROPS) if (p.kind === 'tree') spots.push({ x: p.x, z: p.z, s: 1, v: 0 });
    for (const t of s9Vegetation()) spots.push(t);
    const trunkG = new THREE.CylinderGeometry(0.16, 0.24, 1.9, 7);
    const canG = new THREE.SphereGeometry(1.4, 9, 7);
    const trunkIM = new THREE.InstancedMesh(trunkG, M.trunk, spots.length);
    const canIM = new THREE.InstancedMesh(canG, new THREE.MeshStandardMaterial({ roughness: 0.95 }), spots.length * 2);
    const col = new THREE.Color();
    const leafCols = [0x4a7a3f, 0x3a6a34, 0x557f46];
    spots.forEach((t, i) => {
      const s = t.s ?? 1;
      dummy.position.set(t.x, 0.95 * s, t.z);
      dummy.scale.set(s, s, s);
      dummy.rotation.set(0, 0, 0);
      dummy.updateMatrix();
      trunkIM.setMatrixAt(i, dummy.matrix);
      dummy.position.set(t.x, (2.6 + (i % 3) * 0.2) * s, t.z);
      dummy.scale.set(s, s * 0.9, s);
      dummy.updateMatrix();
      canIM.setMatrixAt(i * 2, dummy.matrix);
      canIM.setColorAt(i * 2, col.setHex(leafCols[(t.v ?? i) % 3]));
      dummy.position.set(t.x + 0.7 * s, 2.0 * s, t.z + 0.4 * s);
      dummy.scale.set(s * 0.6, s * 0.55, s * 0.6);
      dummy.updateMatrix();
      canIM.setMatrixAt(i * 2 + 1, dummy.matrix);
      canIM.setColorAt(i * 2 + 1, col.setHex(leafCols[((t.v ?? i) + 1) % 3]));
    });
    trunkIM.instanceMatrix.needsUpdate = true;
    canIM.instanceMatrix.needsUpdate = true;
    if (canIM.instanceColor) canIM.instanceColor.needsUpdate = true;
    trunkIM.castShadow = true; canIM.castShadow = true;
    scene.add(trunkIM); scene.add(canIM);
    // cespugli + dissuasori instanced
    const bushes = S9_PROPS.filter(p => p.kind === 'bush');
    if (bushes.length) {
      const bIM = new THREE.InstancedMesh(new THREE.SphereGeometry(0.5, 8, 6), M.hedge, bushes.length);
      bushes.forEach((bb, i) => {
        dummy.position.set(bb.x, 0.35, bb.z);
        dummy.scale.set(1.4, 0.8, 1);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        bIM.setMatrixAt(i, dummy.matrix);
      });
      bIM.instanceMatrix.needsUpdate = true;
      bIM.castShadow = true;
      scene.add(bIM);
    }
    const bols = S9_PROPS.filter(p => p.kind === 'bollard');
    if (bols.length) {
      const bIM = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.12, 0.14, 0.8, 8), M.metalLight, bols.length);
      bols.forEach((bb, i) => {
        dummy.position.set(bb.x, 0.4, bb.z);
        dummy.scale.set(1, 1, 1);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        bIM.setMatrixAt(i, dummy.matrix);
      });
      bIM.instanceMatrix.needsUpdate = true;
      bIM.castShadow = true;
      scene.add(bIM);
    }
  }
}
