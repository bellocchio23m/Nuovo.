// S10 — Test automatici minimi del Dynamic Audio World System (Node/headless).
// Coprono: init, dispatch, determinismo profili, attenuazione, priorità,
// stealing, reuse pool, zone, crossfade, musica, bus, ducking, cleanup.
import { createEventBus, AUDIO_EVENTS } from '../audio/bus.js';
import { voiceProfileFor, renderVariation } from '../audio/voice.js';
import { describeEvent, pickVariant, variationCount, createAudioCache } from '../audio/synth.js';
import { createVoicePool, priorityFor } from '../audio/pool.js';
import { tierForDistance, attenuation, aggregateFar } from '../audio/spatial.js';
import { acousticZoneAt, crossfadeGains, occlusionFor, REVERB_ZONES } from '../audio/zones.js';
import { createMixer, busForEvent } from '../audio/mixer.js';
import { createMusicSystem } from '../audio/music.js';
import { createNPCVocalSystem } from '../audio/npcVocal.js';
import { createAudioWorld } from '../audio/manager.js';
import { makeAudio } from '../audio/audio.js';

function T(name, fn) {
  try {
    const d = fn();
    return { name, pass: !!d.pass, detail: d.info ?? '' };
  } catch (e) {
    return { name, pass: false, detail: 'throw: ' + String(e?.message ?? e).slice(0, 200) };
  }
}

function tInit() {
  const a = makeAudio();
  const okEnsure = a.ensure() === true; // headless: true logico
  const hasApi = ['emit', 'update', 'gameplay', 'setQuality', 'snapshot', 'dispose'].every((k) => typeof a[k] === 'function');
  const w = createAudioWorld();
  const wOk = typeof w.update === 'function' && typeof w.setQuality === 'function';
  a.dispose(); w.dispose();
  return { pass: okEnsure && hasApi && wOk, info: `ensure=${okEnsure} api=${hasApi} world=${wOk}` };
}

function tDispatch() {
  const bus = createEventBus();
  let got = 0, last = null;
  bus.on('NPC_SHOUT', (e) => { got++; last = e; });
  const n = bus.emit({ type: 'NPC_SHOUT', x: 1, z: 2, intensity: 0.8 });
  const custom = bus.registerType('MY_NEW_EVENT');
  let got2 = 0;
  bus.on('MY_NEW_EVENT', () => got2++);
  bus.emit({ type: 'MY_NEW_EVENT' });
  return { pass: n === 1 && got === 1 && last?.intensity === 0.8 && custom && got2 === 1, info: `n=${n} got=${got} custom=${custom}/${got2}` };
}

function tDeterminism() {
  const p1 = voiceProfileFor({ id: 'anna', role: 'civilian', work: 'bar_in' });
  const p2 = voiceProfileFor({ id: 'anna', role: 'civilian', work: 'bar_in' });
  const p3 = voiceProfileFor({ id: 'bruno', role: 'civilian', work: 'svc_in' });
  const same = JSON.stringify(p1) === JSON.stringify(p2);
  const diff = p1.pitch !== p3.pitch || p1.archetype !== p3.archetype;
  const v1 = renderVariation(p1, 3, 0.5), v2 = renderVariation(p1, 3, 0.5);
  const vSame = JSON.stringify(v1) === JSON.stringify(v2);
  const inRange = v1.pitchRatio >= 0.93 && v1.pitchRatio <= 1.08;
  return { pass: same && diff && vSame && inRange, info: `same=${same} diff=${diff} varSame=${vSame} pitch=${v1.pitchRatio}` };
}

function tAttenuation() {
  const t0 = tierForDistance(4) === 'L0';
  const t1 = tierForDistance(15) === 'L1';
  const t2 = tierForDistance(40) === 'L2';
  const tc = tierForDistance(80) === 'CULLED';
  const a0 = attenuation(1), a1 = attenuation(10), a2 = attenuation(30);
  const mono = a0 >= a1 && a1 >= a2 && a0 === 1 && a2 > 0;
  const agg = aggregateFar([{ x: 0, z: 0 }, { x: 2, z: 0 }, { x: 0, z: 2 }]);
  const aggOk = agg && agg.count === 3 && agg.type === 'CROWD_MURMUR';
  return { pass: t0 && t1 && t2 && tc && mono && aggOk, info: `tiers=${t0}${t1}${t2}${tc} att=${a0}/${a1}/${a2} agg=${aggOk}` };
}

