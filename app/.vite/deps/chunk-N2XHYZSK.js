import {
  o as o2,
  se
} from "./chunk-VDYWILM2.js";
import {
  c
} from "./chunk-VY225BNN.js";
import {
  l,
  u
} from "./chunk-WZ7EFR6C.js";
import {
  r as r3
} from "./chunk-WF2ACUGU.js";
import {
  n as n3
} from "./chunk-45XNKFWX.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  C,
  d as d2
} from "./chunk-YSPSOPLL.js";
import {
  V as V2
} from "./chunk-AJSC5XSW.js";
import {
  P2 as P,
  d2 as d
} from "./chunk-UFBX3XSC.js";
import {
  V
} from "./chunk-F7TCEOHX.js";
import {
  e,
  m,
  n2,
  t2
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a,
  r2
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  t
} from "./chunk-STW6HRXO.js";
import {
  s as s2
} from "./chunk-M6FNW7GP.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/mixins/ArcGISMapService.js
var f = (f3) => {
  let b = class extends f3 {
    constructor() {
      super(...arguments), this.capabilities = void 0, this.copyright = null, this.fullExtent = null, this.legendEnabled = true, this.spatialReference = null, this.version = void 0, this._allLayersAndTablesMap = null;
    }
    readCapabilities(e2, r4) {
      const t3 = r4.capabilities && r4.capabilities.split(",").map((e3) => e3.toLowerCase().trim());
      if (!t3) return { operations: { supportsExportMap: false, supportsExportTiles: false, supportsIdentify: false, supportsQuery: false, supportsTileMap: false }, exportMap: null, exportTiles: null };
      const s3 = this.type, o3 = "tile" !== s3 && !!r4.supportsDynamicLayers, a2 = t3.includes("query"), p = t3.includes("map"), l2 = !!r4.exportTilesAllowed, n4 = t3.includes("tilemap"), c2 = t3.includes("data"), u2 = "tile" !== s3 && (!r4.tileInfo || o3), y = "tile" !== s3 && (!r4.tileInfo || o3), m3 = "tile" !== s3, d3 = "tile" !== s3 && o3 && r4.currentVersion >= 11.1, h2 = r4.cimVersion ? r3.parse(r4.cimVersion) : null, f4 = (h2 == null ? void 0 : h2.greaterEqual(1, 4)) ?? false, b2 = (h2 == null ? void 0 : h2.greaterEqual(2, 0)) ?? false;
      return { operations: { supportsExportMap: p, supportsExportTiles: l2, supportsIdentify: a2, supportsQuery: c2, supportsTileMap: n4 }, exportMap: p ? { supportsArcadeExpressionForLabeling: f4, supportsCIMSymbols: b2, supportsDynamicLayers: o3, supportsSublayerOrderBy: d3, supportsSublayerDefinitionExpression: y, supportsSublayerVisibility: u2, supportsSublayersChanges: m3 } : null, exportTiles: l2 ? { maxExportTilesCount: +r4.maxExportTilesCount } : null };
    }
    readVersion(e2, r4) {
      let t3 = r4.currentVersion;
      return t3 || (t3 = r4.hasOwnProperty("capabilities") || r4.hasOwnProperty("tables") ? 10 : r4.hasOwnProperty("supportedImageFormatTypes") ? 9.31 : 9.3), t3;
    }
    async fetchRelatedService(e2) {
      const r4 = this.portalItem;
      if (!r4 || !c(r4)) return null;
      this._relatedFeatureServicePromise || (this._relatedFeatureServicePromise = r4.fetchRelatedItems({ relationshipType: "Service2Service", direction: "reverse" }, e2).then((e3) => e3.find((e4) => "Feature Service" === e4.type) ?? null, () => null));
      const t3 = await this._relatedFeatureServicePromise;
      return s2(e2), t3 ? { itemId: t3.id, url: t3.url } : null;
    }
    async fetchSublayerInfo(e2, t3) {
      var _a;
      const { source: s3 } = e2;
      if ((this == null ? void 0 : this.portalItem) && "tile" === this.type && "map-layer" === (s3 == null ? void 0 : s3.type) && c(this.portalItem) && e2.originIdOf("url") < e.SERVICE) {
        const r4 = await this.fetchRelatedService(t3);
        r4 && (e2.url = V(r4.url, s3.mapLayerId.toString()), e2.layerItemId = r4.itemId);
      }
      const { url: i } = e2;
      let a2;
      if ("data-layer" === s3.type) {
        a2 = (await P(i, { responseType: "json", query: { f: "json", ...this.customParameters, token: this.apiKey }, ...t3 })).data;
      } else if (i && e2.originIdOf("url") > e.SERVICE) try {
        const e3 = await this._fetchAllLayersAndTablesFromService(i), r4 = ((_a = d(i)) == null ? void 0 : _a.sublayer) ?? s3.mapLayerId;
        a2 = e3.get(r4);
      } catch {
      }
      else {
        let r4 = e2.id;
        "map-layer" === (s3 == null ? void 0 : s3.type) && (r4 = s3.mapLayerId);
        try {
          a2 = (await this.fetchAllLayersAndTables(t3)).get(r4);
        } catch {
        }
      }
      return a2;
    }
    async fetchAllLayersAndTables(e2) {
      var _a;
      return this._fetchAllLayersAndTablesFromService((_a = this.parsedUrl) == null ? void 0 : _a.path, e2);
    }
    async _fetchAllLayersAndTablesFromService(e2, i) {
      await this.load(i), this._allLayersAndTablesMap || (this._allLayersAndTablesMap = /* @__PURE__ */ new Map());
      const a2 = d(e2), p = r2(this._allLayersAndTablesMap, a2 == null ? void 0 : a2.url.path, () => P(V(a2 == null ? void 0 : a2.url.path, "/layers"), { responseType: "json", query: { f: "json", ...this.customParameters, token: this.apiKey } }).then((e3) => {
        const r4 = /* @__PURE__ */ new Map(), { layers: t3, tables: s3 } = e3.data, o3 = [...t3 ?? [], ...s3 ?? []];
        for (const i2 of o3) r4.set(i2.id, i2);
        return { result: r4 };
      }, (e3) => ({ error: e3 }))), l2 = await p;
      if (s2(i), "result" in l2) return l2.result;
      throw l2.error;
    }
  };
  return r([m({ readOnly: true })], b.prototype, "capabilities", void 0), r([o("service", "capabilities", ["capabilities", "exportTilesAllowed", "maxExportTilesCount", "supportsDynamicLayers", "tileInfo"])], b.prototype, "readCapabilities", null), r([m({ json: { read: { source: "copyrightText" } } })], b.prototype, "copyright", void 0), r([m({ type: w })], b.prototype, "fullExtent", void 0), r([m(u)], b.prototype, "id", void 0), r([m({ type: Boolean, json: { origins: { service: { read: { enabled: false } } }, read: { source: "showLegend" }, write: { target: "showLegend" } } })], b.prototype, "legendEnabled", void 0), r([m(l)], b.prototype, "popupEnabled", void 0), r([m({ type: g })], b.prototype, "spatialReference", void 0), r([m({ readOnly: true })], b.prototype, "version", void 0), r([o("service", "version", ["currentVersion", "capabilities", "tables", "supportedImageFormatTypes"])], b.prototype, "readVersion", null), b = r([a("esri.layers.mixins.ArcGISMapService")], b), b;
};

