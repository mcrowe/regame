"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util = require("./util");
var Canvas = require("./canvas");
var Game = /** @class */ (function () {
    function Game(el, update, render, getCamera, initialState) {
        this.update = update;
        this.render = render;
        this.getCamera = getCamera;
        this.canvas = Canvas.ensure(el);
        this.ctx = Canvas.getContext(this.canvas);
        this.state = initialState;
        this.lastFrameAt = Date.now();
        this.resetDiagnostics();
        this.loop();
    }
    Game.prototype.loop = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.loop(); });
        this.diagnostics.numFrames += 1;
        var now = Date.now();
        var dt = now - this.lastFrameAt;
        this.lastFrameAt = now;
        this.doUpdate(dt);
        var scene = this.doRender();
        var camera = this.getCamera(this.state);
        this.doDraw(scene, camera);
    };
    Game.prototype.doUpdate = function (dt) {
        var t0 = Date.now();
        this.update(this.state, dt);
        this.diagnostics.totalUpdateTime += Date.now() - t0;
    };
    Game.prototype.doRender = function () {
        var t0 = Date.now();
        var scene = this.render(this.state);
        this.diagnostics.totalRenderTime += Date.now() - t0;
        return scene;
    };
    Game.prototype.doDraw = function (scene, camera) {
        resize(this.canvas);
        var t0 = Date.now();
        var frame = Canvas.getFrame(this.canvas);
        clear(this.ctx, frame);
        for (var _i = 0, _a = getSceneModels(scene); _i < _a.length; _i++) {
            var model = _a[_i];
            model({ ctx: this.ctx, frame: frame, camera: camera });
        }
        this.diagnostics.totalDrawTime += Date.now() - t0;
    };
    Game.prototype.getReport = function () {
        var _a = this.diagnostics, lastReportedAt = _a.lastReportedAt, numFrames = _a.numFrames, totalDrawTime = _a.totalDrawTime, totalRenderTime = _a.totalRenderTime, totalUpdateTime = _a.totalUpdateTime;
        var dt = Date.now() - lastReportedAt;
        var report = {
            fps: (numFrames * 1000) / dt,
            draw: totalDrawTime / numFrames,
            render: totalRenderTime / numFrames,
            update: totalUpdateTime / numFrames
        };
        this.resetDiagnostics();
        return report;
    };
    Game.prototype.resetDiagnostics = function () {
        this.diagnostics = {
            lastReportedAt: Date.now(),
            numFrames: 0,
            totalUpdateTime: 0,
            totalRenderTime: 0,
            totalDrawTime: 0
        };
    };
    return Game;
}());
exports.default = Game;
function draw(canvas, ctx, scene, camera) {
    var frame = Canvas.getFrame(canvas);
    clear(ctx, frame);
    for (var _i = 0, _a = getSceneModels(scene); _i < _a.length; _i++) {
        var model = _a[_i];
        model({ ctx: ctx, frame: frame, camera: camera });
    }
}
function clear(ctx, frame) {
    ctx.clearRect(0, 0, frame.width, frame.height);
    ctx.fillStyle = '#000000';
}
function getSceneModels(scene) {
    return Util.flatten(scene);
}
function resize(canvas) {
    var dp = window.devicePixelRatio;
    var displayWidth = Math.floor(canvas.clientWidth * dp);
    var displayHeight = Math.floor(canvas.clientHeight * dp);
    if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
    }
}
