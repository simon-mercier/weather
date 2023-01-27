import React, { useContext } from "react";
import styled from "styled-components";
import device from "../../../assets/styles/breakpoints";
import { BIG_MARGIN, MARGIN } from "../../../assets/styles/constants";
import { TIME_IN_ONE_HOUR_MS } from "../../../const";
import CurrentWeatherInfo from "../../../contexts/CurrentWeatherInfo";
import UnitContext from "../../../contexts/Unit";
import WeatherType from "../../../enums/weatherType";
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
            <Weather>
                <WeatherIcon
                    width={3}
                    height={3}
                    weatherType={hourProps.hour.hourlyWeather.weatherType}
                    periodOfDay={getPeriodsOfDay(
                        currentWeather.sunrise,
                        currentWeather.sunset,
                        new Date(
                            Date.now() + hourProps.time * TIME_IN_ONE_HOUR_MS
                        )
                    )}
                />

                {hourProps.hour.hourlyWeather.weatherType !==
                    WeatherType.CLEAR_SKY &&
                    hourProps.hour.hourlyWeather.weatherType !==
                        WeatherType.SCATTERED_CLOUDS &&
                    hourProps.hour.hourlyWeather.weatherType !==
                        WeatherType.BROKEN_CLOUDS &&
                    hourProps.hour.hourlyWeather.weatherType !==
                        WeatherType.FEW_CLOUDS &&
                    hourProps.hour.hourlyWeather.weatherType !==
                        WeatherType.OVERCAST_CLOUDS && (
                        <POP>
                            {Math.round(
                                (hourProps.hour.hourlyWeather
                                    .probabilityOfPrecipitation ?? 0) * 100
                            )}
                            %
                        </POP>
                    )}
            </Weather>

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
    border-radius: 8px;
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
