import {
  t
} from "./chunk-GTAKWPJC.js";
import {
  e
} from "./chunk-B7NCVJDB.js";

// node_modules/@arcgis/core/chunks/geometryEngineJSON.js
function t2(n) {
  return e.extendedSpatialReferenceInfo(n);
}
function r(t3, r2, i2) {
  return e.clip(t, t3, r2, i2);
}
function i(t3, r2, i2) {
  return e.cut(t, t3, r2, i2);
}
function a(t3, r2, i2) {
  return e.contains(t, t3, r2, i2);
}
function o(t3, r2, i2) {
  return e.crosses(t, t3, r2, i2);
}
function s(t3, r2, i2, a2) {
  return e.distance(t, t3, r2, i2, a2);
}
function u(t3, r2, i2) {
  return e.equals(t, t3, r2, i2);
}
function c(t3, r2, i2) {
  return e.intersects(t, t3, r2, i2);
}
function f(t3, r2, i2) {
  return e.touches(t, t3, r2, i2);
}
function l(t3, r2, i2) {
  return e.within(t, t3, r2, i2);
}
function p(t3, r2, i2) {
  return e.disjoint(t, t3, r2, i2);
}
function g(t3, r2, i2) {
  return e.overlaps(t, t3, r2, i2);
}
function d(t3, r2, i2, a2) {
  return e.relate(t, t3, r2, i2, a2);
}
function m(t3, r2) {
  return e.isSimple(t, t3, r2);
}
function h(t3, r2) {
  return e.simplify(t, t3, r2);
}
function y(t3, r2, i2 = false) {
  return e.convexHull(t, t3, r2, i2);
}
function x(t3, r2, i2) {
  return e.difference(t, t3, r2, i2);
}
function S(t3, r2, i2) {
  return e.symmetricDifference(t, t3, r2, i2);
}
function w(t3, r2, i2) {
  return e.intersect(t, t3, r2, i2);
}
function A(t3, r2, i2 = null) {
  return e.union(t, t3, r2, i2);
}
function D(t3, r2, i2, a2, o2, s2, u2) {
  return e.offset(t, t3, r2, i2, a2, o2, s2, u2);
}
function R(t3, r2, i2, a2, o2 = false) {
  return e.buffer(t, t3, r2, i2, a2, o2);
}
function j(t3, r2, i2, a2, o2, s2, u2) {
  return e.geodesicBuffer(t, t3, r2, i2, a2, o2, s2, u2);
}
function E(t3, r2, i2, a2 = true) {
  return e.nearestCoordinate(t, t3, r2, i2, a2);
}
function L(t3, r2, i2) {
  return e.nearestVertex(t, t3, r2, i2);
}
function T(t3, r2, i2, a2, o2) {
  return e.nearestVertices(t, t3, r2, i2, a2, o2);
}
function b(n, t3, r2, i2) {
  if (null == t3 || null == i2) throw new Error("Illegal Argument Exception");
  const a2 = e.rotate(t3, r2, i2);
  return a2.spatialReference = n, a2;
}
function v(n, t3, r2) {
  if (null == t3 || null == r2) throw new Error("Illegal Argument Exception");
  const i2 = e.flipHorizontal(t3, r2);
  return i2.spatialReference = n, i2;
}
function z(n, t3, r2) {
  if (null == t3 || null == r2) throw new Error("Illegal Argument Exception");
  const i2 = e.flipVertical(t3, r2);
  return i2.spatialReference = n, i2;
}
function I(t3, r2, i2, a2, o2) {
  return e.generalize(t, t3, r2, i2, a2, o2);
}
function V(t3, r2, i2, a2) {
  return e.densify(t, t3, r2, i2, a2);
}
function H(t3, r2, i2, a2, o2 = 0) {
  return e.geodesicDensify(t, t3, r2, i2, a2, o2);
}
function B(t3, r2, i2) {
  return e.planarArea(t, t3, r2, i2);
}
function _(t3, r2, i2) {
  return e.planarLength(t, t3, r2, i2);
}
function q(t3, r2, i2, a2) {
  return e.geodesicArea(t, t3, r2, i2, a2);
}
function C(t3, r2, i2, a2) {
  return e.geodesicLength(t, t3, r2, i2, a2);
}
function P(t3, r2, i2) {
  return null == r2 || null == i2 ? [] : e.intersectLinesToPoints(t, t3, r2, i2);
}
function G(n, t3) {
  e.changeDefaultSpatialReferenceTolerance(n, t3);
}
function M(n) {
  e.clearDefaultSpatialReferenceTolerance(n);
}
var O = Object.freeze(Object.defineProperty({ __proto__: null, buffer: R, changeDefaultSpatialReferenceTolerance: G, clearDefaultSpatialReferenceTolerance: M, clip: r, contains: a, convexHull: y, crosses: o, cut: i, densify: V, difference: x, disjoint: p, distance: s, equals: u, extendedSpatialReferenceInfo: t2, flipHorizontal: v, flipVertical: z, generalize: I, geodesicArea: q, geodesicBuffer: j, geodesicDensify: H, geodesicLength: C, intersect: w, intersectLinesToPoints: P, intersects: c, isSimple: m, nearestCoordinate: E, nearestVertex: L, nearestVertices: T, offset: D, overlaps: g, planarArea: B, planarLength: _, relate: d, rotate: b, simplify: h, symmetricDifference: S, touches: f, union: A, within: l }, Symbol.toStringTag, { value: "Module" }));

export {
  t2 as t,
  r,
  i,
  a,
  o,
  s,
  u,
  c,
  f,
  l,
  p,
  g,
  d,
  m,
  h,
  y,
  x,
  S,
  w,
  A,
  D,
  R,
  j,
  E,
  L,
  T,
  b,
  v,
  z,
  I,
  V,
  H,
  B,
  _,
  q,
  C,
  P,
  G,
  M,
  O
};
//# sourceMappingURL=chunk-CZJCM7E4.js.map
