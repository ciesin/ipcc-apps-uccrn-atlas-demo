import {
  i
} from "./chunk-DYXUUD4L.js";
import {
  t
} from "./chunk-3VWS6Q3L.js";
import {
  s as s2
} from "./chunk-2MCNW6KC.js";
import {
  C,
  U
} from "./chunk-CRKFUUKK.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/DisplayRecord.js
var t2 = class _t {
  constructor(t4, e2, s6, r2, i3, h, n4) {
    this.instanceId = t4, this.textureKey = e2, this.indexStart = s6, this.indexCount = r2, this.vertexStart = i3, this.vertexCount = h, this.overlaps = n4;
  }
  updateBaseOffsets(t4) {
    this.vertexStart += t4.vertexFrom, this.indexStart += t4.indexFrom;
  }
  clone() {
    return new _t(this.instanceId, this.textureKey, this.indexStart, this.indexCount, this.vertexStart, this.vertexCount, this.overlaps);
  }
  static write(t4, e2, s6, r2, i3, h, n4, a3) {
    t4.push(e2), t4.push(s6), t4.push(r2), t4.push(i3), t4.push(h), t4.push(n4), t4.push(a3);
  }
  serialize(t4) {
    return t4.push(this.instanceId), t4.push(this.textureKey), t4.push(this.indexStart), t4.push(this.indexCount), t4.push(this.vertexStart), t4.push(this.vertexCount), t4.push(this.overlaps), t4;
  }
  static deserialize(e2) {
    const s6 = e2.readInt32(), r2 = e2.readInt32(), i3 = e2.readInt32(), h = e2.readInt32(), n4 = e2.readInt32(), a3 = e2.readInt32(), u2 = e2.readInt32();
    return new _t(s6, r2, i3, h, n4, a3, u2);
  }
};
t2.byteSizeHint = 7 * Uint32Array.BYTES_PER_ELEMENT;

// node_modules/@arcgis/core/views/2d/engine/webgl/util/serializationUtils.js
function e(e2, n4) {
  if (null !== n4) {
    e2.push(n4.length);
    for (const r2 of n4) r2.serialize(e2);
    return e2;
  }
  e2.push(0);
}
function n2(e2, n4, r2) {
  const t4 = e2.readInt32(), o3 = new Array(t4);
  for (let i3 = 0; i3 < o3.length; i3++) o3[i3] = n4.deserialize(e2, r2);
  return o3;
}

// node_modules/@arcgis/core/views/2d/engine/webgl/DisplayEntity.js
var s3 = class _s {
  constructor(t4, r2) {
    this.id = t4, this.sortKey = r2, this.records = [];
  }
  serialize(t4) {
    return t4.push(this.id), t4.writeF32(this.sortKey), e(t4, this.records), t4;
  }
  static deserialize(r2) {
    const e2 = r2.readInt32(), o3 = r2.readF32(), a3 = new _s(e2, o3);
    return a3.records = n2(r2, t2) ?? [], a3;
  }
};
s3.byteSizeHint = 2 * Uint32Array.BYTES_PER_ELEMENT + t2.byteSizeHint;

// node_modules/@arcgis/core/views/2d/engine/webgl/number.js
var n3 = new Float32Array(1);
var t3 = new Uint32Array(n3.buffer);
function a(r2) {
  return n3[0] = r2, t3[0];
}
function s4(n4, t4) {
  return 65535 & n4 | t4 << 16;
}
function y(n4) {
  const t4 = a(n4), r2 = t4 >>> 31;
  let u2 = t4 >>> 23 & 255, o3 = 8388607 & t4;
  return u2 -= 127, u2 > 15 ? r2 << 15 | 31744 : u2 < -25 ? 0 : (u2 < -14 && (o3 += 8388608, o3 /= 2 ** (-14 - u2), u2 = -15), u2 += 15, o3 /= 8192, o3 = A(o3, 1023), r2 << 15 | u2 << 10 | o3);
}
function A(n4, t4) {
  const r2 = Math.floor(n4), u2 = n4 - r2;
  return r2 < t4 && (u2 > 0.5 || 0.5 === u2 && r2 % 2 == 1) ? r2 + 1 : r2;
}
function b(n4) {
  let t4 = n4 >>> 15, r2 = n4 >> 10 & 31, u2 = 1023 & n4;
  return t4 = t4 ? -1 : 1, r2 -= 15, u2 /= 1024, r2 > -15 ? u2 += 1 : r2 = -14, t4 * 2 ** r2 * u2;
}

