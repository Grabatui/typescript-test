"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListCollection = void 0;
var LinkedListCollection = /** @class */ (function () {
    function LinkedListCollection(data) {
        this.data = data;
    }
    Object.defineProperty(LinkedListCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    LinkedListCollection.prototype.compare = function (leftIndex, rightndex) {
        return this.data.compare(leftIndex, rightndex);
    };
    LinkedListCollection.prototype.swap = function (leftIndex, rightIndex) {
        this.data.swap(leftIndex, rightIndex);
    };
    return LinkedListCollection;
}());
exports.LinkedListCollection = LinkedListCollection;
