// S7 — registro interazioni data-driven (PURO: niente three.js/DOM).
// Tutte le interazioni vivono in game.interactables e si persistono con il
// sistema esistente (serializeGame salva l'intero oggetto, applySave
// ripristina gli stati noti). Nessuna modifica a NPC/AI/locomotion/navigation.
import { allDoors, allWindows } from './buildings.js';

export const INTERACT_RADIUS = 3.0;

// kind: door|window|container|pickup|light|furniture|device|street|vehicle
// Ogni def e' JSON-pura (stato persistibile) + metadati statici.
const D = (id, kind, action, x, z, label, extra = {}) => ({
  id, kind, action, x, z, radius: extra.radius ?? 2.8, label,
  state: extra.state ?? 'closed',
  lockedBy: extra.lockedBy ?? null,
  loot: extra.loot ?? null,
  // metadati per mesh/effetti (persistiti insieme allo stato, JSON-puri)
  vehicle: extra.vehicle ?? null,
  panel: extra.panel ?? null,
  light: extra.light ?? null,
  peek: extra.peek ?? null,
  y: extra.y ?? 0,
});

function doors() {
  return [
    D('door_bar_main', 'door', 'OPEN', -20, 13.6, 'Porta del bar', { state: 'open' }),
    D('door_bar_back', 'door', 'OPEN', -17, 26.4, 'Porta di servizio', {}),
    D('door_b2_main', 'door', 'OPEN', 11, 13.6, 'Portone condominiale', {}),
    D('door_b2_apt', 'door', 'OPEN', 13.5, 13.6, 'Porta appartamento', { lockedBy: 'key_apt' }),
    D('door_b3_shop', 'door', 'OPEN', 24, 13.6, 'Porta del negozio', { state: 'open' }),
    D('door_b3_back', 'door', 'OPEN', 24, 26.4, 'Retro del negozio', { lockedBy: 'key_b3' }),
    D('door_b4_main', 'door', 'OPEN', -18, -14.6, 'Porta di casa', {}),
    D('door_b4_back', 'door', 'OPEN', -18, -25.4, 'Porta sul retro', {}),
    D('door_b5_main', 'door', 'OPEN', 10, -14.6, 'Porta di casa', {}),
    D('door_b5_back', 'door', 'OPEN', 10, -25.4, 'Porta sul retro', {}),
    D('door_svc_gate', 'door', 'OPEN', -31, 7, 'Cancello del deposito', { state: 'open' }),
    D('door_court_gate', 'door', 'OPEN', -19, 33, 'Cancello della corte', { state: 'open' }),
    ...doorsS8(),
  ];
}

const LEGACY_DOORS = new Set([
  'door_bar_main', 'door_bar_back', 'door_b2_main', 'door_b2_apt',
  'door_b3_shop', 'door_b3_back', 'door_b4_main', 'door_b4_back',
  'door_b5_main', 'door_b5_back', 'door_svc_gate', 'door_court_gate',
]);
const LEGACY_WINS = new Set(['win_bar_w', 'win_bar_e', 'win_b3_shop', 'win_b2_apt']);

const DOOR_LABEL = {
  door_b2_rear: 'Porta sul retro', door_b2_hallG: 'Porta del vano scala',
  door_b2_hallU: 'Porta del ballatoio', door_b2_in1: 'Porta della camera',
  door_b2_bathG: 'Porta del bagno', door_b2_bathU: 'Porta del bagno (sopra)',
  door_b3_staff: 'Porta dello staff', door_b3_wc: 'Porta del bagno',
  door_b3_wcU: 'Porta del bagno (sopra)',
  door_b4_e2: 'Passaggio', door_b4_in: 'Porta della camera',
  door_b4_bath: 'Porta del bagno', door_b4_bathU: 'Porta del bagno (sopra)',
  door_b5_in1: 'Porta interna', door_b5_in2: 'Porta interna',
  door_b5_off: 'Porta direzione', door_b5_wc: 'Porta del bagno',
  door_bar_off: 'Porta ufficio (staff)', door_bar_store: 'Porta magazzino',
  door_bar_wc: 'Porta del bagno',
};

