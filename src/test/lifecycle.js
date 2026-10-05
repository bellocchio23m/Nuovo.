// Test LIFECYCLE (solo browser, ?lifecycle=1): boot, double boot, destroy,
// reinitialize, save/load DURANTE alert, save/load ripetuti, e assenza di
// timer/RAF/listener duplicati dopo ogni transizione. Misura i contatori
// patchando le API browser a livello globale per tutta la durata del test.
// Output: JSON in #lifecycle-out (letto da playwright) + console.
import { boot, destroy, isRunning, bootCountTotal } from '../main.js';

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

function patchCounters() {
  const c = { rafReg: 0, rafCancel: 0, intReg: 0, intCancel: 0, lisAdd: 0, lisRem: 0 };
  const orig = {
    raf: window.requestAnimationFrame.bind(window),
    caf: window.cancelAnimationFrame.bind(window),
    set: window.setInterval.bind(window),
    clr: window.clearInterval.bind(window),
    add: EventTarget.prototype.addEventListener,
    rem: EventTarget.prototype.removeEventListener
  };
  window.requestAnimationFrame = (fn) => { c.rafReg++; return orig.raf(fn); };
  window.cancelAnimationFrame = (id) => { c.rafCancel++; return orig.caf(id); };
  window.setInterval = (...a) => { c.intReg++; return orig.set(...a); };
  window.clearInterval = (id) => { if (id != null) c.intCancel++; return orig.clr(id); };
  EventTarget.prototype.addEventListener = function (...a) { c.lisAdd++; return orig.add.apply(this, a); };
  EventTarget.prototype.removeEventListener = function (...a) { c.lisRem++; return orig.rem.apply(this, a); };
  return {
    counters: c,
    activeRaf: () => c.rafReg - c.rafCancel,
    activeInt: () => c.intReg - c.intCancel,
    activeLis: () => c.lisAdd - c.lisRem,
    restore() {
      window.requestAnimationFrame = orig.raf;
      window.cancelAnimationFrame = orig.caf;
      window.setInterval = orig.set;
      window.clearInterval = orig.clr;
      EventTarget.prototype.addEventListener = orig.add;
      EventTarget.prototype.removeEventListener = orig.rem;
    }
  };
}

function T(name, pass, detail) { return { name, pass: !!pass, detail: String(detail ?? '') }; }

// Indici comportamentali (il delta reg/cancel di rAF non misura i loop attivi:
// un loop si ri-schedula da solo, il delta cresce a ogni frame).
// frozen()  -> il mondo NON avanza: nessun loop vivo.
// rate()    -> secondi di sim per secondo reale: ~1 con UN solo loop,
//              ~2 con due loop concorrenti (doppio frame -> doppio simTick).
async function frozen(game, ms = 300) {
  const a = game.sim.t; await sleep(ms); return game.sim.t === a;
}
async function rate(game, ms = 600) {
  const a = game.sim.t; await sleep(ms); return (game.sim.t - a) / (ms / 1000);
}

