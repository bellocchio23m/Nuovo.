// S7 — mesh delle interazioni (three.js). Geometrie invariate altrove:
// qui solo ante/pannelli/contenuti su cardini + feedback visivo.
// Attivazione a distanza: lontano dal player niente animazione.
import * as THREE from 'three';
import { matWood, matMetal, matGlass, matCarPaint, matLampOn } from './materials.js';

function box(w, h, d, m) {
  const o = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
  o.castShadow = true; o.receiveShadow = true;
  return o;
}

function lam(color) {
  return new THREE.MeshLambertMaterial({ color });
}

const DOOR_STYLE = {
  door_bar_main: 0, door_b2_apt: 1, door_b3_shop: 0, door_b4_main: 2,
};
function doorMat(id) {
  if (id === 'door_bar_back' || id === 'door_svc_gate' || id === 'door_court_gate') return matMetal('painted');
  return matWood(DOOR_STYLE[id] ?? 1);
}

export function buildInteractionObjects(scene, table) {
  const refs = new Map();
  const group = new THREE.Group();
  group.name = 'interactions';
  const reg = (id, obj) => { refs.set(id, obj); group.add(obj.group); };

  for (const d of Object.values(table)) {
    // S8: i piani superiori non hanno ancora quota/camera: niente mesh
    // flottanti al piano terra (il prompt filtra già per quota).
    if ((d.y ?? 0) > 1.5) continue;
    if (d.kind === 'door') {
      const g = new THREE.Group();
      g.position.set(d.x, 0, d.z);
      const leaf = box(1.3, 2.2, 0.08, doorMat(d.id));
      leaf.position.set(0.65, 1.15, 0); // cardine a sinistra
      const pivot = new THREE.Group();
      pivot.add(leaf);
      // maniglia
      const knob = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), matMetal('brass'));
      knob.position.set(1.1, 0, 0.08);
      leaf.add(knob);
      // lucchetto se serrata
      let padlock = null;
      if (d.lockedBy) {
        padlock = box(0.16, 0.2, 0.08, matMetal('steel'));
        padlock.position.set(1.1, 1.0, 0.1);
        g.add(padlock);
      }
      g.add(pivot);
      reg(d.id, { group: g, pivot, padlock, kind: 'door', targetY: d.state === 'open' ? -1.85 : 0 });
      pivot.rotation.y = d.state === 'open' ? -1.85 : 0;
    } else if (d.kind === 'window') {
      const g = new THREE.Group();
      g.position.set(d.x, 1.9, d.z);
      const pane = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.2, 0.05), matGlass());
      pane.position.set(0.5, 0, 0);
      const pivot = new THREE.Group();
      pivot.add(pane);
      g.add(pivot);
      reg(d.id, { group: g, pivot, kind: 'window', targetY: d.state === 'open' ? 1.2 : 0 });
    } else if (d.kind === 'container' || d.kind === 'street') {
      const g = new THREE.Group();
      g.position.set(d.x, 0, d.z);
      if (d.id.startsWith('bin_')) {
        const dome = new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 6, 0, Math.PI * 2, 0, 1.2), lam(0x2e5a34));
        dome.position.y = 0.75; dome.castShadow = true;
        const pivot = new THREE.Group(); pivot.position.y = 0.75; pivot.add(dome);
        dome.position.set(0, 0, 0);
        g.add(pivot);
        reg(d.id, { group: g, pivot, kind: 'lid', targetX: 0 });
      } else if (d.id === 'vendor_sud') {
        const bodyM = matCarPaint(0x9a3a2e);
        const body = box(1.1, 1.9, 0.7, bodyM); body.position.y = 0.95; g.add(body);
        const front = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 1.2), matGlass(0xd8e8ea, 0.5));
        front.position.set(0, 1.0, 0.36); g.add(front);
        const glow = new THREE.Mesh(new THREE.PlaneGeometry(0.9, 0.25), matLampOn());
        glow.position.set(0, 1.75, 0.36); g.add(glow);
        reg(d.id, { group: g, pivot: null, kind: 'static' });
      } else if (d.id === 'fountain') {
        const base = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.6, 0.7, 10), lam(0x8d8578));
        base.position.y = 0.35; base.castShadow = true; g.add(base);
        const jet = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.08, 0.8, 6), matGlass(0xcfe8ee, 0.6));
        jet.position.y = 1.0; g.add(jet);
        reg(d.id, { group: g, pivot: null, kind: 'static' });
      } else {
        // coperchio generico su cardine posteriore
        const lid = box(1.4, 0.09, 0.9, matMetal('iron'));
        lid.position.set(0, 0, 0.45);
        const pivot = new THREE.Group();
        pivot.position.set(0, 1.32, -0.45);
        pivot.add(lid);
        g.add(pivot);
        reg(d.id, { group: g, pivot, kind: 'lid', targetX: d.state === 'open' ? -1.0 : 0 });
      }
    } else if (d.kind === 'pickup') {
      const g = new THREE.Group();
      g.position.set(d.x, 0.55, d.z);
      let mesh;
      if (d.id.startsWith('key_')) {
        mesh = new THREE.Group();
        const ring = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.025, 6, 12), matMetal('brass'));
        mesh.add(ring);
        const stem = box(0.05, 0.22, 0.03, matMetal('brass'));
        stem.position.y = -0.16; mesh.add(stem);
      } else if (d.id.startsWith('doc_') || d.id.startsWith('note_')) {
        mesh = box(0.3, 0.02, 0.4, lam(0xe8e2d0));
      } else if (d.id.startsWith('tool_')) {
        mesh = new THREE.Group();
        const handle = box(0.08, 0.08, 0.4, lam(0x8a2a22));
        mesh.add(handle);
        const head = box(0.1, 0.1, 0.16, matMetal('steel'));
        head.position.z = 0.26; mesh.add(head);
      } else if (d.id.startsWith('bottle_')) {
        mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.34, 8), matGlass(0x3f7a3a, 0.75));
      } else {
        mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.03, 10), matMetal('brass'));
      }
      mesh.traverse?.(o => { if (o.isMesh) o.castShadow = true; });
      if (mesh.isMesh) mesh.castShadow = true;
      g.add(mesh);
      // alone di leggibilità
      const halo = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.5),
        new THREE.MeshBasicMaterial({ color: 0xffe9a8, transparent: true, opacity: 0.35, side: THREE.DoubleSide }));
      halo.rotation.x = -Math.PI / 2; halo.position.y = -0.5;
      g.add(halo);
      g.visible = d.state === 'present';
      reg(d.id, { group: g, pivot: null, kind: 'pickup', spin: mesh });
    } else if (d.kind === 'light') {
      const g = new THREE.Group();
      g.position.set(d.x, 0, d.z);
      // placca interruttore sempre visibile da vicino
      const plate = box(0.14, 0.2, 0.05, lam(0xe6e0d2));
      plate.position.set(0, 1.4, 0.1);
      g.add(plate);
      let bulb = null, pl = null;
      if (d.light === 'barMain' || d.light === 'barBack') {
        bulb = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6),
          d.state === 'on' ? matLampOn() : lam(0x555550));
        bulb.position.set(0, 2.6, d.light === 'barMain' ? 3.5 : 5);
        g.add(bulb);
        pl = new THREE.PointLight(0xffd9a0, d.state === 'on' ? 12 : 0, 14, 1.8);
        pl.position.copy(bulb.position);
        g.add(pl);
      } else {
        // lampioni stradali: alone caldo sull'armatura esistente
        bulb = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 6),
          d.state === 'on' ? matLampOn() : lam(0x3a3a38));
        bulb.position.set(0, 4.42, 1.0);
        g.add(bulb);
      }
      reg(d.id, { group: g, pivot: null, kind: 'lamp', bulb, pl, light: d.light });
    } else if (d.kind === 'furniture') {
      const g = new THREE.Group();
      g.position.set(d.x, 0.02, d.z);
      // cuscino-segnaposto sottile: l'affordance si vede dall'anello, qui solo occupato
      const marker = new THREE.Mesh(new THREE.CircleGeometry(0.4, 12),
        new THREE.MeshBasicMaterial({ color: 0x7a9a6a, transparent: true, opacity: 0 }));
      marker.rotation.x = -Math.PI / 2; marker.position.y = 0.03;
      g.add(marker);
      reg(d.id, { group: g, pivot: null, kind: 'seat', marker });
    } else if (d.kind === 'device') {
      const g = new THREE.Group();
      g.position.set(d.x, 0, d.z);
      if (d.id === 'dev_coffee') {
        const body = box(0.6, 0.5, 0.45, matMetal('steel')); body.position.y = 1.25; g.add(body);
        const glow = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.1), matLampOn());
        glow.position.set(0, 1.35, 0.23); g.add(glow);
        glow.visible = d.state === 'brewing';
        reg(d.id, { group: g, pivot: null, kind: 'coffee', glow });
      } else if (d.id === 'dev_radio') {
        const body = box(0.5, 0.3, 0.25, matWood(2)); body.position.y = 2.1; g.add(body);
        const dial = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.08), matLampOn());
        dial.position.set(0, 2.12, 0.13); g.add(dial);
        dial.visible = d.state === 'on';
        reg(d.id, { group: g, pivot: null, kind: 'radio', glow: dial });
      } else if (d.id === 'dev_phone') {
        const pole = box(0.12, 2.4, 0.12, matMetal('iron')); pole.position.y = 1.2; g.add(pole);
        const hood = box(0.8, 0.1, 0.7, matMetal('painted')); hood.position.y = 2.45; g.add(hood);
        const set = box(0.4, 0.5, 0.25, matMetal('iron')); set.position.y = 1.6; g.add(set);
        reg(d.id, { group: g, pivot: null, kind: 'static' });
      } else {
        const plate = box(0.12, 0.18, 0.06, matMetal('brass')); plate.position.y = 1.5; g.add(plate);
        reg(d.id, { group: g, pivot: null, kind: 'static' });
      }
    } else if (d.kind === 'vehicle') {
      const g = new THREE.Group();
      g.position.set(d.x, 0.7, d.z);
      const paint = matCarPaint(d.vehicle === 'red' ? 0x8a2a22 : d.vehicle === 'blue' ? 0x2a4a7a : 0x6a6e74);
      let panel, pivot = new THREE.Group();
      if (d.panel === 'door') {
        panel = box(1.9, 0.6, 0.06, paint);
        panel.position.set(0, 0, 0.95);
        pivot.add(panel);
      } else {
        panel = box(d.panel === 'hood' ? 1.1 : 1.5, 0.08, 1.5, paint);
        panel.position.set(d.panel === 'hood' ? -0.55 : 0.75, 0.15, 0);
        pivot.add(panel);
      }
      g.add(pivot);
      const open = d.state === 'open';
      pivot.rotation.y = d.panel === 'door' && open ? -1.1 : 0;
      pivot.rotation.z = d.panel !== 'door' && open ? 0.7 : 0;
      reg(d.id, { group: g, pivot, kind: 'carpanel', panel: d.panel, targetY: 0, targetZ: 0 });
    }
  }

  // anello di highlight dell'interagibile corrente
  const ring = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.05, 8, 24),
    new THREE.MeshBasicMaterial({ color: 0xffd23f, transparent: true, opacity: 0.9 }));
  ring.rotation.x = -Math.PI / 2;
  ring.visible = false;
  group.add(ring);

  scene.add(group);
  return { group, refs, ring };
}

