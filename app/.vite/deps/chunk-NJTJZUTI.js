import {
  d,
  i,
  t
} from "./chunk-WJGG35K6.js";
import {
  j
} from "./chunk-T7KGE6VP.js";
import {
  P as P2
} from "./chunk-W633AKTD.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  O2 as O,
  P2 as P,
  x
} from "./chunk-LTDNORB5.js";
import {
  h
} from "./chunk-4LTV6KQ5.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/geometry/support/geodesicUtils.js
function u(e) {
  if (!e) return null;
  const t2 = e.wkid;
  if (t2) return d[t2];
  const n = e.wkt2 ?? e.wkt;
  return n ? m(n) : null;
}
function m(e) {
  const t2 = t.exec(e);
  if (!t2 || 2 !== t2.length) return null;
  const n = t2[1].split(",");
  if (!n || n.length < 3) return null;
  const s3 = parseFloat(n[1]), i2 = parseFloat(n[2]);
  if (isNaN(s3) || isNaN(i2)) return null;
  return { a: s3, f: 0 === i2 ? 0 : 1 / i2 };
}
function d2(e) {
  const t2 = u(e);
  if (g2(t2)) return t2;
  const n = t2.a * (1 - t2.f);
  return Object.assign(t2, { b: n, eSq: 1 - (n / t2.a) ** 2, radius: (2 * t2.a + n) / 3, densificationRatio: 1e4 / ((2 * t2.a + n) / 3) });
}
function g2(e) {
  return null != e && "b" in e && "eSq" in e && "radius" in e;
}
function w(e, t2, n) {
  const { a: s3, eSq: i2 } = d2(n), r = Math.sqrt(i2), a = Math.sin(t2[1] * i), c = s3 * t2[0] * i;
  let h2;
  if (i2 > 0) {
    h2 = s3 * ((1 - i2) * (a / (1 - i2 * (a * a)) - 1 / (2 * r) * Math.log((1 - r * a) / (1 + r * a)))) * 0.5;
  } else h2 = s3 * a;
  return e[0] = c, e[1] = h2, e;
}
function y(e) {
  return P(e) && !!u(e);
}
function v(n, s3 = "square-meters") {
  if (n.some((e) => !y(e.spatialReference))) throw new s("geodesic-areas:invalid-spatial-reference", "the input geometries spatial reference is not supported");
  const i2 = [];
  for (let e = 0; e < n.length; e++) {
    const t2 = n[e], s4 = t2.spatialReference, { radius: r2, densificationRatio: a2 } = d2(s4), o2 = r2 * a2;
    i2.push(z(t2, o2));
  }
  const r = [], a = [0, 0], o = [0, 0];
  for (let e = 0; e < i2.length; e++) {
    const { rings: n2, spatialReference: c } = i2[e];
    let h2 = 0;
    for (let e2 = 0; e2 < n2.length; e2++) {
      const t2 = n2[e2];
      w(a, t2[0], c), w(o, t2[t2.length - 1], c);
      let s4 = o[0] * a[1] - a[0] * o[1];
      for (let e3 = 0; e3 < t2.length - 1; e3++) w(a, t2[e3 + 1], c), w(o, t2[e3], c), s4 += o[0] * a[1] - a[0] * o[1];
      h2 += s4;
    }
    h2 = x(h2, "square-meters", s3), r.push(h2 / -2);
  }
  return r;
}
function R(n, s3 = "meters") {
  if (!n) throw new s("geodesic-lengths:invalid-geometries", "the input geometries type is not supported");
  if (n.some((e) => !y(e.spatialReference))) throw new s("geodesic-lengths:invalid-spatial-reference", "the input geometries spatial reference is not supported");
  const i2 = [];
  for (let e = 0; e < n.length; e++) {
    const r = n[e], { spatialReference: a } = r, o = "polyline" === r.type ? r.paths : r.rings;
    let c = 0;
    for (let e2 = 0; e2 < o.length; e2++) {
      const t2 = o[e2];
      let n2 = 0;
      for (let e3 = 1; e3 < t2.length; e3++) {
        const s4 = t2[e3 - 1][0], i3 = t2[e3][0], r2 = t2[e3 - 1][1], o2 = t2[e3][1];
        if (r2 !== o2 || s4 !== i3) {
          const e4 = new b();
          q(e4, [s4, r2], [i3, o2], a), n2 += e4.distance;
        }
      }
      c += n2;
    }
    c = x(c, "meters", s3), i2.push(c);
  }
  return i2;
}
function z(t2, s3) {
  if ("polyline" !== t2.type && "polygon" !== t2.type) throw new s("geodesic-densify:invalid-geometry", "the input geometry is neither polyline nor polygon");
  const { spatialReference: o } = t2;
  if (!y(o)) throw new s("geodesic-densify:invalid-spatial-reference", "the input geometry spatial reference is not supported");
  const c = "polyline" === t2.type ? t2.paths : t2.rings, h2 = [], l = [0, 0], p = new b();
  for (const e of c) {
    const t3 = [];
    h2.push(t3), t3.push([e[0][0], e[0][1]]);
    let n, i2, r = e[0][0], a = e[0][1];
    for (let c2 = 0; c2 < e.length - 1; c2++) {
      if (n = e[c2 + 1][0], i2 = e[c2 + 1][1], r === n && a === i2) continue;
      const h3 = [r, a];
      q(p, [r, a], [n, i2], o);
      const { azimuth: f2, distance: u2 } = p, m2 = u2 / s3;
      if (m2 > 1) {
        for (let e2 = 1; e2 <= m2 - 1; e2++) {
          j3(l, h3, f2, e2 * s3, o), t3.push(l.slice());
        }
        j3(l, h3, f2, (u2 + Math.floor(m2 - 1) * s3) / 2, o), t3.push(l.slice());
      }
      j3(l, h3, f2, u2, o), t3.push(l.slice()), r = l[0], a = l[1];
    }
  }
  const f = h(g, o);
  return "polyline" === t2.type ? new P2({ paths: h2, spatialReference: f }) : new j({ rings: h2, spatialReference: f });
}
var b = class {
  constructor(e = 0, t2 = void 0, n = void 0) {
    this.distance = e, this.azimuth = t2, this.reverseAzimuth = n;
  }
};
function j3(e, t2, n, s3, i2) {
  const r = t2[0], a = t2[1], c = r * i, h2 = a * i, l = (n ?? 0) * i, { a: p, b: f, f: u2 } = d2(i2), m2 = Math.sin(l), g3 = Math.cos(l), M = (1 - u2) * Math.tan(h2), w2 = 1 / Math.sqrt(1 + M * M), y2 = M * w2, v2 = Math.atan2(M, g3), R2 = w2 * m2, z2 = R2 * R2, b2 = 1 - z2, j4 = b2 * (p * p - f * f) / (f * f), q2 = 1 + j4 / 16384 * (4096 + j4 * (j4 * (320 - 175 * j4) - 768)), x2 = j4 / 1024 * (256 + j4 * (j4 * (74 - 47 * j4) - 128));
  let A, N2, S, P3 = s3 / (f * q2), k = 2 * Math.PI;
  for (; Math.abs(P3 - k) > 1e-12; ) {
    S = Math.cos(2 * v2 + P3), A = Math.sin(P3), N2 = Math.cos(P3);
    k = P3, P3 = s3 / (f * q2) + x2 * A * (S + x2 / 4 * (N2 * (2 * S * S - 1) - x2 / 6 * S * (4 * A * A - 3) * (4 * S * S - 3)));
  }
  const F = y2 * A - w2 * N2 * g3, U = Math.atan2(y2 * N2 + w2 * A * g3, (1 - u2) * Math.sqrt(z2 + F * F)), C = u2 / 16 * b2 * (4 + u2 * (4 - 3 * b2)), E = Math.atan2(A * m2, w2 * N2 - y2 * A * g3) - (1 - C) * u2 * R2 * (P3 + C * A * (S + C * N2 * (2 * S * S - 1)));
  return e[0] = (c + E) / i, e[1] = U / i, e;
}
function q(e, t2, n, s3) {
  const i2 = t2[0] * i, r = t2[1] * i, a = n[0] * i, c = n[1] * i, { a: h2, b: l, f: p, radius: f } = d2(s3), u2 = a - i2, m2 = Math.atan((1 - p) * Math.tan(r)), g3 = Math.atan((1 - p) * Math.tan(c)), M = Math.sin(m2), w2 = Math.cos(m2), y2 = Math.sin(g3), v2 = Math.cos(g3);
  let R2, z2, b2, j4, q2, x2, A, N2, S, P3, k = 1e3, F = u2;
  do {
    if (A = Math.sin(F), N2 = Math.cos(F), b2 = Math.sqrt(v2 * A * (v2 * A) + (w2 * y2 - M * v2 * N2) * (w2 * y2 - M * v2 * N2)), 0 === b2) return e.distance = 0, e.azimuth = void 0, e.reverseAzimuth = void 0, e;
    q2 = M * y2 + w2 * v2 * N2, x2 = Math.atan2(b2, q2), S = w2 * v2 * A / b2, z2 = 1 - S * S, j4 = q2 - 2 * M * y2 / z2, isNaN(j4) && (j4 = 0), P3 = p / 16 * z2 * (4 + p * (4 - 3 * z2)), R2 = F, F = u2 + (1 - P3) * p * S * (x2 + P3 * b2 * (j4 + P3 * q2 * (2 * j4 * j4 - 1)));
  } while (Math.abs(F - R2) > 1e-12 && --k > 0);
  if (0 === k) {
    const t3 = f, n2 = Math.acos(Math.sin(r) * Math.sin(c) + Math.cos(r) * Math.cos(c) * Math.cos(a - i2)) * t3, s4 = a - i2, h3 = Math.sin(s4) * Math.cos(c), l2 = Math.cos(r) * Math.sin(c) - Math.sin(r) * Math.cos(c) * Math.cos(s4), p2 = Math.atan2(h3, l2);
    return e.azimuth = p2 / i, e.distance = n2, e.reverseAzimuth = void 0, e;
  }
  const U = z2 * (h2 * h2 - l * l) / (l * l), C = U / 1024 * (256 + U * (U * (74 - 47 * U) - 128)), E = l * (1 + U / 16384 * (4096 + U * (U * (320 - 175 * U) - 768))) * (x2 - C * b2 * (j4 + C / 4 * (q2 * (2 * j4 * j4 - 1) - C / 6 * j4 * (4 * b2 * b2 - 3) * (4 * j4 * j4 - 3)))), G = Math.atan2(v2 * Math.sin(F), w2 * y2 - M * v2 * Math.cos(F)), I = Math.atan2(w2 * Math.sin(F), w2 * y2 * Math.cos(F) - M * v2);
  return e.azimuth = G / i, e.distance = E, e.reverseAzimuth = I / i, e;
}
function N(e) {
  return y(e) ? e : O(e) ? g.WGS84 : null;
}

export {
  y,
  v,
  R,
  b,
  j3 as j,
  q,
  N
};
//# sourceMappingURL=chunk-NJTJZUTI.js.map
