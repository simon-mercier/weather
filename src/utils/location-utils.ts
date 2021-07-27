import ILocation from "../interfaces/location";
import ICoordinates from "../interfaces/coordinates";

export const cityPredictions = async (
    input: string
): Promise<[ILocation] | undefined> => {
    return await fetch(
        `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=(cities)&language=en&key=AIzaSyBUO0kTfhpr4poz-VPZICMJ3202GglTlPA`
    )
        .then((res) => res.json())
        .then(
            (result) => {
                return result.predictions.map((prediction: any) => {
                    return {
                        location: prediction.terms.map((term: any) => {
                            return term.value;
                        }),
                        placeId: prediction.place_id,
                        locationFormatted: prediction.description,
                    } as ILocation;
                });
            },
            (error) => {
                console.error(error);
                return undefined;
            }
        );
};

export const placeId2Coordinates = async (
    placeId: string
): Promise<ICoordinates | undefined> => {
    if (!placeId) return undefined;
    return await fetch(
        `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=geometry&key=AIzaSyBUO0kTfhpr4poz-VPZICMJ3202GglTlPA`
    )
        .then((res) => res.json())
        .then(
            (result) => {
                return {
                    longitude: result.result.geometry.location.lng,
                    latitude: result.result.geometry.location.lat,
                } as ICoordinates;
            },
            (error) => {
                console.error(error);
                return undefined;
            }
        );
};

const getGeolocation = async (): Promise<ICoordinates | undefined> => {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
        .then((coordinates) => {
            let coords = coordinates as GeolocationPosition;
            let latitude = coords.coords.latitude;
            let longitude = coords.coords.longitude;
            return {
                longitude: longitude,
                latitude: latitude,
            } as ICoordinates;
        })
        .catch((error) => {
            console.error(error);
            return undefined;
        });
};
