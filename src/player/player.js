import { resolveCircle } from '../world/world.js';

export function makePlayer(x, z) {
  return {
    x, z, yaw: Math.PI, speed: 0, mesh: null, interactTarget: null,
    crouch: false, running: false, attackT: -99
  };
}

export function updatePlayer(p, input, camYaw, dt, colliders) {
  const a = input.axis();
  const run = input.run() && !p.crouch;
  const maxV = p.crouch ? 1.5 : (run ? 5.2 : 3.0);
  // movimento relativo alla camera. Screen-right per una camera che guarda
  // lungo f=(sin,cos) è (-cos,+sin) (Three.js Y-up, right-handed): il vettore
  // (cos,-sin) è esattamente -screen-right, quindi D/a.x=+1 muoveva a sinistra.
  const sin = Math.sin(camYaw), cos = Math.cos(camYaw);
  const wx = -a.x * cos - a.z * sin;
  const wz = a.x * sin - a.z * cos;
  const m = Math.hypot(wx, wz);
  if (m > 0.01) {
    const v = Math.min(maxV, maxV * m);
    p.x += (wx / m) * v * dt; p.z += (wz / m) * v * dt;
    p.yaw = Math.atan2(wx, wz);
    p.speed = v;
  } else p.speed = 0;
  p.running = p.speed > 3.5;
  const r = resolveCircle(p.x, p.z, 0.4, colliders);
  p.x = r.x; p.z = r.z;
}

export function serializePlayer(p) {
  return {
    x: p.x, z: p.z, yaw: p.yaw, crouch: p.crouch,
    // timer d'azione simulativi: senza, il load azzera i cooldown e
    // permette attacco/fischio immediati (stato perso, non piu' un dettaglio)
    attackCd: p.attackCd ?? -99, whistleCd: p.whistleCd ?? -99,
    attackT: p.attackT ?? -99
  };
}

export function restorePlayerExtra(p, s) {
  p.crouch = s.crouch ?? false; p.running = false;
  p.attackCd = s.attackCd ?? -99;
  p.whistleCd = s.whistleCd ?? -99;
  p.attackT = s.attackT ?? -99;
}
