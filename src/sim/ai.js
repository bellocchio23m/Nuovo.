import { WORLD } from '../world/mapData.js';
import { findPath, nearestNode, arrivalRadius } from '../world/navigation.js';
import { makeBelief, mergeBelief, effectiveConfidence, CONF_MIN } from './knowledge.js';
import { memorize, bondOf, infoFactorOf, mournOf, relTypeOf, REL_TYPES } from './npc.js';
import { policeThink } from './police.js';

// Pipeline: BELIEF (proprie) -> UTILITY/DECISION -> ACTION.
// Invariante: ctx NON contiene il journal. Unico input: npc.beliefs.
// ctx: {t, npcs, navAdj, rng, dtThink, stats, nearby, player, playerStealth,
//       colliders, corpsesNear, onGossip, onWitnessExtra}
const REACT_SEV = 0.4;
const REACT_CONF = 0.3;

// Luogo grossolano per il passaparola: i dettagli precisi si perdono a ogni
// "sentito dire" (road_12 -> 'strada', b4_3 -> 'casa', ...).
const PLACE_GROUP = [
  ['road_', 'strada'], ['vic_', 'vicolo'], ['north_', 'vicolo'],
  ['pia_', 'piazza'], ['sq_', 'piazzale'],
  ['b4', 'casa'], ['b5', 'casa'], ['apt', 'palazzo'],
  ['bar_', 'bar'], ['svc_', 'deposito'], ['court', 'corte']
];
export function coarsePlace(p) {
  for (const [pre, name] of PLACE_GROUP) if (p.startsWith(pre)) return name;
  return p;
}

// Orologio di gioco deterministico: deriva SOLO da sim.t (serializzato).
// DAY=600s (10 min reali) -> 24 ore; giornata inizia alle 08:00.
export const DAY_SECONDS = 600;
export function worldHour(t) {
  return (8 + (t * 24) / DAY_SECONDS) % 24;
}

// Blocco orario attivo (blocco che attraversa la mezzanotte ammesso).
// Nessun blocco -> null (il chiamante usa la casa).
function scheduleBlock(npc, hour) {
  for (const b of npc.schedule) {
    if (b.from <= b.to) { if (hour >= b.from && hour < b.to) return b; }
    else if (hour >= b.from || hour < b.to) return b;
  }
  return null;
}

// Applica la routine oraria: al cambio di blocco l'agenda viene ricostruita
// sul nodo del blocco. Le interruzioni event-driven (alerted/curious) tornano
// alla routine al termine, perche' lo stato e' gia' rientrato in dwell/walk.
export function applySchedule(npc, t, rng) {
  // Deviazione di routine (es. agguato fallito su questo NPC): per tutto il
  // periodo il NPC resta sul proprio nodo di rifugio e NON riapplica la
  // schedulazione abituale. Scaduto il tempo, la routine riprende da capo.
  if (npc.routineShift) {
    if (t >= npc.routineShift.until) npc.routineShift = null;
    else {
      const node = npc.routineShift.node;
      if (npc.agendaBlock !== node) {
        npc.agendaBlock = node;
        npc.agenda = [{ node, dwell: 20 }];
        npc.agendaIdx = 0;
        npc.path = []; npc.pathIdx = 0;
        npc.state = 'dwell'; npc.dwellLeft = 0.3;
      }
      return;
    }
  }
  if (!npc.schedule || !npc.schedule.length) return; // sintetici/legacy
  const hour = worldHour(t);
  const blk = scheduleBlock(npc, hour);
  const node = blk ? blk.node : (npc.home ?? npc.schedule[0].node);
  if (npc.agendaBlock === node) return;
  npc.agendaBlock = node;
  // soggiorno nel nodo: piu' lungo nei blocchi sociali (incontri, conversazioni)
  const social = blk && (blk.kind === 'social');
  const dwell = Math.round((social ? 25 : 15) + (rng ? rng.next() : 0) * 10);
  npc.agenda = [{ node, dwell }];
  npc.agendaIdx = 0;
  // rientro/ cambio blocco a meta-percorso: fermati e riparti verso il nuovo
  // nodo (nessun teletrasporto, solo rigenerazione del path al prossimo think)
  if (npc.state === 'walk' || npc.path.length) { npc.path = []; npc.pathIdx = 0; }
  npc.state = 'dwell';
  npc.dwellLeft = 0.3;
}

