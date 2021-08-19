import { createContext } from "react";
import { IDailyWeather } from "../interfaces/weather";

const DailyWeatherInfo = createContext<IDailyWeather>({} as IDailyWeather);

export default DailyWeatherInfo;
