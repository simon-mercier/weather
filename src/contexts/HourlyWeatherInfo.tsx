import { createContext } from "react";
import ICurrentWeather from "../interfaces/currentWeather";

const HourlyWeatherInfo = createContext<ICurrentWeather>({} as ICurrentWeather);

export default HourlyWeatherInfo;
