import {
  D
} from "./chunk-CBVVZO37.js";
import {
  e
} from "./chunk-JST5QDP2.js";

// node_modules/@arcgis/core/core/sql/WhereClauseCache.js
var r = class {
  constructor(e2, r2) {
    this._cache = new e(e2), this._invalidCache = new e(r2);
  }
  get(t, r2) {
    const i = `${r2 == null ? void 0 : r2.uid}:${t}`, c = this._cache.get(i);
    if (c) return c;
    if (null != this._invalidCache.get(i)) return null;
    try {
      const c2 = D.create(t, { fieldsIndex: r2 });
      return this._cache.put(i, c2), c2;
    } catch (n) {
      return this._invalidCache.put(i, n), null;
    }
  }
  getError(t, e2) {
    const r2 = `${e2 == null ? void 0 : e2.uid}:${t}`;
    return this._invalidCache.get(r2) ?? null;
  }
};

export {
  r
};
//# sourceMappingURL=chunk-FF7WZBMV.js.map
