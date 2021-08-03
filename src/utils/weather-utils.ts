import WeatherType from "../enums/weatherType";
import ICoordinates from "../interfaces/coordinates";
import ICurrentWeather from "../interfaces/currentWeather";
import ITemperature from "../interfaces/temperature";
import { fetchApi } from "./api-utils";

const openWeatherApiKey = "17f10aab8d22d756ce0cbdbfbaef5eb4";
export const coordinates2CurrentWeather = async (
    coordinates: ICoordinates
): Promise<ICurrentWeather | undefined> => {
    return await fetchApi<ICoordinates>(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${openWeatherApiKey}`,
        coordinates
    ).then(
        (result) => {
            return result
                ? ({
                      temperature: {
                          temp: result.main.temp ?? undefined,
                          feelsLike: result.main.feels_like ?? undefined,
                          tempMin: result.main.temp_min ?? undefined,
                          tempMax: result.main.temp_max ?? undefined,
                      } as ITemperature,

                      humidity: result.main.humidity,
                      pressure: result.main.pressure,

                      weatherId: result.weather[0].id,
                      weatherDescription: result.weather[0].description,

                      windSpeed: result.wind.speed,
                  } as ICurrentWeather)
                : undefined;
        },
        (error) => {
            console.error(error);
            return undefined;
        }
    );
};

export const k2c = (kelvin: number) => Math.round(kelvin - 273.15);
export const k2cString = (kelvin: number) => `${k2c(kelvin)}°C`;

export const k2f = (kelvin: number) => Math.round(kelvin * (9 / 5) - 459.67);
export const k2fString = (kelvin: number) => `${k2f(kelvin)}°F`;

const id2WeatherType = new Map<number, WeatherType>([
    [200, WeatherType.THUNDERSTORM],
    [201, WeatherType.THUNDERSTORM],
    [202, WeatherType.THUNDERSTORM],
    [210, WeatherType.THUNDERSTORM],
    [211, WeatherType.THUNDERSTORM],
    [212, WeatherType.THUNDERSTORM],
    [221, WeatherType.THUNDERSTORM],
    [230, WeatherType.THUNDERSTORM],
    [231, WeatherType.THUNDERSTORM],
    [232, WeatherType.THUNDERSTORM],

    [300, WeatherType.DRIZZLE],
    [301, WeatherType.DRIZZLE],
    [302, WeatherType.DRIZZLE],
    [310, WeatherType.DRIZZLE],
    [311, WeatherType.DRIZZLE],
    [312, WeatherType.DRIZZLE],
    [313, WeatherType.DRIZZLE],
    [314, WeatherType.DRIZZLE],
    [321, WeatherType.DRIZZLE],

    [500, WeatherType.RAIN],
    [501, WeatherType.RAIN],
    [502, WeatherType.RAIN],
    [503, WeatherType.RAIN],
    [504, WeatherType.RAIN],
    [511, WeatherType.RAIN],
    [520, WeatherType.RAIN],
    [521, WeatherType.RAIN],
    [522, WeatherType.RAIN],
    [531, WeatherType.RAIN],

    [600, WeatherType.SNOW],
    [601, WeatherType.SNOW],
    [602, WeatherType.SNOW],
    [610, WeatherType.SNOW],
    [611, WeatherType.SNOW],
    [612, WeatherType.SNOW],
    [613, WeatherType.SNOW],
    [615, WeatherType.SNOW],
    [616, WeatherType.SNOW],
    [620, WeatherType.SNOW],
    [621, WeatherType.SNOW],
    [622, WeatherType.SNOW],

    [701, WeatherType.DRIZZLE],
    [711, WeatherType.CLEAR],
    [721, WeatherType.CLEAR],
    [731, WeatherType.CLEAR],
    [741, WeatherType.CLEAR],
    [751, WeatherType.CLEAR],
    [761, WeatherType.CLEAR],
    [762, WeatherType.CLEAR],
    [771, WeatherType.RAIN],
    [781, WeatherType.THUNDERSTORM],

    [800, WeatherType.CLEAR],

    [801, WeatherType.PARTLY_CLOUDY],
    [802, WeatherType.PARTLY_CLOUDY],
    [803, WeatherType.CLOUDY],
    [804, WeatherType.OVERCAST],
]);
export const id2Type = (weatherId: number): WeatherType =>
    id2WeatherType.get(weatherId) ?? WeatherType.CLEAR;
