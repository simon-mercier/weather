import Coordinates from "../../interfaces/coordinates";
import LocationInfo from "../../interfaces/location-info";
import { useAppSelector } from "../../store";



const getGeolocation = async () : Promise<LocationInfo | undefined> => {
    return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
    }).then((coordinates) => {
        let coords = coordinates as GeolocationPosition;
        let latitude = coords.coords.latitude;
        let longitude = coords.coords.longitude;
        return { coordinates: { longitude: longitude, latitude: latitude } as Coordinates} as LocationInfo
    }).catch((error) => { console.error(error); return undefined; });
}

const Location = () => {
    const location = useAppSelector((state) => state.location.value)
    console.log("location is" + location);
    
    return (
        <></>
    )
}

export default Location

