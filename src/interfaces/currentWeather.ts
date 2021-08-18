import WeatherType from "../enums/weatherType";
import ITemperature from "./temperature";

export default interface ICurrentWeather {
    temperature: ITemperature;

    weatherType: WeatherType;

    weatherDescription: string;

    pressure: number;

    humidity: number;

    windSpeed: number;
}