// Porte S8: coordinate e stati derivano da buildings.js (stessa fonte di
// muri e battenti reali). Gli id legacy restano curati a mano.
function doorsS8() {
  const out = [];
  for (const d of allDoors()) {
    if (LEGACY_DOORS.has(d.id)) continue;
    out.push(D(d.id, 'door', 'OPEN', d.x, d.z,
      DOOR_LABEL[d.id] ?? `Porta (${d.id})`,
      { state: d.state, y: d.y ?? 0 }));
  }
  return out;
}

function windowsS8() {
  const out = [];
  for (const w of allWindows()) {
    if (LEGACY_WINS.has(w.id) || w.fixed) continue;
    // posizione interazione: davanti al muro, lato strada quando possibile
    out.push(D(w.id, 'window', 'OPEN', w.x, w.z, `Finestra (${w.id})`,
      { state: w.state, y: w.y0 ?? 0, peek: w.peek ?? 'Dentro: una stanza.' }));
  }
  return out;
}

function windows() {
  return [
    D('win_bar_w', 'window', 'OPEN', -25.5, 13.7, 'Vetrina del bar', { peek: 'Dentro: bancone, tavolini, scaffale di bottiglie.' }),
    D('win_bar_e', 'window', 'OPEN', -14.5, 13.7, 'Vetrina del bar', { peek: 'Dentro: tavolini apparecchiati e lampade accese.' }),
    D('win_b3_shop', 'window', 'OPEN', 22, 13.7, 'Vetrina alimentari', { peek: 'Dentro: scaffali pieni e cassette di frutta.' }),
    D('win_b2_apt', 'window', 'OPEN', 10, 13.7, 'Finestra del palazzo', { peek: 'Dentro: una stanza in penombra, qualcuno potrebbe sentirti.' }),
    ...windowsS8(),
  ];
}

function containers() {
  return [
    D('cont_dump_alley', 'container', 'SEARCH', 21.6, 3.5, 'Cassonetto', { loot: 'tool_screwdriver2' }),
    D('cont_dump_court', 'container', 'SEARCH', -24.5, 29, 'Cassonetto', {}),
    D('cont_dump_south', 'container', 'SEARCH', 14.5, -22.5, 'Cassonetto', { loot: 'coin_piazza' }),
    D('cont_crate_vic', 'container', 'SEARCH', 15.8, 8, 'Cassa di legno', { loot: 'bottle_depot' }),
    D('cont_bar_drawer', 'container', 'OPEN', -21, 22.5, 'Cassetto del bancone', { loot: 'doc_bar_till' }),
    D('cont_bar_fridge', 'container', 'OPEN', -18, 24.8, 'Frigorifero', { loot: 'bottle_bar' }),
    D('cont_bar_shelf', 'container', 'OPEN', -20, 25.2, 'Scaffale', {}),
    D('cont_apt_locker', 'container', 'SEARCH', 13.8, 12.4, 'Armadietto', { loot: 'note_depot' }),
    D('cont_svc_box', 'container', 'OPEN', -36, 19, 'Cassa del deposito', { loot: 'tool_hammer' }),
    D('cont_yard_crate', 'container', 'OPEN', -37, 21.5, 'Cassa', {}),
    D('cont_court_chest', 'container', 'OPEN', -22, 31, 'Baule', { loot: 'doc_court' }),
    D('cont_b2_ward', 'container', 'SEARCH', 11.4, 21.5, 'Armadio (camera)', { y: 0, loot: 'doc_apt' }),
    D('cont_b2_desk', 'container', 'OPEN', 15.1, 20.7, 'Scrivania (camera)', { y: 0 }),
    D('cont_b2_kit', 'container', 'OPEN', 15.1, 14.6, 'Pensile cucina', { y: 0, loot: 'coin_b2' }),
    D('cont_b2U_ward', 'container', 'SEARCH', 15.5, 15.5, 'Armadio (sopra)', { y: 3 }),
    D('cont_b3_till', 'container', 'OPEN', 24, 19.9, 'Cassa del negozio', { y: 0 }),
    D('cont_b3_stock', 'container', 'SEARCH', 25.4, 25.3, 'Scaffale magazzino', { y: 0, loot: 'bottle_shop' }),
    D('cont_b4_trunk', 'container', 'OPEN', -12.1, -19.1, 'Baule (camera)', { y: 0, loot: 'doc_family' }),
    D('cont_b4_kit', 'container', 'OPEN', -23, -24.5, 'Credenza cucina', { y: 0 }),
    D('cont_b4_ward1', 'container', 'SEARCH', -11.5, -16.5, 'Armadio (camera 1)', { y: 0 }),
    D('cont_b5_files', 'container', 'OPEN', 2.5, -21, 'Archivio', { y: 0, loot: 'doc_office' }),
    D('cont_b5_deskD', 'container', 'OPEN', 3.8, -24.1, 'Scrivania direzione', { y: 0 }),
    D('cont_bar_office', 'container', 'OPEN', -25.2, 24.9, 'Cassetto ufficio', { y: 0, loot: 'doc_bar_back' }),
    D('cont_bar_store', 'container', 'SEARCH', -18.7, 25.3, 'Scaffale magazzino', { y: 0 }),
  ];
}

