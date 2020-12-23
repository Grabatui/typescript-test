interface UserProperties {
    name?: string,
    age?: number,
}

export class User {
    constructor(
        private data: UserProperties
    ) {}

    public get(propertyName: string): number|string {
        return this.data[propertyName];
    }

    public set(updateData: UserProperties): void {
        Object.assign(this.data, updateData);
    }
}
