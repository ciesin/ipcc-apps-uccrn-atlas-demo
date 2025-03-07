import {
  e
} from "./chunk-ZAYRG6WM.js";
import {
  a,
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/views/3d/layers/i3s/LEPCC.js
var t = true;
var o = { identifierOffset: 0, identifierLength: 10, versionOffset: 10, checksumOffset: 12, byteCount: 16 };
function r(e2, r2, n3) {
  return { identifier: String.fromCharCode.apply(null, new Uint8Array(e2, n3 + o.identifierOffset, o.identifierLength)), version: r2.getUint16(n3 + o.versionOffset, t), checksum: r2.getUint32(n3 + o.checksumOffset, t) };
}
var n2 = { sizeLo: 0, sizeHi: 4, minX: 8, minY: 16, minZ: 24, maxX: 32, maxY: 40, maxZ: 48, errorX: 56, errorY: 64, errorZ: 72, count: 80, reserved: 84, byteCount: 88 };
function i(e2, o2) {
  return { sizeLo: e2.getUint32(o2 + n2.sizeLo, t), sizeHi: e2.getUint32(o2 + n2.sizeHi, t), minX: e2.getFloat64(o2 + n2.minX, t), minY: e2.getFloat64(o2 + n2.minY, t), minZ: e2.getFloat64(o2 + n2.minZ, t), maxX: e2.getFloat64(o2 + n2.maxX, t), maxY: e2.getFloat64(o2 + n2.maxY, t), maxZ: e2.getFloat64(o2 + n2.maxZ, t), errorX: e2.getFloat64(o2 + n2.errorX, t), errorY: e2.getFloat64(o2 + n2.errorY, t), errorZ: e2.getFloat64(o2 + n2.errorZ, t), count: e2.getUint32(o2 + n2.count, t), reserved: e2.getUint32(o2 + n2.reserved, t) };
}
function c(t2) {
  const c3 = new DataView(t2, 0);
  let d3 = 0;
  const { identifier: l3, version: a4 } = r(t2, c3, d3);
  if (d3 += o.byteCount, "LEPCC     " !== l3) throw new s("lepcc-decode-error", "Bad identifier");
  if (a4 > 1) throw new s("lepcc-decode-error", "Unknown version");
  const u3 = i(c3, d3);
  d3 += n2.byteCount;
  if (u3.sizeHi * 2 ** 32 + u3.sizeLo !== t2.byteLength) throw new s("lepcc-decode-error", "Bad size");
  const f3 = new Float64Array(3 * u3.count), h3 = [], w3 = [], g = [], p = [];
  if (d3 = s2(t2, d3, h3), d3 = s2(t2, d3, w3), d3 = s2(t2, d3, g), d3 = s2(t2, d3, p), d3 !== t2.byteLength) throw new s("lepcc-decode-error", "Bad length");
  let m = 0, U = 0;
  for (let e2 = 0; e2 < h3.length; e2++) {
    U += h3[e2];
    let t3 = 0;
    for (let o2 = 0; o2 < w3[e2]; o2++) {
      t3 += g[m];
      const e3 = p[m];
      f3[3 * m] = Math.min(u3.maxX, u3.minX + 2 * u3.errorX * t3), f3[3 * m + 1] = Math.min(u3.maxY, u3.minY + 2 * u3.errorY * U), f3[3 * m + 2] = Math.min(u3.maxZ, u3.minZ + 2 * u3.errorZ * e3), m++;
    }
  }
  return { errorX: u3.errorX, errorY: u3.errorY, errorZ: u3.errorZ, result: f3 };
}
function s2(e2, t2, o2) {
  const r2 = [];
  t2 = d(e2, t2, r2);
  const n3 = [];
  for (let i2 = 0; i2 < r2.length; i2++) {
    n3.length = 0, t2 = d(e2, t2, n3);
    for (let e3 = 0; e3 < n3.length; e3++) o2.push(n3[e3] + r2[i2]);
  }
  return t2;
}
function d(o2, r2, n3) {
  const i2 = new DataView(o2, r2), c3 = i2.getUint8(0), s4 = 31 & c3, d3 = !!(32 & c3), l3 = (192 & c3) >> 6;
  let a4 = 0;
  if (0 === l3) a4 = i2.getUint32(1, t), r2 += 5;
  else if (1 === l3) a4 = i2.getUint16(1, t), r2 += 3;
  else {
    if (2 !== l3) throw new s("lepcc-decode-error", "Bad count type");
    a4 = i2.getUint8(1), r2 += 2;
  }
  if (d3) throw new s("lepcc-decode-error", "LUT not implemented");
  const u3 = Math.ceil(a4 * s4 / 8), f3 = new Uint8Array(o2, r2, u3);
  let h3 = 0, w3 = 0, g = 0;
  const p = -1 >>> 32 - s4;
  for (let e2 = 0; e2 < a4; e2++) {
    for (; w3 < s4; ) h3 |= f3[g] << w3, w3 += 8, g += 1;
    n3[e2] = h3 & p, h3 >>>= s4, w3 -= s4, w3 + s4 > 32 && (h3 |= f3[g - 1] >> 8 - w3);
  }
  return r2 + g;
}
var l = { sizeLo: 0, sizeHi: 4, count: 8, colorMapCount: 12, lookupMethod: 14, compressionMethod: 15, byteCount: 16 };
function a2(e2, o2) {
  return { sizeLo: e2.getUint32(o2 + l.sizeLo, t), sizeHi: e2.getUint32(o2 + l.sizeHi, t), count: e2.getUint32(o2 + l.count, t), colorMapCount: e2.getUint16(o2 + l.colorMapCount, t), lookupMethod: e2.getUint8(o2 + l.lookupMethod), compressionMethod: e2.getUint8(o2 + l.compressionMethod) };
}
function u(t2) {
  const n3 = new DataView(t2, 0);
  let i2 = 0;
  const { identifier: c3, version: s4 } = r(t2, n3, i2);
  if (i2 += o.byteCount, "ClusterRGB" !== c3) throw new s("lepcc-decode-error", "Bad identifier");
  if (s4 > 1) throw new s("lepcc-decode-error", "Unknown version");
  const d3 = a2(n3, i2);
  i2 += l.byteCount;
  if (d3.sizeHi * 2 ** 32 + d3.sizeLo !== t2.byteLength) throw new s("lepcc-decode-error", "Bad size");
  if ((2 === d3.lookupMethod || 1 === d3.lookupMethod) && 0 === d3.compressionMethod) {
    if (3 * d3.colorMapCount + d3.count + i2 !== t2.byteLength || d3.colorMapCount > 256) throw new s("lepcc-decode-error", "Bad count");
    const o2 = new Uint8Array(t2, i2, 3 * d3.colorMapCount), r2 = new Uint8Array(t2, i2 + 3 * d3.colorMapCount, d3.count), n4 = new Uint8Array(3 * d3.count);
    for (let e2 = 0; e2 < d3.count; e2++) {
      const t3 = r2[e2];
      n4[3 * e2] = o2[3 * t3], n4[3 * e2 + 1] = o2[3 * t3 + 1], n4[3 * e2 + 2] = o2[3 * t3 + 2];
    }
    return n4;
  }
  if (0 === d3.lookupMethod && 0 === d3.compressionMethod) {
    if (3 * d3.count + i2 !== t2.byteLength || 0 !== d3.colorMapCount) throw new s("lepcc-decode-error", "Bad count");
    return new Uint8Array(t2, i2).slice();
  }
  if (d3.lookupMethod <= 2 && 1 === d3.compressionMethod) {
    if (i2 + 3 !== t2.byteLength || 1 !== d3.colorMapCount) throw new s("lepcc-decode-error", "Bad count");
    const o2 = n3.getUint8(i2), r2 = n3.getUint8(i2 + 1), c4 = n3.getUint8(i2 + 2), s5 = new Uint8Array(3 * d3.count);
    for (let e2 = 0; e2 < d3.count; e2++) s5[3 * e2] = o2, s5[3 * e2 + 1] = r2, s5[3 * e2 + 2] = c4;
    return s5;
  }
  throw new s("lepcc-decode-error", "Bad method " + d3.lookupMethod + "," + d3.compressionMethod);
}
var f = { sizeLo: 0, sizeHi: 4, count: 8, scaleFactor: 12, bitsPerPoint: 14, reserved: 15, byteCount: 16 };
function h(e2, o2) {
  return { sizeLo: e2.getUint32(o2 + f.sizeLo, t), sizeHi: e2.getUint32(o2 + f.sizeHi, t), count: e2.getUint32(o2 + f.count, t), scaleFactor: e2.getUint16(o2 + f.scaleFactor, t), bitsPerPoint: e2.getUint8(o2 + f.bitsPerPoint), reserved: e2.getUint8(o2 + f.reserved) };
}
function w(t2) {
  const n3 = new DataView(t2, 0);
  let i2 = 0;
  const { identifier: c3, version: s4 } = r(t2, n3, i2);
  if (i2 += o.byteCount, "Intensity " !== c3) throw new s("lepcc-decode-error", "Bad identifier");
  if (s4 > 1) throw new s("lepcc-decode-error", "Unknown version");
  const l3 = h(n3, i2);
  i2 += f.byteCount;
  if (l3.sizeHi * 2 ** 32 + l3.sizeLo !== t2.byteLength) throw new s("lepcc-decode-error", "Bad size");
  const a4 = new Uint16Array(l3.count);
  if (8 === l3.bitsPerPoint) {
    if (l3.count + i2 !== t2.byteLength) throw new s("lepcc-decode-error", "Bad size");
    const o2 = new Uint8Array(t2, i2, l3.count);
    for (let e2 = 0; e2 < l3.count; e2++) a4[e2] = o2[e2] * l3.scaleFactor;
  } else if (16 === l3.bitsPerPoint) {
    if (2 * l3.count + i2 !== t2.byteLength) throw new s("lepcc-decode-error", "Bad size");
    const o2 = new Uint16Array(t2, i2, l3.count);
    for (let e2 = 0; e2 < l3.count; e2++) a4[e2] = o2[e2] * l3.scaleFactor;
  } else {
    const o2 = [];
    if (d(t2, i2, o2) !== t2.byteLength) throw new s("lepcc-decode-error", "Bad size");
    for (let e2 = 0; e2 < l3.count; e2++) a4[e2] = o2[e2] * l3.scaleFactor;
  }
  return a4;
}

// node_modules/@arcgis/core/views/3d/layers/i3s/I3SBinaryReader.js
var u2 = () => n.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");
function a3(t2, n3, r2) {
  let o2 = "", i2 = 0;
  for (; i2 < r2; ) {
    const u3 = t2[n3 + i2];
    if (u3 < 128) o2 += String.fromCharCode(u3), i2++;
    else if (u3 >= 192 && u3 < 224) {
      if (i2 + 1 >= r2) throw new s("utf8-decode-error", "UTF-8 Decode failed. Two byte character was truncated.");
      const a4 = (31 & u3) << 6 | 63 & t2[n3 + i2 + 1];
      o2 += String.fromCharCode(a4), i2 += 2;
    } else if (u3 >= 224 && u3 < 240) {
      if (i2 + 2 >= r2) throw new s("utf8-decode-error", "UTF-8 Decode failed. Multi byte character was truncated.");
      const a4 = (15 & u3) << 12 | (63 & t2[n3 + i2 + 1]) << 6 | 63 & t2[n3 + i2 + 2];
      o2 += String.fromCharCode(a4), i2 += 3;
    } else {
      if (!(u3 >= 240 && u3 < 248)) throw new s("utf8-decode-error", "UTF-8 Decode failed. Invalid multi byte sequence.");
      {
        if (i2 + 3 >= r2) throw new s("utf8-decode-error", "UTF-8 Decode failed. Multi byte character was truncated.");
        const a4 = (7 & u3) << 18 | (63 & t2[n3 + i2 + 1]) << 12 | (63 & t2[n3 + i2 + 2]) << 6 | 63 & t2[n3 + i2 + 3];
        if (a4 >= 65536) {
          const e2 = 55296 + (a4 - 65536 >> 10), t3 = 56320 + (1023 & a4);
          o2 += String.fromCharCode(e2, t3);
        } else o2 += String.fromCharCode(a4);
        i2 += 4;
      }
    }
  }
  return o2;
}
function s3(e2, t2) {
  const n3 = { byteOffset: 0, byteCount: 0, fields: /* @__PURE__ */ Object.create(null) };
  let r2 = 0;
  for (let o2 = 0; o2 < t2.length; o2++) {
    const i2 = t2[o2], u3 = i2.valueType || i2.type, a4 = A[u3];
    n3.fields[i2.property] = a4(e2, r2), r2 += h2[u3].BYTES_PER_ELEMENT;
  }
  return n3.byteCount = r2, n3;
}
function c2(e2, t2, n3) {
  return f2(e2, t2, n3).map((e3) => {
    const t3 = e3 ? Date.parse(e3) : null;
    return null == t3 || Number.isNaN(t3) ? null : t3;
  });
}
function f2(t2, n3, r2) {
  const o2 = [];
  let i2, u3, s4 = 0;
  for (u3 = 0; u3 < t2; u3 += 1) {
    if (i2 = n3[u3], i2 > 0) {
      if (o2.push(a3(r2, s4, i2 - 1)), 0 !== r2[s4 + i2 - 1]) throw new s("string-array-error", "Invalid string array: missing null termination.");
    } else o2.push(null);
    s4 += i2;
  }
  return o2;
}
function l2(e2, t2) {
  return new (0, h2[t2.valueType])(e2, t2.byteOffset, t2.count * t2.valuesPerElement);
}
function d2(e2, t2) {
  return new Uint8Array(e2, t2.byteOffset, t2.byteCount);
}
function b(n3, r2, o2) {
  const i2 = null != r2.header ? s3(n3, r2.header) : { byteOffset: 0, byteCount: 0, fields: { count: o2 } }, u3 = { header: i2, byteOffset: i2.byteCount, byteCount: 0, entries: /* @__PURE__ */ Object.create(null) };
  let a4 = i2.byteCount;
  for (let s4 = 0; s4 < r2.ordering.length; s4++) {
    const n4 = r2.ordering[s4], o3 = a(r2[n4]);
    if (o3.count = i2.fields.count ?? 0, "String" === o3.valueType) {
      if (o3.byteOffset = a4, o3.byteCount = i2.fields[n4 + "ByteCount"], "UTF-8" !== o3.encoding) throw new s("unsupported-encoding", "Unsupported String encoding.", { encoding: o3.encoding });
      if (o3.timeEncoding && "ECMA_ISO8601" !== o3.timeEncoding) throw new s("unsupported-time-encoding", "Unsupported time encoding.", { timeEncoding: o3.timeEncoding });
    } else {
      if (!O(o3.valueType)) throw new s("unsupported-value-type", "Unsupported binary valueType", { valueType: o3.valueType });
      {
        const e2 = E(o3.valueType);
        a4 += a4 % e2 != 0 ? e2 - a4 % e2 : 0, o3.byteOffset = a4, o3.byteCount = e2 * o3.valuesPerElement * o3.count;
      }
    }
    a4 += o3.byteCount ?? 0, u3.entries[n4] = o3;
  }
  return u3.byteCount = a4 - u3.byteOffset, u3;
}
function y(t2, n3, r2) {
  if (n3 !== t2 && u2().error(`Invalid ${r2} buffer size
 expected: ${t2}, actual: ${n3})`), n3 < t2) throw new s("buffer-too-small", "Binary buffer is too small", { expectedSize: t2, actualSize: n3 });
}
function w2(e2, t2) {
  const n3 = s3(e2, t2 && t2.header);
  let r2 = n3.byteCount;
  const o2 = { isDraco: false, header: n3, byteOffset: n3.byteCount, byteCount: 0, vertexAttributes: {} }, i2 = n3.fields, u3 = null != i2.vertexCount ? i2.vertexCount : i2.count;
  for (const s4 of t2.ordering) {
    if (!t2.vertexAttributes[s4]) continue;
    const e3 = { ...t2.vertexAttributes[s4], byteOffset: r2, count: u3 }, n4 = C[s4] || "_" + s4;
    o2.vertexAttributes[n4] = e3, r2 += E(e3.valueType) * e3.valuesPerElement * u3;
  }
  const a4 = i2.faceCount;
  if (t2.faces && a4) {
    o2.faces = {};
    for (const e3 of t2.ordering) {
      if (!t2.faces[e3]) continue;
      const n4 = { ...t2.faces[e3], byteOffset: r2, count: a4 };
      o2.faces[e3] = n4, r2 += E(n4.valueType) * n4.valuesPerElement * a4;
    }
  }
  const c3 = i2.featureCount;
  if (t2.featureAttributes && t2.featureAttributeOrder && c3) {
    o2.featureAttributes = {};
    for (const e3 of t2.featureAttributeOrder) {
      if (!t2.featureAttributes[e3]) continue;
      const n4 = { ...t2.featureAttributes[e3], byteOffset: r2, count: c3 };
      o2.featureAttributes[e3] = n4;
      r2 += ("UInt64" === n4.valueType ? 8 : E(n4.valueType)) * n4.valuesPerElement * c3;
    }
  }
  return y(r2, e2.byteLength, "geometry"), o2.byteCount = r2 - o2.byteOffset, o2;
}
var C = { position: e.POSITION, normal: e.NORMAL, color: e.COLOR, uv0: e.UV0, region: e.UVREGION };
function I(t2, n3, i2) {
  if ("lepcc-rgb" === t2.encoding) return u(n3);
  if ("lepcc-intensity" === t2.encoding) return w(n3);
  if (null != t2.encoding && "" !== t2.encoding) throw new s("unknown-attribute-storage-info-encoding", "Unknown Attribute Storage Info Encoding");
  t2["attributeByteCounts "] && !t2.attributeByteCounts && (u2().warn("Warning: Trailing space in 'attributeByteCounts '."), t2.attributeByteCounts = t2["attributeByteCounts "]), "ObjectIds" === t2.ordering[0] && t2.hasOwnProperty("objectIds") && (u2().warn("Warning: Case error in objectIds"), t2.ordering[0] = "objectIds");
  const a4 = b(n3, t2, i2);
  y(a4.byteOffset + a4.byteCount, n3.byteLength, "attribute");
  const s4 = a4.entries.attributeValues || a4.entries.objectIds;
  if (s4) {
    if ("String" === s4.valueType) {
      const e2 = a4.entries.attributeByteCounts, t3 = l2(n3, e2), r2 = d2(n3, s4);
      return s4.timeEncoding ? c2(e2.count, t3, r2) : f2(e2.count, t3, r2);
    }
    return l2(n3, s4);
  }
  throw new s("bad-attribute-storage-info", "Bad attributeStorageInfo specification.");
}
var h2 = { Float32: Float32Array, Float64: Float64Array, UInt8: Uint8Array, Int8: Int8Array, UInt16: Uint16Array, Int16: Int16Array, UInt32: Uint32Array, Int32: Int32Array };
var A = { Float32: (e2, t2) => new DataView(e2, 0).getFloat32(t2, true), Float64: (e2, t2) => new DataView(e2, 0).getFloat64(t2, true), UInt8: (e2, t2) => new DataView(e2, 0).getUint8(t2), Int8: (e2, t2) => new DataView(e2, 0).getInt8(t2), UInt16: (e2, t2) => new DataView(e2, 0).getUint16(t2, true), Int16: (e2, t2) => new DataView(e2, 0).getInt16(t2, true), UInt32: (e2, t2) => new DataView(e2, 0).getUint32(t2, true), Int32: (e2, t2) => new DataView(e2, 0).getInt32(t2, true) };
function O(e2) {
  return h2.hasOwnProperty(e2);
}
function E(e2) {
  return O(e2) ? h2[e2].BYTES_PER_ELEMENT : 0;
}

export {
  c,
  l2 as l,
  w2 as w,
  I
};
//# sourceMappingURL=chunk-KXYJDLD2.js.map
