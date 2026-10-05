import { losBlocked } from '../world/world.js';
import { makeBelief, mergeBelief, CONF_MIN } from './knowledge.js';
import { memorize } from './npc.js';

export const SIGHT_RANGE = 15;
const HALF_FOV = Math.PI / 3; // 60°
// Identità percepita: SOLO con evidenza sufficiente (abbastanza vicino e con
// buona confidence). Oltre resta 'sconosciuto': vedere "qualcuno" non dice chi.
// Gli ID interni degli NPC non vengono MAI esposti come identità.
export const IDENT_RANGE = 8;
const IDENT_CONF = 0.5;
// Osservazione ravvicinata prolungata di un evento già appreso: solo dopo
// questo tempo di sguardo l'identità (inizialmente ignota) diventa evidenza.
export const IDENT_GAZE = 0.4;
export function identifyActor(observer, ev, dist, conf) {
  if (ev.actorId === 'player' && dist <= IDENT_RANGE && conf >= IDENT_CONF) return 'uomo in verde';
  return 'sconosciuto';
}
// Fissazione: serve un minimo di osservazione continua (in cono+LOS a ogni
// tick della finestra) prima di imparare. Nessun apprendimento "al primo
// colpo d'occhio". Chi e' gia' attento (sospetto/indagine) fissa piu' in fretta.
export const GAZE_LEARN = 0.3; // secondi di gioco (~6 tick)
export const GAZE_FAST = 0.1;  // secondi di gioco se gia' attento

// Test percettivo: l'osservatore vede il punto (px,pz)?
// Ritorna {seen, confidence, error, px, pz}: (px,pz) è la posizione PERCEPITA
// (vera + rumore gaussiano che cresce con la distanza). Oltre 10m il dettaglio
// può essere sbagliato. Nessun accesso a strutture globali: solo geometria.
export function canSee(obs, px, pz, colliders, rng) {
  const dx = px - obs.x, dz = pz - obs.z;
  const dist2 = dx * dx + dz * dz;
  if (dist2 > SIGHT_RANGE * SIGHT_RANGE) return { seen: false }; // pre-check economico
  const dist = Math.sqrt(dist2);
  if (dist > 1.2) {
    let ang = Math.atan2(dx, dz) - obs.yaw;
    while (ang > Math.PI) ang -= 2 * Math.PI;
    while (ang < -Math.PI) ang += 2 * Math.PI;
    if (Math.abs(ang) > HALF_FOV) return { seen: false };
  }
  if (losBlocked(obs.x, obs.z, px, pz, colliders)) return { seen: false };
  const confidence = Math.max(0.35, 1 - dist / (SIGHT_RANGE * 1.4));
  // rumore di localizzazione: ~0.3m vicino, ~2m al limite del raggio
  const noise = 0.3 + (dist / SIGHT_RANGE) * 1.7;
  const ex = (rng.next() + rng.next() - 1) * noise;
  const ez = (rng.next() + rng.next() - 1) * noise;
  let error = null;
  if (dist > 10 && rng.next() < 0.35) {
    error = rng.pick(['ora sbagliata', 'luogo impreciso', 'dettaglio confuso']);
  }
  return { seen: true, confidence, error, px: px + ex, pz: pz + ez };
}

