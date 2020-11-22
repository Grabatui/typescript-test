import {Mappable} from './interfaces';

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

    addMarker(entity: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: entity.location.latitude,
                lng: entity.location.longitude,
            },
        });

        const infoWindow = new google.maps.InfoWindow({
            content: entity.getMarkerContent(),
        });

        marker.addListener(`click`, () => {
            infoWindow.open(this.googleMap, marker);
        });
    }
}
