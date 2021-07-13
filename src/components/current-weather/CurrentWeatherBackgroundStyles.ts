import { random, randomMinMax } from "../../utils/code-utils";
import styled, { keyframes } from "styled-components";

const MAX_ANIMATION_TIME = 1000;
interface CloudProps {
    source: any;
    distance: Distance;
}

export enum Distance {
    CLOSE,
    MEDIUM,
    FAR,
}

enum RangeProperty {
    DURATION,
    WIDTH,
    OPACITY,
    HEIGHT,
}

type Range = [number, number];

const distance2Range = new Map<Distance, any>([
    [
        Distance.CLOSE,
        [
            [350, 500],
            [25, 35],
            [90, 97],
            [-15, 60],
        ],
    ],
    [
        Distance.MEDIUM,
        [
            [750, 1250],
            [20, 15],
            [70, 80],
            [0, 30],
        ],
    ],
    [
        Distance.FAR,
        [
            [2000, 3000],
            [15, 7],
            [50, 60],
            [10, 20],
        ],
    ],
]);

const translateLeftAnim = keyframes`
        0% {
            left: -35%;
        }
        100% {
            left: 100%;
        }`;

export const Cloud = styled.img`
    content: url(${(props: CloudProps) => props.source});
    position: absolute;
    left: -35%;
    opacity: ${(props: CloudProps) =>
        randomRange(RangeProperty.OPACITY, props.distance)}%;
    width: ${(props: CloudProps) =>
        randomRange(RangeProperty.WIDTH, props.distance)}vw;
    top: ${(props: CloudProps) =>
        randomRange(RangeProperty.HEIGHT, props.distance)}vh;
    animation: ${translateLeftAnim}
        ${(props: CloudProps) =>
            randomRange(RangeProperty.DURATION, props.distance)}s
        linear -${() => randomDelay()}s infinite;
`;

const randomRange = (prop: RangeProperty, distance: Distance) => {
    const range: Range = distance2Range.get(distance)[prop] as Range;
    return randomMinMax(range[0], range[1]);
};

const randomDelay = () => random(MAX_ANIMATION_TIME);
