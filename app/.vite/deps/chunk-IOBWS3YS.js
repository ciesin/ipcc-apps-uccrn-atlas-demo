import {
  p,
  w
} from "./chunk-5AJMZDUM.js";
import {
  D,
  G,
  L,
  P,
  U,
  o
} from "./chunk-CRKFUUKK.js";
import {
  l
} from "./chunk-O2L6JAHP.js";

// node_modules/@arcgis/core/views/webgl/rasterUtils.js
function f(e, o2, f2 = "nearest", m2 = false) {
  const c2 = !(m2 && "u8" === o2.pixelType), l3 = c2 ? U.FLOAT : U.UNSIGNED_BYTE, _2 = null == o2.pixels || 0 === o2.pixels.length ? null : c2 ? o2.getAsRGBAFloat() : o2.getAsRGBA(), g2 = e.capabilities.textureFloatLinear, p3 = new p();
  return p3.width = o2.width, p3.height = o2.height, p3.internalFormat = c2 ? P.RGBA32F : G.RGBA, p3.samplingMode = !g2 || "bilinear" !== f2 && "cubic" !== f2 ? L.NEAREST : L.LINEAR, p3.dataType = l3, p3.wrapMode = D.CLAMP_TO_EDGE, new w(e, p3, _2);
}
function m(e, r) {
  const { spacing: o2, offsets: f2, coefficients: m2, size: [c2, l3] } = r, _2 = o2[0] > 1, g2 = new p();
  g2.width = _2 ? 4 * c2 : c2, g2.height = l3, g2.internalFormat = P.RGBA32F, g2.dataType = U.FLOAT, g2.samplingMode = L.NEAREST, g2.wrapMode = D.CLAMP_TO_EDGE;
  const p3 = new Float32Array(_2 ? c2 * l3 * 16 : 2 * f2.length);
  if (_2 && null != m2) for (let t = 0, n = 0; t < m2.length; t++) p3[n++] = m2[t], t % 3 == 2 && (p3[n++] = 1);
  else for (let t = 0; t < l3; t++) for (let e2 = 0; e2 < c2; e2++) {
    const n = 4 * (t * c2 + e2), r2 = 2 * (e2 * l3 + t);
    p3[n] = f2[r2], p3[n + 1] = f2[r2 + 1], p3[n + 3] = -1 === f2[r2] ? 0 : 1;
  }
  return new w(e, g2, p3);
}
function c(e, t) {
  const n = new p();
  return n.internalFormat = G.RGBA, n.width = t.length / 4, n.height = 1, n.samplingMode = L.NEAREST, n.wrapMode = D.CLAMP_TO_EDGE, new w(e, n, t);
}
function l2(t, n, r, a = 1, i = true) {
  return { u_flipY: i, u_applyTransform: !!t, u_opacity: a, u_transformSpacing: t ? t.spacing : l, u_transformGridSize: t ? t.size : l, u_targetImageSize: n, u_srcImageSize: r };
}
function _(e, t) {
  return { u_colormapOffset: t || 0, u_colormapMaxIndex: e ? e.length / 4 - 1 : 0 };
}
function g(e, t) {
  return { u_scale: e, u_offset: t };
}
function p2(e) {
  return { u_bandCount: e.bandCount, u_minOutput: e.minOutput, u_maxOutput: e.maxOutput, u_minCutOff: e.minCutOff, u_maxCutOff: e.maxCutOff, u_factor: e.factor, u_useGamma: e.useGamma, u_gamma: e.gamma, u_gammaCorrection: e.gammaCorrection };
}
function A(e) {
  return { u_hillshadeType: e.hillshadeType, u_sinZcosAs: e.sinZcosAs, u_sinZsinAs: e.sinZsinAs, u_cosZs: e.cosZs, u_weights: e.weights, u_factor: e.factor, u_minValue: e.minValue, u_maxValue: e.maxValue };
}
function T(e, t) {
  const n = e.gl, r = t.glName, a = /* @__PURE__ */ new Map();
  if (null == r) return a;
  const i = n.getProgramParameter(r, n.ACTIVE_UNIFORMS);
  let o2;
  for (let s = 0; s < i; s++) o2 = n.getActiveUniform(r, s), o2 && a.set(o2.name, { location: n.getUniformLocation(r, o2.name), info: o2 });
  return a;
}
function O(e, t, n) {
  Object.keys(n).forEach((r) => {
    const a = t.get(r) || t.get(r + "[0]");
    a && E(e, r, n[r], a);
  });
}
function h(e, t, n, r) {
  n.length === r.length && (r.some((e2) => null == e2) || n.some((e2) => null == e2) || n.forEach((n2, a) => {
    t.setUniform1i(n2, a), e.bindTexture(r[a], a);
  }));
}
function E(e, t, n, r) {
  if (null === r || null == n) return false;
  const { info: a } = r;
  switch (a.type) {
    case o.FLOAT:
      a.size > 1 ? e.setUniform1fv(t, n) : e.setUniform1f(t, n);
      break;
    case o.FLOAT_VEC2:
      e.setUniform2fv(t, n);
      break;
    case o.FLOAT_VEC3:
      e.setUniform3fv(t, n);
      break;
    case o.FLOAT_VEC4:
      e.setUniform4fv(t, n);
      break;
    case o.FLOAT_MAT3:
      e.setUniformMatrix3fv(t, n);
      break;
    case o.FLOAT_MAT4:
      e.setUniformMatrix4fv(t, n);
      break;
    case o.INT:
      a.size > 1 ? e.setUniform1iv(t, n) : e.setUniform1i(t, n);
      break;
    case o.BOOL:
      e.setUniform1i(t, n ? 1 : 0);
      break;
    case o.INT_VEC2:
    case o.BOOL_VEC2:
      e.setUniform2iv(t, n);
      break;
    case o.INT_VEC3:
    case o.BOOL_VEC3:
      e.setUniform3iv(t, n);
      break;
    case o.INT_VEC4:
    case o.BOOL_VEC4:
      e.setUniform4iv(t, n);
      break;
    default:
      return false;
  }
  return true;
}

export {
  f,
  m,
  c,
  l2 as l,
  _,
  g,
  p2 as p,
  A,
  T,
  O,
  h
};
//# sourceMappingURL=chunk-IOBWS3YS.js.map
