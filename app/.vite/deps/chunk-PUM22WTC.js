// node_modules/@arcgis/core/core/libs/gl-matrix-2/math/common.js
var t = 1e-6;
function e() {
  return t;
}
function n(e2) {
  t = e2;
}
var o = Math.random;
var a = Math.PI / 180;
var r = 180 / Math.PI;
function u(t2) {
  return t2 * a;
}
function c(t2) {
  return t2 * r;
}
function i(e2, n2) {
  return Math.abs(e2 - n2) <= t * Math.max(1, Math.abs(e2), Math.abs(n2));
}
var s = Object.freeze(Object.defineProperty({ __proto__: null, RANDOM: o, equals: i, getEpsilon: e, setEpsilon: n, toDegree: c, toRadian: u }, Symbol.toStringTag, { value: "Module" }));

export {
  e,
  o,
  u,
  c
};
//# sourceMappingURL=chunk-PUM22WTC.js.map
