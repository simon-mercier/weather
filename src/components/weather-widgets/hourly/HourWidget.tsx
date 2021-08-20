import React, { useContext } from "react";
import styled from "styled-components";
import { Morph, MorphDirection } from "../../../assets/styles/animations";
import device from "../../../assets/styles/breakpoints";
import { Frosted } from "../../../assets/styles/styles";
import UnitContext from "../../../contexts/Unit";
import { IHourlyWeather } from "../../../interfaces/weather";
import { k2unit } from "../../../utils/weather-utils";

interface HourProps {
    hour: IHourlyWeather;
    isNow: boolean;
    morphTime: number;
}

function HourWidget(hourProps: HourProps) {
    const [unit, _] = useContext(UnitContext);

    return (
        <Container morphTime={hourProps.morphTime}>
            <Time>
                {hourProps.isNow ? "now" : hourProps.hour.date.getHours() + "h"}
            </Time>
            {k2unit(hourProps.hour.hourlyTemperature.temp as number, unit)}
        </Container>
    );
}

export default HourWidget;

interface HourContainerProps {
    morphTime: number;
}

const Container = styled.div<HourContainerProps>`
    display: flex;
    flex-direction: column;

    z-index: 1;
    ${(p) => Morph(MorphDirection.BOTTOM, p.morphTime)}
    ${Frosted}

    @media ${device.mobileS} {
        width: 100%;
        height: 200px;
    }

    @media ${device.tablet} {
        height: 300px;
        width: 200px;
    }
`;

const Time = styled.div`
    font-size: 1.5em;
    font-weight: bold;
`;
