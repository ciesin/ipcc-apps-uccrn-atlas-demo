import {
  y
} from "./chunk-WZBMMIVS.js";
import {
  P
} from "./chunk-W633AKTD.js";
import {
  g
} from "./chunk-RDUV6YP6.js";

// node_modules/@arcgis/core/geometry/support/normalizeUtilsCommon.js
var r = { 102100: { maxX: 20037508342788905e-9, minX: -20037508342788905e-9, plus180Line: new P({ paths: [[[20037508342788905e-9, -20037508342788905e-9], [20037508342788905e-9, 20037508342788905e-9]]], spatialReference: g.WebMercator }), minus180Line: new P({ paths: [[[-20037508342788905e-9, -20037508342788905e-9], [-20037508342788905e-9, 20037508342788905e-9]]], spatialReference: g.WebMercator }) }, 4326: { maxX: 180, minX: -180, plus180Line: new P({ paths: [[[180, -180], [180, 180]]], spatialReference: g.WGS84 }), minus180Line: new P({ paths: [[[-180, -180], [-180, 180]]], spatialReference: g.WGS84 }) } };
function i(e, n) {
  return Math.ceil((e - n) / (2 * n));
}
function s(e, n) {
  const t = o(e);
  for (const r2 of t) for (const e2 of r2) e2[0] += n;
  return e;
}
function o(e) {
  return y(e) ? e.rings : e.paths;
}

export {
  r,
  i,
  s,
  o
};
//# sourceMappingURL=chunk-4TZUFQZG.js.map
