import * as THREE from 'three';
import { makeRng } from './core/rng.js';
import { makeJournal } from './core/events.js';
import { WORLD, initialInteractables } from './world/mapData.js';
import { buildColliders, pointInBuilding } from './world/world.js';
import { buildNavGraph, validateNav } from './world/navigation.js';
import { makeNpc } from './sim/npc.js';
import { ROSTER } from './sim/roster.js';
import { makeSimulation, simTick, publishEvent } from './sim/simulation.js';
import { makeInput } from './player/input.js';
import { makePlayer, updatePlayer } from './player/player.js';
import { makeRenderer, makeHumanoid, animateHumanoid } from './render/renderer.js';
import { saveGame } from './persist/persistence.js';
import { makeHud } from './ui/hud.js';
import { makeAudio } from './audio/audio.js';
import { synthRoster } from './test/harness.js';
import { nearestNode } from './world/navigation.js';
import { hearPoint } from './sim/perception.js';
import { makeBelief, mergeBelief } from './sim/knowledge.js';
import { attemptMelee, MELEE_RANGE } from './sim/combat.js';
import { concealCorpse, findCorpseNear } from './sim/conceal.js';
import { emitNoise as emitNoiseSim } from './sim/noise.js';
import { makeContract, contractState, contractOutcome, formatClock } from './sim/contract.js';
import { memorize } from './sim/npc.js';
import { makePlayerKnowledge, observeWorld, markIntroduced, serializePK, restorePK } from './sim/playerKnowledge.js';

export function makeGame(seed) {
  const game = {
    seed, rng: makeRng(seed),
    journal: makeJournal(),
    colliders: buildColliders(),
    navAdj: buildNavGraph(),
    npcs: [], player: makePlayer(37, 2), // strada sud: vista verso vicolo/piazza
    pk: makePlayerKnowledge(), // ciò che il GIOCATORE ha osservato (mai onnisciente)
    interactables: initialInteractables(),
    caught: false,
    contract: makeContract('marco', 900), // finestra temporale: 900s di gioco
    ended: null, // null | 'caught' | 'window' | 'done' (esito del contratto)
    worldFlags: { packageTaken: true },
    errors: [], camYaw: 0, camPitch: 0.5, // yaw 0 = camera a sud, vista verso la piazza (nord)
    fps: 0, frameMs: 0,
  };
  // validazione nav a boot: nodi/archi in conflitto con collider = report
  // (mai throw): un waypoint irraggiungibile e' un congelamento garantito.
  const navIssues = validateNav(game.colliders);
  if (navIssues.nodeViolations.length || navIssues.edgeViolations.length) {
    console.warn('[nav] waypoint in conflitto con collider', navIssues);
  }
  game.sim = makeSimulation(game.npcs, game.journal, game.colliders, game.navAdj, game.rng, {
    onWitness: (n, ev) => {
      n.alertT = game.sim.t;
      if (ev.type === 'kill' || ev.type === 'sabotage' || ev.type === 'found_corpse') {
        game.hud?.toast(`👁 ${n.name} ha visto qualcosa!`);
        if (ev.type === 'kill') game.audio?.scream();
      }
    },
    onGossip: (a, b) => game.hud?.toast(`💬 ${a.name} ha raccontato qualcosa a ${b.name}`),
    onInterview: (off, civ) => game.hud?.toast(`👮 ${off.name} interroga ${civ.name}`),
    onPoliceState: (off, prev, next) => {
      if (next === 'ALERT' || next === 'SEARCHING') game.audio?.sting();
    },
    onCaught: () => {
      game.caught = true;
      game.ended = 'caught';
      document.getElementById('caught').style.display = 'flex';
      game.audio?.sting();
    },
    // Arresto di un SOSPETTO sulla scena (mai il giocatore per definizione):
    // la polizia applica l'arresto, qui c'e' solo la resa + il messaggio.
    onArrest: (off, sus) => {
      game.hud?.toast(`👮 ${off.name} ha arrestato ${sus.name}: è lui il sospetto`);
      game.audio?.sting();
    }
  });
  for (const def of ROSTER) game.npcs.push(makeNpc(def, game.rng));
  markIntroduced(game.pk, 'marco'); // briefing: il contratto dice chi è il bersaglio

  game.renderer = makeRenderer(document.getElementById('app'));
  game.player.mesh = makeHumanoid(0x2fbf71, true, 'player');
  game.renderer.scene.add(game.player.mesh);
  for (const n of game.npcs) {
    n.mesh = makeHumanoid(n.color, false, n.role);
    n.mesh.position.set(n.x, 0, n.z);
    game.renderer.scene.add(n.mesh);
  }
  game.pkg = null; // P1: niente pacco-demo
  game.syncInteractables = () => syncInteractables(game);

  game.inputHandle = makeInput();
  game.input = game.inputHandle.api;
  game.hud = makeHud(game);
  game.audio = makeAudio();
  syncInteractables(game);

  const onErr = (e) => {
    game.errors.push(String(e.message ?? e.error ?? 'errore').slice(0, 120));
  };
  addEventListener('error', onErr);
  game.dispose = () => {
    removeEventListener('error', onErr);
    game.inputHandle.dispose();
    game.hud.dispose();
    game.audio?.dispose(); // ferma loop ambience + timeout: niente doppio audio al re-boot
    game.renderer.dispose();
    for (const n of game.npcs) n.mesh = null;
    game.player.mesh = null;
  };
  return game;
}

