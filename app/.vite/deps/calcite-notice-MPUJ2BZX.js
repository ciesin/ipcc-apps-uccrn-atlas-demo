import {
  s as s3
} from "./chunk-TWQBATEK.js";
import {
  s as s2
} from "./chunk-KES7E466.js";
import {
  r
} from "./chunk-G7OZSL6E.js";
import "./chunk-DXGBUQNN.js";
import {
  createRef,
  ref
} from "./chunk-6Q5AUVK4.js";
import {
  s
} from "./chunk-KYXTLOLK.js";
import "./chunk-RQCMOTBU.js";
import {
  Tt,
  ut
} from "./chunk-QD55HJQW.js";
import "./chunk-IRYILD7C.js";
import {
  LitElement,
  S,
  createEvent,
  css,
  html,
  safeClassMap,
  stringOrBoolean
} from "./chunk-RVUV2HD7.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@esri/calcite-components/dist/chunks/resources4.js
var n = {
  brand: "lightbulb",
  danger: "exclamationMarkTriangle",
  info: "information",
  success: "checkCircle",
  warning: "exclamationMarkTriangle"
};

// node_modules/@esri/calcite-components/dist/components/calcite-notice/customElement.js
var n2 = {
  title: "title",
  message: "message",
  link: "link",
  actionsEnd: "actions-end"
};
var o = {
  actionsEnd: "actions-end",
  close: "notice-close",
  container: "container",
  content: "notice-content",
  icon: "notice-icon"
};
var k = css`:host([scale=s]){--calcite-notice-spacing-token-small: .5rem;--calcite-notice-spacing-token-large: .75rem}:host([scale=s]) .container slot[name=title]::slotted(*),:host([scale=s]) .container *::slotted([slot=title]){margin-block:.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) .container slot[name=message]::slotted(*),:host([scale=s]) .container *::slotted([slot=message]){margin-block:.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) ::slotted(calcite-link){margin-block:.125rem;font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .notice-close{padding:.5rem}:host([scale=m]){--calcite-notice-spacing-token-small: .75rem;--calcite-notice-spacing-token-large: 1rem}:host([scale=m]) .container slot[name=title]::slotted(*),:host([scale=m]) .container *::slotted([slot=title]){margin-block:.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) .container slot[name=message]::slotted(*),:host([scale=m]) .container *::slotted([slot=message]){margin-block:.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) ::slotted(calcite-link){margin-block:.125rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=l]){--calcite-notice-spacing-token-small: 1rem;--calcite-notice-spacing-token-large: 1.25rem}:host([scale=l]) .container slot[name=title]::slotted(*),:host([scale=l]) .container *::slotted([slot=title]){margin-block:.125rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) .container slot[name=message]::slotted(*),:host([scale=l]) .container *::slotted([slot=message]){margin-block:.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) ::slotted(calcite-link){margin-block:.125rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([width=auto]){--calcite-notice-width: auto}:host([width=half]){--calcite-notice-width: 50%}:host([width=full]){--calcite-notice-width: 100%}:host{margin-inline:auto;display:none;max-inline-size:100%;align-items:center;inline-size:var(--calcite-notice-width)}.container{pointer-events:none;margin-block:0px;box-sizing:border-box;display:flex;inline-size:100%;opacity:0;overflow:hidden;max-block-size:0;transition-property:opacity,max-block-size;transition-duration:var(--calcite-animation-timing);text-align:start;border-inline-start:var(--calcite-border-width-md) solid;box-shadow:0 0 0 0 transparent;background-color:var(--calcite-notice-background-color, var(--calcite-color-foreground-1))}.notice-close{outline-color:transparent}.notice-close:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host{display:flex}:host([open]) .container{pointer-events:auto;max-block-size:100%;align-items:center;opacity:1;--tw-shadow: 0 4px 8px -1px rgba(0, 0, 0, .08), 0 2px 4px -1px rgba(0, 0, 0, .04);--tw-shadow-colored: 0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);overflow:visible}.container slot[name=title]::slotted(*),.container *::slotted([slot=title]){margin:0;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-notice-close-text-color-hover, var(--calcite-color-text-1))}.container slot[name=message]::slotted(*),.container *::slotted([slot=message]){margin:0;display:inline;font-weight:var(--calcite-font-weight-normal);margin-inline-end:var(--calcite-notice-spacing-token-small);color:var(--calcite-notice-content-text-color, var(--calcite-color-text-2))}.notice-content{box-sizing:border-box;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;display:flex;min-inline-size:0px;flex-direction:column;overflow-wrap:break-word;flex:1 1 0;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:0 var(--calcite-notice-spacing-token-small)}.notice-content:first-of-type:not(:only-child){padding-inline-start:var(--calcite-notice-spacing-token-large)}.notice-content:only-of-type{padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large)}.notice-icon{display:flex;align-items:center;box-sizing:border-box;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto}.notice-close{display:flex;cursor:pointer;align-items:center;align-self:stretch;border-style:none;background-color:transparent;outline:2px solid transparent;outline-offset:2px;box-sizing:border-box;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;padding-block:var(--calcite-notice-spacing-token-small);padding-inline:var(--calcite-notice-spacing-token-large);flex:0 0 auto;-webkit-appearance:none;color:var(--calcite-notice-close-text-color, var(--calcite-color-text-3))}.notice-close:hover,.notice-close:focus{background-color:var(--calcite-notice-close-background-color-focus, var(--calcite-color-foreground-2));color:var(--calcite-notice-close-text-color-hover, var(--calcite-color-text-1))}.notice-close:active{background-color:var(--calcite-notice-close-background-color-press, var(--calcite-color-foreground-3))}.actions-end{display:flex;align-self:stretch}:host([kind=brand]) .container{border-color:var(--calcite-color-brand)}:host([kind=brand]) .container .notice-icon{color:var(--calcite-color-brand)}:host([kind=info]) .container{border-color:var(--calcite-color-status-info)}:host([kind=info]) .container .notice-icon{color:var(--calcite-color-status-info)}:host([kind=danger]) .container{border-color:var(--calcite-color-status-danger)}:host([kind=danger]) .container .notice-icon{color:var(--calcite-color-status-danger)}:host([kind=success]) .container{border-color:var(--calcite-color-status-success)}:host([kind=success]) .container .notice-icon{color:var(--calcite-color-status-success)}:host([kind=warning]) .container{border-color:var(--calcite-color-status-warning)}:host([kind=warning]) .container .notice-icon{color:var(--calcite-color-status-warning)}:host([hidden]){display:none}[hidden]{display:none}`;
var _x = class _x extends LitElement {
  constructor() {
    super(...arguments), this.closeButton = createRef(), this.transitionProp = "opacity", this.hasActionEnd = false, this.closable = false, this.iconFlipRtl = false, this.kind = "brand", this.messages = s(), this.open = false, this.scale = "m", this.width = "auto", this.calciteNoticeBeforeClose = createEvent({ cancelable: false }), this.calciteNoticeBeforeOpen = createEvent({ cancelable: false }), this.calciteNoticeClose = createEvent({ cancelable: false }), this.calciteNoticeOpen = createEvent({ cancelable: false });
  }
  // #endregion
  // #region Public Methods
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await r(this);
    const t = this.el.querySelector("calcite-link");
    if (!(!this.closeButton.value && !t)) {
      if (t)
        return t.setFocus();
      this.closeButton.value && this.closeButton.value.focus();
    }
  }
  // #endregion
  // #region Lifecycle
  async load() {
    this.requestedIcon = Tt(n, this.icon, this.kind);
  }
  willUpdate(t) {
    t.has("open") && (this.hasUpdated || this.open !== false) && s3(this), (t.has("icon") || t.has("kind") && (this.hasUpdated || this.kind !== "brand")) && (this.requestedIcon = Tt(n, this.icon, this.kind));
  }
  loaded() {
  }
  // #endregion
  // #region Private Methods
  onBeforeClose() {
    this.calciteNoticeBeforeClose.emit();
  }
  onBeforeOpen() {
    this.calciteNoticeBeforeOpen.emit();
  }
  onClose() {
    this.calciteNoticeClose.emit();
  }
  onOpen() {
    this.calciteNoticeOpen.emit();
  }
  setTransitionEl(t) {
    this.transitionEl = t;
  }
  close() {
    this.open = false;
  }
  handleActionsEndSlotChange(t) {
    this.hasActionEnd = ut(t);
  }
  // #endregion
  // #region Rendering
  render() {
    const t = html`<button .ariaLabel=${this.messages.close} class=${safeClassMap(o.close)} @click=${this.close} ${ref(this.closeButton)}><calcite-icon icon=x .scale=${s2(this.scale)}></calcite-icon></button>`;
    return html`<div class=${safeClassMap(o.container)} ${ref(this.setTransitionEl)}>${this.requestedIcon ? html`<div class=${safeClassMap(o.icon)}><calcite-icon .flipRtl=${this.iconFlipRtl} .icon=${this.requestedIcon} .scale=${s2(this.scale)}></calcite-icon></div>` : null}<div class=${safeClassMap(o.content)}><slot name=${n2.title}></slot><slot name=${n2.message}></slot><slot name=${n2.link}></slot></div><div class=${safeClassMap(o.actionsEnd)} .hidden=${!this.hasActionEnd}><slot name=${n2.actionsEnd} @slotchange=${this.handleActionsEndSlotChange}></slot></div>${this.closable ? t : null}</div>`;
  }
};
_x.properties = { hasActionEnd: 16, closable: 7, icon: [3, { converter: stringOrBoolean }], iconFlipRtl: 7, kind: 3, messageOverrides: 0, open: 7, scale: 3, width: 3 };
_x.styles = k;
var x = _x;
S("calcite-notice", x);
export {
  x as Notice
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/resources4.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)

@esri/calcite-components/dist/components/calcite-notice/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=calcite-notice-MPUJ2BZX.js.map
