// S10 — NPCVocalSystem + NPCBodySoundSystem (scheduler PURO).
// Versi brevi emergenti, mai conversazioni. Rutti/scoregge = easter egg rari
// contestuali con reazioni dei vicini. Reazioni a catena: un urlo/allarme
// attira sguardi + reazioni vocali (solo hook esistenti: talkT/alertT).
import { ARCHETYPES } from './voice.js';

const VOCAL_TYPES = ['NPC_SHOUT', 'NPC_SCREAM', 'NPC_LAUGH', 'NPC_CRY', 'NPC_GROAN', 'NPC_SIGH', 'NPC_GRUNT', 'NPC_COUGH', 'NPC_SNEEZE', 'NPC_WHISTLE', 'NPC_HUM', 'NPC_GIBBERISH', 'NPC_INSULT', 'NPC_SURPRISE', 'NPC_FEAR', 'NPC_ANGER', 'NPC_PAIN', 'NPC_DISGUST', 'NPC_EFFORT'];
const COMIC_TYPES = ['NPC_BURP', 'NPC_FART'];

function hashStr(s) {
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193); }
  return h >>> 0;
}

export function createNPCVocalSystem({ emit, getProfile, rng = Math.random, losBlocked = null } = {}) {
  const cooldown = new Map(); // npcId -> nextTime
  const comicCooldown = new Map();
  const stats = { vocals: 0, comic: 0, chains: 0, body: 0 };
  let time = 0;
  const R = () => (typeof rng === 'function' ? rng() : Math.random());

  function canEmit(npc, now) {
    if (!npc || npc.state === 'dead' || npc.state === 'arrested') return false;
    return now >= (cooldown.get(npc.id) ?? 0);
  }
  function pickVocal(profile) {
    const A = ARCHETYPES[profile.archetype] ?? ARCHETYPES.NORMAL;
    const r = R();
    // preferred con peso, altrimenti tipo generico raro
    if (r < 0.7 && profile.preferredSounds?.length) {
      return profile.preferredSounds[Math.floor(R() * profile.preferredSounds.length)];
    }
    // distribuzione emergente pesata dall'archetipo
    const roll = R();
    if (roll < A.pLaugh) return 'NPC_LAUGH';
    if (roll < A.pLaugh + A.pInsult) return 'NPC_INSULT';
    if (roll < A.pLaugh + A.pInsult + A.pShout) return 'NPC_SHOUT';
    if (roll < A.pLaugh + A.pInsult + A.pShout + A.pSnort * 0.5) return R() < 0.5 ? 'NPC_SIGH' : 'NPC_GRUNT';
    return VOCAL_TYPES[Math.floor(R() * VOCAL_TYPES.length)];
  }
  function baseInterval(profile) {
    // frequenza archetipo: QUIET ~40s, LOUD/BAR ~8-12s, NORMAL ~18s
    const rate = profile.vocalFrequency ?? 0.6;
    return Math.max(4, 26 - rate * 18);
  }
  function tick(dt, npcs, player, ctx = {}) {
    time += dt;
    const out = [];
    const hour = ctx.hour ?? 12;
    const night = hour < 6 || hour >= 23;
    const simT = ctx.simT ?? time;
    for (const npc of npcs) {
      if (npc.level === 'L3') continue; // lontani: solo murmur aggregato
      if (!canEmit(npc, time)) continue;
      const profile = getProfile(npc);
      const dx = npc.x - player.x, dz = npc.z - player.z;
      const d = Math.hypot(dx, dz);
      if (d > 55) continue;
      // densità: di notte meno chiacchiere, più sospiri/tosse
      let p = dt / baseInterval(profile);
      if (d > 25) p *= 0.4; // L2: meno eventi singoli
      if (night) p *= 0.45;
      if (npc.state === 'alerted' || npc.state === 'curious') p *= 2.2;
      if (npc.talkT && (simT - npc.talkT) < 2.5) p *= 1.6; // sta socializzando
      if (R() > p) continue;
      const type = pickVocal(profile);
      const intensity = Math.min(1, (profile.intensity ?? 0.6) * (0.7 + R() * 0.6) * (d < 8 ? 1 : 0.75));
      const ev = { type, source: npc.id, x: npc.x, z: npc.z, intensity, emotionalState: npc.state, dist: d };
      cooldown.set(npc.id, time + baseInterval(profile) * (0.5 + R()));
      stats.vocals++;
      out.push(ev);
      try { emit?.(ev); } catch { /* noop */ }
      // piccola animazione: talkT per far muovere la bocca/marker
      try { npc.talkT = simT; } catch { /* headless ok */ }
    }
    // Easter egg comici: probabilità molto bassa, contesti specifici
    if (R() < dt * 0.02) {
      const cands = npcs.filter((n) => n.state !== 'dead' && n.level !== 'L3' &&
        Math.hypot(n.x - player.x, n.z - player.z) < 30);
      if (cands.length) {
        const npc = cands[Math.floor(R() * cands.length)];
        if (time >= (comicCooldown.get('global') ?? 0)) {
          const type = R() < 0.6 ? 'NPC_BURP' : 'NPC_FART';
          const ev = { type, source: npc.id, x: npc.x, z: npc.z, intensity: 0.7, comic: true, dist: Math.hypot(npc.x - player.x, npc.z - player.z) };
          comicCooldown.set('global', time + 45 + R() * 60); // rarissimi
          stats.comic++;
          out.push(ev);
          try { emit?.(ev); } catch { /* noop */ }
          chainReaction(ev, npcs, simT, out);
        }
      }
    }
    return out;
  }
  // Reazione a catena: chi sente (raggio udito, LOS leggera) guarda + reagisce.
  function chainReaction(loudEv, npcs, simT, out = []) {
    const RADIUS = loudEv.type === 'ALARM' || loudEv.type === 'NPC_SCREAM' ? 30 : 14;
    let n = 0;
    for (const npc of npcs) {
      if (npc.id === loudEv.source || npc.state === 'dead') continue;
      const d = Math.hypot((npc.x - loudEv.x), (npc.z - loudEv.z));
      if (d > RADIUS) continue;
      if (losBlocked) { try { if (losBlocked(npc.x, npc.z, loudEv.x, loudEv.z)) continue; } catch { /* ignora */ } }
      if (R() < 0.35) continue; // non tutti reagiscono
      // guarda verso la sorgente + reazione vocale breve
      try { npc.yaw = Math.atan2(loudEv.x - npc.x, loudEv.z - npc.z); } catch { /* noop */ }
      const reactions = loudEv.comic
        ? ['NPC_LAUGH', 'NPC_DISGUST', 'NPC_INSULT', 'NPC_SURPRISE']
        : ['NPC_SURPRISE', 'NPC_FEAR', 'NPC_GIBBERISH', 'NPC_SHOUT', 'NPC_LAUGH'];
      const type = reactions[Math.floor(R() * reactions.length)];
      const ev = { type, source: npc.id, x: npc.x, z: npc.z, intensity: 0.4 + R() * 0.3, reactionTo: loudEv.source, chain: true };
      try { npc.talkT = simT; } catch { /* noop */ }
      stats.chains++; n++;
      out.push(ev);
      try { emit?.(ev); } catch { /* noop */ }
      if (n >= 4) break; // massimo 4 reazioni per evento
    }
    return n;
  }
  // Hook gameplay (usa solo eventi esistenti, nessuna nuova AI):
  // witness/kill/flee corpses => versi contestuali.
  function gameplayHook(kind, npc, extra = {}) {
    const map = {
      witness: 'NPC_SURPRISE', attacked: 'NPC_PAIN', flee: 'NPC_FEAR',
      corpse: 'NPC_SCREAM', pain: 'NPC_PAIN', effort: 'NPC_EFFORT',
      anger: 'NPC_ANGER', disgust: 'NPC_DISGUST',
    };
    const type = map[kind] ?? 'NPC_SURPRISE';
    if (!npc) return null;
    const ev = { type, source: npc.id, x: npc.x, z: npc.z, intensity: extra.intensity ?? 0.8, gameplay: kind };
    stats.vocals++;
    try { emit?.(ev); } catch { /* noop */ }
    return ev;
  }
  // Rumori corporei/movimento: passi con superficie, sforzi.
  function bodySound(kind, x, z, intensity = 0.4, extra = {}) {
    const type = kind === 'run' ? 'FOOTSTEP_RUN' : kind === 'crouch' ? 'FOOTSTEP_CROUCH' : 'FOOTSTEP';
    stats.body++;
    const ev = { type, x, z, intensity, ...extra };
    try { emit?.(ev); } catch { /* noop */ }
    return ev;
  }
  return {
    tick, chainReaction, gameplayHook, bodySound,
    stats: () => ({ ...stats }),
    reset() { cooldown.clear(); comicCooldown.clear(); time = 0; },
  };
}
export { VOCAL_TYPES, COMIC_TYPES };
