import {
  n as n2,
  p
} from "./chunk-VLPXOXHN.js";
import {
  i
} from "./chunk-ELTPMWLT.js";
import {
  t
} from "./chunk-QCTBKAKN.js";
import {
  o as o2
} from "./chunk-ACFHOOS7.js";
import {
  u,
  y
} from "./chunk-WZ7EFR6C.js";
import {
  v
} from "./chunk-775V3L2A.js";
import {
  S as S2
} from "./chunk-IP4HFFRO.js";
import {
  C as C2
} from "./chunk-PAGKMWJH.js";
import {
  w as w2
} from "./chunk-NENDDUWH.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  g,
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  C,
  P2 as P,
  S,
  d2 as d,
  m2,
  w
} from "./chunk-UFBX3XSC.js";
import {
  I
} from "./chunk-F7TCEOHX.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  k
} from "./chunk-M6FNW7GP.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/support/I3SIndexInfo.js
async function r3(r4, n4, t2, s2, a2, i2, l) {
  let d2 = null;
  if (null != t2) {
    const o3 = `${r4}/nodepages/`, n5 = o3 + Math.floor(t2.rootIndex / t2.nodesPerPage);
    try {
      return { type: "page", rootPage: (await P(n5, { query: { f: "json", ...s2, token: a2 }, responseType: "json", signal: l })).data, rootIndex: t2.rootIndex, pageSize: t2.nodesPerPage, lodMetric: t2.lodSelectionMetricType, urlPrefix: o3 };
    } catch (g2) {
      null != i2 && i2.warn("#fetchIndexInfo()", "Failed to load root node page. Falling back to node documents.", n5, g2), d2 = g2;
    }
  }
  if (!n4) return null;
  const p2 = n4 == null ? void 0 : n4.split("/").pop(), c = `${r4}/nodes/`, u3 = c + p2;
  try {
    return { type: "node", rootNode: (await P(u3, { query: { f: "json", ...s2, token: a2 }, responseType: "json", signal: l })).data, urlPrefix: c };
  } catch (g2) {
    throw new s("sceneservice:root-node-missing", "Root node missing.", { pageError: d2, nodeError: g2, url: u3 });
  }
}

// node_modules/@arcgis/core/layers/support/schemaValidatorLoader.js
var n3 = null;
function u2() {
  return n3;
}

