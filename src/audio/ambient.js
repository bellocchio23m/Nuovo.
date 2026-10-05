// S10 — AmbientLayerManager: BASE/DISTANT/LOCAL/MICRO/EVENT (PURO scheduler).
// Il mondo ha più strati contemporanei; il risultato è un mix dinamico, mai
// un loop unico. Include firme per venue, densità ora-del-giorno, silenzio,
// scheduler strade con distribuzione spaziale (non dal punto del giocatore).
export const LAYERS = ['BASE', 'DISTANT', 'LOCAL', 'MICRO', 'EVENT'];

// Firme sonore per venue (categorie + pesi). Bar/ristorante/ufficio/
// residenziale/officina/bagno/strada hanno mix diversi.
export const VENUE_SIGNATURES = {
  BAR: { layers: ['CITY_HUM', 'RADIO', 'NPC_LAUGH', 'NPC_BURP', 'GLASS', 'COFFEE_MACHINE', 'DOOR_OPEN', 'NPC_HUM', 'NPC_SHOUT'], weights: [0.5, 0.8, 0.9, 0.06, 0.5, 0.7, 0.5, 0.4, 0.25] },
  RESTAURANT: { layers: ['CITY_HUM', 'RADIO', 'GLASS', 'OBJECT_DROP', 'NPC_LAUGH', 'WATER', 'DOOR_OPEN'], weights: [0.4, 0.6, 0.8, 0.5, 0.5, 0.5, 0.4] },
  OFFICE: { layers: ['AIR_CONDITIONING', 'ELECTRIC', 'NPC_SIGH', 'NPC_COUGH', 'PHONE_RING', 'DOOR_CLOSE', 'VENTILATION'], weights: [0.7, 0.5, 0.4, 0.35, 0.3, 0.3, 0.4] },
  RESIDENTIAL: { layers: ['TV', 'RADIO', 'WATER', 'ELECTRIC', 'NPC_HUM', 'DOG', 'DOOR_CLOSE', 'VENTILATION'], weights: [0.5, 0.4, 0.4, 0.3, 0.3, 0.3, 0.3, 0.3] },
  WORKSHOP: { layers: ['METAL_IMPACT', 'WOOD_IMPACT', 'ENGINE_IDLE', 'NPC_EFFORT', 'NPC_GRUNT', 'DOOR_SLAM', 'VENTILATION'], weights: [0.7, 0.5, 0.5, 0.5, 0.5, 0.3, 0.4] },
  BATHROOM: { layers: ['WATER', 'VENTILATION', 'DOOR_CLOSE', 'NPC_COUGH'], weights: [0.8, 0.6, 0.4, 0.1] },
  STREET: { layers: ['CITY_HUM', 'WIND', 'CAR_PASS', 'CAR_HORN', 'BRAKE', 'TIRE', 'FOOTSTEP', 'DOG', 'BIRD', 'METAL_IMPACT'], weights: [0.8, 0.6, 0.7, 0.25, 0.2, 0.25, 0.5, 0.2, 0.4, 0.15] },
  ALLEY: { layers: ['WIND', 'FOOTSTEP', 'CAR_PASS', 'CAT', 'OBJECT_DROP'], weights: [0.7, 0.5, 0.2, 0.25, 0.2] },
  COURTYARD: { layers: ['BIRD', 'WIND', 'NPC_HUM', 'DOG', 'WATER'], weights: [0.6, 0.5, 0.3, 0.25, 0.3] },
};

// Moltiplicatori densità per ora (mattina/pomeriggio/sera/notte).
export function densityForHour(hour) {
  if (hour >= 6 && hour < 11) return { vehicles: 1.1, people: 0.8, music: 0.5, birds: 1.4, night: 0.1, label: 'MORNING' };
  if (hour >= 11 && hour < 18) return { vehicles: 1.2, people: 1.1, music: 0.8, birds: 0.8, night: 0.1, label: 'AFTERNOON' };
  if (hour >= 18 && hour < 24) return { vehicles: 0.9, people: 1.2, music: 1.3, birds: 0.3, night: 0.5, label: 'EVENING' };
  return { vehicles: 0.35, people: 0.3, music: 0.5, birds: 0.1, night: 1.0, label: 'NIGHT' };
}

// Finestre di bassa densità: un vicolo di notte non ha tutto insieme.
export function silenceFactor(zone, hour) {
  const night = hour < 6 || hour >= 24 || hour < 5;
  if ((zone === 'ALLEY' || zone === 'COURTYARD') && (hour >= 0 && hour < 5)) return 0.25;
  if (zone === 'STREET' && hour >= 2 && hour < 5) return 0.45;
  void night;
  return 1.0;
}

