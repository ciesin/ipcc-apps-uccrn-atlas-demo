import {
  o
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/chunks/Theme.js
var e = class _e2 {
  constructor(t) {
    Object.defineProperty(this, "_value", { enumerable: true, configurable: true, writable: true, value: void 0 }), this._value = t;
  }
  get value() {
    return this._value / 100;
  }
  get percent() {
    return this._value;
  }
  toString() {
    return this._value + "%";
  }
  interpolate(t, e2) {
    return t + this.value * (e2 - t);
  }
  static normalize(t, i2, s2) {
    return t instanceof _e2 ? t : new _e2(i2 === s2 ? 0 : 100 * Math.min(Math.max(1 / (s2 - i2) * (t - i2), 0), 1));
  }
};
function i(t) {
  return new e(t);
}
var s = i(0);
var r = i(100);
var a = i(50);
function n(t) {
  return t instanceof e;
}
function o2(t) {
  return Number(t) !== t;
}
function h(t) {
  return {}.toString.call(t);
}
function l(t) {
  if (null != t && !_(t)) {
    let e2 = Number(t);
    return o2(e2) && g(t) && "" != t ? l(t.replace(/[^0-9.\-]+/g, "")) : e2;
  }
  return t;
}
function d(t) {
  if (c(t)) return new Date(t);
  if (_(t)) return new Date(t);
  {
    let e2 = Number(t);
    return _(e2) ? new Date(e2) : new Date(t);
  }
}
function u(t) {
  if (o2(t)) return "NaN";
  if (t === 1 / 0) return "Infinity";
  if (t === -1 / 0) return "-Infinity";
  if (0 === t && 1 / t == -1 / 0) return "-0";
  let e2 = t < 0;
  t = Math.abs(t);
  let i2, s2 = /^([0-9]+)(?:\.([0-9]+))?(?:e[\+\-]([0-9]+))?$/.exec("" + t), r2 = s2[1], a2 = s2[2] || "";
  if (void 0 === s2[3]) i2 = "" === a2 ? r2 : r2 + "." + a2;
  else {
    let e3 = +s2[3];
    if (t < 1) {
      i2 = "0." + p("0", e3 - 1) + r2 + a2;
    } else {
      let t2 = e3 - a2.length;
      i2 = 0 === t2 ? r2 + a2 : t2 < 0 ? r2 + a2.slice(0, t2) + "." + a2.slice(t2) : r2 + a2 + p("0", t2);
    }
  }
  return e2 ? "-" + i2 : i2;
}
function p(t, e2) {
  return new Array(e2 + 1).join(t);
}
function c(t) {
  return "[object Date]" === h(t);
}
function g(t) {
  return "string" == typeof t;
}
function _(t) {
  return "number" == typeof t && Number(t) == t;
}
function m(t) {
  return "object" == typeof t && null !== t;
}
var f = "__§§§__";
var b = "__§§§§__";
function v(t, e2) {
  const i2 = t.length;
  for (let s2 = 0; s2 < i2; ++s2) if (t[s2] === e2) return s2;
  return -1;
}
function y(t, e2) {
  const i2 = t.length;
  for (let s2 = 0; s2 < i2; ++s2) if (e2(t[s2])) return true;
  return false;
}
function w(t, e2) {
  const i2 = t.length, s2 = new Array(i2);
  for (let r2 = 0; r2 < i2; ++r2) s2[r2] = e2(t[r2], r2);
  return s2;
}
function P(t, e2) {
  const i2 = t.length;
  for (let s2 = 0; s2 < i2; ++s2) e2(t[s2], s2);
}
function D(t, e2) {
  let i2 = t.length;
  for (; i2 > 0; ) --i2, e2(t[i2], i2);
}
function x(t, e2) {
  const i2 = t.length;
  for (let s2 = 0; s2 < i2 && e2(t[s2], s2); ++s2) ;
}
function k(t, e2) {
  let i2 = false, s2 = 0;
  for (; ; ) {
    if (s2 = t.indexOf(e2, s2), -1 === s2) return i2;
    i2 = true, t.splice(s2, 1);
  }
}
function O(t, e2) {
  let i2 = t.indexOf(e2);
  return -1 !== i2 && (t.splice(i2, 1), true);
}
function T(t, e2, i2) {
  let s2 = v(t, e2);
  -1 !== s2 && C(t, s2), t.push(e2);
}
function S(t, e2) {
  -1 === t.indexOf(e2) && t.push(e2);
}
function j(t) {
  const e2 = t.length, i2 = new Array(e2);
  for (let s2 = 0; s2 < e2; ++s2) i2[s2] = t[s2];
  return i2;
}
function E(t, e2, i2) {
  t.splice(e2, 0, i2);
}
function C(t, e2) {
  t.splice(e2, 1);
}
function M(t, e2) {
  const i2 = t.length;
  for (let s2 = 0; s2 < i2; ++s2) if (e2(t[s2], s2)) return s2;
  return -1;
}
function B(t, e2) {
  let i2 = t.length;
  for (; i2 > 0; ) if (--i2, e2(t[i2], i2)) return i2;
  return -1;
}
function A(t, e2) {
  const i2 = M(t, e2);
  if (-1 !== i2) return t[i2];
}
function H(t, e2) {
  const i2 = B(t, e2);
  if (-1 !== i2) return t[i2];
}
function I(t, e2) {
  let i2 = 0, s2 = t.length, r2 = false;
  for (; i2 < s2; ) {
    const a2 = i2 + s2 >> 1, n2 = e2(t[a2]);
    n2 < 0 ? i2 = a2 + 1 : 0 === n2 ? (r2 = true, i2 = a2 + 1) : s2 = a2;
  }
  return { found: r2, index: r2 ? i2 - 1 : i2 };
}
function L(t, e2) {
  let i2 = 0, s2 = t.length, r2 = false;
  for (; i2 < s2; ) {
    const a2 = i2 + s2 >> 1, n2 = e2(t[a2]);
    n2 < 0 ? i2 = a2 + 1 : 0 === n2 ? (r2 = true, s2 = a2) : s2 = a2;
  }
  return { found: r2, index: i2 };
}
function N(t, e2) {
  let i2 = t.length;
  for (; i2 > 0; ) --i2, e2(t[i2]) || t.splice(i2, 1);
}
function R(t) {
  return Object.keys(t);
}
function F(t, e2) {
  return R(t).sort(e2);
}
function W(t) {
  return Object.assign({}, t);
}
function U(t, e2) {
  R(t).forEach((i2) => {
    e2(i2, t[i2]);
  });
}
function V(t, e2) {
  for (let i2 in t) if (K(t, i2) && !e2(i2, t[i2])) break;
}
function K(t, e2) {
  return {}.hasOwnProperty.call(t, e2);
}
var G = class {
  constructor() {
    Object.defineProperty(this, "_disposed", { enumerable: true, configurable: true, writable: true, value: void 0 }), this._disposed = false;
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = true, this._dispose());
  }
};
var z = class {
  constructor(t) {
    Object.defineProperty(this, "_disposed", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_dispose", { enumerable: true, configurable: true, writable: true, value: void 0 }), this._disposed = false, this._dispose = t;
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = true, this._dispose());
  }
};
var Y = class extends G {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_disposers", { enumerable: true, configurable: true, writable: true, value: [] });
  }
  _dispose() {
    P(this._disposers, (t) => {
      t.dispose();
    });
  }
};
var X = class extends G {
  constructor(t) {
    super(), Object.defineProperty(this, "_disposers", { enumerable: true, configurable: true, writable: true, value: void 0 }), this._disposers = t;
  }
  _dispose() {
    P(this._disposers, (t) => {
      t.dispose();
    });
  }
  get disposers() {
    return this._disposers;
  }
};
var $ = class extends z {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_counter", { enumerable: true, configurable: true, writable: true, value: 0 });
  }
  increment() {
    return ++this._counter, new z(() => {
      --this._counter, 0 === this._counter && this.dispose();
    });
  }
};
function Z(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function J(t, e2, i2, s2) {
  return t.addEventListener(e2, i2, s2 || false), new z(() => {
    t.removeEventListener(e2, i2, s2 || false);
  });
}
function q(t) {
  return J(window, "resize", (e2) => {
    t();
  });
}
function Q(t) {
  switch (t) {
    case "touchevents":
      return window.hasOwnProperty("TouchEvent");
    case "pointerevents":
      return window.hasOwnProperty("PointerEvent");
    case "mouseevents":
      return window.hasOwnProperty("MouseEvent");
    case "wheelevents":
      return window.hasOwnProperty("WheelEvent");
    case "keyboardevents":
      return window.hasOwnProperty("KeyboardEvent");
  }
  return false;
}
function tt(t) {
  return t.pointerId || 0;
}
function et() {
  if (document.activeElement && document.activeElement != document.body) if (document.activeElement.blur) document.activeElement.blur();
  else {
    let t = document.createElement("button");
    t.style.position = "fixed", t.style.top = "0px", t.style.left = "-10000px", document.body.appendChild(t), t.focus(), t.blur(), document.body.removeChild(t);
  }
}
function it(t) {
  t && t.focus();
}
function st(t) {
  if (Q("pointerevents")) return t;
  if (Q("touchevents")) switch (t) {
    case "pointerover":
    case "pointerdown":
      return "touchstart";
    case "pointerout":
    case "pointerleave":
    case "pointerup":
      return "touchend";
    case "pointermove":
      return "touchmove";
    case "click":
      return "click";
    case "dblclick":
      return "dblclick";
  }
  else if (Q("mouseevents")) switch (t) {
    case "pointerover":
      return "mouseover";
    case "pointerout":
      return "mouseout";
    case "pointerleave":
      return "mouseleave";
    case "pointerdown":
      return "mousedown";
    case "pointermove":
      return "mousemove";
    case "pointerup":
      return "mouseup";
    case "click":
      return "click";
    case "dblclick":
      return "dblclick";
  }
  return t;
}
function rt(t) {
  if ("undefined" != typeof Touch && t instanceof Touch) return true;
  if ("undefined" != typeof PointerEvent && t instanceof PointerEvent && null != t.pointerType) switch (t.pointerType) {
    case "touch":
    case "pen":
    case 2:
      return true;
    case "mouse":
    case 4:
      return false;
    default:
      return !(t instanceof MouseEvent);
  }
  else if (null != t.type && t.type.match(/^mouse/)) return false;
  return true;
}
function at(t, e2, i2) {
  t.style[e2] = i2;
}
function nt(t, e2) {
  return t.style[e2];
}
function ot(t) {
  if (t.composedPath) {
    const e2 = t.composedPath();
    return 0 === e2.length ? null : e2[0];
  }
  return t.target;
}
function ht(t, e2) {
  let i2 = e2;
  for (; ; ) {
    if (t === i2) return true;
    if (null === i2.parentNode) {
      if (null == i2.host) return false;
      i2 = i2.host;
    } else i2 = i2.parentNode;
  }
}
function lt(t, e2) {
  return t.target && ht(e2.root.dom, t.target);
}
function dt(t, e2) {
  t.style.pointerEvents = e2 ? "auto" : "none";
}
function ut(t) {
  if (void 0 !== t.key) return t.key;
  switch (t.keyCode) {
    case 9:
      return "Tab";
    case 13:
      return "Enter";
    case 16:
      return "Shift";
    case 17:
      return "Control";
    case 27:
      return "Escape";
    case 32:
      return " ";
    case 37:
      return "ArrowLeft";
    case 38:
      return "ArrowUp";
    case 39:
      return "ArrowRight";
    case 40:
      return "ArrowDown";
    case 46:
      return "Delete";
  }
  return "" + t.keyCode;
}
function pt() {
  return /apple/i.test(navigator.vendor) && "ontouchend" in document;
}
function ct() {
  return pt() ? 1 : void 0;
}
function gt(t, e2) {
  return _(t) ? t : null != t && _(t.value) && _(e2) ? e2 * t.value : 0;
}
function _t(t) {
  let e2 = ("" + t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return e2 ? Math.max(0, (e2[1] ? e2[1].length : 0) - (e2[2] ? +e2[2] : 0)) : 0;
}
function mt(t, e2 = 0, i2 = "0") {
  return "string" != typeof t && (t = t.toString()), e2 > t.length ? Array(e2 - t.length + 1).join(i2) + t : t;
}
function ft(t) {
  return t.replace(/^[\s]*/, "");
}
function bt(t) {
  return t.replace(/[\s]*$/, "");
}
function vt(t) {
  return ft(bt(t));
}
function yt(t, e2, i2 = false, s2 = "...") {
  if (t.length > e2) {
    let r2 = e2 - 1;
    for (; r2 >= 0 && t.charAt(r2).match(/\w/); ) r2--;
    return r2 >= 0 && 0 == i2 ? t.substring(0, r2 + 1) + "..." : t.substring(0, e2) + s2;
  }
  return t;
}
function wt(t) {
  return t.replace(/\/(date|number|duration)$/i, "");
}
function Pt(t) {
  return t ? t.replace(/<[^>]*>/g, "") : t;
}
function Dt(t) {
  return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
function xt(t) {
  const e2 = /[\u0590-\u05FF\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/, i2 = /([^اأدذرزو]*[اأدذرزو])/gi;
  let s2 = t.split(/(\s+)/), r2 = [];
  return s2.forEach((t2) => {
    if (t2.match(/^\s+$/)) (t2 = " ") && (t2 = "  "), r2.push(t2);
    else if (e2.test(t2)) {
      let e3 = t2.split(i2).filter((t3) => "" !== t3);
      r2 = r2.concat(e3);
    } else r2 = r2.concat([...t2]);
  }), r2;
}
function kt(t, e2 = false) {
  const i2 = new Date(t.getFullYear(), 0, 0), s2 = t.getTime() - i2.getTime() + 60 * (i2.getTimezoneOffset() - t.getTimezoneOffset()) * 1e3, r2 = 864e5;
  return Math.floor(s2 / r2);
}
function Ot(t, e2 = false) {
  const i2 = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate())), s2 = i2.getUTCDay() || 7;
  i2.setUTCDate(i2.getUTCDate() + 4 - s2);
  const r2 = new Date(Date.UTC(i2.getUTCFullYear(), 0, 1));
  return Math.ceil(((i2.getTime() - r2.getTime()) / 864e5 + 1) / 7);
}
function Tt(t, e2 = false) {
  const i2 = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate())), s2 = i2.getUTCDay() || 7;
  i2.setUTCDate(i2.getUTCDate() + 4 - s2);
  return new Date(Date.UTC(i2.getUTCFullYear(), 0, 1)).getFullYear();
}
function St(t, e2 = false) {
  const i2 = Ot(new Date(t.getFullYear(), t.getMonth(), 1), e2);
  let s2 = Ot(t, e2);
  return 1 == s2 && (s2 = 53), s2 - i2 + 1;
}
function jt(t, e2, i2 = 1, s2 = false) {
  let r2 = new Date(e2, 0, 4, 0, 0, 0, 0);
  return s2 && r2.setUTCFullYear(e2), 7 * t + i2 - ((r2.getDay() || 7) + 3);
}
function Et(t, e2) {
  return t > 12 ? t -= 12 : 0 === t && (t = 12), null != e2 ? t + (e2 - 1) : t;
}
function Ct(t, e2 = false, i2 = false, s2 = false, r2) {
  if (s2) return e2 ? "Coordinated Universal Time" : "UTC";
  if (r2) {
    const i3 = t.toLocaleString("en-US", { timeZone: r2 });
    return vt(t.toLocaleString("en-US", { timeZone: r2, timeZoneName: e2 ? "long" : "short" }).substr(i3.length));
  }
  let a2 = t.toLocaleString("UTC"), n2 = t.toLocaleString("UTC", { timeZoneName: e2 ? "long" : "short" }).substr(a2.length);
  return false === i2 && (n2 = n2.replace(/ (standard|daylight|summer|winter) /i, " ")), vt(n2);
}
function Mt(t, e2) {
  const i2 = e2 || new Date(Date.UTC(2012, 0, 1, 0, 0, 0, 0)), s2 = new Date(i2.toLocaleString("en-US", { timeZone: "UTC" }));
  return (new Date(i2.toLocaleString("en-US", { timeZone: t })).getTime() - s2.getTime()) / 6e4 * -1;
}
function Bt(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}
function At(t) {
  let e2, i2, s2, r2 = t.h, a2 = t.s, n2 = t.l;
  if (0 == a2) e2 = i2 = s2 = n2;
  else {
    let t2 = function(t3, e3, i3) {
      return i3 < 0 && (i3 += 1), i3 > 1 && (i3 -= 1), i3 < 1 / 6 ? t3 + 6 * (e3 - t3) * i3 : i3 < 0.5 ? e3 : i3 < 2 / 3 ? t3 + (e3 - t3) * (2 / 3 - i3) * 6 : t3;
    }, o3 = n2 < 0.5 ? n2 * (1 + a2) : n2 + a2 - n2 * a2, h2 = 2 * n2 - o3;
    e2 = t2(h2, o3, r2 + 1 / 3), i2 = t2(h2, o3, r2), s2 = t2(h2, o3, r2 - 1 / 3);
  }
  return { r: Math.round(255 * e2), g: Math.round(255 * i2), b: Math.round(255 * s2) };
}
function Ht(t) {
  let e2 = t.r / 255, i2 = t.g / 255, s2 = t.b / 255, r2 = Math.max(e2, i2, s2), a2 = Math.min(e2, i2, s2), n2 = 0, o3 = 0, h2 = (r2 + a2) / 2;
  if (r2 === a2) n2 = o3 = 0;
  else {
    let t2 = r2 - a2;
    switch (o3 = h2 > 0.5 ? t2 / (2 - r2 - a2) : t2 / (r2 + a2), r2) {
      case e2:
        n2 = (i2 - s2) / t2 + (i2 < s2 ? 6 : 0);
        break;
      case i2:
        n2 = (s2 - e2) / t2 + 2;
        break;
      case s2:
        n2 = (e2 - i2) / t2 + 4;
    }
    n2 /= 6;
  }
  return { h: n2, s: o3, l: h2 };
}
function It(t, e2) {
  return { r: Math.max(0, Math.min(255, t.r + Lt(t.r, e2))), g: Math.max(0, Math.min(255, t.g + Lt(t.g, e2))), b: Math.max(0, Math.min(255, t.b + Lt(t.b, e2))), a: t.a };
}
function Lt(t, e2) {
  let i2 = e2 > 0 ? 255 - t : t;
  return Math.round(i2 * e2);
}
function Nt(t, e2) {
  {
    let i2 = Lt(Math.min(Math.max(t.r, t.g, t.b), 230), e2);
    return { r: Math.max(0, Math.min(255, Math.round(t.r + i2))), g: Math.max(0, Math.min(255, Math.round(t.g + i2))), b: Math.max(0, Math.min(255, Math.round(t.b + i2))), a: t.a };
  }
}
function Rt(t) {
  return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3 >= 128;
}
function Ft(t, e2) {
  if (void 0 === t || 1 == e2) return t;
  let i2 = Ht(t);
  return i2.s = e2, At(i2);
}
function Wt(t, e2 = { r: 255, g: 255, b: 255 }, i2 = { r: 255, g: 255, b: 255 }) {
  let s2 = e2, r2 = i2;
  return Rt(i2) && (s2 = i2, r2 = e2), Rt(t) ? r2 : s2;
}
function Ut(t, e2) {
  return t || (t = []), [...t, ...e2].filter((t2, e3, i2) => i2.indexOf(t2) === e3);
}
function Vt(t, e2) {
  return !!e2 && (t.left == e2.left && (t.right == e2.right && (t.top == e2.top && t.bottom == e2.bottom)));
}
function Kt(t) {
  return "#" === t[0] && (t = t.substr(1)), 3 == t.length && (t = t[0].repeat(2) + t[1].repeat(2) + t[2].repeat(2)), parseInt(t, 16);
}
function Gt(t) {
  let e2 = (t = t.replace(/[ ]/g, "")).match(/^rgb\(([0-9]*),([0-9]*),([0-9]*)\)/i);
  if (e2) e2.push("1");
  else if (e2 = t.match(/^rgba\(([0-9]*),([0-9]*),([0-9]*),([.0-9]*)\)/i), !e2) return 0;
  let i2 = "";
  for (let s2 = 1; s2 <= 3; s2++) {
    let t2 = parseInt(e2[s2]).toString(16);
    1 == t2.length && (t2 = "0" + t2), i2 += t2;
  }
  return Kt(i2);
}
function zt(t) {
  return Yt.fromAny(t);
}
var Yt = class _Yt {
  constructor(t) {
    Object.defineProperty(this, "_hex", { enumerable: true, configurable: true, writable: true, value: void 0 }), this._hex = 0 | t;
  }
  get hex() {
    return this._hex;
  }
  get r() {
    return this._hex >>> 16;
  }
  get g() {
    return this._hex >> 8 & 255;
  }
  get b() {
    return 255 & this._hex;
  }
  toCSS(t = 1) {
    return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + t + ")";
  }
  toCSSHex() {
    return "#" + mt(this.r.toString(16), 2) + mt(this.g.toString(16), 2) + mt(this.b.toString(16), 2);
  }
  toHSL(t = 1) {
    return Ht({ r: this.r, g: this.g, b: this.b, a: t });
  }
  static fromHSL(t, e2, i2) {
    const s2 = At({ h: t, s: e2, l: i2 });
    return this.fromRGB(s2.r, s2.g, s2.b);
  }
  toString() {
    return this.toCSSHex();
  }
  static fromHex(t) {
    return new _Yt(t);
  }
  static fromRGB(t, e2, i2) {
    return new _Yt((0 | i2) + (e2 << 8) + (t << 16));
  }
  static fromString(t) {
    return new _Yt(Kt(t));
  }
  static fromCSS(t) {
    return new _Yt(Gt(t));
  }
  static fromAny(t) {
    if (g(t)) {
      if ("#" == t[0]) return _Yt.fromString(t);
      if ("rgb" == t.substr(0, 3)) return _Yt.fromCSS(t);
    } else {
      if (_(t)) return _Yt.fromHex(t);
      if (t instanceof _Yt) return _Yt.fromHex(t.hex);
    }
    throw new Error("Unknown color syntax: " + t);
  }
  static alternative(t, e2, i2) {
    const s2 = Wt({ r: t.r, g: t.g, b: t.b }, e2 ? { r: e2.r, g: e2.g, b: e2.b } : void 0, i2 ? { r: i2.r, g: i2.g, b: i2.b } : void 0);
    return this.fromRGB(s2.r, s2.g, s2.b);
  }
  static interpolate(t, e2, i2, s2 = "rgb") {
    if ("hsl" == s2) {
      const s3 = e2.toHSL(), r2 = i2.toHSL();
      return _Yt.fromHSL(Zt(t, s3.h, r2.h), Zt(t, s3.s, r2.s), Zt(t, s3.l, r2.l));
    }
    return _Yt.fromRGB(Zt(t, e2.r, i2.r), Zt(t, e2.g, i2.g), Zt(t, e2.b, i2.b));
  }
  static lighten(t, e2) {
    const i2 = It({ r: t.r, g: t.g, b: t.b }, e2);
    return _Yt.fromRGB(i2.r, i2.g, i2.b);
  }
  static brighten(t, e2) {
    const i2 = Nt({ r: t.r, g: t.g, b: t.b }, e2);
    return _Yt.fromRGB(i2.r, i2.g, i2.b);
  }
  static saturate(t, e2) {
    const i2 = Ft({ r: t.r, g: t.g, b: t.b }, e2);
    return _Yt.fromRGB(i2.r, i2.g, i2.b);
  }
};
var Xt = class {
  constructor() {
    Object.defineProperty(this, "_listeners", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_killed", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_disabled", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_iterating", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_enabled", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_disposed", { enumerable: true, configurable: true, writable: true, value: void 0 }), this._listeners = [], this._killed = [], this._disabled = {}, this._iterating = 0, this._enabled = true, this._disposed = false;
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    if (!this._disposed) {
      this._disposed = true;
      const t = this._listeners;
      this._iterating = 1, this._listeners = null, this._disabled = null;
      try {
        P(t, (t2) => {
          t2.disposer.dispose();
        });
      } finally {
        this._killed = null, this._iterating = null;
      }
    }
  }
  hasListeners() {
    return 0 !== this._listeners.length;
  }
  hasListenersByType(t) {
    return y(this._listeners, (e2) => (null === e2.type || e2.type === t) && !e2.killed);
  }
  enable() {
    this._enabled = true;
  }
  disable() {
    this._enabled = false;
  }
  enableType(t) {
    delete this._disabled[t];
  }
  disableType(t, e2 = 1 / 0) {
    this._disabled[t] = e2;
  }
  _removeListener(t) {
    if (0 === this._iterating) {
      const e2 = this._listeners.indexOf(t);
      if (-1 === e2) throw new Error("Invalid state: could not remove listener");
      this._listeners.splice(e2, 1);
    } else this._killed.push(t);
  }
  _removeExistingListener(t, e2, i2, s2) {
    if (this._disposed) throw new Error("EventDispatcher is disposed");
    this._eachListener((r2) => {
      r2.once !== t || r2.type !== e2 || void 0 !== i2 && r2.callback !== i2 || r2.context !== s2 || r2.disposer.dispose();
    });
  }
  isEnabled(t) {
    if (this._disposed) throw new Error("EventDispatcher is disposed");
    return this._enabled && this._listeners.length > 0 && this.hasListenersByType(t) && void 0 === this._disabled[t];
  }
  removeType(t) {
    if (this._disposed) throw new Error("EventDispatcher is disposed");
    this._eachListener((e2) => {
      e2.type === t && e2.disposer.dispose();
    });
  }
  has(t, e2, i2) {
    return -1 !== M(this._listeners, (s2) => true !== s2.once && s2.type === t && (void 0 === e2 || s2.callback === e2) && s2.context === i2);
  }
  _shouldDispatch(t) {
    if (this._disposed) throw new Error("EventDispatcher is disposed");
    const e2 = this._disabled[t];
    return _(e2) ? (e2 <= 1 ? delete this._disabled[t] : --this._disabled[t], false) : this._enabled;
  }
  _eachListener(t) {
    ++this._iterating;
    try {
      P(this._listeners, t);
    } finally {
      --this._iterating, 0 === this._iterating && 0 !== this._killed.length && (P(this._killed, (t2) => {
        this._removeListener(t2);
      }), this._killed.length = 0);
    }
  }
  dispatch(t, e2) {
    this._shouldDispatch(t) && this._eachListener((i2) => {
      i2.killed || null !== i2.type && i2.type !== t || i2.dispatch(t, e2);
    });
  }
  _on(t, e2, i2, s2, r2, a2) {
    if (this._disposed) throw new Error("EventDispatcher is disposed");
    this._removeExistingListener(t, e2, i2, s2);
    const n2 = { type: e2, callback: i2, context: s2, shouldClone: r2, dispatch: a2, killed: false, once: t, disposer: new z(() => {
      n2.killed = true, this._removeListener(n2);
    }) };
    return this._listeners.push(n2), n2;
  }
  onAll(t, e2, i2 = true) {
    return this._on(false, null, t, e2, i2, (i3, s2) => t.call(e2, s2)).disposer;
  }
  on(t, e2, i2, s2 = true) {
    return this._on(false, t, e2, i2, s2, (t2, s3) => e2.call(i2, s3)).disposer;
  }
  once(t, e2, i2, s2 = true) {
    const r2 = this._on(true, t, e2, i2, s2, (t2, s3) => {
      r2.disposer.dispose(), e2.call(i2, s3);
    });
    return r2.disposer;
  }
  off(t, e2, i2) {
    this._removeExistingListener(false, t, e2, i2);
  }
  copyFrom(t) {
    if (this._disposed) throw new Error("EventDispatcher is disposed");
    if (t === this) throw new Error("Cannot copyFrom the same TargetedEventDispatcher");
    const e2 = [];
    return P(t._listeners, (t2) => {
      !t2.killed && t2.shouldClone && (null === t2.type ? e2.push(this.onAll(t2.callback, t2.context)) : t2.once ? e2.push(this.once(t2.type, t2.callback, t2.context)) : e2.push(this.on(t2.type, t2.callback, t2.context)));
    }), new X(e2);
  }
};
function $t(e2) {
  return o(this, void 0, void 0, function* () {
    if (void 0 !== e2) {
      const t = [];
      U(e2, (e3, i2) => {
        t.push(i2.waitForStop());
      }), yield Promise.all(t);
    }
  });
}
function Zt(t, e2, i2) {
  return e2 + t * (i2 - e2);
}
function Jt(t, e2, i2) {
  return t >= 1 ? i2 : e2;
}
function qt(t, i2, s2) {
  return new e(Zt(t, i2.percent, s2.percent));
}
function Qt(t, e2, i2) {
  return Yt.interpolate(t, e2, i2);
}
function te(t, i2) {
  return "number" == typeof t && "number" == typeof i2 ? Zt : t instanceof e && i2 instanceof e ? qt : t instanceof Yt && i2 instanceof Yt ? Qt : Jt;
}
var ee;
function ie(t, e2) {
  if (!(t >= 0 && t < e2)) throw new Error("Index out of bounds: " + t);
}
!function(t) {
  t[t.Stopped = 0] = "Stopped", t[t.Playing = 1] = "Playing", t[t.Paused = 2] = "Paused";
}(ee || (ee = {}));
var se = class {
  constructor(t = []) {
    Object.defineProperty(this, "_values", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "events", { enumerable: true, configurable: true, writable: true, value: new Xt() }), this._values = t;
  }
  get values() {
    return this._values;
  }
  contains(t) {
    return -1 !== this._values.indexOf(t);
  }
  removeValue(t) {
    let e2 = 0, i2 = this._values.length;
    for (; e2 < i2; ) this._values[e2] === t ? (this.removeIndex(e2), --i2) : ++e2;
  }
  indexOf(t) {
    return v(this._values, t);
  }
  get length() {
    return this._values.length;
  }
  hasIndex(t) {
    return t >= 0 && t < this._values.length;
  }
  getIndex(t) {
    return this._values[t];
  }
  _onPush(t) {
    this.events.isEnabled("push") && this.events.dispatch("push", { type: "push", target: this, newValue: t });
  }
  _onInsertIndex(t, e2) {
    this.events.isEnabled("insertIndex") && this.events.dispatch("insertIndex", { type: "insertIndex", target: this, index: t, newValue: e2 });
  }
  _onSetIndex(t, e2, i2) {
    this.events.isEnabled("setIndex") && this.events.dispatch("setIndex", { type: "setIndex", target: this, index: t, oldValue: e2, newValue: i2 });
  }
  _onRemoveIndex(t, e2) {
    this.events.isEnabled("removeIndex") && this.events.dispatch("removeIndex", { type: "removeIndex", target: this, index: t, oldValue: e2 });
  }
  _onMoveIndex(t, e2, i2) {
    this.events.isEnabled("moveIndex") && this.events.dispatch("moveIndex", { type: "moveIndex", target: this, oldIndex: t, newIndex: e2, value: i2 });
  }
  _onClear(t) {
    this.events.isEnabled("clear") && this.events.dispatch("clear", { type: "clear", target: this, oldValues: t });
  }
  setIndex(t, e2) {
    ie(t, this._values.length);
    const i2 = this._values[t];
    return i2 !== e2 && (this._values[t] = e2, this._onSetIndex(t, i2, e2)), i2;
  }
  insertIndex(t, e2) {
    return ie(t, this._values.length + 1), E(this._values, t, e2), this._onInsertIndex(t, e2), e2;
  }
  swap(t, e2) {
    const i2 = this._values.length;
    if (ie(t, i2), ie(e2, i2), t !== e2) {
      const i3 = this._values[t], s2 = this._values[e2];
      this._values[t] = s2, this._onSetIndex(t, i3, s2), this._values[e2] = i3, this._onSetIndex(e2, s2, i3);
    }
  }
  removeIndex(t) {
    ie(t, this._values.length);
    const e2 = this._values[t];
    return C(this._values, t), this._onRemoveIndex(t, e2), e2;
  }
  moveValue(t, e2) {
    let i2 = this.indexOf(t);
    if (-1 !== i2) if (C(this._values, i2), null == e2) {
      const e3 = this._values.length;
      this._values.push(t), this._onMoveIndex(i2, e3, t);
    } else E(this._values, e2, t), this._onMoveIndex(i2, e2, t);
    else null == e2 ? (this._values.push(t), this._onPush(t)) : (E(this._values, e2, t), this._onInsertIndex(e2, t));
    return t;
  }
  push(t) {
    return this._values.push(t), this._onPush(t), t;
  }
  unshift(t) {
    return this.insertIndex(0, t), t;
  }
  pushAll(t) {
    P(t, (t2) => {
      this.push(t2);
    });
  }
  copyFrom(t) {
    this.pushAll(t._values);
  }
  pop() {
    return this._values.length - 1 < 0 ? void 0 : this.removeIndex(this._values.length - 1);
  }
  shift() {
    return this._values.length ? this.removeIndex(0) : void 0;
  }
  setAll(t) {
    const e2 = this._values;
    this._values = [], this._onClear(e2), P(t, (t2) => {
      this._values.push(t2), this._onPush(t2);
    });
  }
  clear() {
    this.setAll([]);
  }
  *[Symbol.iterator]() {
    const t = this._values.length;
    for (let e2 = 0; e2 < t; ++e2) yield this._values[e2];
  }
  each(t) {
    P(this._values, t);
  }
  eachReverse(t) {
    D(this._values, t);
  }
};
var re = class extends se {
  constructor() {
    super(...arguments), Object.defineProperty(this, "autoDispose", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "_disposed", { enumerable: true, configurable: true, writable: true, value: false });
  }
  _onSetIndex(t, e2, i2) {
    this.autoDispose && e2.dispose(), super._onSetIndex(t, e2, i2);
  }
  _onRemoveIndex(t, e2) {
    this.autoDispose && e2.dispose(), super._onRemoveIndex(t, e2);
  }
  _onClear(t) {
    this.autoDispose && P(t, (t2) => {
      t2.dispose();
    }), super._onClear(t);
  }
  _dispose() {
    this.autoDispose && P(this._values, (t) => {
      t.dispose();
    });
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = true, this._dispose());
  }
};
var ae = class extends re {
  constructor(t, e2) {
    super(), Object.defineProperty(this, "template", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "make", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.template = t, this.make = e2;
  }
  _dispose() {
    super._dispose(), this.autoDispose && this.template.dispose();
  }
};
var ne = class extends se {
  constructor(t) {
    super(), Object.defineProperty(this, "_disposed", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_container", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_events", { enumerable: true, configurable: true, writable: true, value: void 0 }), this._container = t, this._events = this.events.onAll((t2) => {
      if ("clear" === t2.type) P(t2.oldValues, (t3) => {
        this._onRemoved(t3);
      });
      else if ("push" === t2.type) this._onInserted(t2.newValue);
      else if ("setIndex" === t2.type) this._onRemoved(t2.oldValue), this._onInserted(t2.newValue, t2.index);
      else if ("insertIndex" === t2.type) this._onInserted(t2.newValue, t2.index);
      else if ("removeIndex" === t2.type) this._onRemoved(t2.oldValue);
      else {
        if ("moveIndex" !== t2.type) throw new Error("Unknown IListEvent type");
        this._onRemoved(t2.value), this._onInserted(t2.value, t2.newIndex);
      }
    });
  }
  _onInserted(t, e2) {
    t._setParent(this._container, true);
    const i2 = this._container._childrenDisplay;
    void 0 === e2 ? i2.addChild(t._display) : i2.addChildAt(t._display, e2);
  }
  _onRemoved(t) {
    this._container._childrenDisplay.removeChild(t._display), this._container.markDirtyBounds(), this._container.markDirty();
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = true, this._events.dispose(), P(this.values, (t) => {
      t.dispose();
    }));
  }
};
var oe = Math.PI;
var he = oe / 180;
var le = 180 / oe;
function de(t, e2, i2) {
  if (!_(e2) || e2 <= 0) {
    return Math.round(t);
  }
  {
    let i3 = Math.pow(10, e2);
    return Math.round(t * i3) / i3;
  }
}
function ue(t, e2) {
  if (!_(e2) || e2 <= 0) return Math.ceil(t);
  {
    let i2 = Math.pow(10, e2);
    return Math.ceil(t * i2) / i2;
  }
}
function pe(t, e2, i2) {
  return Math.min(Math.max(t, e2), i2);
}
function ce(t) {
  return Math.sin(he * t);
}
function ge(t) {
  return Math.cos(he * t);
}
function _e(t) {
  return (t %= 360) < 0 && (t += 360), t;
}
function me(t, e2, i2, s2, r2) {
  let a2 = Number.MAX_VALUE, n2 = Number.MAX_VALUE, o3 = -Number.MAX_VALUE, h2 = -Number.MAX_VALUE, l2 = [];
  l2.push(fe(r2, i2)), l2.push(fe(r2, s2));
  let d2 = Math.min(90 * Math.floor(i2 / 90), 90 * Math.floor(s2 / 90)), u2 = Math.max(90 * Math.ceil(i2 / 90), 90 * Math.ceil(s2 / 90));
  for (let p2 = d2; p2 <= u2; p2 += 90) p2 >= i2 && p2 <= s2 && l2.push(fe(r2, p2));
  for (let p2 = 0; p2 < l2.length; p2++) {
    let t2 = l2[p2];
    t2.x < a2 && (a2 = t2.x), t2.y < n2 && (n2 = t2.y), t2.x > o3 && (o3 = t2.x), t2.y > h2 && (h2 = t2.y);
  }
  return { left: t + a2, top: e2 + n2, right: t + o3, bottom: e2 + h2 };
}
function fe(t, e2) {
  return { x: t * ge(e2), y: t * ce(e2) };
}
function be(t) {
  const e2 = t.length;
  if (e2 > 0) {
    let i2 = t[0], s2 = i2.left, r2 = i2.top, a2 = i2.right, n2 = i2.bottom;
    if (e2 > 1) for (let o3 = 1; o3 < e2; o3++) i2 = t[o3], s2 = Math.min(i2.left, s2), a2 = Math.max(i2.right, a2), r2 = Math.min(i2.top, r2), n2 = Math.max(i2.bottom, n2);
    return { left: s2, right: a2, top: r2, bottom: n2 };
  }
  return { left: 0, right: 0, top: 0, bottom: 0 };
}
function ve(t, e2) {
  return t.x >= e2.left && t.y >= e2.top && t.x <= e2.right && t.y <= e2.bottom;
}
function ye(t) {
  return t;
}
function we(t) {
  return t * t * t;
}
function Pe(t) {
  return function(e2) {
    return 1 - t(1 - e2);
  };
}
var De = class {
  constructor(t, e2) {
    Object.defineProperty(this, "_entity", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_settings", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_userSettings", { enumerable: true, configurable: true, writable: true, value: {} }), this._entity = t, this._settings = e2, U(e2, (t2) => {
      this._userSettings[t2] = true;
    });
  }
  get(t, e2) {
    const i2 = this._settings[t];
    return void 0 !== i2 ? i2 : e2;
  }
  setRaw(t, e2) {
    this._settings[t] = e2;
  }
  set(t, e2) {
    this._userSettings[t] = true, this.setRaw(t, e2);
  }
  remove(t) {
    delete this._userSettings[t], delete this._settings[t];
  }
  setAll(t) {
    R(t).forEach((e2) => {
      this.set(e2, t[e2]);
    });
  }
  _eachSetting(t) {
    U(this._settings, t);
  }
  apply() {
    const t = { stateAnimationEasing: true, stateAnimationDuration: true }, e2 = this._entity.states.lookup("default");
    this._eachSetting((i2, s2) => {
      t[i2] || (t[i2] = true, this !== e2 && (i2 in e2._settings || (e2._settings[i2] = this._entity.get(i2))), this._entity.set(i2, s2));
    });
  }
  applyAnimate(t) {
    null == t && (t = this._settings.stateAnimationDuration), null == t && (t = this.get("stateAnimationDuration", this._entity.get("stateAnimationDuration", 0)));
    let e2 = this._settings.stateAnimationEasing;
    null == e2 && (e2 = this.get("stateAnimationEasing", this._entity.get("stateAnimationEasing", we)));
    const i2 = this._entity.states.lookup("default"), s2 = { stateAnimationEasing: true, stateAnimationDuration: true }, r2 = {};
    return this._eachSetting((a2, n2) => {
      if (!s2[a2]) {
        s2[a2] = true, this != i2 && (a2 in i2._settings || (i2._settings[a2] = this._entity.get(a2)));
        const o3 = this._entity.animate({ key: a2, to: n2, duration: t, easing: e2 });
        o3 && (r2[a2] = o3);
      }
    }), r2;
  }
};
var xe = class {
  constructor(t) {
    Object.defineProperty(this, "_states", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_entity", { enumerable: true, configurable: true, writable: true, value: void 0 }), this._entity = t;
  }
  lookup(t) {
    return this._states[t];
  }
  create(t, e2) {
    const i2 = this._states[t];
    if (i2) return i2.setAll(e2), i2;
    {
      const i3 = new De(this._entity, e2);
      return this._states[t] = i3, i3;
    }
  }
  remove(t) {
    delete this._states[t];
  }
  apply(t) {
    const e2 = this._states[t];
    e2 && e2.apply(), this._entity._applyState(t);
  }
  applyAnimate(t, e2) {
    let i2;
    const s2 = this._states[t];
    return s2 && (i2 = s2.applyAnimate(e2)), this._entity._applyStateAnimated(t, e2), i2;
  }
};
var ke = class {
  constructor() {
    Object.defineProperty(this, "version", { enumerable: true, configurable: true, writable: true, value: "5.10.12" }), Object.defineProperty(this, "licenses", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "entitiesById", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "rootElements", { enumerable: true, configurable: true, writable: true, value: [] });
  }
};
var Oe = new ke();
function Te(t) {
  Oe.licenses.push(t);
}
function Se(t, e2) {
  return t === e2 ? 0 : t < e2 ? -1 : 1;
}
function je(t, e2, i2) {
  const s2 = t.length, r2 = e2.length, a2 = Math.min(s2, r2);
  for (let n2 = 0; n2 < a2; ++n2) {
    const s3 = i2(t[n2], e2[n2]);
    if (0 !== s3) return s3;
  }
  return Se(s2, r2);
}
function Ee(t, e2) {
  return t === e2 ? 0 : t < e2 ? -1 : 1;
}
var Ce = class {
  constructor(t) {
    Object.defineProperty(this, "_entity", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_callbacks", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_disabled", { enumerable: true, configurable: true, writable: true, value: {} }), this._entity = t;
  }
  add(t, e2) {
    let i2 = this._callbacks[t];
    return void 0 === i2 && (i2 = this._callbacks[t] = []), i2.push(e2), this._entity._markDirtyKey(t), new z(() => {
      O(i2, e2) && this._entity._markDirtyKey(t);
    });
  }
  remove(t) {
    const e2 = this._callbacks[t];
    void 0 !== e2 && (delete this._callbacks[t], 0 !== e2.length && this._entity._markDirtyKey(t));
  }
  enable(t) {
    this._disabled[t] && (delete this._disabled[t], this._entity._markDirtyKey(t));
  }
  disable(t) {
    this._disabled[t] || (this._disabled[t] = true, this._entity._markDirtyKey(t));
  }
  fold(t, e2) {
    if (!this._disabled[t]) {
      const i2 = this._callbacks[t];
      if (void 0 !== i2) for (let s2 = 0, r2 = i2.length; s2 < r2; ++s2) e2 = i2[s2](e2, this._entity, t);
    }
    return e2;
  }
};
var Me = class {
  constructor(t, e2, i2, s2, r2, a2, n2) {
    Object.defineProperty(this, "_animation", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_from", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_to", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_duration", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_easing", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_loops", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_interpolate", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_oldTime", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_time", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_stopped", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_playing", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "events", { enumerable: true, configurable: true, writable: true, value: new Xt() }), this._animation = t, this._from = e2, this._to = i2, this._duration = s2, this._easing = r2, this._loops = a2, this._interpolate = te(e2, i2), this._oldTime = n2;
  }
  get to() {
    return this._to;
  }
  get from() {
    return this._from;
  }
  get playing() {
    return this._playing;
  }
  get stopped() {
    return this._stopped;
  }
  stop() {
    this._stopped || (this._stopped = true, this._playing = false, this.events.isEnabled("stopped") && this.events.dispatch("stopped", { type: "stopped", target: this }));
  }
  pause() {
    this._playing = false, this._oldTime = null;
  }
  play() {
    this._stopped || this._playing || (this._playing = true, this._animation._startAnimation());
  }
  get percentage() {
    return this._time / this._duration;
  }
  waitForStop() {
    return new Promise((t, e2) => {
      if (this._stopped) t();
      else {
        const e3 = () => {
          i2.dispose(), t();
        }, i2 = this.events.on("stopped", e3);
      }
    });
  }
  _checkEnded() {
    return !(this._loops > 1) || (--this._loops, false);
  }
  _run(t) {
    null !== this._oldTime && (this._time += t - this._oldTime, this._time > this._duration && (this._time = this._duration)), this._oldTime = t;
  }
  _reset(t) {
    this._oldTime = t, this._time = 0;
  }
  _value(t) {
    return this._interpolate(this._easing(t), this._from, this._to);
  }
};
var Be = 0;
var Ae = class {
  constructor(t) {
    Object.defineProperty(this, "uid", { enumerable: true, configurable: true, writable: true, value: ++Be }), Object.defineProperty(this, "_settings", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_privateSettings", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_settingEvents", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_privateSettingEvents", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_prevSettings", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_prevPrivateSettings", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_animatingSettings", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_animatingPrivateSettings", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_disposed", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_userProperties", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "enableDispose", { enumerable: true, configurable: true, writable: true, value: true }), this._settings = t;
  }
  _checkDirty() {
    R(this._settings).forEach((t) => {
      this._userProperties[t] = true, this._markDirtyKey(t);
    });
  }
  resetUserSettings() {
    this._userProperties = {};
  }
  _runAnimation(t) {
    let e2 = ee.Stopped;
    if (!this.isDisposed()) {
      let i2 = false, s2 = false;
      U(this._animatingSettings, (e3, r2) => {
        if (r2.stopped) this._stopAnimation(e3);
        else if (r2.playing) {
          r2._run(t);
          const s3 = r2.percentage;
          s3 >= 1 ? r2._checkEnded() ? this.set(e3, r2._value(1)) : (i2 = true, r2._reset(t), this._set(e3, r2._value(1))) : (i2 = true, this._set(e3, r2._value(s3)));
        } else s2 = true;
      }), U(this._animatingPrivateSettings, (e3, r2) => {
        if (r2.stopped) this._stopAnimationPrivate(e3);
        else if (r2.playing) {
          r2._run(t);
          const s3 = r2.percentage;
          s3 >= 1 ? r2._checkEnded() ? this.setPrivate(e3, r2._value(1)) : (i2 = true, r2._reset(t), this._setPrivate(e3, r2._value(1))) : (i2 = true, this._setPrivate(e3, r2._value(s3)));
        } else s2 = true;
      }), i2 ? e2 = ee.Playing : s2 && (e2 = ee.Paused);
    }
    return e2;
  }
  _markDirtyKey(t) {
    this.markDirty();
  }
  _markDirtyPrivateKey(t) {
    this.markDirty();
  }
  on(t, e2) {
    let i2 = this._settingEvents[t];
    return void 0 === i2 && (i2 = this._settingEvents[t] = []), i2.push(e2), new z(() => {
      O(i2, e2), 0 === i2.length && delete this._settingEvents[t];
    });
  }
  off(t, e2) {
    let i2 = this._settingEvents[t];
    void 0 !== i2 && void 0 !== e2 ? O(i2, e2) : delete this._settingEvents[t];
  }
  onPrivate(t, e2) {
    let i2 = this._privateSettingEvents[t];
    return void 0 === i2 && (i2 = this._privateSettingEvents[t] = []), i2.push(e2), new z(() => {
      O(i2, e2), 0 === i2.length && delete this._privateSettingEvents[t];
    });
  }
  offPrivate(t, e2) {
    let i2 = this._privateSettingEvents[t];
    void 0 !== i2 && void 0 !== e2 ? O(i2, e2) : delete this._privateSettingEvents[t];
  }
  getRaw(t, e2) {
    const i2 = this._settings[t];
    return void 0 !== i2 ? i2 : e2;
  }
  has(t) {
    return t in this._settings;
  }
  get(t, e2) {
    return this.getRaw(t, e2);
  }
  _sendKeyEvent(t, e2) {
    const i2 = this._settingEvents[t];
    void 0 !== i2 && P(i2, (i3) => {
      i3(e2, this, t);
    });
  }
  _sendPrivateKeyEvent(t, e2) {
    const i2 = this._privateSettingEvents[t];
    void 0 !== i2 && P(i2, (i3) => {
      i3(e2, this, t);
    });
  }
  _setRaw(t, e2, i2) {
    this._prevSettings[t] = e2, this._sendKeyEvent(t, i2);
  }
  setRaw(t, e2) {
    const i2 = this._settings[t];
    this._settings[t] = e2, i2 !== e2 && this._setRaw(t, i2, e2);
  }
  _set(t, e2) {
    const i2 = this._settings[t];
    this._settings[t] = e2, i2 !== e2 && (this._setRaw(t, i2, e2), this._markDirtyKey(t));
  }
  _stopAnimation(t) {
    const e2 = this._animatingSettings[t];
    e2 && (delete this._animatingSettings[t], e2.stop());
  }
  set(t, e2) {
    return this._set(t, e2), this._stopAnimation(t), e2;
  }
  remove(t) {
    t in this._settings && (this._prevSettings[t] = this._settings[t], delete this._settings[t], this._sendKeyEvent(t, void 0), this._markDirtyKey(t)), this._stopAnimation(t);
  }
  removeAll() {
    P(R(this._settings), (t) => {
      this.remove(t);
    });
  }
  getPrivate(t, e2) {
    const i2 = this._privateSettings[t];
    return void 0 !== i2 ? i2 : e2;
  }
  _setPrivateRaw(t, e2, i2) {
    this._prevPrivateSettings[t] = e2, this._sendPrivateKeyEvent(t, i2);
  }
  setPrivateRaw(t, e2) {
    const i2 = this._privateSettings[t];
    this._privateSettings[t] = e2, i2 !== e2 && this._setPrivateRaw(t, i2, e2);
  }
  _setPrivate(t, e2) {
    const i2 = this._privateSettings[t];
    this._privateSettings[t] = e2, i2 !== e2 && (this._setPrivateRaw(t, i2, e2), this._markDirtyPrivateKey(t));
  }
  _stopAnimationPrivate(t) {
    const e2 = this._animatingPrivateSettings[t];
    e2 && (e2.stop(), delete this._animatingPrivateSettings[t]);
  }
  setPrivate(t, e2) {
    return this._setPrivate(t, e2), this._stopAnimationPrivate(t), e2;
  }
  removePrivate(t) {
    t in this._privateSettings && (this._prevPrivateSettings[t] = this._privateSettings[t], delete this._privateSettings[t], this._markDirtyPrivateKey(t)), this._stopAnimationPrivate(t);
  }
  setAll(t) {
    U(t, (t2, e2) => {
      this.set(t2, e2);
    });
  }
  animate(t) {
    const e2 = t.key, i2 = t.to, s2 = t.duration || 0, r2 = t.loops || 1, a2 = void 0 === t.from ? this.get(e2) : t.from, n2 = void 0 === t.easing ? ye : t.easing;
    if (0 === s2) this.set(e2, i2);
    else {
      if (void 0 !== a2 && a2 !== i2) {
        this.set(e2, a2);
        const t2 = this._animatingSettings[e2] = new Me(this, a2, i2, s2, n2, r2, this._animationTime());
        return this._startAnimation(), t2;
      }
      this.set(e2, i2);
    }
    const o3 = new Me(this, a2, i2, s2, n2, r2, null);
    return o3.stop(), o3;
  }
  animatePrivate(t) {
    const e2 = t.key, i2 = t.to, s2 = t.duration || 0, r2 = t.loops || 1, a2 = void 0 === t.from ? this.getPrivate(e2) : t.from, n2 = void 0 === t.easing ? ye : t.easing;
    if (0 === s2) this.setPrivate(e2, i2);
    else {
      if (void 0 !== a2 && a2 !== i2) {
        this.setPrivate(e2, a2);
        const t2 = this._animatingPrivateSettings[e2] = new Me(this, a2, i2, s2, n2, r2, this._animationTime());
        return this._startAnimation(), t2;
      }
      this.setPrivate(e2, i2);
    }
    const o3 = new Me(this, a2, i2, s2, n2, r2, null);
    return o3.stop(), o3;
  }
  _dispose() {
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this.enableDispose && !this._disposed && (this._disposed = true, this._dispose());
  }
};
var He = class extends Ae {
  constructor(t, e2, i2, s2 = []) {
    if (super(e2), Object.defineProperty(this, "_root", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_user_id", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "states", { enumerable: true, configurable: true, writable: true, value: new xe(this) }), Object.defineProperty(this, "adapters", { enumerable: true, configurable: true, writable: true, value: new Ce(this) }), Object.defineProperty(this, "events", { enumerable: true, configurable: true, writable: true, value: this._createEvents() }), Object.defineProperty(this, "_userPrivateProperties", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_dirty", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_dirtyPrivate", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_template", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_templates", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_internalTemplates", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_defaultThemes", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_templateDisposers", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_disposers", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_runSetup", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "_disposerProperties", { enumerable: true, configurable: true, writable: true, value: {} }), !i2) throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    this._root = t, this._internalTemplates = s2, e2.id && this._registerId(e2.id);
  }
  static new(t, e2, i2) {
    const s2 = new this(t, e2, true);
    return s2._template = i2, s2._afterNew(), s2;
  }
  static _new(t, e2, i2 = []) {
    const s2 = new this(t, e2, true, i2);
    return s2._afterNew(), s2;
  }
  _afterNew() {
    this._checkDirty();
    let t = false;
    const e2 = this._template;
    e2 && (t = true, e2._setObjectTemplate(this)), P(this._internalTemplates, (e3) => {
      t = true, e3._setObjectTemplate(this);
    }), t && this._applyTemplates(false), this.states.create("default", {}), this._setDefaults();
  }
  _afterNewApplyThemes() {
    this._checkDirty();
    const t = this._template;
    t && t._setObjectTemplate(this), P(this._internalTemplates, (t2) => {
      t2._setObjectTemplate(this);
    }), this.states.create("default", {}), this._setDefaults(), this._applyThemes();
  }
  _createEvents() {
    return new Xt();
  }
  get classNames() {
    return this.constructor.classNames;
  }
  get className() {
    return this.constructor.className;
  }
  _setDefaults() {
  }
  _setDefaultFn(t, e2) {
    const i2 = this.get(t);
    if (i2) return i2;
    {
      const i3 = e2();
      return this.set(t, i3), i3;
    }
  }
  _setDefault(t, e2) {
    this.has(t) || super.set(t, e2);
  }
  _setRawDefault(t, e2) {
    this.has(t) || super.setRaw(t, e2);
  }
  _clearDirty() {
    R(this._dirty).forEach((t) => {
      this._dirty[t] = false;
    }), R(this._dirtyPrivate).forEach((t) => {
      this._dirtyPrivate[t] = false;
    });
  }
  isDirty(t) {
    return !!this._dirty[t];
  }
  isPrivateDirty(t) {
    return !!this._dirtyPrivate[t];
  }
  _markDirtyKey(t) {
    this._dirty[t] = true, super._markDirtyKey(t);
  }
  _markDirtyPrivateKey(t) {
    this._dirtyPrivate[t] = true, super._markDirtyKey(t);
  }
  isType(t) {
    return -1 !== this.classNames.indexOf(t);
  }
  _pushPropertyDisposer(t, e2) {
    let i2 = this._disposerProperties[t];
    return void 0 === i2 && (i2 = this._disposerProperties[t] = []), i2.push(e2), e2;
  }
  _disposeProperty(t) {
    const e2 = this._disposerProperties[t];
    void 0 !== e2 && (P(e2, (t2) => {
      t2.dispose();
    }), delete this._disposerProperties[t]);
  }
  set template(t) {
    const e2 = this._template;
    e2 !== t && (this._template = t, e2 && e2._removeObjectTemplate(this), t && t._setObjectTemplate(this), this._applyTemplates());
  }
  get template() {
    return this._template;
  }
  markDirty() {
    this._root._addDirtyEntity(this);
  }
  _startAnimation() {
    this._root._addAnimation(this);
  }
  _animationTime() {
    return this._root.animationTime;
  }
  _applyState(t) {
  }
  _applyStateAnimated(t, e2) {
  }
  get(t, e2) {
    const i2 = this.adapters.fold(t, this._settings[t]);
    return void 0 !== i2 ? i2 : e2;
  }
  isUserSetting(t) {
    return this._userProperties[t] || false;
  }
  set(t, e2) {
    return this._userProperties[t] = true, super.set(t, e2);
  }
  setRaw(t, e2) {
    this._userProperties[t] = true, super.setRaw(t, e2);
  }
  _setSoft(t, e2) {
    return this._userProperties[t] ? e2 : super.set(t, e2);
  }
  remove(t) {
    delete this._userProperties[t], this._removeTemplateProperty(t);
  }
  setPrivate(t, e2) {
    return this._userPrivateProperties[t] = true, super.setPrivate(t, e2);
  }
  setPrivateRaw(t, e2) {
    this._userPrivateProperties[t] = true, super.setPrivateRaw(t, e2);
  }
  removePrivate(t) {
    delete this._userPrivateProperties[t], this._removeTemplatePrivateProperty(t);
  }
  _setTemplateProperty(t, e2, i2) {
    if (!this._userProperties[e2]) {
      t === this._findTemplateByKey(e2) && super.set(e2, i2);
    }
  }
  _setTemplatePrivateProperty(t, e2, i2) {
    if (!this._userPrivateProperties[e2]) {
      t === this._findTemplateByPrivateKey(e2) && super.setPrivate(e2, i2);
    }
  }
  _removeTemplateProperty(t) {
    if (!this._userProperties[t]) {
      const e2 = this._findTemplateByKey(t);
      e2 ? super.set(t, e2._settings[t]) : super.remove(t);
    }
  }
  _removeTemplatePrivateProperty(t) {
    if (!this._userPrivateProperties[t]) {
      const e2 = this._findTemplateByPrivateKey(t);
      e2 ? super.setPrivate(t, e2._privateSettings[t]) : super.removePrivate(t);
    }
  }
  _walkParents(t) {
    t(this._root._rootContainer), t(this);
  }
  _applyStateByKey(t) {
    const e2 = this.states.create(t, {}), i2 = {};
    this._eachTemplate((s2) => {
      const r2 = s2.states.lookup(t);
      r2 && r2._apply(e2, i2);
    }), U(e2._settings, (t2) => {
      i2[t2] || e2._userSettings[t2] || e2.remove(t2);
    });
  }
  _applyTemplate(t, e2) {
    this._templateDisposers.push(t._apply(this, e2)), U(t._settings, (t2, i2) => {
      e2.settings[t2] || this._userProperties[t2] || (e2.settings[t2] = true, super.set(t2, i2));
    }), U(t._privateSettings, (t2, i2) => {
      e2.privateSettings[t2] || this._userPrivateProperties[t2] || (e2.privateSettings[t2] = true, super.setPrivate(t2, i2));
    }), this._runSetup && t.setup && (this._runSetup = false, t.setup(this));
  }
  _findStaticTemplate(t) {
    if (this._template && t(this._template)) return this._template;
  }
  _eachTemplate(t) {
    this._findStaticTemplate((e2) => (t(e2), false)), D(this._internalTemplates, t), P(this._templates, t);
  }
  _applyTemplates(t = true) {
    t && this._disposeTemplates();
    const e2 = { settings: {}, privateSettings: {}, states: {} };
    this._eachTemplate((t2) => {
      this._applyTemplate(t2, e2);
    }), t && (U(this._settings, (t2) => {
      this._userProperties[t2] || e2.settings[t2] || super.remove(t2);
    }), U(this._privateSettings, (t2) => {
      this._userPrivateProperties[t2] || e2.privateSettings[t2] || super.removePrivate(t2);
    }));
  }
  _findTemplate(t) {
    const e2 = this._findStaticTemplate(t);
    if (void 0 === e2) {
      const e3 = H(this._internalTemplates, t);
      return void 0 === e3 ? A(this._templates, t) : e3;
    }
    return e2;
  }
  _findTemplateByKey(t) {
    return this._findTemplate((e2) => t in e2._settings);
  }
  _findTemplateByPrivateKey(t) {
    return this._findTemplate((e2) => t in e2._privateSettings);
  }
  _disposeTemplates() {
    P(this._templateDisposers, (t) => {
      t.dispose();
    }), this._templateDisposers.length = 0;
  }
  _removeTemplates() {
    P(this._templates, (t) => {
      t._removeObjectTemplate(this);
    }), this._templates.length = 0;
  }
  _applyThemes(t = false) {
    let e2 = false;
    const i2 = [];
    let s2 = [];
    const r2 = /* @__PURE__ */ new Set(), a2 = this.get("themeTagsSelf");
    return a2 && P(a2, (t2) => {
      r2.add(t2);
    }), this._walkParents((t2) => {
      t2 === this._root._rootContainer && (e2 = true), t2._defaultThemes.length > 0 && i2.push(t2._defaultThemes);
      const a3 = t2.get("themes");
      a3 && s2.push(a3);
      const n2 = t2.get("themeTags");
      n2 && P(n2, (t3) => {
        r2.add(t3);
      });
    }), s2 = i2.concat(s2), this._removeTemplates(), (e2 || t) && D(this.classNames, (t2) => {
      const e3 = [];
      P(s2, (i3) => {
        P(i3, (i4) => {
          const s3 = i4._lookupRules(t2);
          s3 && D(s3, (t3) => {
            if (t3.tags.every((t4) => r2.has(t4))) {
              const i5 = L(e3, (e4) => {
                const i6 = Se(t3.tags.length, e4.tags.length);
                return 0 === i6 ? je(t3.tags, e4.tags, Se) : i6;
              });
              e3.splice(i5.index, 0, t3);
            }
          });
        });
      }), P(e3, (t3) => {
        this._templates.push(t3.template), t3.template._setObjectTemplate(this);
      });
    }), this._applyTemplates(), (e2 || t) && (this._runSetup = false), e2 || t;
  }
  _changed() {
  }
  _beforeChanged() {
    if (this.isDirty("id")) {
      const t = this.get("id");
      t && this._registerId(t);
      const e2 = this._prevSettings.id;
      e2 && delete Oe.entitiesById[e2];
    }
  }
  _registerId(t) {
    if (Oe.entitiesById[t] && Oe.entitiesById[t] !== this) throw new Error('An entity with id "' + t + '" already exists.');
    Oe.entitiesById[t] = this;
  }
  _afterChanged() {
  }
  addDisposer(t) {
    return this._disposers.push(t), t;
  }
  _dispose() {
    super._dispose();
    const t = this._template;
    t && t._removeObjectTemplate(this), P(this._internalTemplates, (t2) => {
      t2._removeObjectTemplate(this);
    }), this._removeTemplates(), this._disposeTemplates(), this.events.dispose(), this._disposers.forEach((t2) => {
      t2.dispose();
    }), U(this._disposerProperties, (t2, e3) => {
      P(e3, (t3) => {
        t3.dispose();
      });
    });
    const e2 = this.get("id");
    e2 && delete Oe.entitiesById[e2];
  }
  setTimeout(t, e2) {
    const i2 = setTimeout(() => {
      this.removeDispose(s2), t();
    }, e2), s2 = new z(() => {
      clearTimeout(i2);
    });
    return this._disposers.push(s2), s2;
  }
  removeDispose(t) {
    if (!this.isDisposed()) {
      let e2 = v(this._disposers, t);
      e2 > -1 && this._disposers.splice(e2, 1);
    }
    t.dispose();
  }
  hasTag(t) {
    return -1 !== v(this.get("themeTags", []), t);
  }
  addTag(t) {
    if (!this.hasTag(t)) {
      const e2 = this.get("themeTags", []);
      e2.push(t), this.set("themeTags", e2);
    }
  }
  removeTag(t) {
    if (this.hasTag(t)) {
      const e2 = this.get("themeTags", []);
      k(e2, t), this.set("themeTags", e2);
    }
  }
  _t(t, e2, ...i2) {
    return this._root.language.translate(t, e2, ...i2);
  }
  get root() {
    return this._root;
  }
};
function Ie(t) {
  U(t, (t2, e2) => {
    m(e2) && "function" == typeof e2.dispose && (e2.enableDispose = true, e2.dispose());
  });
}
Object.defineProperty(He, "className", { enumerable: true, configurable: true, writable: true, value: "Entity" }), Object.defineProperty(He, "classNames", { enumerable: true, configurable: true, writable: true, value: ["Entity"] });
var Le = class {
  constructor(t, e2, i2) {
    Object.defineProperty(this, "_settings", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_name", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_template", { enumerable: true, configurable: true, writable: true, value: void 0 }), this._name = t, this._template = e2, this._settings = i2;
  }
  _dispose() {
    Ie(this._settings);
  }
  get(t, e2) {
    const i2 = this._settings[t];
    return void 0 !== i2 ? i2 : e2;
  }
  set(t, e2) {
    this._settings[t] = e2, this._template._stateChanged(this._name);
  }
  remove(t) {
    delete this._settings[t], this._template._stateChanged(this._name);
  }
  setAll(t) {
    R(t).forEach((e2) => {
      this._settings[e2] = t[e2];
    }), this._template._stateChanged(this._name);
  }
  _apply(t, e2) {
    U(this._settings, (i2, s2) => {
      e2[i2] || t._userSettings[i2] || (e2[i2] = true, t.setRaw(i2, s2));
    });
  }
};
var Ne = class {
  constructor(t) {
    Object.defineProperty(this, "_template", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_states", { enumerable: true, configurable: true, writable: true, value: {} }), this._template = t;
  }
  _dispose() {
    U(this._states, (t, e2) => {
      e2._dispose();
    });
  }
  lookup(t) {
    return this._states[t];
  }
  create(t, e2) {
    const i2 = this._states[t];
    if (i2) return i2.setAll(e2), i2;
    {
      const i3 = new Le(t, this._template, e2);
      return this._states[t] = i3, this._template._stateChanged(t), i3;
    }
  }
  remove(t) {
    delete this._states[t], this._template._stateChanged(t);
  }
  _apply(t, e2) {
    U(this._states, (i2, s2) => {
      let r2 = e2.states[i2];
      null == r2 && (r2 = e2.states[i2] = {});
      const a2 = t.states.create(i2, {});
      s2._apply(a2, r2);
    });
  }
};
var Re = class {
  constructor() {
    Object.defineProperty(this, "_callbacks", { enumerable: true, configurable: true, writable: true, value: {} });
  }
  add(t, e2) {
    let i2 = this._callbacks[t];
    return void 0 === i2 && (i2 = this._callbacks[t] = []), i2.push(e2), new z(() => {
      O(i2, e2), 0 === i2.length && delete this._callbacks[t];
    });
  }
  remove(t) {
    void 0 !== this._callbacks[t] && delete this._callbacks[t];
  }
  _apply(t) {
    const e2 = [];
    return U(this._callbacks, (i2, s2) => {
      P(s2, (s3) => {
        e2.push(t.adapters.add(i2, s3));
      });
    }), new X(e2);
  }
};
var Fe = class _Fe {
  constructor(t, e2) {
    if (Object.defineProperty(this, "_disposed", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_settings", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_privateSettings", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_settingEvents", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_privateSettingEvents", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_entities", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "states", { enumerable: true, configurable: true, writable: true, value: new Ne(this) }), Object.defineProperty(this, "adapters", { enumerable: true, configurable: true, writable: true, value: new Re() }), Object.defineProperty(this, "events", { enumerable: true, configurable: true, writable: true, value: new Xt() }), Object.defineProperty(this, "setup", { enumerable: true, configurable: true, writable: true, value: void 0 }), !e2) throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    this._settings = t;
  }
  static new(t) {
    return new _Fe(t, true);
  }
  _dispose() {
    Ie(this._settings), Ie(this._privateSettings);
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = true, this._dispose());
  }
  _checkDisposed() {
    if (this._disposed) throw new Error("Template is disposed");
  }
  get entities() {
    return this._entities;
  }
  get(t, e2) {
    this._checkDisposed();
    const i2 = this._settings[t];
    return void 0 !== i2 ? i2 : e2;
  }
  setRaw(t, e2) {
    this._checkDisposed(), this._settings[t] = e2;
  }
  set(t, e2) {
    this._checkDisposed(), this._settings[t] !== e2 && (this.setRaw(t, e2), this._entities.forEach((i2) => {
      i2._setTemplateProperty(this, t, e2);
    }));
  }
  remove(t) {
    this._checkDisposed(), t in this._settings && (delete this._settings[t], this._entities.forEach((e2) => {
      e2._removeTemplateProperty(t);
    }));
  }
  removeAll() {
    this._checkDisposed(), U(this._settings, (t, e2) => {
      this.remove(t);
    });
  }
  getPrivate(t, e2) {
    this._checkDisposed();
    const i2 = this._privateSettings[t];
    return void 0 !== i2 ? i2 : e2;
  }
  setPrivateRaw(t, e2) {
    return this._checkDisposed(), this._privateSettings[t] = e2, e2;
  }
  setPrivate(t, e2) {
    return this._checkDisposed(), this._privateSettings[t] !== e2 && (this.setPrivateRaw(t, e2), this._entities.forEach((i2) => {
      i2._setTemplatePrivateProperty(this, t, e2);
    })), e2;
  }
  removePrivate(t) {
    this._checkDisposed(), t in this._privateSettings && (delete this._privateSettings[t], this._entities.forEach((e2) => {
      e2._removeTemplatePrivateProperty(t);
    }));
  }
  setAll(t) {
    this._checkDisposed(), U(t, (t2, e2) => {
      this.set(t2, e2);
    });
  }
  on(t, e2) {
    this._checkDisposed();
    let i2 = this._settingEvents[t];
    return void 0 === i2 && (i2 = this._settingEvents[t] = []), i2.push(e2), new z(() => {
      O(i2, e2), 0 === i2.length && delete this._settingEvents[t];
    });
  }
  onPrivate(t, e2) {
    this._checkDisposed();
    let i2 = this._privateSettingEvents[t];
    return void 0 === i2 && (i2 = this._privateSettingEvents[t] = []), i2.push(e2), new z(() => {
      O(i2, e2), 0 === i2.length && delete this._privateSettingEvents[t];
    });
  }
  _apply(t, e2) {
    this._checkDisposed();
    const i2 = [];
    return U(this._settingEvents, (e3, s2) => {
      P(s2, (s3) => {
        i2.push(t.on(e3, s3));
      });
    }), U(this._privateSettingEvents, (e3, s2) => {
      P(s2, (s3) => {
        i2.push(t.onPrivate(e3, s3));
      });
    }), this.states._apply(t, e2), i2.push(this.adapters._apply(t)), i2.push(t.events.copyFrom(this.events)), new X(i2);
  }
  _setObjectTemplate(t) {
    this._checkDisposed(), this._entities.push(t);
  }
  _removeObjectTemplate(t) {
    k(this._entities, t);
  }
  _stateChanged(t) {
    this._checkDisposed(), this._entities.forEach((e2) => {
      e2._applyStateByKey(t);
    });
  }
};
var We = class _We extends Xt {
  constructor(t) {
    super(), Object.defineProperty(this, "_sprite", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_rendererDisposers", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_dispatchParents", { enumerable: true, configurable: true, writable: true, value: true }), this._sprite = t;
  }
  _makePointerEvent(t, e2) {
    return { type: t, originalEvent: e2.event, point: e2.point, simulated: e2.simulated, native: e2.native, target: this._sprite };
  }
  _onRenderer(t, e2) {
    this._sprite.set("interactive", true), this._sprite._display.interactive = true;
    let i2 = this._rendererDisposers[t];
    if (void 0 === i2) {
      const s2 = this._sprite._display.on(t, (t2) => {
        e2.call(this, t2);
      });
      i2 = this._rendererDisposers[t] = new $(() => {
        delete this._rendererDisposers[t], s2.dispose();
      });
    }
    return i2.increment();
  }
  _on(t, e2, i2, s2, r2, a2) {
    const n2 = super._on(t, e2, i2, s2, r2, a2), o3 = _We.RENDERER_EVENTS[e2];
    return void 0 !== o3 && (n2.disposer = new X([n2.disposer, this._onRenderer(e2, o3)])), n2;
  }
  stopParentDispatch() {
    this._dispatchParents = false;
  }
  dispatchParents(t, e2) {
    const i2 = this._dispatchParents;
    this._dispatchParents = true;
    try {
      this.dispatch(t, e2), this._dispatchParents && this._sprite.parent && this._sprite.parent.events.dispatchParents(t, e2);
    } finally {
      this._dispatchParents = i2;
    }
  }
};
Object.defineProperty(We, "RENDERER_EVENTS", { enumerable: true, configurable: true, writable: true, value: { click: function(t) {
  this.isEnabled("click") && !this._sprite.isDragging() && this._sprite._hasDown() && !this._sprite._hasMoved(this._makePointerEvent("click", t)) && this.dispatch("click", this._makePointerEvent("click", t));
}, rightclick: function(t) {
  this.isEnabled("rightclick") && this.dispatch("rightclick", this._makePointerEvent("rightclick", t));
}, middleclick: function(t) {
  this.isEnabled("middleclick") && this.dispatch("middleclick", this._makePointerEvent("middleclick", t));
}, dblclick: function(t) {
  this.dispatchParents("dblclick", this._makePointerEvent("dblclick", t));
}, pointerover: function(t) {
  const e2 = this._sprite;
  let i2 = true;
  if (e2.getPrivate("trustBounds")) {
    e2._getBounds();
    const s2 = e2.globalBounds();
    if (e2.isType("Graphics")) {
      const t2 = e2.get("strokeWidth", 1) / 2;
      t2 >= 1 && (s2.left -= t2, s2.right += t2, s2.top -= t2, s2.bottom += t2);
    }
    ve(t.point, s2) || (i2 = false, e2._root._renderer.removeHovering(e2._display));
  }
  i2 && this.isEnabled("pointerover") && this.dispatch("pointerover", this._makePointerEvent("pointerover", t));
}, pointerout: function(t) {
  this.isEnabled("pointerout") && this.dispatch("pointerout", this._makePointerEvent("pointerout", t));
}, pointerdown: function(t) {
  this.dispatchParents("pointerdown", this._makePointerEvent("pointerdown", t));
}, pointerup: function(t) {
  this.isEnabled("pointerup") && this.dispatch("pointerup", this._makePointerEvent("pointerup", t));
}, globalpointerup: function(t) {
  this.isEnabled("globalpointerup") && this.dispatch("globalpointerup", this._makePointerEvent("globalpointerup", t));
}, globalpointermove: function(t) {
  this.isEnabled("globalpointermove") && this.dispatch("globalpointermove", this._makePointerEvent("globalpointermove", t));
}, wheel: function(t) {
  this.dispatchParents("wheel", { type: "wheel", target: this._sprite, originalEvent: t.event, point: t.point });
} } });
var Ue = class extends He {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_adjustedLocalBounds", { enumerable: true, configurable: true, writable: true, value: { left: 0, right: 0, top: 0, bottom: 0 } }), Object.defineProperty(this, "_localBounds", { enumerable: true, configurable: true, writable: true, value: { left: 0, right: 0, top: 0, bottom: 0 } }), Object.defineProperty(this, "_parent", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_dataItem", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_templateField", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_sizeDirty", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_isDragging", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_dragEvent", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_dragPoint", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_isHidden", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_isShowing", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_isHiding", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_isDown", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_downPoint", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_downPoints", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_toggleDp", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_dragDp", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_tooltipDp", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_hoverDp", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_focusDp", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_tooltipMoveDp", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_tooltipPointerDp", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_statesHandled", { enumerable: true, configurable: true, writable: true, value: false });
  }
  _afterNew() {
    this.setPrivateRaw("visible", true), super._afterNew();
  }
  markDirtyKey(t) {
    this._markDirtyKey(t);
  }
  _markDirtyKey(t) {
    super._markDirtyKey(t), "x" != t && "y" != t && "dx" != t && "dy" != t || (this.markDirtyBounds(), this._addPercentagePositionChildren(), this.markDirtyPosition());
  }
  _markDirtyPrivateKey(t) {
    super._markDirtyPrivateKey(t), "x" != t && "y" != t || this.markDirtyPosition();
  }
  _removeTemplateField() {
    this._templateField && this._templateField._removeObjectTemplate(this);
  }
  _createEvents() {
    return new We(this);
  }
  _processTemplateField() {
    let t;
    const e2 = this.get("templateField");
    if (e2) {
      const i2 = this.dataItem;
      if (i2) {
        const s2 = i2.dataContext;
        s2 && (t = s2[e2], t instanceof Fe || !t || (t = Fe.new(t)));
      }
    }
    this._templateField !== t && (this._removeTemplateField(), this._templateField = t, t && t._setObjectTemplate(this), this._applyTemplates());
  }
  _setDataItem(t) {
    const e2 = this._dataItem;
    this._dataItem = t, this._processTemplateField();
    const i2 = "dataitemchanged";
    t != e2 && this.events.isEnabled(i2) && this.events.dispatch(i2, { type: i2, target: this, oldDataItem: e2, newDataItem: t });
  }
  set dataItem(t) {
    this._setDataItem(t);
  }
  get dataItem() {
    if (this._dataItem) return this._dataItem;
    {
      let t = this._parent;
      for (; t; ) {
        if (t._dataItem) return t._dataItem;
        t = t._parent;
      }
    }
  }
  _addPercentageSizeChildren() {
    let t = this.parent;
    t && (this.get("width") instanceof e || this.get("height") instanceof e ? S(t._percentageSizeChildren, this) : O(t._percentageSizeChildren, this));
  }
  _addPercentagePositionChildren() {
    let t = this.parent;
    t && (this.get("x") instanceof e || this.get("y") instanceof e ? S(t._percentagePositionChildren, this) : O(t._percentagePositionChildren, this));
  }
  markDirtyPosition() {
    this._root._addDirtyPosition(this);
  }
  updatePivotPoint() {
    const t = this._localBounds;
    if (t) {
      const e2 = this.get("centerX");
      null != e2 && (this._display.pivot.x = t.left + gt(e2, t.right - t.left));
      const i2 = this.get("centerY");
      null != i2 && (this._display.pivot.y = t.top + gt(i2, t.bottom - t.top));
    }
  }
  _beforeChanged() {
    if (super._beforeChanged(), this._handleStates(), this.isDirty("tooltip")) {
      const t = this._prevSettings.tooltip;
      t && t.dispose();
    }
    if ((this.isDirty("layer") || this.isDirty("layerMargin")) && (this._display.setLayer(this.get("layer"), this.get("layerMargin")), this.markDirtyLayer()), this.isDirty("tooltipPosition")) {
      const t = this._tooltipMoveDp;
      t && (t.dispose(), this._tooltipMoveDp = void 0);
      const e2 = this._tooltipPointerDp;
      e2 && (e2.dispose(), this._tooltipPointerDp = void 0), "pointer" == this.get("tooltipPosition") && (this.isHover() && (this._tooltipMoveDp = this.events.on("globalpointermove", (t2) => {
        this.showTooltip(t2.point);
      })), this._tooltipPointerDp = new X([this.events.on("pointerover", () => {
        this._tooltipMoveDp = this.events.on("globalpointermove", (t2) => {
          this.showTooltip(t2.point);
        });
      }), this.events.on("pointerout", () => {
        const t2 = this._tooltipMoveDp;
        t2 && (t2.dispose(), this._tooltipMoveDp = void 0);
      })]));
    }
  }
  _handleStates() {
    this._statesHandled || (this.isDirty("active") && (this.get("active") ? (this.states.applyAnimate("active"), this.set("ariaChecked", true)) : (this.isHidden() || this.states.applyAnimate("default"), this.set("ariaChecked", false)), this.markDirtyAccessibility()), this.isDirty("disabled") && (this.get("disabled") ? (this.states.applyAnimate("disabled"), this.set("ariaChecked", false)) : (this.isHidden() || this.states.applyAnimate("default"), this.set("ariaChecked", true)), this.markDirtyAccessibility()), this._statesHandled = true);
  }
  _changed() {
    super._changed();
    const t = this._display, i2 = this.events;
    if (this.isDirty("draggable")) {
      const e2 = this.get("draggable");
      e2 ? (this.set("interactive", true), this._dragDp = new X([i2.on("pointerdown", (t2) => {
        this.dragStart(t2);
      }), i2.on("globalpointermove", (t2) => {
        this.dragMove(t2);
      }), i2.on("globalpointerup", (t2) => {
        this.dragStop(t2);
      })])) : this._dragDp && (this._dragDp.dispose(), this._dragDp = void 0), t.cancelTouch = !!e2;
    }
    if (this.isDirty("tooltipText") || this.isDirty("tooltipHTML") || this.isDirty("showTooltipOn")) {
      const t2 = this.get("tooltipText"), e2 = this.get("tooltipHTML"), s3 = this.get("showTooltipOn", "hover");
      this._tooltipDp && (this._tooltipDp.dispose(), this._tooltipDp = void 0), (t2 || e2) && ("click" == s3 ? (this._tooltipDp = new X([i2.on("click", () => {
        this.setTimeout(() => {
          const t3 = this.getTooltip();
          t3 && !t3.isHidden() && t3.get("tooltipTarget") === this ? this.hideTooltip() : this.showTooltip();
        }, 10);
      }), J(document, "click", (t3) => {
        this.hideTooltip();
      })]), this._disposers.push(this._tooltipDp)) : "always" == s3 || (this._tooltipDp = new X([i2.on("pointerover", () => {
        this.showTooltip();
      }), i2.on("pointerout", () => {
        this.hideTooltip();
      })]), this._disposers.push(this._tooltipDp)));
    }
    if (this.isDirty("toggleKey")) {
      let t2 = this.get("toggleKey");
      t2 && "none" != t2 ? this._toggleDp = i2.on("click", () => {
        this._isDragging || this.set(t2, !this.get(t2));
      }) : this._toggleDp && (this._toggleDp.dispose(), this._toggleDp = void 0);
    }
    if (this.isDirty("opacity") && (t.alpha = Math.max(0, this.get("opacity", 1)), this.get("focusable") && this.markDirtyAccessibility()), this.isDirty("rotation") && (this.markDirtyBounds(), t.angle = this.get("rotation", 0)), this.isDirty("scale") && (this.markDirtyBounds(), t.scale = this.get("scale", 0)), (this.isDirty("centerX") || this.isDirty("centerY")) && (this.markDirtyBounds(), this.updatePivotPoint()), (this.isDirty("visible") || this.isPrivateDirty("visible") || this.isDirty("forceHidden")) && (this.get("visible") && this.getPrivate("visible") && !this.get("forceHidden") ? t.visible = true : (t.visible = false, this.hideTooltip()), this.markDirtyBounds(), this.get("focusable") && this.markDirtyAccessibility()), this.isDirty("width") || this.isDirty("height")) {
      this.markDirtyBounds(), this._addPercentageSizeChildren();
      const t2 = this.parent;
      t2 && (this.isDirty("width") && this.get("width") instanceof e || this.isDirty("height") && this.get("height") instanceof e) && (t2.markDirty(), t2._prevWidth = 0), this._sizeDirty = true;
    }
    if ((this.isDirty("maxWidth") || this.isDirty("maxHeight") || this.isPrivateDirty("width") || this.isPrivateDirty("height") || this.isDirty("minWidth") || this.isDirty("minHeight") || this.isPrivateDirty("maxWidth") || this.isPrivateDirty("maxHeight") || this.isPrivateDirty("minWidth") || this.isPrivateDirty("minHeight") || this.isDirty("marginLeft") || this.isDirty("marginTop") || this.isDirty("marginRight") || this.isDirty("marginBottom")) && (this.markDirtyBounds(), this._sizeDirty = true), this._sizeDirty && this._updateSize(), this.isDirty("wheelable")) {
      const e2 = this.get("wheelable");
      e2 && this.set("interactive", true), t.wheelable = !!e2;
    }
    (this.isDirty("tabindexOrder") || this.isDirty("focusableGroup")) && (this.get("focusable") ? this._root._registerTabindexOrder(this) : this._root._unregisterTabindexOrder(this)), this.isDirty("filter") && (t.filter = this.get("filter"));
    let s2 = this.get("filter", "");
    if (this.isDirty("blur")) {
      const t2 = this.get("blur", 0);
      0 != t2 && (s2 += " blur(" + t2 + "px)");
    }
    if (this.isDirty("saturate")) {
      const t2 = this.get("saturate", 1);
      1 != t2 && (s2 += " saturate(" + t2 + ")");
    }
    if (this.isDirty("brightness")) {
      const t2 = this.get("brightness", 1);
      1 != t2 && (s2 += " brightness(" + t2 + ")");
    }
    if (this.isDirty("contrast")) {
      const t2 = this.get("contrast", 1);
      1 != t2 && (s2 += " contrast(" + t2 + ")");
    }
    if (this.isDirty("sepia")) {
      const t2 = this.get("sepia", 0);
      0 != t2 && (s2 += " sepia(" + t2 + ")");
    }
    if (this.isDirty("hue")) {
      const t2 = this.get("hue", 0);
      0 != t2 && (s2 += " hue-rotate(" + t2 + "deg)");
    }
    if (this.isDirty("invert")) {
      const t2 = this.get("invert", 0);
      0 != t2 && (s2 += " invert(" + t2 + ")");
    }
    if (s2 && (t.filter = s2), this.isDirty("cursorOverStyle") && (t.cursorOverStyle = this.get("cursorOverStyle")), this.isDirty("hoverOnFocus") && (this.get("hoverOnFocus") ? this._focusDp = new X([i2.on("focus", () => {
      this.showTooltip();
    }), i2.on("blur", () => {
      this.hideTooltip();
    })]) : this._focusDp && (this._focusDp.dispose(), this._focusDp = void 0)), this.isDirty("focusable") && (this.get("focusable") ? this._root._registerTabindexOrder(this) : this._root._unregisterTabindexOrder(this), this.markDirtyAccessibility(), this._disposers.push(i2.on("blur", () => {
      this.setPrivateRaw("touchHovering", false);
    }))), this.isPrivateDirty("focusable") && this.markDirtyAccessibility(), (this.isDirty("role") || this.isDirty("ariaLive") || this.isDirty("ariaChecked") || this.isDirty("ariaHidden") || this.isDirty("ariaOrientation") || this.isDirty("ariaValueNow") || this.isDirty("ariaValueMin") || this.isDirty("ariaValueMax") || this.isDirty("ariaValueText") || this.isDirty("ariaLabel") || this.isDirty("ariaControls")) && this.markDirtyAccessibility(), this.isDirty("exportable") && (t.exportable = this.get("exportable")), this.isDirty("interactive")) {
      const t2 = this.events;
      this.get("interactive") && !t2.isDisposed() ? this._hoverDp = new X([t2.on("click", (t3) => {
        rt(t3.originalEvent) && (this.getPrivate("touchHovering") || this.setTimeout(() => {
          this._handleOver(), (this.get("tooltipText") || this.get("tooltipHTML")) && this.showTooltip(), this.setPrivateRaw("touchHovering", true), this.events.dispatch("pointerover", { type: "pointerover", target: t3.target, originalEvent: t3.originalEvent, point: t3.point, simulated: t3.simulated });
        }, 10));
      }), t2.on("globalpointerup", (t3) => {
        rt(t3.originalEvent) && this.getPrivate("touchHovering") && (this._handleOut(), (this.get("tooltipText") || this.get("tooltipHTML")) && this.hideTooltip(), this.setPrivateRaw("touchHovering", false), this.events.dispatch("pointerout", { type: "pointerout", target: t3.target, originalEvent: t3.originalEvent, point: t3.point, simulated: t3.simulated })), this._isDown && this._handleUp(t3);
      }), t2.on("pointerover", () => {
        this._handleOver();
      }), t2.on("pointerout", () => {
        this._handleOut();
      }), t2.on("pointerdown", (t3) => {
        this._handleDown(t3);
      })]) : (this._display.interactive = false, this._hoverDp && (this._hoverDp.dispose(), this._hoverDp = void 0));
    }
    this.isDirty("forceInactive") && (this._display.inactive = this.get("forceInactive", null)), "always" == this.get("showTooltipOn") && this._display.visible && this.showTooltip();
  }
  dragStart(t) {
    this._dragEvent = t, this.events.stopParentDispatch();
  }
  dragStop(t) {
    if (this._dragEvent = void 0, this._dragPoint = void 0, this.events.stopParentDispatch(), this._isDragging) {
      this._isDragging = false;
      const e2 = "dragstop";
      this.events.isEnabled(e2) && this.events.dispatch(e2, { type: e2, target: this, originalEvent: t.originalEvent, point: t.point, simulated: t.simulated });
    }
  }
  _handleOver() {
    this.isHidden() || (this.get("active") && this.states.lookup("hoverActive") ? this.states.applyAnimate("hoverActive") : this.get("disabled") && this.states.lookup("hoverDisabled") ? this.states.applyAnimate("hoverDisabled") : this.states.applyAnimate("hover"), this.get("draggable") && this._isDown && this.states.lookup("down") && this.states.applyAnimate("down"));
  }
  _handleOut() {
    this.isHidden() || (this.get("active") && this.states.lookup("active") ? this.states.applyAnimate("active") : this.get("disabled") && this.states.lookup("disabled") ? this.states.applyAnimate("disabled") : (this.states.lookup("hover") || this.states.lookup("hoverActive")) && this.states.applyAnimate("default"), this.get("draggable") && this._isDown && this.states.lookup("down") && this.states.applyAnimate("down"));
  }
  _handleUp(t) {
    if (!this.isHidden()) {
      this.get("active") && this.states.lookup("active") ? this.states.applyAnimate("active") : this.get("disabled") && this.states.lookup("disabled") ? this.states.applyAnimate("disabled") : this.states.lookup("down") && (this.isHover() ? this.states.applyAnimate("hover") : this.states.applyAnimate("default")), this._downPoint = void 0;
      const e2 = tt(t.originalEvent);
      delete this._downPoints[e2], 0 == R(this._downPoints).length && (this._isDown = false);
    }
  }
  _hasMoved(t) {
    const e2 = tt(t.originalEvent), i2 = this._downPoints[e2];
    if (i2) {
      const e3 = Math.abs(i2.x - t.point.x), s2 = Math.abs(i2.y - t.point.y);
      return e3 > 5 || s2 > 5;
    }
    return false;
  }
  _hasDown() {
    return R(this._downPoints).length > 0;
  }
  _handleDown(t) {
    const e2 = this.parent;
    if (e2 && !this.get("draggable") && e2._handleDown(t), this.get("interactive") && !this.isHidden()) {
      this.states.lookup("down") && this.states.applyAnimate("down"), this._downPoint = { x: t.point.x, y: t.point.y }, this._isDown = true;
      const e3 = tt(t.originalEvent);
      this._downPoints[e3] = { x: t.point.x, y: t.point.y };
    }
  }
  dragMove(t) {
    let e2 = this._dragEvent;
    if (e2) {
      if (e2.simulated && !t.simulated) return true;
      let i2 = 0, s2 = this.parent, r2 = 1;
      for (; null != s2; ) i2 += s2.get("rotation", 0), s2 = s2.parent, s2 && (r2 *= s2.get("scale", 1));
      let a2 = (t.point.x - e2.point.x) / r2, n2 = (t.point.y - e2.point.y) / r2;
      const o3 = this.events;
      if (e2.simulated && !this._isDragging) {
        this._isDragging = true, this._dragEvent = t, this._dragPoint = { x: this.x(), y: this.y() };
        const e3 = "dragstart";
        o3.isEnabled(e3) && o3.dispatch(e3, { type: e3, target: this, originalEvent: t.originalEvent, point: t.point, simulated: t.simulated });
      }
      if (this._isDragging) {
        let e3 = this._dragPoint;
        this.set("x", e3.x + a2 * ge(i2) + n2 * ce(i2)), this.set("y", e3.y + n2 * ge(i2) - a2 * ce(i2));
        const s3 = "dragged";
        o3.isEnabled(s3) && o3.dispatch(s3, { type: s3, target: this, originalEvent: t.originalEvent, point: t.point, simulated: t.simulated });
      } else if (Math.hypot(a2, n2) > 5) {
        this._isDragging = true, this._dragEvent = t, this._dragPoint = { x: this.x(), y: this.y() };
        const e3 = "dragstart";
        o3.isEnabled(e3) && o3.dispatch(e3, { type: e3, target: this, originalEvent: t.originalEvent, point: t.point, simulated: t.simulated });
      }
    }
  }
  _updateSize() {
  }
  _getBounds() {
    this._localBounds = this._display.getLocalBounds();
  }
  depth() {
    let t = this.parent, e2 = 0;
    for (; ; ) {
      if (!t) return e2;
      ++e2, t = t.parent;
    }
  }
  markDirtySize() {
    this._sizeDirty = true, this.markDirty();
  }
  markDirtyBounds() {
    const t = this._display;
    if (this.get("isMeasured")) {
      this._root._addDirtyBounds(this), t.isMeasured = true, t.invalidateBounds();
      const e2 = this.parent;
      e2 && "absolute" != this.get("position") && (null == e2.get("width") || null == e2.get("height") || e2.get("layout")) && e2.markDirtyBounds(), this.get("focusable") && this.isFocus() && this.markDirtyAccessibility();
    }
  }
  markDirtyAccessibility() {
    this._root._invalidateAccessibility(this);
  }
  markDirtyLayer() {
    this._display.markDirtyLayer(true);
  }
  markDirty() {
    super.markDirty(), this.markDirtyLayer();
  }
  _updateBounds() {
    const t = this._adjustedLocalBounds;
    let e2;
    if (this.get("visible") && this.getPrivate("visible") && !this.get("forceHidden") ? (this._getBounds(), this._fixMinBounds(this._localBounds), this.updatePivotPoint(), this._adjustedLocalBounds = this._display.getAdjustedBounds(this._localBounds), e2 = this._adjustedLocalBounds) : (e2 = { left: 0, right: 0, top: 0, bottom: 0 }, this._localBounds = e2, this._adjustedLocalBounds = e2), !t || t.left !== e2.left || t.top !== e2.top || t.right !== e2.right || t.bottom !== e2.bottom) {
      const t2 = "boundschanged";
      this.events.isEnabled(t2) && this.events.dispatch(t2, { type: t2, target: this }), this.parent && (this.parent.markDirty(), this.parent.markDirtyBounds()), this.getPrivate("showingTooltip") && this.showTooltip();
    }
  }
  _fixMinBounds(t) {
    let e2 = this.get("minWidth", this.getPrivate("minWidth")), i2 = this.get("minHeight", this.getPrivate("minHeight"));
    _(e2) && t.right - t.left < e2 && (t.right = t.left + e2), _(i2) && t.bottom - t.top < i2 && (t.bottom = t.top + i2);
    let s2 = this.getPrivate("width"), r2 = this.getPrivate("height");
    _(s2) && (s2 > 0 ? t.right = t.left + s2 : t.left = t.right + s2), _(r2) && (r2 > 0 ? t.bottom = t.top + r2 : t.top = t.bottom + r2);
  }
  _removeParent(t) {
    t && (t.children.removeValue(this), O(t._percentageSizeChildren, this), O(t._percentagePositionChildren, this));
  }
  _clearDirty() {
    super._clearDirty(), this._sizeDirty = false, this._statesHandled = false;
  }
  hover() {
    this.isDisposed() || (this.showTooltip(), this._handleOver());
  }
  unhover() {
    this.isDisposed() || (this.hideTooltip(), this._handleOut());
  }
  showTooltip(t) {
    if (!this.isDisposed()) {
      const e2 = this.getTooltip(), i2 = this.get("tooltipText"), s2 = this.get("tooltipHTML");
      if ((i2 || s2) && e2) {
        const r2 = this.get("tooltipPosition"), a2 = this.getPrivate("tooltipTarget", this);
        "fixed" != r2 && t || (this._display._setMatrix(), t = this.toGlobal(a2._getTooltipPoint())), e2.set("pointTo", t), e2.set("tooltipTarget", a2), e2.get("x") || e2.set("x", t.x), e2.get("y") || e2.set("y", t.y), i2 && e2.label.set("text", i2), s2 && e2.label.set("html", s2);
        const n2 = this.dataItem;
        if (n2 && e2.label._setDataItem(n2), "always" == this.get("showTooltipOn") && (t.x < 0 || t.x > this._root.width() || t.y < 0 || t.y > this._root.height())) return void this.hideTooltip();
        e2.label.text.markDirtyText();
        const o3 = e2.show();
        return this.setPrivateRaw("showingTooltip", true), o3;
      }
    }
  }
  hideTooltip() {
    const t = this.getTooltip();
    if (t && (t.get("tooltipTarget") == this.getPrivate("tooltipTarget", this) || this.get("tooltip") == t)) {
      let e2 = t.get("keepTargetHover") && 0 == t.get("stateAnimationDuration", 0) ? 400 : void 0;
      const i2 = t.hide(e2);
      return this.setPrivateRaw("showingTooltip", false), i2;
    }
  }
  _getTooltipPoint() {
    const t = this._localBounds;
    if (t) {
      let e2 = 0, i2 = 0;
      return this.get("isMeasured") ? (e2 = t.left + gt(this.get("tooltipX", 0), t.right - t.left), i2 = t.top + gt(this.get("tooltipY", 0), t.bottom - t.top)) : (e2 = gt(this.get("tooltipX", 0), this.width()), i2 = gt(this.get("tooltipY", 0), this.height())), { x: e2, y: i2 };
    }
    return { x: 0, y: 0 };
  }
  getTooltip() {
    let t = this.get("tooltip");
    if (t) return t;
    {
      let t2 = this.parent;
      if (t2) return t2.getTooltip();
    }
  }
  _updatePosition() {
    const t = this.parent;
    let i2 = this.get("dx", 0), s2 = this.get("dy", 0), r2 = this.get("x"), a2 = this.getPrivate("x"), n2 = 0, o3 = 0;
    const h2 = this.get("position");
    r2 instanceof e && (r2 = t ? t.innerWidth() * r2.value + t.get("paddingLeft", 0) : 0), _(r2) ? n2 = r2 + i2 : null != a2 ? n2 = a2 : t && "relative" == h2 && (n2 = t.get("paddingLeft", 0) + i2);
    let l2 = this.get("y"), d2 = this.getPrivate("y");
    l2 instanceof e && (l2 = t ? t.innerHeight() * l2.value + t.get("paddingTop", 0) : 0), _(l2) ? o3 = l2 + s2 : null != d2 ? o3 = d2 : t && "relative" == h2 && (o3 = t.get("paddingTop", 0) + s2);
    const u2 = this._display;
    if (u2.x != n2 || u2.y != o3) {
      u2.invalidateBounds(), u2.x = n2, u2.y = o3;
      const t2 = "positionchanged";
      this.events.isEnabled(t2) && this.events.dispatch(t2, { type: t2, target: this });
    }
    this.getPrivate("showingTooltip") && this.showTooltip();
  }
  x() {
    let t = this.get("x"), i2 = this.getPrivate("x");
    const s2 = this.parent;
    return s2 ? t instanceof e ? gt(t, s2.innerWidth()) + s2.get("paddingLeft", 0) : _(t) ? t : null != i2 ? i2 : s2.get("paddingLeft", this._display.x) : this._display.x;
  }
  y() {
    let t = this.getPrivate("y");
    if (null != t) return t;
    let i2 = this.get("y");
    const s2 = this.parent;
    return s2 ? i2 instanceof e ? gt(i2, s2.innerHeight()) + s2.get("paddingTop", 0) : _(i2) ? i2 : null != t ? t : s2.get("paddingTop", this._display.y) : this._display.y;
  }
  _dispose() {
    super._dispose(), this._display.dispose(), this._removeTemplateField(), this._removeParent(this.parent), this._root._removeFocusElement(this);
    const t = this.get("tooltip");
    t && t.dispose(), this.markDirty();
  }
  adjustedLocalBounds() {
    return this._fixMinBounds(this._adjustedLocalBounds), this._adjustedLocalBounds;
  }
  localBounds() {
    return this._localBounds;
  }
  bounds() {
    const t = this._adjustedLocalBounds, e2 = this.x(), i2 = this.y();
    return { left: t.left + e2, right: t.right + e2, top: t.top + i2, bottom: t.bottom + i2 };
  }
  globalBounds() {
    const t = this.localBounds(), e2 = this.toGlobal({ x: t.left, y: t.top }), i2 = this.toGlobal({ x: t.right, y: t.top }), s2 = this.toGlobal({ x: t.right, y: t.bottom }), r2 = this.toGlobal({ x: t.left, y: t.bottom });
    return { left: Math.min(e2.x, i2.x, s2.x, r2.x), top: Math.min(e2.y, i2.y, s2.y, r2.y), right: Math.max(e2.x, i2.x, s2.x, r2.x), bottom: Math.max(e2.y, i2.y, s2.y, r2.y) };
  }
  _onShow(t) {
  }
  _onHide(t) {
  }
  appear(e2, i2) {
    return o(this, void 0, void 0, function* () {
      return yield this.hide(0), i2 ? new Promise((t, s2) => {
        this.setTimeout(() => {
          t(this.show(e2));
        }, i2);
      }) : this.show(e2);
    });
  }
  show(e2) {
    return o(this, void 0, void 0, function* () {
      if (!this._isShowing) {
        this._isHidden = false, this._isShowing = true, this._isHiding = false, this.states.lookup("default").get("visible") && this.set("visible", true), this._onShow(e2);
        const t = this.states.applyAnimate("default", e2);
        yield $t(t), this._isShowing = false;
      }
    });
  }
  hide(e2) {
    return o(this, void 0, void 0, function* () {
      if (!this._isHiding && !this._isHidden) {
        this._isHiding = true, this._isShowing = false;
        let t = this.states.lookup("hidden");
        t || (t = this.states.create("hidden", { opacity: 0, visible: false })), this._isHidden = true, this._onHide(e2);
        const i2 = this.states.applyAnimate("hidden", e2);
        yield $t(i2), this._isHiding = false;
      }
    });
  }
  isHidden() {
    return this._isHidden;
  }
  isShowing() {
    return this._isShowing;
  }
  isHiding() {
    return this._isHiding;
  }
  isHover() {
    return this._display.hovering();
  }
  isFocus() {
    return this._root.focused(this);
  }
  isDragging() {
    return this._isDragging;
  }
  isVisible() {
    return !(!this.get("visible") || !this.getPrivate("visible") || this.get("forceHidden"));
  }
  isVisibleDeep() {
    return this._parent ? this._parent.isVisibleDeep() && this.isVisible() : this.isVisible();
  }
  compositeOpacity() {
    const t = this.get("opacity", 1);
    return this._parent ? this._parent.compositeOpacity() * t : t;
  }
  compositeScale() {
    const t = this.get("scale", 1);
    return this._parent ? this._parent.compositeScale() * t : t;
  }
  compositeRotation() {
    const t = this.get("rotation", 0);
    return this._parent ? this._parent.compositeRotation() + t : t;
  }
  width() {
    let t = this.get("width"), i2 = this.get("maxWidth", this.getPrivate("maxWidth")), s2 = this.get("minWidth", this.getPrivate("minWidth")), r2 = this.getPrivate("width"), a2 = 0;
    if (_(r2)) a2 = r2;
    else if (null == t) this._adjustedLocalBounds && (a2 = this._adjustedLocalBounds.right - this._adjustedLocalBounds.left);
    else if (t instanceof e) {
      const e2 = this.parent;
      a2 = e2 ? e2.innerWidth() * t.value : this._root.width() * t.value;
    } else _(t) && (a2 = t);
    return _(s2) && (a2 = Math.max(s2, a2)), _(i2) && (a2 = Math.min(i2, a2)), a2;
  }
  maxWidth() {
    let t = this.get("maxWidth", this.getPrivate("maxWidth"));
    if (_(t)) return t;
    {
      let t2 = this.get("width");
      if (_(t2)) return t2;
    }
    const e2 = this.parent;
    return e2 ? e2.innerWidth() : this._root.width();
  }
  maxHeight() {
    let t = this.get("maxHeight", this.getPrivate("maxHeight"));
    if (_(t)) return t;
    {
      let t2 = this.get("height");
      if (_(t2)) return t2;
    }
    const e2 = this.parent;
    return e2 ? e2.innerHeight() : this._root.height();
  }
  height() {
    let t = this.get("height"), i2 = this.get("maxHeight", this.getPrivate("maxHeight")), s2 = this.get("minHeight", this.getPrivate("minHeight")), r2 = this.getPrivate("height"), a2 = 0;
    if (_(r2)) a2 = r2;
    else if (null == t) this._adjustedLocalBounds && (a2 = this._adjustedLocalBounds.bottom - this._adjustedLocalBounds.top);
    else if (t instanceof e) {
      const e2 = this.parent;
      a2 = e2 ? e2.innerHeight() * t.value : this._root.height() * t.value;
    } else _(t) && (a2 = t);
    return _(s2) && (a2 = Math.max(s2, a2)), _(i2) && (a2 = Math.min(i2, a2)), a2;
  }
  _findStaticTemplate(t) {
    return this._templateField && t(this._templateField) ? this._templateField : super._findStaticTemplate(t);
  }
  _walkParents(t) {
    this._parent && this._walkParent(t);
  }
  _walkParent(t) {
    this._parent && this._parent._walkParent(t), t(this);
  }
  get parent() {
    return this._parent;
  }
  _setParent(t, e2 = false) {
    const i2 = this._parent;
    t !== i2 && (this.markDirtyBounds(), t.markDirty(), this._parent = t, e2 && (this._removeParent(i2), t && (this._addPercentageSizeChildren(), this._addPercentagePositionChildren())), this.markDirtyPosition(), this._applyThemes());
  }
  getNumberFormatter() {
    return this.get("numberFormatter", this._root.numberFormatter);
  }
  getDateFormatter() {
    return this.get("dateFormatter", this._root.dateFormatter);
  }
  getDurationFormatter() {
    return this.get("durationFormatter", this._root.durationFormatter);
  }
  toGlobal(t) {
    return this._display.toGlobal(t);
  }
  toLocal(t) {
    return this._display.toLocal(t);
  }
  _getDownPoint() {
    const t = this._getDownPointId();
    if (t) return this._downPoints[t];
  }
  _getDownPointId() {
    if (this._downPoints) return F(this._downPoints, (t, e2) => t > e2 ? 1 : t < e2 ? -1 : 0)[0];
  }
  toFront() {
    const t = this.parent;
    t && t.children.moveValue(this, t.children.length - 1);
  }
  toBack() {
    const t = this.parent;
    t && t.children.moveValue(this, 0);
  }
};
Object.defineProperty(Ue, "className", { enumerable: true, configurable: true, writable: true, value: "Sprite" }), Object.defineProperty(Ue, "classNames", { enumerable: true, configurable: true, writable: true, value: He.classNames.concat([Ue.className]) });
var Ve = class extends He {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_display", { enumerable: true, configurable: true, writable: true, value: this._root._renderer.makeGraphics() }), Object.defineProperty(this, "_backgroundDisplay", { enumerable: true, configurable: true, writable: true, value: this._root._renderer.makeGraphics() }), Object.defineProperty(this, "_clear", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_pattern", { enumerable: true, configurable: true, writable: true, value: void 0 });
  }
  _afterNew() {
    super._afterNewApplyThemes();
  }
  get pattern() {
    return this._pattern;
  }
  _draw() {
  }
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("repetition") || this.isDirty("width") || this.isDirty("height") || this.isDirty("rotation") || this.isDirty("strokeWidth") || this.isDirty("strokeDasharray") || this.isDirty("strokeDashoffset") || this.isDirty("colorOpacity") || this.isDirty("fillOpacity")) && (this._clear = true), this._checkDirtyFill();
  }
  _checkDirtyFill() {
    (this.isDirty("color") || this.isDirty("fill")) && (this._clear = true);
  }
  _changed() {
    if (super._changed(), this._clear) {
      const t = this.get("repetition", ""), e2 = this.get("width", 100), i2 = this.get("height", 100), s2 = this.get("fill"), r2 = this.get("fillOpacity", 1), a2 = this._backgroundDisplay, n2 = this._display;
      n2.clear(), a2.clear(), s2 && r2 > 0 && (a2.beginFill(s2, r2), a2.drawRect(0, 0, e2, i2), a2.endFill()), n2.angle = this.get("rotation", 0), this._draw(), this._pattern = this._root._renderer.createPattern(n2, a2, t, e2, i2);
    }
    this._clear = false;
  }
};
Object.defineProperty(Ve, "className", { enumerable: true, configurable: true, writable: true, value: "Pattern" }), Object.defineProperty(Ve, "classNames", { enumerable: true, configurable: true, writable: true, value: He.classNames.concat([Ve.className]) });
var Ke = class extends Ve {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_image", { enumerable: true, configurable: true, writable: true, value: void 0 });
  }
  _beforeChanged() {
    super._beforeChanged(), this._clear = true, this.isDirty("src") && this._load();
    const t = this.get("canvas");
    t && (this.set("width", t.width), this.set("height", t.height));
  }
  _draw() {
    super._draw();
    const t = this.get("colorOpacity");
    void 0 !== t && (this._display.alpha = Math.max(0, t));
    const e2 = this._image;
    if (e2) {
      const t2 = this.get("width", 100), i3 = this.get("height", 100), s2 = this.get("fit", "image");
      let r2 = 0, a2 = 0;
      "pattern" == s2 ? (r2 = t2, a2 = i3, this.markDirty()) : (r2 = e2.width, a2 = e2.height, "image" == s2 && (this.set("width", r2), this.set("height", a2)));
      let n2 = 0, o3 = 0;
      this.get("centered", true) && (n2 = t2 / 2 - r2 / 2, o3 = i3 / 2 - a2 / 2), this._display.image(e2, r2, a2, n2, o3);
    }
    const i2 = this.get("canvas");
    i2 && this._display.image(i2, i2.width, i2.height, 0, 0);
  }
  _load() {
    const t = this.get("src");
    if (t) {
      const e2 = new Image();
      e2.src = t, e2.decode().then(() => {
        this._image = e2, this._draw(), this.events.isEnabled("loaded") && this.events.dispatch("loaded", { type: "loaded", target: this });
      }).catch((t2) => {
      });
    }
  }
};
var Ge;
Object.defineProperty(Ke, "className", { enumerable: true, configurable: true, writable: true, value: "PicturePattern" }), Object.defineProperty(Ke, "classNames", { enumerable: true, configurable: true, writable: true, value: Ve.classNames.concat([Ke.className]) }), function(t) {
  t.ADD = "lighter", t.COLOR = "color", t.COLOR_BURN = "color-burn", t.COLOR_DODGE = "color-dodge", t.DARKEN = "darken", t.DIFFERENCE = "difference", t.DST_OVER = "destination-over", t.EXCLUSION = "exclusion", t.HARD_LIGHT = "hard-light", t.HUE = "hue", t.LIGHTEN = "lighten", t.LUMINOSITY = "luminosity", t.MULTIPLY = "multiply", t.NORMAL = "source-over", t.OVERLAY = "overlay", t.SATURATION = "saturation", t.SCREEN = "screen", t.SOFT_LIGHT = "soft-light", t.SRC_ATOP = "source-atop", t.XOR = "xor";
}(Ge || (Ge = {}));
var ze = ["fill", "fillOpacity", "stroke", "strokeWidth", "strokeOpacity", "fillPattern", "strokePattern", "fillGradient", "strokeGradient", "strokeDasharray", "strokeDashoffset", "shadowBlur", "shadowColor", "shadowOpacity", "shadowOffsetX", "shadowOffsetY", "blur", "sepia", "invert", "brightness", "hue", "contrast", "saturate"];
var Ye = class extends Ue {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_display", { enumerable: true, configurable: true, writable: true, value: this._root._renderer.makeGraphics() }), Object.defineProperty(this, "_clear", { enumerable: true, configurable: true, writable: true, value: false });
  }
  _beforeChanged() {
    if (super._beforeChanged(), (this.isDirty("draw") || this.isDirty("svgPath")) && this.markDirtyBounds(), (this.isDirty("fill") || this.isDirty("stroke") || this.isDirty("visible") || this.isDirty("forceHidden") || this.isDirty("scale") || this.isDirty("fillGradient") || this.isDirty("strokeGradient") || this.isDirty("fillPattern") || this.isDirty("strokePattern") || this.isDirty("fillOpacity") || this.isDirty("strokeOpacity") || this.isDirty("strokeWidth") || this.isDirty("draw") || this.isDirty("blendMode") || this.isDirty("strokeDasharray") || this.isDirty("strokeDashoffset") || this.isDirty("svgPath") || this.isDirty("lineJoin") || this.isDirty("lineCap") || this.isDirty("shadowColor") || this.isDirty("shadowBlur") || this.isDirty("shadowOffsetX") || this.isDirty("shadowOffsetY")) && (this._clear = true), this._display.crisp = this.get("crisp", false), this.isDirty("fillGradient")) {
      const t = this.get("fillGradient");
      if (t) {
        this._display.isMeasured = true;
        const e2 = t.get("target");
        e2 && (this._disposers.push(e2.events.on("boundschanged", () => {
          this._markDirtyKey("fill");
        })), this._disposers.push(e2.events.on("positionchanged", () => {
          this._markDirtyKey("fill");
        })));
      }
    }
    if (this.isDirty("strokeGradient")) {
      const t = this.get("strokeGradient");
      if (t) {
        this._display.isMeasured = true;
        const e2 = t.get("target");
        e2 && (this._disposers.push(e2.events.on("boundschanged", () => {
          this._markDirtyKey("stroke");
        })), this._disposers.push(e2.events.on("positionchanged", () => {
          this._markDirtyKey("stroke");
        })));
      }
    }
  }
  _changed() {
    if (super._changed(), this._clear) {
      this.markDirtyBounds(), this.markDirtyLayer(), this._display.clear();
      let t = this.get("strokeDasharray");
      _(t) && (t = t < 0.5 ? [0] : [t]), this._display.setLineDash(t);
      const e2 = this.get("strokeDashoffset");
      e2 && this._display.setLineDashOffset(e2);
      const i2 = this.get("blendMode", Ge.NORMAL);
      this._display.blendMode = i2;
      const s2 = this.get("draw");
      s2 && "function" == typeof s2 && s2(this._display, this);
      const r2 = this.get("svgPath");
      null != r2 && this._display.svgPath(r2);
    }
  }
  _afterChanged() {
    if (super._afterChanged(), this._clear) {
      const t = this.get("fill"), e2 = this.get("fillGradient"), i2 = this.get("fillPattern"), s2 = this.get("fillOpacity"), r2 = this.get("stroke"), a2 = this.get("strokeGradient"), n2 = this.get("strokePattern"), o3 = this.get("shadowColor"), h2 = this.get("shadowBlur"), l2 = this.get("shadowOffsetX"), d2 = this.get("shadowOffsetY"), u2 = this.get("shadowOpacity");
      if (o3 && (h2 || l2 || d2) && this._display.shadow(o3, h2, l2, d2, u2), t && !e2 && (this._display.beginFill(t, s2), this._display.endFill()), e2) {
        if (t) {
          const i4 = e2.get("stops", []);
          i4.length && P(i4, (e3) => {
            e3.color && !e3.colorInherited || !t || (e3.color = t, e3.colorInherited = true), (null == e3.opacity || e3.opacityInherited) && (e3.opacity = s2, e3.opacityInherited = true);
          });
        }
        const i3 = e2.getFill(this);
        i3 && (this._display.beginFill(i3, s2), this._display.endFill());
      }
      if (i2) {
        const t2 = i2.pattern;
        t2 && (this._display.beginFill(t2, s2), this._display.endFill(), i2 instanceof Ke && i2.events.once("loaded", () => {
          this._clear = true, this.markDirty();
        }));
      }
      if (r2 || a2 || n2) {
        const t2 = this.get("strokeOpacity");
        let e3 = this.get("strokeWidth", 1);
        this.get("nonScalingStroke") && (e3 /= this.get("scale", 1)), this.get("crisp") && (e3 /= this._root._renderer.resolution);
        const i3 = this.get("lineJoin"), s3 = this.get("lineCap");
        if (r2 && !a2 && (this._display.lineStyle(e3, r2, t2, i3, s3), this._display.endStroke()), a2) {
          const n3 = a2.get("stops", []);
          n3.length && P(n3, (e4) => {
            e4.color && !e4.colorInherited || !r2 || (e4.color = r2, e4.colorInherited = true), (null == e4.opacity || e4.opacityInherited) && (e4.opacity = t2, e4.opacityInherited = true);
          });
          const o4 = a2.getFill(this);
          o4 && (this._display.lineStyle(e3, o4, t2, i3, s3), this._display.endStroke());
        }
        if (n2) {
          let r3 = n2.pattern;
          r3 && (this._display.lineStyle(e3, r3, t2, i3, s3), this._display.endStroke(), n2 instanceof Ke && n2.events.once("loaded", () => {
            this._clear = true, this.markDirty();
          }));
        }
      }
      this.getPrivate("showingTooltip") && this.showTooltip();
    }
    this._clear = false;
  }
};
Object.defineProperty(Ye, "className", { enumerable: true, configurable: true, writable: true, value: "Graphics" }), Object.defineProperty(Ye, "classNames", { enumerable: true, configurable: true, writable: true, value: Ue.classNames.concat([Ye.className]) });
var Xe = class extends Ye {
  _afterNew() {
    super._afterNew(), this._display.isMeasured = true, this.setPrivateRaw("trustBounds", true);
  }
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("width") || this.isDirty("height") || this.isPrivateDirty("width") || this.isPrivateDirty("height")) && (this._clear = true);
  }
  _changed() {
    super._changed(), this._clear && !this.get("draw") && this._draw();
  }
  _draw() {
    this._display.drawRect(0, 0, this.width(), this.height());
  }
  _updateSize() {
    this.markDirty(), this._clear = true;
  }
};
function $e(t, e2) {
  t.get("reverseChildren", false) ? t.children.eachReverse(e2) : t.children.each(e2);
}
Object.defineProperty(Xe, "className", { enumerable: true, configurable: true, writable: true, value: "Rectangle" }), Object.defineProperty(Xe, "classNames", { enumerable: true, configurable: true, writable: true, value: Ye.classNames.concat([Xe.className]) });
var Ze = class extends He {
};
Object.defineProperty(Ze, "className", { enumerable: true, configurable: true, writable: true, value: "Layout" }), Object.defineProperty(Ze, "classNames", { enumerable: true, configurable: true, writable: true, value: He.classNames.concat([Ze.className]) });
var Je = class extends Ze {
  updateContainer(t) {
    let i2 = t.get("paddingLeft", 0), s2 = t.innerWidth(), r2 = 0;
    $e(t, (t2) => {
      if (t2.isVisible() && "relative" == t2.get("position")) {
        let i3 = t2.get("width");
        if (i3 instanceof e) {
          r2 += i3.value;
          let e2 = s2 * i3.value, a3 = t2.get("minWidth", t2.getPrivate("minWidth", -1 / 0));
          a3 > e2 && (s2 -= a3, r2 -= i3.value);
          let n2 = t2.get("maxWidth", t2.getPrivate("maxWidth", 1 / 0));
          e2 > n2 && (s2 -= n2, r2 -= i3.value);
        } else _(i3) || (i3 = t2.width()), s2 -= i3 + t2.get("marginLeft", 0) + t2.get("marginRight", 0);
      }
    }), (s2 <= 0 || s2 == 1 / 0) && (s2 = 0.1), $e(t, (t2) => {
      if (t2.isVisible() && "relative" == t2.get("position")) {
        let i3 = t2.get("width");
        if (i3 instanceof e) {
          let e2 = s2 * i3.value / r2 - t2.get("marginLeft", 0) - t2.get("marginRight", 0), a3 = t2.get("minWidth", t2.getPrivate("minWidth", -1 / 0)), n2 = t2.get("maxWidth", t2.getPrivate("maxWidth", 1 / 0));
          e2 = Math.min(Math.max(a3, e2), n2), t2.setPrivate("width", e2);
        } else t2._prevSettings.width instanceof e && t2.setPrivate("width", void 0);
      }
    });
    let a2 = i2;
    $e(t, (t2) => {
      if ("relative" == t2.get("position")) if (t2.isVisible()) {
        let e2 = t2.adjustedLocalBounds(), i3 = t2.get("marginLeft", 0), s3 = t2.get("marginRight", 0), r3 = t2.get("maxWidth"), n2 = e2.left, o3 = e2.right;
        r3 && o3 - n2 > r3 && (o3 = n2 + r3);
        let h2 = a2 + i3 - n2;
        t2.setPrivate("x", h2), a2 = h2 + o3 + s3;
      } else t2.setPrivate("x", void 0);
    });
  }
};
Object.defineProperty(Je, "className", { enumerable: true, configurable: true, writable: true, value: "HorizontalLayout" }), Object.defineProperty(Je, "classNames", { enumerable: true, configurable: true, writable: true, value: Ze.classNames.concat([Je.className]) });
var qe = class extends Ze {
  updateContainer(t) {
    let i2 = t.get("paddingTop", 0), s2 = t.innerHeight(), r2 = 0;
    $e(t, (t2) => {
      if (t2.isVisible() && "relative" == t2.get("position")) {
        let i3 = t2.get("height");
        if (i3 instanceof e) {
          r2 += i3.value;
          let e2 = s2 * i3.value, a3 = t2.get("minHeight", t2.getPrivate("minHeight", -1 / 0));
          a3 > e2 && (s2 -= a3, r2 -= i3.value);
          let n2 = t2.get("maxHeight", t2.getPrivate("maxHeight", 1 / 0));
          e2 > n2 && (s2 -= n2, r2 -= i3.value);
        } else _(i3) || (i3 = t2.height()), s2 -= i3 + t2.get("marginTop", 0) + t2.get("marginBottom", 0);
      }
    }), (s2 <= 0 || s2 == 1 / 0) && (s2 = 0.1), $e(t, (t2) => {
      if (t2.isVisible() && "relative" == t2.get("position")) {
        let i3 = t2.get("height");
        if (i3 instanceof e) {
          let e2 = s2 * i3.value / r2 - t2.get("marginTop", 0) - t2.get("marginBottom", 0), a3 = t2.get("minHeight", t2.getPrivate("minHeight", -1 / 0)), n2 = t2.get("maxHeight", t2.getPrivate("maxHeight", 1 / 0));
          e2 = Math.min(Math.max(a3, e2), n2), t2.setPrivate("height", e2);
        } else t2._prevSettings.height instanceof e && t2.setPrivate("height", void 0);
      }
    });
    let a2 = i2;
    $e(t, (t2) => {
      if ("relative" == t2.get("position")) if (t2.isVisible()) {
        let e2 = t2.adjustedLocalBounds(), i3 = t2.get("marginTop", 0), s3 = e2.top, r3 = e2.bottom, n2 = t2.get("maxHeight");
        n2 && r3 - s3 > n2 && (r3 = s3 + n2);
        let o3 = t2.get("marginBottom", 0), h2 = a2 + i3 - s3;
        t2.setPrivate("y", h2), a2 = h2 + r3 + o3;
      } else t2.setPrivate("y", void 0);
    });
  }
};
Object.defineProperty(qe, "className", { enumerable: true, configurable: true, writable: true, value: "VerticalLayout" }), Object.defineProperty(qe, "classNames", { enumerable: true, configurable: true, writable: true, value: Ze.classNames.concat([qe.className]) });
var Qe = class extends Ze {
  _afterNew() {
    this._setRawDefault("maxColumns", Number.MAX_VALUE), super._afterNew();
  }
  updateContainer(t) {
    let e2 = t.get("paddingLeft", 0), i2 = t.get("paddingRight", 0), s2 = t.get("paddingTop", 0), r2 = t.maxWidth() - e2 - i2, a2 = r2, n2 = 1;
    $e(t, (t2) => {
      if (t2.get("visible") && t2.getPrivate("visible") && !t2.get("forceHidden") && "absolute" != t2.get("position")) {
        let e3 = t2.width();
        e3 < a2 && (a2 = e3), e3 > n2 && (n2 = e3);
      }
    }), a2 = pe(a2, 1, r2), n2 = pe(n2, 1, r2);
    let o3 = 1;
    o3 = this.get("fixedWidthGrid") ? r2 / n2 : r2 / a2, o3 = Math.max(1, Math.floor(o3)), o3 = Math.min(this.get("maxColumns", Number.MAX_VALUE), o3);
    let h2 = this.getColumnWidths(t, o3, n2, r2), l2 = s2, d2 = 0, u2 = 0;
    o3 = h2.length;
    let p2 = e2;
    $e(t, (t2) => {
      if ("relative" == t2.get("position") && t2.isVisible()) {
        const i3 = t2.get("marginTop", 0), s3 = t2.get("marginBottom", 0);
        let r3 = t2.adjustedLocalBounds(), a3 = t2.get("marginLeft", 0), n3 = t2.get("marginRight", 0), c2 = p2 + a3 - r3.left, g2 = l2 + i3 - r3.top;
        t2.setPrivate("x", c2), t2.setPrivate("y", g2), p2 += h2[d2] + n3, u2 = Math.max(u2, t2.height() + i3 + s3), d2++, d2 >= o3 && (d2 = 0, p2 = e2, l2 += u2);
      }
    });
  }
  getColumnWidths(t, e2, i2, s2) {
    let r2 = 0, a2 = [], n2 = 0;
    return $e(t, (s3) => {
      let r3 = s3.adjustedLocalBounds();
      "absolute" != s3.get("position") && s3.isVisible() && (this.get("fixedWidthGrid") ? a2[n2] = i2 : a2[n2] = Math.max(0 | a2[n2], r3.right - r3.left + s3.get("marginLeft", 0) + s3.get("marginRight", 0)), n2 < t.children.length - 1 && (n2++, n2 == e2 && (n2 = 0)));
    }), P(a2, (t2) => {
      r2 += t2;
    }), r2 > s2 ? e2 > 2 ? (e2 -= 1, this.getColumnWidths(t, e2, i2, s2)) : [s2] : a2;
  }
};
Object.defineProperty(Qe, "className", { enumerable: true, configurable: true, writable: true, value: "GridLayout" }), Object.defineProperty(Qe, "classNames", { enumerable: true, configurable: true, writable: true, value: Ze.classNames.concat([Qe.className]) });
var ti = class {
  static escape(t) {
    return t.replace(/\[\[/g, this.prefix + "1").replace(/([^\/\]]{1})\]\]/g, "$1" + this.prefix + "2").replace(/\]\]/g, this.prefix + "2").replace(/\{\{/g, this.prefix + "3").replace(/\}\}/g, this.prefix + "4").replace(/\'\'/g, this.prefix + "5");
  }
  static unescape(t) {
    return t.replace(new RegExp(this.prefix + "1", "g"), "[[").replace(new RegExp(this.prefix + "2", "g"), "]]").replace(new RegExp(this.prefix + "3", "g"), "{{").replace(new RegExp(this.prefix + "4", "g"), "}}").replace(new RegExp(this.prefix + "5", "g"), "''");
  }
  static cleanUp(t) {
    return t.replace(/\[\[/g, "[").replace(/\]\]/g, "]").replace(/\{\{/g, "{").replace(/\}\}/g, "}").replace(/\'\'/g, "'");
  }
  static chunk(t, e2 = false, i2 = false) {
    let s2 = [];
    t = this.escape(t);
    let r2 = e2 ? t.split("'") : [t];
    for (let a2 = 0; a2 < r2.length; a2++) {
      let t2 = r2[a2];
      if ("" !== t2) if (a2 % 2 == 0) {
        t2 = t2.replace(/\]\[/g, "]" + f + "["), t2 = t2.replace(/\[\]/g, "[ ]");
        let e3 = t2.split(/[\[\]]+/);
        for (let t3 = 0; t3 < e3.length; t3++) {
          let r3 = this.cleanUp(this.unescape(e3[t3]));
          r3 !== f && ("" !== r3 && (t3 % 2 == 0 ? s2.push({ type: "value", text: r3 }) : s2.push({ type: i2 ? "value" : "format", text: "[" + r3 + "]" })));
        }
      } else {
        let e3 = t2.split(/[\[\]]+/);
        for (let t3 = 0; t3 < e3.length; t3++) {
          let i3 = this.cleanUp(this.unescape(e3[t3]));
          "" !== i3 && (t3 % 2 == 0 ? s2.push({ type: "text", text: i3 }) : this.isImage(i3) ? s2.push({ type: "image", text: "[" + i3 + "]" }) : s2.push({ type: "format", text: "[" + i3 + "]" }));
        }
      }
    }
    return s2;
  }
  static isImage(t) {
    return !!t.match(/img[ ]?:/);
  }
  static getTextStyle(t) {
    let e2 = {};
    if ("" == t || "[ ]" == t) return {};
    const i2 = t.match(/('[^']*')|("[^"]*")/gi);
    if (i2) for (let r2 = 0; r2 < i2.length; r2++) t = t.replace(i2[r2], i2[r2].replace(/['"]*/g, "").replace(/[ ]+/g, "+"));
    let s2 = t.match(/([\w\-]*:[\s]?[^;\s\]]*)|(\#[\w]{1,6})|([\w\-]+)|(\/)/gi);
    if (!s2) return {};
    for (let r2 = 0; r2 < s2.length; r2++) if (s2[r2].match(/^(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)$/i)) e2.fontWeight = s2[r2];
    else if (s2[r2].match(/^(underline|line-through)$/i)) e2.textDecoration = s2[r2];
    else if ("/" == s2[r2]) ;
    else if (s2[r2].match(/:/)) {
      const t2 = s2[r2].replace("+", " ").split(/:[ ]*/);
      e2[t2[0]] = t2[1];
    } else e2.fill = Yt.fromString(s2[r2]);
    return e2;
  }
};
function ei(t, e2) {
  if (null != e2) {
    e2 = "" + e2;
    let i2, s2 = (e2 = ti.escape(e2)).match(/\{([^}]+)\}/g);
    if (s2) for (i2 = 0; i2 < s2.length; i2++) {
      let r2 = ii(t, s2[i2].replace(/\{([^}]+)\}/, "$1"));
      null == r2 && (r2 = ""), e2 = e2.split(s2[i2]).join(r2);
    }
    e2 = ti.unescape(e2);
  } else e2 = "";
  return e2;
}
function ii(t, e2, i2) {
  let s2;
  const r2 = t.dataItem;
  let a2, n2 = [], o3 = /(format[a-zA-Z]*)\((.*)\)|([^.]+)/g;
  for (; a2 = o3.exec(e2), null !== a2; ) if (a2[3]) {
    n2.push({ prop: a2[3] });
    const e3 = t.getDateFormatter().get("dateFields", []), i3 = t.getNumberFormatter().get("numericFields", []), s3 = t.getDurationFormatter().get("durationFields", []);
    -1 !== e3.indexOf(a2[3]) ? n2.push({ method: "formatDate", params: [] }) : -1 !== i3.indexOf(a2[3]) ? n2.push({ method: "formatNumber", params: [] }) : -1 !== s3.indexOf(a2[3]) && n2.push({ method: "formatDuration", params: [] });
  } else {
    let t2 = [];
    if ("" != vt(a2[2])) {
      let e3, i3 = /'([^']*)'|"([^"]*)"|([0-9\-]+)/g;
      for (; e3 = i3.exec(a2[2]), null !== e3; ) t2.push(e3[1] || e3[2] || e3[3]);
    }
    n2.push({ method: a2[1], params: t2 });
  }
  if (r2) {
    s2 = ri(t, n2, r2._settings), (null == s2 || m(s2)) && (s2 = ri(t, n2, r2));
    let i3 = r2.dataContext;
    null == s2 && i3 && (s2 = ri(t, n2, i3), null == s2 && (s2 = ri(t, [{ prop: e2 }], i3)), null == s2 && i3.dataContext && (s2 = ri(t, n2, i3.dataContext))), null == s2 && r2.component && r2.component.dataItem !== r2 && (s2 = ii(r2.component, e2));
  }
  return null == s2 && (s2 = ri(t, n2, t)), null == s2 && t.parent && (s2 = ii(t.parent, e2)), s2;
}
function si(t, e2) {
  const i2 = t.getPrivate("customData");
  if (m(i2)) return i2[e2];
}
function ri(t, e2, i2, s2) {
  let r2 = i2, a2 = false;
  for (let n2 = 0, h2 = e2.length; n2 < h2; n2++) {
    let s3 = e2[n2];
    if (s3.prop) {
      if (r2 instanceof Ue) {
        let t2 = r2.get(s3.prop);
        null == t2 && (t2 = r2.getPrivate(s3.prop)), null == t2 && (t2 = si(r2, s3.prop)), null == t2 && (t2 = r2[s3.prop]), r2 = t2;
      } else if (r2.get) {
        let t2 = r2.get(s3.prop);
        null == t2 && (t2 = r2[s3.prop]), r2 = t2;
      } else r2 = r2[s3.prop];
      if (null == r2) return;
    } else switch (s3.method) {
      case "formatNumber":
        let e3 = l(r2);
        null != e3 && (r2 = t.getNumberFormatter().format(e3, s3.params[0] || void 0), a2 = true);
        break;
      case "formatDate":
        let n3 = d(r2);
        if (!c(n3) || o2(n3.getTime())) return;
        null != n3 && (r2 = t.getDateFormatter().format(n3, s3.params[0] || void 0), a2 = true);
        break;
      case "formatDuration":
        let h3 = l(r2);
        null != h3 && (r2 = t.getDurationFormatter().format(h3, s3.params[0] || void 0, s3.params[1] || void 0), a2 = true);
        break;
      case "urlEncode":
      case "encodeURIComponent":
        r2 = encodeURIComponent(r2);
        break;
      default:
        r2[s3.method] && r2[s3.method].apply(i2, s3.params);
    }
  }
  if (!a2) {
    let e3 = [{ method: "", params: s2 }];
    _(r2) ? (e3[0].method = "formatNumber", e3[0].params = "") : c(r2) && (e3[0].method = "formatDate", e3[0].params = ""), e3[0].method && (r2 = ri(t, e3, r2));
  }
  return r2;
}
Object.defineProperty(ti, "prefix", { enumerable: true, configurable: true, writable: true, value: "__amcharts__" });
var ai = class _ai extends Ue {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_display", { enumerable: true, configurable: true, writable: true, value: this._root._renderer.makeContainer() }), Object.defineProperty(this, "_childrenDisplay", { enumerable: true, configurable: true, writable: true, value: this._root._renderer.makeContainer() }), Object.defineProperty(this, "children", { enumerable: true, configurable: true, writable: true, value: new ne(this) }), Object.defineProperty(this, "_percentageSizeChildren", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_percentagePositionChildren", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_prevWidth", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_prevHeight", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_contentWidth", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_contentHeight", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_contentMask", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_vsbd0", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_vsbd1", { enumerable: true, configurable: true, writable: true, value: void 0 });
  }
  _afterNew() {
    super._afterNew(), this._display.addChild(this._childrenDisplay);
  }
  _dispose() {
    D(this.allChildren(), (t) => {
      t.dispose();
    }), this.getPrivate("htmlElement") && this._root._removeHTMLContent(this), super._dispose();
  }
  _changed() {
    if (super._changed(), this.isDirty("interactiveChildren") && (this._display.interactiveChildren = this.get("interactiveChildren", false)), this.isDirty("layout") && (this._prevWidth = 0, this._prevHeight = 0, this.markDirtyBounds(), this._prevSettings.layout && this.children.each((t) => {
      t.removePrivate("x"), t.removePrivate("y");
    })), (this.isDirty("paddingTop") || this.isDirty("paddingBottom") || this.isDirty("paddingLeft") || this.isDirty("paddingRight")) && this.children.each((t) => {
      t.markDirtyPosition();
    }), this.isDirty("maskContent")) {
      const t = this._childrenDisplay;
      let e2 = this._contentMask;
      this.get("maskContent") ? e2 || (e2 = Xe.new(this._root, { x: -0.5, y: -0.5, width: this.width() + 1, height: this.height() + 1 }), this._contentMask = e2, t.addChildAt(e2._display, 0), t.mask = e2._display) : e2 && (t.removeChild(e2._display), t.mask = null, e2.dispose(), this._contentMask = void 0);
    }
  }
  _updateSize() {
    super._updateSize(), P(this._percentageSizeChildren, (t) => {
      t._updateSize();
    }), P(this._percentagePositionChildren, (t) => {
      t.markDirtyPosition(), t._updateSize();
    }), this.updateBackground();
  }
  updateBackground() {
    const t = this.get("background");
    let e2 = this._localBounds;
    if (e2 && !this.isHidden()) {
      let i2 = e2.left, s2 = e2.top, r2 = e2.right - i2, a2 = e2.bottom - s2, n2 = this.get("maxWidth"), o3 = this.get("maxHeight");
      o3 && a2 > o3 && (a2 = o3), n2 && r2 > n2 && (r2 = n2);
      let h2 = this.width(), l2 = this.height();
      t && (t.setAll({ width: r2, height: a2, x: i2, y: s2 }), this._display.interactive && (t._display.interactive = true));
      const d2 = this._contentMask;
      d2 && d2.setAll({ width: h2 + 1, height: l2 + 1 });
      const u2 = this.get("verticalScrollbar");
      if (u2) {
        u2.set("height", l2), u2.set("x", h2 - u2.width() - u2.get("marginRight", 0)), u2.set("end", u2.get("start", 0) + l2 / this._contentHeight);
        const t2 = u2.get("background");
        t2 && t2.setAll({ width: u2.width(), height: l2 });
        let e3 = true;
        this._contentHeight <= l2 && (e3 = false), u2.setPrivate("visible", e3);
      }
    }
  }
  _applyThemes(t = false) {
    return !!super._applyThemes(t) && (this.eachChildren((e2) => {
      e2._applyThemes(t);
    }), true);
  }
  _applyState(t) {
    super._applyState(t), this.get("setStateOnChildren") && this.eachChildren((e2) => {
      e2.states.apply(t);
    });
  }
  _applyStateAnimated(t, e2) {
    super._applyStateAnimated(t, e2), this.get("setStateOnChildren") && this.eachChildren((i2) => {
      i2.states.applyAnimate(t, e2);
    });
  }
  innerWidth() {
    return this.width() - this.get("paddingRight", 0) - this.get("paddingLeft", 0);
  }
  innerHeight() {
    return this.height() - this.get("paddingTop", 0) - this.get("paddingBottom", 0);
  }
  _getBounds() {
    if (this.get("html")) {
      let t = this._localBounds;
      t && (this._contentWidth = t.right - t.left, this._contentHeight = t.bottom - t.top);
    } else {
      let t = this.get("width"), e2 = this.get("height"), i2 = this.getPrivate("width"), s2 = this.getPrivate("height"), r2 = { left: 0, top: 0, right: this.width(), bottom: this.height() }, a2 = this.get("layout"), n2 = false, o3 = false;
      if ((a2 instanceof Je || a2 instanceof Qe) && (n2 = true), a2 instanceof qe && (o3 = true), null == t && null == i2 || null == e2 && null == s2 || this.get("verticalScrollbar")) {
        let t2 = Number.MAX_VALUE, e3 = t2, i3 = -t2, s3 = t2, a3 = -t2;
        const h2 = this.get("paddingLeft", 0), l2 = this.get("paddingTop", 0), d2 = this.get("paddingRight", 0), u2 = this.get("paddingBottom", 0);
        this.children.each((t3) => {
          if ("absolute" != t3.get("position") && t3.get("isMeasured")) {
            let r3 = t3.adjustedLocalBounds(), h3 = t3.x(), l3 = t3.y(), d3 = h3 + r3.left, u3 = h3 + r3.right, p3 = l3 + r3.top, c3 = l3 + r3.bottom;
            n2 && (d3 -= t3.get("marginLeft", 0), u3 += t3.get("marginRight", 0)), o3 && (p3 -= t3.get("marginTop", 0), c3 += t3.get("marginBottom", 0)), d3 < e3 && (e3 = d3), u3 > i3 && (i3 = u3), p3 < s3 && (s3 = p3), c3 > a3 && (a3 = c3);
          }
        }), e3 == t2 && (e3 = 0), i3 == -t2 && (i3 = 0), s3 == t2 && (s3 = 0), a3 == -t2 && (a3 = 0), r2.left = e3 - h2, r2.top = s3 - l2, r2.right = i3 + d2, r2.bottom = a3 + u2;
        const p2 = this.get("minWidth");
        _(p2) && p2 > 0 && r2.right - r2.left < p2 && (r2.right >= p2 ? r2.left = r2.right - p2 : r2.right = r2.left + p2);
        const c2 = this.get("minHeight");
        _(c2) && c2 > 0 && r2.bottom - r2.top < c2 && (r2.bottom >= c2 ? r2.top = r2.bottom - c2 : r2.bottom = r2.top + c2);
      } else ;
      this._contentWidth = r2.right - r2.left, this._contentHeight = r2.bottom - r2.top, _(t) && (r2.left = 0, r2.right = t), _(i2) && (r2.left = 0, r2.right = i2), _(e2) && (r2.top = 0, r2.bottom = e2), _(s2) && (r2.top = 0, r2.bottom = s2), this._localBounds = r2;
    }
  }
  _updateBounds() {
    const t = this.get("layout");
    t && t.updateContainer(this), super._updateBounds(), this.updateBackground();
  }
  markDirty() {
    super.markDirty(), this._root._addDirtyParent(this);
  }
  _prepareChildren() {
    const t = this.innerWidth(), i2 = this.innerHeight();
    if (t != this._prevWidth || i2 != this._prevHeight) {
      let s2 = this.get("layout"), r2 = false, a2 = false;
      s2 && ((s2 instanceof Je || s2 instanceof Qe) && (r2 = true), s2 instanceof qe && (a2 = true)), P(this._percentageSizeChildren, (s3) => {
        if (!r2) {
          let i3 = s3.get("width");
          i3 instanceof e && s3.setPrivate("width", i3.value * t);
        }
        if (!a2) {
          let t2 = s3.get("height");
          t2 instanceof e && s3.setPrivate("height", t2.value * i2);
        }
      }), P(this._percentagePositionChildren, (t2) => {
        t2.markDirtyPosition(), t2.markDirtyBounds();
      }), this._prevWidth = t, this._prevHeight = i2, this._sizeDirty = true, this.updateBackground();
    }
    this._handleStates();
  }
  _updateHTMLContent() {
    const t = this.get("html", "");
    t && "" !== t ? this._root._setHTMLContent(this, ei(this, t)) : this._root._removeHTMLContent(this), this._root._positionHTMLElement(this);
  }
  scrollToChild(t) {
    const e2 = this.get("verticalScrollbar");
    if (e2) {
      let i2 = t.y(), s2 = this.innerHeight(), r2 = t.height(), a2 = this._contentHeight, n2 = 1 - (s2 - r2 / 2) / a2;
      if (i2 + 0.7 * r2 + this._childrenDisplay.y > s2 || i2 - 0.3 * r2 + this._childrenDisplay.y < 0) {
        let t2 = Math.max(0, Math.min(n2, (i2 - r2 / 2) / a2));
        e2.animate({ key: "start", to: t2, duration: e2.get("animationDuration", 0), easing: e2.get("animationEasing") });
      }
    }
  }
  _updateChildren() {
    if (this.isDirty("html") && this._updateHTMLContent(), this.isDirty("verticalScrollbar")) {
      const t = this.get("verticalScrollbar");
      if (t) {
        t._setParent(this), t.startGrip.setPrivate("visible", false), t.endGrip.setPrivate("visible", false), this.set("maskContent", true), this.set("paddingRight", t.width() + t.get("marginRight", 0) + t.get("marginLeft", 0));
        let e2 = this.get("background");
        e2 || (e2 = this.set("background", Xe.new(this._root, { themeTags: ["background"], fillOpacity: 0, fill: this._root.interfaceColors.get("alternativeBackground") }))), this._vsbd0 = this.events.on("wheel", (e3) => {
          const i2 = e3.originalEvent;
          if (!lt(i2, this)) return;
          i2.preventDefault();
          let s2 = i2.deltaY / 5e3;
          const r2 = t.get("start", 0), a2 = t.get("end", 1);
          r2 + s2 <= 0 && (s2 = -r2), a2 + s2 >= 1 && (s2 = 1 - a2), r2 + s2 >= 0 && a2 + s2 <= 1 && (t.set("start", r2 + s2), t.set("end", a2 + s2));
        }), this._disposers.push(this._vsbd0), this._vsbd1 = t.events.on("rangechanged", () => {
          let e3 = this._contentHeight;
          const i2 = this._childrenDisplay, s2 = this._contentMask;
          i2.y = -t.get("start", 0) * e3, i2.markDirtyLayer(), s2 && (s2._display.y = -i2.y, i2.mask = s2._display);
        }), this._disposers.push(this._vsbd1), this._display.addChild(t._display);
      } else {
        const t2 = this._prevSettings.verticalScrollbar;
        if (t2) {
          this._display.removeChild(t2._display), this._vsbd0 && this._vsbd0.dispose(), this._vsbd1 && this._vsbd1.dispose();
          this._childrenDisplay.y = 0, this.setPrivate("height", void 0), this.set("maskContent", false), this.set("paddingRight", void 0);
        }
      }
    }
    if (this.isDirty("background")) {
      const t = this._prevSettings.background;
      t && this._display.removeChild(t._display);
      const e2 = this.get("background");
      e2 instanceof Ue && (e2.set("isMeasured", false), e2._setParent(this), this._display.addChildAt(e2._display, 0));
    }
    if (this.isDirty("mask")) {
      const t = this.get("mask"), e2 = this._prevSettings.mask;
      if (e2 && (this._display.removeChild(e2._display), e2 != t && e2.dispose()), t) {
        const e3 = t.parent;
        e3 && e3.children.removeValue(t), t._setParent(this), this._display.addChildAt(t._display, 0), this._childrenDisplay.mask = t._display;
      }
    }
  }
  _processTemplateField() {
    super._processTemplateField(), this.children.each((t) => {
      t._processTemplateField();
    });
  }
  walkChildren(t) {
    this.children.each((e2) => {
      e2 instanceof _ai && e2.walkChildren(t), t(e2);
    });
  }
  eachChildren(t) {
    const e2 = this.get("background");
    e2 && t(e2);
    const i2 = this.get("verticalScrollbar");
    i2 && t(i2);
    const s2 = this.get("mask");
    s2 && t(s2), this.children.values.forEach((e3) => {
      t(e3);
    });
  }
  allChildren() {
    const t = [];
    return this.eachChildren((e2) => {
      t.push(e2);
    }), t;
  }
  _setDataItem(t) {
    const e2 = t !== this._dataItem;
    super._setDataItem(t);
    const i2 = this.get("html", "");
    i2 && "" !== i2 && e2 && this._root._setHTMLContent(this, ei(this, i2));
  }
};
Object.defineProperty(ai, "className", { enumerable: true, configurable: true, writable: true, value: "Container" }), Object.defineProperty(ai, "classNames", { enumerable: true, configurable: true, writable: true, value: Ue.classNames.concat([ai.className]) });
var ni = class extends Ue {
  constructor() {
    super(...arguments), Object.defineProperty(this, "textStyle", { enumerable: true, configurable: true, writable: true, value: this._root._renderer.makeTextStyle() }), Object.defineProperty(this, "_display", { enumerable: true, configurable: true, writable: true, value: this._root._renderer.makeText("", this.textStyle) }), Object.defineProperty(this, "_textStyles", { enumerable: true, configurable: true, writable: true, value: ["textAlign", "fontFamily", "fontSize", "fontStyle", "fontWeight", "fontStyle", "fontVariant", "textDecoration", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "shadowOpacity", "lineHeight", "baselineRatio", "direction", "textBaseline", "oversizedBehavior", "breakWords", "ellipsis", "minScale", "maxChars"] }), Object.defineProperty(this, "_originalScale", { enumerable: true, configurable: true, writable: true, value: void 0 });
  }
  _updateBounds() {
    if (this.get("text")) {
      super._updateBounds();
      let t = this.get("fillGradient");
      t && (this._display.style.fill = t.getFill(this));
    } else {
      let t = { left: 0, right: 0, top: 0, bottom: 0 };
      this._adjustedLocalBounds = t;
    }
  }
  _changed() {
    super._changed(), this._display.clear();
    let t = this.textStyle;
    if (this.isDirty("opacity")) {
      let t2 = this.get("opacity", 1);
      this._display.alpha = t2;
    }
    if ((this.isDirty("text") || this.isDirty("populateText")) && (this._display.text = this._getText(), this.markDirtyBounds(), "tooltip" == this.get("role") && this._root.updateTooltip(this)), this.isPrivateDirty("tooltipElement")) {
      this.getPrivate("tooltipElement") && this._disposers.push(new z(() => {
        this._root._removeTooltipElement(this);
      }));
    }
    if (this.isDirty("width") && (t.wordWrapWidth = this.width(), this.markDirtyBounds()), this.isDirty("oversizedBehavior") && (t.oversizedBehavior = this.get("oversizedBehavior", "none"), this.markDirtyBounds()), this.isDirty("breakWords") && (t.breakWords = this.get("breakWords", false), this.markDirtyBounds()), this.isDirty("ellipsis") && (t.ellipsis = this.get("ellipsis"), this.markDirtyBounds()), this.isDirty("ignoreFormatting") && (t.ignoreFormatting = this.get("ignoreFormatting", false), this.markDirtyBounds()), this.isDirty("minScale") && (t.minScale = this.get("minScale", 0), this.markDirtyBounds()), this.isDirty("fill") || this.isDirty("fillGradient")) {
      const e2 = this.get("fill"), i2 = this.get("fillGradient"), s2 = this.get("fillOpacity");
      if (i2) {
        if (e2) {
          const t2 = i2.get("stops", []);
          t2.length && P(t2, (t3) => {
            t3.color && !t3.colorInherited || !e2 || (t3.color = e2, t3.colorInherited = true), (null == t3.opacity || t3.opacityInherited) && (t3.opacity = s2, t3.opacityInherited = true);
          });
        }
        t.fill = i2.getFill(this);
      } else e2 && (t.fill = e2);
    }
    if (this.isDirty("fillOpacity")) {
      let e2 = this.get("fillOpacity", 1);
      e2 && (t.fillOpacity = e2);
    }
    (this.isDirty("maxWidth") || this.isPrivateDirty("maxWidth")) && (t.maxWidth = this.get("maxWidth", this.getPrivate("maxWidth")), this.markDirtyBounds()), (this.isDirty("maxHeight") || this.isPrivateDirty("maxHeight")) && (t.maxHeight = this.get("maxHeight", this.getPrivate("maxHeight")), this.markDirtyBounds()), P(this._textStyles, (e2) => {
      this._dirty[e2] && (t[e2] = this.get(e2), this.markDirtyBounds());
    }), t.fontSize = this.get("fontSize"), t.fontFamily = this.get("fontFamily"), this._display.style = t, this.isDirty("role") && "tooltip" == this.get("role") && this._root.updateTooltip(this);
  }
  _getText() {
    let t = this.get("text", "");
    return this.get("maxChars") && (t = yt(t, this.get("maxChars", 1e8), this.get("breakWords"), this.get("ellipsis"))), this.get("populateText") ? ei(this, t) : t;
  }
  _getAccessibleText() {
    const t = this.get("ariaLabel");
    return void 0 !== t ? this.get("populateText") ? ei(this, t) : t : this._getText();
  }
  markDirtyText() {
    this._display.text = this._getText(), "tooltip" == this.get("role") && this._root.updateTooltip(this), this.markDirtyBounds(), this.markDirty();
  }
  _setDataItem(t) {
    super._setDataItem(t), this.get("populateText") && this.markDirtyText();
  }
  getNumberFormatter() {
    return this.parent ? this.parent.getNumberFormatter() : super.getNumberFormatter();
  }
  getDateFormatter() {
    return this.parent ? this.parent.getDateFormatter() : super.getDateFormatter();
  }
  getDurationFormatter() {
    return this.parent ? this.parent.getDurationFormatter() : super.getDurationFormatter();
  }
};
Object.defineProperty(ni, "className", { enumerable: true, configurable: true, writable: true, value: "Text" }), Object.defineProperty(ni, "classNames", { enumerable: true, configurable: true, writable: true, value: Ue.classNames.concat([ni.className]) });
var oi = class extends ai {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_text", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_textKeys", { enumerable: true, configurable: true, writable: true, value: ["text", "fill", "fillGradient", "fillOpacity", "textAlign", "fontFamily", "fontSize", "fontStyle", "fontWeight", "fontStyle", "fontVariant", "textDecoration", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "shadowOpacity", "lineHeight", "baselineRatio", "direction", "textBaseline", "oversizedBehavior", "breakWords", "ellipsis", "minScale", "populateText", "role", "ignoreFormatting", "maxChars", "ariaLabel"] });
  }
  get text() {
    return this._text;
  }
  _afterNew() {
    super._afterNew(), this._makeText(), P(this._textKeys, (t) => {
      const e2 = this.get(t);
      null != e2 && this._text.set(t, e2);
    }), "" !== this.get("html", "") && this._text.set("text", ""), this.onPrivate("maxWidth", () => {
      this._setMaxDimentions();
    }), this.onPrivate("maxHeight", () => {
      this._setMaxDimentions();
    });
  }
  _makeText() {
    this._text = this.children.push(ni.new(this._root, {}));
  }
  _updateChildren() {
    super._updateChildren();
    const t = this._text;
    if (P(this._textKeys, (t2) => {
      this._text.set(t2, this.get(t2));
    }), (this.isDirty("maxWidth") || this.isDirty("maxHeight") || this.isDirty("rotation")) && this._setMaxDimentions(), "" !== this.get("html", "") ? t.set("text", "") : (t.set("text", this.get("text")), this._maybeUpdateHTMLColor()), (this.isDirty("fill") || this.isDirty("fillGradient")) && this._maybeUpdateHTMLColor(), this.isDirty("textAlign") || this.isDirty("width")) {
      const e3 = this.get("textAlign");
      let i2;
      null != this.get("width") ? i2 = "right" == e3 ? r : "center" == e3 ? a : 0 : "left" == e3 || "start" == e3 ? i2 = this.get("paddingLeft", 0) : "right" != e3 && "end" != e3 || (i2 = -this.get("paddingRight", 0)), t.set("x", i2);
    }
    const e2 = this.get("background");
    e2 && e2.setPrivate("visible", t._display.textVisible);
  }
  _maybeUpdateHTMLColor() {
    const t = this.getPrivate("htmlElement");
    t && this.get("fill") && (t.style.color = this.get("fill").toCSSHex());
  }
  _setMaxDimentions() {
    const t = this.get("rotation"), e2 = 90 == t || 270 == t || -90 == t, i2 = this._text, s2 = this.get("maxWidth", this.getPrivate("maxWidth", 1 / 0));
    _(s2) ? i2.set(e2 ? "maxHeight" : "maxWidth", s2 - this.get("paddingTop", 0) - this.get("paddingBottom", 0)) : i2.set(e2 ? "maxHeight" : "maxWidth", void 0);
    const r2 = this.get("maxHeight", this.getPrivate("maxHeight", 1 / 0));
    _(r2) ? i2.set(e2 ? "maxWidth" : "maxHeight", r2 - this.get("paddingLeft", 0) - this.get("paddingRight", 0)) : i2.set(e2 ? "maxWidth" : "maxHeight", void 0), this.root.events.once("frameended", () => {
      i2.markDirtyBounds();
    });
  }
  _setDataItem(t) {
    super._setDataItem(t), this._markDirtyKey("text"), this._markDirtyKey("html");
    const e2 = this._text;
    e2.get("populateText") && e2.markDirtyText();
    const i2 = this.get("html");
    i2 && "" !== i2 && this._updateHTMLContent();
  }
  getText() {
    return this._text._getText();
  }
  getAccessibleText() {
    return this._text._getAccessibleText();
  }
};
Object.defineProperty(oi, "className", { enumerable: true, configurable: true, writable: true, value: "Label" }), Object.defineProperty(oi, "classNames", { enumerable: true, configurable: true, writable: true, value: ai.classNames.concat([oi.className]) });
var hi = class {
  constructor(t, e2) {
    if (Object.defineProperty(this, "_root", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_rules", { enumerable: true, configurable: true, writable: true, value: {} }), this._root = t, !e2) throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
  }
  static new(t) {
    const e2 = new this(t, true);
    return e2.setupDefaultRules(), e2;
  }
  setupDefaultRules() {
  }
  _lookupRules(t) {
    return this._rules[t];
  }
  ruleRaw(t, e2 = []) {
    let i2 = this._rules[t];
    i2 || (i2 = this._rules[t] = []), e2.sort(Se);
    const { index: s2, found: r2 } = I(i2, (t2) => {
      const i3 = Se(t2.tags.length, e2.length);
      return 0 === i3 ? je(t2.tags, e2, Se) : i3;
    });
    if (r2) return i2[s2].template;
    {
      const t2 = Fe.new({});
      return i2.splice(s2, 0, { tags: e2, template: t2 }), t2;
    }
  }
  rule(t, e2 = []) {
    return this.ruleRaw(t, e2);
  }
};

export {
  e,
  i,
  r,
  a,
  n,
  o2 as o,
  l,
  u,
  g,
  _,
  m,
  f,
  b,
  v,
  w,
  P,
  x,
  k,
  O,
  T,
  S,
  j,
  A,
  N,
  R,
  W,
  U,
  V,
  G,
  z,
  Y,
  X,
  $,
  Z,
  J,
  q,
  Q,
  et,
  it,
  st,
  rt,
  at,
  nt,
  ot,
  lt,
  dt,
  ut,
  ct,
  gt,
  _t,
  mt,
  vt,
  wt,
  Pt,
  Dt,
  xt,
  kt,
  Ot,
  Tt,
  St,
  jt,
  Et,
  Ct,
  Mt,
  Bt,
  Ut,
  Vt,
  zt,
  Yt,
  Xt,
  qt,
  ee,
  se,
  re,
  ae,
  he,
  le,
  de,
  ue,
  pe,
  ce,
  ge,
  _e,
  me,
  be,
  we,
  Pe,
  Oe,
  Te,
  Se,
  Ee,
  Ae,
  He,
  Fe,
  Ge,
  ze,
  Ye,
  Xe,
  Je,
  qe,
  Qe,
  ti,
  ei,
  ai,
  ni,
  oi,
  hi
};
//# sourceMappingURL=chunk-4K2OWETR.js.map
