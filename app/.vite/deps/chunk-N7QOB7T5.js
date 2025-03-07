import {
  l
} from "./chunk-T57WVICI.js";

// node_modules/@arcgis/core/geometry/support/TileClipper.js
var t = 512;
var i;
var s;
!function(t2) {
  t2[t2.Unknown = 0] = "Unknown", t2[t2.Point = 1] = "Point", t2[t2.LineString = 2] = "LineString", t2[t2.Polygon = 3] = "Polygon";
}(i || (i = {}));
var h = class _h {
  constructor(t2, i3) {
    this.x = t2, this.y = i3;
  }
  clone() {
    return new _h(this.x, this.y);
  }
  equals(t2, i3) {
    return t2 === this.x && i3 === this.y;
  }
  isEqual(t2) {
    return t2.x === this.x && t2.y === this.y;
  }
  setCoords(t2, i3) {
    return this.x = t2, this.y = i3, this;
  }
  normalize() {
    const t2 = this.x, i3 = this.y, s3 = Math.sqrt(t2 * t2 + i3 * i3);
    return this.x /= s3, this.y /= s3, this;
  }
  rightPerpendicular() {
    const t2 = this.x;
    return this.x = this.y, this.y = -t2, this;
  }
  leftPerpendicular() {
    const t2 = this.x;
    return this.x = -this.y, this.y = t2, this;
  }
  move(t2, i3) {
    return this.x += t2, this.y += i3, this;
  }
  assign(t2) {
    return this.x = t2.x, this.y = t2.y, this;
  }
  assignAdd(t2, i3) {
    return this.x = t2.x + i3.x, this.y = t2.y + i3.y, this;
  }
  assignSub(t2, i3) {
    return this.x = t2.x - i3.x, this.y = t2.y - i3.y, this;
  }
  rotate(t2, i3) {
    const s3 = this.x, h3 = this.y;
    return this.x = s3 * t2 - h3 * i3, this.y = s3 * i3 + h3 * t2, this;
  }
  scale(t2) {
    return this.x *= t2, this.y *= t2, this;
  }
  length() {
    const t2 = this.x, i3 = this.y;
    return Math.sqrt(t2 * t2 + i3 * i3);
  }
  sub(t2) {
    return this.x -= t2.x, this.y -= t2.y, this;
  }
  add(t2) {
    return this.x += t2.x, this.y += t2.y, this;
  }
  static distance(t2, i3) {
    const s3 = i3.x - t2.x, h3 = i3.y - t2.y;
    return Math.sqrt(s3 * s3 + h3 * h3);
  }
  static add(t2, i3) {
    return new _h(t2.x + i3.x, t2.y + i3.y);
  }
  static sub(t2, i3) {
    return new _h(t2.x - i3.x, t2.y - i3.y);
  }
};
var n = class {
  constructor(t2, i3, s3) {
    this.ratio = t2, this.x = i3, this.y = s3;
  }
};
var e = class {
  constructor(i3, s3, h3, n2 = 8, e3 = 8) {
    this._lines = [], this._starts = [], this.validateTessellation = true, this._pixelRatio = n2, this._pixelMargin = e3, this._tileSize = t * n2, this._dz = i3, this._yPos = s3, this._xPos = h3;
  }
  setPixelMargin(t2) {
    t2 !== this._pixelMargin && (this._pixelMargin = t2, this.setExtent(this._extent));
  }
  setExtent(t2) {
    this._extent = t2, this._finalRatio = this._tileSize / t2 * (1 << this._dz);
    let i3 = this._pixelRatio * this._pixelMargin;
    i3 /= this._finalRatio;
    const s3 = t2 >> this._dz;
    i3 > s3 && (i3 = s3), this._margin = i3, this._xmin = s3 * this._xPos - i3, this._ymin = s3 * this._yPos - i3, this._xmax = this._xmin + s3 + 2 * i3, this._ymax = this._ymin + s3 + 2 * i3;
  }
  reset(t2) {
    this._type = t2, this._lines = [], this._starts = [], this._line = null, this._start = 0;
  }
  moveTo(t2, i3) {
    this._pushLine(), this._prevIsIn = this._isIn(t2, i3), this._moveTo(t2, i3, this._prevIsIn), this._prevPt = new h(t2, i3), this._firstPt = new h(t2, i3), this._dist = 0;
  }
  lineTo(t2, i3) {
    const s3 = this._isIn(t2, i3), e3 = new h(t2, i3), _2 = h.distance(this._prevPt, e3);
    let x3, l4, y2, a2, r2, o2, u2, m;
    if (s3) this._prevIsIn ? this._lineTo(t2, i3, true) : (x3 = this._prevPt, l4 = e3, y2 = this._intersect(l4, x3), this._start = this._dist + _2 * (1 - this._r), this._lineTo(y2.x, y2.y, true), this._lineTo(l4.x, l4.y, true));
    else if (this._prevIsIn) l4 = this._prevPt, x3 = e3, y2 = this._intersect(l4, x3), this._lineTo(y2.x, y2.y, true), this._lineTo(x3.x, x3.y, false);
    else {
      const t3 = this._prevPt, i4 = e3;
      if (t3.x <= this._xmin && i4.x <= this._xmin || t3.x >= this._xmax && i4.x >= this._xmax || t3.y <= this._ymin && i4.y <= this._ymin || t3.y >= this._ymax && i4.y >= this._ymax) this._lineTo(i4.x, i4.y, false);
      else {
        const s4 = [];
        if ((t3.x < this._xmin && i4.x > this._xmin || t3.x > this._xmin && i4.x < this._xmin) && (a2 = (this._xmin - t3.x) / (i4.x - t3.x), m = t3.y + a2 * (i4.y - t3.y), m <= this._ymin ? o2 = false : m >= this._ymax ? o2 = true : s4.push(new n(a2, this._xmin, m))), (t3.x < this._xmax && i4.x > this._xmax || t3.x > this._xmax && i4.x < this._xmax) && (a2 = (this._xmax - t3.x) / (i4.x - t3.x), m = t3.y + a2 * (i4.y - t3.y), m <= this._ymin ? o2 = false : m >= this._ymax ? o2 = true : s4.push(new n(a2, this._xmax, m))), (t3.y < this._ymin && i4.y > this._ymin || t3.y > this._ymin && i4.y < this._ymin) && (a2 = (this._ymin - t3.y) / (i4.y - t3.y), u2 = t3.x + a2 * (i4.x - t3.x), u2 <= this._xmin ? r2 = false : u2 >= this._xmax ? r2 = true : s4.push(new n(a2, u2, this._ymin))), (t3.y < this._ymax && i4.y > this._ymax || t3.y > this._ymax && i4.y < this._ymax) && (a2 = (this._ymax - t3.y) / (i4.y - t3.y), u2 = t3.x + a2 * (i4.x - t3.x), u2 <= this._xmin ? r2 = false : u2 >= this._xmax ? r2 = true : s4.push(new n(a2, u2, this._ymax))), 0 === s4.length) r2 ? o2 ? this._lineTo(this._xmax, this._ymax, true) : this._lineTo(this._xmax, this._ymin, true) : o2 ? this._lineTo(this._xmin, this._ymax, true) : this._lineTo(this._xmin, this._ymin, true);
        else if (s4.length > 1 && s4[0].ratio > s4[1].ratio) this._start = this._dist + _2 * s4[1].ratio, this._lineTo(s4[1].x, s4[1].y, true), this._lineTo(s4[0].x, s4[0].y, true);
        else {
          this._start = this._dist + _2 * s4[0].ratio;
          for (let t4 = 0; t4 < s4.length; t4++) this._lineTo(s4[t4].x, s4[t4].y, true);
        }
        this._lineTo(i4.x, i4.y, false);
      }
    }
    this._dist += _2, this._prevIsIn = s3, this._prevPt = e3;
  }
  close() {
    if (this._line.length > 2) {
      const t2 = this._firstPt, i3 = this._prevPt;
      t2.x === i3.x && t2.y === i3.y || this.lineTo(t2.x, t2.y);
      const s3 = this._line;
      let h3 = s3.length;
      for (; h3 >= 4 && (s3[0].x === s3[1].x && s3[0].x === s3[h3 - 2].x || s3[0].y === s3[1].y && s3[0].y === s3[h3 - 2].y); ) s3.pop(), s3[0].x = s3[h3 - 2].x, s3[0].y = s3[h3 - 2].y, --h3;
    }
  }
  result(t2 = true) {
    return this._pushLine(), 0 === this._lines.length ? null : (this._type === i.Polygon && t2 && x.simplify(this._tileSize, this._margin * this._finalRatio, this._lines), this._lines);
  }
  resultWithStarts() {
    if (this._type !== i.LineString) throw new Error("Only valid for lines");
    this._pushLine();
    const t2 = this._lines, s3 = t2.length;
    if (0 === s3) return null;
    const h3 = [];
    for (let i3 = 0; i3 < s3; i3++) h3.push({ line: t2[i3], start: this._starts[i3] || 0 });
    return h3;
  }
  _isIn(t2, i3) {
    return t2 >= this._xmin && t2 <= this._xmax && i3 >= this._ymin && i3 <= this._ymax;
  }
  _intersect(t2, i3) {
    let s3, n2, e3;
    if (i3.x >= this._xmin && i3.x <= this._xmax) n2 = i3.y <= this._ymin ? this._ymin : this._ymax, e3 = (n2 - t2.y) / (i3.y - t2.y), s3 = t2.x + e3 * (i3.x - t2.x);
    else if (i3.y >= this._ymin && i3.y <= this._ymax) s3 = i3.x <= this._xmin ? this._xmin : this._xmax, e3 = (s3 - t2.x) / (i3.x - t2.x), n2 = t2.y + e3 * (i3.y - t2.y);
    else {
      n2 = i3.y <= this._ymin ? this._ymin : this._ymax, s3 = i3.x <= this._xmin ? this._xmin : this._xmax;
      const h3 = (s3 - t2.x) / (i3.x - t2.x), _2 = (n2 - t2.y) / (i3.y - t2.y);
      h3 < _2 ? (e3 = h3, n2 = t2.y + h3 * (i3.y - t2.y)) : (e3 = _2, s3 = t2.x + _2 * (i3.x - t2.x));
    }
    return this._r = e3, new h(s3, n2);
  }
  _pushLine() {
    this._line && (this._type === i.Point ? this._line.length > 0 && (this._lines.push(this._line), this._starts.push(this._start)) : this._type === i.LineString ? this._line.length > 1 && (this._lines.push(this._line), this._starts.push(this._start)) : this._type === i.Polygon && this._line.length > 3 && (this._lines.push(this._line), this._starts.push(this._start))), this._line = [], this._start = 0;
  }
  _moveTo(t2, s3, n2) {
    this._type !== i.Polygon ? n2 && (t2 = Math.round((t2 - (this._xmin + this._margin)) * this._finalRatio), s3 = Math.round((s3 - (this._ymin + this._margin)) * this._finalRatio), this._line.push(new h(t2, s3))) : (n2 || (t2 < this._xmin && (t2 = this._xmin), t2 > this._xmax && (t2 = this._xmax), s3 < this._ymin && (s3 = this._ymin), s3 > this._ymax && (s3 = this._ymax)), t2 = Math.round((t2 - (this._xmin + this._margin)) * this._finalRatio), s3 = Math.round((s3 - (this._ymin + this._margin)) * this._finalRatio), this._line.push(new h(t2, s3)), this._isH = false, this._isV = false);
  }
  _lineTo(t2, s3, n2) {
    let e3, _2;
    if (this._type !== i.Polygon) if (n2) {
      if (t2 = Math.round((t2 - (this._xmin + this._margin)) * this._finalRatio), s3 = Math.round((s3 - (this._ymin + this._margin)) * this._finalRatio), this._line.length > 0 && (e3 = this._line[this._line.length - 1], e3.equals(t2, s3))) return;
      this._line.push(new h(t2, s3));
    } else this._line && this._line.length > 0 && this._pushLine();
    else if (n2 || (t2 < this._xmin && (t2 = this._xmin), t2 > this._xmax && (t2 = this._xmax), s3 < this._ymin && (s3 = this._ymin), s3 > this._ymax && (s3 = this._ymax)), t2 = Math.round((t2 - (this._xmin + this._margin)) * this._finalRatio), s3 = Math.round((s3 - (this._ymin + this._margin)) * this._finalRatio), this._line && this._line.length > 0) {
      e3 = this._line[this._line.length - 1];
      const i3 = e3.x === t2, n3 = e3.y === s3;
      if (i3 && n3) return;
      this._isH && i3 || this._isV && n3 ? (e3.x = t2, e3.y = s3, _2 = this._line[this._line.length - 2], _2.x === t2 && _2.y === s3 ? (this._line.pop(), this._line.length <= 1 ? (this._isH = false, this._isV = false) : (_2 = this._line[this._line.length - 2], this._isH = _2.x === t2, this._isV = _2.y === s3)) : (this._isH = _2.x === t2, this._isV = _2.y === s3)) : (this._line.push(new h(t2, s3)), this._isH = i3, this._isV = n3);
    } else this._line.push(new h(t2, s3));
  }
};
var _ = class {
  setExtent(t2) {
    this._ratio = 4096 === t2 ? 1 : 4096 / t2;
  }
  get validateTessellation() {
    return this._ratio < 1;
  }
  reset(t2) {
    this._lines = [], this._line = null;
  }
  moveTo(t2, i3) {
    this._line && this._lines.push(this._line), this._line = [];
    const s3 = this._ratio;
    this._line.push(new h(t2 * s3, i3 * s3));
  }
  lineTo(t2, i3) {
    const s3 = this._ratio;
    this._line.push(new h(t2 * s3, i3 * s3));
  }
  close() {
    const t2 = this._line;
    t2 && !t2[0].isEqual(t2[t2.length - 1]) && t2.push(t2[0]);
  }
  result() {
    return this._line && this._lines.push(this._line), 0 === this._lines.length ? null : this._lines;
  }
};
!function(t2) {
  t2[t2.sideLeft = 0] = "sideLeft", t2[t2.sideRight = 1] = "sideRight", t2[t2.sideTop = 2] = "sideTop", t2[t2.sideBottom = 3] = "sideBottom";
}(s || (s = {}));
var x = class _x {
  static simplify(t2, i3, h3) {
    if (!h3) return;
    const n2 = -i3, e3 = t2 + i3, _2 = -i3, l4 = t2 + i3, y2 = [], a2 = [], r2 = h3.length;
    for (let x3 = 0; x3 < r2; ++x3) {
      const t3 = h3[x3];
      if (!t3 || t3.length < 2) continue;
      let i4, r3 = t3[0];
      const o3 = t3.length;
      for (let h4 = 1; h4 < o3; ++h4) i4 = t3[h4], r3.x === i4.x && (r3.x <= n2 && (r3.y > i4.y ? (y2.push(x3), y2.push(h4), y2.push(s.sideLeft), y2.push(-1)) : (a2.push(x3), a2.push(h4), a2.push(s.sideLeft), a2.push(-1))), r3.x >= e3 && (r3.y < i4.y ? (y2.push(x3), y2.push(h4), y2.push(s.sideRight), y2.push(-1)) : (a2.push(x3), a2.push(h4), a2.push(s.sideRight), a2.push(-1)))), r3.y === i4.y && (r3.y <= _2 && (r3.x < i4.x ? (y2.push(x3), y2.push(h4), y2.push(s.sideTop), y2.push(-1)) : (a2.push(x3), a2.push(h4), a2.push(s.sideTop), a2.push(-1))), r3.y >= l4 && (r3.x > i4.x ? (y2.push(x3), y2.push(h4), y2.push(s.sideBottom), y2.push(-1)) : (a2.push(x3), a2.push(h4), a2.push(s.sideBottom), a2.push(-1)))), r3 = i4;
    }
    if (0 === y2.length || 0 === a2.length) return;
    _x.fillParent(h3, a2, y2), _x.fillParent(h3, y2, a2);
    const o2 = [];
    _x.calcDeltas(o2, a2, y2), _x.calcDeltas(o2, y2, a2), _x.addDeltas(o2, h3);
  }
  static fillParent(t2, i3, h3) {
    const n2 = h3.length, e3 = i3.length;
    for (let _2 = 0; _2 < e3; _2 += 4) {
      const e4 = i3[_2], x3 = i3[_2 + 1], y2 = i3[_2 + 2], a2 = t2[e4][x3 - 1], r2 = t2[e4][x3];
      let o2 = 8092, u2 = -1;
      for (let i4 = 0; i4 < n2; i4 += 4) {
        if (h3[i4 + 2] !== y2) continue;
        const n3 = h3[i4], e5 = h3[i4 + 1], _3 = t2[n3][e5 - 1], x4 = t2[n3][e5];
        switch (y2) {
          case s.sideLeft:
          case s.sideRight:
            if (l2(a2.y, _3.y, x4.y) && l2(r2.y, _3.y, x4.y)) {
              const t3 = Math.abs(x4.y - _3.y);
              t3 < o2 && (o2 = t3, u2 = i4);
            }
            break;
          case s.sideTop:
          case s.sideBottom:
            if (l2(a2.x, _3.x, x4.x) && l2(r2.x, _3.x, x4.x)) {
              const t3 = Math.abs(x4.x - _3.x);
              t3 < o2 && (o2 = t3, u2 = i4);
            }
        }
      }
      i3[_2 + 3] = u2;
    }
  }
  static calcDeltas(t2, i3, s3) {
    const h3 = i3.length;
    for (let n2 = 0; n2 < h3; n2 += 4) {
      const h4 = [], e3 = _x.calcDelta(n2, i3, s3, h4);
      t2.push(i3[n2]), t2.push(i3[n2 + 1]), t2.push(i3[n2 + 2]), t2.push(e3);
    }
  }
  static calcDelta(t2, i3, s3, h3) {
    const n2 = i3[t2 + 3];
    if (-1 === n2) return 0;
    const e3 = h3.length;
    return e3 > 1 && h3[e3 - 2] === n2 ? 0 : (h3.push(n2), _x.calcDelta(n2, s3, i3, h3) + 1);
  }
  static addDeltas(t2, i3) {
    const h3 = t2.length;
    let n2 = 0;
    for (let s3 = 0; s3 < h3; s3 += 4) {
      const i4 = t2[s3 + 3];
      i4 > n2 && (n2 = i4);
    }
    for (let e3 = 0; e3 < h3; e3 += 4) {
      const h4 = i3[t2[e3]], _2 = t2[e3 + 1], x3 = n2 - t2[e3 + 3];
      switch (t2[e3 + 2]) {
        case s.sideLeft:
          h4[_2 - 1].x -= x3, h4[_2].x -= x3, 1 === _2 && (h4[h4.length - 1].x -= x3), _2 === h4.length - 1 && (h4[0].x -= x3);
          break;
        case s.sideRight:
          h4[_2 - 1].x += x3, h4[_2].x += x3, 1 === _2 && (h4[h4.length - 1].x += x3), _2 === h4.length - 1 && (h4[0].x += x3);
          break;
        case s.sideTop:
          h4[_2 - 1].y -= x3, h4[_2].y -= x3, 1 === _2 && (h4[h4.length - 1].y -= x3), _2 === h4.length - 1 && (h4[0].y -= x3);
          break;
        case s.sideBottom:
          h4[_2 - 1].y += x3, h4[_2].y += x3, 1 === _2 && (h4[h4.length - 1].y += x3), _2 === h4.length - 1 && (h4[0].y += x3);
      }
    }
  }
};
var l2 = (t2, i3, s3) => t2 >= i3 && t2 <= s3 || t2 >= s3 && t2 <= i3;

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/GeometryUtils.js
var r = Number.POSITIVE_INFINITY;
var o = Math.PI;
var e2 = 2 * o;
var i2 = 128 / o;
var u = 256 / 360;
var s2 = o / 180;
var c = 1 / Math.LN2;
function a(t2, n2) {
  return (t2 %= n2) >= 0 ? t2 : t2 + n2;
}
function f(t2) {
  return a(t2 * i2, 256);
}
function l3(t2) {
  return a(t2 * u, 256);
}
function h2(t2) {
  return Math.log(t2) * c;
}
function p(t2, n2, r2) {
  return t2 * (1 - r2) + n2 * r2;
}
var x2 = 8;
var y = 14;
var M = 16;
function d(t2) {
  return x2 + Math.max((t2 - y) * M, 0);
}
function I(t2, n2, r2) {
  let o2, e3, i3, u2 = 0;
  for (const s3 of r2) {
    o2 = s3.length;
    for (let r3 = 1; r3 < o2; ++r3) {
      if (e3 = s3[r3 - 1], i3 = s3[r3], e3.y > n2 == i3.y > n2) continue;
      (i3.x - e3.x) * (n2 - e3.y) - (i3.y - e3.y) * (t2 - e3.x) > 0 ? u2++ : u2--;
    }
  }
  return 0 !== u2;
}
function N(n2, r2, o2, e3) {
  let i3, u2, s3, c2;
  const a2 = e3 * e3;
  for (const f2 of o2) {
    const o3 = f2.length;
    if (!(o3 < 2)) {
      i3 = f2[0].x, u2 = f2[0].y;
      for (let e4 = 1; e4 < o3; ++e4) {
        if (s3 = f2[e4].x, c2 = f2[e4].y, l(n2, r2, i3, u2, s3, c2) < a2) return true;
        i3 = s3, u2 = c2;
      }
    }
  }
  return false;
}
function w(t2, n2, r2, o2, e3, i3, u2) {
  const s3 = Math.max(o2, Math.min(n2, i3)) - n2, c2 = Math.max(e3, Math.min(r2, u2)) - r2;
  return s3 * s3 + c2 * c2 <= t2 * t2;
}
function P(t2, r2) {
  if (0 === r2 || Number.isNaN(r2)) return t2;
  const o2 = [], e3 = new h(0, 0), i3 = new h(0, 0), u2 = new h(0, 0);
  for (let s3 = 0; s3 < t2.length; s3++) {
    const c2 = t2[s3], a2 = [];
    for (let t3 = 0; t3 < c2.length; t3++) {
      const o3 = c2[t3 - 1], s4 = c2[t3], f2 = c2[t3 + 1];
      0 === t3 ? e3.setCoords(0, 0) : e3.assignSub(s4, o3).normalize().rightPerpendicular(), t3 === c2.length - 1 ? i3.setCoords(0, 0) : i3.assignSub(f2, s4).normalize().rightPerpendicular(), u2.assignAdd(e3, i3).normalize();
      const l4 = u2.x * i3.x + u2.y * i3.y;
      0 !== l4 && u2.scale(1 / l4), a2.push(h.add(s4, u2.scale(r2)));
    }
    o2.push(a2);
  }
  return o2;
}
function b(t2, r2, o2, e3) {
  const i3 = new h(t2[0], t2[1]);
  if (i3.scale(e3), "viewport" === r2) {
    const t3 = -o2 * (Math.PI / 180), n2 = Math.cos(t3), r3 = Math.sin(t3);
    i3.rotate(n2, r3);
  }
  return i3;
}

export {
  i,
  h,
  e,
  _,
  r,
  o,
  e2,
  s2 as s,
  a,
  f,
  l3 as l,
  h2,
  p,
  d,
  I,
  N,
  w,
  P,
  b
};
//# sourceMappingURL=chunk-N7QOB7T5.js.map
