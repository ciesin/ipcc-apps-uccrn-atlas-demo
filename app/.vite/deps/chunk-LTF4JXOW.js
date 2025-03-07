import {
  h
} from "./chunk-PV4EUSKO.js";
import {
  s
} from "./chunk-UQ4WWETM.js";
import {
  d
} from "./chunk-YSPSOPLL.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/shaders/constants.js
var i;
!function(i3) {
  i3[i3.Geographic = 0] = "Geographic", i3[i3.Arithmatic = 1] = "Arithmatic";
}(i || (i = {}));
var t = 3.14159265359 / 180;
var c = 3.14159265359 / 128;
var r2 = 180 / 3.141592654;
var a2 = 1 / 8;
var o = 1;
var h2 = 1.1;
var n = 1;
var p = 1 / 4;
var g2 = 1 / 8;
var A = 24;
var G = 8;
var s2 = 1e-5;
var u = 0.05;
var k = 1e-30;
var q = 4;
var B = 0;
var C = 2;
var D = 2;
var E = 3;
var F = 0;
var H = 3;
var I = 16777216;
var J = 1.1;
var K = 16;
var L = 128;

// node_modules/@arcgis/core/views/2d/engine/webgl/animations/instructions.js
var t2;
!function(t4) {
  t4.Local = "Local", t4.Global = "Global";
}(t2 || (t2 = {}));
var o2 = class {
  generateSource(t4) {
    const o4 = [];
    for (let a4 = 1; a4 < this.length; a4++) o4.push(`vec4 atom${a4} = texture(${t4.animationTexture}, (pointer + 0.5) / size);`), o4.push("pointer.x += 1.0;");
    for (let a4 = 0; a4 < this.ins; a4++) o4.push("top--;"), o4.push(`vec4 in${this.ins - a4 - 1} = stack[top];`);
    for (let a4 = 0; a4 < this.outs; a4++) o4.push(`vec4 out${a4};`);
    const { microcode: e4 } = this;
    for (const a4 of e4) o4.push(a4);
    for (let a4 = 0; a4 < this.outs; a4++) o4.push(`stack[top] = out${a4};`), o4.push("top++;"), o4.push(`if (top >= ${d2}) { top = ${d2 - 1}; }`);
    return o4;
  }
};
var e = 128;
var a3 = class extends o2 {
  constructor() {
    super(...arguments), this.opcode = ++e, this.length = 1, this.ins = 0, this.outs = 0, this.microcode = ["break;"];
  }
  encode() {
    return [[this.opcode, 0, 0, 0]];
  }
};
var i2 = class extends o2 {
  constructor() {
    super(...arguments), this.opcode = ++e, this.length = 1, this.ins = 0, this.outs = 1, this.microcode = ["out0 = vec4(atom0.y, atom0.y, atom0.y, atom0.y);"];
  }
  encode(t4) {
    return [[this.opcode, t4, 0, 0]];
  }
};
var n2 = class extends o2 {
  constructor() {
    super(...arguments), this.opcode = ++e, this.length = 1, this.ins = 0, this.outs = 1, this.microcode = ["out0 = vec4(atom0.yzw, 0.0);"];
  }
  encode(t4) {
    return [[this.opcode, t4[0] || 0, t4[1] || 0, t4[2] || 0]];
  }
};
var r3 = class extends o2 {
  constructor() {
    super(...arguments), this.opcode = ++e, this.length = 2, this.ins = 0, this.outs = 1, this.microcode = ["out0 = atom1;"];
  }
  encode(t4) {
    return [[this.opcode, 0, 0, 0], t4];
  }
};
function s3(t4) {
  return [`float duration = clamp(${t4.duration}, 0.05, 3600.0);`, `float startTimeOffset = ${t4.startTimeOffset};`, `float repeatDelay = ${t4.repeatDelay};`, `float timeOriginSelector = ${t4.timeOriginSelector};`, `float repeatType = ${t4.repeatType};`, `float easing = ${t4.easing};`, `float playAnimation = ${t4.playAnimation} * (1.0 - step(0.0, -${t4.duration}));`, `float reverseAnimation = ${t4.reverseAnimation};`, "float time = globalTime - (timeOriginSelector == 1.0 ? localTimeOrigin : 0.0);", "time *= playAnimation;", "time *= 1.0 - reverseAnimation * 2.0;", "float period = duration + repeatDelay;", "time += reverseAnimation == 1.0 ? (period - startTimeOffset - 0.001) : startTimeOffset + 0.001;", "float omega = time / period;", "float oi = floor(omega);", "omega = repeatType == 1.0 || repeatType == 3.0 ? omega - oi : omega;", "float of = omega * period;", "of = (clamp(of, reverseAnimation * repeatDelay, period - (1.0 - reverseAnimation) * repeatDelay) - reverseAnimation * repeatDelay) / duration;", "of = easing == 2.0 ? pow(of, 3.0) : of;", "of = easing == 3.0 ? 1.0 - pow(1.0 - of, 3.0) : of;", "of = easing == 4.0 ? of < 0.5 ? 4.0 * pow(of, 3.0) : 1.0 - pow(-2.0 * of + 2.0, 3.0) / 2.0 : of;", "bool oscillate = repeatType == 3.0 && mod(oi, 2.0) == 1.0;", `${t4.out} = oscillate ? 1.0 - of : of;`];
}
var l = { Linear: 1, EaseIn: 2, EaseOut: 3, EaseInOut: 4 };
var m2 = { Loop: 1, None: 2, Oscillate: 3 };
var c2 = { Local: 1, Global: 2 };
function p2(t4) {
  const o4 = l[t4.easing], e4 = m2[t4.repeatType], a4 = c2[t4.timeOriginSelector];
  return [[t4.duration, t4.startTimeOffset, t4.repeatDelay, a4], [e4, o4, t4.playAnimation, t4.reverseAnimation]];
}
var f = class extends o2 {
  constructor() {
    super(...arguments), this.opcode = ++e, this.length = 10, this.ins = 1, this.outs = 1, this.microcode = ["vec2 fromTranslation = atom1.xy;", "vec2 toTranslation = atom1.zw;", "float fromRotation = atom2.x;", "float toRotation = atom2.y;", "float fromScale = atom2.z;", "float toScale = atom2.w;", "bool relativeTranslation = atom9.x == 1.0;", "bool absoluteScale = atom9.y == 1.0;", "vec2 translationMultiplier = relativeTranslation ? pixelDimensions : vec2(1.0, 1.0);", "float scaleDivisor = absoluteScale ? pixelDimensions.y : 1.0;", "float fTranslation;", "{", ...s3({ duration: "atom3.x", startTimeOffset: "atom3.y", repeatDelay: "atom3.z", timeOriginSelector: "atom3.w", repeatType: "atom4.x", easing: "atom4.y", playAnimation: "atom4.z", reverseAnimation: "atom4.w", out: "fTranslation" }), "}", "float fRotation;", "{", ...s3({ duration: "atom5.x", startTimeOffset: "atom5.y", repeatDelay: "atom5.z", timeOriginSelector: "atom5.w", repeatType: "atom6.x", easing: "atom6.y", playAnimation: "atom6.z", reverseAnimation: "atom6.w", out: "fRotation" }), "}", "float fScale;", "{", ...s3({ duration: "atom7.x", startTimeOffset: "atom7.y", repeatDelay: "atom7.z", timeOriginSelector: "atom7.w", repeatType: "atom8.x", easing: "atom8.y", playAnimation: "atom8.z", reverseAnimation: "atom8.w", out: "fScale" }), "}", "vec2 aTranslation = mix(fromTranslation, toTranslation, fTranslation);", "float aRotation = mix(fromRotation, toRotation, fRotation);", "float aScale = mix(fromScale, toScale, fScale);", "vec2 pTranslation = in0.xy;", "float pRotation = in0.z;", "float pScale = in0.w;", "aTranslation *= translationMultiplier;", "aScale /= scaleDivisor;", "float rotation = pRotation + aRotation;", "float scale = pScale * aScale;", "float sin1 = sin(pRotation);", "float cos1 = cos(pRotation);", "float s1 = pScale;", "float x1 = pTranslation.x;", "float y1 = pTranslation.y;", "float x2 = aTranslation.x;", "float y2 = aTranslation.y;", "\n    vec2 translation = vec2(\n      cos1 * s1 * x2 - sin1 * s1 * y2 + x1,\n      sin1 * s1 * x2 + cos1 * s1 * y2 + y1\n    );\n    ", "out0 = vec4(translation, rotation, scale);"];
  }
  encode(t4) {
    return [[this.opcode, 0, 0, 0], [t4.translation.from[0], t4.translation.from[1], t4.translation.to[0], t4.translation.to[1]], [t4.rotation.from, t4.rotation.to, t4.scale.from, t4.scale.to], ...p2(t4.translation.timing), ...p2(t4.rotation.timing), ...p2(t4.scale.timing), [t4.relativeTranslation ? 1 : 0, t4.absoluteScale ? 1 : 0, 0, 0]];
  }
};
var u2 = class extends o2 {
  constructor() {
    super(...arguments), this.opcode = ++e, this.length = 7, this.ins = 1, this.outs = 1, this.microcode = ["float fromOpacity = atom0.y;", "float toOpacity = atom0.z;", "vec4 fromColor = atom1;", "vec4 toColor = atom2;", "float fColor;", "{", ...s3({ duration: "atom3.x", startTimeOffset: "atom3.y", repeatDelay: "atom3.z", timeOriginSelector: "atom3.w", repeatType: "atom4.x", easing: "atom4.y", playAnimation: "atom4.z", reverseAnimation: "atom4.w", out: "fColor" }), "}", "float fOpacity;", "{", ...s3({ duration: "atom5.x", startTimeOffset: "atom5.y", repeatDelay: "atom5.z", timeOriginSelector: "atom5.w", repeatType: "atom6.x", easing: "atom6.y", playAnimation: "atom6.z", reverseAnimation: "atom6.w", out: "fOpacity" }), "}", "vec4 aColor = mix(fromColor, toColor, fColor);", "aColor.a *= mix(fromOpacity, toOpacity, fOpacity);", "vec4 pColor = in0;", "out0 = aColor * pColor;"];
  }
  encode(t4) {
    return [[this.opcode, t4.opacity.from, t4.opacity.to, 0], [t4.color.from[0], t4.color.from[1], t4.color.from[2], t4.color.from[3]], [t4.color.to[0], t4.color.to[1], t4.color.to[2], t4.color.to[3]], ...p2(t4.color.timing), ...p2(t4.opacity.timing)];
  }
};
var h3 = { scalar: new i2(), vector3: new n2(), vector4: new r3(), animatedTransform: new f(), animatedColor: new u2(), ret: new a3() };
var y = 40;
var d2 = 4;
function x(t4) {
  const o4 = [];
  o4.push(`float globalTime = ${t4.globalTime};`), o4.push(`float localTimeOrigin = ${t4.localTimeOrigin};`), o4.push(`vec2 pointer = ${t4.animationPointer};`), o4.push(`vec2 size = ${t4.animationTextureSize};`), o4.push("int top = 0;"), o4.push(`vec4 stack[${d2}];`), o4.push(`for (int counter = 0; counter < ${y}; counter++) {`), o4.push(`vec4 atom0 = texture(${t4.animationTexture}, (pointer + 0.5) / size);`), o4.push("pointer.x += 1.0;"), o4.push(`vec2 pixelDimensions = ${t4.pixelDimensions};`), o4.push("if (false) {");
  for (const e4 in h3) {
    const a4 = h3[e4];
    o4.push(`} else if (int(atom0.x) == ${a4.opcode}) {`);
    for (const e5 of a4.generateSource(t4)) o4.push(e5);
  }
  return o4.push("} // End if-else."), o4.push("} // End for."), o4.push(`${t4.out} = top > 0 ? stack[top - 1] : vec4(0.0);`), o4.join("\n");
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/markers/markerConstants.js
var o3 = { bitset: { isSDF: 0, isMapAligned: 1, scaleSymbolsProportionally: 2, overrideOutlineColor: 3, colorLocked: 4, isStroke: 5 } };

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/fill/gradientFillConstants.js
var r4 = { linear: 0, rectangular: 1, circular: 2 };
var e2 = { isAbsolute: 0, isDiscrete: 1 };

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/line/gradientStrokeConstants.js
var e3 = { isAlongLine: 0, isAbsoluteSize: 1, isDiscrete: 2 };

// node_modules/@arcgis/core/views/2d/layers/support/UpdateTracking2D.js
var d3 = class extends g {
  constructor(t4) {
    super(t4), this.debugName = "", this._updatingHandles = new h(), this._idToUpdatingState = new s();
  }
  get updating() {
    const t4 = this._updatingHandles.updating || Array.from(this._idToUpdatingState.values()).some((t5) => t5);
    if (has("esri-2d-log-updating")) {
      const r5 = Array.from(this._idToUpdatingState.entries()).map(([t5, r6]) => `-> ${t5}: ${r6}`).join("\n");
      console.log(`${this.debugName}: Updating: ${t4}
-> Handles: ${this._updatingHandles.updating}
${r5}`);
    }
    return t4;
  }
  addUpdateTracking(t4, r5) {
    const s5 = d(() => r5.updating, (r6) => this._idToUpdatingState.set(t4, r6), { sync: true });
    this.addHandles(s5);
  }
  addPromise(t4) {
    return this._updatingHandles.addPromise(t4);
  }
};
r([m({ constructOnly: true })], d3.prototype, "debugName", void 0), r([m({ readOnly: true })], d3.prototype, "updating", null), d3 = r([a("esri.views.2d.layers.support.UpdateTracking2D")], d3);

// node_modules/@arcgis/core/views/2d/engine/webgl/DisplayId.js
var n3 = 8388607;
var t3 = 8388608;
var f2 = (t4) => t4 & n3;
function s4(n4, r5) {
  return ((r5 ? t3 : 0) | n4) >>> 0;
}

export {
  o3 as o,
  i,
  t,
  c,
  o as o2,
  h2 as h,
  n,
  A,
  G,
  s2 as s,
  u,
  k,
  q,
  B,
  C,
  D,
  E,
  F,
  H,
  I,
  J,
  K,
  L,
  r4 as r,
  e2 as e,
  n3 as n2,
  f2 as f,
  s4 as s2,
  e3 as e2,
  t2,
  h3 as h2,
  x,
  d3 as d
};
//# sourceMappingURL=chunk-LTF4JXOW.js.map
