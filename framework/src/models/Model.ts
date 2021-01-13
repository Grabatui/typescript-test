import { AxiosPromise, AxiosResponse } from "axios";

interface Attributes<T> {
    get<K extends keyof T>(key: K): T[K];

    getAll(): T;

    set(updateData: T): void;
}

interface Sync<T> {
    fetch(id: number): AxiosPromise;

    save(data: T): AxiosPromise;
}

interface Events {
    on(eventName: string, callback: () => void): void;

    trigger(eventName: string): void;
}

interface HasId {
    id?: number;
}

export class Model<T extends HasId> {
    constructor(
        private attributes: Attributes<T>,
        private sync: Sync<T>,
        private events: Events
    ) {}

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
