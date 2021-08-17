import TimeOfDayContext from "../../../../contexts/TimeOfDay";
import TimesOfDay from "../../../../enums/timesOfDay";

import { useContext } from "react";
import styled from "styled-components";
import { Cloud1, Cloud2, Container, Moon, Sun } from "./AtomicIcons";
import { MorphDirection } from "../../../../assets/styles/animations";
const FewCloudsJSX = () => {
    const timeOfDay: TimesOfDay = useContext(TimeOfDayContext);
    return (
        <Container>
            {timeOfDay !== TimesOfDay.NIGHT ? (
                <Sun
                    width={15}
                    top={-5}
                    left={5}
                    morphDirection={MorphDirection.LEFT}
                    morphTime={300}
                />
            ) : (
                <Moon
                    width={15}
                    top={-5}
                    left={5}
                    morphDirection={MorphDirection.LEFT}
                    morphTime={300}
                />
            )}
            <Cloud1
                width={20}
                top={0}
                left={0}
                morphDirection={MorphDirection.LEFT}
                morphTime={200}
            />
            <Cloud2
                width={30}
                top={5}
                left={5}
                morphDirection={MorphDirection.RIGHT}
                morphTime={100}
            />
        </Container>
    );
};
const FewClouds = styled(FewCloudsJSX)``;
export default FewClouds;