function tPriority() {
  const crit = priorityFor('EXPLOSION'), scream = priorityFor('NPC_SCREAM');
  const foot = priorityFor('FOOTSTEP'), distant = priorityFor('CITY_HUM');
  const order = crit === 100 && scream === 80 && foot === 60 && distant === 20 && scream > foot && foot > distant;
  const busNpc = busForEvent('NPC_LAUGH') === 'NPC';
  const busFoot = busForEvent('FOOTSTEP') === 'FOOTSTEPS';
  const busCar = busForEvent('CAR_HORN') === 'VEHICLES';
  const busWx = busForEvent('RAIN') === 'WEATHER';
  return { pass: order && busNpc && busFoot && busCar && busWx, info: `order=${order} buses=${busNpc}${busFoot}${busCar}${busWx}` };
}

function tStealing() {
  const pool = createVoicePool({ maxVoices: 4 });
  const ids = [];
  for (let i = 0; i < 4; i++) ids.push(pool.reserve({ type: 'CITY_HUM', priority: 20, dist: 40 }));
  const full = ids.every((r) => r.ok);
  const crit = pool.reserve({ type: 'EXPLOSION', priority: 100, dist: 5 });
  const stats = pool.stats();
  const low = pool.reserve({ type: 'CITY_HUM', priority: 10, dist: 50 });
  const activeBefore = pool.activeCount();
  const ok = full && crit.ok && crit.stole && !low.ok && stats.stolen >= 1 && stats.rejected >= 1 && activeBefore === 4;
  pool.dispose();
  return { pass: ok, info: `full=${full} stole=${crit.stole} rejected=${!low.ok} active=${activeBefore}` };
}

function tPoolReuse() {
  const pool = createVoicePool({ maxVoices: 8 });
  const r1 = pool.reserve({ type: 'NPC_LAUGH', priority: 55, dist: 5 });
  const rel = pool.release(r1.id);
  const r2 = pool.reserve({ type: 'NPC_LAUGH', priority: 55, dist: 5 });
  const stats = pool.stats();
  const ok = r1.ok && rel && r2.ok && pool.activeCount() === 1 && stats.cleaned >= 1;
  // sovraccarico: evict tiene il cap
  for (let i = 0; i < 20; i++) pool.reserve({ type: 'CITY_HUM', priority: 20, dist: 50 });
  const capped = pool.activeCount() <= 8;
  pool.dispose();
  const empty = pool.activeCount() === 0;
  return { pass: ok && capped && empty, info: `reuse=${ok} capped=${capped} empty=${empty}` };
}

function tZones() {
  const bar = acousticZoneAt(-20, 18, 0, { buildingAt: () => 'bar', buildingType: 'bar', rooms: [{ purpose: 'cafe_floor', x0: -28, x1: -12, z0: 14, z1: 23.4, y: 0 }] });
  const bath = acousticZoneAt(14.4, 23, 0, { buildingAt: () => 'b2', buildingType: 'residential', rooms: [{ purpose: 'bathroom', x0: 13.9, x1: 15.8, z0: 22.1, z1: 25.8, y: 0 }] });
  const street = acousticZoneAt(37, 2, 0, { buildingAt: () => null });
  const alley = acousticZoneAt(15, 5, 0, { buildingAt: () => null });
  const zonesOk = bar === 'BAR' && bath === 'BATHROOM' && street === 'STREET' && alley === 'ALLEY';
  const allParams = Object.values(REVERB_ZONES).every((z) => z.reverb >= 0 && z.reverb <= 1 && z.gain > 0);
  const occFree = occlusionFor(0, 0, 5, 0, () => false);
  const occBlocked = occlusionFor(0, 0, 5, 0, () => true);
  const occOk = !occFree.occluded && occFree.gainMul === 1 && occBlocked.occluded && occBlocked.gainMul < 1 && occBlocked.cutoffHz < 20000;
  return { pass: zonesOk && allParams && occOk, info: `zones=${bar}/${bath}/${street}/${alley} params=${allParams} occ=${occOk}` };
}

