// node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js
function e() {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}
function r(e2) {
  return [e2[0], e2[1], e2[2], e2[3], e2[4], e2[5], e2[6], e2[7], e2[8], e2[9], e2[10], e2[11], e2[12], e2[13], e2[14], e2[15]];
}
function t(e2, r2, t2, n2, o2, u2, c, a, l, f, i, _, b, m, p, s) {
  return [e2, r2, t2, n2, o2, u2, c, a, l, f, i, _, b, m, p, s];
}
function n(e2, r2) {
  return new Float64Array(e2, r2, 16);
}
var o = e();
var u = Object.freeze(Object.defineProperty({ __proto__: null, IDENTITY: o, clone: r, create: e, createView: n, fromValues: t }, Symbol.toStringTag, { value: "Module" }));

export {
  e,
  r,
  t,
  o
};
//# sourceMappingURL=chunk-X5RZJMNW.js.map
