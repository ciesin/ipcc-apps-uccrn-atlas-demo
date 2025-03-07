import {
  n as n2,
  o as o2
} from "./chunk-UPCUQD3Z.js";
import {
  u
} from "./chunk-WPOAQZKK.js";
import {
  y as y2
} from "./chunk-FF44HCOD.js";
import {
  O,
  Q
} from "./chunk-4WERUJEK.js";
import {
  ne
} from "./chunk-6REABBOQ.js";
import {
  y
} from "./chunk-XCRRZPKE.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  U,
  s2
} from "./chunk-LTDNORB5.js";
import {
  P2 as P,
  p2 as p
} from "./chunk-UFBX3XSC.js";
import {
  $t,
  F,
  dt
} from "./chunk-F7TCEOHX.js";
import {
  n,
  o2 as o
} from "./chunk-RYSF6YCR.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/ogc/wfsUtils.js
var T = "xlink:href";
var F2 = "2.0.0";
var S = "__esri_wfs_id__";
var x = "wfs-layer:getWFSLayerTypeInfo-error";
var E = "wfs-layer:empty-service";
var C = "wfs-layer:feature-type-not-found";
var R = "wfs-layer:geojson-not-supported";
var k = "wfs-layer:kvp-encoding-not-supported";
var P2 = "wfs-layer:malformed-json";
var j = "wfs-layer:unknown-geometry-type";
var A = "wfs-layer:unknown-field-type";
var N = "wfs-layer:unsupported-spatial-reference";
var G = "wfs-layer:unsupported-wfs-version";
async function v(t, r) {
  const n3 = U2((await P(t, { responseType: "text", query: { SERVICE: "WFS", REQUEST: "GetCapabilities", VERSION: F2, ...r == null ? void 0 : r.customParameters }, signal: r == null ? void 0 : r.signal })).data);
  return L(t, n3), n3;
}
function U2(e) {
  const t = te(e);
  ne2(t), ae(t);
  const n3 = t.firstElementChild, a = n(O2(n3));
  return { operations: D(n3), get featureTypes() {
    return Array.from(a());
  }, readFeatureTypes: a };
}
var I = ["json", "application/json", "geojson", "application/json; subtype=geojson", "application/geo+json"];
function M(e) {
  for (const t of I) {
    const r = e.findIndex((e2) => e2.toLowerCase() === t);
    if (r >= 0) return e[r];
  }
  return null;
}
function D(e) {
  let r = false;
  const n3 = { GetCapabilities: { url: "" }, DescribeFeatureType: { url: "" }, GetFeature: { url: "", outputFormat: null, supportsPagination: false } }, a = [], o3 = [];
  if (o2(e, { OperationsMetadata: { Parameter: (e2) => {
    if ("outputFormat" === e2.getAttribute("name")) return { AllowedValues: { Value: ({ textContent: e3 }) => {
      e3 && a.push(e3);
    } } };
  }, Operation: (e2) => {
    switch (e2.getAttribute("name")) {
      case "GetCapabilities":
        return { DCP: { HTTP: { Get: (e3) => {
          n3.GetCapabilities.url = e3.getAttribute(T);
        } } } };
      case "DescribeFeatureType":
        return { DCP: { HTTP: { Get: (e3) => {
          n3.DescribeFeatureType.url = e3.getAttribute(T);
        } } } };
      case "GetFeature":
        return { DCP: { HTTP: { Get: (e3) => {
          n3.GetFeature.url = e3.getAttribute(T);
        } } }, Parameter: (e3) => {
          if ("outputFormat" === e3.getAttribute("name")) return { AllowedValues: { Value: ({ textContent: e4 }) => {
            e4 && o3.push(e4);
          } } };
        } };
    }
  }, Constraint: (e2) => {
    switch (e2.getAttribute("name")) {
      case "KVPEncoding":
        return { DefaultValue: (e3) => {
          r = "true" === e3.textContent.toLowerCase();
        } };
      case "ImplementsResultPaging":
        return { DefaultValue: (e3) => {
          n3.GetFeature.supportsPagination = "true" === e3.textContent.toLowerCase();
        } };
    }
  } } }), n3.GetFeature.outputFormat = M(o3) ?? M(a), !r) throw new s(k, "WFS service doesn't support key/value pair (KVP) encoding");
  if (null == n3.GetFeature.outputFormat) throw new s(R, "WFS service doesn't support GeoJSON output format");
  return n3;
}
function L(e, t) {
  dt(e) && (F(e, t.operations.DescribeFeatureType.url, true) && (t.operations.DescribeFeatureType.url = $t(t.operations.DescribeFeatureType.url)), F(e, t.operations.GetFeature.url, true) && (t.operations.GetFeature.url = $t(t.operations.GetFeature.url)));
}
function V(e) {
  var _a, _b, _c;
  const t = parseInt(((_c = (_b = (_a = e.textContent) == null ? void 0 : _a.match(/(?<wkid>\d+$)/i)) == null ? void 0 : _b.groups) == null ? void 0 : _c.wkid) ?? "", 10);
  if (!Number.isNaN(t)) return t;
}
function O2(e) {
  return n2(e, { FeatureTypeList: { FeatureType: (e2) => {
    const t = { typeName: "undefined:undefined", name: "", title: "", description: "", extent: null, namespacePrefix: "", namespaceUri: "", defaultSpatialReference: 4326, supportedSpatialReferences: [] }, r = /* @__PURE__ */ new Set();
    return o2(e2, { Name: (e3) => {
      const { name: r2, prefix: n3 } = re(e3.textContent);
      t.typeName = `${n3}:${r2}`, t.name = r2, t.namespacePrefix = n3, t.namespaceUri = e3.lookupNamespaceURI(n3);
    }, Abstract: (e3) => {
      t.description = e3.textContent;
    }, Title: (e3) => {
      t.title = e3.textContent;
    }, WGS84BoundingBox: (e3) => {
      t.extent = w.fromJSON($(e3));
    }, DefaultCRS: (e3) => {
      const n3 = V(e3);
      n3 && (t.defaultSpatialReference = n3, r.add(n3));
    }, OtherCRS: (e3) => {
      const t2 = V(e3);
      t2 && r.add(t2);
    } }), t.title || (t.title = t.name), r.add(4326), t.supportedSpatialReferences.push(...r), t;
  } } });
}
function $(e) {
  let t, r, n3, a;
  for (const o3 of e.children) switch (o3.localName) {
    case "LowerCorner":
      [t, r] = o3.textContent.split(" ").map((e2) => Number.parseFloat(e2));
      break;
    case "UpperCorner":
      [n3, a] = o3.textContent.split(" ").map((e2) => Number.parseFloat(e2));
  }
  return { xmin: t, ymin: r, xmax: n3, ymax: a, spatialReference: U };
}
function Y(e, t, r) {
  return o(e, (e2) => r ? e2.name === t && e2.namespaceUri === r : e2.typeName === t || e2.name === t);
}
async function W(e, t, r, n3 = {}) {
  const { featureType: a, extent: o3 } = await X(e, t, r, n3), { spatialReference: i } = oe(e.operations.GetFeature.url, a, n3.spatialReference), { fields: s3, geometryType: u2, swapXY: p2, objectIdField: c, geometryField: m } = await q(e, a, i, n3);
  return { url: e.operations.GetCapabilities.url, name: a.name, namespaceUri: a.namespaceUri, fields: s3, geometryField: m, geometryType: u2, objectIdField: c, spatialReference: n3.spatialReference ?? new g({ wkid: a.defaultSpatialReference }), extent: o3, swapXY: p2, wfsCapabilities: e, customParameters: n3.customParameters };
}
async function X(e, r, n3, a = {}) {
  const o3 = e.readFeatureTypes(), i = r ? Y(o3, r, n3) : o3.next().value, { spatialReference: s3 = new g({ wkid: i == null ? void 0 : i.defaultSpatialReference }) } = a;
  if (null == i) throw r ? new s(C, `The type '${r}' could not be found in the service`) : new s(E, "The service is empty");
  let c = i.extent;
  if (c && !s2(c.spatialReference, s3)) try {
    await Q(c.spatialReference, s3, void 0, a), c = O(c, s3);
  } catch {
    throw new s(N, "Projection not supported");
  }
  return { extent: c, spatialReference: s3, featureType: i };
}
async function q(e, r, n3, a = {}) {
  var _a, _b, _c;
  const { typeName: o3 } = r, [i, s3] = await Promise.allSettled([J(e.operations.DescribeFeatureType.url, o3, a), _(e, o3, n3, a)]), u2 = (e2) => new s(x, `An error occurred while getting info about the feature type '${o3}'`, { error: e2 });
  if ("rejected" === i.status) throw u2(i.reason);
  if ("rejected" === s3.status) throw u2(s3.reason);
  const { fields: p2, errors: l } = i.value ?? {}, c = ((_a = i.value) == null ? void 0 : _a.geometryType) || ((_b = s3.value) == null ? void 0 : _b.geometryType), m = ((_c = s3.value) == null ? void 0 : _c.swapXY) ?? false;
  if (null == c) throw new s(j, `The geometry type could not be determined for type '${o3}`, { typeName: o3, geometryType: c, fields: p2, errors: l });
  return { ...z(p2 ?? []), geometryType: c, swapXY: m };
}
function z(e) {
  const t = e.find((e2) => "geometry" === e2.type);
  let r = e.find((e2) => "oid" === e2.type);
  return e = e.filter((e2) => "geometry" !== e2.type), r || (r = new y2({ name: S, type: "oid", alias: S }), e.unshift(r)), { geometryField: (t == null ? void 0 : t.name) ?? null, objectIdField: r.name, fields: e };
}
async function _(t, r, n3, a = {}) {
  var _a;
  let o3, i = false;
  const [s3, u2] = await Promise.all([K(t.operations.GetFeature.url, r, n3, t.operations.GetFeature.outputFormat, { ...a, count: 1 }), P(t.operations.GetFeature.url, { responseType: "text", query: Z(r, n3, void 0, { ...a, count: 1 }), signal: a == null ? void 0 : a.signal })]), p2 = "FeatureCollection" === s3.type && ((_a = s3.features[0]) == null ? void 0 : _a.geometry);
  if (p2) {
    let e;
    switch (o3 = y.fromJSON(u(p2.type)), p2.type) {
      case "Point":
        e = p2.coordinates;
        break;
      case "LineString":
      case "MultiPoint":
        e = p2.coordinates[0];
        break;
      case "MultiLineString":
      case "Polygon":
        e = p2.coordinates[0][0];
        break;
      case "MultiPolygon":
        e = p2.coordinates[0][0][0];
    }
    const t2 = /<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(u2.data);
    if (t2) {
      const r2 = e[0].toFixed(3), n4 = e[1].toFixed(3), a2 = parseFloat(t2[1]).toFixed(3);
      r2 === parseFloat(t2[2]).toFixed(3) && n4 === a2 && (i = true);
    }
  }
  return { geometryType: o3, swapXY: i };
}
async function J(t, r, n3) {
  return Q2(r, (await P(t, { responseType: "text", query: { SERVICE: "WFS", REQUEST: "DescribeFeatureType", VERSION: F2, TYPENAME: r, TYPENAMES: r, ...n3 == null ? void 0 : n3.customParameters }, signal: n3 == null ? void 0 : n3.signal })).data);
}
function Q2(e, r) {
  const { name: a } = re(e), o3 = te(r);
  ae(o3);
  const i = o(n2(o3.firstElementChild, { element: (e2) => e2 }), (e2) => e2.getAttribute("name") === a);
  if (null != i) {
    const e2 = i.getAttribute("type"), t = e2 ? o(n2(o3.firstElementChild, { complexType: (e3) => e3 }), (t2) => t2.getAttribute("name") === re(e2).name) : o(n2(i, { complexType: (e3) => e3 }), () => true);
    if (t) return B(t);
  }
  throw new s(C, `Type '${e}' not found in document`, { document: new XMLSerializer().serializeToString(o3) });
}
var H = /* @__PURE__ */ new Set(["objectid", "fid"]);
function B(e) {
  const r = [], n3 = [];
  let a;
  const o3 = n2(e, { complexContent: { extension: { sequence: { element: (e2) => e2 } } } });
  for (const i of o3) {
    const o4 = i.getAttribute("name");
    if (!o4) continue;
    let s3, u2;
    if (i.hasAttribute("type") ? s3 = re(i.getAttribute("type")).name : o2(i, { simpleType: { restriction: (e2) => (s3 = re(e2.getAttribute("base")).name, { maxLength: (e3) => {
      u2 = +e3.getAttribute("value");
    } }) } }), !s3) continue;
    const p2 = "true" === i.getAttribute("nillable");
    let l = false;
    switch (s3.toLowerCase()) {
      case "integer":
      case "nonpositiveinteger":
      case "negativeinteger":
      case "long":
      case "int":
      case "short":
      case "byte":
      case "nonnegativeinteger":
      case "unsignedlong":
      case "unsignedint":
      case "unsignedshort":
      case "unsignedbyte":
      case "positiveinteger":
        n3.push(new y2({ name: o4, alias: o4, type: "integer", nullable: p2, length: ne("integer") }));
        break;
      case "float":
      case "double":
      case "decimal":
        n3.push(new y2({ name: o4, alias: o4, type: "double", nullable: p2, length: ne("double") }));
        break;
      case "boolean":
      case "string":
      case "gyearmonth":
      case "gyear":
      case "gmonthday":
      case "gday":
      case "gmonth":
      case "anyuri":
      case "qname":
      case "notation":
      case "normalizedstring":
      case "token":
      case "language":
      case "idrefs":
      case "entities":
      case "nmtoken":
      case "nmtokens":
      case "name":
      case "ncname":
      case "id":
      case "idref":
      case "entity":
      case "duration":
      case "time":
        n3.push(new y2({ name: o4, alias: o4, type: "string", nullable: p2, length: u2 ?? ne("string") }));
        break;
      case "datetime":
      case "date":
        n3.push(new y2({ name: o4, alias: o4, type: "date", nullable: p2, length: u2 ?? ne("date") }));
        break;
      case "pointpropertytype":
        a = "point", l = true;
        break;
      case "multipointpropertytype":
        a = "multipoint", l = true;
        break;
      case "curvepropertytype":
      case "multicurvepropertytype":
      case "multilinestringpropertytype":
        a = "polyline", l = true;
        break;
      case "surfacepropertytype":
      case "multisurfacepropertytype":
      case "multipolygonpropertytype":
        a = "polygon", l = true;
        break;
      case "geometrypropertytype":
      case "multigeometrypropertytype":
        l = true, r.push(new s(j, `geometry type '${s3}' is not supported`, { type: new XMLSerializer().serializeToString(e) }));
        break;
      default:
        r.push(new s(A, `Unknown field type '${s3}'`, { type: new XMLSerializer().serializeToString(e) }));
    }
    l && n3.push(new y2({ name: o4, alias: o4, type: "geometry", nullable: p2 }));
  }
  for (const t of n3) if ("integer" === t.type && !t.nullable && H.has(t.name.toLowerCase())) {
    t.type = "oid";
    break;
  }
  return { geometryType: a, fields: n3, errors: r };
}
async function K(r, n3, a, o3, i) {
  let { data: s3 } = await P(r, { responseType: "text", query: Z(n3, a, o3, i), signal: i == null ? void 0 : i.signal });
  s3 = s3.replaceAll(/": +(-?\d+),(\d+)(,)?/g, '": $1.$2$3');
  try {
    return JSON.parse(s3);
  } catch (u2) {
    throw new s(P2, "Error while parsing the response", { response: s3, error: u2 });
  }
}
function Z(e, t, r, n3) {
  const a = "number" == typeof t ? t : t.wkid;
  return { SERVICE: "WFS", REQUEST: "GetFeature", VERSION: F2, TYPENAMES: e, OUTPUTFORMAT: r, SRSNAME: "EPSG:" + a, STARTINDEX: n3 == null ? void 0 : n3.startIndex, COUNT: n3 == null ? void 0 : n3.count, ...n3 == null ? void 0 : n3.customParameters };
}
async function ee(t, r, n3) {
  const a = await P(t, { responseType: "text", query: { SERVICE: "WFS", REQUEST: "GetFeature", VERSION: F2, TYPENAMES: r, RESULTTYPE: "hits", ...n3 == null ? void 0 : n3.customParameters }, signal: n3 == null ? void 0 : n3.signal }), o3 = /numberMatched=["'](?<numberMatched>\d+)["']/gi.exec(a.data);
  if (o3 == null ? void 0 : o3.groups) return +o3.groups.numberMatched;
}
function te(e) {
  return new DOMParser().parseFromString(e.trim(), "text/xml");
}
function re(e) {
  const [t, r] = e.split(":");
  return { prefix: r ? t : "", name: r ?? t };
}
function ne2(e) {
  var _a;
  const r = (_a = e.firstElementChild) == null ? void 0 : _a.getAttribute("version");
  if (r && r !== F2) throw new s(G, `Unsupported WFS version ${r}. Supported version: ${F2}`);
}
function ae(e) {
  let r = "", n3 = "";
  if (o2(e.firstElementChild, { Exception: (e2) => (r = e2.getAttribute("exceptionCode"), { ExceptionText: (e3) => {
    n3 = e3.textContent;
  } }) }), r) throw new s(`wfs-layer:${r}`, n3);
}
function oe(e, t, r) {
  const n3 = { wkid: t.defaultSpatialReference }, a = null != (r == null ? void 0 : r.wkid) ? { wkid: r.wkid } : n3;
  return { spatialReference: a, getFeatureSpatialReference: p(e) || a.wkid && t.supportedSpatialReferences.includes(a.wkid) ? { wkid: a.wkid } : { wkid: t.defaultSpatialReference } };
}

export {
  S,
  v,
  Y,
  W,
  z,
  K,
  ee,
  oe
};
//# sourceMappingURL=chunk-WOOP6IGO.js.map