// Strumento di misura (non gameplay): aggiunge N NPC sintetici seedati per
// verificare FPS/rendering a 12/30/80. Usato via ?npc=N nel live loop.
export function spawnExtra(game, n) {
  const defs = synthRoster(game.rng, n).filter(d => !game.npcs.some(x => x.id === d.id));
  for (const def of defs) {
    const npc = makeNpc(def, game.rng);
    npc.mesh = makeHumanoid(0x999999, false, 'civilian');
    npc.mesh.position.set(npc.x, 0, npc.z);
    game.renderer.scene.add(npc.mesh);
    game.npcs.push(npc);
  }
  return defs.length;
}

const KIND_TALK = { theft: 'un furto', disturbance: 'un trambusto', assault: 'un\u2019aggressione', kill: 'un omicidio', found_corpse: 'un cadavere', noise: 'un rumore', sabotage: 'un sabotaggio' };

// --- Azioni sistemiche P1: ogni azione pubblica eventi strutturati; le
// conseguenze (testimoni, voci, polizia) emergono dai sistemi generali. ---

// Morte NON evidentemente causata da un'arma: gli eventi di questo tipo sono
// 'accident' (gravità bassa, nessun crimine per la polizia). Solo se più tardi
// emergono prove di dolo le credenze vengono rivalutate (v. sim/reassess.js).
const ACCIDENT_METHODS = new Set(['trap', 'fall', 'accident']);

// Uccide un NPC: stato persistente + evento ('kill' o 'accident'). I testimoni
// sono solo chi percepisce davvero (cono+LOS sull'atto); gli altri impareranno
// dal corpo.
export function killNpc(game, npc, method) {
  if (!npc || npc.state === 'dead') return null;
  npc.state = 'dead'; npc.speed = 0;
  npc.fleeNode = null; npc.gotoX = null; npc.gotoZ = null; npc.path = [];
  const place = nearestNode(npc.x, npc.z);
  const accidental = ACCIDENT_METHODS.has(method);
  const ev = publishEvent(game.sim, accidental ? 'accident' : 'kill', {
    severity: accidental ? 0.35 : 1.0, x: npc.x, z: npc.z,
    // melee: testimoni vedono l'uomo in verde; trappola/incidente: nessun attore visibile
    actorId: accidental ? null : (method === 'melee' ? 'player' : null),
    victimId: npc.id, place
  });
  npc.death = { evId: ev.id, t: game.sim.t, px: npc.x, pz: npc.z, kind: accidental ? 'accident' : 'kill', method };
  // rumore dell'atto: chi sente accorre a controllare (canale 'heard')
  emitNoise(game, npc.x, npc.z, method === 'melee' ? 18 : 22, 0.35);
  game.audio?.thud();
  return ev;
}

// Rumore transitorio: verità a journal (record), percezione via udito diretto
// (niente unseen visivo: i muri contano). Chi sente indaga sul posto.
export function emitNoise(game, x, z, radius, severity) {
  return emitNoiseSim(game.sim, x, z, radius, severity);
}

