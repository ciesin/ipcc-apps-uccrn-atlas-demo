import {
  p
} from "./chunk-6REABBOQ.js";

// node_modules/@arcgis/core/layers/support/locationUtils.js
function n(n2, d, i) {
  var _a, _b;
  d = (_a = p(d)) == null ? void 0 : _a.toLowerCase(), i = (_b = p(i)) == null ? void 0 : _b.toLowerCase();
  const o = n2.map((e) => e.toLowerCase()), a = d ? n2[o.indexOf(d)] : null, u = i ? n2[o.indexOf(i)] : null;
  return { longitudeFieldName: a || n2[o.indexOf(t.find((e) => o.includes(e)))], latitudeFieldName: u || n2[o.indexOf(l.find((e) => o.includes(e)))] };
}
var l = ["lat", "lat83", "latitude", "latitude83", "latdecdeg", "lat_dd", "y", "ycenter", "point_y"];
var t = ["lon", "lng", "lng83", "long", "long83", "longitude", "longitude83", "longdecdeg", "long_dd", "x", "xcenter", "point_x"];

export {
  n
};
//# sourceMappingURL=chunk-XNEUYQNE.js.map
