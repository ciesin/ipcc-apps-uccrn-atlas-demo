import {
  r
} from "./chunk-6P7HXSJ6.js";

// node_modules/@arcgis/core/core/Cyclical.js
var n = class {
  constructor(t, n2) {
    this.min = t, this.max = n2, this.range = n2 - t;
  }
  normalize(t, n2 = 0, o2 = false) {
    return i(this.range, this.min, this.max, t, n2, o2);
  }
  clamp(n2, i2 = 0) {
    return r(n2 - i2, this.min, this.max) + i2;
  }
  monotonic(t, n2, i2) {
    return t < n2 ? n2 : n2 + o(this.range, t - n2, i2);
  }
  minimalMonotonic(t, n2, o2) {
    return i(this.range, t, t + this.range, n2, o2);
  }
  center(t, n2, i2) {
    return n2 = this.monotonic(t, n2, i2), this.normalize((t + n2) / 2, i2);
  }
  diff(t, n2, i2) {
    return this.monotonic(t, n2, i2) - t;
  }
  shortestSignedDiff(t, n2) {
    t = this.normalize(t);
    const i2 = (n2 = this.normalize(n2)) - t, o2 = n2 < t ? this.minimalMonotonic(t, n2) - t : n2 - this.minimalMonotonic(n2, t);
    return Math.abs(i2) < Math.abs(o2) ? i2 : o2;
  }
  contains(t, n2, i2) {
    return n2 = this.minimalMonotonic(t, n2), (i2 = this.minimalMonotonic(t, i2)) > t && i2 < n2;
  }
};
function i(t, n2, i2, r3, s2 = 0, a2 = false) {
  return (r3 -= s2) < n2 ? r3 += o(t, n2 - r3) : r3 > i2 && (r3 -= o(t, r3 - i2)), a2 && r3 === i2 && (r3 = n2), r3 + s2;
}
function o(t, n2, i2 = 0) {
  return Math.ceil((n2 - i2) / t) * t + i2;
}
var r2 = new n(0, 2 * Math.PI);
var s = new n(-Math.PI, Math.PI);
var a = new n(0, 360);

export {
  n,
  r2 as r,
  s,
  a
};
//# sourceMappingURL=chunk-3ATECVKT.js.map
