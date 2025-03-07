import {
  P2 as P
} from "./chunk-UFBX3XSC.js";

// node_modules/@arcgis/core/support/requestPresets.js
async function t(t3, o2) {
  const { data: r2 } = await P(t3, { responseType: "json", query: { f: "json", ...o2 == null ? void 0 : o2.customParameters, token: o2 == null ? void 0 : o2.apiKey } });
  return r2;
}

// node_modules/@arcgis/core/layers/support/fetchService.js
var a = /* @__PURE__ */ new Set(["Catalog Layer", "Feature Layer", "Oriented Imagery Layer"]);
async function t2(a2, t3) {
  const { loadContext: r2, ...n2 } = t3 || {}, c2 = r2 ? await r2.fetchServiceMetadata(a2, n2) : await t(a2, n2);
  o(c2), s(c2);
  const y2 = { serviceJSON: c2 };
  if ((c2.currentVersion ?? 0) < 10.5) return y2;
  const i2 = `${a2}/layers`, u = r2 ? await r2.fetchServiceMetadata(i2, n2) : await t(i2, n2);
  return o(u), s(u), y2.layersJSON = { layers: u.layers, tables: u.tables }, y2;
}
function r(e) {
  const { type: t3 } = e;
  return !!t3 && a.has(t3);
}
function n(e) {
  return "Table" === e.type;
}
function s(e) {
  var _a, _b;
  e.layers = (_a = e.layers) == null ? void 0 : _a.filter(r), e.tables = (_b = e.tables) == null ? void 0 : _b.filter(n);
}
function c(e) {
  e.type || (e.type = "Feature Layer");
}
function y(e) {
  e.type || (e.type = "Table");
}
function o(e) {
  var _a, _b;
  (_a = e.layers) == null ? void 0 : _a.forEach(c), (_b = e.tables) == null ? void 0 : _b.forEach(y);
}
function i(e) {
  switch (e) {
    case "Feature Layer":
    case "Table":
      return "FeatureLayer";
    case "Oriented Imagery Layer":
      return "OrientedImageryLayer";
    case "Catalog Layer":
      return "CatalogLayer";
  }
  return "FeatureLayer";
}

export {
  t,
  t2,
  i
};
//# sourceMappingURL=chunk-EWFN6VXR.js.map
