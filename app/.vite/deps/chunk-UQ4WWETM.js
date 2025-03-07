import {
  s
} from "./chunk-L7T5Z7MG.js";
import {
  a
} from "./chunk-STW6HRXO.js";

// node_modules/@arcgis/core/core/ReactiveMap.js
var s2 = class {
  constructor(e) {
    this._observable = new s(), this._map = new Map(e);
  }
  get size() {
    return a(this._observable), this._map.size;
  }
  clear() {
    this._map.size > 0 && (this._map.clear(), this._observable.notify());
  }
  delete(e) {
    const t = this._map.delete(e);
    return t && this._observable.notify(), t;
  }
  entries() {
    return a(this._observable), this._map.entries();
  }
  forEach(t, s3) {
    a(this._observable), this._map.forEach((e, r) => t.call(s3, e, r, this), s3);
  }
  get(t) {
    return a(this._observable), this._map.get(t);
  }
  has(t) {
    return a(this._observable), this._map.has(t);
  }
  keys() {
    return a(this._observable), this._map.keys();
  }
  set(e, t) {
    return this._map.set(e, t), this._observable.notify(), this;
  }
  values() {
    return a(this._observable), this._map.values();
  }
  [Symbol.iterator]() {
    return a(this._observable), this._map[Symbol.iterator]();
  }
  [Symbol.dispose]() {
    this._observable.destroy();
  }
  get [Symbol.toStringTag]() {
    return this._map[Symbol.toStringTag];
  }
};

export {
  s2 as s
};
//# sourceMappingURL=chunk-UQ4WWETM.js.map
