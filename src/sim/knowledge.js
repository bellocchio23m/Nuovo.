// Credenza di un NPC: rappresentazione PARZIALE e fallibile di un evento.
// {kind, severity, px, pz, place, actor, channel, confidence, t, error, provenance[]}
// - (px,pz): posizione PERCEPITA (con rumore), MAI le coordinate vere.
// - channel: 'seen' | 'hearsay' (estendibile: 'heard','inferred').
// - provenance: catena di npcId [primo testimone, ..., ultimo sharer], max 4.
// - confidence: valore base; quella effettiva decade con l'età (lazy, v. sotto).
// Invarianti: confidence in [CONF_MIN,1]; provenance senza duplicati consecutivi
// e senza loop (se contengo già npcId, rifiuto); merge non aumenta mai oltre
// il max degli input (nessun boost che crea informazione dal nulla).
export const CONF_MIN = 0.05;
const PROV_MAX = 4;
const TAU = { seen: 600, heard: 120, hearsay: 180 }; // secondi di gioco
const CONTRA_DIST = 30; // metri: due versioni cosi lontane dello stesso evento sono incompatibili

export function clampConf(c) {
  if (!Number.isFinite(c)) return CONF_MIN;
  return Math.max(CONF_MIN, Math.min(1, c));
}

export function makeBelief(o) {
  return {
    kind: o.kind, severity: o.severity ?? 0.5,
    px: o.px ?? 0, pz: o.pz ?? 0, place: o.place ?? 'sconosciuto',
    actor: o.actor ?? 'sconosciuto', subject: o.subject ?? null,
    channel: o.channel ?? 'seen',
    confidence: clampConf(o.confidence ?? 0.5),
    t: o.t ?? 0, error: o.error ?? null,
    moved: o.moved ?? false, // la scena è stata alterata (corpo spostato/nascosto)
    w: o.w ?? null, // incertezza posizionale (metri), null = ignota
    contra: o.contra ?? 0, // versioni incompatibili ricevute
    provenance: [...(o.provenance ?? [])].slice(0, PROV_MAX)
  };
}

// Due versioni dello stesso evento sono incompatibili se indicano attori
// distinti (non 'sconosciuto') o posizioni troppo lontane tra loro.
function contradicts(cur, nb) {
  const a = cur.actor, b = nb.actor;
  const actorClash = a && b && a !== 'sconosciuto' && b !== 'sconosciuto' && a !== b;
  const posClash = Math.hypot(cur.px - nb.px, cur.pz - nb.pz) > CONTRA_DIST;
  return actorClash || posClash;
}

// Confidenza effettiva all'istante t (decadimento esponenziale, lazy).
export function effectiveConfidence(b, t) {
  const tau = TAU[b.channel] ?? 300;
  return b.confidence * Math.exp(-Math.max(0, t - b.t) / tau);
}

// Ritorna 'stored' | 'merged' | 'ignored'. Mai push in memory qui: il chiamante
// memorizza l'evId SOLO se il risultato è stored/merged (integrità memory).
export function mergeBelief(store, eventId, b, selfId) {
  const nb = makeBelief(b);
  if (nb.provenance.includes(selfId)) return 'ignored'; // loop di gossip
  const cur = store.get(eventId);
  if (!cur) { store.set(eventId, nb); return 'stored'; }
  if (cur.provenance.includes(selfId) && nb.provenance.includes(selfId)) return 'ignored';
  // Rivalutazione (v. sim/reassess.js): un incidente rivalutato come delitto
  // prevale sulla lettura incidentale vecchia; il contrario non succede mai
  // (un "incidente" raccontato non smonta un omicidio visto). Stessa evId,
  // nessun ping-pong.
  if (cur.kind === 'accident' && nb.kind === 'kill') {
    const provU = [...cur.provenance];
    for (const p of nb.provenance) if (!provU.includes(p) && provU.length < PROV_MAX) provU.push(p);
    store.set(eventId, { ...nb, provenance: provU });
    return 'merged';
  }
  if (cur.kind === 'kill' && nb.kind === 'accident') return 'ignored';
  // Contraddizione: due versioni incompatibili dello stesso evento.
  if (contradicts(cur, nb)) {
    if (cur.channel !== 'seen' && nb.channel === 'seen') {
      // l'osservazione diretta prevale sulla voce udita
      store.set(eventId, { ...nb, contra: (cur.contra ?? 0) + 1 });
      return 'merged';
    }
    if (cur.channel === 'seen' && nb.channel !== 'seen') {
      return 'ignored'; // una voce non smonta cio che si e' visto
    }
    // due voci incoerenti: la credenza si incrina ma non si inventa una verita'
    cur.contra = (cur.contra ?? 0) + 1;
    cur.confidence = Math.max(CONF_MIN, +(cur.confidence * 0.85).toFixed(3));
    return 'merged';
  }
  const prov = [...cur.provenance];
  for (const p of nb.provenance) {
    if (!prov.includes(p) && prov.length < PROV_MAX) prov.push(p);
  }
  if (nb.confidence > cur.confidence) {
    store.set(eventId, { ...nb, provenance: prov });
    return 'merged';
  }
  if (prov.length > cur.provenance.length) {
    // corroborazione indipendente: una seconda fonte che non condivide
    // provenance ringiovanisce la credenza (t), MA la confidence base non
    // cresce mai: nessuna informazione creata dal nulla.
    const disjoint = nb.provenance.every(p => !cur.provenance.includes(p));
    if (disjoint && nb.t > cur.t && nb.confidence >= 0.25 && nb.confidence <= cur.confidence) {
      cur.t = cur.t + (nb.t - cur.t) * 0.25;
    }
    store.set(eventId, { ...cur, provenance: prov });
    return 'merged';
  }
  return 'ignored';
}

// Potatura periodica: rimuove credenze decadute sotto soglia. Ritorna # rimosse.
export function pruneBeliefs(store, t) {
  let n = 0;
  for (const [k, b] of store) {
    if (effectiveConfidence(b, t) < CONF_MIN + 0.01) { store.delete(k); n++; }
  }
  return n;
}

const KIND_IT = {
  theft: 'un furto', disturbance: 'un trambusto', assault: 'un\u2019aggressione',
  kill: 'un omicidio', accident: 'un incidente', found_corpse: 'un cadavere', corpse: 'un cadavere',
  noise: 'un rumore', sabotage: 'un sabotaggio'
};

export function describeBelief(b, t) {
  if (!b) return 'nulla di sospetto';
  const eff = Math.round(effectiveConfidence(b, t ?? b.t) * 100);
  const err = b.error ? ` (ricordo impreciso: ${b.error})` : '';
  const src = b.channel === 'seen' ? 'visto di persona'
    : (b.channel === 'heard' ? 'sentito'
      : (b.channel === 'inferred' ? 'rimasto in dubbio, poi collegato' : 'sentito dire'));
  const kind = KIND_IT[b.kind] ?? b.kind;
  const prov = b.provenance.length > 1 ? ` [via ${b.provenance.join('\u2192')}]` : '';
  const mv = b.moved ? ' (scena alterata)' : '';
  return `${kind} ${b.place} — ${src}, fiducia ${eff}%${err}${prov}${mv}`;
}
