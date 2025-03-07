import {
  n
} from "./chunk-H263NTAU.js";
import {
  i
} from "./chunk-VDYWILM2.js";
import {
  d
} from "./chunk-2KG6WO5I.js";
import {
  r as r2
} from "./chunk-STBNLAGT.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/layers/support/ExportImageParameters.js
var n2 = { visible: "visibleSublayers", definitionExpression: "layerDefs", labelingInfo: "hasDynamicLayers", labelsVisible: "hasDynamicLayers", opacity: "hasDynamicLayers", minScale: "visibleSublayers", maxScale: "visibleSublayers", renderer: "hasDynamicLayers", source: "hasDynamicLayers" };
var y = class extends g {
  constructor(e) {
    super(e), this.floors = null, this.scale = 0;
  }
  destroy() {
    this.layer = null;
  }
  get dynamicLayers() {
    if (!this.hasDynamicLayers) return null;
    const e = this.visibleSublayers.map((e2) => {
      const r3 = n(this.floors, e2);
      return e2.toExportImageJSON(r3);
    });
    return e.length ? JSON.stringify(e) : null;
  }
  get hasDynamicLayers() {
    return this.layer && i(this.visibleSublayers, this.layer.serviceSublayers, this.layer.gdbVersion);
  }
  set layer(e) {
    this._get("layer") !== e && (this._set("layer", e), this.removeHandles("layer"), e && this.addHandles([e.allSublayers.on("change", () => this.notifyChange("visibleSublayers")), e.on("sublayer-update", (e2) => this.notifyChange(n2[e2.propertyName]))], "layer"));
  }
  get layers() {
    const e = this.visibleSublayers;
    return e ? e.length ? "show:" + e.map((e2) => e2.id).join(",") : "show:-1" : null;
  }
  get layerDefs() {
    var _a;
    const e = !!((_a = this.floors) == null ? void 0 : _a.length), r3 = this.visibleSublayers.filter((r4) => null != r4.definitionExpression || e && null != r4.floorInfo);
    return r3.length ? JSON.stringify(r3.reduce((e2, r4) => {
      const t = n(this.floors, r4), i2 = r2(t, r4.definitionExpression);
      return null != i2 && (e2[r4.id] = i2), e2;
    }, {})) : null;
  }
  get version() {
    this.commitProperty("layers"), this.commitProperty("layerDefs"), this.commitProperty("dynamicLayers");
    const e = this.layer;
    return e && (e.commitProperty("dpi"), e.commitProperty("imageFormat"), e.commitProperty("imageTransparency"), e.commitProperty("gdbVersion")), (this._get("version") || 0) + 1;
  }
  get visibleSublayers() {
    const e = [];
    if (!this.layer) return e;
    const r3 = this.layer.sublayers, s = this.scale, t = (r4) => {
      r4.visible && (0 === s || d(s, r4.minScale, r4.maxScale)) && (r4.sublayers ? r4.sublayers.forEach(t) : e.unshift(r4));
    };
    r3 && r3.forEach(t);
    const i2 = this._get("visibleSublayers");
    return !i2 || i2.length !== e.length || i2.some((r4, s2) => e[s2] !== r4) ? e : i2;
  }
  toJSON() {
    const e = this.layer;
    let r3 = { dpi: e.dpi, format: e.imageFormat, transparent: e.imageTransparency, gdbVersion: e.gdbVersion || null };
    return this.hasDynamicLayers && this.dynamicLayers ? r3.dynamicLayers = this.dynamicLayers : r3 = { ...r3, layers: this.layers, layerDefs: this.layerDefs }, r3;
  }
};
r([m({ readOnly: true })], y.prototype, "dynamicLayers", null), r([m()], y.prototype, "floors", void 0), r([m({ readOnly: true })], y.prototype, "hasDynamicLayers", null), r([m()], y.prototype, "layer", null), r([m({ readOnly: true })], y.prototype, "layers", null), r([m({ readOnly: true })], y.prototype, "layerDefs", null), r([m({ type: Number })], y.prototype, "scale", void 0), r([m({ readOnly: true })], y.prototype, "version", null), r([m({ readOnly: true })], y.prototype, "visibleSublayers", null), y = r([a("esri.layers.support.ExportImageParameters")], y);

export {
  y
};
//# sourceMappingURL=chunk-RHMRUA5L.js.map
