import {
  Cc,
  Ch,
  Gu,
  I,
  Na,
  X,
  eh,
  n,
  o,
  qg,
  us
} from "./chunk-NEFPLHSJ.js";
import {
  Lt,
  P,
  a,
  b,
  ei,
  f,
  kt
} from "./chunk-67PUVBHA.js";

// node_modules/@arcgis/core/chunks/OperatorShapePreservingLength.js
function x() {
  return { m_pGcs: new ei(), m_xyz: new X(), m_factor: Number.NaN, m_geoLength: Number.NaN, setValues: d, setLength: P2, assign: S };
}
function d(e, t, s, n2) {
  this.m_factor = e, this.m_pGcs.assign(t), this.m_xyz.assign(n2), this.m_geoLength = s;
}
function P2(e) {
  this.m_geoLength = e;
}
function S(e) {
  this.m_pGcs.assign(e.m_pGcs), this.m_xyz.assign(e.m_xyz), this.m_factor = e.m_factor, this.m_geoLength = e.m_geoLength;
}
var w = class {
  getOperatorType() {
    return 10315;
  }
  supportsCurves() {
    return true;
  }
  accelerateGeometry(e, t, s) {
    return false;
  }
  canAccelerateGeometry(e) {
    return false;
  }
  _ExecuteShapePreservingLength(e, t, s, n2, a2) {
    if (e.hasNonLinearSegments()) {
      e = new o().execute(e, 0, t.getTolerance(0), 0, a2);
    }
    if (t.isPannable()) {
      let n3 = 90, r = -90;
      if (1 === s.getUnit().getUnitToBaseFactor() && (n3 *= Math.PI / 180, r *= Math.PI / 180), 2 === t.getCoordinateSystemType()) {
        let e2 = null;
        const s2 = [0, 0, 0, 0];
        e2 = t.getPECoordSys(), s2[0] = 0, s2[1] = n3, s2[2] = 0, s2[3] = r, Cc.geogToProj(e2, 2, s2), n3 = s2[1], r = s2[3];
      }
      const i = new n();
      e.queryEnvelope(i), i.ymin = r, i.ymax = n3, e = new I().execute(e, i, t, a2);
    } else {
      const s2 = t.getPCSHorizon();
      if ((e = new Ch().execute(e, s2, t, a2)) === s2) {
        const t2 = e.clone();
        e = t2;
      }
    }
    return e.isEmpty() ? 0 : this._ExecuteIterativeApproach(e, t, s, n2, 1, a2);
  }
  _ExecuteIterativeApproach(e, t, s, r, a2, i) {
    const c = Gu();
    s.querySpheroidData(c);
    const g = c.majorSemiAxis, f2 = c.e2, l = s.getUnit().getUnitToBaseFactor(), _ = 40, d2 = kt(x, _), P3 = Lt(_, Number.NaN), S2 = x(), w2 = x();
    let E;
    const G = [0, 0, 0, 0], j = t.getPECoordSys(), L = new ei(), T = new ei(), v = new ei(), D = new ei(), b2 = new ei();
    let z = 0;
    const O = e.querySegmentIterator();
    for (; O.nextPath(); ) for (; O.hasNextSegment(); ) {
      const e2 = O.nextSegment();
      L.assign(e2.getStartXY()), T.assign(e2.getEndXY()), 2 === t.getCoordinateSystemType() ? (G[0] = L.x, G[1] = L.y, G[2] = T.x, G[3] = T.y, Cc.projToGeog(j, 2, G), v.x = G[0] * l, v.y = G[1] * l, D.x = G[2] * l, D.y = G[3] * l) : (v.setCoordsPoint2D(L), D.setCoordsPoint2D(T), v.scale(l), D.scale(l));
      const s2 = new X(), r2 = new X();
      N(g, f2, v, s2), N(g, f2, D, r2);
      let i2 = C(g, s2, r2);
      S2.setValues(0, v, Number.NaN, s2), w2.setValues(1, D, i2, r2), E = a2, d2[0].assign(w2), P3[0] = a2;
      let m = 0;
      for (; ; ) {
        m > 128 && b("iterations exceeded");
        const s3 = 0.5 * (S2.m_factor + w2.m_factor), r3 = e2.getCoord2D(s3);
        2 === t.getCoordinateSystemType() ? (G[0] = r3.x, G[1] = r3.y, Cc.projToGeog(j, 1, G), b2.x = G[0] * l, b2.y = G[1] * l) : (b2.setCoordsPoint2D(r3), b2.scale(l)), v.setCoordsPoint2D(S2.m_pGcs), D.setCoordsPoint2D(w2.m_pGcs);
        const c2 = new X();
        N(g, f2, b2, c2);
        const u = C(g, S2.m_xyz, c2), p = C(g, w2.m_xyz, c2);
        i2 = w2.m_geoLength, Number.isNaN(i2) && (i2 = C(g, S2.m_xyz, w2.m_xyz));
        const h = u + p, x2 = E === a2 && h >= 20 && Math.abs(h - i2) > 1e-8 * (i2 + h);
        if (m + 2 < _ && (x2 || Math.abs(h - i2) > 0 && E > 0)) w2.setLength(p), d2[m].assign(w2), w2.setValues(s3, b2, u, c2), d2[++m].assign(w2), x2 ? (E = a2, P3[m] = a2) : (E--, P3[m - 1] = E, P3[m] = E);
        else {
          if (z += h, 0 === m) break;
          S2.assign(w2), w2.assign(d2[--m]), E = P3[m];
        }
      }
    }
    return z;
  }
  execute(n2, o2, r) {
    if (o2 && 0 !== o2.getCoordinateSystemType() || P(""), n2.isEmpty() || n2.getDimension() < 1) return 0;
    let i = null;
    const m = o2.getGCS();
    m !== o2 && (i = qg(o2, m, null));
    const u = n2.getGeometryType();
    if (u === a.enumEnvelope) {
      const e = new eh();
      return e.addEnvelope(n2, false), this._ExecuteShapePreservingLength(e, o2, m, i, r);
    }
    if (f(u)) {
      const e = new Na();
      return e.addSegment(n2, true), this._ExecuteShapePreservingLength(e, o2, m, i, r);
    }
    return this._ExecuteShapePreservingLength(n2, o2, m, i, r);
  }
};
function N(e, t, s, n2) {
  n2.assign(us(e, t, s));
}
function C(e, t, s) {
  const n2 = e, o2 = new X();
  o2.setSub(t, s);
  const r = o2.length();
  return 2 * n2 * Math.asin(r / (2 * n2));
}

export {
  w
};
//# sourceMappingURL=chunk-RT3KF3HK.js.map
