import {
  c
} from "./chunk-EJARBANV.js";
import {
  o as o2
} from "./chunk-MDKBTLVE.js";
import {
  s
} from "./chunk-XUP22FSP.js";
import {
  i
} from "./chunk-4T44Z66D.js";
import {
  n as n2
} from "./chunk-OULJFYM2.js";
import {
  a
} from "./chunk-NWA7NYLF.js";
import {
  n
} from "./chunk-O2L6JAHP.js";
import {
  o
} from "./chunk-K35H6D4D.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Integer2PassUniform.js
var e = class extends i {
  constructor(s3, e2) {
    super(s3, "ivec2", a.Pass, (r2, o3, i2) => r2.setUniform2iv(s3, e2(o3, i2)));
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/HighlightCellGridScreenSpacePass.glsl.js
function s2(l) {
  const { vertex: s3 } = l;
  s3.uniforms.add(new s("coverageTexture", (e2) => e2.coverageTexture), new e("highlightRenderCellCount", (l2) => o(r, l2.horizontalCellCount, l2.verticalCellCount)), new e("highlightTextureResolution", ({ highlightTexture: l2 }) => o(r, l2.descriptor.width, l2.descriptor.height)), new o2("highlightLevel", (e2) => e2.highlightLevel)).constants.add("cellSize", "int", c), l.varyings.add("sUV", "vec2"), l.varyings.add("vOutlinePossible", "float"), s3.code.add(n2`const ivec2 cellVertices[4] = ivec2[4](ivec2(0,0), ivec2(1,0), ivec2(0,1), ivec2(1,1));`).main.add(n2`int cellIndex = gl_InstanceID;
int cellX = cellIndex % highlightRenderCellCount[0];
int cellY = (cellIndex - cellX) / highlightRenderCellCount[0];
ivec2 cellPos = ivec2(cellX, cellY);
uvec2 covTexel = uvec2(texelFetch(coverageTexture, cellPos, 0).rg * 255.0);
int channelIndex = (highlightLevel >> 2) & 3;
uint channelValue = covTexel[channelIndex];
int highlightIndex = (highlightLevel & 3) << 1;
bool covered = ((channelValue >> highlightIndex) & 1u) == 1u;
if (!covered) {
gl_Position = vec4(0.0);
return;
}
vOutlinePossible = (((channelValue >> highlightIndex) & 2u) == 2u) ? 1.0 : 0.0;
ivec2 iPosInCell = cellVertices[gl_VertexID];
vec2 sPos = vec2(cellPos * cellSize + iPosInCell * (cellSize));
vec2 vPos = sPos / vec2(highlightTextureResolution);
sUV = vPos;
gl_Position = vec4(2.0 * vPos - vec2(1.0), 0.0, 1.0);`);
}
var r = n();

export {
  s2 as s
};
//# sourceMappingURL=chunk-WFTPV3ZD.js.map
