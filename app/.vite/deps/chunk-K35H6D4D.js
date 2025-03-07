import {
  e,
  o
} from "./chunk-PUM22WTC.js";

// node_modules/@arcgis/core/core/libs/gl-matrix-2/math/vec2.js
function r(t, n) {
  return t[0] = n[0], t[1] = n[1], t;
}
function o2(t, n, r2) {
  return t[0] = n, t[1] = r2, t;
}
function u(t, n, r2) {
  return t[0] = n[0] + r2[0], t[1] = n[1] + r2[1], t;
}
function e2(t, n, r2) {
  return t[0] = n[0] - r2[0], t[1] = n[1] - r2[1], t;
}
function c(t, n, r2) {
  return t[0] = n[0] * r2[0], t[1] = n[1] * r2[1], t;
}
function a(t, n, r2) {
  return t[0] = n[0] / r2[0], t[1] = n[1] / r2[1], t;
}
function s(t, n) {
  return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t;
}
function i(t, n) {
  return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t;
}
function f(t, n, r2) {
  return t[0] = Math.min(n[0], r2[0]), t[1] = Math.min(n[1], r2[1]), t;
}
function M(t, n, r2) {
  return t[0] = Math.max(n[0], r2[0]), t[1] = Math.max(n[1], r2[1]), t;
}
function h(t, n) {
  return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t;
}
function l(t, n, r2) {
  return t[0] = n[0] * r2, t[1] = n[1] * r2, t;
}
function d(t, n, r2, o3) {
  return t[0] = n[0] + r2[0] * o3, t[1] = n[1] + r2[1] * o3, t;
}
function m(t, n) {
  const r2 = n[0] - t[0], o3 = n[1] - t[1];
  return Math.sqrt(r2 * r2 + o3 * o3);
}
function b(t, n) {
  const r2 = n[0] - t[0], o3 = n[1] - t[1];
  return r2 * r2 + o3 * o3;
}
function q(t) {
  const n = t[0], r2 = t[1];
  return Math.sqrt(n * n + r2 * r2);
}
function p(t) {
  const n = t[0], r2 = t[1];
  return n * n + r2 * r2;
}
function x(t, n) {
  return t[0] = -n[0], t[1] = -n[1], t;
}
function g(t, n) {
  return t[0] = 1 / n[0], t[1] = 1 / n[1], t;
}
function v(t, n) {
  const r2 = n[0], o3 = n[1];
  let u2 = r2 * r2 + o3 * o3;
  return u2 > 0 && (u2 = 1 / Math.sqrt(u2), t[0] = n[0] * u2, t[1] = n[1] * u2), t;
}
function j(t, n) {
  return t[0] * n[0] + t[1] * n[1];
}
function y(t, n, r2) {
  const o3 = n[0] * r2[1] - n[1] * r2[0];
  return t[0] = t[1] = 0, t[2] = o3, t;
}
function _(t, n, r2, o3) {
  const u2 = n[0], e3 = n[1];
  return t[0] = u2 + o3 * (r2[0] - u2), t[1] = e3 + o3 * (r2[1] - e3), t;
}
function A(n, r2 = 1) {
  const o3 = 2 * o() * Math.PI;
  return n[0] = Math.cos(o3) * r2, n[1] = Math.sin(o3) * r2, n;
}
function P(t, n, r2) {
  const o3 = n[0], u2 = n[1];
  return t[0] = r2[0] * o3 + r2[2] * u2, t[1] = r2[1] * o3 + r2[3] * u2, t;
}
function S(t, n, r2) {
  const o3 = n[0], u2 = n[1];
  return t[0] = r2[0] * o3 + r2[2] * u2 + r2[4], t[1] = r2[1] * o3 + r2[3] * u2 + r2[5], t;
}
function z(t, n, r2) {
  const o3 = n[0], u2 = n[1];
  return t[0] = r2[0] * o3 + r2[3] * u2 + r2[6], t[1] = r2[1] * o3 + r2[4] * u2 + r2[7], t;
}
function D(t, n, r2) {
  const o3 = n[0], u2 = n[1];
  return t[0] = r2[0] * o3 + r2[4] * u2 + r2[12], t[1] = r2[1] * o3 + r2[5] * u2 + r2[13], t;
}
function I(t, n, r2, o3) {
  const u2 = n[0] - r2[0], e3 = n[1] - r2[1], c2 = Math.sin(o3), a2 = Math.cos(o3);
  return t[0] = u2 * a2 - e3 * c2 + r2[0], t[1] = u2 * c2 + e3 * a2 + r2[1], t;
}
function L(t, n) {
  const r2 = t[0], o3 = t[1], u2 = n[0], e3 = n[1];
  let c2 = r2 * r2 + o3 * o3;
  c2 > 0 && (c2 = 1 / Math.sqrt(c2));
  let a2 = u2 * u2 + e3 * e3;
  a2 > 0 && (a2 = 1 / Math.sqrt(a2));
  const s2 = (r2 * u2 + o3 * e3) * c2 * a2;
  return s2 > 1 ? 0 : s2 < -1 ? Math.PI : Math.acos(s2);
}
function O(t) {
  return "vec2(" + t[0] + ", " + t[1] + ")";
}
function E(t, n) {
  return t[0] === n[0] && t[1] === n[1];
}
function T(t, r2) {
  const o3 = t[0], u2 = t[1], e3 = r2[0], c2 = r2[1], a2 = e();
  return Math.abs(o3 - e3) <= a2 * Math.max(1, Math.abs(o3), Math.abs(e3)) && Math.abs(u2 - c2) <= a2 * Math.max(1, Math.abs(u2), Math.abs(c2));
}
function k(t, n, r2, o3, u2) {
  let e3 = n[0] - r2[0], c2 = n[1] - r2[1];
  const a2 = (o3[0] * e3 + o3[1] * c2) * (u2 - 1);
  return e3 = o3[0] * a2, c2 = o3[1] * a2, t[0] = n[0] + e3, t[1] = n[1] + c2, t;
}
var w = q;
var B = e2;
var C = c;
var F = a;
var G = m;
var H = b;
var J = p;
var K = Object.freeze(Object.defineProperty({ __proto__: null, add: u, angle: L, ceil: s, copy: r, cross: y, dist: G, distance: m, div: F, divide: a, dot: j, equals: T, exactEquals: E, floor: i, inverse: g, len: w, length: q, lerp: _, max: M, min: f, mul: C, multiply: c, negate: x, normalize: v, projectAndScale: k, random: A, rotate: I, round: h, scale: l, scaleAndAdd: d, set: o2, sqrDist: H, sqrLen: J, squaredDistance: b, squaredLength: p, str: O, sub: B, subtract: e2, transformMat2: P, transformMat2d: S, transformMat3: z, transformMat4: D }, Symbol.toStringTag, { value: "Module" }));

export {
  r,
  o2 as o,
  u,
  e2 as e,
  f,
  M,
  l,
  d,
  m,
  b,
  q,
  p,
  x,
  v,
  j,
  y,
  _,
  P,
  S,
  I,
  L,
  E,
  T,
  k,
  B,
  G
};
//# sourceMappingURL=chunk-K35H6D4D.js.map
