import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { UserProperties } from '../interfaces/UserProperties';
import { Model } from './Model';
import { Collection } from './Collection';

const rootUrl = `http://localhost:3000/users`;

export class User extends Model<UserProperties> {
    public static make(data: UserProperties): User {
        return new User(
            new Attributes<UserProperties>(data),
            new Sync<UserProperties>(rootUrl),
            new Eventing()
        );
    }

    public static makeCollection(): Collection<User, UserProperties> {
        return new Collection<User, UserProperties>(
            rootUrl,
            (userData: UserProperties) => User.make(userData)
        );
    }
}
