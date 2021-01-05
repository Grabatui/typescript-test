import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { UserProperties } from '../interfaces/UserProperties';


export class User {
    public events: Eventing = new Eventing();

    public sync: Sync<UserProperties> = new Sync<UserProperties>(`http://localhost:3000`);

    public attributes: Attributes<UserProperties>;

    constructor(data: UserProperties) {
        this.attributes = new Attributes<UserProperties>(data);
    }
}
