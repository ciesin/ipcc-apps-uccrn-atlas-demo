import {
  g as g2
} from "./chunk-YG5V2HGZ.js";
import {
  E,
  I as I2,
  N
} from "./chunk-WPOAQZKK.js";
import {
  it,
  st,
  ut
} from "./chunk-F7TFMQ3A.js";
import {
  e
} from "./chunk-YRSM2W7P.js";
import {
  u
} from "./chunk-PMRN4OAI.js";
import {
  Z
} from "./chunk-FFVHLGAP.js";
import {
  i
} from "./chunk-AVY6RZDG.js";
import {
  y
} from "./chunk-YUVX6H42.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  U
} from "./chunk-LTDNORB5.js";
import {
  n as n2
} from "./chunk-UNGOQUF2.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  Et,
  I,
  _
} from "./chunk-F7TCEOHX.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/ogc/ogcFeatureUtils.js
var F = () => n.getLogger("esri.layers.ogc.ogcFeatureUtils");
var I3 = "startindex";
var T = /* @__PURE__ */ new Set([I3, "offset"]);
var k = "http://www.opengis.net/def/crs/";
var x = `${k}OGC/1.3/CRS84`;
var S;
async function v(n3, o, s2 = {}, a = 5) {
  const { links: l } = n3, c = U2(l, "items", S.geojson) || U2(l, "http://www.opengis.net/def/rel/ogc/1.0/items", S.geojson);
  if (null == c) throw new s("ogc-feature-layer:missing-items-page", "Missing items url");
  const { apiKey: u2, customParameters: d, signal: f } = s2, g3 = _(c.href, n3.landingPage.url), w = { limit: a, ...d, token: u2 }, T2 = Et(g3, w), k2 = { accept: S.geojson }, { data: x2 } = await P(T2, { signal: f, headers: k2 }), v2 = A(T2, a, x2.links) ?? I3;
  E(x2);
  const N3 = I2(x2, { geometryType: o.geometryType }), O2 = o.fields || N3.fields || [], P3 = null != o.hasZ ? o.hasZ : N3.hasZ, q2 = N3.geometryType, C2 = o.objectIdField || N3.objectIdFieldName || "OBJECTID";
  let R2 = o.timeInfo;
  const $2 = O2.find(({ name: e2 }) => e2 === C2);
  if ($2) $2.editable = false, $2.nullable = false;
  else {
    if (!N3.objectIdFieldType) throw new s("ogc-feature-layer:missing-feature-id", "Collection geojson require a feature id as a unique identifier");
    O2.unshift({ name: C2, alias: C2, type: "number" === N3.objectIdFieldType ? "esriFieldTypeOID" : "esriFieldTypeString", editable: false, nullable: false });
  }
  if (C2 !== N3.objectIdFieldName) {
    const e2 = O2.find(({ name: e3 }) => e3 === N3.objectIdFieldName);
    e2 && (e2.type = "esriFieldTypeInteger");
  }
  O2 === N3.fields && N3.unknownFields.length > 0 && F().warn({ name: "ogc-feature-layer:unknown-field-types", message: "Some fields types couldn't be inferred from the features and were dropped", details: { unknownFields: N3.unknownFields } });
  for (const e2 of O2) {
    if (null == e2.name && (e2.name = e2.alias), null == e2.alias && (e2.alias = e2.name), "esriFieldTypeOID" !== e2.type && "esriFieldTypeGlobalID" !== e2.type && (e2.editable = null == e2.editable || !!e2.editable, e2.nullable = null == e2.nullable || !!e2.nullable), !e2.name) throw new s("ogc-feature-layer:invalid-field-name", "field name is missing", { field: e2 });
    if (!i.jsonValues.includes(e2.type)) throw new s("ogc-feature-layer:invalid-field-type", `invalid type for field "${e2.name}"`, { field: e2 });
  }
  if (R2) {
    const e2 = new Z(O2);
    if (R2.startTimeField) {
      const t = e2.get(R2.startTimeField);
      t ? (R2.startTimeField = t.name, t.type = "esriFieldTypeDate") : R2.startTimeField = null;
    }
    if (R2.endTimeField) {
      const t = e2.get(R2.endTimeField);
      t ? (R2.endTimeField = t.name, t.type = "esriFieldTypeDate") : R2.endTimeField = null;
    }
    if (R2.trackIdField) {
      const t = e2.get(R2.trackIdField);
      t ? R2.trackIdField = t.name : (R2.trackIdField = null, F().warn({ name: "ogc-feature-layer:invalid-timeInfo-trackIdField", message: "trackIdField is missing", details: { timeInfo: R2 } }));
    }
    R2.timeReference || (R2.timeReference = { timeZoneIANA: n2 }), R2.startTimeField || R2.endTimeField || (F().warn({ name: "ogc-feature-layer:invalid-timeInfo", message: "startTimeField and endTimeField are missing", details: { timeInfo: R2 } }), R2 = void 0);
  }
  return { drawingInfo: q2 ? u(q2) : null, extent: L(n3), geometryType: q2, fields: O2, hasZ: !!P3, objectIdField: C2, paginationParameter: v2, timeInfo: R2 };
}
async function N2(n3, r = {}) {
  const { links: o, url: s2 } = n3, a = U2(o, "data", S.json) || U2(o, "http://www.opengis.net/def/rel/ogc/1.0/data", S.json);
  if (null == a) throw new s("ogc-feature-layer:missing-collections-page", "Missing collections url");
  const { apiKey: l, customParameters: c, signal: u2 } = r, d = _(a.href, s2), { data: f } = await P(d, { signal: u2, headers: { accept: S.json }, query: { ...c, token: l } });
  for (const e2 of f.collections) e2.landingPage = n3;
  return f;
}
async function O(n3, r = {}) {
  const { links: o, url: s2 } = n3, a = U2(o, "conformance", S.json) || U2(o, "http://www.opengis.net/def/rel/ogc/1.0/conformance", S.json);
  if (null == a) throw new s("ogc-feature-layer:missing-conformance-page", "Missing conformance url");
  const { apiKey: l, customParameters: c, signal: u2 } = r, d = _(a.href, s2), { data: f } = await P(d, { signal: u2, headers: { accept: S.json }, query: { ...c, token: l } });
  return f;
}
async function P2(t, n3 = {}) {
  const { apiKey: i2, customParameters: r, signal: o } = n3, { data: s2 } = await P(t, { signal: o, headers: { accept: S.json }, query: { ...r, token: i2 } });
  return s2.url = t, s2;
}
async function q(t, n3 = {}) {
  const { links: r, url: o } = t, s2 = U2(r, "service-desc", S.openapi);
  if (null == s2) return F().warn("ogc-feature-layer:missing-openapi-page", "The OGC API-Features server does not have an OpenAPI page."), null;
  const { apiKey: a, customParameters: l, signal: c } = n3, u2 = _(s2.href, o), { data: d } = await P(u2, { signal: c, headers: { accept: S.openapi }, query: { ...l, token: a } });
  return d;
}
function C(e2) {
  const t = /^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e2), n3 = t == null ? void 0 : t.groups;
  if (!n3) return null;
  const { authority: i2, code: r } = n3;
  switch (i2.toLowerCase()) {
    case "ogc":
      switch (r.toLowerCase()) {
        case "crs27":
          return g.GCS_NAD_1927.wkid;
        case "crs83":
          return 4269;
        case "crs84":
        case "crs84h":
          return g.WGS84.wkid;
        default:
          return null;
      }
    case "esri":
    case "epsg": {
      const e3 = Number.parseInt(r, 10);
      return Number.isNaN(e3) ? null : e3;
    }
    default:
      return null;
  }
}
async function R(e2, t, n3) {
  const i2 = await $(e2, t, n3);
  return it(i2);
}
async function $(n3, r, o) {
  const { collection: { links: c, landingPage: { url: m } }, layerDefinition: p, maxRecordCount: y2, queryParameters: { apiKey: b, customParameters: h }, spatialReference: F2, supportedCrs: I4 } = n3, T2 = U2(c, "items", S.geojson) || U2(c, "http://www.opengis.net/def/rel/ogc/1.0/items", S.geojson);
  if (null == T2) throw new s("ogc-feature-layer:missing-items-page", "Missing items url");
  const { geometry: k2, num: x2, start: v2, timeExtent: N3, where: O2 } = r;
  if (r.objectIds) throw new s("ogc-feature-layer:query-by-objectids-not-supported", "Queries with object ids are not supported");
  const P3 = g.fromJSON(F2), q2 = r.outSpatialReference ?? P3, C2 = q2.isWGS84 ? null : W(q2, I4), R2 = K(k2, I4), $2 = M(N3), G2 = Z2(O2), D2 = x2 ?? (null == v2 ? y2 : 10), L2 = 0 === v2 ? void 0 : v2, { fields: A2, geometryType: J, hasZ: z, objectIdField: E2, paginationParameter: _2 } = p, B = _(T2.href, m), { data: Q } = await P(B, { ...o, query: { ...h, ...R2, crs: C2, datetime: $2, query: G2, limit: D2, [_2]: L2, token: b }, headers: { accept: S.geojson } }), V = N(Q, { geometryType: J, hasZ: z, objectIdField: E2 }), H = V.length === D2 && !!U2(Q.links ?? [], "next", S.geojson), X = new Z(A2);
  for (const e2 of V) {
    const t = {};
    g2(X, t, e2.attributes, true);
    for (const e3 of X.fields) e3.nullable && !(e3.name in t) && (t[e3.name] = null);
    t[E2] = e2.attributes[E2], e2.attributes = t;
  }
  if (!C2 && q2.isWebMercator) {
    for (const e2 of V) if (null != e2.geometry && null != J) {
      const t = ut(e2.geometry, J, z, false);
      t.spatialReference = g.WGS84, e2.geometry = st(y(t, q2));
    }
  }
  for (const e2 of V) e2.objectId = e2.attributes[E2];
  const Y = C2 || !C2 && q2.isWebMercator ? q2.toJSON() : U, ee = new e();
  return ee.exceededTransferLimit = H, ee.features = V, ee.fields = A2, ee.geometryType = J, ee.hasZ = z, ee.objectIdFieldName = E2, ee.spatialReference = Y, ee;
}
function G(e2) {
  return null != e2 && "extent" === e2.type;
}
function W(e2, t) {
  const { isWebMercator: n3, wkid: i2 } = e2;
  if (!i2) return null;
  const r = n3 ? t[3857] ?? t[102100] ?? t[102113] ?? t[900913] : t[e2.wkid];
  return r ? `${k}${r}` : null;
}
function D(e2) {
  if (null == e2) return "";
  const { xmin: t, ymin: n3, xmax: i2, ymax: r } = e2;
  return `${t},${n3},${i2},${r}`;
}
function M(e2) {
  if (null == e2) return null;
  const { start: t, end: n3 } = e2;
  return `${null != t ? t.toISOString() : ".."}/${null != n3 ? n3.toISOString() : ".."}`;
}
function Z2(e2) {
  return null != e2 && e2 && "1=1" !== e2 ? e2 : null;
}
function K(e2, t) {
  if (!G(e2)) return null;
  const { spatialReference: n3 } = e2;
  if (!n3 || n3.isWGS84) return { bbox: D(e2) };
  const i2 = W(n3, t);
  return null != i2 ? { bbox: D(e2), "bbox-crs": i2 } : n3.isWebMercator ? { bbox: D(y(e2, g.WGS84)) } : null;
}
function L(e2) {
  var _a;
  const t = (_a = e2.extent) == null ? void 0 : _a.spatial;
  if (!t) return null;
  const n3 = t.bbox[0], i2 = 4 === n3.length, [r, o] = n3, a = i2 ? void 0 : n3[2];
  return { xmin: r, ymin: o, xmax: i2 ? n3[2] : n3[3], ymax: i2 ? n3[3] : n3[4], zmin: a, zmax: i2 ? void 0 : n3[5], spatialReference: g.WGS84.toJSON() };
}
function U2(e2, t, n3) {
  return e2.find(({ rel: e3, type: i2 }) => e3 === t && i2 === n3) ?? e2.find(({ rel: e3, type: n4 }) => e3 === t && !n4);
}
function A(e2, t, n3) {
  var _a;
  if (!n3) return;
  const i2 = U2(n3, "next", S.geojson), r = (_a = I(i2 == null ? void 0 : i2.href)) == null ? void 0 : _a.query;
  if (!r) return;
  const s2 = I(e2).query, a = Object.keys(s2 ?? {}), l = Object.entries(r).filter(([e3]) => !a.includes(e3)).find(([e3, n4]) => T.has(e3.toLowerCase()) && Number.parseInt(n4, 10) === t), c = l == null ? void 0 : l[0];
  return c;
}
!function(e2) {
  e2.json = "application/json", e2.geojson = "application/geo+json", e2.openapi = "application/vnd.oai.openapi+json;version=3.0";
}(S || (S = {}));

export {
  k,
  x,
  v,
  N2 as N,
  O,
  P2 as P,
  q,
  C,
  R,
  $
};
//# sourceMappingURL=chunk-57VINKNP.js.map
