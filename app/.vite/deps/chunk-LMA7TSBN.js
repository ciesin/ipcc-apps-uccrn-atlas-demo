// node_modules/@arcgis/core/geometry/support/meshProperties.js
function e(e2, n2, r2, t2) {
  const { loggerTag: o, stride: f } = n2;
  return e2.length % f != 0 ? (t2.error(o, `Invalid array length, expected a multiple of ${f}`), new r2([])) : e2;
}
function n(n2, r2, t2, o, f) {
  if (!n2) return n2;
  if (n2 instanceof r2) return e(n2, o, r2, f);
  for (const i of t2) if (n2 instanceof i) return e(new r2(n2), o, r2, f);
  if (Array.isArray(n2)) return e(new r2(n2), o, r2, f);
  {
    const e2 = t2.map((e3) => `'${e3.name}'`);
    return f.error(`Failed to set property, expected one of ${e2}, but got ${n2.constructor.name}`), new r2([]);
  }
}
function r(e2, n2, r2) {
  n2[r2] = t(e2);
}
function t(e2) {
  const n2 = new Array(e2.length);
  for (let r2 = 0; r2 < e2.length; r2++) n2[r2] = e2[r2];
  return n2;
}

export {
  n,
  r
};
//# sourceMappingURL=chunk-LMA7TSBN.js.map
