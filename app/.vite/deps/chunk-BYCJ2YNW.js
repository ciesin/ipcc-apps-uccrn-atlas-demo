import {
  b,
  w,
  x
} from "./chunk-QPYSCM2R.js";
import {
  $,
  C,
  E,
  P,
  U,
  d,
  f,
  k,
  p
} from "./chunk-HY3PTUEL.js";

// node_modules/@arcgis/core/smartMapping/statistics/support/statsWorker.js
async function d2(a) {
  const { attribute: e, features: s } = a, { normalizationType: r, normalizationField: m, minValue: u, maxValue: f2, fieldType: d3, outStatisticTypes: p3 } = e, c2 = await b({ field: e.field, valueExpression: e.valueExpression, normalizationType: r, normalizationField: m, normalizationTotal: e.normalizationTotal, viewInfoParams: e.viewInfoParams, timeZone: e.timeZone, fieldInfos: e.fieldInfos }, s), v2 = d({ normalizationType: r, normalizationField: m, minValue: u, maxValue: f2 }), z2 = { value: 0.5, fieldType: d3 }, T = "esriFieldTypeString" === d3 ? f({ values: c2, supportsNullCount: v2, percentileParams: z2, outStatisticTypes: p3 }) : p({ values: c2, minValue: u, maxValue: f2, useSampleStdDev: !r, supportsNullCount: v2, percentileParams: z2, outStatisticTypes: p3 });
  return C(T, p3, "esriFieldTypeDate" === d3);
}
async function p2(a) {
  const { attribute: e, features: n } = a, t = await b({ field: e.field, field2: e.field2, field3: e.field3, fieldDelimiter: e.fieldDelimiter, valueExpression: e.valueExpression, viewInfoParams: e.viewInfoParams, timeZone: e.timeZone, fieldInfos: e.fieldInfos }, n, false), o = k(t);
  return $(o, e.domains, e.returnAllCodedValues, e.fieldDelimiter);
}
async function c(a) {
  const { attribute: e, features: n } = a, { field: t, normalizationType: o, normalizationField: l, normalizationTotal: s, classificationMethod: r } = e, f2 = await b({ field: t, valueExpression: e.valueExpression, normalizationType: o, normalizationField: l, normalizationTotal: s, viewInfoParams: e.viewInfoParams, timeZone: e.timeZone, fieldInfos: e.fieldInfos }, n), d3 = E(f2, { field: t, normalizationType: o, normalizationField: l, normalizationTotal: s, classificationMethod: r, standardDeviationInterval: e.standardDeviationInterval, numClasses: e.numClasses, minValue: e.minValue, maxValue: e.maxValue });
  return P(d3, r);
}
async function v(a) {
  const { attribute: e, features: n } = a, { field: t, normalizationType: o, normalizationField: l, normalizationTotal: s, classificationMethod: r } = e, m = await b({ field: t, valueExpression: e.valueExpression, normalizationType: o, normalizationField: l, normalizationTotal: s, viewInfoParams: e.viewInfoParams, timeZone: e.timeZone, fieldInfos: e.fieldInfos }, n);
  return U(m, { field: t, normalizationType: o, normalizationField: l, normalizationTotal: s, classificationMethod: r, standardDeviationInterval: e.standardDeviationInterval, numBins: e.numBins, minValue: e.minValue, maxValue: e.maxValue });
}
async function z(i) {
  const { attribute: n, features: t } = i, { field: o, radius: l, transform: s, spatialReference: r } = n, m = n.size ?? [0, 0], u = x(t ?? [], s, r, m);
  return w(u, l ?? void 0, o, m[0], m[1]);
}

export {
  d2 as d,
  p2 as p,
  c,
  v,
  z
};
//# sourceMappingURL=chunk-BYCJ2YNW.js.map
