import "./CurrentWeatherBackground.scss";

import Cloud1 from "../../assets/svg/cloud-1.svg";
import Cloud2 from "../../assets/svg/cloud-2.svg";
import Cloud3 from "../../assets/svg/cloud-3.svg";
import Cloud4 from "../../assets/svg/cloud-4 .svg";
import LargeCloud1 from "../../assets/svg/large-cloud-1.svg";
import LargeCloud2 from "../../assets/svg/large-cloud-2.svg";
import LargeCloud3 from "../../assets/svg/large-cloud-3.svg";
import LargeCloud4 from "../../assets/svg/large-cloud-4.svg";

import DarkCloud1 from "../../assets/svg/dark-cloud-1.svg";
import DarkCloud2 from "../../assets/svg/dark-cloud-2.svg";
import DarkCloud3 from "../../assets/svg/dark-cloud-3.svg";
import DarkCloud4 from "../../assets/svg/dark-cloud-4.svg";
import DarkLargeCloud1 from "../../assets/svg/large-dark-cloud-1.svg";
import DarkLargeCloud2 from "../../assets/svg/large-dark-cloud-2.svg";
import DarkLargeCloud3 from "../../assets/svg/large-dark-cloud-3.svg";
import DarkLargeCloud4 from "../../assets/svg/large-dark-cloud-4.svg";

import { Cloud, Distance, Sun } from "./CurrentWeatherBackgroundStyles";
import { WeatherType } from "../../enums/weatherType";

const CurrentWeatherBackground = () => {
    return watherConditionMap.get(WeatherType.CLOUDY) as JSX.Element;
};

export default CurrentWeatherBackground;

const partiallyCloudy: JSX.Element = (
    <div className="partially-cloudy">
        <Sun />
        <Cloud source={LargeCloud1} distance={Distance.FAR} />
        <Cloud source={LargeCloud2} distance={Distance.FAR} />
        <Cloud source={LargeCloud3} distance={Distance.FAR} />
        <Cloud source={LargeCloud4} distance={Distance.FAR} />
        <Cloud source={Cloud1} distance={Distance.FAR} />
        <Cloud source={Cloud2} distance={Distance.FAR} />
        <Cloud source={Cloud1} distance={Distance.MEDIUM} />
        <Cloud source={Cloud2} distance={Distance.CLOSE} />
    </div>
);

const cloudy: JSX.Element = (
    <div className="cloudy">
        <Cloud source={LargeCloud1} distance={Distance.FAR} />
        <Cloud source={LargeCloud2} distance={Distance.FAR} />
        <Cloud source={LargeCloud3} distance={Distance.FAR} />
        <Cloud source={LargeCloud4} distance={Distance.FAR} />
        <Cloud source={LargeCloud1} distance={Distance.FAR} />
        <Cloud source={LargeCloud2} distance={Distance.FAR} />
        <Cloud source={LargeCloud3} distance={Distance.FAR} />
        <Cloud source={LargeCloud4} distance={Distance.FAR} />
        <Cloud source={LargeCloud1} distance={Distance.FAR} />
        <Cloud source={LargeCloud2} distance={Distance.FAR} />
        <Cloud source={LargeCloud3} distance={Distance.FAR} />
        <Cloud source={LargeCloud4} distance={Distance.FAR} />
        <Cloud source={Cloud1} distance={Distance.FAR} />
        <Cloud source={Cloud2} distance={Distance.FAR} />
        <Cloud source={Cloud1} distance={Distance.MEDIUM} />
        <Cloud source={Cloud3} distance={Distance.MEDIUM} />
        <Cloud source={Cloud2} distance={Distance.CLOSE} />
        <Cloud source={Cloud3} distance={Distance.CLOSE} />
        <Cloud source={Cloud4} distance={Distance.CLOSE} />
    </div>
);

