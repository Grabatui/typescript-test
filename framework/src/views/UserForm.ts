export class UserForm {
    constructor(
        public parent: Element
    ) {}

    public render(): void {
        const templateElement = document.createElement(`template`);

        templateElement.innerHTML = this.template();

        this.parent.append(templateElement.content);
    }

    private template(): string {
        return `
        <div>
            <h1>User Form</h1>

            <input />
        </div>
        `;
    }
}
