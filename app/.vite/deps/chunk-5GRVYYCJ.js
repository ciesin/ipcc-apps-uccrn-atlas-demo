import {
  $,
  Bu,
  Ce,
  Fu,
  Gm,
  It,
  J,
  Jt,
  K,
  Mu,
  Na,
  Q,
  Tt as Tt2,
  Uu,
  Wu,
  Ys,
  Yu,
  ee,
  eh,
  em,
  j,
  jh,
  mo,
  nc,
  nu,
  re as re2,
  tm,
  vh,
  zu
} from "./chunk-NEFPLHSJ.js";
import {
  A,
  C,
  Lt,
  P as P2,
  Rt,
  Tt,
  a,
  b,
  cs,
  ei,
  gt,
  ls,
  n,
  z
} from "./chunk-67PUVBHA.js";
import {
  B,
  P2 as P,
  V,
  re
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/geometry/operators/support/initNoPeFactory.js
Fu((r) => {
  let i, n2;
  "number" == typeof r ? i = r : n2 = r;
  const p = { wkid: i, wkt: n2 };
  let m, a2;
  if (n2) {
    m = re(n2);
    const r2 = P(p);
    if (!m && !r2) throw new Error(`Unsupported WKT type: ${n2}`);
  } else m = !P(p);
  return a2 = i && B.has(i) ? Math.PI / 200 : m ? V(p) : Math.PI / 180, { isPCS: m, metersOrRadiansPerUnit: a2, semiMajor: 0, wkidOrWkt: r };
});

// node_modules/@arcgis/core/geometry/operators/support/jsonConverter.js
function W() {
  if (-1 === this.m_i) return this.m_i = 0, { value: { m_token: 1, m_value: null }, done: false };
  if (this.m_i < this.m_keys.length) {
    const e = this.m_bReturnKey, t = Math.trunc(this.m_i);
    return this.m_bReturnKey = !this.m_bReturnKey, this.m_i += 0.5, e ? { value: { m_token: 5, m_value: this.m_keys[t] }, done: false } : { value: { m_token: 6, m_value: this.m_o[this.m_keys[t]] }, done: false };
  }
  return { value: { m_token: 3, m_value: null }, done: true };
}
function X() {
  if (-1 === this.m_i) return this.m_i = 0, { value: { m_token: 2, m_value: null }, done: false };
  if (this.m_i < this.m_a.length) {
    const e = { value: { m_token: 6, m_value: this.m_a[this.m_i++] }, done: false };
    return this.m_strict || void 0 === e.value.m_value && (e.value.m_value = Number.NaN), e;
  }
  return { value: { m_token: 4, m_value: null }, done: true };
}
var L = class {
  createJSONObjectIterator(e) {
    return { m_iteratorType: "object", m_o: e, m_keys: this.m_options.strict ? Object.keys(e) : Object.keys(e).filter((t) => void 0 !== e[t]), m_i: -1, m_bReturnKey: true, next: W };
  }
  createJSONArrayIterator(e) {
    return { m_iteratorType: "array", m_strict: this.m_options.strict, m_i: -1, m_a: e, next: X };
  }
  constructor(e, t) {
    this.m_currentToken = 0, this.m_options = t ? { ...t } : { strict: true };
    const n2 = e;
    this.m_iteratorStack = [n2 instanceof Array ? this.createJSONArrayIterator(n2) : this.createJSONObjectIterator(n2)], this.m_nextFlatToken = { m_value: null, m_token: 0 };
  }
  nextToken() {
    if (0 === this.m_iteratorStack.length) return this.m_currentToken = 0;
    switch (this.m_nextFlatToken = this.m_iteratorStack.at(-1).next().value, this.m_currentValue = void 0, this.m_nextFlatToken.m_token) {
      case 1:
        return this.m_currentToken = 1;
      case 3:
        return this.m_iteratorStack.pop(), this.m_currentToken = 3;
      case 2:
        return this.m_currentToken = 2;
      case 4:
        return this.m_iteratorStack.pop(), this.m_currentToken = 4;
      case 5:
        return this.m_currentValue = this.m_nextFlatToken.m_value, this.m_currentToken = 5;
      case 6:
        if (this.m_nextFlatToken.m_value instanceof Array) return this.m_iteratorStack.push(this.createJSONArrayIterator(this.m_nextFlatToken.m_value)), this.nextToken();
        if (this.m_nextFlatToken.m_value instanceof Object) return this.m_iteratorStack.push(this.createJSONObjectIterator(this.m_nextFlatToken.m_value)), this.nextToken();
        if ("number" == typeof this.m_nextFlatToken.m_value) return this.m_currentValue = this.m_nextFlatToken.m_value, Number.isSafeInteger(this.m_currentValue) && this.m_currentValue >= cs() && this.m_currentValue <= ls() ? this.m_currentToken = 8 : this.m_currentToken = 7;
        if ("string" == typeof this.m_nextFlatToken.m_value) return this.m_currentValue = this.m_nextFlatToken.m_value, this.m_currentToken = 6;
        if ("boolean" == typeof this.m_nextFlatToken.m_value) return this.m_currentValue = this.m_nextFlatToken.m_value, this.m_currentToken = this.m_nextFlatToken.m_value ? 11 : 12;
        if ("object" == typeof this.m_nextFlatToken.m_value) return this.m_currentValue = null, this.m_currentToken = 10;
        b("unrecognized json element type");
    }
    return b("unrecognized json element type"), 0;
  }
  currentToken() {
    return this.m_currentToken;
  }
  skipChildren() {
    if (0 !== this.m_iteratorStack.length) switch (this.m_currentValue = void 0, this.m_nextFlatToken.m_token) {
      case 1:
        return this.m_iteratorStack.pop(), this.m_nextFlatToken.m_token = 3, void (this.m_currentToken = 3);
      case 2:
        return this.m_iteratorStack.pop(), this.m_nextFlatToken.m_token = 4, void (this.m_currentToken = 4);
    }
  }
  currentString() {
    return 6 !== this.m_currentToken && 5 !== this.m_currentToken && P2("invalid token"), this.m_currentValue;
  }
  currentDoubleValue() {
    return 7 !== this.m_currentToken && 8 !== this.m_currentToken && P2("invalid token"), this.m_currentValue;
  }
  currentInt32Value() {
    return 8 !== this.m_currentToken && P2("invalid token"), this.m_currentValue;
  }
  currentInt64Value() {
    return n(0), 0n;
  }
  currentBoolValue() {
    return 12 !== this.m_currentToken && 11 !== this.m_currentToken && P2("invalid token"), this.m_currentValue;
  }
  isError() {
    return 0;
  }
};
var Y = class {
  constructor() {
    this.m_pendingKey = null, this.m_acceptedObject = null, this.m_currentObject = [];
  }
  reset() {
    this.m_pendingKey = null, this.m_acceptedObject = null, this.m_currentObject.length = 0;
  }
  startObject() {
    const e = {};
    this.m_pendingKey ? (this.m_currentObject.at(-1)[this.m_pendingKey] = e, this.m_pendingKey = null) : Array.isArray(this.m_currentObject.at(-1)) && this.m_currentObject.at(-1).push(e), this.m_currentObject.push(e);
  }
  startArray() {
    const e = [];
    this.m_pendingKey ? (this.m_currentObject.at(-1)[this.m_pendingKey] = e, this.m_pendingKey = null) : Array.isArray(this.m_currentObject.at(-1)) && this.m_currentObject.at(-1).push(e), this.m_currentObject.push(e);
  }
  endObject() {
    this.m_acceptedObject = this.m_currentObject.at(-1), this.m_currentObject.pop();
  }
  endArray() {
    this.m_currentObject.pop();
  }
  addFieldName(e) {
    this.m_pendingKey = e;
  }
  addValue_(e) {
    this.m_pendingKey ? (this.m_currentObject.at(-1)[this.m_pendingKey] = e, this.m_pendingKey = null) : this.m_currentObject.at(-1).push(e);
  }
  addString(e) {
    this.addValue_(e);
  }
  addDouble(e, t) {
    this.addValue_(e);
  }
  addInt64(e) {
    n(0);
  }
  addInt32(e) {
    this.addValue_(e);
  }
  addBool(e) {
    this.addValue_(e);
  }
  addNull() {
    this.addValue_(null);
  }
  getObject() {
    return this.m_acceptedObject;
  }
};
var G = class _G {
  constructor(t) {
    return this.m_buffer = null, this.m_view = null, this.m_sz = 0, this.m_offset = 0, this.m_bOwnsBuffer = true, this.m_bLittleEndian = true, this.m_element = new ArrayBuffer(8), this.m_elementBytes = new Uint8Array(this.m_element), this.m_elementView = new DataView(this.m_element), this.m_elementDouble = new Float64Array(this.m_element), this.m_elementFloat = new Float32Array(this.m_element), this.m_elementInt64 = new BigInt64Array(this.m_element), this.m_elementInt32 = new Int32Array(this.m_element), this.m_elementInt16 = new Int16Array(this.m_element), void 0 !== t.sz ? (this.m_sz = t.sz, t.buffer ? (this.m_sz < 0 && A("size out of range"), this.m_buffer = t.buffer, this.m_offset = void 0 !== t.offset ? t.offset : 0, this.m_view = void 0 !== t.offset ? new DataView(t.buffer, t.offset, t.sz) : new DataView(this.m_buffer), this.m_bOwnsBuffer = false, void (this.m_bLittleEndian = true)) : (this.m_sz < 0 && A("size out of range"), void (this.m_sz > 0 && (this.m_buffer = new ArrayBuffer(this.m_sz), this.m_view = new DataView(this.m_buffer))))) : t.move ? (this.m_sz = t.move.m_sz, this.m_buffer = t.move.m_buffer, this.m_view = t.move.m_view, this.m_bOwnsBuffer = t.move.m_bOwnsBuffer, this.m_bLittleEndian = t.move.m_bLittleEndian, t.move.m_buffer = null, t.move.m_view = null, t.move.m_sz = 0, void (t.move.m_bOwnsBuffer = true)) : void b("unrecognized constructor options");
  }
  swapBytesDouble() {
    this.doSwap() && (this.m_elementDouble[0] = this.m_elementBytes[0] << 56 | this.m_elementBytes[1] << 48 | this.m_elementBytes[2] << 40 | this.m_elementBytes[3] << 32 | this.m_elementBytes[4] << 24 | this.m_elementBytes[5] << 16 | this.m_elementBytes[6] << 8 | this.m_elementBytes[7]);
  }
  swapBytesInt32() {
    this.doSwap() && (this.m_elementInt32[0] = this.m_elementBytes[0] << 24 | this.m_elementBytes[1] << 16 | this.m_elementBytes[2] << 8 | this.m_elementBytes[3]);
  }
  getOffset() {
    return this.m_offset;
  }
  assignMove(e) {
    return this === e || (this.clear(), this.m_sz = e.m_sz, this.m_buffer = e.m_buffer, this.m_view = e.m_view, this.m_bOwnsBuffer = e.m_bOwnsBuffer, this.m_bLittleEndian = e.m_bLittleEndian, e.m_buffer = null, e.m_sz = 0, e.m_bOwnsBuffer = true), this;
  }
  doSwap() {
    return this.m_bLittleEndian !== (1 === _G.getNativeByteOrder());
  }
  setNativeByteOrder() {
    this.m_bLittleEndian = 1 === _G.getNativeByteOrder();
  }
  setOrder(e) {
    this.m_bLittleEndian = 1 === e;
  }
  getOrder() {
    return this.m_bLittleEndian ? 1 : 0;
  }
  getView() {
    return this.m_view || C("buffer not defined"), this.m_view;
  }
  static getNativeByteOrder() {
    return 1;
  }
  clear() {
    this.m_buffer = null, this.m_sz = 0, this.m_bOwnsBuffer = true;
  }
  size() {
    return this.m_sz;
  }
  readDouble(e) {
    return this.doSwap() ? (this.m_elementDouble[0] = this.m_view.getFloat64(e, this.m_bLittleEndian), this.swapBytesDouble(), this.m_elementDouble[0]) : this.m_view.getFloat64(e, this.m_bLittleEndian);
  }
  writeDouble(e, t) {
    this.m_elementDouble[0] = t, this.swapBytesDouble(), this.m_view.setFloat64(e, this.m_elementDouble[0], this.m_bLittleEndian);
  }
  readInt32(e) {
    return this.doSwap() ? (this.m_elementInt32[0] = this.m_view.getInt32(e, this.m_bLittleEndian), this.swapBytesInt32(), this.m_elementInt32[0]) : this.m_view.getInt32(e, this.m_bLittleEndian);
  }
  writeInt32(e, t) {
    this.m_elementInt32[0] = t, this.swapBytesInt32(), this.m_view.setInt32(e, this.m_elementInt32[0], this.m_bLittleEndian);
  }
  getPtr() {
    return this.m_buffer;
  }
  setSizeNoRealloc(e) {
    n(e >= 0 && e <= this.m_sz), this.m_sz = e;
  }
};
function K2(e, r, i, a2, o, u) {
  let m = false, l = false, c = false, d = false, _ = false, h = false, f = false, p = false, k = false, b2 = false, y = false, N = false, T = false, g = false, w = false, C2 = false, D = false, F = false, j2 = false, z2 = false, O = false, I = false, E = false, B2 = false, P3 = Number.NaN, V2 = Number.NaN, M = Number.NaN, R = Number.NaN, U = 0, W2 = Number.NaN, X2 = Number.NaN, L2 = Number.NaN, Y2 = Number.NaN, G2 = Number.NaN, K3 = Number.NaN, q2 = Number.NaN, ne2 = Number.NaN, re4 = 0, ie2 = 0, se2 = false, ae2 = false, oe2 = null, ue2 = null, me2 = null, le2 = null, ce2 = null;
  for (; 3 !== i.nextToken(); ) {
    const u2 = i.currentString();
    if (i.nextToken(), "spatialReference" === u2) {
      if (o && !m) {
        m = true, 1 === i.currentToken() ? le2 = Q2(i) : 10 !== i.currentToken() && P2("failed to parse spatial reference: object or null is expected");
        continue;
      }
    } else if (a2) if ("hasZ" === u2) {
      if (!l) {
        l = true, se2 = 11 === i.currentToken();
        continue;
      }
    } else if ("hasM" === u2) {
      if (!c) {
        c = true, ae2 = 11 === i.currentToken();
        continue;
      }
    } else if ("rings" === u2) {
      if (!(_ || h || e !== a.enumUnknown && e !== a.enumPolygon)) {
        _ = true, { geometry: ce2, as: oe2, bs: ue2 } = J2(true, false, r, i);
        continue;
      }
    } else if ("curveRings" === u2) {
      if (!h && (e === a.enumUnknown || e === a.enumPolygon)) {
        h = true, { geometry: ce2, as: oe2, bs: ue2 } = J2(true, true, r, i);
        continue;
      }
    } else if ("paths" === u2) {
      if (!(f || p || e !== a.enumUnknown && e !== a.enumPolyline)) {
        f = true, { geometry: ce2, as: oe2, bs: ue2 } = J2(false, false, r, i);
        continue;
      }
    } else if ("curvePaths" === u2) {
      if (!p && (e === a.enumUnknown || e === a.enumPolyline)) {
        p = true, { geometry: ce2, as: oe2, bs: ue2 } = J2(false, true, r, i);
        continue;
      }
    } else if ("points" === u2) {
      if (!k && (e === a.enumUnknown || e === a.enumMultiPoint)) {
        k = true, { geometry: ce2, as: oe2, bs: ue2 } = Z(r, i);
        continue;
      }
    } else if ("ids" === u2) {
      if (!d) {
        d = true, me2 = H(r, i);
        continue;
      }
    } else if ("x" === u2) {
      if (!b2 && (e === a.enumUnknown || e === a.enumPoint)) {
        b2 = true, P3 = $2(i);
        continue;
      }
    } else if ("y" === u2) {
      if (!y && (e === a.enumUnknown || e === a.enumPoint)) {
        y = true, V2 = $2(i);
        continue;
      }
    } else if ("z" === u2) {
      if (!N && (e === a.enumUnknown || e === a.enumPoint)) {
        N = true, M = $2(i);
        continue;
      }
    } else if ("m" === u2) {
      if (!T && (e === a.enumUnknown || e === a.enumPoint)) {
        T = true, R = $2(i);
        continue;
      }
    } else if ("id" === u2) {
      if (!g && (e === a.enumUnknown || e === a.enumPoint)) {
        g = true, U = ee2(i);
        continue;
      }
    } else if ("xmin" === u2) {
      if (!w && (e === a.enumUnknown || e === a.enumEnvelope)) {
        w = true, W2 = $2(i);
        continue;
      }
    } else if ("ymin" === u2) {
      if (!C2 && (e === a.enumUnknown || e === a.enumEnvelope)) {
        C2 = true, X2 = $2(i);
        continue;
      }
    } else if ("mmin" === u2) {
      if (!O && (e === a.enumUnknown || e === a.enumEnvelope)) {
        O = true, q2 = $2(i);
        continue;
      }
    } else if ("zmin" === u2) {
      if (!j2 && (e === a.enumUnknown || e === a.enumEnvelope)) {
        j2 = true, G2 = $2(i);
        continue;
      }
    } else if ("idmin" === u2) {
      if (!E && (e === a.enumUnknown || e === a.enumEnvelope)) {
        E = true, re4 = ee2(i);
        continue;
      }
    } else if ("xmax" === u2) {
      if (!D && (e === a.enumUnknown || e === a.enumEnvelope)) {
        D = true, L2 = $2(i);
        continue;
      }
    } else if ("ymax" === u2) {
      if (!F && (e === a.enumUnknown || e === a.enumEnvelope)) {
        F = true, Y2 = $2(i);
        continue;
      }
    } else if ("mmax" === u2) {
      if (!I && (e === a.enumUnknown || e === a.enumEnvelope)) {
        I = true, ne2 = $2(i);
        continue;
      }
    } else if ("zmax" === u2) {
      if (!z2 && (e === a.enumUnknown || e === a.enumEnvelope)) {
        z2 = true, K3 = $2(i);
        continue;
      }
    } else if ("idmax" === u2) {
      if (!B2 && (e === a.enumUnknown || e === a.enumEnvelope)) {
        B2 = true, ie2 = ee2(i);
        continue;
      }
    } else "materials" === u2 && n(0);
    i.skipChildren();
  }
  if (_ || h || f || p || k) {
    let e2 = null, t = null;
    const n2 = ce2;
    se2 && (ce2.addAttribute(1), e2 = oe2, e2 || (e2 = $(n2.getPointCount(), Number.NaN))), ae2 && (ce2.addAttribute(2), t = se2 ? ue2 : oe2), null != me2 && ce2.addAttribute(3), se2 && null != e2 && n2.setAttributeStreamRef(1, e2), ae2 && null != t && n2.setAttributeStreamRef(2, t), null != me2 && te(n2, me2);
  } else if (b2 || y || T || N || g) {
    It(P3, V2) || P2("failed to parse point: x and y must be finite or nan"), (Number.isNaN(V2) || Number.isNaN(P3)) && (P3 = Number.NaN, V2 = Number.NaN);
    const e2 = new ee({ x: P3, y: V2 });
    N && e2.setZ(M), T && e2.setM(R), g && e2.setID(U), ce2 = e2;
  } else if (w || C2 || D || F || j2 || z2 || O || I || E || B2) {
    (Number.isNaN(X2) || Number.isNaN(L2) || Number.isNaN(Y2)) && (W2 = Number.NaN);
    const e2 = new re2({ xmin: W2, ymin: X2, xmax: L2, ymax: Y2 });
    j2 && z2 && e2.setInterval(1, 0, G2, K3), O && I && e2.setInterval(2, 0, q2, ne2), E && B2 && e2.setInterval(3, 0, re4, ie2), ce2 = e2;
  }
  return { ...ce2 ? { geom: ce2 } : {}, ...le2 ? { sr: le2 } : {} };
}
function q(e) {
  let t = false;
  for (; 3 !== e.nextToken(); ) {
    const n2 = e.currentString();
    e.nextToken(), "uwkid" === n2 ? t || (t = true, 8 === e.currentToken() && e.currentInt32Value()) : e.skipChildren();
  }
  return null;
}
function Q2(e) {
  let t = false, n2 = false, r = false, i = false, s = false, a2 = false, o = false, u = false, m = false, l = false, c = false, d = false, _ = false, g = false, v = false, x = false, A2 = false, S = -1, w = -1, C2 = -1, D = -1, F = 0, j2 = 0, z2 = 0, O = 0, I = 0, E = 0, B2 = 0, P3 = 0, V2 = 0, M = 0, R = "", U = "", W2 = null;
  for (; 3 !== e.nextToken(); ) {
    const h = e.currentString();
    e.nextToken(), "wkid" === h ? t || (t = true, 8 === e.currentToken() && (S = e.currentInt32Value())) : "latestWkid" === h ? n2 || (n2 = true, 8 === e.currentToken() && (w = e.currentInt32Value())) : "wkt" === h ? s || (s = true, 6 === e.currentToken() && (R = e.currentString())) : "wkt2" === h ? s || 6 === e.currentToken() && (U = e.currentString()) : "vcsWkid" === h ? r || (r = true, 8 === e.currentToken() && (C2 = e.currentInt32Value())) : "latestVcsWkid" === h ? i || (i = true, 8 === e.currentToken() && (D = e.currentInt32Value())) : "xyTolerance" === h ? o || (o = true, a2 = true, F = e.currentDoubleValue()) : "zTolerance" === h ? u || (u = true, a2 = true, j2 = e.currentDoubleValue()) : "mTolerance" === h ? m || (m = true, a2 = true, z2 = e.currentDoubleValue()) : "falseX" === h ? l || (l = true, a2 = true, B2 = e.currentDoubleValue()) : "falseY" === h ? c || (c = true, a2 = true, P3 = e.currentDoubleValue()) : "falseZ" === h ? d || (d = true, a2 = true, V2 = e.currentDoubleValue()) : "falseM" === h ? _ || (_ = true, a2 = true, M = e.currentDoubleValue()) : "xyUnits" === h ? g || (g = true, a2 = true, O = e.currentDoubleValue()) : "zUnits" === h ? v || (v = true, a2 = true, I = e.currentDoubleValue()) : "mUnits" === h ? x || (x = true, a2 = true, E = e.currentDoubleValue()) : "unit" === h ? A2 || (A2 = true, W2 = q(e)) : e.skipChildren();
  }
  D <= 0 && C2 > 0 && (D = C2), C2 <= 0 && D > 0 && (C2 = D);
  let X2 = null, L2 = true;
  if (0 !== R.length && (L2 = false, Wu(R) && (X2 = Uu(R))), X2 || 0 === U.length || (L2 = false, Wu(U) && (X2 = Uu(U))), !X2 && w > 0 && (L2 = false, zu(w) && (D <= 0 || Gm()) && (X2 = Mu(w, D))), !X2 && S > 0 && (L2 = false, zu(S) && (C2 <= 0 || Gm()) && (X2 = Mu(S, C2))), L2 && (X2 = Yu(W2)), a2 && X2) {
    const e2 = new nc();
    X2.queryPrecisionDescriptorWithoutFalseXY(e2), o && e2.setTolerance(0, F), u && e2.setTolerance(1, j2), m && e2.setTolerance(2, z2), g && l && c && e2.setGridParams(B2, P3, O), v && d && e2.setZParams(V2, I), x && _ && e2.setMParams(M, E), X2 = Bu(X2, e2);
  }
  return X2;
}
function J2(e, n2, r, i) {
  2 !== i.currentToken() && P2("failed to parse multipath: array of array of vertices is expected");
  const s = e ? new eh() : new Na(), a2 = s, o = J(0), u = $(2, 0), _ = K(0);
  let h = null, f = null, p = null, k = null, b2 = null, y = 0, N = 0, T = 0;
  const g = new nu(), x = ei.getNAN();
  let A2 = 0, S = 0;
  const F = e ? 1 : 0;
  for (; 4 !== i.nextToken(); ) {
    2 !== i.currentToken() && P2("failed to parse multipath: ring/path array is expected");
    let r2 = 2, s2 = 0, j2 = true;
    const z2 = 4;
    let O = 0, I = 0;
    const E = ei.getNAN(), B2 = Lt(z2, Number.NaN), P3 = Lt(z2, Number.NaN);
    let V2 = false;
    for (i.nextToken(); 4 !== i.currentToken(); ) {
      if (n2 && 1 === i.currentToken()) j2 && P2("failed to parse multipath: starting vertex array is expected"), p || (p = K(A2 - 1, 1), k = J(A2 - 1, -1), b2 = $(0)), V2 = true, r2 = 1, { segFlag: T, toPointSz: O } = ue(g, B2, x, i);
      else {
        for (V2 = false, 2 !== i.currentToken() && P2("failed to parse multipath: array is expected, rings/paths vertices consist of arrays of coordinates"), O = 0; 4 !== i.nextToken(); ) O === z2 && P2("failed to parse multipath: each vertex array has to have at most 4 elements"), B2[O++] = $2(i);
        O < 2 && P2("failed to parse multipath: each vertex array has to have at least 2 elements"), Tt2(B2[0], B2[1]) || P2("failed to parse multipath: x and y must be finite");
      }
      i.nextToken();
      do {
        if (u.size() === 2 * A2 && u.resize(ne(A2)), u.writePoint2D(2 * A2, E.setCoords(B2[0], B2[1])), h && h.size() === A2 && h.resize(re3(A2)), O > 2 ? (h || (h = $(A2 + 1, Number.NaN)), h.write(A2, B2[2])) : h && h.write(A2, Number.NaN), f && f.size() === A2 && f.resize(re3(A2)), O > 3 ? (f || (f = $(A2 + 1, Number.NaN)), f.write(A2, B2[3])) : f && f.write(A2, Number.NaN), j2) S++, o.add(A2), _.add(F), j2 = false, I = O, Tt(P3, B2, 0, 0, I);
        else if (null !== p) if (V2) {
          const e2 = Ys(T), t = b2.size();
          b2.resize(t + e2), p.add(T), k.add(y), g.get().writeInBufferStream(b2, y), y += e2, a2.incCurveType(T, 1), N++;
        } else p.add(1), k.add(-1);
        A2++, s2++, x.setCoords(B2[0], B2[1]);
      } while (s2 < r2 && 4 === i.currentToken());
    }
    0 !== s2 && (e && s2 > r2 && O === I && 0 === gt(B2, P3, O) ? (A2--, s2--) : null !== p && (p.add(1), k.add(-1)));
  }
  return A2 && (o.resize(S), _.resize(S), A2 > 0 && (o.add(A2), _.add(0)), a2.setAttributeStreamRef(0, u), a2.setPathFlagsStreamRef(_), a2.setPathStreamRef(o), null !== p && (a2.updateCurveCounter(N), a2.setSegmentData(k, b2, p, y)), a2.notifyModifiedFlags(65535)), { geometry: s, as: h, bs: f };
}
function Z(e, n2) {
  2 !== n2.currentToken() && P2("failed to parse multipoint: array of vertices is expected");
  let r = 0;
  const i = new Ce(), s = $(2, 0);
  let a2 = 0;
  const o = 4, u = Lt(o, Number.NaN), c = new ei();
  let d = null, _ = null;
  for (; 4 !== n2.nextToken(); ) {
    for (2 !== n2.currentToken() && P2("failed to parse multipoint: array is expected, multipoint vertices consist of arrays of cooridinates"), a2 = 0; 4 !== n2.nextToken(); ) a2 === o && P2("failed to parse multipoint: each vertex array has to have at most 4 elements"), u[a2++] = $2(n2);
    a2 < 2 && P2("failed to parse multipoint: each vertex array has to have at least 2 elements"), Tt2(u[0], u[1]) || P2("failed to parse multipoint: x and y must be finite"), s.size() === 2 * r && s.resize(ne(r)), s.writePoint2D(2 * r, c.setCoords(u[0], u[1])), d && d.size() === r && d.resize(re3(r)), a2 > 2 ? (d || (d = $(r + 1, Number.NaN)), d.write(r, u[2])) : d && d.write(r, Number.NaN), _ && _.size() === r && _.resize(re3(r)), a2 > 3 ? (_ || (_ = $(r + 1, Number.NaN)), _.write(r, u[3])) : _ && _.write(r, Number.NaN), r++;
  }
  if (r) {
    const e2 = i.getImpl();
    e2.setAttributeStreamRef(0, s), e2.resizeNoInit(r), e2.notifyModifiedFlags(65535);
  }
  return { geometry: i, as: d, bs: _ };
}
function H(e, n2) {
  2 !== n2.currentToken() && P2("failed to parse array of IDs: array of array of integers is expected");
  const r = Q(2, 0);
  let i = 0, s = -1;
  for (; 4 !== n2.nextToken(); ) {
    const e2 = i;
    r.size() === i && r.resize(re3(i)), i++;
    let a2 = 0;
    for (-1 === s ? s = 2 === n2.currentToken() ? 1 : 0 : 1 === s && 2 !== n2.currentToken() && P2("failed to parse array of IDs: array of array of integers is expected"), 0 === s && (r.size() === i && r.resize(re3(i)), r.write(i, ee2(n2)), a2++, i++); 4 !== n2.nextToken(); ) r.size() === i && r.resize(re3(i)), r.write(i, ee2(n2)), a2++, i++;
    if (r.write(e2, a2), 0 === s) break;
  }
  return r.resize(i), r;
}
function $2(e) {
  const t = e.currentToken();
  if (10 === t || 6 === t && "NaN" === e.currentString()) return Number.NaN;
  {
    const t2 = e.currentDoubleValue();
    return Number.isNaN(t2) ? Number.NaN : t2;
  }
}
function ee2(e) {
  return e.currentInt32Value();
}
function te(t, n2) {
  if (t.isEmpty()) return;
  const r = Q(2, 0), i = t.getGeometryType();
  let s = 0;
  i === Ce.type ? s = 1 : i === Na.type || i === eh.type ? s = t.getPathCount() : b("not implemented"), r.resize(t.getPointCount(), 0);
  let a2 = 0;
  for (let o = 0; o < s; ++o) {
    const s2 = n2.read(a2);
    a2++;
    const u = a2 + s2;
    let m = 0, l = 0;
    i === Ce.type ? m = t.getPointCount() : i === Na.type || i === eh.type ? (m = t.getPathSize(o), l = t.getPathStart(o)) : b("not implemented");
    for (let e = 0, t2 = Math.min(s2, m); e < t2; ++e) r.write(l, n2.read(a2)), a2++, l++;
    a2 = u;
  }
  t.getImpl().setAttributeStreamRef(3, r);
}
function ne(e) {
  let t = 2 * Math.trunc(3 * (e + 1) / 2);
  return t < 8 ? t = 8 : t < 32 && (t = 32), t;
}
function re3(e) {
  let t = Math.trunc(3 * (e + 1) / 2);
  return t < 4 ? t = 4 : t < 16 && (t = 16), t;
}
function ie(e, t, n2, i, s) {
  s >= i.size() && A("Byte_buffer out of range access"), e.m_bits = 0, e.m_rotation = 0, e.m_cosr = 1, e.m_sinr = 0, e.setStartXY(t), e.setEndXY(n2);
  const a2 = ei.getNAN();
  a2.x = i.readDouble(s), a2.y = i.readDouble(s + 8);
  const o = i.readInt32(s + 16);
  if (!!(1 & o)) return e.m_semiMajorAxis = 0, e.m_minorMajorRatio = 1, e.m_interior.assign(a2), e.m_center.setNAN(), e.m_sweepAngle = 0, e.m_startAngle = 0, em(e), false;
  let u = !!(64 & o);
  const l = !!(128 & o);
  let c = !!(32 & o);
  const d = !!(8 & o), _ = !!(16 & o), h = t.equals(n2);
  return u && !h && (u = false, c = true), c && h && (u = true, c = false, a2.setCoords(0, 0)), u || (l ? c ? (e.m_semiMajorAxis = 1, e.m_minorMajorRatio = 0, e.m_interior.assign(a2), e.m_center.setNAN(), e.m_sweepAngle = 0, e.m_startAngle = 0) : (e.constructCircularArcThreePoint(t, n2, a2), h && d === e.isClockwise() && e.reverse()) : c ? (e.m_semiMajorAxis = 1, e.m_minorMajorRatio = 0, e.m_center.setNAN(), e.m_sweepAngle = 0, e.m_startAngle = 0, em(e), e.queryCoord2D(0.5, e.m_interior)) : jh(e, t, n2, a2, d, _)), u && (e.m_center.assign(t), e.m_startAngle = a2.x, e.m_sweepAngle = a2.y, vh(e, Number.NaN, d, _), e.m_semiMajorAxis = 0, e.m_minorMajorRatio = 1, e.m_interior.setCoordsPoint2D(t)), e.setProjectionBehavior(0), em(e), true;
}
function se(e, t, n2, r, i) {
  e.m_bits = 0, e.m_center.x = r.readDouble(i), e.m_center.y = r.readDouble(i + 8), e.m_rotation = r.readDouble(i + 16), e.m_semiMajorAxis = r.readDouble(i + 24), e.m_minorMajorRatio = r.readDouble(i + 32), e.m_XStart = t.x, e.m_YStart = t.y, e.m_XEnd = n2.x, e.m_YEnd = n2.y;
  const s = r.readInt32(i + 40);
  if (1 & s) return false;
  let a2 = !!(64 & s), o = !!(128 & s);
  const u = !!(2048 & s), m = !!(4096 & s);
  return !!!(512 & s) && !!!(1024 & s) || o || (a2 = true), o && !t.equals(n2) ? (o = false, a2 = true) : a2 && t.equals(n2) && (o = true, a2 = false), o ? (e.m_center.assign(t), e.m_startAngle = e.m_center.x, e.m_sweepAngle = e.m_center.y, vh(e, Number.NaN, u, m), e.m_semiMajorAxis = 0, e.m_interior.setCoordsPoint2D(t)) : a2 ? (e.m_center.setNAN(), e.m_semiMajorAxis = 1, e.m_minorMajorRatio = 0, e.m_center.setNAN(), e.m_sweepAngle = 0, e.m_startAngle = 0, em(e), e.queryCoord2D(0.5, e.m_interior)) : e.constructEllipticArcEndPointsCenter(t, n2, e.m_semiMajorAxis, e.m_minorMajorRatio, e.m_rotation, !m, u, e.m_center), e.setProjectionBehavior(1), em(e), true;
}
function ae(e, t, r, i, s) {
  return n(s + 32 <= i.size()), e.m_cp = Rt(ei, 2), e.m_cp[0].x = i.readDouble(s), e.m_cp[0].y = i.readDouble(s + 8), e.m_cp[1].x = i.readDouble(s + 16), e.m_cp[1].y = i.readDouble(s + 24), e.m_XStart = t.x, e.m_YStart = t.y, e.m_XEnd = r.x, e.m_YEnd = r.y, true;
}
function oe(e, t, n2, r, i) {
  return e.m_cp.x = r.readDouble(i), e.m_cp.y = r.readDouble(i + 8), e.m_weights[0] = r.readDouble(i + 16), e.m_weights[1] = r.readDouble(i + 24), e.m_weights[2] = r.readDouble(i + 32), e.m_XStart = t.x, e.m_YStart = t.y, e.m_XEnd = n2.x, e.m_YEnd = n2.y, true;
}
function ue(e, n2, r, i, s) {
  const a2 = { segFlag: 0, toPointSz: 0 };
  let o = i.currentToken();
  o = i.nextToken();
  const u = i.currentString(), l = u[0];
  for ((1 !== u.length || "a" !== l && "b" !== l && "c" !== l && "n" !== l && "q" !== l) && P2('failed to parse curve: expecting "a", "b", "n", "q", or "c"'), o = i.nextToken(), 2 !== o && P2("failed to parse curve: start array is expected for curve parameters"), o = i.nextToken(), 2 !== o && P2("failed to parse curve: start array is expected for to point"), a2.toPointSz = 0; 4 !== i.nextToken(); ) 4 === a2.toPointSz && P2("failed to parse curve: vertex array cannot have more than 4 elements"), n2[a2.toPointSz++] = $2(i);
  a2.toPointSz < 2 && P2("failed to parse curve: vertex array must have at least 2 elements");
  const c = ei.construct(n2[0], n2[1]), d = ei.getNAN();
  let _ = -1, h = -1, f = false, p = Number.NaN, k = Number.NaN, b2 = Number.NaN;
  const y = [ei.getNAN(), ei.getNAN(), ei.getNAN()], N = ei.getNAN();
  if ("a" === l) {
    o = i.nextToken(), 2 !== o && P2("failed to parse curve: start array is expected for center point"), o = i.nextToken();
    const e2 = $2(i);
    o = i.nextToken();
    const n3 = $2(i);
    o = i.nextToken(), 4 !== o && P2("failed to parse curve: end array is expected for center point"), d.setCoords(e2, n3), o = i.nextToken(), _ = i.currentInt32Value(), o = i.nextToken(), h = i.currentInt32Value(), o = i.nextToken(), 4 !== o ? (f = false, p = $2(i), o = i.nextToken(), k = $2(i), o = i.nextToken(), b2 = $2(i), o = i.nextToken(), 4 !== o && P2("failed to parse curve: end array is expected for curve parameters")) : f = true, a2.segFlag = 4;
  } else if ("b" === l) {
    for (let e2 = 0; e2 < 2; e2++) {
      o = i.nextToken(), 2 !== o && P2("failed to parse curve: start array is expected for control point"), o = i.nextToken();
      const n3 = $2(i);
      o = i.nextToken();
      const r2 = $2(i);
      o = i.nextToken(), 4 !== o && P2("failed to parse curve: end array is expected for control point"), y[e2].setCoords(n3, r2);
    }
    o = i.nextToken(), 4 !== o && P2("failed to parse curve: end array is expected for curve parameters"), a2.segFlag = 2;
  } else if ("n" === l) {
    {
      o = i.nextToken(), 2 !== o && P2("failed to parse curve: start array is expected for control point"), o = i.nextToken();
      const e3 = $2(i);
      o = i.nextToken();
      const n4 = $2(i);
      o = i.nextToken(), 4 !== o && P2("failed to parse curve: end array is expected for control point"), y[0].setCoords(e3, n4);
    }
    o = i.nextToken();
    const e2 = $2(i);
    o = i.nextToken();
    const n3 = $2(i);
    o = i.nextToken();
    const r2 = $2(i);
    y[1].setCoords(e2, n3), y[2].setCoords(r2, r2), o = i.nextToken(), 4 !== o && P2("failed to parse curve: end array is expected for curve parameters"), a2.segFlag = 8;
  } else if ("q" === l) {
    for (let e2 = 0; e2 < 1; e2++) {
      o = i.nextToken(), 2 !== o && P2("failed to parse curve: start array is expected for control point"), o = i.nextToken();
      const n3 = $2(i);
      o = i.nextToken();
      const r2 = $2(i);
      o = i.nextToken(), 4 !== o && P2("failed to parse curve: end array is expected for control point"), y[e2].setCoords(n3, r2);
    }
    o = i.nextToken(), 4 !== o && P2("failed to parse curve: end array is expected for curve parameters"), a2.segFlag = 16;
  } else {
    o = i.nextToken(), 2 !== o && P2("failed to parse curve: start array is expected for interior point"), o = i.nextToken();
    const e2 = $2(i);
    o = i.nextToken();
    const n3 = $2(i);
    o = i.nextToken(), 4 !== o && P2("failed to parse curve: end array is expected for interior point"), N.setCoords(e2, n3), o = i.nextToken(), 4 !== o && P2("failed to parse curve: end array is expected for curve parameters"), a2.segFlag = 4;
  }
  if (o = i.nextToken(), 3 !== o && P2("failed to parse curve: end object is expected for curve"), "a" === l) if (e.createEllipticArc(), f) {
    const t = true;
    me(e.get(), r, c, d, t, _, h);
  } else le(e.get(), r, c, d, _, h, p, k, b2);
  else if ("b" === l) e.createCubicBezier(), ce(e.get(), r, c, y);
  else if ("n" === l) e.createQuadraticRationalBezier(), de(e.get(), r, c, y[0], y[1].x, y[1].y, y[2].x);
  else if ("q" === l) e.createQuadraticBezier(), e.get().construct(r, y[0], c);
  else {
    e.createEllipticArc();
    const t = false;
    me(e.get(), r, c, N, t, -1, -1);
  }
  return a2;
}
function me(e, t, n2, r, i, s, a2) {
  e.dropAllAttributes();
  const o = 20, u = new ArrayBuffer(o), m = new G({ sz: o, buffer: u });
  let l = 0;
  m.writeDouble(l, r.x), l += 8, m.writeDouble(l, r.y), l += 8;
  let c = 0;
  i ? (a2 || (c |= 8), s && (c |= 16)) : c |= 128, m.writeInt32(l, c), l += 4, ie(e, t, n2, m, 0);
}
function le(e, t, n2, r, i, s, a2, o, u) {
  e.dropAllAttributes();
  const m = 44, l = new ArrayBuffer(m), c = new G({ sz: m, buffer: l });
  let d = 0;
  c.writeDouble(d, r.x), d += 8, c.writeDouble(d, r.y), d += 8, c.writeDouble(d, a2), d += 8, c.writeDouble(d, o), d += 8, c.writeDouble(d, u), d += 8;
  let _ = 0;
  s || (_ |= 2048), i && (_ |= 4096), c.writeInt32(d, _), d += 4, se(e, t, n2, c, 0);
}
function ce(e, t, n2, r) {
  e.dropAllAttributes();
  const i = 32, s = new ArrayBuffer(i), a2 = new G({ sz: i, buffer: s });
  let o = 0;
  a2.writeDouble(o, r[0].x), o += 8, a2.writeDouble(o, r[0].y), o += 8, a2.writeDouble(o, r[1].x), o += 8, a2.writeDouble(o, r[1].y), o += 8, ae(e, t, n2, a2, 0);
}
function de(e, t, n2, r, i, s, a2) {
  e.dropAllAttributes();
  const o = 40, u = new ArrayBuffer(o), m = new G({ sz: o, buffer: u });
  let l = 0;
  m.writeDouble(l, r.x), l += 8, m.writeDouble(l, r.y), l += 8, m.writeDouble(l, i), l += 8, m.writeDouble(l, s), l += 8, m.writeDouble(l, a2), l += 8, oe(e, t, n2, m, 0);
}
function _e(e, t, n2, r, i) {
  const o = e.getGeometryType();
  if (o === a.enumEllipticArc) return he(e, t, n2, r, i);
  if (o === a.enumBezier) return fe(e, t, n2, r, i);
  if (o === a.enumRationalBezier2) return pe(e, t, n2, r, i);
  if (o === a.enumBezier2) {
    const s = new mo();
    return s.constructFromQuadraticSegment(e), fe(s, t, n2, r, i);
  }
  z("");
}
function he(e, t, r, i, s) {
  n(!tm(e));
  const a2 = e.getEndXY(), o = e.hasAttribute(1) && !t, u = e.hasAttribute(2) && !r;
  let m = Number.NaN, l = Number.NaN;
  if (o && (m = e.getEndAttributeAsDbl(1, 0)), u && (l = e.getEndAttributeAsDbl(2, 0)), e.isDegenerateToLine() || e.isDegenerate(0)) return ke(o, u, a2.x, a2.y, m, l, i, s), true;
  const c = 0 === e.projectionBehavior(), d = !!c && e.isClosed();
  if (c && !d) s.startObject(), s.addFieldName("c"), s.startArray(), ke(o, u, a2.x, a2.y, m, l, i, s), be(e.m_interior.x, e.m_interior.y, 17, s), s.endArray(), s.endObject();
  else if (c) {
    s.startObject(), s.addFieldName("a"), s.startArray(), ke(o, u, a2.x, a2.y, m, l, i, s);
    const t2 = 0, n2 = 0;
    be(e.m_center.x + t2, e.m_center.y + n2, 17, s);
    const r2 = !e.isMajor();
    s.addInt32(r2 ? 1 : 0);
    const c2 = e.isClockwise();
    s.addInt32(c2 ? 1 : 0), s.endArray(), s.endObject();
  } else {
    s.startObject(), s.addFieldName("a"), s.startArray(), ke(o, u, a2.x, a2.y, m, l, i, s);
    const t2 = e;
    be(t2.m_center.x, t2.m_center.y, 17, s);
    const n2 = !t2.isMajor();
    s.addInt32(n2 ? 1 : 0);
    const r2 = t2.isClockwise();
    s.addInt32(r2 ? 1 : 0), s.addDouble(t2.m_rotation, 17), s.addDouble(t2.m_semiMajorAxis, 17), s.addDouble(t2.m_minorMajorRatio, 17), s.endArray(), s.endObject();
  }
  return false;
}
function fe(e, t, n2, r, i) {
  const s = e.getEndXY(), a2 = e.hasAttribute(1) && !t, o = e.hasAttribute(2) && !n2;
  let u = Number.NaN, m = Number.NaN;
  return a2 && (u = e.getEndAttributeAsDbl(1, 0)), o && (m = e.getEndAttributeAsDbl(2, 0)), i.startObject(), i.addFieldName("b"), i.startArray(), ke(a2, o, s.x, s.y, u, m, r, i), be(e.m_cp[0].x, e.m_cp[0].y, r, i), be(e.m_cp[1].x, e.m_cp[1].y, r, i), i.endArray(), i.endObject(), false;
}
function pe(e, t, n2, r, i) {
  const s = e.getEndXY(), a2 = e.hasAttribute(1) && !t, o = e.hasAttribute(2) && !n2;
  let u = Number.NaN, m = Number.NaN;
  a2 && (u = e.getEndAttributeAsDbl(1, 0)), o && (m = e.getEndAttributeAsDbl(2, 0)), i.startObject(), i.addFieldName("n"), i.startArray(), ke(a2, o, s.x, s.y, u, m, r, i), be(e.m_cp.x, e.m_cp.y, r, i);
  const l = r;
  return i.addDouble(e.m_weights[0], l), i.addDouble(e.m_weights[1], l), i.addDouble(e.m_weights[2], l), i.endArray(), i.endObject(), false;
}
function ke(e, t, n2, r, i, s, a2, o) {
  o.startArray(), o.addDouble(n2, a2), o.addDouble(r, a2), e && o.addDouble(i, a2), t && o.addDouble(s, a2), o.endArray();
}
function be(e, t, n2, r) {
  r.startArray(), r.addDouble(e, n2), r.addDouble(t, n2), r.endArray();
}
var ye = class {
  getOperatorType() {
    return 10405;
  }
  accelerateGeometry(e, t, n2) {
    return false;
  }
  canAccelerateGeometry(e) {
    return false;
  }
  supportsCurves() {
    return true;
  }
  execute(e, t, n2, r, i, s) {
    Ne(e, t, n2, r);
  }
  exportSpatialReference(e, t, r, i) {
    n(0);
  }
  exportProjectionTransformation(e, t, r, i) {
    n(0);
  }
  exportDatumTransformation(e, t, r, i) {
    n(0);
  }
  static geometryTypeToString(e) {
    return n(0), "";
  }
};
function Ne(t, r, i, a2, o) {
  if (r || i) {
    if (a2.startObject(), null !== r) {
      switch (r.getGeometryType()) {
        case a.enumPolygon:
          Te(true, t, r, a2);
          break;
        case a.enumPolyline:
          Te(false, t, r, a2);
          break;
        case a.enumMultiPoint:
          ge(t, r, a2);
          break;
        case a.enumPoint:
          ve(t, r, a2);
          break;
        case a.enumEnvelope:
          xe(t, r, a2);
          break;
        case a.enumMultipatch:
          n(0);
          break;
        default:
          b("exportToJSON");
      }
    }
    null !== i && (a2.addFieldName("spatialReference"), Se(t, i, a2)), a2.endObject();
  }
}
function Te(e, t, r, i) {
  const s = r.getImpl(), o = !!(2 & t), u = !!(4 & t), m = !!(8 & t), l = s.hasAttribute(1) && !o, c = s.hasAttribute(2) && !u, d = s.hasAttribute(3) && !m, _ = s.hasNonLinearSegments();
  l && (i.addFieldName("hasZ"), i.addBool(true)), c && (i.addFieldName("hasM"), i.addBool(true)), e ? _ ? i.addFieldName("curveRings") : i.addFieldName("rings") : _ ? i.addFieldName("curvePaths") : i.addFieldName("paths");
  let h = null;
  const f = [];
  if (r.isEmpty()) i.startArray(), i.endArray();
  else {
    const e2 = 17 - (31 & t >> 13);
    i.startArray();
    const n2 = r.getPathCount();
    let m2 = 0;
    const p = s.getAttributeStreamRef(0);
    let k = null, b2 = null, y = null;
    const N = new nu();
    let T = null, g = null, v = null;
    _ && (T = s.getSegmentFlagsStreamRef(), g = s.getSegmentIndexStreamRef(), v = s.getSegmentDataStreamRef()), l && (k = s.getAttributeStreamRef(1)), c && (b2 = s.getAttributeStreamRef(2)), d && (y = s.getAttributeStreamRef(3), h = j(3, 0));
    for (let t2 = 0; t2 < n2; t2++) {
      i.startArray(), d && f.push(0);
      const n3 = r.getPathEnd(t2);
      if (m2 === n3) {
        i.endArray();
        continue;
      }
      const s2 = r.isClosedPath(t2);
      let _2 = p.read(2 * m2), x = p.read(2 * m2 + 1), A2 = l ? k.read(m2) : Number.NaN, S = c ? b2.read(m2) : Number.NaN, w = d ? y.read(m2) : 0;
      we(l, c, _2, x, A2, S, e2, i);
      let C2 = 1;
      d && (h.add(w), f[f.length - 1]++);
      const D = _2, F = x, j2 = A2, z2 = S, O = w;
      let I = false, E = 0, B2 = Number.NaN, P3 = Number.NaN, V2 = 0;
      for (let t3 = m2 + 1, r2 = m2, M = s2 ? n3 + 1 : n3; t3 < M; t3++, r2++) {
        const s3 = null !== T ? 31 & T.read(r2) : 1;
        let m3, M2;
        if (t3 < n3 ? (m3 = p.read(2 * t3), M2 = p.read(2 * t3 + 1), l && (B2 = k.read(t3)), c && (P3 = b2.read(t3)), d && (V2 = y.read(t3))) : (m3 = D, M2 = F, B2 = j2, P3 = z2, V2 = O), 1 !== s3) {
          I = true, 4 === s3 ? N.createEllipticArc() : 2 === s3 ? N.createCubicBezier() : 16 === s3 ? N.createQuadraticBezier() : 8 === s3 ? N.createQuadraticRationalBezier() : z("JSON export.unsupported curve");
          const t4 = N.get(), n4 = g.read(r2);
          t4.setStartXYCoords(_2, x), t4.setEndXYCoords(m3, M2), l && (t4.setStartAttribute(1, 0, A2), t4.setEndAttribute(1, 0, B2)), c && (t4.setStartAttribute(2, 0, S), t4.setEndAttribute(2, 0, P3)), t4.readFromBufferStream(v, n4);
          _e(N.get(), o, u, e2, i) && E++;
        } else we(l, c, m3, M2, B2, P3, e2, i);
        d && (h.add(V2), f[f.length - 1]++), C2++, _2 = m3, x = M2, A2 = B2, S = P3, w = V2;
      }
      I && 0 === E || (C2 < 2 && E < 1 && (we(l, c, _2, x, A2, S, e2, i), C2++, d && (h.add(w), f[f.length - 1]++)), s2 && C2 < 3 && E < 2 && (we(l, c, D, F, j2, z2, e2, i), C2++, _2 = D, x = F, A2 = j2, S = z2, w = O, d && (h.add(O), f[f.length - 1]++))), i.endArray(), m2 = n3;
    }
    i.endArray();
  }
  if (d) {
    i.addFieldName("ids"), i.startArray();
    let e2 = 0;
    for (let t2 = 0, r2 = f.length; t2 < r2; ++t2) {
      const r3 = f[t2];
      n(0 === r3 || null !== h && e2 + r3 <= h.size()), i.startArray();
      for (let t3 = 0; t3 < r3; ++t3) i.addInt32(h.read(e2)), e2++;
      i.endArray();
    }
    i.endArray();
  }
}
function ge(e, t, r) {
  const i = t.getImpl(), s = i.hasAttribute(1) && !(2 & e), a2 = i.hasAttribute(2) && !(4 & e), o = i.hasAttribute(3) && !(8 & e);
  s && (r.addFieldName("hasZ"), r.addBool(true)), a2 && (r.addFieldName("hasM"), r.addBool(true)), r.addFieldName("points");
  const u = t.getPointCount();
  if (t.isEmpty()) r.startArray(), r.endArray();
  else {
    const t2 = 17 - (31 & e >> 13);
    r.startArray();
    const n2 = i.getAttributeStreamRef(0);
    let o2 = null, m = null;
    s && (o2 = i.getAttributeStreamRef(1)), a2 && (m = i.getAttributeStreamRef(2));
    for (let e2 = 0; e2 < u; e2++) {
      const i2 = n2.read(2 * e2), u2 = n2.read(2 * e2 + 1);
      let l = Number.NaN, c = Number.NaN;
      s && (l = o2.read(e2)), a2 && (c = m.read(e2)), we(s, a2, i2, u2, l, c, t2, r);
    }
    r.endArray();
  }
  if (o) {
    let e2 = null;
    i.isEmpty() || (e2 = i.getAttributeStreamRef(3)), n(0 === u || null !== e2 && e2.size() >= u), r.addFieldName("ids"), r.startArray();
    for (let t2 = 0; t2 < u; t2++) r.addInt32(e2.read(t2));
    r.endArray();
  }
}
function ve(e, t, n2) {
  const r = t.hasAttribute(1) && !(2 & e), i = t.hasAttribute(2) && !(4 & e), s = t.hasAttribute(3) && !(8 & e);
  if (t.isEmpty()) return n2.addFieldName("x"), n2.addNull(), n2.addFieldName("y"), n2.addNull(), r && (n2.addFieldName("z"), n2.addNull()), i && (n2.addFieldName("m"), n2.addNull()), void (s && (n2.addFieldName("id"), n2.addInt32(0)));
  const a2 = 17 - (31 & e >> 13);
  n2.addFieldName("x"), n2.addDouble(t.getX(), a2), n2.addFieldName("y"), n2.addDouble(t.getY(), a2), r && (n2.addFieldName("z"), n2.addDouble(t.getZ(), a2)), i && (n2.addFieldName("m"), n2.addDouble(t.getM(), a2)), s && (n2.addFieldName("id"), n2.addInt32(t.getID()));
}
function xe(e, t, n2) {
  const r = t.hasAttribute(1) && !(2 & e), i = t.hasAttribute(2) && !(4 & e), s = t.hasAttribute(3) && !(8 & e);
  if (t.isEmpty()) return n2.addFieldName("xmin"), n2.addNull(), n2.addFieldName("ymin"), n2.addNull(), n2.addFieldName("xmax"), n2.addNull(), n2.addFieldName("ymax"), n2.addNull(), r && (n2.addFieldName("zmin"), n2.addNull(), n2.addFieldName("zmax"), n2.addNull()), i && (n2.addFieldName("mmin"), n2.addNull(), n2.addFieldName("mmax"), n2.addNull()), void (s && (n2.addFieldName("idmin"), n2.addInt32(0), n2.addFieldName("idmax"), n2.addInt32(0)));
  const a2 = 17 - (31 & e >> 13);
  if (n2.addFieldName("xmin"), n2.addDouble(t.getXMin(), a2), n2.addFieldName("ymin"), n2.addDouble(t.getYMin(), a2), n2.addFieldName("xmax"), n2.addDouble(t.getXMax(), a2), n2.addFieldName("ymax"), n2.addDouble(t.getYMax(), a2), r) {
    const e2 = t.queryInterval(1, 0);
    n2.addFieldName("zmin"), n2.addDouble(e2.vmin, a2), n2.addFieldName("zmax"), n2.addDouble(e2.vmax, a2);
  }
  if (i) {
    const e2 = t.queryInterval(2, 0);
    n2.addFieldName("mmin"), n2.addDouble(e2.vmin, a2), n2.addFieldName("mmax"), n2.addDouble(e2.vmax, a2);
  }
  if (s) {
    const e2 = t.queryInterval(3, 0);
    n2.addFieldName("idmin"), n2.addInt32(e2.vmin), n2.addFieldName("idmax"), n2.addInt32(e2.vmax);
  }
}
function Ae(e, n2, r) {
  r.startObject();
  const i = n2.getID();
  i <= 0 && P2("cannot export unit that has no valid WKID"), r.addFieldName("uwkid"), r.addInt32(i), r.endObject();
}
function Se(e, t, n2) {
  n2.startObject();
  let r = 0;
  t.isCustomWkid() || (r = t.getOldID());
  let i = 0;
  const s = t.getVCS();
  if (null !== s && (s.isCustomWkid() || (i = s.getOldID()), i <= 0 && (r = 0)), r > 0) {
    n2.addFieldName("wkid"), n2.addInt32(r);
    const e2 = t.getLatestID();
    if (e2 > 0 && e2 !== r && (n2.addFieldName("latestWkid"), n2.addInt32(e2)), i > 0) {
      n2.addFieldName("vcsWkid"), n2.addInt32(i);
      const e3 = t.getLatestVerticalID();
      e3 !== i && (n2.addFieldName("latestVcsWkid"), n2.addInt32(e3));
    }
  }
  if (0 === t.getCoordinateSystemType()) n2.addFieldName("wkid"), n2.addNull(), null !== t.getUnit() && (n2.addFieldName("unit"), Ae(e, t.getUnit(), n2));
  else if (r <= 0 || 1 & e) {
    let r2 = "";
    64 & e && (r2 = t.getText2(), n2.addFieldName("wkt2"), n2.addString(r2));
    const i2 = t.getText();
    i2 !== r2 && (n2.addFieldName("wkt"), n2.addString(i2));
  }
  if (16 & e) {
    const e2 = new nc();
    t.queryPrecisionDescriptor(e2), n2.addFieldName("xyTolerance"), n2.addDouble(e2.getTolerance(0)), n2.addFieldName("zTolerance"), n2.addDouble(e2.getTolerance(1)), n2.addFieldName("mTolerance"), n2.addDouble(e2.getTolerance(2)), n2.addFieldName("falseX"), n2.addDouble(e2.getFalseX()), n2.addFieldName("falseY"), n2.addDouble(e2.getFalseY()), n2.addFieldName("xyUnits"), n2.addDouble(e2.getGridUnitsXY()), n2.addFieldName("falseZ"), n2.addDouble(e2.getFalseZ()), n2.addFieldName("zUnits"), n2.addDouble(e2.getGridUnitsZ()), n2.addFieldName("falseM"), n2.addDouble(e2.getFalseM()), n2.addFieldName("mUnits"), n2.addDouble(e2.getGridUnitsM());
  }
  n2.endObject();
}
function we(e, t, n2, r, i, s, a2, o) {
  o.startArray(), o.addDouble(n2, a2), o.addDouble(r, a2), e && o.addDouble(i, a2), t && o.addDouble(s, a2), o.endArray();
}
var Ce2 = { s_a: "a".charCodeAt(0), s_A: "A".charCodeAt(0), s_asterisk: "*".charCodeAt(0), s_b: "b".charCodeAt(0), s_backspace: "\b".charCodeAt(0), s_backslash: "\\".charCodeAt(0), s_beginArray: "[".charCodeAt(0), s_beginObject: "{".charCodeAt(0), s_colon: ":".charCodeAt(0), s_period: ".".charCodeAt(0), s_comma: ",".charCodeAt(0), s_doubleQuote: '"'.charCodeAt(0), s_endArray: "]".charCodeAt(0), s_endObject: "}".charCodeAt(0), s_e: "e".charCodeAt(0), s_E: "E".charCodeAt(0), s_f: "f".charCodeAt(0), s_formfeed: "\f".charCodeAt(0), s_F: "F".charCodeAt(0), s_forwardslash: "/".charCodeAt(0), s_lt: "<".charCodeAt(0), s_minus: "-".charCodeAt(0), s_plus: "+".charCodeAt(0), s_n: "n".charCodeAt(0), s_N: "N".charCodeAt(0), s_newline: "\n".charCodeAt(0), s_r: "r".charCodeAt(0), s_carriageReturn: "\r".charCodeAt(0), s_t: "t".charCodeAt(0), s_tab: "	".charCodeAt(0), s_u: "u".charCodeAt(0), s_zero: "0".charCodeAt(0), s_nine: "9".charCodeAt(0) };
var De = class {
  constructor(t) {
    this.m_functionStack = [], this.m_pushPositions = [], this.m_utf8Decoder = new TextDecoder("utf-8", { fatal: true }), void 0 === t ? (this.m_startToken = Number.MAX_SAFE_INTEGER, this.m_endToken = 0, this.m_currentTokenType = 0, this.m_functionStack.push(() => this.accept_()), this.m_jsonString = null, this.m_bHasEscapes = false) : t.jsonString ? this.resetParserFromString(t.jsonString) : t.jsonStream ? z("streaming json parsing not yet impl") : b("invalid constructor parameter");
  }
  prepSubstrString_() {
  }
  getCurrentSubstrString_() {
    return this.m_jsonString.slice(this.m_startToken, this.m_endToken);
  }
  stepOverCharString_() {
    this.m_endToken++;
  }
  peekCharString_() {
    return this.m_jsonString.charCodeAt(this.m_endToken);
  }
  getString_(e) {
    var _a;
    const t = (_a = this.m_jsonString) == null ? void 0 : _a.slice(this.m_startToken, this.m_startToken + e - 1);
    this.m_endToken += e - 1;
    return { s: t, bDone: this.m_endToken >= this.m_jsonString.length };
  }
  incrementString_() {
    this.m_endToken++;
  }
  eofString_() {
    return this.m_endToken >= this.m_jsonString.length;
  }
  setStringFunctions_() {
    this.m_prepSubstr = this.prepSubstrString_, this.m_getCurrentSubstr = this.getCurrentSubstrString_, this.m_stepOverChar = this.stepOverCharString_, this.m_peekChar = this.peekCharString_, this.m_get = this.getString_, this.m_increment = this.incrementString_, this.m_eof = this.eofString_;
  }
  setStreamFunctions_() {
    z("streaming json parsing not yet impl");
  }
  reset_() {
    this.m_jsonString = null, this.m_endToken = 0, this.m_startToken = Number.MAX_SAFE_INTEGER, this.m_currentTokenType = 0, this.m_bHasEscapes = false, this.m_functionStack.length = 0, this.m_functionStack.push(() => this.start_()), this.m_pushPositions.length = 0;
  }
  resetParserFromString(e) {
    this.reset_(), this.setStringFunctions_(), this.m_jsonString = e;
  }
  resetParserFromStream(e) {
    z("streaming json parsing not yet impl");
  }
  resetToPosition(e) {
    return n(0), false;
  }
  nextToken() {
    return this.m_functionStack.at(-1)(), this.m_currentTokenType;
  }
  currentToken() {
    return this.m_currentTokenType;
  }
  currentTokenStartIndex() {
    return this.m_startToken;
  }
  currentTokenEndIndex() {
    return this.m_endToken;
  }
  currentText() {
    return n(0), "";
  }
  childrenAsString() {
    return n(0), "";
  }
  skipChildren() {
    this.skipChildren_();
  }
  skipChildren_() {
    if (1 !== this.m_currentTokenType) if (2 !== this.m_currentTokenType) ;
    else {
      let e = 1;
      do {
        this.m_currentTokenType = this.nextToken(), 2 === this.m_currentTokenType ? e++ : 4 === this.m_currentTokenType && e--;
      } while (4 !== this.m_currentTokenType || 0 !== e);
    }
    else {
      let e = 1;
      do {
        this.m_currentTokenType = this.nextToken(), 1 === this.m_currentTokenType ? e++ : 3 === this.m_currentTokenType && e--;
      } while (3 !== this.m_currentTokenType || 0 !== e);
    }
  }
  currentTerminalAsString_() {
    switch (this.m_currentTokenType) {
      case 7:
      case 8:
      case 9:
        return this.m_getCurrentSubstr().slice(0, this.m_endToken - this.m_startToken);
      case 10:
        return "null";
      case 11:
        return "true";
      case 12:
        return "false";
    }
    P2("invalid token");
  }
  toUTF8_(e, t) {
    let n2 = 0, r = e;
    for (; t.charCodeAt(r) === Ce2.s_backslash && t.charCodeAt(r + 1) === Ce2.s_u; ) n2++, r += 6;
    r = e;
    const i = new Uint8Array(n2);
    let s = 0;
    for (; t.charCodeAt(r) === Ce2.s_backslash && t.charCodeAt(r + 1) === Ce2.s_u; ) i[s++] = Number.parseInt(t.slice(r + 2, r + 6), 16), r += 6;
    return { u8s: this.m_utf8Decoder.decode(i), end: r };
  }
  unquoteCurrentString_() {
    let e = "", t = 1;
    const n2 = this.m_endToken - this.m_startToken - 1;
    let r = 0;
    const i = this.m_getCurrentSubstr();
    for (let s = t; s < n2; s++) if (i.charCodeAt(s) !== Ce2.s_backslash) r++;
    else {
      switch (r > 0 && (e += i.slice(t, t + r)), i.charCodeAt(++s)) {
        case Ce2.s_doubleQuote:
          e += '"';
          break;
        case Ce2.s_u: {
          const { u8s: t2, end: n3 } = this.toUTF8_(s - 1, i);
          s = n3 - 1, e += t2;
          break;
        }
        case Ce2.s_backslash:
          e += "\\";
          break;
        case Ce2.s_forwardslash:
          e += "/";
          break;
        case Ce2.s_b:
          e += "\b";
          break;
        case Ce2.s_f:
          e += "\f";
          break;
        case Ce2.s_n:
          e += "\n";
          break;
        case Ce2.s_r:
          e += "\r";
          break;
        case Ce2.s_t:
          e += "	";
      }
      t = s + 1, r = 0;
    }
    return r > 0 && (e += i.slice(t, t + r)), e;
  }
  currentString() {
    if (5 !== this.m_currentTokenType && 6 !== this.m_currentTokenType) return this.currentTerminalAsString_();
    if (this.m_bHasEscapes) return this.unquoteCurrentString_();
    return this.m_getCurrentSubstr().slice(1, this.m_endToken - this.m_startToken - 2 + 1);
  }
  currentDoubleValue() {
    if (7 !== this.m_currentTokenType && 8 !== this.m_currentTokenType && 9 !== this.m_currentTokenType && 6 !== this.m_currentTokenType && 10 !== this.m_currentTokenType && P2("invalid token"), 10 === this.m_currentTokenType) return Number.NaN;
    let e = this.m_getCurrentSubstr(), n2 = this.m_endToken - this.m_startToken;
    if (6 === this.m_currentTokenType) {
      if ("NaN" === this.currentString()) return Number.NaN;
      e = e.slice(1), n2 -= 2, 0 === n2 && P2("invalid token");
    }
    const r = Number.parseFloat(e);
    if (6 === this.m_currentTokenType) Number.isNaN(r) && P2("invalid token");
    else if (Number.isNaN(r)) return Number.NaN;
    return r;
  }
  currentInt32Value() {
    8 !== this.m_currentTokenType && 6 !== this.m_currentTokenType && P2("invalid token");
    let e = this.m_getCurrentSubstr(), n2 = this.m_endToken - this.m_startToken;
    6 === this.m_currentTokenType && (e = e.slice(1), n2 -= 2, 0 === n2 && P2("invalid token"));
    const r = parseInt(e);
    return Number.isNaN(r) && P2("invalid token"), r;
  }
  currentInt64Value() {
    return n(0), 0n;
  }
  currentBoolValue() {
    return n(0), false;
  }
  isError() {
    return 0;
  }
  JSONString() {
    return n(0), "";
  }
  pushPosition() {
    return n(0), false;
  }
  popPosition() {
    return n(0), false;
  }
  skipCStyleComments_() {
    n(0);
  }
  skipCppStyleComments_() {
    n(0);
  }
  skipComments_() {
    this.m_prepSubstr();
    let e = this.m_peekChar();
    this.m_stepOverChar(), this.m_eof() && P2("invalid token"), e = this.m_peekChar(), e === Ce2.s_asterisk ? this.skipCStyleComments_() : e === Ce2.s_forwardslash ? this.skipCppStyleComments_() : P2("invalid token");
  }
  skipWhiteSpace_() {
    let e;
    do {
      this.m_eof() && P2("invalid token");
      let n2 = this.m_peekChar();
      for (; n2 >= 9 && n2 <= 13 || 32 === n2; ) this.m_increment(), this.m_eof() && P2("invalid token"), n2 = this.m_peekChar();
      n2 === Ce2.s_forwardslash ? (this.m_startToken = this.m_endToken, e = true, this.skipComments_()) : e = false;
    } while (e);
  }
  rightBracket_() {
    return this.m_peekChar() === Ce2.s_endArray && (this.m_startToken = this.m_endToken, this.m_increment(), this.m_currentTokenType = 4, true);
  }
  rightBrace_() {
    return this.m_peekChar() === Ce2.s_endObject && (this.m_startToken = this.m_endToken, this.m_increment(), this.m_currentTokenType = 3, true);
  }
  string_() {
    this.m_prepSubstr(), this.m_bHasEscapes = false, this.m_stepOverChar(), this.m_eof() && P2("invalid token");
    let e = this.m_peekChar();
    for (; e !== Ce2.s_doubleQuote; ) {
      const n2 = e === Ce2.s_backslash;
      if (this.m_stepOverChar(), this.m_eof() && P2("invalid token"), e = this.m_peekChar(), n2) if (this.m_bHasEscapes = true, e === Ce2.s_doubleQuote || e === Ce2.s_backslash || e === Ce2.s_forwardslash || e === Ce2.s_b || e === Ce2.s_f || e === Ce2.s_n || e === Ce2.s_r || e === Ce2.s_t) this.m_stepOverChar(), this.m_eof() && P2("invalid token"), e = this.m_peekChar();
      else if (e === Ce2.s_u) for (let r = 0; r < 4; r++) this.m_stepOverChar(), this.m_eof() && P2("invalid token"), e = this.m_peekChar(), e >= Ce2.s_zero && e <= Ce2.s_nine || e >= Ce2.s_a && e <= Ce2.s_f || e >= Ce2.s_A && e <= Ce2.s_F || P2("invalid token");
      else P2("invalid token");
    }
    this.m_stepOverChar();
  }
  comma_() {
    return this.m_peekChar() === Ce2.s_comma && (this.m_increment(), true);
  }
  colon_() {
    return this.m_peekChar() === Ce2.s_colon && (this.m_increment(), true);
  }
  fieldNameEnd_() {
    this.skipWhiteSpace_(), this.m_functionStack.pop(), this.colon_() ? (this.skipWhiteSpace_(), this.value_()) : P2("invalid token");
  }
  fieldNameStart_() {
    this.m_startToken = this.m_endToken;
    this.m_peekChar() !== Ce2.s_doubleQuote && P2("invalid token"), this.string_(), this.m_currentTokenType = 5, this.m_functionStack.push(() => this.fieldNameEnd_());
  }
  pairEnd_() {
    this.skipWhiteSpace_(), this.comma_() ? (this.skipWhiteSpace_(), this.fieldNameStart_()) : this.rightBrace_() ? this.m_functionStack.pop() : P2("invalid token");
  }
  arrayStart_() {
    this.skipWhiteSpace_(), this.m_functionStack.pop(), this.rightBracket_() || (this.m_functionStack.push(() => this.elementEnd_()), this.value_());
  }
  elementEnd_() {
    this.skipWhiteSpace_(), this.comma_() ? (this.skipWhiteSpace_(), this.value_()) : this.rightBracket_() ? this.m_functionStack.pop() : P2("invalid token");
  }
  objectStart_() {
    this.skipWhiteSpace_(), this.m_functionStack.pop(), this.rightBrace_() || (this.m_functionStack.push(() => this.pairEnd_()), this.fieldNameStart_());
  }
  valueStartObject_() {
    this.m_increment(), this.m_currentTokenType = 1, this.m_functionStack.push(() => this.objectStart_());
  }
  valueStartArray_() {
    this.m_increment(), this.m_currentTokenType = 2, this.m_functionStack.push(() => this.arrayStart_());
  }
  valueString_() {
    this.string_(), this.m_currentTokenType = 6;
  }
  int_() {
    this.m_peekChar() !== Ce2.s_zero ? this.digits_() : this.m_stepOverChar();
  }
  digits_() {
    let e = this.m_peekChar();
    do {
      this.m_stepOverChar(), this.m_eof() && P2("invalid token"), e = this.m_peekChar();
    } while (e >= Ce2.s_zero && e <= Ce2.s_nine);
  }
  frac_() {
    let e = this.m_peekChar();
    this.m_stepOverChar(), this.m_eof() && P2("invalid token"), e = this.m_peekChar(), e >= Ce2.s_zero && e <= Ce2.s_nine || P2("invalid token"), this.digits_();
  }
  exp_() {
    let e = this.m_peekChar();
    this.m_stepOverChar(), this.m_eof() && P2("invalid token"), e = this.m_peekChar(), e !== Ce2.s_plus && e !== Ce2.s_minus || (this.m_stepOverChar(), this.m_eof() && P2("invalid token"), e = this.m_peekChar()), e >= Ce2.s_zero && e <= Ce2.s_nine || P2("invalid token"), this.digits_();
  }
  valueNumber_() {
    this.m_prepSubstr();
    let e = false, n2 = this.m_peekChar();
    if (n2 === Ce2.s_minus ? (this.m_stepOverChar(), this.m_eof() && P2("invalid token"), n2 = this.m_peekChar(), e = true, n2 >= Ce2.s_zero && n2 <= Ce2.s_nine || P2("invalid token"), this.int_()) : this.int_(), n2 = this.m_peekChar(), n2 === Ce2.s_period) this.m_currentTokenType = 7, this.frac_(), n2 = this.m_peekChar(), n2 !== Ce2.s_e && n2 !== Ce2.s_E || this.exp_();
    else if (n2 === Ce2.s_e || n2 === Ce2.s_E) this.m_currentTokenType = 7, this.exp_();
    else {
      let t = 0;
      e && t++;
      const n3 = this.m_endToken - this.m_startToken - t;
      if (n3 < 10) this.m_currentTokenType = 8;
      else if (10 === n3) {
        const n4 = this.m_getCurrentSubstr();
        e ? n4.slice(t) <= "2147483648" ? this.m_currentTokenType = 8 : this.m_currentTokenType = 9 : n4.slice(t) <= "2147483647" ? this.m_currentTokenType = 8 : this.m_currentTokenType = 9;
      } else if (n3 < 19) this.m_currentTokenType = 9;
      else if (19 === n3) {
        const n4 = this.m_getCurrentSubstr();
        e ? n4.slice(t) <= "9223372036854775808" ? this.m_currentTokenType = 9 : this.m_currentTokenType = 7 : n4.slice(t) <= "9223372036854775807" ? this.m_currentTokenType = 9 : this.m_currentTokenType = 7;
      } else this.m_currentTokenType = 7;
    }
  }
  valueNull_() {
    const { s: e, bDone: n2 } = this.m_get(5);
    n2 && P2("invalid token"), "null" !== e && P2("invalid token"), this.m_currentTokenType = 10;
  }
  valueTrue_() {
    const { s: e, bDone: n2 } = this.m_get(5);
    n2 && P2("invalid token"), "true" !== e && P2("invalid token"), this.m_currentTokenType = 11;
  }
  valueFalse_() {
    const { s: e, bDone: n2 } = this.m_get(6);
    n2 && P2("invalid token"), "false" !== e && P2("invalid token"), this.m_currentTokenType = 12;
  }
  valueNan_() {
    const { s: e, bDone: n2 } = this.m_get(4);
    n2 && P2("invalid token"), "NaN" !== e && P2("invalid token"), this.m_currentTokenType = 7;
  }
  value_() {
    this.m_startToken = this.m_endToken;
    const e = this.m_peekChar();
    e === Ce2.s_beginObject ? this.valueStartObject_() : e === Ce2.s_beginArray ? this.valueStartArray_() : e === Ce2.s_doubleQuote ? this.valueString_() : e === Ce2.s_minus || e >= Ce2.s_zero && e <= Ce2.s_zero + 9 ? this.valueNumber_() : e === Ce2.s_n ? this.valueNull_() : e === Ce2.s_t ? this.valueTrue_() : e === Ce2.s_f ? this.valueFalse_() : e === Ce2.s_N ? this.valueNan_() : P2("invalid token");
  }
  start_() {
    this.skipWhiteSpace_(), this.m_functionStack.pop(), this.m_functionStack.push(() => this.accept_());
    const e = this.m_peekChar();
    e !== Ce2.s_beginObject && e !== Ce2.s_beginArray && P2("invalid token"), this.value_();
  }
  accept_() {
    this.m_startToken = this.m_endToken, this.m_currentTokenType = 0;
  }
};
var Fe = class {
  getOperatorType() {
    return 10404;
  }
  accelerateGeometry(e, t, n2) {
    return false;
  }
  canAccelerateGeometry(e) {
    return false;
  }
  supportsCurves() {
    return true;
  }
  execute(e, n2, r, i, s, a2, o) {
    let u;
    "string" == typeof r ? (u = new De({ jsonString: r }), u.nextToken()) : u = r, 1 !== u.currentToken() && P2("failed to import map geometry: start of object is expected");
    const m = K2(n2, e, u, i, s);
    return new Jt(m);
  }
  importProjectionTransformation(e, t) {
    return n(0), {};
  }
  importDatumTransformation(e, t) {
    return n(0), {};
  }
  static stringToGeometryType(e) {
    return (e = e.toLowerCase()).startsWith("esrigeometry") || P2("string_to_geometry_type"), e.endsWith("point") ? a.enumPoint : e.endsWith("envelope") ? a.enumEnvelope : e.endsWith("multipoint") ? a.enumMultiPoint : e.endsWith("polyline") ? a.enumPolyline : e.endsWith("polygon") ? a.enumPolygon : void P2("string_to_geometry_type");
  }
};
var je = new Y();
var ze = new ye();
var Oe = new Fe();
function Ie(e) {
  return Array.isArray(e) ? e[0].spatialReference : e.spatialReference;
}
function Ee(e, t) {
  const n2 = new L(e, { strict: false });
  return n2.nextToken(), Oe.execute(0, a.enumUnknown, n2, true, t);
}
function Be(e) {
  let t = null;
  return [e.map((e2) => {
    if (null == t) {
      const n2 = Pe(e2);
      return t = n2.getSpatialReference(), n2.getGeometry();
    }
    return Ve(e2);
  }), t];
}
function Pe(e) {
  return Ee(e, true);
}
function Ve(e) {
  return Ee(e, false).getGeometry();
}
function Me(e, t) {
  return e instanceof Jt && (t = e.getSpatialReference(), e = e.getGeometry()), (e == null ? void 0 : e.isEmpty()) ? null : (je.reset(), ze.execute(0, e, t, je), je.getObject());
}

export {
  Ie,
  Be,
  Pe,
  Ve,
  Me
};
//# sourceMappingURL=chunk-5GRVYYCJ.js.map
