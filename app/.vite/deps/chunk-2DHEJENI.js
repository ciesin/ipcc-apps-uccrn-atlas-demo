import {
  u
} from "./chunk-RD3QRDRK.js";
import {
  V
} from "./chunk-AJSC5XSW.js";

// node_modules/@arcgis/core/views/2d/support/highlightOptionsUtils.js
function t(i) {
  if (!i.highlights) return null;
  const h = i.highlights.findIndex((i2) => "default" === i2.name);
  return -1 === h ? null : i.highlights.items[h];
}
function g(t2, g2) {
  if (!t2.highlights) {
    if (!g2) return;
    t2.highlights = new V([new u()]);
  }
  const n = t2.highlights.findIndex((i) => "default" === i.name);
  g2 ? t2.highlights.items[n].assignFrom(g2) : (t2.highlights.removeAt(n), 0 === t2.highlights.length && (t2.highlights = null));
}

export {
  t,
  g
};
//# sourceMappingURL=chunk-2DHEJENI.js.map
