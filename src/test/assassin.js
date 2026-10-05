// Test del gameplay dell'assassino (fase BUILD/REVIEW).
// File proprio: la registrazione in harness.js costa UNA riga (conflitto minimo
// con gli altri agenti che estendono la suite).
// Copre: scoperta cadavere epistemica (nessuna verità orfana), osservazione
// parziale, rumore senza identità, tentativo fallito, occultamento corpi.
import { buildWorld, runTicks } from './harness.js';
import { publishEvent } from '../sim/simulation.js';
import { attemptMelee, hitChance } from '../sim/combat.js';
import { concealCorpse, visibleForDiscovery, findCorpseNear } from '../sim/conceal.js';
import { emitNoise } from '../sim/noise.js';
import { makeNpc, serializeNpc, restoreNpc } from '../sim/npc.js';
import { makeContract, contractState, contractOutcome } from '../sim/contract.js';
import { makeFakeGame } from './infra.js';
import { serializeGame, applySave } from '../persist/persistence.js';
import { makeRng } from '../core/rng.js';

function A(name, fn) {
  try {
    const d = fn();
    return { name, pass: !!d.pass, detail: d.info ?? '' };
  } catch (e) {
    return { name, pass: false, detail: 'throw: ' + String(e.message ?? e).slice(0, 200) };
  }
}

// Scena a 2 NPC: un morto a origine e un scopritore a `dist` con yaw scelto.
// Lo scopritore è congelato (dwellLeft enorme) così la sua posizione/orientamento
// restano sotto controllo del test.
function corpseScene(dist, yaw, extra = {}) {
  const w = buildWorld(9101, [
    { id: 'dead', name: 'Dead', color: 1, x: 0, z: 0, relations: {}, agenda: [{ node: 'road_c', dwell: 5 }] },
    { id: 'finder', name: 'Finder', color: 2, x: dist, z: 0, relations: {}, agenda: [{ node: 'road_c', dwell: 5 }] },
    ...(extra.npcs ?? [])
  ]);
  const dead = w.sim.npcs[0], finder = w.sim.npcs[1];
  dead.state = 'dead'; dead.x = 0; dead.z = 0;
  finder.state = 'dwell'; finder.dwellLeft = 1e9; finder.yaw = yaw;
  w.player.x = 45; w.player.z = 45; // fuori scena: nessuna influenza
  return { w, dead, finder };
}

const FACE_AWAY = Math.atan2(3, 0);   // guarda +x, corpo a -x (origine)
const FACE_BODY = Math.atan2(-3, 0);  // guarda -x: verso il corpo

function beliefsOf(n) { return [...n.beliefs.entries()].map(([k, b]) => [k, b.kind]); }
function corpseEvents(w) { return w.sim.journal.events.filter(e => e.type === 'found_corpse'); }

// S1a: nessun percepiente -> NESSUNA verità pubblicata, corpo riproponibile;
//      appena qualcuno lo guarda davvero -> evento + scopritore che sa di averlo.
function tCorpseNeedsPerception() {
  const { w, finder } = corpseScene(3, FACE_AWAY);
  runTicks(w.sim, w.player, 60); // 3s
  const before = corpseEvents(w);
  const blocked = before.length === 0 && w.sim.corpseReported.size === 0 &&
    finder.beliefs.size === 0 && w.sim.stats.corpseDiscoveries === 0;

  finder.yaw = FACE_BODY; // si gira: adesso lo vede
  runTicks(w.sim, w.player, 60);
  const after = corpseEvents(w);
  const ev = after[0];
  const found = after.length === 1 && w.sim.corpseReported.has('dead') &&
    w.sim.stats.corpseDiscoveries === 1;
  const knower = !!ev && finder.beliefs.has(ev.id) && ev.witnesses.includes('finder');
  return {
    pass: blocked && found && knower,
    info: `blocked=${blocked} events=${after.length} reported=${w.sim.corpseReported.size} ` +
      `finderBeliefs=${JSON.stringify(beliefsOf(finder))} witnesses=${ev ? JSON.stringify(ev.witnesses) : '—'}`
  };
}

// S1b: inciampo ravvicinato (1.2m, di spalle): lo scopritore sa comunque di averlo
//      trovato — la verità non nasce mai "senza chi la conosce".
function tCorpseStumble() {
  const { w, finder } = corpseScene(1.2, FACE_AWAY);
  runTicks(w.sim, w.player, 60);
  const ev = corpseEvents(w)[0];
  const ok = !!ev && finder.beliefs.has(ev.id) && ev.witnesses.includes('finder') &&
    w.sim.stats.corpseDiscoveries === 1;
  return {
    pass: ok,
    info: `events=${corpseEvents(w).length} finderBeliefs=${JSON.stringify(beliefsOf(finder))} ` +
      `witnesses=${ev ? JSON.stringify(ev.witnesses) : '—'}`
  };
}

