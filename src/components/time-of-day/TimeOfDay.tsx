import React, {
    Dispatch,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { SetStateAction } from "react";
import Location from "../../classes/Location";
import LocationContext from "../../contexts/Location";
import TimeOfDayContext from "../../contexts/TimeOfDay";
import TimesOfDay from "../../enums/timesOfDay";
import CurrentWeather from "../current-weather/CurrentWeather";
import NavBar from "../navbar/Navbar";

const TimeOfDay = () => {
    const [location, _]: [Location, Dispatch<SetStateAction<Location>>] =
        useContext(LocationContext);

    const [timeOfDay, setTimeOfDay] = useState(TimesOfDay.DAY);

    const fetchCurrentTimeOfDay = useCallback(async () => {
        setTimeOfDay((await location.getTimeOfDay()) ?? TimesOfDay.DAY);
    }, [location]);

    useEffect(() => {
        fetchCurrentTimeOfDay();
    }, [fetchCurrentTimeOfDay]);

    return (
        <TimeOfDayContext.Provider value={timeOfDay}>
            <NavBar />
            <CurrentWeather />
        </TimeOfDayContext.Provider>
    );
};

export default TimeOfDay;
