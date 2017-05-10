"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ensure(el) {
    if (!el) {
        throw new Error('Missing canvas element');
    }
    return el;
}
function findById(id) {
    return ensure(document.getElementById(id));
}
function getContext(el) {
    return el.getContext('2d');
}
function getFrame(el) {
    return {
        height: el.height,
        width: el.width,
        offset: { x: el.offsetLeft, y: el.offsetTop }
    };
}
exports.default = { ensure: ensure, findById: findById, getContext: getContext, getFrame: getFrame };
