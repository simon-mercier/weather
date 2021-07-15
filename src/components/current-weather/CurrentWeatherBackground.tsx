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
import WeatherType from "../../enums/weatherType";
import { id2Type } from "../../utils/weather-utils";
import ICurrentWeather from "../../interfaces/currentWeather";
import TimesOfDay from "../../enums/timesOfDay";

export type WeatherId = {
    id: number;
};
const CurrentWeatherBackground = ({ id }: WeatherId) => {
    return watherConditionMap.get(id2Type(id)) as JSX.Element;
};

export default CurrentWeatherBackground;

const partlyCloudy: JSX.Element = (
    <div className="partly-cloudy">
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
        <svg
            className="filter"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 61.98"
        >
            <title>cloud-1</title>
            <path
                id="cloud"
                d="M9.42,47.21C8.36,46.44.18,40.35,0,30.36-.2,18.79,10.44,9.17,18.84,9.3c7.76.12,8.75,8.49,16.75,9.47C47,20.18,50.92,3.86,65.94.87c11.22-2.23,25.66,3.6,31.4,14.75,6.22,12.09.47,27.11-6.28,34.75C76.83,66.44,43.57,66.24,9.42,47.21Z"
            />
        </svg>
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
    [WeatherType.PARTLY_CLOUDY, partlyCloudy],
    [WeatherType.RAIN, rain],
    [WeatherType.CLOUDY, cloudy],
    [WeatherType.DRIZZLE, drizzle],
    [WeatherType.OVERCAST, overcast],
    [WeatherType.SNOW, snow],
    [WeatherType.THUNDERSTORM, thunderstorm],
]);
