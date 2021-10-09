import styled from "styled-components";
import WeatherType from "../../enums/weatherType";
import SvgClear from "./Clear";
import SvgPartlyCloudy from "./PartlyCloudy";
import SvgMostlyCloudy from "./MostlyCloudy";
import SvgCloudy from "./Cloudy";
import SvgRain from "./Rain";
import SvgMist from "./Mist";
import SvgSnow from "./Snow";
import SvgThunder from "./Thunder";

import PngClear from "../../assets/icons/png/clear.png";

const weatherType2IconSVG = new Map<WeatherType, any>([
    [WeatherType.CLEAR_SKY, <SvgClear width="100%" height="100%" />],
    [WeatherType.FEW_CLOUDS, <SvgPartlyCloudy width="100%" height="100%" />],
    [
        WeatherType.SCATTERED_CLOUDS,
        <SvgPartlyCloudy width="100%" height="100%" />,
    ],
    [WeatherType.BROKEN_CLOUDS, <SvgMostlyCloudy width="100%" height="100%" />],
    [WeatherType.OVERCAST_CLOUDS, <SvgCloudy width="100%" height="100%" />],
    [WeatherType.DRIZZLE, <SvgRain width="100%" height="100%" />],
    [WeatherType.RAIN, <SvgRain width="100%" height="100%" />],
    [WeatherType.SMOKE, <SvgMist width="100%" height="100%" />],
    [WeatherType.SNOW, <SvgSnow width="100%" height="100%" />],
    [WeatherType.THUNDERSTORM, <SvgThunder width="100%" height="100%" />],
]);

const weatherType2IconPNG = new Map<WeatherType, any>([
    [WeatherType.CLEAR_SKY, PngClear],
    [WeatherType.FEW_CLOUDS, <SvgPartlyCloudy width="100%" height="100%" />],
    [
        WeatherType.SCATTERED_CLOUDS,
        <SvgPartlyCloudy width="100%" height="100%" />,
    ],
    [WeatherType.BROKEN_CLOUDS, <SvgMostlyCloudy width="100%" height="100%" />],
    [WeatherType.OVERCAST_CLOUDS, <SvgCloudy width="100%" height="100%" />],
    [WeatherType.DRIZZLE, <SvgRain width="100%" height="100%" />],
    [WeatherType.RAIN, <SvgRain width="100%" height="100%" />],
    [WeatherType.SMOKE, <SvgMist width="100%" height="100%" />],
    [WeatherType.SNOW, <SvgSnow width="100%" height="100%" />],
    [WeatherType.THUNDERSTORM, <SvgThunder width="100%" height="100%" />],
]);

interface WeatherIconProps {
    width: number;
    height: number;
    weatherType?: WeatherType;
}

const WeatherIcon = ({ width, height, weatherType }: WeatherIconProps) => {
    return (
        <Container width={width} height={height}>
            {weatherType2IconSVG.get(weatherType ?? WeatherType.CLEAR_SKY)}
        </Container>
    );
};

export default WeatherIcon;
interface ContainerProps {
    width: number;
    height: number;
}
const Container = styled.div<ContainerProps>`
    width: ${(p) => p.width}em;
    height: ${(p) => p.height}em;
`;
