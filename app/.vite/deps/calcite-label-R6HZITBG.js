import {
  B,
  E,
  f
} from "./chunk-LYANRL5K.js";
import "./chunk-QD55HJQW.js";
import "./chunk-IRYILD7C.js";
import {
  LitElement,
  S,
  createEvent,
  css,
  html,
  safeClassMap
} from "./chunk-RVUV2HD7.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@esri/calcite-components/dist/components/calcite-label/customElement.js
var d = {
  container: "container"
};
var m = css`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([alignment=start]){text-align:start}:host([alignment=end]){text-align:end}:host([alignment=center]){text-align:center}:host([scale=s]) .container{gap:.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, .5rem)}:host([scale=m]) .container{gap:.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, .75rem)}:host([scale=l]) .container{gap:.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-block-end:var(--calcite-label-margin-bottom, 1rem)}:host .container{margin-inline:0px;margin-block-start:0px;inline-size:100%;line-height:1.375;color:var(--calcite-color-text-1);color:var(--calcite-label-text-color, var(--calcite-color-text-1))}:host([layout=default]) .container{display:flex;flex-direction:column}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:flex;flex-direction:row;align-items:center;gap:.5rem}:host([layout=inline][scale=l]) .container{gap:.75rem}:host([layout=inline-space-between]) .container{justify-content:space-between}:host([disabled])>.container{opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--tw-bg-opacity: 1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--tw-bg-opacity: 0}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`;
var _b = class _b extends LitElement {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.alignment = "start", this.layout = "default", this.scale = "m", this.calciteInternalLabelClick = createEvent({ bubbles: false, cancelable: false }), this.listen("click", this.labelClickHandler);
  }
  connectedCallback() {
    super.connectedCallback(), document.dispatchEvent(new CustomEvent(E));
  }
  willUpdate(e) {
    e.has("for") && B(this.el);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.dispatchEvent(new CustomEvent(f));
  }
  // #endregion
  // #region Private Methods
  labelClickHandler(e) {
    var _a;
    ((_a = window.getSelection()) == null ? void 0 : _a.type) !== "Range" && this.calciteInternalLabelClick.emit({
      sourceEvent: e
    });
  }
  // #endregion
  // #region Rendering
  render() {
    return html`<div class=${safeClassMap(d.container)}><slot></slot></div>`;
  }
};
_b.properties = { alignment: 3, for: 3, layout: 3, scale: 3 };
_b.styles = m;
var b = _b;
S("calcite-label", b);
export {
  b as Label
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-label/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=calcite-label-R6HZITBG.js.map
