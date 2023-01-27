import { IWeather } from "../../interfaces/weather";
import { useCallback, useContext, useEffect, useState } from "react";

import CurrentWeatherInfo from "../../contexts/CurrentWeatherInfo";

import LocationContext from "../../contexts/Location";
import styled from "styled-components";
import { device } from "../../assets/styles/breakpoints";
import { coordinates2Weather } from "../../utils/weather-utils";
import HourlyWeatherInfo from "../../contexts/HourlyWeatherInfo";
import DailyWeatherInfo from "../../contexts/DailyWeatherInfo";
import Background from "../background/Background";
import CurrentWeatherWidget from "../weather-widgets/current/CurrentWeatherWidget";
import HourlyWeatherWidget from "../weather-widgets/hourly/HourlyWeatherWidget";
import DailyWeatherWidget from "../weather-widgets/daily/DailyWeatherWidget";
import NavBar from "../navbar/Navbar";

const WeatherManager = () => {
    const [location, _] = useContext(LocationContext);

    const [weather, setWeather] = useState({} as IWeather);

    const fetchWeather = useCallback(async () => {
        setWeather(
            (await coordinates2Weather(location.coordinates)) as IWeather
        );
    }, [location]);

    useEffect(() => {
        fetchWeather();
    }, [fetchWeather]);

    const FIVE_MINUTES = 300000;
    useEffect(() => {
        setInterval(() => {
            fetchWeather();
        }, FIVE_MINUTES);
    }, []);

    return (
        <>
            {weather &&
                weather.currentWeather &&
                weather.hourlyWeather &&
                weather.dailyWeather && (
                    <CurrentWeatherInfo.Provider value={weather.currentWeather}>
                        <HourlyWeatherInfo.Provider
                            value={weather.hourlyWeather}
                        >
                            <DailyWeatherInfo.Provider
                                value={weather.dailyWeather}
                            >
                                <Background />
                                <Container>
                                    <NavBar />
                                    <Widgets>
                                        <WidgetContainer id="current-weather">
                                            <CurrentWeatherWidget />
                                        </WidgetContainer>
                                        <WidgetContainer id="hourly-weather">
                                            <HourlyWeatherWidget />
                                        </WidgetContainer>
                                        <WidgetContainer id="daily-weather">
                                            <DailyWeatherWidget />
                                        </WidgetContainer>
                                    </Widgets>
                                </Container>
                            </DailyWeatherInfo.Provider>
                        </HourlyWeatherInfo.Provider>
                    </CurrentWeatherInfo.Provider>
                )}
        </>
    );
};

export default WeatherManager;

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    overflow-y: scroll;
`;

const WidgetContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media ${device.tablet} {
        height: 90vh;
    }
    @media ${device.mobileS} {
        margin-top: 10vh;
    }
`;

const Widgets = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: fit-content;

    width: 90vw;
`;
