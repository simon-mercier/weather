import React from "react";
import CurrentWeatherBlob from "../../assets/svg/Asset 7.svg";
import { useCurrentWeatherInfoContext } from "../../contexts/CurrentWeatherInfo";
import ICurrentWeather from "../../interfaces/currentWeather";
import { capitalizeFirstLetter } from "../../utils/code-utils";
import { k2c } from "../../utils/weather-utils";
import "./MainWeatherBlob.scss";
import { CSSTransition } from "react-transition-group";

const MainWeatherBlob = () => {
    const currentWeather: ICurrentWeather = useCurrentWeatherInfoContext();
    return (
        <section className="container">
            <img className="blob" src={CurrentWeatherBlob} />

            {/* <section className="weather">
                <div className="temperature">
                    <span>{k2c(currentWeather?.temperature?.temp)}</span>
                    <span className="unit">°C</span>
                </div>
                <div className="weather-description">
                    {capitalizeFirstLetter(currentWeather?.weatherDescription)}
                </div>
            </section> */}
        </section>
    );
};

export default MainWeatherBlob;
