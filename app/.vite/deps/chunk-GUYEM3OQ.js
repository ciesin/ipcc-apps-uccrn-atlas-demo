import {
  Bt,
  Ro,
  n
} from "./chunk-NEFPLHSJ.js";
import {
  P,
  a,
  ei,
  f,
  z
} from "./chunk-67PUVBHA.js";

// node_modules/@arcgis/core/chunks/SideCalculator2D-BNwb5gvz.js
function s() {
  return g(new ei(), -1, Number.NaN);
}
function g(e, t, n2) {
  return { m_coordinate: e.clone(), m_vertexIndex: t, m_geometryIndex: 0, m_distance: n2, m_bRightSide: false, isEmpty: u };
}
function u() {
  return Number.isNaN(this.m_distance);
}
function c(e, r, i = -1, s2 = -1) {
  if (e.isEmpty()) return 3;
  const g2 = e.getGeometryType();
  if (f(g2)) return a2(e, r, i, s2);
  if (g2 === a.enumPolygon) return f2(e, r, i, s2);
  if (g2 === a.enumPolyline) return m(e, r, i, s2);
  if (g2 === a.enumEnvelope) {
    const t = new n();
    return e.queryEnvelope(t), t.contains(r) ? t.containsExclusive(r) ? 1 : 2 : 0;
  }
  return 3;
}
function a2(t, n2, o, i) {
  if (o >= 0 || i >= 0) return P("");
  if (t.isDegenerate(0)) return t.getStartXY().equals(n2) ? 2 : 3;
  if (!t.isCurve()) {
    const r = ei.orientationRobust(n2, t.getStartXY(), t.getEndXY());
    return r < 0 ? 1 : r > 0 ? 0 : 2;
  }
  const s2 = t.getClosestCoordinate(n2, false), g2 = t.getTangent(s2), u2 = t.getCoord2D(s2), c2 = ei.orientationRobust(n2, u2, u2.add(g2));
  return c2 < 0 ? 1 : c2 > 0 ? 0 : 2;
}
function f2(e, t, n2, s2) {
  (n2 >= 0 || s2 >= 0) && P("");
  const g2 = new n();
  e.queryEnvelope(g2);
  const u2 = Ro(e, t, 0);
  return 0 === u2 ? 0 : 1 === u2 ? 1 : 2;
}
function m(t, n2, o, i) {
  (o < 0 && i >= 0 || o >= 0 && i < 0) && P("");
  const s2 = t.querySegmentIterator();
  if (o < 0) {
    let t2 = Number.MAX_VALUE, r = 0;
    for (; s2.nextPath(); ) for (; s2.hasNextSegment(); ) {
      const g3 = s2.nextSegment(), u2 = g3.getClosestCoordinate(n2, false), c2 = g3.getCoord2D(u2), a3 = ei.sqrDistance(c2, n2);
      a3 < t2 ? (r = 1, o = s2.getStartPointIndex(), i = s2.getPathIndex(), t2 = a3) : a3 === t2 && r++;
    }
    if (0 === r) return 3;
    if (1 === r) {
      s2.resetToVertex(o, i);
      return c(s2.nextSegment(), n2);
    }
  }
  const g2 = h(n2, s2, o, i);
  if (-1 !== g2.i1 && -1 === g2.i2) return g2.bRight1 ? 1 : 0;
  if (-1 !== g2.i1 && -1 !== g2.i2) {
    if (g2.bRight1 === g2.bRight2) return g2.bRight1 ? 1 : 0;
    {
      s2.resetToVertex(g2.i1, -1);
      const e = s2.nextSegment().getTangent(1);
      s2.resetToVertex(g2.i2, -1);
      const t2 = s2.nextSegment().getTangent(0);
      return e.crossProduct(t2) >= 0 ? 1 : 0;
    }
  }
  s2.resetToVertex(o, i);
  return c(s2.nextSegment(), n2);
}
function x(e, t, n2) {
  for (e.resetToVertex(t, n2); e.hasNextSegment(); ) {
    if (!e.nextSegment().isDegenerate(0)) return e.getStartPointIndex();
  }
  for (e.resetToVertex(t, n2); e.hasPreviousSegment(); ) {
    if (!e.previousSegment().isDegenerate(0)) return e.getStartPointIndex();
  }
  return -1;
}
function S(e, t) {
  for (e.resetToVertex(t, -1), e.nextSegment(); e.hasNextSegment(); ) {
    if (!e.nextSegment().isDegenerate(0)) return e.getStartPointIndex();
  }
  return -1;
}
function d(e, t) {
  for (e.resetToVertex(t, -1); e.hasPreviousSegment(); ) {
    if (!e.previousSegment().isDegenerate(0)) return e.getStartPointIndex();
  }
  return -1;
}
function h(t, n2, r, o) {
  const i = { i1: -1, i2: -1, bRight1: false, bRight2: false };
  if (i.i1 = x(n2, r, o), -1 !== i.i1) {
    n2.resetToVertex(i.i1, -1);
    const r2 = n2.nextSegment(), o2 = r2.getClosestCoordinate(t, false), s2 = r2.getCoord2D(o2), g2 = ei.sqrDistance(s2, t);
    {
      const e = s2.clone();
      e.subThis(r2.getStartXY());
      const n3 = t.clone();
      n3.subThis(r2.getStartXY()), i.bRight1 = e.crossProduct(n3) < 0;
    }
    if (i.i2 = S(n2, i.i1), -1 !== i.i2) {
      n2.resetToVertex(i.i2, -1);
      const r3 = n2.nextSegment(), o3 = r3.getClosestCoordinate(t, false), s3 = r3.getCoord2D(o3);
      if (ei.sqrDistance(s3, t) > g2) i.i2 = -1;
      else {
        const e = s3.clone();
        e.subThis(r3.getStartXY());
        const n3 = t.clone();
        n3.subThis(r3.getStartXY()), i.bRight2 = e.crossProduct(n3) < 0;
      }
    }
    if (-1 === i.i2 && (i.i2 = d(n2, i.i1), -1 !== i.i2)) {
      n2.resetToVertex(i.i2, -1);
      const r3 = n2.nextSegment(), o3 = r3.getClosestCoordinate(t, false), s3 = r3.getCoord2D(o3);
      if (ei.sqrDistance(s3, t) > g2) i.i2 = -1;
      else {
        const e = s3.clone();
        e.subThis(r3.getStartXY());
        const n3 = t.clone();
        n3.subThis(r3.getStartXY()), i.bRight2 = e.crossProduct(n3) < 0;
        const o4 = i.i1;
        i.i1 = i.i2, i.i2 = o4;
        const g3 = i.bRight1;
        i.bRight1 = i.bRight2, i.bRight2 = g3;
      }
    }
  }
  return i;
}

