import {
  e
} from "./chunk-OLVQKB2U.js";
import {
  h
} from "./chunk-RDJPXK25.js";
import {
  o
} from "./chunk-4JTNLE52.js";
import {
  pt
} from "./chunk-F7TFMQ3A.js";
import {
  B,
  u as u2
} from "./chunk-XEBZUAYT.js";
import {
  u
} from "./chunk-G34KEQQG.js";
import {
  i
} from "./chunk-I4HN3ELT.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  G
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/layers/graphics/data/FeatureStore.js
var m = u2();
var f = class {
  constructor(e2) {
    this.geometryInfo = e2, this._boundsStore = new o(), this._featuresById = /* @__PURE__ */ new Map(), this._usedMemory = 0, this.events = new i(), this.featureAdapter = e;
  }
  get usedMemory() {
    return this._usedMemory;
  }
  get geometryType() {
    return this.geometryInfo.geometryType;
  }
  get hasM() {
    return this.geometryInfo.hasM;
  }
  get hasZ() {
    return this.geometryInfo.hasZ;
  }
  get numFeatures() {
    return this._featuresById.size;
  }
  get fullBounds() {
    return this._boundsStore.fullBounds;
  }
  get storeStatistics() {
    let e2 = 0;
    return this._featuresById.forEach((t) => {
      null != t.geometry && t.geometry.coords && (e2 += t.geometry.coords.length);
    }), { featureCount: this._featuresById.size, vertexCount: e2 / (this.hasZ ? this.hasM ? 4 : 3 : this.hasM ? 3 : 2) };
  }
  getFullExtent(e2) {
    if (null == this.fullBounds) return null;
    const [t, r, s2, o2] = this.fullBounds;
    return { xmin: t, ymin: r, xmax: s2, ymax: o2, spatialReference: h(e2) };
  }
  add(e2) {
    this._add(e2), this._emitChanged();
  }
  addMany(e2) {
    for (const t of e2) this._add(t);
    this._emitChanged();
  }
  upsertMany(t) {
    const r = t.map((e2) => this._upsert(e2));
    return this._emitChanged(), r.filter(G);
  }
  clear() {
    this._featuresById.clear(), this._boundsStore.clear(), this._emitChanged(), this._usedMemory = 0;
  }
  removeById(e2) {
    const t = this._featuresById.get(e2);
    return t ? (this._remove(t), this._emitChanged(), t) : null;
  }
  removeManyById(e2) {
    this._boundsStore.invalidateIndex();
    for (const t of e2) {
      const e3 = this._featuresById.get(t);
      e3 && this._remove(e3);
    }
    this._emitChanged();
  }
  forEachBounds(e2, t) {
    for (const r of e2) {
      const e3 = this._boundsStore.get(r.objectId);
      e3 && t(B(m, e3));
    }
  }
  getFeature(e2) {
    return this._featuresById.get(e2);
  }
  has(e2) {
    return this._featuresById.has(e2);
  }
  forEach(e2) {
    this._featuresById.forEach((t) => e2(t));
  }
  forEachInBounds(e2, t) {
    this._boundsStore.forEachInBounds(e2, (e3) => {
      t(this._featuresById.get(e3));
    });
  }
  _emitChanged() {
    this.events.emit("changed", void 0);
  }
  _add(e2) {
    var _a, _b, _c, _d;
    if (!e2) return;
    const r = e2.objectId;
    if (null == r) return void n.getLogger("esri.layers.graphics.data.FeatureStore").error(new s("featurestore:invalid-feature", "feature id is missing", { feature: e2 }));
    const o2 = this._featuresById.get(r);
    let i2;
    if (o2 ? (e2.displayId = o2.displayId, i2 = this._boundsStore.get(r), this._boundsStore.delete(r), this._usedMemory -= ((_a = this.estimateFeatureUsedMemory) == null ? void 0 : _a.call(this, o2)) ?? 0) : null != this.onFeatureAdd && this.onFeatureAdd(e2), !((_c = (_b = e2.geometry) == null ? void 0 : _b.coords) == null ? void 0 : _c.length)) return this._boundsStore.set(r, null), void this._featuresById.set(r, e2);
    i2 = pt(null != i2 ? i2 : u(), e2.geometry, this.geometryInfo.hasZ, this.geometryInfo.hasM), null != i2 && this._boundsStore.set(r, i2), this._featuresById.set(r, e2), this._usedMemory += ((_d = this.estimateFeatureUsedMemory) == null ? void 0 : _d.call(this, e2)) ?? 0;
  }
  _upsert(e2) {
    var _a, _b;
    const r = e2 == null ? void 0 : e2.objectId;
    if (null == r) return n.getLogger("esri.layers.graphics.data.FeatureStore").error(new s("featurestore:invalid-feature", "feature id is missing", { feature: e2 })), null;
    const o2 = this._featuresById.get(r);
    if (!o2) return this._add(e2), e2;
    this._usedMemory -= ((_a = this.estimateFeatureUsedMemory) == null ? void 0 : _a.call(this, o2)) ?? 0;
    const { geometry: i2, attributes: a } = e2;
    for (const t in a) o2.attributes[t] = a[t];
    return i2 && (o2.geometry = i2, this._boundsStore.set(r, pt(u(), i2, this.geometryInfo.hasZ, this.geometryInfo.hasM) ?? null)), this._usedMemory += ((_b = this.estimateFeatureUsedMemory) == null ? void 0 : _b.call(this, o2)) ?? 0, o2;
  }
  _remove(e2) {
    var _a;
    null != this.onFeatureRemove && this.onFeatureRemove(e2);
    const t = e2.objectId;
    return this._boundsStore.delete(t), this._featuresById.delete(t), this._usedMemory -= ((_a = this.estimateFeatureUsedMemory) == null ? void 0 : _a.call(this, e2)) ?? 0, e2;
  }
};

export {
  f
};
//# sourceMappingURL=chunk-BFWSC7OC.js.map
