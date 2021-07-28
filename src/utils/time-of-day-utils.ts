import TimesOfDay from "../enums/timesOfDay";
import ICoordinates from "../interfaces/coordinates";
import { k2c } from "./weather-utils";

export const coordinates2Time = async (
    coordinates: ICoordinates
): Promise<Date | undefined> => {
    if (!coordinates) return undefined;
    return await fetch(
        `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/timezone/json?location=${coordinates.latitude},${coordinates.longitude}&timestamp=0&key=AIzaSyBUO0kTfhpr4poz-VPZICMJ3202GglTlPA`
    )
        .then((res) => res.json())
        .then(
            (result) => {
                return getLocaleTime(result.rawOffset);
            },
            (error) => {
                console.error(error);
                return undefined;
            }
        );
};
export const coordinates2TimeOfDay = async (
    coordinates: ICoordinates
): Promise<TimesOfDay | undefined> => {
    if (!coordinates) return undefined;

    const timesOfDay = await coordinates2TimesOfDay(coordinates);
    const localeTime = new Date();

    if (!timesOfDay || !localeTime) return undefined;

    let currentTimeOfDay: TimesOfDay = TimesOfDay.DAY;
    for (let i = 0; i < timesOfDay.length - 1; i++) {
        if (
            localeTime > timesOfDay[i][1] &&
            localeTime < timesOfDay[i + 1][1]
        ) {
            currentTimeOfDay = timesOfDay[i + 1][0];
        }
    }

    return timeOfDay2DayCycle.get(currentTimeOfDay);
};

const timeOfDay2DayCycle = new Map<TimesOfDay, TimesOfDay>([
    [
        TimesOfDay.MORNING_ASTRONOMICAL_TWILIGHT,
        TimesOfDay.MORNING_ASTRONOMICAL_TWILIGHT,
    ],
    [
        TimesOfDay.MORNING_NAUTICAL_TWILIGHT,
        TimesOfDay.MORNING_NAUTICAL_TWILIGHT,
    ],
    [TimesOfDay.MORNING_CIVIL_TWILIGHT, TimesOfDay.MORNING_CIVIL_TWILIGHT],
    [TimesOfDay.SUNRISE, TimesOfDay.DAY],
    [TimesOfDay.SUNSET, TimesOfDay.EVENING_CIVIL_TWILIGHT],
    [TimesOfDay.EVENING_CIVIL_TWILIGHT, TimesOfDay.EVENING_NAUTICAL_TWILIGHT],
    [
        TimesOfDay.EVENING_NAUTICAL_TWILIGHT,
        TimesOfDay.EVENING_ASTRONOMICAL_TWILIGHT,
    ],
    [TimesOfDay.EVENING_ASTRONOMICAL_TWILIGHT, TimesOfDay.NIGHT],
]);

const coordinates2TimesOfDay = async (
    coordinates: ICoordinates
): Promise<Array<[TimesOfDay, Date]> | undefined> => {
    if (!coordinates) return undefined;
    return await fetch(
        `https://api.sunrise-sunset.org/json?lat=${coordinates.latitude}&lng=${coordinates.longitude}&formatted=0&date=2021-07-27`
    )
        .then((res) => res.json())
        .then(
            (result) => {
                if (!result) return undefined;
                return [
                    [
                        TimesOfDay.MORNING_ASTRONOMICAL_TWILIGHT,
                        new Date(result.results.astronomical_twilight_begin),
                    ],
                    [
                        TimesOfDay.MORNING_NAUTICAL_TWILIGHT,
                        new Date(result.results.nautical_twilight_begin),
                    ],
                    [
                        TimesOfDay.MORNING_CIVIL_TWILIGHT,
                        new Date(result.results.civil_twilight_begin),
                    ],

                    [TimesOfDay.SUNRISE, new Date(result.results.sunrise)],

                    [TimesOfDay.SUNSET, new Date(result.results.sunset)],
                    [
                        TimesOfDay.EVENING_CIVIL_TWILIGHT,
                        new Date(result.results.civil_twilight_end),
                    ],
                    [
                        TimesOfDay.EVENING_NAUTICAL_TWILIGHT,
                        new Date(result.results.nautical_twilight_end),
                    ],
                    [
                        TimesOfDay.EVENING_ASTRONOMICAL_TWILIGHT,
                        new Date(result.results.astronomical_twilight_end),
                    ],
                ];
            },
            (error) => {
                console.error(error);
                return undefined;
            }
        );
};

const getLocaleTime = (rawOffset: number) => {
    const ONE_HOUR = 3600;
    const ONE_MS = 1000;
    const ONE_MINUTE_MS = 60000;

    const date = new Date();
    const utc = date.getTime() + date.getTimezoneOffset() * ONE_MINUTE_MS;

    return new Date(utc + ONE_MS * (rawOffset + ONE_HOUR));
};
