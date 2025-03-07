import {
  DateTime,
  FixedOffsetZone,
  IANAZone,
  Zone
} from "./chunk-AIKBABBU.js";
import {
  r
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/core/sql/UnknownTimeZone.js
var o = class {
};
function e(n) {
  return n instanceof Zone ? n === o.instance : "unknown" === (n == null ? void 0 : n.toString().toLowerCase());
}
function r2(n) {
  return e(n) ? o.instance : n;
}
o.instance = new IANAZone("Etc/UTC");

// node_modules/@arcgis/core/arcade/ArcadeDate.js
var o2;
!function(e2) {
  e2.TimeZoneNotRecognized = "TimeZoneNotRecognized";
}(o2 || (o2 = {}));
var a = { [o2.TimeZoneNotRecognized]: "Timezone identifier has not been recognized." };
var d = class _d extends Error {
  constructor(t, n) {
    super(r(a[t], n)), this.declaredRootClass = "esri.arcade.arcadedate.dateerror", Error.captureStackTrace && Error.captureStackTrace(this, _d);
  }
};
function u(e2, t, n) {
  return e2 < t ? e2 - t : e2 > n ? e2 - n : 0;
}
function c(e2, t, n) {
  return e2 < t ? t : e2 > n ? n : e2;
}
var m = class _m {
  constructor(e2) {
    this._date = e2, this.declaredRootClass = "esri.arcade.arcadedate";
  }
  static fromParts(e2 = 0, t = 1, r3 = 1, s = 0, i = 0, o3 = 0, a2 = 0, d2) {
    if (isNaN(e2) || isNaN(t) || isNaN(r3) || isNaN(s) || isNaN(i) || isNaN(o3) || isNaN(a2)) return null;
    const l = DateTime.local(e2, t).daysInMonth;
    let f = DateTime.fromObject({ day: c(r3, 1, l), year: e2, month: c(t, 1, 12), hour: c(s, 0, 23), minute: c(i, 0, 59), second: c(o3, 0, 59), millisecond: c(a2, 0, 999) }, { zone: h(d2) });
    return f = f.plus({ months: u(t, 1, 12), days: u(r3, 1, l), hours: u(s, 0, 23), minutes: u(i, 0, 59), seconds: u(o3, 0, 59), milliseconds: u(a2, 0, 999) }), new _m(f);
  }
  static get systemTimeZoneCanonicalName() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone ?? "system";
  }
  static arcadeDateAndZoneToArcadeDate(e2, n) {
    const r3 = h(n);
    return e2.isUnknownTimeZone || r3 === o.instance ? _m.fromParts(e2.year, e2.monthJS + 1, e2.day, e2.hour, e2.minute, e2.second, e2.millisecond, r3) : new _m(e2._date.setZone(r3));
  }
  static dateJSToArcadeDate(e2) {
    return new _m(DateTime.fromJSDate(e2, { zone: "system" }));
  }
  static dateJSAndZoneToArcadeDate(e2, t = "system") {
    const r3 = h(t);
    return new _m(DateTime.fromJSDate(e2, { zone: r3 }));
  }
  static unknownEpochToArcadeDate(e2) {
    return new _m(DateTime.fromMillis(e2, { zone: o.instance }));
  }
  static unknownDateJSToArcadeDate(e2) {
    return new _m(DateTime.fromMillis(e2.getTime(), { zone: o.instance }));
  }
  static epochToArcadeDate(e2, t = "system") {
    const r3 = h(t);
    return new _m(DateTime.fromMillis(e2, { zone: r3 }));
  }
  static dateTimeToArcadeDate(e2) {
    return new _m(e2);
  }
  clone() {
    return new _m(this._date);
  }
  changeTimeZone(e2) {
    const t = h(e2);
    return _m.dateTimeToArcadeDate(this._date.setZone(t));
  }
  static dateTimeAndZoneToArcadeDate(e2, n) {
    const r3 = h(n);
    return e2.zone === o.instance || r3 === o.instance ? _m.fromParts(e2.year, e2.month, e2.day, e2.hour, e2.minute, e2.second, e2.millisecond, r3) : new _m(e2.setZone(r3));
  }
  static nowToArcadeDate(e2) {
    const t = h(e2);
    return new _m(DateTime.fromJSDate(/* @__PURE__ */ new Date(), { zone: t }));
  }
  static nowUTCToArcadeDate() {
    return new _m(DateTime.utc());
  }
  get isSystem() {
    return "system" === this.timeZone || this.timeZone === _m.systemTimeZoneCanonicalName;
  }
  equals(e2) {
    return this.isSystem && e2.isSystem ? this.toNumber() === e2.toNumber() : this.isUnknownTimeZone === e2.isUnknownTimeZone && this._date.equals(e2._date);
  }
  get isUnknownTimeZone() {
    return this._date.zone === o.instance;
  }
  get isValid() {
    return this._date.isValid;
  }
  get hour() {
    return this._date.hour;
  }
  get second() {
    return this._date.second;
  }
  get day() {
    return this._date.day;
  }
  get dayOfWeekISO() {
    return this._date.weekday;
  }
  get dayOfWeekJS() {
    let e2 = this._date.weekday;
    return e2 > 6 && (e2 = 0), e2;
  }
  get millisecond() {
    return this._date.millisecond;
  }
  get monthISO() {
    return this._date.month;
  }
  get weekISO() {
    return this._date.weekNumber;
  }
  get yearISO() {
    return this._date.weekYear;
  }
  get monthJS() {
    return this._date.month - 1;
  }
  get year() {
    return this._date.year;
  }
  get minute() {
    return this._date.minute;
  }
  get zone() {
    return this._date.zone;
  }
  get timeZoneOffset() {
    return this.isUnknownTimeZone ? 0 : this._date.offset;
  }
  get timeZone() {
    if (this.isUnknownTimeZone) return "unknown";
    if ("system" === this._date.zone.type) return "system";
    const e2 = this.zone;
    return "fixed" === e2.type ? 0 === e2.fixed ? "UTC" : e2.formatOffset(0, "short") : e2.name;
  }
  stringify() {
    return JSON.stringify(this.toJSDate());
  }
  plus(e2) {
    return new _m(this._date.plus(e2));
  }
  diff(e2, t = "milliseconds") {
    return this._date.diff(e2._date, t)[t];
  }
  toISODate() {
    return this._date.toISODate();
  }
  toISOString(e2) {
    return e2 ? this._date.toISO({ suppressMilliseconds: true, includeOffset: !this.isUnknownTimeZone }) : this._date.toISO({ includeOffset: !this.isUnknownTimeZone });
  }
  toISOTime(e2, t) {
    return this._date.toISOTime({ suppressMilliseconds: e2, includeOffset: t && !this.isUnknownTimeZone });
  }
  toFormat(e2, t) {
    return this.isUnknownTimeZone && (e2 = e2.replaceAll("Z", "")), this._date.toFormat(e2, t);
  }
  toJSDate() {
    return this._date.toJSDate();
  }
  toSQLValue() {
    return this._date.toFormat("yyyy-LL-dd HH:mm:ss");
  }
  toSQLWithKeyword() {
    return `timestamp '${this.toSQLValue()}'`;
  }
  toDateTime() {
    return this._date;
  }
  toNumber() {
    return this._date.toMillis();
  }
  getTime() {
    return this._date.toMillis();
  }
  toUTC() {
    return new _m(this._date.toUTC());
  }
  toLocal() {
    return new _m(this._date.toLocal());
  }
  toString() {
    return this.toISOString(true);
  }
  static fromReaderAsTimeStampOffset(e2) {
    if (!e2) return null;
    const t = DateTime.fromISO(e2, { setZone: true });
    return new _m(t);
  }
};
function h(e2, n = true) {
  if (e2 instanceof Zone) return e2;
  if ("system" === e2.toLowerCase()) return "system";
  if ("utc" === e2.toLowerCase()) return "UTC";
  if ("unknown" === e2.toLowerCase()) return o.instance;
  if (/^[+-]?[0-9]{1,2}([:][0-9]{2})?$/.test(e2)) {
    const t = FixedOffsetZone.parseSpecifier("UTC" + (e2.startsWith("+") || e2.startsWith("-") ? "" : "+") + e2);
    if (t) return t;
  }
  const a2 = IANAZone.create(e2);
  if (!a2.isValid) {
    if (n) throw new d(o2.TimeZoneNotRecognized);
    return null;
  }
  return a2;
}

export {
  o,
  e,
  r2 as r,
  m,
  h
};
//# sourceMappingURL=chunk-Y3AY7I5U.js.map
