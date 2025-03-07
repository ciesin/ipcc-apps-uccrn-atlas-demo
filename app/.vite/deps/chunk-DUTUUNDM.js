import {
  Ro,
  ce,
  ee,
  eh,
  n as n2,
  nu,
  re
} from "./chunk-NEFPLHSJ.js";
import {
  Lt,
  Mt,
  a,
  ei,
  ks,
  ls,
  os,
  w,
  zt
} from "./chunk-67PUVBHA.js";
import {
  n,
  s
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/chunks/Distance2DCalculator-Coa0qAFt.js
function v() {
  return { outPoint: new ei(), index: -1, t: Number.NaN };
}
function N(e, t, n3) {
  return { outPoint: e.clone(), index: t, t: n3 };
}
function f(e, t, n3, i) {
  e.outPoint.assign(t), e.index = n3, e.t = i;
}
function P(e, t) {
  e.outPoint.assign(t.outPoint), e.index = t.index, e.t = t.t;
}
function I(e, t, n3, i) {
  e.index = n3, e.t = i, t.queryCoord2D(e.t, e.outPoint);
}
function d(e, t) {
  const n3 = v();
  P(n3, e), P(e, t), P(t, n3);
}
function q(e, t, i, r, s2, o) {
  if (e.getGeometryType() === a.enumPolygon) {
    for (; r.nextPath(); ) if (r.hasNextSegment()) {
      const t2 = r.nextSegment();
      if (0 !== Ro(e, t2.getEndXY(), 0)) return f(s2, t2.getEndXY(), -1, Number.NaN), f(o, t2.getEndXY(), -1, Number.NaN), true;
    }
    r.resetToFirstPath();
  }
  if (t.getGeometryType() === a.enumPolygon) {
    for (; i.nextPath(); ) if (i.hasNextSegment()) {
      const e2 = i.nextSegment();
      if (0 !== Ro(t, e2.getEndXY(), 0)) return f(s2, e2.getEndXY(), -1, Number.NaN), f(o, e2.getEndXY(), -1, Number.NaN), true;
    }
    i.resetToFirstPath();
  }
  return false;
}
function M(e) {
  const t = e.getPathCount(), n3 = Lt(e.getSegmentCount(), 0);
  let i = 0;
  for (let r = 0; r < t; ++r) {
    const t2 = i + e.getSegmentCountPath(r);
    for (let s2 = i, o = e.getPathStart(r); s2 < t2; ++s2, ++o) n3[s2] = o;
    i = t2;
  }
  return ce(e.getPointCount(), n3), n3;
}
function x(e, t) {
  return !!Number.isNaN(t) || e <= t;
}
function E(e) {
  const t = new eh();
  return t.addEnvelope(e, false), t;
}
var b = class {
  constructor(e, t) {
    if (this.m_env2DgeometryA = null, this.m_env2DgeometryB = null, this.m_progressCounter = 0, this.m_progressTracker = t, this.m_maxSqrDistance = e * e, this.m_maxDistance = e, this.m_bIsNearCalc = false, Number.isNaN(this.m_maxDistance) ? this.m_maxDistance = Number.POSITIVE_INFINITY : this.m_maxDistance = e, this.m_maxSqrDistance = this.m_maxDistance * this.m_maxDistance, Number.isFinite(this.m_maxSqrDistance)) {
      let e2 = Math.sqrt(this.m_maxSqrDistance);
      for (; e2 < this.m_maxDistance; ) this.m_maxSqrDistance *= 1 + Number.EPSILON, e2 = Math.sqrt(this.m_maxSqrDistance);
    }
  }
  calculate(e, t, n3, i) {
    if (e.getGeometryType() !== ee.type || t.getGeometryType() !== ee.type) {
      this.m_env2DgeometryA = new n2(), this.m_env2DgeometryB = new n2(), e.queryEnvelope(this.m_env2DgeometryA), t.queryEnvelope(this.m_env2DgeometryB);
      if (!x(this.m_env2DgeometryA.distanceFromEnvelope(this.m_env2DgeometryB), this.m_maxDistance)) return Number.POSITIVE_INFINITY;
    }
    const r = N(new ei(), os(), Number.NaN), s2 = N(new ei(), os(), Number.NaN), o = this._ExecuteBruteForce(e, t, r, s2);
    return x(o, this.m_maxDistance) ? (null !== n3 && P(n3, r), null !== i && P(i, s2), o) : Number.POSITIVE_INFINITY;
  }
  isNear(e, t) {
    if (this.m_bIsNearCalc = true, e.isEmpty() || t.isEmpty()) return false;
    if (e === t) return true;
    let n3 = true;
    if (e.getGeometryType() !== ee.type && e.getGeometryType() !== re.type || t.getGeometryType() !== ee.type && t.getGeometryType() !== re.type || (n3 = false), n3) {
      if (this.m_env2DgeometryA = new n2(), this.m_env2DgeometryB = new n2(), e.queryEnvelope(this.m_env2DgeometryA), t.queryEnvelope(this.m_env2DgeometryB), !(this.m_env2DgeometryA.sqrMaxMinDistanceEnvelope(this.m_env2DgeometryB) > this.m_maxSqrDistance)) return true;
      if (this.m_env2DgeometryA.sqrDistanceEnvelope(this.m_env2DgeometryB, null, null) > this.m_maxSqrDistance) return false;
    }
    const i = N(new ei(), os(), Number.NaN), r = N(new ei(), os(), Number.NaN);
    return this._ExecuteBruteForce(e, t, i, r) <= this.m_maxDistance;
  }
  progress_(e = false) {
  }
  _ExecuteBruteForce(e, t, i, r) {
    switch (e.getGeometryType()) {
      case a.enumPoint:
        return this.distancePointGeometry(e, t, i, r);
      case a.enumMultiPoint:
        return this.distanceMultipointGeometry(e, t, i, r);
      case a.enumEnvelope:
        return this.distanceEnvelopeGeometry(e, t, i, r);
      case a.enumPolyline:
      case a.enumPolygon:
        return this.distanceMultipathGeometry(e, t, i, r);
      default:
        return Number.NaN;
    }
  }
  distancePointGeometry(e, t, i, r) {
    switch (t.getGeometryType()) {
      case a.enumPoint:
        return this.distancePointPoint(e, t, i, r);
      case a.enumMultiPoint:
        return this.distancePointMultipoint(e, t, i, r);
      case a.enumPolyline:
      case a.enumPolygon:
        return this.distancePointMultipath(e, t, i, r);
      case a.enumEnvelope:
        return this.distancePointEnvelope(e, t, i, r);
      default:
        return Number.NaN;
    }
  }
  distancePointPoint(e, t, n3, i) {
    const r = e.getXY(), s2 = t.getXY();
    return f(n3, r, 0, 0), f(i, s2, 0, 0), Math.sqrt(ei.sqrDistance(r, s2));
  }
  distancePointMultipoint(e, t, n3, i) {
    const r = e.getXY();
    let s2 = this.m_maxSqrDistance, o = s2, m = false;
    const a2 = t.getPointCount(), c = new ei();
    for (let h = 0; h < a2; ++h) if (t.queryXY(h, c), o = ei.sqrDistance(r, c), this.m_bIsNearCalc) {
      if (o <= s2) return 0;
    } else if (!(o > s2) && (!m && o === s2 || o < s2) && (s2 = o, f(n3, r, 0, 0), f(i, c, h, 0), m = true, 0 === s2)) return 0;
    return m ? Math.sqrt(s2) : Number.POSITIVE_INFINITY;
  }
  distancePointMultipath(e, t, i, r) {
    const s2 = !this.m_env2DgeometryA.isIntersecting(this.m_env2DgeometryB), o = e.getXY();
    if (!s2 && t.getGeometryType() === a.enumPolygon && 0 !== Ro(t, o, 0)) return f(i, o, 0, 0), f(r, o, -1, Number.NaN), 0;
    t.getImpl().getAccelerators();
    let a2 = this.m_maxSqrDistance, c = a2, h = -1;
    const l = new n2(), g = t.querySegmentIterator();
    let y = false;
    for (; g.nextPath(); ) for (; g.hasNextSegment(); ) {
      const e2 = g.nextSegment();
      e2.queryEnvelope(l);
      const t2 = l.sqrDistance(o);
      if (t2 > a2) continue;
      if (!this.m_bIsNearCalc && y && t2 === a2) continue;
      h = e2.getClosestCoordinate(o, false);
      const n3 = e2.getCoord2D(h);
      if (c = ei.sqrDistance(o, n3), this.m_bIsNearCalc) {
        if (c <= a2) return 0;
      } else if (!(c > a2) && (!y || c < a2) && (a2 = c, f(i, o, 0, 0), f(r, n3, g.getStartPointIndex(), h), y = true, 0 === a2)) return 0;
    }
    return y ? Math.sqrt(a2) : Number.POSITIVE_INFINITY;
  }
  distancePointEnvelope(e, t, n3, i) {
    const r = e.getXY();
    f(n3, r, 0, 0), f(i, r, -1, Number.NaN);
    const s2 = t.asEnvelope2D();
    return !s2.contains(r) ? Math.sqrt(s2.sqrDistance(r, i.outPoint)) : 0;
  }
  distanceMultipointGeometry(e, t, i, r) {
    switch (t.getGeometryType()) {
      case a.enumPoint: {
        this.m_env2DgeometryB = Mt(this.m_env2DgeometryA, this.m_env2DgeometryA = this.m_env2DgeometryB);
        const n3 = this.distancePointMultipoint(t, e, r, i);
        return this.m_env2DgeometryB = Mt(this.m_env2DgeometryA, this.m_env2DgeometryA = this.m_env2DgeometryB), n3;
      }
      case a.enumMultiPoint:
        return this.distanceMultipointMultipoint(e, t, i, r, 1, 1);
      case a.enumPolyline:
      case a.enumPolygon:
        return this.distanceMultipointMultipath(e, t, i, r);
      case a.enumEnvelope:
        return this.distanceMultipointMultipath(e, E(t), i, r);
      default:
        return Number.NaN;
    }
  }
  distanceMultipointMultipoint(n3, i, r, s2, o, m) {
    const a2 = { stack: [], error: void 0, hasError: false };
    try {
      if (this.m_bIsNearCalc && 1 === o && 1 === m) {
        const e = Math.trunc(ks(Math.sqrt(n3.getPointCount()) + 1, 1, ls())), t2 = Math.trunc(ks(Math.sqrt(i.getPointCount()) + 1, 1, ls()));
        if ((e >= 4 || t2 >= 4) && this.distanceMultipointMultipoint(n3, i, r, s2, e, t2) <= this.m_maxSqrDistance) return 0;
      }
      let t = this.m_maxSqrDistance;
      const y = [n3], _ = [i], D = this.swapGeometriesIfBGtA(y, _);
      D && (this.m_env2DgeometryB = Mt(this.m_env2DgeometryA, this.m_env2DgeometryA = this.m_env2DgeometryB), m = Mt(o, o = m), d(r, s2)), n(a2, zt(() => {
        d(r, s2), this.m_env2DgeometryB = Mt(this.m_env2DgeometryA, this.m_env2DgeometryA = this.m_env2DgeometryB);
      }, !D), false);
      const p = y[0].getImpl(), v2 = _[0].getImpl(), N2 = p.getPointCount(), P2 = v2.getPointCount(), I2 = P2 > 1;
      let q2 = false;
      const M2 = new ei(), x2 = new ei();
      for (let e = 0; e < N2; e += o) {
        if (p.queryXY(e, M2), I2) {
          const e2 = this.m_env2DgeometryB.sqrDistance(M2);
          if (this.m_bIsNearCalc) {
            if (e2 > t) continue;
            if (this.m_env2DgeometryB.sqrMaxMinDistance(M2) <= t) return 0;
          } else if (e2 >= t) continue;
        }
        for (let n4 = 0; n4 < P2; n4 += m) {
          v2.queryXY(n4, x2);
          const i2 = ei.sqrDistance(M2, x2);
          if (this.m_bIsNearCalc) {
            if (i2 <= t) return 0;
          } else if (!(i2 > t || q2 && i2 === t) && (!q2 || i2 < t) && (f(r, M2, e, 0), f(s2, x2, n4, 0), q2 = true, t = i2, 0 === t)) return q2 ? Math.sqrt(t) : Number.POSITIVE_INFINITY;
        }
      }
      return q2 ? Math.sqrt(t) : Number.POSITIVE_INFINITY;
    } catch (y) {
      a2.error = y, a2.hasError = true;
    } finally {
      s(a2);
    }
  }
  distanceMultipointMultipath(e, t, i, r) {
    let s2 = !!this.m_env2DgeometryA.isIntersecting(this.m_env2DgeometryB) && t.getGeometryType() === a.enumPolygon;
    const o = t.querySegmentIterator();
    o.stripAttributes();
    const a2 = new n2(), c = new ei();
    let h = this.m_maxSqrDistance;
    const l = e.getImpl(), g = l.getPointCount(), y = g > 1;
    let D = false;
    for (; o.nextPath(); ) for (; o.hasNextSegment(); ) {
      const e2 = o.nextSegment();
      if (e2.queryLooseEnvelope(a2), y) {
        const e3 = a2.sqrDistanceEnvelope(this.m_env2DgeometryA, null, null);
        if (this.m_bIsNearCalc) {
          if (e3 > h) continue;
        } else if (e3 > h || D && e3 === h) continue;
      }
      for (let n3 = 0; n3 < g; n3++) {
        if (l.queryXY(n3, c), s2 && 0 !== Ro(t, c, 0)) return f(i, c, -1, Number.NaN), f(r, c, n3, 0), 0;
        {
          const e3 = a2.sqrDistance(c);
          if (this.m_bIsNearCalc) {
            if (e3 > h) continue;
          } else if (e3 > h) continue;
        }
        const u = e2.getClosestCoordinate(c, false), g2 = e2.getCoord2D(u);
        c.subThis(g2);
        const y2 = c.sqrLength();
        if (this.m_bIsNearCalc) {
          if (y2 <= h) return 0;
        } else if (!(y2 > h) && (!D || y2 < h) && (h = y2, f(i, l.getXY(n3), n3, 0), f(r, g2, o.getStartPointIndex(), u), D = true, 0 === h)) return 0;
      }
      s2 = false;
    }
    return D ? Math.sqrt(h) : Number.POSITIVE_INFINITY;
  }
  distanceEnvelopeGeometry(e, t, i, r) {
    switch (t.getGeometryType()) {
      case a.enumPoint:
        return this.distancePointEnvelope(t, e, r, i);
      case a.enumMultiPoint: {
        this.m_env2DgeometryB = Mt(this.m_env2DgeometryA, this.m_env2DgeometryA = this.m_env2DgeometryB);
        const n3 = this.distanceMultipointMultipath(t, E(e), r, i);
        return this.m_env2DgeometryB = Mt(this.m_env2DgeometryA, this.m_env2DgeometryA = this.m_env2DgeometryB), n3;
      }
      case a.enumPolyline:
      case a.enumPolygon:
        return this.distanceMultipathMultipath(E(e), t, i, r);
      case a.enumEnvelope:
        return this.distanceEnvelopeEnvelope(e, t, i, r);
      default:
        return Number.NaN;
    }
  }
  distanceEnvelopeEnvelope(e, t, n3, i) {
    n3.t = Number.NaN, n3.index = -1, i.t = Number.NaN, i.index = -1;
    const r = e.asEnvelope2D(), s2 = t.asEnvelope2D();
    return Math.sqrt(r.sqrDistanceEnvelope(s2, n3.outPoint, i.outPoint));
  }
  distanceMultipathGeometry(e, t, i, r) {
    switch (t.getGeometryType()) {
      case a.enumPoint: {
        this.m_env2DgeometryB = Mt(this.m_env2DgeometryA, this.m_env2DgeometryA = this.m_env2DgeometryB);
        const n3 = this.distancePointMultipath(t, e, r, i);
        return this.m_env2DgeometryB = Mt(this.m_env2DgeometryA, this.m_env2DgeometryA = this.m_env2DgeometryB), n3;
      }
      case a.enumMultiPoint: {
        this.m_env2DgeometryB = Mt(this.m_env2DgeometryA, this.m_env2DgeometryA = this.m_env2DgeometryB);
        const n3 = this.distanceMultipointMultipath(t, e, r, i);
        return this.m_env2DgeometryB = Mt(this.m_env2DgeometryA, this.m_env2DgeometryA = this.m_env2DgeometryB), n3;
      }
      case a.enumPolyline:
      case a.enumPolygon:
        return this.distanceMultipathMultipath(e, t, i, r);
      case a.enumEnvelope:
        return this.distanceMultipathMultipath(e, E(t), i, r);
      default:
        return Number.NaN;
    }
  }
  distanceMultipathMultipath(n3, i, r, o) {
    const m = { stack: [], error: void 0, hasError: false };
    try {
      const t = [n3], a2 = [i], u = this.swapGeometriesIfAGtB(t, a2);
      u && (this.m_env2DgeometryB = Mt(this.m_env2DgeometryA, this.m_env2DgeometryA = this.m_env2DgeometryB), d(r, o)), n(m, zt(() => {
        d(r, o), this.m_env2DgeometryB = Mt(this.m_env2DgeometryA, this.m_env2DgeometryA = this.m_env2DgeometryB);
      }, !u), false);
      const y = t[0], D = a2[0], p = y.querySegmentIterator();
      p.stripAttributes();
      const N2 = D.querySegmentIterator();
      if (N2.stripAttributes(), this.m_bIsNearCalc && this.m_env2DgeometryA.sqrMaxMinDistanceEnvelope(this.m_env2DgeometryB) <= this.m_maxSqrDistance) return 0;
      if (this.m_bIsNearCalc) {
        const e = Math.trunc(ks(Math.sqrt(y.getPointCount()) + 1, 1, ls())), t2 = Math.trunc(ks(Math.sqrt(y.getPointCount()) + 1, 1, ls()));
        if (this.distanceMultipointMultipoint(y, D, r, o, e, t2) <= this.m_maxSqrDistance) return 0;
      }
      if (!!this.m_env2DgeometryA.isIntersecting(this.m_env2DgeometryB)) {
        const e = v(), t2 = v();
        if (q(y, D, p, N2, e, t2)) return P(r, e), P(o, t2), 0;
      }
      const f2 = M(y), x2 = [], E2 = new nu(), b2 = new n2(), B = new n2(), S = new n2();
      let A = this.m_maxSqrDistance, T = true, C = false;
      for (let e = 0, n4 = f2.length; e < n4; ++e) {
        y.querySegment(f2[e], E2, true);
        const t2 = E2.get();
        if (t2.queryEnvelope(b2), !(b2.sqrDistanceEnvelope(this.m_env2DgeometryB, null, null) > A)) {
          if (this.m_bIsNearCalc && b2.sqrMaxDistanceEnvelope(this.m_env2DgeometryB) <= A) return 0;
          for (; N2.nextPath(); ) {
            if (this.progress_(), T) D.queryPathEnvelope(N2.getPathIndex(), S), x2[N2.getPathIndex()] = S.clone();
            else if (b2.sqrDistanceEnvelope(x2[N2.getPathIndex()], null, null) > A) continue;
            for (; N2.hasNextSegment(); ) {
              const n5 = N2.nextSegment();
              if (n5.queryEnvelope(B), b2.sqrDistanceEnvelope(B, null, null) <= A) {
                const i2 = !b2.isIntersecting(B), s2 = [0], m2 = [0];
                let a3 = t2.distance(n5, i2, s2, m2);
                if (a3 *= a3, this.m_bIsNearCalc && a3 <= this.m_maxSqrDistance) return 0;
                if (a3 < A || a3 === A && f2[e] < r.index) {
                  if (C = true, I(r, t2, f2[e], s2[0]), I(o, n5, N2.getStartPointIndex(), m2[0]), 0 === a3) return 0;
                  A = a3;
                }
              }
            }
          }
          N2.resetToFirstPath(), T = false;
        }
      }
      return C ? Math.sqrt(A) : Number.POSITIVE_INFINITY;
    } catch (a2) {
      m.error = a2, m.hasError = true;
    } finally {
      s(m);
    }
  }
  swapGeometriesIfAGtB(e, t) {
    return w(e[0]) > w(t[0]) && (t[0] = Mt(e[0], e[0] = t[0]), true);
  }
  swapGeometriesIfBGtA(e, t) {
    return this.swapGeometriesIfAGtB(t, e);
  }
};

export {
  b
};
//# sourceMappingURL=chunk-DUTUUNDM.js.map
