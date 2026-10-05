// GROUND TRUTH: journal centrale append-only di ciò che è REALMENTE accaduto.
// Invariante anti-truth-leak: i moduli decisionali NPC (sim/ai.js) NON ricevono
// mai il journal. Solo percezione (offerta locale) e UI/persistenza lo leggono.
// Evento strutturato: {id,t,type,severity,x,z,actorId,place,witnesses[]}
// - type: 'theft' | ... (mai stringhe libere nella logica)
// - severity: 0..1 (soglia di reazione, non testo)
// - witnesses[]: ground truth su CHI ha visto (serve a polizia/debug futuri)
export const SAVE_VERSION = 2;
// Bound del journal: la ground truth e' append-only ma NON infinita. Gli eventi
// vecchi non servono piu' alle credenze (ogni belief porta i propri campi):
// senza cap, save size e pannello HUD crescono senza limite (test infra:
// event_bounded). seq resta monotono: gli id evN non si riusano mai.
export const JOURNAL_CAP = 5000;

const VALID_TYPES = new Set(['theft', 'disturbance', 'assault', 'kill', 'accident', 'found_corpse', 'noise', 'sabotage']);

export function makeJournal() {
  const events = [];
  let seq = 0;
  return {
    events,
    append(type, data) {
      if (!VALID_TYPES.has(type)) throw new Error(`event type non valido: ${type}`);
      const sev = data.severity ?? 0.5;
      if (!(sev >= 0 && sev <= 1)) throw new Error(`severity fuori range: ${sev}`);
      const ev = {
        id: `ev${++seq}`, t: data.t ?? 0, type, severity: sev,
        x: data.x ?? 0, z: data.z ?? 0,
        actorId: data.actorId ?? null, victimId: data.victimId ?? null,
        place: data.place ?? 'sconosciuto',
        moved: !!data.moved, // la scena è stata alterata (es. corpo occultato)
        witnesses: []
      };
      events.push(ev);
      while (events.length > JOURNAL_CAP) events.shift();
      return ev;
    },
    addWitness(ev, npcId) {
      if (!ev.witnesses.includes(npcId)) ev.witnesses.push(npcId);
    },
    byId(id) { return events.find(e => e.id === id); },
    serialize() { return { seq, events }; },
    restore(s) {
      seq = s.seq ?? 0;
      events.length = 0;
      // loop (non spread): push(...) con decine di migliaia di eventi
      // supera il limite argomenti dello stack -> copia iterativa
      const src = s.events ?? [];
      const from = Math.max(0, src.length - JOURNAL_CAP);
      for (let i = from; i < src.length; i++) events.push(src[i]);
    }
  };
}
