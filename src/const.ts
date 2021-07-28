import ICoordinates from "./interfaces/coordinates";
import ILocation from "./interfaces/location";

export const DEFAULT_LOCATION_COORDINATES = {
    longitude: -73.561668,
    latitude: 45.508888,
} as ICoordinates;

export const DEFAULT_LOCATION_CITY = "Montreal";

export const DEFAULT_LOCATION: ILocation = {
    location: ["Montreal", "QC", "Canada"],
    placeId: "ChIJDbdkHFQayUwR7-8fITgxTmU",
    locationFormatted: "Montreal, QC, Canada",
};
