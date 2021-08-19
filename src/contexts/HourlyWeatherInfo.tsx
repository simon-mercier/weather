import { createContext } from "react";
import { IHourlyWeather } from "../interfaces/weather";

const HourlyWeatherInfo = createContext<IHourlyWeather>({} as IHourlyWeather);

export default HourlyWeatherInfo;
