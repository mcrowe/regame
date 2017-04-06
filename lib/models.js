"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rect = (props) => (context) => {
    const { ctx, frame, camera } = context;
    const z = frame.width / camera.width;
    const sx = (props.p.x - camera.center.x) * z + frame.width / 2;
    const sy = (props.p.y - camera.center.y) * z + frame.width / 2;
    const sw = props.w * z;
    const sh = props.h * z;
    ctx.beginPath();
    ctx.fillStyle = props.color || 'black';
    ctx.rect(sx, sy, sw, sh);
    ctx.fill();
};
const Circle = (props) => (context) => {
    const { ctx, frame, camera } = context;
    const z = frame.width / camera.width;
    const sx = (props.center.x - camera.center.x) * z + frame.width / 2;
    const sy = (props.center.y - camera.center.y) * z + frame.width / 2;
    const sr = props.radius * z;
    ctx.beginPath();
    ctx.fillStyle = props.color || 'black';
    ctx.arc(sx, sy, sr, 0, 2 * Math.PI);
    ctx.fill();
};
const Text = (props) => (context) => {
    const { ctx } = context;
    var opts = Object.assign({}, { size: 50, color: 'black' }, props);
    ctx.font = opts.size + 'px "Comic Sans MS"';
    ctx.fillStyle = opts.color;
    ctx.fillText(opts.message, opts.p.x, opts.p.y);
};
exports.default = { Rect, Circle, Text };
