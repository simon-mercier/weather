import React, { useContext } from "react";

import PeriodOfDayContext from "../../contexts/PeriodOfDay";
import PeriodsOfDay from "../../enums/periodsOfDay";

import { Cloud1, Cloud2, Container, Moon, Sun } from "./AtomicIcons";
import { MorphDirection } from "../../assets/styles/animations";
import styled from "styled-components";

const ScatteredCloudsJSX = () => {
    const periodOfDay: PeriodsOfDay = useContext(PeriodOfDayContext);
    return (
        <Container>
            {periodOfDay !== PeriodsOfDay.NIGHT ? (
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
            <Cloud2
                width={100}
                top={0}
                left={-10}
                morphDirection={MorphDirection.LEFT}
                morphTime={500}
            />

            <Cloud2
                width={50}
                top={65}
                left={15}
                morphDirection={MorphDirection.RIGHT}
                morphTime={400}
            />
            <Cloud1
                width={80}
                top={30}
                left={42}
                morphDirection={MorphDirection.LEFT}
                morphTime={300}
            />
        </Container>
    );
};

const ScattteredClouds = styled(ScatteredCloudsJSX)``;
export default ScattteredClouds;
