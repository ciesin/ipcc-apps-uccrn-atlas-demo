import {
  e,
  o
} from "./chunk-PUM22WTC.js";

// node_modules/@arcgis/core/chunks/vec42.js
function a(t, n) {
  return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t;
}
function r(t, n) {
  return t[0] = n[0], t[1] = n[1], t[2] = n[2], t;
}
function s(t, n, a2, r2, s2) {
  return t[0] = n, t[1] = a2, t[2] = r2, t[3] = s2, t;
}
function o2(t, n, a2) {
  return t[0] = n[0] + a2[0], t[1] = n[1] + a2[1], t[2] = n[2] + a2[2], t[3] = n[3] + a2[3], t;
}
function u(t, n, a2) {
  return t[0] = n[0] - a2[0], t[1] = n[1] - a2[1], t[2] = n[2] - a2[2], t[3] = n[3] - a2[3], t;
}
function e2(t, n, a2) {
  return t[0] = n[0] * a2[0], t[1] = n[1] * a2[1], t[2] = n[2] * a2[2], t[3] = n[3] * a2[3], t;
}
function c(t, n, a2) {
  return t[0] = n[0] / a2[0], t[1] = n[1] / a2[1], t[2] = n[2] / a2[2], t[3] = n[3] / a2[3], t;
}
function i(t, n) {
  return t[0] = Math.ceil(n[0]), t[1] = Math.ceil(n[1]), t[2] = Math.ceil(n[2]), t[3] = Math.ceil(n[3]), t;
}
function h(t, n) {
  return t[0] = Math.floor(n[0]), t[1] = Math.floor(n[1]), t[2] = Math.floor(n[2]), t[3] = Math.floor(n[3]), t;
}
function M(t, n, a2) {
  return t[0] = Math.min(n[0], a2[0]), t[1] = Math.min(n[1], a2[1]), t[2] = Math.min(n[2], a2[2]), t[3] = Math.min(n[3], a2[3]), t;
}
function f(t, n, a2) {
  return t[0] = Math.max(n[0], a2[0]), t[1] = Math.max(n[1], a2[1]), t[2] = Math.max(n[2], a2[2]), t[3] = Math.max(n[3], a2[3]), t;
}
function l(t, n) {
  return t[0] = Math.round(n[0]), t[1] = Math.round(n[1]), t[2] = Math.round(n[2]), t[3] = Math.round(n[3]), t;
}
function m(t, n, a2) {
  return t[0] = n[0] * a2, t[1] = n[1] * a2, t[2] = n[2] * a2, t[3] = n[3] * a2, t;
}
function d(t, n, a2, r2) {
  return t[0] = n[0] + a2[0] * r2, t[1] = n[1] + a2[1] * r2, t[2] = n[2] + a2[2] * r2, t[3] = n[3] + a2[3] * r2, t;
}
function b(t, n) {
  const a2 = n[0] - t[0], r2 = n[1] - t[1], s2 = n[2] - t[2], o3 = n[3] - t[3];
  return Math.sqrt(a2 * a2 + r2 * r2 + s2 * s2 + o3 * o3);
}
function x(t, n) {
  const a2 = n[0] - t[0], r2 = n[1] - t[1], s2 = n[2] - t[2], o3 = n[3] - t[3];
  return a2 * a2 + r2 * r2 + s2 * s2 + o3 * o3;
}
function q(t) {
  const n = t[0], a2 = t[1], r2 = t[2], s2 = t[3];
  return Math.sqrt(n * n + a2 * a2 + r2 * r2 + s2 * s2);
}
function p(t) {
  const n = t[0], a2 = t[1], r2 = t[2], s2 = t[3];
  return n * n + a2 * a2 + r2 * r2 + s2 * s2;
}
function g(t, n) {
  return t[0] = -n[0], t[1] = -n[1], t[2] = -n[2], t[3] = -n[3], t;
}
function v(t, n) {
  return t[0] = 1 / n[0], t[1] = 1 / n[1], t[2] = 1 / n[2], t[3] = 1 / n[3], t;
}
function y(t, n) {
  const a2 = n[0], r2 = n[1], s2 = n[2], o3 = n[3];
  let u2 = a2 * a2 + r2 * r2 + s2 * s2 + o3 * o3;
  return u2 > 0 && (u2 = 1 / Math.sqrt(u2), t[0] = a2 * u2, t[1] = r2 * u2, t[2] = s2 * u2, t[3] = o3 * u2), t;
}
function j(t, n) {
  return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3];
}
function _(t, n, a2, r2) {
  const s2 = n[0], o3 = n[1], u2 = n[2], e3 = n[3];
  return t[0] = s2 + r2 * (a2[0] - s2), t[1] = o3 + r2 * (a2[1] - o3), t[2] = u2 + r2 * (a2[2] - u2), t[3] = e3 + r2 * (a2[3] - e3), t;
}
function w(t, a2 = 1) {
  const r2 = o;
  let s2, o3, u2, e3, c2, i2;
  do {
    s2 = 2 * r2() - 1, o3 = 2 * r2() - 1, c2 = s2 * s2 + o3 * o3;
  } while (c2 >= 1);
  do {
    u2 = 2 * r2() - 1, e3 = 2 * r2() - 1, i2 = u2 * u2 + e3 * e3;
  } while (i2 >= 1);
  const h2 = Math.sqrt((1 - c2) / i2);
  return t[0] = a2 * s2, t[1] = a2 * o3, t[2] = a2 * u2 * h2, t[3] = a2 * e3 * h2, t;
}
function z(t, n, a2) {
  const r2 = n[0], s2 = n[1], o3 = n[2], u2 = n[3];
  return t[0] = a2[0] * r2 + a2[4] * s2 + a2[8] * o3 + a2[12] * u2, t[1] = a2[1] * r2 + a2[5] * s2 + a2[9] * o3 + a2[13] * u2, t[2] = a2[2] * r2 + a2[6] * s2 + a2[10] * o3 + a2[14] * u2, t[3] = a2[3] * r2 + a2[7] * s2 + a2[11] * o3 + a2[15] * u2, t;
}
function A(t, n, a2) {
  const r2 = n[0], s2 = n[1], o3 = n[2], u2 = a2[0], e3 = a2[1], c2 = a2[2], i2 = a2[3], h2 = i2 * r2 + e3 * o3 - c2 * s2, M2 = i2 * s2 + c2 * r2 - u2 * o3, f2 = i2 * o3 + u2 * s2 - e3 * r2, l2 = -u2 * r2 - e3 * s2 - c2 * o3;
  return t[0] = h2 * i2 + l2 * -u2 + M2 * -c2 - f2 * -e3, t[1] = M2 * i2 + l2 * -e3 + f2 * -u2 - h2 * -c2, t[2] = f2 * i2 + l2 * -c2 + h2 * -e3 - M2 * -u2, t[3] = n[3], t;
}
function D(t) {
  return "vec4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
}
function E(t, n) {
  return t[0] === n[0] && t[1] === n[1] && t[2] === n[2] && t[3] === n[3];
}
function L(n, a2) {
  const r2 = n[0], s2 = n[1], o3 = n[2], u2 = n[3], e3 = a2[0], c2 = a2[1], i2 = a2[2], h2 = a2[3], M2 = e();
  return Math.abs(r2 - e3) <= M2 * Math.max(1, Math.abs(r2), Math.abs(e3)) && Math.abs(s2 - c2) <= M2 * Math.max(1, Math.abs(s2), Math.abs(c2)) && Math.abs(o3 - i2) <= M2 * Math.max(1, Math.abs(o3), Math.abs(i2)) && Math.abs(u2 - h2) <= M2 * Math.max(1, Math.abs(u2), Math.abs(h2));
}
var O = u;
var S = e2;
var k = c;
var B = b;
var C = x;
var F = q;
var G = p;
var H = Object.freeze(Object.defineProperty({ __proto__: null, add: o2, ceil: i, copy: a, copyVec3: r, dist: B, distance: b, div: k, divide: c, dot: j, equals: L, exactEquals: E, floor: h, inverse: v, len: F, length: q, lerp: _, max: f, min: M, mul: S, multiply: e2, negate: g, normalize: y, random: w, round: l, scale: m, scaleAndAdd: d, set: s, sqrDist: C, sqrLen: G, squaredDistance: x, squaredLength: p, str: D, sub: O, subtract: u, transformMat4: z, transformQuat: A }, Symbol.toStringTag, { value: "Module" }));

export {
  a,
  s,
  o2 as o,
  m,
  x,
  q,
  p,
  y,
  j,
  _,
  z,
  E,
  L
};
//# sourceMappingURL=chunk-363AT5UF.js.map
