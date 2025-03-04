import {
  i,
  t
} from "./chunk-5LZH2YNQ.js";
import {
  n
} from "./chunk-6P7HXSJ6.js";

// node_modules/@arcgis/core/geometry/support/meshUtils/deduplicate.js
function e(e2, s, u) {
  const c = Array.isArray(e2), a = c ? e2.length / s : e2.byteLength / (4 * s), h = c ? e2 : new Uint32Array(e2, 0, a * s), y = (u == null ? void 0 : u.minReduction) ?? 0, A = (u == null ? void 0 : u.originalIndices) || null, g = A ? A.length : 0, m = (u == null ? void 0 : u.componentOffsets) || null;
  let w = 0;
  if (m) for (let t2 = 0; t2 < m.length - 1; t2++) {
    const n2 = m[t2 + 1] - m[t2];
    n2 > w && (w = n2);
  }
  else w = a;
  const U = Math.floor(1.1 * w) + 1;
  (null == i2 || i2.length < 2 * U) && (i2 = new Uint32Array(n(2 * U)));
  for (let t2 = 0; t2 < 2 * U; t2++) i2[t2] = 0;
  let b = 0;
  const d = !!m && !!A, p = d ? g : a;
  let M = i(a);
  const j = new Uint32Array(g), q = 1.96;
  let I = 0 !== y ? Math.ceil(4 * q * q / (y * y) * y * (1 - y)) : p, k = 1, x = m ? m[1] : p;
  for (let t2 = 0; t2 < p; t2++) {
    if (t2 === I) {
      const n3 = 1 - b / t2;
      if (n3 + q * Math.sqrt(n3 * (1 - n3) / t2) < y) return null;
      I *= 2;
    }
    if (t2 === x) {
      for (let t3 = 0; t3 < 2 * U; t3++) i2[t3] = 0;
      if (A) for (let t3 = m[k - 1]; t3 < m[k]; t3++) j[t3] = M[A[t3]];
      x = m[++k];
    }
    const n2 = d ? A[t2] : t2, r = n2 * s, e3 = f(h, r, s);
    let o2 = e3 % U, u2 = b;
    for (; 0 !== i2[2 * o2 + 1]; ) {
      if (i2[2 * o2] === e3) {
        const t3 = i2[2 * o2 + 1] - 1;
        if (l(h, r, t3 * s, s)) {
          u2 = M[t3];
          break;
        }
      }
      o2++, o2 >= U && (o2 -= U);
    }
    u2 === b && (i2[2 * o2] = e3, i2[2 * o2 + 1] = n2 + 1, b++), M[n2] = u2;
  }
  if (0 !== y && 1 - b / a < y) return null;
  if (d) {
    for (let t2 = m[k - 1]; t2 < j.length; t2++) j[t2] = M[A[t2]];
    M = t(j);
  }
  const C = c ? new Array(b) : new Uint32Array(b * s);
  b = 0;
  for (let t2 = 0; t2 < p; t2++) if (M[t2] === b) {
    o(h, (d ? A[t2] : t2) * s, C, b * s, s), b++;
  }
  if (A && !d) {
    const t2 = new Uint32Array(g);
    for (let n2 = 0; n2 < t2.length; n2++) t2[n2] = M[A[n2]];
    M = t(t2);
  }
  return { buffer: Array.isArray(C) ? C : C.buffer, indices: M, uniqueCount: b };
}
function l(t2, n2, r, e2) {
  for (let l2 = 0; l2 < e2; l2++) if (t2[n2 + l2] !== t2[r + l2]) return false;
  return true;
}
function o(t2, n2, r, e2, l2) {
  for (let o2 = 0; o2 < l2; o2++) r[e2 + o2] = t2[n2 + o2];
}
function f(t2, n2, r) {
  let e2 = 0;
  for (let l2 = 0; l2 < r; l2++) e2 = t2[n2 + l2] + e2 | 0, e2 = e2 + (e2 << 11) + (e2 >>> 2) | 0;
  return e2 >>> 0;
}
var i2 = null;

export {
  e
};
//# sourceMappingURL=chunk-J3KMTGEW.js.map
