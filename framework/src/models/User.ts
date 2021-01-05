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

    get on() {
        return this.events.on.bind(this.events);
    }

    get trigger() {
        return this.events.trigger.bind(this.events);
    }

    get get() {
        return this.attributes.get.bind(this.attributes);
    }

    set(update: UserProperties): void {
        this.attributes.set(update);

        this.trigger(`change`);
    }
}
