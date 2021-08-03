import { useState } from "react";

import CurrentWeather from "../current-weather/CurrentWeather";
import NavBar from "../navbar/Navbar";
import { DEFAULT_LOCATION } from "../../const";
import LocationContext from "../../contexts/Location";

import Location from "../../classes/Location";
import TimeOfDay from "../time-of-day/TimeOfDay";

const LocationManager = ({}) => {
    const [location, setLocation] = useState(new Location(DEFAULT_LOCATION));
    return (
        <LocationContext.Provider value={[location, setLocation]}>
            <TimeOfDay></TimeOfDay>
        </LocationContext.Provider>
    );
};

export default LocationManager;