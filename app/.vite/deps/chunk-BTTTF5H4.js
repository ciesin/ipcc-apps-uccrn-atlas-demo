import {
  i,
  n
} from "./chunk-MEC6IDRX.js";

// node_modules/@arcgis/core/symbols/cim/utils.js
function r(e) {
  return "function" == typeof e;
}
function n2(e, t, n3, o2) {
  return r(e) ? e(t, n3, o2) : e;
}
function o(e) {
  return [e.r, e.g, e.b, e.a];
}
var i2 = " /-,\n";
function l(e) {
  let t = e.length;
  for (; t--; ) if (!i2.includes(e.charAt(t))) return false;
  return true;
}
function a(e, t) {
  const r2 = [];
  let n3 = 0, o2 = -1;
  do {
    if (o2 = e.indexOf("[", n3), o2 >= n3) {
      if (o2 > n3) {
        const t2 = e.slice(n3, o2);
        r2.push([t2, null, l(t2)]);
      }
      if (n3 = o2 + 1, o2 = e.indexOf("]", n3), o2 >= n3) {
        if (o2 > n3) {
          const i3 = t[e.slice(n3, o2)];
          i3 && r2.push([null, i3, false]);
        }
        n3 = o2 + 1;
      }
    }
  } while (-1 !== o2);
  if (n3 < e.length) {
    const t2 = e.slice(n3);
    r2.push([t2, null, l(t2)]);
  }
  return r2;
}
function c(e, t, r2, n3) {
  let o2 = "", i3 = null;
  for (const l2 of t) {
    const [t2, n4, a2] = l2;
    if (t2) a2 ? i3 = t2 : (i3 && (o2 += i3, i3 = null), o2 += t2);
    else {
      let t3 = n4;
      null != r2 && (t3 = J(n4, r2));
      const l3 = e.attributes[t3];
      l3 && (i3 && (o2 += i3, i3 = null), o2 += l3);
    }
  }
  return s(o2, n3);
}
function s(e, t) {
  switch ("string" != typeof e && (e = String(e)), t) {
    case "LowerCase":
      return e.toLowerCase();
    case "Allcaps":
      return e.toUpperCase();
    default:
      return e;
  }
}
function u(e, t, r2, n3, o2, i3, l2 = true) {
  const a2 = t / o2, c2 = r2 / i3, s2 = Math.ceil(a2 / 2), u2 = Math.ceil(c2 / 2);
  for (let f2 = 0; f2 < i3; f2++) for (let r3 = 0; r3 < o2; r3++) {
    const y2 = 4 * (r3 + (l2 ? i3 - f2 - 1 : f2) * o2);
    let M2 = 0, m2 = 0, C2 = 0, I2 = 0, p2 = 0, h2 = 0, b2 = 0;
    const d2 = (f2 + 0.5) * c2;
    for (let n4 = Math.floor(f2 * c2); n4 < (f2 + 1) * c2; n4++) {
      const o3 = Math.abs(d2 - (n4 + 0.5)) / u2, i4 = (r3 + 0.5) * a2, l3 = o3 * o3;
      for (let c3 = Math.floor(r3 * a2); c3 < (r3 + 1) * a2; c3++) {
        let r4 = Math.abs(i4 - (c3 + 0.5)) / s2;
        const o4 = Math.sqrt(l3 + r4 * r4);
        o4 >= -1 && o4 <= 1 && (M2 = 2 * o4 * o4 * o4 - 3 * o4 * o4 + 1, M2 > 0 && (r4 = 4 * (c3 + n4 * t), b2 += M2 * e[r4 + 3], C2 += M2, e[r4 + 3] < 255 && (M2 = M2 * e[r4 + 3] / 250), I2 += M2 * e[r4], p2 += M2 * e[r4 + 1], h2 += M2 * e[r4 + 2], m2 += M2));
      }
    }
    n3[y2] = I2 / m2, n3[y2 + 1] = p2 / m2, n3[y2 + 2] = h2 / m2, n3[y2 + 3] = b2 / C2;
  }
}
function f(e) {
  return e ? [e[0], e[1], e[2], e[3] / 255] : [0, 0, 0, 0];
}
function y(e) {
  var _a;
  return ((_a = e.data) == null ? void 0 : _a.symbol) ?? null;
}
function M(e) {
  return "CIMVectorMarker" === e.type || "CIMPictureMarker" === e.type || "CIMBarChartMarker" === e.type || "CIMCharacterMarker" === e.type || "CIMPieChartMarker" === e.type || "CIMStackedBarChartMarker" === e.type;
}
function m(e) {
  return "CIMGradientStroke" === e.type || "CIMPictureStroke" === e.type || "CIMSolidStroke" === e.type;
}
function C(e) {
  return null != e && ("CIMGradientFill" === e.type || "CIMHatchFill" === e.type || "CIMPictureFill" === e.type || "CIMSolidFill" === e.type || "CIMWaterFill" === e.type);
}
function I(e) {
  return null != e && ("CIMMarkerPlacementAlongLineRandomSize" === e.type || "CIMMarkerPlacementAlongLineSameSize" === e.type || "CIMMarkerPlacementAlongLineVariableSize" === e.type || "CIMMarkerPlacementAtExtremities" === e.type || "CIMMarkerPlacementAtMeasuredUnits" === e.type || "CIMMarkerPlacementAtRatioPositions" === e.type || "CIMMarkerPlacementOnLine" === e.type || "CIMMarkerPlacementOnVertices" === e.type);
}
var p = (e, t = 0) => null == e || isNaN(e) ? t : e;
var h = (e, t) => null != e ? e : t;
var b = (e, t) => e ?? t;
var d = (e) => e.tintColor ? f(e.tintColor) : [255, 255, 255, 1];
var k = (e) => {
  if (!e) return false;
  for (const t of e) switch (t.type) {
    case "CIMGeometricEffectBuffer":
    case "CIMGeometricEffectOffset":
    case "CIMGeometricEffectDonut":
      return true;
  }
  return false;
};
function S() {
  return import("./geometryEngineJSON-LBL23444.js");
}
function g(e) {
  if (!e) return "normal";
  switch (e.toLowerCase()) {
    case "italic":
      return "italic";
    case "oblique":
      return "oblique";
    default:
      return "normal";
  }
}
function P(e) {
  if (!e) return "normal";
  switch (e.toLowerCase()) {
    case "bold":
      return "bold";
    case "bolder":
      return "bolder";
    case "lighter":
      return "lighter";
    default:
      return "normal";
  }
}
function w(e) {
  let t = "normal", r2 = "normal";
  if (e) {
    const n3 = e.toLowerCase();
    n3.includes("italic") ? t = "italic" : n3.includes("oblique") && (t = "oblique"), n3.includes("bold") ? r2 = "bold" : n3.includes("light") && (r2 = "lighter");
  }
  return { style: t, weight: r2 };
}
function L(e) {
  return e.underline ? "underline" : e.strikethrough ? "line-through" : "none";
}
function T(e) {
  if (!e) return null;
  switch (e.type) {
    case "CIMPolygonSymbol":
      if (e.symbolLayers) for (const t of e.symbolLayers) {
        const e2 = T(t);
        if (null != e2) return e2;
      }
      break;
    case "CIMTextSymbol":
      return T(e.symbol);
    case "CIMSolidFill":
      return e.color;
  }
  return null;
}
function A(e) {
  if (e) switch (e.type) {
    case "CIMPolygonSymbol":
    case "CIMLineSymbol": {
      const t = e.symbolLayers;
      if (t) for (const e2 of t) {
        const t2 = A(e2);
        if (null != t2) return t2;
      }
      break;
    }
    case "CIMTextSymbol":
      return A(e.symbol);
    case "CIMSolidStroke":
      return e.color;
  }
}
function x(e) {
  if (e) switch (e.type) {
    case "CIMPolygonSymbol":
    case "CIMLineSymbol":
      if (e.symbolLayers) for (const t of e.symbolLayers) {
        const e2 = x(t);
        if (void 0 !== e2) return e2;
      }
      break;
    case "CIMTextSymbol":
      return x(e.symbol);
    case "CIMSolidStroke":
    case "CIMGradientStroke":
    case "CIMPictureStroke":
      return e.width;
  }
}
function N(e) {
  switch (e) {
    case "Left":
    default:
      return "left";
    case "Right":
      return "right";
    case "Center":
    case "Justify":
      return "center";
  }
}
function F(e) {
  switch (e) {
    case "Top":
    default:
      return "top";
    case "Center":
      return "middle";
    case "Baseline":
      return "baseline";
    case "Bottom":
      return "bottom";
  }
}
function v(e) {
  return (e ? Object.keys(e) : []).map((t) => ({ name: t, alias: t, type: "string" == typeof e[t] ? "esriFieldTypeString" : "esriFieldTypeDouble" }));
}
var G = (e) => e.includes("data:image/svg+xml");
function V(e) {
  if (!e) return null;
  switch (e.type) {
    case "CIMPointSymbol":
    case "CIMTextSymbol":
      return "esriGeometryPoint";
    case "CIMLineSymbol":
      return "esriGeometryPolyline";
    case "CIMPolygonSymbol":
      return "esriGeometryPolygon";
    default:
      return null;
  }
}
function z(e) {
  return e ? e.charAt(0).toLowerCase() + e.slice(1) : e;
}
function E(e, t, r2, n3, o2, i3, l2 = true) {
  const { infos: a2 } = i3;
  let c2 = 1, s2 = 0, u2 = 0, f2 = 0, y2 = 1;
  for (const { absoluteAnchorPoint: C2, offsetX: I2, offsetY: p2, rotation: h2, size: b2, frameHeight: d2, rotateClockWise: k2, scaleSymbolsProportionally: S2 } of a2) {
    y2 = C2 ? 1 : c2;
    u2 = Y(I2, p2, s2, y2, u2), f2 = X(I2, p2, s2, y2, f2), d2 && (S2 || l2) && (c2 *= b2 / d2), s2 = $(h2, k2, s2);
  }
  const M2 = Y(n3, o2, s2, y2, u2), m2 = X(n3, o2, s2, y2, f2);
  return { size: e * c2, rotation: $(t, r2, s2), offsetX: M2, offsetY: m2 };
}
function O(e) {
  if (null == e) return false;
  if (Array.isArray(e)) return e.every((e2) => O(e2));
  switch (typeof e) {
    case "string":
      return !!e;
    case "number":
      return !isNaN(e);
  }
}
function D(r2, n3) {
  if ("color" === n3 || "outlinecolor" === n3 || "backgroundcolor" === n3 || "borderlinecolor" === n3 || "tintcolor" === n3) return [...i[n3]];
  const o2 = n[r2];
  if (!o2) throw new Error(`InternalError: default value for type ${r2}.`);
  return o2[n3];
}
function j(e) {
  return e.split(" ").map((e2) => Number(e2));
}
function q(e) {
  return "string" == typeof e ? j(e) : e;
}
function B(e) {
  return (e == null ? void 0 : e.dashTemplate) && (e.dashTemplate = q(e.dashTemplate)), e;
}
function R(e) {
  if (null == e) return "Normal";
  switch (e.type) {
    case "CIMTextSymbol":
      return e.textCase ?? "Normal";
    case "CIMPointSymbol":
    case "CIMLineSymbol":
    case "CIMPolygonSymbol":
      {
        const t = e.symbolLayers;
        if (!t) return "Normal";
        for (const e2 of t) if ("CIMVectorMarker" === e2.type) return R(e2);
      }
      break;
    case "CIMVectorMarker": {
      const t = e.markerGraphics;
      if (!t) return "Normal";
      for (const e2 of t) if (e2.symbol) return R(e2.symbol);
    }
  }
  return "Normal";
}
function H(e) {
  if (e) switch (e.type) {
    case "CIMTextSymbol":
      return e.height;
    case "CIMPointSymbol": {
      let r2 = 0;
      if (e.symbolLayers) {
        for (const n3 of e.symbolLayers) if (n3) switch (n3.type) {
          case "CIMCharacterMarker":
          case "CIMPictureMarker":
          case "CIMVectorMarker":
          case "CIMObjectMarker3D":
          case "CIMglTFMarker3D": {
            const e2 = n3.size ?? n.CIMVectorMarker.size;
            e2 > r2 && (r2 = e2);
            break;
          }
        }
      }
      return r2;
    }
    case "CIMLineSymbol":
    case "CIMPolygonSymbol": {
      let r2 = 0;
      if (e.symbolLayers) {
        for (const n3 of e.symbolLayers) if (n3) switch (n3.type) {
          case "CIMSolidStroke":
          case "CIMPictureStroke":
          case "CIMGradientStroke": {
            const e2 = n3.width;
            null != e2 && e2 > r2 && (r2 = e2);
            break;
          }
          case "CIMCharacterMarker":
          case "CIMPictureMarker":
          case "CIMVectorMarker":
          case "CIMObjectMarker3D":
          case "CIMglTFMarker3D":
            if (n3.markerPlacement && I(n3.markerPlacement)) {
              const e2 = n3.size ?? n.CIMVectorMarker.size;
              e2 > r2 && (r2 = e2);
            }
            break;
          case "CIMPictureFill": {
            const e2 = n3.height;
            null != e2 && e2 > r2 && (r2 = e2);
          }
        }
      }
      return r2;
    }
  }
}
function J(e, t) {
  if (null !== t) {
    const r2 = t.get(e);
    return r2 ? r2.name : e;
  }
  return e;
}
function U(e) {
  return e.map((e2) => ({ ...e2, propertyName: z(e2.propertyName) }));
}
function W(e) {
  const t = {};
  for (const r2 in e) {
    const n3 = e[r2];
    t[z(r2)] = n3;
  }
  return t;
}
function X(e, t, r2, n3, o2) {
  const i3 = r2 * Math.PI / 180;
  if (i3) {
    const r3 = Math.cos(i3);
    return (Math.sin(i3) * e + r3 * t) * n3 + o2;
  }
  return t * n3 + o2;
}
function Y(e, t, r2, n3, o2) {
  const i3 = r2 * Math.PI / 180;
  if (i3) {
    return (Math.cos(i3) * e - Math.sin(i3) * t) * n3 + o2;
  }
  return e * n3 + o2;
}
function $(e, t, r2) {
  return t ? r2 - e : r2 + e;
}
function K(e, t, r2) {
  const n3 = "Color" === r2 || "TintColor" === r2 || "ToColor" === r2, o2 = "Rotation" === r2 || "Angle" === r2 || "ToRotation" === r2;
  let i3 = t[z(r2)];
  if (null != i3 && (n3 ? i3 = [i3[0] / 255, i3[1] / 255, i3[2] / 255, i3[3] / 255] : o2 && (i3 *= Math.PI / 180)), null == i3 && (i3 = D(t.type, r2.toLowerCase()), null != i3 && (n3 ? i3 = [i3[0] / 255, i3[1] / 255, i3[2] / 255, i3[3]] : o2 && (i3 *= Math.PI / 180))), null != t.primitiveName) {
    const l2 = e[t.primitiveName];
    if (null != l2) {
      const e2 = l2[r2];
      null == e2 || ("string" == typeof e2 || "number" == typeof e2 || Array.isArray(e2) ? (i3 = e2, null != i3 && (n3 ? i3 = [i3[0] / 255, i3[1] / 255, i3[2] / 255, i3[3] / 255] : o2 && (i3 *= Math.PI / 180))) : (i3 = { valueExpressionInfo: e2, defaultValue: i3 }, null != i3 && (n3 ? i3 = { type: "Process", op: "ArcadeColor", value: i3 } : o2 && (i3 = { type: "Process", op: "Divide", left: i3, right: 180 / Math.PI }))));
    }
  }
  if (null == i3) throw new Error(`Failed to derive a value or an expression for "${r2}".`);
  return i3;
}
function Q(e, t) {
  return Math.max(Math.min((e ?? t) / 100, 1), 0);
}

export {
  n2 as n,
  o,
  a,
  c,
  u,
  f,
  y,
  M,
  m,
  C,
  I,
  p,
  h,
  b,
  d,
  k,
  S,
  g,
  P,
  w,
  L,
  T,
  A,
  x,
  N,
  F,
  v,
  G,
  V,
  z,
  E,
  O,
  D,
  q,
  B,
  R,
  H,
  J,
  U,
  W,
  K,
  Q
};
//# sourceMappingURL=chunk-BTTTF5H4.js.map
