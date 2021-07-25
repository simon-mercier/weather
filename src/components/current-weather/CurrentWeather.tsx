import "./CurrentWeather.scss";

import ICurrentWeather from "../../interfaces/currentWeather";
import { coordinates2CurrentWeather } from "../../utils/weather-utils";
import {
    useEffect,
    useState,
    useCallback,
    useContext,
    Dispatch,
    SetStateAction,
} from "react";

import currentWeatherInfo from "../../contexts/CurrentWeatherInfo";

import MainWeatherBlob from "./MainWeatherBlob";
import LocationBlob from "./LocationBlob";
import LocationContext from "../../contexts/Location";
import Location from "../../classes/Location";
import { DEFAULT_LOCATION_COORDINATES } from "../../const";

const CurrentWeather = () => {
    const [location, setLocation]: [
        Location,
        Dispatch<SetStateAction<Location>>
    ] = useContext(LocationContext);

    const [currentWeather, setCurrentWeather] = useState({} as ICurrentWeather);

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
                    <div className="location-blob">
                        <LocationBlob />
                    </div>
                    <div className="main-weather-blob">
                        <MainWeatherBlob />
                    </div>
                </div>
            )}
        </currentWeatherInfo.Provider>
    );
};

export default CurrentWeather;
