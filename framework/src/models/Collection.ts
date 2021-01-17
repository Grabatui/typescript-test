import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

export class Collection<T, P> {
    public models: T[] = [];
    public events: Eventing = new Eventing();

    constructor(
        public rootUrl: string,
        public deserialize: (json: P) => T
    ) {}

    public get on() {
        return this.events.on.bind(this);
    }

    public get trigger() {
        return this.events.trigger.bind(this);
    }

    public fetch(): void {
        axios.get(this.rootUrl)
            .then((response: AxiosResponse) => {
                response.data.forEach((rowData: P) => this.parseUser(rowData));

                this.trigger(`parsed`);
            });
    }

    private parseUser(rowData: P): void {
        const model = this.deserialize(rowData);

        this.models.push(model);
    }
}
