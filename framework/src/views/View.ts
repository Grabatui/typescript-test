import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K> {
    constructor(
        public parent: HTMLElement,
        public model: T
    ) {
        this.setModelEvents();
    }

    public render(): void {
        this.parent.innerHTML = ``;

        const templateElement = document.createElement(`template`);

        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content);

        this.parent.append(templateElement.content);
    }

    protected abstract eventsMap(): { [key: string]: () => void };

    protected abstract template(): string;

    private setModelEvents(): void {
        this.model.on(`change`, this.render.bind(this));
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
