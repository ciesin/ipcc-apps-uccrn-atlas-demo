// node_modules/@arcgis/core/views/draw/support/layerUtils.js
function e(e2, r2, n) {
  if (!r2 || !(e2 == null ? void 0 : e2.map)) return;
  const { map: s } = e2, l = s.layers.find((e3) => e3 === r2);
  l || s.add(r2, n), l && null != n && s.layers.reorder(l, n);
}
function r(e2, r2) {
  const n = "subtype-sublayer" === (r2 == null ? void 0 : r2.type) ? r2.parent : r2;
  return e2.allLayerViews.find((e3) => {
    const r3 = e3.layer;
    return r3 === n || "sublayers" in r3 && null != r3.sublayers && r3.sublayers.includes(n);
  });
}

export {
  e,
  r
};
//# sourceMappingURL=chunk-K72JBXWN.js.map
