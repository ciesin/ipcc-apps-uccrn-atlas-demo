import {
  g
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  L,
  b,
  u3 as u
} from "./chunk-M6FNW7GP.js";

// node_modules/@arcgis/core/core/Promise.js
var l;
!function(s) {
  s[s.PENDING = 0] = "PENDING", s[s.RESOLVED = 1] = "RESOLVED", s[s.REJECTED = 2] = "REJECTED";
}(l || (l = {}));
var h = class {
  constructor() {
    this._resolver = L(), this._status = l.PENDING, this._resolvingPromises = [], this._resolver.promise.then(() => {
      this._status = l.RESOLVED, this._cleanUp();
    }, () => {
      this._status = l.REJECTED, this._cleanUp();
    }), this.promise = this._resolver.promise;
  }
  destroy() {
    this._cleanUp();
  }
  addResolvingPromise(s) {
    this._resolvingPromises.push(s), this._tryResolve();
  }
  isResolved() {
    return this._status === l.RESOLVED;
  }
  isRejected() {
    return this._status === l.REJECTED;
  }
  isFulfilled() {
    return this._status !== l.PENDING;
  }
  abort() {
    this._resolver.reject(u());
  }
  _cleanUp() {
    this._allPromise = null, this._resolvingPromises = null;
  }
  _tryResolve() {
    if (this.isFulfilled()) return;
    const s = L(), e = [...this._resolvingPromises, s.promise], r2 = this._allPromise = Promise.all(e);
    r2.then(() => {
      this.isFulfilled() || this._allPromise !== r2 || this._resolver.resolve();
    }, (s2) => {
      this.isFulfilled() || this._allPromise !== r2 || b(s2) || this._resolver.reject(s2);
    }), s.resolve();
  }
};
var n = (e) => {
  let i = class extends e {
    constructor(...s) {
      super(...s), this._promiseProps = new h(), this.addResolvingPromise(Promise.resolve());
    }
    destroy() {
      this._promiseProps.destroy();
    }
    isResolved() {
      return this._promiseProps.isResolved();
    }
    isRejected() {
      return this._promiseProps.isRejected();
    }
    isFulfilled() {
      return this._promiseProps.isFulfilled();
    }
    when(s, e2) {
      return this._promiseProps.promise.then(() => this).then(s, e2);
    }
    catch(s) {
      return this.when(null, s);
    }
    addResolvingPromise(s) {
      s && !this._promiseProps.isFulfilled() && this._promiseProps.addResolvingPromise("_promiseProps" in s ? s.when() : s);
    }
  };
  return i = r([a("esri.core.Promise")], i), i;
};
var m = class extends n(g) {
};
m = r([a("esri.core.Promise")], m), function(s) {
  s.EsriPromiseMixin = n;
}(m || (m = {}));
var p = m;

export {
  p
};
//# sourceMappingURL=chunk-7LY6RE4Z.js.map
