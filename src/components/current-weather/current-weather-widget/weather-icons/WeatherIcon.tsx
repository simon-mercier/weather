import { useContext } from "react";
import CurrentWeatherInfo from "../../../../contexts/CurrentWeatherInfo";
import ICurrentWeather from "../../../../interfaces/currentWeather";
import { id2Type } from "../../../../utils/weather-utils";
import styled from "styled-components";
import { weatherType2Icon } from "../../../../utils/icon-utils";

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
    width: 15em;
    height: 15em;
`;
