// node_modules/@arcgis/core/core/bidiEngineTables.js
var A = [["(", ")"], [")", "("], ["<", ">"], [">", "<"], ["[", "]"], ["]", "["], ["{", "}"], ["}", "{"], ["«", "»"], ["»", "«"], ["‹", "›"], ["›", "‹"], ["⁽", "⁾"], ["⁾", "⁽"], ["₍", "₎"], ["₎", "₍"], ["≤", "≥"], ["≥", "≤"], ["〈", "〉"], ["〉", "〈"], ["﹙", "﹚"], ["﹚", "﹙"], ["﹛", "﹜"], ["﹜", "﹛"], ["﹝", "﹞"], ["﹞", "﹝"], ["﹤", "﹥"], ["﹥", "﹤"]];
var B = ["آ", "أ", "إ", "ا"];
var T = ["ﻵ", "ﻷ", "ﻹ", "ﻻ"];
var U = ["ﻶ", "ﻸ", "ﻺ", "ﻼ"];
var _ = ["ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ", "ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي", "إ", "أ", "آ", "ة", "ى", "ل", "م", "ن", "ه", "و", "ي", "إ", "أ", "آ", "ة", "ى", "ی", "ئ", "ؤ"];
var L = ["ﺍ", "ﺏ", "ﺕ", "ﺙ", "ﺝ", "ﺡ", "ﺥ", "ﺩ", "ﺫ", "ﺭ", "ﺯ", "ﺱ", "ﺵ", "ﺹ", "ﺽ", "ﻁ", "ﻅ", "ﻉ", "ﻍ", "ﻑ", "ﻕ", "ﻙ", "ﻝ", "ﻡ", "ﻥ", "ﻩ", "ﻭ", "ﻱ", "ﺇ", "ﺃ", "ﺁ", "ﺓ", "ﻯ", "ﯼ", "ﺉ", "ﺅ", "ﹰ", "ﹲ", "ﹴ", "ﹶ", "ﹸ", "ﹺ", "ﹼ", "ﹾ", "ﺀ", "ﺉ", "ﺅ"];
var E = ["ﺎ", "ﺐ", "ﺖ", "ﺚ", "ﺞ", "ﺢ", "ﺦ", "ﺪ", "ﺬ", "ﺮ", "ﺰ", "ﺲ", "ﺶ", "ﺺ", "ﺾ", "ﻂ", "ﻆ", "ﻊ", "ﻎ", "ﻒ", "ﻖ", "ﻚ", "ﻞ", "ﻢ", "ﻦ", "ﻪ", "ﻮ", "ﻲ", "ﺈ", "ﺄ", "ﺂ", "ﺔ", "ﻰ", "ﯽ", "ﺊ", "ﺆ", "ﹰ", "ﹲ", "ﹴ", "ﹶ", "ﹸ", "ﹺ", "ﹼ", "ﹾ", "ﺀ", "ﺊ", "ﺆ"];
var N = ["ﺎ", "ﺒ", "ﺘ", "ﺜ", "ﺠ", "ﺤ", "ﺨ", "ﺪ", "ﺬ", "ﺮ", "ﺰ", "ﺴ", "ﺸ", "ﺼ", "ﻀ", "ﻄ", "ﻈ", "ﻌ", "ﻐ", "ﻔ", "ﻘ", "ﻜ", "ﻠ", "ﻤ", "ﻨ", "ﻬ", "ﻮ", "ﻴ", "ﺈ", "ﺄ", "ﺂ", "ﺔ", "ﻰ", "ﯿ", "ﺌ", "ﺆ", "ﹱ", "ﹲ", "ﹴ", "ﹷ", "ﹹ", "ﹻ", "ﹽ", "ﹿ", "ﺀ", "ﺌ", "ﺆ"];
var R = ["ﺍ", "ﺑ", "ﺗ", "ﺛ", "ﺟ", "ﺣ", "ﺧ", "ﺩ", "ﺫ", "ﺭ", "ﺯ", "ﺳ", "ﺷ", "ﺻ", "ﺿ", "ﻃ", "ﻇ", "ﻋ", "ﻏ", "ﻓ", "ﻗ", "ﻛ", "ﻟ", "ﻣ", "ﻧ", "ﻫ", "ﻭ", "ﻳ", "ﺇ", "ﺃ", "ﺁ", "ﺓ", "ﻯ", "ﯾ", "ﺋ", "ﺅ", "ﹰ", "ﹲ", "ﹴ", "ﹶ", "ﹸ", "ﹺ", "ﹼ", "ﹾ", "ﺀ", "ﺋ", "ﺅ"];
var S = ["ء", "آ", "أ", "ؤ", "إ", "ا", "ة", "د", "ذ", "ر", "ز", "و", "ى"];
var O = ["ً", "ً", "ٌ", "؟", "ٍ", "؟", "َ", "َ", "ُ", "ُ", "ِ", "ِ", "ّ", "ّ", "ْ", "ْ", "ء", "آ", "آ", "أ", "أ", "ؤ", "ؤ", "إ", "إ", "ئ", "ئ", "ئ", "ئ", "ا", "ا", "ب", "ب", "ب", "ب", "ة", "ة", "ت", "ت", "ت", "ت", "ث", "ث", "ث", "ث", "ج", "ج", "ج", "ج", "ح", "ح", "ح", "ح", "خ", "خ", "خ", "خ", "د", "د", "ذ", "ذ", "ر", "ر", "ز", "ز", "س", "س", "س", "س", "ش", "ش", "ش", "ش", "ص", "ص", "ص", "ص", "ض", "ض", "ض", "ض", "ط", "ط", "ط", "ط", "ظ", "ظ", "ظ", "ظ", "ع", "ع", "ع", "ع", "غ", "غ", "غ", "غ", "ف", "ف", "ف", "ف", "ق", "ق", "ق", "ق", "ك", "ك", "ك", "ك", "ل", "ل", "ل", "ل", "م", "م", "م", "م", "ن", "ن", "ن", "ن", "ه", "ه", "ه", "ه", "و", "و", "ى", "ى", "ي", "ي", "ي", "ي", "ﻵ", "ﻶ", "ﻷ", "ﻸ", "ﻹ", "ﻺ", "ﻻ", "ﻼ", "؟", "؟", "؟"];
var o = ["ء", "ف"];
var t = ["غ", "ي"];
var c = [[0, 3, 0, 1, 0, 0, 0], [0, 3, 0, 1, 2, 2, 0], [0, 3, 0, 17, 2, 0, 1], [0, 3, 5, 5, 4, 1, 0], [0, 3, 21, 21, 4, 0, 1], [0, 3, 5, 5, 4, 2, 0]];
var e = [[2, 0, 1, 1, 0, 1, 0], [2, 0, 1, 1, 0, 2, 0], [2, 0, 2, 1, 3, 2, 0], [2, 0, 2, 33, 3, 1, 1]];
var n = 0;
var p = 1;
var r = 2;
var s = 3;
var x = 4;
var C = 5;
var D = 6;
var F = 7;
var M = 8;
var P = 9;
var W = 10;
var a = 11;
var b = 12;
var d = 13;
var f = 14;
var g = 15;
var h = 16;
var i = 17;
var j = 18;
var k = ["UBAT_L", "UBAT_R", "UBAT_EN", "UBAT_AN", "UBAT_ON", "UBAT_B", "UBAT_S", "UBAT_AL", "UBAT_WS", "UBAT_CS", "UBAT_ES", "UBAT_ET", "UBAT_NSM", "UBAT_LRE", "UBAT_RLE", "UBAT_PDF", "UBAT_LRO", "UBAT_RLO", "UBAT_BN"];
var l = 100;
var m = [l + 0, n, n, n, n, l + 1, l + 2, l + 3, p, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, l + 4, x, x, x, n, x, n, x, n, x, x, x, n, n, x, x, n, n, n, n, n, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, n, n, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, n, n, n, n, n, n, n, n, n, n, n, n, n, n, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, n, n, x, x, n, n, x, x, n, n, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, n, n, n, l + 5, F, F, l + 6, l + 7];
var q = [[j, j, j, j, j, j, j, j, j, D, C, D, M, C, j, j, j, j, j, j, j, j, j, j, j, j, j, j, C, C, C, D, M, x, x, a, a, a, x, x, x, x, x, W, P, W, P, P, r, r, r, r, r, r, r, r, r, r, P, x, x, x, x, x, x, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, x, x, x, x, x, x, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, x, x, x, x, j, j, j, j, j, j, C, j, j, j, j, j, j, j, j, j, j, j, j, j, j, j, j, j, j, j, j, j, j, j, j, j, j, P, x, a, a, a, a, x, x, x, x, n, x, x, j, x, x, a, a, r, r, x, n, x, x, x, r, n, x, x, x, x, x, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, x, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, x, n, n, n, n, n, n, n, n], [n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, x, x, x, x, x, x, x, x, x, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, x, x, n, n, n, n, n, n, n, x, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, x, n, x, x, x, x, x, x, x, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, p, b, p, b, b, p, b, b, p, b, x, x, x, x, x, x, x, x, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, x, x, x, x, x, p, p, p, p, p, x, x, x, x, x, x, x, x, x, x, x], [s, s, s, s, x, x, x, x, F, a, a, F, P, F, x, x, b, b, b, b, b, b, b, b, b, b, b, F, x, x, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, s, s, s, s, s, s, s, s, s, s, a, s, s, F, F, F, b, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, b, b, b, b, b, b, b, s, x, b, b, b, b, b, b, F, F, b, b, x, b, b, b, b, F, F, r, r, r, r, r, r, r, r, r, r, F, F, F, F, F, F], [F, F, F, F, F, F, F, F, F, F, F, F, F, F, x, F, F, b, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, x, x, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, b, b, b, b, b, b, b, b, b, b, b, F, x, x, x, x, x, x, x, x, x, x, x, x, x, x, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, p, b, b, b, b, b, b, b, b, b, p, p, x, x, x, x, p, x, x, x, x, x], [M, M, M, M, M, M, M, M, M, M, M, j, j, j, n, p, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, M, C, d, f, g, h, i, P, a, a, a, a, a, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, P, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, M, j, j, j, j, j, x, x, x, x, x, j, j, j, j, j, j, r, n, x, x, r, r, r, r, r, r, W, W, x, x, x, n, r, r, r, r, r, r, r, r, r, r, W, W, x, x, x, x, n, n, n, n, n, n, n, n, n, n, n, n, n, x, x, x, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, a, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x], [n, n, n, n, n, n, n, x, x, x, x, x, x, x, x, x, x, x, x, n, n, n, n, n, x, x, x, x, x, p, b, p, p, p, p, p, p, p, p, p, p, W, p, p, p, p, p, p, p, p, p, p, p, p, p, x, p, p, p, p, p, x, p, x, p, p, x, p, p, x, p, p, p, p, p, p, p, p, p, p, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F], [b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, b, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, b, b, b, b, b, b, b, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, P, x, P, x, x, P, x, x, x, x, x, x, x, x, x, a, x, x, W, W, x, x, x, x, x, a, a, x, x, x, x, x, F, F, F, F, F, x, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, F, x, x, j], [x, x, x, a, a, a, x, x, x, x, x, W, P, W, P, P, r, r, r, r, r, r, r, r, r, r, P, x, x, x, x, x, x, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, x, x, x, x, x, x, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, x, x, x, x, x, x, x, x, x, x, x, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, n, x, x, x, n, n, n, n, n, n, x, x, n, n, n, n, n, n, x, x, n, n, n, n, n, n, x, x, n, n, n, x, x, x, a, a, x, x, x, a, a, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x]];

