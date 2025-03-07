import {
  B,
  C,
  D,
  H
} from "./chunk-A4LAIXK6.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/views/2d/arcade/callExpressionWithFeature.js
function s2(e, t, o, n2, a) {
  if (null == e) return null;
  const s3 = e.references("geometry") && a ? i(t, n2, a) : t, u2 = e.repurposeFeature(s3);
  try {
    return e.evaluate({ ...o, $feature: u2 }, e.services);
  } catch (c2) {
    return n.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:", c2), null;
  }
}
var u = /* @__PURE__ */ new Map();
function i(e, r, t) {
  const { transform: o, hasZ: n2, hasM: a } = t;
  u.has(r) || u.set(r, c(r));
  const s3 = u.get(r)(e.geometry, o, n2, a);
  return { ...e, geometry: s3 };
}
function c(s3) {
  const u2 = {};
  switch (s3) {
    case "esriGeometryPoint":
      return (e, r, t, o) => C(r, u2, e, t, o);
    case "esriGeometryPolygon":
      return (e, r, t, o) => D(r, u2, e, t, o);
    case "esriGeometryPolyline":
      return (e, r, t, n2) => H(r, u2, e, t, n2);
    case "esriGeometryMultipoint":
      return (e, r, o, n2) => B(r, u2, e, o, n2);
    default:
      return n.getLogger("esri.views.2d.support.arcadeOnDemand").error(new s("mapview-arcade", `Unable to handle geometryType: ${s3}`)), (e) => e;
  }
}

export {
  s2 as s
};
//# sourceMappingURL=chunk-S75M4NUB.js.map
