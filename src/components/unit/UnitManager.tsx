import React, { useState } from "react";

import UnitContext from "../../contexts/Unit";
import UnitType from "../../enums/unit";
import TimeOfDay from "../time-of-day/TimeOfDay";
const UnitManager = () => {
    const [unit, setUnit] = useState(UnitType.C);

    return (
        <UnitContext.Provider value={[unit, setUnit]}>
            <TimeOfDay />
        </UnitContext.Provider>
    );
};

export default UnitManager;
