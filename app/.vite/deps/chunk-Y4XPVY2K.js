// node_modules/@arcgis/core/views/2d/support/Timeline.js
var s = (s2) => s2.includes("Brush");
var e = class {
  constructor() {
    this._names = /* @__PURE__ */ new Map();
  }
  begin(e2) {
    this._names.has(e2) || (this._names.set(e2, false), s(e2) && this.record("Esri.FirstDraw"), performance.mark(`Esri.${e2}.Start`));
  }
  end(s2) {
    this._names.has(s2) && !this._names.get(s2) && (this._names.set(s2, true), performance.mark(`Esri.${s2}.End`));
  }
  record(s2) {
    this._names.has(s2) || (this._names.set(s2, true), performance.mark(`Esri.${s2}`));
  }
};

export {
  e
};
//# sourceMappingURL=chunk-Y4XPVY2K.js.map
