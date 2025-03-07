import {
  r
} from "./chunk-CVKVLVEF.js";
import {
  e as e2
} from "./chunk-B7NCVJDB.js";
import {
  e
} from "./chunk-YUVX6H42.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  h
} from "./chunk-4LTV6KQ5.js";

// node_modules/@arcgis/core/geometry/geometryEngine.js
function i(e3) {
  const r2 = Array.isArray(e3) ? e3[0].spatialReference : e3.spatialReference;
  return r2 ? h(g, r2) : g.WGS84;
}
function o(n) {
  return e2.extendedSpatialReferenceInfo(n);
}
function c(n, t) {
  return e(n), e2.clip(r, i(n), n, t);
}
function f(n, t) {
  return e(n), e2.cut(r, i(n), n, t);
}
function s(n, t) {
  return e(n), e(t), e2.contains(r, i(n), n, t);
}
function a(n, t) {
  return e(n), e(t), e2.crosses(r, i(n), n, t);
}
function l(n, t, o2) {
  return e(n), e(t), e2.distance(r, i(n), n, t, o2);
}
function p(n, t) {
  return e(n), e(t), e2.equals(r, i(n), n, t);
}
function m(n, t) {
  return e(n), e(t), e2.intersects(r, i(n), n, t);
}
function d(n, t) {
  return e(n), e(t), e2.touches(r, i(n), n, t);
}
function g2(n, t) {
  return e(n), e(t), e2.within(r, i(n), n, t);
}
function h2(n, t) {
  return e(n), e(t), e2.disjoint(r, i(n), n, t);
}
function w(n, t) {
  return e(n), e(t), e2.overlaps(r, i(n), n, t);
}
function R(n, t, o2) {
  return e(n), e(t), e2.relate(r, i(n), n, t, o2);
}
function x(n) {
  return e(n), e2.isSimple(r, i(n), n);
}
function y(n) {
  return e(n), e2.simplify(r, i(n), n);
}
function S(n, e3 = false) {
  return e2.convexHull(r, i(n), n, e3);
}
function j(n, t) {
  return e(t), e2.difference(r, i(n), n, t);
}
function A(n, t) {
  return e(t), e2.symmetricDifference(r, i(n), n, t);
}
function D(n, t) {
  return e(t), e2.intersect(r, i(n), n, t);
}
function T(n) {
  return e2.union(r, i(n), n);
}
function E(n, e3, t, o2, c2, f2) {
  return e2.offset(r, i(n), n, e3, t, o2, c2, f2);
}
function J(n, e3, t, o2 = false) {
  return e2.buffer(r, i(n), n, e3, t, o2);
}
function L(n, e3, t, o2, c2, f2) {
  return e2.geodesicBuffer(r, i(n), n, e3, t, o2, c2, f2);
}
function N(n, t, o2 = true) {
  return e(n), e2.nearestCoordinate(r, i(n), n, t, o2);
}
function O(n, t) {
  return e(n), e2.nearestVertex(r, i(n), n, t);
}
function V(n, t, o2, c2) {
  return e(n), e2.nearestVertices(r, i(n), n, t, o2, c2);
}
function v(n) {
  var _a;
  return "xmin" in n ? "center" in n ? n.center : null : "x" in n ? n : "extent" in n ? ((_a = n.extent) == null ? void 0 : _a.center) ?? null : null;
}
function z(n, e3, t) {
  if (null == n) throw new M();
  const u = n.spatialReference;
  if (null == (t = t ?? v(n))) throw new M();
  const i2 = n.constructor.fromJSON(e2.rotate(n, e3, t));
  return i2.spatialReference = u, i2;
}
function B(n, e3) {
  if (null == n) throw new M();
  const t = n.spatialReference;
  if (null == (e3 = e3 ?? v(n))) throw new M();
  const u = n.constructor.fromJSON(e2.flipHorizontal(n, e3));
  return u.spatialReference = t, u;
}
function G(n, e3) {
  if (null == n) throw new M();
  const t = n.spatialReference;
  if (null == (e3 = e3 ?? v(n))) throw new M();
  const u = n.constructor.fromJSON(e2.flipVertical(n, e3));
  return u.spatialReference = t, u;
}
function H(n, t, o2, c2) {
  return e(n), e2.generalize(r, i(n), n, t, o2, c2);
}
function I(n, t, o2) {
  return e(n), e2.densify(r, i(n), n, t, o2);
}
function b(n, t, o2, c2 = 0) {
  return e(n), e2.geodesicDensify(r, i(n), n, t, o2, c2);
}
function k(n, t) {
  return e(n), e2.planarArea(r, i(n), n, t);
}
function q(n, t) {
  return e(n), e2.planarLength(r, i(n), n, t);
}
function C(n, t, o2) {
  return e(n), e2.geodesicArea(r, i(n), n, t, o2);
}
function P(n, t, o2) {
  return e(n), e2.geodesicLength(r, i(n), n, t, o2);
}
function W(n, e3) {
  return e2.intersectLinesToPoints(r, i(n), n, e3);
}
function F(n, e3) {
  e2.changeDefaultSpatialReferenceTolerance(n, e3);
}
function K(n) {
  e2.clearDefaultSpatialReferenceTolerance(n);
}
var M = class extends Error {
  constructor() {
    super("Illegal Argument Exception");
  }
};

export {
  o,
  c,
  f,
  s,
  a,
  l,
  p,
  m,
  d,
  g2 as g,
  h2 as h,
  w,
  R,
  x,
  y,
  S,
  j,
  A,
  D,
  T,
  E,
  J,
  L,
  N,
  O,
  V,
  z,
  B,
  G,
  H,
  I,
  b,
  k,
  q,
  C,
  P,
  W,
  F,
  K
};
//# sourceMappingURL=chunk-S4ARCHTK.js.map
