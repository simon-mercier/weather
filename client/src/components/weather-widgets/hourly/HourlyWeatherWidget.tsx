import React, { useContext } from "react";
import styled from "styled-components";
import HourlyWeatherInfo from "../../../contexts/HourlyWeatherInfo";
import { IHourlyWeather } from "../../../interfaces/weather";
import HourWidget from "./HourWidget";
import "react-multi-carousel/lib/styles.css";
import { Frosted } from "../../../assets/styles/styles";
import { BIG_MARGIN } from "../../../assets/styles/constants";
import { Morph, MorphDirection } from "../../../assets/styles/animations";

const time2clock = new Map<number, string>([
    [0, "🕛"],
    [1, "🕐"],
    [2, "🕑"],
    [3, "🕒"],
    [4, "🕓"],
    [5, "🕔"],
    [6, "🕕"],
    [7, "🕖"],
    [8, "🕗"],
    [9, "🕘"],
    [10, "🕙"],
    [11, "🕚"],
]);
const NB_HOURS_IMPERIAL = 12;

function HourlyWeatherWidget() {
    const hourlyWeather: Array<IHourlyWeather> = useContext(HourlyWeatherInfo);

    return (
        <Container>
            <Title>
                hourly
                {time2clock.get(
                    hourlyWeather[0].date.getHours() % NB_HOURS_IMPERIAL
                )}
            </Title>

            {hourlyWeather.slice(0, 11).map((hour, i) => (
                <HourWidget key={i} hour={hour} isNow={i === 0}></HourWidget>
            ))}
        </Container>
    );
}

export default HourlyWeatherWidget;

const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    margin-bottom: 32px;

    z-index: 1;

    padding: ${BIG_MARGIN};
    border-radius: ${BIG_MARGIN};

    ${Morph(MorphDirection.LEFT, 100, 1)}

    ${Frosted}
`;

const Title = styled.div`
    margin-left: 8px;
    margin-bottom: ${BIG_MARGIN};
    font-size: 2em;
    font-weight: bold;
`;
/* ${Morph(MorphDirection.BOTTOM, 100)} */
