import {
  L
} from "./chunk-67LQ5CPZ.js";
import {
  e
} from "./chunk-YYNCM4H6.js";
import {
  a
} from "./chunk-HKHKDBUI.js";
import {
  t
} from "./chunk-EMADK6RJ.js";
import {
  S
} from "./chunk-IP4HFFRO.js";
import {
  V
} from "./chunk-AJSC5XSW.js";

// node_modules/@arcgis/core/portal/support/featureCollectionUtils.js
function e2(e3) {
  return t2(e3, "notes");
}
function r(e3) {
  return t2(e3, "markup");
}
function n(e3) {
  return t2(e3, "route");
}
function t2(e3, r2) {
  return !(!e3.layerType || "ArcGISFeatureLayer" !== e3.layerType) && e3.featureCollectionType === r2;
}

// node_modules/@arcgis/core/layers/support/layersCreator.js
async function l(e3, r2, a2) {
  if (!r2) return;
  const y = r2.map((e4) => G(e4, a2)), t3 = await Promise.allSettled(y);
  for (const i of t3) "rejected" === i.status || i.value && e3.add(i.value);
}
var c = { ArcGISDimensionLayer: "DimensionLayer", ArcGISFeatureLayer: "FeatureLayer", ArcGISImageServiceLayer: "ImageryLayer", ArcGISMapServiceLayer: "MapImageLayer", ArcGISSceneServiceLayer: "SceneLayer", ArcGISTiledElevationServiceLayer: "ElevationLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", BuildingSceneLayer: "BuildingSceneLayer", CatalogLayer: "CatalogLayer", CSV: "CSVLayer", DefaultTileLayer: "TileLayer", GeoJSON: "GeoJSONLayer", GroupLayer: "GroupLayer", IntegratedMesh3DTilesLayer: "IntegratedMesh3DTilesLayer", Object3DTilesLayer: "UnsupportedLayer", IntegratedMeshLayer: "IntegratedMeshLayer", KML: "KMLLayer", LineOfSightLayer: "LineOfSightLayer", MediaLayer: "MediaLayer", OGCFeatureLayer: "OGCFeatureLayer", OrientedImageryLayer: "OrientedImageryLayer", PointCloudLayer: "PointCloudLayer", RasterDataLayer: "UnsupportedLayer", VectorTileLayer: "VectorTileLayer", ViewshedLayer: "ViewshedLayer", Voxel: "VoxelLayer", WCS: "WCSLayer", WFS: "WFSLayer", WMS: "WMSLayer", WebTiledLayer: "WebTileLayer" };
var s = { ArcGISTiledElevationServiceLayer: "ElevationLayer", DefaultTileLayer: "ElevationLayer", RasterDataElevationLayer: "UnsupportedLayer" };
var p = { ArcGISFeatureLayer: "FeatureLayer" };
var S2 = { ArcGISImageServiceLayer: "UnsupportedLayer", ArcGISMapServiceLayer: "UnsupportedLayer", ArcGISSceneServiceLayer: "SceneLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", DefaultTileLayer: "TileLayer", OpenStreetMap: "OpenStreetMapLayer", VectorTileLayer: "VectorTileLayer", WCS: "UnsupportedLayer", WMS: "UnsupportedLayer", WebTiledLayer: "WebTileLayer" };
var u = { ArcGISAnnotationLayer: "UnsupportedLayer", ArcGISDimensionLayer: "UnsupportedLayer", ArcGISFeatureLayer: "FeatureLayer", ArcGISImageServiceLayer: "ImageryLayer", ArcGISImageServiceVectorLayer: "ImageryLayer", ArcGISMapServiceLayer: "MapImageLayer", ArcGISStreamLayer: "StreamLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", BingMapsAerial: "BingMapsLayer", BingMapsHybrid: "BingMapsLayer", BingMapsRoad: "BingMapsLayer", CatalogLayer: "CatalogLayer", CSV: "CSVLayer", DefaultTileLayer: "TileLayer", GeoJSON: "GeoJSONLayer", GeoRSS: "GeoRSSLayer", GroupLayer: "GroupLayer", KML: "KMLLayer", KnowledgeGraphLayer: "KnowledgeGraphLayer", MediaLayer: "MediaLayer", OGCFeatureLayer: "OGCFeatureLayer", OrientedImageryLayer: "OrientedImageryLayer", SubtypeGroupLayer: "SubtypeGroupLayer", VectorTileLayer: "VectorTileLayer", WCS: "WCSLayer", WFS: "WFSLayer", WMS: "WMSLayer", WebTiledLayer: "WebTileLayer" };
var d = { ArcGISFeatureLayer: "FeatureLayer", SubtypeGroupTable: "SubtypeGroupLayer" };
var I = { ArcGISImageServiceLayer: "ImageryLayer", ArcGISImageServiceVectorLayer: "ImageryLayer", ArcGISMapServiceLayer: "MapImageLayer", ArcGISTiledImageServiceLayer: "ImageryTileLayer", ArcGISTiledMapServiceLayer: "TileLayer", BingMapsAerial: "BingMapsLayer", BingMapsHybrid: "BingMapsLayer", BingMapsRoad: "BingMapsLayer", DefaultTileLayer: "TileLayer", OpenStreetMap: "OpenStreetMapLayer", VectorTileLayer: "VectorTileLayer", WCS: "WCSLayer", WMS: "WMSLayer", WebTiledLayer: "WebTileLayer" };
var m = { ...u, LinkChartLayer: "LinkChartLayer" };
var g = { ...d };
var T = { ...I };
async function G(e3, r2) {
  return f(await M(e3, r2), e3, r2);
}
async function f(e3, r2, a2) {
  const y = new e3();
  return y.read(r2, a2.context), "group" === y.type && ("GroupLayer" === r2.layerType ? await v(y, r2, a2) : b(r2) ? C(y, r2, a2.context) : A(r2) && await h(y, r2, a2.context)), await t(y, a2.context), y;
}
async function M(e3, n2) {
  var _a, _b;
  const l2 = n2.context, c2 = w(l2);
  let s2 = e3.layerType || e3.type;
  !s2 && (n2 == null ? void 0 : n2.defaultLayerType) && (s2 = n2.defaultLayerType);
  const p2 = c2[s2];
  let S3 = p2 ? a[p2] : a.UnknownLayer;
  if (b(e3)) {
    const t3 = l2 == null ? void 0 : l2.portal;
    if (e3.itemId) {
      const i = new S({ id: e3.itemId, portal: t3 });
      await i.load();
      const L2 = (await L(i, new e())).className || "UnknownLayer";
      S3 = a[L2];
    }
  } else "ArcGISFeatureLayer" === s2 ? e2(e3) || r(e3) ? S3 = a.MapNotesLayer : n(e3) ? S3 = a.RouteLayer : A(e3) && (S3 = a.GroupLayer) : ((_a = e3.wmtsInfo) == null ? void 0 : _a.url) && e3.wmtsInfo.layerIdentifier ? S3 = a.WMTSLayer : "WFS" === s2 && "2.0.0" !== ((_b = e3.wfsInfo) == null ? void 0 : _b.version) && (S3 = a.UnsupportedLayer);
  return S3();
}
function A(e3) {
  var _a, _b;
  if ("ArcGISFeatureLayer" !== e3.layerType || b(e3)) return false;
  return (((_b = (_a = e3.featureCollection) == null ? void 0 : _a.layers) == null ? void 0 : _b.length) ?? 0) > 1;
}
function b(e3) {
  return "Feature Collection" === e3.type;
}
function w(e3) {
  let r2;
  switch (e3.origin) {
    case "web-scene":
      switch (e3.layerContainerType) {
        case "basemap":
          r2 = S2;
          break;
        case "ground":
          r2 = s;
          break;
        case "tables":
          r2 = p;
          break;
        default:
          r2 = c;
      }
      break;
    case "link-chart":
      switch (e3.layerContainerType) {
        case "basemap":
          r2 = T;
          break;
        case "tables":
          r2 = g;
          break;
        default:
          r2 = m;
      }
      break;
    default:
      switch (e3.layerContainerType) {
        case "basemap":
          r2 = I;
          break;
        case "tables":
          r2 = d;
          break;
        default:
          r2 = u;
      }
  }
  return r2;
}
async function v(r2, a2, y) {
  const t3 = new V(), i = l(t3, Array.isArray(a2.layers) ? a2.layers : [], y);
  try {
    try {
      if (await i, "group" === r2.type) return r2.layers.addMany(t3), r2;
    } catch (L2) {
      r2.destroy();
      for (const e3 of t3) e3.destroy();
      throw L2;
    }
  } catch (L2) {
    throw L2;
  }
}
function C(e3, r2, a2) {
  r2.itemId && (e3.portalItem = new S({ id: r2.itemId, portal: a2 == null ? void 0 : a2.portal }), e3.when(() => {
    var _a, _b;
    const y = (y2) => {
      var _a2, _b2;
      const t3 = y2.layerId;
      W(y2, e3, r2, t3, a2);
      const i = (_b2 = (_a2 = r2.featureCollection) == null ? void 0 : _a2.layers) == null ? void 0 : _b2[t3];
      i && y2.read(i, a2);
    };
    (_a = e3.layers) == null ? void 0 : _a.forEach(y), (_b = e3.tables) == null ? void 0 : _b.forEach(y);
  }));
}
async function h(e3, r2, y) {
  var _a;
  const t3 = a.FeatureLayer, i = await t3(), L2 = r2.featureCollection, o = L2 == null ? void 0 : L2.showLegend, n2 = (_a = L2 == null ? void 0 : L2.layers) == null ? void 0 : _a.map((a2, t4) => {
    const L3 = new i();
    L3.read(a2, y);
    const n3 = { ...y, ignoreDefaults: true };
    return W(L3, e3, r2, t4, n3), null != o && L3.read({ showLegend: o }, n3), L3;
  });
  e3.layers.addMany(n2 ?? []);
}
function W(e3, r2, a2, y, t3) {
  var _a;
  e3.read({ id: `${r2.id}-sublayer-${y}`, visibility: ((_a = a2.visibleLayers) == null ? void 0 : _a.includes(y)) ?? true }, t3);
}

export {
  l,
  v
};
//# sourceMappingURL=chunk-4PVY4P6G.js.map
