import {
  c
} from "./chunk-P3ZDIFZS.js";
import {
  e as e2
} from "./chunk-LN4OREZH.js";
import {
  s
} from "./chunk-XUP22FSP.js";
import {
  i
} from "./chunk-36LA23CO.js";
import {
  e
} from "./chunk-D7JG6K4Y.js";
import {
  n
} from "./chunk-OULJFYM2.js";
import {
  r
} from "./chunk-JLFSX3JT.js";

// node_modules/@arcgis/core/chunks/TextureOnly.glsl.js
var a = class extends c {
  constructor() {
    super(...arguments), this.color = r(1, 1, 1);
  }
};
function n2() {
  const e3 = new i();
  return e3.include(e2), e3.fragment.uniforms.add(new s("tex", (e4) => e4.texture), new e("uColor", (e4) => e4.color)), e3.fragment.main.add(n`vec4 texColor = texture(tex, uv);
fragColor = texColor * vec4(uColor, 1.0);`), e3;
}
var m = Object.freeze(Object.defineProperty({ __proto__: null, TextureOnlyPassParameters: a, build: n2 }, Symbol.toStringTag, { value: "Module" }));

export {
  a,
  n2 as n,
  m
};
//# sourceMappingURL=chunk-6O55CGUT.js.map
