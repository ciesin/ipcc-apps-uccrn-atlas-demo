import {
  i
} from "./chunk-U6JFTJMZ.js";

// node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js
var s = 2;
var e = class _e {
  constructor(t = [], s2 = []) {
    this.lengths = t ?? [], this.coords = s2 ?? [];
  }
  static fromJSON(t) {
    return new _e(t.lengths, t.coords);
  }
  static fromRect(t) {
    const [s2, o, r, h] = t, n = r - s2, i2 = h - o;
    return new _e([5], [s2, o, n, 0, 0, i2, -n, 0, 0, -i2]);
  }
  get isPoint() {
    return 0 === this.lengths.length && this.coords.length >= 2;
  }
  get maxLength() {
    return Math.max(...this.lengths);
  }
  get size() {
    return this.lengths.reduce((t, s2) => t + s2);
  }
  get usedMemory() {
    return 64 + i(this.lengths, this.coords);
  }
  area() {
    let t = 0, e2 = 0;
    if (!this.lengths.length) return 0;
    for (let o = 0; o < this.lengths.length; o++) {
      const r = this.lengths[o];
      if (r < 3) continue;
      let h = this.coords[s * e2], n = this.coords[s * e2 + 1];
      for (let o2 = 1; o2 < r; o2 += 1) {
        const r2 = this.coords[s * (o2 + e2)], i2 = this.coords[s * (o2 + e2) + 1];
        t += -0.5 * (r2 - h) * (i2 + n), h = r2, n = i2;
      }
      e2 += r;
    }
    return t;
  }
  forEachVertex(t) {
    let e2 = 0;
    this.lengths.length || t(this.coords[0], this.coords[1]);
    for (let o = 0; o < this.lengths.length; o++) {
      const r = this.lengths[o];
      for (let o2 = 0; o2 < r; o2++) {
        t(this.coords[s * (o2 + e2)], this.coords[s * (o2 + e2) + 1]);
      }
      e2 += r;
    }
  }
  deltaDecode() {
    const t = this.clone(), { coords: s2, lengths: e2 } = t;
    let o = 0;
    for (const r of e2) {
      for (let t2 = 1; t2 < r; t2++) s2[2 * (o + t2)] += s2[2 * (o + t2) - 2], s2[2 * (o + t2) + 1] += s2[2 * (o + t2) - 1];
      o += r;
    }
    return t;
  }
  clone(t) {
    if (0 === this.lengths.length) return new _e([], [this.coords[0], this.coords[1]]);
    const o = (0 === this.lengths.length ? 1 : this.lengths.reduce((t2, s2) => t2 + s2)) * s, r = this.coords.slice(0, o);
    return t ? (t.set(r), new _e(this.lengths, t)) : new _e(Array.from(this.lengths), Array.from(r));
  }
};

export {
  e
};
//# sourceMappingURL=chunk-J7454WTE.js.map
