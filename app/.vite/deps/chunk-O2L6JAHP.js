// node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js
function n() {
  return [0, 0];
}
function r(n2) {
  return [n2[0], n2[1]];
}
function t(n2, r2) {
  return [n2, r2];
}
function e(n2, r2) {
  return [n2, r2];
}
function o(r2, t2 = n()) {
  const e2 = Math.min(2, r2.length);
  for (let n2 = 0; n2 < e2; ++n2) t2[n2] = r2[n2];
  return t2;
}
function u(n2, r2) {
  return new Float64Array(n2, r2, 2);
}
function c() {
  return n();
}
function f() {
  return t(1, 1);
}
function i() {
  return t(1, 0);
}
function a() {
  return t(0, 1);
}
var l = c();
var s = f();
var _ = i();
var m = a();
var y = Object.freeze(Object.defineProperty({ __proto__: null, ONES: s, UNIT_X: _, UNIT_Y: m, ZEROS: l, clone: r, create: n, createView: u, freeze: e, fromArray: o, fromValues: t, ones: f, unitX: i, unitY: a, zeros: c }, Symbol.toStringTag, { value: "Module" }));

export {
  n,
  r,
  t,
  o,
  l,
  s,
  _,
  m
};
//# sourceMappingURL=chunk-O2L6JAHP.js.map
