import { makeGame, frame, save, spawnExtra } from './game.js';
import { loadGame, hasSave, readSaveData } from './persist/persistence.js';

// Lifecycle: BOOT -> RUN -> DESTROY. destroy() cancella RAF, interval,
// listener e asset: un secondo boot riparte pulito (testato da ?test=1).
let game = null;
let running = false;
let rafId = 0;
let autosaveId = 0;
let last = 0;
let fpsAcc = 0, fpsN = 0, fpsShown = 0, frameMs = 0;
let bootCount = 0;

export function isRunning() { return running; }
export function bootCountTotal() { return bootCount; }

export function destroy() {
  running = false;
  if (rafId) cancelAnimationFrame(rafId);
  rafId = 0;
  if (autosaveId) clearInterval(autosaveId);
  autosaveId = 0;
  const caught = document.getElementById('caught');
  if (caught) caught.style.display = 'none';
  if (game) { try { game.dispose(); } catch { /* dispose best-effort */ } game = null; }
  window.__p0 = null;
}

export async function boot(fresh) {
  destroy(); // idempotente: mai due loop/interval/listener attivi
  bootCount++;
  document.getElementById('start-screen').style.display = 'none';
  // Seed: Math.random SOLO per una nuova partita (entropia di bootstrap,
  // poi serializzata nel save). Il continue rilegge il seed dal save: mai un
  // RNG casuale di sessione, cosi' la ricostruzione degli NPC (roster +
  // ?npc=N sintetici) deriva dal save e non dal caso.
  let preloaded = null;
  if (!fresh) preloaded = await readSaveData();
  const seed = fresh ? ((Math.random() * 1e9) | 0)
    : (preloaded?.seed ?? ((Math.random() * 1e9) | 0));
  localStorage.setItem('quartiere-p0-lastseed', String(seed || 'continue'));
  game = makeGame(seed || ((Math.random() * 1e9) | 0));
  const qp = new URLSearchParams(location.search);
  if (qp.has('npc')) spawnExtra(game, Math.max(0, parseInt(qp.get('npc') || '0', 10)));
  if (!fresh) {
    try {
      const data = await loadGame(game, preloaded);
      if (game.loadWarnings?.length) {
        game.hud.toast('⚠ ' + game.loadWarnings.join(', '), 4000);
      }
    } catch (e) {
      destroy();
      document.getElementById('start-screen').style.display = 'flex';
      document.getElementById('start-msg').textContent =
        'Save incompatibile: ' + String(e.message ?? e).slice(0, 140);
      return;
    }
  }
  game.save = () => save(game);
  game.audio.ensure(); // gesto utente valido: sblocca WebAudio
  game.hud.show();
  running = true;
  last = performance.now();
  autosaveId = setInterval(() => { if (running && !document.hidden) save(game); }, 30000);
  rafId = requestAnimationFrame(loop);
  window.__p0 = {
    game,
    save: () => save(game),
    journal: () => game.journal.events,
    beliefs: (id) => [...(game.npcs.find(n => n.id === id)?.beliefs.entries() ?? [])],
    tp: (x, z) => { game.player.x = x; game.player.z = z; },
    npcPos: (id) => { const n = game.npcs.find(n => n.id === id); return { x: n.x, z: n.z, state: n.state, level: n.level }; },
    fps: () => fpsShown,
    destroy
  };
  return game;
}

function loop(now) {
  if (!running) return;
  rafId = requestAnimationFrame(loop);
  const t0 = performance.now();
  const dt = (now - last) / 1000;
  last = now;
  fpsAcc += 1 / Math.max(dt, 1e-4); fpsN++;
  if (fpsN >= 30) { fpsShown = Math.round(fpsAcc / fpsN); fpsAcc = 0; fpsN = 0; }
  frame(game, dt);
  frameMs = frameMs * 0.9 + (performance.now() - t0) * 0.1;
  game.fps = fpsShown; game.frameMs = frameMs;
  if (document.getElementById('debug').style.display === 'block') game.hud.renderDebug(fpsShown, frameMs);
  if (document.getElementById('panel').style.display === 'block' && (game._pTick = (game._pTick ?? 0) + 1) % 20 === 0) game.hud.renderPanel();
}

