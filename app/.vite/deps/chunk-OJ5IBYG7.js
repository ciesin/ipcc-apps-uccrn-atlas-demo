import {
  n
} from "./chunk-7AOPU62X.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";

// node_modules/@arcgis/core/libs/parquet/parquet.js
var _;
var n2 = new Array(128).fill(void 0);
function r(t2) {
  return n2[t2];
}
n2.push(void 0, null, true, false);
var i = n2.length;
function o(t2) {
  t2 < 132 || (n2[t2] = i, i = t2);
}
function a(t2) {
  const e = r(t2);
  return o(t2), e;
}
function s(t2) {
  i === n2.length && n2.push(n2.length + 1);
  const e = i;
  return i = n2[e], n2[e] = t2, e;
}
var g = "undefined" != typeof TextDecoder ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }) : { decode: () => {
  throw Error("TextDecoder not available");
} };
"undefined" != typeof TextDecoder && g.decode();
var d = null;
function c() {
  return null !== d && 0 !== d.byteLength || (d = new Uint8Array(_.memory.buffer)), d;
}
function w(t2, e) {
  return t2 >>>= 0, g.decode(c().subarray(t2, t2 + e));
}
function l(t2, e) {
  return t2 >>>= 0, c().subarray(t2 / 1, t2 / 1 + e);
}
var u = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => {
  _.__wbindgen_export_1.get(t2.dtor)(t2.a, t2.b);
});
function b(t2, e, n3, r2) {
  const i2 = { a: t2, b: e, cnt: 1, dtor: n3 }, o2 = (...t3) => {
    i2.cnt++;
    const e2 = i2.a;
    i2.a = 0;
    try {
      return r2(e2, i2.b, ...t3);
    } finally {
      0 == --i2.cnt ? (_.__wbindgen_export_1.get(i2.dtor)(e2, i2.b), u.unregister(i2)) : i2.a = e2;
    }
  };
  return o2.original = i2, u.register(o2, i2, i2), o2;
}
function p(t2, e, n3) {
  _._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h6f3c6e2a403d1e3d(t2, e, s(n3));
}
function f() {
  _.enable_tracing();
}
var y = 0;
var h = "undefined" != typeof TextEncoder ? new TextEncoder("utf-8") : { encode: () => {
  throw Error("TextEncoder not available");
} };
var m = "function" == typeof h.encodeInto ? function(t2, e) {
  return h.encodeInto(t2, e);
} : function(t2, e) {
  const _2 = h.encode(t2);
  return e.set(_2), { read: t2.length, written: _2.length };
};
function I(t2, e, _2) {
  if (void 0 === _2) {
    const _3 = h.encode(t2), n4 = e(_3.length, 1) >>> 0;
    return c().subarray(n4, n4 + _3.length).set(_3), y = _3.length, n4;
  }
  let n3 = t2.length, r2 = e(n3, 1) >>> 0;
  const i2 = c();
  let o2 = 0;
  for (; o2 < n3; o2++) {
    const e2 = t2.charCodeAt(o2);
    if (e2 > 127) break;
    i2[r2 + o2] = e2;
  }
  if (o2 !== n3) {
    0 !== o2 && (t2 = t2.slice(o2)), r2 = _2(r2, n3, n3 = o2 + 3 * t2.length, 1) >>> 0;
    const e2 = c().subarray(r2 + o2, r2 + n3);
    o2 += m(t2, e2).written, r2 = _2(r2, n3, o2, 1) >>> 0;
  }
  return y = o2, r2;
}
var k = null;
function F() {
  return (null === k || true === k.buffer.detached || void 0 === k.buffer.detached && k.buffer !== _.memory.buffer) && (k = new DataView(_.memory.buffer)), k;
}
function v(t2, e) {
  try {
    return t2.apply(this, e);
  } catch (n3) {
    _.__wbindgen_exn_store(s(n3));
  }
}
function R(t2, e, n3, r2) {
  _.wasm_bindgen__convert__closures__invoke2_mut__h367b7e3d952c2b06(t2, e, s(n3), s(r2));
}
var x = null;
function z() {
  return null !== x && 0 !== x.byteLength || (x = new Float64Array(_.memory.buffer)), x;
}
function T(t2, e) {
  return t2 >>>= 0, z().subarray(t2 / 8, t2 / 8 + e);
}
var P2 = null;
function M() {
  return null !== P2 && 0 !== P2.byteLength || (P2 = new Uint32Array(_.memory.buffer)), P2;
}
function q(t2, e) {
  return t2 >>>= 0, M().subarray(t2 / 4, t2 / 4 + e);
}
function O(t2, e) {
  t2 >>>= 0;
  const _2 = F(), n3 = [];
  for (let r2 = t2; r2 < t2 + 4 * e; r2 += 4) n3.push(a(_2.getUint32(r2, true)));
  return n3;
}
var j = null;
function C() {
  return null !== j && 0 !== j.byteLength || (j = new Uint16Array(_.memory.buffer)), j;
}
function B(t2, e) {
  const _2 = e(2 * t2.length, 2) >>> 0;
  return C().set(t2, _2 / 2), y = t2.length, _2;
}
function A(t2, e) {
  const _2 = e(4 * t2.length, 4) >>> 0, n3 = F();
  for (let r2 = 0; r2 < t2.length; r2++) n3.setUint32(_2 + 4 * r2, s(t2[r2]), true);
  return y = t2.length, _2;
}
function S(t2, e) {
  if (!(t2 instanceof e)) throw new Error(`expected instance of ${e.name}`);
  return t2.ptr;
}
function W(t2, e) {
  const _2 = e(8 * t2.length, 8) >>> 0;
  return z().set(t2, _2 / 8), y = t2.length, _2;
}
function G(t2, e) {
  const _2 = e(4 * t2.length, 4) >>> 0;
  return M().set(t2, _2 / 4), y = t2.length, _2;
}
function E(t2) {
  return null == t2;
}
function U(t2, e) {
  const _2 = e(1 * t2.length, 1) >>> 0;
  return c().set(t2, _2 / 1), y = t2.length, _2;
}
function D(t2, e, n3) {
  const r2 = I(t2, _.__wbindgen_malloc, _.__wbindgen_realloc), i2 = y;
  return a(_.readMetadata(r2, i2, s(e), s(n3)));
}
function L(t2) {
  const e = U(t2, _.__wbindgen_malloc), n3 = y;
  return a(_.readMetadataFromFile(e, n3));
}
function V(t2, e, n3, r2, i2) {
  const o2 = I(t2, _.__wbindgen_malloc, _.__wbindgen_realloc), g2 = y;
  S(r2, tt);
  var d2 = r2.__destroy_into_raw();
  let c2 = 0;
  E(i2) || (S(i2, rt), c2 = i2.__destroy_into_raw());
  return a(_.readFile(o2, g2, s(e), s(n3), d2, c2));
}
function N(t2, e) {
  let n3 = 0;
  E(t2) || (S(t2, rt), n3 = t2.__destroy_into_raw());
  const r2 = U(e, _.__wbindgen_malloc), i2 = y;
  return a(_.readFileFromBinary(n3, r2, i2));
}
var X = Object.freeze({ None: 0, 0: "None", Snappy: 1, 1: "Snappy" });
var Y = Object.freeze({ Point: 0, 0: "Point", Polygon: 1, 1: "Polygon", Polyline: 2, 2: "Polyline", Multipoint: 3, 3: "Multipoint" });
var $ = ["esriFieldTypeSmallInteger", "esriFieldTypeInteger", "esriFieldTypeBigInteger", "esriFieldTypeSingle", "esriFieldTypeDouble", "esriFieldTypeLong", "esriFieldTypeString", "esriFieldTypeDate", "esriFieldTypeOID", "esriFieldTypeGeometry", "esriFieldTypeBlob", "esriFieldTypeRaster", "esriFieldTypeGUID", "esriFieldTypeGlobalID", "esriFieldTypeXML", "esriFieldTypeDateOnly", "esriFieldTypeTimeOnly", "esriFieldTypeTimestampOffset"];
var J = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => _.__wbg_columndescriptor_free(t2 >>> 0, 1));
var K = class _K {
  static __wrap(t2) {
    t2 >>>= 0;
    const e = Object.create(_K.prototype);
    return e.__wbg_ptr = t2, J.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, J.unregister(this), t2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    _.__wbg_columndescriptor_free(t2, 0);
  }
  name() {
    let t2, e;
    try {
      const i2 = _.__wbindgen_add_to_stack_pointer(-16);
      _.columndescriptor_name(i2, this.__wbg_ptr);
      var n3 = F().getInt32(i2 + 0, true), r2 = F().getInt32(i2 + 4, true);
      return t2 = n3, e = r2, w(n3, r2);
    } finally {
      _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t2, e, 1);
    }
  }
  physicalType() {
    let t2, e;
    try {
      const i2 = _.__wbindgen_add_to_stack_pointer(-16);
      _.columndescriptor_physicalType(i2, this.__wbg_ptr);
      var n3 = F().getInt32(i2 + 0, true), r2 = F().getInt32(i2 + 4, true);
      return t2 = n3, e = r2, w(n3, r2);
    } finally {
      _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t2, e, 1);
    }
  }
  logicalType() {
    try {
      const n3 = _.__wbindgen_add_to_stack_pointer(-16);
      _.columndescriptor_logicalType(n3, this.__wbg_ptr);
      var t2 = F().getInt32(n3 + 0, true), e = F().getInt32(n3 + 4, true);
      let r2;
      return 0 !== t2 && (r2 = w(t2, e).slice(), _.__wbindgen_free(t2, 1 * e, 1)), r2;
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  encodings() {
    try {
      const r2 = _.__wbindgen_add_to_stack_pointer(-16);
      _.columndescriptor_encodings(r2, this.__wbg_ptr);
      var t2 = F().getInt32(r2 + 0, true), e = F().getInt32(r2 + 4, true), n3 = O(t2, e).slice();
      return _.__wbindgen_free(t2, 4 * e, 4), n3;
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  pageEncodings() {
    try {
      const n3 = _.__wbindgen_add_to_stack_pointer(-16);
      _.columndescriptor_pageEncodings(n3, this.__wbg_ptr);
      var t2 = F().getInt32(n3 + 0, true), e = F().getInt32(n3 + 4, true);
      let r2;
      return 0 !== t2 && (r2 = O(t2, e).slice(), _.__wbindgen_free(t2, 4 * e, 4)), r2;
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  numValues() {
    return _.columndescriptor_numValues(this.__wbg_ptr);
  }
  compression() {
    let t2, e;
    try {
      const i2 = _.__wbindgen_add_to_stack_pointer(-16);
      _.columndescriptor_compression(i2, this.__wbg_ptr);
      var n3 = F().getInt32(i2 + 0, true), r2 = F().getInt32(i2 + 4, true);
      return t2 = n3, e = r2, w(n3, r2);
    } finally {
      _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t2, e, 1);
    }
  }
  compressedSize() {
    return _.columndescriptor_compressedSize(this.__wbg_ptr);
  }
  uncompressedSize() {
    return _.columndescriptor_uncompressedSize(this.__wbg_ptr);
  }
  nullCount() {
    try {
      const n3 = _.__wbindgen_add_to_stack_pointer(-16);
      _.columndescriptor_nullCount(n3, this.__wbg_ptr);
      var t2 = F().getInt32(n3 + 0, true), e = F().getBigInt64(n3 + 8, true);
      return 0 === t2 ? void 0 : e;
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  distinctCount() {
    try {
      const n3 = _.__wbindgen_add_to_stack_pointer(-16);
      _.columndescriptor_distinctCount(n3, this.__wbg_ptr);
      var t2 = F().getInt32(n3 + 0, true), e = F().getBigInt64(n3 + 8, true);
      return 0 === t2 ? void 0 : e;
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  minValue() {
    try {
      const n3 = _.__wbindgen_add_to_stack_pointer(-16);
      _.columndescriptor_minValue(n3, this.__wbg_ptr);
      var t2 = F().getInt32(n3 + 0, true), e = F().getInt32(n3 + 4, true);
      let r2;
      return 0 !== t2 && (r2 = l(t2, e).slice(), _.__wbindgen_free(t2, 1 * e, 1)), r2;
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  maxValue() {
    try {
      const n3 = _.__wbindgen_add_to_stack_pointer(-16);
      _.columndescriptor_maxValue(n3, this.__wbg_ptr);
      var t2 = F().getInt32(n3 + 0, true), e = F().getInt32(n3 + 4, true);
      let r2;
      return 0 !== t2 && (r2 = l(t2, e).slice(), _.__wbindgen_free(t2, 1 * e, 1)), r2;
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
var Q = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => _.__wbg_fieldmetadata_free(t2 >>> 0, 1));
var H = class _H {
  static __wrap(t2) {
    t2 >>>= 0;
    const e = Object.create(_H.prototype);
    return e.__wbg_ptr = t2, Q.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Q.unregister(this), t2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    _.__wbg_fieldmetadata_free(t2, 0);
  }
  get name() {
    let t2, e;
    try {
      const i2 = _.__wbindgen_add_to_stack_pointer(-16);
      _.fieldmetadata_name(i2, this.__wbg_ptr);
      var n3 = F().getInt32(i2 + 0, true), r2 = F().getInt32(i2 + 4, true);
      return t2 = n3, e = r2, w(n3, r2);
    } finally {
      _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t2, e, 1);
    }
  }
  get index() {
    return _.fieldmetadata_index(this.__wbg_ptr);
  }
  get type() {
    const t2 = _.fieldmetadata_esri_type(this.__wbg_ptr);
    return $[t2];
  }
  get physicalType() {
    try {
      const n3 = _.__wbindgen_add_to_stack_pointer(-16);
      _.fieldmetadata_physical_type(n3, this.__wbg_ptr);
      var t2 = F().getInt32(n3 + 0, true), e = F().getInt32(n3 + 4, true);
      let r2;
      return 0 !== t2 && (r2 = w(t2, e).slice(), _.__wbindgen_free(t2, 1 * e, 1)), r2;
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  get logicalType() {
    try {
      const n3 = _.__wbindgen_add_to_stack_pointer(-16);
      _.fieldmetadata_logical_type(n3, this.__wbg_ptr);
      var t2 = F().getInt32(n3 + 0, true), e = F().getInt32(n3 + 4, true);
      let r2;
      return 0 !== t2 && (r2 = w(t2, e).slice(), _.__wbindgen_free(t2, 1 * e, 1)), r2;
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
var Z = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => _.__wbg_filemetadata_free(t2 >>> 0, 1));
var tt = class _tt {
  static __wrap(t2) {
    t2 >>>= 0;
    const e = Object.create(_tt.prototype);
    return e.__wbg_ptr = t2, Z.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Z.unregister(this), t2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    _.__wbg_filemetadata_free(t2, 0);
  }
  version() {
    return _.filemetadata_version(this.__wbg_ptr);
  }
  numRows() {
    return _.filemetadata_numRows(this.__wbg_ptr) >>> 0;
  }
  numFields() {
    return _.filemetadata_numFields(this.__wbg_ptr) >>> 0;
  }
  numColumns() {
    return _.filemetadata_numColumns(this.__wbg_ptr) >>> 0;
  }
  createdBy() {
    try {
      const n3 = _.__wbindgen_add_to_stack_pointer(-16);
      _.filemetadata_createdBy(n3, this.__wbg_ptr);
      var t2 = F().getInt32(n3 + 0, true), e = F().getInt32(n3 + 4, true);
      let r2;
      return 0 !== t2 && (r2 = w(t2, e).slice(), _.__wbindgen_free(t2, 1 * e, 1)), r2;
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  keyValueMetadata(t2) {
    try {
      const r2 = _.__wbindgen_add_to_stack_pointer(-16), i2 = I(t2, _.__wbindgen_malloc, _.__wbindgen_realloc), o2 = y;
      _.filemetadata_keyValueMetadata(r2, this.__wbg_ptr, i2, o2);
      var e = F().getInt32(r2 + 0, true), n3 = F().getInt32(r2 + 4, true);
      let a2;
      return 0 !== e && (a2 = w(e, n3).slice(), _.__wbindgen_free(e, 1 * n3, 1)), a2;
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  keys() {
    try {
      const n3 = _.__wbindgen_add_to_stack_pointer(-16);
      _.filemetadata_keys(n3, this.__wbg_ptr);
      var t2 = F().getInt32(n3 + 0, true), e = F().getInt32(n3 + 4, true);
      let r2;
      return 0 !== t2 && (r2 = O(t2, e).slice(), _.__wbindgen_free(t2, 4 * e, 4)), r2;
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  getFieldIndex(t2) {
    const e = I(t2, _.__wbindgen_malloc, _.__wbindgen_realloc), n3 = y, r2 = _.filemetadata_getFieldIndex(this.__wbg_ptr, e, n3);
    return 16777215 === r2 ? void 0 : r2;
  }
  getFieldByIndex(t2) {
    const e = _.filemetadata_getFieldByIndex(this.__wbg_ptr, t2);
    return 0 === e ? void 0 : H.__wrap(e);
  }
  getFields() {
    try {
      const r2 = _.__wbindgen_add_to_stack_pointer(-16);
      _.filemetadata_getFields(r2, this.__wbg_ptr);
      var t2 = F().getInt32(r2 + 0, true), e = F().getInt32(r2 + 4, true), n3 = O(t2, e).slice();
      return _.__wbindgen_free(t2, 4 * e, 4), n3;
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
var et = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => _.__wbg_filewriter_free(t2 >>> 0, 1));
var _t = class __t {
  static __wrap(t2) {
    t2 >>>= 0;
    const e = Object.create(__t.prototype);
    return e.__wbg_ptr = t2, et.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, et.unregister(this), t2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    _.__wbg_filewriter_free(t2, 0);
  }
  static new(t2, e) {
    const n3 = A(t2, _.__wbindgen_malloc), r2 = y, i2 = _.filewriter_new(n3, r2, e);
    return __t.__wrap(i2);
  }
  writeKeyValue(t2, e) {
    const n3 = I(t2, _.__wbindgen_malloc, _.__wbindgen_realloc), r2 = y, i2 = I(e, _.__wbindgen_malloc, _.__wbindgen_realloc), o2 = y;
    _.filewriter_writeKeyValue(this.__wbg_ptr, n3, r2, i2, o2);
  }
  writeI32Page(t2, e) {
    try {
      const i2 = _.__wbindgen_add_to_stack_pointer(-16);
      S(e, pt);
      var n3 = e.__destroy_into_raw();
      _.filewriter_writeI32Page(i2, this.__wbg_ptr, t2, n3);
      var r2 = F().getInt32(i2 + 0, true);
      if (F().getInt32(i2 + 4, true)) throw a(r2);
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  writeI64Page(t2, e) {
    try {
      const i2 = _.__wbindgen_add_to_stack_pointer(-16);
      S(e, yt);
      var n3 = e.__destroy_into_raw();
      _.filewriter_writeI64Page(i2, this.__wbg_ptr, t2, n3);
      var r2 = F().getInt32(i2 + 0, true);
      if (F().getInt32(i2 + 4, true)) throw a(r2);
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  writeF32Page(t2, e) {
    try {
      const i2 = _.__wbindgen_add_to_stack_pointer(-16);
      S(e, dt);
      var n3 = e.__destroy_into_raw();
      _.filewriter_writeF32Page(i2, this.__wbg_ptr, t2, n3);
      var r2 = F().getInt32(i2 + 0, true);
      if (F().getInt32(i2 + 4, true)) throw a(r2);
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  writeF64Page(t2, e) {
    try {
      const i2 = _.__wbindgen_add_to_stack_pointer(-16);
      S(e, wt);
      var n3 = e.__destroy_into_raw();
      _.filewriter_writeF64Page(i2, this.__wbg_ptr, t2, n3);
      var r2 = F().getInt32(i2 + 0, true);
      if (F().getInt32(i2 + 4, true)) throw a(r2);
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  writeGeometryPage(t2, e) {
    try {
      const i2 = _.__wbindgen_add_to_stack_pointer(-16);
      S(e, ut);
      var n3 = e.__destroy_into_raw();
      _.filewriter_writeBytesPage(i2, this.__wbg_ptr, t2, n3);
      var r2 = F().getInt32(i2 + 0, true);
      if (F().getInt32(i2 + 4, true)) throw a(r2);
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  writeStringPage(t2, e) {
    try {
      const i2 = _.__wbindgen_add_to_stack_pointer(-16);
      S(e, mt);
      var n3 = e.__destroy_into_raw();
      _.filewriter_writeBytesPage(i2, this.__wbg_ptr, t2, n3);
      var r2 = F().getInt32(i2 + 0, true);
      if (F().getInt32(i2 + 4, true)) throw a(r2);
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  writeBytesPage(t2, e) {
    try {
      const i2 = _.__wbindgen_add_to_stack_pointer(-16);
      S(e, st);
      var n3 = e.__destroy_into_raw();
      _.filewriter_writeBytesPage(i2, this.__wbg_ptr, t2, n3);
      var r2 = F().getInt32(i2 + 0, true);
      if (F().getInt32(i2 + 4, true)) throw a(r2);
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  finish() {
    try {
      const i2 = this.__destroy_into_raw(), o2 = _.__wbindgen_add_to_stack_pointer(-16);
      _.filewriter_finish(o2, i2);
      var t2 = F().getInt32(o2 + 0, true), e = F().getInt32(o2 + 4, true), n3 = F().getInt32(o2 + 8, true);
      if (F().getInt32(o2 + 12, true)) throw a(n3);
      var r2 = l(t2, e).slice();
      return _.__wbindgen_free(t2, 1 * e, 1), r2;
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
var nt = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => _.__wbg_geometryinfodescriptor_free(t2 >>> 0, 1));
var rt = class _rt {
  static __wrap(t2) {
    t2 >>>= 0;
    const e = Object.create(_rt.prototype);
    return e.__wbg_ptr = t2, nt.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, nt.unregister(this), t2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    _.__wbg_geometryinfodescriptor_free(t2, 0);
  }
  get geometryType() {
    const t2 = _.__wbg_get_geometryinfodescriptor_geometryType(this.__wbg_ptr);
    return 4 === t2 ? void 0 : t2;
  }
  set geometryType(t2) {
    _.__wbg_set_geometryinfodescriptor_geometryType(this.__wbg_ptr, E(t2) ? 4 : t2);
  }
  get wkbIndex() {
    const t2 = _.__wbg_get_geometryinfodescriptor_wkbIndex(this.__wbg_ptr);
    return 16777215 === t2 ? void 0 : t2;
  }
  set wkbIndex(t2) {
    _.__wbg_set_geometryinfodescriptor_wkbIndex(this.__wbg_ptr, E(t2) ? 16777215 : t2);
  }
  get lngIndex() {
    const t2 = _.__wbg_get_geometryinfodescriptor_lngIndex(this.__wbg_ptr);
    return 16777215 === t2 ? void 0 : t2;
  }
  set lngIndex(t2) {
    _.__wbg_set_geometryinfodescriptor_lngIndex(this.__wbg_ptr, E(t2) ? 16777215 : t2);
  }
  get latIndex() {
    const t2 = _.__wbg_get_geometryinfodescriptor_latIndex(this.__wbg_ptr);
    return 16777215 === t2 ? void 0 : t2;
  }
  set latIndex(t2) {
    _.__wbg_set_geometryinfodescriptor_latIndex(this.__wbg_ptr, E(t2) ? 16777215 : t2);
  }
  get xIndex() {
    const t2 = _.__wbg_get_geometryinfodescriptor_xIndex(this.__wbg_ptr);
    return 16777215 === t2 ? void 0 : t2;
  }
  set xIndex(t2) {
    _.__wbg_set_geometryinfodescriptor_xIndex(this.__wbg_ptr, E(t2) ? 16777215 : t2);
  }
  get inWkid() {
    try {
      const n3 = _.__wbindgen_add_to_stack_pointer(-16);
      _.__wbg_get_geometryinfodescriptor_inWkid(n3, this.__wbg_ptr);
      var t2 = F().getInt32(n3 + 0, true), e = F().getInt32(n3 + 4, true);
      return 0 === t2 ? void 0 : e >>> 0;
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set inWkid(t2) {
    _.__wbg_set_geometryinfodescriptor_inWkid(this.__wbg_ptr, !E(t2), E(t2) ? 0 : t2);
  }
  get outWkid() {
    try {
      const n3 = _.__wbindgen_add_to_stack_pointer(-16);
      _.__wbg_get_geometryinfodescriptor_outWkid(n3, this.__wbg_ptr);
      var t2 = F().getInt32(n3 + 0, true), e = F().getInt32(n3 + 4, true);
      return 0 === t2 ? void 0 : e >>> 0;
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set outWkid(t2) {
    _.__wbg_set_geometryinfodescriptor_outWkid(this.__wbg_ptr, !E(t2), E(t2) ? 0 : t2);
  }
  static new() {
    const t2 = _.geometryinfodescriptor_new();
    return _rt.__wrap(t2);
  }
  setMultiscaleInfo(t2) {
    S(t2, ot);
    var e = t2.__destroy_into_raw();
    _.geometryinfodescriptor_setMultiscaleInfo(this.__wbg_ptr, e);
  }
};
var it = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => _.__wbg_multiscaleinfo_free(t2 >>> 0, 1));
var ot = class _ot {
  static __wrap(t2) {
    t2 >>>= 0;
    const e = Object.create(_ot.prototype);
    return e.__wbg_ptr = t2, it.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, it.unregister(this), t2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    _.__wbg_multiscaleinfo_free(t2, 0);
  }
  static new() {
    const t2 = _.multiscaleinfo_new();
    return _ot.__wrap(t2);
  }
  push(t2, e, n3, r2, i2) {
    _.multiscaleinfo_push(this.__wbg_ptr, t2, e, n3, r2, i2);
  }
};
var at = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => _.__wbg_pagebuilderbytes_free(t2 >>> 0, 1));
var st = class _st {
  static __wrap(t2) {
    t2 >>>= 0;
    const e = Object.create(_st.prototype);
    return e.__wbg_ptr = t2, at.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, at.unregister(this), t2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    _.__wbg_pagebuilderbytes_free(t2, 0);
  }
  static new() {
    const t2 = _.pagebuilderbytes_new();
    return _st.__wrap(t2);
  }
  push(t2) {
    var e = E(t2) ? 0 : U(t2, _.__wbindgen_malloc), n3 = y;
    _.pagebuilderbytes_push(this.__wbg_ptr, e, n3);
  }
};
var gt = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => _.__wbg_pagebuilderf32_free(t2 >>> 0, 1));
var dt = class _dt {
  static __wrap(t2) {
    t2 >>>= 0;
    const e = Object.create(_dt.prototype);
    return e.__wbg_ptr = t2, gt.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, gt.unregister(this), t2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    _.__wbg_pagebuilderf32_free(t2, 0);
  }
  static new() {
    const t2 = _.pagebuilderbytes_new();
    return _dt.__wrap(t2);
  }
  push(t2) {
    _.pagebuilderf32_push(this.__wbg_ptr, !E(t2), E(t2) ? 0 : t2);
  }
};
var ct = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => _.__wbg_pagebuilderf64_free(t2 >>> 0, 1));
var wt = class _wt {
  static __wrap(t2) {
    t2 >>>= 0;
    const e = Object.create(_wt.prototype);
    return e.__wbg_ptr = t2, ct.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ct.unregister(this), t2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    _.__wbg_pagebuilderf64_free(t2, 0);
  }
  static new() {
    const t2 = _.multiscaleinfo_new();
    return _wt.__wrap(t2);
  }
  push(t2) {
    _.pagebuilderf64_push(this.__wbg_ptr, !E(t2), E(t2) ? 0 : t2);
  }
};
var lt = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => _.__wbg_pagebuildergeometry_free(t2 >>> 0, 1));
var ut = class _ut {
  static __wrap(t2) {
    t2 >>>= 0;
    const e = Object.create(_ut.prototype);
    return e.__wbg_ptr = t2, lt.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, lt.unregister(this), t2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    _.__wbg_pagebuildergeometry_free(t2, 0);
  }
  static new() {
    const t2 = _.pagebuilderbytes_new();
    return _ut.__wrap(t2);
  }
  writeXY(t2, e) {
    try {
      const r2 = _.__wbindgen_add_to_stack_pointer(-16);
      _.pagebuildergeometry_writeXY(r2, this.__wbg_ptr, t2, e);
      var n3 = F().getInt32(r2 + 0, true);
      if (F().getInt32(r2 + 4, true)) throw a(n3);
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  writePBF(t2, e, n3, r2) {
    try {
      const o2 = _.__wbindgen_add_to_stack_pointer(-16), s2 = W(t2, _.__wbindgen_malloc), g2 = y, d2 = G(e, _.__wbindgen_malloc), c2 = y;
      _.pagebuildergeometry_writePBF(o2, this.__wbg_ptr, s2, g2, d2, c2, n3, r2);
      var i2 = F().getInt32(o2 + 0, true);
      if (F().getInt32(o2 + 4, true)) throw a(i2);
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  writePolygon(t2, e) {
    try {
      const r2 = _.__wbindgen_add_to_stack_pointer(-16), i2 = W(t2, _.__wbindgen_malloc), o2 = y, s2 = G(e, _.__wbindgen_malloc), g2 = y;
      _.pagebuildergeometry_writePolygon(r2, this.__wbg_ptr, i2, o2, s2, g2);
      var n3 = F().getInt32(r2 + 0, true);
      if (F().getInt32(r2 + 4, true)) throw a(n3);
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  writePolyline(t2, e) {
    try {
      const r2 = _.__wbindgen_add_to_stack_pointer(-16), i2 = W(t2, _.__wbindgen_malloc), o2 = y, s2 = G(e, _.__wbindgen_malloc), g2 = y;
      _.pagebuildergeometry_writePolyline(r2, this.__wbg_ptr, i2, o2, s2, g2);
      var n3 = F().getInt32(r2 + 0, true);
      if (F().getInt32(r2 + 4, true)) throw a(n3);
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  writeMultipoint(t2, e) {
    try {
      const r2 = _.__wbindgen_add_to_stack_pointer(-16), i2 = W(t2, _.__wbindgen_malloc), o2 = y, s2 = G(e, _.__wbindgen_malloc), g2 = y;
      _.pagebuildergeometry_writeMultipoint(r2, this.__wbg_ptr, i2, o2, s2, g2);
      var n3 = F().getInt32(r2 + 0, true);
      if (F().getInt32(r2 + 4, true)) throw a(n3);
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  writeNone() {
    _.pagebuildergeometry_writeNone(this.__wbg_ptr);
  }
};
var bt = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => _.__wbg_pagebuilderi32_free(t2 >>> 0, 1));
var pt = class _pt {
  static __wrap(t2) {
    t2 >>>= 0;
    const e = Object.create(_pt.prototype);
    return e.__wbg_ptr = t2, bt.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, bt.unregister(this), t2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    _.__wbg_pagebuilderi32_free(t2, 0);
  }
  static new() {
    const t2 = _.pagebuilderbytes_new();
    return _pt.__wrap(t2);
  }
  push(t2) {
    _.pagebuilderi32_push(this.__wbg_ptr, !E(t2), E(t2) ? 0 : t2);
  }
};
var ft = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => _.__wbg_pagebuilderi64_free(t2 >>> 0, 1));
var yt = class _yt {
  static __wrap(t2) {
    t2 >>>= 0;
    const e = Object.create(_yt.prototype);
    return e.__wbg_ptr = t2, ft.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ft.unregister(this), t2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    _.__wbg_pagebuilderi64_free(t2, 0);
  }
  static new() {
    const t2 = _.multiscaleinfo_new();
    return _yt.__wrap(t2);
  }
  push(t2) {
    _.pagebuilderi64_push(this.__wbg_ptr, !E(t2), E(t2) ? 0 : t2);
  }
};
var ht = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => _.__wbg_pagebuilderstring_free(t2 >>> 0, 1));
var mt = class _mt {
  static __wrap(t2) {
    t2 >>>= 0;
    const e = Object.create(_mt.prototype);
    return e.__wbg_ptr = t2, ht.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, ht.unregister(this), t2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    _.__wbg_pagebuilderstring_free(t2, 0);
  }
  static new() {
    const t2 = _.pagebuilderbytes_new();
    return _mt.__wrap(t2);
  }
  push(t2) {
    var e = E(t2) ? 0 : I(t2, _.__wbindgen_malloc, _.__wbindgen_realloc), n3 = y;
    _.pagebuilderstring_push(this.__wbg_ptr, e, n3);
  }
};
var It = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => _.__wbg_pageencodingdescriptor_free(t2 >>> 0, 1));
var kt = class _kt {
  static __wrap(t2) {
    t2 >>>= 0;
    const e = Object.create(_kt.prototype);
    return e.__wbg_ptr = t2, It.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, It.unregister(this), t2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    _.__wbg_pageencodingdescriptor_free(t2, 0);
  }
  pageType() {
    let t2, e;
    try {
      const i2 = _.__wbindgen_add_to_stack_pointer(-16);
      _.pageencodingdescriptor_pageType(i2, this.__wbg_ptr);
      var n3 = F().getInt32(i2 + 0, true), r2 = F().getInt32(i2 + 4, true);
      return t2 = n3, e = r2, w(n3, r2);
    } finally {
      _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t2, e, 1);
    }
  }
  encoding() {
    let t2, e;
    try {
      const i2 = _.__wbindgen_add_to_stack_pointer(-16);
      _.pageencodingdescriptor_encoding(i2, this.__wbg_ptr);
      var n3 = F().getInt32(i2 + 0, true), r2 = F().getInt32(i2 + 4, true);
      return t2 = n3, e = r2, w(n3, r2);
    } finally {
      _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t2, e, 1);
    }
  }
  count() {
    return _.pageencodingdescriptor_count(this.__wbg_ptr);
  }
};
var Ft = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => _.__wbg_parquetchunk_free(t2 >>> 0, 1));
var vt = class _vt {
  static __wrap(t2) {
    t2 >>>= 0;
    const e = Object.create(_vt.prototype);
    return e.__wbg_ptr = t2, Ft.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Ft.unregister(this), t2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    _.__wbg_parquetchunk_free(t2, 0);
  }
  size() {
    return _.parquetchunk_size(this.__wbg_ptr) >>> 0;
  }
  hasField(t2) {
    return 0 !== _.parquetchunk_hasField(this.__wbg_ptr, t2);
  }
  readX(t2) {
    return _.parquetchunk_readX(this.__wbg_ptr, t2);
  }
  readY(t2) {
    return _.parquetchunk_readY(this.__wbg_ptr, t2);
  }
  readCoords(t2) {
    try {
      const r2 = _.__wbindgen_add_to_stack_pointer(-16);
      _.parquetchunk_readCoords(r2, this.__wbg_ptr, t2);
      var e = F().getInt32(r2 + 0, true), n3 = F().getInt32(r2 + 4, true);
      let i2;
      return 0 !== e && (i2 = T(e, n3).slice(), _.__wbindgen_free(e, 8 * n3, 8)), i2;
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  readLengths(t2) {
    try {
      const r2 = _.__wbindgen_add_to_stack_pointer(-16);
      _.parquetchunk_readLengths(r2, this.__wbg_ptr, t2);
      var e = F().getInt32(r2 + 0, true), n3 = F().getInt32(r2 + 4, true);
      let i2;
      return 0 !== e && (i2 = q(e, n3).slice(), _.__wbindgen_free(e, 4 * n3, 4)), i2;
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  readGeometryTransformed(t2, e, n3, r2, i2) {
    const o2 = _.parquetchunk_readGeometryTransformed(this.__wbg_ptr, t2, e, n3, r2, i2);
    return 0 === o2 ? void 0 : Tt.__wrap(o2);
  }
  boundsXMin(t2) {
    return _.parquetchunk_boundsXMin(this.__wbg_ptr, t2);
  }
  boundsYMin(t2) {
    return _.parquetchunk_boundsYMin(this.__wbg_ptr, t2);
  }
  boundsXMax(t2) {
    return _.parquetchunk_boundsXMax(this.__wbg_ptr, t2);
  }
  boundsYMax(t2) {
    return _.parquetchunk_boundsYMax(this.__wbg_ptr, t2);
  }
  readAttribute(t2, e) {
    return a(_.parquetchunk_readAttribute(this.__wbg_ptr, t2, e));
  }
};
var Rt = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => _.__wbg_parquetfile_free(t2 >>> 0, 1));
var xt = class t {
  static __wrap(e) {
    e >>>= 0;
    const _2 = Object.create(t.prototype);
    return _2.__wbg_ptr = e, Rt.register(_2, _2.__wbg_ptr, _2), _2;
  }
  __destroy_into_raw() {
    const t2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Rt.unregister(this), t2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    _.__wbg_parquetfile_free(t2, 0);
  }
  metadata() {
    const t2 = _.parquetfile_metadata(this.__wbg_ptr);
    return tt.__wrap(t2);
  }
  rowGroups() {
    try {
      const r2 = _.__wbindgen_add_to_stack_pointer(-16);
      _.parquetfile_rowGroups(r2, this.__wbg_ptr);
      var t2 = F().getInt32(r2 + 0, true), e = F().getInt32(r2 + 4, true), n3 = O(t2, e).slice();
      return _.__wbindgen_free(t2, 4 * e, 4), n3;
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  readChunksWithCallback(t2, e) {
    const n3 = B(t2, _.__wbindgen_malloc), r2 = y;
    return a(_.parquetfile_readChunksWithCallback(this.__wbg_ptr, n3, r2, s(e)));
  }
  readFirstChunk(t2) {
    const e = B(t2, _.__wbindgen_malloc), n3 = y;
    return a(_.parquetfile_readFirstChunk(this.__wbg_ptr, e, n3));
  }
  readAllChunks(t2) {
    const e = B(t2, _.__wbindgen_malloc), n3 = y;
    return a(_.parquetfile_readAllChunks(this.__wbg_ptr, e, n3));
  }
  updateChunks(t2) {
    const e = B(t2, _.__wbindgen_malloc), n3 = y;
    return a(_.parquetfile_updateChunks(this.__wbg_ptr, e, n3));
  }
};
var zt = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => _.__wbg_quantizedgeometry_free(t2 >>> 0, 1));
var Tt = class _Tt {
  static __wrap(t2) {
    t2 >>>= 0;
    const e = Object.create(_Tt.prototype);
    return e.__wbg_ptr = t2, zt.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, zt.unregister(this), t2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    _.__wbg_quantizedgeometry_free(t2, 0);
  }
  readCoordsUnsafe() {
    return a(_.quantizedgeometry_readCoordsUnsafe(this.__wbg_ptr));
  }
  readLengthsUnsafe() {
    return a(_.quantizedgeometry_readLengthsUnsafe(this.__wbg_ptr));
  }
};
var Pt = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => _.__wbg_rangeproviderjs_free(t2 >>> 0, 1));
var Mt = class _Mt {
  static __wrap(t2) {
    t2 >>>= 0;
    const e = Object.create(_Mt.prototype);
    return e.__wbg_ptr = t2, Pt.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, Pt.unregister(this), t2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    _.__wbg_rangeproviderjs_free(t2, 0);
  }
  static new(t2, e) {
    const n3 = _.rangeproviderjs_new(s(t2), s(e));
    return _Mt.__wrap(n3);
  }
  static withFetch() {
    const t2 = _.rangeproviderjs_withFetch();
    return _Mt.__wrap(t2);
  }
};
var qt = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => _.__wbg_rowgroup_free(t2 >>> 0, 1));
var Ot = class _Ot {
  static __wrap(t2) {
    t2 >>>= 0;
    const e = Object.create(_Ot.prototype);
    return e.__wbg_ptr = t2, qt.register(e, e.__wbg_ptr, e), e;
  }
  __destroy_into_raw() {
    const t2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, qt.unregister(this), t2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    _.__wbg_rowgroup_free(t2, 0);
  }
  columns() {
    try {
      const r2 = _.__wbindgen_add_to_stack_pointer(-16);
      _.rowgroup_columns(r2, this.__wbg_ptr);
      var t2 = F().getInt32(r2 + 0, true), e = F().getInt32(r2 + 4, true), n3 = O(t2, e).slice();
      return _.__wbindgen_free(t2, 4 * e, 4), n3;
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
};
var jt = "undefined" == typeof FinalizationRegistry ? { register: () => {
}, unregister: () => {
} } : new FinalizationRegistry((t2) => _.__wbg_schemafield_free(t2 >>> 0, 1));
var Ct = class _Ct {
  static __wrap(t2) {
    t2 >>>= 0;
    const e = Object.create(_Ct.prototype);
    return e.__wbg_ptr = t2, jt.register(e, e.__wbg_ptr, e), e;
  }
  static __unwrap(t2) {
    return t2 instanceof _Ct ? t2.__destroy_into_raw() : 0;
  }
  __destroy_into_raw() {
    const t2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, jt.unregister(this), t2;
  }
  free() {
    const t2 = this.__destroy_into_raw();
    _.__wbg_schemafield_free(t2, 0);
  }
  static tryNew(t2, e) {
    try {
      const i2 = _.__wbindgen_add_to_stack_pointer(-16), o2 = I(t2, _.__wbindgen_malloc, _.__wbindgen_realloc), s2 = y, g2 = I(e, _.__wbindgen_malloc, _.__wbindgen_realloc), d2 = y;
      _.schemafield_tryNew(i2, o2, s2, g2, d2);
      var n3 = F().getInt32(i2 + 0, true), r2 = F().getInt32(i2 + 4, true);
      if (F().getInt32(i2 + 8, true)) throw a(r2);
      return _Ct.__wrap(n3);
    } finally {
      _.__wbindgen_add_to_stack_pointer(16);
    }
  }
  name() {
    let t2, e;
    try {
      const i2 = _.__wbindgen_add_to_stack_pointer(-16);
      _.schemafield_name(i2, this.__wbg_ptr);
      var n3 = F().getInt32(i2 + 0, true), r2 = F().getInt32(i2 + 4, true);
      return t2 = n3, e = r2, w(n3, r2);
    } finally {
      _.__wbindgen_add_to_stack_pointer(16), _.__wbindgen_free(t2, e, 1);
    }
  }
};
async function Bt(t2, e) {
  if ("function" == typeof Response && t2 instanceof Response) {
    if ("function" == typeof WebAssembly.instantiateStreaming) try {
      return await WebAssembly.instantiateStreaming(t2, e);
    } catch (_2) {
      if ("application/wasm" == t2.headers.get("Content-Type")) throw _2;
      console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", _2);
    }
    const n3 = await t2.arrayBuffer();
    return await WebAssembly.instantiate(n3, e);
  }
  {
    const _2 = await WebAssembly.instantiate(t2, e);
    return _2 instanceof WebAssembly.Instance ? { instance: _2, module: t2 } : _2;
  }
}
function At() {
  const t2 = { wbg: {} };
  return t2.wbg.__wbg_new_abda76e883ba8a5f = function() {
    return s(new Error());
  }, t2.wbg.__wbg_stack_658279fe44541cf6 = function(t3, e) {
    const n3 = I(r(e).stack, _.__wbindgen_malloc, _.__wbindgen_realloc), i2 = y;
    F().setInt32(t3 + 4, i2, true), F().setInt32(t3 + 0, n3, true);
  }, t2.wbg.__wbg_error_f851667af71bcfc6 = function(t3, e) {
    let n3, r2;
    try {
      n3 = t3, r2 = e, console.error(w(t3, e));
    } finally {
      _.__wbindgen_free(n3, r2, 1);
    }
  }, t2.wbg.__wbindgen_object_drop_ref = function(t3) {
    a(t3);
  }, t2.wbg.__wbindgen_is_function = function(t3) {
    return "function" == typeof r(t3);
  }, t2.wbg.__wbg_self_3093d5d1f7bcb682 = function() {
    return v(function() {
      return s(self.self);
    }, arguments);
  }, t2.wbg.__wbg_window_3bcfc4d31bc012f8 = function() {
    return v(function() {
      return s(window.window);
    }, arguments);
  }, t2.wbg.__wbg_globalThis_86b222e13bdf32ed = function() {
    return v(function() {
      return s(globalThis.globalThis);
    }, arguments);
  }, t2.wbg.__wbg_global_e5a3fe56f8be9485 = function() {
    return v(function() {
      return s(global.global);
    }, arguments);
  }, t2.wbg.__wbindgen_is_undefined = function(t3) {
    return void 0 === r(t3);
  }, t2.wbg.__wbg_newnoargs_76313bd6ff35d0f2 = function(t3, e) {
    return s(new Function(w(t3, e)));
  }, t2.wbg.__wbindgen_object_clone_ref = function(t3) {
    return s(r(t3));
  }, t2.wbg.__wbindgen_number_new = function(t3) {
    return s(t3);
  }, t2.wbg.__wbindgen_string_new = function(t3, e) {
    return s(w(t3, e));
  }, t2.wbg.__wbg_call_1084a111329e68ce = function() {
    return v(function(t3, e) {
      return s(r(t3).call(r(e)));
    }, arguments);
  }, t2.wbg.__wbg_call_89af060b4e1523f2 = function() {
    return v(function(t3, e, _2) {
      return s(r(t3).call(r(e), r(_2)));
    }, arguments);
  }, t2.wbg.__wbg_call_7de908392845a9a5 = function() {
    return v(function(t3, e, _2, n3, i2) {
      return s(r(t3).call(r(e), r(_2), r(n3), r(i2)));
    }, arguments);
  }, t2.wbg.__wbg_valueOf_563b3487b1b116aa = function(t3) {
    return r(t3).valueOf();
  }, t2.wbg.__wbg_buffer_b7b08af79b0b0974 = function(t3) {
    return s(r(t3).buffer);
  }, t2.wbg.__wbg_new_b85e72ed1bfd57f9 = function(t3, e) {
    try {
      var _2 = { a: t3, b: e }, n3 = (t4, e2) => {
        const n4 = _2.a;
        _2.a = 0;
        try {
          return R(n4, _2.b, t4, e2);
        } finally {
          _2.a = n4;
        }
      };
      return s(new Promise(n3));
    } finally {
      _2.a = _2.b = 0;
    }
  }, t2.wbg.__wbg_resolve_570458cb99d56a43 = function(t3) {
    return s(Promise.resolve(r(t3)));
  }, t2.wbg.__wbg_then_95e6edc0f89b73b1 = function(t3, e) {
    return s(r(t3).then(r(e)));
  }, t2.wbg.__wbg_then_876bb3c633745cc6 = function(t3, e, _2) {
    return s(r(t3).then(r(e), r(_2)));
  }, t2.wbg.__wbg_newwithbyteoffsetandlength_b5293b0eedbac651 = function(t3, e, _2) {
    return s(new Int16Array(r(t3), e >>> 0, _2 >>> 0));
  }, t2.wbg.__wbg_new_ea1883e1e5e86686 = function(t3) {
    return s(new Uint8Array(r(t3)));
  }, t2.wbg.__wbg_newwithbyteoffsetandlength_874df3e29cb555f9 = function(t3, e, _2) {
    return s(new Uint32Array(r(t3), e >>> 0, _2 >>> 0));
  }, t2.wbg.__wbg_length_8339fcf5d8ecd12e = function(t3) {
    return r(t3).length;
  }, t2.wbg.__wbg_set_d1e79e2388520f18 = function(t3, e, _2) {
    r(t3).set(r(e), _2 >>> 0);
  }, t2.wbg.__wbindgen_throw = function(t3, e) {
    throw new Error(w(t3, e));
  }, t2.wbg.__wbindgen_memory = function() {
    return s(_.memory);
  }, t2.wbg.__wbindgen_array_new = function() {
    return s([]);
  }, t2.wbg.__wbindgen_array_push = function(t3, e) {
    r(t3).push(a(e));
  }, t2.wbg.__wbindgen_uint8_array_new = function(t3, e) {
    var n3 = l(t3, e).slice();
    _.__wbindgen_free(t3, 1 * e, 1);
    return s(n3);
  }, t2.wbg.__wbg_queueMicrotask_48421b3cc9052b68 = function(t3) {
    return s(r(t3).queueMicrotask);
  }, t2.wbg.__wbindgen_cb_drop = function(t3) {
    const e = a(t3).original;
    if (1 == e.cnt--) return e.a = 0, true;
    return false;
  }, t2.wbg.__wbg_queueMicrotask_12a30234db4045d3 = function(t3) {
    queueMicrotask(r(t3));
  }, t2.wbg.__wbg_parquetchunk_new = function(t3) {
    return s(vt.__wrap(t3));
  }, t2.wbg.__wbg_parquetfile_new = function(t3) {
    return s(xt.__wrap(t3));
  }, t2.wbg.__wbg_filemetadata_new = function(t3) {
    return s(tt.__wrap(t3));
  }, t2.wbg.__wbg_fieldmetadata_new = function(t3) {
    return s(H.__wrap(t3));
  }, t2.wbg.__wbg_rowgroup_new = function(t3) {
    return s(Ot.__wrap(t3));
  }, t2.wbg.__wbg_schemafield_unwrap = function(t3) {
    return Ct.__unwrap(a(t3));
  }, t2.wbg.__wbg_columndescriptor_new = function(t3) {
    return s(K.__wrap(t3));
  }, t2.wbg.__wbg_pageencodingdescriptor_new = function(t3) {
    return s(kt.__wrap(t3));
  }, t2.wbg.__wbindgen_closure_wrapper1827 = function(t3, e, _2) {
    return s(b(t3, e, 163, p));
  }, t2;
}
function St(t2, e) {
  return _ = t2.exports, Gt.__wbindgen_wasm_module = e, k = null, x = null, j = null, P2 = null, d = null, _.__wbindgen_start(), _;
}
function Wt(t2) {
  if (void 0 !== _) return _;
  void 0 !== t2 && (Object.getPrototypeOf(t2) === Object.prototype ? { module: t2 } = t2 : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
  const e = At();
  t2 instanceof WebAssembly.Module || (t2 = new WebAssembly.Module(t2));
  return St(new WebAssembly.Instance(t2, e), t2);
}
async function Gt(t2) {
  if (void 0 !== _) return _;
  void 0 !== t2 && (Object.getPrototypeOf(t2) === Object.prototype ? { module_or_path: t2 } = t2 : console.warn("using deprecated parameters for the initialization function; pass a single object instead"));
  const e = At();
  ("string" == typeof t2 || "function" == typeof Request && t2 instanceof Request || "function" == typeof URL && t2 instanceof URL) && (t2 = fetch(t2));
  const { instance: n3, module: r2 } = await Bt(await t2, e);
  return St(n3, r2);
}
var Et = Object.freeze(Object.defineProperty({ __proto__: null, ColumnDescriptor: K, CompressMode: X, FieldMetadata: H, FileMetadata: tt, FileWriter: _t, GeometryInfoDescriptor: rt, GeometryType: Y, MultiScaleInfo: ot, PageBuilderBytes: st, PageBuilderF32: dt, PageBuilderF64: wt, PageBuilderGeometry: ut, PageBuilderI32: pt, PageBuilderI64: yt, PageBuilderString: mt, PageEncodingDescriptor: kt, ParquetChunk: vt, ParquetFile: xt, QuantizedGeometry: Tt, RangeProviderJs: Mt, RowGroup: Ot, SchemaField: Ct, default: Gt, enable_tracing: f, initSync: Wt, readFile: V, readFileFromBinary: N, readMetadata: D, readMetadataFromFile: L }, Symbol.toStringTag, { value: "Module" }));
var Ut = null;
async function Dt() {
  return Ut || (Ut = Lt()), Ut;
}
async function Lt() {
  const e = await Promise.resolve().then(() => Et);
  return await e.default({ module_or_path: n("esri/libs/parquet/pkg/arcgis_parquet_bg.wasm") }), e;
}
var Vt = (t2) => async function(_2, n3, r2) {
  const i2 = t2(), { data: o2 } = await P(_2, { responseType: "array-buffer", query: i2, headers: { range: `bytes=${n3}-${r2}` } });
  return o2;
};
var Nt = (t2) => async function(_2) {
  const n3 = t2(), { data: r2 } = await P(_2, { responseType: "native", method: "head", query: n3 }), i2 = r2.headers.get("Content-Length");
  if (null == i2) throw new Error("Unable to parse content length");
  return parseInt(i2, 10);
};
var Xt = class _Xt {
  static async create(t2, e) {
    const _2 = await Dt(), n3 = await _2.readMetadata(t2, Vt(e), Nt(e));
    return _Xt.fromFileMetadata(n3);
  }
  static fromFileMetadata(t2) {
    const e = [];
    for (let _2 = 0; _2 < t2.numFields(); _2++) {
      const n3 = t2.getFieldByIndex(_2);
      e.push({ name: n3.name, type: n3.type, alias: n3.name, index: n3.index }), n3.free();
    }
    return new _Xt(t2, e);
  }
  constructor(t2, e) {
    this._inner = t2, this.fields = e;
  }
  destroy() {
    this._inner.free();
  }
  [Symbol.dispose]() {
    this.destroy();
  }
  get size() {
    return this._inner.numRows();
  }
  getFieldIndex(t2) {
    return this._inner.getFieldIndex(t2);
  }
  tryReadGeoMetadata() {
    const t2 = this._inner.keyValueMetadata("geo");
    return null == t2 ? null : JSON.parse(t2);
  }
  tryReadEsriMetadata() {
    const t2 = this._inner.keyValueMetadata("esri");
    return null == t2 ? null : JSON.parse(t2);
  }
};
function Yt(t2) {
  switch (t2) {
    case "esriGeometryPoint":
      return Y.Point;
    case "esriGeometryPolygon":
      return Y.Polygon;
    case "esriGeometryPolyline":
      return Y.Polyline;
    case "esriGeometryMultipoint":
      return Y.Multipoint;
    default:
      throw new Error(`InternalError: Found unexpected GeometryType: ${t2}`);
  }
}
function $t(t2, e, _2) {
  const n3 = rt.new();
  if (n3.geometryType = Yt(t2.geometryType), "location" === t2.type) n3.latIndex = e.getFieldIndex(t2.latitudeFieldName), n3.lngIndex = e.getFieldIndex(t2.longitudeFieldName);
  else {
    if (null == t2.primaryFieldName) throw new Error("InternalError: A primary field name or set of location fields must be defined");
    if (n3.wkbIndex = e.getFieldIndex(t2.primaryFieldName), t2.multiscale) {
      const _3 = ot.new();
      for (const n4 of t2.multiscale.levels) {
        const [t3, r2] = n4.transform.translate, [i2, o2] = n4.transform.scale, a2 = e.getFieldIndex(n4.column);
        _3.push(a2, t3, r2, i2, o2);
      }
      n3.setMultiscaleInfo(_3);
    }
  }
  return n3.inWkid = t2.spatialReference.wkid, _2 && (n3.outWkid = _2.wkid), n3;
}
var Jt = class _Jt {
  static async create(t2, e) {
    const _2 = await Dt(), n3 = Vt(e.getCustomParameters), r2 = Nt(e.getCustomParameters), i2 = await D(t2, n3, r2), o2 = $t(e.geometryInfo, i2, e.outSpatialReference), a2 = await _2.readFile(t2, n3, r2, i2, o2);
    return new _Jt(a2, Xt.fromFileMetadata(a2.metadata()));
  }
  static async fromFile(t2, e, _2) {
    const n3 = await Dt(), r2 = await n3.readMetadataFromFile(t2), i2 = e ? $t(e, r2, _2) : void 0, o2 = await n3.readFileFromBinary(i2, t2);
    return new _Jt(o2, Xt.fromFileMetadata(o2.metadata()));
  }
  constructor(t2, e) {
    this.inner = t2, this.metadata = e;
  }
  destroy() {
    this.inner.free(), this.metadata.destroy();
  }
  [Symbol.dispose]() {
    this.destroy();
  }
};

export {
  Jt
};
//# sourceMappingURL=chunk-OJ5IBYG7.js.map
