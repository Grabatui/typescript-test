import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.make({
    name: 'Name',
    age: 20
});

const element = document.getElementById(`root`);

if (element) {
    const userForm = new UserForm(element, user);
    userForm.render();
} else {
    throw new Error(`Root element not found`);
    
}
