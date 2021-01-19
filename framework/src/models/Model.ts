import { AxiosResponse } from "axios";
import { Events } from "../interfaces/Events";
import { Sync } from "../interfaces/Sync";
import { Attributes } from "../interfaces/Attributes";

interface HasId {
    id?: number;
}

export class Model<T extends HasId> {
    constructor(
        private attributes: Attributes<T>,
        private sync: Sync<T>,
        private events: Events
    ) {}

    public on = this.events.on.bind(this.events);

    public trigger = this.events.trigger.bind(this.events);

    public get = this.attributes.get.bind(this.attributes);

    public getAll = this.attributes.getAll.bind(this.attributes);

    public set(update: T): void {
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
