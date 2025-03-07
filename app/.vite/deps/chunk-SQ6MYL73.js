import {
  c,
  o as o2
} from "./chunk-HP7OWCUK.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  e
} from "./chunk-UNGOQUF2.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/time/TimeExtent.js
var u;
var m2 = u = class extends S {
  static get allTime() {
    return d;
  }
  static get empty() {
    return c2;
  }
  static fromArray(t) {
    return new u({ start: null != t[0] ? new Date(t[0]) : t[0], end: null != t[1] ? new Date(t[1]) : t[1] });
  }
  constructor(t) {
    super(t), this.end = null, this.start = null;
  }
  readEnd(t, e2) {
    return null != e2.end ? new Date(e2.end) : null;
  }
  writeEnd(t, e2) {
    e2.end = (t == null ? void 0 : t.getTime()) ?? null;
  }
  get isAllTime() {
    return this.equals(u.allTime);
  }
  get isEmpty() {
    return this.equals(u.empty);
  }
  readStart(t, e2) {
    return null != e2.start ? new Date(e2.start) : null;
  }
  writeStart(t, e2) {
    e2.start = (t == null ? void 0 : t.getTime()) ?? null;
  }
  clone() {
    return new u({ end: this.end, start: this.start });
  }
  equals(t) {
    var _a, _b, _c, _d;
    if (!t) return false;
    const e2 = ((_a = this.start) == null ? void 0 : _a.getTime()) ?? this.start, r3 = ((_b = this.end) == null ? void 0 : _b.getTime()) ?? this.end, s = ((_c = t.start) == null ? void 0 : _c.getTime()) ?? t.start, n = ((_d = t.end) == null ? void 0 : _d.getTime()) ?? t.end;
    return e2 === s && r3 === n;
  }
  expandTo(t, e2 = e) {
    if (this.isEmpty || this.isAllTime) return this.clone();
    let n = this.start;
    n && (n = c(n, t, e2));
    let i = this.end;
    if (i) {
      const n2 = c(i, t, e2);
      i = i.getTime() === n2.getTime() ? n2 : o2(n2, 1, t, e2);
    }
    return new u({ start: n, end: i });
  }
  intersection(t) {
    var _a, _b, _c, _d;
    if (!t) return this.clone();
    if (this.isEmpty || t.isEmpty) return u.empty;
    if (this.isAllTime) return t.clone();
    if (t.isAllTime) return this.clone();
    const e2 = ((_a = this.start) == null ? void 0 : _a.getTime()) ?? -1 / 0, r3 = ((_b = this.end) == null ? void 0 : _b.getTime()) ?? 1 / 0, s = ((_c = t.start) == null ? void 0 : _c.getTime()) ?? -1 / 0, n = ((_d = t.end) == null ? void 0 : _d.getTime()) ?? 1 / 0;
    let i, l;
    return s >= e2 && s <= r3 ? i = s : e2 >= s && e2 <= n && (i = e2), r3 >= s && r3 <= n ? l = r3 : n >= e2 && n <= r3 && (l = n), null == i || null == l || isNaN(i) || isNaN(l) ? u.empty : new u({ start: i === -1 / 0 ? null : new Date(i), end: l === 1 / 0 ? null : new Date(l) });
  }
  offset(t, e2, r3 = e) {
    if (this.isEmpty || this.isAllTime) return this.clone();
    const n = new u(), { start: i, end: l } = this;
    return null != i && (n.start = o2(i, t, e2, r3)), null != l && (n.end = o2(l, t, e2, r3)), n;
  }
  toArray() {
    var _a, _b;
    return this.isEmpty ? [void 0, void 0] : [((_a = this.start) == null ? void 0 : _a.getTime()) ?? null, ((_b = this.end) == null ? void 0 : _b.getTime()) ?? null];
  }
  union(t) {
    if (!t || t.isEmpty) return this.clone();
    if (this.isEmpty) return t.clone();
    if (this.isAllTime || t.isAllTime) return d.clone();
    const e2 = null != this.start && null != t.start ? new Date(Math.min(this.start.getTime(), t.start.getTime())) : null, r3 = null != this.end && null != t.end ? new Date(Math.max(this.end.getTime(), t.end.getTime())) : null;
    return new u({ start: e2, end: r3 });
  }
};
r([m({ type: Date, json: { write: { allowNull: true } } })], m2.prototype, "end", void 0), r([o("end")], m2.prototype, "readEnd", null), r([r2("end")], m2.prototype, "writeEnd", null), r([m({ readOnly: true, json: { read: false } })], m2.prototype, "isAllTime", null), r([m({ readOnly: true, json: { read: false } })], m2.prototype, "isEmpty", null), r([m({ type: Date, json: { write: { allowNull: true } } })], m2.prototype, "start", void 0), r([o("start")], m2.prototype, "readStart", null), r([r2("start")], m2.prototype, "writeStart", null), m2 = u = r([a("esri.time.TimeExtent")], m2);
var p = m2;
var d = new m2();
var c2 = new m2({ start: void 0, end: void 0 });

export {
  p
};
//# sourceMappingURL=chunk-SQ6MYL73.js.map
