import { MatchData } from "./types";


export interface Reader {
    data: string[][];

    read(): void;
}


export interface Analyzer {
    run(matches: MatchData[]): string;
}


export interface OutputTarget {
    print(report: string): void;
}
