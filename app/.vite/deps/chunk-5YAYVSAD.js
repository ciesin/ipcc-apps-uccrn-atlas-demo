import {
  r as r2
} from "./chunk-ZYOZHQFS.js";
import {
  o
} from "./chunk-WE4EKKVR.js";
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
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/rest/support/ClassBreaksDefinition.js
var a2 = new o({ esriClassifyEqualInterval: "equal-interval", esriClassifyManual: "manual", esriClassifyNaturalBreaks: "natural-breaks", esriClassifyQuantile: "quantile", esriClassifyStandardDeviation: "standard-deviation", esriClassifyDefinedInterval: "defined-interval" });
var n2 = new o({ esriNormalizeByLog: "log", esriNormalizeByPercentOfTotal: "percent-of-total", esriNormalizeByField: "field" });
var l = class extends S {
  constructor(e) {
    super(e), this.type = "class-breaks-definition", this.breakCount = null, this.classificationField = null, this.classificationMethod = null, this.normalizationField = null, this.normalizationType = null;
  }
  set standardDeviationInterval(e) {
    "standard-deviation" === this.classificationMethod && this._set("standardDeviationInterval", e);
  }
  set definedInterval(e) {
    "defined-interval" === this.classificationMethod && this._set("definedInterval", e);
  }
};
r([r2({ classBreaksDef: "class-breaks-definition" })], l.prototype, "type", void 0), r([m({ json: { write: true } })], l.prototype, "breakCount", void 0), r([m({ json: { write: true } })], l.prototype, "classificationField", void 0), r([m({ type: String, json: { read: a2.read, write: a2.write } })], l.prototype, "classificationMethod", void 0), r([m({ json: { write: true } })], l.prototype, "normalizationField", void 0), r([m({ json: { read: n2.read, write: n2.write } })], l.prototype, "normalizationType", void 0), r([m({ value: null, json: { write: true } })], l.prototype, "standardDeviationInterval", null), r([m({ value: null, json: { write: true } })], l.prototype, "definedInterval", null), l = r([a("esri.rest.support.ClassBreaksDefinition")], l);
var d = l;

