import {
  N
} from "./chunk-OBOMTFRH.js";
import {
  o
} from "./chunk-LZUCOHH2.js";
import {
  D
} from "./chunk-CRKFUUKK.js";
import {
  e
} from "./chunk-MHM4GDCM.js";

// node_modules/@arcgis/core/views/3d/support/engineContent/sdfPrimitives.js
var o2 = 128;
var a = 0.5;
var c = e(a / 2, a / 2, 1 - a / 2, 1 - a / 2);
function s(t) {
  return "cross" === t || "x" === t;
}
function u(t, r = o2, c2 = r * a, s2 = 0) {
  const u2 = i(t, r, c2, s2);
  return new N(u2, { mipmap: false, wrap: { s: D.CLAMP_TO_EDGE, t: D.CLAMP_TO_EDGE }, width: r, height: r, components: 4, noUnpackFlip: true, reloadable: true });
}
function i(t, r = o2, n = r * a, e2 = 0) {
  switch (t) {
    case "circle":
    default:
      return f(r, n);
    case "square":
      return h(r, n);
    case "cross":
      return l(r, n, e2);
    case "x":
      return m(r, n, e2);
    case "kite":
      return M(r, n);
    case "triangle":
      return p(r, n);
    case "arrow":
      return b(r, n);
  }
}
function f(t, r) {
  const n = t / 2 - 0.5;
  return g(t, x(n, n, r / 2));
}
function h(t, r) {
  return T(t, r, false);
}
function M(t, r) {
  return T(t, r, true);
}
function l(t, r, n = 0) {
  return w(t, r, false, n);
}
function m(t, r, n = 0) {
  return w(t, r, true, n);
}
function p(t, r) {
  return g(t, R(t / 2, r, r / 2));
}
function b(t, r) {
  const n = r, e2 = r / 2, o3 = t / 2, a2 = 0.8 * n, c2 = x(o3, (t - r) / 2 - a2, Math.sqrt(a2 * a2 + e2 * e2)), s2 = R(o3, n, e2);
  return g(t, (t2, r2) => Math.max(s2(t2, r2), -c2(t2, r2)));
}
function T(t, r, n) {
  return n && (r /= Math.SQRT2), g(t, (e2, o3) => {
    let a2 = e2 - 0.5 * t + 0.25, c2 = 0.5 * t - o3 - 0.75;
    if (n) {
      const t2 = (a2 + c2) / Math.SQRT2;
      c2 = (c2 - a2) / Math.SQRT2, a2 = t2;
    }
    return Math.max(Math.abs(a2), Math.abs(c2)) - 0.5 * r;
  });
}
function w(t, r, n, e2 = 0) {
  r -= e2, n && (r *= Math.SQRT2);
  const o3 = 0.5 * r;
  return g(t, (r2, a2) => {
    let c2, s2 = r2 - 0.5 * t, u2 = 0.5 * t - a2 - 1;
    if (n) {
      const t2 = (s2 + u2) / Math.SQRT2;
      u2 = (u2 - s2) / Math.SQRT2, s2 = t2;
    }
    return s2 = Math.abs(s2), u2 = Math.abs(u2), c2 = s2 > u2 ? s2 > o3 ? Math.sqrt((s2 - o3) * (s2 - o3) + u2 * u2) : u2 : u2 > o3 ? Math.sqrt(s2 * s2 + (u2 - o3) * (u2 - o3)) : s2, c2 -= e2 / 2, c2;
  });
}
function x(t, r, n) {
  return (e2, o3) => {
    const a2 = e2 - t, c2 = o3 - r;
    return Math.sqrt(a2 * a2 + c2 * c2) - n;
  };
}
function R(t, r, n) {
  const e2 = Math.sqrt(r * r + n * n);
  return (o3, a2) => {
    const c2 = Math.abs(o3 - t) - n, s2 = a2 - t + r / 2 + 0.75, u2 = (r * c2 + n * s2) / e2, i2 = -s2;
    return Math.max(u2, i2);
  };
}
function g(r, n) {
  const e2 = new Uint8Array(4 * r * r);
  for (let o3 = 0; o3 < r; o3++) for (let a2 = 0; a2 < r; a2++) {
    const c2 = a2 + r * o3;
    let s2 = n(a2, o3);
    s2 = s2 / r + 0.5, o(s2, e2, 4 * c2);
  }
  return e2;
}

export {
  o2 as o,
  a,
  c,
  s,
  u
};
//# sourceMappingURL=chunk-C2G4BZ5N.js.map
