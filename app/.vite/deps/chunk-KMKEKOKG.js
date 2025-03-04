import {
  u as u2
} from "./chunk-F4RJF7LN.js";
import {
  h
} from "./chunk-PV4EUSKO.js";
import {
  n as n2
} from "./chunk-SWBNCJYN.js";
import {
  i
} from "./chunk-I4HN3ELT.js";
import {
  p
} from "./chunk-7LY6RE4Z.js";
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
import {
  u2 as u
} from "./chunk-M6FNW7GP.js";
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/views/layers/LayerView.js
var u3 = class extends n2.IdentifiableMixin(p.EsriPromiseMixin(i.EventedMixin(g))) {
  get spatialReferenceSupported() {
    return true;
  }
  constructor(e) {
    super(e), this._updatingHandles = new h(), this.layer = null, this.parent = null;
  }
  initialize() {
    this.when().catch((e) => {
      var _a;
      if ("layerview:create-error" !== e.name) {
        const t = this.layer && this.layer.id || "no id", r2 = ((_a = this.layer) == null ? void 0 : _a.title) || "no title";
        n.getLogger(this).error("#resolve()", `Failed to resolve layer view (layer title: '${r2}', id: '${t}')`, e);
      }
    });
  }
  destroy() {
    this._updatingHandles = u(this._updatingHandles);
  }
  get fullOpacity() {
    var _a, _b;
    return (((_a = this.layer) == null ? void 0 : _a.opacity) ?? 1) * (((_b = this.parent) == null ? void 0 : _b.fullOpacity) ?? 1);
  }
  get suspended() {
    return this.destroyed || !this.canResume();
  }
  get suspendInfo() {
    return this.getSuspendInfo();
  }
  get legendEnabled() {
    var _a;
    return !this.suspended && true === ((_a = this.layer) == null ? void 0 : _a.legendEnabled);
  }
  get updating() {
    var _a;
    return !(!((_a = this._updatingHandles) == null ? void 0 : _a.updating) && !this.isUpdating());
  }
  get updatingProgress() {
    return this.updating ? 0 : 1;
  }
  get updateSuspended() {
    return this.suspended;
  }
  get visible() {
    var _a;
    return true === ((_a = this.layer) == null ? void 0 : _a.visible);
  }
  set visible(e) {
    this._overrideIfSome("visible", e);
  }
  get visibleAtCurrentScale() {
    return true;
  }
  get visibleAtCurrentTimeExtent() {
    var _a;
    const e = this.view.timeExtent, t = (_a = this.layer) == null ? void 0 : _a.visibilityTimeExtent;
    return !e || !t || !e.intersection(t).isEmpty;
  }
  canResume() {
    var _a, _b;
    const e = this.layer && "effectiveScaleRange" in this.layer ? this.layer.effectiveScaleRange : null;
    return this.visible && ((_a = this.layer) == null ? void 0 : _a.loaded) && this.parent && !this.parent.suspended && ((_b = this.view) == null ? void 0 : _b.ready) && u2(e) && this.visibleAtCurrentScale && this.visibleAtCurrentTimeExtent || false;
  }
  getSuspendInfo() {
    var _a, _b;
    const e = ((_a = this.parent) == null ? void 0 : _a.suspended) ? this.parent.suspendInfo : {}, t = this;
    ((_b = t.view) == null ? void 0 : _b.ready) || (e.viewNotReady = true), this.layer && this.layer.loaded || (e.layerNotLoaded = true);
    const r2 = this.layer && "effectiveScaleRange" in this.layer ? this.layer.effectiveScaleRange : null;
    return u2(r2) && this.visibleAtCurrentScale || (e.outsideScaleRange = true), this.visibleAtCurrentTimeExtent || (e.outsideVisibilityTimeExtent = true), this.visible || (e.layerInvisible = true), e;
  }
  isUpdating() {
    return false;
  }
};
r([m({ readOnly: true })], u3.prototype, "spatialReferenceSupported", null), r([m()], u3.prototype, "view", void 0), r([m()], u3.prototype, "fullOpacity", null), r([m()], u3.prototype, "layer", void 0), r([m()], u3.prototype, "parent", void 0), r([m({ readOnly: true })], u3.prototype, "suspended", null), r([m({ readOnly: true })], u3.prototype, "suspendInfo", null), r([m({ readOnly: true })], u3.prototype, "legendEnabled", null), r([m({ type: Boolean, readOnly: true })], u3.prototype, "updating", null), r([m({ readOnly: true })], u3.prototype, "updatingProgress", null), r([m()], u3.prototype, "updateSuspended", null), r([m()], u3.prototype, "visible", null), r([m({ readOnly: true })], u3.prototype, "visibleAtCurrentScale", null), r([m({ readOnly: true })], u3.prototype, "visibleAtCurrentTimeExtent", null), u3 = r([a("esri.views.layers.LayerView")], u3);
var y = u3;

export {
  y
};
//# sourceMappingURL=chunk-KMKEKOKG.js.map
