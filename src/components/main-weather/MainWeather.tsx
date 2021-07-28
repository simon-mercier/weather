import { useCurrentWeatherInfoContext } from "../../contexts/CurrentWeatherInfo";
import ICurrentWeather from "../../interfaces/currentWeather";
import { capitalizeFirstLetter } from "../../utils/code-utils";
import { k2c } from "../../utils/weather-utils";
import "./MainWeather.scss";
import Cloud1 from "../../assets/icons/Cloud1";
import Cloud2 from "../../assets/icons/Cloud2";
const MainWeather = () => {
    const currentWeather: ICurrentWeather = useCurrentWeatherInfoContext();
    return (
        <section className="main-weather-container">
            {currentWeather && (
                <>
                    <section className="temperature">
                        <div className="temp">
                            {k2c(currentWeather.temperature.temp)}°
                        </div>
                        <br />
                        <div className="feels-like">
                            feels like{" "}
                            {k2c(currentWeather.temperature.feelsLike)}°
                        </div>
                        <br />
                        <div className="high-low">
                            with a high of{" "}
                            {k2c(currentWeather.temperature.tempMax)}
                            °
                            <br /> and a low of{" "}
                            {k2c(currentWeather.temperature.tempMin)}°
                        </div>
                    </section>
                    <section className="weather">
                        <div className="weather-icons">
                            <div className="cloud1">
                                <Cloud1 />
                            </div>

                            <div className="cloud2">
                                <Cloud2 />
                            </div>
                        </div>

                        <div className="weather-description">
                            {capitalizeFirstLetter(
                                currentWeather.weatherDescription
                            )}
                        </div>
                    </section>
                </>
            )}
        </section>
    );
};

export default MainWeather;