// node_modules/@arcgis/core/core/BidiEngine.js
var C2 = class {
  constructor() {
    this.inputFormat = "ILYNN", this.outputFormat = "VLNNN", this.sourceToTarget = [], this.targetToSource = [], this.levels = [];
  }
  bidiTransform(t2, r2, e2) {
    if (this.sourceToTarget = [], this.targetToSource = [], !t2) return "";
    if (ot(this.sourceToTarget, this.targetToSource, t2.length), !this.checkParameters(r2, e2)) return t2;
    r2 = this.inputFormat, e2 = this.outputFormat;
    let n2 = t2;
    const o2 = ft, i2 = rt(r2.charAt(1)), a2 = rt(e2.charAt(1)), u = ("I" === r2.charAt(0) ? "L" : r2.charAt(0)) + i2, s2 = ("I" === e2.charAt(0) ? "L" : e2.charAt(0)) + a2, c2 = r2.charAt(2) + e2.charAt(2);
    o2.defInFormat = u, o2.defOutFormat = s2, o2.defSwap = c2;
    const f2 = V(t2, u, s2, c2, o2);
    let l2 = false;
    return "R" === e2.charAt(1) ? l2 = true : "C" !== e2.charAt(1) && "D" !== e2.charAt(1) || (l2 = "rtl" === this.checkContextual(f2)), this.sourceToTarget = ut, this.targetToSource = it(this.sourceToTarget), st = this.targetToSource, n2 = r2.charAt(3) === e2.charAt(3) ? f2 : "S" === e2.charAt(3) ? I(l2, f2) : k2(f2, l2, true), this.sourceToTarget = ut, this.targetToSource = st, this.levels = ct, n2;
  }
  _inputFormatSetter(t2) {
    if (!At.test(t2)) throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");
    this.inputFormat = t2;
  }
  _outputFormatSetter(t2) {
    if (!At.test(t2)) throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");
    this.outputFormat = t2;
  }
  checkParameters(t2, r2) {
    return t2 ? this._inputFormatSetter(t2) : t2 = this.inputFormat, r2 ? this._outputFormatSetter(r2) : r2 = this.outputFormat, t2 !== r2;
  }
  checkContextual(t2) {
    let r2 = x2(t2);
    if ("ltr" !== r2 && "rtl" !== r2) {
      try {
        r2 = document.dir.toLowerCase();
      } catch (e2) {
      }
      "ltr" !== r2 && "rtl" !== r2 && (r2 = "ltr");
    }
    return r2;
  }
  hasBidiChar(t2) {
    return dt.test(t2);
  }
};
function V(t2, r2, e2, n2, o2) {
  const i2 = E2(t2, { inFormat: r2, outFormat: e2, swap: n2 }, o2);
  if (i2.inFormat === i2.outFormat) return t2;
  r2 = i2.inFormat, e2 = i2.outFormat, n2 = i2.swap;
  const a2 = r2.slice(0, 1), u = r2.slice(1, 4), s2 = e2.slice(0, 1), c2 = e2.slice(1, 4);
  if (o2.inFormat = r2, o2.outFormat = e2, o2.swap = n2, "L" === a2 && "VLTR" === e2) {
    if ("LTR" === u) return o2.dir = Tt, y(t2, o2);
    if ("RTL" === u) return o2.dir = Lt, y(t2, o2);
  }
  if ("V" === a2 && "V" === s2) return o2.dir = "RTL" === u ? Lt : Tt, M2(t2, o2);
  if ("L" === a2 && "VRTL" === e2) return "LTR" === u ? (o2.dir = Tt, t2 = y(t2, o2)) : (o2.dir = Lt, t2 = y(t2, o2)), M2(t2);
  if ("VLTR" === r2 && "LLTR" === e2) return o2.dir = Tt, y(t2, o2);
  if ("V" === a2 && "L" === s2 && u !== c2) return t2 = M2(t2), "RTL" === u ? V(t2, "LLTR", "VLTR", n2, o2) : V(t2, "LRTL", "VRTL", n2, o2);
  if ("VRTL" === r2 && "LRTL" === e2) return V(t2, "LRTL", "VRTL", n2, o2);
  if ("L" === a2 && "L" === s2) {
    const r3 = o2.swap;
    return o2.swap = r3.slice(0, 1) + "N", "RTL" === u ? (o2.dir = Lt, t2 = y(t2, o2), o2.swap = "N" + r3.slice(1, 3), o2.dir = Tt, t2 = y(t2, o2)) : (o2.dir = Tt, t2 = y(t2, o2), o2.swap = "N" + r3.slice(1, 3), t2 = V(t2, "VLTR", "LRTL", o2.swap, o2)), t2;
  }
  return t2;
}
function E2(t2, r2, e2) {
  if (void 0 === r2.inFormat && (r2.inFormat = e2.defInFormat), void 0 === r2.outFormat && (r2.outFormat = e2.defOutFormat), void 0 === r2.swap && (r2.swap = e2.defSwap), r2.inFormat === r2.outFormat) return r2;
  const n2 = r2.inFormat.slice(0, 1), o2 = r2.outFormat.slice(0, 1);
  let i2, a2 = r2.inFormat.slice(1, 4), u = r2.outFormat.slice(1, 4);
  return "C" === a2.charAt(0) && (i2 = x2(t2), a2 = "ltr" === i2 || "rtl" === i2 ? i2.toUpperCase() : "L" === r2.inFormat.charAt(2) ? "LTR" : "RTL", r2.inFormat = n2 + a2), "C" === u.charAt(0) && (i2 = x2(t2), "rtl" === i2 ? u = "RTL" : "ltr" === i2 ? (i2 = O2(t2), u = i2.toUpperCase()) : u = "L" === r2.outFormat.charAt(2) ? "LTR" : "RTL", r2.outFormat = o2 + u), r2;
}
function I(t2, r2, e2) {
  if (0 === r2.length) return "";
  void 0 === t2 && (t2 = true);
  const n2 = (r2 = String(r2)).split("");
  let o2 = 0, i2 = 1, a2 = n2.length;
  t2 || (o2 = n2.length - 1, i2 = -1, a2 = 1);
  const u = j2(n2, o2, i2, a2);
  let s2 = "";
  for (let c2 = 0; c2 < n2.length; c2++) W2(u, u.length, c2) > -1 ? (at(st, c2, !t2, -1), ut.splice(c2, 1)) : s2 += n2[c2];
  return s2;
}
function j2(t2, r2, e2, n2, o2) {
  let i2 = 0;
  const a2 = [];
  let u = 0;
  for (let s2 = r2; s2 * e2 < n2; s2 += e2) if (Z(t2[s2]) || tt(t2[s2])) {
    if ("ل" === t2[s2] && q2(t2, s2 + e2, e2, n2)) {
      t2[s2] = nt(t2[s2 + e2], 0 === i2 ? T : U), s2 += e2, et(t2, s2, e2, n2), a2[u] = s2, u++, i2 = 0;
      continue;
    }
    const r3 = t2[s2];
    1 === i2 ? t2[s2] = $(t2, s2 + e2, e2, n2) ? Q(t2[s2]) : X(t2[s2], E) : true === $(t2, s2 + e2, e2, n2) ? t2[s2] = X(t2[s2], R) : t2[s2] = X(t2[s2], L), tt(r3) || (i2 = 1), true === K(r3) && (i2 = 0);
  } else i2 = 0;
  return a2;
}
function x2(t2) {
  const r2 = /[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(t2);
  return r2 ? r2[0] <= "z" ? "ltr" : "rtl" : "";
}
function O2(t2) {
  const r2 = t2.split("");
  return r2.reverse(), x2(r2.join(""));
}
function k2(e2, n2, o2) {
  if (0 === e2.length) return "";
  void 0 === n2 && (n2 = true);
  let i2 = "";
  const a2 = (e2 = String(e2)).split("");
  for (let u = 0; u < e2.length; u++) {
    let s2 = false;
    if (a2[u] >= "ﹰ" && a2[u] < "\uFEFF") {
      const c2 = e2.charCodeAt(u);
      a2[u] >= "ﻵ" && a2[u] <= "ﻼ" ? (n2 ? (u > 0 && o2 && " " === a2[u - 1] ? i2 = i2.slice(0, -1) + "ل" : (i2 += "ل", s2 = true), i2 += B[(c2 - 65269) / 2]) : (i2 += B[(c2 - 65269) / 2], i2 += "ل", u + 1 < e2.length && o2 && " " === a2[u + 1] ? u++ : s2 = true), s2 && (at(st, u, true, 1), ut.splice(u, 0, ut[u]))) : i2 += O[c2 - 65136];
    } else i2 += a2[u];
  }
  return i2;
}
function y(t2, r2) {
  const e2 = t2.split(""), n2 = [];
  return D2(e2, n2, r2), P2(e2, n2, r2), G(2, e2, n2, r2), G(1, e2, n2, r2), ct = n2, e2.join("");
}
function D2(t2, r2, i2) {
  const a2 = t2.length, u = i2.dir ? e : c;
  let s2 = 0, c2 = -1;
  const f2 = [], l2 = [];
  i2.hiLevel = i2.dir, i2.lastArabic = false, i2.hasUbatAl = false, i2.hasUbatB = false, i2.hasUbatS = false;
  for (let e2 = 0; e2 < a2; e2++) f2[e2] = z(t2[e2]);
  for (let e2 = 0; e2 < a2; e2++) {
    const n2 = s2, a3 = H(t2, f2, l2, e2, i2);
    l2[e2] = a3, s2 = u[n2][a3];
    const h2 = 240 & s2;
    s2 &= 15;
    const T2 = u[s2][lt];
    if (r2[e2] = T2, h2 > 0) if (16 === h2) {
      for (let t3 = c2; t3 < e2; t3++) r2[t3] = 1;
      c2 = -1;
    } else c2 = -1;
    if (u[s2][ht]) -1 === c2 && (c2 = e2);
    else if (c2 > -1) {
      for (let t3 = c2; t3 < e2; t3++) r2[t3] = T2;
      c2 = -1;
    }
    f2[e2] === C && (r2[e2] = 0), i2.hiLevel |= T2;
  }
  i2.hasUbatS && Y(f2, r2, a2, i2);
}
function Y(t2, r2, e2, n2) {
  for (let o2 = 0; o2 < e2; o2++) if (t2[o2] === D) {
    r2[o2] = n2.dir;
    for (let e3 = o2 - 1; e3 >= 0 && t2[e3] === M; e3--) r2[e3] = n2.dir;
  }
}
function P2(t2, r2, e2) {
  if (0 !== e2.hiLevel && e2.swap[0] !== e2.swap[1]) for (let n2 = 0; n2 < t2.length; n2++) 1 === r2[n2] && (t2[n2] = J(t2[n2]));
}
function z(t2) {
  const r2 = t2.charCodeAt(0), e2 = m[r2 >> 8];
  return e2 < l ? e2 : q[e2 - l][255 & r2];
}
function M2(t2, r2) {
  const e2 = t2.split("");
  if (r2) {
    const t3 = [];
    D2(e2, t3, r2), ct = t3;
  }
  return e2.reverse(), ut.reverse(), e2.join("");
}
function W2(t2, r2, e2) {
  for (let n2 = 0; n2 < r2; n2++) if (t2[n2] === e2) return n2;
  return -1;
}
function Z(t2) {
  for (let r2 = 0; r2 < o.length; r2++) if (t2 >= o[r2] && t2 <= t[r2]) return true;
  return false;
}
function $(t2, r2, e2, n2) {
  for (; r2 * e2 < n2 && tt(t2[r2]); ) r2 += e2;
  return !!(r2 * e2 < n2 && Z(t2[r2]));
}
function q2(r2, e2, n2, o2) {
  for (; e2 * n2 < o2 && tt(r2[e2]); ) e2 += n2;
  let i2 = " ";
  if (!(e2 * n2 < o2)) return false;
  i2 = r2[e2];
  for (let a2 = 0; a2 < B.length; a2++) if (B[a2] === i2) return true;
  return false;
}
function G(t2, r2, e2, n2) {
  if (n2.hiLevel < t2) return;
  if (1 === t2 && n2.dir === Lt && !n2.hasUbatB) return r2.reverse(), void ut.reverse();
  const o2 = r2.length;
  let i2, a2, u, s2, c2, f2 = 0;
  for (; f2 < o2; ) {
    if (e2[f2] >= t2) {
      for (i2 = f2 + 1; i2 < o2 && e2[i2] >= t2; ) i2++;
      for (a2 = f2, u = i2 - 1; a2 < u; a2++, u--) s2 = r2[a2], r2[a2] = r2[u], r2[u] = s2, c2 = ut[a2], ut[a2] = ut[u], ut[u] = c2;
      f2 = i2;
    }
    f2++;
  }
}
function H(t2, r2, e2, n2, i2) {
  const a2 = r2[n2];
  return { UBAT_L: () => (i2.lastArabic = false, n), UBAT_R: () => (i2.lastArabic = false, p), UBAT_ON: () => x, UBAT_AN: () => s, UBAT_EN: () => i2.lastArabic ? s : r, UBAT_AL: () => (i2.lastArabic = true, i2.hasUbatAl = true, p), UBAT_WS: () => x, UBAT_CS: () => {
    let t3, o2;
    return n2 < 1 || n2 + 1 >= r2.length || (t3 = e2[n2 - 1]) !== r && t3 !== s || (o2 = r2[n2 + 1]) !== r && o2 !== s ? x : (i2.lastArabic && (o2 = s), o2 === t3 ? o2 : x);
  }, UBAT_ES: () => (n2 > 0 ? e2[n2 - 1] : C) === r && n2 + 1 < r2.length && r2[n2 + 1] === r ? r : x, UBAT_ET: () => {
    if (n2 > 0 && e2[n2 - 1] === r) return r;
    if (i2.lastArabic) return x;
    let t3 = n2 + 1;
    const o2 = r2.length;
    for (; t3 < o2 && r2[t3] === a; ) t3++;
    return t3 < o2 && r2[t3] === r ? r : x;
  }, UBAT_NSM: () => {
    if ("VLTR" === i2.inFormat) {
      const e3 = r2.length;
      let o2 = n2 + 1;
      for (; o2 < e3 && r2[o2] === b; ) o2++;
      if (o2 < e3) {
        const e4 = t2[n2].charCodeAt(0), i3 = e4 >= 1425 && e4 <= 2303 || 64286 === e4, a3 = r2[o2];
        if (i3 && (a3 === p || a3 === F)) return p;
      }
    }
    return n2 < 1 || r2[n2 - 1] === C ? x : e2[n2 - 1];
  }, UBAT_B: () => (i2.lastArabic = true, i2.hasUbatB = true, i2.dir), UBAT_S: () => (i2.hasUbatS = true, x), UBAT_LRE: () => (i2.lastArabic = false, x), UBAT_RLE: () => (i2.lastArabic = false, x), UBAT_LRO: () => (i2.lastArabic = false, x), UBAT_RLO: () => (i2.lastArabic = false, x), UBAT_PDF: () => (i2.lastArabic = false, x), UBAT_BN: () => x }[k[a2]]();
}
function J(t2) {
  let r2, e2 = 0, n2 = A.length - 1;
  for (; e2 <= n2; ) if (r2 = Math.floor((e2 + n2) / 2), t2 < A[r2][0]) n2 = r2 - 1;
  else {
    if (!(t2 > A[r2][0])) return A[r2][1];
    e2 = r2 + 1;
  }
  return t2;
}
function K(t2) {
  for (let r2 = 0; r2 < S.length; r2++) if (S[r2] === t2) return true;
  return false;
}
function Q(t2) {
  for (let r2 = 0; r2 < _.length; r2++) if (t2 === _[r2]) return N[r2];
  return t2;
}
function X(t2, r2) {
  for (let e2 = 0; e2 < _.length; e2++) if (t2 === _[e2]) return r2[e2];
  return t2;
}
function tt(t2) {
  return t2 >= "ً" && t2 <= "ٕ";
}
function rt(t2) {
  return "L" === t2 ? "LTR" : "R" === t2 ? "RTL" : "C" === t2 ? "CLR" : "D" === t2 ? "CRL" : "";
}
function et(t2, r2, e2, n2) {
  for (; r2 * e2 < n2 && tt(t2[r2]); ) r2 += e2;
  return r2 * e2 < n2 && (t2[r2] = " ", true);
}
function nt(r2, e2) {
  for (let n2 = 0; n2 < B.length; n2++) if (r2 === B[n2]) return e2[n2];
  return r2;
}
function ot(t2, r2, e2) {
  ut = [], ct = [];
  for (let n2 = 0; n2 < e2; n2++) t2[n2] = n2, r2[n2] = n2, ut[n2] = n2;
}
function it(t2) {
  const r2 = new Array(t2.length);
  for (let e2 = 0; e2 < t2.length; e2++) r2[t2[e2]] = e2;
  return r2;
}
function at(t2, r2, e2, n2) {
  for (let o2 = 0; o2 < t2.length; o2++) (t2[o2] > r2 || !e2 && t2[o2] === r2) && (t2[o2] += n2);
}
var ut = [];
var st = [];
var ct = [];
var ft = { dir: 0, defInFormat: "LLTR", defoutFormat: "VLTR", defSwap: "YN", inFormat: "LLTR", outFormat: "VLTR", swap: "YN", hiLevel: 0, lastArabic: false, hasUbatAl: false, hasBlockSep: false, hasSegSep: false, defOutFormat: "" };
var lt = 5;
var ht = 6;
var Tt = 0;
var Lt = 1;
var At = /^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/;
var dt = /[\u0591-\u06ff\ufb1d-\ufefc]/;

export {
  C2 as C
};
//# sourceMappingURL=chunk-ENBV6NNC.js.map
