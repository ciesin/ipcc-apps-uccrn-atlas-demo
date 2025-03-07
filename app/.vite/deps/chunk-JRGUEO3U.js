import {
  e
} from "./chunk-T57WVICI.js";
import {
  x
} from "./chunk-W633AKTD.js";
import {
  u
} from "./chunk-G34KEQQG.js";
import {
  M
} from "./chunk-6P7HXSJ6.js";

// node_modules/@arcgis/core/views/draw/support/drawUtils.js
function r(t, n, e2, r2) {
  if (null == r2 || t.hasZ || (r2 = void 0), "point" === t.type) return t.x += n, t.y += e2, t.hasZ && null != r2 && (t.z += r2), t;
  if ("multipoint" === t.type) {
    const o = t.points;
    for (let t2 = 0; t2 < o.length; t2++) o[t2] = l(o[t2], n, e2, r2);
    return t;
  }
  if ("extent" === t.type) return t.xmin += n, t.xmax += n, t.ymin += e2, t.ymax += e2, null != r2 && (t.zmin ?? (t.zmin = 0), t.zmin += r2, t.zmax ?? (t.zmax = 0), t.zmax += r2), t;
  const i2 = e(t), s2 = "polyline" === t.type ? t.paths : t.rings;
  for (let o = 0; o < i2.length; o++) {
    const t2 = i2[o];
    for (let o2 = 0; o2 < t2.length; o2++) t2[o2] = l(t2[o2], n, e2, r2);
  }
  return "paths" in t ? t.paths = s2 : t.rings = s2, t;
}
function i(t, n, e2, i2, s2) {
  const a2 = t.clone(), m2 = i2.resolution;
  if ("point" === a2.type) {
    if (s2) r(a2, n * m2, -e2 * m2);
    else {
      const t2 = i2.state.transform, o = i2.state.inverseTransform, r2 = t2[0] * a2.x + t2[2] * a2.y + t2[4], s3 = t2[1] * a2.x + t2[3] * a2.y + t2[5];
      a2.x = o[0] * (r2 + n) + o[2] * (s3 + e2) + o[4], a2.y = o[1] * (r2 + n) + o[3] * (s3 + e2) + o[5];
    }
    return a2;
  }
  if ("multipoint" === a2.type) {
    if (s2) r(a2, n * m2, -e2 * m2);
    else {
      const t2 = a2.points, o = i2.state.transform, r2 = i2.state.inverseTransform;
      for (let i3 = 0; i3 < t2.length; i3++) {
        const s3 = t2[i3], a3 = o[0] * s3[0] + o[2] * s3[1] + o[4], m3 = o[1] * s3[0] + o[3] * s3[1] + o[5], l2 = r2[0] * (a3 + n) + r2[2] * (m3 + e2) + r2[4], p = r2[1] * (a3 + n) + r2[3] * (m3 + e2) + r2[5];
        t2[i3] = x2(s3, l2, p, void 0);
      }
    }
    return a2;
  }
  if ("extent" === a2.type) {
    if (s2) r(a2, n * m2, -e2 * m2);
    else {
      const t2 = i2.state.transform, o = i2.state.inverseTransform, r2 = t2[0] * a2.xmin + t2[2] * a2.ymin + t2[4], s3 = t2[1] * a2.xmin + t2[3] * a2.ymin + t2[5], m3 = t2[0] * a2.xmax + t2[2] * a2.ymax + t2[4], l2 = t2[1] * a2.xmax + t2[3] * a2.ymax + t2[5];
      a2.xmin = o[0] * (r2 + n) + o[2] * (s3 + e2) + o[4], a2.ymin = o[1] * (r2 + n) + o[3] * (s3 + e2) + o[5], a2.xmax = o[0] * (m3 + n) + o[2] * (l2 + e2) + o[4], a2.ymax = o[1] * (m3 + n) + o[3] * (l2 + e2) + o[5];
    }
    return a2;
  }
  if (s2) r(a2, n * m2, -e2 * m2);
  else {
    const t2 = e(a2), r2 = "polyline" === a2.type ? a2.paths : a2.rings, s3 = i2.state.transform, m3 = i2.state.inverseTransform;
    for (let o = 0; o < t2.length; o++) {
      const r3 = t2[o];
      for (let t3 = 0; t3 < r3.length; t3++) {
        const o2 = r3[t3], i3 = s3[0] * o2[0] + s3[2] * o2[1] + s3[4], a3 = s3[1] * o2[0] + s3[3] * o2[1] + s3[5], l2 = m3[0] * (i3 + n) + m3[2] * (a3 + e2) + m3[4], p = m3[1] * (i3 + n) + m3[3] * (a3 + e2) + m3[5];
        r3[t3] = x2(o2, l2, p, void 0);
      }
    }
    "paths" in a2 ? a2.paths = r2 : a2.rings = r2;
  }
  return a2;
}
function s(t, r2, i2, s2) {
  if ("point" === t.type) {
    const { x: n, y: e2 } = t, o = s2 ? s2[0] : n, a3 = s2 ? s2[1] : e2, m3 = t.clone(), l3 = (n - o) * r2 + o, x3 = (e2 - a3) * i2 + a3;
    return m3.x = l3, m3.y = x3, m3;
  }
  if ("multipoint" === t.type) {
    const a3 = e(t), m3 = u(), [l3, p2, y2, f2] = x(m3, [a3]), u3 = s2 ? s2[0] : (l3 + y2) / 2, c2 = s2 ? s2[1] : (f2 + p2) / 2, h2 = t.clone(), g2 = h2.points;
    for (let t2 = 0; t2 < g2.length; t2++) {
      const n = g2[t2], [e2, o] = n, s3 = (e2 - u3) * r2 + u3, a4 = (o - c2) * i2 + c2;
      g2[t2] = x2(n, s3, a4, void 0);
    }
    return h2;
  }
  if ("extent" === t.type) {
    const { xmin: n, xmax: e2, ymin: o, ymax: a3 } = t, m3 = s2 ? s2[0] : (n + e2) / 2, l3 = s2 ? s2[1] : (a3 + o) / 2, x3 = t.clone();
    if (x3.xmin = (n - m3) * r2 + m3, x3.ymax = (a3 - l3) * i2 + l3, x3.xmax = (e2 - m3) * r2 + m3, x3.ymin = (o - l3) * i2 + l3, x3.xmin > x3.xmax) {
      const t2 = x3.xmin, n2 = x3.xmax;
      x3.xmin = n2, x3.xmax = t2;
    }
    if (x3.ymin > x3.ymax) {
      const t2 = x3.ymin, n2 = x3.ymax;
      x3.ymin = n2, x3.ymax = t2;
    }
    return x3;
  }
  const a2 = e(t), m2 = u(), [l2, p, y, f] = x(m2, a2), u2 = s2 ? s2[0] : (l2 + y) / 2, c = s2 ? s2[1] : (f + p) / 2, h = t.clone(), g = "polyline" === h.type ? h.paths : h.rings;
  for (let n = 0; n < a2.length; n++) {
    const t2 = a2[n];
    for (let e2 = 0; e2 < t2.length; e2++) {
      const o = t2[e2], [s3, a3] = o, m3 = (s3 - u2) * r2 + u2, l3 = (a3 - c) * i2 + c;
      g[n][e2] = x2(o, m3, l3, void 0);
    }
  }
  return "paths" in h ? h.paths = g : h.rings = g, h;
}
function a(t, n, e2, o, r2, i2) {
  const s2 = Math.sqrt((e2 - t) * (e2 - t) + (o - n) * (o - n));
  return Math.sqrt((r2 - t) * (r2 - t) + (i2 - n) * (i2 - n)) / s2;
}
function m(n, e2, o, r2 = false) {
  const i2 = Math.atan2(e2.y - o.y, e2.x - o.x) - Math.atan2(n.y - o.y, n.x - o.x), s2 = Math.atan2(Math.sin(i2), Math.cos(i2));
  return r2 ? s2 : M(s2);
}
function l(t, n, e2, o) {
  return x2(t, t[0] + n, t[1] + e2, null != t[2] && null != o ? t[2] + o : void 0);
}
function x2(t, n, e2, o) {
  const r2 = [n, e2];
  return t.length > 2 && r2.push(null != o ? o : t[2]), t.length > 3 && r2.push(t[3]), r2;
}

export {
  i,
  s,
  a,
  m
};
//# sourceMappingURL=chunk-JRGUEO3U.js.map
