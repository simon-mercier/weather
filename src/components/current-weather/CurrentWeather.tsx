import './CurrentWeather.scss';

import ILocationInfo from '../../interfaces/locationInfo'
import CurrentWeatherBackground from './CurrentWeatherBackground'
import { useLocationInfoContext } from '../../contexts/location-info/LocationInfo';
import ICurrentWeather from '../../interfaces/currentWeather';
import { coordinates2CurrentWeather } from '../../utils/weather-utils';
import { useEffect, useState, useCallback } from 'react';

const CurrentWeather = () => {
    const locationInfo: ILocationInfo = useLocationInfoContext();

    const [currentWeather, setCurrentWeather] = useState({} as ICurrentWeather);

    const fetchCurrentWeather = useCallback(
        async () => {
            //setCurrentWeather(await coordinates2CurrentWeather(locationInfo.coordinates) as ICurrentWeather);
            console.log("fetched weather");
        },
        [locationInfo],
    );

    useEffect(() => {
        fetchCurrentWeather();
    }, [fetchCurrentWeather]);

    
    
    return (
        <>
            <CurrentWeatherBackground />
            <div>{ currentWeather?.temperature?.feelsLike }</div>
        </>
       );
}
 

export default CurrentWeather;