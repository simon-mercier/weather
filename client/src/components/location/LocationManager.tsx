import { useEffect, useState } from "react";

import { DEFAULT_LOCATION } from "../../const";
import LocationContext from "../../contexts/Location";

import { setInterval } from "timers";
import UnitManager from "../unit/UnitManager";

const LocationManager = () => {
    const [location, setLocation] = useState(
        JSON.parse(
            localStorage.getItem("location") ?? JSON.stringify(DEFAULT_LOCATION)
        )
    );

    useEffect(() => {
        localStorage.setItem("location", JSON.stringify(location));
    }, [location]);

    const FIVE_MINUTES = 300000;
    useEffect(() => {
        setInterval(() => {
            setLocation(Object.assign({}, location));
        }, FIVE_MINUTES);
    }, []);

    return (
        <LocationContext.Provider value={[location, setLocation]}>
            {location && <UnitManager />}
        </LocationContext.Provider>
    );
};

export default LocationManager;
