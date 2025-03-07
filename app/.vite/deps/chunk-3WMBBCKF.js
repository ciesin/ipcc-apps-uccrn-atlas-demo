import {
  o
} from "./chunk-5DJJ57UM.js";
import {
  r as r2
} from "./chunk-HLOKDQU3.js";
import {
  s
} from "./chunk-SUVHJC6Z.js";
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
  n2 as n
} from "./chunk-CWMZW2S5.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/input/keys.js
var t = has("mac") ? "Meta" : "Control";
var o2 = /* @__PURE__ */ new Set(["Alt", "Control", "Meta", "Shift", "Ctrl", "Primary"]);
var r3 = (t3) => o2.has(t3);

// node_modules/@arcgis/core/views/input/EventMatch.js
var e = class {
  constructor(e2, t3 = []) {
    this.eventType = e2, this.keyModifiers = t3;
  }
  matches(e2) {
    if (e2.type !== this.eventType) return false;
    if (0 === this.keyModifiers.length) return true;
    const t3 = e2.modifiers;
    for (const i3 of this.keyModifiers) if (!t3.has(i3)) return false;
    return true;
  }
};

// node_modules/@arcgis/core/views/input/InputHandler.js
var t2 = class {
  constructor(e2) {
    this._manager = null, this._incoming = {}, this._outgoing = {}, this._incomingEventMatches = null, this._incomingEventTypes = null, this._outgoingEventTypes = null, this._hasSideEffects = e2;
  }
  get incomingEventMatches() {
    if (!this._incomingEventMatches) {
      this._incomingEventMatches = [];
      for (const e2 in this._incoming) {
        const t3 = this._incoming[e2];
        for (const e3 of t3) this._incomingEventMatches.push(e3.match);
      }
    }
    return this._incomingEventMatches;
  }
  get incomingEventTypes() {
    return this._incomingEventTypes || (this._incomingEventTypes = this.incomingEventMatches.map((e2) => e2.eventType)), this._incomingEventTypes;
  }
  get outgoingEventTypes() {
    return this._outgoingEventTypes || (this._outgoingEventTypes = Object.keys(this._outgoing)), this._outgoingEventTypes;
  }
  get hasSideEffects() {
    return this._hasSideEffects;
  }
  get hasPendingInputs() {
    return false;
  }
  onInstall(e2) {
    this._manager || (e2.setEventCallback((e3) => this._handleEvent(e3)), e2.setUninstallCallback(() => this._onUninstall()), this._manager = e2);
  }
  onUninstall() {
  }
  registerIncoming(t3, i3, s3) {
    let o3;
    "function" == typeof i3 ? (s3 = i3, o3 = []) : o3 = i3 || [];
    const a2 = "string" == typeof t3 ? new e(t3, o3) : t3, h = () => {
      this._incomingEventTypes = null, this._incomingEventMatches = null;
    }, r4 = (e2) => {
      const t4 = this._incoming[e2.match.eventType];
      if (t4) {
        const n3 = t4.indexOf(e2);
        t4.splice(n3, 1), h(), this._manager && this._manager.updateDependencies();
      }
    }, g3 = new n2(a2, s3, { onPause: r4, onRemove: r4, onResume: (e2) => {
      const t4 = this._incoming[e2.match.eventType];
      t4 && !t4.includes(e2) && (t4.push(e2), h(), this._manager && this._manager.updateDependencies());
    } });
    let c2 = this._incoming[a2.eventType];
    return c2 || (c2 = [], this._incoming[a2.eventType] = c2), c2.push(g3), h(), this._manager && this._manager.updateDependencies(), g3;
  }
  registerOutgoing(e2) {
    if (this._outgoing[e2]) throw new Error("There is already a callback registered for this outgoing InputEvent: " + e2);
    const t3 = new i(e2, { onEmit: (e3, t4, n3, i3) => {
      var _a;
      (_a = this._manager) == null ? void 0 : _a.emit(e3.eventType, t4, n3, i3);
    }, onRemove: (e3) => {
      var _a;
      delete this._outgoing[e3.eventType], (_a = this._manager) == null ? void 0 : _a.updateDependencies();
    } });
    return this._outgoing[e2] = t3, this._outgoingEventTypes = null, this._manager && this._manager.updateDependencies(), t3;
  }
  startCapturingPointer(e2) {
    var _a;
    (_a = this._manager) == null ? void 0 : _a.setPointerCapture(e2, true);
  }
  stopCapturingPointer(e2) {
    var _a;
    (_a = this._manager) == null ? void 0 : _a.setPointerCapture(e2, false);
  }
  refreshHasPendingInputs() {
    var _a;
    (_a = this._manager) == null ? void 0 : _a.refreshHasPendingInputs();
  }
  _onUninstall() {
    this._manager && (this.onUninstall(), this._manager = null);
  }
  _handleEvent(e2) {
    var _a;
    const t3 = this._incoming[e2.type];
    if (t3) {
      for (const n3 of t3) if (n3.match.matches(e2) && ((_a = n3.callback) == null ? void 0 : _a.call(n3, e2), e2.shouldStopPropagation())) break;
    }
  }
};
var n2 = class {
  constructor(e2, t3, n3) {
    this.match = e2, this._callback = t3, this._handler = n3;
  }
  pause() {
    this._handler.onPause(this);
  }
  resume() {
    this._handler.onResume(this);
  }
  remove() {
    this._handler.onRemove(this);
  }
  get callback() {
    return this._callback;
  }
};
var i = class {
  constructor(e2, t3) {
    this.eventType = e2, this._removed = false, this._handler = t3;
  }
  emit(e2, t3, n3) {
    this._removed || this._handler.onEmit(this, e2, t3, n3);
  }
  remove() {
    this._removed = true, this._handler.onRemove(this);
  }
};

