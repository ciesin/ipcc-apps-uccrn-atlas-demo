import {
  o as o2
} from "./chunk-A4ZIOFBT.js";
import {
  p as p2,
  z
} from "./chunk-SUSOH323.js";
import {
  j as j2
} from "./chunk-7FOAM45I.js";
import {
  f as f2
} from "./chunk-FBQYHS7L.js";
import {
  p
} from "./chunk-LGG5FPVD.js";
import {
  t
} from "./chunk-DWXK7D3B.js";
import {
  b
} from "./chunk-EW3YCVZI.js";
import {
  S as S2
} from "./chunk-JLW377TH.js";
import {
  f
} from "./chunk-NTUX5M6N.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  g,
  r as r3
} from "./chunk-RDUV6YP6.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  Ct,
  K,
  pt,
  x
} from "./chunk-F7TCEOHX.js";
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
  a,
  r as r2,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/support/WMTSLayerInfo.js
var i;
var p3 = i = class extends S {
  constructor(r4) {
    super(r4);
  }
  clone() {
    return new i({ customLayerParameters: a(this.customLayerParameters), customParameters: a(this.customParameters), layerIdentifier: this.layerIdentifier, tileMatrixSet: this.tileMatrixSet, url: this.url });
  }
};
r([m({ json: { type: Object, write: true } })], p3.prototype, "customLayerParameters", void 0), r([m({ json: { type: Object, write: true } })], p3.prototype, "customParameters", void 0), r([m({ type: String, json: { write: true } })], p3.prototype, "layerIdentifier", void 0), r([m({ type: String, json: { write: true } })], p3.prototype, "tileMatrixSet", void 0), r([m({ type: String, json: { write: true } })], p3.prototype, "url", void 0), p3 = i = r([a2("esri.layers.support.WMTSLayerInfo")], p3);

