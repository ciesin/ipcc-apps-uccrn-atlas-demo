// node_modules/@arcgis/core/chunks/tslib.es6.js
function r(r2, e2, o2, n2) {
  var t2, s2 = arguments.length, i = s2 < 3 ? e2 : null === n2 ? n2 = Object.getOwnPropertyDescriptor(e2, o2) : n2;
  if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(r2, e2, o2, n2);
  else for (var c = r2.length - 1; c >= 0; c--) (t2 = r2[c]) && (i = (s2 < 3 ? t2(i) : s2 > 3 ? t2(e2, o2, i) : t2(e2, o2)) || i);
  return s2 > 3 && i && Object.defineProperty(e2, o2, i), i;
}
function e(r2, e2) {
  return function(o2, n2) {
    e2(o2, n2, r2);
  };
}
function o(r2, e2, o2, n2) {
  function t2(r3) {
    return r3 instanceof o2 ? r3 : new o2(function(e3) {
      e3(r3);
    });
  }
  return new (o2 || (o2 = Promise))(function(o3, s2) {
    function i(r3) {
      try {
        f(n2.next(r3));
      } catch (e3) {
        s2(e3);
      }
    }
    function c(r3) {
      try {
        f(n2.throw(r3));
      } catch (e3) {
        s2(e3);
      }
    }
    function f(r3) {
      r3.done ? o3(r3.value) : t2(r3.value).then(i, c);
    }
    f((n2 = n2.apply(r2, e2 || [])).next());
  });
}
function n(r2, e2, o2) {
  if (null != e2) {
    if ("object" != typeof e2 && "function" != typeof e2) throw new TypeError("Object expected.");
    var n2, t2;
    if (o2) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      n2 = e2[Symbol.asyncDispose];
    }
    if (void 0 === n2) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      n2 = e2[Symbol.dispose], o2 && (t2 = n2);
    }
    if ("function" != typeof n2) throw new TypeError("Object not disposable.");
    t2 && (n2 = function() {
      try {
        t2.call(this);
      } catch (r3) {
        return Promise.reject(r3);
      }
    }), r2.stack.push({ value: e2, dispose: n2, async: o2 });
  } else o2 && r2.stack.push({ async: true });
  return e2;
}
var t = "function" == typeof SuppressedError ? SuppressedError : function(r2, e2, o2) {
  var n2 = new Error(o2);
  return n2.name = "SuppressedError", n2.error = r2, n2.suppressed = e2, n2;
};
function s(r2) {
  function e2(e3) {
    r2.error = r2.hasError ? new t(e3, r2.error, "An error was suppressed during disposal.") : e3, r2.hasError = true;
  }
  var o2, n2 = 0;
  function s2() {
    for (; o2 = r2.stack.pop(); ) try {
      if (!o2.async && 1 === n2) return n2 = 0, r2.stack.push(o2), Promise.resolve().then(s2);
      if (o2.dispose) {
        var t2 = o2.dispose.call(o2.value);
        if (o2.async) return n2 |= 2, Promise.resolve(t2).then(s2, function(r3) {
          return e2(r3), s2();
        });
      } else n2 |= 1;
    } catch (i) {
      e2(i);
    }
    if (1 === n2) return r2.hasError ? Promise.reject(r2.error) : Promise.resolve();
    if (r2.hasError) throw r2.error;
  }
  return s2();
}

export {
  r,
  e,
  o,
  n,
  s
};
//# sourceMappingURL=chunk-PPIAYGRE.js.map
