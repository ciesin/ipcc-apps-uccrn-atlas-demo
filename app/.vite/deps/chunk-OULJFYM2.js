// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/glsl.js
function n(n2, ...t2) {
  let r = "";
  for (let o = 0; o < t2.length; o++) r += n2[o] + t2[o];
  return r += n2[n2.length - 1], r;
}
function t(n2, t2, r = "") {
  return n2 ? t2 : r;
}
!function(n2) {
  function t2(n3) {
    return Math.round(n3).toString();
  }
  function r(n3) {
    return n3.toPrecision(8);
  }
  n2.int = t2, n2.float = r;
}(n);

export {
  n,
  t
};
//# sourceMappingURL=chunk-OULJFYM2.js.map
