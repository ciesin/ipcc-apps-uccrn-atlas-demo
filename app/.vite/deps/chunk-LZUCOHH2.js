import {
  r
} from "./chunk-6P7HXSJ6.js";

// node_modules/@arcgis/core/core/floatRGBA.js
function o(o2, r3, e2 = 0) {
  const i = r(o2, 0, f);
  for (let t = 0; t < 4; t++) r3[e2 + t] = Math.floor(256 * l(i * n[t]));
}
function r2(t, o2 = 0) {
  let r3 = 0;
  for (let n2 = 0; n2 < 4; n2++) r3 += t[o2 + n2] * e[n2];
  return r3;
}
var n = [1, 256, 65536, 16777216];
var e = [1 / 256, 1 / 65536, 1 / 16777216, 1 / 4294967296];
var f = r2(new Uint8ClampedArray([255, 255, 255, 255]));
function l(t) {
  return t - Math.floor(t);
}

export {
  o,
  r2 as r
};
//# sourceMappingURL=chunk-LZUCOHH2.js.map
