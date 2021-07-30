import "./CurrentWeather.scss";

import ICurrentWeather from "../../interfaces/currentWeather";
import { coordinates2CurrentWeather, id2Type } from "../../utils/weather-utils";
import {
    useEffect,
    useState,
    useCallback,
    useContext,
    Dispatch,
    SetStateAction,
} from "react";

import currentWeatherInfo from "../../contexts/CurrentWeatherInfo";

import MainWeather from "./main-weather/MainWeather";

import LocationContext from "../../contexts/Location";
import Location from "../../classes/Location";
import { DEFAULT_LOCATION_COORDINATES } from "../../const";
import TimesOfDay from "../../enums/timesOfDay";
import Atmosphere from "../../assets/styles/atmosphere";
import CloudAnimation from "./weather-animations/cloud-animation/CloudAnimation";

const CurrentWeather = () => {
    const [location, setLocation]: [
        Location,
        Dispatch<SetStateAction<Location>>
    ] = useContext(LocationContext);

    const [currentWeather, setCurrentWeather] = useState({} as ICurrentWeather);
    const [timeOfDay, setTimeOfDay] = useState(TimesOfDay.DAY);

    const fetchCurrentWeather = useCallback(async () => {
        setCurrentWeather(
            (await coordinates2CurrentWeather(
                (await location.getCoordinates()) ??
                    DEFAULT_LOCATION_COORDINATES
            )) as ICurrentWeather
        );
        console.log("fetched weather");
    }, [location]);

    const fetchCurrentTimeOfDay = useCallback(async () => {
        setTimeOfDay((await location.getTimeOfDay()) ?? TimesOfDay.DAY);
    }, [location]);

    useEffect(() => {
        fetchCurrentWeather();
    }, [fetchCurrentWeather]);

    useEffect(() => {
        fetchCurrentTimeOfDay();
    }, [fetchCurrentTimeOfDay]);
    return (
        <currentWeatherInfo.Provider value={currentWeather}>
            {currentWeather.weatherDescription && location && (
                <div>
                    <Atmosphere
                        timeOfDay={timeOfDay}
                        weatherType={id2Type(currentWeather.weatherId)}
                    ></Atmosphere>
                    <CloudAnimation
                        weatherType={id2Type(currentWeather.weatherId)}
                    ></CloudAnimation>
                    <div className="main-weather">
                        <MainWeather />
                    </div>
                </div>
            )}
        </currentWeatherInfo.Provider>
    );
};

export default CurrentWeather;
