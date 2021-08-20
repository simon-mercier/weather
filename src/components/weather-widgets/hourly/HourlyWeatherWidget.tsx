import React, { useContext } from "react";
import styled from "styled-components";
import HourlyWeatherInfo from "../../../contexts/HourlyWeatherInfo";
import { IHourlyWeather } from "../../../interfaces/weather";
import HourWidget from "./HourWidget";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5,
        slidesToSlide: 2, // optional, default to 1.
    },
};

const time2clock = new Map<number, string>([
    [0, "🕛"],
    [1, "🕐"],
    [2, "🕑"],
    [3, "🕒"],
    [4, "🕓"],
    [5, "🕔"],
    [6, "🕕"],
    [7, "🕖"],
    [8, "🕗"],
    [9, "🕘"],
    [10, "🕙"],
    [11, "🕚"],
]);
const NB_HOURS_IMPERIAL = 12;

function HourlyWeatherWidget() {
    const hourlyWeather: Array<IHourlyWeather> = useContext(HourlyWeatherInfo);

    return (
        <Container>
            <Title>
                hourly
                {time2clock.get(
                    hourlyWeather[0].date.getHours() % NB_HOURS_IMPERIAL
                )}
            </Title>

            <Carousel
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                infinite={false}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                {hourlyWeather.slice(0, 23).map((hour, i) => (
                    <HourWidget
                        hour={hour}
                        isNow={i === 0}
                        morphTime={(i + 1) * 100}
                    ></HourWidget>
                ))}
            </Carousel>
        </Container>
    );
}

export default HourlyWeatherWidget;

const Container = styled.div`
    margin-top: 20vh;
    width: 100%;
    max-width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    z-index: 1;
`;
const Title = styled.div`
    margin-left: 8px;

    font-size: 2em;
    margin-top: -0.5em;
    font-weight: bold;
`;
