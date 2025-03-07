import {
  n
} from "./chunk-FXK4JVMZ.js";
import {
  Fe,
  Ie,
  Se,
  Ue,
  ge,
  ve
} from "./chunk-6REABBOQ.js";
import {
  N
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/layers/graphics/sources/support/sourceUtils.js
var u = class {
  constructor() {
    this.code = null, this.description = null;
  }
};
var a = class {
  constructor(t) {
    this.error = new u(), this.globalId = null, this.objectId = null, this.success = false, this.uniqueId = null, this.error.description = t;
  }
};
function p(t) {
  return new a(t);
}
var c = class {
  constructor(t) {
    this.globalId = null, this.success = true, this.objectId = this.uniqueId = t;
  }
};
function f(t) {
  return new c(t);
}
var d = /* @__PURE__ */ new Set();
function g(t, e, o, i = false) {
  d.clear();
  for (const s in o) {
    const l = t.get(s);
    if (!l) continue;
    const u2 = m(l, o[s]);
    if (d.add(l.name), l && (i || l.editable)) {
      const t2 = Se(l, u2);
      if (t2) return p(Ue(t2, l, u2));
      e[l.name] = u2;
    }
  }
  for (const n2 of t.requiredFields ?? []) if (!d.has(n2.name)) return p(`missing required field "${n2.name}"`);
  return null;
}
function m(e, n2) {
  let r = n2;
  return ge(e) && "string" == typeof n2 ? r = parseFloat(n2) : Fe(e) && null != n2 && "string" != typeof n2 ? r = String(n2) : Ie(e) && "string" == typeof n2 && (r = n(n2)), ve(r);
}
var y;
function h(t, n2) {
  if (!t || !N(n2)) return t;
  if ("rings" in t || "paths" in t) {
    if (null == y) throw new TypeError("geometry engine not loaded");
    return y.simplify(n2, t);
  }
  return t;
}
async function I() {
  return null == y && (y = await import("./geometryEngineJSON-LBL23444.js")), y;
}
async function E(t, n2) {
  !N(t) || "esriGeometryPolygon" !== n2 && "esriGeometryPolyline" !== n2 || await I();
}
var S = { supportsAutoIntervalBin: true, supportsFixedIntervalBin: true, supportsFixedBoundariesBin: true, supportsDateBin: true, supportsStackBy: true, supportsSplitBy: true, supportsNormalization: true, supportedStatisticTypes: ["COUNT", "SUM", "AVG", "VAR", "STDDEV", "MIN", "MAX", "PERCENTILE_CONT", "PERCENTILE_DISC", "CentroidAggregate", "EnvelopeAggregate", "ConvexHullAggregate"], supportedNormalizationTypes: ["field", "log", "naturalLog", "percentOfTotal", "squareRoot"] };

export {
  p,
  f,
  g,
  h,
  E,
  S
};
//# sourceMappingURL=chunk-YG5V2HGZ.js.map