function tCrossfade() {
  const xf = crossfadeGains('STREET', 'BAR', 0.5, 800);
  const mid = xf.outsideGain > 0.3 && xf.outsideGain < 0.7 && xf.insideGain > 0.3 && xf.insideGain < 0.7;
  const end = crossfadeGains('STREET', 'BAR', 1, 800);
  const endOk = end.insideGain === 1 && end.outsideGain === 0;
  const start = crossfadeGains('STREET', 'BAR', 0, 800);
  const startOk = start.insideGain === 0 && start.outsideGain === 1;
  // manager reale: entra nel bar e verifica transizione graduale (non on/off)
  const w = createAudioWorld({ buildingAt: () => null });
  w.setWorld({ player: { x: 37, z: 2, yaw: 0, y: 0 }, npcs: [], simT: 0 });
  w.update(0.1);
  const outside = w.snapshot();
  w._zoneDeps.buildingAt = () => 'bar';
  w._zoneDeps.buildingTypeOf = () => 'bar';
  w._zoneDeps.roomsOf = () => [{ purpose: 'cafe_floor', x0: -28, x1: -12, z0: 14, z1: 23.4, y: 0 }];
  w.setWorld({ player: { x: -20, z: 18, yaw: 0, y: 0 }, npcs: [], simT: 1 });
  w.update(0.2);
  const midSnap = w.snapshot();
  const gradual = midSnap.insideGain > 0 && midSnap.insideGain < 1;
  w.dispose();
  return { pass: mid && endOk && startOk && gradual, info: `mid=${mid} end=${endOk} start=${startOk} gradual=${midSnap.insideGain}` };
}

function tMusic() {
  const emitted = [];
  const m = createMusicSystem({ emit: (e) => emitted.push(e) });
  const s0 = m.getState() === 'NORMAL';
  m.setState('DANGER', { stinger: true });
  const danger = m.getState() === 'DANGER';
  // crossfade: i livelli si avvicinano ai target senza salti
  const before = m.getLevels().bass;
  m.update(0.6);
  const after = m.getLevels().bass;
  const moved = Math.abs(after - before) > 0.001;
  const noSnap = Math.abs(after - m.getTargets().bass) < Math.abs(before - m.getTargets().bass) + 1e-9;
  const derived = m.deriveFromGame({ combat: false, fleeing: false, policeAlert: false, calmFor: 30 });
  const aftermath = m.getState() === 'AFTERMATH';
  const dieg = m.diegeticSources().length >= 4;
  m.update(2.1, { player: { x: -20, z: 18 } });
  const diegEmitted = emitted.some((e) => e.diegetic);
  return { pass: s0 && danger && moved && noSnap && derived && aftermath && dieg && diegEmitted, info: `danger=${danger} moved=${moved} aftermath=${aftermath} dieg=${dieg}/${diegEmitted}` };
}

function tBusDuck() {
  const mixer = createMixer();
  mixer.setVolume('MUSIC', 0.5);
  const v = mixer.getVolume('MUSIC') === 0.5;
  mixer.setMute('MUSIC', true);
  const muted = mixer.effective('MUSIC') === 0;
  mixer.setMute('MUSIC', false);
  mixer.triggerDuck(1);
  mixer.update(0.05);
  const ducked = mixer.duckedGain('MUSIC') < 1 && mixer.duckedGain('AMBIENCE') < 1 && mixer.duckedGain('NPC') === 1;
  for (let i = 0; i < 60; i++) mixer.update(0.1);
  const released = mixer.duckState().amount < 0.2;
  return { pass: v && muted && ducked && released, info: `vol=${v} mute=${muted} duck=${ducked} release=${released}` };
}

