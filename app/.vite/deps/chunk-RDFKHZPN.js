import {
  t
} from "./chunk-3VWS6Q3L.js";
import {
  C
} from "./chunk-CRKFUUKK.js";

// node_modules/@arcgis/core/views/3d/support/buffer/glUtil.js
function t2(e, t3 = 0) {
  const n2 = e.stride;
  return Array.from(e.fields.keys()).map((s) => {
    var _a;
    const i = e.fields.get(s), u = i.constructor.ElementCount, f = o(i.constructor.ElementType), c = i.offset, m = ((_a = i.optional) == null ? void 0 : _a.glNormalized) ?? false;
    return new t(s, u, f, c, n2, m, t3);
  });
}
function o(e) {
  const r = n[e];
  if (r) return r;
  throw new Error("BufferType not supported in WebGL");
}
var n = { u8: C.UNSIGNED_BYTE, u16: C.UNSIGNED_SHORT, u32: C.UNSIGNED_INT, i8: C.BYTE, i16: C.SHORT, i32: C.INT, f32: C.FLOAT };

export {
  t2 as t
};
//# sourceMappingURL=chunk-RDFKHZPN.js.map
