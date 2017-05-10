"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("./models");
var game_1 = require("./game");
var canvas_1 = require("./canvas");
var coord_1 = require("./coord");
exports.default = {
    Canvas: canvas_1.default,
    Coord: coord_1.default,
    makeGame: game_1.default.make,
    Circle: models_1.default.Circle,
    Text: models_1.default.Text,
    Rect: models_1.default.Rect,
    Polygon: models_1.default.Polygon
};