export async function runLifecycleTests() {
  const tests = [];
  const P = patchCounters();
  try {
    const lisBase = P.activeLis(); // listener statici già attivi (index.html/main)

    // --- boot ---
    await boot(true);
    const g1 = window.__p0?.game;
    tests.push(T('boot_runs', isRunning() && !!g1 && bootCountTotal() === 1,
      `running=${isRunning()} game=${!!g1} bootCount=${bootCountTotal()}`));
    const r1 = await rate(g1);
    tests.push(T('boot_single_loop', r1 > 0.3 && r1 < 1.6 && P.activeInt() === 1,
      `simSecondsPerRealSecond=${r1.toFixed(2)} intActive=${P.activeInt()}`));
    const lisOneBoot = P.activeLis(); // listener di UN solo boot attivo

    // --- double boot: nessun secondo loop/interval/listener. Il segnale e'
    //     comportamentale: con DUE loop concorrenti il mondo avanzerebbe ~2x. ---
    const intBefore = P.activeInt(), lisBefore = P.activeLis();
    await boot(true);
    const g2 = window.__p0?.game;
    const r2 = await rate(g2);
    tests.push(T('double_boot_idempotent',
      g2 !== g1 && isRunning() && bootCountTotal() === 2 &&
      r2 > 0.3 && r2 < 1.6 && P.activeInt() === intBefore && P.activeLis() === lisBefore,
      `gameSwapped=${g2 !== g1} rate=${r2.toFixed(2)} int ${intBefore}->${P.activeInt()} lis ${lisBefore}->${P.activeLis()}`));

    // --- save DURANTE alert + load: lo stato alerted sopravvive al ciclo ---
    const game = window.__p0.game;
    const npc = game.npcs[0];
    npc.state = 'alerted'; npc.fleeNode = 'road_e'; npc.alertedBy = 'ev1';
    npc.alertT = game.sim.t; npc.dwellLeft = 7.5;
    await game.save();
    destroy();
    const stopped = await frozen(game); // il mondo NON deve piu' avanzare
    tests.push(T('destroy_stops_everything', !isRunning() && window.__p0 === null &&
      stopped && P.activeInt() === 0 && P.activeLis() === lisBase,
      `worldFrozen=${stopped} int=${P.activeInt()} lis=${P.activeLis()}-base${lisBase}`));

    // --- reinitialize + load durante alert ---
    await boot(false); // continue: carica il save fatto sopra
    const g3 = window.__p0?.game;
    const n3 = g3?.npcs[0];
    tests.push(T('reinit_and_load_alert',
      isRunning() && !!n3 && n3.state === 'alerted' && n3.fleeNode === 'road_e' &&
      n3.dwellLeft === 7.5,
      `state=${n3?.state} flee=${n3?.fleeNode} dwell=${n3?.dwellLeft}`));

    // --- save/load ripetuti (5 cicli) senza perdita e senza doppioni ---
    let repeatedOk = true, detail = '';
    for (let i = 0; i < 5; i++) {
      const g = window.__p0.game;
      g.npcs[0].state = 'alerted'; g.npcs[0].fleeNode = 'road_e'; g.npcs[0].dwellLeft = 7.5;
      g.sim.t += 1.5; // stato che deve sopravvivere al ciclo
      const tBefore = g.sim.t, rngBefore = g.rng.state, seqBefore = g.journal.serialize().seq;
      await g.save();
      destroy();
      await boot(false);
      const g2b = window.__p0.game;
      const ok = Math.abs(g2b.sim.t - tBefore) < 1e-9 && g2b.rng.state === rngBefore &&
        g2b.journal.serialize().seq === seqBefore && g2b.npcs[0].dwellLeft === 7.5;
      if (!ok) { repeatedOk = false; detail = `cycle ${i}: t ${tBefore}->${g2b.sim.t} rng ${rngBefore}->${g2b.rng.state} seq ${seqBefore}->${g2b.journal.serialize().seq}`; break; }
    }
    tests.push(T('repeated_saveload_cycles', repeatedOk, detail || '5 cicli identici'));

    // --- nessun accumulo dai cicli ripetuti: UN solo loop (rate ~1), un solo
    //     autosave interval, listener di nuovo a baseline ---
    const rc = await rate(window.__p0.game);
    tests.push(T('no_duplicate_timers_after_cycles',
      rc > 0.3 && rc < 1.6 && P.activeInt() === 1 && P.activeLis() === lisOneBoot,
      `rate=${rc.toFixed(2)} int=${P.activeInt()} lis=${P.activeLis()}-oneBoot${lisOneBoot}`));

    const gameFinal = window.__p0.game;
    destroy();
    const stoppedFinal = await frozen(gameFinal);
    tests.push(T('final_destroy_clean', stoppedFinal && P.activeInt() === 0 &&
      P.activeLis() === lisBase,
      `worldFrozen=${stoppedFinal} int=${P.activeInt()} lis=${P.activeLis()}-base${lisBase}`));

    // --- FASE 2: HARD RELOAD REALE della pagina. Salvo uno stato noto, poi
    //     location.reload(): nuovo documento, nuovo JS, stesso IndexedDB.
    //     I risultati della fase 1 viaggiano in sessionStorage e la fase 2
    //     (runLifecyclePhase2) li ricompone con gli esiti del reload. ---
    P.restore();
    await boot(true);
    const gh = window.__p0.game;
    gh.npcs[0].state = 'alerted'; gh.npcs[0].fleeNode = 'road_e'; gh.npcs[0].dwellLeft = 7.5;
    await sleep(1500); // il mondo deve ADVANCIARE: save non banale (t>0, rng mutato)
    await gh.save();
    sessionStorage.setItem('p0-lc', JSON.stringify({
      tests,
      marker: {
        t: gh.sim.t, rng: gh.rng.state, seq: gh.journal.serialize().seq,
        seed: gh.seed, npcs: gh.npcs.length,
        npc0: { state: gh.npcs[0].state, fleeNode: gh.npcs[0].fleeNode,
          dwellLeft: gh.npcs[0].dwellLeft, agendaIdx: gh.npcs[0].agendaIdx }
      }
    }));
    location.reload();
    return await new Promise(() => {}); // la pagina sta per essere ricaricata
  } catch (e) {
    tests.push(T('lifecycle_exception', false, String(e.message ?? e)));
    try { destroy(); } catch { /* best-effort */ }
  } finally {
    P.restore();
  }
  const passed = tests.filter(t => t.pass).length;
  return { suite: 'p0-lifecycle', passed, total: tests.length, tests };
}

