import {
  d as d2
} from "./chunk-37HZDVD7.js";
import {
  d2 as d,
  g2 as g
} from "./chunk-UFBX3XSC.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/rest/support/jsonUtils.js
function n(n3, r2, u2) {
  return !!t(n3, r2, u2);
}
function r(n3, r2, u2) {
  return t(n3, r2, u2);
}
function t(n3, r2, t2) {
  return n3 && n3.hasOwnProperty(r2) ? n3[r2] : t2;
}

// node_modules/@arcgis/core/layers/support/serviceCapabilitiesUtils.js
var o = { name: "supportsName", size: "supportsSize", contentType: "supportsContentType", keywords: "supportsKeywords", exifInfo: "supportsExifInfo" };
function u(t2) {
  var _a;
  const s = (_a = t2 == null ? void 0 : t2.supportedSpatialAggregationStatistics) == null ? void 0 : _a.map((t3) => t3.toLowerCase());
  return { envelope: !!(s == null ? void 0 : s.includes("envelopeaggregate")), centroid: !!(s == null ? void 0 : s.includes("centroidaggregate")), convexHull: !!(s == null ? void 0 : s.includes("convexhullaggregate")) };
}
function n2(t2, s) {
  var _a;
  const e = (_a = t2 == null ? void 0 : t2.supportedOperationsWithCacheHint) == null ? void 0 : _a.map((t3) => t3.toLowerCase());
  return !!(e == null ? void 0 : e.includes(s.toLowerCase()));
}
function i(t2) {
  var _a;
  const s = (_a = t2 == null ? void 0 : t2.supportedStatisticTypes) == null ? void 0 : _a.map((t3) => t3.toLowerCase());
  return { count: !!(s == null ? void 0 : s.includes("count")), sum: !!(s == null ? void 0 : s.includes("sum")), min: !!(s == null ? void 0 : s.includes("min")), max: !!(s == null ? void 0 : s.includes("max")), avg: !!(s == null ? void 0 : s.includes("avg")), var: !!(s == null ? void 0 : s.includes("var")), stddev: !!(s == null ? void 0 : s.includes("stddev")), percentileContinuous: !!(s == null ? void 0 : s.includes("percentile_continuous")), percentileDiscrete: !!(s == null ? void 0 : s.includes("percentile_discrete")), envelope: !!(s == null ? void 0 : s.includes("envelopeaggregate")), centroid: !!(s == null ? void 0 : s.includes("centroidaggregate")), convexHull: !!(s == null ? void 0 : s.includes("convexhullaggregate")) };
}
function a(t2) {
  var _a;
  const s = (_a = t2 == null ? void 0 : t2.supportedNormalizationTypes) == null ? void 0 : _a.map((t3) => t3.toLowerCase());
  return { field: !!(s == null ? void 0 : s.includes("field")), log: !!(s == null ? void 0 : s.includes("log")), naturalLog: !!(s == null ? void 0 : s.includes("naturallog")), percentOfTotal: !!(s == null ? void 0 : s.includes("percentoftotal")), squareRoot: !!(s == null ? void 0 : s.includes("squareroot")) };
}
function c(t2, s) {
  return { analytics: l(t2), attachment: d3(t2), data: y(t2), metadata: m(t2), operations: g2(t2.capabilities, t2, s), query: C(t2, s), queryAttributeBins: S(t2), queryRelated: v(t2), queryTopFeatures: h(t2), editing: f(t2) };
}
function l(t2) {
  return { supportsCacheHint: n2(t2.advancedQueryCapabilities, "queryAnalytics") };
}
function d3(t2) {
  const s = t2.attachmentProperties, e = { supportsName: false, supportsSize: false, supportsContentType: false, supportsKeywords: false, supportsExifInfo: false, supportsCacheHint: n2(t2.advancedQueryCapabilities, "queryAttachments"), supportsOrderByFields: n(t2.advancedQueryCapabilities, "supportsQueryAttachmentOrderByFields", false), supportsResize: n(t2, "supportsAttachmentsResizing", false) };
  return s && Array.isArray(s) && s.forEach((t3) => {
    const s2 = o[t3.name];
    s2 && (e[s2] = !!t3.isEnabled);
  }), e;
}
function y(t2) {
  return { isVersioned: n(t2, "isDataVersioned", false), isBranchVersioned: n(t2, "isDataBranchVersioned", false), supportsAttachment: n(t2, "hasAttachments", false), supportsM: n(t2, "hasM", false), supportsZ: n(t2, "hasZ", false) };
}
function m(t2) {
  return { supportsAdvancedFieldProperties: n(t2, "supportsFieldDescriptionProperty", false) };
}
function g2(s, e, p) {
  const o2 = s ? s.toLowerCase().split(",").map((t2) => t2.trim()) : [], u2 = p ? d(p) : null, n3 = o2.includes(null != u2 && "MapServer" === u2.serverType ? "data" : "query"), i2 = o2.includes("editing") && !e.datesInUnknownTimezone;
  let a2 = i2 && o2.includes("create"), c2 = i2 && o2.includes("delete"), l2 = i2 && o2.includes("update");
  const d4 = o2.includes("changetracking"), y2 = e.advancedQueryCapabilities;
  return i2 && !(a2 || c2 || l2) && (a2 = c2 = l2 = true), { supportsCalculate: n(e, "supportsCalculate", false), supportsTruncate: n(e, "supportsTruncate", false), supportsValidateSql: n(e, "supportsValidateSql", false), supportsAdd: a2, supportsDelete: c2, supportsEditing: i2, supportsChangeTracking: d4, supportsQuery: n3, supportsQueryAnalytics: n(y2, "supportsQueryAnalytic", false), supportsQueryAttachments: n(y2, "supportsQueryAttachments", false), supportsQueryBins: n(y2, "supportsQueryBins", false), supportsQueryTopFeatures: n(y2, "supportsTopFeaturesQuery", false), supportsResizeAttachments: n(e, "supportsAttachmentsResizing", false), supportsSync: o2.includes("sync"), supportsUpdate: l2, supportsExceedsLimitStatistics: n(e, "supportsExceedsLimitStatistics", false), supportsAsyncConvert3D: n(e, "supportsAsyncConvert3D", false) };
}
function C(t2, o2) {
  const i2 = t2.advancedQueryCapabilities, a2 = t2.ownershipBasedAccessControlForFeatures, c2 = t2.archivingInfo, l2 = t2.currentVersion, d4 = o2 == null ? void 0 : o2.includes("MapServer"), y2 = !d4 || l2 >= has("mapserver-pbf-version-support"), m2 = g(o2), g3 = new Set((t2.supportedQueryFormats ?? "").split(",").map((t3) => t3.toLowerCase().trim()));
  return { maxRecordCount: r(t2, "maxRecordCount", void 0), maxRecordCountFactor: r(t2, "maxRecordCountFactor", void 0), standardMaxRecordCount: r(t2, "standardMaxRecordCount", void 0), supportedSpatialAggregationStatistics: u(i2), supportsCacheHint: n(i2, "supportsQueryWithCacheHint", false) || n2(i2, "query"), supportsCentroid: n(i2, "supportsReturningGeometryCentroid", false), supportsCompactGeometry: m2, supportsCurrentUser: n(i2, "supportsCurrentUserQueries", false), supportsDefaultSpatialReference: n(i2, "supportsDefaultSR", false), supportsDisjointSpatialRelationship: n(i2, "supportsDisjointSpatialRel", false), supportsDistance: n(i2, "supportsQueryWithDistance", false), supportsDistinct: n(i2, "supportsDistinct", t2.supportsAdvancedQueries), supportsExtent: n(i2, "supportsReturningQueryExtent", false), supportsFormatPBF: y2 && g3.has("pbf"), supportsFullTextSearch: n(i2, "supportsFullTextSearch", false), supportsGeometryProperties: n(i2, "supportsReturningGeometryProperties", false), supportsHavingClause: n(i2, "supportsHavingClause", false), supportsHistoricMoment: n(c2, "supportsQueryWithHistoricMoment", false), supportsMaxRecordCountFactor: n(i2, "supportsMaxRecordCountFactor", false), supportsOrderBy: n(i2, "supportsOrderBy", t2.supportsAdvancedQueries), supportsPagination: n(i2, "supportsPagination", false), supportsPercentileStatistics: n(i2, "supportsPercentileStatistics", false), supportsQuantization: n(t2, "supportsCoordinatesQuantization", false), supportsQuantizationEditMode: n(t2, "supportsQuantizationEditMode", false), supportsQueryByAnonymous: n(a2, "allowAnonymousToQuery", true), supportsQueryByOthers: n(a2, "allowOthersToQuery", true), supportsQueryGeometry: n(t2, "supportsReturningQueryGeometry", false), supportsResultType: n(i2, "supportsQueryWithResultType", false), supportsReturnMesh: !!d2(t2.infoFor3D), supportsSpatialAggregationStatistics: n(i2, "supportsSpatialAggregationStatistics", false), supportsSqlExpression: n(i2, "supportsSqlExpression", false), supportsStandardizedQueriesOnly: n(t2, "useStandardizedQueries", false), supportsStatistics: n(i2, "supportsStatistics", t2.supportsStatistics), supportsTopFeaturesQuery: n(i2, "supportsTopFeaturesQuery", false), supportsTrueCurve: n(i2, "supportsTrueCurve", false), tileMaxRecordCount: r(t2, "tileMaxRecordCount", void 0) };
}
function v(t2) {
  const s = t2.advancedQueryCapabilities, e = n(s, "supportsAdvancedQueryRelated", false);
  return { supportsPagination: n(s, "supportsQueryRelatedPagination", false), supportsCount: e, supportsOrderBy: e, supportsCacheHint: n2(s, "queryRelated") };
}
function h(t2) {
  return { supportsCacheHint: n2(t2.advancedQueryCapabilities, "queryTopFilter") };
}
function S(t2) {
  const s = t2 ? t2.queryBinsCapabilities : void 0;
  return { supportsDate: n(s, "supportsDateBin", false), supportsFixedInterval: n(s, "supportsFixedIntervalBin", false), supportsAutoInterval: n(s, "supportsAutoIntervalBin", false), supportsFixedBoundaries: n(s, "supportsFixedBoundariesBin", false), supportsStackBy: n(s, "supportsStackBy", false), supportsSplitBy: n(s, "supportsSplitBy", false), supportsSnapToData: n(s, "supportsSnapToData", false), supportsReturnFullIntervalBin: n(s, "supportsReturnFullIntervalBin", false), supportsFirstDayOfWeek: n(s, "supportsFirstDayOfWeek", false), supportsNormalization: n(s, "supportsNormalization", false), supportedStatistics: i(s), supportedNormalizationTypes: a(s) };
}
function f(t2) {
  const s = t2.ownershipBasedAccessControlForFeatures, e = t2 ? t2.advancedEditingCapabilities : void 0;
  return { supportsGeometryUpdate: n(t2, "allowGeometryUpdates", true), supportsGlobalId: n(t2, "supportsApplyEditsWithGlobalIds", false), supportsReturnServiceEditsInSourceSpatialReference: n(t2, "supportsReturnServiceEditsInSourceSR", false), supportsRollbackOnFailure: n(t2, "supportsRollbackOnFailureParameter", false), supportsUpdateWithoutM: n(t2, "allowUpdateWithoutMValues", false), supportsUploadWithItemId: n(t2, "supportsAttachmentsByUploadId", false), supportsDeleteByAnonymous: n(s, "allowAnonymousToDelete", true), supportsDeleteByOthers: n(s, "allowOthersToDelete", true), supportsUpdateByAnonymous: n(s, "allowAnonymousToUpdate", true), supportsUpdateByOthers: n(s, "allowOthersToUpdate", true), supportsAsyncApplyEdits: n(e, "supportsAsyncApplyEdits", false), zDefault: r(t2, "zDefault", void 0) };
}
function A(t2) {
  var _a;
  return { operations: { supportsAppend: n(t2, "supportsAppend", false), supportsCoverageQuery: ((_a = t2 == null ? void 0 : t2.playbackInfo) == null ? void 0 : _a.klv["0601"]) ?? false, supportsExportClip: n(t2, "supportsExportClip", false), supportsExportFrameset: n(t2, "supportsExportFrameset", false), supportsMensuration: n(t2, "supportsMensuration", false), supportsUpdate: n(t2, "supportsUpdate", false) } };
}

export {
  c,
  A
};
//# sourceMappingURL=chunk-6WVUJOLD.js.map