export function think(npc, ctx) {
  const { t, navAdj, rng } = ctx;
  if (npc.state === 'arrested') return; // in custodia: non decide, non parla

  // 0. Polizia: dovere prima di tutto (usa solo propri beliefs). Non fugge.
  if (npc.role === 'police') {
    policeThink(npc, ctx);
  } else {
    // 1. Reazione civile a credenze gravi: fuga dalla posizione PERCEPITA.
    for (const [evId, b] of npc.beliefs) {
      if (npc.alertedBy === evId) continue;
      const conf = effectiveConfidence(b, t);
      if (b.severity >= REACT_SEV && conf >= REACT_CONF) {
        npc.alertedBy = evId;
        const mourn = mournOf(npc, b.subject);
        if (mourn) npc.mournT = t + mourn;
        // aiuto: se la vittima mi era cara (famiglia/amico) corro a controllare
        // la posizione PERCEPITA invece di scappare lontano
        if (mourn >= 300 && conf >= 0.4) {
          npc.state = 'curious';
          npc.gotoX = b.px; npc.gotoZ = b.pz;
          npc.dwellLeft = 4;
          return;
        }
        npc.state = b.channel === 'seen' ? 'alerted' : 'dwell';
        npc.dwellLeft = 4 + rng.next() * 4;
        let best = null, bd = -1;
        for (const [k, n] of Object.entries(WORLD.nodes)) {
          const d = (n.x - b.px) ** 2 + (n.z - b.pz) ** 2;
          if (d > bd) { bd = d; best = k; }
        }
        npc.fleeNode = best;
        return;
      }
    }
    // 1b. Curiosità: rumori o fatti lievi spingono a controllare (non a fuggire).
    if (npc.state !== 'alerted' && npc.state !== 'curious') {
      for (const [evId, b] of npc.beliefs) {
        if (npc.alertedBy === evId) continue;
        const conf = effectiveConfidence(b, t);
        if (conf >= 0.25 && (b.kind === 'noise' || b.severity < REACT_SEV)) {
          npc.alertedBy = evId;
          npc.gotoX = b.px; npc.gotoZ = b.pz;
          npc.state = 'curious';
          break;
        }
      }
    }
  }

  // 2. Gossip con fiducia E tipo di relazione: la confidenza accettata scala
  //    con la trust verso chi parla e con l'affinità (i nemici non si
  //    scambiano voci); una corroborazione indipendente aumenta la trust.
  if (t - npc.gossipAt > 3 && npc.beliefs.size > 0 && npc.role !== 'police') {
    const cands = ctx.nearby(npc, 3.5).filter(o => {
      if (o.id === npc.id || bondOf(npc, o.id) <= 0) return false;
      // ha qualcosa che non so, oppure una lettura diversa dello stesso fatto
      // (es. "incidente" non ancora rivalutato): merita confronto
      return [...npc.beliefs.entries()].some(([k, b2]) => {
        const theirs = o.beliefs.get(k);
        return !theirs || theirs.kind !== b2.kind;
      });
    });
    if (cands.length) {
      cands.sort((a, b) => (bondOf(npc, b.id) - bondOf(npc, a.id)));
      const other = bondOf(npc, cands[0].id) > 0.15 ? cands[0]
        : (rng.next() < 0.4 ? cands[(rng.next() * cands.length) | 0] : null);
      if (other) {
          const cand = [...npc.beliefs.entries()].find(([k, b2]) => {
            const theirs = other.beliefs.get(k);
            return !theirs || theirs.kind !== b2.kind;
          });
          if (cand) {
            const [evId, b] = cand;
            const eff = effectiveConfidence(b, t);
            if (eff >= CONF_MIN) {
              const trust = npc.trust[other.id] ?? 0.5;
              const tail = b.provenance[b.provenance.length - 1];
              const prov = tail === npc.id ? [...b.provenance] : [...b.provenance, npc.id];
              const hadIt = other.beliefs.has(evId);
              // Distorsione del passaparola (RNG seedato): il luogo si fa
              // piu grossolano, la posizione si allarga e l'incertezza cresce;
              // raramente l'attore viene dimenticato. La confidence non tocca.
              let place = b.place, px = b.px, pz = b.pz, actor = b.actor;
              let w = b.w ?? null;
              if (rng.next() < 0.3) {
                place = coarsePlace(b.place);
                px += (rng.next() + rng.next() - 1) * 4;
                pz += (rng.next() + rng.next() - 1) * 4;
                if (w != null) w = +(w + 4).toFixed(2);
              }
              if (actor !== 'sconosciuto' && rng.next() < 0.12) actor = 'sconosciuto';
              const res = mergeBelief(other.beliefs, evId, makeBelief({
                kind: b.kind, severity: b.severity, px, pz,
                place, actor, subject: b.subject ?? null,
                channel: 'hearsay',
                confidence: +(eff * (0.4 + 0.4 * trust) * infoFactorOf(npc, other.id)).toFixed(3), t,
                error: b.error ?? (rng.next() < 0.25 ? 'dettaglio alterato nel passaparola' : null),
                w, moved: !!b.moved,
                provenance: prov
              }), other.id);
            if (res !== 'ignored') {
              memorize(other, evId);
              // corroborazione: ne sapeva già qualcosa da altra fonte -> più fiducia
              if (hadIt) {
                const bump = 0.05 * (REL_TYPES[relTypeOf(other, npc.id)] ?? 0.6);
                other.trust[npc.id] = Math.min(1, (other.trust[npc.id] ?? 0.5) + bump);
              }
              // deriva sociale seedata (tranne famiglia/nemici): le relazioni
              // non sono deterministiche, ma solo via RNG serializzato
              const ot = relTypeOf(other, npc.id);
              if (ot !== 'family' && ot !== 'enemy') {
                const d = (rng.next() - 0.5) * 0.06;
                const cur = npc.relations[other.id] ?? 0.3;
                npc.relations[other.id] = Math.max(0, Math.min(1, +(cur + d).toFixed(4)));
              }
              npc.gossipAt = t; other.gossipAt = t;
              // stato "talk": due NPC in relazione si sono fermati a parlare
              // (usato dalla presentazione; serializzato, non è un livello FSM)
              npc.talkT = t; other.talkT = t;
              ctx.stats.gossipOps++;
              ctx.onGossip?.(npc, other, evId);
            }
          }
        }
      }
    }
  }

  // 3. Routine: agenda ciclica. Il lutto rallenta (dwell più lunghi).
  if (npc.state === 'alerted') return;
  if (npc.state === 'curious') return; // movimento goto, gestito dalla sim
  if (npc.state === 'walk' || npc.state === 'dwell' || npc.state === 'idle') {
    applySchedule(npc, t, rng); // routine oraria (no-op senza schedule)
    const step = npc.agenda[npc.agendaIdx % npc.agenda.length];
    if (npc.state !== 'walk') {
      const mourn = npc.mournT && t < npc.mournT ? 0.6 : 1;
      npc.dwellLeft -= ctx.dtThink * mourn;
      // evitamento sociale: un nemico nelle vicinanze (percepibile localmente)
      // mi fa lasciare il posto prima, senza bisogno di nessuna verità globale
      if (npc.dwellLeft > 0.4) {
        for (const o of ctx.nearby(npc, 4)) {
          if (relTypeOf(npc, o.id) === 'enemy') { npc.dwellLeft = 0.4; break; }
        }
      }
      if (npc.dwellLeft <= 0) {
        const from = nearestNode(npc.x, npc.z);
        npc.path = findPath(navAdj, from, step.node);
        npc.pathIdx = 0;
        const n0 = WORLD.nodes[npc.path[0]];
        if (n0 && Math.hypot(n0.x - npc.x, n0.z - npc.z) < 1.5) npc.pathIdx = 1;
        npc.state = 'walk';
        ctx.stats.pathComputations++;
      }
    }
  }
}

