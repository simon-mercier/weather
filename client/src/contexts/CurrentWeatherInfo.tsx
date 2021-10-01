import { createContext } from "react";
import { ICurrentWeather } from "../interfaces/weather";

const CurrentWeatherInfo = createContext<ICurrentWeather>(
    {} as ICurrentWeather
);

export default CurrentWeatherInfo;
