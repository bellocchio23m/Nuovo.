// Rumore: un solo canale per tutti gli eventi sonori (passi, fischio, colpo,
// crollo). Il rumore e' VERITA' al journal (e' successo davvero) ma dal lato
// degli NPC è UNA SOLA credenza 'heard' con posizione udita: nessun'offerta
// visiva (i muri contano: hearPoint dimezza la portata) e MAI identità —
// "qualcuno ha fatto rumore", non "l'uomo in verde".
import { hearPoint } from './perception.js';
import { makeBelief, mergeBelief } from './knowledge.js';
import { memorize } from './npc.js';
import { nearestNode } from '../world/navigation.js';

export const FOOTSTEP_RADIUS = 6;   // metri: passi in corsa su pavimento duro
const STEP_PERIOD = 0.55;           // secondi di gioco tra due pedate

// Pubblica un rumore e restituisce quanti NPC lo hanno percepito.
// Nessun accesso al journal da parte degli NPC: qui registriamo solo la
// verità e offriamo l'udito a chi e' abbastanza vicino.
export function emitNoise(sim, x, z, radius, severity) {
  const place = nearestNode(x, z);
  sim.journal.append('noise', { t: sim.t, severity, x, z, actorId: null, place });
  const evId = `noise-${sim.t.toFixed(1)}-${Math.round(x)}-${Math.round(z)}`;
  let learned = 0;
  for (const npc of sim.npcs) {
    if (npc.state === 'dead') continue;
    const h = hearPoint(npc, x, z, radius, sim.colliders, sim.rng);
    if (!h.heard) continue;
    const res = mergeBelief(npc.beliefs, evId, makeBelief({
      kind: 'noise', severity, px: h.px, pz: h.pz, place,
      actor: 'sconosciuto', // l'udito non rivela mai chi fosse
      channel: 'heard', confidence: h.confidence,
      t: sim.t, w: h.w, provenance: []
    }), npc.id);
    if (res !== 'ignored') { memorize(npc, evId); learned++; }
  }
  return learned;
}

// Passi del giocatore. Chiamato da simTick; derivazione pura da sim.t (nessun
// contatore di stato): identico dopo save/load, nessun campo da serializzare.
// correre -> pedate udibili; accovacciato/camminando -> silenzio.
export function footstepTick(sim, player, dt) {
  if (!player.running || player.crouch) return 0;
  const i1 = Math.floor(sim.t / STEP_PERIOD);
  const i0 = Math.floor((sim.t - dt) / STEP_PERIOD);
  if (i1 === i0) return 0;
  return emitNoise(sim, player.x, player.z, FOOTSTEP_RADIUS, 0.25);
}
