import {User} from './models/User';


const user = new User({
    id: 2,
    name: `Test Test 2`,
    age: 30,
});

user.save();

console.log(user);
