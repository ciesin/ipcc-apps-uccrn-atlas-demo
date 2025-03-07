import {
  n as n2
} from "./chunk-O2L6JAHP.js";
import {
  n
} from "./chunk-MHM4GDCM.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js
var e = n();
var o = class {
  constructor(t) {
    this.message = t;
  }
  toString() {
    return `AssertException: ${this.message}`;
  }
};
function s(t, r = "Assertion") {
  if (!t) {
    const t2 = new Error(r).stack;
    throw new o(`${r} at ${t2}`);
  }
}
function c(t, r) {
  t || (r = r || "", console.warn("Verify failed: " + r + "\n" + new Error("verify").stack));
}
function i(t, r, n3, e2) {
  let o2, s2 = (n3[0] - t[0]) / r[0], c2 = (e2[0] - t[0]) / r[0];
  s2 > c2 && (o2 = s2, s2 = c2, c2 = o2);
  let i2 = (n3[1] - t[1]) / r[1], f2 = (e2[1] - t[1]) / r[1];
  if (i2 > f2 && (o2 = i2, i2 = f2, f2 = o2), s2 > f2 || i2 > c2) return false;
  i2 > s2 && (s2 = i2), f2 < c2 && (c2 = f2);
  let a = (n3[2] - t[2]) / r[2], u2 = (e2[2] - t[2]) / r[2];
  return a > u2 && (o2 = a, a = u2, u2 = o2), !(s2 > u2 || a > c2) && (u2 < c2 && (c2 = u2), !(c2 < 0));
}
function f(r, n3, e2, o2, s2, c2 = n2()) {
  const i2 = (o2[s2] - e2[s2]) * (n3[0] - r[0]) - (o2[0] - e2[0]) * (n3[s2] - r[s2]), f2 = (o2[0] - e2[0]) * (r[s2] - e2[s2]) - (o2[s2] - e2[s2]) * (r[0] - e2[0]);
  if (0 === i2) return false;
  const a = f2 / i2;
  return c2[0] = r[0] + a * (n3[0] - r[0]), c2[1] = r[s2] + a * (n3[s2] - r[s2]), true;
}
function u(t, r) {
  return Math.log(t) / Math.log(r);
}
function m(t) {
  return 1 === t[0] && 0 === t[1] && 0 === t[2] && 0 === t[3] && 0 === t[4] && 1 === t[5] && 0 === t[6] && 0 === t[7] && 0 === t[8] && 0 === t[9] && 1 === t[10] && 0 === t[11] && 1 === t[15];
}

export {
  s,
  c,
  i,
  f,
  u,
  m
};
//# sourceMappingURL=chunk-IR5AHWR5.js.map
