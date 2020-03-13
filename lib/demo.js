"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Regame = require("./");
var state = {};
var canvas = Regame.Canvas.findById('canvas');
var game = new Regame.Game(canvas, update, render, getCamera, state);
function render(_state) {
    return [
        Regame.Circle({ radius: 10, center: { x: 0, y: 0 }, color: '#f00' }),
        Regame.Rect({ p: { x: 20, y: 0 }, w: 10, h: 10, color: '#0f0' }),
        Regame.Polygon({
            points: [
                { x: -20, y: -20 },
                { x: -20, y: -40 },
                { x: 20, y: -40 },
                { x: 20, y: -20 }
            ],
            color: '#00f'
        }),
        // Off-screen poly
        Regame.Polygon({
            points: [
                { x: -100, y: 0 },
                { x: -51, y: 0 },
                { x: -51, y: -40 }
            ],
            color: '#00f'
        }),
        Regame.Text({ p: { x: 0, y: 580 }, message: 'Hello World!' }),
        Regame.Line({
            a: { x: 0, y: 0 },
            b: { x: 20, y: 30 },
            w: 0.5,
            color: '#0ff'
        })
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
    var frame = Regame.Canvas.getFrame(canvas);
    var camera = getCamera(state);
    var pWindow = { x: e.clientX, y: e.clientY };
    var pWorld = Regame.Coord.window2world(pWindow, frame, camera);
    console.log('pWindow', pWindow);
    console.log('pWorld', pWorld);
});
