import {CsvFileReader} from './CsvFileReader';
import {MatchReader} from './MatchReader';
import {MatchResult} from './MatchResult';

const csvFileReader = new CsvFileReader(`football.csv`);

const reader = new MatchReader(csvFileReader);
reader.load();

let wins = 0;
for (let row of reader.matches) {
    if (row[1] === 'Man United' && row[5] === MatchResult.HOME_WIN) {
        wins++;
    } else if (row[2] === 'Man United' && row[5] === MatchResult.AWAY_WIN) {
        wins++;
    }
}

console.log(wins);
