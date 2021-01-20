import { UserProperties } from '../interfaces/UserProperties';
import { User } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProperties> {
    public eventsMap(): { [key: string]: () => void } {
        return {
            'click:.js-set_name': this.setName.bind(this),
            'click:.js-set_age': this.setRandomAge.bind(this),
        };
    }

    protected template(): string {
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
}
