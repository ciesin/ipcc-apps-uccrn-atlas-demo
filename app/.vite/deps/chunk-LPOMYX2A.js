import {
  $,
  N
} from "./chunk-U4VVTGEX.js";
import {
  Pe,
  ke,
  xe
} from "./chunk-6REABBOQ.js";
import {
  o
} from "./chunk-HSI6V34N.js";
import {
  O
} from "./chunk-XWXWIBVO.js";
import {
  i,
  l
} from "./chunk-PODRVOXS.js";
import {
  E,
  j
} from "./chunk-REAPFM7O.js";
import {
  h
} from "./chunk-UNGOQUF2.js";
import {
  n2 as n,
  r
} from "./chunk-CWMZW2S5.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/widgets/Feature/support/featureUtils.js
var y = "esri.widgets.Feature.support.featureUtils";
var m = () => n.getLogger(y);
var b = /href=(""|'')/gi;
var g = /(\{([^{\r\n]+)\})/g;
var I = /'/g;
var h2 = /^\s*expression\//i;
var w = /(\n)/gi;
var T = /[\u00A0-\u9999<>&]/gim;
var F = /href\s*=\s*(?:"([^"]+)"|'([^']+)')/gi;
var j2 = /^(?:mailto:|tel:)/;
var N2 = "relationships/";
var Z = j("short-date-short-time");
function L(e) {
  if (null != e) return (e.sourceLayer || e.layer) ?? void 0;
}
async function q({ type: e, value: t, event: n2 }) {
  try {
    return "function" == typeof t ? t(n2) : await t;
  } catch (r2) {
    return void m().error("error", `An error occurred when calling the "${e}" function`, { error: r2, graphic: n2.graphic, value: t });
  }
}
function x(e = "") {
  if (e) return !j2.test(e.trim().toLowerCase());
}
function E2(e) {
  return !!e && h2.test(e);
}
function v(e, t) {
  if (!t || !E2(t) || !e) return;
  const n2 = t.replace(h2, "").toLowerCase();
  return e.find(({ name: e2 }) => e2.toLowerCase() === n2);
}
function C(e, t) {
  const n2 = v(t, e == null ? void 0 : e.fieldName);
  return n2 ? n2.title || null : e ? e.label || e.fieldName : null;
}
function U(e, t) {
  const n2 = t.get(e.toLowerCase());
  return `{${(n2 == null ? void 0 : n2.fieldName) || e}}`;
}
function A(e) {
  return e.replaceAll(b, "");
}
function M(e, t) {
  const n2 = $2(t, e);
  return n2 ? n2.name : e;
}
function R(e, t) {
  return e && e.map((e2) => M(e2, t));
}
function $2(e, t) {
  return e && "function" == typeof e.getField && t ? e.getField(t) ?? null : null;
}
function k(e) {
  return `${e}`.trim();
}
function D({ attributes: e, globalAttributes: t, layer: n2, text: r2, expressionAttributes: i2, fieldInfoMap: o2 }) {
  return r2 ? O2({ formattedAttributes: t, template: P(r2, { ...t, ...i2, ...e }, n2), fieldInfoMap: o2 }) : "";
}
function O2({ formattedAttributes: e, template: n2, fieldInfoMap: r2 }) {
  return k(A(r(r(n2, (e2) => U(e2, r2)), e)));
}
function z(e, t, n2 = false) {
  const r2 = t[e];
  if ("string" == typeof r2) {
    const i2 = "%27", o2 = (n2 ? encodeURIComponent(r2) : r2).replaceAll(I, i2);
    t[e] = o2;
  }
}
function G(e, t = false) {
  const n2 = { ...e };
  return Object.keys(n2).forEach((e2) => z(e2, n2, t)), n2;
}
function S(e, n2, r2) {
  const i2 = (n2 = k(n2)) && "{" !== n2[0];
  return r(e, G(r2, i2 || false));
}
function Q(e, t) {
  return e.replaceAll(g, (e2, n2, r2) => {
    const i2 = $2(t, r2);
    return i2 ? `{${i2.name}}` : n2;
  });
}
function P(e, t, n2) {
  const r2 = Q(e, n2);
  return r2 ? r2.replaceAll(F, (e2, n3, r3) => S(e2, n3 || r3, t)) : r2;
}
function _(e, t) {
  if ("string" == typeof e && t && null == t.dateFormat && (null != t.places || null != t.digitSeparator)) {
    const t2 = Number(e);
    if (!isNaN(t2)) return t2;
  }
  return e;
}
function H(e) {
  return null != e && "object" == typeof e && "fieldsIndex" in e && "geometryType" in e && "getField" in e && "load" in e && "loaded" in e && "objectIdField" in e && "spatialReference" in e && "type" in e && ("feature" === e.type || "scene" === e.type || "subtype-group" === e.type || "subtype-sublayer" === e.type || "sublayer" === e.type) && "when" in e;
}
function B(e) {
  return null != e && "object" == typeof e && "createQuery" in e && "queryFeatureCount" in e && "queryObjectIds" in e && "queryRelatedFeatures" in e && "queryRelatedFeaturesCount" in e && "relationships" in e;
}
function J(e) {
  return H(e) && B(e);
}
function K(e) {
  return !(!(e && "object" == typeof e && "createQuery" in e && "getField" in e && "queryFeatureCount" in e && "queryFeatures" in e && "queryObjectIds" in e && "capabilities" in e && "fields" in e && "fieldsIndex" in e && "type" in e) || "feature" !== e.type && "subtype-group" !== e.type && "subtype-sublayer" !== e.type && "sublayer" !== e.type || !("when" in e)) && ("subtype-sublayer" === e.type && "parent" in e && e.parent && "object" == typeof e.parent ? "globalIdField" in e.parent : "globalIdField" in e);
}
function V(e) {
  return !!e && "object" == typeof e && "sourceLayer" in e && J(e.sourceLayer);
}
function W(e, t) {
  var _a;
  const { fieldInfos: n2, fieldName: r2, preventPlacesFormatting: l2, layer: u, timeZone: s } = t, c = ee(n2, r2), d = $2(u, r2);
  if (c && !Pe(r2)) {
    const t2 = d == null ? void 0 : d.type, n3 = (_a = c.format) == null ? void 0 : _a.dateFormat;
    if ("date" === t2 || "date-only" === t2 || "time-only" === t2 || "timestamp-offset" === t2 || n3) return N(e, { format: n3, fieldType: t2, timeZoneOptions: { layerTimeZone: u && "preferredTimeZone" in u ? u.preferredTimeZone : null, viewTimeZone: s, datesInUnknownTimezone: !(!u || !("datesInUnknownTimezone" in u)) && !!u.datesInUnknownTimezone } });
  }
  const p = c == null ? void 0 : c.format;
  return "string" == typeof e && Pe(r2) && p ? X(e, p) : "string" == typeof (e = _(e, p)) || null == e || null == p ? le(e) : l(e, l2 ? { ...i(p), minimumFractionDigits: 0, maximumFractionDigits: 20 } : i(p));
}
function X(e, t) {
  return e = e.trim(), /\d{2}-\d{2}/.test(e) ? e : e.includes(",") ? Y(e, ",", ", ", t) : e.includes(";") ? Y(e, ";", "; ", t) : e.includes(" ") ? Y(e, " ", " ", t) : l(Number(e), i(t));
}
function Y(e, t, n2, r2) {
  return e.trim().split(t).map((e2) => l(Number(e2), i(r2))).join(n2);
}
function ee(e, t) {
  if ((e == null ? void 0 : e.length) && t) return e.find((e2) => {
    var _a;
    return ((_a = e2.fieldName) == null ? void 0 : _a.toLowerCase()) === t.toLowerCase();
  });
}
function te({ fieldName: e, graphic: t, layer: n2 }) {
  if (pe(e)) return null;
  if (!n2 || "function" != typeof n2.getFeatureType) return null;
  const { typeIdField: r2 } = n2;
  if (!r2 || e !== r2) return null;
  const i2 = n2.getFeatureType(t);
  return i2 ? i2.name : null;
}
function ne({ fieldName: e, value: t, graphic: n2, layer: r2 }) {
  if (pe(e)) return null;
  if (!r2 || "function" != typeof r2.getFieldDomain) return null;
  const i2 = n2 && r2.getFieldDomain(e, { feature: n2, excludeImpliedDomains: has("esri-widget-legacy-field-domain-calculation") });
  return i2 && "coded-value" === i2.type ? i2.getName(t) : null;
}
function re(e, t, n2, i2) {
  const { creatorField: o2, creationDateField: a, editorField: l2, editDateField: u } = e;
  if (!t) return;
  const s = h(i2 && "preferredTimeZone" in i2 ? i2.preferredTimeZone : null, !(!i2 || !("datesInUnknownTimezone" in i2)) && !!i2.datesInUnknownTimezone, n2, Z, "date"), f = { ...Z, ...s }, c = t[u];
  if ("number" == typeof c) {
    const e2 = t[l2];
    return { type: "edit", date: E(c, f), user: e2 };
  }
  const d = t[a];
  if ("number" == typeof d) {
    const e2 = t[o2];
    return { type: "create", date: E(d, f), user: e2 };
  }
  return null;
}
function ie(e, t) {
  const n2 = /* @__PURE__ */ new Map();
  if (!e) return n2;
  for (const r2 of e) {
    if (!r2.fieldName) continue;
    const e2 = M(r2.fieldName, t);
    r2.fieldName = e2, n2.set(e2.toLowerCase(), r2);
  }
  return n2;
}
function oe(e) {
  const t = [];
  if (!e) return t;
  const { fieldInfos: n2, content: r2 } = e;
  return n2 && t.push(...n2), r2 && Array.isArray(r2) ? (r2.forEach((e2) => {
    if ("fields" === e2.type) {
      const n3 = e2 == null ? void 0 : e2.fieldInfos;
      n3 && t.push(...n3);
    }
  }), t) : t;
}
function ae(e) {
  return e.replaceAll(T, (e2) => `&#${e2.charCodeAt(0)};`);
}
function le(e) {
  return "string" == typeof e ? e.replaceAll(w, '<br class="esri-text-new-line" />') : e;
}
function ue(e) {
  var _a;
  const { value: t, fieldName: n2, fieldInfos: r2, fieldInfoMap: i2, layer: o2, graphic: a, timeZone: l2 } = e;
  if (null == t) return "";
  const s = ne({ fieldName: n2, value: t, graphic: a, layer: o2 });
  if (s) return s;
  const d = te({ fieldName: n2, graphic: a, layer: o2 });
  if (d) return d;
  if (i2.get(n2.toLowerCase())) return W(t, { fieldInfos: r2 || Array.from(i2.values()), fieldName: n2, layer: o2, timeZone: l2 });
  const p = (_a = o2 == null ? void 0 : o2.fieldsIndex) == null ? void 0 : _a.get(n2);
  return p && ($(p) || xe(p)) ? N(t, { fieldType: p.type, timeZoneOptions: { layerTimeZone: o2 && "preferredTimeZone" in o2 ? o2.preferredTimeZone : null, viewTimeZone: l2, datesInUnknownTimezone: !(!o2 || !("datesInUnknownTimezone" in o2)) && !!o2.datesInUnknownTimezone } }) : le(t);
}
function se({ fieldInfos: e, attributes: t, layer: n2, graphic: r2, fieldInfoMap: i2, relatedInfos: o2, timeZone: a }) {
  const l2 = {};
  return o2 == null ? void 0 : o2.forEach((t2) => be({ attributes: l2, relatedInfo: t2, fieldInfoMap: i2, fieldInfos: e, layer: n2, timeZone: a })), t && Object.keys(t).forEach((o3) => {
    const u = t[o3];
    l2[o3] = ue({ fieldName: o3, fieldInfos: e, fieldInfoMap: i2, layer: n2, value: u, graphic: r2, timeZone: a });
  }), l2;
}
async function fe(e, t) {
  var _a, _b;
  const { layer: n2, graphic: r2, outFields: i2, objectIds: o2, returnGeometry: a, spatialReference: l2 } = e, u = o2[0];
  if ("number" != typeof u && "string" != typeof u) {
    const e2 = "Could not query required fields for the specified feature. The feature's ID is invalid.", t2 = { layer: n2, graphic: r2, objectId: u, requiredFields: i2 };
    return m().warn(e2, t2), null;
  }
  if (!((_b = (_a = O(n2)) == null ? void 0 : _a.operations) == null ? void 0 : _b.supportsQuery)) {
    const e2 = "The specified layer cannot be queried. The following fields will not be available.", t2 = { layer: n2, graphic: r2, requiredFields: i2, returnGeometry: a };
    return m().warn(e2, t2), null;
  }
  const f = n2.createQuery();
  f.objectIds = o2, f.outFields = (i2 == null ? void 0 : i2.length) ? i2 : [n2.objectIdField], f.returnGeometry = !!a, f.returnZ = !!a, f.returnM = !!a, f.outSpatialReference = l2;
  return (await n2.queryFeatures(f, t)).features[0];
}
async function ce(e) {
  var _a;
  if (!((_a = e.expressionInfos) == null ? void 0 : _a.length)) return false;
  const t = await o(), { arcadeUtils: { hasGeometryFunctions: n2 } } = t;
  return n2(e);
}
async function de({ graphic: e, popupTemplate: t, layer: n2, spatialReference: r2 }, i2) {
  if (!n2 || !t) return;
  if ("function" == typeof n2.load && await n2.load(i2), !e.attributes) return;
  const o2 = n2.objectIdField, a = e.attributes[o2];
  if (null == a) return;
  const u = [a], s = await t.getRequiredFields(n2.fieldsIndex), f = ke(s, e), c = f ? [] : s.includes(o2) ? s : [...s, o2], d = t.returnGeometry || await ce(t);
  if (f && !d) return;
  const p = await fe({ layer: n2, graphic: e, outFields: c, objectIds: u, returnGeometry: d, spatialReference: r2 }, i2);
  p && (p.geometry && (e.geometry = p.geometry), p.attributes && (e.attributes = { ...e.attributes, ...p.attributes }));
}
function pe(e = "") {
  return !!e && e.includes(N2);
}
function ye(e) {
  return `${N2}${e.layerId}/${e.fieldName}`;
}
function me({ attributes: e, graphic: t, relatedInfo: n2, fieldInfos: r2, fieldInfoMap: i2, layer: o2, timeZone: a }) {
  e && t && n2 && Object.keys(t.attributes).forEach((l2) => {
    const u = ye({ layerId: n2.relation.id.toString(), fieldName: l2 }), s = t.attributes[l2];
    e[u] = ue({ fieldName: u, fieldInfos: r2, fieldInfoMap: i2, layer: o2, value: s, graphic: t, timeZone: a });
  });
}
function be({ attributes: e, relatedInfo: t, fieldInfoMap: n2, fieldInfos: r2, layer: i2, timeZone: o2 }) {
  var _a, _b;
  e && t && ((_a = t.relatedFeatures) == null ? void 0 : _a.forEach((a) => me({ attributes: e, graphic: a, relatedInfo: t, fieldInfoMap: n2, fieldInfos: r2, layer: i2, timeZone: o2 })), (_b = t.relatedStatsFeatures) == null ? void 0 : _b.forEach((a) => me({ attributes: e, graphic: a, relatedInfo: t, fieldInfoMap: n2, fieldInfos: r2, layer: i2, timeZone: o2 })));
}
var ge = (e) => {
  if (!e) return false;
  const t = e.toUpperCase();
  return t.includes("CURRENT_TIMESTAMP") || t.includes("CURRENT_DATE") || t.includes("CURRENT_TIME");
};
var Ie = ({ layer: e, method: t, query: n2, definitionExpression: r2 }) => {
  var _a, _b;
  if (!((_b = (_a = e.capabilities) == null ? void 0 : _a.query) == null ? void 0 : _b.supportsCacheHint) || "attachments" === t) return;
  const i2 = null != n2.where ? n2.where : null, o2 = null != n2.geometry ? n2.geometry : null;
  ge(r2) || ge(i2) || "extent" === (o2 == null ? void 0 : o2.type) || "tile" === n2.resultType || (n2.cacheHint = true);
};
var he = ({ query: e, layer: t, method: n2 }) => {
  Ie({ layer: t, method: n2, query: e, definitionExpression: `${t.definitionExpression} ${t.serviceDefinitionExpression ?? ""}` });
};
var we = ({ queryPayload: e, layer: t, method: n2 }) => {
  Ie({ layer: t, method: n2, query: e, definitionExpression: `${t.definitionExpression} ${t.serviceDefinitionExpression ?? ""}` });
};
function Te(e, t, n2) {
  var _a, _b;
  return e && t && n2 ? "sublayer" === t.type ? Ne({ layers: (_a = t.layer) == null ? void 0 : _a.sublayers, map: e, relatedLayer: t, relationship: n2 }) || Ne({ layers: (_b = t.layer) == null ? void 0 : _b.subtables, map: e, relatedLayer: t, relationship: n2 }) : Ne({ layers: e.allLayers, map: e, relatedLayer: t, relationship: n2 }) || Ne({ layers: e.allTables, map: e, relatedLayer: t, relationship: n2 }) : null;
}
function Fe(e, t) {
  var _a;
  return e && "utilityNetworks" in e && t ? (_a = e.utilityNetworks) == null ? void 0 : _a.find((e2) => e2.isUtilityLayer(t)) : null;
}
function je(e, t) {
  return e == null ? void 0 : e.allTables.find((e2) => {
    var _a;
    return "feature" === e2.type && e2.layerId === t.id && e2.url === ((_a = t.layer) == null ? void 0 : _a.url);
  });
}
function Ne({ map: e, relationship: t, relationship: { relatedTableId: n2 }, relatedLayer: r2, layers: i2 }) {
  var _a;
  if (!i2) return null;
  for (const o2 of i2) {
    if ("map-image" === o2.type) {
      const n3 = Ne({ layers: o2.sublayers, map: e, relatedLayer: r2, relationship: t }) || Ne({ layers: o2.subtables, map: e, relatedLayer: r2, relationship: t });
      if (n3) return n3;
      continue;
    }
    if (!J(o2)) continue;
    if ("sublayer" === r2.type) {
      if (o2 !== r2 && o2.id === n2) return o2.isTable ? je(e, o2) : o2;
      continue;
    }
    const i3 = "scene" === r2.type && r2.associatedLayer ? r2.associatedLayer.url : r2.url;
    if (!i3) return null;
    if ("sublayer" !== o2.type) {
      if (o2 !== r2 && o2.url === i3 && o2.layerId === n2) return o2;
    } else if (o2 !== r2 && ((_a = o2.layer) == null ? void 0 : _a.url) === i3 && o2.id === n2) return o2.isTable ? je(e, o2) : o2;
  }
  return null;
}
function Ze(e) {
  const t = e.getObjectId();
  return null != t ? `oid:${t}` : `uid:${e.uid}`;
}

export {
  L,
  q,
  x,
  E2 as E,
  C,
  M,
  R,
  D,
  O2 as O,
  Q,
  H,
  B,
  J,
  K,
  V,
  W,
  ee,
  re,
  ie,
  oe,
  ae,
  le,
  se,
  fe,
  de,
  pe,
  he,
  we,
  Te,
  Fe,
  Ze
};
//# sourceMappingURL=chunk-LPOMYX2A.js.map
