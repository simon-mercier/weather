import { useContext } from "react";
import CurrentWeatherInfo from "../../../contexts/CurrentWeatherInfo";
import WeatherType from "../../../enums/weatherType";
import Clear from "./icons/Clear";
import ICurrentWeather from "../../../interfaces/currentWeather";
import ScattteredClouds from "./icons/ScatteredClouds";
import Overcast from "./icons/Overcast";
import FewClouds from "./icons/FewClouds";
import Rain from "./icons/Rain";
import Snow from "./icons/Snow";
import Thunderstorm from "./icons/Thunderstorm";
import { id2Type } from "../../../utils/weather-utils";
import styled from "styled-components";
import device from "../../../assets/styles/breakpoints";
import BrokenClouds from "./icons/BrokenClouds";

const weatherType2Icon = new Map<WeatherType, any>([
    [WeatherType.CLEAR_SKY, <Clear />],
    [WeatherType.FEW_CLOUDS, <FewClouds />],
    [WeatherType.SCATTERED_CLOUDS, <ScattteredClouds />],
    [WeatherType.BROKEN_CLOUDS, <BrokenClouds />],
    [WeatherType.OVERCAST_CLOUDS, <Overcast />],
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
    margin-top: -3rem;

    @media ${device.mobileS} {
        margin-left: 0rem;
    }

    @media ${device.tablet} {
        margin-left: -3rem;
    }
`;
