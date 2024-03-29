import React, { useContext } from "react";
import styled from "styled-components";
import { BIG_MARGIN, MARGIN } from "../../../assets/styles/constants";
import UnitContext from "../../../contexts/Unit";
import PeriodOfDay from "../../../enums/periodOfDay";
import WeatherType from "../../../enums/weatherType";
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
            <Weather>
                <WeatherIcon
                    width={3}
                    height={3}
                    weatherType={dayProps.day.dailyWeather.weatherType}
                    periodOfDay={PeriodOfDay.DAY}
                />
                {dayProps.day.dailyWeather.weatherType !==
                    WeatherType.CLEAR_SKY &&
                    dayProps.day.dailyWeather.weatherType !==
                        WeatherType.SCATTERED_CLOUDS &&
                    dayProps.day.dailyWeather.weatherType !==
                        WeatherType.BROKEN_CLOUDS &&
                    dayProps.day.dailyWeather.weatherType !==
                        WeatherType.FEW_CLOUDS &&
                    dayProps.day.dailyWeather.weatherType !==
                        WeatherType.OVERCAST_CLOUDS && (
                        <POP>
                            {Math.round(
                                (dayProps.day.dailyWeather
                                    .probabilityOfPrecipitation ?? 0) * 100
                            )}
                            %
                        </POP>
                    )}
            </Weather>

            <LowHigh>
                <Temperature>
                    <LowHighText>low</LowHighText>
                    {k2unit(
                        dayProps.day.dailyTemperature.tempMin as number,
                        unit
                    ) + "°"}
                </Temperature>
                <Temperature>
                    <LowHighText>high</LowHighText>

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
    font-size: 2em;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 300px;
    max-height: 300px;
    width: 150px;

    z-index: 1;
    margin: ${MARGIN};
    padding: ${MARGIN};

    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 8px;
`;

const Time = styled.div`
    font-size: 0.7em;
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

const LowHighText = styled.div`
    font-size: 0.5em;
    align-self: center;
    opacity: 0.8;
`;

const Temperature = styled.div`
    font-size: 1em;
    padding: 0 ${BIG_MARGIN};
    align-self: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;
const Weather = styled.div`
    display: flex;
    flex-direction: column;
    width: min-content;
    align-items: center;
`;

const POP = styled.div`
    position: relative;
    font-size: 0.6em;
    font-weight: bold;
    opacity: 0.8;
    text-shadow: 0 0 1em rgba(58, 57, 57, 0.9);
    color: white;
`;
