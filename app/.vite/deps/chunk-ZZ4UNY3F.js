// node_modules/@arcgis/core/chunks/earcut.js
function e(e2, t2, x2) {
  x2 = x2 || 2;
  var i2, u2, v2, y2, o2, p2, a2, l2 = t2 && t2.length, h2 = l2 ? t2[0] * x2 : e2.length, c2 = n(e2, 0, h2, x2, true), s2 = [];
  if (!c2 || c2.next === c2.prev) return s2;
  if (l2 && (c2 = f(e2, t2, c2, x2)), e2.length > 80 * x2) {
    i2 = v2 = e2[0], u2 = y2 = e2[1];
    for (var Z2 = x2; Z2 < h2; Z2 += x2) (o2 = e2[Z2]) < i2 && (i2 = o2), (p2 = e2[Z2 + 1]) < u2 && (u2 = p2), o2 > v2 && (v2 = o2), p2 > y2 && (y2 = p2);
    a2 = 0 !== (a2 = Math.max(v2 - i2, y2 - u2)) ? 1 / a2 : 0;
  }
  return r(c2, s2, x2, i2, u2, a2), s2;
}
function n(e2, n2, t2, r2, x2) {
  var i2, u2;
  if (x2 === E(e2, n2, t2, r2) > 0) for (i2 = n2; i2 < t2; i2 += r2) u2 = B(i2, e2[i2], e2[i2 + 1], u2);
  else for (i2 = t2 - r2; i2 >= n2; i2 -= r2) u2 = B(i2, e2[i2], e2[i2 + 1], u2);
  if (u2 && M(u2, u2.next)) {
    var v2 = u2.next;
    C(u2), u2 = v2;
  }
  return u2;
}
function t(e2, n2) {
  if (!e2) return e2;
  n2 || (n2 = e2);
  var t2, r2 = e2;
  do {
    if (t2 = false, r2.steiner || !M(r2, r2.next) && 0 !== w(r2.prev, r2, r2.next)) r2 = r2.next;
    else {
      var x2 = r2.prev;
      if (C(r2), (r2 = n2 = x2) === r2.next) break;
      t2 = true;
    }
  } while (t2 || r2 !== n2);
  return n2;
}
function r(e2, n2, f2, y2, o2, p2, a2) {
  if (e2) {
    !a2 && p2 && h(e2, y2, o2, p2);
    for (var l2, c2, s2 = e2; e2.prev !== e2.next; ) if (l2 = e2.prev, c2 = e2.next, p2 ? i(e2, y2, o2, p2) : x(e2)) n2.push(l2.i / f2), n2.push(e2.i / f2), n2.push(c2.i / f2), C(e2), e2 = c2.next, s2 = c2.next;
    else if ((e2 = c2) === s2) {
      a2 ? 1 === a2 ? r(e2 = u(t(e2), n2, f2), n2, f2, y2, o2, p2, 2) : 2 === a2 && v(e2, n2, f2, y2, o2, p2) : r(t(e2), n2, f2, y2, o2, p2, 1);
      break;
    }
  }
}
function x(e2) {
  var n2 = e2.prev, t2 = e2, r2 = e2.next;
  if (w(n2, t2, r2) >= 0) return false;
  for (var x2 = e2.next.next; x2 !== e2.prev; ) {
    if (g(n2.x, n2.y, t2.x, t2.y, r2.x, r2.y, x2.x, x2.y) && w(x2.prev, x2, x2.next) >= 0) return false;
    x2 = x2.next;
  }
  return true;
}
function i(e2, n2, t2, r2) {
  var x2 = e2.prev, i2 = e2, u2 = e2.next;
  if (w(x2, i2, u2) >= 0) return false;
  for (var v2 = x2.x < i2.x ? x2.x < u2.x ? x2.x : u2.x : i2.x < u2.x ? i2.x : u2.x, f2 = x2.y < i2.y ? x2.y < u2.y ? x2.y : u2.y : i2.y < u2.y ? i2.y : u2.y, y2 = x2.x > i2.x ? x2.x > u2.x ? x2.x : u2.x : i2.x > u2.x ? i2.x : u2.x, o2 = x2.y > i2.y ? x2.y > u2.y ? x2.y : u2.y : i2.y > u2.y ? i2.y : u2.y, p2 = s(v2, f2, n2, t2, r2), a2 = s(y2, o2, n2, t2, r2), l2 = e2.prevZ, h2 = e2.nextZ; l2 && l2.z >= p2 && h2 && h2.z <= a2; ) {
    if (l2 !== e2.prev && l2 !== e2.next && g(x2.x, x2.y, i2.x, i2.y, u2.x, u2.y, l2.x, l2.y) && w(l2.prev, l2, l2.next) >= 0) return false;
    if (l2 = l2.prevZ, h2 !== e2.prev && h2 !== e2.next && g(x2.x, x2.y, i2.x, i2.y, u2.x, u2.y, h2.x, h2.y) && w(h2.prev, h2, h2.next) >= 0) return false;
    h2 = h2.nextZ;
  }
  for (; l2 && l2.z >= p2; ) {
    if (l2 !== e2.prev && l2 !== e2.next && g(x2.x, x2.y, i2.x, i2.y, u2.x, u2.y, l2.x, l2.y) && w(l2.prev, l2, l2.next) >= 0) return false;
    l2 = l2.prevZ;
  }
  for (; h2 && h2.z <= a2; ) {
    if (h2 !== e2.prev && h2 !== e2.next && g(x2.x, x2.y, i2.x, i2.y, u2.x, u2.y, h2.x, h2.y) && w(h2.prev, h2, h2.next) >= 0) return false;
    h2 = h2.nextZ;
  }
  return true;
}
function u(e2, n2, r2) {
  var x2 = e2;
  do {
    var i2 = x2.prev, u2 = x2.next.next;
    !M(i2, u2) && z(i2, x2, x2.next, u2) && j(i2, u2) && j(u2, i2) && (n2.push(i2.i / r2), n2.push(x2.i / r2), n2.push(u2.i / r2), C(x2), C(x2.next), x2 = e2 = u2), x2 = x2.next;
  } while (x2 !== e2);
  return t(x2);
}
function v(e2, n2, x2, i2, u2, v2) {
  var f2 = e2;
  do {
    for (var y2 = f2.next.next; y2 !== f2.prev; ) {
      if (f2.i !== y2.i && d(f2, y2)) {
        var o2 = A(f2, y2);
        return f2 = t(f2, f2.next), o2 = t(o2, o2.next), r(f2, n2, x2, i2, u2, v2), void r(o2, n2, x2, i2, u2, v2);
      }
      y2 = y2.next;
    }
    f2 = f2.next;
  } while (f2 !== e2);
}
function f(e2, r2, x2, i2) {
  var u2, v2, f2, o2 = [];
  for (u2 = 0, v2 = r2.length; u2 < v2; u2++) (f2 = n(e2, r2[u2] * i2, u2 < v2 - 1 ? r2[u2 + 1] * i2 : e2.length, i2, false)) === f2.next && (f2.steiner = true), o2.push(Z(f2));
  for (o2.sort(y), u2 = 0; u2 < o2.length; u2++) x2 = t(x2 = p(o2[u2], x2), x2.next);
  return x2;
}
function y(e2, n2) {
  return e2.x - n2.x;
}
function o(e2) {
  if (e2.next.prev === e2) return e2;
  let n2 = e2;
  for (; ; ) {
    const t2 = n2.next;
    if (t2.prev === n2 || t2 === n2 || t2 === e2) break;
    n2 = t2;
  }
  return n2;
}
function p(e2, n2) {
  var r2 = a(e2, n2);
  if (!r2) return n2;
  var x2 = A(r2, e2), i2 = t(r2, r2.next);
  let u2 = o(x2);
  return t(u2, u2.next), i2 = o(i2), o(n2 === r2 ? i2 : n2);
}
function a(e2, n2) {
  var t2, r2 = n2, x2 = e2.x, i2 = e2.y, u2 = -1 / 0;
  do {
    if (i2 <= r2.y && i2 >= r2.next.y && r2.next.y !== r2.y) {
      var v2 = r2.x + (i2 - r2.y) * (r2.next.x - r2.x) / (r2.next.y - r2.y);
      if (v2 <= x2 && v2 > u2) {
        if (u2 = v2, v2 === x2) {
          if (i2 === r2.y) return r2;
          if (i2 === r2.next.y) return r2.next;
        }
        t2 = r2.x < r2.next.x ? r2 : r2.next;
      }
    }
    r2 = r2.next;
  } while (r2 !== n2);
  if (!t2) return null;
  if (x2 === u2) return t2;
  var f2, y2 = t2, o2 = t2.x, p2 = t2.y, a2 = 1 / 0;
  r2 = t2;
  do {
    x2 >= r2.x && r2.x >= o2 && x2 !== r2.x && g(i2 < p2 ? x2 : u2, i2, o2, p2, i2 < p2 ? u2 : x2, i2, r2.x, r2.y) && (f2 = Math.abs(i2 - r2.y) / (x2 - r2.x), j(r2, e2) && (f2 < a2 || f2 === a2 && (r2.x > t2.x || r2.x === t2.x && l(t2, r2))) && (t2 = r2, a2 = f2)), r2 = r2.next;
  } while (r2 !== y2);
  return t2;
}
function l(e2, n2) {
  return w(e2.prev, e2, n2.prev) < 0 && w(n2.next, e2, e2.next) < 0;
}
function h(e2, n2, t2, r2) {
  var x2 = e2;
  do {
    null === x2.z && (x2.z = s(x2.x, x2.y, n2, t2, r2)), x2.prevZ = x2.prev, x2.nextZ = x2.next, x2 = x2.next;
  } while (x2 !== e2);
  x2.prevZ.nextZ = null, x2.prevZ = null, c(x2);
}
function c(e2) {
  var n2, t2, r2, x2, i2, u2, v2, f2, y2 = 1;
  do {
    for (t2 = e2, e2 = null, i2 = null, u2 = 0; t2; ) {
      for (u2++, r2 = t2, v2 = 0, n2 = 0; n2 < y2 && (v2++, r2 = r2.nextZ); n2++) ;
      for (f2 = y2; v2 > 0 || f2 > 0 && r2; ) 0 !== v2 && (0 === f2 || !r2 || t2.z <= r2.z) ? (x2 = t2, t2 = t2.nextZ, v2--) : (x2 = r2, r2 = r2.nextZ, f2--), i2 ? i2.nextZ = x2 : e2 = x2, x2.prevZ = i2, i2 = x2;
      t2 = r2;
    }
    i2.nextZ = null, y2 *= 2;
  } while (u2 > 1);
  return e2;
}
function s(e2, n2, t2, r2, x2) {
  return (e2 = 1431655765 & ((e2 = 858993459 & ((e2 = 252645135 & ((e2 = 16711935 & ((e2 = 32767 * (e2 - t2) * x2) | e2 << 8)) | e2 << 4)) | e2 << 2)) | e2 << 1)) | (n2 = 1431655765 & ((n2 = 858993459 & ((n2 = 252645135 & ((n2 = 16711935 & ((n2 = 32767 * (n2 - r2) * x2) | n2 << 8)) | n2 << 4)) | n2 << 2)) | n2 << 1)) << 1;
}
function Z(e2) {
  var n2 = e2, t2 = e2;
  do {
    (n2.x < t2.x || n2.x === t2.x && n2.y < t2.y) && (t2 = n2), n2 = n2.next;
  } while (n2 !== e2);
  return t2;
}
function g(e2, n2, t2, r2, x2, i2, u2, v2) {
  return (x2 - u2) * (n2 - v2) - (e2 - u2) * (i2 - v2) >= 0 && (e2 - u2) * (r2 - v2) - (t2 - u2) * (n2 - v2) >= 0 && (t2 - u2) * (i2 - v2) - (x2 - u2) * (r2 - v2) >= 0;
}
function d(e2, n2) {
  return e2.next.i !== n2.i && e2.prev.i !== n2.i && !k(e2, n2) && (j(e2, n2) && j(n2, e2) && q(e2, n2) && (w(e2.prev, e2, n2.prev) || w(e2, n2.prev, n2)) || M(e2, n2) && w(e2.prev, e2, e2.next) > 0 && w(n2.prev, n2, n2.next) > 0);
}
function w(e2, n2, t2) {
  return (n2.y - e2.y) * (t2.x - n2.x) - (n2.x - e2.x) * (t2.y - n2.y);
}
function M(e2, n2) {
  return e2.x === n2.x && e2.y === n2.y;
}
function z(e2, n2, t2, r2) {
  var x2 = m(w(e2, n2, t2)), i2 = m(w(e2, n2, r2)), u2 = m(w(t2, r2, e2)), v2 = m(w(t2, r2, n2));
  return x2 !== i2 && u2 !== v2 || (!(0 !== x2 || !b(e2, t2, n2)) || (!(0 !== i2 || !b(e2, r2, n2)) || (!(0 !== u2 || !b(t2, e2, r2)) || !(0 !== v2 || !b(t2, n2, r2)))));
}
function b(e2, n2, t2) {
  return n2.x <= Math.max(e2.x, t2.x) && n2.x >= Math.min(e2.x, t2.x) && n2.y <= Math.max(e2.y, t2.y) && n2.y >= Math.min(e2.y, t2.y);
}
function m(e2) {
  return e2 > 0 ? 1 : e2 < 0 ? -1 : 0;
}
function k(e2, n2) {
  var t2 = e2;
  do {
    if (t2.i !== e2.i && t2.next.i !== e2.i && t2.i !== n2.i && t2.next.i !== n2.i && z(t2, t2.next, e2, n2)) return true;
    t2 = t2.next;
  } while (t2 !== e2);
  return false;
}
function j(e2, n2) {
  return w(e2.prev, e2, e2.next) < 0 ? w(e2, n2, e2.next) >= 0 && w(e2, e2.prev, n2) >= 0 : w(e2, n2, e2.prev) < 0 || w(e2, e2.next, n2) < 0;
}
function q(e2, n2) {
  var t2 = e2, r2 = false, x2 = (e2.x + n2.x) / 2, i2 = (e2.y + n2.y) / 2;
  do {
    t2.y > i2 != t2.next.y > i2 && t2.next.y !== t2.y && x2 < (t2.next.x - t2.x) * (i2 - t2.y) / (t2.next.y - t2.y) + t2.x && (r2 = !r2), t2 = t2.next;
  } while (t2 !== e2);
  return r2;
}
function A(e2, n2) {
  var t2 = new D(e2.i, e2.x, e2.y), r2 = new D(n2.i, n2.x, n2.y), x2 = e2.next, i2 = n2.prev;
  return e2.next = n2, n2.prev = e2, t2.next = x2, x2.prev = t2, r2.next = t2, t2.prev = r2, i2.next = r2, r2.prev = i2, r2;
}
function B(e2, n2, t2, r2) {
  var x2 = new D(e2, n2, t2);
  return r2 ? (x2.next = r2.next, x2.prev = r2, r2.next.prev = x2, r2.next = x2) : (x2.prev = x2, x2.next = x2), x2;
}
function C(e2) {
  e2.next.prev = e2.prev, e2.prev.next = e2.next, e2.prevZ && (e2.prevZ.nextZ = e2.nextZ), e2.nextZ && (e2.nextZ.prevZ = e2.prevZ);
}
function D(e2, n2, t2) {
  this.i = e2, this.x = n2, this.y = t2, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = false;
}
function E(e2, n2, t2, r2) {
  for (var x2 = 0, i2 = n2, u2 = t2 - r2; i2 < t2; i2 += r2) x2 += (e2[u2] - e2[i2]) * (e2[i2 + 1] + e2[u2 + 1]), u2 = i2;
  return x2;
}
e.deviation = function(e2, n2, t2, r2) {
  var x2 = n2 && n2.length, i2 = x2 ? n2[0] * t2 : e2.length, u2 = Math.abs(E(e2, 0, i2, t2));
  if (x2) for (var v2 = 0, f2 = n2.length; v2 < f2; v2++) {
    var y2 = n2[v2] * t2, o2 = v2 < f2 - 1 ? n2[v2 + 1] * t2 : e2.length;
    u2 -= Math.abs(E(e2, y2, o2, t2));
  }
  var p2 = 0;
  for (v2 = 0; v2 < r2.length; v2 += 3) {
    var a2 = r2[v2] * t2, l2 = r2[v2 + 1] * t2, h2 = r2[v2 + 2] * t2;
    p2 += Math.abs((e2[a2] - e2[h2]) * (e2[l2 + 1] - e2[a2 + 1]) - (e2[a2] - e2[l2]) * (e2[h2 + 1] - e2[a2 + 1]));
  }
  return 0 === u2 && 0 === p2 ? 0 : Math.abs((p2 - u2) / u2);
}, e.flatten = function(e2) {
  for (var n2 = e2[0][0].length, t2 = { vertices: [], holes: [], dimensions: n2 }, r2 = 0, x2 = 0; x2 < e2.length; x2++) {
    for (var i2 = 0; i2 < e2[x2].length; i2++) for (var u2 = 0; u2 < n2; u2++) t2.vertices.push(e2[x2][i2][u2]);
    x2 > 0 && (r2 += e2[x2 - 1].length, t2.holes.push(r2));
  }
  return t2;
};

export {
  e
};
//# sourceMappingURL=chunk-ZZ4UNY3F.js.map
