import {
  r
} from "./chunk-7QTMSBS3.js";

// node_modules/@arcgis/core/core/MemCache.js
var e = -3;
var i = e - 1;
var s;
!function(t) {
  t[t.ALL = 0] = "ALL", t[t.SOME = 1] = "SOME";
}(s || (s = {}));
var h = class {
  get size() {
    return this._size;
  }
  constructor(e2 = 10485760) {
    this._maxSize = e2, this._db = /* @__PURE__ */ new Map(), this._size = 0, this._hit = 0, this._miss = 0, this._removeFuncs = new r(), this._users = new r();
  }
  destroy() {
    this.clearAll(), this._removeFuncs.clear(), this._users.clear();
  }
  register(t) {
    this._users.push(t);
  }
  deregister(t) {
    this._users.removeUnordered(t);
  }
  registerRemoveFunc(t, e2) {
    this._removeFuncs.push([t, e2]);
  }
  deregisterRemoveFunc(t) {
    this._removeFuncs.filterInPlace((e2) => e2[0] !== t);
  }
  get maxSize() {
    return this._maxSize;
  }
  set maxSize(t) {
    this._maxSize = Math.max(t, -1), this._checkSize();
  }
  getSize(t, e2) {
    const i2 = this._db.get(t.id + e2);
    return (i2 == null ? void 0 : i2.size) ?? 0;
  }
  put(t, r2, h2, o, _) {
    r2 = t.id + r2;
    const a = this._db.get(r2);
    if (a && (this._size -= a.size, t.size -= a.size, this._db.delete(r2), a.entry !== h2 && this._notifyRemove(r2, a.entry, a.size, s.ALL)), o > this._maxSize) return void this._notifyRemove(r2, h2, o, s.ALL);
    if (void 0 === h2) return void console.warn("Refusing to cache undefined entry ");
    if (!o || o < 0) return console.warn(`Refusing to cache entry with size ${o} for key ${r2}`), void this._notifyRemove(r2, h2, 0, s.ALL);
    const c = 1 + Math.max(_, i) - e;
    this._db.set(r2, new n(h2, o, c)), this._size += o, t.size += o, this._checkSize();
  }
  updateSize(t, e2, i2, r2) {
    e2 = t.id + e2;
    const h2 = this._db.get(e2);
    if (h2 && h2.entry === i2) {
      for (this._size -= h2.size, t.size -= h2.size; r2 > this._maxSize; ) {
        const t2 = this._notifyRemove(e2, i2, r2, s.SOME);
        if (!(null != t2 && t2 > 0)) return void this._db.delete(e2);
        r2 = t2;
      }
      h2.size = r2, this._size += r2, t.size += r2, this._checkSize();
    }
  }
  pop(t, e2) {
    e2 = t.id + e2;
    const i2 = this._db.get(e2);
    if (i2) return this._size -= i2.size, t.size -= i2.size, this._db.delete(e2), ++this._hit, i2.entry;
    ++this._miss;
  }
  get(t, e2) {
    e2 = t.id + e2;
    const i2 = this._db.get(e2);
    if (void 0 !== i2) return this._db.delete(e2), i2.lives = i2.lifetime, this._db.set(e2, i2), ++this._hit, i2.entry;
    ++this._miss;
  }
  peek(t, e2) {
    const i2 = this._db.get(t.id + e2);
    return i2 ? ++this._hit : ++this._miss, i2 == null ? void 0 : i2.entry;
  }
  get performanceInfo() {
    const t = { Size: Math.round(this._size / 1048576) + "/" + Math.round(this._maxSize / 1048576) + "MB", "Hit rate": Math.round(100 * this._getHitRate()) + "%", Entries: this._db.size.toString() }, i2 = {}, s2 = new Array();
    this._db.forEach((t2, e2) => {
      const r3 = t2.lifetime;
      s2[r3] = (s2[r3] || 0) + t2.size, this._users.forAll((s3) => {
        const { id: r4, name: h3 } = s3;
        if (e2.startsWith(r4)) {
          const e3 = i2[h3] || 0;
          i2[h3] = e3 + t2.size;
        }
      });
    });
    const r2 = {};
    this._users.forAll((t2) => {
      const e2 = t2.name;
      if ("hitRate" in t2 && "number" == typeof t2.hitRate && !isNaN(t2.hitRate) && t2.hitRate > 0) {
        const s3 = i2[e2] || 0;
        i2[e2] = s3, r2[e2] = Math.round(100 * t2.hitRate) + "%";
      } else r2[e2] = "0%";
    });
    const h2 = Object.keys(i2);
    h2.sort((t2, e2) => i2[e2] - i2[t2]), h2.forEach((e2) => t[e2] = Math.round(i2[e2] / 2 ** 20) + "MB / " + r2[e2]);
    for (let o = s2.length - 1; o >= 0; --o) {
      const i3 = s2[o];
      i3 && (t["Priority " + (o + e - 1)] = Math.round(i3 / this._size * 100) + "%");
    }
    return t;
  }
  resetStats() {
    this._hit = this._miss = 0, this._users.forAll((t) => t.resetHitRate());
  }
  clear(t) {
    const e2 = t.id;
    this._db.forEach((t2, i2) => {
      i2.startsWith(e2) && (this._size -= t2.size, this._db.delete(i2), this._notifyRemove(i2, t2.entry, t2.size, s.ALL));
    }), t.size = 0;
  }
  clearAll() {
    this._db.forEach((t, e2) => this._notifyRemove(e2, t.entry, t.size, s.ALL)), this._users.forAll((t) => t.size = 0), this._size = 0, this._db.clear();
  }
  _getHitRate() {
    return this._hit / (this._hit + this._miss);
  }
  _notifyRemove(t, e2, i2, s2) {
    let r2;
    return this._removeFuncs.some((h2) => {
      if (t.startsWith(h2[0])) {
        const t2 = h2[1](e2, s2, i2);
        return "number" == typeof t2 && (r2 = t2), true;
      }
      return false;
    }), r2;
  }
  _checkSize() {
    this._users.forAll((t) => this._checkSizeLimits(t)), this._checkSizeLimits();
  }
  _checkSizeLimits(t) {
    const e2 = t ?? this;
    if (e2.maxSize < 0 || e2.size <= e2.maxSize) return;
    const i2 = t == null ? void 0 : t.id;
    let s2 = true;
    for (; s2; ) {
      s2 = false;
      for (const [r2, h2] of this._db) if (0 === h2.lifetime && (!i2 || r2.startsWith(i2))) {
        if (this._purgeItem(r2, h2, t), e2.size <= 0.9 * e2.maxSize) return;
        s2 || (s2 = this._db.has(r2));
      }
    }
    for (const [r2, h2] of this._db) if ((!i2 || r2.startsWith(i2)) && (this._purgeItem(r2, h2, t), e2.size <= 0.9 * e2.maxSize)) return;
  }
  _purgeItem(t, e2, i2 = this._users.find((e3) => t.startsWith(e3.id))) {
    if (this._db.delete(t), e2.lives <= 1) {
      this._size -= e2.size, i2 && (i2.size -= e2.size);
      const r2 = this._notifyRemove(t, e2.entry, e2.size, s.SOME);
      null != r2 && r2 > 0 && (this._size += r2, i2 && (i2.size += r2), e2.lives = e2.lifetime, e2.size = r2, this._db.set(t, e2));
    } else --e2.lives, this._db.set(t, e2);
  }
};
var n = class {
  constructor(t, e2, i2) {
    this.entry = t, this.size = e2, this.lifetime = i2, this.lives = i2;
  }
};

export {
  e,
  h
};
//# sourceMappingURL=chunk-A4BGGF5Z.js.map
