import {
  R
} from "./chunk-67XXGAOA.js";
import {
  c2 as c,
  p
} from "./chunk-6WASKRTP.js";
import {
  p as p2
} from "./chunk-37HZDVD7.js";
import {
  b
} from "./chunk-5X74MKXM.js";
import {
  Ee
} from "./chunk-6REABBOQ.js";
import {
  r
} from "./chunk-5EWD56QJ.js";
import {
  B,
  O as O2
} from "./chunk-XWXWIBVO.js";
import {
  C,
  O2 as O,
  P2 as P,
  s2
} from "./chunk-LTDNORB5.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
import {
  ot
} from "./chunk-F7TCEOHX.js";
import {
  L
} from "./chunk-M6FNW7GP.js";
import {
  a,
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/graphics/editingSupport.js
function w(e) {
  return null != (e == null ? void 0 : e.applyEdits);
}
function F(e) {
  return "object" == typeof e && null != e && "objectId" in e && !!e.objectId;
}
function A(e) {
  return e.every(F);
}
function v(e) {
  return "object" == typeof e && null != e && "globalId" in e && !!e.globalId;
}
function I(e) {
  return e.every(v);
}
async function $(e, t, a2, s3 = {}) {
  var _a;
  let n2;
  const o = "gdbVersion" in e ? e.gdbVersion : null, l = s3.gdbVersion ?? o;
  if (p(e) && e.url) n2 = c(e.url, e.layerId, l, "original-and-current-features" === s3.returnServiceEditsOption);
  else {
    n2 = L(), n2.promise.then((t3) => {
      (t3.addedFeatures.length || t3.updatedFeatures.length || t3.deletedFeatures.length || t3.addedAttachments.length || t3.updatedAttachments.length || t3.deletedAttachments.length) && e.emit("edits", t3);
    });
    const t2 = { result: n2.promise };
    e.emit("apply-edits", t2);
  }
  try {
    const { results: i, edits: o2 } = await E(e, t, a2, s3), l2 = (e2) => e2.filter((e3) => !e3.error).map(a), d = { edits: o2, addedFeatures: l2(i.addFeatureResults), updatedFeatures: l2(i.updateFeatureResults), deletedFeatures: l2(i.deleteFeatureResults), addedAttachments: l2(i.addAttachmentResults), updatedAttachments: l2(i.updateAttachmentResults), deletedAttachments: l2(i.deleteAttachmentResults), exceededTransferLimit: false, historicMoment: i.editMoment ? new Date(i.editMoment) : null, globalIdToObjectId: s3.globalIdToObjectId };
    return ((_a = i.editedFeatureResults) == null ? void 0 : _a.length) && (d.editedFeatures = i.editedFeatureResults), n2.resolve(d), i;
  } catch (d) {
    throw n2.reject(d), d;
  }
}
async function E(e, t, r2, s3) {
  var _a, _b, _c, _d, _e, _f;
  if (await e.load(), !w(t)) throw new s(`${e.type}-layer:no-editing-support`, "Layer source does not support applyEdits capability", { layer: e });
  if (!B(e)) throw new s(`${e.type}-layer:editing-disabled`, "Editing is disabled for layer", { layer: e });
  const { edits: i, options: n2 } = await S(e, r2, s3);
  return ((_a = i.addFeatures) == null ? void 0 : _a.length) || ((_b = i.updateFeatures) == null ? void 0 : _b.length) || ((_c = i.deleteFeatures) == null ? void 0 : _c.length) || ((_d = i.addAttachments) == null ? void 0 : _d.length) || ((_e = i.updateAttachments) == null ? void 0 : _e.length) || ((_f = i.deleteAttachments) == null ? void 0 : _f.length) ? { edits: i, results: await t.applyEdits(i, n2) } : { edits: i, results: { addFeatureResults: [], updateFeatureResults: [], deleteFeatureResults: [], addAttachmentResults: [], updateAttachmentResults: [], deleteAttachmentResults: [] } };
}
async function S(e, t, r2) {
  const i = O2(e), n2 = t && (t.addFeatures || t.updateFeatures || t.deleteFeatures), o = t && (t.addAttachments || t.updateAttachments || t.deleteAttachments), l = null != e.infoFor3D;
  if (V2(t, i, r2, !!n2, !!o, `${e.type}-layer`), !i.data.isVersioned && (r2 == null ? void 0 : r2.gdbVersion)) throw new s(`${e.type}-layer:invalid-parameter`, "'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");
  if (!i.editing.supportsRollbackOnFailure && (r2 == null ? void 0 : r2.rollbackOnFailureEnabled)) throw new s(`${e.type}-layer:invalid-parameter`, "This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");
  const d = { ...r2 };
  if (null != d.rollbackOnFailureEnabled || i.editing.supportsRollbackOnFailure || (d.rollbackOnFailureEnabled = true), d.rollbackOnFailureEnabled || "original-and-current-features" !== d.returnServiceEditsOption || (false === d.rollbackOnFailureEnabled && n.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`, "'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."), d.rollbackOnFailureEnabled = true), !i.editing.supportsReturnServiceEditsInSourceSpatialReference && d.returnServiceEditsInSourceSR) throw new s(`${e.type}-layer:invalid-parameter`, "This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");
  if (d.returnServiceEditsInSourceSR && "original-and-current-features" !== d.returnServiceEditsOption) throw new s(`${e.type}-layer:invalid-parameter`, "'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");
  const u = G(t, i, `${e.type}-layer`), p3 = (r2 == null ? void 0 : r2.globalIdUsed) || l, c2 = e.fields.filter((e2) => "big-integer" === e2.type || "oid" === e2.type && (e2.length || 0) >= 8);
  if (p3) {
    const { globalIdField: t2 } = e;
    if (null == t2) throw new s(`${e.type}-layer:invalid-parameter`, "Layer does not specify a global id field.");
    u.addFeatures.forEach((e2) => B2(e2, t2));
  }
  u.addFeatures.forEach((t2) => O3(t2, e, p3, c2)), u.updateFeatures.forEach((t2) => k(t2, e, p3, c2)), u.deleteFeatures.forEach((t2) => U(t2, e, p3, c2)), u.addAttachments.forEach((t2) => L2(t2, e)), u.updateAttachments.forEach((t2) => L2(t2, e)), l && await x(u, e);
  return { edits: await T(u), options: d };
}
function R2(e, t, r2, s3) {
  var _a, _b;
  if (r2) {
    if ("attributes" in e && !e.attributes[t.globalIdField]) throw new s(`${t.type}-layer:invalid-parameter`, `Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);
    if (!("attributes" in e) && !e.globalId) throw new s(`${t.type}-layer:invalid-parameter`, "`'globalId' of the feature should be passed when 'globalIdUsed' is true");
  }
  if (s3.length && "attributes" in e) for (const i of s3) {
    const r3 = e.attributes[i.name];
    if (void 0 !== r3 && !Ee(i, r3)) throw new s(`${t.type}-layer:invalid-parameter`, `Big-integer field '${i.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`, { feature: e });
  }
  if ("geometry" in e && null != e.geometry) {
    if (e.geometry.hasZ && false === ((_a = t.capabilities) == null ? void 0 : _a.data.supportsZ)) throw new s(`${t.type}-layer:z-unsupported`, "Layer does not support z values while feature has z values.");
    if (e.geometry.hasM && false === ((_b = t.capabilities) == null ? void 0 : _b.data.supportsM)) throw new s(`${t.type}-layer:m-unsupported`, "Layer does not support m values while feature has m values.");
  }
}
function j(e, t) {
  var _a;
  if ("geometry" in e && "mesh" === ((_a = e.geometry) == null ? void 0 : _a.type) && null != t.infoFor3D && null != t.spatialReference) {
    const { geometry: r2 } = e, { spatialReference: s3, vertexSpace: i } = r2, n2 = t.spatialReference, o = "local" === i.type, l = P(n2), h = s2(n2, s3), m = h || C(n2) && (C(s3) || O(s3));
    if (!(o && l && m || !o && !l && h)) throw new s(`${t.type}-layer:mesh-unsupported`, `Uploading a mesh with a ${i.type} vertex space and a spatial reference wkid:${s3.wkid} to a layer with a spatial reference wkid:${n2.wkid} is not supported.`);
  }
}
function O3(e, t, a2, r2) {
  R2(e, t, a2, r2), j(e, t);
}
function U(e, t, a2, r2) {
  R2(e, t, a2, r2);
}
function k(e, t, r2, s3) {
  R2(e, t, r2, s3), j(e, t);
  const i = O2(t);
  if ("geometry" in e && null != e.geometry && !(i == null ? void 0 : i.editing.supportsGeometryUpdate)) throw new s(`${t.type}-layer:unsupported-operation`, "Layer does not support geometry updates.");
}
function L2(e, t) {
  var _a;
  const { feature: r2, attachment: s3 } = e;
  if (!r2 || "attributes" in r2 && !r2.attributes[t.globalIdField]) throw new s(`${t.type}-layer:invalid-parameter`, "Attachment should have reference to a feature with 'globalId'");
  if (!("attributes" in r2) && !r2.globalId) throw new s(`${t.type}-layer:invalid-parameter`, "Attachment should have reference to 'globalId' of the parent feature");
  if (!s3.globalId) throw new s(`${t.type}-layer:invalid-parameter`, "Attachment should have 'globalId'");
  if (!s3.data && !s3.uploadId) throw new s(`${t.type}-layer:invalid-parameter`, "Attachment should have 'data' or 'uploadId'");
  if (!(s3.data instanceof File && !!s3.data.name) && !s3.name) throw new s(`${t.type}-layer:invalid-parameter`, "'name' is required when attachment is specified as Base64 encoded string using 'data'");
  if (!((_a = t.capabilities) == null ? void 0 : _a.editing.supportsUploadWithItemId) && s3.uploadId) throw new s(`${t.type}-layer:invalid-parameter`, "This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");
  if ("string" == typeof s3.data) {
    const e2 = ot(s3.data);
    if (e2 && !e2.isBase64) throw new s(`${t.type}-layer:invalid-parameter`, "Attachment 'data' should be a Blob, File or Base64 encoded string");
  }
}
function B2(e, t) {
  const { attributes: a2 } = e;
  null == a2[t] && (a2[t] = r());
}
async function T(e) {
  const t = e.addFeatures ?? [], a2 = e.updateFeatures ?? [], r2 = t.concat(a2).map((e2) => e2.geometry), s3 = await R(r2), i = t.length, n2 = a2.length;
  return s3.slice(0, i).forEach((e2, a3) => t[a3].geometry = e2), s3.slice(i, i + n2).forEach((e2, t2) => a2[t2].geometry = e2), e;
}
function D(e) {
  return { addFeatures: Array.from((e == null ? void 0 : e.addFeatures) ?? []), updateFeatures: Array.from((e == null ? void 0 : e.updateFeatures) ?? []), deleteFeatures: e && V.isCollection(e.deleteFeatures) ? e.deleteFeatures.toArray() : e.deleteFeatures || [], addAttachments: e.addAttachments || [], updateAttachments: e.updateAttachments || [], deleteAttachments: e.deleteAttachments || [] };
}
function G(e, t, r2) {
  var _a, _b, _c;
  const s3 = D(e);
  if (((_a = s3.addFeatures) == null ? void 0 : _a.length) && !t.operations.supportsAdd) throw new s(`${r2}:unsupported-operation`, "Layer does not support adding features.");
  if (((_b = s3.updateFeatures) == null ? void 0 : _b.length) && !t.operations.supportsUpdate) throw new s(`${r2}:unsupported-operation`, "Layer does not support updating features.");
  if (((_c = s3.deleteFeatures) == null ? void 0 : _c.length) && !t.operations.supportsDelete) throw new s(`${r2}:unsupported-operation`, "Layer does not support deleting features.");
  return s3.addFeatures = s3.addFeatures.map(M), s3.updateFeatures = s3.updateFeatures.map(M), s3.addAssetFeatures = [], s3;
}
function V2(e, t, r2, s3, i, n2) {
  if (!e || !s3 && !i) throw new s(`${n2}:missing-parameters`, "'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");
  if (!t.editing.supportsGlobalId && (r2 == null ? void 0 : r2.globalIdUsed)) throw new s(`${n2}:invalid-parameter`, "This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");
  if (!t.editing.supportsGlobalId && i) throw new s(`${n2}:invalid-parameter`, "'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");
  if (!(r2 == null ? void 0 : r2.globalIdUsed) && i) throw new s(`${n2}:invalid-parameter`, "When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");
}
function M(t) {
  const a2 = new b();
  return t.attributes || (t.attributes = {}), a2.geometry = t.geometry, a2.attributes = t.attributes, a2;
}
async function x(e, t) {
  const { infoFor3D: r2 } = t;
  if (null == r2) return;
  if (!p2(r2)) throw new s(`${t.type}-layer:binary-gltf-asset-not-supported`, "3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");
  e.addAssetFeatures ?? (e.addAssetFeatures = []);
  const { addAssetFeatures: s3 } = e;
  for (const a2 of e.addFeatures ?? []) z(a2) && s3.push(a2);
  for (const a2 of e.updateFeatures ?? []) z(a2) && s3.push(a2);
}
function z(e) {
  var _a;
  return "mesh" === ((_a = e == null ? void 0 : e.geometry) == null ? void 0 : _a.type);
}
function q(e, t, r2, s3) {
  if (!w(t)) throw new s(`${e.type}-layer:no-editing-support`, "Layer source does not support applyEdits capability", { layer: e });
  if (!t.uploadAssets) throw new s(`${e.type}-layer:no-asset-upload-support`, "Layer source does not support uploadAssets capability", { layer: e });
  return t.uploadAssets(r2, s3);
}

export {
  F,
  A,
  v,
  I,
  $,
  T,
  D,
  G,
  V2 as V,
  M,
  q
};
//# sourceMappingURL=chunk-5TRYQTEN.js.map
