import {
  e as e2
} from "./chunk-JPJMYA5I.js";
import {
  M,
  c,
  f,
  h,
  i,
  s as s3,
  u as u3
} from "./chunk-CTBXY22F.js";
import {
  n as n2,
  t
} from "./chunk-O2L6JAHP.js";
import {
  B,
  S,
  e,
  j as j2,
  l,
  o,
  q,
  r,
  u as u2,
  v as v2,
  x,
  y
} from "./chunk-K35H6D4D.js";
import {
  P,
  v
} from "./chunk-67XXGAOA.js";
import {
  K,
  L,
  O,
  k
} from "./chunk-4WERUJEK.js";
import {
  m
} from "./chunk-WR4Z7HZ2.js";
import {
  u
} from "./chunk-PUM22WTC.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j,
  n
} from "./chunk-YUVX6H42.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  s
} from "./chunk-6P7HXSJ6.js";
import {
  N,
  Q,
  d,
  s2
} from "./chunk-LTDNORB5.js";
import {
  V
} from "./chunk-AJSC5XSW.js";

// node_modules/@arcgis/core/views/2d/viewpointUtils.js
var O2 = 96;
var Q2 = 39.37;
var T = 180 / Math.PI;
function B2(t2) {
  return t2.wkid ? t2 : t2.spatialReference || g.WGS84;
}
function D(t2, e3) {
  return e3.type ? o(t2, e3.x, e3.y) : r(t2, e3);
}
function W(t2) {
  return Q(t2);
}
function H(t2, e3, n3 = 0) {
  let o2 = t2.width, a = t2.height;
  if (0 !== n3) {
    const e4 = s(n3), i3 = Math.abs(Math.cos(e4)), c3 = Math.abs(Math.sin(e4));
    o2 = t2.width * i3 + t2.height * c3, a = t2.width * c3 + t2.height * i3;
  }
  const i2 = Math.max(1, e3[0]), c2 = Math.max(1, e3[1]);
  return Math.max(o2 / i2, a / c2) * ct(t2.spatialReference);
}
async function J(t2, r2, n3, o2) {
  var _a, _b, _c;
  let a, i2;
  if (!t2) return null;
  if (Array.isArray(t2) && !t2.length) return null;
  if (V.isCollection(t2) && (t2 = t2.toArray()), Array.isArray(t2) && t2.length && "object" == typeof t2[0]) {
    const e3 = t2.every((t3) => "attributes" in t3), a2 = t2.some((t3) => !t3.geometry);
    let i3 = t2;
    if (e3 && a2 && r2 && r2.allLayerViews) {
      const e4 = /* @__PURE__ */ new Map();
      for (const r3 of t2) {
        const t3 = r3.layer, n5 = e4.get(t3) || [], o4 = r3.attributes[t3.objectIdField];
        null != o4 && n5.push(o4), e4.set(t3, n5);
      }
      const n4 = [];
      e4.forEach((t3, e5) => {
        var _a2;
        const o4 = (_a2 = r2.allLayerViews) == null ? void 0 : _a2.find((t4) => t4.layer.id === e5.id);
        if (o4 && "queryFeatures" in o4) {
          const r3 = e5.createQuery();
          r3.objectIds = t3, r3.returnGeometry = true, n4.push(o4.queryFeatures(r3));
        }
      });
      const o3 = await Promise.all(n4), a3 = [];
      for (const t3 of o3) if (t3 && t3.features && t3.features.length) for (const e5 of t3.features) null != e5.geometry && a3.push(e5.geometry);
      i3 = a3;
    }
    for (const t3 of i3) o2 = await J(t3, r2, n3, o2);
    return o2;
  }
  if (Array.isArray(t2) && 2 === t2.length && "number" == typeof t2[0] && "number" == typeof t2[1]) a = new j(t2);
  else if (t2 instanceof n) a = t2;
  else if ("geometry" in t2) {
    if (t2.geometry) a = t2.geometry;
    else if (t2.layer) {
      const e3 = t2.layer, n4 = (_a = r2.allLayerViews) == null ? void 0 : _a.find((t3) => t3.layer.id === e3.id);
      if (n4 && "queryFeatures" in n4) {
        const r3 = e3.createQuery();
        r3.objectIds = [t2.attributes[e3.objectIdField]], r3.returnGeometry = true;
        const o3 = await n4.queryFeatures(r3);
        a = (_c = (_b = o3 == null ? void 0 : o3.features) == null ? void 0 : _b[0]) == null ? void 0 : _c.geometry;
      }
    }
  }
  if (null == a) return null;
  switch (a.type) {
    case "point":
      i2 = new w({ xmin: a.x, ymin: a.y, xmax: a.x, ymax: a.y, spatialReference: a.spatialReference });
      break;
    case "extent":
    case "multipoint":
    case "polygon":
    case "polyline":
      i2 = v(a);
      break;
    default:
      i2 = a.extent;
  }
  if (!i2) return null;
  k() || L(i2.spatialReference, n3) || await K();
  const c2 = O(i2, n3);
  if (!c2) return null;
  if (o2) {
    const t3 = c2.center, e3 = t3.clone();
    e3.x = P(t3.x, o2.center.x, n3), e3.x !== t3.x && c2.centerAt(e3), o2 = o2.union(c2);
  } else o2 = c2;
  return o2;
}
function K2(t2) {
  var _a;
  if (t2 && (!Array.isArray(t2) || "number" != typeof t2[0]) && ("object" == typeof t2 || Array.isArray(t2) && "object" == typeof t2[0])) {
    if ("layer" in t2 && null != ((_a = t2.layer) == null ? void 0 : _a.minScale) && null != t2.layer.maxScale) {
      const e3 = t2.layer;
      return { min: e3.minScale, max: e3.maxScale };
    }
    if (Array.isArray(t2) && t2.length && t2.every((t3) => "layer" in t3)) {
      let e3 = 0, r2 = 0;
      for (const n3 of t2) {
        const t3 = n3.layer;
        (t3 == null ? void 0 : t3.minScale) && t3.maxScale && (e3 = t3.minScale < e3 ? t3.minScale : e3, r2 = t3.maxScale > r2 ? t3.maxScale : r2);
      }
      return e3 && r2 ? { min: e3, max: r2 } : null;
    }
  }
}
function X(t2, e3) {
  const r2 = B2(t2);
  return s2(r2, e3) || r2.imageCoordinateSystem || e3.imageCoordinateSystem ? t2 : O(t2, e3);
}
async function Y(e3, r2) {
  var _a;
  if (!e3 || !r2) return new m({ targetGeometry: new j(), scale: 0, rotation: 0 });
  let n3 = r2.spatialReference;
  const { constraints: o2, padding: a, viewpoint: i2, size: c2 } = r2, s4 = [a ? c2[0] - a.left - a.right : c2[0], a ? c2[1] - a.top - a.bottom : c2[1]];
  let u4 = null;
  e3 instanceof m ? u4 = e3 : e3.viewpoint ? u4 = e3.viewpoint : e3.target && "esri.Viewpoint" === e3.target.declaredClass && (u4 = e3.target);
  let l2 = null;
  (u4 == null ? void 0 : u4.targetGeometry) ? l2 = u4.targetGeometry : e3 instanceof w ? l2 = e3 : e3 instanceof n ? l2 = await J(e3, r2, n3) : e3 && (l2 = await J(e3.center, r2, n3) || await J(e3.target, r2, n3) || await J(e3, r2, n3)), !l2 && (i2 == null ? void 0 : i2.targetGeometry) ? l2 = i2.targetGeometry : !l2 && r2.extent && (l2 = r2.extent), n3 || (n3 = B2(r2.spatialReference || r2.extent || l2)), k() || s2(l2.spatialReference, n3) || L(l2.spatialReference, n3) || await K();
  const f2 = X(l2, n3), m2 = "center" in f2 ? f2.center : f2;
  false !== r2.pickClosestTarget && "point" === m2.type && "point" === ((_a = i2.targetGeometry) == null ? void 0 : _a.type) && (m2.x = P(m2.x, i2.targetGeometry.x, m2.spatialReference));
  let y2 = 0;
  u4 ? y2 = u4.rotation : e3.hasOwnProperty("rotation") ? y2 = e3.rotation : i2 && (y2 = i2.rotation);
  let p = 0;
  p = null != (u4 == null ? void 0 : u4.targetGeometry) && "point" === u4.targetGeometry.type ? u4.scale : "scale" in e3 && e3.scale ? e3.scale : "zoom" in e3 && -1 !== e3.zoom && o2 && o2.effectiveLODs ? o2.zoomToScale(e3.zoom) : Array.isArray(l2) || "point" === l2.type || "extent" === l2.type && 0 === l2.width && 0 === l2.height ? i2.scale : H(X(l2.extent, n3), s4, y2);
  const g2 = K2(e3.target ?? e3);
  g2 && (g2.min && g2.min < p ? p = g2.min : g2.max && g2.max > p && (p = g2.max));
  let x2 = new m({ targetGeometry: m2, scale: p, rotation: y2 });
  return o2 && (x2 = o2.fit(x2), o2.constrainByGeometry(x2), o2.rotationEnabled || (x2.rotation = i2.rotation)), x2;
}
function Z(t2, e3) {
  const r2 = t2.targetGeometry, n3 = e3.targetGeometry;
  return r2.x = n3.x, r2.y = n3.y, r2.spatialReference = n3.spatialReference, t2.scale = e3.scale, t2.rotation = e3.rotation, t2;
}
function $(t2, e3, r2) {
  return r2 ? o(t2, 0.5 * (e3[0] - r2.right + r2.left), 0.5 * (e3[1] - r2.bottom + r2.top)) : l(t2, e3, 0.5);
}
var _ = function() {
  const t2 = n2();
  return function(e3, r2, n3) {
    const o2 = r2.targetGeometry;
    D(t2, o2);
    const a = 0.5 * ot(r2);
    return e3.xmin = t2[0] - a * n3[0], e3.ymin = t2[1] - a * n3[1], e3.xmax = t2[0] + a * n3[0], e3.ymax = t2[1] + a * n3[1], e3.spatialReference = o2.spatialReference, e3;
  };
}();
function tt(t2, e3, r2, n3, o2) {
  var _a;
  return xt(t2, e3, r2.center), t2.scale = H(r2, n3), (_a = o2 == null ? void 0 : o2.constraints) == null ? void 0 : _a.constrain(t2), t2;
}
function et(t2, e3, r2, n3) {
  return lt(t2, e3, r2, n3), u3(t2, t2);
}
var rt = function() {
  const t2 = n2();
  return function(e3, r2, n3) {
    return B(e3, st(e3, r2), $(t2, r2, n3));
  };
}();
var nt = function() {
  const t2 = e2(), e3 = n2();
  return function(r2, n3, o2, s4) {
    const u4 = ot(n3), l2 = it(n3);
    return o(e3, u4, u4), h(t2, e3), s3(t2, t2, l2), i(t2, t2, rt(e3, o2, s4)), i(t2, t2, [0, s4.top - s4.bottom]), o(r2, t2[4], t2[5]);
  };
}();
function ot(t2) {
  var _a;
  return t2.scale * at((_a = t2.targetGeometry) == null ? void 0 : _a.spatialReference);
}
function at(t2) {
  return N(t2) ? 1 / (W(t2) * Q2 * O2) : 1;
}
function it(t2) {
  return u(t2.rotation) || 0;
}
function ct(t2) {
  return N(t2) ? W(t2) * Q2 * O2 : 1;
}
function st(t2, e3) {
  return l(t2, e3, 0.5);
}
var ut = function() {
  const t2 = n2(), e3 = n2(), r2 = n2();
  return function(n3, o2, a, l2, f2, m2) {
    return x(t2, o2), l(e3, a, 0.5 * m2), o(r2, 1 / l2 * m2, -1 / l2 * m2), f(n3, e3), f2 && s3(n3, n3, f2), c(n3, n3, r2), i(n3, n3, t2), n3;
  };
}();
var lt = function() {
  const t2 = n2();
  return function(e3, r2, n3, o2) {
    const a = ot(r2), i2 = it(r2);
    return D(t2, r2.targetGeometry), ut(e3, t2, n3, a, i2, o2);
  };
}();
var ft = function() {
  const t2 = n2();
  return function(e3, r2, n3, o2) {
    const a = ot(r2);
    return D(t2, r2.targetGeometry), ut(e3, t2, n3, a, 0, o2);
  };
}();
function mt(t2) {
  const e3 = d(t2);
  return e3 ? e3.valid[1] - e3.valid[0] : 0;
}
function yt(t2, e3) {
  return Math.round(mt(t2) / e3);
}
var pt = function() {
  const t2 = n2(), e3 = n2(), r2 = [0, 0, 0];
  return function(n3, o2, a) {
    e(t2, n3, o2), v2(t2, t2), e(e3, n3, a), v2(e3, e3), y(r2, t2, e3);
    let i2 = Math.acos(j2(t2, e3) / (q(t2) * q(e3))) * T;
    return r2[2] < 0 && (i2 = -i2), isNaN(i2) && (i2 = 0), i2;
  };
}();
var gt = function() {
  const t2 = n2();
  return function(e3, r2, n3, o2) {
    const a = e3.targetGeometry;
    return Z(e3, r2), nt(t2, r2, n3, o2), a.x += t2[0], a.y += t2[1], e3;
  };
}();
var xt = function(t2, e3, r2) {
  Z(t2, e3);
  const n3 = t2.targetGeometry;
  return n3.x = r2.x, n3.y = r2.y, n3.spatialReference = r2.spatialReference, t2;
};
var ht = function() {
  const t2 = n2();
  return function(e3, r2, n3, o2, a) {
    a || (a = "center"), B(t2, n3, o2), l(t2, t2, 0.5);
    const i2 = t2[0], c2 = t2[1];
    switch (a) {
      case "center":
        o(t2, 0, 0);
        break;
      case "left":
        o(t2, -i2, 0);
        break;
      case "top":
        o(t2, 0, c2);
        break;
      case "right":
        o(t2, i2, 0);
        break;
      case "bottom":
        o(t2, 0, -c2);
        break;
      case "top-left":
        o(t2, -i2, c2);
        break;
      case "bottom-left":
        o(t2, -i2, -c2);
        break;
      case "top-right":
        o(t2, i2, c2);
        break;
      case "bottom-right":
        o(t2, i2, -c2);
    }
    return kt(e3, r2, t2), e3;
  };
}();
function bt(t2, e3, r2) {
  return Z(t2, e3), t2.rotation += r2, t2;
}
function wt(t2, e3, r2) {
  return Z(t2, e3), t2.rotation = r2, t2;
}
var dt = function() {
  const t2 = n2();
  return function(e3, r2, n3, o2, a) {
    return Z(e3, r2), isNaN(n3) || 0 === n3 || (At(t2, o2, r2, a), e3.scale = r2.scale * n3, St(t2, t2, e3, a), kt(e3, e3, o(t2, t2[0] - o2[0], o2[1] - t2[1]))), e3;
  };
}();
function jt(t2, e3, r2) {
  return Z(t2, e3), t2.scale = r2, t2;
}
var Gt = function() {
  const t2 = n2();
  return function(e3, r2, n3, o2, a, i2) {
    return Z(e3, r2), isNaN(n3) || 0 === n3 || (At(t2, a, r2, i2), e3.scale = r2.scale * n3, e3.rotation += o2, St(t2, t2, e3, i2), kt(e3, e3, o(t2, t2[0] - a[0], a[1] - t2[1]))), e3;
  };
}();
var Rt = function() {
  const t2 = n2(), e3 = n2();
  return function(r2, n3, o2, a, i2, c2, s4) {
    return rt(e3, c2, s4), u2(t2, i2, e3), a ? Gt(r2, n3, o2, a, t2, c2) : dt(r2, n3, o2, t2, c2);
  };
}();
var At = function() {
  const t2 = e2();
  return function(e3, r2, n3, o2) {
    return S(e3, r2, et(t2, n3, o2, 1));
  };
}();
var St = function() {
  const t2 = e2();
  return function(e3, r2, n3, o2) {
    return S(e3, r2, lt(t2, n3, o2, 1));
  };
}();
var kt = function() {
  const t2 = n2(), e3 = e2();
  return function(r2, n3, o2) {
    Z(r2, n3);
    const a = ot(n3), i2 = r2.targetGeometry;
    return M(e3, it(n3)), c(e3, e3, t(a, a)), S(t2, o2, e3), i2.x += t2[0], i2.y += t2[1], r2;
  };
}();

export {
  H,
  Y,
  Z,
  $,
  _,
  tt,
  rt,
  ot,
  at,
  ut,
  lt,
  ft,
  mt,
  yt,
  pt,
  gt,
  xt,
  ht,
  bt,
  wt,
  jt,
  Gt,
  Rt,
  kt
};
//# sourceMappingURL=chunk-NDCL5BI2.js.map
