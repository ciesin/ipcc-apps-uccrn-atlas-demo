import {
  i,
  r
} from "./chunk-Z2A222O3.js";
import {
  y
} from "./chunk-FF44HCOD.js";
import {
  m
} from "./chunk-Y3AY7I5U.js";
import {
  DateTime
} from "./chunk-AIKBABBU.js";

// node_modules/@arcgis/core/arcade/featureset/support/shared.js
var o;
var l;
function s(e) {
  return y.fromJSON(e.toJSON());
}
function y2(e) {
  return e.toJSON ? e.toJSON() : e;
}
function d(e) {
  return e instanceof Date;
}
function m2(e) {
  return e instanceof DateTime;
}
function f(i2) {
  return i2 instanceof m;
}
function g(e) {
  return e instanceof i;
}
function T(e) {
  return e instanceof r;
}
!function(e) {
  e[e.Standardised = 0] = "Standardised", e[e.StandardisedNoInterval = 1] = "StandardisedNoInterval", e[e.SqlServer = 2] = "SqlServer", e[e.Oracle = 3] = "Oracle", e[e.Postgres = 4] = "Postgres", e[e.PGDB = 5] = "PGDB", e[e.FILEGDB = 6] = "FILEGDB", e[e.NotEvaluated = 7] = "NotEvaluated";
}(o || (o = {})), function(e) {
  e[e.InFeatureSet = 0] = "InFeatureSet", e[e.NotInFeatureSet = 1] = "NotInFeatureSet", e[e.Unknown = 2] = "Unknown";
}(l || (l = {}));
var O = 1e3;
var D = { point: "point", polygon: "polygon", polyline: "polyline", multipoint: "multipoint", extent: "extent", esriGeometryPoint: "point", esriGeometryPolygon: "polygon", esriGeometryPolyline: "polyline", esriGeometryMultipoint: "multipoint", esriGeometryEnvelope: "extent", envelope: "extent" };
var P = { point: "esriGeometryPoint", polygon: "esriGeometryPolygon", polyline: "esriGeometryPolyline", multipoint: "esriGeometryMultipoint", extent: "esriGeometryEnvelope", esriGeometryPoint: "esriGeometryPoint", esriGeometryPolygon: "esriGeometryPolygon", esriGeometryPolyline: "esriGeometryPolyline", esriGeometryMultipoint: "esriGeometryMultipoint", esriGeometryEnvelope: "esriGeometryEnvelope", envelope: "esriGeometryEnvelope" };
var b = { "small-integer": "esriFieldTypeSmallInteger", integer: "esriFieldTypeInteger", long: "esriFieldTypeLong", single: "esriFieldTypeSingle", double: "esriFieldTypeDouble", string: "esriFieldTypeString", date: "esriFieldTypeDate", "date-only": "esriFieldTypeDateOnly", "time-only": "esriFieldTypeTimeOnly", "timestamp-offset": "esriFieldTypeTimestampOffset", oid: "esriFieldTypeOID", geometry: "esriFieldTypeGeometry", blob: "esriFieldTypeBlob", raster: "esriFieldTypeRaster", guid: "esriFieldTypeGUID", "global-id": "esriFieldTypeGlobalID", xml: "esriFieldTypeXML", "big-integer": "esriFieldTypeBigInteger", esriFieldTypeSmallInteger: "esriFieldTypeSmallInteger", esriFieldTypeInteger: "esriFieldTypeInteger", esriFieldTypeLong: "esriFieldTypeLong", esriFieldTypeSingle: "esriFieldTypeSingle", esriFieldTypeDouble: "esriFieldTypeDouble", esriFieldTypeString: "esriFieldTypeString", esriFieldTypeDate: "esriFieldTypeDate", esriFieldTypeDateOnly: "esriFieldTypeDateOnly", esriFieldTypeTimeOnly: "esriFieldTypeTimeOnly", esriFieldTypeTimestampOffset: "esriFieldTypeTimestampOffset", esriFieldTypeOID: "esriFieldTypeOID", esriFieldTypeGeometry: "esriFieldTypeGeometry", esriFieldTypeBlob: "esriFieldTypeBlob", esriFieldTypeRaster: "esriFieldTypeRaster", esriFieldTypeGUID: "esriFieldTypeGUID", esriFieldTypeGlobalID: "esriFieldTypeGlobalID", esriFieldTypeXML: "esriFieldTypeXML", esriFieldTypeBigInteger: "esriFieldTypeBigInteger" };
function E(e) {
  return void 0 === e ? "" : e = (e = (e = e.replace(/\/featureserver\/[0-9]*/i, "/FeatureServer")).replace(/\/mapserver\/[0-9]*/i, "/MapServer")).split("?")[0];
}
function J(e, i2) {
  i2 || (i2 = {}), "function" == typeof i2 && (i2 = { cmp: i2 });
  const r2 = "boolean" == typeof i2.cycles && i2.cycles, t = i2.cmp && (n = i2.cmp, function(e2) {
    return function(i3, r3) {
      const t2 = { key: i3, value: e2[i3] }, o3 = { key: r3, value: e2[r3] };
      return n(t2, o3);
    };
  });
  var n;
  const o2 = [];
  return function e2(i3) {
    if ((i3 == null ? void 0 : i3.toJSON) && "function" == typeof i3.toJSON && (i3 = i3.toJSON()), void 0 === i3) return;
    if ("number" == typeof i3) return isFinite(i3) ? "" + i3 : "null";
    if ("object" != typeof i3) return JSON.stringify(i3);
    let n2, l2;
    if (Array.isArray(i3)) {
      for (l2 = "[", n2 = 0; n2 < i3.length; n2++) n2 && (l2 += ","), l2 += e2(i3[n2]) || "null";
      return l2 + "]";
    }
    if (null === i3) return "null";
    if (o2.includes(i3)) {
      if (r2) return JSON.stringify("__cycle__");
      throw new TypeError("Converting circular structure to JSON");
    }
    const s2 = o2.push(i3) - 1, y3 = Object.keys(i3).sort(t == null ? void 0 : t(i3));
    for (l2 = "", n2 = 0; n2 < y3.length; n2++) {
      const r3 = y3[n2], t2 = e2(i3[r3]);
      t2 && (l2 && (l2 += ","), l2 += JSON.stringify(r3) + ":" + t2);
    }
    return o2.splice(s2, 1), "{" + l2 + "}";
  }(e);
}
function M(e) {
  switch (e.type) {
    case "catalog":
    case "csv":
    case "feature":
    case "geojson":
    case "knowledge-graph-sublayer":
    case "oriented-imagery":
    case "subtype-group":
    case "wfs":
      return true;
    default:
      return false;
  }
}
function x(e) {
  switch (e.type) {
    case "catalog-footprint":
    case "subtype-sublayer":
      return true;
    default:
      return M(e);
  }
}

export {
  o,
  l,
  s,
  y2 as y,
  d,
  m2 as m,
  f,
  g,
  T,
  O,
  D,
  P,
  b,
  E,
  J,
  M,
  x
};
//# sourceMappingURL=chunk-SCYMP6Y5.js.map
