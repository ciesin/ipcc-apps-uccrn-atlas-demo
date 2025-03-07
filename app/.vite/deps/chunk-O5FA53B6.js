import {
  html,
  mathml,
  svg
} from "./chunk-RVUV2HD7.js";

// node_modules/lit-html/development/static.js
var brand = Symbol.for("");
var unwrapStaticValue = (value) => {
  if ((value == null ? void 0 : value.r) !== brand) {
    return void 0;
  }
  return value == null ? void 0 : value["_$litStatic$"];
};
var unsafeStatic = (value) => ({
  ["_$litStatic$"]: value,
  r: brand
});
var textFromStatic = (value) => {
  if (value["_$litStatic$"] !== void 0) {
    return value["_$litStatic$"];
  } else {
    throw new Error(`Value passed to 'literal' function must be a 'literal' result: ${value}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
  }
};
var literal = (strings, ...values) => ({
  ["_$litStatic$"]: values.reduce((acc, v, idx) => acc + textFromStatic(v) + strings[idx + 1], strings[0]),
  r: brand
});
var stringsCache = /* @__PURE__ */ new Map();
var withStatic = (coreTag) => (strings, ...values) => {
  const l = values.length;
  let staticValue;
  let dynamicValue;
  const staticStrings = [];
  const dynamicValues = [];
  let i = 0;
  let hasStatics = false;
  let s;
  while (i < l) {
    s = strings[i];
    while (i < l && (dynamicValue = values[i], staticValue = unwrapStaticValue(dynamicValue)) !== void 0) {
      s += staticValue + strings[++i];
      hasStatics = true;
    }
    if (i !== l) {
      dynamicValues.push(dynamicValue);
    }
    staticStrings.push(s);
    i++;
  }
  if (i === l) {
    staticStrings.push(strings[l]);
  }
  if (hasStatics) {
    const key = staticStrings.join("$$lit$$");
    strings = stringsCache.get(key);
    if (strings === void 0) {
      staticStrings.raw = staticStrings;
      stringsCache.set(key, strings = staticStrings);
    }
    values = dynamicValues;
  }
  return coreTag(strings, ...values);
};
var html2 = withStatic(html);
var svg2 = withStatic(svg);
var mathml2 = withStatic(mathml);

export {
  unsafeStatic,
  literal,
  html2 as html
};
/*! Bundled license information:

lit-html/development/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=chunk-O5FA53B6.js.map
