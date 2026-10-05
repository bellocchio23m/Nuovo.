// 30 NPC: identità, casa/lavoro, routine, relazioni tipizzate. Il grafo
// sociale è coerente ma NON hardcoded per la demo: le catene emergono da
// agende + percezione + gossip. Struttura invariante alla scala (dati, non
// codice). Ruoli: target (Marco), police (Rossi, Verdi), civilian.
// relType: family|friend|coworker|neighbor|enemy|acquaintance|unknown.
// schedule: blocchi orari {from,to,node,kind} in ore 0..24 (kind:
// home|work|leisure|social). Gap -> casa. home/work = identità stabile.
export const ROSTER = [
  {
    id: 'anna', name: 'Anna (barista)', color: 0xc65b8e, x: -20, z: 18,
    home: 'bar_in', work: 'bar_in',
    relations: { bruno: 0.7, sara: 0.5, marco: 0.4, luca: 0.3, elena: 0.4, paolo: 0.7, bianca: 0.6, monica: 0.5, chiara: 0.5 },
    relType: { bruno: 'friend', sara: 'friend', marco: 'acquaintance', luca: 'acquaintance', elena: 'neighbor', paolo: 'coworker', bianca: 'coworker', monica: 'coworker', chiara: 'friend' },
    schedule: [
      { from: 6, to: 11, node: 'bar_in', kind: 'work' }, { from: 11, to: 12, node: 'pia_c', kind: 'leisure' },
      { from: 12, to: 17, node: 'bar_in', kind: 'work' }, { from: 17, to: 19, node: 'bar_out', kind: 'social' },
      { from: 19, to: 23, node: 'bar_in', kind: 'work' }
    ],
    agenda: [
      { node: 'bar_in', dwell: 16 }, { node: 'bar_out', dwell: 3 },
      { node: 'pia_w', dwell: 4 }, { node: 'bar_out', dwell: 2 }
    ]
  },
  {
    id: 'bruno', name: 'Bruno (operaio)', color: 0x4a7fc9, x: 0, z: 0,
    home: 'b5_door', work: 'svc_in',
    relations: { anna: 0.7, franco: 0.5, carla: 0.3, marco: 0.2, otello: 0.7, ivan: 0.5 },
    relType: { anna: 'friend', franco: 'coworker', carla: 'acquaintance', marco: 'acquaintance', otello: 'coworker', ivan: 'coworker' },
    schedule: [
      { from: 7, to: 12, node: 'svc_in', kind: 'work' }, { from: 12, to: 13, node: 'bar_out', kind: 'leisure' },
      { from: 13, to: 17, node: 'svc_in', kind: 'work' }, { from: 17, to: 20, node: 'bar_in', kind: 'social' }
    ],
    agenda: [
      { node: 'b5_door', dwell: 6 }, { node: 'svc_out', dwell: 3 },
      { node: 'svc_in', dwell: 8 }, { node: 'road_c', dwell: 2 },
      { node: 'bar_out', dwell: 5 }
    ]
  },
  {
    id: 'carla', name: 'Carla (custode)', color: 0x53b06a, x: 18, z: 6,
    home: 'vic_n', work: 'court',
    relations: { bruno: 0.3, marta: 0.4, anna: 0.2, elena: 0.2, gino: 0.5 },
    relType: { bruno: 'acquaintance', marta: 'neighbor', anna: 'acquaintance', elena: 'neighbor', gino: 'neighbor' },
    schedule: [
      { from: 8, to: 12, node: 'court', kind: 'work' }, { from: 12, to: 14, node: 'pia_c', kind: 'leisure' },
      { from: 14, to: 18, node: 'court', kind: 'work' }, { from: 18, to: 21, node: 'vic_n', kind: 'social' }
    ],
    agenda: [
      { node: 'vic_s', dwell: 3 }, { node: 'vic_n', dwell: 2 },
      { node: 'pia_c', dwell: 7 }, { node: 'pia_w', dwell: 3 }
    ]
  },
  {
    id: 'dario', name: 'Dario (fornaio)', color: 0xd08a2d, x: 44, z: 0,
    home: 'north_e', work: 'road_e',
    relations: { luca: 0.2, franco: 0.2, furio: 0.5 },
    relType: { luca: 'acquaintance', franco: 'acquaintance', furio: 'friend' },
    schedule: [
      { from: 5, to: 11, node: 'road_e', kind: 'work' }, { from: 11, to: 15, node: 'north_e', kind: 'home' },
      { from: 15, to: 19, node: 'pia_e', kind: 'work' }, { from: 19, to: 22, node: 'bar_in', kind: 'social' }
    ],
    agenda: [
      { node: 'road_e', dwell: 4 }, { node: 'road_c', dwell: 3 },
      { node: 'vic_s', dwell: 3 }, { node: 'road_c', dwell: 2 }
    ]
  },
  {
    id: 'elena', name: 'Elena (passante)', color: 0x8a5fd0, x: -18, z: -14,
    home: 'b4_door',
    relations: { anna: 0.5, sara: 0.4, carla: 0.2, marta: 0.3, nadia: 0.5, ida: 0.4 },
    relType: { anna: 'friend', sara: 'friend', carla: 'neighbor', marta: 'neighbor', nadia: 'friend', ida: 'neighbor' },
    schedule: [
      { from: 8, to: 12, node: 'sq_s', kind: 'leisure' }, { from: 12, to: 16, node: 'pia_c', kind: 'social' },
      { from: 16, to: 20, node: 'bar_in', kind: 'social' }
    ],
    agenda: [
      { node: 'b4_door', dwell: 5 }, { node: 'sq_s', dwell: 2 },
      { node: 'bar_out', dwell: 4 }, { node: 'bar_in', dwell: 8 }
    ]
  },
  {
    id: 'marco', name: 'Marco (bersaglio)', color: 0xd43a2e, role: 'target', x: 12, z: 12,
    home: 'apt',
    relations: { luca: 0.8, sara: 0.7, anna: 0.4, bruno: 0.2, tiberio: 0.5, lina: 0.3 },
    relType: { luca: 'friend', sara: 'friend', anna: 'acquaintance', bruno: 'acquaintance', tiberio: 'coworker', lina: 'neighbor' },
    schedule: [
      { from: 7, to: 10, node: 'apt', kind: 'home' }, { from: 10, to: 14, node: 'pia_c', kind: 'work' },
      { from: 14, to: 17, node: 'svc_in', kind: 'work' }, { from: 17, to: 21, node: 'bar_in', kind: 'social' },
      { from: 21, to: 24, node: 'apt', kind: 'home' }
    ],
    agenda: [
      { node: 'apt', dwell: 10 }, { node: 'pia_c', dwell: 6 },
      { node: 'bar_in', dwell: 10 }, { node: 'svc_in', dwell: 8 },
      { node: 'bar_in', dwell: 6 }, { node: 'court', dwell: 7 },
      { node: 'pia_e', dwell: 4 }
    ]
  },
  {
    id: 'luca', name: 'Luca (socio di Marco)', color: 0xb05a2a, x: -20, z: 11,
    home: 'bar_out',
    relations: { marco: 0.8, sara: 0.3, dario: 0.2, anna: 0.3, monica: 0.4 },
    relType: { marco: 'friend', sara: 'acquaintance', dario: 'acquaintance', anna: 'acquaintance', monica: 'acquaintance' },
    schedule: [
      { from: 9, to: 13, node: 'bar_in', kind: 'work' }, { from: 13, to: 17, node: 'pia_c', kind: 'social' },
      { from: 17, to: 22, node: 'bar_in', kind: 'social' }, { from: 22, to: 24, node: 'bar_out', kind: 'home' }
    ],
    agenda: [
      { node: 'bar_out', dwell: 4 }, { node: 'bar_in', dwell: 10 },
      { node: 'pia_c', dwell: 6 }, { node: 'road_c', dwell: 3 },
      { node: 'apt', dwell: 6 }
    ]
  },
  {
    id: 'sara', name: 'Sara (amica di Marco)', color: 0x3fb8a6, x: -18, z: -14,
    home: 'b4_door',
    relations: { marco: 0.7, anna: 0.5, elena: 0.4, luca: 0.3, paolo: 0.85, nadia: 0.5 },
    relType: { marco: 'friend', anna: 'friend', elena: 'friend', luca: 'acquaintance', paolo: 'family', nadia: 'friend' },
    schedule: [
      { from: 8, to: 12, node: 'b4_door', kind: 'home' }, { from: 12, to: 16, node: 'bar_in', kind: 'social' },
      { from: 16, to: 20, node: 'pia_c', kind: 'social' }, { from: 20, to: 24, node: 'b4_door', kind: 'home' }
    ],
    agenda: [
      { node: 'b4_door', dwell: 6 }, { node: 'bar_in', dwell: 8 },
      { node: 'pia_c', dwell: 5 }, { node: 'apt', dwell: 7 }
    ]
  },
  {
    id: 'rossi', name: 'Ag. Rossi', color: 0x2a4ad4, role: 'police', x: -40, z: 0,
    home: 'road_w',
    relations: { verdi: 0.6, sandro: 0.3 },
    relType: { verdi: 'coworker', sandro: 'acquaintance' },
    schedule: [
      { from: 8, to: 14, node: 'road_w', kind: 'work' }, { from: 14, to: 20, node: 'pia_c', kind: 'work' },
      { from: 20, to: 24, node: 'road_w', kind: 'home' }
    ],
    agenda: [
      { node: 'road_w', dwell: 4 }, { node: 'road_c', dwell: 3 },
      { node: 'vic_s', dwell: 4 }, { node: 'pia_s', dwell: 4 }
    ]
  },
  {
    id: 'verdi', name: 'Ag. Verdi', color: 0x2a7ad4, role: 'police', x: 44, z: 0,
    home: 'road_e',
    relations: { rossi: 0.6, sandro: 0.3 },
    relType: { rossi: 'coworker', sandro: 'acquaintance' },
    schedule: [
      { from: 8, to: 14, node: 'road_e', kind: 'work' }, { from: 14, to: 20, node: 'vic_n', kind: 'work' },
      { from: 20, to: 24, node: 'road_e', kind: 'home' }
    ],
    agenda: [
      { node: 'road_e', dwell: 4 }, { node: 'pia_e', dwell: 4 },
      { node: 'pia_c', dwell: 4 }, { node: 'vic_n', dwell: 3 }
    ]
  },
  {
    id: 'franco', name: 'Franco (operaio)', color: 0x7a6a3a, x: 10, z: -14,
    home: 'b5_door', work: 'svc_in',
    relations: { bruno: 0.6, anna: 0.2, dario: 0.2, otello: 0.6, ivan: 0.5 },
    relType: { bruno: 'coworker', anna: 'acquaintance', dario: 'acquaintance', otello: 'coworker', ivan: 'coworker' },
    schedule: [
      { from: 7, to: 12, node: 'svc_in', kind: 'work' }, { from: 12, to: 13, node: 'pia_s', kind: 'leisure' },
      { from: 13, to: 17, node: 'svc_out', kind: 'work' }, { from: 17, to: 20, node: 'bar_out', kind: 'social' }
    ],
    agenda: [
      { node: 'b5_door', dwell: 5 }, { node: 'svc_out', dwell: 2 },
      { node: 'svc_in', dwell: 9 }, { node: 'bar_out', dwell: 4 }
    ]
  },
  {
    id: 'marta', name: 'Marta (anziana)', color: 0x9a9a9a, x: 37, z: 20,
    home: 'pia_e',
    relations: { carla: 0.4, elena: 0.3, tea: 0.6, chiara: 0.5, osvaldo: 0.5 },
    relType: { carla: 'neighbor', elena: 'neighbor', tea: 'friend', chiara: 'neighbor', osvaldo: 'friend' },
    schedule: [
      { from: 8, to: 12, node: 'pia_c', kind: 'social' }, { from: 12, to: 15, node: 'pia_e', kind: 'home' },
      { from: 15, to: 19, node: 'pia_w', kind: 'social' }, { from: 19, to: 24, node: 'pia_e', kind: 'home' }
    ],
    agenda: [
      { node: 'pia_c', dwell: 14 }, { node: 'pia_e', dwell: 10 },
      { node: 'pia_w', dwell: 8 }
    ]
  },
  // --- nuovi per Alpha (18) ---
  {
    id: 'paolo', name: 'Paolo (barista)', color: 0x2f9c7a, x: -20, z: 14,
    home: 'b4_door', work: 'bar_in',
    relations: { sara: 0.85, anna: 0.7, elena: 0.4, monica: 0.6, nadia: 0.5 },
    relType: { sara: 'family', anna: 'coworker', elena: 'neighbor', monica: 'coworker', nadia: 'friend' },
    schedule: [
      { from: 7, to: 12, node: 'bar_in', kind: 'work' }, { from: 12, to: 14, node: 'b4_door', kind: 'home' },
      { from: 14, to: 20, node: 'bar_in', kind: 'work' }, { from: 20, to: 22, node: 'pia_c', kind: 'social' }
    ],
    agenda: [{ node: 'bar_in', dwell: 12 }, { node: 'pia_w', dwell: 4 }, { node: 'b4_door', dwell: 6 }]
  },
  {
    id: 'nadia', name: 'Nadia (studentessa)', color: 0xd06a9a, x: -16, z: -12,
    home: 'b4_door',
    relations: { ida: 0.8, sara: 0.5, elena: 0.5, paolo: 0.5, rita: 0.3 },
    relType: { ida: 'family', sara: 'friend', elena: 'friend', paolo: 'friend', rita: 'acquaintance' },
    schedule: [
      { from: 8, to: 13, node: 'court', kind: 'work' }, { from: 13, to: 17, node: 'bar_in', kind: 'leisure' },
      { from: 17, to: 21, node: 'pia_c', kind: 'social' }, { from: 21, to: 24, node: 'b4_door', kind: 'home' }
    ],
    agenda: [{ node: 'court', dwell: 10 }, { node: 'bar_in', dwell: 6 }, { node: 'pia_c', dwell: 5 }, { node: 'b4_door', dwell: 6 }]
  },
  {
    id: 'otello', name: 'Otello (operaio)', color: 0x9c4f2a, x: 8, z: -12,
    home: 'b5_door', work: 'svc_in',
    relations: { bruno: 0.7, franco: 0.6, ivan: 0.75 },
    relType: { bruno: 'coworker', franco: 'coworker', ivan: 'enemy' },
    schedule: [
      { from: 6, to: 12, node: 'svc_in', kind: 'work' }, { from: 12, to: 13, node: 'road_c', kind: 'leisure' },
      { from: 13, to: 18, node: 'svc_out', kind: 'work' }, { from: 18, to: 21, node: 'bar_out', kind: 'social' }
    ],
    agenda: [{ node: 'b5_door', dwell: 5 }, { node: 'svc_in', dwell: 10 }, { node: 'svc_out', dwell: 5 }, { node: 'bar_out', dwell: 4 }]
  },
  {
    id: 'ivan', name: 'Ivan (magazziniere)', color: 0x4a9fc9, x: 12, z: -16,
    home: 'b5_door', work: 'svc_out',
    relations: { otello: 0.75, bruno: 0.5, franco: 0.5, sandro: 0.35 },
    relType: { otello: 'enemy', bruno: 'coworker', franco: 'coworker', sandro: 'acquaintance' },
    schedule: [
      { from: 7, to: 13, node: 'svc_out', kind: 'work' }, { from: 13, to: 14, node: 'pia_s', kind: 'leisure' },
      { from: 14, to: 19, node: 'svc_in', kind: 'work' }, { from: 19, to: 22, node: 'bar_in', kind: 'social' }
    ],
    agenda: [{ node: 'b5_door', dwell: 5 }, { node: 'svc_out', dwell: 9 }, { node: 'svc_in', dwell: 6 }, { node: 'bar_in', dwell: 5 }]
  },
  {
    id: 'chiara', name: 'Chiara (fioraia)', color: 0xc93f8e, x: 42, z: 18,
    home: 'court', work: 'pia_e',
    relations: { marta: 0.5, anna: 0.5, osvaldo: 0.65, nino: 0.4, tea: 0.3 },
    relType: { marta: 'neighbor', anna: 'friend', osvaldo: 'family', nino: 'acquaintance', tea: 'acquaintance' },
    schedule: [
      { from: 6, to: 12, node: 'pia_e', kind: 'work' }, { from: 12, to: 14, node: 'court', kind: 'home' },
      { from: 14, to: 19, node: 'pia_c', kind: 'work' }, { from: 19, to: 22, node: 'court', kind: 'social' }
    ],
    agenda: [{ node: 'pia_e', dwell: 10 }, { node: 'pia_c', dwell: 7 }, { node: 'court', dwell: 6 }]
  },
  {
    id: 'nino', name: 'Nino (ambulante)', color: 0xc9a227, x: 35, z: 18,
    home: 'north_w', work: 'pia_c',
    relations: { chiara: 0.4, marta: 0.3, gino: 0.4, peppe: 0.4 },
    relType: { chiara: 'acquaintance', marta: 'acquaintance', gino: 'friend', peppe: 'friend' },
    schedule: [
      { from: 6, to: 7, node: 'north_w', kind: 'home' }, { from: 7, to: 15, node: 'pia_c', kind: 'work' },
      { from: 15, to: 18, node: 'bar_out', kind: 'leisure' }, { from: 18, to: 21, node: 'north_w', kind: 'social' }
    ],
    agenda: [{ node: 'north_w', dwell: 4 }, { node: 'pia_c', dwell: 12 }, { node: 'bar_out', dwell: 5 }]
  },
  {
    id: 'tea', name: 'Tea (pensionata)', color: 0x8a8a6a, x: -20, z: 31,
    home: 'court',
    relations: { marta: 0.6, ida: 0.55, osvaldo: 0.5, lina: 0.7, chiara: 0.3 },
    relType: { marta: 'friend', ida: 'friend', osvaldo: 'neighbor', lina: 'family', chiara: 'acquaintance' },
    schedule: [
      { from: 8, to: 11, node: 'court', kind: 'home' }, { from: 11, to: 13, node: 'pia_c', kind: 'social' },
      { from: 13, to: 17, node: 'court', kind: 'home' }, { from: 17, to: 20, node: 'pia_w', kind: 'social' }
    ],
    agenda: [{ node: 'court', dwell: 12 }, { node: 'pia_c', dwell: 8 }, { node: 'pia_w', dwell: 6 }]
  },
  {
    id: 'furio', name: 'Furio (corriere)', color: 0x3f6ac9, x: 30, z: 31,
    home: 'north_e', work: 'svc_out',
    relations: { dario: 0.5, tiberio: 0.6, ivan: 0.3 },
    relType: { dario: 'friend', tiberio: 'coworker', ivan: 'acquaintance' },
    schedule: [
      { from: 6, to: 11, node: 'svc_out', kind: 'work' }, { from: 11, to: 13, node: 'road_c', kind: 'work' },
      { from: 13, to: 18, node: 'svc_in', kind: 'work' }, { from: 18, to: 22, node: 'north_e', kind: 'home' }
    ],
    agenda: [{ node: 'north_e', dwell: 4 }, { node: 'svc_out', dwell: 8 }, { node: 'road_c', dwell: 4 }, { node: 'svc_in', dwell: 6 }]
  },
  {
    id: 'bianca', name: 'Bianca (cuoca)', color: 0x7a3fb8, x: -18, z: 22,
    home: 'bar_in', work: 'bar_in',
    relations: { anna: 0.6, monica: 0.75, paolo: 0.5, luca: 0.3 },
    relType: { anna: 'coworker', monica: 'family', paolo: 'coworker', luca: 'acquaintance' },
    schedule: [
      { from: 5, to: 11, node: 'bar_in', kind: 'work' }, { from: 11, to: 15, node: 'bar_out', kind: 'leisure' },
      { from: 15, to: 22, node: 'bar_in', kind: 'work' }
    ],
    agenda: [{ node: 'bar_in', dwell: 14 }, { node: 'bar_out', dwell: 5 }, { node: 'pia_s', dwell: 3 }]
  },
  {
    id: 'gino', name: 'Gino (tabaccaio)', color: 0x8ac93f, x: 18, z: 8,
    home: 'vic_n', work: 'pia_w',
    relations: { rita: 0.5, carla: 0.5, nino: 0.4, peppe: 0.4 },
    relType: { rita: 'neighbor', carla: 'neighbor', nino: 'friend', peppe: 'acquaintance' },
    schedule: [
      { from: 7, to: 13, node: 'pia_w', kind: 'work' }, { from: 13, to: 14, node: 'vic_n', kind: 'home' },
      { from: 14, to: 20, node: 'pia_w', kind: 'work' }, { from: 20, to: 22, node: 'bar_in', kind: 'social' }
    ],
    agenda: [{ node: 'pia_w', dwell: 12 }, { node: 'vic_n', dwell: 5 }, { node: 'bar_in', dwell: 4 }]
  },
  {
    id: 'rita', name: 'Rita (parrucchiera)', color: 0xc96a2a, x: 17, z: 0,
    home: 'vic_s', work: 'vic_s',
    relations: { gino: 0.5, nadia: 0.3, monica: 0.4, carla: 0.3 },
    relType: { gino: 'neighbor', nadia: 'acquaintance', monica: 'friend', carla: 'acquaintance' },
    schedule: [
      { from: 8, to: 13, node: 'vic_s', kind: 'work' }, { from: 13, to: 15, node: 'pia_c', kind: 'leisure' },
      { from: 15, to: 19, node: 'vic_s', kind: 'work' }, { from: 19, to: 22, node: 'bar_out', kind: 'social' }
    ],
    agenda: [{ node: 'vic_s', dwell: 12 }, { node: 'pia_c', dwell: 5 }, { node: 'bar_out', dwell: 4 }]
  },
  {
    id: 'osvaldo', name: 'Osvaldo (anziano)', color: 0x6a6a8a, x: -22, z: 29,
    home: 'court',
    relations: { chiara: 0.65, tea: 0.5, marta: 0.5, peppe: 0.5 },
    relType: { chiara: 'family', tea: 'neighbor', marta: 'friend', peppe: 'friend' },
    schedule: [
      { from: 8, to: 12, node: 'court', kind: 'home' }, { from: 12, to: 15, node: 'pia_c', kind: 'social' },
      { from: 15, to: 19, node: 'north_c', kind: 'social' }, { from: 19, to: 24, node: 'court', kind: 'home' }
    ],
    agenda: [{ node: 'court', dwell: 10 }, { node: 'pia_c', dwell: 8 }, { node: 'north_c', dwell: 5 }]
  },
  {
    id: 'lina', name: 'Lina (infermiera)', color: 0x5fd0c2, x: 14, z: 16,
    home: 'apt', work: 'pia_s',
    relations: { tea: 0.7, marco: 0.3, tiberio: 0.4, sara: 0.3 },
    relType: { tea: 'family', marco: 'neighbor', tiberio: 'neighbor', sara: 'acquaintance' },
    schedule: [
      { from: 8, to: 16, node: 'pia_s', kind: 'work' }, { from: 16, to: 18, node: 'apt', kind: 'home' },
      { from: 18, to: 21, node: 'court', kind: 'social' }, { from: 21, to: 24, node: 'apt', kind: 'home' }
    ],
    agenda: [{ node: 'apt', dwell: 6 }, { node: 'pia_s', dwell: 12 }, { node: 'court', dwell: 5 }]
  },
  {
    id: 'tiberio', name: 'Tiberio (commerciante)', color: 0xd4a02e, x: 10, z: 16,
    home: 'apt', work: 'pia_e',
    relations: { marco: 0.5, furio: 0.6, lina: 0.4, luca: 0.3 },
    relType: { marco: 'coworker', furio: 'coworker', lina: 'neighbor', luca: 'acquaintance' },
    schedule: [
      { from: 8, to: 13, node: 'pia_e', kind: 'work' }, { from: 13, to: 15, node: 'bar_in', kind: 'leisure' },
      { from: 15, to: 20, node: 'pia_e', kind: 'work' }, { from: 20, to: 23, node: 'apt', kind: 'home' }
    ],
    agenda: [{ node: 'apt', dwell: 6 }, { node: 'pia_e', dwell: 12 }, { node: 'bar_in', dwell: 5 }]
  },
  {
    id: 'monica', name: 'Monica (cameriera)', color: 0xe07b9a, x: 6, z: -16,
    home: 'b5_door', work: 'bar_in',
    relations: { bianca: 0.75, paolo: 0.6, luca: 0.4, rita: 0.4, anna: 0.5 },
    relType: { bianca: 'family', paolo: 'coworker', luca: 'acquaintance', rita: 'friend', anna: 'coworker' },
    schedule: [
      { from: 9, to: 15, node: 'bar_in', kind: 'work' }, { from: 15, to: 17, node: 'b5_door', kind: 'home' },
      { from: 17, to: 23, node: 'bar_in', kind: 'work' }
    ],
    agenda: [{ node: 'b5_door', dwell: 5 }, { node: 'bar_in', dwell: 14 }, { node: 'pia_c', dwell: 4 }]
  },
  {
    id: 'peppe', name: 'Peppe (musicista)', color: 0x7fd04a, x: 16, z: -4,
    home: 'vic_s',
    relations: { osvaldo: 0.5, nino: 0.4, gino: 0.4, elena: 0.3 },
    relType: { osvaldo: 'friend', nino: 'friend', gino: 'acquaintance', elena: 'acquaintance' },
    schedule: [
      { from: 10, to: 14, node: 'vic_s', kind: 'home' }, { from: 14, to: 18, node: 'pia_c', kind: 'leisure' },
      { from: 18, to: 23, node: 'bar_out', kind: 'social' }
    ],
    agenda: [{ node: 'vic_s', dwell: 6 }, { node: 'pia_c', dwell: 8 }, { node: 'bar_out', dwell: 7 }]
  },
  {
    id: 'ida', name: 'Ida (vecchia del quartiere)', color: 0x9a4a7a, x: -14, z: -16,
    home: 'b4_door',
    relations: { nadia: 0.8, tea: 0.5, elena: 0.4, sara: 0.4 },
    relType: { nadia: 'family', tea: 'friend', elena: 'neighbor', sara: 'neighbor' },
    schedule: [
      { from: 7, to: 10, node: 'pia_c', kind: 'social' }, { from: 10, to: 14, node: 'b4_door', kind: 'home' },
      { from: 14, to: 18, node: 'pia_w', kind: 'social' }, { from: 18, to: 24, node: 'b4_door', kind: 'home' }
    ],
    agenda: [{ node: 'pia_c', dwell: 8 }, { node: 'b4_door', dwell: 10 }, { node: 'pia_w', dwell: 6 }]
  },
  {
    id: 'sandro', name: 'Sandro (guardiano notturno)', color: 0x4a4a7a, x: -20, z: 33,
    home: 'north_c', work: 'road_c',
    relations: { ivan: 0.35, rossi: 0.3, verdi: 0.3, furio: 0.3 },
    relType: { ivan: 'acquaintance', rossi: 'acquaintance', verdi: 'acquaintance', furio: 'acquaintance' },
    schedule: [
      { from: 6, to: 18, node: 'north_c', kind: 'home' },
      { from: 18, to: 24, node: 'road_c', kind: 'work' }
    ],
    agenda: [{ node: 'north_c', dwell: 8 }, { node: 'road_c', dwell: 6 }, { node: 'vic_n', dwell: 5 }, { node: 'pia_s', dwell: 4 }]
  }
];
