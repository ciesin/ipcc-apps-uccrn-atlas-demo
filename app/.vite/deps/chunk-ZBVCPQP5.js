import {
  e as e2
} from "./chunk-ZZ4UNY3F.js";
import {
  e as e3
} from "./chunk-J3KMTGEW.js";
import {
  M,
  O,
  v
} from "./chunk-NVEHOQKI.js";
import {
  t as t2
} from "./chunk-5LZH2YNQ.js";
import {
  o
} from "./chunk-UMYFDXOJ.js";
import {
  a as a2,
  e,
  t
} from "./chunk-XEBZUAYT.js";
import {
  a
} from "./chunk-T57WVICI.js";
import {
  n
} from "./chunk-UCMTPLHQ.js";
import {
  s
} from "./chunk-6P7HXSJ6.js";
import {
  $,
  Q
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/geometry/support/polygonUtils.js
function c(t3, o2, s2) {
  const a4 = e4(f, t3, o2, s2) ? O(f) : [0, 0, 1];
  return Math.abs(a4[2]) > Math.cos(s(80)) ? n.Z : Math.abs(a4[1]) > Math.abs(a4[0]) ? n.Y : n.X;
}
function e4(r, i, a4, n2) {
  const c2 = ((r2) => !Array.isArray(r2[0]))(i) ? (r2, t3) => i[3 * r2 + t3] : (r2, t3) => i[r2][t3], e5 = n2 ? Q(n2) / $(n2) : 1;
  return v(r, (r2, t3) => o(r2, c2(t3, 0) * e5, c2(t3, 1) * e5, c2(t3, 2)), a4);
}
var f = M();

// node_modules/@arcgis/core/geometry/support/triangulationUtils.js
function f2(t3) {
  const e5 = a3(t3.rings, t3.hasZ, p.CCW_IS_HOLE, t3.spatialReference), s2 = new Array();
  let l = 0, f3 = 0;
  for (const r of e5.polygons) {
    const t4 = r.count, c2 = r.index, h2 = a2(e5.position, 3 * c2, 3 * t4), a4 = r.holeIndices.map((n2) => n2 - c2), g3 = t2(e2(h2, a4, 3));
    s2.push({ position: h2, faces: g3 }), l += h2.length, f3 += g3.length;
  }
  const g2 = h(s2, l, f3), u2 = Array.isArray(g2.position) ? e3(g2.position, 3, { originalIndices: g2.faces }) : e3(g2.position.buffer, 6, { originalIndices: g2.faces });
  return g2.position = e(new Float64Array(u2.buffer)), g2.faces = u2.indices, g2;
}
function h(n2, t3, e5) {
  if (1 === n2.length) return n2[0];
  const o2 = t(t3), r = new Array(e5);
  let l = 0, c2 = 0, f3 = 0;
  for (const s2 of n2) {
    for (let n3 = 0; n3 < s2.position.length; n3++) o2[l++] = s2.position[n3];
    for (const n3 of s2.faces) r[c2++] = n3 + f3;
    f3 = l / 3;
  }
  return { position: o2, faces: t2(r) };
}
function a3(n2, t3, e5, o2) {
  const r = n2.length, i = new Array(r), l = new Array(r), c2 = new Array(r);
  let f3 = 0;
  for (let s2 = 0; s2 < r; ++s2) f3 += n2[s2].length;
  let h2 = 0, a4 = 0, m = 0;
  const d = t(3 * f3);
  let y = 0;
  for (let s2 = r - 1; s2 >= 0; s2--) {
    const f4 = n2[s2], A = e5 === p.CCW_IS_HOLE && u(f4, t3, o2);
    if (A && 1 !== r) i[h2++] = f4;
    else {
      let n3 = f4.length;
      for (let t4 = 0; t4 < h2; ++t4) n3 += i[t4].length;
      const e6 = { index: y, pathLengths: new Array(h2 + 1), count: n3, holeIndices: new Array(h2) };
      e6.pathLengths[0] = f4.length, f4.length > 0 && (c2[m++] = { index: y, count: f4.length }), y = A ? g(f4, f4.length - 1, -1, d, y, f4.length, t3) : g(f4, 0, 1, d, y, f4.length, t3);
      for (let o3 = 0; o3 < h2; ++o3) {
        const n4 = i[o3];
        e6.holeIndices[o3] = y, e6.pathLengths[o3 + 1] = n4.length, n4.length > 0 && (c2[m++] = { index: y, count: n4.length }), y = g(n4, 0, 1, d, y, n4.length, t3);
      }
      h2 = 0, e6.count > 0 && (l[a4++] = e6);
    }
  }
  for (let s2 = 0; s2 < h2; ++s2) {
    const n3 = i[s2];
    n3.length > 0 && (c2[m++] = { index: y, count: n3.length }), y = g(n3, 0, 1, d, y, n3.length, t3);
  }
  return l.length = a4, c2.length = m, { position: d, polygons: l, outlines: c2 };
}
function g(n2, t3, e5, o2, r, s2, i) {
  r *= 3;
  for (let l = 0; l < s2; ++l) {
    const s3 = n2[t3];
    o2[r++] = s3[0], o2[r++] = s3[1], o2[r++] = i && s3[2] ? s3[2] : 0, t3 += e5;
  }
  return r / 3;
}
function u(n2, o2, r) {
  if (!o2) return !a(n2);
  const s2 = n2.length - 1;
  switch (c(n2, s2, r)) {
    case n.X:
      return !a(n2, n.Y, n.Z);
    case n.Y:
      return !a(n2, n.X, n.Z);
    case n.Z:
      return !a(n2, n.X, n.Y);
  }
}
var p;
!function(n2) {
  n2[n2.NONE = 0] = "NONE", n2[n2.CCW_IS_HOLE = 1] = "CCW_IS_HOLE";
}(p || (p = {}));

export {
  c,
  f2 as f,
  a3 as a,
  p
};
//# sourceMappingURL=chunk-ZBVCPQP5.js.map
