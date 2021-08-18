import { useContext } from "react";
import CurrentWeatherInfo from "../../../contexts/CurrentWeatherInfo";
import ICurrentWeather from "../../../interfaces/currentWeather";
import styled from "styled-components";
import { Frosted } from "../../../assets/styles/styles";
import { Morph, MorphDirection } from "../../../assets/styles/animations";
import WeatherIcon from "./weather-icons/WeatherIcon";
import { k2unit } from "../../../utils/weather-utils";
import { BIG_MARGIN } from "../../../assets/styles/constants";
import UnitContext from "../../../contexts/Unit";
import device from "../../../assets/styles/breakpoints";

const CurrentWeatherWidget = () => {
    const currentWeather: ICurrentWeather = useContext(CurrentWeatherInfo);
    const [unit, _] = useContext(UnitContext);
    return (
        <>
            {currentWeather &&
                currentWeather.temperature &&
                currentWeather.weatherDescription && (
                    <Container>
                        <Temperature>
                            <Title>weather🌡️</Title>

                            <Degrees>
                                {k2unit(currentWeather.temperature.temp, unit)}°
                            </Degrees>
                            <div>
                                <FeelsLike>
                                    feels like{" "}
                                    {k2unit(
                                        currentWeather.temperature.feelsLike,
                                        unit
                                    )}
                                    °
                                </FeelsLike>

                                <HighLow>
                                    with a high of{" "}
                                    {k2unit(
                                        currentWeather.temperature.tempMax,
                                        unit
                                    )}
                                    °
                                    <br /> and a low of{" "}
                                    {k2unit(
                                        currentWeather.temperature.tempMin,
                                        unit
                                    )}
                                    °
                                </HighLow>
                            </div>
                        </Temperature>
                        <Weather>
                            <WeatherDescriptionContainer>
                                <WeatherIcon />
                                <WeatherInfoContainer>
                                    <WeatherDescription>
                                        {currentWeather.weatherDescription}
                                    </WeatherDescription>
                                    <HumidityPressure>
                                        {currentWeather.humidity}
                                        % humidity
                                        <br />
                                        pressure of {
                                            currentWeather.pressure
                                        }{" "}
                                        hPa
                                    </HumidityPressure>
                                </WeatherInfoContainer>
                            </WeatherDescriptionContainer>
                        </Weather>
                    </Container>
                )}
        </>
    );
};

export default CurrentWeatherWidget;
const WeatherInfoContainer = styled.div`
    @media ${device.mobileS} {
        width: fit-content;
    }

    @media ${device.tablet} {
        width: max-content;
    }
`;

const Container = styled.div`
    width: max-content;
    max-width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    padding: ${BIG_MARGIN};
    border-radius: ${BIG_MARGIN};
    z-index: 1;
    ${Morph(MorphDirection.BOTTOM, 100)}
    ${Frosted}
`;

const Title = styled.div`
    font-size: 2em;
    margin-top: -0.5em;
    font-weight: bold;
`;

const Temperature = styled.div`
    margin: ${BIG_MARGIN};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Degrees = styled.div`
    background-color: transparent;
    font-size: 12.5em;

    ${Morph(MorphDirection.BOTTOM, 100)}
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
    ${Morph(MorphDirection.BOTTOM, 300)}
`;

const Weather = styled.div`
    width: max-content;
    margin: ${BIG_MARGIN};
`;

const WeatherDescriptionContainer = styled.div`
    width: min-content;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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
