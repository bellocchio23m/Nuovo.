import { WORLD } from './mapData.js';
import { buildColliders, colliderEpoch } from './world.js';

// =============================================================================
// RETE NAVIGABILE REALE (NavMesh discretizzata + A* + string-pulling)
// =============================================================================
// Due livelli distinti, mai confusi:
//   1. TASSONOMIA SEMANTICA: WORLD.nodes/edges = i NOMI dei luoghi (routines,
//      agenda, "piazza", "bar"). I waypoint NON sostituiscono la navigazione:
//      sono l'etichetta della destinazione.
//   2. SPAZIO NAVIGABILE: una griglia di 0.25 m rasterizzata dagli stessi
//      collider AABB della fisica. A* (8 direzioni, no corner-cutting) trova un
//      percorso realmente percorribile; lo string-pulling lo riduce a pochi
//      segmenti dritti verificati contro i collider. Ogni spostamento segue
//      questa rete: nessun NPC attraversa piu' un muro.
//
// Scelta tecnica (Recast/Detour WASM vs griglia):
//   - identica in Node (test headless) e nel browser: nessun WASM, nessun boot
//     asincrono, nessuna divergenza tra chi simula e chi renderizza;
//   - input = gli ATTUALI collider della fisica: una sola verita' geometrica,
//     impossibile che il rendering e la navigazione si discordino;
//   - determinismo puro (nessun RNG, tie-break su indici cella), richiesto dai
//     test di replay/save-load;
//   - su 100x100 m la griglia e' 400x400 celle: A* con euristica ottile +
//     cache per-pair resta nell'ordine dei millisecondi e viene calcolato solo
//     quando serve (nuovo obiettivo o percorso invalidato).
//   Compromesso documentato: non c'e' la generazione automatica di Recast su
//   geometrie arbitrarie, ma qui la geometria nasce da AABB noti, quindi la
//   rasterizzazione conservativa ne e' un surrogato esatto e piu' robusto.
// =============================================================================

export const NAV_CELL = 0.25;
export const AGENT_R = 0.35;
// Inflazione conservativa: un centro cella libero implica che TUTTA la cella
// e' percorribile dall'agente (raggio 0.35 + mezza diagonale 0.177). Garantisce
// che ogni arco della griglia tra due celle libere sia fisicamente libera.
const HALF_DIAG = NAV_CELL * Math.SQRT1_2;
export const INFLATE = AGENT_R + HALF_DIAG;
const BOUND = WORLD.size / 2 - 1;
const GW = Math.round(WORLD.size / NAV_CELL);
const GOX = -WORLD.size / 2;

// --- indici collider (rigenerati a ogni epoch della fisica) ----------------
let colList = null;
let buckets = null;
let builtEpoch = -1;
let rev = 0;
let grid = null;

function rebuildIndex(bump) {
  colList = buildColliders();
  buckets = new Map();
  const B = 4;
  for (let i = 0; i < colList.length; i++) {
    const c = colList[i];
    const i0 = Math.floor((c.minX - AGENT_R) / B), i1 = Math.floor((c.maxX + AGENT_R) / B);
    const j0 = Math.floor((c.minZ - AGENT_R) / B), j1 = Math.floor((c.maxZ + AGENT_R) / B);
    for (let a = i0; a <= i1; a++) {
      for (let b = j0; b <= j1; b++) {
        const k = (a + 64) * 1024 + (b + 64);
        let arr = buckets.get(k);
        if (!arr) { arr = []; buckets.set(k, arr); }
        arr.push(i);
      }
    }
  }
  grid = null;
  routeCache.clear();
  builtEpoch = colliderEpoch();
  if (bump) rev++; // la PRIMA costruzione non e' un cambio: rev parte da 0
}

function ensureIndex() {
  if (colList === null) rebuildIndex(false);
  else if (builtEpoch !== colliderEpoch()) rebuildIndex(true);
}

