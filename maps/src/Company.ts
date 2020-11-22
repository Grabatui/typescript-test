import {Mappable} from './interfaces';
import faker from 'faker';

export class Company implements Mappable {
    public name: string;
    public catchPhrase: string;
    public location: {
        latitude: number,
        longitude: number,
    };

    constructor() {
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();

        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude()),
        };
    }

    public getMarkerContent(): string {
        return `<strong>` + this.name + `</strong><br>` + this.catchPhrase;
    }
}
