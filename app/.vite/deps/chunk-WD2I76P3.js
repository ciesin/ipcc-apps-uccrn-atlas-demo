import {
  C,
  V,
  c
} from "./chunk-MYUL4ERJ.js";
import {
  I
} from "./chunk-RDJPXK25.js";
import {
  B,
  j,
  x
} from "./chunk-6X7CIA5N.js";
import {
  R
} from "./chunk-67XXGAOA.js";
import {
  f
} from "./chunk-WZBMMIVS.js";
import {
  s2 as s
} from "./chunk-LTDNORB5.js";
import {
  l3 as l
} from "./chunk-M6FNW7GP.js";
import {
  a
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/graphics/data/executeQueryForSnapping.js
async function u(c2, u2, y) {
  const d = l(y), { point: x2, distance: g, returnEdge: R2, vertexMode: j2 } = u2;
  if (!R2 && "none" === j2) return { candidates: [] };
  let w = a(u2.query);
  w = await c2.schedule(() => B(w, c2.definitionExpression, c2.spatialReference), d), w = await c2.reschedule(() => c(w, { availableFields: c2.availableFields, fieldsIndex: c2.fieldsIndex, geometryType: c2.geometryType, spatialReference: c2.spatialReference }), d);
  const h = !s(x2.spatialReference, c2.spatialReference);
  h && await x(x2.spatialReference, c2.spatialReference);
  const b = "number" == typeof g ? g : g.x, Q = "number" == typeof g ? g : g.y, S = { xmin: x2.x - b, xmax: x2.x + b, ymin: x2.y - Q, ymax: x2.y + Q, spatialReference: x2.spatialReference }, U = h ? j(S, c2.spatialReference) : S;
  if (!U) return { candidates: [] };
  const q = (await R(f(x2), null, { signal: d }))[0], E = (await R(f(U), null, { signal: d }))[0];
  if (null == q || null == E) return { candidates: [] };
  const F = new C(await c2.reschedule(() => c2.searchFeatures(V(E.toJSON())), d), w, c2);
  await c2.reschedule(() => c2.executeObjectIdsQuery(F), d), await c2.reschedule(() => c2.executeTimeQuery(F), d), await c2.reschedule(() => c2.executeAttributesQuery(F), d), await c2.reschedule(() => f2(c2, F, d), d);
  const T = q.toJSON(), v = h ? j(T, c2.spatialReference) : T, I2 = h ? Math.max(U.xmax - U.xmin, U.ymax - U.ymin) / 2 : g;
  return F.createSnappingResponse({ ...u2, point: v, distance: I2 }, x2.spatialReference);
}
async function f2(e, t, r) {
  var _a;
  const { query: a2 } = t, { spatialRel: i } = a2;
  if (!((_a = t == null ? void 0 : t.items) == null ? void 0 : _a.length) || !a2.geometry || !i) return;
  const s2 = await I(i, a2.geometry, e.geometryType, e.hasZ, e.hasM), n = await e.runSpatialFilter(t.items, (e2) => s2(e2.geometry), r);
  t.items = n;
}

export {
  u
};
//# sourceMappingURL=chunk-WD2I76P3.js.map
