import { useContext, useEffect, useRef, useState } from "react";

import {
    cityPredictions,
    placeId2Coordinates,
} from "../../utils/location-utils";
import ILocation from "../../interfaces/location";
import LocationContext from "../../contexts/Location";
import {
    DEFAULT_LOCATION_CITY,
    DEFAULT_LOCATION_COORDINATES,
} from "../../const";

import styled from "styled-components";
import { Frosted, FrostedOpaque } from "../../assets/styles/styles";
import { SMALL_MARGIN } from "../../assets/styles/constants";
import { device } from "../../assets/styles/breakpoints";

const Search = () => {
    const [predictions, setPredictions] = useState({} as [ILocation]);
    const [dropDownActive, setDropDownActive] = useState(false);
    const [location, setLocation] = useContext(LocationContext);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current!.value = location.location[0] || DEFAULT_LOCATION_CITY;
    }, [location]);

    const fetchPredictions = async () => {
        if (!inputRef.current) return;
        setDropDownActive(true);
        setPredictions(
            (await cityPredictions(inputRef.current.value)) as [ILocation]
        );
    };

    const handleClickPrediction = async (location: ILocation) => {
        if (!location) return;
        location.coordinates =
            (await placeId2Coordinates(location.placeId)) ??
            DEFAULT_LOCATION_COORDINATES;
        setLocation(location);
        setDropDownActive(false);
        return;
    };

    return (
        <Container>
            <InputContainer>
                <i
                    style={{ padding: "4px", margin: "4px" }}
                    className="fas fa-map-marker-alt"
                />

                <Input
                    ref={inputRef}
                    type="text"
                    onFocus={() => {
                        setDropDownActive(true);
                        fetchPredictions();
                    }}
                    onBlur={() => {
                        setDropDownActive(false);
                    }}
                    onChange={fetchPredictions}
                />
            </InputContainer>
            {dropDownActive && predictions && predictions.length > 0 && (
                <PredictionList>
                    {predictions.map((location: ILocation) => (
                        <Prediction
                            key={location.locationFormatted}
                            onMouseDown={async () =>
                                await handleClickPrediction(location)
                            }
                        >
                            {location.locationFormatted}
                        </Prediction>
                    ))}
                </PredictionList>
            )}
        </Container>
    );
};

export default Search;

const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: start;
    flex-direction: column;
    max-width: min-content;
`;

const InputContainer = styled.div`
    ${Frosted}
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    height: 2em;

    padding: ${SMALL_MARGIN};

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

const Input = styled.input`
    font-size: 1em;
    cursor: text;
    padding: ${SMALL_MARGIN};

    background-color: transparent;
    border: none;
    outline: none;
    color: inherit;
    font-family: inherit;
    font-weight: inherit;
`;

const PredictionList = styled.ul`
    @media ${device.mobileS} {
        ${FrostedOpaque}
        top: 7em;
    }

    @media ${device.tablet} {
        ${Frosted}
        top: 3em;
    }

    padding: ${SMALL_MARGIN};
    position: absolute;
`;

const Prediction = styled.li`
    ${Frosted}

    background-color: transparent;

    list-style-type: none;
    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 1.5em rgba(58, 57, 57, 0.2);
    }
    &:active {
        background-color: rgba(0, 0, 0, 0.25);
        box-shadow: 0 0 1.5em rgba(58, 57, 57, 0.3);
        border: none;
    }
`;
