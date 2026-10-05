import * as THREE from 'three';

// Cache di materiali/geometrie condivise: a 80 NPC, creare asset per istanza
// significherebbe centinaia di programmi/materiali duplicati. Qui ogni
// combinazione (tipo, colore) esiste una sola volta.
const lamberts = new Map();
export function sharedLambert(color) {
  let m = lamberts.get(color);
  if (!m) { m = new THREE.MeshLambertMaterial({ color }); lamberts.set(color, m); }
  return m;
}

const geos = new Map();
export function sharedGeo(key, make) {
  let g = geos.get(key);
  if (!g) { g = make(); geos.set(key, g); }
  return g;
}

const basics = new Map();
export function sharedBasic(color) {
  let m = basics.get(color);
  if (!m) { m = new THREE.MeshBasicMaterial({ color }); basics.set(color, m); }
  return m;
}

export function disposeAssets() {
  for (const g of geos.values()) g.dispose();
  for (const m of lamberts.values()) m.dispose();
  for (const m of basics.values()) m.dispose();
  geos.clear(); lamberts.clear(); basics.clear();
}
