"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var state = {};
var canvas = _1.default.Canvas.findById('canvas');
var game = new _1.default.Game(canvas, update, render, getCamera, state);
function render(_state) {
    return [
        _1.default.Circle({ radius: 10, center: { x: 0, y: 0 }, color: '#f00' }),
        _1.default.Rect({ p: { x: 20, y: 0 }, w: 10, h: 10, color: '#0f0' }),
        _1.default.Polygon({ points: [{ x: -20, y: -20 }, { x: -20, y: -40 }, { x: 20, y: -40 }, { x: 20, y: -20 }], color: '#00f' }),
        // Off-screen poly
        _1.default.Polygon({ points: [{ x: -100, y: 0 }, { x: -51, y: 0 }, { x: -51, y: -40 }], color: '#00f' }),
        _1.default.Text({ p: { x: 0, y: 580 }, message: 'Hello World!' }),
        _1.default.Line({ a: { x: 0, y: 0 }, b: { x: 20, y: 30 }, w: 0.5, color: '#0ff' })
    ];
}
function update(_state) {
    var n = 0;
    for (var i = 0; i < 40000000; i++) {
        n += i;
    }
}
function getCamera(_state) {
    return {
        center: { x: 0, y: 0 },
        width: 100
    };
}
setInterval(function () {
    console.log(game.getReport());
}, 5000);
document.addEventListener('click', function (e) {
    var frame = _1.default.Canvas.getFrame(canvas);
    var camera = getCamera(state);
    var pWindow = { x: e.clientX, y: e.clientY };
    var pWorld = _1.default.Coord.window2world(pWindow, frame, camera);
    console.log('pWindow', pWindow);
    console.log('pWorld', pWorld);
});
