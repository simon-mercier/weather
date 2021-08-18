import PeriodsOfDay from "../enums/periods-of-day";
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
export const coordinates2PeriodOfDay = async (
    coordinates: ICoordinates
): Promise<PeriodsOfDay | undefined> => {
    if (!coordinates) return undefined;

    const localeTime = new Date();
    const periodsOfDay = await coordinates2PeriodsOfDay(
        coordinates,
        localeTime
    );

    if (!periodsOfDay || !localeTime) return undefined;

    let currentPeriodOfDay: PeriodsOfDay | undefined = undefined;
    for (let i = 0; i < periodsOfDay.length - 1; i++) {
        if (
            localeTime > periodsOfDay[i][1] &&
            localeTime < periodsOfDay[i + 1][1]
        ) {
            currentPeriodOfDay = periodsOfDay[i][0];
        }
    }

    return periodOfDay2DayCycle.get(currentPeriodOfDay ?? PeriodsOfDay.EVENING);
};

const periodOfDay2DayCycle = new Map<PeriodsOfDay, PeriodsOfDay>([
    [PeriodsOfDay.MORNING, PeriodsOfDay.MORNING],
    [PeriodsOfDay.SUNRISE, PeriodsOfDay.DAY],
    [PeriodsOfDay.SUNSET, PeriodsOfDay.EVENING],
    [PeriodsOfDay.EVENING, PeriodsOfDay.NIGHT],
]);

const coordinates2PeriodsOfDay = async (
    coordinates: ICoordinates,
    date: Date
): Promise<Array<[PeriodsOfDay, Date]> | undefined> => {
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
                          PeriodsOfDay.MORNING,
                          new Date(result.results.astronomical_twilight_begin),
                      ],

                      [PeriodsOfDay.SUNRISE, new Date(result.results.sunrise)],

                      [PeriodsOfDay.SUNSET, new Date(result.results.sunset)],

                      [
                          PeriodsOfDay.EVENING,
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
