import {
  p
} from "./chunk-SQ6MYL73.js";
import {
  o
} from "./chunk-HP7OWCUK.js";

// node_modules/@arcgis/core/support/timeUtils.js
function d(t2) {
  if (!t2) return t2;
  const { start: e2, end: r2 } = t2;
  return new p({ start: null != e2 ? o(e2, -e2.getTimezoneOffset(), "minutes") : e2, end: null != r2 ? o(r2, -r2.getTimezoneOffset(), "minutes") : r2 });
}
function p2(t2) {
  if (!t2) return t2;
  const { start: e2, end: r2 } = t2;
  return new p({ start: null != e2 ? o(e2, e2.getTimezoneOffset(), "minutes") : e2, end: null != r2 ? o(r2, r2.getTimezoneOffset(), "minutes") : r2 });
}

// node_modules/@arcgis/core/layers/support/timeSupport.js
function i(i2, n, s) {
  if (null == (i2 == null ? void 0 : i2.timeInfo)) return null;
  const { datesInUnknownTimezone: l = false, timeOffset: o2, useViewTime: m } = i2;
  let u = i2.timeExtent;
  l && (u = p2(u));
  let r2 = m ? n && u ? n.intersection(u) : n || u : u;
  return !r2 || r2.isEmpty || r2.isAllTime ? r2 : (o2 && (r2 = r2.offset(-o2.value, o2.unit)), l && (r2 = d(r2)), r2.equals(s) ? s : r2);
}

export {
  i
};
//# sourceMappingURL=chunk-YX6MRK66.js.map
