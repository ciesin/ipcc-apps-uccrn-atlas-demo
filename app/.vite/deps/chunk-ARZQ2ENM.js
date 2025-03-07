import {
  n as n2
} from "./chunk-OULJFYM2.js";
import {
  n
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/Normals.glsl.js
function e(e2, o) {
  const n3 = e2.fragment;
  switch (n3.code.add(n2`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`), o.doubleSidedMode) {
    case i.None:
      n3.code.add(n2`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);
      break;
    case i.View:
      n3.code.add(n2`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);
      break;
    case i.WindingOrder:
      n3.code.add(n2`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);
      break;
    default:
      n(o.doubleSidedMode);
    case i.COUNT:
  }
}
var i;
!function(a) {
  a[a.None = 0] = "None", a[a.View = 1] = "View", a[a.WindingOrder = 2] = "WindingOrder", a[a.COUNT = 3] = "COUNT";
}(i || (i = {}));

export {
  e,
  i
};
//# sourceMappingURL=chunk-ARZQ2ENM.js.map
