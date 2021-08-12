import React, { useContext } from "react";
import CurrentWeatherInfo from "../../../contexts/CurrentWeatherInfo";
import WeatherType from "../../../enums/weatherType";
import ICurrentWeather from "../../../interfaces/currentWeather";
import { id2Type } from "../../../utils/weather-utils";
import Clear from "./icons/Clear";
import Cloudy from "./icons/Cloudy";
import Overcast from "./icons/Overcast";
import PartlyCloudy from "./icons/PartlyCloudy";
import Rain from "./icons/Rain";
import Snow from "./icons/Snow";
import Thunderstorm from "./icons/Thunderstorm";

const weatherType2Icon = new Map<WeatherType, any>([
    [WeatherType.CLEAR, <Clear />],
    [WeatherType.PARTLY_CLOUDY, <PartlyCloudy />],
    [WeatherType.CLOUDY, <Cloudy />],
    [WeatherType.OVERCAST, <Overcast />],
    [WeatherType.DRIZZLE, <Rain />],
    [WeatherType.RAIN, <Rain />],
    [WeatherType.SNOW, <Snow />],
    [WeatherType.THUNDERSTORM, <Thunderstorm />],
]);

const WeatherIcon = () => {
    const currentWeather: ICurrentWeather = useContext(CurrentWeatherInfo);
    return (
        <div
            style={{
                width: "12.5rem",
                height: "12.5rem",
                position: "relative",
            }}
        >
            {weatherType2Icon.get(id2Type(currentWeather.weatherId))}
        </div>
    );
};

export default WeatherIcon;
