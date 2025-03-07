import {
  L
} from "./chunk-2QZT64RD.js";
import {
  a as a2,
  f,
  l
} from "./chunk-5ZG44LB7.js";
import {
  I,
  N,
  P,
  b,
  i,
  p
} from "./chunk-N7QOB7T5.js";
import {
  t
} from "./chunk-3VWS6Q3L.js";
import {
  C,
  H,
  U
} from "./chunk-ZD4JXG4O.js";
import {
  e
} from "./chunk-3VDUSCXE.js";
import {
  R
} from "./chunk-ANT4QPJQ.js";
import {
  C as C2
} from "./chunk-CRKFUUKK.js";
import {
  a
} from "./chunk-G34KEQQG.js";
import {
  h
} from "./chunk-3UHB6K6P.js";

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/MemoryBuffer.js
var t2 = class {
  constructor(t6) {
    this._array = [], this._stride = t6;
  }
  get array() {
    return this._array;
  }
  get index() {
    return 4 * this._array.length / this._stride;
  }
  get itemSize() {
    return this._stride;
  }
  get sizeInBytes() {
    return 4 * this._array.length;
  }
  reset() {
    this.array.length = 0;
  }
  toBuffer() {
    return new Uint32Array(this._array).buffer;
  }
  static i1616to32(t6, r3) {
    return 65535 & t6 | r3 << 16;
  }
  static i8888to32(t6, r3, e3, i6) {
    return 255 & t6 | (255 & r3) << 8 | (255 & e3) << 16 | i6 << 24;
  }
  static i8816to32(t6, r3, e3) {
    return 255 & t6 | (255 & r3) << 8 | e3 << 16;
  }
};

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/enums.js
var N2;
var R2;
!function(N4) {
  N4[N4.R8_SIGNED = 0] = "R8_SIGNED", N4[N4.R8_UNSIGNED = 1] = "R8_UNSIGNED", N4[N4.R16_SIGNED = 2] = "R16_SIGNED", N4[N4.R16_UNSIGNED = 3] = "R16_UNSIGNED", N4[N4.R8G8_SIGNED = 4] = "R8G8_SIGNED", N4[N4.R8G8_UNSIGNED = 5] = "R8G8_UNSIGNED", N4[N4.R16G16_SIGNED = 6] = "R16G16_SIGNED", N4[N4.R16G16_UNSIGNED = 7] = "R16G16_UNSIGNED", N4[N4.R8G8B8A8_SIGNED = 8] = "R8G8B8A8_SIGNED", N4[N4.R8G8B8A8_UNSIGNED = 9] = "R8G8B8A8_UNSIGNED", N4[N4.R8G8B8A8_COLOR = 10] = "R8G8B8A8_COLOR", N4[N4.R16G16B16A16_DASHARRAY = 11] = "R16G16B16A16_DASHARRAY", N4[N4.R16G16B16A16_PATTERN = 12] = "R16G16B16A16_PATTERN";
}(N2 || (N2 = {})), function(N4) {
  N4[N4.UNIFORM = 0] = "UNIFORM", N4[N4.DATA_DRIVEN = 1] = "DATA_DRIVEN", N4[N4.INTERPOLATED_DATA_DRIVEN = 2] = "INTERPOLATED_DATA_DRIVEN", N4[N4.UNUSED = 3] = "UNUSED";
}(R2 || (R2 = {}));

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLMaterial.js
var r = class _r {
  constructor(t6) {
    this._locations = /* @__PURE__ */ new Map(), this._key = t6;
  }
  get key() {
    return this._key;
  }
  get type() {
    return 7 & this._key;
  }
  defines() {
    return [];
  }
  getStride() {
    return this._layout || this._buildAttributesInfo(), this._stride;
  }
  getAttributeLocations() {
    return 0 === this._locations.size && this._buildAttributesInfo(), this._locations;
  }
  getLayoutInfo() {
    return this._layout || this._buildAttributesInfo(), this._layout;
  }
  getEncodingInfos() {
    return this._propertyEncodingInfo || this._buildAttributesInfo(), this._propertyEncodingInfo;
  }
  getUniforms() {
    return this._uniforms || this._buildAttributesInfo(), this._uniforms;
  }
  getShaderHeader() {
    return this._shaderHeader || this._buildAttributesInfo(), this._shaderHeader;
  }
  getShaderMain() {
    return this._shaderMain || this._buildAttributesInfo(), this._shaderMain;
  }
  setDataUniforms(t6, e3, n2, o2, s) {
    const r3 = this.getUniforms();
    for (const i6 of r3) {
      const { name: r4, type: a6, getValue: c3 } = i6, u2 = c3(n2, e3, o2, s);
      if (null !== u2) switch (a6) {
        case "float":
          t6.setUniform1f(r4, u2);
          break;
        case "vec2":
          t6.setUniform2fv(r4, u2);
          break;
        case "vec4":
          t6.setUniform4fv(r4, u2);
      }
    }
  }
  encodeAttributes(t6, n2, o2, s) {
    var _a;
    const r3 = this.attributesInfo(), i6 = this.getEncodingInfos(), a6 = [];
    let c3 = 0, u2 = 0;
    for (const _3 of Object.keys(i6)) {
      const l5 = i6[_3], { type: f3, precisionFactor: h3, isLayout: d4 } = r3[_3], y2 = d4 ? o2.getLayoutProperty(_3) : o2.getPaintProperty(_3), m = (_a = y2.interpolator) == null ? void 0 : _a.getInterpolationRange(n2);
      let E2 = 0;
      for (const o3 of l5) {
        const { offset: r4, bufferElementsToAdd: i7 } = o3;
        if (i7 > 0) {
          for (let t7 = 0; t7 < i7; t7++) a6.push(0);
          c3 += u2, u2 = o3.bufferElementsToAdd;
        }
        const _4 = s ?? y2.getValue(m ? m[E2] : n2, t6);
        switch (f3) {
          case N2.R8_SIGNED:
          case N2.R8_UNSIGNED:
            a6[c3] |= this._encodeByte(_4 * (h3 || 1), 8 * r4);
            break;
          case N2.R16_SIGNED:
          case N2.R16_UNSIGNED:
            a6[c3] |= this._encodeShort(_4 * (h3 || 1), 8 * r4);
            break;
          case N2.R8G8_SIGNED:
          case N2.R8G8_UNSIGNED:
            a6[c3] |= this._encodeByte(_4 * (h3 || 1), 8 * r4), a6[c3] |= this._encodeByte(_4 * (h3 || 1), 8 * r4 + 8);
            break;
          case N2.R16G16_SIGNED:
          case N2.R16G16_UNSIGNED:
            a6[c3] |= this._encodeShort(_4 * (h3 || 1), 8 * r4), a6[c3] |= this._encodeShort(_4 * (h3 || 1), 8 * r4 + 16);
            break;
          case N2.R8G8B8A8_SIGNED:
          case N2.R8G8B8A8_UNSIGNED:
            a6[c3] |= this._encodeByte(_4 * (h3 || 1), 8 * r4), a6[c3] |= this._encodeByte(_4 * (h3 || 1), 8 * r4 + 8), a6[c3] |= this._encodeByte(_4 * (h3 || 1), 8 * r4 + 16), a6[c3] |= this._encodeByte(_4 * (h3 || 1), 8 * r4 + 24);
            break;
          case N2.R8G8B8A8_COLOR:
            a6[c3] = this._encodeColor(_4);
            break;
          case N2.R16G16B16A16_DASHARRAY:
          case N2.R16G16B16A16_PATTERN:
            this._encodePattern(c3, a6, _4);
            break;
          default:
            throw new Error("Unsupported encoding type");
        }
        E2++;
      }
    }
    return a6;
  }
  getAtributeState(t6) {
    let e3 = 0;
    const n2 = 3 + 2 * t6;
    return e3 |= this._bit(n2), e3 |= this._bit(n2 + 1) << 1, e3;
  }
  _buildAttributesInfo() {
    const t6 = [], e3 = {}, s = {};
    let i6 = -1;
    const a6 = this.attributesInfo(), c3 = this.attributes();
    let u2 = -1;
    for (const o2 of c3) {
      u2++;
      const c4 = this.getAtributeState(u2);
      if (c4 === R2.UNIFORM || c4 === R2.UNUSED) continue;
      const _4 = a6[o2], l6 = [];
      e3[o2] = l6;
      const f4 = _4.type;
      for (let e4 = 0; e4 < c4; e4++) {
        const { dataType: e5, bytesPerElement: n2, count: o3, normalized: a7 } = _r._encodingInfo[f4], c5 = n2 * o3, u3 = `${e5}-${true === a7}`;
        let _5 = s[u3], h3 = 0;
        if (!_5 || _5.count + o3 > 4) i6++, _5 = { dataIndex: i6, count: 0, offset: 0 }, 4 !== o3 && (s[u3] = _5), t6.push({ location: -1, name: "a_data_" + i6, count: o3, type: e5, normalized: a7 }), h3 = Math.ceil(Math.max(c5 / 4, 1));
        else {
          const e6 = t6[_5.dataIndex];
          e6.count += o3;
          h3 = Math.ceil(Math.max(e6.count * n2 / 4, 1)) - Math.ceil(Math.max(_5.offset / 4, 1));
        }
        l6.push({ dataIndex: _5.dataIndex, offset: _5.offset, bufferElementsToAdd: h3 }), _5.offset += c5, _5.count += o3;
      }
    }
    for (const n2 of t6) switch (n2.type) {
      case C2.BYTE:
      case C2.UNSIGNED_BYTE:
        n2.count = 4;
        break;
      case C2.SHORT:
      case C2.UNSIGNED_SHORT:
        n2.count += n2.count % 2;
    }
    this._buildVertexBufferLayout(t6);
    let _3 = 0;
    const l5 = this._layout.get("geometry");
    for (const n2 of l5) this._locations.set(n2.name, _3++);
    const f3 = this._layout.get("opacity");
    if (f3) for (const n2 of f3) this._locations.set(n2.name, _3++);
    this._buildShaderInfo(t6, e3), this._propertyEncodingInfo = e3;
  }
  _buildVertexBufferLayout(t6) {
    const e3 = /* @__PURE__ */ new Map(), n2 = this.geometryInfo();
    let o2 = n2[0].stride;
    if (0 === t6.length) e3.set("geometry", n2);
    else {
      const r4 = [];
      let a6 = o2;
      for (const e4 of t6) o2 += i2(e4.type) * e4.count;
      for (const t7 of n2) r4.push(new t(t7.name, t7.count, t7.type, t7.offset, o2, t7.normalized));
      for (const e4 of t6) r4.push(new t(e4.name, e4.count, e4.type, a6, o2, e4.normalized)), a6 += i2(e4.type) * e4.count;
      e3.set("geometry", r4);
    }
    const r3 = this.opacityInfo();
    r3 && e3.set("opacity", r3), this._layout = e3, this._stride = o2;
  }
  _buildShaderInfo(t6, o2) {
    let s = "\n", i6 = "\n";
    const c3 = [];
    for (const e3 of t6) s += `attribute ${this._getType(e3.count)} ${e3.name};
`;
    const u2 = this.attributes(), _3 = this.attributesInfo();
    let l5 = -1;
    for (const f3 of u2) {
      l5++;
      const { name: t7, type: u3, precisionFactor: h3, isLayout: d4 } = _3[f3], y2 = h3 && 1 !== h3 ? " * " + 1 / h3 : "", { bytesPerElement: m, count: E2 } = _r._encodingInfo[u3], I4 = (t8) => `a_data_${t8.dataIndex}${a3(E2, t8.offset, m)}`;
      switch (this.getAtributeState(l5)) {
        case R2.UNIFORM:
          {
            const n2 = this._getType(E2), o3 = `u_${t7}`;
            c3.push({ name: o3, type: n2, getValue: (t8, n3, o4, s2) => {
              const r3 = d4 ? t8.getLayoutValue(f3, n3) : t8.getPaintValue(f3, n3);
              if (u3 === N2.R16G16B16A16_DASHARRAY) {
                const e3 = t8.getDashKey(r3, t8.getLayoutValue("line-cap", n3)), o5 = s2.getMosaicItemPosition(e3, false);
                if (null == o5) return null;
                const { tl: i7, br: a6 } = o5;
                return [i7[0], a6[1], a6[0], i7[1]];
              }
              if (u3 === N2.R16G16B16A16_PATTERN) {
                const t9 = s2.getMosaicItemPosition(r3, !f3.includes("line-"));
                if (null == t9) return null;
                const { tl: e3, br: n4 } = t9;
                return [e3[0], n4[1], n4[0], e3[1]];
              }
              if (u3 === N2.R8G8B8A8_COLOR) {
                const t9 = r3[3];
                return [t9 * r3[0], t9 * r3[1], t9 * r3[2], t9];
              }
              return r3;
            } }), s += `uniform ${n2} ${o3};
`, i6 += `${n2} ${t7} = ${o3};
`;
          }
          break;
        case R2.DATA_DRIVEN:
          {
            const e3 = I4(o2[f3][0]);
            i6 += `${this._getType(E2)} ${t7} = ${e3}${y2};
`;
          }
          break;
        case R2.INTERPOLATED_DATA_DRIVEN: {
          const e3 = `u_t_${t7}`;
          c3.push({ name: e3, type: "float", getValue: (t8, e4, n3, o3) => (d4 ? t8.getLayoutProperty(f3) : t8.getPaintProperty(f3)).interpolator.interpolationUniformValue(n3, e4) }), s += `uniform float ${e3};
`;
          const n2 = I4(o2[f3][0]), r3 = I4(o2[f3][1]);
          i6 += `${this._getType(E2)} ${t7} = mix(${n2}${y2}, ${r3}${y2}, ${e3});
`;
        }
      }
    }
    this._shaderHeader = s, this._shaderMain = i6, this._uniforms = c3;
  }
  _bit(t6) {
    return (this._key & 1 << t6) >> t6;
  }
  _getType(t6) {
    switch (t6) {
      case 1:
        return "float";
      case 2:
        return "vec2";
      case 3:
        return "vec3";
      case 4:
        return "vec4";
    }
    throw new Error("Invalid count");
  }
  _encodeColor(e3) {
    const n2 = 255 * e3[3];
    return t2.i8888to32(e3[0] * n2, e3[1] * n2, e3[2] * n2, n2);
  }
  _encodePattern(t6, e3, n2) {
    if (!(n2 == null ? void 0 : n2.rect)) return;
    const o2 = 2, s = n2.rect, r3 = n2.width, i6 = n2.height;
    e3[t6] = this._encodeShort(s.x + o2, 0), e3[t6] |= this._encodeShort(s.y + o2 + i6, 16), e3[t6 + 1] = this._encodeShort(s.x + o2 + r3, 0), e3[t6 + 1] |= this._encodeShort(s.y + o2, 16);
  }
  _encodeByte(t6, e3) {
    return (255 & t6) << e3;
  }
  _encodeShort(t6, e3) {
    return (65535 & t6) << e3;
  }
};
r._encodingInfo = { [N2.R8_SIGNED]: { dataType: C2.BYTE, bytesPerElement: 1, count: 1, normalized: false }, [N2.R8_UNSIGNED]: { dataType: C2.UNSIGNED_BYTE, bytesPerElement: 1, count: 1, normalized: false }, [N2.R16_SIGNED]: { dataType: C2.SHORT, bytesPerElement: 2, count: 1, normalized: false }, [N2.R16_UNSIGNED]: { dataType: C2.UNSIGNED_SHORT, bytesPerElement: 2, count: 1, normalized: false }, [N2.R8G8_SIGNED]: { dataType: C2.BYTE, bytesPerElement: 1, count: 2, normalized: false }, [N2.R8G8_UNSIGNED]: { dataType: C2.UNSIGNED_BYTE, bytesPerElement: 1, count: 2, normalized: false }, [N2.R16G16_SIGNED]: { dataType: C2.SHORT, bytesPerElement: 2, count: 2, normalized: false }, [N2.R16G16_UNSIGNED]: { dataType: C2.UNSIGNED_SHORT, bytesPerElement: 2, count: 2, normalized: false }, [N2.R8G8B8A8_SIGNED]: { dataType: C2.BYTE, bytesPerElement: 1, count: 4, normalized: false }, [N2.R8G8B8A8_UNSIGNED]: { dataType: C2.UNSIGNED_BYTE, bytesPerElement: 1, count: 4, normalized: false }, [N2.R8G8B8A8_COLOR]: { dataType: C2.UNSIGNED_BYTE, bytesPerElement: 1, count: 4, normalized: true }, [N2.R16G16B16A16_DASHARRAY]: { dataType: C2.UNSIGNED_SHORT, bytesPerElement: 2, count: 4, normalized: false }, [N2.R16G16B16A16_PATTERN]: { dataType: C2.UNSIGNED_SHORT, bytesPerElement: 2, count: 4, normalized: false } };
var i2 = (t6) => {
  switch (t6) {
    case C2.FLOAT:
    case C2.INT:
    case C2.UNSIGNED_INT:
      return 4;
    case C2.SHORT:
    case C2.UNSIGNED_SHORT:
    case C2.HALF_FLOAT:
      return 2;
    case C2.BYTE:
    case C2.UNSIGNED_BYTE:
      return 1;
  }
};
var a3 = (t6, e3, n2) => {
  const o2 = e3 / n2;
  if (1 === t6) switch (o2) {
    case 0:
      return ".x";
    case 1:
      return ".y";
    case 2:
      return ".z";
    case 3:
      return ".w";
  }
  else if (2 === t6) switch (o2) {
    case 0:
      return ".xy";
    case 1:
      return ".yz";
    case 2:
      return ".zw";
  }
  else if (3 === t6) switch (o2) {
    case 0:
      return ".xyz";
    case 1:
      return ".yzw";
  }
  return "";
};

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLBackgroundMaterial.js
var T = class _T extends r {
  constructor(r3) {
    super(r3);
  }
  geometryInfo() {
    return _T.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return _T.ATTRIBUTES;
  }
  attributesInfo() {
    return _T.ATTRIBUTES_INFO;
  }
};
T.ATTRIBUTES = [], T.GEOMETRY_LAYOUT = [new t("a_pos", 2, C2.BYTE, 0, 2)], T.ATTRIBUTES_INFO = {};

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLCircleMaterial.js
var t3 = class _t extends r {
  constructor(r3) {
    super(r3);
  }
  geometryInfo() {
    return _t.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return _t.ATTRIBUTES;
  }
  attributesInfo() {
    return _t.ATTRIBUTES_INFO;
  }
};
t3.ATTRIBUTES = ["circle-radius", "circle-color", "circle-opacity", "circle-stroke-width", "circle-stroke-color", "circle-stroke-opacity", "circle-blur"], t3.GEOMETRY_LAYOUT = [new t("a_pos", 2, C2.SHORT, 0, 4)], t3.ATTRIBUTES_INFO = { "circle-radius": { name: "radius", type: N2.R8_UNSIGNED }, "circle-color": { name: "color", type: N2.R8G8B8A8_COLOR }, "circle-opacity": { name: "opacity", type: N2.R8_UNSIGNED, precisionFactor: 100 }, "circle-stroke-width": { name: "stroke_width", type: N2.R8_UNSIGNED, precisionFactor: 4 }, "circle-stroke-color": { name: "stroke_color", type: N2.R8G8B8A8_COLOR }, "circle-stroke-opacity": { name: "stroke_opacity", type: N2.R8_UNSIGNED, precisionFactor: 100 }, "circle-blur": { name: "blur", type: N2.R8_UNSIGNED, precisionFactor: 32 } };

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLFillMaterial.js
var l2 = class _l extends r {
  constructor(o2) {
    super(o2);
  }
  geometryInfo() {
    return _l.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return _l.ATTRIBUTES;
  }
  attributesInfo() {
    return _l.ATTRIBUTES_INFO;
  }
};
l2.ATTRIBUTES = ["fill-color", "fill-opacity", "fill-pattern"], l2.GEOMETRY_LAYOUT = [new t("a_pos", 2, C2.SHORT, 0, 4)], l2.ATTRIBUTES_INFO = { "fill-color": { name: "color", type: N2.R8G8B8A8_COLOR }, "fill-opacity": { name: "opacity", type: N2.R8_UNSIGNED, precisionFactor: 100 }, "fill-pattern": { name: "tlbr", type: N2.R16G16B16A16_PATTERN, isOptional: true } };
var T2 = class _T extends r {
  constructor(o2, t6) {
    super(o2), this._usefillColor = t6;
  }
  geometryInfo() {
    return _T.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return this._usefillColor ? _T.ATTRIBUTES_FILL : _T.ATTRIBUTES_OUTLINE;
  }
  attributesInfo() {
    return this._usefillColor ? _T.ATTRIBUTES_INFO_FILL : _T.ATTRIBUTES_INFO_OUTLINE;
  }
};
T2.ATTRIBUTES_OUTLINE = ["fill-outline-color", "fill-opacity"], T2.ATTRIBUTES_FILL = ["fill-color", "fill-opacity"], T2.GEOMETRY_LAYOUT = [new t("a_pos", 2, C2.SHORT, 0, 8), new t("a_offset", 2, C2.BYTE, 4, 8), new t("a_xnormal", 2, C2.BYTE, 6, 8)], T2.ATTRIBUTES_INFO_OUTLINE = { "fill-outline-color": { name: "color", type: N2.R8G8B8A8_COLOR }, "fill-opacity": { name: "opacity", type: N2.R8_UNSIGNED, precisionFactor: 100 } }, T2.ATTRIBUTES_INFO_FILL = { "fill-color": { name: "color", type: N2.R8G8B8A8_COLOR }, "fill-opacity": { name: "opacity", type: N2.R8_UNSIGNED, precisionFactor: 100 } };

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLLineMaterial.js
var i3 = class _i extends r {
  constructor(e3) {
    super(e3);
  }
  geometryInfo() {
    return _i.GEOMETRY_LAYOUT;
  }
  opacityInfo() {
    return null;
  }
  attributes() {
    return _i.ATTRIBUTES;
  }
  attributesInfo() {
    return _i.ATTRIBUTES_INFO;
  }
};
i3.ATTRIBUTES = ["line-blur", "line-color", "line-gap-width", "line-offset", "line-opacity", "line-width", "line-pattern", "line-dasharray"], i3.GEOMETRY_LAYOUT = [new t("a_pos", 2, C2.SHORT, 0, 16), new t("a_extrude_offset", 4, C2.BYTE, 4, 16), new t("a_dir_normal", 4, C2.BYTE, 8, 16), new t("a_accumulatedDistance", 2, C2.UNSIGNED_SHORT, 12, 16)], i3.ATTRIBUTES_INFO = { "line-width": { name: "width", type: N2.R8_UNSIGNED, precisionFactor: 2 }, "line-gap-width": { name: "gap_width", type: N2.R8_UNSIGNED, precisionFactor: 2 }, "line-offset": { name: "offset", type: N2.R8_SIGNED, precisionFactor: 2 }, "line-color": { name: "color", type: N2.R8G8B8A8_COLOR }, "line-opacity": { name: "opacity", type: N2.R8_UNSIGNED, precisionFactor: 100 }, "line-blur": { name: "blur", type: N2.R8_UNSIGNED, precisionFactor: 4 }, "line-pattern": { name: "tlbr", type: N2.R16G16B16A16_PATTERN, isOptional: true }, "line-dasharray": { name: "tlbr", type: N2.R16G16B16A16_DASHARRAY, isOptional: true } };

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/shaders/VTLSymbolMaterial.js
var a4 = [new t("a_pos", 2, C2.SHORT, 0, 16), new t("a_vertexOffset", 2, C2.SHORT, 4, 16), new t("a_texAngleRange", 4, C2.UNSIGNED_BYTE, 8, 16), new t("a_levelInfo", 4, C2.UNSIGNED_BYTE, 12, 16)];
var n = [new t("a_opacityInfo", 1, C2.UNSIGNED_BYTE, 0, 1)];
var i4 = class _i extends r {
  constructor(o2) {
    super(o2);
  }
  geometryInfo() {
    return a4;
  }
  opacityInfo() {
    return n;
  }
  attributes() {
    return _i.ATTRIBUTES;
  }
  attributesInfo() {
    return _i.ATTRIBUTES_INFO;
  }
};
i4.ATTRIBUTES = ["icon-color", "icon-opacity", "icon-halo-blur", "icon-halo-color", "icon-halo-width", "icon-size"], i4.ATTRIBUTES_INFO = { "icon-color": { name: "color", type: N2.R8G8B8A8_COLOR }, "icon-opacity": { name: "opacity", type: N2.R8_UNSIGNED, precisionFactor: 100 }, "icon-halo-color": { name: "halo_color", type: N2.R8G8B8A8_COLOR }, "icon-halo-width": { name: "halo_width", type: N2.R8_UNSIGNED, precisionFactor: 4 }, "icon-halo-blur": { name: "halo_blur", type: N2.R8_UNSIGNED, precisionFactor: 4 }, "icon-size": { name: "size", type: N2.R8_UNSIGNED, precisionFactor: 32, isLayout: true } };
var c = class _c extends r {
  constructor(o2) {
    super(o2);
  }
  geometryInfo() {
    return a4;
  }
  opacityInfo() {
    return n;
  }
  attributes() {
    return _c.ATTRIBUTES;
  }
  attributesInfo() {
    return _c.ATTRIBUTES_INFO;
  }
};
c.ATTRIBUTES = ["text-color", "text-opacity", "text-halo-blur", "text-halo-color", "text-halo-width", "text-size"], c.ATTRIBUTES_INFO = { "text-color": { name: "color", type: N2.R8G8B8A8_COLOR }, "text-opacity": { name: "opacity", type: N2.R8_UNSIGNED, precisionFactor: 100 }, "text-halo-color": { name: "halo_color", type: N2.R8G8B8A8_COLOR }, "text-halo-width": { name: "halo_width", type: N2.R8_UNSIGNED, precisionFactor: 4 }, "text-halo-blur": { name: "halo_blur", type: N2.R8_UNSIGNED, precisionFactor: 4 }, "text-size": { name: "size", type: N2.R8_UNSIGNED, isLayout: true } };

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/expression/types.js
var r2 = { kind: "null" };
var e2 = { kind: "number" };
var t4 = { kind: "string" };
var i5 = { kind: "boolean" };
var o = { kind: "color" };
var f2 = { kind: "object" };
var u = { kind: "value" };
function a5(n2, r3) {
  return { kind: "array", itemType: n2, n: r3 };
}
var y = [r2, e2, t4, i5, o, f2, a5(u)];
function k(n2) {
  if ("array" === n2.kind) {
    const r3 = k(n2.itemType);
    return "number" == typeof n2.n ? `array<${r3}, ${n2.n}>` : "value" === n2.itemType.kind ? "array" : `array<${r3}>`;
  }
  return n2.kind;
}
function l3(y2) {
  if (null === y2) return r2;
  if ("string" == typeof y2) return t4;
  if ("boolean" == typeof y2) return i5;
  if ("number" == typeof y2) return e2;
  if (y2 instanceof h) return o;
  if (Array.isArray(y2)) {
    let n2;
    for (const r3 of y2) {
      const e3 = l3(r3);
      if (n2) {
        if (n2 !== e3) {
          n2 = u;
          break;
        }
      } else n2 = e3;
    }
    return a5(n2 || u, y2.length);
  }
  return "object" == typeof y2 ? f2 : u;
}
function c2(n2, r3) {
  if ("array" === r3.kind) return "array" === n2.kind && (0 === n2.n && "value" === n2.itemType.kind || c2(n2.itemType, r3.itemType)) && ("number" != typeof r3.n || r3.n === n2.n);
  if ("value" === r3.kind) {
    for (const e3 of y) if (c2(n2, e3)) return true;
  }
  return r3.kind === n2.kind;
}
function d(r3) {
  if (null === r3) return "";
  const e3 = typeof r3;
  return "string" === e3 ? r3 : "number" === e3 || "boolean" === e3 ? String(r3) : r3 instanceof h ? r3.toString() : JSON.stringify(r3);
}

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/expression/expression.js
var _ = class {
  constructor(t6) {
    this._parent = t6, this._vars = {};
  }
  add(t6, e3) {
    this._vars[t6] = e3;
  }
  get(t6) {
    return this._vars[t6] ? this._vars[t6] : this._parent ? this._parent.get(t6) : null;
  }
};
var v = class _v {
  constructor() {
    this.type = u;
  }
  static parse(t6) {
    if (t6.length > 1) throw new Error('"id" does not expect arguments');
    return new _v();
  }
  evaluate(t6, e3) {
    return t6 == null ? void 0 : t6.id;
  }
};
var b2 = class _b {
  constructor() {
    this.type = t4;
  }
  static parse(t6) {
    if (t6.length > 1) throw new Error('"geometry-type" does not expect arguments');
    return new _b();
  }
  evaluate(t6, e3) {
    if (!t6) return null;
    switch (t6.type) {
      case i.Point:
        return "Point";
      case i.LineString:
        return "LineString";
      case i.Polygon:
        return "Polygon";
      default:
        return null;
    }
  }
};
var d2 = class _d {
  constructor() {
    this.type = f2;
  }
  static parse(t6) {
    if (t6.length > 1) throw new Error('"properties" does not expect arguments');
    return new _d();
  }
  evaluate(t6, e3) {
    return t6 == null ? void 0 : t6.values;
  }
};
var x = class _x {
  constructor() {
    this.type = e2;
  }
  static parse(t6) {
    if (t6.length > 1) throw new Error('"zoom" does not expect arguments');
    return new _x();
  }
  evaluate(t6, e3) {
    return e3;
  }
};
var E = class _E {
  constructor(t6, e3, r3) {
    this._lhs = t6, this._rhs = e3, this._compare = r3, this.type = i5;
  }
  static parse(t6, e3, r3) {
    if (3 !== t6.length && 4 !== t6.length) throw new Error(`"${t6[0]}" expects 2 or 3 arguments`);
    if (4 === t6.length) throw new Error(`"${t6[0]}" collator not supported`);
    return new _E(pt(t6[1], e3), pt(t6[2], e3), r3);
  }
  evaluate(t6, e3) {
    return this._compare(this._lhs.evaluate(t6, e3), this._rhs.evaluate(t6, e3));
  }
};
var $ = class extends E {
  static parse(t6, e3) {
    return E.parse(t6, e3, (t7, e4) => t7 === e4);
  }
};
var M = class extends E {
  static parse(t6, e3) {
    return E.parse(t6, e3, (t7, e4) => t7 !== e4);
  }
};
var k2 = class extends E {
  static parse(t6, e3) {
    return E.parse(t6, e3, (t7, e4) => t7 < e4);
  }
};
var A = class extends E {
  static parse(t6, e3) {
    return E.parse(t6, e3, (t7, e4) => t7 <= e4);
  }
};
var j = class extends E {
  static parse(t6, e3) {
    return E.parse(t6, e3, (t7, e4) => t7 > e4);
  }
};
var q = class extends E {
  static parse(t6, e3) {
    return E.parse(t6, e3, (t7, e4) => t7 >= e4);
  }
};
var N3 = class _N {
  constructor(t6) {
    this._arg = t6, this.type = i5;
  }
  static parse(t6, e3) {
    if (2 !== t6.length) throw new Error('"!" expects 1 argument');
    return new _N(pt(t6[1], e3));
  }
  evaluate(t6, e3) {
    return !this._arg.evaluate(t6, e3);
  }
};
var C3 = class _C {
  constructor(t6) {
    this._args = t6, this.type = i5;
  }
  static parse(t6, e3) {
    const r3 = [];
    for (let s = 1; s < t6.length; s++) r3.push(pt(t6[s], e3));
    return new _C(r3);
  }
  evaluate(t6, e3) {
    for (const r3 of this._args) if (!r3.evaluate(t6, e3)) return false;
    return true;
  }
};
var R3 = class _R {
  constructor(t6) {
    this._args = t6, this.type = i5;
  }
  static parse(t6, e3) {
    const r3 = [];
    for (let s = 1; s < t6.length; s++) r3.push(pt(t6[s], e3));
    return new _R(r3);
  }
  evaluate(t6, e3) {
    for (const r3 of this._args) if (r3.evaluate(t6, e3)) return true;
    return false;
  }
};
var z = class _z {
  constructor(t6) {
    this._args = t6, this.type = i5;
  }
  static parse(t6, e3) {
    const r3 = [];
    for (let s = 1; s < t6.length; s++) r3.push(pt(t6[s], e3));
    return new _z(r3);
  }
  evaluate(t6, e3) {
    for (const r3 of this._args) if (r3.evaluate(t6, e3)) return false;
    return true;
  }
};
var I2 = class _I {
  constructor(t6, e3, r3) {
    this.type = t6, this._args = e3, this._fallback = r3;
  }
  static parse(t6, e3, r3) {
    if (t6.length < 4) throw new Error('"case" expects at least 3 arguments');
    if (t6.length % 2 == 1) throw new Error('"case" expects an odd number of arguments');
    let s;
    const n2 = [];
    for (let o2 = 1; o2 < t6.length - 1; o2 += 2) {
      const a7 = pt(t6[o2], e3), i6 = pt(t6[o2 + 1], e3, r3);
      s || (s = i6.type), n2.push({ condition: a7, output: i6 });
    }
    const a6 = pt(t6[t6.length - 1], e3, r3);
    return s || (s = a6.type), new _I(s, n2, a6);
  }
  evaluate(t6, e3) {
    for (const r3 of this._args) if (r3.condition.evaluate(t6, e3)) return r3.output.evaluate(t6, e3);
    return this._fallback.evaluate(t6, e3);
  }
};
var L2 = class _L {
  constructor(t6, e3) {
    this.type = t6, this._args = e3;
  }
  static parse(t6, e3) {
    if (t6.length < 2) throw new Error('"coalesce" expects at least 1 argument');
    let r3;
    const s = [];
    for (let n2 = 1; n2 < t6.length; n2++) {
      const a6 = pt(t6[n2], e3);
      r3 || (r3 = a6.type), s.push(a6);
    }
    return new _L(r3, s);
  }
  evaluate(t6, e3) {
    for (const r3 of this._args) {
      const s = r3.evaluate(t6, e3);
      if (null !== s) return s;
    }
    return null;
  }
};
var U2 = class _U {
  constructor(t6, e3, r3, s, n2) {
    this.type = t6, this._input = e3, this._labels = r3, this._outputs = s, this._fallback = n2;
  }
  static parse(t6, e3) {
    if (t6.length < 3) throw new Error('"match" expects at least 3 arguments');
    if (t6.length % 2 == 0) throw new Error('"case" expects an even number of arguments');
    let r3;
    const s = pt(t6[1], e3), n2 = [], a6 = {};
    let o2;
    for (let i6 = 2; i6 < t6.length - 1; i6 += 2) {
      let s2 = t6[i6];
      Array.isArray(s2) || (s2 = [s2]);
      for (const t7 of s2) {
        const e4 = typeof t7;
        if ("string" !== e4 && "number" !== e4) throw new Error('"match" requires string or number literal as labels');
        if (o2) {
          if (e4 !== o2) throw new Error('"match" requires labels to have the same type');
        } else o2 = e4;
        a6[t7] = n2.length;
      }
      const l5 = pt(t6[i6 + 1], e3);
      r3 || (r3 = l5.type), n2.push(l5);
    }
    return new _U(r3, s, a6, n2, pt(t6[t6.length - 1], e3));
  }
  evaluate(t6, e3) {
    const r3 = this._input.evaluate(t6, e3);
    return (this._outputs[this._labels[r3]] || this._fallback).evaluate(t6, e3);
  }
};
var P2 = class _P {
  constructor(t6, e3, r3, s, n2) {
    this._operator = t6, this.type = e3, this.interpolation = r3, this.input = s, this._stops = n2;
  }
  static parse(t6, e3, r3) {
    const s = t6[0];
    if (t6.length < 5) throw new Error(`"${s}" expects at least 4 arguments`);
    const n2 = t6[1];
    if (!Array.isArray(n2) || 0 === n2.length) throw new Error(`"${n2}" is not a valid interpolation`);
    switch (n2[0]) {
      case "linear":
        if (1 !== n2.length) throw new Error("Linear interpolation cannot have parameters");
        break;
      case "exponential":
        if (2 !== n2.length || "number" != typeof n2[1]) throw new Error("Exponential interpolation requires one numeric argument");
        break;
      case "cubic-bezier":
        if (5 !== n2.length) throw new Error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1");
        for (let t7 = 1; t7 < 5; t7++) {
          const e4 = n2[t7];
          if ("number" != typeof e4 || e4 < 0 || e4 > 1) throw new Error("Cubic bezier interpolation requires four numeric arguments with values between 0 and 1");
        }
        break;
      default:
        throw new Error(`"${t6[0]}" unknown interpolation type "${n2[0]}"`);
    }
    if (t6.length % 2 != 1) throw new Error(`"${s}" expects an even number of arguments`);
    const a6 = pt(t6[2], e3, e2);
    let o2;
    "interpolate-hcl" === s || "interpolate-lab" === s ? o2 = o : r3 && "value" !== r3.kind && (o2 = r3);
    const i6 = [];
    for (let l5 = 3; l5 < t6.length; l5 += 2) {
      const r4 = t6[l5];
      if ("number" != typeof r4) throw new Error(`"${s}" requires stop inputs as literal numbers`);
      if (i6.length && i6[i6.length - 1][0] >= r4) throw new Error(`"${s}" requires strictly ascending stop inputs`);
      const n3 = pt(t6[l5 + 1], e3, o2);
      o2 || (o2 = n3.type), i6.push([r4, n3]);
    }
    if (o2 && o2 !== o && o2 !== e2 && ("array" !== o2.kind || o2.itemType !== e2)) throw new Error(`"${s}" cannot interpolate type ${k(o2)}`);
    return new _P(s, o2, n2, a6, i6);
  }
  evaluate(n2, a6) {
    const i6 = this._stops;
    if (1 === i6.length) return i6[0][1].evaluate(n2, a6);
    const l5 = this.input.evaluate(n2, a6);
    if (l5 <= i6[0][0]) return i6[0][1].evaluate(n2, a6);
    if (l5 >= i6[i6.length - 1][0]) return i6[i6.length - 1][1].evaluate(n2, a6);
    let u2 = 0;
    for (; ++u2 < i6.length && !(l5 < i6[u2][0]); ) ;
    const c3 = i6[u2 - 1][0], h3 = i6[u2][0], p2 = _P.interpolationRatio(this.interpolation, l5, c3, h3), f3 = i6[u2 - 1][1].evaluate(n2, a6), w = i6[u2][1].evaluate(n2, a6);
    if ("interpolate" === this._operator) {
      if ("array" === this.type.kind && Array.isArray(f3) && Array.isArray(w)) return f3.map((t6, e3) => p(t6, w[e3], p2));
      if ("color" === this.type.kind && f3 instanceof h && w instanceof h) {
        const e3 = new h(f3), r3 = new h(w);
        return new h([p(e3.r, r3.r, p2), p(e3.g, r3.g, p2), p(e3.b, r3.b, p2), p(e3.a, r3.a, p2)]);
      }
      if ("number" === this.type.kind && "number" == typeof f3 && "number" == typeof w) return p(f3, w, p2);
      throw new Error(`"${this._operator}" cannot interpolate type ${k(this.type)}`);
    }
    if ("interpolate-hcl" === this._operator) {
      const s = H(f3), n3 = H(w), a7 = n3.h - s.h, i7 = U({ h: s.h + p2 * (a7 > 180 || a7 < -180 ? a7 - 360 * Math.round(a7 / 360) : a7), c: p(s.c, n3.c, p2), l: p(s.l, n3.l, p2) });
      return new h({ a: p(f3.a, w.a, p2), ...i7 });
    }
    if ("interpolate-lab" === this._operator) {
      const e3 = C(f3), n3 = C(w), a7 = U({ l: p(e3.l, n3.l, p2), a: p(e3.a, n3.a, p2), b: p(e3.b, n3.b, p2) });
      return new h({ a: p(f3.a, w.a, p2), ...a7 });
    }
    throw new Error(`Unexpected operator "${this._operator}"`);
  }
  interpolationUniformValue(t6, e3) {
    const r3 = this._stops;
    if (1 === r3.length) return 0;
    if (t6 >= r3[r3.length - 1][0]) return 0;
    let s = 0;
    for (; ++s < r3.length && !(t6 < r3[s][0]); ) ;
    const n2 = r3[s - 1][0], a6 = r3[s][0];
    return _P.interpolationRatio(this.interpolation, e3, n2, a6);
  }
  getInterpolationRange(t6) {
    const e3 = this._stops;
    if (1 === e3.length) {
      const t7 = e3[0][0];
      return [t7, t7];
    }
    const r3 = e3[e3.length - 1][0];
    if (t6 >= r3) return [r3, r3];
    let s = 0;
    for (; ++s < e3.length && !(t6 < e3[s][0]); ) ;
    return [e3[s - 1][0], e3[s][0]];
  }
  static interpolationRatio(t6, e3, r3, s) {
    let n2 = 0;
    if ("linear" === t6[0]) n2 = _P._exponentialInterpolationRatio(e3, 1, r3, s);
    else if ("exponential" === t6[0]) n2 = _P._exponentialInterpolationRatio(e3, t6[1], r3, s);
    else if ("cubic-bezier" === t6[0]) {
      n2 = e(t6[1], t6[2], t6[3], t6[4])(_P._exponentialInterpolationRatio(e3, 1, r3, s), 1e-5);
    }
    return n2 < 0 ? n2 = 0 : n2 > 1 && (n2 = 1), n2;
  }
  static _exponentialInterpolationRatio(t6, e3, r3, s) {
    const n2 = s - r3;
    if (0 === n2) return 0;
    const a6 = t6 - r3;
    return 1 === e3 ? a6 / n2 : (e3 ** a6 - 1) / (e3 ** n2 - 1);
  }
};
var S = class _S {
  constructor(t6, e3, r3) {
    this.type = t6, this._input = e3, this._stops = r3;
  }
  static parse(t6, e3) {
    if (t6.length < 5) throw new Error('"step" expects at least 4 arguments');
    if (t6.length % 2 != 1) throw new Error('"step" expects an even number of arguments');
    const r3 = pt(t6[1], e3, e2);
    let s;
    const n2 = [];
    n2.push([-1 / 0, pt(t6[2], e3)]);
    for (let a6 = 3; a6 < t6.length; a6 += 2) {
      const r4 = t6[a6];
      if ("number" != typeof r4) throw new Error('"step" requires stop inputs as literal numbers');
      if (n2.length && n2[n2.length - 1][0] >= r4) throw new Error('"step" requires strictly ascending stop inputs');
      const o2 = pt(t6[a6 + 1], e3);
      s || (s = o2.type), n2.push([r4, o2]);
    }
    return new _S(s, r3, n2);
  }
  evaluate(t6, e3) {
    const r3 = this._stops;
    if (1 === r3.length) return r3[0][1].evaluate(t6, e3);
    const s = this._input.evaluate(t6, e3);
    let n2 = 0;
    for (; ++n2 < r3.length && !(s < r3[n2][0]); ) ;
    return this._stops[n2 - 1][1].evaluate(t6, e3);
  }
};
var B = class _B {
  constructor(t6, e3) {
    this.type = t6, this._output = e3;
  }
  static parse(t6, e3, r3) {
    if (t6.length < 4) throw new Error('"let" expects at least 3 arguments');
    if (t6.length % 2 == 1) throw new Error('"let" expects an odd number of arguments');
    const s = new _(e3);
    for (let a6 = 1; a6 < t6.length - 1; a6 += 2) {
      const r4 = t6[a6];
      if ("string" != typeof r4) throw new Error(`"let" requires a string to define variable names - found ${r4}`);
      s.add(r4, pt(t6[a6 + 1], e3));
    }
    const n2 = pt(t6[t6.length - 1], s, r3);
    return new _B(n2.type, n2);
  }
  evaluate(t6, e3) {
    return this._output.evaluate(t6, e3);
  }
};
var T3 = class _T {
  constructor(t6, e3) {
    this.type = t6, this.output = e3;
  }
  static parse(t6, e3, r3) {
    if (2 !== t6.length || "string" != typeof t6[1]) throw new Error('"var" requires just one literal string argument');
    const s = e3.get(t6[1]);
    if (!s) throw new Error(`${t6[1]} must be defined before being used in a "var" expression`);
    return new _T(r3 || u, s);
  }
  evaluate(t6, e3) {
    return this.output.evaluate(t6, e3);
  }
};
var O = class _O {
  constructor(t6, e3, r3) {
    this.type = t6, this._index = e3, this._array = r3;
  }
  static parse(t6, e3) {
    if (3 !== t6.length) throw new Error('"at" expects 2 arguments');
    const r3 = pt(t6[1], e3, e2), s = pt(t6[2], e3);
    return new _O(s.type.itemType, r3, s);
  }
  evaluate(t6, e3) {
    const r3 = this._index.evaluate(t6, e3), s = this._array.evaluate(t6, e3);
    if (r3 < 0 || r3 >= s.length) throw new Error('"at" index out of bounds');
    if (r3 !== Math.floor(r3)) throw new Error('"at" index must be an integer');
    return s[r3];
  }
};
var F = class _F {
  constructor(t6, e3) {
    this._key = t6, this._obj = e3, this.type = u;
  }
  static parse(t6, e3) {
    let r3, s;
    switch (t6.length) {
      case 2:
        return r3 = pt(t6[1], e3), new _F(r3);
      case 3:
        return r3 = pt(t6[1], e3), s = pt(t6[2], e3), new _F(r3, s);
      default:
        throw new Error('"get" expects 1 or 2 arguments');
    }
  }
  evaluate(t6, e3) {
    const r3 = this._key.evaluate(t6, e3);
    if (this._obj) {
      return this._obj.evaluate(t6, e3)[r3];
    }
    return t6 == null ? void 0 : t6.values[r3];
  }
};
var G = class _G {
  constructor(t6, e3) {
    this._key = t6, this._obj = e3, this.type = i5;
  }
  static parse(t6, e3) {
    let r3, s;
    switch (t6.length) {
      case 2:
        return r3 = pt(t6[1], e3), new _G(r3);
      case 3:
        return r3 = pt(t6[1], e3), s = pt(t6[2], e3), new _G(r3, s);
      default:
        throw new Error('"has" expects 1 or 2 arguments');
    }
  }
  evaluate(t6, e3) {
    const r3 = this._key.evaluate(t6, e3);
    if (this._obj) {
      return r3 in this._obj.evaluate(t6, e3);
    }
    return !!(t6 == null ? void 0 : t6.values[r3]);
  }
};
var V = class _V {
  constructor(t6, e3) {
    this._key = t6, this._vals = e3, this.type = i5;
  }
  static parse(t6, e3) {
    if (3 !== t6.length) throw new Error('"in" expects 2 arguments');
    return new _V(pt(t6[1], e3), pt(t6[2], e3));
  }
  evaluate(t6, e3) {
    const r3 = this._key.evaluate(t6, e3);
    return this._vals.evaluate(t6, e3).includes(r3);
  }
};
var D = class _D {
  constructor(t6, e3, r3) {
    this._item = t6, this._array = e3, this._from = r3, this.type = e2;
  }
  static parse(t6, e3) {
    if (t6.length < 3 || t6.length > 4) throw new Error('"index-of" expects 3 or 4 arguments');
    const r3 = pt(t6[1], e3), s = pt(t6[2], e3);
    if (4 === t6.length) {
      const n2 = pt(t6[3], e3, e2);
      return new _D(r3, s, n2);
    }
    return new _D(r3, s);
  }
  evaluate(t6, e3) {
    const r3 = this._item.evaluate(t6, e3), s = this._array.evaluate(t6, e3);
    if (this._from) {
      const n2 = this._from.evaluate(t6, e3);
      if (n2 !== Math.floor(n2)) throw new Error('"index-of" index must be an integer');
      return s.indexOf(r3, n2);
    }
    return s.indexOf(r3);
  }
};
var H2 = class _H {
  constructor(t6) {
    this._arg = t6, this.type = e2;
  }
  static parse(t6, e3) {
    if (2 !== t6.length) throw new Error('"length" expects 2 arguments');
    const r3 = pt(t6[1], e3);
    return new _H(r3);
  }
  evaluate(t6, e3) {
    const r3 = this._arg.evaluate(t6, e3);
    if ("string" == typeof r3) return r3.length;
    if (Array.isArray(r3)) return r3.length;
    throw new Error('"length" expects string or array');
  }
};
var J = class _J {
  constructor(t6, e3, r3, s) {
    this.type = t6, this._array = e3, this._from = r3, this._to = s;
  }
  static parse(t6, e3) {
    if (t6.length < 3 || t6.length > 4) throw new Error('"slice" expects 2 or 3 arguments');
    const r3 = pt(t6[1], e3), s = pt(t6[2], e3, e2);
    if (s.type !== e2) throw new Error('"slice" index must return a number');
    if (4 === t6.length) {
      const n2 = pt(t6[3], e3, e2);
      if (n2.type !== e2) throw new Error('"slice" index must return a number');
      return new _J(r3.type, r3, s, n2);
    }
    return new _J(r3.type, r3, s);
  }
  evaluate(t6, e3) {
    const r3 = this._array.evaluate(t6, e3);
    if (!Array.isArray(r3) && "string" != typeof r3) throw new Error('"slice" input must be an array or a string');
    const s = this._from.evaluate(t6, e3);
    if (s < 0 || s >= r3.length) throw new Error('"slice" index out of bounds');
    if (s !== Math.floor(s)) throw new Error('"slice" index must be an integer');
    if (this._to) {
      const n2 = this._to.evaluate(t6, e3);
      if (n2 < 0 || n2 >= r3.length) throw new Error('"slice" index out of bounds');
      if (n2 !== Math.floor(n2)) throw new Error('"slice" index must be an integer');
      return r3.slice(s, n2);
    }
    return r3.slice(s);
  }
};
var K = class _K {
  constructor() {
    this.type = i5;
  }
  static parse(t6) {
    if (1 !== t6.length) throw new Error('"has-id" expects no arguments');
    return new _K();
  }
  evaluate(t6, e3) {
    return void 0 !== (t6 == null ? void 0 : t6.id);
  }
};
var Q = class _Q {
  constructor(t6, e3) {
    this._args = t6, this._calculate = e3, this.type = e2;
  }
  static parse(t6, e3, r3) {
    const s = t6.slice(1).map((t7) => pt(t7, e3));
    return new _Q(s, r3);
  }
  evaluate(t6, e3) {
    let r3;
    return this._args && (r3 = this._args.map((r4) => r4.evaluate(t6, e3))), this._calculate(r3);
  }
};
var W = class extends Q {
  static parse(t6, e3) {
    switch (t6.length) {
      case 2:
        return Q.parse(t6, e3, (t7) => -t7[0]);
      case 3:
        return Q.parse(t6, e3, (t7) => t7[0] - t7[1]);
      default:
        throw new Error('"-" expects 1 or 2 arguments');
    }
  }
};
var X = class extends Q {
  static parse(t6, e3) {
    return Q.parse(t6, e3, (t7) => {
      let e4 = 1;
      for (const r3 of t7) e4 *= r3;
      return e4;
    });
  }
};
var Y = class extends Q {
  static parse(t6, e3) {
    if (3 === t6.length) return Q.parse(t6, e3, (t7) => t7[0] / t7[1]);
    throw new Error('"/" expects 2 arguments');
  }
};
var Z = class extends Q {
  static parse(t6, e3) {
    if (3 === t6.length) return Q.parse(t6, e3, (t7) => t7[0] % t7[1]);
    throw new Error('"%" expects 2 arguments');
  }
};
var tt = class extends Q {
  static parse(t6, e3) {
    if (3 === t6.length) return Q.parse(t6, e3, (t7) => t7[0] ** t7[1]);
    throw new Error('"^" expects 1 or 2 arguments');
  }
};
var et = class extends Q {
  static parse(t6, e3) {
    return Q.parse(t6, e3, (t7) => {
      let e4 = 0;
      for (const r3 of t7) e4 += r3;
      return e4;
    });
  }
};
var rt = class _rt {
  constructor(t6, e3) {
    this._args = t6, this._calculate = e3, this.type = e2;
  }
  static parse(t6, e3) {
    const r3 = t6.slice(1).map((t7) => pt(t7, e3));
    return new _rt(r3, _rt.ops[t6[0]]);
  }
  evaluate(t6, e3) {
    let r3;
    return this._args && (r3 = this._args.map((r4) => r4.evaluate(t6, e3))), this._calculate(r3);
  }
};
rt.ops = { abs: (t6) => Math.abs(t6[0]), acos: (t6) => Math.acos(t6[0]), asin: (t6) => Math.asin(t6[0]), atan: (t6) => Math.atan(t6[0]), ceil: (t6) => Math.ceil(t6[0]), cos: (t6) => Math.cos(t6[0]), e: () => Math.E, floor: (t6) => Math.floor(t6[0]), ln: (t6) => Math.log(t6[0]), ln2: () => Math.LN2, log10: (t6) => Math.log(t6[0]) / Math.LN10, log2: (t6) => Math.log(t6[0]) / Math.LN2, max: (t6) => Math.max(...t6), min: (t6) => Math.min(...t6), pi: () => Math.PI, round: (t6) => Math.round(t6[0]), sin: (t6) => Math.sin(t6[0]), sqrt: (t6) => Math.sqrt(t6[0]), tan: (t6) => Math.tan(t6[0]) };
var st = class _st {
  constructor(t6) {
    this._args = t6, this.type = t4;
  }
  static parse(t6, e3) {
    return new _st(t6.slice(1).map((t7) => pt(t7, e3)));
  }
  evaluate(t6, e3) {
    return this._args.map((r3) => r3.evaluate(t6, e3)).join("");
  }
};
var nt = class _nt {
  constructor(t6, e3) {
    this._arg = t6, this._calculate = e3, this.type = t4;
  }
  static parse(t6, e3) {
    if (2 !== t6.length) throw new Error(`${t6[0]} expects 1 argument`);
    const r3 = pt(t6[1], e3);
    return new _nt(r3, _nt.ops[t6[0]]);
  }
  evaluate(t6, e3) {
    return this._calculate(this._arg.evaluate(t6, e3));
  }
};
nt.ops = { downcase: (t6) => t6.toLowerCase(), upcase: (t6) => t6.toUpperCase() };
var at = class _at {
  constructor(t6) {
    this._args = t6, this.type = o;
  }
  static parse(t6, e3) {
    if (4 !== t6.length) throw new Error('"rgb" expects 3 arguments');
    const r3 = t6.slice(1).map((t7) => pt(t7, e3));
    return new _at(r3);
  }
  evaluate(e3, r3) {
    const s = this._validate(this._args[0].evaluate(e3, r3)), n2 = this._validate(this._args[1].evaluate(e3, r3)), a6 = this._validate(this._args[2].evaluate(e3, r3));
    return new h({ r: s, g: n2, b: a6 });
  }
  _validate(t6) {
    if ("number" != typeof t6 || t6 < 0 || t6 > 255) throw new Error(`${t6}: invalid color component`);
    return Math.round(t6);
  }
};
var ot = class _ot {
  constructor(t6) {
    this._args = t6, this.type = o;
  }
  static parse(t6, e3) {
    if (5 !== t6.length) throw new Error('"rgba" expects 4 arguments');
    const r3 = t6.slice(1).map((t7) => pt(t7, e3));
    return new _ot(r3);
  }
  evaluate(e3, r3) {
    const s = this._validate(this._args[0].evaluate(e3, r3)), n2 = this._validate(this._args[1].evaluate(e3, r3)), a6 = this._validate(this._args[2].evaluate(e3, r3)), o2 = this._validateAlpha(this._args[3].evaluate(e3, r3));
    return new h({ r: s, g: n2, b: a6, a: o2 });
  }
  _validate(t6) {
    if ("number" != typeof t6 || t6 < 0 || t6 > 255) throw new Error(`${t6}: invalid color component`);
    return Math.round(t6);
  }
  _validateAlpha(t6) {
    if ("number" != typeof t6 || t6 < 0 || t6 > 1) throw new Error(`${t6}: invalid alpha color component`);
    return t6;
  }
};
var it = class _it {
  constructor(t6) {
    this._color = t6, this.type = a5(e2, 4);
  }
  static parse(t6, e3) {
    if (2 !== t6.length) throw new Error('"to-rgba" expects 1 argument');
    const r3 = pt(t6[1], e3);
    return new _it(r3);
  }
  evaluate(e3, r3) {
    return new h(this._color.evaluate(e3, r3)).toRgba();
  }
};
var lt = class _lt {
  constructor(t6, e3) {
    this.type = t6, this._args = e3;
  }
  static parse(t6, e3) {
    const r3 = t6[0];
    if (t6.length < 2) throw new Error(`${r3} expects at least one argument`);
    let s, n2 = 1;
    if ("array" === r3) {
      if (t6.length > 2) {
        switch (t6[1]) {
          case "string":
            s = t4;
            break;
          case "number":
            s = e2;
            break;
          case "boolean":
            s = i5;
            break;
          default:
            throw new Error('"array" type argument must be string, number or boolean');
        }
        n2++;
      } else s = u;
      let e4;
      if (t6.length > 3) {
        if (e4 = t6[2], null !== e4 && ("number" != typeof e4 || e4 < 0 || e4 !== Math.floor(e4))) throw new Error('"array" length argument must be a positive integer literal');
        n2++;
      }
      s = a5(s, e4);
    } else switch (r3) {
      case "string":
        s = t4;
        break;
      case "number":
        s = e2;
        break;
      case "boolean":
        s = i5;
        break;
      case "object":
        s = f2;
    }
    const a6 = [];
    for (; n2 < t6.length; n2++) {
      const r4 = pt(t6[n2], e3);
      a6.push(r4);
    }
    return new _lt(s, a6);
  }
  evaluate(t6, e3) {
    let r3;
    for (const s of this._args) {
      const n2 = s.evaluate(t6, e3);
      if (r3 = l3(n2), c2(r3, this.type)) return n2;
    }
    throw new Error(`Expected ${k(this.type)} but got ${k(r3)}`);
  }
};
var ut = class _ut {
  constructor(t6, e3) {
    this.type = t6, this._args = e3;
  }
  static parse(t6, e3) {
    const r3 = t6[0], s = _ut.types[r3];
    if (s === i5 || s === t4) {
      if (2 !== t6.length) throw new Error(`${r3} expects one argument`);
    } else if (t6.length < 2) throw new Error(`${r3} expects at least one argument`);
    const n2 = [];
    for (let a6 = 1; a6 < t6.length; a6++) {
      const r4 = pt(t6[a6], e3);
      n2.push(r4);
    }
    return new _ut(s, n2);
  }
  evaluate(e3, r3) {
    if (this.type === i5) return Boolean(this._args[0].evaluate(e3, r3));
    if (this.type === t4) return d(this._args[0].evaluate(e3, r3));
    if (this.type === e2) {
      for (const t6 of this._args) {
        const s = Number(t6.evaluate(e3, r3));
        if (!isNaN(s)) return s;
      }
      return null;
    }
    if (this.type === o) {
      for (const s of this._args) try {
        const n2 = _ut.toColor(s.evaluate(e3, r3));
        if (n2 instanceof h) return n2;
      } catch {
      }
      return null;
    }
  }
  static toBoolean(t6) {
    return Boolean(t6);
  }
  static toString(t6) {
    return d(t6);
  }
  static toNumber(t6) {
    const e3 = Number(t6);
    if (isNaN(e3)) throw new Error(`"${t6}" is not a number`);
    return e3;
  }
  static toColor(e3) {
    if (e3 instanceof h) return e3;
    if ("string" == typeof e3) {
      const r3 = h.fromString(e3);
      if (r3) return r3;
      throw new Error(`"${e3}" is not a color`);
    }
    if (Array.isArray(e3)) return h.fromArray(e3);
    throw new Error(`"${e3}" is not a color`);
  }
};
ut.types = { "to-boolean": i5, "to-color": o, "to-number": e2, "to-string": t4 };
var ct = class _ct {
  constructor(t6) {
    this._val = t6, this.type = l3(t6);
  }
  static parse(t6) {
    if (2 !== t6.length) throw new Error('"literal" expects 1 argument');
    return new _ct(t6[1]);
  }
  evaluate(t6, e3) {
    return this._val;
  }
};
var ht = class _ht {
  constructor(t6) {
    this._arg = t6, this.type = t4;
  }
  static parse(t6, e3) {
    if (2 !== t6.length) throw new Error('"typeof" expects 1 argument');
    return new _ht(pt(t6[1], e3));
  }
  evaluate(t6, e3) {
    return k(l3(this._arg.evaluate(t6, e3)));
  }
};
function pt(t6, e3, r3) {
  const s = typeof t6;
  if ("string" === s || "boolean" === s || "number" === s || null === t6) {
    if (r3) switch (r3.kind) {
      case "string":
        "string" !== s && (t6 = ut.toString(t6));
        break;
      case "number":
        "number" !== s && (t6 = ut.toNumber(t6));
        break;
      case "color":
        t6 = ut.toColor(t6);
    }
    t6 = ["literal", t6];
  }
  if (!Array.isArray(t6) || 0 === t6.length) throw new Error("Expression must be a non empty array");
  const n2 = t6[0];
  if ("string" != typeof n2) throw new Error("First element of expression must be a string");
  const a6 = gt[n2];
  if (void 0 === a6) throw new Error(`Invalid expression operator "${n2}"`);
  if (!a6) throw new Error(`Unimplemented expression operator "${n2}"`);
  return a6.parse(t6, e3, r3);
}
var gt = { array: lt, boolean: lt, collator: null, format: null, image: null, literal: ct, number: lt, "number-format": null, object: lt, string: lt, "to-boolean": ut, "to-color": ut, "to-number": ut, "to-string": ut, typeof: ht, accumulated: null, "feature-state": null, "geometry-type": b2, id: v, "line-progress": null, properties: d2, at: O, get: F, has: G, in: V, "index-of": D, length: H2, slice: J, "!": N3, "!=": M, "<": k2, "<=": A, "==": $, ">": j, ">=": q, all: C3, any: R3, case: I2, coalesce: L2, match: U2, within: null, interpolate: P2, "interpolate-hcl": P2, "interpolate-lab": P2, step: S, let: B, var: T3, concat: st, downcase: nt, "is-supported-script": null, "resolved-locale": null, upcase: nt, rgb: at, rgba: ot, "to-rgba": it, "-": W, "*": X, "/": Y, "%": Z, "^": tt, "+": et, abs: rt, acos: rt, asin: rt, atan: rt, ceil: rt, cos: rt, e: rt, floor: rt, ln: rt, ln2: rt, log10: rt, log2: rt, max: rt, min: rt, pi: rt, round: rt, sin: rt, sqrt: rt, tan: rt, zoom: x, "heatmap-density": null, "has-id": K, none: z };

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/Filter.js
var t5 = class _t {
  constructor(e3) {
    this._expression = e3;
  }
  filter(e3, r3) {
    if (!this._expression) return true;
    try {
      return this._expression.evaluate(e3, r3);
    } catch (t6) {
      return console.log(t6.message), true;
    }
  }
  static createFilter(n2) {
    if (!n2) return null;
    this.isLegacyFilter(n2) && (n2 = this.convertLegacyFilter(n2));
    try {
      const s = pt(n2, null, i5);
      return new _t(s);
    } catch (s) {
      return console.log(s.message), null;
    }
  }
  static isLegacyFilter(e3) {
    if (!Array.isArray(e3)) return true;
    if (0 === e3.length) return true;
    switch (e3[0]) {
      case "==":
      case "!=":
      case ">":
      case "<":
      case ">=":
      case "<=":
        return 3 === e3.length && "string" == typeof e3[1] && !Array.isArray(e3[2]);
      case "in":
        return e3.length >= 3 && "string" == typeof e3[1] && !Array.isArray(e3[2]);
      case "!in":
      case "none":
      case "!has":
        return true;
      case "any":
      case "all":
        for (let r3 = 1; r3 < e3.length; r3++) if (this.isLegacyFilter(e3[r3])) return true;
        return false;
      case "has":
        return 2 === e3.length && ("$id" === e3[1] || "$type" === e3[1]);
      default:
        return false;
    }
  }
  static convertLegacyFilter(e3) {
    if (!Array.isArray(e3) || 0 === e3.length) return true;
    const r3 = e3[0];
    if (1 === e3.length) return "any" !== r3;
    switch (r3) {
      case "==":
        return _t.convertComparison("==", e3[1], e3[2]);
      case "!=":
        return _t.negate(_t.convertComparison("==", e3[1], e3[2]));
      case ">":
      case "<":
      case ">=":
      case "<=":
        return _t.convertComparison(r3, e3[1], e3[2]);
      case "in":
        return _t.convertIn(e3[1], e3.slice(2));
      case "!in":
        return _t.negate(_t.convertIn(e3[1], e3.slice(2)));
      case "any":
      case "all":
      case "none":
        return _t.convertCombining(r3, e3.slice(1));
      case "has":
        return _t.convertHas(e3[1]);
      case "!has":
        return _t.negate(_t.convertHas(e3[1]));
      default:
        throw new Error("Unexpected legacy filter.");
    }
  }
  static convertComparison(e3, r3, t6) {
    switch (r3) {
      case "$type":
        return [e3, ["geometry-type"], t6];
      case "$id":
        return [e3, ["id"], t6];
      default:
        return [e3, ["get", r3], t6];
    }
  }
  static convertIn(e3, r3) {
    switch (e3) {
      case "$type":
        return ["in", ["geometry-type"], ["literal", r3]];
      case "$id":
        return ["in", ["id"], ["literal", r3]];
      default:
        return ["in", ["get", e3], ["literal", r3]];
    }
  }
  static convertHas(e3) {
    switch (e3) {
      case "$type":
        return true;
      case "$id":
        return ["has-id"];
      default:
        return ["has", e3];
    }
  }
  static convertCombining(e3, r3) {
    return [e3].concat(r3.map(this.convertLegacyFilter));
  }
  static negate(e3) {
    return ["!", e3];
  }
};

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleProperty.js
var h2 = class _h {
  constructor(t6, e3) {
    let o2;
    switch (this.isDataDriven = false, this.interpolator = null, t6.type) {
      case "number":
      case "color":
        o2 = true;
        break;
      case "array":
        o2 = "number" === t6.value;
        break;
      default:
        o2 = false;
    }
    if (null == e3 && (e3 = t6.default), Array.isArray(e3) && e3.length > 0 && gt[e3[0]]) {
      const r3 = { number: e2, color: o, string: t4, boolean: i5, enum: t4 };
      try {
        const o3 = "array" === t6.type ? a5(r3[t6.value] || u, t6.length) : r3[t6.type], u2 = pt(e3, null, o3);
        this.getValue = this._buildExpression(u2, t6), this.isDataDriven = true, u2 instanceof P2 && u2.input instanceof x && (this.interpolator = u2);
      } catch (m) {
        console.log(m.message), this.getValue = this._buildSimple(t6.default);
      }
      return;
    }
    o2 && "interval" === e3.type && (o2 = false);
    const h3 = (e3 == null ? void 0 : e3.stops) && e3.stops.length > 0;
    if (h3) for (const r3 of e3.stops) r3[1] = this._validate(r3[1], t6);
    if (this.isDataDriven = !!e3 && !!e3.property, this.isDataDriven) if (void 0 !== e3.default && (e3.default = this._validate(e3.default, t6)), h3) switch (e3.type) {
      case "identity":
        this.getValue = this._buildIdentity(e3, t6);
        break;
      case "categorical":
        this.getValue = this._buildCategorical(e3, t6);
        break;
      default:
        this.getValue = o2 ? this._buildInterpolate(e3, t6) : this._buildInterval(e3, t6);
    }
    else this.getValue = this._buildIdentity(e3, t6);
    else h3 ? this.getValue = o2 ? this._buildZoomInterpolate(e3) : this._buildZoomInterval(e3) : (e3 = this._validate(e3, t6), this.getValue = this._buildSimple(e3));
  }
  _validate(t6, e3) {
    if ("number" === e3.type) {
      if (null != e3.minimum && t6 < e3.minimum) return e3.minimum;
      if (null != e3.maximum && t6 > e3.maximum) return e3.maximum;
    } else "color" === e3.type ? t6 = _h._parseColor(t6) : "enum" === e3.type ? "string" == typeof t6 && (t6 = e3.values.indexOf(t6)) : "array" === e3.type && "enum" === e3.value ? t6 = t6.map((t7) => "string" == typeof t7 ? e3.values.indexOf(t7) : t7) : "string" === e3.type && (t6 = d(t6));
    return t6;
  }
  _buildSimple(t6) {
    return () => t6;
  }
  _buildExpression(t6, e3) {
    return (r3, i6) => {
      try {
        const l5 = t6.evaluate(i6, r3);
        return void 0 === l5 ? e3.default : this._validate(l5, e3);
      } catch (l5) {
        return console.log(l5.message), e3.default;
      }
    };
  }
  _buildIdentity(t6, e3) {
    return (r3, i6) => {
      let l5;
      return i6 && (l5 = i6.values[t6.property]), void 0 !== l5 && (l5 = this._validate(l5, e3)), null != l5 ? l5 : void 0 !== t6.default ? t6.default : e3.default;
    };
  }
  _buildCategorical(t6, e3) {
    return (r3, i6) => {
      let l5;
      return i6 && (l5 = i6.values[t6.property]), l5 = this._categorical(l5, t6.stops), void 0 !== l5 ? l5 : void 0 !== t6.default ? t6.default : e3.default;
    };
  }
  _buildInterval(t6, e3) {
    return (r3, i6) => {
      let l5;
      return i6 && (l5 = i6.values[t6.property]), "number" == typeof l5 ? this._interval(l5, t6.stops) : void 0 !== t6.default ? t6.default : e3.default;
    };
  }
  _buildInterpolate(t6, e3) {
    return (r3, i6) => {
      let l5;
      return i6 && (l5 = i6.values[t6.property]), "number" == typeof l5 ? this._interpolate(l5, t6.stops, t6.base || 1) : void 0 !== t6.default ? t6.default : e3.default;
    };
  }
  _buildZoomInterpolate(t6) {
    return (e3) => this._interpolate(e3, t6.stops, t6.base || 1);
  }
  _buildZoomInterval(t6) {
    return (e3) => this._interval(e3, t6.stops);
  }
  _categorical(t6, e3) {
    const r3 = e3.length;
    for (let i6 = 0; i6 < r3; i6++) if (e3[i6][0] === t6) return e3[i6][1];
  }
  _interval(t6, e3) {
    const r3 = e3.length;
    let i6 = 0;
    for (let l5 = 0; l5 < r3 && e3[l5][0] <= t6; l5++) i6 = l5;
    return e3[i6][1];
  }
  _interpolate(t6, r3, i6) {
    let l5, a6;
    const s = r3.length;
    for (let e3 = 0; e3 < s; e3++) {
      const i7 = r3[e3];
      if (!(i7[0] <= t6)) {
        a6 = i7;
        break;
      }
      l5 = i7;
    }
    if (l5 && a6) {
      const r4 = a6[0] - l5[0], s2 = t6 - l5[0], n2 = 1 === i6 ? s2 / r4 : (i6 ** s2 - 1) / (i6 ** r4 - 1);
      if (Array.isArray(l5[1])) {
        const t7 = l5[1], r5 = a6[1], i7 = [];
        for (let l6 = 0; l6 < t7.length; l6++) i7.push(p(t7[l6], r5[l6], n2));
        return i7;
      }
      return p(l5[1], a6[1], n2);
    }
    return l5 ? l5[1] : a6 ? a6[1] : void 0;
  }
  static _isEmpty(t6) {
    for (const e3 in t6) if (t6.hasOwnProperty(e3)) return false;
    return true;
  }
  static _parseColor(e3) {
    return Array.isArray(e3) ? e3 : ("string" == typeof e3 && (e3 = new h(e3)), e3 instanceof h && !this._isEmpty(e3) ? h.toUnitRGBA(e3) : void 0);
  }
};

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleLayer.js
var d3 = 8;
var _2;
!function(t6) {
  t6[t6.BUTT = 0] = "BUTT", t6[t6.ROUND = 1] = "ROUND", t6[t6.SQUARE = 2] = "SQUARE", t6[t6.UNKNOWN = 4] = "UNKNOWN";
}(_2 || (_2 = {}));
var L3 = class {
  constructor(t6, i6, e3, a6, o2, r3) {
    this.layer = t6, this.feature = i6, this.bounds = e3, this.normalizationRatio = a6, this.normalizationOffsetX = o2, this.normalizationOffsetY = r3;
  }
};
var T4 = class {
  constructor(t6, i6, e3, a6) {
    switch (this.type = t6, this.typeName = i6.type, this.id = i6.id, this.source = i6.source, this.sourceLayer = i6["source-layer"], this.minzoom = i6.minzoom, this.maxzoom = i6.maxzoom, this.filter = i6.filter, this.layout = i6.layout, this.paint = i6.paint, this.z = e3, this.uid = a6, t6) {
      case a2.BACKGROUND:
        this._layoutDefinition = f.backgroundLayoutDefinition, this._paintDefinition = f.backgroundPaintDefinition;
        break;
      case a2.FILL:
        this._layoutDefinition = f.fillLayoutDefinition, this._paintDefinition = f.fillPaintDefinition;
        break;
      case a2.LINE:
        this._layoutDefinition = f.lineLayoutDefinition, this._paintDefinition = f.linePaintDefinition;
        break;
      case a2.SYMBOL:
        this._layoutDefinition = f.symbolLayoutDefinition, this._paintDefinition = f.symbolPaintDefinition;
        break;
      case a2.CIRCLE:
        this._layoutDefinition = f.circleLayoutDefinition, this._paintDefinition = f.circlePaintDefinition;
    }
    this._layoutProperties = this._parseLayout(this.layout), this._paintProperties = this._parsePaint(this.paint);
  }
  getFeatureFilter() {
    return void 0 !== this._featureFilter ? this._featureFilter : this._featureFilter = t5.createFilter(this.filter);
  }
  getLayoutProperty(t6) {
    return this._layoutProperties[t6];
  }
  getPaintProperty(t6) {
    return this._paintProperties[t6];
  }
  getLayoutValue(t6, i6, e3) {
    let a6;
    const o2 = this._layoutProperties[t6];
    return o2 && (a6 = o2.getValue(i6, e3)), void 0 === a6 && (a6 = this._layoutDefinition[t6].default), a6;
  }
  getPaintValue(t6, i6, e3) {
    let a6;
    const o2 = this._paintProperties[t6];
    return o2 && (a6 = o2.getValue(i6, e3)), void 0 === a6 && (a6 = this._paintDefinition[t6].default), a6;
  }
  isPainterDataDriven() {
    const t6 = this._paintProperties;
    if (t6) {
      for (const i6 in t6) if (t6[i6].isDataDriven) return true;
    }
    return false;
  }
  isIntersectingFeature(t6, i6, e3, a6, o2, r3, n2) {
    return false;
  }
  getFeatureInflatedBounds(t6, i6, e3, a6) {
    return null;
  }
  _parseLayout(t6) {
    const i6 = {};
    for (const e3 in t6) {
      const a6 = this._layoutDefinition[e3];
      a6 && (i6[e3] = new h2(a6, t6[e3]));
    }
    return i6;
  }
  _parsePaint(t6) {
    const i6 = {};
    for (const e3 in t6) {
      const a6 = this._paintDefinition[e3];
      a6 && (i6[e3] = new h2(a6, t6[e3]));
    }
    return i6;
  }
  computeAttributesKey(t6, i6, e3, a6) {
    let o2 = 0, r3 = 0;
    for (const n2 of i6) {
      let t7 = 3;
      if (!n2 || n2 !== a6) {
        const i7 = e3[n2], { isLayout: a7, isOptional: o3 } = i7, r4 = a7 ? this.getLayoutProperty(n2) : this.getPaintProperty(n2);
        t7 = (r4 == null ? void 0 : r4.interpolator) ? 2 : (r4 == null ? void 0 : r4.isDataDriven) ? 1 : o3 && !r4 ? 3 : 0;
      }
      r3 |= t7 << o2, o2 += 2;
    }
    return r3 << 3 | t6;
  }
};
var V2 = class extends T4 {
  constructor(t6, e3, a6, o2) {
    super(t6, e3, a6, o2), this.backgroundMaterial = new T(this.computeAttributesKey(L.BACKGROUND, T.ATTRIBUTES, T.ATTRIBUTES_INFO));
  }
};
var v2 = class extends T4 {
  constructor(t6, e3, a6, o2) {
    super(t6, e3, a6, o2);
    const r3 = this.getPaintProperty("fill-color"), n2 = this.getPaintProperty("fill-opacity"), s = this.getPaintProperty("fill-pattern");
    this.hasDataDrivenColor = r3 == null ? void 0 : r3.isDataDriven, this.hasDataDrivenOpacity = n2 == null ? void 0 : n2.isDataDriven, this.hasDataDrivenFill = this.hasDataDrivenColor || this.hasDataDrivenOpacity || (s == null ? void 0 : s.isDataDriven);
    const u2 = this.getPaintProperty("fill-outline-color");
    this.outlineUsesFillColor = !u2, this.hasDataDrivenOutlineColor = u2 == null ? void 0 : u2.isDataDriven, this.hasDataDrivenOutline = u2 ? u2.isDataDriven : !!r3 && r3.isDataDriven, this.hasDataDrivenOutline = (u2 ? this.hasDataDrivenOutlineColor : this.hasDataDrivenColor) || this.hasDataDrivenOpacity, this.fillMaterial = new l2(this.computeAttributesKey(L.FILL, l2.ATTRIBUTES, l2.ATTRIBUTES_INFO)), this.outlineMaterial = new T2(this.computeAttributesKey(L.OUTLINE, this.outlineUsesFillColor ? T2.ATTRIBUTES_FILL : T2.ATTRIBUTES_OUTLINE, this.outlineUsesFillColor ? T2.ATTRIBUTES_INFO_FILL : T2.ATTRIBUTES_INFO_OUTLINE), this.outlineUsesFillColor);
  }
  getFeatureInflatedBounds(t6, i6, e3, a6) {
    const o2 = R4(t6);
    if (!o2) return null;
    const r3 = this.getPaintValue("fill-translate", i6, t6), n2 = a6 * Math.max(r3[0], r3[1]);
    return o2[0] -= n2, o2[2] -= n2, o2[1] += n2, o2[3] += n2, o2;
  }
  isIntersectingFeature(t6, i6, r3, n2, s, l5, h3) {
    const u2 = n2.getGeometry();
    if (!u2) return false;
    const p2 = d3 / h3.normalizationRatio;
    t6 = t6 / h3.normalizationRatio + h3.normalizationOffsetX, i6 = i6 / h3.normalizationRatio + h3.normalizationOffsetY;
    const g = b(this.getPaintValue("fill-translate", s, n2), this.getPaintValue("fill-translate-anchor", s, n2), l5, d3);
    t6 -= p2 * g.x, i6 -= p2 * g.y;
    return !!I(t6, i6, u2) || N(t6, i6, u2, p2 * r3);
  }
};
var x2 = class extends T4 {
  constructor(t6, e3, a6, o2) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    super(t6, e3, a6, o2);
    const r3 = this.getPaintProperty("line-pattern");
    if (this.lineMaterial = new i3(this.computeAttributesKey(L.LINE, i3.ATTRIBUTES, i3.ATTRIBUTES_INFO, r3 ? "line-dasharray" : "")), this.hasDataDrivenLine = ((_a = this.getPaintProperty("line-blur")) == null ? void 0 : _a.isDataDriven) || ((_b = this.getPaintProperty("line-color")) == null ? void 0 : _b.isDataDriven) || ((_c = this.getPaintProperty("line-gap-width")) == null ? void 0 : _c.isDataDriven) || ((_d = this.getPaintProperty("line-offset")) == null ? void 0 : _d.isDataDriven) || ((_e = this.getPaintProperty("line-opacity")) == null ? void 0 : _e.isDataDriven) || ((_f = this.getPaintProperty("line-pattern")) == null ? void 0 : _f.isDataDriven) || ((_g = this.getPaintProperty("line-dasharray")) == null ? void 0 : _g.isDataDriven) || ((_h = this.getLayoutProperty("line-cap")) == null ? void 0 : _h.isDataDriven) || ((_i = this.getPaintProperty("line-width")) == null ? void 0 : _i.isDataDriven), this.canUseThinTessellation = false, !this.hasDataDrivenLine) {
      const t7 = this.getPaintProperty("line-width");
      if (!t7 || "number" == typeof t7 && 0.5 * t7 < R) {
        const t8 = this.getPaintProperty("line-offset");
        (!t8 || "number" == typeof t8 && 0 === t8) && (this.canUseThinTessellation = true);
      }
    }
  }
  getDashKey(t6, i6) {
    let e3;
    switch (i6) {
      case _2.BUTT:
        e3 = "Butt";
        break;
      case _2.ROUND:
        e3 = "Round";
        break;
      case _2.SQUARE:
        e3 = "Square";
        break;
      default:
        e3 = "Butt";
    }
    return `dasharray-[${t6.toString()}]-${e3}`;
  }
  getFeatureInflatedBounds(t6, i6, e3, a6) {
    const o2 = R4(t6);
    if (!o2) return null;
    const r3 = this.getPaintValue("line-translate", i6, t6), n2 = a6 * Math.max(r3[0], r3[1]);
    o2[0] -= n2, o2[2] -= n2, o2[1] += n2, o2[3] += n2;
    const s = a6 * Math.abs(this.getPaintValue("line-offset", i6, t6) || 0), l5 = a6 * (this.getPaintValue("line-width", i6, t6) / 2);
    return o2[0] -= s + l5, o2[1] -= s + l5, o2[2] += s + l5, o2[3] += s + l5, o2;
  }
  isIntersectingFeature(t6, i6, a6, n2, s, l5, h3) {
    let u2 = n2.getGeometry();
    if (!u2) return false;
    const p2 = d3 / h3.normalizationRatio;
    t6 = t6 / h3.normalizationRatio + h3.normalizationOffsetX, i6 = i6 / h3.normalizationRatio + h3.normalizationOffsetY;
    const g = b(this.getPaintValue("line-translate", s, n2), this.getPaintValue("line-translate-anchor", s, n2), l5, d3);
    t6 -= p2 * g.x, i6 -= p2 * g.y;
    const c3 = p2 * this.getPaintValue("line-offset", s, n2) || 0;
    0 !== c3 && (u2 = P(u2, -c3));
    const y2 = this.getPaintValue("line-width", s, n2);
    return N(t6, i6, u2, p2 * (a6 + y2 / 2));
  }
};
var I3 = class extends T4 {
  constructor(t6, e3, a6, o2) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    super(t6, e3, a6, o2), this.iconMaterial = new i4(this.computeAttributesKey(L.ICON, i4.ATTRIBUTES, i4.ATTRIBUTES_INFO)), this.textMaterial = new c(this.computeAttributesKey(L.TEXT, c.ATTRIBUTES, c.ATTRIBUTES_INFO)), this.hasDataDrivenIcon = ((_a = this.getPaintProperty("icon-color")) == null ? void 0 : _a.isDataDriven) || ((_b = this.getPaintProperty("icon-halo-blur")) == null ? void 0 : _b.isDataDriven) || ((_c = this.getPaintProperty("icon-halo-color")) == null ? void 0 : _c.isDataDriven) || ((_d = this.getPaintProperty("icon-halo-width")) == null ? void 0 : _d.isDataDriven) || ((_e = this.getPaintProperty("icon-opacity")) == null ? void 0 : _e.isDataDriven) || ((_f = this.getLayoutProperty("icon-size")) == null ? void 0 : _f.isDataDriven), this.hasDataDrivenText = ((_g = this.getPaintProperty("text-color")) == null ? void 0 : _g.isDataDriven) || ((_h = this.getPaintProperty("text-halo-blur")) == null ? void 0 : _h.isDataDriven) || ((_i = this.getPaintProperty("text-halo-color")) == null ? void 0 : _i.isDataDriven) || ((_j = this.getPaintProperty("text-halo-width")) == null ? void 0 : _j.isDataDriven) || ((_k = this.getPaintProperty("text-opacity")) == null ? void 0 : _k.isDataDriven) || ((_l = this.getLayoutProperty("text-size")) == null ? void 0 : _l.isDataDriven);
  }
};
var A2 = class extends T4 {
  constructor(t6, e3, a6, o2) {
    super(t6, e3, a6, o2), this.circleMaterial = new t3(this.computeAttributesKey(L.CIRCLE, t3.ATTRIBUTES, t3.ATTRIBUTES_INFO));
  }
  getFeatureInflatedBounds(t6, i6, e3, a6) {
    const o2 = R4(t6);
    if (!o2) return null;
    const r3 = this.getPaintValue("circle-translate", i6, t6), n2 = Math.max(r3[0], r3[1]);
    o2[0] -= n2, o2[2] -= n2, o2[1] += n2, o2[3] += n2;
    const s = a6 * (d3 * (this.getPaintValue("circle-radius", i6, t6) + this.getPaintValue("circle-stroke-width", i6, t6)) / 2);
    return o2[0] -= s, o2[1] -= s, o2[2] += s, o2[3] += s, o2;
  }
  isIntersectingFeature(t6, i6, a6, o2, r3, n2, s) {
    const l5 = o2.getGeometry();
    if (!l5) return false;
    const h3 = d3 / s.normalizationRatio;
    t6 = t6 / s.normalizationRatio + s.normalizationOffsetX, i6 = i6 / s.normalizationRatio + s.normalizationOffsetY, a6 *= h3;
    const u2 = b(this.getPaintValue("circle-translate", r3, o2), this.getPaintValue("circle-translate-anchor", r3, o2), n2, h3), p2 = h3 * (this.getPaintValue("circle-radius", r3, o2) + this.getPaintValue("circle-stroke-width", r3, o2));
    let g, c3;
    for (const e3 of l5) if (e3) for (const o3 of e3) {
      g = o3.x + u2.x, c3 = o3.y + u2.y;
      if (Math.sqrt((t6 - g) * (t6 - g) + (i6 - c3) * (i6 - c3)) - a6 <= p2) return true;
    }
    return false;
  }
};
var U3 = class {
  constructor(t6, i6, e3) {
    let a6;
    this.allowOverlap = t6.getLayoutValue("icon-allow-overlap", i6), this.ignorePlacement = t6.getLayoutValue("icon-ignore-placement", i6), this.keepUpright = t6.getLayoutValue("icon-keep-upright", i6), this.optional = t6.getLayoutValue("icon-optional", i6), this.rotationAlignment = t6.getLayoutValue("icon-rotation-alignment", i6), this.rotationAlignment === l.AUTO && (this.rotationAlignment = e3 ? l.MAP : l.VIEWPORT), a6 = t6.getLayoutProperty("icon-anchor"), (a6 == null ? void 0 : a6.isDataDriven) ? this._anchorProp = a6 : this.anchor = t6.getLayoutValue("icon-anchor", i6), a6 = t6.getLayoutProperty("icon-offset"), (a6 == null ? void 0 : a6.isDataDriven) ? this._offsetProp = a6 : this.offset = t6.getLayoutValue("icon-offset", i6), a6 = t6.getLayoutProperty("icon-padding"), (a6 == null ? void 0 : a6.isDataDriven) ? this._paddingProp = a6 : this.padding = t6.getLayoutValue("icon-padding", i6), a6 = t6.getLayoutProperty("icon-rotate"), (a6 == null ? void 0 : a6.isDataDriven) ? this._rotateProp = a6 : this.rotate = t6.getLayoutValue("icon-rotate", i6), a6 = t6.getLayoutProperty("icon-size"), (a6 == null ? void 0 : a6.isDataDriven) ? this._sizeProp = a6 : this.size = t6.getLayoutValue("icon-size", i6);
  }
  update(t6, i6) {
    this._anchorProp && (this.anchor = this._anchorProp.getValue(t6, i6)), this._offsetProp && (this.offset = this._offsetProp.getValue(t6, i6)), this._paddingProp && (this.padding = this._paddingProp.getValue(t6, i6)), this._rotateProp && (this.rotate = this._rotateProp.getValue(t6, i6)), this._sizeProp && (this.size = this._sizeProp.getValue(t6, i6));
  }
};
var O2 = class {
  constructor(t6, i6, e3) {
    let a6;
    this.allowOverlap = t6.getLayoutValue("text-allow-overlap", i6), this.ignorePlacement = t6.getLayoutValue("text-ignore-placement", i6), this.keepUpright = t6.getLayoutValue("text-keep-upright", i6), this.optional = t6.getLayoutValue("text-optional", i6), this.rotationAlignment = t6.getLayoutValue("text-rotation-alignment", i6), this.rotationAlignment === l.AUTO && (this.rotationAlignment = e3 ? l.MAP : l.VIEWPORT), a6 = t6.getLayoutProperty("text-anchor"), (a6 == null ? void 0 : a6.isDataDriven) ? this._anchorProp = a6 : this.anchor = t6.getLayoutValue("text-anchor", i6), a6 = t6.getLayoutProperty("text-justify"), (a6 == null ? void 0 : a6.isDataDriven) ? this._justifyProp = a6 : this.justify = t6.getLayoutValue("text-justify", i6), a6 = t6.getLayoutProperty("text-letter-spacing"), (a6 == null ? void 0 : a6.isDataDriven) ? this._letterSpacingProp = a6 : this.letterSpacing = t6.getLayoutValue("text-letter-spacing", i6), a6 = t6.getLayoutProperty("text-line-height"), (a6 == null ? void 0 : a6.isDataDriven) ? this._lineHeightProp = a6 : this.lineHeight = t6.getLayoutValue("text-line-height", i6), a6 = t6.getLayoutProperty("text-max-angle"), (a6 == null ? void 0 : a6.isDataDriven) ? this._maxAngleProp = a6 : this.maxAngle = t6.getLayoutValue("text-max-angle", i6), a6 = t6.getLayoutProperty("text-max-width"), (a6 == null ? void 0 : a6.isDataDriven) ? this._maxWidthProp = a6 : this.maxWidth = t6.getLayoutValue("text-max-width", i6), a6 = t6.getLayoutProperty("text-offset"), (a6 == null ? void 0 : a6.isDataDriven) ? this._offsetProp = a6 : this.offset = t6.getLayoutValue("text-offset", i6), a6 = t6.getLayoutProperty("text-padding"), (a6 == null ? void 0 : a6.isDataDriven) ? this._paddingProp = a6 : this.padding = t6.getLayoutValue("text-padding", i6), a6 = t6.getLayoutProperty("text-rotate"), (a6 == null ? void 0 : a6.isDataDriven) ? this._rotateProp = a6 : this.rotate = t6.getLayoutValue("text-rotate", i6), a6 = t6.getLayoutProperty("text-size"), (a6 == null ? void 0 : a6.isDataDriven) ? this._sizeProp = a6 : this.size = t6.getLayoutValue("text-size", i6), a6 = t6.getLayoutProperty("text-writing-mode"), (a6 == null ? void 0 : a6.isDataDriven) ? this._writingModeProp = a6 : this.writingMode = t6.getLayoutValue("text-writing-mode", i6);
  }
  update(t6, i6) {
    this._anchorProp && (this.anchor = this._anchorProp.getValue(t6, i6)), this._justifyProp && (this.justify = this._justifyProp.getValue(t6, i6)), this._letterSpacingProp && (this.letterSpacing = this._letterSpacingProp.getValue(t6, i6)), this._lineHeightProp && (this.lineHeight = this._lineHeightProp.getValue(t6, i6)), this._maxAngleProp && (this.maxAngle = this._maxAngleProp.getValue(t6, i6)), this._maxWidthProp && (this.maxWidth = this._maxWidthProp.getValue(t6, i6)), this._offsetProp && (this.offset = this._offsetProp.getValue(t6, i6)), this._paddingProp && (this.padding = this._paddingProp.getValue(t6, i6)), this._rotateProp && (this.rotate = this._rotateProp.getValue(t6, i6)), this._sizeProp && (this.size = this._sizeProp.getValue(t6, i6)), this._writingModeProp && (this.writingMode = this._writingModeProp.getValue(t6, i6));
  }
};
function R4(i6) {
  const e3 = i6 == null ? void 0 : i6.getGeometry();
  if (null == e3) return null;
  let a6 = 1 / 0, o2 = 1 / 0, r3 = -1 / 0, n2 = -1 / 0;
  for (const t6 of e3) if (t6) for (const i7 of t6) a6 = Math.min(a6, i7.x), o2 = Math.min(o2, i7.y), r3 = Math.max(r3, i7.x), n2 = Math.max(n2, i7.y);
  return a(a6, o2, r3, n2);
}

