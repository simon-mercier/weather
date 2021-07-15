import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useLocationInfoContext } from "../../contexts/location-info/LocationInfo";
import "./Search.scss";
import ILocationInfo from "../../interfaces/locationInfo";
import { DEFAULT_LOCATION } from "../../const";
import { cityAutocomplete } from "../../utils/location-utils";

export const Input = styled.div``;

const Search = () => {
    const [predictions, setPredictions] = useState([]);
    const [dropDownActive, setDropDownActive] = useState(false);
    const locationInfo: ILocationInfo = useLocationInfoContext();

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current!.value =
            locationInfo.city || (DEFAULT_LOCATION.city as string);
    }, [locationInfo]);

    const fetchAutocomplete = useCallback(async () => {
        setPredictions((await cityAutocomplete(inputRef.current!.value)) as []);
        console.log(predictions);
    }, []);

    const handleChange = () => {
        return;
    };

    useEffect(() => {
        fetchAutocomplete();
    }, [handleChange]);

    const handleClick = () => {
        setDropDownActive(!dropDownActive);
        return;
    };

    return (
        <>
            <div className="input-with-icon">
                <i className="fas fa-location-arrow"> </i>
                <input
                    ref={inputRef}
                    type="text"
                    onFocus={handleClick}
                    onBlur={handleClick}
                    onChange={handleChange}
                />
            </div>

            {dropDownActive && (
                <ul>
                    <li>{predictions}</li>
                    <li>Hey</li>
                    <li>Hey</li>
                </ul>
            )}
        </>
    );
};

export default Search;