function pickups() {
  return [
    D('key_b3', 'pickup', 'TAKE', 33.5, 24.5, 'Chiave (retro negozio)', { state: 'present' }),
    D('doc_bar_till', 'pickup', 'TAKE', -20.5, 22.5, 'Scontrino del bar', { state: 'hidden' }),
    D('tool_wrench', 'pickup', 'TAKE', 17.2, 7.5, 'Chiave inglese', { state: 'present' }),
    D('key_svc', 'pickup', 'TAKE', -19, 30.5, 'Chiave del deposito', { state: 'present' }),
    D('doc_contract', 'pickup', 'TAKE', 37.5, 19.5, 'Foglio stropicciato', { state: 'present' }),
    D('tool_screwdriver', 'pickup', 'TAKE', -35.5, 19, 'Cacciavite', { state: 'present' }),
    D('tool_screwdriver2', 'pickup', 'TAKE', 21.6, 4.6, 'Cacciavite', { state: 'hidden' }),
    D('note_court', 'pickup', 'TAKE', -21.5, 31.5, 'Biglietto', { state: 'present' }),
    D('doc_court', 'pickup', 'TAKE', -22, 31.8, 'Lettera', { state: 'hidden' }),
    D('key_apt', 'pickup', 'TAKE', 14, 12.8, 'Chiave (appartamento)', { state: 'present' }),
    D('note_depot', 'pickup', 'TAKE', -36, 19.8, 'Bolla di consegna', { state: 'hidden' }),
    D('bottle_bar', 'pickup', 'TAKE', -18.6, 24.2, 'Bottiglia', { state: 'hidden' }),
    D('bottle_depot', 'pickup', 'TAKE', 15.8, 8.8, 'Bottiglia', { state: 'hidden' }),
    D('tool_hammer', 'pickup', 'TAKE', -36.8, 19.6, 'Martello', { state: 'hidden' }),
    D('coin_piazza', 'pickup', 'TAKE', 14.5, -21.6, 'Moneta', { state: 'hidden' }),
    D('doc_apt', 'pickup', 'TAKE', 11.4, 22.2, 'Lettera', { state: 'hidden', y: 0 }),
    D('coin_b2', 'pickup', 'TAKE', 15.1, 15.2, 'Spiccioli', { state: 'hidden', y: 0 }),
    D('bottle_shop', 'pickup', 'TAKE', 25.4, 24.6, 'Bottiglia', { state: 'hidden', y: 0 }),
    D('doc_family', 'pickup', 'TAKE', -12.1, -18.4, 'Foto di famiglia', { state: 'hidden', y: 0 }),
    D('doc_office', 'pickup', 'TAKE', 2.5, -20.3, 'Fattura', { state: 'hidden', y: 0 }),
    D('doc_bar_back', 'pickup', 'TAKE', -25.2, 24.2, 'Registro del bar', { state: 'hidden', y: 0 }),
  ];
}

