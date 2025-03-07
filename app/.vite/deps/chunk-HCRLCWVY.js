import {
  v
} from "./chunk-PFFYYIYN.js";

// node_modules/@arcgis/core/views/3d/interactive/editingTools/isSupportedObjectUtils.js
function E(E2) {
  switch (E2) {
    case P.SUPPORTED:
      break;
    case P.GRAPHICS_LAYER_MISSING:
      return "not owned by a graphics layer";
    case P.GEOMETRY_MISSING:
      return "no geometry";
    case P.GEOMETRY_TYPE_UNSUPPORTED:
      return "the geometry type is not supported";
    case P.ELEVATION_MODE_UNSUPPORTED:
      return "the elevation mode is not supported";
    case P.SYMBOL_TYPE_UNSUPPORTED:
      return "the symbol type is not supported";
  }
  return "";
}
var P;
!function(E2) {
  E2[E2.SUPPORTED = 0] = "SUPPORTED", E2[E2.GRAPHICS_LAYER_MISSING = 1] = "GRAPHICS_LAYER_MISSING", E2[E2.GEOMETRY_MISSING = 2] = "GEOMETRY_MISSING", E2[E2.GEOMETRY_TYPE_UNSUPPORTED = 3] = "GEOMETRY_TYPE_UNSUPPORTED", E2[E2.ELEVATION_MODE_UNSUPPORTED = 4] = "ELEVATION_MODE_UNSUPPORTED", E2[E2.SYMBOL_TYPE_UNSUPPORTED = 5] = "SYMBOL_TYPE_UNSUPPORTED";
}(P || (P = {}));

// node_modules/@arcgis/core/views/3d/interactive/editingTools/move/isSupportedObject.js
function r(r2) {
  var _a, _b;
  if (r2.graphic && "graphics" !== ((_a = r2.graphic.layer) == null ? void 0 : _a.type)) return P.GRAPHICS_LAYER_MISSING;
  const o = (_b = r2.operations) == null ? void 0 : _b.data.type;
  if (!o) return P.GEOMETRY_TYPE_UNSUPPORTED;
  switch (o) {
    case "polygon":
    case "point":
    case "polyline":
    case "mesh":
      break;
    default:
      return P.GEOMETRY_TYPE_UNSUPPORTED;
  }
  const i = r2.elevationInfo;
  return v(i) ? P.ELEVATION_MODE_UNSUPPORTED : P.SUPPORTED;
}

export {
  E,
  P,
  r
};
//# sourceMappingURL=chunk-HCRLCWVY.js.map
