"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FrameCounter = (function () {
    function FrameCounter() {
        this.frames = 0;
        this.t0 = Date.now();
    }
    FrameCounter.prototype.tick = function () {
        this.frames += 1;
    };
    FrameCounter.prototype.getRate = function () {
        var t = Date.now();
        var dt = t - this.t0;
        var rate = 1000 * this.frames / dt;
        this.t0 = t;
        this.frames = 0;
        return rate;
    };
    return FrameCounter;
}());
exports.default = FrameCounter;
