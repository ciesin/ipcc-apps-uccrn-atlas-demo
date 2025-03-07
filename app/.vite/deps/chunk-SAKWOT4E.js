import {
  u
} from "./chunk-ST4S6525.js";
import {
  m
} from "./chunk-GUYEM3OQ.js";
import {
  C,
  k,
  x
} from "./chunk-FZLDYYQZ.js";
import {
  Ro,
  ee,
  eh,
  ia,
  n as n2,
  su,
  wt
} from "./chunk-NEFPLHSJ.js";
import {
  s,
  t
} from "./chunk-VUD5O2WG.js";
import {
  P,
  Q,
  Rt,
  a,
  as,
  ei,
  j,
  n
} from "./chunk-67PUVBHA.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorLabelPoint.js
var d = class {
  getOperatorType() {
    return 10203;
  }
  accelerateGeometry(e, t2, n4) {
    return false;
  }
  canAccelerateGeometry(e) {
    return false;
  }
  supportsCurves() {
    return true;
  }
  executeMany(e, t2) {
    return new x2(e, t2);
  }
  execute(e, t2) {
    return new x2(null, t2).labelPoint(e);
  }
};
var x2 = class extends t {
  progress_() {
  }
  tock() {
    return true;
  }
  getRank() {
    return 1;
  }
  constructor(e, t2) {
    super(), this.m_index = -1, this.m_progressCounter = 0, this.m_progressTracker = t2, this.m_inputGeoms = e;
  }
  next() {
    const e = this.m_inputGeoms.next();
    return e ? (j(e), this.m_index = this.m_inputGeoms.getGeometryID(), this.labelPoint(e)) : null;
  }
  getGeometryID() {
    return this.m_index;
  }
  labelPoint(e) {
    if (null === e && P("null pointer is not allowed"), e.getGeometryType() === a.enumPoint) return e;
    if (e.isEmpty()) return new ee({ vd: e.getDescription() });
    switch (e.getGeometryType()) {
      case a.enumPolygon:
        return this.labelPointPolygon(e);
      case a.enumPolyline:
        return this.labelPointPolyline(e);
      case a.enumMultiPoint:
        return this.labelPointMultiPoint(e);
      case a.enumEnvelope:
        return this.labelPointEnvelope(e);
      default:
        P("geometry is not supported");
    }
  }
  labelPointPolygon(e) {
    const t2 = new n2();
    e.queryEnvelope(t2);
    const n4 = wt(null, t2, true).total();
    let r = null, o = e;
    if (e.hasNonLinearSegments()) {
      const t3 = new eh({ copy: e }), a2 = ia(t3, 0.25 * n4, n4);
      n(a2 !== e), r = a2, o = r;
    }
    let u3 = 0, h = 0;
    for (let s2 = 0, a2 = o.getPathCount(); s2 < a2; ++s2) {
      const e2 = Math.abs(o.calculateRingArea2D(s2));
      e2 > h && (h = e2, u3 = s2);
    }
    const d2 = new ei();
    if (Math.abs(h) <= 2 * n4 * n4 ? d2.setNAN() : d2.assign(u(o, u3)), Number.isNaN(d2.x)) {
      const e2 = new n2();
      return o.queryPathEnvelope(u3, e2), new ee({ pt: e2.getCenter() });
    }
    if (o.getPointCount() < 4) return new ee({ x: d2.x, y: d2.y });
    const x3 = ei.getNAN(), w2 = [x3.clone(), x3.clone(), x3.clone(), x3.clone()], b2 = [Number.NaN, Number.NaN, Number.NaN, Number.NaN], C3 = [Number.NaN, Number.NaN, Number.NaN, Number.NaN];
    let _2 = false, D = new m().getNearestCoordinate(o, d2, true, false);
    if (0 === D.m_distance && (_2 = true, w2[0] = d2, D = new m().getNearestCoordinate(o, d2, false, false), D.m_distance > 0.25 * t2.minDimension() * 1.66666666)) return new ee({ x: d2.x, y: d2.y });
    b2[0] = D.m_distance, C3[0] = 0;
    const k2 = new ei();
    let A = false, E = 0.25, q = -1;
    const v = new n2();
    o.queryPathEnvelope(u3, v);
    do {
      let e2 = Number.NaN;
      if (w2[1] = this.calculateParacentroid_(o, Q(v.xmin, v.xmax, E), n4), w2[1].isNAN() || (D = new m().getNearestCoordinate(o, w2[1], false, false), e2 = D.m_distance), e2 > n4 && 1 === Ro(o, w2[1], n4)) A = true, b2[1] = e2, C3[1] = ei.sqrDistance(w2[1], d2);
      else if (e2 > q && (q = e2, k2.setCoordsPoint2D(w2[1])), E -= 0.01, E < 0.1) {
        if (!(q >= 0)) break;
        A = true, b2[1] = q, w2[1] = k2, C3[1] = ei.sqrDistance(w2[1], d2);
      }
    } while (!A);
    A = false, E = 0.5, q = -1;
    let G = 0.01, M = 1;
    do {
      let e2 = Number.NaN;
      if (w2[2] = this.calculateParacentroid_(o, Q(v.xmin, v.xmax, E), n4), w2[2].isNAN() || (D = new m().getNearestCoordinate(o, w2[2], false, false), e2 = D.m_distance), e2 > n4 && 1 === Ro(o, w2[2], n4)) A = true, b2[2] = e2, C3[2] = ei.sqrDistance(w2[2], d2);
      else if (e2 > q && (q = e2, k2.setCoordsPoint2D(w2[2])), E = 0.5 + G * M, G += 0.01, M *= -1, E < 0.3 || E > 0.7) {
        if (!(q >= 0)) break;
        A = true, b2[2] = q, w2[2] = k2, C3[2] = ei.sqrDistance(w2[2], d2);
      }
    } while (!A);
    A = false, E = 0.75, q = -1;
    do {
      let e2 = Number.NaN;
      if (w2[3] = this.calculateParacentroid_(o, Q(v.xmin, v.xmax, E), n4), w2[3].isNAN() || (D = new m().getNearestCoordinate(o, w2[3], false, false), e2 = D.m_distance), e2 > n4 && 1 === Ro(o, w2[3], n4)) A = true, b2[3] = e2, C3[3] = ei.sqrDistance(w2[3], d2);
      else if (e2 > q && (q = e2, k2.setCoordsPoint2D(w2[3])), E += 0.01, E > 0.9) {
        if (!(q >= 0)) break;
        A = true, b2[3] = q, w2[3] = k2, C3[3] = ei.sqrDistance(w2[3], d2);
      }
    } while (!A);
    const S = [0, 1, 2, 3], j2 = _2 ? 0 : 1;
    for (let s2 = j2; s2 < 4; s2++) for (let e2 = j2; e2 < 3; e2++) {
      const t3 = C3[e2], n5 = C3[e2 + 1];
      if (as(t3, n5) > 0) {
        const r2 = S[e2];
        S[e2] = S[e2 + 1], S[e2 + 1] = r2, C3[e2] = n5, C3[e2 + 1] = t3;
      }
    }
    let X = j2, L = 0, T = 0;
    for (let s2 = j2; s2 < 4; s2++) {
      switch (s2) {
        case 0:
          T = 2 * b2[S[s2]];
          break;
        case 1:
          T = 1.66666666 * b2[S[s2]];
          break;
        case 2:
          T = 1.33333333 * b2[S[s2]];
          break;
        case 3:
          T = b2[S[s2]];
      }
      T > L && (L = T, X = S[s2]);
    }
    return n(!w2[X].isNAN()), new ee({ x: w2[X].x, y: w2[X].y });
  }
  labelPointPolyline(e) {
    const t2 = new ei();
    if (e.getPointCount() > 2 * e.getPathCount()) {
      let n4 = -1, r = -Number.MAX_VALUE;
      for (let t3 = 0, i = e.getPathCount(); t3 < i; t3++) if (e.getPathSize(t3) > 2) {
        const o2 = e.calculatePathLength2D(t3);
        o2 > r && (r = o2, n4 = t3);
      }
      const o = e.getPathStart(n4), s2 = e.getPathEnd(n4), a2 = Math.trunc((o + s2) / 2);
      t2.assign(e.getXY(a2));
    } else {
      let n4 = -Number.MAX_VALUE;
      const r = e.querySegmentIterator();
      for (; r.nextPath(); ) if (r.hasNextSegment()) {
        const e2 = r.nextSegment(), o = e2.calculateLength2D();
        o > n4 && (n4 = o, t2.assign(e2.getCoord2D(e2.lengthToT(0.5 * o))));
      }
    }
    return new ee({ x: t2.x, y: t2.y });
  }
  labelPointMultiPoint(e) {
    const t2 = new n2();
    e.queryEnvelope(t2);
    const n4 = t2.getCenter(), r = new m().getNearestCoordinate(e, n4, false, false).m_coordinate;
    return new ee({ x: r.x, y: r.y });
  }
  labelPointEnvelope(e) {
    const t2 = e.getCenterXY();
    return new ee({ x: t2.x, y: t2.y });
  }
  calculateParacentroid_(e, t2, n4) {
    const r = new n2();
    e.queryEnvelope(r);
    const o = new ei(t2, 0);
    let a2 = Number.MAX_VALUE, i = Number.MAX_VALUE, l = false, N = false;
    const g = new su();
    g.setStartXYCoords(o.x, r.ymin - 1), g.setEndXYCoords(o.x, r.ymax + 1);
    const y = new n2(), P2 = new ei(), p2 = new ei(), f = Rt(ei, 2), d2 = e.querySegmentIterator();
    for (; d2.nextPath(); ) for (; d2.hasNextSegment(); ) {
      const e2 = d2.nextSegment();
      if (e2.queryEnvelope(y), n(e2.isMonotoneQuickAndDirty()), P2.setCoordsPoint2D(g.getStartXY()), p2.setCoordsPoint2D(g.getEndXY()), 0 === y.clipLine(P2, p2)) continue;
      if (1 !== g.intersect(e2, f, null, null, n4)) continue;
      const t3 = f[0].y;
      a2 > i ? t3 < a2 && (a2 = t3, l = true) : t3 < i && (i = t3, N = true);
    }
    return l && N ? o.y = (a2 + i) / 2 : o.setNAN(), o;
  }
};
var w = new d();
function b(e) {
  return w.execute(e, null);
}
function C2(e) {
  const n4 = w.executeMany(new s(e), null);
  return Array.from(n4);
}
function _() {
  return w.supportsCurves();
}

// node_modules/@arcgis/core/chunks/labelPointOperator.js
function p(e) {
  return k(b(x(e)), C(e));
}
function u2(e) {
  const r = e.map(x), p2 = C(e);
  return C2(r).map((e2) => k(e2, p2));
}
var n3 = _();
var c = Object.freeze(Object.defineProperty({ __proto__: null, execute: p, executeMany: u2, supportsCurves: n3 }, Symbol.toStringTag, { value: "Module" }));

export {
  p,
  u2 as u,
  n3 as n,
  c
};
//# sourceMappingURL=chunk-SAKWOT4E.js.map
