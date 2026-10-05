// S10 — Facciata audio compatibile con il gioco esistente.
// makeAudio() mantiene la vecchia API (step/whistle/swing/...) ma delega al
// vero AudioWorldManager: bus, pool, spatial, zone, mixer, voci, musica.
// Nessun asset: sintesi procedurale, parte solo dopo gesto utente.
import { createAudioWorld } from './manager.js';

export function makeAudio(opts = {}) {
  const mgr = createAudioWorld(opts);
  const A = {
    _mgr: mgr,
    get ctx() { return null; }, // legacy: il contesto è interno al manager
    get master() { return null; },
    ensure() {
      const ok = mgr.ensure();
      // in Node (test) non c'è AudioContext: true logico comunque
      if (typeof window === 'undefined') return true;
      return ok;
    },
    // --- routing semantico diretto (nuova API) ---
    emit(ev) { return mgr.emit(ev); },
    on(type, fn) { return mgr.on(type, fn); },
    update(dt, patch) { return mgr.update(dt, patch); },
    setWorld(p) { return mgr.setWorld(p); },
    setQuality(q) { return mgr.setQuality(q); },
    gameplay(kind, npc, extra) { return mgr.gameplay(kind, npc, extra); },
    notifyLoud(ev) { return mgr.notifyLoud(ev); },
    snapshot() { return mgr.snapshot(); },
    get bus() { return mgr.bus; },
    get music() { return mgr.music; },
    get vocals() { return mgr.vocals; },
    get pool() { return mgr.pool; },
    get mixer() { return mgr.mixer; },
    get debug() { return mgr.debug; },
    // --- compatibilità legacy: ogni vecchio metodo emette l'evento semantico ---
    tone(freq, dur, type = 'sine', vol = 1, slide = 0) {
      void freq; void dur; void type; void vol; void slide;
      return mgr.emit({ type: 'OBJECT_DROP', intensity: 0.3 });
    },
    noiseBurst(dur, vol = 1, low = 400) {
      void dur; void vol; void low;
      return mgr.emit({ type: 'IMPACT', intensity: 0.3 });
    },
    step(run) { return mgr.emit({ type: run ? 'FOOTSTEP_RUN' : 'FOOTSTEP', intensity: run ? 0.55 : 0.35 }); },
    footstep(surface = 'asphalt', run = false, crouch = false) {
      return mgr.emit({ type: crouch ? 'FOOTSTEP_CROUCH' : run ? 'FOOTSTEP_RUN' : 'FOOTSTEP', intensity: crouch ? 0.22 : run ? 0.55 : 0.35, surface });
    },
    whistle() { return mgr.emit({ type: 'NPC_WHISTLE', intensity: 0.6 }); },
    swing() { return mgr.emit({ type: 'COMBAT', intensity: 0.35 }); },
    thud() { return mgr.emit({ type: 'IMPACT', intensity: 0.85 }); },
    clank() { return mgr.emit({ type: 'METAL_IMPACT', intensity: 0.6 }); },
    crash() { return mgr.emit({ type: 'OBJECT_BREAK', intensity: 0.9 }); },
    sting() {
      if (A.stingT) clearTimeout(A.stingT);
      mgr.emit({ type: 'ALARM', intensity: 0.7 });
      A.stingT = setTimeout(() => { A.stingT = 0; mgr.emit({ type: 'ALARM', intensity: 0.6 }); }, 180);
    },
    scream() { return mgr.emit({ type: 'NPC_SCREAM', intensity: 0.85 }); },
    door(slam = false) { return mgr.emit({ type: slam ? 'DOOR_SLAM' : 'DOOR_CLOSE', intensity: slam ? 0.9 : 0.55 }); },
    window() { return mgr.emit({ type: 'WINDOW_OPEN', intensity: 0.4 }); },
    drawer() { return mgr.emit({ type: 'OBJECT_DROP', intensity: 0.4 }); },
    pickup() { return mgr.emit({ type: 'OBJECT_DROP', intensity: 0.35 }); },
    switch_() { return mgr.emit({ type: 'ELECTRIC', intensity: 0.25 }); },
    sit() { return mgr.emit({ type: 'WOOD_IMPACT', intensity: 0.35 }); },
    phone() { return mgr.emit({ type: 'PHONE_RING', intensity: 0.55 }); },
    bell() { return mgr.emit({ type: 'DOORBELL', intensity: 0.6 }); },
    locked() { return mgr.emit({ type: 'METAL_IMPACT', intensity: 0.4 }); },
    ambience() { return true; }, // il base loop parte dentro ensure()
    dispose() {
      try { if (A.stingT) { clearTimeout(A.stingT); A.stingT = 0; } } catch { /* best-effort */ }
      try { mgr._ungesture?.(); } catch { /* noop */ }
      mgr.dispose();
    },
  };
  return A;
}
