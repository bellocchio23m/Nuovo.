import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { buildStaticScene } from './staticScene.js';
import { buildInteriors } from './interiors.js';
import { buildS9District } from './s9_district.js';
import { sharedLambert, sharedBasic, sharedGeo, disposeAssets } from './assets.js';
import { WORLD } from '../world/mapData.js';
import { makeHumanoid as makeHuman, animateHumanoid as animateHuman, setHumanCamera } from './humans.js';

// Rendering low-poly: 1 emisferica + 1 direzionale con ombre (solo GPU reale).
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
  scene.background = new THREE.Color(0x8fb0d4);
  scene.fog = new THREE.Fog(0x8fb0d4, 60, 140);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  // S7: luce che valorizza i PBR — sole caldo dominante, cielo freddo di
  // riempimento, environment tenue per riflessi credibili di vetro/metalli.
  scene.add(new THREE.HemisphereLight(0xd6e4f5, 0x54503f, 0.85));
  const sun = new THREE.DirectionalLight(0xffe2b8, 2.4);
  sun.position.set(34, 42, 18); scene.add(sun);
  // rimbalzo caldo dal basso-opposto: distingue zone coperte da ombre nette
  const bounce = new THREE.DirectionalLight(0xc8b89a, 0.35);
  bounce.position.set(-20, 12, -30); scene.add(bounce);
  try {
    const pmrem = new THREE.PMREMGenerator(renderer);
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    scene.environmentIntensity = 0.35;
    pmrem.dispose();
  } catch { /* headless/gpu assente: i PBR restano leggibili con sole+emisferica */ }
  if (!soft) {
    // Ombre solo su GPU reale: mappa piccola, bounds stretti sul quartiere.
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.left = -85; sun.shadow.camera.right = 85;
    sun.shadow.camera.top = 85; sun.shadow.camera.bottom = -85;
    sun.shadow.camera.near = 5; sun.shadow.camera.far = 200;
    sun.shadow.bias = -0.0006;
    sun.shadow.radius = 2;
  }

  buildStaticScene(scene);
  buildInteriors(scene); // S8: interni veri (stessa fonte dei collider)
  buildS9District(scene); // S9: espansione est/sud/ovest/nord (solo aggiunte)

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

// Personaggi umani finali (v. render/humans.js): corpo anatomico, volto 3D,
// capelli, outfit modulari e rig condiviso. Firma invariata per game.js.
let lastCamera = null;
export function noteCamera(cam) { lastCamera = cam; setHumanCamera(cam); }
export function makeHumanoid(color, isPlayer, role, npc) {
  const g = makeHuman(color, isPlayer, role, npc);
  // la camera serve al LOD proporzionato alla distanza
  if (lastCamera) setHumanCamera(lastCamera);
  return g;
}

// Animazione procedurale dallo stato simulativo (mai cinematica):
// camminata/corsa/idle/conversazione/allerta sul rig condiviso.
// extra opzionale {talk, alert, crouch}.
export function animateHumanoid(g, speed, t, attacking, extra) {
  animateHuman(g, speed, t, attacking, extra);
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
