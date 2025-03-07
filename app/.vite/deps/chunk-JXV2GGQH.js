// node_modules/@arcgis/core/views/webgl/capabilities/DebugRendererInfo.js
function e(e2, n2) {
  const r2 = n2.debugRendererInfo && e2.getExtension("WEBGL_debug_renderer_info");
  return r2 ? { getUnmaskedRendererWebGL: () => e2.getParameter(r2.UNMASKED_RENDERER_WEBGL) } : null;
}

// node_modules/@arcgis/core/views/webgl/capabilities.js
var r;
function t() {
  return r ?? (r = l()), r;
}
var o = class {
  constructor() {
    this.available = false, this.majorPerformanceCaveat = false, this.maxTextureSize = 0, this.supportsVertexShaderSamplers = false, this.supportsHighPrecisionFragment = false, this.supportsColorBufferFloat = false, this.supportsColorBufferFloatBlend = false, this.supportsColorBufferHalfFloat = false, this.unmaskedRenderer = "unloaded";
  }
};
function n(e2) {
  if ("undefined" == typeof WebGL2RenderingContext) return null;
  const r2 = document.createElement("canvas");
  if (!r2) return null;
  let t2 = r2.getContext("webgl2", { failIfMajorPerformanceCaveat: true });
  if (null == t2 && (t2 = r2.getContext("webgl2"), null != t2 && (e2.majorPerformanceCaveat = true)), null == t2) return t2;
  e2.available = true, e2.maxTextureSize = t2.getParameter(t2.MAX_TEXTURE_SIZE), e2.supportsVertexShaderSamplers = t2.getParameter(t2.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0;
  const o2 = t2.getShaderPrecisionFormat(t2.FRAGMENT_SHADER, t2.HIGH_FLOAT);
  return o2 && (e2.supportsHighPrecisionFragment = o2.precision > 0), t2;
}
function l() {
  var _a;
  const r2 = new o(), t2 = n(r2);
  return null == t2 || (r2.supportsColorBufferFloat = null !== t2.getExtension("EXT_color_buffer_float"), r2.supportsColorBufferFloatBlend = null !== t2.getExtension("EXT_float_blend"), r2.supportsColorBufferHalfFloat = r2.supportsColorBufferFloat || null !== t2.getExtension("EXT_color_buffer_half_float"), r2.unmaskedRenderer = ((_a = e(t2, { debugRendererInfo: true })) == null ? void 0 : _a.getUnmaskedRendererWebGL()) ?? "unknown"), r2;
}

export {
  e,
  t
};
//# sourceMappingURL=chunk-JXV2GGQH.js.map
