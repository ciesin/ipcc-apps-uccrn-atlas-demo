import {
  d2 as d,
  e as e2,
  u
} from "./chunk-5BULKNR2.js";
import {
  e,
  g,
  n2 as n,
  o,
  r2,
  t2
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  t
} from "./chunk-STW6HRXO.js";
import {
  a
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/core/accessorSupport/MultiOriginStore.js
var r3 = class _r {
  constructor() {
    this._propertyOriginMap = /* @__PURE__ */ new Map(), this._originStores = new Array(r2), this._values = /* @__PURE__ */ new Map(), this.multipleOriginsSupported = true;
  }
  clone(i) {
    const o2 = new _r(), n2 = this._originStores[e.DEFAULTS];
    n2 && n2.forEach((s, r4) => {
      o2.set(r4, a(s), e.DEFAULTS);
    });
    for (let r4 = e.SERVICE; r4 < r2; r4++) {
      const s = this._originStores[r4];
      s && s.forEach((s2, e3) => {
        i && i.has(e3) || o2.set(e3, a(s2), r4);
      });
    }
    return o2;
  }
  get(t3, s) {
    const e3 = void 0 === s ? this._values : this._originStores[s];
    return e3 ? e3.get(t3) : void 0;
  }
  keys(t3) {
    const s = null == t3 ? this._values : this._originStores[t3];
    return s ? [...s.keys()] : [];
  }
  set(t3, s, r4 = e.USER) {
    let i = this._originStores[r4];
    if (i || (i = /* @__PURE__ */ new Map(), this._originStores[r4] = i), i.set(t3, s), !this._values.has(t3) || this._propertyOriginMap.get(t3) <= r4) {
      const e3 = this._values.get(t3);
      return this._values.set(t3, s), this._propertyOriginMap.set(t3, r4), e3 !== s;
    }
    return false;
  }
  delete(t3, s = e.USER) {
    const r4 = this._originStores[s];
    if (!r4) return;
    const i = r4.get(t3);
    if (r4.delete(t3), this._values.has(t3) && this._propertyOriginMap.get(t3) === s) {
      this._values.delete(t3);
      for (let e3 = s - 1; e3 >= 0; e3--) {
        const s2 = this._originStores[e3];
        if (s2 && s2.has(t3)) {
          this._values.set(t3, s2.get(t3)), this._propertyOriginMap.set(t3, e3);
          break;
        }
      }
    }
    return i;
  }
  has(t3, s) {
    const e3 = void 0 === s ? this._values : this._originStores[s];
    return !!e3 && e3.has(t3);
  }
  revert(t3, s) {
    for (; s > 0 && !this.has(t3, s); ) --s;
    const e3 = this._originStores[s], r4 = e3 == null ? void 0 : e3.get(t3), i = this._values.get(t3);
    return this._values.set(t3, r4), this._propertyOriginMap.set(t3, s), i !== r4;
  }
  originOf(t3) {
    return this._propertyOriginMap.get(t3) || e.DEFAULTS;
  }
  forEach(t3) {
    this._values.forEach(t3);
  }
};

// node_modules/@arcgis/core/core/ReadOnlyMultiOriginJSONSupport.js
var u2 = (t3) => {
  let u3 = class extends t3 {
    constructor(...r4) {
      super(...r4);
      const t4 = t(this), e3 = t4.store, i = new r3();
      t4.store = i, e2(t4, e3, i);
    }
    read(r4, t4) {
      u(this, r4, t4);
    }
    getAtOrigin(r4, t4) {
      const s = a3(this), o2 = n(t4);
      if ("string" == typeof r4) return s.get(r4, o2);
      const i = {};
      return r4.forEach((r5) => {
        i[r5] = s.get(r5, o2);
      }), i;
    }
    originOf(r4) {
      return t2(this.originIdOf(r4));
    }
    originIdOf(r4) {
      return a3(this).originOf(r4);
    }
    revert(r4, t4) {
      const s = a3(this), o2 = n(t4), i = t(this);
      let c;
      c = "string" == typeof r4 ? "*" === r4 ? s.keys(o2) : [r4] : r4, c.forEach((r5) => {
        i.invalidate(r5), s.revert(r5, o2), i.commit(r5);
      });
    }
  };
  return u3 = r([a2("esri.core.ReadOnlyMultiOriginJSONSupport")], u3), u3;
};
function a3(r4) {
  return t(r4).store;
}
var f = class extends u2(g) {
};
f = r([a2("esri.core.ReadOnlyMultiOriginJSONSupport")], f);

// node_modules/@arcgis/core/core/MultiOriginJSONSupport.js
var l = (t3) => {
  let s = class extends t3 {
    constructor(...r4) {
      super(...r4);
    }
    clear(r4, t4 = "user") {
      return O(this).delete(r4, n(t4));
    }
    write(r4, t4) {
      return d(this, r4 = r4 || {}, t4), r4;
    }
    setAtOrigin(r4, t4, s2) {
      t(this).setAtOrigin(r4, t4, n(s2));
    }
    removeOrigin(r4) {
      const t4 = O(this), s2 = n(r4), e3 = t4.keys(s2);
      for (const o2 of e3) t4.originOf(o2) === s2 && t4.set(o2, t4.get(o2, s2), e.USER);
    }
    updateOrigin(r4, t4) {
      const s2 = O(this), i = n(t4), c = o(this, r4);
      for (let e3 = i + 1; e3 < r2; ++e3) s2.delete(r4, e3);
      s2.set(r4, c, i);
    }
    toJSON(r4) {
      return this.write({}, r4);
    }
  };
  return s = r([a2("esri.core.MultiOriginJSONSupport.WriteableMultiOriginJSONSupport")], s), s.prototype.toJSON.isDefaultToJSON = true, s;
};
function O(r4) {
  return t(r4).store;
}
var S = (t3) => {
  let e3 = class extends l(u2(t3)) {
    constructor(...r4) {
      super(...r4);
    }
  };
  return e3 = r([a2("esri.core.MultiOriginJSONSupport")], e3), e3;
};
var m = class extends S(g) {
};
m = r([a2("esri.core.MultiOriginJSONSupport")], m);

export {
  S,
  m
};
//# sourceMappingURL=chunk-JLW377TH.js.map