// S1c: nessuno nei paraggi per 30s -> il journal NON afferma mai "è stato scoperto".
function tCorpseSilentWithoutKnower() {
  const { w } = corpseScene(40, FACE_BODY); // oltre SIGHT_RANGE
  runTicks(w.sim, w.player, 600); // 30s
  const evs = corpseEvents(w);
  return {
    pass: evs.length === 0 && w.sim.corpseReported.size === 0,
    info: `events=${evs.length} reported=${w.sim.corpseReported.size}`
  };
}

// S1d: due scopritori indipendenti sullo stesso corpo -> un solo evento (dedup),
//      ma entrambi i percepienti possono impararlo dall'offerta del tick dopo.
function tCorpseSingleTruth() {
  const { w, finder } = corpseScene(3, FACE_BODY, {
    npcs: [{ id: 'second', name: 'Second', color: 3, x: 3, z: 3, relations: {}, agenda: [{ node: 'road_c', dwell: 5 }] }]
  });
  const second = w.sim.npcs[2];
  second.state = 'dwell'; second.dwellLeft = 1e9;
  second.yaw = Math.atan2(-3, -3); // guarda il corpo
  runTicks(w.sim, w.player, 90);
  const evs = corpseEvents(w);
  const ok = evs.length === 1 &&
    finder.beliefs.has(evs[0].id) && second.beliefs.has(evs[0].id);
  return { pass: ok, info: `events=${evs.length} f=${JSON.stringify(beliefsOf(finder))} s=${JSON.stringify(beliefsOf(second))}` };
}

// Scena a 1 NPC (congelato) + player; `facing` true = guarda il player.
function npcScene(nx, nz, px, pz, facing = true, crouch = false) {
  const w = buildWorld(9301, [
    { id: 'w', name: 'Watcher', color: 2, x: nx, z: nz, relations: {}, agenda: [{ node: 'road_c', dwell: 5 }] }
  ]);
  const n = w.sim.npcs[0];
  n.state = 'dwell'; n.dwellLeft = 1e9;
  const yawTo = Math.atan2(px - nx, pz - nz);
  n.yaw = facing ? yawTo : yawTo + Math.PI;
  w.player.x = px; w.player.z = pz; w.player.crouch = crouch;
  return { w, n };
}
function susp(n) { return [...n.beliefs.values()].filter(b => b.kind === 'suspicion'); }

function tAwarenessNeedsSight() {
  const { w, n } = npcScene(0, 0, 0, 6, false); // di spalle
  runTicks(w.sim, w.player, 80);
  const a = n.awareness, s = susp(n);
  return { pass: a === 0 && s.length === 0, info: `awareness=${a} susp=${s.length}` };
}

function tAwarenessCrouch() {
  const up = npcScene(0, 0, 0, 6, true, false);
  const down = npcScene(0, 0, 0, 6, true, true);
  runTicks(up.w.sim, up.w.player, 40); // 2s
  runTicks(down.w.sim, down.w.player, 40);
  const ua = up.n.awareness, ca = down.n.awareness;
  const ok = susp(up.n).length === 1 && susp(down.n).length === 0 && ca > 0 && ca < ua;
  return { pass: ok, info: `upA=${ua?.toFixed(2)} crouchA=${ca?.toFixed(2)} upSusp=${susp(up.n).length} crouchSusp=${susp(down.n).length}` };
}

function tAwarenessCover() {
  // muro di copertura coverWalls(29.5,14,5,0.5) tra NPC e player
  const { w, n } = npcScene(29.5, 17, 29.5, 11, true);
  runTicks(w.sim, w.player, 80);
  const s = susp(n);
  return { pass: s.length === 0 && (n.awareness ?? 0) === 0, info: `awareness=${n.awareness} susp=${s.length}` };
}

function tAwarenessRecognition() {
  // L'identità vale al MOMENTO in cui nasce la credenza: poi, se l'NPC si
  // avvicina (incuriosito), puo' riconoscerlo — per questo si ferma al primo spot.
  const runToSpot = (s) => {
    for (let i = 0; i < 300 && susp(s.n).length === 0; i++) runTicks(s.w.sim, s.w.player, 1);
    return susp(s.n)[0];
  };
  const near = npcScene(0, 0, 0, 6, true);   // <= 8m: identità nota
  const far = npcScene(0, 0, 0, 12, true);   // 8..15m: ignoto
  const an = runToSpot(near), af = runToSpot(far);
  const ok = an?.actor === 'uomo in verde' && af?.actor === 'sconosciuto';
  return { pass: ok, info: `near=${an?.actor ?? '—'} far=${af?.actor ?? '—'}` };
}

