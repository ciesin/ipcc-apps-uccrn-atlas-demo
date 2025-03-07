import {
  e
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/core/jsonMap.js
var o = class {
  constructor(o2, i2 = { ignoreUnknown: false, useNumericKeys: false }) {
    this._jsonToAPI = o2, this._options = i2, this.apiValues = [], this.jsonValues = [], this._apiToJSON = t(o2), this.apiValues = s(this._apiToJSON), this.jsonValues = s(this._jsonToAPI), this.read = (n) => this.fromJSON(n), this.write = (o3, t2, s2) => {
      const i3 = this.toJSON(o3);
      void 0 !== i3 && e(s2, i3, t2);
    }, this.write.isJSONMapWriter = true;
  }
  toJSON(n) {
    if (null == n) return null;
    if (this._apiToJSON.hasOwnProperty(n)) {
      const o2 = this._apiToJSON[n];
      return this._options.useNumericKeys ? +o2 : o2;
    }
    return this._options.ignoreUnknown ? null : n;
  }
  fromJSON(n) {
    return null != n && this._jsonToAPI.hasOwnProperty(n) ? this._jsonToAPI[n] : this._options.ignoreUnknown ? void 0 : n;
  }
};
function t(n) {
  const o2 = {};
  for (const t2 in n) o2[n[t2]] = t2;
  return o2;
}
function s(n) {
  const o2 = [];
  for (const t2 in n) o2.push(t2);
  return o2.sort(), o2;
}
function i() {
  return function(n, t2) {
    return new o(n, { ignoreUnknown: true, ...t2 });
  };
}

export {
  o,
  i
};
//# sourceMappingURL=chunk-WE4EKKVR.js.map
