import Coordinates from "./coordinates";

export default interface LocationInfo {
    coordinates: Coordinates,
    
    countryName?: string,
    countryCode?: string,

    principalSubdivision?: string,
    principalSubdivisionCode?: string,

    city?: string,

    timezone?: string,
    language?: string,
}
