import { WeatherType } from "../enums/weatherType";
import ITemperature from "./temperature";

export default interface ICurrentWeather {
    temperature: ITemperature,

    weatherDescription: string,
    weatherType?: WeatherType,

    pressure: number,

    humidity: number,

    windSpeed: number,
}