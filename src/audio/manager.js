// S10 — AudioWorldManager: orchestra bus/pool/spatial/zone/mixer/ambient/
// vocali/musica. Sintesi procedurale WebAudio (nessun asset), spatial con
// Panner/Gain/Filter/Compressor, gesture obbligatoria, pooling/stealing,
// occlusion a bassa frequenza, crossfade interno/esterno, ducking, qualità
// LOW/MEDIUM/HIGH. Headless-safe: senza AudioContext gira in null-backend
// (logica + statistiche, nessun suono, nessun throw).
import { createEventBus } from './bus.js';
import { voiceProfileFor, renderVariation, ARCHETYPES } from './voice.js';
import { describeEvent, pickVariant, createAudioCache } from './synth.js';
import { createVoicePool, priorityFor } from './pool.js';
import { tierForDistance, attenuation, stereoPan, spatialFor, aggregateFar } from './spatial.js';
import { acousticZoneAt, REVERB_ZONES, crossfadeGains, occlusionFor } from './zones.js';
import { createMixer, busForEvent } from './mixer.js';
import { createAmbientManager } from './ambient.js';
import { createNPCVocalSystem } from './npcVocal.js';
import { createMusicSystem } from './music.js';
import { createAudioDebug } from './debug.js';

const QUALITY = {
  LOW: { maxVoices: 16, reverb: 0.0, occlusionHz: 0, distant: false, density: 0.5 },
  MEDIUM: { maxVoices: 32, reverb: 0.6, occlusionHz: 6, distant: true, density: 0.85 },
  HIGH: { maxVoices: 48, reverb: 1.0, occlusionHz: 9, distant: true, density: 1.2 },
};

function hourFromSimT(t) { return (8 + ((t ?? 0) * 24) / 600) % 24; }

