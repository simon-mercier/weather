import styled from "styled-components";
import Snow_gif from "../../../assets/gif/snow.gif";
import Rain_gif from "../../../assets/gif/rain.gif";

const Gif = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    height: 100%;
    min-width: 100%;
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
