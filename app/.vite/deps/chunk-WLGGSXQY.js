import {
  h
} from "./chunk-W633AKTD.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j,
  n
} from "./chunk-YUVX6H42.js";
import {
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

// node_modules/@arcgis/core/geometry/Multipoint.js
var h2;
function l(t) {
  return (s, e) => null == s ? e : null == e ? s : t(s, e);
}
function c(t) {
  return t && ("esri.geometry.SpatialReference" === t.declaredClass || null != t.wkid);
}
var m2 = h2 = class extends n {
  constructor(...t) {
    super(...t), this.points = [], this.type = "multipoint";
  }
  normalizeCtorArgs(t, s) {
    var _a;
    if (!t && !s) return {};
    const e = {};
    Array.isArray(t) ? (e.points = t, e.spatialReference = s) : c(t) ? e.spatialReference = t : (t.points && (e.points = t.points), t.spatialReference && (e.spatialReference = t.spatialReference), t.hasZ && (e.hasZ = t.hasZ), t.hasM && (e.hasM = t.hasM));
    const i = (_a = e.points) == null ? void 0 : _a[0];
    return i && (void 0 === e.hasZ && void 0 === e.hasM ? (e.hasZ = i.length > 2, e.hasM = false) : void 0 === e.hasZ ? e.hasZ = i.length > 3 : void 0 === e.hasM && (e.hasM = i.length > 3)), e;
  }
  get cache() {
    return this.commitProperty("points"), this.commitProperty("hasZ"), this.commitProperty("hasM"), this.commitProperty("spatialReference"), {};
  }
  get extent() {
    const t = this.points;
    if (!t.length) return null;
    const s = new w(), e = this.hasZ, i = this.hasM, r3 = e ? 3 : 2, n2 = t[0], a3 = l(Math.min), p = l(Math.max);
    let h3, c2, m3, u2, [f, y] = n2, [d, g] = n2;
    for (let o = 0, l2 = t.length; o < l2; o++) {
      const s2 = t[o], [n3, l3] = s2;
      if (f = a3(f, n3), y = a3(y, l3), d = p(d, n3), g = p(g, l3), e && s2.length > 2) {
        const t2 = s2[2];
        h3 = a3(h3, t2), m3 = p(m3, t2);
      }
      if (i && s2.length > r3) {
        const t2 = s2[r3];
        c2 = a3(c2, t2), u2 = p(u2, t2);
      }
    }
    return s.xmin = f, s.ymin = y, s.xmax = d, s.ymax = g, s.spatialReference = this.spatialReference, e ? (s.zmin = h3, s.zmax = m3) : (s.zmin = void 0, s.zmax = void 0), i ? (s.mmin = c2, s.mmax = u2) : (s.mmin = void 0, s.mmax = void 0), s;
  }
  writePoints(t, e) {
    e.points = a(this.points);
  }
  addPoint(t) {
    return h(this, t), Array.isArray(t) ? this.points.push(t) : this.points.push(t.toArray()), this.notifyChange("points"), this;
  }
  clone() {
    const t = { points: a(this.points), spatialReference: this.spatialReference };
    return this.hasZ && (t.hasZ = true), this.hasM && (t.hasM = true), new h2(t);
  }
  getPoint(t) {
    if (!this._validateInputs(t)) return null;
    const s = this.points[t], e = { x: s[0], y: s[1], spatialReference: this.spatialReference };
    let i = 2;
    return this.hasZ && (e.z = s[2], i = 3), this.hasM && (e.m = s[i]), new j(e);
  }
  removePoint(t) {
    if (!this._validateInputs(t)) return null;
    const s = new j(this.points.splice(t, 1)[0], this.spatialReference);
    return this.notifyChange("points"), s;
  }
  setPoint(t, s) {
    return this._validateInputs(t) ? (h(this, s), Array.isArray(s) || (s = s.toArray()), this.points[t] = s, this.notifyChange("points"), this) : this;
  }
  toJSON(t) {
    return this.write({}, t);
  }
  _validateInputs(t) {
    return null != t && t >= 0 && t < this.points.length;
  }
};
r([m({ readOnly: true })], m2.prototype, "cache", null), r([m()], m2.prototype, "extent", null), r([m({ type: [[Number]], json: { write: { isRequired: true } } })], m2.prototype, "points", void 0), r([r2("points")], m2.prototype, "writePoints", null), m2 = h2 = r([a2("esri.geometry.Multipoint")], m2), m2.prototype.toJSON.isDefaultToJSON = true;
var u = m2;

export {
  u
};
//# sourceMappingURL=chunk-WLGGSXQY.js.map