// Offre un evento del journal alla percezione di un NPC. Se visto, ACCUMULA
// fissazione (npc.gaze[evId]); solo dopo la soglia crea la credenza 'seen'
// con posizione percepita (NON coordinate vere) e registra il testimone.
// Integrita': memory.push SOLO se il merge ha successo.
// Ritorna 'learned' | 'unseen'. dt = passo della sim (default backward-compat).
export function observeEvent(npc, ev, colliders, rng, t, journal, dt = 0.05) {
  const dist = Math.hypot(npc.x - ev.x, npc.z - ev.z);
  const r = canSee(npc, ev.x, ev.z, colliders, rng);
  if (npc.memory.includes(ev.id)) {
    // Identità NON regalata: ho già colto cosa è successo, ma "chi" resta
    // ignoto finché non guardo abbastanza da vicino a lungo (IDENT_GAZE).
    if (r.seen && ev.actorId) {
      if (!npc.gaze) npc.gaze = {};
      npc.gaze[ev.id] = (npc.gaze[ev.id] ?? 0) + dt;
      const b = npc.beliefs.get(ev.id);
      if (b && b.actor === 'sconosciuto' && npc.gaze[ev.id] >= IDENT_GAZE) {
        const ided = identifyActor(npc, ev, dist, r.confidence);
        if (ided !== 'sconosciuto') { b.actor = ided; delete npc.gaze[ev.id]; }
      }
    }
    return 'unseen';
  }
  if (!r.seen) {
    // fuori cono/LOS: lo sguardo sfuma ma non azzeriamo istantaneamente
    if (npc.gaze) npc.gaze[ev.id] = (npc.gaze[ev.id] ?? 0) * 0.5;
    return 'unseen';
  }
  if (!npc.gaze) npc.gaze = {};
  const thr = (npc.state === 'alerted' || npc.state === 'curious') ? GAZE_FAST : GAZE_LEARN;
  const g = (npc.gaze[ev.id] ?? 0) + dt;
  npc.gaze[ev.id] = g;
  if (g < thr) return 'unseen'; // fissazione non matura: nessun apprendimento
  const res = mergeBelief(npc.beliefs, ev.id, makeBelief({
    kind: ev.type, severity: ev.severity, px: r.px, pz: r.pz,
    place: ev.place,
    // identità solo con evidenza sufficiente (abbastanza vicino): vedere
    // "qualcuno commettere un fatto" non dice ancora chi sia
    actor: identifyActor(npc, ev, dist, r.confidence),
    subject: ev.victimId ?? null,
    // fissazione: leggermente piu' fermo di un colpo d'occhio singolo
    channel: 'seen', confidence: Math.min(1, r.confidence + 0.05),
    t, error: r.error, w: +(0.5 + dist * 0.3).toFixed(2), moved: !!ev.moved,
    provenance: []
  }), npc.id);
  if (res === 'ignored') return 'unseen';
  if (r.confidence < CONF_MIN) return 'unseen';
  delete npc.gaze[ev.id]; // appreso: l'attenzione su questo evId non serve piu'
  memorize(npc, ev.id);
  journal.addWitness(ev, npc.id);
  return 'learned';
}

// Udito: rumore percepito entro il raggio senza bisogno di LOS/cono.
// Muri dimezzano la portata. Ritorna {heard, confidence, px, pz}.
export function hearPoint(obs, px, pz, radius, colliders, rng) {
  const dx = px - obs.x, dz = pz - obs.z;
  const dist = Math.hypot(dx, dz);
  let r = radius;
  if (losBlocked(obs.x, obs.z, px, pz, colliders)) r *= 0.5;
  if (dist > r) return { heard: false };
  const confidence = Math.max(0.3, 1 - dist / (r * 1.3));
  const noise = 1 + dist * 0.15;
  return {
    heard: true, confidence,
    px: px + (rng.next() + rng.next() - 1) * noise,
    pz: pz + (rng.next() + rng.next() - 1) * noise,
    // incertezza posizionale dell'udito: molto piu' grossolana della vista
    w: +(1 + dist * 0.5).toFixed(2)
  };
}

// Il giocatore è visto da questo NPC? Stessi sensi (cono+LOS), portata
// ridotta se accovacciato; correre rende vistosi anche fuori cono (ma vicino).
// player: {x,z,crouch,running}
export function playerSpotted(npc, player, colliders) {
  const range = player.crouch ? 7 : 15;
  const dx = player.x - npc.x, dz = player.z - npc.z;
  const dist = Math.hypot(dx, dz);
  if (dist > range && !(player.running && dist < 10)) return { seen: false };
  if (dist > 1.2) {
    let ang = Math.atan2(dx, dz) - npc.yaw;
    while (ang > Math.PI) ang -= 2 * Math.PI;
    while (ang < -Math.PI) ang += 2 * Math.PI;
    if (Math.abs(ang) > Math.PI / 3 && !player.running) return { seen: false };
  }
  if (losBlocked(npc.x, npc.z, player.x, player.z, colliders)) return { seen: false };
  return { seen: true, confidence: Math.max(0.4, 1 - dist / 20) };
}