const params = new URLSearchParams(location.search);
if (params.has('test')) {
  // Self-test headless: nessun game loop, harness deterministici + suite
  // infrastruttura (stessi test di npm test, eseguiti anche nel browser).
  (async () => {
    const { runAllTests } = await import('./test/harness.js');
    const { runInfraTests } = await import('./test/infra.js');
    const foundation = await runAllTests();
    const infra = runInfraTests();
    const all = [...foundation.tests, ...infra.tests];
    const res = {
      passed: all.filter(t => t.pass).length, total: all.length,
      suites: [foundation.suite, infra.suite], tests: all
    };
    document.body.innerHTML = `<pre id="test-out" style="padding:16px;font:12px monospace;white-space:pre-wrap">${escapeHtml(JSON.stringify(res, null, 1))}</pre>`;
    console.log('[P0-TEST]', JSON.stringify(res));
  })();
} else if (params.has('bench')) {
  const n = Math.max(1, parseInt(params.get('bench') || '5', 10));
  (async () => {
    const { runBench } = await import('./test/harness.js');
    const res = runBench(n, 12345);
    document.body.innerHTML = `<pre id="bench-out" style="padding:16px;font:12px monospace;white-space:pre-wrap">${escapeHtml(JSON.stringify(res, null, 1))}</pre>`;
    console.log('[P0-BENCH]', JSON.stringify(res));
  })();
} else if (params.has('gfxbench')) {
  // Benchmark GRAFICO reale: boot con ?npc=N, cattura renderer.info (draw
  // calls/triangles), heap, sim/ai ms dopo N frame. Misurato su vero canvas.
  (async () => {
    const frames = Math.max(60, parseInt(params.get('frames') || '240', 10));
    await boot(true);
    const g = window.__p0.game;
    const samples = [];
    let n = 0;
    await new Promise((resolve) => {
      const step = () => {
        n++;
        if (n % 30 === 0) samples.push(collect(g));
        if (n >= frames) resolve(); else requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    const last = samples[samples.length - 1] ?? collect(g);
    const res = { ...last, frames, samples: samples.length };
    destroy();
    document.body.innerHTML = `<pre id="gfxbench-out" style="padding:16px;font:12px monospace;white-space:pre-wrap">${escapeHtml(JSON.stringify(res, null, 1))}</pre>`;
    console.log('[P0-GFXBENCH]', JSON.stringify(res));
  })();
  function collect(g) {
    const info = g.renderer.renderer.info;
    const mem = performance.memory
      ? Math.round(performance.memory.usedJSHeapSize / 1048576) : null;
    return {
      npcs: g.npcs.length,
      drawCalls: info.render.calls, triangles: info.render.triangles,
      geometries: info.memory.geometries, programs: info.programs?.length ?? null,
      heapMB: mem,
      simMs: +g.sim.simMs.toFixed(3), aiMs: +g.sim.aiMs.toFixed(3),
      frameMs: +g.frameMs.toFixed(2), fps: g.fps,
      levels: { ...g.sim.counts },
      thinkRuns: g.sim.stats.thinkRuns, gossipOps: g.sim.stats.gossipOps,
      pathComputations: g.sim.stats.pathComputations,
      perceptionChecks: g.sim.stats.perceptionChecks,
      eventCount: g.journal.events.length
    };
  }
} else if (params.has('lifecycle')) {
  // Test lifecycle completi nel browser reale (RAF/interval/listener/IndexedDB).
  (async () => {
    const { runLifecycleTests, runLifecyclePhase2 } = await import('./test/lifecycle.js');
    // Dopo il location.reload() della fase 1 il marker 'p0-lc' sopravvive in
    // sessionStorage (stessa origin): in quel caso si esegue la fase 2,
    // che verifica save -> HARD RELOAD -> load -> continue.
    const res = sessionStorage.getItem('p0-lc')
      ? await runLifecyclePhase2()
      : await runLifecycleTests();
    document.body.innerHTML = `<pre id="lifecycle-out" style="padding:16px;font:12px monospace;white-space:pre-wrap">${escapeHtml(JSON.stringify(res, null, 1))}</pre>`;
    console.log('[P0-LIFECYCLE]', JSON.stringify(res));
  })();
} else {
  document.getElementById('btn-new').addEventListener('click', () => boot(true));
  document.getElementById('btn-continue').addEventListener('click', () => boot(false));
  document.getElementById('btn-retry').addEventListener('click', () => {
    document.getElementById('caught').style.display = 'none';
    boot(true);
  });
  hasSave().then(ok => {
    if (!ok) document.getElementById('btn-continue').style.opacity = '0.4';
  });
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
