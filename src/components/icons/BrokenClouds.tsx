import React from "react";

import { Cloud1, Cloud2, Container } from "./AtomicIcons";
import { MorphDirection } from "../../assets/styles/animations";
import styled from "styled-components";

const BrokenCloudsJSX = () => {
    return (
        <Container>
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

const BrokenClouds = styled(BrokenCloudsJSX)``;
export default BrokenClouds;
