// S8 — registro edifici/intermi (PURO: niente three.js/DOM, usabile headless).
// Sorgente unica di verita' per: pareti, stanze, porte, finestre, scale,
// mobili che bloccano, luci, quote Y, superfici. world.js (collider) e
// render/interiors.js (mesh) leggono gli stessi dati: impossibile che
// fisica e rendering si discordino.
//
// Vincoli storici preservati:
//  - impronte esterne identiche a mapData.js (pointInBuilding invariato);
//  - centro di b2 (12,20) resta OCCUPATO (muro portante);
//  - corridoio bar x=-20 libero (arco bar_in -> bar_out);
//  - nodi/archi WORLD esistenti invariati (nessun nodo/edge aggiunto).
export const FLOOR_H = 3.0;   // interpiano
export const UPPER_Y = 3.0;   // quota piano superiore
const EXT = 0.35;             // spessore muri perimetrali
const INT = 0.15;             // spessore tramezzi

// Rettangolo collider {minX,maxX,minZ,maxZ}. id = tag di debug.
const R = (minX, maxX, minZ, maxZ, id) => ({ minX, maxX, minZ, maxZ, id });
// Muro orizzontale (lungo X) centrato in zc, da x0 a x1, spessore t.
const WX = (x0, x1, zc, t, id) => R(x0, x1, zc - t / 2, zc + t / 2, id);
// Muro verticale (lungo Z) centrato in xc, da z0 a z1, spessore t.
const WZ = (z0, z1, xc, t, id) => R(xc - t / 2, xc + t / 2, z0, z1, id);

// Parete perimetrale con aperture (solo PORTE interrompono il collider;
// le finestre sono fori visivi col vetro, ma in 2D bloccano comunque).
// gaps: [{a0,a1}] intervalli lungo l'asse del muro.
function periSegs(x0, x1, zc, gaps, id) {
  const segs = [];
  let cur = x0;
  const sorted = [...gaps].sort((a, b) => a[0] - b[0]);
  for (const [a0, a1] of sorted) {
    if (a0 > cur) segs.push(WX(cur, a0, zc, EXT, id));
    cur = Math.max(cur, a1);
  }
  if (cur < x1) segs.push(WX(cur, x1, zc, EXT, id));
  return segs;
}
function periSegsZ(z0, z1, xc, gaps, id) {
  const segs = [];
  let cur = z0;
  const sorted = [...gaps].sort((a, b) => a[0] - b[0]);
  for (const [a0, a1] of sorted) {
    if (a0 > cur) segs.push(WZ(cur, a0, xc, EXT, id));
    cur = Math.max(cur, a1);
  }
  if (cur < z1) segs.push(WZ(cur, z1, xc, EXT, id));
  return segs;
}
// Tramezzo con aperture porte (stesso principio).
function partSegsX(x0, x1, zc, gaps, id) {
  const segs = [];
  let cur = x0;
  const sorted = [...gaps].sort((a, b) => a[0] - b[0]);
  for (const [a0, a1] of sorted) {
    if (a0 > cur) segs.push(WX(cur, a0, zc, INT, id));
    cur = Math.max(cur, a1);
  }
  if (cur < x1) segs.push(WX(cur, x1, zc, INT, id));
  return segs;
}
function partSegsZ(z0, z1, xc, gaps, id) {
  const segs = [];
  let cur = z0;
  const sorted = [...gaps].sort((a, b) => a[0] - b[0]);
  for (const [a0, a1] of sorted) {
    if (a0 > cur) segs.push(WZ(cur, a0, xc, INT, id));
    cur = Math.max(cur, a1);
  }
  if (cur < z1) segs.push(WZ(cur, z1, xc, INT, id));
  return segs;
}

// Porta: axis 'x' = su muro lungo X (anta ruota attorno a cardine verticale).
// state: 'open' | 'closed'. lockedBy: id chiave in tabella interazioni.
const DOOR = (id, x, z, axis, w, y, type, state, extra = {}) => ({
  id, x, z, axis, w, h: extra.h ?? 2.1, y: y ?? 0, type, state,
  lockedBy: extra.lockedBy ?? null,
  openAngle: extra.openAngle ?? 1.85, openMs: 650, closeMs: 800,
});
// Finestra: passable=true => da aperta e' attraversabile (varco secondario).
// fixed=true => vetro fisso non apribile (foro reale, nessuna interazione).
const WIN = (id, x, z, axis, w, y0, h, state, extra = {}) => ({
  id, x, z, axis, w, y0, h, state, passable: !!extra.passable,
  fixed: !!extra.fixed,
  peek: extra.peek ?? null,
});

