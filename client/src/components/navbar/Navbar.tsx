import styled from "styled-components";
import Search from "../search/Search";
import NavItems from "../navitems/NavItems";
import UnitToggle from "../unit/UnitToggle";
import UserLocation from "../location/UserLocation";
import { device } from "../../assets/styles/breakpoints";
import { BIG_MARGIN, MARGIN } from "../../assets/styles/constants";
import { useEffect, useState } from "react";
export default function NavBar() {
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    console.log(dimensions);
    const handleResize = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };
    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
    }, []);

    return (
        <Container>
            <Title>beautiful weather🍂</Title>
            {dimensions.width >= 1024 && <NavItems />}
            <Settings>
                <SearchContainer>
                    <Search />
                </SearchContainer>

                <UserLocationContainer>
                    <UserLocation />
                </UserLocationContainer>
                <UnitToggleContainer>
                    <UnitToggle />
                </UnitToggleContainer>
            </Settings>
        </Container>
    );
}

const Container = styled.nav`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 99;

    min-width: 100vw;
    max-width: 100vw;
    width: 100vw;

    @media ${device.mobileS} {
        justify-content: center;
        position: absolute;
    }

    @media ${device.tablet} {
        justify-content: space-between;
        position: fixed;
    }
`;

const Title = styled.div`
    font-size: 2em;
    font-weight: bold;
    margin: ${MARGIN} ${MARGIN} ${MARGIN} ${BIG_MARGIN};
    height: fit-content;
    font-family: "Walbaum Display SemiBold";
`;

const Settings = styled.div`
    display: flex;
    grid-template-columns: auto 1fr 1fr;
    justify-items: flex-start;
    width: min-content;
`;

const SearchContainer = styled.div`
    margin: 8px;
`;

const UserLocationContainer = styled.div`
    margin: 8px;
`;

const UnitToggleContainer = styled.div`
    margin: 8px;
`;
