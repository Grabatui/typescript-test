interface UserProperties {
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
}
