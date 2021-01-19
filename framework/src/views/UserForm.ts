import { User } from '../models/User';

export class UserForm {
    constructor(
        public parent: Element,
        public model: User
    ) {}

    public eventsMap(): { [key: string]: () => void } {
        return {
            'click:button': this.onButtonClick,
        };
    }

    public onButtonClick(): void {
        console.log('Button clicked');
    }

    public render(): void {
        const templateElement = document.createElement(`template`);

        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content);

        this.parent.append(templateElement.content);
    }

    private template(): string {
        return `
        <div>
            <h1>User Form</h1>

            <div><strong>User name:</strong> ${this.model.get(`name`)}</div>
            <div><strong>User age:</strong> ${this.model.get(`age`)}</div>

            <input />

            <button>Click Me</button>
        </div>
        `;
    }

    private bindEvents(fragment: DocumentFragment): void {
        const events = this.eventsMap();

        for (const eventKey in events) {
            const [eventName, selector] = eventKey.split(`:`);

            fragment.querySelectorAll(selector).forEach((element) => {
                element.addEventListener(eventName, events[eventKey]);
            });
        }
    }
}
