import ICoordinates from "../interfaces/coordinates";
import ILocation from "../interfaces/location";
import { placeId2Coordinates } from "../utils/location-utils";
import { coordinates2Time } from "../utils/time-of-day-utils";

class Location {
    location: ILocation;

    private coordinates: ICoordinates | undefined;
    private time: Date | undefined;

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

    getTime = async (): Promise<Date> => {
        if (!this.time)
            this.time = (await coordinates2Time(
                this.coordinates as ICoordinates
            )) as Date;
        return this.time as Date;
    };
}

export default Location;
