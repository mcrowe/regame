"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("./models");
var game_1 = require("./game");
var canvas_1 = require("./canvas");
var coord_1 = require("./coord");
exports.default = __assign({ Canvas: canvas_1.default,
    Coord: coord_1.default,
    Game: game_1.default }, models_1.default);
