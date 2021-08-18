import { useContext } from "react";
import styled from "styled-components";
import CurrentWeatherInfo from "../../contexts/CurrentWeatherInfo";
import TimeOfDayContext from "../../contexts/TimeOfDay";
import TimesOfDay from "../../enums/timesOfDay";
import WeatherType from "../../enums/weatherType";
import ICurrentWeather from "../../interfaces/currentWeather";
import { id2Type } from "../../utils/weather-utils";
import Atmosphere from "./Atmosphere";
import { RainGif, SnowGif } from "./weather-animations/WeatherAnimations";
import CloudAnimation from "./weather-animations/CloudAnimation";

const Background = () => {
    const timeOfDay: TimesOfDay = useContext(TimeOfDayContext);
    const currentWeather: ICurrentWeather = useContext(CurrentWeatherInfo);
    return (
        <Container>
            <Atmosphere timeOfDay={timeOfDay} currentWeather={currentWeather} />
            {[
                WeatherType.RAIN,
                WeatherType.DRIZZLE,
                WeatherType.THUNDERSTORM,
            ].includes(id2Type(currentWeather.weatherId)) && <RainGif />}
            {id2Type(currentWeather.weatherId) === WeatherType.SNOW && (
                <SnowGif />
            )}
            <CloudAnimation />
        </Container>
    );
};

export default Background;

const Container = styled.section`
    position: fixed;
    top: 0;
    width: 100vw;
`;
