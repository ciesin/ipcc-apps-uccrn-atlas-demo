import {
  _,
  t as t2
} from "./chunk-3WMBBCKF.js";
import {
  r2 as r
} from "./chunk-4LTV6KQ5.js";
import {
  e,
  t
} from "./chunk-M6FNW7GP.js";
import {
  F
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/interactive/keybindings.js
var s = "z";
var a = "r";
var p = { redo: a, undo: s, center: "Alt", constraint: "Shift", cancel: "Escape", delete: ["Backspace", "Delete"], complete: "Enter", vertexAdd: "f", pan: " " };
var c = { toggle: "Control" };
var f = { enterInputMode: "Tab", commit: "Enter", discard: "Escape", next: "Tab" };
var d = { moveUp: { key: "ArrowUp", modifier: "Shift", repeats: true }, moveDown: { key: "ArrowDown", modifier: "Shift", repeats: true }, moveLeft: { key: "ArrowLeft", modifier: "Shift", repeats: true }, moveRight: { key: "ArrowRight", modifier: "Shift", repeats: true }, scaleUp: { key: "+", modifier: "Shift" }, scaleDown: { key: "-", modifier: "Shift" }, factorModifier: { key: t2, continuePropagation: true }, toggleOpacity: "t", preserveAspectRatio: { key: "Shift", continuePropagation: true }, rotateIncrements: { key: "Shift", continuePropagation: true }, editSourcePoints: { key: "Alt", continuePropagation: true }, undo: s, redo: a };
var h = class {
  constructor() {
    this._bindings = /* @__PURE__ */ new Map();
  }
  add(e2, t3) {
    return this.addToggle(e2, (e3) => {
      "key-down" === e3.type && t3(e3);
    });
  }
  addToggle(i, r2) {
    const n = m.fromDefinition(i, r2), s2 = r(this._bindings, n.key, () => []);
    return s2.push(n), e(() => F(s2, n));
  }
  register(e2, t3 = _.WIDGET) {
    return t([e2.on("key-down", (t4) => this.dispatch(e2.inputManager, t4), t3), e2.on("key-up", (t4) => this.dispatch(e2.inputManager, t4), t3)]);
  }
  dispatch(e2, t3) {
    const i = t3.key, o = this._bindings.get(i);
    if (o) for (const r2 of o) r2.process(e2, t3);
  }
};
var m = class _m {
  constructor(e2, t3, i, o, r2) {
    this.key = e2, this.modifiers = t3, this.repeats = i, this.continuePropagation = o, this.callback = r2;
  }
  process(e2, t3) {
    if (!(t3.key !== this.key || "repeat" in t3 && t3.repeat && !this.repeats)) {
      for (const t4 of this.modifiers) if (!e2.isModifierKeyDown(t4)) return;
      this.continuePropagation || t3.stopPropagation(), this.callback(t3);
    }
  }
  static fromDefinition(e2, t3) {
    if ("string" == typeof e2) return new _m(e2, [], false, false, t3);
    const { key: i, modifier: o, repeats: r2, continuePropagation: n } = e2;
    return new _m(i, o ? Array.isArray(o) ? o : [o] : [], !!r2, !!n, t3);
  }
};

export {
  p,
  c,
  f,
  d,
  h
};
//# sourceMappingURL=chunk-TY5FDDRF.js.map
