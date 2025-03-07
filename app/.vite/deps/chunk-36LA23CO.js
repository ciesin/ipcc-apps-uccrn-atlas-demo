import {
  a
} from "./chunk-NWA7NYLF.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/views/webgl/ShaderBuilder.js
var n2 = () => n.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");
var s2 = class {
  constructor() {
    this._includedModules = /* @__PURE__ */ new Map();
  }
  include(e, t) {
    this._includedModules.has(e) ? this._includedModules.get(e) : (this._includedModules.set(e, t), e(this.builder, t));
  }
};
var i = class extends s2 {
  constructor() {
    super(...arguments), this.vertex = new c(), this.fragment = new c(), this.attributes = new h(), this.varyings = new m(), this.extensions = new _(), this.outputs = new d();
  }
  get fragmentUniforms() {
    return this.fragment.uniforms.entries;
  }
  get builder() {
    return this;
  }
  generate(e, t = false) {
    const r = this.extensions.generateSource(e), n3 = this.attributes.generateSource(e), s3 = this.varyings.generateSource(e), i2 = "vertex" === e ? this.vertex : this.fragment, o2 = i2.uniforms.generateSource(), a3 = i2.code.generateSource(), u2 = i2.main.generateSource(t), c2 = "vertex" === e ? f : g, h2 = i2.constants.generateSource(), m2 = this.outputs.generateSource(e);
    return `#version 300 es
${r.join("\n")}
${c2}
${h2.join("\n")}
${o2.join("\n")}
${n3.join("\n")}
${s3.join("\n")}
${m2.join("\n")}
${a3.join("\n")}
${u2.join("\n")}`;
  }
  generateBind(e) {
    const t = /* @__PURE__ */ new Map();
    this.vertex.uniforms.entries.forEach((e2) => {
      const n4 = e2.bind[a.Bind];
      n4 && t.set(e2.name, n4);
    }), this.fragment.uniforms.entries.forEach((e2) => {
      const n4 = e2.bind[a.Bind];
      n4 && t.set(e2.name, n4);
    });
    const n3 = Array.from(t.values()), s3 = n3.length;
    return (t2) => {
      for (let r = 0; r < s3; ++r) n3[r](e, t2);
    };
  }
  generateBindPass(e) {
    const t = /* @__PURE__ */ new Map();
    this.vertex.uniforms.entries.forEach((e2) => {
      const n4 = e2.bind[a.Pass];
      n4 && t.set(e2.name, n4);
    }), this.fragment.uniforms.entries.forEach((e2) => {
      const n4 = e2.bind[a.Pass];
      n4 && t.set(e2.name, n4);
    });
    const n3 = Array.from(t.values()), s3 = n3.length;
    return (t2, r) => {
      for (let i2 = 0; i2 < s3; ++i2) n3[i2](e, t2, r);
    };
  }
  generateBindDraw(e) {
    const t = /* @__PURE__ */ new Map();
    this.vertex.uniforms.entries.forEach((e2) => {
      const n4 = e2.bind[a.Draw];
      n4 && t.set(e2.name, n4);
    }), this.fragment.uniforms.entries.forEach((e2) => {
      const n4 = e2.bind[a.Draw];
      n4 && t.set(e2.name, n4);
    });
    const n3 = Array.from(t.values()), s3 = n3.length;
    return (t2, r, i2) => {
      for (let o2 = 0; o2 < s3; ++o2) n3[o2](e, i2, t2, r);
    };
  }
};
var o = class {
  constructor(e) {
    this._stage = e, this._entries = /* @__PURE__ */ new Map();
  }
  add(...e) {
    for (const t of e) this._add(t);
    return this._stage;
  }
  get(e) {
    return this._entries.get(e);
  }
  _add(t) {
    if (null != t) {
      if (this._entries.has(t.name) && !this._entries.get(t.name).equals(t)) throw new s(`Duplicate uniform name ${t.name} for different uniform type`);
      this._entries.set(t.name, t);
    } else n2().error(`Trying to add null Uniform from ${new Error().stack}.`);
  }
  generateSource() {
    return Array.from(this._entries.values()).map((e) => null != e.arraySize ? `uniform ${e.type} ${e.name}[${e.arraySize}];` : `uniform ${e.type} ${e.name};`);
  }
  get entries() {
    return Array.from(this._entries.values());
  }
};
var a2 = class {
  constructor(e) {
    this._stage = e, this._bodies = new Array();
  }
  add(e) {
    return this._bodies.push(e), this._stage;
  }
  generateSource(t) {
    if (this._bodies.length > 0) return [`void main() {
 ${this._bodies.join("\n") || ""} 
}`];
    if (t) throw new s("Shader does not contain main function body.");
    return [];
  }
};
var u = class {
  constructor(e) {
    this._stage = e, this._entries = new Array();
  }
  add(e) {
    return this._entries.push(e), this._stage;
  }
  generateSource() {
    return this._entries;
  }
};
var c = class extends s2 {
  constructor() {
    super(...arguments), this.uniforms = new o(this), this.main = new a2(this), this.code = new u(this), this.constants = new l(this);
  }
  get builder() {
    return this;
  }
};
var h = class {
  constructor() {
    this._entries = new Array();
  }
  add(e, t) {
    this._entries.push([e, t]);
  }
  generateSource(e) {
    return "fragment" === e ? [] : this._entries.map((e2) => `in ${e2[1]} ${e2[0]};`);
  }
};
var m = class {
  constructor() {
    this._entries = /* @__PURE__ */ new Map();
  }
  add(e, t) {
    this._entries.has(e) ? n2().warn(`Ignoring duplicate varying ${t} ${e}`) : this._entries.set(e, t);
  }
  generateSource(e) {
    const t = new Array();
    return this._entries.forEach((r, n3) => t.push("vertex" === e ? `out ${r} ${n3};` : `in ${r} ${n3};`)), t;
  }
};
var _ = class __ {
  constructor() {
    this._entries = /* @__PURE__ */ new Set();
  }
  add(e) {
    this._entries.add(e);
  }
  generateSource(e) {
    const t = "vertex" === e ? __.ALLOWLIST_VERTEX : __.ALLOWLIST_FRAGMENT;
    return Array.from(this._entries).filter((e2) => t.includes(e2)).map((e2) => `#extension ${e2} : enable`);
  }
};
_.ALLOWLIST_FRAGMENT = ["GL_EXT_shader_texture_lod", "GL_OES_standard_derivatives"], _.ALLOWLIST_VERTEX = [];
var d = class _d {
  constructor() {
    this._entries = /* @__PURE__ */ new Map();
  }
  add(e, t, r = 0) {
    const s3 = this._entries.get(r);
    (s3 == null ? void 0 : s3.name) !== e || (s3 == null ? void 0 : s3.type) !== t ? this._entries.set(r, { name: e, type: t }) : n2().warn(`Fragment shader output location ${r} occupied`);
  }
  generateSource(e) {
    if ("vertex" === e) return [];
    0 === this._entries.size && this._entries.set(0, { name: _d.DEFAULT_NAME, type: _d.DEFAULT_TYPE });
    const t = new Array();
    return this._entries.forEach((e2, r) => t.push(`layout(location = ${r}) out ${e2.type} ${e2.name};`)), t;
  }
};
d.DEFAULT_TYPE = "vec4", d.DEFAULT_NAME = "fragColor";
var l = class _l {
  constructor(e) {
    this._stage = e, this._entries = /* @__PURE__ */ new Set();
  }
  add(e, t, r) {
    let n3 = "ERROR_CONSTRUCTOR_STRING";
    switch (t) {
      case "float":
        n3 = _l._numberToFloatStr(r);
        break;
      case "int":
        n3 = _l._numberToIntStr(r);
        break;
      case "bool":
        n3 = r.toString();
        break;
      case "vec2":
        n3 = `vec2(${_l._numberToFloatStr(r[0])},                            ${_l._numberToFloatStr(r[1])})`;
        break;
      case "vec3":
        n3 = `vec3(${_l._numberToFloatStr(r[0])},                            ${_l._numberToFloatStr(r[1])},                            ${_l._numberToFloatStr(r[2])})`;
        break;
      case "vec4":
        n3 = `vec4(${_l._numberToFloatStr(r[0])},                            ${_l._numberToFloatStr(r[1])},                            ${_l._numberToFloatStr(r[2])},                            ${_l._numberToFloatStr(r[3])})`;
        break;
      case "ivec2":
        n3 = `ivec2(${_l._numberToIntStr(r[0])},                             ${_l._numberToIntStr(r[1])})`;
        break;
      case "ivec3":
        n3 = `ivec3(${_l._numberToIntStr(r[0])},                             ${_l._numberToIntStr(r[1])},                             ${_l._numberToIntStr(r[2])})`;
        break;
      case "ivec4":
        n3 = `ivec4(${_l._numberToIntStr(r[0])},                             ${_l._numberToIntStr(r[1])},                             ${_l._numberToIntStr(r[2])},                             ${_l._numberToIntStr(r[3])})`;
        break;
      case "mat2":
      case "mat3":
      case "mat4":
        n3 = `${t}(${Array.prototype.map.call(r, (e2) => _l._numberToFloatStr(e2)).join(", ")})`;
    }
    return this._entries.add(`const ${t} ${e} = ${n3};`), this._stage;
  }
  static _numberToIntStr(e) {
    return e.toFixed(0);
  }
  static _numberToFloatStr(e) {
    return Number.isInteger(e) ? e.toFixed(1) : e.toString();
  }
  generateSource() {
    return Array.from(this._entries);
  }
};
var g = "#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp int;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump int;\n  precision mediump sampler2D;\n#endif";
var f = "precision highp float;\nprecision highp sampler2D;";

export {
  i
};
//# sourceMappingURL=chunk-36LA23CO.js.map
