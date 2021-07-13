import ICoordinates from "../interfaces/coordinates";
import ICurrentWeather from "../interfaces/currentWeather";
import ITemperature from "../interfaces/temperature";

const openWeatherApiKey = "17f10aab8d22d756ce0cbdbfbaef5eb4";
export const coordinates2CurrentWeather = async (
    coordinates: ICoordinates
): Promise<ICurrentWeather | undefined> => {
    return await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${openWeatherApiKey}`
    )
        .then((res) => res.json())
        .then(
            (result) => {
                return {
                    temperature: {
                        temp: result.main.temp,
                        feelsLike: result.main.feels_like ?? undefined,
                        tempMin: result.main.temp_min ?? undefined,
                        tempMax: result.main.temp_max ?? undefined,
                    } as ITemperature,

                    humidity: result.main.humidity,
                    pressure: result.main.pressure,

                    weatherDescription: result.weather[0].description,

                    windSpeed: result.wind.speed,
                } as ICurrentWeather;
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
