import { random, randomMinMax } from "../../../utils/code-utils";
import CSS from "csstype";
import Gradients from "./Gradients";
import "./Cloud.scss";
import WeatherType from "../../../enums/weatherType";
import ICurrentWeather from "../../../interfaces/currentWeather";
import { useCurrentWeatherInfoContext } from "../../../contexts/location-info/CurrentWeatherInfo";
import { id2Type } from "../../../utils/weather-utils";

export const CLOUD_1 =
    "M9.42,47.21C8.36,46.44.18,40.35,0,30.36-.2,18.79,10.44,9.17,18.84,9.3c7.76.12,8.75,8.49,16.75,9.47C47,20.18,50.92,3.86,65.94.87c11.22-2.23,25.66,3.6,31.4,14.75,6.22,12.09.47,27.11-6.28,34.75C76.83,66.44,43.57,66.24,9.42,47.21Z";
export const CLOUD_2 =
    "M53.6,14.4c1.7-1.9,7.4-7.9,16.2-8.7c13.7-1.3,22.6,10.8,23.8,12.6c7.9,10.8,8.6,26.9,1,38.7c-9.2,14.2-28.9,19.9-38.1,13.5c-7.6-5.2-3.3-15.4-11.4-21.3c-9.6-7-20.6,3.7-31.4-1.9C1.5,40.9-4.6,17,4.1,6.6C12.2-3.1,35.2-3.4,53.6,14.4z";
export const CLOUD_3 =
    "M47.7,19c-9.4,1.4-3.4-13.9-12.4-18.2c-7.3-3.5-20.9,4.5-25.9,16C6.9,22.4,7,27.7,7.3,30.7c-0.5,0.4-7.8,6.1-7.2,15c0.5,7.8,6.9,14.8,15.5,16C3,70.2,2.9,75.8,3.1,77.7c1.2,9.6,22.4,16,39.3,13.9c13-1.6,22.3-8,26.9-11.7c2.5,2.6,11,10.7,18.6,8.5c10.6-3,16.1-24.9,8.3-39.5c-7.4-13.9-23.9-15.8-25.9-16c14.8-20,3.7-19.5-7.2-18.2C55,15.7,55.9,17.7,47.7,19z";
export const CLOUD_4 =
    "M36.7,20.5c-21.4-2-20.5,1.2-25.7,5.3c-7,5.5-10.7,16-8.6,24.5c2.1,8.4,9.4,12.3,7.5,17c-1.7,4.2-8.1,3.1-9.6,7.4c-1.7,5,5,11.5,6.4,12.8c1,1,5.1,4.7,11.8,6.4C31,97,41.9,90.1,44.2,88.5c1.1,2.3,3.4,5.9,7.5,8.5c9.3,5.8,21.6,2.2,28.9-3.2c9.7-7.1,11.4-18,11.8-20.2c1.2-7.3-0.6-13.1-3.2-21.3c-2.3-7.3-5.2-13.1-7.5-17c4-4.8,11.8-15.3,8.6-23.4C84-3.7,37.4-3.2,35.6,8.8C34.8,14.1,34.5,14,36.7,20.5z";

export const LARGE_CLOUD_1 =
    "M59.5,10.2c-17.8-2.4-26,1.5-30.2,5.6c-2.5,2.5-4.8,6.3-10.1,7.8c-5.4,1.6-8-1-12.3,1.1C2.3,27-0.9,32.8,0.2,37c0.7,2.5,2.4,2.6,6.7,6.7c6.7,6.3,5.7,8.9,8.9,10.1c6.5,2.4,11.6-7.5,19-5.6c4.3,1.1,3.7,4.7,10.1,10.1c5.6,4.7,15.5,9.9,21.3,6.7c3.3-1.8,2.1-4.7,6.7-8.9c4.3-4,9.2-5.2,11.2-5.6c4.3-1,7.5-0.4,19,2.2c16.9,3.9,16.8,4.3,20.1,4.5c9.1,0.4,10.2-2.5,20.1-3.4c14.2-1.3,15.6,4.4,28,3.4c11.1-0.9,24.9-6.7,28-16.8c1.4-4.7,0.7-10.8-2.2-12.3c-3.6-1.9-8,5-13.4,3.4c-4.1-1.2-3.2-5.6-8.9-10.1c-0.6-0.5-6.2-4.7-13.4-4.5c-5.1,0.2-6.5,2.3-13.4,4.5c0,0-5.9,1.8-14.5,2.2c-18.5,0.8-27.9-21.6-47-23.5C80.7-0.4,71.6,0.6,59.5,10.2z";
export const LARGE_CLOUD_2 =
    "M182.5,8.3c-30.2-2.1-33.9-7.9-43.6-3.1c-9,4.4-13.2,13.1-16.6,11.4c-1.9-0.9-2.2-4.4-2.1-7.3C111,3.1,104.3,0,90.2,0c-5.4,0-12.6,0-19.7,4.1C62.2,9,62,14.9,56,17.6c-4.9,2.2-13.2,2.2-28-8.3C24.6,6.8,16.6,1.5,6.2,2.1C3.9,2.2,1.8,2.6,0,3.1C1.9,5.3,6,23.3,10.4,27c11.2,9.4,15.9,1.1,30.1,8.3c18.7,9.5,27,9.3,38.4,11.4c19.9,3.6,15-9.4,41.5-9.3c20.8,0.1,23,8.8,43.6,6.2c5.8-0.7,22.1-3,31.1-15.6c0.8-1.2,7.3-10.1,4.1-15.6C197,8.8,191.7,8.9,182.5,8.3z";
