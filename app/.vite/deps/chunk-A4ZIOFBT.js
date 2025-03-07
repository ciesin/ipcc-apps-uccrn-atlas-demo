import {
  s as s2
} from "./chunk-M6FNW7GP.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/support/imageBitmapUtils.js
async function t(t2, o2, a) {
  let c;
  try {
    c = await createImageBitmap(t2);
  } catch (l) {
    throw new s("request:server", `Unable to load ${o2}`, { url: o2, error: l });
  }
  return s2(a), c;
}
async function o(t2, o2, a, c, l) {
  let n;
  try {
    n = await createImageBitmap(t2);
  } catch (i) {
    throw new s("request:server", `Unable to load tile ${o2}/${a}/${c}`, { error: i, level: o2, row: a, col: c });
  }
  return s2(l), n;
}

export {
  t,
  o
};
//# sourceMappingURL=chunk-A4ZIOFBT.js.map
