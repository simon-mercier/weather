import React, { Dispatch, SetStateAction } from "react";
import { useContext } from "react";
import styled from "styled-components";
import { SMALL_MARGIN } from "../../assets/styles/constants";
import { Frosted } from "../../assets/styles/styles";
import Location from "../../classes/Location";
import LocationContext from "../../contexts/Location";
import ICoordinates from "../../interfaces/coordinates";
import ILocation from "../../interfaces/location";
import {
    coordinates2ILocation,
    getUserCoordinates,
} from "../../utils/location-utils";

const UserLocation = () => {
    const [_, setLocation]: [Location, Dispatch<SetStateAction<Location>>] =
        useContext(LocationContext);

    const handleClick = async () => {
        setLocation(
            new Location(
                (await coordinates2ILocation(
                    (await getUserCoordinates()) as ICoordinates
                )) as ILocation
            )
        );
    };

    return (
        <Container onClick={handleClick}>
            <Icon>
                <i className="fas fa-location-arrow" />
            </Icon>
        </Container>
    );
};

export default UserLocation;

const Container = styled.div`
    ${Frosted}

    width: 2em;
    height: 2em;
    padding: ${SMALL_MARGIN};
    margin: ${SMALL_MARGIN};
    transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);
    box-shadow: 0 0 1em rgba(58, 57, 57, 0.2);

    &:hover {
        background-color: rgba(0, 0, 0, 0.25);
        box-shadow: 0 0 1.5em rgba(58, 57, 57, 0.2);
    }
    &:active {
        background-color: rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 1.5em rgba(58, 57, 57, 0.3);
        border: none;
    }
    &:focus {
        background-color: rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 1.5em rgba(58, 57, 57, 0.3);
        border: none;
    }
`;

const Icon = styled.div`
    width: min-content;
    padding: ${SMALL_MARGIN};
    margin: ${SMALL_MARGIN};
`;
