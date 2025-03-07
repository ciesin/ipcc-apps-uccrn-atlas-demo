import {
  n as n3
} from "./chunk-TGRCAT2Q.js";
import "./chunk-YVJ7MJNT.js";
import {
  m
} from "./chunk-C4XH7UYG.js";
import {
  B
} from "./chunk-RJYMNNKW.js";
import "./chunk-D5KT2NSO.js";
import "./chunk-U2TKRMQE.js";
import "./chunk-IWFYZGBP.js";
import "./chunk-H2PMLL3X.js";
import "./chunk-ZKPJPNLW.js";
import "./chunk-YINRFSE5.js";
import "./chunk-A6DPK5GC.js";
import "./chunk-WXGA2B5U.js";
import {
  N,
  T
} from "./chunk-HONYA6AI.js";
import {
  e,
  r as r2,
  t as t3
} from "./chunk-NOMJWA3C.js";
import "./chunk-X5RZJMNW.js";
import "./chunk-K24WU5UX.js";
import {
  C,
  D
} from "./chunk-CRKFUUKK.js";
import "./chunk-XJOBEGIR.js";
import "./chunk-LH36NQSN.js";
import "./chunk-K35H6D4D.js";
import {
  A,
  H,
  _ as _2,
  c,
  o
} from "./chunk-UMYFDXOJ.js";
import "./chunk-363AT5UF.js";
import "./chunk-4WERUJEK.js";
import "./chunk-YFLBSX2D.js";
import "./chunk-QTWG47SG.js";
import "./chunk-WJGG35K6.js";
import "./chunk-WJNMFEXQ.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-3UHB6K6P.js";
import "./chunk-ZYOZHQFS.js";
import "./chunk-53ZTROGC.js";
import "./chunk-PUM22WTC.js";
import {
  t as t2
} from "./chunk-BV7O6P7Z.js";
import {
  _,
  n as n2,
  s as s4,
  t
} from "./chunk-JLFSX3JT.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import {
  s as s3
} from "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import "./chunk-UFBX3XSC.js";
import {
  ot,
  tt
} from "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import "./chunk-RYSF6YCR.js";
import {
  r2 as r
} from "./chunk-4LTV6KQ5.js";
import "./chunk-PPIAYGRE.js";
import "./chunk-L7T5Z7MG.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import {
  s as s2
} from "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  F
} from "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/glb.js
var t4;
!function(t5) {
  t5[t5.JSON = 1313821514] = "JSON", t5[t5.BIN = 5130562] = "BIN";
}(t4 || (t4 = {}));
var e2 = class _e {
  constructor(i8, r4) {
    if (!i8) throw new Error("GLB requires a JSON gltf chunk");
    this._length = _e.HEADER_SIZE, this._length += _e.CHUNK_HEADER_SIZE;
    const s7 = n4(i8);
    if (this._length += h(s7.byteLength, 4), r4 && (this._length += _e.CHUNK_HEADER_SIZE, this._length += r4.byteLength, r4.byteLength % 4)) throw new Error("Expected BIN chunk length to be divisible by 4 at this point");
    this.buffer = new ArrayBuffer(this._length), this._outView = new DataView(this.buffer), this._writeHeader();
    const _3 = this._writeChunk(s7, 12, t4.JSON, 32);
    r4 && this._writeChunk(r4, _3, t4.BIN);
  }
  _writeHeader() {
    this._outView.setUint32(0, _e.MAGIC, true), this._outView.setUint32(4, _e.VERSION, true), this._outView.setUint32(8, this._length, true);
  }
  _writeChunk(t5, e4, n5, r4 = 0) {
    const s7 = h(t5.byteLength, 4);
    for (this._outView.setUint32(e4, s7, true), this._outView.setUint32(e4 += 4, n5, true), i(this._outView.buffer, t5, e4 += 4, 0, t5.byteLength), e4 += t5.byteLength; e4 % 4; ) r4 && this._outView.setUint8(e4, r4), e4++;
    return e4;
  }
};
function i(t5, e4, i8, n5, h2) {
  new Uint8Array(t5, i8, h2).set(new Uint8Array(e4, n5, h2), 0);
}
function n4(t5) {
  return new TextEncoder().encode(t5).buffer;
}
function h(t5, e4) {
  return e4 * Math.ceil(t5 / e4);
}
e2.HEADER_SIZE = 12, e2.CHUNK_HEADER_SIZE = 8, e2.MAGIC = 1179937895, e2.VERSION = 2;

