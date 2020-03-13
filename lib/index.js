"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./models"));
var game_1 = require("./game");
exports.Game = game_1.default;
exports.Canvas = require("./canvas");
exports.Coord = require("./coord");
