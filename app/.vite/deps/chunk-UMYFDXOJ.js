import {
  e,
  o
} from "./chunk-PUM22WTC.js";
import {
  n
} from "./chunk-JLFSX3JT.js";

// node_modules/@arcgis/core/chunks/vec32.js
function r(t) {
  const n2 = t[0], a = t[1], r2 = t[2];
  return Math.sqrt(n2 * n2 + a * a + r2 * r2);
}
function s(t, n2) {
  return t[0] = n2[0], t[1] = n2[1], t[2] = n2[2], t;
}
function o2(t, n2, a, r2) {
  return t[0] = n2, t[1] = a, t[2] = r2, t;
}
function u(t, n2, a) {
  return t[0] = n2[0] + a[0], t[1] = n2[1] + a[1], t[2] = n2[2] + a[2], t;
}
function c(t, n2, a) {
  return t[0] = n2[0] - a[0], t[1] = n2[1] - a[1], t[2] = n2[2] - a[2], t;
}
function e2(t, n2, a) {
  return t[0] = n2[0] * a[0], t[1] = n2[1] * a[1], t[2] = n2[2] * a[2], t;
}
function i(t, n2, a) {
  return t[0] = n2[0] / a[0], t[1] = n2[1] / a[1], t[2] = n2[2] / a[2], t;
}
function h(t, n2) {
  return t[0] = Math.ceil(n2[0]), t[1] = Math.ceil(n2[1]), t[2] = Math.ceil(n2[2]), t;
}
function M(t, n2) {
  return t[0] = Math.floor(n2[0]), t[1] = Math.floor(n2[1]), t[2] = Math.floor(n2[2]), t;
}
function f(t, n2) {
  return t[0] = Math.abs(n2[0]), t[1] = Math.abs(n2[1]), t[2] = Math.abs(n2[2]), t;
}
function m(t, n2) {
  return t[0] = Math.sign(n2[0]), t[1] = Math.sign(n2[1]), t[2] = Math.sign(n2[2]), t;
}
function l(t, n2, a) {
  return t[0] = Math.min(n2[0], a[0]), t[1] = Math.min(n2[1], a[1]), t[2] = Math.min(n2[2], a[2]), t;
}
function d(t, n2, a) {
  return t[0] = Math.max(n2[0], a[0]), t[1] = Math.max(n2[1], a[1]), t[2] = Math.max(n2[2], a[2]), t;
}
function b(t, n2 = 0, a = 1) {
  return t[0] = Math.min(Math.max(t[0], n2), a), t[1] = Math.min(Math.max(t[1], n2), a), t[2] = Math.min(Math.max(t[2], n2), a), t;
}
function x(t, n2) {
  return t[0] = Math.round(n2[0]), t[1] = Math.round(n2[1]), t[2] = Math.round(n2[2]), t;
}
function g(t, n2, a) {
  return t[0] = n2[0] * a, t[1] = n2[1] * a, t[2] = n2[2] * a, t;
}
function q(t, n2, a, r2) {
  return t[0] = n2[0] + a[0] * r2, t[1] = n2[1] + a[1] * r2, t[2] = n2[2] + a[2] * r2, t;
}
function p(t, n2) {
  const a = n2[0] - t[0], r2 = n2[1] - t[1], s2 = n2[2] - t[2];
  return Math.sqrt(a * a + r2 * r2 + s2 * s2);
}
function v(t, n2) {
  const a = n2[0] - t[0], r2 = n2[1] - t[1], s2 = n2[2] - t[2];
  return a * a + r2 * r2 + s2 * s2;
}
function j(t) {
  const n2 = t[0], a = t[1], r2 = t[2];
  return n2 * n2 + a * a + r2 * r2;
}
function y(t, n2) {
  return t[0] = -n2[0], t[1] = -n2[1], t[2] = -n2[2], t;
}
function z(t, n2) {
  return t[0] = 1 / n2[0], t[1] = 1 / n2[1], t[2] = 1 / n2[2], t;
}
function A(t, n2) {
  const a = n2[0], r2 = n2[1], s2 = n2[2];
  let o3 = a * a + r2 * r2 + s2 * s2;
  return o3 > 0 && (o3 = 1 / Math.sqrt(o3), t[0] = n2[0] * o3, t[1] = n2[1] * o3, t[2] = n2[2] * o3), t;
}
function P(t, n2) {
  return t[0] * n2[0] + t[1] * n2[1] + t[2] * n2[2];
}
function _(t, n2, a) {
  const r2 = n2[0], s2 = n2[1], o3 = n2[2], u2 = a[0], c2 = a[1], e3 = a[2];
  return t[0] = s2 * e3 - o3 * c2, t[1] = o3 * u2 - r2 * e3, t[2] = r2 * c2 - s2 * u2, t;
}
function D(t, n2, a) {
  const r2 = n2[0], s2 = n2[1], o3 = n2[2], u2 = a[0], c2 = a[1], e3 = a[2], i2 = s2 * e3 - o3 * c2, h2 = o3 * u2 - r2 * e3, M2 = r2 * c2 - s2 * u2, f2 = Math.sqrt(i2 * i2 + h2 * h2 + M2 * M2);
  return t[0] = i2 / f2, t[1] = h2 / f2, t[2] = M2 / f2, t;
}
function I(t, n2, a, r2) {
  const s2 = n2[0], o3 = n2[1], u2 = n2[2];
  return t[0] = s2 + r2 * (a[0] - s2), t[1] = o3 + r2 * (a[1] - o3), t[2] = u2 + r2 * (a[2] - u2), t;
}
function L(t, n2, a, r2, s2, o3) {
  const u2 = o3 * o3, c2 = u2 * (2 * o3 - 3) + 1, e3 = u2 * (o3 - 2) + o3, i2 = u2 * (o3 - 1), h2 = u2 * (3 - 2 * o3);
  return t[0] = n2[0] * c2 + a[0] * e3 + r2[0] * i2 + s2[0] * h2, t[1] = n2[1] * c2 + a[1] * e3 + r2[1] * i2 + s2[1] * h2, t[2] = n2[2] * c2 + a[2] * e3 + r2[2] * i2 + s2[2] * h2, t;
}
function O(t, n2, a, r2, s2, o3) {
  const u2 = 1 - o3, c2 = u2 * u2, e3 = o3 * o3, i2 = c2 * u2, h2 = 3 * o3 * c2, M2 = 3 * e3 * u2, f2 = e3 * o3;
  return t[0] = n2[0] * i2 + a[0] * h2 + r2[0] * M2 + s2[0] * f2, t[1] = n2[1] * i2 + a[1] * h2 + r2[1] * M2 + s2[1] * f2, t[2] = n2[2] * i2 + a[2] * h2 + r2[2] * M2 + s2[2] * f2, t;
}
function S(t, n2 = 1) {
  const r2 = o, s2 = 2 * r2() * Math.PI, o3 = 2 * r2() - 1, u2 = Math.sqrt(1 - o3 * o3) * n2;
  return t[0] = Math.cos(s2) * u2, t[1] = Math.sin(s2) * u2, t[2] = o3 * n2, t;
}
function E(t, n2, a) {
  const r2 = n2[0], s2 = n2[1], o3 = n2[2];
  return t[0] = a[0] * r2 + a[4] * s2 + a[8] * o3 + a[12], t[1] = a[1] * r2 + a[5] * s2 + a[9] * o3 + a[13], t[2] = a[2] * r2 + a[6] * s2 + a[10] * o3 + a[14], t;
}
function N(t, n2, a) {
  const r2 = n2[0], s2 = n2[1], o3 = n2[2];
  return t[0] = r2 * a[0] + s2 * a[3] + o3 * a[6], t[1] = r2 * a[1] + s2 * a[4] + o3 * a[7], t[2] = r2 * a[2] + s2 * a[5] + o3 * a[8], t;
}
function Q(t, n2, a) {
  const r2 = a[0], s2 = a[1], o3 = a[2], u2 = a[3], c2 = n2[0], e3 = n2[1], i2 = n2[2], h2 = s2 * i2 - o3 * e3, M2 = o3 * c2 - r2 * i2, f2 = r2 * e3 - s2 * c2, m2 = s2 * f2 - o3 * M2, l2 = o3 * h2 - r2 * f2, d2 = r2 * M2 - s2 * h2, b2 = 2 * u2;
  return t[0] = c2 + h2 * b2 + 2 * m2, t[1] = e3 + M2 * b2 + 2 * l2, t[2] = i2 + f2 * b2 + 2 * d2, t;
}
function T(t, n2, a, r2) {
  const s2 = [], o3 = [];
  return s2[0] = n2[0] - a[0], s2[1] = n2[1] - a[1], s2[2] = n2[2] - a[2], o3[0] = s2[0], o3[1] = s2[1] * Math.cos(r2) - s2[2] * Math.sin(r2), o3[2] = s2[1] * Math.sin(r2) + s2[2] * Math.cos(r2), t[0] = o3[0] + a[0], t[1] = o3[1] + a[1], t[2] = o3[2] + a[2], t;
}
function k(t, n2, a, r2) {
  const s2 = [], o3 = [];
  return s2[0] = n2[0] - a[0], s2[1] = n2[1] - a[1], s2[2] = n2[2] - a[2], o3[0] = s2[2] * Math.sin(r2) + s2[0] * Math.cos(r2), o3[1] = s2[1], o3[2] = s2[2] * Math.cos(r2) - s2[0] * Math.sin(r2), t[0] = o3[0] + a[0], t[1] = o3[1] + a[1], t[2] = o3[2] + a[2], t;
}
function w(t, n2, a, r2) {
  const s2 = [], o3 = [];
  return s2[0] = n2[0] - a[0], s2[1] = n2[1] - a[1], s2[2] = n2[2] - a[2], o3[0] = s2[0] * Math.cos(r2) - s2[1] * Math.sin(r2), o3[1] = s2[0] * Math.sin(r2) + s2[1] * Math.cos(r2), o3[2] = s2[2], t[0] = o3[0] + a[0], t[1] = o3[1] + a[1], t[2] = o3[2] + a[2], t;
}
function B(t, n2) {
  A(C, t), A(F, n2);
  const a = P(C, F);
  return a > 1 ? 0 : a < -1 ? Math.PI : Math.acos(a);
}
var C = n();
var F = n();
function G(t) {
  return "vec3(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
}
function H(t, n2) {
  return t[0] === n2[0] && t[1] === n2[1] && t[2] === n2[2];
}
function J(t, a) {
  if (t === a) return true;
  const r2 = t[0], s2 = t[1], o3 = t[2], u2 = a[0], c2 = a[1], e3 = a[2], i2 = e();
  return Math.abs(r2 - u2) <= i2 * Math.max(1, Math.abs(r2), Math.abs(u2)) && Math.abs(s2 - c2) <= i2 * Math.max(1, Math.abs(s2), Math.abs(c2)) && Math.abs(o3 - e3) <= i2 * Math.max(1, Math.abs(o3), Math.abs(e3));
}
function K(t, n2, a) {
  const r2 = a[0] - n2[0], s2 = a[1] - n2[1], o3 = a[2] - n2[2];
  let u2 = r2 * r2 + s2 * s2 + o3 * o3;
  return u2 > 0 ? (u2 = 1 / Math.sqrt(u2), t[0] = r2 * u2, t[1] = s2 * u2, t[2] = o3 * u2, t) : (t[0] = 0, t[1] = 0, t[2] = 0, t);
}
var R = c;
var U = e2;
var V = i;
var W = p;
var X = v;
var Y = r;
var Z = j;
var $ = Object.freeze(Object.defineProperty({ __proto__: null, abs: f, add: u, angle: B, bezier: O, ceil: h, clamp: b, copy: s, cross: _, crossAndNormalize: D, direction: K, dist: W, distance: p, div: V, divide: i, dot: P, equals: J, exactEquals: H, floor: M, hermite: L, inverse: z, len: Y, length: r, lerp: I, max: d, min: l, mul: U, multiply: e2, negate: y, normalize: A, random: S, rotateX: T, rotateY: k, rotateZ: w, round: x, scale: g, scaleAndAdd: q, set: o2, sign: m, sqrDist: X, sqrLen: Z, squaredDistance: v, squaredLength: j, str: G, sub: R, subtract: c, transformMat3: N, transformMat4: E, transformQuat: Q }, Symbol.toStringTag, { value: "Module" }));

export {
  r,
  s,
  o2 as o,
  u,
  c,
  e2 as e,
  i,
  f,
  m,
  l,
  d,
  b,
  g,
  q,
  p,
  v,
  j,
  y,
  z,
  A,
  P,
  _,
  I,
  E,
  N,
  Q,
  w,
  B,
  H,
  J,
  K,
  R,
  W,
  X,
  Y,
  Z
};
//# sourceMappingURL=chunk-UMYFDXOJ.js.map