function lights() {
  return [
    D('sw_bar_main', 'light', 'TOGGLE', -21.5, 14.5, 'Interruttore (sala)', { state: 'on', light: 'barMain' }),
    D('sw_bar_back', 'light', 'TOGGLE', -15.8, 25.6, 'Interruttore (retro)', { state: 'on', light: 'barBack' }),
    D('lamp_west', 'light', 'TOGGLE', -30, 6, 'Lampione', { state: 'on', light: 'lampWest' }),
    D('lamp_center', 'light', 'TOGGLE', -5, -6, 'Lampione', { state: 'on', light: 'lampCenter' }),
    D('lamp_vicolo', 'light', 'TOGGLE', 18, 12, 'Lampione', { state: 'on', light: 'lampVicolo' }),
    D('lamp_piazza', 'light', 'TOGGLE', 34, 26, 'Lampione', { state: 'on', light: 'lampPiazza' }),
    D('sw_b2_liv', 'light', 'TOGGLE', 12.2, 14.6, 'Interruttore (soggiorno)', { state: 'on', light: 'b2_liv', y: 0 }),
    D('sw_b2_bed', 'light', 'TOGGLE', 12.2, 20.4, 'Interruttore (camera)', { state: 'off', light: 'b2_bed', y: 0 }),
    D('sw_b2_loft', 'light', 'TOGGLE', 11.6, 21.6, 'Interruttore (sopra)', { state: 'on', light: 'b2_loft', y: 3 }),
    D('sw_b3_sales', 'light', 'TOGGLE', 23.4, 14.6, 'Interruttore (negozio)', { state: 'on', light: 'b3_sales', y: 0 }),
    D('sw_b4_liv', 'light', 'TOGGLE', -17.2, -15.6, 'Interruttore (soggiorno)', { state: 'on', light: 'b4_liv', y: 0 }),
    D('sw_b4_loft', 'light', 'TOGGLE', -23.8, -17.4, 'Interruttore (loft)', { state: 'off', light: 'b4_loft', y: 3 }),
    D('sw_b5_work', 'light', 'TOGGLE', 10.5, -19.6, 'Interruttore (uffici)', { state: 'on', light: 'b5_work', y: 0 }),
    D('sw_bar_off', 'light', 'TOGGLE', -19.6, 23.9, 'Interruttore (retro)', { state: 'on', light: 'barBack', y: 0 }),
  ];
}

function furniture() {
  return [
    D('sit_chair_1', 'furniture', 'SIT', -22.5, 18.5, 'Sedia', { state: 'free' }),
    D('sit_chair_2', 'furniture', 'SIT', -17.5, 19, 'Sedia', { state: 'free' }),
    D('sit_stool', 'furniture', 'SIT', -18.5, 22.5, 'Sgabello', { state: 'free' }),
    D('sit_bench_1', 'furniture', 'SIT', 33, 24, 'Panchina', { state: 'free', radius: 2.2 }),
    D('sit_bench_2', 'furniture', 'SIT', 40, 17, 'Panchina', { state: 'free', radius: 2.2 }),
    D('sit_crate', 'furniture', 'SIT', 15.8, 8.8, 'Cassa (seduta)', { state: 'free' }),
    D('sit_b2_sofa', 'furniture', 'SIT', 12.2, 16.6, 'Divano', { state: 'free', y: 0 }),
    D('sit_b2_bed', 'furniture', 'SIT', 12, 24.2, 'Letto', { state: 'free', y: 0 }),
    D('sit_b4_sofa', 'furniture', 'SIT', -21, -17.4, 'Divano', { state: 'free', y: 0 }),
    D('sit_b4_chair', 'furniture', 'SIT', -19.1, -17.1, 'Poltrona', { state: 'free', y: 0 }),
    D('sit_b5_wait', 'furniture', 'SIT', 13.5, -16.9, 'Sedia attesa', { state: 'free', y: 0 }),
    D('sit_bar_1', 'furniture', 'SIT', -21.3, 18, 'Sedia del bar', { state: 'free', y: 0 }),
  ];
}

