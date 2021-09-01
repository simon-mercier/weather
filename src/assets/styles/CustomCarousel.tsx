import React from "react";
import {
    ArrowProps,
    ButtonGroupProps,
    DotProps,
} from "react-multi-carousel/lib/types";
import styled from "styled-components";

export const CustomLeftArrow = ({ onClick }: ArrowProps) => {
    return (
        <>
            {onClick && (
                <div onClick={() => onClick()}>
                    <i
                        className="fa fa-chevron-left fa-2x"
                        aria-hidden="true"
                    ></i>
                </div>
            )}
        </>
    );
};

export const CustomRightArrow = ({ onClick }: ArrowProps) => {
    return (
        <>
            {onClick && (
                <div onClick={() => onClick()}>
                    <i
                        className="fa fa-chevron-right fa-2x"
                        aria-hidden="true"
                    ></i>
                </div>
            )}
        </>
    );
};

export const CustomButtonGroup = ({ next, previous }: ButtonGroupProps) => {
    return (
        <ButtonGroup>
            <LeftArrow>
                {previous && <CustomLeftArrow onClick={() => previous()} />}
            </LeftArrow>

            <RightArrow>
                {next && <CustomRightArrow onClick={() => next()} />}
            </RightArrow>
        </ButtonGroup>
    );
};

export const CustomDot = ({
    index,
    active,
    onClick,
    carouselState,
}: DotProps) => {
    return (
        <>
            {onClick && (
                <li onClick={() => onClick()}>
                    {!active && (
                        <Dot>
                            <i className="fas fa-circle fa-sm"></i>
                        </Dot>
                    )}
                    {active && (
                        <FocusedDot>
                            <i className="fas fa-circle fa-sm"></i>
                        </FocusedDot>
                    )}
                </li>
            )}{" "}
        </>
    );
};

const ButtonGroup = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
`;

const LeftArrow = styled.div`
    position: absolute;
    top: 150px;
    left: -2%;
    opacity: 0.8;
`;

const RightArrow = styled.div`
    position: absolute;
    top: 150px;
    left: 92%;
    opacity: 0.8;
`;

const Dot = styled.div`
    margin: 8px;
    opacity: 0.2;
`;

const FocusedDot = styled(Dot)`
    opacity: 1;
`;
