import styled from "styled-components";

export default function NavItems() {
    const yOffset = -window.innerHeight / 2;
    const scrollToCurrentWeather = () => {
        const currentWeather = document.getElementById("current-weather");
        if (currentWeather) {
            const y =
                currentWeather.getBoundingClientRect().top +
                window.scrollY +
                yOffset;

            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    const scrollToHourlyWeather = () => {
        const hourlyWeather = document.getElementById("hourly-weather");
        if (hourlyWeather) {
            const y =
                hourlyWeather.getBoundingClientRect().top +
                window.scrollY +
                yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    const scrollToDailyWeather = () => {
        const dailyWeather = document.getElementById("daily-weather");
        if (dailyWeather) {
            const y =
                dailyWeather.getBoundingClientRect().top +
                window.scrollY +
                yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <Container>
            <NavButton onClick={scrollToCurrentWeather}>current</NavButton>
            <NavButton onClick={scrollToHourlyWeather}>hourly</NavButton>
            <NavButton onClick={scrollToDailyWeather}>daily</NavButton>
        </Container>
    );
}

const Container = styled.nav`
    grid-template-columns: 1fr 1fr 1fr;
    display: grid;
    grid-gap: 1em;
    align-items: center;
`;

const NavButton = styled.button`
    background-color: transparent;
    color: white;
    border: none;
    border-radius: 0.5em;
    padding: 0.5em;
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
        background-color: rgba(255, 255, 255, 0.5);
    }
    width: 100%;
    height: min-content;
`;
