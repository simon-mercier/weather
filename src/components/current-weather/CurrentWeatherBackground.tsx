import WeatherType from "../../enums/weatherType";
import { id2Type } from "../../utils/weather-utils";

import Cloud, {
    Distance,
    LARGE_CLOUD_1,
    LARGE_CLOUD_2,
    LARGE_CLOUD_3,
    LARGE_CLOUD_4,
    CLOUD_1,
    CLOUD_2,
    CLOUD_3,
    CLOUD_4,
} from "./cloud/Cloud";
export type WeatherId = {
    id: number;
};
const CurrentWeatherBackground = ({ id }: WeatherId) => {
    return watherConditionMap.get(id2Type(id)) as JSX.Element;
};

export default CurrentWeatherBackground;

const partlyCloudy: JSX.Element = (
    <div className="partly-cloudy">
        {/* <Sun /> */}
        <Cloud source={LARGE_CLOUD_1} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.FAR} />
        <Cloud source={CLOUD_1} distance={Distance.FAR} />
        <Cloud source={CLOUD_2} distance={Distance.FAR} />
        <Cloud source={CLOUD_1} distance={Distance.MEDIUM} />
        <Cloud source={CLOUD_2} distance={Distance.CLOSE} /> */
    </div>
);

const cloudy: JSX.Element = (
    <div className="cloudy">
        <Cloud source={LARGE_CLOUD_1} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_1} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_1} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.FAR} />
        <Cloud source={CLOUD_1} distance={Distance.FAR} />
        <Cloud source={CLOUD_2} distance={Distance.FAR} />
        <Cloud source={CLOUD_1} distance={Distance.MEDIUM} />
        <Cloud source={CLOUD_3} distance={Distance.MEDIUM} />
        <Cloud source={CLOUD_2} distance={Distance.CLOSE} />
        <Cloud source={CLOUD_3} distance={Distance.CLOSE} />
        <Cloud source={CLOUD_4} distance={Distance.CLOSE} />
    </div>
);

const overcast: JSX.Element = (
    <div className="overcast">
        <Cloud source={LARGE_CLOUD_1} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_1} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_1} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.FAR} />
        <Cloud source={CLOUD_1} distance={Distance.FAR} />
        <Cloud source={CLOUD_2} distance={Distance.FAR} />
        <Cloud source={CLOUD_1} distance={Distance.FAR} />
        <Cloud source={CLOUD_2} distance={Distance.FAR} />
        <Cloud source={CLOUD_1} distance={Distance.FAR} />
        <Cloud source={CLOUD_2} distance={Distance.FAR} />
        <Cloud source={CLOUD_3} distance={Distance.FAR} />
        <Cloud source={CLOUD_4} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_1} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_1} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.MEDIUM} />
        <Cloud source={CLOUD_1} distance={Distance.MEDIUM} />
        <Cloud source={CLOUD_3} distance={Distance.MEDIUM} />
        <Cloud source={CLOUD_2} distance={Distance.CLOSE} />
        <Cloud source={CLOUD_3} distance={Distance.CLOSE} />
        <Cloud source={CLOUD_4} distance={Distance.CLOSE} />
    </div>
);

const clear = (
    <div className="clear">
        {/* <Sun /> */}

        <Cloud source={LARGE_CLOUD_1} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.FAR} />
    </div>
);

const rain = (
    <div className="rain">
        <Cloud source={LARGE_CLOUD_1} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_1} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_1} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.FAR} />
        <Cloud source={CLOUD_1} distance={Distance.FAR} />
        <Cloud source={CLOUD_2} distance={Distance.FAR} />
        <Cloud source={CLOUD_1} distance={Distance.FAR} />
        <Cloud source={CLOUD_2} distance={Distance.FAR} />
        <Cloud source={CLOUD_1} distance={Distance.FAR} />
        <Cloud source={CLOUD_2} distance={Distance.FAR} />
        <Cloud source={CLOUD_3} distance={Distance.FAR} />
        <Cloud source={CLOUD_4} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_1} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_1} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.MEDIUM} />
        <Cloud source={CLOUD_1} distance={Distance.MEDIUM} />
        <Cloud source={CLOUD_3} distance={Distance.MEDIUM} />
        <Cloud source={CLOUD_2} distance={Distance.CLOSE} />
        <Cloud source={CLOUD_3} distance={Distance.CLOSE} />
        <Cloud source={CLOUD_4} distance={Distance.CLOSE} />
    </div>
);

const drizzle = (
    <div className="drizzle">
        <Cloud source={LARGE_CLOUD_1} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_1} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_1} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.FAR} />
        <Cloud source={CLOUD_1} distance={Distance.FAR} />
        <Cloud source={CLOUD_2} distance={Distance.FAR} />
        <Cloud source={CLOUD_1} distance={Distance.MEDIUM} />
        <Cloud source={CLOUD_3} distance={Distance.MEDIUM} />
        <Cloud source={CLOUD_2} distance={Distance.CLOSE} />
        <Cloud source={CLOUD_3} distance={Distance.CLOSE} />
        <Cloud source={CLOUD_4} distance={Distance.CLOSE} />
    </div>
);

const snow: JSX.Element = (
    <div className="snow">
        <Cloud source={LARGE_CLOUD_1} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_1} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_1} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.FAR} />
        <Cloud source={CLOUD_1} distance={Distance.FAR} />
        <Cloud source={CLOUD_2} distance={Distance.FAR} />
        <Cloud source={CLOUD_1} distance={Distance.FAR} />
        <Cloud source={CLOUD_2} distance={Distance.FAR} />
        <Cloud source={CLOUD_1} distance={Distance.FAR} />
        <Cloud source={CLOUD_2} distance={Distance.FAR} />
        <Cloud source={CLOUD_3} distance={Distance.FAR} />
        <Cloud source={CLOUD_4} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_1} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_1} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.MEDIUM} />
        <Cloud source={CLOUD_1} distance={Distance.MEDIUM} />
        <Cloud source={CLOUD_3} distance={Distance.MEDIUM} />
        <Cloud source={CLOUD_2} distance={Distance.CLOSE} />
        <Cloud source={CLOUD_3} distance={Distance.CLOSE} />
        <Cloud source={CLOUD_4} distance={Distance.CLOSE} />
    </div>
);

const thunderstorm = (
    <div className="thunderstorm">
        <Cloud source={LARGE_CLOUD_1} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_1} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_1} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.FAR} />
        <Cloud source={CLOUD_1} distance={Distance.FAR} />
        <Cloud source={CLOUD_2} distance={Distance.FAR} />
        <Cloud source={CLOUD_1} distance={Distance.FAR} />
        <Cloud source={CLOUD_2} distance={Distance.FAR} />
        <Cloud source={CLOUD_1} distance={Distance.FAR} />
        <Cloud source={CLOUD_2} distance={Distance.FAR} />
        <Cloud source={CLOUD_3} distance={Distance.FAR} />
        <Cloud source={CLOUD_4} distance={Distance.FAR} />
        <Cloud source={LARGE_CLOUD_1} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_1} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_2} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_3} distance={Distance.MEDIUM} />
        <Cloud source={LARGE_CLOUD_4} distance={Distance.MEDIUM} />
        <Cloud source={CLOUD_1} distance={Distance.MEDIUM} />
        <Cloud source={CLOUD_3} distance={Distance.MEDIUM} />
        <Cloud source={CLOUD_2} distance={Distance.CLOSE} />
        <Cloud source={CLOUD_3} distance={Distance.CLOSE} />
        <Cloud source={CLOUD_4} distance={Distance.CLOSE} />
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
