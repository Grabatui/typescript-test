import { WinsAnalyzer } from './Analyzers/WinsAnalyzer';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { HtmlReport } from './ReportTargets/HtmlReport';
import { Summary } from './Summary';


const csvFileReader = new CsvFileReader(`football.csv`);

const reader = new MatchReader(csvFileReader);
reader.load();

const analyzer = new Summary(
    new WinsAnalyzer(`Man United`),
    new HtmlReport()
);

analyzer.buildAndPrintReport(reader.matches);
