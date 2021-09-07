import { useContext } from "react";
import styled from "styled-components";
import PeriodOfDayContext from "../../contexts/PeriodOfDay";
import PeriodsOfDay from "../../enums/periodsOfDay";
import WeatherType from "../../enums/weatherType";
import { ICurrentWeather } from "../../interfaces/weather";
import Atmosphere from "./Atmosphere";
import { RainGif, SnowGif } from "./weather-animations/WeatherAnimations";

interface BackgroundProps {
    currentWeather: ICurrentWeather;
}
const Background = (props: BackgroundProps) => {
    const periodOfDay: PeriodsOfDay = useContext(PeriodOfDayContext);

    return (
        <Container>
            <Atmosphere
                periodOfDay={periodOfDay}
                currentWeather={props.currentWeather}
            />
            {[
                WeatherType.RAIN,
                WeatherType.DRIZZLE,
                WeatherType.THUNDERSTORM,
            ].includes(props.currentWeather.condition.weatherType) && (
                <RainGif />
            )}
            {props.currentWeather.condition.weatherType ===
                WeatherType.SNOW && <SnowGif />}
            {/* <CloudAnimation currentWeather={props.currentWeather} /> */}
        </Container>
    );
};

export default Background;

const Container = styled.section`
    position: fixed;
    top: 0;
    width: 100vw;
`;
