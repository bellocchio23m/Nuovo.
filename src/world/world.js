import { WORLD } from './mapData.js';
import { allStaticColliders, allDoors, allWindows, doorLeafRect } from './buildings.js';

// --- Passaggi di porte/finestre (S8) ----------------------------------------
// Ogni porta ha un vano nel muro; il battente CHIUSO ostruisce davvero, da
// APERTO il passaggio e' libero (stessa verita' per fisica e navigazione:
// la griglia nav si rasterizza da questi collider). Lo stato iniziale
// deriva dalle definizioni (porte 'open' = libere); game.js chiama
// setDoorPassage() a ogni apertura/chiusura (incrementa colliderEpoch,
// quindi la nav si ricostruisce e i percorsi si ricalcolano).
const doorOpen = new Map();
let doorInit = false;
function ensureDoorInit() {
  if (doorInit) return;
  for (const d of allDoors()) doorOpen.set(d.id, d.state === 'open');
  doorInit = true;
}

/** true se il vano della porta e' attraversabile. */
export function isDoorOpen(id) {
  ensureDoorInit();
  return doorOpen.get(id) ?? true;
}

/** Apre/chiude il passaggio di una porta (bump epoch solo se cambia). */
export function setDoorPassage(id, open) {
  ensureDoorInit();
  if ((doorOpen.get(id) ?? true) === open) return;
  doorOpen.set(id, open);
  colliderEpochValue++;
}

/** Come setDoorPassage ma per finestre passabili (id finestra). */
const winOpen = new Map();
export function setWindowPassage(id, open) {
  if ((winOpen.get(id) ?? false) === open) return;
  winOpen.set(id, open);
  colliderEpochValue++;
}
function isWindowOpen(id) { return winOpen.get(id) ?? false; }

// Fisica 2D del mondo (nessuna dipendenza three.js: usabile anche headless).
// Collider AABB {minX,maxX,minZ,maxZ,id,tall}: tall=true ostruisce la vista
// (muri, edifici, casse); panchine/lampioni/alberi no.

// --- Ostacoli dinamici (porte chiuse, detriti, barricate) -------------------
// La geometria del mondo puo' cambiare a runtime: ogni modifica incrementa
// colliderEpoch, e la rete navigabile (world/navigation.js) si rasterizza da
// capo e invalida la cache dei percorsi. Cosi' un passaggio bloccato produce
// davvero un ricalcolo, non un NPC che continua a spingere contro il nuovo muro.
let colliderEpochValue = 0;
const dynObstacles = new Map();

export function colliderEpoch() { return colliderEpochValue; }

export function setWorldObstacle(id, r) {
  dynObstacles.set(id, {
    minX: r.minX, maxX: r.maxX, minZ: r.minZ, maxZ: r.maxZ,
    id, tall: true, high: r.high !== false
  });
  colliderEpochValue++;
}

export function clearWorldObstacle(id) {
  if (dynObstacles.delete(id)) colliderEpochValue++;
}

// Costruisce collider. Il bar ha mura sottili con aperture (porte);
// b2..b5 hanno gusci cavi con tramezzi, mobili e scale (v. buildings.js);
// i battenti chiusi ostruiscono il proprio vano (porte/finestre passabili).
export function buildColliders() {
  ensureDoorInit();
  const cols = [];
  // --- gusci perimetrali S8 (b2,b3,b4,b5): muri con vani porta ---
  // (le impronte restano quelle di mapData.js)
  const S8 = new Set(['b2', 'b3', 'b4', 'b5']);
  for (const b of WORLD.buildings) {
    if (S8.has(b.id)) continue; // sotto, da buildings.js (tramezzi inclusi)
    const hx = b.w / 2, hz = b.d / 2;
    if (!b.interior) {
      cols.push({ minX: b.x - hx, maxX: b.x + hx, minZ: b.z - hz, maxZ: b.z + hz, id: b.id, tall: true, high: true });
      continue;
    }
    void b; // bar e corpi S8: interamente da buildings.js (sotto)
  }
  // --- interni S8: gusci, tramezzi, mobili (stessa fonte del rendering) ---
  for (const w of allStaticColliders()) {
    cols.push({ minX: w.minX, maxX: w.maxX, minZ: w.minZ, maxZ: w.maxZ, id: w.id, tall: true, high: w.high !== false });
  }
  // --- battenti chiusi (porte) e finestre passabili chiuse: ostruiscono ---
  for (const d of allDoors()) {
    if (isDoorOpen(d.id)) continue;
    const r = doorLeafRect(d);
    cols.push({ ...r, id: 'door:' + d.id, tall: true, high: true });
  }
  for (const w of allWindows()) {
    if (!w.passable || isWindowOpen(w.id)) continue;
    const r = doorLeafRect(w);
    cols.push({ ...r, id: 'win:' + w.id, tall: true, high: true });
  }
  for (const w of WORLD.coverWalls ?? []) {
    cols.push({ minX: w.x - w.w / 2, maxX: w.x + w.w / 2, minZ: w.z - w.d / 2, maxZ: w.z + w.d / 2, id: 'cover', tall: true, high: true });
  }
  for (const p of WORLD.props) {
    if (p.kind === 'lamp' || p.kind === 'tree') {
      cols.push({ minX: p.x - .3, maxX: p.x + .3, minZ: p.z - .3, maxZ: p.z + .3, id: 'prop', tall: false });
    }
    if (p.kind === 'crates') {
      cols.push({ minX: p.x - 1, maxX: p.x + 1, minZ: p.z - 1, maxZ: p.z + 1, id: 'crates', tall: true });
    }
    if (p.kind === 'yardstack') {
      cols.push({ minX: p.x - 1.2, maxX: p.x + 1.2, minZ: p.z - 1.2, maxZ: p.z + 1.2, id: 'yardstack', tall: true });
    }
    if (p.kind === 'bench') {
      cols.push({ minX: p.x - 1.1, maxX: p.x + 1.1, minZ: p.z - .4, maxZ: p.z + .4, id: 'prop', tall: false });
    }
  }
  for (const o of dynObstacles.values()) cols.push({ ...o });
  return cols;
}

