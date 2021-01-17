import { UserProperties } from "./interfaces/UserProperties";
import { Collection } from "./models/Collection";
import { User } from "./models/User";

const users = new Collection<User, UserProperties>(
    `http://localhost:3000/users`,
    (userData: UserProperties) => User.make(userData)
);

users.on(`parsed`, function () {
    console.log(this);
})

users.fetch();

console.log(users.models);
