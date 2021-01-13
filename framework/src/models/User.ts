import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { UserProperties } from '../interfaces/UserProperties';
import { Model } from './Model';


export class User extends Model<UserProperties> {
    public static make(data: UserProperties): User {
        return new User(
            new Attributes<UserProperties>(data),
            new Sync<UserProperties>(`http://localhost:3000/users`),
            new Eventing()
        );
    }
}
