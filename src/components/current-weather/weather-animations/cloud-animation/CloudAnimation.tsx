import Cloud1 from "../../../../assets/png/cloud1.png";
import Cloud2 from "../../../../assets/png/cloud2.png";
import Cloud3 from "../../../../assets/png/cloud3.png";
import Cloud4 from "../../../../assets/png/cloud4.png";
import Cloud5 from "../../../../assets/png/cloud5.png";
import WeatherType from "../../../../enums/weatherType";
import { css, jsx } from "@emotion/react";

import "./CloudAnimation.scss";

interface CloudAnimationProps {
    weatherType: WeatherType;
}
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

const CloudAnimation = (props: CloudAnimationProps) => {
    const clouds = [Cloud1, Cloud2, Cloud3, Cloud4, Cloud5];
    return (
        <div className="clouds">
            {clouds
                .slice(
                    0,
                    weatherType2NumberOfClouds.get(props.weatherType) ??
                        NO_CLOUDS
                )
                .map((cloud, i) => (
                    <img
                        style={{
                            position: "absolute",
                            transform: "scaleY(-1)",
                            width:
                                weatherType2WidthOfClouds.get(
                                    props.weatherType
                                ) ?? NO_CLOUDS,
                            
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
