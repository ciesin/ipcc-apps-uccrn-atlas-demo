import {
  O,
  Q
} from "./chunk-4WERUJEK.js";
import {
  S
} from "./chunk-YUVX6H42.js";
import {
  g
} from "./chunk-RDUV6YP6.js";

// node_modules/@arcgis/core/portal/support/portalItemUtils.js
async function o(o2) {
  const i2 = o2.spatialReference;
  if (i2.isWGS84) return o2.clone();
  if (i2.isWebMercator) return S(o2);
  const s2 = g.WGS84;
  return await Q(i2, s2), O(o2, s2);
}
function i(e, t) {
  if (!s(e, t)) {
    const r = e.typeKeywords;
    r ? r.push(t) : e.typeKeywords = [t];
  }
}
function s(e, t) {
  var _a;
  return !!((_a = e.typeKeywords) == null ? void 0 : _a.includes(t));
}
function c(e) {
  return s(e, E.HOSTED_SERVICE);
}
function a(e, t) {
  const r = e.typeKeywords;
  if (r) {
    const e2 = r.indexOf(t);
    e2 > -1 && r.splice(e2, 1);
  }
}
function u(e, t, r) {
  r ? i(e, t) : a(e, t);
}
async function l(e) {
  const t = e.clone().normalize();
  let r;
  if (t.length > 1) for (const n of t) r ? n.width > r.width && (r = n) : r = n;
  else r = t[0];
  return o(r);
}
var E = { DEVELOPER_BASEMAP: "DeveloperBasemap", GROUP_LAYER_MAP: "Map", HOSTED_SERVICE: "Hosted Service", JSAPI: "ArcGIS API for JavaScript", LOCAL_SCENE: "ViewingMode-Local", METADATA: "Metadata", MULTI_LAYER: "Multilayer", ORIENTED_IMAGERY_LAYER: "OrientedImageryLayer", SINGLE_LAYER: "Singlelayer", SUBTYPE_GROUP_LAYER: "SubtypeGroupLayer", SUBTYPE_GROUP_TABLE: "SubtypeGroupTable", TABLE: "Table", TILED_IMAGERY: "Tiled Imagery" };
function f(e) {
  var _a;
  const { portal: t, isOrgItem: r, itemControl: n } = e, o2 = (_a = t.user) == null ? void 0 : _a.privileges;
  let i2 = !o2 || o2.includes("features:user:edit"), s2 = !!r && !!(o2 == null ? void 0 : o2.includes("features:user:fullEdit"));
  const c2 = "update" === n || "admin" === n;
  return c2 ? s2 = i2 = true : s2 && (i2 = true), { features: { edit: i2, fullEdit: s2 }, content: { updateItem: c2 } };
}

export {
  i,
  s,
  c,
  a,
  u,
  l,
  E,
  f
};
//# sourceMappingURL=chunk-VY225BNN.js.map
