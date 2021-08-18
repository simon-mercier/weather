import { createContext } from "react";

import PeriodsOfDay from "../enums/periods-of-day";

const PeriodOfDayContext = createContext<PeriodsOfDay>({} as PeriodsOfDay);

export default PeriodOfDayContext;
