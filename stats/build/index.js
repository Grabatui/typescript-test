"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var reader = new CsvFileReader_1.CsvFileReader("football.csv");
reader.read();
var MatchResult;
(function (MatchResult) {
    MatchResult["HOME_WIN"] = "H";
    MatchResult["AWAY_WIN"] = "A";
    MatchResult["DRAW"] = "D";
})(MatchResult || (MatchResult = {}));
;
var wins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var row = _a[_i];
    if (row[1] === 'Man United' && row[5] === MatchResult.HOME_WIN) {
        wins++;
    }
    else if (row[2] === 'Man United' && row[5] === MatchResult.AWAY_WIN) {
        wins++;
    }
}
console.log(wins);
