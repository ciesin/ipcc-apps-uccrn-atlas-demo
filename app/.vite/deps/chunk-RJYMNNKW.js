import {
  o as o3
} from "./chunk-D5KT2NSO.js";
import {
  a,
  d,
  n as n5,
  r
} from "./chunk-U2TKRMQE.js";
import {
  c as c3
} from "./chunk-IWFYZGBP.js";
import {
  a as a2,
  w as w2
} from "./chunk-H2PMLL3X.js";
import {
  m
} from "./chunk-ZKPJPNLW.js";
import {
  p,
  t as t2
} from "./chunk-YINRFSE5.js";
import {
  T as T2,
  i
} from "./chunk-WXGA2B5U.js";
import {
  e,
  o as o2
} from "./chunk-X5RZJMNW.js";
import {
  e as e2
} from "./chunk-K24WU5UX.js";
import {
  j,
  n as n4
} from "./chunk-LH36NQSN.js";
import {
  A as A2,
  E,
  N,
  c as c2,
  y
} from "./chunk-UMYFDXOJ.js";
import {
  o
} from "./chunk-QTWG47SG.js";
import {
  B,
  c,
  f,
  h as h2,
  n as n3
} from "./chunk-53ZTROGC.js";
import {
  n as n2
} from "./chunk-JLFSX3JT.js";
import {
  h
} from "./chunk-YUVX6H42.js";
import {
  P,
  T,
  s
} from "./chunk-6P7HXSJ6.js";
import {
  A,
  D,
  W,
  X,
  w,
  x
} from "./chunk-LTDNORB5.js";
import {
  t
} from "./chunk-HQLPC24M.js";
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/geometry/support/meshUtils/projection.js
var O = "Projection may be possible after calling projection.load().";
function F(r2, t3, o4, e3) {
  r2.error(`Failed to project from (wkid:${t3.wkid}) to (wkid:${o4.wkid}).${e3 ? " " : ""}${e3}`);
}
function E2(r2, t3, o4, e3, n6, i2) {
  return B2(x2.TO_PCPF, i.fromTypedArray(r2), V.NORMAL, T2.fromTypedArray(t3), o4, T2.fromTypedArray(e3), n6, i.fromTypedArray(i2)) ? i2 : null;
}
function R(r2, t3, o4, e3, n6, i2) {
  return B2(x2.FROM_PCPF, i.fromTypedArray(r2), V.NORMAL, T2.fromTypedArray(t3), o4, T2.fromTypedArray(e3), n6, i.fromTypedArray(i2)) ? i2 : null;
}
function g(r2, t3, o4, e3) {
  return o(r2, t3, 0, o4, e3, 0) ? o4 : null;
}
function h3(r2, t3, o4, e3) {
  return o(r2, t3, 0, o4, e3, 0) ? o4 : null;
}
function _(t3, e3, n6) {
  return j(Y, n6), n5(e3, t3, Y), T(Y) && d(e3, e3), e3;
}
function C(t3, o4, n6) {
  return n4(Y, n6), o3(o4, t3, Y), T(Y) && d(o4, o4, 4), o4;
}
function b(r2, o4, e3, n6) {
  const i2 = o4 === V.NORMAL;
  return k(r2, o4, e3, (r3, o5) => {
    const e4 = Math.cos(s(r3));
    o5[0] = i2 ? e4 : 1 / e4, o5[1] = 1;
  }, n6);
}
function L(r2, t3, o4, e3) {
  const n6 = t3 === V.NORMAL;
  return k(r2, t3, o4, (r3, t4) => {
    const o5 = Math.cosh(-r3 / t.radius);
    t4[0] = 1, t4[1] = n6 ? o5 : 1 / o5;
  }, e3);
}
function k(r2, t3, o4, e3, n6) {
  const i2 = t3 === V.NORMAL ? 3 : 4, f2 = [0, 0];
  for (let c4 = 0, a3 = 1; c4 < r2.length; c4 += i2, a3 += 3) {
    e3(o4[a3], f2);
    const t4 = r2[c4] * f2[0], s2 = r2[c4 + 1] * f2[1], m2 = r2[c4 + 2], u = 1 / Math.sqrt(t4 * t4 + s2 * s2 + m2 * m2);
    n6[c4] = t4 * u, n6[c4 + 1] = s2 * u, n6[c4 + 2] = m2 * u, 4 === i2 && (n6[c4 + 3] = r2[c4 + 3]);
  }
  return n6;
}
function w3(r2, t3, o4, e3, n6, i2) {
  if (!B2(x2.TO_PCPF, i.fromTypedArray(r2, 4 * Float32Array.BYTES_PER_ELEMENT), V.TANGENT, T2.fromTypedArray(t3), o4, T2.fromTypedArray(e3), n6, i.fromTypedArray(i2, 4 * Float32Array.BYTES_PER_ELEMENT))) return null;
  for (let f2 = 3; f2 < r2.length; f2 += 4) i2[f2] = r2[f2];
  return i2;
}
function G(r2, t3, o4, e3, n6, i2) {
  if (!B2(x2.FROM_PCPF, i.fromTypedArray(r2, 16), V.TANGENT, T2.fromTypedArray(t3), o4, T2.fromTypedArray(e3), n6, i.fromTypedArray(i2, 16))) return null;
  for (let f2 = 3; f2 < r2.length; f2 += 4) i2[f2] = r2[f2];
  return i2;
}
var V;
var x2;
function v(r2, t3, n6, f2, c4) {
  switch (m(f2, n6, q, f2), r2 === x2.FROM_PCPF && h2(q, q), t3) {
    case V.NORMAL:
      return j(c4, q);
    case V.TANGENT:
      return n4(c4, q);
  }
}
function B2(r2, t3, o4, e3, n6, i2, f2, s2) {
  if (!t3) return;
  const m2 = e3.count;
  if ($(n6)) for (let a3 = 0; a3 < m2; a3++) i2.getVec(a3, S), t3.getVec(a3, U), N(U, U, v(r2, o4, S, f2, Y)), s2.setVec(a3, U);
  else for (let u = 0; u < m2; u++) {
    i2.getVec(u, S), t3.getVec(u, U);
    const n7 = h(e3.get(u, 1));
    let m3 = Math.cos(n7);
    o4 === V.TANGENT != (r2 === x2.TO_PCPF) && (m3 = 1 / m3), v(r2, o4, S, f2, Y), r2 === x2.TO_PCPF ? (Y[0] *= m3, Y[1] *= m3, Y[2] *= m3, Y[3] *= m3, Y[4] *= m3, Y[5] *= m3) : (Y[0] *= m3, Y[3] *= m3, Y[6] *= m3, Y[1] *= m3, Y[4] *= m3, Y[7] *= m3), N(U, U, Y), A2(U, U), s2.setVec(u, U);
  }
  return s2;
}
function $(r2) {
  return r2.isWGS84 || w(r2) || D(r2) || W(r2);
}
!function(r2) {
  r2[r2.NORMAL = 0] = "NORMAL", r2[r2.TANGENT = 1] = "TANGENT";
}(V || (V = {})), function(r2) {
  r2[r2.TO_PCPF = 0] = "TO_PCPF", r2[r2.FROM_PCPF = 1] = "FROM_PCPF";
}(x2 || (x2 = {}));
var S = n2();
var U = n2();
var q = e();
var Y = e2();

