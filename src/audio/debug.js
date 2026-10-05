// S10 — AudioDebugSystem (PURO): snapshot + marker vicini per il debug.
export function createAudioDebug(getSnapshot) {
  let enabled = false;
  return {
    get enabled() { return enabled; },
    setEnabled(v) { enabled = !!v; },
    toggle() { enabled = !enabled; return enabled; },
    snapshot() {
      try { return getSnapshot?.() ?? {}; } catch { return { error: 'snapshot-failed' }; }
    },
    // Righe pronte per l'HUD di debug (ACTIVE SOURCES, VOICE COUNT, BUS...).
    lines() {
      const s = this.snapshot();
      const pool = s.pool ?? {};
      const mixer = s.mixer ?? {};
      return [
        `AUDIO active=${pool.active ?? 0}/${pool.maxVoices ?? '-'} played=${pool.played ?? 0} stolen=${pool.stolen ?? 0} rejected=${pool.rejected ?? 0}`,
        `ZONE ${s.zone ?? '?'} reverb=${s.reverb ?? '-'} occlusion=${s.occlusion?.occluded ?? '-'} in=${(s.insideGain ?? 0).toFixed(2)} out=${(s.outsideGain ?? 0).toFixed(2)}`,
        `MUSIC ${s.musicState ?? '?'} npcVocals=${s.npcVocals ?? 0} ambient=${s.ambientScheduled ?? 0} buffers=${s.buffers ?? 0}`,
        `QUALITY ${s.quality ?? '?'} ctx=${s.ctxState ?? 'none'} duck=${(s.duck ?? 0).toFixed(2)} buses=${JSON.stringify(mixer.vols ?? {})}`,
      ];
    },
    // Marker sorgenti vicine (per overlay 3D di debug).
    markers() {
      const s = this.snapshot();
      return (s.recent ?? []).slice(0, 24).map((e) => ({ type: e.type, x: e.x, z: e.z, intensity: e.intensity }));
    },
  };
}