// Avanzamento lungo il path. A esaurimento: agenda avanza, dwell dello step.
export function stepAlongPath(npc, dt, speed) {
  if (npc.pathIdx >= npc.path.length) {
    const step = npc.agenda[npc.agendaIdx % npc.agenda.length];
    npc.agendaIdx++;
    npc.state = 'dwell';
    npc.dwellLeft = step.dwell;
    return;
  }
  const n = WORLD.nodes[npc.path[npc.pathIdx]];
  const dx = n.x - npc.x, dz = n.z - npc.z;
  const d = Math.hypot(dx, dz);
  if (d < arrivalRadius(npc.path[npc.pathIdx])) { npc.pathIdx++; return; }
  const v = Math.min(speed, d / dt);
  npc.x += (dx / d) * v * dt; npc.z += (dz / d) * v * dt;
  npc.yaw = Math.atan2(dx, dz);
  npc.speed = v;
}

// Steering diretto verso un punto (curious/inseguimento). Ritorna true se arrivato.
export function stepToward(npc, tx, tz, dt, speed) {
  const dx = tx - npc.x, dz = tz - npc.z;
  const d = Math.hypot(dx, dz);
  if (d < 1.0) { npc.speed = 0; return true; }
  const v = Math.min(speed, d / dt);
  npc.x += (dx / d) * v * dt; npc.z += (dz / d) * v * dt;
  npc.yaw = Math.atan2(dx, dz);
  npc.speed = v;
  return false;
}
