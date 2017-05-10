"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rect = function (props) { return function (context) {
    var ctx = context.ctx, frame = context.frame, camera = context.camera;
    if (!isRectVisible(props, camera)) {
        return;
    }
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
    // Don't bother drawing if its out of the scene.
    if (!isRectVisible(polygonBoundingRect(props.points), camera)) {
        return;
    }
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
    // Don't bother drawing if its out of the scene.
    if (!isRectVisible(circleBoundingRect(props), camera)) {
        return;
    }
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
function isRectVisible(rect, camera) {
    var p = rect.p, w = rect.w, h = rect.h;
    return p.x + w >= camera.center.x - camera.width / 2 &&
        p.x <= camera.center.x + camera.width / 2 &&
        p.y + h >= camera.center.y - camera.width / 2 &&
        p.y <= camera.center.y + camera.width / 2;
}
function circleBoundingRect(circle) {
    var center = circle.center, radius = circle.radius;
    return {
        p: {
            x: center.x - radius,
            y: center.y - radius,
        },
        w: radius * 2,
        h: radius * 2
    };
}
function polygonBoundingRect(points) {
    var x1 = Infinity;
    var x2 = -Infinity;
    var y1 = Infinity;
    var y2 = -Infinity;
    for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
        var point = points_1[_i];
        if (point.x < x1) {
            x1 = point.x;
        }
        if (point.x > x2) {
            x2 = point.x;
        }
        if (point.y < y1) {
            y1 = point.y;
        }
        if (point.y > y2) {
            y2 = point.y;
        }
    }
    return {
        p: { x: x1, y: y1 },
        w: x2 - x1,
        h: y2 - y1
    };
}
