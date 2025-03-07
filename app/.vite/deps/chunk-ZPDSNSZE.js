import {
  r as r2
} from "./chunk-UPNK3SFT.js";
import {
  i
} from "./chunk-36LA23CO.js";
import {
  E
} from "./chunk-RD3QRDRK.js";
import {
  p,
  w
} from "./chunk-5AJMZDUM.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  l2 as l,
  n2 as n,
  s2 as s,
  t
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/graph/ShaderGraphNode.js
function t2(t7) {
  return t7.split(" ").map((t8, e3) => e3 > 0 ? t8.charAt(0).toUpperCase() + t8.slice(1) : t8).join("");
}
function e(t7, e3) {
  const s4 = [];
  for (s4.push(e3); s4.length; ) {
    const e4 = s4.pop();
    if ("object" == typeof e4 && !t7.has(e4.uid)) {
      t7.add(e4.uid);
      for (const t8 of e4.children) s4.push(t8);
    }
  }
}
var s2 = class _s {
  constructor() {
    this.uid = _s.NodeCount++, this._debugName = null, this._isMutable = false, this.isImplicit = false;
  }
  get isMutable() {
    return this._isMutable;
  }
  setMutable() {
    return this._isMutable = true, this;
  }
  setDebugName(e3) {
    return e3 = t2(e3), this._debugName = e3, this.isImplicit && this.children[0] instanceof _s && this.children[0].setDebugName(e3), this;
  }
  get debugInfo() {
    return { name: this._debugName ?? "" };
  }
  cloneInto(t7) {
    t7._debugName = this._debugName, t7._isMutable = this._isMutable, t7.isImplicit = this.isImplicit, t7.uid = this.uid;
  }
};
function i2(t7) {
  return "object" == typeof t7 ? t7.clone() : t7;
}
s2.NodeCount = 0;
var r3 = class extends s2 {
  constructor() {
    super(...arguments), this.shaderType = "primitive-node";
  }
};
var n2 = class _n extends s2 {
  constructor(t7) {
    super(), this.child = t7, this.shaderType = "scope-node";
  }
  get children() {
    return [this.child];
  }
  clone() {
    const t7 = new _n(i2(this.child));
    return this.cloneInto(t7), t7;
  }
};
var o = class _o extends s2 {
  constructor(t7, e3, s4) {
    super(), this.property = t7, this.target = e3, this.returnType = s4, this.shaderType = "property-access-node";
  }
  get children() {
    const t7 = [this.target];
    return "string" != typeof this.property && t7.push(this.property), t7;
  }
  clone() {
    const t7 = new _o(this.property, i2(this.target), this.returnType);
    return this.cloneInto(t7), t7;
  }
};
var c = class _c extends s2 {
  constructor(t7, e3, s4, i3) {
    super(), this.x = t7, this.y = e3, this.target = s4, this.returnType = i3, this.shaderType = "property-access-2d-node";
  }
  get children() {
    return [this.target, this.x, this.y];
  }
  clone() {
    const t7 = new _c(this.x, this.y, i2(this.target), this.returnType);
    return this.cloneInto(t7), t7;
  }
};
var u = class _u extends s2 {
  constructor(t7, e3, s4) {
    super(), this.condition = t7, this.ifTrue = e3, this.ifFalse = s4, this.shaderType = "condition-node";
  }
  get children() {
    return [this.condition, this.ifTrue, this.ifFalse];
  }
  clone() {
    const t7 = i2(this.ifTrue), e3 = this.ifFalse ? i2(this.ifFalse) : null, s4 = new _u(this.condition, t7, e3);
    return this.cloneInto(s4), s4;
  }
};
var p2 = class _p extends s2 {
  constructor(t7, e3, s4, i3) {
    super(), this.captureList = t7, this.returnType = e3, this.generator = i3, this.shaderType = "block-node", s4 && (this.subgraph = new n2(s4));
  }
  get children() {
    return Object.keys(this.captureList).map((t7) => this.captureList[t7]).concat(this.subgraph ?? []);
  }
  clone() {
    const t7 = {};
    for (const s4 in this.captureList) t7[s4] = i2(this.captureList[s4]);
    const e3 = new _p(t7, this.returnType, this.subgraph ? i2(this.subgraph.child) : this.subgraph, this.generator);
    return this.cloneInto(e3), e3;
  }
};
var a = class _a extends s2 {
  constructor(t7, e3, s4, i3, r5, n4 = false) {
    super(), this.token = t7, this._children = e3, this.isInfix = s4, this.isPropertyAccess = i3, this.returnType = r5, this.isTernary = n4, this.shaderType = "function-node";
  }
  get children() {
    return this._children;
  }
  clone() {
    const t7 = new _a(this.token, this._children.map(i2), this.isInfix, this.isPropertyAccess, this.returnType, this.isTernary);
    return this.cloneInto(t7), t7;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/graph/glsl.js
var l2;
var h;
var a2;
var f;
var p3;
var d;
var w2;
var y;
var m;
var v;
var b;
var x;
var I;
var g;
function D(t7) {
  switch (t7.type) {
    case "bool":
    case "bvec2":
    case "bvec3":
    case "bvec4":
      return J;
    case "float":
    case "vec2":
    case "vec3":
    case "vec4":
      return _;
    case "int":
    case "ivec2":
    case "ivec3":
    case "ivec4":
      return W;
    case "uint":
    case "uvec2":
    case "uvec3":
    case "uvec4":
      return G;
    default:
      throw new Error("Unable to handle type");
  }
}
function F(t7) {
  const e3 = [["float", "vec2", "vec3", "vec4"], ["int", "ivec2", "ivec3", "ivec4"], ["uint", "uvec2", "uvec3", "uvec4"], ["bool", "bvec2", "bvec3", "bvec4"]];
  for (const n4 of e3) if (n4.includes(t7)) return n4.map((t8) => it[t8]);
  throw new Error("Unable to find type family");
}
function M(t7) {
  return new Proxy(t7, { get(e3, n4) {
    if ("constructor" === n4) return new Proxy(e3.constructor, { construct: (t8, e4, n5) => M(new t8(...e4)) });
    if (n4 in e3) return e3[n4];
    if ("string" == typeof n4) {
      const e4 = F(t7.type);
      return dt(t7, n4, e4[n4.length - 1]);
    }
  } });
}
function S(t7) {
  return new Proxy(t7, { construct: (t8, e3, n4) => M(new t8(...e3)) });
}
function j(t7) {
  return new Proxy(t7, { get(e3, n4) {
    if (n4 in e3) return e3[n4];
    if ("string" == typeof n4) {
      const e4 = parseInt(n4, 10);
      if (!isNaN(e4)) return dt(t7, `[${e4}]`, t7.elementType.constructor);
    }
  } });
}
function R(t7) {
  return new Proxy(t7, { construct: (t8, e3, n4) => j(new t8(...e3)) });
}
var P = class extends Error {
};
var B = l2 = class extends r3 {
  constructor(t7, e3) {
    super(), this.elementType = t7, this.size = e3, this.children = [], this.type = "array";
  }
  clone() {
    const t7 = new l2(this.elementType, this.size);
    return super.cloneInto(t7), t7;
  }
  get(t7, e3) {
    const n4 = new W(t7), r5 = null != e3 ? new W(e3) : null;
    if (null != r5) {
      return wt(this, n4, r5, D(this.elementType.constructor));
    }
    return dt(this, n4, this.elementType.constructor);
  }
  last() {
    return this.get(this.size - 1);
  }
  first() {
    return this.get(0);
  }
  findIndex(t7, e3, n4) {
    return Et(this, t7, e3, n4);
  }
  glslFindIndex(t7, e3, n4) {
    return $t(this, t7, e3, n4);
  }
  static ofType(t7, e3) {
    const n4 = { construct: (n5, r5) => new l2(new t7(), e3) };
    return new Proxy(l2, n4);
  }
};
B.type = "array", B = l2 = r([R], B);
var q = class _q extends r3 {
  constructor(t7, e3, n4, r5 = false) {
    super(), this.elementType = t7, this.xSize = e3, this.ySize = n4, this.isRowMajor = r5, this.children = [], this.type = "array-2d";
  }
  clone() {
    const t7 = new _q(this.elementType, this.xSize, this.ySize, this.isRowMajor);
    return super.cloneInto(t7), t7;
  }
  get size() {
    return this.xSize * this.ySize;
  }
  get(t7, e3) {
    return this.isRowMajor ? this._getRowMajor(t7, e3) : this._getColumnMajor(t7, e3);
  }
  _getColumnMajor(t7, e3) {
    const n4 = new W(t7);
    return dt(this, new W(e3).add(n4.multiply(this.xSize)), this.elementType.constructor);
  }
  _getRowMajor(t7, e3) {
    const n4 = new W(t7), r5 = new W(e3);
    return dt(this, n4.add(r5.multiply(this.ySize)), this.elementType.constructor);
  }
  static ofType(t7, e3, n4, r5 = false) {
    return new Proxy(B, { construct: (c2, i3) => new _q(new t7(), e3, n4, r5) });
  }
};
q.type = "array-2d";
var U = class _U extends r3 {
  constructor() {
    super(...arguments), this.type = "sampler2D", this.children = [];
  }
  clone() {
    const t7 = new _U();
    return t7.children = this.children.map(i2), super.cloneInto(t7), t7;
  }
};
U.type = "sampler2D";
var _ = class __ extends r3 {
  constructor(t7) {
    super(), this.type = "float", this.children = [t7];
  }
  clone() {
    const t7 = new __(i2(this.children[0]));
    return super.cloneInto(t7), t7;
  }
  multiply(t7) {
    return Dt(this, "number" == typeof t7 ? O(t7, __) : t7);
  }
  divide(t7) {
    return kt(this, "number" == typeof t7 ? O(t7, __) : t7);
  }
  add(t7) {
    return Ft(this, "number" == typeof t7 ? O(t7, __) : t7);
  }
  subtract(t7) {
    return Mt(this, "number" == typeof t7 ? O(t7, __) : t7);
  }
};
_.type = "float";
var C = h = class extends r3 {
  constructor(t7, e3) {
    super(), this.type = "vec2", this.children = [t7, e3].filter((t8) => null != t8);
  }
  clone() {
    const t7 = new h(i2(this.children[0]), i2(this.children[1]));
    return super.cloneInto(t7), t7;
  }
  get 0() {
    return dt(this, "[0]", _);
  }
  get 1() {
    return dt(this, "[1]", _);
  }
  get 2() {
    throw new P();
  }
  get 3() {
    throw new P();
  }
  multiply(t7) {
    return Dt(this, "number" == typeof t7 ? O(t7, _) : t7);
  }
  divide(t7) {
    return kt(this, "number" == typeof t7 ? O(t7, _) : t7);
  }
  add(t7) {
    return Ft(this, "number" == typeof t7 ? O(t7, _) : t7);
  }
  subtract(t7) {
    return Mt(this, "number" == typeof t7 ? O(t7, _) : t7);
  }
};
C.type = "vec2", C = h = r([S], C);
var X = a2 = class extends r3 {
  constructor(t7, e3, n4) {
    super(), this.type = "vec3", this.children = [t7, e3, n4].filter((t8) => null != t8);
  }
  get 0() {
    return dt(this, "[0]", _);
  }
  get 1() {
    return dt(this, "[1]", _);
  }
  get 2() {
    return dt(this, "[2]", _);
  }
  get 3() {
    throw new P();
  }
  clone() {
    const t7 = new a2(i2(this.children[0]), i2(this.children[1]), i2(this.children[2]));
    return super.cloneInto(t7), t7;
  }
  multiply(t7) {
    return Dt(this, "number" == typeof t7 ? O(t7, _) : t7);
  }
  divide(t7) {
    return kt(this, "number" == typeof t7 ? O(t7, _) : t7);
  }
  add(t7) {
    return Ft(this, "number" == typeof t7 ? O(t7, _) : t7);
  }
  subtract(t7) {
    return Mt(this, "number" == typeof t7 ? O(t7, _) : t7);
  }
};
X.type = "vec3", X = a2 = r([S], X);
var Y = f = class extends r3 {
  constructor(t7, e3, n4, r5) {
    super(), this.type = "vec4", this.children = [t7, e3, n4, r5].filter((t8) => null != t8);
  }
  clone() {
    const t7 = new f(i2(this.children[0]), i2(this.children[1]), i2(this.children[2]), i2(this.children[3]));
    return super.cloneInto(t7), t7;
  }
  get 0() {
    return dt(this, "[0]", _);
  }
  get 1() {
    return dt(this, "[1]", _);
  }
  get 2() {
    return dt(this, "[2]", _);
  }
  get 3() {
    return dt(this, "[3]", _);
  }
  multiply(t7) {
    return Dt(this, "number" == typeof t7 ? O(t7, _) : t7);
  }
  divide(t7) {
    return kt(this, "number" == typeof t7 ? O(t7, _) : t7);
  }
  add(t7) {
    return Ft(this, "number" == typeof t7 ? O(t7, _) : t7);
  }
  subtract(t7) {
    return Mt(this, "number" == typeof t7 ? O(t7, _) : t7);
  }
};
Y.type = "vec4", Y = f = r([S], Y);
var G = p3 = class extends r3 {
  constructor(t7) {
    super(), this.type = "uint", this.children = [t7];
  }
  clone() {
    const t7 = new p3(i2(this.children[0]));
    return super.cloneInto(t7), t7;
  }
};
G.type = "uint", G = p3 = r([S], G);
var H = d = class extends r3 {
  constructor(t7, e3) {
    super(), this.type = "uvec2", this.children = [t7, e3].filter((t8) => null != t8);
  }
  clone() {
    const t7 = new d(i2(this.children[0]), i2(this.children[1]));
    return super.cloneInto(t7), t7;
  }
};
H.type = "uvec2", H = d = r([S], H);
var A = w2 = class extends r3 {
  constructor(t7, e3, n4) {
    super(), this.type = "uvec3", this.children = [t7, e3, n4].filter((t8) => null != t8);
  }
  clone() {
    const t7 = new w2(i2(this.children[0]), i2(this.children[1]), i2(this.children[2]));
    return super.cloneInto(t7), t7;
  }
};
A.type = "uvec3", A = w2 = r([S], A);
var V = y = class extends r3 {
  constructor(t7, e3, n4, r5) {
    super(), this.type = "uvec4", this.children = [t7, e3, n4, r5].filter((t8) => null != t8);
  }
  clone() {
    const t7 = new y(i2(this.children[0]), i2(this.children[1]), i2(this.children[2]), i2(this.children[3]));
    return super.cloneInto(t7), t7;
  }
};
V.type = "uvec4", V = y = r([S], V);
var J = class _J extends r3 {
  constructor(t7) {
    super(), this.type = "bool", this.children = [t7];
  }
  and(t7) {
    return Vt(this, t7);
  }
  or(t7) {
    return Ht(this, t7);
  }
  clone() {
    const t7 = new _J(i2(this.children[0]));
    return super.cloneInto(t7), t7;
  }
};
J.type = "bool";
var K = m = class extends r3 {
  constructor(t7, e3) {
    super(), this.type = "bvec2", this.children = [t7, e3].filter((t8) => null != t8);
  }
  all() {
    return Qt(this);
  }
  any() {
    return Wt(this);
  }
  clone() {
    const t7 = new m(i2(this.children[0]), i2(this.children[1]));
    return super.cloneInto(t7), t7;
  }
};
K.type = "bvec2", K = m = r([S], K);
var L = v = class extends r3 {
  constructor(t7, e3, n4) {
    super(), this.type = "bvec3", this.children = [t7, e3, n4].filter((t8) => null != t8);
  }
  all() {
    return Qt(this);
  }
  any() {
    return Wt(this);
  }
  clone() {
    const t7 = new v(i2(this.children[0]), i2(this.children[1]), i2(this.children[2]));
    return super.cloneInto(t7), t7;
  }
};
function O(t7, e3) {
  if ("number" == typeof t7) {
    return new e3(t7);
  }
  return t7;
}
L.type = "bvec3", L = v = r([S], L);
var Q = b = class extends r3 {
  constructor(t7, e3, n4, r5) {
    super(), this.type = "bvec4", this.children = [t7, e3, n4, r5].filter((t8) => null != t8);
  }
  all() {
    return Qt(this);
  }
  any() {
    return Wt(this);
  }
  clone() {
    const t7 = new b(i2(this.children[0]), i2(this.children[1]), i2(this.children[2]), i2(this.children[3]));
    return super.cloneInto(t7), t7;
  }
};
Q.type = "bvec4", Q = b = r([S], Q);
var W = class _W extends r3 {
  constructor(t7) {
    super(), this.type = "int", this.children = [t7];
  }
  multiply(t7) {
    return Dt(this, O(t7, _W));
  }
  add(t7) {
    return Ft(this, O(t7, _W));
  }
  subtract(t7) {
    return Mt(this, O(t7, _W));
  }
  divide(t7) {
    return kt(this, O(t7, _W));
  }
  clone() {
    const t7 = new _W(i2(this.children[0]));
    return super.cloneInto(t7), t7;
  }
};
W.type = "int";
var Z = x = class extends r3 {
  constructor(t7, e3) {
    super(), this.type = "ivec2", this.children = [t7, e3].filter((t8) => null != t8);
  }
  clone() {
    const t7 = new x(i2(this.children[0]), i2(this.children[1]));
    return super.cloneInto(t7), t7;
  }
};
Z.type = "ivec2", Z = x = r([S], Z);
var tt = I = class extends r3 {
  constructor(t7, e3, n4) {
    super(), this.type = "ivec3", this.children = [t7, e3, n4].filter((t8) => null != t8);
  }
  clone() {
    const t7 = new I(i2(this.children[0]), i2(this.children[1]), i2(this.children[2]));
    return super.cloneInto(t7), t7;
  }
};
tt.type = "ivec3", tt = I = r([S], tt);
var et = g = class extends r3 {
  constructor(t7, e3, n4, r5) {
    super(), this.type = "ivec4", this.children = [t7, e3, n4, r5].filter((t8) => null != t8);
  }
  clone() {
    const t7 = new g(i2(this.children[0]), i2(this.children[1]), i2(this.children[2]), i2(this.children[3]));
    return super.cloneInto(t7), t7;
  }
};
et.type = "ivec4", et = g = r([S], et);
var nt = class _nt extends r3 {
  constructor(t7, e3, n4, r5) {
    super(), this.type = "mat2", this.children = [t7, e3, n4, r5];
  }
  clone() {
    const t7 = new _nt(i2(this.children[0]), i2(this.children[1]), i2(this.children[2]), i2(this.children[3]));
    return super.cloneInto(t7), t7;
  }
  get(t7, e3) {
    return wt(this, new W(t7), new W(e3), _);
  }
  multiply(t7) {
    return Dt(this, t7);
  }
};
nt.type = "mat2";
var rt = class _rt extends r3 {
  static identity() {
    return new _rt(1, 0, 0, 0, 1, 0, 0, 0, 1);
  }
  static fromRotation(t7) {
    const e3 = nn(t7), n4 = ie(t7);
    return new _rt(n4, e3, 0, xt(e3), n4, 0, 0, 0, 1);
  }
  constructor(t7, e3, n4, r5, c2, i3, u2, s4, o3) {
    super(), this.type = "mat3", this.children = [t7, e3, n4, r5, c2, i3, u2, s4, o3];
  }
  add(t7) {
    return Ft(this, t7);
  }
  multiply(t7) {
    return Dt(this, t7);
  }
  get(t7, e3) {
    return wt(this, new W(t7), new W(e3), _);
  }
  clone() {
    const t7 = new _rt(i2(this.children[0]), i2(this.children[1]), i2(this.children[2]), i2(this.children[3]), i2(this.children[4]), i2(this.children[5]), i2(this.children[6]), i2(this.children[7]), i2(this.children[8]));
    return super.cloneInto(t7), t7;
  }
};
rt.type = "mat3";
var ct = class _ct extends r3 {
  static identity() {
    return new _ct(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  constructor(t7, e3, n4, r5, c2, i3, u2, s4, o3, l4, h3, a4, f3, p4, d4, w4) {
    super(), this.type = "mat4", this.children = [t7, e3, n4, r5, c2, i3, u2, s4, o3, l4, h3, a4, f3, p4, d4, w4];
  }
  static fromColumns(t7, e3, n4, r5) {
    return new _ct(t7.x, t7.y, t7.z, t7.w, e3.x, e3.y, e3.z, e3.w, n4.x, n4.y, n4.z, n4.w, r5.x, r5.y, r5.z, r5.w);
  }
  multiply(t7) {
    return Dt(this, t7);
  }
  get(t7, e3) {
    return wt(this, new W(t7), new W(e3), _);
  }
  clone() {
    const t7 = new _ct(i2(this.children[0]), i2(this.children[1]), i2(this.children[2]), i2(this.children[3]), i2(this.children[4]), i2(this.children[5]), i2(this.children[6]), i2(this.children[7]), i2(this.children[8]), i2(this.children[9]), i2(this.children[10]), i2(this.children[11]), i2(this.children[12]), i2(this.children[13]), i2(this.children[14]), i2(this.children[15]));
    return super.cloneInto(t7), t7;
  }
};
ct.type = "mat4";
var it = { float: _, vec2: C, vec3: X, vec4: Y, int: W, ivec2: Z, ivec3: tt, ivec4: et, uint: G, uvec2: H, uvec3: A, uvec4: V, bool: J, bvec2: K, bvec3: L, bvec4: Q };
var ut = (...t7) => new W(...t7);
var st = (...t7) => new _(...t7);
var ot = (...t7) => new C(...t7);
var lt = (...t7) => new X(...t7);
var ht = (...t7) => new Y(...t7);
var ft = (...t7) => new rt(...t7);
function dt(t7, e3, n4) {
  const c2 = new n4(new o(e3, t7, n4));
  return c2.isImplicit = true, c2;
}
function wt(t7, e3, n4, r5) {
  const i3 = new r5(new c(e3, n4, t7, r5));
  return i3.isImplicit = true, i3;
}
function yt(t7, e3, n4, r5 = null) {
  if (r5) {
    const c3 = new r5(), i3 = new r5(new a(t7, [e3, n4], true, false, c3));
    return i3.isImplicit = true, i3;
  }
  if ("float" === e3.type || "int" === e3.type) {
    const r6 = new n4.constructor(new a(t7, [e3, n4], true, false, n4.constructor));
    return r6.isImplicit = true, r6;
  }
  if (("mat2" === e3.type || "mat3" === e3.type || "mat4" === e3.type) && "float" !== n4.type) {
    const r6 = new n4.constructor(new a(t7, [e3, n4], true, false, n4.constructor));
    return r6.isImplicit = true, r6;
  }
  const c2 = new e3.constructor(new a(t7, [e3, n4], true, false, e3.constructor));
  return c2.isImplicit = true, c2;
}
function mt(t7, e3, n4 = e3.constructor) {
  const r5 = new n4(new a(t7, [e3], false, false, n4));
  return r5.isImplicit = true, r5;
}
function vt(t7, e3, n4, r5 = e3.constructor) {
  const c2 = new r5(new a(t7, [e3, n4], false, false, r5));
  return c2.isImplicit = true, c2;
}
function bt(t7, e3, n4, r5, c2 = e3.constructor) {
  const i3 = new c2(new a(t7, [e3, n4, r5], false, false, c2));
  return i3.isImplicit = true, i3;
}
function xt(t7) {
  return Dt(t7, st(-1));
}
function It(t7, e3, n4, r5) {
  return new e3(new p2(t7, e3, n4, r5));
}
function Et(t7, e3, n4 = 0, r5 = t7.size) {
  const c2 = new W(n4).setMutable().setDebugName("FindIndexIterator"), i3 = e3(t7.get(c2)).setDebugName("FindIndexPredicate"), u2 = It({ iter: c2 }, W, i3, ({ out: t8, iter: e4, subgraph: n5 }) => `
${t8} = -1;

for (; ${e4} < ${r5}; ${e4}++) {

${n5.body}

  if (${n5.varName}) {
    ${t8} = ${e4};
    break;
  }

}
`).setDebugName("FindIndexBlock");
  return u2;
}
function $t(t7, e3, n4 = 0, r5 = t7.size) {
  const c2 = It({ array: t7 }, W, null, ({ out: t8, array: c3 }) => `
${t8} = -1;
for (int i = ${n4}; i < ${r5}; i++) {
  bool condition;
  ${e3({ array: c3, i: "i", out: "condition" })}
  if (condition) {
    ${t8} = i;
    break;
  }
}
`).setDebugName("GlslFindIndexBlock");
  return c2;
}
function zt(t7, e3, n4) {
  const r5 = "function" == typeof e3 ? e3() : e3, c2 = "function" == typeof n4 ? n4() : n4, i3 = new r5.constructor(new u(t7, r5, c2));
  return i3.isImplicit = true, i3;
}
function Tt(...t7) {
  const e3 = t7.map(([t8, e4]) => "function" == typeof e4 ? [t8, e4()] : [t8, e4]), n4 = e3[0][1].constructor, r5 = e3.findIndex((t8) => true === t8[0]);
  if (-1 === r5) throw new Error("A cond must have a fallthrough case with `true`/; ");
  const c2 = e3.slice(0, r5), i3 = e3[r5][1], u2 = new n4(c2.reduceRight((t8, e4) => zt(e4[0], e4[1], t8), i3));
  return u2.isImplicit = true, u2;
}
function Dt(t7, e3) {
  return yt("*", t7, e3);
}
function kt(t7, e3) {
  return yt("/", t7, e3);
}
function Ft(t7, e3) {
  return yt("+", t7, e3);
}
function Mt(t7, e3) {
  return yt("-", t7, e3);
}
function St(t7, e3) {
  return yt("%", t7, e3);
}
function Rt(t7, e3) {
  return yt(">>", t7, e3);
}
function Pt(t7, e3) {
  return yt("&", t7, e3);
}
function Ut(t7, e3) {
  return yt("==", t7, e3, J);
}
function Ct(t7, e3) {
  return yt("<", t7, e3, J);
}
function Xt(t7, e3) {
  return yt("<=", t7, e3, J);
}
function Yt(t7, e3) {
  return yt(">", t7, e3, J);
}
function Gt(t7, e3) {
  return yt(">=", t7, e3, J);
}
function Ht(...t7) {
  return t7.length <= 1 ? t7[0] : t7.slice(1).reduce((t8, e3) => At(t8, e3), t7[0]);
}
function At(t7, e3) {
  return yt("||", t7, e3, J);
}
function Vt(...t7) {
  return t7.length <= 1 ? t7[0] : t7.slice(1).reduce((t8, e3) => Jt(t8, e3), t7[0]);
}
function Jt(t7, e3) {
  return yt("&&", t7, e3, J);
}
function Kt(t7) {
  return mt("abs", t7);
}
function Qt(t7) {
  return mt("all", t7, J);
}
function Wt(t7) {
  return mt("any", t7, J);
}
function ee(t7, e3) {
  return null == e3 ? mt("atan", t7) : vt("atan", t7, e3, t7.constructor);
}
function re(t7) {
  return mt("ceil", t7);
}
function ce(t7, e3, n4) {
  return bt("clamp", t7, e3, n4, t7.constructor);
}
function ie(t7) {
  return mt("cos", t7);
}
function fe(t7, e3) {
  return vt("distance", t7, e3, _);
}
function pe(t7, e3) {
  return vt("dot", t7, e3, _);
}
function ge(t7) {
  return mt("floor", t7);
}
function Ee(t7) {
  return mt("fract", t7);
}
function Me(t7) {
  return mt("length", t7, _);
}
function qe(t7, e3) {
  return vt("max", t7, e3);
}
function Ue(t7, e3) {
  return vt("min", t7, e3);
}
function _e(t7, e3, n4) {
  return bt("mix", t7, e3, n4);
}
function Ce(t7, e3) {
  return vt("mod", t7, e3);
}
function Ye(t7) {
  return mt("normalize", t7);
}
function Ge(t7) {
  return "bool" === t7.type ? mt("!", t7) : mt("not", t7);
}
function Le(t7, e3) {
  return vt("pow", t7, e3);
}
function Ze(t7) {
  return mt("round", t7);
}
function nn(t7) {
  return mt("sin", t7);
}
function cn(t7, e3, n4) {
  return bt("smoothstep", t7, e3, n4);
}
function un(t7) {
  return mt("sqrt", t7);
}
function sn(t7, e3) {
  return vt("step", t7, e3, e3.constructor);
}
function pn(t7, e3) {
  return vt("texture", t7, e3, Y);
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/graph/GlslGraphWriter.js
var e2 = 5;
function t3(e3, t7, r5) {
  const i3 = t7.split("\n");
  for (const n4 of i3) if (n4.trim().length) {
    {
      let t8 = "";
      null != r5 && (t8 += `/*id:${r5 ?? "000"}*/   `), e3.body += t8.padEnd(14);
    }
    e3.body += " ".repeat(e3.indent) + n4 + "\n";
  }
}
var r4 = class {
  write(e3) {
    for (const t7 of e3.rootOutputNodes()) e3.shouldPruneOutputNode(t7) || (t7.variableName = this._write(e3, t7.node));
    return e3;
  }
  _createVarName(e3, t7) {
    let r5 = "";
    return "boolean" != typeof t7 && "number" != typeof t7 && t7.debugInfo.name && (r5 = `${t7.debugInfo.name}_`), `${r5}v${e3.varCount++}`;
  }
  _write(e3, t7, r5 = false) {
    if ("number" == typeof t7) return t7.toString();
    if ("boolean" == typeof t7) return t7.toString();
    let i3 = e3.getEmit(t7);
    if (i3) return i3;
    switch (t7.shaderType) {
      case "scope-node":
        i3 = this._writeScopeNode(e3, t7);
        break;
      case "primitive-node":
        i3 = this._writePrimitiveNode(e3, t7, r5);
        break;
      case "function-node":
        i3 = this._writeFunctionNode(e3, t7);
        break;
      case "property-access-node":
        i3 = this._writePropertyAccessNode(e3, t7);
        break;
      case "property-access-2d-node":
        i3 = this._writePropertyAccess2DNode(e3, t7);
        break;
      case "text-node":
        i3 = t7.text;
        break;
      case "block-node":
        i3 = this._writeBlockNode(e3, t7);
        break;
      case "condition-node":
        i3 = this._writeConditionNode(e3, t7);
    }
    return e3.setEmit(t7, i3), i3;
  }
  _writeScopeNode(e3, r5) {
    const i3 = new r5.child.constructor();
    i3.setDebugName(r5.debugInfo.name);
    const n4 = this._write(e3, i3, true);
    t3(e3, `{ /*ScopeStart: ${r5.uid} ${r5.debugInfo.name}*/`), e3.indent += 2;
    return t3(e3, `${n4} = ${this._write(e3, r5.child)};`), e3.indent -= 2, t3(e3, `} /*ScopeEnd: ${r5.uid} ${r5.debugInfo.name}*/`), n4;
  }
  _writeConditionNode(e3, r5) {
    const i3 = new r5.ifTrue.constructor(), n4 = this._write(e3, i3, true);
    t3(e3, `if (${this._write(e3, r5.condition)}) {`), e3.indent += 2;
    const o3 = e3.createSubgraphContext(), s4 = this._write(o3, r5.ifTrue);
    if (e3.body += o3.body, s4 && t3(e3, `${n4} = ${s4};`), e3.indent -= 2, t3(e3, "}"), r5.ifFalse) {
      t3(e3, "else {"), e3.indent += 2;
      const i4 = e3.createSubgraphContext(), o4 = this._write(i4, r5.ifFalse);
      e3.body += i4.body, o4 && t3(e3, `${n4} = ${o4};`), e3.indent -= 2, t3(e3, "}");
    }
    return n4;
  }
  _writeBlockNode(e3, r5) {
    const { captureList: i3, generator: n4, returnType: o3 } = r5, s4 = {};
    for (const t7 in i3) {
      if (!i3[t7]) continue;
      const r6 = this._write(e3, i3[t7]);
      s4[t7] = r6;
    }
    const d4 = new o3(), c2 = this._write(e3, d4, true);
    if (s4.out = c2, r5.subgraph) {
      const t7 = e3.createSubgraphContext(), i4 = this._write(t7, r5.subgraph.child), n5 = t7.body;
      s4.subgraph = { varName: i4, body: n5 };
    }
    const a4 = n4(s4);
    return t3(e3, "{\n"), e3.indent += 2, t3(e3, a4), e3.indent -= 2, t3(e3, "}\n"), c2;
  }
  _writePropertyAccessNode(e3, t7) {
    const r5 = this._write(e3, t7.target);
    if ("string" == typeof t7.property && t7.property.includes("[")) return `${r5}${t7.property}`;
    if ("string" != typeof t7.property) {
      return `${r5}[${this._write(e3, t7.property)}]`;
    }
    return `${r5}.${t7.property}`;
  }
  _writePropertyAccess2DNode(e3, t7) {
    return `${this._write(e3, t7.target)}[${this._write(e3, t7.x)}][${this._write(e3, t7.y)}]`;
  }
  _writeFunctionNode(r5, i3) {
    const n4 = i3.returnType.type;
    if (i3.isInfix) {
      const [o4, s5] = i3.children.map((e3) => this._write(r5, e3)), d4 = this._createVarName(r5, i3);
      return t3(r5, `${n4.padEnd(e2)} ${d4} = ${o4} ${i3.token} ${s5};`, i3.uid), d4;
    }
    const o3 = i3.children.map((e3) => this._write(r5, e3)).join(", "), s4 = this._createVarName(r5, i3);
    return t3(r5, `${n4.padEnd(e2)} ${s4} = ${i3.token}(${o3});`, i3.uid), s4;
  }
  _writePrimitiveNode(r5, i3, n4 = false) {
    var _a;
    const o3 = r5.getInput(i3);
    if (o3) return o3.isUsed = true, o3.variableName;
    const s4 = 1 === i3.children.length && ((_a = i3.children[0]) == null ? void 0 : _a.type) === i3.type;
    if (!i3.isMutable && (i3.isImplicit || s4)) return this._write(r5, i3.children[0]);
    const d4 = this._createVarName(r5, i3);
    if (n4) return t3(r5, `${i3.type.padEnd(e2)} ${d4};`, i3.uid), d4;
    const c2 = !i3.debugInfo.name && !i3.isMutable;
    if (c2 && "float" === i3.type && "number" == typeof i3.children[0]) return Number.isInteger(i3.children[0]) ? i3.children[0].toFixed(1) : i3.children[0].toString();
    if (c2 && "int" === i3.type && "number" == typeof i3.children[0] && Number.isInteger(i3.children[0])) return i3.children[0].toString();
    const a4 = i3.children.map((e3) => this._write(r5, e3)).join(", ");
    return "array" === i3.type ? (t3(r5, `${i3.type.padEnd(e2)} ${d4} = [${a4}];`, i3.uid), d4) : c2 ? `${i3.type}(${a4})` : (t3(r5, `${i3.type.padEnd(e2)} ${d4} = ${i3.type}(${a4});`, i3.uid), d4);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/graph/ShaderGraphContext.js
var t4 = class _t {
  constructor(e3, t7, d4) {
    this.variableName = e3, this.variableInputType = t7, this.node = d4, this.type = "shader-input", this.isUsed = false;
  }
  clone() {
    return new _t(this.variableName, this.variableInputType, i2(this.node));
  }
};
var d2 = class _d {
  constructor(e3, t7, d4) {
    this.outVariableName = e3, this.outVariableType = t7, this.node = d4, this.type = "shader-output";
  }
  clone() {
    const t7 = new _d(this.outVariableName, this.outVariableType, i2(this.node));
    return t7.variableName = this.variableName, t7;
  }
};
var o2 = class _o {
  static createVertex(e3, a4, n4, i3, r5, s4) {
    const u2 = [];
    for (const d4 in e3) {
      const o3 = e3[d4], a5 = n4.get(d4);
      a5 ? u2.push(new t4(a5, "builtin", o3)) : u2.push(new t4("a_" + d4, "in", o3));
    }
    for (const d4 of i3) {
      const e4 = d4.uniformHydrated;
      u2.push(new t4(d4.uniformName, "uniform", e4));
    }
    const p4 = [];
    for (const t7 in a4) {
      const e4 = a4[t7];
      "glPosition" === t7 ? p4.push(new d2("gl_Position", "builtin", e4)) : "glPointSize" === t7 ? p4.push(new d2("gl_PointSize", "builtin", e4)) : p4.push(new d2("v_" + t7, "out", e4));
    }
    return new _o(u2, p4, r5, s4);
  }
  static createFragment(e3, a4, n4, i3, r5, s4) {
    const u2 = [], p4 = Array.from(r5.rootOutputNodes());
    for (const d4 in e3) {
      const o3 = e3[d4], a5 = n4.get(d4);
      if (a5) {
        u2.push(new t4(a5, "builtin", o3));
        continue;
      }
      const i4 = p4.find((e4) => e4.node === o3);
      i4 && u2.push(new t4(i4.outVariableName, "in", o3));
    }
    for (const d4 of i3) {
      const e4 = d4.uniformHydrated;
      u2.push(new t4(d4.uniformName, "uniform", e4));
    }
    const h3 = [];
    for (const t7 in a4) {
      const e4 = a4[t7], o3 = n4.get(t7);
      "discard" === t7 ? h3.push(new d2(null, "discard", e4)) : o3 ? h3.push(new d2(o3, "builtin", e4)) : h3.push(new d2(t7, "out", e4));
    }
    return new _o(u2, h3, s4);
  }
  constructor(e3, t7, d4, o3) {
    this.type = "shader-graph-context", this.indent = 0, this.body = "", this.varCount = 0, this._inputShaderTypesByNodeUid = /* @__PURE__ */ new Map(), this._nodeEmitMap = /* @__PURE__ */ new Map();
    for (const a4 of e3) this._inputShaderTypesByNodeUid.set(a4.node.uid, a4);
    this._outputShaderTypes = t7, this._transformFeedbackBindings = d4, this._transformFeedbackNames = new Set(d4.map((e4) => "v_" + e4.propertyKey)), this._usedInFragmentShader = o3;
  }
  shouldPruneOutputNode(e3) {
    return !!this._usedInFragmentShader && ("builtin" !== e3.outVariableType && (!this._transformFeedbackNames.has(e3.outVariableName) && !this._usedInFragmentShader.has(e3.node.uid)));
  }
  setEmit(e3, t7) {
    this._nodeEmitMap.set(e3.uid, t7);
  }
  getEmit(e3) {
    return this._nodeEmitMap.get(e3.uid);
  }
  inputs() {
    return this._inputShaderTypesByNodeUid.values();
  }
  getInput(e3) {
    return this._inputShaderTypesByNodeUid.get(e3.uid);
  }
  *rootOutputNodes() {
    for (const e3 of this._outputShaderTypes) yield e3;
  }
  *nodes() {
    const e3 = [];
    for (const t7 of this._outputShaderTypes.values()) e3.push(t7.node);
    for (; e3.length; ) {
      const t7 = e3.pop();
      "number" != typeof t7 && "boolean" != typeof t7 && e3.push(...t7.children.filter(Boolean)), yield t7;
    }
  }
  *nodesOfTypeOrFunction() {
    for (const e3 of this.nodes()) "number" != typeof e3 && "boolean" != typeof e3 && (yield e3);
  }
  createSubgraphContext() {
    const e3 = this.clone();
    return e3.body = "", e3.indent = this.indent + 2, e3._nodeEmitMap = new Map(this._nodeEmitMap), e3;
  }
  clone() {
    const e3 = new _o([], this._outputShaderTypes, this._transformFeedbackBindings, this._usedInFragmentShader);
    return e3._inputShaderTypesByNodeUid = this._inputShaderTypesByNodeUid, e3.indent = this.indent, e3.body = this.body, e3.varCount = this.varCount, e3._nodeEmitMap = this._nodeEmitMap, e3;
  }
  insertVertexShader(e3) {
    e3.vertex.code.add(""), this._insertInputs(e3, "vertex"), e3.vertex.code.add(""), e3.vertex.code.add("// OUTPUTS: "), e3.vertex.code.add("// --------------------------------------------------------- ");
    for (const t7 of this.rootOutputNodes()) {
      const d4 = "builtin" === t7.outVariableType;
      this.shouldPruneOutputNode(t7) || (d4 ? e3.vertex.code.add(`// ${t7.outVariableType.padEnd(7)} ${t7.node.type.padEnd(9)} ${t7.outVariableName};`) : e3.vertex.code.add(`${t7.outVariableType.padEnd(10)} ${t7.node.type.padEnd(9)} ${t7.outVariableName};`));
    }
    e3.vertex.code.add(""), e3.vertex.code.add("void main() {"), e3.vertex.code.add("  " + this.body.split("\n").join("\n  "));
    for (const t7 of this.rootOutputNodes()) this.shouldPruneOutputNode(t7) || e3.vertex.code.add(`  ${t7.outVariableName} = ${t7.variableName};`);
    e3.vertex.code.add("}");
  }
  insertFragmentShader(e3) {
    this._insertInputs(e3, "fragment"), e3.fragment.code.add(""), e3.fragment.code.add("// OUTPUTS: "), e3.fragment.code.add("// --------------------------------------------------------- ");
    let t7 = 0;
    for (const d4 of this.rootOutputNodes()) {
      "builtin" === d4.outVariableType ? e3.fragment.code.add(`// ${d4.outVariableType.padEnd(7)} ${d4.node.type.padEnd(9)} ${d4.outVariableName};`) : e3.outputs.add(d4.outVariableName, d4.node.type, t7++);
    }
    e3.fragment.code.add(""), e3.fragment.code.add("void main() {"), e3.fragment.code.add("  " + this.body.split("\n").join("\n  "));
    for (const d4 of this.rootOutputNodes()) "discard" === d4.outVariableType ? (e3.fragment.code.add("  // TODO: Should ensure codegen for discard appears first in fragment shader"), e3.fragment.code.add(`  if (${d4.variableName}) {`), e3.fragment.code.add("    discard;"), e3.fragment.code.add("  }"), e3.fragment.code.add("  ")) : e3.fragment.code.add(`  ${d4.outVariableName} = ${d4.variableName};`);
    e3.fragment.code.add("}");
  }
  _insertInputs(e3, t7) {
    e3[t7].code.add("// INPUTS: "), e3[t7].code.add("// --------------------------------------------------------- ");
    for (const d4 of this.inputs()) d4.isUsed && "builtin" !== d4.variableInputType && ("array" === d4.node.type ? e3[t7].code.add(`${d4.variableInputType.padEnd(10)} ${d4.node.elementType.type.padEnd(9)} ${d4.variableName}[${d4.node.size}];`) : "array-2d" === d4.node.type ? e3[t7].code.add(`${d4.variableInputType.padEnd(10)} ${d4.node.elementType.type.padEnd(9)} ${d4.variableName}[${d4.node.size}]; // Emulated 2D Array. Not supported by ES3.0`) : e3[t7].code.add(`${d4.variableInputType.padEnd(10)} ${d4.node.type.padEnd(9)} ${d4.variableName};`));
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/textureUtils.js
function t5(t7, r5, a4) {
  const i3 = new p(r5.width, r5.height);
  return i3.dataType = r5.dataType, r5.depth && (i3.depth = r5.depth), r5.flipped && (i3.flipped = r5.flipped), r5.hasMipmap && (i3.hasMipmap = r5.hasMipmap), i3.internalFormat = r5.internalFormat, r5.isImmutable && (i3.isImmutable = r5.isImmutable), r5.isOpaque && (i3.isOpaque = r5.isOpaque), r5.maxAnisotropy && (i3.maxAnisotropy = r5.maxAnisotropy), i3.pixelFormat = r5.pixelFormat, r5.preMultiplyAlpha && (i3.preMultiplyAlpha = r5.preMultiplyAlpha), r5.samplingMode && (i3.samplingMode = r5.samplingMode), r5.target && (i3.target = r5.target), i3.uniform = r5.uniform, r5.unpackAlignment && (i3.unpackAlignment = r5.unpackAlignment), r5.wrapMode && (i3.wrapMode = r5.wrapMode), new w(t7, i3, a4);
}

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/typed/TypedShaderProgram.js
var s3 = () => n.getLogger("esri.views.2d.engine.webgl.shaderGraph.typed.TypedShaderProgram");
function n3(e3, t7, o3) {
  const i3 = t7.length;
  if (i3 !== o3) {
    const n4 = new s("Invalid Uniform", `Invalid length, expected ${o3} but got ${i3}`, { uniformName: e3, values: t7 });
    s3().errorOnce(n4);
  }
}
var a3 = class {
  constructor(r5, e3, t7, o3, i3, s4) {
    this._program = null, this._vao = null, this._temporaryTextures = [], this.vertexShader = r5, this.fragmentShader = e3, this._locations = t7, this._locationInfo = o3, this._uniformBindings = i3, this._transformFeedbackBindings = s4;
  }
  destroy() {
    this._program && this._program.dispose(), this.cleanupTemporaryTextures();
  }
  get locations() {
    return this._locations;
  }
  get locationInfo() {
    return this._locationInfo;
  }
  setUniforms(r5) {
    this._uniforms = r5;
  }
  cleanupTemporaryTextures() {
    for (const r5 of this._temporaryTextures) r5.dispose();
    this._temporaryTextures = [];
  }
  bind(r5) {
    const e3 = this._uniforms;
    if (!this._program) {
      const e4 = /* @__PURE__ */ new Map();
      for (const [r6, o3] of this._locations) e4.set(r6, o3);
      const t7 = [];
      for (const r6 of this._transformFeedbackBindings ?? []) {
        const { index: e5, propertyKey: o3 } = r6;
        t7[e5] = `v_${o3}`;
      }
      this._program = new r2(r5, this.vertexShader, this.fragmentShader, e4, /* @__PURE__ */ new Map(), t7);
    }
    const s4 = this._program;
    r5.useProgram(s4);
    for (const o3 of this._uniformBindings) {
      const { shaderModulePath: a4, uniformName: f3, uniformType: m3, uniformArrayLength: c2 } = o3, u2 = t(a4, e3);
      if (null == u2) {
        if ("sampler2D" === m3) continue;
        throw new Error(`Failed to find uniform value for ${a4}`);
      }
      switch ("array" === m3 || "array-2d" === m3 ? o3.uniformArrayElementType : m3) {
        case "sampler2D": {
          const { unit: e4, texture: t7 } = u2;
          if (s4.setUniform1i(f3, e4), "type" in t7) r5.bindTexture(t7, e4);
          else {
            const o4 = t5(r5, t7.descriptor, t7.data);
            r5.bindTexture(o4, e4);
          }
          break;
        }
        case "int":
          if (!c2) {
            s4.setUniform1i(f3, u2);
            break;
          }
          n3(o3.uniformName, u2, c2), s4.setUniform1iv(f3, u2);
          break;
        case "float":
          if (!c2) {
            s4.setUniform1f(f3, u2);
            break;
          }
          n3(o3.uniformName, u2, c2), s4.setUniform1fv(f3, u2);
          break;
        case "vec2":
          if (!c2) {
            s4.setUniform2f(f3, u2[0], u2[1]);
            break;
          }
          n3(o3.uniformName, u2, c2), s4.setUniform2fv(f3, u2.flat());
          break;
        case "vec3":
          if (!c2) {
            s4.setUniform3f(f3, u2[0], u2[1], u2[2]);
            break;
          }
          n3(o3.uniformName, u2, c2), s4.setUniform3fv(f3, u2.flat());
          break;
        case "vec4":
          if (!c2) {
            s4.setUniform4f(f3, u2[0], u2[1], u2[2], u2[3]);
            break;
          }
          n3(o3.uniformName, u2, c2), s4.setUniform4fv(f3, u2.flat());
          break;
        case "mat3":
          s4.setUniformMatrix3fv(f3, u2);
          break;
        case "mat4":
          s4.setUniformMatrix4fv(f3, u2);
          break;
        default:
          throw new Error(`Unable to set uniform for type ${m3}`);
      }
    }
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/GraphShaderModule.js
function d3(t7) {
  return new t7();
}
function f2(t7, e3, r5) {
  const o3 = t7.constructor[e3] ?? [];
  t7.constructor.hasOwnProperty(e3) || Object.defineProperty(t7.constructor, e3, { value: o3.slice() }), t7.constructor[e3].push(r5);
}
function h2(t7, e3) {
  return (r5, o3) => {
    f2(r5, "locations", { typeCtor: e3, propertyKey: o3, parameterIndex: null, index: t7 });
  };
}
var l3 = (t7) => (e3, r5) => {
  f2(e3, "builtins", { builtin: t7, propertyKey: r5 });
};
var m2 = (t7) => (e3, r5, o3) => {
  f2(e3, "inputs", { inputCtor: t7, propertyKey: r5, parameterIndex: o3 });
};
var g2 = (t7) => (e3, r5) => {
  f2(e3, "uniforms", { typeCtor: t7, propertyKey: r5 });
};
var _2 = (t7) => (e3, r5) => {
  f2(e3, "options", { typeCtor: t7, propertyKey: r5 });
};
var K2 = (t7, e3) => {
  f2(t7, "defines", { propertyKey: e3 });
};
var b2 = (t7, e3) => (r5, o3) => {
  r5.constructor.builtins.push({ builtin: t7, propertyKey: o3, typeCtor: e3 });
};
var C2 = class {
};
C2.builtins = [], r([b2("gl_VertexID", W)], C2.prototype, "glVertexID", void 0);
var I2 = class {
};
var v2 = class {
};
v2.builtins = [], r([b2("gl_FragCoord", Y)], v2.prototype, "glFragCoord", void 0), r([b2("gl_PointCoord", C)], v2.prototype, "glPointCoord", void 0);
var w3 = class {
};
r([l3("gl_FragDepth")], w3.prototype, "glFragDepth", void 0);
var P2 = class {
  constructor() {
    this.type = "uniform-group";
  }
  get _uniforms() {
    return this.constructor.uniforms ?? [];
  }
};
var j2 = class {
  constructor() {
    this.logShader = false, this.computeAttributes = {};
  }
  get vertexInput() {
    const t7 = this._shaderModuleClass.inputs.findLast((t8) => "vertex" === t8.propertyKey && 0 === t8.parameterIndex);
    if (!t7) throw new Error("Unable to find vertex input parameter");
    return t7;
  }
  get computeInput() {
    return this._shaderModuleClass.inputs.findLast((t7) => "vertex" === t7.propertyKey && 1 === t7.parameterIndex);
  }
  get fragmentInput() {
    const t7 = this._shaderModuleClass.inputs.findLast((t8) => "fragment" === t8.propertyKey);
    if (!t7) throw new Error("Unable to find fragment input parameter");
    return t7;
  }
  get transformFeedbackBindings() {
    return this.fragmentInput.inputCtor.transformFeedbackBindings ?? [];
  }
  get locations() {
    var _a;
    return [...this.vertexInput.inputCtor.locations, ...((_a = this.computeInput) == null ? void 0 : _a.inputCtor.locations) ?? []];
  }
  get locationsMap() {
    const t7 = /* @__PURE__ */ new Map(), r5 = /* @__PURE__ */ new Set();
    for (const o3 of this.locations) r5.has(o3.index) ? n.getLogger("esri.views.2d.engine.webgl.shaderGraph.GraphShaderModule").warnOnce("mapview-rendering", `Unable to assigned attribute ${o3.propertyKey} to ${o3.index}. Index already in use`, { locationsMap: t7 }) : (t7.set(o3.propertyKey, o3.index), r5.add(o3.index));
    return t7;
  }
  get locationInfo() {
    if (!this._locationInfo) {
      const t7 = this.locationsMap, e3 = Array.from(t7.entries()).map(([t8, e4]) => `${t8}.${e4}`).join("."), o3 = l(e3), n4 = this.computeAttributes;
      this._locationInfo = { hash: o3, stringHash: e3, locations: t7, computeAttributeMap: n4 };
    }
    return this._locationInfo;
  }
  get renamedLocationsMap() {
    const t7 = /* @__PURE__ */ new Map();
    for (const e3 of this.locations) t7.set("a_" + e3.propertyKey, e3.index);
    return t7;
  }
  get optionPropertyKeys() {
    if (!this._optionPropertyKeys) {
      const t7 = /* @__PURE__ */ new Set();
      for (const e3 of this._options) t7.add(e3.propertyKey);
      this._optionPropertyKeys = t7;
    }
    return this._optionPropertyKeys;
  }
  get _shaderModuleClass() {
    return this.constructor;
  }
  get _defines() {
    return this._shaderModuleClass.defines ?? [];
  }
  get _options() {
    return this._shaderModuleClass.options ?? [];
  }
  get _uniforms() {
    return this._shaderModuleClass.uniforms ?? [];
  }
  getProgram(t7, e3, r5, o3) {
    try {
      const { vertex: n4, fragment: s4, uniformBindings: i3 } = this._generateShaders(t7, e3, r5, o3);
      return new a3(n4, s4, this.renamedLocationsMap, this.locationInfo, i3, this.transformFeedbackBindings);
    } catch (n4) {
      return new a3("", "", this.renamedLocationsMap, this.locationInfo, [], this.transformFeedbackBindings);
    }
  }
  getDebugUniformClassInfo(t7) {
    const e3 = this._options.find((e4) => e4.propertyKey === t7);
    if (e3) return { type: "option", className: e3.typeCtor };
    const r5 = this._uniforms.find((e4) => e4.propertyKey === t7);
    if (!r5) throw new Error(`Unable to find uniform class type for property: ${t7}`);
    return { type: "required", className: r5.typeCtor };
  }
  getShaderKey(t7, e3, r5, o3) {
    const n4 = Object.keys(t7).map((e4) => `${e4}.${t7[e4]}`).join("."), s4 = Object.keys(r5).map((t8) => `${t8}.${r5[t8]}`).join("."), i3 = Object.keys(o3).map((t8) => `${t8}.${o3[t8]}`).join("."), p4 = Object.keys(e3).filter((t8) => this.optionPropertyKeys.has(t8) && e3[t8]).join(".");
    return `${this.type}.${n4}.${s4}.${i3}.${p4}`;
  }
  _generateShaders(t7, e3, r5, o3) {
    const n4 = [];
    this._setDefines(r5), this._setOptionalUniforms(n4, e3), this._setRequiredUniforms(n4);
    const s4 = this._hydrateVertexInput(o3), i3 = this._injectPackPrecisionFactor(s4, t7), c2 = this._hydrateComputeInput(), y2 = c2 && this._injectComputePackPrecisionFactor(c2, t7), d4 = this.vertex(i3, y2), f3 = this._hydrateFragmentInput(d4), h3 = this.fragment(f3), l4 = /* @__PURE__ */ new Set();
    for (const p4 in h3) {
      const t8 = h3[p4];
      e(l4, t8);
    }
    const m3 = this._getVertexInputBuiltins(), g3 = o2.createVertex({ ...s4, ...c2 }, d4, m3, n4, this.transformFeedbackBindings, l4);
    new r4().write(g3);
    const _3 = this._getFragmentInputBuiltins(h3);
    _3.set("glPointCoord", "gl_PointCoord");
    const K3 = o2.createFragment(f3, h3, _3, n4, g3, this.transformFeedbackBindings);
    new r4().write(K3);
    const x2 = this._createShaderBuilder(g3, K3), b3 = x2.generate("vertex"), C3 = x2.generate("fragment");
    return this.logShader && (console.log(b3), console.log(C3)), { vertex: b3, fragment: C3, uniformBindings: n4 };
  }
  _setDefines(t7) {
    for (const e3 in t7) this[e3] = t7[e3];
  }
  _setOptionalUniforms(t7, e3) {
    for (const r5 of this._options) {
      e3[r5.propertyKey] ? this[r5.propertyKey] = this._hydrateUniformGroup(t7, r5) : this[r5.propertyKey] = null;
    }
  }
  _setRequiredUniforms(t7) {
    for (const e3 of this._uniforms) this[e3.propertyKey] = this._hydrateUniformGroup(t7, e3);
  }
  _hydrateUniformGroup(t7, e3) {
    const r5 = new (0, e3.typeCtor)();
    for (const o3 of r5._uniforms ?? []) {
      const n4 = d3(o3.typeCtor), s4 = `u_${e3.propertyKey}_${o3.propertyKey}`, i3 = n4.type, p4 = [e3.propertyKey, o3.propertyKey].join(".");
      if ("type" in o3.typeCtor && "array" === o3.typeCtor.type) {
        const e4 = n4;
        t7.push({ shaderModulePath: p4, uniformName: s4, uniformType: i3, uniformArrayLength: e4.size, uniformArrayElementType: e4.elementType.type, uniformHydrated: n4 });
      } else if ("type" in o3.typeCtor && "array-2d" === o3.typeCtor.type) {
        const e4 = n4;
        t7.push({ shaderModulePath: p4, uniformName: s4, uniformType: i3, uniformArrayLength: e4.size, uniformArrayElementType: e4.elementType.type, uniformHydrated: n4 });
      } else t7.push({ shaderModulePath: p4, uniformName: s4, uniformType: i3, uniformHydrated: n4 });
      r5[o3.propertyKey] = n4;
    }
    return r5;
  }
  _hydrateVertexInput(t7) {
    const e3 = this.vertexInput.inputCtor, r5 = e3.locations.reduce((e4, r6) => false === t7[r6.propertyKey] ? e4 : { ...e4, [r6.propertyKey]: d3(r6.typeCtor) }, {});
    for (const { propertyKey: o3, typeCtor: n4 } of e3.builtins) {
      const t8 = d3(n4);
      r5[o3] = t8;
    }
    return r5;
  }
  _hydrateComputeInput() {
    if (null == this.computeInput) return null;
    return this.computeInput.inputCtor.locations.reduce((t7, e3) => ({ ...t7, [e3.propertyKey]: d3(e3.typeCtor) }), {});
  }
  _injectPackPrecisionFactor(t7, e3) {
    const r5 = {};
    for (const n4 in t7) {
      const s4 = t7[n4], i3 = e3[n4];
      if (i3) {
        if ("float" !== s4.type && "vec2" !== s4.type && "vec3" !== s4.type && "vec4" !== s4.type) throw new Error(`InternalError: packPrecisionFactor requires GenType, but found ${s4.type}`);
        r5[n4] = s4.divide(new _(i3));
      } else r5[n4] = s4;
    }
    return r5;
  }
  _injectComputePackPrecisionFactor(t7, e3) {
    const r5 = {}, n4 = /* @__PURE__ */ new Map();
    for (const o3 in this.computeAttributes) for (const t8 of this.computeAttributes[o3] ?? []) n4.set(t8, o3);
    for (const s4 in t7) {
      const i3 = t7[s4], p4 = n4.get(s4);
      if (!p4) continue;
      const a4 = e3[p4];
      if (a4) {
        if ("float" !== i3.type && "vec2" !== i3.type && "vec3" !== i3.type && "vec4" !== i3.type) throw new Error(`InternalError: packPrecisionFactor requires GenType, but found ${i3.type}`);
        r5[s4] = i3.divide(new _(a4));
      } else r5[s4] = i3;
    }
    return r5;
  }
  _hydrateFragmentInput(t7) {
    const e3 = {};
    for (const r5 in t7) e3[r5] = t7[r5];
    for (const { propertyKey: r5, typeCtor: o3 } of v2.builtins) {
      const t8 = d3(o3);
      e3[r5] = t8;
    }
    return e3;
  }
  _getVertexInputBuiltins() {
    const t7 = this.vertexInput.inputCtor, e3 = /* @__PURE__ */ new Map();
    for (const { builtin: r5, propertyKey: o3 } of t7.builtins) e3.set(o3, r5);
    return e3;
  }
  _getFragmentInputBuiltins(t7) {
    const e3 = t7.constructor, r5 = /* @__PURE__ */ new Map();
    for (const o3 of e3.builtins ?? []) r5.set(o3.propertyKey, o3.builtin);
    return r5;
  }
  _createShaderBuilder(t7, e3) {
    const r5 = new i();
    return this._insertDebugInfo(r5), t7.insertVertexShader(r5), e3.insertFragmentShader(r5), r5;
  }
  _insertDebugInfo(t7) {
    t7.vertex.code.add("// DEFINES: "), t7.vertex.code.add("// --------------------------------------------------------- ");
    for (const e3 of this._defines) this[e3.propertyKey] ? t7.vertex.code.add(`//   ${e3.propertyKey}: true`) : t7.vertex.code.add(`//   ${e3.propertyKey}: false`);
    t7.vertex.code.add(""), t7.vertex.code.add("// OPTIONS: "), t7.vertex.code.add("// --------------------------------------------------------- ");
    for (const e3 of this._options) this[e3.propertyKey] ? t7.vertex.code.add(`//   ${e3.propertyKey}: true`) : t7.vertex.code.add(`//   ${e3.propertyKey}: false`);
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/Technique.js
var t6 = class {
  constructor() {
    this.drawPhase = E.MAP | E.HITTEST | E.HIGHLIGHT | E.DEBUG;
  }
  startup() {
  }
  shutdown(s4) {
  }
};

export {
  t6 as t,
  B,
  U,
  _,
  C,
  X,
  Y,
  J,
  W,
  nt,
  rt,
  ct,
  ut,
  st,
  ot,
  lt,
  ht,
  ft,
  xt,
  It,
  zt,
  Tt,
  Dt,
  St,
  Rt,
  Pt,
  Ut,
  Ct,
  Xt,
  Yt,
  Gt,
  Ht,
  Vt,
  Kt,
  ee,
  re,
  ce,
  ie,
  fe,
  pe,
  ge,
  Ee,
  Me,
  qe,
  Ue,
  _e,
  Ce,
  Ye,
  Ge,
  Le,
  Ze,
  nn,
  cn,
  un,
  sn,
  pn,
  a3 as a,
  h2 as h,
  m2 as m,
  g2 as g,
  _2,
  K2 as K,
  C2,
  I2 as I,
  v2 as v,
  w3 as w,
  P2 as P,
  j2 as j
};
//# sourceMappingURL=chunk-ZPDSNSZE.js.map
