import {
  b,
  j,
  r,
  w
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/core/HeapSort.js
var o;
!function(o2) {
  const t2 = (o3, t3, n3, e3) => {
    let i2 = t3, c = t3;
    const l2 = n3 >>> 1, r3 = o3[i2 - 1];
    for (; c <= l2; ) {
      c = i2 << 1, c < n3 && e3(o3[c - 1], o3[c]) < 0 && ++c;
      const t4 = o3[c - 1];
      if (e3(t4, r3) <= 0) break;
      o3[i2 - 1] = t4, i2 = c;
    }
    o3[i2 - 1] = r3;
  }, n2 = (o3, t3) => o3 < t3 ? -1 : o3 > t3 ? 1 : 0;
  function e2(o3, e3, i2, c) {
    void 0 === e3 && (e3 = 0), void 0 === i2 && (i2 = o3.length), void 0 === c && (c = n2);
    for (let n3 = i2 >>> 1; n3 > e3; n3--) t2(o3, n3, i2, c);
    const l2 = e3 + 1;
    for (let n3 = i2 - 1; n3 > e3; n3--) {
      const i3 = o3[e3];
      o3[e3] = o3[n3], o3[n3] = i3, t2(o3, l2, n3, c);
    }
  }
  function* i(o3, e3, i2, c) {
    void 0 === e3 && (e3 = 0), void 0 === i2 && (i2 = o3.length), void 0 === c && (c = n2);
    for (let n3 = i2 >>> 1; n3 > e3; n3--) t2(o3, n3, i2, c), yield;
    const l2 = e3 + 1;
    for (let n3 = i2 - 1; n3 > e3; n3--) {
      const i3 = o3[e3];
      o3[e3] = o3[n3], o3[n3] = i3, t2(o3, l2, n3, c), yield;
    }
  }
  o2.sort = e2, o2.iterableSort = i;
}(o || (o = {}));
var t = o;

// node_modules/@arcgis/core/core/PooledArray.js
var e = 1.5;
var l = 1.1;
var r2 = class {
  constructor(h) {
    this.data = [], this._length = 0, this._allocator = void 0, this._deallocator = () => null, this._shrink = () => {
    }, this._hint = new w(), h && (h.initialSize && (this.data = new Array(h.initialSize)), h.allocator && (this._allocator = h.allocator), void 0 !== h.deallocator && (this._deallocator = h.deallocator), h.shrink && (this._shrink = () => n(this)));
  }
  toArray() {
    return this.data.slice(0, this.length);
  }
  filter(t2) {
    const h = new Array();
    for (let i = 0; i < this._length; i++) {
      const s = this.data[i];
      t2(s) && h.push(s);
    }
    return h;
  }
  at(t2) {
    if ((t2 = Math.trunc(t2) || 0) < 0 && (t2 += this._length), !(t2 < 0 || t2 >= this._length)) return this.data[t2];
  }
  includes(t2, h) {
    const i = this.data.indexOf(t2, h);
    return -1 !== i && i < this.length;
  }
  get length() {
    return this._length;
  }
  set length(t2) {
    if (t2 > this._length) {
      if (this._allocator) {
        for (; this._length < t2; ) this.data[this._length++] = this._allocator(this.data[this._length]);
        return;
      }
      this._length = t2;
    } else {
      if (this._deallocator) for (let h = t2; h < this._length; ++h) this.data[h] = this._deallocator(this.data[h]);
      this._length = t2, this._shrink();
    }
  }
  clear() {
    this.length = 0;
  }
  prune() {
    this.clear(), this.data = [];
  }
  push(t2) {
    this.data[this._length++] = t2;
  }
  pushArray(t2, h = t2.length) {
    for (let i = 0; i < h; i++) this.data[this._length++] = t2[i];
  }
  fill(t2, h) {
    for (let i = 0; i < h; i++) this.data[this._length++] = t2;
  }
  pushNew() {
    this._allocator && (this.data[this.length] = this._allocator(this.data[this.length]));
    const t2 = this.data[this._length];
    return ++this._length, t2;
  }
  unshift(t2) {
    this.data.unshift(t2), this._length++, n(this);
  }
  pop() {
    if (0 === this.length) return;
    const t2 = this.data[this.length - 1];
    return this.length = this.length - 1, this._shrink(), t2;
  }
  remove(t2) {
    const i = b(this.data, r(t2), this.length, this._hint);
    if (-1 !== i) return this.data.splice(i, 1), this.length = this.length - 1, t2;
  }
  removeUnordered(t2) {
    return this.removeUnorderedIndex(b(this.data, r(t2), this.length, this._hint));
  }
  removeUnorderedIndex(t2) {
    if (!(t2 >= this.length || t2 < 0)) return this.swapElements(t2, this.length - 1), this.pop();
  }
  removeUnorderedMany(t2, h = t2.length, s) {
    this.length = j(this.data, t2, this.length, h, this._hint, s), this._shrink();
  }
  front() {
    if (0 !== this.length) return this.data[0];
  }
  back() {
    if (0 !== this.length) return this.data[this.length - 1];
  }
  swapElements(t2, h) {
    if (t2 >= this.length || h >= this.length || t2 === h) return;
    const i = this.data[t2];
    this.data[t2] = this.data[h], this.data[h] = i;
  }
  sort(t2) {
    t.sort(this.data, 0, this.length, t2);
  }
  iterableSort(t2) {
    return t.iterableSort(this.data, 0, this.length, t2);
  }
  some(t2, h) {
    for (let i = 0; i < this.length; ++i) if (t2.call(h, this.data[i], i, this.data)) return true;
    return false;
  }
  find(t2, h) {
    const { data: i, length: s } = this;
    for (let a = 0; a < s; ++a) if (t2.call(h, i[a])) return i[a];
  }
  filterInPlace(t2, h) {
    let i = 0;
    for (let s = 0; s < this._length; ++s) {
      const a = this.data[s];
      t2.call(h, a, s, this.data) && (this.data[s] = this.data[i], this.data[i] = a, i++);
    }
    if (this._deallocator) for (let s = i; s < this._length; s++) this.data[s] = this._deallocator(this.data[s]);
    return this._length = i, this._shrink(), this;
  }
  forAll(t2, h) {
    const { data: i, length: s } = this;
    for (let a = 0; a < s; ++a) t2.call(h, i[a], a, i);
  }
  forEach(t2, h) {
    this.data.slice(0, this.length).forEach(t2, h);
  }
  map(t2, h) {
    const i = new Array(this.length);
    for (let s = 0; s < this.length; ++s) i[s] = t2.call(h, this.data[s], s, this.data);
    return i;
  }
  reduce(t2, h) {
    let i = h;
    for (let s = 0; s < this.length; ++s) i = t2(i, this.data[s], s, this.data);
    return i;
  }
  has(t2) {
    const h = this.length, i = this.data;
    for (let s = 0; s < h; ++s) if (i[s] === t2) return true;
    return false;
  }
  *[Symbol.iterator]() {
    for (let t2 = 0; t2 < this.length; t2++) yield this.data[t2];
  }
};
function n(t2) {
  t2.data.length > e * t2.length && (t2.data.length = Math.floor(t2.length * l));
}

export {
  r2 as r
};
//# sourceMappingURL=chunk-7QTMSBS3.js.map
