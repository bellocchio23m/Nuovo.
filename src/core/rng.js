// RNG seedato (mulberry32) con stato serializzabile per i salvataggi.
export function makeRng(seed) {
  let s = (seed >>> 0) || 1;
  return {
    get state() { return s >>> 0; },
    set state(v) { s = (v >>> 0) || 1; },
    next() {
      s |= 0; s = (s + 0x6D2B79F5) | 0;
      let t = Math.imul(s ^ (s >>> 15), 1 | s);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    },
    range(a, b) { return a + this.next() * (b - a); },
    pick(arr) { return arr[Math.floor(this.next() * arr.length)]; }
  };
}
