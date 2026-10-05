// Audio sintetizzato WebAudio: nessun asset, parte solo dopo gesto utente.
// Suoni: passi, fischio, colpo, clang, crollo, sting d'allarme, ambience.
export function makeAudio() {
  const A = {
    ctx: null, master: null, stepAt: 0,
    ensure() {
      if (A.ctx) { if (A.ctx.state === 'suspended') A.ctx.resume(); return true; }
      try {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        if (!Ctx) return false;
        A.ctx = new Ctx();
        A.master = A.ctx.createGain();
        A.master.gain.value = 0.25;
        A.master.connect(A.ctx.destination);
        A.ambience();
      } catch { return false; }
      return !!A.ctx;
    },
    tone(freq, dur, type = 'sine', vol = 1, slide = 0) {
      if (!A.ensure()) return;
      const t = A.ctx.currentTime;
      const o = A.ctx.createOscillator(), g = A.ctx.createGain();
      o.type = type; o.frequency.setValueAtTime(freq, t);
      if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, freq + slide), t + dur);
      g.gain.setValueAtTime(vol, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + dur);
      o.connect(g); g.connect(A.master);
      o.start(t); o.stop(t + dur + 0.02);
    },
    noiseBurst(dur, vol = 1, low = 400) {
      if (!A.ensure()) return;
      const t = A.ctx.currentTime;
      const len = Math.floor(A.ctx.sampleRate * dur);
      const buf = A.ctx.createBuffer(1, len, A.ctx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
      const src = A.ctx.createBufferSource(); src.buffer = buf;
      const f = A.ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = low;
      const g = A.ctx.createGain(); g.gain.value = vol;
      src.connect(f); f.connect(g); g.connect(A.master);
      src.start(t);
    },
    step(run) { // passi: throttled dal chiamante
      A.noiseBurst(0.07, run ? 0.5 : 0.25, 500);
    },
    whistle() { A.tone(2200, 0.35, 'sine', 0.7, 600); },
    swing() { A.noiseBurst(0.12, 0.3, 1200); },
    thud() { A.noiseBurst(0.25, 0.9, 300); A.tone(90, 0.2, 'sine', 0.8, -40); },
    clank() { A.tone(620, 0.15, 'square', 0.3); A.tone(930, 0.1, 'square', 0.2); },
    crash() { A.noiseBurst(0.7, 1.0, 900); A.tone(70, 0.5, 'sine', 0.7, -30); },
    sting() {
      if (A.stingT) clearTimeout(A.stingT);
      A.tone(440, 0.4, 'sawtooth', 0.4, 220);
      // timeout tracciato: dispose() lo cancella (mai timer orfano dopo destroy)
      A.stingT = setTimeout(() => { A.stingT = 0; A.tone(554, 0.4, 'sawtooth', 0.4, 220); }, 180);
    },
    scream() { A.tone(900, 0.3, 'sawtooth', 0.35, 500); },
    // S7 — feedback sonoro delle interazioni (sintetizzato, nessun asset)
    door() { A.noiseBurst(0.15, 0.4, 700); A.tone(140, 0.18, 'triangle', 0.5, -40); },
    window() { A.noiseBurst(0.1, 0.25, 2000); A.tone(500, 0.1, 'triangle', 0.25, 120); },
    drawer() { A.noiseBurst(0.18, 0.35, 900); },
    pickup() { A.tone(660, 0.09, 'sine', 0.5); setTimeout(() => A.tone(990, 0.12, 'sine', 0.5), 90); },
    switch_() { A.tone(1200, 0.05, 'square', 0.25); },
    sit() { A.noiseBurst(0.12, 0.3, 400); },
    phone() { A.tone(440, 0.15, 'sine', 0.4); setTimeout(() => A.tone(480, 0.15, 'sine', 0.4), 200); },
    bell() { A.tone(880, 0.5, 'sine', 0.5, -80); setTimeout(() => A.tone(880, 0.5, 'sine', 0.4, -80), 350); },
    locked() { A.tone(180, 0.12, 'square', 0.35); setTimeout(() => A.tone(150, 0.15, 'square', 0.35), 140); },
    ambience() {
      // vento/citta': rumore filtrato in loop a basso volume
      const len = A.ctx.sampleRate * 2;
      const buf = A.ctx.createBuffer(1, len, A.ctx.sampleRate);
      const d = buf.getChannelData(0);
      let v = 0;
      for (let i = 0; i < len; i++) { v = v * 0.98 + (Math.random() * 2 - 1) * 0.02; d[i] = v; }
      const src = A.ctx.createBufferSource(); src.buffer = buf; src.loop = true;
      const f = A.ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 400;
      const g = A.ctx.createGain(); g.gain.value = 0.5;
      src.connect(f); f.connect(g); g.connect(A.master);
      src.start();
      A.ambienceSrc = src; // tracciato per dispose(): il loop non sopravvive al destroy
    },
    // Anti double-boot: ferma il loop ambience, cancella i timeout e chiude il
    // contesto. Senza, un secondo boot accumula contesti/loop attivi.
    dispose() {
      try { if (A.stingT) { clearTimeout(A.stingT); A.stingT = 0; } } catch { /* best-effort */ }
      try { A.ambienceSrc?.stop(); } catch { /* gia' fermato */ }
      A.ambienceSrc = null;
      try { A.ctx?.close(); } catch { /* best-effort */ }
      A.ctx = null; A.master = null;
    }
  };
  return A;
}
