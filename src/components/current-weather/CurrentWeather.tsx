import './CurrentWeather.scss';
import { useAppSelector } from '../../store';
import { coordinates2LocationInfo } from '../../utils/location-utils';
import Coordinates from '../../interfaces/coordinates'
import LocationInfo from '../../interfaces/location-info'
import { MutableRefObject, useCallback, useEffect, useRef } from 'react';




const CurrentWeather = () => {

    const location: Coordinates = useAppSelector((state) => state.location.value.coordinates);
    let locationInfo: MutableRefObject<LocationInfo> = useRef({ coordinates : location, city : undefined } as LocationInfo);

    const fetchLocationInfo = useCallback(async () => {
        locationInfo.current = await coordinates2LocationInfo(location) as LocationInfo;
    }, [location])

    useEffect(() => {
        fetchLocationInfo()
    },[fetchLocationInfo]);
    return (<div>
        {locationInfo.current.city}
        </div>);
}
 

export default CurrentWeather;