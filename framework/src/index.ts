import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.make({
    name: 'Name',
    age: 20
});

const element = document.getElementById(`root`);

const userForm = new UserForm(element, user);
userForm.render();
