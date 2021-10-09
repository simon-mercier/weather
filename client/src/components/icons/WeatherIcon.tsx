import styled from "styled-components";
import WeatherType from "../../enums/weatherType";

import PngClear from "../../assets/icons/png/clear.png";
import PngPartlyCloudy from "../../assets/icons/png/partly-cloudy.png";
import PngMostlyCloudy from "../../assets/icons/png/mostly-cloudy.png";
import PngCloudy from "../../assets/icons/png/cloudy.png";
import PngRain from "../../assets/icons/png/rain.png";
import PngMist from "../../assets/icons/png/mist.png";
import PngSnow from "../../assets/icons/png/snow.png";
import PngThunder from "../../assets/icons/png/thunder.png";

const weatherType2IconPNG = new Map<WeatherType, any>([
    [WeatherType.CLEAR_SKY, PngClear],
    [WeatherType.FEW_CLOUDS, PngPartlyCloudy],
    [WeatherType.SCATTERED_CLOUDS, PngPartlyCloudy],
    [WeatherType.BROKEN_CLOUDS, PngMostlyCloudy],
    [WeatherType.OVERCAST_CLOUDS, PngCloudy],
    [WeatherType.DRIZZLE, PngRain],
    [WeatherType.RAIN, PngRain],
    [WeatherType.SMOKE, PngMist],
    [WeatherType.SNOW, PngSnow],
    [WeatherType.THUNDERSTORM, PngThunder],
]);

interface WeatherIconProps {
    width: number;
    height: number;
    weatherType: WeatherType;
    bigIcon?: boolean;
}

const WeatherIcon = ({
    width,
    height,
    weatherType,
    bigIcon = false,
}: WeatherIconProps) => {
    return (
        <Container width={width} height={height}>
            {!bigIcon && <IconPng src={weatherType2IconPNG.get(weatherType)} />}
            {bigIcon && (
                <BigIconPng src={weatherType2IconPNG.get(weatherType)} />
            )}
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

const IconPng = styled.img.attrs((props) => ({
    src: props.src,
}))`
    width: 100%;
    height: 100%;
`;

const BigIconPng = styled(IconPng)`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 150%;
    height: 150%;
`;