// ---------------------------------------------------------------- B2 ---
// Palazzo 8x12, 2 livelli accessibili. HERO residenziale (piano terra).
const B2 = {
  id: 'b2', type: 'residential', label: 'Palazzo — appartamento modernizzato',
  x0: 8, x1: 16, z0: 14, z1: 26, floors: 2, hero: true,
  theme: 'modernized',
  rooms: [
    { id: 'b2_hall', purpose: 'stairwell', x0: 8.35, z0: 14.2, x1: 12.1, z1: 25.8, y: 0 },
    { id: 'b2_living', purpose: 'living_kitchen', x0: 12.3, z0: 14.2, x1: 15.8, z1: 19.9, y: 0 },
    { id: 'b2_bed', purpose: 'bedroom', x0: 12.3, z0: 20.1, x1: 15.8, z1: 25.8, y: 0 },
    { id: 'b2_bath', purpose: 'bathroom', x0: 13.9, z0: 22.1, x1: 15.8, z1: 25.8, y: 0 },
    { id: 'b2_loft', purpose: 'studio', x0: 12.3, z0: 14.2, x1: 15.8, z1: 25.8, y: 3 },
    { id: 'b2_bathU', purpose: 'bathroom', x0: 13.9, z0: 22.1, x1: 15.8, z1: 25.8, y: 3 },
    { id: 'b2_landU', purpose: 'landing', x0: 8.35, z0: 21.0, x1: 12.1, z1: 22.6, y: 3 },
  ],
  // Muri statici (porte ESCLUSE: i battenti chiusi li aggiunge world.js).
  walls: [
    ...periSegs(8, 16, 14, [[10.3, 11.7], [13.0, 14.0]], 'b2_s'),
    ...periSegs(8, 16, 26, [[13.0, 14.0]], 'b2_n'),
    ...periSegsZ(14, 26, 8, [], 'b2_w'),
    ...periSegsZ(14, 26, 16, [], 'b2_e'),
    ...partSegsZ(14.6, 25.825, 12.2, [[17.5, 18.5], [21.3, 22.3]], 'b2_hallE'),
    ...partSegsX(11.075, 15.825, 20, [[13.2, 14.2]], 'b2_mid'),
    ...partSegsZ(22.0, 25.825, 13.8, [], 'b2_podW'),
    ...partSegsX(13.875, 15.825, 22.0, [[14.7, 15.5]], 'b2_podS'),
    // guancia scala (condivisa piano terra/superiore) + sponda ballatoio
    WZ(15, 22.6, 9.5, INT, 'b2_stairE'),
  ],
  wallsU: [], // il loft e' open-plan: condivide i collider del piano terra
  furniture: [
    R(14.4, 15.8, 14.175, 14.975, 'b2_kitchen'),   // cucina lineare
    R(14.5, 15.3, 14.975, 15.775, 'b2_fridge'),
    R(12.35, 13.2, 15.6, 17.6, 'b2_sofa'),
    R(13.6, 14.4, 16.0, 17.2, 'b2_coffee'),
    R(15.2, 15.8, 16.1, 17.1, 'b2_tv'),
    R(14.3, 15.5, 18.0, 19.0, 'b2_dining'),
    R(12.35, 13.65, 23.5, 25.5, 'b2_bed'),
    R(12.35, 12.95, 20.5, 22.5, 'b2_ward'),
    R(14.5, 15.7, 20.3, 21.1, 'b2_desk'),
    R(13.95, 15.7, 24.9, 25.7, 'b2_tub'),
    R(13.9, 14.4, 22.2, 22.8, 'b2_wc'),
    R(15.2, 15.7, 23.3, 23.8, 'b2_sink'),
    R(13.95, 15.7, 24.9, 25.7, 'b2U_tub'),
    R(13.9, 14.4, 22.2, 22.8, 'b2U_wc'),
    R(15.2, 15.7, 23.3, 23.8, 'b2U_sink'),
    R(12.4, 14.4, 25.0, 25.8, 'b2U_kit'),
    R(12.4, 14.2, 14.5, 16.5, 'b2U_bed'),
    R(15.2, 15.8, 14.5, 16.5, 'b2U_ward'),
    R(12.4, 13.6, 24.0, 24.8, 'b2U_desk'),
    R(14.3, 15.0, 16.5, 18.5, 'b2U_sofa'),
    R(13.3, 14.1, 16.9, 18.1, 'b2U_coffee'),
    R(13.6, 14.6, 14.2, 14.6, 'b2U_shelf'),
    R(9.575, 9.725, 21.0, 22.6, 'b2_balustrade'), // sponda ballatoio/muretto hall
  ],
  stairs: [
    { id: 'b2_stair', x0: 8.35, x1: 9.425, z0: 15, z1: 21, axis: 'z', y0: 0, y1: 3 },
  ],
  slabU: [ // zone coperte dal solaio superiore (quota 3): buco sopra la rampa
    { x0: 12.275, x1: 15.825, z0: 14.175, z1: 25.825 },
    { x0: 8.35, x1: 12.2, z0: 21.0, z1: 22.6 },
  ],
  doors: [
    DOOR('door_b2_main', 11, 14, 'x', 1.4, 0, 'residential_front', 'closed'),
    DOOR('door_b2_apt', 13.5, 14, 'x', 1.0, 0, 'apartment', 'closed', { lockedBy: 'key_apt' }),
    DOOR('door_b2_rear', 13.5, 26, 'x', 1.0, 0, 'service', 'closed'),
    DOOR('door_b2_hallG', 12.2, 18.0, 'z', 1.0, 0, 'interior', 'open'),
    DOOR('door_b2_hallU', 12.2, 21.8, 'z', 1.0, 3, 'interior', 'open'),
    DOOR('door_b2_in1', 13.7, 20, 'x', 1.0, 0, 'interior', 'open'),
    DOOR('door_b2_bathG', 15.1, 22.0, 'x', 0.8, 0, 'bathroom', 'closed'),
    DOOR('door_b2_bathU', 15.1, 22.0, 'x', 0.8, 3, 'bathroom', 'closed'),
  ],
  windows: [
    WIN('win_b2_apt', 9.5, 14, 'x', 1.1, 1.0, 1.3, 'closed',
      { peek: 'Dentro: vano scala con cassette della posta.' }),
    WIN('win_b2_g2', 15.0, 14, 'x', 1.1, 1.0, 1.3, 'closed',
      { peek: 'Dentro: soggiorno con divano e televisore.' }),
    WIN('win_b2_upS', 12.5, 14, 'x', 1.1, 4.0, 1.3, 'closed', {}),
    WIN('win_b2_upN', 12.5, 26, 'x', 1.1, 4.0, 1.3, 'closed', {}),
    WIN('win_b2_w1', 8, 18, 'z', 1.1, 1.0, 1.3, 'closed', {}),
    WIN('win_b2_e1', 16, 22, 'z', 1.1, 1.0, 1.3, 'closed', {}),
    WIN('win_b2_g3', 15.2, 14, 'x', 1.1, 1.0, 1.3, 'closed', { fixed: true }),
    WIN('win_b2_upS2', 14.8, 14, 'x', 1.1, 4.0, 1.3, 'closed', { fixed: true }),
    WIN('win_b2_nG', 10.5, 26, 'x', 1.1, 1.0, 1.3, 'closed', { fixed: true }),
    WIN('win_b2_upN2', 14.8, 26, 'x', 1.1, 4.0, 1.3, 'closed', { fixed: true }),
    WIN('win_b2_w2', 8, 22, 'z', 1.1, 4.0, 1.3, 'closed', { fixed: true }),
    WIN('win_b2_e2', 16, 18, 'z', 1.1, 4.0, 1.3, 'closed', { fixed: true }),
  ],
  lights: [
    { id: 'b2_liv', x: 13.4, z: 17.2, y: 2.8, warm: 0xffd9a0 },
    { id: 'b2_bed', x: 12.4, z: 22.6, y: 2.8, warm: 0xffe2b8 },
    { id: 'b2_loft', x: 13.4, z: 19.0, y: 5.8, warm: 0xd8e4ff },
    { id: 'b2_hall', x: 9.7, z: 19.0, y: 2.8, warm: 0xffe9c4 },
  ],
};

