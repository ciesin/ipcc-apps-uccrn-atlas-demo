import {
  O,
  U,
  s3 as s
} from "./chunk-RYSF6YCR.js";

// node_modules/@arcgis/core/views/support/PropertiesPool.js
var o = class {
  constructor(r, o2) {
    this._owner = o2, this._properties = {}, this._afterDispatchHandle = null;
    for (const t in r) {
      const o3 = r[t], s2 = new s(o3, void 0, void 0, 2, 2);
      this._properties[t] = { pool: s2, acquired: [] };
    }
    this._afterDispatchHandle = U(() => this._release());
  }
  destroy() {
    this._afterDispatchHandle && (this._afterDispatchHandle.remove(), this._afterDispatchHandle = null);
    for (const e in this._properties) {
      const t = this._properties[e];
      for (const e2 of t.acquired) O(e2) || t.pool.release(e2);
      t.pool.destroy(), t.pool = null, t.acquired = null;
    }
    this._properties = null, this._owner = null;
  }
  get(e) {
    const t = this._owner._get(e), r = this._properties[e];
    let o2 = r.pool.acquire();
    for (r.acquired.push(o2); o2 === t; ) r.acquired.push(o2), o2 = r.pool.acquire();
    return o2;
  }
  _release() {
    for (const e in this._properties) {
      const t = this._properties[e];
      let o2 = 0;
      for (const e2 of t.acquired) O(e2) ? t.acquired[o2++] = e2 : t.pool.release(e2);
      t.acquired.length = o2;
    }
  }
};

export {
  o
};
//# sourceMappingURL=chunk-5DJJ57UM.js.map
