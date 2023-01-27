import React, { useContext } from "react";
import styled from "styled-components";
import HourlyWeatherInfo from "../../../contexts/HourlyWeatherInfo";
import { IHourlyWeather } from "../../../interfaces/weather";
import HourWidget from "./HourWidget";
import { Frosted } from "../../../assets/styles/styles";
import { BIG_MARGIN } from "../../../assets/styles/constants";

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
            <HourWidgetsContainer>
                {hourlyWeather.slice(0, 23).map((hour, i) => (
                    <HourWidget key={i} hour={hour} time={i}></HourWidget>
                ))}
            </HourWidgetsContainer>
        </Container>
    );
}

export default HourlyWeatherWidget;

const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    max-height: min-content;

    z-index: 1;

    padding: ${BIG_MARGIN};

    border-radius: ${BIG_MARGIN};

    ${Frosted}

    max-width: min-content;
`;

const Title = styled.div`
    margin-left: 8px;
    margin-bottom: ${BIG_MARGIN};
    font-family: "Walbaum Display SemiBold";
    font-size: 2em;
    font-weight: bold;
`;

const HourWidgetsContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
`;
