import ICoordinates from "./interfaces/coordinates";
import ILocationInfo from "./interfaces/locationInfo";

export const DEFAULT_LOCATION = {
    coordinates: {
        longitude: -73.561668,
        latitude: 45.508888,
    } as ICoordinates,

    city: "Montreal",
} as ILocationInfo;
