"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const canvas_1 = require("./canvas");
const frame_counter_1 = require("./frame-counter");
function make(el, update, render, getCamera, initialState) {
    const canvas = canvas_1.default.ensure(el);
    const ctx = canvas_1.default.getContext(canvas);
    const state = initialState;
    let t = Date.now();
    const frameCounter = new frame_counter_1.default();
    function loop() {
        frameCounter.tick();
        const now = Date.now();
        const dt = now - t;
        t = now;
        update(state, dt);
        const scene = render(state);
        const camera = getCamera(state);
        draw(canvas, ctx, scene, camera);
        requestAnimationFrame(loop);
    }
    loop();
    return {
        getFPS() {
            return frameCounter.getRate();
        }
    };
}
exports.default = { make };
function draw(canvas, ctx, scene, camera) {
    const frame = canvas_1.default.getFrame(canvas);
    clear(ctx, frame);
    for (let model of getSceneModels(scene)) {
        model({ ctx, frame, camera });
    }
}
function clear(ctx, frame) {
    ctx.clearRect(0, 0, frame.width, frame.height);
    ctx.fillStyle = '#000000';
}
function getSceneModels(scene) {
    return util_1.default.flatten(scene);
}
