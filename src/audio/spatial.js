// S10 — Spatial audio: tier di distanza, attenuazione, panning (PURO).
// L0 0–8m audio completo; L1 8–25m semplificato riconoscibile;
// L2 25–60m+ aggregato/astratto (murmur invece di 15 voci singole).
export const TIER = { L0: 'L0', L1: 'L1', L2: 'L2', CULLED: 'CULLED' };
export const L0_MAX = 8, L1_MAX = 25, L2_MAX = 60;

export function tierForDistance(d) {
  if (d <= L0_MAX) return TIER.L0;
  if (d <= L1_MAX) return TIER.L1;
  if (d <= L2_MAX) return TIER.L2;
  return TIER.CULLED;
}

// Attenuazione: 1.0 vicino, rolloff dolce fino a maxDistance. Pura.
export function attenuation(d, { maxDistance = 60, rolloff = 1.2 } = {}) {
  if (d <= 1) return 1;
  if (d >= maxDistance) return 0;
  const t = d / maxDistance;
  return +Math.pow(1 - t, rolloff).toFixed(4);
}

// Pan stereo -1..1 dall'angolo relativo (yaw camera/giocatore).
export function stereoPan(dx, dz, yaw = 0) {
  const ang = Math.atan2(dx, dz) - yaw;
  return +Math.max(-1, Math.min(1, Math.sin(ang))).toFixed(3);
}

// Per L2: aggrega N voci lontane in un singolo murmur (evita N nodi).
export function aggregateFar(events) {
  if (!events.length) return null;
  let x = 0, z = 0, peak = 0;
  for (const e of events) { x += e.x ?? 0; z += e.z ?? 0; peak = Math.max(peak, e.intensity ?? 0.3); }
  return {
    type: 'CROWD_MURMUR', x: x / events.length, z: z / events.length,
    count: events.length, intensity: Math.min(1, 0.25 + peak * 0.5 + events.length * 0.02),
  };
}

export const SPATIAL_DEFAULTS = {
  maxDistance: 60, rolloff: 1.2, refDistance: 2,
};
export function spatialFor(type) {
  if (type.startsWith('NPC_')) return { maxDistance: 55, rolloff: 1.3, refDistance: 2 };
  if (type === 'FOOTSTEP' || type === 'FOOTSTEP_RUN' || type === 'FOOTSTEP_CROUCH') return { maxDistance: 18, rolloff: 1.6, refDistance: 1 };
  if (type === 'CITY_HUM' || type === 'WIND') return { maxDistance: 120, rolloff: 0.7, refDistance: 8 };
  if (type.includes('SIREN')) return { maxDistance: 140, rolloff: 0.9, refDistance: 6 };
  if (type === 'THUNDER' || type === 'EXPLOSION') return { maxDistance: 200, rolloff: 0.8, refDistance: 10 };
  return { ...SPATIAL_DEFAULTS };
}
