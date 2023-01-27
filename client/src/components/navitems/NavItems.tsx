import styled from "styled-components";

export default function NavItems() {
    const scrollTo = (id: string) => {
        const location = document.getElementById(id);
        if (location) {
            location.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <Container>
            <NavButton onClick={() => scrollTo("current-weather")}>
                🌡️current
            </NavButton>
            <NavButton onClick={() => scrollTo("hourly-weather")}>
                🕑hourly
            </NavButton>
            <NavButton onClick={() => scrollTo("daily-weather")}>
                📆daily
            </NavButton>
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
