// node_modules/@arcgis/core/views/webgl/doublePrecisionUtils.js
function t(t2, n, o2) {
  for (let r2 = 0; r2 < o2; ++r2) n[2 * r2] = t2[r2], n[2 * r2 + 1] = t2[r2] - n[2 * r2];
}
function o(t2, n) {
  const o2 = t2.length;
  for (let r2 = 0; r2 < o2; ++r2) e[0] = t2[r2], n[r2] = e[0];
  return n;
}
function r(t2, n) {
  const o2 = t2.length;
  for (let r2 = 0; r2 < o2; ++r2) e[0] = t2[r2], e[1] = t2[r2] - e[0], n[r2] = e[1];
  return n;
}
var e = new Float32Array(2);

export {
  t,
  o,
  r
};
//# sourceMappingURL=chunk-4TJZAUWN.js.map
