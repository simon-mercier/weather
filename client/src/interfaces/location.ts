import ICoordinates from "./coordinates";

export default interface ILocation {
    locationFormatted: string;
    location: [string, string, string];
    placeId: string;
    coordinates: ICoordinates;
}
