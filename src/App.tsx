import { useCallback, useEffect, useRef } from 'react';
import './App.scss';
import CurrentWeather from './components/current-weather/CurrentWeather';
import CurrentWeatherBackground from './components/current-weather/CurrentWeatherBackground';
import NavBar from './components/navbar/Navbar';
import './components/navbar/Navbar.tsx'
import LocationInfo from './contexts/location-info/LocationInfo';
import ICoordinates from './interfaces/coordinates';
import ILocationInfo from './interfaces/locationInfo';
import { coordinates2LocationInfo } from './utils/location-utils';

function App() {
    let locationInfo = useRef({ coordinates: { longitude: -73.561668, latitude: 45.508888 } as ICoordinates } as ILocationInfo);
    const fetchLocationInfo = useCallback(async () => {
        locationInfo.current = await coordinates2LocationInfo(locationInfo.current.coordinates) as ILocationInfo;
    }, [locationInfo.current.coordinates])

    useEffect(() => {
        fetchLocationInfo()
    }, [fetchLocationInfo]);

    return (
        <>
            <LocationInfo.Provider value={ locationInfo.current }>
                <NavBar />
                <CurrentWeather />
            </LocationInfo.Provider> 
        </>
        
    );
}

export default App;
