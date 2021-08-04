import { DEFAULT_LOCATION_COORDINATES } from "../const";
import TimesOfDay from "../enums/timesOfDay";
import ICoordinates from "../interfaces/coordinates";
import ILocation from "../interfaces/location";
import { placeId2Coordinates } from "../utils/location-utils";
import { coordinates2TimeOfDay } from "../utils/time-of-day-utils";

class Location {
    location: ILocation;

    private coordinates: ICoordinates | undefined;

    private timeOfDay: TimesOfDay | undefined;

    constructor(location: ILocation, coordinates?: ICoordinates) {
        this.location = location;
        if (coordinates) this.coordinates = coordinates;
    }

    getCoordinates = async (): Promise<ICoordinates> => {
        if (!this.coordinates)
            this.coordinates =
                (await placeId2Coordinates(this.location.placeId)) ??
                DEFAULT_LOCATION_COORDINATES;

        return this.coordinates;
    };

    getTimeOfDay = async (): Promise<TimesOfDay> => {
        if (!this.timeOfDay)
            this.timeOfDay =
                (await coordinates2TimeOfDay(await this.getCoordinates())) ??
                TimesOfDay.DAY;

        return this.timeOfDay;
    };
}

export default Location;
