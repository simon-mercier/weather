import ICoordinates from "./coordinates";

export default interface ILocationInfo {
    coordinates: ICoordinates,
    
    countryName?: string,
    countryCode?: string,

    principalSubdivision?: string,
    principalSubdivisionCode?: string,

    city?: string,

    timezone?: string,
    language?: string,
}