/** Revisione della rete: cambia quando la geometria navigabile cambia. */
export function navRevision() { ensureIndex(); return rev; }

// --- query di spazio libero ------------------------------------------------

/** true se un agente di raggio AGENT_R centrato in (x,z) non tocca alcun collider. */
export function pointFree(x, z) {
  ensureIndex();
  if (x < -BOUND || x > BOUND || z < -BOUND || z > BOUND) return false;
  const k = (Math.floor((x - AGENT_R) / 4) + 64) * 1024 + (Math.floor((z - AGENT_R) / 4) + 64);
  const arr = buckets.get(k);
  if (!arr) return true;
  const R2 = AGENT_R * AGENT_R;
  for (let n = 0; n < arr.length; n++) {
    const c = colList[arr[n]];
    const cx = x < c.minX ? c.minX : (x > c.maxX ? c.maxX : x);
    const cz = z < c.minZ ? c.minZ : (z > c.maxZ ? c.maxZ : z);
    const dx = x - cx, dz = z - cz;
    if (dx * dx + dz * dz < R2) return false;
  }
  return true;
}

/**
 * Il segmento e' interamente percorribile? Campionamento a 0.15 m contro i
 * collider reali (non la griglia): nessuna "scorciatoia" attraverso un muro.
 */
export function segmentClear(x1, z1, x2, z2) {
  const dx = x2 - x1, dz = z2 - z1;
  const d = Math.hypot(dx, dz);
  const steps = Math.ceil(d / 0.15);
  if (steps <= 1) return pointFree(x1, z1) && pointFree(x2, z2);
  for (let s = 0; s <= steps; s++) {
    const t = s / steps;
    if (!pointFree(x1 + dx * t, z1 + dz * t)) return false;
  }
  return true;
}

// --- griglia di navigabilita' ---------------------------------------------

function cellIndex(x, z) {
  const i = Math.floor((x - GOX) / NAV_CELL);
  const j = Math.floor((z - GOX) / NAV_CELL);
  if (i < 0 || j < 0 || i >= GW || j >= GW) return -1;
  return j * GW + i;
}
function cellX(i) { return GOX + (i + 0.5) * NAV_CELL; }

function buildGrid() {
  const walk = new Uint8Array(GW * GW).fill(1);
  const stamp = (minX, maxX, minZ, maxZ) => {
    let i0 = Math.ceil((minX - GOX) / NAV_CELL - 0.5);
    let i1 = Math.floor((maxX - GOX) / NAV_CELL - 0.5);
    let j0 = Math.ceil((minZ - GOX) / NAV_CELL - 0.5);
    let j1 = Math.floor((maxZ - GOX) / NAV_CELL - 0.5);
    if (i0 < 0) i0 = 0; if (j0 < 0) j0 = 0;
    if (i1 > GW - 1) i1 = GW - 1; if (j1 > GW - 1) j1 = GW - 1;
    for (let i = i0; i <= i1; i++) {
      const row = j0 * GW + i;
      for (let j = j0; j <= j1; j++) walk[row + (j - j0) * GW] = 0;
    }
  };
  for (let n = 0; n < colList.length; n++) {
    const c = colList[n];
    stamp(c.minX - INFLATE, c.maxX + INFLATE, c.minZ - INFLATE, c.maxZ + INFLATE);
  }
  // margini del mondo (coerenti con il clamp di resolveCircle)
  const lo = Math.ceil((-BOUND - GOX) / NAV_CELL - 0.5);
  const hi = Math.floor((BOUND - GOX) / NAV_CELL - 0.5);
  for (let i = 0; i < GW; i++) {
    for (let j = 0; j < GW; j++) {
      if (i < lo || i > hi || j < lo || j > hi) walk[j * GW + i] = 0;
    }
  }
  return walk;
}

function navGrid() {
  ensureIndex();
  if (!grid) grid = { walk: buildGrid() };
  return grid;
}

