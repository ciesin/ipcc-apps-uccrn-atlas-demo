import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  W2 as W,
  z
} from "./chunk-LTDNORB5.js";
import {
  i
} from "./chunk-WE4EKKVR.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a,
  s2 as s
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  y
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/geometry/HeightModelInfo.js
var d;
var p = i()({ orthometric: "gravity-related-height", gravity_related_height: "gravity-related-height", ellipsoidal: "ellipsoidal" });
var u = p.jsonValues.slice();
y(u, "orthometric");
var g = i()({ meter: "meters", foot: "feet", "us-foot": "us-feet", "clarke-foot": "clarke-feet", "clarke-yard": "clarke-yards", "clarke-link": "clarke-links", "sears-yard": "sears-yards", "sears-foot": "sears-feet", "sears-chain": "sears-chains", "benoit-1895-b-chain": "benoit-1895-b-chains", "indian-yard": "indian-yards", "indian-1937-yard": "indian-1937-yards", "gold-coast-foot": "gold-coast-feet", "sears-1922-truncated-chain": "sears-1922-truncated-chains", "50-kilometers": "50-kilometers", "150-kilometers": "150-kilometers" });
var m2 = d = class extends S {
  constructor(e) {
    super(e), this.heightModel = "gravity-related-height", this.heightUnit = "meters", this.vertCRS = null;
  }
  writeHeightModel(e, t, r3) {
    return p.write(e, t, r3);
  }
  readHeightModel(e, t, r3) {
    const i2 = p.read(e);
    return i2 || ((r3 == null ? void 0 : r3.messages) && r3.messages.push(f(e, { context: r3 })), null);
  }
  readHeightUnit(e, t, r3) {
    const i2 = g.read(e);
    return i2 || ((r3 == null ? void 0 : r3.messages) && r3.messages.push(y2(e, { context: r3 })), null);
  }
  readHeightUnitService(e, t, r3) {
    const i2 = W(e) || g.read(e);
    return i2 || ((r3 == null ? void 0 : r3.messages) && r3.messages.push(y2(e, { context: r3 })), null);
  }
  readVertCRS(e, t) {
    return t.vertCRS || t.ellipsoid || t.geoid;
  }
  clone() {
    return new d({ heightModel: this.heightModel, heightUnit: this.heightUnit, vertCRS: this.vertCRS });
  }
  equals(e) {
    return !!e && (this === e || this.heightModel === e.heightModel && this.heightUnit === e.heightUnit && this.vertCRS === e.vertCRS);
  }
  static deriveUnitFromSR(e, t) {
    const r3 = z(t);
    return new d({ heightModel: e.heightModel, heightUnit: r3 ?? void 0, vertCRS: e.vertCRS });
  }
  write(e, t) {
    return t = { origin: "web-scene", ...t }, super.write(e, t);
  }
  static fromJSON(e) {
    if (!e) return null;
    const t = new d();
    return t.read(e, { origin: "web-scene" }), t;
  }
};
function y2(e, t) {
  return new s("height-unit:unsupported", `Height unit of value '${e}' is not supported`, t);
}
function f(e, t) {
  return new s("height-model:unsupported", `Height model of value '${e}' is not supported`, t);
}
r([m({ type: p.apiValues, constructOnly: true, json: { origins: { "web-scene": { type: u, default: "ellipsoidal", write: { isRequired: true } } } } })], m2.prototype, "heightModel", void 0), r([r2("web-scene", "heightModel")], m2.prototype, "writeHeightModel", null), r([o(["web-scene", "service"], "heightModel")], m2.prototype, "readHeightModel", null), r([m({ type: g.apiValues, constructOnly: true, json: { origins: { "web-scene": { type: g.jsonValues, write: { writer: g.write, isRequired: true } } } } })], m2.prototype, "heightUnit", void 0), r([o("web-scene", "heightUnit")], m2.prototype, "readHeightUnit", null), r([o("service", "heightUnit")], m2.prototype, "readHeightUnitService", null), r([m({ type: String, constructOnly: true, json: { origins: { "web-scene": { write: true } } } })], m2.prototype, "vertCRS", void 0), r([o("service", "vertCRS", ["vertCRS", "ellipsoid", "geoid"])], m2.prototype, "readVertCRS", null), m2 = d = r([a("esri.geometry.HeightModelInfo")], m2);
var v = m2;

export {
  v
};
//# sourceMappingURL=chunk-775V3L2A.js.map
