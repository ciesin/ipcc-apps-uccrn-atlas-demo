import {
  a,
  d
} from "./chunk-5YAYVSAD.js";

// node_modules/@arcgis/core/statistics/utils.js
var t = "<Null>";
var l = "equal-interval";
var i = 1;
var a2 = 5;
var o = 10;
var u = /\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi;
var r = /* @__PURE__ */ new Set(["esriFieldTypeDate", "esriFieldTypeInteger", "esriFieldTypeSmallInteger", "esriFieldTypeSingle", "esriFieldTypeDouble", "esriFieldTypeLong", "esriFieldTypeOID", "esriFieldTypeBigInteger"]);
var s = /* @__PURE__ */ new Set(["esriFieldTypeTimeOnly", "esriFieldTypeDateOnly"]);
var c = ["min", "max", "avg", "stddev", "count", "sum", "variance", "nullcount", "median"];
function m(e) {
  return null == e || "string" == typeof e && !e ? t : e;
}
function d2(e) {
  const n = null != e.normalizationField || null != e.normalizationType, t2 = null != e.minValue || null != e.maxValue, l2 = !!e.sqlExpression && e.supportsSQLExpression;
  return !n && !t2 && !l2;
}
function f(e) {
  var _a, _b;
  const { outStatisticTypes: n } = e, t2 = e.returnDistinct ? [...new Set(e.values)] : e.values, l2 = t2.filter((e2) => null != e2).sort(), i2 = l2.length, a3 = { count: i2, min: l2[0], max: l2[i2 - 1] };
  return e.supportsNullCount && (a3.nullcount = t2.length - i2), !e.percentileParams || ((_a = n == null ? void 0 : n.include) == null ? void 0 : _a.length) && !n.include.includes("median") || ((_b = n == null ? void 0 : n.exclude) == null ? void 0 : _b.length) && n.exclude.includes("median") || (a3.median = v(t2, e.percentileParams)), a3;
}
function p(e) {
  var _a, _b;
  const { values: n, useSampleStdDev: t2, supportsNullCount: l2, outStatisticTypes: i2 } = e;
  let a3 = Number.POSITIVE_INFINITY, o2 = Number.NEGATIVE_INFINITY, u2 = null, r2 = null, s2 = null, c2 = null, m2 = 0;
  const d3 = null == e.minValue ? -1 / 0 : e.minValue, f2 = null == e.maxValue ? 1 / 0 : e.maxValue;
  for (const v2 of n) Number.isFinite(v2) ? v2 >= d3 && v2 <= f2 && (u2 = null === u2 ? v2 : u2 + v2, a3 = Math.min(a3, v2), o2 = Math.max(o2, v2), m2++) : "string" == typeof v2 && m2++;
  if (m2 && null != u2) {
    r2 = u2 / m2;
    let e2 = 0;
    for (const t3 of n) Number.isFinite(t3) && t3 >= d3 && t3 <= f2 && (e2 += (t3 - r2) ** 2);
    c2 = t2 ? m2 > 1 ? e2 / (m2 - 1) : 0 : m2 > 0 ? e2 / m2 : 0, s2 = Math.sqrt(c2);
  } else a3 = null, o2 = null;
  const p2 = { avg: r2, count: m2, max: o2, min: a3, stddev: s2, sum: u2, variance: c2 };
  return l2 && (p2.nullcount = n.length - m2), !e.percentileParams || ((_a = i2 == null ? void 0 : i2.include) == null ? void 0 : _a.length) && !i2.include.includes("median") || ((_b = i2 == null ? void 0 : i2.exclude) == null ? void 0 : _b.length) && i2.exclude.includes("median") || (p2.median = v(n, e.percentileParams)), p2;
}
function v(e, n) {
  const { fieldType: t2, value: l2, orderBy: i2, isDiscrete: a3 } = n, o2 = g(t2, "desc" === i2);
  if (0 === (e = [...e].filter((e2) => null != e2).sort((e2, n2) => o2(e2, n2))).length) return null;
  if (l2 <= 0) return e[0];
  if (l2 >= 1) return e[e.length - 1];
  const u2 = (e.length - 1) * l2, r2 = Math.floor(u2), s2 = r2 + 1, c2 = u2 % 1, m2 = e[r2], d3 = e[s2];
  return s2 >= e.length || a3 || "string" == typeof m2 || "string" == typeof d3 ? m2 : m2 * (1 - c2) + d3 * c2;
}
function g(e, n) {
  if (e) {
    if (r.has(e)) return N(n);
    if (s.has(e)) return D(n, false);
    if ("esriFieldTypeTimestampOffset" === e) return F(n);
    const t3 = D(n, true);
    if ("esriFieldTypeString" === e) return t3;
    if ("esriFieldTypeGUID" === e || "esriFieldTypeGlobalID" === e) return (e2, n2) => t3(M(e2), M(n2));
  }
  const t2 = n ? 1 : -1, l2 = N(n), i2 = D(n, true), a3 = x(n);
  return (e2, n2) => "number" == typeof e2 && "number" == typeof n2 ? l2(e2, n2) : "string" == typeof e2 && "string" == typeof n2 ? i2(e2, n2) : a3(e2, n2) ?? t2;
}
var h = (e, n) => null == e ? null == n ? 0 : 1 : null == n ? -1 : null;
var T = (e, n) => null == e ? null == n ? 0 : -1 : null == n ? 1 : null;
function x(e) {
  return e ? h : T;
}
var y = (e, n) => T(e, n) ?? (e === n ? 0 : new Date(e).getTime() - new Date(n).getTime());
var V = (e, n) => h(e, n) ?? (e === n ? 0 : new Date(n).getTime() - new Date(e).getTime());
function F(e) {
  return e ? V : y;
}
var I = (e, n) => T(e, n) ?? (e === n ? 0 : e < n ? -1 : 1);
var b = (e, n) => h(e, n) ?? (e === n ? 0 : e < n ? 1 : -1);
function D(e, n) {
  if (!n) return e ? b : I;
  const t2 = x(e);
  return e ? (e2, n2) => {
    const l2 = t2(e2, n2);
    return null != l2 ? l2 : (e2 = e2.toUpperCase()) > (n2 = n2.toUpperCase()) ? -1 : e2 < n2 ? 1 : 0;
  } : (e2, n2) => {
    const l2 = t2(e2, n2);
    return null != l2 ? l2 : (e2 = e2.toUpperCase()) < (n2 = n2.toUpperCase()) ? -1 : e2 > n2 ? 1 : 0;
  };
}
var z = (e, n) => h(e, n) ?? n - e;
var S = (e, n) => T(e, n) ?? e - n;
function N(e) {
  return e ? z : S;
}
function M(e) {
  return e.slice(24, 36) + e.slice(19, 23) + e.slice(16, 18) + e.slice(14, 16) + e.slice(11, 13) + e.slice(9, 11) + e.slice(6, 8) + e.slice(4, 6) + e.slice(2, 4) + e.slice(0, 2);
}
function C(e, n, t2) {
  var _a, _b;
  let l2;
  for (l2 in e) ((_a = n == null ? void 0 : n.include) == null ? void 0 : _a.length) && !n.include.includes(l2) || ((_b = n == null ? void 0 : n.exclude) == null ? void 0 : _b.length) && n.exclude.includes(l2) ? delete e[l2] : c.includes(l2) && (Number.isFinite(e[l2]) || (e[l2] = null));
  return t2 ? (["avg", "stddev", "variance"].forEach((n2) => {
    null != e[n2] && (e[n2] = Math.ceil(e[n2] ?? 0));
  }), e) : e;
}
function k(e) {
  const n = {};
  for (let t2 of e) (null == t2 || "string" == typeof t2 && "" === t2.trim()) && (t2 = null), null == n[t2] ? n[t2] = { count: 1, data: t2 } : n[t2].count++;
  return { count: n };
}
function w(e) {
  return "coded-value" !== (e == null ? void 0 : e.type) ? [] : e.codedValues.map((e2) => e2.code);
}
function $(e, n, t2, l2) {
  const i2 = e.count, a3 = [];
  if (t2 && n) {
    const e2 = [], t3 = w(n[0]);
    for (const i3 of t3) if (n[1]) {
      const t4 = w(n[1]);
      for (const a4 of t4) if (n[2]) {
        const t5 = w(n[2]);
        for (const n2 of t5) e2.push(`${m(i3)}${l2}${m(a4)}${l2}${m(n2)}`);
      } else e2.push(`${m(i3)}${l2}${m(a4)}`);
    } else e2.push(i3);
    for (const n2 of e2) i2.hasOwnProperty(n2) || (i2[n2] = { data: n2, count: 0 });
  }
  for (const o2 in i2) {
    const e2 = i2[o2];
    a3.push({ value: e2.data, count: e2.count, label: e2.label });
  }
  return { uniqueValueInfos: a3 };
}
function B(e, n, t2, l2) {
  let i2 = null;
  switch (n) {
    case "log":
      0 !== e && (i2 = Math.log(e) * Math.LOG10E);
      break;
    case "percent-of-total":
      Number.isFinite(l2) && 0 !== l2 && (i2 = e / l2 * 100);
      break;
    case "field":
      Number.isFinite(t2) && 0 !== t2 && (i2 = e / t2);
      break;
    case "natural-log":
      e > 0 && (i2 = Math.log(e));
      break;
    case "square-root":
      e > 0 && (i2 = e ** 0.5);
  }
  return i2;
}
function E(e, t2, l2) {
  const i2 = q({ field: t2.field, normalizationType: t2.normalizationType, normalizationField: t2.normalizationField, classificationMethod: t2.classificationMethod, standardDeviationInterval: t2.standardDeviationInterval, definedInterval: t2.definedInterval, breakCount: t2.numClasses || a2 });
  return e = O(e, t2.minValue, t2.maxValue), a({ definition: i2, values: e, normalizationTotal: t2.normalizationTotal }, l2);
}
function O(e, n, t2) {
  const l2 = n ?? -1 / 0, i2 = t2 ?? 1 / 0;
  return e.filter((e2) => Number.isFinite(e2) && e2 >= l2 && e2 <= i2);
}
function q(n) {
  const { breakCount: t2, field: a3, normalizationField: o2, normalizationType: u2 } = n, r2 = n.classificationMethod || l, s2 = "standard-deviation" === r2 ? n.standardDeviationInterval || i : void 0, c2 = "defined-interval" === r2 ? n.definedInterval : void 0;
  return new d({ breakCount: t2, classificationField: a3, classificationMethod: r2, normalizationField: "field" === u2 ? o2 : void 0, normalizationType: u2, standardDeviationInterval: s2, definedInterval: c2 });
}
function P(e, n) {
  var _a, _b;
  let t2 = e.classBreaks;
  const l2 = t2.length, i2 = (_a = t2[0]) == null ? void 0 : _a.minValue, a3 = (_b = t2[l2 - 1]) == null ? void 0 : _b.maxValue, o2 = "standard-deviation" === n, r2 = u;
  return t2 = t2.map((e2) => {
    const n2 = e2.label, t3 = { minValue: e2.minValue, maxValue: e2.maxValue, label: n2 };
    if (o2 && n2) {
      const e3 = n2.match(r2), l3 = (e3 == null ? void 0 : e3.map((e4) => +e4.trim())) ?? [];
      2 === l3.length ? (t3.minStdDev = l3[0], t3.maxStdDev = l3[1], l3[0] < 0 && l3[1] > 0 && (t3.hasAvg = true)) : 1 === l3.length && (n2.includes("<") ? (t3.minStdDev = null, t3.maxStdDev = l3[0]) : n2.includes(">") && (t3.minStdDev = l3[0], t3.maxStdDev = null));
    }
    return t3;
  }), { minValue: i2, maxValue: a3, classBreakInfos: t2, normalizationTotal: e.normalizationTotal };
}
function U(e, n) {
  const t2 = G(e, n);
  if (null == t2.min && null == t2.max) return { bins: [], minValue: t2.min, maxValue: t2.max, normalizationTotal: n.normalizationTotal };
  const l2 = t2.intervals, i2 = t2.min ?? 0, a3 = t2.max ?? 0, o2 = l2.map((e2, n2) => ({ minValue: l2[n2][0], maxValue: l2[n2][1], count: 0 }));
  for (const u2 of e) if (null != u2 && u2 >= i2 && u2 <= a3) {
    const e2 = L(l2, u2);
    e2 > -1 && o2[e2].count++;
  }
  return { bins: o2, minValue: i2, maxValue: a3, normalizationTotal: n.normalizationTotal };
}
function G(e, n, t2 = false) {
  var _a, _b;
  const { field: l2, classificationMethod: i2, standardDeviationInterval: a3, definedInterval: u2, normalizationType: r2, normalizationField: s2, normalizationTotal: c2, minValue: m2, maxValue: f2 } = n, v2 = n.numBins || o;
  let g2 = null, h2 = null, T2 = null;
  if ((!i2 || "equal-interval" === i2) && !r2) {
    if (null != m2 && null != f2) g2 = m2, h2 = f2;
    else {
      const n2 = p({ values: e, minValue: m2, maxValue: f2, useSampleStdDev: !r2, supportsNullCount: d2({ normalizationType: r2, normalizationField: s2, minValue: m2, maxValue: f2 }) });
      g2 = n2.min ?? null, h2 = n2.max ?? null;
    }
    T2 = j(g2 ?? 0, h2 ?? 0, v2);
  } else {
    const { classBreaks: n2 } = E(e, { field: l2, normalizationType: r2, normalizationField: s2, normalizationTotal: c2, classificationMethod: i2, standardDeviationInterval: a3, definedInterval: u2, minValue: m2, maxValue: f2, numClasses: v2 }, null != m2 && null != f2 ? [m2, f2] : void 0);
    g2 = (_a = n2[0]) == null ? void 0 : _a.minValue, h2 = (_b = n2[n2.length - 1]) == null ? void 0 : _b.maxValue, T2 = n2.map((e2) => [e2.minValue, e2.maxValue]);
  }
  if (t2) {
    const e2 = T2.at(-1)[1];
    T2.push([e2, e2]);
  }
  return { min: g2, max: h2, intervals: T2 };
}
function L(e, n) {
  let t2 = -1;
  for (let l2 = e.length - 1; l2 >= 0; l2--) {
    if (n >= e[l2][0]) {
      t2 = l2;
      break;
    }
  }
  return t2;
}
function j(e, n, t2) {
  const l2 = (n - e) / t2, i2 = [];
  let a3, o2 = e;
  for (let u2 = 1; u2 <= t2; u2++) a3 = o2 + l2, a3 = Number(a3.toFixed(16)), i2.push([o2, u2 === t2 ? n : a3]), o2 = a3;
  return i2;
}

export {
  c,
  m,
  d2 as d,
  f,
  p,
  v,
  g,
  C,
  k,
  $,
  B,
  E,
  q,
  P,
  U,
  G,
  L,
  j
};
//# sourceMappingURL=chunk-HY3PTUEL.js.map
