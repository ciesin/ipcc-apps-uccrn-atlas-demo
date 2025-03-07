import {
  i as i2
} from "./chunk-MX7BI6XG.js";
import {
  l
} from "./chunk-PFFYYIYN.js";
import {
  c
} from "./chunk-IWFYZGBP.js";
import {
  b
} from "./chunk-K35H6D4D.js";
import {
  p
} from "./chunk-UMYFDXOJ.js";
import {
  J
} from "./chunk-HCXUWF52.js";
import {
  h
} from "./chunk-DDEXP7LW.js";
import {
  L,
  O
} from "./chunk-4WERUJEK.js";
import {
  f,
  g as g2,
  u
} from "./chunk-JLFV7EBO.js";
import {
  n
} from "./chunk-JLFSX3JT.js";
import {
  C,
  d
} from "./chunk-YSPSOPLL.js";
import {
  i
} from "./chunk-I4HN3ELT.js";
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

// node_modules/@arcgis/core/views/interactive/support/utils.js
function s(s2) {
  let t = 0, a2 = 0, e = 0;
  return s2 ? ("cim" === s2.type && s2.data.symbol && "symbolLayers" in s2.data.symbol && s2.data.symbol.symbolLayers && s2.data.symbol.symbolLayers.map((o) => {
    "CIMVectorMarker" === o.type && o.anchorPoint && (Math.abs(o.anchorPoint.x) > t && (t = o.anchorPoint.x), Math.abs(o.anchorPoint.y) > a2 && (a2 = o.anchorPoint.y), null != o.size && o.size > e && (e = o.size));
  }), t = u(t), a2 = u(a2), e = u(e), { offsetX: t, offsetY: a2, size: e }) : { offsetX: t, offsetY: a2, size: e };
}

