import { useCallback, useEffect, useState } from "react";
import ICoordinates from "../../interfaces/coordinates";
import CurrentWeather from "../current-weather/CurrentWeather";
import NavBar from "../navbar/Navbar";
import { DEFAULT_LOCATION, DEFAULT_LOCATION_COORDINATES } from "../../const";
import LocationContext from "../../contexts/Location";
import LocationCoordinatesContext from "../../contexts/LocationCoordinates";
import Location from "../../classes/Location";

const LocationManager = ({}) => {
    // const [locationCoordinates, setLocationCoordinates] = useState(
    //     DEFAULT_LOCATION_COORDINATES
    // );
    const [location, setLocation] = useState(new Location(DEFAULT_LOCATION));

    // const fetchLocationInfo = useCallback(async () => {
    //     setLocation(
    //         (await coordinates2LocationInfo(
    //             locationCoordinates
    //         )) as ILocationInfo
    //     );
    // }, [locationCoordinates]);

    // useEffect(() => {
    //     fetchLocationInfo();
    // }, [fetchLocationInfo]);

    return (
        <LocationContext.Provider value={[location, setLocation]}>
            {/* <LocationCoordinatesContext.Provider value={setLocationCoordinates}> */}
            <NavBar />
            <CurrentWeather />
            {/* </LocationCoordinatesContext.Provider> */}
        </LocationContext.Provider>
    );
};

export default LocationManager;
