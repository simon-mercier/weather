import ICoordinates from "../interfaces/coordinates";
import ILocation from "../interfaces/location";
import { placeId2Coordinates } from "../utils/location-utils";

class Location {
    location: ILocation;

    private coordinates: ICoordinates | undefined;

    constructor(location: ILocation) {
        this.location = location;
    }

    getCoordinates = async (): Promise<ICoordinates> => {
        if (!this.coordinates)
            this.coordinates = (await placeId2Coordinates(
                this.location.placeId
            )) as ICoordinates;

        return this.coordinates as ICoordinates;
    };
}

export default Location;
