// Finestra temporale del contratto.
//
// Il giocatore ha un tempo LIMITATO (secondi di gioco) per concludere.
// Nessun contatore di stato: tutto deriva da sim.t -> deterministico,
// identico dopo save/load, nessun campo da serializzare oltre il budget.
export const DEFAULT_LIMIT = 900; // 900s di gioco = 3.6 giorni-luce di DAY_SECONDS

export function makeContract(targetId, limit = DEFAULT_LIMIT) {
  return { targetId, limit, startedAt: 0 };
}

// Stato della finestra al tempo sim corrente.
export function contractState(sim, contract) {
  if (!contract) return { active: false, expired: false, remaining: 0, elapsed: 0 };
  const elapsed = sim.t - (contract.startedAt ?? 0);
  const remaining = Math.max(0, contract.limit - elapsed);
  return { active: true, expired: remaining <= 0, remaining, elapsed };
}

export function contractTarget(sim, contract) {
  if (!contract) return null;
  return sim.npcs.find(n => n.id === contract.targetId) ?? null;
}

// Esito del contratto. Non è una "vittoria scriptata": è solo la lettura di
// ciò che è successo (bersaglio abbattuto, tempo finito, preso).
//  'running'   | ancora in corso
//  'done'      | bersaglio morto entro la finestra
//  'expired'   | tempo finito con il bersaglio ancora vivo
export function contractOutcome(sim, contract) {
  if (!contract) return 'running';
  const st = contractState(sim, contract);
  const target = contractTarget(sim, contract);
  if (target && target.state === 'dead') return st.expired ? 'expired' : 'done';
  return st.expired ? 'expired' : 'running';
}

export function formatClock(seconds) {
  const s = Math.max(0, Math.ceil(seconds));
  const m = Math.floor(s / 60);
  return `${m}:${String(s % 60).padStart(2, '0')}`;
}
