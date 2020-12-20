"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalyzer = void 0;
var MatchResult_1 = require("../MatchResult");
var WinsAnalyzer = /** @class */ (function () {
    function WinsAnalyzer(team) {
        this.team = team;
    }
    WinsAnalyzer.prototype.run = function (matches) {
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var row = matches_1[_i];
            if (row[1] === this.team && row[5] === MatchResult_1.MatchResult.HOME_WIN) {
                wins++;
            }
            else if (row[2] === this.team && row[5] === MatchResult_1.MatchResult.AWAY_WIN) {
                wins++;
            }
        }
        return "Team \"" + this.team + "\" won " + wins + " games";
    };
    return WinsAnalyzer;
}());
exports.WinsAnalyzer = WinsAnalyzer;
