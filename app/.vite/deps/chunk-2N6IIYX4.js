import {
  t
} from "./chunk-5BWPRODD.js";
import {
  r as r2
} from "./chunk-7QTMSBS3.js";
import {
  b,
  r,
  w
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/core/libs/rbush/PooledRBush.js
var s = class {
  constructor(t2 = 9, i) {
    this._compareMinX = u, this._compareMinY = d, this._toBBox = (t3) => t3, this._maxEntries = Math.max(4, t2 || 9), this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries)), i && ("function" == typeof i ? this._toBBox = i : this._initFormat(i)), this.clear();
  }
  destroy() {
    this.clear(), Y.prune(), B.prune(), w2.prune(), j.prune();
  }
  all(t2) {
    r3(this._data, t2);
  }
  search(t2, i) {
    let n = this._data;
    const e = this._toBBox;
    if (M(t2, n)) for (Y.clear(); n; ) {
      for (let h = 0, s2 = n.children.length; h < s2; h++) {
        const s3 = n.children[h], a2 = n.leaf ? e(s3) : s3;
        M(t2, a2) && (n.leaf ? i(s3) : g(t2, a2) ? r3(s3, i) : Y.push(s3));
      }
      n = Y.pop();
    }
  }
  collides(t2) {
    let i = this._data;
    const n = this._toBBox;
    if (!M(t2, i)) return false;
    for (Y.clear(); i; ) {
      for (let e = 0, h = i.children.length; e < h; e++) {
        const h2 = i.children[e], s2 = i.leaf ? n(h2) : h2;
        if (M(t2, s2)) {
          if (i.leaf || g(t2, s2)) return true;
          Y.push(h2);
        }
      }
      i = Y.pop();
    }
    return false;
  }
  load(t2) {
    if (!t2.length) return this;
    if (t2.length < this._minEntries) {
      for (let i2 = 0, n = t2.length; i2 < n; i2++) this.insert(t2[i2]);
      return this;
    }
    let i = this._build(t2.slice(), 0, t2.length - 1, 0);
    if (this._data.children.length) if (this._data.height === i.height) this._splitRoot(this._data, i);
    else {
      if (this._data.height < i.height) {
        const t3 = this._data;
        this._data = i, i = t3;
      }
      this._insert(i, this._data.height - i.height - 1, true);
    }
    else this._data = i;
    return this;
  }
  insert(t2) {
    return t2 && this._insert(t2, this._data.height - 1), this;
  }
  clear() {
    return this._data = new S([]), this;
  }
  remove(i) {
    if (!i) return this;
    let e, h = this._data, s2 = null, a2 = 0, r4 = false;
    const o2 = this._toBBox(i);
    for (w2.clear(), j.clear(); h || w2.length > 0; ) {
      if (h || (h = w2.pop(), s2 = w2.data[w2.length - 1], a2 = j.pop() ?? 0, r4 = true), h.leaf && (e = b(h.children, r(i), h.children.length, h.indexHint), -1 !== e)) return h.children.splice(e, 1), w2.push(h), this._condense(w2), this;
      r4 || h.leaf || !g(h, o2) ? s2 ? (a2++, h = s2.children[a2], r4 = false) : h = null : (w2.push(h), j.push(a2), a2 = 0, s2 = h, h = h.children[0]);
    }
    return this;
  }
  toJSON() {
    return this._data;
  }
  fromJSON(t2) {
    return this._data = t2, this;
  }
  _build(t2, i, n, e) {
    const h = n - i + 1;
    let s2 = this._maxEntries;
    if (h <= s2) {
      const e2 = new S(t2.slice(i, n + 1));
      return l(e2, this._toBBox), e2;
    }
    e || (e = Math.ceil(Math.log(h) / Math.log(s2)), s2 = Math.ceil(h / s2 ** (e - 1)));
    const a2 = new y([]);
    a2.height = e;
    const r4 = Math.ceil(h / s2), o2 = r4 * Math.ceil(Math.sqrt(s2));
    X(t2, i, n, o2, this._compareMinX);
    for (let l2 = i; l2 <= n; l2 += o2) {
      const i2 = Math.min(l2 + o2 - 1, n);
      X(t2, l2, i2, r4, this._compareMinY);
      for (let n2 = l2; n2 <= i2; n2 += r4) {
        const h2 = Math.min(n2 + r4 - 1, i2);
        a2.children.push(this._build(t2, n2, h2, e - 1));
      }
    }
    return l(a2, this._toBBox), a2;
  }
  _insert(t2, i, n) {
    const e = this._toBBox, h = n ? t2 : e(t2);
    w2.clear();
    const s2 = a(h, this._data, i, w2);
    for (s2.children.push(t2), m(s2, h); i >= 0 && w2.data[i].children.length > this._maxEntries; ) this._split(w2, i), i--;
    o(h, w2, i);
  }
  _split(t2, i) {
    const n = t2.data[i], e = n.children.length, h = this._minEntries;
    this._chooseSplitAxis(n, h, e);
    const s2 = this._chooseSplitIndex(n, h, e);
    if (!s2) return;
    const a2 = n.children.splice(s2, n.children.length - s2), r4 = n.leaf ? new S(a2) : new y(a2);
    r4.height = n.height, l(n, this._toBBox), l(r4, this._toBBox), i ? t2.data[i - 1].children.push(r4) : this._splitRoot(n, r4);
  }
  _splitRoot(t2, i) {
    this._data = new y([t2, i]), this._data.height = t2.height + 1, l(this._data, this._toBBox);
  }
  _chooseSplitIndex(t2, i, n) {
    let e, h, s2;
    e = h = 1 / 0;
    for (let a2 = i; a2 <= n - i; a2++) {
      const i2 = c(t2, 0, a2, this._toBBox), r4 = c(t2, a2, n, this._toBBox), o2 = p(i2, r4), l2 = f(i2) + f(r4);
      o2 < e ? (e = o2, s2 = a2, h = l2 < h ? l2 : h) : o2 === e && l2 < h && (h = l2, s2 = a2);
    }
    return s2;
  }
  _chooseSplitAxis(t2, i, n) {
    const e = t2.leaf ? this._compareMinX : u, h = t2.leaf ? this._compareMinY : d;
    this._allDistMargin(t2, i, n, e) < this._allDistMargin(t2, i, n, h) && t2.children.sort(e);
  }
  _allDistMargin(t2, i, n, e) {
    t2.children.sort(e);
    const h = this._toBBox, s2 = c(t2, 0, i, h), a2 = c(t2, n - i, n, h);
    let r4 = x(s2) + x(a2);
    for (let o2 = i; o2 < n - i; o2++) {
      const i2 = t2.children[o2];
      m(s2, t2.leaf ? h(i2) : i2), r4 += x(s2);
    }
    for (let o2 = n - i - 1; o2 >= i; o2--) {
      const i2 = t2.children[o2];
      m(a2, t2.leaf ? h(i2) : i2), r4 += x(a2);
    }
    return r4;
  }
  _condense(i) {
    for (let n = i.length - 1; n >= 0; n--) {
      const e = i.data[n];
      if (0 === e.children.length) if (n > 0) {
        const h = i.data[n - 1], s2 = h.children;
        s2.splice(b(s2, e, s2.length, h.indexHint), 1);
      } else this.clear();
      else l(e, this._toBBox);
    }
  }
  _initFormat(t2) {
    const i = ["return a", " - b", ";"];
    this._compareMinX = new Function("a", "b", i.join(t2[0])), this._compareMinY = new Function("a", "b", i.join(t2[1])), this._toBBox = new Function("a", "return {minX: a" + t2[0] + ", minY: a" + t2[1] + ", maxX: a" + t2[2] + ", maxY: a" + t2[3] + "};");
  }
};
function a(t2, i, n, e) {
  for (; e.push(i), true !== i.leaf && e.length - 1 !== n; ) {
    let n2, e2 = 1 / 0, h = 1 / 0;
    for (let s2 = 0, a2 = i.children.length; s2 < a2; s2++) {
      const a3 = i.children[s2], r4 = f(a3), o2 = _(t2, a3) - r4;
      o2 < h ? (h = o2, e2 = r4 < e2 ? r4 : e2, n2 = a3) : o2 === h && r4 < e2 && (e2 = r4, n2 = a3);
    }
    i = n2 || i.children[0];
  }
  return i;
}
function r3(t2, i) {
  let e = t2;
  for (B.clear(); e; ) {
    if (true === e.leaf) for (const t3 of e.children) i(r(t3));
    else B.pushArray(e.children);
    e = B.pop() ?? null;
  }
}
function o(t2, i, n) {
  for (let e = n; e >= 0; e--) m(i.data[e], t2);
}
function l(t2, i) {
  c(t2, 0, t2.children.length, i, t2);
}
function c(t2, i, n, e, h) {
  h || (h = new S([])), h.minX = 1 / 0, h.minY = 1 / 0, h.maxX = -1 / 0, h.maxY = -1 / 0;
  for (let s2, a2 = i; a2 < n; a2++) s2 = t2.children[a2], m(h, t2.leaf ? e(s2) : s2);
  return h;
}
function m(t2, i) {
  t2.minX = Math.min(t2.minX, i.minX), t2.minY = Math.min(t2.minY, i.minY), t2.maxX = Math.max(t2.maxX, i.maxX), t2.maxY = Math.max(t2.maxY, i.maxY);
}
function u(t2, i) {
  return t2.minX - i.minX;
}
function d(t2, i) {
  return t2.minY - i.minY;
}
function f(t2) {
  return (t2.maxX - t2.minX) * (t2.maxY - t2.minY);
}
function x(t2) {
  return t2.maxX - t2.minX + (t2.maxY - t2.minY);
}
function _(t2, i) {
  return (Math.max(i.maxX, t2.maxX) - Math.min(i.minX, t2.minX)) * (Math.max(i.maxY, t2.maxY) - Math.min(i.minY, t2.minY));
}
function p(t2, i) {
  const n = Math.max(t2.minX, i.minX), e = Math.max(t2.minY, i.minY), h = Math.min(t2.maxX, i.maxX), s2 = Math.min(t2.maxY, i.maxY);
  return Math.max(0, h - n) * Math.max(0, s2 - e);
}
function g(t2, i) {
  return t2.minX <= i.minX && t2.minY <= i.minY && i.maxX <= t2.maxX && i.maxY <= t2.maxY;
}
function M(t2, i) {
  return i.minX <= t2.maxX && i.minY <= t2.maxY && i.maxX >= t2.minX && i.maxY >= t2.minY;
}
function X(t2, i, n, e, s2) {
  const a2 = [i, n];
  for (; a2.length; ) {
    const i2 = a2.pop(), n2 = a2.pop();
    if (i2 - n2 <= e) continue;
    const r4 = n2 + Math.ceil((i2 - n2) / e / 2) * e;
    t(t2, r4, n2, i2, s2), a2.push(n2, r4, r4, i2);
  }
}
var Y = new r2();
var B = new r2();
var w2 = new r2();
var j = new r2({ deallocator: void 0 });
var E = class {
  constructor() {
    this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0;
  }
};
var b2 = class extends E {
  constructor() {
    super(...arguments), this.height = 1, this.indexHint = new w();
  }
};
var S = class extends b2 {
  constructor(t2) {
    super(), this.children = t2, this.leaf = true;
  }
};
var y = class extends b2 {
  constructor(t2) {
    super(), this.children = t2, this.leaf = false;
  }
};

export {
  s,
  E
};
//# sourceMappingURL=chunk-2N6IIYX4.js.map
