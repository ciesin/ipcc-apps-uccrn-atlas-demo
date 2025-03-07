import {
  e
} from "./chunk-PUM22WTC.js";

// node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat2d.js
function n(t, n2) {
  return t[0] = n2[0], t[1] = n2[1], t[2] = n2[2], t[3] = n2[3], t[4] = n2[4], t[5] = n2[5], t;
}
function a(t) {
  return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
}
function r(t, n2, a2, r2, u2, o2, e3) {
  return t[0] = n2, t[1] = a2, t[2] = r2, t[3] = u2, t[4] = o2, t[5] = e3, t;
}
function u(t, n2) {
  const a2 = n2[0], r2 = n2[1], u2 = n2[2], o2 = n2[3], e3 = n2[4], s2 = n2[5];
  let c2 = a2 * o2 - r2 * u2;
  return c2 ? (c2 = 1 / c2, t[0] = o2 * c2, t[1] = -r2 * c2, t[2] = -u2 * c2, t[3] = a2 * c2, t[4] = (u2 * s2 - o2 * e3) * c2, t[5] = (r2 * e3 - a2 * s2) * c2, t) : null;
}
function o(t) {
  return t[0] * t[3] - t[1] * t[2];
}
function e2(t, n2, a2) {
  const r2 = n2[0], u2 = n2[1], o2 = n2[2], e3 = n2[3], s2 = n2[4], c2 = n2[5], i2 = a2[0], M2 = a2[1], h2 = a2[2], f2 = a2[3], b2 = a2[4], l2 = a2[5];
  return t[0] = r2 * i2 + o2 * M2, t[1] = u2 * i2 + e3 * M2, t[2] = r2 * h2 + o2 * f2, t[3] = u2 * h2 + e3 * f2, t[4] = r2 * b2 + o2 * l2 + s2, t[5] = u2 * b2 + e3 * l2 + c2, t;
}
function s(t, n2, a2) {
  const r2 = n2[0], u2 = n2[1], o2 = n2[2], e3 = n2[3], s2 = n2[4], c2 = n2[5], i2 = Math.sin(a2), M2 = Math.cos(a2);
  return t[0] = r2 * M2 + o2 * i2, t[1] = u2 * M2 + e3 * i2, t[2] = r2 * -i2 + o2 * M2, t[3] = u2 * -i2 + e3 * M2, t[4] = s2, t[5] = c2, t;
}
function c(t, n2, a2) {
  const r2 = n2[0], u2 = n2[1], o2 = n2[2], e3 = n2[3], s2 = n2[4], c2 = n2[5], i2 = a2[0], M2 = a2[1];
  return t[0] = r2 * i2, t[1] = u2 * i2, t[2] = o2 * M2, t[3] = e3 * M2, t[4] = s2, t[5] = c2, t;
}
function i(t, n2, a2) {
  const r2 = n2[0], u2 = n2[1], o2 = n2[2], e3 = n2[3], s2 = n2[4], c2 = n2[5], i2 = a2[0], M2 = a2[1];
  return t[0] = r2, t[1] = u2, t[2] = o2, t[3] = e3, t[4] = r2 * i2 + o2 * M2 + s2, t[5] = u2 * i2 + e3 * M2 + c2, t;
}
function M(t, n2) {
  const a2 = Math.sin(n2), r2 = Math.cos(n2);
  return t[0] = r2, t[1] = a2, t[2] = -a2, t[3] = r2, t[4] = 0, t[5] = 0, t;
}
function h(t, n2) {
  return t[0] = n2[0], t[1] = 0, t[2] = 0, t[3] = n2[1], t[4] = 0, t[5] = 0, t;
}
function f(t, n2) {
  return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = n2[0], t[5] = n2[1], t;
}
function b(t) {
  return "mat2d(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ")";
}
function l(t) {
  return Math.sqrt(t[0] ** 2 + t[1] ** 2 + t[2] ** 2 + t[3] ** 2 + t[4] ** 2 + t[5] ** 2 + 1);
}
function m(t, n2, a2) {
  return t[0] = n2[0] + a2[0], t[1] = n2[1] + a2[1], t[2] = n2[2] + a2[2], t[3] = n2[3] + a2[3], t[4] = n2[4] + a2[4], t[5] = n2[5] + a2[5], t;
}
function d(t, n2, a2) {
  return t[0] = n2[0] - a2[0], t[1] = n2[1] - a2[1], t[2] = n2[2] - a2[2], t[3] = n2[3] - a2[3], t[4] = n2[4] - a2[4], t[5] = n2[5] - a2[5], t;
}
function p(t, n2, a2) {
  return t[0] = n2[0] * a2, t[1] = n2[1] * a2, t[2] = n2[2] * a2, t[3] = n2[3] * a2, t[4] = n2[4] * a2, t[5] = n2[5] * a2, t;
}
function x(t, n2, a2, r2) {
  return t[0] = n2[0] + a2[0] * r2, t[1] = n2[1] + a2[1] * r2, t[2] = n2[2] + a2[2] * r2, t[3] = n2[3] + a2[3] * r2, t[4] = n2[4] + a2[4] * r2, t[5] = n2[5] + a2[5] * r2, t;
}
function y(t, n2) {
  return t[0] === n2[0] && t[1] === n2[1] && t[2] === n2[2] && t[3] === n2[3] && t[4] === n2[4] && t[5] === n2[5];
}
function S(n2, a2) {
  const r2 = n2[0], u2 = n2[1], o2 = n2[2], e3 = n2[3], s2 = n2[4], c2 = n2[5], i2 = a2[0], M2 = a2[1], h2 = a2[2], f2 = a2[3], b2 = a2[4], l2 = a2[5], m2 = e();
  return Math.abs(r2 - i2) <= m2 * Math.max(1, Math.abs(r2), Math.abs(i2)) && Math.abs(u2 - M2) <= m2 * Math.max(1, Math.abs(u2), Math.abs(M2)) && Math.abs(o2 - h2) <= m2 * Math.max(1, Math.abs(o2), Math.abs(h2)) && Math.abs(e3 - f2) <= m2 * Math.max(1, Math.abs(e3), Math.abs(f2)) && Math.abs(s2 - b2) <= m2 * Math.max(1, Math.abs(s2), Math.abs(b2)) && Math.abs(c2 - l2) <= m2 * Math.max(1, Math.abs(c2), Math.abs(l2));
}
var _ = e2;
var g = d;
var j = Object.freeze(Object.defineProperty({ __proto__: null, add: m, copy: n, determinant: o, equals: S, exactEquals: y, frob: l, fromRotation: M, fromScaling: h, fromTranslation: f, identity: a, invert: u, mul: _, multiply: e2, multiplyScalar: p, multiplyScalarAndAdd: x, rotate: s, scale: c, set: r, str: b, sub: g, subtract: d, translate: i }, Symbol.toStringTag, { value: "Module" }));

export {
  a,
  r,
  u,
  e2 as e,
  s,
  c,
  i,
  M,
  h,
  f
};
//# sourceMappingURL=chunk-CTBXY22F.js.map
