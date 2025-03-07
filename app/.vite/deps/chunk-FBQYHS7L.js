import {
  a as a2
} from "./chunk-CVABZLLM.js";
import {
  C
} from "./chunk-YSPSOPLL.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
import {
  s
} from "./chunk-BDBI2KVA.js";
import {
  i2 as i,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  d,
  k
} from "./chunk-M6FNW7GP.js";
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/mixins/refresh.js
var n2 = new V();
var o = /* @__PURE__ */ new WeakMap();
function f(e) {
  i2(e) && n2.push(new WeakRef(e));
}
function s2(e) {
  const r2 = n2.find((r3) => r3.deref() === e);
  r2 && n2.remove(r2);
}
function i2(e) {
  return null != e && "object" == typeof e && "refreshInterval" in e && "refresh" in e;
}
function c(e, r2) {
  return Number.isFinite(e) && Number.isFinite(r2) ? r2 <= 0 ? e : c(r2, e % r2) : 0;
}
var l = 0;
var a3 = 0;
function u() {
  const e = Date.now();
  let r2 = false;
  for (const t of n2) {
    const n3 = t.deref();
    if (n3) {
      if (n3.refreshInterval) {
        e - (o.get(n3) ?? 0) + 5 >= 6e4 * n3.refreshInterval && (o.set(n3, e), n3.refresh(e));
      }
    } else r2 = true;
  }
  if (r2) for (let t = n2.length - 1; t >= 0; t--) {
    n2.at(t).deref() || n2.removeAt(t);
  }
}
i(() => {
  const e = Date.now();
  let r2 = 0;
  for (const t of n2) {
    const n3 = t.deref();
    n3 && (r2 = c(Math.round(6e4 * n3.refreshInterval), r2), n3.refreshInterval ? o.get(n3) || o.set(n3, e) : o.delete(n3));
  }
  if (r2 !== a3) {
    if (a3 = r2, clearInterval(l), 0 === a3) return void (l = 0);
    l = setInterval(u, a3);
  }
}, C);

// node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js
var c2 = 0.1;
var f2 = (m2) => {
  let f3 = class extends m2 {
    constructor(...e) {
      super(...e), this.refreshInterval = 0, this.refreshTimestamp = 0, this._debounceHasDataChanged = k(() => this.hasDataChanged()), this.when().then(() => {
        this.destroyed || f(this);
      }, () => {
      });
    }
    destroy() {
      s2(this);
    }
    castRefreshInterval(e) {
      return e >= c2 ? e : e <= 0 ? 0 : c2;
    }
    get refreshParameters() {
      return { _ts: this.refreshTimestamp || null };
    }
    refresh(e = Date.now()) {
      d(this._debounceHasDataChanged()).then((r2) => {
        r2 && this._set("refreshTimestamp", e), this.emit("refresh", { dataChanged: r2 });
      }, (e2) => {
        n.getLogger(this).error(e2), this.emit("refresh", { dataChanged: false, error: e2 });
      });
    }
    async hasDataChanged() {
      return true;
    }
    get test() {
    }
  };
  return r([m({ type: Number, json: { write: true, origins: { "web-scene": { write: { enabled: true, layerContainerTypes: a2 } } } } })], f3.prototype, "refreshInterval", void 0), r([s("refreshInterval")], f3.prototype, "castRefreshInterval", null), r([m({ readOnly: true })], f3.prototype, "refreshTimestamp", void 0), r([m({ readOnly: true })], f3.prototype, "refreshParameters", null), f3 = r([a("esri.layers.mixins.RefreshableLayer")], f3), f3;
};

export {
  f2 as f
};
//# sourceMappingURL=chunk-FBQYHS7L.js.map
