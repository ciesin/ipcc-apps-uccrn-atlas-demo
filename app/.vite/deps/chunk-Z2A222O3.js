import {
  h,
  m
} from "./chunk-Y3AY7I5U.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  DateTime,
  FixedOffsetZone
} from "./chunk-AIKBABBU.js";
import {
  r
} from "./chunk-A42OBC4U.js";

// node_modules/@arcgis/core/core/sql/DateOnly.js
function o(t) {
  t = t.replaceAll(/LTS|LT|L{1,4}|l{1,4}/g, "[$&]");
  let e = "";
  const a = /(\[[^[]*\])|(\\)?([Hh]mm(ss)?|Mo|M{1,4}|Do|DDDo|D{1,4}|d{2,4}|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
  for (const r3 of t.match(a) || []) switch (r3) {
    case "D":
      e += "d";
      break;
    case "DD":
      e += "dd";
      break;
    case "DDD":
      e += "o";
      break;
    case "d":
      e += "c";
      break;
    case "ddd":
      e += "ccc";
      break;
    case "dddd":
      e += "cccc";
      break;
    case "M":
      e += "L";
      break;
    case "MM":
      e += "LL";
      break;
    case "MMM":
      e += "LLL";
      break;
    case "MMMM":
      e += "LLLL";
      break;
    case "YY":
      e += "yy";
      break;
    case "Y":
    case "YYYY":
      e += "yyyy";
      break;
    case "Q":
      e += "q";
      break;
    case "X":
    case "x":
      e += r3;
      break;
    default:
      r3.length >= 2 && "[" === r3.slice(0, 1) && "]" === r3.slice(-1) ? e += `'${r3.slice(1, -1)}'` : e += `'${r3}'`;
  }
  return e;
}
var n = "esri.core.sql.dateonly";
var i = class _i {
  constructor(t, e, a) {
    this._year = t, this._month = e, this._day = a, this.declaredRootClass = n;
  }
  static isDateOnly(t) {
    return "object" == typeof t && null != t && "declaredRootClass" in t && t.declaredRootClass === n;
  }
  get month() {
    return this._month;
  }
  get monthJS() {
    return this._month - 1;
  }
  get year() {
    return this._year;
  }
  get day() {
    return this._day;
  }
  get isValid() {
    return this.toDateTime("unknown").isValid;
  }
  equals(t) {
    return _i.isDateOnly(t) && t.day === this.day && t.month === this.month && t.year === this.year;
  }
  clone() {
    return new _i(this._year, this._month, this._day);
  }
  toDateTime(e) {
    return DateTime.fromObject({ day: this.day, month: this.month, year: this.year }, { zone: h(e) });
  }
  toDateTimeLuxon(e) {
    return DateTime.fromObject({ day: this.day, month: this.month, year: this.year }, { zone: h(e) });
  }
  toString() {
    return `${this.year.toString().padStart(4, "0")}-${this.month.toString().padStart(2, "0")}-${this.day.toString().padStart(2, "0")}`;
  }
  toFormat(t = null, r3 = true) {
    if (null === t || "" === t) return this.toString();
    if (r3 && (t = o(t)), !t) return "";
    const s = this.toDateTime("unknown");
    return m.dateTimeToArcadeDate(s).toFormat(t, { locale: r(), numberingSystem: "latn" });
  }
  toArcadeDate() {
    const t = this.toDateTime("unknown");
    return m.dateTimeToArcadeDate(t);
  }
  toNumber() {
    return this.toDateTime("unknown").toMillis();
  }
  toJSDate() {
    return this.toDateTime("unknown").toJSDate();
  }
  toStorageFormat() {
    return this.toFormat("yyyy-LL-dd", false);
  }
  toSQLValue() {
    return this.toFormat("yyyy-LL-dd", false);
  }
  toSQLWithKeyword() {
    return "date '" + this.toFormat("yyyy-LL-dd", false) + "'";
  }
  plus(t, e) {
    return _i.fromDateTime(this.toUTCDateTime().plus({ [t]: e }));
  }
  toUTCDateTime() {
    return DateTime.utc(this.year, this.month, this.day, 0, 0, 0, 0);
  }
  difference(t, e) {
    switch (e.toLowerCase()) {
      case "days":
      case "day":
      case "d":
        return this.toUTCDateTime().diff(t.toUTCDateTime(), "days").days;
      case "months":
      case "month":
        return this.toUTCDateTime().diff(t.toUTCDateTime(), "months").months;
      case "minutes":
      case "minute":
      case "m":
        return "M" === e ? this.toUTCDateTime().diff(t.toUTCDateTime(), "months").months : this.toUTCDateTime().diff(t.toUTCDateTime(), "minutes").minutes;
      case "seconds":
      case "second":
      case "s":
        return this.toUTCDateTime().diff(t.toUTCDateTime(), "seconds").seconds;
      case "milliseconds":
      case "millisecond":
      case "ms":
      default:
        return this.toUTCDateTime().diff(t.toUTCDateTime(), "milliseconds").milliseconds;
      case "hours":
      case "hour":
      case "h":
        return this.toUTCDateTime().diff(t.toUTCDateTime(), "hours").hours;
      case "years":
      case "year":
      case "y":
        return this.toUTCDateTime().diff(t.toUTCDateTime(), "years").years;
    }
  }
  static fromMilliseconds(t) {
    const e = DateTime.fromMillis(t, { zone: FixedOffsetZone.utcInstance });
    return e.isValid ? _i.fromParts(e.year, e.month, e.day) : null;
  }
  static fromSeconds(t) {
    const e = DateTime.fromSeconds(t, { zone: FixedOffsetZone.utcInstance });
    return e.isValid ? _i.fromParts(e.year, e.month, e.day) : null;
  }
  static fromReader(t) {
    if (!t) return null;
    const e = t.split("-");
    return 3 !== e.length ? null : new _i(parseInt(e[0], 10), parseInt(e[1], 10), parseInt(e[2], 10));
  }
  static fromParts(t, e, a) {
    const r3 = new _i(t, e, a);
    return false === r3.isValid ? null : r3;
  }
  static fromDateJS(t) {
    return _i.fromParts(t.getFullYear(), t.getMonth() + 1, t.getDay());
  }
  static fromDateTime(t) {
    return _i.fromParts(t.year, t.month, t.day);
  }
  static fromSqlTimeStampOffset(t) {
    return this.fromDateTime(t.toDateTime());
  }
  static fromString(t, e = null) {
    if ("" === t) return null;
    if (null === t) return null;
    const a = [];
    if (e) (e = o(e)) && a.push(e);
    else if (null === e || "" === e) {
      const e2 = DateTime.fromISO(t, { setZone: true });
      return e2.isValid ? _i.fromParts(e2.year, e2.month, e2.day) : null;
    }
    for (const s of a) {
      const a2 = DateTime.fromFormat(t, e ?? s);
      if (a2.isValid) return new _i(a2.year, a2.month, a2.day);
    }
    return null;
  }
  static fromNow(e = "system") {
    const a = DateTime.fromJSDate(/* @__PURE__ */ new Date()).setZone(h(e));
    return new _i(a.year, a.month, a.day);
  }
};

// node_modules/@arcgis/core/arcade/kernel.js
function n2(n4) {
  if (null == n4) return null;
  switch (n4.type) {
    case "polygon":
    case "multipoint":
    case "polyline":
      return n4.extent;
    case "point":
      return new w({ xmin: n4.x, ymin: n4.y, xmax: n4.x, ymax: n4.y, spatialReference: n4.spatialReference });
    case "extent":
      return n4;
  }
  return null;
}
function o2(e) {
  if (null == e) return null;
  const n4 = e.clone();
  return void 0 !== e.cache._geVersion && (n4.cache._geVersion = e.cache._geVersion), n4;
}
function i2(e) {
  return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
}

// node_modules/@arcgis/core/core/sql/TimeOnly.js
function i3(t) {
  if (!t) return "";
  const s = /(a|A|hh?|HH?|mm?|ss?|SSS|S|.)/g;
  let e = "";
  for (const i4 of t.match(s) || []) switch (i4) {
    case "SSS":
    case "m":
    case "mm":
    case "h":
    case "hh":
    case "H":
    case "HH":
    case "s":
    case "ss":
      e += i4;
      break;
    case "A":
    case "a":
      e += "a";
      break;
    default:
      e += `'${i4}'`;
  }
  return e;
}
var n3 = "esri.core.sql.timeonly";
var r2 = class _r {
  constructor(t, s, e, i4) {
    this._hour = t, this._minute = s, this._second = e, this._millisecond = i4, this.declaredRootClass = n3;
  }
  static isTimeOnly(t) {
    return "object" == typeof t && null != t && "declaredRootClass" in t && t.declaredRootClass === n3;
  }
  get hour() {
    return this._hour;
  }
  get minute() {
    return this._minute;
  }
  get second() {
    return this._second;
  }
  get millisecond() {
    return this._millisecond;
  }
  equals(t) {
    return _r.isTimeOnly(t) && t.hour === this.hour && t.minute === this.minute && t.second === this.second && t.millisecond === this.millisecond;
  }
  clone() {
    return new _r(this.hour, this.minute, this.second, this.millisecond);
  }
  isValid() {
    return i2(this.hour) && i2(this.minute) && i2(this.second) && i2(this.millisecond) && this.hour >= 0 && this.hour < 24 && this.minute >= 0 && this.minute < 60 && this.second >= 0 && this.second < 60 && this.millisecond >= 0 && this.millisecond < 1e3;
  }
  toString() {
    return `${this.hour.toString().padStart(2, "0")}:${this.minute.toString().padStart(2, "0")}:${this.second.toString().padStart(2, "0")}` + (this.millisecond > 0 ? "." + this.millisecond.toString().padStart(3, "0") : "");
  }
  toSQLValue() {
    return this.toString();
  }
  toSQLWithKeyword() {
    return `time '${this.hour.toString().padStart(2, "0")}:${this.minute.toString().padStart(2, "0")}:${this.second.toString().padStart(2, "0")}${this.millisecond > 0 ? "." + this.millisecond.toString().padStart(3, "0") : ""}'`;
  }
  toStorageString() {
    return `${this.hour.toString().padStart(2, "0")}:${this.minute.toString().padStart(2, "0")}:${this.second.toString().padStart(2, "0")}`;
  }
  toFormat(t = null) {
    if (null === t || "" === t) return this.toString();
    if (!(t = i3(t))) return "";
    return DateTime.local(1970, 1, 1, this._hour, this._minute, this._second, this._millisecond).toFormat(t, { locale: r(), numberingSystem: "latn" });
  }
  toNumber() {
    return this.millisecond + 1e3 * this.second + 1e3 * this.minute * 60 + 60 * this.hour * 60 * 1e3;
  }
  static fromParts(t, s, e, i4) {
    const n4 = new _r(t, s, e, i4);
    return n4.isValid() ? n4 : null;
  }
  static fromReader(t) {
    if (!t) return null;
    const s = t.split(":");
    return 3 !== s.length ? null : new _r(parseInt(s[0], 10), parseInt(s[1], 10), parseInt(s[2], 10), 0);
  }
  static fromMilliseconds(t) {
    if (t > 864e5 || t < 0) return null;
    const s = Math.floor(t / 1e3 % 60), e = Math.floor(t / 6e4 % 60), i4 = Math.floor(t / 36e5 % 24), n4 = Math.floor(t % 1e3);
    return new _r(i4, e, s, n4);
  }
  static fromDateJS(t) {
    return new _r(t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds());
  }
  static fromDateTime(t) {
    return new _r(t.hour, t.minute, t.second, t.millisecond);
  }
  static fromSqlTimeStampOffset(t) {
    return this.fromDateTime(t.toDateTime());
  }
  static fromString(t, s = null) {
    if ("" === t) return null;
    if (null === t) return null;
    const n4 = [];
    s ? (s = i3(s)) && n4.push(s) : null !== s && "" !== s || (n4.push("HH:mm:ss"), n4.push("HH:mm:ss.SSS"), n4.push("hh:mm:ss a"), n4.push("hh:mm:ss.SSS a"), n4.push("HH:mm"), n4.push("hh:mm a"), n4.push("H:mm"), n4.push("h:mm a"), n4.push("H:mm:ss"), n4.push("h:mm:ss a"), n4.push("H:mm:ss.SSS"), n4.push("h:mm:ss.SSS a"));
    for (const i4 of n4) {
      const s2 = DateTime.fromFormat(t, i4);
      if (s2.isValid) return new _r(s2.hour, s2.minute, s2.second, s2.millisecond);
    }
    return null;
  }
  plus(t, s) {
    switch (t) {
      case "days":
      case "years":
      case "months":
        return this.clone();
      case "hours":
      case "minutes":
      case "seconds":
      case "milliseconds":
        return _r.fromDateTime(this.toUTCDateTime().plus({ [t]: s }));
    }
    return null;
  }
  toUTCDateTime() {
    return DateTime.utc(1970, 1, 1, this.hour, this.minute, this.second, this.millisecond);
  }
  difference(t, s) {
    switch (s.toLowerCase()) {
      case "days":
      case "day":
      case "d":
        return this.toUTCDateTime().diff(t.toUTCDateTime(), "days").days;
      case "months":
      case "month":
        return this.toUTCDateTime().diff(t.toUTCDateTime(), "months").months;
      case "minutes":
      case "minute":
      case "m":
        return "M" === s ? this.toUTCDateTime().diff(t.toUTCDateTime(), "months").months : this.toUTCDateTime().diff(t.toUTCDateTime(), "minutes").minutes;
      case "seconds":
      case "second":
      case "s":
        return this.toUTCDateTime().diff(t.toUTCDateTime(), "seconds").seconds;
      case "milliseconds":
      case "millisecond":
      case "ms":
      default:
        return this.toUTCDateTime().diff(t.toUTCDateTime(), "milliseconds").milliseconds;
      case "hours":
      case "hour":
      case "h":
        return this.toUTCDateTime().diff(t.toUTCDateTime(), "hours").hours;
      case "years":
      case "year":
      case "y":
        return this.toUTCDateTime().diff(t.toUTCDateTime(), "years").years;
    }
  }
};

export {
  i,
  n2 as n,
  o2 as o,
  r2 as r
};
//# sourceMappingURL=chunk-Z2A222O3.js.map