// ---------------------------------------------------------------- B3 ---
// Casa B3 8x12: alimentari (terra, HERO commerciale) + appartamento usato (sopra).
const B3 = {
  id: 'b3', type: 'commercial', label: 'Alimentari + appartamento',
  x0: 20, x1: 28, z0: 14, z1: 26, floors: 2, hero: true,
  theme: 'shop_worn',
  rooms: [
    { id: 'b3_sales', purpose: 'sales_floor', x0: 20.2, z0: 14.2, x1: 26.4, z1: 21.4, y: 0 },
    { id: 'b3_back', purpose: 'storage', x0: 20.2, z0: 21.6, x1: 26.4, z1: 25.8, y: 0 },
    { id: 'b3_wc', purpose: 'restroom', x0: 22.1, z0: 23.1, x1: 23.9, z1: 25.8, y: 0 },
    { id: 'b3_aptU', purpose: 'living_bed', x0: 20.2, z0: 14.2, x1: 27.8, z1: 25.8, y: 3 },
    { id: 'b3_wcU', purpose: 'restroom', x0: 22.1, z0: 23.1, x1: 23.9, z1: 25.8, y: 3 },
  ],
  walls: [
    ...periSegs(20, 28, 14, [[21.4, 22.6], [23.2, 24.8]], 'b3_s'),
    ...periSegs(20, 28, 26, [[23.5, 24.5]], 'b3_n'),
    ...periSegsZ(14, 26, 20, [[23.4, 24.6]], 'b3_w'),
    ...periSegsZ(14, 26, 28, [], 'b3_e'),
    ...partSegsX(20.175, 26.45, 21.5, [[25.3, 26.3]], 'b3_mid'),
    ...partSegsZ(23.0, 25.825, 22.0, [], 'b3_podW'),
    ...partSegsX(22.0, 24.0, 23.0, [[22.5, 23.3]], 'b3_podS'),
    ...partSegsZ(23.0, 25.825, 24.0, [], 'b3_podE'),
    WZ(15, 22.6, 26.525, INT, 'b3_stairW'),
  ],
  wallsU: [],
  furniture: [
    R(20.3, 20.9, 15.0, 18.5, 'b3_shelfW'),
    R(25.3, 25.9, 15.5, 18.5, 'b3_shelfE'),
    R(22.5, 23.5, 16.5, 18.5, 'b3_gondola'),
    R(23.0, 25.0, 19.5, 20.3, 'b3_counter'),
    R(20.3, 21.1, 19.8, 20.6, 'b3_fridge'),
    R(24.5, 26.3, 24.9, 25.7, 'b3_rack'),
    R(20.3, 21.5, 24.5, 25.5, 'b3_boxes'),
    R(24.3, 25.5, 22.3, 23.1, 'b3_prep'),
    R(22.2, 22.8, 24.8, 25.4, 'b3_wcB'),
    R(23.2, 23.8, 24.9, 25.4, 'b3_wcS'),
    // appartamento superiore (usurato, open-plan)
    R(20.5, 22.3, 14.5, 16.5, 'b3U_bed'),
    R(24.8, 25.6, 14.2, 15.0, 'b3U_ward'),
    R(22.8, 24.0, 16.5, 17.5, 'b3U_table'),
    R(20.5, 21.2, 18.5, 20.5, 'b3U_sofa'),
    R(26.0, 26.8, 14.2, 14.6, 'b3U_shelf'),
    R(27.0, 27.8, 22.8, 24.8, 'b3U_kit'),
    R(22.2, 22.8, 24.8, 25.4, 'b3U_wcB'),
    R(23.2, 23.8, 24.9, 25.4, 'b3U_wcS'),
  ],
  stairs: [
    { id: 'b3_stair', x0: 26.6, x1: 27.7, z0: 15, z1: 21, axis: 'z', y0: 0, y1: 3 },
  ],
  slabU: [
    { x0: 20.175, x1: 27.825, z0: 14.175, z1: 25.825 },
  ],
  doors: [
    DOOR('door_b3_shop', 24, 14, 'x', 1.6, 0, 'shop_glass', 'open'),
    DOOR('door_b3_back', 24, 26, 'x', 1.0, 0, 'service', 'closed', { lockedBy: 'key_b3' }),
    DOOR('door_b3_staff', 25.8, 21.5, 'x', 1.0, 0, 'staff', 'closed'),
    DOOR('door_b3_wc', 22.9, 23.0, 'x', 0.8, 0, 'bathroom', 'closed'),
    DOOR('door_b3_wcU', 22.9, 23.0, 'x', 0.8, 3, 'bathroom', 'closed'),
  ],
  windows: [
    WIN('win_b3_shop', 22.0, 14, 'x', 1.2, 0.9, 1.4, 'closed',
      { peek: 'Dentro: scaffali pieni e cassette di frutta.' }),
    WIN('win_b3_side', 20, 24.0, 'z', 1.2, 0.6, 1.2, 'closed', { passable: true,
      peek: 'Magazzino: scatoloni e scaffali. La finestra e\' bassa.' }),
    WIN('win_b3_upS', 24.0, 14, 'x', 1.1, 4.0, 1.3, 'closed', {}),
    WIN('win_b3_upN', 22.0, 26, 'x', 1.1, 4.0, 1.3, 'closed', {}),
    WIN('win_b3_disp', 26.0, 14, 'x', 1.2, 0.9, 1.4, 'closed', { fixed: true }),
    WIN('win_b3_nG', 21.5, 26, 'x', 1.1, 1.0, 1.3, 'closed', { fixed: true }),
    WIN('win_b3_eG', 28, 18, 'z', 1.1, 1.0, 1.3, 'closed', { fixed: true }),
    WIN('win_b3_eU', 28, 22, 'z', 1.1, 4.0, 1.3, 'closed', { fixed: true }),
  ],
  lights: [
    { id: 'b3_sales', x: 23.2, z: 18.0, y: 2.8, warm: 0xfff0d0 },
    { id: 'b3_back', x: 23.0, z: 23.6, y: 2.8, warm: 0xd8e0e8 },
    { id: 'b3_aptU', x: 23.6, z: 19.0, y: 5.8, warm: 0xffe2b8 },
  ],
};

