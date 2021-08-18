import { createContext } from "react";
import ICurrentWeather from "../interfaces/currentWeather";

const CurrentWeatherInfo = createContext<ICurrentWeather>(
    {} as ICurrentWeather
);

export default CurrentWeatherInfo;