// node_modules/@arcgis/core/chunks/OperatorProximity.js
var m2 = class {
  getOperatorType() {
    return 10500;
  }
  accelerateGeometry(e, t, r) {
    return false;
  }
  canAccelerateGeometry(e) {
    return false;
  }
  supportsCurves() {
    return true;
  }
  getNearestCoordinate(n2, o, i, a3) {
    if (o.isNAN() && P("NAN xy coordinates are not allowed"), n2.isEmpty()) return s();
    switch (n2.getGeometryType()) {
      case a.enumPoint:
        return this.pointGetNearestVertex(n2, o);
      case a.enumMultiPoint:
        return this.multiVertexGetNearestVertex(n2, o);
      case a.enumPolyline:
      case a.enumPolygon:
        return this.multiPathGetNearestCoordinate(n2, o, i, a3);
      default:
        z("");
    }
  }
  getNearestVertex(n2, o) {
    if (o.isNAN() && P("NAN xy coordinates are not allowed"), n2.isEmpty()) return s();
    switch (n2.getGeometryType()) {
      case a.enumPoint:
        return this.pointGetNearestVertex(n2, o);
      case a.enumMultiPoint:
      case a.enumPolyline:
      case a.enumPolygon:
        return this.multiVertexGetNearestVertex(n2, o);
      default:
        z("");
    }
  }
  getNearestVertices(n2, s2, o, i) {
    if (0 === i && P(""), s2.isNAN() && P("NAN xy coordinates are not allowed"), n2.isEmpty()) return [];
    switch (n2.getGeometryType()) {
      case a.enumPoint:
        return this.pointGetNearestVertices(n2, s2, o, i);
      case a.enumMultiPoint:
      case a.enumPolyline:
      case a.enumPolygon:
        return this.multiVertexGetNearestVertices(n2, s2, o, i);
      default:
        z("");
    }
  }
  multiPathGetNearestCoordinate(t, s2, m3, l) {
    if (t.getGeometryType() === a.enumPolygon && m3) {
      const e = new n();
      t.queryEnvelope(e);
      const r = Bt(null, e, false);
      let i;
      if (i = Ro(t, s2, l ? 0 : r), 0 !== i) {
        const e2 = g(s2, -1, 0);
        return l && (e2.m_bRightSide = true), e2;
      }
    }
    const g2 = t.querySegmentIterator(), y = new ei();
    let N = -1, p = -1, f3 = Number.MAX_VALUE, d2 = 0;
    for (; g2.nextPath(); ) for (; g2.hasNextSegment(); ) {
      const e = g2.nextSegment(), t2 = e.getClosestCoordinate(s2, false), r = e.getCoord2D(t2), n2 = ei.sqrDistance(r, s2);
      n2 < f3 ? (d2 = 1, y.assign(r), N = g2.getStartPointIndex(), p = g2.getPathIndex(), f3 = n2) : n2 === f3 && d2++;
    }
    -1 === N && P("");
    const h2 = g(y, N, Math.sqrt(f3));
    if (l) {
      if (t.getGeometryType() !== a.enumPolygon) {
        let e = false;
        if (d2 > 1) {
          const r = c(t, s2, N, p);
          e = 0 !== r && 3 !== r;
        } else {
          g2.resetToVertex(N, p);
          const t2 = g2.nextSegment();
          e = 0 !== c(t2, s2);
        }
        h2.m_bRightSide = e;
      } else if (!m3) {
        0 !== Ro(t, s2, 0) && (h2.m_bRightSide = true);
      }
    }
    return h2;
  }
  pointGetNearestVertex(e, t) {
    const r = e.getXY(), n2 = ei.distance(r, t);
    return g(r, 0, n2);
  }
  multiVertexGetNearestVertex(e, t) {
    const r = e.getAttributeStreamRef(0), n2 = e.getPointCount();
    let s2 = -1;
    const i = new ei();
    let a3 = Number.MAX_VALUE;
    const c2 = new ei();
    for (let o = 0; o < n2; o++) {
      r.queryPoint2D(2 * o, c2);
      const e2 = ei.sqrDistance(c2, t);
      e2 < a3 && (i.assign(c2), s2 = o, a3 = e2);
    }
    return g(i, s2, Math.sqrt(a3));
  }
  pointGetNearestVertices(e, t, r, n2) {
    const s2 = [];
    if (0 !== n2) {
      const n3 = r * r, i = e.getXY(), a3 = ei.sqrDistance(i, t);
      a3 <= n3 && s2.push(g(i, 0, Math.sqrt(a3)));
    }
    return s2;
  }
  multiVertexGetNearestVertices(e, t, r, n2) {
    const s2 = [];
    if (0 !== n2) {
      const i = e.getAttributeStreamRef(0), a3 = e.getPointCount();
      s2.length = n2 + 1;
      const c2 = r * r;
      for (let e2 = 0; e2 < a3; e2++) {
        const r2 = i.read(2 * e2), n3 = i.read(2 * e2 + 1), a4 = t.x - r2, m3 = t.y - n3, l = a4 * a4 + m3 * m3;
        l <= c2 && s2.push(g(ei.construct(r2, n3), e2, Math.sqrt(l)));
      }
      s2.sort((e2, t2) => e2.m_distance - t2.m_distance);
    }
    return s2.slice(0, n2);
  }
};

export {
  m2 as m
};
//# sourceMappingURL=chunk-GUYEM3OQ.js.map
