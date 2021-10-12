import React, { useContext } from "react";
import styled from "styled-components";
import { SMALL_MARGIN } from "../../assets/styles/constants";
import { Frosted } from "../../assets/styles/styles";
import UnitContext from "../../contexts/Unit";
import { toggleUnit } from "../../utils/code-utils";

const UnitToggle = () => {
    const [unit, setUnit] = useContext(UnitContext);

    const handleClick = () => {
        setUnit(toggleUnit(unit));
    };

    return (
        <Container onClick={handleClick}>
            <Unit>{unit ? "°C" : "°F"}</Unit>
        </Container>
    );
};

export default UnitToggle;

const Container = styled.div`
    ${Frosted}

    width: 2em;
    height: 2em;
    padding: ${SMALL_MARGIN};
    transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);
    box-shadow: 0 0 1em rgba(58, 57, 57, 0.2);

    &:hover {
        background-color: rgba(0, 0, 0, 0.25);
        box-shadow: 0 0 1.5em rgba(58, 57, 57, 0.2);
    }
    &:active {
        background-color: rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 1.5em rgba(58, 57, 57, 0.3);
        border: none;
    }
    &:focus {
        background-color: rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 1.5em rgba(58, 57, 57, 0.3);
        border: none;
    }
`;

const Unit = styled.div`
    width: min-content;
    font-weight: bold;
    padding: ${SMALL_MARGIN};
    margin: ${SMALL_MARGIN};
    margin-left: 0.2em;
`;
