// node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f32.js
function n() {
  return new Float32Array(2);
}
function r(n2) {
  const r2 = new Float32Array(2);
  return r2[0] = n2[0], r2[1] = n2[1], r2;
}
function t(n2, r2) {
  const t2 = new Float32Array(2);
  return t2[0] = n2, t2[1] = r2, t2;
}
function e(n2, r2) {
  return new Float32Array(n2, r2, 2);
}
function o() {
  return n();
}
function u() {
  return t(1, 1);
}
function c() {
  return t(1, 0);
}
function a() {
  return t(0, 1);
}
var i = o();
var f = u();
var l = c();
var s = a();
var y = Object.freeze(Object.defineProperty({ __proto__: null, ONES: f, UNIT_X: l, UNIT_Y: s, ZEROS: i, clone: r, create: n, createView: e, fromValues: t, ones: u, unitX: c, unitY: a, zeros: o }, Symbol.toStringTag, { value: "Module" }));

export {
  n,
  t,
  i,
  f
};
//# sourceMappingURL=chunk-HYJ4YR5G.js.map
