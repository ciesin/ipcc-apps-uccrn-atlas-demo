import {
  m,
  s2 as s
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/geometry/support/Indices.js
function t(t2) {
  if (Array.isArray(t2)) {
    if (t2.length < m) return t2;
  } else if (t2.length < m) return Array.from(t2);
  let i2 = true, f2 = true;
  return t2.some((r, n) => (i2 = i2 && 0 === r, f2 = f2 && r === n, !i2 && !f2)), i2 ? w(t2.length) : f2 ? o(t2.length) : s(t2) && t2.BYTES_PER_ELEMENT === Uint16Array.BYTES_PER_ELEMENT ? t2 : e(t2);
}
function e(r) {
  let t2 = true;
  for (const e2 of r) {
    if (e2 >= 65536) return s(r) ? r : new Uint32Array(r);
    e2 >= 256 && (t2 = false);
  }
  return t2 ? new Uint8Array(r) : new Uint16Array(r);
}
function i(n) {
  return n <= m ? new Array(n) : n <= 65536 ? new Uint16Array(n) : new Uint32Array(n);
}
function f(n) {
  return n <= m ? new Array(n) : new Uint32Array(n);
}
var a = A(131072);
var u = [0];
var y = (() => {
  const r = new Uint16Array(65536);
  for (let n = 0; n < r.length; ++n) r[n] = n;
  return r;
})();
function o(n) {
  return 1 === n ? u : n < m ? Array.from(new Uint16Array(y.buffer, 0, n)) : n < y.length ? new Uint16Array(y.buffer, 0, n) : (n > a.length && (a = A(Math.max(2 * a.length, n))), new Uint32Array(a.buffer, 0, n));
}
function A(r) {
  const n = new Uint32Array(r);
  for (let t2 = 0; t2 < n.length; t2++) n[t2] = t2;
  return n;
}
var l = new Uint8Array(65536);
function w(n) {
  if (1 === n) return u;
  if (n < m) return new Array(n).fill(0);
  if (n > l.length) {
    const r = Math.max(2 * l.length, n);
    l = new Uint8Array(r);
  }
  return new Uint8Array(l.buffer, 0, n);
}

export {
  t,
  i,
  f,
  o,
  w
};
//# sourceMappingURL=chunk-5LZH2YNQ.js.map
