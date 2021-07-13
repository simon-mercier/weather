import ILocationInfo from "../../interfaces/locationInfo";
import { createContext, useContext } from "react";

const locationInfo = createContext<ILocationInfo>({} as ILocationInfo);

export const useLocationInfoContext = () => useContext(locationInfo);

export default locationInfo;
