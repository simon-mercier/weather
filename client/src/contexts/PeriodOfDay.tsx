import { createContext } from "react";

import PeriodOfDay from "../enums/periodOfDay";

const PeriodOfDayContext = createContext<PeriodOfDay>({} as PeriodOfDay);

export default PeriodOfDayContext;
