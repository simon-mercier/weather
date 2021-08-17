import React, { useContext } from "react";

import TimeOfDayContext from "../../../../contexts/TimeOfDay";
import TimesOfDay from "../../../../enums/timesOfDay";

import { Cloud1, Cloud2, Container, Moon, Sun } from "./AtomicIcons";
import { MorphDirection } from "../../../../assets/styles/animations";
import styled from "styled-components";

const ScatteredCloudsJSX = () => {
    const timeOfDay: TimesOfDay = useContext(TimeOfDayContext);
    return (
        <Container>
            {timeOfDay !== TimesOfDay.NIGHT ? (
                <Sun
                    width={15}
                    top={-3}
                    left={5}
                    morphDirection={MorphDirection.LEFT}
                    morphTime={500}
                />
            ) : (
                <Moon
                    width={15}
                    top={-3}
                    left={5}
                    morphDirection={MorphDirection.LEFT}
                    morphTime={500}
                />
            )}
            <Cloud2
                width={10}
                top={10}
                left={0}
                morphDirection={MorphDirection.RIGHT}
                morphTime={400}
            />
            <Cloud2
                width={10}
                top={2}
                left={13}
                morphDirection={MorphDirection.LEFT}
                morphTime={100}
            />
            <Cloud1
                width={20}
                top={0}
                left={0}
                morphDirection={MorphDirection.RIGHT}
                morphTime={300}
            />
        </Container>
    );
};

const ScattteredClouds = styled(ScatteredCloudsJSX)``;
export default ScattteredClouds;
