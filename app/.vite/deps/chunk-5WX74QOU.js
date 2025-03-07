import {
  i
} from "./chunk-U6JFTJMZ.js";
import {
  e2 as e
} from "./chunk-4LTV6KQ5.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/core/pbf.js
var i2;
!function(t) {
  t[t.varint = 0] = "varint", t[t.fixed64 = 1] = "fixed64", t[t.delimited = 2] = "delimited", t[t.fixed32 = 5] = "fixed32", t[t.unknown = 99] = "unknown";
}(i2 || (i2 = {}));
var s = 4294967296;
var r = new TextDecoder("utf-8");
var n = has("safari") || has("ios") ? 6 : has("ff") ? 12 : 32;
var a = class _a {
  constructor(t, e2, s2 = 0, r2 = t ? t.byteLength : 0) {
    this._tag = 0, this._dataType = i2.unknown, this._init(t, e2, s2, r2);
  }
  _init(t, e2, i3, s2) {
    this._data = t, this._dataView = e2, this._pos = i3, this._end = s2;
  }
  get usedMemory() {
    return 64 + i(this._data);
  }
  asUnsafe() {
    return this;
  }
  clone() {
    return new _a(this._data, this._dataView, this._pos, this._end);
  }
  pos() {
    return this._pos;
  }
  move(t) {
    this._pos = t;
  }
  nextTag(t) {
    for (; ; ) {
      if (this._pos === this._end) return false;
      const e2 = this._decodeVarint();
      if (this._tag = e2 >> 3, this._dataType = 7 & e2, !t || t === this._tag) break;
      this.skip();
    }
    return true;
  }
  next() {
    if (this._pos === this._end) return false;
    const t = this._decodeVarint();
    return this._tag = t >> 3, this._dataType = 7 & t, true;
  }
  empty() {
    return this._pos >= this._end;
  }
  tag() {
    return this._tag;
  }
  getInt32() {
    return this._decodeVarint();
  }
  getInt64() {
    return this._decodeVarint();
  }
  getUInt32() {
    let t = 4294967295;
    if (t = (127 & this._data[this._pos]) >>> 0, this._data[this._pos++] < 128) return t;
    if (t = (t | (127 & this._data[this._pos]) << 7) >>> 0, this._data[this._pos++] < 128) return t;
    if (t = (t | (127 & this._data[this._pos]) << 14) >>> 0, this._data[this._pos++] < 128) return t;
    if (t = (t | (127 & this._data[this._pos]) << 21) >>> 0, this._data[this._pos++] < 128) return t;
    if (t = (t | (15 & this._data[this._pos]) << 28) >>> 0, this._data[this._pos++] < 128) return t;
    throw new Error("Varint overflow");
  }
  getUInt64() {
    return this._decodeVarint();
  }
  getSInt32() {
    const t = this.getUInt32();
    return t >>> 1 ^ -(1 & t);
  }
  getSInt64() {
    return this._decodeSVarint();
  }
  getBool() {
    const t = 0 !== this._data[this._pos];
    return this._skip(1), t;
  }
  getEnum() {
    return this._decodeVarint();
  }
  getFixed64() {
    const t = this._dataView, e2 = this._pos, i3 = t.getUint32(e2, true) + t.getUint32(e2 + 4, true) * s;
    return this._skip(8), i3;
  }
  getSFixed64() {
    const t = this._dataView, e2 = this._pos, i3 = t.getUint32(e2, true) + t.getInt32(e2 + 4, true) * s;
    return this._skip(8), i3;
  }
  getDouble() {
    const t = this._dataView.getFloat64(this._pos, true);
    return this._skip(8), t;
  }
  getFixed32() {
    const t = this._dataView.getUint32(this._pos, true);
    return this._skip(4), t;
  }
  getSFixed32() {
    const t = this._dataView.getInt32(this._pos, true);
    return this._skip(4), t;
  }
  getFloat() {
    const t = this._dataView.getFloat32(this._pos, true);
    return this._skip(4), t;
  }
  getString() {
    const t = this._getLength(), e2 = this._pos, i3 = this._toString(this._data, e2, e2 + t);
    return this._skip(t), i3;
  }
  getBytes() {
    const t = this._getLength(), e2 = this._pos, i3 = this._toBytes(this._data, e2, e2 + t);
    return this._skip(t), i3;
  }
  getLength() {
    return this._getLengthUnsafe();
  }
  processMessageWithArgs(t, e2, i3, s2) {
    const r2 = this.getMessage(), n2 = t(r2, e2, i3, s2);
    return r2.release(), n2;
  }
  processMessage(t) {
    const e2 = this.getMessage(), i3 = t(e2);
    return e2.release(), i3;
  }
  getMessage() {
    const t = this._getLength(), e2 = _a.pool.acquire();
    return e2._init(this._data, this._dataView, this._pos, this._pos + t), this._skip(t), e2;
  }
  release() {
    _a.pool.release(this);
  }
  dataType() {
    return this._dataType;
  }
  skip() {
    switch (this._dataType) {
      case i2.varint:
        this._decodeVarint();
        break;
      case i2.fixed64:
        this._skip(8);
        break;
      case i2.delimited:
        this._skip(this._getLength());
        break;
      case i2.fixed32:
        this._skip(4);
        break;
      default:
        throw new Error("Invalid data type!");
    }
  }
  skipLen(t) {
    this._skip(t);
  }
  _skip(t) {
    if (this._pos + t > this._end) throw new Error("Attempt to skip past the end of buffer!");
    this._pos += t;
  }
  _decodeVarint() {
    const t = this._data;
    let e2 = this._pos, i3 = 0, s2 = 0;
    if (this._end - e2 >= 10) do {
      if (s2 = t[e2++], i3 |= 127 & s2, !(128 & s2)) break;
      if (s2 = t[e2++], i3 |= (127 & s2) << 7, !(128 & s2)) break;
      if (s2 = t[e2++], i3 |= (127 & s2) << 14, !(128 & s2)) break;
      if (s2 = t[e2++], i3 |= (127 & s2) << 21, !(128 & s2)) break;
      if (s2 = t[e2++], i3 += 268435456 * (127 & s2), !(128 & s2)) break;
      if (s2 = t[e2++], i3 += 34359738368 * (127 & s2), !(128 & s2)) break;
      if (s2 = t[e2++], i3 += 4398046511104 * (127 & s2), !(128 & s2)) break;
      if (s2 = t[e2++], i3 += 562949953421312 * (127 & s2), !(128 & s2)) break;
      if (s2 = t[e2++], i3 += 72057594037927940 * (127 & s2), !(128 & s2)) break;
      if (s2 = t[e2++], i3 += 9223372036854776e3 * (127 & s2), !(128 & s2)) break;
      throw new Error("Varint too long!");
    } while (0);
    else {
      let r2 = 1;
      for (; e2 !== this._end && (s2 = t[e2], 128 & s2); ) ++e2, i3 += (127 & s2) * r2, r2 *= 128;
      if (e2 === this._end) throw new Error("Varint overrun!");
      ++e2, i3 += s2 * r2;
    }
    return this._pos = e2, i3;
  }
  _decodeSVarint() {
    const t = this._data;
    let e2, i3 = 0, s2 = 0;
    const r2 = 1 & t[this._pos];
    if (s2 = t[this._pos++], i3 |= 127 & s2, !(128 & s2)) return r2 ? -(i3 + 1) / 2 : i3 / 2;
    if (s2 = t[this._pos++], i3 |= (127 & s2) << 7, !(128 & s2)) return r2 ? -(i3 + 1) / 2 : i3 / 2;
    if (s2 = t[this._pos++], i3 |= (127 & s2) << 14, !(128 & s2)) return r2 ? -(i3 + 1) / 2 : i3 / 2;
    if (s2 = t[this._pos++], i3 |= (127 & s2) << 21, !(128 & s2)) return r2 ? -(i3 + 1) / 2 : i3 / 2;
    if (s2 = t[this._pos++], i3 += 268435456 * (127 & s2), !(128 & s2)) return r2 ? -(i3 + 1) / 2 : i3 / 2;
    if (s2 = t[this._pos++], i3 += 34359738368 * (127 & s2), !(128 & s2)) return r2 ? -(i3 + 1) / 2 : i3 / 2;
    if (s2 = t[this._pos++], i3 += 4398046511104 * (127 & s2), !(128 & s2)) return r2 ? -(i3 + 1) / 2 : i3 / 2;
    if (e2 = BigInt(i3), s2 = t[this._pos++], e2 += 0x2000000000000n * BigInt(127 & s2), !(128 & s2)) return Number(r2 ? -(e2 + 1n) / 2n : e2 / 2n);
    if (s2 = t[this._pos++], e2 += 0x100000000000000n * BigInt(127 & s2), !(128 & s2)) return Number(r2 ? -(e2 + 1n) / 2n : e2 / 2n);
    if (s2 = t[this._pos++], e2 += 0x8000000000000000n * BigInt(127 & s2), !(128 & s2)) return Number(r2 ? -(e2 + 1n) / 2n : e2 / 2n);
    throw new Error("Varint too long!");
  }
  _getLength() {
    if (this._dataType !== i2.delimited) throw new Error("Not a delimited data type!");
    return this._decodeVarint();
  }
  _getLengthUnsafe() {
    return this.getUInt32();
  }
  _toString(t, e2, i3) {
    if ((i3 = Math.min(this._end, i3)) - e2 > n) {
      const s3 = t.subarray(e2, i3);
      return r.decode(s3);
    }
    let s2 = "", a2 = "";
    for (let r2 = e2; r2 < i3; ++r2) {
      const e3 = t[r2];
      128 & e3 ? a2 += "%" + e3.toString(16) : (s2 += decodeURIComponent(a2) + String.fromCharCode(e3), a2 = "");
    }
    return a2.length && (s2 += decodeURIComponent(a2)), s2;
  }
  _toBytes(t, e2, i3) {
    return i3 = Math.min(this._end, i3), new Uint8Array(t.buffer, e2, i3 - e2);
  }
};
a.pool = new e(a, void 0, (t) => {
  t._data = null, t._dataView = null;
});

export {
  a
};
//# sourceMappingURL=chunk-5WX74QOU.js.map