function tAwarenessDeterministic() {
  const r1 = npcScene(0, 0, 0, 6, true), r2 = npcScene(0, 0, 0, 6, true);
  runTicks(r1.w.sim, r1.w.player, 150);
  runTicks(r2.w.sim, r2.w.player, 150);
  const k1 = JSON.stringify([...r1.n.beliefs.entries()].sort()), k2 = JSON.stringify([...r2.n.beliefs.entries()].sort());
  const ok = k1 === k2 && r1.n.awareness === r2.n.awareness;
  return { pass: ok, info: `equal=${k1 === k2 && r1.n.awareness === r2.n.awareness} a=${r1.n.awareness?.toFixed(3)}` };
}

// ---------------------------------------------------------------------------
// S4 — tentativo melee fallito: il bersaglio lo percepisce COI PROPRI SENSI,
// allarme + deviazione di routine, nessun knowledge leak verso chi non c'era.
// ---------------------------------------------------------------------------
function freeze(n) { n.state = 'dwell'; n.dwellLeft = 1e9; return n; }

function meleeWorld(seed, victimYaw) {
  const w = buildWorld(seed, [
    { id: 'vic', name: 'Victim', color: 1, x: 0, z: 0, relations: {}, agenda: [{ node: 'road_c', dwell: 5 }], home: 'road_w' },
    { id: 'far', name: 'Far', color: 2, x: 0, z: 42, relations: {}, agenda: [{ node: 'road_c', dwell: 5 }] }
  ]);
  const [vic, far] = w.sim.npcs;
  freeze(vic); vic.yaw = victimYaw;
  freeze(far);
  w.player.x = 0; w.player.z = 1.5; // agganciato: 1.5m entro MELEE_RANGE
  return { w, vic, far };
}

// Di spalle: il bersaglio NON vede il colpo -> lo SENTE (canale 'heard',
// nessuna identità) e allarme. Chi è a 42m non impara nulla.
function tMeleeMissSensors() {
  const { w, vic, far } = meleeWorld(9401, Math.PI);
  const out = attemptMelee(w.sim, w.player, vic, 0.99); // roll alto: mancato
  const assaults = w.sim.journal.events.filter(e => e.type === 'assault');
  const ab = [...vic.beliefs.values()].find(b => b.kind === 'assault');
  const alive = vic.state !== 'dead';
  const noLeak = far.beliefs.size === 0 && !far.memory.includes(out.ev?.id);
  runTicks(w.sim, w.player, 40); // 2s: reazione
  const alarm = vic.state === 'alerted' || vic.alertedBy === (out.ev && out.ev.id);
  return {
    pass: !out.hit && out.perceived && assaults.length === 1 && !!ab &&
      ab.channel === 'heard' && ab.actor === 'sconosciuto' && alive &&
      noLeak && alarm && !!vic.routineShift,
    info: `hit=${out.hit} perceived=${out.perceived} ch=${ab?.channel} actor=${ab?.actor} ` +
      `assaults=${assaults.length} alive=${alive} noLeak=${noLeak} ` +
      `state=${vic.state} shift=${!!vic.routineShift} farBeliefs=${far.beliefs.size}`
  };
}

// Voltato verso l'aggressore: il bersaglio VEDE il colpo (canale 'seen',
// identità riconosciuta a 1.5m) — i sensi disponibili cambiano il canale,
// mai il fatto che sia percepito.
function tMeleeMissSeen() {
  const { w, vic } = meleeWorld(9402, 0);
  const out = attemptMelee(w.sim, w.player, vic, 0.99);
  const ab = [...vic.beliefs.values()].find(b => b.kind === 'assault');
  return {
    pass: !out.hit && !!ab && ab.channel === 'seen' && ab.actor === 'uomo in verde',
    info: `ch=${ab?.channel} actor=${ab?.actor}`
  };
}

