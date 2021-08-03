import ICurrentWeather from "../../interfaces/currentWeather";
import { coordinates2CurrentWeather } from "../../utils/weather-utils";
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
import { DEFAULT_LOCATION_COORDINATES } from "../../const";
import Atmosphere from "./atmosphere/Atmosphere";
import CloudAnimation from "./weather-animations/cloud-animation/CloudAnimation";

const CurrentWeather = () => {
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

    //         weatherDescription: "clear",
    //         weatherId: 804,

    //         pressure: 80,

    //         humidity: 80,

    //         windSpeed: 50,
    //     });
    // }, [location]);

    useEffect(() => {
        fetchCurrentWeather();
    }, [fetchCurrentWeather]);

    return (
        <CurrentWeatherInfo.Provider value={currentWeather}>
            {currentWeather && (
                <div>
                    <Atmosphere></Atmosphere>
                    <CloudAnimation></CloudAnimation>
                    <div
                        style={{
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <MainWeather />
                    </div>
                </div>
            )}
        </CurrentWeatherInfo.Provider>
    );
};

export default CurrentWeather;
