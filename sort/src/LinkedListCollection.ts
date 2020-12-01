import { LinkedList } from "./LinkedList";

export class LinkedListCollection implements Sortable {
    constructor(
        public data: LinkedList
    ) {}

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
