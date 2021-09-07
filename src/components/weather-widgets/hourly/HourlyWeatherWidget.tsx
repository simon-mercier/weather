import React, { useContext } from "react";
import styled from "styled-components";
import HourlyWeatherInfo from "../../../contexts/HourlyWeatherInfo";
import { IHourlyWeather } from "../../../interfaces/weather";
import HourWidget from "./HourWidget";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Morph, MorphDirection } from "../../../assets/styles/animations";
import { CustomDot } from "../../../assets/styles/CustomCarousel";
import { Frosted } from "../../../assets/styles/styles";
import { BIG_MARGIN } from "../../../assets/styles/constants";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1760 },
        items: 14,
        slidesToSlide: 3, // optional, default to 1.
    },
    smalldesktop: {
        breakpoint: { max: 1760, min: 1500 },
        items: 12,
        slidesToSlide: 2, // optional, default to 1.
    },
    bigtablet: {
        breakpoint: { max: 1500, min: 1250 },
        items: 10,
        slidesToSlide: 2, // optional, default to 1.
    },
    mediumtablet: {
        breakpoint: { max: 1250, min: 1024 },
        items: 8,
        slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 6,
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

            <CarouselContainer
                swipeable={true}
                draggable={true}
                showDots={true}
                arrows={false}
                customDot={<CustomDot />}
                responsive={responsive}
                infinite={false}
                keyBoardControl={true}
                transitionDuration={500}
                renderButtonGroupOutside={true}
                renderDotsOutside={true}
            >
                {hourlyWeather.slice(0, 23).map((hour, i) => (
                    <HourWidget
                        key={i}
                        hour={hour}
                        isNow={i === 0}
                    ></HourWidget>
                ))}
            </CarouselContainer>
        </Container>
    );
}

export default HourlyWeatherWidget;

const Container = styled.div`
    margin-bottom: 20vh;
    width: 100%;

    display: flex;
    flex-direction: column;

    z-index: 1;

    padding: ${BIG_MARGIN};
    border-radius: ${BIG_MARGIN};

    ${Frosted}
    ${Morph(MorphDirection.BOTTOM, 100)}
`;

const Title = styled.div`
    margin-left: 8px;

    font-size: 2em;
    font-weight: bold;
    ${Morph(MorphDirection.BOTTOM, 100)}
`;

const CarouselContainer = styled(Carousel)`
    height: min-content;
`;
