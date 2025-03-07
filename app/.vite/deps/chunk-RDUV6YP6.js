import {
  C,
  O2 as O,
  P2 as P,
  Q,
  U,
  g as g2,
  h,
  m as m2,
  s2 as s,
  se
} from "./chunk-LTDNORB5.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  g,
  j,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2,
  x
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
function r2(r3, o, e) {
  let i, n;
  return void 0 === o ? (n = r3, i = [void 0]) : "string" != typeof o ? (n = r3, i = [void 0], e = o) : (n = o, i = Array.isArray(r3) ? r3 : [r3]), (r4, o2) => {
    const p = r4.constructor.prototype;
    for (const c of i) {
      const i2 = j(r4, c, n);
      i2.write && "object" == typeof i2.write || (i2.write = {}), e && (i2.write.target = e), i2.write.writer = p[o2];
    }
  };
}

// node_modules/@arcgis/core/geometry/SpatialReference.js
var S2;
var f = S2 = class extends S {
  static fromJSON(e) {
    if (!e) return null;
    if (102100 === (e == null ? void 0 : e.wkid)) return S2.WebMercator;
    if (4326 === (e == null ? void 0 : e.wkid)) return S2.WGS84;
    const t = new S2();
    return t.read(e), t;
  }
  constructor(e) {
    super(e), this.latestWkid = null, this.wkid = null, this.wkt = null, this.wkt2 = null, this.vcsWkid = null, this.latestVcsWkid = null, this.imageCoordinateSystem = null;
  }
  normalizeCtorArgs(e) {
    if (e && "object" == typeof e) return e;
    const t = "string" == typeof e ? "wkt" : "wkid";
    return { [t]: e };
  }
  get isWGS84() {
    return C(this);
  }
  get isWebMercator() {
    return O(this);
  }
  get isGeographic() {
    return P(this);
  }
  get isWrappable() {
    return g2(this);
  }
  get metersPerUnit() {
    return Q(this);
  }
  get unit() {
    return se(this) || (this.isGeographic ? "degrees" : null);
  }
  writeWkt(e, t) {
    this.wkid || (t.wkt = e);
  }
  clone() {
    if (this === S2.WGS84) return new S2(U);
    if (this === S2.WebMercator) return new S2(h);
    const e = new S2();
    return null != this.wkid ? (e.wkid = this.wkid, null != this.latestWkid && (e.latestWkid = this.latestWkid), null != this.vcsWkid && (e.vcsWkid = this.vcsWkid), null != this.latestVcsWkid && (e.latestVcsWkid = this.latestVcsWkid)) : (null != this.wkt && (e.wkt = this.wkt), null != this.wkt2 && (e.wkt2 = this.wkt2)), this.imageCoordinateSystem && (e.imageCoordinateSystem = a(this.imageCoordinateSystem)), e;
  }
  equals(e) {
    if (null == e) return false;
    if (this.imageCoordinateSystem || e.imageCoordinateSystem) {
      if (null == this.imageCoordinateSystem || null == e.imageCoordinateSystem) return false;
      const { id: t, referenceServiceName: r3 } = e.imageCoordinateSystem, { geodataXform: i } = e.imageCoordinateSystem, o = this.imageCoordinateSystem;
      return null == t || i ? JSON.stringify(o) === JSON.stringify(e.imageCoordinateSystem) : r3 ? o.id === t && o.referenceServiceName === r3 : o.id === t;
    }
    return s(this, e);
  }
  toJSON(e) {
    return this.write(void 0, e);
  }
};
f.GCS_NAD_1927 = null, f.WGS84 = null, f.WebMercator = null, f.PlateCarree = null, r([m({ readOnly: true })], f.prototype, "isWGS84", null), r([m({ readOnly: true })], f.prototype, "isWebMercator", null), r([m({ readOnly: true })], f.prototype, "isGeographic", null), r([m({ readOnly: true })], f.prototype, "isWrappable", null), r([m({ type: x, json: { write: true } })], f.prototype, "latestWkid", void 0), r([m({ readOnly: true })], f.prototype, "metersPerUnit", null), r([m({ readOnly: true })], f.prototype, "unit", null), r([m({ type: x, json: { write: true, origins: { "web-scene": { write: { overridePolicy() {
  return { isRequired: null == this.wkt };
} } } } } })], f.prototype, "wkid", void 0), r([m({ type: String, json: { origins: { "web-scene": { write: { overridePolicy() {
  return { isRequired: null == this.wkid };
} } } } } })], f.prototype, "wkt", void 0), r([r2("wkt"), r2("web-scene", "wkt")], f.prototype, "writeWkt", null), r([m({ type: String, json: { write: false } })], f.prototype, "wkt2", void 0), r([m({ type: x, json: { write: true } })], f.prototype, "vcsWkid", void 0), r([m({ type: x, json: { write: true } })], f.prototype, "latestVcsWkid", void 0), r([m()], f.prototype, "imageCoordinateSystem", void 0), f = S2 = r([a2("esri.geometry.SpatialReference")], f), f.prototype.toJSON.isDefaultToJSON = true, f.GCS_NAD_1927 = g.freeze(new f({ wkid: 4267, wkt: 'GEOGCS["GCS_North_American_1927",DATUM["D_North_American_1927",SPHEROID["Clarke_1866",6378206.4,294.9786982]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]' })), f.WGS84 = g.freeze(new f(U)), f.WebMercator = g.freeze(new f(h)), f.PlateCarree = g.freeze(new f(m2));
var g3 = f;

export {
  r2 as r,
  g3 as g
};
//# sourceMappingURL=chunk-RDUV6YP6.js.map
