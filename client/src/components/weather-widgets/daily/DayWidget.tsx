import React, { useContext } from "react";
import styled from "styled-components";
import device from "../../../assets/styles/breakpoints";
import { BIG_MARGIN } from "../../../assets/styles/constants";
import UnitContext from "../../../contexts/Unit";
import { IDailyWeather } from "../../../interfaces/weather";
import { k2unit } from "../../../utils/weather-utils";
import WeatherIcon from "../../icons/WeatherIcon";

interface DayProps {
    day: IDailyWeather;
    isNow: boolean;
}

const time2DayName = new Map<number, string>([
    [0, "sunday"],
    [1, "monday"],
    [2, "tuesday"],
    [3, "wednesday"],
    [4, "thursday"],
    [5, "friday"],
    [6, "saturday"],
]);

function DayWidget(dayProps: DayProps) {
    const [unit, _] = useContext(UnitContext);

    return (
        <Container>
            <Time>
                {dayProps.isNow
                    ? "today"
                    : time2DayName.get(dayProps.day.date.getDay())}
            </Time>
            <WeatherIcon
                width={3}
                height={3}
                weatherType={dayProps.day.dailyWeather.weatherType}
            />
            <LowHigh>
                <Temperature>
                    {k2unit(
                        dayProps.day.dailyTemperature.tempMin as number,
                        unit
                    ) + "°"}
                </Temperature>
                <Temperature>
                    {k2unit(
                        dayProps.day.dailyTemperature.tempMax as number,
                        unit
                    ) + "°"}
                </Temperature>
            </LowHigh>
        </Container>
    );
}

export default DayWidget;

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
    align-items: center;

    z-index: 1;
    padding: 0 ${BIG_MARGIN};
    max-width: 100%;
`;

const Time = styled.div`
    font-size: 1em;
    font-weight: bold;
    place-self: start;
    align-self: center;
`;

const LowHigh = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    place-self: end;
    align-self: center;
`;

const Temperature = styled.div`
    font-size: 1em;
    padding: 0 ${BIG_MARGIN};
    align-self: center;
`;
