import { UserProperties } from "../interfaces/UserProperties";
import { User } from "../models/User";
import { UserForm } from "./UserForm";
import { UserShow } from "./UserShow";
import { View } from "./View";

export class UserEdit extends View<User, UserProperties> {
    protected getRegions(): { [key: string]: string } {
        return {
            userView: '.js-user_view',
            userForm: '.js-user_form',
        };
    }

    protected template(): string {
        return `
            <div>
                <div class="js-user_view"></div>
                <div class="js-user_form"></div>
            </div>
        `;
    }

    protected onRender(): void {
        const userShow = new UserShow(this.regions.userView, this.model);
        const userEdit = new UserForm(this.regions.userForm, this.model);

        userShow.render();
        userEdit.render();
    }
}