// Risolve un cerchio (x,z,r) contro gli AABB: spinge fuori. Ritorna {x,z,hit}.
export function resolveCircle(x, z, r, colliders) {
  let tx = x, tz = z, hit = false;
  for (let iter = 0; iter < 3; iter++) {
    hit = false;
    for (const c of colliders) {
      const cx = Math.max(c.minX, Math.min(tx, c.maxX));
      const cz = Math.max(c.minZ, Math.min(tz, c.maxZ));
      const dx = tx - cx, dz = tz - cz;
      const d2 = dx * dx + dz * dz;
      if (d2 < r * r) {
        hit = true;
        if (d2 < 1e-8) {
          // centro dentro il box: spingi fuori dal lato più vicino
          const pl = tx - c.minX, pr = c.maxX - tx, pt = tz - c.minZ, pb = c.maxZ - tz;
          const m = Math.min(pl, pr, pt, pb);
          if (m === pl) tx = c.minX - r; else if (m === pr) tx = c.maxX + r;
          else if (m === pt) tz = c.minZ - r; else tz = c.maxZ + r;
        } else {
          const d = Math.sqrt(d2);
          tx = cx + (dx / d) * r; tz = cz + (dz / d) * r;
        }
      }
    }
    if (!hit) break;
  }
  const B = WORLD.size / 2 - 1;
  tx = Math.max(-B, Math.min(B, tx)); tz = Math.max(-B, Math.min(B, tz));
  return { x: tx, z: tz, hit };
}

// LOS 2D: segmento ostruito solo da collider tall. Se un estremo è DENTRO un
// collider (percezione ravvicinata, es. dentro il bar), quel collider non conta.
export function losBlocked(ax, az, bx, bz, colliders) {
  for (const c of colliders) {
    if (!c.tall) continue;
    if (pointInAABB(ax, az, c) || pointInAABB(bx, bz, c)) continue;
    if (segHitsAABB(ax, az, bx, bz, c)) return true;
  }
  return false;
}

function pointInAABB(x, z, c) {
  return x > c.minX && x < c.maxX && z > c.minZ && z < c.maxZ;
}

function segHitsAABB(x1, z1, x2, z2, c) {
  let tmin = 0, tmax = 1;
  const dx = x2 - x1, dz = z2 - z1;
  const axes = [[x1, dx, c.minX, c.maxX], [z1, dz, c.minZ, c.maxZ]];
  for (const [p, d, mn, mx] of axes) {
    if (Math.abs(d) < 1e-9) { if (p < mn || p > mx) return false; }
    else {
      let t1 = (mn - p) / d, t2 = (mx - p) / d;
      if (t1 > t2) { const tt = t1; t1 = t2; t2 = tt; }
      tmin = Math.max(tmin, t1); tmax = Math.min(tmax, t2);
      if (tmin > tmax) return false;
    }
  }
  return tmax > 0 && tmin < 1;
}

export function pointInBuilding(x, z, id) {
  const b = WORLD.buildings.find(b => b.id === id);
  if (!b) return false;
  return Math.abs(x - b.x) < b.w / 2 && Math.abs(z - b.z) < b.d / 2;
}
