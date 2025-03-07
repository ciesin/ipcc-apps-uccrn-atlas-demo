import {
  q
} from "./chunk-LCBD3JEK.js";
import {
  x
} from "./chunk-IPFYNOOY.js";
import {
  a as a2
} from "./chunk-WJNMFEXQ.js";
import {
  l
} from "./chunk-XCRRZPKE.js";
import {
  f
} from "./chunk-WZBMMIVS.js";
import {
  p
} from "./chunk-YSPSOPLL.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  c,
  e3 as e,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/Graphic.js
var g;
function y(t) {
  if (!t) return null;
  const e2 = {};
  for (const r2 in t) {
    const i = f(t[r2]);
    i && (e2[r2] = i);
  }
  return 0 !== Object.keys(e2).length ? e2 : null;
}
function c2(t) {
  if (null == t) return null;
  const e2 = {};
  for (const r2 in t) {
    const i = t[r2];
    i && (e2[r2] = i.toJSON());
  }
  return 0 !== Object.keys(e2).length ? e2 : null;
}
var f2 = g = class extends a2.ClonableMixin(S) {
  constructor(t) {
    super(t), this.isAggregate = false, this.layer = null, this.origin = null, this.popupTemplate = null, this.sourceLayer = null, this._version = 0, Object.defineProperty(this, "uid", { value: e(), configurable: true }), Object.defineProperty(this, "_lastMeshTransform", { value: {}, configurable: true, writable: true, enumerable: false }), arguments.length > 1 && c(n.getLogger(this), "Graphic", { version: "4.30" });
  }
  initialize() {
    this._watchMeshGeometryChanges();
  }
  set aggregateGeometries(t) {
    const e2 = this._get("aggregateGeometries");
    JSON.stringify(e2) !== JSON.stringify(t) && this._set("aggregateGeometries", t);
  }
  set attributes(t) {
    const e2 = this._get("attributes");
    e2 !== t && (this._set("attributes", t), this._notifyLayer("attributes", e2, t));
  }
  set geometry(t) {
    const e2 = this._get("geometry");
    e2 !== t && (this._set("geometry", t), "mesh" !== (t == null ? void 0 : t.type) && this._notifyLayer("geometry", e2, t));
  }
  set symbol(t) {
    const e2 = this._get("symbol");
    e2 !== t && (this._set("symbol", t), this._notifyLayer("symbol", e2, t));
  }
  get version() {
    return this._version;
  }
  set visible(t) {
    const e2 = this._get("visible");
    e2 !== t && (this._set("visible", t), this._notifyLayer("visible", e2, t));
  }
  cloneShallow() {
    return new g({ aggregateGeometries: this.aggregateGeometries, attributes: this.attributes, geometry: this.geometry, isAggregate: this.isAggregate, layer: this.layer, popupTemplate: this.popupTemplate, sourceLayer: this.sourceLayer, symbol: this.symbol, visible: this.visible, origin: this.origin });
  }
  getEffectivePopupTemplate(t = false) {
    if (this.popupTemplate) return this.popupTemplate;
    const e2 = this.origin && "layer" in this.origin ? this.origin.layer : null;
    for (const r2 of [e2, this.sourceLayer, this.layer]) if (r2) {
      if ("popupTemplate" in r2 && r2.popupTemplate) return r2.popupTemplate;
      if (t && "defaultPopupTemplate" in r2 && null != r2.defaultPopupTemplate) return r2.defaultPopupTemplate;
    }
    return null;
  }
  getAttribute(t) {
    var _a;
    return (_a = this.attributes) == null ? void 0 : _a[t];
  }
  setAttribute(t, e2) {
    if (this.attributes) {
      const r2 = this.getAttribute(t);
      this.attributes[t] = e2, this._notifyLayer("attributes", r2, e2, t);
    } else this.attributes = { [t]: e2 }, this._notifyLayer("attributes", void 0, e2, t);
  }
  getObjectId() {
    return this.sourceLayer && "objectIdField" in this.sourceLayer && this.sourceLayer.objectIdField ? this.getAttribute(this.sourceLayer.objectIdField) : null;
  }
  toJSON() {
    var _a;
    return { aggregateGeometries: c2(this.aggregateGeometries), geometry: null != this.geometry ? this.geometry.toJSON() : null, symbol: null != this.symbol ? this.symbol.toJSON() : null, attributes: S.isSerializable(this.attributes) ? this.attributes.toJSON() : { ...this.attributes }, popupTemplate: ((_a = this.popupTemplate) == null ? void 0 : _a.toJSON()) ?? null };
  }
  notifyMeshTransformChanged(t = {}) {
    const { geometry: e2 } = this;
    if ("mesh" === (e2 == null ? void 0 : e2.type)) {
      const r2 = { origin: e2.origin, transform: e2.transform };
      this._notifyLayer("origin-transform", r2, r2, t.action);
    }
  }
  _notifyLayer(t, e2, r2, i) {
    if (this._version++, !this.layer || !("graphicChanged" in this.layer)) return;
    const s = { graphic: this, property: t, oldValue: e2, newValue: r2 };
    "origin-transform" === t && (s.action = i), "attributes" === t && (s.attributeName = i), this.layer.graphicChanged(s);
  }
  _watchMeshGeometryChanges() {
    this.addHandles([p(() => {
      var _a, _b;
      return "mesh" === ((_a = this.geometry) == null ? void 0 : _a.type) && this.geometry.vertexSpace.origin ? { localMatrix: (_b = this.geometry.transform) == null ? void 0 : _b.localMatrix, origin: this.geometry.vertexSpace.origin } : void 0;
    }, ({ localMatrix: t, origin: e2 }) => {
      this._lastMeshTransform.localMatrix === t && this._lastMeshTransform.origin === e2 || (this._lastMeshTransform.localMatrix = t, this._lastMeshTransform.origin = e2, this.notifyMeshTransformChanged());
    }), p(() => {
      var _a;
      return "mesh" === ((_a = this.geometry) == null ? void 0 : _a.type) ? { vertexAttributes: this.geometry.vertexAttributes } : void 0;
    }, () => {
      var _a;
      const t = this.geometry;
      "mesh" === (t == null ? void 0 : t.type) && t.vertexSpace.origin ? (this._lastMeshTransform.localMatrix = (_a = t.transform) == null ? void 0 : _a.localMatrix, this._lastMeshTransform.origin = t.vertexSpace.origin) : (this._lastMeshTransform.localMatrix = void 0, this._lastMeshTransform.origin = void 0), this._notifyLayer("geometry", this.geometry, this.geometry);
    }, { equals: (t, e2) => t === e2, sync: true })]);
  }
};
r([m({ value: null, json: { read: y } })], f2.prototype, "aggregateGeometries", null), r([m({ value: null })], f2.prototype, "attributes", null), r([m({ value: null, types: l, json: { read: f } })], f2.prototype, "geometry", null), r([m({ type: Boolean })], f2.prototype, "isAggregate", void 0), r([m({ clonable: "reference" })], f2.prototype, "layer", void 0), r([m({ clonable: "reference" })], f2.prototype, "origin", void 0), r([m({ type: q })], f2.prototype, "popupTemplate", void 0), r([m({ clonable: "reference" })], f2.prototype, "sourceLayer", void 0), r([m({ value: null, types: x })], f2.prototype, "symbol", null), r([m({ clonable: false, json: { read: false, write: false } })], f2.prototype, "_version", void 0), r([m({ type: Boolean, value: true })], f2.prototype, "visible", null), f2 = g = r([a("esri.Graphic")], f2);
var b = f2;

export {
  b
};
//# sourceMappingURL=chunk-5X74MKXM.js.map
