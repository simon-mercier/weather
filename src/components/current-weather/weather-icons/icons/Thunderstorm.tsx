import styled from "styled-components";
import { MorphDirection } from "../../../../assets/styles/animations";
import { Cloud1, Cloud2, Container } from "./AtomicIcons";
const TunderstormJSX = () => {
    return (
        <Container>
            <Cloud2
                width={10}
                top={7}
                left={-3}
                morphDirection={MorphDirection.LEFT}
                morphTime={500}
            />
            <Cloud2
                width={10}
                top={2}
                left={13}
                morphDirection={MorphDirection.RIGHT}
                morphTime={400}
            />
            <Cloud1
                width={15}
                top={5}
                left={5}
                morphDirection={MorphDirection.LEFT}
                morphTime={300}
            />
            <Cloud1
                width={20}
                top={0}
                left={0}
                morphDirection={MorphDirection.RIGHT}
                morphTime={200}
            />
            <Cloud2
                width={30}
                top={5}
                left={5}
                morphDirection={MorphDirection.LEFT}
                morphTime={100}
            />
        </Container>
    );
};
const Tunderstorm = styled(TunderstormJSX)``;
export default Tunderstorm;
