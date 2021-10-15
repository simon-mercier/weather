import styled from "styled-components";
import WeatherType from "../../enums/weatherType";

import PngClear from "../../assets/icons/png/clear.png";
import PngClearNight from "../../assets/icons/png/clear-night.png";

import PngPartlyCloudy from "../../assets/icons/png/partly-cloudy.png";
import PngPartlyCloudyNight from "../../assets/icons/png/partly-cloudy-night.png";

import PngMostlyCloudy from "../../assets/icons/png/mostly-cloudy.png";
import PngCloudy from "../../assets/icons/png/cloudy.png";
import PngRain from "../../assets/icons/png/rain.png";
import PngMist from "../../assets/icons/png/mist.png";
import PngSnow from "../../assets/icons/png/snow.png";
import PngThunder from "../../assets/icons/png/thunder.png";
import PeriodOfDay from "../../enums/periodOfDay";

const weatherType2IconDay = new Map<WeatherType, any>([
    [WeatherType.CLEAR_SKY, PngClear],
    [WeatherType.FEW_CLOUDS, PngPartlyCloudy],
    [WeatherType.SCATTERED_CLOUDS, PngPartlyCloudy],
    [WeatherType.BROKEN_CLOUDS, PngMostlyCloudy],
    [WeatherType.OVERCAST_CLOUDS, PngCloudy],
    [WeatherType.DRIZZLE, PngRain],
    [WeatherType.RAIN, PngRain],
    [WeatherType.SMOKE, PngMist],
    [WeatherType.HAZE, PngMist],
    [WeatherType.SNOW, PngSnow],
    [WeatherType.THUNDERSTORM, PngThunder],
]);

const weatherType2IconNight = new Map<WeatherType, any>([
    [WeatherType.CLEAR_SKY, PngClearNight],
    [WeatherType.FEW_CLOUDS, PngPartlyCloudyNight],
    [WeatherType.SCATTERED_CLOUDS, PngPartlyCloudy],
    [WeatherType.BROKEN_CLOUDS, PngMostlyCloudy],
    [WeatherType.OVERCAST_CLOUDS, PngCloudy],
    [WeatherType.DRIZZLE, PngRain],
    [WeatherType.RAIN, PngRain],
    [WeatherType.SMOKE, PngMist],
    [WeatherType.HAZE, PngMist],
    [WeatherType.SNOW, PngSnow],
    [WeatherType.THUNDERSTORM, PngThunder],
]);

interface WeatherIconProps {
    width: number;
    height: number;
    weatherType: WeatherType;
    periodOfDay: PeriodOfDay;
}

const WeatherIcon = ({
    width,
    height,
    weatherType,
    periodOfDay,
}: WeatherIconProps) => {
    return (
        <Container width={width} height={height}>
            <IconPng
                src={
                    periodOfDay == PeriodOfDay.NIGHT
                        ? weatherType2IconNight.get(weatherType)
                        : weatherType2IconDay.get(weatherType)
                }
            />
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