// Nessun kill scriptato: colpo certo solo come esito del test sistemico, e la
// probabilità di colpire SCENDE con la prontezza del bersaglio.
function tMeleeHitChance() {
  const { w, vic } = meleeWorld(9403, 0);
  const calm = hitChance({ awareness: 0, state: 'dwell' });
  const ready = hitChance({ awareness: 1, state: 'dwell' });
  const alerted = hitChance({ awareness: 1, state: 'alerted' });
  const hit = attemptMelee(w.sim, w.player, vic, 0); // roll minimo: colpito
  const hitEvents = w.sim.journal.events.filter(e => e.type === 'assault').length;
  const miss = attemptMelee(w.sim, w.player, vic, 0.999);
  const missEvents = w.sim.journal.events.filter(e => e.type === 'assault').length;
  return {
    // nessun kill scriptato: il SIM restituisce l'esito, uccide il chiamante
    // (game) solo quando il colpo va a segno; il colpo fallito non produce
    // nessun evento d'aggressione
    pass: ready < calm && alerted <= ready && hit.hit === true &&
      hitEvents === 0 && miss.hit === false && missEvents === 1 &&
      vic.state !== 'dead',
    info: `calm=${calm.toFixed(2)} ready=${ready.toFixed(2)} alerted=${alerted.toFixed(2)} ` +
      `hit=${hit.hit}/${hitEvents} miss=${miss.hit}/${missEvents} alive=${vic.state}`
  };
}

// Conseguenza del colpo mancato: la routine del bersaglio DEVIA (non torna
// alla sua agenda abituale) per tutto il periodo di allarme.
function tMeleeRoutineShift() {
  const { w, vic } = meleeWorld(9404, Math.PI);
  attemptMelee(w.sim, w.player, vic, 0.99);
  const before = vic.routineShift;
  runTicks(w.sim, w.player, 900); // 45s: fuga -> rientro -> routine deviata
  const applied = vic.agendaBlock === before.node && vic.agenda[0]?.node === before.node;
  return {
    pass: !!before && before.node === 'road_w' && vic.routineShift != null && applied,
    info: `shift=${JSON.stringify(vic.routineShift)} agendaBlock=${vic.agendaBlock} ` +
      `agenda0=${vic.agenda[0]?.node} state=${vic.state}`
  };
}

// ---------------------------------------------------------------------------
// S5 — occultamento corpi: nessuna scoperta automatica, solo percezione
// ravvicinata reale, scena alterata, conseguenze persistenti.
// ---------------------------------------------------------------------------
function tConcealDiscovery() {
  const w = buildWorld(9801, [
    { id: 'dead', name: 'Dead', color: 1, x: 0, z: 0, relations: {}, agenda: [{ node: 'road_c', dwell: 5 }] },
    { id: 'finder', name: 'Finder', color: 2, x: 8, z: 0, relations: {}, agenda: [{ node: 'road_c', dwell: 5 }] }
  ]);
  const [dead, finder] = w.sim.npcs;
  dead.state = 'dead';
  dead.death = { evId: null, t: 0, px: 0, pz: 0, kind: 'kill', method: 'melee' };
  freeze(finder); finder.yaw = Math.atan2(-8, 0); // guarda il corpo
  w.player.x = 45; w.player.z = 45; // entro L2: niente teletrasporto simbolico L3
  const interactBefore = findCorpseNear(w.sim, 8, 0, 10);
  const ok1 = concealCorpse(w.sim, dead);
  const ok2 = concealCorpse(w.sim, dead); // giа nascosto: no-op
  const interactAfter = findCorpseNear(w.sim, 8, 0, 10);
  runTicks(w.sim, w.player, 120); // 6s a 8m: NESSUNA scoperta "a vista"
  const noDiscovery = corpseEvents(w).length === 0 && !w.sim.corpseReported.has('dead');
  const blocked = !visibleForDiscovery(dead, 8, 0, 15);
  // qualcuno ci inciampa: percezione reale ravvicinata -> scoperta
  finder.x = 1.0;
  runTicks(w.sim, w.player, 120);
  const ev = corpseEvents(w)[0];
  const b = ev ? finder.beliefs.get(ev.id) : null;
  return {
    pass: interactBefore === dead && ok1 && !ok2 && interactAfter === null &&
      noDiscovery && blocked && !!ev && ev.moved === true && !!b && b.moved === true,
    info: `before=${interactBefore?.id} conceal=${ok1}/${!ok2} after=${interactAfter} ` +
      `noDiscovery=${noDiscovery} blocked=${blocked} ev=${!!ev} moved=${ev?.moved} bMoved=${b?.moved}`
  };
}

