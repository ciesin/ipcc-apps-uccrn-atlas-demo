// node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f32.js
function n() {
  return new Float32Array(3);
}
function t(n2) {
  const t2 = new Float32Array(3);
  return t2[0] = n2[0], t2[1] = n2[1], t2[2] = n2[2], t2;
}
function r(n2, t2, r2) {
  const e2 = new Float32Array(3);
  return e2[0] = n2, e2[1] = t2, e2[2] = r2, e2;
}
function e(n2, t2) {
  return new Float32Array(n2, t2, 3);
}
function o() {
  return n();
}
function u() {
  return r(1, 1, 1);
}
function c() {
  return r(1, 0, 0);
}
function i() {
  return r(0, 1, 0);
}
function a() {
  return r(0, 0, 1);
}
var f = o();
var l = u();
var s = c();
var _ = i();
var y = a();
var w = Object.freeze(Object.defineProperty({ __proto__: null, ONES: l, UNIT_X: s, UNIT_Y: _, UNIT_Z: y, ZEROS: f, clone: t, create: n, createView: e, fromValues: r, ones: u, unitX: c, unitY: i, unitZ: a, zeros: o }, Symbol.toStringTag, { value: "Module" }));

export {
  n,
  t,
  r
};
//# sourceMappingURL=chunk-QHF36O7C.js.map
