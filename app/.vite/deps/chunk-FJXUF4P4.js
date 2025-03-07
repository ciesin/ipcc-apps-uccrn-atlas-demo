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

// node_modules/@arcgis/core/rest/query/operations/queryTopFeatures.js
var u = "Layer does not support extent calculation.";
function y(t3, e) {
  var _a, _b;
  const r = t3.geometry, o = t3.toJSON(), s = o;
  if (null != r && (s.geometry = JSON.stringify(r), s.geometryType = v(r), s.inSR = c(r.spatialReference)), ((_a = o.topFilter) == null ? void 0 : _a.groupByFields) && (s.topFilter.groupByFields = o.topFilter.groupByFields.join(",")), ((_b = o.topFilter) == null ? void 0 : _b.orderByFields) && (s.topFilter.orderByFields = o.topFilter.orderByFields.join(",")), o.topFilter && (s.topFilter = JSON.stringify(s.topFilter)), o.objectIds && (s.objectIds = o.objectIds.join(",")), o.orderByFields && (s.orderByFields = o.orderByFields.join(",")), o.outFields && !((e == null ? void 0 : e.returnCountOnly) || (e == null ? void 0 : e.returnExtentOnly) || (e == null ? void 0 : e.returnIdsOnly)) ? o.outFields.includes("*") ? s.outFields = "*" : s.outFields = o.outFields.join(",") : delete s.outFields, o.outSR ? s.outSR = c(o.outSR) : r && o.returnGeometry && (s.outSR = s.inSR), o.returnGeometry && delete o.returnGeometry, o.timeExtent) {
    const t4 = o.timeExtent, { start: e2, end: r2 } = t4;
    null == e2 && null == r2 || (s.time = e2 === r2 ? e2 : `${e2 ?? "null"},${r2 ?? "null"}`), delete o.timeExtent;
  }
  return s;
}
async function p(t3, e, r, n) {
  const o = await a(t3, e, "json", n);
  return t(e, r, o.data), o;
}
async function m(t3, e, r) {
  return null != e.timeExtent && e.timeExtent.isEmpty ? { data: { objectIds: [] } } : a(t3, e, "json", r, { returnIdsOnly: true });
}
async function d(t3, e, r) {
  return null != e.timeExtent && e.timeExtent.isEmpty ? { data: { count: 0, extent: null } } : a(t3, e, "json", r, { returnExtentOnly: true, returnCountOnly: true }).then((t4) => {
    const e2 = t4.data;
    if (e2.hasOwnProperty("extent")) return t4;
    if (e2.features) throw new Error(u);
    if (e2.hasOwnProperty("count")) throw new Error(u);
    return t4;
  });
}
function c2(t3, e, r) {
  return null != e.timeExtent && e.timeExtent.isEmpty ? Promise.resolve({ data: { count: 0 } }) : a(t3, e, "json", r, { returnIdsOnly: true, returnCountOnly: true });
}
function a(n, i, l, u2 = {}, p2 = {}) {
  const m2 = "string" == typeof n ? I(n) : n, d2 = i.geometry ? [i.geometry] : [];
  return u2.responseType = "json", R(d2, null, u2).then((e) => {
    const n2 = e == null ? void 0 : e[0];
    null != n2 && ((i = i.clone()).geometry = n2);
    const o = t2({ ...m2.query, f: l, ...p2, ...y(i, p2) });
    return P(V(m2.path, "queryTopFeatures"), { ...u2, query: { ...o, ...u2.query } });
  });
}

export {
  p,
  m,
  d,
  c2 as c
};
//# sourceMappingURL=chunk-FJXUF4P4.js.map