// Conseguenze persistenti: hidden e scena alterata sopravvivono al save.
function tConcealPersist() {
  const w = buildWorld(9802, [
    { id: 'dead', name: 'Dead', color: 1, x: 3, z: 3, relations: {}, agenda: [{ node: 'road_c', dwell: 5 }] },
    { id: 'finder', name: 'Finder', color: 2, x: 3, z: 9, relations: {}, agenda: [{ node: 'road_c', dwell: 5 }] }
  ]);
  const [dead, finder] = w.sim.npcs;
  dead.state = 'dead';
  dead.death = { evId: null, t: 0, px: 3, pz: 3, kind: 'kill', method: 'trap' };
  concealCorpse(w.sim, dead);
  const s = serializeNpc(dead);
  const fresh = makeNpc({ id: 'dead', name: 'Dead', color: 1, x: 0, z: 0, relations: {}, agenda: [{ node: 'road_c', dwell: 5 }] }, makeRng(5));
  restoreNpc(fresh, s);
  const stillHidden = fresh.hidden === true && fresh.death?.hidden === true;
  // dopo il restore il corpo resta scopribile solo da vicino
  const stillBlocked = !visibleForDiscovery(fresh, 8, 0, 15) && visibleForDiscovery(fresh, 1, 0, 15);
  // il cacciatore lo trova solo avvicinandosi (percezione reale)
  freeze(finder); finder.yaw = Math.atan2(0, -6); finder.x = 3; finder.z = 9;
  w.player.x = 45; w.player.z = 45; // entro L2: niente teletrasporto simbolico L3
  runTicks(w.sim, w.player, 120);
  const none = corpseEvents(w).length === 0;
  finder.z = 3.6;
  runTicks(w.sim, w.player, 120);
  const found = corpseEvents(w).length === 1;
  return {
    pass: stillHidden && stillBlocked && none && found,
    info: `hidden=${stillHidden} blocked=${stillBlocked} none=${none} found=${found} concealed=${w.sim.stats.concealed}`
  };
}

// ---------------------------------------------------------------------------
// S7 — incidente: morte senza arma apparente, lettura iniziale "incidente"
// (la polizia non parte), rivalutazione SOLO con nuove evidenze.
// ---------------------------------------------------------------------------
function accidentScene(seed) {
  const w = buildWorld(seed, [
    { id: 'wit', name: 'Witness', color: 1, x: 0, z: 6, relations: {}, agenda: [{ node: 'road_c', dwell: 5 }] },
    { id: 'cop', name: 'Cop', color: 2, role: 'police', x: 12, z: 0, relations: {}, agenda: [{ node: 'road_c', dwell: 5 }] }
  ]);
  const [wit, cop] = w.sim.npcs;
  freeze(wit); wit.yaw = Math.atan2(0, -6); // guarda il sito (0,0)
  freeze(cop); cop.yaw = Math.PI / 2;       // guarda +x: NON vede il sito
  w.player.x = 45; w.player.z = 45; // entro L2 (i poliziotti devono pensare)
  return { w, wit, cop };
}

function tAccidentInitial() {
  const { w, wit, cop } = accidentScene(9901);
  publishEvent(w.sim, 'accident', { severity: 0.35, x: 0, z: 0, actorId: null, victimId: 'ghost', place: 'road_c' });
  runTicks(w.sim, w.player, 120);
  const b = wit.beliefs.get('ev1');
  const murderEverywhere = [...wit.beliefs.values(), ...cop.beliefs.values()].some(x => x.kind === 'kill');
  return {
    pass: !!b && b.kind === 'accident' && !murderEverywhere && cop.police.state === 'UNAWARE',
    info: `witKind=${b?.kind} sev=${b?.severity} murderBeliefs=${murderEverywhere} police=${cop.police.state}`
  };
}

function tAccidentRivalutazione() {
  const { w, wit, cop } = accidentScene(9902);
  publishEvent(w.sim, 'accident', { severity: 0.35, x: 0, z: 0, actorId: null, victimId: 'ghost', place: 'road_c' });
  runTicks(w.sim, w.player, 120);
  const before = wit.beliefs.get('ev1');
  // NEW EVIDENCE: la causa è stata preparata (nessun attore visibile)
  cop.yaw = Math.atan2(-12, 0); // l'ufficiale si volta verso il sito
  publishEvent(w.sim, 'sabotage', { severity: 0.5, x: 0, z: 0, actorId: null, place: 'road_c' });
  runTicks(w.sim, w.player, 180);
  const after = wit.beliefs.get('ev1');   // STESSA evId: reinterpretazione
  const copKill = [...cop.beliefs.values()].find(x => x.kind === 'kill' || x.kind === 'sabotage');
  return {
    pass: before?.kind === 'accident' && !!after && after.kind === 'kill' &&
      after.channel === 'inferred' && after.confidence <= 0.7 &&
      !!copKill && cop.police.state !== 'UNAWARE' && cop.police.state !== 'SUSPICIOUS',
    info: `before=${before?.kind} after=${after?.kind}/${after?.channel} ` +
      `conf=${after?.confidence?.toFixed(2)} copBelief=${copKill?.kind} police=${cop.police.state}`
  };
}

