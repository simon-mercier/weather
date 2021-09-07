import styled from "styled-components";
import { weatherType2Icon } from "../../utils/icon-utils";
import WeatherType from "../../enums/weatherType";

interface WeatherIconProps {
    width: number;
    height: number;
    weatherType?: WeatherType;
    animations: boolean;
}

const WeatherIcon = ({
    width,
    height,
    weatherType,
    animations,
}: WeatherIconProps) => {
    return (
        <Container width={width} height={height}>
            {weatherType2Icon(weatherType ?? WeatherType.CLEAR_SKY, animations)}
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
