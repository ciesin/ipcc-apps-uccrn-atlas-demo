import {
  a as a4,
  r as r2
} from "./chunk-HDT7YPJI.js";
import {
  B,
  C as C2,
  D,
  E as E2,
  F,
  H,
  K,
  L,
  e as e5,
  e2 as e6,
  o,
  q,
  r as r3
} from "./chunk-LTF4JXOW.js";
import {
  o as o2,
  s2 as s6
} from "./chunk-PMUCRJCT.js";
import {
  A as A2,
  O,
  Z,
  a as a2,
  g,
  i2 as i4,
  s as s3,
  s2 as s5
} from "./chunk-UQQJEYZO.js";
import {
  e as e4
} from "./chunk-VCN3W5DR.js";
import {
  a as a5,
  c,
  i as i5
} from "./chunk-Z2VK6GWV.js";
import {
  e as e3,
  i as i2,
  l
} from "./chunk-N7QOB7T5.js";
import {
  e
} from "./chunk-J7454WTE.js";
import {
  n as n3
} from "./chunk-AI444EOP.js";
import {
  a as a3,
  i as i3,
  s as s4
} from "./chunk-CTBXY22F.js";
import {
  A,
  Bi,
  G as G2,
  R,
  a,
  ci,
  si,
  ti,
  zi
} from "./chunk-ANT4QPJQ.js";
import {
  C
} from "./chunk-CRKFUUKK.js";
import {
  S
} from "./chunk-K35H6D4D.js";
import {
  E
} from "./chunk-BTTTF5H4.js";
import {
  G,
  e as e2,
  i,
  n as n2,
  ne,
  w
} from "./chunk-ZH6PYRVF.js";
import {
  t
} from "./chunk-T7KGE6VP.js";
import {
  h
} from "./chunk-3UHB6K6P.js";
import {
  u
} from "./chunk-JLFV7EBO.js";
import {
  r,
  s as s2
} from "./chunk-6P7HXSJ6.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/mesh/bufcut.js
function e7(e12, t4, r8, i14, u7, o10, l9) {
  D2 = 0;
  const y3 = (i14 - r8) * o10, p7 = u7 && u7.length, c9 = p7 ? (u7[0] - r8) * o10 : y3;
  let v3, s14, h9, d6, Z3, a11 = n4(t4, r8, i14, 0, c9, o10, true);
  if (a11 && a11.next !== a11.prev) {
    if (p7 && (a11 = f(t4, r8, i14, u7, a11, o10)), y3 > 80 * o10) {
      v3 = h9 = t4[0 + r8 * o10], s14 = d6 = t4[1 + r8 * o10];
      for (let e13 = o10; e13 < c9; e13 += o10) {
        const n12 = t4[e13 + r8 * o10], x6 = t4[e13 + 1 + r8 * o10];
        v3 = Math.min(v3, n12), s14 = Math.min(s14, x6), h9 = Math.max(h9, n12), d6 = Math.max(d6, x6);
      }
      Z3 = Math.max(h9 - v3, d6 - s14), Z3 = 0 !== Z3 ? 1 / Z3 : 0;
    }
    x(a11, e12, o10, v3, s14, Z3, l9, 0);
  }
}
function n4(e12, n12, t4, x6, r8, i14, l9) {
  let f6;
  if (l9 === Z2(e12, n12, t4, x6, r8, i14) > 0) for (let o10 = x6; o10 < r8; o10 += i14) f6 = u2(o10 + n12 * i14, e12[o10 + n12 * i14], e12[o10 + 1 + n12 * i14], f6);
  else for (let o10 = r8 - i14; o10 >= x6; o10 -= i14) f6 = u2(o10 + n12 * i14, e12[o10 + n12 * i14], e12[o10 + 1 + n12 * i14], f6);
  return f6 && m(f6, f6.next) && (o3(f6), f6 = f6.next), f6;
}
function t2(e12, n12 = e12) {
  if (!e12) return e12;
  let t4, x6 = e12;
  do {
    if (t4 = false, x6.steiner || !m(x6, x6.next) && 0 !== s7(x6.prev, x6, x6.next)) x6 = x6.next;
    else {
      if (o3(x6), x6 = n12 = x6.prev, x6 === x6.next) break;
      t4 = true;
    }
  } while (t4 || x6 !== n12);
  return n12;
}
function x(e12, n12, u7, l9, f6, y3, p7, v3) {
  if (!e12) return;
  !v3 && y3 && (e12 = c2(e12, l9, f6, y3));
  let s14 = e12;
  for (; e12.prev !== e12.next; ) {
    const c9 = e12.prev, h9 = e12.next;
    if (y3 ? i6(e12, l9, f6, y3) : r4(e12)) n12.push(c9.index / u7 + p7), n12.push(e12.index / u7 + p7), n12.push(h9.index / u7 + p7), o3(e12), e12 = h9.next, s14 = h9.next;
    else if ((e12 = h9) === s14) {
      v3 ? 1 === v3 ? x(e12 = b(e12, n12, u7, p7), n12, u7, l9, f6, y3, p7, 2) : 2 === v3 && g2(e12, n12, u7, l9, f6, y3, p7) : x(t2(e12), n12, u7, l9, f6, y3, p7, 1);
      break;
    }
  }
}
function r4(e12) {
  const n12 = e12.prev, t4 = e12, x6 = e12.next;
  if (s7(n12, t4, x6) >= 0) return false;
  let r8 = e12.next.next;
  const i14 = r8;
  let u7 = 0;
  for (; r8 !== e12.prev && (0 === u7 || r8 !== i14); ) {
    if (u7++, a6(n12.x, n12.y, t4.x, t4.y, x6.x, x6.y, r8.x, r8.y) && s7(r8.prev, r8, r8.next) >= 0) return false;
    r8 = r8.next;
  }
  return true;
}
function i6(e12, n12, t4, x6) {
  const r8 = e12.prev, i14 = e12, u7 = e12.next;
  if (s7(r8, i14, u7) >= 0) return false;
  const o10 = r8.x < i14.x ? r8.x < u7.x ? r8.x : u7.x : i14.x < u7.x ? i14.x : u7.x, l9 = r8.y < i14.y ? r8.y < u7.y ? r8.y : u7.y : i14.y < u7.y ? i14.y : u7.y, f6 = r8.x > i14.x ? r8.x > u7.x ? r8.x : u7.x : i14.x > u7.x ? i14.x : u7.x, y3 = r8.y > i14.y ? r8.y > u7.y ? r8.y : u7.y : i14.y > u7.y ? i14.y : u7.y, p7 = z(o10, l9, n12, t4, x6), c9 = z(f6, y3, n12, t4, x6);
  let v3 = e12.prevZ, h9 = e12.nextZ;
  for (; v3 && v3.z >= p7 && h9 && h9.z <= c9; ) {
    if (v3 !== e12.prev && v3 !== e12.next && a6(r8.x, r8.y, i14.x, i14.y, u7.x, u7.y, v3.x, v3.y) && s7(v3.prev, v3, v3.next) >= 0) return false;
    if (v3 = v3.prevZ, h9 !== e12.prev && h9 !== e12.next && a6(r8.x, r8.y, i14.x, i14.y, u7.x, u7.y, h9.x, h9.y) && s7(h9.prev, h9, h9.next) >= 0) return false;
    h9 = h9.nextZ;
  }
  for (; v3 && v3.z >= p7; ) {
    if (v3 !== e12.prev && v3 !== e12.next && a6(r8.x, r8.y, i14.x, i14.y, u7.x, u7.y, v3.x, v3.y) && s7(v3.prev, v3, v3.next) >= 0) return false;
    v3 = v3.prevZ;
  }
  for (; h9 && h9.z <= c9; ) {
    if (h9 !== e12.prev && h9 !== e12.next && a6(r8.x, r8.y, i14.x, i14.y, u7.x, u7.y, h9.x, h9.y) && s7(h9.prev, h9, h9.next) >= 0) return false;
    h9 = h9.nextZ;
  }
  return true;
}
function u2(e12, n12, t4, x6) {
  const r8 = q2.create(e12, n12, t4);
  return x6 ? (r8.next = x6.next, r8.prev = x6, x6.next.prev = r8, x6.next = r8) : (r8.prev = r8, r8.next = r8), r8;
}
function o3(e12) {
  e12.next.prev = e12.prev, e12.prev.next = e12.next, e12.prevZ && (e12.prevZ.nextZ = e12.nextZ), e12.nextZ && (e12.nextZ.prevZ = e12.prevZ);
}
function l2(e12) {
  let n12 = e12, t4 = e12;
  do {
    (n12.x < t4.x || n12.x === t4.x && n12.y < t4.y) && (t4 = n12), n12 = n12.next;
  } while (n12 !== e12);
  return t4;
}
function f(e12, t4, x6, r8, i14, u7) {
  const o10 = new Array();
  for (let f6 = 0, y3 = r8.length; f6 < y3; f6++) {
    const i15 = n4(e12, t4, x6, r8[f6] * u7, f6 < y3 - 1 ? r8[f6 + 1] * u7 : x6 * u7, u7, false);
    i15 === i15.next && (i15.steiner = true), o10.push(l2(i15));
  }
  o10.sort(M);
  for (const n12 of o10) i14 = y(n12, i14);
  return i14;
}
function y(e12, n12) {
  const x6 = p(e12, n12);
  if (!x6) return n12;
  const r8 = A3(x6, e12);
  return t2(r8, r8.next), t2(x6, x6.next);
}
function p(e12, n12) {
  let t4 = n12;
  const x6 = e12.x, r8 = e12.y;
  let i14, u7 = -1 / 0;
  do {
    if (r8 <= t4.y && r8 >= t4.next.y && t4.next.y !== t4.y) {
      const e13 = t4.x + (r8 - t4.y) * (t4.next.x - t4.x) / (t4.next.y - t4.y);
      if (e13 <= x6 && e13 > u7) {
        if (u7 = e13, e13 === x6) {
          if (r8 === t4.y) return t4;
          if (r8 === t4.next.y) return t4.next;
        }
        i14 = t4.x < t4.next.x ? t4 : t4.next;
      }
    }
    t4 = t4.next;
  } while (t4 !== n12);
  if (!i14) return null;
  if (x6 === u7) return i14.prev;
  const o10 = i14, l9 = i14.x, f6 = i14.y;
  let y3, p7 = 1 / 0;
  for (t4 = i14.next; t4 !== o10; ) x6 >= t4.x && t4.x >= l9 && x6 !== t4.x && a6(r8 < f6 ? x6 : u7, r8, l9, f6, r8 < f6 ? u7 : x6, r8, t4.x, t4.y) && (y3 = Math.abs(r8 - t4.y) / (x6 - t4.x), (y3 < p7 || y3 === p7 && t4.x > i14.x) && w2(t4, e12) && (i14 = t4, p7 = y3)), t4 = t4.next;
  return i14;
}
function c2(e12, n12, t4, x6) {
  let r8;
  for (; r8 !== e12; r8 = r8.next) {
    if (r8 = r8 || e12, null === r8.z && (r8.z = z(r8.x, r8.y, n12, t4, x6)), r8.prev.next !== r8 || r8.next.prev !== r8) return r8.prev.next = r8, r8.next.prev = r8, c2(e12, n12, t4, x6);
    r8.prevZ = r8.prev, r8.nextZ = r8.next;
  }
  return e12.prevZ.nextZ = null, e12.prevZ = null, v(e12);
}
function v(e12) {
  let n12, t4 = 1;
  for (; ; ) {
    let x6, r8 = e12;
    e12 = null, n12 = null;
    let i14 = 0;
    for (; r8; ) {
      i14++, x6 = r8;
      let u7 = 0;
      for (; u7 < t4 && x6; u7++) x6 = x6.nextZ;
      let o10 = t4;
      for (; u7 > 0 || o10 > 0 && x6; ) {
        let t5;
        0 === u7 ? (t5 = x6, x6 = x6.nextZ, o10--) : 0 !== o10 && x6 ? r8.z <= x6.z ? (t5 = r8, r8 = r8.nextZ, u7--) : (t5 = x6, x6 = x6.nextZ, o10--) : (t5 = r8, r8 = r8.nextZ, u7--), n12 ? n12.nextZ = t5 : e12 = t5, t5.prevZ = n12, n12 = t5;
      }
      r8 = x6;
    }
    if (n12.nextZ = null, t4 *= 2, i14 < 2) return e12;
  }
}
function s7(e12, n12, t4) {
  return (n12.y - e12.y) * (t4.x - n12.x) - (n12.x - e12.x) * (t4.y - n12.y);
}
function h2(e12, n12, t4, x6) {
  return !!(m(e12, n12) && m(t4, x6) || m(e12, x6) && m(t4, n12)) || s7(e12, n12, t4) > 0 != s7(e12, n12, x6) > 0 && s7(t4, x6, e12) > 0 != s7(t4, x6, n12) > 0;
}
function d(e12, n12) {
  let t4 = e12;
  do {
    if (t4.index !== e12.index && t4.next.index !== e12.index && t4.index !== n12.index && t4.next.index !== n12.index && h2(t4, t4.next, e12, n12)) return true;
    t4 = t4.next;
  } while (t4 !== e12);
  return false;
}
function Z2(e12, n12, t4, x6, r8, i14) {
  let u7 = 0;
  for (let o10 = x6, l9 = r8 - i14; o10 < r8; o10 += i14) u7 += (e12[l9 + n12 * i14] - e12[o10 + n12 * i14]) * (e12[o10 + 1 + n12 * i14] + e12[l9 + 1 + n12 * i14]), l9 = o10;
  return u7;
}
function a6(e12, n12, t4, x6, r8, i14, u7, o10) {
  return (r8 - u7) * (n12 - o10) - (e12 - u7) * (i14 - o10) >= 0 && (e12 - u7) * (x6 - o10) - (t4 - u7) * (n12 - o10) >= 0 && (t4 - u7) * (i14 - o10) - (r8 - u7) * (x6 - o10) >= 0;
}
function w2(e12, n12) {
  return s7(e12.prev, e12, e12.next) < 0 ? s7(e12, n12, e12.next) >= 0 && s7(e12, e12.prev, n12) >= 0 : s7(e12, n12, e12.prev) < 0 || s7(e12, e12.next, n12) < 0;
}
function z(e12, n12, t4, x6, r8) {
  return (e12 = 1431655765 & ((e12 = 858993459 & ((e12 = 252645135 & ((e12 = 16711935 & ((e12 = 32767 * (e12 - t4) * r8) | e12 << 8)) | e12 << 4)) | e12 << 2)) | e12 << 1)) | (n12 = 1431655765 & ((n12 = 858993459 & ((n12 = 252645135 & ((n12 = 16711935 & ((n12 = 32767 * (n12 - x6) * r8) | n12 << 8)) | n12 << 4)) | n12 << 2)) | n12 << 1)) << 1;
}
function m(e12, n12) {
  return e12.x === n12.x && e12.y === n12.y;
}
function M(e12, n12) {
  return e12.x - n12.x;
}
function b(e12, n12, t4, x6) {
  let r8 = e12;
  do {
    const i14 = r8.prev, u7 = r8.next.next;
    !m(i14, u7) && h2(i14, r8, r8.next, u7) && w2(i14, u7) && w2(u7, i14) && (n12.push(i14.index / t4 + x6), n12.push(r8.index / t4 + x6), n12.push(u7.index / t4 + x6), o3(r8), o3(r8.next), r8 = e12 = u7), r8 = r8.next;
  } while (r8 !== e12);
  return r8;
}
function g2(e12, n12, r8, i14, u7, o10, l9) {
  let f6 = e12;
  do {
    let e13 = f6.next.next;
    for (; e13 !== f6.prev; ) {
      if (f6.index !== e13.index && k(f6, e13)) {
        let y3 = A3(f6, e13);
        return f6 = t2(f6, f6.next), y3 = t2(y3, y3.next), x(f6, n12, r8, i14, u7, o10, l9, 0), void x(y3, n12, r8, i14, u7, o10, l9, 0);
      }
      e13 = e13.next;
    }
    f6 = f6.next;
  } while (f6 !== e12);
}
function k(e12, n12) {
  return e12.next.index !== n12.index && e12.prev.index !== n12.index && !d(e12, n12) && w2(e12, n12) && w2(n12, e12) && j(e12, n12);
}
function j(e12, n12) {
  let t4 = e12, x6 = false;
  const r8 = (e12.x + n12.x) / 2, i14 = (e12.y + n12.y) / 2;
  do {
    t4.y > i14 != t4.next.y > i14 && t4.next.y !== t4.y && r8 < (t4.next.x - t4.x) * (i14 - t4.y) / (t4.next.y - t4.y) + t4.x && (x6 = !x6), t4 = t4.next;
  } while (t4 !== e12);
  return x6;
}
function A3(e12, n12) {
  const t4 = q2.create(e12.index, e12.x, e12.y), x6 = q2.create(n12.index, n12.x, n12.y), r8 = e12.next, i14 = n12.prev;
  return e12.next = n12, n12.prev = e12, t4.next = r8, r8.prev = t4, x6.next = t4, t4.prev = x6, i14.next = x6, x6.prev = i14, x6;
}
var q2 = class _q {
  constructor() {
    this.index = 0, this.x = 0, this.y = 0, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = false;
  }
  static create(e12, n12, t4) {
    const x6 = D2 < B2.length ? B2[D2++] : new _q();
    return x6.index = e12, x6.x = n12, x6.y = t4, x6.prev = null, x6.next = null, x6.z = null, x6.prevZ = null, x6.nextZ = null, x6.steiner = false, x6;
  }
};
var B2 = [];
var C3 = 8096;
var D2 = 0;
for (let E4 = 0; E4 < C3; E4++) B2.push(new q2());