// ---------------------------------------------------------------------------
// S2 — osservazione parziale: l'identità NON è regalata dall'evento; serve
// evidenza sufficiente (abbastanza vicino, guardato abbastanza a lungo).
// ---------------------------------------------------------------------------
function tIdentityPartial() {
  const w = buildWorld(9601, [
    { id: 'o', name: 'Observer', color: 1, x: 0, z: 0, relations: {}, agenda: [{ node: 'road_c', dwell: 5 }] }
  ]);
  const o = freeze(w.sim.npcs[0]); o.yaw = 0; // guarda +z
  w.player.x = 0; w.player.z = 12;
  publishEvent(w.sim, 'theft', { severity: 0.6, x: 0, z: 12, actorId: 'player', place: 'road_c' });
  o.alertedBy = 'ev1'; // nessuna reazione: qui si misura SOLO l'identità
  runTicks(w.sim, w.player, 15); // impara a 12m: chi? non si sa
  const far = o.beliefs.get('ev1'); // imparato a 12m: chi? non si sa
  const unknownFar = !!far && far.actor === 'sconosciuto';
  // ravvicinato + sguardo prolungato (IDENT_GAZE): ora l'identità è evidenza
  o.x = 0; o.z = 6; // 6m dal fatto
  runTicks(w.sim, w.player, 12); // 0.6s > 0.4s di fissazione
  const near = o.beliefs.get('ev1');
  return {
    pass: unknownFar && near.actor === 'uomo in verde',
    info: `far=${far?.actor} near=${near?.actor} dist=6`
  };
}

// Senza mai avvicinarsi: l'identità resta ignota anche a distanza di tempo.
function tIdentityStaysUnknown() {
  const w = buildWorld(9602, [
    { id: 'o', name: 'Observer', color: 1, x: 0, z: 0, relations: {}, agenda: [{ node: 'road_c', dwell: 5 }] }
  ]);
  const o = freeze(w.sim.npcs[0]); o.yaw = 0;
  w.player.x = 0; w.player.z = 12;
  publishEvent(w.sim, 'theft', { severity: 0.6, x: 0, z: 12, actorId: 'player', place: 'road_c' });
  o.alertedBy = 'ev1'; // nessuna reazione: qui si misura SOLO l'identità
  runTicks(w.sim, w.player, 300); // 15s: la finestra di osservazione è finita
  const b = o.beliefs.get('ev1');
  return {
    pass: !!b && b.actor === 'sconosciuto',
    info: `actor=${b?.actor} kind=${b?.kind}`
  };
}

// ---------------------------------------------------------------------------
// S6 — rumore dei passi: range corretto, solo canale 'heard', mai identità,
// mai offerta visiva.
// ---------------------------------------------------------------------------
function tFootstepsHeard() {
  const mk = (seed) => {
    const w = buildWorld(seed, [
      { id: 'near', name: 'Near', color: 1, x: 5, z: 0, relations: {}, agenda: [{ node: 'road_c', dwell: 5 }] },
      { id: 'distant', name: 'Distant', color: 2, x: 11, z: 0, relations: {}, agenda: [{ node: 'road_c', dwell: 5 }] }
    ]);
    freeze(w.sim.npcs[0]); freeze(w.sim.npcs[1]);
    w.player.x = 0; w.player.z = 0;
    return w;
  };
  const run = mk(9701);
  run.player.running = true;
  runTicks(run.sim, run.player, 60); // 3s di corsa -> piu' pedate
  const nearNoise = [...run.sim.npcs[0].beliefs.values()].filter(b => b.kind === 'noise');
  const farNoise = [...run.sim.npcs[1].beliefs.values()].filter(b => b.kind === 'noise');
  const heardOnly = nearNoise.every(b => b.channel === 'heard' && b.actor === 'sconosciuto');
  const noVisual = run.sim.unseen.every(e => e.type !== 'noise');
  // accovacciato (o fermo): silenzio
  const quiet = mk(9702);
  quiet.player.running = true; quiet.player.crouch = true;
  runTicks(quiet.sim, quiet.player, 60);
  const crouchNoise = [...quiet.sim.npcs[0].beliefs.values()].filter(b => b.kind === 'noise');
  const still = mk(9703);
  runTicks(still.sim, still.player, 60); // in piedi fermo: nessun passo
  const standNoise = [...still.sim.npcs[0].beliefs.values()].filter(b => b.kind === 'noise');
  return {
    pass: nearNoise.length >= 1 && farNoise.length === 0 && heardOnly &&
      noVisual && crouchNoise.length === 0 && standNoise.length === 0,
    info: `near=${nearNoise.length} far=${farNoise.length} heardOnly=${heardOnly} ` +
      `noVisual=${noVisual} crouch=${crouchNoise.length} still=${standNoise.length}`
  };
}

