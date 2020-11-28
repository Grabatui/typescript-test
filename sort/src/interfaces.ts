interface Sortable {
    length: number;

    compare(leftIndex: number, rightndex: number): boolean;
    swap(leftIndex: number, rightIndex: number): void;
}
