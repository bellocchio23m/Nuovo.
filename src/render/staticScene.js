import * as THREE from 'three';
import { WORLD } from '../world/mapData.js';
import { sharedLambert, sharedBasic } from './assets.js';

// Scena statica del quartiere (solo rendering; la fisica vive in world.js).
export function buildStaticScene(scene) {
  const mat = sharedLambert;
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), mat(0x3d5a3a));
  ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);
  const r = WORLD.road;
  const road = new THREE.Mesh(new THREE.PlaneGeometry(r.maxX - r.minX, r.maxZ - r.minZ), mat(0x33363c));
  road.rotation.x = -Math.PI / 2; road.position.set(0, 0.02, 0); scene.add(road);
  const p = WORLD.piazza;
  const pia = new THREE.Mesh(new THREE.PlaneGeometry(p.w, p.d), mat(0x8a8578));
  pia.rotation.x = -Math.PI / 2; pia.position.set(p.cx, 0.03, p.cz); scene.add(pia);
  const alley = new THREE.Mesh(new THREE.PlaneGeometry(4, 16), mat(0x6f6a5e));
  alley.rotation.x = -Math.PI / 2; alley.position.set(18, 0.025, 5); scene.add(alley);

  const wallCols = { bar: 0xb0894f, b2: 0x7f96b0, b3: 0x9c7f8f, b4: 0x8ba07a, b5: 0xa09a7f };
  for (const b of WORLD.buildings) {
    const g = new THREE.Group();
    const wallM = mat(wallCols[b.id] ?? 0x888888);
    const roofM = mat(0x4a3f35);
    if (!b.interior) {
      const box = new THREE.Mesh(new THREE.BoxGeometry(b.w, b.h, b.d), wallM);
      box.position.set(b.x, b.h / 2, b.z); g.add(box);
      const roof = new THREE.Mesh(new THREE.BoxGeometry(b.w + .6, .4, b.d + .6), roofM);
      roof.position.set(b.x, b.h + .2, b.z); g.add(roof);
      // finestre: strisce scure sulle facciate sud/nord (costo: 2 draw/building)
      const winM = mat(0x1d2530);
      for (const zs of [b.z - b.d / 2 - 0.03, b.z + b.d / 2 + 0.03]) {
        const wins = new THREE.Mesh(new THREE.BoxGeometry(Math.max(1, b.w - 2), 1.1, 0.06), winM);
        wins.position.set(b.x, Math.min(3.4, b.h - 1.4), zs); g.add(wins);
      }
      // porta d'ingresso
      const door = new THREE.Mesh(new THREE.BoxGeometry(1.2, 2.2, 0.1), mat(0x3a2c1c));
      door.position.set(b.x, 1.1, b.z - b.d / 2 - 0.04); g.add(door);
    } else {
      const t = .4, H = 3.2, hx = b.w / 2, hz = b.d / 2, dw = b.door.width / 2, dx = b.door.at;
      const zS = b.z - hz, zN = b.z + hz;
      const segs = [
        [xMid(b.x - hx, dx - dw), zS, (dx - dw) - (b.x - hx), t],
        [xMid(dx + dw, b.x + hx), zS, (b.x + hx) - (dx + dw), t],
        [b.x, zN, b.w, t],
      ];
      for (const [sx, sz, w, d] of segs) {
        const m = new THREE.Mesh(new THREE.BoxGeometry(w, H, d), wallM);
        m.position.set(sx, H / 2, sz); g.add(m);
      }
      for (const sx of [b.x - hx, b.x + hx]) {
        const m = new THREE.Mesh(new THREE.BoxGeometry(t, H, b.d), wallM);
        m.position.set(sx, H / 2, b.z); g.add(m);
      }
      const roof = new THREE.Mesh(new THREE.BoxGeometry(b.w + .6, .4, b.d + .6), roofM);
      roof.position.set(b.x, H + .2, b.z); g.add(roof);
      const floor = new THREE.Mesh(new THREE.PlaneGeometry(b.w, b.d), mat(0x6e5b43));
      floor.rotation.x = -Math.PI / 2; floor.position.set(b.x, .04, b.z); g.add(floor);
      const counter = new THREE.Mesh(new THREE.BoxGeometry(4, 1, 1), mat(0x5a3d24));
      counter.position.set(b.x, .5, b.z + 2.5); g.add(counter);
      for (const [tx, tz] of [[-2.5, -1.5], [0, -2], [2.5, -1]]) {
        const tb = new THREE.Mesh(new THREE.CylinderGeometry(.5, .5, .1, 8), mat(0x774422));
        tb.position.set(b.x + tx, .75, b.z + tz); g.add(tb);
        const leg = new THREE.Mesh(new THREE.CylinderGeometry(.08, .08, .75, 6), mat(0x333333));
        leg.position.set(b.x + tx, .37, b.z + tz); g.add(leg);
      }
    }
    scene.add(g);
  }
  for (const pr of WORLD.props) {
    const g = new THREE.Group();
    if (pr.kind === 'lamp') {
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(.09, .09, 4.4, 6), mat(0x222630));
      pole.position.y = 2.2; g.add(pole);
      const head = new THREE.Mesh(new THREE.SphereGeometry(.28, 8, 6),
        sharedBasic(0xffe9a8));
      head.position.y = 4.5; g.add(head);
    } else if (pr.kind === 'tree') {
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(.18, .24, 1.6, 6), mat(0x5a4128));
      trunk.position.y = .8; g.add(trunk);
      const top = new THREE.Mesh(new THREE.ConeGeometry(1.4, 2.6, 7), mat(0x2e6b34));
      top.position.y = 2.8; g.add(top);
    } else if (pr.kind === 'bench') {
      const seat = new THREE.Mesh(new THREE.BoxGeometry(2.2, .12, .8), mat(0x6b4a2c));
      seat.position.y = .5; g.add(seat);
    } else if (pr.kind === 'crates') {
      const c1 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 1.2), mat(0x8a6a3a));
      c1.position.y = .6; g.add(c1);
      const c2 = new THREE.Mesh(new THREE.BoxGeometry(.9, .9, .9), mat(0x7a5c30));
      c2.position.set(.8, 1.65, .2); c2.rotation.y = .4; g.add(c2);
    } else if (pr.kind === 'yardstack') {
      // torre di casse sabotabile: mesh dinamica gestita da game (stato ok/armed/fallen)
      const t = new THREE.Mesh(new THREE.BoxGeometry(2.2, 2.4, 2.2), mat(0x8a6a3a));
      t.position.y = 1.2; t.name = 'yardstack'; g.add(t);
      const t2 = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1, 1.4), mat(0x7a5c30));
      t2.position.y = 2.9; t2.name = 'yardstack_top'; g.add(t2);
    }
    g.position.set(pr.x, 0, pr.z); scene.add(g);
  }
  // muri di copertura stealth
  for (const w of WORLD.coverWalls ?? []) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w.w, 2.2, w.d), mat(0x9a938a));
    m.position.set(w.x, 1.1, w.z); scene.add(m);
  }
}
function xMid(a, b) { return (a + b) / 2; }
