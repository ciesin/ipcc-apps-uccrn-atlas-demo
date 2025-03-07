import {
  C,
  d,
  p,
  v
} from "./chunk-YSPSOPLL.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  A
} from "./chunk-WCGYJMU3.js";
import {
  e
} from "./chunk-M6FNW7GP.js";

// node_modules/@arcgis/core/core/support/UpdatingHandles.js
var h = class extends g {
  constructor() {
    super(...arguments), this.updating = false, this._handleId = 0, this._scheduleHandleId = 0, this._pendingPromises = /* @__PURE__ */ new Set();
  }
  destroy() {
    this.removeAll();
  }
  add(s, e2, t = {}) {
    return this._installWatch(s, e2, t, d);
  }
  addWhen(s, e2, t = {}) {
    return this._installWatch(s, e2, t, p);
  }
  addOnCollectionChange(s, e2, { initial: i = false, final: n = false } = {}) {
    const r2 = ++this._handleId;
    return this.addHandles([v(s, "after-changes", this._createSyncUpdatingCallback(), C), v(s, "change", e2, { onListenerAdd: i ? (s2) => e2({ added: s2.toArray(), removed: [] }) : void 0, onListenerRemove: n ? (s2) => e2({ added: [], removed: s2.toArray() }) : void 0 })], r2), e(() => this.removeHandles(r2));
  }
  addPromise(s) {
    if (null == s) return s;
    const e2 = ++this._handleId;
    this.addHandles(e(() => {
      this._pendingPromises.delete(s) && (0 !== this._pendingPromises.size || this.hasHandles(c) || this._set("updating", false));
    }), e2), this._pendingPromises.add(s), this._set("updating", true);
    const i = () => this.removeHandles(e2);
    return s.then(i, i), s;
  }
  removeAll() {
    this._pendingPromises.clear(), this.removeAllHandles(), this._set("updating", false);
  }
  _installWatch(s, e2, i = {}, n) {
    const d2 = ++this._handleId;
    i.sync || this._installSyncUpdatingWatch(s, d2);
    const a2 = n(s, e2, i);
    return this.addHandles(a2, d2), e(() => this.removeHandles(d2));
  }
  _installSyncUpdatingWatch(s, e2) {
    const t = this._createSyncUpdatingCallback(), n = d(s, t, { sync: true, equals: () => false });
    return this.addHandles(n, e2), n;
  }
  _createSyncUpdatingCallback() {
    return () => {
      this.removeHandles(c), ++this._scheduleHandleId;
      const s = this._scheduleHandleId;
      this._get("updating") || this._set("updating", true), this.addHandles(A(() => {
        s === this._scheduleHandleId && (this._set("updating", this._pendingPromises.size > 0), this.removeHandles(c));
      }), c);
    };
  }
};
r([m({ readOnly: true })], h.prototype, "updating", void 0), h = r([a("esri.core.support.UpdatingHandles")], h);
var c = -42;

export {
  h
};
//# sourceMappingURL=chunk-PV4EUSKO.js.map