// node_modules/@arcgis/core/views/2d/engine/webgl/collisions/LabelMetric.js
var r = class _r {
  constructor(e2, i3, t4, r2, s6, n4, o3, a3, h = []) {
    this.entityTexel = e2, this.anchorX = i3, this.anchorY = t4, this.directionX = r2, this.directionY = s6, this.maxScale = n4, this.minScale = o3, this.referenceBounds = a3, this.bounds = h;
  }
  serialize(e2) {
    e2.push(this.entityTexel), e2.writeF32(this.anchorX), e2.writeF32(this.anchorY), e2.writeF32(this.directionX), e2.writeF32(this.directionY), e2.writeF32(this.maxScale), e2.writeF32(this.minScale), null === this.referenceBounds ? (e2.writeF32(0), e2.writeF32(0), e2.writeF32(0)) : (e2.writeF32(this.referenceBounds.size), e2.writeF32(this.referenceBounds.offsetX), e2.writeF32(this.referenceBounds.offsetY)), e(e2, this.bounds);
  }
  static deserialize(i3) {
    const s6 = i3.readInt32(), n4 = i3.readF32(), o3 = i3.readF32(), a3 = i3.readF32(), h = i3.readF32(), d2 = i3.readF32(), c2 = i3.readF32(), F = i3.readF32(), f2 = i3.readF32(), l2 = i3.readF32(), u2 = n2(i3, i) ?? [];
    return new _r(s6, n4, o3, a3, h, d2, c2, { size: F, offsetX: f2, offsetY: l2 }, u2);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/Utils.js
var a2 = () => n.getLogger("esri.views.2d.engine.webgl.Utils");
function o(t4) {
  switch (t4) {
    case U.UNSIGNED_BYTE:
      return 1;
    case U.UNSIGNED_SHORT_4_4_4_4:
      return 2;
    case U.FLOAT:
      return 4;
    default:
      return void a2().error(new s("webgl-utils", `Unable to handle type ${t4}`));
  }
}
function i2(t4) {
  switch (t4) {
    case U.UNSIGNED_BYTE:
      return Uint8Array;
    case U.UNSIGNED_SHORT_4_4_4_4:
      return Uint16Array;
    case U.FLOAT:
      return Float32Array;
    default:
      return void a2().error(new s("webgl-utils", `Unable to handle type ${t4}`));
  }
}
function c(e2) {
  const t4 = /* @__PURE__ */ new Map();
  for (const r2 in e2) {
    const a3 = e2[r2];
    let o3 = 0;
    t4.set(r2, a3.map((e3) => {
      const t5 = new t(e3.name, e3.count, e3.type, o3, 0, e3.normalized || false);
      return o3 += e3.count * s2(e3.type), t5;
    })), t4.get(r2).forEach((e3) => e3.stride = o3);
  }
  return t4;
}
var l = (e2) => {
  const t4 = /* @__PURE__ */ new Map();
  for (const r2 in e2) for (const n4 of e2[r2]) t4.set(n4.name, n4.location);
  return t4;
};
var u = (e2) => {
  const t4 = {};
  return e2.forEach((e3, r2) => t4[r2] = (e3 == null ? void 0 : e3.length) ? e3[0].stride : 0), t4;
};
var m = /* @__PURE__ */ new Map();
var $ = (e2, t4) => {
  if (!m.has(e2)) {
    const r2 = c(t4), n4 = { strides: u(r2), bufferLayouts: r2, attributes: l(t4) };
    m.set(e2, n4);
  }
  return m.get(e2);
};
var f = (e2) => e2.includes("data:image/svg+xml");
function d(e2) {
  const t4 = [];
  for (let r2 = 0; r2 < e2.length; r2++) t4.push(e2.charCodeAt(r2));
  return t4;
}
function p(e2) {
  if (null == e2) return "";
  const { type: t4 } = e2;
  switch (t4) {
    case "CIMMarkerPlacementAlongLineRandomSize":
      return `${t4}-${e2.seed}-${e2.randomization}`;
    case "CIMMarkerPlacementAlongLineVariableSize":
      return `${t4}-${e2.maxRandomOffset}-${e2.numberOfSizes}-${e2.seed}-${e2.variationMethod}`;
    case "CIMMarkerPlacementAtExtremities":
      return `${t4}-${e2.extremityPlacement}-${e2.offsetAlongLine}`;
    case "CIMMarkerPlacementAtRatioPositions":
      return `${t4}-${e2.beginPosition}-${e2.endPosition}-${e2.flipFirst}-${JSON.stringify(e2.positionArray)}`;
    case "CIMMarkerPlacementAtMeasuredUnits":
      return `${t4}-${e2.interval}-${e2.skipMarkerRate}-${e2.placeAtExtremities}`;
    case "CIMMarkerPlacementInsidePolygon":
      return `${t4}-${e2.stepX}-${e2.stepY}-${e2.randomness}-${e2.gridType}-${e2.seed}-${e2.shiftOddRows}`;
    case "CIMMarkerPlacementOnLine":
      return `${t4}-${e2.relativeTo}-${e2.startPointOffset}`;
    case "CIMMarkerPlacementOnVertices":
      return `${t4}-${e2.placeOnControlPoints}-${e2.placeOnEndPoints}-${e2.placeOnRegularVertices}`;
    case "CIMMarkerPlacementPolygonCenter":
      return `${t4}-${e2.method}`;
    default:
      return `${t4}`;
  }
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/dataViewUtils.js
function o2(e2, o3, s6, f2) {
  const r2 = s6.packPrecisionFactor ?? 1;
  switch (s6.type) {
    case C.BYTE:
      if (1 === s6.count) e2.setInt8(f2 + s6.offset, o3 * r2);
      else for (let t4 = 0; t4 < s6.count; t4++) {
        const n4 = t4 * Int8Array.BYTES_PER_ELEMENT;
        e2.setInt8(f2 + s6.offset + n4, o3[t4] * r2);
      }
      break;
    case C.UNSIGNED_BYTE:
      if (1 === s6.count) e2.setUint8(f2 + s6.offset, o3 * r2);
      else for (let t4 = 0; t4 < s6.count; t4++) {
        const n4 = t4 * Uint8Array.BYTES_PER_ELEMENT;
        e2.setUint8(f2 + s6.offset + n4, o3[t4] * r2);
      }
      break;
    case C.SHORT:
      if (1 === s6.count) e2.setInt16(f2 + s6.offset, o3 * r2, true);
      else for (let t4 = 0; t4 < s6.count; t4++) {
        const n4 = t4 * Int16Array.BYTES_PER_ELEMENT;
        e2.setInt16(f2 + s6.offset + n4, o3[t4] * r2, true);
      }
      break;
    case C.UNSIGNED_SHORT:
      if (1 === s6.count) e2.setUint16(f2 + s6.offset, o3 * r2, true);
      else for (let t4 = 0; t4 < s6.count; t4++) {
        const n4 = t4 * Uint16Array.BYTES_PER_ELEMENT;
        e2.setUint16(f2 + s6.offset + n4, o3[t4] * r2, true);
      }
      break;
    case C.INT:
      if (1 === s6.count) e2.setInt32(f2 + s6.offset, o3 * r2, true);
      else for (let t4 = 0; t4 < s6.count; t4++) {
        const n4 = t4 * Int32Array.BYTES_PER_ELEMENT;
        e2.setInt32(f2 + s6.offset + n4, o3[t4] * r2, true);
      }
      break;
    case C.UNSIGNED_INT:
      if (1 === s6.count) e2.setUint32(f2 + s6.offset, o3 * r2, true);
      else for (let t4 = 0; t4 < s6.count; t4++) {
        const n4 = t4 * Uint32Array.BYTES_PER_ELEMENT;
        e2.setUint32(f2 + s6.offset + n4, o3[t4] * r2, true);
      }
      break;
    case C.FLOAT:
      if (1 === s6.count) e2.setFloat32(f2 + s6.offset, o3 * r2, true);
      else for (let t4 = 0; t4 < s6.count; t4++) {
        const n4 = t4 * Float32Array.BYTES_PER_ELEMENT;
        e2.setFloat32(f2 + s6.offset + n4, o3[t4] * r2, true);
      }
      break;
    case C.HALF_FLOAT:
      if (1 === s6.count) e2.setUint16(f2 + s6.offset, y(o3 * r2), true);
      else for (let n4 = 0; n4 < s6.count; n4++) {
        const E = n4 * Uint16Array.BYTES_PER_ELEMENT;
        e2.setUint16(f2 + s6.offset + E, y(o3[n4] * r2), true);
      }
  }
}
function s5(t4, o3, s6) {
  switch (o3.type) {
    case C.BYTE: {
      if (1 === o3.count) return t4.getInt8(s6 + o3.offset);
      const e2 = [];
      for (let n4 = 0; n4 < o3.count; n4++) {
        const f2 = n4 * Int8Array.BYTES_PER_ELEMENT;
        e2.push(t4.getInt8(s6 + o3.offset + f2));
      }
      return e2;
    }
    case C.UNSIGNED_BYTE: {
      if (1 === o3.count) return t4.getUint8(s6 + o3.offset);
      const e2 = [];
      for (let n4 = 0; n4 < o3.count; n4++) {
        const f2 = n4 * Uint8Array.BYTES_PER_ELEMENT;
        e2.push(t4.getUint8(s6 + o3.offset + f2));
      }
      return e2;
    }
    case C.SHORT: {
      if (1 === o3.count) return t4.getInt16(s6 + o3.offset, true);
      const e2 = [];
      for (let n4 = 0; n4 < o3.count; n4++) {
        const f2 = n4 * Int16Array.BYTES_PER_ELEMENT;
        e2.push(t4.getInt16(s6 + o3.offset + f2, true));
      }
      return e2;
    }
    case C.UNSIGNED_SHORT: {
      if (1 === o3.count) return t4.getUint16(s6 + o3.offset, true);
      const e2 = [];
      for (let n4 = 0; n4 < o3.count; n4++) {
        const f2 = n4 * Uint16Array.BYTES_PER_ELEMENT;
        e2.push(t4.getUint16(s6 + o3.offset + f2, true));
      }
      return e2;
    }
    case C.INT: {
      if (1 === o3.count) return t4.getInt32(s6 + o3.offset, true);
      const e2 = [];
      for (let n4 = 0; n4 < o3.count; n4++) {
        const f2 = n4 * Int32Array.BYTES_PER_ELEMENT;
        e2.push(t4.getInt32(s6 + o3.offset + f2, true));
      }
      return e2;
    }
    case C.UNSIGNED_INT: {
      if (1 === o3.count) return t4.getUint32(s6 + o3.offset, true);
      const e2 = [];
      for (let n4 = 0; n4 < o3.count; n4++) {
        const f2 = n4 * Uint32Array.BYTES_PER_ELEMENT;
        e2.push(t4.getUint32(s6 + o3.offset + f2, true));
      }
      return e2;
    }
    case C.FLOAT: {
      if (1 === o3.count) return t4.getFloat32(s6 + o3.offset, true);
      const e2 = [];
      for (let n4 = 0; n4 < o3.count; n4++) {
        const f2 = n4 * Float32Array.BYTES_PER_ELEMENT;
        e2.push(t4.getFloat32(s6 + o3.offset + f2, true));
      }
      return e2;
    }
    case C.HALF_FLOAT: {
      if (1 === o3.count) return b(t4.getUint16(s6 + o3.offset, true));
      const n4 = [];
      for (let f2 = 0; f2 < o3.count; f2++) {
        const r2 = f2 * Uint16Array.BYTES_PER_ELEMENT;
        n4.push(b(t4.getUint16(s6 + o3.offset + r2, true)));
      }
      return n4;
    }
  }
}

export {
  t2 as t,
  n2 as n,
  s3 as s,
  s4 as s2,
  o2 as o,
  s5 as s3,
  r,
  o as o2,
  i2 as i,
  $,
  f,
  d,
  p
};
//# sourceMappingURL=chunk-PMUCRJCT.js.map
