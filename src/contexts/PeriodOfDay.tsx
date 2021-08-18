import { createContext } from "react";

import PeriodsOfDay from "../enums/periodsOfDay";

const PeriodOfDayContext = createContext<PeriodsOfDay>({} as PeriodsOfDay);

export default PeriodOfDayContext;
