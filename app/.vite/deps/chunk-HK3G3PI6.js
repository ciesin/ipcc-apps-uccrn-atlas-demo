import {
  n as n3,
  o,
  r as r4,
  t
} from "./chunk-TGRCAT2Q.js";
import {
  A,
  B,
  E,
  F,
  L,
  O,
  V,
  c as c2,
  d,
  g as g3,
  i as i2,
  q,
  u,
  w,
  x
} from "./chunk-WXGA2B5U.js";
import {
  v
} from "./chunk-HONYA6AI.js";
import {
  e as e2
} from "./chunk-NOMJWA3C.js";
import {
  e,
  r as r3
} from "./chunk-X5RZJMNW.js";
import {
  C,
  D,
  E as E2,
  L as L2
} from "./chunk-CRKFUUKK.js";
import {
  r as r2
} from "./chunk-WF2ACUGU.js";
import {
  b,
  c,
  f,
  g as g2,
  i
} from "./chunk-53ZTROGC.js";
import {
  _,
  nt,
  ot,
  tt
} from "./chunk-F7TCEOHX.js";
import {
  r2 as r
} from "./chunk-4LTV6KQ5.js";
import {
  g
} from "./chunk-M6FNW7GP.js";
import {
  n2,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  n
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/3d/glTF/LoaderResult.js
function r5(e4 = {}) {
  return { color: [1, 1, 1], opacity: 1, alphaMode: "OPAQUE", alphaCutoff: 0.5, doubleSided: false, castShadows: true, receiveShadows: true, receiveAmbientOcclustion: true, colorTexture: null, normalTexture: null, occlusionTexture: null, emissiveTexture: null, metallicRoughnessTexture: null, colorTextureTransform: null, normalTextureTransform: null, occlusionTextureTransform: null, emissiveTextureTransform: null, metallicRoughnessTextureTransform: null, emissiveFactor: [0, 0, 0], metallicFactor: 1, roughnessFactor: 1, colorMixMode: "multiply", ...e4 };
}
function l(r7, l4 = {}) {
  return { data: r7, parameters: { wrap: { s: D.REPEAT, t: D.REPEAT, ...l4.wrap }, noUnpackFlip: true, mipmap: false, ...l4 } };
}

// node_modules/@arcgis/core/chunks/scalar.js
function e3(e4, t5) {
  const o2 = e4.count;
  t5 || (t5 = new e4.TypedArrayConstructor(o2));
  for (let r7 = 0; r7 < o2; r7++) t5[r7] = e4.get(r7);
  return t5;
}
var t2 = Object.freeze(Object.defineProperty({ __proto__: null, makeDense: e3 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/views/3d/glTF/internal/BinaryStreamReader.js
var t3 = class {
  constructor(t5) {
    this._data = t5, this._offset4 = 0, this._dataUint32 = new Uint32Array(this._data, 0, Math.floor(this._data.byteLength / 4));
  }
  readUint32() {
    const t5 = this._offset4;
    return this._offset4 += 1, this._dataUint32[t5];
  }
  readUint8Array(t5) {
    const s3 = 4 * this._offset4;
    return this._offset4 += t5 / 4, new Uint8Array(this._data, s3, t5);
  }
  remainingBytes() {
    return this._data.byteLength - 4 * this._offset4;
  }
};

// node_modules/@arcgis/core/views/3d/glTF/internal/enums.js
var A2;
var E3;
!function(A3) {
  A3.SCALAR = "SCALAR", A3.VEC2 = "VEC2", A3.VEC3 = "VEC3", A3.VEC4 = "VEC4", A3.MAT2 = "MAT2", A3.MAT3 = "MAT3", A3.MAT4 = "MAT4";
}(A2 || (A2 = {})), function(A3) {
  A3[A3.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", A3[A3.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER";
}(E3 || (E3 = {}));

// node_modules/@arcgis/core/views/3d/glTF/internal/fillDefaults.js
var t4 = { baseColorFactor: [1, 1, 1, 1], metallicFactor: 1, roughnessFactor: 1 };
var a = { pbrMetallicRoughness: t4, emissiveFactor: [0, 0, 0], alphaMode: "OPAQUE", alphaCutoff: 0.5, doubleSided: false };
var l2 = { ESRI_externalColorMixMode: "tint", ESRI_receiveShadows: true, ESRI_receiveAmbientOcclusion: true };
var i3 = (e4 = {}) => {
  const o2 = { ...t4, ...e4.pbrMetallicRoughness }, r7 = s2({ ...l2, ...e4.extras });
  return { ...a, ...e4, pbrMetallicRoughness: o2, extras: r7 };
};
function s2(o2) {
  switch (o2.ESRI_externalColorMixMode) {
    case "multiply":
    case "tint":
    case "ignore":
    case "replace":
      break;
    default:
      n(o2.ESRI_externalColorMixMode), o2.ESRI_externalColorMixMode = "tint";
  }
  return o2;
}
var c3 = { magFilter: L2.LINEAR, minFilter: L2.LINEAR_MIPMAP_LINEAR, wrapS: D.REPEAT, wrapT: D.REPEAT };
var n4 = (e4) => ({ ...c3, ...e4 });

// node_modules/@arcgis/core/views/3d/glTF/internal/pathUtils.js
function r6(r7) {
  let e4, t5;
  return r7.replace(/^(.*\/)?([^/]*)$/, (r8, a2, i5) => (e4 = a2 || "", t5 = i5 || "", "")), { dirPart: e4, filePart: t5 };
}

// node_modules/@arcgis/core/views/3d/glTF/internal/Resource.js
var k = { MAGIC: 1179937895, CHUNK_TYPE_JSON: 1313821514, CHUNK_TYPE_BIN: 5130562, MIN_HEADER_LENGTH: 20 };
var Y = class _Y {
  constructor(t5, r7, o2, n5) {
    if (this._context = t5, this.uri = r7, this.json = o2, this._glbBuffer = n5, this._bufferLoaders = /* @__PURE__ */ new Map(), this._textureLoaders = /* @__PURE__ */ new Map(), this._textureCache = /* @__PURE__ */ new Map(), this._materialCache = /* @__PURE__ */ new Map(), this._nodeParentMap = /* @__PURE__ */ new Map(), this._nodeTransformCache = /* @__PURE__ */ new Map(), this._supportedExtensions = ["KHR_texture_basisu", "KHR_texture_transform"], this._baseUri = r6(this.uri).dirPart, this._checkVersionSupported(), this._checkRequiredExtensionsSupported(), null == o2.scenes) throw new s("gltf-loader-unsupported-feature", "Scenes must be defined.");
    if (null == o2.meshes) throw new s("gltf-loader-unsupported-feature", "Meshes must be defined");
    if (null == o2.nodes) throw new s("gltf-loader-unsupported-feature", "Nodes must be defined.");
    this._computeNodeParents();
  }
  static async load(t5, r7, o2) {
    if (tt(r7)) {
      const e4 = ot(r7);
      if (e4 && "model/gltf-binary" !== e4.mediaType) try {
        const o4 = JSON.parse(e4.isBase64 ? atob(e4.data) : e4.data);
        return new _Y(t5, r7, o4);
      } catch {
      }
      const o3 = nt(r7);
      if (_Y._isGLBData(o3)) return this._fromGLBData(t5, r7, o3);
    }
    if (ee.test(r7) || "gltf" === (o2 == null ? void 0 : o2.expectedType)) {
      const e4 = await t5.loadJSON(r7, o2);
      return new _Y(t5, r7, e4);
    }
    const i5 = await t5.loadBinary(r7, o2);
    if (_Y._isGLBData(i5)) return this._fromGLBData(t5, r7, i5);
    if (te.test(r7) || "glb" === (o2 == null ? void 0 : o2.expectedType)) throw new s("gltf-loader-invalid-glb", "This is not a valid glb file.");
    const u3 = await t5.loadJSON(r7, o2);
    return new _Y(t5, r7, u3);
  }
  static _isGLBData(e4) {
    if (null == e4) return false;
    const t5 = new t3(e4);
    return t5.remainingBytes() >= 4 && t5.readUint32() === k.MAGIC;
  }
  static async _fromGLBData(e4, t5, r7) {
    const o2 = await _Y._parseGLBData(r7);
    return new _Y(e4, t5, o2.json, o2.binaryData);
  }
  static async _parseGLBData(r7) {
    const o2 = new t3(r7);
    if (o2.remainingBytes() < 12) throw new s("gltf-loader-error", "glb binary data is insufficiently large.");
    const n5 = o2.readUint32(), s3 = o2.readUint32(), a2 = o2.readUint32();
    if (n5 !== k.MAGIC) throw new s("gltf-loader-error", "Magic first 4 bytes do not fit to expected glb value.");
    if (r7.byteLength < a2) throw new s("gltf-loader-error", "glb binary data is smaller than header specifies.");
    if (2 !== s3) throw new s("gltf-loader-unsupported-feature", "An unsupported glb container version was detected. Only version 2 is supported.");
    let i5, u3, f2 = 0;
    for (; o2.remainingBytes() >= 8; ) {
      const r8 = o2.readUint32(), n6 = o2.readUint32();
      if (0 === f2) {
        if (n6 !== k.CHUNK_TYPE_JSON) throw new s("gltf-loader-error", "First glb chunk must be JSON.");
        if (r8 < 0) throw new s("gltf-loader-error", "No JSON data found.");
        i5 = await r4(o2.readUint8Array(r8));
      } else if (1 === f2) {
        if (n6 !== k.CHUNK_TYPE_BIN) throw new s("gltf-loader-unsupported-feature", "Second glb chunk expected to be BIN.");
        u3 = o2.readUint8Array(r8);
      } else n2.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");
      f2 += 1;
    }
    if (!i5) throw new s("gltf-loader-error", "No glb JSON chunk detected.");
    return { json: i5, binaryData: u3 };
  }
  async getBuffer(t5, r7) {
    const o2 = this.json.buffers[t5];
    if (null == o2.uri) {
      if (null == this._glbBuffer) throw new s("gltf-loader-error", "glb buffer not present");
      return this._glbBuffer;
    }
    const n5 = await this._getBufferLoader(t5, r7);
    if (n5.byteLength !== o2.byteLength) throw new s("gltf-loader-error", "Buffer byte lengths should match.");
    return n5;
  }
  async _getBufferLoader(e4, t5) {
    const r7 = this._bufferLoaders.get(e4);
    if (r7) return r7;
    const o2 = this.json.buffers[e4].uri, n5 = this._context.loadBinary(this._resolveUri(o2), t5).then((e5) => new Uint8Array(e5));
    return this._bufferLoaders.set(e4, n5), n5;
  }
  async getAccessor(t5, r7) {
    if (!this.json.accessors) throw new s("gltf-loader-unsupported-feature", "Accessors missing.");
    const o2 = this.json.accessors[t5];
    if (null == (o2 == null ? void 0 : o2.bufferView)) throw new s("gltf-loader-unsupported-feature", "Some accessor does not specify a bufferView.");
    if (o2.type in [A2.MAT2, A2.MAT3, A2.MAT4]) throw new s("gltf-loader-unsupported-feature", `AttributeType ${o2.type} is not supported`);
    const n5 = this.json.bufferViews[o2.bufferView], s3 = await this.getBuffer(n5.buffer, r7), a2 = X[o2.type], i5 = $[o2.componentType], u3 = a2 * i5, f2 = n5.byteStride || u3;
    return { raw: s3.buffer, byteStride: f2, byteOffset: s3.byteOffset + (n5.byteOffset || 0) + (o2.byteOffset || 0), entryCount: o2.count, isDenselyPacked: f2 === u3, componentCount: a2, componentByteSize: i5, componentType: o2.componentType, min: o2.min, max: o2.max, normalized: !!o2.normalized };
  }
  async getIndexData(e4, t5) {
    if (null == e4.indices) return;
    const r7 = await this.getAccessor(e4.indices, t5);
    if (r7.isDenselyPacked) switch (r7.componentType) {
      case C.UNSIGNED_BYTE:
        return new Uint8Array(r7.raw, r7.byteOffset, r7.entryCount);
      case C.UNSIGNED_SHORT:
        return new Uint16Array(r7.raw, r7.byteOffset, r7.entryCount);
      case C.UNSIGNED_INT:
        return new Uint32Array(r7.raw, r7.byteOffset, r7.entryCount);
    }
    else switch (r7.componentType) {
      case C.UNSIGNED_BYTE:
        return e3(Q(d, r7));
      case C.UNSIGNED_SHORT:
        return e3(Q(g3, r7));
      case C.UNSIGNED_INT:
        return e3(Q(B, r7));
    }
  }
  async getPositionData(t5, r7) {
    if (null == t5.attributes.POSITION) throw new s("gltf-loader-unsupported-feature", "No POSITION vertex data found.");
    const o2 = await this.getAccessor(t5.attributes.POSITION, r7);
    if (o2.componentType !== C.FLOAT) throw new s("gltf-loader-unsupported-feature", "Expected type FLOAT for POSITION vertex attribute, but found " + C[o2.componentType]);
    if (3 !== o2.componentCount) throw new s("gltf-loader-unsupported-feature", "POSITION vertex attribute must have 3 components, but found " + o2.componentCount.toFixed());
    return Q(i2, o2);
  }
  async getNormalData(t5, r7) {
    if (null == t5.attributes.NORMAL) throw new s("gltf-loader-error", "No NORMAL vertex data found.");
    const o2 = await this.getAccessor(t5.attributes.NORMAL, r7);
    if (o2.componentType !== C.FLOAT) throw new s("gltf-loader-unsupported-feature", "Expected type FLOAT for NORMAL vertex attribute, but found " + C[o2.componentType]);
    if (3 !== o2.componentCount) throw new s("gltf-loader-unsupported-feature", "NORMAL vertex attribute must have 3 components, but found " + o2.componentCount.toFixed());
    return Q(i2, o2);
  }
  async getTangentData(t5, r7) {
    if (null == t5.attributes.TANGENT) throw new s("gltf-loader-error", "No TANGENT vertex data found.");
    const o2 = await this.getAccessor(t5.attributes.TANGENT, r7);
    if (o2.componentType !== C.FLOAT) throw new s("gltf-loader-unsupported-feature", "Expected type FLOAT for TANGENT vertex attribute, but found " + C[o2.componentType]);
    if (4 !== o2.componentCount) throw new s("gltf-loader-unsupported-feature", "TANGENT vertex attribute must have 4 components, but found " + o2.componentCount.toFixed());
    return Q(c2, o2);
  }
  async getTextureCoordinates(t5, r7) {
    if (null == t5.attributes.TEXCOORD_0) throw new s("gltf-loader-error", "No TEXCOORD_0 vertex data found.");
    const o2 = await this.getAccessor(t5.attributes.TEXCOORD_0, r7);
    if (2 !== o2.componentCount) throw new s("gltf-loader-unsupported-feature", "TEXCOORD_0 vertex attribute must have 2 components, but found " + o2.componentCount.toFixed());
    if (o2.componentType === C.FLOAT) return Q(u, o2);
    if (!o2.normalized) throw new s("gltf-loader-unsupported-feature", "Integer component types are only supported for a normalized accessor for TEXCOORD_0.");
    return W(o2);
  }
  async getVertexColors(t5, r7) {
    if (null == t5.attributes.COLOR_0) throw new s("gltf-loader-error", "No COLOR_0 vertex data found.");
    const o2 = await this.getAccessor(t5.attributes.COLOR_0, r7);
    if (4 !== o2.componentCount && 3 !== o2.componentCount) throw new s("gltf-loader-unsupported-feature", "COLOR_0 attribute must have 3 or 4 components, but found " + o2.componentCount.toFixed());
    if (4 === o2.componentCount) {
      if (o2.componentType === C.FLOAT) return Q(c2, o2);
      if (o2.componentType === C.UNSIGNED_BYTE) return Q(x, o2);
      if (o2.componentType === C.UNSIGNED_SHORT) return Q(L, o2);
    } else if (3 === o2.componentCount) {
      if (o2.componentType === C.FLOAT) return Q(i2, o2);
      if (o2.componentType === C.UNSIGNED_BYTE) return Q(O, o2);
      if (o2.componentType === C.UNSIGNED_SHORT) return Q(E, o2);
    }
    throw new s("gltf-loader-unsupported-feature", "Unsupported component type for COLOR_0 attribute: " + C[o2.componentType]);
  }
  hasPositions(e4) {
    return void 0 !== e4.attributes.POSITION;
  }
  hasNormals(e4) {
    return void 0 !== e4.attributes.NORMAL;
  }
  hasVertexColors(e4) {
    return void 0 !== e4.attributes.COLOR_0;
  }
  hasTextureCoordinates(e4) {
    return void 0 !== e4.attributes.TEXCOORD_0;
  }
  hasTangents(e4) {
    return void 0 !== e4.attributes.TANGENT;
  }
  async getMaterial(e4, t5, r7) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    let o2 = e4.material ? this._materialCache.get(e4.material) : void 0;
    if (!o2) {
      const n5 = null != e4.material ? i3(this.json.materials[e4.material]) : i3(), s3 = n5.pbrMetallicRoughness, a2 = this.hasVertexColors(e4), i5 = this.getTexture(s3.baseColorTexture, t5), u3 = this.getTexture(n5.normalTexture, t5), f2 = r7 ? this.getTexture(n5.occlusionTexture, t5) : void 0, l4 = r7 ? this.getTexture(n5.emissiveTexture, t5) : void 0, d3 = r7 ? this.getTexture(s3.metallicRoughnessTexture, t5) : void 0, c5 = null != e4.material ? e4.material : -1;
      o2 = { alphaMode: n5.alphaMode, alphaCutoff: n5.alphaCutoff, color: s3.baseColorFactor, doubleSided: !!n5.doubleSided, colorTexture: await i5, normalTexture: await u3, name: n5.name, id: c5, occlusionTexture: await f2, emissiveTexture: await l4, emissiveFactor: n5.emissiveFactor, metallicFactor: s3.metallicFactor, roughnessFactor: s3.roughnessFactor, metallicRoughnessTexture: await d3, hasVertexColors: a2, ESRI_externalColorMixMode: n5.extras.ESRI_externalColorMixMode, colorTextureTransform: (_b = (_a = s3 == null ? void 0 : s3.baseColorTexture) == null ? void 0 : _a.extensions) == null ? void 0 : _b.KHR_texture_transform, normalTextureTransform: (_d = (_c = n5.normalTexture) == null ? void 0 : _c.extensions) == null ? void 0 : _d.KHR_texture_transform, occlusionTextureTransform: (_f = (_e = n5.occlusionTexture) == null ? void 0 : _e.extensions) == null ? void 0 : _f.KHR_texture_transform, emissiveTextureTransform: (_h = (_g = n5.emissiveTexture) == null ? void 0 : _g.extensions) == null ? void 0 : _h.KHR_texture_transform, metallicRoughnessTextureTransform: (_j = (_i = s3 == null ? void 0 : s3.metallicRoughnessTexture) == null ? void 0 : _i.extensions) == null ? void 0 : _j.KHR_texture_transform, receiveAmbientOcclusion: n5.extras.ESRI_receiveAmbientOcclusion, receiveShadows: n5.extras.ESRI_receiveShadows };
    }
    return o2;
  }
  async getTexture(t5, o2) {
    if (!t5) return;
    if (0 !== (t5.texCoord || 0)) throw new s("gltf-loader-unsupported-feature", "Only TEXCOORD with index 0 is supported.");
    const n5 = t5.index, s3 = this.json.textures[n5], a2 = n4(null != s3.sampler ? this.json.samplers[s3.sampler] : {}), i5 = Z(s3), u3 = this.json.images[i5], f2 = await this._loadTextureImageData(n5, s3, o2);
    return r(this._textureCache, n5, () => {
      const t6 = (e4) => 33071 === e4 || 33648 === e4 || 10497 === e4, r7 = (t7) => {
        throw new s("gltf-loader-error", `Unexpected TextureSampler WrapMode: ${t7}`);
      };
      return { data: f2, wrapS: t6(a2.wrapS) ? a2.wrapS : r7(a2.wrapS), wrapT: t6(a2.wrapT) ? a2.wrapT : r7(a2.wrapT), minFilter: a2.minFilter, name: u3.name, id: n5 };
    });
  }
  getNodeTransform(e4) {
    if (void 0 === e4) return q2;
    let t5 = this._nodeTransformCache.get(e4);
    if (!t5) {
      const r7 = this.getNodeTransform(this._getNodeParent(e4)), o2 = this.json.nodes[e4];
      o2.matrix ? t5 = c(e(), r7, o2.matrix) : o2.translation || o2.rotation || o2.scale ? (t5 = r3(r7), o2.translation && i(t5, t5, o2.translation), o2.rotation && (z[3] = v(z, o2.rotation), b(t5, t5, z[3], z)), o2.scale && f(t5, t5, o2.scale)) : t5 = r3(r7), this._nodeTransformCache.set(e4, t5);
    }
    return t5;
  }
  _resolveUri(e4) {
    return _(e4, this._baseUri);
  }
  _getNodeParent(e4) {
    return this._nodeParentMap.get(e4);
  }
  _checkVersionSupported() {
    const e4 = r2.parse(this.json.asset.version, "glTF");
    J.validate(e4);
  }
  _checkRequiredExtensionsSupported() {
    const t5 = this.json;
    if (t5.extensionsRequired) {
      if (!t5.extensionsRequired.every((e4) => this._supportedExtensions.includes(e4))) throw new s("gltf-loader-unsupported-feature", "gltf loader was not able to load unsupported feature. Required extensions: " + t5.extensionsRequired.join(", "));
    }
  }
  _computeNodeParents() {
    this.json.nodes.forEach((e4, t5) => {
      e4.children && e4.children.forEach((e5) => {
        this._nodeParentMap.set(e5, t5);
      });
    });
  }
  async _loadTextureImageData(e4, t5, r7) {
    const o2 = this._textureLoaders.get(e4);
    if (o2) return o2;
    const n5 = this._createTextureLoader(t5, r7);
    return this._textureLoaders.set(e4, n5), n5;
  }
  async _createTextureLoader(t5, r7) {
    const o2 = Z(t5), n5 = this.json.images[o2];
    if (n5.uri) {
      if (n5.uri.endsWith(".ktx2")) {
        const e4 = await this._context.loadBinary(this._resolveUri(n5.uri), r7);
        return new t(new Uint8Array(e4));
      }
      return this._context.loadImage(this._resolveUri(n5.uri), r7);
    }
    if (null == n5.bufferView) throw new s("gltf-loader-unsupported-feature", "Image bufferView must be defined.");
    if (null == n5.mimeType) throw new s("gltf-loader-unsupported-feature", "Image mimeType must be defined.");
    const s3 = this.json.bufferViews[n5.bufferView], a2 = await this.getBuffer(s3.buffer, r7);
    if (null != s3.byteStride) throw new s("gltf-loader-unsupported-feature", "byteStride not supported for image buffer");
    const i5 = a2.byteOffset + (s3.byteOffset || 0);
    return o(new Uint8Array(a2.buffer, i5, s3.byteLength), n5.mimeType);
  }
  async getLoadedBuffersSize() {
    if (this._glbBuffer) return this._glbBuffer.byteLength;
    const e4 = await g(Array.from(this._bufferLoaders.values())), t5 = await g(Array.from(this._textureLoaders.values()));
    return e4.reduce((e5, t6) => e5 + ((t6 == null ? void 0 : t6.byteLength) ?? 0), 0) + t5.reduce((e5, t6) => e5 + (t6 ? n3(t6) ? t6.data.byteLength : t6.width * t6.height * 4 : 0), 0);
  }
};
var q2 = g2(e(), Math.PI / 2);
var J = new r2(2, 0, "glTF");
var z = e2();
var X = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 };
var $ = { [C.BYTE]: 1, [C.UNSIGNED_BYTE]: 1, [C.SHORT]: 2, [C.UNSIGNED_SHORT]: 2, [C.HALF_FLOAT]: 2, [C.FLOAT]: 4, [C.INT]: 4, [C.UNSIGNED_INT]: 4 };
function W(e4) {
  switch (e4.componentType) {
    case C.BYTE:
      return new V(e4.raw, e4.byteOffset, e4.byteStride, e4.byteOffset + e4.byteStride * e4.entryCount);
    case C.UNSIGNED_BYTE:
      return new A(e4.raw, e4.byteOffset, e4.byteStride, e4.byteOffset + e4.byteStride * e4.entryCount);
    case C.SHORT:
      return new q(e4.raw, e4.byteOffset, e4.byteStride, e4.byteOffset + e4.byteStride * e4.entryCount);
    case C.UNSIGNED_SHORT:
      return new w(e4.raw, e4.byteOffset, e4.byteStride, e4.byteOffset + e4.byteStride * e4.entryCount);
    case C.UNSIGNED_INT:
      return new F(e4.raw, e4.byteOffset, e4.byteStride, e4.byteOffset + e4.byteStride * e4.entryCount);
    case C.FLOAT:
      return new u(e4.raw, e4.byteOffset, e4.byteStride, e4.byteOffset + e4.byteStride * e4.entryCount);
  }
}
function Q(e4, t5) {
  return new e4(t5.raw, t5.byteOffset, t5.byteStride, t5.byteOffset + t5.byteStride * (t5.entryCount - 1) + t5.componentByteSize * t5.componentCount);
}
function Z(t5) {
  var _a;
  if (null != ((_a = t5.extensions) == null ? void 0 : _a.KHR_texture_basisu)) return t5.extensions.KHR_texture_basisu.source;
  if (null !== t5.source) return t5.source;
  throw new s("gltf-loader-unsupported-feature", "Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.");
}
var ee = /\.gltf$/i;
var te = /\.glb$/i;

// node_modules/@arcgis/core/views/3d/glTF/loader.js
var i4 = 0;
async function l3(t5, r7, a2 = {}, l4 = true) {
  var _a, _b;
  const m2 = await Y.load(t5, r7, a2), T2 = "gltf_" + i4++, p = { lods: [], materials: /* @__PURE__ */ new Map(), textures: /* @__PURE__ */ new Map(), meta: u2(m2) }, f2 = !(!m2.json.asset.extras || "symbolResource" !== m2.json.asset.extras.ESRI_type), x2 = (_b = (_a = m2.json.asset.extras) == null ? void 0 : _a.ESRI_webstyleSymbol) == null ? void 0 : _b.webstyle, g4 = /* @__PURE__ */ new Map();
  await c4(m2, async (t6, r8, s3, i5) => {
    var _a2;
    const u3 = g4.get(s3) ?? 0;
    g4.set(s3, u3 + 1);
    const c5 = void 0 !== t6.mode ? t6.mode : E2.TRIANGLES, f3 = c5 === E2.TRIANGLES || c5 === E2.TRIANGLE_STRIP || c5 === E2.TRIANGLE_FAN ? c5 : null;
    if (null == f3) return void n2.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode (" + E2[c5] + "). Skipping primitive.");
    if (!m2.hasPositions(t6)) return void n2.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");
    const x3 = m2.getPositionData(t6, a2), h2 = m2.getMaterial(t6, a2, l4), w2 = m2.hasNormals(t6) ? m2.getNormalData(t6, a2) : null, v2 = m2.hasTangents(t6) ? m2.getTangentData(t6, a2) : null, S = m2.hasTextureCoordinates(t6) ? m2.getTextureCoordinates(t6, a2) : null, R = m2.hasVertexColors(t6) ? m2.getVertexColors(t6, a2) : null, _2 = m2.getIndexData(t6, a2), E4 = { name: i5, transform: r3(r8), attributes: { position: await x3, normal: w2 ? await w2 : null, texCoord0: S ? await S : null, color: R ? await R : null, tangent: v2 ? await v2 : null }, indices: await _2, primitiveType: f3, material: d2(p, await h2, T2) };
    let I = null;
    null != ((_a2 = p.meta) == null ? void 0 : _a2.ESRI_lod) && "screenSpaceRadius" === p.meta.ESRI_lod.metric && (I = p.meta.ESRI_lod.thresholds[s3]), p.lods[s3] = p.lods[s3] || { parts: [], name: i5, lodThreshold: I }, p.lods[s3].parts[u3] = E4;
  });
  for (const e4 of p.lods) e4.parts = e4.parts.filter((e5) => !!e5);
  const h = await m2.getLoadedBuffersSize();
  return { model: p, meta: { isEsriSymbolResource: f2, uri: m2.uri, ESRI_webstyle: x2 }, customMeta: {}, cachedMemory: h };
}
function u2(e4) {
  const o2 = e4.json;
  let t5 = null;
  return o2.nodes.forEach((e5) => {
    const o3 = e5.extras;
    null != o3 && (o3.ESRI_proxyEllipsoid || o3.ESRI_lod) && (t5 = o3);
  }), t5;
}
async function c4(o2, t5) {
  const r7 = o2.json, s3 = r7.scenes[r7.scene || 0].nodes, a2 = s3.length > 1, n5 = [];
  for (const e4 of s3) {
    const o3 = r7.nodes[e4];
    if (n5.push(i5(e4, 0)), m(o3) && !a2) {
      o3.extensions.MSFT_lod.ids.forEach((e5, o4) => i5(e5, o4 + 1));
    }
  }
  async function i5(s4, a3) {
    const l4 = r7.nodes[s4], u3 = o2.getNodeTransform(s4);
    if (null != l4.weights && n2.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."), null != l4.mesh) {
      const e4 = r7.meshes[l4.mesh];
      for (const o3 of e4.primitives) n5.push(t5(o3, u3, a3, e4.name));
    }
    for (const e4 of l4.children || []) n5.push(i5(e4, a3));
  }
  await Promise.all(n5);
}
function m(e4) {
  var _a;
  return ((_a = e4.extensions) == null ? void 0 : _a.MSFT_lod) && Array.isArray(e4.extensions.MSFT_lod.ids);
}
function d2(e4, o2, s3) {
  const a2 = (o3) => {
    const t5 = `${s3}_tex_${o3 && o3.id}${(o3 == null ? void 0 : o3.name) ? "_" + o3.name : ""}`;
    if (o3 && !e4.textures.has(t5)) {
      const s4 = l(o3.data, { wrap: { s: o3.wrapS, t: o3.wrapT }, mipmap: T.has(o3.minFilter), noUnpackFlip: true });
      e4.textures.set(t5, s4);
    }
    return t5;
  }, n5 = `${s3}_mat_${o2.id}_${o2.name}`;
  if (!e4.materials.has(n5)) {
    const r7 = r5({ color: [o2.color[0], o2.color[1], o2.color[2]], opacity: o2.color[3], alphaMode: o2.alphaMode, alphaCutoff: o2.alphaCutoff, doubleSided: o2.doubleSided, colorMixMode: o2.ESRI_externalColorMixMode, colorTexture: o2.colorTexture ? a2(o2.colorTexture) : void 0, normalTexture: o2.normalTexture ? a2(o2.normalTexture) : void 0, occlusionTexture: o2.occlusionTexture ? a2(o2.occlusionTexture) : void 0, emissiveTexture: o2.emissiveTexture ? a2(o2.emissiveTexture) : void 0, metallicRoughnessTexture: o2.metallicRoughnessTexture ? a2(o2.metallicRoughnessTexture) : void 0, emissiveFactor: [o2.emissiveFactor[0], o2.emissiveFactor[1], o2.emissiveFactor[2]], colorTextureTransform: o2.colorTextureTransform, normalTextureTransform: o2.normalTextureTransform, occlusionTextureTransform: o2.occlusionTextureTransform, emissiveTextureTransform: o2.emissiveTextureTransform, metallicRoughnessTextureTransform: o2.metallicRoughnessTextureTransform, metallicFactor: o2.metallicFactor, roughnessFactor: o2.roughnessFactor, receiveShadows: o2.receiveShadows, receiveAmbientOcclustion: o2.receiveAmbientOcclusion });
    e4.materials.set(n5, r7);
  }
  return n5;
}
var T = /* @__PURE__ */ new Set([L2.LINEAR_MIPMAP_LINEAR, L2.LINEAR_MIPMAP_NEAREST]);

export {
  l3 as l
};
//# sourceMappingURL=chunk-HK3G3PI6.js.map