// Applica uno stato al mesh (chiamato dopo activate e dopo load).
export function syncInteractionMesh(refs, table, id) {
  const r = refs.get(id);
  const d = table[id];
  if (!r || !d) return;
  if (r.kind === 'door') {
    r.targetY = d.state === 'open' ? -1.85 : 0;
    if (r.padlock) r.padlock.visible = !!d.lockedBy;
  } else if (r.kind === 'window') {
    r.targetY = d.state === 'open' ? 1.2 : 0;
  } else if (r.kind === 'lid') {
    r.targetX = d.state === 'open' ? -1.0 : 0;
  } else if (r.kind === 'pickup') {
    r.group.visible = d.state === 'present';
  } else if (r.kind === 'lamp') {
    const on = d.state === 'on';
    if (r.pl) r.pl.intensity = on ? 12 : 0;
    if (r.bulb) r.bulb.material = on ? matLampOn() : new THREE.MeshLambertMaterial({ color: 0x3a3a38 });
  } else if (r.kind === 'seat') {
    if (r.marker) r.marker.material.opacity = d.state === 'seated' ? 0.5 : 0;
  } else if (r.kind === 'coffee' || r.kind === 'radio') {
    if (r.glow) r.glow.visible = d.state === 'brewing' || d.state === 'on';
  } else if (r.kind === 'carpanel') {
    const open = d.state === 'open';
    r.targetY = (r.panel === 'door' && open) ? -1.1 : 0;
    r.targetZ = (r.panel !== 'door' && open) ? 0.7 : 0;
  }
}

