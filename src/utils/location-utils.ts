import Coordinates from "../interfaces/coordinates";
import LocationInfo from "../interfaces/location-info";


export const coordinates2LocationInfo = async (coordinates: Coordinates): Promise<LocationInfo | undefined> => {
    return await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&localityLanguage=en`)
        .then(res => res.json())
        .then(
            (result) => {
                return {
                    coordinates: { longitude: result.longitude, latitude: result.latitude } as Coordinates,
                    
                    country: result.countryName ?? undefined,
                    countryCode: result.countryCode ?? undefined,

                    principalSubdivision: result.principalSubdivision ?? undefined,
                    principalSubdivisionCode: result.principalSubdivisionCode ?? undefined,

                    city: result.city ?? undefined,

                    language: "en",
                    
                } as LocationInfo;
            },
            (error) => {
                console.error(error);
                return undefined;
            }
        );

}