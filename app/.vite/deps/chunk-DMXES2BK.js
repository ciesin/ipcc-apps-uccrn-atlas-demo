import {
  o
} from "./chunk-YFLBSX2D.js";

// node_modules/@arcgis/core/rest/query/operations/queryZScale.js
function t(t2, o2, r) {
  if (!(r == null ? void 0 : r.features) || !r.hasZ) return;
  const f = o(r.geometryType, o2, t2.outSpatialReference);
  if (null != f) for (const e of r.features) f(e.geometry);
}

export {
  t
};
//# sourceMappingURL=chunk-DMXES2BK.js.map
