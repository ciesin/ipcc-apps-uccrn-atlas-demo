import {
  i,
  t
} from "./chunk-EWFN6VXR.js";
import {
  s
} from "./chunk-F7A3OWWW.js";

// node_modules/@arcgis/core/layers/support/LayerLoadContext.js
var e = class {
  constructor() {
    this._serviceMetadatas = /* @__PURE__ */ new Map(), this._itemDatas = /* @__PURE__ */ new Map();
  }
  async fetchServiceMetadata(e2, a2) {
    const s3 = this._serviceMetadatas.get(e2);
    if (s3) return s3;
    const r = await t(e2, a2);
    return this._serviceMetadatas.set(e2, r), r;
  }
  async fetchItemData(t3) {
    const { id: e2 } = t3;
    if (!e2) return null;
    const { _itemDatas: a2 } = this;
    if (a2.has(e2)) return a2.get(e2);
    const s3 = await t3.fetchData();
    return a2.set(e2, s3), s3;
  }
  async fetchCustomParameters(t3, e2) {
    const a2 = await this.fetchItemData(t3);
    return a2 && "object" == typeof a2 && (e2 ? e2(a2) : a2.customParameters) || null;
  }
};

// node_modules/@arcgis/core/portal/support/loadUtils.js
function t2(e2) {
  const t3 = { id: e2.id, name: e2.name }, a2 = i(e2.type);
  return "FeatureLayer" !== a2 && (t3.layerType = a2), t3;
}
async function a(e2, r, a2) {
  var _a, _b, _c;
  if (null == (e2 == null ? void 0 : e2.layers) || null == (e2 == null ? void 0 : e2.tables)) {
    const s3 = await a2.fetchServiceMetadata(r, { customParameters: (_a = l(e2)) == null ? void 0 : _a.customParameters });
    (e2 = e2 || {}).layers = e2.layers || ((_b = s3 == null ? void 0 : s3.layers) == null ? void 0 : _b.map(t2)), e2.tables = e2.tables || ((_c = s3 == null ? void 0 : s3.tables) == null ? void 0 : _c.map(t2));
  }
  return e2;
}
function l(e2) {
  if (!e2) return null;
  const { layers: r, tables: t3 } = e2;
  return (r == null ? void 0 : r.length) ? r[0] : (t3 == null ? void 0 : t3.length) ? t3[0] : null;
}
function s2(e2, r) {
  if (null == r) return null;
  return [...e2.layers || [], ...e2.tables || []].find((e3) => e3.id === r);
}
function n(e2, r) {
  return [...e2.layers || [], ...e2.tables || []].filter(({ layerType: e3 }) => e3 ? r.includes(e3) : r.includes("ArcGISFeatureLayer"));
}
function u(e2) {
  var _a, _b;
  return (((_a = e2 == null ? void 0 : e2.layers) == null ? void 0 : _a.length) ?? 0) + (((_b = e2 == null ? void 0 : e2.tables) == null ? void 0 : _b.length) ?? 0);
}
function c(e2) {
  switch (e2) {
    case "catalog":
      return ["CatalogLayer"];
    case "feature":
      return ["ArcGISFeatureLayer"];
    case "oriented-imagery":
      return ["OrientedImageryLayer"];
    case "subtype-group":
      return ["SubtypeGroupLayer", "SubtypeGroupTable"];
  }
  return null;
}
function i2(e2) {
  switch (e2) {
    case "CatalogLayer":
      return "CatalogLayer";
    case "OrientedImageryLayer":
      return "OrientedImageryLayer";
    case "SubtypeGroupLayer":
    case "SubtypeGroupTable":
      return "SubtypeGroupLayer";
  }
  return "FeatureLayer";
}
async function o(r, a2, s3) {
  var _a, _b, _c, _d;
  if (!(r == null ? void 0 : r.url)) return a2 ?? {};
  if (a2 ?? (a2 = {}), !a2.layers) {
    const e2 = await s3.fetchServiceMetadata(r.url);
    a2.layers = (_a = e2.layers) == null ? void 0 : _a.map(t2);
  }
  const { serverUrl: n2, portalItem: u2 } = await s(r.url, { sceneLayerItem: r, customParameters: (_b = l(a2)) == null ? void 0 : _b.customParameters }).catch(() => ({ serverUrl: null, portalItem: null }));
  if (null == n2) return a2.tables = [], a2;
  if (!a2.tables && u2) {
    const e2 = await u2.fetchData().catch(() => null);
    if (e2 == null ? void 0 : e2.tables) a2.tables = e2.tables.map(t2);
    else {
      const r2 = await s3.fetchServiceMetadata(n2, { customParameters: (_c = l(e2)) == null ? void 0 : _c.customParameters }).catch(() => null);
      a2.tables = (_d = r2 == null ? void 0 : r2.tables) == null ? void 0 : _d.map(t2);
    }
  }
  if (a2.tables) for (const e2 of a2.tables) e2.url = `${n2}/${e2.id}`;
  return a2;
}

export {
  e,
  t2 as t,
  a,
  l,
  s2 as s,
  n,
  u,
  c,
  i2 as i,
  o
};
//# sourceMappingURL=chunk-YYNCM4H6.js.map
