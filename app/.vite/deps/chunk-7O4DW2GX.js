import {
  a as a2
} from "./chunk-WJNMFEXQ.js";
import {
  n
} from "./chunk-SWBNCJYN.js";
import {
  S
} from "./chunk-5BULKNR2.js";
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
  G
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/analysis/Analysis.js
var l = 0;
var p = class extends S.JSONSupportMixin(a2.ClonableMixin(n.IdentifiableMixin(g))) {
  constructor(e) {
    super(e), this.id = `${Date.now().toString(16)}-analysis-${l++}`, this.title = null;
  }
  get parent() {
    return this._get("parent");
  }
  set parent(e) {
    const t = this.parent;
    if (null != t) switch (t.type) {
      case "line-of-sight":
      case "dimension":
      case "viewshed":
        t.releaseAnalysis(this);
        break;
      case "2d":
      case "3d":
        t.analyses.includes(this) && t.analyses.remove(this);
    }
    this._set("parent", e);
  }
  get isEditable() {
    return this.requiredPropertiesForEditing.every(G);
  }
};
r([m({ type: String, constructOnly: true, clonable: false })], p.prototype, "id", void 0), r([m({ type: String })], p.prototype, "title", void 0), r([m({ clonable: false, value: null })], p.prototype, "parent", null), r([m({ readOnly: true })], p.prototype, "isEditable", null), p = r([a("esri.analysis.Analysis")], p);
var c = p;

export {
  c
};
//# sourceMappingURL=chunk-7O4DW2GX.js.map
