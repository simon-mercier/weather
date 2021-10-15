import { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import CurrentWeatherInfo from "../../contexts/CurrentWeatherInfo";
import PeriodOfDay from "../../enums/periodOfDay";
import WeatherType from "../../enums/weatherType";
import { ICurrentWeather } from "../../interfaces/weather";
import { getPeriodsOfDay } from "../../utils/period-of-day-utils";
import Atmosphere from "./Atmosphere";
import CloudAnimation from "./weather-animations/CloudAnimation";
import { RainGif, SnowGif } from "./weather-animations/WeatherAnimations";

const Background = () => {
    const currentWeather: ICurrentWeather = useContext(CurrentWeatherInfo);

    const [periodOfDay, setPeriodOfDay] = useState(PeriodOfDay.DAY);

    const fetchCurrentPeriodOfDay = useCallback(async () => {
        setPeriodOfDay(
            getPeriodsOfDay(currentWeather.sunrise, currentWeather.sunset)
        );
    }, [currentWeather]);

    useEffect(() => {
        fetchCurrentPeriodOfDay();
    }, [fetchCurrentPeriodOfDay]);

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
            <CloudAnimation />
        </Container>
    );
};

export default Background;

const Container = styled.section`
    position: fixed;
    top: 0;
    min-width: 100vw;
    min-height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
`;