// ---------------------------------------------------------------- B4 ---
// Casa B4 14x10: appartamento familiare grande (terra, HERO) + loft (sopra).
const B4 = {
  id: 'b4', type: 'residential', label: 'Casa familiare — due generazioni',
  x0: -25, x1: -11, z0: -25, z1: -15, floors: 2, hero: true,
  theme: 'older_family',
  rooms: [
    { id: 'b4_living', purpose: 'living_dining_kitchen', x0: -24.8, z0: -24.8, x1: -16.6, z1: -15.2, y: 0 },
    { id: 'b4_bed1', purpose: 'bedroom', x0: -16.4, z0: -20.1, x1: -11.2, z1: -15.2, y: 0 },
    { id: 'b4_bed2', purpose: 'bedroom', x0: -16.4, z0: -24.8, x1: -11.2, z1: -20.3, y: 0 },
    { id: 'b4_bath', purpose: 'bathroom', x0: -12.9, z0: -24.8, x1: -11.2, z1: -22.9, y: 0 },
    { id: 'b4_loft', purpose: 'studio', x0: -24.8, z0: -24.8, x1: -11.2, z1: -15.2, y: 3 },
    { id: 'b4_bathU', purpose: 'bathroom', x0: -12.9, z0: -24.8, x1: -11.2, z1: -22.9, y: 3 },
  ],
  walls: [
    ...periSegs(-25, -11, -15, [[-18.6, -17.4]], 'b4_n'),
    ...periSegs(-25, -11, -25, [[-18.5, -17.5]], 'b4_s'),
    ...periSegsZ(-25, -15, -25, [], 'b4_w'),
    ...periSegsZ(-25, -15, -11, [[-22.1, -20.9]], 'b4_e'),
    ...partSegsZ(-24.825, -15.175, -16.5, [[-22.3, -21.3], [-17.3, -16.3]], 'b4_vert'),
    ...partSegsX(-16.425, -11.175, -20.2, [[-14.2, -13.2]], 'b4_horiz'),
    ...partSegsZ(-24.825, -22.8, -13, [], 'b4_podW'),
    ...partSegsX(-13, -11.175, -22.8, [[-12.5, -11.7]], 'b4_podN'),
    WZ(-24, -16.8, -23.55, INT, 'b4_stairE'),
  ],
  wallsU: [],
  furniture: [
    R(-22.0, -20.0, -16.9, -16.2, 'b4_sofa'),
    R(-20.2, -19.4, -15.9, -15.5, 'b4_tv'),
    R(-21.7, -20.7, -18.0, -17.0, 'b4_coffee'),
    R(-17.2, -16.6, -19.0, -17.8, 'b4_shelf'),
    R(-19.5, -18.7, -17.5, -16.7, 'b4_arm'),
    R(-22.5, -21.0, -20.5, -19.3, 'b4_dining'),
    R(-24.5, -21.5, -24.8, -24.2, 'b4_kitchen'),
    R(-21.2, -20.4, -24.8, -24.0, 'b4_fridge'),
    R(-15.3, -13.5, -17.1, -15.2, 'b4_bed1'),
    R(-11.9, -11.2, -17.5, -15.5, 'b4_ward1'),
    R(-12.8, -11.4, -19.5, -18.7, 'b4_desk1'),
    R(-16.0, -14.2, -24.5, -22.5, 'b4_bed2'),
    R(-11.9, -11.2, -21.2, -20.35, 'b4_ward2'),
    R(-12.9, -12.35, -24.75, -24.05, 'b4_shower'),
    R(-11.65, -11.2, -24.7, -24.1, 'b4_wc'),
    R(-11.65, -11.2, -23.6, -23.1, 'b4_sink'),
    // loft superiore
    R(-22.0, -20.2, -16.8, -14.9, 'b4U_bed'),
    R(-16.0, -14.0, -24.7, -23.9, 'b4U_kit'),
    R(-12.9, -12.35, -24.75, -24.05, 'b4U_shower'),
    R(-11.65, -11.2, -24.7, -24.1, 'b4U_wc'),
    R(-11.65, -11.2, -23.6, -23.1, 'b4U_sink'),
    R(-20.5, -19.0, -22.0, -21.0, 'b4U_desk'),
    R(-14.5, -13.0, -17.5, -16.5, 'b4U_sofa'),
    R(-24.75, -23.95, -24.75, -24.35, 'b4U_shelf'),
  ],
  stairs: [
    { id: 'b4_stair', x0: -24.825, x1: -23.625, z0: -24, z1: -18, axis: 'z', y0: 0, y1: 3 },
  ],
  slabU: [
    { x0: -24.825, x1: -11.175, z0: -24.825, z1: -15.175 },
  ],
  doors: [
    DOOR('door_b4_main', -18, -15, 'x', 1.2, 0, 'residential_front', 'closed'),
    DOOR('door_b4_back', -18, -25, 'x', 1.0, 0, 'service', 'closed'),
    DOOR('door_b4_e2', -16.5, -21.8, 'z', 1.0, 0, 'interior', 'open'),
    DOOR('door_b4_in', -13.7, -20.2, 'x', 1.0, 0, 'interior', 'open'),
    DOOR('door_b4_bath', -12.1, -22.8, 'x', 0.8, 0, 'bathroom', 'closed'),
    DOOR('door_b4_bathU', -12.1, -22.8, 'x', 0.8, 3, 'bathroom', 'closed'),
  ],
  windows: [
    WIN('win_b4_n1', -23, -15, 'x', 1.1, 1.0, 1.3, 'closed',
      { peek: 'Dentro: soggiorno con divano e libreria.' }),
    WIN('win_b4_n2', -13, -15, 'x', 1.1, 1.0, 1.3, 'closed',
      { peek: 'Dentro: camera da letto in ordine.' }),
    WIN('win_b4_side', -11, -21.5, 'z', 1.2, 0.6, 1.2, 'closed', { passable: true,
      peek: 'Ripostiglio: scatoloni. La finestra e\' bassa, si passa.' }),
    WIN('win_b4_s1', -23, -25, 'x', 1.1, 1.0, 1.3, 'closed', {}),
    WIN('win_b4_upN', -20, -15, 'x', 1.1, 4.0, 1.3, 'closed', {}),
    WIN('win_b4_s2', -13, -25, 'x', 1.1, 1.0, 1.3, 'closed', { fixed: true }),
    WIN('win_b4_upS', -20, -25, 'x', 1.1, 4.0, 1.3, 'closed', { fixed: true }),
    WIN('win_b4_w1', -25, -20, 'z', 1.1, 1.0, 1.3, 'closed', { fixed: true }),
    WIN('win_b4_w2', -25, -17, 'z', 1.1, 4.0, 1.3, 'closed', { fixed: true }),
  ],
  lights: [
    { id: 'b4_liv', x: -20.5, z: -18.0, y: 2.8, warm: 0xffd9a0 },
    { id: 'b4_kit', x: -23.0, z: -22.5, y: 2.8, warm: 0xfff0d0 },
    { id: 'b4_bed1', x: -14.4, z: -16.5, y: 2.8, warm: 0xffe2b8 },
    { id: 'b4_loft', x: -18.0, z: -19.0, y: 5.8, warm: 0xd8e4ff },
  ],
};

