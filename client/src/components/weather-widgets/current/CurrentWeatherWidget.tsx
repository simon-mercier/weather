import { useContext } from "react";
import CurrentWeatherInfo from "../../../contexts/CurrentWeatherInfo";
import { ICurrentWeather } from "../../../interfaces/weather";
import styled from "styled-components";
import { Frosted } from "../../../assets/styles/styles";
import { Morph, MorphDirection } from "../../../assets/styles/animations";
import WeatherIcon from "../../icons/WeatherIcon";
import { k2unit } from "../../../utils/weather-utils";
import { BIG_MARGIN } from "../../../assets/styles/constants";
import UnitContext from "../../../contexts/Unit";
import { device } from "../../../assets/styles/breakpoints";
import { getPeriodsOfDay } from "../../../utils/period-of-day-utils";

const CurrentWeatherWidget = () => {
    const currentWeather: ICurrentWeather = useContext(CurrentWeatherInfo);
    const [unit, _] = useContext(UnitContext);
    return (
        <>
            {currentWeather &&
                currentWeather.temperature &&
                currentWeather.condition.weatherDescription && (
                    <Container>
                        <Title>weather🌡️</Title>
                        <Info>
                            <Temperature>
                                <Degrees>
                                    <DegreesText>
                                        {k2unit(
                                            currentWeather.temperature
                                                .temp as number,
                                            unit
                                        )}
                                        °
                                    </DegreesText>
                                </Degrees>
                                <InfoContainer>
                                    <FeelsLike>
                                        feels like{" "}
                                        {k2unit(
                                            currentWeather.temperature
                                                .feelsLike as number,
                                            unit
                                        )}
                                        °
                                    </FeelsLike>

                                    <HighLow>
                                        with a high of{" "}
                                        {k2unit(
                                            currentWeather.temperature
                                                .tempMax as number,
                                            unit
                                        )}
                                        °
                                        <br /> and a low of{" "}
                                        {k2unit(
                                            currentWeather.temperature
                                                .tempMin as number,
                                            unit
                                        )}
                                        °
                                    </HighLow>
                                </InfoContainer>
                            </Temperature>
                            <Weather>
                                <WeatherIconContainer>
                                    <WeatherIcon
                                        width={1}
                                        height={1}
                                        weatherType={
                                            currentWeather.condition.weatherType
                                        }
                                        periodOfDay={getPeriodsOfDay(
                                            currentWeather.sunrise,
                                            currentWeather.sunset
                                        )}
                                    />
                                </WeatherIconContainer>

                                <InfoContainer>
                                    <WeatherDescription>
                                        {
                                            currentWeather.condition
                                                .weatherDescription as string
                                        }
                                    </WeatherDescription>
                                    <HumidityPressure>
                                        ultraviolet index of{" "}
                                        {parseInt(
                                            currentWeather.uvi.toString(),
                                            10
                                        )}
                                        <br />
                                        {currentWeather.humidity}% humidity
                                    </HumidityPressure>
                                </InfoContainer>
                            </Weather>
                        </Info>
                    </Container>
                )}
        </>
    );
};

export default CurrentWeatherWidget;
const InfoContainer = styled.div`
    width: 100%;
`;

const WeatherIconContainer = styled.div`
    position: relative;
    ${Morph(MorphDirection.BOTTOM, 100, 0.5)}
    @media ${device.mobileS} {
        font-size: 12.5em;
    }

    @media ${device.tablet} {
        font-size: 20em;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-height: min-content;

    max-width: 670px;
    padding: ${BIG_MARGIN};
    border-radius: ${BIG_MARGIN};
    z-index: 1;
    ${Morph(MorphDirection.BOTTOM, 100)}
    ${Frosted}
`;

const Info = styled.div`
    font-size: 1em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media ${device.mobileS} {
        width: 100%;
    }

    @media ${device.tablet} {
        width: max-content;
    }
`;

const Title = styled.div`
    font-size: 2em;
    font-weight: bold;
    margin-left: 8px;
    font-family: "Walbaum Display SemiBold";
`;

const Temperature = styled.div`
    margin: ${BIG_MARGIN};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${device.mobileS} {
        width: 100%;
        align-items: center;
    }

    @media ${device.tablet} {
        width: max-content;
    }
`;

const Degrees = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.mobileS} {
        font-size: 10em;
    }

    @media ${device.tablet} {
        font-size: 12.5em;
    }

    ${Morph(MorphDirection.BOTTOM, 100)}
`;

const DegreesText = styled.div`
    height: fit-content;
`;

const FeelsLike = styled.div`
    margin-top: 0;
    font-size: 3em;
    opacity: 0.9;

    ${Morph(MorphDirection.BOTTOM, 200)}
`;

const HighLow = styled.div`
    font-size: 1.5em;
    opacity: 0.8;
    width: 100%;

    ${Morph(MorphDirection.BOTTOM, 300)}
`;

const Weather = styled.div`
    margin: ${BIG_MARGIN};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${device.mobileS} {
        width: 100%;
        align-items: center;
    }

    @media ${device.tablet} {
        width: max-content;
    }
`;

const WeatherDescription = styled.div`
    font-size: 3em;
    opacity: 90%;
    overflow-wrap: break-word;

    ${Morph(MorphDirection.BOTTOM, 200, 0.5)}
`;

const HumidityPressure = styled.div`
    font-size: 1.5em;
    opacity: 0.8;

    ${Morph(MorphDirection.BOTTOM, 300, 0.5)}
`;
