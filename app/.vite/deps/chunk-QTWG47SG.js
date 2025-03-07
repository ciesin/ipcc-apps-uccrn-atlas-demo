import {
  s as s4
} from "./chunk-WJGG35K6.js";
import {
  M,
  l,
  r,
  s
} from "./chunk-6P7HXSJ6.js";
import {
  A2 as A,
  C,
  D,
  G2 as G,
  O2 as O,
  Q,
  S,
  W,
  f2 as f,
  p3 as p,
  s2 as s3,
  u
} from "./chunk-LTDNORB5.js";
import {
  e,
  s as s2,
  t
} from "./chunk-HQLPC24M.js";

// node_modules/@arcgis/core/geometry/projection/projectors.js
var N;
!function(n) {
  n[n.UNKNOWN = 0] = "UNKNOWN", n[n.SPHERICAL_ECEF = 1] = "SPHERICAL_ECEF", n[n.WGS84 = 2] = "WGS84", n[n.WEB_MERCATOR = 3] = "WEB_MERCATOR", n[n.WGS84_ECEF = 4] = "WGS84_ECEF", n[n.CGCS2000 = 5] = "CGCS2000", n[n.SPHERICAL_MARS_PCPF = 6] = "SPHERICAL_MARS_PCPF", n[n.GCSMARS2000 = 7] = "GCSMARS2000", n[n.SPHERICAL_MOON_PCPF = 8] = "SPHERICAL_MOON_PCPF", n[n.GCSMOON2000 = 9] = "GCSMOON2000", n[n.LON_LAT = 10] = "LON_LAT", n[n.PLATE_CARREE = 11] = "PLATE_CARREE";
}(N || (N = {}));
var L = { [N.WGS84]: { [N.CGCS2000]: I, [N.GCSMARS2000]: null, [N.GCSMOON2000]: null, [N.LON_LAT]: I, [N.SPHERICAL_ECEF]: y, [N.SPHERICAL_MARS_PCPF]: null, [N.SPHERICAL_MOON_PCPF]: null, [N.UNKNOWN]: null, [N.WEB_MERCATOR]: d, [N.PLATE_CARREE]: U, [N.WGS84]: I, [N.WGS84_ECEF]: Y }, [N.CGCS2000]: { [N.CGCS2000]: I, [N.GCSMARS2000]: null, [N.GCSMOON2000]: null, [N.LON_LAT]: I, [N.SPHERICAL_ECEF]: y, [N.SPHERICAL_MARS_PCPF]: null, [N.SPHERICAL_MOON_PCPF]: null, [N.UNKNOWN]: null, [N.WEB_MERCATOR]: d, [N.PLATE_CARREE]: U, [N.WGS84]: I, [N.WGS84_ECEF]: Y }, [N.GCSMARS2000]: { [N.CGCS2000]: null, [N.GCSMARS2000]: I, [N.GCSMOON2000]: null, [N.LON_LAT]: I, [N.SPHERICAL_ECEF]: null, [N.SPHERICAL_MARS_PCPF]: x, [N.SPHERICAL_MOON_PCPF]: null, [N.UNKNOWN]: null, [N.WEB_MERCATOR]: null, [N.PLATE_CARREE]: null, [N.WGS84]: null, [N.WGS84_ECEF]: null }, [N.GCSMOON2000]: { [N.CGCS2000]: null, [N.GCSMARS2000]: null, [N.GCSMOON2000]: I, [N.LON_LAT]: I, [N.SPHERICAL_ECEF]: null, [N.SPHERICAL_MARS_PCPF]: null, [N.SPHERICAL_MOON_PCPF]: k, [N.UNKNOWN]: null, [N.WEB_MERCATOR]: null, [N.PLATE_CARREE]: null, [N.WGS84]: null, [N.WGS84_ECEF]: null }, [N.WEB_MERCATOR]: { [N.CGCS2000]: T, [N.GCSMARS2000]: null, [N.GCSMOON2000]: null, [N.LON_LAT]: T, [N.SPHERICAL_ECEF]: p2, [N.SPHERICAL_MARS_PCPF]: null, [N.SPHERICAL_MOON_PCPF]: null, [N.UNKNOWN]: null, [N.WEB_MERCATOR]: I, [N.PLATE_CARREE]: K, [N.WGS84]: T, [N.WGS84_ECEF]: H }, [N.WGS84_ECEF]: { [N.CGCS2000]: Z, [N.GCSMARS2000]: null, [N.GCSMOON2000]: null, [N.LON_LAT]: Z, [N.SPHERICAL_ECEF]: $, [N.SPHERICAL_MARS_PCPF]: null, [N.SPHERICAL_MOON_PCPF]: null, [N.UNKNOWN]: null, [N.WEB_MERCATOR]: nn, [N.PLATE_CARREE]: w, [N.WGS84]: Z, [N.WGS84_ECEF]: I }, [N.SPHERICAL_ECEF]: { [N.CGCS2000]: J, [N.GCSMARS2000]: null, [N.GCSMOON2000]: null, [N.LON_LAT]: J, [N.SPHERICAL_ECEF]: I, [N.SPHERICAL_MARS_PCPF]: null, [N.SPHERICAL_MOON_PCPF]: null, [N.UNKNOWN]: null, [N.WEB_MERCATOR]: Q2, [N.PLATE_CARREE]: B, [N.WGS84]: J, [N.WGS84_ECEF]: V }, [N.SPHERICAL_MARS_PCPF]: { [N.CGCS2000]: null, [N.GCSMARS2000]: D2, [N.GCSMOON2000]: null, [N.LON_LAT]: D2, [N.SPHERICAL_ECEF]: null, [N.SPHERICAL_MARS_PCPF]: I, [N.SPHERICAL_MOON_PCPF]: null, [N.UNKNOWN]: null, [N.WEB_MERCATOR]: null, [N.PLATE_CARREE]: null, [N.WGS84]: null, [N.WGS84_ECEF]: null }, [N.SPHERICAL_MOON_PCPF]: { [N.CGCS2000]: null, [N.GCSMARS2000]: null, [N.GCSMOON2000]: z, [N.LON_LAT]: z, [N.SPHERICAL_ECEF]: null, [N.SPHERICAL_MARS_PCPF]: null, [N.SPHERICAL_MOON_PCPF]: I, [N.UNKNOWN]: null, [N.WEB_MERCATOR]: null, [N.PLATE_CARREE]: null, [N.WGS84]: null, [N.WGS84_ECEF]: null }, [N.UNKNOWN]: { [N.CGCS2000]: null, [N.GCSMARS2000]: null, [N.GCSMOON2000]: null, [N.LON_LAT]: null, [N.SPHERICAL_ECEF]: null, [N.SPHERICAL_MARS_PCPF]: null, [N.SPHERICAL_MOON_PCPF]: null, [N.UNKNOWN]: I, [N.WEB_MERCATOR]: null, [N.PLATE_CARREE]: null, [N.WGS84]: null, [N.WGS84_ECEF]: null }, [N.LON_LAT]: { [N.CGCS2000]: I, [N.GCSMARS2000]: I, [N.GCSMOON2000]: I, [N.LON_LAT]: I, [N.SPHERICAL_ECEF]: y, [N.SPHERICAL_MARS_PCPF]: x, [N.SPHERICAL_MOON_PCPF]: k, [N.UNKNOWN]: null, [N.WEB_MERCATOR]: d, [N.PLATE_CARREE]: U, [N.WGS84]: I, [N.WGS84_ECEF]: Y }, [N.PLATE_CARREE]: { [N.CGCS2000]: m, [N.GCSMARS2000]: null, [N.GCSMOON2000]: null, [N.LON_LAT]: m, [N.SPHERICAL_ECEF]: j, [N.SPHERICAL_MARS_PCPF]: null, [N.SPHERICAL_MOON_PCPF]: null, [N.UNKNOWN]: null, [N.WEB_MERCATOR]: q, [N.PLATE_CARREE]: I, [N.WGS84]: m, [N.WGS84_ECEF]: g } };
function G2(n, C2) {
  var _a;
  return (_a = F(n, C2)) == null ? void 0 : _a.projector;
}
function F(n, C2) {
  if (null == n || null == C2) return null;
  if (Cn.source.spatialReference === n && Cn.dest.spatialReference === C2) return Cn;
  const E = f2(n, Cn.source), l2 = f2(C2, Cn.dest);
  return E === N.UNKNOWN && l2 === N.UNKNOWN ? s3(n, C2) ? Cn.projector = I : Cn.projector = null : Cn.projector = L[E][l2], Cn;
}
function f2(n, C2) {
  return n ? C2.spatialReference === n ? C2.spatialReferenceId : (C2.spatialReference = n, "metersPerUnit" in C2 && (C2.metersPerUnit = Q(n, 1)), A(n) ? C2.spatialReferenceId = N.SPHERICAL_ECEF : C(n) ? C2.spatialReferenceId = N.WGS84 : O(n) ? C2.spatialReferenceId = N.WEB_MERCATOR : f(n) ? C2.spatialReferenceId = N.PLATE_CARREE : n.wkt === u.wkt ? C2.spatialReferenceId = N.WGS84_ECEF : n.wkid === S.CGCS2000 ? C2.spatialReferenceId = N.CGCS2000 : n.wkt === G.wkt ? C2.spatialReferenceId = N.SPHERICAL_MARS_PCPF : n.wkt === p.wkt ? C2.spatialReferenceId = N.SPHERICAL_MOON_PCPF : D(n) ? C2.spatialReferenceId = N.GCSMARS2000 : W(n) ? C2.spatialReferenceId = N.GCSMOON2000 : C2.spatialReferenceId = N.UNKNOWN) : N.UNKNOWN;
}
function I(n, C2, E, l2) {
  n !== E && (E[l2++] = n[C2++], E[l2++] = n[C2++], E[l2] = n[C2]);
}
function T(n, C2, E, l2) {
  E[l2] = ln * (n[C2] / tn), E[l2 + 1] = ln * (en - 2 * Math.atan(Math.exp(-n[C2 + 1] / tn))), E[l2 + 2] = n[C2 + 2];
}
function p2(n, C2, E, l2) {
  const e2 = n[C2] / tn, t2 = en - 2 * Math.atan(Math.exp(-n[C2 + 1] / tn)), S2 = tn + n[C2 + 2], r2 = Math.cos(t2) * S2;
  E[l2] = Math.cos(e2) * r2, E[l2 + 1] = Math.sin(e2) * r2, E[l2 + 2] = Math.sin(t2) * S2;
}
function H(n, C2, E, l2) {
  T(n, C2, E, l2), Y(E, l2, E, l2);
}
function h(n, E, l2, e2, t2) {
  const S2 = 0.4999999 * Math.PI, r2 = r(En * n[E + 1], -S2, S2), u2 = Math.sin(r2);
  l2[e2++] = En * n[E] * t2.radius, l2[e2++] = t2.halfSemiMajorAxis * Math.log((1 + u2) / (1 - u2)), l2[e2] = n[E + 2];
}
function d(n, C2, E, l2) {
  h(n, C2, E, l2, t);
}
function U(n, C2, E, l2) {
  E[l2] = n[C2] * Sn, E[l2 + 1] = n[C2 + 1] * Sn, E[l2 + 2] = n[C2 + 2];
}
function m(n, C2, E, l2) {
  E[l2] = n[C2] * rn, E[l2 + 1] = n[C2 + 1] * rn, E[l2 + 2] = n[C2 + 2];
}
function K(n, C2, E, l2) {
  T(n, C2, E, l2), U(E, l2, E, l2);
}
function w(n, C2, E, l2) {
  Z(n, C2, E, l2), U(E, l2, E, l2);
}
function B(n, C2, E, l2) {
  J(n, C2, E, l2), U(E, l2, E, l2);
}
function j(n, C2, E, l2) {
  m(n, C2, E, l2), y(E, l2, E, l2);
}
function q(n, C2, E, l2) {
  m(n, C2, E, l2), d(E, l2, E, l2);
}
function g(n, C2, E, l2) {
  m(n, C2, E, l2), Y(E, l2, E, l2);
}
function b(n, C2, E, l2, e2) {
  const t2 = e2 + n[C2 + 2], S2 = En * n[C2 + 1], r2 = En * n[C2], u2 = Math.cos(S2) * t2;
  E[l2] = Math.cos(r2) * u2, E[l2 + 1] = Math.sin(r2) * u2, E[l2 + 2] = Math.sin(S2) * t2;
}
function k(n, C2, E, l2) {
  b(n, C2, E, l2, s2.radius);
}
function x(n, C2, E, l2) {
  b(n, C2, E, l2, e.radius);
}
function y(n, C2, E, l2) {
  b(n, C2, E, l2, t.radius);
}
function v(n, C2, E, e2, t2) {
  const S2 = n[C2], r2 = n[C2 + 1], u2 = n[C2 + 2], R = Math.sqrt(S2 * S2 + r2 * r2 + u2 * u2), a = l(u2 / (0 === R ? 1 : R)), P = Math.atan2(r2, S2);
  E[e2++] = ln * P, E[e2++] = ln * a, E[e2] = R - t2;
}
function z(n, C2, E, l2) {
  v(n, C2, E, l2, s2.radius);
}
function D2(n, C2, E, l2) {
  v(n, C2, E, l2, e.radius);
}
function J(n, C2, E, l2) {
  v(n, C2, E, l2, t.radius);
}
function Q2(n, C2, E, l2) {
  J(n, C2, E, l2), d(E, l2, E, l2);
}
function V(n, C2, E, l2) {
  J(n, C2, E, l2), Y(E, l2, E, l2);
}
function X(n, C2, E, l2, e2) {
  const t2 = En * n[C2], S2 = En * n[C2 + 1], r2 = n[C2 + 2], u2 = Math.sin(S2), R = Math.cos(S2), a = e2.radius / Math.sqrt(1 - e2.eccentricitySquared * u2 * u2);
  E[l2++] = (a + r2) * R * Math.cos(t2), E[l2++] = (a + r2) * R * Math.sin(t2), E[l2++] = (a * (1 - e2.eccentricitySquared) + r2) * u2;
}
function Y(n, C2, E, l2) {
  X(n, C2, E, l2, t);
}
function Z(n, C2, E, l2) {
  const e2 = s4, t2 = n[C2], S2 = n[C2 + 1], r2 = n[C2 + 2];
  let u2, R, a, _, s5, c, M2, o2, i, O2, N2, L2, G3, F2, W2, f3, I2, T2, p3, H2, h2;
  u2 = Math.abs(r2), R = t2 * t2 + S2 * S2, a = Math.sqrt(R), _ = R + r2 * r2, s5 = Math.sqrt(_), H2 = Math.atan2(S2, t2), c = r2 * r2 / _, M2 = R / _, F2 = e2.a2 / s5, W2 = e2.a3 - e2.a4 / s5, M2 > 0.3 ? (o2 = u2 / s5 * (1 + M2 * (e2.a1 + F2 + c * W2) / s5), p3 = Math.asin(o2), O2 = o2 * o2, i = Math.sqrt(1 - O2)) : (i = a / s5 * (1 - c * (e2.a5 - F2 - M2 * W2) / s5), p3 = Math.acos(i), O2 = 1 - i * i, o2 = Math.sqrt(O2)), N2 = 1 - t.eccentricitySquared * O2, L2 = t.radius / Math.sqrt(N2), G3 = e2.a6 * L2, F2 = a - L2 * i, W2 = u2 - G3 * o2, I2 = i * F2 + o2 * W2, f3 = i * W2 - o2 * F2, T2 = f3 / (G3 / N2 + I2), p3 += T2, h2 = I2 + f3 * T2 / 2, r2 < 0 && (p3 = -p3), E[l2++] = ln * H2, E[l2++] = ln * p3, E[l2] = h2;
}
function $(n, C2, E, l2) {
  Z(n, C2, E, l2), y(E, l2, E, l2);
}
function nn(n, C2, E, l2) {
  Z(n, C2, E, l2), d(E, l2, E, l2);
}
var Cn = { source: { spatialReference: null, spatialReferenceId: N.UNKNOWN, metersPerUnit: 1 }, dest: { spatialReference: null, spatialReferenceId: N.UNKNOWN, metersPerUnit: 1 }, projector: I };
var En = s(1);
var ln = M(1);
var en = 0.5 * Math.PI;
var tn = t.radius;
var Sn = tn * Math.PI / 180;
var rn = 180 / (tn * Math.PI);

// node_modules/@arcgis/core/geometry/projection/projectBuffer.js
function o(o2, n, e2, f3, l2, u2, c = Math.floor(o2.length / 3)) {
  const i = G2(n, l2);
  if (null == i) return false;
  if (i === I) {
    if (o2 === f3 && e2 === u2) return true;
    const r2 = e2 + 3 * c;
    for (let t2 = e2, n2 = u2; t2 < r2; t2++, n2++) f3[n2] = o2[t2];
    return true;
  }
  const s5 = e2 + 3 * c;
  for (let r2 = e2, t2 = u2; r2 < s5; r2 += 3, t2 += 3) i(o2, r2, f3, t2);
  return true;
}

export {
  N,
  L,
  G2 as G,
  F,
  h,
  v,
  o
};
//# sourceMappingURL=chunk-QTWG47SG.js.map
