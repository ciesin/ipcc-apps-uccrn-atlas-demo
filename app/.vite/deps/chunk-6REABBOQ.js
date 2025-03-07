import {
  e as e3
} from "./chunk-STBNLAGT.js";
import {
  o
} from "./chunk-HSI6V34N.js";
import {
  e as e2,
  u as u2
} from "./chunk-ZDVQNOKR.js";
import {
  DateTime
} from "./chunk-AIKBABBU.js";
import {
  u3 as u
} from "./chunk-RYSF6YCR.js";
import {
  f
} from "./chunk-M6FNW7GP.js";
import {
  e,
  s2 as s,
  t
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/support/dateUtils.js
var t2 = "HH:mm";
var l = "HH:mm:ss";
var m = "HH:mm:ss.SSS";
var i = [m, l, t2, "TT"];
var s2 = "yyyy-MM-dd";
function e4(r2) {
  if (!r2 || !e2(r2)) return null;
  const t4 = DateTime.fromFormat(r2, s2);
  return t4.isValid ? t4 : null;
}
function H(t4) {
  return t4 && e2(t4) ? f(i, (r2) => {
    const n = DateTime.fromFormat(t4, r2);
    return n.isValid ? n : null;
  }) ?? null : null;
}
function c(r2) {
  if (!r2 || !e2(r2)) return null;
  const t4 = DateTime.fromISO(r2);
  return t4.isValid ? t4 : null;
}

// node_modules/@arcgis/core/layers/support/domainUtils.js
var r;
!function(e6) {
  e6.VALUE_OUT_OF_RANGE = "domain-validation-error::value-out-of-range", e6.INVALID_CODED_VALUE = "domain-validation-error::invalid-coded-value";
}(r || (r = {}));
var l2 = /* @__PURE__ */ new Set(["integer", "small-integer", "big-integer", "esriFieldTypeInteger", "esriFieldTypeSmallInteger", "esriFieldTypeBigInteger"]);
function u3(e6) {
  return null != e6 && l2.has(e6.type);
}
function a(e6) {
  return null != e6 && ("date-only" === e6.type || "esriFieldTypeDateOnly" === e6.type);
}
function o2(e6) {
  return null != e6 && ("timestamp-offset" === e6.type || "esriFieldTypeTimestampOffset" === e6.type);
}
function s3(e6) {
  return null != e6 && ("time-only" === e6.type || "esriFieldTypeTimeOnly" === e6.type);
}
var m2 = /* @__PURE__ */ new Set([...["single", "double"], ...["esriFieldTypeSingle", "esriFieldTypeDouble"]]);
var c2 = u(l2, m2);
function f2(e6, n) {
  const i2 = n ?? (e6 == null ? void 0 : e6.domain);
  if (!i2 || "range" !== i2.type) return;
  const t4 = "range" in i2 ? i2.range[0] : i2.minValue, r2 = "range" in i2 ? i2.range[1] : i2.maxValue, l3 = u3(e6);
  return a(e6) || s3(e6) || o2(e6) ? { ...M(e6, r2, t4), isInteger: l3 } : { min: null != t4 && "number" == typeof t4 ? t4 : null, max: null != r2 && "number" == typeof r2 ? r2 : null, rawMin: t4, rawMax: r2, isInteger: l3 };
}
function M(e6, r2, l3) {
  var _a, _b, _c, _d, _e2, _f;
  return a(e6) ? { min: (_a = e4(l3)) == null ? void 0 : _a.toMillis(), max: (_b = e4(r2)) == null ? void 0 : _b.toMillis(), rawMin: l3, rawMax: r2 } : s3(e6) ? { min: (_c = H(l3)) == null ? void 0 : _c.toMillis(), max: (_d = H(r2)) == null ? void 0 : _d.toMillis(), rawMin: l3, rawMax: r2 } : o2(e6) ? { min: (_e2 = c(l3)) == null ? void 0 : _e2.toMillis(), max: (_f = c(r2)) == null ? void 0 : _f.toMillis(), rawMin: l3, rawMax: r2 } : { max: null, min: null };
}

// node_modules/@arcgis/core/support/arcadeExpressionUtils.js
function t3(t4) {
  if (!t4) return;
  const e6 = t4.match(o3);
  return (e6 == null ? void 0 : e6.groups) ? e6.groups.doubleQuoted ?? e6.groups.singleQuoted ?? e6.groups.dotNotation : void 0;
}
var o3 = /^(\$feature\[(?:"(?<doubleQuoted>[^"]+)"|'(?<singleQuoted>[^']+)')\]|\$feature\.(?<dotNotation>[a-zA-Z_][a-zA-Z0-9_]*))$/i;
function e5(t4) {
  var _a, _b;
  return ((_b = (_a = t4.match(u4)) == null ? void 0 : _a[1]) == null ? void 0 : _b.replace(/\\'/g, "'")) ?? null;
}
var u4 = /^hash\(\$feature\['((\\'|[^'])+)'\]\) \* 8\.381e-8$/;

// node_modules/@arcgis/core/layers/support/fieldUtils.js
var c3 = /^([0-9_])/;
var d = /[^a-z0-9_\u0080-\uffff]+/gi;
function p(e6) {
  if (null == e6) return null;
  return e6.trim().replaceAll(d, "_").replace(c3, "F$1") || null;
}
var m3 = ["field", "field2", "field3", "normalizationField", "rotationInfo.field", "proportionalSymbolInfo.field", "proportionalSymbolInfo.normalizationField", "colorInfo.field", "colorInfo.normalizationField"];
var y = ["field", "normalizationField"];
function g(e6, n) {
  if (null != e6 && null != n) {
    for (const i2 of Array.isArray(e6) ? e6 : [e6]) if (F(m3, i2, n), "visualVariables" in i2 && i2.visualVariables) for (const e7 of i2.visualVariables) F(y, e7, n);
  }
}
function F(e6, t4, r2) {
  if (e6) for (const l3 of e6) {
    const e7 = t(l3, t4), o4 = e7 && "function" != typeof e7 && r2.get(e7);
    o4 && e(l3, o4.name, t4);
  }
}
function I(e6, n) {
  var _a;
  if (null != e6 && ((_a = n == null ? void 0 : n.fields) == null ? void 0 : _a.length)) if ("startField" in e6) {
    const i2 = n.get(e6.startField), t4 = n.get(e6.endField);
    e6.startField = (i2 == null ? void 0 : i2.name) ?? null, e6.endField = (t4 == null ? void 0 : t4.name) ?? null;
  } else {
    const i2 = n.get(e6.startTimeField), t4 = n.get(e6.endTimeField);
    e6.startTimeField = (i2 == null ? void 0 : i2.name) ?? null, e6.endTimeField = (t4 == null ? void 0 : t4.name) ?? null;
  }
}
var b = /* @__PURE__ */ new Set();
function w(e6, n) {
  return e6 && n ? (b.clear(), x(b, e6, n), Array.from(b).sort()) : [];
}
function x(e6, n, i2) {
  var _a;
  if (i2) if ((_a = n == null ? void 0 : n.fields) == null ? void 0 : _a.length) if (i2.includes("*")) for (const { name: t4 } of n.fields) e6.add(t4);
  else for (const t4 of i2) T(e6, n, t4);
  else {
    if (i2.includes("*")) return e6.clear(), void e6.add("*");
    for (const n2 of i2) null != n2 && e6.add(n2);
  }
}
function T(e6, n, i2) {
  if ("string" == typeof i2) if (n) {
    const t4 = n.get(i2);
    t4 && e6.add(t4.name);
  } else e6.add(i2);
}
function h(e6, n) {
  return null == n || null == e6 ? [] : n.includes("*") ? (e6.fields ?? []).map((e7) => e7.name) : n;
}
function E(e6, n, i2 = 1) {
  if (!n || !e6) return [];
  if (n.includes("*")) return ["*"];
  const t4 = w(e6, n);
  return t4.length / e6.fields.length >= i2 ? ["*"] : t4;
}
async function _(e6, n, i2) {
  var _a;
  if (!i2) return;
  let t4;
  const r2 = t3(i2);
  if (r2) t4 = [r2];
  else {
    const { arcadeUtils: e7 } = await o();
    t4 = e7.extractFieldNames(i2, (_a = n == null ? void 0 : n.fields) == null ? void 0 : _a.map((e8) => e8.name));
  }
  for (const l3 of t4) T(e6, n, l3);
}
async function A(n, i2, t4) {
  if (t4 && "1=1" !== t4) {
    const l3 = await e3(t4, i2);
    if (!l3.isStandardized) throw new s("fieldUtils:collectFilterFields", "Where clause is not standardized", { where: t4 });
    x(n, i2, l3.fieldNames);
  }
}
function v({ displayField: e6, fields: n }) {
  return e6 || ((n == null ? void 0 : n.length) ? N(n, "name-or-title") || N(n, "unique-identifier") || N(n, "type-or-category") || S(n) : null);
}
function S(e6) {
  for (const n of e6) {
    if (!(n == null ? void 0 : n.name)) continue;
    const e7 = n.name.toLowerCase();
    if (e7.includes("name") || e7.includes("title")) return n.name;
  }
  return null;
}
function N(e6, n) {
  for (const i2 of e6) if ((i2 == null ? void 0 : i2.valueType) && i2.valueType === n) return i2.name;
  return null;
}
async function L(e6, n) {
  var _a;
  if (!n) return;
  const i2 = (_a = n.elevationInfo) == null ? void 0 : _a.featureExpressionInfo;
  return i2 ? i2.collectRequiredFields(e6, n.fieldsIndex) : void 0;
}
function O(e6, n, i2) {
  i2.onStatisticExpression ? _(e6, n, i2.onStatisticExpression.expression) : e6.add(i2.onStatisticField);
}
async function D(e6, n, i2) {
  if (!n || !i2 || !("fields" in i2)) return;
  const t4 = [], r2 = i2.popupTemplate;
  t4.push(V(e6, n, r2)), i2.fields && t4.push(...i2.fields.map(async (i3) => O(e6, n.fieldsIndex, i3))), await Promise.all(t4);
}
async function M2(e6, n) {
  var _a, _b, _c;
  const { fieldsIndex: i2, trackInfo: t4 } = n;
  if (!n || !t4 || !i2) return;
  const r2 = [(_a = t4.latestObservations.renderer) == null ? void 0 : _a.collectRequiredFields(e6, i2), (_b = t4.previousObservations.renderer) == null ? void 0 : _b.collectRequiredFields(e6, i2), (_c = t4.trackLines.renderer) == null ? void 0 : _c.collectRequiredFields(e6, i2)];
  t4.popupTemplate && r2.push(V(e6, n, t4.popupTemplate));
  for (const l3 of [t4.latestObservations.labelingInfo, t4.previousObservations.labelingInfo, t4.trackLines.labelingInfo]) if (l3) for (const n2 of l3) r2.push(Z(e6, i2, n2));
  await Promise.all(r2);
}
async function V(e6, n, i2) {
  const t4 = [];
  (i2 == null ? void 0 : i2.expressionInfos) && t4.push(...i2.expressionInfos.map((i3) => _(e6, n.fieldsIndex, i3.expression)));
  const r2 = i2 == null ? void 0 : i2.content;
  if (Array.isArray(r2)) for (const l3 of r2) "expression" === l3.type && l3.expressionInfo && t4.push(_(e6, n.fieldsIndex, l3.expressionInfo.expression));
  await Promise.all(t4);
}
async function R(e6, n, i2) {
  n && (n.timeInfo && (i2 == null ? void 0 : i2.timeExtent) && x(e6, n.fieldsIndex, [n.timeInfo.startField, n.timeInfo.endField]), n.floorInfo && x(e6, n.fieldsIndex, [n.floorInfo.floorField]), null != (i2 == null ? void 0 : i2.where) && await A(e6, n.fieldsIndex, i2.where));
}
async function j(e6, n, i2) {
  n && i2 && await Promise.all(i2.map((i3) => U(e6, n, i3)));
}
async function U(e6, n, i2) {
  n && i2 && (i2.valueExpression ? await _(e6, n.fieldsIndex, i2.valueExpression) : i2.field && T(e6, n.fieldsIndex, i2.field));
}
function C(e6) {
  return e6 ? w(e6.fieldsIndex, Y(e6)) : [];
}
function G(e6) {
  if (!e6) return [];
  const n = e6.geometryFieldsInfo;
  return n ? w(e6.fieldsIndex, [n.shapeAreaField, n.shapeLengthField]) : [];
}
async function P(e6, n, i2) {
  if (!n || !i2) return;
  const t4 = n.fieldsIndex;
  await Promise.all(i2.filters.map((n2) => A(e6, t4, n2.where)));
}
var q = /* @__PURE__ */ new Set(["oid", "global-id", "guid"]);
var X = /* @__PURE__ */ new Set(["oid", "global-id"]);
var z = [/^fnode_$/i, /^tnode_$/i, /^lpoly_$/i, /^rpoly_$/i, /^poly_$/i, /^shape$/i, /^shape_$/i, /^subclass$/i, /^subclass_$/i, /^rings_ok$/i, /^rings_nok$/i, /perimeter/i, /objectid/i, /_i$/i];
function B(e6) {
  const n = /* @__PURE__ */ new Set();
  J(e6).forEach((e7) => n.add(e7)), G(e6).forEach((e7) => n.add(e7.toLowerCase()));
  const i2 = e6 && "infoFor3D" in e6 ? e6.infoFor3D : void 0;
  return i2 && (Object.values(i2.assetMapFieldRoles).forEach((e7) => n.add(e7.toLowerCase())), Object.values(i2.transformFieldRoles).forEach((e7) => n.add(e7.toLowerCase()))), Array.from(n);
}
function Y(e6) {
  if (!e6) return [];
  const n = "editFieldsInfo" in e6 && e6.editFieldsInfo;
  if (!n) return [];
  const { creationDateField: i2, creatorField: t4, editDateField: r2, editorField: l3 } = n;
  return [i2, t4, r2, l3].filter(Boolean);
}
function J(e6) {
  return Y(e6).map((e7) => e7.toLowerCase());
}
function W(e6, n) {
  var _a;
  return e6.editable && !q.has(e6.type) && !J(n).includes(((_a = e6.name) == null ? void 0 : _a.toLowerCase()) ?? "");
}
function H2(e6, n) {
  var _a;
  const i2 = ((_a = e6.name) == null ? void 0 : _a.toLowerCase()) ?? "";
  return !(null != (n == null ? void 0 : n.objectIdField) && i2 === n.objectIdField.toLowerCase() || null != (n == null ? void 0 : n.globalIdField) && i2 === n.globalIdField.toLowerCase() || B(n).includes(i2) || X.has(e6.type) || z.some((e7) => e7.test(i2)));
}
async function Q(e6, n) {
  const { labelingInfo: i2, fieldsIndex: t4 } = n;
  (i2 == null ? void 0 : i2.length) && await Promise.all(i2.map((n2) => Z(e6, t4, n2)));
}
async function Z(e6, n, i2) {
  if (!i2) return;
  const t4 = i2.getLabelExpression(), r2 = i2.where;
  if ("arcade" === t4.type) await _(e6, n, t4.expression);
  else {
    const i3 = t4.expression.match(/{[^}]*}/g);
    i3 && i3.forEach((i4) => {
      T(e6, n, i4.slice(1, -1));
    });
  }
  await A(e6, n, r2);
}
function ee(e6) {
  const n = e6.defaultValue;
  return void 0 !== n && oe(e6, n) ? n : e6.nullable ? null : void 0;
}
function ne(e6) {
  const n = "string" == typeof e6 ? { type: e6 } : e6;
  return Fe(n) ? 255 : "esriFieldTypeDate" === n.type || "date" === n.type ? 8 : void 0;
}
function ie(e6) {
  return "number" == typeof e6 && !isNaN(e6) && isFinite(e6);
}
function te(e6) {
  return null === e6 || ie(e6);
}
function re(e6) {
  return null === e6 || Number.isInteger(e6);
}
function le() {
  return true;
}
function oe(e6, n) {
  let i2;
  switch (e6.type) {
    case "date":
    case "integer":
    case "long":
    case "small-integer":
    case "big-integer":
    case "esriFieldTypeDate":
    case "esriFieldTypeInteger":
    case "esriFieldTypeLong":
    case "esriFieldTypeSmallInteger":
    case "esriFieldTypeBigInteger":
      i2 = e6.nullable ? re : Number.isInteger;
      break;
    case "double":
    case "single":
    case "esriFieldTypeSingle":
    case "esriFieldTypeDouble":
      i2 = e6.nullable ? te : ie;
      break;
    case "string":
    case "esriFieldTypeString":
      i2 = e6.nullable ? u2 : e2;
      break;
    default:
      i2 = le;
  }
  return 1 === arguments.length ? i2 : i2(n);
}
var se = ["integer", "small-integer", "big-integer"];
var ae = ["single", "double"];
var ue = [...se, ...ae];
var fe = ["esriFieldTypeInteger", "esriFieldTypeSmallInteger", "esriFieldTypeBigInteger"];
var ce = ["esriFieldTypeSingle", "esriFieldTypeDouble"];
var de = /* @__PURE__ */ new Set([...se, ...fe]);
var pe = /* @__PURE__ */ new Set([...ae, ...ce]);
var me = u(de, pe);
function ye(e6) {
  return null != e6 && de.has(e6.type);
}
function ge(e6) {
  return null != e6 && me.has(e6.type);
}
function Fe(e6) {
  return null != e6 && ("string" === e6.type || "esriFieldTypeString" === e6.type);
}
function Ie(e6) {
  return null != e6 && ("date" === e6.type || "esriFieldTypeDate" === e6.type);
}
function be(e6) {
  return null != e6 && ("date-only" === e6.type || "esriFieldTypeDateOnly" === e6.type);
}
function we(e6) {
  return null != e6 && ("timestamp-offset" === e6.type || "esriFieldTypeTimestampOffset" === e6.type);
}
function xe(e6) {
  return null != e6 && ("time-only" === e6.type || "esriFieldTypeTimeOnly" === e6.type);
}
function Te(e6) {
  return null != e6 && ("oid" === e6.type || "esriFieldTypeOID" === e6.type);
}
function he(e6) {
  return null != e6 && ("global-id" === e6.type || "esriFieldTypeGlobalID" === e6.type);
}
function Ee(e6, n) {
  return null === Se(e6, n);
}
var _e;
var Ae;
function ve(e6) {
  return null == e6 || "number" == typeof e6 && isNaN(e6) ? null : e6;
}
function Se(e6, n) {
  return null == e6 || e6.nullable && null === n ? null : oe(e6, n) ? ge(e6) && !Ne(e6.type, Number(n)) ? _e.OUT_OF_RANGE : null : Ae.INVALID_TYPE;
}
function Ne(e6, n) {
  const i2 = "string" == typeof e6 ? Le(e6) : e6;
  if (!i2) return false;
  const t4 = i2.min, r2 = i2.max;
  return i2.isInteger ? Number.isInteger(n) && n >= t4 && n <= r2 : n >= t4 && n <= r2;
}
function Le(e6) {
  switch (e6) {
    case "esriFieldTypeSmallInteger":
    case "small-integer":
      return De;
    case "esriFieldTypeInteger":
    case "integer":
      return Me;
    case "esriFieldTypeBigInteger":
    case "big-integer":
      return Ve;
    case "esriFieldTypeSingle":
    case "single":
      return Re;
    case "esriFieldTypeDouble":
    case "double":
      return je;
  }
}
!function(e6) {
  e6.OUT_OF_RANGE = "numeric-range-validation-error::out-of-range";
}(_e || (_e = {})), function(e6) {
  e6.INVALID_TYPE = "type-validation-error::invalid-type";
}(Ae || (Ae = {}));
var De = { min: -32768, max: 32767, isInteger: true, rawMin: -32768, rawMax: 32767 };
var Me = { min: -2147483648, max: 2147483647, isInteger: true, rawMin: -2147483648, rawMax: 2147483647 };
var Ve = { min: -Number.MAX_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER, isInteger: true, rawMin: -Number.MAX_SAFE_INTEGER, rawMax: Number.MAX_SAFE_INTEGER };
var Re = { min: -34e37, max: 12e37, isInteger: false, rawMin: -34e37, rawMax: 12e37 };
var je = { min: -Number.MAX_VALUE, max: Number.MAX_VALUE, isInteger: false, rawMin: -Number.MAX_VALUE, rawMax: Number.MAX_VALUE };
function Ue(e6, n, i2) {
  switch (e6) {
    case r.INVALID_CODED_VALUE:
      return `Value ${i2} is not in the coded domain - field: ${n.name}, domain: ${JSON.stringify(n.domain)}`;
    case r.VALUE_OUT_OF_RANGE:
      return `Value ${i2} is out of the range of valid values - field: ${n.name}, domain: ${JSON.stringify(n.domain)}`;
    case Ae.INVALID_TYPE:
      return `Value ${i2} is not a valid value for the field type - field: ${n.name}, type: ${n.type}, nullable: ${n.nullable}`;
    case _e.OUT_OF_RANGE: {
      const { min: e7, max: t4 } = Le(n.type);
      return `Value ${i2} is out of range for the number type - field: ${n.name}, type: ${n.type}, value range is ${e7} to ${t4}`;
    }
  }
}
function ke(e6, n) {
  return !Ce(e6, n, null);
}
function Ce(e6, n, i2) {
  if (!(n == null ? void 0 : n.attributes) || !e6) {
    if (null != i2) for (const n2 of e6 ?? []) i2.add(n2);
    return true;
  }
  const t4 = new Set(Object.keys(n.attributes));
  let r2 = false;
  for (const l3 of e6) if (!t4.has(l3)) {
    if (r2 = true, null == i2) break;
    i2.add(l3);
  }
  return r2;
}
function Pe(e6) {
  return !!e6 && ["raster.itempixelvalue", "raster.servicepixelvalue"].some((n) => e6.toLowerCase().startsWith(n));
}
function Xe(e6) {
  const n = e6 == null ? void 0 : e6.match(/{[^}]+}/g);
  return n ? n.map((e7) => e7.slice(1, -1).split(":")[0].trim()) : [];
}

export {
  f2 as f,
  e5 as e,
  p,
  g,
  I,
  w,
  x,
  T,
  h,
  E,
  _,
  v,
  L,
  D,
  M2 as M,
  R,
  j,
  C,
  P,
  W,
  H2 as H,
  Q,
  ee,
  ne,
  ye,
  ge,
  Fe,
  Ie,
  be,
  we,
  xe,
  Te,
  he,
  Ee,
  ve,
  Se,
  Ue,
  ke,
  Pe,
  Xe
};
//# sourceMappingURL=chunk-6REABBOQ.js.map
