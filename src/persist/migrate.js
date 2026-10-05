// Migrazioni schema save, pure e testabili (niente IndexedDB/DOM).
// v1 -> v2: credenze {fact,source} -> strutturate {kind,...,provenance};
// aggiunto stato sim mancante; 'alerted' senza fleeNode -> 'dwell' sicuro.
export function migrateV1toV2(data, journalEvents) {
  for (const n of data.npcs) {
    n.thinkAt = n.thinkAt ?? 0; n.symbolAt = 0; n.speed = 0;
    n.path = []; n.pathIdx = 0; n.fleeNode = null;
    if (n.state === 'alerted') n.state = 'dwell';
    const beliefs = [];
    for (const [evId, b] of n.beliefs ?? []) {
      if (b && typeof b === 'object' && 'kind' in b) { beliefs.push([evId, b]); continue; }
      const ev = (journalEvents ?? []).find(e => e.id === evId);
      beliefs.push([evId, {
        kind: ev?.type ?? 'disturbance', severity: ev?.severity ?? 0.5,
        px: ev?.x ?? n.x, pz: ev?.z ?? n.z, place: ev?.place ?? 'sconosciuto',
        actor: ev?.actorId ?? 'sconosciuto',
        channel: b?.source === 'hearsay' ? 'hearsay' : 'seen',
        confidence: b?.confidence ?? 0.5, t: b?.t ?? 0, error: b?.error ?? null,
        provenance: []
      }]);
    }
    n.beliefs = beliefs;
  }
  data.version = 2;
  return data;
}

export { migrateV1toV2 as migrateV1toV2ForTest };
