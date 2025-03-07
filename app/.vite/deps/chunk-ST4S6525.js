import {
  a,
  b,
  ei,
  n2 as n
} from "./chunk-67PUVBHA.js";

// node_modules/@arcgis/core/chunks/Centroid-DZi-eb9F.js
function a2(e, r) {
  if (!e.isEmpty()) {
    switch (e.getGeometryType()) {
      case a.enumPolygon:
        return o(e);
      case a.enumPolyline:
        return l(e);
      case a.enumLine:
      case a.enumBezier:
      case a.enumEllipticArc:
        return i(e);
      case a.enumMultiPoint:
        return g(e);
      case a.enumEnvelope:
        return e.getCenterXY();
      case a.enumPoint:
        return e.getXY();
      default:
        return ei.construct(Number.NaN, Number.NaN);
    }
  }
  return ei.construct(Number.NaN, Number.NaN);
}
function u(t, e) {
  return o(t, e);
}
function o(t, e = -1) {
  const a3 = new n(0), u2 = new n(0), o2 = t.getImpl();
  let l2;
  const i2 = o2.hasNonLinearSegments();
  let g2;
  const m2 = o2.getXY(0);
  if (-1 === e) {
    if (g2 = o2.calculateArea2D(), 0 === g2) return d(t);
    i2 && (l2 = o2.querySegmentIterator());
    for (let t2 = 0, e2 = o2.getPathCount(); t2 < e2; t2++) s(m2, o2, t2, a3, u2), i2 && c(m2, l2, a3, u2);
  } else {
    if (g2 = o2.calculateRingArea2D(e), 0 === g2) return d(t, e);
    i2 && (l2 = o2.querySegmentIterator(), l2.resetToPath(e)), s(m2, o2, e, a3, u2), i2 && c(m2, l2, a3, u2);
  }
  const f2 = new ei(), h = new ei();
  return f2.setCoords(a3.getResult(), u2.getResult()), h.assign(f2.mul(1 / g2).add(m2)), h;
}
function s(t, e, a3, u2, o2) {
  const s2 = e.getPathStart(a3), c2 = e.getPathEnd(a3);
  if (c2 - s2 < 3) return;
  const l2 = e.getAttributeStreamRef(0), i2 = l2.readPoint2D(2 * s2), g2 = l2.readPoint2D(2 * (s2 + 1));
  g2.subThis(i2);
  const d2 = new n(0), m2 = e.hasNonLinearSegments(), f2 = 1 / 3, h = new ei();
  for (let n2 = s2 + 2; n2 < c2; n2++) {
    l2.queryPoint2D(2 * n2, h), h.subThis(i2);
    const t2 = 0.5 * h.crossProduct(g2);
    m2 && d2.add(t2);
    const e2 = f2 * t2;
    u2.add((g2.x + h.x) * e2), o2.add((g2.y + h.y) * e2), g2.setCoordsPoint2D(h);
  }
  const P = m2 ? d2.getResult() : e.calculateRingArea2D(a3), y = i2.sub(t).mul(P);
  u2.add(y.x), o2.add(y.y);
}
function c(t, n2, r, a3) {
  let u2;
  for (n2.nextPath() || b("centroid"); null !== (u2 = n2.nextCurve()); ) {
    const e = u2.calculateWeightedAreaCentroid2D(t);
    r.add(e.x), a3.add(e.y);
  }
}
function l(t) {
  return m(t.getImpl());
}
function i(t) {
  const e = t.calculateLength2D();
  if (0 === e) return t.getStartXY();
  return t.calculateWeightedCentroid2D().mul(1 / e);
}
function g(t) {
  const e = new n(0), a3 = new n(0), u2 = t.getImpl(), o2 = u2.getAttributeStreamRef(0), s2 = u2.getPointCount(), c2 = new ei();
  for (let n2 = 0; n2 < s2; n2++) o2.queryPoint2D(2 * n2, c2), e.add(c2.x), a3.add(c2.y);
  const l2 = new ei();
  return l2.setCoords(e.getResult(), a3.getResult()), l2.divThis(s2);
}
function d(t, e = -1) {
  return m(t.getImpl(), e);
}
function m(t, e = -1) {
  const a3 = -1 === e ? t.calculateLength2D() : t.calculatePathLength2D(e);
  if (0 === a3) return f(t, e);
  const u2 = new n(0), o2 = new n(0), s2 = t.querySegmentIterator();
  for (-1 !== e && s2.resetToPath(e); s2.nextPath(); ) {
    const n2 = s2.getPathIndex(), r = t.getXY(t.getPathStart(n2));
    for (; s2.hasNextSegment(); ) {
      const t2 = s2.nextSegment(), e2 = t2.calculateLength2D();
      if (0 === e2) continue;
      const n3 = t2.calculateWeightedCentroid2D().sub(r.mul(e2));
      u2.add(n3.x), o2.add(n3.y);
    }
    const a4 = r.mul(t.calculatePathLength2D(n2));
    if (u2.add(a4.x), o2.add(a4.y), -1 !== e) break;
  }
  const c2 = new ei();
  return c2.setCoords(u2.getResult(), o2.getResult()), c2.mul(1 / a3);
}
function f(t, e = -1) {
  if (-1 !== e) return t.getXY(t.getPathStart(e));
  const a3 = new n(0), u2 = new n(0);
  for (let n2 = 0; n2 < t.getPathCount(); ++n2) {
    const e2 = t.getXY(t.getPathStart(n2));
    a3.add(e2.x), u2.add(e2.y);
  }
  return ei.construct(a3.getResult(), u2.getResult()).mul(1 / t.getPathCount());
}

export {
  a2 as a,
  u
};
//# sourceMappingURL=chunk-ST4S6525.js.map