export function cellFree(x, z) {
  const c = cellIndex(x, z);
  return c >= 0 && navGrid().walk[c] === 1;
}

/**
 * Punto navigabile piu' vicino a (x,z) entro maxR metri (ricerca a spirale
 * deterministica: anelli, poi scansione i->j fissa). null se non ce n'e' nessuno.
 */
export function nearestWalkable(x, z, maxR) {
  const G = navGrid();
  const i0 = Math.floor((x - GOX) / NAV_CELL);
  const j0 = Math.floor((z - GOX) / NAV_CELL);
  const R = Math.ceil(maxR / NAV_CELL);
  let best = -1, bd = Infinity;
  for (let r = 0; r <= R; r++) {
    const iLo = i0 - r, iHi = i0 + r, jLo = j0 - r, jHi = j0 + r;
    let ringBest = -1, ringBd = Infinity;
    for (let i = iLo; i <= iHi; i++) {
      if (i < 0 || i >= GW) continue;
      const js = (r === 0) ? [j0] : [jLo, jHi];
      for (const j of js) {
        if (j < 0 || j >= GW) continue;
        const idx = j * GW + i;
        if (!G.walk[idx]) continue;
        const dx = cellX(i) - x, dz = cellX(j) - z;
        const d = dx * dx + dz * dz;
        if (d < ringBd) { ringBd = d; ringBest = idx; }
      }
    }
    if (ringBest >= 0 && ringBd < bd) { bd = ringBd; best = ringBest; }
    // un punto a distanza d appartiene all'anello floor(d/CELL): appena l'anello
    // appena esplorato non puo' contenere nulla di piu' vicino, possiamo fermarci
    if (best >= 0 && Math.sqrt(bd) <= r * NAV_CELL) break;
  }
  if (best < 0) return null;
  const bi = best % GW;
  return { x: cellX(bi), z: cellX((best - bi) / GW), i: bi, j: (best - bi) / GW };
}

// --- A* ---------------------------------------------------------------------

// Heap binario minimale su (f, cella): tie-break sull'indice cella -> totale
// determinismo (nessun confronto su posizioni float).
class MinHeap {
  constructor() { this.k = []; this.v = []; }
  get size() { return this.k.length; }
  clear() { this.k.length = 0; this.v.length = 0; }
  push(key, val) {
    const k = this.k, v = this.v;
    let i = k.length; k.push(key); v.push(val);
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (k[p] <= k[i]) break;
      const tk = k[p]; k[p] = k[i]; k[i] = tk;
      const tv = v[p]; v[p] = v[i]; v[i] = tv;
      i = p;
    }
  }
  pop() {
    const k = this.k, v = this.v;
    const top = v[0];
    const lk = k.pop(), lv = v.pop();
    if (k.length) {
      k[0] = lk; v[0] = lv;
      let i = 0;
      for (;;) {
        const l = i * 2 + 1, r = l + 1;
        let m = i;
        if (l < k.length && k[l] < k[m]) m = l;
        if (r < k.length && k[r] < k[m]) m = r;
        if (m === i) break;
        const tk = k[m]; k[m] = k[i]; k[i] = tk;
        const tv = v[m]; v[m] = v[i]; v[i] = tv;
        i = m;
      }
    }
    return top;
  }
}

let gScore = null, parent = null, stamp = null, gen = 0;
let heap = null;
const NB = [
  [1, 0, 10], [-1, 0, 10], [0, 1, 10], [0, -1, 10],
  [1, 1, 14], [1, -1, 14], [-1, 1, 14], [-1, -1, 14]
];

function heuristic(i0, j0, i1, j1) {
  const dx = i0 > i1 ? i0 - i1 : i1 - i0;
  const dj = j0 > j1 ? j0 - j1 : j1 - j0;
  const mn = dx < dj ? dx : dj;
  return 10 * (dx + dj) - 6 * mn;
}

