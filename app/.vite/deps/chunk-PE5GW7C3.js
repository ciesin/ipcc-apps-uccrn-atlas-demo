import {
  n
} from "./chunk-OULJFYM2.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/HighlightReadBitmap.glsl.js
function l(l2) {
  const { fragment: t } = l2;
  t.code.add(n`uint readChannelBits(uint channel, int highlightLevel) {
int llc = (highlightLevel & 3) << 1;
return (channel >> llc) & 3u;
}
uint readChannel(vec2 texel, int highlightLevel) {
int lic = (highlightLevel >> 2) & 1;
return uint(texel[lic] * 255.0);
}
uint readLevelBits(vec2 texel, int highlightLevel) {
return readChannelBits(readChannel(texel, highlightLevel), highlightLevel);
}`);
}

export {
  l
};
//# sourceMappingURL=chunk-PE5GW7C3.js.map
