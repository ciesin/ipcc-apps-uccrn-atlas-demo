// node_modules/@arcgis/core/rest/operations/urlUtils.js
function t(n) {
  const o = {};
  for (const e in n) {
    if ("declaredClass" === e) continue;
    const r = n[e];
    if (null != r && "function" != typeof r) if (Array.isArray(r)) {
      o[e] = [];
      for (let n2 = 0; n2 < r.length; n2++) o[e][n2] = t(r[n2]);
    } else "object" == typeof r ? r.toJSON && (o[e] = JSON.stringify(r)) : o[e] = r;
  }
  return o;
}

export {
  t
};
//# sourceMappingURL=chunk-TSDCR4OY.js.map
