"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        var leftIndexLetter = this.data[leftIndex].toLowerCase();
        var rightIndexLetter = this.data[rightIndex].toLowerCase();
        return leftIndexLetter > rightIndexLetter;
    };
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var arrayData = this.data.split("");
        var temporaryElement = arrayData[leftIndex];
        arrayData[leftIndex] = arrayData[rightIndex];
        arrayData[rightIndex] = temporaryElement;
        this.data = arrayData.join("");
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
