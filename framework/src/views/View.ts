import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K> {
    protected regions: { [key: string]: Element } = {};

    constructor(
        public parent: Element,
        public model: T
    ) {
        this.setModelEvents();
    }

    public render(): void {
        this.parent.innerHTML = ``;

        const templateElement = document.createElement(`template`);

        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content);
        this.mapRegions(templateElement.content);

        this.onRender();

        this.parent.append(templateElement.content);
    }

    protected abstract template(): string;

    protected getRegions(): { [key: string]: string } {
        return {};
    }

    protected getEvents(): { [key: string]: () => void } {
        return {};
    }

    protected onRender(): void {

    }

    private mapRegions(fragment: DocumentFragment): void {
        const regions = this.getRegions();

        for (const regionKey in regions) {
            const selector = regions[regionKey];

            const element = selector ? fragment.querySelector(selector) : null;

            if (element) {
                this.regions[regionKey] = element;
            }
        }
    }

    private setModelEvents(): void {
        this.model.on(`change`, this.render.bind(this));
    }

    private bindEvents(fragment: DocumentFragment): void {
        const events = this.getEvents();

        for (const eventKey in events) {
            const [eventName, selector] = eventKey.split(`:`);

            fragment.querySelectorAll(selector).forEach((element) => {
                element.addEventListener(eventName, events[eventKey]);
            });
        }
    }
}
