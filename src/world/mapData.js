// Layout del quartiere 100x100m. Coordinate XZ, origine al centro.
// Strada est-ovest (z in [-4,4]); piazza a nord-est; vicolo tra B2 e B3;
// Bar con interno esplorabile e porta sud; service yard a ovest (sabotabile);
// corte retrostante a nord (isolata); appartamento in B2.
// Ogni location ha valore sistemico (routine/riparo/isolamento/cover).
export const WORLD = {
  size: 100,
  road: { minX: -50, maxX: 50, minZ: -4, maxZ: 4 },
  piazza: { cx: 37, cz: 20, w: 18, d: 16 },
  buildings: [
    { id: 'bar', name: 'Bar Centrale', x: -20, z: 20, w: 16, d: 12, h: 5, interior: true,
      door: { side: 'S', at: -20, width: 2.4 } },
    { id: 'b2', name: 'Palazzo (appartamenti)', x: 12, z: 20, w: 8, d: 12, h: 9 },
    { id: 'b3', name: 'Casa B3', x: 24, z: 20, w: 8, d: 12, h: 6 },
    { id: 'b4', name: 'Casa B4', x: -18, z: -20, w: 14, d: 10, h: 6 },
    { id: 'b5', name: 'Casa B5', x: 10, z: -20, w: 16, d: 10, h: 5 }
  ],
  // muri di copertura stealth (alti: bloccano movimento E vista)
  coverWalls: [
    { x: 29.5, z: 14, w: 5, d: 0.5 },
    { x: -32.4, z: 16, w: 0.5, d: 5 }
  ],
  // waypoint di navigazione (grafo). Tutti gli spigoli sono liberi da edifici.
  nodes: {
    road_w:  { x: -40, z: 0 }, road_c:  { x: 0, z: 0 }, road_e:  { x: 44, z: 0 },
    vic_n:   { x: 17, z: 13 }, vic_s:   { x: 18, z: -2 },
    pia_c:   { x: 37, z: 20 }, pia_w:   { x: 29, z: 20 }, pia_e: { x: 44, z: 20 },
    bar_in:  { x: -20, z: 20 }, bar_out: { x: -20, z: 11 },
    b4_door: { x: -18, z: -14 }, b5_door: { x: 10, z: -14 },
    sq_s:    { x: 0, z: -10 }, pia_s: { x: 37, z: 8 },
    apt:     { x: 12, z: 12.3 },
    svc_in:  { x: -34.5, z: 20 }, svc_out: { x: -32, z: 8 },
    court:   { x: -20, z: 30 }, north_c: { x: -20, z: 33 },
    north_w: { x: -30, z: 33 }, north_e: { x: 30, z: 33 }
  },
  edges: [
    ['road_w', 'road_c'], ['road_c', 'road_e'], ['road_c', 'vic_s'],
    ['vic_s', 'vic_n'], ['pia_w', 'pia_c'], ['pia_c', 'pia_e'],
    ['pia_c', 'pia_s'], ['pia_s', 'vic_n'], ['pia_s', 'pia_w'], ['vic_s', 'road_c'],
    ['road_c', 'sq_s'], ['sq_s', 'b4_door'], ['sq_s', 'b5_door'],
    ['bar_out', 'road_c'], ['bar_in', 'bar_out'],
    ['road_e', 'pia_e'], ['pia_e', 'pia_s'],
    ['apt', 'vic_n'], ['apt', 'vic_s'],
    ['svc_in', 'svc_out'], ['svc_out', 'road_w'],
    ['court', 'north_c'], ['north_c', 'north_w'], ['north_c', 'north_e'],
    ['north_w', 'road_w'], ['north_e', 'pia_e']
  ],
  props: [
    { kind: 'lamp', x: -30, z: 6 }, { kind: 'lamp', x: -5, z: -6 },
    { kind: 'lamp', x: 18, z: 12 }, { kind: 'lamp', x: 34, z: 26 },
    { kind: 'lamp', x: -38, z: 24 },
    { kind: 'bench', x: 33, z: 24 }, { kind: 'bench', x: 40, z: 17 },
    { kind: 'crates', x: 15.8, z: 8 },
    { kind: 'yardstack', x: -38, z: 20 },
    { kind: 'tree', x: -34, z: 24 },
    { kind: 'tree', x: 40, z: -8 }, { kind: 'tree', x: -8, z: -28 }
  ],
  packageSpot: null // P1: niente pacco demo; il gameplay è l'assassinio
};

// Affordance interagibili: stato persistito in worldFlags.
export function initialInteractables() {
  return {
    yardstack: { kind: 'sabotage', x: -38, z: 20, state: 'ok' } // ok|armed|fallen
  };
}

// Nomi leggibili dei luoghi (solo UI; la sim usa gli id).
export const PLACE_IT = {
  road_w: 'strada ovest', road_c: 'strada centrale', road_e: 'strada est',
  vic_n: 'vicolo nord', vic_s: 'vicolo sud',
  pia_c: 'piazza', pia_w: 'piazza ovest', pia_e: 'piazza est', pia_s: 'ingresso piazza',
  bar_in: 'bar (interno)', bar_out: 'fuori dal bar',
  b4_door: 'casa sud-ovest', b5_door: 'casa sud-est', sq_s: 'piazzale sud',
  apt: 'palazzo (portone)', svc_in: 'deposito', svc_out: 'piazzale deposito',
  court: 'corte retrostante', north_c: 'vicolo nord', north_w: 'vicolo nord-ovest', north_e: 'vicolo nord-est'
};
