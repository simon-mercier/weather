import { createContext, useContext } from "react";
import ICurrentWeather from "../../interfaces/currentWeather";

const currentWeatherInfo = createContext<ICurrentWeather>(
    {} as ICurrentWeather
);

export const useCurrentWeatherInfoContext = () =>
    useContext(currentWeatherInfo);

export default currentWeatherInfo;
