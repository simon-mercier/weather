import { css, keyframes } from "styled-components";

export enum MorphDirection {
    BOTTOM,
    RIGHT,
    LEFT,
    UP,
}

export const Morph = (
    direction: MorphDirection,
    from: number,
    delay: number = 0
) =>
    css`
        visibility: hidden;

        animation: ${(MorphDirection2Keyframe.get(direction) as Function)(
            from
        )};

        animation-delay: ${delay}s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in-out;
        animation-duration: 2s;
    `;

const MorphBottom = (from: number) => keyframes`
    from {
        transform: translateY(${from}vh);
        visibility: hidden;
    }

    to {
        transform: translateY(0);
        visibility: visible;
    }
`;
const MorphUp = (from: number) => keyframes`
    from {
        transform: translateY(-${from}vh);
        visibility: hidden;
    }

    to {
        transform: translateY(0);
        visibility: visible;
    }
`;
const MorphLeft = (from: number) => keyframes`
    from {
        transform: translateX(${-1 * from}vw);
        visibility: hidden;
    }

    to {
        transform: translateX(0);
        visibility: visible;
    }
`;

const MorphRight = (from: number) => keyframes`
    from {
        transform: translateX(${from}vw);
        visibility: hidden;
    }

    to {
        transform: translateX(0);
        visibility: visible;
    }
`;

const MorphDirection2Keyframe = new Map<MorphDirection, Function>([
    [MorphDirection.BOTTOM, MorphBottom],
    [MorphDirection.UP, MorphUp],
    [MorphDirection.RIGHT, MorphRight],
    [MorphDirection.LEFT, MorphLeft],
]);

export const CloudAnim = keyframes`
        0% {
            left: -100%;
        }
        100% {
            left: 100%;
        }
    `;
