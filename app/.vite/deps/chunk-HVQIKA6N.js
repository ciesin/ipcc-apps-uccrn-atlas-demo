import {
  s as s2
} from "./chunk-UQ4WWETM.js";
import {
  r
} from "./chunk-HLOKDQU3.js";
import {
  s
} from "./chunk-SUVHJC6Z.js";
import {
  A
} from "./chunk-WCGYJMU3.js";
import {
  L,
  S,
  l2 as l,
  m,
  u3 as u,
  w
} from "./chunk-M6FNW7GP.js";

// node_modules/@arcgis/core/core/QueueProcessor.js
var u2 = class {
  constructor(e, s3) {
    this.item = e, this.controller = s3, this.promise = null;
  }
};
var _ = class {
  constructor(e) {
    this._schedule = null, this._deferreds = new s2(), this._controllers = new s2(), this._processingItems = new s2(), this._pausedSignal = r(false), this.concurrency = 1, e.concurrency && (this.concurrency = e.concurrency), this._queue = new s(e.peeker), this.process = e.process;
  }
  destroy() {
    this.clear(), this._schedule = l(this._schedule);
  }
  get updating() {
    return this.running;
  }
  get length() {
    return this._processingItems.size + this._queue.length;
  }
  get running() {
    return !this._pausedSignal.value && this._queue.length > 0 && this._processingItems.size < this.concurrency;
  }
  abort(e) {
    const s3 = this._controllers.get(e);
    s3 && s3.abort();
  }
  clear() {
    this._queue.clear();
    const e = [];
    this._controllers.forEach((s3) => e.push(s3)), this._controllers.clear(), e.forEach((e2) => e2.abort()), this._processingItems.clear(), this._cancelNext();
  }
  forEach(e) {
    this._deferreds.forEach((s3, t) => e(t));
  }
  get(e) {
    const s3 = this._deferreds.get(e);
    return s3 ? s3.promise : void 0;
  }
  isOngoing(e) {
    return this._processingItems.has(e);
  }
  has(e) {
    return this._deferreds.has(e);
  }
  pause() {
    this._pausedSignal.value || (this._pausedSignal.value = true, this._cancelNext());
  }
  push(e, h) {
    const o = this.get(e);
    if (o) return o;
    const n = new AbortController();
    let c = null;
    h && (c = m(h, () => n.abort()));
    const l2 = () => {
      const s3 = this._processingItems.get(e);
      s3 && s3.controller.abort(), u3(), a.reject(u());
    }, u3 = () => {
      _2.remove(), null != c && c.remove(), this._removeItem(e), this._queue.remove(e), this._scheduleNext();
    }, _2 = w(n.signal, l2), a = L();
    return this._deferreds.set(e, a), this._controllers.set(e, n), a.promise.then(u3, u3), this._queue.push(e), this._scheduleNext(), a.promise;
  }
  last() {
    return this._queue.last();
  }
  lastPromise() {
    const e = this.last();
    return e ? this.get(e) : null;
  }
  peek() {
    return this._queue.peek();
  }
  popLast() {
    var _a;
    const e = this._queue.popLast();
    return e && ((_a = this._deferreds.get(e)) == null ? void 0 : _a.reject(u()), this._removeItem(e)), e;
  }
  reset() {
    const e = Array.from(this._processingItems.values());
    this._processingItems.clear();
    for (const s3 of e) this._queue.push(s3.item), s3.controller.abort();
    this._scheduleNext();
  }
  resume() {
    this._pausedSignal.value && (this._pausedSignal.value = false, this._scheduleNext());
  }
  takeAll() {
    const e = [];
    for (; this._queue.length; ) e.push(this._queue.pop());
    return this.clear(), e;
  }
  _removeItem(e) {
    this._deferreds.delete(e), this._controllers.delete(e), this._processingItems.delete(e);
  }
  _scheduleNext() {
    this._pausedSignal.value || this._schedule || (this._schedule = A(() => {
      this._schedule = null, this._next();
    }));
  }
  _next() {
    for (; this._queue.length > 0 && this._processingItems.size < this.concurrency; ) this._process(this._queue.pop());
  }
  _cancelNext() {
    this._schedule && (this._schedule.remove(), this._schedule = null);
  }
  _processResult(e, s3) {
    this._canProcessFulfillment(e) && (this._scheduleNext(), this._deferreds.get(e.item).resolve(s3));
  }
  _processError(e, s3) {
    this._canProcessFulfillment(e) && (this._scheduleNext(), this._deferreds.get(e.item).reject(s3));
  }
  _canProcessFulfillment(e) {
    return !!this._deferreds.get(e.item) && this._processingItems.get(e.item) === e;
  }
  _process(e) {
    if (null == e) return;
    let s3;
    const t = new AbortController(), r2 = new u2(e, t);
    this._processingItems.set(e, r2);
    try {
      s3 = this.process(e, t.signal);
    } catch (i) {
      this._processError(r2, i);
    }
    S(s3) ? (r2.promise = s3, s3.then((e2) => this._processResult(r2, e2), (e2) => this._processError(r2, e2))) : this._processResult(r2, s3);
  }
};

export {
  _
};
//# sourceMappingURL=chunk-HVQIKA6N.js.map
