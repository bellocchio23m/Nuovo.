// S10 — Sintesi procedurale + variazione (PURO per la parte descrittiva).
// Nessun asset: ogni categoria ha N varianti procedurali generate lazily e
// cachate come AudioBuffer solo nel browser. In Node resta tutto descrittivo
// e testabile. Mai lo stesso sample consecutivamente (pickVariant).
export const VARIATION_COUNTS = {
  FOOTSTEP: 8, FOOTSTEP_RUN: 8, FOOTSTEP_CROUCH: 8,
  DOOR_OPEN: 5, DOOR_CLOSE: 5, DOOR_SLAM: 5, WINDOW_OPEN: 4, WINDOW_CLOSE: 4,
  NPC_LAUGH: 8, NPC_SHOUT: 8, NPC_SCREAM: 8, NPC_GRUNT: 8, NPC_GROAN: 6,
  NPC_COUGH: 6, NPC_SNEEZE: 4, NPC_SIGH: 6, NPC_BURP: 5, NPC_FART: 5,
  NPC_WHISTLE: 4, NPC_HUM: 4, NPC_CRY: 4, NPC_INSULT: 6, NPC_SURPRISE: 4,
  NPC_FEAR: 4, NPC_ANGER: 4, NPC_PAIN: 6, NPC_DISGUST: 4, NPC_EFFORT: 6,
  NPC_GIBBERISH: 6, METAL_IMPACT: 8, WOOD_IMPACT: 6, OBJECT_DROP: 6,
  OBJECT_BREAK: 6, GLASS: 5, GLASS_BREAK: 5, CAR_HORN: 5, CAR_PASS: 4,
  BIRD: 6, DOG: 5, CAT: 4, IMPACT: 8,
};
export function variationCount(type) { return VARIATION_COUNTS[type] ?? 3; }

// Sceglie una variante diversa dalla precedente (deterministico con rng01).
export function pickVariant(type, lastIdx, rng01 = 0.5) {
  const n = variationCount(type);
  if (n <= 1) return 0;
  let v = Math.floor(rng01 * n) % n;
  if (v === lastIdx) v = (v + 1) % n;
  return v;
}

