import axios, { AxiosResponse } from 'axios';


interface UserProperties {
    id?: number,
    name?: string,
    age?: number,
}

type Callback = (user: User) => void;

export class User {
    private events: {[key: string]: Callback[]} = {};

    constructor(
        private data: UserProperties
    ) {}

    public get(propertyName: string): number|string {
        return this.data[propertyName];
    }

    public set(updateData: UserProperties): void {
        Object.assign(this.data, updateData);
    }

    public on(eventName: string, callback: Callback): void {
        if ( ! this.events.hasOwnProperty(eventName)) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);
    }

    public trigger(eventName: string): void {
        if ( ! this.events.hasOwnProperty(eventName) || this.events[eventName].length <= 0) {
            return;
        }

        for (const eventCallback of this.events[eventName]) {
            eventCallback.call(this, this);
        }
    }

    public fetch() {
        const id = this.get(`id`);

        axios.get(`http://localhost:3000/users/${id}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data);
            });
    }

    public save() {
        const id = this.get(`id`);

        if (id) {
            axios.put(`http://localhost:3000/users/${id}`, this.data);
        } else {
            axios.post(`http://localhost:3000/users`, this.data);
        }
    }
}
