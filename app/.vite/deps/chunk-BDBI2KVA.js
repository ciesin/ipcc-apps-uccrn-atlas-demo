import {
  o2 as o,
  w
} from "./chunk-4LTV6KQ5.js";

// node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var r = Object.prototype.toString;
function o2(n) {
  const r2 = "__accessorMetadata__" in n ? w(n) : n;
  return function(...t) {
    if (t.push(r2), "number" == typeof t[2]) throw new Error("Using @cast has parameter decorator is not supported since 4.16");
    return e.apply(this, t);
  };
}
function e(t, r2, o3, e2) {
  o(t, r2).cast = e2;
}
function i(t) {
  return (r2, o3) => {
    o(r2, t).cast = r2[o3];
  };
}
function s(...t) {
  if (3 !== t.length || "string" != typeof t[1]) return 1 === t.length && "[object Function]" === r.call(t[0]) ? o2(t[0]) : 1 === t.length && "string" == typeof t[0] ? i(t[0]) : void 0;
}

export {
  s
};
//# sourceMappingURL=chunk-BDBI2KVA.js.map
