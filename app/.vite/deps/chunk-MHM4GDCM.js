// node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js
function n() {
  return [0, 0, 0, 0];
}
function t(n2) {
  return [n2[0], n2[1], n2[2], n2[3]];
}
function r(n2, t2, r2, e2) {
  return [n2, t2, r2, e2];
}
function e(n2, t2, r2, e2) {
  return [n2, t2, r2, e2];
}
function u(t2, r2 = n()) {
  const e2 = Math.min(4, t2.length);
  for (let n2 = 0; n2 < e2; ++n2) r2[n2] = t2[n2];
  return r2;
}
function o(n2, t2) {
  return new Float64Array(n2, t2, 4);
}
function i() {
  return n();
}
function c() {
  return r(1, 1, 1, 1);
}
function f() {
  return r(1, 0, 0, 0);
}
function a() {
  return r(0, 1, 0, 0);
}
function l() {
  return r(0, 0, 1, 0);
}
function _() {
  return r(0, 0, 0, 1);
}
var s = i();
var N = c();
var T = f();
var m = a();
var y = l();
var I = _();
var O = Object.freeze(Object.defineProperty({ __proto__: null, ONES: N, UNIT_W: I, UNIT_X: T, UNIT_Y: m, UNIT_Z: y, ZEROS: s, clone: t, create: n, createView: o, freeze: e, fromArray: u, fromValues: r, ones: c, unitW: _, unitX: f, unitY: a, unitZ: l, zeros: i }, Symbol.toStringTag, { value: "Module" }));

export {
  n,
  t,
  r,
  e,
  u,
  s,
  N
};
//# sourceMappingURL=chunk-MHM4GDCM.js.map
