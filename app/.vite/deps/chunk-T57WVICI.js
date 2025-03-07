import {
  n
} from "./chunk-UCMTPLHQ.js";
import {
  d
} from "./chunk-LTDNORB5.js";
import {
  s
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/geometry/support/coordsUtils.js
function e(t) {
  if (!t) return null;
  if (Array.isArray(t)) return t;
  const n2 = t.hasZ, r = t.hasM;
  if ("point" === t.type) return r && n2 ? [t.x, t.y, t.z, t.m] : n2 ? [t.x, t.y, t.z] : r ? [t.x, t.y, t.m] : [t.x, t.y];
  if ("polygon" === t.type) return t.rings.slice();
  if ("polyline" === t.type) return t.paths.slice();
  if ("multipoint" === t.type) return t.points.slice();
  if ("extent" === t.type) {
    const n3 = t.clone().normalize();
    if (!n3) return null;
    let r2 = false, e2 = false;
    return n3.forEach((t2) => {
      t2.hasZ && (r2 = true), t2.hasM && (e2 = true);
    }), n3.map((t2) => {
      const n4 = [[t2.xmin, t2.ymin], [t2.xmin, t2.ymax], [t2.xmax, t2.ymax], [t2.xmax, t2.ymin], [t2.xmin, t2.ymin]];
      if (r2 && t2.hasZ) {
        const r3 = 0.5 * (t2.zmax - t2.zmin);
        for (let t3 = 0; t3 < n4.length; t3++) n4[t3].push(r3);
      }
      if (e2 && t2.hasM) {
        const r3 = 0.5 * (t2.mmax - t2.mmin);
        for (let t3 = 0; t3 < n4.length; t3++) n4[t3].push(r3);
      }
      return n4;
    });
  }
  return null;
}
function i(t, n2) {
  const r = n2[0] - t[0], e2 = n2[1] - t[1];
  if (t.length > 2 && n2.length > 2) {
    const i2 = t[2] - n2[2];
    return Math.sqrt(r * r + e2 * e2 + i2 * i2);
  }
  return Math.sqrt(r * r + e2 * e2);
}
function o(t, n2, r) {
  const e2 = t[0] + r * (n2[0] - t[0]), i2 = t[1] + r * (n2[1] - t[1]);
  return t.length > 2 && n2.length > 2 ? [e2, i2, t[2] + r * (n2[2] - t[2])] : [e2, i2];
}
function s2(t, n2, r, e2) {
  return f(t, n2, r[e2], r[e2 + 1]);
}
function f(t, n2, r, e2) {
  const [i2, o2] = n2, [s3, f2] = r, [u, l2] = e2, c2 = u - s3, h2 = l2 - f2, p2 = c2 * c2 + h2 * h2, a2 = (i2 - s3) * c2 + (o2 - f2) * h2, y2 = Math.min(1, Math.max(0, a2 / p2));
  return t[0] = s3 + c2 * y2, t[1] = f2 + h2 * y2, t;
}
function l(t, n2, r, e2, i2, o2) {
  let s3 = r, f2 = e2, u = i2 - s3, l2 = o2 - f2;
  if (0 !== u || 0 !== l2) {
    const r2 = ((t - s3) * u + (n2 - f2) * l2) / (u * u + l2 * l2);
    r2 > 1 ? (s3 = i2, f2 = o2) : r2 > 0 && (s3 += u * r2, f2 += l2 * r2);
  }
  return u = t - s3, l2 = n2 - f2, u * u + l2 * l2;
}
function c(t, n2) {
  return o(t, n2, 0.5);
}
function h(t) {
  const n2 = t.length;
  let r = 0;
  for (let e2 = 0; e2 < n2 - 1; ++e2) r += i(t[e2], t[e2 + 1]);
  return r;
}
function p(t, n2) {
  if (n2 <= 0) return t[0];
  const r = t.length;
  let e2 = 0;
  for (let s3 = 0; s3 < r - 1; ++s3) {
    const r2 = i(t[s3], t[s3 + 1]);
    if (n2 - e2 < r2) {
      const i2 = (n2 - e2) / r2;
      return o(t[s3], t[s3 + 1], i2);
    }
    e2 += r2;
  }
  return t[r - 1];
}
function a(t, r = n.X, e2 = n.Y) {
  let i2 = 0;
  const o2 = t.length;
  let s3 = t[0];
  for (let n2 = 1; n2 < o2; n2++) {
    const o3 = t[n2];
    i2 += (o3[r] - s3[r]) * (o3[e2] + s3[e2]), s3 = o3;
  }
  if (!y(t)) {
    const n2 = t[0];
    i2 += (n2[r] - s3[r]) * (n2[e2] + s3[e2]);
  }
  return i2 >= 0;
}
function y(n2) {
  const r = n2.length;
  return r < 3 || s(n2[0], n2[r - 1]);
}
function m(t) {
  "rings" in t && (g(t), x(t));
}
function g(t) {
  if (!("rings" in t)) return false;
  let n2 = false;
  for (const r of t.rings) y(r) || (r.push(r[0].slice()), n2 = true);
  return n2;
}
function x(t) {
  if (!("rings" in t)) return false;
  if (0 === t.rings.length || a(t.rings[0])) return false;
  for (const n2 of t.rings) n2.reverse();
  return true;
}
function M(t) {
  if ("polygon" !== t.type && "polyline" !== t.type) return t;
  return z("polygon" === t.type ? t.rings : t.paths, t.spatialReference), t;
}
function z(t, n2) {
  const e2 = d(n2);
  if (!e2) return;
  const i2 = e2.valid[0], o2 = e2.valid[1], s3 = o2 - i2;
  for (const r of t) {
    let t2 = 1 / 0, n3 = -1 / 0;
    for (const s4 of r) {
      const r2 = v(s4[0], i2, o2);
      t2 = Math.min(t2, r2), n3 = Math.max(n3, r2), s4[0] = r2;
    }
    const e3 = n3 - t2;
    s3 - e3 < e3 && r.forEach((t3) => {
      t3[0] < 0 && (t3[0] += s3);
    });
  }
}
function v(t, n2, r) {
  const e2 = r - n2;
  return t < n2 ? r - (n2 - t) % e2 : t > r ? n2 + (t - n2) % e2 : t;
}
function j(t, n2) {
  if (t === n2) return true;
  if (t.type !== n2.type) return false;
  if ("point" === t.type || "mesh" === t.type || "extent" === t.type) return true;
  if ("multipoint" === t.type) return t.points.length === n2.points.length;
  const [r, e2] = "polyline" === t.type ? [t.paths, n2.paths] : [t.rings, n2.rings];
  return r.length === e2.length && r.every((t2, n3) => t2.length === e2[n3].length);
}

export {
  e,
  i,
  s2 as s,
  f,
  l,
  c,
  h,
  p,
  a,
  m,
  g,
  M,
  z,
  j
};
//# sourceMappingURL=chunk-T57WVICI.js.map