// ---------------------------------------------------------------- B5 ---
// Casa B5 16x10: uffici/studio professionale (un livello).
const B5 = {
  id: 'b5', type: 'office', label: 'Studio professionale',
  x0: 2, x1: 18, z0: -25, z1: -15, floors: 1,
  theme: 'office_modern',
  rooms: [
    { id: 'b5_recept', purpose: 'reception', x0: 2.2, z0: -18.9, x1: 17.8, z1: -15.2, y: 0 },
    { id: 'b5_work', purpose: 'workspace', x0: 8.1, z0: -24.8, x1: 12.9, z1: -19.1, y: 0 },
    { id: 'b5_office', purpose: 'office', x0: 2.2, z0: -24.8, x1: 7.9, z1: -19.1, y: 0 },
    { id: 'b5_break', purpose: 'break_room', x0: 13.1, z0: -24.8, x1: 17.8, z1: -19.1, y: 0 },
    { id: 'b5_wc', purpose: 'restroom', x0: 15.6, z0: -24.8, x1: 17.8, z1: -22.9, y: 0 },
    { id: 'b5_midW', purpose: 'workspace', x0: 2.2, z0: -24.8, x1: 7.9, z1: -19.1, y: 0 },
  ],
  walls: [
    ...periSegs(2, 18, -15, [[9.3, 10.7]], 'b5_n'),
    ...periSegs(2, 18, -25, [[9.5, 10.5]], 'b5_s'),
    ...periSegsZ(-25, -15, 2, [], 'b5_w'),
    ...periSegsZ(-25, -15, 18, [], 'b5_e'),
    ...partSegsX(2.175, 17.825, -19, [[6.5, 7.5], [12.5, 13.5]], 'b5_mid'),
    ...partSegsZ(-24.825, -19.075, 8, [[-22.5, -21.5]], 'b5_offE'),
    ...partSegsZ(-24.825, -19.6, 13, [[-21.5, -20.5]], 'b5_brkW'),
    ...partSegsZ(-24.825, -22.8, 15.5, [], 'b5_podW'),
    ...partSegsX(15.5, 17.825, -22.8, [[16.0, 16.8]], 'b5_podN'),
  ],
  wallsU: [],
  furniture: [
    R(5.5, 8.0, -17.3, -16.5, 'b5_deskR'),
    R(12.5, 14.5, -17.3, -16.5, 'b5_wait'),
    R(8.5, 10.0, -21.5, -20.7, 'b5_desk1'),
    R(10.8, 12.3, -21.5, -20.7, 'b5_desk2'),
    R(8.3, 9.1, -23.8, -23.0, 'b5_cab'),
    R(11.0, 12.5, -24.5, -23.5, 'b5_boxes'),
    R(3.0, 4.6, -24.5, -23.7, 'b5_deskD'),
    R(5.0, 7.0, -23.0, -22.0, 'b5_meet'),
    R(2.2, 2.8, -22.0, -20.0, 'b5_files'),
    R(13.3, 14.6, -24.8, -24.0, 'b5_kit'),
    R(14.7, 15.35, -24.8, -24.0, 'b5_fridgeB'),
    R(13.5, 15.0, -22.5, -21.5, 'b5_tableB'),
    R(15.65, 16.25, -24.8, -24.3, 'b5_wcB'),
    R(17.2, 17.75, -24.8, -24.3, 'b5_wcS'),
    R(4.0, 6.0, -19.5, -19.15, 'b5_shelfR'),
  ],
  stairs: [],
  slabU: [],
  doors: [
    DOOR('door_b5_main', 10, -15, 'x', 1.4, 0, 'shop_glass', 'closed'),
    DOOR('door_b5_back', 10, -25, 'x', 1.0, 0, 'service', 'closed'),
    DOOR('door_b5_in1', 7.0, -19, 'x', 1.0, 0, 'office', 'open'),
    DOOR('door_b5_in2', 13.0, -19, 'x', 1.0, 0, 'office', 'open'),
    DOOR('door_b5_off', 8, -22.0, 'z', 1.0, 0, 'office', 'closed'),
    DOOR('door_b5_wc', 16.4, -22.8, 'x', 0.8, 0, 'bathroom', 'closed'),
  ],
  windows: [
    WIN('win_b5_n1', 5, -15, 'x', 1.4, 1.0, 1.3, 'closed',
      { peek: 'Dentro: reception con bancone e sedie.' }),
    WIN('win_b5_n2', 14, -15, 'x', 1.4, 1.0, 1.3, 'closed',
      { peek: 'Dentro: sala d\'attesa con tavolini.' }),
    WIN('win_b5_s1', 5, -25, 'x', 1.1, 1.0, 1.3, 'closed', {}),
    WIN('win_b5_e1', 18, -20, 'z', 1.1, 1.0, 1.3, 'closed', {}),
    WIN('win_b5_s2', 14, -25, 'x', 1.1, 1.0, 1.3, 'closed', { fixed: true }),
    WIN('win_b5_w1', 2, -20, 'z', 1.1, 1.0, 1.3, 'closed', { fixed: true }),
  ],
  lights: [
    { id: 'b5_recept', x: 10, z: -17, y: 3.0, warm: 0xe8f0ff },
    { id: 'b5_work', x: 10.5, z: -22, y: 3.0, warm: 0xfff0d0 },
    { id: 'b5_office', x: 5, z: -22, y: 3.0, warm: 0xffe2b8 },
  ],
};

