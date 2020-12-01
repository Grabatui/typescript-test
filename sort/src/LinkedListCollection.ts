import { LinkedList } from "./LinkedList";
import { Sorter } from "./Sorter";

export class LinkedListCollection extends Sorter {
    constructor(
        public data: LinkedList
    ) {
        super();
    }

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightndex: number): boolean {
        return this.data.compare(leftIndex, rightndex);
    }

    swap(leftIndex: number, rightIndex: number): void {
        this.data.swap(leftIndex, rightIndex);
    }
}
