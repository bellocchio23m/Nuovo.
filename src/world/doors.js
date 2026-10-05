// S8 — runtime porte/finestre (PURO: nessuna dipendenza three/DOM).
// Macchina a stati: CLOSED -> OPENING -> OPEN -> CLOSING -> CLOSED,
// LOCKED (serve chiave), AJAR (socchiusa, solo visiva su alcune porte).
// Il runtime e' guidato da game.js: toggleDoor() cambia lo stato logico e
// world.js apre/chiude davvero il passaggio (collider). Lo stato logico
// vive anche in tabella interazioni (persistenza esistente).
export const DOOR_OPEN = 'open';
export const DOOR_CLOSED = 'closed';
export const DOOR_OPENING = 'opening';
export const DOOR_CLOSING = 'closing';
export const DOOR_LOCKED = 'locked';
export const DOOR_AJAR = 'ajar';

// Crea il runtime da definizioni statiche [{id,state,lockedBy,...}].
// anim: 0 = chiusa, 1 = aperta (frazione di openAngle).
export function createDoorRuntime(defs) {
  const doors = {};
  for (const d of defs) {
    doors[d.id] = {
      id: d.id, building: d.building ?? null,
      state: d.state === 'open' ? DOOR_OPEN : DOOR_CLOSED,
      anim: d.state === 'open' ? 1 : 0,
      lockedBy: d.lockedBy ?? null,
      openAngle: d.openAngle ?? 1.85,
      openMs: d.openMs ?? 650, closeMs: d.closeMs ?? 800,
      t: 0, from: d.state === 'open' ? 1 : 0, to: d.state === 'open' ? 1 : 0,
    };
  }
  return doors;
}

// Puo' aprirsi? (chiusa non bloccata, o socchiusa)
export function canOpen(rt, id, hasKey) {
  const d = rt[id];
  if (!d) return { ok: false, why: 'missing' };
  if (d.state === DOOR_OPEN || d.state === DOOR_OPENING) return { ok: false, why: 'already' };
  if (d.lockedBy && !hasKey) return { ok: false, why: 'locked' };
  return { ok: true };
}

// Richiede apertura/chiusura (toggle). Ritorna l'esito per HUD/audio.
// hasKey: la chiave e' gia' stata raccolta (stato 'taken' in tabella).
export function toggleDoor(rt, id, hasKey) {
  const d = rt[id];
  if (!d) return { ok: false, sound: null };
  if (d.state === DOOR_OPEN || d.state === DOOR_OPENING) {
    d.state = DOOR_CLOSING; d.from = d.anim; d.to = 0; d.t = 0;
    return { ok: true, nowOpen: false, sound: 'door' };
  }
  if (d.lockedBy && !hasKey) {
    d.state = DOOR_LOCKED;
    return { ok: false, locked: true, sound: 'locked' };
  }
  if (d.lockedBy && hasKey) d.lockedBy = null; // serratura sbloccata, resta tale
  d.state = DOOR_OPENING; d.from = d.anim; d.to = 1; d.t = 0;
  return { ok: true, nowOpen: true, sound: 'door' };
}

// Avanza le animazioni; ritorna gli id il cuiCollider e' cambiato.
// Convenzione: il passaggio si LIBERA appena inizia OPENING e si
// BLOCCA solo a CLOSING completata (mai muro invisibile).
export function updateDoors(rt, dtMs) {
  const changed = [];
  let anyMoving = false;
  for (const d of Object.values(rt)) {
    if (d.state !== DOOR_OPENING && d.state !== DOOR_CLOSING) continue;
    anyMoving = true;
    const dur = d.state === DOOR_OPENING ? d.openMs : d.closeMs;
    d.t += dtMs;
    const k = Math.min(1, d.t / Math.max(1, dur));
    // easing: accelerazione/decelerazione dell'anta
    const e = k < 0.5 ? 2 * k * k : 1 - ((-2 * k + 2) ** 2) / 2;
    const wasBlocking = isBlocking(d);
    d.anim = d.from + (d.to - d.from) * e;
    if (k >= 1) {
      d.state = d.to === 1 ? DOOR_OPEN : DOOR_CLOSED;
      d.anim = d.to;
    }
    if (wasBlocking !== isBlocking(d)) changed.push(d.id);
  }
  return { changed, anyMoving };
}

// Il battente ostruisce quando e' (quasi) chiuso.
export function isBlocking(d) {
  if (d.state === DOOR_CLOSED || d.state === DOOR_LOCKED) return true;
  if (d.state === DOOR_CLOSING) return d.anim > 0.35;
  return false; // OPEN, OPENING, AJAR: passaggio libero
}

export function doorOpenForNav(d) {
  return !isBlocking(d);
}

// Istantanea serializzabile (la persistenza esistente salva comunque gli
// stati in tabella interazioni; questo serve ai test e al boot headless).
export function snapshotDoors(rt) {
  const out = {};
  for (const [id, d] of Object.entries(rt)) {
    out[id] = { state: d.state === DOOR_OPEN || d.state === DOOR_OPENING ? 'open' : 'closed', lockedBy: d.lockedBy };
  }
  return out;
}

export function restoreDoors(rt, snap) {
  for (const [id, s] of Object.entries(snap ?? {})) {
    const d = rt[id];
    if (!d) continue;
    if (s.state === 'open') { d.state = DOOR_OPEN; d.anim = 1; d.from = 1; d.to = 1; }
    else if (s.lockedBy === undefined) { /* conserva serratura runtime */ d.state = DOOR_CLOSED; d.anim = 0; d.from = 0; d.to = 0; }
    else { d.state = DOOR_CLOSED; d.anim = 0; d.from = 0; d.to = 0; d.lockedBy = s.lockedBy; }
    if (s.lockedBy === null) d.lockedBy = null;
  }
}

// --- finestre (stati piu' semplici, stessa filosofia) ----------------------
export function createWindowRuntime(defs) {
  const wins = {};
  for (const w of defs) {
    wins[w.id] = {
      id: w.id, building: w.building ?? null,
      state: w.state === 'open' ? 'open' : 'closed',
      anim: w.state === 'open' ? 1 : 0,
      passable: !!w.passable, t: 0, from: 0, to: 0,
    };
  }
  return wins;
}

export function toggleWindow(rt, id) {
  const w = rt[id];
  if (!w) return { ok: false };
  const nowOpen = w.state !== 'open';
  w.state = nowOpen ? 'open' : 'closed';
  w.from = w.anim; w.to = nowOpen ? 1 : 0; w.t = 0;
  return { ok: true, nowOpen, sound: 'window' };
}

export function updateWindows(rt, dtMs) {
  let anyMoving = false;
  for (const w of Object.values(rt)) {
    if (w.anim === w.to) continue;
    anyMoving = true;
    w.t += dtMs;
    const k = Math.min(1, w.t / 450);
    w.anim = w.from + (w.to - w.from) * k;
  }
  return { anyMoving };
}

// Finestra che ostruisce il passaggio (solo quelle passabili chiuse).
export function windowBlocking(w) {
  if (!w.passable) return false;
  return w.state !== 'open';
}
