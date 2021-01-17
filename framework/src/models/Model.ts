import { AxiosResponse } from "axios";
import { Events } from "../interfaces/Events";
import { Sync } from "../interfaces/Sync";
import { Attributes } from "./Attributes";

interface HasId {
    id?: number;
}

export class Model<T extends HasId> {
    constructor(
        private attributes: Attributes<T>,
        private sync: Sync<T>,
        private events: Events
    ) {}

    public on = this.events.on;

    public trigger = this.events.trigger;

    public get = this.attributes.get;

    public getAll = this.attributes.getAll;

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
