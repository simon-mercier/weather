import { createContext, Dispatch, SetStateAction } from "react";
import Location from "../classes/Location";

const LocationContext = createContext<
    [Location, Dispatch<SetStateAction<Location>>]
>([{} as Location, () => null]);

export default LocationContext;
