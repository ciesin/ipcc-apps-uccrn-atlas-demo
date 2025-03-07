import {
  C,
  Z,
  j as j2,
  x
} from "./chunk-FZLDYYQZ.js";
import {
  Ce,
  Pt,
  n,
  qa,
  wt
} from "./chunk-NEFPLHSJ.js";
import {
  s,
  t
} from "./chunk-VUD5O2WG.js";
import {
  Lt,
  a,
  b,
  ei,
  j
} from "./chunk-67PUVBHA.js";
import {
  G
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorSymmetricDifference.js
var l = class {
  getOperatorType() {
    return 10003;
  }
  supportsCurves() {
    return true;
  }
  accelerateGeometry(e, t2, n2) {
    return false;
  }
  canAccelerateGeometry(e) {
    return false;
  }
  executeMany(e, t2, n2, r) {
    return new y(e, t2, n2, r);
  }
  execute(t2, r, s2, o) {
    const i2 = new s([t2]), u2 = new s([r]), m2 = this.executeMany(i2, u2, s2, o).next();
    return m2 || b("null output"), m2;
  }
};
function h(e, t2, n2, r) {
  const o = e.getDimension(), i2 = t2.getDimension();
  if (o !== i2) return o > i2 ? e : t2;
  if (e.isEmpty()) return t2;
  if (t2.isEmpty()) return e;
  const u2 = new n(), a2 = new n(), l2 = new n();
  e.queryEnvelope(u2), t2.queryEnvelope(a2), l2.setCoords({ env2D: u2 }), l2.mergeEnvelope2D(a2);
  const h2 = wt(n2, l2, true), y2 = e.getGeometryType(), g2 = t2.getGeometryType();
  return y2 === a.enumPoint && g2 === a.enumPoint ? d(e, t2, h2) : y2 === a.enumPoint && g2 === a.enumMultiPoint ? f(t2, e, h2) : y2 === a.enumMultiPoint && g2 === a.enumPoint ? f(e, t2, h2) : qa(e, t2, n2, r);
}
function d(e, t2, n2, r) {
  const s2 = Pt(n2), i2 = s2 * s2, m2 = e.getXY(), c2 = t2.getXY(), p = new Ce({ vd: e.getDescription() });
  return ei.sqrDistance(m2, c2) > i2 && (p.add(e), p.add(t2)), p;
}
function f(e, t2, n2, r) {
  const s2 = e.getImpl().getAttributeStreamRef(0), o = e.getPointCount(), u2 = t2.getXY(), c2 = e.createInstance(), p = Pt(n2), l2 = new n();
  if (e.queryEnvelope(l2), l2.inflateCoords(p, p), l2.contains(u2)) {
    const n3 = p * p;
    let r2 = false;
    const m2 = Lt(o, false);
    for (let e2 = 0; e2 < o; e2++) {
      const t3 = s2.read(2 * e2), o2 = s2.read(2 * e2 + 1), i2 = t3 - u2.x, c3 = o2 - u2.y;
      i2 * i2 + c3 * c3 <= n3 && (r2 = true, m2[e2] = true);
    }
    if (r2) for (let t3 = 0; t3 < o; t3++) m2[t3] || c2.addPoints(e, t3, t3 + 1);
    else c2.addPoints(e, 0, o), c2.add(t2);
  } else c2.addPoints(e, 0, o), c2.add(t2);
  return c2;
}
var y = class extends t {
  constructor(e, t2, n2, s2) {
    super(), this.m_progressTracker = s2, this.m_index = -1, this.m_inputGeoms = e, this.m_spatialReference = n2, this.m_rightGeom = t2.next(), this.m_bEmpty = !this.m_rightGeom, j(this.m_rightGeom);
  }
  tock() {
    return true;
  }
  getRank() {
    return 1;
  }
  next() {
    if (this.m_bEmpty) return null;
    const e = this.m_inputGeoms.next();
    return e ? (j(e), this.m_index = this.m_inputGeoms.getGeometryID(), h(e, this.m_rightGeom, this.m_spatialReference, this.m_progressTracker)) : null;
  }
  getGeometryID() {
    return this.m_index;
  }
};
var g = new l();
function G2(e, t2, n2) {
  return g.execute(e, t2, n2, null);
}
function _(t2, n2, r) {
  const s2 = g.executeMany(new s(t2), new s([n2]), r, null);
  return Array.from(s2);
}
function x2() {
  return g.supportsCurves();
}

// node_modules/@arcgis/core/chunks/symmetricDifferenceOperator.js
function u(e, r) {
  const o = C(e);
  return Z(G2(x(e), x(r), j2(o)), o);
}
function c(r, t2) {
  const u2 = r.map(x), c2 = C(r);
  return _(u2, x(t2), j2(c2)).map((e) => Z(e, c2)).filter(G);
}
var m = x2();
var i = Object.freeze(Object.defineProperty({ __proto__: null, execute: u, executeMany: c, supportsCurves: m }, Symbol.toStringTag, { value: "Module" }));

export {
  u,
  c,
  m,
  i
};
//# sourceMappingURL=chunk-KCHKJNR6.js.map
