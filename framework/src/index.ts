import { User } from './models/User';
import { UserEdit } from './views/UserEdit';

const user = User.make({
    name: 'Name',
    age: 20
});

const element = document.getElementById(`root`);

if (element) {
    const userEdit = new UserEdit(element, user);
    userEdit.render();
} else {
    throw new Error(`Root element not found`);
}
