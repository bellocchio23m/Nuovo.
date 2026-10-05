import { WORLD } from '../world/mapData.js';
import { losBlocked } from '../world/world.js';
import { makeBelief, mergeBelief, effectiveConfidence } from './knowledge.js';
import { memorize } from './npc.js';
import { playerSpotted } from './perception.js';

// Polizia evidence-driven. Usa SOLO npc.beliefs (mai journal/posizioni vere).
// Stati: UNAWARE -> ALERTED -> RESPONDING -> INVESTIGATING -> SEARCHING -> IDENTIFIED -> PURSUING.
// - interview: dovere, non relazione: apprende da civili vicini.
// - description: solo se una credenza indica l'attore ('uomo in verde').
// - catch: accumulo di prossimità mentre il sospetto è in vista.
// - evidence quality: degraded/contradictory/uncertain/false tracked per belief.
const CRIME = new Set(['kill', 'found_corpse', 'corpse', 'sabotage']);

function crimeBeliefs(npc, t) {
  const out = [];
  for (const [id, b] of npc.beliefs) {
    if (!CRIME.has(b.kind)) continue;
    const eff = effectiveConfidence(b, t);
    if (eff >= 0.2) out.push({ id, b, eff });
  }
  out.sort((a, b2) => b2.eff - a.eff);
  return out;
}