function devices() {
  return [
    D('dev_coffee', 'device', 'USE', -19.5, 22.3, 'Macchina del caffè', { state: 'idle', radius: 2.2 }),
    D('dev_radio', 'device', 'USE', -19.2, 25.2, 'Radio', { state: 'off', radius: 2.2 }),
    D('dev_phone', 'device', 'USE', 28.5, 12.5, 'Telefono pubblico', { state: 'idle', radius: 2.2 }),
    D('dev_bell', 'device', 'RING', 11.8, 13.2, 'Campanello', { state: 'idle', radius: 2.2 }),
    D('dev_b4_tv', 'device', 'USE', -16.9, -18.4, 'Televisore', { state: 'off', radius: 2.2, y: 0 }),
    D('dev_b2_radio', 'device', 'USE', 15.5, 16.6, 'Radio', { state: 'off', radius: 2.2, y: 0 }),
    D('dev_b5_coffee', 'device', 'USE', 14.3, -24.4, 'Macchina del caffe (ufficio)', { state: 'idle', radius: 2.2, y: 0 }),
  ];
}

function street() {
  return [
    D('vendor_sud', 'street', 'USE', 26.5, 13.2, 'Distributore', { state: 'idle' }),
    D('bin_nord', 'street', 'SEARCH', -28.8, 6, 'Cestino', {}),
    D('bin_sud', 'street', 'SEARCH', -3.8, -6, 'Cestino', {}),
    D('fountain', 'street', 'DRINK', 37, 27.2, 'Fontanella', { state: 'idle', radius: 2.2 }),
  ];
}

function vehicles() {
  return [
    D('car_red_door', 'vehicle', 'OPEN', 8, -1.6, 'Sportello auto', { vehicle: 'red', panel: 'door' }),
    D('car_red_trunk', 'vehicle', 'OPEN', 8, -4.6, 'Bagagliaio', { vehicle: 'red', panel: 'trunk', loot: 'tool_wrench2' }),
    D('car_blue_door', 'vehicle', 'OPEN', 12.5, -1.6, 'Sportello auto', { vehicle: 'blue', panel: 'door' }),
    D('car_blue_hood', 'vehicle', 'OPEN', 12.5, -4.4, 'Cofano', { vehicle: 'blue', panel: 'hood' }),
    D('car_gray_door', 'vehicle', 'OPEN', -36, 4.4, 'Sportello auto', { vehicle: 'gray', panel: 'door' }),
    D('car_gray_trunk', 'vehicle', 'OPEN', -36, 1.6, 'Bagagliaio', { vehicle: 'gray', panel: 'trunk' }),
    D('tool_wrench2', 'pickup', 'TAKE', 8, -5.2, 'Chiave a rullino', { state: 'hidden' }),
  ];
}

export function interactionInitialStates() {
  const out = {};
  for (const d of [...doors(), ...windows(), ...containers(), ...pickups(),
    ...lights(), ...furniture(), ...devices(), ...street(), ...vehicles()]) {
    out[d.id] = d;
  }
  return out;
}

export function countByKind(table) {
  const c = {};
  for (const d of Object.values(table)) c[d.kind] = (c[d.kind] ?? 0) + 1;
  // veicoli distinti (criterio: 3 veicoli interattivi, non 6 sportelli)
  c.vehicles = new Set(Object.values(table).filter(d => d.kind === 'vehicle').map(d => d.vehicle)).size;
  return c;
}

