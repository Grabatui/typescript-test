import { WinsAnalyzer } from './Analyzers/WinsAnalyzer';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './ReportTargets/ConsoleReport';
import { Summary } from './Summary';


const csvFileReader = new CsvFileReader(`football.csv`);

const reader = new MatchReader(csvFileReader);
reader.load();

const analyzer = new Summary(
    new WinsAnalyzer(`Man United`),
    new ConsoleReport()
);

analyzer.buildAndPrintReport(reader.matches);
