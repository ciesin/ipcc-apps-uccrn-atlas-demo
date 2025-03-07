import {
  h
} from "./chunk-3UHB6K6P.js";

// node_modules/@arcgis/core/symbols/support/previewUtils.js
var t;
!function(a) {
  a[a.size = 22] = "size", a[a.lineWidth = 50] = "lineWidth", a[a.maxSize = 120] = "maxSize", a[a.maxOutlineSize = 80] = "maxOutlineSize", a[a.tallSymbolWidth = 20] = "tallSymbolWidth";
}(t || (t = {}));
var e = { fill: [{ type: "path", path: "M -10,-10 L 10,0 L 10,10 L -10,10 L -10,-10 Z" }], squareFill: [{ type: "path", path: "M -10,-10 L 10,-10 L 10,10 L -10,10 L -10,-10 Z" }], meshSymbol3DFill: [{ type: "path", path: "M -10,-8 L 6,0 L 6,6 L -10,6 L -10,-8 Z" }, { type: "path", path: "M -10,-8 L -7,-10 L 9,-2 L 6,0 L -10,-8 Z" }, { type: "path", path: "M 6,0 L 9,-2 L 9,4 L 6,6 L 6,0 Z" }], pathSymbol3DLayer: [{ type: "path", path: "M 3,12 L 12,0 L 11,-2 L -4,5 L -1,5 L 1,7 L 3,10 L 3,12 Z" }, { type: "circle", cx: -2, cy: 10, r: 5 }], extrudeSymbol3DLayer: [{ type: "path", path: "M -7,-5 L -2,0 L -2,7 L -7,3 L -7,-5 Z" }, { type: "path", path: "M -2,0 L -2,7 L 10,-3 L 10,-10 L -2,0 Z" }, { type: "path", path: "M -7,-5 L -2,0 L 10,-10 L -2,-10 L -7,-5 Z" }], cone: [{ type: "path", path: "M 0,-10 L -8,5 L -4,6.5 L 0,7 L 4,6.5 L 8,5 Z" }], tallCone: [{ type: "path", path: "M 0,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 0,-9 Z" }], invertedCone: [{ type: "path", path: "M 0,7 L -8,-8 L 8,-8 Z" }, { type: "path", path: "M -8,-8 L -4,-9.5 L 0,-10 L 4,-9.5 L 8,-8 L 4,-6.5 L 0,-6 L -4,-6.5 Z" }], cube: [{ type: "path", path: "M -10,-7 L 0,-12 L 10,-7 L 0,-2 L -10,-7 Z" }, { type: "path", path: "M -10,-7 L 0,-2 L 0,12 L -10,7 L -10,-7 Z" }, { type: "path", path: "M 0,-2 L 10,-7 L 10,7 L 0,12 L 0,-2 Z" }], tallCube: [{ type: "path", path: "M -3.5,-8.5 L 0,-9.5 L 3.5,-8.5 L 0,-7.5 L -3.5,-8.5 Z" }, { type: "path", path: "M -3.5,-8.5 L 0,-7.5 L 0,9 L -3.5,8 L -3.5,-8.5 Z" }, { type: "path", path: "M 0,-7.5 L 3.5,-8.5 L 3.5,8 L 0,9 L 0,-7.5 Z" }], cylinder: [{ type: "path", path: "M -8,-9 L -8,7 L -4,8.5 L 0,9 L 4,8.5 L 8,7 L 8,-9 Z" }, { type: "ellipse", cx: 0, cy: -9, rx: 8, ry: 2 }], tallCylinder: [{ type: "path", path: "M -3.5,-9 L -3.5,7 L -1.5,7.8 L 0,8 L 1.5,7.8 L 3.5,7 L 3.5,-9 Z" }, { type: "ellipse", cx: 0, cy: -9, rx: 3.5, ry: 1 }], diamond: [{ type: "path", path: "M 0,-10 L 10,-1 L -1,1 L 0,-10 Z" }, { type: "path", path: "M 0,-10 L -1,1 L -8,-1 L 0,-10 Z" }, { type: "path", path: "M -1,1 L 0,10 L -8,-1 L -1,1 Z" }, { type: "path", path: "M -1,0 L 0,10 L 10,-1 L -1,1 Z" }], tetrahedron: [{ type: "path", path: "M 0,-10 L 10,7 L 0,0 L 0,-10 Z" }, { type: "path", path: "M 0,-10 L 0,0 L -8,7 L 0,-10 Z" }, { type: "path", path: "M 10,7 L 0,0 L -8,7 L 10,7 Z" }] };
function m(a, e2, m2) {
  const c2 = t.size;
  let p2 = c2, L2 = c2;
  a < 1 ? p2 *= 0.75 : a > 1 && (L2 *= 1.25);
  const n2 = 0, l2 = 0;
  let o2 = c2, s2 = c2;
  e2 && m2 && (p2 = L2 = o2 = s2 = 0);
  return [{ type: "path", path: [{ command: "M", values: [o2, n2] }, { command: "L", values: [m2 ? o2 : 0.875 * o2, n2] }, { command: "L", values: [m2 ? p2 - 0.5 * o2 : l2, L2 - 0.5 * s2] }, { command: "L", values: [p2 - 0.5 * o2, L2 - 0.5 * s2] }, { command: "Z", values: [] }] }, { type: "path", path: [{ command: "M", values: [o2, n2] }, { command: "L", values: [o2, e2 ? n2 : 0.125 * s2] }, { command: "L", values: [p2 - 0.5 * o2, e2 ? L2 - 0.5 * s2 : s2] }, { command: "L", values: [p2 - 0.5 * o2, L2 - 0.5 * s2] }, { command: "Z", values: [] }] }, { type: "path", path: [{ command: "M", values: [p2 - 0.5 * o2, L2 - 0.5 * s2] }, { command: "L", values: [m2 ? p2 - 0.5 * o2 : l2, L2 - 0.5 * s2] }, { command: "L", values: [m2 ? p2 - 0.5 * o2 : l2, e2 ? L2 - 0.5 * s2 : s2] }, { command: "L", values: [p2 - 0.5 * o2, e2 ? L2 - 0.5 * s2 : s2] }, { command: "Z", values: [] }] }];
}
function c(a) {
  const e2 = t.size, m2 = 0.5 * a, c2 = 0, p2 = 0;
  return [{ type: "path", path: [{ command: "M", values: [p2, 0.7 * e2 * 0.5] }, { command: "L", values: [0.3 * e2, 0.7 * e2] }, { command: "L", values: [0.3 * e2, 0.7 * e2 + m2] }, { command: "L", values: [p2, 0.7 * e2 + m2 - 0.7 * e2 * 0.5] }, { command: "Z", values: [] }] }, { type: "path", path: [{ command: "M", values: [0.3 * e2, 0.7 * e2] }, { command: "L", values: [0.3 * e2, 0.7 * e2 + m2] }, { command: "L", values: [e2, m2] }, { command: "L", values: [e2, c2] }, { command: "Z", values: [] }] }, { type: "path", path: [{ command: "M", values: [0.3 * e2, c2] }, { command: "L", values: [e2, c2] }, { command: "L", values: [0.3 * e2, 0.7 * e2] }, { command: "L", values: [p2, 0.7 * e2 * 0.5] }, { command: "Z", values: [] }] }];
}
function p() {
  return [{ type: "path", path: "M80,80.2v-27c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4C8.3,59.3,5.7,58,3.9,56c-1.1-1.2-2.4-2.1-3.9-2.8v27" }, { type: "path", path: "M11,59.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8v-24c-1.5,0.7-2.8,1.6-3.9,2.8c-1.8,2.1-4.4,3.3-7.1,3.5c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-2.2-2.3-4.7-3.6-7.4-3.6s-5.1,1.3-7.4,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.7-0.1-5.3-1.4-7.1-3.4c-1.1-1.2-2.4-2.1-3.9-2.8v24c1.5,0.7,2.8,1.6,3.9,2.8C5.7,58,8.3,59.3,11,59.4z" }, { type: "path", path: "M11,35.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.4-3.6s5.1,1.3,7.4,3.6c1.8,2,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c2.2-2.3,4.7-3.6,7.3-3.6s5.1,1.3,7.4,3.6c1.8,2.1,4.4,3.3,7.2,3.4c2.7-0.1,5.3-1.4,7.1-3.4c1.1-1.2,2.4-2.1,3.9-2.8V3.6c-1.5,0.7-2.8,1.6-3.9,2.8c-2.2,2.1-4.6,3.4-7.1,3.4s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6S42.5,9.9,40,9.9s-5-1.3-7.1-3.4s-4.7-3.6-7.4-3.6s-5.1,1.3-7.3,3.6c-1.8,2.1-4.4,3.3-7.2,3.4c-2.5,0-5-1.3-7.1-3.4C2.8,5.3,1.4,4.3,0,3.6v25.6c1.5,0.7,2.8,1.6,3.9,2.8C5.7,34.1,8.3,35.3,11,35.4z" }];
}
function L(a, e2) {
  let m2 = e2 ? t.tallSymbolWidth : a;
  const c2 = a, p2 = e2 ? 4 : 6;
  m2 <= t.size ? m2 -= 0.5 * p2 : m2 -= p2;
  const L2 = 0, n2 = 0, l2 = e2 ? 0.35 * m2 : 0.5 * m2;
  return [{ type: "path", path: [{ command: "M", values: [0.5 * m2, L2] }, { command: "L", values: [m2, 0.5 * l2] }, { command: "L", values: [0.5 * m2, l2] }, { command: "L", values: [n2, 0.5 * l2] }, { command: "Z", values: [] }] }, { type: "path", path: [{ command: "M", values: [L2, 0.5 * l2] }, { command: "L", values: [0.5 * m2, l2] }, { command: "L", values: [0.5 * m2, c2] }, { command: "L", values: [n2, c2 - 0.5 * l2] }, { command: "Z", values: [] }] }, { type: "path", path: [{ command: "M", values: [0.5 * m2, l2] }, { command: "L", values: [0.5 * m2, c2] }, { command: "L", values: [m2, c2 - 0.5 * l2] }, { command: "L", values: [m2, 0.5 * l2] }, { command: "Z", values: [] }] }];
}
function n(a, e2) {
  let m2 = e2 ? t.tallSymbolWidth : a;
  const c2 = a, p2 = e2 ? 4 : 6;
  m2 <= t.size ? m2 -= 0.5 * p2 : m2 -= p2;
  const L2 = 0.5 * m2, n2 = 0.15 * m2, l2 = 0, o2 = c2 - n2;
  return [{ type: "ellipse", cx: 0.5 * m2, cy: o2, rx: L2, ry: n2 }, { type: "path", path: [{ command: "M", values: [l2, n2] }, { command: "L", values: [l2, o2] }, { command: "L", values: [m2, o2] }, { command: "L", values: [m2, n2] }, { command: "Z", values: [] }] }, { type: "ellipse", cx: 0.5 * m2, cy: n2, rx: L2, ry: n2 }];
}
function l(a, e2) {
  let m2 = e2 ? t.tallSymbolWidth : a;
  const c2 = a, p2 = e2 ? 4 : 6;
  m2 <= t.size ? m2 -= 0.5 * p2 : m2 -= p2;
  const L2 = 0.15 * m2, n2 = c2 - L2;
  return [{ type: "ellipse", cx: 0.5 * m2, cy: n2, rx: 0.5 * m2, ry: L2 }, { type: "path", path: [{ command: "M", values: [0.5 * m2, 0] }, { command: "L", values: [m2, n2] }, { command: "L", values: [0, n2] }, { command: "Z", values: [] }] }];
}
function o(a) {
  let e2 = a;
  const m2 = a, c2 = 6;
  e2 < t.size ? e2 -= 0.5 * c2 : e2 -= c2;
  const p2 = 0.15 * e2, L2 = 0;
  return [{ type: "path", path: [{ command: "M", values: [0, L2] }, { command: "L", values: [e2, L2] }, { command: "L", values: [0.5 * e2, m2 - p2] }, { command: "Z", values: [] }] }, { type: "ellipse", cx: 0.5 * e2, cy: L2, rx: 0.5 * e2, ry: p2 }];
}
function s(a) {
  let e2 = a;
  const m2 = a, c2 = 4;
  e2 < t.size ? e2 -= 0.5 * c2 : e2 -= c2;
  const p2 = 0, L2 = 0, n2 = e2, l2 = m2, o2 = Math.floor(a / 10) - 1 || 1;
  return [{ type: "path", path: [{ command: "M", values: [0.45 * n2, p2] }, { command: "L", values: [n2, 0.5 * l2 - o2] }, { command: "L", values: [0.45 * n2 - o2, 0.5 * l2 + o2] }, { command: "Z", values: [] }] }, { type: "path", path: [{ command: "M", values: [0.45 * n2, p2] }, { command: "L", values: [0.45 * n2 - o2, 0.5 * l2 + o2] }, { command: "L", values: [L2, 0.5 * l2 - o2] }, { command: "Z", values: [] }] }, { type: "path", path: [{ command: "M", values: [L2, 0.5 * l2 - o2] }, { command: "L", values: [0.45 * n2 - o2, 0.5 * l2 + o2] }, { command: "L", values: [0.45 * n2, m2] }, { command: "Z", values: [] }] }, { type: "path", path: [{ command: "M", values: [0.45 * n2, m2] }, { command: "L", values: [n2, 0.5 * l2 - o2] }, { command: "L", values: [0.45 * n2 - o2, 0.5 * l2 + o2] }, { command: "Z", values: [] }] }];
}
function u(a) {
  const e2 = a, m2 = 2;
  let c2 = a;
  c2 < t.size ? c2 -= 0.5 * m2 : c2 -= m2;
  const p2 = 0, L2 = 0;
  return [{ type: "path", path: [{ command: "M", values: [0.45 * e2, p2] }, { command: "L", values: [e2, c2] }, { command: "L", values: [0.45 * e2, 0.6 * c2] }, { command: "Z", values: [] }] }, { type: "path", path: [{ command: "M", values: [0.45 * e2, p2] }, { command: "L", values: [0.45 * e2, 0.6 * c2] }, { command: "L", values: [L2, c2] }, { command: "Z", values: [] }] }, { type: "path", path: [{ command: "M", values: [L2, c2] }, { command: "L", values: [0.45 * e2, 0.6 * c2] }, { command: "L", values: [e2, c2] }, { command: "Z", values: [] }] }];
}
function h2(a, t2) {
  const e2 = 0.75;
  return Math.round(Math.min(Math.max(a + 255 * t2 * e2, 0), 255));
}
function d(t2, e2) {
  if (null == t2) return new h();
  if ("type" in t2 && ("linear" === t2.type || "pattern" === t2.type)) return t2;
  const m2 = new h(t2);
  return new h([h2(m2.r, e2), h2(m2.g, e2), h2(m2.b, e2), m2.a]);
}

export {
  t,
  e,
  m,
  c,
  p,
  L,
  n,
  l,
  o,
  s,
  u,
  h2 as h,
  d
};
//# sourceMappingURL=chunk-EZQWXU2P.js.map
