import {
  e
} from "./chunk-PUM22WTC.js";
import {
  n
} from "./chunk-JLFSX3JT.js";

// node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js
function n2(t, a) {
  return t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[4] = a[4], t[5] = a[5], t[6] = a[6], t[7] = a[7], t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11], t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15], t;
}
function r(t, a, n3, r2, o2, s2, e3, h2, u2, M2, c2, i2, f2, b2, l2, m2, x2) {
  return t[0] = a, t[1] = n3, t[2] = r2, t[3] = o2, t[4] = s2, t[5] = e3, t[6] = h2, t[7] = u2, t[8] = M2, t[9] = c2, t[10] = i2, t[11] = f2, t[12] = b2, t[13] = l2, t[14] = m2, t[15] = x2, t;
}
function o(t) {
  return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function s(t, a) {
  if (t === a) {
    const n3 = a[1], r2 = a[2], o2 = a[3], s2 = a[6], e3 = a[7], h2 = a[11];
    t[1] = a[4], t[2] = a[8], t[3] = a[12], t[4] = n3, t[6] = a[9], t[7] = a[13], t[8] = r2, t[9] = s2, t[11] = a[14], t[12] = o2, t[13] = e3, t[14] = h2;
  } else t[0] = a[0], t[1] = a[4], t[2] = a[8], t[3] = a[12], t[4] = a[1], t[5] = a[5], t[6] = a[9], t[7] = a[13], t[8] = a[2], t[9] = a[6], t[10] = a[10], t[11] = a[14], t[12] = a[3], t[13] = a[7], t[14] = a[11], t[15] = a[15];
  return t;
}
function e2(t, a) {
  return h(t, a) || o(t), t;
}
function h(t, a) {
  const n3 = a[0], r2 = a[1], o2 = a[2], s2 = a[3], e3 = a[4], h2 = a[5], u2 = a[6], M2 = a[7], c2 = a[8], i2 = a[9], f2 = a[10], b2 = a[11], l2 = a[12], m2 = a[13], x2 = a[14], q2 = a[15], d2 = n3 * h2 - r2 * e3, p2 = n3 * u2 - o2 * e3, g2 = n3 * M2 - s2 * e3, y2 = r2 * u2 - o2 * h2, R2 = r2 * M2 - s2 * h2, v2 = o2 * M2 - s2 * u2, S2 = c2 * m2 - i2 * l2, T2 = c2 * x2 - f2 * l2, I2 = c2 * q2 - b2 * l2, O2 = i2 * x2 - f2 * m2, j2 = i2 * q2 - b2 * m2, P2 = f2 * q2 - b2 * x2;
  let D2 = d2 * P2 - p2 * j2 + g2 * O2 + y2 * I2 - R2 * T2 + v2 * S2;
  return D2 ? (D2 = 1 / D2, t[0] = (h2 * P2 - u2 * j2 + M2 * O2) * D2, t[1] = (o2 * j2 - r2 * P2 - s2 * O2) * D2, t[2] = (m2 * v2 - x2 * R2 + q2 * y2) * D2, t[3] = (f2 * R2 - i2 * v2 - b2 * y2) * D2, t[4] = (u2 * I2 - e3 * P2 - M2 * T2) * D2, t[5] = (n3 * P2 - o2 * I2 + s2 * T2) * D2, t[6] = (x2 * g2 - l2 * v2 - q2 * p2) * D2, t[7] = (c2 * v2 - f2 * g2 + b2 * p2) * D2, t[8] = (e3 * j2 - h2 * I2 + M2 * S2) * D2, t[9] = (r2 * I2 - n3 * j2 - s2 * S2) * D2, t[10] = (l2 * R2 - m2 * g2 + q2 * d2) * D2, t[11] = (i2 * g2 - c2 * R2 - b2 * d2) * D2, t[12] = (h2 * T2 - e3 * O2 - u2 * S2) * D2, t[13] = (n3 * O2 - r2 * T2 + o2 * S2) * D2, t[14] = (m2 * p2 - l2 * y2 - x2 * d2) * D2, t[15] = (c2 * y2 - i2 * p2 + f2 * d2) * D2, t) : null;
}
function u(t, a) {
  const n3 = a[0], r2 = a[1], o2 = a[2], s2 = a[3], e3 = a[4], h2 = a[5], u2 = a[6], M2 = a[7], c2 = a[8], i2 = a[9], f2 = a[10], b2 = a[11], l2 = a[12], m2 = a[13], x2 = a[14], q2 = a[15];
  return t[0] = h2 * (f2 * q2 - b2 * x2) - i2 * (u2 * q2 - M2 * x2) + m2 * (u2 * b2 - M2 * f2), t[1] = -(r2 * (f2 * q2 - b2 * x2) - i2 * (o2 * q2 - s2 * x2) + m2 * (o2 * b2 - s2 * f2)), t[2] = r2 * (u2 * q2 - M2 * x2) - h2 * (o2 * q2 - s2 * x2) + m2 * (o2 * M2 - s2 * u2), t[3] = -(r2 * (u2 * b2 - M2 * f2) - h2 * (o2 * b2 - s2 * f2) + i2 * (o2 * M2 - s2 * u2)), t[4] = -(e3 * (f2 * q2 - b2 * x2) - c2 * (u2 * q2 - M2 * x2) + l2 * (u2 * b2 - M2 * f2)), t[5] = n3 * (f2 * q2 - b2 * x2) - c2 * (o2 * q2 - s2 * x2) + l2 * (o2 * b2 - s2 * f2), t[6] = -(n3 * (u2 * q2 - M2 * x2) - e3 * (o2 * q2 - s2 * x2) + l2 * (o2 * M2 - s2 * u2)), t[7] = n3 * (u2 * b2 - M2 * f2) - e3 * (o2 * b2 - s2 * f2) + c2 * (o2 * M2 - s2 * u2), t[8] = e3 * (i2 * q2 - b2 * m2) - c2 * (h2 * q2 - M2 * m2) + l2 * (h2 * b2 - M2 * i2), t[9] = -(n3 * (i2 * q2 - b2 * m2) - c2 * (r2 * q2 - s2 * m2) + l2 * (r2 * b2 - s2 * i2)), t[10] = n3 * (h2 * q2 - M2 * m2) - e3 * (r2 * q2 - s2 * m2) + l2 * (r2 * M2 - s2 * h2), t[11] = -(n3 * (h2 * b2 - M2 * i2) - e3 * (r2 * b2 - s2 * i2) + c2 * (r2 * M2 - s2 * h2)), t[12] = -(e3 * (i2 * x2 - f2 * m2) - c2 * (h2 * x2 - u2 * m2) + l2 * (h2 * f2 - u2 * i2)), t[13] = n3 * (i2 * x2 - f2 * m2) - c2 * (r2 * x2 - o2 * m2) + l2 * (r2 * f2 - o2 * i2), t[14] = -(n3 * (h2 * x2 - u2 * m2) - e3 * (r2 * x2 - o2 * m2) + l2 * (r2 * u2 - o2 * h2)), t[15] = n3 * (h2 * f2 - u2 * i2) - e3 * (r2 * f2 - o2 * i2) + c2 * (r2 * u2 - o2 * h2), t;
}
function M(t) {
  const a = t[0], n3 = t[1], r2 = t[2], o2 = t[3], s2 = t[4], e3 = t[5], h2 = t[6], u2 = t[7], M2 = t[8], c2 = t[9], i2 = t[10], f2 = t[11], b2 = t[12], l2 = t[13], m2 = t[14], x2 = t[15];
  return (a * e3 - n3 * s2) * (i2 * x2 - f2 * m2) - (a * h2 - r2 * s2) * (c2 * x2 - f2 * l2) + (a * u2 - o2 * s2) * (c2 * m2 - i2 * l2) + (n3 * h2 - r2 * e3) * (M2 * x2 - f2 * b2) - (n3 * u2 - o2 * e3) * (M2 * m2 - i2 * b2) + (r2 * u2 - o2 * h2) * (M2 * l2 - c2 * b2);
}
function c(t, a, n3) {
  const r2 = a[0], o2 = a[1], s2 = a[2], e3 = a[3], h2 = a[4], u2 = a[5], M2 = a[6], c2 = a[7], i2 = a[8], f2 = a[9], b2 = a[10], l2 = a[11], m2 = a[12], x2 = a[13], q2 = a[14], d2 = a[15];
  let p2 = n3[0], g2 = n3[1], y2 = n3[2], R2 = n3[3];
  return t[0] = p2 * r2 + g2 * h2 + y2 * i2 + R2 * m2, t[1] = p2 * o2 + g2 * u2 + y2 * f2 + R2 * x2, t[2] = p2 * s2 + g2 * M2 + y2 * b2 + R2 * q2, t[3] = p2 * e3 + g2 * c2 + y2 * l2 + R2 * d2, p2 = n3[4], g2 = n3[5], y2 = n3[6], R2 = n3[7], t[4] = p2 * r2 + g2 * h2 + y2 * i2 + R2 * m2, t[5] = p2 * o2 + g2 * u2 + y2 * f2 + R2 * x2, t[6] = p2 * s2 + g2 * M2 + y2 * b2 + R2 * q2, t[7] = p2 * e3 + g2 * c2 + y2 * l2 + R2 * d2, p2 = n3[8], g2 = n3[9], y2 = n3[10], R2 = n3[11], t[8] = p2 * r2 + g2 * h2 + y2 * i2 + R2 * m2, t[9] = p2 * o2 + g2 * u2 + y2 * f2 + R2 * x2, t[10] = p2 * s2 + g2 * M2 + y2 * b2 + R2 * q2, t[11] = p2 * e3 + g2 * c2 + y2 * l2 + R2 * d2, p2 = n3[12], g2 = n3[13], y2 = n3[14], R2 = n3[15], t[12] = p2 * r2 + g2 * h2 + y2 * i2 + R2 * m2, t[13] = p2 * o2 + g2 * u2 + y2 * f2 + R2 * x2, t[14] = p2 * s2 + g2 * M2 + y2 * b2 + R2 * q2, t[15] = p2 * e3 + g2 * c2 + y2 * l2 + R2 * d2, t;
}
function i(t, a, n3) {
  const r2 = n3[0], o2 = n3[1], s2 = n3[2];
  if (a === t) t[12] = a[0] * r2 + a[4] * o2 + a[8] * s2 + a[12], t[13] = a[1] * r2 + a[5] * o2 + a[9] * s2 + a[13], t[14] = a[2] * r2 + a[6] * o2 + a[10] * s2 + a[14], t[15] = a[3] * r2 + a[7] * o2 + a[11] * s2 + a[15];
  else {
    const n4 = a[0], e3 = a[1], h2 = a[2], u2 = a[3], M2 = a[4], c2 = a[5], i2 = a[6], f2 = a[7], b2 = a[8], l2 = a[9], m2 = a[10], x2 = a[11];
    t[0] = n4, t[1] = e3, t[2] = h2, t[3] = u2, t[4] = M2, t[5] = c2, t[6] = i2, t[7] = f2, t[8] = b2, t[9] = l2, t[10] = m2, t[11] = x2, t[12] = n4 * r2 + M2 * o2 + b2 * s2 + a[12], t[13] = e3 * r2 + c2 * o2 + l2 * s2 + a[13], t[14] = h2 * r2 + i2 * o2 + m2 * s2 + a[14], t[15] = u2 * r2 + f2 * o2 + x2 * s2 + a[15];
  }
  return t;
}
function f(t, a, n3) {
  const r2 = n3[0], o2 = n3[1], s2 = n3[2];
  return t[0] = a[0] * r2, t[1] = a[1] * r2, t[2] = a[2] * r2, t[3] = a[3] * r2, t[4] = a[4] * o2, t[5] = a[5] * o2, t[6] = a[6] * o2, t[7] = a[7] * o2, t[8] = a[8] * s2, t[9] = a[9] * s2, t[10] = a[10] * s2, t[11] = a[11] * s2, t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15], t;
}
function b(t, r2, o2, s2) {
  let e3 = s2[0], h2 = s2[1], u2 = s2[2], M2 = Math.sqrt(e3 * e3 + h2 * h2 + u2 * u2);
  if (M2 <= e()) return void n2(t, r2);
  M2 = 1 / M2, e3 *= M2, h2 *= M2, u2 *= M2;
  const c2 = Math.sin(o2), i2 = Math.cos(o2), f2 = 1 - i2, b2 = r2[0], l2 = r2[1], m2 = r2[2], x2 = r2[3], q2 = r2[4], d2 = r2[5], p2 = r2[6], g2 = r2[7], y2 = r2[8], R2 = r2[9], v2 = r2[10], S2 = r2[11], T2 = e3 * e3 * f2 + i2, I2 = h2 * e3 * f2 + u2 * c2, O2 = u2 * e3 * f2 - h2 * c2, j2 = e3 * h2 * f2 - u2 * c2, P2 = h2 * h2 * f2 + i2, D2 = u2 * h2 * f2 + e3 * c2, _2 = e3 * u2 * f2 + h2 * c2, A2 = h2 * u2 * f2 - e3 * c2, w2 = u2 * u2 * f2 + i2;
  t[0] = b2 * T2 + q2 * I2 + y2 * O2, t[1] = l2 * T2 + d2 * I2 + R2 * O2, t[2] = m2 * T2 + p2 * I2 + v2 * O2, t[3] = x2 * T2 + g2 * I2 + S2 * O2, t[4] = b2 * j2 + q2 * P2 + y2 * D2, t[5] = l2 * j2 + d2 * P2 + R2 * D2, t[6] = m2 * j2 + p2 * P2 + v2 * D2, t[7] = x2 * j2 + g2 * P2 + S2 * D2, t[8] = b2 * _2 + q2 * A2 + y2 * w2, t[9] = l2 * _2 + d2 * A2 + R2 * w2, t[10] = m2 * _2 + p2 * A2 + v2 * w2, t[11] = x2 * _2 + g2 * A2 + S2 * w2, r2 !== t && (t[12] = r2[12], t[13] = r2[13], t[14] = r2[14], t[15] = r2[15]);
}
function l(t, a, n3) {
  const r2 = Math.sin(n3), o2 = Math.cos(n3), s2 = a[4], e3 = a[5], h2 = a[6], u2 = a[7], M2 = a[8], c2 = a[9], i2 = a[10], f2 = a[11];
  return a !== t && (t[0] = a[0], t[1] = a[1], t[2] = a[2], t[3] = a[3], t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15]), t[4] = s2 * o2 + M2 * r2, t[5] = e3 * o2 + c2 * r2, t[6] = h2 * o2 + i2 * r2, t[7] = u2 * o2 + f2 * r2, t[8] = M2 * o2 - s2 * r2, t[9] = c2 * o2 - e3 * r2, t[10] = i2 * o2 - h2 * r2, t[11] = f2 * o2 - u2 * r2, t;
}
function m(t, a, n3) {
  const r2 = Math.sin(n3), o2 = Math.cos(n3), s2 = a[0], e3 = a[1], h2 = a[2], u2 = a[3], M2 = a[8], c2 = a[9], i2 = a[10], f2 = a[11];
  return a !== t && (t[4] = a[4], t[5] = a[5], t[6] = a[6], t[7] = a[7], t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15]), t[0] = s2 * o2 - M2 * r2, t[1] = e3 * o2 - c2 * r2, t[2] = h2 * o2 - i2 * r2, t[3] = u2 * o2 - f2 * r2, t[8] = s2 * r2 + M2 * o2, t[9] = e3 * r2 + c2 * o2, t[10] = h2 * r2 + i2 * o2, t[11] = u2 * r2 + f2 * o2, t;
}
function x(t, a, n3) {
  const r2 = Math.sin(n3), o2 = Math.cos(n3), s2 = a[0], e3 = a[1], h2 = a[2], u2 = a[3], M2 = a[4], c2 = a[5], i2 = a[6], f2 = a[7];
  return a !== t && (t[8] = a[8], t[9] = a[9], t[10] = a[10], t[11] = a[11], t[12] = a[12], t[13] = a[13], t[14] = a[14], t[15] = a[15]), t[0] = s2 * o2 + M2 * r2, t[1] = e3 * o2 + c2 * r2, t[2] = h2 * o2 + i2 * r2, t[3] = u2 * o2 + f2 * r2, t[4] = M2 * o2 - s2 * r2, t[5] = c2 * o2 - e3 * r2, t[6] = i2 * o2 - h2 * r2, t[7] = f2 * o2 - u2 * r2, t;
}
function q(t, a) {
  return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = a[0], t[13] = a[1], t[14] = a[2], t[15] = 1, t;
}
function d(t, a) {
  return t[0] = a[0], t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = a[1], t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = a[2], t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function p(t, n3, r2) {
  if (0 === n3) return o(t);
  let s2 = r2[0], e3 = r2[1], h2 = r2[2], u2 = Math.sqrt(s2 * s2 + e3 * e3 + h2 * h2);
  if (u2 <= e()) return null;
  u2 = 1 / u2, s2 *= u2, e3 *= u2, h2 *= u2;
  const M2 = Math.sin(n3), c2 = Math.cos(n3), i2 = 1 - c2;
  return t[0] = s2 * s2 * i2 + c2, t[1] = e3 * s2 * i2 + h2 * M2, t[2] = h2 * s2 * i2 - e3 * M2, t[3] = 0, t[4] = s2 * e3 * i2 - h2 * M2, t[5] = e3 * e3 * i2 + c2, t[6] = h2 * e3 * i2 + s2 * M2, t[7] = 0, t[8] = s2 * h2 * i2 + e3 * M2, t[9] = e3 * h2 * i2 - s2 * M2, t[10] = h2 * h2 * i2 + c2, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function g(t, a) {
  const n3 = Math.sin(a), r2 = Math.cos(a);
  return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = r2, t[6] = n3, t[7] = 0, t[8] = 0, t[9] = -n3, t[10] = r2, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function y(t, a) {
  const n3 = Math.sin(a), r2 = Math.cos(a);
  return t[0] = r2, t[1] = 0, t[2] = -n3, t[3] = 0, t[4] = 0, t[5] = 1, t[6] = 0, t[7] = 0, t[8] = n3, t[9] = 0, t[10] = r2, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function R(t, a) {
  const n3 = Math.sin(a), r2 = Math.cos(a);
  return t[0] = r2, t[1] = n3, t[2] = 0, t[3] = 0, t[4] = -n3, t[5] = r2, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 1, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function v(t, a, n3) {
  const r2 = a[0], o2 = a[1], s2 = a[2], e3 = a[3], h2 = r2 + r2, u2 = o2 + o2, M2 = s2 + s2, c2 = r2 * h2, i2 = r2 * u2, f2 = r2 * M2, b2 = o2 * u2, l2 = o2 * M2, m2 = s2 * M2, x2 = e3 * h2, q2 = e3 * u2, d2 = e3 * M2;
  return t[0] = 1 - (b2 + m2), t[1] = i2 + d2, t[2] = f2 - q2, t[3] = 0, t[4] = i2 - d2, t[5] = 1 - (c2 + m2), t[6] = l2 + x2, t[7] = 0, t[8] = f2 + q2, t[9] = l2 - x2, t[10] = 1 - (c2 + b2), t[11] = 0, t[12] = n3[0], t[13] = n3[1], t[14] = n3[2], t[15] = 1, t;
}
function S(t, a) {
  const n3 = T, r2 = -a[0], o2 = -a[1], s2 = -a[2], e3 = a[3], h2 = a[4], u2 = a[5], M2 = a[6], c2 = a[7], i2 = r2 * r2 + o2 * o2 + s2 * s2 + e3 * e3;
  return i2 > 0 ? (n3[0] = 2 * (h2 * e3 + c2 * r2 + u2 * s2 - M2 * o2) / i2, n3[1] = 2 * (u2 * e3 + c2 * o2 + M2 * r2 - h2 * s2) / i2, n3[2] = 2 * (M2 * e3 + c2 * s2 + h2 * o2 - u2 * r2) / i2) : (n3[0] = 2 * (h2 * e3 + c2 * r2 + u2 * s2 - M2 * o2), n3[1] = 2 * (u2 * e3 + c2 * o2 + M2 * r2 - h2 * s2), n3[2] = 2 * (M2 * e3 + c2 * s2 + h2 * o2 - u2 * r2)), v(t, a, n3), t;
}
var T = n();
function I(t, a) {
  return t[0] = a[12], t[1] = a[13], t[2] = a[14], t;
}
function O(t, a) {
  const n3 = a[0], r2 = a[1], o2 = a[2], s2 = a[4], e3 = a[5], h2 = a[6], u2 = a[8], M2 = a[9], c2 = a[10];
  return t[0] = Math.sqrt(n3 * n3 + r2 * r2 + o2 * o2), t[1] = Math.sqrt(s2 * s2 + e3 * e3 + h2 * h2), t[2] = Math.sqrt(u2 * u2 + M2 * M2 + c2 * c2), t;
}
function j(t, a) {
  const n3 = a[0] + a[5] + a[10];
  let r2 = 0;
  return n3 > 0 ? (r2 = 2 * Math.sqrt(n3 + 1), t[3] = 0.25 * r2, t[0] = (a[6] - a[9]) / r2, t[1] = (a[8] - a[2]) / r2, t[2] = (a[1] - a[4]) / r2) : a[0] > a[5] && a[0] > a[10] ? (r2 = 2 * Math.sqrt(1 + a[0] - a[5] - a[10]), t[3] = (a[6] - a[9]) / r2, t[0] = 0.25 * r2, t[1] = (a[1] + a[4]) / r2, t[2] = (a[8] + a[2]) / r2) : a[5] > a[10] ? (r2 = 2 * Math.sqrt(1 + a[5] - a[0] - a[10]), t[3] = (a[8] - a[2]) / r2, t[0] = (a[1] + a[4]) / r2, t[1] = 0.25 * r2, t[2] = (a[6] + a[9]) / r2) : (r2 = 2 * Math.sqrt(1 + a[10] - a[0] - a[5]), t[3] = (a[1] - a[4]) / r2, t[0] = (a[8] + a[2]) / r2, t[1] = (a[6] + a[9]) / r2, t[2] = 0.25 * r2), t;
}
function P(t, a, n3, r2) {
  const o2 = a[0], s2 = a[1], e3 = a[2], h2 = a[3], u2 = o2 + o2, M2 = s2 + s2, c2 = e3 + e3, i2 = o2 * u2, f2 = o2 * M2, b2 = o2 * c2, l2 = s2 * M2, m2 = s2 * c2, x2 = e3 * c2, q2 = h2 * u2, d2 = h2 * M2, p2 = h2 * c2, g2 = r2[0], y2 = r2[1], R2 = r2[2];
  return t[0] = (1 - (l2 + x2)) * g2, t[1] = (f2 + p2) * g2, t[2] = (b2 - d2) * g2, t[3] = 0, t[4] = (f2 - p2) * y2, t[5] = (1 - (i2 + x2)) * y2, t[6] = (m2 + q2) * y2, t[7] = 0, t[8] = (b2 + d2) * R2, t[9] = (m2 - q2) * R2, t[10] = (1 - (i2 + l2)) * R2, t[11] = 0, t[12] = n3[0], t[13] = n3[1], t[14] = n3[2], t[15] = 1, t;
}
function D(t, a, n3, r2, o2) {
  const s2 = a[0], e3 = a[1], h2 = a[2], u2 = a[3], M2 = s2 + s2, c2 = e3 + e3, i2 = h2 + h2, f2 = s2 * M2, b2 = s2 * c2, l2 = s2 * i2, m2 = e3 * c2, x2 = e3 * i2, q2 = h2 * i2, d2 = u2 * M2, p2 = u2 * c2, g2 = u2 * i2, y2 = r2[0], R2 = r2[1], v2 = r2[2], S2 = o2[0], T2 = o2[1], I2 = o2[2], O2 = (1 - (m2 + q2)) * y2, j2 = (b2 + g2) * y2, P2 = (l2 - p2) * y2, D2 = (b2 - g2) * R2, _2 = (1 - (f2 + q2)) * R2, A2 = (x2 + d2) * R2, w2 = (l2 + p2) * v2, F2 = (x2 - d2) * v2, Q2 = (1 - (f2 + m2)) * v2;
  return t[0] = O2, t[1] = j2, t[2] = P2, t[3] = 0, t[4] = D2, t[5] = _2, t[6] = A2, t[7] = 0, t[8] = w2, t[9] = F2, t[10] = Q2, t[11] = 0, t[12] = n3[0] + S2 - (O2 * S2 + D2 * T2 + w2 * I2), t[13] = n3[1] + T2 - (j2 * S2 + _2 * T2 + F2 * I2), t[14] = n3[2] + I2 - (P2 * S2 + A2 * T2 + Q2 * I2), t[15] = 1, t;
}
function _(t, a) {
  const n3 = a[0], r2 = a[1], o2 = a[2], s2 = a[3], e3 = n3 + n3, h2 = r2 + r2, u2 = o2 + o2, M2 = n3 * e3, c2 = r2 * e3, i2 = r2 * h2, f2 = o2 * e3, b2 = o2 * h2, l2 = o2 * u2, m2 = s2 * e3, x2 = s2 * h2, q2 = s2 * u2;
  return t[0] = 1 - i2 - l2, t[1] = c2 + q2, t[2] = f2 - x2, t[3] = 0, t[4] = c2 - q2, t[5] = 1 - M2 - l2, t[6] = b2 + m2, t[7] = 0, t[8] = f2 + x2, t[9] = b2 - m2, t[10] = 1 - M2 - i2, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, t;
}
function A(t, a, n3, r2, o2, s2, e3) {
  const h2 = 1 / (n3 - a), u2 = 1 / (o2 - r2), M2 = 1 / (s2 - e3);
  return t[0] = 2 * s2 * h2, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = 2 * s2 * u2, t[6] = 0, t[7] = 0, t[8] = (n3 + a) * h2, t[9] = (o2 + r2) * u2, t[10] = (e3 + s2) * M2, t[11] = -1, t[12] = 0, t[13] = 0, t[14] = e3 * s2 * 2 * M2, t[15] = 0, t;
}
function w(t, a, n3, r2, o2) {
  const s2 = 1 / Math.tan(a / 2);
  let e3;
  return t[0] = s2 / n3, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = s2, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[11] = -1, t[12] = 0, t[13] = 0, t[15] = 0, null != o2 && o2 !== 1 / 0 ? (e3 = 1 / (r2 - o2), t[10] = (o2 + r2) * e3, t[14] = 2 * o2 * r2 * e3) : (t[10] = -1, t[14] = -2 * r2), t;
}
function F(t, a, n3, r2) {
  const o2 = Math.tan(a.upDegrees * Math.PI / 180), s2 = Math.tan(a.downDegrees * Math.PI / 180), e3 = Math.tan(a.leftDegrees * Math.PI / 180), h2 = Math.tan(a.rightDegrees * Math.PI / 180), u2 = 2 / (e3 + h2), M2 = 2 / (o2 + s2);
  return t[0] = u2, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = M2, t[6] = 0, t[7] = 0, t[8] = -(e3 - h2) * u2 * 0.5, t[9] = (o2 - s2) * M2 * 0.5, t[10] = r2 / (n3 - r2), t[11] = -1, t[12] = 0, t[13] = 0, t[14] = r2 * n3 / (n3 - r2), t[15] = 0, t;
}
function Q(t, a, n3, r2, o2, s2, e3) {
  const h2 = 1 / (a - n3), u2 = 1 / (r2 - o2), M2 = 1 / (s2 - e3);
  return t[0] = -2 * h2, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 0, t[5] = -2 * u2, t[6] = 0, t[7] = 0, t[8] = 0, t[9] = 0, t[10] = 2 * M2, t[11] = 0, t[12] = (a + n3) * h2, t[13] = (o2 + r2) * u2, t[14] = (e3 + s2) * M2, t[15] = 1, t;
}
function X(t, n3, r2, s2) {
  const e3 = n3[0], h2 = n3[1], u2 = n3[2];
  let M2 = e3 - r2[0], c2 = h2 - r2[1], i2 = u2 - r2[2];
  const f2 = e();
  if (Math.abs(M2) < f2 && Math.abs(c2) < f2 && Math.abs(i2) < f2) return void o(t);
  let b2 = 1 / Math.sqrt(M2 * M2 + c2 * c2 + i2 * i2);
  M2 *= b2, c2 *= b2, i2 *= b2;
  const l2 = s2[0], m2 = s2[1], x2 = s2[2];
  let q2 = m2 * i2 - x2 * c2, d2 = x2 * M2 - l2 * i2, p2 = l2 * c2 - m2 * M2;
  b2 = Math.sqrt(q2 * q2 + d2 * d2 + p2 * p2), b2 ? (b2 = 1 / b2, q2 *= b2, d2 *= b2, p2 *= b2) : (q2 = 0, d2 = 0, p2 = 0);
  let g2 = c2 * p2 - i2 * d2, y2 = i2 * q2 - M2 * p2, R2 = M2 * d2 - c2 * q2;
  b2 = Math.sqrt(g2 * g2 + y2 * y2 + R2 * R2), b2 ? (b2 = 1 / b2, g2 *= b2, y2 *= b2, R2 *= b2) : (g2 = 0, y2 = 0, R2 = 0), t[0] = q2, t[1] = g2, t[2] = M2, t[3] = 0, t[4] = d2, t[5] = y2, t[6] = c2, t[7] = 0, t[8] = p2, t[9] = R2, t[10] = i2, t[11] = 0, t[12] = -(q2 * e3 + d2 * h2 + p2 * u2), t[13] = -(g2 * e3 + y2 * h2 + R2 * u2), t[14] = -(M2 * e3 + c2 * h2 + i2 * u2), t[15] = 1;
}
function Y(t, a, n3, r2) {
  const o2 = a[0], s2 = a[1], e3 = a[2], h2 = r2[0], u2 = r2[1], M2 = r2[2];
  let c2 = o2 - n3[0], i2 = s2 - n3[1], f2 = e3 - n3[2], b2 = c2 * c2 + i2 * i2 + f2 * f2;
  b2 > 0 && (b2 = 1 / Math.sqrt(b2), c2 *= b2, i2 *= b2, f2 *= b2);
  let l2 = u2 * f2 - M2 * i2, m2 = M2 * c2 - h2 * f2, x2 = h2 * i2 - u2 * c2;
  return b2 = l2 * l2 + m2 * m2 + x2 * x2, b2 > 0 && (b2 = 1 / Math.sqrt(b2), l2 *= b2, m2 *= b2, x2 *= b2), t[0] = l2, t[1] = m2, t[2] = x2, t[3] = 0, t[4] = i2 * x2 - f2 * m2, t[5] = f2 * l2 - c2 * x2, t[6] = c2 * m2 - i2 * l2, t[7] = 0, t[8] = c2, t[9] = i2, t[10] = f2, t[11] = 0, t[12] = o2, t[13] = s2, t[14] = e3, t[15] = 1, t;
}
function Z(t) {
  return "mat4(" + t[0] + ", " + t[1] + ", " + t[2] + ", " + t[3] + ", " + t[4] + ", " + t[5] + ", " + t[6] + ", " + t[7] + ", " + t[8] + ", " + t[9] + ", " + t[10] + ", " + t[11] + ", " + t[12] + ", " + t[13] + ", " + t[14] + ", " + t[15] + ")";
}
function k(t) {
  return Math.sqrt(t[0] ** 2 + t[1] ** 2 + t[2] ** 2 + t[3] ** 2 + t[4] ** 2 + t[5] ** 2 + t[6] ** 2 + t[7] ** 2 + t[8] ** 2 + t[9] ** 2 + t[10] ** 2 + t[11] ** 2 + t[12] ** 2 + t[13] ** 2 + t[14] ** 2 + t[15] ** 2);
}
function z(t, a, n3) {
  return t[0] = a[0] + n3[0], t[1] = a[1] + n3[1], t[2] = a[2] + n3[2], t[3] = a[3] + n3[3], t[4] = a[4] + n3[4], t[5] = a[5] + n3[5], t[6] = a[6] + n3[6], t[7] = a[7] + n3[7], t[8] = a[8] + n3[8], t[9] = a[9] + n3[9], t[10] = a[10] + n3[10], t[11] = a[11] + n3[11], t[12] = a[12] + n3[12], t[13] = a[13] + n3[13], t[14] = a[14] + n3[14], t[15] = a[15] + n3[15], t;
}
function E(t, a, n3) {
  return t[0] = a[0] - n3[0], t[1] = a[1] - n3[1], t[2] = a[2] - n3[2], t[3] = a[3] - n3[3], t[4] = a[4] - n3[4], t[5] = a[5] - n3[5], t[6] = a[6] - n3[6], t[7] = a[7] - n3[7], t[8] = a[8] - n3[8], t[9] = a[9] - n3[9], t[10] = a[10] - n3[10], t[11] = a[11] - n3[11], t[12] = a[12] - n3[12], t[13] = a[13] - n3[13], t[14] = a[14] - n3[14], t[15] = a[15] - n3[15], t;
}
function N(t, a, n3) {
  return t[0] = a[0] * n3, t[1] = a[1] * n3, t[2] = a[2] * n3, t[3] = a[3] * n3, t[4] = a[4] * n3, t[5] = a[5] * n3, t[6] = a[6] * n3, t[7] = a[7] * n3, t[8] = a[8] * n3, t[9] = a[9] * n3, t[10] = a[10] * n3, t[11] = a[11] * n3, t[12] = a[12] * n3, t[13] = a[13] * n3, t[14] = a[14] * n3, t[15] = a[15] * n3, t;
}
function V(t, a, n3, r2) {
  return t[0] = a[0] + n3[0] * r2, t[1] = a[1] + n3[1] * r2, t[2] = a[2] + n3[2] * r2, t[3] = a[3] + n3[3] * r2, t[4] = a[4] + n3[4] * r2, t[5] = a[5] + n3[5] * r2, t[6] = a[6] + n3[6] * r2, t[7] = a[7] + n3[7] * r2, t[8] = a[8] + n3[8] * r2, t[9] = a[9] + n3[9] * r2, t[10] = a[10] + n3[10] * r2, t[11] = a[11] + n3[11] * r2, t[12] = a[12] + n3[12] * r2, t[13] = a[13] + n3[13] * r2, t[14] = a[14] + n3[14] * r2, t[15] = a[15] + n3[15] * r2, t;
}
function B(t, a) {
  return t[0] === a[0] && t[1] === a[1] && t[2] === a[2] && t[3] === a[3] && t[4] === a[4] && t[5] === a[5] && t[6] === a[6] && t[7] === a[7] && t[8] === a[8] && t[9] === a[9] && t[10] === a[10] && t[11] === a[11] && t[12] === a[12] && t[13] === a[13] && t[14] === a[14] && t[15] === a[15];
}
function C(t, n3) {
  if (t === n3) return true;
  const r2 = t[0], o2 = t[1], s2 = t[2], e3 = t[3], h2 = t[4], u2 = t[5], M2 = t[6], c2 = t[7], i2 = t[8], f2 = t[9], b2 = t[10], l2 = t[11], m2 = t[12], x2 = t[13], q2 = t[14], d2 = t[15], p2 = n3[0], g2 = n3[1], y2 = n3[2], R2 = n3[3], v2 = n3[4], S2 = n3[5], T2 = n3[6], I2 = n3[7], O2 = n3[8], j2 = n3[9], P2 = n3[10], D2 = n3[11], _2 = n3[12], A2 = n3[13], w2 = n3[14], F2 = n3[15], Q2 = e();
  return Math.abs(r2 - p2) <= Q2 * Math.max(1, Math.abs(r2), Math.abs(p2)) && Math.abs(o2 - g2) <= Q2 * Math.max(1, Math.abs(o2), Math.abs(g2)) && Math.abs(s2 - y2) <= Q2 * Math.max(1, Math.abs(s2), Math.abs(y2)) && Math.abs(e3 - R2) <= Q2 * Math.max(1, Math.abs(e3), Math.abs(R2)) && Math.abs(h2 - v2) <= Q2 * Math.max(1, Math.abs(h2), Math.abs(v2)) && Math.abs(u2 - S2) <= Q2 * Math.max(1, Math.abs(u2), Math.abs(S2)) && Math.abs(M2 - T2) <= Q2 * Math.max(1, Math.abs(M2), Math.abs(T2)) && Math.abs(c2 - I2) <= Q2 * Math.max(1, Math.abs(c2), Math.abs(I2)) && Math.abs(i2 - O2) <= Q2 * Math.max(1, Math.abs(i2), Math.abs(O2)) && Math.abs(f2 - j2) <= Q2 * Math.max(1, Math.abs(f2), Math.abs(j2)) && Math.abs(b2 - P2) <= Q2 * Math.max(1, Math.abs(b2), Math.abs(P2)) && Math.abs(l2 - D2) <= Q2 * Math.max(1, Math.abs(l2), Math.abs(D2)) && Math.abs(m2 - _2) <= Q2 * Math.max(1, Math.abs(m2), Math.abs(_2)) && Math.abs(x2 - A2) <= Q2 * Math.max(1, Math.abs(x2), Math.abs(A2)) && Math.abs(q2 - w2) <= Q2 * Math.max(1, Math.abs(q2), Math.abs(w2)) && Math.abs(d2 - F2) <= Q2 * Math.max(1, Math.abs(d2), Math.abs(F2));
}
function G(t) {
  const n3 = e(), r2 = t[0], o2 = t[1], s2 = t[2], e3 = t[4], h2 = t[5], u2 = t[6], M2 = t[8], c2 = t[9], i2 = t[10];
  return Math.abs(1 - (r2 * r2 + e3 * e3 + M2 * M2)) <= n3 && Math.abs(1 - (o2 * o2 + h2 * h2 + c2 * c2)) <= n3 && Math.abs(1 - (s2 * s2 + u2 * u2 + i2 * i2)) <= n3;
}
function H(t) {
  return 1 === t[0] && 0 === t[1] && 0 === t[2] && 0 === t[4] && 1 === t[5] && 0 === t[6] && 0 === t[8] && 0 === t[9] && 1 === t[10];
}
var J = c;
var K = E;
var L = Object.freeze(Object.defineProperty({ __proto__: null, add: z, adjoint: u, copy: n2, determinant: M, equals: C, exactEquals: B, frob: k, fromQuat: _, fromQuat2: S, fromRotation: p, fromRotationTranslation: v, fromRotationTranslationScale: P, fromRotationTranslationScaleOrigin: D, fromScaling: d, fromTranslation: q, fromXRotation: g, fromYRotation: y, fromZRotation: R, frustum: A, getRotation: j, getScaling: O, getTranslation: I, hasIdentityRotation: H, identity: o, invert: h, invertOrIdentity: e2, isOrthoNormal: G, lookAt: X, mul: J, multiply: c, multiplyScalar: N, multiplyScalarAndAdd: V, ortho: Q, perspective: w, perspectiveFromFieldOfView: F, rotate: b, rotateX: l, rotateY: m, rotateZ: x, scale: f, set: r, str: Z, sub: K, subtract: E, targetTo: Y, translate: i, transpose: s }, Symbol.toStringTag, { value: "Module" }));

export {
  n2 as n,
  r,
  o,
  s,
  e2 as e,
  h,
  c,
  i,
  f,
  b,
  l,
  m,
  x,
  q,
  d,
  p,
  g,
  R,
  I,
  O,
  j,
  P,
  D,
  _,
  A,
  Q,
  X,
  B,
  C,
  G,
  H
};
//# sourceMappingURL=chunk-53ZTROGC.js.map
