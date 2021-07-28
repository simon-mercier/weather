import { DEFAULT_LOCATION_COORDINATES } from "../const";
import TimesOfDay from "../enums/timesOfDay";
import ICoordinates from "../interfaces/coordinates";
import ILocation from "../interfaces/location";
import { placeId2Coordinates } from "../utils/location-utils";
import { coordinates2TimeOfDay } from "../utils/time-of-day-utils";

class Location {
    location: ILocation;

    private coordinates: ICoordinates | undefined;

    constructor(location: ILocation) {
        this.location = location;
    }

    getCoordinates = async (): Promise<ICoordinates> => {
        if (!this.coordinates)
            this.coordinates =
                (await placeId2Coordinates(this.location.placeId)) ??
                DEFAULT_LOCATION_COORDINATES;

        return this.coordinates as ICoordinates;
    };

    getTimeOfDay = async (): Promise<TimesOfDay> =>
        (await coordinates2TimeOfDay(await this.getCoordinates())) ??
        TimesOfDay.DAY;
}

export default Location;
