import {
  e as e2
} from "./chunk-PX3W5QSO.js";
import {
  d
} from "./chunk-ZH6PYRVF.js";
import {
  e
} from "./chunk-M6FNW7GP.js";
import {
  n
} from "./chunk-5HI5HAKB.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/animatedFormats/utils.js
function a(t) {
  return n(t.frameDurations.reduce((t2, e3) => t2 + e3, 0));
}
function n2(t) {
  const { width: e3, height: r } = t, i = t.frameDurations.reverse(), a2 = (e4) => {
    const r2 = t.frameDurations.length - 1 - e4;
    return t.getFrame(r2);
  };
  return { frameCount: t.frameCount, duration: t.duration, frameDurations: i, getFrame: a2, width: e3, height: r };
}
function o(t, r) {
  const { width: i, height: a2, getFrame: n3 } = t, o2 = r / t.duration, s2 = t.frameDurations.map((t2) => n(t2 * o2));
  return { frameCount: t.frameCount, duration: t.duration, frameDurations: s2, getFrame: n3, width: i, height: a2 };
}
function s(t, r) {
  const { width: i, height: a2, getFrame: n3 } = t, o2 = t.frameDurations.slice(), s2 = o2.shift();
  return o2.unshift(n(s2 + r)), { frameCount: t.frameCount, duration: t.duration + r, frameDurations: o2, getFrame: n3, width: i, height: a2 };
}
function m(t, r) {
  const { width: i, height: a2, getFrame: n3 } = t, o2 = t.frameDurations.slice(), s2 = o2.pop();
  return o2.push(n(s2 + r)), { frameCount: t.frameCount, duration: t.duration + r, frameDurations: o2, getFrame: n3, width: i, height: a2 };
}
var u = class {
  constructor(t, e3, r, i) {
    this._animation = t, this._repeatType = r, this._onFrameData = i, this._direction = 1, this._currentFrame = 0, this.timeToFrame = this._animation.frameDurations[this._currentFrame];
    let a2 = 0;
    for (; e3 > a2; ) a2 += this.timeToFrame, this.nextFrame();
    const n3 = this._animation.getFrame(this._currentFrame);
    this._onFrameData(n3);
  }
  nextFrame() {
    if (this._currentFrame += this._direction, this._direction > 0) {
      if (this._currentFrame === this._animation.frameDurations.length) switch (this._repeatType) {
        case d.None:
          this._currentFrame -= this._direction;
          break;
        case d.Loop:
          this._currentFrame = 0;
          break;
        case d.Oscillate:
          this._currentFrame -= this._direction, this._direction = -1;
      }
    } else if (-1 === this._currentFrame) switch (this._repeatType) {
      case d.None:
        this._currentFrame -= this._direction;
        break;
      case d.Loop:
        this._currentFrame = this._animation.frameDurations.length - 1;
        break;
      case d.Oscillate:
        this._currentFrame -= this._direction, this._direction = 1;
    }
    this.timeToFrame = this._animation.frameDurations[this._currentFrame];
    const t = this._animation.getFrame(this._currentFrame);
    this._onFrameData(t);
  }
};
function h(t, h2, c2, f) {
  let l, { repeatType: d2 } = h2;
  if (null == d2 && (d2 = d.Loop), true === h2.reverseAnimation && (t = n2(t)), null != h2.duration && (t = o(t, n(1e3 * h2.duration))), null != h2.repeatDelay) {
    const i = 1e3 * h2.repeatDelay;
    d2 === d.Loop ? t = m(t, n(i)) : d2 === d.Oscillate && (t = s(m(t, n(i / 2)), n(i / 2)));
  }
  if (null != h2.startTimeOffset) l = n(1e3 * h2.startTimeOffset);
  else if (null != h2.randomizeStartTime) {
    const r = 82749913, n3 = null != h2.randomizeStartSeed ? h2.randomizeStartSeed : r, o2 = e2(c2, n3);
    l = n(o2 * a(t));
  } else l = n(0);
  return new u(t, l, d2, f);
}
function c(e3, r, i, a2) {
  const n3 = null == r.playAnimation || r.playAnimation, o2 = h(e3, r, i, a2);
  let s2, m2 = o2.timeToFrame;
  function u2() {
    s2 = n3 ? setTimeout(() => {
      o2.nextFrame(), m2 = o2.timeToFrame, u2();
    }, m2) : void 0;
  }
  return u2(), e(() => n3 && clearTimeout(s2));
}

export {
  c
};
//# sourceMappingURL=chunk-FUBPTTYA.js.map
