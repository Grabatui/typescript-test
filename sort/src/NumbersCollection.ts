import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
    constructor(
        public data: number[]
    ) {
        super();
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightndex: number): boolean {
        return this.data[leftIndex] > this.data[rightndex];
    }

    swap(leftIndex: number, rightIndex: number): void {
        const temporaryElement = this.data[leftIndex];

        this.data[leftIndex] = this.data[rightIndex];

        this.data[rightIndex] = temporaryElement;
    }
}