// Un solo rumore esplicito (es. fischio/colpo): portata rispettata, nessuna
// identità, nessun evento visivo.
function tNoiseNoIdentity() {
  const w = buildWorld(9704, [
    { id: 'a', name: 'A', color: 1, x: 5, z: 0, relations: {}, agenda: [{ node: 'road_c', dwell: 5 }] },
    { id: 'b', name: 'B', color: 2, x: 30, z: 0, relations: {}, agenda: [{ node: 'road_c', dwell: 5 }] }
  ]);
  freeze(w.sim.npcs[0]); freeze(w.sim.npcs[1]);
  const heard = emitNoise(w.sim, 0, 0, 10, 0.3);
  const a = [...w.sim.npcs[0].beliefs.values()].filter(x => x.kind === 'noise');
  const b = [...w.sim.npcs[1].beliefs.values()].filter(x => x.kind === 'noise');
  const journalNoise = w.sim.journal.events.filter(e => e.type === 'noise');
  const noVisual = w.sim.unseen.every(e => e.type !== 'noise');
  return {
    pass: heard === 1 && a.length === 1 && a[0].channel === 'heard' &&
      a[0].actor === 'sconosciuto' && b.length === 0 && journalNoise.length === 1 && noVisual,
    info: `heard=${heard} a=${a.length}/${a[0]?.channel} b=${b.length} journal=${journalNoise.length} noVisual=${noVisual}`
  };
}

// ---------------------------------------------------------------------------
// Finestra temporale del contratto (endgame) + arrest/incastramento.
// ---------------------------------------------------------------------------
function tContractWindow() {
  const w = buildWorld(9111, [
    { id: 'marco', name: 'Marco', color: 1, x: 0, z: 0, relations: {}, agenda: [{ node: 'road_c', dwell: 5 }] }
  ]);
  const marco = w.sim.npcs[0];
  const c = makeContract('marco', 100);
  const start = contractState(w.sim, c);
  const running = contractOutcome(w.sim, c);
  // bersaglio abbattuto ENTRO la finestra -> contratto concluso
  marco.state = 'dead';
  const done = contractOutcome(w.sim, c);
  // tempo scaduto con bersaglio vivo -> scadenza
  w.sim.t = 200; marco.state = 'dwell';
  const expired = contractState(w.sim, c);
  const expiredOut = contractOutcome(w.sim, c);
  // morte DOPO la finestra non vale piu' come successo
  marco.state = 'dead';
  const late = contractOutcome(w.sim, c);
  return {
    pass: start.active && !start.expired && start.remaining === 100 &&
      running === 'running' && done === 'done' &&
      expired.expired && expired.remaining === 0 &&
      expiredOut === 'expired' && late === 'expired' &&
      contractState(w.sim, null).active === false,
    info: `start=${start.remaining} run=${running} done=${done} expired=${expiredOut} late=${late}`
  };
}

// Poliziotto sulla scena + un civile ai piedi del corpo: l'arresto segue la
// percezione reale dell'ufficiale. Nessuno a zona -> nessun arresto.
function arrestScene(seed, withPatsy) {
  const w = buildWorld(seed, [
    { id: 'dead', name: 'Dead', color: 1, x: 0, z: 0, relations: {}, agenda: [{ node: 'road_c', dwell: 5 }] },
    { id: 'patsy', name: 'Patsy', color: 2, x: withPatsy ? 2.2 : 0, z: withPatsy ? 0 : -4, relations: {}, agenda: [{ node: 'road_c', dwell: 5 }] },
    { id: 'cop', name: 'Cop', color: 3, role: 'police', x: 6, z: 0, relations: {}, agenda: [{ node: 'road_c', dwell: 5 }] }
  ]);
  const [dead, patsy, cop] = w.sim.npcs;
  dead.state = 'dead';
  dead.death = { evId: null, t: 0, px: 0, pz: 0, kind: 'kill', method: 'melee' };
  freeze(patsy);
  // il patsy guarda VIA dal corpo: sente l'allarme ma non lo vede, quindi
  // resta sul posto (chi vede un cadavere scappa e il test perderebbe la scena)
  patsy.yaw = withPatsy ? Math.atan2(1.5, 0) : Math.atan2(0, -1);
  freeze(cop); cop.yaw = Math.atan2(-6, 0); // guarda la scena
  // entro L2 (60m) da TUTTI: oltre, il piano L3 "teletrasporta" i personaggi
  w.player.x = 44; w.player.z = 30;
  w.sim.hooks.onArrest = (off, sus) => { w.arrests = (w.arrests ?? []).concat(`${off.id}>${sus.id}`); };
  w.sim.hooks.onCaught = () => { w.caughtHook = true; };
  publishEvent(w.sim, 'found_corpse', { severity: 0.55, x: 0, z: 0, actorId: null, victimId: 'dead', place: 'road_c' });
  return { w, dead, patsy, cop };
}

