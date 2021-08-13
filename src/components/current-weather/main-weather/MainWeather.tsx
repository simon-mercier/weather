import { useContext } from "react";
import CurrentWeatherInfo from "../../../contexts/CurrentWeatherInfo";
import ICurrentWeather from "../../../interfaces/currentWeather";
import styled from "styled-components";
import { Frosted } from "../../../assets/styles/styles";
import { Morph, MorphDirection } from "../../../assets/styles/animations";
import WeatherIcon from "../weather-icons/WeatherIcon";
import { k2c } from "../../../utils/weather-utils";
import { BIG_MARGIN } from "../../../assets/styles/constants";
const MainWeather = () => {
    const currentWeather: ICurrentWeather = useContext(CurrentWeatherInfo);
    return (
        <>
            {currentWeather &&
                currentWeather.temperature &&
                currentWeather.weatherDescription && (
                    <Container>
                        <Temperature>
                            <Degrees>
                                {k2c(currentWeather.temperature.temp)}°
                            </Degrees>
                            <div>
                                <FeelsLike>
                                    feels like{" "}
                                    {k2c(currentWeather.temperature.feelsLike)}°
                                </FeelsLike>

                                <HighLow>
                                    with a high of{" "}
                                    {k2c(currentWeather.temperature.tempMax)}
                                    °
                                    <br /> and a low of{" "}
                                    {k2c(currentWeather.temperature.tempMin)}°
                                </HighLow>
                            </div>
                        </Temperature>
                        <Weather>
                            <WeatherIcon />
                            <div>
                                <WeatherDescription>
                                    {currentWeather.weatherDescription}
                                </WeatherDescription>

                                <HumidityPressure>
                                    {currentWeather.humidity}
                                    % humidity
                                    <br />
                                    pressure of {currentWeather.pressure} hPa
                                </HumidityPressure>
                            </div>
                        </Weather>
                    </Container>
                )}
        </>
    );
};

export default MainWeather;

const Container = styled.div`
    width: fit-content;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    padding: ${BIG_MARGIN};
    border-radius: ${BIG_MARGIN};
    z-index: 1;
    ${Morph(MorphDirection.BOTTOM, 100)}
    ${Frosted}
`;

const Temperature = styled.div`
    margin: ${BIG_MARGIN};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Degrees = styled.div`
    background-color: transparent;
    font-size: 12.5rem;

    ${Morph(MorphDirection.BOTTOM, 100)}
`;

const FeelsLike = styled.div`
    margin-top: 0;
    font-size: 3rem;
    opacity: 0.9;

    ${Morph(MorphDirection.BOTTOM, 200)}
`;

const HighLow = styled.div`
    font-size: 1.5rem;
    opacity: 0.8;
    ${Morph(MorphDirection.BOTTOM, 300)}
`;

const Weather = styled.div`
    margin: ${BIG_MARGIN};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: max-content;
`;

const WeatherDescription = styled.div`
    font-size: 3rem;
    opacity: 90%;

    ${Morph(MorphDirection.BOTTOM, 200, 0.5)}
`;

const HumidityPressure = styled.div`
    font-size: 1.5rem;
    opacity: 0.8;

    ${Morph(MorphDirection.BOTTOM, 300, 0.5)}
`;
