import { useContext } from "react";
import styled from "styled-components";
import CurrentWeatherInfo from "../../contexts/CurrentWeatherInfo";
import PeriodOfDayContext from "../../contexts/PeriodOfDay";
import PeriodsOfDay from "../../enums/periodsOfDay";
import WeatherType from "../../enums/weatherType";
import { ICurrentWeather } from "../../interfaces/weather";
import Atmosphere from "./Atmosphere";
import CloudAnimation from "./weather-animations/CloudAnimation";
import { RainGif, SnowGif } from "./weather-animations/WeatherAnimations";

const Background = () => {
    const currentWeather: ICurrentWeather = useContext(CurrentWeatherInfo);

    const periodOfDay: PeriodsOfDay = useContext(PeriodOfDayContext);

    return (
        <Container>
            <Atmosphere
                periodOfDay={periodOfDay}
                currentWeather={currentWeather}
            />
            {[
                WeatherType.RAIN,
                WeatherType.DRIZZLE,
                WeatherType.THUNDERSTORM,
            ].includes(currentWeather.condition.weatherType) && <RainGif />}
            {currentWeather.condition.weatherType === WeatherType.SNOW && (
                <SnowGif />
            )}
            <CloudAnimation currentWeather={currentWeather} />
        </Container>
    );
};

export default Background;

const Container = styled.section`
    position: fixed;
    top: 0;
    width: 100vw;
`;