// Chiave di heap con TIE-BREAK ottimale: primario f = g + h (come A* classico),
// secondario h (preferenza verso l'obiettivo). Resta ottimo, ma smette di
// espandere l'intero rettangolo start-goal (tutti i nodi con f identico).
// Interi: nessun confronto su float -> totale determinismo.
const TB = 16384;
function heapKey(g, h) { return (g + h) * TB + h; }

/** A* cella->cella. Ritorna l'array di indici cella (inclusi) o null. */
function astar(si, sj, gi, gj) {
  const G = navGrid();
  const walk = G.walk;
  const total = GW * GW;
  if (!gScore || gScore.length !== total) {
    gScore = new Int32Array(total);
    parent = new Int32Array(total);
    stamp = new Int32Array(total);
    heap = new MinHeap();
  }
  gen++;
  if (gen > 0x3fffffff) { stamp.fill(0); gen = 1; }
  const start = sj * GW + si, goal = gj * GW + gi;
  if (!walk[start] || !walk[goal]) return null;
  if (start === goal) return [start];
  heap.clear();
  gScore[start] = 0; stamp[start] = gen; parent[start] = -1;
  heap.push(heapKey(0, heuristic(si, sj, gi, gj)), start);
  let found = false;
  while (heap.size) {
    const cur = heap.pop();
    if (cur === goal) { found = true; break; }
    const ci = cur % GW, cj = (cur - ci) / GW;
    const gc = gScore[cur];
    for (let n = 0; n < 8; n++) {
      const [di, dj, cost] = NB[n];
      const ni = ci + di, nj = cj + dj;
      if (ni < 0 || nj < 0 || ni >= GW || nj >= GW) continue;
      const nIdx = nj * GW + ni;
      if (!walk[nIdx]) continue;
      if (di !== 0 && dj !== 0) {
        // niente taglio d'angolo: entrambi i vicini ortogonali devono essere liberi
        if (!walk[cj * GW + ni] || !walk[nj * GW + ci]) continue;
      }
      const ng = gc + cost;
      if (stamp[nIdx] === gen && gScore[nIdx] <= ng) continue;
      stamp[nIdx] = gen; gScore[nIdx] = ng; parent[nIdx] = cur;
      heap.push(heapKey(ng, heuristic(ni, nj, gi, gj)), nIdx);
    }
  }
  if (!found) return null;
  const out = [];
  let c = goal;
  while (c !== -1) { out.push(c); c = parent[c]; }
  out.reverse();
  return out;
}

// --- string-pulling ---------------------------------------------------------

function smooth(cells) {
  const pts = cells.map(c => { const i = c % GW; return { x: cellX(i), z: cellX((c - i) / GW) }; });
  if (pts.length <= 2) return pts;
  const out = [pts[0]];
  let i = 0;
  const LOOK = 48; // lookahead limitato: costo lineare, percorsi gia' corti
  while (i < pts.length - 1) {
    let j = Math.min(pts.length - 1, i + LOOK);
    for (; j > i + 1; j--) {
      if (segmentClear(pts[i].x, pts[i].z, pts[j].x, pts[j].z)) break;
    }
    if (j <= i + 1) j = i + 1;
    out.push(pts[j]);
    i = j;
  }
  return out;
}

// --- cache percorsi ---------------------------------------------------------

const routeCache = new Map();
const CACHE_CAP = 2048;

