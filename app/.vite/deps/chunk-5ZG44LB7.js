import {
  e,
  n
} from "./chunk-ZH6PYRVF.js";

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleDefinition.js
var a;
var i;
var n2;
var l;
var u;
var m;
var o;
var r;
var p;
!function(e2) {
  e2[e2.BACKGROUND = 0] = "BACKGROUND", e2[e2.FILL = 1] = "FILL", e2[e2.LINE = 2] = "LINE", e2[e2.SYMBOL = 3] = "SYMBOL", e2[e2.CIRCLE = 4] = "CIRCLE";
}(a || (a = {})), function(e2) {
  e2[e2.VISIBLE = 0] = "VISIBLE", e2[e2.NONE = 1] = "NONE";
}(i || (i = {})), function(e2) {
  e2[e2.POINT = 0] = "POINT", e2[e2.LINE = 1] = "LINE", e2[e2.LINE_CENTER = 2] = "LINE_CENTER";
}(n2 || (n2 = {})), function(e2) {
  e2[e2.MAP = 0] = "MAP", e2[e2.VIEWPORT = 1] = "VIEWPORT", e2[e2.AUTO = 2] = "AUTO";
}(l || (l = {})), function(e2) {
  e2[e2.AUTO = 0] = "AUTO", e2[e2.LEFT = 1] = "LEFT", e2[e2.CENTER = 2] = "CENTER", e2[e2.RIGHT = 3] = "RIGHT";
}(u || (u = {})), function(e2) {
  e2[e2.CENTER = 0] = "CENTER", e2[e2.LEFT = 1] = "LEFT", e2[e2.RIGHT = 2] = "RIGHT", e2[e2.TOP = 3] = "TOP", e2[e2.BOTTOM = 4] = "BOTTOM", e2[e2.TOP_LEFT = 5] = "TOP_LEFT", e2[e2.TOP_RIGHT = 6] = "TOP_RIGHT", e2[e2.BOTTOM_LEFT = 7] = "BOTTOM_LEFT", e2[e2.BOTTOM_RIGHT = 8] = "BOTTOM_RIGHT";
}(m || (m = {})), function(e2) {
  e2[e2.NONE = 0] = "NONE", e2[e2.UPPERCASE = 1] = "UPPERCASE", e2[e2.LOWERCASE = 2] = "LOWERCASE";
}(o || (o = {})), function(e2) {
  e2[e2.MAP = 0] = "MAP", e2[e2.VIEWPORT = 1] = "VIEWPORT";
}(r || (r = {})), function(e2) {
  e2[e2.HORIZONTAL = 0] = "HORIZONTAL", e2[e2.VERTICAL = 1] = "VERTICAL";
}(p || (p = {}));
var f = class {
};
f.backgroundLayoutDefinition = { visibility: { type: "enum", values: ["visible", "none"], default: i.VISIBLE } }, f.fillLayoutDefinition = { visibility: { type: "enum", values: ["visible", "none"], default: i.VISIBLE } }, f.lineLayoutDefinition = { visibility: { type: "enum", values: ["visible", "none"], default: i.VISIBLE }, "line-cap": { type: "enum", values: ["butt", "round", "square"], default: e.BUTT }, "line-join": { type: "enum", values: ["bevel", "round", "miter"], default: n.MITER }, "line-miter-limit": { type: "number", default: 2 }, "line-round-limit": { type: "number", default: 1.05 } }, f.symbolLayoutDefinition = { visibility: { type: "enum", values: ["visible", "none"], default: i.VISIBLE }, "symbol-avoid-edges": { type: "boolean", default: false }, "symbol-placement": { type: "enum", values: ["point", "line", "line-center"], default: n2.POINT }, "symbol-sort-key": { type: "number", default: -1 }, "symbol-spacing": { type: "number", minimum: 1, default: 250 }, "icon-allow-overlap": { type: "boolean", default: false }, "icon-anchor": { type: "enum", values: ["center", "left", "right", "top", "bottom", "top-left", "top-right", "bottom-left", "bottom-right"], default: m.CENTER }, "icon-ignore-placement": { type: "boolean", default: false }, "icon-image": { type: "string" }, "icon-keep-upright": { type: "boolean", default: false }, "icon-offset": { type: "array", value: "number", length: 2, default: [0, 0] }, "icon-optional": { type: "boolean", default: false }, "icon-padding": { type: "number", minimum: 0, default: 2 }, "icon-rotate": { type: "number", default: 0 }, "icon-rotation-alignment": { type: "enum", values: ["map", "viewport", "auto"], default: l.AUTO }, "icon-size": { type: "number", minimum: 0, default: 1 }, "text-allow-overlap": { type: "boolean", default: false }, "text-anchor": { type: "enum", values: ["center", "left", "right", "top", "bottom", "top-left", "top-right", "bottom-left", "bottom-right"], default: m.CENTER }, "text-field": { type: "string" }, "text-font": { type: "array", value: "string", default: ["Open Sans Regular", "Arial Unicode MS Regular"] }, "text-ignore-placement": { type: "boolean", default: false }, "text-justify": { type: "enum", values: ["auto", "left", "center", "right"], default: u.CENTER }, "text-keep-upright": { type: "boolean", default: true }, "text-letter-spacing": { type: "number", default: 0 }, "text-line-height": { type: "number", default: 1.2 }, "text-max-angle": { type: "number", minimum: 0, default: 45 }, "text-max-width": { type: "number", minimum: 0, default: 10 }, "text-offset": { type: "array", value: "number", length: 2, default: [0, 0] }, "text-optional": { type: "boolean", default: false }, "text-padding": { type: "number", minimum: 0, default: 2 }, "text-rotate": { type: "number", default: 0 }, "text-rotation-alignment": { type: "enum", values: ["map", "viewport", "auto"], default: l.AUTO }, "text-size": { type: "number", minimum: 0, default: 16 }, "text-transform": { type: "enum", values: ["none", "uppercase", "lowercase"], default: o.NONE }, "text-writing-mode": { type: "array", value: "enum", values: ["horizontal", "vertical"], default: [p.HORIZONTAL] } }, f.circleLayoutDefinition = { visibility: { type: "enum", values: ["visible", "none"], default: i.VISIBLE } }, f.backgroundPaintDefinition = { "background-color": { type: "color", default: [0, 0, 0, 1] }, "background-opacity": { type: "number", minimum: 0, maximum: 1, default: 1 }, "background-pattern": { type: "string" } }, f.fillPaintDefinition = { "fill-antialias": { type: "boolean", default: true }, "fill-color": { type: "color", default: [0, 0, 0, 1] }, "fill-opacity": { type: "number", minimum: 0, maximum: 1, default: 1 }, "fill-outline-color": { type: "color", default: [0, 0, 0, 0] }, "fill-pattern": { type: "string" }, "fill-translate": { type: "array", value: "number", length: 2, default: [0, 0] }, "fill-translate-anchor": { type: "enum", values: ["map", "viewport"], default: r.MAP } }, f.linePaintDefinition = { "line-blur": { type: "number", minimum: 0, default: 0 }, "line-color": { type: "color", default: [0, 0, 0, 1] }, "line-dasharray": { type: "array", value: "number", default: [] }, "line-gap-width": { type: "number", minimum: 0, default: 0 }, "line-offset": { type: "number", default: 0 }, "line-opacity": { type: "number", minimum: 0, maximum: 1, default: 1 }, "line-pattern": { type: "string" }, "line-translate": { type: "array", value: "number", length: 2, default: [0, 0] }, "line-translate-anchor": { type: "enum", values: ["map", "viewport"], default: r.MAP }, "line-width": { type: "number", minimum: 0, default: 1 } }, f.symbolPaintDefinition = { "icon-color": { type: "color", default: [0, 0, 0, 1] }, "icon-halo-blur": { type: "number", minimum: 0, default: 0 }, "icon-halo-color": { type: "color", default: [0, 0, 0, 0] }, "icon-halo-width": { type: "number", minimum: 0, default: 0 }, "icon-opacity": { type: "number", minimum: 0, maximum: 1, default: 1 }, "icon-translate": { type: "array", value: "number", length: 2, default: [0, 0] }, "icon-translate-anchor": { type: "enum", values: ["map", "viewport"], default: r.MAP }, "text-color": { type: "color", default: [0, 0, 0, 1] }, "text-halo-blur": { type: "number", minimum: 0, default: 0 }, "text-halo-color": { type: "color", default: [0, 0, 0, 0] }, "text-halo-width": { type: "number", minimum: 0, default: 0 }, "text-opacity": { type: "number", minimum: 0, maximum: 1, default: 1 }, "text-translate": { type: "array", value: "number", length: 2, default: [0, 0] }, "text-translate-anchor": { type: "enum", values: ["map", "viewport"], default: r.MAP } }, f.rasterPaintDefinition = { "raster-opacity": { type: "number", minimum: 0, maximum: 1, default: 1 }, "raster-hue-rotate": { type: "number", default: 0 }, "raster-brightness-min": { type: "number", minimum: 0, maximum: 1, default: 0 }, "raster-brightness-max": { type: "number", minimum: 0, maximum: 1, default: 1 }, "raster-saturation": { type: "number", minimum: -1, maximum: 1, default: 0 }, "raster-contrast": { type: "number", minimum: -1, maximum: 1, default: 0 }, "raster-fade-duration": { type: "number", minimum: 0, default: 300 } }, f.circlePaintDefinition = { "circle-blur": { type: "number", minimum: 0, default: 0 }, "circle-color": { type: "color", default: [0, 0, 0, 1] }, "circle-opacity": { type: "number", minimum: 0, maximum: 1, default: 1 }, "circle-radius": { type: "number", minimum: 0, default: 5 }, "circle-stroke-color": { type: "color", default: [0, 0, 0, 1] }, "circle-stroke-opacity": { type: "number", minimum: 0, maximum: 1, default: 1 }, "circle-stroke-width": { type: "number", minimum: 0, default: 0 }, "circle-translate": { type: "array", value: "number", length: 2, default: [0, 0] }, "circle-translate-anchor": { type: "enum", values: ["map", "viewport"], default: r.MAP } };

export {
  a,
  i,
  n2 as n,
  l,
  u,
  m,
  o,
  r,
  p,
  f
};
//# sourceMappingURL=chunk-5ZG44LB7.js.map
