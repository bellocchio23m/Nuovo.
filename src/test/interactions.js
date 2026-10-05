// S7 — test interazioni mondo (puri, Node-safe: niente DOM/three).
// Verificano i minimi del criterio di interattività, le macchine a stati,
// il loot collegato, le serrature e la persistenza JSON degli stati.
import {
  interactionInitialStates, countByKind, nearestInteractable,
  promptFor, activate, doorObstacle, INTERACT_RADIUS,
} from '../world/interactions.js';

function T(name, fn) {
  try {
    const d = fn();
    return { name, pass: d.pass, detail: d.info ?? '' };
  } catch (e) {
    return { name, pass: false, detail: String(e.message ?? e).slice(0, 160) };
  }
}

const fresh = () => interactionInitialStates();

export function runInteractionTests() {
  const tests = [];
  tests.push(T('s7-counts-minimi', () => {
    const t = fresh();
    const c = countByKind(t);
    const doors = Object.values(t).filter(d => d.kind === 'door').length;
    const wins = Object.values(t).filter(d => d.kind === 'window').length;
    const conts = Object.values(t).filter(d => d.kind === 'container').length;
    const picks = Object.values(t).filter(d => d.kind === 'pickup').length;
    const lights = Object.values(t).filter(d => d.kind === 'light').length;
    const furn = Object.values(t).filter(d => d.kind === 'furniture').length;
    const devs = Object.values(t).filter(d => d.kind === 'device').length;
    const street = Object.values(t).filter(d => d.kind === 'street').length;
    const ok = doors >= 10 && wins >= 4 && conts >= 10 && picks >= 10
      && lights >= 5 && furn >= 5 && devs >= 3 && street >= 3 && c.vehicles >= 3;
    return {
      pass: ok,
      info: `door=${doors} win=${wins} cont=${conts} pick=${picks} light=${lights} furn=${furn} dev=${devs} street=${street} vehicles=${c.vehicles}`,
    };
  }));

  tests.push(T('s7-door-toggle', () => {
    const t = fresh();
    const r1 = activate(t, 'door_bar_back'); // closed -> open
    const r2 = activate(t, 'door_bar_back'); // open -> closed
    return {
      pass: r1.ok && t.door_bar_back.state === 'closed' && r2.ok && !!r1.door && !!r2.door,
      info: `${r1.msg} / ${r2.msg}`,
    };
  }));

  tests.push(T('s7-door-locked-key', () => {
    const t = fresh();
    const denied = activate(t, 'door_b3_back');
    const key = activate(t, 'key_b3');
    const after = activate(t, 'door_b3_back');
    return {
      pass: !denied.ok && denied.sound === 'locked' && key.ok
        && t.key_b3.state === 'taken' && after.ok && t.door_b3_back.state === 'open',
      info: `${denied.msg} -> ${after.msg}`,
    };
  }));

  tests.push(T('s7-door-obstacle-sano', () => {
    const t = fresh();
    const o = doorObstacle(t.door_bar_main);
    const w = o.maxX - o.minX, d = o.maxZ - o.minZ;
    return { pass: w > 0.5 && w < 3 && d > 0.2 && d < 2, info: `w=${w} d=${d}` };
  }));

  tests.push(T('s7-container-loot', () => {
    const t = fresh();
    const before = t.tool_screwdriver2.state;
    const r = activate(t, 'cont_dump_alley');
    const r2 = activate(t, 'cont_dump_alley'); // chiudi
    return {
      pass: before === 'hidden' && r.ok && r.loot === 'tool_screwdriver2'
        && t.tool_screwdriver2.state === 'present' && r2.ok && t.cont_dump_alley.state === 'closed',
      info: r.msg,
    };
  }));

  tests.push(T('s7-pickup-take-once', () => {
    const t = fresh();
    const r1 = activate(t, 'tool_wrench');
    const r2 = activate(t, 'tool_wrench');
    return {
      pass: r1.ok && r1.taken === 'tool_wrench' && !r2.ok && t.tool_wrench.state === 'taken',
      info: r1.msg,
    };
  }));

  tests.push(T('s7-light-toggle', () => {
    const t = fresh();
    const a = activate(t, 'lamp_west');
    const offState = t.lamp_west.state;
    const b = activate(t, 'lamp_west');
    const onState = t.lamp_west.state;
    return {
      pass: a.ok && offState === 'off' && !!a.light && b.ok && onState === 'on',
      info: `${a.msg} / ${b.msg}`,
    };
  }));

  tests.push(T('s7-furniture-sit', () => {
    const t = fresh();
    const a = activate(t, 'sit_bench_1');
    const b = activate(t, 'sit_bench_1');
    return {
      pass: a.ok && !!a.seat?.seated && b.ok && !b.seat.seated && t.sit_bench_1.state === 'free',
      info: a.msg,
    };
  }));

  tests.push(T('s7-device-bell-phone', () => {
    const t = fresh();
    const bell = activate(t, 'dev_bell');
    const p1 = activate(t, 'dev_phone');
    const p2 = activate(t, 'dev_phone');
    return {
      pass: bell.ok && !!bell.noise && bell.noise.radius > 0 && p1.ok && !!p1.info && !p2.ok,
      info: `${bell.msg} / ${p1.msg}`,
    };
  }));

  tests.push(T('s7-vehicle-panels', () => {
    const t = fresh();
    const a = activate(t, 'car_red_trunk');
    return {
      pass: a.ok && t.car_red_trunk.state === 'open' && a.loot === 'tool_wrench2'
        && t.tool_wrench2.state === 'present',
      info: a.msg,
    };
  }));

  tests.push(T('s7-prompt-ogni-def', () => {
    const t = fresh();
    const bad = Object.values(t).filter(d => !promptFor(d) || !promptFor(d).includes('E'));
    return { pass: bad.length === 0, info: `senza prompt: ${bad.map(d => d.id).join(',') || '—'}` };
  }));

  tests.push(T('s7-nearest-rispetta-stato', () => {
    const t = fresh();
    const near = nearestInteractable(t, -20, 13.0); // davanti al bar
    t.key_b3.state = 'taken';
    const far = nearestInteractable(t, 33.5, 24.5); // chiave presa: non riproposta
    return {
      pass: !!near && near.kind === 'door' && (!far || far.id !== 'key_b3'),
      info: `near=${near?.id} far=${far?.id ?? '—'}`,
    };
  }));

  tests.push(T('s7-persistenza-json', () => {
    const t = fresh();
    activate(t, 'door_bar_back');
    activate(t, 'key_b3');
    activate(t, 'lamp_west');
    const snap = JSON.parse(JSON.stringify(t));
    const ok = snap.door_bar_back.state === 'open' && snap.key_b3.state === 'taken'
      && snap.lamp_west.state === 'off' && typeof snap.door_b3_back.x === 'number';
    return { pass: ok, info: 'roundtrip stati porta/chiave/luce' };
  }));

  tests.push(T('s7-window-peek', () => {
    const t = fresh();
    const r = activate(t, 'win_bar_w');
    return {
      pass: r.ok && t.win_bar_w.state === 'open' && r.msg.includes('Dentro:'),
      info: r.msg.slice(0, 80),
    };
  }));

  const failed = tests.filter(t => !t.pass);
  return {
    suite: 'p0-s7-interactions',
    tests,
    summary: `${tests.length - failed.length}/${tests.length} passati`,
  };
}
