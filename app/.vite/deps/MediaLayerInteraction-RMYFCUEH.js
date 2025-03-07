import {
  _
} from "./chunk-3WMBBCKF.js";
import "./chunk-5DJJ57UM.js";
import {
  h
} from "./chunk-PV4EUSKO.js";
import "./chunk-HLOKDQU3.js";
import "./chunk-SUVHJC6Z.js";
import {
  P
} from "./chunk-YSPSOPLL.js";
import "./chunk-AJSC5XSW.js";
import "./chunk-I4HN3ELT.js";
import "./chunk-ACGZOBZ6.js";
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
import "./chunk-L7T5Z7MG.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import {
  e,
  i,
  k,
  l
} from "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/views/2d/layers/support/MediaLayerInteraction.js
var h2 = { redo: "r", undo: "z" };
var p = Symbol();
var m2 = Symbol();
var u = Symbol();
var _2 = class extends g {
  constructor(e2) {
    super(e2), this._tool = null, this._updatingHandles = new h(), this.enabled = false, this._onPointerMove = k(async (e3) => {
      const t = await this._updatingHandles.addPromise(this._findElementAtScreenPoint(e3));
      this.destroyed || (this.removeHandles(m2), t && t !== this.selectedElement && (this.view.cursor = "pointer", this.addHandles(e(() => this.view.cursor = null), m2)));
    });
  }
  initialize() {
    this.addHandles(i(this._updatingHandles)), this._updatingHandles.add(() => this.enabled, (e2) => this._setEnabled(e2), P), this._updatingHandles.add(() => this._preferredInteractionTool, () => this._preferredInteractionToolChanged());
  }
  get _validatedSelectedElement() {
    const e2 = this.selectedElement;
    if (!e2) return null;
    const { layer: { source: t } } = this;
    return t ? "hasElement" in t ? t.hasElement(e2) ? e2 : null : t === e2 ? e2 : null : null;
  }
  get _preferredInteractionTool() {
    var _a;
    return ((_a = this.options) == null ? void 0 : _a.tool) ?? "transform";
  }
  get updating() {
    return this._updatingHandles.updating;
  }
  _setEnabled(e2) {
    if (this.removeHandles(p), !e2) return;
    const { view: t } = this;
    this.addHandles([t.on("immediate-click", (e3) => this._onClick(e3), _.TOOL), t.on("pointer-move", (e3) => this._onPointerMove(e3).catch(() => {
    }), _.TOOL), t.on("key-down", (e3) => {
      var _a, _b;
      e3.key === h2.undo && ((_a = this._tool) == null ? void 0 : _a.canUndo()) && (this._tool.undo(), e3.stopPropagation()), e3.key === h2.redo && ((_b = this._tool) == null ? void 0 : _b.canRedo()) && (this._tool.redo(), e3.stopPropagation());
    }), this._updatingHandles.add(() => this._validatedSelectedElement, (e3) => this._selectedElementChanged(e3), P), e(() => {
      t.cursor = null, this._removeTool();
    })], p);
  }
  async _findElementAtScreenPoint(e2) {
    const t = (await this.view.hitTest(e2, { include: [this.layer] })).results[0];
    return "media" === (t == null ? void 0 : t.type) ? t.element : null;
  }
  async _onClick(e2) {
    await this._updatingHandles.addPromise(e2.async(async () => {
      const t = await this._findElementAtScreenPoint(e2);
      this.destroyed || (t && e2.stopPropagation(), this.selectedElement = t, this.selectedElement && (this.view.cursor = null));
    }));
  }
  _preferredInteractionToolChanged() {
    const { _tool: e2 } = this;
    e2 && (this._preferredInteractionTool === e2.type || this._updatingHandles.addPromise(this._recreateTool()));
  }
  async _recreateTool() {
    this.removeHandles(u), this._removeTool();
    const e2 = this._validatedSelectedElement;
    if (!e2) return;
    const t = new AbortController();
    this.addHandles(l(t), u);
    const { TransformTool: o, ControlPointsTransformTool: n } = await import("./editingTools-NZA7RPWT.js");
    if (t.signal.aborted) return;
    const { view: r2 } = this;
    switch (this._preferredInteractionTool) {
      case "transform":
        this._tool = new o({ target: e2, view: r2 });
        break;
      case "reshape":
        this._tool = new n({ mediaElement: e2, view: r2 });
    }
    this.addHandles(e(() => {
      this._tool && (r2.tools.remove(this._tool), this._tool = null);
    }), this._tool), r2.addAndActivateTool(this._tool);
  }
  _removeTool() {
    this._tool && this.removeHandles(this._tool);
  }
  async _selectedElementChanged(e2) {
    (e2 == null ? void 0 : e2.georeference) ? await this._updatingHandles.addPromise(this._recreateTool()) : this._removeTool();
  }
};
r([m()], _2.prototype, "_validatedSelectedElement", null), r([m()], _2.prototype, "_preferredInteractionTool", null), r([m({ constructOnly: true })], _2.prototype, "view", void 0), r([m({ constructOnly: true })], _2.prototype, "layer", void 0), r([m()], _2.prototype, "selectedElement", void 0), r([m()], _2.prototype, "enabled", void 0), r([m()], _2.prototype, "options", void 0), r([m()], _2.prototype, "updating", null), _2 = r([a("esri.views.2d.layers.support.MediaLayerInteraction")], _2);
export {
  _2 as MediaLayerInteraction
};
//# sourceMappingURL=MediaLayerInteraction-RMYFCUEH.js.map
