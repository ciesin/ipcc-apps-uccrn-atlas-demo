import {
  k
} from "./chunk-BSRIVWBN.js";

// node_modules/@arcgis/core/widgets/support/decorators/accessibleHandler.js
function t() {
  return function(n, t2) {
    if (!n[t2]) throw new TypeError(`Cannot auto bind undefined function '${String(t2)}'`);
    return { value: r(n[t2]) };
  };
}
function e(n) {
  const t2 = n == null ? void 0 : n.type;
  return n instanceof KeyboardEvent || "keyup" === t2 || "keydown" === t2 || "keypress" === t2;
}
function r(t2) {
  return function(r2, ...o) {
    e(r2) ? k(r2.key) && (r2.preventDefault(), r2.stopPropagation(), r2.target.click()) : t2.call(this, r2, ...o);
  };
}

export {
  t
};
//# sourceMappingURL=chunk-4QQ7KHFL.js.map
