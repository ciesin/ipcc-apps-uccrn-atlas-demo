import {
  o as o2
} from "./chunk-K35H6D4D.js";
import {
  o
} from "./chunk-UMYFDXOJ.js";
import {
  s
} from "./chunk-363AT5UF.js";

// node_modules/@arcgis/core/geometry/support/buffer/internals/Mat3.js
var t = class {
  constructor(t4, e4, r = 0, f, s2) {
    this.TypedArrayConstructor = t4, this.elementCount = 9;
    const i2 = this.TypedArrayConstructor;
    void 0 === f && (f = 9 * i2.BYTES_PER_ELEMENT);
    const d2 = 0 === e4.byteLength ? 0 : r;
    this.typedBuffer = null == s2 ? new i2(e4, d2) : new i2(e4, d2, (s2 - r) / i2.BYTES_PER_ELEMENT), this.typedBufferStride = f / i2.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
  }
  sliceBuffer(t4, e4, r = this.count - e4) {
    const f = this.typedBuffer.byteOffset + e4 * this.stride;
    return new t4(this.buffer, f, this.stride, f + r * this.stride);
  }
  getMat(t4, e4) {
    let r = t4 * this.typedBufferStride;
    for (let f = 0; f < 9; f++) e4[f] = this.typedBuffer[r++];
    return e4;
  }
  setMat(t4, e4) {
    let r = t4 * this.typedBufferStride;
    for (let f = 0; f < 9; f++) this.typedBuffer[r++] = e4[f];
  }
  get(t4, e4) {
    return this.typedBuffer[t4 * this.typedBufferStride + e4];
  }
  set(t4, e4, r) {
    this.typedBuffer[t4 * this.typedBufferStride + e4] = r;
  }
  copyFrom(t4, e4, r) {
    const f = this.typedBuffer, s2 = e4.typedBuffer;
    let i2 = t4 * this.typedBufferStride, d2 = r * e4.typedBufferStride;
    for (let u2 = 0; u2 < 9; ++u2) f[i2++] = s2[d2++];
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
};
t.ElementCount = 9;

// node_modules/@arcgis/core/geometry/support/buffer/internals/Mat4.js
var t2 = class {
  constructor(t4, e4, r = 0, f, s2) {
    this.TypedArrayConstructor = t4, this.elementCount = 16;
    const i2 = this.TypedArrayConstructor;
    void 0 === f && (f = 16 * i2.BYTES_PER_ELEMENT);
    const d2 = 0 === e4.byteLength ? 0 : r;
    this.typedBuffer = null == s2 ? new i2(e4, d2) : new i2(e4, d2, (s2 - r) / i2.BYTES_PER_ELEMENT), this.typedBufferStride = f / i2.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
  }
  sliceBuffer(t4, e4, r = this.count - e4) {
    const f = this.typedBuffer.byteOffset + e4 * this.stride;
    return new t4(this.buffer, f, this.stride, f + r * this.stride);
  }
  getMat(t4, e4) {
    let r = t4 * this.typedBufferStride;
    for (let f = 0; f < 16; f++) e4[f] = this.typedBuffer[r++];
    return e4;
  }
  setMat(t4, e4) {
    let r = t4 * this.typedBufferStride;
    for (let f = 0; f < 16; f++) this.typedBuffer[r++] = e4[f];
  }
  get(t4, e4) {
    return this.typedBuffer[t4 * this.typedBufferStride + e4];
  }
  set(t4, e4, r) {
    this.typedBuffer[t4 * this.typedBufferStride + e4] = r;
  }
  copyFrom(t4, e4, r) {
    this.copyFromTypedBuffer(t4, e4.typedBuffer, r * e4.typedBufferStride);
  }
  copyFromTypedBuffer(t4, e4, r) {
    const f = this.typedBuffer;
    let s2 = t4 * this.typedBufferStride;
    for (let i2 = 0; i2 < 16; ++i2) f[s2++] = e4[r++];
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
};
t2.ElementCount = 16;

// node_modules/@arcgis/core/geometry/support/buffer/internals/Scalar.js
var t3 = class {
  constructor(t4, e4, r = 0, s2, i2) {
    this.TypedArrayConstructor = t4, this.elementCount = 1;
    const f = this.TypedArrayConstructor;
    void 0 === s2 && (s2 = f.BYTES_PER_ELEMENT);
    const u2 = 0 === e4.byteLength ? 0 : r;
    this.typedBuffer = null == i2 ? new f(e4, u2) : new f(e4, u2, (i2 - r) / f.BYTES_PER_ELEMENT), this.stride = s2, this.typedBufferStride = s2 / f.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride);
  }
  sliceBuffer(t4, e4, r = this.count - e4) {
    const s2 = this.typedBuffer.byteOffset + e4 * this.stride;
    return new t4(this.buffer, s2, this.stride, s2 + r * this.stride);
  }
  get(t4) {
    return this.typedBuffer[t4 * this.typedBufferStride];
  }
  set(t4, e4) {
    this.typedBuffer[t4 * this.typedBufferStride] = e4;
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
};
t3.ElementCount = 1;

// node_modules/@arcgis/core/geometry/support/buffer/internals/Vec2.js
var e = class {
  constructor(t4, e4, r = 0, f, s2) {
    this.TypedArrayConstructor = t4, this.elementCount = 2;
    const i2 = this.TypedArrayConstructor;
    void 0 === f && (f = 2 * i2.BYTES_PER_ELEMENT);
    const d2 = 0 === e4.byteLength ? 0 : r;
    this.typedBuffer = null == s2 ? new i2(e4, d2) : new i2(e4, d2, (s2 - r) / i2.BYTES_PER_ELEMENT), this.typedBufferStride = f / i2.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
  }
  sliceBuffer(t4, e4, r = this.count - e4) {
    const f = this.typedBuffer.byteOffset + e4 * this.stride;
    return new t4(this.buffer, f, this.stride, f + r * this.stride);
  }
  getVec(e4, r) {
    return e4 *= this.typedBufferStride, o2(r, this.typedBuffer[e4], this.typedBuffer[e4 + 1]);
  }
  setVec(t4, e4) {
    t4 *= this.typedBufferStride, this.typedBuffer[t4++] = e4[0], this.typedBuffer[t4] = e4[1];
  }
  get(t4, e4) {
    return this.typedBuffer[t4 * this.typedBufferStride + e4];
  }
  set(t4, e4, r) {
    this.typedBuffer[t4 * this.typedBufferStride + e4] = r;
  }
  setValues(t4, e4, r) {
    t4 *= this.typedBufferStride, this.typedBuffer[t4++] = e4, this.typedBuffer[t4] = r;
  }
  copyFrom(t4, e4, r) {
    const f = this.typedBuffer, s2 = e4.typedBuffer;
    let i2 = t4 * this.typedBufferStride, d2 = r * e4.typedBufferStride;
    f[i2++] = s2[d2++], f[i2] = s2[d2];
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
};
e.ElementCount = 2;

// node_modules/@arcgis/core/geometry/support/buffer/internals/Vec3.js
var e2 = class {
  constructor(t4, e4, r = 0, f, s2) {
    this.TypedArrayConstructor = t4, this.elementCount = 3;
    const i2 = this.TypedArrayConstructor;
    void 0 === f && (f = 3 * i2.BYTES_PER_ELEMENT);
    const u2 = 0 === e4.byteLength ? 0 : r;
    this.typedBuffer = null == s2 ? new i2(e4, u2) : new i2(e4, u2, (s2 - r) / i2.BYTES_PER_ELEMENT), this.typedBufferStride = f / i2.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
  }
  sliceBuffer(t4, e4, r = this.count - e4) {
    const f = this.typedBuffer.byteOffset + e4 * this.stride;
    return new t4(this.buffer, f, this.stride, f + r * this.stride);
  }
  getVec(e4, r) {
    return e4 *= this.typedBufferStride, o(r, this.typedBuffer[e4], this.typedBuffer[e4 + 1], this.typedBuffer[e4 + 2]);
  }
  setVec(t4, e4) {
    t4 *= this.typedBufferStride, this.typedBuffer[t4++] = e4[0], this.typedBuffer[t4++] = e4[1], this.typedBuffer[t4] = e4[2];
  }
  get(t4, e4) {
    return this.typedBuffer[t4 * this.typedBufferStride + e4];
  }
  set(t4, e4, r) {
    this.typedBuffer[t4 * this.typedBufferStride + e4] = r;
  }
  setValues(t4, e4, r, f) {
    t4 *= this.typedBufferStride, this.typedBuffer[t4++] = e4, this.typedBuffer[t4++] = r, this.typedBuffer[t4] = f;
  }
  copyFrom(t4, e4, r) {
    const f = this.typedBuffer, s2 = e4.typedBuffer;
    let i2 = t4 * this.typedBufferStride, u2 = r * e4.typedBufferStride;
    f[i2++] = s2[u2++], f[i2++] = s2[u2++], f[i2] = s2[u2];
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
};
e2.ElementCount = 3;

// node_modules/@arcgis/core/geometry/support/buffer/internals/Vec4.js
var e3 = class {
  constructor(t4, e4, r = 0, f, s2) {
    this.TypedArrayConstructor = t4, this.start = r, this.elementCount = 4;
    const i2 = this.TypedArrayConstructor;
    void 0 === f && (f = 4 * i2.BYTES_PER_ELEMENT);
    const u2 = 0 === e4.byteLength ? 0 : r;
    this.typedBuffer = null == s2 ? new i2(e4, u2) : new i2(e4, u2, (s2 - r) / i2.BYTES_PER_ELEMENT), this.typedBufferStride = f / i2.BYTES_PER_ELEMENT, this.count = Math.ceil(this.typedBuffer.length / this.typedBufferStride), this.stride = this.typedBufferStride * this.TypedArrayConstructor.BYTES_PER_ELEMENT;
  }
  sliceBuffer(t4, e4, r = this.count - e4) {
    const f = this.typedBuffer.byteOffset + e4 * this.stride;
    return new t4(this.buffer, f, this.stride, f + r * this.stride);
  }
  getVec(e4, r) {
    return e4 *= this.typedBufferStride, s(r, this.typedBuffer[e4++], this.typedBuffer[e4++], this.typedBuffer[e4++], this.typedBuffer[e4]);
  }
  setVec(t4, e4) {
    t4 *= this.typedBufferStride, this.typedBuffer[t4++] = e4[0], this.typedBuffer[t4++] = e4[1], this.typedBuffer[t4++] = e4[2], this.typedBuffer[t4] = e4[3];
  }
  get(t4, e4) {
    return this.typedBuffer[t4 * this.typedBufferStride + e4];
  }
  set(t4, e4, r) {
    this.typedBuffer[t4 * this.typedBufferStride + e4] = r;
  }
  setValues(t4, e4, r, f, s2) {
    t4 *= this.typedBufferStride, this.typedBuffer[t4++] = e4, this.typedBuffer[t4++] = r, this.typedBuffer[t4++] = f, this.typedBuffer[t4] = s2;
  }
  copyFrom(t4, e4, r) {
    const f = this.typedBuffer, s2 = e4.typedBuffer;
    let i2 = t4 * this.typedBufferStride, u2 = r * e4.typedBufferStride;
    f[i2++] = s2[u2++], f[i2++] = s2[u2++], f[i2++] = s2[u2++], f[i2] = s2[u2];
  }
  get buffer() {
    return this.typedBuffer.buffer;
  }
};
e3.ElementCount = 4;

// node_modules/@arcgis/core/geometry/support/buffer/BufferView.js
var y = class _y extends t3 {
  constructor(e4, t4 = 0, r, s2) {
    super(Float32Array, e4, t4, r, s2), this.elementType = "f32";
  }
  static fromTypedArray(e4, t4) {
    return new _y(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
y.ElementType = "f32";
var u = class _u extends e {
  constructor(e4, t4 = 0, r, s2) {
    super(Float32Array, e4, t4, r, s2), this.elementType = "f32";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_u, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _u(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
u.ElementType = "f32";
var i = class _i extends e2 {
  constructor(e4, t4 = 0, r, s2) {
    super(Float32Array, e4, t4, r, s2), this.elementType = "f32";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_i, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _i(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
i.ElementType = "f32";
var c = class _c extends e3 {
  constructor(e4, t4 = 0, r, s2) {
    super(Float32Array, e4, t4, r, s2), this.elementType = "f32";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_c, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _c(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
c.ElementType = "f32";
var l = class _l extends t {
  constructor(e4, t4 = 0, r, s2) {
    super(Float32Array, e4, t4, r, s2), this.elementType = "f32";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_l, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _l(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
l.ElementType = "f32";
var a = class _a extends t {
  constructor(e4, t4 = 0, r, s2) {
    super(Float64Array, e4, t4, r, s2), this.elementType = "f64";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_a, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _a(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
a.ElementType = "f64";
var p = class _p extends t2 {
  constructor(e4, t4 = 0, r, s2) {
    super(Float32Array, e4, t4, r, s2), this.elementType = "f32";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_p, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _p(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
p.ElementType = "f32";
var b = class _b extends t2 {
  constructor(e4, t4 = 0, r, s2) {
    super(Float64Array, e4, t4, r, s2), this.elementType = "f64";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_b, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _b(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
b.ElementType = "f64";
var o3 = class _o extends t3 {
  constructor(e4, t4 = 0, r, s2) {
    super(Float64Array, e4, t4, r, s2), this.elementType = "f64";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_o, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _o(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
o3.ElementType = "f64";
var m = class _m extends e {
  constructor(e4, t4 = 0, r, s2) {
    super(Float64Array, e4, t4, r, s2), this.elementType = "f64";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_m, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _m(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
m.ElementType = "f64";
var T = class _T extends e2 {
  constructor(e4, t4 = 0, r, s2) {
    super(Float64Array, e4, t4, r, s2), this.elementType = "f64";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_T, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _T(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
T.ElementType = "f64";
var h = class _h extends e3 {
  constructor(e4, t4 = 0, r, s2) {
    super(Float64Array, e4, t4, r, s2), this.elementType = "f64";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_h, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _h(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
h.ElementType = "f64";
var d = class _d extends t3 {
  constructor(e4, t4 = 0, r, s2) {
    super(Uint8Array, e4, t4, r, s2), this.elementType = "u8";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_d, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _d(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
d.ElementType = "u8";
var A = class _A extends e {
  constructor(e4, t4 = 0, r, s2) {
    super(Uint8Array, e4, t4, r, s2), this.elementType = "u8";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_A, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _A(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
A.ElementType = "u8";
var O = class _O extends e2 {
  constructor(e4, t4 = 0, r, s2) {
    super(Uint8Array, e4, t4, r, s2), this.elementType = "u8";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_O, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _O(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
O.ElementType = "u8";
var x = class _x extends e3 {
  constructor(e4, t4 = 0, r, s2) {
    super(Uint8Array, e4, t4, r, s2), this.elementType = "u8";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_x, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _x(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
x.ElementType = "u8";
var g = class _g extends t3 {
  constructor(e4, t4 = 0, r, s2) {
    super(Uint16Array, e4, t4, r, s2), this.elementType = "u16";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_g, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _g(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
g.ElementType = "u16";
var w = class _w extends e {
  constructor(e4, t4 = 0, r, s2) {
    super(Uint16Array, e4, t4, r, s2), this.elementType = "u16";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_w, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _w(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
w.ElementType = "u16";
var E = class _E extends e2 {
  constructor(e4, t4 = 0, r, s2) {
    super(Uint16Array, e4, t4, r, s2), this.elementType = "u16";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_E, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _E(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
E.ElementType = "u16";
var L = class _L extends e3 {
  constructor(e4, t4 = 0, r, s2) {
    super(Uint16Array, e4, t4, r, s2), this.elementType = "u16";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_L, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _L(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
L.ElementType = "u16";
var B = class _B extends t3 {
  constructor(e4, t4 = 0, r, s2) {
    super(Uint32Array, e4, t4, r, s2), this.elementType = "u32";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_B, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _B(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
B.ElementType = "u32";
var F = class _F extends e {
  constructor(e4, t4 = 0, r, s2) {
    super(Uint32Array, e4, t4, r, s2), this.elementType = "u32";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_F, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _F(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
F.ElementType = "u32";
var I = class _I extends e2 {
  constructor(e4, t4 = 0, r, s2) {
    super(Uint32Array, e4, t4, r, s2), this.elementType = "u32";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_I, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _I(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
I.ElementType = "u32";
var U = class _U extends e3 {
  constructor(e4, t4 = 0, r, s2) {
    super(Uint32Array, e4, t4, r, s2), this.elementType = "u32";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_U, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _U(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
U.ElementType = "u32";
var j = class _j extends t3 {
  constructor(e4, t4 = 0, r, s2) {
    super(Int8Array, e4, t4, r, s2), this.elementType = "i8";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_j, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _j(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
j.ElementType = "i8";
var V = class _V extends e {
  constructor(e4, t4 = 0, r, s2) {
    super(Int8Array, e4, t4, r, s2), this.elementType = "i8";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_V, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _V(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
V.ElementType = "i8";
var M = class _M extends e2 {
  constructor(e4, t4 = 0, r, s2) {
    super(Int8Array, e4, t4, r, s2), this.elementType = "i8";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_M, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _M(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
M.ElementType = "i8";
var S = class _S extends e3 {
  constructor(e4, t4 = 0, r, s2) {
    super(Int8Array, e4, t4, r, s2), this.elementType = "i8";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_S, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _S(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
S.ElementType = "i8";
var k = class _k extends t3 {
  constructor(e4, t4 = 0, r, s2) {
    super(Int16Array, e4, t4, r, s2), this.elementType = "i16";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_k, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _k(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
k.ElementType = "i16";
var q = class _q extends e {
  constructor(e4, t4 = 0, r, s2) {
    super(Int16Array, e4, t4, r, s2), this.elementType = "i16";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_q, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _q(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
q.ElementType = "i16";
var v = class _v extends e2 {
  constructor(e4, t4 = 0, r, s2) {
    super(Int16Array, e4, t4, r, s2), this.elementType = "i16";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_v, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _v(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
v.ElementType = "i16";
var z = class _z extends e3 {
  constructor(e4, t4 = 0, r, s2) {
    super(Int16Array, e4, t4, r, s2), this.elementType = "i16";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_z, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _z(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
z.ElementType = "i16";
var C = class _C extends t3 {
  constructor(e4, t4 = 0, r, s2) {
    super(Int32Array, e4, t4, r, s2), this.elementType = "i32";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_C, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _C(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
C.ElementType = "i32";
var D = class _D extends e {
  constructor(e4, t4 = 0, r, s2) {
    super(Int32Array, e4, t4, r, s2), this.elementType = "i32";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_D, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _D(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
D.ElementType = "i32";
var G = class _G extends e2 {
  constructor(e4, t4 = 0, r, s2) {
    super(Int32Array, e4, t4, r, s2), this.elementType = "i32";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_G, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _G(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
G.ElementType = "i32";
var H = class _H extends e3 {
  constructor(e4, t4 = 0, r, s2) {
    super(Int32Array, e4, t4, r, s2), this.elementType = "i32";
  }
  slice(e4, t4) {
    return this.sliceBuffer(_H, e4, t4);
  }
  static fromTypedArray(e4, t4) {
    return new _H(e4.buffer, e4.byteOffset, t4, e4.byteOffset + e4.byteLength);
  }
};
H.ElementType = "i32";

export {
  y,
  u,
  i,
  c,
  l,
  a,
  p,
  b,
  o3 as o,
  m,
  T,
  h,
  d,
  A,
  O,
  x,
  g,
  w,
  E,
  L,
  B,
  F,
  I,
  U,
  j,
  V,
  M,
  S,
  k,
  q,
  v,
  z,
  C,
  D,
  G,
  H
};
//# sourceMappingURL=chunk-WXGA2B5U.js.map
