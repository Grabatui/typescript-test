import {Eventing} from './Eventing';
import { Sync } from './Sync';


export interface UserProperties {
    id?: number,
    name?: string,
    age?: number,
}

export class User {
    public events: Eventing = new Eventing();

    public sync: Sync<UserProperties> = new Sync<UserProperties>(`http://localhost:3000`);

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
