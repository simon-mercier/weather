import styled from "styled-components";
import device from "../../assets/styles/breakpoints";

export default function NavItem() {
    return <Container></Container>;
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
