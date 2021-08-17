import { useContext } from "react";
import styled from "styled-components";
import CurrentWeatherInfo from "../../contexts/CurrentWeatherInfo";
import TimeOfDayContext from "../../contexts/TimeOfDay";
import TimesOfDay from "../../enums/timesOfDay";
import ICurrentWeather from "../../interfaces/currentWeather";
import Atmosphere from "./Atmosphere";
import CloudAnimation from "./weather-animations/CloudAnimation";

const Background = () => {
    const timeOfDay: TimesOfDay = useContext(TimeOfDayContext);
    const currentWeather: ICurrentWeather = useContext(CurrentWeatherInfo);
    return (
        <Container>
            <Atmosphere timeOfDay={timeOfDay} currentWeather={currentWeather} />
            {/* <RainGif /> */}
            <CloudAnimation />
        </Container>
    );
};

export default Background;

const Container = styled.section`
    position: fixed;
    top: 0;
    width: 100%;
`;
