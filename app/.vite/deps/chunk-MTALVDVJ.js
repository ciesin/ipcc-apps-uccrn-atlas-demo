import {
  Im,
  Na,
  Xm,
  Ym,
  ee,
  eh,
  n,
  qm,
  ss
} from "./chunk-NEFPLHSJ.js";
import {
  s,
  t
} from "./chunk-VUD5O2WG.js";
import {
  N,
  P,
  a,
  f,
  j
} from "./chunk-67PUVBHA.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorConvexHull.js
var x = class {
  getOperatorType() {
    return 10102;
  }
  supportsCurves() {
    return false;
  }
  accelerateGeometry(e, t2, n2) {
    return false;
  }
  canAccelerateGeometry(e) {
    return false;
  }
  executeMany(e, t2, n2) {
    return new C(t2, e, n2);
  }
  execute(e, t2) {
    return P2(e);
  }
  isConvex(e, t2) {
    if (N(e), j(e), e.isEmpty()) return true;
    const i = e.getGeometryType();
    if (i === a.enumPoint) return true;
    if (i === a.enumEnvelope) {
      const t3 = e;
      return t3.getXMin() !== t3.getXMax() && t3.getYMin() !== t3.getYMax();
    }
    if (f(i)) {
      const t3 = e;
      return !t3.getStartXY().equals(t3.getEndXY());
    }
    if (i === a.enumMultiPoint) {
      return 1 === e.getPointCount();
    }
    if (i === a.enumPolyline) {
      const t3 = e;
      return 1 === t3.getPathCount() && 2 === t3.getPointCount() && !t3.getXY(0).equals(t3.getXY(1));
    }
    if (i === a.enumGeometryCollection) {
      const n2 = e;
      return 1 === n2.getGeometryCount() && this.isConvex(n2.getGeometry(0), t2);
    }
    const s2 = e;
    return !(1 !== s2.getPathCount() || s2.getPointCount() < 3) && Ym(s2, 0);
  }
  constructOrientedMinimumBoundingBox(e, t2, n2, r, o) {
    Xm(e, t2, n2, r, o);
  }
};
var C = class extends t {
  constructor(e, t2, n2) {
    super(), t2 || P(""), this.m_progressTracker = n2, this.m_index = -1, this.m_bMerge = e, this.m_bDone = false, this.m_inputGeometryCursor = t2;
  }
  getGeometryID() {
    return this.m_index;
  }
  tock() {
    return true;
  }
  getRank() {
    return 1;
  }
  next() {
    if (this.m_bMerge) {
      if (!this.m_bDone) {
        const e = h(this.m_inputGeometryCursor);
        return this.m_bDone = true, e;
      }
      return null;
    }
    if (!this.m_bDone) {
      const e = this.m_inputGeometryCursor.next();
      if (null !== e) return N(e), j(e), this.m_index = this.m_inputGeometryCursor.getGeometryID(), P2(e);
      this.m_bDone = true;
    }
    return null;
  }
};
function h(e, t2) {
  const o = new qm();
  let u;
  for (; u = e.next(); ) N(u), j(u), o.addGeometry(u);
  return o.getBoundingGeometry();
}
function P2(e, t2) {
  if (e || P(""), N(e), j(e), e.isEmpty()) return e.createInstance();
  const m = e.getGeometryType();
  if (f(m)) {
    const t3 = e;
    if (t3.getStartXY().equals(t3.getEndXY())) {
      const e2 = new ee();
      return t3.queryStart(e2), e2;
    }
    {
      const n2 = new ee(), r = new Na({ vd: e.getDescription() });
      return t3.queryStart(n2), r.startPathPoint(n2), t3.queryEnd(n2), r.lineToPoint(n2), r;
    }
  }
  if (m === a.enumEnvelope) {
    const t3 = e, n2 = new n();
    if (t3.queryEnvelope(n2), n2.xmin === n2.xmax && n2.ymin === n2.ymax) {
      const e2 = new ee();
      return t3.queryCornerByVal(0, e2), e2;
    }
    if (n2.xmin === n2.xmax || n2.ymin === n2.ymax) {
      const n3 = new ee(), r = new Na({ vd: e.getDescription() });
      return t3.queryCornerByVal(0, n3), r.startPathPoint(n3), t3.queryCornerByVal(1, n3), r.lineToPoint(n3), r;
    }
    {
      const n3 = new eh({ vd: e.getDescription() });
      return n3.addEnvelope(t3, false), n3;
    }
  }
  if (m === a.enumGeometryCollection) return h(ss(e, -1));
  if (G(e)) {
    if (m === a.enumMultiPoint) {
      const t3 = e, n2 = new ee();
      return t3.getPointByVal(0, n2), n2;
    }
    return e;
  }
  return Im(e);
}
function G(e, t2) {
  if (N(e), j(e), e.isEmpty()) return true;
  const i = e.getGeometryType();
  if (i === a.enumPoint) return true;
  if (i === a.enumEnvelope) {
    const t3 = e;
    return t3.getXMin() !== t3.getXMax() && t3.getYMin() !== t3.getYMax();
  }
  if (f(i)) {
    const t3 = e;
    return !t3.getStartXY().equals(t3.getEndXY());
  }
  if (i === a.enumMultiPoint) {
    return 1 === e.getPointCount();
  }
  if (i === a.enumPolyline) {
    const t3 = e;
    return 1 === t3.getPathCount() && 2 === t3.getPointCount() && !t3.getXY(0).equals(t3.getXY(1));
  }
  if (i === a.enumGeometryCollection) {
    const t3 = e;
    return 1 === t3.getGeometryCount() && G(t3.getGeometry(0));
  }
  const s2 = e;
  return !(1 !== s2.getPathCount() || s2.getPointCount() < 3) && Ym(s2, 0);
}
var d = new x();
function M(e) {
  return d.execute(e, null);
}
function v(e, n2) {
  const r = d.executeMany(new s(e), n2, null);
  return Array.from(r);
}
function _(e) {
  return d.isConvex(e, null);
}
function X() {
  return d.supportsCurves();
}

export {
  M,
  v,
  _,
  X
};
//# sourceMappingURL=chunk-MTALVDVJ.js.map
