// S10 — Zone acustiche + transizioni interno/esterno (PURO, headless-safe).
// Ogni zona modifica reverb/early-reflection/damping/gain/ambience in modo
// convincente (non fisicamente perfetto). buildingAt è iniettato per i test.
export const REVERB_ZONES = {
  OUTSIDE:    { reverb: 0.05, damping: 0.1, gain: 1.0, early: 0.05 },
  STREET:     { reverb: 0.12, damping: 0.2, gain: 1.0, early: 0.15 },
  ALLEY:      { reverb: 0.35, damping: 0.45, gain: 0.9, early: 0.4 },
  COURTYARD:  { reverb: 0.25, damping: 0.3, gain: 0.95, early: 0.3 },
  ROOM:       { reverb: 0.3, damping: 0.4, gain: 0.9, early: 0.35 },
  HALLWAY:    { reverb: 0.45, damping: 0.35, gain: 0.9, early: 0.5 },
  BAR:        { reverb: 0.4, damping: 0.5, gain: 1.0, early: 0.45 },
  RESTAURANT: { reverb: 0.35, damping: 0.45, gain: 0.95, early: 0.4 },
  BATHROOM:   { reverb: 0.65, damping: 0.15, gain: 0.85, early: 0.6 },
  OFFICE:     { reverb: 0.22, damping: 0.5, gain: 0.85, early: 0.25 },
  WAREHOUSE:  { reverb: 0.6, damping: 0.3, gain: 1.0, early: 0.55 },
  STAIRWELL:  { reverb: 0.55, damping: 0.3, gain: 0.9, early: 0.55 },
  BASEMENT:   { reverb: 0.5, damping: 0.55, gain: 0.8, early: 0.45 },
};

// Euristica zona da posizione. rooms: [{purpose,x0,x1,z0,z1,y}] opzionale.
export function acousticZoneAt(x, z, y = 0, { buildingAt = null, buildingType = null, rooms = null } = {}) {
  const bId = buildingAt ? buildingAt(x, z) : null;
  if (!bId) {
    // fuori: vicolo stretto vs strada vs corte (euristica a bande)
    if (x > 13 && x < 20 && z > -8 && z < 13) return 'ALLEY';
    if (x > -26 && x < -12 && z > 27 && z < 35) return 'COURTYARD';
    if (Math.abs(z) < 6 || Math.abs(x) < 6) return 'STREET';
    return 'OUTSIDE';
  }
  if (rooms) {
    for (const r of rooms) {
      if (x >= r.x0 && x <= r.x1 && z >= r.z0 && z <= r.z1 && Math.abs((r.y ?? 0) - y) < 1.6) {
        const p = r.purpose ?? '';
        if (p.includes('bath') || p.includes('restroom') || p.includes('wc')) return 'BATHROOM';
        if (p.includes('stair') || p.includes('landing') || p.includes('hall')) return 'HALLWAY';
        if (p.includes('cafe') || p.includes('bar')) return 'BAR';
        if (p.includes('sales') || p.includes('restaurant') || p.includes('dining')) return 'RESTAURANT';
        if (p.includes('storage') || p.includes('workshop') || p.includes('svc')) return 'WAREHOUSE';
        if (p.includes('office') || p.includes('workspace') || p.includes('reception') || p.includes('studio')) return 'OFFICE';
        if (p.includes('living') || p.includes('bed') || p.includes('kitchen') || p.includes('apt')) return 'ROOM';
        return 'ROOM';
      }
    }
  }
  const t = (buildingType ?? '').toLowerCase();
  if (t.includes('bar')) return 'BAR';
  if (t.includes('office')) return 'OFFICE';
  if (t.includes('commercial') || t.includes('shop')) return 'RESTAURANT';
  return 'ROOM';
}

export function interiorAmount(zone) {
  return (zone === 'OUTSIDE' || zone === 'STREET' || zone === 'ALLEY' || zone === 'COURTYARD') ? 0 : 1;
}

// Crossfade interno/esterno 300–1200ms: ritorna {outsideGain, insideGain}.
export function crossfadeGains(fromZone, toZone, t01, durationMs = 600) {
  const t = Math.max(0, Math.min(1, t01));
  const s = t * t * (3 - 2 * t); // smoothstep
  const fromIn = interiorAmount(fromZone), toIn = interiorAmount(toZone);
  if (fromIn === toIn) return { outsideGain: 1 - toIn, insideGain: toIn, durationMs };
  return { outsideGain: +((1 - s) * (1 - fromIn) + s * (1 - toIn)).toFixed(3), insideGain: +((1 - s) * fromIn + s * toIn).toFixed(3), durationMs };
}

// Occlusione leggera: PLAYER → WALL → NPC => più basso + filtrato.
// losBlocked è iniettato (world.js nel gioco, stub nei test). Ritorna
// {occluded, gainMul, cutoffHz}.
export function occlusionFor(ax, az, bx, bz, losBlockedFn) {
  let blocked = false;
  try { blocked = !!losBlockedFn?.(ax, az, bx, bz); } catch { blocked = false; }
  if (!blocked) return { occluded: false, gainMul: 1, cutoffHz: 20000 };
  return { occluded: true, gainMul: 0.35, cutoffHz: 900 };
}
