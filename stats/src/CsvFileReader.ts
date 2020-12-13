import fs from 'fs';


export class CsvFileReader {
    public data: string[][] = [];

    constructor(
        public filename: string
    ) {}

    read(): void {
        const matches = fs.readFileSync(this.filename, {
            encoding: 'utf-8',
        });

        this.data = matches
            .split(`\n`)
            .map((row: string): string[] => {
                return row.split(`,`);
            });
    }
}
