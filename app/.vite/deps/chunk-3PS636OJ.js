import {
  s
} from "./chunk-L7T5Z7MG.js";
import {
  a
} from "./chunk-STW6HRXO.js";

// node_modules/@arcgis/core/core/ReactiveSet.js
var t = class {
  constructor(e) {
    this._observable = new s(), this._set = new Set(e);
  }
  get size() {
    return a(this._observable), this._set.size;
  }
  add(e) {
    const s2 = this._set.size;
    return this._set.add(e), this._set.size !== s2 && this._observable.notify(), this;
  }
  clear() {
    this._set.size > 0 && (this._set.clear(), this._observable.notify());
  }
  delete(e) {
    const s2 = this._set.delete(e);
    return s2 && this._observable.notify(), s2;
  }
  entries() {
    return a(this._observable), this._set.entries();
  }
  forEach(s2, t2) {
    a(this._observable), this._set.forEach((e, r) => s2.call(t2, e, r, this), t2);
  }
  has(s2) {
    return a(this._observable), this._set.has(s2);
  }
  keys() {
    return a(this._observable), this._set.keys();
  }
  values() {
    return a(this._observable), this._set.values();
  }
  [Symbol.iterator]() {
    return a(this._observable), this._set[Symbol.iterator]();
  }
  [Symbol.dispose]() {
    this._observable.destroy();
  }
  get [Symbol.toStringTag]() {
    return this._set[Symbol.toStringTag];
  }
};

export {
  t
};
//# sourceMappingURL=chunk-3PS636OJ.js.map
