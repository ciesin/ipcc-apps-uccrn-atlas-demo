import {
  t
} from "./chunk-UQQJEYZO.js";
import {
  o
} from "./chunk-LZUCOHH2.js";
import {
  Di,
  ti
} from "./chunk-ANT4QPJQ.js";
import {
  m
} from "./chunk-WZBMMIVS.js";

// node_modules/@arcgis/core/symbols/cim/SDFHelper.js
var e = 0.45;
function a(t2, o2 = 0.5) {
  var _a;
  switch (t2.type) {
    case "CIMPointSymbol": {
      const o3 = t2.symbolLayers;
      if (!o3 || 1 !== o3.length) return null;
      const n = o3[0];
      return "CIMVectorMarker" !== n.type ? null : a(n);
    }
    case "CIMVectorMarker": {
      const n = t2.markerGraphics;
      if (!n || 1 !== n.length) return null;
      const r = n[0];
      if (!r) return null;
      const i = r.geometry;
      if (!i) return null;
      const e2 = r.symbol;
      return !e2 || "CIMPolygonSymbol" !== e2.type && "CIMLineSymbol" !== e2.type || ((_a = e2.symbolLayers) == null ? void 0 : _a.some((t3) => !!t3.effects)) ? null : { type: "sdf", geom: i, sdfPaddingRatio: o2, asFill: "CIMPolygonSymbol" === e2.type };
    }
  }
}
function l(t2) {
  return t2 ? t2.rings ? t2.rings : t2.paths ? t2.paths : void 0 !== t2.xmin && void 0 !== t2.ymin && void 0 !== t2.xmax && void 0 !== t2.ymax ? [[[t2.xmin, t2.ymin], [t2.xmin, t2.ymax], [t2.xmax, t2.ymax], [t2.xmax, t2.ymin], [t2.xmin, t2.ymin]]] : null : null;
}
function s(t2) {
  let o2 = 1 / 0, r = -1 / 0, i = 1 / 0, e2 = -1 / 0;
  for (const n of t2) for (const t3 of n) t3[0] < o2 && (o2 = t3[0]), t3[0] > r && (r = t3[0]), t3[1] < i && (i = t3[1]), t3[1] > e2 && (e2 = t3[1]);
  return new t(o2, i, r - o2, e2 - i);
}
function f(t2) {
  let o2 = 1 / 0, n = -1 / 0, r = 1 / 0, i = -1 / 0;
  for (const e2 of t2) for (const t3 of e2) t3[0] < o2 && (o2 = t3[0]), t3[0] > n && (n = t3[0]), t3[1] < r && (r = t3[1]), t3[1] > i && (i = t3[1]);
  return [o2, r, n, i];
}
function m2(t2) {
  return t2 ? t2.rings ? f(t2.rings) : t2.paths ? f(t2.paths) : m(t2) ? [t2.xmin, t2.ymin, t2.xmax, t2.ymax] : null : null;
}
function c(t2, o2) {
  const [n, e2, a2, l2] = m2(t2), s2 = a2 - n, f2 = l2 - e2, c2 = Di, h2 = ti, u2 = Math.floor(0.5 * (c2 * o2 - h2)), y2 = (c2 - 2 * (u2 + h2)) / Math.max(s2, f2), d2 = Math.round(s2 * y2), x2 = Math.round(f2 * y2);
  return { pixelDimensions: [s2, f2], texelDimensions: [Math.round((d2 + 2 * u2) / y2), Math.round((x2 + 2 * u2) / y2)] };
}
function h(t2, o2, n, a2, l2, s2, f2) {
  const [m3, c2, h2, u2] = t2;
  if (h2 < m3 || u2 < c2) return { frameSizeRatio: 0, anchorX: 0, anchorY: 0, widthRatio: 1, sdfPaddingRatio: 0.5 };
  const y2 = h2 - m3, d2 = u2 - c2, x2 = Math.max(y2, d2);
  let M = 0.5;
  if (null != s2 && null != n) {
    if (!f2 && null != o2) {
      s2 *= (o2.ymax - o2.ymin) / n;
    }
    const t3 = s2 / (s2 + x2), r = 0.1;
    t3 > e && t3 < 1 && (M = Math.min(t3 + r, 0.99));
  }
  const g = Di, p = ti, R = Math.floor(0.5 * (g * M - p)), w = (g - 2 * (R + p)) / x2, P = Math.round(y2 * w) + 2 * R, b = Math.round(d2 * w) + 2 * R;
  let C = 1;
  if (o2) {
    C = b * (1 - M) / ((o2.ymax - o2.ymin) * w);
  }
  let I = 0, S = 0, j = 1;
  a2 && (l2 ? o2 && n && o2.ymax - o2.ymin > 0 && (j = (o2.xmax - o2.xmin) / (o2.ymax - o2.ymin), I = a2.x / (n * j), S = a2.y / n) : (I = a2.x, S = a2.y)), o2 && (I = 0.5 * (o2.xmax + o2.xmin) + I * (o2.xmax - o2.xmin), S = 0.5 * (o2.ymax + o2.ymin) + S * (o2.ymax - o2.ymin)), I -= m3, S -= c2, I *= w, S *= w, I += R, S += R;
  let v = I / P - 0.5, F = S / b - 0.5;
  return l2 && n && (v *= n * j, F *= n), { frameSizeRatio: C, anchorX: v, anchorY: F, widthRatio: j, sdfPaddingRatio: M };
}
function u(t2) {
  const o2 = l(t2.geom), n = s(o2), e2 = Di, a2 = ti, f2 = Math.floor(0.5 * (e2 * t2.sdfPaddingRatio - a2)), m3 = e2 - 2 * (f2 + a2), c2 = m3 / Math.max(n.width, n.height), h2 = Math.round(n.width * c2) + 2 * f2, u2 = Math.round(n.height * c2) + 2 * f2, M = [];
  for (const r of o2) if (r && r.length > 1) {
    const o3 = [];
    for (const i of r) {
      let [r2, e3] = i;
      r2 -= n.x, e3 -= n.y, r2 *= c2, e3 *= c2, r2 += f2 - 0.5, e3 += f2 - 0.5, t2.asFill ? o3.push([r2, e3]) : o3.push([Math.round(r2), Math.round(e3)]);
    }
    if (t2.asFill) {
      const t3 = o3.length - 1;
      o3[0][0] === o3[t3][0] && o3[0][1] === o3[t3][1] || o3.push(o3[0]);
    }
    M.push(o3);
  }
  const g = y(M, h2, u2, f2);
  return t2.asFill && d(M, h2, u2, f2, g), { data: x(g, f2), width: h2, height: u2, sdfPaddingRatio: t2.sdfPaddingRatio, sdfDecodeCoeff: 2 * f2 / m3 };
}
function y(t2, o2, n, r) {
  const i = o2 * n, e2 = new Array(i), a2 = r * r + 1;
  for (let l2 = 0; l2 < i; ++l2) e2[l2] = a2;
  for (const l2 of t2) {
    const t3 = l2.length;
    for (let i2 = 1; i2 < t3; ++i2) {
      const t4 = l2[i2 - 1], a3 = l2[i2];
      let s2, f2, m3, c2;
      t4[0] < a3[0] ? (s2 = t4[0], f2 = a3[0]) : (s2 = a3[0], f2 = t4[0]), t4[1] < a3[1] ? (m3 = t4[1], c2 = a3[1]) : (m3 = a3[1], c2 = t4[1]);
      let h2 = Math.floor(s2) - r, u2 = Math.floor(f2) + r, y2 = Math.floor(m3) - r, d2 = Math.floor(c2) + r;
      h2 < 0 && (h2 = 0), u2 > o2 && (u2 = o2), y2 < 0 && (y2 = 0), d2 > n && (d2 = n);
      const x2 = a3[0] - t4[0], M = a3[1] - t4[1], g = x2 * x2 + M * M;
      for (let r2 = h2; r2 < u2; r2++) for (let i3 = y2; i3 < d2; i3++) {
        const l3 = r2 + 0.5, s3 = i3 + 0.5;
        let f3, m4, c3 = (l3 - t4[0]) * x2 + (s3 - t4[1]) * M;
        c3 < 0 ? (f3 = t4[0], m4 = t4[1]) : c3 > g ? (f3 = a3[0], m4 = a3[1]) : (c3 /= g, f3 = t4[0] + c3 * x2, m4 = t4[1] + c3 * M);
        const h3 = (l3 - f3) * (l3 - f3) + (s3 - m4) * (s3 - m4), u3 = (n - i3 - 1) * o2 + r2;
        h3 < e2[u3] && (e2[u3] = h3);
      }
    }
  }
  for (let l2 = 0; l2 < i; ++l2) e2[l2] = Math.sqrt(e2[l2]);
  return e2;
}
function d(t2, o2, n, r, i) {
  for (const e2 of t2) {
    const t3 = e2.length;
    for (let a2 = 1; a2 < t3; ++a2) {
      const t4 = e2[a2 - 1], l2 = e2[a2];
      let s2, f2, m3, c2;
      t4[0] < l2[0] ? (s2 = t4[0], f2 = l2[0]) : (s2 = l2[0], f2 = t4[0]), t4[1] < l2[1] ? (m3 = t4[1], c2 = l2[1]) : (m3 = l2[1], c2 = t4[1]);
      let h2 = Math.floor(s2), u2 = Math.floor(f2) + 1, y2 = Math.floor(m3), d2 = Math.floor(c2) + 1;
      h2 < r && (h2 = r), u2 > o2 - r && (u2 = o2 - r), y2 < r && (y2 = r), d2 > n - r && (d2 = n - r);
      for (let e3 = y2; e3 < d2; ++e3) {
        if (t4[1] > e3 == l2[1] > e3) continue;
        const a3 = e3 + 0.5, s3 = (n - e3 - 1) * o2;
        for (let o3 = h2; o3 < u2; ++o3) {
          o3 + 0.5 < (l2[0] - t4[0]) * (a3 - t4[1]) / (l2[1] - t4[1]) + t4[0] && (i[s3 + o3] = -i[s3 + o3]);
        }
        for (let t5 = r; t5 < h2; ++t5) i[s3 + t5] = -i[s3 + t5];
      }
    }
  }
}
function x(o2, n) {
  const r = 2 * n, i = o2.length, e2 = new Uint8Array(4 * i);
  for (let a2 = 0; a2 < i; ++a2) {
    const n2 = 0.5 - o2[a2] / r;
    o(n2, e2, 4 * a2);
  }
  return e2;
}

export {
  a,
  m2 as m,
  c,
  h,
  u
};
//# sourceMappingURL=chunk-GQZVNUA4.js.map