const overcast: JSX.Element = (
    <div className="overcast">
        <Cloud source={LargeCloud1} distance={Distance.FAR} />
        <Cloud source={LargeCloud2} distance={Distance.FAR} />
        <Cloud source={LargeCloud3} distance={Distance.FAR} />
        <Cloud source={LargeCloud4} distance={Distance.FAR} />
        <Cloud source={LargeCloud1} distance={Distance.FAR} />
        <Cloud source={LargeCloud2} distance={Distance.FAR} />
        <Cloud source={LargeCloud3} distance={Distance.FAR} />
        <Cloud source={LargeCloud4} distance={Distance.FAR} />
        <Cloud source={LargeCloud1} distance={Distance.FAR} />
        <Cloud source={LargeCloud2} distance={Distance.FAR} />
        <Cloud source={LargeCloud3} distance={Distance.FAR} />
        <Cloud source={LargeCloud4} distance={Distance.FAR} />
        <Cloud source={Cloud1} distance={Distance.FAR} />
        <Cloud source={Cloud2} distance={Distance.FAR} />
        <Cloud source={Cloud1} distance={Distance.FAR} />
        <Cloud source={Cloud2} distance={Distance.FAR} />
        <Cloud source={Cloud1} distance={Distance.FAR} />
        <Cloud source={Cloud2} distance={Distance.FAR} />
        <Cloud source={Cloud3} distance={Distance.FAR} />
        <Cloud source={Cloud4} distance={Distance.FAR} />
        <Cloud source={LargeCloud1} distance={Distance.MEDIUM} />
        <Cloud source={LargeCloud2} distance={Distance.MEDIUM} />
        <Cloud source={LargeCloud3} distance={Distance.MEDIUM} />
        <Cloud source={LargeCloud4} distance={Distance.MEDIUM} />
        <Cloud source={LargeCloud1} distance={Distance.MEDIUM} />
        <Cloud source={LargeCloud2} distance={Distance.MEDIUM} />
        <Cloud source={LargeCloud3} distance={Distance.MEDIUM} />
        <Cloud source={LargeCloud4} distance={Distance.MEDIUM} />
        <Cloud source={Cloud1} distance={Distance.MEDIUM} />
        <Cloud source={Cloud3} distance={Distance.MEDIUM} />
        <Cloud source={Cloud2} distance={Distance.CLOSE} />
        <Cloud source={Cloud3} distance={Distance.CLOSE} />
        <Cloud source={Cloud4} distance={Distance.CLOSE} />
    </div>
);

const clear = (
    <div className="clear">
        <Sun />
        <Cloud source={LargeCloud1} distance={Distance.FAR} />
        <Cloud source={LargeCloud2} distance={Distance.FAR} />
    </div>
);

const rain = (
    <div className="rain">
        <Cloud source={LargeCloud1} distance={Distance.FAR} />
        <Cloud source={LargeCloud2} distance={Distance.FAR} />
        <Cloud source={LargeCloud3} distance={Distance.FAR} />
        <Cloud source={LargeCloud4} distance={Distance.FAR} />
        <Cloud source={DarkLargeCloud1} distance={Distance.FAR} />
        <Cloud source={DarkLargeCloud2} distance={Distance.FAR} />
        <Cloud source={DarkLargeCloud3} distance={Distance.FAR} />
        <Cloud source={DarkLargeCloud4} distance={Distance.FAR} />
        <Cloud source={LargeCloud1} distance={Distance.FAR} />
        <Cloud source={LargeCloud2} distance={Distance.FAR} />
        <Cloud source={LargeCloud3} distance={Distance.FAR} />
        <Cloud source={LargeCloud4} distance={Distance.FAR} />
        <Cloud source={DarkCloud1} distance={Distance.FAR} />
        <Cloud source={DarkCloud2} distance={Distance.FAR} />
        <Cloud source={DarkCloud1} distance={Distance.FAR} />
        <Cloud source={DarkCloud2} distance={Distance.FAR} />
        <Cloud source={DarkCloud1} distance={Distance.FAR} />
        <Cloud source={Cloud2} distance={Distance.FAR} />
        <Cloud source={Cloud3} distance={Distance.FAR} />
        <Cloud source={Cloud4} distance={Distance.FAR} />
        <Cloud source={DarkLargeCloud1} distance={Distance.MEDIUM} />
        <Cloud source={DarkLargeCloud2} distance={Distance.MEDIUM} />
        <Cloud source={DarkLargeCloud3} distance={Distance.MEDIUM} />
        <Cloud source={DarkLargeCloud4} distance={Distance.MEDIUM} />
        <Cloud source={DarkLargeCloud1} distance={Distance.MEDIUM} />
        <Cloud source={LargeCloud2} distance={Distance.MEDIUM} />
        <Cloud source={LargeCloud3} distance={Distance.MEDIUM} />
        <Cloud source={LargeCloud4} distance={Distance.MEDIUM} />
        <Cloud source={DarkCloud1} distance={Distance.MEDIUM} />
        <Cloud source={DarkCloud3} distance={Distance.MEDIUM} />
        <Cloud source={Cloud2} distance={Distance.CLOSE} />
        <Cloud source={Cloud3} distance={Distance.CLOSE} />
        <Cloud source={Cloud4} distance={Distance.CLOSE} />
    </div>
);

