import {
  t
} from "./chunk-5BWPRODD.js";

// node_modules/@arcgis/core/chunks/rbush.js
function i(t2, n2) {
  if (!(this instanceof i)) return new i(t2, n2);
  this._maxEntries = Math.max(4, t2 || 9), this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries)), n2 && ("function" == typeof n2 ? this.toBBox = n2 : this._initFormat(n2)), this.clear();
}
function n(t2, i2, n2) {
  if (!n2) return i2.indexOf(t2);
  for (var h2 = 0; h2 < i2.length; h2++) if (n2(t2, i2[h2])) return h2;
  return -1;
}
function h(t2, i2) {
  a(t2, 0, t2.children.length, i2, t2);
}
function a(t2, i2, n2, h2, a2) {
  a2 || (a2 = x(null)), a2.minX = 1 / 0, a2.minY = 1 / 0, a2.maxX = -1 / 0, a2.maxY = -1 / 0;
  for (var e2, o2 = i2; o2 < n2; o2++) e2 = t2.children[o2], r(a2, t2.leaf ? h2(e2) : e2);
  return a2;
}
function r(t2, i2) {
  return t2.minX = Math.min(t2.minX, i2.minX), t2.minY = Math.min(t2.minY, i2.minY), t2.maxX = Math.max(t2.maxX, i2.maxX), t2.maxY = Math.max(t2.maxY, i2.maxY), t2;
}
function e(t2, i2) {
  return t2.minX - i2.minX;
}
function o(t2, i2) {
  return t2.minY - i2.minY;
}
function s(t2) {
  return (t2.maxX - t2.minX) * (t2.maxY - t2.minY);
}
function l(t2) {
  return t2.maxX - t2.minX + (t2.maxY - t2.minY);
}
function m(t2, i2) {
  return (Math.max(i2.maxX, t2.maxX) - Math.min(i2.minX, t2.minX)) * (Math.max(i2.maxY, t2.maxY) - Math.min(i2.minY, t2.minY));
}
function c(t2, i2) {
  var n2 = Math.max(t2.minX, i2.minX), h2 = Math.max(t2.minY, i2.minY), a2 = Math.min(t2.maxX, i2.maxX), r2 = Math.min(t2.maxY, i2.maxY);
  return Math.max(0, a2 - n2) * Math.max(0, r2 - h2);
}
function u(t2, i2) {
  return t2.minX <= i2.minX && t2.minY <= i2.minY && i2.maxX <= t2.maxX && i2.maxY <= t2.maxY;
}
function f(t2, i2) {
  return i2.minX <= t2.maxX && i2.minY <= t2.maxY && i2.maxX >= t2.minX && i2.maxY >= t2.minY;
}
function x(t2) {
  return { children: t2, height: 1, leaf: true, minX: 1 / 0, minY: 1 / 0, maxX: -1 / 0, maxY: -1 / 0 };
}
function d(i2, n2, h2, a2, r2) {
  for (var e2, o2 = [n2, h2]; o2.length; ) (h2 = o2.pop()) - (n2 = o2.pop()) <= a2 || (e2 = n2 + Math.ceil((h2 - n2) / a2 / 2) * a2, t(i2, e2, n2, h2, r2), o2.push(n2, e2, e2, h2));
}
i.prototype = { all: function() {
  return this._all(this.data, []);
}, search: function(t2) {
  var i2 = this.data, n2 = [], h2 = this.toBBox;
  if (!f(t2, i2)) return n2;
  for (var a2, r2, e2, o2, s2 = []; i2; ) {
    for (a2 = 0, r2 = i2.children.length; a2 < r2; a2++) e2 = i2.children[a2], f(t2, o2 = i2.leaf ? h2(e2) : e2) && (i2.leaf ? n2.push(e2) : u(t2, o2) ? this._all(e2, n2) : s2.push(e2));
    i2 = s2.pop();
  }
  return n2;
}, collides: function(t2) {
  var i2 = this.data, n2 = this.toBBox;
  if (!f(t2, i2)) return false;
  for (var h2, a2, r2, e2, o2 = []; i2; ) {
    for (h2 = 0, a2 = i2.children.length; h2 < a2; h2++) if (r2 = i2.children[h2], f(t2, e2 = i2.leaf ? n2(r2) : r2)) {
      if (i2.leaf || u(t2, e2)) return true;
      o2.push(r2);
    }
    i2 = o2.pop();
  }
  return false;
}, load: function(t2) {
  if (!t2 || !t2.length) return this;
  if (t2.length < this._minEntries) {
    for (var i2 = 0, n2 = t2.length; i2 < n2; i2++) this.insert(t2[i2]);
    return this;
  }
  var h2 = this._build(t2.slice(), 0, t2.length - 1, 0);
  if (this.data.children.length) if (this.data.height === h2.height) this._splitRoot(this.data, h2);
  else {
    if (this.data.height < h2.height) {
      var a2 = this.data;
      this.data = h2, h2 = a2;
    }
    this._insert(h2, this.data.height - h2.height - 1, true);
  }
  else this.data = h2;
  return this;
}, insert: function(t2) {
  return null != t2 && this._insert(t2, this.data.height - 1), this;
}, clear: function() {
  return this.data = x([]), this;
}, remove: function(t2, i2) {
  if (null == t2) return this;
  for (var h2, a2, r2, e2, o2 = this.data, s2 = this.toBBox(t2), l2 = [], m2 = []; o2 || l2.length; ) {
    if (o2 || (o2 = l2.pop(), a2 = l2[l2.length - 1], h2 = m2.pop(), e2 = true), o2.leaf && -1 !== (r2 = n(t2, o2.children, i2))) return o2.children.splice(r2, 1), l2.push(o2), this._condense(l2), this;
    e2 || o2.leaf || !u(o2, s2) ? a2 ? (h2++, o2 = a2.children[h2], e2 = false) : o2 = null : (l2.push(o2), m2.push(h2), h2 = 0, a2 = o2, o2 = o2.children[0]);
  }
  return this;
}, toBBox: function(t2) {
  return t2;
}, compareMinX: e, compareMinY: o, toJSON: function() {
  return this.data;
}, fromJSON: function(t2) {
  return this.data = t2, this;
}, _all: function(t2, i2) {
  for (var n2 = []; t2; ) t2.leaf ? i2.push.apply(i2, t2.children) : n2.push.apply(n2, t2.children), t2 = n2.pop();
  return i2;
}, _build: function(t2, i2, n2, a2) {
  var r2, e2 = n2 - i2 + 1, o2 = this._maxEntries;
  if (e2 <= o2) return h(r2 = x(t2.slice(i2, n2 + 1)), this.toBBox), r2;
  a2 || (a2 = Math.ceil(Math.log(e2) / Math.log(o2)), o2 = Math.ceil(e2 / Math.pow(o2, a2 - 1))), (r2 = x([])).leaf = false, r2.height = a2;
  var s2, l2, m2, c2, u2 = Math.ceil(e2 / o2), f2 = u2 * Math.ceil(Math.sqrt(o2));
  for (d(t2, i2, n2, f2, this.compareMinX), s2 = i2; s2 <= n2; s2 += f2) for (d(t2, s2, m2 = Math.min(s2 + f2 - 1, n2), u2, this.compareMinY), l2 = s2; l2 <= m2; l2 += u2) c2 = Math.min(l2 + u2 - 1, m2), r2.children.push(this._build(t2, l2, c2, a2 - 1));
  return h(r2, this.toBBox), r2;
}, _chooseSubtree: function(t2, i2, n2, h2) {
  for (var a2, r2, e2, o2, l2, c2, u2, f2; h2.push(i2), !i2.leaf && h2.length - 1 !== n2; ) {
    for (u2 = f2 = 1 / 0, a2 = 0, r2 = i2.children.length; a2 < r2; a2++) l2 = s(e2 = i2.children[a2]), (c2 = m(t2, e2) - l2) < f2 ? (f2 = c2, u2 = l2 < u2 ? l2 : u2, o2 = e2) : c2 === f2 && l2 < u2 && (u2 = l2, o2 = e2);
    i2 = o2 || i2.children[0];
  }
  return i2;
}, _insert: function(t2, i2, n2) {
  var h2 = this.toBBox, a2 = n2 ? t2 : h2(t2), e2 = [], o2 = this._chooseSubtree(a2, this.data, i2, e2);
  for (o2.children.push(t2), r(o2, a2); i2 >= 0 && e2[i2].children.length > this._maxEntries; ) this._split(e2, i2), i2--;
  this._adjustParentBBoxes(a2, e2, i2);
}, _split: function(t2, i2) {
  var n2 = t2[i2], a2 = n2.children.length, r2 = this._minEntries;
  this._chooseSplitAxis(n2, r2, a2);
  var e2 = this._chooseSplitIndex(n2, r2, a2), o2 = x(n2.children.splice(e2, n2.children.length - e2));
  o2.height = n2.height, o2.leaf = n2.leaf, h(n2, this.toBBox), h(o2, this.toBBox), i2 ? t2[i2 - 1].children.push(o2) : this._splitRoot(n2, o2);
}, _splitRoot: function(t2, i2) {
  this.data = x([t2, i2]), this.data.height = t2.height + 1, this.data.leaf = false, h(this.data, this.toBBox);
}, _chooseSplitIndex: function(t2, i2, n2) {
  var h2, r2, e2, o2, l2, m2, u2, f2;
  for (m2 = u2 = 1 / 0, h2 = i2; h2 <= n2 - i2; h2++) o2 = c(r2 = a(t2, 0, h2, this.toBBox), e2 = a(t2, h2, n2, this.toBBox)), l2 = s(r2) + s(e2), o2 < m2 ? (m2 = o2, f2 = h2, u2 = l2 < u2 ? l2 : u2) : o2 === m2 && l2 < u2 && (u2 = l2, f2 = h2);
  return f2;
}, _chooseSplitAxis: function(t2, i2, n2) {
  var h2 = t2.leaf ? this.compareMinX : e, a2 = t2.leaf ? this.compareMinY : o;
  this._allDistMargin(t2, i2, n2, h2) < this._allDistMargin(t2, i2, n2, a2) && t2.children.sort(h2);
}, _allDistMargin: function(t2, i2, n2, h2) {
  t2.children.sort(h2);
  var e2, o2, s2 = this.toBBox, m2 = a(t2, 0, i2, s2), c2 = a(t2, n2 - i2, n2, s2), u2 = l(m2) + l(c2);
  for (e2 = i2; e2 < n2 - i2; e2++) o2 = t2.children[e2], r(m2, t2.leaf ? s2(o2) : o2), u2 += l(m2);
  for (e2 = n2 - i2 - 1; e2 >= i2; e2--) o2 = t2.children[e2], r(c2, t2.leaf ? s2(o2) : o2), u2 += l(c2);
  return u2;
}, _adjustParentBBoxes: function(t2, i2, n2) {
  for (var h2 = n2; h2 >= 0; h2--) r(i2[h2], t2);
}, _condense: function(t2) {
  for (var i2, n2 = t2.length - 1; n2 >= 0; n2--) 0 === t2[n2].children.length ? n2 > 0 ? (i2 = t2[n2 - 1].children).splice(i2.indexOf(t2[n2]), 1) : this.clear() : h(t2[n2], this.toBBox);
}, _initFormat: function(t2) {
  var i2 = ["return a", " - b", ";"];
  this.compareMinX = new Function("a", "b", i2.join(t2[0])), this.compareMinY = new Function("a", "b", i2.join(t2[1])), this.toBBox = new Function("a", "return {minX: a" + t2[0] + ", minY: a" + t2[1] + ", maxX: a" + t2[2] + ", maxY: a" + t2[3] + "};");
} };

export {
  i
};
//# sourceMappingURL=chunk-KUSC533N.js.map
