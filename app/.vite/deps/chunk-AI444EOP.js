// node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat2df32.js
function n() {
  const n2 = new Float32Array(6);
  return n2[0] = 1, n2[3] = 1, n2;
}
function t(n2) {
  const t2 = new Float32Array(6);
  return t2[0] = n2[0], t2[1] = n2[1], t2[2] = n2[2], t2[3] = n2[3], t2[4] = n2[4], t2[5] = n2[5], t2;
}
function r(n2, t2, r2, e2, o2, a2) {
  const c2 = new Float32Array(6);
  return c2[0] = n2, c2[1] = t2, c2[2] = r2, c2[3] = e2, c2[4] = o2, c2[5] = a2, c2;
}
function e(n2, t2) {
  return new Float32Array(n2, t2, 6);
}
function o(n2, t2, r2, e2) {
  const o2 = t2[e2], a2 = t2[e2 + 1];
  n2[e2] = r2[0] * o2 + r2[2] * a2 + r2[4], n2[e2 + 1] = r2[1] * o2 + r2[3] * a2 + r2[5];
}
function a(n2, t2, r2, e2 = 0, a2 = 0, c2 = 2) {
  const u = a2 || t2.length / c2;
  for (let l = e2; l < u; l++) {
    o(n2, t2, r2, l * c2);
  }
}
var c = Object.freeze(Object.defineProperty({ __proto__: null, clone: t, create: n, createView: e, fromValues: r, transform: o, transformMany: a }, Symbol.toStringTag, { value: "Module" }));

export {
  n,
  a
};
//# sourceMappingURL=chunk-AI444EOP.js.map
