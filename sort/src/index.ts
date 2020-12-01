import {NumbersCollection} from './NumbersCollection';
import {CharactersCollection} from './CharactersCollection';
import {LinkedList} from './LinkedList';
import {LinkedListCollection} from './LinkedListCollection';


const numbers = new NumbersCollection([10, 3, -5, 0]);
numbers.sort();
console.log(numbers.data);


const characters = new CharactersCollection('pLaXIKqd');
characters.sort();
console.log(characters.data);


const list = new LinkedList();
list.add(500);
list.add(-10);
list.add(-3);
list.add(4);

const listCollection = new LinkedListCollection(list);
listCollection.sort();
listCollection.data.print();
