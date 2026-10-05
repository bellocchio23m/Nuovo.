// S10 — Profili vocali deterministici + archetipi (PURO, headless-safe).
// Stesso NPC => stessa firma sonora. Mai un profilo casuale per frame:
// il profilo deriva dall'hash dell'id (+ ruolo), ed è stabile.
function fnv1a(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 0x01000193); }
  return h >>> 0;
}
function mulberry(seed) {
  let s = (seed >>> 0) || 1;
  return () => {
    s |= 0; s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Ogni archetipo modula frequenza/intensità/probabilità/durata/pitch/scelta.
export const ARCHETYPES = {
  QUIET:     { rate: 0.25, intensity: 0.5, pLaugh: 0.05, pInsult: 0.02, pShout: 0.02, pSnort: 0.25, durMul: 0.8, pitchMul: 1.0, preferred: ['NPC_SIGH', 'NPC_COUGH', 'NPC_HUM'] },
  NORMAL:    { rate: 0.6, intensity: 0.65, pLaugh: 0.12, pInsult: 0.06, pShout: 0.06, pSnort: 0.15, durMul: 1.0, pitchMul: 1.0, preferred: ['NPC_SIGH', 'NPC_COUGH', 'NPC_HUM', 'NPC_LAUGH'] },
  LOUD:      { rate: 1.0, intensity: 1.0, pLaugh: 0.25, pInsult: 0.15, pShout: 0.3, pSnort: 0.2, durMul: 1.15, pitchMul: 0.95, preferred: ['NPC_SHOUT', 'NPC_LAUGH', 'NPC_INSULT'] },
  IRRITABLE: { rate: 0.9, intensity: 0.9, pLaugh: 0.03, pInsult: 0.35, pShout: 0.3, pSnort: 0.4, durMul: 0.9, pitchMul: 0.9, preferred: ['NPC_GRUNT', 'NPC_INSULT', 'NPC_SHOUT', 'NPC_SIGH'] },
  NERVOUS:   { rate: 0.8, intensity: 0.55, pLaugh: 0.15, pInsult: 0.05, pShout: 0.12, pSnort: 0.3, durMul: 0.7, pitchMul: 1.15, preferred: ['NPC_SIGH', 'NPC_COUGH', 'NPC_SURPRISE'] },
  CHEERFUL:  { rate: 1.0, intensity: 0.8, pLaugh: 0.45, pInsult: 0.03, pShout: 0.1, pSnort: 0.1, durMul: 1.1, pitchMul: 1.1, preferred: ['NPC_LAUGH', 'NPC_HUM', 'NPC_WHISTLE', 'NPC_SHOUT'] },
  TIRED:     { rate: 0.35, intensity: 0.45, pLaugh: 0.04, pInsult: 0.05, pShout: 0.03, pSnort: 0.45, durMul: 1.3, pitchMul: 0.85, preferred: ['NPC_SIGH', 'NPC_COUGH', 'NPC_GROAN'] },
  DRUNK:     { rate: 1.1, intensity: 1.0, pLaugh: 0.5, pInsult: 0.2, pShout: 0.35, pSnort: 0.25, durMul: 1.4, pitchMul: 0.8, preferred: ['NPC_LAUGH', 'NPC_BURP', 'NPC_SHOUT', 'NPC_HUM'] },
  AGGRESSIVE:{ rate: 0.9, intensity: 1.0, pLaugh: 0.05, pInsult: 0.4, pShout: 0.4, pSnort: 0.3, durMul: 0.9, pitchMul: 0.85, preferred: ['NPC_ANGER', 'NPC_SHOUT', 'NPC_INSULT', 'NPC_GRUNT'] },
  ELDERLY:   { rate: 0.4, intensity: 0.5, pLaugh: 0.08, pInsult: 0.04, pShout: 0.04, pSnort: 0.35, durMul: 1.2, pitchMul: 0.9, preferred: ['NPC_SIGH', 'NPC_COUGH', 'NPC_GROAN', 'NPC_HUM'] },
  WORKER:    { rate: 0.7, intensity: 0.8, pLaugh: 0.1, pInsult: 0.1, pShout: 0.12, pSnort: 0.2, durMul: 1.0, pitchMul: 0.95, preferred: ['NPC_EFFORT', 'NPC_GRUNT', 'NPC_SHOUT'] },
  POLICE:    { rate: 0.5, intensity: 0.9, pLaugh: 0.03, pInsult: 0.05, pShout: 0.35, pSnort: 0.1, durMul: 0.9, pitchMul: 0.95, preferred: ['NPC_SHOUT', 'NPC_GRUNT', 'NPC_SURPRISE'] },
  BUSINESS:  { rate: 0.4, intensity: 0.6, pLaugh: 0.08, pInsult: 0.03, pShout: 0.04, pSnort: 0.2, durMul: 0.9, pitchMul: 1.0, preferred: ['NPC_SIGH', 'NPC_COUGH', 'NPC_HUM'] },
  STREET:    { rate: 0.8, intensity: 0.75, pLaugh: 0.15, pInsult: 0.18, pShout: 0.15, pSnort: 0.15, durMul: 1.0, pitchMul: 1.0, preferred: ['NPC_SHOUT', 'NPC_LAUGH', 'NPC_WHISTLE'] },
  BAR:       { rate: 1.0, intensity: 0.85, pLaugh: 0.4, pInsult: 0.12, pShout: 0.15, pSnort: 0.15, durMul: 1.1, pitchMul: 1.0, preferred: ['NPC_LAUGH', 'NPC_BURP', 'NPC_HUM', 'NPC_SHOUT'] },
};

const ARCH_KEYS = Object.keys(ARCHETYPES);

// Euristica ruolo/contesto -> archetipo di default (override esplicito vince).
export function archetypeFor(npcLike = {}) {
  if (npcLike.audioArchetype && ARCHETYPES[npcLike.audioArchetype]) return npcLike.audioArchetype;
  const role = (npcLike.role ?? '').toLowerCase();
  if (role === 'police') return 'POLICE';
  if (role === 'target') return 'STREET';
  const ctx = `${npcLike.work ?? ''} ${npcLike.home ?? ''} ${npcLike.id ?? ''}`.toLowerCase();
  if (ctx.includes('bar')) return (fnv1a(npcLike.id ?? '?') % 3 === 0) ? 'BAR' : 'CHEERFUL';
  if (ctx.includes('svc')) return 'WORKER';
  if (npcLike.id === 'marta' || npcLike.id === 'tea' || npcLike.id === 'osvaldo' || npcLike.id === 'ida') return 'ELDERLY';
  if (npcLike.id === 'anna' || npcLike.id === 'paolo' || npcLike.id === 'bianca' || npcLike.id === 'monica') return 'BAR';
  if (npcLike.id === 'rossi' || npcLike.id === 'verdi') return 'POLICE';
  if (npcLike.id === 'ivan' || npcLike.id === 'otello') return (fnv1a(npcLike.id) % 2 ? 'AGGRESSIVE' : 'WORKER');
  if (npcLike.id === 'peppe') return 'CHEERFUL';
  // fallback deterministico: hash -> archetipo pesato verso NORMAL/QUIET
  const h = fnv1a(String(npcLike.id ?? 'x'));
  const bag = ['QUIET', 'NORMAL', 'NORMAL', 'LOUD', 'IRRITABLE', 'NERVOUS', 'CHEERFUL', 'TIRED', 'DRUNK', 'AGGRESSIVE', 'ELDERLY', 'WORKER', 'BUSINESS', 'STREET', 'BAR'];
  return bag[h % bag.length] ?? 'NORMAL';
}

export function voiceProfileFor(npcLike = {}) {
  const id = String(npcLike.id ?? 'anon');
  const arch = archetypeFor(npcLike);
  const A = ARCHETYPES[arch];
  const rnd = mulberry(fnv1a(id + '|' + arch));
  const r2 = mulberry(fnv1a(id + '|voice2'));
  return {
    id,
    archetype: arch,
    pitch: +(0.85 + rnd() * 0.4).toFixed(4),            // ~0.85..1.25
    pitchVariance: +(0.02 + rnd() * 0.03).toFixed(4),   // ±2..5%
    intensity: +Math.min(1, Math.max(0.2, A.intensity * (0.9 + rnd() * 0.2))).toFixed(4),
    breathiness: +rnd().toFixed(4),
    roughness: +(arch === 'ELDERLY' || arch === 'DRUNK' || arch === 'AGGRESSIVE' ? 0.4 + rnd() * 0.5 : rnd() * 0.4).toFixed(4),
    laughStyle: Math.floor(r2() * 8),
    shoutStyle: Math.floor(r2() * 8),
    reactionStyle: Math.floor(r2() * 4),
    vocalFrequency: +(A.rate * (0.85 + r2() * 0.3)).toFixed(4),
    preferredSounds: [...A.preferred],
    pitchMul: A.pitchMul,
    durMul: A.durMul,
  };
}

// Variazione per riproduzione: pitch ±2–5%, gain ±1–3dB, start offset leggero.
// Pura e deterministica dato (profile, category, counter, rng01).
export function renderVariation(profile, counter = 0, rng01 = 0.5) {
  const span = 0.02 + ((counter * 0.013 + rng01 * 0.01) % 0.03); // 2..5%
  const dir = (counter % 2 === 0) ? 1 : -1;
  const pitchRatio = 1 + dir * span * (profile?.pitch ?? 1) * 0.05;
  const db = ((counter * 7 + Math.floor(rng01 * 10)) % 5) * 0.5 - 1.0; // -1..+1.5dB ~ ±1-3dB
  const gainRatio = Math.pow(10, db / 20);
  const offset = ((counter * 37) % 100) / 100 * 0.03; // 0..30ms
  return { pitchRatio: +pitchRatio.toFixed(4), gainRatio: +gainRatio.toFixed(4), offsetSec: +offset.toFixed(4), db: +db.toFixed(2) };
}
