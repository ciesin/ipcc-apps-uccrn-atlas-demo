import {
  N
} from "./chunk-WHV4I2Y7.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";

// node_modules/@arcgis/core/rest/support/meshFeatureAttributes.js
function n(o, n2, i2 = r) {
  return new j({ x: o[i2.originX], y: o[i2.originY], z: o[i2.originZ], spatialReference: n2 });
}
function i(t, n2 = r) {
  return new N({ translation: [t[n2.translationX], -t[n2.translationZ], t[n2.translationY]], rotationAxis: [t[n2.rotationX], -t[n2.rotationZ], t[n2.rotationY]], rotationAngle: t[n2.rotationDeg], scale: [t[n2.scaleX], t[n2.scaleZ], t[n2.scaleY]] });
}
var r = { originX: "originX", originY: "originY", originZ: "originZ", translationX: "translationX", translationY: "translationY", translationZ: "translationZ", scaleX: "scaleX", scaleY: "scaleY", scaleZ: "scaleZ", rotationX: "rotationX", rotationY: "rotationY", rotationZ: "rotationZ", rotationDeg: "rotationDeg" };

export {
  n,
  i
};
//# sourceMappingURL=chunk-Q36PLQUO.js.map
