import WeatherType from "../enums/weatherType";
import Clear from "../components/icons/Clear";
import ScattteredClouds from "../components/icons/ScatteredClouds";
import Overcast from "../components/icons/Overcast";
import FewClouds from "../components/icons/FewClouds";
import Rain from "../components/icons/Rain";
import Thunderstorm from "../components/icons/Thunderstorm";
import BrokenClouds from "../components/icons/BrokenClouds";

export const weatherType2Icon = new Map<WeatherType, any>([
    [WeatherType.CLEAR_SKY, <Clear />],
    [WeatherType.FEW_CLOUDS, <FewClouds />],
    [WeatherType.SCATTERED_CLOUDS, <ScattteredClouds />],
    [WeatherType.BROKEN_CLOUDS, <BrokenClouds />],
    [WeatherType.OVERCAST_CLOUDS, <Overcast />],
    [WeatherType.DRIZZLE, <Rain />],
    [WeatherType.RAIN, <Rain />],
    [WeatherType.SMOKE, <Rain />],
    [WeatherType.SNOW, <Rain />],
    [WeatherType.THUNDERSTORM, <Thunderstorm />],
]);