// node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/templateUtils.js
var i7 = 1e-5;
var f2 = new e3(0, 0, 0, 1, 0);
var c3 = new e3(0, 0, 0, 1, 0);
function u3(t4, e12, n12) {
  let o10 = 0;
  for (let r8 = 1; r8 < n12; r8++) {
    const n13 = t4[2 * (e12 + r8 - 1)], s14 = t4[2 * (e12 + r8 - 1) + 1];
    o10 += (t4[2 * (e12 + r8)] - n13) * (t4[2 * (e12 + r8) + 1] + s14);
  }
  return o10;
}
function h3(t4, e12, n12, o10, r8) {
  let s14 = 0;
  const l9 = 2;
  for (let i14 = n12; i14 < o10; i14 += 3) {
    const n13 = (t4[i14] - r8) * l9, o11 = (t4[i14 + 1] - r8) * l9, f6 = (t4[i14 + 2] - r8) * l9;
    s14 += Math.abs((e12[n13] - e12[f6]) * (e12[o11 + 1] - e12[n13 + 1]) - (e12[n13] - e12[o11]) * (e12[f6 + 1] - e12[n13 + 1]));
  }
  return s14;
}
function a7(t4, e12) {
  const { coords: n12, lengths: o10 } = e12, r8 = 0, s14 = t4;
  let f6 = 0;
  for (let c9 = 0; c9 < o10.length; ) {
    let t5 = c9, e13 = o10[c9], a11 = u3(n12, f6, e13);
    const g5 = [];
    for (; ++t5 < o10.length; ) {
      const r9 = o10[t5], s15 = u3(n12, f6 + e13, r9);
      if (!(s15 > 0)) break;
      a11 += s15, g5.push(f6 + e13), e13 += r9;
    }
    const p7 = s14.length;
    e7(s14, n12, f6, f6 + e13, g5, 2, r8);
    const m7 = h3(s14, n12, p7, s14.length, r8), x6 = Math.abs(a11);
    if (Math.abs((m7 - x6) / Math.max(1e-7, x6)) > i7) return s14.length = 0, false;
    c9 = t5, f6 += e13;
  }
  return true;
}
function p2(t4) {
  const { coords: n12, lengths: o10 } = t4, { buffer: r8 } = a5(n12, o10);
  return r8;
}
function m2(t4, e12, n12) {
  let o10 = 0;
  for (let r8 = 0; r8 < t4.lengths.length; r8++) {
    const s14 = t4.lengths[r8];
    for (let r9 = 0; r9 < s14; r9++) {
      const s15 = t4.coords[2 * (r9 + o10)], l9 = t4.coords[2 * (r9 + o10) + 1];
      if (s15 < e12 || s15 > n12 || l9 < e12 || l9 > n12) return true;
    }
    o10 += s14;
  }
  return false;
}
function x2(t4, e12) {
  if (null == t4) return null;
  if (!m2(t4, -128, a + 128)) return t4;
  f2.setPixelMargin(e12), f2.reset(i2.Polygon);
  let n12 = 0;
  for (let o10 = 0; o10 < t4.lengths.length; o10++) {
    const e13 = t4.lengths[o10];
    let r8 = t4.coords[2 * (0 + n12)], s14 = t4.coords[2 * (0 + n12) + 1];
    f2.moveTo(r8, s14);
    for (let o11 = 1; o11 < e13; o11++) r8 = t4.coords[2 * (o11 + n12)], s14 = t4.coords[2 * (o11 + n12) + 1], f2.lineTo(r8, s14);
    f2.close(), n12 += e13;
  }
  const l9 = f2.result(false);
  if (!l9) return null;
  const i14 = [], c9 = [];
  for (const o10 of l9) {
    let t5 = 0;
    for (const e13 of o10) c9.push(e13.x), c9.push(e13.y), t5++;
    i14.push(t5);
  }
  return new e(i14, c9);
}
function d2(t4, e12) {
  c3.setPixelMargin(e12);
  const n12 = c3, r8 = -e12, l9 = a + e12;
  let i14 = [], f6 = false;
  if (!t4.nextPath()) return null;
  let u7 = t4.pathLength(), h9 = true;
  for (; h9; ) {
    t4.seekPathStart();
    const e13 = [];
    if (!t4.pathSize) return null;
    n12.reset(i2.LineString), t4.nextPoint();
    let s14 = t4.x, c9 = t4.y;
    if (f6) n12.moveTo(s14, c9);
    else {
      if (s14 < r8 || s14 > l9 || c9 < r8 || c9 > l9) {
        f6 = true;
        continue;
      }
      e13.push({ x: s14, y: c9 });
    }
    let a11 = false;
    for (; t4.nextPoint(); ) if (s14 = t4.x, c9 = t4.y, f6) n12.lineTo(s14, c9);
    else {
      if (s14 < r8 || s14 > l9 || c9 < r8 || c9 > l9) {
        a11 = true;
        break;
      }
      e13.push({ x: s14, y: c9 });
    }
    if (a11) f6 = true;
    else {
      if (f6) {
        const t5 = n12.resultWithStarts();
        if (t5) for (const e14 of t5) i14.push({ ...e14, pathLength: u7 });
      } else i14.push({ line: e13, start: 0, pathLength: u7 });
      h9 = t4.nextPath(), u7 = h9 ? t4.pathLength() : 0, f6 = false;
    }
  }
  return i14 = i14.filter((t5) => t5.line.length > 1), 0 === i14.length ? null : i14;
}
f2.setExtent(a), c3.setExtent(a);

