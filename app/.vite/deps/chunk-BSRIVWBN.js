import {
  A,
  d
} from "./chunk-YSPSOPLL.js";
import {
  t3 as t2
} from "./chunk-RYSF6YCR.js";
import {
  R
} from "./chunk-WCGYJMU3.js";
import {
  e,
  l3 as l,
  t
} from "./chunk-M6FNW7GP.js";

// node_modules/@esri/arcgis-html-sanitizer/dist/esm/index.js
var __assign = function() {
  __assign = Object.assign || function __assign2(t4) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t4[p] = s[p];
    }
    return t4;
  };
  return __assign.apply(this, arguments);
};
var lib$1 = { exports: {} };
var _default$1 = {};
var lib = { exports: {} };
var _default = {};
function getDefaultWhiteList$1() {
  var whiteList = {};
  whiteList["align-content"] = false;
  whiteList["align-items"] = false;
  whiteList["align-self"] = false;
  whiteList["alignment-adjust"] = false;
  whiteList["alignment-baseline"] = false;
  whiteList["all"] = false;
  whiteList["anchor-point"] = false;
  whiteList["animation"] = false;
  whiteList["animation-delay"] = false;
  whiteList["animation-direction"] = false;
  whiteList["animation-duration"] = false;
  whiteList["animation-fill-mode"] = false;
  whiteList["animation-iteration-count"] = false;
  whiteList["animation-name"] = false;
  whiteList["animation-play-state"] = false;
  whiteList["animation-timing-function"] = false;
  whiteList["azimuth"] = false;
  whiteList["backface-visibility"] = false;
  whiteList["background"] = true;
  whiteList["background-attachment"] = true;
  whiteList["background-clip"] = true;
  whiteList["background-color"] = true;
  whiteList["background-image"] = true;
  whiteList["background-origin"] = true;
  whiteList["background-position"] = true;
  whiteList["background-repeat"] = true;
  whiteList["background-size"] = true;
  whiteList["baseline-shift"] = false;
  whiteList["binding"] = false;
  whiteList["bleed"] = false;
  whiteList["bookmark-label"] = false;
  whiteList["bookmark-level"] = false;
  whiteList["bookmark-state"] = false;
  whiteList["border"] = true;
  whiteList["border-bottom"] = true;
  whiteList["border-bottom-color"] = true;
  whiteList["border-bottom-left-radius"] = true;
  whiteList["border-bottom-right-radius"] = true;
  whiteList["border-bottom-style"] = true;
  whiteList["border-bottom-width"] = true;
  whiteList["border-collapse"] = true;
  whiteList["border-color"] = true;
  whiteList["border-image"] = true;
  whiteList["border-image-outset"] = true;
  whiteList["border-image-repeat"] = true;
  whiteList["border-image-slice"] = true;
  whiteList["border-image-source"] = true;
  whiteList["border-image-width"] = true;
  whiteList["border-left"] = true;
  whiteList["border-left-color"] = true;
  whiteList["border-left-style"] = true;
  whiteList["border-left-width"] = true;
  whiteList["border-radius"] = true;
  whiteList["border-right"] = true;
  whiteList["border-right-color"] = true;
  whiteList["border-right-style"] = true;
  whiteList["border-right-width"] = true;
  whiteList["border-spacing"] = true;
  whiteList["border-style"] = true;
  whiteList["border-top"] = true;
  whiteList["border-top-color"] = true;
  whiteList["border-top-left-radius"] = true;
  whiteList["border-top-right-radius"] = true;
  whiteList["border-top-style"] = true;
  whiteList["border-top-width"] = true;
  whiteList["border-width"] = true;
  whiteList["bottom"] = false;
  whiteList["box-decoration-break"] = true;
  whiteList["box-shadow"] = true;
  whiteList["box-sizing"] = true;
  whiteList["box-snap"] = true;
  whiteList["box-suppress"] = true;
  whiteList["break-after"] = true;
  whiteList["break-before"] = true;
  whiteList["break-inside"] = true;
  whiteList["caption-side"] = false;
  whiteList["chains"] = false;
  whiteList["clear"] = true;
  whiteList["clip"] = false;
  whiteList["clip-path"] = false;
  whiteList["clip-rule"] = false;
  whiteList["color"] = true;
  whiteList["color-interpolation-filters"] = true;
  whiteList["column-count"] = false;
  whiteList["column-fill"] = false;
  whiteList["column-gap"] = false;
  whiteList["column-rule"] = false;
  whiteList["column-rule-color"] = false;
  whiteList["column-rule-style"] = false;
  whiteList["column-rule-width"] = false;
  whiteList["column-span"] = false;
  whiteList["column-width"] = false;
  whiteList["columns"] = false;
  whiteList["contain"] = false;
  whiteList["content"] = false;
  whiteList["counter-increment"] = false;
  whiteList["counter-reset"] = false;
  whiteList["counter-set"] = false;
  whiteList["crop"] = false;
  whiteList["cue"] = false;
  whiteList["cue-after"] = false;
  whiteList["cue-before"] = false;
  whiteList["cursor"] = false;
  whiteList["direction"] = false;
  whiteList["display"] = true;
  whiteList["display-inside"] = true;
  whiteList["display-list"] = true;
  whiteList["display-outside"] = true;
  whiteList["dominant-baseline"] = false;
  whiteList["elevation"] = false;
  whiteList["empty-cells"] = false;
  whiteList["filter"] = false;
  whiteList["flex"] = false;
  whiteList["flex-basis"] = false;
  whiteList["flex-direction"] = false;
  whiteList["flex-flow"] = false;
  whiteList["flex-grow"] = false;
  whiteList["flex-shrink"] = false;
  whiteList["flex-wrap"] = false;
  whiteList["float"] = false;
  whiteList["float-offset"] = false;
  whiteList["flood-color"] = false;
  whiteList["flood-opacity"] = false;
  whiteList["flow-from"] = false;
  whiteList["flow-into"] = false;
  whiteList["font"] = true;
  whiteList["font-family"] = true;
  whiteList["font-feature-settings"] = true;
  whiteList["font-kerning"] = true;
  whiteList["font-language-override"] = true;
  whiteList["font-size"] = true;
  whiteList["font-size-adjust"] = true;
  whiteList["font-stretch"] = true;
  whiteList["font-style"] = true;
  whiteList["font-synthesis"] = true;
  whiteList["font-variant"] = true;
  whiteList["font-variant-alternates"] = true;
  whiteList["font-variant-caps"] = true;
  whiteList["font-variant-east-asian"] = true;
  whiteList["font-variant-ligatures"] = true;
  whiteList["font-variant-numeric"] = true;
  whiteList["font-variant-position"] = true;
  whiteList["font-weight"] = true;
  whiteList["grid"] = false;
  whiteList["grid-area"] = false;
  whiteList["grid-auto-columns"] = false;
  whiteList["grid-auto-flow"] = false;
  whiteList["grid-auto-rows"] = false;
  whiteList["grid-column"] = false;
  whiteList["grid-column-end"] = false;
  whiteList["grid-column-start"] = false;
  whiteList["grid-row"] = false;
  whiteList["grid-row-end"] = false;
  whiteList["grid-row-start"] = false;
  whiteList["grid-template"] = false;
  whiteList["grid-template-areas"] = false;
  whiteList["grid-template-columns"] = false;
  whiteList["grid-template-rows"] = false;
  whiteList["hanging-punctuation"] = false;
  whiteList["height"] = true;
  whiteList["hyphens"] = false;
  whiteList["icon"] = false;
  whiteList["image-orientation"] = false;
  whiteList["image-resolution"] = false;
  whiteList["ime-mode"] = false;
  whiteList["initial-letters"] = false;
  whiteList["inline-box-align"] = false;
  whiteList["justify-content"] = false;
  whiteList["justify-items"] = false;
  whiteList["justify-self"] = false;
  whiteList["left"] = false;
  whiteList["letter-spacing"] = true;
  whiteList["lighting-color"] = true;
  whiteList["line-box-contain"] = false;
  whiteList["line-break"] = false;
  whiteList["line-grid"] = false;
  whiteList["line-height"] = false;
  whiteList["line-snap"] = false;
  whiteList["line-stacking"] = false;
  whiteList["line-stacking-ruby"] = false;
  whiteList["line-stacking-shift"] = false;
  whiteList["line-stacking-strategy"] = false;
  whiteList["list-style"] = true;
  whiteList["list-style-image"] = true;
  whiteList["list-style-position"] = true;
  whiteList["list-style-type"] = true;
  whiteList["margin"] = true;
  whiteList["margin-bottom"] = true;
  whiteList["margin-left"] = true;
  whiteList["margin-right"] = true;
  whiteList["margin-top"] = true;
  whiteList["marker-offset"] = false;
  whiteList["marker-side"] = false;
  whiteList["marks"] = false;
  whiteList["mask"] = false;
  whiteList["mask-box"] = false;
  whiteList["mask-box-outset"] = false;
  whiteList["mask-box-repeat"] = false;
  whiteList["mask-box-slice"] = false;
  whiteList["mask-box-source"] = false;
  whiteList["mask-box-width"] = false;
  whiteList["mask-clip"] = false;
  whiteList["mask-image"] = false;
  whiteList["mask-origin"] = false;
  whiteList["mask-position"] = false;
  whiteList["mask-repeat"] = false;
  whiteList["mask-size"] = false;
  whiteList["mask-source-type"] = false;
  whiteList["mask-type"] = false;
  whiteList["max-height"] = true;
  whiteList["max-lines"] = false;
  whiteList["max-width"] = true;
  whiteList["min-height"] = true;
  whiteList["min-width"] = true;
  whiteList["move-to"] = false;
  whiteList["nav-down"] = false;
  whiteList["nav-index"] = false;
  whiteList["nav-left"] = false;
  whiteList["nav-right"] = false;
  whiteList["nav-up"] = false;
  whiteList["object-fit"] = false;
  whiteList["object-position"] = false;
  whiteList["opacity"] = false;
  whiteList["order"] = false;
  whiteList["orphans"] = false;
  whiteList["outline"] = false;
  whiteList["outline-color"] = false;
  whiteList["outline-offset"] = false;
  whiteList["outline-style"] = false;
  whiteList["outline-width"] = false;
  whiteList["overflow"] = false;
  whiteList["overflow-wrap"] = false;
  whiteList["overflow-x"] = false;
  whiteList["overflow-y"] = false;
  whiteList["padding"] = true;
  whiteList["padding-bottom"] = true;
  whiteList["padding-left"] = true;
  whiteList["padding-right"] = true;
  whiteList["padding-top"] = true;
  whiteList["page"] = false;
  whiteList["page-break-after"] = false;
  whiteList["page-break-before"] = false;
  whiteList["page-break-inside"] = false;
  whiteList["page-policy"] = false;
  whiteList["pause"] = false;
  whiteList["pause-after"] = false;
  whiteList["pause-before"] = false;
  whiteList["perspective"] = false;
  whiteList["perspective-origin"] = false;
  whiteList["pitch"] = false;
  whiteList["pitch-range"] = false;
  whiteList["play-during"] = false;
  whiteList["position"] = false;
  whiteList["presentation-level"] = false;
  whiteList["quotes"] = false;
  whiteList["region-fragment"] = false;
  whiteList["resize"] = false;
  whiteList["rest"] = false;
  whiteList["rest-after"] = false;
  whiteList["rest-before"] = false;
  whiteList["richness"] = false;
  whiteList["right"] = false;
  whiteList["rotation"] = false;
  whiteList["rotation-point"] = false;
  whiteList["ruby-align"] = false;
  whiteList["ruby-merge"] = false;
  whiteList["ruby-position"] = false;
  whiteList["shape-image-threshold"] = false;
  whiteList["shape-outside"] = false;
  whiteList["shape-margin"] = false;
  whiteList["size"] = false;
  whiteList["speak"] = false;
  whiteList["speak-as"] = false;
  whiteList["speak-header"] = false;
  whiteList["speak-numeral"] = false;
  whiteList["speak-punctuation"] = false;
  whiteList["speech-rate"] = false;
  whiteList["stress"] = false;
  whiteList["string-set"] = false;
  whiteList["tab-size"] = false;
  whiteList["table-layout"] = false;
  whiteList["text-align"] = true;
  whiteList["text-align-last"] = true;
  whiteList["text-combine-upright"] = true;
  whiteList["text-decoration"] = true;
  whiteList["text-decoration-color"] = true;
  whiteList["text-decoration-line"] = true;
  whiteList["text-decoration-skip"] = true;
  whiteList["text-decoration-style"] = true;
  whiteList["text-emphasis"] = true;
  whiteList["text-emphasis-color"] = true;
  whiteList["text-emphasis-position"] = true;
  whiteList["text-emphasis-style"] = true;
  whiteList["text-height"] = true;
  whiteList["text-indent"] = true;
  whiteList["text-justify"] = true;
  whiteList["text-orientation"] = true;
  whiteList["text-overflow"] = true;
  whiteList["text-shadow"] = true;
  whiteList["text-space-collapse"] = true;
  whiteList["text-transform"] = true;
  whiteList["text-underline-position"] = true;
  whiteList["text-wrap"] = true;
  whiteList["top"] = false;
  whiteList["transform"] = false;
  whiteList["transform-origin"] = false;
  whiteList["transform-style"] = false;
  whiteList["transition"] = false;
  whiteList["transition-delay"] = false;
  whiteList["transition-duration"] = false;
  whiteList["transition-property"] = false;
  whiteList["transition-timing-function"] = false;
  whiteList["unicode-bidi"] = false;
  whiteList["vertical-align"] = false;
  whiteList["visibility"] = false;
  whiteList["voice-balance"] = false;
  whiteList["voice-duration"] = false;
  whiteList["voice-family"] = false;
  whiteList["voice-pitch"] = false;
  whiteList["voice-range"] = false;
  whiteList["voice-rate"] = false;
  whiteList["voice-stress"] = false;
  whiteList["voice-volume"] = false;
  whiteList["volume"] = false;
  whiteList["white-space"] = false;
  whiteList["widows"] = false;
  whiteList["width"] = true;
  whiteList["will-change"] = false;
  whiteList["word-break"] = true;
  whiteList["word-spacing"] = true;
  whiteList["word-wrap"] = true;
  whiteList["wrap-flow"] = false;
  whiteList["wrap-through"] = false;
  whiteList["writing-mode"] = false;
  whiteList["z-index"] = false;
  return whiteList;
}
function onAttr(name, value, options) {
}
function onIgnoreAttr(name, value, options) {
}
var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;
function safeAttrValue$1(name, value) {
  if (REGEXP_URL_JAVASCRIPT.test(value)) return "";
  return value;
}
_default.whiteList = getDefaultWhiteList$1();
_default.getDefaultWhiteList = getDefaultWhiteList$1;
_default.onAttr = onAttr;
_default.onIgnoreAttr = onIgnoreAttr;
_default.safeAttrValue = safeAttrValue$1;
var util$1 = {
  indexOf: function(arr, item) {
    var i, j2;
    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    }
    for (i = 0, j2 = arr.length; i < j2; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },
  forEach: function(arr, fn, scope) {
    var i, j2;
    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }
    for (i = 0, j2 = arr.length; i < j2; i++) {
      fn.call(scope, arr[i], i, arr);
    }
  },
  trim: function(str) {
    if (String.prototype.trim) {
      return str.trim();
    }
    return str.replace(/(^\s*)|(\s*$)/g, "");
  },
  trimRight: function(str) {
    if (String.prototype.trimRight) {
      return str.trimRight();
    }
    return str.replace(/(\s*$)/g, "");
  }
};
var _$3 = util$1;
function parseStyle$1(css2, onAttr2) {
  css2 = _$3.trimRight(css2);
  if (css2[css2.length - 1] !== ";") css2 += ";";
  var cssLength = css2.length;
  var isParenthesisOpen = false;
  var lastPos = 0;
  var i = 0;
  var retCSS = "";
  function addNewAttr() {
    if (!isParenthesisOpen) {
      var source = _$3.trim(css2.slice(lastPos, i));
      var j3 = source.indexOf(":");
      if (j3 !== -1) {
        var name = _$3.trim(source.slice(0, j3));
        var value = _$3.trim(source.slice(j3 + 1));
        if (name) {
          var ret = onAttr2(lastPos, retCSS.length, name, value, source);
          if (ret) retCSS += ret + "; ";
        }
      }
    }
    lastPos = i + 1;
  }
  for (; i < cssLength; i++) {
    var c2 = css2[i];
    if (c2 === "/" && css2[i + 1] === "*") {
      var j2 = css2.indexOf("*/", i + 2);
      if (j2 === -1) break;
      i = j2 + 1;
      lastPos = i + 1;
      isParenthesisOpen = false;
    } else if (c2 === "(") {
      isParenthesisOpen = true;
    } else if (c2 === ")") {
      isParenthesisOpen = false;
    } else if (c2 === ";") {
      if (isParenthesisOpen) ;
      else {
        addNewAttr();
      }
    } else if (c2 === "\n") {
      addNewAttr();
    }
  }
  return _$3.trim(retCSS);
}
var parser$2 = parseStyle$1;
var DEFAULT$1 = _default;
var parseStyle = parser$2;
function isNull$1(obj) {
  return obj === void 0 || obj === null;
}
function shallowCopyObject$1(obj) {
  var ret = {};
  for (var i in obj) {
    ret[i] = obj[i];
  }
  return ret;
}
function FilterCSS$2(options) {
  options = shallowCopyObject$1(options || {});
  options.whiteList = options.whiteList || DEFAULT$1.whiteList;
  options.onAttr = options.onAttr || DEFAULT$1.onAttr;
  options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT$1.onIgnoreAttr;
  options.safeAttrValue = options.safeAttrValue || DEFAULT$1.safeAttrValue;
  this.options = options;
}
FilterCSS$2.prototype.process = function(css2) {
  css2 = css2 || "";
  css2 = css2.toString();
  if (!css2) return "";
  var me = this;
  var options = me.options;
  var whiteList = options.whiteList;
  var onAttr2 = options.onAttr;
  var onIgnoreAttr2 = options.onIgnoreAttr;
  var safeAttrValue2 = options.safeAttrValue;
  var retCSS = parseStyle(css2, function(sourcePosition, position, name, value, source) {
    var check = whiteList[name];
    var isWhite = false;
    if (check === true) isWhite = check;
    else if (typeof check === "function") isWhite = check(value);
    else if (check instanceof RegExp) isWhite = check.test(value);
    if (isWhite !== true) isWhite = false;
    value = safeAttrValue2(name, value);
    if (!value) return;
    var opts = {
      position,
      sourcePosition,
      source,
      isWhite
    };
    if (isWhite) {
      var ret = onAttr2(name, value, opts);
      if (isNull$1(ret)) {
        return name + ":" + value;
      } else {
        return ret;
      }
    } else {
      var ret = onIgnoreAttr2(name, value, opts);
      if (!isNull$1(ret)) {
        return ret;
      }
    }
  });
  return retCSS;
};
var css = FilterCSS$2;
(function(module, exports) {
  var DEFAULT2 = _default;
  var FilterCSS2 = css;
  function filterCSS(html, options) {
    var xss2 = new FilterCSS2(options);
    return xss2.process(html);
  }
  exports = module.exports = filterCSS;
  exports.FilterCSS = FilterCSS2;
  for (var i in DEFAULT2) exports[i] = DEFAULT2[i];
})(lib, lib.exports);
var libExports$1 = lib.exports;
var util = {
  indexOf: function(arr, item) {
    var i, j2;
    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    }
    for (i = 0, j2 = arr.length; i < j2; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },
  forEach: function(arr, fn, scope) {
    var i, j2;
    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }
    for (i = 0, j2 = arr.length; i < j2; i++) {
      fn.call(scope, arr[i], i, arr);
    }
  },
  trim: function(str) {
    if (String.prototype.trim) {
      return str.trim();
    }
    return str.replace(/(^\s*)|(\s*$)/g, "");
  },
  spaceIndex: function(str) {
    var reg = /\s|\n|\t/;
    var match = reg.exec(str);
    return match ? match.index : -1;
  }
};
var FilterCSS$1 = libExports$1.FilterCSS;
var getDefaultCSSWhiteList = libExports$1.getDefaultWhiteList;
var _$2 = util;
function getDefaultWhiteList() {
  return {
    a: ["target", "href", "title"],
    abbr: ["title"],
    address: [],
    area: ["shape", "coords", "href", "alt"],
    article: [],
    aside: [],
    audio: [
      "autoplay",
      "controls",
      "crossorigin",
      "loop",
      "muted",
      "preload",
      "src"
    ],
    b: [],
    bdi: ["dir"],
    bdo: ["dir"],
    big: [],
    blockquote: ["cite"],
    br: [],
    caption: [],
    center: [],
    cite: [],
    code: [],
    col: ["align", "valign", "span", "width"],
    colgroup: ["align", "valign", "span", "width"],
    dd: [],
    del: ["datetime"],
    details: ["open"],
    div: [],
    dl: [],
    dt: [],
    em: [],
    figcaption: [],
    figure: [],
    font: ["color", "size", "face"],
    footer: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    header: [],
    hr: [],
    i: [],
    img: ["src", "alt", "title", "width", "height"],
    ins: ["datetime"],
    li: [],
    mark: [],
    nav: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    section: [],
    small: [],
    span: [],
    sub: [],
    summary: [],
    sup: [],
    strong: [],
    strike: [],
    table: ["width", "border", "align", "valign"],
    tbody: ["align", "valign"],
    td: ["width", "rowspan", "colspan", "align", "valign"],
    tfoot: ["align", "valign"],
    th: ["width", "rowspan", "colspan", "align", "valign"],
    thead: ["align", "valign"],
    tr: ["rowspan", "align", "valign"],
    tt: [],
    u: [],
    ul: [],
    video: [
      "autoplay",
      "controls",
      "crossorigin",
      "loop",
      "muted",
      "playsinline",
      "poster",
      "preload",
      "src",
      "height",
      "width"
    ]
  };
}
var defaultCSSFilter = new FilterCSS$1();
function onTag(tag, html, options) {
}
function onIgnoreTag(tag, html, options) {
}
function onTagAttr(tag, name, value) {
}
function onIgnoreTagAttr(tag, name, value) {
}
function escapeHtml(html) {
  return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
}
function safeAttrValue(tag, name, value, cssFilter) {
  value = friendlyAttrValue(value);
  if (name === "href" || name === "src") {
    value = _$2.trim(value);
    if (value === "#") return "#";
    if (!(value.substr(0, 7) === "http://" || value.substr(0, 8) === "https://" || value.substr(0, 7) === "mailto:" || value.substr(0, 4) === "tel:" || value.substr(0, 11) === "data:image/" || value.substr(0, 6) === "ftp://" || value.substr(0, 2) === "./" || value.substr(0, 3) === "../" || value[0] === "#" || value[0] === "/")) {
      return "";
    }
  } else if (name === "background") {
    REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
      return "";
    }
  } else if (name === "style") {
    REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
      return "";
    }
    REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
      REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
      if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
        return "";
      }
    }
    if (cssFilter !== false) {
      cssFilter = cssFilter || defaultCSSFilter;
      value = cssFilter.process(value);
    }
  }
  value = escapeAttrValue(value);
  return value;
}
var REGEXP_LT = /</g;
var REGEXP_GT = />/g;
var REGEXP_QUOTE = /"/g;
var REGEXP_QUOTE_2 = /&quot;/g;
var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
var REGEXP_DEFAULT_ON_TAG_ATTR_4 = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_7 = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;
function escapeQuote(str) {
  return str.replace(REGEXP_QUOTE, "&quot;");
}
function unescapeQuote(str) {
  return str.replace(REGEXP_QUOTE_2, '"');
}
function escapeHtmlEntities(str) {
  return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str2, code) {
    return code[0] === "x" || code[0] === "X" ? String.fromCharCode(parseInt(code.substr(1), 16)) : String.fromCharCode(parseInt(code, 10));
  });
}
function escapeDangerHtml5Entities(str) {
  return str.replace(REGEXP_ATTR_VALUE_COLON, ":").replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
}
function clearNonPrintableCharacter(str) {
  var str2 = "";
  for (var i = 0, len = str.length; i < len; i++) {
    str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
  }
  return _$2.trim(str2);
}
function friendlyAttrValue(str) {
  str = unescapeQuote(str);
  str = escapeHtmlEntities(str);
  str = escapeDangerHtml5Entities(str);
  str = clearNonPrintableCharacter(str);
  return str;
}
function escapeAttrValue(str) {
  str = escapeQuote(str);
  str = escapeHtml(str);
  return str;
}
function onIgnoreTagStripAll() {
  return "";
}
function StripTagBody(tags, next) {
  if (typeof next !== "function") {
    next = function() {
    };
  }
  var isRemoveAllTag = !Array.isArray(tags);
  function isRemoveTag(tag) {
    if (isRemoveAllTag) return true;
    return _$2.indexOf(tags, tag) !== -1;
  }
  var removeList = [];
  var posStart = false;
  return {
    onIgnoreTag: function(tag, html, options) {
      if (isRemoveTag(tag)) {
        if (options.isClosing) {
          var ret = "[/removed]";
          var end = options.position + ret.length;
          removeList.push([
            posStart !== false ? posStart : options.position,
            end
          ]);
          posStart = false;
          return ret;
        } else {
          if (!posStart) {
            posStart = options.position;
          }
          return "[removed]";
        }
      } else {
        return next(tag, html, options);
      }
    },
    remove: function(html) {
      var rethtml = "";
      var lastPos = 0;
      _$2.forEach(removeList, function(pos) {
        rethtml += html.slice(lastPos, pos[0]);
        lastPos = pos[1];
      });
      rethtml += html.slice(lastPos);
      return rethtml;
    }
  };
}
function stripCommentTag(html) {
  var retHtml = "";
  var lastPos = 0;
  while (lastPos < html.length) {
    var i = html.indexOf("<!--", lastPos);
    if (i === -1) {
      retHtml += html.slice(lastPos);
      break;
    }
    retHtml += html.slice(lastPos, i);
    var j2 = html.indexOf("-->", i);
    if (j2 === -1) {
      break;
    }
    lastPos = j2 + 3;
  }
  return retHtml;
}
function stripBlankChar(html) {
  var chars = html.split("");
  chars = chars.filter(function(char) {
    var c2 = char.charCodeAt(0);
    if (c2 === 127) return false;
    if (c2 <= 31) {
      if (c2 === 10 || c2 === 13) return true;
      return false;
    }
    return true;
  });
  return chars.join("");
}
_default$1.whiteList = getDefaultWhiteList();
_default$1.getDefaultWhiteList = getDefaultWhiteList;
_default$1.onTag = onTag;
_default$1.onIgnoreTag = onIgnoreTag;
_default$1.onTagAttr = onTagAttr;
_default$1.onIgnoreTagAttr = onIgnoreTagAttr;
_default$1.safeAttrValue = safeAttrValue;
_default$1.escapeHtml = escapeHtml;
_default$1.escapeQuote = escapeQuote;
_default$1.unescapeQuote = unescapeQuote;
_default$1.escapeHtmlEntities = escapeHtmlEntities;
_default$1.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
_default$1.clearNonPrintableCharacter = clearNonPrintableCharacter;
_default$1.friendlyAttrValue = friendlyAttrValue;
_default$1.escapeAttrValue = escapeAttrValue;
_default$1.onIgnoreTagStripAll = onIgnoreTagStripAll;
_default$1.StripTagBody = StripTagBody;
_default$1.stripCommentTag = stripCommentTag;
_default$1.stripBlankChar = stripBlankChar;
_default$1.cssFilter = defaultCSSFilter;
_default$1.getDefaultCSSWhiteList = getDefaultCSSWhiteList;
var parser$1 = {};
var _$1 = util;
function getTagName(html) {
  var i = _$1.spaceIndex(html);
  var tagName;
  if (i === -1) {
    tagName = html.slice(1, -1);
  } else {
    tagName = html.slice(1, i + 1);
  }
  tagName = _$1.trim(tagName).toLowerCase();
  if (tagName.slice(0, 1) === "/") tagName = tagName.slice(1);
  if (tagName.slice(-1) === "/") tagName = tagName.slice(0, -1);
  return tagName;
}
function isClosing(html) {
  return html.slice(0, 2) === "</";
}
function parseTag$1(html, onTag2, escapeHtml2) {
  var rethtml = "";
  var lastPos = 0;
  var tagStart = false;
  var quoteStart = false;
  var currentPos = 0;
  var len = html.length;
  var currentTagName = "";
  var currentHtml = "";
  chariterator: for (currentPos = 0; currentPos < len; currentPos++) {
    var c2 = html.charAt(currentPos);
    if (tagStart === false) {
      if (c2 === "<") {
        tagStart = currentPos;
        continue;
      }
    } else {
      if (quoteStart === false) {
        if (c2 === "<") {
          rethtml += escapeHtml2(html.slice(lastPos, currentPos));
          tagStart = currentPos;
          lastPos = currentPos;
          continue;
        }
        if (c2 === ">") {
          rethtml += escapeHtml2(html.slice(lastPos, tagStart));
          currentHtml = html.slice(tagStart, currentPos + 1);
          currentTagName = getTagName(currentHtml);
          rethtml += onTag2(
            tagStart,
            rethtml.length,
            currentTagName,
            currentHtml,
            isClosing(currentHtml)
          );
          lastPos = currentPos + 1;
          tagStart = false;
          continue;
        }
        if (c2 === '"' || c2 === "'") {
          var i = 1;
          var ic = html.charAt(currentPos - i);
          while (ic.trim() === "" || ic === "=") {
            if (ic === "=") {
              quoteStart = c2;
              continue chariterator;
            }
            ic = html.charAt(currentPos - ++i);
          }
        }
      } else {
        if (c2 === quoteStart) {
          quoteStart = false;
          continue;
        }
      }
    }
  }
  if (lastPos < html.length) {
    rethtml += escapeHtml2(html.substr(lastPos));
  }
  return rethtml;
}
var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9\\_:.-]/gim;
function parseAttr$1(html, onAttr2) {
  var lastPos = 0;
  var lastMarkPos = 0;
  var retAttrs = [];
  var tmpName = false;
  var len = html.length;
  function addAttr(name, value) {
    name = _$1.trim(name);
    name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
    if (name.length < 1) return;
    var ret = onAttr2(name, value || "");
    if (ret) retAttrs.push(ret);
  }
  for (var i = 0; i < len; i++) {
    var c2 = html.charAt(i);
    var v2, j2;
    if (tmpName === false && c2 === "=") {
      tmpName = html.slice(lastPos, i);
      lastPos = i + 1;
      lastMarkPos = html.charAt(lastPos) === '"' || html.charAt(lastPos) === "'" ? lastPos : findNextQuotationMark(html, i + 1);
      continue;
    }
    if (tmpName !== false) {
      if (i === lastMarkPos) {
        j2 = html.indexOf(c2, i + 1);
        if (j2 === -1) {
          break;
        } else {
          v2 = _$1.trim(html.slice(lastMarkPos + 1, j2));
          addAttr(tmpName, v2);
          tmpName = false;
          i = j2;
          lastPos = i + 1;
          continue;
        }
      }
    }
    if (/\s|\n|\t/.test(c2)) {
      html = html.replace(/\s|\n|\t/g, " ");
      if (tmpName === false) {
        j2 = findNextEqual(html, i);
        if (j2 === -1) {
          v2 = _$1.trim(html.slice(lastPos, i));
          addAttr(v2);
          tmpName = false;
          lastPos = i + 1;
          continue;
        } else {
          i = j2 - 1;
          continue;
        }
      } else {
        j2 = findBeforeEqual(html, i - 1);
        if (j2 === -1) {
          v2 = _$1.trim(html.slice(lastPos, i));
          v2 = stripQuoteWrap(v2);
          addAttr(tmpName, v2);
          tmpName = false;
          lastPos = i + 1;
          continue;
        } else {
          continue;
        }
      }
    }
  }
  if (lastPos < html.length) {
    if (tmpName === false) {
      addAttr(html.slice(lastPos));
    } else {
      addAttr(tmpName, stripQuoteWrap(_$1.trim(html.slice(lastPos))));
    }
  }
  return _$1.trim(retAttrs.join(" "));
}
function findNextEqual(str, i) {
  for (; i < str.length; i++) {
    var c2 = str[i];
    if (c2 === " ") continue;
    if (c2 === "=") return i;
    return -1;
  }
}
function findNextQuotationMark(str, i) {
  for (; i < str.length; i++) {
    var c2 = str[i];
    if (c2 === " ") continue;
    if (c2 === "'" || c2 === '"') return i;
    return -1;
  }
}
function findBeforeEqual(str, i) {
  for (; i > 0; i--) {
    var c2 = str[i];
    if (c2 === " ") continue;
    if (c2 === "=") return i;
    return -1;
  }
}
function isQuoteWrapString(text) {
  if (text[0] === '"' && text[text.length - 1] === '"' || text[0] === "'" && text[text.length - 1] === "'") {
    return true;
  } else {
    return false;
  }
}
function stripQuoteWrap(text) {
  if (isQuoteWrapString(text)) {
    return text.substr(1, text.length - 2);
  } else {
    return text;
  }
}
parser$1.parseTag = parseTag$1;
parser$1.parseAttr = parseAttr$1;
var FilterCSS = libExports$1.FilterCSS;
var DEFAULT = _default$1;
var parser = parser$1;
var parseTag = parser.parseTag;
var parseAttr = parser.parseAttr;
var _ = util;
function isNull(obj) {
  return obj === void 0 || obj === null;
}
function getAttrs(html) {
  var i = _.spaceIndex(html);
  if (i === -1) {
    return {
      html: "",
      closing: html[html.length - 2] === "/"
    };
  }
  html = _.trim(html.slice(i + 1, -1));
  var isClosing2 = html[html.length - 1] === "/";
  if (isClosing2) html = _.trim(html.slice(0, -1));
  return {
    html,
    closing: isClosing2
  };
}
function shallowCopyObject(obj) {
  var ret = {};
  for (var i in obj) {
    ret[i] = obj[i];
  }
  return ret;
}
function keysToLowerCase(obj) {
  var ret = {};
  for (var i in obj) {
    if (Array.isArray(obj[i])) {
      ret[i.toLowerCase()] = obj[i].map(function(item) {
        return item.toLowerCase();
      });
    } else {
      ret[i.toLowerCase()] = obj[i];
    }
  }
  return ret;
}
function FilterXSS(options) {
  options = shallowCopyObject(options || {});
  if (options.stripIgnoreTag) {
    if (options.onIgnoreTag) {
      console.error(
        'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
      );
    }
    options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
  }
  if (options.whiteList || options.allowList) {
    options.whiteList = keysToLowerCase(options.whiteList || options.allowList);
  } else {
    options.whiteList = DEFAULT.whiteList;
  }
  options.onTag = options.onTag || DEFAULT.onTag;
  options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
  options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
  options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
  options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
  options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
  this.options = options;
  if (options.css === false) {
    this.cssFilter = false;
  } else {
    options.css = options.css || {};
    this.cssFilter = new FilterCSS(options.css);
  }
}
FilterXSS.prototype.process = function(html) {
  html = html || "";
  html = html.toString();
  if (!html) return "";
  var me = this;
  var options = me.options;
  var whiteList = options.whiteList;
  var onTag2 = options.onTag;
  var onIgnoreTag2 = options.onIgnoreTag;
  var onTagAttr2 = options.onTagAttr;
  var onIgnoreTagAttr2 = options.onIgnoreTagAttr;
  var safeAttrValue2 = options.safeAttrValue;
  var escapeHtml2 = options.escapeHtml;
  var cssFilter = me.cssFilter;
  if (options.stripBlankChar) {
    html = DEFAULT.stripBlankChar(html);
  }
  if (!options.allowCommentTag) {
    html = DEFAULT.stripCommentTag(html);
  }
  var stripIgnoreTagBody = false;
  if (options.stripIgnoreTagBody) {
    stripIgnoreTagBody = DEFAULT.StripTagBody(
      options.stripIgnoreTagBody,
      onIgnoreTag2
    );
    onIgnoreTag2 = stripIgnoreTagBody.onIgnoreTag;
  }
  var retHtml = parseTag(
    html,
    function(sourcePosition, position, tag, html2, isClosing2) {
      var info = {
        sourcePosition,
        position,
        isClosing: isClosing2,
        isWhite: Object.prototype.hasOwnProperty.call(whiteList, tag)
      };
      var ret = onTag2(tag, html2, info);
      if (!isNull(ret)) return ret;
      if (info.isWhite) {
        if (info.isClosing) {
          return "</" + tag + ">";
        }
        var attrs = getAttrs(html2);
        var whiteAttrList = whiteList[tag];
        var attrsHtml = parseAttr(attrs.html, function(name, value) {
          var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
          var ret2 = onTagAttr2(tag, name, value, isWhiteAttr);
          if (!isNull(ret2)) return ret2;
          if (isWhiteAttr) {
            value = safeAttrValue2(tag, name, value, cssFilter);
            if (value) {
              return name + '="' + value + '"';
            } else {
              return name;
            }
          } else {
            ret2 = onIgnoreTagAttr2(tag, name, value, isWhiteAttr);
            if (!isNull(ret2)) return ret2;
            return;
          }
        });
        html2 = "<" + tag;
        if (attrsHtml) html2 += " " + attrsHtml;
        if (attrs.closing) html2 += " /";
        html2 += ">";
        return html2;
      } else {
        ret = onIgnoreTag2(tag, html2, info);
        if (!isNull(ret)) return ret;
        return escapeHtml2(html2);
      }
    },
    escapeHtml2
  );
  if (stripIgnoreTagBody) {
    retHtml = stripIgnoreTagBody.remove(retHtml);
  }
  return retHtml;
};
var xss = FilterXSS;
(function(module, exports) {
  var DEFAULT2 = _default$1;
  var parser2 = parser$1;
  var FilterXSS2 = xss;
  function filterXSS(html, options) {
    var xss2 = new FilterXSS2(options);
    return xss2.process(html);
  }
  exports = module.exports = filterXSS;
  exports.filterXSS = filterXSS;
  exports.FilterXSS = FilterXSS2;
  (function() {
    for (var i in DEFAULT2) {
      exports[i] = DEFAULT2[i];
    }
    for (var j2 in parser2) {
      exports[j2] = parser2[j2];
    }
  })();
  function isWorkerEnv() {
    return typeof self !== "undefined" && typeof DedicatedWorkerGlobalScope !== "undefined" && self instanceof DedicatedWorkerGlobalScope;
  }
  if (isWorkerEnv()) {
    self.filterXSS = module.exports;
  }
})(lib$1, lib$1.exports);
var libExports = lib$1.exports;
var isPlainObject = function(value) {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (Object.prototype.toString.call(value) !== "[object Object]") {
    return false;
  }
  var proto = Object.getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
};
var Sanitizer = (
  /** @class */
  function() {
    function Sanitizer2(filterOptions, extendDefaults) {
      var _this = this;
      this.arcgisWhiteList = {
        a: ["href", "style", "target"],
        abbr: ["title"],
        article: ["style"],
        aside: ["style"],
        audio: ["autoplay", "controls", "loop", "muted", "preload"],
        b: [],
        blockquote: ["style"],
        br: [],
        code: ["style"],
        dd: ["style"],
        del: ["style"],
        details: ["open", "style"],
        div: ["align", "aria-hidden", "aria-label", "style"],
        dl: ["style"],
        dt: ["style"],
        em: [],
        figcaption: ["style"],
        figure: ["style"],
        font: ["color", "face", "size", "style"],
        footer: ["style"],
        h1: ["style"],
        h2: ["style"],
        h3: ["style"],
        h4: ["style"],
        h5: ["style"],
        h6: ["style"],
        header: ["style"],
        hr: [],
        i: [],
        img: ["alt", "border", "height", "src", "style", "width"],
        li: [],
        main: ["style"],
        mark: ["style"],
        nav: ["style"],
        ol: [],
        p: ["style"],
        pre: ["style"],
        section: ["style"],
        source: ["media", "src", "type"],
        span: ["aria-hidden", "aria-label", "style"],
        strong: [],
        sub: ["style"],
        summary: ["style"],
        sup: ["style"],
        table: ["border", "cellpadding", "cellspacing", "height", "style", "width"],
        tbody: [],
        tr: ["align", "height", "style", "valign"],
        td: [
          "align",
          "colspan",
          "height",
          "nowrap",
          "rowspan",
          "style",
          "valign",
          "width"
        ],
        th: [
          "align",
          "colspan",
          "height",
          "nowrap",
          "rowspan",
          "style",
          "valign",
          "width"
        ],
        time: ["style"],
        u: [],
        ul: [],
        video: [
          "autoplay",
          "controls",
          "height",
          "loop",
          "muted",
          "poster",
          "preload",
          "width"
        ]
      };
      this.arcgisCSSWhiteList = __assign(__assign({}, libExports.getDefaultCSSWhiteList()), { "align-items": true, "align-self": true, "flex": true, "flex-basis": true, "flex-direction": true, "flex-flow": true, "flex-grow": true, "flex-shrink": true, "flex-wrap": true, "float": true, "gap": true, "grid": true, "grid-area": true, "grid-auto-columns": true, "grid-auto-flow": true, "grid-auto-rows": true, "grid-column": true, "grid-column-end": true, "grid-column-start": true, "grid-row": true, "grid-row-end": true, "grid-row-start": true, "grid-template": true, "grid-template-areas": true, "grid-template-columns": true, "grid-template-rows": true, "justify-content": true, "justify-items": true, "justify-self": true, "line-height": true, "overflow": true });
      this.allowedProtocols = [
        "http",
        "https",
        "mailto",
        "iform",
        "tel",
        "flow",
        "lfmobile",
        "arcgis-navigator",
        "arcgis-appstudio-player",
        "arcgis-survey123",
        "arcgis-collector",
        "arcgis-workforce",
        "arcgis-explorer",
        "arcgis-trek2there",
        "arcgis-quickcapture",
        "mspbi",
        "comgooglemaps",
        "pdfefile",
        "pdfehttp",
        "pdfehttps",
        "boxapp",
        "boxemm",
        "awb",
        "awbs",
        "gropen",
        "radarscope"
      ];
      this.arcgisFilterOptions = {
        allowCommentTag: true,
        safeAttrValue: function(tag, name, value, cssFilter) {
          if (tag === "a" && name === "href" || (tag === "img" || tag === "source") && name === "src") {
            return _this.sanitizeUrl(value);
          }
          return libExports.safeAttrValue(tag, name, value, cssFilter);
        }
      };
      this._entityMap = {
        "&": "&#x38;",
        "<": "&#x3C;",
        ">": "&#x3E;",
        '"': "&#x22;",
        "'": "&#x27;",
        "/": "&#x2F;"
      };
      var xssFilterOptions;
      if (filterOptions && !extendDefaults) {
        xssFilterOptions = filterOptions;
      } else if (filterOptions && extendDefaults) {
        xssFilterOptions = Object.create(this.arcgisFilterOptions);
        xssFilterOptions.css = { whiteList: this.arcgisCSSWhiteList };
        Object.keys(filterOptions).forEach(function(key) {
          if (key === "whiteList") {
            xssFilterOptions.whiteList = _this._extendObjectOfArrays([
              _this.arcgisWhiteList,
              filterOptions.whiteList || {}
            ]);
          } else if (key === "css") {
            var cssExtensions_1 = filterOptions.css.whiteList;
            if (cssExtensions_1 != null && filterOptions.css instanceof Object) {
              Object.keys(cssExtensions_1).forEach(function(attr) {
                return xssFilterOptions.css.whiteList[attr] = cssExtensions_1[attr];
              });
            }
          } else {
            xssFilterOptions[key] = filterOptions[key];
          }
        });
      } else {
        xssFilterOptions = Object.create(this.arcgisFilterOptions);
        xssFilterOptions.whiteList = this.arcgisWhiteList;
        xssFilterOptions.css = { whiteList: this.arcgisCSSWhiteList };
      }
      this.xssFilterOptions = xssFilterOptions;
      this._xssFilter = new libExports.FilterXSS(xssFilterOptions);
    }
    Sanitizer2.prototype.sanitize = function(value, options) {
      if (options === void 0) {
        options = {};
      }
      switch (typeof value) {
        case "number":
          if (isNaN(value) || !isFinite(value)) {
            return null;
          }
          return value;
        case "boolean":
          return value;
        case "string":
          return this._xssFilter.process(value);
        case "object":
          return this._iterateOverObject(value, options);
        default:
          if (options.allowUndefined && typeof value === "undefined") {
            return;
          }
          return null;
      }
    };
    Sanitizer2.prototype.sanitizeUrl = function(value, options) {
      var _a = (options !== null && options !== void 0 ? options : {}).isProtocolRequired, isProtocolRequired = _a === void 0 ? true : _a;
      var protocol = this._trim(value.substring(0, value.indexOf(":")));
      var isRootUrl = value === "/";
      var isUrlFragment = /^#/.test(value);
      var isValidProtocol = protocol && this.allowedProtocols.indexOf(protocol.toLowerCase()) > -1;
      if (isRootUrl || isUrlFragment || isValidProtocol) {
        return libExports.escapeAttrValue(value);
      }
      if (!protocol && !isProtocolRequired) {
        return libExports.escapeAttrValue("https://".concat(value));
      }
      return "";
    };
    Sanitizer2.prototype.sanitizeHTMLAttribute = function(tag, attribute, value, cssFilter) {
      if (typeof this.xssFilterOptions.safeAttrValue === "function") {
        return this.xssFilterOptions.safeAttrValue(
          tag,
          attribute,
          value,
          // @ts-expect-error safeAttrValue does handle undefined cssFilter
          cssFilter
        );
      }
      return libExports.safeAttrValue(tag, attribute, value, cssFilter);
    };
    Sanitizer2.prototype.validate = function(value, options) {
      if (options === void 0) {
        options = {};
      }
      var sanitized = this.sanitize(value, options);
      return {
        isValid: value === sanitized,
        sanitized
      };
    };
    Sanitizer2.prototype.encodeHTML = function(value) {
      var _this = this;
      return String(value).replace(/[&<>"'\/]/g, function(s) {
        return _this._entityMap[s];
      });
    };
    Sanitizer2.prototype.encodeAttrValue = function(value) {
      var alphanumericRE = /^[a-zA-Z0-9]$/;
      return String(value).replace(/[\x00-\xFF]/g, function(c2, idx) {
        return !alphanumericRE.test(c2) ? "&#x".concat(Number(value.charCodeAt(idx)).toString(16), ";") : c2;
      });
    };
    Sanitizer2.prototype._extendObjectOfArrays = function(objects) {
      var finalObj = {};
      objects.forEach(function(obj) {
        Object.keys(obj).forEach(function(key) {
          if (Array.isArray(obj[key]) && Array.isArray(finalObj[key])) {
            finalObj[key] = finalObj[key].concat(obj[key]);
          } else {
            finalObj[key] = obj[key];
          }
        });
      });
      return finalObj;
    };
    Sanitizer2.prototype._iterateOverObject = function(obj, options) {
      var _this = this;
      if (options === void 0) {
        options = {};
      }
      try {
        var hasChanged_1 = false;
        var changedObj = void 0;
        if (Array.isArray(obj)) {
          changedObj = obj.reduce(function(prev, value) {
            var validation = _this.validate(value, options);
            if (validation.isValid) {
              return prev.concat([value]);
            } else {
              hasChanged_1 = true;
              return prev.concat([validation.sanitized]);
            }
          }, []);
        } else if (!isPlainObject(obj)) {
          if (options.allowUndefined && typeof obj === "undefined") {
            return;
          }
          return null;
        } else {
          var keys = Object.keys(obj);
          changedObj = keys.reduce(function(prev, key) {
            var value = obj[key];
            var validation = _this.validate(value, options);
            if (validation.isValid) {
              prev[key] = value;
            } else {
              hasChanged_1 = true;
              prev[key] = validation.sanitized;
            }
            return prev;
          }, {});
        }
        if (hasChanged_1) {
          return changedObj;
        }
        return obj;
      } catch (err) {
        return null;
      }
    };
    Sanitizer2.prototype._trim = function(val) {
      return String.prototype.trim ? val.trim() : val.replace(/(^\s*)|(\s*$)/g, "");
    };
    return Sanitizer2;
  }()
);