// FASE 2: eseguita DOPO il location.reload() della fase 1.
export async function runLifecyclePhase2() {
  const raw = sessionStorage.getItem('p0-lc');
  sessionStorage.removeItem('p0-lc');
  const data = raw ? JSON.parse(raw) : null;
  const tests = data?.tests ?? [];
  const T2 = (name, pass, detail) => tests.push(T(name, pass, detail));
  if (!data) {
    T2('hard_reload_marker', false, 'sessionStorage marker assente');
    return { suite: 'p0-lifecycle', passed: 0, total: 1, tests };
  }
  try {
    const m = data.marker;
    await boot(false); // LOAD: stesso IndexedDB, documento e JS nuovi (hard reload)
    const g = window.__p0?.game;
    const stateOk = !!g &&
      m.t > 0 &&
      Math.abs(g.sim.t - m.t) < 1e-9 && g.rng.state === m.rng &&
      g.journal.serialize().seq === m.seq && g.seed === m.seed &&
      g.npcs.length === m.npcs &&
      g.npcs[0].state === m.npc0.state && g.npcs[0].fleeNode === m.npc0.fleeNode &&
      Math.abs(g.npcs[0].dwellLeft - m.npc0.dwellLeft) < 1e-9;
    T2('hard_reload_loads_state', stateOk,
      `t ${m.t}->${g?.sim.t} rng ${m.rng}->${g?.rng.state} seq ${m.seq}->${g?.journal.serialize().seq} ` +
      `npc0=${g?.npcs[0].state}/${g?.npcs[0].fleeNode}/${g?.npcs[0].dwellLeft}`);
    const r = await rate(g);
    T2('hard_reload_continue_runs', r > 0.3 && r < 1.6, `rate=${r.toFixed(2)}`);
    const t2 = g.sim.t;
    destroy();
    const stoppedOk = await frozen(g) && g.sim.t === t2;
    T2('hard_reload_final_destroy', stoppedOk, `worldFrozen=${stoppedOk}`);
  } catch (e) {
    T2('phase2_exception', false, String(e.message ?? e));
    try { destroy(); } catch { /* best-effort */ }
  }
  const passed = tests.filter(t => t.pass).length;
  return { suite: 'p0-lifecycle', passed, total: tests.length, tests };
}
