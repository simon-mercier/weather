import TimesOfDay from "../enums/timesOfDay";
import ICoordinates from "../interfaces/coordinates";
import { fetchApi } from "./api-utils";

// export const coordinates2Time = async (
//     coordinates: ICoordinates
// ): Promise<Date | undefined> => {
//     if (!coordinates) return undefined;
//     return await fetchApi<ICoordinates>(
//         `https://maps.googleapis.com/maps/api/timezone/json?location=${coordinates.latitude},${coordinates.longitude}&timestamp=0&key=AIzaSyBUO0kTfhpr4poz-VPZICMJ3202GglTlPA`,
//         coordinates
//     ).then(
//         (result) => {
//             return result ? getLocaleTime(result.rawOffset) : undefined;
//         },
//         (error) => {
//             console.error(error);
//             return undefined;
//         }
//     );
// };
export const coordinates2TimeOfDay = async (
    coordinates: ICoordinates
): Promise<TimesOfDay | undefined> => {
    if (!coordinates) return undefined;

    const localeTime = new Date();
    const timesOfDay = await coordinates2TimesOfDay(coordinates, localeTime);

    if (!timesOfDay || !localeTime) return undefined;

    let currentTimeOfDay: TimesOfDay | undefined = undefined;
    for (let i = 0; i < timesOfDay.length - 1; i++) {
        if (
            localeTime > timesOfDay[i][1] &&
            localeTime < timesOfDay[i + 1][1]
        ) {
            currentTimeOfDay = timesOfDay[i][0];
        }
    }

    return timeOfDay2DayCycle.get(currentTimeOfDay ?? TimesOfDay.EVENING);
};

const timeOfDay2DayCycle = new Map<TimesOfDay, TimesOfDay>([
    [TimesOfDay.MORNING, TimesOfDay.MORNING],
    [TimesOfDay.SUNRISE, TimesOfDay.DAY],
    [TimesOfDay.SUNSET, TimesOfDay.EVENING],
    [TimesOfDay.EVENING, TimesOfDay.NIGHT],
]);

const coordinates2TimesOfDay = async (
    coordinates: ICoordinates,
    date: Date
): Promise<Array<[TimesOfDay, Date]> | undefined> => {
    if (!coordinates) return undefined;
    return await fetchApi<ICoordinates>(
        `https://api.sunrise-sunset.org/json?lat=${coordinates.latitude}&lng=${
            coordinates.longitude
        }&formatted=0&date=${date.toDateString()}`,
        coordinates
    ).then(
        (result) => {
            return result
                ? [
                      [
                          TimesOfDay.MORNING,
                          new Date(result.results.astronomical_twilight_begin),
                      ],

                      [TimesOfDay.SUNRISE, new Date(result.results.sunrise)],

                      [TimesOfDay.SUNSET, new Date(result.results.sunset)],

                      [
                          TimesOfDay.EVENING,
                          new Date(result.results.astronomical_twilight_end),
                      ],
                  ]
                : undefined;
        },
        (error) => {
            console.error(error);
            return undefined;
        }
    );
};

// const getLocaleTime = (rawOffset: number) => {
//     const ONE_HOUR = 3600;
//     const ONE_MS = 1000;
//     const ONE_MINUTE_MS = 60000;

//     const date = new Date();
//     const utc = date.getTime() + date.getTimezoneOffset() * ONE_MINUTE_MS;

//     return new Date(utc + ONE_MS * (rawOffset + ONE_HOUR));
// };
