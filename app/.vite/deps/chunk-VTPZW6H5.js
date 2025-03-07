import {
  c,
  d,
  e,
  f,
  l,
  m,
  p,
  t
} from "./chunk-FIBMMWXR.js";
import {
  a,
  i,
  o,
  r
} from "./chunk-BV7O6P7Z.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/effects/parser.js
function h(e2, t2) {
  function r2() {
    this.constructor = e2;
  }
  r2.prototype = t2.prototype, e2.prototype = new r2();
}
function m2(e2, t2, r2, n) {
  var u = Error.call(this, e2);
  return Object.setPrototypeOf && Object.setPrototypeOf(u, m2.prototype), u.expected = t2, u.found = r2, u.location = n, u.name = "SyntaxError", u;
}
function g(e2, t2, r2) {
  return r2 = r2 || " ", e2.length > t2 ? e2 : (t2 -= e2.length, e2 + (r2 += r2.repeat(t2)).slice(0, t2));
}
function v(e2, t2) {
  var r2, n = {}, u = (t2 = void 0 !== t2 ? t2 : {}).grammarSource, a2 = { start: Qe }, o2 = Qe, c2 = "none", i2 = ")", l2 = ",", s2 = "(", f2 = "%", p2 = "px", h2 = "cm", g2 = "mm", v2 = "in", d3 = "pt", y2 = "pc", w2 = "deg", x2 = "rad", A2 = "grad", b2 = "turn", F2 = "#", $2 = ".", C2 = "e", E2 = /^[ \t\n\r]/, j2 = /^[a-z\-]/, O2 = /^[0-9a-fA-F]/, P2 = /^[+\-]/, q2 = /^[0-9]/, k2 = Be("none"), z2 = Ue("none", false), I2 = Ue(")", false), R2 = Ue(",", false), S2 = Be("whitespace"), M2 = De([" ", "	", "\n", "\r"], false, false), N2 = Be("function"), T2 = Ue("(", false), U2 = Be("identifier"), D2 = De([["a", "z"], "-"], false, false), L2 = Be("percentage"), B2 = Ue("%", false), G2 = Be("length"), H = Ue("px", false), J = Ue("cm", false), K = Ue("mm", false), Q = Ue("in", false), V = Ue("pt", false), W = Ue("pc", false), X = Be("angle"), Y = Ue("deg", false), Z = Ue("rad", false), _ = Ue("grad", false), ee = Ue("turn", false), te = Be("number"), re = Be("color"), ne = Ue("#", false), ue = De([["0", "9"], ["a", "f"], ["A", "F"]], false, false), ae = De(["+", "-"], false, false), oe = De([["0", "9"]], false, false), ce = Ue(".", false), ie = Ue("e", false), le = function() {
    return [];
  }, se = function(e3, t3) {
    return { type: "function", name: e3, parameters: t3 || [] };
  }, fe = function(e3, t3) {
    return t3.length > 0 ? lt(e3, t3, 3) : [e3];
  }, pe = function(e3) {
    return { type: "quantity", value: e3.value, unit: e3.unit };
  }, he = function(e3) {
    return { type: "color", colorType: e3.type, value: e3.value };
  }, me = function(e3) {
    return e3;
  }, ge = function() {
    return Te();
  }, ve = function(e3) {
    return { value: e3, unit: "%" };
  }, de = function(e3) {
    return { value: e3, unit: "px" };
  }, ye = function(e3) {
    return { value: e3, unit: "cm" };
  }, we = function(e3) {
    return { value: e3, unit: "mm" };
  }, xe = function(e3) {
    return { value: e3, unit: "in" };
  }, Ae = function(e3) {
    return { value: e3, unit: "pt" };
  }, be = function(e3) {
    return { value: e3, unit: "pc" };
  }, Fe = function(e3) {
    return { value: e3, unit: "deg" };
  }, $e = function(e3) {
    return { value: e3, unit: "rad" };
  }, Ce = function(e3) {
    return { value: e3, unit: "grad" };
  }, Ee = function(e3) {
    return { value: e3, unit: "turn" };
  }, je = function(e3) {
    return { value: e3, unit: null };
  }, Oe = function() {
    return { type: "hex", value: Te() };
  }, Pe = function(e3) {
    return { type: "function", value: e3 };
  }, qe = function() {
    return { type: "named", value: Te() };
  }, ke = function() {
    return parseFloat(Te());
  }, ze = 0 | t2.peg$currPos, Ie = ze, Re = [{ line: 1, column: 1 }], Se = ze, Me = t2.peg$maxFailExpected || [], Ne = 0 | t2.peg$silentFails;
  if (t2.startRule) {
    if (!(t2.startRule in a2)) throw new Error(`Can't start parsing from rule "` + t2.startRule + '".');
    o2 = a2[t2.startRule];
  }
  function Te() {
    return e2.substring(Ie, ze);
  }
  function Ue(e3, t3) {
    return { type: "literal", text: e3, ignoreCase: t3 };
  }
  function De(e3, t3, r3) {
    return { type: "class", parts: e3, inverted: t3, ignoreCase: r3 };
  }
  function Le() {
    return { type: "end" };
  }
  function Be(e3) {
    return { type: "other", description: e3 };
  }
  function Ge(t3) {
    var r3, n2 = Re[t3];
    if (n2) return n2;
    if (t3 >= Re.length) r3 = Re.length - 1;
    else for (r3 = t3; !Re[--r3]; ) ;
    for (n2 = { line: (n2 = Re[r3]).line, column: n2.column }; r3 < t3; ) 10 === e2.charCodeAt(r3) ? (n2.line++, n2.column = 1) : n2.column++, r3++;
    return Re[t3] = n2, n2;
  }
  function He(e3, t3, r3) {
    var n2 = Ge(e3), a3 = Ge(t3);
    return { source: u, start: { offset: e3, line: n2.line, column: n2.column }, end: { offset: t3, line: a3.line, column: a3.column } };
  }
  function Je(e3) {
    ze < Se || (ze > Se && (Se = ze, Me = []), Me.push(e3));
  }
  function Ke(e3, t3, r3) {
    return new m2(m2.buildMessage(e3, t3), e3, t3, r3);
  }
  function Qe() {
    var e3;
    return (e3 = Ve()) === n && (e3 = We()), e3;
  }
  function Ve() {
    var t3, r3;
    return Ne++, t3 = ze, _e(), e2.substr(ze, 4) === c2 ? (r3 = c2, ze += 4) : (r3 = n, 0 === Ne && Je(z2)), r3 !== n ? (_e(), Ie = t3, t3 = le()) : (ze = t3, t3 = n), Ne--, t3 === n && 0 === Ne && Je(k2), t3;
  }
  function We() {
    var e3, t3;
    if (e3 = [], (t3 = Xe()) !== n) for (; t3 !== n; ) e3.push(t3), t3 = Xe();
    else e3 = n;
    return e3;
  }
  function Xe() {
    var t3, r3, u2, a3;
    return t3 = ze, _e(), (r3 = et()) !== n ? (_e(), (u2 = Ye()) === n && (u2 = null), _e(), 41 === e2.charCodeAt(ze) ? (a3 = i2, ze++) : (a3 = n, 0 === Ne && Je(I2)), a3 !== n ? (_e(), Ie = t3, t3 = se(r3, u2)) : (ze = t3, t3 = n)) : (ze = t3, t3 = n), t3;
  }
  function Ye() {
    var t3, r3, u2, a3, o3, c3, i3, s3;
    if (t3 = ze, (r3 = Ze()) !== n) {
      for (u2 = [], a3 = ze, o3 = _e(), 44 === e2.charCodeAt(ze) ? (c3 = l2, ze++) : (c3 = n, 0 === Ne && Je(R2)), c3 === n && (c3 = null), i3 = _e(), (s3 = Ze()) !== n ? a3 = o3 = [o3, c3, i3, s3] : (ze = a3, a3 = n); a3 !== n; ) u2.push(a3), a3 = ze, o3 = _e(), 44 === e2.charCodeAt(ze) ? (c3 = l2, ze++) : (c3 = n, 0 === Ne && Je(R2)), c3 === n && (c3 = null), i3 = _e(), (s3 = Ze()) !== n ? a3 = o3 = [o3, c3, i3, s3] : (ze = a3, a3 = n);
      Ie = t3, t3 = fe(r3, u2);
    } else ze = t3, t3 = n;
    return t3;
  }
  function Ze() {
    var e3, t3;
    return e3 = ze, (t3 = rt()) === n && (t3 = nt()) === n && (t3 = ut()) === n && (t3 = at()), t3 !== n && (Ie = e3, t3 = pe(t3)), (e3 = t3) === n && (e3 = ze, (t3 = ot()) !== n && (Ie = e3, t3 = he(t3)), e3 = t3), e3;
  }
  function _e() {
    var t3, r3;
    for (Ne++, t3 = [], r3 = e2.charAt(ze), E2.test(r3) ? ze++ : (r3 = n, 0 === Ne && Je(M2)); r3 !== n; ) t3.push(r3), r3 = e2.charAt(ze), E2.test(r3) ? ze++ : (r3 = n, 0 === Ne && Je(M2));
    return Ne--, r3 = n, 0 === Ne && Je(S2), t3;
  }
  function et() {
    var t3, r3, u2;
    return Ne++, t3 = ze, (r3 = tt()) !== n ? (40 === e2.charCodeAt(ze) ? (u2 = s2, ze++) : (u2 = n, 0 === Ne && Je(T2)), u2 !== n ? (Ie = t3, t3 = me(r3)) : (ze = t3, t3 = n)) : (ze = t3, t3 = n), Ne--, t3 === n && (r3 = n, 0 === Ne && Je(N2)), t3;
  }
  function tt() {
    var t3, r3, u2;
    if (Ne++, t3 = ze, r3 = [], u2 = e2.charAt(ze), j2.test(u2) ? ze++ : (u2 = n, 0 === Ne && Je(D2)), u2 !== n) for (; u2 !== n; ) r3.push(u2), u2 = e2.charAt(ze), j2.test(u2) ? ze++ : (u2 = n, 0 === Ne && Je(D2));
    else r3 = n;
    return r3 !== n && (Ie = t3, r3 = ge()), Ne--, (t3 = r3) === n && (r3 = n, 0 === Ne && Je(U2)), t3;
  }
  function rt() {
    var t3, r3, u2;
    return Ne++, t3 = ze, _e(), (r3 = ct()) !== n ? (37 === e2.charCodeAt(ze) ? (u2 = f2, ze++) : (u2 = n, 0 === Ne && Je(B2)), u2 !== n ? (Ie = t3, t3 = ve(r3)) : (ze = t3, t3 = n)) : (ze = t3, t3 = n), Ne--, t3 === n && 0 === Ne && Je(L2), t3;
  }
  function nt() {
    var t3, r3, u2;
    return Ne++, t3 = ze, _e(), (r3 = ct()) !== n ? (e2.substr(ze, 2) === p2 ? (u2 = p2, ze += 2) : (u2 = n, 0 === Ne && Je(H)), u2 !== n ? (Ie = t3, t3 = de(r3)) : (ze = t3, t3 = n)) : (ze = t3, t3 = n), t3 === n && (t3 = ze, _e(), (r3 = ct()) !== n ? (e2.substr(ze, 2) === h2 ? (u2 = h2, ze += 2) : (u2 = n, 0 === Ne && Je(J)), u2 !== n ? (Ie = t3, t3 = ye(r3)) : (ze = t3, t3 = n)) : (ze = t3, t3 = n), t3 === n && (t3 = ze, _e(), (r3 = ct()) !== n ? (e2.substr(ze, 2) === g2 ? (u2 = g2, ze += 2) : (u2 = n, 0 === Ne && Je(K)), u2 !== n ? (Ie = t3, t3 = we(r3)) : (ze = t3, t3 = n)) : (ze = t3, t3 = n), t3 === n && (t3 = ze, _e(), (r3 = ct()) !== n ? (e2.substr(ze, 2) === v2 ? (u2 = v2, ze += 2) : (u2 = n, 0 === Ne && Je(Q)), u2 !== n ? (Ie = t3, t3 = xe(r3)) : (ze = t3, t3 = n)) : (ze = t3, t3 = n), t3 === n && (t3 = ze, _e(), (r3 = ct()) !== n ? (e2.substr(ze, 2) === d3 ? (u2 = d3, ze += 2) : (u2 = n, 0 === Ne && Je(V)), u2 !== n ? (Ie = t3, t3 = Ae(r3)) : (ze = t3, t3 = n)) : (ze = t3, t3 = n), t3 === n && (t3 = ze, _e(), (r3 = ct()) !== n ? (e2.substr(ze, 2) === y2 ? (u2 = y2, ze += 2) : (u2 = n, 0 === Ne && Je(W)), u2 !== n ? (Ie = t3, t3 = be(r3)) : (ze = t3, t3 = n)) : (ze = t3, t3 = n)))))), Ne--, t3 === n && 0 === Ne && Je(G2), t3;
  }
  function ut() {
    var t3, r3, u2;
    return Ne++, t3 = ze, (r3 = ct()) !== n ? (e2.substr(ze, 3) === w2 ? (u2 = w2, ze += 3) : (u2 = n, 0 === Ne && Je(Y)), u2 !== n ? (Ie = t3, t3 = Fe(r3)) : (ze = t3, t3 = n)) : (ze = t3, t3 = n), t3 === n && (t3 = ze, (r3 = ct()) !== n ? (e2.substr(ze, 3) === x2 ? (u2 = x2, ze += 3) : (u2 = n, 0 === Ne && Je(Z)), u2 !== n ? (Ie = t3, t3 = $e(r3)) : (ze = t3, t3 = n)) : (ze = t3, t3 = n), t3 === n && (t3 = ze, (r3 = ct()) !== n ? (e2.substr(ze, 4) === A2 ? (u2 = A2, ze += 4) : (u2 = n, 0 === Ne && Je(_)), u2 !== n ? (Ie = t3, t3 = Ce(r3)) : (ze = t3, t3 = n)) : (ze = t3, t3 = n), t3 === n && (t3 = ze, (r3 = ct()) !== n ? (e2.substr(ze, 4) === b2 ? (u2 = b2, ze += 4) : (u2 = n, 0 === Ne && Je(ee)), u2 !== n ? (Ie = t3, t3 = Ee(r3)) : (ze = t3, t3 = n)) : (ze = t3, t3 = n)))), Ne--, t3 === n && (r3 = n, 0 === Ne && Je(X)), t3;
  }
  function at() {
    var e3, t3;
    return Ne++, e3 = ze, _e(), (t3 = ct()) !== n ? (Ie = e3, e3 = je(t3)) : (ze = e3, e3 = n), Ne--, e3 === n && 0 === Ne && Je(te), e3;
  }
  function ot() {
    var t3, r3, u2, a3;
    if (Ne++, t3 = ze, 35 === e2.charCodeAt(ze) ? (r3 = F2, ze++) : (r3 = n, 0 === Ne && Je(ne)), r3 !== n) {
      if (u2 = [], a3 = e2.charAt(ze), O2.test(a3) ? ze++ : (a3 = n, 0 === Ne && Je(ue)), a3 !== n) for (; a3 !== n; ) u2.push(a3), a3 = e2.charAt(ze), O2.test(a3) ? ze++ : (a3 = n, 0 === Ne && Je(ue));
      else u2 = n;
      u2 !== n ? (Ie = t3, t3 = Oe()) : (ze = t3, t3 = n);
    } else ze = t3, t3 = n;
    return t3 === n && (t3 = ze, (r3 = Xe()) !== n && (Ie = t3, r3 = Pe(r3)), (t3 = r3) === n && (t3 = ze, (r3 = tt()) !== n && (Ie = t3, r3 = qe()), t3 = r3)), Ne--, t3 === n && (r3 = n, 0 === Ne && Je(re)), t3;
  }
  function ct() {
    var t3, r3, u2, a3, o3, c3, i3, l3;
    for (t3 = ze, r3 = e2.charAt(ze), P2.test(r3) ? ze++ : (r3 = n, 0 === Ne && Je(ae)), r3 === n && (r3 = null), u2 = ze, a3 = [], o3 = e2.charAt(ze), q2.test(o3) ? ze++ : (o3 = n, 0 === Ne && Je(oe)); o3 !== n; ) a3.push(o3), o3 = e2.charAt(ze), q2.test(o3) ? ze++ : (o3 = n, 0 === Ne && Je(oe));
    if (46 === e2.charCodeAt(ze) ? (o3 = $2, ze++) : (o3 = n, 0 === Ne && Je(ce)), o3 !== n) {
      if (c3 = [], i3 = e2.charAt(ze), q2.test(i3) ? ze++ : (i3 = n, 0 === Ne && Je(oe)), i3 !== n) for (; i3 !== n; ) c3.push(i3), i3 = e2.charAt(ze), q2.test(i3) ? ze++ : (i3 = n, 0 === Ne && Je(oe));
      else c3 = n;
      c3 !== n ? u2 = a3 = [a3, o3, c3] : (ze = u2, u2 = n);
    } else ze = u2, u2 = n;
    if (u2 === n) if (u2 = [], a3 = e2.charAt(ze), q2.test(a3) ? ze++ : (a3 = n, 0 === Ne && Je(oe)), a3 !== n) for (; a3 !== n; ) u2.push(a3), a3 = e2.charAt(ze), q2.test(a3) ? ze++ : (a3 = n, 0 === Ne && Je(oe));
    else u2 = n;
    if (u2 !== n) {
      if (a3 = ze, 101 === e2.charCodeAt(ze) ? (o3 = C2, ze++) : (o3 = n, 0 === Ne && Je(ie)), o3 !== n) {
        if (c3 = e2.charAt(ze), P2.test(c3) ? ze++ : (c3 = n, 0 === Ne && Je(ae)), c3 === n && (c3 = null), i3 = [], l3 = e2.charAt(ze), q2.test(l3) ? ze++ : (l3 = n, 0 === Ne && Je(oe)), l3 !== n) for (; l3 !== n; ) i3.push(l3), l3 = e2.charAt(ze), q2.test(l3) ? ze++ : (l3 = n, 0 === Ne && Je(oe));
        else i3 = n;
        i3 !== n ? a3 = o3 = [o3, c3, i3] : (ze = a3, a3 = n);
      } else ze = a3, a3 = n;
      a3 === n && (a3 = null), Ie = t3, t3 = ke();
    } else ze = t3, t3 = n;
    return t3;
  }
  function it(e3, t3) {
    return e3.map(function(e4) {
      return e4[t3];
    });
  }
  function lt(e3, t3, r3) {
    return [e3].concat(it(t3, r3));
  }
  if (r2 = o2(), t2.peg$library) return { peg$result: r2, peg$currPos: ze, peg$FAILED: n, peg$maxFailExpected: Me, peg$maxFailPos: Se };
  if (r2 !== n && ze === e2.length) return r2;
  throw r2 !== n && ze < e2.length && Je(Le()), Ke(Me, Se < e2.length ? e2.charAt(Se) : null, Se < e2.length ? He(Se, Se + 1) : He(Se, Se));
}
function d2(e2) {
  if (!e2 || 0 === e2.length) return null;
  if ("string" == typeof e2) {
    const t3 = y(e2);
    return t3 && 0 !== t3.length ? t3 : null;
  }
  const t2 = e2.map((e3) => {
    if (!Number.isFinite(e3.scale) || e3.scale <= 0) throw new s("effect:invalid-scale", "scale must be finite and greater than 0", { stop: e3 });
    return { scale: e3.scale, effects: y(e3.value) };
  });
  t2.sort((e3, t3) => t3.effects.length - e3.effects.length);
  for (let r2 = 0; r2 < t2.length - 1; r2++) {
    if (!t(t2[r2].effects, t2[r2 + 1].effects)) throw new s("effect:interpolation-impossible", "Cannot interpolate by scale between 2 lists of mixed effects", { a: t2[r2].effects, b: t2[r2 + 1].effects });
    e(t2[r2].effects, t2[r2 + 1].effects);
  }
  return t2.sort((e3, t3) => t3.scale - e3.scale), t2;
}
function y(e2) {
  let t2;
  if (!e2) return [];
  try {
    t2 = v(e2);
  } catch (r2) {
    throw new s("effect:invalid-syntax", "Invalid effect syntax", { value: e2, error: r2 });
  }
  return t2.map((e3) => w(e3));
}
function w(e2) {
  try {
    switch (e2.name) {
      case "grayscale":
      case "sepia":
      case "saturate":
      case "invert":
      case "brightness":
      case "contrast":
        return x(e2);
      case "opacity":
        return A(e2);
      case "hue-rotate":
        return b(e2);
      case "blur":
        return F(e2);
      case "drop-shadow":
        return $(e2);
      case "bloom":
        return C(e2);
    }
  } catch (t2) {
    throw t2.details.filter = e2, t2;
  }
  throw new s("effect:unknown-effect", `Effect '${e2.name}' is not supported`, { effect: e2 });
}
function x(e2) {
  let t2 = 1;
  return E(e2.parameters, 1), 1 === e2.parameters.length && (t2 = S(e2.parameters[0])), new p(e2.name, t2);
}
function A(e2) {
  let t2 = 1;
  return E(e2.parameters, 1), 1 === e2.parameters.length && (t2 = S(e2.parameters[0])), new f(t2);
}
function b(e2) {
  let t2 = 0;
  return E(e2.parameters, 1), 1 === e2.parameters.length && (t2 = N(e2.parameters[0])), new m(t2);
}
function F(e2) {
  let t2 = 0;
  return E(e2.parameters, 1), 1 === e2.parameters.length && (t2 = T(e2.parameters[0]), O(t2, e2.parameters[0])), new l(t2);
}
function $(e2) {
  const t2 = [];
  let r2 = null;
  for (const n of e2.parameters) if ("color" === n.type) {
    if (t2.length && Object.freeze(t2), r2) throw new s("effect:type-error", "Accepts only one color", {});
    r2 = U(n);
  } else {
    const e3 = T(n);
    if (Object.isFrozen(t2)) throw new s("effect:type-error", "<length> parameters not consecutive", { lengths: t2 });
    t2.push(e3), 3 === t2.length && O(e3, n);
  }
  if (t2.length < 2 || t2.length > 3) throw new s("effect:type-error", `Expected <length>{2,3}, Actual: <length>{${t2.length}}`, { lengths: t2 });
  return new d(t2[0], t2[1], t2[2] || 0, r2 || D("black"));
}
function C(e2) {
  let t2 = 1, r2 = 0, n = 0;
  return E(e2.parameters, 3), e2.parameters[0] && (t2 = S(e2.parameters[0])), e2.parameters[1] && (r2 = T(e2.parameters[1]), O(r2, e2.parameters[1])), e2.parameters[2] && (n = S(e2.parameters[2])), new c(t2, r2, n);
}
function E(e2, t2) {
  if (e2.length > t2) throw new s("effect:type-error", `Function supports up to ${t2} parameters, Actual: ${e2.length}`, { parameters: e2 });
}
function j(e2) {
  if ("color" === e2.type) return "<color>";
  if (e2.unit) {
    if (e2.unit in I) return "<length>";
    if (e2.unit in k) return "<angle>";
    if ("%" === e2.unit) return "<percentage>";
  }
  return "<double>";
}
function O(e2, t2) {
  if (e2 < 0) throw new s("effect:type-error", `Negative values are not allowed, Actual: ${e2}`, { term: t2 });
}
function P(e2) {
  if ("quantity" !== e2.type || null !== e2.unit) throw new s("effect:type-error", `Expected <double>, Actual: ${j(e2)}`, { term: e2 });
}
function q(e2) {
  if ("quantity" !== e2.type || null !== e2.unit && "%" !== e2.unit) throw new s("effect:type-error", `Expected <double> or <percentage>, Actual: ${j(e2)}`, { term: e2 });
}
h(m2, Error), m2.prototype.format = function(e2) {
  var t2 = "Error: " + this.message;
  if (this.location) {
    var r2, n = null;
    for (r2 = 0; r2 < e2.length; r2++) if (e2[r2].source === this.location.source) {
      n = e2[r2].text.split(/\r\n|\n|\r/g);
      break;
    }
    var u = this.location.start, a2 = this.location.source && "function" == typeof this.location.source.offset ? this.location.source.offset(u) : u, o2 = this.location.source + ":" + a2.line + ":" + a2.column;
    if (n) {
      var c2 = this.location.end, i2 = g("", a2.line.toString().length, " "), l2 = n[u.line - 1], s2 = (u.line === c2.line ? c2.column : l2.length + 1) - u.column || 1;
      t2 += "\n --> " + o2 + "\n" + i2 + " |\n" + a2.line + " | " + l2 + "\n" + i2 + " | " + g("", u.column - 1, " ") + g("", s2, "^");
    } else t2 += "\n at " + o2;
  }
  return t2;
}, m2.buildMessage = function(e2, t2) {
  var r2 = { literal: function(e3) {
    return '"' + u(e3.text) + '"';
  }, class: function(e3) {
    var t3 = e3.parts.map(function(e4) {
      return Array.isArray(e4) ? a2(e4[0]) + "-" + a2(e4[1]) : a2(e4);
    });
    return "[" + (e3.inverted ? "^" : "") + t3.join("") + "]";
  }, any: function() {
    return "any character";
  }, end: function() {
    return "end of input";
  }, other: function(e3) {
    return e3.description;
  } };
  function n(e3) {
    return e3.charCodeAt(0).toString(16).toUpperCase();
  }
  function u(e3) {
    return e3.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e4) {
      return "\\x0" + n(e4);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e4) {
      return "\\x" + n(e4);
    });
  }
  function a2(e3) {
    return e3.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(e4) {
      return "\\x0" + n(e4);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(e4) {
      return "\\x" + n(e4);
    });
  }
  function o2(e3) {
    return r2[e3.type](e3);
  }
  function c2(e3) {
    var t3, r3, n2 = e3.map(o2);
    if (n2.sort(), n2.length > 0) {
      for (t3 = 1, r3 = 1; t3 < n2.length; t3++) n2[t3 - 1] !== n2[t3] && (n2[r3] = n2[t3], r3++);
      n2.length = r3;
    }
    switch (n2.length) {
      case 1:
        return n2[0];
      case 2:
        return n2[0] + " or " + n2[1];
      default:
        return n2.slice(0, -1).join(", ") + ", or " + n2[n2.length - 1];
    }
  }
  function i2(e3) {
    return e3 ? '"' + u(e3) + '"' : "end of input";
  }
  return "Expected " + c2(e2) + " but " + i2(t2) + " found.";
};
var k = { deg: 1, grad: 0.9, rad: 180 / Math.PI, turn: 360 };
function z(e2) {
  if ("quantity" !== e2.type || !(0 === e2.value && null === e2.unit || e2.unit && null != k[e2.unit])) throw new s("effect:type-error", `Expected <angle>, Actual: ${j(e2)}`, { term: e2 });
}
var I = { px: 1, cm: 96 / 2.54, mm: 96 / 2.54 / 10, in: 96, pc: 16, pt: 96 / 72 };
function R(e2) {
  if ("quantity" !== e2.type || !(0 === e2.value && null === e2.unit || e2.unit && null != I[e2.unit])) throw new s("effect:type-error", `Expected <length>, Actual: ${j(e2)}`, { term: e2 });
}
function S(e2) {
  q(e2);
  const t2 = e2.value;
  return O(t2, e2), "%" === e2.unit ? 0.01 * t2 : t2;
}
function M(e2) {
  return P(e2), O(e2.value, e2), e2.value;
}
function N(e2) {
  return z(e2), e2.value * k[e2.unit] || 0;
}
function T(e2) {
  return R(e2), e2.value * I[e2.unit] || 0;
}
function U(t2) {
  switch (t2.colorType) {
    case "hex":
      return i(t2.value);
    case "named":
      return D(t2.value);
    case "function":
      return G(t2.value);
  }
}
function D(e2) {
  if (!r(e2)) throw new s("effect:unknown-color", `color '${e2}' isn't valid`, { namedColor: e2 });
  return a(e2);
}
var L = /^rgba?/i;
var B = /^hsla?/i;
function G(e2) {
  if (E(e2.parameters, 4), L.test(e2.name)) return [S(e2.parameters[0]), S(e2.parameters[1]), S(e2.parameters[2]), e2.parameters[3] ? S(e2.parameters[3]) : 1];
  if (B.test(e2.name)) return o(M(e2.parameters[0]), S(e2.parameters[1]), S(e2.parameters[2]), e2.parameters[3] ? S(e2.parameters[3]) : 1);
  throw new s("effect:syntax-error", `Invalid color function '${e2.name}'`, { colorFunction: e2 });
}

export {
  d2 as d
};
//# sourceMappingURL=chunk-VTPZW6H5.js.map
