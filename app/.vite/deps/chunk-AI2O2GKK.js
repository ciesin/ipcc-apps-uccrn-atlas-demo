import {
  m as m2,
  s as s2
} from "./chunk-ANGUSND2.js";
import {
  R
} from "./chunk-4NGIUHKX.js";
import {
  a as a3
} from "./chunk-WJNMFEXQ.js";
import {
  l
} from "./chunk-XCRRZPKE.js";
import {
  f
} from "./chunk-WZBMMIVS.js";
import {
  r as r3
} from "./chunk-ZYOZHQFS.js";
import {
  p
} from "./chunk-SQ6MYL73.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";
import {
  g,
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  s
} from "./chunk-BDBI2KVA.js";
import {
  o
} from "./chunk-WE4EKKVR.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2,
  h
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/rest/support/FullTextSearch.js
var i = class extends a3.ClonableMixin(S) {
  constructor(r4) {
    super(r4), this.onFields = null, this.operator = null, this.searchTerm = null, this.searchType = null;
  }
};
r([m({ type: [String], json: { write: { enabled: true, overridePolicy() {
  return { enabled: null != this.onFields && this.onFields.length > 0 };
} } } })], i.prototype, "onFields", void 0), r([m({ type: String, json: { write: true } })], i.prototype, "operator", void 0), r([m({ type: String, json: { write: true } })], i.prototype, "searchTerm", void 0), r([m({ type: String, json: { write: true } })], i.prototype, "searchType", void 0), i = r([a2("esri.rest.support.FullTextSearch")], i);
var p2 = i;

// node_modules/@arcgis/core/rest/support/QuantizationParameters.js
var p3;
var c = new o({ upperLeft: "upper-left", lowerLeft: "lower-left" });
var a4 = p3 = class extends S {
  constructor(e) {
    super(e), this.extent = null, this.mode = "view", this.originPosition = "upper-left", this.tolerance = 1;
  }
  clone() {
    return new p3(a({ extent: this.extent, mode: this.mode, originPosition: this.originPosition, tolerance: this.tolerance }));
  }
};
r([m({ type: w, json: { write: { overridePolicy() {
  return { enabled: "view" === this.mode };
} } } })], a4.prototype, "extent", void 0), r([m({ type: ["view", "edit"], json: { write: true } })], a4.prototype, "mode", void 0), r([m({ type: String, json: { read: c.read, write: c.write } })], a4.prototype, "originPosition", void 0), r([m({ type: Number, json: { write: { overridePolicy() {
  return { enabled: "view" === this.mode };
} } } })], a4.prototype, "tolerance", void 0), a4 = p3 = r([a2("esri.rest.support.QuantizationParameters")], a4);
var m3 = a4;

