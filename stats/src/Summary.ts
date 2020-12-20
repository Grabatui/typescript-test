import {Analyzer, OutputTarget} from "./interfaces";
import { MatchData } from "./types";


export class Summary {
    constructor(
        public analyzer: Analyzer,
        public outputTarget: OutputTarget
    ) {}

    public buildAndPrintReport(matches: MatchData[]): void {
        const result = this.analyzer.run(matches);

        this.outputTarget.print(result);
    }
}
