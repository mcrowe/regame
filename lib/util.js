"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flatten(xs) {
    const res = [];
    for (let x of xs) {
        if (Array.isArray(x)) {
            for (let e of flatten(x)) {
                res.push(e);
            }
        }
        else {
            res.push(x);
        }
    }
    return res;
}
exports.default = { flatten };
