import { think, stepAlongPath, stepToward } from './ai.js';
import { observeEvent, canSee, SIGHT_RANGE } from './perception.js';
import { makeBelief, mergeBelief, pruneBeliefs } from './knowledge.js';
import { memorize, pruneMemory } from './npc.js';
import { awarenessTick } from './awareness.js';
import { footstepTick } from './noise.js';
import { visibleForDiscovery } from './conceal.js';
import { WORLD } from '../world/mapData.js';
import { resolveCircle, losBlocked } from '../world/world.js';
import { nearestNode, arrivalRadius } from '../world/navigation.js';

// Scheduler a budget fisso con 3 livelli:
// L1 (<=L1_RADIUS, max L1_CAP): movimento + percezione + think 4Hz.
// L2 (<=L2_RADIUS): think 2Hz, movimento reale (mappa piccola), percezione
//   offerta solo con pre-check economico (distanza) prima di cono/LOS.
// L3 (oltre): SOLO agenda simbolica; il corpo si sposta solo se il giocatore
//   non può osservarlo (lontano + LOS ostruita), altrimenti si CONGELA senza
//   avanzare l'agenda (coerenza agenda/corpo garantita).
export const L1_RADIUS = 30;
const L2_RADIUS = 60;
const L1_CAP = 12;
// Isteresi dei livelli (Step I): demozione con margine + incumbency sul cap.
// Senza questi margini il confine 30m/60m fa flippare livelli ogni tick.
const L1_MARGIN = 5; // metri extra prima di decadere da L1 (sul raggio)
const L1_GAP = 4;    // distacco minimo con cui uno scalzo prende il posto
const L2_MARGIN = 5; // margine di demozione L2 -> L3
const AI_BUDGET_MS = 2; // solo telemetria: MAI vincolante per lo stato (determinismo)
// Cap deterministico di think per tick. Misurato: max reale 4 (12 npc), 7 (30),
// 22 (80) think/tick -> 24 non altera le scale attuali ma bounda il lavoro.
const AI_THINK_CAP = 24;
const GRID_CELL = 8;
// Raggio di "inciampo": un corpo entro questa distanza (e senza muri in mezzo)
// viene notato anche fuori cono. Dopo: serve il test percettivo completo.
const STUMBLE_RADIUS = 2.0;
// Finestra di osservazione: un evento resta OFFERTO per questo intervallo
// (secondi di sim) invece di svanire al primo tick: cosi' l'attenzione puo'
// maturare (osservazione prolungata) e chi arriva in cono entro la finestra
// puo' ancora vederlo. L'eta' deriva da ev.t -> identica dopo save/load.
const OBS_WINDOW = 2;

export function makeSimulation(npcs, journal, colliders, navAdj, rng, hooks = {}) {
  return {
    t: 0, npcs, journal, colliders, navAdj, rng, hooks,
    counts: { L1: 0, L2: 0, L3: 0 }, simMs: 0, aiMs: 0,
    unseen: [],
    grid: new Map(),
    stats: {
      perceptionChecks: 0, gossipOps: 0, pathComputations: 0, thinkRuns: 0, pruned: 0,
      thinkByLevel: { L1: 0, L2: 0, L3: 0 },
      budgetSkips: 0, budgetPressure: 0, corpseDiscoveries: 0
    },
    pruneAt: 0, corpseAt: 0,
    corpseReported: new Set() // deadId con evento found_corpse già pubblicato
  };
}

function gridKey(x, z) {
  return `${Math.floor(x / GRID_CELL)},${Math.floor(z / GRID_CELL)}`;
}

function rebuildGrid(sim) {
  sim.grid.clear();
  sim.npcs.forEach((n, i) => {
    const k = gridKey(n.x, n.z);
    let a = sim.grid.get(k);
    if (!a) { a = []; sim.grid.set(k, a); }
    a.push(i);
  });
}

