// Combattimento del giocatore. NESSUN KILL SCRIPTATO: l'esito nasce da un
// test sistemico contro la prontezza del bersaglio, con il RNG della sim
// (chi chiama passa il draw: nessun Math.random nello stato simulativo).
//
// Colpo mancato -> evento 'assault' (ground truth al journal) + percezione da
// parte del BERSAGLIO secondo i sensi disponibili (vista, altrimenti udito
// ravvicinato). Chi non era nei paraggi non impara nulla: nessun knowledge
// leak. Reazione: allarme (credenza a gravità piena) + deviazione di routine
// per un periodo (il bersaglio smette di fare il suo turno).
import { canSee, hearPoint, identifyActor } from './perception.js';
import { makeBelief, mergeBelief } from './knowledge.js';
import { memorize } from './npc.js';
import { nearestNode } from '../world/navigation.js';

export const MELEE_RANGE = 1.9;
const SWING_RADIUS = 10; // udito del colpo mancato (breve, senza muri davanti)
const SHIFT_SECONDS = 120; // quanto dura la deviazione di routine

function publish(sim, type, data) {
  const ev = sim.journal.append(type, { t: sim.t, ...data });
  sim.unseen.push(ev);
  return ev;
}

// Probabilità di COLPIRE: chi ti ha già visto in arrivo schiva (awareness),
// e chi e' gia' in allerta/ricerca e' pronto. Resta un numero in (0,1):
// il colpo non e' mai certo, ma nemmeno mai "deciso a monte".
export function hitChance(target) {
  const aw = Math.min(1, target.awareness ?? 0);
  const ready = (target.state === 'alerted' || target.state === 'curious') ? 0.2 : 0;
  const c = 0.9 - 0.55 * aw - ready;
  return Math.max(0.05, Math.min(0.95, c));
}

// Tenta il melee su `target`. `roll` = draw del RNG della sim
// (sim.rng.next()): esito deterministico in funzione dello stato, reversibile
// a parita' di stato. Ritorna {hit:true} oppure
// {hit:false, ev, perceived, alarm}.
export function attemptMelee(sim, player, target, roll) {
  if (!target || target.state === 'dead') return { hit: false, reason: 'no-target' };
  const r = roll === undefined ? sim.rng.next() : roll;
  if (r < hitChance(target)) return { hit: true };

  // colpo mancato: verita' registrata dove e' avvenito il colpo (il
  // bersaglio vede/sente L'AGGRESSIONE, non se stesso), poi percetta solo
  // da chi ha i sensi per percepirlo
  const ev = publish(sim, 'assault', {
    severity: 0.85, x: player.x, z: player.z,
    actorId: 'player', victimId: target.id,
    place: nearestNode(player.x, player.z)
  });
  const perceived = perceiveSwing(sim, target, ev);
  const alarm = perceived && target.beliefs.has(ev.id);
  if (alarm) deviateRoutine(target, sim.t);
  return { hit: false, ev, perceived, alarm };
}

// Il bersaglio percepisce il tentativo COGLIENDO i propri sensi:
//  - vista (cono+LOS; a <1.2m il cono non conta: il colpo e' in faccia);
//  - se non vede, l'udito ravvicinato dello scontro.
// Nessun canale "gratuito": se entrambi falliscono, il bersaglio non sa nulla.
function perceiveSwing(sim, target, ev) {
  const r = canSee(target, ev.x, ev.z, sim.colliders, sim.rng);
  let channel, conf, px, pz, error = null, w = null;
  const dist = Math.hypot(target.x - ev.x, target.z - ev.z);
  if (r.seen) {
    channel = 'seen'; conf = r.confidence; px = r.px; pz = r.pz; error = r.error;
  } else {
    const h = hearPoint(target, ev.x, ev.z, SWING_RADIUS, sim.colliders, sim.rng);
    if (!h.heard) return false;
    channel = 'heard'; conf = h.confidence; px = h.px; pz = h.pz; w = h.w;
  }
  const res = mergeBelief(target.beliefs, ev.id, makeBelief({
    kind: 'assault', severity: ev.severity, px, pz, place: ev.place,
    subject: ev.victimId ?? null,
    // identità SOLO se colto con la vista: l'udito non dice mai chi era
    actor: channel === 'seen' ? identifyActor(target, ev, dist, conf) : 'sconosciuto',
    channel, confidence: conf, t: sim.t, error, w, provenance: []
  }), target.id);
  if (res === 'ignored') return false;
  memorize(target, ev.id);
  return true;
}

// Deviazione di routine: per SHIFT_SECONDS il bersaglio NON torna alla sua
// agenda/schedulazione abituale (si rifugia a casa/sul proprio nodo).
export function deviateRoutine(npc, t) {
  const node = npc.home ?? (npc.schedule && npc.schedule[0] ? npc.schedule[0].node : null)
    ?? (npc.agenda[0] ? npc.agenda[0].node : null);
  if (!node) return false;
  npc.routineShift = { until: +(t + SHIFT_SECONDS).toFixed(3), node };
  return true;
}
