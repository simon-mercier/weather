import styled from "styled-components";
import { MorphDirection } from "../../assets/styles/animations";
import { Cloud1, Cloud2, Container } from "./AtomicIcons";

const OvercastJSX = () => {
    return (
        <Container>
            <Cloud2
                width={100}
                top={0}
                left={0}
                morphDirection={MorphDirection.LEFT}
                morphTime={500}
            />
            <Cloud1
                width={60}
                top={45}
                left={-8}
                morphDirection={MorphDirection.LEFT}
                morphTime={200}
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
                morphDirection={MorphDirection.RIGHT}
                morphTime={300}
            />
        </Container>
    );
};
const Overcast = styled(OvercastJSX)``;
export default Overcast;