function nearby(sim, npc, r) {
  const out = [];
  const cx = Math.floor(npc.x / GRID_CELL), cz = Math.floor(npc.z / GRID_CELL);
  const cr = Math.ceil(r / GRID_CELL);
  const r2 = r * r;
  for (let gx = cx - cr; gx <= cx + cr; gx++) {
    for (let gz = cz - cr; gz <= cz + cr; gz++) {
      const a = sim.grid.get(`${gx},${gz}`);
      if (!a) continue;
      for (const i of a) {
        const o = sim.npcs[i];
        if (o === npc || o.state === 'dead') continue;
        const dx = o.x - npc.x, dz = o.z - npc.z;
        if (dx * dx + dz * dz <= r2) out.push(o);
      }
    }
  }
  return out;
}

// Il DISCRIPTORE riceve SEMPRE la credenza: chi scopre il corpo (coni o
// inciampandoci sopra) non dipende dall'offerta del tick successivo, che puo'
// non vederlo piu'. Posizione PERCEPITA (rumore), mai le coordinate vere in
// chiaro; confidence alta per chi ci e' inciampato sopra. Ritorna true se ha
// appreso (-> conta + hook onWitness).
function ensureDiscovererKnows(sim, ev, finder, stumbled) {
  let confidence, px, pz, error = null;
  if (stumbled) {
    confidence = 0.95;
    const noise = 0.3; // quasi sopra il corpo: errore minimo
    px = ev.x + (sim.rng.next() + sim.rng.next() - 1) * noise;
    pz = ev.z + (sim.rng.next() + sim.rng.next() - 1) * noise;
  } else {
    const r = canSee(finder, ev.x, ev.z, sim.colliders, sim.rng);
    if (!r.seen) return false; // non dovrebbe succedere: appena visto
    confidence = r.confidence; px = r.px; pz = r.pz; error = r.error;
  }
  const res = mergeBelief(finder.beliefs, ev.id, makeBelief({
    kind: ev.type, severity: ev.severity, px, pz, place: ev.place,
    actor: ev.actorId === 'player' ? 'uomo in verde' : (ev.actorId ?? 'sconosciuto'),
    subject: ev.victimId ?? null,
    channel: 'seen', confidence, t: sim.t, error, moved: !!ev.moved, provenance: []
  }), finder.id);
  if (res === 'ignored') return false;
  memorize(finder, ev.id);
  sim.journal.addWitness(ev, finder.id);
  return true;
}

