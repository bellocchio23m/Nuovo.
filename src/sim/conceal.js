// Occultamento cadaveri.
//
// Il corpo nascosto NON si scopre piu' guardandolo da lontano: serve la
// percezione ravvicinata reale (chi ci inciampa sopra). Conseguenze
// persistenti: la scoperta slitta, la scena del crimine che emerge reca la
// traccia del movimento (`moved`), e la polizia non puo' "confermare" il
// corpo se non arrivandoci quasi addosso.
export const HIDDEN_STUMBLE = 1.2; // metri: scoperta solo da vicinissimo

// Il giocatore nasconde un cadavere. Solo corpi morti e non gia' nascosti.
// Ritorna true se l'occultamento è avvenuto.
export function concealCorpse(sim, corpse) {
  if (!corpse || corpse.state !== 'dead' || corpse.hidden) return false;
  corpse.hidden = true;
  if (corpse.death) corpse.death.hidden = true; // persiste nel save (death è serializzato)
  sim.stats.concealed = (sim.stats.concealed ?? 0) + 1;
  return true;
}

// Cadavere visibile entro r per un'interazione del giocatore (mai un corpo
// gia' nascosto: non sai dove l'hai messo finché non lo trovi davvero).
export function findCorpseNear(sim, x, z, r) {
  let best = null, bd = r * r;
  for (const n of sim.npcs) {
    if (n.state !== 'dead' || n.hidden) continue;
    const dx = n.x - x, dz = n.z - z, d2 = dx * dx + dz * dz;
    if (d2 < bd) { bd = d2; best = n; }
  }
  return best;
}

// La scoperta di questo corpo è ammessa dalla distanza (dx,dz = osservatore->corpo)?
// Non nascosto: vale la regola normale (cono/LOS o inciampo entro STUMBLE_RADIUS).
// Nascosto: SOLO inciampo ravvicinato, mai scoperta "a vista" da 15m.
export function visibleForDiscovery(dead, dx, dz, stumbleRadius) {
  if (!dead.hidden) return true;
  const d2 = dx * dx + dz * dz;
  return d2 <= Math.min(stumbleRadius, HIDDEN_STUMBLE) ** 2;
}
