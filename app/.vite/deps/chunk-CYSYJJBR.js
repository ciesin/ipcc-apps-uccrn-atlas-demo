import {
  N
} from "./chunk-WHV4I2Y7.js";
import {
  Q
} from "./chunk-LTDNORB5.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/graphics/sources/support/uploadAssetErrors.js
var e = "upload-assets";
var o = () => new Error();
var r = class extends s {
  constructor() {
    super(`${e}:unsupported`, "Layer does not support asset uploads.", o());
  }
};
var t = class extends s {
  constructor() {
    super(`${e}:no-glb-support`, "Layer does not support glb.", o());
  }
};
var n = class extends s {
  constructor() {
    super(`${e}:no-supported-source`, "No supported external source found", o());
  }
};
var u = class extends s {
  constructor() {
    super(`${e}:not-base-64`, "Expected gltf data in base64 format after conversion.", o());
  }
};
var p = class extends s {
  constructor() {
    super(`${e}:unable-to-prepare-options`, "Unable to prepare uploadAsset request options.", o());
  }
};
var a = class extends s {
  constructor(s2, r2) {
    super(`${e}:bad-response`, `Bad response. Uploaded ${s2} items and received ${r2} results.`, o());
  }
};
var d = class extends s {
  constructor(s2, r2) {
    super(`${e}-layer:upload-failed`, `Failed to upload mesh file ${s2}. Error code: ${(r2 == null ? void 0 : r2.code) ?? "-1"}. Error message: ${(r2 == null ? void 0 : r2.messages) ?? "unknown"}`, o());
  }
};
var c = class extends s {
  constructor(s2) {
    super(`${e}-layer:unsupported-format`, `The service allowed us to upload an asset of FormatID ${s2}, but it does not list it in its supported formats.`, o());
  }
};
var l = class extends s {
  constructor() {
    super(`${e}:convert3D-failed`, "convert3D failed.");
  }
};
var i = class extends s {
  constructor() {
    super("invalid-input:no-model", "No supported model found");
  }
};
var m = class extends s {
  constructor() {
    super("invalid-input:multiple-models", "Multiple supported models found");
  }
};

// node_modules/@arcgis/core/layers/support/meshSpatialReferenceScaleUtils.js
function t2(t3) {
  const e2 = 1 / Q(t3, 1);
  return 1 !== e2 ? new N({ scale: [e2, e2, e2] }) : void 0;
}

export {
  r,
  t,
  n,
  u,
  p,
  a,
  d,
  c,
  l,
  i,
  m,
  t2
};
//# sourceMappingURL=chunk-CYSYJJBR.js.map
