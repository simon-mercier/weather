import styled from "styled-components";
import Rain_gif from "../../../assets/gif/rain.gif";

const RainGif = styled.img.attrs({
    src: Rain_gif,
})`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 0;
`;

export default RainGif;
