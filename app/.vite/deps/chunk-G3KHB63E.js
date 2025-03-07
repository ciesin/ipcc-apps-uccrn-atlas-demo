import {
  f,
  t,
  x
} from "./chunk-NENDDUWH.js";

// node_modules/@arcgis/core/views/2d/support/clippingUtils.js
var r = (t2) => parseFloat(t2) / 100;
function n(t2, e, o) {
  const n2 = "string" == typeof t2.left ? r(t2.left) * e : t2.left, m2 = "string" == typeof t2.right ? r(t2.right) * e : t2.right, y = "string" == typeof t2.top ? r(t2.top) * o : t2.top, a = "string" == typeof t2.bottom ? r(t2.bottom) * o : t2.bottom, i = y;
  return { xmin: n2, xmax: Math.max(e - m2, n2), ymin: i, ymax: Math.max(o - a, y) };
}
function m(r2, m2, y, a) {
  switch (m2.type) {
    case "rect": {
      const { width: t2, height: e } = r2, { xmin: o, xmax: a2, ymin: i, ymax: p } = n(m2, t2, e), { x: g, y: s } = y;
      return g > o && g < a2 && s > i && s < p;
    }
    case "path":
      return 0 === m2.path.length || !Array.isArray(m2.path[0][0]) || x(m2.path, [y.x, y.y]);
    case "geometry":
      return null == m2.geometry || ("polygon" === m2.geometry.type ? f(m2.geometry, a) : t(m2.geometry, a));
  }
}

export {
  n,
  m
};
//# sourceMappingURL=chunk-G3KHB63E.js.map
