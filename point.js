"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(in_X, in_y) {
        this.x = in_X;
        this.y = in_y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('value cannot be less than 0');
            }
            this.x = value;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (value) {
        if (value < 0) {
            throw new Error('value cannot be less than 0');
        }
        this.x = value;
    };
    return Point;
}());
exports.Point = Point;
