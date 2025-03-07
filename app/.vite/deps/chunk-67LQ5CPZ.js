import {
  a,
  e,
  i as i2,
  l,
  o,
  s as s3,
  u
} from "./chunk-YYNCM4H6.js";
import {
  a as a2
} from "./chunk-HKHKDBUI.js";
import {
  i
} from "./chunk-EWFN6VXR.js";
import {
  s as s2
} from "./chunk-F7A3OWWW.js";
import {
  s as s4
} from "./chunk-VY225BNN.js";
import {
  g
} from "./chunk-XWXWIBVO.js";
import {
  S
} from "./chunk-IP4HFFRO.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/portal/support/portalLayers.js
async function p(e2) {
  let { portalItem: a3 } = e2;
  !a3 || a3 instanceof S || (a3 = new S(a3));
  const r = await d(a3);
  return new (0, r.constructor)({ portalItem: a3, ...r.properties });
}
async function d(e2) {
  await e2.load();
  const a3 = new e();
  return w(await L(e2, a3));
}
async function L(a3, r) {
  switch (a3.type) {
    case "3DTiles Service":
      return a3.typeKeywords.includes("3DObject") ? C() : T();
    case "CSV":
      return G();
    case "Feature Collection":
      return v(a3);
    case "Feature Service":
      return S2(a3, r);
    case "Feed":
      return D();
    case "GeoJson":
      return j();
    case "Group Layer":
      return O();
    case "Image Service":
      return I(a3, r);
    case "KML":
      return P();
    case "Knowledge Graph Layer":
      return F();
    case "Map Service":
      return N(a3, r);
    case "Media Layer":
      return V();
    case "Scene Service":
      return h(a3, r);
    case "Stream Service":
      return M();
    case "Vector Tile Service":
      return g2();
    case "WCS":
      return b();
    case "WFS":
      return K();
    case "WMS":
      return W();
    case "WMTS":
      return U();
    default:
      throw new s("portal:unknown-item-type", "Unknown item type '${type}'", { type: a3.type });
  }
}
async function w(e2) {
  const a3 = e2.className, r = a2[a3];
  return { constructor: await r(), properties: e2.properties };
}
async function N(e2, a3) {
  return await x(e2, a3) ? { className: "TileLayer" } : { className: "MapImageLayer" };
}
async function S2(e2, a3) {
  const r = await J(e2, a3);
  if ("object" == typeof r) {
    const { sourceJSON: e3, className: a4 } = r, t = { sourceJSON: e3 };
    return null != r.id && (t.layerId = r.id), { className: a4 || "FeatureLayer", properties: t };
  }
  return { className: "GroupLayer" };
}
async function h(e2, r) {
  var _a;
  const t = await J(e2, r, async () => {
    try {
      if (!e2.url) return [];
      const { serverUrl: t2 } = await s2(e2.url, { sceneLayerItem: e2 }), s5 = await r.fetchServiceMetadata(t2);
      return (s5 == null ? void 0 : s5.tables) ?? [];
    } catch {
      return [];
    }
  });
  if ("object" == typeof t) {
    const a3 = {};
    let n;
    if (null != t.id ? (a3.layerId = t.id, n = `${e2.url}/layers/${t.id}`) : n = e2.url, (_a = e2.typeKeywords) == null ? void 0 : _a.length) {
      for (const r2 of Object.keys(g)) if (e2.typeKeywords.includes(r2)) return { className: g[r2] };
    }
    const c = await r.fetchServiceMetadata(n, { customParameters: await r.fetchCustomParameters(e2, (e3) => {
      var _a2;
      return (_a2 = l(e3)) == null ? void 0 : _a2.customParameters;
    }) });
    return { className: g[c == null ? void 0 : c.layerType] || "SceneLayer", properties: a3 };
  }
  if (false === t) {
    const a3 = await r.fetchServiceMetadata(e2.url);
    if ("Voxel" === (a3 == null ? void 0 : a3.layerType)) return { className: "VoxelLayer" };
  }
  return { className: "GroupLayer" };
}
async function v(e2) {
  await e2.load();
  const a3 = s4(e2, "Map Notes"), r = s4(e2, "Markup");
  if (a3 || r) return { className: "MapNotesLayer" };
  if (s4(e2, "Route Layer")) return { className: "RouteLayer" };
  const t = await e2.fetchData();
  return 1 === u(t) ? { className: "FeatureLayer" } : { className: "GroupLayer" };
}
async function I(e2, a3) {
  var _a, _b, _c, _d, _e;
  await e2.load();
  const r = ((_a = e2.typeKeywords) == null ? void 0 : _a.map((e3) => e3.toLowerCase())) ?? [];
  if (r.includes("elevation 3d layer")) return { className: "ElevationLayer" };
  if (r.includes("tiled imagery")) return { className: "ImageryTileLayer" };
  const t = await a3.fetchItemData(e2), s5 = t == null ? void 0 : t.layerType;
  if ("ArcGISTiledImageServiceLayer" === s5) return { className: "ImageryTileLayer" };
  if ("ArcGISImageServiceLayer" === s5) return { className: "ImageryLayer" };
  const n = await a3.fetchServiceMetadata(e2.url, { customParameters: await a3.fetchCustomParameters(e2) }), c = (_b = n.cacheType) == null ? void 0 : _b.toLowerCase(), o2 = (_c = n.capabilities) == null ? void 0 : _c.toLowerCase().includes("tilesonly"), i3 = ((_e = (_d = n.tileInfo) == null ? void 0 : _d.format) == null ? void 0 : _e.toLowerCase()) ?? "", u2 = null == c && ["jpg", "jpeg", "png", "png8", "png24", "png32", "mixed"].includes(i3);
  return "map" === c || u2 || o2 ? { className: "ImageryTileLayer" } : { className: "ImageryLayer" };
}
function M() {
  return { className: "StreamLayer" };
}
function g2() {
  return { className: "VectorTileLayer" };
}
function j() {
  return { className: "GeoJSONLayer" };
}
function T() {
  return { className: "IntegratedMesh3DTilesLayer" };
}
function C() {
  return { className: "UnsupportedLayer" };
}
function G() {
  return { className: "CSVLayer" };
}
function P() {
  return { className: "KMLLayer" };
}
function F() {
  return { className: "KnowledgeGraphLayer" };
}
function b() {
  return { className: "WCSLayer" };
}
function K() {
  return { className: "WFSLayer" };
}
function W() {
  return { className: "WMSLayer" };
}
function U() {
  return { className: "WMTSLayer" };
}
function D() {
  return { className: "StreamLayer" };
}
function O() {
  return { className: "GroupLayer" };
}
function V() {
  return { className: "MediaLayer" };
}
async function x(e2, a3) {
  const { tileInfo: r } = await a3.fetchServiceMetadata(e2.url, { customParameters: await a3.fetchCustomParameters(e2) });
  return r;
}
async function J(e2, a3, t) {
  const { url: s5, type: n } = e2, c = "Feature Service" === n;
  if (!s5) return {};
  if (/\/\d+$/.test(s5)) {
    if (c) {
      const t2 = await a3.fetchServiceMetadata(s5, { customParameters: await a3.fetchCustomParameters(e2, (e3) => {
        var _a;
        return (_a = l(e3)) == null ? void 0 : _a.customParameters;
      }) });
      return { id: t2.id, className: i(t2.type), sourceJSON: t2 };
    }
    return {};
  }
  await e2.load();
  let f = await a3.fetchItemData(e2);
  if (c) {
    const e3 = await a(f, s5, a3), r = k(e3);
    if ("object" == typeof r) {
      const a4 = s3(e3, r.id);
      r.className = i2(a4 == null ? void 0 : a4.layerType);
    }
    return r;
  }
  "Scene Service" === n && (f = await o(e2, f, a3));
  if (u(f) > 0) return k(f);
  const p2 = await a3.fetchServiceMetadata(s5);
  return t && (p2.tables = await t()), k(p2);
}
function k(e2) {
  var _a;
  return 1 === u(e2) && { id: (_a = l(e2)) == null ? void 0 : _a.id };
}

export {
  p,
  L
};
//# sourceMappingURL=chunk-67LQ5CPZ.js.map
