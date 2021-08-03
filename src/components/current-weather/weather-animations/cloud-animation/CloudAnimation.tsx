import { useContext } from "react";
import Cloud1 from "../../../../assets/png/cloud1.png";
import Cloud2 from "../../../../assets/png/cloud2.png";
import Cloud3 from "../../../../assets/png/cloud3.png";
import Cloud4 from "../../../../assets/png/cloud4.png";
import Cloud5 from "../../../../assets/png/cloud5.png";
import CurrentWeatherInfo from "../../../../contexts/CurrentWeatherInfo";
import TimeOfDayContext from "../../../../contexts/TimeOfDay";
import TimesOfDay from "../../../../enums/timesOfDay";
import WeatherType from "../../../../enums/weatherType";
import ICurrentWeather from "../../../../interfaces/currentWeather";
import { id2Type } from "../../../../utils/weather-utils";

import "./CloudAnimation.scss";

const NO_CLOUDS = 0;
const weatherType2NumberOfClouds = new Map<WeatherType, number>([
    [WeatherType.PARTLY_CLOUDY, 2],
    [WeatherType.CLOUDY, 3],
    [WeatherType.OVERCAST, 5],
    [WeatherType.DRIZZLE, 5],
    [WeatherType.RAIN, 5],
    [WeatherType.SNOW, 5],
    [WeatherType.THUNDERSTORM, 5],
]);

const weatherType2WidthOfClouds = new Map<WeatherType, string>([
    [WeatherType.PARTLY_CLOUDY, "30%"],
    [WeatherType.CLOUDY, "50%"],
    [WeatherType.OVERCAST, "70%"],
    [WeatherType.DRIZZLE, "50%"],
    [WeatherType.RAIN, "70%"],
    [WeatherType.SNOW, "70%"],
    [WeatherType.THUNDERSTORM, "90%"],
]);

const weatherType2CloudInvertedShade = new Map<WeatherType, string>([
    [WeatherType.PARTLY_CLOUDY, "0%"],
    [WeatherType.CLOUDY, "10%"],
    [WeatherType.OVERCAST, "20%"],
    [WeatherType.DRIZZLE, "30%"],
    [WeatherType.RAIN, "40%"],
    [WeatherType.SNOW, "30%"],
    [WeatherType.THUNDERSTORM, "70%"],
]);

const CloudAnimation = () => {
    const clouds = [Cloud1, Cloud2, Cloud3, Cloud4, Cloud5];
    const timeOfDay: TimesOfDay = useContext(TimeOfDayContext);
    const currentWeather: ICurrentWeather = useContext(CurrentWeatherInfo);
    return (
        <div className="clouds">
            {clouds
                .slice(
                    0,
                    weatherType2NumberOfClouds.get(
                        id2Type(currentWeather.weatherId)
                    ) ?? NO_CLOUDS
                )
                .map((cloud, i) => (
                    <img
                        style={{
                            position: "absolute",
                            transform: "scaleY(-1)",
                            width:
                                weatherType2WidthOfClouds.get(
                                    id2Type(currentWeather.weatherId)
                                ) ?? NO_CLOUDS,
                            filter:
                                "invert(" +
                                (timeOfDay === TimesOfDay.DAY
                                    ? weatherType2CloudInvertedShade.get(
                                          id2Type(currentWeather.weatherId)
                                      ) ?? NO_CLOUDS
                                    : "50%") +
                                ")",
                        }}
                        className={"cloud" + i}
                        key={i}
                        src={cloud}
                    ></img>
                ))}
        </div>
    );
};

export default CloudAnimation;
