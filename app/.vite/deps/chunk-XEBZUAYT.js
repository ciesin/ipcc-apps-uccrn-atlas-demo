import {
  u
} from "./chunk-G34KEQQG.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  m,
  s2 as s
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/geometry/support/DoubleArray.js
function t(n, t2 = false) {
  return n <= m ? t2 ? new Array(n).fill(0) : new Array(n) : new Float64Array(n);
}
function e(t2) {
  return (s(t2) ? t2.byteLength / 8 : t2.length) <= m ? Array.from(t2) : new Float64Array(t2);
}
function a(r, n, t2) {
  return Array.isArray(r) ? r.slice(n, n + t2) : r.subarray(n, n + t2);
}

// node_modules/@arcgis/core/geometry/support/aaBoundingBox.js
function i(n) {
  return n;
}
function u2(n = L) {
  return i([n[0], n[1], n[2], n[3], n[4], n[5]]);
}
function a2(n, t2, r, i2, a3, e2, m3 = u2()) {
  return m3[0] = n, m3[1] = t2, m3[2] = r, m3[3] = i2, m3[4] = a3, m3[5] = e2, m3;
}
function m2(n, t2 = u2()) {
  return o(n, 0, n.length / 3, t2);
}
function o(n, t2, r, i2 = u2()) {
  return d(i2, K), s2(i2, n, t2, r), i2;
}
function f(n, t2 = t(24)) {
  const [i2, u3, a3, e2, m3, o2] = n;
  return t2[0] = i2, t2[1] = u3, t2[2] = a3, t2[3] = i2, t2[4] = u3, t2[5] = o2, t2[6] = i2, t2[7] = m3, t2[8] = a3, t2[9] = i2, t2[10] = m3, t2[11] = o2, t2[12] = e2, t2[13] = u3, t2[14] = a3, t2[15] = e2, t2[16] = u3, t2[17] = o2, t2[18] = e2, t2[19] = m3, t2[20] = a3, t2[21] = e2, t2[22] = m3, t2[23] = o2, t2;
}
function c(t2, r) {
  const i2 = isFinite(t2[2]) || isFinite(t2[5]);
  return new w(i2 ? { xmin: t2[0], xmax: t2[3], ymin: t2[1], ymax: t2[4], zmin: t2[2], zmax: t2[5], spatialReference: r } : { xmin: t2[0], xmax: t2[3], ymin: t2[1], ymax: t2[4], spatialReference: r });
}
function M(n, t2) {
  n[0] = Math.min(n[0], t2[0]), n[1] = Math.min(n[1], t2[1]), n[2] = Math.min(n[2], t2[2]), n[3] = Math.max(n[3], t2[3]), n[4] = Math.max(n[4], t2[4]), n[5] = Math.max(n[5], t2[5]);
}
function x(n, t2) {
  n[0] = Math.min(n[0], t2[0]), n[1] = Math.min(n[1], t2[1]), n[3] = Math.max(n[3], t2[2]), n[4] = Math.max(n[4], t2[3]);
}
function l(n, t2) {
  n[0] = Math.min(n[0], t2[0]), n[1] = Math.min(n[1], t2[1]), n[2] = Math.min(n[2], t2[2]), n[3] = Math.max(n[3], t2[0]), n[4] = Math.max(n[4], t2[1]), n[5] = Math.max(n[5], t2[2]);
}
function s2(n, t2, r = 0, i2 = t2.length / 3) {
  let u3 = n[0], a3 = n[1], e2 = n[2], m3 = n[3], o2 = n[4], f2 = n[5];
  for (let c2 = 0; c2 < i2; c2++) u3 = Math.min(u3, t2[r + 3 * c2]), a3 = Math.min(a3, t2[r + 3 * c2 + 1]), e2 = Math.min(e2, t2[r + 3 * c2 + 2]), m3 = Math.max(m3, t2[r + 3 * c2]), o2 = Math.max(o2, t2[r + 3 * c2 + 1]), f2 = Math.max(f2, t2[r + 3 * c2 + 2]);
  n[0] = u3, n[1] = a3, n[2] = e2, n[3] = m3, n[4] = o2, n[5] = f2;
}
function N(n, t2, r) {
  const i2 = t2.length;
  let u3 = n[0], a3 = n[1], e2 = n[2], m3 = n[3], o2 = n[4], f2 = n[5];
  if (r) for (let c2 = 0; c2 < i2; c2++) {
    const n2 = t2[c2];
    u3 = Math.min(u3, n2[0]), a3 = Math.min(a3, n2[1]), e2 = Math.min(e2, n2[2]), m3 = Math.max(m3, n2[0]), o2 = Math.max(o2, n2[1]), f2 = Math.max(f2, n2[2]);
  }
  else for (let c2 = 0; c2 < i2; c2++) {
    const n2 = t2[c2];
    u3 = Math.min(u3, n2[0]), a3 = Math.min(a3, n2[1]), m3 = Math.max(m3, n2[0]), o2 = Math.max(o2, n2[1]);
  }
  n[0] = u3, n[1] = a3, n[2] = e2, n[3] = m3, n[4] = o2, n[5] = f2;
}
function T(n) {
  for (let t2 = 0; t2 < 6; t2++) if (!isFinite(n[t2])) return false;
  return true;
}
function g(n) {
  return n[0] >= n[3] ? 0 : n[3] - n[0];
}
function y(n) {
  return n[1] >= n[4] ? 0 : n[4] - n[1];
}
function E(n) {
  return n[2] >= n[5] ? 0 : n[5] - n[2];
}
function F(n) {
  const t2 = g(n), r = E(n), i2 = y(n);
  return Math.sqrt(t2 * t2 + r * r + i2 * i2);
}
function p(n, t2 = [0, 0, 0]) {
  return t2[0] = n[0] + g(n) / 2, t2[1] = n[1] + y(n) / 2, t2[2] = n[2] + E(n) / 2, t2;
}
function b(n, t2 = [0, 0, 0]) {
  return t2[0] = g(n), t2[1] = y(n), t2[2] = E(n), t2;
}
function V(n, t2) {
  return t2[0] >= n[0] && t2[1] >= n[1] && t2[2] >= n[2] && t2[0] <= n[3] && t2[1] <= n[4] && t2[2] <= n[5];
}
function j(n, t2) {
  return Math.max(t2[0], n[0]) <= Math.min(t2[3], n[3]) && Math.max(t2[1], n[1]) <= Math.min(t2[4], n[4]) && Math.max(t2[2], n[2]) <= Math.min(t2[5], n[5]);
}
function A(n, t2) {
  return null == t2 || j(n, t2);
}
function R(n, t2, r, i2, u3 = n) {
  return u3[0] = n[0] + t2, u3[1] = n[1] + r, u3[2] = n[2] + i2, u3[3] = n[3] + t2, u3[4] = n[4] + r, u3[5] = n[5] + i2, u3;
}
function G(n, t2, r = n) {
  const i2 = n[0] + g(n) / 2, u3 = n[1] + y(n) / 2, a3 = n[2] + E(n) / 2;
  return r[0] = i2 + (n[0] - i2) * t2, r[1] = u3 + (n[1] - u3) * t2, r[2] = a3 + (n[2] - a3) * t2, r[3] = i2 + (n[3] - i2) * t2, r[4] = u3 + (n[4] - u3) * t2, r[5] = a3 + (n[5] - a3) * t2, r;
}
function O(n, t2) {
  return t2[0] = n[0], t2[1] = n[1], t2[2] = n[2], t2;
}
function S(n, t2, r = n) {
  return r[0] = t2[0], r[1] = t2[1], r[2] = t2[2], r !== n && (r[3] = n[3], r[4] = n[4], r[5] = n[5]), r;
}
function Z(n, t2, r = n) {
  return r[3] = t2[0], r[4] = t2[1], r[5] = t2[2], r !== n && (r[0] = n[0], r[1] = n[1], r[2] = n[2]), n;
}
function d(n, t2) {
  return n[0] = t2[0], n[1] = t2[1], n[2] = t2[2], n[3] = t2[3], n[4] = t2[4], n[5] = t2[5], n;
}
function q(n) {
  return n ? d(n, K) : u2(K);
}
function w2(n, r) {
  return r || (r = u()), r[0] = n[0], r[1] = n[1], r[2] = n[3], r[3] = n[4], r;
}
function B(n, t2) {
  return n[0] = t2[0], n[1] = t2[1], n[2] = Number.NEGATIVE_INFINITY, n[3] = t2[2], n[4] = t2[3], n[5] = Number.POSITIVE_INFINITY, n;
}
function D(n, t2, r, i2, u3) {
  return n[0] = t2, n[1] = r, n[2] = Number.NEGATIVE_INFINITY, n[3] = i2, n[4] = u3, n[5] = Number.POSITIVE_INFINITY, n;
}
function k(n) {
  return 6 === n.length;
}
function v(n) {
  return 0 === g(n) && 0 === y(n) && 0 === E(n);
}
function C(n, t2, r) {
  if (null == n || null == t2) return n === t2;
  if (!k(n) || !k(t2)) return false;
  if (r) {
    for (let i2 = 0; i2 < n.length; i2++) if (!r(n[i2], t2[i2])) return false;
  } else for (let i2 = 0; i2 < n.length; i2++) if (n[i2] !== t2[i2]) return false;
  return true;
}
var J = i([-1 / 0, -1 / 0, -1 / 0, 1 / 0, 1 / 0, 1 / 0]);
var K = i([1 / 0, 1 / 0, 1 / 0, -1 / 0, -1 / 0, -1 / 0]);
var L = i([0, 0, 0, 0, 0, 0]);
var Q = u2();

export {
  t,
  e,
  a,
  u2 as u,
  a2,
  m2 as m,
  o,
  f,
  c,
  M,
  x,
  l,
  s2 as s,
  N,
  T,
  g,
  y,
  E,
  F,
  p,
  b,
  V,
  A,
  R,
  G,
  O,
  S,
  Z,
  d,
  q,
  w2 as w,
  B,
  D,
  k,
  v,
  C,
  K,
  L
};
//# sourceMappingURL=chunk-XEBZUAYT.js.map
