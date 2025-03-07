import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var t = (t2) => {
  let l = class extends t2 {
    constructor() {
      super(...arguments), this.minScale = 0, this.maxScale = 0;
    }
    get effectiveScaleRange() {
      const e = { minScale: this.minScale, maxScale: this.maxScale }, a2 = this.parent;
      a2 && "effectiveScaleRange" in a2 && r2(e, a2.effectiveScaleRange);
      const c = this._get("effectiveScaleRange");
      return c && c.minScale === e.minScale && c.maxScale === e.maxScale ? c : e;
    }
  };
  return r([m({ type: Number, nonNullable: true, json: { write: true } })], l.prototype, "minScale", void 0), r([m({ type: Number, nonNullable: true, json: { write: true } })], l.prototype, "maxScale", void 0), r([m({ readOnly: true })], l.prototype, "effectiveScaleRange", null), l = r([a("esri.layers.mixins.ScaleRangeLayer")], l), l;
};
function r2(e, a2) {
  return e.minScale = e.minScale > 0 ? a2.minScale > 0 ? Math.min(e.minScale, a2.minScale) : e.minScale : a2.minScale, e.maxScale = e.maxScale > 0 ? a2.maxScale > 0 ? Math.max(e.maxScale, a2.maxScale) : e.maxScale : a2.maxScale, e;
}

export {
  t
};
//# sourceMappingURL=chunk-DWXK7D3B.js.map
