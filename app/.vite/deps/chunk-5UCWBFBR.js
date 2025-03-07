import {
  t as t3
} from "./chunk-22F4IMT5.js";
import {
  t as t2
} from "./chunk-TSDCR4OY.js";
import {
  R
} from "./chunk-67XXGAOA.js";
import {
  t
} from "./chunk-DMXES2BK.js";
import {
  v
} from "./chunk-WZBMMIVS.js";
import {
  c
} from "./chunk-LTDNORB5.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  I,
  V
} from "./chunk-F7TCEOHX.js";

// node_modules/@arcgis/core/rest/query/operations/query.js
var s = "Layer does not support extent calculation.";
function m(t4, e) {
  if (e && "extent" === t4.type) return `${t4.xmin},${t4.ymin},${t4.xmax},${t4.ymax}`;
  if (e && "point" === t4.type) return `${t4.x},${t4.y}`;
  const n = t4.toJSON();
  return delete n.spatialReference, JSON.stringify(n);
}
function y(t4, e) {
  var _a;
  const n = t4.geometry, i = t4.toJSON();
  delete i.compactGeometryEnabled, delete i.defaultSpatialReferenceEnabled;
  const o = i;
  let u, l, s2;
  if (null != n && (l = n.spatialReference, s2 = c(l), o.geometryType = v(n), o.geometry = m(n, t4.compactGeometryEnabled), o.inSR = s2), i.groupByFieldsForStatistics && (o.groupByFieldsForStatistics = i.groupByFieldsForStatistics.join(",")), i.objectIds && (o.objectIds = i.objectIds.join(",")), i.orderByFields && (o.orderByFields = i.orderByFields.join(",")), !i.outFields || !i.returnDistinctValues && ((e == null ? void 0 : e.returnCountOnly) || (e == null ? void 0 : e.returnExtentOnly) || (e == null ? void 0 : e.returnIdsOnly)) ? delete o.outFields : i.outFields.includes("*") ? o.outFields = "*" : o.outFields = i.outFields.join(","), i.outSR ? (o.outSR = c(i.outSR), u = t4.outSpatialReference) : n && (i.returnGeometry || i.returnCentroid) && (o.outSR = o.inSR, u = l), i.returnGeometry && delete i.returnGeometry, i.outStatistics && (o.outStatistics = JSON.stringify(i.outStatistics)), i.fullText && (o.fullText = JSON.stringify(i.fullText)), i.pixelSize && (o.pixelSize = JSON.stringify(i.pixelSize)), i.quantizationParameters && (t4.defaultSpatialReferenceEnabled && null != l && null != ((_a = t4.quantizationParameters) == null ? void 0 : _a.extent) && l.equals(t4.quantizationParameters.extent.spatialReference) && delete i.quantizationParameters.extent.spatialReference, o.quantizationParameters = JSON.stringify(i.quantizationParameters)), i.parameterValues && (o.parameterValues = JSON.stringify(i.parameterValues)), i.rangeValues && (o.rangeValues = JSON.stringify(i.rangeValues)), i.dynamicDataSource && (o.layer = JSON.stringify({ source: i.dynamicDataSource }), delete i.dynamicDataSource), i.timeExtent) {
    const t5 = i.timeExtent, { start: e2, end: n2 } = t5;
    null == e2 && null == n2 || (o.time = e2 === n2 ? e2 : `${e2 ?? "null"},${n2 ?? "null"}`), delete i.timeExtent;
  }
  return t4.defaultSpatialReferenceEnabled && null != l && null != u && l.equals(u) && (o.defaultSR = o.inSR, delete o.inSR, delete o.outSR), o;
}
async function c2(t4, e, n, r) {
  const i = null != e.timeExtent && e.timeExtent.isEmpty ? { data: { features: [] } } : await E(t4, e, "json", r);
  return t(e, n, i.data), i;
}
async function f(t4, e, n, r) {
  if (null != e.timeExtent && e.timeExtent.isEmpty) return { data: n.createFeatureResult() };
  const i = await d(t4, e, r), a = i;
  return a.data = t3(i.data, n), a;
}
function d(t4, e, n) {
  return E(t4, e, "pbf", n);
}
function p(t4, e, n) {
  return null != e.timeExtent && e.timeExtent.isEmpty ? Promise.resolve({ data: { objectIds: [] } }) : E(t4, e, "json", n, { returnIdsOnly: true });
}
function S(t4, e, n) {
  return null != e.timeExtent && e.timeExtent.isEmpty ? Promise.resolve({ data: { count: 0 } }) : E(t4, e, "json", n, { returnIdsOnly: true, returnCountOnly: true });
}
async function x(t4, e, n) {
  if (null != e.timeExtent && e.timeExtent.isEmpty) return { data: { count: 0, extent: null } };
  const r = await E(t4, e, "json", n, { returnExtentOnly: true, returnCountOnly: true }), i = r.data;
  if (i.hasOwnProperty("extent")) return r;
  if (i.features) throw new Error(s);
  if (i.hasOwnProperty("count")) throw new Error(s);
  return r;
}
async function E(r, a, u, l = {}, s2 = {}) {
  const m2 = "string" == typeof r ? I(r) : r, c3 = a.geometry ? [a.geometry] : [], f2 = await R(c3, null, { signal: l.signal }), d2 = f2 == null ? void 0 : f2[0];
  null != d2 && ((a = a.clone()).geometry = d2);
  const p2 = t2({ ...m2.query, f: u, ...s2, ...y(a, s2) });
  return P(V(m2.path, g(a, s2) ? "query3d" : "query"), { ...l, responseType: "pbf" === u ? "array-buffer" : "json", query: { ...p2, ...l.query } });
}
function g(t4, e) {
  return null != t4.formatOf3DObjects && !(e.returnCountOnly || e.returnExtentOnly || e.returnIdsOnly);
}

export {
  c2 as c,
  f,
  d,
  p,
  S,
  x
};
//# sourceMappingURL=chunk-5UCWBFBR.js.map
