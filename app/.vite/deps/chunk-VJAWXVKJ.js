import {
  b
} from "./chunk-5X74MKXM.js";
import {
  n as n2,
  t
} from "./chunk-MLOZK7WX.js";
import {
  V,
  n
} from "./chunk-AJSC5XSW.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a,
  w
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/core/support/OwningCollection.js
var n3 = class extends V {
  constructor(e) {
    super(e), this.addHandles([this.on("before-add", (e2) => {
      null == e2.item && e2.preventDefault();
    }), this.on("after-add", (e2) => this._own(e2.item)), this.on("after-remove", (e2) => this._release(e2.item))]);
  }
  get owner() {
    return this._get("owner");
  }
  set owner(e) {
    e !== this._get("owner") && (this._releaseAll(), this._set("owner", e), this._ownAll());
  }
  _ownAll() {
    for (const e of this.items) this._own(e);
  }
  _releaseAll() {
    for (const e of this.items) this._release(e);
  }
  _createNewInstance(e) {
    return this.itemType ? new (V.ofType(this.itemType.Type))(e) : new V(e);
  }
};
function l(e, t2) {
  return { type: e, cast: t, set(s) {
    const r2 = n2(s, this._get(t2), e);
    r2.owner = this, this._set(t2, r2);
  } };
}
r([m()], n3.prototype, "owner", null), n3 = r([a("esri.core.support.OwningCollection")], n3);

// node_modules/@arcgis/core/support/GraphicsCollection.js
var c = class extends n3 {
  _own(r2) {
    r2.layer && "remove" in r2.layer && r2.layer !== this.owner && r2.layer.remove(r2), r2.layer = this.owner;
  }
  _release(r2) {
    r2.layer === this.owner && (r2.layer = null);
  }
};
r([n({ Type: b, ensureType: w(b) })], c.prototype, "itemType", void 0), c = r([a("esri.support.GraphicsCollection")], c);

export {
  n3 as n,
  l,
  c
};
//# sourceMappingURL=chunk-VJAWXVKJ.js.map