// ---------------------------------------------------------------- BAR --
// Bar Centrale 16x12: sala (esistente, riorganizzata) + retro frazionato.
const BAR = {
  id: 'bar', type: 'bar', label: 'Bar Centrale',
  x0: -28, x1: -12, z0: 14, z1: 26, floors: 1, hero: false,
  theme: 'bar_warm',
  rooms: [
    { id: 'bar_sala', purpose: 'cafe_floor', x0: -27.8, z0: 14.2, x1: -12.2, z1: 23.4, y: 0 },
    { id: 'bar_office', purpose: 'back_office', x0: -27.8, z0: 23.6, x1: -20.6, z1: 25.8, y: 0 },
    { id: 'bar_store', purpose: 'storage', x0: -20.4, z0: 23.6, x1: -14.1, z1: 25.8, y: 0 },
    { id: 'bar_wc', purpose: 'restroom', x0: -13.9, z0: 24.1, x1: -12.2, z1: 25.8, y: 0 },
  ],
  walls: [
    WX(-28, -21.2, 14, EXT, 'bar_s1'),
    WX(-18.8, -12, 14, EXT, 'bar_s2'),
    ...periSegs(-28, -12, 26, [[-17.5, -16.5]], 'bar_n'),
    ...periSegsZ(14, 26, -28, [], 'bar_w'),
    ...periSegsZ(14, 26, -12, [], 'bar_e'),
    ...partSegsX(-27.8, -12.2, 23.5, [[-19.2, -18.2], [-15.2, -14.2]], 'bar_mid'),
    ...partSegsZ(23.575, 25.8, -20.5, [[24.3, 25.3]], 'bar_div'),
    ...partSegsZ(24.0, 25.8, -14.6, [], 'bar_podW'),
    ...partSegsX(-14.6, -12.2, 24.0, [[-13.3, -12.5]], 'bar_podN'),
  ],
  wallsU: [],
  furniture: [
    R(-22, -18, 22.0, 23.0, 'bar_counter'),
    R(-23.0, -22.0, 18.0, 19.0, 'bar_t1'),
    R(-21.8, -20.8, 17.5, 18.5, 'bar_t2'),
    R(-18.0, -17.0, 18.5, 19.5, 'bar_t3'),
    R(-26.0, -24.5, 24.5, 25.3, 'bar_desk'),
    R(-26.0, -23.0, 25.4, 25.8, 'bar_shelf'),
    R(-19.5, -18.0, 24.9, 25.7, 'bar_rack'),
    R(-16.5, -15.5, 25.0, 25.7, 'bar_boxes'),
    R(-15.8, -15.0, 23.7, 24.5, 'bar_fridge'),
    R(-14.45, -13.9, 25.15, 25.7, 'bar_wcB'),
    R(-12.8, -12.3, 25.15, 25.7, 'bar_wcS'),
  ],
  stairs: [],
  slabU: [],
  doors: [
    DOOR('door_bar_main', -20, 14, 'x', 2.4, 0, 'shop_glass', 'open', { h: 2.4 }),
    DOOR('door_bar_back', -17, 26, 'x', 1.0, 0, 'service', 'closed'),
    DOOR('door_bar_off', -18.7, 23.5, 'x', 1.0, 0, 'staff', 'closed'),
    DOOR('door_bar_store', -20.5, 24.8, 'z', 1.0, 0, 'staff', 'open'),
    DOOR('door_bar_wc', -12.9, 24.0, 'x', 0.8, 0, 'bathroom', 'closed'),
  ],
  windows: [
    WIN('win_bar_w', -25.5, 14, 'x', 2.2, 0.9, 1.4, 'closed',
      { peek: 'Dentro: bancone, tavolini, scaffale di bottiglie.' }),
    WIN('win_bar_e', -14.5, 14, 'x', 2.2, 0.9, 1.4, 'closed',
      { peek: 'Dentro: tavolini apparecchiati e lampade accese.' }),
  ],
  lights: [
    { id: 'barMain', x: -20, z: 18.5, y: 2.9, warm: 0xffd9a0 },
    { id: 'barBack', x: -19, z: 24.8, y: 2.9, warm: 0xd8e0e8 },
  ],
};

