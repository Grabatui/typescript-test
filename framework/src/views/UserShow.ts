import { UserProperties } from "../interfaces/UserProperties";
import { User } from "../models/User";
import { View } from "./View";

export class UserShow extends View<User, UserProperties> {
    protected template(): string {
        return `
            <div>
                <h1>User Detail</h1>
                <div><strong>User Name</strong>: ${this.model.get(`name`)}</div>
                <div><strong>User Age</strong>: ${this.model.get(`age`)}</div>
            </div>
        `;
    }
}
