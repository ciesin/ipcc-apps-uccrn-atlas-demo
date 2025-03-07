// node_modules/@esri/calcite-components/dist/chunks/_commonjsHelpers.js
var o = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function l(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}

// node_modules/@esri/calcite-components/dist/chunks/interact.min.js
var Xe = { exports: {} };
Xe.exports;
(function(ye, Fr) {
  (function(Ye, re) {
    ye.exports = re();
  })(o, function() {
    function Ye(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e && (r = r.filter(function(i) {
          return Object.getOwnPropertyDescriptor(t, i).enumerable;
        })), n.push.apply(n, r);
      }
      return n;
    }
    function re(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e] != null ? arguments[e] : {};
        e % 2 ? Ye(Object(n), true).forEach(function(r) {
          xn(t, r, n[r]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ye(Object(n)).forEach(function(r) {
          Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
        });
      }
      return t;
    }
    function Z(t) {
      return Z = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e;
      } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, Z(t);
    }
    function k(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }
    function bn(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(t, vt(r.key), r);
      }
    }
    function D(t, e, n) {
      return e && bn(t.prototype, e), Object.defineProperty(t, "prototype", { writable: false }), t;
    }
    function xn(t, e, n) {
      return (e = vt(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: true, configurable: true, writable: true }) : t[e] = n, t;
    }
    function ie(t, e) {
      if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function");
      t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: true, configurable: true } }), Object.defineProperty(t, "prototype", { writable: false }), e && Le(t, e);
    }
    function U(t) {
      return U = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, U(t);
    }
    function Le(t, e) {
      return Le = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
        return n.__proto__ = r, n;
      }, Le(t, e);
    }
    function be(t) {
      if (t === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }
    function oe(t) {
      var e = function() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
        if (typeof Proxy == "function") return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch {
          return false;
        }
      }();
      return function() {
        var n, r = U(t);
        if (e) {
          var i = U(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return function(o2, a) {
          if (a && (typeof a == "object" || typeof a == "function")) return a;
          if (a !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
          return be(o2);
        }(this, n);
      };
    }
    function xe() {
      return xe = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
        var r = function(o2, a) {
          for (; !Object.prototype.hasOwnProperty.call(o2, a) && (o2 = U(o2)) !== null; ) ;
          return o2;
        }(t, e);
        if (r) {
          var i = Object.getOwnPropertyDescriptor(r, e);
          return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value;
        }
      }, xe.apply(this, arguments);
    }
    function vt(t) {
      var e = function(n, r) {
        if (typeof n != "object" || n === null) return n;
        var i = n[Symbol.toPrimitive];
        if (i !== void 0) {
          var o2 = i.call(n, r);
          if (typeof o2 != "object") return o2;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(n);
      }(t, "string");
      return typeof e == "symbol" ? e : e + "";
    }
    var gt = function(t) {
      return !(!t || !t.Window) && t instanceof t.Window;
    }, mt = void 0, H = void 0;
    function yt(t) {
      mt = t;
      var e = t.document.createTextNode("");
      e.ownerDocument !== t.document && typeof t.wrap == "function" && t.wrap(e) === e && (t = t.wrap(t)), H = t;
    }
    function F(t) {
      return gt(t) ? t : (t.ownerDocument || t).defaultView || H.window;
    }
    typeof window < "u" && window && yt(window);
    var we = function(t) {
      return !!t && Z(t) === "object";
    }, bt = function(t) {
      return typeof t == "function";
    }, d = { window: function(t) {
      return t === H || gt(t);
    }, docFrag: function(t) {
      return we(t) && t.nodeType === 11;
    }, object: we, func: bt, number: function(t) {
      return typeof t == "number";
    }, bool: function(t) {
      return typeof t == "boolean";
    }, string: function(t) {
      return typeof t == "string";
    }, element: function(t) {
      if (!t || Z(t) !== "object") return false;
      var e = F(t) || H;
      return /object|function/.test(typeof Element > "u" ? "undefined" : Z(Element)) ? t instanceof Element || t instanceof e.Element : t.nodeType === 1 && typeof t.nodeName == "string";
    }, plainObject: function(t) {
      return we(t) && !!t.constructor && /function Object\b/.test(t.constructor.toString());
    }, array: function(t) {
      return we(t) && t.length !== void 0 && bt(t.splice);
    } };
    function qe(t) {
      var e = t.interaction;
      if (e.prepared.name === "drag") {
        var n = e.prepared.axis;
        n === "x" ? (e.coords.cur.page.y = e.coords.start.page.y, e.coords.cur.client.y = e.coords.start.client.y, e.coords.velocity.client.y = 0, e.coords.velocity.page.y = 0) : n === "y" && (e.coords.cur.page.x = e.coords.start.page.x, e.coords.cur.client.x = e.coords.start.client.x, e.coords.velocity.client.x = 0, e.coords.velocity.page.x = 0);
      }
    }
    function xt(t) {
      var e = t.iEvent, n = t.interaction;
      if (n.prepared.name === "drag") {
        var r = n.prepared.axis;
        if (r === "x" || r === "y") {
          var i = r === "x" ? "y" : "x";
          e.page[i] = n.coords.start.page[i], e.client[i] = n.coords.start.client[i], e.delta[i] = 0;
        }
      }
    }
    var Ee = { id: "actions/drag", install: function(t) {
      var e = t.actions, n = t.Interactable, r = t.defaults;
      n.prototype.draggable = Ee.draggable, e.map.drag = Ee, e.methodDict.drag = "draggable", r.actions.drag = Ee.defaults;
    }, listeners: { "interactions:before-action-move": qe, "interactions:action-resume": qe, "interactions:action-move": xt, "auto-start:check": function(t) {
      var e = t.interaction, n = t.interactable, r = t.buttons, i = n.options.drag;
      if (i && i.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || r & n.options.drag.mouseButtons)) return t.action = { name: "drag", axis: i.lockAxis === "start" ? i.startAxis : i.lockAxis }, false;
    } }, draggable: function(t) {
      return d.object(t) ? (this.options.drag.enabled = t.enabled !== false, this.setPerAction("drag", t), this.setOnEvents("drag", t), /^(xy|x|y|start)$/.test(t.lockAxis) && (this.options.drag.lockAxis = t.lockAxis), /^(xy|x|y)$/.test(t.startAxis) && (this.options.drag.startAxis = t.startAxis), this) : d.bool(t) ? (this.options.drag.enabled = t, this) : this.options.drag;
    }, beforeMove: qe, move: xt, defaults: { startAxis: "xy", lockAxis: "xy" }, getCursor: function() {
      return "move";
    }, filterEventType: function(t) {
      return t.search("drag") === 0;
    } }, wt = Ee, A = { init: function(t) {
      var e = t;
      A.document = e.document, A.DocumentFragment = e.DocumentFragment || ee, A.SVGElement = e.SVGElement || ee, A.SVGSVGElement = e.SVGSVGElement || ee, A.SVGElementInstance = e.SVGElementInstance || ee, A.Element = e.Element || ee, A.HTMLElement = e.HTMLElement || A.Element, A.Event = e.Event, A.Touch = e.Touch || ee, A.PointerEvent = e.PointerEvent || e.MSPointerEvent;
    }, document: null, DocumentFragment: null, SVGElement: null, SVGSVGElement: null, SVGElementInstance: null, Element: null, HTMLElement: null, Event: null, Touch: null, PointerEvent: null };
    function ee() {
    }
    var O = A, C = { init: function(t) {
      var e = O.Element, n = t.navigator || {};
      C.supportsTouch = "ontouchstart" in t || d.func(t.DocumentTouch) && O.document instanceof t.DocumentTouch, C.supportsPointerEvent = n.pointerEnabled !== false && !!O.PointerEvent, C.isIOS = /iP(hone|od|ad)/.test(n.platform), C.isIOS7 = /iP(hone|od|ad)/.test(n.platform) && /OS 7[^\d]/.test(n.appVersion), C.isIe9 = /MSIE 9/.test(n.userAgent), C.isOperaMobile = n.appName === "Opera" && C.supportsTouch && /Presto/.test(n.userAgent), C.prefixedMatchesSelector = "matches" in e.prototype ? "matches" : "webkitMatchesSelector" in e.prototype ? "webkitMatchesSelector" : "mozMatchesSelector" in e.prototype ? "mozMatchesSelector" : "oMatchesSelector" in e.prototype ? "oMatchesSelector" : "msMatchesSelector", C.pEventTypes = C.supportsPointerEvent ? O.PointerEvent === t.MSPointerEvent ? { up: "MSPointerUp", down: "MSPointerDown", over: "mouseover", out: "mouseout", move: "MSPointerMove", cancel: "MSPointerCancel" } : { up: "pointerup", down: "pointerdown", over: "pointerover", out: "pointerout", move: "pointermove", cancel: "pointercancel" } : null, C.wheelEvent = O.document && "onmousewheel" in O.document ? "mousewheel" : "wheel";
    }, supportsTouch: null, supportsPointerEvent: null, isIOS7: null, isIOS: null, isIe9: null, isOperaMobile: null, prefixedMatchesSelector: null, pEventTypes: null, wheelEvent: null }, R = C;
    function K(t, e) {
      if (t.contains) return t.contains(e);
      for (; e; ) {
        if (e === t) return true;
        e = e.parentNode;
      }
      return false;
    }
    function Et(t, e) {
      for (; d.element(t); ) {
        if (B(t, e)) return t;
        t = X(t);
      }
      return null;
    }
    function X(t) {
      var e = t.parentNode;
      if (d.docFrag(e)) {
        for (; (e = e.host) && d.docFrag(e); ) ;
        return e;
      }
      return e;
    }
    function B(t, e) {
      return H !== mt && (e = e.replace(/\/deep\//g, " ")), t[R.prefixedMatchesSelector](e);
    }
    var Be = function(t) {
      return t.parentNode || t.host;
    };
    function Tt(t, e) {
      for (var n, r = [], i = t; (n = Be(i)) && i !== e && n !== i.ownerDocument; ) r.unshift(i), i = n;
      return r;
    }
    function Ve(t, e, n) {
      for (; d.element(t); ) {
        if (B(t, e)) return true;
        if ((t = X(t)) === n) return B(t, e);
      }
      return false;
    }
    function St(t) {
      return t.correspondingUseElement || t;
    }
    function We(t) {
      var e = t instanceof O.SVGElement ? t.getBoundingClientRect() : t.getClientRects()[0];
      return e && { left: e.left, right: e.right, top: e.top, bottom: e.bottom, width: e.width || e.right - e.left, height: e.height || e.bottom - e.top };
    }
    function Ge(t) {
      var e, n = We(t);
      if (!R.isIOS7 && n) {
        var r = { x: (e = (e = F(t)) || H).scrollX || e.document.documentElement.scrollLeft, y: e.scrollY || e.document.documentElement.scrollTop };
        n.left += r.x, n.right += r.x, n.top += r.y, n.bottom += r.y;
      }
      return n;
    }
    function _t(t) {
      for (var e = []; t; ) e.push(t), t = X(t);
      return e;
    }
    function Pt(t) {
      return !!d.string(t) && (O.document.querySelector(t), true);
    }
    function x(t, e) {
      for (var n in e) t[n] = e[n];
      return t;
    }
    function Ot(t, e, n) {
      return t === "parent" ? X(n) : t === "self" ? e.getRect(n) : Et(n, t);
    }
    function ae(t, e, n, r) {
      var i = t;
      return d.string(i) ? i = Ot(i, e, n) : d.func(i) && (i = i.apply(void 0, r)), d.element(i) && (i = Ge(i)), i;
    }
    function Te(t) {
      return t && { x: "x" in t ? t.x : t.left, y: "y" in t ? t.y : t.top };
    }
    function Ne(t) {
      return !t || "x" in t && "y" in t || ((t = x({}, t)).x = t.left || 0, t.y = t.top || 0, t.width = t.width || (t.right || 0) - t.x, t.height = t.height || (t.bottom || 0) - t.y), t;
    }
    function Se(t, e, n) {
      t.left && (e.left += n.x), t.right && (e.right += n.x), t.top && (e.top += n.y), t.bottom && (e.bottom += n.y), e.width = e.right - e.left, e.height = e.bottom - e.top;
    }
    function se(t, e, n) {
      var r = n && t.options[n];
      return Te(ae(r && r.origin || t.options.origin, t, e, [t && e])) || { x: 0, y: 0 };
    }
    function $(t, e) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(c) {
        return true;
      }, r = arguments.length > 3 ? arguments[3] : void 0;
      if (r = r || {}, d.string(t) && t.search(" ") !== -1 && (t = kt(t)), d.array(t)) return t.forEach(function(c) {
        return $(c, e, n, r);
      }), r;
      if (d.object(t) && (e = t, t = ""), d.func(e) && n(t)) r[t] = r[t] || [], r[t].push(e);
      else if (d.array(e)) for (var i = 0, o2 = e; i < o2.length; i++) {
        var a = o2[i];
        $(t, a, n, r);
      }
      else if (d.object(e)) for (var s in e)
        $(kt(s).map(function(c) {
          return "".concat(t).concat(c);
        }), e[s], n, r);
      return r;
    }
    function kt(t) {
      return t.trim().split(/ +/);
    }
    var ce = function(t, e) {
      return Math.sqrt(t * t + e * e);
    }, wn = ["webkit", "moz"];
    function _e(t, e) {
      t.__set || (t.__set = {});
      var n = function(i) {
        if (wn.some(function(o2) {
          return i.indexOf(o2) === 0;
        })) return 1;
        typeof t[i] != "function" && i !== "__set" && Object.defineProperty(t, i, { get: function() {
          return i in t.__set ? t.__set[i] : t.__set[i] = e[i];
        }, set: function(o2) {
          t.__set[i] = o2;
        }, configurable: true });
      };
      for (var r in e) n(r);
      return t;
    }
    function Pe(t, e) {
      t.page = t.page || {}, t.page.x = e.page.x, t.page.y = e.page.y, t.client = t.client || {}, t.client.x = e.client.x, t.client.y = e.client.y, t.timeStamp = e.timeStamp;
    }
    function Dt(t) {
      t.page.x = 0, t.page.y = 0, t.client.x = 0, t.client.y = 0;
    }
    function It(t) {
      return t instanceof O.Event || t instanceof O.Touch;
    }
    function Oe(t, e, n) {
      return t = t || "page", (n = n || {}).x = e[t + "X"], n.y = e[t + "Y"], n;
    }
    function Mt(t, e) {
      return e = e || { x: 0, y: 0 }, R.isOperaMobile && It(t) ? (Oe("screen", t, e), e.x += window.scrollX, e.y += window.scrollY) : Oe("page", t, e), e;
    }
    function ue(t) {
      return d.number(t.pointerId) ? t.pointerId : t.identifier;
    }
    function En(t, e, n) {
      var r = e.length > 1 ? zt(e) : e[0];
      Mt(r, t.page), function(i, o2) {
        o2 = o2 || {}, R.isOperaMobile && It(i) ? Oe("screen", i, o2) : Oe("client", i, o2);
      }(r, t.client), t.timeStamp = n;
    }
    function Ue(t) {
      var e = [];
      return d.array(t) ? (e[0] = t[0], e[1] = t[1]) : t.type === "touchend" ? t.touches.length === 1 ? (e[0] = t.touches[0], e[1] = t.changedTouches[0]) : t.touches.length === 0 && (e[0] = t.changedTouches[0], e[1] = t.changedTouches[1]) : (e[0] = t.touches[0], e[1] = t.touches[1]), e;
    }
    function zt(t) {
      for (var e = { pageX: 0, pageY: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0 }, n = 0; n < t.length; n++) {
        var r = t[n];
        for (var i in e) e[i] += r[i];
      }
      for (var o2 in e) e[o2] /= t.length;
      return e;
    }
    function He(t) {
      if (!t.length) return null;
      var e = Ue(t), n = Math.min(e[0].pageX, e[1].pageX), r = Math.min(e[0].pageY, e[1].pageY), i = Math.max(e[0].pageX, e[1].pageX), o2 = Math.max(e[0].pageY, e[1].pageY);
      return { x: n, y: r, left: n, top: r, right: i, bottom: o2, width: i - n, height: o2 - r };
    }
    function Ke(t, e) {
      var n = e + "X", r = e + "Y", i = Ue(t), o2 = i[0][n] - i[1][n], a = i[0][r] - i[1][r];
      return ce(o2, a);
    }
    function $e(t, e) {
      var n = e + "X", r = e + "Y", i = Ue(t), o2 = i[1][n] - i[0][n], a = i[1][r] - i[0][r];
      return 180 * Math.atan2(a, o2) / Math.PI;
    }
    function At(t) {
      return d.string(t.pointerType) ? t.pointerType : d.number(t.pointerType) ? [void 0, void 0, "touch", "pen", "mouse"][t.pointerType] : /touch/.test(t.type || "") || t instanceof O.Touch ? "touch" : "mouse";
    }
    function Ct(t) {
      var e = d.func(t.composedPath) ? t.composedPath() : t.path;
      return [St(e ? e[0] : t.target), St(t.currentTarget)];
    }
    var ke = function() {
      function t(e) {
        k(this, t), this.immediatePropagationStopped = false, this.propagationStopped = false, this._interaction = e;
      }
      return D(t, [{ key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]), t;
    }();
    Object.defineProperty(ke.prototype, "interaction", { get: function() {
      return this._interaction._proxy;
    }, set: function() {
    } });
    var Rt = function(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        t.push(r);
      }
      return t;
    }, jt = function(t) {
      return Rt([], t);
    }, le = function(t, e) {
      for (var n = 0; n < t.length; n++) if (e(t[n], n, t)) return n;
      return -1;
    }, pe = function(t, e) {
      return t[le(t, e)];
    }, te = function(t) {
      ie(n, t);
      var e = oe(n);
      function n(r, i, o2) {
        var a;
        k(this, n), (a = e.call(this, i._interaction)).dropzone = void 0, a.dragEvent = void 0, a.relatedTarget = void 0, a.draggable = void 0, a.propagationStopped = false, a.immediatePropagationStopped = false;
        var s = o2 === "dragleave" ? r.prev : r.cur, c = s.element, l2 = s.dropzone;
        return a.type = o2, a.target = c, a.currentTarget = c, a.dropzone = l2, a.dragEvent = i, a.relatedTarget = i.target, a.draggable = i.interactable, a.timeStamp = i.timeStamp, a;
      }
      return D(n, [{ key: "reject", value: function() {
        var r = this, i = this._interaction.dropState;
        if (this.type === "dropactivate" || this.dropzone && i.cur.dropzone === this.dropzone && i.cur.element === this.target) if (i.prev.dropzone = this.dropzone, i.prev.element = this.target, i.rejected = true, i.events.enter = null, this.stopImmediatePropagation(), this.type === "dropactivate") {
          var o2 = i.activeDrops, a = le(o2, function(c) {
            var l2 = c.dropzone, u = c.element;
            return l2 === r.dropzone && u === r.target;
          });
          i.activeDrops.splice(a, 1);
          var s = new n(i, this.dragEvent, "dropdeactivate");
          s.dropzone = this.dropzone, s.target = this.target, this.dropzone.fire(s);
        } else this.dropzone.fire(new n(i, this.dragEvent, "dragleave"));
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }]), n;
    }(ke);
    function Ft(t, e) {
      for (var n = 0, r = t.slice(); n < r.length; n++) {
        var i = r[n], o2 = i.dropzone, a = i.element;
        e.dropzone = o2, e.target = a, o2.fire(e), e.propagationStopped = e.immediatePropagationStopped = false;
      }
    }
    function Je(t, e) {
      for (var n = function(o2, a) {
        for (var s = [], c = 0, l2 = o2.interactables.list; c < l2.length; c++) {
          var u = l2[c];
          if (u.options.drop.enabled) {
            var p = u.options.drop.accept;
            if (!(d.element(p) && p !== a || d.string(p) && !B(a, p) || d.func(p) && !p({ dropzone: u, draggableElement: a }))) for (var f = 0, v = u.getAllElements(); f < v.length; f++) {
              var h = v[f];
              h !== a && s.push({ dropzone: u, element: h, rect: u.getRect(h) });
            }
          }
        }
        return s;
      }(t, e), r = 0; r < n.length; r++) {
        var i = n[r];
        i.rect = i.dropzone.getRect(i.element);
      }
      return n;
    }
    function Xt(t, e, n) {
      for (var r = t.dropState, i = t.interactable, o2 = t.element, a = [], s = 0, c = r.activeDrops; s < c.length; s++) {
        var l2 = c[s], u = l2.dropzone, p = l2.element, f = l2.rect, v = u.dropCheck(e, n, i, o2, p, f);
        a.push(v ? p : null);
      }
      var h = function(g) {
        for (var y, m, b, T = [], _ = 0; _ < g.length; _++) {
          var w = g[_], S = g[y];
          if (w && _ !== y) if (S) {
            var M = Be(w), P = Be(S);
            if (M !== w.ownerDocument) if (P !== w.ownerDocument) if (M !== P) {
              T = T.length ? T : Tt(S);
              var z = void 0;
              if (S instanceof O.HTMLElement && w instanceof O.SVGElement && !(w instanceof O.SVGSVGElement)) {
                if (w === P) continue;
                z = w.ownerSVGElement;
              } else z = w;
              for (var j = Tt(z, S.ownerDocument), q = 0; j[q] && j[q] === T[q]; ) q++;
              var Fe = [j[q - 1], j[q], T[q]];
              if (Fe[0]) for (var me = Fe[0].lastChild; me; ) {
                if (me === Fe[1]) {
                  y = _, T = j;
                  break;
                }
                if (me === Fe[2]) break;
                me = me.previousSibling;
              }
            } else b = S, (parseInt(F(m = w).getComputedStyle(m).zIndex, 10) || 0) >= (parseInt(F(b).getComputedStyle(b).zIndex, 10) || 0) && (y = _);
            else y = _;
          } else y = _;
        }
        return y;
      }(a);
      return r.activeDrops[h] || null;
    }
    function Qe(t, e, n) {
      var r = t.dropState, i = { enter: null, leave: null, activate: null, deactivate: null, move: null, drop: null };
      return n.type === "dragstart" && (i.activate = new te(r, n, "dropactivate"), i.activate.target = null, i.activate.dropzone = null), n.type === "dragend" && (i.deactivate = new te(r, n, "dropdeactivate"), i.deactivate.target = null, i.deactivate.dropzone = null), r.rejected || (r.cur.element !== r.prev.element && (r.prev.dropzone && (i.leave = new te(r, n, "dragleave"), n.dragLeave = i.leave.target = r.prev.element, n.prevDropzone = i.leave.dropzone = r.prev.dropzone), r.cur.dropzone && (i.enter = new te(r, n, "dragenter"), n.dragEnter = r.cur.element, n.dropzone = r.cur.dropzone)), n.type === "dragend" && r.cur.dropzone && (i.drop = new te(r, n, "drop"), n.dropzone = r.cur.dropzone, n.relatedTarget = r.cur.element), n.type === "dragmove" && r.cur.dropzone && (i.move = new te(r, n, "dropmove"), n.dropzone = r.cur.dropzone)), i;
    }
    function Ze(t, e) {
      var n = t.dropState, r = n.activeDrops, i = n.cur, o2 = n.prev;
      e.leave && o2.dropzone.fire(e.leave), e.enter && i.dropzone.fire(e.enter), e.move && i.dropzone.fire(e.move), e.drop && i.dropzone.fire(e.drop), e.deactivate && Ft(r, e.deactivate), n.prev.dropzone = i.dropzone, n.prev.element = i.element;
    }
    function Yt(t, e) {
      var n = t.interaction, r = t.iEvent, i = t.event;
      if (r.type === "dragmove" || r.type === "dragend") {
        var o2 = n.dropState;
        e.dynamicDrop && (o2.activeDrops = Je(e, n.element));
        var a = r, s = Xt(n, a, i);
        o2.rejected = o2.rejected && !!s && s.dropzone === o2.cur.dropzone && s.element === o2.cur.element, o2.cur.dropzone = s && s.dropzone, o2.cur.element = s && s.element, o2.events = Qe(n, 0, a);
      }
    }
    var Lt = { id: "actions/drop", install: function(t) {
      var e = t.actions, n = t.interactStatic, r = t.Interactable, i = t.defaults;
      t.usePlugin(wt), r.prototype.dropzone = function(o2) {
        return function(a, s) {
          if (d.object(s)) {
            if (a.options.drop.enabled = s.enabled !== false, s.listeners) {
              var c = $(s.listeners), l2 = Object.keys(c).reduce(function(p, f) {
                return p[/^(enter|leave)/.test(f) ? "drag".concat(f) : /^(activate|deactivate|move)/.test(f) ? "drop".concat(f) : f] = c[f], p;
              }, {}), u = a.options.drop.listeners;
              u && a.off(u), a.on(l2), a.options.drop.listeners = l2;
            }
            return d.func(s.ondrop) && a.on("drop", s.ondrop), d.func(s.ondropactivate) && a.on("dropactivate", s.ondropactivate), d.func(s.ondropdeactivate) && a.on("dropdeactivate", s.ondropdeactivate), d.func(s.ondragenter) && a.on("dragenter", s.ondragenter), d.func(s.ondragleave) && a.on("dragleave", s.ondragleave), d.func(s.ondropmove) && a.on("dropmove", s.ondropmove), /^(pointer|center)$/.test(s.overlap) ? a.options.drop.overlap = s.overlap : d.number(s.overlap) && (a.options.drop.overlap = Math.max(Math.min(1, s.overlap), 0)), "accept" in s && (a.options.drop.accept = s.accept), "checker" in s && (a.options.drop.checker = s.checker), a;
          }
          return d.bool(s) ? (a.options.drop.enabled = s, a) : a.options.drop;
        }(this, o2);
      }, r.prototype.dropCheck = function(o2, a, s, c, l2, u) {
        return function(p, f, v, h, g, y, m) {
          var b = false;
          if (!(m = m || p.getRect(y))) return !!p.options.drop.checker && p.options.drop.checker(f, v, b, p, y, h, g);
          var T = p.options.drop.overlap;
          if (T === "pointer") {
            var _ = se(h, g, "drag"), w = Mt(f);
            w.x += _.x, w.y += _.y;
            var S = w.x > m.left && w.x < m.right, M = w.y > m.top && w.y < m.bottom;
            b = S && M;
          }
          var P = h.getRect(g);
          if (P && T === "center") {
            var z = P.left + P.width / 2, j = P.top + P.height / 2;
            b = z >= m.left && z <= m.right && j >= m.top && j <= m.bottom;
          }
          return P && d.number(T) && (b = Math.max(0, Math.min(m.right, P.right) - Math.max(m.left, P.left)) * Math.max(0, Math.min(m.bottom, P.bottom) - Math.max(m.top, P.top)) / (P.width * P.height) >= T), p.options.drop.checker && (b = p.options.drop.checker(f, v, b, p, y, h, g)), b;
        }(this, o2, a, s, c, l2, u);
      }, n.dynamicDrop = function(o2) {
        return d.bool(o2) ? (t.dynamicDrop = o2, n) : t.dynamicDrop;
      }, x(e.phaselessTypes, { dragenter: true, dragleave: true, dropactivate: true, dropdeactivate: true, dropmove: true, drop: true }), e.methodDict.drop = "dropzone", t.dynamicDrop = false, i.actions.drop = Lt.defaults;
    }, listeners: { "interactions:before-action-start": function(t) {
      var e = t.interaction;
      e.prepared.name === "drag" && (e.dropState = { cur: { dropzone: null, element: null }, prev: { dropzone: null, element: null }, rejected: null, events: null, activeDrops: [] });
    }, "interactions:after-action-start": function(t, e) {
      var n = t.interaction, r = (t.event, t.iEvent);
      if (n.prepared.name === "drag") {
        var i = n.dropState;
        i.activeDrops = [], i.events = {}, i.activeDrops = Je(e, n.element), i.events = Qe(n, 0, r), i.events.activate && (Ft(i.activeDrops, i.events.activate), e.fire("actions/drop:start", { interaction: n, dragEvent: r }));
      }
    }, "interactions:action-move": Yt, "interactions:after-action-move": function(t, e) {
      var n = t.interaction, r = t.iEvent;
      if (n.prepared.name === "drag") {
        var i = n.dropState;
        Ze(n, i.events), e.fire("actions/drop:move", { interaction: n, dragEvent: r }), i.events = {};
      }
    }, "interactions:action-end": function(t, e) {
      if (t.interaction.prepared.name === "drag") {
        var n = t.interaction, r = t.iEvent;
        Yt(t, e), Ze(n, n.dropState.events), e.fire("actions/drop:end", { interaction: n, dragEvent: r });
      }
    }, "interactions:stop": function(t) {
      var e = t.interaction;
      if (e.prepared.name === "drag") {
        var n = e.dropState;
        n && (n.activeDrops = null, n.events = null, n.cur.dropzone = null, n.cur.element = null, n.prev.dropzone = null, n.prev.element = null, n.rejected = false);
      }
    } }, getActiveDrops: Je, getDrop: Xt, getDropEvents: Qe, fireDropEvents: Ze, filterEventType: function(t) {
      return t.search("drag") === 0 || t.search("drop") === 0;
    }, defaults: { enabled: false, accept: null, overlap: "pointer" } }, Tn = Lt;
    function et(t) {
      var e = t.interaction, n = t.iEvent, r = t.phase;
      if (e.prepared.name === "gesture") {
        var i = e.pointers.map(function(l2) {
          return l2.pointer;
        }), o2 = r === "start", a = r === "end", s = e.interactable.options.deltaSource;
        if (n.touches = [i[0], i[1]], o2) n.distance = Ke(i, s), n.box = He(i), n.scale = 1, n.ds = 0, n.angle = $e(i, s), n.da = 0, e.gesture.startDistance = n.distance, e.gesture.startAngle = n.angle;
        else if (a || e.pointers.length < 2) {
          var c = e.prevEvent;
          n.distance = c.distance, n.box = c.box, n.scale = c.scale, n.ds = 0, n.angle = c.angle, n.da = 0;
        } else n.distance = Ke(i, s), n.box = He(i), n.scale = n.distance / e.gesture.startDistance, n.angle = $e(i, s), n.ds = n.scale - e.gesture.scale, n.da = n.angle - e.gesture.angle;
        e.gesture.distance = n.distance, e.gesture.angle = n.angle, d.number(n.scale) && n.scale !== 1 / 0 && !isNaN(n.scale) && (e.gesture.scale = n.scale);
      }
    }
    var tt = { id: "actions/gesture", before: ["actions/drag", "actions/resize"], install: function(t) {
      var e = t.actions, n = t.Interactable, r = t.defaults;
      n.prototype.gesturable = function(i) {
        return d.object(i) ? (this.options.gesture.enabled = i.enabled !== false, this.setPerAction("gesture", i), this.setOnEvents("gesture", i), this) : d.bool(i) ? (this.options.gesture.enabled = i, this) : this.options.gesture;
      }, e.map.gesture = tt, e.methodDict.gesture = "gesturable", r.actions.gesture = tt.defaults;
    }, listeners: { "interactions:action-start": et, "interactions:action-move": et, "interactions:action-end": et, "interactions:new": function(t) {
      t.interaction.gesture = { angle: 0, distance: 0, scale: 1, startAngle: 0, startDistance: 0 };
    }, "auto-start:check": function(t) {
      if (!(t.interaction.pointers.length < 2)) {
        var e = t.interactable.options.gesture;
        if (e && e.enabled) return t.action = { name: "gesture" }, false;
      }
    } }, defaults: {}, getCursor: function() {
      return "";
    }, filterEventType: function(t) {
      return t.search("gesture") === 0;
    } }, Sn = tt;
    function _n(t, e, n, r, i, o2, a) {
      if (!e) return false;
      if (e === true) {
        var s = d.number(o2.width) ? o2.width : o2.right - o2.left, c = d.number(o2.height) ? o2.height : o2.bottom - o2.top;
        if (a = Math.min(a, Math.abs((t === "left" || t === "right" ? s : c) / 2)), s < 0 && (t === "left" ? t = "right" : t === "right" && (t = "left")), c < 0 && (t === "top" ? t = "bottom" : t === "bottom" && (t = "top")), t === "left") {
          var l2 = s >= 0 ? o2.left : o2.right;
          return n.x < l2 + a;
        }
        if (t === "top") {
          var u = c >= 0 ? o2.top : o2.bottom;
          return n.y < u + a;
        }
        if (t === "right") return n.x > (s >= 0 ? o2.right : o2.left) - a;
        if (t === "bottom") return n.y > (c >= 0 ? o2.bottom : o2.top) - a;
      }
      return !!d.element(r) && (d.element(e) ? e === r : Ve(r, e, i));
    }
    function qt(t) {
      var e = t.iEvent, n = t.interaction;
      if (n.prepared.name === "resize" && n.resizeAxes) {
        var r = e;
        n.interactable.options.resize.square ? (n.resizeAxes === "y" ? r.delta.x = r.delta.y : r.delta.y = r.delta.x, r.axes = "xy") : (r.axes = n.resizeAxes, n.resizeAxes === "x" ? r.delta.y = 0 : n.resizeAxes === "y" && (r.delta.x = 0));
      }
    }
    var Y, J, L = { id: "actions/resize", before: ["actions/drag"], install: function(t) {
      var e = t.actions, n = t.browser, r = t.Interactable, i = t.defaults;
      L.cursors = function(o2) {
        return o2.isIe9 ? { x: "e-resize", y: "s-resize", xy: "se-resize", top: "n-resize", left: "w-resize", bottom: "s-resize", right: "e-resize", topleft: "se-resize", bottomright: "se-resize", topright: "ne-resize", bottomleft: "ne-resize" } : { x: "ew-resize", y: "ns-resize", xy: "nwse-resize", top: "ns-resize", left: "ew-resize", bottom: "ns-resize", right: "ew-resize", topleft: "nwse-resize", bottomright: "nwse-resize", topright: "nesw-resize", bottomleft: "nesw-resize" };
      }(n), L.defaultMargin = n.supportsTouch || n.supportsPointerEvent ? 20 : 10, r.prototype.resizable = function(o2) {
        return function(a, s, c) {
          return d.object(s) ? (a.options.resize.enabled = s.enabled !== false, a.setPerAction("resize", s), a.setOnEvents("resize", s), d.string(s.axis) && /^x$|^y$|^xy$/.test(s.axis) ? a.options.resize.axis = s.axis : s.axis === null && (a.options.resize.axis = c.defaults.actions.resize.axis), d.bool(s.preserveAspectRatio) ? a.options.resize.preserveAspectRatio = s.preserveAspectRatio : d.bool(s.square) && (a.options.resize.square = s.square), a) : d.bool(s) ? (a.options.resize.enabled = s, a) : a.options.resize;
        }(this, o2, t);
      }, e.map.resize = L, e.methodDict.resize = "resizable", i.actions.resize = L.defaults;
    }, listeners: { "interactions:new": function(t) {
      t.interaction.resizeAxes = "xy";
    }, "interactions:action-start": function(t) {
      (function(e) {
        var n = e.iEvent, r = e.interaction;
        if (r.prepared.name === "resize" && r.prepared.edges) {
          var i = n, o2 = r.rect;
          r._rects = { start: x({}, o2), corrected: x({}, o2), previous: x({}, o2), delta: { left: 0, right: 0, width: 0, top: 0, bottom: 0, height: 0 } }, i.edges = r.prepared.edges, i.rect = r._rects.corrected, i.deltaRect = r._rects.delta;
        }
      })(t), qt(t);
    }, "interactions:action-move": function(t) {
      (function(e) {
        var n = e.iEvent, r = e.interaction;
        if (r.prepared.name === "resize" && r.prepared.edges) {
          var i = n, o2 = r.interactable.options.resize.invert, a = o2 === "reposition" || o2 === "negate", s = r.rect, c = r._rects, l2 = c.start, u = c.corrected, p = c.delta, f = c.previous;
          if (x(f, u), a) {
            if (x(u, s), o2 === "reposition") {
              if (u.top > u.bottom) {
                var v = u.top;
                u.top = u.bottom, u.bottom = v;
              }
              if (u.left > u.right) {
                var h = u.left;
                u.left = u.right, u.right = h;
              }
            }
          } else u.top = Math.min(s.top, l2.bottom), u.bottom = Math.max(s.bottom, l2.top), u.left = Math.min(s.left, l2.right), u.right = Math.max(s.right, l2.left);
          for (var g in u.width = u.right - u.left, u.height = u.bottom - u.top, u) p[g] = u[g] - f[g];
          i.edges = r.prepared.edges, i.rect = u, i.deltaRect = p;
        }
      })(t), qt(t);
    }, "interactions:action-end": function(t) {
      var e = t.iEvent, n = t.interaction;
      if (n.prepared.name === "resize" && n.prepared.edges) {
        var r = e;
        r.edges = n.prepared.edges, r.rect = n._rects.corrected, r.deltaRect = n._rects.delta;
      }
    }, "auto-start:check": function(t) {
      var e = t.interaction, n = t.interactable, r = t.element, i = t.rect, o2 = t.buttons;
      if (i) {
        var a = x({}, e.coords.cur.page), s = n.options.resize;
        if (s && s.enabled && (!e.pointerIsDown || !/mouse|pointer/.test(e.pointerType) || o2 & s.mouseButtons)) {
          if (d.object(s.edges)) {
            var c = { left: false, right: false, top: false, bottom: false };
            for (var l2 in c) c[l2] = _n(l2, s.edges[l2], a, e._latestPointer.eventTarget, r, i, s.margin || L.defaultMargin);
            c.left = c.left && !c.right, c.top = c.top && !c.bottom, (c.left || c.right || c.top || c.bottom) && (t.action = { name: "resize", edges: c });
          } else {
            var u = s.axis !== "y" && a.x > i.right - L.defaultMargin, p = s.axis !== "x" && a.y > i.bottom - L.defaultMargin;
            (u || p) && (t.action = { name: "resize", axes: (u ? "x" : "") + (p ? "y" : "") });
          }
          return !t.action && void 0;
        }
      }
    } }, defaults: { square: false, preserveAspectRatio: false, axis: "xy", margin: NaN, edges: null, invert: "none" }, cursors: null, getCursor: function(t) {
      var e = t.edges, n = t.axis, r = t.name, i = L.cursors, o2 = null;
      if (n) o2 = i[r + n];
      else if (e) {
        for (var a = "", s = 0, c = ["top", "bottom", "left", "right"]; s < c.length; s++) {
          var l2 = c[s];
          e[l2] && (a += l2);
        }
        o2 = i[a];
      }
      return o2;
    }, filterEventType: function(t) {
      return t.search("resize") === 0;
    }, defaultMargin: null }, Pn = L, On = { id: "actions", install: function(t) {
      t.usePlugin(Sn), t.usePlugin(Pn), t.usePlugin(wt), t.usePlugin(Tn);
    } }, Bt = 0, V = { request: function(t) {
      return Y(t);
    }, cancel: function(t) {
      return J(t);
    }, init: function(t) {
      if (Y = t.requestAnimationFrame, J = t.cancelAnimationFrame, !Y) for (var e = ["ms", "moz", "webkit", "o"], n = 0; n < e.length; n++) {
        var r = e[n];
        Y = t["".concat(r, "RequestAnimationFrame")], J = t["".concat(r, "CancelAnimationFrame")] || t["".concat(r, "CancelRequestAnimationFrame")];
      }
      Y = Y && Y.bind(t), J = J && J.bind(t), Y || (Y = function(i) {
        var o2 = Date.now(), a = Math.max(0, 16 - (o2 - Bt)), s = t.setTimeout(function() {
          i(o2 + a);
        }, a);
        return Bt = o2 + a, s;
      }, J = function(i) {
        return clearTimeout(i);
      });
    } }, E = { defaults: { enabled: false, margin: 60, container: null, speed: 300 }, now: Date.now, interaction: null, i: 0, x: 0, y: 0, isScrolling: false, prevTime: 0, margin: 0, speed: 0, start: function(t) {
      E.isScrolling = true, V.cancel(E.i), t.autoScroll = E, E.interaction = t, E.prevTime = E.now(), E.i = V.request(E.scroll);
    }, stop: function() {
      E.isScrolling = false, E.interaction && (E.interaction.autoScroll = null), V.cancel(E.i);
    }, scroll: function() {
      var t = E.interaction, e = t.interactable, n = t.element, r = t.prepared.name, i = e.options[r].autoScroll, o2 = Vt(i.container, e, n), a = E.now(), s = (a - E.prevTime) / 1e3, c = i.speed * s;
      if (c >= 1) {
        var l2 = { x: E.x * c, y: E.y * c };
        if (l2.x || l2.y) {
          var u = Wt(o2);
          d.window(o2) ? o2.scrollBy(l2.x, l2.y) : o2 && (o2.scrollLeft += l2.x, o2.scrollTop += l2.y);
          var p = Wt(o2), f = { x: p.x - u.x, y: p.y - u.y };
          (f.x || f.y) && e.fire({ type: "autoscroll", target: n, interactable: e, delta: f, interaction: t, container: o2 });
        }
        E.prevTime = a;
      }
      E.isScrolling && (V.cancel(E.i), E.i = V.request(E.scroll));
    }, check: function(t, e) {
      var n;
      return (n = t.options[e].autoScroll) == null ? void 0 : n.enabled;
    }, onInteractionMove: function(t) {
      var e = t.interaction, n = t.pointer;
      if (e.interacting() && E.check(e.interactable, e.prepared.name)) if (e.simulation) E.x = E.y = 0;
      else {
        var r, i, o2, a, s = e.interactable, c = e.element, l2 = e.prepared.name, u = s.options[l2].autoScroll, p = Vt(u.container, s, c);
        if (d.window(p)) a = n.clientX < E.margin, r = n.clientY < E.margin, i = n.clientX > p.innerWidth - E.margin, o2 = n.clientY > p.innerHeight - E.margin;
        else {
          var f = We(p);
          a = n.clientX < f.left + E.margin, r = n.clientY < f.top + E.margin, i = n.clientX > f.right - E.margin, o2 = n.clientY > f.bottom - E.margin;
        }
        E.x = i ? 1 : a ? -1 : 0, E.y = o2 ? 1 : r ? -1 : 0, E.isScrolling || (E.margin = u.margin, E.speed = u.speed, E.start(e));
      }
    } };
    function Vt(t, e, n) {
      return (d.string(t) ? Ot(t, e, n) : t) || F(n);
    }
    function Wt(t) {
      return d.window(t) && (t = window.document.body), { x: t.scrollLeft, y: t.scrollTop };
    }
    var kn = { id: "auto-scroll", install: function(t) {
      var e = t.defaults, n = t.actions;
      t.autoScroll = E, E.now = function() {
        return t.now();
      }, n.phaselessTypes.autoscroll = true, e.perAction.autoScroll = E.defaults;
    }, listeners: { "interactions:new": function(t) {
      t.interaction.autoScroll = null;
    }, "interactions:destroy": function(t) {
      t.interaction.autoScroll = null, E.stop(), E.interaction && (E.interaction = null);
    }, "interactions:stop": E.stop, "interactions:action-move": function(t) {
      return E.onInteractionMove(t);
    } } }, Dn = kn;
    function fe(t, e) {
      var n = false;
      return function() {
        return n || (H.console.warn(e), n = true), t.apply(this, arguments);
      };
    }
    function nt(t, e) {
      return t.name = e.name, t.axis = e.axis, t.edges = e.edges, t;
    }
    function In(t) {
      return d.bool(t) ? (this.options.styleCursor = t, this) : t === null ? (delete this.options.styleCursor, this) : this.options.styleCursor;
    }
    function Mn(t) {
      return d.func(t) ? (this.options.actionChecker = t, this) : t === null ? (delete this.options.actionChecker, this) : this.options.actionChecker;
    }
    var zn = { id: "auto-start/interactableMethods", install: function(t) {
      var e = t.Interactable;
      e.prototype.getAction = function(n, r, i, o2) {
        var a = function(s, c, l2, u, p) {
          var f = s.getRect(u), v = c.buttons || { 0: 1, 1: 4, 3: 8, 4: 16 }[c.button], h = { action: null, interactable: s, interaction: l2, element: u, rect: f, buttons: v };
          return p.fire("auto-start:check", h), h.action;
        }(this, r, i, o2, t);
        return this.options.actionChecker ? this.options.actionChecker(n, r, a, this, o2, i) : a;
      }, e.prototype.ignoreFrom = fe(function(n) {
        return this._backCompatOption("ignoreFrom", n);
      }, "Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."), e.prototype.allowFrom = fe(function(n) {
        return this._backCompatOption("allowFrom", n);
      }, "Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."), e.prototype.actionChecker = Mn, e.prototype.styleCursor = In;
    } };
    function Gt(t, e, n, r, i) {
      return e.testIgnoreAllow(e.options[t.name], n, r) && e.options[t.name].enabled && De(e, n, t, i) ? t : null;
    }
    function An(t, e, n, r, i, o2, a) {
      for (var s = 0, c = r.length; s < c; s++) {
        var l2 = r[s], u = i[s], p = l2.getAction(e, n, t, u);
        if (p) {
          var f = Gt(p, l2, u, o2, a);
          if (f) return { action: f, interactable: l2, element: u };
        }
      }
      return { action: null, interactable: null, element: null };
    }
    function Nt(t, e, n, r, i) {
      var o2 = [], a = [], s = r;
      function c(u) {
        o2.push(u), a.push(s);
      }
      for (; d.element(s); ) {
        o2 = [], a = [], i.interactables.forEachMatch(s, c);
        var l2 = An(t, e, n, o2, a, r, i);
        if (l2.action && !l2.interactable.options[l2.action.name].manualStart) return l2;
        s = X(s);
      }
      return { action: null, interactable: null, element: null };
    }
    function Ut(t, e, n) {
      var r = e.action, i = e.interactable, o2 = e.element;
      r = r || { name: null }, t.interactable = i, t.element = o2, nt(t.prepared, r), t.rect = i && r.name ? i.getRect(o2) : null, Kt(t, n), n.fire("autoStart:prepared", { interaction: t });
    }
    function De(t, e, n, r) {
      var i = t.options, o2 = i[n.name].max, a = i[n.name].maxPerElement, s = r.autoStart.maxInteractions, c = 0, l2 = 0, u = 0;
      if (!(o2 && a && s)) return false;
      for (var p = 0, f = r.interactions.list; p < f.length; p++) {
        var v = f[p], h = v.prepared.name;
        if (v.interacting() && (++c >= s || v.interactable === t && ((l2 += h === n.name ? 1 : 0) >= o2 || v.element === e && (u++, h === n.name && u >= a))))
          return false;
      }
      return s > 0;
    }
    function Ht(t, e) {
      return d.number(t) ? (e.autoStart.maxInteractions = t, this) : e.autoStart.maxInteractions;
    }
    function rt(t, e, n) {
      var r = n.autoStart.cursorElement;
      r && r !== t && (r.style.cursor = ""), t.ownerDocument.documentElement.style.cursor = e, t.style.cursor = e, n.autoStart.cursorElement = e ? t : null;
    }
    function Kt(t, e) {
      var n = t.interactable, r = t.element, i = t.prepared;
      if (t.pointerType === "mouse" && n && n.options.styleCursor) {
        var o2 = "";
        if (i.name) {
          var a = n.options[i.name].cursorChecker;
          o2 = d.func(a) ? a(i, n, r, t._interacting) : e.actions.map[i.name].getCursor(i);
        }
        rt(t.element, o2 || "", e);
      } else e.autoStart.cursorElement && rt(e.autoStart.cursorElement, "", e);
    }
    var Cn = { id: "auto-start/base", before: ["actions"], install: function(t) {
      var e = t.interactStatic, n = t.defaults;
      t.usePlugin(zn), n.base.actionChecker = null, n.base.styleCursor = true, x(n.perAction, { manualStart: false, max: 1 / 0, maxPerElement: 1, allowFrom: null, ignoreFrom: null, mouseButtons: 1 }), e.maxInteractions = function(r) {
        return Ht(r, t);
      }, t.autoStart = { maxInteractions: 1 / 0, withinInteractionLimit: De, cursorElement: null };
    }, listeners: { "interactions:down": function(t, e) {
      var n = t.interaction, r = t.pointer, i = t.event, o2 = t.eventTarget;
      n.interacting() || Ut(n, Nt(n, r, i, o2, e), e);
    }, "interactions:move": function(t, e) {
      (function(n, r) {
        var i = n.interaction, o2 = n.pointer, a = n.event, s = n.eventTarget;
        i.pointerType !== "mouse" || i.pointerIsDown || i.interacting() || Ut(i, Nt(i, o2, a, s, r), r);
      })(t, e), function(n, r) {
        var i = n.interaction;
        if (i.pointerIsDown && !i.interacting() && i.pointerWasMoved && i.prepared.name) {
          r.fire("autoStart:before-start", n);
          var o2 = i.interactable, a = i.prepared.name;
          a && o2 && (o2.options[a].manualStart || !De(o2, i.element, i.prepared, r) ? i.stop() : (i.start(i.prepared, o2, i.element), Kt(i, r)));
        }
      }(t, e);
    }, "interactions:stop": function(t, e) {
      var n = t.interaction, r = n.interactable;
      r && r.options.styleCursor && rt(n.element, "", e);
    } }, maxInteractions: Ht, withinInteractionLimit: De, validateAction: Gt }, it = Cn, Rn = { id: "auto-start/dragAxis", listeners: { "autoStart:before-start": function(t, e) {
      var n = t.interaction, r = t.eventTarget, i = t.dx, o2 = t.dy;
      if (n.prepared.name === "drag") {
        var a = Math.abs(i), s = Math.abs(o2), c = n.interactable.options.drag, l2 = c.startAxis, u = a > s ? "x" : a < s ? "y" : "xy";
        if (n.prepared.axis = c.lockAxis === "start" ? u[0] : c.lockAxis, u !== "xy" && l2 !== "xy" && l2 !== u) {
          n.prepared.name = null;
          for (var p = r, f = function(h) {
            if (h !== n.interactable) {
              var g = n.interactable.options.drag;
              if (!g.manualStart && h.testIgnoreAllow(g, p, r)) {
                var y = h.getAction(n.downPointer, n.downEvent, n, p);
                if (y && y.name === "drag" && function(m, b) {
                  if (!b) return false;
                  var T = b.options.drag.startAxis;
                  return m === "xy" || T === "xy" || T === m;
                }(u, h) && it.validateAction(y, h, p, r, e)) return h;
              }
            }
          }; d.element(p); ) {
            var v = e.interactables.forEachMatch(p, f);
            if (v) {
              n.prepared.name = "drag", n.interactable = v, n.element = p;
              break;
            }
            p = X(p);
          }
        }
      }
    } } };
    function ot(t) {
      var e = t.prepared && t.prepared.name;
      if (!e) return null;
      var n = t.interactable.options;
      return n[e].hold || n[e].delay;
    }
    var jn = { id: "auto-start/hold", install: function(t) {
      var e = t.defaults;
      t.usePlugin(it), e.perAction.hold = 0, e.perAction.delay = 0;
    }, listeners: { "interactions:new": function(t) {
      t.interaction.autoStartHoldTimer = null;
    }, "autoStart:prepared": function(t) {
      var e = t.interaction, n = ot(e);
      n > 0 && (e.autoStartHoldTimer = setTimeout(function() {
        e.start(e.prepared, e.interactable, e.element);
      }, n));
    }, "interactions:move": function(t) {
      var e = t.interaction, n = t.duplicate;
      e.autoStartHoldTimer && e.pointerWasMoved && !n && (clearTimeout(e.autoStartHoldTimer), e.autoStartHoldTimer = null);
    }, "autoStart:before-start": function(t) {
      var e = t.interaction;
      ot(e) > 0 && (e.prepared.name = null);
    } }, getHoldDuration: ot }, Fn = jn, Xn = { id: "auto-start", install: function(t) {
      t.usePlugin(it), t.usePlugin(Fn), t.usePlugin(Rn);
    } }, Yn = function(t) {
      return /^(always|never|auto)$/.test(t) ? (this.options.preventDefault = t, this) : d.bool(t) ? (this.options.preventDefault = t ? "always" : "never", this) : this.options.preventDefault;
    };
    function Ln(t) {
      var e = t.interaction, n = t.event;
      e.interactable && e.interactable.checkAndPreventDefault(n);
    }
    var $t = { id: "core/interactablePreventDefault", install: function(t) {
      var e = t.Interactable;
      e.prototype.preventDefault = Yn, e.prototype.checkAndPreventDefault = function(n) {
        return function(r, i, o2) {
          var a = r.options.preventDefault;
          if (a !== "never") if (a !== "always") {
            if (i.events.supportsPassive && /^touch(start|move)$/.test(o2.type)) {
              var s = F(o2.target).document, c = i.getDocOptions(s);
              if (!c || !c.events || c.events.passive !== false) return;
            }
            /^(mouse|pointer|touch)*(down|start)/i.test(o2.type) || d.element(o2.target) && B(o2.target, "input,select,textarea,[contenteditable=true],[contenteditable=true] *") || o2.preventDefault();
          } else o2.preventDefault();
        }(this, t, n);
      }, t.interactions.docEvents.push({ type: "dragstart", listener: function(n) {
        for (var r = 0, i = t.interactions.list; r < i.length; r++) {
          var o2 = i[r];
          if (o2.element && (o2.element === n.target || K(o2.element, n.target))) return void o2.interactable.checkAndPreventDefault(n);
        }
      } });
    }, listeners: ["down", "move", "up", "cancel"].reduce(function(t, e) {
      return t["interactions:".concat(e)] = Ln, t;
    }, {}) };
    function Ie(t, e) {
      if (e.phaselessTypes[t]) return true;
      for (var n in e.map) if (t.indexOf(n) === 0 && t.substr(n.length) in e.phases) return true;
      return false;
    }
    function ne(t) {
      var e = {};
      for (var n in t) {
        var r = t[n];
        d.plainObject(r) ? e[n] = ne(r) : d.array(r) ? e[n] = jt(r) : e[n] = r;
      }
      return e;
    }
    var at = function() {
      function t(e) {
        k(this, t), this.states = [], this.startOffset = { left: 0, right: 0, top: 0, bottom: 0 }, this.startDelta = void 0, this.result = void 0, this.endResult = void 0, this.startEdges = void 0, this.edges = void 0, this.interaction = void 0, this.interaction = e, this.result = Me(), this.edges = { left: false, right: false, top: false, bottom: false };
      }
      return D(t, [{ key: "start", value: function(e, n) {
        var r, i, o2 = e.phase, a = this.interaction, s = function(l2) {
          var u = l2.interactable.options[l2.prepared.name], p = u.modifiers;
          return p && p.length ? p : ["snap", "snapSize", "snapEdges", "restrict", "restrictEdges", "restrictSize"].map(function(f) {
            var v = u[f];
            return v && v.enabled && { options: v, methods: v._methods };
          }).filter(function(f) {
            return !!f;
          });
        }(a);
        this.prepareStates(s), this.startEdges = x({}, a.edges), this.edges = x({}, this.startEdges), this.startOffset = (r = a.rect, i = n, r ? { left: i.x - r.left, top: i.y - r.top, right: r.right - i.x, bottom: r.bottom - i.y } : { left: 0, top: 0, right: 0, bottom: 0 }), this.startDelta = { x: 0, y: 0 };
        var c = this.fillArg({ phase: o2, pageCoords: n, preEnd: false });
        return this.result = Me(), this.startAll(c), this.result = this.setAll(c);
      } }, { key: "fillArg", value: function(e) {
        var n = this.interaction;
        return e.interaction = n, e.interactable = n.interactable, e.element = n.element, e.rect || (e.rect = n.rect), e.edges || (e.edges = this.startEdges), e.startOffset = this.startOffset, e;
      } }, { key: "startAll", value: function(e) {
        for (var n = 0, r = this.states; n < r.length; n++) {
          var i = r[n];
          i.methods.start && (e.state = i, i.methods.start(e));
        }
      } }, { key: "setAll", value: function(e) {
        var n = e.phase, r = e.preEnd, i = e.skipModifiers, o2 = e.rect, a = e.edges;
        e.coords = x({}, e.pageCoords), e.rect = x({}, o2), e.edges = x({}, a);
        for (var s = i ? this.states.slice(i) : this.states, c = Me(e.coords, e.rect), l2 = 0; l2 < s.length; l2++) {
          var u, p = s[l2], f = p.options, v = x({}, e.coords), h = null;
          (u = p.methods) != null && u.set && this.shouldDo(f, r, n) && (e.state = p, h = p.methods.set(e), Se(e.edges, e.rect, { x: e.coords.x - v.x, y: e.coords.y - v.y })), c.eventProps.push(h);
        }
        x(this.edges, e.edges), c.delta.x = e.coords.x - e.pageCoords.x, c.delta.y = e.coords.y - e.pageCoords.y, c.rectDelta.left = e.rect.left - o2.left, c.rectDelta.right = e.rect.right - o2.right, c.rectDelta.top = e.rect.top - o2.top, c.rectDelta.bottom = e.rect.bottom - o2.bottom;
        var g = this.result.coords, y = this.result.rect;
        if (g && y) {
          var m = c.rect.left !== y.left || c.rect.right !== y.right || c.rect.top !== y.top || c.rect.bottom !== y.bottom;
          c.changed = m || g.x !== c.coords.x || g.y !== c.coords.y;
        }
        return c;
      } }, { key: "applyToInteraction", value: function(e) {
        var n = this.interaction, r = e.phase, i = n.coords.cur, o2 = n.coords.start, a = this.result, s = this.startDelta, c = a.delta;
        r === "start" && x(this.startDelta, a.delta);
        for (var l2 = 0, u = [[o2, s], [i, c]]; l2 < u.length; l2++) {
          var p = u[l2], f = p[0], v = p[1];
          f.page.x += v.x, f.page.y += v.y, f.client.x += v.x, f.client.y += v.y;
        }
        var h = this.result.rectDelta, g = e.rect || n.rect;
        g.left += h.left, g.right += h.right, g.top += h.top, g.bottom += h.bottom, g.width = g.right - g.left, g.height = g.bottom - g.top;
      } }, { key: "setAndApply", value: function(e) {
        var n = this.interaction, r = e.phase, i = e.preEnd, o2 = e.skipModifiers, a = this.setAll(this.fillArg({ preEnd: i, phase: r, pageCoords: e.modifiedCoords || n.coords.cur.page }));
        if (this.result = a, !a.changed && (!o2 || o2 < this.states.length) && n.interacting()) return false;
        if (e.modifiedCoords) {
          var s = n.coords.cur.page, c = { x: e.modifiedCoords.x - s.x, y: e.modifiedCoords.y - s.y };
          a.coords.x += c.x, a.coords.y += c.y, a.delta.x += c.x, a.delta.y += c.y;
        }
        this.applyToInteraction(e);
      } }, { key: "beforeEnd", value: function(e) {
        var n = e.interaction, r = e.event, i = this.states;
        if (i && i.length) {
          for (var o2 = false, a = 0; a < i.length; a++) {
            var s = i[a];
            e.state = s;
            var c = s.options, l2 = s.methods, u = l2.beforeEnd && l2.beforeEnd(e);
            if (u) return this.endResult = u, false;
            o2 = o2 || !o2 && this.shouldDo(c, true, e.phase, true);
          }
          o2 && n.move({ event: r, preEnd: true });
        }
      } }, { key: "stop", value: function(e) {
        var n = e.interaction;
        if (this.states && this.states.length) {
          var r = x({ states: this.states, interactable: n.interactable, element: n.element, rect: null }, e);
          this.fillArg(r);
          for (var i = 0, o2 = this.states; i < o2.length; i++) {
            var a = o2[i];
            r.state = a, a.methods.stop && a.methods.stop(r);
          }
          this.states = null, this.endResult = null;
        }
      } }, { key: "prepareStates", value: function(e) {
        this.states = [];
        for (var n = 0; n < e.length; n++) {
          var r = e[n], i = r.options, o2 = r.methods, a = r.name;
          this.states.push({ options: i, methods: o2, index: n, name: a });
        }
        return this.states;
      } }, { key: "restoreInteractionCoords", value: function(e) {
        var n = e.interaction, r = n.coords, i = n.rect, o2 = n.modification;
        if (o2.result) {
          for (var a = o2.startDelta, s = o2.result, c = s.delta, l2 = s.rectDelta, u = 0, p = [[r.start, a], [r.cur, c]]; u < p.length; u++) {
            var f = p[u], v = f[0], h = f[1];
            v.page.x -= h.x, v.page.y -= h.y, v.client.x -= h.x, v.client.y -= h.y;
          }
          i.left -= l2.left, i.right -= l2.right, i.top -= l2.top, i.bottom -= l2.bottom;
        }
      } }, { key: "shouldDo", value: function(e, n, r, i) {
        return !(!e || e.enabled === false || i && !e.endOnly || e.endOnly && !n || r === "start" && !e.setStart);
      } }, { key: "copyFrom", value: function(e) {
        this.startOffset = e.startOffset, this.startDelta = e.startDelta, this.startEdges = e.startEdges, this.edges = e.edges, this.states = e.states.map(function(n) {
          return ne(n);
        }), this.result = Me(x({}, e.result.coords), x({}, e.result.rect));
      } }, { key: "destroy", value: function() {
        for (var e in this) this[e] = null;
      } }]), t;
    }();
    function Me(t, e) {
      return { rect: e, coords: t, delta: { x: 0, y: 0 }, rectDelta: { left: 0, right: 0, top: 0, bottom: 0 }, eventProps: [], changed: true };
    }
    function W(t, e) {
      var n = t.defaults, r = { start: t.start, set: t.set, beforeEnd: t.beforeEnd, stop: t.stop }, i = function(o2) {
        var a = o2 || {};
        for (var s in a.enabled = a.enabled !== false, n) s in a || (a[s] = n[s]);
        var c = { options: a, methods: r, name: e, enable: function() {
          return a.enabled = true, c;
        }, disable: function() {
          return a.enabled = false, c;
        } };
        return c;
      };
      return e && typeof e == "string" && (i._defaults = n, i._methods = r), i;
    }
    function de(t) {
      var e = t.iEvent, n = t.interaction.modification.result;
      n && (e.modifiers = n.eventProps);
    }
    var qn = { id: "modifiers/base", before: ["actions"], install: function(t) {
      t.defaults.perAction.modifiers = [];
    }, listeners: { "interactions:new": function(t) {
      var e = t.interaction;
      e.modification = new at(e);
    }, "interactions:before-action-start": function(t) {
      var e = t.interaction, n = t.interaction.modification;
      n.start(t, e.coords.start.page), e.edges = n.edges, n.applyToInteraction(t);
    }, "interactions:before-action-move": function(t) {
      var e = t.interaction, n = e.modification, r = n.setAndApply(t);
      return e.edges = n.edges, r;
    }, "interactions:before-action-end": function(t) {
      var e = t.interaction, n = e.modification, r = n.beforeEnd(t);
      return e.edges = n.startEdges, r;
    }, "interactions:action-start": de, "interactions:action-move": de, "interactions:action-end": de, "interactions:after-action-start": function(t) {
      return t.interaction.modification.restoreInteractionCoords(t);
    }, "interactions:after-action-move": function(t) {
      return t.interaction.modification.restoreInteractionCoords(t);
    }, "interactions:stop": function(t) {
      return t.interaction.modification.stop(t);
    } } }, Jt = qn, Qt = { base: { preventDefault: "auto", deltaSource: "page" }, perAction: { enabled: false, origin: { x: 0, y: 0 } }, actions: {} }, st = function(t) {
      ie(n, t);
      var e = oe(n);
      function n(r, i, o2, a, s, c, l2) {
        var u;
        k(this, n), (u = e.call(this, r)).relatedTarget = null, u.screenX = void 0, u.screenY = void 0, u.button = void 0, u.buttons = void 0, u.ctrlKey = void 0, u.shiftKey = void 0, u.altKey = void 0, u.metaKey = void 0, u.page = void 0, u.client = void 0, u.delta = void 0, u.rect = void 0, u.x0 = void 0, u.y0 = void 0, u.t0 = void 0, u.dt = void 0, u.duration = void 0, u.clientX0 = void 0, u.clientY0 = void 0, u.velocity = void 0, u.speed = void 0, u.swipe = void 0, u.axes = void 0, u.preEnd = void 0, s = s || r.element;
        var p = r.interactable, f = (p && p.options || Qt).deltaSource, v = se(p, s, o2), h = a === "start", g = a === "end", y = h ? be(u) : r.prevEvent, m = h ? r.coords.start : g ? { page: y.page, client: y.client, timeStamp: r.coords.cur.timeStamp } : r.coords.cur;
        return u.page = x({}, m.page), u.client = x({}, m.client), u.rect = x({}, r.rect), u.timeStamp = m.timeStamp, g || (u.page.x -= v.x, u.page.y -= v.y, u.client.x -= v.x, u.client.y -= v.y), u.ctrlKey = i.ctrlKey, u.altKey = i.altKey, u.shiftKey = i.shiftKey, u.metaKey = i.metaKey, u.button = i.button, u.buttons = i.buttons, u.target = s, u.currentTarget = s, u.preEnd = c, u.type = l2 || o2 + (a || ""), u.interactable = p, u.t0 = h ? r.pointers[r.pointers.length - 1].downTime : y.t0, u.x0 = r.coords.start.page.x - v.x, u.y0 = r.coords.start.page.y - v.y, u.clientX0 = r.coords.start.client.x - v.x, u.clientY0 = r.coords.start.client.y - v.y, u.delta = h || g ? { x: 0, y: 0 } : { x: u[f].x - y[f].x, y: u[f].y - y[f].y }, u.dt = r.coords.delta.timeStamp, u.duration = u.timeStamp - u.t0, u.velocity = x({}, r.coords.velocity[f]), u.speed = ce(u.velocity.x, u.velocity.y), u.swipe = g || a === "inertiastart" ? u.getSwipe() : null, u;
      }
      return D(n, [{ key: "getSwipe", value: function() {
        var r = this._interaction;
        if (r.prevEvent.speed < 600 || this.timeStamp - r.prevEvent.timeStamp > 150) return null;
        var i = 180 * Math.atan2(r.prevEvent.velocityY, r.prevEvent.velocityX) / Math.PI;
        i < 0 && (i += 360);
        var o2 = 112.5 <= i && i < 247.5, a = 202.5 <= i && i < 337.5;
        return { up: a, down: !a && 22.5 <= i && i < 157.5, left: o2, right: !o2 && (292.5 <= i || i < 67.5), angle: i, speed: r.prevEvent.speed, velocity: { x: r.prevEvent.velocityX, y: r.prevEvent.velocityY } };
      } }, { key: "preventDefault", value: function() {
      } }, { key: "stopImmediatePropagation", value: function() {
        this.immediatePropagationStopped = this.propagationStopped = true;
      } }, { key: "stopPropagation", value: function() {
        this.propagationStopped = true;
      } }]), n;
    }(ke);
    Object.defineProperties(st.prototype, { pageX: { get: function() {
      return this.page.x;
    }, set: function(t) {
      this.page.x = t;
    } }, pageY: { get: function() {
      return this.page.y;
    }, set: function(t) {
      this.page.y = t;
    } }, clientX: { get: function() {
      return this.client.x;
    }, set: function(t) {
      this.client.x = t;
    } }, clientY: { get: function() {
      return this.client.y;
    }, set: function(t) {
      this.client.y = t;
    } }, dx: { get: function() {
      return this.delta.x;
    }, set: function(t) {
      this.delta.x = t;
    } }, dy: { get: function() {
      return this.delta.y;
    }, set: function(t) {
      this.delta.y = t;
    } }, velocityX: { get: function() {
      return this.velocity.x;
    }, set: function(t) {
      this.velocity.x = t;
    } }, velocityY: { get: function() {
      return this.velocity.y;
    }, set: function(t) {
      this.velocity.y = t;
    } } });
    var Bn = D(function t(e, n, r, i, o2) {
      k(this, t), this.id = void 0, this.pointer = void 0, this.event = void 0, this.downTime = void 0, this.downTarget = void 0, this.id = e, this.pointer = n, this.event = r, this.downTime = i, this.downTarget = o2;
    }), Vn = function(t) {
      return t.interactable = "", t.element = "", t.prepared = "", t.pointerIsDown = "", t.pointerWasMoved = "", t._proxy = "", t;
    }({}), Zt = function(t) {
      return t.start = "", t.move = "", t.end = "", t.stop = "", t.interacting = "", t;
    }({}), Wn = 0, Gn = function() {
      function t(e) {
        var n = this, r = e.pointerType, i = e.scopeFire;
        k(this, t), this.interactable = null, this.element = null, this.rect = null, this._rects = void 0, this.edges = null, this._scopeFire = void 0, this.prepared = { name: null, axis: null, edges: null }, this.pointerType = void 0, this.pointers = [], this.downEvent = null, this.downPointer = {}, this._latestPointer = { pointer: null, event: null, eventTarget: null }, this.prevEvent = null, this.pointerIsDown = false, this.pointerWasMoved = false, this._interacting = false, this._ending = false, this._stopped = true, this._proxy = void 0, this.simulation = null, this.doMove = fe(function(u) {
          this.move(u);
        }, "The interaction.doMove() method has been renamed to interaction.move()"), this.coords = { start: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, prev: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, cur: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, delta: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 }, velocity: { page: { x: 0, y: 0 }, client: { x: 0, y: 0 }, timeStamp: 0 } }, this._id = Wn++, this._scopeFire = i, this.pointerType = r;
        var o2 = this;
        this._proxy = {};
        var a = function(u) {
          Object.defineProperty(n._proxy, u, { get: function() {
            return o2[u];
          } });
        };
        for (var s in Vn) a(s);
        var c = function(u) {
          Object.defineProperty(n._proxy, u, { value: function() {
            return o2[u].apply(o2, arguments);
          } });
        };
        for (var l2 in Zt) c(l2);
        this._scopeFire("interactions:new", { interaction: this });
      }
      return D(t, [{ key: "pointerMoveTolerance", get: function() {
        return 1;
      } }, { key: "pointerDown", value: function(e, n, r) {
        var i = this.updatePointer(e, n, r, true), o2 = this.pointers[i];
        this._scopeFire("interactions:down", { pointer: e, event: n, eventTarget: r, pointerIndex: i, pointerInfo: o2, type: "down", interaction: this });
      } }, { key: "start", value: function(e, n, r) {
        return !(this.interacting() || !this.pointerIsDown || this.pointers.length < (e.name === "gesture" ? 2 : 1) || !n.options[e.name].enabled) && (nt(this.prepared, e), this.interactable = n, this.element = r, this.rect = n.getRect(r), this.edges = this.prepared.edges ? x({}, this.prepared.edges) : { left: true, right: true, top: true, bottom: true }, this._stopped = false, this._interacting = this._doPhase({ interaction: this, event: this.downEvent, phase: "start" }) && !this._stopped, this._interacting);
      } }, { key: "pointerMove", value: function(e, n, r) {
        this.simulation || this.modification && this.modification.endResult || this.updatePointer(e, n, r, false);
        var i, o2, a = this.coords.cur.page.x === this.coords.prev.page.x && this.coords.cur.page.y === this.coords.prev.page.y && this.coords.cur.client.x === this.coords.prev.client.x && this.coords.cur.client.y === this.coords.prev.client.y;
        this.pointerIsDown && !this.pointerWasMoved && (i = this.coords.cur.client.x - this.coords.start.client.x, o2 = this.coords.cur.client.y - this.coords.start.client.y, this.pointerWasMoved = ce(i, o2) > this.pointerMoveTolerance);
        var s, c, l2, u = this.getPointerIndex(e), p = { pointer: e, pointerIndex: u, pointerInfo: this.pointers[u], event: n, type: "move", eventTarget: r, dx: i, dy: o2, duplicate: a, interaction: this };
        a || (s = this.coords.velocity, c = this.coords.delta, l2 = Math.max(c.timeStamp / 1e3, 1e-3), s.page.x = c.page.x / l2, s.page.y = c.page.y / l2, s.client.x = c.client.x / l2, s.client.y = c.client.y / l2, s.timeStamp = l2), this._scopeFire("interactions:move", p), a || this.simulation || (this.interacting() && (p.type = null, this.move(p)), this.pointerWasMoved && Pe(this.coords.prev, this.coords.cur));
      } }, { key: "move", value: function(e) {
        e && e.event || Dt(this.coords.delta), (e = x({ pointer: this._latestPointer.pointer, event: this._latestPointer.event, eventTarget: this._latestPointer.eventTarget, interaction: this }, e || {})).phase = "move", this._doPhase(e);
      } }, { key: "pointerUp", value: function(e, n, r, i) {
        var o2 = this.getPointerIndex(e);
        o2 === -1 && (o2 = this.updatePointer(e, n, r, false));
        var a = /cancel$/i.test(n.type) ? "cancel" : "up";
        this._scopeFire("interactions:".concat(a), { pointer: e, pointerIndex: o2, pointerInfo: this.pointers[o2], event: n, eventTarget: r, type: a, curEventTarget: i, interaction: this }), this.simulation || this.end(n), this.removePointer(e, n);
      } }, { key: "documentBlur", value: function(e) {
        this.end(e), this._scopeFire("interactions:blur", { event: e, type: "blur", interaction: this });
      } }, { key: "end", value: function(e) {
        var n;
        this._ending = true, e = e || this._latestPointer.event, this.interacting() && (n = this._doPhase({ event: e, interaction: this, phase: "end" })), this._ending = false, n === true && this.stop();
      } }, { key: "currentAction", value: function() {
        return this._interacting ? this.prepared.name : null;
      } }, { key: "interacting", value: function() {
        return this._interacting;
      } }, { key: "stop", value: function() {
        this._scopeFire("interactions:stop", { interaction: this }), this.interactable = this.element = null, this._interacting = false, this._stopped = true, this.prepared.name = this.prevEvent = null;
      } }, { key: "getPointerIndex", value: function(e) {
        var n = ue(e);
        return this.pointerType === "mouse" || this.pointerType === "pen" ? this.pointers.length - 1 : le(this.pointers, function(r) {
          return r.id === n;
        });
      } }, { key: "getPointerInfo", value: function(e) {
        return this.pointers[this.getPointerIndex(e)];
      } }, { key: "updatePointer", value: function(e, n, r, i) {
        var o2, a, s, c = ue(e), l2 = this.getPointerIndex(e), u = this.pointers[l2];
        return i = i !== false && (i || /(down|start)$/i.test(n.type)), u ? u.pointer = e : (u = new Bn(c, e, n, null, null), l2 = this.pointers.length, this.pointers.push(u)), En(this.coords.cur, this.pointers.map(function(p) {
          return p.pointer;
        }), this._now()), o2 = this.coords.delta, a = this.coords.prev, s = this.coords.cur, o2.page.x = s.page.x - a.page.x, o2.page.y = s.page.y - a.page.y, o2.client.x = s.client.x - a.client.x, o2.client.y = s.client.y - a.client.y, o2.timeStamp = s.timeStamp - a.timeStamp, i && (this.pointerIsDown = true, u.downTime = this.coords.cur.timeStamp, u.downTarget = r, _e(this.downPointer, e), this.interacting() || (Pe(this.coords.start, this.coords.cur), Pe(this.coords.prev, this.coords.cur), this.downEvent = n, this.pointerWasMoved = false)), this._updateLatestPointer(e, n, r), this._scopeFire("interactions:update-pointer", { pointer: e, event: n, eventTarget: r, down: i, pointerInfo: u, pointerIndex: l2, interaction: this }), l2;
      } }, { key: "removePointer", value: function(e, n) {
        var r = this.getPointerIndex(e);
        if (r !== -1) {
          var i = this.pointers[r];
          this._scopeFire("interactions:remove-pointer", { pointer: e, event: n, eventTarget: null, pointerIndex: r, pointerInfo: i, interaction: this }), this.pointers.splice(r, 1), this.pointerIsDown = false;
        }
      } }, { key: "_updateLatestPointer", value: function(e, n, r) {
        this._latestPointer.pointer = e, this._latestPointer.event = n, this._latestPointer.eventTarget = r;
      } }, { key: "destroy", value: function() {
        this._latestPointer.pointer = null, this._latestPointer.event = null, this._latestPointer.eventTarget = null;
      } }, { key: "_createPreparedEvent", value: function(e, n, r, i) {
        return new st(this, e, this.prepared.name, n, this.element, r, i);
      } }, { key: "_fireEvent", value: function(e) {
        var n;
        (n = this.interactable) == null || n.fire(e), (!this.prevEvent || e.timeStamp >= this.prevEvent.timeStamp) && (this.prevEvent = e);
      } }, { key: "_doPhase", value: function(e) {
        var n = e.event, r = e.phase, i = e.preEnd, o2 = e.type, a = this.rect;
        if (a && r === "move" && (Se(this.edges, a, this.coords.delta[this.interactable.options.deltaSource]), a.width = a.right - a.left, a.height = a.bottom - a.top), this._scopeFire("interactions:before-action-".concat(r), e) === false) return false;
        var s = e.iEvent = this._createPreparedEvent(n, r, i, o2);
        return this._scopeFire("interactions:action-".concat(r), e), r === "start" && (this.prevEvent = s), this._fireEvent(s), this._scopeFire("interactions:after-action-".concat(r), e), true;
      } }, { key: "_now", value: function() {
        return Date.now();
      } }]), t;
    }();
    function en(t) {
      tn(t.interaction);
    }
    function tn(t) {
      if (!function(n) {
        return !(!n.offset.pending.x && !n.offset.pending.y);
      }(t)) return false;
      var e = t.offset.pending;
      return ct(t.coords.cur, e), ct(t.coords.delta, e), Se(t.edges, t.rect, e), e.x = 0, e.y = 0, true;
    }
    function Nn(t) {
      var e = t.x, n = t.y;
      this.offset.pending.x += e, this.offset.pending.y += n, this.offset.total.x += e, this.offset.total.y += n;
    }
    function ct(t, e) {
      var n = t.page, r = t.client, i = e.x, o2 = e.y;
      n.x += i, n.y += o2, r.x += i, r.y += o2;
    }
    Zt.offsetBy = "";
    var Un = { id: "offset", before: ["modifiers", "pointer-events", "actions", "inertia"], install: function(t) {
      t.Interaction.prototype.offsetBy = Nn;
    }, listeners: { "interactions:new": function(t) {
      t.interaction.offset = { total: { x: 0, y: 0 }, pending: { x: 0, y: 0 } };
    }, "interactions:update-pointer": function(t) {
      return function(e) {
        e.pointerIsDown && (ct(e.coords.cur, e.offset.total), e.offset.pending.x = 0, e.offset.pending.y = 0);
      }(t.interaction);
    }, "interactions:before-action-start": en, "interactions:before-action-move": en, "interactions:before-action-end": function(t) {
      var e = t.interaction;
      if (tn(e)) return e.move({ offset: true }), e.end(), false;
    }, "interactions:stop": function(t) {
      var e = t.interaction;
      e.offset.total.x = 0, e.offset.total.y = 0, e.offset.pending.x = 0, e.offset.pending.y = 0;
    } } }, nn = Un, Hn = function() {
      function t(e) {
        k(this, t), this.active = false, this.isModified = false, this.smoothEnd = false, this.allowResume = false, this.modification = void 0, this.modifierCount = 0, this.modifierArg = void 0, this.startCoords = void 0, this.t0 = 0, this.v0 = 0, this.te = 0, this.targetOffset = void 0, this.modifiedOffset = void 0, this.currentOffset = void 0, this.lambda_v0 = 0, this.one_ve_v0 = 0, this.timeout = void 0, this.interaction = void 0, this.interaction = e;
      }
      return D(t, [{ key: "start", value: function(e) {
        var n = this.interaction, r = ze(n);
        if (!r || !r.enabled) return false;
        var i = n.coords.velocity.client, o2 = ce(i.x, i.y), a = this.modification || (this.modification = new at(n));
        if (a.copyFrom(n.modification), this.t0 = n._now(), this.allowResume = r.allowResume, this.v0 = o2, this.currentOffset = { x: 0, y: 0 }, this.startCoords = n.coords.cur.page, this.modifierArg = a.fillArg({ pageCoords: this.startCoords, preEnd: true, phase: "inertiastart" }), this.t0 - n.coords.cur.timeStamp < 50 && o2 > r.minSpeed && o2 > r.endSpeed) this.startInertia();
        else {
          if (a.result = a.setAll(this.modifierArg), !a.result.changed) return false;
          this.startSmoothEnd();
        }
        return n.modification.result.rect = null, n.offsetBy(this.targetOffset), n._doPhase({ interaction: n, event: e, phase: "inertiastart" }), n.offsetBy({ x: -this.targetOffset.x, y: -this.targetOffset.y }), n.modification.result.rect = null, this.active = true, n.simulation = this, true;
      } }, { key: "startInertia", value: function() {
        var e = this, n = this.interaction.coords.velocity.client, r = ze(this.interaction), i = r.resistance, o2 = -Math.log(r.endSpeed / this.v0) / i;
        this.targetOffset = { x: (n.x - o2) / i, y: (n.y - o2) / i }, this.te = o2, this.lambda_v0 = i / this.v0, this.one_ve_v0 = 1 - r.endSpeed / this.v0;
        var a = this.modification, s = this.modifierArg;
        s.pageCoords = { x: this.startCoords.x + this.targetOffset.x, y: this.startCoords.y + this.targetOffset.y }, a.result = a.setAll(s), a.result.changed && (this.isModified = true, this.modifiedOffset = { x: this.targetOffset.x + a.result.delta.x, y: this.targetOffset.y + a.result.delta.y }), this.onNextFrame(function() {
          return e.inertiaTick();
        });
      } }, { key: "startSmoothEnd", value: function() {
        var e = this;
        this.smoothEnd = true, this.isModified = true, this.targetOffset = { x: this.modification.result.delta.x, y: this.modification.result.delta.y }, this.onNextFrame(function() {
          return e.smoothEndTick();
        });
      } }, { key: "onNextFrame", value: function(e) {
        var n = this;
        this.timeout = V.request(function() {
          n.active && e();
        });
      } }, { key: "inertiaTick", value: function() {
        var e, n, r, i, o2, a, s, c = this, l2 = this.interaction, u = ze(l2).resistance, p = (l2._now() - this.t0) / 1e3;
        if (p < this.te) {
          var f, v = 1 - (Math.exp(-u * p) - this.lambda_v0) / this.one_ve_v0;
          this.isModified ? (e = 0, n = 0, r = this.targetOffset.x, i = this.targetOffset.y, o2 = this.modifiedOffset.x, a = this.modifiedOffset.y, f = { x: rn(s = v, e, r, o2), y: rn(s, n, i, a) }) : f = { x: this.targetOffset.x * v, y: this.targetOffset.y * v };
          var h = { x: f.x - this.currentOffset.x, y: f.y - this.currentOffset.y };
          this.currentOffset.x += h.x, this.currentOffset.y += h.y, l2.offsetBy(h), l2.move(), this.onNextFrame(function() {
            return c.inertiaTick();
          });
        } else l2.offsetBy({ x: this.modifiedOffset.x - this.currentOffset.x, y: this.modifiedOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "smoothEndTick", value: function() {
        var e = this, n = this.interaction, r = n._now() - this.t0, i = ze(n).smoothEndDuration;
        if (r < i) {
          var o2 = { x: on(r, 0, this.targetOffset.x, i), y: on(r, 0, this.targetOffset.y, i) }, a = { x: o2.x - this.currentOffset.x, y: o2.y - this.currentOffset.y };
          this.currentOffset.x += a.x, this.currentOffset.y += a.y, n.offsetBy(a), n.move({ skipModifiers: this.modifierCount }), this.onNextFrame(function() {
            return e.smoothEndTick();
          });
        } else n.offsetBy({ x: this.targetOffset.x - this.currentOffset.x, y: this.targetOffset.y - this.currentOffset.y }), this.end();
      } }, { key: "resume", value: function(e) {
        var n = e.pointer, r = e.event, i = e.eventTarget, o2 = this.interaction;
        o2.offsetBy({ x: -this.currentOffset.x, y: -this.currentOffset.y }), o2.updatePointer(n, r, i, true), o2._doPhase({ interaction: o2, event: r, phase: "resume" }), Pe(o2.coords.prev, o2.coords.cur), this.stop();
      } }, { key: "end", value: function() {
        this.interaction.move(), this.interaction.end(), this.stop();
      } }, { key: "stop", value: function() {
        this.active = this.smoothEnd = false, this.interaction.simulation = null, V.cancel(this.timeout);
      } }]), t;
    }();
    function ze(t) {
      var e = t.interactable, n = t.prepared;
      return e && e.options && n.name && e.options[n.name].inertia;
    }
    var Kn = { id: "inertia", before: ["modifiers", "actions"], install: function(t) {
      var e = t.defaults;
      t.usePlugin(nn), t.usePlugin(Jt), t.actions.phases.inertiastart = true, t.actions.phases.resume = true, e.perAction.inertia = { enabled: false, resistance: 10, minSpeed: 100, endSpeed: 10, allowResume: true, smoothEndDuration: 300 };
    }, listeners: { "interactions:new": function(t) {
      var e = t.interaction;
      e.inertia = new Hn(e);
    }, "interactions:before-action-end": function(t) {
      var e = t.interaction, n = t.event;
      return (!e._interacting || e.simulation || !e.inertia.start(n)) && null;
    }, "interactions:down": function(t) {
      var e = t.interaction, n = t.eventTarget, r = e.inertia;
      if (r.active) for (var i = n; d.element(i); ) {
        if (i === e.element) {
          r.resume(t);
          break;
        }
        i = X(i);
      }
    }, "interactions:stop": function(t) {
      var e = t.interaction.inertia;
      e.active && e.stop();
    }, "interactions:before-action-resume": function(t) {
      var e = t.interaction.modification;
      e.stop(t), e.start(t, t.interaction.coords.cur.page), e.applyToInteraction(t);
    }, "interactions:before-action-inertiastart": function(t) {
      return t.interaction.modification.setAndApply(t);
    }, "interactions:action-resume": de, "interactions:action-inertiastart": de, "interactions:after-action-inertiastart": function(t) {
      return t.interaction.modification.restoreInteractionCoords(t);
    }, "interactions:after-action-resume": function(t) {
      return t.interaction.modification.restoreInteractionCoords(t);
    } } };
    function rn(t, e, n, r) {
      var i = 1 - t;
      return i * i * e + 2 * i * t * n + t * t * r;
    }
    function on(t, e, n, r) {
      return -n * (t /= r) * (t - 2) + e;
    }
    var $n = Kn;
    function an(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (t.immediatePropagationStopped) break;
        r(t);
      }
    }
    var sn = function() {
      function t(e) {
        k(this, t), this.options = void 0, this.types = {}, this.propagationStopped = false, this.immediatePropagationStopped = false, this.global = void 0, this.options = x({}, e || {});
      }
      return D(t, [{ key: "fire", value: function(e) {
        var n, r = this.global;
        (n = this.types[e.type]) && an(e, n), !e.propagationStopped && r && (n = r[e.type]) && an(e, n);
      } }, { key: "on", value: function(e, n) {
        var r = $(e, n);
        for (e in r) this.types[e] = Rt(this.types[e] || [], r[e]);
      } }, { key: "off", value: function(e, n) {
        var r = $(e, n);
        for (e in r) {
          var i = this.types[e];
          if (i && i.length) for (var o2 = 0, a = r[e]; o2 < a.length; o2++) {
            var s = a[o2], c = i.indexOf(s);
            c !== -1 && i.splice(c, 1);
          }
        }
      } }, { key: "getRect", value: function(e) {
        return null;
      } }]), t;
    }(), Jn = function() {
      function t(e) {
        k(this, t), this.currentTarget = void 0, this.originalEvent = void 0, this.type = void 0, this.originalEvent = e, _e(this, e);
      }
      return D(t, [{ key: "preventOriginalDefault", value: function() {
        this.originalEvent.preventDefault();
      } }, { key: "stopPropagation", value: function() {
        this.originalEvent.stopPropagation();
      } }, { key: "stopImmediatePropagation", value: function() {
        this.originalEvent.stopImmediatePropagation();
      } }]), t;
    }();
    function he(t) {
      return d.object(t) ? { capture: !!t.capture, passive: !!t.passive } : { capture: !!t, passive: false };
    }
    function Ae(t, e) {
      return t === e || (typeof t == "boolean" ? !!e.capture === t && !e.passive : !!t.capture == !!e.capture && !!t.passive == !!e.passive);
    }
    var Qn = { id: "events", install: function(t) {
      var e, n = [], r = {}, i = [], o2 = { add: a, remove: s, addDelegate: function(u, p, f, v, h) {
        var g = he(h);
        if (!r[f]) {
          r[f] = [];
          for (var y = 0; y < i.length; y++) {
            var m = i[y];
            a(m, f, c), a(m, f, l2, true);
          }
        }
        var b = r[f], T = pe(b, function(_) {
          return _.selector === u && _.context === p;
        });
        T || (T = { selector: u, context: p, listeners: [] }, b.push(T)), T.listeners.push({ func: v, options: g });
      }, removeDelegate: function(u, p, f, v, h) {
        var g, y = he(h), m = r[f], b = false;
        if (m)
          for (g = m.length - 1; g >= 0; g--) {
            var T = m[g];
            if (T.selector === u && T.context === p) {
              for (var _ = T.listeners, w = _.length - 1; w >= 0; w--) {
                var S = _[w];
                if (S.func === v && Ae(S.options, y)) {
                  _.splice(w, 1), _.length || (m.splice(g, 1), s(p, f, c), s(p, f, l2, true)), b = true;
                  break;
                }
              }
              if (b) break;
            }
          }
      }, delegateListener: c, delegateUseCapture: l2, delegatedEvents: r, documents: i, targets: n, supportsOptions: false, supportsPassive: false };
      function a(u, p, f, v) {
        if (u.addEventListener) {
          var h = he(v), g = pe(n, function(y) {
            return y.eventTarget === u;
          });
          g || (g = { eventTarget: u, events: {} }, n.push(g)), g.events[p] || (g.events[p] = []), pe(g.events[p], function(y) {
            return y.func === f && Ae(y.options, h);
          }) || (u.addEventListener(p, f, o2.supportsOptions ? h : h.capture), g.events[p].push({ func: f, options: h }));
        }
      }
      function s(u, p, f, v) {
        if (u.addEventListener && u.removeEventListener) {
          var h = le(n, function(M) {
            return M.eventTarget === u;
          }), g = n[h];
          if (g && g.events) if (p !== "all") {
            var y = false, m = g.events[p];
            if (m) {
              if (f === "all") {
                for (var b = m.length - 1; b >= 0; b--) {
                  var T = m[b];
                  s(u, p, T.func, T.options);
                }
                return;
              }
              for (var _ = he(v), w = 0; w < m.length; w++) {
                var S = m[w];
                if (S.func === f && Ae(S.options, _)) {
                  u.removeEventListener(p, f, o2.supportsOptions ? _ : _.capture), m.splice(w, 1), m.length === 0 && (delete g.events[p], y = true);
                  break;
                }
              }
            }
            y && !Object.keys(g.events).length && n.splice(h, 1);
          } else for (p in g.events) g.events.hasOwnProperty(p) && s(u, p, "all");
        }
      }
      function c(u, p) {
        for (var f = he(p), v = new Jn(u), h = r[u.type], g = Ct(u)[0], y = g; d.element(y); ) {
          for (var m = 0; m < h.length; m++) {
            var b = h[m], T = b.selector, _ = b.context;
            if (B(y, T) && K(_, g) && K(_, y)) {
              var w = b.listeners;
              v.currentTarget = y;
              for (var S = 0; S < w.length; S++) {
                var M = w[S];
                Ae(M.options, f) && M.func(v);
              }
            }
          }
          y = X(y);
        }
      }
      function l2(u) {
        return c(u, true);
      }
      return (e = t.document) == null || e.createElement("div").addEventListener("test", null, { get capture() {
        return o2.supportsOptions = true;
      }, get passive() {
        return o2.supportsPassive = true;
      } }), t.events = o2, o2;
    } }, ut = { methodOrder: ["simulationResume", "mouseOrPen", "hasPointer", "idle"], search: function(t) {
      for (var e = 0, n = ut.methodOrder; e < n.length; e++) {
        var r = n[e], i = ut[r](t);
        if (i) return i;
      }
      return null;
    }, simulationResume: function(t) {
      var e = t.pointerType, n = t.eventType, r = t.eventTarget, i = t.scope;
      if (!/down|start/i.test(n)) return null;
      for (var o2 = 0, a = i.interactions.list; o2 < a.length; o2++) {
        var s = a[o2], c = r;
        if (s.simulation && s.simulation.allowResume && s.pointerType === e) for (; c; ) {
          if (c === s.element) return s;
          c = X(c);
        }
      }
      return null;
    }, mouseOrPen: function(t) {
      var e, n = t.pointerId, r = t.pointerType, i = t.eventType, o2 = t.scope;
      if (r !== "mouse" && r !== "pen") return null;
      for (var a = 0, s = o2.interactions.list; a < s.length; a++) {
        var c = s[a];
        if (c.pointerType === r) {
          if (c.simulation && !cn(c, n)) continue;
          if (c.interacting()) return c;
          e || (e = c);
        }
      }
      if (e) return e;
      for (var l2 = 0, u = o2.interactions.list; l2 < u.length; l2++) {
        var p = u[l2];
        if (!(p.pointerType !== r || /down/i.test(i) && p.simulation)) return p;
      }
      return null;
    }, hasPointer: function(t) {
      for (var e = t.pointerId, n = 0, r = t.scope.interactions.list; n < r.length; n++) {
        var i = r[n];
        if (cn(i, e)) return i;
      }
      return null;
    }, idle: function(t) {
      for (var e = t.pointerType, n = 0, r = t.scope.interactions.list; n < r.length; n++) {
        var i = r[n];
        if (i.pointers.length === 1) {
          var o2 = i.interactable;
          if (o2 && (!o2.options.gesture || !o2.options.gesture.enabled)) continue;
        } else if (i.pointers.length >= 2) continue;
        if (!i.interacting() && e === i.pointerType) return i;
      }
      return null;
    } };
    function cn(t, e) {
      return t.pointers.some(function(n) {
        return n.id === e;
      });
    }
    var Zn = ut, lt = ["pointerDown", "pointerMove", "pointerUp", "updatePointer", "removePointer", "windowBlur"];
    function un(t, e) {
      return function(n) {
        var r = e.interactions.list, i = At(n), o2 = Ct(n), a = o2[0], s = o2[1], c = [];
        if (/^touch/.test(n.type)) {
          e.prevTouchTime = e.now();
          for (var l2 = 0, u = n.changedTouches; l2 < u.length; l2++) {
            var p = u[l2], f = { pointer: p, pointerId: ue(p), pointerType: i, eventType: n.type, eventTarget: a, curEventTarget: s, scope: e }, v = ln(f);
            c.push([f.pointer, f.eventTarget, f.curEventTarget, v]);
          }
        } else {
          var h = false;
          if (!R.supportsPointerEvent && /mouse/.test(n.type)) {
            for (var g = 0; g < r.length && !h; g++) h = r[g].pointerType !== "mouse" && r[g].pointerIsDown;
            h = h || e.now() - e.prevTouchTime < 500 || n.timeStamp === 0;
          }
          if (!h) {
            var y = { pointer: n, pointerId: ue(n), pointerType: i, eventType: n.type, curEventTarget: s, eventTarget: a, scope: e }, m = ln(y);
            c.push([y.pointer, y.eventTarget, y.curEventTarget, m]);
          }
        }
        for (var b = 0; b < c.length; b++) {
          var T = c[b], _ = T[0], w = T[1], S = T[2];
          T[3][t](_, n, w, S);
        }
      };
    }
    function ln(t) {
      var e = t.pointerType, n = t.scope, r = { interaction: Zn.search(t), searchDetails: t };
      return n.fire("interactions:find", r), r.interaction || n.interactions.new({ pointerType: e });
    }
    function pt(t, e) {
      var n = t.doc, r = t.scope, i = t.options, o2 = r.interactions.docEvents, a = r.events, s = a[e];
      for (var c in r.browser.isIOS && !i.events && (i.events = { passive: false }), a.delegatedEvents) s(n, c, a.delegateListener), s(n, c, a.delegateUseCapture, true);
      for (var l2 = i && i.events, u = 0; u < o2.length; u++) {
        var p = o2[u];
        s(n, p.type, p.listener, l2);
      }
    }
    var er = { id: "core/interactions", install: function(t) {
      for (var e = {}, n = 0; n < lt.length; n++) {
        var r = lt[n];
        e[r] = un(r, t);
      }
      var i, o2 = R.pEventTypes;
      function a() {
        for (var s = 0, c = t.interactions.list; s < c.length; s++) {
          var l2 = c[s];
          if (l2.pointerIsDown && l2.pointerType === "touch" && !l2._interacting) for (var u = function() {
            var v = f[p];
            t.documents.some(function(h) {
              return K(h.doc, v.downTarget);
            }) || l2.removePointer(v.pointer, v.event);
          }, p = 0, f = l2.pointers; p < f.length; p++) u();
        }
      }
      (i = O.PointerEvent ? [{ type: o2.down, listener: a }, { type: o2.down, listener: e.pointerDown }, { type: o2.move, listener: e.pointerMove }, { type: o2.up, listener: e.pointerUp }, { type: o2.cancel, listener: e.pointerUp }] : [{ type: "mousedown", listener: e.pointerDown }, { type: "mousemove", listener: e.pointerMove }, { type: "mouseup", listener: e.pointerUp }, { type: "touchstart", listener: a }, { type: "touchstart", listener: e.pointerDown }, { type: "touchmove", listener: e.pointerMove }, { type: "touchend", listener: e.pointerUp }, { type: "touchcancel", listener: e.pointerUp }]).push({ type: "blur", listener: function(s) {
        for (var c = 0, l2 = t.interactions.list; c < l2.length; c++)
          l2[c].documentBlur(s);
      } }), t.prevTouchTime = 0, t.Interaction = function(s) {
        ie(l2, s);
        var c = oe(l2);
        function l2() {
          return k(this, l2), c.apply(this, arguments);
        }
        return D(l2, [{ key: "pointerMoveTolerance", get: function() {
          return t.interactions.pointerMoveTolerance;
        }, set: function(u) {
          t.interactions.pointerMoveTolerance = u;
        } }, { key: "_now", value: function() {
          return t.now();
        } }]), l2;
      }(Gn), t.interactions = { list: [], new: function(s) {
        s.scopeFire = function(l2, u) {
          return t.fire(l2, u);
        };
        var c = new t.Interaction(s);
        return t.interactions.list.push(c), c;
      }, listeners: e, docEvents: i, pointerMoveTolerance: 1 }, t.usePlugin($t);
    }, listeners: { "scope:add-document": function(t) {
      return pt(t, "add");
    }, "scope:remove-document": function(t) {
      return pt(t, "remove");
    }, "interactable:unset": function(t, e) {
      for (var n = t.interactable, r = e.interactions.list.length - 1; r >= 0; r--) {
        var i = e.interactions.list[r];
        i.interactable === n && (i.stop(), e.fire("interactions:destroy", { interaction: i }), i.destroy(), e.interactions.list.length > 2 && e.interactions.list.splice(r, 1));
      }
    } }, onDocSignal: pt, doOnInteractions: un, methodNames: lt }, tr = er, G = function(t) {
      return t[t.On = 0] = "On", t[t.Off = 1] = "Off", t;
    }(G || {}), nr = function() {
      function t(e, n, r, i) {
        k(this, t), this.target = void 0, this.options = void 0, this._actions = void 0, this.events = new sn(), this._context = void 0, this._win = void 0, this._doc = void 0, this._scopeEvents = void 0, this._actions = n.actions, this.target = e, this._context = n.context || r, this._win = F(Pt(e) ? this._context : e), this._doc = this._win.document, this._scopeEvents = i, this.set(n);
      }
      return D(t, [{ key: "_defaults", get: function() {
        return { base: {}, perAction: {}, actions: {} };
      } }, { key: "setOnEvents", value: function(e, n) {
        return d.func(n.onstart) && this.on("".concat(e, "start"), n.onstart), d.func(n.onmove) && this.on("".concat(e, "move"), n.onmove), d.func(n.onend) && this.on("".concat(e, "end"), n.onend), d.func(n.oninertiastart) && this.on("".concat(e, "inertiastart"), n.oninertiastart), this;
      } }, { key: "updatePerActionListeners", value: function(e, n, r) {
        var i, o2 = this, a = (i = this._actions.map[e]) == null ? void 0 : i.filterEventType, s = function(c) {
          return (a == null || a(c)) && Ie(c, o2._actions);
        };
        (d.array(n) || d.object(n)) && this._onOff(G.Off, e, n, void 0, s), (d.array(r) || d.object(r)) && this._onOff(G.On, e, r, void 0, s);
      } }, { key: "setPerAction", value: function(e, n) {
        var r = this._defaults;
        for (var i in n) {
          var o2 = i, a = this.options[e], s = n[o2];
          o2 === "listeners" && this.updatePerActionListeners(e, a.listeners, s), d.array(s) ? a[o2] = jt(s) : d.plainObject(s) ? (a[o2] = x(a[o2] || {}, ne(s)), d.object(r.perAction[o2]) && "enabled" in r.perAction[o2] && (a[o2].enabled = s.enabled !== false)) : d.bool(s) && d.object(r.perAction[o2]) ? a[o2].enabled = s : a[o2] = s;
        }
      } }, { key: "getRect", value: function(e) {
        return e = e || (d.element(this.target) ? this.target : null), d.string(this.target) && (e = e || this._context.querySelector(this.target)), Ge(e);
      } }, { key: "rectChecker", value: function(e) {
        var n = this;
        return d.func(e) ? (this.getRect = function(r) {
          var i = x({}, e.apply(n, r));
          return "width" in i || (i.width = i.right - i.left, i.height = i.bottom - i.top), i;
        }, this) : e === null ? (delete this.getRect, this) : this.getRect;
      } }, { key: "_backCompatOption", value: function(e, n) {
        if (Pt(n) || d.object(n)) {
          for (var r in this.options[e] = n, this._actions.map) this.options[r][e] = n;
          return this;
        }
        return this.options[e];
      } }, { key: "origin", value: function(e) {
        return this._backCompatOption("origin", e);
      } }, { key: "deltaSource", value: function(e) {
        return e === "page" || e === "client" ? (this.options.deltaSource = e, this) : this.options.deltaSource;
      } }, { key: "getAllElements", value: function() {
        var e = this.target;
        return d.string(e) ? Array.from(this._context.querySelectorAll(e)) : d.func(e) && e.getAllElements ? e.getAllElements() : d.element(e) ? [e] : [];
      } }, { key: "context", value: function() {
        return this._context;
      } }, { key: "inContext", value: function(e) {
        return this._context === e.ownerDocument || K(this._context, e);
      } }, { key: "testIgnoreAllow", value: function(e, n, r) {
        return !this.testIgnore(e.ignoreFrom, n, r) && this.testAllow(e.allowFrom, n, r);
      } }, { key: "testAllow", value: function(e, n, r) {
        return !e || !!d.element(r) && (d.string(e) ? Ve(r, e, n) : !!d.element(e) && K(e, r));
      } }, { key: "testIgnore", value: function(e, n, r) {
        return !(!e || !d.element(r)) && (d.string(e) ? Ve(r, e, n) : !!d.element(e) && K(e, r));
      } }, { key: "fire", value: function(e) {
        return this.events.fire(e), this;
      } }, { key: "_onOff", value: function(e, n, r, i, o2) {
        d.object(n) && !d.array(n) && (i = r, r = null);
        var a = $(n, r, o2);
        for (var s in a) {
          s === "wheel" && (s = R.wheelEvent);
          for (var c = 0, l2 = a[s]; c < l2.length; c++) {
            var u = l2[c];
            Ie(s, this._actions) ? this.events[e === G.On ? "on" : "off"](s, u) : d.string(this.target) ? this._scopeEvents[e === G.On ? "addDelegate" : "removeDelegate"](this.target, this._context, s, u, i) : this._scopeEvents[e === G.On ? "add" : "remove"](this.target, s, u, i);
          }
        }
        return this;
      } }, { key: "on", value: function(e, n, r) {
        return this._onOff(G.On, e, n, r);
      } }, { key: "off", value: function(e, n, r) {
        return this._onOff(G.Off, e, n, r);
      } }, { key: "set", value: function(e) {
        var n = this._defaults;
        for (var r in d.object(e) || (e = {}), this.options = ne(n.base), this._actions.methodDict) {
          var i = r, o2 = this._actions.methodDict[i];
          this.options[i] = {}, this.setPerAction(i, x(x({}, n.perAction), n.actions[i])), this[o2](e[i]);
        }
        for (var a in e) a !== "getRect" ? d.func(this[a]) && this[a](e[a]) : this.rectChecker(e.getRect);
        return this;
      } }, { key: "unset", value: function() {
        if (d.string(this.target)) for (var e in this._scopeEvents.delegatedEvents) for (var n = this._scopeEvents.delegatedEvents[e], r = n.length - 1; r >= 0; r--) {
          var i = n[r], o2 = i.selector, a = i.context, s = i.listeners;
          o2 === this.target && a === this._context && n.splice(r, 1);
          for (var c = s.length - 1; c >= 0; c--) this._scopeEvents.removeDelegate(this.target, this._context, e, s[c][0], s[c][1]);
        }
        else this._scopeEvents.remove(this.target, "all");
      } }]), t;
    }(), rr = function() {
      function t(e) {
        var n = this;
        k(this, t), this.list = [], this.selectorMap = {}, this.scope = void 0, this.scope = e, e.addListeners({ "interactable:unset": function(r) {
          var i = r.interactable, o2 = i.target, a = d.string(o2) ? n.selectorMap[o2] : o2[n.scope.id], s = le(a, function(c) {
            return c === i;
          });
          a.splice(s, 1);
        } });
      }
      return D(t, [{ key: "new", value: function(e, n) {
        n = x(n || {}, { actions: this.scope.actions });
        var r = new this.scope.Interactable(e, n, this.scope.document, this.scope.events);
        return this.scope.addDocument(r._doc), this.list.push(r), d.string(e) ? (this.selectorMap[e] || (this.selectorMap[e] = []), this.selectorMap[e].push(r)) : (r.target[this.scope.id] || Object.defineProperty(e, this.scope.id, { value: [], configurable: true }), e[this.scope.id].push(r)), this.scope.fire("interactable:new", { target: e, options: n, interactable: r, win: this.scope._win }), r;
      } }, { key: "getExisting", value: function(e, n) {
        var r = n && n.context || this.scope.document, i = d.string(e), o2 = i ? this.selectorMap[e] : e[this.scope.id];
        if (o2) return pe(o2, function(a) {
          return a._context === r && (i || a.inContext(e));
        });
      } }, { key: "forEachMatch", value: function(e, n) {
        for (var r = 0, i = this.list; r < i.length; r++) {
          var o2 = i[r], a = void 0;
          if ((d.string(o2.target) ? d.element(e) && B(e, o2.target) : e === o2.target) && o2.inContext(e) && (a = n(o2)), a !== void 0) return a;
        }
      } }]), t;
    }(), ir = function() {
      function t() {
        var e = this;
        k(this, t), this.id = "__interact_scope_".concat(Math.floor(100 * Math.random())), this.isInitialized = false, this.listenerMaps = [], this.browser = R, this.defaults = ne(Qt), this.Eventable = sn, this.actions = { map: {}, phases: { start: true, move: true, end: true }, methodDict: {}, phaselessTypes: {} }, this.interactStatic = function(r) {
          var i = function o2(a, s) {
            var c = r.interactables.getExisting(a, s);
            return c || ((c = r.interactables.new(a, s)).events.global = o2.globalEvents), c;
          };
          return i.getPointerAverage = zt, i.getTouchBBox = He, i.getTouchDistance = Ke, i.getTouchAngle = $e, i.getElementRect = Ge, i.getElementClientRect = We, i.matchesSelector = B, i.closest = Et, i.globalEvents = {}, i.version = "1.10.27", i.scope = r, i.use = function(o2, a) {
            return this.scope.usePlugin(o2, a), this;
          }, i.isSet = function(o2, a) {
            return !!this.scope.interactables.get(o2, a && a.context);
          }, i.on = fe(function(o2, a, s) {
            if (d.string(o2) && o2.search(" ") !== -1 && (o2 = o2.trim().split(/ +/)), d.array(o2)) {
              for (var c = 0, l2 = o2; c < l2.length; c++) {
                var u = l2[c];
                this.on(u, a, s);
              }
              return this;
            }
            if (d.object(o2)) {
              for (var p in o2) this.on(p, o2[p], a);
              return this;
            }
            return Ie(o2, this.scope.actions) ? this.globalEvents[o2] ? this.globalEvents[o2].push(a) : this.globalEvents[o2] = [a] : this.scope.events.add(this.scope.document, o2, a, { options: s }), this;
          }, "The interact.on() method is being deprecated"), i.off = fe(function(o2, a, s) {
            if (d.string(o2) && o2.search(" ") !== -1 && (o2 = o2.trim().split(/ +/)), d.array(o2)) {
              for (var c = 0, l2 = o2; c < l2.length; c++) {
                var u = l2[c];
                this.off(u, a, s);
              }
              return this;
            }
            if (d.object(o2)) {
              for (var p in o2) this.off(p, o2[p], a);
              return this;
            }
            var f;
            return Ie(o2, this.scope.actions) ? o2 in this.globalEvents && (f = this.globalEvents[o2].indexOf(a)) !== -1 && this.globalEvents[o2].splice(f, 1) : this.scope.events.remove(this.scope.document, o2, a, s), this;
          }, "The interact.off() method is being deprecated"), i.debug = function() {
            return this.scope;
          }, i.supportsTouch = function() {
            return R.supportsTouch;
          }, i.supportsPointerEvent = function() {
            return R.supportsPointerEvent;
          }, i.stop = function() {
            for (var o2 = 0, a = this.scope.interactions.list; o2 < a.length; o2++) a[o2].stop();
            return this;
          }, i.pointerMoveTolerance = function(o2) {
            return d.number(o2) ? (this.scope.interactions.pointerMoveTolerance = o2, this) : this.scope.interactions.pointerMoveTolerance;
          }, i.addDocument = function(o2, a) {
            this.scope.addDocument(o2, a);
          }, i.removeDocument = function(o2) {
            this.scope.removeDocument(o2);
          }, i;
        }(this), this.InteractEvent = st, this.Interactable = void 0, this.interactables = new rr(this), this._win = void 0, this.document = void 0, this.window = void 0, this.documents = [], this._plugins = { list: [], map: {} }, this.onWindowUnload = function(r) {
          return e.removeDocument(r.target);
        };
        var n = this;
        this.Interactable = function(r) {
          ie(o2, r);
          var i = oe(o2);
          function o2() {
            return k(this, o2), i.apply(this, arguments);
          }
          return D(o2, [{ key: "_defaults", get: function() {
            return n.defaults;
          } }, { key: "set", value: function(a) {
            return xe(U(o2.prototype), "set", this).call(this, a), n.fire("interactable:set", { options: a, interactable: this }), this;
          } }, { key: "unset", value: function() {
            xe(U(o2.prototype), "unset", this).call(this);
            var a = n.interactables.list.indexOf(this);
            a < 0 || (n.interactables.list.splice(a, 1), n.fire("interactable:unset", { interactable: this }));
          } }]), o2;
        }(nr);
      }
      return D(t, [{ key: "addListeners", value: function(e, n) {
        this.listenerMaps.push({ id: n, map: e });
      } }, { key: "fire", value: function(e, n) {
        for (var r = 0, i = this.listenerMaps; r < i.length; r++) {
          var o2 = i[r].map[e];
          if (o2 && o2(n, this, e) === false) return false;
        }
      } }, { key: "init", value: function(e) {
        return this.isInitialized ? this : function(n, r) {
          return n.isInitialized = true, d.window(r) && yt(r), O.init(r), R.init(r), V.init(r), n.window = r, n.document = r.document, n.usePlugin(tr), n.usePlugin(Qn), n;
        }(this, e);
      } }, { key: "pluginIsInstalled", value: function(e) {
        var n = e.id;
        return n ? !!this._plugins.map[n] : this._plugins.list.indexOf(e) !== -1;
      } }, { key: "usePlugin", value: function(e, n) {
        if (!this.isInitialized) return this;
        if (this.pluginIsInstalled(e)) return this;
        if (e.id && (this._plugins.map[e.id] = e), this._plugins.list.push(e), e.install && e.install(this, n), e.listeners && e.before) {
          for (var r = 0, i = this.listenerMaps.length, o2 = e.before.reduce(function(s, c) {
            return s[c] = true, s[pn(c)] = true, s;
          }, {}); r < i; r++) {
            var a = this.listenerMaps[r].id;
            if (a && (o2[a] || o2[pn(a)])) break;
          }
          this.listenerMaps.splice(r, 0, { id: e.id, map: e.listeners });
        } else e.listeners && this.listenerMaps.push({ id: e.id, map: e.listeners });
        return this;
      } }, { key: "addDocument", value: function(e, n) {
        if (this.getDocIndex(e) !== -1) return false;
        var r = F(e);
        n = n ? x({}, n) : {}, this.documents.push({ doc: e, options: n }), this.events.documents.push(e), e !== this.document && this.events.add(r, "unload", this.onWindowUnload), this.fire("scope:add-document", { doc: e, window: r, scope: this, options: n });
      } }, { key: "removeDocument", value: function(e) {
        var n = this.getDocIndex(e), r = F(e), i = this.documents[n].options;
        this.events.remove(r, "unload", this.onWindowUnload), this.documents.splice(n, 1), this.events.documents.splice(n, 1), this.fire("scope:remove-document", { doc: e, window: r, scope: this, options: i });
      } }, { key: "getDocIndex", value: function(e) {
        for (var n = 0; n < this.documents.length; n++) if (this.documents[n].doc === e) return n;
        return -1;
      } }, { key: "getDocOptions", value: function(e) {
        var n = this.getDocIndex(e);
        return n === -1 ? null : this.documents[n].options;
      } }, { key: "now", value: function() {
        return (this.window.Date || Date).now();
      } }]), t;
    }();
    function pn(t) {
      return t && t.replace(/\/.*$/, "");
    }
    var fn = new ir(), I = fn.interactStatic, or = typeof globalThis < "u" ? globalThis : window;
    fn.init(or);
    var ar = Object.freeze({ __proto__: null, edgeTarget: function() {
    }, elements: function() {
    }, grid: function(t) {
      var e = [["x", "y"], ["left", "top"], ["right", "bottom"], ["width", "height"]].filter(function(r) {
        var i = r[0], o2 = r[1];
        return i in t || o2 in t;
      }), n = function(r, i) {
        for (var o2 = t.range, a = t.limits, s = a === void 0 ? { left: -1 / 0, right: 1 / 0, top: -1 / 0, bottom: 1 / 0 } : a, c = t.offset, l2 = c === void 0 ? { x: 0, y: 0 } : c, u = { range: o2, grid: t, x: null, y: null }, p = 0; p < e.length; p++) {
          var f = e[p], v = f[0], h = f[1], g = Math.round((r - l2.x) / t[v]), y = Math.round((i - l2.y) / t[h]);
          u[v] = Math.max(s.left, Math.min(s.right, g * t[v] + l2.x)), u[h] = Math.max(s.top, Math.min(s.bottom, y * t[h] + l2.y));
        }
        return u;
      };
      return n.grid = t, n.coordFields = e, n;
    } }), sr = { id: "snappers", install: function(t) {
      var e = t.interactStatic;
      e.snappers = x(e.snappers || {}, ar), e.createSnapGrid = e.snappers.grid;
    } }, cr = sr, ur = { start: function(t) {
      var e = t.state, n = t.rect, r = t.edges, i = t.pageCoords, o2 = e.options, a = o2.ratio, s = o2.enabled, c = e.options, l2 = c.equalDelta, u = c.modifiers;
      a === "preserve" && (a = n.width / n.height), e.startCoords = x({}, i), e.startRect = x({}, n), e.ratio = a, e.equalDelta = l2;
      var p = e.linkedEdges = { top: r.top || r.left && !r.bottom, left: r.left || r.top && !r.right, bottom: r.bottom || r.right && !r.top, right: r.right || r.bottom && !r.left };
      if (e.xIsPrimaryAxis = !(!r.left && !r.right), e.equalDelta) {
        var f = (p.left ? 1 : -1) * (p.top ? 1 : -1);
        e.edgeSign = { x: f, y: f };
      } else e.edgeSign = { x: p.left ? -1 : 1, y: p.top ? -1 : 1 };
      if (s !== false && x(r, p), u != null && u.length) {
        var v = new at(t.interaction);
        v.copyFrom(t.interaction.modification), v.prepareStates(u), e.subModification = v, v.startAll(re({}, t));
      }
    }, set: function(t) {
      var e = t.state, n = t.rect, r = t.coords, i = e.linkedEdges, o2 = x({}, r), a = e.equalDelta ? lr : pr;
      if (x(t.edges, i), a(e, e.xIsPrimaryAxis, r, n), !e.subModification) return null;
      var s = x({}, n);
      Se(i, s, { x: r.x - o2.x, y: r.y - o2.y });
      var c = e.subModification.setAll(re(re({}, t), {}, { rect: s, edges: i, pageCoords: r, prevCoords: r, prevRect: s })), l2 = c.delta;
      return c.changed && (a(e, Math.abs(l2.x) > Math.abs(l2.y), c.coords, c.rect), x(r, c.coords)), c.eventProps;
    }, defaults: { ratio: "preserve", equalDelta: false, modifiers: [], enabled: false } };
    function lr(t, e, n) {
      var r = t.startCoords, i = t.edgeSign;
      e ? n.y = r.y + (n.x - r.x) * i.y : n.x = r.x + (n.y - r.y) * i.x;
    }
    function pr(t, e, n, r) {
      var i = t.startRect, o2 = t.startCoords, a = t.ratio, s = t.edgeSign;
      if (e) {
        var c = r.width / a;
        n.y = o2.y + (c - i.height) * s.y;
      } else {
        var l2 = r.height * a;
        n.x = o2.x + (l2 - i.width) * s.x;
      }
    }
    var fr = W(ur, "aspectRatio"), dn = function() {
    };
    dn._defaults = {};
    var Ce = dn;
    function Q(t, e, n) {
      return d.func(t) ? ae(t, e.interactable, e.element, [n.x, n.y, e]) : ae(t, e.interactable, e.element);
    }
    var Re = { start: function(t) {
      var e = t.rect, n = t.startOffset, r = t.state, i = t.interaction, o2 = t.pageCoords, a = r.options, s = a.elementRect, c = x({ left: 0, top: 0, right: 0, bottom: 0 }, a.offset || {});
      if (e && s) {
        var l2 = Q(a.restriction, i, o2);
        if (l2) {
          var u = l2.right - l2.left - e.width, p = l2.bottom - l2.top - e.height;
          u < 0 && (c.left += u, c.right += u), p < 0 && (c.top += p, c.bottom += p);
        }
        c.left += n.left - e.width * s.left, c.top += n.top - e.height * s.top, c.right += n.right - e.width * (1 - s.right), c.bottom += n.bottom - e.height * (1 - s.bottom);
      }
      r.offset = c;
    }, set: function(t) {
      var e = t.coords, n = t.interaction, r = t.state, i = r.options, o2 = r.offset, a = Q(i.restriction, n, e);
      if (a) {
        var s = function(c) {
          return !c || "left" in c && "top" in c || ((c = x({}, c)).left = c.x || 0, c.top = c.y || 0, c.right = c.right || c.left + c.width, c.bottom = c.bottom || c.top + c.height), c;
        }(a);
        e.x = Math.max(Math.min(s.right - o2.right, e.x), s.left + o2.left), e.y = Math.max(Math.min(s.bottom - o2.bottom, e.y), s.top + o2.top);
      }
    }, defaults: { restriction: null, elementRect: null, offset: null, endOnly: false, enabled: false } }, dr = W(Re, "restrict"), hn = { top: 1 / 0, left: 1 / 0, bottom: -1 / 0, right: -1 / 0 }, vn = { top: -1 / 0, left: -1 / 0, bottom: 1 / 0, right: 1 / 0 };
    function gn(t, e) {
      for (var n = 0, r = ["top", "left", "bottom", "right"]; n < r.length; n++) {
        var i = r[n];
        i in t || (t[i] = e[i]);
      }
      return t;
    }
    var ve = { noInner: hn, noOuter: vn, start: function(t) {
      var e, n = t.interaction, r = t.startOffset, i = t.state, o2 = i.options;
      o2 && (e = Te(Q(o2.offset, n, n.coords.start.page))), e = e || { x: 0, y: 0 }, i.offset = { top: e.y + r.top, left: e.x + r.left, bottom: e.y - r.bottom, right: e.x - r.right };
    }, set: function(t) {
      var e = t.coords, n = t.edges, r = t.interaction, i = t.state, o2 = i.offset, a = i.options;
      if (n) {
        var s = x({}, e), c = Q(a.inner, r, s) || {}, l2 = Q(a.outer, r, s) || {};
        gn(c, hn), gn(l2, vn), n.top ? e.y = Math.min(Math.max(l2.top + o2.top, s.y), c.top + o2.top) : n.bottom && (e.y = Math.max(Math.min(l2.bottom + o2.bottom, s.y), c.bottom + o2.bottom)), n.left ? e.x = Math.min(Math.max(l2.left + o2.left, s.x), c.left + o2.left) : n.right && (e.x = Math.max(Math.min(l2.right + o2.right, s.x), c.right + o2.right));
      }
    }, defaults: { inner: null, outer: null, offset: null, endOnly: false, enabled: false } }, hr = W(ve, "restrictEdges"), vr = x({ get elementRect() {
      return { top: 0, left: 0, bottom: 1, right: 1 };
    }, set elementRect(t) {
    } }, Re.defaults), gr = W({ start: Re.start, set: Re.set, defaults: vr }, "restrictRect"), mr = { width: -1 / 0, height: -1 / 0 }, yr = { width: 1 / 0, height: 1 / 0 }, br = W({ start: function(t) {
      return ve.start(t);
    }, set: function(t) {
      var e = t.interaction, n = t.state, r = t.rect, i = t.edges, o2 = n.options;
      if (i) {
        var a = Ne(Q(o2.min, e, t.coords)) || mr, s = Ne(Q(o2.max, e, t.coords)) || yr;
        n.options = { endOnly: o2.endOnly, inner: x({}, ve.noInner), outer: x({}, ve.noOuter) }, i.top ? (n.options.inner.top = r.bottom - a.height, n.options.outer.top = r.bottom - s.height) : i.bottom && (n.options.inner.bottom = r.top + a.height, n.options.outer.bottom = r.top + s.height), i.left ? (n.options.inner.left = r.right - a.width, n.options.outer.left = r.right - s.width) : i.right && (n.options.inner.right = r.left + a.width, n.options.outer.right = r.left + s.width), ve.set(t), n.options = o2;
      }
    }, defaults: { min: null, max: null, endOnly: false, enabled: false } }, "restrictSize"), ft = { start: function(t) {
      var e, n = t.interaction, r = t.interactable, i = t.element, o2 = t.rect, a = t.state, s = t.startOffset, c = a.options, l2 = c.offsetWithOrigin ? function(f) {
        var v = f.interaction.element, h = Te(ae(f.state.options.origin, null, null, [v])), g = h || se(f.interactable, v, f.interaction.prepared.name);
        return g;
      }(t) : { x: 0, y: 0 };
      if (c.offset === "startCoords") e = { x: n.coords.start.page.x, y: n.coords.start.page.y };
      else {
        var u = ae(c.offset, r, i, [n]);
        (e = Te(u) || { x: 0, y: 0 }).x += l2.x, e.y += l2.y;
      }
      var p = c.relativePoints;
      a.offsets = o2 && p && p.length ? p.map(function(f, v) {
        return { index: v, relativePoint: f, x: s.left - o2.width * f.x + e.x, y: s.top - o2.height * f.y + e.y };
      }) : [{ index: 0, relativePoint: null, x: e.x, y: e.y }];
    }, set: function(t) {
      var e = t.interaction, n = t.coords, r = t.state, i = r.options, o2 = r.offsets, a = se(e.interactable, e.element, e.prepared.name), s = x({}, n), c = [];
      i.offsetWithOrigin || (s.x -= a.x, s.y -= a.y);
      for (var l2 = 0, u = o2; l2 < u.length; l2++) for (var p = u[l2], f = s.x - p.x, v = s.y - p.y, h = 0, g = i.targets.length; h < g; h++) {
        var y = i.targets[h], m = void 0;
        (m = d.func(y) ? y(f, v, e._proxy, p, h) : y) && c.push({ x: (d.number(m.x) ? m.x : f) + p.x, y: (d.number(m.y) ? m.y : v) + p.y, range: d.number(m.range) ? m.range : i.range, source: y, index: h, offset: p });
      }
      for (var b = { target: null, inRange: false, distance: 0, range: 0, delta: { x: 0, y: 0 } }, T = 0; T < c.length; T++) {
        var _ = c[T], w = _.range, S = _.x - s.x, M = _.y - s.y, P = ce(S, M), z = P <= w;
        w === 1 / 0 && b.inRange && b.range !== 1 / 0 && (z = false), b.target && !(z ? b.inRange && w !== 1 / 0 ? P / w < b.distance / b.range : w === 1 / 0 && b.range !== 1 / 0 || P < b.distance : !b.inRange && P < b.distance) || (b.target = _, b.distance = P, b.range = w, b.inRange = z, b.delta.x = S, b.delta.y = M);
      }
      return b.inRange && (n.x = b.target.x, n.y = b.target.y), r.closest = b, b;
    }, defaults: { range: 1 / 0, targets: null, offset: null, offsetWithOrigin: true, origin: null, relativePoints: null, endOnly: false, enabled: false } }, xr = W(ft, "snap"), je = { start: function(t) {
      var e = t.state, n = t.edges, r = e.options;
      if (!n) return null;
      t.state = { options: { targets: null, relativePoints: [{ x: n.left ? 0 : 1, y: n.top ? 0 : 1 }], offset: r.offset || "self", origin: { x: 0, y: 0 }, range: r.range } }, e.targetFields = e.targetFields || [["width", "height"], ["x", "y"]], ft.start(t), e.offsets = t.state.offsets, t.state = e;
    }, set: function(t) {
      var e = t.interaction, n = t.state, r = t.coords, i = n.options, o2 = n.offsets, a = { x: r.x - o2[0].x, y: r.y - o2[0].y };
      n.options = x({}, i), n.options.targets = [];
      for (var s = 0, c = i.targets || []; s < c.length; s++) {
        var l2 = c[s], u = void 0;
        if (u = d.func(l2) ? l2(a.x, a.y, e) : l2) {
          for (var p = 0, f = n.targetFields; p < f.length; p++) {
            var v = f[p], h = v[0], g = v[1];
            if (h in u || g in u) {
              u.x = u[h], u.y = u[g];
              break;
            }
          }
          n.options.targets.push(u);
        }
      }
      var y = ft.set(t);
      return n.options = i, y;
    }, defaults: { range: 1 / 0, targets: null, offset: null, endOnly: false, enabled: false } }, wr = W(je, "snapSize"), dt = { aspectRatio: fr, restrictEdges: hr, restrict: dr, restrictRect: gr, restrictSize: br, snapEdges: W({ start: function(t) {
      var e = t.edges;
      return e ? (t.state.targetFields = t.state.targetFields || [[e.left ? "left" : "right", e.top ? "top" : "bottom"]], je.start(t)) : null;
    }, set: je.set, defaults: x(ne(je.defaults), { targets: void 0, range: void 0, offset: { x: 0, y: 0 } }) }, "snapEdges"), snap: xr, snapSize: wr, spring: Ce, avoid: Ce, transform: Ce, rubberband: Ce }, Er = { id: "modifiers", install: function(t) {
      var e = t.interactStatic;
      for (var n in t.usePlugin(Jt), t.usePlugin(cr), e.modifiers = dt, dt) {
        var r = dt[n], i = r._defaults, o2 = r._methods;
        i._methods = o2, t.defaults.perAction[n] = i;
      }
    } }, Tr = Er, mn = function(t) {
      ie(n, t);
      var e = oe(n);
      function n(r, i, o2, a, s, c) {
        var l2;
        if (k(this, n), _e(be(l2 = e.call(this, s)), o2), o2 !== i && _e(be(l2), i), l2.timeStamp = c, l2.originalEvent = o2, l2.type = r, l2.pointerId = ue(i), l2.pointerType = At(i), l2.target = a, l2.currentTarget = null, r === "tap") {
          var u = s.getPointerIndex(i);
          l2.dt = l2.timeStamp - s.pointers[u].downTime;
          var p = l2.timeStamp - s.tapTime;
          l2.double = !!s.prevTap && s.prevTap.type !== "doubletap" && s.prevTap.target === l2.target && p < 500;
        } else r === "doubletap" && (l2.dt = i.timeStamp - s.tapTime, l2.double = true);
        return l2;
      }
      return D(n, [{ key: "_subtractOrigin", value: function(r) {
        var i = r.x, o2 = r.y;
        return this.pageX -= i, this.pageY -= o2, this.clientX -= i, this.clientY -= o2, this;
      } }, { key: "_addOrigin", value: function(r) {
        var i = r.x, o2 = r.y;
        return this.pageX += i, this.pageY += o2, this.clientX += i, this.clientY += o2, this;
      } }, { key: "preventDefault", value: function() {
        this.originalEvent.preventDefault();
      } }]), n;
    }(ke), ge = { id: "pointer-events/base", before: ["inertia", "modifiers", "auto-start", "actions"], install: function(t) {
      t.pointerEvents = ge, t.defaults.actions.pointerEvents = ge.defaults, x(t.actions.phaselessTypes, ge.types);
    }, listeners: { "interactions:new": function(t) {
      var e = t.interaction;
      e.prevTap = null, e.tapTime = 0;
    }, "interactions:update-pointer": function(t) {
      var e = t.down, n = t.pointerInfo;
      !e && n.hold || (n.hold = { duration: 1 / 0, timeout: null });
    }, "interactions:move": function(t, e) {
      var n = t.interaction, r = t.pointer, i = t.event, o2 = t.eventTarget;
      t.duplicate || n.pointerIsDown && !n.pointerWasMoved || (n.pointerIsDown && ht(t), N({ interaction: n, pointer: r, event: i, eventTarget: o2, type: "move" }, e));
    }, "interactions:down": function(t, e) {
      (function(n, r) {
        for (var i = n.interaction, o2 = n.pointer, a = n.event, s = n.eventTarget, c = n.pointerIndex, l2 = i.pointers[c].hold, u = _t(s), p = { interaction: i, pointer: o2, event: a, eventTarget: s, type: "hold", targets: [], path: u, node: null }, f = 0; f < u.length; f++) {
          var v = u[f];
          p.node = v, r.fire("pointerEvents:collect-targets", p);
        }
        if (p.targets.length) {
          for (var h = 1 / 0, g = 0, y = p.targets; g < y.length; g++) {
            var m = y[g].eventable.options.holdDuration;
            m < h && (h = m);
          }
          l2.duration = h, l2.timeout = setTimeout(function() {
            N({ interaction: i, eventTarget: s, pointer: o2, event: a, type: "hold" }, r);
          }, h);
        }
      })(t, e), N(t, e);
    }, "interactions:up": function(t, e) {
      ht(t), N(t, e), function(n, r) {
        var i = n.interaction, o2 = n.pointer, a = n.event, s = n.eventTarget;
        i.pointerWasMoved || N({ interaction: i, eventTarget: s, pointer: o2, event: a, type: "tap" }, r);
      }(t, e);
    }, "interactions:cancel": function(t, e) {
      ht(t), N(t, e);
    } }, PointerEvent: mn, fire: N, collectEventTargets: yn, defaults: { holdDuration: 600, ignoreFrom: null, allowFrom: null, origin: { x: 0, y: 0 } }, types: { down: true, move: true, up: true, cancel: true, tap: true, doubletap: true, hold: true } };
    function N(t, e) {
      var n = t.interaction, r = t.pointer, i = t.event, o2 = t.eventTarget, a = t.type, s = t.targets, c = s === void 0 ? yn(t, e) : s, l2 = new mn(a, r, i, o2, n, e.now());
      e.fire("pointerEvents:new", { pointerEvent: l2 });
      for (var u = { interaction: n, pointer: r, event: i, eventTarget: o2, targets: c, type: a, pointerEvent: l2 }, p = 0; p < c.length; p++) {
        var f = c[p];
        for (var v in f.props || {}) l2[v] = f.props[v];
        var h = se(f.eventable, f.node);
        if (l2._subtractOrigin(h), l2.eventable = f.eventable, l2.currentTarget = f.node, f.eventable.fire(l2), l2._addOrigin(h), l2.immediatePropagationStopped || l2.propagationStopped && p + 1 < c.length && c[p + 1].node !== l2.currentTarget) break;
      }
      if (e.fire("pointerEvents:fired", u), a === "tap") {
        var g = l2.double ? N({ interaction: n, pointer: r, event: i, eventTarget: o2, type: "doubletap" }, e) : l2;
        n.prevTap = g, n.tapTime = g.timeStamp;
      }
      return l2;
    }
    function yn(t, e) {
      var n = t.interaction, r = t.pointer, i = t.event, o2 = t.eventTarget, a = t.type, s = n.getPointerIndex(r), c = n.pointers[s];
      if (a === "tap" && (n.pointerWasMoved || !c || c.downTarget !== o2)) return [];
      for (var l2 = _t(o2), u = { interaction: n, pointer: r, event: i, eventTarget: o2, type: a, path: l2, targets: [], node: null }, p = 0; p < l2.length; p++) {
        var f = l2[p];
        u.node = f, e.fire("pointerEvents:collect-targets", u);
      }
      return a === "hold" && (u.targets = u.targets.filter(function(v) {
        var h, g;
        return v.eventable.options.holdDuration === ((h = n.pointers[s]) == null || (g = h.hold) == null ? void 0 : g.duration);
      })), u.targets;
    }
    function ht(t) {
      var e = t.interaction, n = t.pointerIndex, r = e.pointers[n].hold;
      r && r.timeout && (clearTimeout(r.timeout), r.timeout = null);
    }
    var Sr = Object.freeze({ __proto__: null, default: ge });
    function _r(t) {
      var e = t.interaction;
      e.holdIntervalHandle && (clearInterval(e.holdIntervalHandle), e.holdIntervalHandle = null);
    }
    var Pr = { id: "pointer-events/holdRepeat", install: function(t) {
      t.usePlugin(ge);
      var e = t.pointerEvents;
      e.defaults.holdRepeatInterval = 0, e.types.holdrepeat = t.actions.phaselessTypes.holdrepeat = true;
    }, listeners: ["move", "up", "cancel", "endall"].reduce(function(t, e) {
      return t["pointerEvents:".concat(e)] = _r, t;
    }, { "pointerEvents:new": function(t) {
      var e = t.pointerEvent;
      e.type === "hold" && (e.count = (e.count || 0) + 1);
    }, "pointerEvents:fired": function(t, e) {
      var n = t.interaction, r = t.pointerEvent, i = t.eventTarget, o2 = t.targets;
      if (r.type === "hold" && o2.length) {
        var a = o2[0].eventable.options.holdRepeatInterval;
        a <= 0 || (n.holdIntervalHandle = setTimeout(function() {
          e.pointerEvents.fire({ interaction: n, eventTarget: i, type: "hold", pointer: r, event: r }, e);
        }, a));
      }
    } }) }, Or = Pr, kr = { id: "pointer-events/interactableTargets", install: function(t) {
      var e = t.Interactable;
      e.prototype.pointerEvents = function(r) {
        return x(this.events.options, r), this;
      };
      var n = e.prototype._backCompatOption;
      e.prototype._backCompatOption = function(r, i) {
        var o2 = n.call(this, r, i);
        return o2 === this && (this.events.options[r] = i), o2;
      };
    }, listeners: { "pointerEvents:collect-targets": function(t, e) {
      var n = t.targets, r = t.node, i = t.type, o2 = t.eventTarget;
      e.interactables.forEachMatch(r, function(a) {
        var s = a.events, c = s.options;
        s.types[i] && s.types[i].length && a.testIgnoreAllow(c, r, o2) && n.push({ node: r, eventable: s, props: { interactable: a } });
      });
    }, "interactable:new": function(t) {
      var e = t.interactable;
      e.events.getRect = function(n) {
        return e.getRect(n);
      };
    }, "interactable:set": function(t, e) {
      var n = t.interactable, r = t.options;
      x(n.events.options, e.pointerEvents.defaults), x(n.events.options, r.pointerEvents || {});
    } } }, Dr = kr, Ir = { id: "pointer-events", install: function(t) {
      t.usePlugin(Sr), t.usePlugin(Or), t.usePlugin(Dr);
    } }, Mr = Ir, zr = { id: "reflow", install: function(t) {
      var e = t.Interactable;
      t.actions.phases.reflow = true, e.prototype.reflow = function(n) {
        return function(r, i, o2) {
          for (var a = r.getAllElements(), s = o2.window.Promise, c = s ? [] : null, l2 = function() {
            var p = a[u], f = r.getRect(p);
            if (!f) return 1;
            var v, h = pe(o2.interactions.list, function(m) {
              return m.interacting() && m.interactable === r && m.element === p && m.prepared.name === i.name;
            });
            if (h) h.move(), c && (v = h._reflowPromise || new s(function(m) {
              h._reflowResolve = m;
            }));
            else {
              var g = Ne(f), y = /* @__PURE__ */ function(m) {
                return { coords: m, get page() {
                  return this.coords.page;
                }, get client() {
                  return this.coords.client;
                }, get timeStamp() {
                  return this.coords.timeStamp;
                }, get pageX() {
                  return this.coords.page.x;
                }, get pageY() {
                  return this.coords.page.y;
                }, get clientX() {
                  return this.coords.client.x;
                }, get clientY() {
                  return this.coords.client.y;
                }, get pointerId() {
                  return this.coords.pointerId;
                }, get target() {
                  return this.coords.target;
                }, get type() {
                  return this.coords.type;
                }, get pointerType() {
                  return this.coords.pointerType;
                }, get buttons() {
                  return this.coords.buttons;
                }, preventDefault: function() {
                } };
              }({ page: { x: g.x, y: g.y }, client: { x: g.x, y: g.y }, timeStamp: o2.now() });
              v = function(m, b, T, _, w) {
                var S = m.interactions.new({ pointerType: "reflow" }), M = { interaction: S, event: w, pointer: w, eventTarget: T, phase: "reflow" };
                S.interactable = b, S.element = T, S.prevEvent = w, S.updatePointer(w, w, T, true), Dt(S.coords.delta), nt(S.prepared, _), S._doPhase(M);
                var P = m.window, z = P.Promise, j = z ? new z(function(q) {
                  S._reflowResolve = q;
                }) : void 0;
                return S._reflowPromise = j, S.start(_, b, T), S._interacting ? (S.move(M), S.end(w)) : (S.stop(), S._reflowResolve()), S.removePointer(w, w), j;
              }(o2, r, p, i, y);
            }
            c && c.push(v);
          }, u = 0; u < a.length && !l2(); u++) ;
          return c && s.all(c).then(function() {
            return r;
          });
        }(this, n, t);
      };
    }, listeners: { "interactions:stop": function(t, e) {
      var n = t.interaction;
      n.pointerType === "reflow" && (n._reflowResolve && n._reflowResolve(), function(r, i) {
        r.splice(r.indexOf(i), 1);
      }(e.interactions.list, n));
    } } }, Ar = zr;
    if (I.use($t), I.use(nn), I.use(Mr), I.use($n), I.use(Tr), I.use(Xn), I.use(On), I.use(Dn), I.use(Ar), I.default = I, Z(ye) === "object" && ye) try {
      ye.exports = I;
    } catch {
    }
    return I.default = I, I;
  });
})(Xe, Xe.exports);
var jr = Xe.exports;
var Yr = l(jr);

export {
  Yr
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/_commonjsHelpers.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)

@esri/calcite-components/dist/chunks/interact.min.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=chunk-DWZQXKZC.js.map