// Descrittore puro di sintesi: {kind, freq, dur, wave, vol, slide, noise, cutoff}
export function describeEvent(type, variant = 0, profile = null) {
  const v = variant % Math.max(1, variationCount(type));
  const seed01 = ((v * 0.6180339887) % 1);
  const pitch = (profile?.pitch ?? 1) * (profile?.pitchMul ?? 1);
  const T = (freq, dur, wave = 'sine', vol = 0.5, slide = 0, cutoff = 0) =>
    ({ kind: 'tone+noise', freq: +(freq * pitch).toFixed(1), dur, wave, vol, slide, cutoff, seed: +seed01.toFixed(3) });
  switch (type) {
    case 'NPC_LAUGH': return T(320 + seed01 * 260 + (profile?.laughStyle ?? 0) * 22, 0.28 + seed01 * 0.3, 'sawtooth', 0.32, 180, 1800);
    case 'NPC_SHOUT': return T(420 + seed01 * 220 + (profile?.shoutStyle ?? 0) * 18, 0.3 + seed01 * 0.25, 'sawtooth', 0.5, 120, 2400);
    case 'NPC_SCREAM': return T(750 + seed01 * 450, 0.35 + seed01 * 0.35, 'sawtooth', 0.55, 420, 3200);
    case 'NPC_CRY': return T(480 + seed01 * 160, 0.5 + seed01 * 0.5, 'triangle', 0.35, -160, 1400);
    case 'NPC_GROAN': return T(140 + seed01 * 70, 0.4 + seed01 * 0.4, 'sawtooth', 0.4, -40, 700);
    case 'NPC_GRUNT': return T(110 + seed01 * 60, 0.16 + seed01 * 0.14, 'square', 0.42, -20, 600);
    case 'NPC_SIGH': return T(300 - seed01 * 80, 0.5 + seed01 * 0.5, 'sine', 0.25, -140, 900);
    case 'NPC_COUGH': return T(220 + seed01 * 120, 0.12 + seed01 * 0.1, 'square', 0.4, -60, 1100);
    case 'NPC_SNEEZE': return T(600 + seed01 * 500, 0.22, 'sawtooth', 0.45, 300, 2500);
    case 'NPC_BURP': return T(120 + seed01 * 60, 0.35 + seed01 * 0.3, 'sawtooth', 0.5, -60, 500);
    case 'NPC_FART': return T(80 + seed01 * 50, 0.4 + seed01 * 0.5, 'square', 0.4, -25, 380);
    case 'NPC_WHISTLE': return T(1900 + seed01 * 600, 0.3 + seed01 * 0.2, 'sine', 0.3, 350, 4000);
    case 'NPC_HUM': return T(180 + seed01 * 80, 0.6 + seed01 * 0.6, 'triangle', 0.22, 30, 900);
    case 'NPC_GIBBERISH': return T(240 + seed01 * 200, 0.25 + seed01 * 0.3, 'sawtooth', 0.28, 90, 1500);
    case 'NPC_INSULT': return T(300 + seed01 * 140, 0.22 + seed01 * 0.18, 'square', 0.42, 60, 2000);
    case 'NPC_SURPRISE': return T(550 + seed01 * 300, 0.2 + seed01 * 0.15, 'sine', 0.42, 260, 2600);
    case 'NPC_FEAR': return T(650 + seed01 * 350, 0.3 + seed01 * 0.25, 'sawtooth', 0.45, 300, 2800);
    case 'NPC_ANGER': return T(200 + seed01 * 120, 0.3 + seed01 * 0.25, 'sawtooth', 0.5, -30, 1200);
    case 'NPC_PAIN': return T(380 + seed01 * 260, 0.28 + seed01 * 0.25, 'sawtooth', 0.5, 140, 2200);
    case 'NPC_DISGUST': return T(260 - seed01 * 60, 0.3 + seed01 * 0.25, 'triangle', 0.35, -120, 800);
    case 'NPC_EFFORT': return T(150 + seed01 * 80, 0.22 + seed01 * 0.2, 'square', 0.4, 40, 700);
    case 'FOOTSTEP': case 'FOOTSTEP_CROUCH': return T(95 + seed01 * 30, 0.07, 'sine', 0.22, -15, 500);
    case 'FOOTSTEP_RUN': return T(105 + seed01 * 35, 0.07, 'sine', 0.4, -15, 600);
    case 'DOOR_OPEN': case 'DOOR_CLOSE': return T(130 + seed01 * 40, 0.16, 'triangle', 0.4, -35, 700);
    case 'DOOR_SLAM': return T(95 + seed01 * 25, 0.28, 'sine', 0.8, -40, 400);
    case 'WINDOW_OPEN': case 'WINDOW_CLOSE': return T(480 + seed01 * 200, 0.1, 'triangle', 0.25, 100, 2000);
    case 'GLASS': case 'GLASS_BREAK': return T(2400 + seed01 * 1400, 0.35, 'square', 0.3, -800, 6000);
    case 'METAL_IMPACT': return T(590 + seed01 * 240, 0.16, 'square', 0.42, -80, 2600);
    case 'WOOD_IMPACT': return T(170 + seed01 * 70, 0.14, 'triangle', 0.45, -50, 900);
    case 'OBJECT_DROP': return T(320 + seed01 * 160, 0.12, 'triangle', 0.35, -90, 1400);
    case 'OBJECT_BREAK': return T(900 + seed01 * 600, 0.3, 'square', 0.4, -300, 3200);
    case 'IMPACT': case 'COMBAT': return T(120 + seed01 * 60, 0.2, 'sine', 0.6, -40, 500);
    case 'CAR_PASS': return T(140 + seed01 * 60, 0.9, 'sawtooth', 0.35, 60, 800);
    case 'CAR_HORN': return T(370 + seed01 * 120, 0.4 + seed01 * 0.3, 'square', 0.45, 0, 2200);
    case 'CAR_DOOR': return T(150 + seed01 * 40, 0.14, 'triangle', 0.4, -30, 800);
    case 'CAR_ALARM': return T(880 + (v % 2) * 220, 0.5, 'square', 0.35, 0, 3000);
    case 'ENGINE_START': return T(70 + seed01 * 30, 0.8, 'sawtooth', 0.4, 60, 500);
    case 'ENGINE_IDLE': return T(65 + seed01 * 15, 1.2, 'sawtooth', 0.18, 5, 350);
    case 'BRAKE': return T(1200 + seed01 * 800, 0.4, 'sine', 0.25, -400, 3000);
    case 'TIRE': return T(300 + seed01 * 200, 0.3, 'sine', 0.25, 100, 1000);
    case 'POLICE_SIREN': return T(660 + (v % 2) * 180, 1.4, 'triangle', 0.35, 180, 2200);
    case 'AMBULANCE_SIREN': return T(700 + (v % 2) * 140, 1.4, 'sine', 0.33, 140, 2200);
    case 'FIRE_SIREN': return T(600 + (v % 2) * 200, 1.6, 'sawtooth', 0.33, 200, 2000);
    case 'PHONE_RING': return T(440 + (v % 2) * 40, 0.35, 'sine', 0.35, 0, 2000);
    case 'DOORBELL': return T(880 - seed01 * 80, 0.5, 'sine', 0.4, -60, 2600);
    case 'TV': case 'RADIO': case 'MUSIC_DIEGETIC': return T(220 + seed01 * 220, 1.6, 'triangle', 0.22, 40, 2400);
    case 'COFFEE_MACHINE': return T(240 + seed01 * 80, 0.8, 'sawtooth', 0.3, 60, 1200);
    case 'VENDING_MACHINE': return T(180 + seed01 * 60, 0.5, 'square', 0.25, 20, 900);
    case 'WATER': return T(500 + seed01 * 300, 0.7, 'sine', 0.22, 80, 1600);
    case 'ELECTRIC': case 'AIR_CONDITIONING': case 'VENTILATION': case 'CITY_HUM': return T(100 + seed01 * 40, 1.8, 'sine', 0.1, 0, 400);
    case 'BIRD': return T(2400 + seed01 * 1200, 0.18 + seed01 * 0.2, 'sine', 0.25, 500, 5000);
    case 'DOG': return T(280 + seed01 * 120, 0.25 + seed01 * 0.2, 'sawtooth', 0.4, -60, 1200);
    case 'CAT': return T(600 + seed01 * 300, 0.4, 'sawtooth', 0.28, 200, 2000);
    case 'INSECT': return T(4200 + seed01 * 1200, 0.5, 'sine', 0.1, 100, 6000);
    case 'WIND': return T(160 + seed01 * 80, 1.8, 'sine', 0.14, 30, 600);
    case 'RAIN': return T(1800 + seed01 * 600, 1.5, 'sine', 0.12, 0, 4000);
    case 'THUNDER': return T(55 + seed01 * 25, 1.6, 'sine', 0.6, -15, 220);
    case 'ALARM': return T(720 + (v % 2) * 160, 0.7, 'square', 0.4, 0, 2800);
    case 'EXPLOSION': return T(60 + seed01 * 30, 1.0, 'sine', 0.9, -25, 350);
    default: return T(440 + seed01 * 220, 0.25, 'sine', 0.35, 0, 1800);
  }
}

// Cache asset per categoria: lazy loading + preloading + caching + unloading.
export function createAudioCache({ maxEntries = 64 } = {}) {
  const buffers = new Map(); // key -> AudioBuffer (browser) o descrittore
  const lastVariant = new Map();
  return {
    key(type, variant) { return `${type}#${variant}`; },
    has(type, variant) { return buffers.has(this.key(type, variant)); },
    store(type, variant, buf) {
      const k = this.key(type, variant);
      if (buffers.size >= maxEntries && !buffers.has(k)) {
        const oldest = buffers.keys().next().value;
        buffers.delete(oldest);
      }
      buffers.set(k, buf);
    },
    get(type, variant) { return buffers.get(this.key(type, variant)); },
    preloadList(list) { return list.map((t) => this.key(t, 0)); },
    unloadLowPriority(keep = []) {
      const keepSet = new Set(keep);
      let n = 0;
      for (const k of [...buffers.keys()]) {
        if (!keepSet.has(k)) { buffers.delete(k); n++; }
      }
      return n;
    },
    count() { return buffers.size; },
    lastFor(type) { return lastVariant.get(type) ?? -1; },
    markUsed(type, variant) { lastVariant.set(type, variant); },
  };
}
