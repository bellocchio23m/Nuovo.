import { WORLD } from './mapData.js';

// Fisica 2D del mondo (nessuna dipendenza three.js: usabile anche headless).
// Collider AABB {minX,maxX,minZ,maxZ,id,tall}: tall=true ostruisce la vista
// (muri, edifici, casse); panchine/lampioni/alberi no.

// Costruisce collider. Il bar ha mura sottili con apertura (porta);
// gli altri edifici sono solidi.
export function buildColliders() {
  const cols = [];
  for (const b of WORLD.buildings) {
    const hx = b.w / 2, hz = b.d / 2;
    if (!b.interior) {
      cols.push({ minX: b.x - hx, maxX: b.x + hx, minZ: b.z - hz, maxZ: b.z + hz, id: b.id, tall: true, high: true });
      continue;
    }
    const t = 0.4, dw = b.door.width / 2, dx = b.door.at;
    const zS = b.z - hz, zN = b.z + hz, xW = b.x - hx, xE = b.x + hx;
    cols.push({ minX: xW, maxX: dx - dw, minZ: zS - t / 2, maxZ: zS + t / 2, id: 'bar_s1', tall: true, high: true });
    cols.push({ minX: dx + dw, maxX: xE, minZ: zS - t / 2, maxZ: zS + t / 2, id: 'bar_s2', tall: true, high: true });
    cols.push({ minX: xW, maxX: xE, minZ: zN - t / 2, maxZ: zN + t / 2, id: 'bar_n', tall: true, high: true });
    cols.push({ minX: xW - t / 2, maxX: xW + t / 2, minZ: zS, maxZ: zN, id: 'bar_w', tall: true, high: true });
    cols.push({ minX: xE - t / 2, maxX: xE + t / 2, minZ: zS, maxZ: zN, id: 'bar_e', tall: true, high: true });
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
