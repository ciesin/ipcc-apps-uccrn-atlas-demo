import {
  s
} from "./chunk-F2TETQWX.js";
import {
  u as u2
} from "./chunk-3K3LAGUL.js";
import {
  $,
  Ct,
  Dt,
  Et,
  G,
  Ge,
  He,
  J,
  Je,
  Mt,
  N,
  O,
  Oe,
  Ot,
  P,
  Pt,
  Q,
  Qe,
  R,
  S,
  Se,
  St,
  Te,
  Tt,
  U,
  V,
  W,
  X,
  Xe,
  Xt,
  Y,
  Ye,
  Yt,
  Z,
  _,
  _e,
  _t,
  ai,
  at,
  b,
  ct,
  dt,
  e,
  ee,
  ei,
  et,
  f,
  g,
  i,
  it,
  j,
  jt,
  k,
  kt,
  l,
  le,
  m,
  me,
  mt,
  n,
  ni,
  nt,
  ot,
  q,
  qe,
  r as r2,
  st,
  ti,
  u,
  ut,
  v,
  vt,
  w,
  wt,
  x,
  xt,
  z,
  zt
} from "./chunk-4K2OWETR.js";
import "./chunk-H7PA52WJ.js";
import "./chunk-PODRVOXS.js";
import "./chunk-NALU24NB.js";
import "./chunk-REAPFM7O.js";
import "./chunk-UNGOQUF2.js";
import "./chunk-AIKBABBU.js";
import {
  r
} from "./chunk-A42OBC4U.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import "./chunk-RYSF6YCR.js";
import "./chunk-4LTV6KQ5.js";
import "./chunk-PPIAYGRE.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/chunks/chartUtilsAm5.js
var Se2 = class {
  constructor() {
    Object.defineProperty(this, "_observer", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_targets", { enumerable: true, configurable: true, writable: true, value: [] }), this._observer = new ResizeObserver((e2) => {
      P(e2, (e3) => {
        P(this._targets, (t) => {
          t.target === e3.target && t.callback();
        });
      });
    });
  }
  addTarget(e2, t) {
    this._observer.observe(e2, { box: "border-box" }), this._targets.push({ target: e2, callback: t });
  }
  removeTarget(e2) {
    this._observer.unobserve(e2), N(this._targets, (t) => t.target !== e2);
  }
};
var je = class _je {
  constructor() {
    Object.defineProperty(this, "_timer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "_targets", { enumerable: true, configurable: true, writable: true, value: [] });
  }
  addTarget(e2, i2) {
    if (null === this._timer) {
      let e3 = null;
      const i3 = () => {
        const r4 = Date.now();
        (null === e3 || r4 > e3 + _je.delay) && (e3 = r4, P(this._targets, (e4) => {
          let t = e4.target.getBoundingClientRect();
          t.width === e4.size.width && t.height === e4.size.height || (e4.size = t, e4.callback());
        })), 0 === this._targets.length ? this._timer = null : this._timer = requestAnimationFrame(i3);
      };
      this._timer = requestAnimationFrame(i3);
    }
    let r3 = { width: 0, height: 0, left: 0, right: 0, top: 0, bottom: 0, x: 0, y: 0 };
    this._targets.push({ target: e2, callback: i2, size: r3 });
  }
  removeTarget(e2) {
    N(this._targets, (t) => t.target !== e2), 0 === this._targets.length && null !== this._timer && (cancelAnimationFrame(this._timer), this._timer = null);
  }
};
Object.defineProperty(je, "delay", { enumerable: true, configurable: true, writable: true, value: 200 });
var Ee = null;
function Te2() {
  return null === Ee && (Ee = "undefined" != typeof ResizeObserver ? new Se2() : new je()), Ee;
}
var Be = class {
  constructor(t, i2) {
    Object.defineProperty(this, "_sensor", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_element", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_listener", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_disposed", { enumerable: true, configurable: true, writable: true, value: false }), this._sensor = Te2(), this._element = t, this._listener = q(i2), this._sensor.addTarget(t, i2);
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    this._disposed || (this._disposed = true, this._sensor.removeTarget(this._element), this._listener.dispose());
  }
  get sensor() {
    return this._sensor;
  }
};
var Ce = class extends He {
};
Object.defineProperty(Ce, "className", { enumerable: true, configurable: true, writable: true, value: "InterfaceColors" }), Object.defineProperty(Ce, "classNames", { enumerable: true, configurable: true, writable: true, value: He.classNames.concat([Ce.className]) });
var De = class extends He {
  _setDefaults() {
    this._setDefault("negativeBase", 0), this._setDefault("numberFormat", "#,###.#####"), this._setDefault("smallNumberThreshold", 1);
    const e2 = "_big_number_suffix_", t = "_small_number_suffix_", i2 = "_byte_suffix_";
    this._setDefault("bigNumberPrefixes", [{ number: 1e3, suffix: this._t(e2 + "3") }, { number: 1e6, suffix: this._t(e2 + "6") }, { number: 1e9, suffix: this._t(e2 + "9") }, { number: 1e12, suffix: this._t(e2 + "12") }, { number: 1e15, suffix: this._t(e2 + "15") }, { number: 1e18, suffix: this._t(e2 + "18") }, { number: 1e21, suffix: this._t(e2 + "21") }, { number: 1e24, suffix: this._t(e2 + "24") }]), this._setDefault("smallNumberPrefixes", [{ number: 1e-24, suffix: this._t(t + "24") }, { number: 1e-21, suffix: this._t(t + "21") }, { number: 1e-18, suffix: this._t(t + "18") }, { number: 1e-15, suffix: this._t(t + "15") }, { number: 1e-12, suffix: this._t(t + "12") }, { number: 1e-9, suffix: this._t(t + "9") }, { number: 1e-6, suffix: this._t(t + "6") }, { number: 1e-3, suffix: this._t(t + "3") }]), this._setDefault("bytePrefixes", [{ number: 1, suffix: this._t(i2 + "B") }, { number: 1024, suffix: this._t(i2 + "KB") }, { number: 1048576, suffix: this._t(i2 + "MB") }, { number: 1073741824, suffix: this._t(i2 + "GB") }, { number: 1099511627776, suffix: this._t(i2 + "TB") }, { number: 1125899906842624, suffix: this._t(i2 + "PB") }]), super._setDefaults();
  }
  _beforeChanged() {
    super._beforeChanged();
  }
  format(e2, t, i2) {
    let r3;
    (null == t || g(t) && "number" === t.toLowerCase()) && (t = this.get("numberFormat", ""));
    let h = Number(e2);
    if (m(t)) try {
      return this.get("intlLocales") ? new Intl.NumberFormat(this.get("intlLocales"), t).format(h) : new Intl.NumberFormat(void 0, t).format(h);
    } catch (u3) {
      return "Invalid";
    }
    else {
      t = wt(t);
      let e3, s2 = this.parseFormat(t, this._root.language);
      e3 = h > this.get("negativeBase") ? s2.positive : h < this.get("negativeBase") ? s2.negative : s2.zero, null == i2 || e3.mod || (e3 = W(e3), e3.decimals.active = 0 == h ? 0 : i2), r3 = e3.template.split(f).join(this.applyFormat(h, e3));
    }
    return true === this.get("forceLTR") && (r3 = "‎" + r3), r3;
  }
  parseFormat(e2, t) {
    const i2 = t.translateEmpty("_thousandSeparator"), r3 = t.translateEmpty("_decimalSeparator");
    let s2 = { positive: { thousands: { active: -1, passive: -1, interval: -1, separator: i2 }, decimals: { active: -1, passive: -1, separator: r3 }, template: "", source: "", parsed: false }, negative: { thousands: { active: -1, passive: -1, interval: -1, separator: i2 }, decimals: { active: -1, passive: -1, separator: r3 }, template: "", source: "", parsed: false }, zero: { thousands: { active: -1, passive: -1, interval: -1, separator: i2 }, decimals: { active: -1, passive: -1, separator: r3 }, template: "", source: "", parsed: false } }, a = (e2 = e2.replace("||", b)).split("|");
    return s2.positive.source = a[0], void 0 === a[2] ? s2.zero = s2.positive : s2.zero.source = a[2], void 0 === a[1] ? s2.negative = s2.positive : s2.negative.source = a[1], U(s2, (e3, t2) => {
      if (t2.parsed) return;
      let i3 = t2.source;
      "number" === i3.toLowerCase() && (i3 = this.get("numberFormat", "#,###.#####"));
      let r4 = ti.chunk(i3, true);
      for (let s3 = 0; s3 < r4.length; s3++) {
        let e4 = r4[s3];
        if (e4.text = e4.text.replace(b, "|"), "value" === e4.type) {
          let i4 = e4.text.match(/[#0.,]+[ ]?[abespABESP%!]?[abespABESP‰!]?/);
          if (i4) if (null === i4 || "" === i4[0]) t2.template += e4.text;
          else {
            let r5 = i4[0].match(/[abespABESP%‰!]{2}|[abespABESP%‰]{1}$/);
            r5 && (t2.mod = r5[0].toLowerCase(), t2.modSpacing = !!i4[0].match(/[ ]{1}[abespABESP%‰!]{1}$/));
            let s4 = i4[0].split(".");
            if ("" === s4[0]) ;
            else {
              t2.thousands.active = (s4[0].match(/0/g) || []).length, t2.thousands.passive = (s4[0].match(/\#/g) || []).length + t2.thousands.active;
              let e5 = s4[0].split(",");
              1 === e5.length || (t2.thousands.interval = (e5.pop() || "").length, 0 === t2.thousands.interval && (t2.thousands.interval = -1));
            }
            void 0 === s4[1] || (t2.decimals.active = (s4[1].match(/0/g) || []).length, t2.decimals.passive = (s4[1].match(/\#/g) || []).length + t2.decimals.active), t2.template += e4.text.split(i4[0]).join(f);
          }
        } else t2.template += e4.text;
      }
      t2.parsed = true;
    }), s2;
  }
  applyFormat(e2, t) {
    let i2 = e2 < 0;
    e2 = Math.abs(e2);
    let r3 = "", s2 = "", a = t.mod ? t.mod.split("") : [];
    if (-1 !== a.indexOf("b")) {
      let i3 = this.applyPrefix(e2, this.get("bytePrefixes"), -1 !== a.indexOf("!"));
      e2 = i3[0], r3 = i3[1], s2 = i3[2], t.modSpacing && (s2 = " " + s2);
    } else if (-1 !== a.indexOf("a")) {
      let i3 = this.applyPrefix(e2, e2 < this.get("smallNumberThreshold") ? this.get("smallNumberPrefixes") : this.get("bigNumberPrefixes"), -1 !== a.indexOf("!"));
      e2 = i3[0], r3 = i3[1], s2 = i3[2], t.modSpacing && (s2 = " " + s2);
    } else if (-1 !== a.indexOf("p")) {
      let t2 = Math.min(e2.toString().length + 2, 21);
      e2 = parseFloat(e2.toPrecision(t2)), r3 = this._root.language.translate("_percentPrefix"), s2 = this._root.language.translate("_percentSuffix"), "" == r3 && "" == s2 && (s2 = "%");
    } else if (-1 !== a.indexOf("%")) {
      let t2 = Math.min(e2.toString().length + 2, 21);
      e2 *= 100, e2 = parseFloat(e2.toPrecision(t2)), s2 = "%";
    } else if (-1 !== a.indexOf("‰")) {
      let t2 = Math.min(e2.toString().length + 3, 21);
      e2 *= 1e3, e2 = parseFloat(e2.toPrecision(t2)), s2 = "‰";
    }
    if (-1 !== a.indexOf("e")) {
      let i3;
      i3 = t.decimals.passive >= 0 ? e2.toExponential(t.decimals.passive).split("e") : e2.toExponential().split("e"), e2 = Number(i3[0]), s2 = "e" + i3[1], t.modSpacing && (s2 = " " + s2);
    } else if (0 === t.decimals.passive) e2 = Math.round(e2);
    else if (t.decimals.passive > 0) {
      const i3 = _t(e2);
      if (i3 > 0) {
        const r4 = Math.pow(10, t.decimals.passive);
        e2 = Math.round(parseFloat((e2 * r4).toFixed(i3))) / r4;
      }
    }
    let n2 = "", o = u(e2).split("."), l2 = o[0];
    if (l2.length < t.thousands.active && (l2 = Array(t.thousands.active - l2.length + 1).join("0") + l2), t.thousands.interval > 0) {
      let e3 = [], i3 = l2.split("").reverse().join("");
      for (let r4 = 0, s3 = l2.length; r4 <= s3; r4 += t.thousands.interval) {
        let s4 = i3.substr(r4, t.thousands.interval).split("").reverse().join("");
        "" !== s4 && e3.unshift(s4);
      }
      l2 = e3.join(t.thousands.separator);
    }
    n2 += l2, 1 === o.length && o.push("");
    let h = o[1];
    return h.length < t.decimals.active && (h += Array(t.decimals.active - h.length + 1).join("0")), "" !== h && (n2 += t.decimals.separator + h), "" === n2 && (n2 = "0"), 0 !== e2 && i2 && -1 === a.indexOf("s") && (n2 = "-" + n2), r3 && (n2 = r3 + n2), s2 && (n2 += s2), n2;
  }
  applyPrefix(e2, t, i2 = false) {
    let r3 = e2, s2 = "", a = "", n2 = false, o = 1;
    for (let l2 = 0, h = t.length; l2 < h; l2++) t[l2].number <= e2 && (0 === t[l2].number ? r3 = 0 : (r3 = e2 / t[l2].number, o = t[l2].number), s2 = t[l2].prefix, a = t[l2].suffix, n2 = true);
    return !n2 && i2 && t.length && 0 != e2 && (r3 = e2 / t[0].number, s2 = t[0].prefix, a = t[0].suffix, n2 = true), n2 && (r3 = parseFloat(r3.toPrecision(Math.min(o.toString().length + Math.floor(r3).toString().replace(/[^0-9]*/g, "").length, 21)))), [r3, s2, a];
  }
  escape(e2) {
    return e2.replace("||", b);
  }
  unescape(e2) {
    return e2.replace(b, "|");
  }
};
function Ae(e2, t) {
  let i2 = 0, r3 = 0, s2 = 1, a = 0, n2 = 0, o = 0, l2 = 0, h = 0;
  return e2.formatToParts(t).forEach((e3) => {
    switch (e3.type) {
      case "year":
        i2 = +e3.value;
        break;
      case "month":
        r3 = +e3.value - 1;
        break;
      case "day":
        s2 = +e3.value;
        break;
      case "hour":
        a = +e3.value;
        break;
      case "minute":
        n2 = +e3.value;
        break;
      case "second":
        o = +e3.value;
        break;
      case "fractionalSecond":
        l2 = +e3.value;
        break;
      case "weekday":
        switch (e3.value) {
          case "Sun":
            h = 0;
            break;
          case "Mon":
            h = 1;
            break;
          case "Tue":
            h = 2;
            break;
          case "Wed":
            h = 3;
            break;
          case "Thu":
            h = 4;
            break;
          case "Fri":
            h = 5;
            break;
          case "Sat":
            h = 6;
        }
    }
  }), 24 === a && (a = 0), { year: i2, month: r3, day: s2, hour: a, minute: n2, second: o, millisecond: l2, weekday: h };
}
function Le(e2, t) {
  const { year: i2, month: r3, day: s2, hour: a, minute: n2, second: o, millisecond: l2 } = Ae(e2, t);
  return Date.UTC(i2, r3, s2, a, n2, o, l2);
}
var ze = class {
  constructor(e2, t) {
    if (Object.defineProperty(this, "_utc", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_dtf", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: void 0 }), !t) throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    this.name = e2, this._utc = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: "UTC", year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", weekday: "short", fractionalSecondDigits: 3 }), this._dtf = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: e2, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", weekday: "short", fractionalSecondDigits: 3 });
  }
  static new(e2) {
    return new this(e2, true);
  }
  convertLocal(e2) {
    const t = this.offsetUTC(e2), i2 = e2.getTimezoneOffset(), r3 = new Date(e2);
    r3.setUTCMinutes(r3.getUTCMinutes() - (t - i2));
    const s2 = r3.getTimezoneOffset();
    return i2 != s2 && r3.setUTCMinutes(r3.getUTCMinutes() + s2 - i2), r3;
  }
  offsetUTC(e2) {
    return (Le(this._utc, e2) - Le(this._dtf, e2)) / 6e4;
  }
  parseDate(e2) {
    return Ae(this._dtf, e2);
  }
};
var Fe = class extends He {
  _setDefaults() {
    this._setDefault("capitalize", true), this._setDefault("dateFormat", "yyyy-MM-dd"), super._setDefaults();
  }
  _beforeChanged() {
    super._beforeChanged();
  }
  format(e2, t, i2 = false) {
    let r3;
    void 0 !== t && "" !== t || (t = this.get("dateFormat", "yyyy-MM-dd"));
    let s2 = e2;
    if (m(t)) try {
      const e3 = this.get("intlLocales");
      return e3 ? new Intl.DateTimeFormat(e3, t).format(s2) : new Intl.DateTimeFormat(void 0, t).format(s2);
    } catch (h) {
      return "Invalid";
    }
    let n2 = this.parseFormat(t);
    const o = this._root.timezone;
    let l2 = s2;
    return !o || this._root.utc || i2 || (s2 = o.convertLocal(s2)), _(s2.getTime()) ? (r3 = this.applyFormat(s2, n2, i2, l2), this.get("capitalize") && (r3 = r3.replace(/^.{1}/, r3.substr(0, 1).toUpperCase())), r3) : "Invalid date";
  }
  applyFormat(e2, t, i2 = false, r3) {
    let s2, a, n2, o, h, u3, c, d, b2 = t.template, f2 = e2.getTime();
    this._root.utc && !i2 ? (s2 = e2.getUTCFullYear(), a = e2.getUTCMonth(), n2 = e2.getUTCDay(), o = e2.getUTCDate(), h = e2.getUTCHours(), u3 = e2.getUTCMinutes(), c = e2.getUTCSeconds(), d = e2.getUTCMilliseconds()) : (s2 = e2.getFullYear(), a = e2.getMonth(), n2 = e2.getDay(), o = e2.getDate(), h = e2.getHours(), u3 = e2.getMinutes(), c = e2.getSeconds(), d = e2.getMilliseconds());
    for (let P2 = 0, O2 = t.parts.length; P2 < O2; P2++) {
      let i3 = "";
      switch (t.parts[P2]) {
        case "G":
          i3 = this._t(s2 < 0 ? "_era_bc" : "_era_ad");
          break;
        case "yyyy":
          i3 = Math.abs(s2).toString(), s2 < 0 && (i3 += this._t("_era_bc"));
          break;
        case "yyy":
        case "yy":
        case "y":
          i3 = Math.abs(s2).toString().substr(-t.parts[P2].length), s2 < 0 && (i3 += this._t("_era_bc"));
          break;
        case "YYYY":
        case "YYY":
        case "YY":
        case "Y":
          let l2 = Tt(e2, this._root.utc);
          i3 = "YYYY" == t.parts[P2] ? Math.abs(l2).toString() : Math.abs(l2).toString().substr(-t.parts[P2].length), l2 < 0 && (i3 += this._t("_era_bc"));
          break;
        case "u":
        case "F":
        case "g":
          break;
        case "q":
          i3 = "" + Math.ceil((e2.getMonth() + 1) / 3);
          break;
        case "MMMMM":
          i3 = this._t(this._getMonth(a)).substr(0, 1);
          break;
        case "MMMM":
          i3 = this._t(this._getMonth(a));
          break;
        case "MMM":
          i3 = this._t(this._getShortMonth(a));
          break;
        case "MM":
          i3 = mt(a + 1, 2, "0");
          break;
        case "M":
          i3 = (a + 1).toString();
          break;
        case "ww":
          i3 = mt(Ot(e2, this._root.utc), 2, "0");
          break;
        case "w":
          i3 = Ot(e2, this._root.utc).toString();
          break;
        case "W":
          i3 = St(e2, this._root.utc).toString();
          break;
        case "dd":
          i3 = mt(o, 2, "0");
          break;
        case "d":
          i3 = o.toString();
          break;
        case "DD":
        case "DDD":
          i3 = mt(kt(e2, this._root.utc).toString(), t.parts[P2].length, "0");
          break;
        case "D":
          i3 = kt(e2, this._root.utc).toString();
          break;
        case "t":
          i3 = this._root.language.translateFunc("_dateOrd").call(this, o);
          break;
        case "E":
          i3 = (n2 || 7).toString();
          break;
        case "EE":
          i3 = mt((n2 || 7).toString(), 2, "0");
          break;
        case "EEE":
        case "eee":
          i3 = this._t(this._getShortWeekday(n2));
          break;
        case "EEEE":
        case "eeee":
          i3 = this._t(this._getWeekday(n2));
          break;
        case "EEEEE":
        case "eeeee":
          i3 = this._t(this._getShortWeekday(n2)).substr(0, 1);
          break;
        case "e":
        case "ee":
          i3 = (n2 - (this._root.locale.firstDayOfWeek || 1) + 1).toString(), "ee" == t.parts[P2] && (i3 = mt(i3, 2, "0"));
          break;
        case "a":
          i3 = h >= 12 ? this._t("PM") : this._t("AM");
          break;
        case "aa":
          i3 = h >= 12 ? this._t("P.M.") : this._t("A.M.");
          break;
        case "aaa":
          i3 = h >= 12 ? this._t("P") : this._t("A");
          break;
        case "h":
          i3 = Et(h).toString();
          break;
        case "hh":
          i3 = mt(Et(h), 2, "0");
          break;
        case "H":
          i3 = h.toString();
          break;
        case "HH":
          i3 = mt(h, 2, "0");
          break;
        case "K":
          i3 = Et(h, 0).toString();
          break;
        case "KK":
          i3 = mt(Et(h, 0), 2, "0");
          break;
        case "k":
          i3 = (h + 1).toString();
          break;
        case "kk":
          i3 = mt(h + 1, 2, "0");
          break;
        case "m":
          i3 = u3.toString();
          break;
        case "mm":
          i3 = mt(u3, 2, "0");
          break;
        case "s":
          i3 = c.toString();
          break;
        case "ss":
          i3 = mt(c, 2, "0");
          break;
        case "S":
        case "SS":
        case "SSS":
          i3 = Math.round(d / 1e3 * Math.pow(10, t.parts[P2].length)).toString();
          break;
        case "x":
          i3 = f2.toString();
          break;
        case "n":
        case "nn":
        case "nnn":
          i3 = mt(d, t.parts[P2].length, "0");
          break;
        case "z":
          i3 = Ct(r3 || e2, false, false, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0).replace(/[+-]+[0-9]+$/, "");
          break;
        case "zz":
          i3 = Ct(r3 || e2, true, false, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0);
          break;
        case "zzz":
          i3 = Ct(r3 || e2, false, true, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0).replace(/[+-]+[0-9]+$/, "");
          break;
        case "zzzz":
          i3 = Ct(r3 || e2, true, true, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0);
          break;
        case "Z":
        case "ZZ":
          let b3 = this._root.utc ? "UTC" : this._root.timezone;
          b3 instanceof ze && (b3 = b3.name);
          const O3 = b3 ? Mt(b3, r3 || e2) : e2.getTimezoneOffset();
          let k2 = Math.abs(O3) / 60, M = Math.floor(k2), S2 = 60 * k2 - 60 * M;
          this._root.utc && (M = 0, S2 = 0), "Z" == t.parts[P2] ? (i3 = "GMT", i3 += O3 > 0 ? "-" : "+", i3 += mt(M, 2) + ":" + mt(S2, 2)) : (i3 = O3 > 0 ? "-" : "+", i3 += mt(M, 2) + mt(S2, 2));
          break;
        case "i":
          i3 = e2.toISOString();
          break;
        case "I":
          i3 = e2.toUTCString();
      }
      b2 = b2.replace(f, i3);
    }
    return b2;
  }
  parseFormat(e2) {
    let t = { template: "", parts: [] }, i2 = ti.chunk(e2, true);
    for (let r3 = 0; r3 < i2.length; r3++) {
      let e3 = i2[r3];
      if ("value" === e3.type) {
        if (e3.text.match(/^date$/i)) {
          let t2 = this.get("dateFormat", "yyyy-MM-dd");
          g(t2) || (t2 = "yyyy-MM-dd"), e3.text = t2;
        }
        let i3 = e3.text.match(/G|yyyy|yyy|yy|y|YYYY|YYY|YY|Y|u|q|MMMMM|MMMM|MMM|MM|M|ww|w|W|dd|d|DDD|DD|D|F|g|EEEEE|EEEE|EEE|EE|E|eeeee|eeee|eee|ee|e|aaa|aa|a|hh|h|HH|H|KK|K|kk|k|mm|m|ss|s|SSS|SS|S|A|zzzz|zzz|zz|z|ZZ|Z|t|x|nnn|nn|n|i|I/g);
        if (i3) for (let r4 = 0; r4 < i3.length; r4++) t.parts.push(i3[r4]), e3.text = e3.text.replace(i3[r4], f);
      }
      t.template += e3.text;
    }
    return t;
  }
  _months() {
    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  }
  _getMonth(e2) {
    return this._months()[e2];
  }
  _shortMonths() {
    return ["Jan", "Feb", "Mar", "Apr", "May(short)", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  }
  _getShortMonth(e2) {
    return this._shortMonths()[e2];
  }
  _weekdays() {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  }
  _getWeekday(e2) {
    return this._weekdays()[e2];
  }
  _shortWeekdays() {
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  }
  _getShortWeekday(e2) {
    return this._shortWeekdays()[e2];
  }
  parse(e2, t, i2) {
    if (void 0 === i2 && (i2 = this._root.utc), e2 instanceof Date) return e2;
    if (_(e2)) return new Date(e2);
    if ("x" == t) return new Date(parseInt(e2));
    let r3;
    g(e2) || (e2 = e2.toString());
    let a = "";
    t = (t = wt(t)).substr(0, e2.length);
    let o = this.parseFormat(t), l2 = { year: -1, year3: -1, year2: -1, year1: -1, month: -1, monthShort: -1, monthLong: -1, weekdayShort: -1, weekdayLong: -1, day: -1, yearDay: -1, week: -1, hourBase0: -1, hour12Base0: -1, hourBase1: -1, hour12Base1: -1, minute: -1, second: -1, millisecond: -1, millisecondDigits: -1, am: -1, zone: -1, timestamp: -1, iso: -1 }, h = { year: 1970, month: 0, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0, timestamp: null, offset: 0, utc: i2 }, u3 = 0, c = 0;
    for (let s2 = 0; s2 < o.parts.length; s2++) {
      switch (c = s2 + u3 + 1, o.parts[s2]) {
        case "yyyy":
        case "YYYY":
          a += "([0-9]{4})", l2.year = c;
          break;
        case "yyy":
        case "YYY":
          a += "([0-9]{3})", l2.year3 = c;
          break;
        case "yy":
        case "YY":
          a += "([0-9]{2})", l2.year2 = c;
          break;
        case "y":
        case "Y":
          a += "([0-9]{1})", l2.year1 = c;
          break;
        case "MMMM":
          a += "(" + this.getStringList(this._months()).join("|") + ")", l2.monthLong = c;
          break;
        case "MMM":
          a += "(" + this.getStringList(this._shortMonths()).join("|") + ")", l2.monthShort = c;
          break;
        case "MM":
        case "M":
          a += "([0-9]{2}|[0-9]{1})", l2.month = c;
          break;
        case "ww":
        case "w":
          a += "([0-9]{2}|[0-9]{1})", l2.week = c;
          break;
        case "dd":
        case "d":
          a += "([0-9]{2}|[0-9]{1})", l2.day = c;
          break;
        case "DDD":
        case "DD":
        case "D":
          a += "([0-9]{3}|[0-9]{2}|[0-9]{1})", l2.yearDay = c;
          break;
        case "dddd":
          a += "(" + this.getStringList(this._weekdays()).join("|") + ")", l2.weekdayLong = c;
          break;
        case "ddd":
          a += "(" + this.getStringList(this._shortWeekdays()).join("|") + ")", l2.weekdayShort = c;
          break;
        case "aaa":
        case "aa":
        case "a":
          a += "(" + this.getStringList(["AM", "PM", "A.M.", "P.M.", "A", "P"]).join("|") + ")", l2.am = c;
          break;
        case "hh":
        case "h":
          a += "([0-9]{2}|[0-9]{1})", l2.hour12Base1 = c;
          break;
        case "HH":
        case "H":
          a += "([0-9]{2}|[0-9]{1})", l2.hourBase0 = c;
          break;
        case "KK":
        case "K":
          a += "([0-9]{2}|[0-9]{1})", l2.hour12Base0 = c;
          break;
        case "kk":
        case "k":
          a += "([0-9]{2}|[0-9]{1})", l2.hourBase1 = c;
          break;
        case "mm":
        case "m":
          a += "([0-9]{2}|[0-9]{1})", l2.minute = c;
          break;
        case "ss":
        case "s":
          a += "([0-9]{2}|[0-9]{1})", l2.second = c;
          break;
        case "SSS":
        case "SS":
        case "S":
          a += "([0-9]{3}|[0-9]{2}|[0-9]{1})", l2.millisecond = c, l2.millisecondDigits = o.parts[s2].length;
          break;
        case "nnn":
        case "nn":
        case "n":
          a += "([0-9]{3}|[0-9]{2}|[0-9]{1})", l2.millisecond = c;
          break;
        case "x":
          a += "([0-9]{1,})", l2.timestamp = c;
          break;
        case "Z":
          a += "GMT([-+]+[0-9]{2}:[0-9]{2})", l2.zone = c;
          break;
        case "ZZ":
          a += "([\\-+]+[0-9]{2}[0-9]{2})", l2.zone = c;
          break;
        case "i":
          a += "([0-9]{4})-?([0-9]{2})-?([0-9]{2})T?([0-9]{2}):?([0-9]{2}):?([0-9]{2})\\.?([0-9]{0,3})([zZ]|[+\\-][0-9]{2}:?[0-9]{2}|$)", l2.iso = c, u3 += 7;
          break;
        case "G":
        case "YYYY":
        case "YYY":
        case "YY":
        case "Y":
        case "MMMMM":
        case "W":
        case "EEEEE":
        case "EEEE":
        case "EEE":
        case "EE":
        case "E":
        case "eeeee":
        case "eeee":
        case "eee":
        case "ee":
        case "e":
        case "zzzz":
        case "zzz":
        case "zz":
        case "z":
        case "t":
          u3--;
      }
      a += "[^0-9]*";
    }
    let d = new RegExp(a), b2 = e2.match(d);
    if (b2) {
      if (l2.year > -1 && (h.year = parseInt(b2[l2.year])), l2.year3 > -1) {
        let e3 = parseInt(b2[l2.year3]);
        e3 += 1e3, h.year = e3;
      }
      if (l2.year2 > -1) {
        let e3 = parseInt(b2[l2.year2]);
        e3 += e3 > 50 ? 1e3 : 2e3, h.year = e3;
      }
      if (l2.year1 > -1) {
        let e3 = parseInt(b2[l2.year1]);
        e3 = 10 * Math.floor((/* @__PURE__ */ new Date()).getFullYear() / 10) + e3, h.year = e3;
      }
      if (l2.monthLong > -1 && (h.month = this.resolveMonth(b2[l2.monthLong])), l2.monthShort > -1 && (h.month = this.resolveShortMonth(b2[l2.monthShort])), l2.month > -1 && (h.month = parseInt(b2[l2.month]) - 1), l2.week > -1 && -1 === l2.day && (h.month = 0, h.day = jt(parseInt(b2[l2.week]), h.year, 1, i2)), l2.day > -1 && (h.day = parseInt(b2[l2.day])), l2.yearDay > -1 && (h.month = 0, h.day = parseInt(b2[l2.yearDay])), l2.hourBase0 > -1 && (h.hour = parseInt(b2[l2.hourBase0])), l2.hourBase1 > -1 && (h.hour = parseInt(b2[l2.hourBase1]) - 1), l2.hour12Base0 > -1) {
        let e3 = parseInt(b2[l2.hour12Base0]);
        11 == e3 && (e3 = 0), l2.am > -1 && !this.isAm(b2[l2.am]) && (e3 += 12), h.hour = e3;
      }
      if (l2.hour12Base1 > -1) {
        let e3 = parseInt(b2[l2.hour12Base1]);
        12 == e3 && (e3 = 0), l2.am > -1 && !this.isAm(b2[l2.am]) && (e3 += 12), h.hour = e3;
      }
      if (l2.minute > -1 && (h.minute = parseInt(b2[l2.minute])), l2.second > -1 && (h.second = parseInt(b2[l2.second])), l2.millisecond > -1) {
        let e3 = parseInt(b2[l2.millisecond]);
        2 == l2.millisecondDigits ? e3 *= 10 : 1 == l2.millisecondDigits && (e3 *= 100), h.millisecond = e3;
      }
      if (l2.timestamp > -1) {
        h.timestamp = parseInt(b2[l2.timestamp]);
        const e3 = new Date(h.timestamp);
        h.year = e3.getUTCFullYear(), h.month = e3.getUTCMonth(), h.day = e3.getUTCDate(), h.hour = e3.getUTCHours(), h.minute = e3.getUTCMinutes(), h.second = e3.getUTCSeconds(), h.millisecond = e3.getUTCMilliseconds();
      }
      l2.zone > -1 && (h.offset = this.resolveTimezoneOffset(new Date(h.year, h.month, h.day), b2[l2.zone])), l2.iso > -1 && (h.year = l(b2[l2.iso + 0]), h.month = l(b2[l2.iso + 1]) - 1, h.day = l(b2[l2.iso + 2]), h.hour = l(b2[l2.iso + 3]), h.minute = l(b2[l2.iso + 4]), h.second = l(b2[l2.iso + 5]), h.millisecond = l(b2[l2.iso + 6]), "Z" == b2[l2.iso + 7] || "z" == b2[l2.iso + 7] ? h.utc = true : "" != b2[l2.iso + 7] && (h.offset = this.resolveTimezoneOffset(new Date(h.year, h.month, h.day), b2[l2.iso + 7]))), r3 = h.utc ? new Date(Date.UTC(h.year, h.month, h.day, h.hour, h.minute, h.second, h.millisecond)) : new Date(h.year, h.month, h.day, h.hour, h.minute + h.offset, h.second, h.millisecond);
    } else r3 = new Date(e2);
    return r3;
  }
  resolveTimezoneOffset(e2, t) {
    if (t.match(/([+\-]?)([0-9]{2}):?([0-9]{2})/)) {
      let i2 = t.match(/([+\-]?)([0-9]{2}):?([0-9]{2})/), r3 = i2[1], s2 = i2[2], a = i2[3], n2 = 60 * parseInt(s2) + parseInt(a);
      return "+" == r3 && (n2 *= -1), n2 - (e2 || /* @__PURE__ */ new Date()).getTimezoneOffset();
    }
    return 0;
  }
  resolveMonth(e2) {
    let t = this._months().indexOf(e2);
    return t > -1 || !this._root.language.isDefault() && (t = this._root.language.translateAll(this._months()).indexOf(e2), t > -1) ? t : 0;
  }
  resolveShortMonth(e2) {
    let t = this._shortMonths().indexOf(e2);
    return t > -1 ? t : (t = this._months().indexOf(e2), t > -1 || this._root.language && !this._root.language.isDefault() && (t = this._root.language.translateAll(this._shortMonths()).indexOf(e2), t > -1) ? t : 0);
  }
  isAm(e2) {
    return this.getStringList(["AM", "A.M.", "A"]).indexOf(e2.toUpperCase()) > -1;
  }
  getStringList(e2) {
    let t = [];
    for (let i2 = 0; i2 < e2.length; i2++) this._root.language ? t.push(Dt(this._t(e2[i2]))) : t.push(Dt(e2[i2]));
    return t;
  }
};
var He2 = class extends He {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_unitAliases", { enumerable: true, configurable: true, writable: true, value: { Y: "y", D: "d", H: "h", K: "h", k: "h", n: "S" } });
  }
  _setDefaults() {
    const e2 = "_duration_millisecond", t = "_duration_second", i2 = "_duration_minute", r3 = "_duration_hour", s2 = "_duration_day", a = "_duration_week", n2 = "_duration_month", o = "_duration_year", l2 = "_second", h = "_minute", u3 = "_hour", c = "_day", d = "_week", b2 = "_week", f2 = "_year";
    this._setDefault("negativeBase", 0), this._setDefault("baseUnit", "second"), this._setDefault("durationFormats", { millisecond: { millisecond: this._t(e2), second: this._t(e2 + l2), minute: this._t(e2 + h), hour: this._t(e2 + u3), day: this._t(e2 + c), week: this._t(e2 + d), month: this._t(e2 + b2), year: this._t(e2 + f2) }, second: { second: this._t(t), minute: this._t(t + h), hour: this._t(t + u3), day: this._t(t + c), week: this._t(t + d), month: this._t(t + b2), year: this._t(t + f2) }, minute: { minute: this._t(i2), hour: this._t(i2 + u3), day: this._t(i2 + c), week: this._t(i2 + d), month: this._t(i2 + b2), year: this._t(i2 + f2) }, hour: { hour: this._t(r3), day: this._t(r3 + c), week: this._t(r3 + d), month: this._t(r3 + b2), year: this._t(r3 + f2) }, day: { day: this._t(s2), week: this._t(s2 + d), month: this._t(s2 + b2), year: this._t(s2 + f2) }, week: { week: this._t(a), month: this._t(a + b2), year: this._t(a + f2) }, month: { month: this._t(n2), year: this._t(n2 + f2) }, year: { year: this._t(o) } }), super._setDefaults();
  }
  _beforeChanged() {
    super._beforeChanged();
  }
  format(e2, t, i2) {
    let r3 = i2 || this.get("baseUnit");
    void 0 !== t && "" !== t || (t = null != this.get("durationFormat") ? this.get("durationFormat") : this.getFormat(l(e2), void 0, r3)), t = wt(t);
    let s2, a = this.parseFormat(t, r3), o = Number(e2);
    s2 = o > this.get("negativeBase") ? a.positive : o < this.get("negativeBase") ? a.negative : a.zero;
    let l2 = this.applyFormat(o, s2);
    return "" !== s2.color && (l2 = "[" + s2.color + "]" + l2 + "[/]"), l2;
  }
  parseFormat(e2, t) {
    let i2 = t || this.get("baseUnit"), r3 = { positive: { color: "", template: "", parts: [], source: "", baseUnit: i2, parsed: false, absolute: false }, negative: { color: "", template: "", parts: [], source: "", baseUnit: i2, parsed: false, absolute: false }, zero: { color: "", template: "", parts: [], source: "", baseUnit: i2, parsed: false, absolute: false } }, s2 = (e2 = e2.replace("||", b)).split("|");
    return r3.positive.source = s2[0], void 0 === s2[2] ? r3.zero = r3.positive : r3.zero.source = s2[2], void 0 === s2[1] ? r3.negative = r3.positive : r3.negative.source = s2[1], U(r3, (e3, t2) => {
      if (t2.parsed) return;
      let i3 = t2.source, r4 = [];
      r4 = t2.source.match(/^\[([^\]]*)\]/), r4 && r4.length && "" !== r4[0] && (i3 = t2.source.substr(r4[0].length), t2.color = r4[1]);
      let s3 = ti.chunk(i3, true);
      for (let a = 0; a < s3.length; a++) {
        let e4 = s3[a];
        if (e4.text = e4.text.replace(b, "|"), "value" === e4.type) {
          e4.text.match(/[yYMdDwhHKkmsSn]+a/) && (t2.absolute = true, e4.text = e4.text.replace(/([yYMdDwhHKkmsSn]+)a/, "$1"));
          let i4 = e4.text.match(/y+|Y+|M+|d+|D+|w+|h+|H+|K+|k+|m+|s+|S+|n+/g);
          if (i4) for (let r5 = 0; r5 < i4.length; r5++) null == i4[r5] && (i4[r5] = this._unitAliases[i4[r5]]), t2.parts.push(i4[r5]), e4.text = e4.text.replace(i4[r5], f);
        }
        t2.template += e4.text;
      }
      t2.parsed = true;
    }), r3;
  }
  applyFormat(e2, t) {
    let i2 = !t.absolute && e2 < this.get("negativeBase");
    e2 = Math.abs(e2);
    let r3 = this.toTimeStamp(e2, t.baseUnit), s2 = t.template;
    for (let a = 0, n2 = t.parts.length; a < n2; a++) {
      let e3, i3 = t.parts[a], o = this._toTimeUnit(i3.substr(0, 1)), h = i3.length;
      const u3 = this._getUnitValue(o);
      e3 = a < n2 - 1 ? Math.floor(r3 / u3) : Math.round(r3 / u3), s2 = s2.replace(f, mt(e3, h, "0")), r3 -= e3 * u3;
    }
    return i2 && (s2 = "-" + s2), s2;
  }
  toTimeStamp(e2, t) {
    return e2 * this._getUnitValue(t);
  }
  _toTimeUnit(e2) {
    switch (e2) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
        return "hour";
      case "d":
        return "day";
      case "w":
        return "week";
      case "M":
        return "month";
      case "y":
        return "year";
    }
  }
  getFormat(e2, t, i2) {
    if (null != this.get("durationFormat")) return this.get("durationFormat");
    if (i2 || (i2 = this.get("baseUnit")), null != t && e2 != t) {
      e2 = Math.abs(e2), t = Math.abs(t);
      let r3 = this.getValueUnit(Math.max(e2, t), i2);
      return this.get("durationFormats")[i2][r3];
    }
    {
      let t2 = this.getValueUnit(e2, i2);
      return this.get("durationFormats")[i2][t2];
    }
  }
  getValueUnit(e2, t) {
    let i2;
    t || (t = this.get("baseUnit"));
    let r3 = this.getMilliseconds(e2, t);
    return V(this._getUnitValues(), (e3, s2) => {
      if (e3 == t || i2) {
        if (r3 / s2 <= 1) return i2 || (i2 = e3), false;
        i2 = e3;
      }
      return true;
    }), i2;
  }
  getMilliseconds(e2, t) {
    return t || (t = this.get("baseUnit")), e2 * this._getUnitValue(t);
  }
  _getUnitValue(e2) {
    return this._getUnitValues()[e2];
  }
  _getUnitValues() {
    return { millisecond: 1, second: 1e3, minute: 6e4, hour: 36e5, day: 864e5, week: 6048e5, month: 2592e6, year: 31536e6 };
  }
};
var Ye2 = { firstDayOfWeek: 1, _decimalSeparator: ".", _thousandSeparator: ",", _percentPrefix: null, _percentSuffix: "%", _big_number_suffix_3: "k", _big_number_suffix_6: "M", _big_number_suffix_9: "G", _big_number_suffix_12: "T", _big_number_suffix_15: "P", _big_number_suffix_18: "E", _big_number_suffix_21: "Z", _big_number_suffix_24: "Y", _small_number_suffix_3: "m", _small_number_suffix_6: "μ", _small_number_suffix_9: "n", _small_number_suffix_12: "p", _small_number_suffix_15: "f", _small_number_suffix_18: "a", _small_number_suffix_21: "z", _small_number_suffix_24: "y", _byte_suffix_B: "B", _byte_suffix_KB: "KB", _byte_suffix_MB: "MB", _byte_suffix_GB: "GB", _byte_suffix_TB: "TB", _byte_suffix_PB: "PB", _date: "yyyy-MM-dd", _date_millisecond: "mm:ss SSS", _date_millisecond_full: "HH:mm:ss SSS", _date_second: "HH:mm:ss", _date_second_full: "HH:mm:ss", _date_minute: "HH:mm", _date_minute_full: "HH:mm - MMM dd, yyyy", _date_hour: "HH:mm", _date_hour_full: "HH:mm - MMM dd, yyyy", _date_day: "MMM dd", _date_day_full: "MMM dd, yyyy", _date_week: "ww", _date_week_full: "MMM dd, yyyy", _date_month: "MMM", _date_month_full: "MMM, yyyy", _date_year: "yyyy", _duration_millisecond: "SSS", _duration_millisecond_second: "ss.SSS", _duration_millisecond_minute: "mm:ss SSS", _duration_millisecond_hour: "hh:mm:ss SSS", _duration_millisecond_day: "d'd' mm:ss SSS", _duration_millisecond_week: "d'd' mm:ss SSS", _duration_millisecond_month: "M'm' dd'd' mm:ss SSS", _duration_millisecond_year: "y'y' MM'm' dd'd' mm:ss SSS", _duration_second: "ss", _duration_second_minute: "mm:ss", _duration_second_hour: "hh:mm:ss", _duration_second_day: "d'd' hh:mm:ss", _duration_second_week: "d'd' hh:mm:ss", _duration_second_month: "M'm' dd'd' hh:mm:ss", _duration_second_year: "y'y' MM'm' dd'd' hh:mm:ss", _duration_minute: "mm", _duration_minute_hour: "hh:mm", _duration_minute_day: "d'd' hh:mm", _duration_minute_week: "d'd' hh:mm", _duration_minute_month: "M'm' dd'd' hh:mm", _duration_minute_year: "y'y' MM'm' dd'd' hh:mm", _duration_hour: "hh'h'", _duration_hour_day: "d'd' hh'h'", _duration_hour_week: "d'd' hh'h'", _duration_hour_month: "M'm' dd'd' hh'h'", _duration_hour_year: "y'y' MM'm' dd'd' hh'h'", _duration_day: "d'd'", _duration_day_week: "d'd'", _duration_day_month: "M'm' dd'd'", _duration_day_year: "y'y' MM'm' dd'd'", _duration_week: "w'w'", _duration_week_month: "w'w'", _duration_week_year: "w'w'", _duration_month: "M'm'", _duration_month_year: "y'y' MM'm'", _duration_year: "y'y'", _era_ad: "AD", _era_bc: "BC", A: "", P: "", AM: "", PM: "", "A.M.": "", "P.M.": "", January: "", February: "", March: "", April: "", May: "", June: "", July: "", August: "", September: "", October: "", November: "", December: "", Jan: "", Feb: "", Mar: "", Apr: "", "May(short)": "May", Jun: "", Jul: "", Aug: "", Sep: "", Oct: "", Nov: "", Dec: "", Sunday: "", Monday: "", Tuesday: "", Wednesday: "", Thursday: "", Friday: "", Saturday: "", Sun: "", Mon: "", Tue: "", Wed: "", Thu: "", Fri: "", Sat: "", _dateOrd: function(e2) {
  let t = "th";
  if (e2 < 11 || e2 > 13) switch (e2 % 10) {
    case 1:
      t = "st";
      break;
    case 2:
      t = "nd";
      break;
    case 3:
      t = "rd";
  }
  return t;
}, "Zoom Out": "", Play: "", Stop: "", Legend: "", "Press ENTER to toggle": "", Loading: "", Home: "", Chart: "", "Serial chart": "", "X/Y chart": "", "Pie chart": "", "Gauge chart": "", "Radar chart": "", "Sankey diagram": "", "Flow diagram": "", "Chord diagram": "", "TreeMap chart": "", "Force directed tree": "", "Sliced chart": "", Series: "", "Candlestick Series": "", "OHLC Series": "", "Column Series": "", "Line Series": "", "Pie Slice Series": "", "Funnel Series": "", "Pyramid Series": "", "X/Y Series": "", Map: "", "Press ENTER to zoom in": "", "Press ENTER to zoom out": "", "Use arrow keys to zoom in and out": "", "Use plus and minus keys on your keyboard to zoom in and out": "", Export: "", Image: "", Data: "", Print: "", "Press ENTER or use arrow keys to navigate": "", "Press ENTER to open": "", "Press ENTER to print.": "", "Press ENTER to export as %1.": "", "(Press ESC to close this message)": "", "Image Export Complete": "", "Export operation took longer than expected. Something might have gone wrong.": "", "Saved from": "", PNG: "", JPG: "", GIF: "", SVG: "", PDF: "", JSON: "", CSV: "", XLSX: "", HTML: "", "Use TAB to select grip buttons or left and right arrows to change selection": "", "Use left and right arrows to move selection": "", "Use left and right arrows to move left selection": "", "Use left and right arrows to move right selection": "", "Use TAB select grip buttons or up and down arrows to change selection": "", "Use up and down arrows to move selection": "", "Use up and down arrows to move lower selection": "", "Use up and down arrows to move upper selection": "", "From %1 to %2": "", "From %1": "", "To %1": "", "No parser available for file: %1": "", "Error parsing file: %1": "", "Unable to load file: %1": "", "Invalid date": "", Close: "", Minimize: "" };
var Ie = class extends He {
  _setDefaults() {
    this.setPrivate("defaultLocale", Ye2), super._setDefaults();
  }
  translate(e2, t, ...i2) {
    t || (t = this._root.locale || this.getPrivate("defaultLocale"));
    let r3 = e2, s2 = t[e2];
    if (null === s2) r3 = "";
    else if (null != s2) s2 && (r3 = s2);
    else if (t !== this.getPrivate("defaultLocale")) return this.translate(e2, this.getPrivate("defaultLocale"), ...i2);
    if (i2.length) for (let a = i2.length, n2 = 0; n2 < a; ++n2) r3 = r3.split("%" + (n2 + 1)).join(i2[n2]);
    return r3;
  }
  translateAny(e2, t, ...i2) {
    return this.translate(e2, t, ...i2);
  }
  setTranslationAny(e2, t, i2) {
    (i2 || this._root.locale)[e2] = t;
  }
  setTranslationsAny(e2, t) {
    U(e2, (e3, i2) => {
      this.setTranslationAny(e3, i2, t);
    });
  }
  translateEmpty(e2, t, ...i2) {
    let r3 = this.translate(e2, t, ...i2);
    return r3 == e2 ? "" : r3;
  }
  translateFunc(e2, t) {
    return this._root.locale[e2] ? this._root.locale[e2] : t !== this.getPrivate("defaultLocale") ? this.translateFunc(e2, this.getPrivate("defaultLocale")) : () => "";
  }
  translateAll(e2, t) {
    return this.isDefault() ? e2 : w(e2, (e3) => this.translate(e3, t));
  }
  isDefault() {
    return this.getPrivate("defaultLocale") === this._root.locale;
  }
};
var Re = class {
  constructor(e2 = 1, t = 0, i2 = 0, r3 = 1, s2 = 0, a = 0) {
    Object.defineProperty(this, "a", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "b", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "c", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "d", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "tx", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "ty", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.a = e2, this.b = t, this.c = i2, this.d = r3, this.tx = s2, this.ty = a;
  }
  setTransform(e2, t, i2, r3, s2, a = 1) {
    this.a = Math.cos(s2) * a, this.b = Math.sin(s2) * a, this.c = -Math.sin(s2) * a, this.d = Math.cos(s2) * a, this.tx = e2 - (i2 * this.a + r3 * this.c), this.ty = t - (i2 * this.b + r3 * this.d);
  }
  apply(e2) {
    return { x: this.a * e2.x + this.c * e2.y + this.tx, y: this.b * e2.x + this.d * e2.y + this.ty };
  }
  applyInverse(e2) {
    const t = 1 / (this.a * this.d + this.c * -this.b);
    return { x: this.d * t * e2.x + -this.c * t * e2.y + (this.ty * this.c - this.tx * this.d) * t, y: this.a * t * e2.y + -this.b * t * e2.x + (-this.ty * this.a + this.tx * this.b) * t };
  }
  append(e2) {
    const t = this.a, i2 = this.b, r3 = this.c, s2 = this.d;
    this.a = e2.a * t + e2.b * r3, this.b = e2.a * i2 + e2.b * s2, this.c = e2.c * t + e2.d * r3, this.d = e2.c * i2 + e2.d * s2, this.tx = e2.tx * t + e2.ty * r3 + this.tx, this.ty = e2.tx * i2 + e2.ty * s2 + this.ty;
  }
  prepend(e2) {
    const t = this.tx;
    if (1 !== e2.a || 0 !== e2.b || 0 !== e2.c || 1 !== e2.d) {
      const t2 = this.a, i2 = this.c;
      this.a = t2 * e2.a + this.b * e2.c, this.b = t2 * e2.b + this.b * e2.d, this.c = i2 * e2.a + this.d * e2.c, this.d = i2 * e2.b + this.d * e2.d;
    }
    this.tx = t * e2.a + this.ty * e2.c + e2.tx, this.ty = t * e2.b + this.ty * e2.d + e2.ty;
  }
  copyFrom(e2) {
    this.a = e2.a, this.b = e2.b, this.c = e2.c, this.d = e2.d, this.tx = e2.tx, this.ty = e2.ty;
  }
};
var Ue = /* @__PURE__ */ function() {
  function e2(e3, t) {
    var i2 = [], r3 = true, s2 = false, a = void 0;
    try {
      for (var n2, o = e3[Symbol.iterator](); !(r3 = (n2 = o.next()).done) && (i2.push(n2.value), !t || i2.length !== t); r3 = true) ;
    } catch (l2) {
      s2 = true, a = l2;
    } finally {
      try {
        !r3 && o.return && o.return();
      } finally {
        if (s2) throw a;
      }
    }
    return i2;
  }
  return function(t, i2) {
    if (Array.isArray(t)) return t;
    if (Symbol.iterator in Object(t)) return e2(t, i2);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
}();
var We = 2 * Math.PI;
var Ve = function(e2, t, i2, r3, s2, a, n2) {
  var o = e2.x, l2 = e2.y;
  return { x: r3 * (o *= t) - s2 * (l2 *= i2) + a, y: s2 * o + r3 * l2 + n2 };
};
var Ge2 = function(e2, t) {
  var i2 = 1.5707963267948966 === t ? 0.551915024494 : -1.5707963267948966 === t ? -0.551915024494 : 4 / 3 * Math.tan(t / 4), r3 = Math.cos(e2), s2 = Math.sin(e2), a = Math.cos(e2 + t), n2 = Math.sin(e2 + t);
  return [{ x: r3 - s2 * i2, y: s2 + r3 * i2 }, { x: a + n2 * i2, y: n2 - a * i2 }, { x: a, y: n2 }];
};
var Ne = function(e2, t, i2, r3) {
  var s2 = e2 * i2 + t * r3;
  return s2 > 1 && (s2 = 1), s2 < -1 && (s2 = -1), (e2 * r3 - t * i2 < 0 ? -1 : 1) * Math.acos(s2);
};
var Xe2 = function(e2, t, i2, r3, s2, a, n2, o, l2, h, u3, c) {
  var d = Math.pow(s2, 2), b2 = Math.pow(a, 2), f2 = Math.pow(u3, 2), g2 = Math.pow(c, 2), p = d * b2 - d * g2 - b2 * f2;
  p < 0 && (p = 0), p /= d * g2 + b2 * f2;
  var m2 = (p = Math.sqrt(p) * (n2 === o ? -1 : 1)) * s2 / a * c, _2 = p * -a / s2 * u3, y = h * m2 - l2 * _2 + (e2 + i2) / 2, v2 = l2 * m2 + h * _2 + (t + r3) / 2, w2 = (u3 - m2) / s2, x2 = (c - _2) / a, P2 = (-u3 - m2) / s2, O2 = (-c - _2) / a, k2 = Ne(1, 0, w2, x2), M = Ne(w2, x2, P2, O2);
  return 0 === o && M > 0 && (M -= We), 1 === o && M < 0 && (M += We), [y, v2, k2, M];
};
var qe2 = function(e2) {
  var t = e2.px, i2 = e2.py, r3 = e2.cx, s2 = e2.cy, a = e2.rx, n2 = e2.ry, o = e2.xAxisRotation, l2 = void 0 === o ? 0 : o, h = e2.largeArcFlag, u3 = void 0 === h ? 0 : h, c = e2.sweepFlag, d = void 0 === c ? 0 : c, b2 = [];
  if (0 === a || 0 === n2) return [];
  var f2 = Math.sin(l2 * We / 360), g2 = Math.cos(l2 * We / 360), p = g2 * (t - r3) / 2 + f2 * (i2 - s2) / 2, m2 = -f2 * (t - r3) / 2 + g2 * (i2 - s2) / 2;
  if (0 === p && 0 === m2) return [];
  a = Math.abs(a), n2 = Math.abs(n2);
  var _2 = Math.pow(p, 2) / Math.pow(a, 2) + Math.pow(m2, 2) / Math.pow(n2, 2);
  _2 > 1 && (a *= Math.sqrt(_2), n2 *= Math.sqrt(_2));
  var y = Xe2(t, i2, r3, s2, a, n2, u3, d, f2, g2, p, m2), v2 = Ue(y, 4), w2 = v2[0], x2 = v2[1], P2 = v2[2], O2 = v2[3], k2 = Math.abs(O2) / (We / 4);
  Math.abs(1 - k2) < 1e-7 && (k2 = 1);
  var M = Math.max(Math.ceil(k2), 1);
  O2 /= M;
  for (var S2 = 0; S2 < M; S2++) b2.push(Ge2(P2, O2)), P2 += O2;
  return b2.map(function(e3) {
    var t2 = Ve(e3[0], a, n2, g2, f2, w2, x2), i3 = t2.x, r4 = t2.y, s3 = Ve(e3[1], a, n2, g2, f2, w2, x2), o2 = s3.x, l3 = s3.y, h2 = Ve(e3[2], a, n2, g2, f2, w2, x2);
    return { x1: i3, y1: r4, x2: o2, y2: l3, x: h2.x, y: h2.y };
  });
};
function Ke(e2, t, i2) {
  if (t !== i2) throw new Error("Required " + i2 + " arguments for " + e2 + " but got " + t);
}
function Ze(e2, t, i2) {
  if (t < i2) throw new Error("Required at least " + i2 + " arguments for " + e2 + " but got " + t);
}
function Je2(e2, t, i2) {
  if (Ze(e2, t, i2), t % i2 != 0) throw new Error("Arguments for " + e2 + " must be in pairs of " + i2);
}
function $e(e2) {
  for (let t = 0; t < e2.length; t += 7) {
    let i2 = t + 3, r3 = e2[i2];
    if (r3.length > 1) {
      const t2 = /^([01])([01])(.*)$/.exec(r3);
      null !== t2 && (e2.splice(i2, 0, t2[1]), ++i2, e2.splice(i2, 0, t2[2]), ++i2, t2[3].length > 0 ? e2[i2] = t2[3] : e2.splice(i2, 1));
    }
    if (++i2, r3 = e2[i2], r3.length > 1) {
      const t2 = /^([01])(.+)$/.exec(r3);
      null !== t2 && (e2.splice(i2, 0, t2[1]), ++i2, e2[i2] = t2[2]);
    }
  }
}
function Qe2(e2) {
  if (0 === e2 || 1 === e2) return e2;
  throw new Error("Flag must be 0 or 1");
}
function et2(e2) {
  const t = [0, 0, 0];
  for (let i2 = 0; i2 < 24; i2++) t[i2 % 3] <<= 1, t[i2 % 3] |= 1 & e2, e2 >>= 1;
  return (0 | t[0]) + (t[1] << 8) + (t[2] << 16);
}
function tt(e2, t) {
  for (; (!e2.interactive || t(e2)) && e2._parent; ) e2 = e2._parent;
}
function it2(e2, t, i2) {
  return J(e2, st(t), (e3) => {
    const t2 = ot(e3);
    let r3 = e3.touches;
    r3 ? (0 == r3.length && (r3 = e3.changedTouches), i2(j(r3), t2)) : i2([e3], t2);
  });
}
function rt(e2) {
  const t = document.createElement("canvas");
  t.width = 1, t.height = 1;
  const i2 = t.getContext("2d", { willReadFrequently: true });
  i2.drawImage(e2, 0, 0, 1, 1);
  try {
    return i2.getImageData(0, 0, 1, 1), false;
  } catch (r3) {
    return console.warn('Image "' + e2.src + '" is loaded from different host and is not covered by CORS policy. For more information about the implications read here: https://www.amcharts.com/docs/v5/concepts/cors'), true;
  }
}
function st2(e2) {
  e2.width = 0, e2.height = 0, e2.style.width = "0px", e2.style.height = "0px";
}
function at2(e2) {
  return Math.floor(e2) + 0.5;
}
var nt2 = class {
  constructor() {
    Object.defineProperty(this, "_x", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_y", { enumerable: true, configurable: true, writable: true, value: 0 });
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  set x(e2) {
    this._x = e2;
  }
  set y(e2) {
    this._y = e2;
  }
};
var ot2 = class extends G {
  constructor(e2) {
    super(), Object.defineProperty(this, "_layer", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "mask", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "visible", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "exportable", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "interactive", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "inactive", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "wheelable", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "cancelTouch", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "isMeasured", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "buttonMode", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "alpha", { enumerable: true, configurable: true, writable: true, value: 1 }), Object.defineProperty(this, "compoundAlpha", { enumerable: true, configurable: true, writable: true, value: 1 }), Object.defineProperty(this, "angle", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "scale", { enumerable: true, configurable: true, writable: true, value: 1 }), Object.defineProperty(this, "x", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "y", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "crisp", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "pivot", { enumerable: true, configurable: true, writable: true, value: new nt2() }), Object.defineProperty(this, "filter", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "cursorOverStyle", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_replacedCursorStyle", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_localMatrix", { enumerable: true, configurable: true, writable: true, value: new Re() }), Object.defineProperty(this, "_matrix", { enumerable: true, configurable: true, writable: true, value: new Re() }), Object.defineProperty(this, "_uMatrix", { enumerable: true, configurable: true, writable: true, value: new Re() }), Object.defineProperty(this, "_renderer", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_parent", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_localBounds", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_bounds", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_colorId", { enumerable: true, configurable: true, writable: true, value: void 0 }), this._renderer = e2;
  }
  subStatus(e2) {
    return { inactive: null == this.inactive ? e2.inactive : this.inactive, layer: this._layer || e2.layer };
  }
  _dispose() {
    this._renderer._removeObject(this), this.getLayer().dirty = true;
  }
  getCanvas() {
    return this.getLayer().view;
  }
  getLayer() {
    let e2 = this;
    for (; ; ) {
      if (e2._layer) return e2._layer;
      if (!e2._parent) return this._renderer.defaultLayer;
      e2 = e2._parent;
    }
  }
  setLayer(e2, t) {
    if (null == e2) this._layer = void 0;
    else {
      const i2 = true;
      this._layer = this._renderer.getLayer(e2, i2), this._layer.visible = i2, this._layer.margin = t, t && dt(this._layer.view, false), this._renderer._ghostLayer.setMargin(this._renderer.layers), this._parent && this._parent.registerChildLayer(this._layer), this._layer.dirty = true, this._renderer.resizeLayer(this._layer), this._renderer.resizeGhost();
    }
  }
  markDirtyLayer() {
    this.getLayer().dirty = true;
  }
  clear() {
    this.invalidateBounds();
  }
  invalidateBounds() {
    this._localBounds = void 0;
  }
  _addBounds(e2) {
  }
  _getColorId() {
    return void 0 === this._colorId && (this._colorId = this._renderer.paintId(this)), this._colorId;
  }
  _isInteractive(e2) {
    return !e2.inactive && (this.interactive || this._renderer._forceInteractive > 0);
  }
  _isInteractiveMask(e2) {
    return this._isInteractive(e2);
  }
  contains(e2) {
    for (; ; ) {
      if (e2 === this) return true;
      if (!e2._parent) return false;
      e2 = e2._parent;
    }
  }
  toGlobal(e2) {
    return this._matrix.apply(e2);
  }
  toLocal(e2) {
    return this._matrix.applyInverse(e2);
  }
  getLocalMatrix() {
    return this._uMatrix.setTransform(0, 0, this.pivot.x, this.pivot.y, this.angle * Math.PI / 180, this.scale), this._uMatrix;
  }
  getLocalBounds() {
    if (!this._localBounds) {
      const e2 = 1e7;
      this._localBounds = { left: e2, top: e2, right: -1e7, bottom: -1e7 }, this._addBounds(this._localBounds);
    }
    return this._localBounds;
  }
  getAdjustedBounds(e2) {
    this._setMatrix();
    const t = this.getLocalMatrix(), i2 = t.apply({ x: e2.left, y: e2.top }), r3 = t.apply({ x: e2.right, y: e2.top }), s2 = t.apply({ x: e2.right, y: e2.bottom }), a = t.apply({ x: e2.left, y: e2.bottom });
    return { left: Math.min(i2.x, r3.x, s2.x, a.x), top: Math.min(i2.y, r3.y, s2.y, a.y), right: Math.max(i2.x, r3.x, s2.x, a.x), bottom: Math.max(i2.y, r3.y, s2.y, a.y) };
  }
  on(e2, t, i2) {
    return this.interactive ? this._renderer._addEvent(this, e2, t, i2) : new z(() => {
    });
  }
  _setMatrix() {
    this._localMatrix.setTransform(this.x, this.y, this.pivot.x, this.pivot.y, this.angle * Math.PI / 180, this.scale), this._matrix.copyFrom(this._localMatrix), this._parent && this._matrix.prepend(this._parent._matrix);
  }
  _transform(e2, t) {
    const i2 = this._matrix;
    let r3 = i2.tx * t, s2 = i2.ty * t;
    this.crisp && (r3 = at2(r3), s2 = at2(s2)), e2.setTransform(i2.a * t, i2.b * t, i2.c * t, i2.d * t, r3, s2);
  }
  _transformMargin(e2, t, i2) {
    const r3 = this._matrix;
    e2.setTransform(r3.a * t, r3.b * t, r3.c * t, r3.d * t, (r3.tx + i2.left) * t, (r3.ty + i2.top) * t);
  }
  _transformLayer(e2, t, i2) {
    i2.margin ? this._transformMargin(e2, i2.scale || t, i2.margin) : this._transform(e2, i2.scale || t);
  }
  render(e2) {
    if (this.visible && (false !== this.exportable || !this._renderer._omitTainted)) {
      this._setMatrix();
      const i2 = this.subStatus(e2), r3 = this._renderer.resolution, s2 = this._renderer.layers, a = this._renderer._ghostLayer, n2 = a.context, o = this.mask;
      o && o._setMatrix(), P(s2, (e3) => {
        if (e3) {
          const t = e3.context;
          t.save(), o && (o._transformLayer(t, r3, e3), o._runPath(t), t.clip()), t.globalAlpha = this.compoundAlpha * this.alpha, this._transformLayer(t, r3, e3), this.filter && (t.filter = this.filter);
        }
      }), n2.save(), o && this._isInteractiveMask(i2) && (o._transformMargin(n2, r3, a.margin), o._runPath(n2), n2.clip()), this._transformMargin(n2, r3, a.margin), this._render(i2), n2.restore(), P(s2, (e3) => {
        e3 && e3.context.restore();
      });
    }
  }
  _render(e2) {
    false === this.exportable && (e2.layer.tainted = true);
  }
  hovering() {
    return this._renderer._hovering.has(this);
  }
  dragging() {
    return this._renderer._dragging.some((e2) => e2.value === this);
  }
  shouldCancelTouch() {
    const e2 = this._renderer;
    return !(e2.tapToActivate && !e2._touchActive) && (!!this.cancelTouch || !!this._parent && this._parent.shouldCancelTouch());
  }
};
var lt = class extends ot2 {
  constructor() {
    super(...arguments), Object.defineProperty(this, "interactiveChildren", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "_childLayers", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_children", { enumerable: true, configurable: true, writable: true, value: [] });
  }
  _isInteractiveMask(e2) {
    return this.interactiveChildren || super._isInteractiveMask(e2);
  }
  addChild(e2) {
    e2._parent = this, this._children.push(e2), e2._layer && this.registerChildLayer(e2._layer);
  }
  addChildAt(e2, t) {
    e2._parent = this, this._children.splice(t, 0, e2), e2._layer && this.registerChildLayer(e2._layer);
  }
  removeChild(e2) {
    e2._parent = void 0, O(this._children, e2);
  }
  _render(e2) {
    super._render(e2);
    const i2 = this._renderer;
    this.interactive && this.interactiveChildren && ++i2._forceInteractive, P(this._children, (t) => {
      t.compoundAlpha = this.compoundAlpha * this.alpha, t.render(e2);
    }), this.interactive && this.interactiveChildren && --i2._forceInteractive;
  }
  registerChildLayer(e2) {
    this._childLayers || (this._childLayers = []), S(this._childLayers, e2), this._parent && this._parent.registerChildLayer(e2);
  }
  markDirtyLayer(e2 = false) {
    super.markDirtyLayer(), e2 && this._childLayers && P(this._childLayers, (e3) => e3.dirty = true);
  }
  _dispose() {
    super._dispose(), this._childLayers && P(this._childLayers, (e2) => {
      e2.dirty = true;
    });
  }
};
function ht(e2, t) {
  e2.left = Math.min(e2.left, t.x), e2.top = Math.min(e2.top, t.y), e2.right = Math.max(e2.right, t.x), e2.bottom = Math.max(e2.bottom, t.y);
}
var ut2 = class {
  colorize(e2, t) {
  }
  colorizeGhost(e2, t) {
    this.colorize(e2, t);
  }
  path(e2) {
  }
  pathGhost(e2) {
    this.path(e2);
  }
  addBounds(e2) {
  }
};
var ct2 = class extends ut2 {
  colorize(e2, t) {
    e2.beginPath();
  }
};
var dt2 = class extends ut2 {
  constructor(e2) {
    super(), Object.defineProperty(this, "color", { enumerable: true, configurable: true, writable: true, value: e2 });
  }
  colorize(e2, t) {
    e2.fillStyle = void 0 !== t ? t : this.color;
  }
};
var bt = class extends ut2 {
  constructor(e2) {
    super(), Object.defineProperty(this, "clearShadow", { enumerable: true, configurable: true, writable: true, value: e2 });
  }
  colorize(e2, t) {
    e2.fill(), this.clearShadow && (e2.shadowColor = "", e2.shadowBlur = 0, e2.shadowOffsetX = 0, e2.shadowOffsetY = 0);
  }
};
var ft = class extends ut2 {
  colorize(e2, t) {
    e2.stroke();
  }
};
var gt = class extends ut2 {
  constructor(e2, t, i2, r3) {
    super(), Object.defineProperty(this, "width", { enumerable: true, configurable: true, writable: true, value: e2 }), Object.defineProperty(this, "color", { enumerable: true, configurable: true, writable: true, value: t }), Object.defineProperty(this, "lineJoin", { enumerable: true, configurable: true, writable: true, value: i2 }), Object.defineProperty(this, "lineCap", { enumerable: true, configurable: true, writable: true, value: r3 });
  }
  colorize(e2, t) {
    e2.strokeStyle = void 0 !== t ? t : this.color, e2.lineWidth = this.width, this.lineJoin && (e2.lineJoin = this.lineJoin), this.lineCap && (e2.lineCap = this.lineCap);
  }
};
var pt = class extends ut2 {
  constructor(e2) {
    super(), Object.defineProperty(this, "dash", { enumerable: true, configurable: true, writable: true, value: e2 });
  }
  colorize(e2, t) {
    e2.setLineDash(this.dash);
  }
};
var mt2 = class extends ut2 {
  constructor(e2) {
    super(), Object.defineProperty(this, "dashOffset", { enumerable: true, configurable: true, writable: true, value: e2 });
  }
  colorize(e2, t) {
    e2.lineDashOffset = this.dashOffset;
  }
};
var _t2 = class extends ut2 {
  constructor(e2, t, i2, r3) {
    super(), Object.defineProperty(this, "x", { enumerable: true, configurable: true, writable: true, value: e2 }), Object.defineProperty(this, "y", { enumerable: true, configurable: true, writable: true, value: t }), Object.defineProperty(this, "width", { enumerable: true, configurable: true, writable: true, value: i2 }), Object.defineProperty(this, "height", { enumerable: true, configurable: true, writable: true, value: r3 });
  }
  path(e2) {
    e2.rect(this.x, this.y, this.width, this.height);
  }
  addBounds(e2) {
    const t = this.x, i2 = this.y, r3 = t + this.width, s2 = i2 + this.height;
    ht(e2, { x: t, y: i2 }), ht(e2, { x: r3, y: i2 }), ht(e2, { x: t, y: s2 }), ht(e2, { x: r3, y: s2 });
  }
};
var yt = class extends ut2 {
  constructor(e2, t, i2) {
    super(), Object.defineProperty(this, "x", { enumerable: true, configurable: true, writable: true, value: e2 }), Object.defineProperty(this, "y", { enumerable: true, configurable: true, writable: true, value: t }), Object.defineProperty(this, "radius", { enumerable: true, configurable: true, writable: true, value: i2 });
  }
  path(e2) {
    e2.moveTo(this.x + this.radius, this.y), e2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  }
  addBounds(e2) {
    ht(e2, { x: this.x - this.radius, y: this.y - this.radius }), ht(e2, { x: this.x + this.radius, y: this.y + this.radius });
  }
};
var vt2 = class extends ut2 {
  constructor(e2, t, i2, r3) {
    super(), Object.defineProperty(this, "x", { enumerable: true, configurable: true, writable: true, value: e2 }), Object.defineProperty(this, "y", { enumerable: true, configurable: true, writable: true, value: t }), Object.defineProperty(this, "radiusX", { enumerable: true, configurable: true, writable: true, value: i2 }), Object.defineProperty(this, "radiusY", { enumerable: true, configurable: true, writable: true, value: r3 });
  }
  path(e2) {
    e2.ellipse(0, 0, this.radiusX, this.radiusY, 0, 0, 2 * Math.PI);
  }
  addBounds(e2) {
    ht(e2, { x: this.x - this.radiusX, y: this.y - this.radiusY }), ht(e2, { x: this.x + this.radiusX, y: this.y + this.radiusY });
  }
};
var wt2 = class extends ut2 {
  constructor(e2, t, i2, r3, s2, a) {
    super(), Object.defineProperty(this, "cx", { enumerable: true, configurable: true, writable: true, value: e2 }), Object.defineProperty(this, "cy", { enumerable: true, configurable: true, writable: true, value: t }), Object.defineProperty(this, "radius", { enumerable: true, configurable: true, writable: true, value: i2 }), Object.defineProperty(this, "startAngle", { enumerable: true, configurable: true, writable: true, value: r3 }), Object.defineProperty(this, "endAngle", { enumerable: true, configurable: true, writable: true, value: s2 }), Object.defineProperty(this, "anticlockwise", { enumerable: true, configurable: true, writable: true, value: a });
  }
  path(e2) {
    this.radius > 0 && e2.arc(this.cx, this.cy, this.radius, this.startAngle, this.endAngle, this.anticlockwise);
  }
  addBounds(e2) {
    let t = me(this.cx, this.cy, this.startAngle * le, this.endAngle * le, this.radius);
    ht(e2, { x: t.left, y: t.top }), ht(e2, { x: t.right, y: t.bottom });
  }
};
var xt2 = class extends ut2 {
  constructor(e2, t, i2, r3, s2) {
    super(), Object.defineProperty(this, "x1", { enumerable: true, configurable: true, writable: true, value: e2 }), Object.defineProperty(this, "y1", { enumerable: true, configurable: true, writable: true, value: t }), Object.defineProperty(this, "x2", { enumerable: true, configurable: true, writable: true, value: i2 }), Object.defineProperty(this, "y2", { enumerable: true, configurable: true, writable: true, value: r3 }), Object.defineProperty(this, "radius", { enumerable: true, configurable: true, writable: true, value: s2 });
  }
  path(e2) {
    this.radius > 0 && e2.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius);
  }
  addBounds(e2) {
  }
};
var Pt2 = class extends ut2 {
  constructor(e2, t) {
    super(), Object.defineProperty(this, "x", { enumerable: true, configurable: true, writable: true, value: e2 }), Object.defineProperty(this, "y", { enumerable: true, configurable: true, writable: true, value: t });
  }
  path(e2) {
    e2.lineTo(this.x, this.y);
  }
  addBounds(e2) {
    ht(e2, { x: this.x, y: this.y });
  }
};
var Ot2 = class extends ut2 {
  constructor(e2, t) {
    super(), Object.defineProperty(this, "x", { enumerable: true, configurable: true, writable: true, value: e2 }), Object.defineProperty(this, "y", { enumerable: true, configurable: true, writable: true, value: t });
  }
  path(e2) {
    e2.moveTo(this.x, this.y);
  }
  addBounds(e2) {
    ht(e2, { x: this.x, y: this.y });
  }
};
var kt2 = class extends ut2 {
  path(e2) {
    e2.closePath();
  }
};
var Mt2 = class extends ut2 {
  constructor(e2, t, i2, r3, s2, a) {
    super(), Object.defineProperty(this, "cpX", { enumerable: true, configurable: true, writable: true, value: e2 }), Object.defineProperty(this, "cpY", { enumerable: true, configurable: true, writable: true, value: t }), Object.defineProperty(this, "cpX2", { enumerable: true, configurable: true, writable: true, value: i2 }), Object.defineProperty(this, "cpY2", { enumerable: true, configurable: true, writable: true, value: r3 }), Object.defineProperty(this, "toX", { enumerable: true, configurable: true, writable: true, value: s2 }), Object.defineProperty(this, "toY", { enumerable: true, configurable: true, writable: true, value: a });
  }
  path(e2) {
    e2.bezierCurveTo(this.cpX, this.cpY, this.cpX2, this.cpY2, this.toX, this.toY);
  }
  addBounds(e2) {
    ht(e2, { x: this.cpX, y: this.cpY }), ht(e2, { x: this.cpX2, y: this.cpY2 }), ht(e2, { x: this.toX, y: this.toY });
  }
};
var St2 = class extends ut2 {
  constructor(e2, t, i2, r3) {
    super(), Object.defineProperty(this, "cpX", { enumerable: true, configurable: true, writable: true, value: e2 }), Object.defineProperty(this, "cpY", { enumerable: true, configurable: true, writable: true, value: t }), Object.defineProperty(this, "toX", { enumerable: true, configurable: true, writable: true, value: i2 }), Object.defineProperty(this, "toY", { enumerable: true, configurable: true, writable: true, value: r3 });
  }
  path(e2) {
    e2.quadraticCurveTo(this.cpX, this.cpY, this.toX, this.toY);
  }
  addBounds(e2) {
    ht(e2, { x: this.cpX, y: this.cpY }), ht(e2, { x: this.toX, y: this.toY });
  }
};
var jt2 = class extends ut2 {
  constructor(e2, t, i2, r3, s2) {
    super(), Object.defineProperty(this, "color", { enumerable: true, configurable: true, writable: true, value: e2 }), Object.defineProperty(this, "blur", { enumerable: true, configurable: true, writable: true, value: t }), Object.defineProperty(this, "offsetX", { enumerable: true, configurable: true, writable: true, value: i2 }), Object.defineProperty(this, "offsetY", { enumerable: true, configurable: true, writable: true, value: r3 }), Object.defineProperty(this, "opacity", { enumerable: true, configurable: true, writable: true, value: s2 });
  }
  colorize(e2, t) {
    this.opacity && (e2.fillStyle = this.color), e2.shadowColor = this.color, e2.shadowBlur = this.blur, e2.shadowOffsetX = this.offsetX, e2.shadowOffsetY = this.offsetY;
  }
  colorizeGhost(e2, t) {
  }
};
var Et2 = class extends ut2 {
  constructor(e2, t, i2, r3, s2) {
    super(), Object.defineProperty(this, "image", { enumerable: true, configurable: true, writable: true, value: e2 }), Object.defineProperty(this, "width", { enumerable: true, configurable: true, writable: true, value: t }), Object.defineProperty(this, "height", { enumerable: true, configurable: true, writable: true, value: i2 }), Object.defineProperty(this, "x", { enumerable: true, configurable: true, writable: true, value: r3 }), Object.defineProperty(this, "y", { enumerable: true, configurable: true, writable: true, value: s2 });
  }
  path(e2) {
    e2.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  addBounds(e2) {
    ht(e2, { x: this.x, y: this.y }), ht(e2, { x: this.width, y: this.height });
  }
};
var Tt2 = class extends ot2 {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_operations", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "blendMode", { enumerable: true, configurable: true, writable: true, value: Ge.NORMAL }), Object.defineProperty(this, "_hasShadows", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_fillAlpha", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_strokeAlpha", { enumerable: true, configurable: true, writable: true, value: void 0 });
  }
  clear() {
    super.clear(), this._operations.length = 0;
  }
  _pushOp(e2) {
    this._operations.push(e2);
  }
  beginFill(e2, t = 1) {
    this._fillAlpha = t, e2 ? e2 instanceof Yt ? this._pushOp(new dt2(e2.toCSS(t))) : (this.isMeasured = true, this._pushOp(new dt2(e2))) : this._pushOp(new dt2("rgba(0, 0, 0, " + t + ")"));
  }
  endFill() {
    this._pushOp(new bt(this._hasShadows));
  }
  endStroke() {
    this._pushOp(new ft());
  }
  beginPath() {
    this._pushOp(new ct2());
  }
  lineStyle(e2 = 0, t, i2 = 1, r3, s2) {
    this._strokeAlpha = i2, t ? t instanceof Yt ? this._pushOp(new gt(e2, t.toCSS(i2), r3, s2)) : this._pushOp(new gt(e2, t, r3, s2)) : this._pushOp(new gt(e2, "rgba(0, 0, 0, " + i2 + ")", r3, s2));
  }
  setLineDash(e2) {
    this._pushOp(new pt(e2 || []));
  }
  setLineDashOffset(e2 = 0) {
    this._pushOp(new mt2(e2));
  }
  drawRect(e2, t, i2, r3) {
    this._pushOp(new _t2(e2, t, i2, r3));
  }
  drawCircle(e2, t, i2) {
    this._pushOp(new yt(e2, t, i2));
  }
  drawEllipse(e2, t, i2, r3) {
    this._pushOp(new vt2(e2, t, i2, r3));
  }
  arc(e2, t, i2, r3, s2, a = false) {
    this._pushOp(new wt2(e2, t, i2, r3, s2, a));
  }
  arcTo(e2, t, i2, r3, s2) {
    this._pushOp(new xt2(e2, t, i2, r3, s2));
  }
  lineTo(e2, t) {
    this._pushOp(new Pt2(e2, t));
  }
  moveTo(e2, t) {
    this._pushOp(new Ot2(e2, t));
  }
  bezierCurveTo(e2, t, i2, r3, s2, a) {
    this._pushOp(new Mt2(e2, t, i2, r3, s2, a));
  }
  quadraticCurveTo(e2, t, i2, r3) {
    this._pushOp(new St2(e2, t, i2, r3));
  }
  closePath() {
    this._pushOp(new kt2());
  }
  shadow(e2, t = 0, i2 = 0, r3 = 0, s2) {
    this._hasShadows = true, this._pushOp(new jt2(s2 ? e2.toCSS(s2) : e2.toCSS(this._fillAlpha || this._strokeAlpha), t, i2, r3));
  }
  image(e2, t, i2, r3, s2) {
    this._pushOp(new Et2(e2, t, i2, r3, s2));
  }
  svgPath(e2) {
    let i2 = 0, r3 = 0, s2 = null, a = null, n2 = null, o = null;
    const l2 = /([MmZzLlHhVvCcSsQqTtAa])([^MmZzLlHhVvCcSsQqTtAa]*)/g, h = /[\u0009\u0020\u000A\u000C\u000D]*([\+\-]?[0-9]*\.?[0-9]+(?:[eE][\+\-]?[0-9]+)?)[\u0009\u0020\u000A\u000C\u000D]*,?/g;
    let u3;
    for (; null !== (u3 = l2.exec(e2)); ) {
      const e3 = u3[1], l3 = u3[2], c = [];
      for (; null !== (u3 = h.exec(l3)); ) c.push(u3[1]);
      switch ("S" !== e3 && "s" !== e3 && "C" !== e3 && "c" !== e3 && (s2 = null, a = null), "Q" !== e3 && "q" !== e3 && "T" !== e3 && "t" !== e3 && (n2 = null, o = null), e3) {
        case "M":
          Je2(e3, c.length, 2), i2 = +c[0], r3 = +c[1], this.moveTo(i2, r3);
          for (let e4 = 2; e4 < c.length; e4 += 2) i2 = +c[e4], r3 = +c[e4 + 1], this.lineTo(i2, r3);
          break;
        case "m":
          Je2(e3, c.length, 2), i2 += +c[0], r3 += +c[1], this.moveTo(i2, r3);
          for (let e4 = 2; e4 < c.length; e4 += 2) i2 += +c[e4], r3 += +c[e4 + 1], this.lineTo(i2, r3);
          break;
        case "L":
          Je2(e3, c.length, 2);
          for (let e4 = 0; e4 < c.length; e4 += 2) i2 = +c[e4], r3 = +c[e4 + 1], this.lineTo(i2, r3);
          break;
        case "l":
          Je2(e3, c.length, 2);
          for (let e4 = 0; e4 < c.length; e4 += 2) i2 += +c[e4], r3 += +c[e4 + 1], this.lineTo(i2, r3);
          break;
        case "H":
          Ze(e3, c.length, 1);
          for (let e4 = 0; e4 < c.length; ++e4) i2 = +c[e4], this.lineTo(i2, r3);
          break;
        case "h":
          Ze(e3, c.length, 1);
          for (let e4 = 0; e4 < c.length; ++e4) i2 += +c[e4], this.lineTo(i2, r3);
          break;
        case "V":
          Ze(e3, c.length, 1);
          for (let e4 = 0; e4 < c.length; ++e4) r3 = +c[e4], this.lineTo(i2, r3);
          break;
        case "v":
          Ze(e3, c.length, 1);
          for (let e4 = 0; e4 < c.length; ++e4) r3 += +c[e4], this.lineTo(i2, r3);
          break;
        case "C":
          Je2(e3, c.length, 6);
          for (let e4 = 0; e4 < c.length; e4 += 6) {
            const t = +c[e4], n3 = +c[e4 + 1];
            s2 = +c[e4 + 2], a = +c[e4 + 3], i2 = +c[e4 + 4], r3 = +c[e4 + 5], this.bezierCurveTo(t, n3, s2, a, i2, r3);
          }
          break;
        case "c":
          Je2(e3, c.length, 6);
          for (let e4 = 0; e4 < c.length; e4 += 6) {
            const t = +c[e4] + i2, n3 = +c[e4 + 1] + r3;
            s2 = +c[e4 + 2] + i2, a = +c[e4 + 3] + r3, i2 += +c[e4 + 4], r3 += +c[e4 + 5], this.bezierCurveTo(t, n3, s2, a, i2, r3);
          }
          break;
        case "S":
          Je2(e3, c.length, 4), null !== s2 && null !== a || (s2 = i2, a = r3);
          for (let e4 = 0; e4 < c.length; e4 += 4) {
            const t = 2 * i2 - s2, n3 = 2 * r3 - a;
            s2 = +c[e4], a = +c[e4 + 1], i2 = +c[e4 + 2], r3 = +c[e4 + 3], this.bezierCurveTo(t, n3, s2, a, i2, r3);
          }
          break;
        case "s":
          Je2(e3, c.length, 4), null !== s2 && null !== a || (s2 = i2, a = r3);
          for (let e4 = 0; e4 < c.length; e4 += 4) {
            const t = 2 * i2 - s2, n3 = 2 * r3 - a;
            s2 = +c[e4] + i2, a = +c[e4 + 1] + r3, i2 += +c[e4 + 2], r3 += +c[e4 + 3], this.bezierCurveTo(t, n3, s2, a, i2, r3);
          }
          break;
        case "Q":
          Je2(e3, c.length, 4);
          for (let e4 = 0; e4 < c.length; e4 += 4) n2 = +c[e4], o = +c[e4 + 1], i2 = +c[e4 + 2], r3 = +c[e4 + 3], this.quadraticCurveTo(n2, o, i2, r3);
          break;
        case "q":
          Je2(e3, c.length, 4);
          for (let e4 = 0; e4 < c.length; e4 += 4) n2 = +c[e4] + i2, o = +c[e4 + 1] + r3, i2 += +c[e4 + 2], r3 += +c[e4 + 3], this.quadraticCurveTo(n2, o, i2, r3);
          break;
        case "T":
          Je2(e3, c.length, 2), null !== n2 && null !== o || (n2 = i2, o = r3);
          for (let e4 = 0; e4 < c.length; e4 += 2) n2 = 2 * i2 - n2, o = 2 * r3 - o, i2 = +c[e4], r3 = +c[e4 + 1], this.quadraticCurveTo(n2, o, i2, r3);
          break;
        case "t":
          Je2(e3, c.length, 2), null !== n2 && null !== o || (n2 = i2, o = r3);
          for (let e4 = 0; e4 < c.length; e4 += 2) n2 = 2 * i2 - n2, o = 2 * r3 - o, i2 += +c[e4], r3 += +c[e4 + 1], this.quadraticCurveTo(n2, o, i2, r3);
          break;
        case "A":
        case "a":
          const l4 = "a" === e3;
          $e(c), Je2(e3, c.length, 7);
          for (let e4 = 0; e4 < c.length; e4 += 7) {
            let s3 = +c[e4 + 5], a2 = +c[e4 + 6];
            l4 && (s3 += i2, a2 += r3);
            const n3 = qe2({ px: i2, py: r3, rx: +c[e4], ry: +c[e4 + 1], xAxisRotation: +c[e4 + 2], largeArcFlag: Qe2(+c[e4 + 3]), sweepFlag: Qe2(+c[e4 + 4]), cx: s3, cy: a2 });
            P(n3, (e5) => {
              this.bezierCurveTo(e5.x1, e5.y1, e5.x2, e5.y2, e5.x, e5.y), i2 = e5.x, r3 = e5.y;
            });
          }
          break;
        case "Z":
        case "z":
          Ke(e3, c.length, 0), this.closePath();
      }
    }
  }
  _runPath(e2) {
    e2.beginPath(), P(this._operations, (t) => {
      t.path(e2);
    });
  }
  _render(e2) {
    super._render(e2);
    const i2 = e2.layer.dirty, r3 = this._isInteractive(e2);
    if (i2 || r3) {
      const s2 = e2.layer.context, a = this._renderer._ghostLayer.context;
      let n2;
      i2 && (s2.globalCompositeOperation = this.blendMode, s2.beginPath()), r3 && (a.beginPath(), n2 = this._getColorId()), P(this._operations, (e3) => {
        i2 && (e3.path(s2), e3.colorize(s2, void 0)), r3 && (e3.pathGhost(a), e3.colorizeGhost(a, n2));
      });
    }
  }
  renderDetached(e2) {
    if (this.visible) {
      this._setMatrix(), e2.save();
      const i2 = this.mask;
      i2 && (i2._setMatrix(), i2._transform(e2, 1), i2._runPath(e2), e2.clip()), e2.globalAlpha = this.compoundAlpha * this.alpha, this._transform(e2, 1), this.filter && (e2.filter = this.filter), e2.globalCompositeOperation = this.blendMode, e2.beginPath(), P(this._operations, (t) => {
        t.path(e2), t.colorize(e2, void 0);
      }), e2.restore();
    }
  }
  _addBounds(e2) {
    this.visible && this.isMeasured && P(this._operations, (t) => {
      t.addBounds(e2);
    });
  }
};
var Bt = class extends ot2 {
  constructor(e2, t, i2) {
    super(e2), Object.defineProperty(this, "text", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "style", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "resolution", { enumerable: true, configurable: true, writable: true, value: 1 }), Object.defineProperty(this, "textVisible", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "truncated", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_textInfo", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_originalScale", { enumerable: true, configurable: true, writable: true, value: 1 }), this.text = t, this.style = i2;
  }
  invalidateBounds() {
    super.invalidateBounds(), this._textInfo = void 0;
  }
  _shared(e2) {
    this.style.textAlign && (e2.textAlign = this.style.textAlign), this.style.direction && (e2.direction = this.style.direction), this.style.textBaseline && (e2.textBaseline = this.style.textBaseline);
  }
  _prerender(e2, t = false, i2 = false) {
    super._render(e2);
    const r3 = e2.layer.context, s2 = this._renderer._ghostLayer.context, a = this.style;
    let n2 = this._getFontStyle(void 0, i2);
    r3.font = n2, this._isInteractive(e2) && !t && (s2.font = n2), a.fill && (a.fill instanceof Yt ? r3.fillStyle = a.fill.toCSS(null != a.fillOpacity ? a.fillOpacity : 1) : r3.fillStyle = a.fill), a.shadowColor && (e2.layer.context.shadowColor = a.shadowColor.toCSS(a.shadowOpacity || 1)), a.shadowBlur && (e2.layer.context.shadowBlur = a.shadowBlur), a.shadowOffsetX && (e2.layer.context.shadowOffsetX = a.shadowOffsetX), a.shadowOffsetY && (e2.layer.context.shadowOffsetY = a.shadowOffsetY), this._shared(r3), this._isInteractive(e2) && !t && (s2.fillStyle = this._getColorId(), this._shared(s2));
  }
  _getFontStyle(e2, t = false) {
    const i2 = this.style;
    let r3 = [];
    return e2 && e2.fontVariant ? r3.push(e2.fontVariant) : i2.fontVariant && r3.push(i2.fontVariant), t || (e2 && e2.fontWeight ? r3.push(e2.fontWeight) : i2.fontWeight && r3.push(i2.fontWeight)), e2 && e2.fontStyle ? r3.push(e2.fontStyle) : i2.fontStyle && r3.push(i2.fontStyle), e2 && e2.fontSize ? (_(e2.fontSize) && (e2.fontSize = e2.fontSize + "px"), r3.push(e2.fontSize)) : i2.fontSize && (_(i2.fontSize) && (i2.fontSize = i2.fontSize + "px"), r3.push(i2.fontSize)), e2 && e2.fontFamily ? r3.push(e2.fontFamily) : i2.fontFamily ? r3.push(i2.fontFamily) : r3.length && r3.push("Arial"), r3.join(" ");
  }
  _render(e2) {
    if (this._textInfo || this._measure(e2), this.textVisible) {
      const i2 = this._isInteractive(e2), r3 = e2.layer.context, s2 = e2.layer.dirty, a = this._renderer._ghostLayer.context;
      r3.save(), a.save(), this._prerender(e2), P(this._textInfo, (n2, o) => {
        P(n2.textChunks, (t, o2) => {
          if (t.style && (r3.save(), a.save(), r3.font = t.style, this._isInteractive(e2) && (a.font = t.style)), t.fill && (r3.save(), r3.fillStyle = t.fill.toCSS()), s2 && r3.fillText(t.text, t.offsetX, n2.offsetY + t.offsetY), "underline" == t.textDecoration || "line-through" == t.textDecoration) {
            let e3 = 1, i3 = 1, s3 = t.height;
            const a2 = this.style.oversizedBehavior || "";
            if (["truncate", "wrap", "wrap-no-break"].indexOf(a2) > -1) {
              const e4 = this._measureText(t.text, r3);
              t.width = e4.actualBoundingBoxLeft + e4.actualBoundingBoxRight;
            }
            let o3, l2 = t.offsetX;
            switch (this.style.textAlign) {
              case "right":
              case "end":
                l2 -= t.width;
                break;
              case "center":
                l2 -= t.width / 2;
            }
            if (t.style) {
              switch (ti.getTextStyle(t.style).fontWeight) {
                case "bolder":
                case "bold":
                case "700":
                case "800":
                case "900":
                  e3 = 2;
              }
            }
            s3 && (i3 = s3 / 20), o3 = "line-through" == t.textDecoration ? e3 + n2.offsetY + t.offsetY - t.height / 2 : e3 + 1.5 * i3 + n2.offsetY + t.offsetY, r3.save(), r3.beginPath(), t.fill ? r3.strokeStyle = t.fill.toCSS() : this.style.fill && this.style.fill instanceof Yt && (r3.strokeStyle = this.style.fill.toCSS()), r3.lineWidth = e3 * i3, r3.moveTo(l2, o3), r3.lineTo(l2 + t.width, o3), r3.stroke(), r3.restore();
          }
          i2 && this.interactive && a.fillText(t.text, t.offsetX, n2.offsetY + t.offsetY), t.fill && r3.restore(), t.style && (r3.restore(), a.restore());
        });
      }), r3.restore(), a.restore();
    }
  }
  _addBounds(e2) {
    if (this.visible && this.isMeasured) {
      const t = this._measure({ inactive: this.inactive, layer: this.getLayer() });
      ht(e2, { x: t.left, y: t.top }), ht(e2, { x: t.right, y: t.bottom });
    }
  }
  _ignoreFontWeight() {
    return /apple/i.test(navigator.vendor);
  }
  _measure(e2) {
    const i2 = e2.layer.context, r3 = this._renderer._ghostLayer.context, s2 = "rtl" == this.style.direction;
    this._textInfo = [];
    const a = this.style.oversizedBehavior, n2 = this.style.maxWidth, o = _(n2) && "truncate" == a, l2 = _(n2) && ("wrap" == a || "wrap-no-break" == a);
    i2.save(), r3.save(), this._prerender(e2, true, this._ignoreFontWeight());
    const h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ", u3 = this.text.toString().replace(/\r/g, "").split(/\n/);
    let d, b2 = true, g2 = 0, p = 0, m2 = 0;
    P(u3, (e3, t) => {
      let s3;
      for (s3 = "" == e3 ? [{ type: "value", text: "" }] : ti.chunk(e3, false, this.style.ignoreFormatting); s3.length > 0; ) {
        let e4 = { offsetY: m2, ascent: 0, width: 0, height: 0, left: 0, right: 0, textChunks: [] };
        const t2 = this._measureText(h, i2), a2 = t2.actualBoundingBoxAscent + t2.actualBoundingBoxDescent;
        let u4;
        e4.height = a2, e4.ascent = t2.actualBoundingBoxAscent;
        let f2, _3, y, v2 = this.style.textDecoration, w2 = false, x2 = true, P2 = [];
        x(s3, (t3, a3) => {
          if ("format" == t3.type) if ("[/]" == t3.text) b2 || (i2.restore(), r3.restore(), b2 = true), f2 = void 0, d = void 0, _3 = void 0, v2 = this.style.textDecoration, y = void 0, u4 = t3.text;
          else {
            b2 || (i2.restore(), r3.restore());
            let s4 = ti.getTextStyle(t3.text);
            const a4 = this._getFontStyle(s4);
            i2.save(), r3.save(), i2.font = a4, d = a4, u4 = t3.text, s4.textDecoration && (v2 = s4.textDecoration), s4.fill && (f2 = s4.fill), s4.width && (_3 = l(s4.width)), s4.verticalAlign && (y = s4.verticalAlign), b2 = false;
            const n3 = this._measureText(h, i2), o2 = n3.actualBoundingBoxAscent + n3.actualBoundingBoxDescent;
            o2 > e4.height && (e4.height = o2), n3.actualBoundingBoxAscent > e4.ascent && (e4.ascent = n3.actualBoundingBoxAscent);
          }
          else if ("value" == t3.type && !w2) {
            const r4 = this._measureText(t3.text, i2);
            let h2 = r4.actualBoundingBoxLeft + r4.actualBoundingBoxRight;
            if (o) {
              this.truncated = void 0;
              let r5 = x2 || this.style.breakWords || false;
              const s4 = this.style.ellipsis || "", a4 = this._measureText(s4, i2), o2 = a4.actualBoundingBoxLeft + a4.actualBoundingBoxRight;
              if (e4.width + h2 > n2) {
                const a5 = n2 - e4.width - o2;
                t3.text = this._truncateText(i2, t3.text, a5, r5), t3.text += s4, w2 = true, this.truncated = true;
              }
            } else if (l2 && e4.width + h2 > n2) {
              const r5 = n2 - e4.width, o2 = this._truncateText(i2, t3.text, r5, false, x2 && "wrap-no-break" != this.style.oversizedBehavior);
              if ("" == o2) return this.textVisible = true, false;
              P2 = s3.slice(a3 + 1), vt(o2) != vt(t3.text) && (P2.unshift({ type: "value", text: t3.text.substr(o2.length) }), u4 && P2.unshift({ type: "format", text: u4 })), t3.text = vt(o2), s3 = [], w2 = true;
            }
            let c = 1, b3 = 1;
            if (d && _3 && _3 > h2) {
              const e5 = h2 / _3;
              switch (this.style.textAlign) {
                case "right":
                case "end":
                  c = e5;
                  break;
                case "center":
                  c = e5, b3 = e5;
                  break;
                default:
                  b3 = e5;
              }
              h2 = _3;
            }
            const g3 = r4.actualBoundingBoxAscent + r4.actualBoundingBoxDescent;
            g3 > e4.height && (e4.height = g3), r4.actualBoundingBoxAscent > e4.ascent && (e4.ascent = r4.actualBoundingBoxAscent), e4.width += h2, e4.left += r4.actualBoundingBoxLeft / c, e4.right += r4.actualBoundingBoxRight / b3, e4.textChunks.push({ style: d, fill: f2, text: t3.text, width: h2, height: g3, left: r4.actualBoundingBoxLeft, right: r4.actualBoundingBoxRight, ascent: r4.actualBoundingBoxAscent, offsetX: 0, offsetY: 0, textDecoration: v2, verticalAlign: y }), x2 = false;
          }
          return true;
        }), this.style.lineHeight instanceof e ? (e4.height *= this.style.lineHeight.value, e4.ascent *= this.style.lineHeight.value) : (e4.height *= this.style.lineHeight || 1.2, e4.ascent *= this.style.lineHeight || 1.2), g2 < e4.left && (g2 = e4.left), p < e4.right && (p = e4.right), this._textInfo.push(e4), m2 += e4.height, s3 = P2 || [];
      }
    }), b2 || (i2.restore(), r3.restore()), P(this._textInfo, (e3, i3) => {
      let r4 = 0;
      P(e3.textChunks, (t) => {
        if (t.offsetX = r4 + t.left - e3.left, t.offsetY += e3.height - e3.height * (this.style.baselineRatio || 0.19), r4 += t.width, t.verticalAlign) switch (t.verticalAlign) {
          case "super":
            t.offsetY -= e3.height / 2 - t.height / 2;
            break;
          case "sub":
            t.offsetY += t.height / 2;
        }
      });
    });
    const _2 = { left: s2 ? -p : -g2, top: 0, right: s2 ? g2 : p, bottom: m2 };
    if ("none" !== a) {
      const e3 = this._fitRatio(_2);
      if (e3 < 1) if ("fit" == a) _(this.style.minScale) && e3 < this.style.minScale ? (this.textVisible = false, _2.left = 0, _2.top = 0, _2.right = 0, _2.bottom = 0) : (this._originalScale || (this._originalScale = this.scale), this.scale = e3, this.textVisible = true);
      else if ("hide" == a) this.textVisible = false, _2.left = 0, _2.top = 0, _2.right = 0, _2.bottom = 0;
      else {
        switch (this.style.textAlign) {
          case "right":
          case "end":
            _2.left = s2 ? n2 : -n2, _2.right = 0;
            break;
          case "center":
            _2.left = -n2 / 2, _2.right = n2 / 2;
            break;
          default:
            _2.left = 0, _2.right = s2 ? -n2 : n2;
        }
        this.scale = this._originalScale || 1, this._originalScale = void 0, this.textVisible = true;
      }
      else this.scale = this._originalScale || 1, this._originalScale = void 0, this.textVisible = true;
    }
    return i2.restore(), r3.restore(), _2;
  }
  _fitRatio(e2) {
    const t = this.style.maxWidth, i2 = this.style.maxHeight;
    if (!_(t) && !_(i2)) return 1;
    const r3 = e2.right - e2.left, s2 = e2.bottom - e2.top;
    return Math.min(t / r3 || 1, i2 / s2 || 1);
  }
  _truncateText(e2, t, i2, r3 = false, s2 = true) {
    let a;
    do {
      if (r3) t = t.slice(0, -1);
      else {
        let e3 = t.replace(/[^,;:!?\\\/\s​]+[,;:!?\\\/\s​]*$/g, "");
        if ("" != e3 && e3 !== t || !s2) {
          if ("" == e3) return t;
          t = e3;
        } else r3 = true;
      }
      const i3 = this._measureText(t, e2);
      a = i3.actualBoundingBoxLeft + i3.actualBoundingBoxRight;
    } while (a > i2 && "" != t);
    return t;
  }
  _measureText(e2, t) {
    let i2 = t.measureText(e2), r3 = {};
    if (null == i2.actualBoundingBoxAscent) {
      const t2 = document.createElement("div");
      t2.innerText = e2, t2.style.visibility = "hidden", t2.style.position = "absolute", t2.style.top = "-1000000px;", t2.style.fontFamily = this.style.fontFamily || "", t2.style.fontSize = this.style.fontSize + "", document.body.appendChild(t2);
      const s3 = t2.getBoundingClientRect();
      document.body.removeChild(t2);
      const a = s3.height, n2 = i2.width;
      r3 = { actualBoundingBoxAscent: a, actualBoundingBoxDescent: 0, actualBoundingBoxLeft: 0, actualBoundingBoxRight: n2, fontBoundingBoxAscent: a, fontBoundingBoxDescent: 0, width: n2 };
    } else r3 = { actualBoundingBoxAscent: i2.actualBoundingBoxAscent, actualBoundingBoxDescent: i2.actualBoundingBoxDescent, actualBoundingBoxLeft: i2.actualBoundingBoxLeft, actualBoundingBoxRight: i2.actualBoundingBoxRight, fontBoundingBoxAscent: i2.actualBoundingBoxAscent, fontBoundingBoxDescent: i2.actualBoundingBoxDescent, width: i2.width };
    const s2 = i2.width;
    switch (this.style.textAlign) {
      case "right":
      case "end":
        r3.actualBoundingBoxLeft = s2, r3.actualBoundingBoxRight = 0;
        break;
      case "center":
        r3.actualBoundingBoxLeft = s2 / 2, r3.actualBoundingBoxRight = s2 / 2;
        break;
      default:
        r3.actualBoundingBoxLeft = 0, r3.actualBoundingBoxRight = s2;
    }
    return r3;
  }
};
var Ct2 = class {
  constructor() {
    Object.defineProperty(this, "fill", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "fillOpacity", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "textAlign", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "fontFamily", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "fontSize", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "fontWeight", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "fontStyle", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "fontVariant", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "textDecoration", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "shadowColor", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "shadowBlur", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "shadowOffsetX", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "shadowOffsetY", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "shadowOpacity", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "lineHeight", { enumerable: true, configurable: true, writable: true, value: i(120) }), Object.defineProperty(this, "baselineRatio", { enumerable: true, configurable: true, writable: true, value: 0.19 }), Object.defineProperty(this, "direction", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "textBaseline", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "oversizedBehavior", { enumerable: true, configurable: true, writable: true, value: "none" }), Object.defineProperty(this, "breakWords", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "ellipsis", { enumerable: true, configurable: true, writable: true, value: "…" }), Object.defineProperty(this, "maxWidth", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "maxHeight", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "minScale", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "ignoreFormatting", { enumerable: true, configurable: true, writable: true, value: false });
  }
};
var Dt2 = class extends Bt {
  constructor() {
    super(...arguments), Object.defineProperty(this, "textType", { enumerable: true, configurable: true, writable: true, value: "circular" }), Object.defineProperty(this, "radius", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "startAngle", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "inside", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "orientation", { enumerable: true, configurable: true, writable: true, value: "auto" }), Object.defineProperty(this, "kerning", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_textReversed", { enumerable: true, configurable: true, writable: true, value: false });
  }
  _render(e2) {
    if ("circular" === this.textType) this._renderCircular(e2);
    else super._render(e2);
  }
  _renderCircular(e2) {
    if (this.textVisible) {
      this._prerender(e2);
      const i2 = this._isInteractive(e2), r3 = e2.layer.context, s2 = e2.layer.dirty, a = this._renderer._ghostLayer.context;
      r3.save(), i2 && a.save(), this._textInfo || this._measure(e2);
      let n2 = this.radius || 0, o = this.startAngle || 0, l2 = 0, h = this.orientation, u3 = "auto" == h ? "auto" : "inward" == h;
      const c = this.inside, d = this.style.textAlign || "left", b2 = this.kerning || 0;
      let f2 = "left" == d ? 1 : -1;
      const g2 = !this._textReversed;
      if ("auto" == u3) {
        let e3 = 0, i3 = 0;
        P(this._textInfo, (t, i4) => {
          const r4 = o + t.width / (n2 - t.height) / 2 * -f2;
          r4 > e3 && (e3 = r4);
        }), i3 = "left" == d ? (e3 + l2 / 2) * le : "right" == d ? (e3 - l2 / 2) * le : o * le, i3 = _e(i3), u3 = i3 >= 270 || i3 <= 90;
      }
      1 == u3 && g2 && (this._textInfo.reverse(), this._textReversed = true), P(this._textInfo, (e3, h2) => {
        const p = e3.height;
        c || (n2 += p), (-1 == f2 && u3 || 1 == f2 && !u3) && g2 && e3.textChunks.reverse();
        let m2 = o;
        l2 = 0, "center" == d && (m2 += e3.width / (n2 - p) / 2 * -f2, l2 = m2 - o), m2 += Math.PI * (u3 ? 0 : 1), r3.save(), i2 && a.save(), r3.rotate(m2), i2 && a.rotate(m2);
        let _2 = 0;
        P(e3.textChunks, (e4, t) => {
          const o2 = e4.text, l3 = e4.width;
          _2 = l3 / 2 / (n2 - p) * f2, r3.rotate(_2), i2 && a.rotate(_2), e4.style && (r3.save(), a.save(), r3.font = e4.style, i2 && (a.font = e4.style)), e4.fill && (r3.save(), r3.fillStyle = e4.fill.toCSS()), r3.textBaseline = "middle", r3.textAlign = "center", i2 && (a.textBaseline = "middle", a.textAlign = "center"), s2 && r3.fillText(o2, 0, (u3 ? 1 : -1) * (0 - n2 + p / 2)), i2 && a.fillText(o2, 0, (u3 ? 1 : -1) * (0 - n2 + p / 2)), e4.fill && r3.restore(), e4.style && (r3.restore(), a.restore()), _2 = (l3 / 2 + b2) / (n2 - p) * f2, r3.rotate(_2), i2 && a.rotate(_2);
        }), r3.restore(), i2 && a.restore(), c && (n2 -= p);
      }), r3.restore(), i2 && a.restore();
    }
  }
  _measure(e2) {
    return "circular" === this.textType ? this._measureCircular(e2) : super._measure(e2);
  }
  _measureCircular(e2) {
    const i2 = e2.layer.context, r3 = this._renderer._ghostLayer.context, s2 = "rtl" == this.style.direction, a = this.style.oversizedBehavior, n2 = this.style.maxWidth, o = _(n2) && "truncate" == a, l2 = this.style.ellipsis || "";
    let h;
    this.textVisible = true, this._textInfo = [], this._textReversed = false, i2.save(), r3.save(), this._prerender(e2, true);
    const u3 = this.text.toString().replace(/\r/g, "").split(/\n/);
    let d = true, b2 = 0, g2 = 0;
    return P(u3, (e3, a2) => {
      let u4, f2, p, m2 = ti.chunk(e3, false, this.style.ignoreFormatting), _2 = { offsetY: g2, ascent: 0, width: 0, height: 0, left: 0, right: 0, textChunks: [] };
      P(m2, (e4, t) => {
        if ("format" == e4.type) {
          if ("[/]" == e4.text) d || (i2.restore(), r3.restore(), d = true), f2 = void 0, u4 = void 0, p = void 0;
          else {
            let t2 = ti.getTextStyle(e4.text);
            const s3 = this._getFontStyle(t2);
            i2.save(), r3.save(), i2.font = s3, u4 = s3, t2.fill && (f2 = t2.fill), t2.width && (p = l(t2.width)), d = false;
          }
          o && (h = this._measureText(l2, i2));
        } else if ("value" == e4.type) {
          let t2 = e4.text.match(/./gu) || [];
          s2 && (t2 = xt(e4.text), t2.reverse());
          for (let e5 = 0; e5 < t2.length; e5++) {
            const r4 = t2[e5], s3 = this._measureText(r4, i2);
            let a3 = s3.width;
            u4 && p && p > a3 && (a3 = p);
            const c = s3.actualBoundingBoxAscent + s3.actualBoundingBoxDescent;
            if (c > _2.height && (_2.height = c), s3.actualBoundingBoxAscent > _2.ascent && (_2.ascent = s3.actualBoundingBoxAscent), b2 += a3, o) {
              h || (h = this._measureText(l2, i2));
              const e6 = h.actualBoundingBoxLeft + h.actualBoundingBoxRight;
              if (b2 + e6 > n2) {
                1 == _2.textChunks.length ? this.textVisible = false : (_2.width += e6, _2.left += h.actualBoundingBoxLeft, _2.right += h.actualBoundingBoxRight, _2.textChunks.push({ style: u4, fill: f2, text: l2, width: e6, height: c + h.actualBoundingBoxDescent, left: h.actualBoundingBoxLeft, right: h.actualBoundingBoxRight, ascent: h.actualBoundingBoxAscent, offsetX: 0, offsetY: c, textDecoration: void 0 }));
                break;
              }
            }
            _2.width += a3, _2.left += s3.actualBoundingBoxLeft, _2.right += s3.actualBoundingBoxRight, _2.textChunks.push({ style: u4, fill: f2, text: r4, width: a3, height: c + s3.actualBoundingBoxDescent, left: s3.actualBoundingBoxLeft, right: s3.actualBoundingBoxRight, ascent: s3.actualBoundingBoxAscent, offsetX: 0, offsetY: c, textDecoration: void 0 });
          }
        }
      }), this.style.lineHeight instanceof e ? _2.height *= this.style.lineHeight.value : _2.height *= this.style.lineHeight || 1.2, this._textInfo.push(_2), g2 += _2.height;
    }), d || (i2.restore(), r3.restore()), "hide" == a && b2 > n2 && (this.textVisible = false), P(this._textInfo, (e3) => {
      P(e3.textChunks, (t) => {
        t.offsetY += Math.round((e3.height - t.height + (e3.ascent - t.ascent)) / 2);
      });
    }), i2.restore(), r3.restore(), { left: 0, top: 0, right: 0, bottom: 0 };
  }
};
var At = class extends ot2 {
  constructor(e2, t) {
    super(e2), Object.defineProperty(this, "width", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "height", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "image", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "tainted", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "shadowColor", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "shadowBlur", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "shadowOffsetX", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "shadowOffsetY", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "shadowOpacity", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_imageMask", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.image = t;
  }
  _dispose() {
    super._dispose(), this._imageMask && st2(this._imageMask);
  }
  getLocalBounds() {
    if (!this._localBounds) {
      let e2 = 0, t = 0;
      this.width && (e2 = this.width), this.height && (t = this.height), this._localBounds = { left: 0, top: 0, right: e2, bottom: t }, this._addBounds(this._localBounds);
    }
    return this._localBounds;
  }
  _render(e2) {
    if (super._render(e2), this.image) {
      if (void 0 === this.tainted && (this.tainted = rt(this.image), e2.layer.tainted = true), this.tainted && this._renderer._omitTainted) return;
      if (e2.layer.dirty) {
        this.shadowColor && (e2.layer.context.shadowColor = this.shadowColor.toCSS(this.shadowOpacity || 1)), this.shadowBlur && (e2.layer.context.shadowBlur = this.shadowBlur), this.shadowOffsetX && (e2.layer.context.shadowOffsetX = this.shadowOffsetX), this.shadowOffsetY && (e2.layer.context.shadowOffsetY = this.shadowOffsetY);
        const t = this.width || this.image.naturalWidth, i2 = this.height || this.image.naturalHeight;
        e2.layer.context.drawImage(this.image, 0, 0, t, i2);
      }
      if (this.interactive && this._isInteractive(e2)) {
        const e3 = this._getMask(this.image);
        this._renderer._ghostLayer.context.drawImage(e3, 0, 0);
      }
    }
  }
  clear() {
    super.clear(), this.image = void 0, this._imageMask = void 0;
  }
  _getMask(e2) {
    if (void 0 === this._imageMask) {
      const t = this.width || e2.naturalWidth, i2 = this.height || e2.naturalHeight, r3 = document.createElement("canvas");
      r3.width = t, r3.height = i2;
      const s2 = r3.getContext("2d");
      s2.imageSmoothingEnabled = false, s2.fillStyle = this._getColorId(), s2.fillRect(0, 0, t, i2), rt(e2) || (s2.globalCompositeOperation = "destination-in", s2.drawImage(e2, 0, 0, t, i2)), this._imageMask = r3;
    }
    return this._imageMask;
  }
};
var Lt = class {
  constructor(e2, t, i2, r3) {
    Object.defineProperty(this, "event", { enumerable: true, configurable: true, writable: true, value: e2 }), Object.defineProperty(this, "originalPoint", { enumerable: true, configurable: true, writable: true, value: t }), Object.defineProperty(this, "point", { enumerable: true, configurable: true, writable: true, value: i2 }), Object.defineProperty(this, "bbox", { enumerable: true, configurable: true, writable: true, value: r3 }), Object.defineProperty(this, "id", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "simulated", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "native", { enumerable: true, configurable: true, writable: true, value: true }), Q("touchevents") && e2 instanceof Touch ? this.id = e2.identifier : this.id = null;
  }
};
var zt2 = class extends Y {
  constructor(i2) {
    if (super(), Object.defineProperty(this, "view", { enumerable: true, configurable: true, writable: true, value: document.createElement("div") }), Object.defineProperty(this, "_layerDom", { enumerable: true, configurable: true, writable: true, value: document.createElement("div") }), Object.defineProperty(this, "layers", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_dirtyLayers", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "defaultLayer", { enumerable: true, configurable: true, writable: true, value: this.getLayer(0) }), Object.defineProperty(this, "_ghostLayer", { enumerable: true, configurable: true, writable: true, value: new Ft() }), Object.defineProperty(this, "_patternCanvas", { enumerable: true, configurable: true, writable: true, value: document.createElement("canvas") }), Object.defineProperty(this, "_patternContext", { enumerable: true, configurable: true, writable: true, value: this._patternCanvas.getContext("2d") }), Object.defineProperty(this, "_realWidth", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_realHeight", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_calculatedWidth", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_calculatedHeight", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "resolution", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "interactionsEnabled", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "_listeners", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_events", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_colorId", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_colorMap", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_forceInteractive", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_omitTainted", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_hovering", { enumerable: true, configurable: true, writable: true, value: /* @__PURE__ */ new Set() }), Object.defineProperty(this, "_dragging", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_mousedown", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_lastPointerMoveEvent", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "tapToActivate", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "tapToActivateTimeout", { enumerable: true, configurable: true, writable: true, value: 3e3 }), Object.defineProperty(this, "_touchActive", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_touchActiveTimeout", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.resolution = i2 ?? window.devicePixelRatio, this.view.style.position = "absolute", this.view.setAttribute("aria-hidden", "true"), this.view.appendChild(this._layerDom), this._disposers.push(new z(() => {
      U(this._events, (e2, t) => {
        t.disposer.dispose();
      }), P(this.layers, (e2) => {
        st2(e2.view), e2.exportableView && st2(e2.exportableView);
      }), st2(this._ghostLayer.view), st2(this._patternCanvas);
    })), this._disposers.push(q(() => {
      null == i2 && (this.resolution = window.devicePixelRatio);
    })), Q("touchevents")) {
      const e2 = (e3) => {
        0 !== this._dragging.length && x(this._dragging, (t) => !t.value.shouldCancelTouch() || (e3.preventDefault(), false)), this._touchActiveTimeout && this._delayTouchDeactivate();
      };
      this._disposers.push(J(window, "touchstart", e2, { passive: false })), this._disposers.push(J(this.view, "touchstart", e2, { passive: false })), this._disposers.push(J(this.view, "touchmove", () => {
        this._touchActiveTimeout && this._delayTouchDeactivate();
      }, { passive: true })), this._disposers.push(J(window, "click", (e3) => {
        this._touchActive = false;
      }, { passive: true })), this._disposers.push(J(this.view, "click", (e3) => {
        window.setTimeout(() => {
          this._touchActive = true, this._delayTouchDeactivate();
        }, 100);
      }, { passive: true }));
    }
    Q("wheelevents") && this._disposers.push(J(this.view, "wheel", (e2) => {
      let t = false;
      this._hovering.forEach((e3) => {
        if (e3.wheelable) return t = true, false;
      }), t && e2.preventDefault();
    }, { passive: false }));
  }
  resetImageArray() {
    this._ghostLayer.imageArray = void 0;
  }
  _delayTouchDeactivate() {
    this._touchActiveTimeout && clearTimeout(this._touchActiveTimeout), this.tapToActivateTimeout > 0 && (this._touchActiveTimeout = window.setTimeout(() => {
      this._touchActive = false;
    }, this.tapToActivateTimeout));
  }
  get debugGhostView() {
    return !!this._ghostLayer.view.parentNode;
  }
  set debugGhostView(e2) {
    e2 ? this._ghostLayer.view.parentNode || this.view.appendChild(this._ghostLayer.view) : this._ghostLayer.view.parentNode && this._ghostLayer.view.parentNode.removeChild(this._ghostLayer.view);
  }
  createLinearGradient(e2, t, i2, r3) {
    return this.defaultLayer.context.createLinearGradient(e2, t, i2, r3);
  }
  createRadialGradient(e2, t, i2, r3, s2, a) {
    return this.defaultLayer.context.createRadialGradient(e2, t, i2, r3, s2, a);
  }
  createPattern(e2, t, i2, r3, s2) {
    return this._patternCanvas.width = r3, this._patternCanvas.height = s2, this._patternContext.clearRect(0, 0, r3, s2), t.renderDetached(this._patternContext), e2.renderDetached(this._patternContext), this._patternContext.createPattern(this._patternCanvas, i2);
  }
  makeContainer() {
    return new lt(this);
  }
  makeGraphics() {
    return new Tt2(this);
  }
  makeText(e2, t) {
    return new Bt(this, e2, t);
  }
  makeTextStyle() {
    return new Ct2();
  }
  makeRadialText(e2, t) {
    return new Dt2(this, e2, t);
  }
  makePicture(e2) {
    return new At(this, e2);
  }
  resizeLayer(e2) {
    e2.resize(this._calculatedWidth, this._calculatedHeight, this._calculatedWidth, this._calculatedHeight, this.resolution);
  }
  resizeGhost() {
    this._ghostLayer.resize(this._calculatedWidth, this._calculatedHeight, this._calculatedWidth, this._calculatedHeight, this.resolution);
  }
  resize(e2, i2, r3, s2) {
    this._realWidth = e2, this._realHeight = i2, this._calculatedWidth = r3, this._calculatedHeight = s2, P(this.layers, (e3) => {
      e3 && (e3.dirty = true, this.resizeLayer(e3));
    }), this.resizeGhost(), this.view.style.width = r3 + "px", this.view.style.height = s2 + "px";
  }
  createDetachedLayer(e2 = false) {
    const t = document.createElement("canvas"), i2 = t.getContext("2d", { willReadFrequently: e2 }), r3 = new Ht(t, i2);
    return t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", r3;
  }
  getLayerByOrder(e2) {
    const t = this.layers, i2 = t.length;
    for (let r3 = 0; r3 < i2; r3++) {
      const i3 = t[r3];
      if (i3.order == e2) return i3;
    }
  }
  getLayer(e2, t = true) {
    let i2 = this.getLayerByOrder(e2);
    if (i2) return i2;
    const r3 = this.createDetachedLayer(99 == e2);
    r3.order = e2, r3.visible = t, r3.view.className = "am5-layer-" + e2, r3.visible && this.resizeLayer(r3);
    const s2 = this.layers;
    s2.push(r3), s2.sort((e3, t2) => e3.order > t2.order ? 1 : e3.order < t2.order ? -1 : 0);
    const a = s2.length;
    let n2;
    for (let o = v(s2, r3) + 1; o < a; o++) if (s2[o].visible) {
      n2 = s2[o];
      break;
    }
    return r3.visible && (void 0 === n2 ? this._layerDom.appendChild(r3.view) : this._layerDom.insertBefore(r3.view, n2.view)), r3;
  }
  render(e2) {
    if (this._dirtyLayers.length = 0, P(this.layers, (e3) => {
      e3 && e3.dirty && e3.visible && (this._dirtyLayers.push(e3), e3.clear());
    }), this._ghostLayer.clear(), e2.render({ inactive: null, layer: this.defaultLayer }), this._ghostLayer.context.restore(), P(this.layers, (e3) => {
      if (e3) {
        const t = e3.context;
        t.beginPath(), t.moveTo(0, 0), t.stroke();
      }
    }), P(this._dirtyLayers, (e3) => {
      e3.context.restore(), e3.dirty = false;
    }), this._hovering.size && this._lastPointerMoveEvent) {
      const { events: e3, target: i2, native: r3 } = this._lastPointerMoveEvent;
      P(e3, (e4) => {
        this._dispatchGlobalMousemove(e4, i2, r3);
      });
    }
  }
  paintId(e2) {
    const t = et2(++this._colorId), i2 = Yt.fromHex(t).toCSS();
    return this._colorMap[i2] = e2, i2;
  }
  _removeObject(e2) {
    void 0 !== e2._colorId && delete this._colorMap[e2._colorId];
  }
  _adjustBoundingBox(e2) {
    const t = this._ghostLayer.margin;
    return new DOMRect(-t.left, -t.top, e2.width + t.left + t.right, e2.height + t.top + t.bottom);
  }
  getEvent(e2, t = true) {
    const i2 = this.view.getBoundingClientRect(), r3 = e2.clientX || 0, s2 = e2.clientY || 0, a = this._calculatedWidth / this._realWidth, n2 = this._calculatedHeight / this._realHeight, o = { x: r3 - i2.left, y: s2 - i2.top }, l2 = { x: (r3 - (t ? i2.left : 0)) * a, y: (s2 - (t ? i2.top : 0)) * n2 };
    return new Lt(e2, o, l2, this._adjustBoundingBox(i2));
  }
  _getHitTarget(e2, t, i2) {
    if (0 === t.width || 0 === t.height || e2.x < t.left || e2.x > t.right || e2.y < t.top || e2.y > t.bottom) return;
    if (!i2 || !this._layerDom.contains(i2)) return;
    const r3 = this._ghostLayer.getImageData(e2, t);
    if (0 === r3.data[0] && 0 === r3.data[1] && 0 === r3.data[2]) return false;
    const s2 = Yt.fromRGB(r3.data[0], r3.data[1], r3.data[2]).toCSS();
    return this._colorMap[s2];
  }
  getObjectAtPoint(e2) {
    const t = this._ghostLayer.getImageArray(e2);
    if (0 === t[0] && 0 === t[1] && 0 === t[2]) return;
    const i2 = Yt.fromRGB(t[0], t[1], t[2]).toCSS();
    return this._colorMap[i2];
  }
  _withEvents(e2, t) {
    const r3 = this._events[e2];
    if (void 0 !== r3) {
      r3.dispatching = true;
      try {
        t(r3);
      } finally {
        r3.dispatching = false, r3.cleanup && (r3.cleanup = false, N(r3.callbacks, (e3) => !e3.disposed), 0 === r3.callbacks.length && (r3.disposer.dispose(), delete this._events[e2]));
      }
    }
  }
  _dispatchEventAll(e2, i2) {
    this.interactionsEnabled && this._withEvents(e2, (e3) => {
      P(e3.callbacks, (e4) => {
        e4.disposed || e4.callback.call(e4.context, i2);
      });
    });
  }
  _dispatchEvent(e2, i2, r3) {
    if (!this.interactionsEnabled) return false;
    let s2 = false;
    return this._withEvents(e2, (e3) => {
      P(e3.callbacks, (e4) => {
        e4.disposed || e4.object !== i2 || (e4.callback.call(e4.context, r3), s2 = true);
      });
    }), s2;
  }
  _dispatchMousedown(e2, t) {
    const i2 = e2.button;
    if (0 != i2 && 2 != i2 && 1 != i2 && void 0 !== i2) return;
    const r3 = this.getEvent(e2), s2 = this._getHitTarget(r3.originalPoint, r3.bbox, t);
    if (s2) {
      const e3 = r3.id;
      let t2 = false;
      tt(s2, (i3) => {
        const s3 = { id: e3, value: i3 };
        if (this._mousedown.push(s3), !t2 && this._dispatchEvent("pointerdown", i3, r3)) {
          t2 = true;
          this._dragging.some((t3) => t3.value === i3 && t3.id === e3) || this._dragging.push(s3);
        }
        return true;
      });
    }
  }
  _dispatchGlobalMousemove(e2, t, i2) {
    const r3 = this.getEvent(e2), s2 = this._getHitTarget(r3.originalPoint, r3.bbox, t);
    r3.native = i2, s2 ? (this._hovering.forEach((e3) => {
      e3.contains(s2) || (this._hovering.delete(e3), e3.cursorOverStyle && at(document.body, "cursor", e3._replacedCursorStyle), this._dispatchEvent("pointerout", e3, r3));
    }), r3.native && tt(s2, (e3) => (this._hovering.has(e3) || (this._hovering.add(e3), e3.cursorOverStyle && (e3._replacedCursorStyle = nt(document.body, "cursor"), at(document.body, "cursor", e3.cursorOverStyle)), this._dispatchEvent("pointerover", e3, r3)), true))) : (this._hovering.forEach((e3) => {
      e3.cursorOverStyle && at(document.body, "cursor", e3._replacedCursorStyle), this._dispatchEvent("pointerout", e3, r3);
    }), this._hovering.clear()), this._dispatchEventAll("globalpointermove", r3);
  }
  removeHovering(e2) {
    this._hovering.delete(e2), e2.cursorOverStyle && at(document.body, "cursor", e2._replacedCursorStyle);
  }
  _dispatchGlobalMouseup(e2, t) {
    const i2 = this.getEvent(e2);
    i2.native = t, this._dispatchEventAll("globalpointerup", i2);
  }
  _dispatchDragMove(e2) {
    if (0 !== this._dragging.length) {
      const t = this.getEvent(e2), i2 = t.id;
      this._dragging.forEach((e3) => {
        e3.id === i2 && this._dispatchEvent("pointermove", e3.value, t);
      });
    }
  }
  _dispatchDragEnd(e2, t) {
    const i2 = e2.button;
    let r3;
    if (0 == i2 || void 0 === i2) r3 = "click";
    else if (2 == i2) r3 = "rightclick";
    else {
      if (1 != i2) return;
      r3 = "middleclick";
    }
    const s2 = this.getEvent(e2), a = s2.id;
    if (0 !== this._mousedown.length) {
      const e3 = this._getHitTarget(s2.originalPoint, s2.bbox, t);
      e3 && this._mousedown.forEach((t2) => {
        t2.id === a && t2.value.contains(e3) && this._dispatchEvent(r3, t2.value, s2);
      }), this._mousedown.length = 0;
    }
    0 !== this._dragging.length && (this._dragging.forEach((e3) => {
      e3.id === a && this._dispatchEvent("pointerup", e3.value, s2);
    }), this._dragging.length = 0);
  }
  _dispatchDoubleClick(e2, t) {
    const i2 = this.getEvent(e2), r3 = this._getHitTarget(i2.originalPoint, i2.bbox, t);
    r3 && tt(r3, (e3) => !this._dispatchEvent("dblclick", e3, i2));
  }
  _dispatchWheel(e2, t) {
    const i2 = this.getEvent(e2), r3 = this._getHitTarget(i2.originalPoint, i2.bbox, t);
    r3 && tt(r3, (e3) => !this._dispatchEvent("wheel", e3, i2));
  }
  _makeSharedEvent(e2, t) {
    if (void 0 === this._listeners[e2]) {
      const i2 = t();
      this._listeners[e2] = new $(() => {
        delete this._listeners[e2], i2.dispose();
      });
    }
    return this._listeners[e2].increment();
  }
  _onPointerEvent(e2, t) {
    let i2 = false, r3 = null;
    function s2() {
      r3 = null, i2 = false;
    }
    return new X([new z(() => {
      null !== r3 && clearTimeout(r3), s2();
    }), J(this.view, st(e2), (e3) => {
      i2 = true, null !== r3 && clearTimeout(r3), r3 = window.setTimeout(s2, 0);
    }), it2(window, e2, (e3, s3) => {
      null !== r3 && (clearTimeout(r3), r3 = null), t(e3, s3, i2), i2 = false;
    })]);
  }
  _initEvent(e2) {
    switch (e2) {
      case "globalpointermove":
      case "pointerover":
      case "pointerout":
        return this._makeSharedEvent("pointermove", () => {
          const e3 = (e4, i2, r3) => {
            this._lastPointerMoveEvent = { events: e4, target: i2, native: r3 }, P(e4, (e5) => {
              this._dispatchGlobalMousemove(e5, i2, r3);
            });
          };
          return new X([this._onPointerEvent("pointerdown", e3), this._onPointerEvent("pointermove", e3)]);
        });
      case "globalpointerup":
        return this._makeSharedEvent("pointerup", () => {
          const e3 = this._onPointerEvent("pointerup", (e4, i3, r3) => {
            P(e4, (e5) => {
              this._dispatchGlobalMouseup(e5, r3);
            }), this._lastPointerMoveEvent = { events: e4, target: i3, native: r3 };
          }), i2 = this._onPointerEvent("pointercancel", (e4, i3, r3) => {
            P(e4, (e5) => {
              this._dispatchGlobalMouseup(e5, r3);
            }), this._lastPointerMoveEvent = { events: e4, target: i3, native: r3 };
          });
          return new z(() => {
            e3.dispose(), i2.dispose();
          });
        });
      case "click":
      case "rightclick":
      case "middleclick":
      case "pointerdown":
      case "pointermove":
      case "pointerup":
        return this._makeSharedEvent("pointerdown", () => {
          const e3 = this._onPointerEvent("pointerdown", (e4, i3) => {
            P(e4, (e5) => {
              this._dispatchMousedown(e5, i3);
            });
          }), i2 = this._onPointerEvent("pointermove", (e4) => {
            P(e4, (e5) => {
              this._dispatchDragMove(e5);
            });
          }), r3 = this._onPointerEvent("pointerup", (e4, i3) => {
            P(e4, (e5) => {
              this._dispatchDragEnd(e5, i3);
            });
          }), s2 = this._onPointerEvent("pointercancel", (e4, i3) => {
            P(e4, (e5) => {
              this._dispatchDragEnd(e5, i3);
            });
          });
          return new z(() => {
            e3.dispose(), i2.dispose(), r3.dispose(), s2.dispose();
          });
        });
      case "dblclick":
        return this._makeSharedEvent("dblclick", () => this._onPointerEvent("dblclick", (e3, i2) => {
          P(e3, (e4) => {
            this._dispatchDoubleClick(e4, i2);
          });
        }));
      case "wheel":
        return this._makeSharedEvent("wheel", () => J(this.view, st("wheel"), (e3) => {
          this._dispatchWheel(e3, ot(e3));
        }, { passive: false }));
    }
  }
  _addEvent(e2, t, i2, r3) {
    let s2 = this._events[t];
    void 0 === s2 && (s2 = this._events[t] = { disposer: this._initEvent(t), callbacks: [], dispatching: false, cleanup: false });
    const a = { object: e2, context: r3, callback: i2, disposed: false };
    return s2.callbacks.push(a), new z(() => {
      a.disposed = true, s2.dispatching ? s2.cleanup = true : (O(s2.callbacks, a), 0 === s2.callbacks.length && (s2.disposer.dispose(), delete this._events[t]));
    });
  }
  getCanvas(e2, i2) {
    this.render(e2), i2 || (i2 = {});
    let r3 = this.resolution, s2 = Math.floor(this._calculatedWidth * this.resolution), a = Math.floor(this._calculatedHeight * this.resolution);
    if (i2.minWidth && i2.minWidth > s2) {
      let e3 = i2.minWidth / s2;
      e3 > r3 && (r3 = e3 * this.resolution);
    }
    if (i2.minHeight && i2.minHeight > a) {
      let e3 = i2.minHeight / a;
      e3 > r3 && (r3 = e3 * this.resolution);
    }
    if (i2.maxWidth && i2.maxWidth < s2) {
      let e3 = i2.maxWidth / s2;
      e3 < r3 && (r3 = e3 * this.resolution);
    }
    if (i2.maxHeight && i2.maxHeight > a) {
      let e3 = i2.maxHeight / a;
      e3 < r3 && (r3 = e3 * this.resolution);
    }
    i2.maintainPixelRatio && (r3 /= this.resolution);
    const n2 = [];
    let o = false;
    const l2 = document.createElement("canvas");
    r3 != this.resolution && (o = true, s2 = s2 * r3 / this.resolution, a = a * r3 / this.resolution), l2.width = s2, l2.height = a, l2.style.position = "fixed", l2.style.top = "-10000px", this.view.appendChild(l2), n2.push(l2);
    const h = l2.getContext("2d");
    let u3 = 0, c = 0, d = false;
    return P(this.layers, (e3) => {
      if (e3 && e3.visible && (e3.tainted || o)) {
        d = true, e3.exportableView = e3.view, e3.exportableContext = e3.context, e3.view = document.createElement("canvas"), e3.view.style.position = "fixed", e3.view.style.top = "-10000px", this.view.appendChild(e3.view), n2.push(e3.view);
        let t = 0, i3 = 0;
        e3.margin && (t += e3.margin.left || 0 + e3.margin.right || 0, i3 += e3.margin.top || 0 + e3.margin.bottom || 0), e3.view.width = s2 + t, e3.view.height = a + i3, e3.context = e3.view.getContext("2d"), e3.dirty = true, e3.scale = r3;
      }
    }), d && (this._omitTainted = true, this.render(e2), this._omitTainted = false), P(this.layers, (e3) => {
      if (e3 && e3.visible) {
        let t = 0, i3 = 0;
        e3.margin && (t = -(e3.margin.left || 0) * this.resolution, i3 = -(e3.margin.top || 0) * this.resolution), h.drawImage(e3.view, t, i3), e3.exportableView && (e3.view = e3.exportableView, e3.exportableView = void 0), e3.exportableContext && (e3.context = e3.exportableContext, e3.exportableContext = void 0), u3 < e3.view.clientWidth && (u3 = e3.view.clientWidth), c < e3.view.clientHeight && (c = e3.view.clientHeight), e3.scale = void 0;
      }
    }), l2.style.width = u3 + "px", l2.style.height = c + "px", P(n2, (e3) => {
      e3.style.position = "", e3.style.top = "", this.view.removeChild(e3);
    }), l2;
  }
};
var Ft = class {
  constructor() {
    Object.defineProperty(this, "view", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "context", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "margin", { enumerable: true, configurable: true, writable: true, value: { left: 0, right: 0, top: 0, bottom: 0 } }), Object.defineProperty(this, "_resolution", { enumerable: true, configurable: true, writable: true, value: 1 }), Object.defineProperty(this, "_width", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_height", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "imageArray", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.view = document.createElement("canvas"), this.context = this.view.getContext("2d", { alpha: false, willReadFrequently: true }), this.context.imageSmoothingEnabled = false, this.view.style.position = "absolute", this.view.style.top = "0px", this.view.style.left = "0px";
  }
  resize(e2, t, i2, r3, s2) {
    this._resolution = s2, e2 += this.margin.left + this.margin.right, t += this.margin.top + this.margin.bottom, i2 += this.margin.left + this.margin.right, r3 += this.margin.top + this.margin.bottom, this.view.style.left = -this.margin.left + "px", this.view.style.top = -this.margin.top + "px", this._width = Math.floor(e2 * s2), this._height = Math.floor(t * s2), this.view.width = this._width, this.view.style.width = i2 + "px", this.view.height = this._height, this.view.style.height = r3 + "px";
  }
  getImageData(e2, t) {
    return this.context.getImageData(Math.round((e2.x - t.left) / t.width * this._width), Math.round((e2.y - t.top) / t.height * this._height), 1, 1);
  }
  getImageArray(e2) {
    this.imageArray || (this.imageArray = this.context.getImageData(0, 0, this._width, this._height).data);
    const t = this.imageArray, i2 = Math.round(e2.x * this._resolution), r3 = 4 * (Math.round(e2.y * this._resolution) * this._width + i2);
    return [t[r3], t[r3 + 1], t[r3 + 2], t[r3 + 3]];
  }
  setMargin(e2) {
    this.margin.left = 0, this.margin.right = 0, this.margin.top = 0, this.margin.bottom = 0, P(e2, (e3) => {
      e3.margin && (this.margin.left = Math.max(this.margin.left, e3.margin.left), this.margin.right = Math.max(this.margin.right, e3.margin.right), this.margin.top = Math.max(this.margin.top, e3.margin.top), this.margin.bottom = Math.max(this.margin.bottom, e3.margin.bottom));
    });
  }
  clear() {
    this.context.save(), this.context.fillStyle = "#000", this.context.fillRect(0, 0, this._width, this._height);
  }
};
var Ht = class {
  constructor(e2, t) {
    Object.defineProperty(this, "view", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "context", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "tainted", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "margin", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "order", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "visible", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "width", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "height", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "scale", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "dirty", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "exportableView", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "exportableContext", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_width", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_height", { enumerable: true, configurable: true, writable: true, value: 0 }), this.view = e2, this.context = t;
  }
  resize(e2, t, i2, r3, s2) {
    null != this.width && (e2 = this.width, i2 = this.width), null != this.height && (t = this.height, r3 = this.height), this.margin ? (e2 += this.margin.left + this.margin.right, t += this.margin.top + this.margin.bottom, i2 += this.margin.left + this.margin.right, r3 += this.margin.top + this.margin.bottom, this.view.style.left = -this.margin.left + "px", this.view.style.top = -this.margin.top + "px") : (this.view.style.left = "0px", this.view.style.top = "0px"), this._width = Math.floor(e2 * s2), this._height = Math.floor(t * s2), this.view.width = this._width, this.view.style.width = i2 + "px", this.view.height = this._height, this.view.style.height = r3 + "px";
  }
  clear() {
    this.context.save(), this.context.clearRect(0, 0, this._width, this._height);
  }
};
function Yt2(e2, t) {
  null == e2 ? requestAnimationFrame(t) : setTimeout(() => {
    requestAnimationFrame(t);
  }, 1e3 / e2);
}
var It = class _It {
  constructor(e2, i2 = {}, r3) {
    if (Object.defineProperty(this, "dom", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_inner", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_settings", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_isDirty", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_isDirtyParents", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_isDirtyAnimation", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_dirty", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_dirtyParents", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_dirtyBounds", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_dirtyPositions", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "_ticker", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "_tickers", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_updateTick", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "events", { enumerable: true, configurable: true, writable: true, value: new Xt() }), Object.defineProperty(this, "animationTime", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "_animations", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_renderer", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_rootContainer", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "tooltipContainer", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_tooltipContainerSettings", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_tooltip", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "language", { enumerable: true, configurable: true, writable: true, value: Ie.new(this, {}) }), Object.defineProperty(this, "locale", { enumerable: true, configurable: true, writable: true, value: Ye2 }), Object.defineProperty(this, "utc", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "timezone", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "fps", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "numberFormatter", { enumerable: true, configurable: true, writable: true, value: De.new(this, {}) }), Object.defineProperty(this, "dateFormatter", { enumerable: true, configurable: true, writable: true, value: Fe.new(this, {}) }), Object.defineProperty(this, "durationFormatter", { enumerable: true, configurable: true, writable: true, value: He2.new(this, {}) }), Object.defineProperty(this, "tabindex", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_tabindexes", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_a11yD", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_focusElementDirty", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_focusElementContainer", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_focusedSprite", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_isShift", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_keyboardDragPoint", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_tooltipElementContainer", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_readerAlertElement", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_logo", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_tooltipDiv", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "nonce", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "interfaceColors", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "verticalLayout", { enumerable: true, configurable: true, writable: true, value: qe.new(this, {}) }), Object.defineProperty(this, "horizontalLayout", { enumerable: true, configurable: true, writable: true, value: Je.new(this, {}) }), Object.defineProperty(this, "gridLayout", { enumerable: true, configurable: true, writable: true, value: Qe.new(this, {}) }), Object.defineProperty(this, "_paused", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "autoResize", { enumerable: true, configurable: true, writable: true, value: true }), Object.defineProperty(this, "_fontHash", { enumerable: true, configurable: true, writable: true, value: "" }), Object.defineProperty(this, "_isDisposed", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "_disposers", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_resizeSensorDisposer", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_tooltips", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_htmlElementContainer", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "_htmlEnabledContainers", { enumerable: true, configurable: true, writable: true, value: [] }), !r3) throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    let s2, a;
    if (this._settings = i2, 0 == i2.accessible && (this._a11yD = true), null == i2.useSafeResolution && (i2.useSafeResolution = true), i2.useSafeResolution && (s2 = ct()), this._renderer = new zt2(s2), a = e2 instanceof HTMLElement ? e2 : document.getElementById(e2), P(Oe.rootElements, (e3) => {
      if (e3.dom === a) throw new Error("You cannot have multiple Roots on the same DOM node");
    }), this.interfaceColors = Ce.new(this, {}), null === a) throw new Error("Could not find HTML element with id `" + e2 + "`");
    this.dom = a;
    let n2 = document.createElement("div");
    n2.style.position = "relative", n2.style.width = "100%", n2.style.height = "100%", a.appendChild(n2);
    const o = i2.tooltipContainerBounds;
    o && (this._tooltipContainerSettings = o), this._inner = n2, this._updateComputedStyles(), Oe.rootElements.push(this);
  }
  static new(e2, t) {
    const i2 = new _It(e2, t, true);
    return i2._init(), i2;
  }
  moveDOM(e2) {
    let t;
    if (t = e2 instanceof HTMLElement ? e2 : document.getElementById(e2), t) {
      for (; this.dom.childNodes.length > 0; ) t.appendChild(this.dom.childNodes[0]);
      this.dom = t, this._initResizeSensor(), this.resize();
    }
  }
  _handleLogo() {
    if (this._logo) {
      const e2 = this.dom.offsetWidth, t = this.dom.offsetHeight;
      e2 <= 150 || t <= 60 ? this._logo.hide() : this._logo.show();
    }
  }
  _showBranding() {
    if (!this._logo) {
      const e2 = this.tooltipContainer.children.push(ai.new(this, { interactive: true, interactiveChildren: false, position: "absolute", setStateOnChildren: true, paddingTop: 9, paddingRight: 9, paddingBottom: 9, paddingLeft: 9, scale: 0.6, y: i(100), centerY: r2, tooltipText: "Created using amCharts 5", tooltipX: r2, cursorOverStyle: "pointer", background: Xe.new(this, { fill: zt(4671320), fillOpacity: 0, tooltipY: 5 }) })), t = u2.new(this, { pointerOrientation: "horizontal", paddingTop: 4, paddingRight: 7, paddingBottom: 4, paddingLeft: 7 });
      t.label.setAll({ fontSize: 12 }), t.get("background").setAll({ fill: this.interfaceColors.get("background"), stroke: this.interfaceColors.get("grid"), strokeOpacity: 0.3 }), e2.set("tooltip", t), e2.events.on("click", () => {
        window.open("https://www.amcharts.com/", "_blank");
      }), e2.states.create("hover", {});
      e2.children.push(Ye.new(this, { stroke: zt(13421772), strokeWidth: 3, svgPath: "M5 25 L13 25h13.6c3.4 0 6 0 10.3-4.3s5.2-12 8.6-12c3.4 0 4.3 8.6 7.7 8.6M83.4 25H79.8c-3.4 0-6 0-10.3-4.3s-5.2-12-8.6-12-4.3 8.6-7.7 8.6" })).states.create("hover", { stroke: zt(3976191) });
      e2.children.push(Ye.new(this, { stroke: zt(8947848), strokeWidth: 3, svgPath: "M83.4 25h-31C37 25 39.5 4.4 28.4 4.4S18.9 24.2 4.3 25H0" })).states.create("hover", { stroke: zt(4671320) }), this._logo = e2, this._handleLogo();
    }
  }
  _getRealSize() {
    return this.dom.getBoundingClientRect();
  }
  _getCalculatedSize(e2) {
    return this._settings.calculateSize ? this._settings.calculateSize(e2) : { width: e2.width, height: e2.height };
  }
  _init() {
    const e2 = this._settings;
    false !== e2.accessible && (e2.focusable && (this._inner.setAttribute("focusable", "true"), this._inner.setAttribute("tabindex", this.tabindex + "")), e2.ariaLabel && this._inner.setAttribute("aria-label", e2.ariaLabel), e2.role && this._inner.setAttribute("role", e2.role));
    const t = this._renderer, i2 = this._getRealSize(), r3 = this._getCalculatedSize(i2), s2 = Math.floor(r3.width), a = Math.floor(r3.height), n2 = Math.floor(i2.width), o = Math.floor(i2.height), l2 = ai.new(this, { visible: true, width: s2, height: a });
    this._rootContainer = l2, this._rootContainer._defaultThemes.push(s.new(this));
    const h = l2.children.push(ai.new(this, { visible: true, width: r2, height: r2 }));
    this.container = h, t.resize(n2, o, s2, a), this._inner.appendChild(t.view), this._initResizeSensor();
    const u3 = document.createElement("div");
    if (this._htmlElementContainer = u3, u3.className = "am5-html-container", u3.style.position = "absolute", u3.style.pointerEvents = "none", this._tooltipContainerSettings || (u3.style.overflow = "hidden"), this._inner.appendChild(u3), true !== this._a11yD) {
      const e3 = document.createElement("div");
      e3.className = "am5-reader-container", e3.setAttribute("role", "alert"), e3.style.position = "absolute", e3.style.width = "1px", e3.style.height = "1px", e3.style.overflow = "hidden", e3.style.clip = "rect(1px, 1px, 1px, 1px)", this._readerAlertElement = e3, this._inner.appendChild(this._readerAlertElement);
      const i3 = document.createElement("div");
      i3.className = "am5-focus-container", i3.style.position = "absolute", i3.style.pointerEvents = "none", i3.style.top = "0px", i3.style.left = "0px", i3.style.overflow = "hidden", i3.style.width = s2 + "px", i3.style.height = a + "px", i3.setAttribute("role", "graphics-document"), dt(i3, false), this._focusElementContainer = i3, this._inner.appendChild(this._focusElementContainer);
      const r4 = document.createElement("div");
      this._tooltipElementContainer = r4, r4.className = "am5-tooltip-container", this._inner.appendChild(r4), Q("keyboardevents") && (this._disposers.push(J(window, "keydown", (e4) => {
        const t2 = ut(e4);
        "Shift" == t2 ? this._isShift = true : "Tab" == t2 && (this._isShift = e4.shiftKey);
      })), this._disposers.push(J(window, "keyup", (e4) => {
        "Shift" == ut(e4) && (this._isShift = false);
      })), this._disposers.push(J(i3, "click", () => {
        const e4 = this._focusedSprite;
        if (e4) {
          const i4 = e4.get("clickAnnounceText", "");
          "" !== i4 && this.readerAlert(i4);
          const r5 = t.getEvent(new MouseEvent("click"));
          e4.events.dispatch("click", { type: "click", originalEvent: r5.event, point: r5.point, simulated: true, target: e4 });
        }
      })), this._disposers.push(J(i3, "keydown", (e4) => {
        const i4 = this._focusedSprite;
        if (i4) {
          "Escape" == e4.key && (et(), this._focusedSprite = void 0);
          let r5 = 0, s3 = 0;
          const a2 = ut(e4);
          switch (a2) {
            case "Enter":
            case " ":
              const n3 = i4.get("clickAnnounceText", "");
              if ("" !== n3 && this.readerAlert(n3), " " == a2 && "checkbox" != i4.get("role")) return;
              e4.preventDefault();
              const o2 = t.getEvent(new MouseEvent("mouse"));
              return void i4.events.dispatch("click", { type: "click", originalEvent: o2.event, point: o2.point, simulated: true, target: i4 });
            case "ArrowLeft":
              r5 = -6;
              break;
            case "ArrowRight":
              r5 = 6;
              break;
            case "ArrowUp":
              s3 = -6;
              break;
            case "ArrowDown":
              s3 = 6;
              break;
            default:
              return;
          }
          if (0 != r5 || 0 != s3) {
            if (e4.preventDefault(), !i4.isDragging()) {
              this._keyboardDragPoint = { x: 0, y: 0 };
              const e5 = t.getEvent(new MouseEvent("mousedown", { clientX: 0, clientY: 0 }));
              e5.point = { x: 0, y: 0 }, i4.events.isEnabled("pointerdown") && i4.events.dispatch("pointerdown", { type: "pointerdown", originalEvent: e5.event, point: e5.point, simulated: true, target: i4 });
            }
            const a3 = this._keyboardDragPoint;
            a3.x += r5, a3.y += s3;
            const n3 = t.getEvent(new MouseEvent("mousemove", { clientX: a3.x, clientY: a3.y }), false);
            i4.events.isEnabled("globalpointermove") && i4.events.dispatch("globalpointermove", { type: "globalpointermove", originalEvent: n3.event, point: n3.point, simulated: true, target: i4 });
          }
        }
      })), this._disposers.push(J(i3, "keyup", (e4) => {
        if (this._focusedSprite) {
          const i4 = this._focusedSprite, r5 = ut(e4);
          switch (r5) {
            case "ArrowLeft":
            case "ArrowRight":
            case "ArrowUp":
            case "ArrowDown":
              if (i4.isDragging()) {
                const e6 = this._keyboardDragPoint, r6 = t.getEvent(new MouseEvent("mouseup", { clientX: e6.x, clientY: e6.y }));
                return i4.events.isEnabled("globalpointerup") && i4.events.dispatch("globalpointerup", { type: "globalpointerup", originalEvent: r6.event, point: r6.point, simulated: true, target: i4 }), void (this._keyboardDragPoint = void 0);
              }
              if (i4.get("focusableGroup")) {
                const e6 = i4.get("focusableGroup"), t2 = this._tabindexes.filter((t3) => !(t3.get("focusableGroup") != e6 || false === t3.getPrivate("focusable") || !t3.isVisibleDeep()));
                let s3 = t2.indexOf(i4);
                const a2 = t2.length - 1;
                s3 += "ArrowRight" == r5 || "ArrowDown" == r5 ? 1 : -1, s3 < 0 ? s3 = a2 : s3 > a2 && (s3 = 0), it(t2[s3].getPrivate("focusElement").dom);
              }
              break;
            case "Tab":
              const e5 = i4.get("focusableGroup");
              if (e5 && this._isShift) return void this._focusNext(i4.getPrivate("focusElement").dom, -1, e5);
          }
        }
      })));
    }
    this._startTicker(), this.setThemes([]), this._addTooltip(), this._hasLicense() || this._showBranding();
  }
  _initResizeSensor() {
    this._resizeSensorDisposer && this._resizeSensorDisposer.dispose(), this._resizeSensorDisposer = new Be(this.dom, () => {
      this.autoResize && this.resize();
    }), this._disposers.push(this._resizeSensorDisposer);
  }
  resize() {
    const e2 = this._getRealSize(), t = this._getCalculatedSize(e2), i2 = Math.floor(t.width), r3 = Math.floor(t.height);
    if (i2 > 0 && r3 > 0) {
      const t2 = Math.floor(e2.width), s2 = Math.floor(e2.height), a = this._htmlElementContainer;
      if (a.style.width = i2 + "px", a.style.height = r3 + "px", true !== this._a11yD) {
        const e3 = this._focusElementContainer;
        e3.style.width = i2 + "px", e3.style.height = r3 + "px";
      }
      this._renderer.resize(t2, s2, i2, r3);
      const n2 = this._rootContainer;
      n2.setPrivate("width", i2), n2.setPrivate("height", r3), this._render(), this._handleLogo();
    }
  }
  _render() {
    this._renderer.render(this._rootContainer._display), this._focusElementDirty && (this._updateCurrentFocus(), this._focusElementDirty = false);
  }
  _runTickers(e2) {
    P(this._tickers, (t) => {
      t(e2);
    });
  }
  _runAnimations(e2) {
    let t = 0;
    return N(this._animations, (i2) => {
      const r3 = i2._runAnimation(e2);
      return r3 !== ee.Stopped && (r3 !== ee.Playing || (++t, true));
    }), this._isDirtyAnimation = false, 0 === t;
  }
  _runDirties() {
    let e2 = {};
    for (; this._isDirtyParents; ) this._isDirtyParents = false, R(this._dirtyParents).forEach((t2) => {
      const i3 = this._dirtyParents[t2];
      delete this._dirtyParents[t2], i3.isDisposed() || (e2[i3.uid] = i3, i3._prepareChildren());
    });
    R(e2).forEach((t2) => {
      e2[t2]._updateChildren();
    });
    const t = [];
    R(this._dirty).forEach((e3) => {
      const i3 = this._dirty[e3];
      i3.isDisposed() ? delete this._dirty[i3.uid] : (t.push(i3), i3._beforeChanged());
    }), t.forEach((e3) => {
      e3._changed(), delete this._dirty[e3.uid], e3._clearDirty();
    }), this._isDirty = false;
    const i2 = {}, r3 = [];
    R(this._dirtyBounds).forEach((e3) => {
      const t2 = this._dirtyBounds[e3];
      delete this._dirtyBounds[e3], t2.isDisposed() || (i2[t2.uid] = t2.depth(), r3.push(t2));
    }), this._positionHTMLElements(), r3.sort((e3, t2) => Se(i2[t2.uid], i2[e3.uid])), r3.forEach((e3) => {
      e3._updateBounds();
    });
    const s2 = this._dirtyPositions;
    R(s2).forEach((e3) => {
      const t2 = s2[e3];
      delete s2[e3], t2.isDisposed() || t2._updatePosition();
    }), t.forEach((e3) => {
      e3._afterChanged();
    });
  }
  _renderFrame(e2) {
    if (this._updateTick) {
      this.events.isEnabled("framestarted") && this.events.dispatch("framestarted", { type: "framestarted", target: this, timestamp: e2 }), this._checkComputedStyles(), this._runTickers(e2);
      const t = this._runAnimations(e2);
      return this._runDirties(), this._render(), this._renderer.resetImageArray(), this._positionHTMLElements(), this.events.isEnabled("frameended") && this.events.dispatch("frameended", { type: "frameended", target: this, timestamp: e2 }), 0 === this._tickers.length && t && !this._isDirtyAnimation && !this._isDirty;
    }
    return true;
  }
  _runTicker(e2, t) {
    if (!this.isDisposed()) {
      this.animationTime = e2;
      this._renderFrame(e2) ? (this._ticker = null, this.animationTime = null) : this._paused || (t ? this._ticker : Yt2(this.fps, this._ticker));
    }
  }
  _runTickerNow(e2 = 1e4) {
    if (!this.isDisposed()) {
      const t = performance.now() + e2;
      for (; ; ) {
        const e3 = performance.now();
        if (e3 >= t) {
          this.animationTime = null;
          break;
        }
        this.animationTime = e3;
        if (this._renderFrame(e3)) {
          this.animationTime = null;
          break;
        }
      }
    }
  }
  _startTicker() {
    null === this._ticker && (this.animationTime = null, this._ticker = (e2) => {
      this._runTicker(e2);
    }, Yt2(this.fps, this._ticker));
  }
  get updateTick() {
    return this._updateTick;
  }
  set updateTick(e2) {
    this._updateTick = e2, e2 && this._startTicker();
  }
  _addDirtyEntity(e2) {
    this._isDirty = true, void 0 === this._dirty[e2.uid] && (this._dirty[e2.uid] = e2), this._startTicker();
  }
  _addDirtyParent(e2) {
    this._isDirty = true, this._isDirtyParents = true, void 0 === this._dirtyParents[e2.uid] && (this._dirtyParents[e2.uid] = e2), this._startTicker();
  }
  _addDirtyBounds(e2) {
    this._isDirty = true, void 0 === this._dirtyBounds[e2.uid] && (this._dirtyBounds[e2.uid] = e2), this._startTicker();
  }
  _addDirtyPosition(e2) {
    this._isDirty = true, void 0 === this._dirtyPositions[e2.uid] && (this._dirtyPositions[e2.uid] = e2), this._startTicker();
  }
  _addAnimation(e2) {
    this._isDirtyAnimation = true, -1 === this._animations.indexOf(e2) && this._animations.push(e2), this._startTicker();
  }
  _markDirty() {
    this._isDirty = true;
  }
  _markDirtyRedraw() {
    this.events.once("frameended", () => {
      this._isDirty = true, this._startTicker();
    });
  }
  eachFrame(e2) {
    return this._tickers.push(e2), this._startTicker(), new z(() => {
      O(this._tickers, e2);
    });
  }
  markDirtyGlobal(e2) {
    e2 || (e2 = this.container), e2.walkChildren((e3) => {
      e3 instanceof ai && this.markDirtyGlobal(e3), e3.markDirty(), e3.markDirtyBounds();
    });
  }
  width() {
    return Math.floor(this._getCalculatedSize(this._getRealSize()).width);
  }
  height() {
    return Math.floor(this._getCalculatedSize(this._getRealSize()).height);
  }
  dispose() {
    this._isDisposed || (this._isDisposed = true, this._rootContainer.dispose(), this._renderer.dispose(), this.horizontalLayout.dispose(), this.verticalLayout.dispose(), this.interfaceColors.dispose(), P(this._disposers, (e2) => {
      e2.dispose();
    }), this._inner && Z(this._inner), k(Oe.rootElements, this));
  }
  isDisposed() {
    return this._isDisposed;
  }
  readerAlert(e2) {
    true !== this._a11yD && (this._readerAlertElement.innerHTML = Pt(e2));
  }
  setThemes(e2) {
    this._rootContainer.set("themes", e2);
    const t = this.tooltipContainer;
    t && t._applyThemes();
    const i2 = this.interfaceColors;
    i2 && i2._applyThemes();
  }
  _addTooltip() {
    if (!this.tooltipContainer) {
      const e2 = this._tooltipContainerSettings, t = this._rootContainer.children.push(ai.new(this, { position: "absolute", isMeasured: false, width: r2, height: r2, layer: e2 ? 35 : 30, layerMargin: e2 || void 0 }));
      this.tooltipContainer = t;
      const i2 = u2.new(this, {});
      this.container.set("tooltip", i2), i2.hide(0), this._tooltip = i2;
    }
  }
  _registerTabindexOrder(e2) {
    1 != this._a11yD && (e2.get("focusable") ? S(this._tabindexes, e2) : k(this._tabindexes, e2), this._invalidateTabindexes());
  }
  _unregisterTabindexOrder(e2) {
    1 != this._a11yD && (k(this._tabindexes, e2), this._invalidateTabindexes());
  }
  _invalidateTabindexes() {
    if (1 == this._a11yD) return;
    this._tabindexes.sort((e3, t) => {
      const i2 = e3.get("tabindexOrder", 0), r3 = t.get("tabindexOrder", 0);
      return i2 == r3 ? 0 : i2 > r3 ? 1 : -1;
    });
    const e2 = [];
    P(this._tabindexes, (t, i2) => {
      t.getPrivate("focusElement") ? this._moveFocusElement(i2, t) : this._makeFocusElement(i2, t);
      const r3 = t.get("focusableGroup");
      r3 && false !== t.getPrivate("focusable") && (-1 !== e2.indexOf(r3) ? t.getPrivate("focusElement").dom.setAttribute("tabindex", "-1") : e2.push(r3));
    });
  }
  _updateCurrentFocus() {
    1 != this._a11yD && this._focusedSprite && (this._decorateFocusElement(this._focusedSprite), this._positionFocusElement(this._focusedSprite));
  }
  _decorateFocusElement(e2, t) {
    if (1 == this._a11yD) return;
    if (t || (t = e2.getPrivate("focusElement").dom), !t) return;
    const i2 = e2.get("role");
    i2 ? t.setAttribute("role", i2) : t.removeAttribute("role");
    const r3 = e2.get("ariaLabel");
    if (r3) {
      const i3 = ei(e2, r3);
      t.setAttribute("aria-label", i3);
    } else t.removeAttribute("aria-label");
    const s2 = e2.get("ariaLive");
    s2 ? t.setAttribute("aria-live", s2) : t.removeAttribute("aria-live");
    const a = e2.get("ariaChecked");
    null != a && i2 && -1 !== ["checkbox", "option", "radio", "menuitemcheckbox", "menuitemradio", "treeitem"].indexOf(i2) ? t.setAttribute("aria-checked", a ? "true" : "false") : t.removeAttribute("aria-checked");
    const n2 = e2.get("ariaCurrent");
    null != n2 ? t.setAttribute("aria-current", n2) : t.removeAttribute("aria-current");
    const o = e2.get("ariaSelected");
    null != o && i2 && -1 !== ["gridcell", "option", "row", "tab", "columnheader", "rowheader", "treeitem"].indexOf(i2) ? t.setAttribute("aria-selected", o ? "true" : "false") : t.removeAttribute("aria-selected"), e2.get("ariaHidden") ? t.setAttribute("aria-hidden", "true") : t.removeAttribute("aria-hidden");
    const l2 = e2.get("ariaOrientation");
    l2 ? t.setAttribute("aria-orientation", l2) : t.removeAttribute("aria-orientation");
    const h = e2.get("ariaValueNow");
    h ? t.setAttribute("aria-valuenow", h) : t.removeAttribute("aria-valuenow");
    const u3 = e2.get("ariaValueMin");
    u3 ? t.setAttribute("aria-valuemin", u3) : t.removeAttribute("aria-valuemin");
    const c = e2.get("ariaValueMax");
    c ? t.setAttribute("aria-valuemax", c) : t.removeAttribute("aria-valuemax");
    const d = e2.get("ariaValueText");
    d ? t.setAttribute("aria-valuetext", d) : t.removeAttribute("aria-valuetext");
    const b2 = e2.get("ariaControls");
    b2 ? t.setAttribute("aria-controls", b2) : t.removeAttribute("aria-controls"), e2.get("visible") && 0 !== e2.get("opacity") && "tooltip" != e2.get("role") && !e2.isHidden() && false !== e2.getPrivate("focusable") ? ("-1" != t.getAttribute("tabindex") && t.setAttribute("tabindex", "" + this.tabindex), t.removeAttribute("aria-hidden")) : (t.removeAttribute("tabindex"), t.setAttribute("aria-hidden", "true"));
  }
  _makeFocusElement(e2, t) {
    if (t.getPrivate("focusElement") || 1 == this._a11yD) return;
    const i2 = document.createElement("div");
    "tooltip" != t.get("role") && (i2.tabIndex = this.tabindex), i2.style.position = "absolute", dt(i2, false);
    const r3 = [];
    t.setPrivate("focusElement", { dom: i2, disposers: r3 }), this._decorateFocusElement(t), r3.push(J(i2, "focus", (e3) => {
      this._handleFocus(e3);
    })), r3.push(J(i2, "blur", (e3) => {
      this._handleBlur(e3);
    })), this._moveFocusElement(e2, t);
  }
  _removeFocusElement(e2) {
    if (1 == this._a11yD) return;
    k(this._tabindexes, e2);
    const i2 = e2.getPrivate("focusElement");
    if (i2) {
      this._focusElementContainer.removeChild(i2.dom), P(i2.disposers, (e3) => {
        e3.dispose();
      });
    }
  }
  _hideFocusElement(e2) {
    if (1 == this._a11yD) return;
    e2.getPrivate("focusElement").dom.style.display = "none";
  }
  _moveFocusElement(e2, t) {
    if (1 == this._a11yD) return;
    const i2 = this._focusElementContainer, r3 = t.getPrivate("focusElement").dom;
    if (r3 === this._focusElementContainer.children[e2]) return;
    const s2 = this._focusElementContainer.children[e2 + 1];
    s2 ? i2.insertBefore(r3, s2) : i2.append(r3);
  }
  _positionFocusElement(e2) {
    if (1 == this._a11yD || null == e2) return;
    const t = e2.globalBounds();
    let i2 = t.right == t.left ? e2.width() : t.right - t.left, r3 = t.top == t.bottom ? e2.height() : t.bottom - t.top;
    const s2 = void 0 !== this._settings.focusPadding ? this._settings.focusPadding : 2;
    let a = t.left - s2, n2 = t.top - s2;
    i2 < 0 && (a += i2, i2 = Math.abs(i2)), r3 < 0 && (n2 += r3, r3 = Math.abs(r3));
    const o = e2.getPrivate("focusElement").dom;
    o.style.top = n2 + "px", o.style.left = a + "px", o.style.width = i2 + 2 * s2 + "px", o.style.height = r3 + 2 * s2 + "px";
  }
  _getSpriteByFocusElement(e2) {
    let t;
    return x(this._tabindexes, (i2, r3) => i2.getPrivate("focusElement").dom !== e2 || (t = i2, false)), t;
  }
  _handleFocus(e2) {
    if (1 == this._a11yD) return;
    const t = this._getSpriteByFocusElement(e2.target);
    t && (t.isVisibleDeep() ? (this._positionFocusElement(t), this._focusedSprite = t, t.events.isEnabled("focus") && t.events.dispatch("focus", { type: "focus", originalEvent: e2, target: t })) : this._focusNext(e2.target, this._isShift ? -1 : 1));
  }
  _focusNext(e2, t, i2) {
    if (1 == this._a11yD) return;
    const r3 = Array.from(document.querySelectorAll(["a[href]", "area[href]", "button:not([disabled])", "details", "input:not([disabled])", "iframe:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", '[contentEditable=""]', '[contentEditable="true"]', '[contentEditable="TRUE"]', '[tabindex]:not([tabindex^="-"])'].join(",")));
    let s2 = r3.indexOf(e2) + t;
    s2 < 0 ? s2 = r3.length - 1 : s2 >= r3.length && (s2 = 0);
    const a = r3[s2];
    if (i2 && -1 == t) {
      const e3 = this._getSpriteByFocusElement(a);
      if (e3 && e3.get("focusableGroup") == i2) return void this._focusNext(a, t);
    }
    a.focus();
  }
  _handleBlur(e2) {
    if (1 == this._a11yD) return;
    const t = this._focusedSprite;
    t && !t.isDisposed() && t.events.isEnabled("blur") && t.events.dispatch("blur", { type: "blur", originalEvent: e2, target: t }), this._focusedSprite = void 0;
  }
  updateTooltip(e2) {
    if (1 == this._a11yD) return;
    const t = Pt(e2._getText());
    let i2 = e2.getPrivate("tooltipElement");
    "tooltip" == e2.get("role") && "" != t ? (i2 || (i2 = this._makeTooltipElement(e2)), i2.innerHTML != t && (i2.innerHTML = t), i2.setAttribute("aria-hidden", e2.isVisibleDeep() ? "false" : "true")) : i2 && (i2.remove(), e2.removePrivate("tooltipElement"));
  }
  _makeTooltipElement(e2) {
    const t = this._tooltipElementContainer, i2 = document.createElement("div");
    return i2.style.position = "absolute", i2.style.width = "1px", i2.style.height = "1px", i2.style.overflow = "hidden", i2.style.clip = "rect(1px, 1px, 1px, 1px)", dt(i2, false), this._decorateFocusElement(e2, i2), t.append(i2), e2.setPrivate("tooltipElement", i2), i2;
  }
  _removeTooltipElement(e2) {
    if (1 == this._a11yD) return;
    const t = e2.getPrivate("tooltipElement");
    if (t) {
      const e3 = t.parentElement;
      e3 && e3.removeChild(t);
    }
  }
  _invalidateAccessibility(e2) {
    if (1 == this._a11yD) return;
    this._focusElementDirty = true;
    const t = e2.getPrivate("focusElement");
    e2.get("focusable") ? t && (this._decorateFocusElement(e2), this._positionFocusElement(e2)) : t && this._removeFocusElement(e2);
  }
  focused(e2) {
    return this._focusedSprite === e2;
  }
  documentPointToRoot(e2) {
    const t = this._getRealSize(), i2 = this._getCalculatedSize(t), r3 = i2.width / t.width, s2 = i2.height / t.height;
    return { x: (e2.x - t.left) * r3, y: (e2.y - t.top) * s2 };
  }
  rootPointToDocument(e2) {
    const t = this._getRealSize(), i2 = this._getCalculatedSize(t), r3 = i2.width / t.width, s2 = i2.height / t.height;
    return { x: e2.x / r3 + t.left, y: e2.y / s2 + t.top };
  }
  addDisposer(e2) {
    return this._disposers.push(e2), e2;
  }
  _updateComputedStyles() {
    const e2 = window.getComputedStyle(this.dom);
    let t = "";
    U(e2, (e3, i3) => {
      g(e3) && e3.match(/^font/) && (t += i3);
    });
    const i2 = t != this._fontHash;
    return i2 && (this._fontHash = t), i2;
  }
  _checkComputedStyles() {
    this._updateComputedStyles() && this._invalidateLabelBounds(this.container);
  }
  _invalidateLabelBounds(e2) {
    e2 instanceof ai ? e2.children.each((e3) => {
      this._invalidateLabelBounds(e3);
    }) : e2 instanceof ni && e2.markDirtyBounds();
  }
  _hasLicense() {
    for (let e2 = 0; e2 < Oe.licenses.length; e2++) if (Oe.licenses[e2].match(/^AM5C.{5,}/i)) return true;
    return false;
  }
  _licenseApplied() {
    this._logo && this._logo.set("forceHidden", true);
  }
  get debugGhostView() {
    return this._renderer.debugGhostView;
  }
  set debugGhostView(e2) {
    this._renderer.debugGhostView = e2;
  }
  set tapToActivate(e2) {
    this._renderer.tapToActivate = e2;
  }
  get tapToActivate() {
    return this._renderer.tapToActivate;
  }
  set tapToActivateTimeout(e2) {
    this._renderer.tapToActivateTimeout = e2;
  }
  get tapToActivateTimeout() {
    return this._renderer.tapToActivateTimeout;
  }
  _makeHTMLElement(e2) {
    const t = this._htmlElementContainer, i2 = document.createElement("div");
    return e2.setPrivate("htmlElement", i2), i2.style.position = "absolute", i2.style.overflow = "auto", i2.style.boxSizing = "border-box", dt(i2, e2.get("interactive", false)), e2.events.isEnabled("click") && (dt(i2, true), this._disposers.push(J(i2, "click", (t2) => {
      const i3 = this._renderer.getEvent(t2);
      e2.events.dispatch("click", { type: "click", originalEvent: i3.event, point: i3.point, simulated: false, target: e2 });
    }))), this._positionHTMLElement(e2), t.append(i2), S(this._htmlEnabledContainers, e2), i2;
  }
  _positionHTMLElements() {
    P(this._htmlEnabledContainers, (e2) => {
      this._positionHTMLElement(e2);
    });
  }
  _positionHTMLElement(e2) {
    const i2 = e2.getPrivate("htmlElement");
    if (i2) {
      P(["paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "minWidth", "minHeight", "maxWidth", "maxHeight"], (t) => {
        const r4 = e2.get(t);
        i2.style[t] = r4 ? r4 + "px" : "";
      });
      P(["fontFamily", "fontSize", "fontStyle", "fontWeight", "fontStyle", "fontVariant", "textDecoration"], (t) => {
        const r4 = e2.get(t);
        r4 ? "fontSize" != t || g(r4) ? i2.style[t] = r4 + "" : i2.style[t] = r4 + "px" : i2.style[t] = "";
      });
      const r3 = e2.compositeScale() || 1, a = e2.compositeRotation() || 0;
      i2.style.transform = "", i2.style.transformOrigin = "";
      const n2 = e2.compositeOpacity();
      setTimeout(() => {
        i2.style.opacity = n2 + "";
      }, 10);
      const o = e2.isVisibleDeep();
      o && (i2.style.display = "block");
      let l2 = { x: e2.x() + e2.get("dx", 0), y: e2.y() + e2.get("dy", 0) };
      e2.parent && (l2 = e2.parent.toGlobal(l2)), i2.style.top = l2.y + "px", i2.style.left = l2.x + "px";
      const h = e2.get("width"), u3 = e2.get("height");
      let c = 0, d = 0;
      if (h && (c = e2.width()), u3 && (d = e2.height()), !h || !u3) {
        i2.style.position = "fixed", i2.style.width = "", i2.style.height = "";
        const t = i2.getBoundingClientRect();
        i2.style.position = "absolute", h || (c = t.width), u3 || (d = t.height);
        let s2 = c / r3, a2 = d / r3, n3 = e2.get("centerX", 0), o2 = e2.get("centerY", 0), l3 = 0, b3 = 0, f3 = 0, g3 = 0;
        n3 instanceof e ? (l3 = -n3.value * s2, b3 = (1 - n3.value) * s2) : (l3 = -n3, b3 = s2 - n3), o2 instanceof e ? (f3 = -o2.value * a2, g3 = (1 - o2.value) * a2) : (f3 = -o2, g3 = a2 - o2), e2._localBounds = { left: l3, right: b3, top: f3, bottom: g3 };
        let p2 = e2._adjustedLocalBounds, m2 = e2._display.getAdjustedBounds(e2._localBounds);
        e2._adjustedLocalBounds = m2, p2.left === m2.left && p2.right === m2.right && p2.top === m2.top && p2.bottom === m2.bottom || e2.markDirtyBounds();
      }
      c > 0 && (i2.style.minWidth = c + "px"), d > 0 && (i2.style.minHeight = d + "px"), o && 0 != n2 || (i2.style.display = "none");
      const b2 = e2.get("centerX", 0), f2 = n(b2) ? b2.percent + "%" : b2 + "px", g2 = e2.get("centerY", 0), p = n(g2) ? g2.percent + "%" : g2 + "px";
      (b2 || g2) && (i2.style.transform = "translate(-" + f2 + ", -" + p + ")" + i2.style.transform), 1 != r3 && (i2.style.transform += "scale(" + r3 + ")"), 0 != a && (i2.style.transform += " rotate(" + a + "deg)"), "" != i2.style.transform && (i2.style.transformOrigin = f2 + " " + p);
    }
  }
  _setHTMLContent(e2, t) {
    let i2 = e2.getPrivate("htmlElement");
    i2 || (i2 = this._makeHTMLElement(e2)), i2.innerHTML != t && (i2.innerHTML = t);
  }
  _removeHTMLContent(e2) {
    let t = e2.getPrivate("htmlElement");
    t && (this._htmlElementContainer.removeChild(t), e2.removePrivate("htmlElement")), k(this._htmlEnabledContainers, e2);
  }
};
Te("AM5C241025748");
var Rt = "en-us";
var Ut = /* @__PURE__ */ new Map([["ar", () => import("./ar-CDOV22AV.js")], ["bg-bg", () => import("./bg_BG-3OX7PLLZ.js")], ["bs-ba", () => import("./bs_BA-PJBNH2I5.js")], ["ca-es", () => import("./ca_ES-5EFNXARU.js")], ["cs-cz", () => import("./cs_CZ-U5JOHWJL.js")], ["da-dk", () => import("./da_DK-C76M23WH.js")], ["de-de", () => import("./de_DE-CV6CFUGO.js")], ["de-ch", () => import("./de_CH-NYUXMVYM.js")], ["el-gr", () => import("./el_GR-6KOGTMEA.js")], ["en-us", () => import("./en_US-RW3QSQAW.js")], ["en-ca", () => import("./en_CA-GHYIN5MR.js")], ["es-es", () => import("./es_ES-BDJ6ON4V.js")], ["et-ee", () => import("./et_EE-IBHH5LZZ.js")], ["fi-fi", () => import("./fi_FI-LLFKKVAE.js")], ["fr-fr", () => import("./fr_FR-FLWY3RLX.js")], ["he-il", () => import("./he_IL-HFAGD5VG.js")], ["hr-hr", () => import("./hr_HR-2FV3CKJD.js")], ["hu-hu", () => import("./hu_HU-X6EPSZBT.js")], ["id-id", () => import("./id_ID-2OEIILWK.js")], ["it-it", () => import("./it_IT-5AOW3AK5.js")], ["ja-jp", () => import("./ja_JP-6GBLAFUW.js")], ["ko-kr", () => import("./ko_KR-PX2XLM7F.js")], ["lt-lt", () => import("./lt_LT-3RMZYTJQ.js")], ["lv-lv", () => import("./lv_LV-SNUSABR6.js")], ["no-no", () => import("./nb_NO-FDDIZRUA.js")], ["nb-no", () => import("./nb_NO-FDDIZRUA.js")], ["nl-nl", () => import("./nl_NL-4NFTHKOG.js")], ["pl-pl", () => import("./pl_PL-MIQPMIQU.js")], ["pt-br", () => import("./pt_BR-KB7FYEH2.js")], ["pt-pt", () => import("./pt_PT-X2KCZ6M2.js")], ["ro-ro", () => import("./ro_RO-LQGTCHEC.js")], ["ru-ru", () => import("./ru_RU-7RR4ITF2.js")], ["sk-sk", () => import("./sk_SK-2XFSDDLT.js")], ["sl-sl", () => import("./sl_SL-UU3AU3PL.js")], ["sr-rs", () => import("./sr_RS-ZYMIIVLD.js")], ["sv-se", () => import("./sv_SE-3VFLON2K.js")], ["th-th", () => import("./th_TH-WSB7NWNY.js")], ["tr-tr", () => import("./tr_TR-WOPZ4XEB.js")], ["uk-ua", () => import("./uk_UA-SY6QAXAL.js")], ["vi-vn", () => import("./vi_VN-VXNKBORB.js")], ["zh-cn", () => import("./zh_Hans-EBNMMZPI.js")], ["zh-hk", () => import("./zh_Hant-ITEX27BH.js")], ["zh-tw", () => import("./zh_Hant-ITEX27BH.js")]]);
function Wt(e2) {
  const t = e2.split("-")[0].toLowerCase();
  let i2 = null;
  for (const r3 of Ut.keys()) if (r3.startsWith(t)) {
    i2 = r3;
    break;
  }
  return i2;
}
function Vt(e2) {
  return e2 ? Ut.has(e2.toLowerCase()) ? e2.toLowerCase() : Wt(e2) || Rt : Rt;
}
async function Gt(e2, t = r()) {
  const i2 = It.new(e2);
  return i2.locale = (await Ut.get(Vt(t))()).default, i2;
}
export {
  Gt as createRoot
};
//# sourceMappingURL=chartUtilsAm5-UI4SI44P.js.map
