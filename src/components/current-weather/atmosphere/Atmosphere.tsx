import { useContext } from "react";
import CurrentWeatherInfo from "../../../contexts/CurrentWeatherInfo";
import TimeOfDayContext from "../../../contexts/TimeOfDay";
import TimesOfDay from "../../../enums/timesOfDay";
import WeatherType from "../../../enums/weatherType";
import ICurrentWeather from "../../../interfaces/currentWeather";
import { id2Type } from "../../../utils/weather-utils";

const clearMorning: string =
    "linear-gradient(to bottom, #CAD5D7 0%, 26.80412232875824%, #FBAA72 53.60824465751648%, 62.542954087257385%, #B86F83 71.47766351699829%, 85.73883175849915%, #446996 100%)";
const clearDay: string =
    "linear-gradient(to bottom, #0A6AB7 0%, 14.604811370372772%, #0D77C1 29.209622740745544%, 39.69072252511978%, #1A87CA 50.17182230949402%, 57.560136914253235%, #2294D3 64.94845151901245%, 76.97594463825226%, #3EAEDE 89.00343775749207%, 94.50171887874603%, #53BAE7 100%)";
const clearEvening: string =
    "linear-gradient(to bottom, #525179 0%, 32.37822353839874%, #E39396 64.75644707679749%, 82.37822353839874%, #FFA187 100%)";
const grayDay: string =
    "linear-gradient(to bottom, #BDC0C5 0%, 21.373307704925537%, #9CA3A9 42.746615409851074%, 71.37330770492554%, #788691 100%)";

const darkDay: string =
    "linear-gradient(to top, #9F9F9D 0%, 28.478965163230896%, #5C5D5F 56.95793032646179%, 78.4789651632309%, #1A1B1D 100%)";

const clearNight: string =
    "linear-gradient(to top, #25232E 0%, 15.919812023639679%, #383641 31.839624047279358%, 42.21698194742203%, #353341 52.5943398475647%, 60.96698045730591%, #33313C 69.33962106704712%, 76.29716992378235%, #212026 83.25471878051758%, 91.62735939025879%, #090A04 100%)";

const thunderstorm: string = clearNight;

const timeOfDay2Atmosphere = new Map<TimesOfDay, Map<WeatherType, string>>([
    [
        TimesOfDay.DAY,
        new Map<WeatherType, string>([
            [WeatherType.CLEAR, clearDay],
            [WeatherType.PARTLY_CLOUDY, clearDay],
            [WeatherType.CLOUDY, grayDay],
            [WeatherType.OVERCAST, grayDay],
            [WeatherType.DRIZZLE, grayDay],
            [WeatherType.RAIN, grayDay],
            [WeatherType.THUNDERSTORM, thunderstorm],
            [WeatherType.SNOW, grayDay],
        ]),
    ],
    [
        TimesOfDay.EVENING,

        new Map<WeatherType, string>([
            [WeatherType.CLEAR, clearEvening],
            [WeatherType.PARTLY_CLOUDY, clearEvening],
            [WeatherType.CLOUDY, clearEvening],
            [WeatherType.OVERCAST, darkDay],
            [WeatherType.DRIZZLE, clearEvening],
            [WeatherType.RAIN, darkDay],
            [WeatherType.THUNDERSTORM, thunderstorm],
            [WeatherType.SNOW, darkDay],
        ]),
    ],
    [
        TimesOfDay.NIGHT,
        new Map<WeatherType, string>([
            [WeatherType.CLEAR, clearNight],
            [WeatherType.PARTLY_CLOUDY, clearNight],
            [WeatherType.CLOUDY, clearNight],
            [WeatherType.OVERCAST, clearNight],
            [WeatherType.DRIZZLE, clearNight],
            [WeatherType.RAIN, clearNight],
            [WeatherType.THUNDERSTORM, thunderstorm],
            [WeatherType.SNOW, clearNight],
        ]),
    ],
    [
        TimesOfDay.MORNING,

        new Map<WeatherType, string>([
            [WeatherType.CLEAR, clearMorning],
            [WeatherType.PARTLY_CLOUDY, clearMorning],
            [WeatherType.CLOUDY, grayDay],
            [WeatherType.OVERCAST, grayDay],
            [WeatherType.DRIZZLE, grayDay],
            [WeatherType.RAIN, grayDay],
            [WeatherType.THUNDERSTORM, thunderstorm],
            [WeatherType.SNOW, grayDay],
        ]),
    ],
]);

const Atmosphere = () => {
    const timeOfDay: TimesOfDay = useContext(TimeOfDayContext);
    const currentWeather: ICurrentWeather = useContext(CurrentWeatherInfo);

    return (
        <div
            style={{
                backgroundImage:
                    timeOfDay2Atmosphere
                        .get(timeOfDay)
                        ?.get(id2Type(currentWeather.weatherId)) ?? clearDay,
                position: "absolute",
                width: "100vw",
                height: "100vh",
                top: "0",
                left: "0",
            }}
        ></div>
    );
};

export default Atmosphere;
