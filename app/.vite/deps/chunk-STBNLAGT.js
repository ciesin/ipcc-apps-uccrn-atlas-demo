// node_modules/@arcgis/core/core/sql.js
var n;
async function t() {
  return null == n && (n = import("./WhereClauseCache-ZZ2FDIVD.js").then((n2) => new n2.WhereClauseCache(500, 500))), n;
}
async function e(n2, e2) {
  const r2 = await t(), u2 = r2.get(n2, e2);
  if (null == u2) throw r2.getError(n2, e2);
  return u2;
}
function r(n2, t2) {
  return n2 || (n2 = null), t2 || (t2 = null), "1=1" === n2 ? t2 ?? n2 : "1=1" === t2 ? n2 ?? t2 : n2 && t2 ? `(${n2}) AND (${t2})` : n2 ?? t2;
}
function u(n2, t2) {
  return n2 || (n2 = null), t2 || (t2 = null), "1=1" === n2 || "1=1" === t2 || n2 === t2 ? "1=1" === n2 ? n2 : t2 : n2 && t2 ? `(${n2}) OR (${t2})` : n2 ?? t2;
}
function l(n2, t2) {
  return 0 === t2.length ? null : `${n2} IN (${o(t2)})`;
}
function o(n2) {
  return n2.map((n3) => "string" == typeof n3 ? c(n3) : n3).join(",");
}
function c(n2) {
  return `'${n2.replaceAll("'", "''")}'`;
}

export {
  e,
  r,
  u,
  l
};
//# sourceMappingURL=chunk-STBNLAGT.js.map
