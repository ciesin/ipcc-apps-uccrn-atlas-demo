import {
  c
} from "./chunk-P3ZDIFZS.js";
import {
  e
} from "./chunk-LN4OREZH.js";
import {
  i
} from "./chunk-36LA23CO.js";
import {
  o
} from "./chunk-EJHUCCX3.js";
import {
  n
} from "./chunk-OULJFYM2.js";

// node_modules/@arcgis/core/chunks/HighlightDownsample.glsl.js
var u = class extends c {
};
function o2() {
  const r = new i(), { outputs: u2, fragment: o3 } = r;
  return r.include(e), o3.uniforms.add(new o("textureInput", (e2) => e2.input)), o3.constants.add("outlineWidth", "int", Math.ceil(n2)), o3.constants.add("cellSize", "int", c2), u2.add("fragGrid", "vec2"), o3.main.add(n`ivec2 inputTextureSize = textureSize(textureInput, 0);
ivec2 cellBottomLeftCornerInput = ivec2(floor(gl_FragCoord.xy) * vec2(cellSize));
ivec2 coordMid =  cellBottomLeftCornerInput + ivec2(cellSize >> 1);
uvec2 centreTexel = uvec2( texelFetch(textureInput, coordMid, 0).rg * 255.0) & uvec2(0x55u);
float marginSquare = float(outlineWidth*outlineWidth);
uvec2 outputValue = centreTexel & uvec2(0x55u);
for(int y = -outlineWidth; y <= cellSize + outlineWidth; y+=2) {
int dy = y < 0 ? -y : y > cellSize ? y-cellSize : 0;
int xMargin = dy > 0 ? int(ceil(sqrt(marginSquare - float(dy*dy)))) : outlineWidth;
for(int x = -xMargin; x <= cellSize + xMargin; x+=2) {
ivec2 coord = cellBottomLeftCornerInput + ivec2(x, y);
uvec2[4] texels = uvec2[4] (
uvec2(texelFetch(textureInput,coord+ivec2(0,0),0).rg * 255.0) & uvec2(0x55u),
uvec2(texelFetch(textureInput,coord+ivec2(1,0),0).rg * 255.0) & uvec2(0x55u),
uvec2(texelFetch(textureInput,coord+ivec2(0,1),0).rg * 255.0) & uvec2(0x55u),
uvec2(texelFetch(textureInput,coord+ivec2(1,1),0).rg * 255.0) & uvec2(0x55u)
);
if (texels[0] == texels[1] && texels[1] == texels[2] && texels[2] == texels[3] && texels[3] ==  centreTexel) {
continue;
}
for (int i=0; i<4; ++i){
outputValue |= ((texels[i] ^ centreTexel) << 1);
outputValue |= texels[i];
}
}
}
fragGrid = vec2(outputValue) / 255.0;`), r;
}
var c2 = 32;
var n2 = 9;
var a = 0.4;
var s = Object.freeze(Object.defineProperty({ __proto__: null, HighlightDownsampleDrawParameters: u, blurSize: a, build: o2, gridCellPixelSize: c2, outlineSize: n2 }, Symbol.toStringTag, { value: "Module" }));

export {
  u,
  o2 as o,
  c2 as c,
  n2 as n,
  a,
  s
};
//# sourceMappingURL=chunk-EJARBANV.js.map