const drizzle = (
    <div className="drizzle">
        <Cloud source={LargeCloud1} distance={Distance.FAR} />
        <Cloud source={LargeCloud2} distance={Distance.FAR} />
        <Cloud source={LargeCloud3} distance={Distance.FAR} />
        <Cloud source={LargeCloud4} distance={Distance.FAR} />
        <Cloud source={LargeCloud1} distance={Distance.FAR} />
        <Cloud source={LargeCloud2} distance={Distance.FAR} />
        <Cloud source={LargeCloud3} distance={Distance.FAR} />
        <Cloud source={LargeCloud4} distance={Distance.FAR} />
        <Cloud source={LargeCloud1} distance={Distance.FAR} />
        <Cloud source={LargeCloud2} distance={Distance.FAR} />
        <Cloud source={LargeCloud3} distance={Distance.FAR} />
        <Cloud source={LargeCloud4} distance={Distance.FAR} />
        <Cloud source={Cloud1} distance={Distance.FAR} />
        <Cloud source={Cloud2} distance={Distance.FAR} />
        <Cloud source={Cloud1} distance={Distance.MEDIUM} />
        <Cloud source={Cloud3} distance={Distance.MEDIUM} />
        <Cloud source={Cloud2} distance={Distance.CLOSE} />
        <Cloud source={Cloud3} distance={Distance.CLOSE} />
        <Cloud source={Cloud4} distance={Distance.CLOSE} />
    </div>
);

const snow: JSX.Element = (
    <div className="snow">
        <Cloud source={LargeCloud1} distance={Distance.FAR} />
        <Cloud source={LargeCloud2} distance={Distance.FAR} />
        <Cloud source={LargeCloud3} distance={Distance.FAR} />
        <Cloud source={LargeCloud4} distance={Distance.FAR} />
        <Cloud source={LargeCloud1} distance={Distance.FAR} />
        <Cloud source={LargeCloud2} distance={Distance.FAR} />
        <Cloud source={LargeCloud3} distance={Distance.FAR} />
        <Cloud source={LargeCloud4} distance={Distance.FAR} />
        <Cloud source={LargeCloud1} distance={Distance.FAR} />
        <Cloud source={LargeCloud2} distance={Distance.FAR} />
        <Cloud source={LargeCloud3} distance={Distance.FAR} />
        <Cloud source={LargeCloud4} distance={Distance.FAR} />
        <Cloud source={Cloud1} distance={Distance.FAR} />
        <Cloud source={Cloud2} distance={Distance.FAR} />
        <Cloud source={Cloud1} distance={Distance.FAR} />
        <Cloud source={Cloud2} distance={Distance.FAR} />
        <Cloud source={Cloud1} distance={Distance.FAR} />
        <Cloud source={Cloud2} distance={Distance.FAR} />
        <Cloud source={Cloud3} distance={Distance.FAR} />
        <Cloud source={Cloud4} distance={Distance.FAR} />
        <Cloud source={LargeCloud1} distance={Distance.MEDIUM} />
        <Cloud source={LargeCloud2} distance={Distance.MEDIUM} />
        <Cloud source={LargeCloud3} distance={Distance.MEDIUM} />
        <Cloud source={LargeCloud4} distance={Distance.MEDIUM} />
        <Cloud source={LargeCloud1} distance={Distance.MEDIUM} />
        <Cloud source={LargeCloud2} distance={Distance.MEDIUM} />
        <Cloud source={LargeCloud3} distance={Distance.MEDIUM} />
        <Cloud source={LargeCloud4} distance={Distance.MEDIUM} />
        <Cloud source={Cloud1} distance={Distance.MEDIUM} />
        <Cloud source={Cloud3} distance={Distance.MEDIUM} />
        <Cloud source={Cloud2} distance={Distance.CLOSE} />
        <Cloud source={Cloud3} distance={Distance.CLOSE} />
        <Cloud source={Cloud4} distance={Distance.CLOSE} />
    </div>
);

