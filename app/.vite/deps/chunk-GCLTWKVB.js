import {
  d,
  e,
  l
} from "./chunk-LVOCICBG.js";
import {
  a as a2
} from "./chunk-CVABZLLM.js";
import {
  I
} from "./chunk-6REABBOQ.js";
import {
  p
} from "./chunk-SQ6MYL73.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/layers/mixins/TemporalLayer.js
var f = { type: Boolean, json: { read: { source: "timeAnimation" }, write: { target: "timeAnimation", layerContainerTypes: a2 } } };
var l2 = (i) => {
  let l3 = class extends i {
    constructor() {
      super(...arguments), this.timeExtent = null, this.timeOffset = null, this.useViewTime = true;
    }
    readOffset(e2, t) {
      const o2 = t.timeInfo.exportOptions;
      if (!o2) return null;
      const r2 = o2.timeOffset, i2 = e.fromJSON(o2.timeOffsetUnits);
      return r2 && i2 ? new l({ value: r2, unit: i2 }) : null;
    }
    set timeInfo(e2) {
      I(e2, this.fieldsIndex), this._set("timeInfo", e2);
    }
  };
  return r([m({ type: p, json: { write: false } })], l3.prototype, "timeExtent", void 0), r([m({ type: l })], l3.prototype, "timeOffset", void 0), r([o("service", "timeOffset", ["timeInfo.exportOptions"])], l3.prototype, "readOffset", null), r([m({ value: null, type: d, json: { write: true, origins: { "web-document": { read: false, write: false }, "portal-item": { read: false, write: false } } } })], l3.prototype, "timeInfo", null), r([m(f)], l3.prototype, "useViewTime", void 0), l3 = r([a("esri.layers.mixins.TemporalLayer")], l3), l3;
};

export {
  f,
  l2 as l
};
//# sourceMappingURL=chunk-GCLTWKVB.js.map
