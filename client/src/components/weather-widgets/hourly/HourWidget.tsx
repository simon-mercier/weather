import React, { useContext } from "react";
import styled from "styled-components";
import device from "../../../assets/styles/breakpoints";
import { BIG_MARGIN } from "../../../assets/styles/constants";
import { TIME_IN_ONE_HOUR_MS } from "../../../const";
import CurrentWeatherInfo from "../../../contexts/CurrentWeatherInfo";
import UnitContext from "../../../contexts/Unit";
import { ICurrentWeather, IHourlyWeather } from "../../../interfaces/weather";
import { getPeriodsOfDay } from "../../../utils/period-of-day-utils";
import { k2unit } from "../../../utils/weather-utils";
import WeatherIcon from "../../icons/WeatherIcon";

interface HourProps {
    hour: IHourlyWeather;
    time: number;
}

function HourWidget(hourProps: HourProps) {
    const currentWeather: ICurrentWeather = useContext(CurrentWeatherInfo);

    const [unit, _] = useContext(UnitContext);

    return (
        <Container>
            <Time>
                {hourProps.time === 0
                    ? "now"
                    : hourProps.hour.date.getHours() + "h"}
            </Time>
            <WeatherIcon
                width={3}
                height={3}
                weatherType={hourProps.hour.hourlyWeather.weatherType}
                periodOfDay={getPeriodsOfDay(
                    currentWeather.sunrise,
                    currentWeather.sunset,
                    new Date(Date.now() + hourProps.time * TIME_IN_ONE_HOUR_MS)
                )}
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
