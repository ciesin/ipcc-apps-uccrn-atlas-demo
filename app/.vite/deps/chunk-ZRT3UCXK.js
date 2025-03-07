import {
  e2 as e
} from "./chunk-4LTV6KQ5.js";

// node_modules/@arcgis/core/views/2d/tiling/TileKey.js
var e2 = class _e {
  static getId(t, e3, l, o) {
    return "object" == typeof t ? `${t.level}/${t.row}/${t.col}/${t.world}` : `${t}/${e3}/${l}/${o}`;
  }
  constructor(t, e3, l, o) {
    this.set(t, e3, l, o);
  }
  get key() {
    return this;
  }
  get id() {
    return this.toString();
  }
  get normalizedId() {
    return `${this.level}/${this.row}/${this.col}`;
  }
  set id(t) {
    this.set(t);
  }
  get hash() {
    const t = 4095 & this.row, e3 = 4095 & this.col, l = 63 & this.level;
    return (3 & this.world) << 30 | e3 << 22 | t << 8 | l;
  }
  acquire(t, e3, l, o) {
    this.set(t, e3, l, o);
  }
  contains(t) {
    const e3 = t.level - this.level;
    return e3 >= 0 && this.row === t.row >> e3 && this.col === t.col >> e3 && this.world === t.world;
  }
  containsChild(t) {
    const e3 = t.level - this.level;
    return e3 > 0 && this.row === t.row >> e3 && this.col === t.col >> e3 && this.world === t.world;
  }
  equals(t) {
    return this.level === t.level && this.row === t.row && this.col === t.col && this.world === t.world;
  }
  clone() {
    return new _e(this);
  }
  release() {
    this.level = 0, this.row = 0, this.col = 0, this.world = 0;
  }
  set(t, e3, l, o) {
    if (null == t) this.level = 0, this.row = 0, this.col = 0, this.world = 0;
    else if ("object" == typeof t) this.level = t.level || 0, this.row = t.row || 0, this.col = t.col || 0, this.world = t.world || 0;
    else if ("string" == typeof t) {
      const [e4, l2, o2, s] = t.split("/");
      this.level = parseFloat(e4), this.row = parseFloat(l2), this.col = parseFloat(o2), this.world = parseFloat(s);
    } else this.level = +t, this.row = +e3, this.col = +l, this.world = +o || 0;
    return this;
  }
  toString() {
    return `${this.level}/${this.row}/${this.col}/${this.world}`;
  }
  getParentKey() {
    return this.level <= 0 ? null : new _e(this.level - 1, this.row >> 1, this.col >> 1, this.world);
  }
  getNormalizedNeighbor(t, e3, l) {
    const o = this.clone();
    return o.col += t, o.row += e3, l.normalizeKey(o), o;
  }
  getChildKeys() {
    const t = this.level + 1, l = this.row << 1, o = this.col << 1, s = this.world;
    return [new _e(t, l, o, s), new _e(t, l, o + 1, s), new _e(t, l + 1, o, s), new _e(t, l + 1, o + 1, s)];
  }
  compareRowMajor(t) {
    return this.row < t.row ? -1 : this.row > t.row ? 1 : this.col < t.col ? -1 : this.col > t.col ? 1 : 0;
  }
};
e2.pool = new e(e2, null, null, 25, 50);

export {
  e2 as e
};
//# sourceMappingURL=chunk-ZRT3UCXK.js.map
