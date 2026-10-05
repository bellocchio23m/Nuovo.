import { describeBelief, effectiveConfidence } from '../sim/knowledge.js';
import { spotsKnown } from '../sim/playerKnowledge.js';
import { contractState, formatClock } from '../sim/contract.js';
import { PLACE_IT } from '../world/mapData.js';

export function makeHud(game) {
  const el = {
    top: document.getElementById('hud-top'),
    prompt: document.getElementById('prompt'),
    panel: document.getElementById('panel'),
    notebook: document.getElementById('notebook'),
    debug: document.getElementById('debug'),
    toast: document.getElementById('toast'),
    buttons: document.getElementById('hud-buttons')
  };
  let toastAt = 0;
  let lastPrompt = '\0'; // cache: niente DOM write se invariato
  const hud = {
    show() { el.top.style.display = 'flex'; el.buttons.style.display = 'block'; },
    toast(msg, ms = 2600) {
      el.toast.textContent = msg; el.toast.style.display = 'block'; toastAt = performance.now() + ms;
    },
    tickToast() { if (toastAt && performance.now() > toastAt) { el.toast.style.display = 'none'; toastAt = 0; } },
    setPrompt(msg) {
      const html = msg ?? '';
      if (html === lastPrompt) return;
      lastPrompt = html;
      if (!html) { el.prompt.style.display = 'none'; return; }
      el.prompt.style.display = 'block'; el.prompt.innerHTML = html;
    },
    togglePanel() {
      el.panel.style.display = el.panel.style.display === 'block' ? 'none' : 'block';
      if (el.panel.style.display === 'block') hud.renderPanel();
    },
    toggleNotebook() {
      el.notebook.style.display = el.notebook.style.display === 'block' ? 'none' : 'block';
      if (el.notebook.style.display === 'block') hud.renderNotebook();
    },
    renderNotebook() {
      const g = game, pk = g.pk, t = g.sim.t;
      const byId = Object.fromEntries(g.npcs.map(n => [n.id, n]));
      let h = `<h3>📓 Taccuino — solo ciò che hai osservato</h3>`;
      const win = contractState(g.sim, g.contract);
      h += `<div class="who"><b>Contratto: Marco</b> — maglia rossa, zona bar/piazza. Il resto devi scoprirlo tu.` +
        (win.active ? ` ⏱ finestra: <b>${formatClock(win.remaining)}</b>${win.expired ? ' (scaduta)' : ''}` : '') + `</div>`;
      const ids = Object.keys(pk.npcs).sort();
      if (!ids.length) h += `<div class="who">Non hai ancora osservato nessuno. Guarda le persone (devono starti davanti e in vista).</div>`;
      for (const id of ids) {
        const r = pk.npcs[id], n = byId[id];
        if (!n) continue;
        const name = r.named ? n.name : `sconosciuto (osservato ${r.time.toFixed(0)}s)`;
        const dead = n.state === 'dead' ? ' ☠ MORTO' : '';
        const last = r.last ? `${PLACE_IT[r.last.node] ?? r.last.node}, ${(t - r.last.t).toFixed(0)}s fa` : 'mai';
        const spots = spotsKnown(pk, id).map(s => PLACE_IT[s] ?? s).join(', ') || '—';
        h += `<div class="who"><b>${name}</b>${dead}<br>ultimo avvistamento: ${last}<br>luoghi abituali: ${spots}</div>`;
      }
      const pairs = Object.entries(pk.pairs).filter(([, c]) => c >= 20)
        .map(([k]) => {
          const [a, b] = k.split('+');
          const na = pk.npcs[a]?.named ? byId[a]?.name ?? a : 'sconosciuto';
          const nb = pk.npcs[b]?.named ? byId[b]?.name ?? b : 'sconosciuto';
          return `${na} ↔ ${nb}`;
        });
      if (pairs.length) h += `<h3>Spesso visti insieme</h3><div class="who">${pairs.join('<br>')}</div>`;
      el.notebook.innerHTML = h;
    },
    renderPanel() {
      const g = game, t = g.sim.t;
      let h = `<h3>GROUND TRUTH — event journal (${g.journal.events.length})</h3>`;
      if (!g.journal.events.length) h += `<div class="ev">nessun evento: il mondo è invariato.</div>`;
      for (const ev of g.journal.events) {
        h += `<div class="ev"><b>${ev.id}</b> t=${ev.t.toFixed(1)} · ${ev.type} sev=${ev.severity} · (${ev.x.toFixed(1)}, ${ev.z.toFixed(1)}) ${ev.actorId ? '· da ' + ev.actorId : ''} · testimoni veri: [${ev.witnesses.join(',') || '—'}]</div>`;
      }
      h += `<h3>CREDENZE NPC (parziali, con fonte/fiducia/età)</h3>`;
      for (const n of g.npcs) {
        h += `<div class="bel"><b>${n.name}</b> [${n.state}/${n.level}] mem:${n.memory.length}`;
        if (!n.beliefs.size) h += `<br>· crede: nulla di sospetto`;
        for (const [id, b] of n.beliefs) {
          const eff = Math.round(effectiveConfidence(b, t) * 100);
          h += `<br>· su ${id} (età ${(t - b.t).toFixed(0)}s): ${describeBelief(b, t)} [eff ${eff}%]`;
        }
        h += `</div>`;
      }
      el.panel.innerHTML = h;
    },
    renderDebug(fps, frameMs) {
      const r = game.renderer.renderer.info;
      const mem = performance.memory ? (performance.memory.usedJSHeapSize / 1048576).toFixed(0) + 'MB' : 'n/a';
      const s = game.sim.stats;
      el.debug.textContent =
        `FPS ${fps} · frame ${frameMs.toFixed(1)}ms · sim ${game.sim.simMs.toFixed(2)}ms · ai ${game.sim.aiMs.toFixed(2)}ms\n` +
        `NPC L1/${game.sim.counts.L1} L2/${game.sim.counts.L2} L3/${game.sim.counts.L3}\n` +
        `percep ${s.perceptionChecks} · gossip ${s.gossipOps} · path ${s.pathComputations} · think ${s.thinkRuns}\n` +
        `draw ${r.render.calls} · tri ${r.render.triangles} · heap ${mem}\n` +
        `errori: ${game.errors.length}` + (game.errors.length ? ` · ultimo: ${game.errors[game.errors.length - 1]}` : '');
    },
    toggleDebug() {
      el.debug.style.display = el.debug.style.display === 'block' ? 'none' : 'block';
    }
  };
  const onPanel = () => hud.togglePanel();
  const onSave = () => game.save();
  document.getElementById('btn-panel').addEventListener('click', onPanel);
  document.getElementById('btn-save').addEventListener('click', onSave);
  hud.dispose = () => {
    document.getElementById('btn-panel').removeEventListener('click', onPanel);
    document.getElementById('btn-save').removeEventListener('click', onSave);
  };
  return hud;
}