// Attacco corpo a corpo: la vittima è l'NPC vivo più vicino entro MELEE_RANGE.
// Il colpo NON è certo: hitChance vs prontezza del bersaglio (sim/combat.js);
// il mancato resta percepibile SOLO da chi ha i sensi per percepirlo.
export function attack(game) {
  const p = game.player;
  if (game.sim.t - (p.attackCd ?? -99) < 1.2) return null;
  p.attackCd = game.sim.t;
  p.attackT = game.sim.t;
  let best = null, bd = MELEE_RANGE;
  for (const n of game.npcs) {
    if (n.state === 'dead') continue;
    const d = Math.hypot(n.x - p.x, n.z - p.z);
    if (d < bd) { bd = d; best = n; }
  }
  if (!best) { game.audio?.swing(); return null; }
  const out = attemptMelee(game.sim, game.player, best, game.sim.rng.next());
  if (out.hit) return killNpc(game, best, 'melee');
  game.audio?.swing(); // colpo mancato: svista, il bersaglio puo' reagire
  return out;
}

// Fischio: attira chi sente verso la tua posizione (esca sistemica).
export function whistle(game) {
  const p = game.player;
  if (game.sim.t - (p.whistleCd ?? -99) < 3) return;
  p.whistleCd = game.sim.t;
  game.audio?.whistle();
  emitNoise(game, p.x, p.z, 14, 0.2);
}

// Sabotaggio della catasta: solo se integra e vicino. Testimoni visivi
// dell'atto generano sospetto (evento 'sabotage' via unseen).
export function sabotage(game) {
  const st = game.interactables.yardstack;
  const p = game.player;
  if (st.state !== 'ok') return null;
  if (Math.hypot(p.x - st.x, p.z - st.z) > 2.8) return null;
  st.state = 'armed';
  game.syncInteractables();
  game.audio?.clank();
  publishEvent(game.sim, 'sabotage', {
    severity: 0.5, x: st.x, z: st.z, actorId: 'player', place: 'svc_in'
  });
  game.hud.toast('⚙ Catasta sabotata. Crollerà su chi ci passa sotto…');
  return true;
}

// Crollo: chiunque (qualsiasi NPC vivo) sotto la catasta armata muore.
// Nessuna eccezione per il bersaglio: è fisica del mondo, non script.
export function checkCollapse(game) {
  const st = game.interactables.yardstack;
  if (st.state !== 'armed') return;
  for (const n of game.npcs) {
    if (n.state === 'dead') continue;
    if (Math.hypot(n.x - st.x, n.z - st.z) < 2.2) {
      st.state = 'fallen';
      game.syncInteractables();
      game.audio?.crash();
      killNpc(game, n, 'trap');
      game.hud.toast('💥 La catasta è crollata!');
      return;
    }
  }
}

export function talkTo(game, npc) {
  markIntroduced(game.pk, npc.id); // parlando, impari chi è: legittimo
  const b = [...npc.beliefs.values()].pop();
  let line = 'Tutto tranquillo, come al solito.';
  if (b) {
    const what = `${KIND_TALK[b.kind] ?? 'qualcosa di strano'} ${b.place}`;
    line = b.channel === 'seen'
      ? `Ho visto ${what}!` + (b.error ? ' (non ricordo bene i dettagli)' : '')
      : `Gira voce che ${what}…`;
  }
  game.hud.toast(`🗣 ${npc.name}: "${line}"`, 4200);
}

// Target interazione (WAVE3: contesto completo). Ora: NPC vicino per parlare.
export function findInteract(game) {
  const p = game.player;
  let best = null, bd = 2.5;
  for (const n of game.npcs) {
    if (n.state === 'dead') continue;
    const d = Math.hypot(n.x - p.x, n.z - p.z);
    if (d < bd) { bd = d; best = n; }
  }
  return best ? { kind: 'npc', npc: best } : null;
}

// Esito del contratto mostrato sullo stesso pannello del fermo di polizia.
export function endContract(game, kind) {
  if (game.ended) return game.ended;
  game.ended = kind;
  const card = document.getElementById('caught');
  if (card) {
    const h1 = card.querySelector('h1');
    const p = card.querySelector('p');
    if (kind === 'window') {
      h1.textContent = 'Finestra chiusa';
      p.textContent = 'Il tempo del contratto è finito e il bersaglio è ancora vivo. Studiare troppo a lungo costa la missione.';
    } else if (kind === 'done') {
      h1.textContent = 'Contratto concluso';
      p.textContent = 'Il bersaglio è stato eliminato entro la finestra. Ora resta solo capire se qualcuno ti ha visto.';
    }
    card.style.display = 'flex';
  }
  game.audio?.sting();
  return kind;
}

