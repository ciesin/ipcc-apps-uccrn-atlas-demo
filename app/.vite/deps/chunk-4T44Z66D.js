import {
  a
} from "./chunk-NWA7NYLF.js";

// node_modules/@arcgis/core/views/webgl/Uniform.js
var i = class {
  constructor(i2, a2, e, r, t = null) {
    if (this.name = i2, this.type = a2, this.arraySize = t, this.bind = { [a.Bind]: null, [a.Pass]: null, [a.Draw]: null }, r) switch (e) {
      case void 0:
        break;
      case a.Bind:
        this.bind[a.Bind] = r;
        break;
      case a.Pass:
        this.bind[a.Pass] = r;
        break;
      case a.Draw:
        this.bind[a.Draw] = r;
    }
  }
  equals(s) {
    return this.type === s.type && this.name === s.name && this.arraySize === s.arraySize;
  }
};

export {
  i
};
//# sourceMappingURL=chunk-4T44Z66D.js.map
