import React, { useContext } from "react";
import styled from "styled-components";
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
                width={5}
                height={5}
                weatherType={hourProps.hour.hourlyWeather.weatherType}
                animations={false}
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    z-index: 1;

    height: 200px;

    padding: ${BIG_MARGIN};
`;

const Time = styled.div`
    font-size: 1.5em;
    font-weight: bold;
`;

const Temperature = styled.div`
    margin-top: 10%;
    font-size: 3em;
`;
