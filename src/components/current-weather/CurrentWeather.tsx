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

import MainWeather from "./main-weather/MainWeather";

import LocationContext from "../../contexts/Location";
import Location from "../../classes/Location";
import Atmosphere from "./atmosphere/Atmosphere";
import CloudAnimation from "./weather-animations/cloud-animation/CloudAnimation";

import TimesOfDay from "../../enums/timesOfDay";
import TimeOfDayContext from "../../contexts/TimeOfDay";
import styled from "styled-components";
import { DEFAULT_LOCATION_COORDINATES } from "../../const";
import { coordinates2CurrentWeather } from "../../utils/weather-utils";
import device from "../../assets/styles/breakpoints";

const CurrentWeather = () => {
    const [location, _]: [Location, Dispatch<SetStateAction<Location>>] =
        useContext(LocationContext);

    const timeOfDay: TimesOfDay = useContext(TimeOfDayContext);

    const [currentWeather, setCurrentWeather] = useState({} as ICurrentWeather);

    const fetchCurrentWeather = useCallback(async () => {
        setCurrentWeather(
            (await coordinates2CurrentWeather(
                (await location.getCoordinates()) ??
                    DEFAULT_LOCATION_COORDINATES
            )) as ICurrentWeather
        );
    }, [location]);

    useEffect(() => {
        fetchCurrentWeather();
    }, [fetchCurrentWeather]);

    return (
        <CurrentWeatherInfo.Provider value={currentWeather}>
            {currentWeather && (
                <Container>
                    <Atmosphere
                        timeOfDay={timeOfDay}
                        currentWeather={currentWeather}
                    />
                    <CloudAnimation />
                    <MainWeatherContainer>
                        <MainWeather />
                    </MainWeatherContainer>
                </Container>
            )}
        </CurrentWeatherInfo.Provider>
    );
};

export default CurrentWeather;

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
`;

const MainWeatherContainer = styled.div`
    display: flex;
    justify-content: center;

    @media ${device.mobileS} {
        margin-top: 30%;
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

//         weatherDescription: "clear",
//         weatherId: 804,

//         pressure: 80,

//         humidity: 80,

//         windSpeed: 50,
//     });
// }, [location]);
