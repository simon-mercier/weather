import { createContext } from "react";

import TimesOfDay from "../enums/timesOfDay";

const TimeOfDayContext = createContext<TimesOfDay>({} as TimesOfDay);

export default TimeOfDayContext;
