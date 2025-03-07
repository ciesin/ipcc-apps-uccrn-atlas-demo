import {
  d
} from "./chunk-FK3WBTHH.js";
import {
  a as a2,
  n
} from "./chunk-TOMXDOXB.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  e,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/support/FeatureEffect.js
var d2;
var f = { read: { reader: n }, write: { writer: a2, overridePolicy() {
  return { allowNull: null != this.excludedEffect, isRequired: null == this.excludedEffect };
} } };
var n2 = { read: { reader: n }, write: { writer: a2, overridePolicy() {
  return { allowNull: null != this.includedEffect, isRequired: null == this.includedEffect };
} } };
var a3 = { name: "showExcludedLabels", default: true };
var p = d2 = class extends S {
  constructor(e2) {
    super(e2), this.filter = null, this.includedEffect = null, this.excludedEffect = null, this.excludedLabelsVisible = false;
  }
  write(e2, t) {
    var _a, _b;
    const l = super.write(e2, t);
    if (t == null ? void 0 : t.origin) {
      if (l.filter) {
        const e3 = Object.keys(l.filter);
        if (e3.length > 1 || "where" !== e3[0]) return (_a = t.messages) == null ? void 0 : _a.push(new s("web-document-write:unsupported-feature-effect", "Invalid feature effect 'filter'. A filter can only contain a 'where' property", { layer: t.layer, effect: this })), null;
      }
      if ("showExcludedLabels" in l) return (_b = t.messages) == null ? void 0 : _b.push(new s("web-document-write:unsupported-feature-effect", "Invalid value for property 'excludedLabelsVisible' which should always be 'true'", { layer: t.layer, effect: this })), null;
    }
    return l;
  }
  clone() {
    return new d2({ filter: null != this.filter ? this.filter.clone() : null, includedEffect: this.includedEffect, excludedEffect: this.excludedEffect, excludedLabelsVisible: this.excludedLabelsVisible });
  }
};
r([m({ type: d, json: { write: { allowNull: true, writer(e2, r2, t, i) {
  const o = e2 == null ? void 0 : e2.write({}, i);
  o && 0 !== Object.keys(o).length ? e(t, o, r2) : e(t, null, r2);
} } } })], p.prototype, "filter", void 0), r([m({ json: { read: n, write: { writer: a2, allowNull: true }, origins: { "web-map": f, "portal-item": f } } })], p.prototype, "includedEffect", void 0), r([m({ json: { read: n, write: { writer: a2, allowNull: true }, origins: { "web-map": n2, "portal-item": n2 } } })], p.prototype, "excludedEffect", void 0), r([m({ type: Boolean, json: { write: true, name: "showExcludedLabels", origins: { "web-map": a3, "portal-item": a3 } } })], p.prototype, "excludedLabelsVisible", void 0), p = d2 = r([a("esri.layers.support.FeatureEffect")], p);
var w = p;

export {
  w
};
//# sourceMappingURL=chunk-KS56T55N.js.map