export function syncAllInteractionMeshes(refs, table) {
  for (const id of refs.keys()) {
    if (table[id]) syncInteractionMesh(refs, table, id);
  }
  // i pickup rivelati dal loot diventano visibili
  for (const d of Object.values(table)) {
    if (d.kind === 'pickup') {
      const r = refs.get(d.id);
      if (r) r.group.visible = d.state === 'present';
    }
  }
}

// Animazioni: solo entro 40m dal player (distance-based activation).
let tAcc = 0;
export function tickInteractionMeshes(refs, ring, dt, px, pz, focusId) {
  tAcc += dt;
  for (const [id, r] of refs) {
    const dx = r.group.position.x - px, dz = r.group.position.z - pz;
    const far = dx * dx + dz * dz > 1600;
    if (r.pivot && !far) {
      if (r.targetY !== undefined) {
        r.pivot.rotation.y += (r.targetY - r.pivot.rotation.y) * Math.min(1, dt * 7);
      }
      if (r.targetX !== undefined) {
        r.pivot.rotation.x += (r.targetX - r.pivot.rotation.x) * Math.min(1, dt * 7);
      }
      if (r.targetZ !== undefined && r.kind === 'carpanel' && r.panel !== 'door') {
        r.pivot.rotation.z += (r.targetZ - r.pivot.rotation.z) * Math.min(1, dt * 7);
      }
    }
    if (r.kind === 'pickup' && r.group.visible && !far) {
      r.group.position.y = 0.55 + Math.sin(tAcc * 2.5 + r.group.position.x) * 0.08;
      if (r.spin) r.spin.rotation.y = tAcc * 1.5;
    }
  }
  if (focusId && refs.has(focusId)) {
    const r = refs.get(focusId);
    ring.visible = true;
    ring.position.set(r.group.position.x, 0.08, r.group.position.z);
    const s = 1 + Math.sin(tAcc * 4) * 0.08;
    ring.scale.set(s, s, 1);
  } else {
    ring.visible = false;
  }
}