// node_modules/@arcgis/core/views/interactive/GraphicManipulator.js
var S = class extends g {
  set graphic(t) {
    this._circleCollisionCache = null, this._originalSymbol = t.symbol, this._set("graphic", t), this.attachSymbolChanged();
  }
  get elevationInfo() {
    const { layer: t } = this.graphic, e = t && "elevationInfo" in t ? t.elevationInfo : null, o = l(this.graphic), i3 = e ? e.offset : 0;
    return new h({ mode: o, offset: i3 });
  }
  set focusedSymbol(t) {
    t !== this._get("focusedSymbol") && (this._set("focusedSymbol", t), this._updateGraphicSymbol(), this._circleCollisionCache = null);
  }
  grabbableForEvent() {
    return true;
  }
  set grabbing(t) {
    t !== this._get("grabbing") && (this._set("grabbing", t), this._updateGraphicSymbol());
  }
  set hovering(t) {
    t !== this._get("hovering") && (this._set("hovering", t), this._updateGraphicSymbol());
  }
  set selected(t) {
    t !== this._get("selected") && (this._set("selected", t), this._updateGraphicSymbol(), this.events.emit("select-changed", { action: t ? "select" : "deselect" }));
  }
  get _focused() {
    return this._get("hovering") || this._get("grabbing");
  }
  constructor(t) {
    super(t), this.layer = null, this.interactive = true, this.selectable = false, this.grabbable = true, this.dragging = false, this.cursor = null, this.consumesClicks = true, this.events = new i.EventEmitter(), this._circleCollisionCache = null, this._graphicSymbolChangedHandle = null, this._originalSymbol = null;
  }
  destroy() {
    this.detachSymbolChanged(), this._resetGraphicSymbol(), this._set("view", null);
  }
  intersectionDistance(t) {
    const e = this.graphic;
    if (false === e.visible) return null;
    const o = e.geometry;
    if (null == o) return null;
    const i3 = this._get("focusedSymbol"), s2 = null != i3 ? i3 : e.symbol;
    return "2d" === this.view.type ? this._intersectDistance2D(this.view, t, o, s2) : this._intersectDistance3D(this.view, t, e);
  }
  attach() {
    this.attachSymbolChanged(), null != this.layer && this.layer.add(this.graphic);
  }
  detach() {
    this.detachSymbolChanged(), this._resetGraphicSymbol(), null != this.layer && this.layer.remove(this.graphic);
  }
  attachSymbolChanged() {
    this.detachSymbolChanged(), this._graphicSymbolChangedHandle = d(() => {
      var _a;
      return (_a = this.graphic) == null ? void 0 : _a.symbol;
    }, (t) => {
      null != t && t !== this.focusedSymbol && t !== this._originalSymbol && (this._originalSymbol = t, this._focused && null != this.focusedSymbol && (this.graphic.symbol = this.focusedSymbol));
    }, C);
  }
  detachSymbolChanged() {
    null != this._graphicSymbolChangedHandle && (this._graphicSymbolChangedHandle.remove(), this._graphicSymbolChangedHandle = null);
  }
  onElevationChange() {
  }
  onViewChange() {
  }
  _updateGraphicSymbol() {
    this.graphic.symbol = this._focused && null != this.focusedSymbol ? this.focusedSymbol : this._originalSymbol;
  }
  _resetGraphicSymbol() {
    this.graphic.symbol = this._originalSymbol;
  }
  _intersectDistance2D(t, e, o, i3) {
    var _a, _b;
    if (null == (i3 = i3 || J(o))) return null;
    const s2 = 1;
    let n2 = this._circleCollisionCache;
    if ("point" === o.type && "cim" === i3.type && "CIMPointSymbol" === ((_a = i3.data.symbol) == null ? void 0 : _a.type) && i3.data.symbol.symbolLayers) {
      const { offsetX: l2, offsetY: n3, size: a2 } = s(i3), c2 = g2(e, j), p2 = a2 / 2, m2 = t.toScreen(o), u2 = m2.x + l2, y = m2.y + n3;
      return b(c2, [u2, y]) < p2 * p2 ? s2 : null;
    }
    if ("point" !== o.type || "simple-marker" !== i3.type) return i2(e, o, t) ? s2 : null;
    if (null == n2 || !n2.originalPoint.equals(o)) {
      const e2 = o, s3 = t.spatialReference;
      if (L(e2.spatialReference, s3)) {
        const t2 = O(e2, s3);
        n2 = { originalPoint: e2.clone(), mapPoint: t2, radiusPx: u(i3.size) }, this._circleCollisionCache = n2;
      }
    }
    if (null != n2) {
      const o2 = g2(e, j), a2 = (_b = t.toScreen) == null ? void 0 : _b.call(t, n2.mapPoint);
      if (!a2) return null;
      const c2 = n2.radiusPx, p2 = a2.x + u(i3.xoffset), m2 = a2.y - u(i3.yoffset);
      return b(o2, [p2, m2]) < c2 * c2 ? s2 : null;
    }
    return null;
  }
  _intersectDistance3D(t, e, o) {
    const i3 = t.toMap(e, { include: [o] });
    return i3 && c(i3, C2, t.renderSpatialReference) ? p(C2, t.state.camera.eye) : null;
  }
};
r([m({ constructOnly: true, nonNullable: true })], S.prototype, "graphic", null), r([m()], S.prototype, "elevationInfo", null), r([m({ constructOnly: true, nonNullable: true })], S.prototype, "view", void 0), r([m({ value: null })], S.prototype, "focusedSymbol", null), r([m({ constructOnly: true })], S.prototype, "layer", void 0), r([m()], S.prototype, "interactive", void 0), r([m()], S.prototype, "selectable", void 0), r([m()], S.prototype, "grabbable", void 0), r([m({ value: false })], S.prototype, "grabbing", null), r([m()], S.prototype, "dragging", void 0), r([m()], S.prototype, "hovering", null), r([m({ value: false })], S.prototype, "selected", null), r([m()], S.prototype, "cursor", void 0), S = r([a("esri.views.interactive.GraphicManipulator")], S);
var C2 = n();
var j = f();

export {
  s,
  S
};
//# sourceMappingURL=chunk-RXW7FOAQ.js.map
