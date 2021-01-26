import { UserProperties } from '../interfaces/UserProperties';
import { User } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProperties> {
    public getEvents(): { [key: string]: () => void } {
        return {
            'click:.js-set_name': this.setName.bind(this),
            'click:.js-set_age': this.setRandomAge.bind(this),
            'click:.js-save_user': this.saveUser.bind(this),
        };
    }

    protected template(): string {
        return `
        <div>
            <input class="js-name_input" placeholder="${this.model.get(`name`)}" />

            <button class="js-set_name">Change name</button>
            <button class="js-set_age">Set random age</button>
            <button class="js-save_user">Save user</button>
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

    private saveUser(): void {
        this.model.save();
    }
}
