import {
  s
} from "./chunk-L7T5Z7MG.js";
import {
  a
} from "./chunk-STW6HRXO.js";

// node_modules/@arcgis/core/core/Queue.js
var s2 = class {
  constructor(t = (t2) => t2.values().next().value) {
    this._peeker = t, this._observable = new s(), this._items = /* @__PURE__ */ new Set();
  }
  get length() {
    return a(this._observable), this._items.size;
  }
  clear() {
    0 !== this.length && (this._items.clear(), this._observable.notify());
  }
  last() {
    if (0 === this.length) return;
    let t;
    for (t of this._items) ;
    return t;
  }
  peek() {
    if (0 !== this.length) return this._peeker(this._items);
  }
  push(t) {
    this.contains(t) || (this._items.add(t), this._observable.notify());
  }
  contains(e) {
    return a(this._observable), this._items.has(e);
  }
  pop() {
    if (0 === this.length) return;
    const t = this.peek();
    return this._items.delete(t), this._observable.notify(), t;
  }
  popLast() {
    if (0 === this.length) return;
    const t = this.last();
    return this._items.delete(t), this._observable.notify(), t;
  }
  remove(t) {
    this.contains(t) && (this._items.delete(t), this._observable.notify());
  }
  filter(t) {
    const e = this.length;
    return this._items.forEach((e2) => {
      t(e2) || this._items.delete(e2);
    }), e !== this._items.size && this._observable.notify(), this;
  }
  *[Symbol.iterator]() {
    a(this._observable), yield* this._items;
  }
};

export {
  s2 as s
};
//# sourceMappingURL=chunk-SUVHJC6Z.js.map