// node_modules/@arcgis/core/geometry/support/meshUtils/vertexSpaceConversion.js
var M = () => n.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");
function k2(t3, n6, { vertexSpace: r2, spatialReference: e3 }) {
  if ("georeferenced" === r2.type) {
    const o5 = t3;
    if (!c3(n6, o5, e3)) return false;
    const { origin: i3 } = r2;
    return c2(t3, o5, i3), true;
  }
  const o4 = a2(e3), i2 = t3;
  if (!c3(n6, i2, o4)) return false;
  const { origin: a3 } = r2, s2 = lt;
  if (!m(e3, a3, s2, o4)) return false;
  const c4 = h2(lt, s2);
  return null != c4 && (E(t3, i2, c4), true);
}
function B3(t3, n6, r2) {
  const { vertexSpace: e3, transform: o4, vertexAttributes: i2 } = t3, l = t2(e3) ? o4 : null, s2 = X2(t3.spatialReference, r2, at.SOURCE_AND_TARGET);
  if (p(e3, n6) && (!l || B(l.localMatrix, o2)) && Y2(s2)) {
    const { position: t4, normal: n7, tangent: e4 } = i2, o5 = r2 == null ? void 0 : r2.allowBufferReuse;
    return { position: o5 ? t4 : t4.slice(), normal: o5 ? n7 : n7 == null ? void 0 : n7.slice(), tangent: o5 ? e4 : e4 == null ? void 0 : e4.slice() };
  }
  switch (t3.vertexSpace.type) {
    case "local":
      return "local" === n6.type ? H(t3, t3.vertexSpace, n6.origin, r2) : P2(t3, t3.vertexSpace, n6.origin, r2);
    case "georeferenced":
      return "local" === n6.type ? q2(t3, t3.vertexSpace, n6.origin, r2) : L2(t3, t3.vertexSpace, n6.origin, r2);
  }
}
function L2({ vertexAttributes: t3, transform: n6, spatialReference: r2 }, { origin: e3 }, o4, i2) {
  const l = X2(r2, i2, at.SOURCE_AND_TARGET), a3 = e3 || !Y2(l) ? n3(rt, (n6 == null ? void 0 : n6.localMatrix) ?? o2) : null;
  a3 && W2(a3, r2, i2, at.SOURCE_AND_TARGET);
  const { position: c4, normal: u, tangent: m2 } = a3 ? I(t3, a3) : t3, p2 = i2 == null ? void 0 : i2.allowBufferReuse, g2 = p2 ? c4 : new Float64Array(c4.length);
  let R2 = c4;
  if (e3 && (R2 = a(g2, R2, e3)), o4) {
    const t4 = y(it, o4);
    R2 = a(g2, R2, t4);
  }
  return { position: R2 !== t3.position || p2 ? R2 : R2.slice(), normal: u !== t3.normal || p2 ? u : u == null ? void 0 : u.slice(), tangent: m2 !== t3.tangent || p2 ? m2 : m2 == null ? void 0 : m2.slice() };
}
function V2(t3, n6) {
  return (n6 == null ? void 0 : n6.useEllipsoid) && A(t3) ? w2 : a2(t3);
}
function P2({ spatialReference: t3, vertexAttributes: n6, transform: r2 }, { origin: e3 }, o4, i2) {
  const l = V2(t3, i2);
  if (!m(t3, e3, rt, l)) return F(M(), t3, l), null;
  r2 && c(rt, rt, r2.localMatrix), W2(rt, t3, i2, at.SOURCE);
  const a3 = new Float64Array(n6.position.length), s2 = J(n6.position, rt, t3, a3, l);
  if (!s2) return null;
  const u = K(s2, t3, a3, l, n6.normal, rt);
  if (n6.normal && !u) return null;
  const f2 = Q(s2, t3, a3, l, n6.tangent, rt);
  if (n6.tangent && !f2) return null;
  if (o4) {
    const t4 = y(it, o4);
    a(s2, s2, t4);
  }
  return { position: s2, normal: u, tangent: f2 };
}
function q2({ vertexAttributes: t3, spatialReference: n6, transform: r2 }, { origin: e3 }, i2, a3) {
  const s2 = V2(n6, a3);
  if (!m(n6, i2, rt, s2)) return F(M(), n6, s2), null;
  const c4 = 1 / X2(n6, a3, at.TARGET);
  f(rt, rt, [c4, c4, c4]);
  const f2 = h2(et, rt), { position: m2, normal: p2, tangent: g2 } = z(t3, e3, r2), A3 = new Float64Array(m2.length), R2 = Z(m2, n6, f2, A3, s2);
  if (!R2) return null;
  const x3 = j(ot, f2), E3 = $2(p2, m2, n6, A3, s2, x3, p2 !== t3.normal ? p2 : void 0);
  if (!E3 && p2) return null;
  const T3 = tt(g2, m2, n6, A3, s2, x3, g2 !== t3.tangent ? g2 : void 0);
  return !T3 && g2 ? null : { position: R2, normal: E3, tangent: T3 };
}
function z(t3, n6, r2) {
  if (!n6) return t3;
  if (!r2) {
    const { position: r3, normal: e4, tangent: o4 } = t3;
    return { position: a(new Float64Array(r3.length), r3, n6), tangent: o4, normal: e4 };
  }
  const e3 = I(t3, r2.localMatrix);
  return a(e3.position, e3.position, n6), e3;
}
function H({ vertexAttributes: t3, spatialReference: n6, transform: r2 }, { origin: e3 }, o4, i2) {
  const a3 = V2(n6, i2);
  if (!m(n6, e3, rt, a3)) return F(M(), n6, a3), null;
  if (r2 && c(rt, rt, r2.localMatrix), !m(n6, o4, et, a3)) return F(M(), a3, n6), null;
  h2(et, et);
  const s2 = c(rt, et, rt);
  return W2(s2, n6, i2, at.SOURCE_AND_TARGET), I(t3, s2);
}
function I(t3, n6) {
  const r2 = new Float64Array(t3.position.length);
  r(r2, t3.position, n6);
  const e3 = t3.normal ? new Float32Array(t3.normal.length) : null, o4 = t3.tangent ? new Float32Array(t3.tangent.length) : null;
  return e3 && t3.normal && _(t3.normal, e3, n6), o4 && t3.tangent && C(t3.tangent, o4, n6), { position: r2, normal: e3, tangent: o4 };
}
function J(t3, n6, r2, e3, o4) {
  r(e3, t3, n6);
  const i2 = new Float64Array(t3.length);
  return h3(e3, o4, i2, r2) ? i2 : (F(M(), o4, r2), null);
}
function K(t3, n6, r2, e3, o4, i2) {
  if (null == o4) return null;
  const l = new Float32Array(o4.length);
  return _(o4, l, i2), R(l, t3, n6, r2, e3, l) ? l : (F(M(), e3, n6), null);
}
function Q(t3, n6, r2, e3, o4, i2) {
  if (null == o4) return null;
  const l = new Float32Array(o4.length);
  return C(o4, l, i2), G(l, t3, n6, r2, e3, l) ? l : (F(M(), e3, n6), null);
}
function W2(t3, n6, r2, e3) {
  const o4 = X2(n6, r2, e3);
  Y2(o4) || f(t3, t3, [o4, o4, o4]);
}
function X2(t3, n6, r2) {
  const e3 = !!(r2 & at.SOURCE), o4 = !!(r2 & at.TARGET), i2 = n6 == null ? void 0 : n6.sourceUnit, l = n6 == null ? void 0 : n6.targetUnit;
  if (!i2 && !l) return 1;
  let a3 = nt(i2, t3);
  e3 || !i2 || Y2(a3) || (M().warn("source unit conversion not supported"), a3 = 1);
  let s2 = 1 / nt(l, t3);
  return o4 || !l || Y2(s2) || (M().warn("target unit conversion not supported"), s2 = 1), a3 * s2;
}
function Y2(t3) {
  return P(t3, 1);
}
function Z(t3, n6, r2, e3, o4) {
  const i2 = g(t3, n6, e3, o4);
  if (!i2) return F(M(), n6, o4), null;
  const l = new Float64Array(i2.length);
  return r(l, i2, r2), l;
}
function $2(t3, n6, r2, e3, o4, i2, l) {
  if (null == t3) return null;
  const a3 = l ?? new Float32Array(t3.length);
  return E2(t3, n6, r2, e3, o4, a3) ? (n5(a3, a3, i2), a3) : (F(M(), r2, o4), null);
}
function tt(t3, n6, r2, e3, o4, i2, l) {
  if (null == t3) return null;
  const a3 = l ?? new Float32Array(t3.length);
  return w3(t3, n6, r2, e3, o4, a3) ? (n5(a3, a3, i2, 4), a3) : (F(M(), r2, o4), null);
}
function nt(t3, n6) {
  if (null == t3) return 1;
  const o4 = X(n6);
  return 1 / x(o4, "meters", t3);
}
var rt = e();
var et = e();
var ot = e2();
var it = n2();
var lt = e();
var at;
!function(t3) {
  t3[t3.NONE = 0] = "NONE", t3[t3.SOURCE = 1] = "SOURCE", t3[t3.TARGET = 2] = "TARGET", t3[t3.SOURCE_AND_TARGET = 3] = "SOURCE_AND_TARGET";
}(at || (at = {}));

export {
  O,
  F,
  E2 as E,
  R,
  g,
  h3 as h,
  _,
  C,
  b,
  L,
  w3 as w,
  G,
  V,
  k2 as k,
  B3 as B,
  nt
};
//# sourceMappingURL=chunk-RJYMNNKW.js.map
