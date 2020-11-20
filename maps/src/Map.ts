interface Mappable {
    location: {
        latitude: number;
        longitude: number;
    };
};

export class Map {
    private googleMap: google.maps.Map;

    constructor(elementId: string) {
        this.googleMap = new google.maps.Map(document.getElementById(elementId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            }
        });
    }

    addMarker(entity: Mappable) {
        new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: entity.location.latitude,
                lng: entity.location.longitude,
            },
        });
    }
}
