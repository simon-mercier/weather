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

import MainWeather from "../main-weather/MainWeather";

import LocationContext from "../../contexts/Location";
import Location from "../../classes/Location";
import { DEFAULT_LOCATION_COORDINATES } from "../../const";
import TimesOfDay from "../../enums/timesOfDay";
import Atmosphere from "../../assets/styles/atmosphere";
import WeatherType from "../../enums/weatherType";

const CurrentWeather = () => {
    const [location, setLocation]: [
        Location,
        Dispatch<SetStateAction<Location>>
    ] = useContext(LocationContext);

    const [currentWeather, setCurrentWeather] = useState({} as ICurrentWeather);
    location.getTime();
    const fetchCurrentWeather = useCallback(async () => {
        setCurrentWeather(
            (await coordinates2CurrentWeather(
                (await location.getCoordinates()) ??
                    DEFAULT_LOCATION_COORDINATES
            )) as ICurrentWeather
        );
        console.log("fetched weather");
    }, [location]);

    useEffect(() => {
        fetchCurrentWeather();
    }, [fetchCurrentWeather]);

    return (
        <currentWeatherInfo.Provider value={currentWeather}>
            {currentWeather.weatherDescription && location && (
                <div>
                    <Atmosphere
                        timeOfDay={{} as TimesOfDay}
                        weatherType={id2Type(currentWeather.weatherId)}
                    >
                        <div className="main-weather">
                            <MainWeather />
                        </div>
                    </Atmosphere>
                </div>
            )}
        </currentWeatherInfo.Provider>
    );
};

export default CurrentWeather;
