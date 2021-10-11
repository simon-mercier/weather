import React, { useState } from "react";

import UnitContext from "../../contexts/Unit";
import UnitType from "../../enums/unit";
import WeatherManager from "../weather/WeatherManager";
const UnitManager = () => {
    const [unit, setUnit] = useState(UnitType.C);

    return (
        <UnitContext.Provider value={[unit, setUnit]}>
            <WeatherManager />
        </UnitContext.Provider>
    );
};

export default UnitManager;
