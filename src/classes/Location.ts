import { DEFAULT_LOCATION_COORDINATES } from "../const";
import PeriodsOfDay from "../enums/periodsOfDay";
import ICoordinates from "../interfaces/coordinates";
import ILocation from "../interfaces/location";
import { placeId2Coordinates } from "../utils/location-utils";
import { coordinates2PeriodOfDay } from "../utils/period-of-day-manager";

class Location {
    location: ILocation;

    private coordinates: ICoordinates | undefined;

    private periodOfDay: PeriodsOfDay | undefined;

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

    getPeriodOfDay = async (): Promise<PeriodsOfDay> => {
        if (!this.periodOfDay)
            this.periodOfDay =
                (await coordinates2PeriodOfDay(await this.getCoordinates())) ??
                PeriodsOfDay.DAY;

        return this.periodOfDay;
    };
}

export default Location;
