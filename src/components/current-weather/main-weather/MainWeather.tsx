import { useContext } from "react";
import CurrentWeatherInfo from "../../../contexts/CurrentWeatherInfo";
import ICurrentWeather from "../../../interfaces/currentWeather";
import { capitalizeFirstLetter } from "../../../utils/code-utils";
import { k2c } from "../../../utils/weather-utils";
import WeatherIcon from "../weather-icons/WeatherIcon";
import "./MainWeather.scss";

const MainWeather = () => {
    const currentWeather: ICurrentWeather = useContext(CurrentWeatherInfo);
    return (
        <section className="main-weather-container">
            {currentWeather &&
                currentWeather.temperature &&
                currentWeather.weatherDescription && (
                    <>
                        <section className="temperature">
                            <div className="temp">
                                {k2c(currentWeather.temperature.temp)}°
                            </div>
                            <div>
                                <div className="feels-like">
                                    feels like{" "}
                                    {k2c(currentWeather.temperature.feelsLike)}°
                                </div>

                                <div className="high-low">
                                    with a high of{" "}
                                    {k2c(currentWeather.temperature.tempMax)}
                                    °
                                    <br /> and a low of{" "}
                                    {k2c(currentWeather.temperature.tempMin)}°
                                </div>
                            </div>
                        </section>
                        <section className="weather">
                            <WeatherIcon />
                            <div>
                                <div className="weather-description">
                                    {capitalizeFirstLetter(
                                        currentWeather.weatherDescription
                                    )}
                                </div>

                                <div className="high-low">
                                    with a high of{" "}
                                    {k2c(currentWeather.temperature.tempMax)}
                                    °
                                    <br /> and a low of{" "}
                                    {k2c(currentWeather.temperature.tempMin)}°
                                </div>
                            </div>
                        </section>
                    </>
                )}
        </section>
    );
};

export default MainWeather;
