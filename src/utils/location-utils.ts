import ICoordinates from "../interfaces/coordinates";
import ILocationInfo from "../interfaces/locationInfo";


export const coordinates2LocationInfo = async (coordinates: ICoordinates): Promise<ILocationInfo | undefined> => {
    return await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&localityLanguage=en`)
        .then(res => res.json())
        .then(
            (result) => {
                return {
                    coordinates: { longitude: result.longitude, latitude: result.latitude } as ICoordinates,
                    
                    country: result.countryName ?? undefined,
                    countryCode: result.countryCode ?? undefined,

                    principalSubdivision: result.principalSubdivision ?? undefined,
                    principalSubdivisionCode: result.principalSubdivisionCode ?? undefined,

                    city: result.city ?? undefined,

                    language: "en",
                    
                } as ILocationInfo;
            },
            (error) => {
                console.error(error);
                return undefined;
            }
        );
}

const getGeolocation = async () : Promise<ILocationInfo | undefined> => {
    return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
    }).then((coordinates) => {
        let coords = coordinates as GeolocationPosition;
        let latitude = coords.coords.latitude;
        let longitude = coords.coords.longitude;
        return { coordinates: { longitude: longitude, latitude: latitude } as ICoordinates} as ILocationInfo
    }).catch((error) => { console.error(error); return undefined; });
}