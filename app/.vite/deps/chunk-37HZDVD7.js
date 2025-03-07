// node_modules/@arcgis/core/layers/support/infoFor3D.js
var t = [["binary", "application/octet-stream", "bin", ""]];
function n(t2, n2) {
  return null != L(n2.name, (t2 == null ? void 0 : t2.supportedFormats) ?? []);
}
function r(t2, n2) {
  if (!t2) return false;
  const r2 = c(n2, t2.supportedFormats ?? []);
  return null != r2 && t2.editFormats.includes(r2);
}
function u(t2, n2) {
  return g(C(t2, n2));
}
function i(t2, n2) {
  return g(L(t2, n2));
}
function s(t2, n2) {
  return y(b(t2, n2));
}
function c(t2, n2) {
  return i(t2.name, n2) ?? u(t2.type, n2);
}
function f(t2, n2, r2) {
  return u(t2, r2) ?? i(n2, r2);
}
function a({ supportedFormats: t2 }) {
  return f("model/gltf-binary", "glb", t2);
}
function p(t2) {
  const n2 = a(t2);
  return null != n2 && t2.editFormats.includes(n2);
}
function l({ supportedFormats: t2 }) {
  return f("model/gltf+json", "gltf", t2);
}
function d(t2) {
  if (!t2) return null;
  const n2 = a(t2), r2 = l(t2);
  let o = null;
  for (const e of t2.queryFormats) {
    if (e === n2) return e;
    e === r2 && (o = e);
  }
  return o;
}
function m({ supportedFormats: t2 }) {
  return f("application/esri3do-SR_world", "wld", t2);
}
function F({ supportedFormats: t2 }) {
  return f("application/esri3do-SR_prj", "prj", t2);
}
function w(n2) {
  return [...t, ...n2];
}
function b(t2, n2) {
  return w(n2).find((n3) => g(n3) === t2);
}
function C(t2, n2) {
  const r2 = t2.toLowerCase();
  return w(n2).find((t3) => y(t3) === r2);
}
function L(t2, n2) {
  const r2 = t2.toLowerCase();
  return w(n2).find((t3) => j(t3).some((t4) => r2.endsWith(t4)));
}
function g(t2) {
  return t2 == null ? void 0 : t2[0];
}
function y(t2) {
  return t2 == null ? void 0 : t2[1].toLowerCase();
}
function j(t2) {
  return (t2 == null ? void 0 : t2[2].split(",").map((t3) => t3.toLowerCase())) ?? [];
}
function h(t2) {
  var _a;
  return (_a = t2.tables) == null ? void 0 : _a.find((t3) => "assetMaps" === t3.role);
}

export {
  n,
  r,
  u,
  s,
  c,
  f,
  a,
  p,
  l,
  d,
  m,
  F,
  h
};
//# sourceMappingURL=chunk-37HZDVD7.js.map
