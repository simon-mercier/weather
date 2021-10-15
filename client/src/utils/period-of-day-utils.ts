import {
    TIME_INTERVAL_SUNRISE_SUNSET_HOURS,
    TIME_IN_ONE_HOUR_MS,
} from "../const";
import PeriodOfDay from "../enums/periodOfDay";

export const getPeriodsOfDay = (
    sunrise: Date,
    sunset: Date,
    time: Date = new Date()
): PeriodOfDay => {
    if (getTimeDifference(time, sunrise) < TIME_INTERVAL_SUNRISE_SUNSET_HOURS)
        return PeriodOfDay.MORNING;
    else if (
        getTimeDifference(time, sunset) < TIME_INTERVAL_SUNRISE_SUNSET_HOURS
    )
        return PeriodOfDay.EVENING;
    else if (
        time.getTime() > sunrise.getTime() &&
        time.getTime() < sunset.getTime()
    )
        return PeriodOfDay.DAY;
    else return PeriodOfDay.NIGHT;
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
