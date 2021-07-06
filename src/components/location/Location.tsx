import React, { useEffect, useState } from 'react'

const getGeolocation = () : GeolocationPosition | undefined => {
    let location: GeolocationPosition | undefined = undefined;
    navigator.geolocation.getCurrentPosition((position) => location = position);
    return location;
}

const Location = () => {
    const [localLocation, setLocalLocation] = useState({
        localLocation: GeolocationPosition,
    });

    const [searchedLocation, setSearchedLocation] = useState({
        localLocation: GeolocationPosition,
    });

    // useEffect(() => {
    //     setLocation
    // }, [])
    
    return (
        <></>
    )
}

export default Location

