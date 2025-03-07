import {
  Na,
  ee,
  eh,
  o,
  su
} from "./chunk-NEFPLHSJ.js";
import {
  t
} from "./chunk-VUD5O2WG.js";
import {
  Mt,
  P,
  a,
  ei,
  f,
  h,
  j,
  l,
  z,
  zt
} from "./chunk-67PUVBHA.js";
import {
  n,
  s
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/chunks/OperatorGeneralize.js
var P2 = class {
  getOperatorType() {
    return 10204;
  }
  supportsCurves() {
    return true;
  }
  accelerateGeometry(t2, e, s2) {
    return false;
  }
  canAccelerateGeometry(t2) {
    return false;
  }
  executeMany(t2, e, s2, i) {
    return new y(t2, e, s2, i);
  }
  execute(t2, e, s2, r) {
    t2 || P("null param is not allowed.");
    return new y(null, e, s2, r).generalize(t2);
  }
};
var y = class extends t {
  constructor(t2, e, s2, i) {
    super(), this.m_pline = null, this.m_point = new ee(), this.m_stack = [], this.m_resultstack = [], this.m_callCount = 0, this.m_progressTracker = i, this.m_geoms = t2, this.m_maxDeviation = e, this.m_bRemoveDegenerateParts = s2;
  }
  tock() {
    return true;
  }
  getRank() {
    return 1;
  }
  next() {
    const t2 = this.m_geoms.next();
    return null === t2 ? null : (j(t2), this.generalize(t2));
  }
  getGeometryID() {
    return this.m_geoms.getGeometryID();
  }
  generalize(s2) {
    const i = s2.getGeometryType();
    if (l(i)) return s2;
    if (i === a.enumEnvelope) {
      const t2 = new eh({ vd: s2.getDescription() });
      return t2.addEnvelope(s2, false), this.generalize(t2);
    }
    if (f(i)) {
      const t2 = new Na({ vd: s2.getDescription() });
      return t2.addSegment(s2, true), this.generalize(t2);
    }
    if (h(i) || z(""), s2.isEmpty() || this.m_maxDeviation <= 0) return s2;
    const r = new o().execute(s2, 0, 0.05 * this.m_maxDeviation, 0, this.m_progressTracker);
    s2.hasNonLinearSegments() && (this.m_maxDeviation *= 0.95);
    const _ = r, p = s2.createInstance();
    if (p.getGeometryType() === a.enumPolygon) {
      p.setFillRule(s2.getFillRule());
    }
    this.m_xy = _.getAttributeStreamRef(0);
    {
      const s3 = { stack: [], error: void 0, hasError: false };
      try {
        const e = new su();
        this.m_pline = e, n(s3, zt(() => {
          this.m_pline = null;
        }, false), false);
        for (let t2 = 0, s4 = _.getPathCount(); t2 < s4; t2++) this.generalizePath(_.getImpl(), t2, p.getImpl());
      } catch (k) {
        s3.error = k, s3.hasError = true;
      } finally {
        s(s3);
      }
    }
    return this.m_resultstack.length = 0, this.m_stack.length = 0, p;
  }
  generalizePath(t2, e, s2) {
    if (t2.getPathSize(e) < 2) return;
    this.m_resultstack.length = 0, this.m_stack.length = 0;
    const i = t2.getPathStart(e), r = t2.getPathEnd(e) - 1, a2 = t2.isClosedPath(e), n2 = t2.isClosedPathInXYPlane(e);
    let h2 = 0, m = -1;
    this.m_stack.push(a2 ? i : r), this.m_stack.push(i);
    let l2 = false, o2 = false;
    for (!this.m_bRemoveDegenerateParts && n2 && (l2 = true, o2 = true); this.m_stack.length > 1; ) {
      const e2 = this.m_stack.at(-1);
      this.m_stack.pop();
      const s3 = this.m_stack.at(-1);
      let i2 = t2.getXY(e2);
      this.m_pline.setStartXY(i2), i2 = t2.getXY(s3), this.m_pline.setEndXY(i2);
      const a3 = [Number.NaN];
      let n3 = this.findGreatestDistance(e2, s3, r, a3);
      n3 >= 0 && (l2 ? l2 = false : (o2 && a3[0] > h2 && (h2 = a3[0], m = n3), a3[0] <= this.m_maxDeviation && (n3 = -1))), n3 >= 0 ? (this.m_stack.push(n3), this.m_stack.push(e2)) : this.m_resultstack.push(e2);
    }
    a2 || this.m_resultstack.push(this.m_stack[0]);
    const c = this.m_resultstack.length;
    if (c === t2.getPathSize(e) && c === this.m_stack.length) s2.addPath(t2, e, true);
    else if (this.m_resultstack.length > 0) {
      if (this.m_bRemoveDegenerateParts && this.m_resultstack.length <= 2) {
        if (a2 || 1 === this.m_resultstack.length) return;
        if (ei.distance(t2.getXY(this.m_resultstack[0]), t2.getXY(this.m_resultstack[1])) <= this.m_maxDeviation) return;
      }
      if (o2 && m >= 0 && h2 <= this.m_maxDeviation) {
        const t3 = this.m_resultstack.at(-1) > m;
        this.m_resultstack.push(m), t3 && (this.m_resultstack[this.m_resultstack.length - 2] = Mt(this.m_resultstack[this.m_resultstack.length - 1], this.m_resultstack[this.m_resultstack.length - 1] = this.m_resultstack[this.m_resultstack.length - 2]));
      }
      for (let e2 = 0, i2 = this.m_resultstack.length; e2 < i2; e2++) t2.getPointByVal(this.m_resultstack[e2], this.m_point), 0 === e2 ? s2.startPathPoint(this.m_point) : s2.lineToPoint(this.m_point);
      if (a2) {
        for (let t3 = this.m_resultstack.length; t3 < 3; t3++) s2.lineToPoint(this.m_point);
        s2.closePathWithLine();
      }
    }
  }
  findGreatestDistance(t2, e, s2, i) {
    let r = e - 1;
    e <= t2 && (r = s2);
    let a2 = -1, n2 = 0;
    const h2 = new ei();
    for (let m = t2 + 1; m <= r; m++) {
      this.m_xy.queryPoint2D(2 * m, h2);
      const t3 = h2.x, e2 = h2.y, s3 = this.m_pline.getClosestCoordinate(h2, false);
      h2.assign(this.m_pline.getCoord2D(s3)), h2.x -= t3, h2.y -= e2;
      const i2 = h2.length();
      i2 > n2 && (a2 = m, n2 = i2), this.m_callCount++;
    }
    return i[0] = n2, a2;
  }
};

export {
  P2 as P
};
//# sourceMappingURL=chunk-I7YJKQIK.js.map