export const LARGE_CLOUD_3 =
    "M91.5,8.1c-17.6-9.5-42.8-11.6-57.3-1c-0.5,0.4-4.7,4-13.1,11.3C10.5,27.5,8.8,29.1,7,31.6C2.4,38.1,0.1,46,0,52.1c-0.3,14.5,11.4,29.3,29.1,36.8c5.2-4.5,15.8-13,26.1-17.4c2.4-1,4.6-1.7,7-1c5,1.5,5.1,7.6,10,11.3c3.1,2.3,6.4,2.4,14.1,2c17.3-0.7,22.9-2,30.1-2c11.4,0,14.1,3.2,25.1,5.1c4.6,0.8,38.7,6.7,52.3-11.3c13-17.3,3.7-52.4-13.1-59.3C162,8.4,143,40.1,118.6,31.6C105.7,27.1,109,17.6,91.5,8.1z";
export const LARGE_CLOUD_4 =
    "M86.5,57.9c17.6,9.5,71.5,12.4,82.4,10.5c11-2,22.2-9.2,24-11.7c4.6-6.5,6.9-14.4,7.1-20.5c0.3-14.5-14-32.8-33.1-29.8c-6.8,1.1-12,6-22.3,10.4c-2.4,1-4.7,1.7-7.1,1c-5-1.5-21.7-14.6-27.7-13.4c-12.1,2.4-26.9,4.1-32.1,3c-11.2-2.3-19-4.1-30.1-6C43.1,0.6,19.9-4.8,5.6,12.7C-7.2,28.3,3.8,51.6,20.4,60.9C38.2,71,68.9,48.5,86.5,57.9z";

export interface CloudProps {
    source: string;
    distance: Distance;
}
const Cloud = (cloudProps: CloudProps) => {
    const weatherInfo: ICurrentWeather = useCurrentWeatherInfoContext();
    return (
        <>
            <Gradients />
            <svg
                className="cloud"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 200"
                style={cloudStyle(
                    cloudProps.distance,
                    id2Type(weatherInfo.weatherId)
                )}
            >
                <path d={cloudProps.source} />
            </svg>
        </>
    );
};

export default Cloud;

const MAX_ANIMATION_TIME = 1000;

export enum Distance {
    CLOSE,
    MEDIUM,
    FAR,
}

enum RangeProperty {
    DURATION,
    WIDTH,
    OPACITY,
    HEIGHT,
}

type Range = [number, number];

const weather2Fill = new Map<WeatherType, string>([
    [WeatherType.CLEAR, "gray"],
    [WeatherType.PARTLY_CLOUDY, "gray"],
    [WeatherType.CLOUDY, "gray"],
    [WeatherType.OVERCAST, "gray"],
    [WeatherType.DRIZZLE, "gray"],
    [WeatherType.RAIN, "gray"],
    [WeatherType.THUNDERSTORM, "gray"],
    [WeatherType.SNOW, "gray"],
]);

const distance2Range = new Map<Distance, any>([
    [
        Distance.CLOSE,
        [
            [350, 500],
            [25, 35],
            [90, 97],
            [-15, 5],
        ],
    ],
    [
        Distance.MEDIUM,
        [
            [750, 1250],
            [20, 15],
            [75, 80],
            [-5, 5],
        ],
    ],
    [
        Distance.FAR,
        [
            [2000, 3000],
            [15, 7],
            [70, 75],
            [-10, 5],
        ],
    ],
]);

export const cloudStyle = (
    distance: Distance,
    weatherType: WeatherType
): CSS.Properties => {
    return {
        position: `absolute`,
        left: `-35%`,
        opacity: `${randomRange(RangeProperty.OPACITY, distance)}%`,
        width: `${randomRange(RangeProperty.WIDTH, distance)}vw`,
        top: `${randomRange(RangeProperty.HEIGHT, distance)}vh`,
        animation: `translateLeftAnim ${randomRange(
            RangeProperty.DURATION,
            distance
        )}s linear -${randomDelay()}s infinite`,
        transform: `scaleX(${() => (Math.random() < 0.5 ? -1 : 1)})`,
        fill: `url(#${weather2Fill.get(weatherType)})`,
    };
};

const randomRange = (prop: RangeProperty, distance: Distance) => {
    const range: Range = distance2Range.get(distance)[prop] as Range;
    return randomMinMax(range[0], range[1]);
};

const randomDelay = () => random(MAX_ANIMATION_TIME);

// export const Sun = styled.img`
//     content: url(${() => Sun1});
//     position: absolute;
//     width: 10vw;
//     top: 5%;
//     transform: translateX(-50%);
//     left: 50%;
// `;
