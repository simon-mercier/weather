import ILocation from "../interfaces/location";
import ICoordinates from "../interfaces/coordinates";
import { API, fetchApi } from "./api-utils";

export const cityPredictions = async (
    input: string
): Promise<[ILocation] | undefined> => {
    return await fetchApi(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&types=(cities)&language=en&key=`,
        API.GOOGLE
    ).then(
        (result) => {
            return result
                ? result.predictions.map((prediction: any) => {
                      return {
                          location: prediction.terms.map((term: any) => {
                              return term.value;
                          }),
                          placeId: prediction.place_id,
                          locationFormatted: prediction.description,
                      } as ILocation;
                  })
                : undefined;
        },
        (error) => {
            console.error(error);
            return undefined;
        }
    );
};

export const coordinates2ILocation = async (
    coordinates: ICoordinates
): Promise<ILocation | undefined> => {
    return await fetchApi(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.latitude},${coordinates.longitude}&types=(locality)&language=en&key=`,
        API.GOOGLE
    ).then(
        (result) => {
            if (!result) return undefined;

            const locality = result.results.find(
                (r: any) => r.types[0] === "locality"
            );

            return {
                location: locality.address_components.map((term: any) => {
                    return term.long_name;
                }),
                placeId: locality.place_id,
                locationFormatted: locality.description,
            } as ILocation;
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
    return await fetchApi(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=geometry&key=`,
        API.GOOGLE
    ).then(
        (result) => {
            return result
                ? ({
                      longitude: result.result.geometry.location.lng,
                      latitude: result.result.geometry.location.lat,
                  } as ICoordinates)
                : undefined;
        },
        (error) => {
            console.error(error);
            return undefined;
        }
    );
};

export const getUserCoordinates = async (): Promise<
    ICoordinates | undefined
> => {
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
