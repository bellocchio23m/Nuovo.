// S9 — registro del nuovo quartiere (PURO: niente three.js/DOM, usabile headless).
// Espande l'area giocabile da 100x100 a 150x150 (~2.25x superficie) con nuovi
// isolati, strade, micro-zone, POI e 2 interni leggeri (market/officina) a muri
// con vani reali. Integrazione a somma-zero con S2/S6/S7/S8:
//  - edifici S9 solidi (interior:false) -> collider automatici da world.js,
//    nessuna modifica a world.js/buildings.js;
//  - muri con vani (market/officina) -> coverWalls a strisce con gap reali;
//  - porte S9 -> ostacoli dinamici via doorObstacle (game.js), come S7;
//  - nodi/archi aggiunti, MAI modificati quelli esistenti (contratto S5 intatto).
// Tutto deterministico: costanti scritte a mano, nessuno Math.random.

export const S9_SIZE = 150;
export const S9_SEED = 9001;

function mulberry(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s |= 0; s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---------------------------------------------------------------- edifici ---
// x,z = centro; w,d = impronta; h = altezza; facade: plaster|brick|stone|
// cement|tile; maint: new|kept|old|worn|renewed (stato manutenzione).
// market/workshop NON sono qui: sono muri con vani in S9_COVER_WALLS.
export const S9_BUILDINGS = [
  // ZONA A — commerciale est
  { id: 's9_pharma', name: 'Farmacia', x: 42, z: -12, w: 8, d: 8, h: 4.5, facade: 'plaster', variant: 1, zone: 'commercial', maint: 'renewed' },
  { id: 's9_resto', name: 'Ristorante', x: 63, z: -24, w: 10, d: 8, h: 4.5, facade: 'brick', variant: 1, zone: 'commercial', maint: 'kept' },
  { id: 's9_shoprow', name: 'Negozi e uffici', x: 61, z: 33, w: 10, d: 10, h: 7, facade: 'plaster', variant: 3, zone: 'commercial', maint: 'new' },
  // ZONA B — residenziale sud
  { id: 's9_res1', name: 'Condominio (3 piani)', x: 15, z: -48, w: 12, d: 10, h: 9, facade: 'plaster', variant: 0, zone: 'residential', maint: 'kept' },
  { id: 's9_res2', name: 'Palazzina con balconi', x: 32, z: -47.5, w: 10, d: 9, h: 6, facade: 'brick', variant: 2, zone: 'residential', maint: 'kept' },
  { id: 's9_res3', name: 'Casa a schiera', x: -10, z: -50, w: 8, d: 8, h: 6, facade: 'stone', variant: 1, zone: 'residential', maint: 'old' },
  { id: 's9_res4', name: 'Torre residenziale', x: -25, z: -50, w: 12, d: 10, h: 12, facade: 'cement', variant: 0, zone: 'residential', maint: 'new' },
  { id: 's9_res5', name: 'Residenza con corte', x: 61, z: 62, w: 10, d: 12, h: 9, facade: 'plaster', variant: 4, zone: 'residential', maint: 'new' },
  // uffici nord
  { id: 's9_off1', name: 'Uffici (3 piani)', x: -8, z: 48.5, w: 12, d: 9, h: 9, facade: 'cement', variant: 1, zone: 'office', maint: 'new' },
  { id: 's9_off2', name: 'Studio professionale', x: 8, z: 50, w: 8, d: 8, h: 6, facade: 'plaster', variant: 2, zone: 'office', maint: 'kept' },
  { id: 's9_off3', name: 'Uffici del mercato', x: 42, z: 47, w: 8, d: 10, h: 8, facade: 'brick', variant: 0, zone: 'office', maint: 'renewed' },
  // grandi
  { id: 's9_super', name: 'Piccolo supermercato', x: 15, z: -64, w: 18, d: 12, h: 6, facade: 'cement', variant: 2, zone: 'commercial', maint: 'new' },
  { id: 's9_palazzo', name: 'Palazzo del Sole', x: -25, z: 64, w: 18, d: 12, h: 12, facade: 'plaster', variant: 3, zone: 'residential', maint: 'renewed' },
  // ZONA C — borgo antico (irregolari, pietra/mattone)
  { id: 's9_old1', name: 'Casa in pietra', x: -51.5, z: 44, w: 9, d: 8, h: 5, facade: 'stone', variant: 0, zone: 'oldtown', maint: 'old' },
  { id: 's9_old2', name: 'Casa in mattoni', x: -62.5, z: 44.5, w: 7, d: 9, h: 6, facade: 'brick', variant: 2, zone: 'oldtown', maint: 'worn' },
  { id: 's9_old3', name: 'Casa del vicolo', x: -44, z: 57.5, w: 8, d: 7, h: 5, facade: 'stone', variant: 2, zone: 'oldtown', maint: 'worn' },
  { id: 's9_old4', name: 'Casa con arco', x: -57, z: 60, w: 10, d: 8, h: 7, facade: 'plaster', variant: 4, zone: 'oldtown', maint: 'old' },
  // ZONA D — servizio ovest (+ tecnico sud)
  { id: 's9_depot', name: 'Deposito', x: -60, z: -14, w: 12, d: 12, h: 6, facade: 'cement', variant: 2, zone: 'service', maint: 'worn' },
  { id: 's9_tech', name: 'Locale tecnico', x: -52, z: -58, w: 8, d: 6, h: 4, facade: 'cement', variant: 0, zone: 'service', maint: 'kept' },
  // speciale: chiosco in piazza (piccolo, ma con funzione leggibile)
  { id: 's9_kiosk', name: 'Chiosco', x: 63.5, z: -42.5, w: 3, d: 3, h: 3.5, facade: 'tile', variant: 0, zone: 'public', maint: 'kept' },
];

// Muri S9 come strisce {x,z,w,d} (centro+dimensioni, come coverWalls):
// market 56..70 x 6..16 (vano ovest z 9.8..12.2, porta nord x 64..65),
// officina -63..-49 x -41..-31 (vano est z -37..-34, porta nord x -57..-56),
// recinzione deposito con cancello, muretti borgo, arco del vicolo.
const T = 0.35; // spessore muri
export const S9_COVER_WALLS = [
  // --- market (HERO commerciale leggero, ingresso ad arco sempre aperto) ---
  { x: 63, z: 6, w: 14, d: T, s9: 'mkt_s' },
  { x: 60, z: 16, w: 8, d: T, s9: 'mkt_n1' },
  { x: 67.5, z: 16, w: 5, d: T, s9: 'mkt_n2' },
  { x: 56, z: 7.9, w: T, d: 3.8, s9: 'mkt_w1' },
  { x: 56, z: 14.1, w: T, d: 3.8, s9: 'mkt_w2' },
  { x: 70, z: 11, w: T, d: 10, s9: 'mkt_e' },
  // scaffali interni alti (bloccano vista, come scaffali veri)
  { x: 63, z: 9.05, w: 6, d: 0.5, s9: 'mkt_sh1' },
  { x: 63, z: 13.95, w: 6, d: 0.5, s9: 'mkt_sh2' },
  { x: 68.2, z: 11, w: 0.6, d: 2, s9: 'mkt_cnt' },
  // --- officina (portone est sempre aperto, porta nord chiusa) ---
  { x: -56, z: -48, w: 14, d: T, s9: 'wrk_s' },
  { x: -60, z: -38, w: 6, d: T, s9: 'wrk_n1' },
  { x: -52.5, z: -38, w: 7, d: T, s9: 'wrk_n2' },
  { x: -63, z: -43, w: T, d: 10, s9: 'wrk_w' },
  { x: -49, z: -46, w: T, d: 4, s9: 'wrk_e1' },
  { x: -49, z: -39.5, w: T, d: 3, s9: 'wrk_e2' },
  // bancone e rastrelliera interni
  { x: -58.5, z: -44.5, w: 3, d: 1, s9: 'wrk_bench' },
  { x: -51, z: -45.6, w: 2, d: 0.8, s9: 'wrk_rack' },
  // --- recinzione deposito con cancello (varco z -16..-14) ---
  { x: -52, z: -18, w: 0.3, d: 4, s9: 'dep_f1' },
  { x: -52, z: -11, w: 0.3, d: 6, s9: 'dep_f2' },
  // --- muretti bassi borgo (delimitano senza chiudere i passaggi) ---
  { x: -51.5, z: 52.5, w: 6, d: 0.3, s9: 'old_w1' },
  { x: -60, z: 52.5, w: 0.3, d: 5, s9: 'old_w2' },
  // --- arco del vicolo: due pilastri (il passaggio resta libero) ---
  { x: -59.5, z: 44, w: 1, d: 1, s9: 'arch_p1' },
  { x: -55.5, z: 44, w: 1, d: 1, s9: 'arch_p2' },
  // --- muretto parcheggio residenziale sud ---
  { x: -12, z: -40.5, w: 16, d: 0.3, s9: 'pk_w' },
];

// ------------------------------------------------------------------- props ---
// kind riusano i collider di world.js (lamp/tree/crates/yardstack/bench).
// kind visual-only (nessun collider): planter, bike, table, sign, bollard,
// bush, car, van, sack, barrel, pallet, line (bucato), umbrella, poster.
export const S9_PROPS = [
  // --- collider reali (pochi, mai sui nodi) ---
  { kind: 'lamp', x: 47.8, z: 8 }, { kind: 'lamp', x: 52.2, z: -20 },
  { kind: 'lamp', x: 64, z: -32 }, { kind: 'lamp', x: 62, z: -44 },
  { kind: 'lamp', x: -37.2, z: -28 }, { kind: 'lamp', x: -32.8, z: -44 },
  { kind: 'lamp', x: 8, z: -30.8 }, { kind: 'lamp', x: -8, z: -30.8 },
  { kind: 'lamp', x: 3, z: 44 }, { kind: 'lamp', x: -50, z: 54 },
  { kind: 'lamp', x: 58, z: 54.5 }, { kind: 'lamp', x: 73, z: 6 },
  { kind: 'tree', x: 58, z: -36 }, { kind: 'tree', x: 69, z: -42 },
  { kind: 'tree', x: 60, z: -33 },
  { kind: 'tree', x: 22, z: -59 }, { kind: 'tree', x: -18, z: -48 },
  { kind: 'tree', x: 36, z: 44 }, { kind: 'tree', x: -4, z: 58 },
  { kind: 'tree', x: -46, z: 53 },
  { kind: 'bench', x: 60, z: -33.5 }, { kind: 'bench', x: 68, z: -39 },
  { kind: 'bench', x: -50, z: 52.5 },
  { kind: 'crates', x: 57.5, z: 17.5 }, { kind: 'crates', x: -47, z: -33 },
  { kind: 'yardstack', x: -58, z: -5 }, { kind: 'yardstack', x: 32, z: -60 },
  // --- visual-only: storytelling con una ragione ---
  { kind: 'planter', x: 42, z: -7.4 }, { kind: 'planter', x: 63, z: -19.4 },
  { kind: 'planter', x: 15, z: -42.4 }, { kind: 'planter', x: -25, z: -44.4 },
  { kind: 'bike', x: -57.5, z: 47.5 }, // abbandonata nel vicolo nascosto
  { kind: 'bike', x: 52.5, z: -30 },
  { kind: 'table', x: 71, z: -24 }, { kind: 'table', x: 71, z: -21 }, // dehors ristorante
  { kind: 'umbrella', x: 71, z: -24 }, { kind: 'umbrella', x: 71, z: -21 },
  { kind: 'table', x: -20, z: 44 }, // tavolini uffici nord
  { kind: 'sack', x: 66, z: 17 }, { kind: 'sack', x: -62, z: -24 },
  { kind: 'barrel', x: -55, z: -28 }, { kind: 'barrel', x: -63, z: -22 },
  { kind: 'pallet', x: 20, z: -57 }, { kind: 'pallet', x: 8, z: -57 }, // cantiere market
  { kind: 'line', x: 24, z: -45 }, // bucato corte residenziale
  { kind: 'line', x: -52, z: 53 }, // bucato borgo
  { kind: 'sign', x: 53.2, z: 30 }, { kind: 'sign', x: -47.5, z: -29.5 },
  { kind: 'bollard', x: 56, z: -32.5 }, { kind: 'bollard', x: 60, z: -32.5 },
  { kind: 'bollard', x: 64, z: -32.5 }, { kind: 'bollard', x: 68, z: -32.5 },
  { kind: 'poster', x: -47, z: 44.2 }, { kind: 'poster', x: -61, z: 40.0 },
  { kind: 'bush', x: 56, z: -44 }, { kind: 'bush', x: 70, z: -34 },
  { kind: 'bush', x: -46, z: 50 }, { kind: 'bush', x: 36, z: 42 },
  // --- veicoli visual-only (i 3 interattivi S7 restano gli unici armeggiabili
  //     oltre al furgone S9): forme/colori/orientamenti vari, mai in griglia ---
  { kind: 'car', x: -12, z: -38.5, ry: 1.62, color: 0x7a2a3a },
  { kind: 'car', x: -4, z: -38.3, ry: 1.55, color: 0x3a5a7a },
  { kind: 'car', x: 4, z: -38.6, ry: 1.66, color: 0x5a5e64 },
  { kind: 'car', x: 28, z: -31.5, ry: -1.58, color: 0x2a6a4a },
  { kind: 'car', x: 55, z: -2.5, ry: 1.57, color: 0xc8a03a },
  { kind: 'car', x: 62, z: 2.5, ry: -1.57, color: 0x6a3a7a },
  { kind: 'car', x: -37, z: 8, ry: 0.15, color: 0x4a4e54 },
  { kind: 'van', x: -60, z: -27, ry: 0.3, color: 0xd8d4c8 }, // furgone officina (interattivo)
  { kind: 'van', x: 44, z: -33.5, ry: -0.08, color: 0x8a949c },
];

// ---------------------------------------------------------- nodi e archi ---
// Solo AGGIUNTE: nessun nodo/arco esistente toccato.
export const S9_NODES = {
  s9_roadE1: { x: 58, z: 0 }, s9_roadE2: { x: 70, z: 0 },
  s9_farE: { x: 73, z: 24 },
  s9_mercN: { x: 50, z: 22 }, s9_mercC: { x: 50, z: 0 }, s9_mercS: { x: 50, z: -34 },
  s9_mktW: { x: 54.5, z: 11 }, s9_mktIn: { x: 63, z: 11 },
  s9_rest: { x: 52, z: -26 },
  s9_pia2c: { x: 66, z: -36 }, s9_pia2w: { x: 56.5, z: -39 },
  s9_shopE: { x: 54, z: 33 },
  s9_northE: { x: 40, z: 36 }, s9_northC: { x: 1, z: 40 },
  s9_offLane: { x: 1, z: 48 }, s9_laneN: { x: 1, z: 55 },
  s9_offW: { x: 50, z: 47 },
  s9_sudW: { x: -42, z: -33 }, s9_sudC: { x: 0, z: -33 }, s9_sudE: { x: 30, z: -33 },
  s9_courtN: { x: 24, z: -40 }, s9_resCourt: { x: 24, z: -48 },
  s9_southLane: { x: 24, z: -56.5 }, s9_superN: { x: 15, z: -56.5 },
  s9_culdesac: { x: 28, z: -60 },
  s9_vecS: { x: -35, z: -50 }, s9_vecC: { x: -35, z: -20 },
  s9_vecN: { x: -35, z: 30 }, s9_offS: { x: -35, z: -33 },
  s9_yard: { x: -61, z: -24 },
  s9_workE: { x: -47, z: -42.5 }, s9_workIn: { x: -56, z: -43 },
  s9_techE: { x: -46, z: -58 }, s9_depotS: { x: -57, z: -22 },
  s9_alleyS: { x: -57.5, z: 37 }, s9_alleyOld: { x: -57.5, z: 50 },
  s9_courtOld: { x: -50, z: 51 }, s9_palazzoS: { x: -25, z: 55 },
  s9_eastS: { x: 69, z: 40 }, s9_eastN: { x: 69, z: 56 },
  s9_res5n: { x: 61, z: 54 },
};

export const S9_EDGES = [
  ['road_e', 's9_mercC'], ['road_e', 's9_roadE1'], ['s9_mercC', 's9_roadE1'],
  ['s9_mercC', 's9_mercN'], ['s9_mercN', 's9_offW'], ['s9_mercN', 's9_shopE'],
  ['s9_mercC', 's9_mercS'], ['s9_mercS', 's9_pia2w'], ['s9_mercS', 's9_pia2c'],
  ['s9_mercS', 's9_rest'], ['s9_mercS', 's9_sudE'],
  ['s9_pia2w', 's9_pia2c'], ['s9_rest', 's9_pia2c'], ['s9_rest', 's9_pia2w'],
  ['s9_roadE1', 's9_roadE2'], ['s9_roadE1', 's9_rest'],
  ['s9_roadE2', 's9_farE'], ['s9_farE', 's9_eastS'],
  ['s9_eastS', 's9_eastN'], ['s9_eastN', 's9_res5n'],
  ['s9_shopE', 's9_northE'], ['s9_northE', 's9_mercN'],
  ['s9_northE', 'north_e'], ['pia_e', 's9_northE'],
  ['s9_northC', 's9_northE'], ['s9_northC', 's9_vecN'], ['s9_northC', 's9_offLane'],
  ['s9_offLane', 's9_laneN'], ['s9_laneN', 's9_palazzoS'],
  ['s9_palazzoS', 's9_courtOld'],
  ['s9_courtOld', 's9_alleyOld'], ['s9_alleyOld', 's9_alleyS'],
  ['s9_alleyS', 's9_vecN'], ['s9_alleyS', 's9_vecS'], ['north_w', 's9_alleyS'],
  ['court', 's9_vecN'],
  ['sq_s', 's9_sudC'], ['s9_sudC', 's9_sudE'], ['s9_sudC', 's9_offS'],
  ['s9_sudW', 's9_offS'], ['s9_sudW', 's9_sudC'], ['s9_sudW', 's9_vecS'],
  ['s9_offS', 's9_vecC'], ['s9_offS', 's9_vecS'], ['s9_vecC', 's9_vecS'],
  ['s9_offS', 's9_workE'], ['s9_workE', 's9_workIn'],
  ['road_w', 's9_vecC'],
  ['s9_vecC', 's9_vecN'], ['s9_vecC', 's9_yard'], ['s9_vecC', 's9_depotS'],
  ['s9_yard', 's9_depotS'],
  ['s9_vecS', 's9_techE'], ['s9_offS', 's9_yard'],
  ['s9_sudE', 's9_courtN'], ['s9_courtN', 's9_resCourt'],
  ['s9_resCourt', 's9_southLane'], ['s9_southLane', 's9_superN'],
  ['s9_southLane', 's9_culdesac'],
  ['s9_mktW', 's9_mktIn'],
  ['s9_mercN', 's9_mktW'],
];

// ------------------------------------------------------------------ zone ---
// Semantica per la futura simulazione sociale (S10/S11): kind tra
// COMMERCIAL RESIDENTIAL OLD_TOWN SERVICE PUBLIC OFFICE TRANSITION.
export const S9_ZONES = [
  { id: 'commerciale', label: 'Centro commerciale', kind: 'COMMERCIAL', x0: 36, x1: 72, z0: -30, z1: 40 },
  { id: 'residenziale', label: 'Residenze sud', kind: 'RESIDENTIAL', x0: -35, x1: 40, z0: -72, z1: -30 },
  { id: 'borgo', label: 'Vecchio quartiere', kind: 'OLD_TOWN', x0: -70, x1: -38, z0: 38, z1: 70 },
  { id: 'servizio', label: 'Area di servizio', kind: 'SERVICE', x0: -70, x1: -30, z0: -62, z1: -6 },
  { id: 'piazza2', label: 'Piazza delle Erbe', kind: 'PUBLIC', x0: 55, x1: 71, z0: -46, z1: -32 },
  { id: 'uffici', label: 'Uffici nord', kind: 'OFFICE', x0: -16, x1: 14, z0: 40, z1: 58 },
  { id: 'periferia', label: 'Periferia', kind: 'TRANSITION', x0: -75, x1: 75, z0: 58, z1: 75 },
];

export function zoneAt(x, z) {
  // ultima zona che contiene il punto vince (periferia inclusa come fallback)
  let found = null;
  for (const zn of S9_ZONES) {
    if (x >= zn.x0 && x <= zn.x1 && z >= zn.z0 && z <= zn.z1) found = zn;
  }
  return found;
}

// -------------------------------------------------------------------- POI ---
// kind tra SHOP BAR RESTAURANT OFFICE HOME WORKSHOP WAREHOUSE PARK PLAZA (+ALLEY).
export const S9_POIS = [
  { id: 's9_poi_market', label: 'Piccolo market', kind: 'SHOP', x: 63, z: 11 },
  { id: 's9_poi_pharma', label: 'Farmacia', kind: 'SHOP', x: 42, z: -12 },
  { id: 's9_poi_resto', label: 'Ristorante', kind: 'RESTAURANT', x: 56, z: -26 },
  { id: 's9_poi_kiosk', label: 'Chiosco', kind: 'BAR', x: 63.5, z: -42.5 },
  { id: 's9_poi_office', label: 'Uffici del mercato', kind: 'OFFICE', x: 42, z: 47 },
  { id: 's9_poi_work', label: 'Officina', kind: 'WORKSHOP', x: -56, z: -43 },
  { id: 's9_poi_tech', label: 'Locale tecnico', kind: 'WORKSHOP', x: -52, z: -58 },
  { id: 's9_poi_depot', label: 'Deposito', kind: 'WAREHOUSE', x: -53, z: -15 },
  { id: 's9_poi_palazzo', label: 'Palazzo del Sole', kind: 'HOME', x: -25, z: 64 },
  { id: 's9_poi_court', label: 'Cortile del borgo', kind: 'PARK', x: -50, z: 51 },
  { id: 's9_poi_garden', label: 'Giardino sud', kind: 'PARK', x: 28, z: -56 },
  { id: 's9_poi_piazza', label: 'Piazza delle Erbe', kind: 'PLAZA', x: 66, z: -36 },
  { id: 's9_poi_alley', label: 'Vicolo nascosto', kind: 'ALLEY', x: -57.5, z: 44 },
  { id: 's9_poi_park', label: 'Parcheggio sud', kind: 'PLAZA', x: -8, z: -38.5 },
];

// ------------------------------------------------------------------ strade ---
// Corridoi carrabili/pedonali (rendering + garanzia di spazio libero).
export const S9_ROADS = [
  { id: 'mainE', x0: 50, x1: 75, z0: -4, z1: 4, kind: 'main' },
  { id: 'mainW', x0: -75, x1: -50, z0: -4, z1: 4, kind: 'main' },
  { id: 'mercato', x0: 47, x1: 53, z0: -70, z1: 60, kind: 'secondary' },
  { id: 'sud', x0: -60, x1: 65, z0: -36, z1: -30, kind: 'secondary' },
  { id: 'vecchia', x0: -38, x1: -32, z0: -60, z1: 45, kind: 'secondary' },
  { id: 'residenze', x0: -2, x1: 4, z0: -70, z1: -26, kind: 'secondary' },
  { id: 'vicolo', x0: -59, x1: -56, z0: 36, z1: 50, kind: 'alley' },
  { id: 'piazza2', x0: 55, x1: 71, z0: -46, z1: -32, kind: 'plaza' },
  { id: 'corte', x0: -56, x1: -48, z0: 48, z1: 54, kind: 'court' },
  { id: 'passoRes', x0: 21, x1: 27, z0: -56, z1: -36, kind: 'alley' },
  { id: 'sagrato', x0: 68, x1: 74, z0: -28, z1: -18, kind: 'court' },
];

// ------------------------------------------------------- interazioni S9 ---
// Solo aggiunte (id univoci s9_*). Porte standard <=1.4m: doorObstacle copre.
const D = (id, kind, action, x, z, label, extra = {}) => ({
  id, kind, action, x, z, radius: extra.radius ?? 2.8, label,
  state: extra.state ?? 'closed', lockedBy: extra.lockedBy ?? null,
  loot: extra.loot ?? null, vehicle: extra.vehicle ?? null,
  panel: extra.panel ?? null, light: extra.light ?? null,
  peek: extra.peek ?? null, y: extra.y ?? 0,
});
export const S9_INTERACT = {
  doors: [
    D('door_s9_mkt_back', 'door', 'OPEN', 64.5, 16.4, 'Retro del market', {}),
    D('door_s9_wrk_north', 'door', 'OPEN', -56.5, -37.6, 'Porta officina', {}),
  ],
  windows: [],
  containers: [
    D('cont_s9_mkt', 'container', 'SEARCH', 63, 14.6, 'Scaffale market', { loot: 'doc_s9_mkt' }),
    D('cont_s9_wrk', 'container', 'OPEN', -58.5, -44.2, 'Cassetta attrezzi', { loot: 'tool_s9_wrk' }),
  ],
  pickups: [
    D('key_s9_mkt', 'pickup', 'TAKE', 63.5, -40.2, 'Chiave (retro market)', { state: 'present' }),
    D('doc_s9_mkt', 'pickup', 'TAKE', 63, 15.2, 'Bolla di consegna', { state: 'hidden' }),
    D('tool_s9_wrk', 'pickup', 'TAKE', -58.5, -43.6, 'Chiave a brugola', { state: 'hidden' }),
  ],
  lights: [
    D('lamp_s9_pia2a', 'light', 'TOGGLE', 64, -32, 'Lampione (piazza)', { state: 'on', light: 'lampS9a' }),
    D('lamp_s9_pia2b', 'light', 'TOGGLE', 62, -44, 'Lampione (piazza)', { state: 'on', light: 'lampS9b' }),
    D('sw_s9_mkt', 'light', 'TOGGLE', 60, 10.4, 'Interruttore (market)', { state: 'on', light: 's9mkt' }),
    D('sw_s9_wrk', 'light', 'TOGGLE', -52, -39, 'Interruttore (officina)', { state: 'on', light: 's9wrk' }),
  ],
  furniture: [
    D('sit_s9_pia2a', 'furniture', 'SIT', 60, -33.5, 'Panchina', { state: 'free', radius: 2.2 }),
    D('sit_s9_pia2b', 'furniture', 'SIT', 68, -39, 'Panchina', { state: 'free', radius: 2.2 }),
  ],
  devices: [
    D('dev_s9_phone', 'device', 'USE', 53.5, 8, 'Telefono pubblico', { state: 'idle', radius: 2.2 }),
  ],
  street: [
    D('fountain_s9', 'street', 'DRINK', 64, -37.5, 'Fontanella', { state: 'idle', radius: 2.2 }),
  ],
  vehicles: [
    D('van_s9_door', 'vehicle', 'OPEN', -60, -25.6, 'Sportello furgone', { vehicle: 'vanS9', panel: 'door' }),
    D('van_s9_trunk', 'vehicle', 'OPEN', -60, -28.6, 'Vano di carico', { vehicle: 'vanS9', panel: 'trunk', loot: 'tool_s9_van' }),
    D('tool_s9_van', 'pickup', 'TAKE', -60, -29.2, 'Cric', { state: 'hidden' }),
  ],
};

// ------------------------------------------------------------- vegetazione ---
// Generata deterministicamente (seed fisso): stessi alberi a ogni avvio.
export function s9Vegetation() {
  const r = mulberry(S9_SEED);
  const trees = [];
  const spots = [
    [62, -33, 5], [66, -43, 4], [-50, 53, 3], [18, -60, 5],
    [-20, -46, 4], [38, 46, 4], [-2, 60, 5], [70, 48, 4],
    [-68, -30, 3], [30, -58, 3], [56, 50, 3], [-44, -52, 3],
  ];
  for (const [cx, cz, n] of spots) {
    for (let i = 0; i < n; i++) {
      trees.push({
        x: +(cx + (r() - 0.5) * 8).toFixed(2),
        z: +(cz + (r() - 0.5) * 8).toFixed(2),
        s: +(0.8 + r() * 0.5).toFixed(2),
        v: Math.floor(r() * 3),
      });
    }
  }
  return trees;
}

// Nomi leggibili dei nuovi luoghi (solo UI; la sim usa gli id).
export const S9_PLACE_IT = {
  s9_roadE1: 'via principale est', s9_roadE2: 'fondo via principale',
  s9_farE: 'viale est',
  s9_mercN: 'via del mercato nord', s9_mercC: 'incrocio del mercato',
  s9_mercS: 'via del mercato sud',
  s9_mktW: 'fuori dal market', s9_mktIn: 'market (interno)',
  s9_rest: 'fuori dal ristorante',
  s9_pia2c: 'piazza delle Erbe', s9_pia2w: 'piazza ovest',
  s9_shopE: 'fuori dai negozi',
  s9_northE: 'viale nord-est', s9_northC: 'viale nord',
  s9_offLane: 'passaggio uffici', s9_laneN: 'passaggio nord',
  s9_offW: 'fuori dagli uffici',
  s9_sudW: 'via sud ovest', s9_sudC: 'via sud', s9_sudE: 'via sud est',
  s9_courtN: 'passaggio residenze', s9_resCourt: 'corte residenziale',
  s9_southLane: 'vialetto sud', s9_superN: 'fuori dal supermercato',
  s9_culdesac: 'fondo cieco',
  s9_vecS: 'via vecchia sud', s9_vecC: 'via vecchia', s9_vecN: 'via vecchia nord',
  s9_offS: 'incrocio officine',
  s9_yard: 'piazzale di servizio',
  s9_workE: 'fuori officina', s9_workIn: 'officina (interno)',
  s9_techE: 'piazzale tecnico', s9_depotS: 'piazzale deposito',
  s9_alleyS: 'imbocco vicolo', s9_alleyOld: 'vicolo nascosto',
  s9_courtOld: 'cortile del borgo', s9_palazzoS: 'largo del palazzo',
  s9_eastS: 'passaggio est sud', s9_eastN: 'passaggio est nord',
  s9_res5n: 'corte est',
};
