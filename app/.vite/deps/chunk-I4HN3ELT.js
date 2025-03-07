import {
  g
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  e,
  t
} from "./chunk-M6FNW7GP.js";

// node_modules/@arcgis/core/core/Evented.js
var i = class _i {
  constructor() {
    this._emitter = new _i.EventEmitter(this);
  }
  emit(e2, t2) {
    return this._emitter.emit(e2, t2);
  }
  on(e2, t2) {
    return this._emitter.on(e2, t2);
  }
  once(e2, t2) {
    return this._emitter.once(e2, t2);
  }
  hasEventListener(e2) {
    return this._emitter.hasEventListener(e2);
  }
};
!function(o) {
  class c {
    constructor(e2 = null) {
      this._target = e2, this._listenersMap = null;
    }
    clear() {
      var _a;
      (_a = this._listenersMap) == null ? void 0 : _a.clear(), this._listenersMap = null;
    }
    destroy() {
      this.clear();
    }
    emit(e2, t2) {
      var _a;
      let r2 = (_a = this._listenersMap) == null ? void 0 : _a.get(e2);
      if (!r2) return false;
      const s = this._target || this;
      let n = false;
      for (const i2 of r2.slice()) {
        const e3 = "deref" in i2 ? i2.deref() : i2;
        e3 ? e3 == null ? void 0 : e3.call(s, t2) : n = true;
      }
      return n && (r2 = r2.filter((e3) => !("deref" in e3) || null != e3.deref()), this._listenersMap.set(e2, r2)), r2.length > 0;
    }
    on(e2, t2) {
      if (Array.isArray(e2)) {
        const s = e2.map((e3) => this.on(e3, t2));
        return t(s);
      }
      if (e2.includes(",")) throw new TypeError("Evented.on() with a comma delimited string of event types is not supported");
      this._listenersMap ?? (this._listenersMap = /* @__PURE__ */ new Map());
      const n = this._listenersMap.get(e2) || [];
      return n.push(t2), this._listenersMap.set(e2, n), e(() => {
        var _a;
        const r2 = (_a = this._listenersMap) == null ? void 0 : _a.get(e2), s = (r2 == null ? void 0 : r2.indexOf(t2)) ?? -1;
        s >= 0 && r2.splice(s, 1);
      });
    }
    once(e2, t2) {
      const r2 = this.on(e2, (e3) => {
        r2.remove();
        const s = "deref" in t2 ? t2.deref() : t2;
        s == null ? void 0 : s.call(null, e3);
      });
      return r2;
    }
    hasEventListener(e2) {
      var _a;
      const t2 = (_a = this._listenersMap) == null ? void 0 : _a.get(e2);
      return null != t2 && t2.length > 0;
    }
  }
  o.EventEmitter = c, o.EventedMixin = (t2) => {
    let r2 = class extends t2 {
      constructor() {
        super(...arguments), this._emitter = new c();
      }
      destroy() {
        this._emitter.clear();
      }
      emit(e2, t3) {
        return this._emitter.emit(e2, t3);
      }
      on(e2, t3) {
        return this._emitter.on(e2, t3);
      }
      once(e2, t3) {
        return this._emitter.once(e2, t3);
      }
      hasEventListener(e2) {
        return this._emitter.hasEventListener(e2);
      }
    };
    return r2 = r([a("esri.core.Evented")], r2), r2;
  };
  let l = class extends g {
    constructor() {
      super(...arguments), this._emitter = new i.EventEmitter(this);
    }
    destroy() {
      this._emitter.clear();
    }
    emit(e2, t2) {
      return this._emitter.emit(e2, t2);
    }
    on(e2, t2) {
      return this._emitter.on(e2, t2);
    }
    once(e2, t2) {
      return this._emitter.once(e2, t2);
    }
    hasEventListener(e2) {
      return this._emitter.hasEventListener(e2);
    }
  };
  l = r([a("esri.core.Evented.EventedAccessor")], l), o.EventedAccessor = l;
}(i);

export {
  i
};
//# sourceMappingURL=chunk-I4HN3ELT.js.map
