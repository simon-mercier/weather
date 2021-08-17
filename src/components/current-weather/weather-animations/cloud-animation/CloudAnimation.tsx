import { useContext } from "react";
import styled from "styled-components";
import Cloud1 from "../../../../assets/png/cloud1.png";
import Cloud2 from "../../../../assets/png/cloud2.png";
import Cloud3 from "../../../../assets/png/cloud3.png";
import Cloud4 from "../../../../assets/png/cloud4.png";
import Cloud5 from "../../../../assets/png/cloud5.png";
import { CloudAnim } from "../../../../assets/styles/animations";
import CurrentWeatherInfo from "../../../../contexts/CurrentWeatherInfo";
import TimeOfDayContext from "../../../../contexts/TimeOfDay";
import TimesOfDay from "../../../../enums/timesOfDay";
import WeatherType from "../../../../enums/weatherType";
import ICurrentWeather from "../../../../interfaces/currentWeather";
import { random, randomMinMax } from "../../../../utils/code-utils";
import { id2Type } from "../../../../utils/weather-utils";

const NO_CLOUDS = 0;
const weatherType2NumberOfClouds = new Map<WeatherType, number>([
    [WeatherType.FEW_CLOUDS, 1],
    [WeatherType.SCATTERED_CLOUDS, 2],
    [WeatherType.BROKEN_CLOUDS, 3],
    [WeatherType.OVERCAST_CLOUDS, 5],
    [WeatherType.DRIZZLE, 5],
    [WeatherType.RAIN, 5],
    [WeatherType.SNOW, 5],
    [WeatherType.THUNDERSTORM, 5],
]);

const weatherType2WidthOfClouds = new Map<WeatherType, string>([
    [WeatherType.FEW_CLOUDS, "30%"],
    [WeatherType.SCATTERED_CLOUDS, "40%"],
    [WeatherType.BROKEN_CLOUDS, "50%"],
    [WeatherType.OVERCAST_CLOUDS, "70%"],
    [WeatherType.DRIZZLE, "50%"],
    [WeatherType.RAIN, "70%"],
    [WeatherType.SNOW, "70%"],
    [WeatherType.THUNDERSTORM, "90%"],
]);

const weatherType2CloudInvertedShade = new Map<WeatherType, string>([
    [WeatherType.FEW_CLOUDS, "0%"],
    [WeatherType.SCATTERED_CLOUDS, "0%"],
    [WeatherType.BROKEN_CLOUDS, "10%"],
    [WeatherType.OVERCAST_CLOUDS, "20%"],
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
        <>
            {clouds
                .slice(
                    0,
                    weatherType2NumberOfClouds.get(
                        id2Type(currentWeather.weatherId)
                    ) ?? NO_CLOUDS
                )
                .map((cloud) => (
                    <Cloud
                        timeOfDay={timeOfDay}
                        currentWeather={currentWeather}
                        src={cloud}
                    />
                ))}
        </>
    );
};

export default CloudAnimation;

interface CloudProps {
    timeOfDay: TimesOfDay;
    currentWeather: ICurrentWeather;
}
const Cloud = styled.img<CloudProps>`
    position: absolute;
    transform: scaleY(-1);
    width: ${(p) =>
        weatherType2WidthOfClouds.get(id2Type(p.currentWeather.weatherId)) ??
        NO_CLOUDS};
    filter: invert(
        ${(p) =>
            p.timeOfDay === TimesOfDay.DAY
                ? weatherType2CloudInvertedShade.get(
                      id2Type(p.currentWeather.weatherId)
                  ) ?? NO_CLOUDS
                : "50%"}
    );
    animation-name: ${CloudAnim};
    animation-duration: ${() => randomMinMax(400, 600)}s;
    animation-delay: ${() => -1 * random(400)}s;
    animation-iteration-count: infinite;
`;
