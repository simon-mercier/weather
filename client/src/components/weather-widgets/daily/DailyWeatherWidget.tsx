import React, { useContext } from "react";
import styled from "styled-components";
import { IDailyWeather } from "../../../interfaces/weather";
import HourWidget from "./DayWidget";
import { BIG_MARGIN } from "../../../assets/styles/constants";
import DailyWeatherInfo from "../../../contexts/DailyWeatherInfo";

function DailyWeatherWidget() {
    const dailyWeather: Array<IDailyWeather> = useContext(DailyWeatherInfo);

    return (
        <Container>
            <Title>daily weather📆</Title>
            <ColumnDescription>
                {dailyWeather.map((day, i) => (
                    <HourWidget key={i} day={day} isNow={i === 0}></HourWidget>
                ))}
            </ColumnDescription>
        </Container>
    );
}

export default DailyWeatherWidget;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-height: min-content;
    padding: ${BIG_MARGIN};
    border-radius: ${BIG_MARGIN};
    z-index: 1;
    max-width: 100%;
`;

const Title = styled.div`
    margin-left: 8px;
    margin-bottom: ${BIG_MARGIN};
    font-family: "Walbaum Display SemiBold";
    font-size: 2em;
    font-weight: bold;
`;
const ColumnDescription = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
`;
