import {
  i
} from "./chunk-I4HN3ELT.js";
import {
  m,
  t3 as t
} from "./chunk-RYSF6YCR.js";
import {
  N,
  a3,
  e2,
  w
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  s
} from "./chunk-L7T5Z7MG.js";
import {
  A
} from "./chunk-WCGYJMU3.js";
import {
  a as a2
} from "./chunk-STW6HRXO.js";
import {
  e
} from "./chunk-M6FNW7GP.js";
import {
  a
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/core/ObservableChangesType.js
var E;
!function(E3) {
  E3[E3.ADD = 1] = "ADD", E3[E3.REMOVE = 2] = "REMOVE", E3[E3.MOVE = 4] = "MOVE";
}(E || (E = {}));

// node_modules/@arcgis/core/core/accessorSupport/decorators/shared.js
function n(n2) {
  return (r2, t2) => {
    r2[t2] = n2;
  };
}

// node_modules/@arcgis/core/core/Collection.js
var g;
var d = class {
  constructor() {
    this.target = null, this.cancellable = false, this.defaultPrevented = false, this.item = void 0, this.type = void 0;
  }
  preventDefault() {
    this.cancellable && (this.defaultPrevented = true);
  }
  reset(e3) {
    this.defaultPrevented = false, this.item = e3;
  }
};
var p = class {
  constructor(e3, t2, s2, i2, r2) {
    this.target = e3, this.added = t2, this.removed = s2, this.start = i2, this.deleteCount = r2;
  }
};
var b = new e2(d, void 0, (e3) => {
  e3.item = null, e3.target = null, e3.defaultPrevented = false, e3.cancellable = false;
});
function v(e3) {
  e3 && "object" == typeof e3 && "destroy" in e3 && "function" == typeof e3.destroy && e3.destroy();
}
function y(e3) {
  return e3 ? e3 instanceof R ? e3.toArray() : e3.length ? Array.prototype.slice.apply(e3) : [] : [];
}
function E2(e3) {
  if (e3 == null ? void 0 : e3.length) return e3[0];
}
function A2(e3, t2, s2, i2) {
  const r2 = Math.min(e3.length - s2, t2.length - i2);
  let n2 = 0;
  for (; n2 < r2 && e3[s2 + n2] === t2[i2 + n2]; ) n2++;
  return n2;
}
function C(e3, t2, s2, i2) {
  t2 && t2.forEach((t3, r2, n2) => {
    e3.push(t3), C(e3, s2.call(i2, t3, r2, n2), s2, i2);
  });
}
var O = /* @__PURE__ */ new Set();
var M = /* @__PURE__ */ new Set();
var D = /* @__PURE__ */ new Set();
var x = /* @__PURE__ */ new Map();
var j = 0;
var R = g = class extends i.EventedAccessor {
  static isCollection(e3) {
    return null != e3 && e3 instanceof g;
  }
  constructor(e3) {
    super(e3), this._chgListeners = [], this._notifications = null, this._updating = false, this._timer = null, this._observable = new s(), this.length = 0, this._items = [], Object.defineProperty(this, "uid", { value: j++ });
  }
  normalizeCtorArgs(e3) {
    return e3 ? Array.isArray(e3) || e3 instanceof g ? { items: e3 } : e3 : {};
  }
  destroy() {
    this._removeAllRaw(), this._timer && this._timer.remove(), this._emitter.destroy(), this._notifications = null;
  }
  *[Symbol.iterator]() {
    yield* this.items;
  }
  get items() {
    return a2(this._observable), this._items;
  }
  set items(e3) {
    this._emitBeforeChanges(E.ADD) || (this._splice(0, this.length, y(e3)), this._emitAfterChanges(E.ADD));
  }
  hasEventListener(e3) {
    return !this.destroyed && ("change" === e3 ? this._chgListeners.length > 0 : this._emitter.hasEventListener(e3));
  }
  on(e3, t2) {
    if (this.destroyed) return e();
    if ("change" === e3) {
      const e4 = this._chgListeners, s2 = { removed: false, callback: t2 };
      return e4.push(s2), this._notifications && this._notifications.push({ listeners: e4.slice(), items: this._items.slice(), changes: [] }), e(() => {
        s2.removed = true, e4.splice(e4.indexOf(s2), 1);
      });
    }
    return this._emitter.on(e3, t2);
  }
  once(e3, t2) {
    const s2 = "deref" in t2 ? () => t2.deref() : () => t2, i2 = this.on(e3, (e4) => {
      var _a;
      (_a = s2()) == null ? void 0 : _a.call(null, e4), i2.remove();
    });
    return i2;
  }
  add(e3, t2) {
    if (a2(this._observable), this._emitBeforeChanges(E.ADD)) return this;
    const s2 = this.getNextIndex(t2 ?? null);
    return this._splice(s2, 0, [e3]), this._emitAfterChanges(E.ADD), this;
  }
  addMany(e3, t2 = this._items.length) {
    if (a2(this._observable), !(e3 == null ? void 0 : e3.length)) return this;
    if (this._emitBeforeChanges(E.ADD)) return this;
    const s2 = this.getNextIndex(t2);
    return this._splice(s2, 0, y(e3)), this._emitAfterChanges(E.ADD), this;
  }
  at(e3) {
    if (a2(this._observable), (e3 = Math.trunc(e3) || 0) < 0 && (e3 += this.length), !(e3 < 0 || e3 >= this.length)) return this._items[e3];
  }
  removeAll() {
    if (a2(this._observable), !this.length || this._emitBeforeChanges(E.REMOVE)) return [];
    const e3 = this._removeAllRaw();
    return this._emitAfterChanges(E.REMOVE), e3;
  }
  _removeAllRaw() {
    return 0 === this.length ? [] : this._splice(0, this.length) || [];
  }
  clone() {
    return a2(this._observable), this._createNewInstance({ items: this._items.map(a) });
  }
  concat(...e3) {
    a2(this._observable);
    const t2 = e3.map(y);
    return this._createNewInstance({ items: this._items.concat(...t2) });
  }
  drain(e3, t2) {
    if (a2(this._observable), !this.length || this._emitBeforeChanges(E.REMOVE)) return;
    const s2 = this._splice(0, this.length), i2 = s2.length;
    for (let r2 = 0; r2 < i2; r2++) e3.call(t2, s2[r2], r2, s2);
    this._emitAfterChanges(E.REMOVE);
  }
  destroyAll() {
    this.drain(v);
  }
  destroyMany(e3) {
    const t2 = this.removeMany(e3);
    return t2.forEach(v), t2;
  }
  every(e3, t2) {
    return a2(this._observable), this._items.every(e3, t2);
  }
  filter(e3, t2) {
    a2(this._observable);
    const s2 = 2 === arguments.length ? this._items.filter(e3, t2) : this._items.filter(e3);
    return this._createNewInstance({ items: s2 });
  }
  find(e3, t2) {
    return a2(this._observable), this._items.find(e3, t2);
  }
  findIndex(e3, t2) {
    return a2(this._observable), this._items.findIndex(e3, t2);
  }
  flatten(e3, t2) {
    a2(this._observable);
    const s2 = [];
    return C(s2, this, e3, t2), new g(s2);
  }
  forEach(e3, t2) {
    return a2(this._observable), this._items.forEach(e3, t2);
  }
  getItemAt(e3) {
    return a2(this._observable), this._items[e3];
  }
  getNextIndex(e3) {
    a2(this._observable);
    const t2 = this.length;
    return (e3 = e3 ?? t2) < 0 ? e3 = 0 : e3 > t2 && (e3 = t2), e3;
  }
  includes(e3, t2 = 0) {
    return a2(this._observable), this._items.includes(e3, t2);
  }
  indexOf(e3, t2 = 0) {
    return a2(this._observable), this._items.indexOf(e3, t2);
  }
  join(e3 = ",") {
    return a2(this._observable), this._items.join(e3);
  }
  lastIndexOf(e3, t2 = this.length - 1) {
    return a2(this._observable), this._items.lastIndexOf(e3, t2);
  }
  map(e3, t2) {
    a2(this._observable);
    const s2 = this._items.map(e3, t2);
    return new g({ items: s2 });
  }
  reorder(e3, t2 = this.length - 1) {
    a2(this._observable);
    const s2 = this.indexOf(e3);
    if (-1 !== s2) {
      if (t2 < 0 ? t2 = 0 : t2 >= this.length && (t2 = this.length - 1), s2 !== t2) {
        if (this._emitBeforeChanges(E.MOVE)) return e3;
        this._splice(s2, 1), this._splice(t2, 0, [e3]), this._emitAfterChanges(E.MOVE);
      }
      return e3;
    }
  }
  pop() {
    if (a2(this._observable), !this.length || this._emitBeforeChanges(E.REMOVE)) return;
    const e3 = E2(this._splice(this.length - 1, 1));
    return this._emitAfterChanges(E.REMOVE), e3;
  }
  push(...e3) {
    return a2(this._observable), this._emitBeforeChanges(E.ADD) || (this._splice(this.length, 0, e3), this._emitAfterChanges(E.ADD)), this.length;
  }
  reduce(e3, t2) {
    a2(this._observable);
    const s2 = this._items;
    return 2 === arguments.length ? s2.reduce(e3, t2) : s2.reduce(e3);
  }
  reduceRight(e3, t2) {
    a2(this._observable);
    const s2 = this._items;
    return 2 === arguments.length ? s2.reduceRight(e3, t2) : s2.reduceRight(e3);
  }
  remove(e3) {
    return a2(this._observable), this.removeAt(this.indexOf(e3));
  }
  removeAt(e3) {
    if (a2(this._observable), e3 < 0 || e3 >= this.length || this._emitBeforeChanges(E.REMOVE)) return;
    const t2 = E2(this._splice(e3, 1));
    return this._emitAfterChanges(E.REMOVE), t2;
  }
  removeMany(e3) {
    if (a2(this._observable), !(e3 == null ? void 0 : e3.length) || this._emitBeforeChanges(E.REMOVE)) return [];
    const t2 = e3 instanceof g ? e3.toArray() : e3, s2 = this._items, i2 = [], r2 = t2.length;
    for (let n2 = 0; n2 < r2; n2++) {
      const e4 = t2[n2], r3 = s2.indexOf(e4);
      if (r3 > -1) {
        const e5 = 1 + A2(t2, s2, n2 + 1, r3 + 1), h = this._splice(r3, e5);
        h && h.length > 0 && i2.push.apply(i2, h), n2 += e5 - 1;
      }
    }
    return this._emitAfterChanges(E.REMOVE), i2;
  }
  reverse() {
    if (a2(this._observable), this._emitBeforeChanges(E.MOVE)) return this;
    const e3 = this._splice(0, this.length);
    return e3 && (e3.reverse(), this._splice(0, 0, e3)), this._emitAfterChanges(E.MOVE), this;
  }
  shift() {
    if (a2(this._observable), !this.length || this._emitBeforeChanges(E.REMOVE)) return;
    const e3 = E2(this._splice(0, 1));
    return this._emitAfterChanges(E.REMOVE), e3;
  }
  slice(e3 = 0, t2 = this.length) {
    return a2(this._observable), this._createNewInstance({ items: this._items.slice(e3, t2) });
  }
  some(e3, t2) {
    return a2(this._observable), this._items.some(e3, t2);
  }
  sort(e3) {
    if (a2(this._observable), !this.length || this._emitBeforeChanges(E.MOVE) || !this._requiresSort(e3)) return this;
    const t2 = this._splice(0, this.length);
    return arguments.length ? t2.sort(e3) : t2.sort(), this._splice(0, 0, t2), this._emitAfterChanges(E.MOVE), this;
  }
  _requiresSort(e3 = (e4, t2) => e4 === t2 ? 0 : e4 < t2 ? -1 : 1) {
    const t2 = this.length - 1;
    for (let s2 = 0; s2 < t2; s2++) {
      if (e3(this.items[s2], this.items[s2 + 1]) > 0) return true;
    }
    return false;
  }
  splice(e3, t2, ...s2) {
    a2(this._observable);
    const i2 = (t2 ? E.REMOVE : 0) | (s2.length ? E.ADD : 0);
    if (this._emitBeforeChanges(i2)) return [];
    const r2 = this._splice(e3, t2, s2) || [];
    return this._emitAfterChanges(i2), r2;
  }
  toArray() {
    return a2(this._observable), this._items.slice();
  }
  toJSON() {
    return a2(this._observable), this.toArray();
  }
  toLocaleString() {
    return a2(this._observable), this._items.toLocaleString();
  }
  toString() {
    return a2(this._observable), this._items.toString();
  }
  unshift(...e3) {
    return a2(this._observable), !e3.length || this._emitBeforeChanges(E.ADD) || (this._splice(0, 0, e3), this._emitAfterChanges(E.ADD)), this.length;
  }
  _createNewInstance(e3) {
    return new this.constructor(e3);
  }
  _splice(e3, t2, s2) {
    const i2 = this._items, r2 = this.itemType;
    let n2, h;
    if (!this._notifications && this.hasEventListener("change") && (this._notifications = [{ listeners: this._chgListeners.slice(), items: this._items.slice(), changes: [] }], this._timer && this._timer.remove(), this._updating = true, this._timer = A(() => this._dispatchChange())), e3 < 0 && (e3 += this.length), t2) {
      if (h = i2.splice(e3, t2), this.hasEventListener("before-remove")) {
        const t3 = b.acquire();
        t3.target = this, t3.cancellable = true;
        for (let s3 = 0, r3 = h.length; s3 < r3; s3++) n2 = h[s3], t3.reset(n2), this.emit("before-remove", t3), t3.defaultPrevented && (h.splice(s3, 1), i2.splice(e3, 0, n2), e3 += 1, s3 -= 1, r3 -= 1);
        b.release(t3);
      }
      if (this.length = this._items.length, this.hasEventListener("after-remove")) {
        const e4 = b.acquire();
        e4.target = this, e4.cancellable = false;
        const t3 = h.length;
        for (let s3 = 0; s3 < t3; s3++) e4.reset(h[s3]), this.emit("after-remove", e4);
        b.release(e4);
      }
    }
    if (s2 == null ? void 0 : s2.length) {
      if (r2) {
        const e4 = [];
        for (const t4 of s2) {
          const s3 = r2.ensureType(t4);
          null == s3 && null != t4 || e4.push(s3);
        }
        s2 = e4;
      }
      const t3 = this.hasEventListener("before-add"), n3 = this.hasEventListener("after-add"), h2 = e3 === this.length;
      if (t3 || n3) {
        const r3 = b.acquire();
        r3.target = this, r3.cancellable = true;
        const o = b.acquire();
        o.target = this, o.cancellable = false;
        for (const l of s2) t3 ? (r3.reset(l), this.emit("before-add", r3), r3.defaultPrevented || (h2 ? i2.push(l) : i2.splice(e3++, 0, l), this._set("length", i2.length), n3 && (o.reset(l), this.emit("after-add", o)))) : (h2 ? i2.push(l) : i2.splice(e3++, 0, l), this._set("length", i2.length), o.reset(l), this.emit("after-add", o));
        b.release(o), b.release(r3);
      } else {
        if (h2) for (const e4 of s2) i2.push(e4);
        else i2.splice(e3, 0, ...s2);
        this._set("length", i2.length);
      }
    }
    if (((s2 == null ? void 0 : s2.length) || (h == null ? void 0 : h.length)) && this._notifyChangeEvent(s2, h), this.hasEventListener("after-splice")) {
      const i3 = new p(this, s2, h, e3, t2);
      this.emit("after-splice", i3);
    }
    return h;
  }
  _emitBeforeChanges(e3) {
    let t2 = false;
    if (this.hasEventListener("before-changes")) {
      const s2 = b.acquire();
      s2.target = this, s2.cancellable = true, s2.type = e3, this.emit("before-changes", s2), t2 = s2.defaultPrevented, b.release(s2);
    }
    return t2;
  }
  _emitAfterChanges(e3) {
    if (this.hasEventListener("after-changes")) {
      const t2 = b.acquire();
      t2.target = this, t2.cancellable = false, t2.type = e3, this.emit("after-changes", t2), b.release(t2);
    }
    this._observable.notify();
  }
  _notifyChangeEvent(e3, t2) {
    this.hasEventListener("change") && this._notifications && this._notifications[this._notifications.length - 1].changes.push({ added: e3, removed: t2 });
  }
  get updating() {
    return this._updating;
  }
  _dispatchChange() {
    if (this._timer && (this._timer.remove(), this._timer = null), this._updating = false, !this._notifications) return;
    const e3 = this._notifications;
    this._notifications = null;
    for (const s2 of e3) {
      const e4 = s2.changes;
      O.clear(), M.clear(), D.clear();
      for (const { added: t2, removed: s3 } of e4) {
        if (t2) if (0 === D.size && 0 === M.size) for (const e5 of t2) O.add(e5);
        else for (const e5 of t2) M.has(e5) ? (D.add(e5), M.delete(e5)) : D.has(e5) || O.add(e5);
        if (s3) if (0 === D.size && 0 === O.size) for (const e5 of s3) M.add(e5);
        else for (const e5 of s3) O.has(e5) ? O.delete(e5) : (D.delete(e5), M.add(e5));
      }
      const i2 = t.acquire();
      O.forEach((e5) => {
        i2.push(e5);
      });
      const r2 = t.acquire();
      M.forEach((e5) => {
        r2.push(e5);
      });
      const n2 = this._items, h = s2.items, o = t.acquire();
      if (D.forEach((e5) => {
        h.indexOf(e5) !== n2.indexOf(e5) && o.push(e5);
      }), s2.listeners && (i2.length || r2.length || o.length)) {
        const e5 = { target: this, added: i2, removed: r2, moved: o }, t2 = s2.listeners.length;
        for (let i3 = 0; i3 < t2; i3++) {
          const t3 = s2.listeners[i3];
          t3.removed || t3.callback.call(this, e5);
        }
      }
      t.release(i2), t.release(r2), t.release(o);
    }
    O.clear(), M.clear(), D.clear();
  }
};
R.ofType = (t2) => {
  if (!t2) return g;
  if (x.has(t2)) return x.get(t2);
  let s2 = null;
  if ("function" == typeof t2) s2 = t2.prototype.declaredClass;
  else if (t2.base) s2 = t2.base.prototype.declaredClass;
  else for (const e3 in t2.typeMap) {
    const i3 = t2.typeMap[e3].prototype.declaredClass;
    s2 ? s2 += ` | ${i3}` : s2 = i3;
  }
  let i2 = class extends g {
  };
  return r([n({ Type: t2, ensureType: "function" == typeof t2 ? w(t2) : N(t2) })], i2.prototype, "itemType", void 0), i2 = r([a3(`esri.core.Collection<${s2}>`)], i2), x.set(t2, i2), i2;
}, r([m()], R.prototype, "_updating", void 0), r([m()], R.prototype, "length", void 0), r([m()], R.prototype, "items", null), r([m({ readOnly: true })], R.prototype, "updating", null), R = g = r([a3("esri.core.Collection")], R);
var V = R;

export {
  n,
  V
};
//# sourceMappingURL=chunk-AJSC5XSW.js.map
