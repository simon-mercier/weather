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
import styled from "styled-components";

const Widget = styled.div`
    width: 150px;
    height: 150px;
    padding: 8px;
    margin: 8px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.4);
`;
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
            {currentWeather.weatherDescription && locationInfo && (
                <section className="current-weather">
                    <section className="weather">
                        <div className="city">
                            <i className="fas fa-location-arrow fa-xs"> </i>
                            <span className="city-text">
                                {" " + locationInfo.city}
                            </span>
                        </div>
                        <div className="temperature">
                            <div className="high-low">
                                <div className="high">
                                    <span className="high-text">high</span>
                                    {k2c(currentWeather.temperature.tempMax)}
                                </div>
                                <div className="low">
                                    <span className="low-text">low</span>
                                    {k2c(currentWeather.temperature.tempMin)}
                                </div>
                            </div>
                            <div className="temp">
                                <span>
                                    {k2c(currentWeather.temperature.temp)}
                                </span>
                                <span className="c">°C</span>
                            </div>
                            <div className="feels-like">
                                <span className="feels-like-text">
                                    feels
                                    <br />
                                    like
                                </span>
                                <span>
                                    {" " +
                                        k2c(
                                            currentWeather.temperature.feelsLike
                                        )}
                                </span>
                            </div>
                        </div>
                        <div className="weather-description">
                            {capitalizeFirstLetter(
                                currentWeather.weatherDescription
                            ) + " "}
                            currently
                        </div>
                    </section>
                    <section className="widgets">
                        <Widget />
                        <Widget />
                        <Widget />
                    </section>
                </section>
            )}

            <CurrentWeatherBackground id={currentWeather.weatherId} />
        </>
    );
};

export default CurrentWeather;
