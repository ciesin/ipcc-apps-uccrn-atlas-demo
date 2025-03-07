// node_modules/@arcgis/core/support/guards.js
function n(n2) {
  return "number" == typeof n2;
}
function r(n2) {
  return "number" == typeof n2 && isFinite(n2) && Math.floor(n2) === n2;
}
function t(n2) {
  return "boolean" == typeof n2;
}
function e(n2) {
  return "string" == typeof n2 || n2 instanceof String;
}
function u(n2) {
  return null == n2 || e(n2);
}
function o(n2) {
  return Array.isArray(n2);
}
function i(n2) {
  return "esri.Graphic" === (n2 == null ? void 0 : n2.declaredClass);
}
function c(n2) {
  return n2 instanceof Date;
}

export {
  n,
  r,
  t,
  e,
  u,
  o,
  i,
  c
};
//# sourceMappingURL=chunk-ZDVQNOKR.js.map
