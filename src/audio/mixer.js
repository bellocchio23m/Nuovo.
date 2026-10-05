// S10 — Mixer a bus + ducking (PURO per stato, WebAudio per i nodi).
export const BUSES = ['MASTER', 'MUSIC', 'AMBIENCE', 'NPC', 'FOOTSTEPS', 'VEHICLES', 'INTERACTION', 'UI', 'EVENTS', 'WEATHER'];

export function busForEvent(type) {
  if (type.startsWith('NPC_') || type === 'CROWD_MURMUR') return 'NPC';
  if (type.startsWith('FOOTSTEP')) return 'FOOTSTEPS';
  if (type.startsWith('CAR_') || type === 'ENGINE_START' || type === 'ENGINE_IDLE' || type === 'BRAKE' || type === 'TIRE' || type.includes('SIREN')) return 'VEHICLES';
  if (type === 'WIND' || type === 'RAIN' || type === 'THUNDER' || type === 'CITY_HUM') return 'WEATHER';
  if (type === 'TV' || type === 'RADIO' || type === 'MUSIC_DIEGETIC' || type === 'MUSIC_ADAPTIVE') return 'MUSIC';
  if (type === 'BIRD' || type === 'DOG' || type === 'CAT' || type === 'INSECT') return 'AMBIENCE';
  if (type === 'DOOR_OPEN' || type === 'DOOR_CLOSE' || type === 'DOOR_SLAM' || type === 'WINDOW_OPEN' || type === 'WINDOW_CLOSE' || type.includes('IMPACT') || type.includes('OBJECT') || type === 'GLASS' || type === 'GLASS_BREAK') return 'INTERACTION';
  return 'EVENTS';
}

export function createMixer() {
  const vols = {};
  const mutes = {};
  for (const b of BUSES) { vols[b] = b === 'MASTER' ? 0.9 : 1.0; mutes[b] = false; }
  // nodi reali (browser): bus -> master -> destination, con compressor su master
  const nodes = { gains: new Map(), master: null, comp: null };
  let duck = { amount: 0, target: 0, attack: 0.08, release: 0.6 };
  return {
    BUSES,
    setVolume(bus, v) { if (vols[bus] !== undefined) vols[bus] = Math.max(0, Math.min(2, v)); },
    getVolume(bus) { return vols[bus] ?? 1; },
    setMute(bus, m) { if (mutes[bus] !== undefined) mutes[bus] = !!m; },
    isMuted(bus) { return !!mutes[bus]; },
    effective(bus) { return mutes[bus] ? 0 : (vols[bus] ?? 1) * (bus === 'MASTER' ? 1 : vols.MASTER); },
    busForEvent,
    // Ducking: su evento importante abbassa ambient/music/distant con attack/release.
    triggerDuck(severity = 1) {
      duck.target = Math.min(1, 0.4 + severity * 0.6);
      duck.amount = Math.min(1, duck.amount + severity * 0.5);
    },
    duckState() { return { ...duck }; },
    update(dt) {
      // rilascio morbido verso target (che decade a 0)
      duck.target = Math.max(0, duck.target - dt * 0.8);
      const rate = duck.target > duck.amount ? duck.attack : duck.release;
      const k = Math.min(1, dt / Math.max(1e-3, rate));
      duck.amount += (duck.target - duck.amount) * k;
      return duck.amount;
    },
    duckedGain(bus, duckAmount = duck.amount) {
      if (bus === 'AMBIENCE') return Math.pow(10, (-6 * duckAmount) / 20);
      if (bus === 'MUSIC') return Math.pow(10, (-8 * duckAmount) / 20);
      if (bus === 'WEATHER') return Math.pow(10, (-4 * duckAmount) / 20);
      return 1;
    },
    attachBrowserNodes(ctx, masterIn) { nodes.master = masterIn; nodes.ctx = ctx; },
    snapshot() { return { vols: { ...vols }, mutes: { ...mutes }, duck: { ...duck } }; },
  };
}
