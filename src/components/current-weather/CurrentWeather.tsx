import "./CurrentWeather.scss";
import ILocationInfo from "../../interfaces/locationInfo";
import CurrentWeatherBackground from "./CurrentWeatherBackground";
import { useLocationInfoContext } from "../../contexts/location-info/LocationInfo";
import ICurrentWeather from "../../interfaces/currentWeather";
import {
    coordinates2CurrentWeather,
    k2c,
    k2cString,
} from "../../utils/weather-utils";
import { useEffect, useState, useCallback } from "react";
import { capitalizeFirstLetter } from "../../utils/code-utils";

const CurrentWeather = () => {
    const locationInfo: ILocationInfo = useLocationInfoContext();

    const [currentWeather, setCurrentWeather] = useState({} as ICurrentWeather);

    const fetchCurrentWeather = useCallback(async () => {
        setCurrentWeather(
            (await coordinates2CurrentWeather(
                locationInfo.coordinates
            )) as ICurrentWeather
        );
        console.log("fetched weather");
    }, [locationInfo]);

    useEffect(() => {
        fetchCurrentWeather();
    }, [fetchCurrentWeather]);

    return (
        <>
            <CurrentWeatherBackground />
            {currentWeather.weatherDescription && locationInfo && (
                <section className="current-weather">
                    <section className="weather">
                        <div className="city">
                            <i className="fas fa-location-arrow fa-xs"> </i>
                            {" " + locationInfo.city}
                        </div>
                        <br />
                        <div className="temperature">
                            <div className="high-low">
                                <div className="high">
                                    <i className="fas fa-sort-up"></i>
                                    {" " +
                                        k2c(currentWeather.temperature.tempMax)}
                                </div>
                                <div className="low">
                                    <i className="fas fa-sort-down"></i>
                                    {" " +
                                        k2c(currentWeather.temperature.tempMin)}
                                </div>
                            </div>
                            <div className="temp">
                                {k2cString(currentWeather.temperature.temp)}
                            </div>
                            <div className="feels-like">
                                <span className="feels-like-text">
                                    Feels like
                                </span>
                                <span>
                                    {" " +
                                        k2c(
                                            currentWeather.temperature.feelsLike
                                        )}
                                </span>
                            </div>
                        </div>
                        <br />
                        <div className="weather-description">
                            {capitalizeFirstLetter(
                                currentWeather.weatherDescription
                            ) + " "}
                            currently
                        </div>
                    </section>

                    <div className="feels-like"></div>
                    <section className="widgets">
                        <div className="widget humidity"></div>
                        <div className="widget sun-rise-set"></div>
                        <div className="widget wind"></div>
                    </section>
                </section>
            )}
        </>
    );
};

export default CurrentWeather;
