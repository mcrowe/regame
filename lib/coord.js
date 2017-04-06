"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vector2_1 = require("@mcrowe/vector2");
function window2world(p, frame, camera) {
    const pFrame = window2frame(p, frame);
    return frame2world(pFrame, frame, camera);
}
function window2frame(p, frame) {
    return vector2_1.default.sub(p, frame.offset);
}
function frame2world(p, frame, camera) {
    const s = camera.width / frame.width;
    const cameraHeight = camera.width * frame.height / frame.width;
    const x = p.x * s + camera.center.x - camera.width / 2;
    const y = p.y * s + camera.center.y - cameraHeight / 2;
    return { x, y };
}
function world2frame(p, frame, camera) {
    const s = frame.width / camera.width;
    const x = (p.x - camera.center.x) * s + frame.width / 2;
    const y = (p.y - camera.center.y) * s + frame.height / 2;
    return { x, y };
}
exports.default = { window2world, window2frame, frame2world, world2frame };
