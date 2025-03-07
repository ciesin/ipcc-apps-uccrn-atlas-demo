import {
  t
} from "./chunk-HS4XAAAN.js";

// node_modules/@arcgis/core/core/ObjectStack.js
var s = class {
  constructor(t2) {
    this._allocator = t2, this._items = [], this._itemsPtr = 0, this._grow();
  }
  get() {
    return 0 === this._itemsPtr && t(() => this._reset()), this._itemsPtr === this._items.length && this._grow(), this._items[this._itemsPtr++];
  }
  _reset() {
    const t2 = Math.min(3 * Math.max(8, this._itemsPtr), this._itemsPtr + 3 * i);
    this._items.length = Math.min(t2, this._items.length), this._itemsPtr = 0;
  }
  _grow() {
    for (let t2 = 0; t2 < Math.max(8, Math.min(this._items.length, i)); t2++) this._items.push(this._allocator());
  }
};
var i = 1024;

export {
  s
};
//# sourceMappingURL=chunk-NATJDMSF.js.map
