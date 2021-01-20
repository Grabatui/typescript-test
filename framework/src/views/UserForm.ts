import { User } from '../models/User';

export class UserForm {
    constructor(
        public parent: HTMLElement,
        public model: User
    ) {
        this.setModelEvents(model);
    }

    public eventsMap(): { [key: string]: () => void } {
        return {
            'click:.js-set_name': this.setName.bind(this),
            'click:.js-set_age': this.setRandomAge.bind(this),
        };
    }

    public render(): void {
        this.parent.innerHTML = ``;

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

            <input class="js-name_input" />

            <button class="js-set_name">Change name</button>
            <button class="js-set_age">Set random age</button>
        </div>
        `;
    }

    private setModelEvents(model: User): void {
        model.on(`change`, this.render.bind(this));
    }

    private setRandomAge(): void {
        this.model.set({
            age: Math.round(Math.random() * 100),
        });
    }

    private setName(): void {
        const nameInput = this.parent.querySelector(`.js-name_input`);

        if ( ! nameInput) {
            return;
        }

        this.model.set({
            name: nameInput.value,
        });
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
