import {
  p
} from "./chunk-QM4DRRZI.js";

// node_modules/@arcgis/core/arcade/geometry/operatorsWorkerConnection.js
var e;
var o;
var t = false;
function n() {
  return e ?? (e = p("arcadeGeometryOperatorsWorker").then((r) => {
    o = r, t = true, e = void 0;
  }));
}
async function a(r, e2) {
  return t ? o.apply("invokeGeometryOp", [r, e2]) : (await n(), a(r, e2));
}

export {
  a
};
//# sourceMappingURL=chunk-PE5QC36M.js.map
