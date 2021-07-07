import React, { useEffect, useState } from 'react'

const getGeolocation = () : GeolocationPosition | undefined => {
    let location: GeolocationPosition | undefined = undefined;
    navigator.geolocation.getCurrentPosition((position) => location = position);
    return location;
}

const Location = () => {
    return (
        <></>
    )
}

export default Location

