// node_modules/@arcgis/core/core/NestedMap.js
var t = class {
  constructor() {
    this._outer = /* @__PURE__ */ new Map();
  }
  clear() {
    this._outer.clear();
  }
  get empty() {
    return 0 === this._outer.size;
  }
  get(t2, e) {
    var _a;
    return (_a = this._outer.get(t2)) == null ? void 0 : _a.get(e);
  }
  getInner(t2) {
    return this._outer.get(t2);
  }
  set(t2, e, r) {
    const o = this._outer.get(t2);
    o ? o.set(e, r) : this._outer.set(t2, /* @__PURE__ */ new Map([[e, r]]));
  }
  delete(t2, e) {
    const r = this._outer.get(t2);
    r && (r.delete(e), 0 === r.size && this._outer.delete(t2));
  }
  forEach(t2) {
    this._outer.forEach((e, r) => t2(e, r));
  }
  forAll(t2) {
    for (const e of this._outer.values()) for (const r of e.values()) t2(r);
  }
};

export {
  t
};
//# sourceMappingURL=chunk-DSDGAHN5.js.map