// node_modules/@arcgis/core/layers/WebTileLayer.js
var L;
var U = L = class extends p(f2(t(b(j2(S2(f)))))) {
  constructor(...e) {
    super(...e), this.copyright = "", this.fullExtent = new w(-20037508342787e-6, -2003750834278e-5, 2003750834278e-5, 20037508342787e-6, g.WebMercator), this.legendEnabled = false, this.isReference = null, this.popupEnabled = false, this.spatialReference = g.WebMercator, this.subDomains = null, this.tileInfo = new z({ size: [256, 256], dpi: 96, format: "png8", compressionQuality: 0, origin: new j({ x: -20037508342787e-6, y: 20037508342787e-6, spatialReference: g.WebMercator }), spatialReference: g.WebMercator, lods: [new p2({ level: 0, scale: 591657527591555e-6, resolution: 156543.033928 }), new p2({ level: 1, scale: 295828763795777e-6, resolution: 78271.5169639999 }), new p2({ level: 2, scale: 147914381897889e-6, resolution: 39135.7584820001 }), new p2({ level: 3, scale: 73957190948944e-6, resolution: 19567.8792409999 }), new p2({ level: 4, scale: 36978595474472e-6, resolution: 9783.93962049996 }), new p2({ level: 5, scale: 18489297737236e-6, resolution: 4891.96981024998 }), new p2({ level: 6, scale: 9244648868618e-6, resolution: 2445.98490512499 }), new p2({ level: 7, scale: 4622324434309e-6, resolution: 1222.99245256249 }), new p2({ level: 8, scale: 2311162217155e-6, resolution: 611.49622628138 }), new p2({ level: 9, scale: 1155581108577e-6, resolution: 305.748113140558 }), new p2({ level: 10, scale: 577790.554289, resolution: 152.874056570411 }), new p2({ level: 11, scale: 288895.277144, resolution: 76.4370282850732 }), new p2({ level: 12, scale: 144447.638572, resolution: 38.2185141425366 }), new p2({ level: 13, scale: 72223.819286, resolution: 19.1092570712683 }), new p2({ level: 14, scale: 36111.909643, resolution: 9.55462853563415 }), new p2({ level: 15, scale: 18055.954822, resolution: 4.77731426794937 }), new p2({ level: 16, scale: 9027.977411, resolution: 2.38865713397468 }), new p2({ level: 17, scale: 4513.988705, resolution: 1.19432856685505 }), new p2({ level: 18, scale: 2256.994353, resolution: 0.597164283559817 }), new p2({ level: 19, scale: 1128.497176, resolution: 0.298582141647617 }), new p2({ level: 20, scale: 564.248588, resolution: 0.14929107082380833 }), new p2({ level: 21, scale: 282.124294, resolution: 0.07464553541190416 }), new p2({ level: 22, scale: 141.062147, resolution: 0.03732276770595208 }), new p2({ level: 23, scale: 70.5310735, resolution: 0.01866138385297604 })] }), this.type = "web-tile", this.urlTemplate = null, this.wmtsInfo = null;
  }
  normalizeCtorArgs(e, t2) {
    return "string" == typeof e ? { urlTemplate: e, ...t2 } : e;
  }
  load(e) {
    const t2 = this.loadFromPortal({ supportedTypes: ["WMTS"] }, e).then(() => {
      var _a;
      let e2 = "";
      if (this.urlTemplate) if (this.spatialReference.equals(this.tileInfo.spatialReference)) {
        const t3 = new x(this.urlTemplate);
        !(!!this.subDomains && this.subDomains.length > 0) && ((_a = t3.authority) == null ? void 0 : _a.includes("{subDomain}")) && (e2 = "is missing 'subDomains' property");
      } else e2 = "spatialReference must match tileInfo.spatialReference";
      else e2 = "is missing the required 'urlTemplate' property value";
      if (e2) throw new s("web-tile-layer:load", `WebTileLayer (title: '${this.title}', id: '${this.id}') ${e2}`);
    });
    return this.addResolvingPromise(t2), Promise.resolve(this);
  }
  get levelValues() {
    const e = [];
    if (!this.tileInfo) return null;
    for (const t2 of this.tileInfo.lods) e[t2.level] = t2.levelValue || t2.level;
    return e;
  }
  readSpatialReference(e, t2) {
    var _a;
    return e || g.fromJSON((_a = t2.fullExtent) == null ? void 0 : _a.spatialReference);
  }
  get tileServers() {
    if (!this.urlTemplate) return null;
    const e = [], { urlTemplate: t2, subDomains: r4 } = this, l = new x(t2), o3 = l.scheme ? l.scheme + "://" : "//", n = o3 + l.authority + "/", a3 = l.authority;
    if (a3 == null ? void 0 : a3.includes("{subDomain}")) {
      if (r4 && r4.length > 0 && a3.split(".").length > 1) for (const s2 of r4) e.push(o3 + a3.replaceAll(/\{subDomain\}/gi, s2) + "/");
    } else e.push(n);
    return e.map(Ct);
  }
  get urlPath() {
    if (!this.urlTemplate) return null;
    const e = this.urlTemplate, t2 = new x(e), r4 = (t2.scheme ? t2.scheme + "://" : "//") + t2.authority + "/";
    return e.slice(r4.length);
  }
  readUrlTemplate(e, t2) {
    return e || t2.templateUrl;
  }
  writeUrlTemplate(e, t2) {
    pt(e) && (e = "https:" + e), e && (e = e.replaceAll(/\{z\}/gi, "{level}").replaceAll(/\{x\}/gi, "{col}").replaceAll(/\{y\}/gi, "{row}"), e = K(e)), t2.templateUrl = e;
  }
  fetchTile(e, r4, l, o3 = {}) {
    const { signal: s2 } = o3, i2 = this.getTileUrl(e, r4, l), n = { responseType: "image", signal: s2, query: { ...this.refreshParameters } };
    return P(i2, n).then((e2) => e2.data);
  }
  async fetchImageBitmapTile(e, r4, l, o3 = {}) {
    const { signal: s2 } = o3;
    if (this.fetchTile !== L.prototype.fetchTile) {
      const t2 = await this.fetchTile(e, r4, l, o3);
      return o2(t2, e, r4, l, s2);
    }
    const i2 = this.getTileUrl(e, r4, l), n = { responseType: "blob", signal: s2, query: { ...this.refreshParameters } }, { data: a3 } = await P(i2, n);
    return o2(a3, e, r4, l, s2);
  }
  getTileUrl(e, t2, r4) {
    const { levelValues: l, tileServers: s2, urlPath: i2 } = this;
    if (!l || !s2 || !i2) return "";
    const n = l[e];
    return s2[t2 % s2.length] + r2(i2, { level: n, z: n, col: r4, x: r4, row: t2, y: t2 });
  }
};
r([m({ type: String, value: "", json: { write: true } })], U.prototype, "copyright", void 0), r([m({ type: w, json: { write: true }, nonNullable: true })], U.prototype, "fullExtent", void 0), r([m({ readOnly: true, json: { read: false, write: false } })], U.prototype, "legendEnabled", void 0), r([m({ type: ["show", "hide"] })], U.prototype, "listMode", void 0), r([m({ json: { read: true, write: true } })], U.prototype, "blendMode", void 0), r([m()], U.prototype, "levelValues", null), r([m({ type: Boolean, json: { read: false, write: { enabled: true, overridePolicy: () => ({ enabled: false }) } } })], U.prototype, "isReference", void 0), r([m({ type: ["WebTiledLayer"], value: "WebTiledLayer" })], U.prototype, "operationalLayerType", void 0), r([m({ readOnly: true, json: { read: false, write: false } })], U.prototype, "popupEnabled", void 0), r([m({ type: g })], U.prototype, "spatialReference", void 0), r([o("spatialReference", ["spatialReference", "fullExtent.spatialReference"])], U.prototype, "readSpatialReference", null), r([m({ type: [String], json: { write: true } })], U.prototype, "subDomains", void 0), r([m({ type: z, json: { write: true } })], U.prototype, "tileInfo", void 0), r([m({ readOnly: true })], U.prototype, "tileServers", null), r([m({ json: { read: false } })], U.prototype, "type", void 0), r([m()], U.prototype, "urlPath", null), r([m({ type: String, json: { origins: { "portal-item": { read: { source: "url" } } } } })], U.prototype, "urlTemplate", void 0), r([o("urlTemplate", ["urlTemplate", "templateUrl"])], U.prototype, "readUrlTemplate", null), r([r3("urlTemplate", { templateUrl: { type: String } })], U.prototype, "writeUrlTemplate", null), r([m({ type: p3, json: { write: true } })], U.prototype, "wmtsInfo", void 0), U = L = r([a2("esri.layers.WebTileLayer")], U);
var I = U;

export {
  p3 as p,
  I
};
//# sourceMappingURL=chunk-IEVGWQJH.js.map
