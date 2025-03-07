import {
  c
} from "./chunk-P3ZDIFZS.js";
import {
  s2
} from "./chunk-CWMZW2S5.js";
import {
  s
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfigurationKey.js
var s3 = class {
  constructor(t) {
    this._bits = [...t];
  }
  equals(s4) {
    return s(this._bits, s4.bits);
  }
  get code() {
    return this._code ?? (this._code = String.fromCharCode(...this._bits)), this._code;
  }
  get bits() {
    return this._bits;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration.js
var a = class extends c {
  constructor() {
    var _a2;
    super(), this._parameterBits = ((_a2 = this._parameterBits) == null ? void 0 : _a2.map(() => 0)) ?? [], this._parameterNames ?? (this._parameterNames = []);
  }
  get key() {
    return this._key ?? (this._key = new s3(this._parameterBits)), this._key;
  }
  decode(e = this.key) {
    const t = this._parameterBits;
    this._parameterBits = [...e.bits];
    const r = this._parameterNames.map((e2) => `    ${e2}: ${this[e2]}`).join("\n");
    return this._parameterBits = t, r;
  }
};
function i(t = {}) {
  return (r, a2) => {
    var _a, _b;
    r.hasOwnProperty("_parameterNames") || Object.defineProperty(r, "_parameterNames", { value: ((_a = r._parameterNames) == null ? void 0 : _a.slice()) ?? [], configurable: true, writable: true }), r.hasOwnProperty("_parameterBits") || Object.defineProperty(r, "_parameterBits", { value: ((_b = r._parameterBits) == null ? void 0 : _b.slice()) ?? [0], configurable: true, writable: true }), r._parameterNames.push(a2);
    const i2 = t.count || 2, s4 = Math.ceil(Math.log2(i2)), o = r._parameterBits;
    let n = 0;
    for (; o[n] + s4 > 16; ) n++, n >= o.length && o.push(0);
    const p = o[n], m = (1 << s4) - 1 << p;
    o[n] += s4, t.count ? Object.defineProperty(r, a2, { get() {
      return (this._parameterBits[n] & m) >> p;
    }, set(r2) {
      if (this[a2] !== r2) {
        if (this._key = null, this._parameterBits[n] = this._parameterBits[n] & ~m | +r2 << p & m, "number" != typeof r2) throw new s2(`Configuration value for ${a2} must be a number, got ${typeof r2}`);
        if (null == t.count) throw new s2(`Configuration value for ${a2} must provide a count option`);
      }
    } }) : Object.defineProperty(r, a2, { get() {
      return !!((this._parameterBits[n] & m) >> p);
    }, set(t2) {
      if (this[a2] !== t2 && (this._key = null, this._parameterBits[n] = this._parameterBits[n] & ~m | +t2 << p & m, "boolean" != typeof t2)) throw new s2(`Configuration value for ${a2} must be boolean, got ${typeof t2}`);
    } });
  };
}

export {
  a,
  i
};
//# sourceMappingURL=chunk-NQBVVSVQ.js.map
