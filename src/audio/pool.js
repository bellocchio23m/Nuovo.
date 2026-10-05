// S10 — Pool voci + priorità (logica PURA + backend WebAudio iniettato).
// Mai 80 AudioNodes simultanei senza controllo: max voices, priority,
// stealing (rubo la voce meno importante / più lontana), reuse, cleanup.
export const PRIORITY = {
  CRITICAL_EVENT: 100,
  PLAYER_RELEVANT: 90,
  NPC_SCREAM: 80,
  ALARM: 80,
  NEAR_FOOTSTEP: 60,
  LOCAL_AMBIENCE: 40,
  DISTANT_AMBIENCE: 20,
};
export function priorityFor(type) {
  if (type === 'EXPLOSION' || type === 'COMBAT' || type === 'ALARM' || type === 'GLASS_BREAK') return PRIORITY.CRITICAL_EVENT;
  if (type === 'NPC_SCREAM' || type === 'NPC_PAIN' || type === 'NPC_FEAR') return PRIORITY.NPC_SCREAM;
  if (type === 'POLICE_SIREN' || type === 'AMBULANCE_SIREN' || type === 'FIRE_SIREN') return PRIORITY.ALARM;
  if (type === 'FOOTSTEP' || type === 'FOOTSTEP_RUN' || type === 'FOOTSTEP_CROUCH') return PRIORITY.NEAR_FOOTSTEP;
  if (type === 'CITY_HUM' || type === 'WIND' || type === 'RAIN' || type === 'VENTILATION' || type === 'AIR_CONDITIONING' || type === 'ELECTRIC') return PRIORITY.DISTANT_AMBIENCE;
  if (type.startsWith('NPC_')) return 55;
  if (type.startsWith('CAR_') || type === 'BIRD' || type === 'DOG') return 45;
  return PRIORITY.LOCAL_AMBIENCE;
}

export function createVoicePool({ maxVoices = 36, backend = null } = {}) {
  const active = new Map(); // id -> {type, priority, dist, startedAt, node refs}
  let seq = 0;
  let stolen = 0, rejected = 0, played = 0, cleaned = 0;
  return {
    get maxVoices() { return maxVoices; },
    setMaxVoices(n) { maxVoices = Math.max(4, n | 0); this.evictIfNeeded(); },
    activeCount() { return active.size; },
    stats() { return { active: active.size, maxVoices, played, stolen, rejected, cleaned }; },
    // Prova a riservare una voce. Ritorna {ok, id, stole?} o {ok:false, reason}.
    reserve({ type = '?', priority = 40, dist = 10 } = {}) {
      if (active.size < maxVoices) {
        const id = ++seq;
        active.set(id, { type, priority, dist, startedAt: seq });
        played++;
        return { ok: true, id, stole: false };
      }
      // stealing: vittima = priorità minima, a pari priorità la più lontana/più vecchia
      let victim = -1, victimScore = Infinity;
      for (const [id, v] of active) {
        const score = v.priority * 1000 - Math.min(999, v.dist) - (seq - v.startedAt) * 0.001;
        if (score < victimScore) { victimScore = score; victim = id; }
      }
      const incoming = priority * 1000 - Math.min(999, dist);
      if (victim >= 0 && incoming > victimScore) {
        const v = active.get(victim);
        try { backend?.stopVoice?.(victim, v); } catch { /* best-effort */ }
        active.delete(victim);
        cleaned++;
        const id = ++seq;
        active.set(id, { type, priority, dist, startedAt: seq });
        played++; stolen++;
        return { ok: true, id, stole: true, victim };
      }
      rejected++;
      return { ok: false, reason: 'busy' };
    },
    release(id) {
      if (active.has(id)) { active.delete(id); cleaned++; return true; }
      return false;
    },
    // Pulizia voci finite (il backend segnala ended) + attenuazione lontane.
    evictIfNeeded() {
      while (active.size > maxVoices) {
        let victim = -1, vs = Infinity;
        for (const [id, v] of active) {
          const s = v.priority * 1000 - Math.min(999, v.dist);
          if (s < vs) { vs = s; victim = id; }
        }
        if (victim < 0) break;
        try { backend?.stopVoice?.(victim, active.get(victim)); } catch { /* noop */ }
        active.delete(victim);
        stolen++;
      }
    },
    // Per test/pool reuse: riusa id logici senza ricreare nodi quando possibile.
    peek() { return [...active.entries()].map(([id, v]) => ({ id, ...v })); },
    dispose() { active.clear(); },
  };
}
