import ICurrentWeather from "../../interfaces/currentWeather";
import {
    Dispatch,
    SetStateAction,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";

import CurrentWeatherInfo from "../../contexts/CurrentWeatherInfo";

import CurrentWeatherWidget from "../weather-widgets/CurrentWeatherWidget";

import LocationContext from "../../contexts/Location";
import Location from "../../classes/Location";

import styled from "styled-components";
import device from "../../assets/styles/breakpoints";
import Background from "../background/Background";
import { coordinates2CurrentWeather } from "../../utils/weather-utils";
import { DEFAULT_LOCATION_COORDINATES } from "../../const";

const Weather = () => {
    const [location, _]: [Location, Dispatch<SetStateAction<Location>>] =
        useContext(LocationContext);

    const [currentWeather, setCurrentWeather] = useState({} as ICurrentWeather);

    const fetchCurrentWeather = useCallback(async () => {
        setCurrentWeather(
            (await coordinates2CurrentWeather(
                (await location.getCoordinates()) ??
                    DEFAULT_LOCATION_COORDINATES
            )) as ICurrentWeather
        );
    }, [location]);

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

    useEffect(() => {
        fetchCurrentWeather();
    }, [fetchCurrentWeather]);

    return (
        <Container>
            <Background currentWeather={currentWeather} />
            <CurrentWeatherInfo.Provider value={currentWeather}>
                {currentWeather && (
                    <CurrentWeatherWidgetContainer>
                        <CurrentWeatherWidget />
                    </CurrentWeatherWidgetContainer>
                )}
            </CurrentWeatherInfo.Provider>
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

const CurrentWeatherWidgetContainer = styled.div`
    display: flex;
    justify-content: center;

    @media ${device.mobileS} {
        margin-top: 30%;
        max-width: 90vw;
    }

    @media ${device.tablet} {
        margin-top: 10%;
    }
`;