// node_modules/@arcgis/core/symbols/cim/effects/CIMEffectHelper.js
var n5 = 96 / 72;
var l3 = class {
  static executeEffects(t4, e12, l9, c9, f6) {
    const m7 = n5, p7 = Z(t4);
    let u7 = new s3(e12);
    for (const o10 of t4) {
      const t5 = A2(o10);
      t5 && (u7 = t5.execute(u7, o10, m7, l9, c9, p7, f6));
    }
    return u7;
  }
  static applyEffects(n12, l9, c9) {
    if (!n12) return l9;
    const f6 = Z(n12);
    let m7, p7 = new s3(a2.fromJSONCIM(l9));
    for (const t4 of n12) {
      const e12 = A2(t4);
      e12 && (p7 = e12.execute(p7, t4, 1, null, c9, f6, false));
    }
    const u7 = [];
    let i14 = null;
    for (; m7 = p7.next(); ) u7.push(...t(m7)), i14 = m7.geometryType;
    return 0 === u7.length || null === i14 ? null : "esriGeometryPolygon" === i14 ? { rings: u7 } : { paths: u7 };
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/loadGeometryEngine.js
var n6 = null;
function t3() {
  return n6;
}
async function e9() {
  n6 = await import("./geometryEngineJSON-LBL23444.js");
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/AlignedVertexSpec.js
function e10(t4) {
  switch (t4) {
    case C.BYTE:
    case C.UNSIGNED_BYTE:
      return 1;
    case C.SHORT:
    case C.UNSIGNED_SHORT:
    case C.HALF_FLOAT:
      return 2;
    case C.FLOAT:
    case C.INT:
    case C.UNSIGNED_INT:
      return 4;
  }
}
function o4(t4) {
  const s14 = [], o10 = [], n12 = [];
  for (const i14 of t4) {
    const t5 = e10(i14.type) * i14.count;
    switch (t5 % 2 || t5 % 4 || 4) {
      case 4:
        s14.push(i14);
        continue;
      case 2:
        o10.push(i14);
        continue;
      case 1:
        n12.push(i14);
        continue;
      default:
        throw new Error("Found unexpected dataType byte count");
    }
  }
  return s14.push(...o10), s14.push(...n12), s14;
}
var n7 = class _n {
  static fromVertexSpec(t4, s14) {
    const { attributes: i14, optionalAttributes: a11 } = t4;
    let r8, c9, u7;
    const p7 = [];
    for (const e12 in i14) {
      const t5 = i14[e12];
      "position" === t5.pack ? r8 = { ...t5, name: e12, offset: 0 } : "id" === t5.pack ? c9 = { ...t5, name: e12, offset: 4 } : "bitset" === e12 ? u7 = { ...t5, name: e12, offset: 7 } : p7.push({ ...t5, name: e12 });
    }
    for (const e12 in a11) if (true === s14[e12]) {
      const t5 = a11[e12];
      p7.push({ ...t5, name: e12 });
    }
    const h9 = o4(p7), f6 = [];
    let m7 = 8, b4 = 1;
    for (const o10 of h9) f6.push({ ...o10, offset: m7 }), m7 += e10(o10.type) * o10.count, o10.packAlternating && (b4 = Math.max(o10.packAlternating.count, b4));
    const d6 = Uint32Array.BYTES_PER_ELEMENT, _4 = m7 % d6;
    return new _n(r8, c9, u7, f6, m7 + (_4 ? d6 - _4 : 0), b4);
  }
  constructor(t4, s14, e12, o10, n12, i14) {
    this.position = t4, this.id = s14, this.bitset = e12, this.standardAttributes = o10, this.stride = n12, this.packVertexCount = i14, o10.push(e12), this._attributes = [t4, s14, e12, ...o10];
  }
  get attributeLayout() {
    if (!this._attributeLayout) {
      const s14 = r2(this._attributes), e12 = this._attributes.map((t4) => ({ name: t4.name, count: t4.count, offset: t4.offset, type: t4.type, packPrecisionFactor: t4.packPrecisionFactor, normalized: t4.normalized ?? false }));
      this._attributeLayout = { attributes: e12, hash: s14, stride: this.stride };
    }
    return this._attributeLayout;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/MeshWriterVertexPack.js
var i8 = class _i {
  static fromVertexSpec(t4, s14) {
    const c9 = n7.fromVertexSpec(t4, s14);
    return new _i(c9);
  }
  constructor(t4) {
    this._spec = t4, this._packed = new Uint8Array(this._spec.stride * this._spec.packVertexCount), this._packedU32View = new Uint32Array(this._packed.buffer), this._dataView = new DataView(this._packed.buffer);
  }
  get attributeLayout() {
    return this._spec.attributeLayout;
  }
  get stride() {
    return this._spec.stride;
  }
  writeVertex(t4, e12, s14, i14, c9, a11) {
    var _a;
    for (let p7 = 0; p7 < this._spec.packVertexCount; p7++) {
      const t5 = p7 * this._spec.stride;
      this._packPosition(s14, i14, t5), this._packId(e12, t5);
      const r8 = this._spec.bitset;
      if (a11) {
        if (r8.packTessellation) {
          const e13 = r8.packTessellation(a11, c9, s14, i14);
          this._pack(e13, r8, t5);
        }
        for (const e13 of this._spec.standardAttributes) if (null != e13.packTessellation) {
          const p8 = e13.packTessellation(a11, c9, s14, i14);
          this._pack(p8, e13, t5);
        } else if ((_a = e13.packAlternating) == null ? void 0 : _a.packTessellation) {
          const t6 = e13.packAlternating.packTessellation(a11, c9, s14, i14);
          for (let s15 = 0; s15 < this._spec.packVertexCount; s15++) {
            const i15 = t6[s15];
            this._pack(i15, e13, s15 * this._spec.stride);
          }
        }
      }
    }
    t4.vertexWriteRegion(this._packedU32View);
  }
  pack(t4, e12) {
    var _a;
    for (const s14 of this._spec.standardAttributes) if (s14.pack && "string" != typeof s14.pack) {
      const i14 = s14.pack(t4, e12);
      for (let t5 = 0; t5 < this._spec.packVertexCount; t5++) this._pack(i14, s14, t5 * this._spec.stride);
    } else if ((_a = s14.packAlternating) == null ? void 0 : _a.pack) {
      const i14 = s14.packAlternating.pack(t4, e12);
      for (let t5 = 0; t5 < this._spec.packVertexCount; t5++) {
        const e13 = i14[t5];
        this._pack(e13, s14, t5 * this._spec.stride);
      }
    }
  }
  _packPosition(e12, s14, i14) {
    const { offset: c9 } = this._spec.position, a11 = this._spec.position.packPrecisionFactor ?? 1, p7 = s6(e12 * a11, s14 * a11);
    this._dataView.setUint32(i14 + c9, p7, true);
  }
  _packId(t4, e12) {
    const s14 = t4 * (this._spec.id.packPrecisionFactor ?? 1), i14 = 4278190080 & this._dataView.getUint32(e12 + this._spec.id.offset, true);
    this._dataView.setUint32(e12 + this._spec.id.offset, s14 | i14, true);
  }
  _pack(t4, e12, i14) {
    o2(this._dataView, t4, e12, i14);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/MeshWriter.js
function i9(e12) {
  if (!e12) return false;
  for (const t4 of e12) switch (t4.effect.type) {
    case "CIMGeometricEffectBuffer":
    case "CIMGeometricEffectOffset":
    case "CIMGeometricEffectDonut":
      return true;
  }
  return false;
}
var c4 = class {
  constructor(e12, t4, r8, a11) {
    this._instanceId = e12, this._evaluator = t4, this._enabledOptionalAttributes = r8, this._viewParams = a11, this._evaluator.evaluator = (e13) => this.vertexSpec.createComputedParams(e13);
  }
  get _vertexPack() {
    if (!this._cachedVertexPack) {
      const e12 = i8.fromVertexSpec(this.vertexSpec, this._enabledOptionalAttributes);
      this._evaluator.hasDynamicProperties || e12.pack(this._evaluator.evaluatedMeshParams, this._viewParams), this._cachedVertexPack = e12;
    }
    return this._cachedVertexPack;
  }
  get evaluatedMeshParams() {
    return this._evaluator.evaluatedMeshParams;
  }
  get hasEffects() {
    return !!this.evaluatedMeshParams.effects;
  }
  get instanceId() {
    return this._instanceId;
  }
  get attributeLayout() {
    return this._vertexPack.attributeLayout;
  }
  get _preventEffectClipping() {
    return false;
  }
  setReferences(e12) {
    this._references = e12;
  }
  getBoundsInfo() {
    return null;
  }
  getTileInfo() {
    return this._viewParams.tileInfo;
  }
  async loadDependencies() {
    var _a;
    i9((_a = this._evaluator.inputMeshParams.effects) == null ? void 0 : _a.effectInfos) && await e9();
  }
  enqueueRequest(e12, t4, r8) {
    this._evaluator.hasDynamicProperties && this._evaluator.enqueueRequest(e12, t4, r8);
  }
  write(r8, s14, i14, c9, n12) {
    var _a;
    this.ensurePacked(s14, i14, c9);
    const o10 = this.evaluatedMeshParams.effects;
    if (!o10 || 0 === o10.length) return void this._write(r8, i14, void 0, n12);
    const u7 = (_a = i14.readGeometryForDisplay()) == null ? void 0 : _a.clone();
    if (!u7) return;
    const h9 = a2.fromOptimizedCIM(u7, i14.geometryType), f6 = t3();
    h9.invertY();
    const l9 = r8.id || "", m7 = l3.executeEffects(o10, h9, l9, f6, this._preventEffectClipping);
    let v3;
    for (; v3 = m7.next(); ) v3.invertY(), this._write(r8, i14, v3, n12);
  }
  ensurePacked(e12, t4, r8) {
    if (!this._evaluator.hasDynamicProperties) return;
    const a11 = this._evaluator.evaluateMeshParams(e12, t4, r8);
    this._vertexPack.pack(a11, this._viewParams);
  }
  hasArcadeDependency(e12) {
    return this._evaluator.hasArcadeDependency(e12);
  }
  _writeVertex(e12, t4, r8, a11, s14) {
    const i14 = this.evaluatedMeshParams;
    this._vertexPack.writeVertex(e12, t4, r8, a11, i14, s14);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/AFillMeshWriter.js
var o5 = 100;
var n8 = has("featurelayer-fast-triangulation-enabled");
var a8 = class extends c4 {
  async loadDependencies() {
    await Promise.all([super.loadDependencies(), i5()]);
  }
  _write(e12, t4, r8) {
    const s14 = (r8 == null ? void 0 : r8.asOptimized()) ?? t4.readGeometryForDisplay(), i14 = this._clip(s14);
    i14 && (e12.recordStart(this.instanceId, this.attributeLayout), this._writeGeometry(e12, t4, i14), e12.recordEnd());
  }
  _clip(e12) {
    if (!e12) return null;
    const r8 = this.hasEffects;
    return x2(e12, r8 ? 256 : 8);
  }
  _writeGeometry(e12, t4, i14) {
    const a11 = i14.maxLength > o5, c9 = [], l9 = this.createTesselationParams(t4);
    if (!a11 && n8 && a7(c9, i14)) return void (c9.length && this._writeVertices(e12, t4, i14.coords, l9, c9));
    const d6 = p2(i14);
    this._writeVertices(e12, t4, d6, l9);
  }
  _writeVertices(e12, t4, r8, s14, i14) {
    const o10 = t4.getDisplayId(), n12 = e12.vertexCount(), a11 = this.hasEffects;
    let c9 = 0;
    if (i14) for (const l9 of i14) {
      const t5 = r8[2 * l9], i15 = r8[2 * l9 + 1];
      a11 && e12.recordBounds(t5, i15, 0, 0), this._writeVertex(e12, o10, t5, i15, s14), c9++;
    }
    else for (let l9 = 0; l9 < r8.length; l9 += 2) {
      const t5 = Math.round(r8[l9]), i15 = Math.round(r8[l9 + 1]);
      a11 && e12.recordBounds(t5, i15, 0, 0), this._writeVertex(e12, o10, t5, i15, s14), c9++;
    }
    e12.indexEnsureSize(c9);
    for (let l9 = 0; l9 < c9; l9++) e12.indexWrite(l9 + n12);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/dotDensity/DotDensityMeshWriter.js
var r5 = { createComputedParams: (e12) => e12, optionalAttributes: {}, attributes: { id: { type: C.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: C.UNSIGNED_BYTE, count: 1 }, pos: { type: C.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, inverseArea: { type: C.FLOAT, count: 1, packTessellation: ({ inverseArea: e12 }) => e12 } } };
var s8 = class extends a8 {
  constructor() {
    super(...arguments), this.vertexSpec = r5;
  }
  createTesselationParams(e12) {
    return { inverseArea: 1 / e12.readGeometryArea() };
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/meshWriterUtils.js
var i10 = () => n.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.meshWriterUtils");
var u4 = 0;
var a9 = 100;
function m3(r8, e12) {
  return [!!(r8 == null ? void 0 : r8.minScale) && e12.scaleToZoom(r8.minScale) || u4, !!(r8 == null ? void 0 : r8.maxScale) && e12.scaleToZoom(r8.maxScale) || a9];
}
function f3(r8) {
  return 1 << r8;
}
function l4(r8) {
  let e12 = 0;
  for (const [t4, n12] of r8) n12 && (e12 |= 1 << t4);
  return e12;
}
function g3(t4) {
  let n12;
  if (!t4) return [0, 0, 0, 0];
  if ("string" == typeof t4) {
    const o11 = h.fromString(t4);
    if (!o11) return i10().errorOnce(new s("mapview:mesh-processing", "Unable to parse string into color", { color: t4 })), [0, 0, 0, 0];
    n12 = o11.toArray();
  } else n12 = t4;
  const [o10, s14, c9, u7] = n12;
  return [o10 * (u7 / 255), s14 * (u7 / 255), c9 * (u7 / 255), u7];
}
function h4(r8) {
  switch (r8) {
    case "butt":
    case w.Butt:
      return e2.BUTT;
    case "round":
    case w.Round:
      return e2.ROUND;
    case "square":
    case w.Square:
      return e2.SQUARE;
  }
}
function p3(r8) {
  switch (r8) {
    case "bevel":
    case G.Bevel:
      return n2.BEVEL;
    case "miter":
    case G.Miter:
      return n2.MITER;
    case "round":
    case G.Round:
      return n2.ROUND;
  }
}
function d3(r8, e12) {
  return Math.round(Math.min(Math.sqrt(r8 * e12), 255));
}
function S2(r8, e12) {
  return Math.round(r8 * e12) / e12;
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/FillMeshWriter.js
var i11 = { createComputedParams: (t4) => t4, optionalAttributes: { zoomRange: { type: C.SHORT, count: 2, packPrecisionFactor: si, pack: ({ scaleInfo: t4 }, { tileInfo: o10 }) => m3(t4, o10) } }, attributes: { id: { type: C.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: C.UNSIGNED_BYTE, count: 1 }, pos: { type: C.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, color: { type: C.UNSIGNED_BYTE, count: 4, normalized: true, pack: ({ color: t4 }) => g3(t4) } } };
var c5 = class extends a8 {
  constructor() {
    super(...arguments), this.vertexSpec = i11;
  }
  createTesselationParams(t4) {
    return null;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/PatternFillMeshWriter.js
var s9 = { createComputedParams: (t4) => t4, optionalAttributes: i11.optionalAttributes, attributes: { ...i11.attributes, tlbr: { count: 4, type: C.UNSIGNED_SHORT, pack: ({ sprite: e12 }) => {
  const { rect: r8, width: i14, height: s14 } = e12, o10 = r8.x + ti, a11 = r8.y + ti;
  return [o10, a11, o10 + i14, a11 + s14];
} }, inverseRasterizationScale: { count: 1, type: C.BYTE, packPrecisionFactor: 16, pack: ({ sprite: t4 }) => 1 / t4.rasterizationScale } } };
var o6 = class extends c5 {
  constructor() {
    super(...arguments), this.vertexSpec = s9;
  }
  _write(t4, e12, r8) {
    var _a;
    const i14 = (r8 == null ? void 0 : r8.asOptimized()) ?? e12.readGeometryForDisplay(), s14 = this._clip(i14);
    if (!s14) return;
    const o10 = (_a = this.evaluatedMeshParams.sprite) == null ? void 0 : _a.textureBinding;
    t4.recordStart(this.instanceId, this.attributeLayout, o10), this._writeGeometry(t4, e12, s14), t4.recordEnd();
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/ComplexFillMeshWriter.js
function p4(e12) {
  const { sprite: o10, aspectRatio: s14, scaleProportionally: r8 } = e12, i14 = u(e12.height), c9 = i14 > 0 ? i14 : o10.height;
  let a11 = i14 * s14;
  return a11 <= 0 ? a11 = o10.width : r8 && (a11 *= o10.width / o10.height), { width: a11, height: c9 };
}
function n9(t4) {
  const { applyRandomOffset: e12, sampleAlphaOnly: s14 } = t4;
  return l4([[C2, e12], [q, s14]]);
}
var l5 = { createComputedParams: (t4) => t4, optionalAttributes: s9.optionalAttributes, attributes: { ...s9.attributes, bitset: { count: 1, type: C.UNSIGNED_BYTE, pack: n9 }, width: { count: 1, type: C.HALF_FLOAT, pack: (t4) => p4(t4).width }, height: { count: 1, type: C.HALF_FLOAT, pack: (t4) => p4(t4).height }, offset: { count: 2, type: C.HALF_FLOAT, pack: ({ offsetX: e12, offsetY: o10 }) => [u(e12), -u(o10)] }, scale: { count: 2, type: C.UNSIGNED_BYTE, packPrecisionFactor: 16, pack: ({ scaleX: t4, scaleY: e12 }) => [t4, e12] }, angle: { count: 1, type: C.UNSIGNED_BYTE, pack: ({ angle: t4 }) => l(t4) } } };
var h5 = class extends o6 {
  constructor() {
    super(...arguments), this.vertexSpec = l5;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/line/LineMeshWriter.js
var d4 = class {
  constructor() {
    this.extrusionOffsetX = 0, this.extrusionOffsetY = 0, this.normalX = 0, this.normalY = 0, this.directionX = 0, this.directionY = 0, this.distance = 0, this.pathLength = 0;
  }
};
var f4 = { createComputedParams: (t4) => t4, optionalAttributes: { zoomRange: { type: C.SHORT, count: 2, packPrecisionFactor: si, pack: ({ scaleInfo: t4 }, { tileInfo: e12 }) => m3(t4, e12) } }, attributes: { id: { type: C.UNSIGNED_BYTE, count: 3, pack: "id" }, pos: { type: C.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, bitset: { type: C.UNSIGNED_BYTE, count: 1 }, color: { type: C.UNSIGNED_BYTE, count: 4, normalized: true, pack: ({ color: t4 }) => g3(t4) }, offset: { type: C.BYTE, count: 2, packPrecisionFactor: 16, packTessellation: ({ extrusionOffsetX: t4, extrusionOffsetY: e12 }) => [S2(t4, 16), S2(e12, 16)] }, normal: { type: C.BYTE, count: 2, packPrecisionFactor: 16, packTessellation: ({ normalX: t4, normalY: e12 }) => [S2(t4, 16), S2(e12, 16)] }, halfWidth: { type: C.HALF_FLOAT, count: 1, pack: ({ width: e12 }) => u(0.5 * e12) }, referenceHalfWidth: { type: C.HALF_FLOAT, count: 1, pack: ({ referenceWidth: e12 }) => u(0.5 * e12) } } };
var _ = class {
  constructor() {
    this.id = 0, this.bitset = 0, this.indexCount = 0, this.vertexCount = 0, this.vertexFrom = 0, this.vertexBounds = 0, this.pathLength = 0;
  }
};
var x3 = 65535;
var T = class extends c4 {
  constructor(t4, e12, s14, i14) {
    super(t4, e12, s14, i14), this.vertexSpec = f4, this._currentWrite = new _(), this._tessellationOptions = { halfWidth: 0, pixelCoordRatio: 1, offset: 0, wrapDistance: x3, textured: false }, this._tessParams = new d4(), this._initializeTessellator();
  }
  writeLineVertices(t4, e12, s14) {
    const i14 = this._getLines(e12);
    null != i14 && this._writeVertices(t4, s14, i14);
  }
  _initializeTessellator() {
    this._lineTessellator = new c(this._writeTesselatedVertex.bind(this), this._writeTriangle.bind(this), true);
  }
  _write(t4, s14, i14) {
    const r8 = i14 ?? a2.fromFeatureSetReaderCIM(s14);
    r8 && this._writeGeometry(t4, s14, r8);
  }
  _writeGeometry(t4, e12, s14, i14) {
    t4.recordStart(this.instanceId, this.attributeLayout, i14), this.writeLineVertices(t4, s14, e12), t4.recordEnd();
  }
  _getLines(t4) {
    return d2(t4, a4(this.evaluatedMeshParams));
  }
  _writeVertices(e12, s14, r8) {
    const { _currentWrite: o10, _tessellationOptions: n12, evaluatedMeshParams: a11 } = this, { width: c9, capType: m7, joinType: u7, miterLimit: p7, hasSizeVV: d6 } = a11, f6 = u(0.5 * c9);
    n12.halfWidth = f6, n12.capType = h4(m7), n12.joinType = p3(u7), n12.miterLimit = p7;
    const _4 = !d6;
    o10.out = e12, o10.id = s14.getDisplayId(), o10.vertexCount = 0, o10.indexCount = 0, o10.vertexFrom = e12.vertexCount(), o10.vertexBounds = _4 && f6 < R ? 0 : 1;
    for (const { line: t4, start: i14, pathLength: h9 } of r8) n12.initialDistance = i14 % x3, o10.pathLength = h9, this._lineTessellator.tessellate(t4, n12, _4);
  }
  _writeTesselatedVertex(t4, e12, s14, i14, r8, o10, n12, a11, c9, h9, l9) {
    const { out: m7, id: u7, vertexBounds: p7, pathLength: d6 } = this._currentWrite;
    return this.hasEffects && m7.recordBounds(t4, e12, p7, p7), this._tessParams.extrusionOffsetX = n12, this._tessParams.extrusionOffsetY = a11, this._tessParams.normalX = c9, this._tessParams.normalY = h9, this._tessParams.directionX = r8, this._tessParams.directionY = o10, this._tessParams.distance = l9, this._tessParams.pathLength = d6, this._writeVertex(m7, u7, t4, e12, this._tessParams), this._currentWrite.vertexFrom + this._currentWrite.vertexCount++;
  }
  _writeTriangle(t4, e12, s14) {
    const { out: i14 } = this._currentWrite;
    i14.indexEnsureSize(3), i14.indexWrite(t4), i14.indexWrite(e12), i14.indexWrite(s14), this._currentWrite.indexCount += 3;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/OutlineFillMeshWriter.js
var p5 = { createComputedParams: (e12) => e12, optionalAttributes: f4.optionalAttributes, attributes: { ...f4.attributes, bitset: { type: C.UNSIGNED_BYTE, count: 1, pack: (e12) => 0 }, color: { type: C.UNSIGNED_BYTE, count: 4, normalized: true, pack: ({ color: e12 }) => g3(e12) } } };
var c6 = { createComputedParams: (e12) => e12, optionalAttributes: f4.optionalAttributes, attributes: { ...f4.attributes, bitset: { type: C.UNSIGNED_BYTE, count: 1, pack: (e12) => l4([[B, true]]) }, color: { type: C.UNSIGNED_BYTE, count: 4, normalized: true, pack: ({ outlineColor: e12 }) => g3(e12) } } };
var m4 = class extends T {
  constructor() {
    super(...arguments), this.vertexSpec = c6;
  }
};
var h6 = class extends c5 {
  constructor(e12, t4, r8, s14) {
    super(e12, t4, r8, s14), this.vertexSpec = p5, this._lineMeshWriter = this._createOutlineWriter(e12, t4, r8, s14);
  }
  _createOutlineWriter(e12, t4, r8, s14) {
    return new m4(e12, t4, r8, s14);
  }
  _write(t4, r8, s14) {
    const i14 = (s14 == null ? void 0 : s14.asOptimized()) ?? r8.readGeometryForDisplay(), o10 = this._clip(i14);
    o10 && (t4.recordStart(this.instanceId, this.attributeLayout), this._writeGeometry(t4, r8, o10), this._lineMeshWriter.writeLineVertices(t4, a2.fromOptimizedCIM(o10, "esriGeometryPolyline"), r8), t4.recordEnd());
  }
  _clip(e12) {
    return e12 ? x2(e12, a4(this.evaluatedMeshParams)) : null;
  }
  ensurePacked(e12, t4, r8) {
    super.ensurePacked(e12, t4, r8), this._lineMeshWriter.ensurePacked(e12, t4, r8);
  }
  enqueueRequest(e12, t4, r8) {
    super.enqueueRequest(e12, t4, r8), this._lineMeshWriter.enqueueRequest(e12, t4, r8);
  }
  async loadDependencies() {
    await Promise.all([super.loadDependencies(), this._lineMeshWriter.loadDependencies()]);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/ComplexOutlineFillMeshWriter.js
var d5 = l5;
var h7 = c6;
var y2 = { createComputedParams: (e12) => e12, optionalAttributes: d5.optionalAttributes, attributes: { ...d5.attributes, bitset: { type: C.UNSIGNED_BYTE, count: 1, pack: (e12) => n9(e12) }, aux1: { count: 1, type: C.HALF_FLOAT, pack: (e12) => p4(e12).width }, aux2: { count: 1, type: C.HALF_FLOAT, pack: (e12) => p4(e12).height }, aux3: { count: 2, type: C.HALF_FLOAT, pack: ({ offsetX: t4, offsetY: r8 }) => [u(t4), u(r8)] }, aux4: { count: 2, type: C.UNSIGNED_BYTE, pack: ({ scaleX: e12, scaleY: t4 }) => [e12 * K, t4 * K] } } };
var f5 = { createComputedParams: (e12) => e12, optionalAttributes: d5.optionalAttributes, attributes: { ...d5.attributes, color: h7.attributes.color, bitset: { type: C.UNSIGNED_BYTE, count: 1, pack: (e12) => l4([[B, true]]) }, aux1: { count: 1, type: C.HALF_FLOAT, pack: (t4) => u(0.5 * t4.width) }, aux2: { count: 1, type: C.HALF_FLOAT, pack: (t4) => u(0.5 * t4.referenceWidth) }, aux3: { count: 2, type: C.HALF_FLOAT, packTessellation: ({ extrusionOffsetX: e12, extrusionOffsetY: t4 }) => [e12, t4] }, aux4: { count: 2, type: C.UNSIGNED_BYTE, packTessellation: ({ normalX: e12, normalY: t4 }) => [e12 * K + L, t4 * K + L] } } };
var _2 = class extends m4 {
  constructor() {
    super(...arguments), this.vertexSpec = f5;
  }
};
var x4 = class extends h6 {
  constructor() {
    super(...arguments), this.vertexSpec = y2;
  }
  _createOutlineWriter(e12, t4, r8, s14) {
    return new _2(e12, t4, r8, s14);
  }
  _write(e12, r8, s14) {
    var _a;
    const i14 = (s14 == null ? void 0 : s14.asOptimized()) ?? r8.readGeometryForDisplay(), o10 = this._clip(i14);
    if (!o10) return;
    const a11 = (_a = this.evaluatedMeshParams.sprite) == null ? void 0 : _a.textureBinding;
    e12.recordStart(this.instanceId, this.attributeLayout, a11), this._writeGeometry(e12, r8, o10), this._lineMeshWriter.writeLineVertices(e12, a2.fromOptimizedCIM(o10, "esriGeometryPolyline"), r8), e12.recordEnd();
  }
  ensurePacked(e12, t4, r8) {
    super.ensurePacked(e12, t4, r8), this._lineMeshWriter.ensurePacked(e12, t4, r8);
  }
  enqueueRequest(e12, t4, r8) {
    super.enqueueRequest(e12, t4, r8), this._lineMeshWriter.enqueueRequest(e12, t4, r8);
  }
  async loadDependencies() {
    await Promise.all([super.loadDependencies(), this._lineMeshWriter.loadDependencies()]);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/GradientSizeHelper.js
var a10 = () => n.getLogger("esri.views.2d.engine.webgl.shaderGraph.techniques.fill.GradientSizeHelper");
var n10 = class {
  constructor(t4, i14) {
    this._size = t4, this._sizeUnits = i14, this._relativeSize = null;
  }
  get relativeSize() {
    return this._relativeSize ?? (this._relativeSize = this.calculateRelativeSize()), this._relativeSize;
  }
  calculateRelativeSize() {
    if (this._sizeUnits === ne.Relative) {
      const t4 = Math.min(this._size / 100, 1);
      return [t4, t4];
    }
    return this.calculateRelativeSizeFromAbsolute();
  }
};
var s10 = class extends n10 {
  constructor(t4, i14, e12, r8) {
    super(i14, e12), this.rotationMatrix00 = 1, this.rotationMatrix01 = 0, this.rotationMatrix10 = 0, this.rotationMatrix11 = 1, this.bounds = { xmin: 1 / 0, ymin: 1 / 0, xmax: -1 / 0, ymax: -1 / 0 }, this.rotationMatrix00 = Math.cos(r8), this.rotationMatrix01 = -Math.sin(r8), this.rotationMatrix10 = -this.rotationMatrix01, this.rotationMatrix11 = this.rotationMatrix00;
    const { bounds: a11, rotationMatrix00: n12, rotationMatrix01: s14, rotationMatrix10: o10, rotationMatrix11: c9 } = this;
    t4.forEachVertex((t5, i15) => {
      const e13 = t5 * n12 + i15 * s14, r9 = t5 * o10 + i15 * c9;
      a11.xmin = Math.min(a11.xmin, e13), a11.ymin = Math.min(a11.ymin, r9), a11.xmax = Math.max(a11.xmax, e13), a11.ymax = Math.max(a11.ymax, r9);
    }), this.center = [(a11.xmin + a11.xmax) / 2, (a11.ymin + a11.ymax) / 2];
  }
};
var o7 = class extends s10 {
  constructor(t4, i14, e12, r8) {
    super(t4, i14, e12, r8), this.method = "linear";
  }
  getRelativePosition(t4, i14) {
    const { rotationMatrix00: e12, rotationMatrix01: r8, bounds: a11 } = this, { xmin: n12, xmax: s14 } = a11;
    return [(t4 * e12 + i14 * r8 - n12) / (s14 - n12), 0];
  }
  calculateRelativeSizeFromAbsolute() {
    const { _size: t4, bounds: i14 } = this, { xmin: r8, xmax: a11 } = i14;
    return [u(t4) / (a11 - r8), 0];
  }
};
var c7 = class extends s10 {
  constructor(t4, i14, e12, r8) {
    super(t4, i14, e12, r8), this.method = "rectangular";
  }
  getRelativePosition(t4, i14) {
    const { bounds: e12, center: r8, rotationMatrix00: a11, rotationMatrix01: n12, rotationMatrix10: s14, rotationMatrix11: o10 } = this, c9 = t4 * s14 + i14 * o10, x6 = t4 * a11 + i14 * n12 - r8[0], l9 = c9 - r8[1];
    return [x6 * (2 / (e12.xmax - e12.xmin)), -l9 * (2 / (e12.ymax - e12.ymin))];
  }
  calculateRelativeSizeFromAbsolute() {
    const { _size: t4, bounds: i14 } = this, { xmin: r8, ymin: a11, xmax: n12, ymax: s14 } = i14;
    return [u(2 * t4) / (n12 - r8), u(2 * t4) / (s14 - a11)];
  }
};
var x5 = class extends s10 {
  constructor(t4, i14, e12) {
    super(t4, i14, e12, 0), this.method = "circular";
    const { xmin: r8, xmax: a11, ymin: n12, ymax: s14 } = this.bounds, o10 = a11 - r8, c9 = s14 - n12;
    this.radius = Math.sqrt(o10 * o10 + c9 * c9) / 2;
  }
  getRelativePosition(t4, i14) {
    const { center: e12, radius: r8 } = this;
    return [(t4 - e12[0]) / r8, -((i14 - e12[1]) / r8)];
  }
  calculateRelativeSizeFromAbsolute() {
    const { _size: t4 } = this;
    return [u(t4) / this.radius, 0];
  }
};
function l6(t4, e12) {
  if (null == t4) return null;
  const r8 = s2(e12.angle), n12 = e12.gradientSize, s14 = e12.gradientSizeUnits;
  switch (e12.gradientMethod.toLowerCase()) {
    case "linear":
      return new o7(t4, n12, s14, r8);
    case "rectangular":
      return new c7(t4, n12, s14, r8);
    case "circular":
      return new x5(t4, n12, s14);
    default:
      return a10().errorOnce(`Gradient fill method "${e12.gradientMethod}" currently unsupported.`), null;
  }
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/GradientFillMeshWriter.js
var p6 = { createComputedParams: (t4) => t4, optionalAttributes: i11.optionalAttributes, attributes: { ...i11.attributes, bitset: { type: C.UNSIGNED_BYTE, count: 1, pack: ({ gradientSizeUnits: e12, gradientType: r8 }) => {
  let i14 = 0;
  return e12 === ne.Absolute && (i14 |= f3(e5.isAbsolute)), "discrete" === r8.toLowerCase() && (i14 |= f3(e5.isDiscrete)), i14;
} }, tlbr: { count: 4, type: C.UNSIGNED_SHORT, pack: ({ sprite: t4 }) => {
  const { rect: i14, width: s14, height: a11 } = t4, o10 = i14.x + ti + ci, n12 = i14.y + ti;
  return [o10, n12, o10 + s14 - 2 * ci, n12 + a11];
} }, relativePosition: { count: 2, type: C.HALF_FLOAT, packTessellation: ({ gradientStats: t4 }, e12, r8, i14) => (t4 == null ? void 0 : t4.getRelativePosition(r8, i14)) ?? [0, 0] }, relativeGradientSize: { count: 2, type: C.HALF_FLOAT, packTessellation: ({ gradientStats: t4 }) => (t4 == null ? void 0 : t4.relativeSize) ?? [1, 1] }, gradientMethod: { count: 1, type: C.UNSIGNED_BYTE, pack: ({ gradientMethod: t4 }) => {
  switch (t4.toLowerCase()) {
    case "rectangular":
      return r3.rectangular;
    case "circular":
      return r3.circular;
    default:
      return r3.linear;
  }
} } } };
var u5 = class extends a8 {
  constructor() {
    super(...arguments), this.vertexSpec = p6;
  }
  get _preventEffectClipping() {
    return true;
  }
  createTesselationParams(t4) {
    return { gradientStats: l6(t4.readGeometryForDisplay(), this.evaluatedMeshParams) };
  }
  _write(t4, e12, r8) {
    var _a;
    const i14 = (r8 == null ? void 0 : r8.asOptimized()) ?? e12.readGeometryForDisplay(), s14 = this._clip(i14);
    if (!s14) return;
    const a11 = (_a = this.evaluatedMeshParams.sprite) == null ? void 0 : _a.textureBinding;
    t4.recordStart(this.instanceId, this.attributeLayout, a11), this._writeGeometry(t4, e12, s14), t4.recordEnd();
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/PatternOutlineFillMeshWriter.js
var n11 = { optionalAttributes: s9.optionalAttributes, createComputedParams: (e12) => e12, attributes: { ...s9.attributes, ...p5.attributes } };
var o8 = { optionalAttributes: s9.optionalAttributes, createComputedParams: (e12) => e12, attributes: { ...s9.attributes, ...c6.attributes } };
var u6 = class extends m4 {
  constructor() {
    super(...arguments), this.vertexSpec = o8;
  }
};
var c8 = class extends h6 {
  constructor() {
    super(...arguments), this.vertexSpec = n11;
  }
  _createOutlineWriter(e12, t4, r8, s14) {
    return new u6(e12, t4, r8, s14);
  }
  _write(t4, r8, s14) {
    var _a;
    const i14 = (s14 == null ? void 0 : s14.asOptimized()) ?? r8.readGeometryForDisplay(), a11 = this._clip(i14);
    if (!a11) return;
    const n12 = (_a = this.evaluatedMeshParams.sprite) == null ? void 0 : _a.textureBinding;
    t4.recordStart(this.instanceId, this.attributeLayout, n12), this._writeGeometry(t4, r8, a11), this._lineMeshWriter.writeLineVertices(t4, a2.fromOptimizedCIM(a11, "esriGeometryPolyline"), r8), t4.recordEnd();
  }
  ensurePacked(e12, t4, r8) {
    super.ensurePacked(e12, t4, r8), this._lineMeshWriter.ensurePacked(e12, t4, r8);
  }
  enqueueRequest(e12, t4, r8) {
    super.enqueueRequest(e12, t4, r8), this._lineMeshWriter.enqueueRequest(e12, t4, r8);
  }
  async loadDependencies() {
    await Promise.all([super.loadDependencies(), this._lineMeshWriter.loadDependencies()]);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/heatmap/HeatmapMeshWriter.js
var r6 = { createComputedParams: (t4) => t4, optionalAttributes: {}, attributes: { pos: { type: C.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, id: { type: C.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: C.UNSIGNED_BYTE, count: 1 }, offset: { type: C.BYTE, count: 2, packAlternating: { count: 4, pack: () => [[-1, -1], [1, -1], [-1, 1], [1, 1]] } } } };
var i12 = class extends c4 {
  constructor() {
    super(...arguments), this.vertexSpec = r6;
  }
  _write(t4, e12) {
    t4.recordStart(this.instanceId, this.attributeLayout);
    const r8 = e12.getDisplayId();
    if ("esriGeometryPoint" === e12.geometryType) {
      const i14 = e12.readXForDisplay(), o10 = e12.readYForDisplay();
      this._writeQuad(t4, r8, i14, o10);
    } else if ("esriGeometryMultipoint" === e12.geometryType) {
      const i14 = e12.readGeometryForDisplay();
      i14 == null ? void 0 : i14.forEachVertex((e13, i15) => {
        e13 >= 0 && e13 <= 512 && i15 >= 0 && i15 <= 512 && this._writeQuad(t4, r8, e13, i15);
      });
    }
    t4.recordEnd();
  }
  _writeQuad(t4, e12, r8, i14) {
    const o10 = t4.vertexCount();
    this._writeVertex(t4, e12, r8, i14), t4.indexWrite(o10 + 0), t4.indexWrite(o10 + 1), t4.indexWrite(o10 + 2), t4.indexWrite(o10 + 1), t4.indexWrite(o10 + 3), t4.indexWrite(o10 + 2);
  }
};

// node_modules/@arcgis/core/symbols/cim/placements/CIMMarkerPlacementHelper.js
var e11 = class {
  static getPlacement(e12, r8, n12, s14, c9, o10) {
    const a11 = g(n12);
    if (!a11) return null;
    -1 === r8 && e12.invertY();
    return a11.execute(e12, n12, s14, c9, o10);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/text/TextParams.js
var s11 = 96;
var i13 = class {
  constructor(i14) {
    const { offsetX: o10, offsetY: e12, postAngle: f6, fontSize: h9, haloSize: n12, outlineSize: l9, scaleFactor: z3, transforms: a11 } = i14;
    if (this.offsetX = o10, this.offsetY = e12, this.postAngle = f6, this.fontSize = Math.min(h9, s11), this.haloSize = n12 ?? 0, this.outlineSize = l9 ?? 0, this.transforms = a11, a11 && a11.infos.length > 1) {
      const i15 = E(h9, f6, false, o10, e12, a11, false);
      this.fontSize = Math.min(i15.size, s11);
      const n13 = i15.size / h9;
      this.haloSize *= n13, this.outlineSize *= n13, this.postAngle = i15.rotation, this.offsetX = i15.offsetX, this.offsetY = i15.offsetY;
    }
    z3 && (this.fontSize *= z3, this.offsetX *= z3, this.offsetY *= z3);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/text/TextMeshWriter.js
var P = 28;
var T2 = [4, 4];
var b2 = [16, 4];
var k2 = { topLeft: b2, topRight: b2, bottomLeft: b2, bottomRight: b2 };
var z2 = [4, 2];
var B3 = [4, 6];
var M2 = { topLeft: z2, topRight: z2, bottomLeft: B3, bottomRight: B3 };
var R2 = { topLeft: z2, topRight: B3, bottomLeft: z2, bottomRight: B3 };
var w3 = { topLeft: B3, topRight: B3, bottomLeft: T2, bottomRight: T2 };
var L2 = { topLeft: T2, topRight: T2, bottomLeft: B3, bottomRight: B3 };
var I = { topLeft: B3, topRight: T2, bottomLeft: B3, bottomRight: T2 };
var E3 = { topLeft: T2, topRight: B3, bottomLeft: T2, bottomRight: B3 };
var G3 = { createComputedParams: (t4) => t4, optionalAttributes: { zoomRange: { type: C.UNSIGNED_SHORT, count: 2, packPrecisionFactor: si, packTessellation: ({ minZoom: t4, maxZoom: e12 }) => [t4 || 0, e12 || P] }, clipAngle: { type: C.UNSIGNED_BYTE, count: 1, packTessellation: ({ clipAngle: t4 }) => A4(t4 || 0) }, referenceSymbol: { type: C.BYTE, count: 4, packPrecisionFactor: 1, packTessellation: (t4, o10) => {
  const r8 = t4.isLineLabel || !t4.referenceBounds, n12 = i4(r8 ? "center" : o10.horizontalAlignment), a11 = s5(r8 ? "middle" : o10.verticalAlignment), { offsetX: c9, offsetY: l9, size: h9 } = r8 ? { offsetX: 0, offsetY: 0, size: 0 } : t4.referenceBounds;
  return [u(c9), -u(l9), Math.round(u(h9)), n12 + 1 << 2 | a11 + 1];
} } }, attributes: { pos: { type: C.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, id: { type: C.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: C.UNSIGNED_BYTE, count: 1, packTessellation: ({ isBackground: t4, mapAligned: e12 }) => l4([[F, t4], [H, !!e12]]) }, offset: { type: C.SHORT, count: 2, packPrecisionFactor: 8, packAlternating: { count: 4, packTessellation: ({ offsets: t4 }) => {
  const { bottomLeft: e12, bottomRight: o10, topLeft: r8, topRight: i14 } = t4;
  return [r8, i14, e12, o10];
} } }, textureUV: { type: C.SHORT, count: 2, packPrecisionFactor: 4, packAlternating: { count: 4, packTessellation: ({ texcoords: t4 }) => {
  const { bottomLeft: e12, bottomRight: o10, topLeft: r8, topRight: i14 } = t4;
  return [r8, i14, e12, o10];
} } }, color: { type: C.UNSIGNED_BYTE, count: 4, normalized: true, packTessellation: ({ color: t4 }) => t4 }, fontSize: { type: C.UNSIGNED_SHORT, count: 1, packPrecisionFactor: 4, packTessellation: ({ fontSize: t4 }) => Math.round(u(t4)) }, referenceSize: { type: C.UNSIGNED_BYTE, count: 1, packPrecisionFactor: 4, packTessellation: ({ fontSize: t4 }, { referenceSize: o10 }) => Math.round(u(o10 ?? t4)) }, outlineColor: { type: C.UNSIGNED_BYTE, count: 4, normalized: true, pack: ({ outlineColor: t4 }) => g3(t4) }, haloColor: { type: C.UNSIGNED_BYTE, count: 4, normalized: true, pack: ({ haloColor: t4 }) => g3(t4) }, outlineAndHaloSize: { type: C.UNSIGNED_SHORT, count: 2, packPrecisionFactor: 4, packTessellation: ({ outlineSize: t4, haloSize: o10 }) => [Math.round(u(t4)), Math.round(u(o10))] } } };
var N = class extends c4 {
  constructor() {
    super(...arguments), this.vertexSpec = G3, this._textMeshParamsPropsInitialized = false;
  }
  ensurePacked(t4, e12, o10) {
    super.ensurePacked(t4, e12, o10), this._textMeshParamsPropsInitialized && !this._evaluator.hasDynamicProperties || (this._textMeshTransformProps = new i13(this.evaluatedMeshParams), this._textMeshParamsPropsInitialized = true);
  }
  _write(t4, e12, o10) {
    const r8 = this._getShaping();
    if (!r8) return;
    const i14 = e12.getDisplayId();
    if (null != this.evaluatedMeshParams.placement) return this._writePlacedTextMarkers(t4, e12, r8, o10);
    if (o10 == null ? void 0 : o10.nextPath()) return o10.nextPoint(), this._writeGlyphs(t4, i14, o10.x, o10.y, r8, 0);
    if ("esriGeometryPolygon" === e12.geometryType) {
      const o11 = e12.readCentroidForDisplay();
      if (!o11) return;
      const [s15, n13] = o11.coords;
      return this._writeGlyphs(t4, i14, s15, n13, r8, 0);
    }
    if ("esriGeometryMultipoint" === e12.geometryType) {
      const o11 = e12.readGeometryForDisplay();
      return void (o11 == null ? void 0 : o11.forEachVertex((e13, o12) => this._writeGlyphs(t4, i14, e13, o12, r8, 0)));
    }
    const s14 = e12.readXForDisplay(), n12 = e12.readYForDisplay();
    return this._writeGlyphs(t4, i14, s14, n12, r8, 0);
  }
  _writePlacedTextMarkers(t4, i14, s14, n12) {
    const a11 = n12 ?? a2.fromFeatureSetReaderCIM(i14);
    if (!a11) return;
    const c9 = -1, l9 = e11.getPlacement(a11, c9, this.evaluatedMeshParams.placement, u(1), t4.id, t3());
    if (!l9) return;
    const h9 = i14.getDisplayId();
    let f6 = l9.next();
    for (; null != f6; ) {
      const e12 = f6.tx, o10 = -f6.ty, r8 = -f6.getAngle();
      this._writeGlyphs(t4, h9, e12, o10, s14, r8), f6 = l9.next();
    }
  }
  _getShaping(o10) {
    var _a;
    const r8 = this._textMeshTransformProps, i14 = this.evaluatedMeshParams;
    if (!((_a = i14.glyphs) == null ? void 0 : _a.glyphs.length)) return null;
    const s14 = u(r8.fontSize), n12 = u(r8.offsetX), p7 = u(r8.offsetY), m7 = r(u(i14.lineWidth), zi, Bi), d6 = G2 * r(i14.lineHeightRatio, 0.25, 4);
    return O(i14.glyphs, { scale: s14 / A, angle: r8.postAngle, xOffset: n12, yOffset: p7, horizontalAlignment: i14.horizontalAlignment, verticalAlignment: o10 || i14.verticalAlignment, maxLineWidth: m7, lineHeight: d6, decoration: i14.decoration, borderLineSizePx: u(i14.boxBorderLineSize), hasBackground: !!i14.boxBackgroundColor, useCIMAngleBehavior: i14.useCIMAngleBehavior });
  }
  _writeGlyphs(t4, o10, r8, i14, s14, n12, a11, c9) {
    const l9 = this.evaluatedMeshParams, h9 = this._textMeshTransformProps, f6 = u(h9.fontSize), p7 = h9.haloSize, u7 = h9.outlineSize, g5 = u(h9.offsetX), x6 = u(h9.offsetY), [y3, S4] = m3(l9.scaleInfo, this.getTileInfo());
    0 !== n12 && s14.setRotation(n12);
    const _4 = s14.bounds, P2 = r8 + _4.x + g5, T3 = i14 + _4.y - x6, b4 = 2 * (l9.minPixelBuffer ? l9.minPixelBuffer / f6 : 1), k4 = Math.max(_4.width, _4.height) * b4;
    s14.textBox && (t4.recordStart(this.instanceId, this.attributeLayout, s14.glyphs[0].textureBinding), t4.recordBounds(P2, T3, k4, k4), this._writeTextBox(t4, o10, r8, i14, s14.textBox, a11, c9), t4.recordEnd());
    for (const e12 of s14.glyphs) {
      t4.recordStart(this.instanceId, this.attributeLayout, e12.textureBinding), t4.recordBounds(P2, T3, k4, k4);
      const { texcoords: s15, offsets: n13 } = e12;
      this._writeQuad(t4, o10, r8, i14, { texcoords: s15, offsets: n13, fontSize: f6, haloSize: p7, outlineSize: u7, color: g3(l9.color), isBackground: false, referenceBounds: a11, minZoom: y3, maxZoom: S4, ...c9 }), t4.recordEnd();
    }
    0 !== n12 && s14.setRotation(-n12);
  }
  _writeTextBox(t4, e12, o10, r8, i14, s14, n12) {
    const a11 = this.evaluatedMeshParams, { fontSize: c9, haloSize: l9, outlineSize: h9 } = this._textMeshTransformProps, { boxBackgroundColor: f6, boxBorderLineColor: p7 } = a11, d6 = { isBackground: true, fontSize: c9, haloSize: l9, outlineSize: h9, referenceBounds: s14, ...n12 };
    f6 && (this._writeQuad(t4, e12, o10, r8, { texcoords: k2, offsets: i14.main, color: g3(f6), ...d6 }), p7 || (this._writeQuad(t4, e12, o10, r8, { texcoords: w3, offsets: i14.top, color: g3(f6), ...d6 }), this._writeQuad(t4, e12, o10, r8, { texcoords: L2, offsets: i14.bot, color: g3(f6), ...d6 }), this._writeQuad(t4, e12, o10, r8, { texcoords: I, offsets: i14.left, color: g3(f6), ...d6 }), this._writeQuad(t4, e12, o10, r8, { texcoords: E3, offsets: i14.right, color: g3(f6), ...d6 }))), p7 && (this._writeQuad(t4, e12, o10, r8, { texcoords: M2, offsets: i14.top, color: g3(p7), ...d6 }), this._writeQuad(t4, e12, o10, r8, { texcoords: M2, offsets: i14.bot, color: g3(p7), ...d6 }), this._writeQuad(t4, e12, o10, r8, { texcoords: R2, offsets: i14.left, color: g3(p7), ...d6 }), this._writeQuad(t4, e12, o10, r8, { texcoords: R2, offsets: i14.right, color: g3(p7), ...d6 }));
  }
  _writeQuad(t4, e12, o10, r8, i14) {
    const s14 = t4.vertexCount();
    this._writeVertex(t4, e12, o10, r8, i14), t4.indexWrite(s14 + 0), t4.indexWrite(s14 + 1), t4.indexWrite(s14 + 2), t4.indexWrite(s14 + 1), t4.indexWrite(s14 + 3), t4.indexWrite(s14 + 2);
  }
};
var A4 = (t4) => Math.round(t4 * (254 / 360));

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/line/GradientStrokeMeshWriter.js
var m5 = { createComputedParams: (t4) => t4, optionalAttributes: f4.optionalAttributes, attributes: { ...f4.attributes, bitset: { type: C.UNSIGNED_BYTE, count: 1, pack: ({ gradientMethod: t4, gradientSizeUnits: e12, gradientType: r8 }) => l4([[e6.isAlongLine, "alongline" === t4.toLowerCase()], [e6.isAbsoluteSize, e12 === ne.Absolute], [e6.isDiscrete, "discrete" === r8.toLowerCase()]]) }, tlbr: { type: C.UNSIGNED_SHORT, count: 4, pack: ({ sprite: t4 }) => {
  const { rect: e12, width: i14, height: o10 } = t4, n12 = e12.x + ti + ci, a11 = e12.y + ti;
  return [n12, a11, n12 + i14 - 2 * ci, a11 + o10];
} }, accumulatedDistance: { type: C.UNSIGNED_SHORT, count: 1, packTessellation: ({ distance: t4 }) => t4 }, gradientSize: { type: C.HALF_FLOAT, count: 1, pack: ({ gradientSize: e12, gradientSizeUnits: r8 }) => r8 === ne.Relative ? e12 / 100 : u(e12) }, totalLength: { type: C.HALF_FLOAT, count: 1, packTessellation: ({ pathLength: t4 }) => t4 }, segmentDirection: { type: C.BYTE, count: 2, packPrecisionFactor: 16, packTessellation: ({ directionX: t4, directionY: e12 }) => [t4, e12] } } };
var l7 = class extends T {
  get _preventEffectClipping() {
    return true;
  }
  constructor(t4, e12, i14, r8) {
    super(t4, e12, i14, r8), this.vertexSpec = m5, this._tessellationOptions.textured = true;
  }
  _write(t4, i14, r8) {
    const s14 = r8 ?? a2.fromFeatureSetReaderCIM(i14);
    if (!s14) return;
    const { sprite: o10 } = this.evaluatedMeshParams;
    this._writeGeometry(t4, i14, s14, o10 == null ? void 0 : o10.textureBinding);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/line/TexturedLineMeshWriter.js
var m6 = { createComputedParams: (t4) => t4, optionalAttributes: f4.optionalAttributes, attributes: { ...f4.attributes, bitset: { type: C.UNSIGNED_BYTE, count: 1, pack: ({ shouldSampleAlphaOnly: t4, shouldScaleDash: e12, isSDF: r8 }) => l4([[q, t4], [D, e12], [E2, r8]]) }, tlbr: { type: C.UNSIGNED_SHORT, count: 4, pack: ({ sprite: t4 }) => {
  const { rect: e12, width: r8, height: o10 } = t4, i14 = e12.x + ti, n12 = e12.y + ti;
  return [i14, n12, i14 + r8, n12 + o10];
} }, accumulatedDistance: { type: C.UNSIGNED_SHORT, count: 1, packTessellation: ({ distance: t4 }) => t4 }, segmentDirection: { type: C.BYTE, count: 2, packPrecisionFactor: 16, packTessellation: ({ directionX: t4, directionY: e12 }) => [t4, e12] }, offsetAlongLine: { type: C.HALF_FLOAT, count: 1, pack: ({ offsetAlongLine: e12 }) => u(e12) }, capType: { type: C.UNSIGNED_BYTE, count: 1, pack: ({ capType: t4 }) => {
  switch (t4) {
    case w.Butt:
    case "butt":
      return 0;
    case w.Square:
    case "square":
      return 1;
    case w.Round:
    case "round":
      return 2;
    default:
      return 0;
  }
} } } };
var l8 = class extends T {
  constructor(t4, e12, r8, s14) {
    super(t4, e12, r8, s14), this.vertexSpec = m6, this._tessellationOptions.textured = true;
  }
  _write(t4, r8, s14) {
    const o10 = s14 ?? a2.fromFeatureSetReaderCIM(r8);
    if (!o10) return;
    const { sprite: i14 } = this.evaluatedMeshParams;
    this._writeGeometry(t4, r8, o10, i14 == null ? void 0 : i14.textureBinding);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/markers/ComputedMarkerParams.js
var s12 = class _s {
  static from(t4) {
    return "width" in t4 ? this.fromSimpleMeshParams(t4) : this.fromComplexMeshParams(t4);
  }
  static fromSimpleMeshParams(e12) {
    const i14 = new _s(e12.sprite, e12.color, e12.outlineColor, e12.minPixelBuffer, e12.placement, e12.scaleInfo, e12.effects), { type: o10, width: h9, height: r8, angle: n12, alignment: c9, outlineSize: a11, referenceSize: f6, sprite: l9, overrideOutlineColor: m7 } = e12;
    return i14.rawWidth = u(h9), i14.rawHeight = u(r8), i14.angle = n12, i14.alignment = c9, i14.outlineSize = u(a11), i14.referenceSize = u(f6), i14.overrideOutlineColor = m7, i14.offsetX = u(e12.offsetX), i14.offsetY = u(e12.offsetY), "simple" !== o10 || l9.sdf || (i14.rawWidth = l9.width, i14.rawHeight = l9.height), i14._computeSize(e12, false), i14;
  }
  static fromComplexMeshParams(e12) {
    const o10 = new _s(e12.sprite, e12.color, e12.outlineColor, e12.minPixelBuffer, e12.placement, e12.scaleInfo, e12.effects);
    let { alignment: h9, transforms: r8, size: n12, scaleX: c9, anchorX: a11, anchorY: f6, angle: l9, colorLocked: m7, frameHeight: d6, widthRatio: u7, offsetX: p7, offsetY: g5, outlineSize: x6, referenceSize: w4, scaleFactor: z3, sizeRatio: S4, isAbsoluteAnchorPoint: X, rotateClockwise: Y, scaleSymbolsProportionally: C4, sprite: H2 } = e12;
    if (r8 && r8.infos.length > 0) {
      const t4 = E(n12, l9, Y, p7, g5, r8);
      n12 = t4.size, l9 = t4.rotation, p7 = t4.offsetX, g5 = t4.offsetY, Y = false;
    }
    z3 && (n12 *= z3, p7 *= z3, g5 *= z3);
    const M3 = c9 * (H2.width / H2.height);
    o10.alignment = h9, o10.rawHeight = u(n12), o10.rawWidth = o10.rawHeight * M3, o10.referenceSize = u(w4), o10.sizeRatio = S4, o10.sdfDecodeCoeff = (H2.sdfDecodeCoeff ?? 1) * S4, o10.angle = l9, o10.rotateClockwise = Y, o10.anchorX = a11, o10.anchorY = f6, o10.offsetX = u(p7), o10.offsetY = u(g5), X && n12 && (H2.sdf ? o10.anchorX = a11 / (n12 * u7) : o10.anchorX = a11 / (n12 * M3), o10.anchorY = f6 / n12);
    const W = C4 && d6 ? n12 / d6 : 1;
    return o10.outlineSize = 0 === x6 || isNaN(x6) ? 0 : u(x6) * W, o10.scaleSymbolsProportionally = C4, o10.colorLocked = m7, o10._computeSize(e12, true), o10;
  }
  constructor(t4, i14, o10, s14, h9, r8, n12) {
    this.sprite = t4, this.color = i14, this.outlineColor = o10, this.minPixelBuffer = s14, this.placement = h9, this.scaleInfo = r8, this.effects = n12, this.rawWidth = 0, this.rawHeight = 0, this.angle = 0, this.outlineSize = 0, this.referenceSize = 0, this.sizeRatio = 1, this.sdfDecodeCoeff = 1, this.alignment = i.SCREEN, this.scaleSymbolsProportionally = false, this.overrideOutlineColor = false, this.colorLocked = false, this.anchorX = 0, this.anchorY = 0, this.computedWidth = 0, this.computedHeight = 0, this.texXmin = 0, this.texYmin = 0, this.texXmax = 0, this.texYmax = 0, this.offsetX = 0, this.offsetY = 0, this.rotateClockwise = true;
  }
  get boundsInfo() {
    return { size: Math.max(this.computedHeight, this.computedWidth), offsetX: this.offsetX, offsetY: this.offsetY };
  }
  _computeSize(t4, e12) {
    const { sprite: i14, hasSizeVV: s14 } = t4, n12 = !!i14.sdf, c9 = i14.sdfPaddingRatio ?? 0.5, { rawWidth: a11, rawHeight: f6, sizeRatio: l9, outlineSize: m7 } = this, d6 = i14.rect;
    let u7 = a11 * l9, p7 = f6 * l9, g5 = 0, x6 = 0;
    if (n12) {
      const t5 = 1 / (1 - c9);
      if (u7 *= t5, p7 *= t5, s14) this.computedWidth = u7, this.computedHeight = p7;
      else {
        const t6 = e12 && a11 > f6 ? u7 : a11, o10 = f6, s15 = m7 + 2 * 1;
        this.computedWidth = Math.min(t6 + s15, u7), this.computedHeight = Math.min(o10 + s15, p7);
        const h9 = Math.max(i14.width, i14.height) / Math.max(u7, p7);
        g5 = (this.computedWidth - u7) * h9, x6 = (this.computedHeight - p7) * h9;
      }
    } else this.computedWidth = u7 * (d6.width / i14.width), this.computedHeight = p7 * (d6.height / i14.height), g5 = 2 * ti, x6 = 2 * ti;
    const w4 = d6.x + ti - g5 / 2, z3 = d6.y + ti - x6 / 2, S4 = w4 + i14.width + g5, X = z3 + i14.height + x6;
    this.texXmin = h8(w4), this.texYmin = h8(z3), this.texXmax = r7(S4), this.texYmax = r7(X), this.computedWidth *= (this.texXmax - this.texXmin) / (S4 - w4), this.computedHeight *= (this.texYmax - this.texYmin) / (X - z3), this.anchorX *= u7 / this.computedWidth, this.anchorY *= p7 / this.computedHeight;
  }
};
function h8(t4, e12 = 1e-7) {
  const i14 = Math.ceil(t4);
  return i14 - t4 < e12 ? i14 : Math.floor(t4);
}
function r7(t4, e12 = 1e-7) {
  const i14 = Math.floor(t4);
  return t4 - i14 < e12 ? i14 : Math.ceil(t4);
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/markers/MarkerMeshWriter.js
var g4 = 3.14159265359 / 180;
var k3 = 128 / Math.PI;
function b3(e12, t4) {
  return e12 %= t4, Math.abs(e12 >= 0 ? e12 : e12 + t4);
}
function v2(e12) {
  return b3(e12 * k3, 256);
}
function S3(e12, a11, i14, n12, c9 = false) {
  const m7 = n3(), l9 = c9 ? 1 : -1;
  return a3(m7), (a11 || i14) && i3(m7, m7, [a11, -i14]), n12 && s4(m7, m7, l9 * g4 * -n12), m7;
}
var _3 = { createComputedParams: (e12) => s12.from(e12), optionalAttributes: { zoomRange: { type: C.SHORT, count: 2, packPrecisionFactor: si, pack: ({ scaleInfo: e12 }, { tileInfo: t4 }) => m3(e12, t4) } }, attributes: { pos: { type: C.SHORT, count: 2, pack: "position", packPrecisionFactor: 10 }, id: { type: C.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: C.UNSIGNED_BYTE, count: 1, pack: ({ sprite: e12, alignment: t4, scaleSymbolsProportionally: r8, overrideOutlineColor: o10, colorLocked: s14 }) => {
  let a11 = 0;
  return e12.sdf && (a11 |= f3(o.bitset.isSDF)), t4 === i.MAP && (a11 |= f3(o.bitset.isMapAligned)), r8 && (a11 |= f3(o.bitset.scaleSymbolsProportionally)), o10 && (a11 |= f3(o.bitset.overrideOutlineColor)), s14 && (a11 |= f3(o.bitset.colorLocked)), a11;
} }, offset: { type: C.HALF_FLOAT, count: 2, packAlternating: { count: 4, pack: ({ angle: e12, computedWidth: t4, computedHeight: r8, anchorX: o10, anchorY: s14, offsetX: i14, offsetY: n12, rotateClockwise: c9 }) => {
  const m7 = S3(0, i14, n12, -e12, c9), l9 = -(0.5 + o10) * t4, d6 = -(0.5 - s14) * r8, u7 = [l9, d6], p7 = [l9 + t4, d6], h9 = [l9, d6 + r8], f6 = [l9 + t4, d6 + r8];
  return S(u7, u7, m7), S(p7, p7, m7), S(h9, h9, m7), S(f6, f6, m7), [u7, p7, h9, f6];
} } }, textureUV: { type: C.SHORT, count: 2, packPrecisionFactor: 4, packAlternating: { count: 4, pack: ({ texXmax: e12, texXmin: t4, texYmax: r8, texYmin: o10 }) => [[t4, o10], [e12, o10], [t4, r8], [e12, r8]] } }, color: { type: C.UNSIGNED_BYTE, count: 4, normalized: true, pack: ({ color: e12 }) => g3(e12) }, outlineColor: { type: C.UNSIGNED_BYTE, count: 4, normalized: true, pack: ({ outlineColor: e12 }) => g3(e12) }, sizing: { type: C.UNSIGNED_BYTE, count: 4, pack: ({ rawWidth: e12, rawHeight: t4, outlineSize: r8, referenceSize: o10 }) => {
  const s14 = Math.max(e12, t4);
  return [d3(s14, 128), d3(r8, 128), d3(o10, 128), 0];
} }, placementAngle: { type: C.UNSIGNED_BYTE, count: 1, packTessellation: ({ placementAngle: e12 }) => v2(e12) }, sdfDecodeCoeff: { type: C.UNSIGNED_SHORT, count: 1, packPrecisionFactor: 64, pack: ({ sdfDecodeCoeff: e12 }) => e12 } } };
var I2 = class extends c4 {
  constructor() {
    super(...arguments), this.vertexSpec = _3;
  }
  getBoundsInfo() {
    return this.evaluatedMeshParams.boundsInfo;
  }
  _write(e12, t4, r8) {
    var _a;
    const o10 = (_a = this.evaluatedMeshParams.sprite) == null ? void 0 : _a.textureBinding, s14 = t4.getDisplayId();
    e12.recordStart(this.instanceId, this.attributeLayout, o10);
    const a11 = this.evaluatedMeshParams.minPixelBuffer, i14 = Math.max(this.evaluatedMeshParams.computedWidth, a11), c9 = Math.max(this.evaluatedMeshParams.computedHeight, a11), m7 = -this.evaluatedMeshParams.anchorX * this.evaluatedMeshParams.computedWidth, l9 = this.evaluatedMeshParams.anchorY * this.evaluatedMeshParams.computedHeight, d6 = this.evaluatedMeshParams.offsetX + m7, u7 = -this.evaluatedMeshParams.offsetY + l9;
    if (null != this.evaluatedMeshParams.placement) this._writePlacedMarkers(e12, t4, r8, i14, c9);
    else if (r8 == null ? void 0 : r8.nextPath()) {
      r8.nextPoint();
      const t5 = r8.x, o11 = r8.y;
      e12.recordBounds(t5 + d6, o11 + u7, i14, c9), this._writeQuad(e12, s14, t5, o11);
    } else if ("esriGeometryPolygon" === t4.geometryType) {
      const r9 = t4.readCentroidForDisplay();
      if (!r9) return;
      const [o11, a12] = r9.coords;
      e12.recordBounds(o11 + d6, a12 + u7, i14, c9), this._writeQuad(e12, s14, o11, a12);
    } else if ("esriGeometryPoint" === t4.geometryType) {
      const r9 = t4.readXForDisplay(), o11 = t4.readYForDisplay();
      e12.recordBounds(r9 + d6, o11 + u7, i14, c9), this._writeQuad(e12, s14, r9, o11);
    } else {
      const r9 = t4.readGeometryForDisplay();
      r9 == null ? void 0 : r9.forEachVertex((t5, r10) => {
        e12.recordBounds(t5 + d6, r10 + u7, i14, c9), Math.abs(t5) > e4 || Math.abs(r10) > e4 || this._writeQuad(e12, s14, t5, r10);
      });
    }
    e12.recordEnd();
  }
  _writePlacedMarkers(t4, r8, o10, s14, a11) {
    var _a;
    const c9 = o10 ?? ((_a = a2.fromFeatureSetReaderCIM(r8)) == null ? void 0 : _a.clone());
    if (!c9) return;
    const l9 = -1, d6 = e11.getPlacement(c9, l9, this.evaluatedMeshParams.placement, u(1), t4.id, t3());
    if (!d6) return;
    const u7 = r8.getDisplayId();
    let p7 = d6.next();
    const h9 = this.evaluatedMeshParams.offsetX, f6 = -this.evaluatedMeshParams.offsetY;
    for (; null != p7; ) {
      const e12 = p7.tx, r9 = -p7.ty;
      if (Math.abs(e12) > e4 || Math.abs(r9) > e4) {
        p7 = d6.next();
        continue;
      }
      const o11 = -p7.getAngle();
      t4.recordBounds(e12 + h9, r9 + f6, s14, a11), this._writeQuad(t4, u7, e12, r9, o11), p7 = d6.next();
    }
  }
  _writeQuad(e12, t4, r8, o10, s14) {
    const a11 = e12.vertexCount(), i14 = null == s14 ? null : { placementAngle: s14 };
    this._writeVertex(e12, t4, r8, o10, i14), e12.indexWrite(a11 + 0), e12.indexWrite(a11 + 1), e12.indexWrite(a11 + 2), e12.indexWrite(a11 + 1), e12.indexWrite(a11 + 3), e12.indexWrite(a11 + 2);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/pieChart/PieChartMeshWriter.js
var o9 = { createComputedParams: (e12) => e12, optionalAttributes: {}, attributes: { pos: { type: C.SHORT, count: 2, packPrecisionFactor: 10, pack: "position" }, id: { type: C.UNSIGNED_BYTE, count: 3, pack: "id" }, bitset: { type: C.UNSIGNED_BYTE, count: 1, pack: (e12) => 0 }, offset: { type: C.SHORT, count: 2, packPrecisionFactor: 16, packAlternating: { count: 4, pack: ({ size: t4 }) => {
  const r8 = u(t4), i14 = -r8 / 2, o10 = -r8 / 2;
  return [[i14, o10], [i14 + r8, o10], [i14, o10 + r8], [i14 + r8, o10 + r8]];
} } }, texCoords: { type: C.SHORT, count: 2, packPrecisionFactor: 4, packAlternating: { count: 4, pack: () => [[0, 1], [1, 1], [0, 0], [1, 0]] } }, size: { type: C.UNSIGNED_BYTE, count: 2, pack: ({ size: e12 }) => [e12, e12] }, referenceSize: { type: C.UNSIGNED_BYTE, count: 1, pack: ({ size: t4 }) => u(t4) }, zoomRange: { type: C.UNSIGNED_BYTE, count: 2, pack: ({ scaleInfo: e12 }, { tileInfo: r8 }) => m3(e12, r8) } } };
var s13 = class extends c4 {
  constructor() {
    super(...arguments), this.vertexSpec = o9;
  }
  _write(t4, r8) {
    const i14 = r8.getDisplayId(), o10 = this.evaluatedMeshParams.minPixelBuffer, s14 = Math.max(u(this.evaluatedMeshParams.size), o10);
    let c9, n12;
    if ("esriGeometryPoint" === r8.geometryType) c9 = r8.readXForDisplay(), n12 = r8.readYForDisplay();
    else {
      const e12 = r8.readCentroidForDisplay();
      if (!e12) return;
      c9 = e12 == null ? void 0 : e12.coords[0], n12 = e12 == null ? void 0 : e12.coords[1];
    }
    t4.recordStart(this.instanceId, this.attributeLayout), t4.recordBounds(c9, n12, s14, s14);
    const a11 = t4.vertexCount();
    this._writeVertex(t4, i14, c9, n12), t4.indexWrite(a11 + 0), t4.indexWrite(a11 + 1), t4.indexWrite(a11 + 2), t4.indexWrite(a11 + 1), t4.indexWrite(a11 + 3), t4.indexWrite(a11 + 2), t4.recordEnd();
  }
};

export {
  m3 as m,
  f3 as f,
  g3 as g,
  l3 as l,
  c4 as c,
  s8 as s,
  c5 as c2,
  o6 as o,
  h5 as h,
  T,
  h6 as h2,
  x4 as x,
  u5 as u,
  c8 as c3,
  i12 as i,
  P,
  N,
  l7 as l2,
  l8 as l3,
  I2 as I,
  s13 as s2
};
//# sourceMappingURL=chunk-OMCJ6PCE.js.map
