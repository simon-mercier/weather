import styled from "styled-components";
import { MorphDirection } from "../../../../assets/styles/animations";
import { Cloud1, Cloud2, Container } from "./AtomicIcons";

const OvercastJSX = () => {
    return (
        <Container>
            <Cloud2
                width={100}
                top={-15}
                left={-2}
                morphDirection={MorphDirection.LEFT}
                morphTime={500}
            />
            <Cloud1
                width={60}
                top={30}
                left={-10}
                morphDirection={MorphDirection.RIGHT}
                morphTime={200}
            />
            <Cloud2
                width={50}
                top={50}
                left={13}
                morphDirection={MorphDirection.RIGHT}
                morphTime={400}
            />
            <Cloud1
                width={80}
                top={20}
                left={40}
                morphDirection={MorphDirection.LEFT}
                morphTime={300}
            />
        </Container>
    );
};
const Overcast = styled(OvercastJSX)``;
export default Overcast;
