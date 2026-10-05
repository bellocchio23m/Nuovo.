// Tastiera + touch (joystick sinistro, drag destro per camera, pulsanti E/corsa).
// Ritorna {api, dispose}: il dispose rimuove TUTTI i listener (anti double-boot).
export function makeInput() {
  const keys = new Set();
  const joy = { x: 0, z: 0, active: false };
  let runToggle = false;
  const look = { dx: 0, dy: 0 };
  const pressed = new Set();
  const subs = [];
  const on = (target, type, fn, opts) => {
    target.addEventListener(type, fn, opts);
    subs.push([target, type, fn, opts]);
  };

  on(window, 'keydown', (e) => {
    if (['ArrowUp', 'ArrowDown', 'Space'].includes(e.code)) e.preventDefault();
    if (e.code === 'F3') e.preventDefault();
    keys.add(e.code); pressed.add(e.code);
  });
  on(window, 'keyup', (e) => keys.delete(e.code));

  let dragging = false, lx = 0, ly = 0;
  const app = document.getElementById('app');
  on(app, 'mousedown', (e) => { dragging = true; lx = e.clientX; ly = e.clientY; });
  on(window, 'mousemove', (e) => {
    if (!dragging) return;
    look.dx += e.clientX - lx; look.dy += e.clientY - ly;
    lx = e.clientX; ly = e.clientY;
  });
  on(window, 'mouseup', () => dragging = false);
  on(app, 'touchstart', (e) => {
    for (const t of e.changedTouches) {
      if (t.clientX > innerWidth * 0.4 && !dragging) { dragging = true; lx = t.clientX; ly = t.clientY; }
    }
  }, { passive: true });
  on(app, 'touchmove', (e) => {
    for (const t of e.changedTouches) {
      if (dragging) { look.dx += t.clientX - lx; look.dy += t.clientY - ly; lx = t.clientX; ly = t.clientY; }
    }
  }, { passive: true });
  on(app, 'touchend', () => dragging = false);

  const joyEl = document.getElementById('joy'), stick = document.getElementById('stick');
  let joyId = null;
  const setStick = (dx, dy) => { stick.style.left = (34 + dx) + 'px'; stick.style.top = (34 + dy) + 'px'; };
  on(joyEl, 'touchstart', (e) => { joyId = e.changedTouches[0].identifier; e.preventDefault(); }, { passive: false });
  on(window, 'touchmove', (e) => {
    for (const t of e.changedTouches) {
      if (t.identifier === joyId) {
        const r = joyEl.getBoundingClientRect();
        let dx = t.clientX - (r.left + 60), dy = t.clientY - (r.top + 60);
        const m = Math.hypot(dx, dy) || 1, cl = Math.min(m, 44);
        dx = dx / m * cl; dy = dy / m * cl;
        setStick(dx, dy); joy.x = dx / 44; joy.z = dy / 44; joy.active = true;
      }
    }
  }, { passive: true });
  on(window, 'touchend', (e) => {
    for (const t of e.changedTouches) {
      if (t.identifier === joyId) { joyId = null; joy.x = 0; joy.z = 0; joy.active = false; setStick(0, 0); }
    }
  });
  const btnAct = document.getElementById('btn-act'), btnRun = document.getElementById('btn-run');
  const actFn = () => pressed.add('KeyE');
  const runFn = () => runToggle = !runToggle;
  on(btnAct, 'click', actFn);
  on(btnRun, 'click', runFn);
  const bf = document.getElementById('btn-fight'), bq = document.getElementById('btn-whistle'), bc = document.getElementById('btn-crouch');
  if (bf) on(bf, 'click', () => pressed.add('KeyF'));
  if (bq) on(bq, 'click', () => pressed.add('KeyQ'));
  if (bc) on(bc, 'click', () => pressed.add('KeyC'));

  // API di test: permette di simulare input senza tastiera reale (touch/desktop).
  const api = {
    axis() {
      let x = 0, z = 0;
      if (keys.has('KeyW') || keys.has('ArrowUp')) z -= 1;
      if (keys.has('KeyS') || keys.has('ArrowDown')) z += 1;
      if (keys.has('KeyA') || keys.has('ArrowLeft')) x -= 1;
      if (keys.has('KeyD') || keys.has('ArrowRight')) x += 1;
      if (joy.active) { x += joy.x; z += joy.z; }
      const m = Math.hypot(x, z);
      if (m > 1) { x /= m; z /= m; }
      return { x, z };
    },
    run() { return keys.has('ShiftLeft') || keys.has('ShiftRight') || runToggle; },
    consumeLook() { const d = { dx: look.dx, dy: look.dy }; look.dx = 0; look.dy = 0; return d; },
    wasPressed(code) {
      if (pressed.has(code)) { pressed.delete(code); return true; }
      return false;
    },
    injectKey(code) { pressed.add(code); keys.add(code); },
    releaseKey(code) { keys.delete(code); },
    injectLook(dx, dy) { look.dx += dx; look.dy += dy; },
    setJoy(x, z) { joy.x = x; joy.z = z; joy.active = true; },
    clearJoy() { joy.x = 0; joy.z = 0; joy.active = false; setStick(0, 0); }
  };
  return {
    api,
    dispose() {
      for (const [t, type, fn, opts] of subs) t.removeEventListener(type, fn, opts);
      subs.length = 0;
    }
  };
}
