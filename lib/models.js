"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rect = (props) => (context) => {
    const { ctx, frame, camera } = context;
    const p = worldToScreen(props.p, camera, frame);
    const z = frame.width / camera.width;
    const w = props.w * z;
    const h = props.h * z;
    ctx.beginPath();
    ctx.fillStyle = props.color || 'black';
    ctx.rect(p.x, p.y, w, h);
    ctx.fill();
};
const Polygon = (props) => (context) => {
    const { ctx, frame, camera } = context;
    const z = frame.width / camera.width;
    const ps = props.points.map(p => worldToScreen(p, camera, frame));
    ctx.fillStyle = props.color || 'black';
    ctx.strokeStyle = props.color || 'black';
    ctx.beginPath();
    ctx.moveTo(ps[0].x, ps[0].y);
    for (let i = 1; i < ps.length; i++) {
        const p = ps[i];
        ctx.lineTo(p.x, p.y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
};
const Circle = (props) => (context) => {
    const { ctx, frame, camera } = context;
    const c = worldToScreen(props.center, camera, frame);
    const z = frame.width / camera.width;
    const r = props.radius * z;
    ctx.beginPath();
    ctx.fillStyle = props.color || 'black';
    ctx.arc(c.x, c.y, r, 0, 2 * Math.PI);
    ctx.fill();
};
const Text = (props) => (context) => {
    const { ctx } = context;
    var opts = Object.assign({}, { size: 50, color: 'black' }, props);
    ctx.font = opts.size + 'px "Comic Sans MS"';
    ctx.fillStyle = opts.color;
    ctx.fillText(opts.message, opts.p.x, opts.p.y);
};
exports.default = { Rect, Polygon, Circle, Text };
function worldToScreen(p, camera, frame) {
    const z = frame.width / camera.width;
    const x = (p.x - camera.center.x) * z + frame.width / 2;
    const y = (p.y - camera.center.y) * z + frame.width / 2;
    return { x, y };
}
