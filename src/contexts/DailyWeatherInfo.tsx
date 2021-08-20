import { createContext } from "react";
import { IDailyWeather } from "../interfaces/weather";

const DailyWeatherInfo = createContext<Array<IDailyWeather>>(
    {} as Array<IDailyWeather>
);

export default DailyWeatherInfo;
