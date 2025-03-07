// node_modules/@arcgis/core/core/screenUtils.js
var n = /^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i;
var t = "screenUtils.toPt: input not recognized!";
var r = 96;
function u(n2) {
  return n2 ? n2 / 72 * r : 0;
}
function e(n2) {
  return n2 ? 72 * n2 / r : 0;
}
function o(r2) {
  if ("string" == typeof r2) {
    const u2 = r2.match(n);
    if (u2) {
      const n2 = Number(u2[1]), t2 = u2[3] && u2[3].toLowerCase(), o2 = "-" === r2.charAt(0), c2 = "px" === t2 ? e(n2) : n2;
      return o2 ? -c2 : c2;
    }
    return console.warn(t), null;
  }
  return r2;
}
function c(n2 = 0, t2 = 0) {
  return { x: n2, y: t2 };
}
function i(n2) {
  return n2 ? c(n2.x, n2.y) : null;
}
function f(n2 = 0, t2 = 0) {
  return [n2, t2];
}
function s(n2 = 0, t2 = 0) {
  return l([n2, t2]);
}
function y(n2 = 0, t2 = 0, r2 = 0) {
  return p([n2, t2, r2]);
}
function l(n2) {
  return n2;
}
function p(n2) {
  return n2;
}
function a(n2) {
  return n2;
}
function g(n2, t2) {
  return t2 ? (t2[0] = n2.x, t2[1] = n2.y, t2.length > 2 && (t2[2] = 0), t2) : [n2.x, n2.y];
}

export {
  u,
  e,
  o,
  c,
  i,
  f,
  s,
  y,
  l,
  p,
  a,
  g
};
//# sourceMappingURL=chunk-JLFV7EBO.js.map
