import {
  p,
  r
} from "./chunk-A42OBC4U.js";
import {
  L,
  e
} from "./chunk-M6FNW7GP.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/intl/messages.js
var o = /^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/;
var i = { ar: true, bg: true, bs: true, ca: true, cs: true, da: true, de: true, el: true, en: true, es: true, et: true, fi: true, fr: true, he: true, hr: true, hu: true, id: true, it: true, ja: true, ko: true, lt: true, lv: true, nb: "no", nl: true, no: true, pl: true, pt: "pt-BR", "pt-BR": true, "pt-PT": true, ro: true, ru: true, sk: true, sl: true, sr: true, sv: true, th: true, tr: true, uk: true, vi: true, zh: "zh-CN", "zh-CN": true, "zh-HK": true, "zh-TW": true };
function a(t) {
  return t in i;
}
function c(t) {
  if (a(t)) {
    const n = i[t];
    return true === n ? t : n;
  }
  return null;
}
var d = [];
var l = /* @__PURE__ */ new Map();
function u(t) {
  for (const n of l.keys()) _(t.pattern, n) && l.delete(n);
}
function h(t) {
  return d.includes(t) || (u(t), d.unshift(t)), e(() => {
    const n = d.indexOf(t);
    n > -1 && (d.splice(n, 1), u(t));
  });
}
async function f(t) {
  const n = r();
  l.has(t) || l.set(t, m(t, n));
  const e2 = l.get(t);
  return e2 && await g.add(e2), e2;
}
function p2(t) {
  if (!o.test(t)) return null;
  const n = o.exec(t);
  if (null === n) return null;
  const [, e2, r2] = n;
  return c(e2 + (r2 ? "-" + r2.toUpperCase() : "")) ?? c(e2);
}
async function m(n, e2) {
  const r2 = [];
  for (const t of d) if (_(t.pattern, n)) try {
    return await t.fetchMessageBundle(n, e2);
  } catch (s2) {
    r2.push(s2);
  }
  if (r2.length) throw new s("intl:message-bundle-error", `Errors occurred while loading "${n}"`, { errors: r2 });
  throw new s("intl:no-message-bundle-loader", `No loader found for message bundle "${n}"`);
}
function _(t, n) {
  return "string" == typeof t ? n.startsWith(t) : t.test(n);
}
p(() => {
  l.clear();
});
var g = new class {
  constructor() {
    this._numLoading = 0, this._dfd = null;
  }
  async waitForAll() {
    this._dfd && await this._dfd.promise;
  }
  add(t) {
    return this._increase(), t.then(() => this._decrease(), () => this._decrease()), this.waitForAll();
  }
  _increase() {
    this._numLoading++, this._dfd || (this._dfd = L());
  }
  _decrease() {
    this._numLoading = Math.max(this._numLoading - 1, 0), this._dfd && 0 === this._numLoading && (this._dfd.resolve(), this._dfd = null);
  }
}();

export {
  h,
  f,
  p2 as p
};
//# sourceMappingURL=chunk-NALU24NB.js.map
