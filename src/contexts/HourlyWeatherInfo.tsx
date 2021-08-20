import { createContext } from "react";
import { IHourlyWeather } from "../interfaces/weather";

const HourlyWeatherInfo = createContext<Array<IHourlyWeather>>(
    {} as Array<IHourlyWeather>
);

export default HourlyWeatherInfo;
