import { useContext } from "react";
import CurrentWeatherInfo from "../../../contexts/CurrentWeatherInfo";
import WeatherType from "../../../enums/weatherType";
import Clear from "./icons/Clear";
import ICurrentWeather from "../../../interfaces/currentWeather";
import Cloudy from "./icons/Cloudy";
import Overcast from "./icons/Overcast";
import PartlyCloudy from "./icons/PartlyCloudy";
import Rain from "./icons/Rain";
import Snow from "./icons/Snow";
import Thunderstorm from "./icons/Thunderstorm";
import { id2Type } from "../../../utils/weather-utils";
import styled from "styled-components";

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
        <Container>
            {weatherType2Icon.get(id2Type(currentWeather.weatherId))}
        </Container>
    );
};

export default WeatherIcon;

const Container = styled.div`
    width: 15rem;
    height: 15rem;
    margin-left: -3rem;
    margin-top: -3rem;
`;
