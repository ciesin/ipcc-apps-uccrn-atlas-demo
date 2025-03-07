import {
  s,
  t
} from "./chunk-FKPHHMJX.js";
import {
  S,
  l,
  o
} from "./chunk-ZCYDEY6S.js";
import {
  a
} from "./chunk-CWMZW2S5.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/layers/graphics/sources/support/clientSideDefaults.js
function u(t2) {
  return { renderer: { type: "simple", symbol: "esriGeometryPoint" === t2 || "esriGeometryMultipoint" === t2 ? l : "esriGeometryPolyline" === t2 ? o : S } };
}
var n = /^[_$a-zA-Z][_$a-zA-Z0-9]*$/;
var i = 1;
function a2(t2, s2) {
  if (has("esri-csp-restrictions")) return () => ({ [s2]: null, ...t2 });
  try {
    let r = `this${c(s2)} = null;`;
    for (const s3 in t2) {
      r += `this${c(s3)} = ${JSON.stringify(t2[s3])};`;
    }
    const e = new Function(`
      return class AttributesClass$${i++} {
        constructor() {
          ${r};
        }
      }
    `)();
    return () => new e();
  } catch (r) {
    return () => ({ [s2]: null, ...t2 });
  }
}
function c(t2) {
  return n.test(t2) ? `.${t2}` : `["${t2}"]`;
}
function l2(s2 = {}) {
  return [{ name: "New Feature", description: "", prototype: { attributes: a(s2) } }];
}
function y(t2, e) {
  return { analytics: { supportsCacheHint: false }, attachment: null, data: { isVersioned: false, isBranchVersioned: false, supportsAttachment: false, supportsM: false, supportsZ: t2 }, metadata: { supportsAdvancedFieldProperties: false }, operations: { supportsCalculate: false, supportsTruncate: false, supportsValidateSql: false, supportsAdd: e, supportsDelete: e, supportsEditing: e, supportsChangeTracking: false, supportsQuery: true, supportsQueryBins: true, supportsQueryAnalytics: false, supportsQueryAttachments: false, supportsQueryTopFeatures: false, supportsResizeAttachments: false, supportsSync: false, supportsUpdate: e, supportsExceedsLimitStatistics: true, supportsAsyncConvert3D: false }, query: t, queryRelated: { supportsCount: true, supportsOrderBy: true, supportsPagination: true, supportsCacheHint: false }, queryTopFeatures: { supportsCacheHint: false }, queryAttributeBins: s, editing: { supportsGeometryUpdate: e, supportsGlobalId: false, supportsReturnServiceEditsInSourceSpatialReference: false, supportsRollbackOnFailure: false, supportsUpdateWithoutM: false, supportsUploadWithItemId: false, supportsDeleteByAnonymous: false, supportsDeleteByOthers: false, supportsUpdateByAnonymous: false, supportsUpdateByOthers: false, supportsAsyncApplyEdits: false, zDefault: void 0 } };
}

export {
  u,
  a2 as a,
  l2 as l,
  y
};
//# sourceMappingURL=chunk-PMRN4OAI.js.map
