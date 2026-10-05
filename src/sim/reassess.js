// Rivalutazione delle morti lette inizialmente come INCIDENTE.
//
// Una morte non evidentemente causata da un'arma viene registrata come
// 'accident' (gravità bassa, la polizia non parte, nessuno "sa" che è un
// delitto). La lettura cambia SOLO quando emergono nuove evidenze percepite:
//   - 'kill' visto direttamente (c'è un testimone del delitto),
//   - 'sabotage' organizzato (la causa è stata preparata da qualcuno).
// La rivalutazione riscrive LA STESSA credenza (stesso evId): non nasce una
// nuova verità dal nulla, ma un'interpretazione più profonda di ciò che si è
// già visto, con confidenza derivata SOLO dalla prova.
import { clampConf, effectiveConfidence } from './knowledge.js';

const EVIDENCE = new Set(['kill', 'sabotage']);

// La prova è legata a quell'incidente? Vittima coincidente, stesso luogo, oppure
// posizioni percepite ravvicinate (entro 12m: il rumore di percezione è lecito).
function links(a, b) {
  if (a.subject && b.subject && a.subject === b.subject) return true;
  if (a.place && b.place && a.place === b.place) return true;
  if (Number.isFinite(a.px) && Number.isFinite(b.px) &&
    Math.hypot(a.px - b.px, a.pz - b.pz) <= 12) return true;
  return false;
}

// Ritorna gli id delle credenze rivalutate (per re-tiering della memoria).
export function reviseAccidents(npc, evId) {
  const cur = npc.beliefs.get(evId);
  if (!cur) return [];
  const changed = [];
  if (cur.kind === 'accident') {
    // prova già presente in memoria (imparata PRIMA della morte)
    for (const [k, b] of npc.beliefs) {
      if (k !== evId && EVIDENCE.has(b.kind) && links(b, cur)) {
        convert(npc, k, b); changed.push(k);
      }
    }
  } else if (EVIDENCE.has(cur.kind)) {
    // nuova prova: rivaluta gli incidenti già creduti
    for (const [k, b] of npc.beliefs) {
      if (k !== evId && b.kind === 'accident' && links(cur, b)) {
        convert(npc, k, cur); changed.push(k);
      }
    }
  }
  return changed;
}

function convert(npc, accId, ev) {
  const cur = npc.beliefs.get(accId);
  if (!cur || cur.kind !== 'accident') return;
  // la confidenza rivalutata deriva SOLO dalla prova (nessuna certezza inventata)
  const conf = clampConf(Math.min(effectiveConfidence(ev, ev.t) * 0.9, 0.7));
  npc.beliefs.set(accId, {
    ...cur,
    kind: 'kill', severity: 0.9, channel: 'inferred',
    confidence: conf, t: ev.t,
    error: ev.kind === 'sabotage' ? 'causa preparata: non è stato un incidente'
      : 'c\u00e8 un testimone del delitto',
    subject: cur.subject ?? ev.subject ?? null,
    provenance: [...cur.provenance]
  });
}