const SIM_DT = 1 / 20;
export function frame(game, rawDt) {
  const dt = Math.min(rawDt, 0.1);
  // camera orbit
  const lk = game.input.consumeLook();
  game.camYaw -= lk.dx * 0.005;
  game.camPitch = Math.max(0.08, Math.min(1.1, game.camPitch + lk.dy * 0.003));

  updatePlayer(game.player, game.input, game.camYaw, dt, game.colliders);
  // passi: audio proporzionale alla distanza percorsa
  game.stepAcc = (game.stepAcc ?? 0) + game.player.speed * dt;
  const stride = game.player.crouch ? 1.6 : (game.player.running ? 2.6 : 2.0);
  if (game.stepAcc > stride && game.player.speed > 0.5) {
    game.stepAcc = 0;
    game.audio?.step(game.player.running);
  }

  game.acc = (game.acc ?? 0) + dt;
  let steps = 0;
  while (game.acc >= SIM_DT && steps < 5) { simTick(game.sim, game.player, SIM_DT); game.acc -= SIM_DT; steps++; }

  // osservazione player (taccuino): solo percezione, mai onniscienza
  observeWorld(game.pk, game.player, game.camYaw, game.npcs, game.colliders, game.sim.t, dt);

  // crollo catasta sabotata (fisica del mondo, non script)
  checkCollapse(game);

  // sospetto: correre in vista rende vistosi (feedback nel mondo, non HUD)
  if (game.player.running) {
    for (const n of game.npcs) {
      if (n.state === 'dead' || n.role === 'police') continue;
      const dx = game.player.x - n.x, dz = game.player.z - n.z;
      if (dx * dx + dz * dz > 36) continue;
      let ang = Math.atan2(dx, dz) - n.yaw;
      while (ang > Math.PI) ang -= 2 * Math.PI;
      while (ang < -Math.PI) ang += 2 * Math.PI;
      if (Math.abs(ang) < Math.PI / 3) n.suspT = game.sim.t;
    }
  }

  // interazione contestuale
  const tgt = findInteract(game);
  game.player.interactTarget = tgt;
  const st = game.interactables.yardstack;
  const nearStack = Math.hypot(game.player.x - st.x, game.player.z - st.z) < 2.8;
  const corpse = findCorpseNear(game.sim, game.player.x, game.player.z, 2.2);
  if (corpse) game.hud.setPrompt('Premi <b>E</b> per nascondere il corpo');
  else if (nearStack && st.state === 'ok') game.hud.setPrompt('Premi <b>E</b> per sabotare la catasta');
  else if (tgt) game.hud.setPrompt(`Premi <b>E</b> per parlare con <b>${tgt.npc.name}</b> · <b>F</b> colpisci`);
  else game.hud.setPrompt(null);
  if (game.input.wasPressed('KeyE')) {
    if (corpse && concealCorpse(game.sim, corpse)) game.hud.toast('🩸 Corpo nascosto: nessuno lo troverà guardandolo da lontano');
    else if (nearStack && st.state === 'ok') sabotage(game);
    else if (tgt) talkTo(game, tgt.npc);
  }
  if (game.input.wasPressed('KeyF')) attack(game);
  if (game.input.wasPressed('KeyQ')) whistle(game);
  if (game.input.wasPressed('KeyC')) {
    game.player.crouch = !game.player.crouch;
    game.hud.toast(game.player.crouch ? '🤫 Accovacciato: meno visibile, più lento' : '🚶 In piedi');
  }
  if (game.input.wasPressed('KeyJ')) game.hud.togglePanel();
  if (game.input.wasPressed('KeyN')) game.hud.toggleNotebook();
  if (game.input.wasPressed('F3')) game.hud.toggleDebug();
  if (document.getElementById('notebook').style.display === 'block' && (game._nTick = (game._nTick ?? 0) + 1) % 20 === 0) game.hud.renderNotebook();

  // esito del contratto: finestra temporale / bersaglio abbattuto. Nessun
  // "vinci qui": è solo la lettura di ciò che è successo nella sim.
  if (!game.ended) {
    const out = contractOutcome(game.sim, game.contract);
    if (out !== 'running') endContract(game, out);
  }
  // orologio della finestra: aggiornato solo quando cambia il secondo
  const win = contractState(game.sim, game.contract);
  const sec = Math.ceil(win.remaining);
  if (game._clockSec !== sec) {
    game._clockSec = sec;
    const obj = document.getElementById('objective');
    if (obj) {
      if (game._objBase == null) game._objBase = obj.innerHTML;
      obj.innerHTML = `${game._objBase} <b>⏱ ${formatClock(win.remaining)}</b>`;
    }
    // se il taccuino è aperto resta aggiornato (solo al cambio del secondo)
    const nb = document.getElementById('notebook');
    if (nb && nb.style.display === 'block') game.hud?.renderNotebook();
  }

  // sync mesh + camera follow
  const pm = game.player.mesh;
  pm.position.set(game.player.x, bob(game.player), game.player.z);
  pm.rotation.y = game.player.yaw;
  pm.scale.y = game.player.crouch ? 0.8 : 1;
  animateHumanoid(pm, game.player.speed, game.sim.t,
    (game.sim.t - (game.player.attackT ?? -99)) < 0.45);
  for (const n of game.npcs) {
    n.mesh.position.set(n.x, n.state === 'dead' ? 0.35 : bob(n), n.z);
    n.mesh.rotation.y = n.yaw;
    n.mesh.rotation.z = n.state === 'dead' ? Math.PI / 2 : 0; // corpo a terra
    if (n.state !== 'dead') animateHumanoid(n.mesh, n.speed, game.sim.t, false);
    const recent = (game.sim.t - (n.alertT ?? -99)) < 20;
    const susp = (game.sim.t - (n.suspT ?? -99)) < 3;
    n.mesh.userData.mark.visible = n.state !== 'dead' &&
      (n.state === 'alerted' || susp || (recent && n.beliefs.size > 0));
    // corpo nascosto: sparisce dalla scena (lo trovi solo avvicinandoti);
    // arrestato: la polizia lo porta via, non lo vedi piu'
    n.mesh.visible = n.state !== 'arrested' && !(n.state === 'dead' && n.hidden);
  }
  const indoor = pointInBuilding(game.player.x, game.player.z, 'bar');
  const cd = indoor ? 3.2 : 7.0;
  const fx = Math.sin(game.camYaw), fz = Math.cos(game.camYaw);
  // pull-in anti-occlusione: avvicina la camera finché non è fuori dai muri
  let t = 1;
  if (!indoor) {
    const dx = -fx * Math.cos(game.camPitch) * cd, dz = -fz * Math.cos(game.camPitch) * cd;
    for (const tt of [1, 0.85, 0.7, 0.55, 0.4, 0.28]) {
      if (!insideWall(game.player.x + dx * tt, game.player.z + dz * tt, game.colliders)) { t = tt; break; }
      t = tt;
    }
  }
  const cx = game.player.x - fx * Math.cos(game.camPitch) * cd * t;
  const cz = game.player.z - fz * Math.cos(game.camPitch) * cd * t;
  const cy = indoor ? 2.5 : Math.sin(game.camPitch) * cd * t + 1.6;
  game.renderer.camera.position.set(cx, cy, cz);
  game.renderer.camera.lookAt(game.player.x + fx * 2.2, 1.2, game.player.z + fz * 2.2);
  game.renderer.renderer.render(game.renderer.scene, game.renderer.camera);
  game.hud.tickToast();
}

