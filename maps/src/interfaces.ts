export interface Mappable {
    location: {
        latitude: number;
        longitude: number;
    };
    getMarkerContent(): string;
};
