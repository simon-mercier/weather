import TimesOfDay from "../../enums/timesOfDay";
import styled from "styled-components";
import WeatherType from "../../enums/weatherType";

const clearMorning: [string, string] = ["#", "#"];
const clearDay: [string, string] = ["#a6c1d2", "#11b5d2"];
const clearEvening: [string, string] = ["#", "#"];

const grayDay: [string, string] = ["#b4c6d1", "#a6c1d2"];

const darkDay: [string, string] = ["#", "#"];

const clearNight: [string, string] = ["#", "#"];

const timeOfDay2Atmosphere = new Map<
    TimesOfDay,
    Map<WeatherType, [string, string]>
>([
    [
        TimesOfDay.DAY,
        new Map<WeatherType, [string, string]>([
            [WeatherType.CLEAR, clearDay],
            [WeatherType.PARTLY_CLOUDY, clearDay],
            [WeatherType.CLOUDY, grayDay],
            [WeatherType.OVERCAST, grayDay],
            [WeatherType.DRIZZLE, grayDay],
            [WeatherType.RAIN, grayDay],
            [WeatherType.THUNDERSTORM, darkDay],
            [WeatherType.SNOW, grayDay],
        ]),
    ],
    [
        TimesOfDay.EVENING,

        new Map<WeatherType, [string, string]>([
            [WeatherType.CLEAR, clearEvening],
            [WeatherType.PARTLY_CLOUDY, clearEvening],
            [WeatherType.CLOUDY, darkDay],
            [WeatherType.OVERCAST, darkDay],
            [WeatherType.DRIZZLE, darkDay],
            [WeatherType.RAIN, darkDay],
            [WeatherType.THUNDERSTORM, darkDay],
            [WeatherType.SNOW, darkDay],
        ]),
    ],
    [
        TimesOfDay.NIGHT,
        new Map<WeatherType, [string, string]>([
            [WeatherType.CLEAR, clearNight],
            [WeatherType.PARTLY_CLOUDY, clearNight],
            [WeatherType.CLOUDY, clearNight],
            [WeatherType.OVERCAST, clearNight],
            [WeatherType.DRIZZLE, clearNight],
            [WeatherType.RAIN, clearNight],
            [WeatherType.THUNDERSTORM, clearNight],
            [WeatherType.SNOW, clearNight],
        ]),
    ],
    [
        TimesOfDay.MORNING,

        new Map<WeatherType, [string, string]>([
            [WeatherType.CLEAR, clearMorning],
            [WeatherType.PARTLY_CLOUDY, clearMorning],
            [WeatherType.CLOUDY, grayDay],
            [WeatherType.OVERCAST, grayDay],
            [WeatherType.DRIZZLE, grayDay],
            [WeatherType.RAIN, grayDay],
            [WeatherType.THUNDERSTORM, darkDay],
            [WeatherType.SNOW, grayDay],
        ]),
    ],
]);
interface TimeOfDayProps {
    timeOfDay: TimesOfDay;
    weatherType: WeatherType;
}

const TimeOfDay = styled.div`
    background-image: linear-gradient(
        ${(props: TimeOfDayProps) =>
            (
                timeOfDay2Atmosphere
                    .get(props.timeOfDay)
                    ?.get(props.weatherType) as string[]
            )[0]},
        ${(props: TimeOfDayProps) =>
            (
                timeOfDay2Atmosphere
                    .get(props.timeOfDay)
                    ?.get(props.weatherType) as string[]
            )[1]}
    );
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
`;

export default TimeOfDay;
