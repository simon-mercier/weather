import {
    TIME_INTERVAL_SUNRISE_SUNSET_HOURS,
    TIME_IN_ONE_HOUR_MS,
} from "../const";
import PeriodsOfDay from "../enums/periodsOfDay";

export const getPeriodsOfDay = (sunrise: Date, sunset: Date): PeriodsOfDay => {
    const localeTime = new Date();
    if (
        getTimeDifference(localeTime, sunrise) <
        TIME_INTERVAL_SUNRISE_SUNSET_HOURS
    )
        return PeriodsOfDay.MORNING;
    else if (
        getTimeDifference(localeTime, sunset) <
        TIME_INTERVAL_SUNRISE_SUNSET_HOURS
    )
        return PeriodsOfDay.EVENING;
    else if (
        localeTime.getTime() > sunrise.getTime() &&
        localeTime.getTime() < sunset.getTime()
    )
        return PeriodsOfDay.DAY;
    else return PeriodsOfDay.NIGHT;
};

const getTimeDifference = (localeTime: Date, otherTime: Date) =>
    Math.abs(localeTime.getTime() - otherTime.getTime()) / TIME_IN_ONE_HOUR_MS;

// export const coordinates2Offsets = async (
//     coordinates: ICoordinates,
// ): Promise<Date | undefined> => {
//     return await fetchApi(
//         `https://maps.googleapis.com/maps/api/timezone/json
//   ?location=${coordinates.latitude}%2C${coordinates.longitude}
//   &timestamp=${Date.now() / 1000}
//   &key=`,
//         API.GOOGLE
//     ).then(
//         (result) => {
//             return (result.dstOffset + result.rawOffset) * 1000;
//         },
//         (error) => {
//             console.error(error);
//             return undefined;
//         }
//     );
// };
