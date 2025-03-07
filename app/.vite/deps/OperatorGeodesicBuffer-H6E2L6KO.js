import {
  i
} from "./chunk-MMRIUVCH.js";
import {
  Bh,
  Dl,
  Dt,
  Fa,
  Gu,
  Mh,
  Na,
  Nc,
  Oh,
  Pt,
  Rh,
  Tm,
  Uh,
  Vg,
  Vl,
  Vt,
  Yu,
  ee,
  eh,
  f as f2,
  fh,
  hm,
  kh,
  kt,
  lm,
  mm,
  n as n2,
  nl,
  o,
  pc,
  qg,
  qh,
  rs,
  vc,
  wt,
  yc,
  zm,
  zt
} from "./chunk-NEFPLHSJ.js";
import {
  s as s2,
  t
} from "./chunk-VUD5O2WG.js";
import {
  E,
  Gt,
  Lt,
  P,
  Rt,
  Ut,
  Yt,
  a,
  b,
  ei,
  f,
  h,
  j,
  l,
  v,
  x3 as x,
  y,
  z
} from "./chunk-67PUVBHA.js";
import {
  n,
  s
} from "./chunk-PPIAYGRE.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/chunks/OperatorGeodesicBuffer.js
function me(e, t2, s3, n3, a2, h2) {
  n3 < Number.MAX_VALUE && n3 > -Number.MAX_VALUE || P("Geodesic_bufferer.buffer - bad distance"), j(e);
  const c = i(e), u = c.getGeometryType();
  if (y(u)) {
    const e2 = c.getPointCount(), i2 = 8e6;
    if (Math.abs(n3) > i2 && (e2 > 50 || u !== a.enumMultiPoint && 4 === s3 && e2 > 2)) {
      let e3 = c;
      const r = n3 > 0 ? 1 : -1, o2 = 7e6;
      let m = n3, u2 = 1;
      do {
        u2++, m = (Math.abs(m) - o2) * r;
      } while (Math.abs(m) > i2);
      m = n3;
      for (let n4 = 0; n4 < u2 - 1; n4++) e3 = he(e3, t2, s3, o2 * r, a2, u2, h2), m = (Math.abs(m) - o2) * r;
      return e3 = he(e3, t2, s3, m, a2, u2, h2), e3;
    }
  }
  return he(c, t2, s3, n3, a2, 1, h2);
}
var ae = class {
  constructor(e) {
    this.m_sr = null, this.m_gcs = null, this.m_transform = null, this.m_a = 0, this.m_eSquared = 0, this.m_rpu = 0, this.m_radTolerance = 0, this.m_q90 = 0, this.m_gcs90 = 0, this.m_gcs180 = 0, this.m_gcs360 = 0, this.m_gcs60 = 0, this.m_ellipticToGeodesicMaxRatio = 0, this.m_curveType = 0, this.m_bShapePreserving = false, this.m_distance = 0, this.m_absDistance = 0, this.m_convergenceOffset = 0, this.m_cornerStep = 0, this.m_segmentStep = 0, this.m_progressTracker = e;
  }
  bufferPolygon(e) {
    const t2 = new eh(), s3 = new we(this, e, t2);
    return this.processGnomonicBufferPiecesCursor(true, s3);
  }
  bufferPolyline(e) {
    const t2 = new we(this, e, null);
    return this.processGnomonicBufferPiecesCursor(true, t2);
  }
  bufferMultiPoint(e) {
    const t2 = new Ce(this, e);
    return this.processGnomonicBufferPiecesCursor(false, t2);
  }
  bufferPoint(e) {
    const t2 = e.getXY();
    t2.scale(this.m_rpu);
    let s3 = new eh();
    if (this.bufferPoint2D(t2, false, s3)) {
      const e2 = zt(null, s3, true);
      s3 = Fa(s3, e2, true, true, -1, this.m_progressTracker, 0, false);
    }
    return s3 = new kh().foldInto360RangeGeodetic(s3, this.m_gcs, 2), s3;
  }
  processGnomonicBufferPiecesCursor(e, t2) {
    const s3 = t2;
    let n3 = s3.getGnomonic();
    const i2 = Yu(rs());
    let r = new Vg(), o2 = new nl().executeMany(r, i2, this.m_progressTracker, 2);
    const m = Lt(6, false), a2 = Rt(n2, 6);
    this.initializeGrid(m, a2);
    const h2 = [null, null, null, null, null, null], c = [null, null, null, null, null, null], u = [null, null, null, null, null, null];
    let l2, d, g;
    for (; null !== (l2 = s3.next()); ) {
      if (d = s3.getGnomonic(), d !== n3) {
        if (null !== n3) {
          let t3 = o2.next();
          if (r = null, o2 = null, null != t3) {
            const s4 = zt(i2, t3, true), r2 = Pt(s4);
            t3 = n3.unproject(t3, r2, this.m_progressTracker), this.putInGridCursors(e, t3, i2, true, m, a2, h2, c, u);
          }
        }
        null !== d && (r = new Vg(), o2 = new nl().executeMany(r, i2, this.m_progressTracker, 2)), n3 = d;
      }
      if (s3.isRunningInGnomonic()) {
        if (d.project(l2), s3.needsSimplify()) {
          const e2 = zt(null, l2, true);
          l2 = Fa(l2, e2, true, true, -1, this.m_progressTracker, 0, false);
        }
        r.tick(be(l2)), o2.tock();
      } else this.putInGridCursors(e, l2, i2, true, m, a2, h2, c, u);
    }
    let p = false;
    for (let _ = 0; _ < 6; _++) if (null != u[_]) {
      p = true;
      break;
    }
    if (p) {
      let t3 = false;
      const l3 = [null, null, null, null, null, null];
      if (e) {
        const n4 = s3.m_densified;
        if (s3.m_densified = null, null !== n4) {
          const s4 = new x();
          s4.scale(1 / this.m_rpu, 1 / this.m_rpu), n4.applyTransformation(s4), this.m_distance > 0 ? this.putInGridCursors(e, n4, i2, false, m, a2, h2, c, u) : (this.processInGrid(e, n4, false, m, a2, h2, l3), t3 = true);
        }
      }
      const _ = new Vg(), d2 = new nl().executeMany(_, this.m_gcs, this.m_progressTracker, 2);
      if (null !== o2) {
        let t4 = o2.next();
        r = null, o2 = null;
        const s4 = zt(i2, t4, true), l4 = Pt(s4);
        t4 = n3.unproject(t4, l4, this.m_progressTracker), this.putInGridCursors(e, t4, i2, true, m, a2, h2, c, u);
      }
      for (let e2 = 0; e2 < 6; e2++) if (null != u[e2]) {
        let s4 = u[e2].next();
        u[e2] = null, c[e2] = null, t3 && null !== l3[e2] && (s4 = new zm().execute(l3[e2], s4, i2, this.m_progressTracker));
        const n4 = zt(i2, s4, true), r2 = Pt(n4);
        s4 = h2[e2].unproject(s4, r2, this.m_progressTracker), s4 = new fh().execute(s4, this.m_gcs, true, this.m_progressTracker), _.tick(be(s4)), d2.tock();
      }
      g = d2.next();
    } else {
      let t3, m2 = false;
      if (e) {
        let e2 = s3.m_densified;
        if (s3.m_densified = null, null !== e2) {
          const s4 = new x();
          s4.scale(1 / this.m_rpu, 1 / this.m_rpu), e2.applyTransformation(s4), d.project(e2);
          const n4 = zt(null, e2, true);
          e2 = Fa(e2, n4, false, true, -1, this.m_progressTracker, 0, false), this.m_distance > 0 ? (r.tick(be(e2)), o2.tock()) : (t3 = e2, m2 = true);
        }
      }
      let a3 = o2.next();
      r = null, o2 = null, m2 && (a3 = new zm().execute(t3, a3, i2, this.m_progressTracker));
      const h3 = zt(i2, a3, true), c2 = Pt(h3);
      g = n3.unproject(a3, c2, this.m_progressTracker), g = new fh().execute(g, this.m_gcs, true, this.m_progressTracker);
    }
    return g = new kh().foldInto360RangeGeodetic(g, this.m_gcs, 2), g;
  }
  putInGridCursors(e, t2, s3, n3, i2, r, o2, m, a2) {
    const h2 = [null, null, null, null, null, null];
    this.processInGrid(e, t2, n3, i2, r, o2, h2);
    for (let c = 0; c < 6; c++) null !== h2[c] && (null === m[c] && (m[c] = new Vg(), a2[c] = new nl().executeMany(m[c], s3, this.m_progressTracker, 2)), m[c].tick(be(h2[c])), a2[c].tock());
  }
  processInGrid(e, t2, s3, n3, i2, r, o2) {
    const m = 0.01, a2 = this.insertGeodeticPointsAlongGrid(t2, i2, m);
    for (let h2 = 0; h2 < 6; h2++) {
      if (n3[h2]) continue;
      const e2 = i2[h2].clone();
      e2.inflateCoords(m, m);
      const c = Dt(t2, e2), u = wt(null, c, false).total();
      let l2 = f2(a2, e2, u, Number.NaN, this.m_progressTracker);
      if (null !== l2 && !l2.isEmpty()) {
        if (l2 === a2 && (l2 = l2.clone()), null === r[h2]) {
          const e4 = new ei();
          h2 < 3 ? e4.setCoords(0, 1) : e4.setCoords(0, -1);
          const t3 = new ei();
          t3.setAdd(i2[h2].getCenter(), e4), r[h2] = xe(this.m_gcs, t3);
        }
        r[h2].project(l2);
        const e3 = zt(null, l2, true);
        l2 = Fa(l2, e3, s3, true, -1, this.m_progressTracker, 0, false), o2[h2] = l2;
      }
    }
  }
  insertGeodeticPointsAlongGrid(e, t2, s3) {
    const n3 = n2.construct(t2[3].xmin, t2[3].ymin, t2[2].xmax, t2[2].ymax), i2 = mm(this.m_gcs, n3, e, true, this.m_progressTracker), r = new Tm(), o2 = r.addGeometry(i2);
    return Dl(r, o2, this.m_gcs, 0, 2, true, t2[0].xmax + s3), Dl(r, o2, this.m_gcs, 0, 2, true, t2[1].xmax + s3), Dl(r, o2, this.m_gcs, 0, 2, false, t2[1].ymin + s3), 0 !== s3 && (Dl(r, o2, this.m_gcs, 0, 2, true, t2[0].xmax - s3), Dl(r, o2, this.m_gcs, 0, 2, true, t2[1].xmax - s3), Dl(r, o2, this.m_gcs, 0, 2, false, t2[1].ymin - s3)), r.getGeometry(o2);
  }
  initializeGrid(e, t2) {
    for (let s3 = 0; s3 < 6; s3++) e[s3] = false;
    t2[0].setCoords({ xmin: -this.m_gcs180, ymin: 0, xmax: -this.m_gcs60, ymax: this.m_gcs90 }), t2[1].setCoords({ xmin: -this.m_gcs60, ymin: 0, xmax: this.m_gcs60, ymax: this.m_gcs90 }), t2[2].setCoords({ xmin: this.m_gcs60, ymin: 0, xmax: this.m_gcs180, ymax: this.m_gcs90 }), t2[3].setCoords({ xmin: -this.m_gcs180, ymin: -this.m_gcs90, xmax: -this.m_gcs60, ymax: 0 }), t2[4].setCoords({ xmin: -this.m_gcs60, ymin: -this.m_gcs90, xmax: this.m_gcs60, ymax: 0 }), t2[5].setCoords({ xmin: this.m_gcs60, ymin: -this.m_gcs90, xmax: this.m_gcs180, ymax: 0 });
  }
  checkAndPrepSegmentForCrossingAzimuthsOrPoleWrap(e, t2, s3, n3, i2, r) {
    const o2 = e[0], m = e.at(-1), a2 = o2.y < m.y ? o2.y : m.y, h2 = o2.y > m.y ? o2.y : m.y, c = Nc.q(this.m_a, this.m_eSquared, a2), u = Nc.q(this.m_a, this.m_eSquared, h2);
    if (this.m_q90 - (c + t2 + this.m_absDistance) > 1e-3 && this.m_q90 + (u - t2 - this.m_absDistance) > 1e-3) return false;
    const l2 = s3 - Yt, _ = n3 + Yt, f3 = l2 - Math.PI, d = l2 + Math.PI, p = _ + Math.PI, P2 = [Number.NaN], x2 = [Number.NaN], b2 = [Number.NaN], y2 = [Number.NaN];
    let w = false;
    if (le(this.m_a, this.m_eSquared, this.m_rpu, this.m_absDistance, o2, l2, f3, m, _, P2, x2), le(this.m_a, this.m_eSquared, this.m_rpu, this.m_absDistance, m, p, _, o2, f3, b2, y2), (_ < P2[0] && P2[0] < p || _ < x2[0] && x2[0] < p) && (w = true), w || (f3 < b2[0] && b2[0] < l2 || f3 < y2[0] && y2[0] < l2) && (w = true), !w && i2) return false;
    const C = [];
    for (let g = e.length - 1; g >= 0; g--) C.push(e[g]);
    r.setEmpty(), r.addPathPoint2D(null, 0, true);
    let v2 = 0;
    v2 = ce(this.m_a, this.m_eSquared, this.m_rpu, this.m_absDistance, this.m_curveType, e, l2, _, i2, v2, r), v2 = ue(this.m_a, this.m_eSquared, this.m_rpu, this.m_absDistance, m, _, p, this.m_cornerStep, i2, v2, r, P2[0], x2[0]), v2 = ce(this.m_a, this.m_eSquared, this.m_rpu, this.m_absDistance, this.m_curveType, C, p, d, i2, v2, r), v2 = ue(this.m_a, this.m_eSquared, this.m_rpu, this.m_absDistance, o2, f3, l2, this.m_cornerStep, i2, v2, r, b2[0], y2[0]);
    let S = false;
    return i2 || (S = this.checkAndPrepForPole(r)), w || S;
  }
  bufferPoint2D(e, t2, s3) {
    s3.setEmpty(), s3.addPathPoint2D(null, 0, true);
    const n3 = 0;
    ue(this.m_a, this.m_eSquared, this.m_rpu, this.m_absDistance, e, -this.m_cornerStep, 2 * Math.PI, this.m_cornerStep, t2, n3, s3);
    let i2 = false;
    return t2 || (i2 = this.checkAndPrepForPole(s3)), i2;
  }
  checkAndPrepForPole(e) {
    const t2 = this.checkAndPrepForPoleTouch(e), s3 = this.checkAndPrepForPoleWrap(e);
    return t2 || s3;
  }
  checkAndPrepForPoleTouch(e) {
    const t2 = new n2();
    return e.queryEnvelope(t2), !(!pc(t2.ymax, this.m_gcs90) && !pc(t2.ymin, -this.m_gcs90)) && (this.prepPoleTouch(e), true);
  }
  checkAndPrepForPoleWrap(e) {
    const t2 = e.getXY(0), s3 = e.getXY(e.getPointCount() - 1);
    return Math.abs(t2.x - s3.x) > this.m_gcs180 ? (this.prepSinglePoleWrap(e), true) : this.checkAndPrepForDoublePoleWrap(e);
  }
  checkAndPrepForDoublePoleWrap(e) {
    return e.calculateArea2D() < 0 && (this.prepDoublePoleWrap(e), true);
  }
  prepPoleTouch(e) {
    const t2 = new eh();
    t2.insertPath2D(-1, null, 0, 0, true);
    const s3 = e.getPathStart(0), n3 = e.getPathEnd(0), i2 = n3 - s3;
    let r = -1;
    for (r = s3; r < n3; r++) {
      const t3 = e.getXY(r), s4 = pc(t3.y, this.m_gcs90), n4 = pc(t3.y, -this.m_gcs90);
      if (!s4 && !n4) break;
    }
    let o2 = r, m = false, a2 = Number.NaN;
    do {
      const n4 = e.getXY(o2), r2 = pc(n4.y, this.m_gcs90), h2 = pc(n4.y, -this.m_gcs90), c = s3 + (o2 + 1 - s3) % i2;
      if (r2 || h2) {
        let s4 = ei.construct(a2, n4.y);
        t2.insertPoint2D(0, -1, s4);
        const i3 = e.getXY(c), r3 = pc(i3.y, this.m_gcs90), o3 = pc(i3.y, -this.m_gcs90);
        r3 || o3 || (s4 = ei.construct(i3.x, n4.y), m ? t2.setXY(t2.getPointCount() - 1, s4) : t2.insertPoint2D(0, -1, s4)), m = true;
      } else t2.insertPoint2D(0, -1, n4), a2 = n4.x, m = false;
      o2 = c;
    } while (o2 !== r);
    e.setEmpty(), e.add(t2, false);
  }
  prepSinglePoleWrap(e) {
    const t2 = new eh(), s3 = new eh(), n3 = new x(), i2 = e.getXY(e.getPathStart(0)), r = e.getXY(e.getPathEnd(0) - 1), o2 = this.m_gcs360, m = this.m_gcs180, a2 = new n2();
    a2.setCoords({ xmin: -this.m_gcs180, ymin: -this.m_gcs90, xmax: this.m_gcs180, ymax: this.m_gcs90 });
    const h2 = new n2();
    e.queryEnvelope(h2);
    const c = Math.ceil(h2.width() / o2);
    let u, l2;
    i2.x > r.x ? (u = -o2, l2 = this.m_gcs90) : (u = o2, l2 = -this.m_gcs90), n3.setShiftCoords(u, 0), t2.addPath(e, 0, true), s3.add(t2, false);
    const f3 = new ee();
    for (let _ = 0; _ < c; _++) s3.applyTransformation(n3), s3.getPointByVal(0, f3), t2.lineToPoint(f3), t2.addSegmentsFromPath(s3, 0, 0, s3.getSegmentCount() - 1, false);
    const d = t2.getXY(0), g = t2.getXY(t2.getPointCount() - 1);
    d.y = l2, g.y = l2, t2.lineTo(g);
    const p = new ei();
    for (p.setCoordsPoint2D(g), p.x -= 0.5 * u; Math.abs(p.x - d.x) > m; ) t2.lineTo(p), p.x -= 0.5 * u;
    t2.lineTo(d);
    const P2 = a2.getCenterX(), x2 = new n2();
    t2.queryEnvelope(x2);
    let b2 = 0;
    const y2 = x2.getCenter().x;
    y2 - P2 > m ? b2 = -Math.ceil((y2 - P2 - m) / o2) : P2 - y2 > m && (b2 = Math.ceil((P2 - y2 - m) / o2)), 0 !== b2 && (n3.setShiftCoords(b2 * o2, 0), t2.applyTransformation(n3));
    const w = new Tm(), C = w.addGeometry(t2);
    Dl(w, C, this.m_gcs, 0, 2, true, a2.xmin), Dl(w, C, this.m_gcs, 0, 2, true, a2.xmax);
    const v2 = w.getGeometry(C), S = Dt(v2, a2);
    S.inflateCoords(0, 1);
    const D = wt(null, S, true).total(), I = f2(v2, a2, D, Number.NaN, this.m_progressTracker);
    e.setEmpty(), e.add(I, false);
  }
  prepDoublePoleWrap(e) {
    const t2 = this.m_gcs360, s3 = this.m_gcs180, n3 = new n2();
    n3.setCoords({ xmin: -this.m_gcs180, ymin: -this.m_gcs90, xmax: this.m_gcs180, ymax: this.m_gcs90 });
    const i2 = n3.getCenter().x, r = new n2();
    e.queryPathEnvelope(0, r);
    let o2, m = 0, a2 = r.getCenter().x;
    if (a2 - i2 > s3 ? m = -Math.ceil((a2 - i2 - s3) / t2) : i2 - a2 > s3 && (m = Math.ceil((i2 - a2 - s3) / t2)), 0 !== m) {
      const s4 = new x();
      s4.setShiftCoords(m * t2, 0), e.getImpl().applyTransformationToPath(s4, 0), e.queryPathEnvelope(0, r), a2 = r.getCenter().x;
    }
    const h2 = new n2();
    n3.containsExclusiveEnvelope(r) ? (o2 = false, h2.setCoords({ env2D: n3 })) : (o2 = true, h2.setCoords({ env2D: n3 }), h2.xmin -= t2, h2.xmax += t2);
    let c = e.createInstance();
    c.addPathPoint2D(null, 0, true);
    const u = new ei();
    if (u.setCoords(h2.xmin, h2.ymin), c.insertPoint2D(0, -1, u), u.setCoords(h2.xmin, h2.ymax), c.insertPoint2D(0, -1, u), u.setCoords(0.5 * (h2.xmin + h2.xmax), h2.ymax), c.insertPoint2D(0, -1, u), u.setCoords(h2.xmax, h2.ymax), c.insertPoint2D(0, -1, u), u.setCoords(h2.xmax, h2.ymin), c.insertPoint2D(0, -1, u), u.setCoords(0.5 * (h2.xmin + h2.xmax), h2.ymin), c.insertPoint2D(0, -1, u), o2) {
      c.addPath(e, 0, true);
      const s4 = new x();
      a2 < i2 ? s4.setShiftCoords(t2, 0) : s4.setShiftCoords(-t2, 0), e.getImpl().applyTransformationToPath(s4, 0), c.addPath(e, 0, true);
      const r2 = new Tm(), o3 = r2.addGeometry(c);
      Dl(r2, o3, this.m_gcs, 0, 2, true, n3.xmin), Dl(r2, o3, this.m_gcs, 0, 2, true, n3.xmax), c = r2.getGeometry(o3);
      const m2 = Dt(c, n3);
      m2.inflateCoords(0, 1);
      const h3 = wt(null, m2, true).total();
      c = f2(c, n3, h3, Number.NaN, this.m_progressTracker);
    } else c.addPath(e, 0, true);
    e.setEmpty(), e.add(c, false);
  }
  setMinCornerStep() {
    const e = { stack: [], error: void 0, hasError: false };
    try {
      let s3 = Math.min(Math.PI * this.m_a - this.m_absDistance, this.m_absDistance);
      s3 = Math.min(s3, 0.125 * this.m_a * Math.PI);
      const n3 = new ei();
      n3.setCoords(0, 10 * this.m_rpu);
      const i2 = 0;
      let r = 45 * this.m_rpu;
      const o2 = n(e, new Gt(new yc(), new yc()), false), m = n(e, new Gt(new yc(), new yc()), false), a2 = n(e, new Gt(new yc(), new yc()), false), h2 = n(e, new Gt(new yc(), new yc()), false), c = new ei(), u = new ei(), l2 = new ei(), _ = new ei();
      for (vc.geodesicCoordinate(this.m_a, this.m_eSquared, n3.x, n3.y, s3, i2, o2.at(0), o2.at(1)), c.setCoords(o2.at(0).val, o2.at(1).val), vc.geodesicCoordinate(this.m_a, this.m_eSquared, n3.x, n3.y, s3, r, m.at(0), m.at(1)), u.setCoords(m.at(0).val, m.at(1).val); ; ) {
        const e2 = { stack: [], error: void 0, hasError: false };
        try {
          const t2 = 0.5 * (i2 + r);
          vc.geodesicCoordinate(this.m_a, this.m_eSquared, n3.x, n3.y, s3, t2, a2.at(0), a2.at(1)), l2.setCoords(a2.at(0).val, a2.at(1).val);
          const o3 = n(e2, new yc(), false), f4 = n(e2, new yc(), false);
          vc.geodeticDistance(this.m_a, this.m_eSquared, c.x, c.y, u.x, u.y, o3, f4, null, 2), vc.geodeticCoordinate(this.m_a, this.m_eSquared, c.x, c.y, 0.5 * o3.val, f4.val, h2.at(0), h2.at(1), 2), _.setCoords(h2.at(0).val, h2.at(1).val);
          const d2 = n(e2, new yc(), false);
          vc.geodeticDistance(this.m_a, this.m_eSquared, l2.x, l2.y, _.x, _.y, d2, null, null, 2);
          if (d2.val <= this.m_convergenceOffset) break;
          r *= 0.9, vc.geodesicCoordinate(this.m_a, this.m_eSquared, n3.x, n3.y, s3, r, m.at(0), m.at(1)), u.setCoords(m.at(0).val, m.at(1).val);
        } catch (t2) {
          e2.error = t2, e2.hasError = true;
        } finally {
          s(e2);
        }
      }
      const f3 = r - i2, d = 2 * Math.PI / Math.ceil(2 * Math.PI / f3);
      this.m_cornerStep = d;
    } catch (s3) {
      e.error = s3, e.hasError = true;
    } finally {
      s(e);
    }
  }
  setMinSegmentStep() {
    const e = { stack: [], error: void 0, hasError: false };
    try {
      let n3 = Math.min(Math.PI * this.m_a - this.m_absDistance, this.m_absDistance);
      n3 = Math.min(n3, 0.125 * this.m_a * Math.PI);
      const i2 = new ei(), r = new ei();
      i2.setCoords(0, 10 * this.m_rpu), r.setCoords(10 * this.m_rpu, 10 * this.m_rpu);
      const o2 = n(e, new yc(), false), m = n(e, new yc(), false), a2 = n(e, new yc(), false);
      vc.geodeticDistance(this.m_a, this.m_eSquared, i2.x, i2.y, r.x, r.y, a2, o2, m, this.m_curveType);
      const h2 = n(e, new Gt(new yc(), new yc()), false), c = n(e, new Gt(new yc(), new yc()), false), u = new ei(), l2 = n(e, new yc(), false), _ = n(e, new Gt(new yc(), new yc()), false), f3 = n(e, new Gt(new yc(), new yc()), false), d = n(e, new Gt(new yc(), new yc()), false), g = n(e, new Gt(new yc(), new yc()), false), p = new ei(), P2 = new ei(), x2 = new ei(), b2 = new ei(), y2 = 0;
      let w = 1;
      const C = o2.val, v2 = m.val, S = C - 0.5 * Math.PI, D = v2 + 0.5 * Math.PI, I = a2.val;
      for (vc.geodesicCoordinate(this.m_a, this.m_eSquared, i2.x, i2.y, n3, S, _.at(0), _.at(1)), p.setCoords(_.at(0).val, _.at(1).val), vc.geodesicCoordinate(this.m_a, this.m_eSquared, r.x, r.y, n3, D, f3.at(0), f3.at(1)), P2.setCoords(f3.at(0).val, f3.at(1).val); ; ) {
        const e2 = { stack: [], error: void 0, hasError: false };
        try {
          const s3 = 0.5 * (y2 + w);
          vc.geodeticCoordinate(this.m_a, this.m_eSquared, i2.x, i2.y, s3 * I, C, h2.at(0), h2.at(1), this.m_curveType), u.setCoords(h2.at(0).val, h2.at(1).val), vc.geodeticDistance(this.m_a, this.m_eSquared, i2.x, i2.y, u.x, u.y, null, null, l2, this.m_curveType);
          const o3 = l2.val + 0.5 * Math.PI;
          vc.geodesicCoordinate(this.m_a, this.m_eSquared, u.x, u.y, n3, o3, d.at(0), d.at(1)), x2.setCoords(d.at(0).val, d.at(1).val);
          const m2 = n(e2, new yc(), false), a3 = n(e2, new yc(), false);
          vc.geodeticDistance(this.m_a, this.m_eSquared, p.x, p.y, P2.x, P2.y, m2, a3, null, 2), vc.geodeticCoordinate(this.m_a, this.m_eSquared, p.x, p.y, 0.5 * m2.val, a3.val, g.at(0), g.at(1), 2), b2.setCoords(g.at(0).val, g.at(1).val);
          const _2 = n(e2, new yc(), false);
          vc.geodeticDistance(this.m_a, this.m_eSquared, x2.x, x2.y, b2.x, b2.y, _2, null, null, 2);
          if (_2.val <= this.m_convergenceOffset) break;
          {
            const e3 = { stack: [], error: void 0, hasError: false };
            try {
              w *= 0.9, vc.geodeticCoordinate(this.m_a, this.m_eSquared, i2.x, i2.y, w * I, C, c.at(0), c.at(1), this.m_curveType), r.setCoords(c.at(0).val, c.at(1).val);
              const t2 = n(e3, new yc(), false);
              vc.geodeticDistance(this.m_a, this.m_eSquared, i2.x, i2.y, r.x, r.y, null, null, t2, this.m_curveType);
              const s4 = t2.val + 0.5 * Math.PI;
              vc.geodesicCoordinate(this.m_a, this.m_eSquared, r.x, r.y, n3, s4, f3.at(0), f3.at(1)), P2.setCoords(f3.at(0).val, f3.at(1).val);
            } catch (t2) {
              e3.error = t2, e3.hasError = true;
            } finally {
              s(e3);
            }
          }
        } catch (s3) {
          e2.error = s3, e2.hasError = true;
        } finally {
          s(e2);
        }
      }
      let G = w * I;
      G > 1e5 && (G = 1e5), this.m_segmentStep = G;
    } catch (n3) {
      e.error = n3, e.hasError = true;
    } finally {
      s(e);
    }
  }
  setConvergenceOffset() {
    let e;
    e = this.m_absDistance > 5e4 ? 100 : this.m_absDistance > 1e4 ? 10 : 1, this.m_absDistance / e < 500 && (e = this.m_absDistance / 500), e < 0.01 && (e = 0.01), this.m_convergenceOffset = e;
  }
};
function he(e, t2, s3, n3, i2, r, o2) {
  if (e.isEmpty()) return new eh({ vd: e.getDescription() });
  let f3 = e;
  if (E(f3)) {
    const e2 = 10 * t2.getTolerance(0);
    f3 = new o().execute(f3, 0, e2, 0, o2, 12e3);
  }
  const y2 = new ae(o2);
  y2.m_sr = t2, y2.m_gcs = t2.getGCS(), y2.m_transform = qg(t2, y2.m_gcs, null);
  const w = Gu();
  y2.m_gcs.querySpheroidData(w);
  const C = new n2();
  f3.queryEnvelope(C), y2.m_a = w.majorSemiAxis, y2.m_eSquared = w.e2, y2.m_rpu = y2.m_gcs.getUnit().getUnitToBaseFactor(), y2.m_gcs90 = 0.5 * Math.PI / y2.m_rpu, y2.m_gcs180 = Math.PI / y2.m_rpu, y2.m_gcs360 = 2 * Math.PI / y2.m_rpu, y2.m_gcs60 = y2.m_gcs360 / 6, y2.m_q90 = Nc.q90(y2.m_a, y2.m_eSquared), y2.m_ellipticToGeodesicMaxRatio = 0.5 * y2.m_a * Math.PI / y2.m_q90;
  const v2 = y2.m_gcs.getTolerance(0);
  y2.m_radTolerance = v2 * y2.m_rpu, 4 === s3 ? (y2.m_curveType = 2, y2.m_bShapePreserving = true) : (y2.m_curveType = s3, y2.m_bShapePreserving = false), y2.m_distance = n3, y2.m_absDistance = Math.abs(n3), Number.isNaN(i2) || i2 <= 0 ? y2.setConvergenceOffset() : y2.m_convergenceOffset = Math.max(i2, 1e-3), y2.m_convergenceOffset /= r;
  let S, D = f3.getGeometryType();
  if (f(D)) {
    const e2 = new Na({ vd: f3.getDescription() });
    e2.addSegment(f3, true), S = e2, D = a.enumPolyline;
  } else if (D === a.enumEnvelope) {
    const e2 = f3, t3 = new n2();
    e2.queryEnvelope(t3);
    const s4 = Pt(wt(y2.m_sr, C, true));
    if (t3.minDimension() <= s4) if (0 === t3.maxDimension()) {
      const t4 = new ee({ vd: f3.getDescription() });
      e2.getCenter(t4), S = t4, D = a.enumPoint;
    } else {
      const t4 = new Na({ vd: f3.getDescription() });
      t4.addEnvelope(e2, false), S = t4, D = a.enumPolyline;
    }
    else {
      const t4 = new eh({ vd: f3.getDescription() });
      t4.addEnvelope(e2, false), S = t4, D = a.enumPolygon;
    }
  } else S = f3;
  if (y2.setMinCornerStep(), l(D) || y2.setMinSegmentStep(), y2.m_absDistance <= 0.5 * y2.m_convergenceOffset) return D !== a.enumPolygon ? new eh({ vd: S.getDescription() }) : y2.m_bShapePreserving ? S : Mh(S, y2.m_sr, y2.m_curveType, y2.m_segmentStep, -1, o2);
  if (y2.m_distance < 0 && D !== a.enumPolygon) return new eh({ vd: S.getDescription() });
  if (y2.m_bShapePreserving && h(D)) {
    const e2 = Mh(S, t2, 4, Number.NaN, y2.m_convergenceOffset, o2);
    S = new kh().execute(e2, y2.m_transform, o2);
  } else S = new kh().execute(S, y2.m_transform, o2);
  if (S = Vl(S, y2.m_gcs), S.isEmpty()) return new eh({ vd: S.getDescription() });
  !y2.m_bShapePreserving && h(D) && (S = Uh(y2.m_rpu, S)), S = fe(S, y2.m_gcs);
  let I = new eh();
  switch (D) {
    case a.enumPolygon:
      I = y2.bufferPolygon(S);
      break;
    case a.enumPolyline:
      I = y2.bufferPolyline(S);
      break;
    case a.enumMultiPoint:
      I = y2.bufferMultiPoint(S);
      break;
    case a.enumPoint:
      I = y2.bufferPoint(S);
      break;
    default:
      v("");
  }
  const G = new kh().execute(I, y2.m_transform.getInverse(), o2);
  return G.mergeVertexDescription(S.getDescription()), G;
}
function ce(e, t2, s3, n3, i2, r, o2, m, a2, h2, c) {
  const u = { stack: [], error: void 0, hasError: false };
  try {
    const l2 = new ei();
    l2.setNAN(), a2 || c.getPointCount() > 0 && (l2.setCoordsPoint2D(c.getXY(c.getPointCount() - 1)), l2.scale(s3));
    const _ = n(u, new yc(), false), f3 = n(u, new Gt(new yc(), new yc()), false), d = new ei(), g = new ei(), p = r.at(-1), P2 = 1 / s3;
    for (let s4 = 0; s4 < r.length; s4++) {
      const u2 = r[s4];
      let x2;
      0 === s4 ? x2 = o2 : s4 === r.length - 1 ? x2 = m : (vc.geodeticDistance(e, t2, p.x, p.y, u2.x, u2.y, null, null, _, i2), x2 = _.val - 0.5 * Math.PI), vc.geodesicCoordinate(e, t2, u2.x, u2.y, n3, x2, f3.at(0), f3.at(1)), a2 ? g.setCoords(f3.at(0).val, f3.at(1).val) : (d.setCoords(f3.at(0).val, f3.at(1).val), h2 = _e(u2.x, d.x, l2.x, h2), g.setCoords(h2 + d.x, d.y), l2.setCoordsPoint2D(g)), g.scale(P2), c.insertPoint2D(0, -1, g);
    }
    return h2;
  } catch (l2) {
    u.error = l2, u.hasError = true;
  } finally {
    s(u);
  }
}
function ue(e, t2, s3, n3, i2, r, o2, m, a2, h2, c, u = Number.NaN, l2 = Number.NaN) {
  const _ = { stack: [], error: void 0, hasError: false };
  try {
    if (o2 - r < m) return h2;
    const f3 = n(_, new Gt(new yc(), new yc()), false), d = new ei(), g = new ei(), p = new ei();
    g.setNAN(), a2 || c.getPointCount() > 0 && (g.setCoordsPoint2D(c.getXY(c.getPointCount() - 1)), g.scale(s3));
    let P2 = Math.ceil(r / m), x2 = P2++ * m;
    x2 === r && (x2 = P2++ * m);
    let b2 = r;
    const y2 = 1 / s3;
    for (; x2 < o2 + m && (b2 < u && u < x2 ? (x2 = u, P2--) : b2 < l2 && l2 < x2 && (x2 = l2, P2--), !(x2 >= o2)); ) vc.geodesicCoordinate(e, t2, i2.x, i2.y, n3, x2, f3.at(0), f3.at(1)), a2 ? p.setCoords(f3.at(0).val, f3.at(1).val) : (d.setCoords(f3.at(0).val, f3.at(1).val), h2 = _e(i2.x, d.x, g.x, h2), p.setCoords(h2 + d.x, d.y), g.setCoordsPoint2D(p)), p.scale(y2), c.insertPoint2D(0, -1, p), b2 = x2, x2 = P2++ * m;
    return h2;
  } catch (f3) {
    _.error = f3, _.hasError = true;
  } finally {
    s(_);
  }
}
function le(e, t2, s3, n3, i2, r, o2, m, a2, h2, c) {
  const u = { stack: [], error: void 0, hasError: false };
  try {
    const s4 = new ei(), l2 = new ei(), _ = n(u, new Gt(new yc(), new yc()), false);
    vc.geodesicCoordinate(e, t2, i2.x, i2.y, n3, r, _.at(0), _.at(1)), s4.setCoords(_.at(0).val, _.at(1).val), vc.geodesicCoordinate(e, t2, i2.x, i2.y, n3, o2, _.at(0), _.at(1)), l2.setCoords(_.at(0).val, _.at(1).val);
    const f3 = n(u, new yc(), false);
    for (vc.geodeticDistance(e, t2, m.x, m.y, s4.x, s4.y, null, f3, null, 0), h2[0] = f3.val, vc.geodeticDistance(e, t2, m.x, m.y, l2.x, l2.y, null, f3, null, 0), c[0] = f3.val; h2[0] <= c[0]; ) h2[0] += Ut;
    for (; h2[0] > c[0]; ) h2[0] -= Ut;
    for (; h2[0] >= a2; ) h2[0] -= Ut, c[0] -= Ut;
    for (; h2[0] < a2; ) h2[0] += Ut, c[0] += Ut;
  } catch (l2) {
    u.error = l2, u.hasError = true;
  } finally {
    s(u);
  }
}
function _e(e, t2, s3, n3) {
  if (Number.isNaN(s3)) {
    for (; n3 + t2 - e > Math.PI; ) n3 -= Ut;
    for (; e - (n3 + t2) > Math.PI; ) n3 += Ut;
    return n3;
  }
  return n3 + t2 - s3 > Math.PI ? n3 -= Ut : s3 - (n3 + t2) > Math.PI && (n3 += Ut), n3;
}
function fe(e, t2) {
  const s3 = e.getGeometryType();
  let n3;
  if (n3 = h(s3) ? e.getPathCount() : s3 === a.enumMultiPoint ? e.getPointCount() : 1, 1 === n3) return e;
  const i2 = [], r = [];
  for (let m = 0; m < n3; m++) {
    i2.push(m);
    const n4 = new ei();
    if (h(s3)) {
      const t3 = new n2();
      e.queryPathEnvelope(m, t3), n4.assign(t3.getCenter());
    } else n4.assign(e.getXY(m));
    const o3 = t2.toGeohash(n4);
    r.push(o3);
  }
  i2.sort((e2, t3) => r[e2] < r[t3] ? -1 : r[e2] > r[t3] ? 1 : 0);
  const o2 = e.createInstance();
  for (let m = 0; m < n3; m++) {
    const t3 = i2[m];
    h(s3) ? o2.addPath(e, t3, true) : o2.addPoints(e, t3, t3 + 1);
  }
  return o2;
}
function de(e, t2, s3, n3, i2, r) {
  const o2 = { stack: [], error: void 0, hasError: false };
  try {
    if (n3 >= r) return false;
    const m = s3[0], a2 = s3.at(-1), h2 = n(o2, new yc(), false), c = n(o2, new yc(), false), u = n(o2, new yc(), false);
    vc.greatEllipticDistance(e, t2, i2.x, i2.y, m.x, m.y, h2, null, null), vc.greatEllipticDistance(e, t2, i2.x, i2.y, a2.x, a2.y, c, null, null), vc.greatEllipticDistance(e, t2, m.x, m.y, a2.x, a2.y, u, null, null);
    let l2 = Math.min(h2.val, c.val) + u.val, _ = l2 + n3;
    if (_ < r) return true;
    const f3 = n(o2, new yc(), false);
    l2 = Math.max(h2.val, c.val);
    for (let n4 = 1; n4 < s3.length - 1; n4++) {
      const r2 = s3[n4];
      vc.greatEllipticDistance(e, t2, i2.x, i2.y, r2.x, r2.y, f3, null, null), f3.val > l2 && (l2 = f3.val);
    }
    return _ = l2 + n3, _ < r;
  } catch (m) {
    o2.error = m, o2.hasError = true;
  } finally {
    s(o2);
  }
}
function ge(e, t2, s3, n3, i2, r, o2, m) {
  let a2;
  if (n3.length % 2 == 0) {
    const e2 = n3.length >> 1, t3 = n3[e2], s4 = n3[e2 - 1];
    a2 = ei.lerp(t3, s4, 0.5);
  } else {
    a2 = n3[n3.length - 1 >> 1].clone();
  }
  const h2 = a2.clone(), c = hm(e, t2, h2, 75 / 180 * Math.PI);
  return !!de(e, t2, n3, i2, h2, c) && (null !== r && (r.setCoordsPoint2D(a2), r.scale(1 / s3)), null !== o2 && o2.setCoordsPoint2D(h2), null !== m && (m[0] = c), true);
}
function pe(e, t2, s3, n3, i2, r) {
  const o2 = { stack: [], error: void 0, hasError: false };
  try {
    if (n3 >= r) return false;
    const m = n(o2, new yc(), false);
    vc.greatEllipticDistance(e, t2, i2.x, i2.y, s3.x, s3.y, m, null, null);
    return m.val + n3 < r;
  } catch (m) {
    o2.error = m, o2.hasError = true;
  } finally {
    s(o2);
  }
}
function Pe(e, t2, s3, n3, i2, r, o2, m) {
  const a2 = hm(e, t2, n3, 75 / 180 * Math.PI);
  return !!pe(e, t2, n3, i2, n3, a2) && (null !== r && (r.setCoordsPoint2D(n3), r.scale(1 / s3)), null !== o2 && o2.setCoordsPoint2D(n3), null !== m && (m[0] = a2), true);
}
function xe(e, t2) {
  return new lm(e, t2);
}
function be(e) {
  return kt(e, 0) || Vt(e, 0), e;
}
var ye = class {
  constructor(e) {
    this.m_bRunningInGnomonic = false, this.m_bNeedsSimplify = false, this.m_gnomonic = null, this.m_gnomonicCenterRad = new ei(), this.m_minGnomonicRadius = Number.NaN, this.m_progressTracker = e;
  }
  isRunningInGnomonic() {
    return this.m_bRunningInGnomonic;
  }
  needsSimplify() {
    return this.m_bNeedsSimplify;
  }
  getGnomonic() {
    return this.m_gnomonic;
  }
};
var we = class extends ye {
  constructor(e, t2, s3) {
    super(e.m_progressTracker), this.m_segIter = null, this.m_bNextSegmentCannotJoin = false, this.m_currentDensifiedDelta = [0], this.m_currentBufferedDelta = 0, this.m_lastAzimuth = 0, this.m_startAzimuth = [0], this.m_endAzimuth = [0], this.m_numWinds = 0, this.m_debugCounter = 0, this.m_bufferHelper = new eh(), this.m_densifiedPoints = [], this.m_bufferer = e, this.m_multiPath = t2, this.m_densified = s3, this.m_bNeedsSimplify = true;
    const n3 = new n2();
    this.m_multiPath.queryEnvelope(n3);
    const i2 = n3.getCenter(), r = i2.clone();
    r.scale(this.m_bufferer.m_rpu), this.m_gnomonic = xe(this.m_bufferer.m_gcs, i2), this.m_gnomonicCenterRad = r.clone(), this.m_minGnomonicRadius = hm(this.m_bufferer.m_a, this.m_bufferer.m_eSquared, r, 75 / 180 * Math.PI);
  }
  next() {
    let e;
    if (this.m_bNextSegmentCannotJoin) return this.m_bNextSegmentCannotJoin = false, this.m_segIter.nextSegment(), e = this.m_bufferHelper.clone(), e;
    if (null === this.m_segIter) {
      if (this.m_segIter = this.m_multiPath.getImpl().querySegmentIterator(), !this.m_segIter.nextPath()) return null;
      null !== this.m_densified && this.m_densified.addPathPoint2D(null, 0, true);
    }
    if (!this.m_segIter.hasNextSegment()) {
      if (!this.m_segIter.nextPath()) return null;
      null != this.m_densified && this.m_densified.addPathPoint2D(null, 0, true);
    }
    let t2 = null;
    this.m_currentBufferedDelta = 0, this.m_currentDensifiedDelta = [0], this.m_numWinds = 0, this.m_lastAzimuth = Number.NaN, this.m_bNextSegmentCannotJoin = false, this.m_densifiedPoints.length = 0;
    const s3 = 16;
    let n3 = 0;
    const i2 = new ei(), r = new ei();
    for (; this.m_segIter.hasNextSegment() && this.m_numWinds < s3; ) {
      const e2 = this.m_segIter.nextSegment();
      if (i2.setCoordsPoint2D(e2.getStartXY()), r.setCoordsPoint2D(e2.getEndXY()), i2.scale(this.m_bufferer.m_rpu), r.scale(this.m_bufferer.m_rpu), Bh(i2, r)) i2.x = r.x;
      else if (Rh(i2, r)) r.x = i2.x;
      else {
        let e3 = -1, t3 = -1;
        const s5 = this.m_segIter.getPathIndex(), n4 = this.m_multiPath.getPathStart(s5), o2 = this.m_multiPath.getPathEnd(s5);
        if (e3 = this.m_segIter.getStartPointIndex() - 1, t3 = this.m_segIter.getEndPointIndex() + 1, e3 < n4 && (e3 = this.m_multiPath.isClosedPath(s5) ? o2 - 1 : -1), t3 > o2 - 1 && (t3 = this.m_multiPath.isClosedPath(s5) ? n4 : -1), -1 !== e3) {
          const t4 = this.m_multiPath.getXY(e3);
          t4.scale(this.m_bufferer.m_rpu), Rh(t4, i2) && (i2.x = t4.x);
        }
        if (-1 !== t3) {
          const e4 = this.m_multiPath.getXY(t3);
          e4.scale(this.m_bufferer.m_rpu), Bh(r, e4) && (r.x = e4.x);
        }
      }
      this.m_densifiedPoints.length = 0;
      const s4 = qh(this.m_bufferer.m_a, this.m_bufferer.m_eSquared, this.m_bufferer.m_curveType, i2, r, this.m_bufferer.m_segmentStep, Number.NaN, this.m_bufferer.m_radTolerance, this.m_startAzimuth, this.m_endAzimuth, this.m_densifiedPoints, this.m_currentDensifiedDelta);
      if (0 === n3) this.m_bRunningInGnomonic = this.isSegmentBufferInCurrentGnomonic(this.m_densifiedPoints), this.m_bRunningInGnomonic || (this.m_bRunningInGnomonic = this.tryUpdateGnomonic(this.m_densifiedPoints));
      else if (this.m_bRunningInGnomonic) {
        if (!this.isSegmentBufferInCurrentGnomonic(this.m_densifiedPoints)) {
          this.m_segIter.previousSegment(), this.m_segIter.previousSegment(), this.m_segIter.nextSegment();
          break;
        }
      } else {
        if (ge(this.m_bufferer.m_a, this.m_bufferer.m_eSquared, this.m_bufferer.m_rpu, this.m_densifiedPoints, this.m_bufferer.m_absDistance * this.m_bufferer.m_ellipticToGeodesicMaxRatio, null, null, null)) {
          this.m_segIter.previousSegment(), this.m_segIter.previousSegment(), this.m_segIter.nextSegment();
          break;
        }
      }
      if (0 === s4 || Oh(i2, r) ? (this.m_bufferHelper.setEmpty(), this.m_bufferer.bufferPoint2D(i2, this.m_bRunningInGnomonic, this.m_bufferHelper), this.m_bNextSegmentCannotJoin = true) : (this.m_bufferHelper.setEmpty(), this.m_bNextSegmentCannotJoin = this.checkAndPrepSegmentForCrossingAzimuthsOrPoleWrap(s4, this.m_bufferHelper)), this.m_bNextSegmentCannotJoin) {
        this.m_segIter.previousSegment(), this.m_segIter.hasPreviousSegment() ? (this.m_segIter.previousSegment(), this.m_segIter.nextSegment()) : this.m_segIter.resetToFirstSegment(), null != this.m_densified && this.m_densified.insertPointsFromPoints(this.m_densified.getPathCount() - 1, -1, this.m_densifiedPoints, 0, this.m_densifiedPoints.length - 1, true);
        break;
      }
      null != this.m_densified && this.m_densified.insertPointsFromPoints(this.m_densified.getPathCount() - 1, -1, this.m_densifiedPoints, 0, this.m_densifiedPoints.length - 1, true), null === t2 && (t2 = new eh(), t2.addPathPoint2D(null, 0, true)), this.addJoinAndBufferLeftSide(t2), n3++;
    }
    if (this.m_currentDensifiedDelta = [0], n3 > 0) {
      const e2 = this.m_segIter.getStartPointIndex(), s4 = this.m_segIter.getPathIndex();
      for (; n3 > 0; ) {
        if (this.m_segIter.previousSegment(), i2.setCoordsPoint2D(this.m_multiPath.getXY(this.m_segIter.getStartPointIndex())), r.setCoordsPoint2D(this.m_multiPath.getXY(this.m_segIter.getEndPointIndex())), i2.scale(this.m_bufferer.m_rpu), r.scale(this.m_bufferer.m_rpu), this.m_bRunningInGnomonic) if (Bh(i2, r)) i2.x = r.x;
        else if (Rh(i2, r)) r.x = i2.x;
        else {
          let e3 = -1, t3 = -1;
          const s5 = this.m_segIter.getPathIndex(), n4 = this.m_multiPath.getPathStart(s5), o2 = this.m_multiPath.getPathEnd(s5);
          if (e3 = this.m_segIter.getStartPointIndex() - 1, t3 = this.m_segIter.getEndPointIndex() + 1, e3 < n4 && (e3 = this.m_multiPath.isClosedPath(s5) ? o2 - 1 : -1), t3 > o2 - 1 && (t3 = this.m_multiPath.isClosedPath(s5) ? n4 : -1), -1 !== e3) {
            const t4 = this.m_multiPath.getXY(e3);
            t4.scale(this.m_bufferer.m_rpu), Rh(t4, i2) && (i2.x = t4.x);
          }
          if (-1 !== t3) {
            const e4 = this.m_multiPath.getXY(t3);
            e4.scale(this.m_bufferer.m_rpu), Bh(r, e4) && (r.x = e4.x);
          }
        }
        this.m_densifiedPoints.length = 0, qh(this.m_bufferer.m_a, this.m_bufferer.m_eSquared, this.m_bufferer.m_curveType, r, i2, this.m_bufferer.m_segmentStep, Number.NaN, this.m_bufferer.m_radTolerance, this.m_startAzimuth, this.m_endAzimuth, this.m_densifiedPoints, this.m_currentDensifiedDelta), this.addJoinAndBufferLeftSide(t2), n3--;
      }
      return i2.setCoordsPoint2D(this.m_multiPath.getXY(this.m_segIter.getStartPointIndex())), i2.scale(this.m_bufferer.m_rpu), this.m_currentBufferedDelta = ue(this.m_bufferer.m_a, this.m_bufferer.m_eSquared, this.m_bufferer.m_rpu, this.m_bufferer.m_absDistance, i2, this.m_lastAzimuth + 0.5 * Math.PI, this.m_lastAzimuth + 1.5 * Math.PI, this.m_bufferer.m_cornerStep, this.m_bRunningInGnomonic, this.m_currentBufferedDelta, t2), this.m_segIter.resetToVertex(e2, s4), this.m_segIter.nextSegment(), t2;
    }
    return this.m_bNextSegmentCannotJoin = false, this.m_segIter.nextSegment(), e = this.m_bufferHelper.clone(), e;
  }
  isSegmentBufferInCurrentGnomonic(e) {
    return null !== this.m_gnomonic && de(this.m_bufferer.m_a, this.m_bufferer.m_eSquared, e, this.m_bufferer.m_absDistance * this.m_bufferer.m_ellipticToGeodesicMaxRatio, this.m_gnomonicCenterRad, this.m_minGnomonicRadius);
  }
  tryUpdateGnomonic(e) {
    const t2 = new ei(), s3 = new ei(), n3 = [0];
    return ge(this.m_bufferer.m_a, this.m_bufferer.m_eSquared, this.m_bufferer.m_rpu, e, this.m_bufferer.m_absDistance * this.m_bufferer.m_ellipticToGeodesicMaxRatio, t2, s3, n3) ? (this.m_gnomonicCenterRad.setCoordsPoint2D(s3), this.m_minGnomonicRadius = n3[0], this.m_gnomonic = xe(this.m_bufferer.m_gcs, t2), true) : (this.m_gnomonic = null, false);
  }
  checkAndPrepSegmentForCrossingAzimuthsOrPoleWrap(e, t2) {
    return this.m_bufferer.checkAndPrepSegmentForCrossingAzimuthsOrPoleWrap(this.m_densifiedPoints, e, this.m_startAzimuth[0], this.m_endAzimuth[0], this.m_bRunningInGnomonic, t2);
  }
  addJoinAndBufferLeftSide(e) {
    const t2 = this.m_densifiedPoints[0];
    let s3 = Number.NaN, n3 = this.m_startAzimuth[0] - Yt;
    const i2 = this.m_endAzimuth[0] + Yt;
    let r = false;
    if (!Number.isNaN(this.m_lastAzimuth)) {
      this.m_lastAzimuth >= this.m_startAzimuth[0] ? (s3 = this.m_lastAzimuth + Yt, n3 = s3 + Math.PI - (this.m_lastAzimuth - this.m_startAzimuth[0])) : (s3 = this.m_lastAzimuth + Yt, n3 = s3 + Math.PI - (Ut - (this.m_startAzimuth[0] - this.m_lastAzimuth))), r = !(this.m_lastAzimuth >= this.m_startAzimuth[0] && this.m_lastAzimuth - this.m_startAzimuth[0] <= Math.PI) && !(this.m_lastAzimuth < this.m_startAzimuth[0] && this.m_startAzimuth[0] - this.m_lastAzimuth >= Math.PI);
      let i3 = false;
      if (Math.abs(n3 - s3) <= 0.5 * this.m_bufferer.m_cornerStep && (r || (i3 = true)), i3) {
        if (e.removePointFromPath(0, e.getPointCount() - 1), !this.m_bRunningInGnomonic) {
          const t3 = new ei();
          t3.setCoordsPoint2D(e.getXY(e.getPointCount() - 1)), t3.scale(this.m_bufferer.m_rpu), t3.x - this.m_currentBufferedDelta < -Math.PI ? this.m_currentBufferedDelta -= Ut : t3.x - this.m_currentBufferedDelta > Math.PI && (this.m_currentBufferedDelta += Ut);
        }
        n3 = 0.5 * (n3 + s3);
      } else if (r) {
        const s4 = new ei();
        s4.setCoordsPoint2D(t2), s4.scale(1 / this.m_bufferer.m_rpu), e.insertPoint2D(0, -1, s4);
      } else ue(this.m_bufferer.m_a, this.m_bufferer.m_eSquared, this.m_bufferer.m_rpu, this.m_bufferer.m_absDistance, this.m_densifiedPoints[0], s3, n3, this.m_bufferer.m_cornerStep, this.m_bRunningInGnomonic, this.m_currentBufferedDelta, e);
    }
    this.m_startAzimuth[0] !== this.m_lastAzimuth && this.m_numWinds++, ce(this.m_bufferer.m_a, this.m_bufferer.m_eSquared, this.m_bufferer.m_rpu, this.m_bufferer.m_absDistance, this.m_bufferer.m_curveType, this.m_densifiedPoints, n3, i2, this.m_bRunningInGnomonic, this.m_currentBufferedDelta, e), this.m_lastAzimuth = this.m_endAzimuth[0];
  }
};
var Ce = class extends ye {
  constructor(e, t2) {
    super(e.m_progressTracker), this.m_pointIndex = -1, this.m_bufferer = e, this.m_multiPoint = t2, this.m_bNeedsSimplify = false;
    const s3 = new n2();
    this.m_multiPoint.queryEnvelope(s3);
    const n3 = s3.getCenter(), i2 = n3.clone();
    i2.scale(this.m_bufferer.m_rpu), this.m_gnomonic = xe(this.m_bufferer.m_gcs, n3), this.m_gnomonicCenterRad = i2.clone(), this.m_minGnomonicRadius = hm(this.m_bufferer.m_a, this.m_bufferer.m_eSquared, i2, 75 / 180 * Math.PI);
  }
  next() {
    if (this.m_bNeedsSimplify = false, ++this.m_pointIndex === this.m_multiPoint.getPointCount()) return null;
    const e = this.m_multiPoint.getXY(this.m_pointIndex);
    e.scale(this.m_bufferer.m_rpu), this.m_bRunningInGnomonic = this.isPointBufferInCurrentGnomonic(e), this.m_bRunningInGnomonic || (this.m_bRunningInGnomonic = this.tryUpdateGnomonic(e));
    const t2 = new eh(), s3 = this.m_bufferer.bufferPoint2D(e, this.m_bRunningInGnomonic, t2);
    return this.m_bNeedsSimplify = s3, t2;
  }
  isPointBufferInCurrentGnomonic(e) {
    return null !== this.m_gnomonic && pe(this.m_bufferer.m_a, this.m_bufferer.m_eSquared, e, this.m_bufferer.m_absDistance * this.m_bufferer.m_ellipticToGeodesicMaxRatio, this.m_gnomonicCenterRad, this.m_minGnomonicRadius);
  }
  tryUpdateGnomonic(e) {
    const t2 = new ei(), s3 = new ei(), n3 = [0];
    return Pe(this.m_bufferer.m_a, this.m_bufferer.m_eSquared, this.m_bufferer.m_rpu, e, this.m_bufferer.m_absDistance * this.m_bufferer.m_ellipticToGeodesicMaxRatio, t2, s3, n3) ? (this.m_gnomonicCenterRad.setCoordsPoint2D(s3), this.m_minGnomonicRadius = n3[0], this.m_gnomonic = xe(this.m_bufferer.m_gcs, t2), true) : (this.m_gnomonic = null, false);
  }
};
var ve = class {
  getOperatorType() {
    return 10110;
  }
  supportsCurves() {
    return true;
  }
  accelerateGeometry(e, t2, s3) {
    return false;
  }
  canAccelerateGeometry(e) {
    return false;
  }
  executeMany(e, t2, s3, n3, i2, r, o2, m) {
    if (o2) {
      const o3 = new Se(e, t2, s3, n3, i2, false, r, m);
      return new nl().executeMany(o3, t2, m);
    }
    return new Se(e, t2, s3, n3, i2, false, r, m);
  }
  execute(t2, n3, i2, r, o2, m, a2) {
    const h2 = new s2([t2]), c = [r], u = this.executeMany(h2, n3, i2, c, o2, false, m, a2).next();
    return u || b("geodesic buffer null output"), u;
  }
};
var Se = class extends t {
  constructor(e, t2, s3, r, o2, m, a2, h2) {
    super(), this.m_currentUnionEnvelope2D = new n2(), this.m_index = -1, this.m_dindex = -1, this.m_progressTracker = h2, m && z(""), t2 || P("");
    0 === t2.getCoordinateSystemType() && P(""), this.m_inputGeoms = e, this.m_spatialReference = t2, this.m_curveType = s3, this.m_distances = r, this.m_convergenceOffset = o2, this.m_bOutlineOnly = m, this.m_bUnion = a2;
  }
  next() {
    let e;
    for (; e = this.m_inputGeoms.next(); ) return j(e), this.m_index = this.m_inputGeoms.getGeometryID(), this.m_dindex + 1 < this.m_distances.length && this.m_dindex++, this.geodesicBuffer(e, this.m_distances[this.m_dindex]);
    return null;
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
  geodesicBuffer(e, t2) {
    return me(e, this.m_spatialReference, this.m_curveType, t2, this.m_convergenceOffset, this.m_progressTracker);
  }
};
export {
  ve as OperatorGeodesicBuffer
};
//# sourceMappingURL=OperatorGeodesicBuffer-H6E2L6KO.js.map
