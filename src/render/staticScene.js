import * as THREE from 'three';
import { WORLD } from '../world/mapData.js';
import {
  sharedLambert, sharedBasic,
  asphaltTex, concreteTex, plasterTex, grassTex, pavingTex, roofTex, texLambert
} from './assets.js';

// Scena statica del quartiere (solo rendering; la fisica vive in world.js).
// Vincoli: le impronte degli edifici e le posizioni dei props restano quelle di
// mapData.js (i collider non cambiano). Tutto ciò che è nuovo è puramente
// visivo e resta fuori dai nodi di navigazione (posizionato a mano).
export function buildStaticScene(scene) {
  const mat = sharedLambert;
  const T = { as: asphaltTex(), co: concreteTex(), pl: plasterTex(), gr: grassTex(), pa: pavingTex(), ro: roofTex() };

  const add = (parent, mesh, x = 0, y = 0, z = 0, ry = 0) => {
    mesh.position.set(x, y, z);
    if (ry) mesh.rotation.y = ry;
    parent.add(mesh);
    return mesh;
  };
  const BX = (w, h, d, m) => {
    const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
    o.castShadow = true; o.receiveShadow = true;
    return o;
  };
  const PL = (w, d, m) => {
    const o = new THREE.Mesh(new THREE.PlaneGeometry(w, d), m);
    o.rotation.x = -Math.PI / 2; o.receiveShadow = true;
    return o;
  };
  const CY = (rt, rb, h, m, seg = 8) => {
    const o = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m);
    o.castShadow = true; o.receiveShadow = true;
    return o;
  };

  // ---- Materiali condivisi della scena ----
  const M = {
    grass: texLambert('grass', 0x9aa084, T.gr),
    asphalt: texLambert('asphalt', 0xbfc0c4, T.as),
    sidewalk: texLambert('sidewalk', 0xcfccc2, T.co),
    curb: mat(0x8d8a80),
    lineWhite: sharedBasic(0xe8e6da),
    lineYellow: sharedBasic(0xd8a83a),
    piazza: texLambert('piazza', 0xcfc8b4, T.pa),
    piazzaDark: texLambert('piazzaD', 0xa89f88, T.pa),
    alley: texLambert('alley', 0x8f8d86, T.as),
    plasterBar: texLambert('plBar', 0xd9b06a, T.pl),
    plasterB2: texLambert('plB2', 0xb9c2cc, T.pl),
    plasterB3: texLambert('plB3', 0xcfa3a8, T.pl),
    plasterB4: texLambert('plB4', 0xc4bd9a, T.pl),
    plasterB5: texLambert('plB5', 0xbfae86, T.pl),
    plinth: texLambert('plinth', 0x8d8578, T.co),
    roof: texLambert('roof', 0xcf9a78, T.ro),
    roofFlat: mat(0x5a5148),
    trimWhite: mat(0xe6e0d2),
    woodDark: mat(0x4a3520),
    woodMid: mat(0x6b4a2c),
    doorGreen: mat(0x2f5a44),
    doorBlue: mat(0x2e4a68),
    doorBrown: mat(0x5a3d24),
    shutterGreen: mat(0x3f6b4f),
    shutterBrown: mat(0x6e5233),
    winGlass: mat(0x202c38),
    winLit: sharedBasic(0xd8b76a),
    metal: mat(0x3a3f46),
    metalLight: mat(0x7a8087),
    binGreen: mat(0x2e5a34),
    dumpster: mat(0x24507a),
    barrelRust: mat(0x7a4a2a),
    tarpBlue: mat(0x2a4a7a),
    hedge: mat(0x38602e),
    trunk: mat(0x5a4128),
    leaf: mat(0x3f7038),
    leafDark: mat(0x2e5a2c),
    carRed: mat(0x8a2a22),
    carBlue: mat(0x2a4a7a),
    carGray: mat(0x6a6e74),
    tire: mat(0x1c1c1e),
    awningRed: mat(0x9a3a2e),
    awningStripe: mat(0xe6ddc8),
    signBar: mat(0x1e3a2e),
    signGold: sharedBasic(0xe8c86a),
    paper: mat(0xd8d2c2),
    posterR: mat(0xa83a32),
    posterB: mat(0x2a5a9a),
    posterY: mat(0xc8a03a),
    clay: mat(0xa8603a),
    sack: mat(0x9a8a6a),
  };

  // ================= 0. SUOLO =================
  const ground = PL(100, 100, texLambert('grassG', 0xb8c49c, T.gr, 24, 24));
  scene.add(ground);
  // macchie di terra battuta ai margini (variazione di superficie)
  for (const [x, z, w, d] of [[-38, -28, 22, 14], [30, -28, 26, 12], [-38, 32, 12, 10]]) {
    const pl = PL(w, d, texLambert('dirt', 0xac9c78, T.co, 6, 4));
    add(scene, pl, x, 0.012, z);
  }

  // ================= 1. STRADA =================
  const r = WORLD.road;
  const roadW = r.maxX - r.minX, roadD = r.maxZ - r.minZ;
  const road = PL(roadW, roadD, texLambert('asphaltRoad', 0xbfc0c4, T.as, 30, 3));
  add(scene, road, 0, 0.02, 0);
  // linea centrale tratteggiata (salta gli incroci del vicolo e gli attraversamenti)
  for (let x = -49; x <= 49; x += 2.4) {
    if (Math.abs(x - 18) < 3) continue; // incrocio vicolo sud
    if (Math.abs(x) < 2.2 || Math.abs(x + 20) < 2.2) continue; // strisce pedonali
    add(scene, BX(1.2, 0.012, 0.14, M.lineWhite), x, 0.032, 0);
  }
  // righe di margine continue
  for (const z of [-3.4, 3.4]) add(scene, BX(roadW, 0.012, 0.12, M.lineWhite), 0, 0.032, z);
  // marciapiedi rialzati + cigli
  for (const s of [-1, 1]) {
    const sw = BX(100, 0.14, 2.2, M.sidewalk);
    add(scene, sw, 0, 0.07, s * 5.1);
    add(scene, BX(100, 0.16, 0.18, M.curb), 0, 0.08, s * 3.95);
  }
  // attraversamenti pedonali (strisce lungo z) verso bar e piazzale sud
  for (const cx of [-20, 0]) {
    for (let i = -3; i <= 3; i++) {
      add(scene, BX(1.6, 0.014, 0.55, M.lineWhite), cx, 0.034, i * 1.0);
    }
  }
  // parcheggi a pettine in carreggiata (corsia di sosta, lato sud) + bocche di lupo
  for (let x = 5; x <= 19; x += 3.2) {
    add(scene, BX(0.12, 0.012, 2.0, M.lineYellow), x, 0.033, -3.0);
  }
  for (const [x, z] of [[-12, 1.5], [24, -1.5], [-34, 0.5]]) {
    const mh = new THREE.Mesh(new THREE.CircleGeometry(0.45, 12), mat(0x2a2c30));
    mh.rotation.x = -Math.PI / 2;
    add(scene, mh, x, 0.035, z);
  }

  // ================= 2. PIAZZA =================
  const p = WORLD.piazza;
  const pia = PL(p.w, p.d, texLambert('piazzaR', 0xcfc8b4, T.pa, 9, 8));
  add(scene, pia, p.cx, 0.03, p.cz);
  // bordo in pietra scura + fascia decorativa interna
  add(scene, BX(p.w + 0.4, 0.1, 0.5, M.piazzaDark), p.cx, 0.05, p.cz - p.d / 2);
  add(scene, BX(p.w + 0.4, 0.1, 0.5, M.piazzaDark), p.cx, 0.05, p.cz + p.d / 2);
  add(scene, BX(0.5, 0.1, p.d + 0.4, M.piazzaDark), p.cx - p.w / 2, 0.05, p.cz);
  add(scene, BX(0.5, 0.1, p.d + 0.4, M.piazzaDark), p.cx + p.w / 2, 0.05, p.cz);
  // aiuola centrale con albero (fuori dal nodo pia_c di 5m: non blocca i percorsi)
  {
    const g = new THREE.Group();
    const ring = CY(1.6, 1.7, 0.55, M.plinth, 12); add(g, ring, 0, 0.27, 0);
    const soil = CY(1.4, 1.4, 0.1, M.woodDark, 12); add(g, soil, 0, 0.55, 0);
    const tr = CY(0.16, 0.22, 1.8, M.trunk, 7); add(g, tr, 0, 1.4, 0);
    const f1 = new THREE.Mesh(new THREE.SphereGeometry(1.3, 9, 7), M.leaf);
    f1.castShadow = true; add(g, f1, 0, 2.9, 0);
    const f2 = new THREE.Mesh(new THREE.SphereGeometry(0.85, 8, 6), M.leafDark);
    f2.castShadow = true; add(g, f2, 0.7, 2.3, 0.4);
    add(scene, g, 37, 0, 25.5);
  }

  // vicolo tra B2 e B3: asfalto scuro + pozzanghera + cavi sopra
  {
    const a = PL(4, 16, M.alley);
    add(scene, a, 18, 0.025, 5);
    const pud = new THREE.Mesh(new THREE.CircleGeometry(0.9, 12), mat(0x2c3844));
    pud.rotation.x = -Math.PI / 2;
    add(scene, pud, 17.2, 0.04, 6.5);
  }

  // ================= 3. EDIFICI =================
  const plasterOf = { bar: M.plasterBar, b2: M.plasterB2, b3: M.plasterB3, b4: M.plasterB4, b5: M.plasterB5 };
  const doorMatOf = { bar: M.woodMid, b2: M.doorGreen, b3: M.doorBlue, b4: M.doorGreen, b5: M.doorBrown };

  // insegne dipinte su canvas (due sole texture di testo per il quartiere)
  let barSignTex = null;
  if (typeof document !== 'undefined') {
    const c = document.createElement('canvas'); c.width = 256; c.height = 64;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#1e3a2e'; ctx.fillRect(0, 0, 256, 64);
    ctx.strokeStyle = '#c8a03a'; ctx.lineWidth = 4; ctx.strokeRect(4, 4, 248, 56);
    ctx.fillStyle = '#e8c86a'; ctx.font = 'bold 30px serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('BAR CENTRALE', 128, 34);
    barSignTex = new THREE.CanvasTexture(c);
    barSignTex.colorSpace = THREE.SRGBColorSpace;
  }
  let shopSignTex = null;
  if (typeof document !== 'undefined') {
    const c = document.createElement('canvas'); c.width = 256; c.height = 64;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#5a1f1a'; ctx.fillRect(0, 0, 256, 64);
    ctx.strokeStyle = '#e6ddc8'; ctx.lineWidth = 3; ctx.strokeRect(4, 4, 248, 56);
    ctx.fillStyle = '#f0e6cc'; ctx.font = 'bold 28px serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('ALIMENTARI', 128, 34);
    shopSignTex = new THREE.CanvasTexture(c);
    shopSignTex.colorSpace = THREE.SRGBColorSpace;
  }

  // finestra: rientranza scura + telaio chiaro + traversa + davanzale (+ persiane opzionali)
  function windowUnit(w, h, shutters, lit) {
    const g = new THREE.Group();
    add(g, BX(w, h, 0.1, M.winGlass), 0, 0, 0);
    if (lit) {
      const l = new THREE.Mesh(new THREE.PlaneGeometry(w * 0.8, h * 0.8), M.winLit);
      add(g, l, 0, 0, 0.06);
    }
    // telaio: montanti chiari
    add(g, BX(w + 0.16, 0.1, 0.08, M.trimWhite), 0, h / 2, 0.02);
    add(g, BX(w + 0.16, 0.1, 0.08, M.trimWhite), 0, -h / 2, 0.02);
    add(g, BX(0.1, h, 0.08, M.trimWhite), -w / 2, 0, 0.02);
    add(g, BX(0.1, h, 0.08, M.trimWhite), w / 2, 0, 0.02);
    add(g, BX(0.07, h, 0.06, M.trimWhite), 0, 0, 0.03);
    add(g, BX(w, 0.07, 0.06, M.trimWhite), 0, 0, 0.03);
    // davanzale
    add(g, BX(w + 0.4, 0.09, 0.22, M.plinth), 0, -h / 2 - 0.12, 0.06);
    if (shutters) {
      const sm = (w > 1.4) ? M.shutterGreen : M.shutterBrown;
      add(g, BX(0.45, h, 0.05, sm), -w / 2 - 0.28, 0, 0.0);
      add(g, BX(0.45, h, 0.05, sm), w / 2 + 0.28, 0, 0.0);
    }
    return g;
  }
  // porta: cornice + battente + gradino + lampada murale + cassetta/numero (opz.)
  function doorUnit(w, h, dm, opts = {}) {
    const g = new THREE.Group();
    add(g, BX(w + 0.3, h + 0.15, 0.12, M.plinth), 0, 0.075, -0.02);
    add(g, BX(w, h, 0.14, dm), 0, 0, 0.02);
    // sopraluce / cornice
    add(g, BX(w + 0.5, 0.14, 0.2, M.trimWhite), 0, h / 2 + 0.1, 0.04);
    // gradino (appoggia a terra davanti alla porta)
    add(g, BX(w + 0.6, 0.14, 0.7, M.sidewalk), 0, -h / 2 + 0.07, 0.35);
    // lampada murale
    const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), M.winLit);
    add(g, lamp, w / 2 + 0.35, h / 2 - 0.3, 0.12);
    add(g, BX(0.08, 0.08, 0.08, M.metal), w / 2 + 0.35, h / 2 - 0.18, 0.06);
    if (opts.mailbox) add(g, BX(0.3, 0.4, 0.12, M.metalLight), -w / 2 - 0.35, 0.1, 0.1);
    if (opts.number) {
      const plq = new THREE.Mesh(new THREE.PlaneGeometry(0.28, 0.2), M.paper);
      add(g, plq, w / 2 + 0.35, 0.35, 0.09);
    }
    return g;
  }

  const wallCols = { bar: 0xb0894f, b2: 0x7f96b0, b3: 0x9c7f8f, b4: 0x8ba07a, b5: 0xa09a7f };
  for (const b of WORLD.buildings) {
    const g = new THREE.Group();
    const wallM = plasterOf[b.id] ?? mat(wallCols[b.id] ?? 0x888888);
    const roofM = M.roof;
    if (!b.interior) {
      const H = b.h;
      // corpo + zoccolo piano terra + marcapiano + cornicione
      add(g, BX(b.w, H, b.d, wallM), b.x, H / 2, b.z);
      add(g, BX(b.w + 0.14, 1.1, b.d + 0.14, M.plinth), b.x, 0.55, b.z);
      add(g, BX(b.w + 0.2, 0.22, b.d + 0.2, M.trimWhite), b.x, 3.1, b.z);
      add(g, BX(b.w + 0.5, 0.3, b.d + 0.5, M.trimWhite), b.x, H - 0.15, b.z);
      // tetto: soletta + parapetto + comignolo
      add(g, BX(b.w + 0.6, 0.35, b.d + 0.6, M.roofFlat), b.x, H + 0.17, b.z);
      for (const [pw, pd, px, pz] of [
        [b.w + 0.6, 0.25, 0, -b.d / 2 - 0.2], [b.w + 0.6, 0.25, 0, b.d / 2 + 0.2],
        [0.25, b.d + 0.6, -b.w / 2 - 0.2, 0], [0.25, b.d + 0.6, b.w / 2 + 0.2, 0]]) {
        add(g, BX(pw, 0.7, pd, wallM), b.x + px, H + 0.6, b.z + pz);
      }
      add(g, BX(0.7, 1.2, 0.7, M.plinth), b.x + b.w / 4, H + 0.9, b.z);
      // grondaie discendenti agli angoli
      for (const sx of [-1, 1]) {
        const pipe = CY(0.06, 0.06, H - 0.5, M.metalLight, 6);
        add(g, pipe, b.x + sx * (b.w / 2 + 0.12), (H - 0.5) / 2, b.z - b.d / 2 - 0.12);
      }
      // finestre sui due fronti lunghi (ordini proporzionati all'altezza)
      const rows = H > 7 ? [1.9, 4.6, 7.0] : (H > 5.5 ? [1.9, 4.4] : [1.8, 3.9]);
      for (const zs of [b.z - b.d / 2, b.z + b.d / 2]) {
        const face = zs > b.z ? 1 : -1;
        const n = Math.max(2, Math.floor((b.w - 2) / 2.2));
        rows.forEach((wy, ri) => {
          for (let i = 0; i < n; i++) {
            const wx = b.x - ((n - 1) * 2.2) / 2 + i * 2.2;
            const lit = ((i * 7 + ri * 3 + Math.round(b.x)) % 5) === 0; // poche luci accese, deterministico
            const wu = windowUnit(1.1, 1.3, b.id === 'b4' || b.id === 'b5', lit);
            wu.position.set(wx, wy, zs + face * 0.03);
            if (face < 0) wu.rotation.y = Math.PI;
            g.add(wu);
          }
        });
        // porta principale sul fronte strada (sud per b2/b3, nord per b4/b5)
        const south = b.z > 0 ? -1 : 1;
        if ((south < 0 && zs < b.z) || (south > 0 && zs > b.z)) {
          const d = doorUnit(1.2, 2.2, doorMatOf[b.id], { mailbox: b.id !== 'b3', number: true });
          d.position.set(b.x, 1.1, zs + south * 0.05);
          if (south < 0) d.rotation.y = Math.PI;
          g.add(d);
        }
      }
      // balconi sul fronte strada per b2 (palazzo) e b5
      if (b.id === 'b2' || b.id === 'b5') {
        const fz = b.z > 0 ? b.z - b.d / 2 : b.z + b.d / 2;
        const face = b.z > 0 ? -1 : 1;
        for (const off of [-2.2, 2.2]) {
          const bg = new THREE.Group();
          add(bg, BX(2.0, 0.12, 0.9, M.plinth), 0, 0, 0);
          // ringhiera: 5 colonnine + corrimano
          for (let k = -2; k <= 2; k++) add(bg, BX(0.06, 0.7, 0.06, M.metal), k * 0.45, 0.4, 0.4);
          add(bg, BX(2.0, 0.07, 0.07, M.metal), 0, 0.78, 0.4);
          // vaso con pianta
          add(bg, CY(0.16, 0.12, 0.25, M.clay, 8), -0.7, 0.2, 0.1);
          const bush = new THREE.Mesh(new THREE.SphereGeometry(0.22, 7, 6), M.leaf);
          bush.castShadow = true; add(bg, bush, -0.7, 0.45, 0.1);
          bg.position.set(b.x + off, 3.0, fz + face * 0.5);
          g.add(bg);
        }
      }
      // condizionatori sul fianco
      if (b.id !== 'b3') {
        const sx = b.x + b.w / 2;
        for (const [wy, wz] of [[2.6, -2], [2.6, 2]]) {
          const ac = BX(0.5, 0.4, 0.7, M.metalLight);
          add(g, ac, sx + 0.28, wy, b.z + wz);
          add(g, BX(0.02, 0.25, 0.5, M.metal), sx + 0.54, wy, b.z + wz);
        }
      }
      // insegna ALIMENTARI su b3 (fronte sud, verso il vicolo/piazza)
      if (b.id === 'b3' && shopSignTex) {
        const s = new THREE.Mesh(new THREE.PlaneGeometry(4.2, 1.05),
          new THREE.MeshLambertMaterial({ map: shopSignTex }));
        add(g, s, b.x, 3.6, b.z - b.d / 2 - 0.08);
        s.rotation.y = Math.PI;
        // tenda da sole + cassette di frutta fuori
        const awn = BX(4.4, 0.08, 1.2, M.awningStripe);
        awn.rotation.x = 0.25;
        add(g, awn, b.x, 3.0, b.z - b.d / 2 - 0.6);
        for (const [ox, c] of [[-1.4, 0xc86a2a], [-0.4, 0x7aa83a], [0.6, 0xc8a03a]]) {
          add(g, BX(0.8, 0.35, 0.6, M.woodMid), b.x + ox, 0.35, b.z - b.d / 2 - 1.0);
          for (let k = 0; k < 3; k++) {
            const f = new THREE.Mesh(new THREE.SphereGeometry(0.11, 6, 5), mat(c));
            add(g, f, b.x + ox - 0.2 + k * 0.2, 0.6, b.z - b.d / 2 - 1.0);
          }
        }
      }
      // antenne TV sui tetti alti
      if (b.id === 'b2' || b.id === 'b4') {
        const ax = b.x - b.w / 4, az = b.z + 1;
        add(g, CY(0.04, 0.04, 2.2, M.metal, 6), ax, H + 1.4, az);
        add(g, BX(1.2, 0.05, 0.05, M.metal), ax, H + 2.2, az);
        add(g, BX(0.8, 0.05, 0.05, M.metal), ax, H + 1.9, az);
      }
    } else {
      // ---- BAR (interno esplorabile): murature basse con porta sud ----
      const t = 0.4, H = 3.2, hx = b.w / 2, hz = b.d / 2, dw = b.door.width / 2, dx = b.door.at;
      const zS = b.z - hz, zN = b.z + hz;
      const segs = [
        [xMid(b.x - hx, dx - dw), zS, (dx - dw) - (b.x - hx), t],
        [xMid(dx + dw, b.x + hx), zS, (b.x + hx) - (dx + dw), t],
        [b.x, zN, b.w, t],
      ];
      for (const [sx, sz, w, d] of segs) {
        const m = BX(w, H, d, wallM);
        add(g, m, sx, H / 2, sz);
      }
      for (const sx of [b.x - hx, b.x + hx]) {
        const m = BX(t, H, b.d, wallM);
        add(g, m, sx, H / 2, b.z);
      }
      // fascia insegna + cornicione + tetto con parapetto
      add(g, BX(b.w + 0.3, 0.9, 0.3, M.signBar), b.x, H - 0.4, zS - 0.1);
      if (barSignTex) {
        const s = new THREE.Mesh(new THREE.PlaneGeometry(6.4, 1.0),
          new THREE.MeshLambertMaterial({ map: barSignTex }));
        add(g, s, b.x, H - 0.4, zS - 0.27);
        s.rotation.y = Math.PI;
      }
      // insegna perpendicolare a bandiera
      add(g, BX(0.08, 0.08, 1.0, M.metal), b.x + 4.2, H - 0.2, zS - 0.6);
      add(g, BX(0.9, 0.7, 0.08, M.signBar), b.x + 4.2, H - 0.7, zS - 1.0);
      const flagGold = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.5), M.signGold);
      add(g, flagGold, b.x + 4.2, H - 0.7, zS - 1.05);
      flagGold.rotation.y = Math.PI;
      add(g, BX(b.w + 0.6, 0.3, b.d + 0.6, M.trimWhite), b.x, H + 0.15, b.z);
      const roof = BX(b.w + 0.6, 0.35, b.d + 0.6, M.roofFlat);
      add(g, roof, b.x, H + 0.4, b.z);
      add(g, BX(b.w + 0.6, 0.25, 0.3, wallM), b.x, H + 0.7, b.z - b.d / 2 - 0.15);
      // finestre del bar (grandi vetrine sul fronte sud)
      for (const wx of [b.x - 5.5, b.x + 5.5]) {
        const wu = windowUnit(2.2, 1.4, false, true);
        wu.position.set(wx, 1.9, zS - 0.03);
        wu.rotation.y = Math.PI;
        g.add(wu);
      }
      // zoccolo + porta con tenda
      add(g, BX(b.w + 0.14, 0.9, 0.14, M.plinth), b.x, 0.45, zS - 0.02);
      const bd = doorUnit(1.4, 2.4, M.woodMid, {});
      bd.position.set(dx, 1.2, zS - 0.05);
      bd.rotation.y = Math.PI;
      g.add(bd);
      // tenda da sole sopra l'ingresso
      const awn = BX(5.0, 0.08, 1.6, M.awningRed);
      awn.rotation.x = 0.28;
      add(g, awn, b.x, 3.1, zS - 0.9);
      for (const px of [-2.3, 2.3]) {
        const pole = CY(0.04, 0.04, 2.4, M.metal, 6);
        add(g, pole, b.x + px, 1.6, zS - 1.6);
      }
      // porta di servizio sul retro (nord) + zona trascurata
      const back = doorUnit(1.0, 2.1, M.metal, {});
      back.position.set(b.x + 3, 1.05, zN + 0.05);
      g.add(back);
      for (const [ox, oz] of [[1.5, 1.2], [2.4, 0.9], [4.6, 1.4]]) {
        const sk = new THREE.Mesh(new THREE.SphereGeometry(0.35, 7, 6), M.sack);
        sk.castShadow = true;
        add(g, sk, b.x + ox, 0.3, zN + oz);
      }
      // pavimento + bancone + scaffale di fondo + tavolini interni + lampade
      const floor = PL(b.w, b.d, texLambert('barfloor', 0x8a6a4a, T.co));
      add(g, floor, b.x, 0.045, b.z);
      add(g, BX(4, 1, 1, M.woodDark), b.x, 0.5, b.z + 2.5);
      add(g, BX(6, 0.15, 0.5, M.woodMid), b.x, 2.2, b.z + 5.4);
      for (let i = -2; i <= 2; i++) {
        add(g, CY(0.12, 0.12, 0.3, [M.posterR, M.posterB, M.posterY, M.paper, M.winGlass][i + 2], 6),
          b.x + i * 1.0, 2.0, b.z + 5.4);
      }
      for (const [tx, tz] of [[-2.5, -1.5], [0, -2], [2.5, -1]]) {
        const tb = CY(0.5, 0.5, 0.1, M.woodMid, 10);
        add(g, tb, b.x + tx, 0.75, b.z + tz);
        add(g, CY(0.08, 0.08, 0.75, M.metal, 6), b.x + tx, 0.37, b.z + tz);
        for (const [ox, oz] of [[-0.7, 0], [0.7, 0]]) {
          add(g, BX(0.4, 0.06, 0.4, M.woodDark), b.x + tx + ox, 0.45, b.z + tz + oz);
          add(g, CY(0.04, 0.04, 0.45, M.metal, 6), b.x + tx + ox, 0.22, b.z + tz + oz);
        }
        const pend = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), M.winLit);
        add(g, pend, b.x + tx, 2.6, b.z + tz);
        add(g, CY(0.02, 0.02, 0.6, M.metal, 5), b.x + tx, 2.95, b.z + tz);
      }
      // tavolini esterni con ombrellone + fioriere (lato bar_out, fuori dal nodo)
      for (const [ox, oz] of [[-4.5, -3.2], [-2.2, -4.0], [3.0, -3.4]]) {
        const tb = CY(0.55, 0.55, 0.08, M.woodMid, 10);
        add(g, tb, b.x + ox, 0.72, b.z + oz - 6);
        add(g, CY(0.06, 0.06, 0.72, M.metal, 6), b.x + ox, 0.36, b.z + oz - 6);
        for (const a of [0.4, 2.5]) {
          add(g, BX(0.42, 0.06, 0.42, M.woodDark),
            b.x + ox + Math.cos(a) * 0.95, 0.45, b.z + oz - 6 + Math.sin(a) * 0.95);
        }
      }
      {
        const um = CY(0.05, 0.05, 2.4, M.woodDark, 6);
        add(g, um, b.x - 3.3, 1.2, b.z - 9.8);
        const top = new THREE.Mesh(new THREE.ConeGeometry(1.6, 0.7, 8), M.awningRed);
        top.castShadow = true;
        add(g, top, b.x - 3.3, 2.6, b.z - 9.8);
      }
      for (const px of [-7, 7]) {
        add(g, BX(0.9, 0.5, 0.5, M.woodMid), b.x + px, 0.35, zS - 0.9);
        add(g, CY(0.14, 0.1, 0.3, M.clay, 7), b.x + px - 0.2, 0.75, zS - 0.9);
        add(g, CY(0.14, 0.1, 0.3, M.clay, 7), b.x + px + 0.2, 0.75, zS - 0.9);
        const b1 = new THREE.Mesh(new THREE.SphereGeometry(0.2, 7, 6), M.leaf);
        b1.castShadow = true; add(g, b1, b.x + px - 0.2, 1.0, zS - 0.9);
        const b2 = new THREE.Mesh(new THREE.SphereGeometry(0.2, 7, 6), M.posterR);
        b2.castShadow = true; add(g, b2, b.x + px + 0.2, 1.0, zS - 0.9);
      }
    }
    scene.add(g);
  }

  // ================= 4. PROPS ESISTENTI (stesse posizioni = stessi collider) =================
  for (const pr of WORLD.props) {
    const g = new THREE.Group();
    if (pr.kind === 'lamp') {
      // lampione a braccio con armatura e luce calda
      const pole = CY(0.09, 0.12, 4.6, M.metal, 8);
      add(g, pole, 0, 2.3, 0);
      add(g, BX(0.08, 0.08, 0.08, M.metal), 0, 4.62, 0);
      const arm = BX(0.08, 0.08, 1.1, M.metal);
      add(g, arm, 0, 4.66, 0.5);
      const shade = CY(0.3, 0.42, 0.25, M.metal, 8);
      add(g, shade, 0, 4.55, 1.0);
      const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 6), M.winLit);
      add(g, bulb, 0, 4.42, 1.0);
      add(g, BX(0.5, 0.5, 0.12, M.plinth), 0, 0.25, 0);
    } else if (pr.kind === 'tree') {
      const trunk = CY(0.18, 0.26, 1.8, M.trunk, 7);
      add(g, trunk, 0, 0.9, 0);
      const c1 = new THREE.Mesh(new THREE.SphereGeometry(1.5, 9, 7), M.leaf);
      c1.castShadow = true; add(g, c1, 0, 2.9, 0);
      const c2 = new THREE.Mesh(new THREE.SphereGeometry(1.0, 8, 6), M.leafDark);
      c2.castShadow = true; add(g, c2, 0.8, 2.2, 0.5);
      const c3 = new THREE.Mesh(new THREE.SphereGeometry(0.8, 8, 6), M.leaf);
      c3.castShadow = true; add(g, c3, -0.8, 2.3, -0.3);
      const ring = CY(0.9, 1.0, 0.3, M.plinth, 10);
      add(g, ring, 0, 0.15, 0);
    } else if (pr.kind === 'bench') {
      for (const dz of [-0.28, 0.28]) {
        add(g, BX(2.2, 0.07, 0.14, M.woodMid), 0, 0.5, dz);
      }
      add(g, BX(2.2, 0.5, 0.07, M.woodMid), 0, 0.85, -0.36);
      for (const dx of [-0.9, 0.9]) {
        add(g, BX(0.08, 0.5, 0.7, M.metal), dx, 0.25, 0);
      }
    } else if (pr.kind === 'crates') {
      const c1 = BX(1.2, 1.2, 1.2, M.woodMid);
      add(g, c1, 0, 0.6, 0);
      const c2 = BX(0.9, 0.9, 0.9, M.woodDark);
      c2.rotation.y = 0.4;
      add(g, c2, 0.8, 1.65, 0.2);
      add(g, BX(1.0, 0.08, 1.0, M.tarpBlue), -0.5, 1.35, -0.4);
    } else if (pr.kind === 'yardstack') {
      // torre di casse sabotabile: mesh dinamica gestita da game (stato ok/armed/fallen)
      const t = BX(2.2, 2.4, 2.2, M.woodMid);
      t.name = 'yardstack';
      add(g, t, 0, 1.2, 0);
      // listelli di rinforzo + telo arrotolato
      add(g, BX(2.3, 0.15, 2.3, M.woodDark), 0, 0.4, 0);
      add(g, BX(2.3, 0.15, 2.3, M.woodDark), 0, 2.0, 0);
      const t2 = BX(1.4, 1, 1.4, M.sack);
      t2.name = 'yardstack_top';
      add(g, t2, 0, 2.9, 0);
    }
    g.position.set(pr.x, 0, pr.z); scene.add(g);
  }

  // muri di copertura stealth: intonaco + copertina + manifesti
  for (const w of WORLD.coverWalls ?? []) {
    const m = BX(w.w, 2.2, w.d, texLambert('cover', 0xb0a890, T.pl));
    add(scene, m, w.x, 1.1, w.z);
    add(scene, BX(w.w + 0.2, 0.15, w.d + 0.2, M.plinth), w.x, 2.25, w.z);
    const posters = [M.posterR, M.posterB, M.posterY];
    const span = Math.max(w.w, w.d);
    const n = Math.max(1, Math.floor(span / 1.4));
    for (let i = 0; i < n; i++) {
      const off = -span / 2 + (i + 0.5) * (span / n);
      const pp = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.8), posters[i % 3]);
      if (w.w > w.d) { add(scene, pp, w.x + off, 1.3, w.z + w.d / 2 + 0.02); }
      else { pp.rotation.y = Math.PI / 2; add(scene, pp, w.x + w.w / 2 + 0.02, 1.3, w.z + off); }
    }
  }

  // ================= 5. VITA URBANA (solo visivo, fuori dai percorsi) =================
  // cestini accanto ai lampioni (base allineata al suolo locale)
  for (const [x, z, y] of [[-28.8, 6, 0.14], [-3.8, -6, 0.14], [19.2, 12, 0], [35.2, 26, 0.03], [-36.8, 24, 0]]) {
    const g = new THREE.Group();
    add(g, CY(0.32, 0.28, 0.75, M.binGreen, 9), 0, 0.38, 0);
    add(g, CY(0.34, 0.34, 0.08, M.metal), 0, 0.79, 0);
    add(scene, g, x, y, z);
  }
  // dissuasori: piazza sud + fronte bar (salta il passaggio porta-nodo)
  for (let x = 29; x <= 45; x += 2) {
    add(scene, CY(0.12, 0.14, 0.8, M.metalLight, 8), x, 0.4, 11.4);
  }
  for (let x = -26; x <= -14; x += 2) {
    if (Math.abs(x + 20) < 1.2) continue; // asse porta bar_out: resta libero
    add(scene, CY(0.12, 0.14, 0.8, M.metalLight, 8), x, 0.4, 13.0);
  }
  // segnali stradali: dare-precedenza + divieto presso gli incroci
  for (const [x, z, kind] of [[-22.5, 5.6, 0], [20.5, -5.6, 1], [42, 5.6, 0]]) {
    const g = new THREE.Group();
    add(g, CY(0.05, 0.05, 2.6, M.metalLight, 6), 0, 1.3, 0);
    if (kind === 0) {
      const tri = new THREE.Mesh(new THREE.CircleGeometry(0.4, 3),
        new THREE.MeshLambertMaterial({ color: 0xc83a2e, side: THREE.DoubleSide }));
      tri.castShadow = true;
      add(g, tri, 0, 2.5, 0);
      const inner = new THREE.Mesh(new THREE.CircleGeometry(0.24, 3), M.paper);
      add(g, inner, 0, 2.5, 0.01);
    } else {
      const disc = CY(0.35, 0.35, 0.04, mat(0xc83a2e), 12);
      disc.rotation.x = Math.PI / 2;
      add(g, disc, 0, 2.5, 0);
      const inner = CY(0.2, 0.2, 0.05, M.paper, 12);
      inner.rotation.x = Math.PI / 2;
      add(g, inner, 0, 2.5, 0);
    }
    add(scene, g, x, 0.14, z);
  }
  // auto parcheggiate in corsia di sosta (low-poly): carrozzeria + abitacolo + ruote
  function parkedCar(color, ry) {
    const g = new THREE.Group();
    add(g, BX(1.7, 0.55, 4.0, color), 0, 0.65, 0);
    add(g, BX(1.5, 0.5, 2.0, M.winGlass), 0, 1.15, -0.2);
    add(g, BX(1.72, 0.12, 4.02, M.trimWhite), 0, 0.42, 0);
    for (const [dx, dz] of [[-0.8, 1.3], [0.8, 1.3], [-0.8, -1.3], [0.8, -1.3]]) {
      const w = CY(0.32, 0.32, 0.22, M.tire, 10);
      w.rotation.z = Math.PI / 2;
      add(g, w, dx, 0.32, dz);
    }
    g.rotation.y = ry;
    return g;
  }
  add(scene, parkedCar(M.carRed, Math.PI / 2), 8, 0.02, -3.0);
  add(scene, parkedCar(M.carBlue, Math.PI / 2), 12.5, 0.02, -3.0);
  add(scene, parkedCar(M.carGray, Math.PI / 2), -36, 0.02, 3.0);
  // motorino davanti al bar
  {
    const g = new THREE.Group();
    add(g, BX(0.4, 0.4, 1.6, M.posterR), 0, 0.55, 0);
    add(g, BX(0.35, 0.3, 0.5, M.metal), 0, 0.75, -0.5);
    for (const dz of [-0.8, 0.8]) {
      const w = CY(0.3, 0.3, 0.12, M.tire, 10);
      w.rotation.z = Math.PI / 2;
      add(g, w, 0, 0.3, dz);
    }
    const hb = CY(0.03, 0.03, 0.5, M.metalLight, 6);
    hb.rotation.z = Math.PI / 2;
    add(g, hb, 0, 1.0, 0.85);
    add(scene, g, -13.5, 0, 12.6, 0.5);
  }
  function bicycle(x, z, ry, color) {
    const g = new THREE.Group();
    for (const dz of [-0.55, 0.55]) {
      const w = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.04, 6, 14), M.tire);
      w.castShadow = true;
      add(g, w, 0, 0.32, dz);
    }
    add(g, BX(0.05, 0.05, 1.0, color), 0, 0.55, 0);
    add(g, BX(0.05, 0.5, 0.05, color), 0, 0.7, 0.45);
    add(scene, g, x, 0, z, ry);
  }
  bicycle(-26.5, 12.2, 1.2, M.posterB);
  bicycle(30.5, 12.0, -0.6, M.posterY);
  // cassonetti nel vicolo + corte (zona trascurata)
  for (const [x, z, ry] of [[21.6, 3.5, 0.3], [-24.5, 29.0, -0.2], [14.5, -22.5, 0.1]]) {
    const g = new THREE.Group();
    add(g, BX(1.6, 1.1, 1.0, M.dumpster), 0, 0.67, 0);
    const lid = BX(1.6, 0.1, 1.0, M.metal);
    lid.rotation.z = 0.08;
    add(g, lid, 0, 1.27, 0);
    for (const dx of [-0.6, 0.6]) for (const dz of [-0.35, 0.35]) {
      add(g, CY(0.09, 0.09, 0.12, M.tire, 8), dx, 0.06, dz);
    }
    add(scene, g, x, 0, z, ry);
  }
  // sacchi e barili al deposito (svc) + telo e staccionata bassa
  for (const [x, z] of [[-36.5, 18], [-35.6, 18.6], [-37.2, 21.5], [-31, 12.5]]) {
    const s = new THREE.Mesh(new THREE.SphereGeometry(0.4, 7, 6), M.sack);
    s.castShadow = true;
    add(scene, s, x, 0.35, z);
  }
  for (const [x, z] of [[-36, 22], [-35, 22.4], [-33, 9.5]]) {
    add(scene, CY(0.35, 0.35, 0.9, M.barrelRust, 10), x, 0.45, z);
  }
  add(scene, BX(2.0, 0.9, 1.2, M.tarpBlue), -36.5, 0.45, 16.0, 0.2);
  for (let i = 0; i < 5; i++) {
    add(scene, BX(0.12, 1.1, 0.12, M.woodDark), -39.5 + i * 1.1, 0.55, 17.0);
  }
  add(scene, BX(5.6, 0.12, 0.1, M.woodDark), -37.3, 0.95, 17.0);
  add(scene, BX(5.6, 0.12, 0.1, M.woodDark), -37.3, 0.5, 17.0);
  // corte nord: fili del bucato + siepi (luogo vissuto e riparato)
  for (const px of [-23.5, -16.5]) {
    add(scene, CY(0.05, 0.05, 2.4, M.woodDark, 6), px, 1.2, 31.5);
  }
  {
    const line = BX(7.0, 0.02, 0.02, M.metal);
    add(scene, line, -20, 2.3, 31.5);
    const cloths = [M.paper, M.posterB, M.awningRed, M.paper, M.posterY];
    for (let i = 0; i < 5; i++) {
      const cl = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.9),
        new THREE.MeshLambertMaterial({ color: cloths[i].color, side: THREE.DoubleSide }));
      cl.castShadow = true;
      add(scene, cl, -22.8 + i * 1.4, 1.85, 31.5, 0.15 * (i % 2 ? 1 : -1));
    }
  }
  // siepi basse: bordi corte + retro residenziale (delimitano senza ostruire i nodi)
  const hedgeRow = (x0, x1, z) => {
    for (let x = x0; x <= x1; x += 1.2) {
      const hb = BX(1.1, 0.7, 0.7, M.hedge);
      add(scene, hb, x, 0.35, z);
    }
  };
  hedgeRow(-28, -12, 35.5);
  hedgeRow(-24, -12, -26.5);
  hedgeRow(2, 18, -26.5);
  // fioriere davanti agli ingressi residenziali (a ridosso del muro)
  for (const [x, z] of [[-19.5, -14.6], [-16.5, -14.6], [8.5, -14.6], [11.5, -14.6], [10.5, 13.5], [13.5, 13.5]]) {
    add(scene, BX(0.6, 0.4, 0.4, M.woodMid), x, 0.2, z);
    const bb = new THREE.Mesh(new THREE.SphereGeometry(0.28, 7, 6), M.leaf);
    bb.castShadow = true;
    add(scene, bb, x, 0.6, z);
  }
  // bacheca della piazza (fronte verso nord, dove passeggia la gente)
  {
    add(scene, BX(0.12, 2.0, 0.12, M.woodDark), 32.4, 1.0, 15.6);
    add(scene, BX(0.12, 2.0, 0.12, M.woodDark), 33.6, 1.0, 15.6);
    add(scene, BX(1.5, 1.0, 0.08, M.woodMid), 33.0, 1.5, 15.6);
    const note = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 0.7), M.paper);
    add(scene, note, 33.0, 1.5, 15.65);
  }
  // cavi elettrici tra lampioni esistenti (ogni filo ha un sostegno reale)
  function wire(x1, z1, x2, z2) {
    const mx = (x1 + x2) / 2, mz = (z1 + z2) / 2;
    const len = Math.hypot(x2 - x1, z2 - z1);
    const ang = -Math.atan2(z2 - z1, x2 - x1);
    for (const s of [0, 1]) {
      const w = BX(len / 2, 0.03, 0.03, M.metal);
      const ax = s === 0 ? (x1 + mx) / 2 : (mx + x2) / 2;
      const az = s === 0 ? (z1 + mz) / 2 : (mz + z2) / 2;
      w.position.set(ax, 4.45, az);
      w.rotation.y = ang;
      w.rotation.z = s === 0 ? 0.07 : -0.07;
      scene.add(w);
    }
  }
  wire(-30, 6, -5, -6);
  wire(-5, -6, 18, 12);
  // pozzanghera in corte + erba alta ai bordi (trascuratezza intenzionale)
  {
    const pud2 = new THREE.Mesh(new THREE.CircleGeometry(1.1, 12), mat(0x2c3844));
    pud2.rotation.x = -Math.PI / 2;
    add(scene, pud2, -17, 0.04, 29.5);
  }
  for (const [x, z] of [[-27, 30], [-13, 32.5], [24, -12], [-6, -24]]) {
    for (let k = 0; k < 3; k++) {
      add(scene, CY(0.02, 0.05, 0.5 + k * 0.12, M.hedge, 5), x + k * 0.25, 0.3, z);
    }
  }
}
function xMid(a, b) { return (a + b) / 2; }
