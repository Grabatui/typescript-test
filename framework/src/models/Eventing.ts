import {User} from './User';


type Callback = () => void;

export class Eventing {
    private events: {[key: string]: Callback[]} = {};

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
            eventCallback.call(this);
        }
    }
}
