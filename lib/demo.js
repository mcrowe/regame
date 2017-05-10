"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require("./");
var state = {};
var canvas = _1.default.Canvas.findById('canvas');
_1.default.makeGame(canvas, update, render, getCamera, state);
function render(_state) {
    return [
        _1.default.Circle({ radius: 10, center: { x: 0, y: 0 }, color: '#f00' }),
        _1.default.Rect({ p: { x: 20, y: 0 }, w: 10, h: 10, color: '#0f0' }),
        _1.default.Polygon({ points: [{ x: -20, y: -20 }, { x: -20, y: -40 }, { x: 20, y: -40 }, { x: 20, y: -20 }], color: '#00f' }),
        // Off-screen poly
        _1.default.Polygon({ points: [{ x: -100, y: 0 }, { x: -51, y: 0 }, { x: -51, y: -40 }], color: '#00f' }),
        _1.default.Text({ p: { x: 0, y: 580 }, message: 'Hello World!' })
    ];
}
function update(_state) {
}
function getCamera(_state) {
    return {
        center: { x: 0, y: 0 },
        width: 100
    };
}
