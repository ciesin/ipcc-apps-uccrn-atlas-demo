import {
  n
} from "./chunk-7AOPU62X.js";

// node_modules/@arcgis/core/layers/ILyr3DWasmPerSceneView.js
var t;
var e;
var a;
var i;
var n2;
var o;
var r;
var c;
var s;
var N;
var p;
var l;
var S;
var g;
var u;
!function(t2) {
  t2.U8 = "U8", t2.I8 = "I8", t2.U16 = "U16", t2.I16 = "I16", t2.U32 = "U32", t2.I32 = "I32", t2.F32 = "F32", t2.F64 = "F64", t2.Utf8String = "Utf8String", t2.NotSet = "NotSet";
}(t || (t = {})), function(t2) {
  t2.Png = "Png", t2.Jpeg = "Jpeg", t2.Dds = "Dds", t2.Raw = "Raw", t2.Dxt1 = "Dxt1", t2.Dxt5 = "Dxt5", t2.Bc7 = "Bc7", t2.Basis = "Basis", t2.Etc1 = "Etc1", t2.Etc2 = "Etc2", t2.Astc = "Astc", t2.Pvrtc = "Pvrtc", t2.NotSet = "NotSet";
}(e || (e = {})), function(t2) {
  t2.Position = "Position", t2.Normal = "Normal", t2.TexCoord = "TexCoord", t2.Color = "Color", t2.Tangent = "Tangent", t2.FeatureIndex = "FeatureIndex", t2.UvRegion = "UvRegion", t2.FeatureVariable = "FeatureVariable", t2.NotSet = "NotSet";
}(a || (a = {})), function(t2) {
  t2.Opaque = "Opaque", t2.Mask = "Mask", t2.Blend = "Blend";
}(i || (i = {})), function(t2) {
  t2.None = "None", t2.Mask = "Mask", t2.Alpha = "Alpha", t2.PreMultAlpha = "PreMultAlpha", t2.NotSet = "NotSet";
}(n2 || (n2 = {})), function(t2) {
  t2.Points = "Points", t2.Lines = "Lines", t2.LineStrip = "LineStrip", t2.Triangles = "Triangles", t2.TriangleStrip = "TriangleStrip", t2.NotSet = "NotSet";
}(o || (o = {})), function(t2) {
  t2.None = "None", t2.WrapXBit = "WrapXBit", t2.WrapYBit = "WrapYBit", t2.WrapXy = "WrapXy", t2.NotSet = "NotSet";
}(r || (r = {})), function(t2) {
  t2.Linear = "Linear", t2.Nearest = "Nearest", t2.NotSet = "NotSet";
}(c || (c = {})), function(t2) {
  t2.Linear = "Linear", t2.Nearest = "Nearest", t2.NearestMipmapNearest = "NearestMipmapNearest", t2.LinearMipmapNearest = "LinearMipmapNearest", t2.NearestMipmapLinear = "NearestMipmapLinear", t2.LinearMipmapLinear = "LinearMipmapLinear", t2.NotSet = "NotSet";
}(s || (s = {})), function(t2) {
  t2.FeatureId = "FeatureId", t2.GlobalUid = "GlobalUid", t2.UnspecifiedDateTime = "UnspecifiedDateTime", t2.EcmaIso8601DateTime = "EcmaIso8601DateTime", t2.EcmaIso8601DateOnly = "EcmaIso8601DateOnly", t2.TimeOnly = "TimeOnly", t2.TimeStamp = "TimeStamp", t2.ColorRgb = "ColorRgb", t2.ColorRgba = "ColorRgba", t2.Unrecognized = "Unrecognized", t2.NotSet = "NotSet";
}(N || (N = {})), function(t2) {
  t2.Texture = "Texture", t2.VertexAtrb = "VertexAtrb", t2.Implicit = "Implicit", t2.NotSet = "NotSet";
}(p || (p = {})), function(t2) {
  t2.Front = "Front", t2.Back = "Back", t2.None = "None", t2.NotSet = "NotSet";
}(l || (l = {})), function(t2) {
  t2.Pbr = "Pbr", t2.Unlit = "Unlit";
}(S || (S = {})), function(t2) {
  t2.Rgb8 = "Rgb8", t2.Rgba8 = "Rgba8", t2.R8 = "R8", t2.Bgr8 = "Bgr8", t2.Bgra8 = "Bgra8", t2.Rg8 = "Rg8", t2.Ga8 = "Ga8", t2.Etc1 = "Etc1", t2.Etc2 = "Etc2", t2.Dxt1 = "Dxt1", t2.Dxt5 = "Dxt5", t2.Bc7 = "Bc7", t2.NotSet = "NotSet";
}(g || (g = {})), function(t2) {
  t2[t2.Succeeded = 0] = "Succeeded", t2[t2.Failed = 1] = "Failed", t2[t2.MissingInputs = 2] = "MissingInputs";
}(u || (u = {}));
var m = -1;
var d = -2;

// node_modules/@arcgis/core/libs/lyr3d/Lyr3DModule.js
function n3() {
  return new Promise((t2) => import("./lyr3DMain-HXDU4TBG.js").then((t3) => t3.l).then(({ default: n4 }) => {
    const e3 = n4({ locateFile: i2, onRuntimeInitialized: () => t2(e3) });
  })).catch((t2) => {
    throw t2;
  });
}
function e2() {
  return new Promise((t2) => import("./lyr3DWorker-ZAQE2YHR.js").then((t3) => t3.l).then(({ default: n4 }) => {
    const e3 = n4({ locateFile: i2, onRuntimeInitialized: () => t2(e3) });
  })).catch((t2) => {
    throw t2;
  });
}
function i2(n4) {
  return n(`esri/libs/lyr3d/${n4}`);
}

export {
  u,
  m,
  d,
  n3 as n,
  e2 as e
};
//# sourceMappingURL=chunk-XEIAE5ZE.js.map
