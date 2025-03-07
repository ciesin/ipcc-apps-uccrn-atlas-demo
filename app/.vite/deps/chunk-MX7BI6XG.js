import {
  w
} from "./chunk-NENDDUWH.js";
import {
  Q
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/renderers/support/clickToleranceUtils.js
function t(t2, e2) {
  return e2 ? "xoffset" in e2 && e2.xoffset ? Math.max(t2, Math.abs(e2.xoffset)) : "yoffset" in e2 && e2.yoffset ? Math.max(t2, Math.abs(e2.yoffset || 0)) : t2 : t2;
}
function e(t2) {
  let e2 = 0, n2 = 0;
  for (let r3 = 0; r3 < t2.length; r3++) {
    const o2 = t2[r3].size;
    "number" == typeof o2 && (e2 += o2, n2++);
  }
  return e2 / n2;
}
function n(t2, n2) {
  var _a;
  return "number" == typeof t2 ? t2 : ((_a = t2 == null ? void 0 : t2.stops) == null ? void 0 : _a.length) ? e(t2.stops) : n2;
}
function r(t2, e2) {
  if (!e2) return t2;
  const r3 = e2.filter((t3) => "size" === t3.type).map((e3) => {
    const { maxSize: r4, minSize: o3 } = e3;
    return (n(r4, t2) + n(o3, t2)) / 2;
  });
  let o2 = 0;
  const s = r3.length;
  if (0 === s) return t2;
  for (let n2 = 0; n2 < s; n2++) o2 += r3[n2];
  const f = Math.floor(o2 / s);
  return Math.max(f, t2);
}
function o(e2) {
  var _a;
  const n2 = e2 == null ? void 0 : e2.renderer, o2 = e2 == null ? void 0 : e2.pointerType, s = "touch" === o2 ? 9 : 6;
  if (!n2) return s;
  const f = "visualVariables" in n2 ? r(s, n2.visualVariables) : s;
  if ("simple" === n2.type) return t(f, n2.symbol);
  if ("unique-value" === n2.type) {
    let e3 = f;
    return (_a = n2.uniqueValueInfos) == null ? void 0 : _a.forEach((n3) => {
      e3 = t(e3, n3.symbol);
    }), e3;
  }
  if ("class-breaks" === n2.type) {
    let e3 = f;
    return n2.classBreakInfos.forEach((n3) => {
      e3 = t(e3, n3.symbol);
    }), e3;
  }
  return "dot-density" === n2.type || n2.type, f;
}

// node_modules/@arcgis/core/views/support/drapedUtils.js
function r2(n2, r3, i2, a2 = new w()) {
  let s = 0;
  if ("2d" === i2.type) s = r3 * (i2.resolution ?? 0);
  else if ("3d" === i2.type) {
    const t2 = i2.overlayPixelSizeInMapUnits(n2), a3 = i2.basemapSpatialReference;
    s = null == a3 || a3.equals(i2.spatialReference) ? r3 * t2 : Q(a3) / Q(i2.spatialReference);
  }
  const o2 = n2.x - s, l = n2.y - s, c = n2.x + s, m = n2.y + s, { spatialReference: p } = i2;
  return a2.xmin = Math.min(o2, c), a2.ymin = Math.min(l, m), a2.xmax = Math.max(o2, c), a2.ymax = Math.max(l, m), a2.spatialReference = p, a2;
}
function i(e2, t2, i2) {
  const s = i2.toMap(e2);
  if (null == s) return false;
  return r2(s, o(), i2, a).intersects(t2);
}
var a = new w();

export {
  o,
  r2 as r,
  i
};
//# sourceMappingURL=chunk-MX7BI6XG.js.map
