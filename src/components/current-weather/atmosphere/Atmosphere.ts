import styled from "styled-components";
import device from "../../../assets/styles/breakpoints";
import TimesOfDay from "../../../enums/timesOfDay";
import WeatherType from "../../../enums/weatherType";
import ICurrentWeather from "../../../interfaces/currentWeather";
import { id2Type } from "../../../utils/weather-utils";

const clearMorning: [string, string] = [
    "linear-gradient(to bottom, #CAD5D7 0%, 26.80412232875824%, #FBAA72 53.60824465751648%, 62.542954087257385%, #B86F83 71.47766351699829%, 85.73883175849915%, #446996 100%)",
    "#446996",
];
const clearDay: [string, string] = [
    "linear-gradient(to bottom, #0A6AB7 0%, 14.604811370372772%, #0D77C1 29.209622740745544%, 39.69072252511978%, #1A87CA 50.17182230949402%, 57.560136914253235%, #2294D3 64.94845151901245%, 76.97594463825226%, #3EAEDE 89.00343775749207%, 94.50171887874603%, #53BAE7 100%)",
    "#53BAE7",
];
const clearEvening: [string, string] = [
    "linear-gradient(to bottom, #525179 0%, 32.37822353839874%, #E39396 64.75644707679749%, 82.37822353839874%, #FFA187 100%)",
    "#FFA187",
];
const grayDay: [string, string] = [
    "linear-gradient(to bottom, #BDC0C5 0%, 21.373307704925537%, #9CA3A9 42.746615409851074%, 71.37330770492554%, #788691 100%)",
    "#788691",
];

const clearNight: [string, string] = [
    "linear-gradient(to top, #25232E 0%, 15.919812023639679%, #383641 31.839624047279358%, 42.21698194742203%, #353341 52.5943398475647%, 60.96698045730591%, #33313C 69.33962106704712%, 76.29716992378235%, #212026 83.25471878051758%, 91.62735939025879%, #090A04 100%)",
    "#25232E",
];

const timeOfDay2Atmosphere = new Map<
    TimesOfDay,
    Map<WeatherType, Array<string>>
>([
    [
        TimesOfDay.DAY,
        new Map<WeatherType, Array<string>>([
            [WeatherType.CLEAR_SKY, clearDay],
            [WeatherType.FEW_CLOUDS, clearDay],
            [WeatherType.SCATTERED_CLOUDS, clearDay],
            [WeatherType.BROKEN_CLOUDS, grayDay],
            [WeatherType.OVERCAST_CLOUDS, grayDay],
            [WeatherType.DRIZZLE, grayDay],
            [WeatherType.RAIN, grayDay],
            [WeatherType.THUNDERSTORM, clearNight],
            [WeatherType.SNOW, grayDay],
        ]),
    ],
    [
        TimesOfDay.EVENING,

        new Map<WeatherType, Array<string>>([
            [WeatherType.CLEAR_SKY, clearEvening],
            [WeatherType.FEW_CLOUDS, clearEvening],
            [WeatherType.SCATTERED_CLOUDS, clearEvening],
            [WeatherType.BROKEN_CLOUDS, clearNight],
            [WeatherType.OVERCAST_CLOUDS, clearNight],
            [WeatherType.DRIZZLE, clearEvening],
            [WeatherType.RAIN, clearNight],
            [WeatherType.THUNDERSTORM, clearNight],
            [WeatherType.SNOW, clearNight],
        ]),
    ],
    [
        TimesOfDay.NIGHT,
        new Map<WeatherType, Array<string>>([
            [WeatherType.CLEAR_SKY, clearNight],
            [WeatherType.FEW_CLOUDS, clearNight],
            [WeatherType.SCATTERED_CLOUDS, clearNight],
            [WeatherType.BROKEN_CLOUDS, clearNight],
            [WeatherType.OVERCAST_CLOUDS, clearNight],
            [WeatherType.DRIZZLE, clearNight],
            [WeatherType.RAIN, clearNight],
            [WeatherType.THUNDERSTORM, clearNight],
            [WeatherType.SNOW, clearNight],
        ]),
    ],
    [
        TimesOfDay.MORNING,

        new Map<WeatherType, Array<string>>([
            [WeatherType.CLEAR_SKY, clearMorning],
            [WeatherType.FEW_CLOUDS, clearMorning],
            [WeatherType.SCATTERED_CLOUDS, clearMorning],
            [WeatherType.BROKEN_CLOUDS, grayDay],
            [WeatherType.OVERCAST_CLOUDS, grayDay],
            [WeatherType.DRIZZLE, grayDay],
            [WeatherType.RAIN, grayDay],
            [WeatherType.THUNDERSTORM, clearNight],
            [WeatherType.SNOW, grayDay],
        ]),
    ],
]);

