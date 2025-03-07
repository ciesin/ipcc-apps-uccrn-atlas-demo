// node_modules/@arcgis/core/arcade/ImmutableArray.js
var t = class {
  constructor(t2 = []) {
    this._elements = t2;
  }
  length() {
    return this._elements.length;
  }
  get(t2) {
    return this._elements[t2];
  }
  toArray() {
    return this.slice();
  }
  slice(t2 = 0, e = this.length()) {
    const s = [];
    for (let r = t2; r < e; r++) s.push(this.get(r));
    return s;
  }
};

export {
  t
};
//# sourceMappingURL=chunk-TSDU5FXE.js.map
