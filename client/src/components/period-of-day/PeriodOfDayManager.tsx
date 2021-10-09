import React, { useCallback, useContext, useEffect, useState } from "react";
import LocationContext from "../../contexts/Location";
import PeriodOfDayContext from "../../contexts/PeriodOfDay";
import PeriodsOfDay from "../../enums/periodsOfDay";
import { coordinates2PeriodOfDay } from "../../utils/period-of-day-manager";
import WeatherManager from "../weather/WeatherManager";

const PeriodOfDayManager = () => {
    const [location, _] = useContext(LocationContext);

    const [periodOfDay, setPeriodOfDay] = useState(PeriodsOfDay.DAY);

    const fetchCurrentPeriodOfDay = useCallback(async () => {
        setPeriodOfDay(
            (await coordinates2PeriodOfDay(location.coordinates)) ??
                PeriodsOfDay.DAY
        );
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
