import {
  m
} from "./chunk-TGMFGDP6.js";
import {
  b
} from "./chunk-5X74MKXM.js";
import {
  h
} from "./chunk-3UHB6K6P.js";
import {
  n2
} from "./chunk-CWMZW2S5.js";
import {
  n
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/renderers/visualVariables/support/sizeVariableUtils.js
var n3;
var i;
function e(n4) {
  return n4 && "esri.renderers.visualVariables.SizeVariable" === n4.declaredClass;
}
function l(n4) {
  return null != n4 && !isNaN(n4) && isFinite(n4);
}
function t(i2) {
  return i2.valueExpression ? n3.Expression : i2.field && "string" == typeof i2.field ? n3.Field : n3.Unknown;
}
function a(e2, l2) {
  const a2 = l2 || t(e2), o = e2.valueUnit || "unknown";
  return a2 === n3.Unknown ? i.Constant : e2.stops ? i.Stops : null != e2.minSize && null != e2.maxSize && null != e2.minDataValue && null != e2.maxDataValue ? i.ClampedLinear : "unknown" === o ? null != e2.minSize && null != e2.minDataValue ? e2.minSize && e2.minDataValue ? i.Proportional : i.Additive : i.Identity : i.RealWorldSize;
}
!function(n4) {
  n4.Unknown = "unknown", n4.Expression = "expression", n4.Field = "field";
}(n3 || (n3 = {})), function(n4) {
  n4.Unknown = "unknown", n4.Stops = "stops", n4.ClampedLinear = "clamped-linear", n4.Proportional = "proportional", n4.Additive = "additive", n4.Constant = "constant", n4.Identity = "identity", n4.RealWorldSize = "real-world-size";
}(i || (i = {}));

// node_modules/@arcgis/core/renderers/visualVariables/support/visualVariableUtils.js
var c = () => n2.getLogger("esri.renderers.visualVariables.support.visualVariableUtils");
var u = (e2) => c().warn(`The visualVariable should be an instance of esri.renderers.visualVariables.${e2}`);
var f = () => c().error("Use of arcade expressions requires an arcade context");
var p = new b();
var d = Math.PI;
var v = /^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;
function m2(a2, i2, n4) {
  const t2 = "visualVariables" in a2 && a2.visualVariables ? a2.visualVariables.find((e2) => "color" === e2.type) : a2;
  if (!t2) return;
  if ("esri.renderers.visualVariables.ColorVariable" !== t2.declaredClass) return void u("ColorVariable");
  const r = "number" == typeof i2, s = r ? null : i2, l2 = s == null ? void 0 : s.attributes;
  let o = r ? i2 : null;
  const c2 = t2.field, { ipData: p2, hasExpression: d2 } = t2.cache;
  let v2 = t2.cache.compiledFunc;
  if (!c2 && !d2) {
    const e2 = t2.stops;
    return e2 && e2[0] && e2[0].color;
  }
  if ("number" != typeof o) if (d2) {
    if (null == (n4 == null ? void 0 : n4.arcade)) return void f();
    const e2 = { viewingMode: n4.viewingMode, scale: n4.scale, spatialReference: n4.spatialReference }, a3 = n4.arcade.arcadeUtils, i3 = a3.getViewInfo(e2), r2 = a3.createExecContext(s, i3, n4.timeZone);
    if (!v2) {
      const e3 = a3.createSyntaxTree(t2.valueExpression);
      v2 = a3.createFunction(e3), t2.cache.compiledFunc = v2;
    }
    o = a3.executeFunction(v2, r2);
  } else l2 && (o = l2[c2]);
  const m3 = t2.normalizationField, b3 = null != l2 && null != m3 ? parseFloat(l2[m3]) : void 0;
  if (null != o && (!m3 || r || !isNaN(b3) && 0 !== b3)) {
    isNaN(b3) || r || (o /= b3);
    const a3 = U(o, p2);
    if (a3) {
      const i3 = a3[0], r2 = a3[1], s2 = i3 === r2 ? t2.stops[i3].color : h.blendColors(t2.stops[i3].color, t2.stops[r2].color, a3[2], null != n4 ? n4.color : void 0);
      return new h(s2);
    }
  }
}
function b2(e2, a2, i2) {
  const n4 = "visualVariables" in e2 && e2.visualVariables ? e2.visualVariables.find((e3) => "opacity" === e3.type) : e2;
  if (!n4) return;
  if ("esri.renderers.visualVariables.OpacityVariable" !== n4.declaredClass) return void u("OpacityVariable");
  const t2 = "number" == typeof a2, r = t2 ? null : a2, s = r == null ? void 0 : r.attributes;
  let l2 = t2 ? a2 : null;
  const o = n4.field, { ipData: c2, hasExpression: p2 } = n4.cache;
  let d2 = n4.cache.compiledFunc;
  if (!o && !p2) {
    const e3 = n4.stops;
    return e3 && e3[0] && e3[0].opacity;
  }
  if ("number" != typeof l2) if (p2) {
    if (null == (i2 == null ? void 0 : i2.arcade)) return void f();
    const e3 = { viewingMode: i2.viewingMode, scale: i2.scale, spatialReference: i2.spatialReference }, a3 = i2.arcade.arcadeUtils, t3 = a3.getViewInfo(e3), s2 = a3.createExecContext(r, t3, i2.timeZone);
    if (!d2) {
      const e4 = a3.createSyntaxTree(n4.valueExpression);
      d2 = a3.createFunction(e4), n4.cache.compiledFunc = d2;
    }
    l2 = a3.executeFunction(d2, s2);
  } else s && (l2 = s[o]);
  const v2 = n4.normalizationField, m3 = null != s && null != v2 ? parseFloat(s[v2]) : void 0;
  if (null != l2 && (!v2 || t2 || !isNaN(m3) && 0 !== m3)) {
    isNaN(m3) || t2 || (l2 /= m3);
    const e3 = U(l2, c2);
    if (e3) {
      const a3 = e3[0], i3 = e3[1];
      if (a3 === i3) return n4.stops[a3].opacity;
      {
        const t3 = n4.stops[a3].opacity;
        return t3 + (n4.stops[i3].opacity - t3) * e3[2];
      }
    }
  }
}
function h2(e2, a2, i2) {
  const n4 = "visualVariables" in e2 && e2.visualVariables ? e2.visualVariables.find((e3) => "rotation" === e3.type) : e2;
  if (!n4) return;
  if ("esri.renderers.visualVariables.RotationVariable" !== n4.declaredClass) return void u("RotationVariable");
  const t2 = n4.axis || "heading", r = "heading" === t2 && "arithmetic" === n4.rotationType ? 90 : 0, s = "heading" === t2 && "arithmetic" === n4.rotationType ? -1 : 1, l2 = "number" == typeof a2 ? null : a2, o = l2 == null ? void 0 : l2.attributes, c2 = n4.field, { hasExpression: p2 } = n4.cache;
  let d2 = n4.cache.compiledFunc, v2 = 0;
  if (!c2 && !p2) return v2;
  if (p2) {
    if (null == (i2 == null ? void 0 : i2.arcade)) return void f();
    const e3 = { viewingMode: i2.viewingMode, scale: i2.scale, spatialReference: i2.spatialReference }, a3 = i2.arcade.arcadeUtils, t3 = a3.getViewInfo(e3), r2 = a3.createExecContext(l2, t3, i2.timeZone);
    if (!d2) {
      const e4 = a3.createSyntaxTree(n4.valueExpression);
      d2 = a3.createFunction(e4), n4.cache.compiledFunc = d2;
    }
    v2 = a3.executeFunction(d2, r2);
  } else o && (v2 = o[c2] || 0);
  return v2 = "number" != typeof v2 || isNaN(v2) ? null : r + s * v2, v2;
}
function V(e2, a2, i2) {
  const n4 = "number" == typeof a2, t2 = n4 ? null : a2, r = t2 == null ? void 0 : t2.attributes;
  let l2 = n4 ? a2 : null;
  const { isScaleDriven: c2 } = e2.cache;
  let u2 = e2.cache.compiledFunc;
  if (c2) {
    const a3 = null != i2 ? i2.scale : void 0, n5 = null != i2 ? i2.view : void 0;
    l2 = null == a3 || "3d" === n5 ? x(e2) : a3;
  } else if (!n4) switch (e2.inputValueType) {
    case n3.Expression: {
      if (null == (i2 == null ? void 0 : i2.arcade)) return void f();
      const a3 = { viewingMode: i2.viewingMode, scale: i2.scale, spatialReference: i2.spatialReference }, n5 = i2.arcade.arcadeUtils, r2 = n5.getViewInfo(a3), s = n5.createExecContext(t2, r2, i2.timeZone);
      if (!u2) {
        const a4 = n5.createSyntaxTree(e2.valueExpression);
        u2 = n5.createFunction(a4), e2.cache.compiledFunc = u2;
      }
      l2 = n5.executeFunction(u2, s);
      break;
    }
    case n3.Field:
      r && (l2 = r[e2.field]);
      break;
    case n3.Unknown:
      l2 = null;
  }
  if (!l(l2)) return null;
  if (n4 || !e2.normalizationField) return l2;
  const p2 = r ? parseFloat(r[e2.normalizationField]) : null;
  return l(p2) && 0 !== p2 ? l2 / p2 : null;
}
function x(e2) {
  let a2 = null, i2 = null;
  const n4 = e2.stops;
  return n4 ? (a2 = n4[0].value, i2 = n4[n4.length - 1].value) : (a2 = e2.minDataValue || 0, i2 = e2.maxDataValue || 0), (a2 + i2) / 2;
}
function y(e2, a2, i2) {
  const n4 = "visualVariables" in e2 && e2.visualVariables ? e2.visualVariables.find((e3) => "size" === e3.type) : e2;
  if (!n4) return;
  if ("esri.renderers.visualVariables.SizeVariable" !== n4.declaredClass) return void u("SizeVariable");
  const t2 = k(V(n4, a2, i2), n4, a2, i2, n4.cache.ipData);
  return null == t2 || isNaN(t2) ? 0 : t2;
}
function g(e2, a2, i2) {
  return null == e2 ? null : e(e2) ? y(e2, a2, i2) : l(e2) ? e2 : null;
}
function w(e2, a2, i2) {
  return l(i2) && e2 > i2 ? i2 : l(a2) && e2 < a2 ? a2 : e2;
}
function z(e2, a2, i2, n4) {
  return e2 + ((g(a2.minSize, i2, n4) || a2.minDataValue) ?? 0);
}
function F(e2, a2, i2) {
  const n4 = e2.stops;
  let t2 = (n4 == null ? void 0 : n4.length) && n4[0].size;
  return null == t2 && (t2 = e2.minSize), g(t2, a2, i2);
}
function S(e2, a2, i2, n4) {
  const t2 = (e2 - a2.minDataValue) / (a2.maxDataValue - a2.minDataValue), r = g(a2.minSize, i2, n4), s = g(a2.maxSize, i2, n4), l2 = null != n4 ? n4.shape : void 0;
  if (e2 <= a2.minDataValue) return r;
  if (e2 >= a2.maxDataValue) return s;
  if (null == r || null == s) return null;
  if ("area" === a2.scaleBy && l2) {
    const e3 = "circle" === l2, a3 = e3 ? d * (r / 2) ** 2 : r * r, i3 = a3 + t2 * ((e3 ? d * (s / 2) ** 2 : s * s) - a3);
    return e3 ? 2 * Math.sqrt(i3 / d) : Math.sqrt(i3);
  }
  return r + t2 * (s - r);
}
function E(e2, a2, i2, n4) {
  const t2 = null != n4 ? n4.shape : void 0, r = e2 / a2.minDataValue, s = g(a2.minSize, i2, n4), l2 = g(a2.maxSize, i2, n4);
  let o = null;
  return o = "circle" === t2 ? 2 * Math.sqrt(r * (s / 2) ** 2) : "square" === t2 || "diamond" === t2 || "image" === t2 ? Math.sqrt(r * s ** 2) : r * s, w(o, s, l2);
}
function C(e2, a2, i2, n4, t2) {
  var _a, _b, _c;
  const [r, s, l2] = U(e2, t2);
  if (r === s) return g((_a = a2.stops) == null ? void 0 : _a[r].size, i2, n4);
  {
    const e3 = g((_b = a2.stops) == null ? void 0 : _b[r].size, i2, n4);
    return e3 + (g((_c = a2.stops) == null ? void 0 : _c[s].size, i2, n4) - e3) * l2;
  }
}
function D(e2, a2, i2, n4) {
  const r = ((n4 == null ? void 0 : n4.resolution) ?? 1) * m[a2.valueUnit], s = g(a2.minSize, i2, n4), l2 = g(a2.maxSize, i2, n4), { valueRepresentation: o } = a2;
  let c2 = null;
  return c2 = "area" === o ? 2 * Math.sqrt(e2 / d) / r : "radius" === o || "distance" === o ? 2 * e2 / r : e2 / r, w(c2, s, l2);
}
function M(e2) {
  return e2;
}
function k(e2, a2, i2, n4, t2) {
  switch (a2.transformationType) {
    case i.Additive:
      return z(e2, a2, i2, n4);
    case i.Constant:
      return F(a2, i2, n4);
    case i.ClampedLinear:
      return S(e2, a2, i2, n4);
    case i.Proportional:
      return E(e2, a2, i2, n4);
    case i.Stops:
      return C(e2, a2, i2, n4, t2);
    case i.RealWorldSize:
      return D(e2, a2, i2, n4);
    case i.Identity:
      return M(e2);
    case i.Unknown:
      return null;
  }
}
function N(e2, a2, i2) {
  const { isScaleDriven: n4 } = e2.cache;
  if (!(n4 && "3d" === i2 || a2)) return null;
  const t2 = { scale: a2, view: i2 };
  let r = g(e2.minSize, p, t2), s = g(e2.maxSize, p, t2);
  if (null != r || null != s) {
    if (r > s) {
      const e3 = s;
      s = r, r = e3;
    }
    return { minSize: r, maxSize: s };
  }
}
function R(e2, a2, i2) {
  if (!e2.visualVariables) return;
  const n4 = [], t2 = [], r = [], s = [], l2 = [];
  for (const o of e2.visualVariables) switch (o.type) {
    case "color":
      t2.push(o);
      break;
    case "opacity":
      r.push(o);
      break;
    case "rotation":
      l2.push(o);
      break;
    case "size":
      s.push(o);
  }
  return t2.forEach((e3) => {
    const t3 = m2(e3, a2, i2);
    n4.push({ variable: e3, value: t3 });
  }), r.forEach((e3) => {
    const t3 = b2(e3, a2, i2);
    n4.push({ variable: e3, value: t3 });
  }), l2.forEach((e3) => {
    const t3 = h2(e3, a2, i2);
    n4.push({ variable: e3, value: t3 });
  }), s.forEach((e3) => {
    const t3 = y(e3, a2, i2);
    n4.push({ variable: e3, value: t3 });
  }), n4.filter((e3) => null != e3.value);
}
function U(e2, a2) {
  if (!a2) return;
  let i2 = 0, n4 = a2.length - 1;
  return a2.some((a3, t2) => e2 < a3 ? (n4 = t2, true) : (i2 = t2, false)), [i2, n4, (e2 - a2[i2]) / (a2[n4] - a2[i2])];
}
function T(e2, a2, n4) {
  const t2 = ["proportional", "proportional", "proportional"];
  for (const r of e2) {
    const e3 = r.useSymbolValue ? "symbol-value" : y(r, a2, n4);
    switch (r.axis) {
      case "width":
        t2[0] = e3;
        break;
      case "depth":
        t2[1] = e3;
        break;
      case "height":
        t2[2] = e3;
        break;
      case "width-and-depth":
        t2[0] = e3, t2[1] = e3;
        break;
      case "all":
      case void 0:
      case null:
        t2[0] = e3, t2[1] = e3, t2[2] = e3;
        break;
      default:
        n(r.axis);
    }
  }
  return t2;
}

export {
  i,
  e,
  t,
  a,
  v,
  m2 as m,
  b2 as b,
  h2 as h,
  y,
  g,
  k,
  N,
  R,
  T
};
//# sourceMappingURL=chunk-POMCHIIZ.js.map
