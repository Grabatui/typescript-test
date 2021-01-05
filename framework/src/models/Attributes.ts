export class Attributes<T> {
    constructor(
        private data: T
    ) {}

    public get<K extends keyof T>(key: K): T[K] {
        return this.data[key];
    }

    public getAll(): T {
        return this.data;
    }

    public set(updateData: T): void {
        Object.assign(this.data, updateData);
    }
}
