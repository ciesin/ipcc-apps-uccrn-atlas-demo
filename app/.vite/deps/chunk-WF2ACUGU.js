import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/core/Version.js
var r = class r2 {
  constructor(t, r3, o = "") {
    this.major = t, this.minor = r3, this._context = o;
  }
  lessThan(t, r3) {
    return this.major < t || t === this.major && this.minor < r3;
  }
  greaterEqual(t, r3) {
    return !this.lessThan(t, r3);
  }
  validate(r3) {
    if (this.major !== r3.major) {
      const o = this._context && this._context + ":", e = this._context && this._context + " ";
      throw new s(o + "unsupported-version", `Required major ${e}version is '${this.major}', but got '\${version.major}.\${version.minor}'`, { version: r3 });
    }
  }
  clone() {
    return new r2(this.major, this.minor, this._context);
  }
  static parse(o, e = "") {
    const [s2, i] = o.split("."), n = /^\s*\d+\s*$/;
    if (!(s2 == null ? void 0 : s2.match) || !n.test(s2)) {
      throw new s((e && e + ":") + "invalid-version", "Expected major version to be a number, but got '${version}'", { version: o });
    }
    if (!(i == null ? void 0 : i.match) || !n.test(i)) {
      throw new s((e && e + ":") + "invalid-version", "Expected minor version to be a number, but got '${version}'", { version: o });
    }
    const a = parseInt(s2, 10), h = parseInt(i, 10);
    return new r2(a, h, e);
  }
};

export {
  r
};
//# sourceMappingURL=chunk-WF2ACUGU.js.map