// node_modules/@arcgis/core/views/input/handlers/LatestPointer.js
var s2 = class extends t2 {
  constructor(t3) {
    super(true), this._onChange = t3, this._value = "mouse", this._x = null, this._y = null, this.registerIncoming("pointer-move", (t4) => this._update(t4.data));
  }
  _update(t3) {
    const s3 = "touch" === t3.native.pointerType ? "touch" : "mouse", { x: e2, y: i3 } = t3;
    s3 === this._value && this._x === e2 && this._y === i3 || (this._value = s3, this._x = e2, this._y = i3, this._onChange(s3, e2, i3));
  }
};

// node_modules/@arcgis/core/views/input/handlers/MultiTouch.js
var i2 = class extends t2 {
  get multiTouchActive() {
    return this._multiTouchActive.value;
  }
  constructor() {
    super(true), this._activeTouchPointerIds = /* @__PURE__ */ new Set(), this._multiTouchActive = r2(false), this._onPointerAdd = ({ data: t3 }) => {
      "touch" === t3.pointerType && (this._activeTouchPointerIds.add(t3.native.pointerId), this._update());
    }, this._onPointerRemove = ({ data: t3 }) => {
      "touch" === t3.pointerType && (this._activeTouchPointerIds.delete(t3.native.pointerId), this._update());
    }, this.registerIncoming("pointer-down", this._onPointerAdd), this.registerIncoming("pointer-up", this._onPointerRemove), this.registerIncoming("pointer-capture-lost", this._onPointerRemove), this.registerIncoming("pointer-cancel", this._onPointerRemove);
  }
  _update() {
    this._multiTouchActive.value = this._activeTouchPointerIds.size > 1;
  }
};

