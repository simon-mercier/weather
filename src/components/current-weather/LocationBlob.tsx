import { Dispatch, SetStateAction, useContext } from "react";
import LocationWeatherBlob from "../../assets/svg/Asset 8.svg";
import Location from "../../classes/Location";
import LocationContext from "../../contexts/Location";
import Search from "../search/Search";
import "./LocationBlob.scss";

const LocationBlob = () => {
    const [location, setLocation]: [
        Location,
        Dispatch<SetStateAction<Location>>
    ] = useContext(LocationContext);

    return (
        <section className="location-container">
            <img className="location-blob" src={LocationWeatherBlob} />
            <div className="location-search">
                <div className="city">
                    <i className="fas fa-location-arrow"> </i>
                    <span className="city-text">
                        {" " + location.location.location[0]}
                    </span>
                </div>

                <div className="search-bar">
                    <Search />
                </div>
            </div>
        </section>
    );
};

export default LocationBlob;