const thunderstorm = (
    <div className="thunderstorm">
        <Cloud source={DarkLargeCloud1} distance={Distance.FAR} />
        <Cloud source={DarkLargeCloud2} distance={Distance.FAR} />
        <Cloud source={DarkLargeCloud3} distance={Distance.FAR} />
        <Cloud source={DarkLargeCloud4} distance={Distance.FAR} />
        <Cloud source={DarkLargeCloud1} distance={Distance.FAR} />
        <Cloud source={DarkLargeCloud2} distance={Distance.FAR} />
        <Cloud source={DarkLargeCloud3} distance={Distance.FAR} />
        <Cloud source={DarkLargeCloud4} distance={Distance.FAR} />
        <Cloud source={DarkLargeCloud1} distance={Distance.FAR} />
        <Cloud source={DarkLargeCloud2} distance={Distance.FAR} />
        <Cloud source={DarkLargeCloud3} distance={Distance.FAR} />
        <Cloud source={DarkLargeCloud4} distance={Distance.FAR} />
        <Cloud source={DarkCloud1} distance={Distance.FAR} />
        <Cloud source={DarkCloud2} distance={Distance.FAR} />
        <Cloud source={DarkCloud1} distance={Distance.FAR} />
        <Cloud source={DarkCloud2} distance={Distance.FAR} />
        <Cloud source={DarkCloud1} distance={Distance.FAR} />
        <Cloud source={DarkCloud2} distance={Distance.FAR} />
        <Cloud source={DarkCloud3} distance={Distance.FAR} />
        <Cloud source={DarkCloud4} distance={Distance.FAR} />
        <Cloud source={DarkLargeCloud1} distance={Distance.MEDIUM} />
        <Cloud source={DarkLargeCloud2} distance={Distance.MEDIUM} />
        <Cloud source={DarkLargeCloud3} distance={Distance.MEDIUM} />
        <Cloud source={DarkLargeCloud4} distance={Distance.MEDIUM} />
        <Cloud source={DarkLargeCloud1} distance={Distance.MEDIUM} />
        <Cloud source={DarkLargeCloud2} distance={Distance.MEDIUM} />
        <Cloud source={DarkLargeCloud3} distance={Distance.MEDIUM} />
        <Cloud source={DarkLargeCloud4} distance={Distance.MEDIUM} />
        <Cloud source={DarkCloud1} distance={Distance.MEDIUM} />
        <Cloud source={DarkCloud3} distance={Distance.MEDIUM} />
        <Cloud source={DarkCloud2} distance={Distance.CLOSE} />
        <Cloud source={DarkCloud3} distance={Distance.CLOSE} />
        <Cloud source={DarkCloud4} distance={Distance.CLOSE} />
    </div>
);

const watherConditionMap: Map<WeatherType, JSX.Element> = new Map<
    WeatherType,
    JSX.Element
>([
    [WeatherType.CLEAR, clear],
    [WeatherType.PARTIALLY_CLOUDY, partiallyCloudy],
    [WeatherType.RAIN, rain],
    [WeatherType.CLOUDY, cloudy],
    [WeatherType.DRIZZLE, drizzle],
    [WeatherType.OVERCAST, overcast],
    [WeatherType.SNOW, snow],
    [WeatherType.TUNDERSTORM, thunderstorm],
]);
