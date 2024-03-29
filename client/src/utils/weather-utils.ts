import UnitType from "../enums/unit";
import WeatherType from "../enums/weatherType";
import ICoordinates from "../interfaces/coordinates";
import {
    ICurrentWeather,
    IDailyWeather,
    IHourlyWeather,
    IWeather,
} from "../interfaces/weather";
import ITemperature from "../interfaces/temperature";
import { API, fetchApi } from "./api-utils";
import ICondition from "../interfaces/condition";
import { MILLISECONDS_IN_SECONDS, OFFSET_TORONTO } from "../const";

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

    [701, WeatherType.HAZE],
    [711, WeatherType.SMOKE],
    [721, WeatherType.HAZE],
    [731, WeatherType.SMOKE],
    [741, WeatherType.HAZE],
    [751, WeatherType.SMOKE],
    [761, WeatherType.SMOKE],
    [762, WeatherType.SMOKE],
    [771, WeatherType.RAIN],
    [781, WeatherType.THUNDERSTORM],

    [800, WeatherType.CLEAR_SKY],

    [801, WeatherType.FEW_CLOUDS],
    [802, WeatherType.SCATTERED_CLOUDS],
    [803, WeatherType.BROKEN_CLOUDS],
    [804, WeatherType.OVERCAST_CLOUDS],
]);
export const id2Type = (weatherId: number): WeatherType =>
    id2WeatherType.get(weatherId) ?? WeatherType.CLEAR_SKY;

export const coordinates2Weather = async (
    coordinates: ICoordinates
): Promise<IWeather | undefined> => {
    return await fetchApi(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.latitude}&lon=${coordinates.longitude}&exclude=minutely,alerts&appid=`,
        API.OPENWEATHER
    ).then(
        (result) => {
            return result
                ? ({
                      currentWeather: {
                          temperature: {
                              temp: result.current.temp,
                              feelsLike: result.current.feels_like,
                              tempMin: result.daily[0].temp.min,
                              tempMax: result.daily[0].temp.max,
                          } as ITemperature,

                          condition: {
                              weatherType: id2Type(
                                  result.current.weather[0].id
                              ),
                              weatherDescription:
                                  result.current.weather[0].description,
                          } as ICondition,

                          humidity: result.current.humidity,
                          clouds: result.current.clouds,
                          uvi: result.current.uvi,
                          sunrise: new Date(result.current.sunrise * 1000),
                          sunset: new Date(result.current.sunset * 1000),
                      } as ICurrentWeather,

                      hourlyWeather: result.hourly.map((hour: any) => {
                          return {
                              hourlyTemperature: {
                                  temp: hour.temp,
                              } as ITemperature,

                              hourlyWeather: {
                                  weatherType: id2Type(hour.weather[0].id),
                                  probabilityOfPrecipitation: hour.pop,
                              } as ICondition,

                              date: new Date(
                                  (hour.dt +
                                      result.timezone_offset +
                                      OFFSET_TORONTO) *
                                      MILLISECONDS_IN_SECONDS
                              ),
                          } as IHourlyWeather;
                      }) as Array<IHourlyWeather>,

                      dailyWeather: result.daily.map((day: any) => {
                          return {
                              dailyTemperature: {
                                  tempMin: day.temp.min,
                                  tempMax: day.temp.max,
                              } as ITemperature,

                              dailyWeather: {
                                  weatherType: id2Type(day.weather[0].id),
                                  probabilityOfPrecipitation: day.pop,
                              } as ICondition,

                              date: new Date(day.dt * 1000),
                          } as IDailyWeather;
                      }) as Array<IDailyWeather>,
                  } as IWeather)
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

export const k2unit = (kelvin: number, unit: UnitType) =>
    unit === UnitType.C ? k2c(kelvin) : k2f(kelvin);
