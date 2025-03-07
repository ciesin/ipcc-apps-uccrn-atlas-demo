import {
  n as n2
} from "./chunk-45XNKFWX.js";
import {
  n as n3
} from "./chunk-MLOZK7WX.js";
import {
  f
} from "./chunk-NTUX5M6N.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  S
} from "./chunk-M6FNW7GP.js";
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/support/collectionUtils.js
function t(t2) {
  return new n2({ getCollections: () => [t2.tables, t2.layers], getChildrenFunction: (e) => {
    const t3 = [];
    return "tables" in e && t3.push(e.tables), "layers" in e && t3.push(e.layers), t3;
  }, itemFilterFunction: (e) => {
    const t3 = e.parent;
    return !!t3 && "tables" in t3 && t3.tables.includes(e);
  } });
}
function n4(e) {
  for (const t2 of e.values()) t2 == null ? void 0 : t2.destroy();
  e.clear();
}

// node_modules/@arcgis/core/support/LayersMixin.js
function d(e, r2, t2) {
  let s, o;
  if (e) for (let a3 = 0, i = e.length; a3 < i; a3++) {
    if (s = e.at(a3), (s == null ? void 0 : s[r2]) === t2) return s;
    if ("group" === (s == null ? void 0 : s.type) && (o = d(s.layers, r2, t2), o)) return o;
  }
}
var l = (l3) => {
  let y = class extends l3 {
    constructor(...e) {
      super(...e), this.layers = new V();
      const t2 = (e2) => {
        e2.parent && "remove" in e2.parent && e2.parent.remove(e2);
      }, o = (e2) => {
        e2.parent = this, this.layerAdded(e2), "elevation" !== e2.type && "base-elevation" !== e2.type || n.getLogger(this).error(`Layer 'title:${e2.title}, id:${e2.id}' of type '${e2.type}' is not supported as an operational layer and will therefore be ignored.`);
      }, a3 = (e2) => {
        e2.parent = null, this.layerRemoved(e2);
      };
      this.addHandles([this.layers.on("before-add", (e2) => {
        if (e2.item === this) return e2.preventDefault(), void n.getLogger(this).error("#add()", "Cannot add layer to itself.");
        t2(e2.item);
      }), this.layers.on("after-add", (e2) => o(e2.item)), this.layers.on("after-remove", (e2) => a3(e2.item))]);
    }
    destroy() {
      const e = this.layers.toArray();
      for (const r2 of e) r2.destroy();
      this.layers.destroy();
    }
    set layers(e) {
      this._set("layers", n3(e, this._get("layers")));
    }
    add(e, r2) {
      const t2 = this.layers;
      if (r2 = t2.getNextIndex(r2), e instanceof f) {
        const s = e;
        s.parent === this ? this.reorder(s, r2) : t2.add(s, r2);
      } else S(e) ? e.then((e2) => {
        this.destroyed || this.add(e2, r2);
      }) : n.getLogger(this).error("#add()", "The item being added is not a Layer or a Promise that resolves to a Layer.");
    }
    addMany(e, r2) {
      const t2 = this.layers;
      let s = t2.getNextIndex(r2);
      e.slice().forEach((e2) => {
        e2.parent !== this ? (t2.add(e2, s), s += 1) : this.reorder(e2, s);
      });
    }
    findLayerById(e) {
      return d(this.layers, "id", e);
    }
    findLayerByUid(e) {
      return d(this.layers, "uid", e);
    }
    remove(e) {
      return this.layers.remove(e);
    }
    removeMany(e) {
      return this.layers.removeMany(e);
    }
    removeAll() {
      return this.layers.removeAll();
    }
    reorder(e, r2) {
      return this.layers.reorder(e, r2);
    }
    layerAdded(e) {
    }
    layerRemoved(e) {
    }
  };
  return r([m()], y.prototype, "layers", null), y = r([a("esri.support.LayersMixin")], y), y;
};

// node_modules/@arcgis/core/support/TablesMixin.js
var a2 = /* @__PURE__ */ new Set(["feature", "subtype-group"]);
function n5(t2, e, r2) {
  if (t2) for (let s = 0, o = t2.length; s < o; s++) {
    const o2 = t2.at(s);
    if (o2[e] === r2) return o2;
    if ("group" === (o2 == null ? void 0 : o2.type)) {
      const t3 = n5(o2.tables, e, r2);
      if (t3) return t3;
    }
  }
}
var l2 = (l3) => {
  let p = class extends l3 {
    constructor(...t2) {
      super(...t2), this.tables = new V(), this.addHandles([this.tables.on("after-add", (t3) => {
        const e = t3.item;
        e.parent && e.parent !== this && "tables" in e.parent && e.parent.tables.remove(e), e.parent = this, a2.has(e.type) || n.getLogger(this).error(`Layer 'title:${e.title}, id:${e.id}' of type '${e.type}' is not supported as a table and will therefore be ignored.`);
      }), this.tables.on("after-remove", (t3) => {
        t3.item.parent = null;
      })]);
    }
    destroy() {
      const t2 = this.tables.toArray();
      for (const e of t2) e.destroy();
      this.tables.destroy();
    }
    set tables(t2) {
      this._set("tables", n3(t2, this._get("tables")));
    }
    findTableById(t2) {
      return n5(this.tables, "id", t2);
    }
    findTableByUid(t2) {
      return n5(this.tables, "uid", t2);
    }
  };
  return r([m()], p.prototype, "tables", null), p = r([a("esri.support.TablesMixin")], p), p;
};

export {
  t,
  n4 as n,
  l,
  l2
};
//# sourceMappingURL=chunk-WNY2UW4Q.js.map