function tArrestPatsy() {
  const { w, patsy } = arrestScene(9211, true);
  runTicks(w.sim, w.player, 900); // 45s: arrivo, conferma, arresto
  return {
    pass: (w.arrests ?? []).length === 1 && w.arrests[0] === 'cop>patsy' &&
      patsy.state === 'arrested' && !w.caughtHook,
    info: `arrests=${JSON.stringify(w.arrests ?? [])} patsy=${patsy.state} caught=${!!w.caughtHook}`
  };
}

function tArrestNobody() {
  const { w, patsy } = arrestScene(9212, false);
  runTicks(w.sim, w.player, 900);
  return {
    pass: (w.arrests ?? []).length === 0 && patsy.state === 'dwell',
    info: `arrests=${JSON.stringify(w.arrests ?? [])} patsy=${patsy.state}`
  };
}

// Save/load dello stato nuovo: finestra del contratto + occultamento +
// deviazione di routine + sospetto della polizia.
function tSaveNewState() {
  const g = makeFakeGame(7777, 6);
  g.contract = makeContract('marco', 480);
  g.sim.t = 120;
  const npc = g.npcs[0];
  npc.hidden = true;
  npc.death = { evId: 'ev9', t: 30, px: npc.x, pz: npc.z, kind: 'kill', method: 'trap' };
  npc.routineShift = { until: 240, node: 'road_w' };
  const cop = g.npcs.find(n => n.role === 'police');
  const payload = serializeGame(g);
  const wire = JSON.parse(JSON.stringify(payload));
  const g2 = makeFakeGame(1, 6);
  applySave(g2, wire);
  const n2 = g2.npcs.find(n => n.id === npc.id);
  const c2 = g2.contract;
  const st = contractState(g2.sim, g2.contract);
  return {
    pass: n2.hidden === true && n2.death?.kind === 'kill' &&
      n2.routineShift?.node === 'road_w' && n2.routineShift?.until === 240 &&
      c2?.limit === 480 && c2?.targetId === 'marco' &&
      st.remaining === 480 - 120 && !st.expired &&
      (!cop || g2.npcs.find(n => n.id === cop.id).police != null),
    info: `hidden=${n2.hidden} shift=${JSON.stringify(n2.routineShift)} contract=${JSON.stringify(c2)} rem=${st.remaining}`
  };
}

export function runAssassinTests() {
  return [
    A('assassin_corpse_needs_perception', tCorpseNeedsPerception),
    A('assassin_corpse_stumble_discoverer_knows', tCorpseStumble),
    A('assassin_corpse_silent_without_knower', tCorpseSilentWithoutKnower),
    A('assassin_corpse_single_truth', tCorpseSingleTruth),
    A('assassin_awareness_requires_sight', tAwarenessNeedsSight),
    A('assassin_awareness_crouch_slower', tAwarenessCrouch),
    A('assassin_awareness_cover_blocks', tAwarenessCover),
    A('assassin_awareness_recognition_range', tAwarenessRecognition),
    A('assassin_awareness_deterministic', tAwarenessDeterministic),
    // S4 — melee fallito: sensi del bersaglio, allarme, routine, no leak
    A('assassin_melee_miss_sensors', tMeleeMissSensors),
    A('assassin_melee_miss_seen', tMeleeMissSeen),
    A('assassin_melee_hit_chance', tMeleeHitChance),
    A('assassin_melee_routine_shift', tMeleeRoutineShift),
    // S5 — occultamento corpi
    A('assassin_conceal_discovery', tConcealDiscovery),
    A('assassin_conceal_persist', tConcealPersist),
    // S7 — incidente + rivalutazione su nuove evidenze
    A('accident_initial_reading', tAccidentInitial),
    A('accident_rivalutazione', tAccidentRivalutazione),
    // S2 — identità con evidenza sufficiente
    A('identity_partial_observation', tIdentityPartial),
    A('identity_stays_unknown', tIdentityStaysUnknown),
    // S6 — rumore dei passi
    A('footsteps_heard_range', tFootstepsHeard),
    A('noise_no_identity', tNoiseNoIdentity),
    // finestra temporale + arresto/incastramento + save del nuovo stato
    A('contract_time_window', tContractWindow),
    A('arrest_patsy_on_scene', tArrestPatsy),
    A('arrest_nobody_no_suspicion', tArrestNobody),
    A('save_restores_new_state', tSaveNewState)
  ];
}
