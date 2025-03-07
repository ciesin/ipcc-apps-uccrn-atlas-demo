import {
  l2 as l
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/mesh/utils.js
function r(r2) {
  const t2 = r2.map(({ name: e, count: r3, type: t3 }) => `${e}.${r3}.${t3}`).join(",");
  return l(t2);
}
function t(e, r2, o2, a2, c, n, s) {
  if (e.primitiveName === r2) {
    let r3 = a2 == null ? void 0 : a2.readWithDefault(c, n, e[o2] && s);
    return "text" === e.type && (r3 = r3.toString()), void (e[o2] = r3);
  }
  if ("type" in e && null != e.type) {
    if (e.effects) for (const i of e.effects) t(i, r2, o2, a2, c, n, s);
    switch (e.type) {
      case "CIMPointSymbol":
      case "CIMLineSymbol":
      case "CIMPolygonSymbol":
        if (e.symbolLayers) for (const i of e.symbolLayers) t(i, r2, o2, a2, c, n, s);
        break;
      case "CIMTextSymbol":
        e.symbol && t(e.symbol, r2, o2, a2, c, n, s);
        break;
      case "CIMHatchFill":
        e.lineSymbol && t(e.lineSymbol, r2, o2, a2, c, n, s);
        break;
      case "CIMPictureMarker":
      case "CIMCharacterMarker":
      case "CIMVectorMarker":
        if (e.markerPlacement && t(e.markerPlacement, r2, o2, a2, c, n, s), "CIMVectorMarker" === e.type && e.markerGraphics) for (const i of e.markerGraphics) t(i, r2, o2, a2, c, n, s), t(i.symbol, r2, o2, a2, c, n, s);
    }
  }
}
var o = 400;
function a(e) {
  const r2 = e.width;
  return null != e.effects ? o : Math.max(1.25 * r2, 8);
}

export {
  r,
  t,
  a
};
//# sourceMappingURL=chunk-HDT7YPJI.js.map
