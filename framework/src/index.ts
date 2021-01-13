import {User} from './models/User';


const user = User.make({
    id: 2,
});

console.log(`before`);

user.fetch().then(() => {
    console.log(user);
});

console.log(`after`);
