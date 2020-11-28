import {Sorter} from './Sorter';
import {NumbersCollection} from './NumbersCollection';
import {CharactersCollection} from './CharactersCollection';

const numbers = new NumbersCollection([10, 3, -5, 0]);
const numberSorter = new Sorter(numbers);
numberSorter.sort();
console.log(numbers.data);

const characters = new CharactersCollection('pLaXIKqd');
const charactersSorter = new Sorter(characters);
charactersSorter.sort();
console.log(characters.data);
