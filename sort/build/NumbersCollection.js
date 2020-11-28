"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (leftIndex, rightndex) {
        return this.data[leftIndex] > this.data[rightndex];
    };
    NumbersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var temporaryElement = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = temporaryElement;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
