import {
  r
} from "./chunk-MHM4GDCM.js";
import {
  h
} from "./chunk-3UHB6K6P.js";
import {
  a
} from "./chunk-CWMZW2S5.js";
import {
  A,
  C
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/core/colorUtils.js
function i(n) {
  return "r" in n && "g" in n && "b" in n;
}
function a2(n) {
  return "h" in n && "s" in n && "v" in n;
}
function s(n) {
  return "l" in n && "a" in n && "b" in n;
}
function f(n) {
  return "l" in n && "c" in n && "h" in n;
}
function h2(n) {
  return "x" in n && "y" in n && "z" in n;
}
var l = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]];
var g = [[3.2406, -1.5372, -0.4986], [-0.9689, 1.8758, 0.0415], [0.0557, -0.204, 1.057]];
function b(n, t) {
  const r3 = [];
  let o, e;
  if (n[0].length !== t.length) throw new Error("dimensions do not match");
  const u = n.length, c = n[0].length;
  let i2 = 0;
  for (o = 0; o < u; o++) {
    for (i2 = 0, e = 0; e < c; e++) i2 += n[o][e] * t[e];
    r3.push(i2);
  }
  return r3;
}
function m(n) {
  const t = [n.r / 255, n.g / 255, n.b / 255].map((n2) => n2 <= 0.04045 ? n2 / 12.92 : ((n2 + 0.055) / 1.055) ** 2.4), r3 = b(l, t);
  return { x: 100 * r3[0], y: 100 * r3[1], z: 100 * r3[2] };
}
function M(n) {
  const t = b(g, [n.x / 100, n.y / 100, n.z / 100]).map((n2) => {
    const t2 = n2 <= 31308e-7 ? 12.92 * n2 : 1.055 * n2 ** (1 / 2.4) - 0.055;
    return Math.min(1, Math.max(t2, 0));
  });
  return { r: Math.round(255 * t[0]), g: Math.round(255 * t[1]), b: Math.round(255 * t[2]) };
}
function d(n) {
  const t = [n.x / 95.047, n.y / 100, n.z / 108.883].map((n2) => n2 > (6 / 29) ** 3 ? n2 ** (1 / 3) : 1 / 3 * (29 / 6) ** 2 * n2 + 4 / 29);
  return { l: 116 * t[1] - 16, a: 500 * (t[0] - t[1]), b: 200 * (t[1] - t[2]) };
}
function p(n) {
  const t = n.l, r3 = [(t + 16) / 116 + n.a / 500, (t + 16) / 116, (t + 16) / 116 - n.b / 200].map((n2) => n2 > 6 / 29 ? n2 ** 3 : 3 * (6 / 29) ** 2 * (n2 - 4 / 29));
  return { x: 95.047 * r3[0], y: 100 * r3[1], z: 108.883 * r3[2] };
}
function w(n) {
  const t = n.l, r3 = n.a, o = n.b, e = Math.sqrt(r3 * r3 + o * o);
  let u = Math.atan2(o, r3);
  return u = u > 0 ? u : u + 2 * Math.PI, { l: t, c: e, h: u };
}
function x(n) {
  const t = n.l, r3 = n.c, o = n.h;
  return { l: t, a: r3 * Math.cos(o), b: r3 * Math.sin(o) };
}
function k(n) {
  return d(m(n));
}
function y(n) {
  return M(p(n));
}
function j(n) {
  return w(d(m(n)));
}
function v(n) {
  return M(p(x(n)));
}
function z(n) {
  const t = n.r, r3 = n.g, o = n.b, e = Math.max(t, r3, o), u = e - Math.min(t, r3, o);
  let c = e, i2 = 0 === u ? 0 : e === t ? (r3 - o) / u % 6 : e === r3 ? (o - t) / u + 2 : (t - r3) / u + 4, a3 = 0 === u ? 0 : u / c;
  return i2 < 0 && (i2 += 6), i2 *= 60, a3 *= 100, c *= 100 / 255, { h: i2, s: a3, v: c };
}
function A2(n) {
  const t = (n.h + 360) % 360 / 60, r3 = n.s / 100, o = n.v / 100 * 255, e = o * r3, u = e * (1 - Math.abs(t % 2 - 1));
  let c;
  switch (Math.floor(t)) {
    case 0:
      c = { r: e, g: u, b: 0 };
      break;
    case 1:
      c = { r: u, g: e, b: 0 };
      break;
    case 2:
      c = { r: 0, g: e, b: u };
      break;
    case 3:
      c = { r: 0, g: u, b: e };
      break;
    case 4:
      c = { r: u, g: 0, b: e };
      break;
    case 5:
    case 6:
      c = { r: e, g: 0, b: u };
      break;
    default:
      c = { r: 0, g: 0, b: 0 };
  }
  return c.r = Math.round(c.r + o - e), c.g = Math.round(c.g + o - e), c.b = Math.round(c.b + o - e), c;
}
function U(n) {
  return i(n) ? n : f(n) ? v(n) : s(n) ? y(n) : h2(n) ? M(n) : a2(n) ? A2(n) : n;
}
function B(n) {
  if (a2(n)) return n;
  return z(U(n));
}
function C2(n) {
  return s(n) ? n : k(U(n));
}
function H(n) {
  return f(n) ? n : j(U(n));
}
function G(t) {
  let { r: r3, g: o, b: e, a: u } = t;
  return u < 1 && (r3 = Math.round(u * r3 + 255 * (1 - u)), o = Math.round(u * o + 255 * (1 - u)), e = Math.round(u * e + 255 * (1 - u))), new h({ r: r3, g: o, b: e });
}
function L2(n, t) {
  const { r: r3, g: o, b: e } = (t == null ? void 0 : t.ignoreAlpha) ? n : G(n);
  return 0.2126 * r3 + 0.7152 * o + 0.0722 * e;
}
var R;
function E(t, r3 = R.High) {
  return L2(t, { ignoreAlpha: true }) > r3 ? new h([0, 0, 0, t.a]) : new h([255, 255, 255, t.a]);
}
function I(n, t) {
  const r3 = C2(n);
  r3.l *= 1 - t;
  const o = U(r3), e = n.clone();
  return e.setColor(o), e.a = n.a, e;
}
function P(n, t) {
  const r3 = n.clone();
  return r3.a *= t, r3;
}
function D(n, t) {
  const r3 = B(n);
  r3.s *= t;
  const o = U(r3), e = n.clone();
  return e.setColor(o), e.a = n.a, e;
}
function F(t) {
  return h.toUnitRGBA(t);
}
function N(n) {
  return r(n[0], n[1], n[2], n.length > 3 ? n[3] : 1);
}
function S(t, r3) {
  const o = h.toUnitRGBA(t);
  return o[3] *= r3, o;
}
function T(r3, e, u = {}) {
  if (0 === r3.length || e <= 0) return [];
  if (1 === (r3 = r3.map((t) => "string" == typeof t ? new h(t) : t)).length || 1 === e) {
    const n = [], t = r3[0];
    for (let r4 = 0; r4 < e; r4++) n.push(t.clone());
    return n;
  }
  if (u.shuffle && (r3 = C(a(r3), u.seed)), r3.length >= e) {
    const n = [], t = (r3.length - 1) / (e - 1);
    for (let o = 0; o < e; o++) {
      const e2 = Math.round(o * t);
      n.push(r3[e2].clone());
    }
    return n;
  }
  return V(r3, e, u);
}
function V(n, r3, o = {}) {
  const e = [], u = n.length - 1, c = Math.ceil((r3 - n.length) / u);
  n: for (let t = 0; t < u; t++) {
    const u2 = n[t], i2 = n[t + 1];
    for (let t2 = 1; t2 <= c; t2++) {
      const a3 = t2 / (c + 1);
      if (e.push(X(u2, i2, a3, o)), e.length + n.length === r3) break n;
    }
  }
  return [...n.map((n2) => n2.clone()), ...C(e, o.seed ?? 1)];
}
!function(n) {
  n[n.Low = 160] = "Low", n[n.High = 225] = "High";
}(R || (R = {}));
var W = (n, t) => {
  const r3 = Math.floor(10 * t()) - 5;
  return Math.min(255, Math.max(0, n + r3));
};
function X(t, o, e, u = {}) {
  const c = t.r, i2 = t.g, a3 = t.b, s2 = o.r, f2 = o.g, h3 = o.b, l2 = Math.round(c + (s2 - c) * e), g2 = Math.round(i2 + (f2 - i2) * e), b2 = Math.round(a3 + (h3 - a3) * e);
  if (!u.offset) return new h([l2, g2, b2]);
  const m2 = A(u.seed);
  return new h([W(l2, m2), W(g2, m2), W(b2, m2)]);
}

export {
  i,
  U,
  B,
  C2 as C,
  H,
  L2 as L,
  R,
  E,
  I,
  P,
  D,
  F,
  N,
  S,
  T
};
//# sourceMappingURL=chunk-ZD4JXG4O.js.map
