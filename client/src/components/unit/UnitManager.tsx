import React, { useState } from "react";

import UnitContext from "../../contexts/Unit";
import UnitType from "../../enums/unit";
import PeriodOfDayManager from "../period-of-day/PeriodOfDayManager";
const UnitManager = () => {
    const [unit, setUnit] = useState(UnitType.C);

    return (
        <UnitContext.Provider value={[unit, setUnit]}>
            <PeriodOfDayManager />
        </UnitContext.Provider>
    );
};

export default UnitManager;