export function simTick(sim, player, dt) {
  const t0 = performance.now();
  sim.t += dt;
  let c1 = 0, c2 = 0, c3 = 0;

  // 1. percezione: ogni evento entro OBS_WINDOW è OFFERTO a ogni NPC vivo;
  //    vedere o no dipende da cono/LOS/distanza (a ogni tick della finestra,
  //    quindi osservazione prolungata). I morti non percepiscono.
  for (const ev of sim.unseen) {
    for (const n of sim.npcs) {
      if (n.state === 'dead') continue;
      const dx = n.x - ev.x, dz = n.z - ev.z;
      if (dx * dx + dz * dz > 15 * 15) continue; // SIGHT_RANGE², identico al test interno
      sim.stats.perceptionChecks++;
      if (observeEvent(n, ev, sim.colliders, sim.rng, sim.t, sim.journal, dt) === 'learned') {
        sim.hooks.onWitness?.(n, ev);
      }
    }
  }
  // invecchiamento della finestra (ev.t == tempo di pubblicazione); uscendo
  // dall'offerta, la fissazione su quell'evId non ha piu' senso: la cancelliamo
  // (nessun accumulo che resta per sempre = nessuna fuga di memoria)
  for (let i = sim.unseen.length - 1; i >= 0; i--) {
    if (sim.t - sim.unseen[i].t > OBS_WINDOW) {
      const gone = sim.unseen[i];
      for (const n of sim.npcs) if (n.gaze) delete n.gaze[gone.id];
      sim.unseen.splice(i, 1);
    }
  }

  // 1b. attenzione CONTINUA verso il player: crouch/copertura/corsa hanno
  //     effetto su chiunque, non solo sulla polizia (v. sim/awareness.js).
  awarenessTick(sim, player, dt);
  // 1c. passi in corsa: udito puro (canale 'heard', mai identità), range fisso.
  footstepTick(sim, player, dt);

  // 2. classificazione livelli CON ISTERESI: un L1 decade solo oltre
  //    L1_RADIUS+L1_MARGIN e solo se nel cap c'e' posto per altri; lo scalzo
  //    deve essere almeno L1_GAP metri piu' vicino (incumbency). L2 tiene la
  //    fascia con margine. Il cap resta ASSOLUTO (L1 <= 12, test scale_80).
  //    Ordine stabile, nessun RNG: replay identico.
  const withDist = sim.npcs.map(n => ({ n, d: Math.hypot(n.x - player.x, n.z - player.z) }))
    .sort((a, b) => a.d - b.d); // stable: a parita' di d conta l'ordine npcs
  const eligible = [];
  for (const o of withDist) {
    const prevL1 = o.n.level === 'L1';
    const inRadius = prevL1 ? o.d <= L1_RADIUS + L1_MARGIN : o.d <= L1_RADIUS;
    if (inRadius) eligible.push({ o, eff: o.d - (prevL1 ? L1_GAP : 0) });
  }
  eligible.sort((a, b) => a.eff - b.eff); // stable su eff
  const l1set = new Set(eligible.slice(0, L1_CAP).map(e => e.o.n));
  for (const { n, d } of withDist) {
    const prev = n.level;
    const l2Stay = (prev === 'L1' || prev === 'L2') ? L2_RADIUS + L2_MARGIN : L2_RADIUS;
    n.level = l1set.has(n) ? 'L1' : (d <= l2Stay ? 'L2' : 'L3');
    if (n.level === 'L1') c1++; else if (n.level === 'L2') c2++; else c3++;
  }
  rebuildGrid(sim);

  // 3. timer think decrementati PRIMA in un passo separato: lo stagger resta
  //    consistente a prescindere dall'ordine di esecuzione (rotato, v. 3b).
  for (const { n } of withDist) n.thinkAt -= dt;
  const ai0 = performance.now();
  const stealth = {
    x: player.x, z: player.z,
    crouch: !!player.crouch, running: !!player.running
  };
  const corpsesNear = (x, z, r) => {
    let best = null, bd = r * r;
    for (const n of sim.npcs) {
      if (n.state !== 'dead') continue;
      const dx = n.x - x, dz = n.z - z, d2 = dx * dx + dz * dz;
      if (d2 >= bd) continue;
      // corpo occultato: non si "conferma" se non arrivandoci quasi addosso
      if (!visibleForDiscovery(n, dx, dz, r)) continue;
      if (!losBlocked(x, z, n.x, n.z, sim.colliders)) { bd = d2; best = n; }
    }
    return best ? { x: best.x, z: best.z, id: best.id } : null;
  };
  const ctx = {
    t: sim.t, npcs: sim.npcs, navAdj: sim.navAdj,
    rng: sim.rng, dtThink: 0.25, stats: sim.stats,
    nearby: (npc, r) => nearby(sim, npc, r),
    player, playerStealth: stealth, colliders: sim.colliders, corpsesNear,
    onGossip: sim.hooks.onGossip, onInterview: sim.hooks.onInterview,
    onPoliceState: sim.hooks.onPoliceState, onCaught: sim.hooks.onCaught,
    onArrest: sim.hooks.onArrest
    // NOTA: niente journal qui. Le decisioni usano solo npc.beliefs.
  };
  // 3b. think con budget DETERMINISTICO: cap su numero di think per tick e
  //     ordine ruotato derivato da sim.t (fairness: senza rotazione il cap
  //     sacrificava sempre la coda, gli NPC piu lontani). L'orologio di
  //     parete resta solo telemetria: non influenza mai quali NPC pensano.
  const tickIndex = Math.round(sim.t / dt);
  let thinks = 0, pressured = false;
  for (let i = 0; i < withDist.length; i++) {
    const { n } = withDist[(i + tickIndex) % withDist.length];
    const period = n.level === 'L1' ? 0.25 : 0.5;
    if (n.thinkAt <= 0 && n.level !== 'L3' && n.state !== 'dead') {
      if (thinks >= AI_THINK_CAP) { sim.stats.budgetSkips++; continue; }
      thinks++;
      n.thinkAt = period; sim.stats.thinkRuns++; sim.stats.thinkByLevel[n.level]++; think(n, ctx);
      if (!pressured && (thinks & 3) === 0 && performance.now() - ai0 > AI_BUDGET_MS) {
        pressured = true; sim.stats.budgetPressure++;
      }
    }
  }
  sim.aiMs = performance.now() - ai0;

  // 4. movimento (i morti restano dove sono: il corpo è persistente)
  for (const { n } of withDist) {
    if (n.state === 'dead') { n.speed = 0; continue; }
    if (n.level === 'L3' && n.state !== 'arrested') { // arrestato: fermo ovunque
      n.symbolAt = (n.symbolAt ?? 0) + dt;
      if (n.symbolAt > 6) {
        n.symbolAt = 0;
        const step = n.agenda[n.agendaIdx % n.agenda.length];
        const node = WORLD.nodes[step.node];
        const far = Math.hypot(n.x - player.x, n.z - player.z) > 45;
        if (node && far && losBlocked(player.x, player.z, node.x, node.z, sim.colliders)) {
          n.x = node.x; n.z = node.z;
          n.agendaIdx++; // avanza SOLO se il corpo si è mosso: coerenza garantita
        }
        // altrimenti: congelato, agenda ferma. Mai teletrasporto a vista.
      }
      continue;
    }
    if (n.state !== 'walk' && n.state !== 'alerted' && n.state !== 'curious') { n.speed = 0; continue; }
    if (n.state === 'curious' && n.gotoX != null) {
      // goto sanitizzato: un punto percepito dentro un collider non puo' essere
      // una destinazione (l'NPC spingerebbe all'infinito contro il muro).
      const g = resolveCircle(n.gotoX, n.gotoZ, 0.35, sim.colliders);
      n.gotoX = g.x; n.gotoZ = g.z;
      const arrived = stepToward(n, n.gotoX, n.gotoZ, dt, n.role === 'police' ? 2.4 : 1.7);
      if (arrived) { n.state = 'dwell'; n.dwellLeft = 3 + sim.rng.next() * 4; n.gotoX = null; n.gotoZ = null; }
    } else if (n.state === 'alerted' && n.fleeNode) {
      const node = WORLD.nodes[n.fleeNode];
      const dx = node.x - n.x, dz = node.z - n.z, d = Math.hypot(dx, dz);
      // arrivo fugge: soglia coerente col path (max con il minimo storico 1.5,
      // raggio per-nodo dove il clearance lo richiede: mai stallo contro collider)
      if (d < Math.max(1.5, arrivalRadius(n.fleeNode))) { n.state = 'dwell'; n.dwellLeft = 5; n.fleeNode = null; }
      else {
        const v = 2.6;
        n.x += (dx / d) * v * dt; n.z += (dz / d) * v * dt;
        n.yaw = Math.atan2(dx, dz); n.speed = v;
      }
    } else {
      stepAlongPath(n, dt, 1.6);
    }
    const r = resolveCircle(n.x, n.z, 0.35, sim.colliders);
    n.x = r.x; n.z = r.z;
  }

  // 4b. separazione NPC↔NPC (solo L1/L2: L3 resta congelato, i morti sono
  //     corpi persistenti). Push-out a distanza minima R, nessun RNG: ordine
  //     stabile (withDist + griglia), replay identico. Dopo la spinta si
  //     ririsolve il collider cosi' la separazione non infila nessuno in un muro.
  rebuildGrid(sim);
  const SEP_R = 0.7, SEP_R2 = SEP_R * SEP_R;
  for (const { n } of withDist) {
    if (n.state === 'dead' || n.level === 'L3') continue;
    for (const o of nearby(sim, n, SEP_R)) {
      if (o.level === 'L3') continue;
      if (o.id < n.id) continue; // ogni coppia considerata una sola volta
      let dx = o.x - n.x, dz = o.z - n.z, d2 = dx * dx + dz * dz;
      if (d2 >= SEP_R2) continue;
      if (d2 < 1e-9) { dx = 1; dz = 0; d2 = 1; } // stessa posizione: asse fisso
      const d = Math.sqrt(d2), push = (SEP_R - d) / 2;
      n.x -= (dx / d) * push; n.z -= (dz / d) * push;
      o.x += (dx / d) * push; o.z += (dz / d) * push;
      const rn = resolveCircle(n.x, n.z, 0.35, sim.colliders); n.x = rn.x; n.z = rn.z;
      const ro = resolveCircle(o.x, o.z, 0.35, sim.colliders); o.x = ro.x; o.z = ro.z;
    }
  }

  // 5. scoperta cadavere (ogni 1s): la VERITÀ "è stato scoperto" nasce SOLO
  //    se un vivo lo percepisce davvero — cono+LOS come ogni altra osservazione,
  //    oppure inciampandolo entro STUMBLE_RADIUS (un corpo a 2m non si "vede
  //    col cono": si inciampa). Se nessuno lo percepisce NON si pubblica nulla
  //    e il corpo resta non-segnalato: nessuna verità senza chi la conosce, e
  //    un osservatore successivo potrà comunque scoprirlo (niente lock eterno).
  //    Chi scopre riceve SEMPRE la credenza (v. ensureDiscovererKnows).
  if (sim.t - sim.corpseAt > 1) {
    sim.corpseAt = sim.t;
    for (const dead of sim.npcs) {
      if (dead.state !== 'dead' || sim.corpseReported.has(dead.id)) continue;
      let finder = null, stumbled = false;
      for (const n of sim.npcs) {
        if (n.state === 'dead') continue;
        const dx = n.x - dead.x, dz = n.z - dead.z;
        const d2 = dx * dx + dz * dz;
        // corpo OCCULTATO: nessuna scoperta "a vista" da 15m, solo percezione
        // ravvicinata reale (chi ci inciampa) -> la scoperta slitta davvero.
        if (!visibleForDiscovery(dead, dx, dz, SIGHT_RANGE)) continue;
        if (d2 > SIGHT_RANGE * SIGHT_RANGE) continue; // pre-check identico a canSee
        if (d2 <= STUMBLE_RADIUS * STUMBLE_RADIUS) {
          if (!losBlocked(n.x, n.z, dead.x, dead.z, sim.colliders)) { finder = n; stumbled = true; break; }
          continue;
        }
        if (canSee(n, dead.x, dead.z, sim.colliders, sim.rng).seen) { finder = n; break; }
      }
      if (!finder) continue;
      sim.corpseReported.add(dead.id);
      const ev = sim.journal.append('found_corpse', {
        t: sim.t, severity: 0.55, x: dead.x, z: dead.z,
        actorId: null, victimId: dead.id, place: nearestNode(dead.x, dead.z),
        moved: !!dead.hidden // scena alterata: il corpo e' stato spostato/nascosto
      });
      sim.unseen.push(ev); // offerto agli altri al tick successivo (cono+LOS)
      // il DISCRIPTORE sa di averlo trovato: garantito esplicitamente, non
      // dipende dal cono dell'evento (altrimenti verità orphan: chi l'ha
      // scoperto non crede alla propria scoperta).
      if (ensureDiscovererKnows(sim, ev, finder, stumbled)) {
        sim.stats.corpseDiscoveries++;
        sim.hooks.onWitness?.(finder, ev);
      }
    }
  }

  // 6. potatura credenze decadute ogni 10s di sim
  if (sim.t - sim.pruneAt > 10) {
    sim.pruneAt = sim.t;
    for (const n of sim.npcs) {
      sim.stats.pruned += pruneBeliefs(n.beliefs, sim.t);
      // memoria: allineamento + tier/aging/cap (tutto deterministico)
      pruneMemory(n, sim.t);
    }
  }

  sim.counts = { L1: c1, L2: c2, L3: c3 };
  sim.simMs = performance.now() - t0;
}

export function publishEvent(sim, type, data) {
  const ev = sim.journal.append(type, { t: sim.t, ...data });
  sim.unseen.push(ev); // offerto alla percezione al prossimo tick
  return ev;
}
