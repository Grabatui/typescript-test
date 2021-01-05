import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { UserProperties } from '../interfaces/UserProperties';
import { AxiosResponse } from 'axios';


export class User {
    public events: Eventing = new Eventing();

    public sync: Sync<UserProperties> = new Sync<UserProperties>(`http://localhost:3000/users`);

    public attributes: Attributes<UserProperties>;

    constructor(data: UserProperties) {
        this.attributes = new Attributes<UserProperties>(data);
    }

    public get on() {
        return this.events.on.bind(this.events);
    }

    public get trigger() {
        return this.events.trigger.bind(this.events);
    }

    public get get() {
        return this.attributes.get.bind(this.attributes);
    }

    public get getAll() {
        return this.attributes.getAll.bind(this.attributes);
    }

    public set(update: UserProperties): void {
        this.attributes.set(update);

        this.trigger(`change`);
    }

    public async fetch() {
        const id = this.get(`id`);

        if (typeof id !== `number`) {
            throw new Error(`Cannot fetch without an id`);
        }

        return this.sync
            .fetch(id)
            .then((response: AxiosResponse) => this.set(response.data));
    }

    public save(): void {
        this.sync
            .save(this.getAll())
            .then((response: AxiosResponse) => this.trigger(`save`))
            .catch(() => this.trigger(`error`));
    }
}