// Il piu' vicino entro il raggio. y: quota giocatore (porte dei piani
// superiori non si attivano dal piano terra e viceversa).
export function nearestInteractable(table, x, z, maxD = INTERACT_RADIUS, y = null) {
  let best = null, bd = maxD;
  for (const d of Object.values(table)) {
    if (d.kind === 'pickup' && d.state !== 'present') continue;
    if (y !== null && d.y !== undefined && Math.abs(d.y - y) > 1.6) continue;
    const dist = Math.hypot(d.x - x, d.z - z);
    const r = d.radius ?? 2.8;
    if (dist < Math.min(r, bd)) { bd = dist; best = d; }
  }
  return best;
}

const VERB = {
  door: s => (s === 'open' ? 'Chiudi' : 'Apri'),
  window: s => (s === 'open' ? 'Chiudi' : 'Apri'),
  container: s => (s === 'open' ? 'Chiudi' : s === 'searched' ? 'Rovista' : 'Apri'),
  pickup: () => 'Raccogli',
  light: s => (s === 'on' ? 'Spegni' : 'Accendi'),
  furniture: s => (s === 'seated' ? 'Alzati' : 'Siediti'),
  device: (s, d) => (d.id === 'dev_bell' ? 'Suona' : d.id === 'dev_phone' ? 'Usa' : s === 'on' ? 'Spegni' : 'Usa'),
  street: (s, d) => (d.id === 'fountain' ? 'Bevi' : d.id === 'vendor_sud' ? 'Usa' : 'Rovista'),
  vehicle: s => (s === 'open' ? 'Chiudi' : 'Apri'),
};

export function promptFor(d) {
  if (!d) return null;
  const v = (VERB[d.kind] ?? (() => 'Usa'))(d.state, d);
  return `Premi <b>E</b> · ${v} <b>${d.label}</b>`;
}