export const BUILDINGS = { bar: BAR, b2: B2, b3: B3, b4: B4, b5: B5 };
export const BUILDING_LIST = [BAR, B2, B3, B4, B5];

// --- accessori puri ------------------------------------------------------

export function allStaticColliders() {
  const out = [];
  for (const b of BUILDING_LIST) {
    for (const w of b.walls) out.push({ ...w, tall: true, high: true });
    for (const w of b.wallsU) out.push({ ...w, tall: true, high: true });
    for (const f of b.furniture) {
      const low = f.id.includes('coffee') || f.id.includes('tableB') || f.id.includes('dining');
      out.push({ ...f, tall: !low, high: false });
    }
  }
  return out;
}

export function allDoors() {
  const out = [];
  for (const b of BUILDING_LIST) for (const d of b.doors) out.push({ ...d, building: b.id });
  return out;
}

export function allWindows() {
  const out = [];
  for (const b of BUILDING_LIST) for (const w of b.windows) out.push({ ...w, building: b.id });
  return out;
}

// Rettangolo di ostruzione di un battente CHIUSO (sottile, nel vano).
export function doorLeafRect(d) {
  const t = 0.3;
  if (d.axis === 'x') return { minX: d.x - d.w / 2, maxX: d.x + d.w / 2, minZ: d.z - t / 2, maxZ: d.z + t / 2 };
  return { minX: d.x - t / 2, maxX: d.x + t / 2, minZ: d.z - d.w / 2, maxZ: d.z + d.w / 2 };
}

