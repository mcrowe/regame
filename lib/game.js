"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
var canvas_1 = require("./canvas");
var frame_counter_1 = require("./frame-counter");
function make(el, update, render, getCamera, initialState) {
    var canvas = canvas_1.default.ensure(el);
    var ctx = canvas_1.default.getContext(canvas);
    var state = initialState;
    var t = Date.now();
    var frameCounter = new frame_counter_1.default();
    function loop() {
        frameCounter.tick();
        var now = Date.now();
        var dt = now - t;
        t = now;
        update(state, dt);
        var scene = render(state);
        var camera = getCamera(state);
        draw(canvas, ctx, scene, camera);
        requestAnimationFrame(loop);
    }
    loop();
    return {
        getFPS: function () {
            return frameCounter.getRate();
        }
    };
}
exports.default = { make: make };
function draw(canvas, ctx, scene, camera) {
    var frame = canvas_1.default.getFrame(canvas);
    clear(ctx, frame);
    for (var _i = 0, _a = getSceneModels(scene); _i < _a.length; _i++) {
        var model = _a[_i];
        model({ ctx: ctx, frame: frame, camera: camera });
    }
}
function clear(ctx, frame) {
    ctx.clearRect(0, 0, frame.width, frame.height);
    ctx.fillStyle = '#000000';
}
function getSceneModels(scene) {
    return util_1.default.flatten(scene);
}
