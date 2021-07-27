import ICoordinates from "../interfaces/coordinates";

export const coordinates2Time = async (
    coordinates: ICoordinates
): Promise<Date | undefined> => {
    if (!coordinates) return undefined;
    return await fetch(
        `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/timezone/json?location=${coordinates.latitude},${coordinates.longitude}&timestamp=0&key=AIzaSyBUO0kTfhpr4poz-VPZICMJ3202GglTlPA`
    )
        .then((res) => res.json())
        .then(
            (result) => {
                return new Date(result);
            },
            (error) => {
                console.error(error);
                return undefined;
            }
        );
};

function calcTime(city, offset) {
    // create Date object for current location
    var d = new Date();

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + d.getTimezoneOffset() * 60000;

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + 3600000 * offset);

    // return time as a string
    return "The local time for city" + city + " is " + nd.toLocaleString();
}
