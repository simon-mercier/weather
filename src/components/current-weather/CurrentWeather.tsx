import "./CurrentWeather.scss";
import CurrentWeatherBackground from "./CurrentWeatherBackground";

import ICurrentWeather from "../../interfaces/currentWeather";
import { coordinates2CurrentWeather, k2c } from "../../utils/weather-utils";
import {
    useEffect,
    useState,
    useCallback,
    useContext,
    Dispatch,
    SetStateAction,
} from "react";
import { capitalizeFirstLetter } from "../../utils/code-utils";
import styled from "styled-components";
import TimesOfDay from "../../enums/timesOfDay";
import WeatherType from "../../enums/weatherType";
import TimeOfDay from "./CurrentWeatherAtmosphere";
import currentWeatherInfo from "../../contexts/CurrentWeatherInfo";
import { ReactComponent as CurrentWeatherBlob } from "../../assets/svg/current-weather-blob.svg";
import MainWeatherBlob from "./MainWeatherBlob";
import LocationBlob from "./LocationBlob";
import LocationContext from "../../contexts/Location";
import Location from "../../classes/Location";
import { DEFAULT_LOCATION_COORDINATES } from "../../const";
// const Widget = styled.div`
//     width: 150px;
//     height: 150px;
//     padding: 8px;
//     margin: 8px;
//     border-radius: 8px;
//     background-color: rgba(255, 255, 255, 0.4);
//     box-shadow: 0 0 1rem rgba(58, 57, 57, 0.2);
// `;
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
            {/* <TimeOfDay
                timeOfDay={TimesOfDay.DAY}
                weatherType={WeatherType.CLEAR}
            /> */}
            {/* <CurrentWeatherBackground id={currentWeather.weatherId} /> */}

            {currentWeather.weatherDescription && location && (
                <div>
                    <LocationBlob />
                    <MainWeatherBlob />
                </div>

                // <div className="current-weather">
                //     <section className="weather-main">
                //         <CurrentWeatherBlob className="blob" />
                //         <div className="city">
                //             <i className="fas fa-location-arrow fa-xs"> </i>
                //             <span className="city-text">
                //                 {" " + locationInfo.city}
                //             </span>
                //         </div>
                //         <div className="temperature">
                //             <div className="temp">
                //                 <span>
                //                     {k2c(currentWeather.temperature.temp)}
                //                 </span>
                //                 <span className="unit">°C</span>
                //             </div>
                //             <div className="weather-description">
                //                 {capitalizeFirstLetter(
                //                     currentWeather.weatherDescription
                //                 )}
                //             </div>
                //         </div>
                //     </section>
                //     <section className="weather-other">
                //         <div className="high-low">
                //             <div className="high">
                //                 <span className="high-text">high</span>
                //                 {k2c(currentWeather.temperature.tempMax)}
                //             </div>
                //             <div className="low">
                //                 <span className="low-text">low</span>
                //                 {k2c(currentWeather.temperature.tempMin)}
                //             </div>
                //         </div>

                //         <div className="feels-like-humidity">
                //             <div className="feels-like">
                //                 <span className="feels-like-text">
                //                     feels like
                //                 </span>
                //                 <span>
                //                     {" " +
                //                         k2c(
                //                             currentWeather.temperature.feelsLike
                //                         )}
                //                 </span>
                //             </div>
                //             <div className="humidity">
                //                 <span className="humidity-text">humidity</span>
                //                 <span>
                //                     {currentWeather.humidity}
                //                     <span className="unit">%</span>
                //                 </span>
                //             </div>
                //         </div>
                //     </section>
                // </div>
            )}
        </currentWeatherInfo.Provider>
    );
};

export default CurrentWeather;
