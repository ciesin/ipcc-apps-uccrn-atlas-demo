import {
  $,
  s2 as s
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/rest/query/operations/editsZScale.js
function t(n, e, t2) {
  if (null == n.hasM || n.hasZ) for (const i2 of e) for (const n2 of i2) n2.length > 2 && (n2[2] *= t2);
}
function i(e, t2, i2) {
  if (!e && !t2 || !i2) return;
  const s3 = $(i2);
  o(e, i2, s3), o(t2, i2, s3);
}
function o(n, e, t2) {
  if (n) for (const i2 of n) s2(i2.geometry, e, t2);
}
function s2(i2, o2, s3) {
  if (!(i2 == null ? void 0 : i2.spatialReference) || s(i2.spatialReference, o2)) return;
  const f = $(i2.spatialReference) / s3;
  if (1 !== f) {
    if ("x" in i2) null != i2.z && (i2.z *= f);
    else if ("rings" in i2) t(i2, i2.rings, f);
    else if ("paths" in i2) t(i2, i2.paths, f);
    else if ("points" in i2 && (null == i2.hasM || i2.hasZ)) for (const n of i2.points) n.length > 2 && (n[2] *= f);
  }
}

export {
  i
};
//# sourceMappingURL=chunk-RKXU25GZ.js.map
