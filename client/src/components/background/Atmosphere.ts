import styled from "styled-components";
import PeriodOfDay from "../../enums/periodOfDay";
import WeatherType from "../../enums/weatherType";
import { ICurrentWeather } from "../../interfaces/weather";

const morning: string =
    "linear-gradient(to bottom, #CAD5D7 0%, 26.80412232875824%, #FBAA72 53.60824465751648%, 62.542954087257385%, #B86F83 71.47766351699829%, 85.73883175849915%, #446996 100%)";
const clear: string =
    "linear-gradient(to bottom, #0A6AB7 0%, 14.604811370372772%, #0D77C1 29.209622740745544%, 39.69072252511978%, #1A87CA 50.17182230949402%, 57.560136914253235%, #2294D3 64.94845151901245%, 76.97594463825226%, #3EAEDE 89.00343775749207%, 94.50171887874603%, #53BAE7 100%)";
const evening: string =
    "linear-gradient(to bottom, #525179 0%, 32.37822353839874%, #E39396 64.75644707679749%, 82.37822353839874%, #FFA187 100%)";
const dark: string =
    "linear-gradient(to top, #25232E 0%, 15.919812023639679%, #383641 31.839624047279358%, 42.21698194742203%, #353341 52.5943398475647%, 60.96698045730591%, #33313C 69.33962106704712%, 76.29716992378235%, #212026 83.25471878051758%, 91.62735939025879%, #090A04 100%)";
const periodOfDay2Atmosphere = new Map<PeriodOfDay, Map<WeatherType, string>>([
    [
        PeriodOfDay.DAY,
        new Map<WeatherType, string>([
            [WeatherType.CLEAR_SKY, clear],
            [WeatherType.FEW_CLOUDS, clear],
            [WeatherType.SCATTERED_CLOUDS, clear],
            [WeatherType.BROKEN_CLOUDS, clear],
            [WeatherType.OVERCAST_CLOUDS, clear],
            [WeatherType.DRIZZLE, clear],
            [WeatherType.RAIN, clear],
            [WeatherType.THUNDERSTORM, dark],
            [WeatherType.HAZE, clear],
            [WeatherType.SMOKE, clear],
            [WeatherType.SNOW, clear],
        ]),
    ],
    [
        PeriodOfDay.EVENING,
        new Map<WeatherType, string>([
            [WeatherType.CLEAR_SKY, evening],
            [WeatherType.FEW_CLOUDS, evening],
            [WeatherType.SCATTERED_CLOUDS, evening],
            [WeatherType.BROKEN_CLOUDS, evening],
            [WeatherType.OVERCAST_CLOUDS, evening],
            [WeatherType.DRIZZLE, evening],
            [WeatherType.RAIN, dark],
            [WeatherType.THUNDERSTORM, dark],
            [WeatherType.HAZE, evening],
            [WeatherType.SMOKE, evening],
            [WeatherType.SNOW, evening],
        ]),
    ],
    [
        PeriodOfDay.NIGHT,
        new Map<WeatherType, string>([
            [WeatherType.CLEAR_SKY, dark],
            [WeatherType.FEW_CLOUDS, dark],
            [WeatherType.SCATTERED_CLOUDS, dark],
            [WeatherType.BROKEN_CLOUDS, dark],
            [WeatherType.OVERCAST_CLOUDS, dark],
            [WeatherType.DRIZZLE, dark],
            [WeatherType.RAIN, dark],
            [WeatherType.HAZE, dark],
            [WeatherType.SMOKE, dark],
            [WeatherType.THUNDERSTORM, dark],
            [WeatherType.SNOW, dark],
        ]),
    ],
    [
        PeriodOfDay.MORNING,
        new Map<WeatherType, string>([
            [WeatherType.CLEAR_SKY, morning],
            [WeatherType.FEW_CLOUDS, morning],
            [WeatherType.SCATTERED_CLOUDS, morning],
            [WeatherType.BROKEN_CLOUDS, morning],
            [WeatherType.OVERCAST_CLOUDS, morning],
            [WeatherType.DRIZZLE, morning],
            [WeatherType.RAIN, morning],
            [WeatherType.HAZE, morning],
            [WeatherType.SMOKE, morning],
            [WeatherType.THUNDERSTORM, dark],
            [WeatherType.SNOW, morning],
        ]),
    ],
]);

