import {
  e as e2
} from "./chunk-RD3QRDRK.js";
import {
  d
} from "./chunk-VTPZW6H5.js";
import {
  e,
  t
} from "./chunk-FIBMMWXR.js";
import {
  i
} from "./chunk-I4HN3ELT.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  s
} from "./chunk-L7T5Z7MG.js";
import {
  a as a2
} from "./chunk-STW6HRXO.js";
import {
  L
} from "./chunk-M6FNW7GP.js";
import {
  a,
  n2 as n
} from "./chunk-CWMZW2S5.js";
import {
  F,
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/layers/effects/EffectView.js
var l = -1;
var a4 = class extends g {
  constructor(t2) {
    super(t2), this._from = null, this._to = null, this._final = null, this._current = [], this._time = 0, this.duration = has("mapview-transitions-duration"), this.effects = [];
  }
  set effect(t2) {
    if (this._get("effect") !== (t2 = t2 || "")) {
      this._set("effect", t2);
      try {
        this._transitionTo(h(t2));
      } catch (e4) {
        this._transitionTo([]), n.getLogger(this).warn("Invalid Effect", { effect: t2, error: e4 });
      }
    }
  }
  get final() {
    return this._final;
  }
  get hasEffects() {
    return this.transitioning || !!this.effects.length;
  }
  set scale(t2) {
    this._updateForScale(t2);
  }
  get transitioning() {
    return null !== this._to;
  }
  canTransitionTo(t2) {
    try {
      return this.scale > 0 && u(this._current, h(t2), this.scale);
    } catch {
      return false;
    }
  }
  transitionStep(t2, e4) {
    this._applyTimeTransition(t2), this._updateForScale(e4);
  }
  endTransition() {
    this._applyTimeTransition(this.duration);
  }
  _transitionTo(t2) {
    this.scale > 0 && u(this._current, t2, this.scale) ? (this._final = t2, this._to = a(t2), _(this._current, this._to, this.scale), this._from = a(this._current), this._time = 0) : (this._from = this._to = this._final = null, this._current = t2), this._set("effects", this._current[0] ? a(this._current[0].effects) : []);
  }
  _applyTimeTransition(t2) {
    if (!(this._to && this._from && this._current && this._final)) return;
    this._time += t2;
    const e4 = Math.min(1, this._time / this.duration);
    for (let s2 = 0; s2 < this._current.length; s2++) {
      const t3 = this._current[s2], r3 = this._from[s2], i2 = this._to[s2];
      t3.scale = p(r3.scale, i2.scale, e4);
      for (let s3 = 0; s3 < t3.effects.length; s3++) {
        const n3 = t3.effects[s3], c = r3.effects[s3], o = i2.effects[s3];
        n3.interpolate(c, o, e4);
      }
    }
    1 === e4 && (this._current = this._final, this._set("effects", this._current[0] ? a(this._current[0].effects) : []), this._from = this._to = this._final = null);
  }
  _updateForScale(t2) {
    if (this._set("scale", t2), 0 === this._current.length) return;
    const e4 = this._current, s2 = this._current.length - 1;
    let r3, i2, n3 = 1;
    if (1 === e4.length || t2 >= e4[0].scale) i2 = r3 = e4[0].effects;
    else if (t2 <= e4[s2].scale) i2 = r3 = e4[s2].effects;
    else for (let c = 0; c < s2; c++) {
      const s3 = e4[c], o = e4[c + 1];
      if (s3.scale >= t2 && o.scale <= t2) {
        n3 = (t2 - s3.scale) / (o.scale - s3.scale), r3 = s3.effects, i2 = o.effects;
        break;
      }
    }
    for (let c = 0; c < this.effects.length; c++) {
      this.effects[c].interpolate(r3[c], i2[c], n3);
    }
  }
};
function h(t2) {
  const e4 = d(t2) || [];
  return m2(e4) ? [{ scale: l, effects: e4 }] : e4;
}
function u(t2, e4, s2) {
  var _a, _b, _c, _d;
  if (!((_a = t2[0]) == null ? void 0 : _a.effects) || !((_b = e4[0]) == null ? void 0 : _b.effects)) return true;
  return !((((_c = t2[0]) == null ? void 0 : _c.scale) === l || ((_d = e4[0]) == null ? void 0 : _d.scale) === l) && (t2.length > 1 || e4.length > 1) && s2 <= 0) && t(t2[0].effects, e4[0].effects);
}
function _(t2, e4, s2) {
  const r3 = t2.length > e4.length ? t2 : e4, i2 = t2.length > e4.length ? e4 : t2, n3 = i2[i2.length - 1], c = (n3 == null ? void 0 : n3.scale) ?? s2, o = (n3 == null ? void 0 : n3.effects) ?? [];
  for (let f = i2.length; f < r3.length; f++) i2.push({ scale: c, effects: [...o] });
  for (let a5 = 0; a5 < r3.length; a5++) i2[a5].scale = i2[a5].scale === l ? s2 : i2[a5].scale, r3[a5].scale = r3[a5].scale === l ? s2 : r3[a5].scale, e(i2[a5].effects, r3[a5].effects);
}
function p(t2, e4, s2) {
  return t2 + (e4 - t2) * s2;
}
function m2(t2) {
  const e4 = t2[0];
  return !!e4 && "type" in e4;
}
r([m()], a4.prototype, "_to", void 0), r([m()], a4.prototype, "duration", void 0), r([m({ value: "" })], a4.prototype, "effect", null), r([m({ readOnly: true })], a4.prototype, "effects", void 0), r([m({ readOnly: true })], a4.prototype, "final", null), r([m({ readOnly: true })], a4.prototype, "hasEffects", null), r([m({ value: 0 })], a4.prototype, "scale", null), r([m({ readOnly: true })], a4.prototype, "transitioning", null), a4 = r([a3("esri.layers.effects.EffectView")], a4);

// node_modules/@arcgis/core/views/2d/engine/transitions/FadeTransition.js
var r2 = class extends g {
  constructor(t2) {
    super(t2), this.computedOpacity = 1, this.computedVisible = true, this.opacity = 1, this.visible = true, this._fadeOutResolver = null, this._fadeInResolver = null;
  }
  get transitioning() {
    return (this._fadeOutResolver || !this.visible ? 0 : this.opacity) !== this.computedOpacity;
  }
  endTransition() {
    var _a, _b;
    (_a = this._fadeInResolver) == null ? void 0 : _a.call(this), (_b = this._fadeOutResolver) == null ? void 0 : _b.call(this), this._fadeInResolver = this._fadeOutResolver = null, this.computedOpacity = this.visible ? this.opacity : 0;
  }
  fadeIn() {
    var _a;
    return this._fadeInResolver || (this.opacity = 1, this.computedOpacity = 0, (_a = this._fadeOutResolver) == null ? void 0 : _a.call(this), this._fadeOutResolver = null, this._fadeInResolver = L()), this._fadeInResolver.promise;
  }
  fadeOut() {
    var _a;
    return this._fadeOutResolver || (this.opacity = 0, (_a = this._fadeInResolver) == null ? void 0 : _a.call(this), this._fadeInResolver = null, this._fadeOutResolver = L()), this._fadeOutResolver.promise;
  }
  transitionStep(t2, e4) {
    var _a, _b;
    const i2 = has("mapview-transitions-duration"), s2 = i2 ? 1 / i2 : 0;
    if (0 === s2) this.computedOpacity = this.opacity, this.computedVisible = this.visible;
    else {
      const e5 = this._fadeOutResolver || !this.visible ? 0 : this.opacity, i3 = this.computedOpacity;
      if (i3 === e5) this.computedVisible = this.visible;
      else {
        const o = t2 * s2;
        this.computedOpacity = i3 > e5 ? Math.max(e5, i3 - o) : Math.min(e5, i3 + o), this.computedVisible = this.computedOpacity > 0;
      }
    }
    this.transitioning || ((_a = this._fadeInResolver) == null ? void 0 : _a.call(this), (_b = this._fadeOutResolver) == null ? void 0 : _b.call(this), this._fadeOutResolver = this._fadeInResolver = null);
  }
};
r([m()], r2.prototype, "computedOpacity", void 0), r([m()], r2.prototype, "computedVisible", void 0), r([m()], r2.prototype, "opacity", void 0), r([m()], r2.prototype, "visible", void 0), r([m()], r2.prototype, "transitioning", null), r([m()], r2.prototype, "_fadeOutResolver", void 0), r([m()], r2.prototype, "_fadeInResolver", void 0), r2 = r([a3("esri.views.2d.engine.transitions.FadeTransition")], r2);

// node_modules/@arcgis/core/views/2d/engine/DisplayObject.js
var e3 = class extends i {
  constructor() {
    super(...arguments), this._transitionables = null, this._clips = null, this._fadeTransition = null, this._isReady = false, this._opacity = 1, this.parent = null, this._stage = null, this._visible = true;
  }
  get computedOpacity() {
    var _a;
    return ((_a = this._fadeTransition) == null ? void 0 : _a.computedOpacity) ?? this.opacity;
  }
  get clips() {
    return this._clips;
  }
  set clips(t2) {
    this._clips = t2, this.requestRender();
  }
  get fadeTransitionEnabled() {
    return null !== this._fadeTransition;
  }
  set fadeTransitionEnabled(t2) {
    !this._fadeTransition && t2 ? (this._fadeTransition = new r2({ opacity: this.opacity, visible: this.visible }), this.addTransitionable(this._fadeTransition)) : this._fadeTransition && !t2 && (this.removeTransitionable(this._fadeTransition), this._fadeTransition = null);
  }
  get inFadeTransition() {
    var _a;
    return ((_a = this._fadeTransition) == null ? void 0 : _a.transitioning) ?? false;
  }
  get isReady() {
    return this._isReady;
  }
  get opacity() {
    return this._opacity;
  }
  set opacity(t2) {
    this._opacity !== t2 && (this._opacity = Math.min(1, Math.max(t2, 0)), this._fadeTransition && (this._fadeTransition.opacity = this._opacity), this.requestRender());
  }
  get stage() {
    return this._stage;
  }
  set stage(t2) {
    var _a;
    if (this._stage === t2) return;
    const i2 = this._stage;
    this._stage = t2, t2 ? ((_a = this._stage) == null ? void 0 : _a.untrashDisplayObject(this)) || (this.onAttach(), this.emit("attach")) : i2 == null ? void 0 : i2.trashDisplayObject(this);
  }
  get transforms() {
    return null == this._transforms && (this._transforms = this._createTransforms()), this._transforms;
  }
  get transitioning() {
    return this.isTransitioning();
  }
  get visible() {
    return this._visible;
  }
  set visible(t2) {
    this._visible !== t2 && (this._visible = t2, this._fadeTransition && (this._fadeTransition.visible = this._visible), this.requestRender());
  }
  get hasLabels() {
    return false;
  }
  get hasHighlight() {
    return false;
  }
  get hasBlending() {
    return false;
  }
  addTransitionable(t2) {
    this._transitionables ?? (this._transitionables = []), this._transitionables.push(t2), this.requestRender();
  }
  removeTransitionable(i2) {
    i2.endTransition(), this._transitionables && F(this._transitionables, i2), this.requestRender();
  }
  fadeIn() {
    this.fadeTransitionEnabled = true;
    const t2 = this._fadeTransition.fadeIn();
    return this.opacity = 1, this.requestRender(), t2;
  }
  fadeOut() {
    this.fadeTransitionEnabled = true;
    const t2 = this._fadeTransition.fadeOut();
    return this.opacity = 0, this.requestRender(), t2;
  }
  endTransitions() {
    if (this._transitionables) {
      for (const t2 of this._transitionables) t2.endTransition();
      this.requestRender();
    }
  }
  beforeRender(t2) {
    this.transitionStep(t2.deltaTime, t2.state.scale), this.setTransform(t2.state);
  }
  afterRender(t2) {
    this.transitioning && this.requestRender();
  }
  remove() {
    var _a;
    (_a = this.parent) == null ? void 0 : _a.removeChild(this);
  }
  setTransform(t2) {
  }
  processRender(t2) {
    var _a;
    this.stage && (((_a = this._fadeTransition) == null ? void 0 : _a.computedVisible) ?? this.visible) && this.doRender(t2);
  }
  requestRender() {
    this.stage && this.stage.requestRender();
  }
  processDetach() {
    this.endTransitions(), this.onDetach(), this.emit("detach");
  }
  isTransitioning() {
    var _a;
    return ((_a = this._transitionables) == null ? void 0 : _a.some((t2) => t2.transitioning)) ?? false;
  }
  transitionStep(t2, i2) {
    if (this._transitionables) for (const s2 of this._transitionables) s2.transitionStep(t2, i2);
  }
  onAttach() {
  }
  onDetach() {
  }
  doRender(t2) {
  }
  ready() {
    this._isReady || (this._isReady = true, this.emit("isReady"), this.requestRender());
  }
};

// node_modules/@arcgis/core/views/2d/engine/Container.js
var n2 = class extends e3 {
  constructor() {
    super(...arguments), this._childrenSet = /* @__PURE__ */ new Set(), this._needsSort = false, this._children = [], this._childrenObservable = new s(), this._effectView = null, this._highlightGradient = null;
  }
  get blendMode() {
    return this._blendMode;
  }
  set blendMode(e4) {
    this._blendMode = e4, this.requestRender();
  }
  get children() {
    return a2(this._childrenObservable), this._children;
  }
  get clips() {
    return this._clips;
  }
  set clips(e4) {
    this._clips = e4, this.children.forEach((t2) => t2.clips = e4);
  }
  get computedEffects() {
    var _a;
    return ((_a = this._effectView) == null ? void 0 : _a.effects) ?? null;
  }
  get effect() {
    var _a;
    return ((_a = this._effectView) == null ? void 0 : _a.effect) ?? "";
  }
  set effect(e4) {
    (this._effectView || e4) && (this._effectView || (this._effectView = new a4(), this.addTransitionable(this._effectView)), this._effectView.effect = e4, this.requestRender());
  }
  get highlightGradient() {
    return this._highlightGradient;
  }
  set highlightGradient(e4) {
    this._highlightGradient = e4, this.requestRender();
  }
  get hasBlending() {
    return !!this.blendMode;
  }
  get hasHighlight() {
    return this.children.some((e4) => e4.hasHighlight);
  }
  get hasLabels() {
    return this.children.some((e4) => e4.hasLabels);
  }
  get requiresDedicatedFBO() {
    return this.children.some((e4) => "blendMode" in e4 && e4.blendMode && "normal" !== e4.blendMode);
  }
  get isReady() {
    return this.children.every((e4) => e4.isReady);
  }
  get sortFunction() {
    return this._sortFunction;
  }
  set sortFunction(e4) {
    this._sortFunction = e4, e4 && (this._needsSort = true);
  }
  doRender(e4) {
    var _a;
    const t2 = this.createRenderParams(e4), { painter: i2 } = t2;
    i2.beforeRenderLayer(t2, ((_a = this._clips) == null ? void 0 : _a.length) ? 255 : 0, this.computedOpacity), this.renderChildren(t2), i2.afterRenderLayer(t2, this.computedOpacity);
  }
  addChild(e4) {
    return this.addChildAt(e4, this.children.length);
  }
  addChildAt(e4, t2 = this.children.length) {
    if (!e4) return e4;
    if (this.contains(e4)) return e4;
    this._needsSort = true;
    const i2 = e4.parent;
    return i2 && i2 !== this && i2.removeChild(e4), t2 >= this.children.length ? this.children.push(e4) : this.children.splice(t2, 0, e4), this._childrenSet.add(e4), e4.parent = this, e4.stage = this.stage, this !== this.stage && (e4.clips = this.clips), this.requestRender(), this._childrenObservable.notify(), e4;
  }
  contains(t2) {
    return a2(this._childrenObservable), this._childrenSet.has(t2);
  }
  removeAllChildren() {
    this._childrenSet.clear(), this._needsSort = true;
    for (const e4 of this.children) this !== this.stage && (e4.clips = null), e4.stage = null, e4.parent = null;
    this.children.length = 0, this._childrenObservable.notify();
  }
  removeChild(e4) {
    return this.contains(e4) ? this.removeChildAt(this.children.indexOf(e4)) : e4;
  }
  removeChildAt(e4) {
    if (e4 < 0 || e4 >= this.children.length) return null;
    this._needsSort = true;
    const t2 = this.children.splice(e4, 1)[0];
    return this._childrenSet.delete(t2), this !== this.stage && (t2.clips = null), t2.stage = null, t2.parent = null, this._childrenObservable.notify(), t2;
  }
  beforeRender(e4) {
    super.beforeRender(e4), this.sortFunction && this._needsSort && (this.children.sort(this.sortFunction), this._needsSort = false, this._childrenObservable.notify());
    for (const t2 of this.children) t2.beforeRender(e4);
  }
  afterRender(e4) {
    super.afterRender(e4);
    for (const t2 of this.children) t2.afterRender(e4);
  }
  _createTransforms() {
    return { displayViewScreenMat3: e2() };
  }
  onAttach() {
    super.onAttach();
    const e4 = this.stage;
    for (const t2 of this.children) t2.stage = e4;
  }
  onDetach() {
    super.onDetach();
    for (const e4 of this.children) e4.stage = null;
  }
  renderChildren(e4) {
    for (const t2 of this.children) t2.processRender(e4);
  }
  createRenderParams(e4) {
    return { ...e4, requireFBO: this.requiresDedicatedFBO, blendMode: this.blendMode, effects: this.computedEffects, globalOpacity: e4.globalOpacity * this.computedOpacity, inFadeTransition: this.inFadeTransition, highlightGradient: this._highlightGradient || e4.highlightGradient };
  }
  isTransitioning() {
    return super.isTransitioning() || this.children.some((e4) => e4.transitioning);
  }
};

export {
  a4 as a,
  e3 as e,
  n2 as n
};
//# sourceMappingURL=chunk-4ATVMSVD.js.map
