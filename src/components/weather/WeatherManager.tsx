import { IWeather } from "../../interfaces/weather";
import {
    Dispatch,
    SetStateAction,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";

import CurrentWeatherInfo from "../../contexts/CurrentWeatherInfo";

import CurrentWeatherWidget from "../weather-widgets/current/CurrentWeatherWidget";

import LocationContext from "../../contexts/Location";
import Location from "../../classes/Location";

import styled from "styled-components";
import device from "../../assets/styles/breakpoints";
import Background from "../background/Background";
import { coordinates2Weather } from "../../utils/weather-utils";
import { DEFAULT_LOCATION_COORDINATES } from "../../const";
import HourlyWeatherInfo from "../../contexts/HourlyWeatherInfo";
import DailyWeatherInfo from "../../contexts/DailyWeatherInfo";
import HourlyWeatherWidget from "../weather-widgets/hourly/HourlyWeatherWidget";

const Weather = () => {
    const [location, _]: [Location, Dispatch<SetStateAction<Location>>] =
        useContext(LocationContext);

    const [weather, setWeather] = useState({} as IWeather);

    const fetchWeather = useCallback(async () => {
        setWeather(
            (await coordinates2Weather(
                (await location.getCoordinates()) ??
                    DEFAULT_LOCATION_COORDINATES
            )) as IWeather
        );
    }, [location]);

    useEffect(() => {
        fetchWeather();
    }, [fetchWeather]);

    return (
        <Container>
            {weather && weather.currentWeather && (
                <>
                    <Background currentWeather={weather.currentWeather} />
                    <Widgets>
                        <CurrentWeatherInfo.Provider
                            value={weather.currentWeather}
                        >
                            {weather.currentWeather && <CurrentWeatherWidget />}
                        </CurrentWeatherInfo.Provider>

                        <HourlyWeatherInfo.Provider
                            value={weather.hourlyWeather}
                        >
                            {weather.hourlyWeather && <HourlyWeatherWidget />}
                        </HourlyWeatherInfo.Provider>

                        <DailyWeatherInfo.Provider value={weather.dailyWeather}>
                            {weather.dailyWeather && <></>}
                        </DailyWeatherInfo.Provider>
                    </Widgets>
                </>
            )}
        </Container>
    );
};

export default Weather;

const Container = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100vw;
`;
const Widgets = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${device.mobileS} {
        margin-top: 30%;
        max-width: 90vw;
    }

    @media ${device.tablet} {
        margin-top: 10%;
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
