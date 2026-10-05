// Percezione CONTINUA del player da parte degli NPC.
//
// Prima di questo modulo il player era percepibile SOLO attraverso gli eventi
// del journal: un civile poteva guardarti in piedi sopra un cadavere senza
// formare alcuna credenza, e crouch/copertura/corsa non avevano effetto su
// nessuno se non sulla polizia (unica chiamata di playerSpotted).
//
// Ora l'attenzione si accumula (`awareness`) finché il player resta in vista;
// oltre soglia nasce una credenza PARZIALE su "qualcuno nell'area", con
// identità SOLO se riconosciuta a distanza ravvicinata.
//
// Vincoli epistemici:
//  - nessuna conoscenza senza sguardo reale (playerSpotted: cono+LOS+portata);
//  - posizione PERCEPITA con rumore, mai le coordinate vere del player;
//  - l'identità "uomo in verde" solo entro RECOGNIZE_RANGE (oltre: ignoto);
//  - nessun accesso al journal: questa è percezione, non un evento di verità.
import { playerSpotted } from './perception.js';
import { makeBelief, mergeBelief } from './knowledge.js';
import { memorize } from './npc.js';
import { nearestNode } from '../world/navigation.js';

const DECAY = 0.30;          // per secondo, fuori vista
const SUSPECT_AT = 0.5;      // soglia credenza
const RECOGNIZE_RANGE = 8;   // entro: riconosce l'agente
const BUCKET_S = 10;         // stessa finestra temporale -> stessa credenza
const SEVERITY = 0.35;       // < REACT_SEV(0.4): incuriosisce, non fa fuggire

// Chiamato UNA volta per tick da simTick (sim.rng -> determinismo).
export function awarenessTick(sim, player, dt) {
  for (const n of sim.npcs) {
    if (n.state === 'dead' || n.level === 'L3') continue;
    const sp = playerSpotted(n, player, sim.colliders);
    if (!sp.seen) {
      if (n.awareness) n.awareness = Math.max(0, n.awareness - DECAY * dt);
      continue;
    }
    const d = Math.hypot(player.x - n.x, player.z - n.z);
    // piu' vicino, meno nascosto, piu' in corsa -> l'attenzione sale piu' in fretta
    let rate = 0.5 * (1 - Math.min(1, d / 22));
    if (player.crouch) rate *= 0.45;
    if (player.running) rate *= 1.9;
    n.awareness = Math.min(1, (n.awareness ?? 0) + Math.max(0.06, rate) * dt);
    if (n.awareness >= SUSPECT_AT) learnSpot(sim, n, player, d, sp);
  }
}

function learnSpot(sim, n, player, d, sp) {
  const place = nearestNode(player.x, player.z);
  const evId = `spot-${place}-${Math.floor(sim.t / BUCKET_S)}`;
  const noise = 0.4 + (d / 22) * 1.6;
  const ex = (sim.rng.next() + sim.rng.next() - 1) * noise;
  const ez = (sim.rng.next() + sim.rng.next() - 1) * noise;
  const recognized = d <= RECOGNIZE_RANGE;
  const res = mergeBelief(n.beliefs, evId, makeBelief({
    kind: 'suspicion', severity: SEVERITY,
    px: player.x + ex, pz: player.z + ez, place,
    actor: recognized ? 'uomo in verde' : 'sconosciuto',
    channel: 'seen', confidence: sp.confidence * (recognized ? 1 : 0.85),
    t: sim.t, error: recognized ? null : 'non l\'ho riconosciuto',
    provenance: []
  }), n.id);
  if (res !== 'ignored') memorize(n, evId);
}

// Il player "e' stato notato"? Solo per feedback UI, mai come fonte di verità.
export function awarenessLevel(n) {
  return n.awareness ?? 0;
}
