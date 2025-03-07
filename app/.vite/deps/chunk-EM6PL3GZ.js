import {
  e as e2
} from "./chunk-J7454WTE.js";
import {
  e
} from "./chunk-U6JFTJMZ.js";

// node_modules/@arcgis/core/layers/graphics/centroid.js
function t(t2, n2) {
  return t2 ? n2 ? 4 : 3 : n2 ? 3 : 2;
}
function n(n2, I2, u2, o3) {
  if (!(I2 == null ? void 0 : I2.lengths.length)) return null;
  n2.lengths.length && (n2.lengths.length = 0), n2.coords.length && (n2.coords.length = 0);
  const N2 = n2.coords, l = [], s2 = u2 ? [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY] : [Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY], { lengths: c, coords: T } = I2, f = t(u2, o3);
  let h = 0;
  for (const t2 of c) {
    const n3 = e3(s2, T, h, t2, u2, o3);
    n3 && l.push(n3), h += t2 * f;
  }
  if (l.sort((t2, n3) => {
    let e4 = t2[2] - n3[2];
    return 0 === e4 && u2 && (e4 = t2[4] - n3[4]), e4;
  }), l.length) {
    let t2 = 6 * l[0][2];
    N2[0] = l[0][0] / t2, N2[1] = l[0][1] / t2, u2 && (t2 = 6 * l[0][4], N2[2] = 0 !== t2 ? l[0][3] / t2 : 0), (N2[0] < s2[0] || N2[0] > s2[1] || N2[1] < s2[2] || N2[1] > s2[3] || u2 && (N2[2] < s2[4] || N2[2] > s2[5])) && (N2.length = 0);
  }
  if (!N2.length) {
    const t2 = I2.lengths[0] ? r(T, 0, c[0], u2, o3) : null;
    if (!t2) return null;
    N2[0] = t2[0], N2[1] = t2[1], u2 && t2.length > 2 && (N2[2] = t2[2]);
  }
  return n2;
}
function e3(n2, e4, r2, I2, u2, o3) {
  const N2 = t(u2, o3);
  let l = r2, s2 = r2 + N2, c = 0, T = 0, f = 0, h = 0, i = 0;
  for (let t2 = 0, g = I2 - 1; t2 < g; t2++, l += N2, s2 += N2) {
    const t3 = e4[l], r3 = e4[l + 1], I3 = e4[l + 2], o4 = e4[s2], N3 = e4[s2 + 1], E2 = e4[s2 + 2];
    let g2 = t3 * N3 - o4 * r3;
    h += g2, c += (t3 + o4) * g2, T += (r3 + N3) * g2, u2 && (g2 = t3 * E2 - o4 * I3, f += (I3 + E2) * g2, i += g2), t3 < n2[0] && (n2[0] = t3), t3 > n2[1] && (n2[1] = t3), r3 < n2[2] && (n2[2] = r3), r3 > n2[3] && (n2[3] = r3), u2 && (I3 < n2[4] && (n2[4] = I3), I3 > n2[5] && (n2[5] = I3));
  }
  if (h > 0 && (h *= -1), i > 0 && (i *= -1), !h) return null;
  const E = [c, T, 0.5 * h];
  return u2 && (E[3] = f, E[4] = 0.5 * i), E;
}
function r(n2, e4, r2, l, s2) {
  const c = t(l, s2);
  let T = e4, f = e4 + c, h = 0, i = 0, E = 0, g = 0;
  for (let t2 = 0, b = r2 - 1; t2 < b; t2++, T += c, f += c) {
    const t3 = n2[T], e5 = n2[T + 1], r3 = n2[T + 2], s3 = n2[f], c2 = n2[f + 1], b2 = n2[f + 2], m = l ? u(t3, e5, r3, s3, c2, b2) : I(t3, e5, s3, c2);
    if (m) if (h += m, l) {
      const n3 = N(t3, e5, r3, s3, c2, b2);
      i += m * n3[0], E += m * n3[1], g += m * n3[2];
    } else {
      const n3 = o(t3, e5, s3, c2);
      i += m * n3[0], E += m * n3[1];
    }
  }
  return h > 0 ? l ? [i / h, E / h, g / h] : [i / h, E / h] : r2 > 0 ? l ? [n2[e4], n2[e4 + 1], n2[e4 + 2]] : [n2[e4], n2[e4 + 1]] : null;
}
function I(t2, n2, e4, r2) {
  const I2 = e4 - t2, u2 = r2 - n2;
  return Math.sqrt(I2 * I2 + u2 * u2);
}
function u(t2, n2, e4, r2, I2, u2) {
  const o3 = r2 - t2, N2 = I2 - n2, l = u2 - e4;
  return Math.sqrt(o3 * o3 + N2 * N2 + l * l);
}
function o(t2, n2, e4, r2) {
  return [t2 + 0.5 * (e4 - t2), n2 + 0.5 * (r2 - n2)];
}
function N(t2, n2, e4, r2, I2, u2) {
  return [t2 + 0.5 * (r2 - t2), n2 + 0.5 * (I2 - n2), e4 + 0.5 * (u2 - e4)];
}

// node_modules/@arcgis/core/layers/graphics/OptimizedFeature.js
var s = class _s {
  constructor(t2 = null, e4 = {}, r2, s2, o3 = 0) {
    this.geometry = t2, this.attributes = e4, this.centroid = r2, this.objectId = s2, this.displayId = o3;
  }
  static fromJSON(t2) {
    const e4 = t2.geometry ? e2.fromJSON(t2.geometry) : null, o3 = t2.centroid ? e2.fromJSON(t2.centroid) : null, i = t2.objectId;
    return new _s(e4, t2.attributes, o3, i);
  }
  weakClone() {
    const t2 = new _s(this.geometry, this.attributes, this.centroid, this.objectId);
    return t2.displayId = this.displayId, t2;
  }
  clone() {
    var _a, _b;
    const t2 = (_a = this.geometry) == null ? void 0 : _a.clone(), e4 = new _s(t2, { ...this.attributes }, (_b = this.centroid) == null ? void 0 : _b.clone(), this.objectId);
    return e4.displayId = this.displayId, e4;
  }
  ensureCentroid(t2) {
    return this.centroid ?? (this.centroid = n(new e2(), this.geometry, t2.hasZ, t2.hasM)), this.centroid;
  }
  get usedMemory() {
    var _a;
    return 128 + e(this.attributes) + (((_a = this.geometry) == null ? void 0 : _a.usedMemory) ?? 0);
  }
};
function o2(t2) {
  var _a, _b;
  return !!((_b = (_a = t2.geometry) == null ? void 0 : _a.coords) == null ? void 0 : _b.length);
}

export {
  n,
  s,
  o2 as o
};
//# sourceMappingURL=chunk-EM6PL3GZ.js.map
