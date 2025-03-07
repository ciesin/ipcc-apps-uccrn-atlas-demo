import {
  w
} from "./chunk-RT3KF3HK.js";
import {
  Gu,
  Ll,
  Na,
  Va,
  Vl,
  bl,
  kh,
  o,
  vc,
  yc
} from "./chunk-NEFPLHSJ.js";
import "./chunk-VUD5O2WG.js";
import {
  P,
  a,
  f,
  j,
  x2 as x
} from "./chunk-67PUVBHA.js";
import {
  n,
  s
} from "./chunk-PPIAYGRE.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/chunks/OperatorGeodeticLength.js
var d = class {
  getOperatorType() {
    return 10311;
  }
  supportsCurves() {
    return true;
  }
  accelerateGeometry(e, t, r) {
    return false;
  }
  canAccelerateGeometry(e) {
    return false;
  }
  execute(e, t, f2, y) {
    if (4 === f2) return new w().execute(e, t, y);
    if (0 === t.getCoordinateSystemType() && P(""), j(e), e.isEmpty() || e.getDimension() < 1) return 0;
    const d2 = t.getGCS(), S = Gu();
    d2.querySpheroidData(S);
    const P2 = S.majorSemiAxis, E = S.e2, G = d2.getUnit().getUnitToBaseFactor();
    let j2;
    const v = e.getGeometryType();
    if (v === a.enumPolygon ? j2 = e.getBoundary() : v === a.enumEnvelope ? j2 = Va(e) : f(v) ? (j2 = new Na({ vd: e.getDescription() }), j2.addSegment(e, true)) : j2 = e, j2.hasNonLinearSegments()) {
      j2 = new o().execute(j2, 0, t.getTolerance(0), 0, y);
    }
    if (d2 !== t) {
      const r = t.getSRToGCSTransform();
      if (t.isPannable()) {
        j2 = Vl(j2, t), v === a.enumPolyline && j2 === e && (j2 = e.clone());
        const r2 = new x();
        t.getPannableExtent().queryIntervalX(r2);
        for (let e2 = 0, t2 = j2.getPointCount(); e2 < t2; e2++) {
          const t3 = j2.getXY(e2);
          t3.x = bl(t3.x, r2), j2.setXY(e2, t3);
        }
      }
      const n2 = j2.createInstance();
      j2 = Ll(r, j2, n2, y) ? n2 : new kh().execute(j2, r, y);
    }
    return this._ExecuteMultiPathGeodeticLength(j2, f2, P2, E, G);
  }
  _ExecuteMultiPathGeodeticLength(r, n2, o2, s2, a2) {
    const i = { stack: [], error: void 0, hasError: false };
    try {
      const t = n(i, new yc(), false);
      let c = 0;
      const m = r.querySegmentIterator();
      for (; m.nextPath(); ) for (; m.hasNextSegment(); ) {
        const e = m.nextSegment(), r2 = e.getStartXY(), i2 = e.getEndXY();
        r2.scale(a2), i2.scale(a2), vc.geodeticDistance(o2, s2, r2.x, r2.y, i2.x, i2.y, t, null, null, n2), c += t.val;
      }
      return c;
    } catch (c) {
      i.error = c, i.hasError = true;
    } finally {
      s(i);
    }
  }
};
export {
  d as OperatorGeodeticLength
};
//# sourceMappingURL=OperatorGeodeticLength-JY2SEOH4.js.map
