// node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
function n() {
  return [0, 0, 0];
}
function t(n2) {
  return [n2[0], n2[1], n2[2]];
}
function r(n2, t2, r2) {
  return [n2, t2, r2];
}
function e(n2, t2, r2) {
  return [n2, t2, r2];
}
function u(t2, r2 = n()) {
  const e2 = Math.min(3, t2.length);
  for (let n2 = 0; n2 < e2; ++n2) r2[n2] = t2[n2];
  return r2;
}
function o(n2, t2) {
  return new Float64Array(n2, t2, 3);
}
function c() {
  return n();
}
function i() {
  return r(1, 1, 1);
}
function f() {
  return r(1, 0, 0);
}
function a() {
  return r(0, 1, 0);
}
function l() {
  return r(0, 0, 1);
}
var _ = c();
var s = i();
var m = f();
var y = a();
var N = l();
var O = Object.freeze(Object.defineProperty({ __proto__: null, ONES: s, UNIT_X: m, UNIT_Y: y, UNIT_Z: N, ZEROS: _, clone: t, create: n, createView: o, freeze: e, fromArray: u, fromValues: r, ones: i, unitX: f, unitY: a, unitZ: l, zeros: c }, Symbol.toStringTag, { value: "Module" }));

export {
  n,
  t,
  r,
  e,
  u,
  c,
  i,
  _,
  s,
  m,
  y,
  N
};
//# sourceMappingURL=chunk-JLFSX3JT.js.map