function insideWall(x, z, colliders) {
  return colliders.some(c => c.high &&
    x > c.minX - 0.3 && x < c.maxX + 0.3 && z > c.minZ - 0.3 && z < c.maxZ + 0.3);
}

function bob(e) { return e.speed > 0.2 ? Math.abs(Math.sin(performance.now() / 130)) * 0.06 : 0; }

// Sincronizza le mesh delle affordance con il loro stato persistente.
export function syncInteractables(game) {
  const st = game.interactables.yardstack;
  const top = game.renderer.scene.getObjectByName('yardstack_top');
  const base = game.renderer.scene.getObjectByName('yardstack');
  if (!top || !base) return;
  if (st.state === 'fallen') {
    base.rotation.x = Math.PI / 2 - 0.15; base.position.y = 0.6;
    top.rotation.x = Math.PI / 2; top.position.y = 0.4;
  } else if (st.state === 'armed') {
    top.rotation.z = 0.28; // visibilmente instabile: indizio nel mondo
  } else {
    base.rotation.x = 0; base.position.y = 1.2;
    top.rotation.x = 0; top.rotation.z = 0; top.position.y = 2.9;
  }
}

export async function save(game) {
  try { await saveGame(game); game.hud.toast('💾 Salvato in IndexedDB'); }
  catch (e) { game.hud.toast('❌ Salvataggio fallito: ' + String(e.message ?? e).slice(0, 100)); }
}
