import {
  C,
  w
} from "./chunk-6REABBOQ.js";

// node_modules/@arcgis/core/views/layers/support/popupUtils.js
async function n(n2, p2 = n2.popupTemplate) {
  var _a, _b;
  if (null == p2) return [];
  const u2 = await p2.getRequiredFields(n2.fieldsIndex), { lastEditInfoEnabled: t } = p2, { objectIdField: d, typeIdField: s, globalIdField: i, relationships: a } = n2;
  if (u2.includes("*")) return ["*"];
  const o = t ? C(n2) : [], f = w(n2.fieldsIndex, [...u2, ...o]);
  return s && f.push(s), f && d && ((_a = n2.fieldsIndex) == null ? void 0 : _a.has(d)) && !f.includes(d) && f.push(d), f && i && ((_b = n2.fieldsIndex) == null ? void 0 : _b.has(i)) && !f.includes(i) && f.push(i), a && a.forEach((e) => {
    var _a2;
    const { keyField: l } = e;
    f && l && ((_a2 = n2.fieldsIndex) == null ? void 0 : _a2.has(l)) && !f.includes(l) && f.push(l);
  }), f;
}
function p(e, l) {
  return e.popupTemplate ? e.popupTemplate : null != l && l.defaultPopupTemplateEnabled && null != e.defaultPopupTemplate ? e.defaultPopupTemplate : null;
}
function u(e, l) {
  return null != p(e, { defaultPopupTemplateEnabled: l });
}

export {
  n,
  p,
  u
};
//# sourceMappingURL=chunk-NMUUXFTE.js.map
