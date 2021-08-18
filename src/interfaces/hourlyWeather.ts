import WeatherType from "../enums/weatherType";
import ITemperature from "./temperature";

export default interface IHourlyWeather {
    hourlyTemperature: Array<ITemperature>;
    hourlyWeather: Array<WeatherType>;
}