// node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/types.js
var E;
var A2;
var R;
var L;
var o2;
var I;
var N2;
!function(E2) {
  E2[E2.External = 0] = "External", E2[E2.DataURI = 1] = "DataURI", E2[E2.GLB = 2] = "GLB";
}(E || (E = {})), function(E2) {
  E2[E2.External = 0] = "External", E2[E2.DataURI = 1] = "DataURI", E2[E2.GLB = 2] = "GLB";
}(A2 || (A2 = {})), function(E2) {
  E2[E2.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", E2[E2.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER";
}(R || (R = {})), function(E2) {
  E2.SCALAR = "SCALAR", E2.VEC2 = "VEC2", E2.VEC3 = "VEC3", E2.VEC4 = "VEC4", E2.MAT2 = "MAT2", E2.MAT3 = "MAT3", E2.MAT4 = "MAT4";
}(L || (L = {})), function(E2) {
  E2[E2.POINTS = 0] = "POINTS", E2[E2.LINES = 1] = "LINES", E2[E2.LINE_LOOP = 2] = "LINE_LOOP", E2[E2.LINE_STRIP = 3] = "LINE_STRIP", E2[E2.TRIANGLES = 4] = "TRIANGLES", E2[E2.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", E2[E2.TRIANGLE_FAN = 6] = "TRIANGLE_FAN";
}(o2 || (o2 = {})), function(E2) {
  E2.OPAQUE = "OPAQUE", E2.MASK = "MASK", E2.BLEND = "BLEND";
}(I || (I = {})), function(E2) {
  E2[E2.NoColor = 0] = "NoColor", E2[E2.FaceColor = 1] = "FaceColor", E2[E2.VertexColor = 2] = "VertexColor";
}(N2 || (N2 = {}));

// node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/bufferview.js
var i2 = class {
  constructor(t5, s7, i8, r4, n5) {
    this._buffer = t5, this._componentType = i8, this._dataType = r4, this._data = [], this._isFinalized = false, this._accessorIndex = -1, this._accessorAttribute = null, this._accessorMin = null, this._accessorMax = null, s7.bufferViews || (s7.bufferViews = []), this.index = s7.bufferViews.length, this._bufferView = { buffer: t5.index, byteLength: -1, target: n5 };
    const a3 = this._getElementSize();
    a3 >= 4 && n5 !== R.ELEMENT_ARRAY_BUFFER && (this._bufferView.byteStride = a3), s7.bufferViews.push(this._bufferView), this._numComponentsForDataType = this._calculateNumComponentsForDataType();
  }
  push(e4) {
    const t5 = this._data.length;
    if (this._data.push(e4), this._accessorIndex >= 0) {
      const s7 = t5 % this._numComponentsForDataType, i8 = this._accessorMin[s7];
      this._accessorMin[s7] = "number" != typeof i8 ? e4 : Math.min(i8, e4);
      const r4 = this._accessorMax[s7];
      this._accessorMax[s7] = "number" != typeof r4 ? e4 : Math.max(r4, e4);
    }
  }
  get dataSize() {
    return this._data.length * this._sizeComponentType();
  }
  get byteSize() {
    function e4(e5, t5) {
      return t5 * Math.ceil(e5 / t5);
    }
    return e4(this.dataSize, 4);
  }
  getByteOffset() {
    if (!this._isFinalized) throw new Error("Cannot get BufferView offset until it is finalized");
    return this._buffer.getByteOffset(this);
  }
  get byteOffset() {
    if (!this._isFinalized) throw new Error("Cannot get BufferView offset until it is finalized");
    return this._buffer.getByteOffset(this);
  }
  _createTypedArray(e4, t5) {
    switch (this._componentType) {
      case C.BYTE:
        return new Int8Array(e4, t5);
      case C.FLOAT:
        return new Float32Array(e4, t5);
      case C.SHORT:
        return new Int16Array(e4, t5);
      case C.UNSIGNED_BYTE:
        return new Uint8Array(e4, t5);
      case C.UNSIGNED_INT:
        return new Uint32Array(e4, t5);
      case C.UNSIGNED_SHORT:
        return new Uint16Array(e4, t5);
    }
  }
  writeOutToBuffer(e4, t5) {
    this._createTypedArray(e4, t5).set(this._data);
  }
  writeAsync(e4) {
    if (this._asyncWritePromise) throw new Error("Can't write multiple bufferView values asynchronously");
    return this._asyncWritePromise = e4.then((e5) => {
      const t5 = new Uint8Array(e5);
      for (let s7 = 0; s7 < t5.length; ++s7) this._data.push(t5[s7]);
      delete this._asyncWritePromise;
    }), this._asyncWritePromise;
  }
  startAccessor(e4) {
    if (this._accessorIndex >= 0) throw new Error("Accessor was started without ending the previous one");
    this._accessorIndex = this._data.length, this._accessorAttribute = e4;
    const t5 = this._numComponentsForDataType;
    this._accessorMin = new Array(t5), this._accessorMax = new Array(t5);
  }
  endAccessor() {
    if (this._accessorIndex < 0) throw new Error("An accessor was not started, but was attempted to be ended");
    const e4 = this._getElementSize(), t5 = this._numComponentsForDataType, i8 = (this._data.length - this._accessorIndex) / t5;
    if (i8 % 1) throw new Error("An accessor was ended with missing component values");
    for (let s7 = 0; s7 < this._accessorMin.length; ++s7) "number" != typeof this._accessorMin[s7] && (this._accessorMin[s7] = 0), "number" != typeof this._accessorMax[s7] && (this._accessorMax[s7] = 0);
    const r4 = { byteOffset: e4 * (this._accessorIndex / t5), componentType: this._componentType, count: i8, type: this._dataType, min: this._accessorMin, max: this._accessorMax, name: this._accessorAttribute };
    switch (this._accessorAttribute) {
      case "TEXCOORD_0":
      case "TEXCOORD_1":
      case "COLOR_0":
      case "WEIGHTS_0":
        switch (this._componentType) {
          case C.UNSIGNED_BYTE:
          case C.UNSIGNED_SHORT:
            r4.normalized = true;
        }
    }
    return this._accessorIndex = -1, this._accessorAttribute = null, this._accessorMin = null, this._accessorMax = null, r4;
  }
  get finalized() {
    return this._finalizedPromise ? this._finalizedPromise : this._isFinalized ? this._finalizedPromise = Promise.resolve() : this._finalizedPromise = new Promise((e4) => this._finalizedPromiseResolve = e4);
  }
  async finalize() {
    const e4 = this._bufferView, t5 = this._buffer.getViewFinalizePromises(this);
    this._asyncWritePromise && t5.push(this._asyncWritePromise), await Promise.allSettled(t5), this._isFinalized = true, e4.byteOffset = this.getByteOffset(), e4.byteLength = this.dataSize, this._finalizedPromiseResolve && this._finalizedPromiseResolve();
  }
  _getElementSize() {
    return this._sizeComponentType() * this._numComponentsForDataType;
  }
  _sizeComponentType() {
    switch (this._componentType) {
      case C.BYTE:
      case C.UNSIGNED_BYTE:
        return 1;
      case C.SHORT:
      case C.UNSIGNED_SHORT:
        return 2;
      case C.UNSIGNED_INT:
      case C.FLOAT:
        return 4;
    }
  }
  _calculateNumComponentsForDataType() {
    switch (this._dataType) {
      case L.SCALAR:
        return 1;
      case L.VEC2:
        return 2;
      case L.VEC3:
        return 3;
      case L.VEC4:
      case L.MAT2:
        return 4;
      case L.MAT3:
        return 9;
      case L.MAT4:
        return 16;
    }
  }
};

// node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/buffer.js
var i3 = class {
  constructor(e4) {
    this._gltf = e4, this._bufferViews = [], this._isFinalized = false, e4.buffers || (e4.buffers = []), this.index = e4.buffers.length;
    const i8 = { byteLength: -1 };
    e4.buffers.push(i8), this._buffer = i8;
  }
  addBufferView(i8, t5, r4) {
    if (this._finalizePromise) throw new Error("Cannot add buffer view after fiinalizing buffer");
    const f3 = new i2(this, this._gltf, i8, t5, r4);
    return this._bufferViews.push(f3), f3;
  }
  getByteOffset(e4) {
    let i8 = 0;
    for (const t5 of this._bufferViews) {
      if (t5 === e4) return i8;
      i8 += t5.byteSize;
    }
    throw new Error("Given bufferView was not present in this buffer");
  }
  getViewFinalizePromises(e4) {
    const i8 = [];
    for (const t5 of this._bufferViews) {
      if (e4 && t5 === e4) return i8;
      i8.push(t5.finalized);
    }
    return i8;
  }
  getArrayBuffer() {
    if (!this._isFinalized) throw new Error("Cannot get ArrayBuffer from Buffer before it is finalized");
    const e4 = this._getTotalSize(), i8 = new ArrayBuffer(e4);
    let t5 = 0;
    for (const r4 of this._bufferViews) r4.writeOutToBuffer(i8, t5), t5 += r4.byteSize;
    return i8;
  }
  finalize() {
    if (this._finalizePromise) throw new Error(`Buffer ${this.index} was already finalized`);
    return this._finalizePromise = Promise.allSettled(this.getViewFinalizePromises()).then(() => {
      this._isFinalized = true;
      const e4 = this.getArrayBuffer();
      this._buffer.byteLength = e4.byteLength, this._buffer.uri = e4;
    }), this._gltf.extras.promises.push(this._finalizePromise), this._finalizePromise;
  }
  _getTotalSize() {
    let e4 = 0;
    for (const i8 of this._bufferViews) e4 += i8.byteSize;
    return e4;
  }
};

// node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/geometry.js
function r3(o4, n5) {
  if (o4.components) for (const t5 of o4.components) t5.faces && "smooth" === t5.shading && c2(t5.faces, n5);
}
function c2(e4, r4) {
  null == r4.normal && (r4.normal = new Float32Array(r4.position.length));
  const { position: c4, normal: m3 } = r4, p = e4.length / 3;
  for (let s7 = 0; s7 < p; ++s7) {
    const r5 = 3 * e4[3 * s7], l3 = 3 * e4[3 * s7 + 1], p2 = 3 * e4[3 * s7 + 2], h2 = o(a, c4[r5], c4[r5 + 1], c4[r5 + 2]), g = o(i4, c4[l3], c4[l3 + 1], c4[l3 + 2]), u2 = o(f, c4[p2], c4[p2 + 1], c4[p2 + 2]), d2 = c(g, g, h2), j = c(u2, u2, h2), v2 = _2(d2, d2, j);
    m3[r5] += v2[0], m3[r5 + 1] += v2[1], m3[r5 + 2] += v2[2], m3[l3] += v2[0], m3[l3 + 1] += v2[1], m3[l3 + 2] += v2[2], m3[p2] += v2[0], m3[p2 + 1] += v2[1], m3[p2 + 2] += v2[2];
  }
  for (let n5 = 0; n5 < m3.length; n5 += 3) o(l, m3[n5], m3[n5 + 1], m3[n5 + 2]), A(l, l), m3[n5] = l[0], m3[n5 + 1] = l[1], m3[n5 + 2] = l[2];
}
var a = n2();
var i4 = n2();
var f = n2();
var l = n2();

// node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/imageutils.js
function a2(e4) {
  const t5 = m2(e4);
  return null != t5 ? t5.toDataURL() : "";
}
async function i5(n5, r4) {
  const a3 = m2(n5);
  if (null == a3) throw new s("imageToArrayBuffer", "Unsupported image type");
  const i8 = o3(n5), s7 = await new Promise((e4) => a3.toBlob(e4, i8));
  if (s2(r4), !s7) throw new s("imageToArrayBuffer", "Failed to encode image");
  const c4 = await s7.arrayBuffer();
  return s2(r4), { data: c4, type: i8 };
}
function o3(e4) {
  if (!(e4 instanceof HTMLImageElement)) return "image/png";
  const t5 = e4.src;
  if (tt(t5)) {
    const e5 = ot(t5);
    return "image/jpeg" === (e5 == null ? void 0 : e5.mediaType) ? e5.mediaType : "image/png";
  }
  return /\.png$/i.test(t5) ? "image/png" : /\.(jpg|jpeg)$/i.test(t5) ? "image/jpeg" : "image/png";
}
function m2(e4) {
  if (e4 instanceof HTMLCanvasElement) return e4;
  if (e4 instanceof HTMLVideoElement) return null;
  const t5 = document.createElement("canvas");
  t5.width = e4.width, t5.height = e4.height;
  const n5 = t5.getContext("2d");
  return e4 instanceof HTMLImageElement ? n5.drawImage(e4, 0, 0, e4.width, e4.height) : e4 instanceof ImageData && n5.putImageData(e4, 0, 0), t5;
}
function s5(e4) {
  const t5 = [], n5 = new Uint8Array(e4);
  for (let r4 = 0; r4 < n5.length; r4++) t5.push(String.fromCharCode(n5[r4]));
  return "data:application/octet-stream;base64," + btoa(t5.join(""));
}
function c3(e4) {
  if (e4.byteLength < 8) return false;
  const t5 = new Uint8Array(e4);
  return 137 === t5[0] && 80 === t5[1] && 78 === t5[2] && 71 === t5[3] && 13 === t5[4] && 10 === t5[5] && 26 === t5[6] && 10 === t5[7];
}

// node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/gltf.js
var O = () => n.getLogger("esri.geometry.support.meshUtils.exporters.gltf.gltf");
var w = class {
  constructor(e4, t5) {
    this.options = t5, this._materialMap = new Array(), this._imageMap = /* @__PURE__ */ new Map(), this._textureMap = /* @__PURE__ */ new Map(), this.gltf = { asset: { version: "2.0", copyright: e4.copyright, generator: e4.generator }, extras: { output: t5.output, binChunkBuffer: null, promises: [] } }, this._addScenes(e4);
  }
  _addScenes(e4) {
    this.gltf.scene = e4.defaultScene;
    const t5 = this.gltf.extras, s7 = t5.output.buffer === E.GLB || t5.output.image === A2.GLB;
    s7 && (t5.binChunkBuffer = new i3(this.gltf)), e4.forEachScene((e5) => {
      this._addScene(e5);
    }), s7 && t5.binChunkBuffer.finalize();
  }
  _addScene(e4) {
    this.gltf.scenes || (this.gltf.scenes = []);
    const t5 = {};
    e4.name && (t5.name = e4.name), e4.forEachNode((e5) => {
      t5.nodes || (t5.nodes = []), t5.nodes.push(...this._addNodes(e5));
    }), this.gltf.scenes.push(t5);
  }
  _addNodes(e4) {
    this.gltf.nodes || (this.gltf.nodes = []);
    const t5 = {};
    e4.name && (t5.name = e4.name);
    const s7 = e4.translation;
    H(s7, _) || (t5.translation = t(s7));
    const r4 = e4.rotation;
    N(r4, r2) || (t5.rotation = t3(r4));
    const h2 = e4.scale;
    H(h2, s4) || (t5.scale = t(h2));
    const f3 = this.gltf.nodes.length;
    if (this.gltf.nodes.push(t5), e4.mesh && e4.mesh.vertexAttributes.position) {
      const s8 = this._createMeshes(e4.mesh), r5 = [f3];
      if (1 === s8.length) this._addMesh(t5, s8[0]);
      else for (const e5 of s8) {
        const t6 = {};
        this._addMesh(t6, e5), r5.push(this.gltf.nodes.length), this.gltf.nodes.push(t6);
      }
      return r5;
    }
    return e4.forEachNode((e5) => {
      t5.children || (t5.children = []), t5.children.push(...this._addNodes(e5));
    }), [f3];
  }
  _addMesh(e4, t5) {
    var _a;
    (_a = this.gltf).meshes ?? (_a.meshes = []);
    const s7 = this.gltf.meshes.length;
    this.gltf.meshes.push(t5), e4.mesh = s7;
  }
  _createMeshes(e4) {
    var _a;
    const t5 = this.gltf.extras, s7 = t5.output.buffer === E.GLB;
    let r4;
    r4 = s7 ? t5.binChunkBuffer : new i3(this.gltf);
    const i8 = this.options.origin, o4 = e4.vertexSpace.clone();
    o4.origin = [i8.x, i8.y, i8.z ?? 0];
    const a3 = B({ vertexAttributes: e4.vertexAttributes, vertexSpace: e4.vertexSpace, transform: ((_a = this.options) == null ? void 0 : _a.ignoreLocalTransform) ? null : e4.transform, spatialReference: e4.spatialReference }, o4, { targetUnit: this.options.unitConversionDisabled ? void 0 : "meters" });
    if (!a3) return [];
    r3(e4, a3), v(a3);
    const { position: n5, normal: l3, tangent: c4 } = a3, { uv: u2, color: h2 } = e4.vertexAttributes, g = r4.addBufferView(C.FLOAT, L.VEC3, R.ARRAY_BUFFER);
    let T2, R2, A3, b;
    l3 && (T2 = r4.addBufferView(C.FLOAT, L.VEC3, R.ARRAY_BUFFER)), u2 && (R2 = r4.addBufferView(C.FLOAT, L.VEC2, R.ARRAY_BUFFER)), c4 && (A3 = r4.addBufferView(C.FLOAT, L.VEC4, R.ARRAY_BUFFER)), h2 && (b = r4.addBufferView(C.FLOAT, L.VEC4, R.ARRAY_BUFFER)), g.startAccessor("POSITION"), T2 && T2.startAccessor("NORMAL"), R2 && R2.startAccessor("TEXCOORD_0"), A3 && A3.startAccessor("TANGENT"), b && b.startAccessor("COLOR_0");
    const E2 = a3.position.length / 3;
    for (let f3 = 0; f3 < E2; ++f3) g.push(n5[3 * f3]), g.push(n5[3 * f3 + 1]), g.push(n5[3 * f3 + 2]), T2 && null != l3 && (T2.push(l3[3 * f3]), T2.push(l3[3 * f3 + 1]), T2.push(l3[3 * f3 + 2])), R2 && null != u2 && (R2.push(u2[2 * f3]), R2.push(u2[2 * f3 + 1])), A3 && null != c4 && (A3.push(c4[4 * f3]), A3.push(c4[4 * f3 + 1]), A3.push(c4[4 * f3 + 2]), A3.push(c4[4 * f3 + 3])), b && null != h2 && (b.push(I2(h2[4 * f3] / 255)), b.push(I2(h2[4 * f3 + 1] / 255)), b.push(I2(h2[4 * f3 + 2] / 255)), b.push(h2[4 * f3 + 3] / 255));
    const O2 = g.endAccessor(), w2 = this._addAccessor(g.index, O2);
    let C3, N3, L2, S, B2;
    if (T2) {
      const e5 = T2.endAccessor();
      C3 = this._addAccessor(T2.index, e5);
    }
    if (R2) {
      const e5 = R2.endAccessor();
      N3 = this._addAccessor(R2.index, e5);
    }
    if (A3) {
      const e5 = A3.endAccessor();
      L2 = this._addAccessor(A3.index, e5);
    }
    if (b) {
      const e5 = b.endAccessor();
      S = this._addAccessor(b.index, e5);
    }
    const F2 = [];
    return e4.components && e4.components.length > 0 && e4.components[0].faces ? (B2 = r4.addBufferView(C.UNSIGNED_INT, L.SCALAR, R.ELEMENT_ARRAY_BUFFER), this._addMeshVertexIndexed(B2, e4.components, F2, w2, C3, N3, L2, S)) : this._addMeshVertexNonIndexed(e4.components, F2, w2, C3, N3, L2, S), g.finalize(), T2 && T2.finalize(), R2 && R2.finalize(), A3 && A3.finalize(), B2 && B2.finalize(), b && b.finalize(), s7 || r4.finalize(), F2;
  }
  _addMaterial(e4) {
    if (null == e4) return;
    const t5 = this._materialMap.indexOf(e4);
    if (-1 !== t5) return t5;
    this.gltf.materials || (this.gltf.materials = []);
    const s7 = {};
    switch (e4.alphaMode) {
      case "mask":
        s7.alphaMode = I.MASK;
        break;
      case "auto":
      case "blend":
        s7.alphaMode = I.BLEND;
    }
    s7.alphaCutoff = e4.alphaCutoff, e4.doubleSided && (s7.doubleSided = e4.doubleSided), s7.pbrMetallicRoughness = {};
    const r4 = (e5) => {
      const t6 = e5.toRgba();
      return t6[0] = I2(t6[0] / 255), t6[1] = I2(t6[1] / 255), t6[2] = I2(t6[2] / 255), t6;
    };
    if (null != e4.color && (s7.pbrMetallicRoughness.baseColorFactor = r4(e4.color)), null != e4.colorTexture && (s7.pbrMetallicRoughness.baseColorTexture = this._createTextureInfo(e4.colorTexture, e4.colorTextureTransform)), null != e4.normalTexture && (s7.normalTexture = this._createTextureInfo(e4.normalTexture, e4.normalTextureTransform)), e4 instanceof m) {
      if (null != e4.emissiveTexture && (s7.emissiveTexture = this._createTextureInfo(e4.emissiveTexture, e4.emissiveTextureTransform)), null != e4.emissiveColor) {
        const t6 = r4(e4.emissiveColor);
        s7.emissiveFactor = [t6[0], t6[1], t6[2]];
      }
      null != e4.occlusionTexture && (s7.occlusionTexture = this._createTextureInfo(e4.occlusionTexture, e4.occlusionTextureTransform)), null != e4.metallicRoughnessTexture && (s7.pbrMetallicRoughness.metallicRoughnessTexture = this._createTextureInfo(e4.metallicRoughnessTexture, e4.metallicRoughnessTextureTransform)), s7.pbrMetallicRoughness.metallicFactor = e4.metallic, s7.pbrMetallicRoughness.roughnessFactor = e4.roughness;
    } else s7.pbrMetallicRoughness.metallicFactor = 1, s7.pbrMetallicRoughness.roughnessFactor = 1, O().warnOnce("Meshes exported to GLTF without MeshMaterialMetallicRoughness material will appear different when imported back.");
    const i8 = this.gltf.materials.length;
    return this.gltf.materials.push(s7), this._materialMap.push(e4), i8;
  }
  _createTextureInfo(e4, t5) {
    const s7 = { index: this._addTexture(e4) };
    return t5 ? (s7.extensions || (s7.extensions = {}), s7.extensions.KHR_texture_transform = { scale: t5.scale, offset: t5.offset, rotation: s3(t5.rotation) }, s7) : s7;
  }
  _addTexture(e4) {
    const t5 = this.gltf.textures ?? [];
    return this.gltf.textures = t5, r(this._textureMap, e4, () => {
      const s7 = { sampler: this._addSampler(e4), source: this._addImage(e4) }, r4 = t5.length;
      return t5.push(s7), r4;
    });
  }
  _addImage(e4) {
    const t5 = this._imageMap.get(e4);
    if (null != t5) return t5;
    this.gltf.images || (this.gltf.images = []);
    const s7 = {};
    if (e4.url) s7.uri = e4.url;
    else {
      const t6 = e4.data;
      s7.extras = t6;
      for (let e5 = 0; e5 < this.gltf.images.length; ++e5) if (t6 === this.gltf.images[e5].extras) return e5;
      const r5 = this.gltf.extras;
      switch (r5.output.image) {
        case A2.GLB: {
          const e5 = r5.binChunkBuffer.addBufferView(C.UNSIGNED_BYTE, L.SCALAR);
          if (n3(t6)) null != t6.data && e5.writeOutToBuffer(t6.data, 0);
          else {
            const i8 = i5(t6, this.options.signal).then(({ data: e6, type: t7 }) => (s7.mimeType = t7, e6));
            r5.promises.push(e5.writeAsync(i8).then(() => {
              e5.finalize();
            }));
          }
          s7.bufferView = e5.index;
          break;
        }
        case A2.DataURI:
          if (n3(t6)) {
            O().warnOnce("Image export for basis compressed textures not available.");
            break;
          }
          s7.uri = a2(t6);
          break;
        default:
          if (n3(t6)) {
            O().warnOnce("Image export for basis compressed textures not available.");
            break;
          }
          r5.promises.push(i5(t6, this.options.signal).then(({ data: e5, type: t7 }) => {
            s7.uri = e5, s7.mimeType = t7;
          }));
      }
    }
    const r4 = this.gltf.images.length;
    return this.gltf.images.push(s7), this._imageMap.set(e4, r4), r4;
  }
  _addSampler(e4) {
    this.gltf.samplers || (this.gltf.samplers = []);
    let t5 = D.REPEAT, s7 = D.REPEAT;
    if ("string" == typeof e4.wrap) switch (e4.wrap) {
      case "clamp":
        t5 = D.CLAMP_TO_EDGE, s7 = D.CLAMP_TO_EDGE;
        break;
      case "mirror":
        t5 = D.MIRRORED_REPEAT, s7 = D.MIRRORED_REPEAT;
    }
    else {
      switch (e4.wrap.vertical) {
        case "clamp":
          s7 = D.CLAMP_TO_EDGE;
          break;
        case "mirror":
          s7 = D.MIRRORED_REPEAT;
      }
      switch (e4.wrap.horizontal) {
        case "clamp":
          t5 = D.CLAMP_TO_EDGE;
          break;
        case "mirror":
          t5 = D.MIRRORED_REPEAT;
      }
    }
    const r4 = { wrapS: t5, wrapT: s7 };
    for (let o4 = 0; o4 < this.gltf.samplers.length; ++o4) if (JSON.stringify(r4) === JSON.stringify(this.gltf.samplers[o4])) return o4;
    const i8 = this.gltf.samplers.length;
    return this.gltf.samplers.push(r4), i8;
  }
  _addAccessor(e4, t5) {
    this.gltf.accessors || (this.gltf.accessors = []);
    const s7 = { bufferView: e4, byteOffset: t5.byteOffset, componentType: t5.componentType, count: t5.count, type: t5.type, min: t5.min, max: t5.max, name: t5.name };
    t5.normalized && (s7.normalized = true);
    const r4 = this.gltf.accessors.length;
    return this.gltf.accessors.push(s7), r4;
  }
  _addMeshVertexIndexed(e4, t5, s7, r4, i8, o4, a3, n5) {
    const l3 = /* @__PURE__ */ new Map();
    for (const c4 of t5) {
      if (e4.startAccessor("INDICES"), c4.faces) for (let s8 = 0; s8 < c4.faces.length; ++s8) e4.push(c4.faces[s8]);
      const t6 = e4.endAccessor(), u2 = { attributes: { POSITION: r4 }, indices: this._addAccessor(e4.index, t6), material: this._addMaterial(c4.material) };
      i8 && "flat" !== c4.shading && (u2.attributes.NORMAL = i8), o4 && (u2.attributes.TEXCOORD_0 = o4), a3 && "flat" !== c4.shading && (u2.attributes.TANGENT = a3), n5 && (u2.attributes.COLOR_0 = n5);
      const h2 = l3.get(c4.name);
      if (h2) h2.primitives.push(u2);
      else {
        const e5 = { name: c4.name, primitives: [u2] };
        l3.set(c4.name, e5), s7.push(e5);
      }
    }
  }
  _addMeshVertexNonIndexed(e4, t5, s7, r4, i8, o4, a3) {
    const n5 = { primitives: [] };
    t5.push(n5);
    const l3 = { attributes: { POSITION: s7 } };
    r4 && (l3.attributes.NORMAL = r4), i8 && (l3.attributes.TEXCOORD_0 = i8), o4 && (l3.attributes.TANGENT = o4), a3 && (l3.attributes.COLOR_0 = a3), e4 && (l3.material = this._addMaterial(e4[0].material)), n5.primitives.push(l3);
  }
};
function v({ position: e4, normal: t5, tangent: s7 }) {
  C2(e4, 3), C2(t5, 3), C2(s7, 4);
}
function C2(e4, t5) {
  if (null != e4) for (let s7 = 1, r4 = 2; s7 < e4.length; s7 += t5, r4 += t5) {
    const t6 = e4[s7], i8 = e4[r4];
    e4[s7] = i8, e4[r4] = -t6;
  }
}
function I2(t5) {
  return t5 ** t2;
}

// node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/asset.js
var s6 = class {
  constructor() {
    this.copyright = "", this.defaultScene = 0, this.generator = "", this._scenes = [];
  }
  addScene(e4) {
    if (this._scenes.includes(e4)) throw new Error("Scene already added");
    this._scenes.push(e4);
  }
  removeScene(s7) {
    F(this._scenes, s7);
  }
  forEachScene(e4) {
    this._scenes.forEach(e4);
  }
};

// node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/scene.js
var d = class {
  constructor() {
    this.name = "", this._nodes = [];
  }
  addNode(d2) {
    if (this._nodes.includes(d2)) throw new Error("Node already added");
    this._nodes.push(d2);
  }
  forEachNode(d2) {
    this._nodes.forEach(d2);
  }
};

// node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/node.js
var e3 = class {
  constructor(t5) {
    this.mesh = t5, this.name = "", this.translation = n2(), this.rotation = e(), this.scale = t(s4), this._nodes = [];
  }
  addNode(t5) {
    if (this._nodes.includes(t5)) throw new Error("Node already added");
    this._nodes.push(t5);
  }
  forEachNode(t5) {
    this._nodes.forEach(t5);
  }
  set rotationAngles(s7) {
    T(this.rotation, s7[0], s7[1], s7[2]);
  }
};

// node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/index.js
var f2 = "model.gltf";
var i6 = "model.glb";
async function u(u2, l3) {
  var _a, _b;
  const c4 = new w(u2, l3).gltf, p = c4.extras.promises;
  let m3 = 1, g = 1, d2 = null;
  await Promise.allSettled(p), s2(l3.signal);
  const b = l3.jsonSpacing ?? 4, j = /* @__PURE__ */ new Map(), w2 = JSON.stringify(c4, (e4, t5) => {
    var _a2, _b2;
    if ("extras" !== e4) {
      if (t5 instanceof ArrayBuffer) {
        if (c3(t5)) switch ((_a2 = l3.output) == null ? void 0 : _a2.image) {
          case A2.DataURI:
          case A2.GLB:
            break;
          case A2.External:
          default: {
            const e5 = `img${g}.png`;
            return g++, j.set(e5, t5), e5;
          }
        }
        switch ((_b2 = l3.output) == null ? void 0 : _b2.buffer) {
          case E.DataURI:
            return s5(t5);
          case E.GLB:
            if (d2) throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");
            return void (d2 = t5);
          case E.External:
          default: {
            const e5 = `data${m3}.bin`;
            return m3++, j.set(e5, t5), e5;
          }
        }
      }
      return t5;
    }
  }, b);
  return ((_a = l3.output) == null ? void 0 : _a.buffer) === E.GLB || ((_b = l3.output) == null ? void 0 : _b.image) === A2.GLB ? j.set(i6, new e2(w2, d2).buffer) : j.set(f2, w2), j;
}
async function l2(e4, t5) {
  const r4 = (await u(e4, { output: { buffer: E.GLB, image: A2.GLB }, jsonSpacing: 0, ...t5 })).get(i6);
  if (!(r4 && r4 instanceof ArrayBuffer)) throw new Error("failed to export to glb");
  return r4;
}

// node_modules/@arcgis/core/geometry/support/meshUtils/exporters/gltf/gltfexport.js
async function i7(i8, t5) {
  const s7 = new s6(), m3 = new d();
  return s7.addScene(m3), m3.addNode(new e3(i8)), await l2(s7, { origin: i8.origin, ...t5 });
}
export {
  i7 as toBinaryGLTF
};
//# sourceMappingURL=gltfexport-HNWK4OAL.js.map
