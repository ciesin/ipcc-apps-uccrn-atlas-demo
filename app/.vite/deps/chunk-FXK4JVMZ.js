// node_modules/@arcgis/core/core/date.js
function e(e2) {
  return null != r(e2) || null != u(e2);
}
function t(e2) {
  return s.test(e2);
}
function n(e2) {
  return r(e2) ?? u(e2);
}
function u(e2) {
  const t2 = new Date(e2);
  return o(t2, e2) ? Number.isNaN(t2.getTime()) ? null : t2.getTime() - 6e4 * t2.getTimezoneOffset() : null;
}
function r(e2) {
  const t2 = s.exec(e2);
  if (!(t2 == null ? void 0 : t2.groups)) return null;
  const n2 = t2.groups, u2 = +n2.year, r2 = +n2.month - 1, o2 = +n2.day, i2 = +(n2.hours ?? "0"), f2 = +(n2.minutes ?? "0"), l = +(n2.seconds ?? "0");
  if (i2 > 23) return null;
  if (f2 > 59) return null;
  if (l > 59) return null;
  const c = n2.ms ?? "0", m = c ? +c.padEnd(3, "0").slice(0, 3) : 0;
  let a;
  if (n2.isUTC || !n2.offsetSign) a = Date.UTC(u2, r2, o2, i2, f2, l, m);
  else {
    const e3 = +n2.offsetHours, t3 = +n2.offsetMinutes;
    a = 6e4 * ("+" === n2.offsetSign ? -1 : 1) * (60 * e3 + t3) + Date.UTC(u2, r2, o2, i2, f2, l, m);
  }
  return Number.isNaN(a) ? null : a;
}
var s = /^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;
function o(e2, t2) {
  if (Number.isNaN(e2.getTime())) return false;
  let n2 = true;
  if (f && /\d+\W*$/.test(t2)) {
    const e3 = t2.match(/[a-zA-Z]{2,}/);
    if (e3) {
      let t3 = false, u2 = 0;
      for (; !t3 && u2 <= e3.length; ) t3 = !i.test(e3[u2]), u2++;
      n2 = !t3;
    }
  }
  return n2;
}
var i = /^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i;
var f = !Number.isNaN((/* @__PURE__ */ new Date("technology 10")).getTime());

export {
  e,
  t,
  n
};
//# sourceMappingURL=chunk-FXK4JVMZ.js.map
