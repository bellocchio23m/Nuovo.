import { WORLD } from '../world/mapData.js';
import { planRoute, navRevision } from '../world/navigation.js';

// =============================================================================
// LOCOMOZIONE: un solo motore per routine, fuga e inseguimento.
// =============================================================================
// Tutti gli stati che si muovono (walk / alerted / curious) condividono:
//   pericolo o obiettivo -> richiesta percorso -> avanzamento lungo i waypoint
//   -> verifica che il percorso sia ancora valido -> arrivo oppure ricalcolo.
// Il percorso vive in npc.path (array di {x,z}), il cui ultimo punto e'
// raggiunto con un raggio di arrivo dedicato (npc.arriveR). Nessuno stato
// calca piu' una destinazione in linea retta: il muro in mezzo e' reale.
// =============================================================================

// Tolleranze di avanzamento (metri)
const WAYPOINT_R = 0.42;      // raggio di raggiungimento di un waypoint intermedio
const STALL_STEP = 0.25;      // finestra di campionamento progresso
const STALL_SLOW = 0.06;      // spostamento minimo nella finestra
const REROUTE_AFTER = 1.0;    // secondi senza progresso -> ricalcolo
const GIVEUP_AFTER = 6.0;     // secondi senza progresso -> arreso (mai loop infinito)

function keyFor(kind, x, z) {
  return `${kind}|${x.toFixed(2)},${z.toFixed(2)}`;
}

/**
 * Garantisce che npc.path sia un percorso valido verso (gx,gz).
 * Ricalcola se: obiettivo cambiato, rete navigabile invalidata, oppure il
 * percorso e' stato invalidato esplicitamente (invalidateRoute).
 * Ritorna il piano ({ok, exact, goal}).
 */
export function routeTo(npc, gx, gz, kind, arriveR) {
  npc.arriveR = arriveR ?? 0.6;
  const key = keyFor(kind, gx, gz);
  const rev = navRevision();
  if (npc.pathGoal === key && npc.pathNavRev === rev) {
    // Rotta gia' pianificata per questo obiettivo (stesso mondo).
    //  - piano negativo -> niente ripianificazione ogni tick (costo A*);
    //  - ma se il percorso e' stato svuotato dall'esterno con un piano ancora
    //    "valido", l'assenza di waypoint non puo' valere come arrivo.
    if (npc.pathOk === false) {
      return { ok: false, exact: npc.pathExact !== false, goal: { x: gx, z: gz } };
    }
    if (npc.path && npc.path.length > 0) {
      return { ok: true, exact: npc.pathExact !== false, goal: { x: gx, z: gz } };
    }
  }
  // Obiettivo DIVERSO -> il contatore di stallo riparte. Un ripianificazione
  // sulla STESSA destinazione (rete invalidata / stall rilevato) lo conserva:
  // solo cosi' GIVEUP_AFTER puo' mai scattare invece di resettarsi per sempre.
  const goalChanged = npc.pathGoal !== key;
  const p = planRoute(npc.x, npc.z, gx, gz);
  npc.path = p.points;
  npc.pathIdx = 0;
  npc.pathOk = p.ok;
  npc.pathNavRev = rev;
  npc.pathExact = p.exact;
  npc.pathGoal = key;
  if (goalChanged) { npc.stuckFor = 0; npc.navT = 0; npc.navX = npc.x; npc.navZ = npc.z; }
  if (p.ok && !p.exact) {
    // destinazione esatta non navigabile: l'NPC va al punto navigabile valido
    // piu' vicino (mai "contro il muro fino a sbloccarsi")
    npc.pathGoal = keyFor(kind, p.goal.x, p.goal.z);
    if (kind === 'goto') { npc.gotoX = p.goal.x; npc.gotoZ = p.goal.z; }
  }
  if (!p.ok) { npc.path = []; npc.pathIdx = 0; }
  return p;
}

/**
 * Invalida il percorso corrente senza toccare l'identita' dell'obiettivo:
 * il prossimo passo ripianificherà. Usato quando il progresso si ferma.
 */
export function invalidateRoute(npc) {
  npc.pathNavRev = -1;
}

/**
 * Avanza lungo npc.path di `dt` secondi a `speed` m/s.
 * Ritorna: 'arrived' | 'moving' | 'stalled'.
 *  - 'stalled' = nessun progresso per troppo tempo: il chiamante deve decidere
 *    (ricalcolo alternativo, nuova destinazione, oppure arrendersi). Non esiste
 *    uno stato che spinga all'infinito contro un ostacolo.
 */
