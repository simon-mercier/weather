import { useCurrentWeatherInfoContext } from "../../contexts/CurrentWeatherInfo";
import ICurrentWeather from "../../interfaces/currentWeather";
import { capitalizeFirstLetter } from "../../utils/code-utils";
import { k2c } from "../../utils/weather-utils";
import "./MainWeather.scss";

const MainWeatherBlob = () => {
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

export default MainWeatherBlob;
