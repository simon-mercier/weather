import './CurrentWeather.scss';

import ILocationInfo from '../../interfaces/locationInfo'
import CurrentWeatherBackground from './CurrentWeatherBackground'
import { useLocationInfoContext } from '../../contexts/location-info/LocationInfo';

const CurrentWeather = () => {

    const locationInfo: ILocationInfo = useLocationInfoContext();
    return (
        <>
            <CurrentWeatherBackground />
            { locationInfo.city }
        </>
       );
}
 

export default CurrentWeather;