import { IWeather } from "../../interfaces/weather";
import { useCallback, useContext, useEffect, useState } from "react";

import CurrentWeatherInfo from "../../contexts/CurrentWeatherInfo";

import LocationContext from "../../contexts/Location";
import styled from "styled-components";
import device from "../../assets/styles/breakpoints";
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
                                        <CurrentWeatherWidget />

                                        <HourlyWeatherWidget />

                                        <DailyWeatherWidget />
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
`;

const Widgets = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: fit-content;

    @media ${device.mobileS} {
        margin-top: 35%;
        max-width: 90vw;
    }

    @media ${device.tablet} {
        margin-top: 10%;
        width: min-content;
    }
`;

// const fetchCurrentWeather = useCallback(async () => {
//     setCurrentWeather({
//         temperature: {
//             temp: 293,
//             feelsLike: 293,
//             tempMin: 293,
//             tempMax: 293,
//         },
//         weatherDescription: "TEST",
//         weatherId: 803,
//         pressure: 80,
//         humidity: 80,
//         windSpeed: 50,
//     });
// }, [location]);
