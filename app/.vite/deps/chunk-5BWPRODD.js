// node_modules/@arcgis/core/chunks/quickselect.js
function t(t2, r2, f, n, h) {
  o(t2, r2, f || 0, n || t2.length - 1, h || a);
}
function o(t2, a2, f, n, h) {
  for (; n > f; ) {
    if (n - f > 600) {
      var M = n - f + 1, i = a2 - f + 1, u = Math.log(M), c = 0.5 * Math.exp(2 * u / 3), e = 0.5 * Math.sqrt(u * c * (M - c) / M) * (i - M / 2 < 0 ? -1 : 1);
      o(t2, a2, Math.max(f, Math.floor(a2 - i * c / M + e)), Math.min(n, Math.floor(a2 + (M - i) * c / M + e)), h);
    }
    var l = t2[a2], v = f, x = n;
    for (r(t2, f, a2), h(t2[n], l) > 0 && r(t2, f, n); v < x; ) {
      for (r(t2, v, x), v++, x--; h(t2[v], l) < 0; ) v++;
      for (; h(t2[x], l) > 0; ) x--;
    }
    0 === h(t2[f], l) ? r(t2, f, x) : r(t2, ++x, n), x <= a2 && (f = x + 1), a2 <= x && (n = x - 1);
  }
}
function r(t2, o2, r2) {
  var a2 = t2[o2];
  t2[o2] = t2[r2], t2[r2] = a2;
}
function a(t2, o2) {
  return t2 < o2 ? -1 : t2 > o2 ? 1 : 0;
}

export {
  t
};
//# sourceMappingURL=chunk-5BWPRODD.js.map