const periodOfDay2Brightness = new Map<PeriodOfDay, Map<WeatherType, number>>([
    [
        PeriodOfDay.DAY,
        new Map<WeatherType, number>([
            [WeatherType.CLEAR_SKY, 0],
            [WeatherType.FEW_CLOUDS, 0.1],
            [WeatherType.SCATTERED_CLOUDS, 0.2],
            [WeatherType.BROKEN_CLOUDS, 0.6],
            [WeatherType.OVERCAST_CLOUDS, 0.8],
            [WeatherType.DRIZZLE, 0.7],
            [WeatherType.RAIN, 0.8],
            [WeatherType.THUNDERSTORM, 0.9],
            [WeatherType.SNOW, 0.8],
            [WeatherType.HAZE, 0.6],
            [WeatherType.SMOKE, 0.6],
        ]),
    ],
    [
        PeriodOfDay.EVENING,
        new Map<WeatherType, number>([
            [WeatherType.CLEAR_SKY, 0],
            [WeatherType.FEW_CLOUDS, 0.1],
            [WeatherType.SCATTERED_CLOUDS, 0.2],
            [WeatherType.BROKEN_CLOUDS, 0.6],
            [WeatherType.OVERCAST_CLOUDS, 0.8],
            [WeatherType.DRIZZLE, 0.7],
            [WeatherType.RAIN, 0.8],
            [WeatherType.THUNDERSTORM, 0.9],
            [WeatherType.SNOW, 0.8],
            [WeatherType.HAZE, 0.8],
            [WeatherType.SMOKE, 0.8],
        ]),
    ],
    [
        PeriodOfDay.NIGHT,
        new Map<WeatherType, number>([
            [WeatherType.CLEAR_SKY, 0],
            [WeatherType.FEW_CLOUDS, 0.1],
            [WeatherType.SCATTERED_CLOUDS, 0.2],
            [WeatherType.BROKEN_CLOUDS, 0.6],
            [WeatherType.OVERCAST_CLOUDS, 0.8],
            [WeatherType.DRIZZLE, 0.7],
            [WeatherType.RAIN, 0.8],
            [WeatherType.THUNDERSTORM, 0.9],
            [WeatherType.SNOW, 0.8],
            [WeatherType.HAZE, 0.8],
            [WeatherType.SMOKE, 0.8],
        ]),
    ],
    [
        PeriodOfDay.MORNING,
        new Map<WeatherType, number>([
            [WeatherType.CLEAR_SKY, 0],
            [WeatherType.FEW_CLOUDS, 0.1],
            [WeatherType.SCATTERED_CLOUDS, 0.2],
            [WeatherType.BROKEN_CLOUDS, 0.6],
            [WeatherType.OVERCAST_CLOUDS, 0.8],
            [WeatherType.DRIZZLE, 0.7],
            [WeatherType.RAIN, 0.8],
            [WeatherType.THUNDERSTORM, 0.9],
            [WeatherType.SNOW, 0.8],
        ]),
    ],
]);

interface AtmosphereProps {
    periodOfDay: PeriodOfDay;
    currentWeather: ICurrentWeather;
}

const Atmosphere = styled.div<AtmosphereProps>`
    background-image: ${(p: AtmosphereProps) =>
        (periodOfDay2Atmosphere
            .get(p.periodOfDay)
            ?.get(p.currentWeather.condition.weatherType) as string) ?? clear};

    filter: grayscale(
        ${(p: AtmosphereProps) =>
            periodOfDay2Brightness
                .get(p.periodOfDay)
                ?.get(p.currentWeather.condition.weatherType) ?? 0}
    );

    position: absolute;
    top: 0;
    left: 0;

    min-width: 100vw;
    min-height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
`;

export default Atmosphere;
