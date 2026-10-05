// S10 — Audio Event Bus centralizzato (PURO: niente DOM/WebAudio).
// Eventi semantici: il mondo emette significato ("NPC_SHOUT a (x,z) con
// intensità"), il resto del sistema decide come renderlo. Nuovi tipi si
// aggiungono con registerType(), senza toccare il core.
export const AUDIO_EVENTS = [
  // vocali NPC (non conversazionali: versi brevi, mai dialoghi)
  'NPC_SHOUT', 'NPC_SCREAM', 'NPC_LAUGH', 'NPC_CRY', 'NPC_GROAN',
  'NPC_SIGH', 'NPC_GRUNT', 'NPC_COUGH', 'NPC_SNEEZE', 'NPC_BURP',
  'NPC_FART', 'NPC_WHISTLE', 'NPC_HUM', 'NPC_GIBBERISH', 'NPC_INSULT',
  'NPC_SURPRISE', 'NPC_FEAR', 'NPC_ANGER', 'NPC_PAIN', 'NPC_DISGUST',
  'NPC_EFFORT',
  // oggetti / mondo
  'FOOTSTEP', 'FOOTSTEP_RUN', 'FOOTSTEP_CROUCH', 'DOOR_OPEN', 'DOOR_CLOSE',
  'DOOR_SLAM', 'WINDOW_OPEN', 'WINDOW_CLOSE', 'GLASS', 'METAL_IMPACT',
  'WOOD_IMPACT', 'OBJECT_DROP', 'OBJECT_BREAK',
  // veicoli
  'CAR_PASS', 'CAR_HORN', 'CAR_DOOR', 'CAR_ALARM', 'ENGINE_START',
  'ENGINE_IDLE', 'BRAKE', 'TIRE',
  // sirene
  'POLICE_SIREN', 'AMBULANCE_SIREN', 'FIRE_SIREN',
  // interni / macchine / diegetico
  'PHONE_RING', 'TV', 'RADIO', 'MUSIC_DIEGETIC', 'COFFEE_MACHINE',
  'VENDING_MACHINE', 'INTERCOM', 'DOORBELL', 'WATER', 'ELECTRIC',
  'AIR_CONDITIONING', 'VENTILATION',
  // natura urbana
  'BIRD', 'DOG', 'CAT', 'INSECT', 'CITY_HUM',
  // meteo
  'WIND', 'RAIN', 'THUNDER',
  // eventi
  'COMBAT', 'ALARM', 'EXPLOSION', 'IMPACT', 'GLASS_BREAK',
];

export function createEventBus(initialTypes = AUDIO_EVENTS) {
  const known = new Set(initialTypes);
  const handlers = new Map(); // type -> Set<fn>
  const wild = new Set();
  let emitted = 0;
  let seq = 0;
  return {
    types() { return [...known]; },
    has(type) { return known.has(type); },
    registerType(type) {
      if (typeof type !== 'string' || !type) return false;
      if (known.has(type)) return false;
      known.add(type);
      return true;
    },
    on(type, fn) {
      if (type === '*') { wild.add(fn); return () => wild.delete(fn); }
      if (!known.has(type)) known.add(type); // estendibile senza toccare il core
      if (!handlers.has(type)) handlers.set(type, new Set());
      handlers.get(type).add(fn);
      return () => handlers.get(type)?.delete(fn);
    },
    once(type, fn) {
      const un = this.on(type, (ev) => { un(); fn(ev); });
      return un;
    },
    emit(ev) {
      if (!ev || typeof ev.type !== 'string') return 0;
      if (!known.has(ev.type)) known.add(ev.type);
      emitted++;
      const full = { t: 0, intensity: 0.5, ...ev, seq: seq++ };
      let n = 0;
      const set = handlers.get(full.type);
      if (set) for (const fn of [...set]) { try { fn(full); n++; } catch { /* handler isolato */ } }
      for (const fn of [...wild]) { try { fn(full); n++; } catch { /* isolato */ } }
      return n;
    },
    stats() { return { emitted, types: known.size }; },
    clear() { handlers.clear(); wild.clear(); },
  };
}