const timeOfDay2Brightness = new Map<TimesOfDay, Map<WeatherType, number>>([
    [
        TimesOfDay.DAY,
        new Map<WeatherType, number>([
            [WeatherType.CLEAR_SKY, 1],
            [WeatherType.FEW_CLOUDS, 1],
            [WeatherType.SCATTERED_CLOUDS, 0.9],
            [WeatherType.BROKEN_CLOUDS, 0.8],
            [WeatherType.OVERCAST_CLOUDS, 0.7],
            [WeatherType.DRIZZLE, 0.7],
            [WeatherType.RAIN, 0.6],
            [WeatherType.THUNDERSTORM, 0.5],
            [WeatherType.SNOW, 0.7],
        ]),
    ],
    [
        TimesOfDay.EVENING,

        new Map<WeatherType, number>([
            [WeatherType.CLEAR_SKY, 1],
            [WeatherType.FEW_CLOUDS, 1],
            [WeatherType.SCATTERED_CLOUDS, 0.9],
            [WeatherType.BROKEN_CLOUDS, 0.8],
            [WeatherType.OVERCAST_CLOUDS, 0.7],
            [WeatherType.DRIZZLE, 0.7],
            [WeatherType.RAIN, 0.6],
            [WeatherType.THUNDERSTORM, 0.5],
            [WeatherType.SNOW, 0.7],
        ]),
    ],
    [
        TimesOfDay.NIGHT,
        new Map<WeatherType, number>([
            [WeatherType.CLEAR_SKY, 1],
            [WeatherType.FEW_CLOUDS, 1],
            [WeatherType.SCATTERED_CLOUDS, 0.9],
            [WeatherType.BROKEN_CLOUDS, 0.8],
            [WeatherType.OVERCAST_CLOUDS, 0.7],
            [WeatherType.DRIZZLE, 0.7],
            [WeatherType.RAIN, 0.6],
            [WeatherType.THUNDERSTORM, 0.5],
            [WeatherType.SNOW, 0.7],
        ]),
    ],
    [
        TimesOfDay.MORNING,

        new Map<WeatherType, number>([
            [WeatherType.CLEAR_SKY, 1],
            [WeatherType.FEW_CLOUDS, 1],
            [WeatherType.SCATTERED_CLOUDS, 0.9],
            [WeatherType.BROKEN_CLOUDS, 0.8],
            [WeatherType.OVERCAST_CLOUDS, 0.7],
            [WeatherType.DRIZZLE, 0.7],
            [WeatherType.RAIN, 0.6],
            [WeatherType.THUNDERSTORM, 0.5],
            [WeatherType.SNOW, 0.7],
        ]),
    ],
]);

interface AtmosphereProps {
    timeOfDay: TimesOfDay;
    currentWeather: ICurrentWeather;
}

const Atmosphere = styled.div<AtmosphereProps>`
    background-image: ${(p: AtmosphereProps) =>
        (
            timeOfDay2Atmosphere
                .get(p.timeOfDay)
                ?.get(id2Type(p.currentWeather.weatherId)) as Array<string>
        )[0] ?? clearDay[0]};

    background-color: ${(p: AtmosphereProps) =>
        (
            timeOfDay2Atmosphere
                .get(p.timeOfDay)
                ?.get(id2Type(p.currentWeather.weatherId)) as Array<string>
        )[1] ?? clearDay[1]};

    filter: brightness(
        ${(p: AtmosphereProps) =>
            timeOfDay2Brightness
                .get(p.timeOfDay)
                ?.get(id2Type(p.currentWeather.weatherId)) ?? 1}
    );

    position: absolute;
    top: 0;
    left: 0;

    width: 100vw;

    @media ${device.mobileS} {
        height: 120vh;
    }

    @media ${device.tablet} {
        height: 100vh;
    }
`;

export default Atmosphere;
