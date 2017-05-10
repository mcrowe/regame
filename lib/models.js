"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rect = function (props) { return function (context) {
    var ctx = context.ctx, frame = context.frame, camera = context.camera;
    var p = worldToScreen(props.p, camera, frame);
    var z = frame.width / camera.width;
    var w = props.w * z;
    var h = props.h * z;
    ctx.beginPath();
    ctx.fillStyle = props.color || 'black';
    ctx.strokeStyle = props.color || 'black';
    ctx.rect(p.x, p.y, w, h);
    ctx.fill();
    ctx.stroke();
}; };
var Polygon = function (props) { return function (context) {
    var ctx = context.ctx, frame = context.frame, camera = context.camera;
    var z = frame.width / camera.width;
    var ps = props.points.map(function (p) { return worldToScreen(p, camera, frame); });
    ctx.fillStyle = props.color || 'black';
    ctx.strokeStyle = props.color || 'black';
    ctx.beginPath();
    ctx.moveTo(ps[0].x, ps[0].y);
    for (var i = 1; i < ps.length; i++) {
        var p = ps[i];
        ctx.lineTo(p.x, p.y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}; };
var Circle = function (props) { return function (context) {
    var ctx = context.ctx, frame = context.frame, camera = context.camera;
    var c = worldToScreen(props.center, camera, frame);
    var z = frame.width / camera.width;
    var r = props.radius * z;
    ctx.beginPath();
    ctx.fillStyle = props.color || 'black';
    ctx.arc(c.x, c.y, r, 0, 2 * Math.PI);
    ctx.fill();
}; };
var Text = function (props) { return function (context) {
    var ctx = context.ctx;
    var opts = Object.assign({}, { size: 50, color: 'black' }, props);
    ctx.font = opts.size + 'px "Comic Sans MS"';
    ctx.fillStyle = opts.color;
    ctx.fillText(opts.message, opts.p.x, opts.p.y);
}; };
exports.default = { Rect: Rect, Polygon: Polygon, Circle: Circle, Text: Text };
function worldToScreen(p, camera, frame) {
    var z = frame.width / camera.width;
    var x = (p.x - camera.center.x) * z + frame.width / 2;
    var y = (p.y - camera.center.y) * z + frame.width / 2;
    return { x: x, y: y };
}
