import {
  F
} from "./chunk-REAPFM7O.js";
import {
  e
} from "./chunk-UNGOQUF2.js";
import {
  DateTime,
  IANAZone
} from "./chunk-AIKBABBU.js";

// node_modules/@arcgis/core/core/timeUtils.js
var r = { milliseconds: 1, seconds: 1e3, minutes: 6e4, hours: 36e5, days: 864e5, weeks: 6048e5, months: 26784e5, years: 31536e6, decades: 31536e7, centuries: 31536e8 };
function o(r2, o2, i2, c2 = e) {
  const u = new IANAZone(F(c2)), a = DateTime.fromJSDate(r2, { zone: u }), l = "decades" === i2 || "centuries" === i2 ? "year" : T(i2);
  return "decades" === i2 && (o2 *= 10), "centuries" === i2 && (o2 *= 100), a.plus({ [l]: o2 }).toJSDate();
}
function i(e2, t, n = "milliseconds") {
  const s = e2.getTime(), r2 = m(t, n, "milliseconds");
  return new Date(s + r2);
}
function c(r2, o2, i2 = e) {
  const c2 = new IANAZone(F(i2)), u = DateTime.fromJSDate(r2, { zone: c2 });
  if ("decades" === o2 || "centuries" === o2) {
    const e2 = u.startOf("year"), { year: t } = e2, n = t - t % ("decades" === o2 ? 10 : 100);
    return e2.set({ year: n }).toJSDate();
  }
  const a = T(o2);
  return u.startOf(a).toJSDate();
}
function m(e2, t, n) {
  if (0 === e2) return 0;
  return e2 * r[t] / r[n];
}
function g(e2, t) {
  return e2 && t ? e2.intersection(t) : e2 || t;
}
function T(e2) {
  switch (e2) {
    case "milliseconds":
      return "millisecond";
    case "seconds":
      return "second";
    case "minutes":
      return "minute";
    case "hours":
      return "hour";
    case "days":
      return "day";
    case "weeks":
      return "week";
    case "months":
      return "month";
    case "years":
      return "year";
  }
}

export {
  r,
  o,
  i,
  c,
  m,
  g
};
//# sourceMappingURL=chunk-HP7OWCUK.js.map
