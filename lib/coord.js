"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vector2_1 = require("@mcrowe/vector2");
function window2world(p, frame, camera) {
    var pFrame = window2frame(p, frame);
    return frame2world(pFrame, frame, camera);
}
function window2frame(p, frame) {
    return vector2_1.default.sub(p, frame.offset);
}
function frame2world(p, frame, camera) {
    var s = camera.width / frame.width;
    var cameraHeight = camera.width * frame.height / frame.width;
    var x = p.x * s + camera.center.x - camera.width / 2;
    var y = p.y * s + camera.center.y - cameraHeight / 2;
    return { x: x, y: y };
}
function world2frame(p, frame, camera) {
    var s = frame.width / camera.width;
    var x = (p.x - camera.center.x) * s + frame.width / 2;
    var y = (p.y - camera.center.y) * s + frame.height / 2;
    return { x: x, y: y };
}
exports.default = { window2world: window2world, window2frame: window2frame, frame2world: frame2world, world2frame: world2frame };
