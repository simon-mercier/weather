import React, { Dispatch, SetStateAction } from "react";
import { useContext } from "react";
import Location from "../../classes/Location";
import LocationContext from "../../contexts/Location";
import ICoordinates from "../../interfaces/coordinates";
import ILocation from "../../interfaces/location";
import {
    coordinates2ILocation,
    getUserCoordinates,
} from "../../utils/location-utils";

const UserLocation = () => {
    const [location, setLocation]: [
        Location,
        Dispatch<SetStateAction<Location>>
    ] = useContext(LocationContext);

    const handleClick = async () => {
        setLocation(
            new Location(
                (await coordinates2ILocation(
                    (await getUserCoordinates()) as ICoordinates
                )) as ILocation
            )
        );
    };

    return <div></div>;
};

export default UserLocation;
