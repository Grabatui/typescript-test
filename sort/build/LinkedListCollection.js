"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListCollection = void 0;
var Sorter_1 = require("./Sorter");
var LinkedListCollection = /** @class */ (function (_super) {
    __extends(LinkedListCollection, _super);
    function LinkedListCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
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
}(Sorter_1.Sorter));
exports.LinkedListCollection = LinkedListCollection;
