import {
  e
} from "./chunk-M6FNW7GP.js";
import {
  F
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/core/accessorSupport/tracking/ObservationHandle.js
var s = class {
  constructor(r2, s2) {
    this._observers = r2, this._observer = s2;
  }
  remove() {
    F(this._observers, this._observer);
  }
};

// node_modules/@arcgis/core/core/accessorSupport/ObservableBase.js
var r = class {
  constructor() {
    this._observers = null, this.destroyed = false;
  }
  observe(e2) {
    if (this.destroyed || e2.destroyed) return t;
    null == this._observers && (this._observers = []);
    const r2 = this._observers;
    let o = false, i = false;
    const n = r2.length;
    for (let s2 = 0; s2 < n; ++s2) {
      const t2 = r2[s2];
      if (t2.destroyed) i = true;
      else if (t2 === e2) {
        o = true;
        break;
      }
    }
    return o || (r2.push(e2), i && this._removeDestroyedObservers()), new s(r2, e2);
  }
  _removeDestroyedObservers() {
    const e2 = this._observers;
    if (!e2 || 0 === e2.length) return;
    const s2 = e2.length;
    let r2 = 0;
    for (let t2 = 0; t2 < s2; ++t2) {
      for (; t2 + r2 < s2; ) {
        if (!e2[t2 + r2].destroyed) break;
        ++r2;
      }
      if (r2 > 0) {
        if (!(t2 + r2 < s2)) break;
        e2[t2] = e2[t2 + r2];
      }
    }
    e2.length = s2 - r2;
  }
  destroy() {
    if (this.destroyed) return;
    this.destroyed = true;
    const e2 = this._observers;
    if (null != e2) {
      for (const s2 of e2) s2.onCommitted();
      this._observers = null;
    }
  }
};
var t = e();

export {
  r
};
//# sourceMappingURL=chunk-577U4F6A.js.map
