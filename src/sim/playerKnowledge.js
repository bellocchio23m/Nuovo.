import { losBlocked } from '../world/world.js';
import { nearestNode } from '../world/navigation.js';

// Modello informativo del GIOCATORE: solo ciò che ha percepito.
// Aggiornato da observeWorld() con cadenza fissa: NPC entro 22m + LOS +
// davanti alla camera. Niente posizioni live: solo ultimo avvistamento +
// luoghi frequenti (≥2 avvistamenti) + compresenze osservate.
// Serializzabile per il save.
export function makePlayerKnowledge() {
  return { npcs: {}, pairs: {}, acc: 0 };
}

export function observeWorld(pk, player, camYaw, npcs, colliders, t, dt) {
  pk.acc += dt;
  if (pk.acc < 0.25) return;
  const step = pk.acc; pk.acc = 0;
  const fx = Math.sin(camYaw), fz = Math.cos(camYaw);
  for (const n of npcs) {
    if (n.state === 'dead') continue;
    const dx = n.x - player.x, dz = n.z - player.z;
    const d2 = dx * dx + dz * dz;
    if (d2 > 22 * 22) continue;
    const d = Math.sqrt(d2) || 0.001;
    if ((dx / d) * fx + (dz / d) * fz < 0.25 && d > 2) continue; // dietro la camera
    if (losBlocked(player.x, player.z, n.x, n.z, colliders)) continue;
    let rec = pk.npcs[n.id];
    if (!rec) {
      rec = pk.npcs[n.id] = { time: 0, named: false, last: null, spots: {}, seen: 0 };
    }
    rec.time += step; rec.seen++;
    const node = nearestNode(n.x, n.z);
    rec.last = { t, node, x: +n.x.toFixed(1), z: +n.z.toFixed(1) };
    rec.spots[node] = (rec.spots[node] ?? 0) + 1;
    if (rec.time > 4) rec.named = true;
  }
  // compresenze: coppie osservate contemporaneamente (stesso tick)
  const seenNow = npcs.filter(n => {
    const r = pk.npcs[n.id];
    return r && n.state !== 'dead' && (t - (r.last?.t ?? -99)) < 0.3;
  });
  for (let i = 0; i < seenNow.length; i++) {
    for (let j = i + 1; j < seenNow.length; j++) {
      const a = seenNow[i].id, b = seenNow[j].id;
      const k = a < b ? `${a}+${b}` : `${b}+${a}`;
      pk.pairs[k] = (pk.pairs[k] ?? 0) + 1;
    }
  }
}

// Il giocatore "conosce" un NPC se l'ha osservato o se gli è stato presentato
// (briefing iniziale / conversazione).
export function markIntroduced(pk, npcId) {
  const r = pk.npcs[npcId] ?? (pk.npcs[npcId] = { time: 0, named: true, last: null, spots: {}, seen: 0 });
  r.named = true;
}

export function spotsKnown(pk, npcId) {
  const r = pk.npcs[npcId];
  if (!r) return [];
  return Object.entries(r.spots).filter(([, c]) => c >= 8).map(([n]) => n);
}

export function serializePK(pk) { return JSON.parse(JSON.stringify(pk)); }
export function restorePK(pk, s) {
  pk.npcs = s.npcs ?? {}; pk.pairs = s.pairs ?? {}; pk.acc = 0;
}