// Attiva un'interazione. Ritorna un descrittore di esito; gli effetti di scena
// (collider/audio/mesh/rumore) li applica game.js tramite applyResult.
export function activate(table, id) {
  const d = table[id];
  if (!d) return { ok: false, msg: 'Niente da usare qui.', sound: null };
  switch (d.kind) {
    case 'door': {
      if (d.state !== 'open' && d.lockedBy && table[d.lockedBy]?.state !== 'taken') {
        return { ok: false, msg: `🔒 ${d.label}: serve la chiave giusta.`, sound: 'locked' };
      }
      d.state = d.state === 'open' ? 'closed' : 'open';
      if (d.lockedBy) d.lockedBy = null; // la chiave resta usata: serratura sbloccata
      return {
        ok: true, msg: d.state === 'open' ? `🚪 ${d.label}: aperta.` : `🚪 ${d.label}: chiusa.`,
        sound: 'door', door: { id, open: d.state === 'open' },
      };
    }
    case 'window': {
      d.state = d.state === 'open' ? 'closed' : 'open';
      return {
        ok: true,
        msg: d.state === 'open' ? `🪟 ${d.label}: aperta. ${d.peek ?? ''}` : `🪟 ${d.label}: chiusa.`,
        sound: 'window', win: { id, open: d.state === 'open' },
      };
    }
    case 'container': {
      if (d.state === 'open') {
        d.state = 'closed';
        return { ok: true, msg: `📦 ${d.label}: chiuso.`, sound: 'drawer' };
      }
      d.state = 'open';
      const loot = d.loot && table[d.loot] && table[d.loot].state === 'hidden' ? d.loot : null;
      if (loot) table[loot].state = 'present';
      return {
        ok: true,
        msg: loot ? `📦 ${d.label}: dentro c'è <b>${table[loot].label}</b>!` : `📦 ${d.label}: niente di utile.`,
        sound: 'drawer', loot,
      };
    }
    case 'pickup': {
      if (d.state !== 'present') return { ok: false, msg: 'Già preso.', sound: null };
      d.state = 'taken';
      return { ok: true, msg: `🎒 Raccolto: <b>${d.label}</b>.`, sound: 'pickup', taken: id };
    }
    case 'light': {
      d.state = d.state === 'on' ? 'off' : 'on';
      return {
        ok: true,
        msg: d.state === 'on' ? `💡 ${d.label}: accesa.` : `💡 ${d.label}: spenta. Meglio non farsi vedere…`,
        sound: 'switch', light: { id, on: d.state === 'on' },
      };
    }
    case 'furniture': {
      d.state = d.state === 'seated' ? 'free' : 'seated';
      return {
        ok: true, msg: d.state === 'seated' ? `🪑 Ti siedi (${d.label}). Premi E per alzarti.` : '🚶 Ti alzi.',
        sound: 'sit', seat: { id, seated: d.state === 'seated' },
      };
    }
    case 'device': {
      if (d.id === 'dev_bell') {
        return { ok: true, msg: '🔔 Drin! Qualcuno verrà a controllare…', sound: 'bell', noise: { x: d.x, z: d.z, radius: 16, severity: 0.3 } };
      }
      if (d.id === 'dev_phone') {
        if (d.state === 'used') return { ok: false, msg: '☎ Il telefono è muto ora.', sound: null };
        d.state = 'used';
        return { ok: true, msg: '☎ Una voce: «Il bersaglio gira tra bar e piazza. Muoviti.»', sound: 'phone', info: true };
      }
      if (d.id === 'dev_radio') {
        d.state = d.state === 'on' ? 'off' : 'on';
        return { ok: true, msg: d.state === 'on' ? '📻 La radio gracchia una notizia…' : '📻 Radio spenta.', sound: 'switch' };
      }
      if (d.id === 'dev_b4_tv') {
        d.state = d.state === 'on' ? 'off' : 'on';
        return { ok: true, msg: d.state === 'on' ? 'Telegiornale: niente di nuovo dal quartiere.' : 'Televisore spento.', sound: 'switch', tv: { on: d.state === 'on' } };
      }
      if (d.id === 'dev_b2_radio') {
        d.state = d.state === 'on' ? 'off' : 'on';
        return { ok: true, msg: d.state === 'on' ? 'Musica leggera dalla radio.' : 'Radio spenta.', sound: 'switch' };
      }
      // caffè
      d.state = d.state === 'idle' ? 'brewing' : 'idle';
      return {
        ok: true,
        msg: d.state === 'brewing' ? '☕ La macchina borbotta… caffè in arrivo.' : '☕ Prendi il caffè. Amaro e bollente.',
        sound: 'switch',
      };
    }
    case 'street': {
      if (d.id === 'vendor_sud') {
        return { ok: true, msg: '🥤 Il distributore ronza… cade una lattina. La prendi.', sound: 'switch', taken: null };
      }
      if (d.id === 'fountain') {
        return { ok: true, msg: '💧 Bevi acqua fresca. Meglio.', sound: 'switch' };
      }
      if (d.state === 'open') {
        d.state = 'closed';
        return { ok: true, msg: `🗑 ${d.label}: richiuso.`, sound: 'drawer' };
      }
      d.state = 'open';
      return { ok: true, msg: `🗑 Frughi nel ${d.label}: solo cartacce.`, sound: 'drawer' };
    }
    case 'vehicle': {
      d.state = d.state === 'open' ? 'closed' : 'open';
      const loot = d.loot && table[d.loot] && table[d.loot].state === 'hidden' ? d.loot : null;
      if (loot && d.state === 'open') table[loot].state = 'present';
      return {
        ok: true,
        msg: d.state === 'open'
          ? `🚗 ${d.label}: aperto.${loot ? ` Dentro c'è <b>${table[loot].label}</b>!` : ''}`
          : `🚗 ${d.label}: chiuso.`,
        sound: 'door', loot,
      };
    }
    default:
      return { ok: false, msg: 'Niente da fare.', sound: null };
  }
}

// Rettangolo collider di una porta chiusa (blocco reale per fisica e nav).
// Stretto alla luce della porta: non invade i nodi di navigazione vicini.
export function doorObstacle(d) {
  return { minX: d.x - 0.7, maxX: d.x + 0.7, minZ: d.z - 0.35, maxZ: d.z + 0.35 };
}
