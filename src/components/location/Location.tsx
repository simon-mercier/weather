import { useCallback, useEffect, useState } from "react";
import ICoordinates from "../../interfaces/coordinates";
import { coordinates2LocationInfo } from "../../utils/location-utils";
import CurrentWeather from "../current-weather/CurrentWeather";
import NavBar from "../navbar/Navbar";
import LocationInfo from "../../contexts/location-info/LocationInfo";
import ILocationInfo from "../../interfaces/locationInfo";
import { DEFAULT_LOCATION } from "../../const";

const Location = () => {
    const [locationInfo, setLocationInfo] = useState(DEFAULT_LOCATION);

    const fetchLocationInfo = useCallback(async () => {
        setLocationInfo(
            (await coordinates2LocationInfo(
                locationInfo.coordinates
            )) as ILocationInfo
        );
    }, [locationInfo.coordinates.latitude, locationInfo.coordinates.longitude]);

    useEffect(() => {
        fetchLocationInfo();
    }, [fetchLocationInfo]);

    return (
        <LocationInfo.Provider value={locationInfo}>
            <NavBar />
            <CurrentWeather />
        </LocationInfo.Provider>
    );
};

export default Location;
