// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/PiUtils.glsl.js
function t(t2) {
  const a = 3.141592653589793, n = 0.3183098861837907;
  t2.vertex.constants.add("PI", "float", a), t2.fragment.constants.add("PI", "float", a), t2.fragment.constants.add("LIGHT_NORMALIZATION", "float", n), t2.fragment.constants.add("INV_PI", "float", n), t2.fragment.constants.add("HALF_PI", "float", 1.570796326794897), t2.fragment.constants.add("TWO_PI", "float", 6.28318530717958);
}

export {
  t
};
//# sourceMappingURL=chunk-ZJIETAJ2.js.map