export function createAmbientManager({ emit, rng = Math.random, hourFn = () => 12 } = {}) {
  let acc = 0;
  const stats = { scheduled: 0, byLayer: { BASE: 0, DISTANT: 0, LOCAL: 0, MICRO: 0, EVENT: 0 } };
  // sorgenti fisse diegetiche note (posizioni mondo)
  const fixedSources = [
    { type: 'RADIO', x: -20, z: 18, venue: 'BAR', label: 'radio_bar' },
    { type: 'COFFEE_MACHINE', x: -19.5, z: 22.3, venue: 'BAR', label: 'bar_coffee' },
    { type: 'TV', x: -19.8, z: -15.7, venue: 'RESIDENTIAL', label: 'b4_tv' },
    { type: 'PHONE_RING', x: 28.5, z: 12.5, venue: 'STREET', label: 'phone_booth' },
    { type: 'WATER', x: 37, z: 27.2, venue: 'STREET', label: 'fountain' },
    { type: 'AIR_CONDITIONING', x: 10, z: -20, venue: 'OFFICE', label: 'b5_ac' },
    { type: 'VENTILATION', x: 23, z: 23.6, venue: 'WORKSHOP', label: 'b3_back' },
  ];
  function venueAt(zone, buildingType) {
    if (zone === 'BAR') return 'BAR';
    if (zone === 'BATHROOM') return 'BATHROOM';
    if (zone === 'OFFICE') return 'OFFICE';
    if (zone === 'WAREHOUSE') return 'WORKSHOP';
    if (zone === 'RESTAURANT') return 'RESTAURANT';
    if (zone === 'ROOM' || zone === 'HALLWAY') {
      if ((buildingType ?? '').includes('commercial')) return 'RESTAURANT';
      return 'RESIDENTIAL';
    }
    if (zone === 'ALLEY') return 'ALLEY';
    if (zone === 'COURTYARD') return 'COURTYARD';
    return 'STREET';
  }
  function schedule(dt, ctx) {
    // ctx: {player:{x,z}, zone, buildingType, weather, rng01()}
    acc += dt;
    const out = [];
    const hour = hourFn();
    const dens = densityForHour(hour);
    const venue = venueAt(ctx.zone, ctx.buildingType);
    const sig = VENUE_SIGNATURES[venue] ?? VENUE_SIGNATURES.STREET;
    const sil = silenceFactor(ctx.zone, hour);
    // tick ~4Hz: decide 0..2 eventi locali + occasionali distanti/stradali
    if (acc < 0.25) return out;
    acc = 0;
    const r = () => (typeof rng === 'function' ? rng() : Math.random());
    const px = ctx.player.x, pz = ctx.player.z;
    // LOCAL: 1 evento dalla firma venue vicino al player (non sul player)
    if (r() < 0.55 * sil * (0.5 + dens.people * 0.5)) {
      const i = Math.floor(r() * sig.layers.length);
      const type = sig.layers[i];
      const w = sig.weights[i] ?? 0.5;
      if (r() < w) {
        const a = r() * Math.PI * 2, d = 4 + r() * 18;
        out.push({ type, x: px + Math.cos(a) * d, z: pz + Math.sin(a) * d, intensity: 0.3 + r() * 0.5, layer: 'LOCAL' });
      }
    }
    // DISTANT: auto lontane/sirene/voci/musica/cani distribuiti (anello 30-55m)
    if (r() < (0.35 * sil * (0.4 + dens.vehicles * 0.6))) {
      const pool = ['CAR_PASS', 'CAR_HORN', 'DOG', 'NPC_SHOUT', 'RADIO', 'POLICE_SIREN', 'BIRD'];
      const type = pool[Math.floor(r() * pool.length)];
      const a = r() * Math.PI * 2, d = 30 + r() * 25;
      out.push({ type, x: px + Math.cos(a) * d, z: pz + Math.sin(a) * d, intensity: 0.25 + r() * 0.4, layer: 'DISTANT' });
    }
    // MICRO/NATURA: uccelli/insetti/vento vicino, mai loop perfetto
    if (r() < 0.3 * dens.birds * sil + 0.05) {
      const type = r() < 0.6 ? 'BIRD' : (r() < 0.5 ? 'INSECT' : 'WIND');
      const a = r() * Math.PI * 2, d = 3 + r() * 12;
      out.push({ type, x: px + Math.cos(a) * d, z: pz + Math.sin(a) * d, intensity: 0.2 + r() * 0.3, layer: 'MICRO' });
    }
    // METEO: pioggia/vento/tuoni
    if (ctx.weather === 'rain' && r() < 0.5) out.push({ type: 'RAIN', x: px, z: pz, intensity: 0.5, layer: 'BASE' });
    if (ctx.weather === 'storm') {
      out.push({ type: 'RAIN', x: px, z: pz, intensity: 0.7, layer: 'BASE' });
      if (r() < 0.08) out.push({ type: 'THUNDER', x: px + (r() - 0.5) * 80, z: pz + (r() - 0.5) * 80, intensity: 0.8, layer: 'EVENT' });
    } else if (ctx.weather === 'wind' && r() < 0.4) out.push({ type: 'WIND', x: px, z: pz, intensity: 0.4, layer: 'BASE' });
    for (const e of out) {
      stats.scheduled++;
      stats.byLayer[e.layer] = (stats.byLayer[e.layer] ?? 0) + 1;
      try { emit?.(e); } catch { /* noop */ }
    }
    return out;
  }
  return {
    LAYERS, VENUE_SIGNATURES, fixedSources,
    venueAt, schedule, stats: () => ({ ...stats, byLayer: { ...stats.byLayer } }),
  };
}