// node_modules/@arcgis/core/rest/support/generateRendererUtils.js
var t = () => n.getLogger("esri.rest.support.generateRendererUtils");
function l2(e, t2) {
  return Number(e.toFixed(t2));
}
function n3(e) {
  const t2 = o2(e), l3 = [], n4 = t2.uniqueValues.length;
  for (let a4 = 0; a4 < n4; a4++) {
    const e2 = t2.uniqueValues[a4], n5 = t2.valueFrequency[a4], u2 = e2.toString();
    l3.push({ value: e2, count: n5, label: u2 });
  }
  return { uniqueValues: l3 };
}
function a3(e, t2) {
  const { normalizationTotal: l3 } = e;
  return { classBreaks: u(e, t2), normalizationTotal: l3 };
}
function u(e, t2) {
  const n4 = e.definition, { classificationMethod: a4, normalizationType: u2, definedInterval: i2 } = n4, c2 = n4.breakCount ?? 1, b2 = [];
  let V = e.values;
  if (0 === V.length) return [];
  V = V.sort((e2, t3) => e2 - t3);
  const [p, g] = t2 ?? [V.at(0), V.at(-1)];
  if ("equal-interval" === a4) if (V.length >= c2) {
    const e2 = (g - p) / c2;
    let t3 = p;
    for (let n5 = 1; n5 < c2; n5++) {
      const a5 = l2(p + n5 * e2, 6);
      b2.push({ minValue: t3, maxValue: a5, label: s(t3, a5, u2) }), t3 = a5;
    }
    b2.push({ minValue: t3, maxValue: g, label: s(t3, g, u2) });
  } else V.forEach((e2) => {
    b2.push({ minValue: e2, maxValue: e2, label: s(e2, e2, u2) });
  });
  else if ("natural-breaks" === a4) {
    const t3 = o2(V), n5 = e.valueFrequency || t3.valueFrequency, a5 = r3(t3.uniqueValues, n5, c2);
    let i3 = p;
    for (let e2 = 1; e2 < c2; e2++) if (t3.uniqueValues.length > e2) {
      const n6 = l2(t3.uniqueValues[a5[e2]], 6);
      b2.push({ minValue: i3, maxValue: n6, label: s(i3, n6, u2) }), i3 = n6;
    }
    b2.push({ minValue: i3, maxValue: g, label: s(i3, g, u2) });
  } else if ("quantile" === a4) if (V.length >= c2 && p !== g) {
    let e2 = p, t3 = Math.ceil(V.length / c2), l3 = 0;
    for (let n5 = 1; n5 < c2; n5++) {
      let a5 = t3 + l3 - 1;
      a5 > V.length && (a5 = V.length - 1), a5 < 0 && (a5 = 0), b2.push({ minValue: e2, maxValue: V[a5], label: s(e2, V[a5], u2) }), e2 = V[a5], l3 += t3, t3 = Math.ceil((V.length - l3) / (c2 - n5));
    }
    b2.push({ minValue: e2, maxValue: g, label: s(e2, g, u2) });
  } else {
    let e2 = -1;
    for (let t3 = 0; t3 < V.length; t3++) {
      const l3 = V[t3];
      l3 !== e2 && (e2 = l3, b2.push({ minValue: e2, maxValue: l3, label: s(e2, l3, u2) }), e2 = l3);
    }
  }
  else if ("standard-deviation" === a4) {
    const e2 = h(V), t3 = m2(V, e2);
    if (0 === t3) b2.push({ minValue: V[0], maxValue: V[0], label: s(V[0], V[0], u2) });
    else {
      const n5 = f(p, g, c2, e2, t3) * t3;
      let a5 = 0, o3 = p;
      for (let t4 = c2; t4 >= 1; t4--) {
        const r5 = l2(e2 - (t4 - 0.5) * n5, 6);
        b2.push({ minValue: o3, maxValue: r5, label: s(o3, r5, u2) }), o3 = r5, a5++;
      }
      let r4 = l2(e2 + 0.5 * n5, 6);
      b2.push({ minValue: o3, maxValue: r4, label: s(o3, r4, u2) }), o3 = r4, a5++;
      for (let t4 = 1; t4 <= c2; t4++) r4 = a5 === 2 * c2 ? g : l2(e2 + (t4 + 0.5) * n5, 6), b2.push({ minValue: o3, maxValue: r4, label: s(o3, r4, u2) }), o3 = r4, a5++;
    }
  } else if ("defined-interval" === a4) {
    if (!i2) return b2;
    const [e2, n5] = t2 ?? [V.at(0), V.at(-1)], a5 = Math.ceil((n5 - e2) / i2);
    let o3 = e2;
    for (let t3 = 1; t3 < a5; t3++) {
      const n6 = l2(e2 + t3 * i2, 6);
      b2.push({ minValue: o3, maxValue: n6, label: s(o3, n6, u2) }), o3 = n6;
    }
    b2.push({ minValue: o3, maxValue: n5, label: s(o3, n5, u2) });
  }
  return b2;
}
function s(e, t2, l3) {
  let n4 = null;
  return n4 = e === t2 ? l3 && "percent-of-total" === l3 ? e + "%" : e.toString() : l3 && "percent-of-total" === l3 ? e + "% - " + t2 + "%" : e + " - " + t2, n4;
}
function o2(e) {
  const t2 = [], l3 = [];
  let n4 = Number.MIN_VALUE, a4 = 1, u2 = -1;
  for (let s2 = 0; s2 < e.length; s2++) {
    const o3 = e[s2];
    o3 === n4 ? (a4++, l3[u2] = a4) : null !== o3 && (t2.push(o3), n4 = o3, a4 = 1, l3.push(a4), u2++);
  }
  return { uniqueValues: t2, valueFrequency: l3 };
}
function r3(e, t2, l3) {
  const n4 = e.length, a4 = [];
  l3 > n4 && (l3 = n4);
  for (let s2 = 0; s2 < l3; s2++) a4.push(Math.round(s2 * n4 / l3 - 1));
  a4.push(n4 - 1);
  let u2 = i(a4, e, t2, l3);
  return c(u2.mean, u2.sdcm, a4, e, t2, l3) && (u2 = i(a4, e, t2, l3)), a4;
}
function i(e, t2, l3, n4) {
  let a4 = [], u2 = [], s2 = [], o3 = 0;
  const r4 = [], i2 = [];
  for (let m3 = 0; m3 < n4; m3++) {
    const n5 = b(m3, e, t2, l3);
    r4.push(n5.sbMean), i2.push(n5.sbSdcm), o3 += i2[m3];
  }
  let c2, f2 = o3, h2 = true;
  for (; h2 || o3 < f2; ) {
    h2 = false, a4 = [];
    for (let t3 = 0; t3 < n4; t3++) a4.push(e[t3]);
    for (let l4 = 0; l4 < n4; l4++) for (let a5 = e[l4] + 1; a5 <= e[l4 + 1]; a5++) if (c2 = t2[a5], l4 > 0 && a5 !== e[l4 + 1] && Math.abs(c2 - r4[l4]) > Math.abs(c2 - r4[l4 - 1])) e[l4] = a5;
    else if (l4 < n4 - 1 && e[l4] !== a5 - 1 && Math.abs(c2 - r4[l4]) > Math.abs(c2 - r4[l4 + 1])) {
      e[l4 + 1] = a5 - 1;
      break;
    }
    f2 = o3, o3 = 0, u2 = [], s2 = [];
    for (let a5 = 0; a5 < n4; a5++) {
      u2.push(r4[a5]), s2.push(i2[a5]);
      const n5 = b(a5, e, t2, l3);
      r4[a5] = n5.sbMean, i2[a5] = n5.sbSdcm, o3 += i2[a5];
    }
  }
  if (o3 > f2) {
    for (let t3 = 0; t3 < n4; t3++) e[t3] = a4[t3], r4[t3] = u2[t3], i2[t3] = s2[t3];
    o3 = f2;
  }
  return { mean: r4, sdcm: i2 };
}
function c(e, t2, l3, n4, a4, u2) {
  let s2 = 0, o3 = 0, r4 = 0, i2 = 0, c2 = true;
  for (let f2 = 0; f2 < 2 && c2; f2++) {
    0 === f2 && (c2 = false);
    for (let f3 = 0; f3 < u2 - 1; f3++) for (; l3[f3 + 1] + 1 !== l3[f3 + 2]; ) {
      l3[f3 + 1] = l3[f3 + 1] + 1;
      const u3 = b(f3, l3, n4, a4);
      r4 = u3.sbMean, s2 = u3.sbSdcm;
      const h2 = b(f3 + 1, l3, n4, a4);
      if (i2 = h2.sbMean, o3 = h2.sbSdcm, !(s2 + o3 < t2[f3] + t2[f3 + 1])) {
        l3[f3 + 1] = l3[f3 + 1] - 1;
        break;
      }
      t2[f3] = s2, t2[f3 + 1] = o3, e[f3] = r4, e[f3 + 1] = i2, c2 = true;
    }
    for (let f3 = u2 - 1; f3 > 0; f3--) for (; l3[f3] !== l3[f3 - 1] + 1; ) {
      l3[f3] = l3[f3] - 1;
      const u3 = b(f3 - 1, l3, n4, a4);
      r4 = u3.sbMean, s2 = u3.sbSdcm;
      const h2 = b(f3, l3, n4, a4);
      if (i2 = h2.sbMean, o3 = h2.sbSdcm, !(s2 + o3 < t2[f3 - 1] + t2[f3])) {
        l3[f3] = l3[f3] + 1;
        break;
      }
      t2[f3 - 1] = s2, t2[f3] = o3, e[f3 - 1] = r4, e[f3] = i2, c2 = true;
    }
  }
  return c2;
}
function f(e, t2, l3, n4, a4) {
  let u2 = Math.max(n4 - e, t2 - n4) / a4 / l3;
  return u2 = u2 >= 1 ? 1 : u2 >= 0.5 ? 0.5 : 0.25, u2;
}
function h(e) {
  let t2 = 0;
  for (let l3 = 0; l3 < e.length; l3++) t2 += e[l3];
  return t2 /= e.length, t2;
}
function m2(e, t2) {
  let l3 = 0;
  for (let n4 = 0; n4 < e.length; n4++) {
    const a4 = e[n4];
    l3 += (a4 - t2) * (a4 - t2);
  }
  l3 /= e.length;
  return Math.sqrt(l3);
}
function b(e, l3, n4, a4) {
  let u2 = 0, s2 = 0;
  for (let t2 = l3[e] + 1; t2 <= l3[e + 1]; t2++) {
    const e2 = a4[t2];
    u2 += n4[t2] * e2, s2 += e2;
  }
  s2 <= 0 && t().warn("Exception in Natural Breaks calculation");
  const o3 = u2 / s2;
  let r4 = 0;
  for (let t2 = l3[e] + 1; t2 <= l3[e + 1]; t2++) r4 += a4[t2] * (n4[t2] - o3) ** 2;
  return { sbMean: o3, sbSdcm: r4 };
}

export {
  d,
  n3 as n,
  a3 as a
};
//# sourceMappingURL=chunk-5YAYVSAD.js.map