// Quota calpestabile: rampe scale interpolano, piano sup. a 3m (isteresi su curY).
export function groundYAt(x, z, curY = 0) {
  for (const b of BUILDING_LIST) {
    if (x < b.x0 || x > b.x1 || z < b.z0 || z > b.z1) continue;
    for (const s of b.stairs) {
      if (x >= s.x0 && x <= s.x1 && z >= s.z0 && z <= s.z1) {
        const t = s.axis === 'z' ? (z - s.z0) / (s.z1 - s.z0) : (x - s.x0) / (s.x1 - s.x0);
        return s.y0 + Math.max(0, Math.min(1, t)) * (s.y1 - s.y0);
      }
    }
    if (b.floors > 1 && curY > 1.5) {
      for (const s of b.slabU) {
        if (x >= s.x0 && x <= s.x1 && z >= s.z0 && z <= s.z1) return UPPER_Y;
      }
      // sopra le scale ma fuori solaio: resta in quota (vuoto scala protetto)
      return curY;
    }
    return 0;
  }
  return 0;
}

export function buildingAt(x, z) {
  for (const b of BUILDING_LIST) {
    if (x >= b.x0 && x <= b.x1 && z >= b.z0 && z <= b.z1) return b.id;
  }
  return null;
}

// Superficie di calpestio (hook audio passi + storytelling).
export function surfaceAt(x, z, y = 0) {
  const bId = buildingAt(x, z);
  if (!bId) return 'asphalt';
  const b = BUILDINGS[bId];
  for (const r of b.rooms) {
    if (x >= r.x0 && x <= r.x1 && z >= r.z0 && z <= r.z1 && Math.abs((r.y ?? 0) - y) < 1.6) {
      if (r.purpose === 'bathroom' || r.purpose === 'restroom') return 'tile';
      if (r.purpose === 'storage' || r.purpose === 'back_office') return 'concrete';
      if (r.purpose === 'sales_floor' || r.purpose === 'cafe_floor') return 'tile';
      return 'wood';
    }
  }
  return 'wood';
}

// Aperture di facciata per i gusci (porte al piano terra + finestre).
// Le porte interne (non perimetrali) sono escluse.
export function facadeOpenings(b) {
  const o = { S: [], N: [], W: [], E: [] };
  for (const d of b.doors) {
    if ((d.y ?? 0) !== 0) continue;
    const e = { c0: 0, c1: 0, y0: 0, y1: d.h, kind: 'door', id: d.id };
    if (d.axis === 'x') {
      if (Math.abs(d.z - b.z0) > 0.6 && Math.abs(d.z - b.z1) > 0.6) continue;
      e.c0 = d.x - d.w / 2; e.c1 = d.x + d.w / 2;
      (Math.abs(d.z - b.z0) < Math.abs(d.z - b.z1) ? o.S : o.N).push(e);
    } else {
      if (Math.abs(d.x - b.x0) > 0.6 && Math.abs(d.x - b.x1) > 0.6) continue;
      e.c0 = d.z - d.w / 2; e.c1 = d.z + d.w / 2;
      (Math.abs(d.x - b.x0) < Math.abs(d.x - b.x1) ? o.W : o.E).push(e);
    }
  }
  for (const w of b.windows) {
    const e = { c0: 0, c1: 0, y0: w.y0, y1: w.y0 + w.h, kind: 'win', id: w.id };
    if (w.axis === 'x') {
      e.c0 = w.x - w.w / 2; e.c1 = w.x + w.w / 2;
      (Math.abs(w.z - b.z0) < Math.abs(w.z - b.z1) ? o.S : o.N).push(e);
    } else {
      e.c0 = w.z - w.w / 2; e.c1 = w.z + w.w / 2;
      (Math.abs(w.x - b.x0) < Math.abs(w.x - b.x1) ? o.W : o.E).push(e);
    }
  }
  for (const k of ['S', 'N', 'W', 'E']) o[k].sort((a, b2) => a.c0 - b2.c0);
  return o;
}
export function debugInfo(doorStates = {}) {
  return BUILDING_LIST.map(b => {
    const doors = b.doors.map(d => ({
      id: d.id, state: doorStates[d.id] ?? d.state,
      lock: d.lockedBy ? 'locked-expect-key' : 'free',
      collider: (doorStates[d.id] ?? d.state) === 'closed' ? 'blocking' : 'free',
    }));
    return {
      id: b.id, type: b.type, floors: b.floors, hero: !!b.hero,
      rooms: b.rooms.length, entrances: b.doors.filter(d => d.y === 0 && (d.type.includes('front') || d.type.includes('shop') || d.type.includes('service'))).length,
      exits: b.doors.length,
      windows: b.windows.length,
      interactiveDoors: doors.filter(d => d.state !== 'arch').length,
      doors,
    };
  });
}
