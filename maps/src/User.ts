import faker from 'faker';

export class User {
    public name: string;
    public location: {
        latitude: number,
        longitude: number,
    };

    constructor() {
        this.name = faker.name.firstName() + ` ` + faker.name.lastName();

        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude()),
        };
    }

    public getMarkerContent(): string {
        return `<strong>` + this.name + `</strong>`;
    }
}