function cachedCells(si, sj, gi, gj, alt) {
  const key = `${si},${sj},${gi},${gj},${alt}`;
  let e = routeCache.get(key);
  if (e !== undefined) {
    // re-insert = aggiorna la posizione LRU
    routeCache.delete(key); routeCache.set(key, e);
    return e;
  }
  let cells = null;
  if (alt === 0) cells = astar(si, sj, gi, gj);
  else {
    // tentativi su anelli di celle intorno all'obiettivo (target irraggiungibile
    // esatto -> punto navigabile alternativo)
    const R = alt;
    const MAX_TRY = 20; // budget: un obiettivo disconnesso non puo' bruciare
    let best = null, tries = 0;
    for (let r = 1; r <= R && !best && tries < MAX_TRY; r++) {
      for (let i = gi - r; i <= gi + r && !best && tries < MAX_TRY; i++) {
        for (const j of [gj - r, gj + r]) {
          if (i < 0 || j < 0 || i >= GW || j >= GW) continue;
          if (!navGrid().walk[j * GW + i]) continue;
          tries++;
          const p = astar(si, sj, i, j);
          if (p) { best = p; break; }
        }
      }
      for (let j = gj - r + 1; j <= gj + r - 1 && !best && tries < MAX_TRY; j++) {
        for (const i of [gi - r, gi + r]) {
          if (i < 0 || j < 0 || i >= GW || j >= GW) continue;
          if (!navGrid().walk[j * GW + i]) continue;
          tries++;
          const p = astar(si, sj, i, j);
          if (p) { best = p; break; }
        }
      }
    }
    cells = best;
  }
  e = cells;
  if (routeCache.size >= CACHE_CAP) {
    const first = routeCache.keys().next().value;
    routeCache.delete(first);
  }
  routeCache.set(key, e);
  return e;
}

/**
 * Pianifica un percorso realmente percorribile da (x0,z0) a (x1,z1).
 *  - points: waypoint smussati (primo = posizione attuale, ultimo = destinazione)
 *  - exact : la destinazione richiesta era essa stessa navigabile
 *  - ok    : esiste un percorso (anche alternativo) fino a un punto valido
 * Nessun RNG: due chiamate identiche restituiscono lo stesso percorso.
 */
/**
 * Pianifica un percorso realmente percorribile da (x0,z0) a (x1,z1).
 *  - points: waypoint smussati (primo = posizione attuale, ultimo = destinazione)
 *  - exact : la destinazione richiesta era essa stessa navigabile
 *  - ok    : esiste un percorso (anche alternativo) fino a un punto valido
 * Nessun RNG: due chiamate identiche restituiscono lo stesso percorso.
 *
 * NOTA: la navigabilita' di una cella e' piu' severa del pointFree dell'agente
 * (INFLATE include mezza diagonale cella). Usare cellOf() su un punto che e'
 * libero per l'agente ma non per la griglia produce un A* che si rifiuta subito
 * e finisce nel fallback ad anelli: snapStart/snapGoal DEVONO essere celle
 * realmente percorribili, altrimenti ogni ripianificazione costa decine di A*.
 */
export function planRoute(x0, z0, x1, z1) {
  const exact = pointFree(x1, z1) && cellFree(x1, z1);
  const snapGoal = exact ? cellOf(x1, z1) : nearestWalkable(x1, z1, 14);
  if (!snapGoal) return { points: [], ok: false, exact: false, goal: { x: x1, z: z1 } };
  const snapStart = cellFree(x0, z0) ? cellOf(x0, z0) : nearestWalkable(x0, z0, 4);
  if (!snapStart) return { points: [], ok: false, exact, goal: exact ? { x: x1, z: z1 } : { x: snapGoal.x, z: snapGoal.z } };
  const finalGoal = exact ? { x: x1, z: z1 } : { x: snapGoal.x, z: snapGoal.z };

  // Percorso dritto quando e' realmente dritto-percorribile (caso dominante:
  // costa una segmentClear, non un A*). Verificato dalla POSIZIONE REALE, che
  // e' il primo segmento che l'NPC percorre davvero.
  if (segmentClear(x0, z0, snapGoal.x, snapGoal.z)) {
    const out = [{ x: x0, z: z0 }];
    if (Math.hypot(snapGoal.x - x0, snapGoal.z - z0) > NAV_CELL) out.push({ x: snapGoal.x, z: snapGoal.z });
    if (exact) out.push({ x: x1, z: z1 });
    return { points: dedupe(out), ok: true, exact, goal: finalGoal };
  }

  const cells = cachedCells(snapStart.i, snapStart.j, snapGoal.i, snapGoal.j, 0)
    ?? cachedCells(snapStart.i, snapStart.j, snapGoal.i, snapGoal.j, 6);
  if (!cells) return { points: [], ok: false, exact, goal: finalGoal };
  const pts = smooth(cells);
  const out = [{ x: x0, z: z0 }];
  for (const p of pts) {
    if (Math.hypot(p.x - out[out.length - 1].x, p.z - out[out.length - 1].z) < NAV_CELL * 0.9) continue;
    out.push(p);
  }
  if (exact) out.push({ x: x1, z: z1 });
  return { points: dedupe(out), ok: true, exact, goal: finalGoal };
}

