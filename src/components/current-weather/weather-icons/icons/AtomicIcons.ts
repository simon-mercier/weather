import styled from "styled-components";
import Cloud1_img from "../../../../assets/icons/cloud1.svg";
import Cloud2_img from "../../../../assets/icons/cloud2.svg";
import Sun_img from "../../../../assets/icons/sun.svg";
import Moon_img from "../../../../assets/icons/moon.svg";
import { Morph, MorphDirection } from "../../../../assets/styles/animations";

interface IconProps {
    width: number;
    top: number;
    left: number;
    morphDirection: MorphDirection;
    morphTime: number;
}
const Image = styled.img<IconProps>`
    position: absolute;
    width: ${(p) => p.width}rem;
    top: ${(p) => p.top}rem;
    left: ${(p) => p.left}rem;
    ${(p) => Morph(p.morphDirection, p.morphTime, 1)}
`;

export const Sun = styled(Image).attrs({
    src: Sun_img,
})``;

export const Moon = styled(Image).attrs({
    src: Moon_img,
})``;

export const Cloud1 = styled(Image).attrs({
    src: Cloud1_img,
})``;

export const Cloud2 = styled(Image).attrs({
    src: Cloud2_img,
})``;

export const Container = styled.div`
    position: absolute;
`;
