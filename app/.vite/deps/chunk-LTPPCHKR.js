import {
  i,
  r,
  s as s2
} from "./chunk-4TZUFQZG.js";
import {
  l,
  m,
  s,
  u as u2,
  y
} from "./chunk-WZBMMIVS.js";
import {
  g
} from "./chunk-T57WVICI.js";
import {
  a
} from "./chunk-W633AKTD.js";
import {
  u
} from "./chunk-G34KEQQG.js";
import {
  O2 as O,
  d
} from "./chunk-LTDNORB5.js";
import {
  S
} from "./chunk-5BULKNR2.js";

// node_modules/@arcgis/core/geometry/support/normalizeUtilsSync.js
function p(t) {
  return f(t, true);
}
function a2(t) {
  return f(t, false);
}
function f(i2, n) {
  if (null == i2) return null;
  const p2 = i2.spatialReference, a3 = d(p2), f2 = S.isSerializable(i2) ? i2.toJSON() : i2;
  if (!a3) return f2;
  const I2 = O(p2) ? 102100 : 4326, g3 = r[I2].maxX, v2 = r[I2].minX;
  if (l(f2)) return y2(f2, g3, v2);
  if (u2(f2)) return f2.points = f2.points.map((t) => y2(t, g3, v2)), f2;
  if (m(f2)) return d2(f2, a3);
  if (y(f2) || s(f2)) {
    const t = a(S2, f2), i3 = { xmin: t[0], ymin: t[1], xmax: t[2], ymax: t[3] }, e = i(i3.xmin, v2) * (2 * g3), h = 0 === e ? f2 : s2(f2, e);
    return i3.xmin += e, i3.xmax += e, i3.xmax > g3 ? C(h, g3, n) : i3.xmin < v2 ? C(h, v2, n) : h;
  }
  return f2;
}
function d2(t, i2) {
  if (!i2) return t;
  const s3 = I(t, i2).map((t2) => t2.extent);
  return s3.length < 2 ? s3[0] || t : s3.length > 2 ? (t.xmin = i2.valid[0], t.xmax = i2.valid[1], t) : { rings: s3.map((t2) => [[t2.xmin, t2.ymin], [t2.xmin, t2.ymax], [t2.xmax, t2.ymax], [t2.xmax, t2.ymin], [t2.xmin, t2.ymin]]) };
}
function y2(t, i2, s3) {
  if (Array.isArray(t)) {
    const n = t[0];
    if (n > i2) {
      const s4 = i(n, i2);
      t[0] = n + s4 * (-2 * i2);
    } else if (n < s3) {
      const i3 = i(n, s3);
      t[0] = n + i3 * (-2 * s3);
    }
  } else {
    const n = t.x;
    if (n > i2) {
      const s4 = i(n, i2);
      t.x += s4 * (-2 * i2);
    } else if (n < s3) {
      const i3 = i(n, s3);
      t.x += i3 * (-2 * s3);
    }
  }
  return t;
}
function I(t, i2) {
  const s3 = [], { ymin: n, ymax: e, xmin: h, xmax: o } = t, r2 = t.xmax - t.xmin, [u3, m2] = i2.valid, { x: l2, frameId: x } = g2(t.xmin, i2), { x: _, frameId: c } = g2(t.xmax, i2), p2 = l2 === _ && r2 > 0;
  if (r2 > 2 * m2) {
    const t2 = { xmin: h < o ? l2 : _, ymin: n, xmax: m2, ymax: e }, i3 = { xmin: u3, ymin: n, xmax: h < o ? _ : l2, ymax: e }, r3 = { xmin: 0, ymin: n, xmax: m2, ymax: e }, p3 = { xmin: u3, ymin: n, xmax: 0, ymax: e }, a3 = [], f2 = [];
    v(t2, r3) && a3.push(x), v(t2, p3) && f2.push(x), v(i3, r3) && a3.push(c), v(i3, p3) && f2.push(c);
    for (let s4 = x + 1; s4 < c; s4++) a3.push(s4), f2.push(s4);
    s3.push(new P(t2, [x]), new P(i3, [c]), new P(r3, a3), new P(p3, f2));
  } else l2 > _ || p2 ? s3.push(new P({ xmin: l2, ymin: n, xmax: m2, ymax: e }, [x]), new P({ xmin: u3, ymin: n, xmax: _, ymax: e }, [c])) : s3.push(new P({ xmin: l2, ymin: n, xmax: _, ymax: e }, [x]));
  return s3;
}
function g2(t, i2) {
  const [s3, n] = i2.valid, e = 2 * n;
  let h, o = 0;
  return t > n ? (h = Math.ceil(Math.abs(t - n) / e), t -= h * e, o = h) : t < s3 && (h = Math.ceil(Math.abs(t - s3) / e), t += h * e, o = -h), { x: t, frameId: o };
}
function v(t, i2) {
  const { xmin: s3, ymin: n, xmax: e, ymax: h } = i2;
  return O2(t, s3, n) && O2(t, s3, h) && O2(t, e, h) && O2(t, e, n);
}
function O2(t, i2, s3) {
  return i2 >= t.xmin && i2 <= t.xmax && s3 >= t.ymin && s3 <= t.ymax;
}
function C(t, i2, s3 = true) {
  const e = !s(t);
  if (e && g(t), s3) {
    return new T().cut(t, i2);
  }
  const h = e ? t.rings : t.paths, o = e ? 4 : 2, r2 = h.length, m2 = -2 * i2;
  for (let n = 0; n < r2; n++) {
    const t2 = h[n];
    if (t2 && t2.length >= o) {
      const i3 = [];
      for (const s4 of t2) i3.push([s4[0] + m2, s4[1]]);
      h.push(i3);
    }
  }
  return e ? t.rings = h : t.paths = h, t;
}
var P = class {
  constructor(t, i2) {
    this.extent = t, this.frameIds = i2;
  }
};
var S2 = u();
var T = class {
  constructor() {
    this._linesIn = [], this._linesOut = [];
  }
  cut(t, i2) {
    let s3;
    if (this._xCut = i2, t.rings) this._closed = true, s3 = t.rings, this._minPts = 4;
    else {
      if (!t.paths) return null;
      this._closed = false, s3 = t.paths, this._minPts = 2;
    }
    for (const e of s3) {
      if (!e || e.length < this._minPts) continue;
      let t2 = true;
      for (const i3 of e) t2 ? (this.moveTo(i3), t2 = false) : this.lineTo(i3);
      this._closed && this.close();
    }
    this._pushLineIn(), this._pushLineOut(), s3 = [];
    for (const e of this._linesIn) e && e.length >= this._minPts && s3.push(e);
    const n = -2 * this._xCut;
    for (const e of this._linesOut) if (e && e.length >= this._minPts) {
      for (const t2 of e) t2[0] += n;
      s3.push(e);
    }
    return this._closed ? t.rings = s3 : t.paths = s3, t;
  }
  moveTo(t) {
    this._pushLineIn(), this._pushLineOut(), this._prevSide = this._side(t[0]), this._moveTo(t[0], t[1], this._prevSide), this._prevPt = t, this._firstPt = t;
  }
  lineTo(t) {
    const i2 = this._side(t[0]);
    if (i2 * this._prevSide == -1) {
      const s3 = this._intersect(this._prevPt, t);
      this._lineTo(this._xCut, s3, 0), this._prevSide = 0, this._lineTo(t[0], t[1], i2);
    } else this._lineTo(t[0], t[1], i2);
    this._prevSide = i2, this._prevPt = t;
  }
  close() {
    const t = this._firstPt, i2 = this._prevPt;
    t[0] === i2[0] && t[1] === i2[1] || this.lineTo(t), this._checkClosingPt(this._lineIn), this._checkClosingPt(this._lineOut);
  }
  _moveTo(t, i2, s3) {
    this._closed ? (this._lineIn.push([s3 <= 0 ? t : this._xCut, i2]), this._lineOut.push([s3 >= 0 ? t : this._xCut, i2])) : (s3 <= 0 && this._lineIn.push([t, i2]), s3 >= 0 && this._lineOut.push([t, i2]));
  }
  _lineTo(t, i2, s3) {
    this._closed ? (j(this._lineIn, s3 <= 0 ? t : this._xCut, i2), j(this._lineOut, s3 >= 0 ? t : this._xCut, i2)) : s3 < 0 ? (0 === this._prevSide && this._pushLineOut(), this._lineIn.push([t, i2])) : s3 > 0 ? (0 === this._prevSide && this._pushLineIn(), this._lineOut.push([t, i2])) : this._prevSide < 0 ? (this._lineIn.push([t, i2]), this._lineOut.push([t, i2])) : this._prevSide > 0 && (this._lineOut.push([t, i2]), this._lineIn.push([t, i2]));
  }
  _checkClosingPt(t) {
    const i2 = t.length;
    i2 > 3 && t[0][0] === this._xCut && t[i2 - 2][0] === this._xCut && t[1][0] === this._xCut && (t[0][1] = t[i2 - 2][1], t.pop());
  }
  _side(t) {
    return t < this._xCut ? -1 : t > this._xCut ? 1 : 0;
  }
  _intersect(t, i2) {
    const s3 = (this._xCut - t[0]) / (i2[0] - t[0]);
    return t[1] + s3 * (i2[1] - t[1]);
  }
  _pushLineIn() {
    this._lineIn && this._lineIn.length >= this._minPts && this._linesIn.push(this._lineIn), this._lineIn = [];
  }
  _pushLineOut() {
    this._lineOut && this._lineOut.length >= this._minPts && this._linesOut.push(this._lineOut), this._lineOut = [];
  }
};
function j(t, i2, s3) {
  const n = t.length;
  n > 1 && t[n - 1][0] === i2 && t[n - 2][0] === i2 ? t[n - 1][1] = s3 : t.push([i2, s3]);
}

export {
  p,
  a2 as a
};
//# sourceMappingURL=chunk-LTPPCHKR.js.map