// node_modules/@arcgis/core/views/input/InputManager.js
var d = class extends g {
  constructor(e2) {
    super(e2), this._pointerCaptures = /* @__PURE__ */ new Map(), this._nameToGroup = {}, this._handlers = [], this._handlersPriority = [], this._currentPropagation = null, this._updateDependenciesAfterPropagation = false, this._sourceEvents = /* @__PURE__ */ new Set(), this._keyModifiers = /* @__PURE__ */ new Set(), this._activeKeyModifiers = /* @__PURE__ */ new Set(), this._stoppedPropagationEventIds = /* @__PURE__ */ new Set(), this.primaryKey = t, this._latestPointerType = "mouse", this._propertiesPool = new o({ latestPointerLocation: P }, this), this.latestPointerLocation = null, this._paused = false, this.test = { timestamp: void 0, hasCurrentPropagation: () => !!this._currentPropagation };
  }
  initialize() {
    this.eventSource.onEventReceived = this._onEventReceived.bind(this), this._installRecognizers();
  }
  destroy() {
    const e2 = Object.keys(this._nameToGroup);
    for (const t3 of e2) this.uninstallHandlers(t3);
    this.eventSource.destroy(), this._currentPropagation = null, this._propertiesPool.destroy();
  }
  get hasPendingInputs() {
    return this._handlers.some((e2) => e2.handler.hasPendingInputs);
  }
  get latestPointerType() {
    return this._latestPointerType;
  }
  get multiTouchActive() {
    return this._multiTouchHandler.multiTouchActive;
  }
  get updating() {
    return this.hasPendingInputs || this._paused;
  }
  installHandlers(e2, t3, i3 = _.INTERNAL) {
    if (this._nameToGroup[e2]) return;
    if (0 === t3.length) return;
    const r4 = { name: e2, handlers: t3.map((e3) => ({ handler: e3, active: true, removed: false, priorityIndex: 0, groupPriority: i3, eventCallback: null, uninstallCallback: null })) };
    this._nameToGroup[e2] = r4;
    for (let n3 = r4.handlers.length - 1; n3 >= 0; n3--) {
      const e3 = r4.handlers[n3];
      this._handlers.push(e3), e3.handler.onInstall({ updateDependencies: () => {
        this.updateDependencies();
      }, emit: (t4, i4, r5, n4, s3) => {
        this._emitInputEvent(e3.priorityIndex + 1, t4, i4, r5, s3, n4);
      }, setPointerCapture: (t4, i4) => {
        this._setPointerCapture(r4, e3, t4, i4);
      }, setEventCallback: (t4) => {
        e3.eventCallback = t4;
      }, setUninstallCallback: (t4) => {
        e3.uninstallCallback = t4;
      }, refreshHasPendingInputs: () => {
        this.notifyChange("hasPendingInputs");
      } });
    }
    this.updateDependencies();
  }
  uninstallHandlers(e2) {
    const t3 = this._nameToGroup[e2];
    t3 ? (t3.handlers.forEach((e3) => {
      var _a;
      e3.removed = true, (_a = e3.uninstallCallback) == null ? void 0 : _a.call(e3);
    }), delete this._nameToGroup[e2], this._currentPropagation ? this._currentPropagation.needsHandlerGarbageCollect = true : this._garbageCollectRemovedHandlers()) : n.getLogger(this).error("There is no InputHandler group registered under the name `" + e2 + "`");
  }
  hasHandlers(e2) {
    return void 0 !== this._nameToGroup[e2];
  }
  isModifierKeyDown(e2) {
    return this._activeKeyModifiers.has(e2);
  }
  updateDependencies() {
    if (this._currentPropagation) return void (this._updateDependenciesAfterPropagation = true);
    this._updateDependenciesAfterPropagation = false;
    const e2 = /* @__PURE__ */ new Set(), t3 = /* @__PURE__ */ new Set();
    this._handlersPriority = [];
    for (let i3 = this._handlers.length - 1; i3 >= 0; i3--) {
      const e3 = this._handlers[i3];
      e3.priorityIndex = i3, this._handlersPriority.push(e3);
    }
    this._handlersPriority = this._sortHandlersPriority(this._handlersPriority);
    for (let i3 = this._handlersPriority.length - 1; i3 >= 0; i3--) {
      const r4 = this._handlersPriority[i3];
      r4.priorityIndex = i3;
      let n3 = r4.handler.hasSideEffects;
      if (!n3) {
        for (const t4 of r4.handler.outgoingEventTypes) if (e2.has(t4)) {
          n3 = true;
          break;
        }
      }
      if (n3) for (const i4 of r4.handler.incomingEventMatches) {
        e2.add(i4.eventType);
        for (const e3 of i4.keyModifiers) r3(e3) || t3.add(e3);
      }
      r4.active = n3;
    }
    this._sourceEvents = e2, this._keyModifiers = t3, this._pointerCaptures.size > 0 && this._sourceEvents.add("pointer-capture-lost"), this._keyModifiers.size > 0 && (this._sourceEvents.add("key-down"), this._sourceEvents.add("key-up")), this.eventSource && (this.eventSource.activeEvents = this._sourceEvents);
  }
  _setLatestPointer(e2, t3, i3) {
    this._latestPointerType = e2;
    const r4 = this._get("latestPointerLocation");
    if (null == r4 || r4.x !== t3 || r4.y !== i3) {
      const e3 = this._propertiesPool.get("latestPointerLocation");
      e3.x = t3, e3.y = i3, this._set("latestPointerLocation", e3);
    }
  }
  _onEventReceived(e2, t3) {
    if ("pointer-capture-lost" === e2) {
      const e3 = t3;
      this._pointerCaptures.delete(e3.native.pointerId);
    }
    this._updateKeyModifiers(e2, t3);
    const i3 = null != this.test.timestamp ? this.test.timestamp : t3.native ? t3.native.timestamp : void 0, r4 = t3.native ? t3.native.cancelable : void 0;
    this._emitInputEventFromSource(e2, t3, i3, r4);
  }
  _updateKeyModifiers(e2, t3) {
    if (!t3) return;
    let i3 = false;
    const r4 = () => {
      i3 || (this._activeKeyModifiers = new Set(this._activeKeyModifiers), i3 = true);
    }, n3 = (e3, t4) => {
      t4 && !this._activeKeyModifiers.has(e3) ? (r4(), this._activeKeyModifiers.add(e3)) : !t4 && this._activeKeyModifiers.has(e3) && (r4(), this._activeKeyModifiers.delete(e3));
    };
    if ("key-down" === e2 || "key-up" === e2) {
      const i4 = t3.key;
      this._keyModifiers.has(i4) && n3(i4, "key-down" === e2);
    }
    const s3 = t3.native;
    n3("Alt", !!(s3 == null ? void 0 : s3.altKey)), n3("Control", !!(s3 == null ? void 0 : s3.ctrlKey)), n3("Ctrl", !!(s3 == null ? void 0 : s3.ctrlKey)), n3("Shift", !!(s3 == null ? void 0 : s3.shiftKey)), n3("Meta", !!(s3 == null ? void 0 : s3.metaKey)), n3("Primary", this._activeKeyModifiers.has(this.primaryKey));
  }
  _installRecognizers() {
    this._latestPointerHandler = new s2((e2, t3, i3) => this._setLatestPointer(e2, t3, i3)), this._multiTouchHandler = new i2(), this.installHandlers("input-manager-logic", [this._latestPointerHandler, this._multiTouchHandler], _.ALWAYS), this.recognizers.length > 0 && this.installHandlers("default", this.recognizers, _.INTERNAL);
  }
  _setPointerCapture(e2, t3, i3, r4) {
    const n3 = e2.name + "-" + t3.priorityIndex, s3 = this._pointerCaptures.get(i3.pointerId) || /* @__PURE__ */ new Set();
    this._pointerCaptures.set(i3.pointerId, s3), r4 ? (s3.add(n3), 1 === s3.size && this.eventSource && this.eventSource.setPointerCapture(i3, true)) : s3.has(n3) && (s3.delete(n3), 0 === s3.size && (this._pointerCaptures.delete(i3.pointerId), this.eventSource && this.eventSource.setPointerCapture(i3, false)));
  }
  _garbageCollectRemovedHandlers() {
    this._handlers = this._handlers.filter((e2) => !e2.removed), this.updateDependencies();
  }
  _emitInputEventFromSource(e2, t3, i3, r4) {
    this._emitInputEvent(0, e2, t3, i3, r4);
  }
  _emitInputEvent(e2, t3, i3, r4, n3, s3) {
    const o3 = void 0 !== r4 ? r4 : this._currentPropagation ? this._currentPropagation.timestamp : performance.now(), a2 = void 0 !== n3 && n3, l = { event: new u(t3, i3, o3, s3 || this._activeKeyModifiers, a2), priorityIndex: e2 };
    this._currentPropagation ? this._currentPropagation.events.push(l) : this._doNewPropagation(l);
  }
  _doNewPropagation(e2) {
    this._currentPropagation = { events: new s(), currentHandler: null, needsHandlerGarbageCollect: false, timestamp: e2.event.timestamp }, this._currentPropagation.events.push(e2), this._continuePropagation();
  }
  _continuePropagation() {
    var _a, _b, _c;
    this._paused = false;
    const e2 = this._currentPropagation;
    if (e2) {
      for (; e2.events.length > 0; ) {
        const { event: t3, priorityIndex: i3 } = e2.events.pop(), r4 = (_a = t3.data) == null ? void 0 : _a.eventId;
        if (!(null != r4 && this._stoppedPropagationEventIds.has(r4))) for (e2.currentHandler = this._handlersPriority[i3]; e2.currentHandler; ) {
          if (e2.currentHandler.removed) e2.needsHandlerGarbageCollect = true;
          else {
            if (e2.currentHandler.active && !t3.shouldStopPropagation() && ((_c = (_b = e2.currentHandler).eventCallback) == null ? void 0 : _c.call(_b, t3)), t3.shouldStopPropagation()) {
              null != r4 && this._stoppedPropagationEventIds.add(r4);
              break;
            }
            if (t3.shouldPausePropagation(() => this._continuePropagation())) return void this._pausePropagation({ event: t3, priorityIndex: e2.currentHandler.priorityIndex + 1 });
          }
          e2.currentHandler = this._handlersPriority[e2.currentHandler.priorityIndex + 1];
        }
      }
      e2.needsHandlerGarbageCollect && this._garbageCollectRemovedHandlers(), this.hasPendingInputs || this._stoppedPropagationEventIds.clear(), this._currentPropagation = null, this._updateDependenciesAfterPropagation && this.updateDependencies();
    }
  }
  _pausePropagation(e2) {
    const t3 = new s();
    t3.push(e2);
    const i3 = this._currentPropagation;
    if (i3) {
      for (; i3.events.length; ) t3.push(i3.events.pop());
      i3.events = t3, i3.currentHandler = null, this._paused = true;
    }
  }
  _compareHandlerPriority(e2, t3) {
    if (e2.handler.hasSideEffects !== t3.handler.hasSideEffects) return e2.handler.hasSideEffects ? 1 : -1;
    if (e2.groupPriority !== t3.groupPriority) return e2.groupPriority > t3.groupPriority ? -1 : 1;
    for (const i3 of e2.handler.incomingEventMatches) for (const e3 of t3.handler.incomingEventMatches) {
      if (i3.eventType !== e3.eventType) continue;
      const t4 = i3.keyModifiers.filter((t5) => e3.keyModifiers.includes(t5));
      if (t4.length === i3.keyModifiers.length !== (t4.length === e3.keyModifiers.length)) return i3.keyModifiers.length > e3.keyModifiers.length ? -1 : 1;
    }
    return e2.priorityIndex > t3.priorityIndex ? -1 : 1;
  }
  _sortHandlersPriority(e2) {
    const t3 = [];
    for (const i3 of e2) {
      let e3 = 0;
      for (; e3 < t3.length && this._compareHandlerPriority(i3, t3[e3]) >= 0; ) e3++;
      t3.splice(e3, 0, i3);
    }
    return t3;
  }
  get debug() {
    const e2 = (e3) => {
      const t3 = this._setPointerCapture;
      this._setPointerCapture = () => {
      }, e3(), this._setPointerCapture = t3;
    };
    return { injectEvent: (t3, i3) => {
      e2(() => this._onEventReceived(t3, i3));
    }, disablePointerCapture: e2 };
  }
};
r([m({ readOnly: true })], d.prototype, "hasPendingInputs", null), r([m({ constructOnly: true })], d.prototype, "eventSource", void 0), r([m({ constructOnly: true })], d.prototype, "recognizers", void 0), r([m()], d.prototype, "_latestPointerType", void 0), r([m()], d.prototype, "latestPointerType", null), r([m()], d.prototype, "multiTouchActive", null), r([m({ readOnly: true })], d.prototype, "latestPointerLocation", void 0), r([m()], d.prototype, "_paused", void 0), r([m({ readOnly: true })], d.prototype, "updating", null), d = r([a("esri.views.input.InputManager")], d);
var u = class {
  constructor(e2, t3, i3, r4, n3) {
    this.type = e2, this.data = t3, this.timestamp = i3, this.modifiers = r4, this.cancelable = n3, this._propagationState = c.NONE, this._resumeCallback = null;
  }
  stopPropagation() {
    this._propagationState |= c.STOPPED;
  }
  shouldStopPropagation() {
    return !!(this._propagationState & c.STOPPED);
  }
  async(e2) {
    this._propagationState |= c.PAUSED;
    const t3 = (e3, t4) => {
      this._propagationState &= ~c.PAUSED;
      const i3 = this._resumeCallback;
      if (this._resumeCallback = null, i3 && i3(), t4) throw e3;
      return e3;
    };
    return ("function" == typeof e2 ? e2() : e2).then((e3) => t3(e3, false), (e3) => t3(e3, true));
  }
  shouldPausePropagation(e2) {
    return !!(this._propagationState & c.PAUSED) && (this._resumeCallback = e2, true);
  }
  preventDefault() {
    this.data.native.preventDefault();
  }
};
var c;
!function(e2) {
  e2[e2.NONE = 0] = "NONE", e2[e2.STOPPED = 1] = "STOPPED", e2[e2.PAUSED = 2] = "PAUSED";
}(c || (c = {}));
var _ = { ALWAYS: 1, DEFAULT: 0, TOOL: -1, WIDGET: -2, INTERNAL: -3 };
var g2 = class {
};
var P = g2;

export {
  t,
  t2,
  d,
  _
};
//# sourceMappingURL=chunk-3WMBBCKF.js.map
