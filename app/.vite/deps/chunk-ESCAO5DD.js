// node_modules/@arcgis/core/core/devEnvironmentUtils.js
function c(c2) {
  return c2 = c2 || globalThis.location.hostname, i.some((a2) => null != (c2 == null ? void 0 : c2.match(a2)));
}
function a(c2, a2) {
  return c2 ? (a2 = a2 || globalThis.location.hostname) ? null != a2.match(t) || null != a2.match(s) ? c2.replace("static.arcgis.com", "staticdev.arcgis.com") : null != a2.match(o) || null != a2.match(l) ? c2.replace("static.arcgis.com", "staticqa.arcgis.com") : c2 : c2 : null;
}
var t = /^devext\.arcgis\.com$/;
var o = /^qaext\.arcgis\.com$/;
var s = /^[\w-]*\.mapsdevext\.arcgis\.com$/;
var l = /^[\w-]*\.mapsqa\.arcgis\.com$/;
var i = [/^([\w-]*\.)?[\w-]*\.zrh-dev-local\.esri\.com$/, t, o, /^jsapps\.esri\.com$/, s, l];

export {
  c,
  a
};
//# sourceMappingURL=chunk-ESCAO5DD.js.map
