import {
  r
} from "./chunk-A42OBC4U.js";
import {
  o
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/core/number.js
var n = { ar: [".", ","], bg: [",", " "], bs: [",", "."], ca: [",", "."], cs: [",", " "], da: [",", "."], de: [",", "."], "de-ch": [".", "’"], el: [",", "."], en: [".", ","], "en-au": [".", ","], es: [",", "."], "es-mx": [".", ","], et: [",", " "], fi: [",", " "], fr: [",", " "], "fr-ch": [",", " "], he: [".", ","], hi: [".", ",", "#,##,##0.###"], hr: [",", "."], hu: [",", " "], id: [",", "."], it: [",", "."], "it-ch": [".", "’"], ja: [".", ","], ko: [".", ","], lt: [",", " "], lv: [",", " "], mk: [",", "."], nb: [",", " "], nl: [",", "."], no: [",", " "], pl: [",", " "], pt: [",", "."], "pt-pt": [",", " "], ro: [",", "."], ru: [",", " "], sk: [",", " "], sl: [",", "."], sr: [",", "."], sv: [",", " "], th: [".", ","], tr: [",", "."], uk: [",", " "], vi: [",", "."], zh: [".", ","] };
function r2(e = r()) {
  let r3 = (e = e.toLowerCase()) in n;
  if (!r3) {
    const t = e.split("-");
    t.length > 1 && t[0] in n && (e = t[0], r3 = true), r3 || (e = "en");
  }
  const [l2, s2, o3 = "#,##0.###"] = n[e];
  return { decimal: l2, group: s2, pattern: o3 };
}
function l(e, t) {
  const n2 = r2((t = { ...t }).locale);
  t.customs = n2;
  const l2 = t.pattern || n2.pattern;
  return isNaN(e) || Math.abs(e) === 1 / 0 ? null : o2(e, l2, t);
}
var s = /[#0,]*[#0](?:\.0*#*)?/;
function o2(e, t, n2) {
  const r3 = (n2 = n2 || {}).customs.group, l2 = n2.customs.decimal, o3 = t.split(";"), a = o3[0];
  if ((t = o3[e < 0 ? 1 : 0] || "-" + a).includes("%")) e *= 100;
  else if (t.includes("‰")) e *= 1e3;
  else {
    if (t.includes("¤")) throw new Error("currency notation not supported");
    if (t.includes("E")) throw new Error("exponential notation not supported");
  }
  const c2 = s, p2 = a.match(c2);
  if (!p2) throw new Error("unable to find a number expression in pattern: " + t);
  return false === n2.fractional && (n2.places = 0), t.replace(c2, i(e, p2[0], { decimal: l2, group: r3, places: n2.places, round: n2.round }));
}
function i(e, t, n2) {
  true === (n2 = n2 || {}).places && (n2.places = 0), n2.places === 1 / 0 && (n2.places = 6);
  const r3 = t.split("."), l2 = "string" == typeof n2.places && n2.places.indexOf(",");
  let s2 = n2.places;
  l2 ? s2 = n2.places.slice(l2 + 1) : +s2 >= 0 || (s2 = (r3[1] || []).length), n2.round < 0 || (e = Number(e.toFixed(Number(s2))));
  const o3 = String(Math.abs(e)).split("."), i2 = o3[1] || "";
  if (r3[1] || n2.places) {
    l2 && (n2.places = n2.places.slice(0, Math.max(0, l2)));
    const e2 = void 0 !== n2.places ? n2.places : r3[1] && r3[1].lastIndexOf("0") + 1;
    +e2 > i2.length && (o3[1] = i2.padEnd(Number(e2), "0")), +s2 < i2.length && (o3[1] = i2.slice(0, Math.max(0, Number(s2))));
  } else o3[1] && o3.pop();
  const a = r3[0].replace(",", "");
  let c2 = a.indexOf("0");
  -1 !== c2 && (c2 = a.length - c2, c2 > o3[0].length && (o3[0] = o3[0].padStart(c2, "0")), a.includes("#") || (o3[0] = o3[0].slice(-c2)));
  let p2, u2, d2 = r3[0].lastIndexOf(",");
  if (-1 !== d2) {
    p2 = r3[0].length - d2 - 1;
    const e2 = r3[0].slice(0, d2);
    d2 = e2.lastIndexOf(","), -1 !== d2 && (u2 = e2.length - d2 - 1);
  }
  const f2 = [];
  for (let g2 = o3[0]; g2; ) {
    const e2 = g2.length - p2;
    f2.push(e2 > 0 ? g2.slice(Math.max(0, e2)) : g2), g2 = e2 > 0 ? g2.slice(0, e2) : "", u2 && (p2 = u2, u2 = void 0);
  }
  return o3[0] = f2.reverse().join(n2.group || ","), o3.join(n2.decimal || ".");
}
function c(t) {
  const n2 = r2((t = t || {}).locale), l2 = t.pattern || n2.pattern, o3 = n2.group, i2 = n2.decimal;
  let a = 1;
  if (l2.includes("%")) a /= 100;
  else if (l2.includes("‰")) a /= 1e3;
  else if (l2.includes("¤")) throw new Error("currency notation not supported");
  const c2 = l2.split(";");
  1 === c2.length && c2.push("-" + c2[0]);
  const p2 = f(c2, (n3) => (n3 = "(?:" + o(n3, ".") + ")").replace(s, (e) => {
    const n4 = { signed: false, separator: t.strict ? o3 : [o3, ""], fractional: t.fractional, decimal: i2, exponent: false }, r3 = e.split(".");
    let l3 = t.places;
    1 === r3.length && 1 !== a && (r3[1] = "###"), 1 === r3.length || 0 === l3 ? n4.fractional = false : (void 0 === l3 && (l3 = t.pattern ? r3[1].lastIndexOf("0") + 1 : 1 / 0), l3 && null == t.fractional && (n4.fractional = true), !t.places && +l3 < r3[1].length && (l3 += "," + r3[1].length), n4.places = l3);
    const s2 = r3[0].split(",");
    return s2.length > 1 && (n4.groupSize = s2.pop().length, s2.length > 1 && (n4.groupSize2 = s2.pop().length)), "(" + u(n4) + ")";
  }), true);
  return { regexp: p2.replaceAll(/[\xa0 ]/g, "[\\s\\xa0]"), group: o3, decimal: i2, factor: a };
}
function p(e, t) {
  const n2 = c(t), r3 = new RegExp("^" + n2.regexp + "$").exec(e);
  if (!r3) return NaN;
  let l2 = r3[1];
  if (!r3[1]) {
    if (!r3[2]) return NaN;
    l2 = r3[2], n2.factor *= -1;
  }
  return l2 = l2.replaceAll(new RegExp("[" + n2.group + "\\s\\xa0]", "g"), "").replace(n2.decimal, "."), Number(l2) * n2.factor;
}
function u(e) {
  "places" in (e = e || {}) || (e.places = 1 / 0), "string" != typeof e.decimal && (e.decimal = "."), "fractional" in e && !String(e.places).startsWith("0") || (e.fractional = [true, false]), "exponent" in e || (e.exponent = [true, false]), "eSigned" in e || (e.eSigned = [true, false]);
  const t = d(e), n2 = f(e.fractional, (t2) => {
    let n3 = "";
    return t2 && 0 !== e.places && (n3 = "\\" + e.decimal, e.places === 1 / 0 ? n3 = "(?:" + n3 + "\\d+)?" : n3 += "\\d{" + e.places + "}"), n3;
  }, true);
  let r3 = t + n2;
  return n2 && (r3 = "(?:(?:" + r3 + ")|(?:" + n2 + "))"), r3 + f(e.exponent, (t2) => t2 ? "([eE]" + d({ signed: e.eSigned }) + ")" : "");
}
function d(t) {
  "signed" in (t = t || {}) || (t.signed = [true, false]), "separator" in t ? "groupSize" in t || (t.groupSize = 3) : t.separator = "";
  return f(t.signed, (e) => e ? "[-+]" : "", true) + f(t.separator, (n2) => {
    if (!n2) return "(?:\\d+)";
    " " === (n2 = o(n2)) ? n2 = "\\s" : " " === n2 && (n2 = "\\s\\xa0");
    const r3 = t.groupSize, l2 = t.groupSize2;
    if (l2) {
      const e = "(?:0|[1-9]\\d{0," + (l2 - 1) + "}(?:[" + n2 + "]\\d{" + l2 + "})*[" + n2 + "]\\d{" + r3 + "})";
      return r3 - l2 > 0 ? "(?:" + e + "|(?:0|[1-9]\\d{0," + (r3 - 1) + "}))" : e;
    }
    return "(?:0|[1-9]\\d{0," + (r3 - 1) + "}(?:[" + n2 + "]\\d{" + r3 + "})*)";
  }, true);
}
var f = (e, t, n2) => {
  if (!Array.isArray(e)) return t(e);
  const r3 = [];
  for (let l2 = 0; l2 < e.length; l2++) r3.push(t(e[l2]));
  return g(r3.join("|"), Boolean(n2));
};
var g = (e, t) => "(" + (t ? "?:" : "") + e + ")";

export {
  l,
  c,
  p
};
//# sourceMappingURL=chunk-JMVIOIWP.js.map
