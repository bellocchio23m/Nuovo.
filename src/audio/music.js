// S10 — MusicSystem: diegetica (dal mondo) + adattiva leggera (PURO stato).
// La musica proviene da sorgenti fisiche (radio bar, TV, auto, negozi).
// L'adattiva cinematografica usa layer separati con crossfade, mai stacchi.
export const MUSIC_STATES = ['NORMAL', 'SUSPICION', 'TENSION', 'HUNT', 'DANGER', 'ESCAPE', 'AFTERMATH'];
export const MUSIC_LAYERS = ['ambient', 'rhythm', 'tension', 'bass', 'texture', 'percussion'];

const STATE_LAYERS = {
  NORMAL: { ambient: 0.5, rhythm: 0.0, tension: 0.0, bass: 0.15, texture: 0.25, percussion: 0.0 },
  SUSPICION: { ambient: 0.5, rhythm: 0.2, tension: 0.3, bass: 0.2, texture: 0.3, percussion: 0.0 },
  TENSION: { ambient: 0.4, rhythm: 0.35, tension: 0.55, bass: 0.35, texture: 0.35, percussion: 0.15 },
  HUNT: { ambient: 0.3, rhythm: 0.6, tension: 0.7, bass: 0.5, texture: 0.3, percussion: 0.45 },
  DANGER: { ambient: 0.25, rhythm: 0.8, tension: 0.9, bass: 0.7, texture: 0.35, percussion: 0.7 },
  ESCAPE: { ambient: 0.3, rhythm: 0.9, tension: 0.8, bass: 0.75, texture: 0.3, percussion: 0.85 },
  AFTERMATH: { ambient: 0.65, rhythm: 0.05, tension: 0.15, bass: 0.2, texture: 0.4, percussion: 0.0 },
};

export function createMusicSystem({ emit } = {}) {
  let state = 'NORMAL';
  const levels = { ...STATE_LAYERS.NORMAL };
  const targets = { ...STATE_LAYERS.NORMAL };
  // sorgenti diegetiche fisiche: volume/genere/stazione/distanza/occlusione/stanza
  const diegetic = [
    { id: 'radio_bar', type: 'RADIO', x: -19.2, z: 25.2, volume: 0.7, genre: 'italiana', station: 'Radio Quartiere 88.1', room: 'bar_store', on: true },
    { id: 'tv_b4', type: 'TV', x: -19.8, z: -15.7, volume: 0.5, genre: 'news', station: 'TG', room: 'b4_living', on: false },
    { id: 'shop_music', type: 'MUSIC_DIEGETIC', x: 23.2, z: 18.0, volume: 0.55, genre: 'pop', station: 'Negozio', room: 'b3_sales', on: true },
    { id: 'apt_radio', type: 'RADIO', x: 13.4, z: 17.2, volume: 0.4, genre: 'classica', station: 'Radio Casa', room: 'b2_living', on: true },
    { id: 'car_radio', type: 'MUSIC_DIEGETIC', x: 8, z: -3, volume: 0.45, genre: 'rock', station: 'Auto rossa', room: null, on: false },
    { id: 'workshop_radio', type: 'RADIO', x: -36, z: 19, volume: 0.5, genre: 'sport', station: 'Officina', room: 'svc', on: true },
  ];
  const stats = { transitions: 0, stingers: 0, diegeticEvents: 0 };
  function setState(next, { stinger = false } = {}) {
    if (!MUSIC_STATES.includes(next) || next === state) return false;
    state = next;
    Object.assign(targets, STATE_LAYERS[next]);
    stats.transitions++;
    if (stinger) {
      stats.stingers++;
      try { emit?.({ type: 'MUSIC_ADAPTIVE', x: 0, z: 0, intensity: 0.9, stinger: true, musicState: state, layer: 'EVENT' }); } catch { /* noop */ }
    }
    return true;
  }
  // Deriva lo stato da gameplay (solo segnali esistenti: polizia/alert/fuga).
  function deriveFromGame({ policeAlert = false, playerWanted = false, combat = false, fleeing = false, calmFor = 0 } = {}) {
    if (combat || playerWanted) return setState('DANGER', { stinger: true });
    if (fleeing) return setState('ESCAPE');
    if (policeAlert) return setState('HUNT');
    if (calmFor > 20 && (state === 'DANGER' || state === 'ESCAPE' || state === 'HUNT')) return setState('AFTERMATH');
    if (calmFor > 45 && state === 'AFTERMATH') return setState('NORMAL');
    return false;
  }
  function update(dt, ctx = {}) {
    // crossfade layer verso target (mai stacchi brutali)
    const k = Math.min(1, dt / 1.2);
    for (const l of MUSIC_LAYERS) levels[l] += (targets[l] - levels[l]) * k;
    const out = [];
    // diegetica: emetti ping periodici per sorgenti accese vicine (≤40m)
    update._acc = (update._acc ?? 0) + dt;
    if (update._acc >= 2 && ctx.player) {
      update._acc = 0;
      // TV/radio seguono gli interruttori reali (interactables passati dal manager)
      if (ctx.interactables) {
        const on = (id, want) => { const s = diegetic.find((d) => d.id === id); if (s) s.on = want; };
        try {
          on('tv_b4', ctx.interactables.dev_b4_tv?.state === 'on');
          on('radio_bar', ctx.interactables.dev_radio?.state !== 'off');
        } catch { /* best-effort */ }
      }
      for (const s of diegetic) {
        if (!s.on) continue;
        const d = Math.hypot(s.x - ctx.player.x, s.z - ctx.player.z);
        if (d > 45) continue;
        stats.diegeticEvents++;
        const ev = { type: s.type, x: s.x, z: s.z, intensity: s.volume * Math.max(0.15, 1 - d / 50), genre: s.genre, station: s.station, room: s.room, diegetic: true, layer: 'LOCAL' };
        out.push(ev);
        try { emit?.(ev); } catch { /* noop */ }
      }
    }
    return out;
  }
  return {
    MUSIC_STATES, MUSIC_LAYERS,
    getState: () => state,
    getLevels: () => ({ ...levels }),
    getTargets: () => ({ ...targets }),
    setState, deriveFromGame, update,
    diegeticSources: () => diegetic.map((d) => ({ ...d })),
    setDiegetic(id, patch) { const s = diegetic.find((d) => d.id === id); if (s) Object.assign(s, patch); },
    stats: () => ({ ...stats, state }),
  };
}
