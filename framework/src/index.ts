import { User } from "./models/User";

const users = User.makeCollection();

users.on(`parsed`, function () {
    console.log(this);
})

users.fetch();

console.log(users.models);
