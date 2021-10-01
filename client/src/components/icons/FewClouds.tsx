import PeriodOfDayContext from "../../contexts/PeriodOfDay";
import PeriodsOfDay from "../../enums/periodsOfDay";

import { useContext } from "react";
import styled from "styled-components";
import { Cloud1, Cloud2, Container, Moon, Sun } from "./AtomicIcons";
import { MorphDirection } from "../../assets/styles/animations";
const FewCloudsJSX = () => {
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
                top={50}
                left={30}
                morphDirection={MorphDirection.LEFT}
                morphTime={500}
            />
            <Cloud1
                width={60}
                top={45}
                left={-8}
                morphDirection={MorphDirection.RIGHT}
                morphTime={200}
            />
        </Container>
    );
};
const FewClouds = styled(FewCloudsJSX)``;
export default FewClouds;
