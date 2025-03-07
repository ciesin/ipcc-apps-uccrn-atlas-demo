import {
  Na,
  eh,
  sh,
  zt
} from "./chunk-NEFPLHSJ.js";
import {
  s,
  t
} from "./chunk-VUD5O2WG.js";
import {
  J,
  P,
  Ut,
  X,
  Yt,
  a,
  ei,
  f,
  j,
  z
} from "./chunk-67PUVBHA.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorOffset.js
function l(t2, s2, e, o, h, r) {
  if (null === t2 && P(""), t2.getDimension() < 1 && P(""), h > 0 || P(""), j(t2), 0 === s2 || t2.isEmpty()) return t2;
  const m = new A(r);
  return m.m_bUseZ = t2.hasAttribute(1), m.m_bUseM = t2.hasAttribute(2), m.m_inputGeometry = t2, m.m_distance = s2, m.m_tolerance = h, m.m_joins = e, m.m_miterLimit = o > 1 ? o : 1, m.m_progressCounter = 0, m.constructOffset();
}
var y = 1.4142135623730951;
var x = 0.017453292519943295;
var p = 256;
var b = 512;
var M = 1024;
var g = class _g {
  static construct(t2, s2, e) {
    const i = new _g();
    return i.x = t2.x, i.y = t2.y, i.m_next = -1, i.m_prev = -1, i.z = s2, i.m = e, i.type = 0, i;
  }
  clone() {
    const t2 = new _g();
    return t2.x = this.x, t2.y = this.y, t2.m_next = this.m_next, t2.m_prev = this.m_prev, t2.z = this.z, t2.m = this.m, t2.type = this.type, t2;
  }
  asPoint2D() {
    return new ei(this.x, this.y);
  }
};
function C() {
  return { pt: new g(), bAtExistingPt: false };
}
var A = class _A {
  constructor(t2) {
    this.m_distance = -1, this.m_tolerance = -1, this.m_miterLimit = 10, this.m_joins = 0, this.m_progressCounter = 0, this.m_bUseZ = false, this.m_bUseM = false, this.m_srcPts = [], this.m_srcPtCount = 0, this.m_offsetPts = [], this.m_offsetPtCount = 0, this.m_a1 = 0, this.m_a2 = 0, this.m_progressTracker = t2;
  }
  constructOffset() {
    const t2 = this.m_inputGeometry.getGeometryType();
    if (t2 === a.enumLine) return this.offsetLine();
    if (t2 === a.enumEnvelope) return this.offsetEnvelope();
    if (f(t2)) {
      const t3 = new Na();
      return t3.addSegment(this.m_inputGeometry, true), this.m_inputGeometry = t3, this.constructOffset();
    }
    if (t2 === a.enumPolyline) {
      const t3 = new Na();
      return this.offsetMultiPath(t3), t3;
    }
    if (t2 === a.enumPolygon) {
      const t3 = new eh();
      return this.offsetMultiPath(t3), t3;
    }
    z("");
  }
  offsetLine() {
    const t2 = this.m_inputGeometry, s2 = t2.getStartXY(), e = t2.getEndXY(), i = new ei();
    i.setSub(e, s2), i.normalize(), i.leftPerpendicularThis(), i.scale(this.m_distance), s2.addThis(i), e.addThis(i);
    const n = t2.clone();
    return n.setStartXY(s2), n.setEndXY(e), n;
  }
  offsetEnvelope() {
    const t2 = this.m_inputGeometry;
    if (this.m_distance > 0 && 2 !== this.m_joins) {
      const s3 = new eh();
      return s3.addEnvelope(t2, false), this.m_inputGeometry = s3, this.constructOffset();
    }
    const s2 = t2.clone();
    return s2.inflateCoords(this.m_distance, this.m_distance), s2;
  }
  progress() {
  }
  static buildPoint(t2, s2, e, i) {
    i.x = t2.x + s2 * Math.cos(e), i.y = t2.y + s2 * Math.sin(e), i.type = t2.type, i.z = t2.z, i.m = t2.m, i.m_next = -1, i.m_prev = -1;
  }
  addPoint(t2) {
    this.m_offsetPts.push(t2.clone()), this.m_offsetPtCount++;
  }
  addPointEx(t2, s2) {
    if (0 === this.m_offsetPtCount) return void this.addPoint(t2);
    const e = this.m_srcPtCount, i = this.m_srcPts[0 === s2 ? e - 1 : s2 - 1], n = this.m_srcPts[s2], o = _A.dotSign(i, n, this.m_offsetPts[this.m_offsetPtCount - 1], t2);
    if (o > 0) this.addPoint(t2);
    else if (o < 0) if (_A.dotSign(i, n, n, this.m_offsetPts[this.m_offsetPtCount - 1]) > 0) {
      const n2 = new g();
      let o2;
      o2 = 0 === s2 ? e - 2 : 1 === s2 ? e - 1 : s2 - 2;
      const h = this.m_srcPts[o2], r = Math.atan2(i.y - h.y, i.x - h.x);
      if (_A.buildPoint(i, this.m_distance, r - Yt, n2), this.m_offsetPts[this.m_offsetPtCount - 1] = n2, 1 === this.m_joins || 2 === this.m_joins) {
        n2.x = 0.5 * (n2.x + i.x), n2.y = 0.5 * (n2.y + i.y), this.addPoint(n2), _A.buildPoint(i, this.m_distance, this.m_a1 + Yt, n2);
        const t3 = n2.clone();
        t3.x = 0.5 * (t3.x + i.x), t3.y = 0.5 * (t3.y + i.y), t3.type |= p, this.addPoint(t3), this.addPoint(n2);
      } else _A.buildPoint(i, this.m_distance, this.m_a1 + Yt, n2), n2.type |= p, this.addPoint(n2);
      this.addPointEx(t2, s2);
    } else {
      const t3 = new g();
      if (_A.buildPoint(n, this.m_distance, this.m_a1 + Yt, t3), this.addPoint(t3), 1 === this.m_joins || 2 === this.m_joins) {
        t3.x = 0.5 * (t3.x + n.x), t3.y = 0.5 * (t3.y + n.y), this.addPoint(t3), _A.buildPoint(n, this.m_distance, this.m_a2 - Yt, t3);
        const s3 = t3.clone();
        s3.x = 0.5 * (s3.x + n.x), s3.y = 0.5 * (s3.y + n.y), s3.type |= p, this.addPoint(s3), this.addPoint(t3);
      } else _A.buildPoint(n, this.m_distance, this.m_a2 - Yt, t3), t3.type |= p, this.addPoint(t3);
    }
  }
  buildOffset() {
    const t2 = new g(), s2 = this.m_srcPtCount;
    this.m_offsetPtCount = 0;
    const e = 0.5 * this.m_tolerance;
    let i = 0, n = 0;
    for (let o = 0; o < s2; o++) {
      const h = this.m_srcPts[o], r = 0 === o ? this.m_srcPts[s2 - 1] : this.m_srcPts[o - 1], m = o === s2 - 1 ? this.m_srcPts[0] : this.m_srcPts[o + 1];
      let a2, f2, P2 = 0;
      {
        const t3 = r.x - h.x, s3 = r.y - h.y, e2 = m.x - h.x, _ = m.y - h.y;
        a2 = Math.atan2(s3, t3), f2 = Math.atan2(_, e2), this.m_a1 = a2, this.m_a2 = f2, 0 === o && (i = a2, n = f2), P2 = ei.orientationRobust(h.asPoint2D(), r.asPoint2D(), m.asPoint2D());
      }
      const u = f2;
      if (f2 < a2 && (f2 += Ut), P2 * this.m_distance > 0) if (1 === this.m_joins || 2 === this.m_joins) {
        _A.buildPoint(h, this.m_distance, a2 + Yt, t2), this.addPoint(t2);
        const s3 = 1e-3;
        t2.x = h.x + (t2.x - h.x) * s3, t2.y = h.y + (t2.y - h.y) * s3, this.addPoint(t2), _A.buildPoint(h, this.m_distance, f2 - Yt, t2);
        const e2 = t2.clone();
        e2.x = h.x + (e2.x - h.x) * s3, e2.y = h.y + (e2.y - h.y) * s3, e2.type |= p, this.addPoint(e2), this.addPoint(t2);
      } else {
        const s3 = 0.5 * (f2 - a2), e2 = 0 === s3 ? this.m_distance : this.m_distance / Math.abs(Math.sin(s3));
        _A.buildPoint(h, e2, 0.5 * (a2 + f2), t2), this.addPointEx(t2, o);
      }
      else if (h.type & b) {
        const s3 = 1 - e / Math.abs(this.m_distance);
        let i2 = 1, n2 = this.m_distance < 0 ? -Math.PI : Math.PI;
        if (s3 > -1 && s3 < 1) {
          let t3 = 2 * Math.acos(s3);
          t3 < x && (t3 = x), i2 = Math.trunc(Math.PI / t3 + 1.5), i2 > 1 && (n2 /= i2);
        }
        i2 <= 1 && (i2 = 2, n2 /= 2);
        let r2 = a2 + Yt;
        _A.buildPoint(h, this.m_distance, r2, t2), 0 === o && (t2.type |= M), this.addPointEx(t2, o);
        const m2 = this.m_distance / Math.cos(n2 / 2);
        for (r2 += n2 / 2, _A.buildPoint(h, m2, r2, t2), t2.type |= M, this.addPoint(t2); --i2 > 0; ) r2 += n2, _A.buildPoint(h, m2, r2, t2), t2.type |= M, this.addPoint(t2);
        _A.buildPoint(h, this.m_distance, f2 - Yt, t2), t2.type |= M, this.addPoint(t2);
      } else if (1 !== this.m_joins) if (0 !== this.m_joins) if (2 !== this.m_joins) {
        let s3;
        if (f2 = u, this.m_distance > 0 ? (f2 > a2 && (f2 -= Ut), s3 = a2 - f2 < Yt) : (f2 < a2 && (f2 += Ut), s3 = f2 - a2 < Yt), s3) {
          const s4 = this.m_distance * y;
          let e2;
          e2 = s4 < 0 ? a2 + 0.25 * Math.PI : a2 + 3 * Math.PI * 0.25, _A.buildPoint(h, s4, e2, t2), this.addPointEx(t2, o), e2 = s4 < 0 ? f2 - 0.25 * Math.PI : f2 - 3 * Math.PI * 0.25, _A.buildPoint(h, s4, e2, t2), this.addPoint(t2);
        } else {
          const s4 = 0.5 * (f2 - a2), e2 = this.m_distance / Math.abs(Math.sin(s4));
          f2 < a2 && (f2 += Ut), _A.buildPoint(h, e2, (a2 + f2) / 2, t2), this.addPointEx(t2, o);
        }
      } else {
        const s3 = r.x - h.x, e2 = r.y - h.y, i2 = m.x - h.x, n2 = m.y - h.y, _ = (s3 * i2 + e2 * n2) / Math.sqrt(s3 * s3 + e2 * e2) / Math.sqrt(i2 * i2 + n2 * n2);
        if (_ > 1 - 1e-8) {
          _A.buildPoint(h, y * this.m_distance, f2 - 0.25 * Math.PI, t2), this.addPointEx(t2, o), _A.buildPoint(h, y * this.m_distance, f2 + 0.25 * Math.PI, t2), this.addPoint(t2);
          continue;
        }
        const d = Math.abs(this.m_distance / Math.sin(0.5 * Math.acos(_))), P3 = Math.abs(this.m_miterLimit * this.m_distance);
        if (d > P3) {
          const s4 = 0.5 * (f2 - a2), e3 = this.m_distance / Math.abs(Math.sin(s4));
          _A.buildPoint(h, e3, 0.5 * (a2 + f2), t2);
          const i3 = ei.construct(t2.x, t2.y), n3 = ei.construct(h.x, h.y), r2 = new ei();
          r2.setSub(i3, n3);
          const m2 = new ei();
          m2.setScaleAdd(P3 / r2.length(), r2, n3);
          const _2 = Math.sqrt(d * d - this.m_distance * this.m_distance), u3 = (d - P3) * Math.abs(this.m_distance) / _2;
          this.m_distance > 0 ? r2.leftPerpendicularThis() : r2.rightPerpendicularThis(), r2.scale(u3 / r2.length());
          const l3 = new ei();
          l3.setAdd(m2, r2);
          const y2 = new ei();
          y2.setSub(m2, r2), t2.x = l3.x, t2.y = l3.y, this.addPointEx(t2, o), t2.x = y2.x, t2.y = y2.y, this.addPoint(t2);
          continue;
        }
        const u2 = 0.5 * (f2 - a2), l2 = this.m_distance / Math.abs(Math.sin(u2));
        _A.buildPoint(h, l2, 0.5 * (a2 + f2), t2), this.addPointEx(t2, o);
      }
      else {
        const s3 = 1 - e / Math.abs(this.m_distance);
        let i2 = 1, n2 = f2 - Yt - (a2 + Yt);
        if (s3 > -1 && s3 < 1) {
          let t3 = 2 * Math.acos(s3);
          t3 < x && (t3 = x), i2 = Math.trunc(Math.abs(n2) / t3 + 1.5), i2 > 1 && (n2 /= i2);
        }
        const r2 = this.m_distance / Math.cos(0.5 * n2);
        let m2 = a2 + Yt + 0.5 * n2;
        for (_A.buildPoint(h, r2, m2, t2), this.addPointEx(t2, o); --i2 > 0; ) m2 += n2, _A.buildPoint(h, r2, m2, t2), this.addPoint(t2);
      }
      else _A.buildPoint(h, this.m_distance, a2 + Yt, t2), this.addPointEx(t2, o), _A.buildPoint(h, this.m_distance, f2 - Yt, t2), this.addPoint(t2);
    }
    return this.m_a1 = i, this.m_a2 = n, this.addPointEx(this.m_offsetPts[0], 0), this.m_offsetPts[0] = this.m_offsetPts[this.m_offsetPtCount - 1].clone(), this.removeBadSegsFast();
  }
  removeBadSegsFast() {
    let t2 = false;
    for (let e = 0; e < this.m_offsetPtCount; e++) {
      const t3 = this.m_offsetPts[e];
      t3.m_next = e + 1, t3.m_prev = e - 1;
    }
    this.m_offsetPts[0].m_prev = this.m_offsetPtCount - 2, this.m_offsetPts[this.m_offsetPtCount - 2].m_next = 0;
    let s2 = 0;
    for (let e = 0; e < this.m_offsetPtCount; e++) if (this.m_offsetPts[s2].type & p) {
      const e2 = this.deleteClosedSeg(s2);
      if (-1 === e2) {
        t2 = true;
        break;
      }
      s2 = e2;
    } else s2 = this.m_offsetPts[s2].m_next;
    return !t2 && (this.compressOffsetArray(s2), true);
  }
  deleteClosedSeg(t2) {
    const s2 = this.m_offsetPtCount - 1;
    let e, i, n = t2;
    for (let o = 1; o <= s2 - 2; o++) {
      n = this.m_offsetPts[n].m_next, e = n, i = t2;
      for (let t3 = 1; t3 <= o; t3++) {
        if (i = this.m_offsetPts[i].m_prev, !(this.m_offsetPts[i].type & p || this.m_offsetPts[e].type & p)) {
          const t4 = this.handleClosedIntersection(i, e);
          if (-1 !== t4) return t4;
        }
        e = this.m_offsetPts[e].m_prev;
      }
    }
    return -1;
  }
  handleClosedIntersection(t2, s2) {
    const e = this.m_offsetPts[this.m_offsetPts[t2].m_prev], i = this.m_offsetPts[t2], n = this.m_offsetPts[this.m_offsetPts[s2].m_prev], o = this.m_offsetPts[s2];
    if (!this.sectGraphicRect(e, i, n, o)) return -1;
    const h = C();
    if (((i.x - e.x) * (o.y - n.y) - (i.y - e.y) * (o.x - n.x)) * this.m_distance < 0) {
      if (this.findIntersection(e, i, n, o, h) && !h.bAtExistingPt) {
        const r = 1e-8, m = Math.sqrt((i.x - e.x) * (i.x - e.x) + (i.y - e.y) * (i.y - e.y)), a2 = (i.x - e.x) / m, f2 = (i.y - e.y) / m, _ = Math.sqrt((o.x - n.x) * (o.x - n.x) + (o.y - n.y) * (o.y - n.y)), c = (o.x - n.x) / _, d = (o.y - n.y) / _;
        let P2 = false;
        const u = h.pt.clone();
        u.x += (a2 + c) * r, u.y += (f2 + d) * r;
        let l2 = n, y2 = h.pt, x2 = this.m_offsetPts[t2].m_prev;
        for (; y2.y > u.y != l2.y > u.y && u.x < (l2.x - y2.x) * (u.y - y2.y) / (l2.y - y2.y) + y2.x && (P2 = !P2), l2 = y2, x2 = this.m_offsetPts[x2].m_next, x2 !== s2; ) y2 = this.m_offsetPts[x2];
        if (P2) return -1;
        const p2 = this.m_offsetPts[t2].m_prev;
        return h.pt.type = i.type, h.pt.m_next = s2, h.pt.m_prev = p2, this.m_offsetPts[t2] = h.pt, this.m_offsetPts[s2].m_prev = t2, s2;
      }
    }
    return -1;
  }
  sectGraphicRect(t2, s2, e, i) {
    return Math.max(t2.x, s2.x) >= Math.min(e.x, i.x) && Math.max(e.x, i.x) >= Math.min(t2.x, s2.x) && Math.max(t2.y, s2.y) >= Math.min(e.y, i.y) && Math.max(e.y, i.y) >= Math.min(t2.y, s2.y);
  }
  findIntersection(t2, s2, e, i, n) {
    let o, h, r, m;
    return n.bAtExistingPt = false, o = (s2.y - t2.y) * (i.x - e.x) - (s2.x - t2.x) * (i.y - e.y), h = (e.y - t2.y) * (s2.x - t2.x) - (e.x - t2.x) * (s2.y - t2.y), r = 0 === o ? 2 : h / o, r >= 0 && r <= 1 && (m = r, o = (i.y - e.y) * (s2.x - t2.x) - (i.x - e.x) * (s2.y - t2.y), h = (t2.y - e.y) * (i.x - e.x) - (t2.x - e.x) * (i.y - e.y), r = 0 === o ? 2 : h / o, r >= 0 && r <= 1) && (n.pt.x = t2.x + r * (s2.x - t2.x), n.pt.y = t2.y + r * (s2.y - t2.y), this.m_bUseZ && (n.pt.z = e.z + m * (i.z - e.z)), this.m_bUseM && (n.pt.m = e.m + m * (i.m - e.m)), 0 !== m && 1 !== m || 0 !== r && 1 !== r || (n.bAtExistingPt = true), !((0 === m || 1 === m) && r > 0 && r < 1 || (0 === r || 1 === r) && m > 0 && m < 1));
  }
  compressOffsetArray(t2) {
    for (; this.m_offsetPts[t2].m_prev < t2; ) t2 = this.m_offsetPts[t2].m_prev;
    let s2 = 0, e = t2;
    do {
      const t3 = this.m_offsetPts[e].clone();
      this.m_offsetPts[s2] = t3, e = t3.m_next, s2++;
    } while (e !== t2);
    this.m_offsetPts[s2] = this.m_offsetPts[0].clone(), this.m_offsetPtCount = s2 + 1;
  }
  addPart(t2, s2) {
    if (!(s2 < 2)) for (let e = 0; e < s2; e++) {
      const s3 = this.m_offsetPts[t2 + e];
      if (e ? this.m_bUseZ ? this.m_resultPath.lineTo3DCoords(s3.x, s3.y, s3.z) : this.m_resultPath.lineToCoords(s3.x, s3.y) : this.m_bUseZ ? this.m_resultPath.startPath3DCoords(s3.x, s3.y, s3.z) : this.m_resultPath.startPathCoords(s3.x, s3.y), this.m_bUseM) {
        const t3 = this.m_resultPath.getPointCount() - 1;
        this.m_resultPath.setAttribute(2, t3, 0, s3.m);
      }
    }
  }
  offsetMultiPath(t2) {
    const s2 = sh(this.m_inputGeometry, 0, this.m_tolerance, 0, this.m_progressTracker, 12e3), e = s2.querySegmentIterator();
    e.resetToFirstPath();
    let i = -1;
    for (; e.nextPath(); ) i++, this.offsetPath(s2, i, t2);
  }
  offsetPath(t2, s2, e) {
    let i = t2.getPathStart(s2), n = t2.getPathEnd(s2);
    if (this.m_resultPath = e, t2.isClosedPath(s2)) {
      const s3 = t2.getXY(i);
      for (; n > i && t2.getXY(n - 1).equals(s3); ) n--;
      if (n - i >= 2) {
        this.m_srcPtCount = n - i, this.m_srcPts.length = this.m_srcPtCount;
        for (let s4 = i; s4 < n; s4++) this.progress(), this.m_srcPts[s4 - i] = g.construct(t2.getXY(s4), this.m_bUseZ ? t2.getAttributeAsDbl(1, s4, 0) : 0, this.m_bUseM ? t2.getAttributeAsDbl(2, s4, 0) : 0);
        this.buildOffset() && this.addPart(0, this.m_offsetPtCount - 1);
      }
    } else {
      const s3 = t2.getXY(i);
      for (; i < n - 1 && t2.getXY(i + 1).equals(s3); ) i++;
      const e2 = t2.getXY(n - 1);
      for (; i < n - 1 && t2.getXY(n - 2).equals(e2); ) n--;
      if (n - i >= 2) {
        this.m_srcPtCount = 2 * (n - i) - 2, this.m_srcPts.length = this.m_srcPtCount;
        let e3 = g.construct(s3, this.m_bUseZ ? t2.getAttributeAsDbl(1, i, 0) : 0, this.m_bUseM ? t2.getAttributeAsDbl(2, i, 0) : 0);
        e3.type |= b + M, this.m_srcPts[0] = e3;
        let o = 1, h = this.m_srcPtCount - 1;
        for (let s4 = i + 1; s4 < n - 1; s4++, o++, h--) this.progress(), e3 = g.construct(t2.getXY(s4), this.m_bUseZ ? t2.getAttributeAsDbl(1, s4, 0) : 0, this.m_bUseM ? t2.getAttributeAsDbl(2, s4, 0) : 0), this.m_srcPts[o] = e3.clone(), e3.type |= M, this.m_srcPts[h] = e3.clone();
        if (e3 = g.construct(t2.getXY(n - 1), this.m_bUseZ ? t2.getAttributeAsDbl(1, n - 1, 0) : 0, this.m_bUseM ? t2.getAttributeAsDbl(2, n - 1, 0) : 0), e3.type |= b, this.m_srcPts[o] = e3.clone(), this.buildOffset()) if (this.m_offsetPts.length >= 2) {
          let t3 = -1, s4 = -1, e4 = !!(this.m_offsetPts[this.m_offsetPtCount - 1].type & M);
          e4 || (t3 = 0);
          for (let i2 = 1; i2 < this.m_offsetPtCount; i2++) {
            this.progress();
            const n2 = !!(this.m_offsetPts[i2].type & M);
            n2 ? e4 || (s4 = i2 - 1, s4 - t3 + 1 > 1 && this.addPart(t3, s4 - t3 + 1)) : e4 && (t3 = i2 - 1), e4 = n2;
          }
          e4 || (s4 = this.m_offsetPtCount - 1, s4 - t3 + 1 > 1 && this.addPart(t3, s4 - t3 + 1));
        } else {
          const t3 = 0, s4 = this.m_offsetPtCount - 1;
          s4 - t3 >= 1 && this.addPart(t3, s4 - t3 + 1);
        }
      }
    }
    this.m_srcPts.length = 0, this.m_srcPtCount = 0, this.m_offsetPts.length = 0, this.m_offsetPtCount = 0;
  }
  static dotSign(t2, s2, e, i) {
    const n = s2.x - t2.x, o = s2.y - t2.y, h = i.x - e.x, r = i.y - e.y, m = J(n, o, h, r);
    return X(m);
  }
};
var E = class {
  getOperatorType() {
    return 10108;
  }
  accelerateGeometry(t2, s2, e) {
    return false;
  }
  canAccelerateGeometry(t2) {
    return false;
  }
  supportsCurves() {
    return true;
  }
  executeMany(t2, s2, e, i, n, o, h) {
    return new v(t2, s2, e, i, n, o, h);
  }
  execute(t2, s2, e, i, n, o, h) {
    return new v(null, s2, e, i, n, o, h).offset(t2);
  }
};
var v = class extends t {
  constructor(t2, s2, e, i, n, o, h) {
    super(), this.m_progressTracker = h, this.m_index = -1, this.m_inputGeoms = t2, this.m_spatialReference = s2, this.m_distance = e, this.m_joins = i, this.m_miterLimit = n, this.m_flattenError = o;
  }
  tock() {
    return true;
  }
  getRank() {
    return 1;
  }
  next() {
    if (!this.m_inputGeoms) return null;
    let t2;
    for (; t2 = this.m_inputGeoms.next(); ) return this.m_index = this.m_inputGeoms.getGeometryID(), this.offset(t2);
    return null;
  }
  getGeometryID() {
    return this.m_index;
  }
  offset(t2) {
    let s2;
    return j(t2), s2 = this.m_flattenError <= 0 ? zt(this.m_spatialReference, t2, true).total() : this.m_flattenError, l(t2, this.m_distance, this.m_joins, this.m_miterLimit, s2, this.m_progressTracker);
  }
};
var G = new E();
function w(t2, s2, e, i, n, o) {
  return G.execute(t2, s2, e, i, n, o, null);
}
function j2(t2, e, i, n, o, h) {
  const r = G.executeMany(new s(t2), e, i, n, o, h, null);
  return Array.from(r);
}
function D() {
  return G.supportsCurves();
}

export {
  w,
  j2 as j,
  D
};
//# sourceMappingURL=chunk-XRSAD6QO.js.map
