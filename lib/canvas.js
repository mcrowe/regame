"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ensure(el) {
    if (!el) {
        throw new Error('Missing canvas element');
    }
    return el;
}
exports.ensure = ensure;
function findById(id) {
    return ensure(document.getElementById(id));
}
exports.findById = findById;
function getContext(el) {
    return el.getContext('2d');
}
exports.getContext = getContext;
function getFrame(el) {
    return {
        height: el.height,
        width: el.width,
        offset: { x: el.offsetLeft, y: el.offsetTop }
    };
}
exports.getFrame = getFrame;
