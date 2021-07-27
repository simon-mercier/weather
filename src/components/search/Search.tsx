import {
    Dispatch,
    MouseEvent,
    SetStateAction,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import styled from "styled-components";
import "./Search.scss";

import { cityPredictions } from "../../utils/location-utils";
import ILocation from "../../interfaces/location";
import LocationContext from "../../contexts/Location";
import { DEFAULT_LOCATION_CITY } from "../../const";

import Location from "../../classes/Location";

export const Input = styled.div``;

const Search = () => {
    const [predictions, setPredictions] = useState({} as [ILocation]);
    const [dropDownActive, setDropDownActive] = useState(false);
    const [location, setLocation]: [
        Location,
        Dispatch<SetStateAction<Location>>
    ] = useContext(LocationContext);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current!.value =
            location.location.location[0] || DEFAULT_LOCATION_CITY;
    }, [location]);

    const fetchPredictions = async () => {
        if (!inputRef.current) return;
        setDropDownActive(true);
        setPredictions(
            (await cityPredictions(inputRef.current.value)) as [ILocation]
        );
    };

    const handleClickPrediction = (location: ILocation) => {
        if (!location) return;
        setLocation(new Location(location));
        setDropDownActive(false);
        return;
    };

    return (
        <section className="search-with-dropdown">
            <div className="input-with-icon">
                <i className="fas fa-location-arrow"> </i>
                <input
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
            </div>
            {dropDownActive && predictions && predictions.length > 0 && (
                <ul>
                    {predictions.map((location: ILocation) => (
                        <li
                            key={location.locationFormatted}
                            onMouseDown={() => handleClickPrediction(location)}
                        >
                            {location.locationFormatted}
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};

export default Search;
