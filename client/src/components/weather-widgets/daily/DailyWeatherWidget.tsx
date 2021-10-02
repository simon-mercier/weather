import React, { useContext } from "react";
import styled from "styled-components";
import { IDailyWeather } from "../../../interfaces/weather";
import HourWidget from "./DayWidget";
import "react-multi-carousel/lib/styles.css";
import { Frosted } from "../../../assets/styles/styles";
import { BIG_MARGIN } from "../../../assets/styles/constants";
import DailyWeatherInfo from "../../../contexts/DailyWeatherInfo";
import device from "../../../assets/styles/breakpoints";

function DailyWeatherWidget() {
    const dailyWeather: Array<IDailyWeather> = useContext(DailyWeatherInfo);

    return (
        <Container>
            <Title>daily📆</Title>
            <ColumnDescription>
                <div />
                <div />

                <LowHigh>
                    <LowHighText>low of </LowHighText>
                    <LowHighText>high of </LowHighText>
                </LowHigh>
            </ColumnDescription>
            {dailyWeather.map((day, i) => (
                <HourWidget key={i} day={day} isNow={i === 0}></HourWidget>
            ))}
        </Container>
    );
}

export default DailyWeatherWidget;

const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    margin-bottom: 32px;

    z-index: 1;

    padding: ${BIG_MARGIN};

    border-radius: ${BIG_MARGIN};

    ${Frosted}
`;

const Title = styled.div`
    margin-left: 8px;
    margin-bottom: ${BIG_MARGIN};

    font-size: 2em;
    font-weight: bold;
`;
const ColumnDescription = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: end;
    padding: 0 ${BIG_MARGIN};
`;

const LowHigh = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    opacity: 0.8;
`;
const LowHighText = styled.div`
    @media ${device.mobileS} {
        font-size: 1em;
    }

    @media ${device.tablet} {
        font-size: 1.5em;
    }
    width: max-content;
    padding: 0 0 0 1em;
`;
