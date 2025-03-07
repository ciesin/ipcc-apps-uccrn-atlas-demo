import {
  e,
  r as r2
} from "./chunk-K72JBXWN.js";
import {
  i as i2
} from "./chunk-JRGUEO3U.js";
import {
  S as S2
} from "./chunk-RXW7FOAQ.js";
import {
  h
} from "./chunk-KT6X6Y6M.js";
import {
  n
} from "./chunk-F4RJF7LN.js";
import {
  Ze
} from "./chunk-LPOMYX2A.js";
import {
  n as n2
} from "./chunk-XNRLY735.js";
import {
  _
} from "./chunk-3WMBBCKF.js";
import {
  c
} from "./chunk-EWSNAOW6.js";
import {
  S,
  y
} from "./chunk-4WO6KUCB.js";
import {
  d as d2
} from "./chunk-2Y4TRKRB.js";
import {
  d,
  p
} from "./chunk-YSPSOPLL.js";
import {
  i
} from "./chunk-I4HN3ELT.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/views/draw/support/HighlightHelper.js
var a3 = class extends g {
  constructor(r4) {
    super(r4), this.view = null, this.highlightName = c;
  }
  add(r4) {
    const t2 = !r4 || Array.isArray(r4) ? r4 : [r4];
    (t2 == null ? void 0 : t2.length) && t2.forEach((r5) => this._highlight(r5));
  }
  remove(r4) {
    const t2 = !r4 || Array.isArray(r4) ? r4 : [r4];
    (t2 == null ? void 0 : t2.length) && t2.forEach((r5) => this._removeHighlight(r5));
  }
  removeAll() {
    this.removeAllHandles();
  }
  _highlight(r4) {
    const t2 = r2(this.view, r4.layer);
    n(t2) && this.addHandles(t2.highlight(r4, { name: this.highlightName }), Ze(r4));
  }
  _removeHighlight(r4) {
    r4 && this.removeHandles(Ze(r4));
  }
};
r([m()], a3.prototype, "view", void 0), r([m({ constructOnly: true })], a3.prototype, "highlightName", void 0), a3 = r([a2("esri.views.draw.support.HighlightHelper")], a3);
var p2 = a3;

