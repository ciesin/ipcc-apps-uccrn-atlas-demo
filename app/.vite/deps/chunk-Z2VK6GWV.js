import {
  R
} from "./chunk-ANT4QPJQ.js";
import {
  e,
  n as n2
} from "./chunk-ZH6PYRVF.js";
import {
  n
} from "./chunk-7AOPU62X.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/TurboLine.js
function x(t, e3) {
  return t.x === e3.x && t.y === e3.y;
}
function r(t) {
  if (!t) return;
  const e3 = t.length;
  if (e3 <= 1) return;
  let i2 = 0;
  for (let r3 = 1; r3 < e3; r3++) x(t[r3], t[i2]) || ++i2 === r3 || (t[i2] = t[r3]);
  t.length = i2 + 1;
}
function n3(t, e3) {
  return t.x = e3.y, t.y = -e3.x, t;
}
function s(t, e3) {
  return t.x = -e3.y, t.y = e3.x, t;
}
function y(t, e3) {
  return t.x = e3.x, t.y = e3.y, t;
}
function o(t, e3) {
  return t.x = -e3.x, t.y = -e3.y, t;
}
function h(t) {
  return Math.sqrt(t.x * t.x + t.y * t.y);
}
function l(t, e3) {
  return t.x * e3.y - t.y * e3.x;
}
function _(t, e3) {
  return t.x * e3.x + t.y * e3.y;
}
function a(t, e3, i2, x2) {
  return t.x = e3.x * i2 + e3.y * x2, t.y = e3.x * x2 - e3.y * i2, t;
}
var c = class {
  constructor(t, e3, i2) {
    this._writeVertex = t, this._writeTriangle = e3, this._canUseThinTessellation = i2, this._prevNormal = { x: void 0, y: void 0 }, this._nextNormal = { x: void 0, y: void 0 }, this._textureNormalLeft = { x: 0, y: 1 }, this._textureNormalRight = { x: 0, y: -1 }, this._textureNormal = { x: void 0, y: void 0 }, this._joinNormal = { x: void 0, y: void 0 }, this._inner = { x: void 0, y: void 0 }, this._outer = { x: void 0, y: void 0 }, this._roundStart = { x: void 0, y: void 0 }, this._roundEnd = { x: void 0, y: void 0 }, this._startBreak = { x: void 0, y: void 0 }, this._endBreak = { x: void 0, y: void 0 }, this._innerPrev = { x: void 0, y: void 0 }, this._innerNext = { x: void 0, y: void 0 }, this._bevelStart = { x: void 0, y: void 0 }, this._bevelEnd = { x: void 0, y: void 0 }, this._bevelMiddle = { x: void 0, y: void 0 };
  }
  tessellate(t, e3, x2 = this._canUseThinTessellation) {
    r(t), x2 && e3.halfWidth < R && !e3.offset ? this._tessellateThin(t, e3) : this._tessellate(t, e3);
  }
  _tessellateThin(t, e3) {
    if (t.length < 2) return;
    const i2 = e3.wrapDistance || 65535;
    let x2 = e3.initialDistance || 0, r3 = false, n5 = t[0].x, s3 = t[0].y;
    const y2 = t.length;
    for (let o2 = 1; o2 < y2; ++o2) {
      r3 && (r3 = false, x2 = 0);
      let e4 = t[o2].x, y3 = t[o2].y, h2 = e4 - n5, l2 = y3 - s3, _2 = Math.sqrt(h2 * h2 + l2 * l2);
      if (h2 /= _2, l2 /= _2, x2 + _2 > i2) {
        r3 = true;
        const t2 = (i2 - x2) / _2;
        _2 = i2 - x2, e4 = (1 - t2) * n5 + t2 * e4, y3 = (1 - t2) * s3 + t2 * y3, --o2;
      }
      const a3 = this._writeVertex(n5, s3, 0, 0, h2, l2, l2, -h2, 0, -1, x2), c2 = this._writeVertex(n5, s3, 0, 0, h2, l2, -l2, h2, 0, 1, x2);
      x2 += _2;
      const d = this._writeVertex(e4, y3, 0, 0, h2, l2, l2, -h2, 0, -1, x2), u = this._writeVertex(e4, y3, 0, 0, h2, l2, -l2, h2, 0, 1, x2);
      this._writeTriangle(a3, c2, d), this._writeTriangle(c2, d, u), n5 = e4, s3 = y3;
    }
  }
  _tessellate(i2, r3) {
    const c2 = i2[0], d = i2[i2.length - 1], u = x(c2, d), v = u ? 3 : 2;
    if (i2.length < v) return;
    const f = r3.pixelCoordRatio, w = null != r3.capType ? r3.capType : e.BUTT, T = null != r3.joinType ? r3.joinType : n2.MITER, g = null != r3.miterLimit ? Math.min(r3.miterLimit, 4) : 2, m = null != r3.roundLimit ? Math.min(r3.roundLimit, 1.05) : 1.05, V = null != r3.halfWidth ? r3.halfWidth : 2, N = !!r3.textured;
    let E, b, R2, U = null;
    const k = this._prevNormal, p = this._nextNormal;
    let M = -1, B = -1;
    const L = this._joinNormal;
    let D, S;
    const j = this._textureNormalLeft, A = this._textureNormalRight, O = this._textureNormal;
    let I = -1, P = -1;
    const W = r3.wrapDistance || 65535;
    let q = r3.initialDistance || 0;
    const Q = this._writeVertex, X = this._writeTriangle, C = (t, e3, i3, x2, r4, n5) => {
      const s3 = Q(b, R2, D, S, i3, x2, t, e3, r4, n5, q);
      return I >= 0 && P >= 0 && s3 >= 0 && X(I, P, s3), I = P, P = s3, s3;
    };
    u && (E = i2[i2.length - 2], p.x = d.x - E.x, p.y = d.y - E.y, B = h(p), p.x /= B, p.y /= B);
    let z = false;
    for (let x2 = 0; x2 < i2.length; ++x2) {
      if (z && (z = false, q = 0), E && (k.x = -p.x, k.y = -p.y, M = B, q + M > W && (z = true)), z) {
        const t = (W - q) / M;
        M = W - q, E = { x: (1 - t) * E.x + t * i2[x2].x, y: (1 - t) * E.y + t * i2[x2].y }, --x2;
      } else E = i2[x2];
      b = E.x, R2 = E.y;
      const r4 = x2 <= 0 && !z, c3 = x2 === i2.length - 1;
      if (r4 || (q += M), U = c3 ? u ? i2[1] : null : i2[x2 + 1], U ? (p.x = U.x - b, p.y = U.y - R2, B = h(p), p.x /= B, p.y /= B) : (p.x = void 0, p.y = void 0), !u) {
        if (r4) {
          s(L, p), D = L.x, S = L.y, w === e.SQUARE && (C(-p.y - p.x, p.x - p.y, p.x, p.y, 0, -1), C(p.y - p.x, -p.x - p.y, p.x, p.y, 0, 1)), w === e.ROUND && (C(-p.y - p.x, p.x - p.y, p.x, p.y, -1, -1), C(p.y - p.x, -p.x - p.y, p.x, p.y, -1, 1)), w !== e.ROUND && w !== e.BUTT || (C(-p.y, p.x, p.x, p.y, 0, -1), C(p.y, -p.x, p.x, p.y, 0, 1));
          continue;
        }
        if (c3) {
          n3(L, k), D = L.x, S = L.y, w !== e.ROUND && w !== e.BUTT || (C(k.y, -k.x, -k.x, -k.y, 0, -1), C(-k.y, k.x, -k.x, -k.y, 0, 1)), w === e.SQUARE && (C(k.y - k.x, -k.x - k.y, -k.x, -k.y, 0, -1), C(-k.y - k.x, k.x - k.y, -k.x, -k.y, 0, 1)), w === e.ROUND && (C(k.y - k.x, -k.x - k.y, -k.x, -k.y, 1, -1), C(-k.y - k.x, k.x - k.y, -k.x, -k.y, 1, 1));
          continue;
        }
      }
      let d2, v2, Q2 = -l(k, p);
      if (Math.abs(Q2) < 0.01) _(k, p) > 0 ? (L.x = k.x, L.y = k.y, Q2 = 1, d2 = Number.MAX_VALUE, v2 = true) : (s(L, p), Q2 = 1, d2 = 1, v2 = false);
      else {
        L.x = (k.x + p.x) / Q2, L.y = (k.y + p.y) / Q2, d2 = h(L);
        const t = (d2 - 1) * V * f;
        v2 = d2 > 4 || t > M && t > B;
      }
      D = L.x, S = L.y;
      let X2 = T;
      switch (T) {
        case n2.BEVEL:
          d2 < 1.05 && (X2 = n2.MITER);
          break;
        case n2.ROUND:
          d2 < m && (X2 = n2.MITER);
          break;
        case n2.MITER:
          d2 > g && (X2 = n2.BEVEL);
      }
      switch (X2) {
        case n2.MITER:
          if (C(L.x, L.y, -k.x, -k.y, 0, -1), C(-L.x, -L.y, -k.x, -k.y, 0, 1), c3) break;
          if (N) {
            const t = z ? 0 : q;
            I = this._writeVertex(b, R2, D, S, p.x, p.y, L.x, L.y, 0, -1, t), P = this._writeVertex(b, R2, D, S, p.x, p.y, -L.x, -L.y, 0, 1, t);
          }
          break;
        case n2.BEVEL: {
          const t = Q2 < 0;
          let e3, i3, x3, r5;
          if (t) {
            const t2 = I;
            I = P, P = t2, e3 = j, i3 = A;
          } else e3 = A, i3 = j;
          if (v2) x3 = t ? s(this._innerPrev, k) : n3(this._innerPrev, k), r5 = t ? n3(this._innerNext, p) : s(this._innerNext, p);
          else {
            const e4 = t ? o(this._inner, L) : y(this._inner, L);
            x3 = e4, r5 = e4;
          }
          const h2 = t ? n3(this._bevelStart, k) : s(this._bevelStart, k);
          C(x3.x, x3.y, -k.x, -k.y, e3.x, e3.y);
          const l2 = C(h2.x, h2.y, -k.x, -k.y, i3.x, i3.y);
          if (c3) break;
          const _2 = t ? s(this._bevelEnd, p) : n3(this._bevelEnd, p);
          if (v2) {
            const t2 = this._writeVertex(b, R2, D, S, -k.x, -k.y, 0, 0, 0, 0, q);
            I = this._writeVertex(b, R2, D, S, p.x, p.y, r5.x, r5.y, e3.x, e3.y, q), P = this._writeVertex(b, R2, D, S, p.x, p.y, _2.x, _2.y, i3.x, i3.y, q), this._writeTriangle(l2, t2, P);
          } else {
            if (N) {
              const t2 = this._bevelMiddle;
              t2.x = (h2.x + _2.x) / 2, t2.y = (h2.y + _2.y) / 2, a(O, t2, -k.x, -k.y), C(t2.x, t2.y, -k.x, -k.y, O.x, O.y), a(O, t2, p.x, p.y), I = this._writeVertex(b, R2, D, S, p.x, p.y, t2.x, t2.y, O.x, O.y, q), P = this._writeVertex(b, R2, D, S, p.x, p.y, r5.x, r5.y, e3.x, e3.y, q);
            } else {
              const t2 = I;
              I = P, P = t2;
            }
            C(_2.x, _2.y, p.x, p.y, i3.x, i3.y);
          }
          if (t) {
            const t2 = I;
            I = P, P = t2;
          }
          break;
        }
        case n2.ROUND: {
          const t = Q2 < 0;
          let e3, i3;
          if (t) {
            const t2 = I;
            I = P, P = t2, e3 = j, i3 = A;
          } else e3 = A, i3 = j;
          const x3 = t ? o(this._inner, L) : y(this._inner, L);
          let r5, h2;
          v2 ? (r5 = t ? s(this._innerPrev, k) : n3(this._innerPrev, k), h2 = t ? n3(this._innerNext, p) : s(this._innerNext, p)) : (r5 = x3, h2 = x3);
          const l2 = t ? n3(this._roundStart, k) : s(this._roundStart, k), u2 = t ? s(this._roundEnd, p) : n3(this._roundEnd, p), f2 = C(r5.x, r5.y, -k.x, -k.y, e3.x, e3.y), w2 = C(l2.x, l2.y, -k.x, -k.y, i3.x, i3.y);
          if (c3) break;
          const T2 = this._writeVertex(b, R2, D, S, -k.x, -k.y, 0, 0, 0, 0, q);
          v2 || this._writeTriangle(I, P, T2);
          const g2 = o(this._outer, x3), m2 = this._writeVertex(b, R2, D, S, p.x, p.y, u2.x, u2.y, i3.x, i3.y, q);
          let V2, E2;
          const U2 = d2 > 2;
          if (U2) {
            let e4;
            d2 !== Number.MAX_VALUE ? (g2.x /= d2, g2.y /= d2, e4 = _(k, g2), e4 = (d2 * (e4 * e4 - 1) + 1) / e4) : e4 = -1, V2 = t ? n3(this._startBreak, k) : s(this._startBreak, k), V2.x += k.x * e4, V2.y += k.y * e4, E2 = t ? s(this._endBreak, p) : n3(this._endBreak, p), E2.x += p.x * e4, E2.y += p.y * e4;
          }
          a(O, g2, -k.x, -k.y);
          const M2 = this._writeVertex(b, R2, D, S, -k.x, -k.y, g2.x, g2.y, O.x, O.y, q);
          a(O, g2, p.x, p.y);
          const B2 = N ? this._writeVertex(b, R2, D, S, p.x, p.y, g2.x, g2.y, O.x, O.y, q) : M2, W2 = T2, X3 = N ? this._writeVertex(b, R2, D, S, p.x, p.y, 0, 0, 0, 0, q) : T2;
          let z2 = -1, F = -1;
          if (U2 && (a(O, V2, -k.x, -k.y), z2 = this._writeVertex(b, R2, D, S, -k.x, -k.y, V2.x, V2.y, O.x, O.y, q), a(O, E2, p.x, p.y), F = this._writeVertex(b, R2, D, S, p.x, p.y, E2.x, E2.y, O.x, O.y, q)), N ? U2 ? (this._writeTriangle(W2, w2, z2), this._writeTriangle(W2, z2, M2), this._writeTriangle(X3, B2, F), this._writeTriangle(X3, F, m2)) : (this._writeTriangle(W2, w2, M2), this._writeTriangle(X3, B2, m2)) : U2 ? (this._writeTriangle(T2, w2, z2), this._writeTriangle(T2, z2, F), this._writeTriangle(T2, F, m2)) : (this._writeTriangle(T2, w2, M2), this._writeTriangle(T2, B2, m2)), v2 ? (I = this._writeVertex(b, R2, D, S, p.x, p.y, h2.x, h2.y, e3.x, e3.y, q), P = m2) : (I = N ? this._writeVertex(b, R2, D, S, p.x, p.y, h2.x, h2.y, e3.x, e3.y, q) : f2, this._writeTriangle(I, X3, m2), P = m2), t) {
            const t2 = I;
            I = P, P = t2;
          }
          break;
        }
      }
    }
  }
};

// node_modules/@arcgis/core/geometry/libtess.js
var s2 = 128e3;
var n4 = null;
var e2 = null;
async function i() {
  return n4 || (n4 = r2()), n4;
}
async function r2() {
  const s3 = has("esri-csp-restrictions") ? await import("./libtess-asm-IZ7ALDDJ.js").then((t) => t.l) : await import("./libtess-RDFMACI2.js").then((t) => t.l);
  e2 = await s3.default({ locateFile: (s4) => n(`esri/core/libs/libtess/${s4}`) });
}
function a2(t, n5) {
  const i2 = Math.max(t.length, s2);
  return e2.triangulate(t, n5, i2);
}

export {
  i,
  a2 as a,
  c
};
//# sourceMappingURL=chunk-Z2VK6GWV.js.map
