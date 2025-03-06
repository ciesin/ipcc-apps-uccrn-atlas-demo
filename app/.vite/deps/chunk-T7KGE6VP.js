import {
  a as a3,
  c,
  i
} from "./chunk-T57WVICI.js";
import {
  h,
  v
} from "./chunk-W633AKTD.js";
import {
  f,
  p,
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j,
  n,
  y
} from "./chunk-YUVX6H42.js";
import {
  g,
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a
} from "./chunk-CWMZW2S5.js";
import {
  s
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/geometry/geometryCursorCollectUtils.js
function t(t2) {
  const n3 = [];
  for (t2.reset(); t2.nextPath(); ) {
    const e = [];
    for (; t2.nextPoint(); ) e.push([t2.x, t2.y]);
    n3.push(e);
  }
  return t2.reset(), n3;
}
function n2(t2) {
  const n3 = [];
  for (; t2.nextPoint(); ) n3.push([t2.x, t2.y]);
  return t2.seekPathStart(), n3;
}

// node_modules/@arcgis/core/geometry/support/centroid.js
function r3(t2) {
  return t2 ? t2.hasZ ? [t2.xmax - t2.xmin / 2, t2.ymax - t2.ymin / 2, t2.zmax - t2.zmin / 2] : [t2.xmax - t2.xmin / 2, t2.ymax - t2.ymin / 2] : null;
}
function l(t2) {
  return t2 ? o(t2.rings, t2.hasZ ?? false) : null;
}
function o(t2, n3) {
  if (!(t2 == null ? void 0 : t2.length)) return null;
  const e = [], r4 = [], l2 = n3 ? [1 / 0, -1 / 0, 1 / 0, -1 / 0, 1 / 0, -1 / 0] : [1 / 0, -1 / 0, 1 / 0, -1 / 0];
  for (let o2 = 0, i3 = t2.length; o2 < i3; o2++) {
    const e2 = u(t2[o2], n3, l2);
    e2 && r4.push(e2);
  }
  if (r4.sort((t3, e2) => {
    let r5 = t3[2] - e2[2];
    return 0 === r5 && n3 && (r5 = t3[4] - e2[4]), r5;
  }), r4.length && (e[0] = r4[0][0], e[1] = r4[0][1], n3 && (e[2] = r4[0][3]), (e[0] < l2[0] || e[0] > l2[1] || e[1] < l2[2] || e[1] > l2[3] || n3 && (e[2] < l2[4] || e[2] > l2[5])) && (e.length = 0)), !e.length) {
    const r5 = t2[0] && t2[0].length ? s2(t2[0], n3) : null;
    if (!r5) return null;
    e[0] = r5[0], e[1] = r5[1], n3 && r5.length > 2 && (e[2] = r5[2]);
  }
  return e;
}
function u(t2, n3, e) {
  let r4 = 0, l2 = 0, o2 = 0, u2 = 0, i3 = 0;
  const s3 = t2.length ? t2[0][0] : 0, I2 = t2.length ? t2[0][1] : 0, h3 = t2.length && n3 ? t2[0][2] : 0;
  for (let f3 = 0; f3 < t2.length; f3++) {
    const c4 = t2[f3], N2 = t2[(f3 + 1) % t2.length], [x3, g2, a4] = c4, m2 = x3 - s3, P = g2 - I2, [T, y2, E] = N2, S = T - s3, p2 = y2 - I2, z = m2 * p2 - S * P;
    if (u2 += z, r4 += (m2 + S) * z, l2 += (P + p2) * z, n3 && c4.length > 2 && N2.length > 2) {
      const t3 = a4 - h3, n4 = E - h3, e2 = m2 * n4 - S * t3;
      o2 += (t3 + n4) * e2, i3 += e2;
    }
    x3 < e[0] && (e[0] = x3), x3 > e[1] && (e[1] = x3), g2 < e[2] && (e[2] = g2), g2 > e[3] && (e[3] = g2), n3 && (a4 < e[4] && (e[4] = a4), a4 > e[5] && (e[5] = a4));
  }
  if (u2 > 0 && (u2 *= -1), i3 > 0 && (i3 *= -1), !u2) return null;
  u2 *= 0.5, i3 *= 0.5;
  const c3 = [r4 / (6 * u2) + s3, l2 / (6 * u2) + I2, u2];
  return n3 && (e[4] === e[5] || 0 === i3 ? (c3[3] = (e[4] + e[5]) / 2, c3[4] = 0) : (c3[3] = o2 / (6 * i3) + h3, c3[4] = i3)), c3;
}
function i2(t2, n3) {
  let e = 0, r4 = 0, l2 = 0;
  t2.nextPoint();
  const o2 = t2.pathSize ? t2.x : 0, u2 = t2.pathSize ? t2.y : 0;
  for (let i3 = 0; i3 < t2.pathSize; i3++) {
    t2.seekInPath(i3);
    const s3 = [t2.x, t2.y];
    t2.seekInPath((i3 + 1) % t2.pathSize);
    const I2 = [t2.x, t2.y], [h3, c3] = s3, f3 = h3 - o2, N2 = c3 - u2, [x3, g2] = I2, a4 = x3 - o2, m2 = g2 - u2, P = f3 * m2 - a4 * N2;
    l2 += P, e += (f3 + a4) * P, r4 += (N2 + m2) * P, h3 < n3[0] && (n3[0] = h3), h3 > n3[1] && (n3[1] = h3), c3 < n3[2] && (n3[2] = c3), c3 > n3[3] && (n3[3] = c3);
  }
  if (l2 > 0 && (l2 *= -1), !l2) return null;
  l2 *= 0.5;
  return [e / (6 * l2) + o2, r4 / (6 * l2) + u2, l2];
}
function s2(t2, r4) {
  const l2 = r4 ? [0, 0, 0] : [0, 0], o2 = r4 ? [0, 0, 0] : [0, 0];
  let u2 = 0, i3 = 0, s3 = 0, I2 = 0;
  for (let h3 = 0, c3 = t2.length; h3 < c3 - 1; h3++) {
    const c4 = t2[h3], f3 = t2[h3 + 1];
    if (c4 && f3) {
      l2[0] = c4[0], l2[1] = c4[1], o2[0] = f3[0], o2[1] = f3[1], r4 && c4.length > 2 && f3.length > 2 && (l2[2] = c4[2], o2[2] = f3[2]);
      const t3 = i(l2, o2);
      if (t3) {
        u2 += t3;
        const n3 = c(c4, f3);
        i3 += t3 * n3[0], s3 += t3 * n3[1], r4 && n3.length > 2 && (I2 += t3 * n3[2]);
      }
    }
  }
  return u2 > 0 ? r4 ? [i3 / u2, s3 / u2, I2 / u2] : [i3 / u2, s3 / u2] : t2.length ? t2[0] : null;
}
function I(n3) {
  const { hasZ: e, totalSize: r4 } = n3;
  if (0 === r4) return null;
  const l2 = [], o2 = [], i3 = e ? [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY] : [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY];
  for (n3.reset(); n3.nextPath(); ) {
    const e2 = u(n2(n3), n3.hasZ, i3);
    e2 && o2.push(e2);
  }
  if (o2.sort((t2, n4) => {
    let r5 = t2[2] - n4[2];
    return 0 === r5 && e && (r5 = t2[4] - n4[4]), r5;
  }), o2.length && (l2[0] = o2[0][0], l2[1] = o2[0][1], e && (l2[2] = o2[0][3]), (l2[0] < i3[0] || l2[0] > i3[1] || l2[1] < i3[2] || l2[1] > i3[3] || e && (l2[2] < i3[4] || l2[2] > i3[5])) && (l2.length = 0)), !l2.length) {
    n3.reset(), n3.nextPath();
    const t2 = n3.pathSize ? h2(n3) : null;
    if (!t2) return null;
    l2[0] = t2[0], l2[1] = t2[1], e && t2.length > 2 && (l2[2] = t2[2]);
  }
  return l2;
}
function h2(t2) {
  const { hasZ: r4 } = t2, l2 = r4 ? [0, 0, 0] : [0, 0], o2 = r4 ? [0, 0, 0] : [0, 0];
  let u2 = 0, i3 = 0, s3 = 0, I2 = 0;
  if (t2.nextPoint()) {
    let h3 = t2.x, c3 = t2.y, f3 = t2.z;
    for (; t2.nextPoint(); ) {
      const N2 = t2.x, x3 = t2.y, g2 = t2.z;
      l2[0] = h3, l2[1] = c3, o2[0] = N2, o2[1] = x3, r4 && (l2[2] = f3, o2[2] = g2);
      const a4 = i(l2, o2);
      if (a4) {
        u2 += a4;
        const t3 = c(l2, o2);
        i3 += a4 * t3[0], s3 += a4 * t3[1], r4 && t3.length > 2 && (I2 += a4 * t3[2]);
      }
      h3 = N2, c3 = x3, f3 = g2;
    }
  }
  return u2 > 0 ? r4 ? [i3 / u2, s3 / u2, I2 / u2] : [i3 / u2, s3 / u2] : t2.pathSize ? (t2.seekPathStart(), t2.nextPoint(), [t2.x, t2.y]) : null;
}
var c2 = 1e-6;
function f2(t2) {
  let n3 = 0;
  for (t2.reset(); t2.nextPath(); ) n3 += t2.getCurrentRingArea();
  if (n3 < c2) {
    const n4 = I(t2);
    return n4 ? [n4[0], n4[1]] : null;
  }
  const e = [0, 0];
  if (t2.reset(), !t2.nextPath() || !t2.nextPoint()) return null;
  const r4 = [t2.x, t2.y];
  for (t2.reset(); t2.nextPath(); ) x(e, r4, t2);
  return e[0] *= 1 / n3, e[1] *= 1 / n3, e[0] += r4[0], e[1] += r4[1], e;
}
var N = 1 / 3;
function x(t2, n3, e) {
  if (!e || e.pathSize < 3) return null;
  e.nextPoint();
  const r4 = e.x, l2 = e.y;
  e.nextPoint();
  let o2, u2 = e.x - r4, i3 = e.y - l2, s3 = 0, I2 = 0;
  for (; e.nextPoint(); ) s3 = e.x - r4, I2 = e.y - l2, o2 = 0.5 * N * (s3 * i3 - I2 * u2), t2[0] += o2 * (u2 + s3), t2[1] += o2 * (i3 + I2), u2 = s3, i3 = I2;
  const h3 = e.getCurrentRingArea(), c3 = [r4, l2];
  return c3[0] -= n3[0], c3[1] -= n3[1], c3[0] *= h3, c3[1] *= h3, t2[0] += c3[0], t2[1] += c3[1], t2;
}

// node_modules/@arcgis/core/geometry/Polygon.js
var R;
function d(t2) {
  return !Array.isArray(t2[0]);
}
function w2(t2) {
  var _a;
  return "number" == typeof ((_a = t2[0]) == null ? void 0 : _a[0]);
}
function v2(t2) {
  var _a, _b;
  if (!t2) return;
  let { rings: e, hasM: r4, hasZ: s3, spatialReference: i3 } = t2;
  switch (e ?? (e = []), w2(e) && (e = [e]), (_b = (_a = e[0]) == null ? void 0 : _a[0]) == null ? void 0 : _b.length) {
    case 4:
      s3 ?? (s3 = true), r4 ?? (r4 = true);
      break;
    case 3:
      s3 ?? (s3 = true !== r4), r4 ?? (r4 = !s3);
      break;
    default:
      s3 ?? (s3 = false), r4 ?? (r4 = false);
  }
  return i3 ?? (i3 = g.WGS84), { ...t2, hasM: r4, hasZ: s3, rings: e, spatialReference: i3 };
}
var x2 = R = class extends n {
  static fromExtent(t2) {
    const e = t2.clone().normalize(), { spatialReference: r4 } = t2;
    let s3 = false, i3 = false;
    for (const o2 of e) o2.hasZ && (s3 = true), o2.hasM && (i3 = true);
    const n3 = { rings: e.map((t3) => {
      const e2 = [[t3.xmin, t3.ymin], [t3.xmin, t3.ymax], [t3.xmax, t3.ymax], [t3.xmax, t3.ymin], [t3.xmin, t3.ymin]];
      if (s3 && t3.hasZ) {
        const r5 = t3.zmin + 0.5 * (t3.zmax - t3.zmin);
        for (let t4 = 0; t4 < e2.length; t4++) e2[t4].push(r5);
      }
      if (i3 && t3.hasM) {
        const r5 = t3.mmin + 0.5 * (t3.mmax - t3.mmin);
        for (let t4 = 0; t4 < e2.length; t4++) e2[t4].push(r5);
      }
      return e2;
    }), spatialReference: r4 };
    return s3 && (n3.hasZ = true), i3 && (n3.hasM = true), new R(n3);
  }
  constructor(t2) {
    super(v2(t2)), this.curveRings = void 0, this.rings = [], this.type = "polygon";
  }
  get cache() {
    return this.commitProperty("curveRings"), this.commitProperty("hasM"), this.commitProperty("hasZ"), this.commitProperty("rings"), this.commitProperty("spatialReference"), {};
  }
  get centroid() {
    const t2 = l(this);
    if (!t2 || isNaN(t2[0]) || isNaN(t2[1]) || this.hasZ && isNaN(t2[2])) return null;
    const e = new j();
    return e.x = t2[0], e.y = t2[1], e.spatialReference = this.spatialReference, this.hasZ && (e.z = t2[2]), e;
  }
  writeCurveRings(t2, e) {
    e.curveRings = a(t2);
  }
  get extent() {
    const t2 = v(this), { spatialReference: e } = this;
    return t2 ? new w({ ...t2, spatialReference: e }) : null;
  }
  get isSelfIntersecting() {
    return p(this.rings);
  }
  writeRings(t2, e) {
    e.rings = a(this.rings);
  }
  addRing(t2) {
    if (!t2) return;
    const e = this.rings, r4 = e.length;
    if (d(t2)) {
      const s3 = [];
      for (let e2 = 0, r5 = t2.length; e2 < r5; e2++) s3[e2] = t2[e2].toArray();
      e[r4] = s3;
    } else e[r4] = t2.slice();
    return this.notifyChange("rings"), this;
  }
  clone() {
    const t2 = new R();
    return t2.spatialReference = this.spatialReference, t2.rings = a(this.rings), t2.curveRings = a(this.curveRings), t2.hasZ = this.hasZ, t2.hasM = this.hasM, t2;
  }
  equals(t2) {
    if (this === t2) return true;
    if (null == t2) return false;
    const r4 = this.spatialReference, s3 = t2.spatialReference;
    if (null != r4 != (null != s3)) return false;
    if (null != r4 && null != s3 && !r4.equals(s3)) return false;
    if (this.rings.length !== t2.rings.length) return false;
    const i3 = ([t3, e, r5, s4], [i4, n3, o2, a4]) => t3 === i4 && e === n3 && (null == r5 && null == o2 || r5 === o2) && (null == s4 && null == a4 || s4 === a4);
    for (let n3 = 0; n3 < this.rings.length; n3++) {
      const r5 = this.rings[n3], s4 = t2.rings[n3];
      if (!s(r5, s4, i3)) return false;
    }
    return true;
  }
  contains(t2) {
    if (!t2) return false;
    const e = y(t2, this.spatialReference);
    return f(this, null != e ? e : t2);
  }
  isClockwise(t2) {
    const e = d(t2) ? t2.map((t3) => this.hasZ ? this.hasM ? [t3.x, t3.y, t3.z, t3.m] : [t3.x, t3.y, t3.z] : [t3.x, t3.y]) : t2;
    return a3(e);
  }
  getPoint(t2, e) {
    if (!this._validateInputs(t2, e)) return null;
    const r4 = this.rings[t2][e], s3 = this.hasZ, i3 = this.hasM;
    return s3 && !i3 ? new j(r4[0], r4[1], r4[2], void 0, this.spatialReference) : i3 && !s3 ? new j(r4[0], r4[1], void 0, r4[2], this.spatialReference) : s3 && i3 ? new j(r4[0], r4[1], r4[2], r4[3], this.spatialReference) : new j(r4[0], r4[1], this.spatialReference);
  }
  insertPoint(t2, e, r4) {
    return this._validateInputs(t2, e, true) ? (h(this, r4), Array.isArray(r4) || (r4 = r4.toArray()), this.rings[t2].splice(e, 0, r4), this.notifyChange("rings"), this) : this;
  }
  removePoint(t2, e) {
    if (!this._validateInputs(t2, e)) return null;
    const r4 = new j(this.rings[t2].splice(e, 1)[0], this.spatialReference);
    return this.notifyChange("rings"), r4;
  }
  removeRing(t2) {
    if (!this._validateInputs(t2, null)) return null;
    const e = this.rings.splice(t2, 1)[0], r4 = this.spatialReference, s3 = e.map((t3) => new j(t3, r4));
    return this.notifyChange("rings"), s3;
  }
  setPoint(t2, e, r4) {
    return this._validateInputs(t2, e) ? (h(this, r4), Array.isArray(r4) || (r4 = r4.toArray()), this.rings[t2][e] = r4, this.notifyChange("rings"), this) : this;
  }
  _validateInputs(t2, e, r4 = false) {
    if (null == t2 || t2 < 0 || t2 >= this.rings.length) return false;
    if (null != e) {
      const s3 = this.rings[t2];
      if (r4 && (e < 0 || e > s3.length)) return false;
      if (!r4 && (e < 0 || e >= s3.length)) return false;
    }
    return true;
  }
  toJSON(t2) {
    return this.write({}, t2);
  }
};
r([m({ readOnly: true })], x2.prototype, "cache", null), r([m({ readOnly: true })], x2.prototype, "centroid", null), r([m({ json: { write: true, origins: { "portal-item": { write: false }, "web-map": { write: false }, "web-scene": { write: false } } } })], x2.prototype, "curveRings", void 0), r([r2("curveRings")], x2.prototype, "writeCurveRings", null), r([m({ readOnly: true })], x2.prototype, "extent", null), r([m({ readOnly: true })], x2.prototype, "isSelfIntersecting", null), r([m({ type: [[[Number]]], json: { write: { isRequired: true } } })], x2.prototype, "rings", void 0), r([r2("rings")], x2.prototype, "writeRings", null), x2 = R = r([a2("esri.geometry.Polygon")], x2);
var j2 = x2;
x2.prototype.toJSON.isDefaultToJSON = true;

export {
  t,
  n2 as n,
  r3 as r,
  l,
  o,
  i2 as i,
  f2 as f,
  j2 as j
};
//# sourceMappingURL=chunk-T7KGE6VP.js.map