export function policeThink(npc, ctx) {
  const { t, rng } = ctx;
  const P = npc.police;

  // 1. interview: civili entro 6m con credenze su crimini che non ho.
  for (const o of ctx.nearby(npc, 6)) {
    if (o.role === 'police' || o.state === 'dead') continue;
    for (const [evId, b] of o.beliefs) {
      if (!CRIME.has(b.kind)) continue;
      // non noto, oppure nota solo come "incidente": il civile puo' avere una
      // lettura rivalutata -> intervista aggiornata (mai loop: se io ho gia'
      // la lettura da crimine, non serve ripetere)
      const mine = npc.beliefs.get(evId);
      if (mine && CRIME.has(mine.kind)) continue;
      const eff = effectiveConfidence(b, t);
      if (eff < 0.25) continue;
      const tail = b.provenance[b.provenance.length - 1];
      const prov = tail === o.id ? [...b.provenance] : [...b.provenance, o.id];
      const res = mergeBelief(npc.beliefs, evId, makeBelief({
        kind: b.kind, severity: b.severity, px: b.px, pz: b.pz,
        place: b.place, actor: b.actor, subject: b.subject ?? null,
        channel: 'hearsay', confidence: +(eff * 0.7).toFixed(3), t,
        error: b.error, moved: !!b.moved, provenance: prov
      }), npc.id);
      if (res !== 'ignored') {
        memorize(npc, evId);
        ctx.stats.gossipOps++;
        ctx.onInterview?.(npc, o, evId);
        break;
      }
    }
  }

  // 2. valutazione stato dalla miglior credenza
  const crimes = crimeBeliefs(npc, t);
  const best = crimes[0];
  const bestEff = best ? best.eff : 0;

  // rumori forti non provano crimini, ma meritano un controllo
  if (!best && npc.state !== 'curious') {
    for (const [evId, b] of npc.beliefs) {
      if (npc.alertedBy === evId) continue;
      if (b.kind === 'noise' && effectiveConfidence(b, t) >= 0.4) {
        npc.alertedBy = evId;
        npc.gotoX = b.px; npc.gotoZ = b.pz;
        npc.state = 'curious';
        if (P.state !== 'ALERTED') { P.state = 'ALERTED'; P.since = t; }
        break;
      }
    }
  }

  // determinazione stato: mappa evidenze -> stati 7 livelli
  const prevState = P.state; // per il callback di transizione sotto
  if (!best) {
    // nessuna evidenza crime: UNAWARE
    if (P.state !== 'UNAWARE') { P.state = 'UNAWARE'; P.since = t; P.confirmed = false; P.catchT = 0; }
  } else if (bestEff >= 0.45 || P.confirmed) {
    // evidenza forte: INVESTIGATING
    if (P.state !== 'INVESTIGATING') { P.state = 'INVESTIGATING'; P.since = t; P.searchX = best.b.px; P.searchZ = best.b.pz; }
    // se ha descrizione "uomo in verde" e vede player -> IDENTIFIED
    const hasDesc = crimes.some(c => c.b.actor === 'uomo in verde');
    const sp = playerSpotted(npc, ctx.playerStealth, ctx.colliders);
    if (hasDesc && sp.seen && !P.confirmed) {
      if (P.state !== 'IDENTIFIED') {
        P.state = 'IDENTIFIED'; P.since = t; P.lastSeenP = t; P.catchT = 0;
      }
    }
  } else if (bestEff >= 0.25) {
    // evidenza media: ALERTED
    if (P.state !== 'ALERTED') { P.state = 'ALERTED'; P.since = t; P.searchX = best.b.px; P.searchZ = best.b.pz; }
  } else if (bestEff >= 0.2) {
    // evidenza debole: SUSPICIOUS (solo se non era giŕ ALERTED/INVESTIGATING)
    if (P.state === 'UNAWARE') { P.state = 'UNAWARE'; P.since = t; }
  }

  // rumore forte indipendente dalla migliore credenza crime (giŀ giŀ gestito sopra)
  // nessuna azione aggiuntiva qui: il rumore giŀ above imposta ALERTED e npc.state='curious'

  if (prevState !== P.state) ctx.onPoliceState?.(npc, prevState, P.state);

  // 3. INVESTIGATING: arrivato sul posto -> ispeziona -> SEARCHING / conferma / IDENTIFIED
  if (P.state === 'INVESTIGATING') {
    const d = Math.hypot(npc.x - P.searchX, npc.z - P.searchZ);
    let corpse = null;
    if (d < 3) {
      // cerco un corpo nella zona: solo percezione fisica di entità 'dead'
      corpse = ctx.corpsesNear(npc.x, npc.z, 9);
      if (corpse) {
        P.confirmed = true;
        P.state = 'SEARCHING'; P.since = t;
        P.searchX = corpse.x; P.searchZ = corpse.z;
        npc.state = 'dwell'; npc.dwellLeft = 2;
      } else if (t - P.since > 25) {
        // niente trovato: declassa a ALERTED (non torna subito a UNAWARE)
        P.state = 'ALERTED'; P.since = t; P.confirmed = false; P.catchT = 0;
        npc.gotoX = null;
      } else if (!npc.gotoX) {
        npc.gotoX = P.searchX; npc.gotoZ = P.searchZ; npc.state = 'curious';
      }
    } else if (Number.isFinite(P.searchX) && npc.gotoX == null) {
      // lontano dal punto investigato: ci va. Senza questo ramo l'ufficiale
      // resta fermo finché il caso non gli passa davanti: la macchina degli
      // stati non arriva mai sulla scena.
      npc.gotoX = P.searchX; npc.gotoZ = P.searchZ;
      npc.state = 'curious';
    }
    // se arrivato a destinazione da un po': controlla IDENTIFIED/SEARCHING
    if (d < 3 && !corpse && t - P.since <= 25) {
      const hasDesc = crimes.some(c => c.b.actor === 'uomo in verde');
      if (hasDesc && P.state !== 'IDENTIFIED') {
        P.state = 'IDENTIFIED'; P.since = t; P.lastSeenP = t; P.catchT = 0;
      } else if (P.state !== 'SEARCHING') {
        P.state = 'SEARCHING'; P.since = t;
      }
    }
  }

  // 4. SEARCHING: piantonamento attorno all'area + descrizione -> inseguimento
  if (P.state === 'SEARCHING') {
    const hasDesc = crimes.some(c => c.b.actor === 'uomo in verde');
    P.pickAt = P.pickAt ?? 0;
    if (hasDesc) {
      const sp = playerSpotted(npc, ctx.playerStealth, ctx.colliders);
      if (sp.seen) {
        const d = Math.hypot(npc.x - ctx.player.x, npc.z - ctx.player.z);
        npc.gotoX = ctx.player.x; npc.gotoZ = ctx.player.z; npc.state = 'curious';
        P.lastSeenP = t;
        if (d < 2.5) {
          P.catchT = (P.catchT ?? 0) + ctx.dtThink;
          if (P.catchT > 4) { ctx.onCaught?.(npc); }
        }
      } else {
        if (t - (P.lastSeenP ?? -99) > 20) {
          // perso di vista: torna a piantonare, poi declassa
          if (t - P.since > 150) { P.state = 'ALERTED'; P.since = t; P.catchT = 0; npc.gotoX = null; }
          else { /* continua searching */ }
        }
      }
    } else {
      // senza descrizione: solo scena del crimine, poi declassa
      if (t - P.since > 120) { P.state = 'ALERTED'; P.since = t; npc.gotoX = null; }
      else { /* wander continuo gestito da sim */ }
    }
  }

  // 5. ARRESTO SULLA SCENA. Il sospetto NON è "il giocatore" per definizione:
  //    è chiunque l'ufficiale VEDA sopra il corpo e resti lì mentre lo guarda.
  //    Chi è stato trascinato lì (esca, corpo occultato scoperto mentre era
  //    ai piedi) resta incastrato: l'arresto segue solo la percezione reale.
  if (P.state === 'SEARCHING' || P.state === 'INVESTIGATING') {
    const body = ctx.corpsesNear(npc.x, npc.z, 6);
    if (body) {
      let seen = null;
      for (const o of ctx.nearby(npc, 6)) {
        if (o.state === 'dead' || o.state === 'arrested' || o.role === 'police') continue;
        if (Math.hypot(o.x - body.x, o.z - body.z) >= 2.5) continue;
        if (losBlocked(npc.x, npc.z, o.x, o.z, ctx.colliders)) continue;
        seen = o; break;
      }
      if (seen) {
        if (P.suspectId !== seen.id) { P.suspectId = seen.id; P.suspectSince = t; }
        else if (t - (P.suspectSince ?? t) >= 4) {
          // abbastanza tempo per essere sicuri: portato via. L'arresto lo
          // applica QUI la polizia (non il callback): il caso si chiude
          // anche senza hook di presentazione.
          P.suspectId = null; P.suspectSince = 0;
          P.state = 'UNAWARE'; P.since = t; P.confirmed = false; P.catchT = 0;
          npc.gotoX = null; npc.state = 'dwell'; npc.dwellLeft = 3;
          seen.state = 'arrested'; seen.speed = 0;
          seen.gotoX = null; seen.gotoZ = null; seen.fleeNode = null;
          ctx.onArrest?.(npc, seen);
        }
      } else if (P.suspectSince && t - P.suspectSince > 6) {
        P.suspectId = null; P.suspectSince = 0;
      }
    }
  }
}