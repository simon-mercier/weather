import React, { useContext } from "react";

import TimeOfDayContext from "../../contexts/TimeOfDay";
import TimesOfDay from "../../enums/timesOfDay";

import { Cloud1, Container, Moon, Sun } from "./AtomicIcons";
import { MorphDirection } from "../../assets/styles/animations";
import styled from "styled-components";
const ClearJSX = () => {
    const timeOfDay: TimesOfDay = useContext(TimeOfDayContext);
    return (
        <Container>
            {timeOfDay !== TimesOfDay.NIGHT ? (
                <Sun
                    width={100}
                    top={0}
                    left={0}
                    morphDirection={MorphDirection.LEFT}
                    morphTime={200}
                />
            ) : (
                <Moon
                    width={100}
                    top={0}
                    left={10}
                    morphDirection={MorphDirection.LEFT}
                    morphTime={200}
                />
            )}

            <Cloud1
                width={70}
                top={50}
                left={60}
                morphDirection={MorphDirection.RIGHT}
                morphTime={100}
            />
        </Container>
    );
};

const Clear = styled(ClearJSX)``;

export default Clear;
