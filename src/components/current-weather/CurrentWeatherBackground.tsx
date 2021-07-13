import React from "react";
import "./CurrentWeatherBackground.scss";
import Sun1 from "../../assets/svg/sun-1.svg";

import Cloud1 from "../../assets/svg/cloud-1.svg";
import Cloud2 from "../../assets/svg/cloud-2.svg";
import Cloud3 from "../../assets/svg/cloud-3.svg";
import Cloud4 from "../../assets/svg/cloud-4 .svg";
import LargeCloud1 from "../../assets/svg/large-cloud-1.svg";
import LargeCloud2 from "../../assets/svg/large-cloud-2.svg";
import LargeCloud3 from "../../assets/svg/large-cloud-3.svg";
import LargeCloud4 from "../../assets/svg/large-cloud-4.svg";
import { Cloud, Distance } from "./CurrentWeatherBackgroundStyles";
import { WeatherType } from "../../enums/weatherType";

// const randomClouds = (
//     nbClouds: number,
//     nbLargeClouds: number,
//     sun: boolean = true,
//     darkClouds: boolean = false
// ): JSX.Element => {
//     let clouds = [];
//     for (var i = 0; i < nbClouds; i++) {
//         clouds.push(
//             <img
//                 key={"c" + i}
//                 src={CLOUDS[i % CLOUDS.length]}
//                 alt="cloud"
//                 style={randomCloudAnimation(
//                     Distance.CLOSE,
//                     TranslationDirection.LEFT
//                 )}
//             />
//         );
//     }
//     let largeClouds = [];
//     for (var i = 0; i < nbLargeClouds; i++) {
//         largeClouds.push(
//             <img
//                 key={"lc" + i}
//                 src={LARGE_CLOUDS[i % LARGE_CLOUDS.length]}
//                 alt="large-cloud"
//                 style={randomCloudAnimation(
//                     Distance.FAR,
//                     TranslationDirection.LEFT
//                 )}
//             />
//         );
//     }
//     return (
//         <div>
//             <style children={translateLeftAnim()} />
//             {sun && <img className="sun-1" src={Sun1} alt="sun" />}
//             {largeClouds} {clouds}
//         </div>
//     );
// };

const partiallyCloudy: JSX.Element = (
    <div className="partially-cloudy">
        <img className="sun-1" src={Sun1} alt="sun" />
        <Cloud source={Cloud1} distance={Distance.MEDIUM} />
        <Cloud source={Cloud2} distance={Distance.CLOSE} />
        <Cloud source={LargeCloud1} distance={Distance.FAR} />
        <Cloud source={LargeCloud2} distance={Distance.FAR} />
        <Cloud source={LargeCloud3} distance={Distance.FAR} />
        <Cloud source={LargeCloud4} distance={Distance.FAR} />
    </div>
);

// const Cloudy = (
// );

// const Overcast = <div className="overcast"></div>;

// const Clear = (
//     <div className="clear">
//         <img className="sun-1" src={Sun1} alt="sun" />
//     </div>
// );

// const Rain = (
//     <div className="rain">
//         <img className="sun-1" src={Sun1} alt="sun" />
//     </div>
// );

// const Drizzle = (
//     <div className="drizzle">
//         <img className="sun-1" src={Sun1} alt="sun" />
//     </div>
// );

// const Snow = (
//     <div className="snow">
//         <img className="sun-1" src={Sun1} alt="sun" />
//     </div>
// );

// const Thunderstorm = (
//     <div className="clear">
//         <img className="sun-1" src={Sun1} alt="sun" />
//     </div>
// );

// const watherConditionMap: Map<WeatherType, JSX.Element> = new Map<
//     WeatherType,
//     JSX.Element
// >([
//     [WeatherType.CLEAR, Clear],
//     [WeatherType.PARTIALLY_CLOUDY, PartiallyCloudy],
//     [WeatherType.CLOUDY, Cloudy],
//     [WeatherType.DRIZZLE, Drizzle],
//     [WeatherType.OVERCAST, Overcast],
//     [WeatherType.SNOW, Snow],
//     [WeatherType.TUNDERSTORM, Thunderstorm],
// ]);

const CurrentWeatherBackground = () => {
    // return watherConditionMap.get(WeatherType.CLOUDY) as JSX.Element;
    return partiallyCloudy;
};

export default CurrentWeatherBackground;
