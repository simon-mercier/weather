import { useEffect, useState } from "react";

import { DEFAULT_LOCATION } from "../../const";
import LocationContext from "../../contexts/Location";

import Location from "../../classes/Location";

import { setInterval } from "timers";
import UnitManager from "../unit/UnitManager";

const LocationManager = () => {
    const [location, setLocation] = useState(new Location(DEFAULT_LOCATION));
    const TEN_MINUTES = 600000;
    useEffect(() => {
        setInterval(() => {
            setLocation(Object.assign({}, location));
        }, TEN_MINUTES);
    }, []);

    return (
        <LocationContext.Provider value={[location, setLocation]}>
            {location && <UnitManager />}
        </LocationContext.Provider>
    );
};

export default LocationManager;
