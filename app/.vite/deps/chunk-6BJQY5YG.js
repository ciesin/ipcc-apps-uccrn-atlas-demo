import {
  n
} from "./chunk-OULJFYM2.js";
import {
  e
} from "./chunk-ZAYRG6WM.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexColor.glsl.js
function e2(e3, d) {
  d.hasVertexColors ? (e3.attributes.add(e.COLOR, "vec4"), e3.varyings.add("vColor", "vec4"), e3.vertex.code.add(n`void forwardVertexColor() { vColor = color; }`), e3.vertex.code.add(n`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)) : e3.vertex.code.add(n`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`);
}

export {
  e2 as e
};
//# sourceMappingURL=chunk-6BJQY5YG.js.map