// node_modules/@arcgis/core/rest/support/Query.js
var S2;
var g2 = new o({ esriSRUnit_Meter: "meters", esriSRUnit_Kilometer: "kilometers", esriSRUnit_Foot: "feet", esriSRUnit_StatuteMile: "miles", esriSRUnit_NauticalMile: "nautical-miles", esriSRUnit_USNauticalMile: "us-nautical-miles" });
var R2 = S2 = class extends S {
  static from(t) {
    return h(S2, t);
  }
  constructor(t) {
    super(t), this.aggregateIds = null, this.cacheHint = void 0, this.compactGeometryEnabled = false, this.datumTransformation = null, this.defaultSpatialReferenceEnabled = false, this.distance = void 0, this.dynamicDataSource = void 0, this.formatOf3DObjects = null, this.fullText = null, this.gdbVersion = null, this.geometry = null, this.geometryPrecision = void 0, this.groupByFieldsForStatistics = null, this.having = null, this.historicMoment = null, this.maxAllowableOffset = void 0, this.maxRecordCountFactor = 1, this.multipatchOption = null, this.num = void 0, this.objectIds = null, this.orderByFields = null, this.outFields = null, this.outSpatialReference = null, this.outStatistics = null, this.parameterValues = null, this.pixelSize = null, this.quantizationParameters = null, this.rangeValues = null, this.relationParameter = null, this.resultType = null, this.returnCentroid = false, this.returnDistinctValues = false, this.returnExceededLimitFeatures = true, this.returnGeometry = false, this.returnQueryGeometry = false, this.returnM = void 0, this.returnZ = void 0, this.returnTrueCurves = void 0, this.sourceSpatialReference = null, this.spatialRelationship = "intersects", this.start = void 0, this.sqlFormat = null, this.text = null, this.timeExtent = null, this.timeReferenceUnknownClient = false, this.units = null, this.where = null;
  }
  castDatumTransformation(t) {
    return "number" == typeof t || "object" == typeof t ? t : null;
  }
  writeHistoricMoment(t, e) {
    e.historicMoment = t && t.getTime();
  }
  writeParameterValues(t, e) {
    if (t) {
      const r4 = {};
      for (const e2 in t) {
        const o2 = t[e2];
        Array.isArray(o2) ? r4[e2] = o2.map((t2) => t2 instanceof Date ? t2.getTime() : t2) : o2 instanceof Date ? r4[e2] = o2.getTime() : r4[e2] = o2;
      }
      e.parameterValues = r4;
    }
  }
  writeStart(t, e) {
    e.resultOffset = this.start, e.resultRecordCount = this.num || 10, e.where = "1=1";
  }
  writeWhere(t, e) {
    e.where = t || "1=1";
  }
  clone() {
    return new S2(a({ aggregateIds: this.aggregateIds, cacheHint: this.cacheHint, compactGeometryEnabled: this.compactGeometryEnabled, datumTransformation: this.datumTransformation, defaultSpatialReferenceEnabled: this.defaultSpatialReferenceEnabled, distance: this.distance, fullText: this.fullText, formatOf3DObjects: this.formatOf3DObjects, gdbVersion: this.gdbVersion, geometry: this.geometry, geometryPrecision: this.geometryPrecision, groupByFieldsForStatistics: this.groupByFieldsForStatistics, having: this.having, historicMoment: null != this.historicMoment ? new Date(this.historicMoment.getTime()) : null, maxAllowableOffset: this.maxAllowableOffset, maxRecordCountFactor: this.maxRecordCountFactor, multipatchOption: this.multipatchOption, num: this.num, objectIds: this.objectIds, orderByFields: this.orderByFields, outFields: this.outFields, outSpatialReference: this.outSpatialReference, outStatistics: this.outStatistics, parameterValues: this.parameterValues, pixelSize: this.pixelSize, quantizationParameters: this.quantizationParameters, rangeValues: this.rangeValues, relationParameter: this.relationParameter, resultType: this.resultType, returnDistinctValues: this.returnDistinctValues, returnGeometry: this.returnGeometry, returnCentroid: this.returnCentroid, returnExceededLimitFeatures: this.returnExceededLimitFeatures, returnQueryGeometry: this.returnQueryGeometry, returnM: this.returnM, returnZ: this.returnZ, returnTrueCurves: this.returnTrueCurves, dynamicDataSource: this.dynamicDataSource, sourceSpatialReference: this.sourceSpatialReference, spatialRelationship: this.spatialRelationship, start: this.start, sqlFormat: this.sqlFormat, text: this.text, timeExtent: this.timeExtent, timeReferenceUnknownClient: this.timeReferenceUnknownClient, units: this.units, where: this.where }));
  }
};
R2.MAX_MAX_RECORD_COUNT_FACTOR = 5, r([m({ json: { write: true } })], R2.prototype, "aggregateIds", void 0), r([m({ type: Boolean, json: { write: true } })], R2.prototype, "cacheHint", void 0), r([m({ type: Boolean, json: { default: false, write: true } })], R2.prototype, "compactGeometryEnabled", void 0), r([m({ json: { write: true } })], R2.prototype, "datumTransformation", void 0), r([s("datumTransformation")], R2.prototype, "castDatumTransformation", null), r([m({ type: Boolean, json: { default: false, write: true } })], R2.prototype, "defaultSpatialReferenceEnabled", void 0), r([m({ type: Number, json: { write: true } })], R2.prototype, "distance", void 0), r([m({ type: R, json: { write: true } })], R2.prototype, "dynamicDataSource", void 0), r([m({ type: String, json: { write: true } })], R2.prototype, "formatOf3DObjects", void 0), r([m({ type: [p2], json: { write: { enabled: true, overridePolicy() {
  return { enabled: null != this.fullText && this.fullText.length > 0 };
} } } })], R2.prototype, "fullText", void 0), r([m({ type: String, json: { write: true } })], R2.prototype, "gdbVersion", void 0), r([m({ types: l, json: { read: f, write: true } })], R2.prototype, "geometry", void 0), r([m({ type: Number, json: { write: true } })], R2.prototype, "geometryPrecision", void 0), r([m({ type: [String], json: { write: true } })], R2.prototype, "groupByFieldsForStatistics", void 0), r([m({ type: String, json: { write: true } })], R2.prototype, "having", void 0), r([m({ type: Date })], R2.prototype, "historicMoment", void 0), r([r2("historicMoment")], R2.prototype, "writeHistoricMoment", null), r([m({ type: Number, json: { write: true } })], R2.prototype, "maxAllowableOffset", void 0), r([m({ type: Number, cast: (t) => t < 1 ? 1 : t > R2.MAX_MAX_RECORD_COUNT_FACTOR ? R2.MAX_MAX_RECORD_COUNT_FACTOR : t, json: { write: { overridePolicy: (t) => ({ enabled: t > 1 }) } } })], R2.prototype, "maxRecordCountFactor", void 0), r([m({ type: ["xyFootprint"], json: { write: true } })], R2.prototype, "multipatchOption", void 0), r([m({ type: Number, json: { read: { source: "resultRecordCount" } } })], R2.prototype, "num", void 0), r([m({ json: { write: true } })], R2.prototype, "objectIds", void 0), r([m({ type: [String], json: { write: true } })], R2.prototype, "orderByFields", void 0), r([m({ type: [String], json: { write: true } })], R2.prototype, "outFields", void 0), r([m({ type: g, json: { name: "outSR", write: true } })], R2.prototype, "outSpatialReference", void 0), r([m({ type: [m2], json: { write: { enabled: true, overridePolicy() {
  return { enabled: null != this.outStatistics && this.outStatistics.length > 0 };
} } } })], R2.prototype, "outStatistics", void 0), r([m({ json: { write: true } })], R2.prototype, "parameterValues", void 0), r([r2("parameterValues")], R2.prototype, "writeParameterValues", null), r([m({ type: j, json: { write: true } })], R2.prototype, "pixelSize", void 0), r([m({ type: m3, json: { write: true } })], R2.prototype, "quantizationParameters", void 0), r([m({ type: [Object], json: { write: true } })], R2.prototype, "rangeValues", void 0), r([m({ type: String, json: { read: { source: "relationParam" }, write: { target: "relationParam", overridePolicy() {
  return { enabled: "relation" === this.spatialRelationship };
} } } })], R2.prototype, "relationParameter", void 0), r([m({ type: String, json: { write: true } })], R2.prototype, "resultType", void 0), r([m({ type: Boolean, json: { default: false, write: true } })], R2.prototype, "returnCentroid", void 0), r([m({ type: Boolean, json: { default: false, write: true } })], R2.prototype, "returnDistinctValues", void 0), r([m({ type: Boolean, json: { default: true, write: true } })], R2.prototype, "returnExceededLimitFeatures", void 0), r([m({ type: Boolean, json: { write: true } })], R2.prototype, "returnGeometry", void 0), r([m({ type: Boolean, json: { default: false, write: true } })], R2.prototype, "returnQueryGeometry", void 0), r([m({ type: Boolean, json: { default: false, write: true } })], R2.prototype, "returnM", void 0), r([m({ type: Boolean, json: { write: { overridePolicy: (t) => ({ enabled: t }) } } })], R2.prototype, "returnZ", void 0), r([m({ type: Boolean, json: { write: true } })], R2.prototype, "returnTrueCurves", void 0), r([m({ type: g, json: { write: true } })], R2.prototype, "sourceSpatialReference", void 0), r([r3(s2, { ignoreUnknown: false, name: "spatialRel" })], R2.prototype, "spatialRelationship", void 0), r([m({ type: Number, json: { read: { source: "resultOffset" } } })], R2.prototype, "start", void 0), r([r2("start"), r2("num")], R2.prototype, "writeStart", null), r([m({ type: String, json: { write: true } })], R2.prototype, "sqlFormat", void 0), r([m({ type: String, json: { write: true } })], R2.prototype, "text", void 0), r([m({ type: p, json: { write: true } })], R2.prototype, "timeExtent", void 0), r([m({ type: Boolean, json: { default: false, write: true } })], R2.prototype, "timeReferenceUnknownClient", void 0), r([r3(g2, { ignoreUnknown: false }), m({ json: { write: { overridePolicy(t) {
  return { enabled: !!t && null != this.distance };
} } } })], R2.prototype, "units", void 0), r([m({ type: String, json: { write: { overridePolicy(t) {
  return { enabled: null != t || null != this.start && this.start > 0 };
} } } })], R2.prototype, "where", void 0), r([r2("where")], R2.prototype, "writeWhere", null), R2 = S2 = r([a2("esri.rest.support.Query")], R2);
var b = R2;

export {
  m3 as m,
  b
};
//# sourceMappingURL=chunk-AI2O2GKK.js.map
