import {
  C,
  N,
  S,
  V,
  w
} from "./chunk-FNLLML7N.js";
import {
  l
} from "./chunk-F2TETQWX.js";
import {
  s
} from "./chunk-KMA5CT5B.js";
import {
  Fe,
  P,
  Ut,
  Ye,
  _,
  _e,
  a,
  ae,
  ai,
  be,
  ce,
  e,
  ge,
  gt,
  he,
  hi,
  i,
  me,
  ni,
  oi,
  r,
  ze
} from "./chunk-4K2OWETR.js";
import {
  o
} from "./chunk-PPIAYGRE.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/widgets/Feature/FeatureMedia/pieChart.js
var N2 = class extends ni {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_display", { enumerable: true, configurable: true, writable: true, value: this._root._renderer.makeRadialText("", this.textStyle) });
  }
  _afterNew() {
    super._afterNew();
  }
  _beforeChanged() {
    super._beforeChanged(), this._display.clear(), this.isDirty("textType") && (this._display.textType = this.get("textType"), this.markDirtyBounds()), this.isDirty("radius") && (this._display.radius = this.get("radius"), this.markDirtyBounds()), this.isDirty("startAngle") && (this._display.startAngle = (this.get("startAngle", 0) + 90) * he, this.markDirtyBounds()), this.isDirty("inside") && (this._display.inside = this.get("inside"), this.markDirtyBounds()), this.isDirty("orientation") && (this._display.orientation = this.get("orientation"), this.markDirtyBounds()), this.isDirty("kerning") && (this._display.kerning = this.get("kerning"), this.markDirtyBounds());
  }
};
Object.defineProperty(N2, "className", { enumerable: true, configurable: true, writable: true, value: "RadialText" }), Object.defineProperty(N2, "classNames", { enumerable: true, configurable: true, writable: true, value: ni.classNames.concat([N2.className]) });
var C2 = class extends oi {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_flipped", { enumerable: true, configurable: true, writable: true, value: false });
  }
  _afterNew() {
    this._textKeys.push("textType", "kerning"), super._afterNew();
  }
  _makeText() {
    this._text = this.children.push(N2.new(this._root, {}));
  }
  baseRadius() {
    const e2 = this.getPrivate("radius", 0), t = this.getPrivate("innerRadius", 0), i2 = this.get("baseRadius", 0);
    return t + gt(i2, e2 - t);
  }
  radius() {
    const e2 = this.get("inside", false);
    return this.baseRadius() + this.get("radius", 0) * (e2 ? -1 : 1);
  }
  _updateChildren() {
    if (super._updateChildren(), this.isDirty("baseRadius") || this.isPrivateDirty("radius") || this.isPrivateDirty("innerRadius") || this.isDirty("labelAngle") || this.isDirty("radius") || this.isDirty("inside") || this.isDirty("orientation") || this.isDirty("textType")) {
      const e2 = this.get("textType", "adjusted"), t = this.get("inside", false), i2 = this.get("orientation");
      let s2 = _e(this.get("labelAngle", 0));
      this._text.set("startAngle", this.get("labelAngle", 0)), this._text.set("inside", t);
      const a2 = ce(s2), r2 = ge(s2);
      let l2 = this.baseRadius(), n = this.radius();
      if (this._display.angle = 0, "circular" == e2) this.setAll({ paddingTop: 0, paddingBottom: 0, paddingLeft: 0, paddingRight: 0 }), this.setRaw("x", void 0), this.setRaw("y", void 0), this._text.set("orientation", i2), this._text.set("radius", n);
      else {
        0 == l2 && (s2 = 0, n = 0);
        let t2 = n * r2, o2 = n * a2;
        "radial" == e2 ? (this.setRaw("x", t2), this.setRaw("y", o2), s2 < 90 || s2 > 270 || "auto" != i2 ? (this._display.angle = s2, this._flipped = false) : (this._display.angle = s2 + 180, this._flipped = true), this._dirty.rotation = false) : "adjusted" == e2 ? (this.setRaw("centerX", a), this.setRaw("centerY", a), this.setRaw("x", t2), this.setRaw("y", o2)) : "regular" == e2 && (this.setRaw("x", t2), this.setRaw("y", o2));
      }
      this.markDirtyPosition(), this.markDirtyBounds();
    }
  }
  _updatePosition() {
    const e2 = this.get("textType", "regular"), t = this.get("inside", false);
    let i2 = 0, s2 = 0, a2 = this.get("labelAngle", 0), r2 = this.localBounds(), l2 = r2.right - r2.left, n = r2.bottom - r2.top;
    if ("radial" == e2) {
      if (this._flipped) {
        let e3 = this.get("centerX");
        e3 instanceof e && (l2 *= 1 - 2 * e3.value), i2 = l2 * ge(a2), s2 = l2 * ce(a2);
      }
    } else t || "adjusted" != e2 || (i2 = l2 / 2 * ge(a2), s2 = n / 2 * ce(a2));
    this.setRaw("dx", i2), this.setRaw("dy", s2), super._updatePosition();
  }
  get text() {
    return this._text;
  }
};
Object.defineProperty(C2, "className", { enumerable: true, configurable: true, writable: true, value: "RadialLabel" }), Object.defineProperty(C2, "classNames", { enumerable: true, configurable: true, writable: true, value: oi.classNames.concat([C2.className]) });
var j = Math.abs;
var S2 = Math.atan2;
var O = Math.cos;
var I = Math.max;
var M = Math.min;
var B = Math.sin;
var F = Math.sqrt;
var H = 1e-12;
var X = Math.PI;
var Y = X / 2;
var z = 2 * X;
function V2(e2) {
  return e2 > 1 ? 0 : e2 < -1 ? X : Math.acos(e2);
}
function W(e2) {
  return e2 >= 1 ? Y : e2 <= -1 ? -Y : Math.asin(e2);
}
function U(e2) {
  return e2.innerRadius;
}
function K(e2) {
  return e2.outerRadius;
}
function q(e2) {
  return e2.startAngle;
}
function E(e2) {
  return e2.endAngle;
}
function G(e2) {
  return e2 && e2.padAngle;
}
function J(e2, t, i2, s2, a2, r2, l2, n) {
  var o2 = i2 - e2, h = s2 - t, c = l2 - a2, u = n - r2, d = u * o2 - c * h;
  if (!(d * d < H)) return [e2 + (d = (c * (t - r2) - u * (e2 - a2)) / d) * o2, t + d * h];
}
function Q(e2, t, i2, s2, a2, r2, l2) {
  var n = e2 - i2, o2 = t - s2, h = (l2 ? r2 : -r2) / F(n * n + o2 * o2), c = h * o2, u = -h * n, d = e2 + c, g = t + u, p = i2 + c, y = s2 + u, b = (d + p) / 2, f = (g + y) / 2, m = p - d, _2 = y - g, x = m * m + _2 * _2, v = a2 - r2, w2 = d * y - p * g, k = (_2 < 0 ? -1 : 1) * F(I(0, v * v * x - w2 * w2)), D = (w2 * _2 - m * k) / x, R = (-w2 * m - _2 * k) / x, A = (w2 * _2 + m * k) / x, P2 = (-w2 * m + _2 * k) / x, T = D - b, L = R - f, N3 = A - b, C3 = P2 - f;
  return T * T + L * L > N3 * N3 + C3 * C3 && (D = A, R = P2), { cx: D, cy: R, x01: -c, y01: -u, x11: D * (a2 / v - 1), y11: R * (a2 / v - 1) };
}
function Z() {
  var e2 = U, s2 = K, a2 = C(0), r2 = null, l2 = q, n = E, o2 = G, h = null, c = S(u);
  function u() {
    var t, i2, u2 = +e2.apply(this, arguments), d = +s2.apply(this, arguments), g = l2.apply(this, arguments) - Y, p = n.apply(this, arguments) - Y, y = j(p - g), b = p > g;
    if (h || (h = t = c()), d < u2 && (i2 = d, d = u2, u2 = i2), d > H) if (y > z - H) h.moveTo(d * O(g), d * B(g)), h.arc(0, 0, d, g, p, !b), u2 > H && (h.moveTo(u2 * O(p), u2 * B(p)), h.arc(0, 0, u2, p, g, b));
    else {
      var f, m, _2 = g, x = p, v = g, w2 = p, k = y, D = y, R = o2.apply(this, arguments) / 2, A = R > H && (r2 ? +r2.apply(this, arguments) : F(u2 * u2 + d * d)), P2 = M(j(d - u2) / 2, +a2.apply(this, arguments)), T = P2, L = P2;
      if (A > H) {
        var N3 = W(A / u2 * B(R)), C3 = W(A / d * B(R));
        (k -= 2 * N3) > H ? (v += N3 *= b ? 1 : -1, w2 -= N3) : (k = 0, v = w2 = (g + p) / 2), (D -= 2 * C3) > H ? (_2 += C3 *= b ? 1 : -1, x -= C3) : (D = 0, _2 = x = (g + p) / 2);
      }
      var I2 = d * O(_2), U2 = d * B(_2), K2 = u2 * O(w2), q2 = u2 * B(w2);
      if (P2 > H) {
        var E2, G2 = d * O(x), Z2 = d * B(x), $2 = u2 * O(v), ee2 = u2 * B(v);
        if (y < X) if (E2 = J(I2, U2, $2, ee2, G2, Z2, K2, q2)) {
          var te2 = I2 - E2[0], ie2 = U2 - E2[1], se2 = G2 - E2[0], ae3 = Z2 - E2[1], re = 1 / B(V2((te2 * se2 + ie2 * ae3) / (F(te2 * te2 + ie2 * ie2) * F(se2 * se2 + ae3 * ae3))) / 2), le = F(E2[0] * E2[0] + E2[1] * E2[1]);
          T = M(P2, (u2 - le) / (re - 1)), L = M(P2, (d - le) / (re + 1));
        } else T = L = 0;
      }
      D > H ? L > H ? (f = Q($2, ee2, I2, U2, d, L, b), m = Q(G2, Z2, K2, q2, d, L, b), h.moveTo(f.cx + f.x01, f.cy + f.y01), L < P2 ? h.arc(f.cx, f.cy, L, S2(f.y01, f.x01), S2(m.y01, m.x01), !b) : (h.arc(f.cx, f.cy, L, S2(f.y01, f.x01), S2(f.y11, f.x11), !b), h.arc(0, 0, d, S2(f.cy + f.y11, f.cx + f.x11), S2(m.cy + m.y11, m.cx + m.x11), !b), h.arc(m.cx, m.cy, L, S2(m.y11, m.x11), S2(m.y01, m.x01), !b))) : (h.moveTo(I2, U2), h.arc(0, 0, d, _2, x, !b)) : h.moveTo(I2, U2), u2 > H && k > H ? T > H ? (f = Q(K2, q2, G2, Z2, u2, -T, b), m = Q(I2, U2, $2, ee2, u2, -T, b), h.lineTo(f.cx + f.x01, f.cy + f.y01), T < P2 ? h.arc(f.cx, f.cy, T, S2(f.y01, f.x01), S2(m.y01, m.x01), !b) : (h.arc(f.cx, f.cy, T, S2(f.y01, f.x01), S2(f.y11, f.x11), !b), h.arc(0, 0, u2, S2(f.cy + f.y11, f.cx + f.x11), S2(m.cy + m.y11, m.cx + m.x11), b), h.arc(m.cx, m.cy, T, S2(m.y11, m.x11), S2(m.y01, m.x01), !b))) : h.arc(0, 0, u2, w2, v, b) : h.lineTo(K2, q2);
    }
    else h.moveTo(0, 0);
    if (h.closePath(), t) return h = null, t + "" || null;
  }
  return u.centroid = function() {
    var t = (+e2.apply(this, arguments) + +s2.apply(this, arguments)) / 2, i2 = (+l2.apply(this, arguments) + +n.apply(this, arguments)) / 2 - X / 2;
    return [O(i2) * t, B(i2) * t];
  }, u.innerRadius = function(t) {
    return arguments.length ? (e2 = "function" == typeof t ? t : C(+t), u) : e2;
  }, u.outerRadius = function(e3) {
    return arguments.length ? (s2 = "function" == typeof e3 ? e3 : C(+e3), u) : s2;
  }, u.cornerRadius = function(e3) {
    return arguments.length ? (a2 = "function" == typeof e3 ? e3 : C(+e3), u) : a2;
  }, u.padRadius = function(e3) {
    return arguments.length ? (r2 = null == e3 ? null : "function" == typeof e3 ? e3 : C(+e3), u) : r2;
  }, u.startAngle = function(e3) {
    return arguments.length ? (l2 = "function" == typeof e3 ? e3 : C(+e3), u) : l2;
  }, u.endAngle = function(e3) {
    return arguments.length ? (n = "function" == typeof e3 ? e3 : C(+e3), u) : n;
  }, u.padAngle = function(e3) {
    return arguments.length ? (o2 = "function" == typeof e3 ? e3 : C(+e3), u) : o2;
  }, u.context = function(e3) {
    return arguments.length ? (h = e3 ?? null, u) : h;
  }, u;
}
var $ = class extends Ye {
  constructor() {
    super(...arguments), Object.defineProperty(this, "ix", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "iy", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "_generator", { enumerable: true, configurable: true, writable: true, value: Z() });
  }
  _getTooltipPoint() {
    let e2 = this.get("tooltipX"), t = this.get("tooltipY"), i2 = 0, s2 = 0;
    _(e2) && (i2 = e2), _(t) && (s2 = t);
    let a2 = this.get("radius", 0), r2 = this.get("innerRadius", 0);
    return a2 += this.get("dRadius", 0), r2 += this.get("dInnerRadius", 0), r2 < 0 && (r2 = a2 + r2), e2 instanceof e && (i2 = this.ix * (r2 + (a2 - r2) * e2.value)), t instanceof e && (s2 = this.iy * (r2 + (a2 - r2) * t.value)), this.get("arc") >= 360 && 0 == r2 && (i2 = 0, s2 = 0), { x: i2, y: s2 };
  }
  _beforeChanged() {
    super._beforeChanged(), (this.isDirty("radius") || this.isDirty("arc") || this.isDirty("innerRadius") || this.isDirty("startAngle") || this.isDirty("dRadius") || this.isDirty("dInnerRadius") || this.isDirty("cornerRadius") || this.isDirty("shiftRadius")) && (this._clear = true);
  }
  _changed() {
    if (super._changed(), this._clear) {
      let e2 = this.get("startAngle", 0), t = this.get("arc", 0);
      const i2 = this._generator;
      t < 0 && (e2 += t, t *= -1), t > 0.1 && i2.cornerRadius(this.get("cornerRadius", 0)), i2.context(this._display);
      let s2 = this.get("radius", 0), a2 = this.get("innerRadius", 0);
      s2 += this.get("dRadius", 0), a2 += this.get("dInnerRadius", 0), a2 < 0 && (a2 = s2 + a2), i2({ innerRadius: a2, outerRadius: s2, startAngle: (e2 + 90) * he, endAngle: (e2 + t + 90) * he });
      let r2 = e2 + t / 2;
      this.ix = ge(r2), this.iy = ce(r2);
      const l2 = this.get("shiftRadius", 0);
      this.setRaw("dx", this.ix * l2), this.setRaw("dy", this.iy * l2), this.markDirtyPosition();
    }
  }
};
Object.defineProperty($, "className", { enumerable: true, configurable: true, writable: true, value: "Slice" }), Object.defineProperty($, "classNames", { enumerable: true, configurable: true, writable: true, value: Ye.classNames.concat([$.className]) });
var ee = class extends hi {
  setupDefaultRules() {
    super.setupDefaultRules();
    const e2 = this._root.interfaceColors, t = this.rule.bind(this);
    t("PercentSeries").setAll({ legendLabelText: "{category}", legendValueText: "{valuePercentTotal.formatNumber('0.00p')}", colors: s.new(this._root, {}), width: r, height: r }), t("PieChart").setAll({ radius: i(80), startAngle: -90, endAngle: 270 }), t("PieSeries").setAll({ alignLabels: true, startAngle: -90, endAngle: 270 }), t("PieSeries").states.create("hidden", { endAngle: -90, opacity: 0 }), t("Slice", ["pie"]).setAll({ position: "absolute", isMeasured: false, x: 0, y: 0, toggleKey: "active", tooltipText: "{category}: {valuePercentTotal.formatNumber('0.00p')}", strokeWidth: 1, strokeOpacity: 1, role: "figure", lineJoin: "round" }), t("Slice", ["pie"]).states.create("active", { shiftRadius: 20, scale: 1 }), t("Slice", ["pie"]).states.create("hoverActive", { scale: 1.04 }), t("Slice", ["pie"]).states.create("hover", { scale: 1.04 }), t("RadialLabel", ["pie"]).setAll({ textType: "aligned", radius: 10, text: "{category}: {valuePercentTotal.formatNumber('0.00p')}", paddingTop: 5, paddingBottom: 5, populateText: true }), t("Tick", ["pie"]).setAll({ location: 1 }), t("SlicedChart").setAll({ paddingLeft: 10, paddingRight: 10, paddingTop: 10, paddingBottom: 10 }), t("FunnelSeries").setAll({ startLocation: 0, endLocation: 1, orientation: "vertical", alignLabels: true, sequencedInterpolation: true }), t("FunnelSlice").setAll({ interactive: true, expandDistance: 0 }), t("FunnelSlice").states.create("hover", { expandDistance: 0.15 }), t("Label", ["funnel"]).setAll({ populateText: true, text: "{category}: {valuePercentTotal.formatNumber('0.00p')}", centerY: a }), t("Label", ["funnel", "horizontal"]).setAll({ centerX: 0, centerY: a, rotation: -90 }), t("Label", ["funnel", "vertical"]).setAll({ centerY: a, centerX: 0 }), t("Tick", ["funnel"]).setAll({ location: 1 }), t("FunnelSlice", ["funnel", "link"]).setAll({ fillOpacity: 0.5, strokeOpacity: 0, expandDistance: -0.1 }), t("FunnelSlice", ["funnel", "link", "vertical"]).setAll({ height: 10 }), t("FunnelSlice", ["funnel", "link", "horizontal"]).setAll({ width: 10 }), t("PyramidSeries").setAll({ valueIs: "area" }), t("FunnelSlice", ["pyramid", "link"]).setAll({ fillOpacity: 0.5 }), t("FunnelSlice", ["pyramid", "link", "vertical"]).setAll({ height: 0 }), t("FunnelSlice", ["pyramid", "link", "horizontal"]).setAll({ width: 0 }), t("FunnelSlice", ["pyramid"]).setAll({ interactive: true, expandDistance: 0 }), t("FunnelSlice", ["pyramid"]).states.create("hover", { expandDistance: 0.15 }), t("Label", ["pyramid"]).setAll({ populateText: true, text: "{category}: {valuePercentTotal.formatNumber('0.00p')}", centerY: a }), t("Label", ["pyramid", "horizontal"]).setAll({ centerX: 0, centerY: a, rotation: -90 }), t("Label", ["pyramid", "vertical"]).setAll({ centerY: a, centerX: 0 }), t("Tick", ["pyramid"]).setAll({ location: 1 }), t("FunnelSlice", ["pictorial"]).setAll({ interactive: true, tooltipText: "{category}: {valuePercentTotal.formatNumber('0.00p')}" }), t("Label", ["pictorial"]).setAll({ populateText: true, text: "{category}: {valuePercentTotal.formatNumber('0.00p')}", centerY: a }), t("Label", ["pictorial", "horizontal"]).setAll({ centerX: 0, centerY: a, rotation: -90 }), t("Label", ["pictorial", "vertical"]).setAll({ centerY: a, centerX: 0 }), t("FunnelSlice", ["pictorial", "link"]).setAll({ fillOpacity: 0.5, width: 0, height: 0 }), t("Tick", ["pictorial"]).setAll({ location: 0.5 });
    {
      const i2 = t("Graphics", ["pictorial", "background"]);
      i2.setAll({ fillOpacity: 0.2 }), l(i2, "fill", e2, "alternativeBackground");
    }
  }
};
var te = class extends V {
  _afterNew() {
    this._defaultThemes.push(ee.new(this._root)), super._afterNew(), this.chartContainer.children.push(this.seriesContainer), this.seriesContainer.children.push(this.bulletsContainer);
  }
  _processSeries(e2) {
    super._processSeries(e2), this.seriesContainer.children.moveValue(this.bulletsContainer, this.seriesContainer.children.length - 1);
  }
};
Object.defineProperty(te, "className", { enumerable: true, configurable: true, writable: true, value: "PercentChart" }), Object.defineProperty(te, "classNames", { enumerable: true, configurable: true, writable: true, value: V.classNames.concat([te.className]) });
var ie = class extends w {
  constructor() {
    super(...arguments), Object.defineProperty(this, "slicesContainer", { enumerable: true, configurable: true, writable: true, value: this.children.push(ai.new(this._root, { position: "absolute", isMeasured: false })) }), Object.defineProperty(this, "labelsContainer", { enumerable: true, configurable: true, writable: true, value: this.children.push(ai.new(this._root, { position: "absolute", isMeasured: false })) }), Object.defineProperty(this, "ticksContainer", { enumerable: true, configurable: true, writable: true, value: this.children.push(ai.new(this._root, { position: "absolute", isMeasured: false })) }), Object.defineProperty(this, "_lLabels", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_rLabels", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "_hLabels", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "slices", { enumerable: true, configurable: true, writable: true, value: this.addDisposer(this._makeSlices()) }), Object.defineProperty(this, "labels", { enumerable: true, configurable: true, writable: true, value: this.addDisposer(this._makeLabels()) }), Object.defineProperty(this, "ticks", { enumerable: true, configurable: true, writable: true, value: this.addDisposer(this._makeTicks()) });
  }
  makeSlice(e2) {
    const t = this.slicesContainer.children.push(this.slices.make());
    return t.on("fill", () => {
      this.updateLegendMarker(e2);
    }), t.on("fillPattern", () => {
      this.updateLegendMarker(e2);
    }), t.on("stroke", () => {
      this.updateLegendMarker(e2);
    }), t._setDataItem(e2), e2.set("slice", t), this.slices.push(t), t;
  }
  makeLabel(e2) {
    const t = this.labelsContainer.children.push(this.labels.make());
    return t._setDataItem(e2), e2.set("label", t), this.labels.push(t), t;
  }
  _shouldMakeBullet(e2) {
    return null != e2.get("value");
  }
  makeTick(e2) {
    const t = this.ticksContainer.children.push(this.ticks.make());
    return t._setDataItem(e2), e2.set("tick", t), this.ticks.push(t), t;
  }
  _afterNew() {
    this.fields.push("category", "fill"), super._afterNew();
  }
  _onDataClear() {
    const e2 = this.get("colors");
    e2 && e2.reset();
    const t = this.get("patterns");
    t && t.reset();
  }
  _prepareChildren() {
    if (super._prepareChildren(), this._lLabels = [], this._rLabels = [], this._hLabels = [], this._valuesDirty) {
      let e2 = 0, t = 0, i2 = 0, s2 = 1 / 0, a2 = 0;
      P(this._dataItems, (i3) => {
        let s3 = i3.get("valueWorking", 0);
        e2 += s3, t += Math.abs(s3);
      }), P(this._dataItems, (e3) => {
        let r2 = e3.get("valueWorking", 0);
        r2 > i2 && (i2 = r2), r2 < s2 && (s2 = r2), a2++;
        let l2 = r2 / t;
        0 == t && (l2 = 0), e3.setRaw("valuePercentTotal", 100 * l2);
      }), this.setPrivateRaw("valueLow", s2), this.setPrivateRaw("valueHigh", i2), this.setPrivateRaw("valueSum", e2), this.setPrivateRaw("valueAverage", e2 / a2), this.setPrivateRaw("valueAbsoluteSum", t);
    }
  }
  show(t) {
    const i2 = Object.create(null, { show: { get: () => super.show } });
    return o(this, void 0, void 0, function* () {
      let e2 = [];
      e2.push(i2.show.call(this, t)), e2.push(this._sequencedShowHide(true, t)), yield Promise.all(e2);
    });
  }
  hide(t) {
    const i2 = Object.create(null, { hide: { get: () => super.hide } });
    return o(this, void 0, void 0, function* () {
      let e2 = [];
      e2.push(i2.hide.call(this, t)), e2.push(this._sequencedShowHide(false, t)), yield Promise.all(e2);
    });
  }
  _updateChildren() {
    super._updateChildren(), this._valuesDirty && P(this._dataItems, (e2) => {
      e2.get("label").text.markDirtyText();
    }), (this.isDirty("legendLabelText") || this.isDirty("legendValueText")) && P(this._dataItems, (e2) => {
      this.updateLegendValue(e2);
    }), this._arrange();
  }
  _arrange() {
    this._arrangeDown(this._lLabels), this._arrangeUp(this._lLabels), this._arrangeDown(this._rLabels), this._arrangeUp(this._rLabels), this._arrangeLeft(this._hLabels), this._arrangeRight(this._hLabels), P(this.dataItems, (e2) => {
      this._updateTick(e2);
    });
  }
  _afterChanged() {
    super._afterChanged(), this._arrange();
  }
  processDataItem(e2) {
    if (super.processDataItem(e2), null == e2.get("fill")) {
      let t = this.get("colors");
      t && e2.setRaw("fill", t.next());
    }
    if (null == e2.get("fillPattern")) {
      let t = this.get("patterns");
      t && e2.setRaw("fillPattern", t.next());
    }
  }
  showDataItem(t, i2) {
    const s2 = Object.create(null, { showDataItem: { get: () => super.showDataItem } });
    return o(this, void 0, void 0, function* () {
      const e2 = [s2.showDataItem.call(this, t, i2)];
      _(i2) || (i2 = this.get("stateAnimationDuration", 0));
      const a2 = this.get("stateAnimationEasing");
      let r2 = t.get("value");
      const l2 = t.animate({ key: "valueWorking", to: r2, duration: i2, easing: a2 });
      l2 && e2.push(l2.waitForStop());
      const n = t.get("tick");
      n && e2.push(n.show(i2));
      const o2 = t.get("label");
      o2 && e2.push(o2.show(i2));
      const h = t.get("slice");
      h && e2.push(h.show(i2)), h.get("active") && h.states.applyAnimate("active"), yield Promise.all(e2);
    });
  }
  hideDataItem(t, i2) {
    const s2 = Object.create(null, { hideDataItem: { get: () => super.hideDataItem } });
    return o(this, void 0, void 0, function* () {
      const e2 = [s2.hideDataItem.call(this, t, i2)], a2 = this.states.create("hidden", {});
      _(i2) || (i2 = a2.get("stateAnimationDuration", this.get("stateAnimationDuration", 0)));
      const r2 = a2.get("stateAnimationEasing", this.get("stateAnimationEasing")), l2 = t.animate({ key: "valueWorking", to: 0, duration: i2, easing: r2 });
      l2 && e2.push(l2.waitForStop());
      const n = t.get("tick");
      n && e2.push(n.hide(i2));
      const o2 = t.get("label");
      o2 && e2.push(o2.hide(i2));
      const h = t.get("slice");
      h.hideTooltip(), h && e2.push(h.hide(i2)), yield Promise.all(e2);
    });
  }
  disposeDataItem(e2) {
    super.disposeDataItem(e2);
    let t = e2.get("label");
    t && (this.labels.removeValue(t), t.dispose());
    let i2 = e2.get("tick");
    i2 && (this.ticks.removeValue(i2), i2.dispose());
    let s2 = e2.get("slice");
    s2 && (this.slices.removeValue(s2), s2.dispose());
  }
  hoverDataItem(e2) {
    const t = e2.get("slice");
    t && !t.isHidden() && t.hover();
  }
  unhoverDataItem(e2) {
    const t = e2.get("slice");
    t && t.unhover();
  }
  updateLegendMarker(e2) {
    if (e2) {
      const t = e2.get("slice");
      if (t) {
        const i2 = e2.get("legendDataItem");
        if (i2) {
          const e3 = i2.get("markerRectangle");
          P(ze, (i3) => {
            null != t.get(i3) && e3.set(i3, t.get(i3));
          });
        }
      }
    }
  }
  _arrangeDown(e2) {
    if (e2) {
      let t = this._getNextDown();
      e2.sort((e3, t2) => e3.y > t2.y ? 1 : e3.y < t2.y ? -1 : 0), P(e2, (e3) => {
        const i2 = e3.label.adjustedLocalBounds();
        let s2 = i2.top;
        e3.y + s2 < t && (e3.y = t - s2), e3.label.set("y", e3.y), t = e3.y + i2.bottom;
      });
    }
  }
  _getNextUp() {
    return this.labelsContainer.maxHeight();
  }
  _getNextDown() {
    return 0;
  }
  _arrangeUp(e2) {
    if (e2) {
      let t = this._getNextUp();
      e2.sort((e3, t2) => e3.y < t2.y ? 1 : e3.y > t2.y ? -1 : 0), P(e2, (e3) => {
        const i2 = e3.label.adjustedLocalBounds();
        let s2 = i2.bottom;
        e3.y + s2 > t && (e3.y = t - s2), e3.label.set("y", e3.y), t = e3.y + i2.top;
      });
    }
  }
  _arrangeRight(e2) {
    if (e2) {
      let t = 0;
      e2.sort((e3, t2) => e3.y > t2.y ? 1 : e3.y < t2.y ? -1 : 0), P(e2, (e3) => {
        const i2 = e3.label.adjustedLocalBounds();
        let s2 = i2.left;
        e3.y + s2 < t && (e3.y = t - s2), e3.label.set("x", e3.y), t = e3.y + i2.right;
      });
    }
  }
  _arrangeLeft(e2) {
    if (e2) {
      let t = this.labelsContainer.maxWidth();
      e2.sort((e3, t2) => e3.y < t2.y ? 1 : e3.y > t2.y ? -1 : 0), P(e2, (e3) => {
        const i2 = e3.label.adjustedLocalBounds();
        let s2 = i2.right;
        e3.y + s2 > t && (e3.y = t - s2), e3.label.set("x", e3.y), t = e3.y + i2.left;
      });
    }
  }
  _updateSize() {
    super._updateSize(), this.markDirty();
  }
  _updateTick(e2) {
  }
  _dispose() {
    super._dispose();
    const e2 = this.chart;
    e2 && e2.series.removeValue(this);
  }
};
Object.defineProperty(ie, "className", { enumerable: true, configurable: true, writable: true, value: "PercentSeries" }), Object.defineProperty(ie, "classNames", { enumerable: true, configurable: true, writable: true, value: w.classNames.concat([ie.className]) });
var se = class extends te {
  constructor() {
    super(...arguments), Object.defineProperty(this, "_maxRadius", { enumerable: true, configurable: true, writable: true, value: 1 });
  }
  _afterNew() {
    super._afterNew(), this.seriesContainer.setAll({ x: a, y: a });
  }
  _prepareChildren() {
    super._prepareChildren();
    const e2 = this.chartContainer, t = e2.innerWidth(), i2 = e2.innerHeight(), s2 = this.get("startAngle", 0), a2 = this.get("endAngle", 0), r2 = this.get("innerRadius");
    let l2 = me(0, 0, s2, a2, 1);
    const n = t / (l2.right - l2.left), o2 = i2 / (l2.bottom - l2.top);
    let c = { left: 0, right: 0, top: 0, bottom: 0 };
    if (r2 instanceof e) {
      let e3 = r2.value, l3 = Math.min(n, o2);
      e3 = Math.max(l3 * e3, l3 - Math.min(i2, t)) / l3, c = me(0, 0, s2, a2, e3), this.setPrivateRaw("irModifyer", e3 / r2.value);
    }
    l2 = be([l2, c]);
    const u = this._maxRadius;
    this._maxRadius = Math.min(n, o2);
    const g = gt(this.get("radius", 0), this._maxRadius);
    this.seriesContainer.setAll({ dy: -g * (l2.bottom + l2.top) / 2, dx: -g * (l2.right + l2.left) / 2 }), (this.isDirty("startAngle") || this.isDirty("endAngle") || u != this._maxRadius) && this.series.each((e3) => {
      e3._markDirtyKey("startAngle");
    }), (this.isDirty("innerRadius") || this.isDirty("radius")) && this.series.each((e3) => {
      e3._markDirtyKey("innerRadius");
    });
  }
  radius(e2) {
    let t = gt(this.get("radius", 0), this._maxRadius), i2 = gt(this.get("innerRadius", 0), t);
    if (e2) {
      let s2 = this.series.indexOf(e2), a2 = this.series.length, r2 = e2.get("radius");
      return null != r2 ? i2 + gt(r2, t - i2) : i2 + (t - i2) / a2 * (s2 + 1);
    }
    return t;
  }
  innerRadius(e2) {
    const t = this.radius();
    let i2 = gt(this.get("innerRadius", 0), t);
    if (i2 < 0 && (i2 = t + i2), e2) {
      let s2 = this.series.indexOf(e2), a2 = this.series.length, r2 = e2.get("innerRadius");
      return null != r2 ? i2 + gt(r2, t - i2) : i2 + (t - i2) / a2 * s2;
    }
    return i2;
  }
  _updateSize() {
    super._updateSize(), this.markDirtyKey("radius");
  }
};
Object.defineProperty(se, "className", { enumerable: true, configurable: true, writable: true, value: "PieChart" }), Object.defineProperty(se, "classNames", { enumerable: true, configurable: true, writable: true, value: te.classNames.concat([se.className]) });
var ae2 = class extends ie {
  _makeSlices() {
    return new ae(Fe.new({}), () => $._new(this._root, { themeTags: Ut(this.slices.template.get("themeTags", []), ["pie", "series"]) }, [this.slices.template]));
  }
  _makeLabels() {
    return new ae(Fe.new({}), () => C2._new(this._root, { themeTags: Ut(this.labels.template.get("themeTags", []), ["pie", "series"]) }, [this.labels.template]));
  }
  _makeTicks() {
    return new ae(Fe.new({}), () => N._new(this._root, { themeTags: Ut(this.ticks.template.get("themeTags", []), ["pie", "series"]) }, [this.ticks.template]));
  }
  processDataItem(e2) {
    super.processDataItem(e2);
    const t = this.makeSlice(e2);
    t.on("scale", () => {
      this._updateTick(e2);
    }), t.on("shiftRadius", () => {
      this._updateTick(e2);
    }), t.events.on("positionchanged", () => {
      this._updateTick(e2);
    });
    const i2 = this.makeLabel(e2);
    i2.events.on("positionchanged", () => {
      this._updateTick(e2);
    }), this.makeTick(e2), t.events.on("positionchanged", () => {
      i2.markDirty();
    });
  }
  _getNextUp() {
    const e2 = this.chart;
    return e2 ? e2._maxRadius : this.labelsContainer.maxHeight() / 2;
  }
  _getNextDown() {
    const e2 = this.chart;
    return e2 ? -e2._maxRadius : -this.labelsContainer.maxHeight() / 2;
  }
  _prepareChildren() {
    super._prepareChildren();
    const e2 = this.chart;
    if (e2) {
      if (this.isDirty("alignLabels")) {
        let e3 = this.labels.template;
        if (this.get("alignLabels")) e3.set("textType", "aligned");
        else {
          let t = e3.get("textType");
          null != t && "aligned" != t || e3.set("textType", "adjusted");
        }
      }
      if (this._valuesDirty || this.isDirty("radius") || this.isDirty("innerRadius") || this.isDirty("startAngle") || this.isDirty("endAngle") || this.isDirty("alignLabels")) {
        this.markDirtyBounds();
        const t = this.get("startAngle", e2.get("startAngle", -90)), i2 = this.get("endAngle", e2.get("endAngle", 270)) - t;
        let s2 = t;
        const a2 = e2.radius(this);
        this.setPrivateRaw("radius", a2);
        let r2 = e2.innerRadius(this) * e2.getPrivate("irModifyer", 1);
        r2 < 0 && (r2 = a2 + r2), P(this._dataItems, (e3) => {
          this.updateLegendValue(e3);
          let t2 = i2 * e3.get("valuePercentTotal") / 100;
          const l2 = e3.get("slice");
          if (l2) {
            l2.set("radius", a2), l2.set("innerRadius", r2), l2.set("startAngle", s2), l2.set("arc", t2);
            const i3 = e3.get("fill");
            l2._setDefault("fill", i3), l2._setDefault("stroke", i3);
            const n2 = e3.get("fillPattern");
            l2._setDefault("fillPattern", n2);
          }
          let n = _e(s2 + t2 / 2);
          const o2 = e3.get("label");
          if (o2 && (o2.setPrivate("radius", a2), o2.setPrivate("innerRadius", r2), o2.set("labelAngle", n), "aligned" == o2.get("textType"))) {
            let e4 = a2 + o2.get("radius", 0), t3 = a2 * ce(n);
            n > 90 && n <= 270 ? (o2.isHidden() || o2.isHiding() || this._lLabels.push({ label: o2, y: t3 }), e4 *= -1, e4 -= this.labelsContainer.get("paddingLeft", 0), o2.set("centerX", r), o2.setPrivateRaw("left", true)) : (o2.isHidden() || o2.isHiding() || this._rLabels.push({ label: o2, y: t3 }), e4 += this.labelsContainer.get("paddingRight", 0), o2.set("centerX", 0), o2.setPrivateRaw("left", false)), o2.set("x", e4), o2.set("y", a2 * ce(n));
          }
          s2 += t2, this._updateTick(e3);
        });
      }
    }
  }
  _updateTick(e2) {
    const t = e2.get("tick"), i2 = e2.get("label"), s2 = e2.get("slice"), a2 = t.get("location", 1);
    if (t && i2 && s2) {
      const e3 = (s2.get("shiftRadius", 0) + s2.get("radius", 0)) * s2.get("scale", 1) * a2, r2 = i2.get("labelAngle", 0), l2 = ge(r2), n = ce(r2), o2 = this.labelsContainer, h = o2.get("paddingLeft", 0), c = o2.get("paddingRight", 0);
      let u = 0, d = 0;
      u = i2.x(), d = i2.y();
      let y = [];
      if (0 != u || 0 != d) {
        if ("circular" == i2.get("textType")) {
          const e4 = i2.radius() - i2.get("paddingBottom", 0), t3 = i2.get("labelAngle", 0);
          u = e4 * ge(t3), d = e4 * ce(t3);
        }
        let t2 = -c;
        i2.getPrivate("left") && (t2 = h), y = [{ x: s2.x() + e3 * l2, y: s2.y() + e3 * n }, { x: u + t2, y: d }, { x: u, y: d }];
      }
      t.set("points", y);
    }
  }
  _positionBullet(e2) {
    const t = e2.get("sprite");
    if (t) {
      const i2 = t.dataItem.get("slice");
      if (i2) {
        const s2 = i2.get("innerRadius", 0), a2 = i2.get("radius", 0), r2 = i2.get("startAngle", 0) + i2.get("arc", 0) * e2.get("locationX", 0.5), l2 = s2 + (a2 - s2) * e2.get("locationY", 0.5);
        t.setAll({ x: ge(r2) * l2, y: ce(r2) * l2 });
      }
    }
  }
};
Object.defineProperty(ae2, "className", { enumerable: true, configurable: true, writable: true, value: "PieSeries" }), Object.defineProperty(ae2, "classNames", { enumerable: true, configurable: true, writable: true, value: ie.classNames.concat([ae2.className]) });
export {
  se as PieChartAm5,
  ae2 as PieSeriesAm5
};
//# sourceMappingURL=pieChart-5Q2SDUKN.js.map
