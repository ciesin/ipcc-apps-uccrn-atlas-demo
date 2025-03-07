import {
  e as e3
} from "./chunk-NOMJWA3C.js";
import {
  e as e2
} from "./chunk-K24WU5UX.js";
import {
  A,
  P,
  Y,
  _ as _2
} from "./chunk-UMYFDXOJ.js";
import {
  E,
  L,
  _,
  a,
  j,
  m,
  o as o2,
  p,
  q,
  s,
  y
} from "./chunk-363AT5UF.js";
import {
  e,
  o
} from "./chunk-PUM22WTC.js";
import {
  n,
  r
} from "./chunk-JLFSX3JT.js";

// node_modules/@arcgis/core/core/libs/gl-matrix-2/math/quat.js
function I(t) {
  return t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t;
}
function b(t, n2, s2) {
  s2 *= 0.5;
  const o3 = Math.sin(s2);
  return t[0] = o3 * n2[0], t[1] = o3 * n2[1], t[2] = o3 * n2[2], t[3] = Math.cos(s2), t;
}
function v(t, n2) {
  const s2 = 2 * Math.acos(n2[3]), o3 = Math.sin(s2 / 2);
  return o3 > e() ? (t[0] = n2[0] / o3, t[1] = n2[1] / o3, t[2] = n2[2] / o3) : (t[0] = 1, t[1] = 0, t[2] = 0), s2;
}
function x(t, n2, s2) {
  const o3 = n2[0], a2 = n2[1], r2 = n2[2], e4 = n2[3], c = s2[0], i = s2[1], u = s2[2], h = s2[3];
  return t[0] = o3 * h + e4 * c + a2 * u - r2 * i, t[1] = a2 * h + e4 * i + r2 * c - o3 * u, t[2] = r2 * h + e4 * u + o3 * i - a2 * c, t[3] = e4 * h - o3 * c - a2 * i - r2 * u, t;
}
function y2(t, n2, s2) {
  s2 *= 0.5;
  const o3 = n2[0], a2 = n2[1], r2 = n2[2], e4 = n2[3], c = Math.sin(s2), i = Math.cos(s2);
  return t[0] = o3 * i + e4 * c, t[1] = a2 * i + r2 * c, t[2] = r2 * i - a2 * c, t[3] = e4 * i - o3 * c, t;
}
function A2(t, n2, s2) {
  s2 *= 0.5;
  const o3 = n2[0], a2 = n2[1], r2 = n2[2], e4 = n2[3], c = Math.sin(s2), i = Math.cos(s2);
  return t[0] = o3 * i - r2 * c, t[1] = a2 * i + e4 * c, t[2] = r2 * i + o3 * c, t[3] = e4 * i - a2 * c, t;
}
function _3(t, n2, s2) {
  s2 *= 0.5;
  const o3 = n2[0], a2 = n2[1], r2 = n2[2], e4 = n2[3], c = Math.sin(s2), i = Math.cos(s2);
  return t[0] = o3 * i + a2 * c, t[1] = a2 * i - o3 * c, t[2] = r2 * i + e4 * c, t[3] = e4 * i - r2 * c, t;
}
function k(t, n2) {
  const s2 = n2[0], o3 = n2[1], a2 = n2[2];
  return t[0] = s2, t[1] = o3, t[2] = a2, t[3] = Math.sqrt(Math.abs(1 - s2 * s2 - o3 * o3 - a2 * a2)), t;
}
function z(t, n2, s2, o3) {
  const r2 = n2[0], e4 = n2[1], c = n2[2], i = n2[3];
  let u, h, M, f, l, m2 = s2[0], p2 = s2[1], q2 = s2[2], j2 = s2[3];
  return h = r2 * m2 + e4 * p2 + c * q2 + i * j2, h < 0 && (h = -h, m2 = -m2, p2 = -p2, q2 = -q2, j2 = -j2), 1 - h > e() ? (u = Math.acos(h), M = Math.sin(u), f = Math.sin((1 - o3) * u) / M, l = Math.sin(o3 * u) / M) : (f = 1 - o3, l = o3), t[0] = f * r2 + l * m2, t[1] = f * e4 + l * p2, t[2] = f * c + l * q2, t[3] = f * i + l * j2, t;
}
function E2(t) {
  const n2 = o, s2 = n2(), o3 = n2(), a2 = n2(), e4 = Math.sqrt(1 - s2), c = Math.sqrt(s2);
  return t[0] = e4 * Math.sin(2 * Math.PI * o3), t[1] = e4 * Math.cos(2 * Math.PI * o3), t[2] = c * Math.sin(2 * Math.PI * a2), t[3] = c * Math.cos(2 * Math.PI * a2), t;
}
function L2(t, n2) {
  const s2 = n2[0], o3 = n2[1], a2 = n2[2], r2 = n2[3], e4 = s2 * s2 + o3 * o3 + a2 * a2 + r2 * r2, c = e4 ? 1 / e4 : 0;
  return t[0] = -s2 * c, t[1] = -o3 * c, t[2] = -a2 * c, t[3] = r2 * c, t;
}
function O(t, n2) {
  return t[0] = -n2[0], t[1] = -n2[1], t[2] = -n2[2], t[3] = n2[3], t;
}
function S(t, n2) {
  const s2 = n2[0] + n2[4] + n2[8];
  let o3;
  if (s2 > 0) o3 = Math.sqrt(s2 + 1), t[3] = 0.5 * o3, o3 = 0.5 / o3, t[0] = (n2[5] - n2[7]) * o3, t[1] = (n2[6] - n2[2]) * o3, t[2] = (n2[1] - n2[3]) * o3;
  else {
    let s3 = 0;
    n2[4] > n2[0] && (s3 = 1), n2[8] > n2[3 * s3 + s3] && (s3 = 2);
    const a2 = (s3 + 1) % 3, r2 = (s3 + 2) % 3;
    o3 = Math.sqrt(n2[3 * s3 + s3] - n2[3 * a2 + a2] - n2[3 * r2 + r2] + 1), t[s3] = 0.5 * o3, o3 = 0.5 / o3, t[3] = (n2[3 * a2 + r2] - n2[3 * r2 + a2]) * o3, t[a2] = (n2[3 * a2 + s3] + n2[3 * s3 + a2]) * o3, t[r2] = (n2[3 * r2 + s3] + n2[3 * s3 + r2]) * o3;
  }
  return t;
}
function T(t, n2, s2, o3) {
  const a2 = 0.5 * Math.PI / 180;
  n2 *= a2, s2 *= a2, o3 *= a2;
  const r2 = Math.sin(n2), e4 = Math.cos(n2), c = Math.sin(s2), i = Math.cos(s2), u = Math.sin(o3), h = Math.cos(o3);
  return t[0] = r2 * i * h - e4 * c * u, t[1] = e4 * c * h + r2 * i * u, t[2] = e4 * i * u - r2 * c * h, t[3] = e4 * i * h + r2 * c * u, t;
}
function H(t) {
  return "quat(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ")";
}
var W = a;
var X = s;
var Y2 = o2;
var Z = x;
var w = m;
var B = j;
var C = _;
var D = q;
var F = D;
var G = p;
var J = G;
var K = y;
var N = E;
var Q = L;
function R(t, n2, s2) {
  const o3 = P(n2, s2);
  return o3 < -0.999999 ? (_2(U, V, n2), Y(U) < 1e-6 && _2(U, $, n2), A(U, U), b(t, U, Math.PI), t) : o3 > 0.999999 ? (t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, t) : (_2(U, n2, s2), t[0] = U[0], t[1] = U[1], t[2] = U[2], t[3] = 1 + o3, K(t, t));
}
var U = n();
var V = r(1, 0, 0);
var $ = r(0, 1, 0);
function tt(t, n2, s2, o3, a2, r2) {
  return z(nt, n2, a2, r2), z(st, s2, o3, r2), z(t, nt, st, 2 * r2 * (1 - r2)), t;
}
var nt = e3();
var st = e3();
function ot(t, n2, s2, o3) {
  const a2 = at;
  return a2[0] = s2[0], a2[3] = s2[1], a2[6] = s2[2], a2[1] = o3[0], a2[4] = o3[1], a2[7] = o3[2], a2[2] = -n2[0], a2[5] = -n2[1], a2[8] = -n2[2], K(t, S(t, a2));
}
var at = e2();
var rt = Object.freeze(Object.defineProperty({ __proto__: null, add: Y2, calculateW: k, conjugate: O, copy: W, dot: B, equals: Q, exactEquals: N, fromEuler: T, fromMat3: S, getAxisAngle: v, identity: I, invert: L2, len: F, length: D, lerp: C, mul: Z, multiply: x, normalize: K, random: E2, rotateX: y2, rotateY: A2, rotateZ: _3, rotationTo: R, scale: w, set: X, setAxes: ot, setAxisAngle: b, slerp: z, sqlerp: tt, sqrLen: J, squaredLength: G, str: H }, Symbol.toStringTag, { value: "Module" }));

export {
  b,
  v,
  x,
  L2 as L,
  O,
  T,
  X,
  N,
  R
};
//# sourceMappingURL=chunk-HONYA6AI.js.map
