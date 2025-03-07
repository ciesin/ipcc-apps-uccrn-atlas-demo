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

// node_modules/@arcgis/core/layers/support/ExportWMSImageParameters.js
var o = { visible: "visibleSublayers" };
var a2 = class extends g {
  constructor(e) {
    super(e), this.scale = 0;
  }
  set layer(e) {
    this._get("layer") !== e && (this._set("layer", e), this.removeHandles("layer"), e && this.addHandles([e.sublayers.on("change", () => this.notifyChange("visibleSublayers")), e.on("wms-sublayer-update", (e2) => this.notifyChange(o[e2.propertyName]))], "layer"));
  }
  get layers() {
    return this.visibleSublayers.filter(({ name: e }) => e).map(({ name: e }) => e).join();
  }
  get version() {
    this.commitProperty("layers");
    const e = this.layer;
    return e && e.commitProperty("imageTransparency"), (this._get("version") || 0) + 1;
  }
  get visibleSublayers() {
    const { layer: e, scale: r2 } = this, s = e == null ? void 0 : e.sublayers, t = [], o2 = (e2) => {
      const { minScale: s2, maxScale: a3, sublayers: l, visible: i } = e2;
      i && (0 === r2 || (0 === s2 || r2 <= s2) && (0 === a3 || r2 >= a3)) && (l ? l.forEach(o2) : t.push(e2));
    };
    return s == null ? void 0 : s.forEach(o2), t;
  }
  toJSON() {
    const { layer: e, layers: r2 } = this, { imageFormat: s, imageTransparency: t, version: o2 } = e;
    return { format: s, request: "GetMap", service: "WMS", styles: "", transparent: t ? "TRUE" : "FALSE", version: o2, layers: r2 };
  }
};
r([m()], a2.prototype, "layer", null), r([m({ readOnly: true })], a2.prototype, "layers", null), r([m({ type: Number })], a2.prototype, "scale", void 0), r([m({ readOnly: true })], a2.prototype, "version", null), r([m({ readOnly: true })], a2.prototype, "visibleSublayers", null), a2 = r([a("esri.layers.support.ExportWMSImageParameters")], a2);

export {
  a2 as a
};
//# sourceMappingURL=chunk-SZVRUNBU.js.map
