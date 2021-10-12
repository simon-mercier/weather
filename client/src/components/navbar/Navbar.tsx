import styled from "styled-components";
import { Morph, MorphDirection } from "../../assets/styles/animations";
import Search from "../search/Search";
import UnitToggle from "../unit/UnitToggle";
import UserLocation from "../location/UserLocation";
import device from "../../assets/styles/breakpoints";
import { MARGIN } from "../../assets/styles/constants";

export default function NavBar() {
    return (
        <Container>
            <Title>beautiful weather🍂</Title>
            <NavItems>
                <SearchContainer>
                    <Search />
                </SearchContainer>
                <UserLocationContainer>
                    <UserLocation />
                </UserLocationContainer>
                <UnitToggleContainer>
                    <UnitToggle />
                </UnitToggleContainer>
            </NavItems>
        </Container>
    );
}

const Container = styled.nav`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    z-index: 99;

    min-width: 100vw;
    max-width: 100vw;

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
    margin: ${MARGIN};
    height: fit-content;
    ${Morph(MorphDirection.LEFT, 100)}
`;

const NavItems = styled.div`
    display: grid;
    grid-template-columns: auto 1fr 1fr;
    justify-items: center;
    width: min-content;
    place-items: center;
`;

const SearchContainer = styled.div`
    margin-top: 8px;
    margin-right: 8px;
    ${Morph(MorphDirection.RIGHT, 100)}
`;

const UserLocationContainer = styled.div`
    margin-top: 8px;
    margin-right: 8px;
    ${Morph(MorphDirection.RIGHT, 200)}
`;

const UnitToggleContainer = styled.div`
    margin-top: 8px;
    margin-right: 8px;
    ${Morph(MorphDirection.RIGHT, 300)}
`;
