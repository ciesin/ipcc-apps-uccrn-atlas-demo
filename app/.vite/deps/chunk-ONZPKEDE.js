import {
  y as y2
} from "./chunk-FF44HCOD.js";
import {
  b
} from "./chunk-5X74MKXM.js";
import {
  l
} from "./chunk-XCRRZPKE.js";
import {
  f,
  y
} from "./chunk-WZBMMIVS.js";
import {
  o as o2
} from "./chunk-5ESATYIQ.js";
import {
  g,
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  o
} from "./chunk-WE4EKKVR.js";
import {
  S
} from "./chunk-5BULKNR2.js";
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

// node_modules/@arcgis/core/rest/support/FeatureSet.js
var f2;
var h = new o({ esriGeometryPoint: "point", esriGeometryMultipoint: "multipoint", esriGeometryPolyline: "polyline", esriGeometryPolygon: "polygon", esriGeometryEnvelope: "extent", mesh: "mesh", "": null });
var g2 = f2 = class extends S {
  constructor(e) {
    super(e), this.displayFieldName = null, this.exceededTransferLimit = false, this.features = [], this.fields = null, this.geometryType = null, this.hasM = false, this.hasZ = false, this.queryGeometry = null, this.spatialReference = null;
  }
  readFeatures(e, r3) {
    return this.readFeaturesWithClass(e, r3, b);
  }
  writeGeometryType(e, t, r3, o3) {
    if (e) return void h.write(e, t, r3, o3);
    const { features: s } = this;
    if (s) {
      for (const n of s) if (null != (n == null ? void 0 : n.geometry)) return void h.write(n.geometry.type, t, r3, o3);
    }
  }
  readQueryGeometry(e, t) {
    if (!e) return null;
    const r3 = !!e.spatialReference, o3 = f(e);
    return o3 && !r3 && t.spatialReference && (o3.spatialReference = g.fromJSON(t.spatialReference)), o3;
  }
  writeSpatialReference(e, t) {
    if (e) return void (t.spatialReference = e.toJSON());
    const { features: r3 } = this;
    if (r3) {
      for (const o3 of r3) if (o3 && null != o3.geometry && o3.geometry.spatialReference) return void (t.spatialReference = o3.geometry.spatialReference.toJSON());
    }
  }
  clone() {
    return new f2(this.cloneProperties());
  }
  cloneProperties() {
    return a({ displayFieldName: this.displayFieldName, exceededTransferLimit: this.exceededTransferLimit, features: this.features, fields: this.fields, geometryType: this.geometryType, hasM: this.hasM, hasZ: this.hasZ, queryGeometry: this.queryGeometry, spatialReference: this.spatialReference, transform: this.transform });
  }
  toJSON(e) {
    const t = this.write();
    if (t.features && Array.isArray(e) && e.length > 0) for (let r3 = 0; r3 < t.features.length; r3++) {
      const o3 = t.features[r3];
      if (o3.geometry) {
        const t2 = e == null ? void 0 : e[r3];
        o3.geometry = (t2 == null ? void 0 : t2.toJSON()) || o3.geometry;
      }
    }
    return t;
  }
  quantize(e) {
    const { scale: [t, r3], translate: [o3, s] } = e, n = (e2) => Math.round((e2 - o3) / t), i = (e2) => Math.round((s - e2) / r3), l2 = this.features, a3 = this._getQuantizationFunction(this.geometryType, n, i);
    for (let p = 0, m2 = l2.length; p < m2; p++) (a3 == null ? void 0 : a3(l2[p].geometry)) || (l2.splice(p, 1), p--, m2--);
    return this.transform = e, this;
  }
  unquantize() {
    var _a, _b;
    const { geometryType: e, features: t, transform: r3 } = this;
    if (!r3) return this;
    const { translate: [o3, s], scale: [n, i] } = r3, l2 = (e2) => e2 * n + o3, a3 = (e2) => s - e2 * i;
    let p = null, m2 = null;
    if (this.hasZ && null != ((_a = r3 == null ? void 0 : r3.scale) == null ? void 0 : _a[2])) {
      const { translate: [, , e2], scale: [, , t2] } = r3;
      p = (r4) => r4 * t2 + e2;
    }
    if (this.hasM && null != ((_b = r3 == null ? void 0 : r3.scale) == null ? void 0 : _b[3])) {
      const { translate: [, , , e2], scale: [, , , t2] } = r3;
      m2 = (r4) => null == r4 ? r4 : r4 * t2 + e2;
    }
    const u = this._getHydrationFunction(e, l2, a3, p, m2);
    for (const { geometry: c } of t) null != c && u && u(c);
    return this.transform = null, this;
  }
  readFeaturesWithClass(e, t, r3) {
    var _a;
    const o3 = g.fromJSON(t.spatialReference), s = [];
    for (let n = 0; n < e.length; n++) {
      const t2 = e[n], i = r3.fromJSON(t2), l2 = (_a = t2.geometry) == null ? void 0 : _a.spatialReference;
      null == i.geometry || l2 || (i.geometry.spatialReference = o3);
      const a3 = t2.aggregateGeometries, p = i.aggregateGeometries;
      if (a3 && null != p) for (const e2 in p) {
        const t3 = p[e2], r4 = a3[e2], s2 = r4 == null ? void 0 : r4.spatialReference;
        null == t3 || s2 || (t3.spatialReference = o3);
      }
      s.push(i);
    }
    return s;
  }
  _quantizePoints(e, t, r3) {
    let o3, s;
    const n = [];
    for (let i = 0, l2 = e.length; i < l2; i++) {
      const l3 = e[i];
      if (i > 0) {
        const e2 = t(l3[0]), i2 = r3(l3[1]);
        e2 === o3 && i2 === s || (n.push([e2 - o3, i2 - s]), o3 = e2, s = i2);
      } else o3 = t(l3[0]), s = r3(l3[1]), n.push([o3, s]);
    }
    return n.length > 0 ? n : null;
  }
  _getQuantizationFunction(e, t, r3) {
    return "point" === e ? (e2) => (e2.x = t(e2.x), e2.y = r3(e2.y), e2) : "polyline" === e || "polygon" === e ? (e2) => {
      const o3 = y(e2) ? e2.rings : e2.paths, s = [];
      for (let n = 0, i = o3.length; n < i; n++) {
        const e3 = o3[n], i2 = this._quantizePoints(e3, t, r3);
        i2 && s.push(i2);
      }
      return s.length > 0 ? (y(e2) ? e2.rings = s : e2.paths = s, e2) : null;
    } : "multipoint" === e ? (e2) => {
      const o3 = this._quantizePoints(e2.points, t, r3);
      return o3 && o3.length > 0 ? (e2.points = o3, e2) : null;
    } : "extent" === e ? (e2) => e2 : null;
  }
  _getHydrationFunction(e, t, r3, o3, s) {
    return "point" === e ? (e2) => {
      e2.x = t(e2.x), e2.y = r3(e2.y), o3 && (e2.z = o3(e2.z));
    } : "polyline" === e || "polygon" === e ? (e2) => {
      const n = y(e2) ? e2.rings : e2.paths;
      let i, l2;
      for (let o4 = 0, s2 = n.length; o4 < s2; o4++) {
        const e3 = n[o4];
        for (let o5 = 0, s3 = e3.length; o5 < s3; o5++) {
          const s4 = e3[o5];
          o5 > 0 ? (i += s4[0], l2 += s4[1]) : (i = s4[0], l2 = s4[1]), s4[0] = t(i), s4[1] = r3(l2);
        }
      }
      if (o3 && s) for (let t2 = 0, r4 = n.length; t2 < r4; t2++) {
        const e3 = n[t2];
        for (let t3 = 0, r5 = e3.length; t3 < r5; t3++) {
          const r6 = e3[t3];
          r6[2] = o3(r6[2]), r6[3] = s(r6[3]);
        }
      }
      else if (o3) for (let t2 = 0, r4 = n.length; t2 < r4; t2++) {
        const e3 = n[t2];
        for (let t3 = 0, r5 = e3.length; t3 < r5; t3++) {
          const r6 = e3[t3];
          r6[2] = o3(r6[2]);
        }
      }
      else if (s) for (let t2 = 0, r4 = n.length; t2 < r4; t2++) {
        const e3 = n[t2];
        for (let t3 = 0, r5 = e3.length; t3 < r5; t3++) {
          const r6 = e3[t3];
          r6[2] = s(r6[2]);
        }
      }
    } : "extent" === e ? (e2) => {
      e2.xmin = t(e2.xmin), e2.ymin = r3(e2.ymin), e2.xmax = t(e2.xmax), e2.ymax = r3(e2.ymax), o3 && null != e2.zmax && null != e2.zmin && (e2.zmax = o3(e2.zmax), e2.zmin = o3(e2.zmin)), s && null != e2.mmax && null != e2.mmin && (e2.mmax = s(e2.mmax), e2.mmin = s(e2.mmin));
    } : "multipoint" === e ? (e2) => {
      const n = e2.points;
      let i, l2;
      for (let o4 = 0, s2 = n.length; o4 < s2; o4++) {
        const e3 = n[o4];
        o4 > 0 ? (i += e3[0], l2 += e3[1]) : (i = e3[0], l2 = e3[1]), e3[0] = t(i), e3[1] = r3(l2);
      }
      if (o3 && s) for (let t2 = 0, r4 = n.length; t2 < r4; t2++) {
        const e3 = n[t2];
        e3[2] = o3(e3[2]), e3[3] = s(e3[3]);
      }
      else if (o3) for (let t2 = 0, r4 = n.length; t2 < r4; t2++) {
        const e3 = n[t2];
        e3[2] = o3(e3[2]);
      }
      else if (s) for (let t2 = 0, r4 = n.length; t2 < r4; t2++) {
        const e3 = n[t2];
        e3[2] = s(e3[2]);
      }
    } : null;
  }
};
r([m({ type: String, json: { write: true } })], g2.prototype, "displayFieldName", void 0), r([m({ type: Boolean, json: { write: { overridePolicy: (e) => ({ enabled: e }) } } })], g2.prototype, "exceededTransferLimit", void 0), r([m({ type: [b], json: { write: true } })], g2.prototype, "features", void 0), r([o2("features")], g2.prototype, "readFeatures", null), r([m({ type: [y2], json: { write: true } })], g2.prototype, "fields", void 0), r([m({ type: ["point", "multipoint", "polyline", "polygon", "extent", "mesh"], json: { read: { reader: h.read } } })], g2.prototype, "geometryType", void 0), r([r2("geometryType")], g2.prototype, "writeGeometryType", null), r([m({ type: Boolean, json: { write: { overridePolicy: (e) => ({ enabled: e }) } } })], g2.prototype, "hasM", void 0), r([m({ type: Boolean, json: { write: { overridePolicy: (e) => ({ enabled: e }) } } })], g2.prototype, "hasZ", void 0), r([m({ types: l, json: { write: true } })], g2.prototype, "queryGeometry", void 0), r([o2("queryGeometry")], g2.prototype, "readQueryGeometry", null), r([m({ type: g, json: { write: true } })], g2.prototype, "spatialReference", void 0), r([r2("spatialReference")], g2.prototype, "writeSpatialReference", null), r([m({ json: { write: true } })], g2.prototype, "transform", void 0), g2 = f2 = r([a2("esri.rest.support.FeatureSet")], g2), g2.prototype.toJSON.isDefaultToJSON = true;
var d = g2;

export {
  d
};
//# sourceMappingURL=chunk-ONZPKEDE.js.map
