import Coordinates from "../interfaces/coordinates";
import LocationInfo from "../interfaces/location-info";


export const coordinate2City = (coordinate: Coordinates): LocationInfo | undefined => {
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coordinate.latitude}&longitude=${coordinate.longitude}&localityLanguage=en`)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
            },
            (error) => {
                console.error(error);
                return undefined;
            }
    )
    return undefined;
}