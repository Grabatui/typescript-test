import {CsvFileReader} from './CsvFileReader';
import {MatchResult} from './MatchResult';

const reader = new CsvFileReader(`football.csv`);
reader.read();

let wins = 0;
for (let row of reader.data) {
    if (row[1] === 'Man United' && row[5] === MatchResult.HOME_WIN) {
        wins++;
    } else if (row[2] === 'Man United' && row[5] === MatchResult.AWAY_WIN) {
        wins++;
    }
}

console.log(wins);
