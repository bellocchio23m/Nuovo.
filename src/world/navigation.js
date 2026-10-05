import { WORLD } from './mapData.js';
import { buildColliders } from './world.js';

// Grafo di waypoint + BFS. Mappa piccola: O(n) trascurabile.
// P0 usa grafo simbolico; la roadmap prevede griglia A* baked (stessa interfaccia).
export function buildNavGraph() {
  const adj = {};
  for (const k of Object.keys(WORLD.nodes)) adj[k] = [];
  for (const [a, b] of WORLD.edges) { adj[a].push(b); adj[b].push(a); }
  return adj;
}

export function findPath(adj, from, to) {
  if (from === to) return [to];
  const prev = { [from]: null };
  const q = [from];
  while (q.length) {
    const n = q.shift();
    for (const m of adj[n] ?? []) {
      if (!(m in prev)) { prev[m] = n; q.push(m); if (m === to) { q.length = 0; break; } }
    }
  }
  if (!(to in prev)) return [to];
  const path = []; let c = to;
  while (c) { path.unshift(c); c = prev[c]; }
  return path;
}

export function nearestNode(x, z) {
  let best = null, bd = 1e9;
  for (const [k, n] of Object.entries(WORLD.nodes)) {
    const d = (n.x - x) ** 2 + (n.z - z) ** 2;
    if (d < bd) { bd = d; best = k; }
  }
  return best;
}

// --- Clearance e validazione nav (deterministiche, pure, da dati statici) ---
// Raggio NPC usato da resolveCircle: il centro resta a ≥ NPC_R dalla superficie.
const NPC_R = 0.35;
const MARGIN = 0.15;

// Clearance minima tra un punto e i collider: 0 se libero, >0 se il punto
// è dentro (distanza dalla faccia più vicina + NPC_R) o a ridosso
// (NPC_R - distanza dalla superficie) di un collider.
function pointClearance(x, z, colliders) {
  let minClear = 0;
  for (const c of colliders) {
    const cx = Math.max(c.minX, Math.min(x, c.maxX));
    const cz = Math.max(c.minZ, Math.min(z, c.maxZ));
    if (cx === x && cz === z) {
      // dentro il box: deve uscire dalla faccia più vicina + raggio
      const d = Math.min(x - c.minX, c.maxX - x, z - c.minZ, c.maxZ - z) + NPC_R;
      if (d > minClear) minClear = d;
    } else {
      const d = NPC_R - Math.hypot(x - cx, z - cz);
      if (d > minClear) minClear = d;
    }
  }
  return minClear;
}

// Raggio d'arrivo per-nodo: distanza minima raggiungibile dal centro NPC.
// Nodi in spazio libero -> 0.6 (default); nodi a ridosso/dentro collider
// -> clearance + margine (mai inferiore al minimo fisicamente raggiungibile,
// altrimenti l'NPC spinge contro l'ostacolo all'infinito).
const arrivalCache = new Map();
export function arrivalRadius(nodeId) {
  let r = arrivalCache.get(nodeId);
  if (r === undefined) {
    if (arrivalCache.size === 0) {
      const colliders = buildColliders();
      for (const [k, n] of Object.entries(WORLD.nodes)) {
        arrivalCache.set(k, Math.max(0.6, pointClearance(n.x, n.z, colliders) + MARGIN));
      }
    }
    r = arrivalCache.get(nodeId) ?? 0.6;
  }
  return r;
}

// Validazione boot: nodi e archi liberi da collider. Report, mai throw.
// - nodeViolations: nodi con clearance > 0 (irraggiungibili o a ridosso).
// - edgeViolations: archi il cui segmento passa dentro la zona di push-out
//   (centro NPC a < NPC_R da un collider): deflessione/stuck mid-path.
export function validateNav(colliders) {
  const cols = colliders ?? buildColliders();
  const nodeViolations = [];
  const edgeViolations = [];
  for (const [k, n] of Object.entries(WORLD.nodes)) {
    if (pointClearance(n.x, n.z, cols) > 0) nodeViolations.push(k);
  }
  for (const [a, b] of WORLD.edges) {
    const na = WORLD.nodes[a], nb = WORLD.nodes[b];
    if (!na || !nb) continue;
    let bad = false;
    for (let i = 0; i <= 8 && !bad; i++) {
      const t = i / 8;
      const x = na.x + (nb.x - na.x) * t;
      const z = na.z + (nb.z - na.z) * t;
      if (pointClearance(x, z, cols) > 0) bad = true;
    }
    if (bad) edgeViolations.push(`${a}-${b}`);
  }
  return { nodeViolations, edgeViolations };
}
