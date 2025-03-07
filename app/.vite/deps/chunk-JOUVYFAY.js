// node_modules/@arcgis/core/core/MD5.js
var n = { Base64: 0, Hex: 1, String: 2, Raw: 3 };
var t = 8;
var r = (1 << t) - 1;
function e(n2, t2) {
  const r2 = (65535 & n2) + (65535 & t2);
  return (n2 >> 16) + (t2 >> 16) + (r2 >> 16) << 16 | 65535 & r2;
}
function o(n2) {
  const e2 = [];
  for (let o2 = 0, u2 = n2.length * t; o2 < u2; o2 += t) e2[o2 >> 5] |= (n2.charCodeAt(o2 / t) & r) << o2 % 32;
  return e2;
}
function u(n2) {
  const e2 = [];
  for (let o2 = 0, u2 = 32 * n2.length; o2 < u2; o2 += t) e2.push(String.fromCharCode(n2[o2 >> 5] >>> o2 % 32 & r));
  return e2.join("");
}
function c(n2) {
  const t2 = "0123456789abcdef", r2 = [];
  for (let e2 = 0, o2 = 4 * n2.length; e2 < o2; e2++) r2.push(t2.charAt(n2[e2 >> 2] >> e2 % 4 * 8 + 4 & 15) + t2.charAt(n2[e2 >> 2] >> e2 % 4 * 8 & 15));
  return r2.join("");
}
function f(n2) {
  const t2 = "=", r2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", e2 = [];
  for (let o2 = 0, u2 = 4 * n2.length; o2 < u2; o2 += 3) {
    const u3 = (n2[o2 >> 2] >> o2 % 4 * 8 & 255) << 16 | (n2[o2 + 1 >> 2] >> (o2 + 1) % 4 * 8 & 255) << 8 | n2[o2 + 2 >> 2] >> (o2 + 2) % 4 * 8 & 255;
    for (let c2 = 0; c2 < 4; c2++) 8 * o2 + 6 * c2 > 32 * n2.length ? e2.push(t2) : e2.push(r2.charAt(u3 >> 6 * (3 - c2) & 63));
  }
  return e2.join("");
}
function s(n2, t2) {
  return n2 << t2 | n2 >>> 32 - t2;
}
function i(n2, t2, r2, o2, u2, c2) {
  return e(s(e(e(t2, n2), e(o2, c2)), u2), r2);
}
function h(n2, t2, r2, e2, o2, u2, c2) {
  return i(t2 & r2 | ~t2 & e2, n2, t2, o2, u2, c2);
}
function a(n2, t2, r2, e2, o2, u2, c2) {
  return i(t2 & e2 | r2 & ~e2, n2, t2, o2, u2, c2);
}
function l(n2, t2, r2, e2, o2, u2, c2) {
  return i(t2 ^ r2 ^ e2, n2, t2, o2, u2, c2);
}
function g(n2, t2, r2, e2, o2, u2, c2) {
  return i(r2 ^ (t2 | ~e2), n2, t2, o2, u2, c2);
}
function p(n2, t2) {
  n2[t2 >> 5] |= 128 << t2 % 32, n2[14 + (t2 + 64 >>> 9 << 4)] = t2;
  let r2 = 1732584193, o2 = -271733879, u2 = -1732584194, c2 = 271733878;
  for (let f2 = 0; f2 < n2.length; f2 += 16) {
    const t3 = r2, s2 = o2, i2 = u2, p2 = c2;
    r2 = h(r2, o2, u2, c2, n2[f2], 7, -680876936), c2 = h(c2, r2, o2, u2, n2[f2 + 1], 12, -389564586), u2 = h(u2, c2, r2, o2, n2[f2 + 2], 17, 606105819), o2 = h(o2, u2, c2, r2, n2[f2 + 3], 22, -1044525330), r2 = h(r2, o2, u2, c2, n2[f2 + 4], 7, -176418897), c2 = h(c2, r2, o2, u2, n2[f2 + 5], 12, 1200080426), u2 = h(u2, c2, r2, o2, n2[f2 + 6], 17, -1473231341), o2 = h(o2, u2, c2, r2, n2[f2 + 7], 22, -45705983), r2 = h(r2, o2, u2, c2, n2[f2 + 8], 7, 1770035416), c2 = h(c2, r2, o2, u2, n2[f2 + 9], 12, -1958414417), u2 = h(u2, c2, r2, o2, n2[f2 + 10], 17, -42063), o2 = h(o2, u2, c2, r2, n2[f2 + 11], 22, -1990404162), r2 = h(r2, o2, u2, c2, n2[f2 + 12], 7, 1804603682), c2 = h(c2, r2, o2, u2, n2[f2 + 13], 12, -40341101), u2 = h(u2, c2, r2, o2, n2[f2 + 14], 17, -1502002290), o2 = h(o2, u2, c2, r2, n2[f2 + 15], 22, 1236535329), r2 = a(r2, o2, u2, c2, n2[f2 + 1], 5, -165796510), c2 = a(c2, r2, o2, u2, n2[f2 + 6], 9, -1069501632), u2 = a(u2, c2, r2, o2, n2[f2 + 11], 14, 643717713), o2 = a(o2, u2, c2, r2, n2[f2], 20, -373897302), r2 = a(r2, o2, u2, c2, n2[f2 + 5], 5, -701558691), c2 = a(c2, r2, o2, u2, n2[f2 + 10], 9, 38016083), u2 = a(u2, c2, r2, o2, n2[f2 + 15], 14, -660478335), o2 = a(o2, u2, c2, r2, n2[f2 + 4], 20, -405537848), r2 = a(r2, o2, u2, c2, n2[f2 + 9], 5, 568446438), c2 = a(c2, r2, o2, u2, n2[f2 + 14], 9, -1019803690), u2 = a(u2, c2, r2, o2, n2[f2 + 3], 14, -187363961), o2 = a(o2, u2, c2, r2, n2[f2 + 8], 20, 1163531501), r2 = a(r2, o2, u2, c2, n2[f2 + 13], 5, -1444681467), c2 = a(c2, r2, o2, u2, n2[f2 + 2], 9, -51403784), u2 = a(u2, c2, r2, o2, n2[f2 + 7], 14, 1735328473), o2 = a(o2, u2, c2, r2, n2[f2 + 12], 20, -1926607734), r2 = l(r2, o2, u2, c2, n2[f2 + 5], 4, -378558), c2 = l(c2, r2, o2, u2, n2[f2 + 8], 11, -2022574463), u2 = l(u2, c2, r2, o2, n2[f2 + 11], 16, 1839030562), o2 = l(o2, u2, c2, r2, n2[f2 + 14], 23, -35309556), r2 = l(r2, o2, u2, c2, n2[f2 + 1], 4, -1530992060), c2 = l(c2, r2, o2, u2, n2[f2 + 4], 11, 1272893353), u2 = l(u2, c2, r2, o2, n2[f2 + 7], 16, -155497632), o2 = l(o2, u2, c2, r2, n2[f2 + 10], 23, -1094730640), r2 = l(r2, o2, u2, c2, n2[f2 + 13], 4, 681279174), c2 = l(c2, r2, o2, u2, n2[f2], 11, -358537222), u2 = l(u2, c2, r2, o2, n2[f2 + 3], 16, -722521979), o2 = l(o2, u2, c2, r2, n2[f2 + 6], 23, 76029189), r2 = l(r2, o2, u2, c2, n2[f2 + 9], 4, -640364487), c2 = l(c2, r2, o2, u2, n2[f2 + 12], 11, -421815835), u2 = l(u2, c2, r2, o2, n2[f2 + 15], 16, 530742520), o2 = l(o2, u2, c2, r2, n2[f2 + 2], 23, -995338651), r2 = g(r2, o2, u2, c2, n2[f2], 6, -198630844), c2 = g(c2, r2, o2, u2, n2[f2 + 7], 10, 1126891415), u2 = g(u2, c2, r2, o2, n2[f2 + 14], 15, -1416354905), o2 = g(o2, u2, c2, r2, n2[f2 + 5], 21, -57434055), r2 = g(r2, o2, u2, c2, n2[f2 + 12], 6, 1700485571), c2 = g(c2, r2, o2, u2, n2[f2 + 3], 10, -1894986606), u2 = g(u2, c2, r2, o2, n2[f2 + 10], 15, -1051523), o2 = g(o2, u2, c2, r2, n2[f2 + 1], 21, -2054922799), r2 = g(r2, o2, u2, c2, n2[f2 + 8], 6, 1873313359), c2 = g(c2, r2, o2, u2, n2[f2 + 15], 10, -30611744), u2 = g(u2, c2, r2, o2, n2[f2 + 6], 15, -1560198380), o2 = g(o2, u2, c2, r2, n2[f2 + 13], 21, 1309151649), r2 = g(r2, o2, u2, c2, n2[f2 + 4], 6, -145523070), c2 = g(c2, r2, o2, u2, n2[f2 + 11], 10, -1120210379), u2 = g(u2, c2, r2, o2, n2[f2 + 2], 15, 718787259), o2 = g(o2, u2, c2, r2, n2[f2 + 9], 21, -343485551), r2 = e(r2, t3), o2 = e(o2, s2), u2 = e(u2, i2), c2 = e(c2, p2);
  }
  return [r2, o2, u2, c2];
}
function x(r2, e2 = n.Hex) {
  const s2 = e2 || n.Base64, i2 = p(o(r2), r2.length * t);
  switch (s2) {
    case n.Raw:
      return i2;
    case n.Hex:
      return c(i2);
    case n.String:
      return u(i2);
    case n.Base64:
      return f(i2);
  }
}

export {
  n,
  x
};
//# sourceMappingURL=chunk-JOUVYFAY.js.map
