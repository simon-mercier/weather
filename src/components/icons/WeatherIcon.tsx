import styled from "styled-components";
import { weatherType2Icon } from "../../utils/icon-utils";
import WeatherType from "../../enums/weatherType";

interface WeatherIconProps {
    width: number;
    height: number;
    weatherType?: WeatherType;
}

const WeatherIcon = (props: WeatherIconProps) => {
    return (
        <Container width={props.width} height={props.height}>
            {weatherType2Icon.get(props.weatherType ?? WeatherType.CLEAR_SKY)}
        </Container>
    );
};

export default WeatherIcon;

const Container = styled.div<WeatherIconProps>`
    width: ${(p) => p.width}em;
    height: ${(p) => p.height}em;
`;