// node_modules/@arcgis/core/views/draw/support/input/GraphicMoverEvents.js
var t = class {
  constructor(t2, i4, s2, h3, e3) {
    this.graphic = t2, this.index = i4, this.x = s2, this.y = h3, this.viewEvent = e3, this.type = "graphic-click";
  }
};
var i3 = class {
  constructor(t2, i4, s2, h3, e3) {
    this.graphic = t2, this.index = i4, this.x = s2, this.y = h3, this.viewEvent = e3, this.type = "graphic-double-click";
  }
};
var s = class {
  constructor(t2, i4, s2, h3, e3, r4, c3, a5, n4, p3) {
    this.graphic = t2, this.allGraphics = i4, this.index = s2, this.x = h3, this.y = e3, this.dx = r4, this.dy = c3, this.totalDx = a5, this.totalDy = n4, this.viewEvent = p3, this.defaultPrevented = false, this.type = "graphic-move-start";
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
};
var h2 = class {
  constructor(t2, i4, s2, h3, e3, r4, c3, a5, n4, p3) {
    this.graphic = t2, this.allGraphics = i4, this.index = s2, this.x = h3, this.y = e3, this.dx = r4, this.dy = c3, this.totalDx = a5, this.totalDy = n4, this.viewEvent = p3, this.defaultPrevented = false, this.type = "graphic-move";
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
};
var e2 = class {
  constructor(t2, i4, s2, h3, e3, r4, c3, a5, n4, p3) {
    this.graphic = t2, this.allGraphics = i4, this.index = s2, this.x = h3, this.y = e3, this.dx = r4, this.dy = c3, this.totalDx = a5, this.totalDy = n4, this.viewEvent = p3, this.defaultPrevented = false, this.type = "graphic-move-stop";
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
};
var r3 = class {
  constructor(t2, i4, s2, h3, e3) {
    this.graphic = t2, this.index = i4, this.x = s2, this.y = h3, this.viewEvent = e3, this.type = "graphic-pointer-over";
  }
};
var c2 = class {
  constructor(t2, i4, s2, h3, e3) {
    this.graphic = t2, this.index = i4, this.x = s2, this.y = h3, this.viewEvent = e3, this.type = "graphic-pointer-out";
  }
};
var a4 = class {
  constructor(t2, i4, s2, h3, e3) {
    this.graphic = t2, this.index = i4, this.x = s2, this.y = h3, this.viewEvent = e3, this.type = "graphic-pointer-down";
  }
};
var n3 = class {
  constructor(t2, i4, s2, h3, e3) {
    this.graphic = t2, this.index = i4, this.x = s2, this.y = h3, this.viewEvent = e3, this.type = "graphic-pointer-up";
  }
};

// node_modules/@arcgis/core/views/draw/support/GraphicMover.js
var M = "indicator-symbols";
var E = class extends i.EventedAccessor {
  constructor(i4) {
    super(i4), this._activeGraphic = null, this._dragEvent = null, this._hoverGraphic = null, this._indicators = [], this._initialDragGeometry = null, this._manipulators = [], this._layerViews = null, this.type = "graphic-mover", this.callbacks = { onGraphicClick() {
    }, onGraphicDoubleClick() {
    }, onGraphicMoveStart() {
    }, onGraphicMove() {
    }, onGraphicMoveStop() {
    }, onGraphicPointerOver() {
    }, onGraphicPointerOut() {
    }, onGraphicPointerDown() {
    }, onGraphicPointerUp() {
    } }, this.enableMoveAllGraphics = false, this.graphics = [], this.indicatorsEnabled = false, this.layer = new h({ listMode: "hide", internal: true, title: "GraphicMover highlight layer" }), this.view = null;
  }
  initialize() {
    e(this.view, this.layer), this._highlightHelper = new p2({ view: this.view }), this.refresh(), this.addHandles([d(() => this.graphics.length, () => this.refresh()), p(() => {
      var _a;
      return (_a = this.view) == null ? void 0 : _a.ready;
    }, () => {
      this.addHandles([this.view.on("immediate-click", (i4) => this._clickHandler(i4), _.TOOL), this.view.on("double-click", (i4) => this._doubleClickHandler(i4), _.TOOL), this.view.on("pointer-down", (i4) => this._pointerDownHandler(i4), _.TOOL), this.view.on("pointer-move", (i4) => this._pointerMoveHandler(i4), _.TOOL), this.view.on("pointer-up", (i4) => this._pointerUpHandler(i4), _.TOOL), this.view.on("drag", (i4) => this._dragHandler(i4), _.TOOL), this.view.on("key-down", (i4) => this._keyDownHandler(i4), _.TOOL)]);
    }, { once: true, initial: true }), d(() => this.view, (i4) => {
      this._highlightHelper.removeAll(), this._highlightHelper.view = i4;
    })]);
  }
  destroy() {
    var _a;
    this._removeIndicators(), (_a = this.view.map) == null ? void 0 : _a.remove(this.layer), this.layer.destroy(), this.reset(), this._manipulators.forEach((i4) => i4.destroy()), this._manipulators = null;
  }
  set highlightsEnabled(i4) {
    var _a, _b;
    (_a = this._highlightHelper) == null ? void 0 : _a.removeAll(), this._set("highlightsEnabled", i4), i4 && ((_b = this._highlightHelper) == null ? void 0 : _b.add(this.graphics));
  }
  get state() {
    const i4 = this.view.ready, t2 = this.graphics.length > 0, e3 = this._activeGraphic;
    return i4 && t2 ? e3 ? "moving" : "active" : i4 ? "ready" : "disabled";
  }
  refresh() {
    this.reset(), this._setup();
  }
  reset() {
    this._activeGraphic = null, this._hoverGraphic = null, this._dragEvent = null, this._highlightHelper.removeAll();
  }
  updateGeometry(i4, t2) {
    const e3 = this.graphics[i4];
    e3 && (e3.set("geometry", t2), this._setUpIndicators());
  }
  _setup() {
    this._setUpHighlights(), this._setUpIndicators(), this._setUpManipulators(), this._syncLayerViews();
  }
  _clickHandler(i4) {
    const t2 = this._findTargetGraphic(n2(i4));
    if (t2) {
      const e3 = new t(t2, this.graphics.indexOf(t2), i4.x, i4.y, i4);
      this.emit("graphic-click", e3), this.callbacks.onGraphicClick && this.callbacks.onGraphicClick(e3);
    }
  }
  _doubleClickHandler(i4) {
    const t2 = this._findTargetGraphic(n2(i4));
    if (t2) {
      const e3 = new i3(t2, this.graphics.indexOf(t2), i4.x, i4.y, i4);
      this.emit("graphic-double-click", e3), this.callbacks.onGraphicDoubleClick && this.callbacks.onGraphicDoubleClick(e3);
    }
  }
  _pointerDownHandler(i4) {
    const t2 = this._findTargetGraphic(n2(i4));
    if (t2) {
      this._activeGraphic = t2;
      const { x: e3, y: s2 } = i4, r4 = new a4(t2, this.graphics.indexOf(t2), e3, s2, i4);
      this.emit("graphic-pointer-down", r4), this.callbacks.onGraphicPointerDown && this.callbacks.onGraphicPointerDown(r4);
    } else this._activeGraphic = null;
  }
  _pointerUpHandler(i4) {
    if (this._activeGraphic) {
      const { x: t2, y: e3 } = i4, s2 = this.graphics.indexOf(this._activeGraphic), r4 = new n3(this._activeGraphic, s2, t2, e3, i4);
      this.emit("graphic-pointer-up", r4), this.callbacks.onGraphicPointerUp && this.callbacks.onGraphicPointerUp(r4);
    }
  }
  _pointerMoveHandler(i4) {
    if (this._dragEvent) return;
    const t2 = this._findTargetGraphic(n2(i4));
    if (t2) {
      const { x: e3, y: s2 } = i4;
      if (this._hoverGraphic) {
        if (this._hoverGraphic === t2) return;
        const r5 = this.graphics.indexOf(this._hoverGraphic), h4 = new c2(this.graphics[r5], r5, e3, s2, i4);
        this._hoverGraphic = null, this.emit("graphic-pointer-out", h4), this.callbacks.onGraphicPointerOut && this.callbacks.onGraphicPointerOut(h4);
      }
      const r4 = this.graphics.indexOf(t2), h3 = new r3(t2, r4, e3, s2, i4);
      return this._hoverGraphic = t2, this.emit("graphic-pointer-over", h3), void (this.callbacks.onGraphicPointerOver && this.callbacks.onGraphicPointerOver(h3));
    }
    if (this._hoverGraphic) {
      const { x: t3, y: e3 } = i4, s2 = this.graphics.indexOf(this._hoverGraphic), r4 = new c2(this.graphics[s2], s2, t3, e3, i4);
      this._hoverGraphic = null, this.emit("graphic-pointer-out", r4), this.callbacks.onGraphicPointerOut && this.callbacks.onGraphicPointerOut(r4);
    }
  }
  _dragHandler(i4) {
    var _a;
    if ("start" !== i4.action && !this._dragEvent || !((_a = this._activeGraphic) == null ? void 0 : _a.geometry)) return;
    "start" === i4.action && this._removeIndicators(), i4.stopPropagation();
    const { action: t2, x: s2, y: r4 } = i4, h3 = this.graphics.indexOf(this._activeGraphic), o = this._dragEvent ? s2 - this._dragEvent.x : 0, a5 = this._dragEvent ? r4 - this._dragEvent.y : 0, c3 = s2 - i4.origin.x, n4 = r4 - i4.origin.y, l = "start" === t2 ? this._activeGraphic.geometry : this._initialDragGeometry, d3 = i2(l, c3, n4, this.view);
    if (this._activeGraphic.geometry = d3, this.enableMoveAllGraphics && this.graphics.forEach((i5) => {
      i5 !== this._activeGraphic && (i5.geometry = i2(i5.geometry, o, a5, this.view));
    }), this._dragEvent = i4, "start" === t2) {
      this._initialDragGeometry = a(l);
      const t3 = new s(this._activeGraphic, this.graphics, h3, s2, r4, o, a5, c3, n4, i4);
      this.emit("graphic-move-start", t3), this.callbacks.onGraphicMoveStart && this.callbacks.onGraphicMoveStart(t3), t3.defaultPrevented && this._activeGraphic.set("geometry", l);
    } else if ("update" === t2) {
      const t3 = new h2(this._activeGraphic, this.graphics, h3, s2, r4, o, a5, c3, n4, i4);
      this.emit("graphic-move", t3), this.callbacks.onGraphicMove && this.callbacks.onGraphicMove(t3), t3.defaultPrevented && (this._activeGraphic.geometry = l);
    } else {
      const t3 = new e2(this._activeGraphic, this.graphics, h3, s2, r4, o, a5, c3, n4, i4);
      this._dragEvent = null, this._activeGraphic = null, this._setUpIndicators(), this.emit("graphic-move-stop", t3), this.callbacks.onGraphicMoveStop && this.callbacks.onGraphicMoveStop(t3), t3.defaultPrevented && (this.graphics[h3].set("geometry", this._initialDragGeometry), this._setUpIndicators()), this._initialDragGeometry = null;
    }
  }
  _keyDownHandler(i4) {
    "a" !== i4.key && "d" !== i4.key && "n" !== i4.key || "moving" !== this.state || i4.stopPropagation();
  }
  _findTargetGraphic(i4) {
    const t2 = this.view.toMap(i4), e3 = this.graphics;
    let s2 = null, r4 = Number.MAX_VALUE;
    this._syncLayerViews();
    const h3 = this._layerViews.flatMap((i5) => "graphicsViews" in i5 ? Array.from(i5.graphicsViews(), (i6) => i6.hitTest(t2)).flat() : i5.graphicsView.hitTest(t2)).filter((i5) => e3.includes(i5)).sort((i5, t3) => e3.indexOf(i5) - e3.indexOf(t3));
    return h3.length ? h3[0] : (this._manipulators.forEach((t3) => {
      const e4 = t3.intersectionDistance(i4);
      null != e4 && e4 < r4 && (r4 = e4, s2 = t3.graphic);
    }), s2);
  }
  _syncLayerViews() {
    this._layerViews = [];
    const i4 = /* @__PURE__ */ new Set();
    for (const t2 of this.graphics) {
      const e3 = r2(this.view, t2.layer);
      e3 && i4.add(e3);
    }
    this._layerViews = [...i4];
  }
  _setUpManipulators() {
    const { graphics: i4, view: t2 } = this;
    this._manipulators.forEach((i5) => i5.destroy()), this._manipulators = i4.length ? i4.map((i5) => new S2({ graphic: i5, view: t2 })) : [];
  }
  _setUpHighlights() {
    this.highlightsEnabled && this._highlightHelper.add(this.graphics);
  }
  _setUpIndicators() {
    if (this._removeIndicators(), this.indicatorsEnabled) {
      for (const i4 of this.graphics) {
        const t2 = i4.clone();
        t2.symbol = U(i4), this._indicators.push(t2), this.addHandles(d(() => i4.symbol, () => this._setUpIndicators()), M);
      }
      this.layer.addMany(this._indicators);
    }
  }
  _removeIndicators() {
    this.removeHandles(M), this._indicators.length && (this.layer.removeMany(this._indicators), this._indicators.forEach((i4) => i4.destroy()), this._indicators = []);
  }
};
function U(i4) {
  const t2 = 12;
  if (null == i4.symbol) return null;
  switch (i4.symbol.type) {
    case "cim":
      return new y({ style: "circle", size: t2, color: [0, 0, 0, 0], outline: { color: [255, 127, 0, 1], width: 1 } });
    case "picture-marker": {
      const { xoffset: t3, yoffset: e3, height: s2, width: r4 } = i4.symbol, h3 = s2 === r4 ? r4 : Math.max(s2, r4);
      return new y({ xoffset: t3, yoffset: e3, size: h3, style: "square", color: [0, 0, 0, 0], outline: { color: [255, 127, 0, 1], width: 1 } });
    }
    case "simple-marker": {
      const { xoffset: t3, yoffset: e3, size: s2, style: r4 } = i4.symbol;
      return new y({ xoffset: t3, yoffset: e3, style: "circle" === r4 ? "circle" : "square", size: s2 + 2, color: [0, 0, 0, 0], outline: { color: [255, 127, 0, 1], width: 1 } });
    }
    case "simple-fill":
      return new S({ color: [0, 0, 0, 0], outline: { style: "dash", color: [255, 127, 0, 1], width: 1 } });
    case "simple-line":
      return new d2({ color: [255, 127, 0, 1], style: "dash", width: 1 });
    case "text": {
      const { xoffset: e3, yoffset: s2 } = i4.symbol;
      return new y({ xoffset: e3, yoffset: s2, size: t2, color: [0, 0, 0, 0], outline: { color: [255, 127, 0, 1], width: 1 } });
    }
    default:
      return null;
  }
}
r([m()], E.prototype, "_activeGraphic", void 0), r([m({ readOnly: true })], E.prototype, "type", void 0), r([m()], E.prototype, "callbacks", void 0), r([m()], E.prototype, "enableMoveAllGraphics", void 0), r([m()], E.prototype, "graphics", void 0), r([m({ value: false })], E.prototype, "highlightsEnabled", null), r([m()], E.prototype, "indicatorsEnabled", void 0), r([m()], E.prototype, "layer", void 0), r([m({ readOnly: true })], E.prototype, "state", null), r([m()], E.prototype, "view", void 0), E = r([a2("esri.views.draw.support.GraphicMover")], E);
var j = E;

export {
  p2 as p,
  j
};
//# sourceMappingURL=chunk-OFIFRMIK.js.map
