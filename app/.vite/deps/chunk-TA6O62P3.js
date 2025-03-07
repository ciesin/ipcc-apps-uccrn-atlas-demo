import {
  r
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/arcade/executionError.js
var r2;
!function(e) {
  e.AsyncNotEnabled = "AsyncNotEnabled", e.ModulesNotSupported = "ModulesNotSupported", e.CircularModules = "CircularModules", e.CannotCompareDateAndTime = "CannotCompareDateAndTime", e.NeverReach = "NeverReach", e.UnsupportedHashType = "UnsupportedHashType", e.InvalidParameter = "InvalidParameter", e.FeatureSetDoesNotHaveSubtypes = "FeatureSetDoesNotHaveSubtypes", e.UnexpectedToken = "UnexpectedToken", e.Unrecognized = "Unrecognized", e.UnrecognizedType = "UnrecognizedType", e.MaximumCallDepth = "MaximumCallDepth", e.BooleanConditionRequired = "BooleanConditionRequired", e.TypeNotAllowedInFeature = "TypeNotAllowedInFeature", e.KeyMustBeString = "KeyMustBeString", e.WrongNumberOfParameters = "WrongNumberOfParameters", e.CallNonFunction = "CallNonFunction", e.NoFunctionInTemplateLiteral = "NoFunctionInTemplateLiteral", e.NoFunctionInDictionary = "NoFunctionInDictionary", e.NoFunctionInArray = "NoFunctionInArray", e.AssignModuleFunction = "AssignModuleFunction", e.LogicExpressionOrAnd = "LogicExpressionOrAnd", e.LogicalExpressionOnlyBoolean = "LogicalExpressionOnlyBoolean", e.FunctionNotFound = "FunctionNotFound", e.InvalidMemberAccessKey = "InvalidMemberAccessKey", e.UnsupportedUnaryOperator = "UnsupportUnaryOperator", e.InvalidIdentifier = "InvalidIdentifier", e.MemberOfNull = "MemberOfNull", e.UnsupportedOperator = "UnsupportedOperator", e.Cancelled = "Cancelled", e.ModuleAccessorMustBeString = "ModuleAccessorMustBeString", e.ModuleExportNotFound = "ModuleExportNotFound", e.Immutable = "Immutable", e.OutOfBounds = "OutOfBounds", e.IllegalResult = "IllegalResult", e.FieldNotFound = "FieldNotFound", e.PortalRequired = "PortalRequired", e.LogicError = "LogicError", e.ArrayAccessorMustBeNumber = "ArrayAccessMustBeNumber", e.KeyAccessorMustBeString = "KeyAccessorMustBeString", e.WrongSpatialReference = "WrongSpatialReference", e.CannotChangeTimeZoneTime = "CannotChangeTimeZoneTime", e.CannotChangeTimeZoneDateOnly = "CannotChangeTimeZoneDateOnly";
}(r2 || (r2 = {}));
var o = { [r2.TypeNotAllowedInFeature]: "Feature attributes only support dates, numbers, strings, guids.", [r2.LogicError]: "Logic error - {reason}", [r2.CannotCompareDateAndTime]: "Cannot compare date or dateonly with timeonly types", [r2.NeverReach]: "Encountered unreachable logic", [r2.AsyncNotEnabled]: "Async Arcade must be enabled for this script", [r2.ModuleAccessorMustBeString]: "Module accessor must be a string", [r2.ModuleExportNotFound]: "Module has no export with provided identifier", [r2.ModulesNotSupported]: "Current profile does not support modules", [r2.ArrayAccessorMustBeNumber]: "Array accessor must be a number", [r2.FunctionNotFound]: "Function not found", [r2.FieldNotFound]: "Key not found - {key}", [r2.CircularModules]: "Circular module dependencies are not allowed", [r2.Cancelled]: "Execution cancelled", [r2.UnsupportedHashType]: "Type not supported in hash function", [r2.IllegalResult]: "Value is not a supported return type", [r2.PortalRequired]: "Portal is required", [r2.InvalidParameter]: "Invalid parameter", [r2.WrongNumberOfParameters]: "Call with wrong number of parameters", [r2.Unrecognized]: "Unrecognized code structure", [r2.UnrecognizedType]: "Unrecognized type", [r2.WrongSpatialReference]: "Cannot work with geometry in this spatial reference. It is different to the execution spatial reference", [r2.BooleanConditionRequired]: "Conditions must use booleans", [r2.NoFunctionInDictionary]: "Dictionaries cannot contain functions.", [r2.NoFunctionInArray]: "Arrays cannot contain functions.", [r2.NoFunctionInTemplateLiteral]: "Template Literals do not expect functions by value.", [r2.KeyAccessorMustBeString]: "Accessor must be a string", [r2.KeyMustBeString]: "Object keys must be a string", [r2.Immutable]: "Object is immutable", [r2.UnexpectedToken]: "Unexpected token", [r2.MemberOfNull]: "Cannot access property of null object", [r2.MaximumCallDepth]: "Exceeded maximum function depth", [r2.OutOfBounds]: "Out of bounds", [r2.InvalidIdentifier]: "Identifier not recognized", [r2.CallNonFunction]: "Expression is not a function", [r2.InvalidMemberAccessKey]: "Cannot access value using a key of this type", [r2.AssignModuleFunction]: "Cannot assign function to module variable", [r2.UnsupportedUnaryOperator]: "Unsupported unary operator", [r2.UnsupportedOperator]: "Unsupported operator", [r2.LogicalExpressionOnlyBoolean]: "Logical expressions must be boolean", [r2.LogicExpressionOrAnd]: "Logical expression can only be combined with || or &&", [r2.CannotChangeTimeZoneTime]: "Cannot change the timezone of a Time", [r2.CannotChangeTimeZoneDateOnly]: "Cannot change the timezone of a DateOnly", [r2.FeatureSetDoesNotHaveSubtypes]: "FeatureSet does not have subtypes" };
var n = class extends Error {
  constructor(...e) {
    super(...e);
  }
};
var t = class _t extends n {
  constructor(e, r3) {
    super(s(r3) + e.message, { cause: e }), this.loc = null, Error.captureStackTrace && Error.captureStackTrace(this, _t), (r3 == null ? void 0 : r3.loc) && (this.loc = r3.loc);
  }
};
var a = class _a extends Error {
  constructor(r3, n2, t2, c2) {
    super("Execution error - " + s(t2) + r(o[n2], c2)), this.loc = null, this.declaredRootClass = "esri.arcade.arcadeexecutionerror", Error.captureStackTrace && Error.captureStackTrace(this, _a), (t2 == null ? void 0 : t2.loc) && (this.loc = t2.loc);
  }
};
function s(e) {
  var _a, _b;
  return e && e.loc ? `Line : ${(_a = e.loc.start) == null ? void 0 : _a.line}, ${(_b = e.loc.start) == null ? void 0 : _b.column}: ` : "";
}
var c = class _c extends Error {
  constructor(r3, n2, t2, a2) {
    super("Compilation error - " + s(t2) + r(o[n2], a2)), this.loc = null, this.declaredRootClass = "esri.arcade.arcadecompilationerror", Error.captureStackTrace && Error.captureStackTrace(this, _c), (t2 == null ? void 0 : t2.loc) && (this.loc = t2.loc);
  }
};
var i = class _i extends Error {
  constructor() {
    super("Uncompilable code structures"), this.declaredRootClass = "esri.arcade.arcadeuncompilableerror", Error.captureStackTrace && Error.captureStackTrace(this, _i);
  }
};
function u(e, r3, o2) {
  return "esri.arcade.arcadeexecutionerror" === o2.declaredRootClass || "esri.arcade.arcadecompilationerror" === o2.declaredRootClass ? null === o2.loc && (r3 == null ? void 0 : r3.loc) ? new t(o2, { cause: o2 }) : o2 : ("esri.arcade.featureset.support.featureseterror" === o2.declaredRootClass || "esri.arcade.featureset.support.sqlerror" === o2.declaredRootClass || o2.declaredRootClass, (r3 == null ? void 0 : r3.loc) ? new t(o2, { cause: o2 }) : o2);
}
var l;
!function(e) {
  e.UnrecognizedUri = "UnrecognizedUri", e.UnsupportedUriProtocol = "UnsupportedUriProtocol";
}(l || (l = {}));
var d = { [l.UnrecognizedUri]: "Unrecognized uri - {uri}", [l.UnsupportedUriProtocol]: "Unrecognized uri protocol" };
var p = class _p extends Error {
  constructor(r3, o2) {
    super(r(d[r3], o2)), this.declaredRootClass = "esri.arcade.arcademoduleerror", Error.captureStackTrace && Error.captureStackTrace(this, _p);
  }
};

export {
  r2 as r,
  a,
  c,
  i,
  u,
  l,
  p
};
//# sourceMappingURL=chunk-TA6O62P3.js.map
