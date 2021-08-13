import React, { useContext } from "react";

import TimeOfDayContext from "../../../../contexts/TimeOfDay";
import TimesOfDay from "../../../../enums/timesOfDay";

import { Cloud1, Container, Sun } from "./AtomicIcons";
import { MorphDirection } from "../../../../assets/styles/animations";
import styled from "styled-components";
const ClearJSX = () => {
    const timeOfDay: TimesOfDay = useContext(TimeOfDayContext);
    return (
        <Container>
            <Sun
                width={15}
                top={4}
                left={4}
                morphDirection={MorphDirection.LEFT}
                morphTime={200}
            />
            <Cloud1
                width={10}
                top={10}
                left={0}
                morphDirection={MorphDirection.RIGHT}
                morphTime={100}
            />
        </Container>
    );
};

const Clear = styled(ClearJSX)``;

export default Clear;
