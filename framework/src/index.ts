import {User} from './models/User';


const user = new User({
    id: 2,
});

console.log(`before`);

user.fetch().then(() => {
    console.log(user);
});

console.log(`after`);
