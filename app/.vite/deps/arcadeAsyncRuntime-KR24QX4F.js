import {
  B as B2,
  C as C2,
  E,
  d,
  f,
  f3 as f2,
  g as g2,
  n as n3,
  p2 as p,
  p3 as p2,
  s as s2,
  s2 as s4,
  y
} from "./chunk-6CNFKQP7.js";
import "./chunk-OQ3YQLHO.js";
import {
  T
} from "./chunk-2ERY7JQX.js";
import "./chunk-KAAAN25B.js";
import "./chunk-RQTCSDBY.js";
import "./chunk-SMPH4DRM.js";
import "./chunk-4DEIS6AK.js";
import {
  D
} from "./chunk-7SWL6AYJ.js";
import "./chunk-PE5QC36M.js";
import {
  C
} from "./chunk-GKX3Z6XX.js";
import {
  Ae,
  B,
  G,
  H,
  I,
  L,
  U,
  W,
  Y,
  Ye,
  _,
  be,
  ce,
  e as e2,
  ee,
  me,
  n as n4,
  oe,
  r as r2,
  s,
  s2 as s3,
  v,
  ye
} from "./chunk-O4H354HZ.js";
import "./chunk-SCYMP6Y5.js";
import "./chunk-TSDU5FXE.js";
import "./chunk-JMVIOIWP.js";
import "./chunk-F7TFMQ3A.js";
import "./chunk-YRSM2W7P.js";
import "./chunk-EM6PL3GZ.js";
import "./chunk-J7454WTE.js";
import "./chunk-U6JFTJMZ.js";
import {
  a,
  r,
  u
} from "./chunk-TA6O62P3.js";
import "./chunk-CBVVZO37.js";
import "./chunk-Z2A222O3.js";
import "./chunk-FFVHLGAP.js";
import "./chunk-QM4DRRZI.js";
import "./chunk-LPMFP5XM.js";
import "./chunk-FF44HCOD.js";
import "./chunk-AVY6RZDG.js";
import "./chunk-XEBZUAYT.js";
import "./chunk-6REABBOQ.js";
import "./chunk-STBNLAGT.js";
import "./chunk-HSI6V34N.js";
import {
  e,
  i,
  n as n2,
  o,
  t
} from "./chunk-ZDVQNOKR.js";
import "./chunk-Y3AY7I5U.js";
import "./chunk-SUVHJC6Z.js";
import "./chunk-WZBMMIVS.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-5EWD56QJ.js";
import "./chunk-ZYOZHQFS.js";
import "./chunk-PAGKMWJH.js";
import "./chunk-CHL75CEP.js";
import "./chunk-NENDDUWH.js";
import {
  n
} from "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-H7PA52WJ.js";
import "./chunk-PODRVOXS.js";
import "./chunk-NALU24NB.js";
import "./chunk-REAPFM7O.js";
import "./chunk-UNGOQUF2.js";
import "./chunk-7LY6RE4Z.js";
import "./chunk-AIKBABBU.js";
import "./chunk-A42OBC4U.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import "./chunk-RYSF6YCR.js";
import "./chunk-4LTV6KQ5.js";
import "./chunk-PPIAYGRE.js";
import "./chunk-L7T5Z7MG.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/arcade/arcadeAsyncRuntime.js
async function H2(e3, t2) {
  const n5 = [];
  for (let r3 = 0; r3 < t2.arguments.length; r3++) n5.push(await ee2(e3, t2.arguments[r3]));
  return n5;
}
async function J(e3, t2, n5) {
  if (true === t2.preparsed) return n5(e3, null, t2.arguments);
  return n5(e3, t2, await H2(e3, t2));
}
var Q = class extends r2 {
  constructor(e3, t2) {
    super(), this.definition = null, this.context = null, this.definition = e3, this.context = t2;
  }
  createFunction(e3) {
    return (...t2) => {
      const n5 = { spatialReference: this.context.spatialReference, console: this.context.console, lrucache: this.context.lrucache, timeZone: this.context.timeZone ?? null, exports: this.context.exports, libraryResolver: this.context.libraryResolver, interceptor: this.context.interceptor, localScope: {}, depthCounter: { depth: e3.depthCounter + 1 }, globalScope: this.context.globalScope };
      if (n5.depthCounter.depth > 64) throw new a(e3, r.MaximumCallDepth, null);
      return Ke(this.definition, n5, t2, null);
    };
  }
  call(e3, t2) {
    return $(e3, t2, (n5, r3, o2) => {
      const a2 = { spatialReference: e3.spatialReference, services: e3.services, console: e3.console, libraryResolver: e3.libraryResolver, exports: e3.exports, lrucache: e3.lrucache, timeZone: e3.timeZone ?? null, interceptor: e3.interceptor, localScope: {}, abortSignal: e3.abortSignal, globalScope: e3.globalScope, depthCounter: { depth: e3.depthCounter.depth + 1 } };
      if (a2.depthCounter.depth > 64) throw new a(e3, r.MaximumCallDepth, t2);
      return Ke(this.definition, a2, o2, t2);
    });
  }
  marshalledCall(e3, t2, n5, r3) {
    return r3(e3, t2, async (o2, a2, i2) => {
      const l = { spatialReference: e3.spatialReference, globalScope: n5.globalScope, depthCounter: { depth: e3.depthCounter.depth + 1 }, libraryResolver: e3.libraryResolver, exports: e3.exports, console: e3.console, abortSignal: e3.abortSignal, lrucache: e3.lrucache, timeZone: e3.timeZone ?? null, interceptor: e3.interceptor, localScope: {} };
      return i2 = i2.map((t3) => !G(t3) || t3 instanceof s3 ? t3 : n4(t3, e3, r3)), n4(await Ke(this.definition, l, i2, t2), n5, r3);
    });
  }
};
var X = class extends s {
  constructor(e3) {
    super(), this.source = e3;
  }
  global(t2) {
    const n5 = this.executingContext.globalScope[n3(t2)];
    if (G(n5.value) && !(n5.value instanceof s3)) {
      const e3 = new s3();
      e3.fn = n5.value, e3.parameterEvaluator = $, e3.context = this.executingContext, n5.value = e3;
    }
    return n5.value;
  }
  setGlobal(t2, n5) {
    if (G(n5)) throw new a(null, r.AssignModuleFunction, null);
    this.executingContext.globalScope[n3(t2)] = { value: n5 };
  }
  hasGlobal(t2) {
    return void 0 === this.executingContext.exports[t2] && (t2 = n3(t2)), void 0 !== this.executingContext.exports[t2];
  }
  async loadModule(e3) {
    let t2 = e3.spatialReference;
    null == t2 && (t2 = new g({ wkid: 102100 })), this.moduleScope = Ge({}, e3.customfunctions, e3.timeZone), this.executingContext = { spatialReference: t2, services: e3.services, libraryResolver: new s2(e3.libraryResolver._moduleSingletons, this.source.syntax.loadedModules), exports: {}, abortSignal: void 0 === e3.abortSignal || null === e3.abortSignal ? { aborted: false } : e3.abortSignal, globalScope: this.moduleScope, console: e3.console ?? Le, lrucache: e3.lrucache, timeZone: e3.timeZone ?? null, interceptor: e3.interceptor, localScope: null, depthCounter: { depth: 1 } }, await me2(this.executingContext, this.source.syntax);
  }
};
async function $(e3, t2, n5) {
  if (true === t2.preparsed) return n5(e3, null, t2.arguments);
  return n5(e3, t2, await H2(e3, t2));
}
async function ee2(e3, t2) {
  t2.breakpoint && await t2.breakpoint();
  try {
    switch (t2.type) {
      case "UpdateExpression":
        return await pe(e3, t2);
      case "AssignmentExpression":
        return await de(e3, t2);
      case "TemplateLiteral":
        return await je(e3, t2);
      case "Identifier":
        return Oe(e3, t2);
      case "MemberExpression":
        return await ke(e3, t2);
      case "Literal":
        return t2.value;
      case "CallExpression":
        return await Ne(e3, t2);
      case "UnaryExpression":
        return await Me(e3, t2);
      case "BinaryExpression":
        return await Ae2(e3, t2);
      case "LogicalExpression":
        return await Ce(e3, t2);
      case "ArrayExpression":
        return await Re(e3, t2);
      case "ObjectExpression":
        return await ne(e3, t2);
      default:
        throw new a(e3, r.Unrecognized, t2);
    }
  } catch (n5) {
    throw u(e3, t2, n5);
  }
}
async function te(e3, t2) {
  t2.breakpoint && await t2.breakpoint();
  try {
    switch (t2.type) {
      case "ImportDeclaration":
        return await Se(e3, t2);
      case "ExportNamedDeclaration":
        return await xe(e3, t2);
      case "VariableDeclaration":
        return await Fe(e3, t2, 0);
      case "BlockStatement":
        return await me2(e3, t2);
      case "FunctionDeclaration":
        return await ve(e3, t2);
      case "ReturnStatement":
        return await be2(e3, t2);
      case "IfStatement":
        return await ge(e3, t2);
      case "ExpressionStatement":
        return await he(e3, t2);
      case "ForStatement":
        return await oe2(e3, t2);
      case "WhileStatement":
        return await re(e3, t2);
      case "ForInStatement":
        return await ue(e3, t2);
      case "ForOfStatement":
        return await fe(e3, t2);
      case "BreakStatement":
        return Y;
      case "EmptyStatement":
        return v;
      case "ContinueStatement":
        return L;
      default:
        throw new a(e3, r.Unrecognized, t2);
    }
  } catch (n5) {
    throw u(e3, t2, n5);
  }
}
async function ne(e3, t2) {
  const n5 = [];
  for (let i2 = 0; i2 < t2.properties.length; i2++) {
    const r4 = t2.properties[i2], o3 = await ee2(e3, r4.value), a3 = "Identifier" === r4.key.type ? r4.key.name : await ee2(e3, r4.key);
    n5[i2] = { key: a3, value: o3 };
  }
  const r3 = {}, o2 = /* @__PURE__ */ new Map();
  for (let i2 = 0; i2 < n5.length; i2++) {
    const a3 = n5[i2];
    if (G(a3.value)) throw new a(e3, r.NoFunctionInDictionary, t2);
    if (false === e(a3.key)) throw new a(e3, r.KeyMustBeString, t2);
    let c = a3.key.toString();
    const u2 = c.toLowerCase();
    o2.has(u2) ? c = o2.get(u2) : o2.set(u2, c), a3.value === v ? r3[c] = null : r3[c] = a3.value;
  }
  const a2 = new C(r3);
  return a2.immutable = false, a2;
}
async function re(e3, t2) {
  let n5 = await ee2(e3, t2.test);
  if (false === n5) return v;
  if (true !== n5) throw new a(e3, r.BooleanConditionRequired, t2);
  for (; true === n5; ) {
    const r3 = await te(e3, t2.body);
    if (r3 === Y) break;
    if (r3 instanceof _) return r3;
    if (n5 = await ee2(e3, t2.test), true !== n5 && false !== n5) throw new a(e3, r.BooleanConditionRequired, t2);
  }
  return v;
}
async function oe2(e3, t2) {
  var _a;
  try {
    for (null !== t2.init && ("VariableDeclaration" === t2.init.type ? await te(e3, t2.init) : await ee2(e3, t2.init)); ; ) {
      if (null !== t2.test) {
        const n6 = await ee2(e3, t2.test);
        if (true === ((_a = e3.abortSignal) == null ? void 0 : _a.aborted)) throw new a(e3, r.Cancelled, t2);
        if (false === n6) break;
        if (true !== n6) throw new a(e3, r.BooleanConditionRequired, t2);
      }
      const n5 = await te(e3, t2.body);
      if (n5 === Y) break;
      if (n5 instanceof _) return n5;
      null !== t2.update && await ee2(e3, t2.update);
    }
    return v;
  } catch (n5) {
    throw n5;
  }
}
async function ae(e3, t2, n5, r3, o2 = "i") {
  const a2 = n5.length;
  for (let i2 = 0; i2 < a2; i2++) {
    if ("k" === o2) {
      if (i2 >= n5.length) throw new a(e3, r.OutOfBounds, t2);
      r3.value = n5[i2];
    } else r3.value = i2;
    const a3 = await te(e3, t2.body);
    if (a3 === Y) break;
    if (a3 instanceof _) return a3;
  }
  return v;
}
async function ie(e3, t2, n5, r3, o2 = "i") {
  const a2 = n5.length();
  for (let i2 = 0; i2 < a2; i2++) {
    r3.value = "k" === o2 ? n5.get(i2) : i2;
    const a3 = await te(e3, t2.body);
    if (a3 === Y) break;
    if (a3 instanceof _) return a3;
  }
  return v;
}
async function le(e3, t2, n5, r3) {
  const o2 = n5.iterator(e3.abortSignal);
  let a2;
  for (; null != (a2 = await o2.next()); ) {
    const o3 = D.createFromGraphicLikeObject(a2.geometry, a2.attributes, n5, e3.timeZone);
    o3._underlyingGraphic = a2, r3.value = o3;
    const i2 = await te(e3, t2.body);
    if (i2 === Y) break;
    if (i2 instanceof _) return i2;
  }
  return v;
}
async function se(e3, t2, n5, r3) {
  for (const o2 of n5.keys()) {
    const a2 = n5.field(o2);
    r3.value = new C({ key: o2, value: a2 });
    const l = await te(e3, t2.body);
    if (l === Y) break;
    if (l instanceof _) return l;
  }
  return v;
}
async function ce2(e3, t2, n5, r3) {
  for (const l of f(n5)) {
    const a2 = d(n5, l, e3, t2, 1);
    r3.value = new C({ key: l, value: a2 });
    const s5 = await te(e3, t2.body);
    if (s5 === Y) break;
    if (s5 instanceof _) return s5;
  }
  return v;
}
async function ue(t2, n5) {
  const r3 = await ee2(t2, n5.right);
  "VariableDeclaration" === n5.left.type && await te(t2, n5.left);
  const o2 = n3("VariableDeclaration" === n5.left.type ? n5.left.declarations[0].id : n5.left);
  let c = null;
  if (null != t2.localScope && void 0 !== t2.localScope[o2] && (c = t2.localScope[o2]), null === c && void 0 !== t2.globalScope[o2] && (c = t2.globalScope[o2]), null === c) throw new a(t2, r.InvalidIdentifier, n5);
  return o(r3) || e(r3) ? await ae(t2, n5, r3, c) : ee(r3) ? await ie(t2, n5, r3, c) : r3 instanceof C || W(r3) ? await ae(t2, n5, r3.keys(), c, "k") : B(r3) ? await le(t2, n5, r3, c) : U(r3) ? await ae(t2, n5, f(r3), c, "k") : v;
}
async function fe(t2, n5) {
  const r3 = await ee2(t2, n5.right);
  "VariableDeclaration" === n5.left.type && await te(t2, n5.left);
  const o2 = n3("VariableDeclaration" === n5.left.type ? n5.left.declarations[0].id : n5.left);
  let a2 = null;
  if (null != t2.localScope && void 0 !== t2.localScope[o2] && (a2 = t2.localScope[o2]), null === a2 && void 0 !== t2.globalScope[o2] && (a2 = t2.globalScope[o2]), null === a2) throw new a(t2, r.InvalidIdentifier, n5);
  return o(r3) || e(r3) ? await ae(t2, n5, r3, a2, "k") : ee(r3) ? await ie(t2, n5, r3, a2, "k") : r3 instanceof C || W(r3) ? await se(t2, n5, r3, a2) : B(r3) ? await le(t2, n5, r3, a2) : U(r3) ? await ce2(t2, n5, r3, a2) : v;
}
async function pe(t2, n5) {
  const r3 = n5.argument;
  if ("CallExpression" === r3.type) throw new a(t2, r.NeverReach, n5);
  if ("MemberExpression" === r3.type) {
    const e3 = await ee2(t2, r3.object);
    let o3, a3;
    if (true === r3.computed) o3 = await ee2(t2, r3.property);
    else {
      if ("Identifier" !== r3.property.type) throw new a(t2, r.Unrecognized, n5);
      o3 = r3.property.name;
    }
    if (o(e3)) {
      if (!n2(o3)) throw new a(t2, r.ArrayAccessorMustBeNumber, n5);
      if (o3 < 0 && (o3 = e3.length + o3), o3 < 0 || o3 >= e3.length) throw new a(t2, r.OutOfBounds, n5);
      a3 = be(e3[o3]), e3[o3] = "++" === n5.operator ? a3 + 1 : a3 - 1;
    } else if (e3 instanceof C) {
      if (false === e(o3)) throw new a(t2, r.KeyAccessorMustBeString, n5);
      if (true !== e3.hasField(o3)) throw new a(t2, r.FieldNotFound, n5, { key: o3 });
      a3 = be(e3.field(o3)), e3.setField(o3, "++" === n5.operator ? a3 + 1 : a3 - 1);
    } else if (e3 instanceof X) {
      if (false === e(o3)) throw new a(t2, r.ModuleAccessorMustBeString, n5);
      if (true !== e3.hasGlobal(o3)) throw new a(t2, r.ModuleExportNotFound, n5);
      a3 = be(e3.global(o3)), e3.setGlobal(o3, "++" === n5.operator ? a3 + 1 : a3 - 1);
    } else {
      if (!H(e3)) throw ee(e3) ? new a(t2, r.Immutable, n5) : new a(t2, r.InvalidParameter, n5);
      if (false === e(o3)) throw new a(t2, r.KeyAccessorMustBeString, n5);
      if (true !== e3.hasField(o3)) throw new a(t2, r.FieldNotFound, n5, { key: o3 });
      a3 = be(e3.field(o3)), e3.setField(o3, "++" === n5.operator ? a3 + 1 : a3 - 1);
    }
    return false === n5.prefix ? a3 : "++" === n5.operator ? a3 + 1 : a3 - 1;
  }
  const o2 = n3(r3);
  let a2;
  if (null != t2.localScope && void 0 !== t2.localScope[o2]) return a2 = be(t2.localScope[o2].value), t2.localScope[o2] = { value: "++" === n5.operator ? a2 + 1 : a2 - 1 }, false === n5.prefix ? a2 : "++" === n5.operator ? a2 + 1 : a2 - 1;
  if (void 0 !== t2.globalScope[o2]) return a2 = be(t2.globalScope[o2].value), t2.globalScope[o2] = { value: "++" === n5.operator ? a2 + 1 : a2 - 1 }, false === n5.prefix ? a2 : "++" === n5.operator ? a2 + 1 : a2 - 1;
  throw new a(t2, r.InvalidIdentifier, n5);
}
function we(e3, t2, n5, r3, o2) {
  switch (t2) {
    case "=":
      return e3 === v ? null : e3;
    case "/=":
      return be(n5) / be(e3);
    case "*=":
      return be(n5) * be(e3);
    case "-=":
      return be(n5) - be(e3);
    case "+=":
      return e(n5) || e(e3) ? ye(n5) + ye(e3) : be(n5) + be(e3);
    case "%=":
      return be(n5) % be(e3);
    default:
      throw new a(o2, r.UnsupportedOperator, r3);
  }
}
async function de(t2, n5) {
  const r3 = n5.left;
  if ("MemberExpression" === r3.type) {
    const e3 = await ee2(t2, r3.object);
    let o3;
    if (true === r3.computed) o3 = await ee2(t2, r3.property);
    else {
      if ("Identifier" !== r3.property.type) throw new a(t2, r.InvalidIdentifier, n5);
      o3 = r3.property.name;
    }
    const a2 = await ee2(t2, n5.right);
    if (o(e3)) {
      if (!n2(o3)) throw new a(t2, r.ArrayAccessorMustBeNumber, n5);
      if (o3 < 0 && (o3 = e3.length + o3), o3 < 0 || o3 > e3.length) throw new a(t2, r.OutOfBounds, n5);
      if (o3 === e3.length) {
        if ("=" !== n5.operator) throw new a(t2, r.OutOfBounds, n5);
        e3[o3] = we(a2, n5.operator, e3[o3], n5, t2);
      } else e3[o3] = we(a2, n5.operator, e3[o3], n5, t2);
    } else if (e3 instanceof C) {
      if (false === e(o3)) throw new a(t2, r.KeyAccessorMustBeString, n5);
      if (true === e3.hasField(o3)) e3.setField(o3, we(a2, n5.operator, e3.field(o3), n5, t2));
      else {
        if ("=" !== n5.operator) throw new a(t2, r.FieldNotFound, n5, { key: o3 });
        e3.setField(o3, we(a2, n5.operator, null, n5, t2));
      }
    } else if (e3 instanceof X) {
      if (false === e(o3)) throw new a(t2, r.KeyAccessorMustBeString, n5);
      if (true !== e3.hasGlobal(o3)) throw new a(t2, r.ModuleExportNotFound, n5);
      e3.setGlobal(o3, we(a2, n5.operator, e3.global(o3), n5, t2));
    } else {
      if (!H(e3)) throw ee(e3) ? new a(t2, r.Immutable, n5) : new a(t2, r.InvalidParameter, n5);
      if (false === e(o3)) throw new a(t2, r.KeyAccessorMustBeString, n5);
      if (true === e3.hasField(o3)) e3.setField(o3, we(a2, n5.operator, e3.field(o3), n5, t2));
      else {
        if ("=" !== n5.operator) throw new a(t2, r.FieldNotFound, n5, { key: o3 });
        e3.setField(o3, we(a2, n5.operator, null, n5, t2));
      }
    }
    return v;
  }
  const o2 = n3(r3);
  if (null != t2.localScope && void 0 !== t2.localScope[o2]) {
    const e3 = await ee2(t2, n5.right);
    return t2.localScope[o2] = { value: we(e3, n5.operator, t2.localScope[o2].value, n5, t2) }, v;
  }
  if (void 0 !== t2.globalScope[o2]) {
    const e3 = await ee2(t2, n5.right);
    return t2.globalScope[o2] = { value: we(e3, n5.operator, t2.globalScope[o2].value, n5, t2) }, v;
  }
  throw new a(t2, r.InvalidIdentifier, n5);
}
async function he(e3, t2) {
  const n5 = await ee2(e3, t2.expression);
  return n5 === v ? v : new I(n5);
}
async function ge(e3, t2) {
  const n5 = await ee2(e3, t2.test);
  if (true === n5) return te(e3, t2.consequent);
  if (false === n5) return null !== t2.alternate ? te(e3, t2.alternate) : v;
  throw new a(e3, r.BooleanConditionRequired, t2);
}
async function me2(e3, t2) {
  return ye2(e3, t2, 0);
}
async function ye2(e3, t2, n5) {
  if (n5 >= t2.body.length) return v;
  const r3 = await te(e3, t2.body[n5]);
  return r3 instanceof _ || r3 === Y || r3 === L || n5 === t2.body.length - 1 ? r3 : ye2(e3, t2, n5 + 1);
}
async function be2(e3, t2) {
  if (null === t2.argument) return new _(v);
  const n5 = await ee2(e3, t2.argument);
  return new _(n5);
}
async function ve(t2, n5) {
  const r3 = n3(n5.id);
  return t2.globalScope[r3] = { value: new Q(n5, t2) }, v;
}
async function Se(t2, n5) {
  var _a, _b;
  const r3 = n3(n5.specifiers[0].local), o2 = t2.libraryResolver.loadLibrary(r3);
  let a2;
  return ((_a = t2.libraryResolver._moduleSingletons) == null ? void 0 : _a.has(o2.uri)) ? a2 = t2.libraryResolver._moduleSingletons.get(o2.uri) : (a2 = new X(o2), await a2.loadModule(t2), (_b = t2.libraryResolver._moduleSingletons) == null ? void 0 : _b.set(o2.uri, a2)), t2.globalScope[r3] = { value: a2 }, v;
}
async function xe(t2, n5) {
  if (await te(t2, n5.declaration), "FunctionDeclaration" === n5.declaration.type) t2.exports[n3(n5.declaration.id)] = "function";
  else if ("VariableDeclaration" === n5.declaration.type) for (const r3 of n5.declaration.declarations) t2.exports[n3(r3.id)] = "variable";
  return v;
}
async function Fe(e3, t2, n5) {
  return n5 >= t2.declarations.length ? v : (await Ie(e3, t2.declarations[n5]), n5 === t2.declarations.length - 1 || await Fe(e3, t2, n5 + 1), v);
}
async function Ie(t2, n5) {
  let r3 = null;
  if (r3 = null === n5.init ? null : await ee2(t2, n5.init), null !== t2.localScope) {
    if (r3 === v && (r3 = null), "Identifier" !== n5.id.type) throw new a(t2, r.InvalidIdentifier, n5);
    const o3 = n3(n5.id);
    return void (null != t2.localScope && (t2.localScope[o3] = { value: r3 }));
  }
  if ("Identifier" !== n5.id.type) throw new a(t2, r.InvalidIdentifier, n5);
  const o2 = n3(n5.id);
  r3 === v && (r3 = null), t2.globalScope[o2] = { value: r3 };
}
async function ke(e3, t2) {
  const n5 = await ee2(e3, t2.object);
  if (null === n5) throw new a(e3, r.MemberOfNull, t2);
  if (false === t2.computed) {
    if ("Identifier" === t2.property.type) {
      if (n5 instanceof C || W(n5)) return n5.field(t2.property.name);
      if (n5 instanceof n) return d(n5, t2.property.name, e3, t2);
      if (n5 instanceof X) {
        if (!n5.hasGlobal(t2.property.name)) throw new a(e3, r.InvalidIdentifier, t2);
        return n5.global(t2.property.name);
      }
      throw new a(e3, r.InvalidMemberAccessKey, t2);
    }
    throw new a(e3, r.InvalidMemberAccessKey, t2);
  }
  let r3 = await ee2(e3, t2.property);
  if (n5 instanceof C || W(n5)) {
    if (e(r3)) return n5.field(r3);
    throw new a(e3, r.InvalidMemberAccessKey, t2);
  }
  if (n5 instanceof X) {
    if (e(r3)) return n5.global(r3);
    throw new a(e3, r.InvalidMemberAccessKey, t2);
  }
  if (n5 instanceof n) {
    if (e(r3)) return d(n5, r3, e3, t2);
    throw new a(e3, r.InvalidMemberAccessKey, t2);
  }
  if (o(n5)) {
    if (n2(r3) && isFinite(r3) && Math.floor(r3) === r3) {
      if (r3 < 0 && (r3 = n5.length + r3), r3 >= n5.length || r3 < 0) throw new a(e3, r.OutOfBounds, t2);
      return n5[r3];
    }
    throw new a(e3, r.InvalidMemberAccessKey, t2);
  }
  if (ee(n5)) {
    if (n2(r3) && isFinite(r3) && Math.floor(r3) === r3) {
      if (r3 < 0 && (r3 = n5.length() + r3), r3 >= n5.length() || r3 < 0) throw new a(e3, r.OutOfBounds, t2);
      return n5.get(r3);
    }
    throw new a(e3, r.InvalidMemberAccessKey, t2);
  }
  if (e(n5)) {
    if (n2(r3) && isFinite(r3) && Math.floor(r3) === r3) {
      if (r3 < 0 && (r3 = n5.length + r3), r3 >= n5.length || r3 < 0) throw new a(e3, r.OutOfBounds, t2);
      return n5[r3];
    }
    throw new a(e3, r.InvalidMemberAccessKey, t2);
  }
  throw new a(e3, r.InvalidMemberAccessKey, t2);
}
async function Me(e3, t2) {
  const n5 = await ee2(e3, t2.argument);
  if (t(n5)) {
    if ("!" === t2.operator) return !n5;
    if ("-" === t2.operator) return -1 * be(n5);
    if ("+" === t2.operator) return 1 * be(n5);
    if ("~" === t2.operator) return ~be(n5);
    throw new a(e3, r.UnsupportedUnaryOperator, t2);
  }
  if ("-" === t2.operator) return -1 * be(n5);
  if ("+" === t2.operator) return 1 * be(n5);
  if ("~" === t2.operator) return ~be(n5);
  throw new a(e3, r.UnsupportedUnaryOperator, t2);
}
async function Re(e3, t2) {
  const n5 = [];
  for (let r3 = 0; r3 < t2.elements.length; r3++) n5.push(await ee2(e3, t2.elements[r3]));
  for (let r3 = 0; r3 < n5.length; r3++) {
    if (G(n5[r3])) throw new a(e3, r.NoFunctionInArray, t2);
    n5[r3] === v && (n5[r3] = null);
  }
  return n5;
}
async function Ae2(e3, t2) {
  const n5 = await ee2(e3, t2.left), r3 = await ee2(e3, t2.right);
  switch (t2.operator) {
    case "|":
    case "<<":
    case ">>":
    case ">>>":
    case "^":
    case "&":
      return Ye(be(n5), be(r3), t2.operator);
    case "==":
      return me(n5, r3);
    case "!=":
      return !me(n5, r3);
    case "<":
    case ">":
    case "<=":
    case ">=":
      return ce(n5, r3, t2.operator);
    case "+":
      return e(n5) || e(r3) ? ye(n5) + ye(r3) : be(n5) + be(r3);
    case "-":
      return be(n5) - be(r3);
    case "*":
      return be(n5) * be(r3);
    case "/":
      return be(n5) / be(r3);
    case "%":
      return be(n5) % be(r3);
    default:
      throw new a(e3, r.UnsupportedOperator, t2);
  }
}
async function Ce(e3, t2) {
  const n5 = await ee2(e3, t2.left);
  if (!t(n5)) throw new a(e3, r.LogicalExpressionOnlyBoolean, t2);
  switch (t2.operator) {
    case "||": {
      if (true === n5) return n5;
      const r3 = await ee2(e3, t2.right);
      if (t(r3)) return r3;
      throw new a(e3, r.LogicExpressionOrAnd, t2);
    }
    case "&&": {
      if (false === n5) return n5;
      const r3 = await ee2(e3, t2.right);
      if (t(r3)) return r3;
      throw new a(e3, r.LogicExpressionOrAnd, t2);
    }
    default:
      throw new a(e3, r.LogicExpressionOrAnd, t2);
  }
}
function Oe(t2, n5) {
  const r3 = n3(n5);
  if (null != t2.localScope && void 0 !== t2.localScope[r3]) return t2.localScope[r3].value;
  if (void 0 !== t2.globalScope[r3]) return t2.globalScope[r3].value;
  throw new a(t2, r.InvalidIdentifier, n5);
}
async function Ne(t2, n5) {
  if ("MemberExpression" === n5.callee.type) {
    const e3 = await ee2(t2, n5.callee.object);
    if (!(e3 instanceof X)) throw new a(t2, r.FunctionNotFound, n5);
    const r4 = false === n5.callee.computed ? n5.callee.property.name : await ee2(t2, n5.callee.property);
    if (!e3.hasGlobal(r4)) throw new a(t2, r.FunctionNotFound, n5);
    const o2 = e3.global(r4);
    if (!G(o2)) throw new a(t2, r.CallNonFunction, n5);
    return o2.call(t2, n5);
  }
  if ("Identifier" !== n5.callee.type) throw new a(t2, r.FunctionNotFound, n5);
  const r3 = n3(n5.callee);
  if (null != t2.localScope && void 0 !== t2.localScope[r3]) {
    const e3 = t2.localScope[r3];
    if (G(e3.value)) return e3.value.call(t2, n5);
    throw new a(t2, r.CallNonFunction, n5);
  }
  if (void 0 !== t2.globalScope[r3]) {
    const e3 = t2.globalScope[r3];
    if (G(e3.value)) return e3.value.call(t2, n5);
    throw new a(t2, r.CallNonFunction, n5);
  }
  throw new a(t2, r.FunctionNotFound, n5);
}
async function je(e3, t2) {
  let n5 = "", r3 = 0;
  for (const o2 of t2.quasis) if (n5 += o2.value ? o2.value.cooked : "", false === o2.tail) {
    if (t2.expressions[r3]) {
      const o3 = await ee2(e3, t2.expressions[r3]);
      if (G(o3)) throw new a(e3, r.NoFunctionInTemplateLiteral, t2);
      n5 += ye(o3);
    }
    r3++;
  }
  return n5;
}
var Be = {};
async function Ee(e3, t2, n5, r3) {
  const o2 = await ee2(e3, t2.arguments[n5]);
  if (me(o2, r3)) return ee2(e3, t2.arguments[n5 + 1]);
  const a2 = t2.arguments.length - n5;
  return 1 === a2 ? ee2(e3, t2.arguments[n5]) : 2 === a2 ? null : 3 === a2 ? ee2(e3, t2.arguments[n5 + 2]) : Ee(e3, t2, n5 + 2, r3);
}
async function De(e3, t2, n5, r3) {
  if (true === r3) return ee2(e3, t2.arguments[n5 + 1]);
  if (3 === t2.arguments.length - n5) return ee2(e3, t2.arguments[n5 + 2]);
  const o2 = await ee2(e3, t2.arguments[n5 + 2]);
  if (false === t(o2)) throw new a(e3, r.ModuleExportNotFound, t2.arguments[n5 + 2]);
  return De(e3, t2, n5 + 2, o2);
}
async function Ke(t2, n5, r3, o2) {
  const a2 = t2.body;
  if (r3.length !== t2.params.length) throw new a(n5, r.WrongNumberOfParameters, null);
  for (let l = 0; l < r3.length; l++) {
    const o3 = t2.params[l];
    "Identifier" === o3.type && null != n5.localScope && (n5.localScope[n3(o3)] = { value: r3[l] });
  }
  const i2 = await te(n5, a2);
  if (i2 instanceof _) return i2.value;
  if (i2 === Y) throw new a(n5, r.UnexpectedToken, o2);
  if (i2 === L) throw new a(n5, r.UnexpectedToken, o2);
  return i2 instanceof I ? i2.value : i2;
}
C2(Be, J), E(Be, J), g2(Be, J, Oe), p2(Be, J), B2(Be, J), f2(Be, J), T({ functions: Be, compiled: false, signatures: null, evaluateIdentifier: null, mode: "async", standardFunction: J, standardFunctionAsync: $ }), Be.iif = async function(e3, t2) {
  oe(null === t2.arguments ? [] : t2.arguments, 3, 3, e3, t2);
  const n5 = await ee2(e3, t2.arguments[0]);
  if (false === t(n5)) throw new a(e3, r.BooleanConditionRequired, t2);
  return ee2(e3, n5 ? t2.arguments[1] : t2.arguments[2]);
}, Be.defaultvalue = async function(e3, t2) {
  oe(null === t2.arguments ? [] : t2.arguments, 2, 3, e3, t2);
  const n5 = await ee2(e3, t2.arguments[0]);
  if (3 === t2.arguments.length) {
    const o2 = await ee2(e3, t2.arguments[1]), a2 = y(n5, o2);
    return null != a2 && "" !== a2 ? a2 : ee2(e3, t2.arguments[2]);
  }
  return null == n5 || "" === n5 ? ee2(e3, t2.arguments[1]) : n5;
}, Be.decode = async function(e3, t2) {
  if (t2.arguments.length < 2) throw new a(e3, r.WrongNumberOfParameters, t2);
  if (2 === t2.arguments.length) return ee2(e3, t2.arguments[1]);
  if ((t2.arguments.length - 1) % 2 == 0) throw new a(e3, r.WrongNumberOfParameters, t2);
  return Ee(e3, t2, 1, await ee2(e3, t2.arguments[0]));
}, Be.when = async function(e3, t2) {
  if (t2.arguments.length < 3) throw new a(e3, r.WrongNumberOfParameters, t2);
  if (t2.arguments.length % 2 == 0) throw new a(e3, r.WrongNumberOfParameters, t2);
  const n5 = await ee2(e3, t2.arguments[0]);
  if (false === t(n5)) throw new a(e3, r.BooleanConditionRequired, t2.arguments[0]);
  return De(e3, t2, 0, n5);
};
var Ue = { fixSpatialReference: Ae, parseArguments: H2, standardFunction: J, standardFunctionAsync: $, evaluateIdentifier: Oe };
for (const We in Be) Be[We] = { value: new e2(Be[We]) };
var Ze = function() {
};
function Ge(e3, t2, n5) {
  const r3 = new Ze();
  null == e3 && (e3 = {}), null == t2 && (t2 = {});
  const o2 = new C({ newline: "\n", tab: "	", singlequote: "'", doublequote: '"', forwardslash: "/", backwardslash: "\\" });
  o2.immutable = false, r3.textformatting = { value: o2 };
  for (const a2 in t2) r3[a2] = { value: new e2(t2[a2]) };
  for (const a2 in e3) r3[a2] = { value: i(e3[a2]) ? D.createFromGraphic(e3[a2], n5) : e3[a2] };
  return r3;
}
function Le(e3) {
  console.log(e3);
}
Ze.prototype = Be, Ze.prototype.infinity = { value: Number.POSITIVE_INFINITY }, Ze.prototype.pi = { value: Math.PI };
var qe = Ue;
function Pe(e3) {
  const t2 = { mode: "async", compiled: false, functions: {}, signatures: [], standardFunction: J, standardFunctionAsync: $, evaluateIdentifier: Oe };
  for (let n5 = 0; n5 < e3.length; n5++) e3[n5].registerFunctions(t2);
  for (const n5 in t2.functions) Be[n5] = { value: new e2(t2.functions[n5]) }, Ze.prototype[n5] = Be[n5];
  for (let n5 = 0; n5 < t2.signatures.length; n5++) s4(t2.signatures[n5], "async");
}
async function Ve(e3, t2) {
  let r3 = t2.spatialReference;
  null == r3 && (r3 = new g({ wkid: 102100 }));
  let o2 = null;
  e3.usesModules && (o2 = new s2(/* @__PURE__ */ new Map(), e3.loadedModules));
  const a2 = Ge(t2.vars, t2.customfunctions, t2.timeZone), i2 = { spatialReference: r3, services: t2.services, exports: {}, libraryResolver: o2, abortSignal: void 0 === t2.abortSignal || null === t2.abortSignal ? { aborted: false } : t2.abortSignal, globalScope: a2, console: t2.console ?? Le, timeZone: t2.timeZone ?? null, lrucache: t2.lrucache, interceptor: t2.interceptor, localScope: null, depthCounter: { depth: 1 } }, c = await me2(i2, e3);
  if (c instanceof _ || c instanceof I) {
    const e4 = c.value;
    if (e4 === v) return null;
    if (G(e4)) throw new a(i2, r.IllegalResult, null);
    return e4;
  }
  if (c === v) return null;
  if (c === Y) throw new a(i2, r.IllegalResult, null);
  if (c === L) throw new a(i2, r.IllegalResult, null);
  throw new a(i2, r.NeverReach, null);
}
Pe([p]);
export {
  Ve as executeScript,
  Pe as extend,
  qe as functionHelper
};
//# sourceMappingURL=arcadeAsyncRuntime-KR24QX4F.js.map
