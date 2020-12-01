import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
    constructor(
        public data: string
    ) {
        super();
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        const leftIndexLetter = this.data[leftIndex].toLowerCase();
        const rightIndexLetter = this.data[rightIndex].toLowerCase();

        return leftIndexLetter > rightIndexLetter;
    }

    swap(leftIndex: number, rightIndex: number): void {
        let arrayData = this.data.split(``);

        const temporaryElement = arrayData[leftIndex];

        arrayData[leftIndex] = arrayData[rightIndex];

        arrayData[rightIndex] = temporaryElement;

        this.data = arrayData.join(``);
    }
}