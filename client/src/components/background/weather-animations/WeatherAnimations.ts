import styled from "styled-components";
import Snow_gif from "../../../assets/gif/snow.gif";
import Rain_gif from "../../../assets/gif/rain.gif";

const Gif = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 0;
`;

export const RainGif = styled(Gif).attrs({
    src: Rain_gif,
})`
    opacity: 0.8;
`;

export const SnowGif = styled(Gif).attrs({
    src: Snow_gif,
})`
    opacity: 0.2;
`;