export function createAudioWorld(opts = {}) {
  const bus = createEventBus();
  const mixer = createMixer();
  const cache = createAudioCache({ maxEntries: 96 });
  const pool = createVoicePool({ maxVoices: QUALITY.MEDIUM.maxVoices, backend: null });
  const ambient = createAmbientManager({ emit: (e) => route(e), rng: opts.rng ?? Math.random, hourFn: () => hourFromSimT(world.simT) });
  const profiles = new Map();
  const getProfile = (npc) => {
    if (!npc) return voiceProfileFor({ id: 'anon' });
    if (!profiles.has(npc.id)) profiles.set(npc.id, voiceProfileFor(npc));
    return profiles.get(npc.id);
  };
  const vocals = createNPCVocalSystem({ emit: (e) => route(e), getProfile, rng: opts.rng ?? Math.random, losBlocked: opts.losBlocked ?? null });
  const music = createMusicSystem({ emit: (e) => route(e, { music: true }) });
  const world = {
    player: { x: 0, z: 0, yaw: 0, y: 0 }, npcs: [], simT: 0,
    colliders: null, interactables: null, weather: 'clear',
    policeAlert: false, playerWanted: false, combat: false, fleeing: false, calmFor: 99,
  };
  let quality = opts.quality ?? 'MEDIUM';
  if (!QUALITY[quality]) quality = 'MEDIUM';
  pool.setMaxVoices(QUALITY[quality].maxVoices);

  // --- backend WebAudio (solo browser, dopo gesture) ---
  const BE = {
    ctx: null, master: null, comp: null, busGains: new Map(), verb: null, verbGain: null,
    noiseBuf: null, irCache: new Map(), liveVoices: new Map(),
  };
  let started = false, ctxState = 'none';
  let zone = 'STREET', prevZone = 'STREET', zoneBlend = 1;
  let insideGain = 0, outsideGain = 1, occlusion = { occluded: false, gainMul: 1, cutoffHz: 20000 };
  let occAcc = 0, farAcc = 0;
  const farBuffer = [];
  const recent = [];
  let playCounter = 0;
  const lastVariant = new Map();
  const stats = { routed: 0, culled: 0, ducked: 0 };
  pool; // pool.backend assegnato dopo (serve stopVoice)
  const poolBackend = { stopVoice: (id) => BE.liveVoices.get(id)?.stop?.() };
  // ricollega backend allo pool (createVoicePool ha catturato null: lo patchiamo)
  // -> il reserve usa backend?.stopVoice, quindi sostituiamo il riferimento:
  const _reserve = pool.reserve.bind(pool);

  const debug = createAudioDebug(() => ({
    pool: pool.stats(), mixer: mixer.snapshot(), zone, reverb: REVERB_ZONES[zone]?.reverb ?? 0,
    occlusion, insideGain, outsideGain, musicState: music.getState(),
    npcVocals: vocals.stats().vocals, ambientScheduled: ambient.stats().scheduled,
    buffers: cache.count(), quality, ctxState, duck: mixer.duckState().amount, recent: [...recent],
  }));

  function ensureCtx() {
    if (typeof window === 'undefined') return false;
    if (BE.ctx) { if (BE.ctx.state === 'suspended') BE.ctx.resume().catch(() => {}); ctxState = BE.ctx.state; return true; }
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return false;
      BE.ctx = new Ctx();
      BE.comp = BE.ctx.createDynamicsCompressor();
      BE.comp.threshold.value = -18; BE.comp.ratio.value = 6;
      BE.comp.connect(BE.ctx.destination);
      BE.master = BE.ctx.createGain();
      BE.master.gain.value = 0.32;
      BE.master.connect(BE.comp);
      for (const b of ['MASTER', 'MUSIC', 'AMBIENCE', 'NPC', 'FOOTSTEPS', 'VEHICLES', 'INTERACTION', 'UI', 'EVENTS', 'WEATHER']) {
        const g = BE.ctx.createGain(); g.gain.value = 1;
        g.connect(b === 'MASTER' ? BE.comp : BE.master);
        BE.busGains.set(b, g);
      }
      // riverbero convolutivo con IR generata
      BE.verb = BE.ctx.createConvolver();
      BE.verb.buffer = impulse(1.4, 2.2);
      BE.verbGain = BE.ctx.createGain(); BE.verbGain.gain.value = 0.35;
      BE.verb.connect(BE.verbGain); BE.verbGain.connect(BE.master);
      // rumore riusabile per tutte le componenti noise
      const len = BE.ctx.sampleRate;
      BE.noiseBuf = BE.ctx.createBuffer(1, len, BE.ctx.sampleRate);
      const d = BE.noiseBuf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      // loop base: city hum + vento (guadagni pilotati da update)
      startBaseLoop();
      started = true; ctxState = BE.ctx.state;
      // chiudi il gap autoplay: se ancora suspended, ritenta al prossimo gesto
    } catch { return false; }
    return !!BE.ctx;
  }
  function impulse(dur = 1.4, decay = 2.2) {
    const rate = BE.ctx.sampleRate, len = Math.floor(rate * dur);
    const buf = BE.ctx.createBuffer(2, len, rate);
    for (let c = 0; c < 2; c++) {
      const ch = buf.getChannelData(c);
      for (let i = 0; i < len; i++) ch[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
    }
    return buf;
  }
  function startBaseLoop() {
    try {
      const len = BE.ctx.sampleRate * 2;
      const buf = BE.ctx.createBuffer(1, len, BE.ctx.sampleRate);
      const ch = buf.getChannelData(0);
      let v = 0;
      for (let i = 0; i < len; i++) { v = v * 0.98 + (Math.random() * 2 - 1) * 0.02; ch[i] = v; }
      const src = BE.ctx.createBufferSource(); src.buffer = buf; src.loop = true;
      const f = BE.ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 380;
      const g = BE.ctx.createGain(); g.gain.value = 0.16;
      src.connect(f); f.connect(g); g.connect(BE.busGains.get('AMBIENCE') ?? BE.master);
      src.start();
      BE.baseSrc = src; BE.baseGain = g; BE.baseFilter = f;
    } catch { /* best-effort */ }
  }

  // Routing centrale: bus -> spatial -> priorità -> pool -> backend/tracking.
  function route(ev, flags = {}) {
    stats.routed++;
    const px = world.player.x, pz = world.player.z;
    const ex = ev.x ?? px, ez = ev.z ?? pz;
    const dist = Math.hypot(ex - px, ez - pz);
    const tier = tierForDistance(dist);
    if (tier === 'CULLED') { stats.culled++; return null; }
    // L2: non riprodurre 15 voci singole: accumula e aggrega periodicamente
    if (tier === 'L2' && !flags.music && (ev.type.startsWith('NPC_') || ev.type === 'FOOTSTEP')) {
      farBuffer.push({ ...ev, x: ex, z: ez, dist });
      // occasionalmente lascia passare un verso isolato riconoscibile
      if (Math.random() > 0.25) { stats.culled++; return null; }
    }
    const priority = ev.priority ?? priorityFor(ev.type);
    // ducking su eventi importanti
    if (priority >= 80) { mixer.triggerDuck(ev.intensity ?? 0.8); stats.ducked++; }
    const sp = spatialFor(ev.type);
    const q = QUALITY[quality];
    if (!q.distant && dist > 25 && !flags.music) { stats.culled++; return null; }
    const res = _reserve({ type: ev.type, priority, dist });
    if (!res.ok) return null;
    const variant = pickVariant(ev.type, lastVariant.get(ev.type) ?? -1, Math.random());
    lastVariant.set(ev.type, variant);
    cache.markUsed(ev.type, variant);
    const profile = ev.source ? profiles.get(ev.source) : null;
    const desc = describeEvent(ev.type, variant, profile ?? undefined);
    const vari = renderVariation(profile ?? { pitch: 1 }, playCounter++, Math.random());
    const full = {
      ...ev, x: ex, z: ez, dist, tier, variant,
      gainMul: attenuation(dist, sp) * (vari.gainRatio ?? 1),
      pan: stereoPan(ex - px, ez - pz, world.player.yaw ?? 0),
      desc, pitchRatio: vari.pitchRatio, offset: vari.offsetSec,
      voiceId: res.id, bus: busForEvent(ev.type),
    };
    recent.push({ type: full.type, x: ex, z: ez, intensity: full.intensity ?? 0.5 });
    if (recent.length > 40) recent.shift();
    bus.emit(full);
    playBackend(full);
    return full;
  }

  function playBackend(full) {
    if (!BE.ctx || BE.ctx.state !== 'running') {
      // null-backend: simula durata e rilascia la voce subito (nessun leak)
      setTimeout(() => pool.release(full.voiceId), 0);
      return;
    }
    try {
      const t = BE.ctx.currentTime + 0.01 + (full.offset ?? 0);
      const busGain = BE.busGains.get(full.bus) ?? BE.master;
      const duckG = mixer.duckedGain(full.bus);
      const zoneP = REVERB_ZONES[zone] ?? REVERB_ZONES.STREET;
      const q = QUALITY[quality];
      const g = BE.ctx.createGain();
      const baseVol = Math.min(1.2, (full.desc.vol ?? 0.4) * (full.intensity ?? 0.5) * 1.4);
      g.gain.setValueAtTime(Math.max(0.0001, baseVol * full.gainMul * occlusion.gainMul * (mixer.effective(full.bus)) * duckG * (full.bus === 'NPC' || full.bus === 'EVENTS' ? (0.4 + insideGain * 0.6 + outsideGain * 0.6) : 1)), t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + full.desc.dur + 0.05);
      const o = BE.ctx.createOscillator();
      o.type = full.desc.wave;
      o.frequency.setValueAtTime(Math.max(25, full.desc.freq * (full.pitchRatio ?? 1)), t);
      if (full.desc.slide) o.frequency.exponentialRampToValueAtTime(Math.max(25, full.desc.freq * (full.pitchRatio ?? 1) + full.desc.slide), t + full.desc.dur);
      const f = BE.ctx.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = Math.min(full.desc.cutoff || 4000, occlusion.cutoffHz);
      // panning: PannerNode quando disponibile, fallback StereoPanner
      let out = g;
      try {
        if (BE.ctx.createPanner) {
          const p = BE.ctx.createPanner();
          p.panningModel = 'equalpower'; p.distanceModel = 'inverse';
          p.refDistance = 2; p.maxDistance = 60; p.rolloffFactor = 1.1;
          const az = Math.atan2(full.x - world.player.x, full.z - world.player.z);
          p.positionX.value = Math.sin(az) * Math.min(20, full.dist);
          p.positionZ.value = Math.cos(az) * Math.min(20, full.dist);
          g.connect(f); f.connect(p); p.connect(busGain);
          out = null;
        }
      } catch { /* fallback sotto */ }
      if (out) {
        let pan = null;
        try { pan = BE.ctx.createStereoPanner ? BE.ctx.createStereoPanner() : null; } catch { pan = null; }
        o.connect(f);
        // componente noise (colpi, passi, vento)
        const nsrc = BE.ctx.createBufferSource(); nsrc.buffer = BE.noiseBuf; nsrc.loop = true;
        const nf = BE.ctx.createBiquadFilter(); nf.type = 'lowpass'; nf.frequency.value = Math.min(3000, occlusion.cutoffHz);
        const ng = BE.ctx.createGain(); ng.gain.value = 0.25;
        nsrc.connect(nf); nf.connect(ng); ng.connect(f);
        nsrc.start(t); nsrc.stop(t + full.desc.dur + 0.05);
        BE.liveVoices.set(full.voiceId + ':n', { stop: () => { try { nsrc.stop(); } catch {} } });
        if (pan) { pan.pan.value = full.pan; f.connect(pan); pan.connect(g); }
        else f.connect(g);
        g.connect(busGain);
        // mandata riverbero proporzionale a zona*qualità
        if (q.reverb > 0 && BE.verb) {
          const send = BE.ctx.createGain();
          send.gain.value = zoneP.reverb * q.reverb * 0.9;
          g.connect(send); send.connect(BE.verb);
        }
      }
      o.connect(f ?? g);
      o.start(t); o.stop(t + full.desc.dur + 0.06);
      BE.liveVoices.set(full.voiceId, { stop: () => { try { o.stop(); } catch {} } });
      o.onended = () => { BE.liveVoices.delete(full.voiceId); BE.liveVoices.delete(full.voiceId + ':n'); pool.release(full.voiceId); };
      setTimeout(() => { if (BE.liveVoices.has(full.voiceId)) { BE.liveVoices.delete(full.voiceId); pool.release(full.voiceId); } }, (full.desc.dur + 0.4) * 1000);
    } catch {
      pool.release(full.voiceId);
    }
  }

  // --- API pubblica ---
  const api = {
    bus, mixer, pool, music, vocals, ambient, debug, cache,
    get quality() { return quality; },
    get zone() { return zone; },
    setQuality(next) {
      if (!QUALITY[next]) return false;
      quality = next;
      pool.setMaxVoices(QUALITY[next].maxVoices);
      return true;
    },
    ensure() { return ensureCtx(); },
    get started() { return started; },
    ctxState: () => (BE.ctx ? BE.ctx.state : 'none'),
    emit(ev) { return route(ev); },
    on: (t, fn) => bus.on(t, fn),
    setWorld(patch) { Object.assign(world, patch); },
    setWeather(w) { world.weather = w; },
    // Occlusione/zone reali: buildingAt + losBlocked iniettati dal gioco.
    _zoneDeps: { buildingAt: opts.buildingAt ?? null, buildingTypeOf: opts.buildingTypeOf ?? null, roomsOf: opts.roomsOf ?? null, losBlocked: opts.losBlocked ?? null },
    update(dt, patch = {}) {
      Object.assign(world, patch);
      if (dt <= 0) return null;
      const q = QUALITY[quality];
      // zona acustica + crossfade
      const bId = this._zoneDeps.buildingAt ? this._zoneDeps.buildingAt(world.player.x, world.player.z) : null;
      const bType = this._zoneDeps.buildingTypeOf ? this._zoneDeps.buildingTypeOf(bId) : null;
      const rooms = this._zoneDeps.roomsOf ? this._zoneDeps.roomsOf(bId) : null;
      const nextZone = acousticZoneAt(world.player.x, world.player.z, world.player.y ?? 0, { buildingAt: bId ? () => bId : () => null, buildingType: bType, rooms });
      if (nextZone !== zone) { prevZone = zone; zone = nextZone; zoneBlend = 0; }
      zoneBlend = Math.min(1, zoneBlend + dt / 0.8); // ~300-1200ms a seconda del contesto
      const xf = crossfadeGains(prevZone, zone, zoneBlend, 800);
      insideGain = xf.insideGain; outsideGain = xf.outsideGain;
      // occlusione a bassa frequenza per sorgenti importanti (qui: player->mix proxy)
      occAcc += dt;
      const occHz = q.occlusionHz;
      if (occHz > 0 && occAcc >= 1 / occHz) {
        occAcc = 0;
        // proxy: quanto il player è "chiuso" (muro vicino tra player e fuori)
        const los = this._zoneDeps.losBlocked ?? opts.losBlocked;
        if (los && recent.length) {
          const last = recent[recent.length - 1];
          occlusion = occlusionFor(world.player.x, world.player.z, last.x, last.z, (ax, az, bx, bz) => { try { return los(ax, az, bx, bz, world.colliders); } catch { return false; } });
        } else if (!los) occlusion = { occluded: insideGain > 0.5, gainMul: insideGain > 0.5 ? 0.6 : 1, cutoffHz: insideGain > 0.5 ? 1600 : 20000 };
      } else if (occHz === 0) {
        occlusion = { occluded: false, gainMul: 1, cutoffHz: 20000 };
      }
      mixer.update(dt);
      // scheduler: ambient + voci + musica (densità scalata da qualità)
      const hour = hourFromSimT(world.simT);
      const dens = q.density;
      ambient.schedule(dt * dens, { player: world.player, zone, buildingType: bType, weather: world.weather });
      vocals.tick(dt * (0.6 + dens * 0.4), world.npcs, world.player, { hour, simT: world.simT });
      music.deriveFromGame({ policeAlert: world.policeAlert, playerWanted: world.playerWanted, combat: world.combat, fleeing: world.fleeing, calmFor: world.calmFor ?? 99 });
      music.update(dt, { player: world.player, interactables: world.interactables });
      // aggregato L2: ogni 2s un murmur singolo
      farAcc += dt;
      if (farAcc >= 2 && farBuffer.length >= 3) {
        farAcc = 0;
        const agg = aggregateFar(farBuffer.splice(0, farBuffer.length));
        if (agg && q.distant) route({ type: 'NPC_GIBBERISH', x: agg.x, z: agg.z, intensity: agg.intensity, crowd: agg.count }, { music: false });
        else farBuffer.length = 0;
      }
      // base loop segue zona/meteo (solo browser)
      try {
        if (BE.baseGain) BE.baseGain.gain.value = 0.1 + outsideGain * 0.12 + (world.weather === 'rain' ? 0.1 : 0);
        if (BE.baseFilter) BE.baseFilter.frequency.value = 300 + outsideGain * 250;
        // bus gains reali seguono mixer + ducking
        for (const [bname, g] of BE.busGains) {
          const target = bname === 'MASTER' ? 1 : mixer.effective(bname === 'MASTER' ? 'MASTER' : bname) * mixer.duckedGain(bname === 'MASTER' ? 'MASTER' : bname);
          g.gain.value += (Math.max(0, Math.min(2, target)) - g.gain.value) * Math.min(1, dt * 8);
        }
      } catch { /* noop */ }
      return { zone, insideGain, outsideGain, duck: mixer.duckState().amount };
    },
    notifyLoud(ev) { return vocals.chainReaction(ev, world.npcs, world.simT); },
    gameplay(kind, npc, extra) { return vocals.gameplayHook(kind, npc, extra); },
    snapshot() { return debug.snapshot(); },
    dispose() {
      try { BE.baseSrc?.stop(); } catch { /* noop */ }
      try { BE.ctx?.close(); } catch { /* noop */ }
      BE.ctx = null; BE.master = null; started = false; ctxState = 'none';
      pool.dispose(); bus.clear(); farBuffer.length = 0; recent.length = 0;
      profiles.clear();
    },
  };
  // autoplay: primo gesto inizializza/resume; visibility sospende/ripristina
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    const gesture = () => { ensureCtx(); };
    const optsOnce = { capture: true };
    window.addEventListener('pointerdown', gesture, optsOnce);
    window.addEventListener('touchstart', gesture, optsOnce);
    window.addEventListener('keydown', gesture, optsOnce);
    document.addEventListener('visibilitychange', () => {
      try {
        if (document.hidden) BE.ctx?.suspend?.();
        else if (started) BE.ctx?.resume?.();
        ctxState = BE.ctx ? BE.ctx.state : 'none';
      } catch { /* noop */ }
    });
    api._ungesture = () => {
      window.removeEventListener('pointerdown', gesture, optsOnce);
      window.removeEventListener('touchstart', gesture, optsOnce);
      window.removeEventListener('keydown', gesture, optsOnce);
    };
  }
  return api;
}
export { QUALITY };
