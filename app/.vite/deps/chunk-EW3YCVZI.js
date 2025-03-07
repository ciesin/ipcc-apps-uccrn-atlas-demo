import {
  T,
  f2 as f
} from "./chunk-WZ7EFR6C.js";
import {
  a as a2
} from "./chunk-CVABZLLM.js";
import {
  p
} from "./chunk-SQ6MYL73.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  Z
} from "./chunk-F7TCEOHX.js";
import {
  d,
  g
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  _,
  a3 as a,
  x
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/mixins/operationalLayers.js
var e = { ArcGISAnnotationLayer: true, ArcGISDimensionLayer: true, ArcGISFeatureLayer: true, ArcGISImageServiceLayer: true, ArcGISImageServiceVectorLayer: true, ArcGISMapServiceLayer: true, ArcGISStreamLayer: true, ArcGISTiledImageServiceLayer: true, ArcGISTiledMapServiceLayer: true, BingMapsAerial: true, BingMapsHybrid: true, BingMapsRoad: true, CatalogLayer: true, CSV: true, GeoJSON: true, GeoRSS: true, GroupLayer: true, KML: true, KnowledgeGraphLayer: true, MediaLayer: true, OGCFeatureLayer: true, OrientedImageryLayer: true, SubtypeGroupLayer: true, VectorTileLayer: true, WCS: true, WFS: true, WMS: true, WebTiledLayer: true };
var r3 = { ArcGISImageServiceLayer: true, ArcGISImageServiceVectorLayer: true, ArcGISMapServiceLayer: true, ArcGISTiledImageServiceLayer: true, ArcGISTiledMapServiceLayer: true, BingMapsAerial: true, BingMapsHybrid: true, BingMapsRoad: true, OpenStreetMap: true, VectorTileLayer: true, WCS: true, WMS: true, WebTiledLayer: true };
var a3 = { ArcGISFeatureLayer: true, SubtypeGroupTable: true };
var S = { "web-scene/operational-layers": { ArcGISDimensionLayer: true, ArcGISFeatureLayer: true, ArcGISImageServiceLayer: true, ArcGISMapServiceLayer: true, ArcGISSceneServiceLayer: true, ArcGISTiledElevationServiceLayer: true, ArcGISTiledImageServiceLayer: true, ArcGISTiledMapServiceLayer: true, BuildingSceneLayer: true, CatalogLayer: true, CSV: true, GeoJSON: true, GroupLayer: true, IntegratedMesh3DTilesLayer: true, Object3DTilesLayer: true, IntegratedMeshLayer: true, KML: true, LineOfSightLayer: true, MediaLayer: true, OGCFeatureLayer: true, OrientedImageryLayer: true, PointCloudLayer: true, RasterDataLayer: true, VectorTileLayer: true, ViewshedLayer: true, Voxel: true, WCS: true, WFS: true, WMS: true, WebTiledLayer: true }, "web-scene/basemap": { ArcGISImageServiceLayer: true, ArcGISMapServiceLayer: true, ArcGISSceneServiceLayer: true, ArcGISTiledImageServiceLayer: true, ArcGISTiledMapServiceLayer: true, OpenStreetMap: true, VectorTileLayer: true, WCS: true, WMS: true, WebTiledLayer: true }, "web-scene/ground": { ArcGISTiledElevationServiceLayer: true, RasterDataElevationLayer: true }, "web-scene/tables": { ArcGISFeatureLayer: true }, "web-map/operational-layers": e, "web-map/basemap": r3, "web-map/tables": a3, "link-chart/operational-layers": { ...e, LinkChartLayer: true }, "link-chart/basemap": r3, "link-chart/tables": a3, "portal-item/operational-layers": { ArcGISFeatureLayer: true, ArcGISImageServiceLayer: true, ArcGISSceneServiceLayer: true, ArcGISStreamLayer: true, ArcGISTiledImageServiceLayer: true, BuildingSceneLayer: true, IntegratedMesh3DTilesLayer: true, IntegratedMeshLayer: true, MediaLayer: true, OrientedImageryLayer: true, PointCloudLayer: true, SubtypeGroupLayer: true, WCS: true }, "portal-item/tables": { ArcGISFeatureLayer: true, SubtypeGroupTable: true } };

// node_modules/@arcgis/core/layers/mixins/OperationalLayer.js
var b = (b2) => {
  let g2 = class extends b2 {
    constructor() {
      super(...arguments), this.persistenceEnabled = true, this.title = null;
    }
    readId(e2, r4, t) {
      var _a;
      return "Group Layer" === ((_a = t == null ? void 0 : t.portalItem) == null ? void 0 : _a.type) ? void 0 : e2;
    }
    writeListMode(e2, r4, t, i) {
      (i && "ground" === i.layerContainerType || e2 && g(this, t, {}, i)) && (r4[t] = e2);
    }
    writeOperationalLayerType(e2, r4, t) {
      e2 && (r4[t] = e2);
    }
    writeTitle(e2, r4) {
      r4.title = e2 ?? "Layer";
    }
    readVisibilityTimeExtent(e2) {
      return e2 ? p.fromArray(e2) : null;
    }
    writeVisibilityTimeExtent(e2, t, i, o2) {
      e2 && "tables" !== o2.layerContainerType && (e2.isEmpty ? (o2 == null ? void 0 : o2.messages) && o2.messages.push(new s("layer:invalid-visibilityTimeExtent", "visibilityTimeExtent cannot be empty")) : t[i] = e2.toArray());
    }
    read(e2, r4) {
      r4 && (r4.layer = this), d(this, e2, (r5) => super.read(e2, r5), r4);
    }
    write(e2, i) {
      var _a, _b;
      if (!this.persistenceEnabled && !(i == null ? void 0 : i.ignorePersistenceEnabled)) return null;
      if (i == null ? void 0 : i.origin) {
        const e3 = `${i.origin}/${i.layerContainerType || "operational-layers"}`, t = S[e3];
        let o3 = !!(t == null ? void 0 : t[this.operationalLayerType]);
        if ("ArcGISTiledElevationServiceLayer" === this.operationalLayerType && "web-scene/operational-layers" === e3 && (o3 = false), "ArcGISDimensionLayer" === this.operationalLayerType && "web-map/operational-layers" === e3 && (o3 = false), !o3) return (_a = i.messages) == null ? void 0 : _a.push(new s("layer:unsupported", `Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e3}'`, { layer: this })), null;
      }
      const o2 = super.write(e2, { ...i, layer: this }), s2 = !!i && !!i.messages && !!i.messages.filter((e3) => e3 instanceof s && "web-document-write:property-required" === e3.name).length;
      return Z(o2 == null ? void 0 : o2.url) ? ((_b = i == null ? void 0 : i.messages) == null ? void 0 : _b.push(new s("layer:invalid-url", `Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`, { layer: this })), null) : !this.url && s2 ? null : o2;
    }
    beforeSave() {
    }
  };
  return r([m({ type: String, json: { write: { ignoreOrigin: true }, origins: { "web-scene": { write: { isRequired: true, ignoreOrigin: true } }, "portal-item": { write: false } } } })], g2.prototype, "id", void 0), r([o("id", ["id"])], g2.prototype, "readId", null), r([m(T)], g2.prototype, "listMode", void 0), r([r2("listMode")], g2.prototype, "writeListMode", null), r([m({ type: String, readOnly: true, json: { read: false, write: { target: "layerType", ignoreOrigin: true }, origins: { "portal-item": { write: false }, "web-scene": { name: "layerType", read: false, write: { enabled: true, ignoreOrigin: true, layerContainerTypes: a2, isRequired: true } } } } })], g2.prototype, "operationalLayerType", void 0), r([r2("operationalLayerType")], g2.prototype, "writeOperationalLayerType", null), r([m(f)], g2.prototype, "opacity", void 0), r([m({ type: Boolean, readOnly: false })], g2.prototype, "persistenceEnabled", void 0), r([m({ type: String, json: { write: { ignoreOrigin: true, writerEnsuresNonNull: true }, origins: { "web-scene": { write: { isRequired: true, ignoreOrigin: true, writerEnsuresNonNull: true } }, "portal-item": { write: false } } }, value: "Layer" })], g2.prototype, "title", void 0), r([r2("title"), r2(["web-scene"], "title")], g2.prototype, "writeTitle", null), r([m({ type: p, json: { origins: { "web-scene": { write: { layerContainerTypes: a2 } } } } })], g2.prototype, "visibilityTimeExtent", void 0), r([o("visibilityTimeExtent")], g2.prototype, "readVisibilityTimeExtent", null), r([r2(["portal-item", "web-map", "web-scene"], "visibilityTimeExtent", { visibilityTimeExtent: { type: [[x, _]] } })], g2.prototype, "writeVisibilityTimeExtent", null), r([m({ type: Boolean, json: { name: "visibility", write: { layerContainerTypes: a2 } } })], g2.prototype, "visible", void 0), g2 = r([a("esri.layers.mixins.OperationalLayer")], g2), g2;
};

export {
  b
};
//# sourceMappingURL=chunk-EW3YCVZI.js.map
