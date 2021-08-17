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
            <Title>beautiful weather 🍂</Title>
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
    position: absolute;
    width: 100%;
    z-index: 99;

    @media ${device.mobileS} {
        justify-content: center;
    }

    @media ${device.tablet} {
        justify-content: space-between;
    }
`;

const Title = styled.div`
    font-size: 2rem;
    margin: ${MARGIN};
    height: fit-content;
    ${Morph(MorphDirection.LEFT, 100)}
`;

const NavItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`;

const SearchContainer = styled.div`
    margin-top: 4px;
    margin-right: 20px;

    width: fit-content;
    ${Morph(MorphDirection.RIGHT, 100)}

    @media ${device.mobileS} {
        max-width: 15rem;
    }

    @media ${device.tablet} {
        max-width: 20rem;
    }
`;

const UserLocationContainer = styled.div`
    margin-top: 8px;
    margin-right: 4px;
    ${Morph(MorphDirection.RIGHT, 200)}
`;

const UnitToggleContainer = styled.div`
    margin-top: 8px;
    margin-right: 8px;
    ${Morph(MorphDirection.RIGHT, 300)}
`;
