import {
  n
} from "./chunk-KWOLBNIK.js";
import {
  ne,
  x
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/support/elevationInfoUtils.js
function o(e) {
  return e ? j : z;
}
function r(e, n2) {
  return (n2 == null ? void 0 : n2.mode) ? n2.mode : o(e).mode;
}
function u(e, n2) {
  return null != n2 ? n2 : o(e);
}
function i(e, n2) {
  return r(null == e || (e.hasZ ?? false), n2);
}
function s(e, n2) {
  return u(null == e || (e.hasZ ?? false), n2);
}
function l(e) {
  const n2 = g(e);
  return i(e.geometry, n2);
}
function a(e) {
  const n2 = g(e), t = i(e.geometry, n2), o2 = null != n2 && "on-the-ground" !== t ? R(n2) : 0, r2 = n2 == null ? void 0 : n2.featureExpressionInfo;
  return { mode: t, offset: o2, featureExpressionInfo: r2 };
}
function f(e) {
  return v(a(e));
}
function c(e) {
  return v(e) || d(e);
}
function d(e) {
  var _a;
  return "0" === ((_a = e == null ? void 0 : e.featureExpressionInfo) == null ? void 0 : _a.expression);
}
function v(e) {
  if (!e) return false;
  if ("on-the-ground" === e.mode) return false;
  const n2 = (e == null ? void 0 : e.featureExpressionInfo) ? e.featureExpressionInfo.expression : null;
  return !(!n2 || "0" === n2);
}
function g(e) {
  return e.layer && "elevationInfo" in e.layer ? e.layer.elevationInfo : null;
}
function h(t, o2) {
  if (!(t == null ? void 0 : t.offset)) return 0;
  const { offset: r2, unit: u2 } = t;
  if ("decimal-degrees" === u2) return 0;
  const i2 = "unknown" !== u2 && u2 ? u2 : "meters", s2 = ne(o2);
  return s2 ? x(r2, i2, s2) : 0;
}
function p(e, n2, t) {
  if (!(t == null ? void 0 : t.mode)) return;
  const o2 = e.hasZ ? e.z : 0, r2 = h(t, e.spatialReference);
  switch (t.mode) {
    case "absolute-height":
      return o2 - r2;
    case "on-the-ground":
      return 0;
    case "relative-to-ground":
      return o2 - ((n2.elevationProvider.getElevation(e.x, e.y, o2, e.spatialReference, "ground") ?? 0) + r2);
    case "relative-to-scene":
      return o2 - ((n2.elevationProvider.getElevation(e.x, e.y, o2, e.spatialReference, "scene") ?? 0) + r2);
  }
}
function m(e, n2, t, o2 = null) {
  return E(e, n2.x, n2.y, n2.hasZ ? n2.z : 0, n2.spatialReference, t, o2);
}
function x2(e, n2, t, o2, r2 = null) {
  return E(e, n2[0], n2[1], n2.length > 2 ? n2[2] : 0, t, o2, r2);
}
function E(e, n2, t, o2, r2, u2, i2 = null) {
  if (null == u2) return;
  const s2 = null != i2 ? i2.mode : "absolute-height";
  if ("on-the-ground" === s2) return 0;
  const { absoluteZ: l2 } = b(n2, t, o2, r2, e, u2);
  return I(l2, n2, t, o2, r2, e, i2, s2);
}
function b(e, n2, t, o2, r2, u2) {
  const i2 = h(u2, o2);
  switch (u2.mode) {
    case "absolute-height":
      return { absoluteZ: t + i2, elevation: 0 };
    case "on-the-ground": {
      const t2 = r2.elevationProvider.getElevation(e, n2, 0, o2, "ground") ?? 0;
      return { absoluteZ: t2, elevation: t2 };
    }
    case "relative-to-ground": {
      const u3 = r2.elevationProvider.getElevation(e, n2, t, o2, "ground") ?? 0;
      return { absoluteZ: t + u3 + i2, elevation: u3 };
    }
    case "relative-to-scene": {
      const u3 = r2.elevationProvider.getElevation(e, n2, t, o2, "scene") ?? 0;
      return { absoluteZ: t + u3 + i2, elevation: u3 };
    }
  }
}
function I(e, n2, t, o2, r2, u2, i2, s2) {
  const l2 = h(i2, r2);
  switch (s2) {
    case "absolute-height":
      return e - l2;
    case "relative-to-ground":
      return e - ((u2.elevationProvider.getElevation(n2, t, o2, r2, "ground") ?? 0) + l2);
    case "relative-to-scene":
      return e - ((u2.elevationProvider.getElevation(n2, t, o2, r2, "scene") ?? 0) + l2);
  }
}
function y(e, n2) {
  if (null == n2) return false;
  const { mode: t } = n2;
  return null != t && ("scene" === e && "relative-to-scene" === t || "ground" === e && "absolute-height" !== t);
}
function Z(e, n2, t) {
  return t && t.mode !== n2 ? `${e} only support ${n2} elevation mode` : null;
}
function P(e, n2, t) {
  return (t == null ? void 0 : t.mode) === n2 ? `${e} do not support ${n2} elevation mode` : null;
}
function w(e, n2) {
  return null != (n2 == null ? void 0 : n2.featureExpressionInfo) && "0" !== n2.featureExpressionInfo.expression ? `${e} do not support featureExpressionInfo` : null;
}
function $(e, n2) {
  n2 && e.warn(".elevationInfo=", n2);
}
function R(e) {
  return ((e == null ? void 0 : e.offset) ?? 0) * n(e == null ? void 0 : e.unit);
}
var j = { mode: "absolute-height", offset: 0 };
var z = { mode: "on-the-ground", offset: null };

export {
  r,
  u,
  i,
  s,
  l,
  a,
  f,
  c,
  d,
  v,
  h,
  p,
  m,
  x2 as x,
  E,
  b,
  y,
  Z,
  P,
  w,
  $,
  R,
  j,
  z
};
//# sourceMappingURL=chunk-PFFYYIYN.js.map
