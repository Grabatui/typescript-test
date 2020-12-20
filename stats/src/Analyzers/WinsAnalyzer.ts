import { Analyzer } from "../interfaces";
import { MatchResult } from "../MatchResult";
import { MatchData } from "../types";


export class WinsAnalyzer implements Analyzer {
    constructor(
        private team: string
    ) {}

    run(matches: MatchData[]): string {
        let wins = 0;
        for (let row of matches) {
            if (row[1] === this.team && row[5] === MatchResult.HOME_WIN) {
                wins++;
            } else if (row[2] === this.team && row[5] === MatchResult.AWAY_WIN) {
                wins++;
            }
        }

        return `Team "${this.team}" won ${wins} games`;
    }
}
