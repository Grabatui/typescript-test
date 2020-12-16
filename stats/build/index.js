"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var reader = new MatchReader_1.MatchReader("football.csv");
reader.read();
var wins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var row = _a[_i];
    if (row[1] === 'Man United' && row[5] === MatchResult_1.MatchResult.HOME_WIN) {
        wins++;
    }
    else if (row[2] === 'Man United' && row[5] === MatchResult_1.MatchResult.AWAY_WIN) {
        wins++;
    }
}
console.log(wins);
