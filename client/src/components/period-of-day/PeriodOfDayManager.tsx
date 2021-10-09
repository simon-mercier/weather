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
import PeriodOfDayContext from "../../contexts/PeriodOfDay";
import PeriodsOfDay from "../../enums/periodsOfDay";
import WeatherManager from "../weather/WeatherManager";

const PeriodOfDayManager = () => {
    const [location, _]: [Location, Dispatch<SetStateAction<Location>>] =
        useContext(LocationContext);

    const [periodOfDay, setPeriodOfDay] = useState(PeriodsOfDay.DAY);

    const fetchCurrentPeriodOfDay = useCallback(async () => {
        setPeriodOfDay((await location.getPeriodOfDay()) ?? PeriodsOfDay.DAY);
    }, [location]);

    useEffect(() => {
        fetchCurrentPeriodOfDay();
    }, [fetchCurrentPeriodOfDay]);

    return (
        <PeriodOfDayContext.Provider value={periodOfDay}>
            {periodOfDay && <WeatherManager />}
        </PeriodOfDayContext.Provider>
    );
};

export default PeriodOfDayManager;
