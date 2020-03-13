"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flatten(xs) {
    var res = [];
    for (var _i = 0, xs_1 = xs; _i < xs_1.length; _i++) {
        var x = xs_1[_i];
        if (Array.isArray(x)) {
            for (var _a = 0, _b = flatten(x); _a < _b.length; _a++) {
                var e = _b[_a];
                res.push(e);
            }
        }
        else {
            res.push(x);
        }
    }
    return res;
}
exports.flatten = flatten;
