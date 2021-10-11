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
    coordinates: DEFAULT_LOCATION_COORDINATES,
};

export const CAROUSEL_RESPONSIVE = {
    desktop: {
        breakpoint: { max: 3000, min: 1760 },
        items: 14,
        slidesToSlide: 3, // optional, default to 1.
    },
    smalldesktop: {
        breakpoint: { max: 1760, min: 1500 },
        items: 12,
        slidesToSlide: 2, // optional, default to 1.
    },
    bigtablet: {
        breakpoint: { max: 1500, min: 1250 },
        items: 10,
        slidesToSlide: 2, // optional, default to 1.
    },
    mediumtablet: {
        breakpoint: { max: 1250, min: 1024 },
        items: 8,
        slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 6,
    },
};

export const OFFSET_TORONTO = 14400;
export const MILLISECONDS_IN_SECONDS = 1000;
export const TIME_IN_ONE_HOUR_MS = 3600000;
export const TIME_INTERVAL_SUNRISE_SUNSET_HOURS = 0.25;
