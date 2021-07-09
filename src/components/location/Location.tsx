import { useCallback, useEffect, useRef, useState } from 'react'
import ICoordinates from '../../interfaces/coordinates';
import { coordinates2LocationInfo } from '../../utils/location-utils';
import CurrentWeather from '../current-weather/CurrentWeather';
import NavBar from '../navbar/Navbar';
import LocationInfo from '../../contexts/location-info/LocationInfo';
import ILocationInfo from '../../interfaces/locationInfo';

const Location = (props:any) => {
    const [ locationInfo, setLocationInfo ] = useState({ coordinates: { longitude: -73.561668, latitude: 45.508888 } as ICoordinates } as ILocationInfo) 
        
    const fetchLocationInfo = useCallback(async () => {
        setLocationInfo(await coordinates2LocationInfo(locationInfo.coordinates) as ILocationInfo);
    }, [locationInfo.coordinates.latitude, locationInfo.coordinates.longitude])

    useEffect(() => {
        fetchLocationInfo()
    }, [fetchLocationInfo]);

    return (
        <LocationInfo.Provider value={locationInfo}>
            <NavBar />
            <CurrentWeather />
        </LocationInfo.Provider>
    )
}

export default Location


    