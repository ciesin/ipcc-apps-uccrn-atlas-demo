import {
  e,
  n,
  o,
  t
} from "./chunk-UNGOQUF2.js";
import {
  DateTime
} from "./chunk-AIKBABBU.js";
import {
  p,
  r
} from "./chunk-A42OBC4U.js";
import {
  i
} from "./chunk-WE4EKKVR.js";

// node_modules/@arcgis/core/intl/date.js
var s2 = { year: void 0, month: void 0, day: void 0, weekday: void 0 };
var l = { hour: void 0, minute: void 0, second: void 0 };
var y = { timeZone: n };
var d = { year: "numeric", month: "numeric", day: "numeric" };
var g = { year: "numeric", month: "long", day: "numeric" };
var u = { year: "numeric", month: "short", day: "numeric" };
var c = { year: "numeric", month: "long", weekday: "long", day: "numeric" };
var D = { hour: "numeric", minute: "numeric" };
var T = { ...D, second: "numeric" };
var f = { hourCycle: "h23" };
var S = { ...D, ...f };
var L = { ...T, ...f };
var M = { "short-date": d, "short-date-short-time": { ...d, ...D }, "short-date-short-time-24": { ...d, ...S }, "short-date-long-time": { ...d, ...T }, "short-date-long-time-24": { ...d, ...L }, "short-date-le": d, "short-date-le-short-time": { ...d, ...D }, "short-date-le-short-time-24": { ...d, ...S }, "short-date-le-long-time": { ...d, ...T }, "short-date-le-long-time-24": { ...d, ...L }, "long-month-day-year": g, "long-month-day-year-short-time": { ...g, ...D }, "long-month-day-year-short-time-24": { ...g, ...S }, "long-month-day-year-long-time": { ...g, ...T }, "long-month-day-year-long-time-24": { ...g, ...L }, "day-short-month-year": u, "day-short-month-year-short-time": { ...u, ...D }, "day-short-month-year-short-time-24": { ...u, ...S }, "day-short-month-year-long-time": { ...u, ...T }, "day-short-month-year-long-time-24": { ...u, ...L }, "long-date": c, "long-date-short-time": { ...c, ...D }, "long-date-short-time-24": { ...c, ...S }, "long-date-long-time": { ...c, ...T }, "long-date-long-time-24": { ...c, ...L }, "long-month-year": { month: "long", year: "numeric" }, "short-month-year": { month: "short", year: "numeric" }, year: { year: "numeric" }, "short-time": D, "long-time": T };
var Y = i()({ shortDate: "short-date", shortDateShortTime: "short-date-short-time", shortDateShortTime24: "short-date-short-time-24", shortDateLongTime: "short-date-long-time", shortDateLongTime24: "short-date-long-time-24", shortDateLE: "short-date-le", shortDateLEShortTime: "short-date-le-short-time", shortDateLEShortTime24: "short-date-le-short-time-24", shortDateLELongTime: "short-date-le-long-time", shortDateLELongTime24: "short-date-le-long-time-24", longMonthDayYear: "long-month-day-year", longMonthDayYearShortTime: "long-month-day-year-short-time", longMonthDayYearShortTime24: "long-month-day-year-short-time-24", longMonthDayYearLongTime: "long-month-day-year-long-time", longMonthDayYearLongTime24: "long-month-day-year-long-time-24", dayShortMonthYear: "day-short-month-year", dayShortMonthYearShortTime: "day-short-month-year-short-time", dayShortMonthYearShortTime24: "day-short-month-year-short-time-24", dayShortMonthYearLongTime: "day-short-month-year-long-time", dayShortMonthYearLongTime24: "day-short-month-year-long-time-24", longDate: "long-date", longDateShortTime: "long-date-short-time", longDateShortTime24: "long-date-short-time-24", longDateLongTime: "long-date-long-time", longDateLongTime24: "long-date-long-time-24", longMonthYear: "long-month-year", shortMonthYear: "short-month-year", year: "year" });
var Z = { ar: "ar-u-nu-latn-ca-gregory" };
var w = /* @__PURE__ */ new WeakMap();
var p2 = M["short-date-short-time"];
function v(t2) {
  let e2 = w.get(t2);
  if (!e2) {
    const n2 = r(), a = Z[n2] || n2, m = F(t2.timeZone ?? e), h = { ...t2, timeZone: m };
    e2 = new Intl.DateTimeFormat(a, h), w.set(t2, e2);
  }
  return e2;
}
function j(t2) {
  return M[t2];
}
function E(t2, e2 = p2) {
  return v(e2).format(t2);
}
function k(t2, e2 = p2) {
  return E(new Date(t2), { ...e2, ...y, ...l });
}
function I(t2, e2 = p2) {
  return E(/* @__PURE__ */ new Date(`1970-01-01T${t2}Z`), { ...e2, ...y, ...s2 });
}
function x(t2, e2 = p2) {
  if (e2.timeZone) return E(new Date(t2), e2);
  const r2 = DateTime.fromISO(t2, { setZone: true }), a = r(), m = Z[a] ?? a, h = 0 === r2.offset ? n : e2.timeZone, s3 = { ...e2, timeZone: h };
  return r2.toLocaleString(s3, { locale: m });
}
function F(t2) {
  switch (t2) {
    case e:
      return o;
    case t:
      return n;
    default:
      return t2;
  }
}
p(() => {
  w = /* @__PURE__ */ new WeakMap();
});

export {
  Y,
  j,
  E,
  k,
  I,
  x,
  F
};
//# sourceMappingURL=chunk-REAPFM7O.js.map