// node_modules/@arcgis/core/layers/mixins/SceneService.js
var R = (R2) => {
  let C3 = class extends R2 {
    constructor() {
      super(...arguments), this.spatialReference = null, this.fullExtent = null, this.heightModelInfo = null, this.minScale = 0, this.maxScale = 0, this.version = { major: Number.NaN, minor: Number.NaN, versionString: "" }, this.copyright = null, this.sublayerTitleMode = "item-title", this.title = null, this.layerId = null, this.indexInfo = null, this._debouncedSaveOperations = k(async (e, t2, r4) => {
        switch (e) {
          case V.SAVE:
            return this._save(t2);
          case V.SAVE_AS:
            return this._saveAs(r4, t2);
        }
      });
    }
    readSpatialReference(e, t2) {
      return U(t2);
    }
    readFullExtent(e, t2, r4) {
      if (null != e && "object" == typeof e) {
        const o4 = null == e.spatialReference ? { ...e, spatialReference: U(t2) } : e;
        return w2.fromJSON(o4, r4);
      }
      const o3 = t2.store, i2 = U(t2);
      return null == i2 || null == (o3 == null ? void 0 : o3.extent) || !Array.isArray(o3.extent) || o3.extent.some((e2) => e2 < L) ? null : new w2({ xmin: o3.extent[0], ymin: o3.extent[1], xmax: o3.extent[2], ymax: o3.extent[3], spatialReference: i2 });
    }
    parseVersionString(e) {
      const t2 = { major: Number.NaN, minor: Number.NaN, versionString: e }, r4 = e.split(".");
      return r4.length >= 2 && (t2.major = parseInt(r4[0], 10), t2.minor = parseInt(r4[1], 10)), t2;
    }
    readVersion(e, t2) {
      const r4 = t2.store, o3 = null != r4.version ? r4.version.toString() : "";
      return this.parseVersionString(o3);
    }
    readTitlePortalItem(e) {
      return "item-title" !== this.sublayerTitleMode ? void 0 : e;
    }
    readTitleService(e, t2) {
      var _a;
      const r4 = (_a = this.portalItem) == null ? void 0 : _a.title;
      if ("item-title" === this.sublayerTitleMode) return this.url ? w(this.url, t2.name) : t2.name;
      let o3 = t2.name;
      if (!o3 && this.url) {
        const e2 = d(this.url);
        null != e2 && (o3 = e2.title);
      }
      return "item-title-and-service-name" === this.sublayerTitleMode && r4 && (o3 = r4 + " - " + o3), m2(o3);
    }
    set url(e) {
      if (null == e) return void this._set("url", e);
      const t2 = S({ layer: this, url: e, nonStandardUrlAllowed: false, logger: n.getLogger(this) });
      this._set("url", t2.url), null != t2.layerId && this._set("layerId", t2.layerId);
    }
    writeUrl(e, t2, r4, o3) {
      C(this, e, "layers", t2, o3);
    }
    get parsedUrl() {
      const e = this._get("url"), t2 = I(e);
      return t2 && null != this.layerId && (t2.path = `${t2.path}/layers/${this.layerId}`), t2;
    }
    async _fetchIndexAndUpdateExtent(e, t2) {
      var _a;
      this.indexInfo = r3(((_a = this.parsedUrl) == null ? void 0 : _a.path) ?? "", this.rootNode, e, this.customParameters, this.apiKey, n.getLogger(this), t2), null == this.fullExtent || this.fullExtent.hasZ || this._updateExtent(await this.indexInfo);
    }
    _updateExtent(e) {
      var _a, _b, _c, _d;
      if ("page" === (e == null ? void 0 : e.type)) {
        const t2 = e.rootIndex % e.pageSize, o3 = (_b = (_a = e.rootPage) == null ? void 0 : _a.nodes) == null ? void 0 : _b[t2];
        if (null == ((_c = o3 == null ? void 0 : o3.obb) == null ? void 0 : _c.center) || null == o3.obb.halfSize) throw new s("sceneservice:invalid-node-page", "Invalid node page.");
        if (o3.obb.center[0] < L || null == this.fullExtent || this.fullExtent.hasZ) return;
        const i2 = o3.obb.halfSize, s2 = o3.obb.center[2], a2 = Math.sqrt(i2[0] * i2[0] + i2[1] * i2[1] + i2[2] * i2[2]);
        this.fullExtent.zmin = s2 - a2, this.fullExtent.zmax = s2 + a2;
      } else if ("node" === (e == null ? void 0 : e.type)) {
        const t2 = (_d = e.rootNode) == null ? void 0 : _d.mbs;
        if (!Array.isArray(t2) || 4 !== t2.length || t2[0] < L) return;
        const r4 = t2[2], o3 = t2[3], { fullExtent: i2 } = this;
        i2 && (i2.zmin = r4 - o3, i2.zmax = r4 + o3);
      }
    }
    async _fetchService(e) {
      if (null == this.url) throw new s("sceneservice:url-not-set", "Scene service can not be loaded without valid portal item or url");
      if (null == this.layerId && /SceneServer\/*$/i.test(this.url)) {
        const t2 = await this._fetchFirstLayerId(e);
        null != t2 && (this.layerId = t2);
      }
      return this._fetchServiceLayer(e);
    }
    async _fetchFirstLayerId(e) {
      const r4 = await P(this.url ?? "", { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: e });
      if (r4.data && Array.isArray(r4.data.layers) && r4.data.layers.length > 0) return r4.data.layers[0].id;
    }
    async _fetchServiceLayer(e) {
      var _a;
      const r4 = await P(((_a = this.parsedUrl) == null ? void 0 : _a.path) ?? "", { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: e });
      r4.ssl && this.url && (this.url = this.url.replace(/^http:/i, "https:"));
      let o3 = false;
      if (r4.data.layerType && "Voxel" === r4.data.layerType && (o3 = true), o3) return this._fetchVoxelServiceLayer();
      const i2 = r4.data;
      this.read(i2, this._getServiceContext()), this.validateLayer(i2);
    }
    async _fetchVoxelServiceLayer(e) {
      var _a;
      const r4 = (await P(((_a = this.parsedUrl) == null ? void 0 : _a.path) + "/layer", { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: e })).data;
      this.read(r4, this._getServiceContext()), this.validateLayer(r4);
    }
    _getServiceContext() {
      var _a;
      return { origin: "service", portalItem: this.portalItem, portal: (_a = this.portalItem) == null ? void 0 : _a.portal, url: this.parsedUrl };
    }
    async _ensureLoadBeforeSave() {
      await this.load(), "beforeSave" in this && "function" == typeof this.beforeSave && await this.beforeSave();
    }
    validateLayer(e) {
    }
    async _saveAs(e, t2) {
      const o3 = { ...K, ...t2 };
      let i2 = S2.from(e);
      if (!i2) throw new s("sceneservice:portal-item-required", "_saveAs() requires a portal item to save to");
      i2.id && (i2 = i2.clone(), i2.id = null);
      const s2 = i2.portal || C2.getDefault();
      await this._ensureLoadBeforeSave(), i2.type = P2, i2.portal = s2;
      const a2 = o2(i2, "portal-item", true), n4 = { layers: [this.write({}, a2)] };
      return await Promise.all(a2.resources.pendingOperations ?? []), await this._validateAgainstJSONSchema(n4, a2, o3), this.url && (i2.url = this.url), i2.title || (i2.title = this.title), T(i2, o3, O.newItem), await s2.signIn(), await s2.user.addItem({ item: i2, folder: o3 == null ? void 0 : o3.folder, data: n4 }), await p(this.resourceReferences, a2), this.portalItem = i2, i(a2), a2.portalItem = i2, i2;
    }
    async _save(e) {
      const t2 = { ...K, ...e };
      if (!this.portalItem) throw new s("sceneservice:portal-item-not-set", "Portal item to save to has not been set on this SceneService");
      if (this.portalItem.type !== P2) throw new s("sceneservice:portal-item-wrong-type", `Portal item needs to have type "${P2}"`);
      await this._ensureLoadBeforeSave();
      const o3 = o2(this.portalItem, "portal-item", true), i2 = { layers: [this.write({}, o3)] };
      return await Promise.all(o3.resources.pendingOperations ?? []), await this._validateAgainstJSONSchema(i2, o3, t2), this.url && (this.portalItem.url = this.url), this.portalItem.title || (this.portalItem.title = this.title), T(this.portalItem, t2, O.existingItem), await n2(this.portalItem, i2, this.resourceReferences, o3), i(o3), this.portalItem;
    }
    async _validateAgainstJSONSchema(e, t2, i2) {
      const s2 = i2 == null ? void 0 : i2.validationOptions;
      t(t2, { errorName: "sceneservice:save" }, { ignoreUnsupported: s2 == null ? void 0 : s2.ignoreUnsupported, supplementalUnsupportedErrors: ["scenemodification:unsupported"] });
      const a2 = s2 == null ? void 0 : s2.enabled, n4 = u2();
      if (a2 && n4) {
        const t3 = (await n4()).validate(e, i2.portalItemLayerType);
        if (!t3.length) return;
        const a3 = `Layer item did not validate:
${t3.join("\n")}`;
        if (n.getLogger(this).error(`_validateAgainstJSONSchema(): ${a3}`), "throw" === s2.failPolicy) {
          const e2 = t3.map((e3) => new s("sceneservice:schema-validation", e3));
          throw new s("sceneservice-validate:error", "Failed to save layer item due to schema validation, see `details.errors`.", { validationErrors: e2 });
        }
      }
    }
  };
  return r([m(u)], C3.prototype, "id", void 0), r([m({ type: g })], C3.prototype, "spatialReference", void 0), r([o("spatialReference", ["spatialReference", "store.indexCRS", "store.geographicCRS"])], C3.prototype, "readSpatialReference", null), r([m({ type: w2 })], C3.prototype, "fullExtent", void 0), r([o("fullExtent", ["fullExtent", "store.extent", "spatialReference", "store.indexCRS", "store.geographicCRS"])], C3.prototype, "readFullExtent", null), r([m({ readOnly: true, type: v })], C3.prototype, "heightModelInfo", void 0), r([m({ type: Number, json: { name: "layerDefinition.minScale", write: true, origins: { service: { read: { source: "minScale" }, write: false } } } })], C3.prototype, "minScale", void 0), r([m({ type: Number, json: { name: "layerDefinition.maxScale", write: true, origins: { service: { read: { source: "maxScale" }, write: false } } } })], C3.prototype, "maxScale", void 0), r([m({ readOnly: true })], C3.prototype, "version", void 0), r([o("version", ["store.version"])], C3.prototype, "readVersion", null), r([m({ type: String, json: { read: { source: "copyrightText" } } })], C3.prototype, "copyright", void 0), r([m({ type: String, json: { read: false } })], C3.prototype, "sublayerTitleMode", void 0), r([m({ type: String })], C3.prototype, "title", void 0), r([o("portal-item", "title")], C3.prototype, "readTitlePortalItem", null), r([o("service", "title", ["name"])], C3.prototype, "readTitleService", null), r([m({ type: Number, json: { origins: { service: { read: { source: "id" } }, "portal-item": { write: { target: "id", isRequired: true, ignoreOrigin: true }, read: false } } } })], C3.prototype, "layerId", void 0), r([m(y)], C3.prototype, "url", null), r([r2("url")], C3.prototype, "writeUrl", null), r([m()], C3.prototype, "parsedUrl", null), r([m({ readOnly: true })], C3.prototype, "store", void 0), r([m({ type: String, readOnly: true, json: { read: { source: "store.rootNode" } } })], C3.prototype, "rootNode", void 0), C3 = r([a("esri.layers.mixins.SceneService")], C3), C3;
};
var L = -1e38;
function U(e) {
  if (null != e.spatialReference) return g.fromJSON(e.spatialReference);
  const t2 = e.store, r4 = t2.indexCRS || t2.geographicCRS, o3 = r4 && parseInt(r4.slice(r4.lastIndexOf("/") + 1), 10);
  return null != o3 ? new g(o3) : null;
}
function T(e, t2, r4) {
  e.typeKeywords || (e.typeKeywords = []);
  const o3 = t2.getTypeKeywords();
  for (const i2 of o3) e.typeKeywords.push(i2);
  e.typeKeywords && (e.typeKeywords = e.typeKeywords.filter((e2, t3, r5) => r5.indexOf(e2) === t3), r4 === O.newItem && (e.typeKeywords = e.typeKeywords.filter((e2) => "Hosted Service" !== e2)));
}
var O;
!function(e) {
  e[e.existingItem = 0] = "existingItem", e[e.newItem = 1] = "newItem";
}(O || (O = {}));
var P2 = "Scene Service";
var K = { getTypeKeywords: () => [], portalItemLayerType: "unknown", validationOptions: { enabled: true, ignoreUnsupported: false, failPolicy: "throw" } };
var V;
!function(e) {
  e[e.SAVE = 0] = "SAVE", e[e.SAVE_AS = 1] = "SAVE_AS";
}(V || (V = {}));

export {
  r3 as r,
  R,
  V
};
//# sourceMappingURL=chunk-ITIVGI42.js.map