export function advance(npc, dt, speed) {
  if (!npc.path || npc.pathIdx >= npc.path.length) return 'arrived';

  const arriveR = npc.arriveR ?? 0.6;
  // Arrivo controllato sulla DESTINAZIONE a ogni passo, non solo quando il
  // waypoint finale diventa corrente: i waypoint intermedi possono essere
  // oltre il bersaglio (centro cella piu' avanti) e farebbero superare
  // l'obiettivo prima che il raggio di arrivo venga mai valutato.
  const dest = npc.path[npc.path.length - 1];
  if (Math.hypot(dest.x - npc.x, dest.z - npc.z) <= arriveR) {
    npc.pathIdx = npc.path.length;
    npc.speed = 0;
    return 'arrived';
  }

  const wp = npc.path[npc.pathIdx];
  const dx = wp.x - npc.x, dz = wp.z - npc.z;
  const d = Math.hypot(dx, dz);
  const last = npc.pathIdx === npc.path.length - 1;
  const r = last ? arriveR : WAYPOINT_R;
  if (d <= r) {
    npc.pathIdx++;
    if (npc.pathIdx >= npc.path.length) return 'arrived';
    return 'moving';
  }
  const v = Math.min(speed, d / dt);
  npc.x += (dx / d) * v * dt;
  npc.z += (dz / d) * v * dt;
  npc.yaw = Math.atan2(dx, dz);
  npc.speed = v;

  // rilevamento stallo: campiona il progresso ogni STALL_STEP secondi
  npc.navT = (npc.navT ?? 0) + dt;
  if (npc.navT >= STALL_STEP) {
    const moved = Math.hypot(npc.x - (npc.navX ?? npc.x), npc.z - (npc.navZ ?? npc.z));
    npc.stuckFor = moved < STALL_SLOW ? (npc.stuckFor ?? 0) + npc.navT : 0;
    npc.navX = npc.x; npc.navZ = npc.z; npc.navT = 0;
    if (npc.stuckFor > REROUTE_AFTER) invalidateRoute(npc);
    if (npc.stuckFor > GIVEUP_AFTER) return 'stalled';
  }
  return 'moving';
}

/** Il chiamante ha ricevuto 'stalled': forza la decisione di fallback. */
export function abandon(npc) {
  npc.path = [];
  npc.pathIdx = 0;
  npc.pathGoal = null;
  npc.stuckFor = 0;
}

// --- Scelta destinazione di fuga -------------------------------------------

function hashId(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0);
}

/**
 * Candidati a destinazione di fuga: lontani dalla minaccia, ma NON tutti lo
 * stesso punto. Lo scarto e' deterministico (hash dell'identita') e penalizza
 * i nodi gia' presi da altri: una fuga di piu' persone si disperde su piu'
 * uscite invece di collassare in un unico punto.
 */
export function fleeCandidates(npc, threatX, threatZ, occupied) {
  const out = [];
  for (const [k, n] of Object.entries(WORLD.nodes)) {
    const d = Math.hypot(n.x - threatX, n.z - threatZ);
    if (d < 18) continue; // mai "fuggire" verso la minaccia
    const crowd = occupied ? (occupied.get(k) ?? 0) : 0;
    const jitter = (hashId(npc.id + k) % 1000) / 1000 * 5;
    out.push({ id: k, x: n.x, z: n.z, score: d + jitter - 7 * crowd });
  }
  out.sort((a, b) => (b.score - a.score) || (a.id < b.id ? -1 : 1));
  return out;
}

/** Quante persone stanno gia' fuggendo verso ogni nodo (solo vicini, fisico). */
export function fleeOccupancy(near) {
  const m = new Map();
  for (const o of near) {
    if (o.state !== 'alerted' || !o.fleeNode) continue;
    m.set(o.fleeNode, (m.get(o.fleeNode) ?? 0) + 1);
  }
  return m;
}

/**
 * Destinazione di fuga robusta: prova il candidato migliore e, se non e'
 * raggiungibile, scende la lista. Ritorna null se nessuna e' raggiungibile
 * (caso limite: l'NPC si ferma invece di correre contro un muro per sempre).
 */
export function pickFlee(npc, threatX, threatZ, occupied) {
  const cands = fleeCandidates(npc, threatX, threatZ, occupied);
  for (const c of cands.slice(0, 8)) {
    if (planRoute(npc.x, npc.z, c.x, c.z).ok) return c;
  }
  return cands[0] ?? null;
}

/**
 * Ultima spiaggia quando la destinazione scelta e' diventata irraggiungibile:
 * la via d'uscita piu' lontana che e' davvero percorribile da qui. Nessun
 * ciclo: ritorna null solo se il mondo e' letteralmente chiuso.
 */
export function anyReachableFlee(npc) {
  const cands = Object.entries(WORLD.nodes)
    .map(([k, n]) => ({ id: k, x: n.x, z: n.z, d: Math.hypot(n.x - npc.x, n.z - npc.z) }))
    .sort((a, b) => (b.d - a.d) || (a.id < b.id ? -1 : 1));
  for (const c of cands.slice(0, 10)) {
    if (planRoute(npc.x, npc.z, c.x, c.z).ok) return c;
  }
  return null;
}