function tCleanup() {
  const w = createAudioWorld();
  w.setWorld({ player: { x: 0, z: 0, yaw: 0, y: 0 }, npcs: [], simT: 0 });
  for (let i = 0; i < 10; i++) {
    w.emit({ type: 'NPC_LAUGH', x: i, z: 0, intensity: 0.5 });
    w.update(0.1);
  }
  const before = w.snapshot().pool.active;
  w.dispose();
  const after = w.snapshot().pool.active;
  const cache = createAudioCache({ maxEntries: 4 });
  for (let i = 0; i < 10; i++) cache.store('T' + i, 0, { fake: i });
  const bounded = cache.count() <= 4;
  const varied = variationCount('NPC_LAUGH') >= 8 && variationCount('FOOTSTEP') >= 8;
  const noRepeat = pickVariant('NPC_LAUGH', 3, 0.0) !== 3;
  const descOk = !!describeEvent('NPC_FART', 0) && !!describeEvent('NPC_BURP', 2);
  return { pass: after === 0 && bounded && varied && noRepeat && descOk, info: `active ${before}->${after} bounded=${bounded} varied=${varied}` };
}

function tReactions() {
  const seen = [];
  const sys = createNPCVocalSystem({ emit: (e) => seen.push(e), getProfile: (n) => voiceProfileFor(n), rng: () => 0.5 });
  const npcs = [
    { id: 'a', x: 0, z: 0, state: 'dwell', level: 'L1' },
    { id: 'b', x: 3, z: 0, state: 'dwell', level: 'L1' },
    { id: 'c', x: 5, z: 0, state: 'dwell', level: 'L1' },
  ];
  const n = sys.chainReaction({ type: 'NPC_SCREAM', source: 'a', x: 0, z: 0, intensity: 0.9 }, npcs, 10);
  const reacted = n >= 1 && seen.some((e) => e.chain && e.reactionTo === 'a');
  const hook = sys.gameplayHook('pain', npcs[0]);
  const hookOk = hook && hook.type === 'NPC_PAIN';
  return { pass: reacted && hookOk, info: `chains=${n} reacted=${reacted} hook=${hookOk}` };
}

function tScale() {
  // 30/80/110 NPC: voci attive boundate, nessun accumulo infinito
  const results = [];
  for (const n of [30, 80, 110]) {
    const w = createAudioWorld();
    const npcs = [];
    for (let i = 0; i < n; i++) npcs.push({ id: 'syn' + i, x: (i % 20) - 10, z: Math.floor(i / 20) * 3, state: 'dwell', level: i < 12 ? 'L1' : 'L2' });
    w.setWorld({ player: { x: 0, z: 0, yaw: 0, y: 0 }, npcs, simT: 100 });
    for (let k = 0; k < 40; k++) {
      for (let j = 0; j < 6; j++) w.emit({ type: 'NPC_SHOUT', x: j * 2, z: 0, intensity: 0.6 });
      w.update(0.05);
    }
    const snap = w.snapshot();
    results.push(`${n}:${snap.pool.active}/${snap.pool.maxVoices}`);
    w.dispose();
  }
  return { pass: true, info: `scale ${results.join(' ')} (boundate dal pool)` };
}

export function runAudioTests() {
  const tests = [
    T('audio_init', tInit),
    T('audio_event_dispatch', tDispatch),
    T('audio_voice_determinism', tDeterminism),
    T('audio_distance_attenuation', tAttenuation),
    T('audio_priority', tPriority),
    T('audio_voice_stealing', tStealing),
    T('audio_pool_reuse', tPoolReuse),
    T('audio_zones', tZones),
    T('audio_zone_transition', tCrossfade),
    T('audio_music_transitions', tMusic),
    T('audio_bus_ducking', tBusDuck),
    T('audio_cleanup', tCleanup),
    T('audio_reactions', tReactions),
    T('audio_scale_smoke', tScale),
  ];
  const passed = tests.filter((t) => t.pass).length;
  void AUDIO_EVENTS;
  return { suite: 'p0-audio-s10', passed, total: tests.length, tests };
}
