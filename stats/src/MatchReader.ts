import {MatchResult} from './MatchResult';

import {dateStringToDate} from './utils';
import {Reader} from './interfaces';
import {MatchData} from './types';


export class MatchReader {
    public matches: MatchData[] = [];

    constructor(
        public reader: Reader
    ) {}

    load(): void {
        this.reader.read();

        this.matches = this.reader.data.map((row) => {
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult,
                row[6]
            ];
        })
    }
}
