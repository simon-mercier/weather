import React, { useContext } from "react";
import styled from "styled-components";
import device from "../../../assets/styles/breakpoints";
import { BIG_MARGIN } from "../../../assets/styles/constants";
import UnitContext from "../../../contexts/Unit";
import { IHourlyWeather } from "../../../interfaces/weather";
import { k2unit } from "../../../utils/weather-utils";
import WeatherIcon from "../../icons/WeatherIcon";

interface HourProps {
    hour: IHourlyWeather;
    isNow: boolean;
}

function HourWidget(hourProps: HourProps) {
    const [unit, _] = useContext(UnitContext);

    return (
        <Container>
            <Time>
                {hourProps.isNow ? "now" : hourProps.hour.date.getHours() + "h"}
            </Time>
            <WeatherIcon
                width={3}
                height={3}
                weatherType={hourProps.hour.hourlyWeather.weatherType}
            />
            <Temperature>
                {k2unit(hourProps.hour.hourlyTemperature.temp as number, unit) +
                    "°"}
            </Temperature>
        </Container>
    );
}

export default HourWidget;

const Container = styled.div`
    @media ${device.mobileS} {
        font-size: 1.2em;
    }

    @media ${device.tablet} {
        font-size: 2em;
    }
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    z-index: 1;
    padding: 0 ${BIG_MARGIN};
`;

const Time = styled.div`
    font-size: 1em;
    font-weight: bold;
    place-self: start;
    align-self: center;
`;

const Temperature = styled.div`
    font-size: 1em;
    padding: 0 ${BIG_MARGIN};
    place-self: end;
    align-self: center;
`;