// node_modules/@arcgis/core/views/2d/engine/vectorTiles/style/StyleRepository.js
var l4 = class _l {
  constructor(t6) {
    if (this._style = t6, this.backgroundBucketIds = [], this._uidToLayer = /* @__PURE__ */ new Map(), this._layerByName = {}, this._runningId = 0, t6.layers || (t6.layers = []), this.version = parseFloat(t6.version), this.layers = t6.layers.map((e3, t7, r3) => this._create(e3, t7, r3)).filter((e3) => !!e3), this.layers) for (let r3 = 0; r3 < this.layers.length; r3++) {
      const t7 = this.layers[r3];
      this._layerByName[t7.id] = t7, this._uidToLayer.set(t7.uid, t7), t7.type === a2.BACKGROUND && this.backgroundBucketIds.push(t7.id);
    }
    this._identifyRefLayers();
  }
  isPainterDataDriven(e3) {
    const t6 = this._layerByName[e3];
    return !!t6 && t6.isPainterDataDriven();
  }
  getStyleLayerId(e3) {
    return e3 >= this.layers.length ? null : this.layers[e3].id;
  }
  getStyleLayerByUID(e3) {
    return this._uidToLayer.get(e3) ?? null;
  }
  getStyleLayerIndex(e3) {
    const t6 = this._layerByName[e3];
    return t6 ? this.layers.indexOf(t6) : -1;
  }
  setStyleLayer(e3, t6) {
    if (!(e3 == null ? void 0 : e3.id)) return;
    const r3 = this._style;
    null != t6 && t6 >= this.layers.length && (t6 = this.layers.length - 1);
    let s, i6 = true;
    const a6 = this._layerByName[e3.id];
    if (a6) {
      const y2 = this.layers.indexOf(a6);
      t6 || (t6 = y2), t6 === y2 ? (i6 = false, s = _l._recreateLayer(e3, a6), this.layers[t6] = s, r3.layers[t6] = e3) : (this.layers.splice(y2, 1), r3.layers.splice(y2, 1), s = this._create(e3, t6, this.layers), this.layers.splice(t6, 0, s), r3.layers.splice(t6, 0, e3));
    } else s = this._create(e3, t6, this.layers), !t6 || t6 >= this.layers.length ? (this.layers.push(s), r3.layers.push(e3)) : (this.layers.splice(t6, 0, s), r3.layers.splice(t6, 0, e3));
    this._layerByName[e3.id] = s, this._uidToLayer.set(s.uid, s), i6 && this._recomputeZValues(), this._identifyRefLayers();
  }
  getStyleLayer(e3) {
    const t6 = this._layerByName[e3];
    return t6 ? { type: t6.typeName, id: t6.id, source: t6.source, "source-layer": t6.sourceLayer, minzoom: t6.minzoom, maxzoom: t6.maxzoom, filter: t6.filter, layout: t6.layout, paint: t6.paint } : null;
  }
  deleteStyleLayer(e3) {
    const t6 = this._layerByName[e3];
    if (t6) {
      delete this._layerByName[e3], this._uidToLayer.delete(t6.uid);
      const r3 = this.layers.indexOf(t6);
      this.layers.splice(r3, 1), this._style.layers.splice(r3, 1), this._recomputeZValues(), this._identifyRefLayers();
    }
  }
  getLayerById(e3) {
    return this._layerByName[e3];
  }
  getLayoutProperties(e3) {
    const t6 = this._layerByName[e3];
    return t6 ? t6.layout : null;
  }
  getPaintProperties(e3) {
    const t6 = this._layerByName[e3];
    return t6 ? t6.paint : null;
  }
  setPaintProperties(e3, t6) {
    const r3 = this._layerByName[e3];
    if (!r3) return;
    const s = { type: r3.typeName, id: r3.id, source: r3.source, "source-layer": r3.sourceLayer, minzoom: r3.minzoom, maxzoom: r3.maxzoom, filter: r3.filter, layout: r3.layout, paint: t6 }, i6 = _l._recreateLayer(s, r3), a6 = this.layers.indexOf(r3);
    this.layers[a6] = i6, this._style.layers[a6].paint = t6, this._layerByName[r3.id] = i6, this._uidToLayer.set(r3.uid, i6);
  }
  setLayoutProperties(e3, t6) {
    const r3 = this._layerByName[e3];
    if (!r3) return;
    const s = { type: r3.typeName, id: r3.id, source: r3.source, "source-layer": r3.sourceLayer, minzoom: r3.minzoom, maxzoom: r3.maxzoom, filter: r3.filter, layout: t6, paint: r3.paint }, i6 = _l._recreateLayer(s, r3), a6 = this.layers.indexOf(r3);
    this.layers[a6] = i6, this._style.layers[a6].layout = t6, this._layerByName[r3.id] = i6, this._uidToLayer.set(r3.uid, i6);
  }
  setStyleLayerVisibility(e3, t6) {
    const r3 = this._layerByName[e3];
    if (!r3) return;
    const s = r3.layout || {};
    s.visibility = t6;
    const i6 = { type: r3.typeName, id: r3.id, source: r3.source, "source-layer": r3.sourceLayer, minzoom: r3.minzoom, maxzoom: r3.maxzoom, filter: r3.filter, layout: s, paint: r3.paint }, a6 = _l._recreateLayer(i6, r3), y2 = this.layers.indexOf(r3);
    this.layers[y2] = a6, this._style.layers[y2].layout = s, this._layerByName[r3.id] = a6, this._uidToLayer.set(r3.uid, a6);
  }
  getStyleLayerVisibility(e3) {
    const t6 = this._layerByName[e3];
    if (!t6) return "none";
    const r3 = t6.layout;
    return (r3 == null ? void 0 : r3.visibility) ?? "visible";
  }
  _recomputeZValues() {
    const e3 = this.layers, t6 = 1 / (e3.length + 1);
    for (let r3 = 0; r3 < e3.length; r3++) e3[r3].z = 1 - (1 + r3) * t6;
  }
  _identifyRefLayers() {
    const t6 = [], r3 = [];
    let s = 0;
    for (const i6 of this.layers) {
      const a6 = i6.layout;
      if (i6.type === a2.FILL) {
        const e3 = i6;
        let r4 = i6.source + "|" + i6.sourceLayer;
        r4 += "|" + ((a6 == null ? void 0 : a6.visibility) ?? ""), r4 += "|" + i6.minzoom, r4 += "|" + i6.maxzoom, r4 += "|" + JSON.stringify(i6.filter), (e3.hasDataDrivenFill || e3.hasDataDrivenOutline) && (r4 += "|" + s), t6.push({ key: r4, layer: i6 });
      } else if (i6.type === a2.LINE) {
        const e3 = i6, t7 = i6.paint, l5 = null != t7 && (null != t7["line-pattern"] || null != t7["line-dasharray"]);
        let y2 = i6.source + "|" + i6.sourceLayer;
        y2 += "|" + ((a6 == null ? void 0 : a6.visibility) ?? ""), y2 += "|" + i6.minzoom, y2 += "|" + i6.maxzoom, y2 += "|" + JSON.stringify(i6.filter), y2 += "|" + (void 0 !== a6 ? a6["line-cap"] : ""), y2 += "|" + (void 0 !== a6 ? a6["line-join"] : ""), (e3.hasDataDrivenLine || l5) && (y2 += "|" + s), r3.push({ key: y2, layer: i6 });
      }
      ++s;
    }
    this._assignRefLayers(t6), this._assignRefLayers(r3);
  }
  _assignRefLayers(t6) {
    let r3, s;
    t6.sort((e3, t7) => e3.key < t7.key ? -1 : e3.key > t7.key ? 1 : 0);
    const i6 = t6.length;
    for (let a6 = 0; a6 < i6; a6++) {
      const l5 = t6[a6];
      if (l5.key === r3) l5.layer.refLayerId = s;
      else if (r3 = l5.key, s = l5.layer.id, l5.layer.type === a2.FILL) {
        if (!l5.layer.getPaintProperty("fill-outline-color")) for (let e3 = a6 + 1; e3 < i6; e3++) {
          const i7 = t6[e3];
          if (i7.key !== r3) break;
          if (i7.layer.getPaintProperty("fill-outline-color")) {
            t6[a6] = i7, t6[e3] = l5, s = i7.layer.id;
            break;
          }
        }
      } else if (l5.layer.type === a2.LINE) {
        let e3 = l5.layer;
        for (let y2 = a6 + 1; y2 < i6; y2++) {
          const i7 = t6[y2];
          if (i7.key !== r3) break;
          const n2 = i7.layer;
          (e3.canUseThinTessellation && !n2.canUseThinTessellation || !e3.canUseThinTessellation && (n2.getPaintProperty("line-pattern") || n2.getPaintProperty("line-dasharray"))) && (e3 = n2, t6[a6] = i7, t6[y2] = l5, s = i7.layer.id);
        }
      }
    }
  }
  _create(l5, y2, n2) {
    const o2 = 1 - (1 + y2) * (1 / (n2.length + 1)), u2 = this._runningId++;
    switch (l5.type) {
      case "background":
        return new V2(a2.BACKGROUND, l5, o2, u2);
      case "fill":
        return new v2(a2.FILL, l5, o2, u2);
      case "line":
        return new x2(a2.LINE, l5, o2, u2);
      case "symbol":
        return new I3(a2.SYMBOL, l5, o2, u2);
      case "raster":
        return console.warn(`Unsupported vector tile raster layer ${l5.id}`), null;
      case "circle":
        return new A2(a2.CIRCLE, l5, o2, u2);
    }
    return null;
  }
  static _recreateLayer(l5, y2) {
    switch (l5.type) {
      case "background":
        return new V2(a2.BACKGROUND, l5, y2.z, y2.uid);
      case "fill":
        return new v2(a2.FILL, l5, y2.z, y2.uid);
      case "line":
        return new x2(a2.LINE, l5, y2.z, y2.uid);
      case "symbol":
        return new I3(a2.SYMBOL, l5, y2.z, y2.uid);
      case "raster":
        return console.warn(`Unsupported vector tile raster layer ${l5.id}`), null;
      case "circle":
        return new A2(a2.CIRCLE, l5, y2.z, y2.uid);
    }
    return null;
  }
};

export {
  t2 as t,
  L3 as L,
  U3 as U,
  O2 as O,
  l4 as l
};
//# sourceMappingURL=chunk-VZI2TNZP.js.map
