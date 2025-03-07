import {
  c
} from "./chunk-W5EXEGLR.js";
import {
  p
} from "./chunk-XJOBEGIR.js";

// node_modules/@arcgis/core/symbols/cim/CIMResourceManager.js
var i = class {
  constructor() {
    this._resourceMap = /* @__PURE__ */ new Map(), this._inFlightResourceMap = /* @__PURE__ */ new Map(), this.geometryEngine = null, this.geometryEnginePromise = null;
  }
  destroy() {
    this._inFlightResourceMap.clear(), this._resourceMap.clear();
  }
  getResource(e) {
    return this._resourceMap.get(e) ?? null;
  }
  async fetchResource(e, i2) {
    const h = this._resourceMap.get(e);
    if (h) return { width: h.width, height: h.height };
    let r = this._inFlightResourceMap.get(e);
    return r ? r.then((e2) => ({ width: e2.width, height: e2.height })) : (r = p(e, i2), this._inFlightResourceMap.set(e, r), r.then((t) => (this._inFlightResourceMap.delete(e), this._resourceMap.set(e, t), { width: t.width, height: t.height }), () => ({ width: 0, height: 0 })));
  }
  deleteResource(e) {
    this._inFlightResourceMap.delete(e), this._resourceMap.delete(e);
  }
  loadFont(t) {
    return c(t);
  }
};

export {
  i
};
//# sourceMappingURL=chunk-V7B4KA6P.js.map
