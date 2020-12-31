import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { UserProperties } from '../interfaces/UserProperties';


export class User {
    public events: Eventing = new Eventing();

    public sync: Sync<UserProperties> = new Sync<UserProperties>(`http://localhost:3000`);
}