// node_modules/@arcgis/core/widgets/support/vnodeCache.js
var n = /* @__PURE__ */ new Map();
function t3() {
  n.clear();
}
function e2(t4) {
  return n.get(t4);
}
function c(t4, e3) {
  n.set(t4, e3);
}
function o(t4) {
  n.delete(t4);
}

// node_modules/@arcgis/core/widgets/support/widgetUtils.js
function v(...e3) {
  const n2 = t2.acquire();
  for (let t4 = 0; t4 < e3.length; t4++) {
    const r2 = e3[t4], i = typeof r2;
    if ("string" === i) n2.push(r2);
    else if (Array.isArray(r2)) n2.push.apply(n2, r2);
    else if ("object" === i) for (const e4 in r2) r2[e4] && n2.push(e4);
  }
  const r = n2.join(" ");
  return t2.release(n2), r;
}
var h = (() => {
  const e3 = /* @__PURE__ */ new Map(), t4 = new ResizeObserver((t5) => {
    var _a;
    t3();
    for (const n2 of t5) (_a = e3.get(n2.target)) == null ? void 0 : _a(n2);
  }), i = (n2, i2, o2) => (e3.set(n2, i2), t4.observe(n2, o2), e(() => {
    t4.unobserve(n2), e3.delete(n2);
  }));
  return (e4, t5, a) => {
    let c2 = null;
    return t([d(() => "function" == typeof e4 ? e4() : e4, (e5) => {
      c2 == null ? void 0 : c2.remove(), e5 && (c2 = i(e5, t5, a));
    }, A), e(() => c2 == null ? void 0 : c2.remove())]);
  };
})();
function g(e3) {
  const t4 = e3 == null ? void 0 : e3.closest("[dir]");
  return null !== t4 && t4 instanceof HTMLElement && "rtl" === t4.dir || "rtl" === document.dir;
}
function w(e3) {
  const t4 = "data-node-ref";
  this[e3.getAttribute(t4)] = null;
}
function y(e3) {
  const t4 = "data-node-ref";
  this[e3.getAttribute(t4)] = e3;
}
var b = ["dd", "dl", "dt", "h1", "h2", "h3", "h4", "h5", "h6", "sub", "sup", ...["animate", "animatetransform", "circle", "clippath", "defs", "ellipse", "g", "image", "line", "lineargradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "svg", "switch", "symbol", "text", "textpath", "tspan", "use"]];
var E = b.reduce((e3, t4) => (e3[t4] = [], e3), {});
var j = ["align", "alink", "alt", "bgcolor", "border", "cellpadding", "cellspacing", "class", "color", "cols", "colspan", "coords", "d", "dir", "face", "height", "hspace", "ismap", "lang", "marginheight", "marginwidth", "multiple", "nohref", "noresize", "noshade", "nowrap", "ref", "rel", "rev", "rows", "rowspan", "scrolling", "shape", "span", "summary", "tabindex", "title", "usemap", "valign", "value", "vlink", "vspace", "width"];
var A2 = new Sanitizer({ whiteList: E, onTagAttr: (e3, t4, n2) => {
  const r = `${t4}="${n2}"`;
  if (j.includes(t4)) return r;
}, stripIgnoreTag: true, stripIgnoreTagBody: ["script", "style"] }, true);
function k(e3) {
  return "Enter" === e3 || " " === e3;
}
async function T(e3, t4) {
  await R(l(t4));
  const n2 = "function" == typeof e3 ? e3() : e3;
  n2 && ("setFocus" in n2 && "function" == typeof n2.setFocus ? await n2.setFocus() : n2 instanceof HTMLElement && n2.focus());
}

export {
  t3 as t,
  e2 as e,
  c,
  o,
  v,
  g,
  w,
  y,
  A2 as A,
  k,
  T
};
/*! Bundled license information:

@esri/arcgis-html-sanitizer/dist/esm/index.js:
  (*!
   * @esri/arcgis-html-sanitizer - v4.1.0 - Tue Dec 03 2024 09:13:28 GMT-0500 (Eastern Standard Time)
   * Copyright (c) 2024 - Environmental Systems Research Institute, Inc.
   * Apache-2.0
   * 
   * js-xss
   * Copyright (c) 2012-2018 Zongmin Lei(雷宗民) <leizongmin@gmail.com>
   * http://ucdok.com
   * MIT License, see https://github.com/leizongmin/js-xss/blob/master/LICENSE for details
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=chunk-BSRIVWBN.js.map
