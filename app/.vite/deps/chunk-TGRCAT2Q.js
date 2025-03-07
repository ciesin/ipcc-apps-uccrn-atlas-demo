import {
  u
} from "./chunk-YVJ7MJNT.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/3d/glTF/internal/resourceUtils.js
var t = class {
  constructor(t2) {
    this.data = t2, this.type = "encoded-mesh-texture", this.encoding = u.KTX2_ENCODING;
  }
};
function n(e) {
  return "encoded-mesh-texture" === (e == null ? void 0 : e.type);
}
async function r(e) {
  const t2 = new Blob([e]), n2 = await t2.text();
  return JSON.parse(n2);
}
async function o(n2, r2) {
  if (r2 === u.KTX2_ENCODING) return new t(n2);
  const o2 = new Blob([n2], { type: r2 });
  let c = URL.createObjectURL(o2);
  switch (r2) {
    case "image/jpeg":
      c += "#.jpg";
      break;
    case "image/png":
      c += "#.png";
  }
  const s = new Image();
  if (has("esri-iPhone")) return new Promise((e, t2) => {
    const n3 = () => {
      o3(), e(s);
    }, r3 = (e2) => {
      o3(), t2(e2);
    }, o3 = () => {
      URL.revokeObjectURL(c), s.removeEventListener("load", n3), s.removeEventListener("error", r3);
    };
    s.addEventListener("load", n3), s.addEventListener("error", r3), s.src = c;
  });
  try {
    s.src = c, await s.decode();
  } catch (a) {
    console.warn("Failed decoding HTMLImageElement");
  }
  return URL.revokeObjectURL(c), s;
}

export {
  t,
  n,
  r,
  o
};
//# sourceMappingURL=chunk-TGRCAT2Q.js.map
