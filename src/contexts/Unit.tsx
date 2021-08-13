import { createContext } from "react";
import ICurrentWeather from "../interfaces/currentWeather";

const UnitContext = createContext<ICurrentWeather>({} as ICurrentWeather);

export default UnitContext;