/** conversione posizione -> centro cella (sempre navigabile-free per costruzione) */
function cellOf(x, z) {
  const i = Math.floor((x - GOX) / NAV_CELL);
  const j = Math.floor((z - GOX) / NAV_CELL);
  return { x: cellX(i), z: cellX(j), i, j };
}

function dedupe(pts) {
  const out = [];
  for (const p of pts) {
    const last = out[out.length - 1];
    if (last && Math.hypot(p.x - last.x, p.z - last.z) < 1e-6) continue;
    out.push(p);
  }
  return out;
}

/** true se esiste un percorso (usato per scartare destinazioni irraggiungibili). */
export function routeReachable(x0, z0, x1, z1) {
  return planRoute(x0, z0, x1, z1).ok;
}

// =============================================================================
// LIVELLO SEMANTICO (invariato nell'interfaccia: waypoint = nomi dei luoghi)
// =============================================================================

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
const MARGIN = 0.15;

function pointClearance(x, z, colliders) {
  let minClear = 0;
  for (const c of colliders) {
    const cx = Math.max(c.minX, Math.min(x, c.maxX));
    const cz = Math.max(c.minZ, Math.min(z, c.maxZ));
    if (cx === x && cz === z) {
      const d = Math.min(x - c.minX, c.maxX - x, z - c.minZ, c.maxZ - z) + AGENT_R;
      if (d > minClear) minClear = d;
    } else {
      const d = AGENT_R - Math.hypot(x - cx, z - cz);
      if (d > minClear) minClear = d;
    }
  }
  return minClear;
}

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

/**
 * Validazione boot: nodi e archi devono appartenere alla rete navigabile.
 * - nodeViolations: nodo la cui cella griglia NON e' libera (impossibile da
 *   raggiungere come destinazione esatta).
 * - edgeViolations: arco il cui segmento non e' percorribile (segmentClear).
 * Report, mai throw.
 */
export function validateNav(colliders) {
  const cols = colliders ?? buildColliders();
  ensureIndex();
  const nodeViolations = [];
  const edgeViolations = [];
  for (const [k, n] of Object.entries(WORLD.nodes)) {
    if (pointClearance(n.x, n.z, cols) > 0) nodeViolations.push(k);
    // il nodo deve cadere su una cella libera della rete (clearance >= INFLATE
    // piu' mezza cella): altrimenti il percorso si fermerebbe al largo del nodo
    const c = cellIndex(n.x, n.z);
    if (c < 0 || !navGrid().walk[c]) { if (!nodeViolations.includes(k)) nodeViolations.push(k + '(cell)'); }
  }
  for (const [a, b] of WORLD.edges) {
    const na = WORLD.nodes[a], nb = WORLD.nodes[b];
    if (!na || !nb) continue;
    if (!segmentClear(na.x, na.z, nb.x, nb.z)) edgeViolations.push(`${a}-${b}`);
  }
  return { nodeViolations, edgeViolations };
}
