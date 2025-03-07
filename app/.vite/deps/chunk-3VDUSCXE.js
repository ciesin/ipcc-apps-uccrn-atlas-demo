// node_modules/@arcgis/core/views/2d/unitBezier.js
function e(e2, n, t2, r) {
  const u = 3 * e2, i = 3 * (t2 - e2) - u, a = 1 - u - i, o = 3 * n, s = 3 * (r - n) - o, f = 1 - o - s;
  function c(e3) {
    return ((a * e3 + i) * e3 + u) * e3;
  }
  function l(e3) {
    return ((f * e3 + s) * e3 + o) * e3;
  }
  function b(e3) {
    return (3 * a * e3 + 2 * i) * e3 + u;
  }
  function p(e3, n2) {
    let t3, r2, u2, i2, a2, o2;
    for (u2 = e3, o2 = 0; o2 < 8; o2++) {
      if (i2 = c(u2) - e3, Math.abs(i2) < n2) return u2;
      if (a2 = b(u2), Math.abs(a2) < 1e-6) break;
      u2 -= i2 / a2;
    }
    if (t3 = 0, r2 = 1, u2 = e3, u2 < t3) return t3;
    if (u2 > r2) return r2;
    for (; t3 < r2; ) {
      if (i2 = c(u2), Math.abs(i2 - e3) < n2) return u2;
      e3 > i2 ? t3 = u2 : r2 = u2, u2 = 0.5 * (r2 - t3) + t3;
    }
    return u2;
  }
  return function(e3, n2 = 1e-6) {
    return l(p(e3, n2));
  };
}
var t = {};
t.ease = e(0.25, 0.1, 0.25, 1), t.linear = e(0, 0, 1, 1), t.easeIn = t["ease-in"] = e(0.42, 0, 1, 1), t.easeOut = t["ease-out"] = e(0, 0, 0.58, 1), t.easeInOut = t["ease-in-out"] = e(0.42, 0, 0.58, 1);

export {
  e,
  t
};
//# sourceMappingURL=chunk-3VDUSCXE.js.map
