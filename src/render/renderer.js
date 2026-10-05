import * as THREE from 'three';
import { buildStaticScene } from './staticScene.js';
import { sharedLambert, sharedBasic, sharedGeo, disposeAssets } from './assets.js';
import { WORLD } from '../world/mapData.js';

// Rendering low-poly: 1 emisferica + 1 direzionale, niente shadowmap.
// Su SwiftShader (CPU): no antialias, pixelRatio 1, buffer ridotto (fill-bound).
function isSoftwareGL() {
  try {
    const c = document.createElement('canvas');
    const gl = c.getContext('webgl2') || c.getContext('webgl');
    const ext = gl?.getExtension('WEBGL_debug_renderer_info');
    const name = ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : '';
    return /swiftshader|llvmpipe|software/i.test(name);
  } catch { return false; }
}

export function makeRenderer(container) {
  const soft = isSoftwareGL();
  const SS_SCALE = 0.7;
  const renderer = new THREE.WebGLRenderer({ antialias: !soft });
  renderer.setPixelRatio(soft ? 1 : Math.min(devicePixelRatio, 2));
  const applySize = () => {
    if (soft) renderer.setSize(Math.round(innerWidth * SS_SCALE), Math.round(innerHeight * SS_SCALE), false);
    else renderer.setSize(innerWidth, innerHeight);
  };
  applySize();
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x87a5c8);
  scene.fog = new THREE.Fog(0x87a5c8, 60, 140);
  scene.add(new THREE.HemisphereLight(0xcfe5ff, 0x3a4a3a, 1.1));
  const sun = new THREE.DirectionalLight(0xfff2d9, 1.6);
  sun.position.set(30, 45, 20); scene.add(sun);

  buildStaticScene(scene);

  const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 300);
  const onResize = () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    applySize();
  };
  addEventListener('resize', onResize);

  return {
    renderer, scene, camera, soft,
    dispose() {
      removeEventListener('resize', onResize);
      scene.traverse(o => { if (o.isMesh) { /* geometrie/materiali condivisi: dispose centralizzato */ } });
      renderer.dispose();
      disposeAssets();
      renderer.domElement.remove();
    }
  };
}

export function makeHumanoid(color, isPlayer, role) {
  const g = new THREE.Group();
  const bodyGeo = sharedGeo('body2', () => new THREE.CylinderGeometry(.26, .32, .75, 8));
  const body = new THREE.Mesh(bodyGeo, sharedLambert(color));
  body.position.y = 1.0; g.add(body);
  const head = new THREE.Mesh(
    sharedGeo('head', () => new THREE.SphereGeometry(.24, 10, 8)),
    sharedLambert(0xe8b98a));
  head.position.y = 1.62; g.add(head);
  if (role === 'police') {
    const cap = new THREE.Mesh(
      sharedGeo('cap', () => new THREE.CylinderGeometry(.25, .26, .12, 8)),
      sharedLambert(0x1a2a6a));
    cap.position.y = 1.82; g.add(cap);
  }
  const legGeo = sharedGeo('leg', () => new THREE.BoxGeometry(.16, .62, .16));
  const legMat = sharedLambert(0x2e3440);
  const legL = new THREE.Mesh(legGeo, legMat); legL.position.set(-.13, .31, 0); g.add(legL);
  const legR = new THREE.Mesh(legGeo, legMat); legR.position.set(.13, .31, 0); g.add(legR);
  const armGeo = sharedGeo('arm', () => new THREE.BoxGeometry(.12, .58, .12));
  const armMat = sharedLambert(color);
  const armL = new THREE.Mesh(armGeo, armMat); armL.position.set(-.36, 1.05, 0); g.add(armL);
  const armR = new THREE.Mesh(armGeo, armMat); armR.position.set(.36, 1.05, 0); g.add(armR);
  if (isPlayer) {
    const ring = new THREE.Mesh(
      sharedGeo('ring', () => new THREE.TorusGeometry(.55, .05, 6, 16)),
      sharedBasic(0x2fbf71));
    ring.rotation.x = Math.PI / 2; ring.position.y = .06; g.add(ring);
  }
  const mark = new THREE.Mesh(
    sharedGeo('mark', () => new THREE.OctahedronGeometry(.16)),
    sharedBasic(0xff3344));
  mark.position.y = 2.1; mark.visible = false; g.add(mark);
  g.userData.mark = mark;
  g.userData.limbs = { legL, legR, armL, armR, phase: 0 };
  return g;
}

// Animazione procedurale dallo stato simulativo (mai cinematica):
// camminata/corsa oscillano gli arti, idle respira, attacco alza il braccio.
export function animateHumanoid(g, speed, t, attacking) {
  const L = g.userData.limbs;
  if (!L) return;
  const run = Math.min(1, speed / 3);
  L.phase += (2 + speed * 2.2) * 0.05;
  const sw = Math.sin(L.phase) * 0.55 * run;
  L.legL.rotation.x = sw; L.legR.rotation.x = -sw;
  if (attacking) {
    L.armR.rotation.x = -2.2;
    L.armL.rotation.x = 0.3;
  } else {
    L.armL.rotation.x = -sw * 0.8; L.armR.rotation.x = sw * 0.8;
  }
  const idle = Math.sin(t * 1.8) * 0.02 * (1 - run);
  L.legL.position.y = .31 + idle; L.legR.position.y = .31 - idle;
}

export function makePackage() {
  const g = new THREE.Group();
  const box = new THREE.Mesh(
    sharedGeo('pkg', () => new THREE.BoxGeometry(.7, .5, .7)),
    sharedLambert(0xffd23f));
  box.position.y = .3; g.add(box);
  const glow = new THREE.Mesh(
    sharedGeo('pkgglow', () => new THREE.BoxGeometry(.78, .06, .78)),
    sharedBasic(0xfff2a8));
  glow.position.y = .58; g.add(glow);
  g.position.set(WORLD.packageSpot.x, 0, WORLD.packageSpot.z);
  return g;
}