// node_modules/@arcgis/core/layers/mixins/SublayersOwner.js
function h(e2, r4) {
  const s3 = [], t3 = {};
  return e2 ? (e2.forEach((e3) => {
    const o3 = new se();
    if (o3.read(e3, r4), t3[o3.id] = o3, null != e3.parentLayerId && -1 !== e3.parentLayerId) {
      const r5 = t3[e3.parentLayerId];
      r5.sublayers || (r5.sublayers = []), r5.sublayers.unshift(o3);
    } else s3.unshift(o3);
  }), s3) : s3;
}
var f2 = V2.ofType(se);
function S(e2, r4) {
  e2 && e2.forEach((e3) => {
    r4(e3), e3.sublayers && e3.sublayers.length && S(e3.sublayers, r4);
  });
}
var m2 = (m3) => {
  let E = class extends m3 {
    constructor(...e2) {
      super(...e2), this.allSublayers = new n3({ getCollections: () => [this.sublayers], getChildrenFunction: (e3) => e3.sublayers }), this.sublayersSourceJSON = { [e.SERVICE]: {}, [e.PORTAL_ITEM]: {}, [e.WEB_SCENE]: {}, [e.WEB_MAP]: {}, [e.LINK_CHART]: {} }, this.subtables = null, this.addHandles([d2(() => this.sublayers, (e3, r4) => this._handleSublayersChange(e3, r4), C), d2(() => this.subtables, (e3, r4) => this._handleSublayersChange(e3, r4), C)]);
    }
    destroy() {
      this.allSublayers.destroy();
    }
    readSublayers(e2, r4) {
      if (!r4 || !e2) return;
      const { sublayersSourceJSON: s3 } = this, t3 = n2(r4.origin);
      if (t3 < e.SERVICE) return;
      if (s3[t3] = { context: r4, visibleLayers: e2.visibleLayers || s3[t3].visibleLayers, layers: e2.layers || s3[t3].layers }, t3 > e.SERVICE) return;
      this._set("serviceSublayers", this.createSublayersForOrigin("service").sublayers);
      const { sublayers: o3, origin: a2 } = this.createSublayersForOrigin("web-document"), l2 = t(this);
      l2.setDefaultOrigin(a2), this._set("sublayers", new f2(o3)), l2.setDefaultOrigin("user");
    }
    findSublayerById(e2) {
      return this.allSublayers.find((r4) => r4.id === e2);
    }
    createServiceSublayers() {
      return this.createSublayersForOrigin("service").sublayers;
    }
    createSublayersForOrigin(e2) {
      const r4 = n2("web-document" === e2 ? "web-map" : e2);
      let s3 = e.SERVICE, t3 = this.sublayersSourceJSON[e.SERVICE].layers, o3 = this.sublayersSourceJSON[e.SERVICE].context, a2 = null;
      const l2 = [e.PORTAL_ITEM, e.WEB_SCENE, e.WEB_MAP].filter((e3) => e3 <= r4);
      for (const y of l2) {
        const e3 = this.sublayersSourceJSON[y];
        o2(e3.layers) && (s3 = y, t3 = e3.layers, o3 = e3.context, e3.visibleLayers && (a2 = { visibleLayers: e3.visibleLayers, context: e3.context }));
      }
      const i = [e.PORTAL_ITEM, e.WEB_SCENE, e.WEB_MAP].filter((e3) => e3 > s3 && e3 <= r4);
      let n4 = null;
      for (const y of i) {
        const { layers: e3, visibleLayers: r5, context: s4 } = this.sublayersSourceJSON[y];
        e3 && (n4 = { layers: e3, context: s4 }), r5 && (a2 = { visibleLayers: r5, context: s4 });
      }
      const u2 = h(t3, o3), d3 = /* @__PURE__ */ new Map(), m4 = /* @__PURE__ */ new Set();
      if (n4) for (const y of n4.layers) d3.set(y.id, y);
      if (a2 == null ? void 0 : a2.visibleLayers) for (const y of a2.visibleLayers) m4.add(y);
      return S(u2, (e3) => {
        n4 && e3.read(d3.get(e3.id), n4.context), a2 && e3.read({ defaultVisibility: m4.has(e3.id) }, a2.context);
      }), { origin: t2(s3), sublayers: new f2({ items: u2 }) };
    }
    read(e2, r4) {
      super.read(e2, r4), this.readSublayers(e2, r4);
    }
    _handleSublayersChange(e2, r4) {
      r4 && (r4.forEach((e3) => {
        e3.parent = null, e3.layer = null;
      }), this.removeHandles("sublayers-owner")), e2 && (e2.forEach((e3) => {
        e3.parent = this, e3.layer = this;
      }), this.addHandles([e2.on("after-add", ({ item: e3 }) => {
        e3.parent = this, e3.layer = this;
      }), e2.on("after-remove", ({ item: e3 }) => {
        e3.parent = null, e3.layer = null;
      })], "sublayers-owner"), "tile" === this.type && this.addHandles(e2.on("before-changes", (e3) => {
        n.getLogger("esri.layers.TileLayer").error(new s("tilelayer:sublayers-non-modifiable", "ISublayer can't be added, moved, or removed from the layer's sublayers", { layer: this })), e3.preventDefault();
      }), "sublayers-owner"));
    }
  };
  return r([m({ readOnly: true })], E.prototype, "allSublayers", void 0), r([m({ readOnly: true, type: V2.ofType(se) })], E.prototype, "serviceSublayers", void 0), r([m({ value: null, type: f2, json: { read: false, write: { allowNull: true, ignoreOrigin: true } } })], E.prototype, "sublayers", void 0), r([m({ readOnly: true })], E.prototype, "sublayersSourceJSON", void 0), r([m({ type: f2, json: { read: { source: "tables" } } })], E.prototype, "subtables", void 0), E = r([a("esri.layers.mixins.SublayersOwner")], E), E;
};

export {
  f,
  m2 as m
};
//# sourceMappingURL=chunk-N2XHYZSK.js.map
