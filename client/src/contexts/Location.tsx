import { Dispatch, SetStateAction, createContext } from "react";
import ILocation from "../interfaces/location";

const LocationContext = createContext<
    [ILocation, Dispatch<SetStateAction<ILocation>>]
>([{} as ILocation, () => null]);

export default LocationContext;
