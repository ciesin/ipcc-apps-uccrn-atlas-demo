// node_modules/@arcgis/core/core/uuid.js
var t = "randomUUID" in crypto;
function n() {
  if (t) return crypto.randomUUID();
  const n2 = crypto.getRandomValues(new Uint16Array(8));
  n2[3] = 4095 & n2[3] | 16384, n2[4] = 16383 & n2[4] | 32768;
  const r2 = (t2) => n2[t2].toString(16).padStart(4, "0");
  return r2(0) + r2(1) + "-" + r2(2) + "-" + r2(3) + "-" + r2(4) + "-" + r2(5) + r2(6) + r2(7);
}
function r() {
  return `{${n().toUpperCase()}}`;
}
function o() {
  return `{${n()}}`;
}
function e(t2) {
  const n2 = t2.toUpperCase();
  return "{" !== t2[0] ? `{${n2}}` : n2;
}

export {
  n,
  r,
  o,
  e
};
//# sourceMappingURL=chunk-5EWD56QJ.js.map
