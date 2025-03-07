import {
  Directive,
  directive,
  nothing,
  setCommittedValue
} from "./chunk-RVUV2HD7.js";

// node_modules/lit-html/development/directives/keyed.js
var Keyed = class extends Directive {
  constructor() {
    super(...arguments);
    this.key = nothing;
  }
  render(k, v) {
    this.key = k;
    return v;
  }
  update(part, [k, v]) {
    if (k !== this.key) {
      setCommittedValue(part);
      this.key = k;
    }
    return v;
  }
};
var keyed = directive(Keyed);

export {
  keyed
};
/*! Bundled license information:

lit-html/development/directives/keyed.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=chunk-RWVOOLIP.js.map
